
  window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };

  window.randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  }
  window.randomColorNumber = function() {
    return Math.floor(Math.random() * 6);
  }

  var DEFAULT_DATASET_SIZE = 7;
  var DEFAULT_R_RATE = 5;

  var addedCount = 0;
  var color = Chart.helpers.color;
  // 图表中的数据
  var bubbleChartData = {
    animation: {
      duration: 10000,
      onProgress: function(animation) {
        // var value = animation.animationObject.currentStep / animation.animationObject.numSteps;
      },
      onComplete: function(animation) {
        console.log('complete');
      }
    },
    datasets: [{
      label: "My 0 dataset",
      backgroundColor: color(window.chartColors.red).alpha(0.75).rgbString(),
      borderColor: color(window.chartColors.red).alpha(0.75).rgbString(),
      borderWidth: 1,
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }]
    }, {
      label: "My 1 dataset",
      backgroundColor: color(window.chartColors.orange).alpha(0.75).rgbString(),
      borderColor: color(window.chartColors.orange).alpha(0.75).rgbString(),
      borderWidth: 1,
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }]
    }, {
      label: "My 2 dataset",
      backgroundColor: color(window.chartColors.yellow).alpha(0.75).rgbString(),
      borderColor: color(window.chartColors.yellow).alpha(0.75).rgbString(),
      borderWidth: 1,
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }]
    }, {
      label: "My 3 dataset",
      backgroundColor: color(window.chartColors.green).alpha(0.75).rgbString(),
      borderColor: color(window.chartColors.green).alpha(0.75).rgbString(),
      borderWidth: 1,
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }]
    }, {
      label: "My 4 dataset",
      backgroundColor: color(window.chartColors.blue).alpha(0.75).rgbString(),
      borderColor: color(window.chartColors.blue).alpha(0.75).rgbString(),
      borderWidth: 1,
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }]
    }, {
      label: "My 5 dataset",
      backgroundColor: color(window.chartColors.purple).alpha(0.75).rgbString(),
      borderColor: color(window.chartColors.purple).alpha(0.75).rgbString(),
      borderWidth: 1,
      data: [{
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }, {
        x: randomScalingFactor(),
        y: randomScalingFactor(),
        r: Math.abs(randomScalingFactor()) / DEFAULT_R_RATE,
      }]
    }]
  };
