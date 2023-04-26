
const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirmPassword-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[a-zA-Z0-9]{5,}$/;

username.focus();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.clear();

  const formData = new FormData(form);
  const newData = Object.fromEntries(formData);
  // console.log(newData);

  let hasError = false;

  if (!newData.username) {
    usernameError.textContent = 'Username is a requried field';
    hasError: true;
  } else if (newData.username.length < 3 || newData.username.length > 30) {
    usernameError.textContent = 'Username should have a length between 3 and 30 characters';
    hasError: true;
  } else {
    usernameError.textContent = ''
  }

  if (!newData.email) {
    emailError.textContent = 'Email is a required field';
    hasError: true;
  } else if (!emailRegex.test(newData.email)) {
    emailError.textContent = 'Invalid Email Format';
    hasError = true;
  } else {
    emailError.textContent = '';
  }

  if (!newData.password) {
    passwordError.textContent = 'Password is a required field';
    hasError: true;
  } else if (!passwordRegex.test(newData.password)) {
    passwordError.textContent = 'Password should have at least 5 character and only numbers and letters';
    hasError = true;
  } else {
    passwordError.textContent = '';
  }

  if (!newData.confirmPassword) {
    confirmPasswordError.textContent = 'Confirm Password is a required field';
    hasError = true;
  } else if (newData.password !== newData.confirmPassword) {
    confirmPasswordError.textContent = 'Passwords do not match';
    hasError = true;
  } else {
    confirmPasswordError.textContent = '';
  }
  if (!hasError) {
    const signupData = {
      username: newData.username,
      email: newData.email,
      password: newData.password,
      confirmPassword: newData.confirmPassword
    };

    fetch("/signup", {
      method: "POST",
      headers: {
        Accept: "application/json text/plain */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/home';
        } else if (response.status === 401) {
          emailError.textContent = 'Email already exists';
        }
        return response.json();
      })
      .then(({ data }) => {
        localStorage.setItem('userId', data.rows.id);
        localStorage.setItem('username', data.rows.username);
        localStorage.setItem('email', data.rows.email);
      })
      .catch((err) => console.log(err));
  }
});

