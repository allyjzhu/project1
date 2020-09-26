const soundInput = document.querySelector("input.sound")
const numbersInput = document.querySelector("input.numbers")
const lettersInput = document.querySelector("input.letters")

var num = [];
 letters = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  senses = ['touch', 'smell', 'noise', 'taste', 'feel', 'cold','hot', 'sensory']

  let mySound;
  function preload() {
    soundFormats('mp3');
    mySound = loadSound('sound.mp3');
  }
function setup() {
  canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
createCanvas(canvas.width, canvas.height);



  title = createDiv("SYNESTHESIA");
  title.position(canvas.width / 2, 40);
  label1 = createDiv("sounds");
  label1.position(50,60);
  label2 = createDiv("numbers");
  label2.position(180,60);
  label3 = createDiv("letters");
  label3.position(330,60);

  
  const soundInput = document.querySelector("input.sound")
  const numbersInput = document.querySelector("input.numbers")
  const lettersInput = document.querySelector("input.letters")

  mySound.play()
  


  
  for(var i = 0; i < 20; i ++) {
    var number = {
      x: random(width),
      y: random(height),
      z: int(random(0, 10))
    };
  num.push(number);
  }
  
  numInput();
  letInput();
  
}
function noiseInput(){
  mySound.play()
  p5.Effect([drywet(soundInput)])
  process(mySound,[soundInput * 10], [soundInput * 100])
}
function numInput() {
  const numbercolor = numbersInput.value
  const lettercolor = lettersInput.value
  
  for (i = 0; i < num.length; i++) {
    text(num[i].z, random(width), random(height))
    textSize(random(15,20));
    fill(numbercolor , numbercolor - (i * 10), random(0,255));
  }
}


function letInput() {
 
  const lettercolor = lettersInput.value
  
  for (i = 0; i < 27; i++) {
    text(letters[i], random(width), random(height));
    textSize(random(20,25));
    fill(random(0,250), lettercolor + (i * 10) , lettercolor - 50);
  }
  for (i = 0; i < 11; i++) {
    text(senses[i], random(width), random(height));
    textSize(random(10,15));
    fill(lettercolor + (i * 5), random(0,255) , lettercolor - (i * 20));

}
}


soundInput.addEventListener("input", function(){
  noiseInput()
})
numbersInput.addEventListener("input", function(){
  numInput()
})
lettersInput.addEventListener("input", function(){
  letInput()
})
