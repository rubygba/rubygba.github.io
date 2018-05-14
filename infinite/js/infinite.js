/**
 * get the first scroll parent of an element
 * @param {DOM} elm the element which find scorll parent
 * @return {DOM} the first scroll parent
 */
function getScrollParent(elm) {
  if (elm.tagName === 'BODY') {
    return window
  } else if (['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {
    return elm
  }
  return getScrollParent(elm.parentNode)
}

/**
 * get current distance from footer
 * @param {DOM} elm scroll element
 * @param {String} dir calculate direction
 * @return {Number} distance
 */
function getCurrentDistance(elm, thisElm, dir) {
  var distance
  var scrollTop = isNaN(elm.scrollTop) ? elm.pageYOffset : elm.scrollTop
  if (dir === 'top') {
    distance = scrollTop
  } else {
    var scrollElmHeight = elm === window ? window.innerHeight : elm.getBoundingClientRect().height
    distance = thisElm.offsetTop - scrollTop - scrollElmHeight - (elm.offsetTop || 0)
  }
  return distance
}

/**
 * Class Infinite
 */
function infinite(elm, func) {
  this.scrollParent = null
  this.scrollHandler = null
  this.isLoading = false
  this.isComplete = false
  this.isFirstLoad = true // save the current loading whether it is the first loading
  this.lastTimer = 0
  this.scrollParent = getScrollParent(elm)
  this.thisElm = elm

  this.INTERVAL = 1000 // minimum interval(ms) between request
  this.distance = 100
  this.onInfinite = func
  this.spinner = 'null'
  this.direction = 'bottom'

  this.scrollHandler = function scrollHandlerOriginal() {
    if (!this.isLoading) {
      this.attemptLoad()
    }
  }.bind(this)
  setTimeout(this.scrollHandler, 1)
  this.scrollParent.addEventListener('scroll', this.scrollHandler)
}
infinite.prototype = {
  attemptLoad: function() {
    var currentDistance = getCurrentDistance.bind(this)(this.scrollParent, this.thisElm, this.direction)
    var currentInterval = new Date().getTime() - this.lastTimer

    console.log('dis:', currentDistance)
    console.log('timer:', currentInterval)

    var scope = this
    if (!scope.isComplete && currentInterval > scope.INTERVAL && currentDistance <= scope.distance) {
      scope.onInfinite.call()
      // scope.lastTimer = new Date().getTime()
    } else {
      // scope.isLoading = false
    }
  },
  disable: function() {
    this.isLoading = true
  },
  enable: function() {
    this.isLoading = false
  },
  next: function() {
    var scope = this
    scope.isFirstLoad = false
    if (!scope.isLoading) {
      // this.$nextTick(this.attemptLoad) // used in vue
      setTimeout(scope.attemptLoad(), 1)
    } else {
      console.log('the infinite is disable now')
    }
  },
  complete: function() {
    this.isLoading = false
    this.isComplete = true
    this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    // TODO: 移除loading gif
  },
  reset: function() {
    this.isLoading = false
    this.isComplete = false
    this.isFirstLoad = true
    this.scrollParent.addEventListener('scroll', this.scrollHandler)
    setTimeout(this.scrollHandler, 1)
    // TODO: 添加loading gif
  }
}