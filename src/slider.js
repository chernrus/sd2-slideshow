/**
 * moveTabs - переключение между вкладками
 * @param {type} offset Description
 * @return {type} Description
 */
const moveTabs = (offset) => {
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

        let offset = 0;

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
        const thumb = document.getElementById("sliderthumb"),
            shell = document.getElementById("slidershell"),
            track = document.getElementById("slidertrack"),
            fill = document.getElementById("sliderfill"),
            slider = document.getElementById("slider"),

            pc = val/(slider.max - slider.min), /* the percentage slider value */
            thumbsize = 43, /* must match the thumb size in your css */
            bigval = 640, /* widest or tallest value depending on orientation */
            smallval = 12, /* narrowest or shortest value depending on orientation */
            tracksize = bigval - thumbsize,
            fillsize = 12,
            filloffset = 10,
            bordersize = 2,
            loc = pc * tracksize;

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
});

exports.showValue = showValue;
