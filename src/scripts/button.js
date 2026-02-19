const boton = document.getElementById('miBoton');

  // 1. Cargar estado al iniciar
  if (localStorage.getItem('botonActivado') === 'true') {
    boton?.classList.add('active');
  }

  // 2. Cambiar estado al hacer click
  boton?.addEventListener('click', () => {
    const isActivo = boton.classList.toggle('active');
    // Guardar el estado
    localStorage.setItem('botonActivado', isActivo.toString());
  });