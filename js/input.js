var input = {
    "init": {
        "ships": [
            {
                "owner": "The Evil Fleet",
                "firepower": 4,
                "color": "rgb(63, 50, 130)",
                "name": "Destroyer Ship",
                "x": 0,
                "y": 1,
                "range": 5,
                "id": "esi17.cs.DestroyerShip@3449c034",
                "team": "Destroyers",
                "hull": 1,
                "speed": 0
            },
            {
                "owner": "The Evil Fleet",
                "firepower": 4,
                "color": "rgb(63, 50, 130)",
                "name": "Destroyer Ship",
                "x": 0,
                "y": 2,
                "range": 5,
                "id": "esi17.cs.DestroyerShip@127ae9f3",
                "team": "Destroyers",
                "hull": 1,
                "speed": 0
            },
            {
                "owner": "The Evil Fleet",
                "firepower": 4,
                "color": "rgb(63, 50, 130)",
                "name": "Destroyer Ship",
                "x": 0,
                "y": 3,
                "range": 5,
                "id": "esi17.cs.DestroyerShip@3144737b",
                "team": "Destroyers",
                "hull": 1,
                "speed": 0
            },
            {
                "owner": "The Random Evil",
                "firepower": 2,
                "color": "rgb(130, 31, 20)",
                "name": "Freddy Random",
                "x": 9,
                "y": 1,
                "range": 3,
                "id": "esi17.DoomDawn.RandomShip@cd92afa",
                "team": "Army of Doom",
                "hull": 1,
                "speed": 4
            },
            {
                "owner": "The Random Evil",
                "firepower": 2,
                "color": "rgb(130, 31, 20)",
                "name": "Freddy Random",
                "x": 9,
                "y": 2,
                "range": 3,
                "id": "esi17.DoomDawn.RandomShip@766b1335",
                "team": "Army of Doom",
                "hull": 1,
                "speed": 4
            },
            {
                "owner": "The Random Evil",
                "firepower": 2,
                "color": "rgb(130, 31, 20)",
                "name": "Freddy Random",
                "x": 9,
                "y": 3,
                "range": 3,
                "id": "esi17.DoomDawn.RandomShip@339b597a",
                "team": "Army of Doom",
                "hull": 1,
                "speed": 4
            }
        ],
        "map": {
            "x": 10,
            "y": 5
        }
    },
    "turns": [
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 0,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "atX": 9,
            "atY": 2,
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 0,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "FIRE"
        },
        {
            "x": 9,
            "y": 2,
            "health": 0,
            "attacker": "esi17.DoomDawn.RandomShip@cd92afa",
            "turn": 0,
            "id": "esi17.DoomDawn.RandomShip@766b1335",
            "type": "SINK"
        },
        {
            "atX": 9,
            "atY": 3,
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 0,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "FIRE"
        },
        {
            "x": 9,
            "y": 3,
            "health": 0,
            "attacker": "esi17.DoomDawn.RandomShip@cd92afa",
            "turn": 0,
            "id": "esi17.DoomDawn.RandomShip@339b597a",
            "type": "SINK"
        },
        {
            "atX": 0,
            "atY": 2,
            "x": 0,
            "y": 1,
            "health": 1,
            "turn": 0,
            "id": "esi17.cs.DestroyerShip@3449c034",
            "type": "FIRE"
        },
        {
            "x": 0,
            "y": 2,
            "health": 0,
            "attacker": "esi17.cs.DestroyerShip@3449c034",
            "turn": 0,
            "id": "esi17.cs.DestroyerShip@127ae9f3",
            "type": "SINK"
        },
        {
            "atX": 0,
            "atY": 3,
            "x": 0,
            "y": 1,
            "health": 1,
            "turn": 0,
            "id": "esi17.cs.DestroyerShip@3449c034",
            "type": "FIRE"
        },
        {
            "x": 0,
            "y": 3,
            "health": 0,
            "attacker": "esi17.cs.DestroyerShip@3449c034",
            "turn": 0,
            "id": "esi17.cs.DestroyerShip@3144737b",
            "type": "SINK"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 1,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 8,
            "y": 1,
            "health": 1,
            "turn": 2,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 3,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 4,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 5,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 6,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 7,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 8,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 9,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 10,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 11,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 12,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 13,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 14,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 15,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 16,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 17,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 18,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 19,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 20,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 1,
            "health": 1,
            "turn": 21,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 22,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 23,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 24,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 25,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 26,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 27,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 28,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 29,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 30,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 31,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 2,
            "health": 1,
            "turn": 32,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 2,
            "health": 1,
            "turn": 33,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 2,
            "health": 1,
            "turn": 34,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 2,
            "health": 1,
            "turn": 35,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 3,
            "health": 1,
            "turn": 36,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 2,
            "health": 1,
            "turn": 37,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 2,
            "health": 1,
            "turn": 38,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 39,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 40,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 1,
            "health": 1,
            "turn": 41,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 42,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 43,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 7,
            "y": 0,
            "health": 1,
            "turn": 44,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 7,
            "y": 1,
            "health": 1,
            "turn": 45,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 7,
            "y": 2,
            "health": 1,
            "turn": 46,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 8,
            "y": 2,
            "health": 1,
            "turn": 47,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 8,
            "y": 1,
            "health": 1,
            "turn": 48,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 49,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 1,
            "health": 1,
            "turn": 50,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 8,
            "y": 2,
            "health": 1,
            "turn": 51,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 7,
            "y": 2,
            "health": 1,
            "turn": 52,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 6,
            "y": 2,
            "health": 1,
            "turn": 53,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 6,
            "y": 3,
            "health": 1,
            "turn": 54,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 6,
            "y": 2,
            "health": 1,
            "turn": 55,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 7,
            "y": 2,
            "health": 1,
            "turn": 56,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 7,
            "y": 1,
            "health": 1,
            "turn": 57,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 1,
            "health": 1,
            "turn": 58,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 7,
            "y": 1,
            "health": 1,
            "turn": 59,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 7,
            "y": 2,
            "health": 1,
            "turn": 60,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "South"
        },
        {
            "x": 7,
            "y": 1,
            "health": 1,
            "turn": 61,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 1,
            "health": 1,
            "turn": 62,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 63,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 64,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 65,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 66,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 67,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "North"
        },
        {
            "x": 9,
            "y": 0,
            "health": 1,
            "turn": 68,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "East"
        },
        {
            "x": 8,
            "y": 0,
            "health": 1,
            "turn": 69,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 7,
            "y": 0,
            "health": 1,
            "turn": 70,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 6,
            "y": 0,
            "health": 1,
            "turn": 71,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "x": 5,
            "y": 0,
            "health": 1,
            "turn": 72,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "MOVE",
            "direction": "West"
        },
        {
            "atX": 5,
            "atY": 0,
            "x": 0,
            "y": 1,
            "health": 1,
            "turn": 72,
            "id": "esi17.cs.DestroyerShip@3449c034",
            "type": "FIRE"
        },
        {
            "x": 5,
            "y": 0,
            "health": 0,
            "attacker": "esi17.cs.DestroyerShip@3449c034",
            "turn": 72,
            "id": "esi17.DoomDawn.RandomShip@cd92afa",
            "type": "SINK"
        }
    ]
}