// En este script se colocara todo el funcionamiento de la seccion de Team Builer

// Seteamos la url base de nuestra API, luego de ese string se concatenara el resto de los apartados dependiendo que informacion necesitemos
const baseUrl = 'https://temtem-api.mael.tech';

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

// Obtenemos el input del nombre del temtem
const nameTemtem = document.getElementById('name-temtem');
// Obtenemos el input de Ability
const abilityTemtem = document.getElementById('ability-temtem');
// Obtenemos la tabla de resultados
const searchResultTable = document.querySelector('.search-result');
// Obtenemos los headers de la tabla de resultados
const searchResultHeaders = document.getElementById('search-result-headers');
// Inicializamos una variable donde almacenaremos todas las filas de datos, lo hacemos de esta forma ya que las filas de datos solamente apareceran y cambiaran cuando se escriba el nombre.
let searchDataRows;
// Obtenemos todos los input de tipo range de los tvs
const tvsStatsRange = document.querySelectorAll('input[class^="stat-range-tvs"]');
// Obtenemos todos los input number de los tvs
const tvsStatsNumber = document.querySelectorAll('input[class^="stat-tvs"]');
// Obtenemos el valor total a repartir de los TVs
const totalTVs = document.getElementById('remaining-tvs');
// Obtenemos los inputs de seleccion de ataques
const attacksTemtem = document.querySelectorAll('input[class^="attack-temtem"]');
// Obtenemos el input del gear
const gearTemtem = document.getElementById('gear-temtem');

// Creamos la funcion que tendra la logica de cuando se seleccione un temtem de la busqueda realizada
const selectTemtem = async dataRow => {
    // El numero lo obtenemos del nombre de la clase numer-X donde X es el numero del temtem
    const numerTemtemActual = dataRow.classList[1].substring(7,dataRow.classList[1].length);
    
    const slot = getCurrentSlot();
    
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
    slot.eneableSummary = true;

    // Actualizamos a su vez el calculo de stats
    calculateTotalStat();
    // Actualizamos la informacion del slot actual
    updateSlotData();
    // Habilitamos la edicion de stats
    enableEditingStats();

    searcherLoadCleen('start');
}

// debemos usar el async/await porque nuestra promesa la llamamos desde una funcion, por lo cual si no esperamos a la respuesta lo que se devuelve es la promesa en si y no el resultado
const searchTemtemName = async name => {
    searcherLoadCleen('load');
    // esperamos a la respuesta de la promesa
    const result = await fetchResult('temtems');
    // buscamos las coincidencias dentro del array con el nombre pasado en el input
    let matches = result.filter(temtem => {
        // creamos una expresion regular que coincida con el nombre buscado y como segundo parametro va gi ya que la g es de busqueda global y la i es para que ignore si es mayusculas o minusculas
        const regex = new RegExp(`^${name}`, 'gi');
        return temtem.name.match(regex);
    });

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

    searcherLoadCleen('clear');
    // Agregamos toda esa informacion a la tabla
    if (matches.length > 0 && !(matches.length === result.length)) {
        searchResultTable.innerHTML = searchNameHeaders + searchNameData;
    } else if (matches.length === 0) {
        searcherLoadCleen('notexist');
    } 
    else {
        searcherLoadCleen('start');
    }

    // Al ingresar la informacion de la manera anterior al HTML, las comas del array tambien son pasadas y se colocan al final de la tabla por lo que debemos eliminarlas, asique iteraremos sobre los nodos hijos de la tabla y si alguno de es de texto plano lo eliminamos
    searchResultTable.childNodes.forEach(node => {
        if (node.toString() === '[object Text]') {
            searchResultTable.removeChild(node);
        }
    });

    // Guardamos en la variable anteriormente creada toda la nueva informacion
    searchDataRows = document.querySelectorAll('.search-data-row');

    // Como las filas de datos se generan de forma dinamica debemos agregarle el evento que deseamos cada vez que aparezcan, osea, cuando se vaya escribiendo el nombre.
    searchDataRows.forEach(dataRow => {
        dataRow.addEventListener('click', () => selectTemtem(dataRow));
    });
}

