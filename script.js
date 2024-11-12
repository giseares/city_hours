function updateTimes() {
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };

  const argentinaTime = new Date(); 
  document.getElementById("argentina").innerText = `Buenos Aires: ${argentinaTime.toLocaleTimeString('es-AR', options)}`;

  const seattleTime = new Date(argentinaTime);
  seattleTime.setHours(argentinaTime.getHours() - 5);
  document.getElementById("seattle").innerText = `Seattle: ${seattleTime.toLocaleTimeString('es-AR', options)}`;

  const torontoTime = new Date(argentinaTime);
  torontoTime.setHours(argentinaTime.getHours() - 2);
  document.getElementById("toronto").innerText = `Toronto: ${torontoTime.toLocaleTimeString('es-AR', options)}`;

  const londonTime = new Date(argentinaTime);
  londonTime.setHours(argentinaTime.getHours() + 3);
  document.getElementById("londres").innerText = `Londres: ${londonTime.toLocaleTimeString('es-AR', options)}`;

  const nigeriaTime = new Date(argentinaTime);
  nigeriaTime.setHours(argentinaTime.getHours() + 4);
  document.getElementById("nigeria").innerText = `Nigeria: ${nigeriaTime.toLocaleTimeString('es-AR', options)}`;
}

updateTimes();
setInterval(updateTimes, 60000); // Actualiza cada minuto