
import mountLoadingScreen from "./src/screens/loadingScreen";
import mountloginScreen from "./src/screens/loginScreen";
import mountChatScreen from "./src/screens/chatScreen";
import mountSignUpScreen from "./src/screens/signUpScreen";




export default
    function navigate(screen) {
    switch (screen) {
        case 'loading-screen':
            mountLoadingScreen();
            break;

        case 'login-screen':
            mountloginScreen();
            break;

        case 'sign-up-screen':
            mountSignUpScreen();
            break;

        case 'chat-screen':
            mountChatScreen()
            break;

        default:
            $('root').html('');
            break;
    }
}
