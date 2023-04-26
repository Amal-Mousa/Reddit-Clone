const logoutIcon = document.querySelector('.logout');

logoutIcon.addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST'
  })
    .then(res => res.json())
    .then(() => {
      localStorage.clear();
      window.location.href = '/'
    })
    .catch((err) => console.error(err))
});