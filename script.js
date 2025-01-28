document.addEventListener("DOMContentLoaded", () => {
    const stickySection = document.querySelector(".blogNewsInfosSection");
    const footer = document.querySelector("footer");

    const onScroll = () => {
        const stickyRect = stickySection.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();

        // Vérifie si la section "sticky" touche le footer
        if (stickyRect.bottom > footerRect.top) {
            stickySection.style.position = "absolute";
            stickySection.style.bottom = `${footerRect.height}px`;
        } else {
            stickySection.style.position = "sticky";
            stickySection.style.bottom = "unset";
        }
    };

    window.addEventListener("scroll", onScroll);
});
