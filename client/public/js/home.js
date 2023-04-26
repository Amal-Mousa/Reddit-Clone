fetch('/posts')
  .then((posts) => posts.json())
  // .then(res => console.log(res))
  .then((({ data }) => renderPosts(data.posts)))
  .catch((err) => console.log(err))



