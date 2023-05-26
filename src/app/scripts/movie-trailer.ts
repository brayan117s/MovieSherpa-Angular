window.addEventListener('load', () => {

    function buscarTrailer(): void {
        const movieTitle: string = document.getElementById('movie-title')!.textContent!;
        const url: string = `https://www.youtube.com/results?search_query=${encodeURIComponent(movieTitle)}+trailer`;
        window.open(url);
    }

    const boton: HTMLElement = document.getElementById('trailer-button')!;
    boton.addEventListener('click', buscarTrailer);
});