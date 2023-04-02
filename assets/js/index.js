//Global variables
// const runTimeDisplay = 
const movieList = document.getElementById('show-movies')
window.addEventListener('DOMContentLoaded', ()=>{
    // fetches everything from db.json server
    const fetchMovieList = fetch('/db.json')
    fetchMovieList.then(res => res.json()).then(data => {
        const films = data.films
        // loops through all the movies
        films.map(film => {
            // return the title of all movies
            const movie = film.title
            const list = document.createElement('ul')
            list.innerHTML = `
                <li>${movie}</li>
            `
            list.style.cursor = 'pointer'
            list.addEventListener('click', () => {
                return showMovies(film)
            })
            movieList.appendChild(list)
        })

        function showMovies(movie){
            const movieClicked = document.getElementById('movies')
            movieClicked.innerHTML = `
                <img src=${movie.poster}>
                <h5>${movie.title}</h5>
                <h5>${movie.description}</h5>
            `

            getOtherInfo(movie)
        }
        function getOtherInfo(movie){
            const otherInfo = document.getElementById('movie-info')
            let bal = movie.capacity - movie.tickets_sold
            otherInfo.innerHTML = `
                <h4>Run Time: ${movie.runtime}</h4>
                <h4>Show Time: ${movie.showtime}</h4>
                <h4>Available Tickets: <span id='remain'>${bal}</span></h4>
                <button id=buyTicket>Buy Ticket</button>
            `
            const btn = document.getElementById('buyTicket')
            btn.addEventListener('click', ()=>{
                return buyTicket(bal--, btn)
            })
        }

        function buyTicket(bal, btn){
            const remain = document.getElementById('remain')
            if(bal === 0){
                btn.disabled = true
            }
            return remain.textContent = bal;
        }

    })
})
