//En este script se colocaran todas las funcionalidades generales como manejo de botones, cambios de clases para estilos, etc.

updateSlotData(); //<-----------------------------------------------------------QUITAR
enableEditingStats();//<--------------------------------------------------------QUITAR
// BOTON INTRODUCCION
const introductionButton = document.getElementById('introduction-button');
const introduction = document.getElementById('introduction');

introductionButton.addEventListener('click', () => {
    introductionButton.classList.toggle('show-introduction');
    introduction.classList.toggle('introduction-hidden');
});


// FUNCIONAMIENTO DEL CAMBIO DE SLOTS DEL EQUIPO
// Utilizamos un querySelector para poder iterar sobre ellos con un forEach
// Los seleccionamos de esta manera para poder seleccionar todos los botones a la vez a pesar de tener clases distintas
const teamSlotsButtons = document.querySelectorAll('button[class^="team-slot"]');

// Creamos una funcion general para remover ciertas clases de un conjunto seleccionado
function removeClass(selectorGroup, className) {
    selectorGroup.forEach(selector => {
        selector.classList.remove(className);
    });
}

// Iteramos sobre cada slot para añadirle un evento al hacer click, lo que hara este evento es quitar la clase de 'active-slot' llamando a la funcion y luego le dara al slot que fue clickeado esa clase ademas de actualizar los datos de la misma.
teamSlotsButtons.forEach(slot => {
    slot.addEventListener('click', () => {
        removeClass(teamSlotsButtons, 'actual-slot');
        slot.classList.add('actual-slot');
        updateSlotData();
        enableEditingStats();
        searcherLoadCleen('start');
    })
});



const exampleTeam = document.getElementById('load-example-team');



exampleTeam.addEventListener('click', () => loadTeamExample())


