const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const cargo = document.getElementById("cargo").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const tamano = document.getElementById("tamano").value;
    const necesidad = document.getElementById("necesidad").value;

    const numero = "50246331021";

    const mensaje = `
Hola, me interesa el programa Líderes Multiplicadores.

Nombre: ${nombre}
Empresa: ${empresa}
Cargo: ${cargo}
Correo: ${correo}
Teléfono: ${telefono}
Tamaño de empresa: ${tamano}
Necesidad principal: ${necesidad}
`;

    const url =
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

  });

}