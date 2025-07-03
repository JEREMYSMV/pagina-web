const navbar = document.getElementById('navbar');

// Aplicar estado inicial
navbar.classList.add('transparent');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    if (!navbar.classList.contains('scrolled')) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    }
  } else {
    if (!navbar.classList.contains('transparent')) {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  }
});

const nav=document.querySelector("#nav");
const abrir=document.querySelector("#abrir");
const cerrar=document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});


const map = L.map('map', { scrollWheelZoom: false }).setView([-12.05, -77.05], 11);

  // Capa base (puedes cambiar a otros temas si deseas)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 18,
  }).addTo(map);

  const sedes = [
    {
      nombre: "Las Flores",
      direccion: "Av. Las Flores de Primavera 1238, San Juan de Lurigancho",
      lat: -12.02608,
      lng: -77.00242
    },
    {
      nombre: "La Hacienda",
      direccion: "Av. Próceres de la Independencia 1715",
      lat: -12.03386,
      lng: -76.99713
    },
    {
      nombre: "Santa Rosa",
      direccion: "Av. Fernando Wiesse",
      lat: -12.01750,
      lng: -76.99487
    },
    {
      nombre: "Mariscal Cáceres",
      direccion: "Ca. Mz E 344",
      lat: -12.01277,
      lng: -77.00054
    },
    {
      nombre: "Los Olivos",
      direccion: "Av. Naranjal 1542",
      lat: -11.98347,
      lng: -77.05784
    },
    {
      nombre: "Ventanilla Metro",
      direccion: "Av. Ventanilla Mz. C8 Lot. 16",
      lat: -11.86415,
      lng: -77.12556
    },
    {
      nombre: "Ventanilla VEA",
      direccion: "Av. Néstor Gambetta",
      lat: -11.87856,
      lng: -77.12977
    },
    {
      nombre: "Ate",
      direccion: "Av. Nicolás Ayllón 5596",
      lat: -12.05287,
      lng: -76.92834
    },
    {
      nombre: "Mariscal Cáceres 2",
      direccion: "Av. Próceres de la Independencia 5384",
      lat: -12.00370,
      lng: -76.98360
    }
  ];

  sedes.forEach((sede) => {
    L.marker([sede.lat, sede.lng])
      .addTo(map)
      .bindPopup(`<strong>${sede.nombre}</strong><br>${sede.direccion}`);
  });
