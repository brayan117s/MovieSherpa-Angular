const apiKey = "4a6a947b3491c20003ab1551d9bc88f1";

const form = document.getElementById("criteria-form");
form.addEventListener("submit", getSuggestedMovie);

async function getSuggestedMovie(event) {
	event.preventDefault();

	const age = document.getElementById("age").value;
	const genre = document.getElementById("genre").value;
	const year = document.getElementById("year").value;

	let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false`;

	if (age !== "0") {
		url += `&certification_country=US&certification.lte=${age}`;
	}

	if (genre) {
		url += `&with_genres=${genre}`;
	}

	if (year) {
		url += `&primary_release_year=${year}`;
	}

	const response = await fetch(url);
	const data = await response.json();

	let movie = null;
	const regex = /(porno|xxx|sexo)/i; //Esto escluye de las sugerencias películas que contengan estos términos en su título.

	while (movie === null ||
		movie.overview === "" ||
		movie.overview === null ||
		movie.poster_path === "" ||
		movie.poster_path === null ||
		movie.adult === true ||
		regex.test(movie.title)
	){
		movie = data.results[Math.floor(Math.random() * data.results.length)];
	}

	const movieTitle = document.getElementById("movie-title");
	const movieOverview = document.getElementById("movie-overview");
	const moviePoster = document.getElementById("movie-poster");

	movieTitle.textContent = movie.title;
	const maxChars = 222;
	if (movieOverview.textContent.length > maxChars) {
		movieOverview.textContent = movieOverview.textContent.slice(0, maxChars) + "...";
	}
	moviePoster.src = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
	const posterPath = moviePoster.src;
	const container = document.querySelector(".container");
	container.style.backgroundImage = `url(${posterPath})`;
}

window.onload = getSuggestedMovie;