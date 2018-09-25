import $ from 'jquery';
import navigate from '../navigation';
import isValidEmail from '../validate';
import isValidPassword from '../validate';




export default
    function mountloginScreen() {
    $('#root').html(signUp());
    initSignUpScreenListeners()
}

function signUp() {
    let container = document.createElement('div');
    container.id = 'signUp-screen';
    container.classList.add('signUp-screen');
    container.innerHTML = `
        <span class="go-back" id="go-back">
        <svg class="go-back1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg>
        </span>

        <div class='signUpEmailDiv'><span class='signUptxtDiv'> Email </span><input type='text' class='signUpEmailInput'> </div>
        <div class='signUpPwdDiv'><span class='signUptxtDiv'> Password </span><input type='text' class='signUpPwdInput'> </div>
        <div class='signUpPwdDiv'><span class='signUptxtDiv'> Repeat Password </span><input type='text' class='signUpRepeatPwdInput'> </div>
        <button class="signUpPagebtn"> Sign up </button>
    
 `
    return container;
}

const email = $('.signUpEmailInput').val();
const password = $('.signUpPwdInput').val();
const confirmPassword = $('.signUpRepeatPwdInput').val();
function initSignUpScreenListeners() {
    $('#go-back').on('click', function() {
      navigate('login-screen');
    });
  
    $('#signup-btn').on('click', function(){
      let email = $('#email').val();
      let password = $('#password').val();
      let passwordConfirmation = $('#password-confirmation').val();
  
      if (!isValidEmail(email)) {
        alert('Invalid e-mail');
      }
      else if (!isValidPassword(password)) {
        alert('Invalid password');
      }
      else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
      }
      else {
        signUpWithEmailAndPassword(email, password);
      }
      
    });
  }