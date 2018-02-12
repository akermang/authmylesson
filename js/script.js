// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: './home.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'https://work-force-management.herokuapp.com/#/about'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

class SignUpForm{
  constructor(){
    this.createElement();
  }

  createElement(){
    this.element = $(`
    <div id="user-section">
            <div class='new-user-container' id="new-user">
                <input class='firstName' type="text" placeholder='First name'>
                <input class='lastName' type="text" placeholder='Last name'>
                <input class='type' type="text" value="teacher" placeholder='Type'>
                <input class='email' type="email" placeholder='Email'>
                <input class='username' type="text" placeholder='User name'>
                <input class='password' type="text" placeholder='password'>
                <button class='Submit' onclick= submitForm() >Submit</button>
            </div>
    </div>
  `);
  }
}

createForm = ()=>{
  let form = new SignUpForm;
  let container = $('.nav-container')
  container.empty()
  container.append(form.element)
}

const submitForm = () => {
  let firstName = $('#new-user .firstName').val()
  let lastName = $('#new-user .lastName').val()
  let type = $('#new-user .type').val()
  let email = $('#new-user .email').val()
  let displayName = $('#new-user .username').val()
  let password = $('#new-user .password').val()

  createUserWithEmailAndPassword(email, password);
}
 
const createUserWithEmailAndPassword = (email, password)=> firebase.auth().createUserWithEmailAndPassword(email, password)
.then((data)=>{
  console.log("data:",data.uid, data.email)
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("errorMessage:", errorMessage)
});

