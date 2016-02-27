function textChangeListener(evt) {
  var id = evt.target.id; // 获取<input> id
  var text = evt.target.value;

  if (id == "topText") {
    window.topText = text; // window ??
  } else {
    window.bottomText = text;
  }

  reDrawMeme(window.imageSrc, window.topText, window.bottomText);
}

function reDrawMeme(image, top, bottom) {
  var c = document.querySelector('canvas');
  var ctx = c.getContext('2d');
  // draw loop
  if (image !== null)
    ctx.drawImage(image, 0, 0, c.width, c.height);

  ctx.font = "36pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  if (top !== null) {
  ctx.fillText(top, c.width/2, 40);
  ctx.strokeText(top, c.width/2, 40);
}
  if (bottom !== null) {
  ctx.fillText(bottom, c.width/2, c.height);
  ctx.strokeText(bottom, c.width/2, c.height);
}

  // 缺角方形
  ctx.fillRect(0, 0, 50, 50);
  ctx.clearRect(0,0,25,25);
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
  ctx.fill();
}

//var image = new Image();
/*
image.onload = function() {
  console.log("读取图片");
  ctx.drawImage(image, 0, 0, c.width, c.height);
  // var imageUrl = c.toDataURL();
  // window.open(imageUrl);
  ctx.fillRect(0, 0, 50, 50);
  ctx.clearRect(0,0,25,25);

  ctx.font = "36pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText("表情包 MEMES!", c.width/2, 40);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.strokeText("表情包 MEMES!", c.width/2, 40);
};*/

//image.src = "images/fry.jpg";

function saveFile() {
  window.open(document.querySelector('canvas').toDataURL()); // ??
}

// ??????
function handleFileSelect(evt) {
  var file = evt.target.files[0]; // ??

  var reader = new FileReader(); // ??
  reader.onload = function(fileObject) {
    var data = fileObject.target.result;
    var image = new Image();
    image.onload = function() {
      window.imageSrc = this;
      reDrawMeme(window.imageSrc, null, null);
    };

    image.src = data;
    console.log(fileObject.target.result);
  };
  reader.readAsDataURL(file);
}

window.topText = "";
window.bottomText = "";
var input1 = document.getElementById('topText');
var input2 = document.getElementById('bottomText');
input1.oninput = textChangeListener;
input2.oninput = textChangeListener;
document.getElementById('file').addEventListener('change', handleFileSelect, false);
document.querySelector('button').addEventListener('click', saveFile, false);
