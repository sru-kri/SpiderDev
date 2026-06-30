
let signupForm = document.getElementById("signupForm");
let loginForm = document.getElementById("loginForm");

let showLogin = document.getElementById("showLogin");
let showSignup = document.getElementById("showSignup");

showLogin.addEventListener("click", function (e) {
    e.preventDefault();

    signupForm.classList.remove("active");
    loginForm.classList.add("active");
});

showSignup.addEventListener("click", function (e) {
    e.preventDefault();

    loginForm.classList.remove("active");
    signupForm.classList.add("active");
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Account created successfully!");

    signupForm.reset();

    signupForm.classList.remove("active");
    loginForm.classList.add("active");
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");

        window.location.href = "dashboard.html";
    } else {
        alert("Wrong email or password!");
    }
});