const userId = localStorage.getItem('userId');

fetch(`/userPosts/${userId}`)
  .then((posts) => posts.json())
  .then(({ data }) => renderPosts(data.message))