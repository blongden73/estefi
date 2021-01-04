// var clickArea = document.querySelector('.click-area');
//   var messages = document.querySelectorAll('img');
//   console.log('running', messages);
//   messages[0].classList.add('display');
//   clickArea.addEventListener('click', function(){
//     console.log('click');
//
//     var onDisplay = document.querySelector('.display');
//     var next = document.querySelector('.display + img')
//
//     if(next) {
//       onDisplay.classList.remove('display');
//       next.classList.add('display');
//     }else {
//       onDisplay.classList.remove('display');
//       messages[0].classList.add('display');
//     }
//   });

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function lazy(){
  console.log('running');
  var lazy = document.querySelectorAll('.lazy');
  var screenHeight = window.innerHeight / 1.5;
  var belowFold = window.innerHeight * 2;
  console.log(lazy);
  var src1 = lazy[0].dataset.src;
  var src2 = lazy[1].dataset.src;
  lazy[0].setAttribute('src', src1);
  lazy[1].setAttribute('src', src2);
  document.addEventListener('scroll', function(){
    for(i=0; i<lazy.length; i++){
      if(lazy[i].classList.contains('image')){
        var position = lazy[i].getBoundingClientRect();
        var src = lazy[i].dataset.src;
        if(position.top <= belowFold && position.top >= -screenHeight) {
          if(!lazy[i].classList.contains('loaded')){
            lazy[i].setAttribute('src', src);
          }
          lazy[i].classList.add('loaded');
        }
        if(position.top <= screenHeight && position.top >= -screenHeight) {
          lazy[i].classList.add('inview');
        }
      } else if(lazy[i].classList.contains('video')) {
        var position = lazy[i].getBoundingClientRect();
        var source = lazy[i].querySelector('source');
        var src = source.dataset.src;
        if(position.top <= screenHeight && position.top >= -screenHeight) {
          if(!lazy[i].classList.contains('inview')){
            source.setAttribute('src', src);
            lazy[i].load();
          }
          lazy[i].play();
          lazy[i].classList.add('inview');
        } else {
          console.log('else');
          lazy[i].pause();
        }
      }
    }
  })
}lazy();


function about(){
  var contactClicker = document.querySelector('.contact');
  var aboutClicker = document.querySelector('.about');
  var aboutWrapper = document.querySelector('.about-wrapper.about');
  var close = document.querySelector('.about-close.close');
  aboutClicker.addEventListener('click', function(){
    console.log('clicke');
    aboutWrapper.classList.toggle('clicked');
    contactClicker.classList.toggle('about-clicked');
  })
  close.addEventListener('click', function(){
    aboutWrapper.classList.remove('clicked');
    contactClicker.classList.remove('about-clicked');
  });
}about();

function contact(){
  var contactClicker = document.querySelector('.contact');
  var aboutClicker = document.querySelector('.about');
  var contactWrapper = document.querySelector('.about-wrapper.contact');
  var close = document.querySelector('.contact-close.close');
  contactClicker.addEventListener('click', function(){
    console.log('clicke');
    contactWrapper.classList.toggle('clicked');
    aboutClicker.classList.toggle('contact-clicked');
  })
  close.addEventListener('click', function(){
    contactWrapper.classList.remove('clicked');
    aboutClicker.classList.remove('contact-clicked');
  });
}contact();

function logo() {
  var logo = document.querySelector('.main-logo');
  var mono = document.querySelector('.monogram');

  document.addEventListener('scroll', function(){
    var position = logo.getBoundingClientRect();
    console.log(position);
    if(position.bottom <= 0){
      console.log('not in');
      mono.classList.add('inview');
    }else {
      console.log('in');
      mono.classList.remove('inview');
    }
  });
}logo();
