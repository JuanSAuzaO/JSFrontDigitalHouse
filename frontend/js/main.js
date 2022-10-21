window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  
  const url_base = 'http://localhost:3031';

  fetch(`${url_base}/api/movies`)
    .then((response) => 
      response.json()
    )
    .then((movies) => {
      Allmovies = movies.data;
      Allmovies.forEach(function(movie) {
        const date = new Date(movie.release_date);
        container.innerHTML += `<div class="card">
        <p style='text-align:center;'>${movie.title}</p>
        <p>Calificación: ${movie.rating}</p>
        <p>Premios: ${movie.awards}</p>
        <p>Fecha de estreno: ${date.toDateString()}</p>
        <p>Duración: ${movie.length}</p></div>`
      })
    })
    .catch(err => {
      console.log(err);
    })

  /** Codigo que debemos usar para mostrar los datos en el frontend
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
  */
};
