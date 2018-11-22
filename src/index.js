"use strict;"

/**
 * moveTabs - переключение между вкладками
 * @param {type} offset Description
 * @return {type} Description
 */
const parallax = document.querySelector('.slide__second-wrapper'),

    moveTabs = (offset) => {
        const tabs = document.querySelectorAll('.tab');


        tabs.forEach((tab) => {
            tab.style.transition = "1s"
            tab.style.left = offset + "px";
        });
    },

    /**
     * showValue - управление слайдером
     * @param {type} val     значение input-range
     * @param {type} isinput режим oninput/onchange
     * @return {type} Description
     */
    showValue = (val, isinput) => {
        // src: https://css-tricks.com/custom-interactive-range-inputs/

        var offset = 0;

        if(!isinput) {
            if(val >= 0 && val < 25) {
                val = 0;
            }
            else if(val >= 25 && val <= 75) {
                val = 50;
            }
            else if(val > 75 && val <= 100) {
                val = 100;
            }
        }
        else {
            if(val >= 0 && val < 25) {
                offset = 0;
            }
            else if(val >= 25 && val <= 75) {
                offset = -1024;
            }
            else if(val > 75 && val <= 100) {
                offset = -2048;
            }
            moveTabs(offset);
        }
        /* setup variables for the elements of our slider */
        var thumb = document.getElementById("sliderthumb");
        var shell = document.getElementById("slidershell");
        var track = document.getElementById("slidertrack");
        var fill = document.getElementById("sliderfill");
        // var rangevalue = document.getElementById("slidervalue" + slidernum);
        var slider = document.getElementById("slider");

        var pc = val/(slider.max - slider.min); /* the percentage slider value */
        var thumbsize = 43; /* must match the thumb size in your css */
        var bigval = 640; /* widest or tallest value depending on orientation */
        var smallval = 12; /* narrowest or shortest value depending on orientation */
        var tracksize = bigval - thumbsize;
        var fillsize = 12;
        var filloffset = 10;
        var bordersize = 2;
        var loc = pc * tracksize;

        thumb.style.top =  "-3px";
        thumb.style.left = loc-3 + "px";
        fill.style.top = filloffset + bordersize + "px";
        fill.style.left = 0 + "px";
        fill.style.width = loc + (thumbsize/2) + "px";
        fill.style.height = fillsize + "px";
        shell.style.height = smallval + "px";
        shell.style.width = bigval + "px";
        track.style.height = fillsize + "px";
        track.style.width = bigval - 4 + "px";
        track.style.left = 0 + "px";
        track.style.top = filloffset + bordersize + "px";
    },

    /**
     * setValue -  установка начального значения
     * @param {type} val  значение input range
     * @param {type} mode режим oninput/onchange
     * @return {type} Description
     */
    setValue = (val, mode) => {
        document.getElementById("slider").value = val;
        showValue(val, mode);
    },

    slideParalax = () => {
        const windowYOffset = window.pageYOffset;
    	parallax.style.top = (-windowYOffset * .5 + 400) + "px";
        // console.log(windowYOffset, parallax.style.top);
    };

document.addEventListener('DOMContentLoaded', function(){
  setValue(0,false);
})



window.onscroll = slideParalax;

const _C = document.querySelector('.slide'),
      N = 3;

let i = 0, y0 = null, locked = false, dif = null, position = 0;

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) {
    y0 = unify(e).clientY;
    // position = e.offsetTop;
    console.log(e);
	// _C.classList.toggle('smooth', !(locked = true))
    console.log('touchstart');
};

function drag(e) {
    console.log('move');
	// e.preventDefault();
// // slideParalax();
    console.log(`${Math.round(unify(e).clientY- y0)}px`);
    // dif = Math.round(unify(e).clientY- y0) > 0 ?  : 768;
    if(Math.round(unify(e).clientY- y0) > 50) {
        dif = -768;
    }
    else if (Math.round(unify(e).clientY- y0) < -50 ) {
        dif = 768;
    }
    else {
        dif = 0;
    }
// 	// if(locked)
// 		// _C.style.setProperty('--ty', `${Math.round(unify(e).clientY- y0)}px`)
};

function move(e) {
    console.log('touchend');
    let dy = unify(e).clientY - y0, s = Math.sign(dy);
    console.log(position);

    window.scrollTo({
        top: position+dif,
        behavior: 'smooth'
    });

    position = position + dif;
  // if(locked) {
  //   let dy = unify(e).clientY - y0, s = Math.sign(dy);
  //   console.log(dy);
  //   //
  //   // if((i > 0 || s < 0) && (i < N - 1 || s > 0))
  //   //   _C.style.setProperty('--i', i -= s);
  //   // _C.style.setProperty('--ty', '0px');
  //   // _C.classList.toggle('smooth', !(locked = false));
  //   // y0 = null;
  //
  //   window.scrollTo({
  //     top: dy+768,
  //     behavior: 'smooth'
  //   });
  // }

};

_C.style.setProperty('--n', N);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mousemove', drag, false);
_C.addEventListener('touchmove', drag, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);

exports.showValue = showValue;
