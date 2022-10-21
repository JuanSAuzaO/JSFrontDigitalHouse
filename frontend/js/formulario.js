window.onload = () => {
    const form = document.querySelector('form');
    const title = document.querySelector('#title');
    const rating = document.querySelector('#rating');
    const awards = document.querySelector('#awards');
    const release_date = document.querySelector('#release_date');
    const length = document.querySelector('#length');

    const url_base = 'http://localhost:3031';

    let index = prompt('Insert movie index please');
    let id = index + 1;
    let action = prompt('What do you want to do? ("create", "update")')
    
    while(action != 'create' || action != 'update') {
        if (action == 'create') {
            form.action = `http://localhost:3031/api/movies/create`;
            form.method = "POST";
            break;
        } else if (action == 'update') {
            form.action = `http://localhost:3031/api/movies/update/${id}?_method=PUT`;
            form.method = "POST";
            fetch(`${url_base}/api/movies/${id}`)
            .then((response) => response.json())
              .then ((movie) => {
                  //Allmovies = movies.data;
                  console.log(movie);
                  movie = movie.data;
                  let date = new Date(movie.release_date);
                  console.log(date.toString())
                  let year = date.getFullYear();
                  let month = (date.getMonth() + 1).toString().padStart(2, "0");
                  let day = date.getDate().toString().padStart(2, "0");
                  selectedDate = `${year}-${month}-${day}`
                  title.value = movie.title;
                  rating.value= movie.rating;
                  awards.value = movie.awards;
                  release_date.value = selectedDate;
                  length.value = movie.length;
              })
            break;
        } else {
            let action = prompt('Please type correctly ("create", "update")');
            if (action == 'create') {
                form.action = `http://localhost:3031/api/movies/create`;
                form.method = "POST";
                break;
            } else if (action == 'update') {
                form.action = `http://localhost:3031/api/movies/update/${id}?_method=PUT`;
                form.method = "POST";
                fetch(`${url_base}/api/movies/${id}`)
                .then((response) => response.json())
                  .then ((movie) => {
                      //Allmovies = movies.data;
                      console.log(movie);
                      movie = movie.data;
                      let date = new Date(movie.release_date);
                      console.log(date.toString())
                      let year = date.getFullYear();
                      let month = (date.getMonth() + 1).toString().padStart(2, "0");
                      let day = date.getDate().toString().padStart(2, "0");
                      selectedDate = `${year}-${month}-${day}`
                      title.value = movie.title;
                      rating.value= movie.rating;
                      awards.value = movie.awards;
                      release_date.value = selectedDate;
                      length.value = movie.length;
                  })
                  break;
            }
        }
    }

}