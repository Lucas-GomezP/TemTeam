// En este archivo se guardara la informacion del equipo que sera consultado reiteradamente en los demas scripts

// Creamos un array que contendra objetos, estos ultimos tendran la informacion de cada uno de los temtems seleccionados para cada slot
const teamSlotsInfo = [
    {
        teamSlot : 'team-slot1',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot2',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot3',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot4',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot5',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot6',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot7',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    },
    {
        teamSlot : 'team-slot8',
        number : 0,
        name : '',
        types : [],
        portrait : 'img/Unknown.webp',
        stats : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0,
            total : 0
        },
        tvs : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        total : {
            hp : 0,
            sta : 0,
            spd : 0,
            atk : 0,
            def : 0,
            spatk : 0,
            spdef : 0
        },
        traits : [],
        selectedAbility : '',
        techniques : [],
        actualTechniques : {
            attackTemtem1 : ['[Select one]', 'none'],
            attackTemtem2 : ['[Select one]', 'none'],
            attackTemtem3 : ['[Select one]', 'none'],
            attackTemtem4 : ['[Select one]', 'none']
        },
        gear : '',
        wikiUrl : '',
        eneableEditingStats : false
    }
];