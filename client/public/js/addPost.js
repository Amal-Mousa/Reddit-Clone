const form = document.querySelector('form');
const title = document.getElementById('title');
const titleError = document.getElementById('title-error');
const content = document.getElementById('content');
const contentError = document.getElementById('content-error');
const image = document.getElementById('image');

const titleRegex = /^.{3,250}$/;
const contentRegex = /^.{10,600}$/;

title.focus();
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const newData = Object.fromEntries(formData);

  let hasError = false;

  if (!newData.title) {
    titleError.textContent = 'Title is a required field';
    hasError = true;
  } else if (!titleRegex.test(newData.title)) {
    titleError.textContent = 'Title should be between 3 and 250 characters long';
    hasError = true;
  } else {
    titleError.textContent = '';
  }

  if (!newData.content) {
    contentError.textContent = 'Content is a required field';
    hasError = true;
  } else if (!contentRegex.test(newData.content)) {
    contentError.textContent = 'Content should be between 10 and 600 characters long';
    hasError = true;
  } else {
    contentError.textContent = '';
  }

  if (!hasError) {
    const addPostData = {
      title: newData.title,
      content: newData.content,
      image: newData.image || null,
    };

    fetch('/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addPostData),
    })
      .then((post) => post.json())
      .then((({ data }) => {
        window.location.href = '/profile';
      }))
      .catch((error) => {
        console.error(error);
      });
  }
});
