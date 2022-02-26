
export default async function handler(req, res) {
    const { cityInput } = req.body;

    console.log('key',process.env.OPENWEATHER_API_KEY);

    const getWheatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);

    const data = await getWheatherData.json();
    res.status(200).json(data);

}