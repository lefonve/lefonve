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
