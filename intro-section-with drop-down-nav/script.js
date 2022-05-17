const menuMobile = document.getElementById('menu-mobile')
const dropdownMobile = document.getElementsByClassName('dropdown-m')

window.matchMedia("(min-width: 769px)").addEventListener('change', function (event) {
    if (event.target.matches) {
        menuMobile.style.display = "none";
    }
});

document.getElementById('menu').onclick = () => {
    menuMobile.style.display = "block";
}

document.getElementById('menu-close').onclick = () => {
    menuMobile.style.display = "none";
    for (let i = 0; i < dropdownMobile.length; i++) {
        dropdownMobile[i].nextElementSibling.style.display = "none"
    }
}

for (let i = 0; i < dropdownMobile.length; i++) {
    dropdownMobile[i].addEventListener("click", function () {
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none"
        } else {
            dropdownContent.style.display = "block"
        }
    })
}