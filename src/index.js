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
    };

document.addEventListener('DOMContentLoaded', function(){
  setValue(0,false);
})

window.onscroll = function() {
	const windowYOffset = window.pageYOffset;
	parallax.style.top = (-windowYOffset * .5 + 400) + "px";
};

exports.showValue = showValue;
