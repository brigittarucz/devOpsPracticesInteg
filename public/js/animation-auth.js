var authOverlay = document.querySelector(".main__auth-overlay");
var signupContainer = document.querySelector(".main__auth-signup_container");
var loginContainer = document.querySelector(".main__auth-login_container");

var signupContent = document.querySelector(".main__auth-overlay_article-signup");
var loginContent = document.querySelector(".main__auth-overlay_article-login");

// BY DEFAULT: 
authOverlay.classList.remove("main__auth-overlay_reverse");
signupContainer.style.display = "none";
loginContainer.style.display = "block";
signupContent.classList.remove("inactive");
loginContent.classList.add("inactive");

function animateLogin() {
    authOverlay.classList.remove("main__auth-overlay_reverse");
    signupContainer.style.display = "none";
    loginContainer.style.display = "block";
    signupContent.classList.remove("inactive");
    loginContent.classList.add("inactive");
}

function animateSignup() {
    authOverlay.classList.add("main__auth-overlay_reverse")
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
    loginContent.classList.remove("inactive");
    signupContent.classList.add("inactive");
}