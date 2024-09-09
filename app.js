const loginButton = document.getElementById("login");
const singupButton = document.getElementById("singup");
const singupdiv = document.getElementById("singup-div");
const logindiv = document.getElementById("login-divs");
console.log(logindiv);
const loginsFormData = document.getElementById("logins-form-data");
const loginsButton = document.getElementById("logins-button");
const secondLoginButton = document.getElementById("login-page-click")
const mobileaddForm = document.getElementById("mobileadd-form")
const removeButton = document.getElementById("remove-form")
const removeLogin = document.getElementById("remove-button")
const body = document.querySelector("body");

singupButton.addEventListener("click", (event) => {
    console.log("event1");
    // singupdiv.classList.toggle("singin-div-display")
    singupdiv.classList.add("singin-div-display")

})
loginButton.addEventListener("click", (event) => {
    event.preventDefault("")
    // singupdiv.classList.toggle("singin-div-display")
    singupdiv.classList.add("singin-div-display")

})
secondLoginButton.addEventListener("click", (event) => {
    // console.log("event3");

    event.preventDefault("")

    logindiv.classList.add("login-div-display")
    singupdiv.style.display = "none"
})
// get value loging form 
// loginsFormData.addEventListener("submit", (event) => {

//     event.preventDefault()
//     const formTarget = event.target
//     const firstChild = formTarget.firstElementChild.value;
//     if (firstChild == "") {
//         loginsButton = "disabled"
//         loginsButton.classList.add = "buttonstyle"

//     }
//     else {
//         console.log("ho gya enabled");
//         loginsButton = "enabled"

//     }



// })
mobileaddForm.addEventListener("click", (event) => {
    event.preventDefault()

    singupdiv.classList.add("singin-div-display")

})
removeButton.addEventListener("click", (event) => {
    event.preventDefault()
    singupdiv.classList.remove("singin-div-display")
})
removeLogin.addEventListener("click", (event) => {
    event.preventDefault("")
    logindiv.classList.remove("login-div-display")
    // singupdiv.style.display = "none"
})
