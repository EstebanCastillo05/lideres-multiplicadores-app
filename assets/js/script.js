// ==========================
// WHATSAPP FORM
// ==========================

function enviarWhatsApp() {

  const nombre = document.getElementById('nombre').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const cargo = document.getElementById('cargo').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const tamano = document.getElementById('tamano').value;
  const necesidad = document.getElementById('necesidad').value;

  if (!nombre || !empresa) {
    alert('Completa los campos obligatorios.');
    return;
  }

  const numero = "50212345678";

  const mensaje =
`Hola, soy ${nombre}
Empresa: ${empresa}
Cargo: ${cargo}
Correo: ${correo}
Teléfono: ${telefono}
Tamaño empresa: ${tamano}
Necesidad principal: ${necesidad}

Quiero información sobre Líderes Multiplicadores.`;

  const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, '_blank');
}