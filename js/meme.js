// 绑定<input>text输入
var textChangeListener = function(evt) {
  var id = evt.target.id; // 获取<input> id
  var text = evt.target.value;

  if (id == "topText") {
    window.topText = text; // window ??
  }
  else {
    window.bottomText = text;
  }
  reDrawMeme(window.imageSrc, window.topText, window.bottomText);
};

// 绘图函数
var reDrawMeme = function(image, topStr, bottomStr) {
  var c = document.querySelector('canvas');
  var ctx = c.getContext('2d');
  // draw loop
  ctx.clearRect(0, 0, c.width, c.height);
  //ctx.fillRect(0, 0, c.width, c.height);

  var h = c.height;
  var w = image.width * c.height / image.height;
  if (image !== null)
    ctx.drawImage(image, (c.width-w)/2, 0, w, h);

  ctx.font = "36pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  if (topStr !== null) {
    ctx.fillText(topStr, c.width/2, 45);
    ctx.strokeText(topStr, c.width/2, 45);
  }
  if (bottomStr !== null) {
    ctx.fillText(bottomStr, c.width/2, h - 10);
    ctx.strokeText(bottomStr, c.width/2, h - 10);
  }

  /*
  // 绿方框
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.strokeRect(100, 100, 100, 100);
  // 蓝三角
  ctx.beginPath();
  ctx.moveTo(75, 75); // start
  ctx.lineTo(125, 75);
  ctx.lineTo(125, 125);
  ctx.lineTo(75, 75); // end
  ctx.fillStyle = "blue";
  ctx.fill();*/
};

// canvas初始化背景
var initDraw = function() {
  var c = document.querySelector('canvas');
  var ctx = c.getContext('2d');
  ctx.fillStyle = "#aaa";
  for (var i = 0; i < c.width; i += 100) {
    for (var j = 0; j < c.height; j += 100) {
      ctx.fillRect(i, j, 50, 50);
      ctx.fillRect(i+50, j+50, 50, 50);
    }
  }
};

var saveFile = function() {
  window.open(document.querySelector('canvas').toDataURL()); // ??
};

// 绑定<input>文件选择
var handleFileSelect = function(evt) {
  var file = evt.target.files[0]; // ??

  var reader = new FileReader(); // ??
  reader.onload = function(fileObject) {
    var picPath = fileObject.target.result;
    var image = new Image();
    image.src = picPath;
    image.onload = function() {
      window.imageSrc = this;
      //console.log(this);
      reDrawMeme(window.imageSrc, null, null);
    };

    //console.log(fileObject.target.result);
  };
  reader.readAsDataURL(file);
};

// 绑定瀑布流click点击
var handleFileItem = function(evt) {

};

// main
window.onload = function main() {
  window.topText = "";
  window.bottomText = "";
  // vanilla
  var input1 = document.getElementById('topText');
  var input2 = document.getElementById('bottomText');
  input1.oninput = textChangeListener;
  input2.oninput = textChangeListener;
  document.getElementById('file').addEventListener('change', handleFileSelect, false);
  document.querySelector('button').addEventListener('click', saveFile, false);

  // masonry jquery
  var $grid = $('.grid');
  $grid.masonry({
        columnWidth: '.grid-item',
        itemSelector: '.grid-item'
  });

  initDraw();
  $grid.on('click', '.grid-item', function() {
    // remove clicked element
    //$grid.masonry( 'remove', this ) .masonry('layout');
    var imageSrc = $(this).find('img').attr("src");
    var image = new Image();
    image.src = imageSrc;
    image.onload = function() {
      window.imageSrc = this;
      reDrawMeme(window.imageSrc, window.topText, window.bottomText);
    };
  });

};
