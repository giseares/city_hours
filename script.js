function updateTimes() {
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };

  const argentinaTime = new Date(); 
  document.getElementById("argentina").innerText = `Buenos Aires: ${argentinaTime.toLocaleTimeString('es-AR', options)}`;

  const seattleTime = new Date(argentinaTime);
  seattleTime.setHours(argentinaTime.getHours() - 5);
  document.getElementById("seattle").innerText = `Seattle: ${seattleTime.toLocaleTimeString('es-AR', options)}`;

  const montanaTime = new Date(argentinaTime);
  montanaTime.setHours(argentinaTime.getHours() - 3);
  document.getElementById("montana").innerText = `Montana: ${montanaTime.toLocaleTimeString('es-AR', options)}`;

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

function calculateTime() {
  const selectedCity = document.getElementById("city").value;
  const inputTime = document.getElementById("inputTime").value;
  if (!inputTime) {
    alert("Please, put the hour.");
    return;
  }

  const [inputHours, inputMinutes] = inputTime.split(":").map(Number);
  let baseTime = new Date();
  baseTime.setHours(inputHours, inputMinutes, 0);

  const offsetMap = {
    argentina: 0,
    montana: -3,
    toronto: -2,
    seattle: -5,
    londres: +3,
    nigeria: +4
  };

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  for (const [city, offset] of Object.entries(offsetMap)) {
    if (city !== selectedCity) {
      const cityTime = new Date(baseTime);
      cityTime.setHours(baseTime.getHours() + offsetMap[city] - offsetMap[selectedCity]);

      resultDiv.innerHTML += `<p>${capitalize(city)}: ${cityTime.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>`;
    }
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


updateTimes();
setInterval(updateTimes, 60000); // Actualiza cada minuto