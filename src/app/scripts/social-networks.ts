const facebookIcon: Element | null = document.querySelector(".icon-facebook");

facebookIcon?.addEventListener("click", function(this: HTMLAnchorElement) {
    this.href = "https://www.facebook.com/IngenieTek";
});

const twitterIcon: Element | null = document.querySelector(".icon-twitter");

twitterIcon?.addEventListener("click", function(this: HTMLAnchorElement) {
    this.href = "https://twitter.com/share?url=" + encodeURIComponent(window.location.href);
});

const linkedinIcon: Element | null = document.querySelector(".icon-linkedin");

linkedinIcon?.addEventListener("click", function(this: HTMLAnchorElement) {
    this.href = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(window.location.href);
});

const mailIcon: Element | null = document.querySelector(".icon-mail");

mailIcon?.addEventListener("click", function(this: HTMLAnchorElement) {
    this.href = "mailto:contacto@ingenietek.tech?subject=Message Mensaje Mensagem&body=Hi,%20I%20found%20your%20website%20and%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services.%20Thank%20you.%0D%0A%0D%0AHola%2C%20encontré%20tu%20sitio%20web%20y%20me%20gustaría%20saber%20más%20acerca%20de%20tus%20productos%20y%20servicios.%20Gracias.%0D%0A%0D%0AOlá,%20encontrei%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos%20e%20serviços.%20Obrigado.";
});