import { authService } from "./firebase.js";

const routes = {
  404: "/pages/404.html",
  "/": "/pages/main_before.html",
  login: "/pages/login.html",
  about: "/pages/about.html",
  lorem: "/pages/lorem.html",
  create: "/pages/create.html",
  main: "/pages/main.html",
  mypage: "/pages/mypage.html",
};
import {
  getCommentList,
  getCommentList_main_before,
  getCommentList_mypage,
} from "./pages/fanLog.js";

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", "");
  const pathName = window.location.pathname;

  // Live Server를 index.html에서 오픈할 경우
  if (pathName === "/index.html") {
    window.history.pushState({}, "", "/");
  }
  if (path.length == 0) {
    path = "/";
  }

  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("root").innerHTML = html;

  // 특정 화면 렌더링 되자마자 DOM 조작 처리
  if (path === "main") {
    console.log(authService);
    // 로그인한 회원의 프로필사진과 닉네임을 화면에 표시해줌.
    document.getElementById("nickname").textContent =
      authService.currentUser.displayName ?? "닉네임 없음";

    //탑바 맨우측 현재 계정 프로필 이미지 출력
    document.getElementById("dropdown_profile").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    //드롭다운 메뉴 속 현재 계정 프로필 이미지 출력
    document.getElementById("top_bar_image").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    document.getElementById("post_top_profile").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    //드롭다운 메뉴 속 계정 이메일 출력
    document.getElementById("dropdown_email").textContent =
      authService.currentUser.email ?? "계정";

    getCommentList();
  }
  if (path === "mypage") {
    document.getElementById("mypage_nickname").textContent =
      authService.currentUser.displayName ?? "닉네임 없음";

    document.getElementById("mypage_profile").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    document.getElementById("mypage_email").textContent =
      authService.currentUser.email ?? "계정";

    document.getElementById("top_bar_image").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    document.getElementById("post_top_profile").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    //탑바 맨우측 현재 계정 프로필 이미지 출력
    document.getElementById("dropdown_profile2").src =
      authService.currentUser.photoURL ?? "../assets/blankProfile.webp";

    document.getElementById("dropdown_email2").textContent =
      authService.currentUser.email ?? "계정";

    document.getElementById("dropdown_nickname2").textContent =
      authService.currentUser.displayName ?? "닉네임 없음";
    getCommentList_mypage();
  }
  if (path === "/") {
    getCommentList_main_before();
  }
};

export const goTomain = () => {
  window.location.hash = "#main";
};

export const goToLogin = () => {
  window.location.hash = "#login";
};

// hash url 변경 시 처리
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 처리
document.addEventListener("DOMContentLoaded", handleLocation);

// const route = (event) => {
//   event.preventDefault();
//   window.location.hash = event.target.hash;
// };
//
// const routes = {
//   404: "/pages/404.html",
//   "/": "/pages/login.html",
//   about: "/pages/about.html",
//   lorem: "/pages/lorem.html",
//   create: "/pages/create.html",
// };
//
// const handleLocation = async () => {
//   let path = window.location.hash.replace("#", ""); //#about -> about
//
//   // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
//   if (path.length == 0) {
//     path = "/";
//   }
//   const route = routes[path] || routes[404];
//   const html = await fetch(route).then((data) => data.text());
//
//   document.getElementById("root").innerHTML = html;
//
//   // $('#login_form_lo').empty()
//   // $('#login_form_lo').append(html)
// };
//
// // 특정 화면 렌더링 되자마자 DOM 조작 처리(export handleLocation 함수 안에 있던 부분)
// if (path === "fanLog") {
//   // 로그인한 회원의 프로필사진과 닉네임을 화면에 표시해줌.
//   // ... 기존 코드 부분 ... //
//
//   // ↓ 탑바, 프로필 쪽 추가 구현 부분 ↓
//   //탑바 맨우측 현재 계정 프로필 이미지 출력
//   document.getElementById("profileImg2").src =
//     authService.currentUser.photoURL ?? "../assets/blankProfile.webp";
//
//   //드롭다운 메뉴 속 현재 계정 프로필 이미지 출력
//   document.getElementById("profileImg3").src =
//     authService.currentUser.photoURL ?? "../assets/blankProfile.webp";
//
//   //드롭다운 메뉴 속 계정 이메일 출력
//   document.getElementById("account-info").textContent =
//     authService.currentUser.email ?? "계정";
// }
//
// if (path === "profile") {
//   // 프로필 관리 화면 일 때 현재 프로필 사진과 닉네임 할당
//   document.getElementById("profileView").src =
//     authService.currentUser.photoURL ?? "/assets/blankProfile.webp";
//   document.getElementById("profileNickname").placeholder =
//     authService.currentUser.displayName ?? "닉네임 없음";
// }
//
// const GoToLorem = () => {
//   window.location.hash = "#lorem";
// };
//
// // hash url 변경 시 처리
// window.addEventListener("hashchange", handleLocation);
//
// // 첫 랜딩 또는 새로고침 시 처리
// document.addEventListener("DOMContentLoaded", handleLocation);
//
// 프로필 드롭다운 메뉴 토글
// export const toggleMenu = () => {
//   let subMenu = document.getElementById("subMenu");
//   // console.log(authService.currentUser.email);
//   subMenu.classList.toggle("open-menu");
// };

// const route = (event) => {
//   event.preventDefault();
//   window.location.hash = event.target.hash;
// };
//
// const routes = {
//   404: "/pages/404.html",
//   "/": "/pages/login.html",
//   about: "/pages/about.html",
//   lorem: "/pages/lorem.html",
//   create : "/pages/create.html",
//   main : "/pages/main.html"
// };
//
// const handleLocation = async () => {
//   let path = window.location.hash.replace("#", ""); //#about -> about
//
//   // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
//   if (path.length == 0) {
//     path = "/";
//   }
//   const route = routes[path] || routes[404];
//   const html = await fetch(route).then((data) => data.text());
//
//   document.getElementById("root").innerHTML = html;
//
//   // $('#login_form_lo').empty()
//   // $('#login_form_lo').append(html)
//
// };
//
// const GoToLorem = () => {
//   window.location.hash = "#lorem";
// };
//
// // hash url 변경 시 처리
// window.addEventListener("hashchange", handleLocation);
//
// // 첫 랜딩 또는 새로고침 시 처리
// document.addEventListener("DOMContentLoaded", handleLocation);
