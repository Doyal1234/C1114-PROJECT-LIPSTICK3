var leftEar_x = 0;
var leftEar_y = 0;
var rightEar_x = 0;
var rightEar_y = 0;

function preload() {
    leftEar = loadImage("leftEarring.png");
    rightEar= loadImage("rightEarring.png");
}

function setup() {
canvas=createCanvas(470,470);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw() {
image(video,0,0,470,470);
image(leftEar, leftEar_x,leftEar_y,40,140);
image(rightEar, rightEar_x,rightEar_y,40,140);
}

function take_snapshot() {
save("FilterOfLipstick.png");
}

function modelLoaded() {
console.log("Pose net is intiallized");
}

function gotPoses (results) {
if (results.length>0) {
console.log(results);
console.log("Left ear X = "+ results[0].pose.leftEar.x);
console.log("Left ear Y  = "+ results[0].pose.leftEar.y);
console.log("Right ear X = "+ results[0].pose.rightEar.x);
console.log("Right ear Y  = "+ results[0].pose.rightEar.y);
leftEar_x = results[0].pose.leftEar.x -310;
leftEar_y = results[0].pose.leftEar.y;
rightEar_x = results[0].pose.rightEar.x+90;
rightEar_y = results[0].pose.rightEar.y;
}
}