const changeTvStatRange = tvStatRange => {
    // Obtenemos el indice del input en cuestion que esta colocado como parte del nombre de la clase
    const index = parseInt(tvStatRange.classList[0].substring(14,tvStatRange.classList[0].length));

    let actualTotalTvs = parseInt(totalTVs.value);
    // Creamos una variable que almacenara el valor actual total de todos los range e iteramos sobre estos para restarles su valor al total
    let remainingTotlaTvs = 1000;
    tvsStatsRange.forEach(tv => {
        remainingTotlaTvs -= parseInt(tv.value);
    })

    // Corroboramos todos los posibles casos y sos resoluciones, que pasa si los puntos actuales son mayores a los colocados, o si son menores, si se desea modificar alguno, etc
    if (remainingTotlaTvs >= 0) {
        totalTVs.value = remainingTotlaTvs;
    } else if (actualTotalTvs === 0 && remainingTotlaTvs < 0) {
        tvStatRange.value = tvsStatsNumber[index].value;
    } else if (remainingTotlaTvs < 0) {
        tvStatRange.value = actualTotalTvs;
        totalTVs.value = 0;
    }

    // Por ultimo igualamos el valor de nuestro input numerico al del range
    tvsStatsNumber[index].value = tvStatRange.value;

    // Actualizamos la informacion en el objeto
    updateStatsData(tvStatRange);
}

const changeTvStatNumber = tvStatNumber => {
    // Obtenemos el indice del input en cuestion que esta colocado como parte del nombre de la clase
    const index = parseInt(tvStatNumber.classList[0].substring(8,tvStatNumber.classList[0].length));

    // Previamente debemos captar si el valor ingresado supera el valor maximo tolerado
    const maxTvsNumber = parseInt(tvStatNumber.max)
    if (parseInt(tvStatNumber.value) >= maxTvsNumber) {
        tvStatNumber.value = maxTvsNumber;
    }

    let actualTotalTvs = parseInt(totalTVs.value);
    // Creamos una variable que almacenara el valor actual total de todos los range e iteramos sobre estos para restarles su valor al total
    let remainingTotlaTvs = 1000;
    tvsStatsNumber.forEach(tv => {
        remainingTotlaTvs -= parseInt(tv.value);
    })

    // Corroboramos todos los posibles casos y sos resoluciones, que pasa si los puntos actuales son mayores a los colocados, o si son menores, si se desea modificar alguno, etc
    if (remainingTotlaTvs >= 0) {
        totalTVs.value = remainingTotlaTvs;
    } else if (actualTotalTvs === 0 && remainingTotlaTvs < 0) {
        tvStatNumber.value = tvsStatsRange[index].value;
    } else if (remainingTotlaTvs < 0) {
        tvStatNumber.value = actualTotalTvs;
        totalTVs.value = 0;
    }

    // Por ultimo igualamos el valor de nuestro input numerico al del range
    tvsStatsRange[index].value = tvStatNumber.value;

    // Actualizamos la informacion en el objeto
    updateStatsData(tvStatNumber);
}

const selectAbility = dataRow => {
    const slot = getCurrentSlot();

    // Obtenemos el indice de la habilidad puesta en su clase
    const abilityActual = parseInt(dataRow.classList[1].substring(7,dataRow.classList[1].length));

    // Lo agregamos al objeto
    slot.selectedAbility = slot.traits[abilityActual];
    
    // Actualizamos la informacion del slot actual
    updateSlotData();
    searcherLoadCleen('start');
}

