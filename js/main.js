// TP 8
let header = document.querySelector(".main-header");
let footer = document.querySelector("#footer");

let mainHeader = `<div class="main-nav">
            <a href="index.html" class="main-header__link">
                <img src="img/logo.png" alt="Logo" class="main-header__logo">
            </a>
            <nav class="main-header__nav">
                <ul class="main-nav__items nav__items">
                    <li class="main-nav__item nav__item">
                        <a cla href="#" class="main-nav__link nav__link">Home</a>
                    </li>
                    <li class="main-nav__item nav__item">
                        <a cla href="about.html" class="main-nav__link nav__link">Nuestra escuela</a>
                    </li>
                    <li class="main-nav__item nav__item">
                        <a cla href="contact.html" class="main-nav__link nav__link">Contacto</a>
                    </li>
                    <li class="main-nav__item nav__item">
                        <a cla href="sedes.html" class="main-nav__link nav__link">Sedes</a>
                    </li>
                    <li class="main-nav__item nav__item">
                        <a cla href="alumnos.html" class="main-nav__link nav__link">Nuestros Alumnos</a>
                    </li>
                    <li class="main-nav__item nav__item">
                        <a cla href="register.html" class="main-nav__link nav__link">Registrarse</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header__text-box">
            <h1 class="main-title">Chess Club</h1>
            <span class="sub-title">La casa del ajedrez</span>
        </div>`

let mainFooter = `<p class="footer__copyright">Todos los derechos reservados @2020</p>`

// header.innerHTML = mainHeader; 
footer.innerHTML = mainFooter;

// Cliqueo el icono hamburguer y se despliega el menú.
// let menuIcon = document.querySelector('.icon');
// let menu = document.querySelector('.main-header__nav');


// menuIcon.addEventListener('click', () => {
//   menuIcon.classList.toggle('display');  
//   menu.classList.toggle('display');  
// })