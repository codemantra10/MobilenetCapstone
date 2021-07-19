function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(600,350);
  video = createCapture(VIDEO);
  video.hide();
  console.log(ml5.version);
  importantMission101=ml5.imageClassifier("MobileNet",modelLoaded);
}
function draw(){
image(video,0,0,300,300);
importantMission101.classify(video,gotResult);
}
function modelLoaded(){
console.log("Stage 1 initiated")
}
function gotResult(Error,Result){
if (Error) {
console.log("The model is not working.Try again later!")
}else{
console.log("Stage 2 Ready!");
console.log(Result);
label=Result[0].label;
accuracy=Math.floor(Result[0].confidence*100)+"%";
document.getElementById("objectname").innerHTML=label;
document.getElementById("percentage").innerHTML=accuracy;
}
}




