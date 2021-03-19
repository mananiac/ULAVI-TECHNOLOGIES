function showPassword() {
  var x = document.getElementById("registrationPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function showConfirmPassword() {
  var x = document.getElementById("registrationConfirmPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
var passwordCheck = function() {
  if (document.getElementById('registrationPassword').value ==
    document.getElementById('registrationConfirmPassword').value) {
    document.getElementById('passwordMessage').style.color = 'green';
    document.getElementById('passwordMessage').innerHTML = 'matching';
  } else {
    document.getElementById('passwordMessage').style.color = 'red';
    document.getElementById('passwordMessage').innerHTML = 'not matching';
  }
}
// var popover = new bootstrap.Popover(document.querySelector('.btn btn-lg btn-danger'), {
//   container: 'body'
// })
// $(function () {
//     $('[data-toggle="popover"]').popover()
// })


$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
container: 'body'});

