var yesBtn = document.getElementById("yesBtn");
var currentIndex=0;
var yesTexts=["Yes!","Are you sure?", "Please?", "Come on, don't be mean","You're clicking the wrong button!"]

function changeYesText(){
    if(currentIndex === yesTexts.length){
        currentIndex=0;
    }
    yesBtn.innerHTML = yesTexts[currentIndex];
    currentIndex++;
}

var audio= document.getElementById("audio");
var intendPlay=10;

function playAudio(){
    for(var i=0; i<intendPlay; i++){
        setTimeout(function(){
            audio.play();
        }, i* audio.duration*1000);
    }
}

function redirectToPage(){
    window.location.href ="plan.html";
}

function yesButtonClick(){
    playAudio();
    redirectToPage();
}

function moveNoBtn() {
    var btn = document.getElementById("noBtn");
    var newX = Math.random() * (window.innerWidth - btn.offsetWidth);
    var newY = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = "absolute";
    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
    changeYesText();
}

var planTexts=["And then?", "Is there more?", "Sorry! That's all"]
var newIndex=0;
var plan= document.getElementById("plan")
function changePlanText(){
    if(newIndex === planTexts.length){
        newIndex=0;
    }
    plan.innerHTML = planTexts[newIndex];
    newIndex++;
}

var images=["cuddle1.gif", "sushi.gif", "cuddle2.gif"]
var picIndex=0;
function addNewImage(){
    var container= document.querySelector(".image-container");
    var image = document.createElement("img");
    image.src= images[picIndex];
    image.alt= "Error"
    container.appendChild(image);

    picIndex = (picIndex+1)% images.length;
}
function planClick(){
    addNewImage();
    changePlanText();
    changeTopText();
}

var topTexts=["Cuddles!", "Sushi Res at 7!", "More Cuddles!!!"];
var topIndex=0;
function changeTopText(){
    var topText= document.querySelector("h1");
    topText.textContent=topTexts[topIndex];
    topIndex=(topIndex+1)% topTexts.length;
}