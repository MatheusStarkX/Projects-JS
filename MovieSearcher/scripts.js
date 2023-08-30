// https://www.omdbapi.com/?i=tt0372784&plot=full&apikey=97cb0b95

const apiKey = "97cb0b95"
const id = "tt0372784"

const movieSearchBox = document.getElementById('search-bar')
const searchList = document.getElementById('search-list')
const content = document.getElementById('content')

async function loadMovies(search) {
    const URLsearch = `https://www.omdbapi.com/?s=${search}&page=1&apikey=${apiKey}`;
    const response = await fetch(`${URLsearch}`);
    const data = await response.json();

    if(data.Response == 'True'){
        displayMovieList(data.Search)
    }
    //console.log(data.Search)
}

function findMovies(){
    let search = (movieSearchBox.value).trim();

    if(search.length > 0){
        searchList.classList.remove('hide-search-list')
        loadMovies(search)
    }
    else{
        searchList.classList.add('hide-search-list')
    }
}

function displayMovieList(movies){
    searchList.textContent = ""
    for (let i = 0; i < movies.length; i++) {

        let searchListItem = document.createElement('div')
        let searchItemImage = document.createElement('div')
        let img = document.createElement('img')
        let searchItemInfo = document.createElement('div')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        
        searchListItem.classList.add('search-list-item')
        searchItemImage.classList.add('search-item-image')
        searchItemInfo.classList.add('search-item-info')

        if(movies[i].Poster != 'N/A'){
            img.src = movies[i].Poster
        }
        else{
            img.src = 'assets/image_not_found.png'
        }

        h3.textContent = movies[i].Title
        h4.textContent = movies[i].Year
        searchListItem.dataset.id = movies[i].imdbID

        searchItemImage.appendChild(img)
        searchListItem.appendChild(searchItemImage)
        searchItemInfo.appendChild(h3)
        searchItemInfo.appendChild(h4)
        searchListItem.appendChild(searchItemInfo)
        searchList.appendChild(searchListItem)
    } 
    loadMovieDetails()
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item')
    searchListMovies.forEach(movie => {
        movie.addEventListener('click' , async () => {
            searchList.classList.add('hide-search-list')
            movieSearchBox.value = ''
            const URLid = `https://www.omdbapi.com/?i=${movie.dataset.id}&plot=full&apikey=${apiKey}`;
            const response = await fetch(`${URLid}`);
            const movieDetails = await response.json();
        
            //console.log(movieDetails)
            displayMovieDetails(movieDetails) 
        })
    })
}

function displayMovieDetails(details){

    if(details.Poster != 'N/A'){
        poster = details.Poster
    } else{
        poster = 'assets/image_not_found.png'
    }
    
    content.innerHTML = `
        <div class="poster">
            <img src="${poster}" alt="Poster" width="300px"/>
        </div>
        <div class="infos">
            <h1>
                <span id="title">${details.Title}</span>
                <span id="year">(${details.Year})</span>
            </h1>
            <div class="sub-info">
                <span id="rated">${details.Rated}</span>
                <span id="released">${details.Released}</span>
                <span id="genre">${details.Genre}</span>
                <span id="runtime">${details.Runtime}</span>
            </div>

            <div class="ratings">
                <div class="rating">
                    <div class="source">Rotten Tomatoes</div>
                    <div class="circular-progress rotten-tomatoes">
                        <span class="progress-value rotten-tomatoes">0%</span>
                    </div>
                </div>
                <div class="rating">
                    <div class="source">Internet Movie Database</div>
                    <div class="circular-progress imdb">
                        <span class="progress-value imdb">0</span>
                    </div>
                </div>
                <div class="rating">
                    <div class="source">Metacritic</div>
                    <div class="circular-progress metacritic">
                        <span class="progress-value metacritic">0</span>
                    </div>
                </div>
            </div>
            <div class="plot">
                <h2>Sinopse</h2>
                <p>${details.Plot}</p>
            </div>
            <div class="people">
                <div>
                    <div class="person">${details.Director}</div>
                    <div class="work">Director</div>
                </div>
                <div>
                    <div class="person">${details.Writer}</div>
                    <div class="work">Writers</div>
                </div>
                <div>
                    <div class="person">${details.Actors}</div>
                    <div class="work">Actors/Actresses</div>
                </div>
            </div>

            <div class="awards">
                <h3>Awards</h3>
                <p>${details.Awards}</p>
            </div>
        </div> 
    </div>`

    if(details.Ratings != 'N/A'){
        AnimationProgressBar(details.Ratings)
    }
}

// Progress bar ratings
function AnimationProgressBar(ratings){

    let imdbRating = Number(ratings[0].Value.slice(0,3))*10;
    let rottenRating = Number(ratings[1].Value.slice(0,2));
    let metacriticRating = Number(ratings[2].Value.slice(0,2));

    let progressStartValueRT = 0, progressStartValueIMDB = 0, progressStartValueMC = 0;    
    let speed = 10;

    let circularProgressRT = document.querySelector(".circular-progress.rotten-tomatoes");
    let progressValueRT = document.querySelector(".progress-value.rotten-tomatoes");
    let progressRT = setInterval(() => {
        progressStartValueRT++;
        progressValueRT.textContent = `${progressStartValueRT}%`
        circularProgressRT.style.background = `conic-gradient(#ffee00 ${progressStartValueRT * 3.6}deg, #fff 0deg)`
        if(progressStartValueRT == rottenRating){
            clearInterval(progressRT);
        }    
    }, speed);

    let circularProgressIMDB = document.querySelector(".circular-progress.imdb");
    let progressValueIMDB = document.querySelector(".progress-value.imdb");
    let progressIMDB = setInterval(() => {
        progressStartValueIMDB++;
        progressValueIMDB.textContent = `${progressStartValueIMDB/10}`
        circularProgressIMDB.style.background = `conic-gradient(#ffee00 ${progressStartValueIMDB * 3.6}deg, #fff 0deg)`
        if(progressStartValueIMDB == imdbRating){
            clearInterval(progressIMDB);
        }    
    }, speed);

    let circularProgressMC = document.querySelector(".circular-progress.metacritic");
    let progressValueMC = document.querySelector(".progress-value.metacritic");
    let progressMC = setInterval(() => {
        progressStartValueMC++;
        progressValueMC.textContent = `${progressStartValueMC}`
        circularProgressMC.style.background = `conic-gradient(#ffee00 ${progressStartValueMC * 3.6}deg, #fff 0deg)`
        if(progressStartValueMC == metacriticRating){
            clearInterval(progressMC);
        }    
    }, speed);
}