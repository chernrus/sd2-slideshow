const parallaxContainer = document.querySelector('.slide__second-wrapper'),

    /**
     * slideParalax - move parallax elements with another speed
     */
    slideParalax = () => {
        const windowYOffset = window.pageYOffset;
        parallaxContainer.style.top = (-windowYOffset * .5 + 400) + "px";
    };


window.onscroll = slideParalax;
