let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
let scrollingUp = false;
let scrollingDown = false;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        scrollingDown = true;
        scrollingUp = false;
    } else if (currentScrollPos < prevScrollPos) {
        // Scrolling up
        scrollingUp = true;
        scrollingDown = false;
    }

    prevScrollPos = currentScrollPos;

    // You can perform further actions based on the scrolling direction
    if (scrollingUp) {
        // Code for when scrolling up
    } else if (scrollingDown) {
        // Code for when scrolling down
    }
};
