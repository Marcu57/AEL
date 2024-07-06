document.addEventListener('DOMContentLoaded', function() {
  const posts = [
    {
      title: 'Primeira Postagem',
      content: 'Bem-vindo ao nosso blog da Academia de Letras!',
      imageUrl: 'https://via.placeholder.com/600x400' // URL da imagem
    },
    {
      title: 'Segunda Postagem',
      content: 'Aqui discutimos diversos temas relacionados à literatura.',
      imageUrl: 'https://via.placeholder.com/600x400' // URL da imagem
    }
  ];

  const postsContainer = document.getElementById('posts');

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    if (post.imageUrl) {
      const postImage = document.createElement('img');
      postImage.src = post.imageUrl;
      postImage.alt = post.title;
      postElement.appendChild(postImage);
    }

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postContent = document.createElement('p');
    postContent.textContent = post.content;

    postElement.appendChild(postTitle);
    postElement.appendChild(postContent);

    postsContainer.appendChild(postElement);
  });
});
