var clickArea = document.querySelector('.page-wrapper');
  var messages = document.querySelectorAll('h4');
  console.log('running', messages);
  messages[0].classList.add('display');
  clickArea.addEventListener('click', function(){
    var onDisplay = document.querySelector('.display');
    var next = document.querySelector('.display + h4')

    if(next) {
      onDisplay.classList.remove('display');
      next.classList.add('display');
    }else {
      onDisplay.classList.remove('display');
      messages[0].classList.add('display');
    }

  });