const loadTeamExample = () => {
    teamSlotsInfo[0] = {
        "teamSlot": "team-slot1",
        "number": "157",
        "name": "Chimurian",
        "types": [
            "Nature",
            "Crystal"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/c/cd/Chimurian.png/55px-Chimurian.png",
        "stats": {
            "hp": 49,
            "sta": 61,
            "spd": 84,
            "atk": 65,
            "def": 78,
            "spatk": 37,
            "spdef": 84,
            "total": 458
        },
        "tvs": {
            "hp": 0,
            "sta": 28,
            "spd": 486,
            "atk": 486,
            "def": 0,
            "spatk": 0,
            "spdef": 0
        },
        "total": {
            "hp": 281,
            "sta": 66,
            "spd": 300,
            "atk": 267,
            "def": 192,
            "spatk": 122,
            "spdef": 202
        },
        "traits": [
            "Disgrace",
            "Hostile"
        ],
        "selectedAbility": "Hostile",
        "techniques": [
            {
                "name": "Peck",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Glass Blade",
                "source": "Levelling",
                "levels": 6
            },
            {
                "name": "Sharp Leaf",
                "source": "Levelling",
                "levels": 12
            },
            {
                "name": "Rage",
                "source": "Levelling",
                "levels": 22
            },
            {
                "name": "Gaia",
                "source": "Levelling",
                "levels": 36
            },
            {
                "name": "Multiple Pecks",
                "source": "Levelling",
                "levels": 42
            },
            {
                "name": "Burrow",
                "source": "Levelling",
                "levels": 56
            },
            {
                "name": "Sharpening",
                "source": "Levelling",
                "levels": 69
            },
            {
                "name": "Frond Whip",
                "source": "Levelling",
                "levels": 85
            },
            {
                "name": "Crystal Plume Gatling",
                "source": "Levelling",
                "levels": 96
            },
            {
                "name": "Confiscate",
                "source": "TechniqueCourses"
            },
            {
                "name": "Footwork",
                "source": "TechniqueCourses"
            },
            {
                "name": "Look out",
                "source": "TechniqueCourses"
            },
            {
                "name": "Rush",
                "source": "TechniqueCourses"
            },
            {
                "name": "Mirror Shell",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Rush(15)",
                "Neutral"
            ],
            "attackTemtem2": [
                "Crystal Plume Gatling(28)",
                "Crystal"
            ],
            "attackTemtem3": [
                "Sharpening(16)",
                "Crystal"
            ],
            "attackTemtem4": [
                "Frond Whip(33)",
                "Nature"
            ]
        },
        "gear": "Sweatband",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Chimurian",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[1] ={
        "teamSlot": "team-slot2",
        "number": "110",
        "name": "Volarend",
        "types": [
            "Toxic",
            "Wind"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/8/87/Volarend.png/55px-Volarend.png",
        "stats": {
            "hp": 60,
            "sta": 42,
            "spd": 74,
            "atk": 51,
            "def": 55,
            "spatk": 68,
            "spdef": 92,
            "total": 442
        },
        "tvs": {
            "hp": 428,
            "sta": 71,
            "spd": 496,
            "atk": 0,
            "def": 3,
            "spatk": 2,
            "spdef": 0
        },
        "total": {
            "hp": 412,
            "sta": 61,
            "spd": 285,
            "atk": 146,
            "def": 154,
            "spatk": 176,
            "spdef": 216
        },
        "traits": [
            "Aerobic",
            "Anaerobic"
        ],
        "selectedAbility": "Aerobic",
        "techniques": [
            {
                "name": "Scratch",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Wind Blade",
                "source": "Levelling",
                "levels": 6
            },
            {
                "name": "Venomous Claws",
                "source": "Levelling",
                "levels": 10
            },
            {
                "name": "Blizzard",
                "source": "Levelling",
                "levels": 16
            },
            {
                "name": "Multiple Pecks",
                "source": "Levelling",
                "levels": 25
            },
            {
                "name": "Toxic Plume",
                "source": "Levelling",
                "levels": 38
            },
            {
                "name": "Tornado",
                "source": "Levelling",
                "levels": 51
            },
            {
                "name": "Hyperkinetic Strike",
                "source": "Levelling",
                "levels": 62
            },
            {
                "name": "Wind Burst",
                "source": "Levelling",
                "levels": 73
            },
            {
                "name": "Virulent Gust",
                "source": "Levelling",
                "levels": 88
            },
            {
                "name": "Venom Spread",
                "source": "Levelling",
                "levels": 95
            },
            {
                "name": "Noxious Bomb",
                "source": "TechniqueCourses"
            },
            {
                "name": "Rend",
                "source": "TechniqueCourses"
            },
            {
                "name": "Beef Up",
                "source": "TechniqueCourses"
            },
            {
                "name": "Feather Gatling",
                "source": "Breeding"
            },
            {
                "name": "Gust",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Noxious Bomb(20)",
                "Toxic"
            ],
            "attackTemtem2": [
                "Toxic Plume(20)",
                "Toxic"
            ],
            "attackTemtem3": [
                "Hyperkinetic Strike(28)",
                "Wind"
            ],
            "attackTemtem4": [
                "Beef Up(16)",
                "Mental"
            ]
        },
        "gear": "Slingshot",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Volarend",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[2] ={
        "teamSlot": "team-slot3",
        "number": "142",
        "name": "Akranox",
        "types": [
            "Earth",
            "Toxic"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/d/d2/Akranox.png/55px-Akranox.png",
        "stats": {
            "hp": 71,
            "sta": 52,
            "spd": 71,
            "atk": 71,
            "def": 64,
            "spatk": 71,
            "spdef": 64,
            "total": 464
        },
        "tvs": {
            "hp": 319,
            "sta": 52,
            "spd": 102,
            "atk": 2,
            "def": 51,
            "spatk": 457,
            "spdef": 17
        },
        "total": {
            "hp": 408,
            "sta": 65,
            "spd": 201,
            "atk": 181,
            "def": 179,
            "spatk": 272,
            "spdef": 172
        },
        "traits": [
            "Book Lungs",
            "Cobweb"
        ],
        "selectedAbility": "Cobweb",
        "techniques": [
            {
                "name": "Scratch",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Sand Splatter",
                "source": "Levelling",
                "levels": 6
            },
            {
                "name": "Sting",
                "source": "Levelling",
                "levels": 10
            },
            {
                "name": "Intimidation",
                "source": "Levelling",
                "levels": 18
            },
            {
                "name": "Metabolize",
                "source": "Levelling",
                "levels": 27
            },
            {
                "name": "Toxin Shower",
                "source": "Levelling",
                "levels": 33
            },
            {
                "name": "Petrify",
                "source": "Levelling",
                "levels": 42
            },
            {
                "name": "Venom Spread",
                "source": "Levelling",
                "levels": 58
            },
            {
                "name": "Mud Shower",
                "source": "Levelling",
                "levels": 69
            },
            {
                "name": "Rotten Goo",
                "source": "Levelling",
                "levels": 80
            },
            {
                "name": "Quicksand",
                "source": "TechniqueCourses"
            },
            {
                "name": "Darkness",
                "source": "TechniqueCourses"
            },
            {
                "name": "Untangle",
                "source": "TechniqueCourses"
            },
            {
                "name": "Soil Steam",
                "source": "TechniqueCourses"
            },
            {
                "name": "Earth Wave",
                "source": "Breeding"
            },
            {
                "name": "Toughen",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Sting(23)",
                "Toxic"
            ],
            "attackTemtem2": [
                "Rotten Goo(23)",
                "Toxic"
            ],
            "attackTemtem3": [
                "Soil Steam(25)",
                "Earth"
            ],
            "attackTemtem4": [
                "Venom Spread(23)",
                "Toxic"
            ]
        },
        "gear": "Marbles",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Akranox",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[3] ={
        "teamSlot": "team-slot4",
        "number": "89",
        "name": "Ukama",
        "types": [
            "Water"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/7/75/Ukama.png/55px-Ukama.png",
        "stats": {
            "hp": 68,
            "sta": 90,
            "spd": 100,
            "atk": 34,
            "def": 51,
            "spatk": 72,
            "spdef": 54,
            "total": 469
        },
        "tvs": {
            "hp": 120,
            "sta": 0,
            "spd": 365,
            "atk": 0,
            "def": 90,
            "spatk": 0,
            "spdef": 425
        },
        "total": {
            "hp": 352,
            "sta": 75,
            "spd": 303,
            "atk": 117,
            "def": 164,
            "spatk": 182,
            "spdef": 236
        },
        "traits": [
            "Hydrologist",
            "Plethoric"
        ],
        "selectedAbility": "Hydrologist",
        "techniques": [
            {
                "name": "Finbeat",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Nimble",
                "source": "Levelling",
                "levels": 7
            },
            {
                "name": "Cooperation",
                "source": "Levelling",
                "levels": 10
            },
            {
                "name": "Water Cannon",
                "source": "Levelling",
                "levels": 14
            },
            {
                "name": "Sharp Rain",
                "source": "Levelling",
                "levels": 17
            },
            {
                "name": "Aqua Bullet Hell",
                "source": "Levelling",
                "levels": 26
            },
            {
                "name": "Aquatic Whirlwind",
                "source": "Levelling",
                "levels": 37
            },
            {
                "name": "Blizzard",
                "source": "Levelling",
                "levels": 48
            },
            {
                "name": "Denigrate",
                "source": "Levelling",
                "levels": 73
            },
            {
                "name": "Tsunami",
                "source": "TechniqueCourses"
            },
            {
                "name": "Major Slash",
                "source": "TechniqueCourses"
            },
            {
                "name": "Flood",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Water Cannon(24)",
                "Water"
            ],
            "attackTemtem2": [
                "Aquatic Whirlwind(34)",
                "Water"
            ],
            "attackTemtem3": [
                "Tsunami(24)",
                "Water"
            ],
            "attackTemtem4": [
                "Binary Flood(21)",
                "Digital"
            ]
        },
        "gear": "DoubleScreen",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Ukama",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[4] ={
        "teamSlot": "team-slot5",
        "number": "53",
        "name": "Barnshe",
        "types": [
            "Wind",
            "Mental"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/6/6c/Barnshe.png/55px-Barnshe.png",
        "stats": {
            "hp": 57,
            "sta": 51,
            "spd": 80,
            "atk": 60,
            "def": 40,
            "spatk": 75,
            "spdef": 79,
            "total": 442
        },
        "tvs": {
            "hp": 85,
            "sta": 32,
            "spd": 385,
            "atk": 0,
            "def": 0,
            "spatk": 0,
            "spdef": 498
        },
        "total": {
            "hp": 319,
            "sta": 61,
            "spd": 273,
            "atk": 162,
            "def": 128,
            "spatk": 187,
            "spdef": 293
        },
        "traits": [
            "Neutrality",
            "Air Specialist"
        ],
        "selectedAbility": "Air Specialist",
        "techniques": [
            {
                "name": "Peck",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Sand Splatter",
                "source": "Levelling",
                "levels": 4
            },
            {
                "name": "Wind Blade",
                "source": "Levelling",
                "levels": 7
            },
            {
                "name": "Wind Burst",
                "source": "Levelling",
                "levels": 10
            },
            {
                "name": "Bamboozle",
                "source": "Levelling",
                "levels": 15
            },
            {
                "name": "Intimidation",
                "source": "Levelling",
                "levels": 19
            },
            {
                "name": "Psy Surge",
                "source": "Levelling",
                "levels": 31
            },
            {
                "name": "Tornado",
                "source": "Levelling",
                "levels": 48
            },
            {
                "name": "Time Split",
                "source": "Levelling",
                "levels": 55
            },
            {
                "name": "Hypoxia",
                "source": "Levelling",
                "levels": 60
            },
            {
                "name": "Gamma Burst",
                "source": "Levelling",
                "levels": 90
            },
            {
                "name": "Turbo Choreography",
                "source": "TechniqueCourses"
            },
            {
                "name": "Wake Up",
                "source": "TechniqueCourses"
            },
            {
                "name": "Noxious Bomb",
                "source": "TechniqueCourses"
            },
            {
                "name": "Relax",
                "source": "TechniqueCourses"
            },
            {
                "name": "Darkness",
                "source": "TechniqueCourses"
            },
            {
                "name": "Beta Burst",
                "source": "Breeding"
            },
            {
                "name": "Energy Manipulation",
                "source": "Breeding"
            },
            {
                "name": "Oshi-Dashi",
                "source": "Breeding"
            },
            {
                "name": "Lullaby",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Gamma Burst(36)",
                "Mental"
            ],
            "attackTemtem2": [
                "Beta Burst(27)",
                "Mental"
            ],
            "attackTemtem3": [
                "Hypoxia(32)",
                "Wind"
            ],
            "attackTemtem4": [
                "Tornado(36)",
                "Wind"
            ]
        },
        "gear": "Fake Beard",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Barnshe",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[5] ={
        "teamSlot": "team-slot6",
        "number": "83",
        "name": "Golzy",
        "types": [
            "Electric",
            "Melee"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/5/5f/Golzy.png/55px-Golzy.png",
        "stats": {
            "hp": 71,
            "sta": 78,
            "spd": 82,
            "atk": 80,
            "def": 49,
            "spatk": 40,
            "spdef": 48,
            "total": 448
        },
        "tvs": {
            "hp": 88,
            "sta": 39,
            "spd": 368,
            "atk": 441,
            "def": 64,
            "spatk": 0,
            "spdef": 0
        },
        "total": {
            "hp": 350,
            "sta": 79,
            "spd": 273,
            "atk": 284,
            "def": 156,
            "spatk": 128,
            "spdef": 141
        },
        "traits": [
            "Defuser",
            "Voltaic Charge"
        ],
        "selectedAbility": "Defuser",
        "techniques": [
            {
                "name": "Novice Punch",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Shrill Voice",
                "source": "Levelling",
                "levels": 2
            },
            {
                "name": "DC Beam",
                "source": "Levelling",
                "levels": 6
            },
            {
                "name": "Held Anger",
                "source": "Levelling",
                "levels": 10
            },
            {
                "name": "Tesla Prison",
                "source": "Levelling",
                "levels": 13
            },
            {
                "name": "Psychosis",
                "source": "Levelling",
                "levels": 16
            },
            {
                "name": "Electric Storm",
                "source": "Levelling",
                "levels": 25
            },
            {
                "name": "Charged Iron Filings",
                "source": "Levelling",
                "levels": 38
            },
            {
                "name": "Uppercut",
                "source": "Levelling",
                "levels": 44
            },
            {
                "name": "Oshi-Dashi",
                "source": "Levelling",
                "levels": 48
            },
            {
                "name": "Savage Suplex",
                "source": "Levelling",
                "levels": 55
            },
            {
                "name": "Defibrillate",
                "source": "Levelling",
                "levels": 66
            },
            {
                "name": "Hasty Lunge",
                "source": "Levelling",
                "levels": 84
            },
            {
                "name": "Extra Energy Slam",
                "source": "Levelling",
                "levels": 92
            },
            {
                "name": "Cage",
                "source": "TechniqueCourses"
            },
            {
                "name": "Madness Buff",
                "source": "TechniqueCourses"
            },
            {
                "name": "Footwork",
                "source": "TechniqueCourses"
            },
            {
                "name": "Base Jump",
                "source": "TechniqueCourses"
            },
            {
                "name": "Rage",
                "source": "Breeding"
            },
            {
                "name": "Show Off",
                "source": "Breeding"
            },
            {
                "name": "Sparkling Bullet",
                "source": "Breeding"
            },
            {
                "name": "Wrenching Massage",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Hasty Lunge(25)",
                "Electric"
            ],
            "attackTemtem2": [
                "Charged Iron Filings(31)",
                "Electric"
            ],
            "attackTemtem3": [
                "Uppercut(14)",
                "Melee"
            ],
            "attackTemtem4": [
                "Oshi-Dashi(33)",
                "Melee"
            ]
        },
        "gear": "Adrenaline Shot",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Golzy",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[6] ={
        "teamSlot": "team-slot7",
        "number": "54",
        "name": "Gyalis",
        "types": [
            "Crystal",
            "Melee"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/d/d6/Gyalis.png/55px-Gyalis.png",
        "stats": {
            "hp": 74,
            "sta": 44,
            "spd": 100,
            "atk": 81,
            "def": 61,
            "spatk": 23,
            "spdef": 61,
            "total": 444
        },
        "tvs": {
            "hp": 67,
            "sta": 61,
            "spd": 375,
            "atk": 493,
            "def": 2,
            "spatk": 0,
            "spdef": 2
        },
        "total": {
            "hp": 351,
            "sta": 61,
            "spd": 305,
            "atk": 296,
            "def": 164,
            "spatk": 99,
            "spdef": 164
        },
        "traits": [
            "Mirroring",
            "Resistant"
        ],
        "selectedAbility": "Mirroring",
        "techniques": [
            {
                "name": "Kick",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Glass Blade",
                "source": "Levelling",
                "levels": 4
            },
            {
                "name": "Sharp Stabs",
                "source": "Levelling",
                "levels": 12
            },
            {
                "name": "Footwork",
                "source": "Levelling",
                "levels": 16
            },
            {
                "name": "Double Gash",
                "source": "Levelling",
                "levels": 20
            },
            {
                "name": "Block",
                "source": "Levelling",
                "levels": 24
            },
            {
                "name": "Drill Impact",
                "source": "Levelling",
                "levels": 32
            },
            {
                "name": "Crystal Bite",
                "source": "Levelling",
                "levels": 41
            },
            {
                "name": "Hook Kick",
                "source": "Levelling",
                "levels": 58
            },
            {
                "name": "Ninja Jutsu",
                "source": "Levelling",
                "levels": 70
            },
            {
                "name": "Awful Song",
                "source": "TechniqueCourses"
            },
            {
                "name": "Antitoxins",
                "source": "TechniqueCourses"
            },
            {
                "name": "Rend",
                "source": "TechniqueCourses"
            },
            {
                "name": "Footwork",
                "source": "TechniqueCourses"
            },
            {
                "name": "Major Slash",
                "source": "TechniqueCourses"
            },
            {
                "name": "5PPEH",
                "source": "TechniqueCourses"
            },
            {
                "name": "Crystal Spikes",
                "source": "Breeding"
            },
            {
                "name": "Crystallize",
                "source": "Breeding"
            },
            {
                "name": "Earth Wave",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Sharp Stabs(17)",
                "Crystal"
            ],
            "attackTemtem2": [
                "Crystal Bite(26)",
                "Crystal"
            ],
            "attackTemtem3": [
                "Hook Kick(23)",
                "Melee"
            ],
            "attackTemtem4": [
                "Antitoxins(14)",
                "Toxic"
            ]
        },
        "gear": "Bait",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Gyalis",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }
    teamSlotsInfo[7] ={
        "teamSlot": "team-slot8",
        "number": "94",
        "name": "Seismunch",
        "types": [
            "Melee",
            "Earth"
        ],
        "portrait": "https://temtem.wiki.gg/images/thumb/8/87/Seismunch.png/55px-Seismunch.png",
        "stats": {
            "hp": 70,
            "sta": 65,
            "spd": 85,
            "atk": 83,
            "def": 54,
            "spatk": 43,
            "spdef": 43,
            "total": 443
        },
        "tvs": {
            "hp": 307,
            "sta": 35,
            "spd": 343,
            "atk": 314,
            "def": 1,
            "spatk": 0,
            "spdef": 0
        },
        "total": {
            "hp": 403,
            "sta": 70,
            "spd": 273,
            "atk": 263,
            "def": 152,
            "spatk": 133,
            "spdef": 133
        },
        "traits": [
            "Self-Esteem",
            "Earthbound"
        ],
        "selectedAbility": "Earthbound",
        "techniques": [
            {
                "name": "Kick",
                "source": "Levelling",
                "levels": 1
            },
            {
                "name": "Martial Strike",
                "source": "Levelling",
                "levels": 4
            },
            {
                "name": "Tail Strike",
                "source": "Levelling",
                "levels": 8
            },
            {
                "name": "Sand Splatter",
                "source": "Levelling",
                "levels": 10
            },
            {
                "name": "Show Off",
                "source": "Levelling",
                "levels": 12
            },
            {
                "name": "Uppercut",
                "source": "Levelling",
                "levels": 16
            },
            {
                "name": "Intimidation",
                "source": "Levelling",
                "levels": 19
            },
            {
                "name": "Perfect Jab",
                "source": "Levelling",
                "levels": 26
            },
            {
                "name": "Heat Up",
                "source": "Levelling",
                "levels": 30
            },
            {
                "name": "Inner Spirit",
                "source": "Levelling",
                "levels": 40
            },
            {
                "name": "Footwork",
                "source": "Levelling",
                "levels": 48
            },
            {
                "name": "Seismunch's Wreck",
                "source": "Levelling",
                "levels": 58
            },
            {
                "name": "Helicopter Kick",
                "source": "Levelling",
                "levels": 73
            },
            {
                "name": "Wrenching Massage",
                "source": "Levelling",
                "levels": 89
            },
            {
                "name": "Stone Wall",
                "source": "TechniqueCourses"
            },
            {
                "name": "Quicksand",
                "source": "TechniqueCourses"
            },
            {
                "name": "5PPEH",
                "source": "TechniqueCourses"
            },
            {
                "name": "Dim Mak",
                "source": "Breeding"
            },
            {
                "name": "Earth Wave",
                "source": "Breeding"
            },
            {
                "name": "Hook",
                "source": "Breeding"
            }
        ],
        "actualTechniques": {
            "attackTemtem1": [
                "Uppercut(14)",
                "Melee"
            ],
            "attackTemtem2": [
                "Heat Up(27)",
                "Fire"
            ],
            "attackTemtem3": [
                "Seismunch's Wreck(39)",
                "Earth"
            ],
            "attackTemtem4": [
                "Helicopter Kick(18)",
                "Melee"
            ]
        },
        "gear": "Reactive Vial",
        "wikiUrl": "https://temtem.wiki.gg/wiki/Seismunch",
        "eneableEditingStats": true,
        "eneableSummary" : true
    }



    updateSlotData();
    enableEditingStats();
    searcherLoadCleen('start');
}