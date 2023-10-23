const locations = ['Рускеала', 'Кивач', 'Ерсенево', 'Поросозеро', 'Импилахти'];

// получение погды
export async function getWeather() {
  const lang = 'ru';
  const weatherBlocks = document.querySelectorAll('.temperature');
  for(let i = 0; i < locations.length; i += 1) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${locations[i]}&lang=${lang}&appid=551cb3c09778bc804cc88404eee46c7e&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      if(data.cod != 404) {
        const temp = Math.ceil(data.main.temp)
        weatherBlocks[i].innerHTML = temp > 0 ? `+${temp}` : temp === 0 ? '0' : `-${temp}`;
      }
      else {
         console.log('error');
      }
    } catch {
      console.log('Error!');
    }
  }
}