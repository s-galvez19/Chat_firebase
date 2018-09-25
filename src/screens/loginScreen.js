import $ from 'jquery';
import { logInWithGoogle, createPersistantSession, logInWithFacebook } from '../session';
import mountSignUpScreen from './signUpScreen';

export default
    function mountLoginScreen() {
    $('#root').html(LoginScreen());
    initLoginScreenListeners();
}

function LoginScreen() {
    let container = document.createElement('div');
    container.id = 'Login-screen';
    container.classList.add('Login-screen');
    container.innerHTML = `
    <div class='imgcontainer'>
    <div class='imgcontainer'>
        <img src='./img/logo.png' class='logoImage' alt='logo image'>
    </div>
    <div class='inputsContainer'>
        <div class='input1'><span class='usernameTxt'> Username </span><input type='text' class='usernameInput'> </div>
        <div class='input2'><span class='passwordTxt'> Password </span><input type='password' class='passwordInput'></div>
    </div>
    <div class='socialMedia'>
        <a id="facebook-login-btn">
            <img src='./img/facebook.png' class='facebookImg' alt='facebook_logo_icon'>
        </a>
        <a id="google-login-btn">
            <img src='./img/insta.png' class='instagramImg' alt='instagram_logo_icon'>
        </a>
    </div>
    <div class='singInAndUpBtn'>
        <button class='singInBtn'> SIGN IN </button>
        <button class='singUpBtn'> SIGN UP </button>
    </div>
</div>
    
    `;
    return container
}

function initLoginScreenListeners() {
    $('#google-login-btn').on('click', function () {
        createPersistantSession(logInWithGoogle)
    });

    $('#facebook-login-btn').on('click', function () {
        createPersistantSession(logInWithFacebook)
    });

    $('.singUpBtn').on('click', function () {
        mountSignUpScreen()
    })
}



