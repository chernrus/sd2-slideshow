console.log('hello world');


const parallax = document.querySelectorAll('.ice-parallax');

window.onscroll = function() {
    parallax.forEach(function(el, i) {
    	const windowYOffset = window.pageYOffset;
    	// el.style.top = (-windowYOffset * .5) + "px";
    });
};

function moveTabs(offset) {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        tab.style.transition = "1s"
        tab.style.left = offset + "px";
    });
}

function showValue(val,slidernum, isinput) {
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
    var thumb = document.getElementById("sliderthumb" + slidernum);
    var shell = document.getElementById("slidershell" + slidernum);
    var track = document.getElementById("slidertrack" + slidernum);
    var fill = document.getElementById("sliderfill" + slidernum);
    // var rangevalue = document.getElementById("slidervalue" + slidernum);
    var slider = document.getElementById("slider" + slidernum);

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
}

function setValue(val,num,vertical) {
    document.getElementById("slider"+num).value = val;
    showValue(val,num,vertical);
}

document.addEventListener('DOMContentLoaded', function(){
  setValue(0,1,false);
})
