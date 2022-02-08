import axios from "axios";

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7236af11&s=matrix')
  .then(res => {
    console.log(res)
    const h2El = document.querySelector('h2')
    const imgEl = document.querySelector('img')
    console.log(res.data.Search[0])
    h2El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  } )
}
fetchMovies()