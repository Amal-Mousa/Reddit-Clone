const postContainer = document.querySelector('.activity');
const usernameLink = document.querySelector('.username');
const usernameProfile = document.querySelector('.username-profile');
const emailDiv = document.querySelector('.user-email');

const username = localStorage.getItem('username');
const email = localStorage.getItem('email');

usernameLink.textContent = username;
if (usernameProfile) {
  usernameProfile.textContent = username;
  emailDiv.textContent = email;
}

function renderPosts(posts) {

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');

    const postTitle = document.createElement('div');
    postTitle.classList.add('post-title');

    const postTitleLink = document.createElement('a');
    postTitleLink.textContent = post.title;

    postTitle.appendChild(postTitleLink);

    const postAuthor = document.createElement('div');
    postAuthor.classList.add('post-author');

    const postAuthorLink = document.createElement('a');
    postAuthorLink.textContent = `u/${post.username}`;

    postAuthor.appendChild(postAuthorLink);

    postHeader.appendChild(postTitle);
    postHeader.appendChild(postAuthor);

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');

    const postContentParagraph = document.createElement('p');
    postContentParagraph.textContent = post.content;

    const postContentImage = document.createElement('img');
    postContentImage.setAttribute('src', post.image)
    // postContentImage.alt = 'image';

    postContent.appendChild(postContentParagraph);
    postContent.appendChild(postContentImage);

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');

    const postVotes = document.createElement('div');
    postVotes.classList.add('post-votes');

    const upvoteButton = document.createElement('button');
    upvoteButton.classList.add('upvote-btn');

    const voteCount = document.createElement('span');
    voteCount.classList.add('vote-count');
    voteCount.textContent = post.upvotes;

    const downvoteButton = document.createElement('button');
    downvoteButton.classList.add('downvote-btn');

    postVotes.appendChild(upvoteButton);
    postVotes.appendChild(voteCount);
    postVotes.appendChild(downvoteButton);

    postFooter.appendChild(postVotes);

    postElement.appendChild(postHeader);
    postElement.appendChild(postContent);
    postElement.appendChild(postFooter);

    postContainer.appendChild(postElement);
  });
}