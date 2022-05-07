let toggle = document.querySelector(".toggle");
let navbar = document.querySelector(".navbar");
let i = 0 ;

toggle.onclick = function () {
    i++;
    navbar.style = `height:fit-content;display:block;`;
    if ( i > 1) {
        navbar.style = "display: none ;";
        i = 0;
    }
}
