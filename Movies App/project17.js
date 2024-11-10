const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3af86c7faff6a57ad1b5f9759c9af820&page=2'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API= 'https://api.themoviedb.org/3/search/movie?api_key=3af86c7faff6a57ad1b5f9759c9af820&query="'

const form = document.getElementById('form');
const search= document.getElementById('search');
const main = document.getElementById('main');
//Get initial movies 
getMovies(API_URL);

//search movies
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const searchTerm = search.value;
    if ( searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        setTimeout(()=>{
            search.value = '';
        },100)
    } else {
        window.location.reload()
    }
})

// Functions
async function getMovies(url) {
    const res=await fetch(url);
    const data = await res.json()
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML='';
    movies.forEach((movie) => {
        const { title, backdrop_path, vote_average, overview } = movie;
        
        // Check if backdrop_path exists and is not empty
        if (backdrop_path) {
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
            <img src="${IMG_PATH + backdrop_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getCLassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${overview}
            </div>
            `;
            main.appendChild(movieEl);
        } else {
            console.log(`No picture available for movie: ${title}`);
        }
    });
}


function getCLassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}