var clickArea = document.querySelector('.click-area');
  var messages = document.querySelectorAll('img');
  console.log('running', messages);
  messages[0].classList.add('display');
  clickArea.addEventListener('click', function(){
    console.log('click');

    var onDisplay = document.querySelector('.display');
    var next = document.querySelector('.display + img')

    if(next) {
      onDisplay.classList.remove('display');
      next.classList.add('display');
    }else {
      onDisplay.classList.remove('display');
      messages[0].classList.add('display');
    }
  });
