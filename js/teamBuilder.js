// En este script se colocara todo el funcionamiento de la seccion de Team Builer

// Seteamos la url base de nuestra API, luego de ese string se concatenara el resto de los apartados dependiendo que informacion necesitemos
const baseUrl = 'https://temtem-api.mael.tech/api/';

// Creamos una funcion para corroborar la respuesta de la API en cada promesa realizada
const isResponseOk = (response) => {
    //response.ok va a ser true con respuestas 2xx, esto lo hacemos para poder captar correctamente el error en caso de que se de
    if (!response.ok) {
        throw new Error('Error HTTP: ' + response.status);
    }
    return response.json();
}

// Creamos una funcion que devolvera la informacion desde la url base de la api pero de cada seccion que se le pase, de esta manera podemos reutilizarla para las distintas busquedas
const fetchResult = async searchSection => {
    // La hacemos asincrona ya que debemos corroborar que no se genere ningun error con la busqueda y en caso de que suceda captarlo
    try {
        const response = await fetch(`https://temtem-api.mael.tech/api/${searchSection}`);
        return isResponseOk(response);
    } catch (error) {
        return console.error(error);
    }
}

// obtenemos el input del nombre del temtem
const nameTemtem = document.getElementById('name-temtem');
// Obtenemos la tabla de resultados
const searchResultTable = document.querySelector('.search-result');
// Obtenemos los headers de la tabla de resultados
const searchResultHeaders = document.getElementById('search-result-headers');
// Inicializamos una variable donde almacenaremos todas las filas de datos, lo hacemos de esta forma ya que las filas de datos solamente apareceran y cambiaran cuando se escriba el nombre.
let searchDataRows;
// Obtenemos todos los input de tipo range de los tvs
const tvsStatsRange = document.querySelectorAll('input[class^="stat-tvs-range"]');
// Obtenemos todos los input number de los tvs
const tvsStatsNumber = document.querySelectorAll('input[class^="stat-tvs"]');
// Obtenemos el valor total a repartir de los TVs
const totalTVs = document.getElementById('remaining-tvs');







// Creamos la funcion que tendra la logica de cuando se seleccione un temtem de la busqueda realizada
const selectTemtem = async dataRow => {
    // El numero lo obtenemos del nombre de la clase numer-X donde X es el numero del temtem
    const numerTemtemActual = dataRow.classList[1].substring(7,dataRow.classList[1].length);
    
    const slot = getCurrentSlot();

    // console.log(numerTemtemActual)
    const temtemAcual = await fetchResult(`temtems/${numerTemtemActual}`);

    // Seteamos toda la informacion en el objeto propio de este temtem
    slot.number = numerTemtemActual;
    slot.name = temtemAcual.name;
    slot.types = temtemAcual.types;
    slot.portrait = temtemAcual.portraitWikiUrl;
    slot.stats = temtemAcual.stats;
    slot.traits = temtemAcual.traits;
    slot.techniques = temtemAcual.techniques;
    slot.wikiUrl = temtemAcual.wikiUrl;
    slot.eneableEditingStats = true;

    // Actualizamos la informacion del slot actual
    updateSlotData();
    // Habilitamos la edicion de stats
    enableEditingStats();
}

// debemos usar el async/await porque nuestra promesa la llamamos desde una funcion, por lo cual si no esperamos a la respuesta lo que se devuelve es la promesa en si y no el resultado
const searchTemtemName = async name => {
    // esperamos a la respuesta de la promesa
    const result = await fetchResult('temtems');
    // buscamos las coincidencias dentro del array con el nombre pasado en el input
    let matches = result.filter(temtem => {
        // creamos una expresion regular que coincida con el nombre buscado y como segundo parametro va gi ya que la g es de busqueda global y la i es para que ignore si es mayusculas o minusculas
        const regex = new RegExp(`^${name}`, 'gi');
        return temtem.name.match(regex);
    })

    // console.log(matches) // QUITAR <--------------------------------

    // Creamos una constante que tendra como se dispondran la cabecera de nuestra tabla cunado se busca por nombre
    const searchNameHeaders = `
        <th>Img</th>
        <th>Name</th>
        <th>Type</th>
        <th>Hp</th>
        <th>Sta</th>
        <th>Spd</th>
        <th>Atk</th>
        <th>Def</th>
        <th>Spatk</th>
        <th>Spdef</th>
        <th>Total</th>
        <th>Abilitys</th>
    `;

    // Creamos una constante que hara lo mismo que la cabecera pero para la informacion propia de cada temtem, creamos filas con los datos pertinentes de cada uno. Ademas les agregamos a cada fila una clase para poder captarlas mas adelante. Ademas al tr le agregamos una clase number que contendra la informacion del numero del temtem para luego poder acceder a toda esta info de manera mas sencilla
    const searchNameData = matches.map(match => `
        <tr class="search-data-row number-${match.number}">
            <td><img src=${match.portraitWikiUrl}></td>
            <td>${match.name}</td>
            <td>${match.types}</td>
            <td>${match.stats.hp}</td>
            <td>${match.stats.sta}</td>
            <td>${match.stats.spd}</td>
            <td>${match.stats.atk}</td>
            <td>${match.stats.def}</td>
            <td>${match.stats.spatk}</td>
            <td>${match.stats.spdef}</td>
            <td>${match.stats.total}</td>
            <td>${match.traits}</td>
        </tr>
    `);

    // Agregamos toda esa informacion a la tabla
    searchResultTable.innerHTML = searchNameHeaders+searchNameData;

    // Al ingresar la informacion de la manera anterior al HTML, las comas del array tambien son pasadas y se colocan al final de la tabla por lo que debemos eliminarlas, asique iteraremos sobre los nodos hijos de la tabla y si alguno de es de texto plano lo eliminamos
    searchResultTable.childNodes.forEach(node => {
        if (node.toString() === '[object Text]') {
            searchResultTable.removeChild(node);
        }
    });

    // Guardamos en la variable anteriormente creada toda la nueva informacion
    searchDataRows = document.querySelectorAll('.search-data-row');
    console.log(searchDataRows) // QUITAR <----------------------------------------------------

    // Como las filas de datos se generan de forma dinamica debemos agregarle el evento que deseamos cada vez que aparezcan, osea, cuando se vaya escribiendo el nombre.
    searchDataRows.forEach(dataRow => {
        dataRow.addEventListener('click', () => selectTemtem(dataRow));
    });
}

const changeTvStatRange = tvStatRange => {
    console.log(tvStatRange.value);
    const rangeActual = tvStatRange.classList[0].substring(14,tvStatRange.classList[0].length);
    if (parseInt(totalTVs.value) > 0) {
        // continua aca flaquito, enlaza cada range con su tvs correspondiente, iguala los valores y hace que el total no supere nunca los 1000
        
    }
}

// el evento input se dispara cuando el value es cambiado
nameTemtem.addEventListener('input', () => searchTemtemName(nameTemtem.value));
// Le añadimos el evento a todos los range
tvsStatsRange.forEach(tvStatRange => {
    tvStatRange.addEventListener('change', () => changeTvStatRange(tvStatRange));
});

