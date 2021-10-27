const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d5fc0a2766b972874b930d998c010b33&page=1'
const IMG = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d5fc0a2766b972874b930d998c010b33&query="'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')



async function getMovies(url) {

    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results);
    console.log(data)
    showMovies(data.results)
}

getMovies(API_URL)


function showMovies(movies) {
    main.innerHTML = " "


    movies.forEach((curr) => {

        const { title, poster_path, vote_average, overview } = curr

        const movieEle = document.createElement('div')


        movieEle.innerHTML = `
        <div class="card">
                    <img src="${IMG + poster_path}" alt="${title}">

                    <div class="title">
                        <h3>${title} </h3>
                        <p class="rating">${vote_average}</p>
                    </div>
                        <div class="overview">
                            <h3>About Movie</h3>
                            <p>${overview}</p>
                        </div>

        </div>`
        main.appendChild(movieEle)

    })
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        console.log(SEARCH_API + searchTerm);
        search.value = ''
    } else {
        window.location.reload()
    }

})