const searchTemtemAbility = async () => {
    const slot = getCurrentSlot();

    searcherLoadCleen('load');
    // esperamos a la respuesta de la promesa
    const result = await fetchResult('traits');

    let matches = [];

    // Iteramos sobre las habilidades del temtem en si y filtramos los resultados para que correspondan a estas
    for (let trait of slot.traits) {
        result.filter(trt => {
            if (trt.name.match(trait) !== null) {
                matches.push(trt);
            }
        });
    }

    // Creamos los headers de la tabla
    const searchAbilityHeaders = `
        <th>Ability</th>
        <th>Description</th>
    `;

    // Creamos las filas de la tabla
    const searchAbilityData = matches.map(match => `
        <tr class="search-data-row number-${matches.indexOf(match)}">
            <td>${match.name}</td>
            <td>${match.description}</td>
        </tr>
    `);

    // Limpiamos y mostramos los resultados
    searcherLoadCleen('clear')
    searchResultTable.innerHTML = searchAbilityHeaders + searchAbilityData;
    
    // Limpiamos las comas del final
    searchResultTable.childNodes.forEach(node => {
        if (node.toString() === '[object Text]') {
            searchResultTable.removeChild(node);
        }
    });

    // Obtenemos las filas y agregamos el evento al clickear sobre ellas
    searchDataRows = document.querySelectorAll('.search-data-row');
    searchDataRows.forEach(dataRow => {
        dataRow.addEventListener('click', () => selectAbility(dataRow));
    });
}

const selectAttack = (dataRow, matches) => {
    const slot = getCurrentSlot();

    // Obtenemos la informacion necesaria del ataque puesta en sus clases
    const attackActual = parseInt(dataRow.classList[1].substring(7,dataRow.classList[1].length));
    const slotAttack = dataRow.classList[2].substring(7,dataRow.classList[2].length);
    const typeAttack = dataRow.classList[3].substring(12,dataRow.classList[3].length);
    
    const nameActualTechnique = `${matches[attackActual].name}(${matches[attackActual].staminaCost})`;

    // Creamos un sistema de control que verificara si el ataque no se encuentra ya en alguno de los slots
    let control = 0;
    for (let attack in slot.actualTechniques) {
        if (slot.actualTechniques[attack][0] !== nameActualTechnique) {
            control++;
        }
    }

    // Solo si ese ataque no esta repetido lo colocamos en el objeto, en caso contrario se le avisara al usuario que ya esta en uso
    if (control === 4) {
        slot.actualTechniques[`attackTemtem${slotAttack}`] = [];
        slot.actualTechniques[`attackTemtem${slotAttack}`].push(nameActualTechnique);
        slot.actualTechniques[`attackTemtem${slotAttack}`].push(typeAttack);
        updateSlotData();
        searcherLoadCleen('start');
    } else {
        updateSlotData();
        searcherLoadCleen('repeat');
    }
}

const searchTemtemAttack = async attackTemtem => {
    const slot = getCurrentSlot();
    searcherLoadCleen('load');
    // esperamos a la respuesta de la promesa
    const result = await fetchResult('techniques');

    let matches = [];

    // Iteramos sobre los ataques del temtem en si y filtramos los resultados para que correspondan a estos
    for (let attack of slot.techniques) {
        result.filter(trt => {
            if (trt.name.match(attack.name) !== null) {
                matches.push(trt);
            }
        });
    }

    // Creamos un array que guardara los efectos de las sinergias en caso de tenerlas
    let sinergyEffects = [];

    for (let match of matches) {
        let sinergyActual = [];
        if (match.synergyEffects.length > 0) {
            for (let sin of match.synergyEffects) {
                sinergyActual.push(sin.effect);
            }
        } else {
            sinergyActual.push('None');
        }
        sinergyEffects.push(sinergyActual);
    }

    // Creamos los headers de la tabla
    const searchAttacksHeaders = `
        <th>Name</th>
        <th>Type</th>
        <th>Class</th>
        <th>Dmg</th>
        <th>Sta</th>
        <th>Hold</th>
        <th>Priority</th>
        <th>Synergy</th>
        <th>Synergy Effect</th>
        <th>Targets</th>
        <th>Description</th>
        <th>Wiki</th>
    `;
    
    const attackSlot = attackTemtem.classList[0].substring(13,attackTemtem.classList[0].length)
    // Creamos las filas de la tabla
    const searchAttacksData = matches.map(match => `
    <tr class="search-data-row number-${matches.indexOf(match)} attack-${attackSlot} type-attack-${match.type}">
        <td>${match.name}</td>
        <td><img src="${baseUrl}/images/icons/types/${match.type}.png" alt="${match.type}" title="${match.type}"></td>
        <td><img src="${baseUrl}/images/icons/technique/${match.class}.png" alt="${match.class}" title="${match.class}"></td>
        <td>${match.damage}</td>
        <td>${match.staminaCost}</td>
        <td>${match.hold}</td>
        <td><img src="${baseUrl}/images/icons/priority/${match.priority}.png" alt="${match.priority}" title="${match.priority}"></td>
        <td>${match.synergy}</td>
        <td>${sinergyEffects[matches.indexOf(match)]}</td>
        <td>${match.targets}</td>
        <td>${match.effectText}</td>
        <td><a href="${match.wikiUrl}" target="_blank">Wiki</a></td>
    </tr>
    `);

    // Limpiamos y mostramos los resultados
    searcherLoadCleen('clear')
    searchResultTable.innerHTML = searchAttacksHeaders + searchAttacksData;

    // Limpiamos las comas del final
    searchResultTable.childNodes.forEach(node => {
        if (node.toString() === '[object Text]') {
            searchResultTable.removeChild(node);
        }
    });

    // Obtenemos las filas y agregamos el evento al clickear sobre ellas
    searchDataRows = document.querySelectorAll('.search-data-row');
    searchDataRows.forEach(dataRow => {
        dataRow.addEventListener('click', () => selectAttack(dataRow, matches));
    });

}

