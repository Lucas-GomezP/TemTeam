// Creamos un array con 6 objetos, uno para cada stat obviando la stat STA
const dataStats = [
    {worse : 999, best : 0, average : 0},
    {worse : 999, best : 0, average : 0},
    {worse : 999, best : 0, average : 0},
    {worse : 999, best : 0, average : 0},
    {worse : 999, best : 0, average : 0},
    {worse : 999, best : 0, average : 0}
];

teamSlotsInfo.forEach(teamSlot => {
    // Chequeamos si esta habilitado para ponerse en el resumen
    if (teamSlot.eneableSummary) {
        // Corroboramos cual es el menor y cual es el mayor y su promedio
        let i = 0;
        for (let stat in teamSlot.total) {
            if (stat !== 'sta') {
                if(teamSlot.total[stat] < dataStats[i].worse) {
                    dataStats[i].worse = teamSlot.total[stat];
                }
                if(teamSlot.total[stat] > dataStats[i].best) {
                    dataStats[i].best = teamSlot.total[stat];
                }
                i++;
            }
        }
        for (let i = 0; i < dataStats.length; i++) {
            dataStats[i].average = (dataStats[i].worse + dataStats[i].best) / 2;
        }
    }
});

// Creamos las opciones de nuestros graficos
const barOptions = {
    axisY : {
        low : 0,
        high : 450
    },
    stackBars : true
};
  
const lineOptions = {
    axisX : {
        showLabel : false,
        showGrid : false
    },
    axisY : {
        showLabel : false,
        showGrid : false,
        low : 0,
        high : 450
    },
    fullWidth : true
};

// Creamos los graficos con los datos antes guardados
new Chartist.Bar(
    '.bar-chart', {
        // Nombres y valores de las barras
        labels : ['hp', 'spd', 'atk', 'def', 'spatk', 'spdef',],
        series : [
            dataStats.map(stat => stat.worse),
            dataStats.map(stat => stat.best - stat.worse) // Lo hacemos asi para que sea el valor real y no una suma de ambos
        ]
    } , barOptions
);

new Chartist.Line(
    '.line-chart', {
        series : [
            dataStats.map(stat => stat.average)
        ]
    } , lineOptions
);