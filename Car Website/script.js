// Initialize Firebase
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsswiyJODDOpnt8-USSZgwi5PrYykHdgA",
  authDomain: "nbcar-36415.firebaseapp.com",
  databaseURL: "https://nbcar-36415-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nbcar-36415",
  storageBucket: "nbcar-36415.appspot.com",
  messagingSenderId: "39523893639",
  appId: "1:39523893639:web:e4dcf062191e38cdb4d322",
  measurementId: "G-QYZRP6YTD7"
};*/

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 //firebase.initializeApp(firebaseConfig);

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
 /* // Get references to the login form elements
  var emailInput = document.getElementById("email-input");
  var passwordInput = document.getElementById("password-input");
  var loginBtn = document.getElementById("login-btn");
  
  // Add a click event listener to the login button
  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
  
    // Get the email and password from the form
    var email = emailInput.value;
    var password = passwordInput.value;
  
    // Sign in the user with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user) {
        var messageBox = document.getElementById("message-box");ß
        messageBox.innerHTML = "User signed in: " + user.email;
        messageBox.style.display = "block";

    // Open the dashboard page
    window.location.href = "car-management-system.html";
      })
      .catch(function (error) {
        var messageBox = document.getElementById("message-box");
        messageBox.innerHTML = "Error signing in: " + error.message;
        messageBox.style.display = "block";
      });
  });*/
  