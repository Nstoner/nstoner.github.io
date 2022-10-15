const menuIcon = document.getElementById("menuicon");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const sideBar = document.querySelector(".side-bar");

menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("isOpen")) {
        menuIcon.classList.remove("isOpen");
        line1Tag.classList.remove("rotateline1");
        line2Tag.classList.remove("hideline2");
        line3Tag.classList.remove("rotateline3");
        sideBar.classList.remove("active");
        searchForm.classList.remove("searchFormActive");
        window.onscroll = () => {
            line1Tag.classList.remove("rotateline1");
            line2Tag.classList.remove("hideline2");
            line3Tag.classList.remove("rotateline3");
            sideBar.classList.remove("active");
            menuIcon.classList.remove("isOpen");
            
        }
    }else {
        line1Tag.classList.add("rotateline1");
        line2Tag.classList.add("hideline2");
        line3Tag.classList.add("rotateline3");
        sideBar.classList.add("active")
        menuIcon.classList.add("isOpen");
        searchForm.classList.remove("searchFormActive");
    }
})


const searchIcon = document.getElementById("search-btn");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("searchFormActive");
    sideBar.classList.remove("active");
    menuIcon.classList.remove("isOpen");
    line1Tag.classList.remove("rotateline1");
    line2Tag.classList.remove("hideline2");
    line3Tag.classList.remove("rotateline3");
});

