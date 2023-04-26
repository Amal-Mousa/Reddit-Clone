const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[a-zA-Z0-9]{5,}$/;

email.focus();
form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.clear();

  const formData = new FormData(form);
  const newData = Object.fromEntries(formData);

  let hasError = false;

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


  if (!hasError) {
    const signinData = {
      email: newData.email,
      password: newData.password,
    };

    fetch('/signin', {
      method: 'POST',
      headers: {
        Accept: "application/json text/plain */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinData)
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/home';
        } else if (response.status === 400) {
          passwordError.textContent = 'Invalid Email or Password';
        }
        return response.json()
      })
      .then(({ data }) => {
        localStorage.setItem('userId', data.user.id);
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('email', data.user.email);
      })
      .catch((err) => console.log(err))
  }
});