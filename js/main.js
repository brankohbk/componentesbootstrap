
const container = document.getElementById("container");

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const equipo = urlParams.get('equipo');
  equipo && equipo != "todos" ? alumnasPorEquipo(equipo) : (equipo ? acordeonGrupos() : todas());
})

function todas() {
  container.innerHTML = "";
  alumnas
    .forEach(alumna => {
      const card = document.createElement("div");
      card.className = "card col-12 col-md-4 col-lg-3 m-3 px-0 border-info shadow-lg";

      const img = document.createElement("img");
      img.src = grupos[alumna.grupo].rutaFotos + alumna.foto;
      img.alt = alumna.nombre;
      img.className = "card-img-top";

      const nombre = document.createElement("h5");
      nombre.className = "card-title m-2";
      nombre.innerText = alumna.nombre;

      const cardBody = document.createElement('div');
      cardBody.className = "card-body";
      cardBody.innerHTML = `<p class="card-text">${grupos[alumna.grupo].nombre}</p>`;

      card.appendChild(img);
      card.appendChild(nombre);
      card.appendChild(cardBody);

      container.appendChild(card)

    })
}

function alumnasPorEquipo(equipo) {
  container.innerHTML = "";
  alumnas
    .filter(alumna => alumna.grupo == equipo)
    .forEach(alumna => {
      const card = document.createElement("div");
      card.className = "card col-12 col-md-4 col-lg-3 m-3 px-0 border-info shadow-lg";

      const img = document.createElement("img");
      img.src = grupos[alumna.grupo].rutaFotos + alumna.foto;
      img.alt = alumna.nombre;
      img.className = "card-img-top";

      const nombre = document.createElement("h5");
      nombre.className = "card-title m-2";
      nombre.innerText = alumna.nombre;

      const cardBody = document.createElement('div');
      cardBody.className = "card-body";
      cardBody.innerHTML = `<p class="card-text">${grupos[alumna.grupo].nombre}</p>`;

      card.appendChild(img);
      card.appendChild(nombre);
      card.appendChild(cardBody);

      container.appendChild(card)

    })
}

function dibujarGrupos() {
  container.innerHTML = "";
  for (grupo in grupos) {
    const img = document.createElement("img");
    img.src = grupos[grupo].rutaFotos + grupos[grupo].logo;
    img.alt = grupos[grupo].nombre;
    img.className = "col-12 col-sm-6 col-md-4 col-lg-2 my-3";
    container.appendChild(img)
  }
}

function acordeonGrupos() {
  container.innerHTML = "";
  const acordeon = document.createElement("div");
  acordeon.className = "accordion col-9";
  acordeon.id = "accordionEquipos";
  for (grupo in grupos) {
    const acordeonItem = document.createElement("div");
    acordeonItem.className ="card"
    acordeonItem.innerHTML = `<div class="card-header" id="heading${grupo}">
    <h2 class="mb-0">
      <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
        data-target="#collapse${grupo}" aria-expanded="true" aria-controls="collapse${grupo}">
        ${grupos[grupo].nombre} 
      </button>
    </h2>
  </div>

  <div id="collapse${grupo}" class="collapse" aria-labelledby="heading${grupo}" data-parent="#accordionEquipos">
    <div class="card-body">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${grupos[grupo].rutaFotos + grupos[grupo].logo}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> ${grupos[grupo].nombre} </h5>
            <p class="card-text">Uno de los equipos de grossas que cursan el Bootcamp "Start" para convertirse
              en <b>desarrolladoras FrontEnd</b>.</p>
            <a class="btn btn-primary" href="alumnas.html?equipo=${grupo}">Integrantes</a>
          </div>
        </div>
      </div>
    </div>
  </div>`
    acordeon.appendChild(acordeonItem)

  }
  container.appendChild(acordeon)
}