const selectGear = async (dataRow, matches) => {
    const slot = getCurrentSlot();
    
    const indexGear = parseInt(dataRow.classList[1].substring(7,dataRow.classList[1].length));

    // Seteamos toda la informacion en el objeto propio de este temtem
    slot.gear = matches[indexGear].name;

    // Actualizamos la informacion del slot actual
    updateSlotData();
    searcherLoadCleen('start');
}

const searchTemtemGear = async gearName => {
    const slot = getCurrentSlot();

    searcherLoadCleen('load');
    // esperamos a la respuesta de la promesa
    const result = await fetchResult('gear');

    // buscamos las coincidencias dentro del array con el nombre del gear pasado en el input
    let matches = result.filter(gear => {
        const regex = new RegExp(`^${gearName}`, 'gi');
        return gear.name.match(regex);
    });

    const searchGearHeaders = `
        <th>Name</th>
        <th>Description</th>
        <th>Wiki</th>
    `;

    const searchGearData = matches.map(match => `
        <tr class="search-data-row number-${matches.indexOf(match)}">
            <td>${match.name}</td>
            <td>Description not available, API in progress...</td>
            <td><a href="${match.wikiUrl}" target="_blank">Wiki</a></td>
        </tr>
    `);

    searcherLoadCleen('clear');
    if (matches.length > 0 && !(matches.length === result.length)) {
        searchResultTable.innerHTML = searchGearHeaders + searchGearData;
    } else if (matches.length === 0) {
        searcherLoadCleen('notexist');
    } 
    else {
        searcherLoadCleen('start');
    }

    searchResultTable.childNodes.forEach(node => {
        if (node.toString() === '[object Text]') {
            searchResultTable.removeChild(node);
        }
    });

    // Guardamos en la variable anteriormente creada toda la nueva informacion
    searchDataRows = document.querySelectorAll('.search-data-row');

    // Como las filas de datos se generan de forma dinamica debemos agregarle el evento que deseamos cada vez que aparezcan, osea, cuando se vaya escribiendo el nombre del gear
    searchDataRows.forEach(dataRow => {
        dataRow.addEventListener('click', () => selectGear(dataRow, matches));
    });
}

// el evento input se dispara cuando el value es cambiado
nameTemtem.addEventListener('input', () => searchTemtemName(nameTemtem.value));
abilityTemtem.addEventListener('click', () => searchTemtemAbility());
// Le añadimos el evento a todos los range y numbers
tvsStatsRange.forEach(tvStatRange => {
    tvStatRange.addEventListener('input', () => changeTvStatRange(tvStatRange));
});
tvsStatsNumber.forEach(tvStatNumber => {
    tvStatNumber.addEventListener('change', () => changeTvStatNumber(tvStatNumber));
});
attacksTemtem.forEach(attackTemtem => {
    attackTemtem.addEventListener('click', () => searchTemtemAttack(attackTemtem));
})
gearTemtem.addEventListener('input', () => searchTemtemGear(gearTemtem.value));