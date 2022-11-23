// Import the functions you need from the SDKs you need

import { authService } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


    const provider = new GoogleAuthProvider();
    const provider1 = new GithubAuthProvider();



    function CheckEmail(str) {

        var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

        if (!reg_email.test(str)) {

            return false;

        } else {

            return true;

        }

    }


    function CheckPassword(str) {

        var reg_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!reg_password.test(str)) {

            return false;

        } else {

            return true;

        }

    }


    function CreatePasswordCheck() {


        const signInPassword_input = document.getElementById('password_value')
        const signUpPassword = document.getElementById('password_value').value
        const pwRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const matchedPw = signUpPassword.match(pwRegex);
        const passwordcheck = document.getElementById('password_info_over_string');

        signInPassword_input.classList.remove('red_line');
        $("#password_info").text("");

        if (matchedPw === null) {

            passwordcheck.classList.remove('grin_string');


        } else {

            passwordcheck.classList.remove('red_string');
            passwordcheck.classList.add('grin_string');

        }


    }


    function LoginFunction(event) {
        event.preventDefault()
        const signInEmail = document.getElementById('email_value').value
        const signInPassword = document.getElementById('password_value').value
        const signInEmail_input = document.getElementById('email_value')
        const signInPassword_input = document.getElementById('password_value')


        $("#email_info").text("");
        $("#password_info").text("");
        signInEmail_input.classList.remove('red_line');
        signInPassword_input.classList.remove('red_line');

        if (!signInEmail) {

            $("#email_info").text("이메일을 입력하세요.");
            signInEmail_input.classList.add('red_line');

            return;
        } else {
            if (!CheckEmail(signInEmail)) {

                $("#email_info").text("이메일 주소를 입력해주세요.");
                signInEmail_input.classList.add('red_line');

                return;
            }
        }
        if (!signInPassword) {

            $("#password_info").text("비밀번호를 입력하세요.");
            signInPassword_input.classList.add('red_line');

            return;
        } else {
            signInWithEmailAndPassword(authService, signInEmail, signInPassword)
                .then((userCredential) => {
                    // Signed in
                    console.log(userCredential)
                    const user = userCredential.user;
                    window.location.hash = "#main";
                    // ...
                })
                .catch((error) => {
                    console.log('로그인 실패')
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    $("#password_info").text("이메일 또는 비밀번호가 잘못되었습니다.");
                    signInEmail_input.classList.add('red_line');
                    signInPassword_input.classList.add('red_line');

                });


        }


    }


    function CreateFunction(event) {
        event.preventDefault()
        const signUpEmail = document.getElementById('email_value').value
        const signUpPassword = document.getElementById('password_value').value
        const signInEmail_input = document.getElementById('email_value')
        const passwordcheck = document.getElementById('password_info_over_string');
        const signInPassword_input = document.getElementById('password_value')


        $("#email_info").text("");

        if (!signUpEmail) {

            $("#email_info").text("이메일을 입력하세요.");
            signInEmail_input.classList.add('red_line');

            return;

        } else {

            if (!CheckEmail(signUpEmail)) {

                $("#email_info").text("이메일 주소를 입력해주세요.");
                signInEmail_input.classList.add('red_line');

                return;

            }

        }

        if (!signUpPassword) {

            $("#password_info").text("비밀번호를 입력하세요.");
            signInPassword_input.classList.add('red_line');
            return;

        }

        if (!CheckPassword(signUpPassword)) {

            passwordcheck.classList.add('red_string');
            signInPassword_input.classList.add('red_line');
        } else {

            createUserWithEmailAndPassword(authService, signUpEmail, signUpPassword)
                .then((userCredential) => {
                    console.log(userCredential)
                    window.location.hash = "#main";

                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    console.log('error')
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });


        }


    }


    function GoogleLogin(){
      signInWithPopup(authService, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
            window.location.hash = "#main";
          const user = result.user;
          console.log(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(error)
          // ...
        });

    }


    function GitHubLogin(){
        signInWithPopup(authService, provider1)
        .then((result) => {
          alert('깃허브 로그인 성공');
          window.location.hash = "#main";

          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          alert('로그인실패')
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
        });
    }

    const logout = () => {
  signOut(authService)
    .then(() => {
      // Sign-out successful.
      localStorage.clear();
      console.log("로그아웃 성공");
    })
    .catch((error) => {
      // An error happened.
      console.log("error:", error);
    });
};





    window.logout = logout

    window.GitHubLogin = GitHubLogin

    window.GoogleLogin = GoogleLogin

    window.LoginFunction = LoginFunction

    window.CreateFunction = CreateFunction

    window.CreatePasswordCheck = CreatePasswordCheck

