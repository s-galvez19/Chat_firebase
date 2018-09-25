import navigate from "./navigation";

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
// Function to login with Google


export function logInWithGoogle () {
    socialLogin(googleProvider) 
}


export function logInWithFacebook () {
    socialLogin(facebookProvider) 
}


function socialLogin(provider) {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(token, user);
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        alert(errorMessage);
    });
}

export function createPersistantSession(authenticate = () => console.log('no authentication passed to persistant session')) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(authenticate)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorMessage);
        });
}


export function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('signed out successfully');
    }).catch(function (error) {
        // An error happened.
        console.error(error);
    });
}

export function session() {
    firebase.auth().onAuthStateChanged(function (user) {
        window.user = user;
        if (user) {
            navigate('chat-screen', user);
        }
        else {
            navigate('login-screen');
        }
    });
}

export function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

}

