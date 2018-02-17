
// <!-- *******************************************************************************************
//      * TODO(DEVELOPER): Paste the initialization snippet from:
//      * Firebase Console > Overview > Add Firebase to your web app. *
//      ***************************************************************************************** -->
 
  initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        let photoURL = user.photoURL || 
        "https://firebasestorage.googleapis.com/v0/b/mylesson-b224e.appspot.com/o/puppy%202.jpg?alt=media&token=f126c476-6407-4180-97f1-45a10a309b50"
        const uid = user.uid         
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function (accessToken) {
          document.getElementById('sign-in-status').textContent = `${displayName} is Signed in`;
          document.getElementById('avatar').src = photoURL
          // document.getElementById('sign-in').textContent = 'Sign out';
          document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');
        });
      } else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out';
        // document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
        document.getElementById('avatar').remove()
      }
    }, function (error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function () {
    initApp()
  });

  const user = firebase.auth().currentUser;

  const signOut = () => firebase.auth().signOut().then(function () {
    console.log('Signed Out');
    window.location = "./index.html"
  }, function (error) {
    console.error('Sign Out Error', error);
  });

  const updateProfile = () => {
    user.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    })
    .then(function (user) {
      console.log("Update successful", user)
      // Update successful.
    })
    .catch(function (error) {
      console.log("An error happened", error.massage)
      // An error happened.
    });
  }
