document.documentElement.classList.add('js-enabled');

//const navElement = document.getElementById("main");
const positionTopNavElement = document.querySelector("nav").offsetTop;
console.log(positionTopNavElement);


window.addEventListener("scroll",  ()=> {
 //window.preventDefault();
    const nbPixelsScrolles = window.scrollY;
    console.log(nbPixelsScrolles);
    if ( nbPixelsScrolles >= positionTopNavElement) {
        document.body.classList.add("fixed-nav");
        document.body.style.padding = "5px";
    }
    else {
        document.body.classList.remove("fixed-nav");
    }
});


/* Ma solution !!! pas juste!!!!

const navElement = document.getElementById("main");
const positionTopNavElement = window.getComputedStyle(navElement).top;
console.log(positionTopNavElement);


nbPixelsScrolles = (window.clientHeight) - positionTopNavElement;
console.log(positionTopNavElement);
console.log();

window.addEventListener("scroll", function () {
    if ( parseInt(nbPixelsScrolles) >= parseInt(positionTopNavElement)) {
        document.body.classList.add("fixed-nav");
        document.body.style.padding = "5px";
    }
    else {
        document.body.classList.remove("fixed-nav");
    }
});

 */