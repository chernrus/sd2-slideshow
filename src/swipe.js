let y0 = null,
    dif = null,
    position = 0;

const _C = document.querySelector('.slide'),
     N = 3,
     pageDownArrowContainer = document.querySelector('.slide__page-down'),

    unify = (e) => {	return e.changedTouches ? e.changedTouches[0] : e },

    /**
     * getPosition - get current position
     * @param {object} e event element
     */
    getPosition = (e) => {
        y0 = unify(e).clientY;
    },

   /**
    * drag - event on touch or mousedown
    * @param {object} e event element
    */
    drag = (e) => {
        const touchTrack = Math.round(unify(e).clientY- y0);
        if(touchTrack > 40 && position > 0) {
            dif = -768;
        }
        else if (touchTrack < -40 && position < 768*(N-1)) {
            dif = 768;
        }
        else {
            dif = 0;
        }
    },

    /**
     * move - move slide on next/prev page
     * @param {object} e event element
     */
    move = (e) => {
        if (dif != 0 && e.target.nodeName != 'BUTTON') {
            position = Math.abs(position + dif);
            goTo(null, position);
        }
    },

    /**
     * hidePageDownArrow - hide block when last page
     */
    hidePageDownArrow = () => {
        pageDownArrowContainer.style.display = 'none';
    },

    /**
     * showPageDownArrow - show block when non last page
     */
    showPageDownArrow = () => {
        pageDownArrowContainer.style.display = 'block';
    },

    /**
     * setActiveButton - change buttons color
     * @param {object} index - current page index
     */
    setActiveButton = (index) => {
        const navButtons = document.querySelectorAll(".slide__navigation-button");

        navButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        navButtons[index].classList.add('active');
    },

    /**
     * goTo - got to page by index or position
     * @param {number} index - current page index
     * @param {number} pos - position in px
     */
    goTo = (index, pos) => {

        position = pos || 768 * index;
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
        index = index || position/768;
        if(index != 0) {
            hidePageDownArrow();
        }
        else {
            showPageDownArrow();
        }

        setActiveButton(index);
    };

_C.addEventListener('touchstart', getPosition, false);

_C.addEventListener('touchmove', drag, false);

_C.addEventListener('touchend', move, false);

goTo(0);

exports.goTo = goTo;
