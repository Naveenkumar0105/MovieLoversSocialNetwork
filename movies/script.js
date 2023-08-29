const moviesSection = document.getElementById('movies');

fetch('https://api.example.com/movies')
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      const movieElement = document.createElement('article');
      const titleElement = document.createElement('h2');
      const imageElement = document.createElement('img');
      const ratingElement = document.createElement('p');

      titleElement.textContent = movie.title;
      imageElement.src = movie.image;
      ratingElement.textContent = `Rating: ${movie.rating}/10`;

      movieElement.appendChild(titleElement);
      movieElement.appendChild(imageElement);
      movieElement.appendChild(ratingElement);

      moviesSection.appendChild(movieElement);
    });
  });
