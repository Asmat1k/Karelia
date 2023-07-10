// получение погды
export async function getWeather() {
  const city = 'Петрозаводск';
  const lang = 'ru';
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=551cb3c09778bc804cc88404eee46c7e&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if(data.cod != 404) {
      console.log(Math.ceil(data.main.temp));
    }
    else {
       console.log('error');
    }
  } catch {
    console.log('Error!');
  }
}