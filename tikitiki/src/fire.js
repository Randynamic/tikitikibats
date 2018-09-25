import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB83E4bAC1OQblvqSmXWCSyhaxqSihczqI",
    authDomain: "tikitiki-bats-baseball.firebaseapp.com",
    databaseURL: "https://tikitiki-bats-baseball.firebaseio.com",
    projectId: "tikitiki-bats-baseball",
    storageBucket: "tikitiki-bats-baseball.appspot.com",
    messagingSenderId: "412303696044"
};

export default firebase.initializeApp(config);