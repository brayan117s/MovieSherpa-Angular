(() => {
    const link: HTMLAnchorElement | null = document.querySelector('footer a');
    link?.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const width: number = 600;
        const height: number = 400;
        const left: number = window.screen.width / 2 - width / 2;
        const top: number = window.screen.height / 2 - height / 2;
        window.open('privacy-policy.html', 'privacy-policy', `width=${width}, height=${height}, left=${left}, top=${top}`);
    });
})();