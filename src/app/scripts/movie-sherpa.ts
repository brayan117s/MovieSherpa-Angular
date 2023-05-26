const apiKey: string = "4a6a947b3491c20003ab1551d9bc88f1";

const form: HTMLFormElement = document.getElementById("criteria-form") as HTMLFormElement;
form.addEventListener("submit", getSuggestedMovie);

async function getSuggestedMovie(event: Event): Promise<void> {
    event.preventDefault();

    const age: string = (document.getElementById("age") as HTMLInputElement).value;
    const genre: string = (document.getElementById("genre") as HTMLInputElement).value;
    const year: string = (document.getElementById("year") as HTMLInputElement).value;

    let url: string = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false`;

    if (age !== "0") {
        url += `&certification_country=US&certification.lte=${age}`;
    }

    if (genre) {
        url += `&with_genres=${genre}`;
    }

    if (year) {
        url += `&primary_release_year=${year}`;
    }

    const response: Response = await fetch(url);
    const data: any = await response.json();

    let movie: any = null;
    const regex: RegExp = /(porno|xxx|sexo)/i; // Esto excluye películas que contengan estos términos en su título.

    while (
        movie === null ||
        movie.overview === "" ||
        movie.overview === null ||
        movie.poster_path === "" ||
        movie.poster_path === null ||
        movie.adult === true ||
        regex.test(movie.title)
    ) {
        movie = data.results[Math.floor(Math.random() * data.results.length)];
    }

    const movieTitle: HTMLElement = document.getElementById("movie-title");
    const movieOverview: HTMLElement = document.getElementById("movie-overview");
    const moviePoster: HTMLImageElement = document.getElementById("movie-poster") as HTMLImageElement;

    movieTitle.textContent = movie.title;
    const maxChars: number = 222;
    if (movieOverview.textContent.length > maxChars) {
        movieOverview.textContent = movieOverview.textContent.slice(0, maxChars) + "...";
    }
    moviePoster.src = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
    const posterPath: string = moviePoster.src;
    const container: HTMLElement = document.querySelector(".container");
    container.style.backgroundImage = `url(${posterPath})`;
}

window.onload = getSuggestedMovie;