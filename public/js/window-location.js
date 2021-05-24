if(document.querySelector("nav .active")) {
    document.querySelector("nav .active").classList.remove("active");
}

var navIcons = document.querySelectorAll('.nav__icon');
var aNavIconClassNames = [];

navIcons.forEach(navIcon => {
    var classPath = navIcon.classList[1];
    classPath = classPath.slice(4, classPath.length);
    aNavIconClassNames.push(classPath);
})

aNavIconClassNames.forEach(path => {
    if(window.location.pathname.includes(path)) {
        document.querySelector('.nav-' + path).classList.add("active");
    }
})