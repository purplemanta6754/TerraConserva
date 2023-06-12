
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Obtener todos los elementos de navegación en la lista de secciones
const navItems = document.querySelectorAll('nav a');

// Obtener todas las secciones en la página
const sections = document.querySelectorAll('main section');

// Función para agregar o quitar una clase activa en el elemento de navegación correspondiente
function activateNavItem(index) {
    navItems.forEach(item => item.classList.remove('active'));
    navItems[index].classList.add('active');
}

// Función para comprobar qué sección está visible en la ventana
function checkSectionInView() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activateNavItem(index);
        }
    });
}

// Llamada inicial para establecer la clase activa en el elemento de navegación actual
checkSectionInView();

// Agregar un evento de desplazamiento para comprobar qué sección está visible en la ventana mientras se desplaza
window.addEventListener('scroll', checkSectionInView);
