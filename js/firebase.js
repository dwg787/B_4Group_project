// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
 apiKey: "AIzaSyAeS1kojltgLk6ge7yJVRKupcxXVNDLdp0",
  authDomain: "test2-fbd95.firebaseapp.com",
  projectId: "test2-fbd95",
  storageBucket: "test2-fbd95.appspot.com",
  messagingSenderId: "25595417861",
  appId: "1:25595417861:web:a5d3098b463e005d00d36c",
  measurementId: "G-NBXNWC2RBY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);


//
// 내 코드
// apiKey: "AIzaSyDuM8KXkh0ASlpvM_xIryV7YuB7gXdZXM4",
//   authDomain: "test-a6f5c.firebaseapp.com",
//   projectId: "test-a6f5c",
//   storageBucket: "test-a6f5c.appspot.com",
//   messagingSenderId: "546247560866",
//   appId: "1:546247560866:web:936539458a41f27cbb51fb",
//   measurementId: "G-MXKS43J261"




  // 상현님 코드
  // apiKey: "AIzaSyBLC85NBtPaLOoWyBoSKwexacA6bC4qZX0",
  // authDomain: "privatefanbook.firebaseapp.com",
  // projectId: "privatefanbook",
  // storageBucket: "privatefanbook.appspot.com",
  // messagingSenderId: "691166733828",
  // appId: "1:691166733828:web:7fb27f2b27fb95304fb751",
//
// 튜터님 코드
//   apiKey: "AIzaSyBLC85NBtPaLOoWyBoSKwexacA6bC4qZX0",
//   authDomain: "privatefanbook.firebaseapp.com",
//   projectId: "privatefanbook",
//   storageBucket: "privatefanbook.appspot.com",
//   messagingSenderId: "691166733828",
//   appId: "1:691166733828:web:7fb27f2b27fb95304fb751",

// 내 코드 2
//  apiKey: "AIzaSyAeS1kojltgLk6ge7yJVRKupcxXVNDLdp0",
//   authDomain: "test2-fbd95.firebaseapp.com",
//   projectId: "test2-fbd95",
//   storageBucket: "test2-fbd95.appspot.com",
//   messagingSenderId: "25595417861",
//   appId: "1:25595417861:web:a5d3098b463e005d00d36c",
//   measurementId: "G-NBXNWC2RBY"