const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
const username = usernameInput.value;
const password = passwordInput.value;

const authenticated = authentication(username, password);

if (authenticated) {
alert("Login successful!");
  // Redirect to another page or perform other actions upon successful login
window.location.href = "index.html";
} else {
alert("Wrong username or password.");
}
});

function authentication(username, password) {
// Replace this with your actual authentication logic
// For demonstration purposes, always return true
return true;
}