const header = document.querySelector("header");
const footer = document.querySelector("footer");


header.innerHTML = `<!-- Menu -->
<nav>
  <input type="checkbox" id="check" />
  <label for="check" class="checkbtn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
  </label>

  <a href="#" class="enlace"
    ><img
      loading="lazy"
      class="logo"
      src="assets/fondo/logo.jpg"
      alt="Baul"
  /></a>

  <ul>
    <li class="active"><a href="index.html">Inicio</a></li>
    <li><a href="nosotros.html">Nosotros</a></li>
    <li><a href="servicios.html">Servicios</a></li>
    <li><a href="#">Portafolio</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
`;

footer.innerHTML = `
<div class="pie-pagina">
        <div class="grupo-1">
          <div class="box">
            <h2>Mas información</h2>
            <p class="text__1">
              Propender por la recuperación del potencial humano mediante el
              trabajo comunitario y asociativo, creando, organizando y asesorando
              empresas en diferentes áreas, mediante el desarrollo de actividades
              de manejo, conservación y protección de la salud, recreación,
              cultura, deporte y recreación.
            </p>
          </div>
          <div class="box">
            <h2>Redes Sociales</h2>
            <div class="red-social">
              <img src="assets/redes/facebook.svg" />
              <a href="https://www.facebook.com/cesar.gomez2933/" target="_blank"
                >Facebook</a
              >
            </div>
        
            <div class="red-social">
              <img src="assets/redes/twitter.svg" />
              <a
                href="//www.youtube.com/channel/UCAC7BQcQaALxtg68GFFyJEg?view_as=subscriber"
                target="_blank"
                >Twitter</a
              >
            </div>
        
            <div class="red-social">
              <img src="assets/redes/instagram.svg" />
              <a
                href="//www.youtube.com/channel/UCAC7BQcQaALxtg68GFFyJEg?view_as=subscriber"
                target="_blank"
                >Instagram</a
              >
            </div>
        
            <div class="red-social">
              <img src="assets/redes/youtube.svg" />
              <a
                href="//www.youtube.com/channel/UCAC7BQcQaALxtg68GFFyJEg?view_as=subscriber"
                target="_blank"
                >Youtube</a
              >
            </div>
          </div>
        
          <div class="box">
            <h2>Nos puede contactar</h2>
            <div class="drees">
              <img src="assets/redes/casa.svg" />
              <label>
                Carrera 30 N 32-60 Apto 501 Barrio: La Aurora. Bucaramanga.
              </label>
            </div>
        
            <div class="drees">
              <img src="assets/redes/llamar.svg" />
              <label> 3168281866 </label>
            </div>
        
            <div class="drees">
              <img src="assets/redes/correo.svg" />
              <label> </label>
              <a href="malito:bauldelaalegria.bga@gmail.com"
                >bauldelaalegria.bga@gmail.com</a
              >
            </div>
          </div>
        </div>
        <div class="grupo-2">
          <small>&copy; 2023 <b>MTB</b> | Todos los derchos reservados </small>
        </div>     

      </div>`;      


