window.onload = function () {
    var container = document.getElementById("container");
    var box = container.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [2000, 2000, 1000, 1000];
    function init() {
      box.addEventListener("click", openBox, false);
    }
    function stepClass(step) {
      container.className = 'container';
      container.className = 'container step-' + step;
    }
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 3) {
      }
      if (step === 4) {
        reveal();
        setTimeout(startAll, 2000);
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }
  
    init();
};
  
function reveal() {
    document.querySelector('.container').style.background = 'transparent';
    document.querySelector('.container').style.transition = '1s';
}


function snow(){
    snowFall.snow(document.querySelector(".container"), {
        flakeCount: 400,
        maxSize: 6,
        round: true,
        minSpeed: 1,
        maxSpeed: 3,
        flakeColor: "#c7c7c7",
    });
}

function play() {
    const aud = document.querySelector("audio");
    aud.play();
}
function animateWish() {
    const wrapper = document.getElementsByClassName("animated-wish")[0];
    wrapper.style.opacity = "1";
    wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

    var spans = wrapper.getElementsByTagName("span");
        
    for(var i=0;i<spans.length;i++){
    spans[i].style.animationDelay = i*150+"ms";
}
}
function startAll() {
    play();
    setTimeout(snow, 3000);
    setTimeout(animateWish, 4000);
}


  