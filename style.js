$(document).ready(function () {
  $('.arrow-up').click(function () {
    $('body,html').animate({
      scrollTop: '0px',
    }, 300);
  });

  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.arrow-up').slideDown(300);
      } else {
        $('.arrow-up').slideUp(300);
      }
    });
});

function validateFirstName() {
  var fName = document.getElementById('firstName').value;
  var rel = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (rel.test(fName)) {
    document.getElementById('firstNamePrompt').style.color = 'Green';
    document.getElementById('firstNamePrompt').innerHTML = '<strong>Valid</strong>';
    return true;
  } else {
    document.getElementById('firstNamePrompt').style.color = 'Red';
    document.getElementById('firstNamePrompt').innerHTML = '<strong>Enter 2 & 15 Caract.</strong>';
    return false;
  }
}

function validateLastName() {
  var fName = document.getElementById('lastName').value;
  var rel = /^[a-zA-Z\s\'\-]{2,15}$/;

  if (rel.test(fName)) {
    document.getElementById('lastNamePrompt').style.color = 'Green';
    document.getElementById('lastNamePrompt').innerHTML = '<strong>Valid</strong>';
    return true;
  } else {
    document.getElementById('lastNamePrompt').style.color = 'Red';
    document.getElementById('lastNamePrompt').innerHTML = '<strong>Enter 2 & 15 Caract.</strong>';
    return false;
  }
}

//validate Email

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  console.log('Button is working');
  var $result = $('#result');
  var email = $('#email').val();
  $result.text('');

  if (validateEmail(email)) {
    $result.text(email +  'Thank you, I will be in touch soon.');
    $result.css('color', 'green');
    console.log('VALID');
  } else {
    $result.text(email + ' Your email is not valid. Please input your email again.');
    $result.css('color', 'red');
    console.log('INVALID');
  }

  return false;
}

$('form').submit(function (event) {
  event.preventDefault();
  validate();
  console.log('Confirmation is working');
});
