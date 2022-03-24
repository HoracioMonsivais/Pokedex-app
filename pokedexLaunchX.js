// primero definimos nuestra funcion de | fetch | 
// Es la forma en la que hacemos una consulta/petición a una API
// Ahorita lo estamos haciendo con el metodo GET

const fetchPokemon= () => {
    //colocamos el id del input que queremos que tome la información
    const pokeName = document.getElementById("pokeName");

    //primero lo hacemos una variable
    //.value es el valor que tenga el input
    let pokeInput = pokeName.value.toLowerCase();

    //Lo que va hacer es preguntar al servidor si le puede dar la información que se solicita
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    // programación asincrona es como tener diferentes hilos o cosas en paralelo 
    // ¿una consulta a un servidor es asincrona porque? porque cuando se hace la consulta se tiene que esperar a que el servidor le conteste para tener la respuesta/resultado para regresar y poder seguir avanzando
    
    // aqui resiviremos una promesa
    // .then es para agarrar la respuesta/resultado de nuestra consulta a la API.
    fetch(url).then((res) => {
        if(res.status != "200") {
            console.log(res);
            pokeImage("./assets/Img/pokeball_disable.png");
        }
        //return aquí regresamos el json
        return res.json();
        //aquí agarramos la data que queriamos (imagen del pokemon)
    }).then((data) => {
        console.log(data);
        //asi es como podemos irnos metiendo a los diferentes que tiene un json/objeto
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
} 
//aquí terminamos la consulta, con esto sacamos la imegen del pokemon.

//funcion para que nos cambie la imgagen
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
