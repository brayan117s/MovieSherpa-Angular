window.addEventListener("beforeprint", (event: Event) => {
    event.preventDefault();
    alert("Attention: Someone is attempting to print this page. Please note that some malicious software may have the ability to take screenshots in the background, even if the print option is disabled. Therefore, it is important that you take appropriate security measures to protect any confidential information displayed on this page.");
});

document.addEventListener("contextmenu", (e: Event) => {
    e.preventDefault();
});

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.keyCode === 73)) ||
        (e.metaKey && e.altKey && e.key === "I") ||
        (e.metaKey && e.altKey && e.key === "C")
    ) {
        e.preventDefault();
    }
});

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
        (e.ctrlKey && e.key === "s") ||
        (e.metaKey && e.key === "s") ||
        (e.metaKey && e.altKey && e.key === "s")
    ) {
        e.preventDefault();
    }
});