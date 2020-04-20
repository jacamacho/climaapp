const { argv } = require('./config/yargs');
const requests = require('./requests/requests');

// requests.getLugarLatLng(argv.direccion)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


const getInfo = async(direccion) => {
    try {
        const infoLugar = await requests.getLugarLatLng(direccion);
        const infoWeather = await requests.getClima(infoLugar.lat, infoLugar.lng);
        return `El clima de ${infoLugar.address} es de ${infoWeather} °C`;
    } catch (error) {
        return `No existe el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);