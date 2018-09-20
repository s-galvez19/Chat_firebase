
import mountLoadingScreen from "./screens/loadingScreen";
import mountloginScreen from "./screens/loginScreen";
import mountChatScreen from "./screens/chatScreen";
import mountSignUpScreen from "./screens/signUpScreen";




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
        mountSignUpScreen
            break;

        case 'chat-screen':
            mountChatScreen()
            break;

        default:
            $('root').html('');
            break;
    }
}
