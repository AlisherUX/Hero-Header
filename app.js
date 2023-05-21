"use strict";

let headerBtn = document.querySelector(".header_img");
let secHeaderBtn = document.querySelector(".header_imgBtn");
let headerBanner = document.querySelector(".header_banner");

headerBtn.addEventListener("click", ()=>{
    headerBanner.classList.add("open")
    headerBtn.classList.add("none")
    secHeaderBtn.classList.add("active")
});

secHeaderBtn.addEventListener("click", ()=>{
    headerBanner.classList.remove("open")
    headerBtn.classList.remove("none")
    secHeaderBtn.classList.remove("active")
})