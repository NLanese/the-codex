export default function determineBaseVitals(nightfarer, lvl){
    if (nightfarer === "Wylder"){
        if (lvl === 15){
            return {
                HP: 1120,
                FP: 140,
                Stam: 102,
                Vig: 52,
                Mind: 19,
                End: 27,
                Str: 50,
                Dex: 40,
                Int: 15,
                Fai: 15
            }
        }
        else if (lvl === 14){
            return {
                HP: 1080,
                FP: 135,
                Stam: 100,
                Vig: 50,
                Mind: 18,
                End: 26,
                Str: 48,
                Dex: 38,
                Int: 14,
                Fai: 14
            }
        }
        else if (lvl === 13){
            return {
                HP: 1040,
                FP: 130,
                Stam: 98,
                Vig: 48,
                Mind: 17,
                End: 25,
                Str: 46,
                Dex: 36,
                Int: 13,
                Fai: 13
            }
        }
        else if (lvl === 12){
            return {
                HP: 1000,
                FP: 125,
                Stam: 96,
                Vig: 46,
                Mind: 16,
                End: 24,
                Str: 44,
                Dex: 35,
                Int: 12,
                Fai: 12
            }
        }
        else if (lvl === 11){
            return {
                HP: 940,
                FP: 120,
                Stam: 92,
                Vig: 43,
                Mind: 15,
                End: 22,
                Str: 41,
                Dex: 33,
                Int: 11,
                Fai: 11
            }
        }
        else if (lvl === 10){
            return {
                HP: 880,
                FP: 115,
                Stam: 88,
                Vig: 40,
                Mind: 14,
                End: 20,
                Str: 38,
                Dex: 31,
                Int: 10,
                Fai: 10
            }
        }
        else if (lvl === 9){
            return {
                HP: 820,
                FP: 110,
                Stam: 84,
                Vig: 37,
                Mind: 13,
                End: 18,
                Str: 36,
                Dex: 29,
                Int: 9,
                Fai: 9
            }
        }
        else if (lvl === 8){
            return {
                HP: 760,
                FP: 105,
                Stam: 80,
                Vig: 34,
                Mind: 12,
                End: 16,
                Str: 33,
                Dex: 27,
                Int: 8,
                Fai: 8
            }
        }
        else if (lvl === 7){
            return {
                HP: 700,
                FP: 100,
                Stam: 78,
                Vig: 31,
                Mind: 11,
                End: 15,
                Str: 31,
                Dex: 25,
                Int: 8,
                Fai: 8
            }
        }
        else if (lvl === 6){
            return {
                HP: 640,
                FP: 95,
                Stam: 74,
                Vig: 28,
                Mind: 10,
                End: 13,
                Str: 28,
                Dex: 23,
                Int: 7,
                Fai: 7
            }
        }
        else if (lvl === 5){
            return {
                HP: 580,
                FP: 90,
                Stam: 70,
                Vig: 25,
                Mind: 9,
                End: 11,
                Str: 25,
                Dex: 21,
                Int: 6,
                Fai: 6
            }
        }
        else if (lvl === 4){
            return {
                HP: 520,
                FP: 85,
                Stam: 66,
                Vig: 22,
                Mind: 8,
                End: 9,
                Str: 23,
                Dex: 19,
                Int: 5,
                Fai: 5
            }
        }
        else if (lvl === 3){
            return {
                HP: 460,
                FP: 80,
                Stam: 62,
                Vig: 19,
                Mind: 7,
                End: 7,
                Str: 20,
                Dex: 17,
                Int: 4,
                Fai: 4
            }
        }
        else if (lvl === 2){
            return {
                HP: 400,
                FP: 75,
                Stam: 62,
                Vig: 16,
                Mind: 6,
                End: 6,
                Str: 18,
                Dex: 15,
                Int: 4,
                Fai: 4
            }
        }
        else if (lvl === 1){
            return {
                HP: 240,
                FP: 65,
                Stam: 54,
                Vig: 8,
                Mind: 4,
                End: 3,
                Str: 5,
                Dex: 4,
                Int: 2,
                Fai: 2
            }
        }
    }
    else if (nightfarer === "Guardian"){
        if (lvl === 15){
            return {
                HP: 1280,
                FP: 115,
                Stam: 124,
                Vig: 60,
                Mind: 14,
                End: 38,
                Str: 39,
                Dex: 29,
                Int: 10,
                Fai: 21,
            }
        }
        else if (lvl === 14){
            return {
                HP: 1240,
                FP: 110,
                Stam: 120,
                Vig: 58,
                Mind: 13,
                End: 36,
                Str: 37,
                Dex: 27,
                Int: 9,
                Fai: 21
            }
        }
        else if (lvl === 13){
            return {
                HP: 1200,
                FP: 105,
                Stam: 116,
                Vig: 56,
                Mind: 13,
                End: 36,
                Str: 37,
                Dex: 27,
                Int: 8,
                Fai: 21
            }
        }
        else if (lvl === 12){
            return {
                HP: 1160,
                FP: 100,
                Stam: 114,
                Vig: 47,
                Mind: 9,
                End: 28,
                Str: 29,
                Dex: 20,
                Int: 7,
                Fai: 15
            }
        }
        else if (lvl === 11){
            return {
                HP: 1080,
                FP: 95,
                Stam: 108,
                Vig: 50,
                Mind: 10,
                End: 30,
                Str: 31,
                Dex: 22,
                Int: 7,
                Fai: 16
            }
        }
        else if (lvl === 10){
            return {
                HP: 1020,
                FP: 90,
                Stam: 104,
                Vig: 47,
                Mind: 9,
                End: 28,
                Str: 29,
                Dex: 20,
                Int: 7,
                Fai: 15
            }
        }
        else if (lvl === 9){
            return {
                HP: 940,
                FP: 85,
                Stam: 100,
                Vig: 43,
                Mind: 8,
                End: 26,
                Str: 26,
                Dex: 19,
                Int: 6,
                Fai: 14
            }
        }
        else if (lvl === 8){
            return {
                HP: 880,
                FP: 80,
                Stam: 96,
                Vig: 40,
                Mind: 7,
                End: 24,
                Str: 24,
                Dex: 17,
                Int: 6,
                Fai: 12
            }
        }
        else if (lvl === 7){
            return {
                HP: 800,
                FP: 80,
                Stam: 92,
                Vig: 36,
                Mind: 7,
                End: 22,
                Str: 22,
                Dex: 16,
                Int: 5,
                Fai: 11
            }
        }
        else if (lvl === 6){
            return {
                HP: 740,
                FP: 75,
                Stam: 88,
                Vig: 33,
                Mind: 6,
                End: 20,
                Str: 19,
                Dex: 14,
                Int: 5,
                Fai: 10
            }
        }
        else if (lvl === 5){
            return {
                HP: 660,
                FP: 70,
                Stam: 84,
                Vig: 29,
                Mind: 5,
                End: 18,
                Str: 17,
                Dex: 12,
                Int: 4,
                Fai: 8
            }
        }
        else if (lvl === 4){
            return {
                HP: 600,
                FP: 65,
                Stam: 80,
                Vig: 26,
                Mind: 4,
                End: 16,
                Str: 14,
                Dex: 11,
                Int: 4,
                Fai: 7
            }
        }
        else if (lvl === 3){
            return {
                HP: 520,
                FP: 60,
                Stam: 76,
                Vig: 22,
                Mind: 3,
                End: 14,
                Str: 12,
                Dex: 9,
                Int: 3,
                Fai: 6
            }
        }
        else if (lvl === 2){
            return {
                HP: 460,
                FP: 60,
                Stam: 72,
                Vig: 19,
                Mind: 3,
                End: 12,
                Str: 10,
                Dex: 8,
                Int: 3,
                Fai: 5
            }
        }
        else if (lvl === 1){
            return {
                HP: 280,
                FP: 55,
                Stam: 60,
                Vig: 10,
                Mind: 2,
                End: 6,
                Str: 4,
                Dex: 3,
                Int: 2,
                Fai: 3
            }
        }
    }
    else if (nightfarer === "Ironeye"){
        if (lvl === 15){
            return {
                HP: 820,
                FP: 115,
                Stam: 104,
                Vig: 37,
                Mind: 14,
                End: 28,
                Str: 19,
                Dex: 57,
                Int: 7,
                Fai: 13
            }
        }
        else if (lvl === 14){
            return {
                HP: 800,
                FP: 110,
                Stam: 102,
                Vig: 36,
                Mind: 13,
                End: 27,
                Str: 18,
                Dex: 55,
                Int: 6,
                Fai: 12
            }
        }
        else if (lvl === 13){
            return {
                HP: 780,
                FP: 105,
                Stam: 102,
                Vig: 35,
                Mind: 12,
                End: 26,
                Str: 17,
                Dex: 53,
                Int: 6,
                Fai: 11
            }
        }
        else if (lvl === 12){
            return {
                HP: 760,
                FP: 100,
                Stam: 98,
                Vig: 34,
                Mind: 11,
                End: 25,
                Str: 17,
                Dex: 51,
                Int: 6,
                Fai: 10
            }
        }
        else if (lvl === 11){
            return {
                HP: 700,
                FP: 95,
                Stam: 94,
                Vig: 31,
                Mind: 10,
                End: 23,
                Str: 16,
                Dex: 47,
                Int: 5,
                Fai: 9
            }
        }
        else if (lvl === 10){
            return {
                HP: 660,
                FP: 90,
                Stam: 90,
                Vig: 31,
                Mind: 10,
                End: 23,
                Str: 16,
                Dex: 47,
                Int: 5,
                Fai: 9
            }
        }
        else if (lvl === 9){
            return {
                HP: 620,
                FP: 85,
                Stam: 86,
                Vig: 27,
                Mind: 8,
                End: 19,
                Str: 14,
                Dex: 41,
                Int: 5,
                Fai: 7
            }
        }
        else if (lvl === 8){
            return {
                HP: 580,
                FP: 80,
                Stam: 82,
                Vig: 25,
                Mind: 7,
                End: 17,
                Str: 13,
                Dex: 38,
                Int: 4,
                Fai: 7
            }
        }
        else if (lvl === 7){
            return {
                HP: 540,
                FP: 80,
                Stam: 80,
                Vig: 23,
                Mind: 7,
                End: 16,
                Str: 12,
                Dex: 35,
                Int: 4,
                Fai: 6
            }
        }
        else if (lvl === 6){
            return {
                HP: 480,
                FP: 75,
                Stam: 76,
                Vig: 20,
                Mind: 6,
                End: 14,
                Str: 11,
                Dex: 32,
                Int: 4,
                Fai: 5
            }
        }
        else if (lvl === 5){
            return {
                HP: 440,
                FP: 70,
                Stam: 72,
                Vig: 18,
                Mind: 5,
                End: 12,
                Str: 10,
                Dex: 29,
                Int: 3,
                Fai: 5
            }
        }
        else if (lvl === 4){
            return {
                HP: 400,
                FP: 65,
                Stam: 68,
                Vig: 16,
                Mind: 4,
                End: 10,
                Str: 9,
                Dex: 26,
                Int: 3,
                Fai: 4
            }
        }
        else if (lvl === 3){
            return {
                HP: 360,
                FP: 60,
                Stam: 62,
                Vig: 14,
                Mind: 3,
                End: 8,
                Str: 8,
                Dex: 23,
                Int: 3,
                Fai: 3
            }
        }
        else if (lvl === 2){
            return {
                HP: 320,
                FP: 60,
                Stam: 62,
                Vig: 12,
                Mind: 3,
                End: 7,
                Str: 7,
                Dex: 20,
                Int: 3,
                Fai: 5
            }
        }
        else if (lvl === 1){
            return {
                HP: 200,
                FP: 55,
                Stam: 56,
                Vig: 6,
                Mind: 2,
                End: 4,
                Str: 4,
                Dex: 8,
                Int: 2,
                Fai: 2
            }
        }
    }
    else if (nightfarer === "Duchess"){
        if (lvl === 15){
            return {
                HP: 860,
                FP: 180,
                Stam: 84,
                Vig: 39,
                Mind: 27,
                End: 18,
                Str: 11,
                Dex: 45,
                Int: 42,
                Fai: 27
            }
        }
        else if (lvl === 14){
            return {
                HP: 820,
                FP: 175,
                Stam: 80,
                Vig: 37,
                Mind: 26,
                End: 16,
                Str: 10,
                Dex: 39,
                Int: 40,
                Fai: 26
            }
        }
        else if (lvl === 13){
            return {
                HP: 800,
                FP: 170,
                Stam: 80,
                Vig: 36,
                Mind: 25,
                End: 15,
                Str: 9,
                Dex: 37,
                Int: 38,
                Fai: 25
            }
        }
        else if (lvl === 12){
            return {
                HP: 780,
                FP: 165,
                Stam: 76,
                Vig: 35,
                Mind: 27,
                End: 14,
                Str: 9,
                Dex: 35,
                Int: 36,
                Fai: 24
            }
        }
        else if (lvl === 11){
            return {
                HP: 720,
                FP: 155,
                Stam: 74,
                Vig: 32,
                Mind: 22,
                End: 13,
                Str: 8,
                Dex: 32,
                Int: 33,
                Fai: 22
            }
        }
        else if (lvl === 10){
            return {
                HP: 680,
                FP: 150,
                Stam: 72,
                Vig: 30,
                Mind: 21,
                End: 12,
                Str: 8,
                Dex: 30,
                Int: 30,
                Fai: 20
            }
        }
        else if (lvl === 9){
            return {
                HP: 640,
                FP: 140,
                Stam: 70,
                Vig: 28,
                Mind: 19,
                End: 11,
                Str: 7,
                Dex: 28,
                Int: 27,
                Fai: 20
            }
        }
        else if (lvl === 8){
            return {
                HP: 600,
                FP: 135,
                Stam: 68,
                Vig: 26,
                Mind: 18,
                End: 10,
                Str: 7,
                Dex: 25,
                Int: 24,
                Fai: 16
            }
        }
        else if (lvl === 7){
            return {
                HP: 560,
                FP: 125,
                Stam: 66,
                Vig: 24,
                Mind: 16,
                End: 9,
                Str: 6,
                Dex: 23,
                Int: 22,
                Fai: 15
            }
        }
        else if (lvl === 6){
            return {
                HP: 500,
                FP: 120,
                Stam: 64,
                Vig: 21,
                Mind: 15,
                End: 8,
                Str: 6,
                Dex: 21,
                Int: 19,
                Fai: 13
            }
        }
        else if (lvl === 5){
            return {
                HP: 460,
                FP: 110,
                Stam: 62,
                Vig: 19,
                Mind: 13,
                End: 7,
                Str: 5,
                Dex: 18,
                Int: 16,
                Fai: 11
            }
        }
        else if (lvl === 4){
            return {
                HP: 420,
                FP: 105,
                Stam: 60,
                Vig: 17,
                Mind: 12,
                End: 6,
                Str: 5,
                Dex: 16,
                Int: 13,
                Fai: 9
            }
        }
        else if (lvl === 3){
            return {
                HP: 380,
                FP: 95,
                Stam: 58,
                Vig: 15,
                Mind: 10,
                End: 5,
                Str: 4,
                Dex: 14,
                Int: 10,
                Fai: 7
            }
        }
        else if (lvl === 2){
            return {
                HP: 340,
                FP: 90,
                Stam: 56,
                Vig: 13,
                Mind: 9,
                End: 4,
                Str: 4,
                Dex: 12,
                Int: 8,
                Fai: 6
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 75,
                Stam: 54,
                Vig: 7,
                Mind: 6,
                End: 3,
                Str: 2,
                Dex: 4,
                Int: 4,
                Fai: 3
            }
        }
    }
    else if (nightfarer === "Raider"){
        if (lvl === 15){
            return {
                HP: 1200,
                FP: 95,
                Stam: 122,
                Vig: 56,
                Mind: 10,
                End: 37,
                Str: 68,
                Dex: 19,
                Int: 3,
                Fai: 12
            }
        }
        else if (lvl === 14){
            return {
                HP: 1160,
                FP: 90,
                Stam: 118,
                Vig: 54,
                Mind: 9,
                End: 35,
                Str: 65,
                Dex: 19,
                Int: 2,
                Fai: 11
            }
        }
        else if (lvl === 13){
            return {
                HP: 1120,
                FP: 85,
                Stam: 114,
                Vig: 54,
                Mind: 9,
                End: 35,
                Str: 65,
                Dex: 19,
                Int: 2,
                Fai: 11
            }
        }
        else if (lvl === 12){
            return {
                HP: 1080,
                FP: 85,
                Stam: 110,
                Vig: 50,
                Mind: 8,
                End: 31,
                Str: 60,
                Dex: 16,
                Int: 2,
                Fai: 10
            }
        }
        else if (lvl === 11){
            return {
                HP: 1000,
                FP: 80,
                Stam: 106,
                Vig: 50,
                Mind: 8,
                End: 29,
                Str: 56,
                Dex: 15,
                Int: 2,
                Fai: 9
            }
        }
        else if (lvl === 10){
            return {
                HP: 950,
                FP: 80,
                Stam: 102,
                Vig: 43,
                Mind: 7,
                End: 27,
                Str: 53,
                Dex: 14,
                Int: 2,
                Fai: 8
            }
        }
        else if (lvl === 9){
            return {
                HP: 880,
                FP: 75,
                Stam: 98,
                Vig: 40,
                Mind: 6,
                End: 25,
                Str: 49,
                Dex: 13,
                Int: 2,
                Fai: 8
            }
        }
        else if (lvl === 8){
            return {
                HP: 820,
                FP: 75,
                Stam: 94,
                Vig: 37,
                Mind: 6,
                End: 23,
                Str: 46,
                Dex: 12,
                Int: 2,
                Fai: 7
            }
        }
        else if (lvl === 7){
            return {
                HP: 760,
                FP: 70,
                Stam: 90,
                Vig: 34,
                Mind: 5,
                End: 21,
                Str: 42,
                Dex: 11,
                Int: 2,
                Fai: 7
            }
        }
        else if (lvl === 6){
            return {
                HP: 680,
                FP: 70,
                Stam: 86,
                Vig: 30,
                Mind: 5,
                End: 19,
                Str: 39,
                Dex: 10,
                Int: 2,
                Fai: 6
            }
        }
        else if (lvl === 5){
            return {
                HP: 620,
                FP: 70,
                Stam: 82,
                Vig: 27,
                Mind: 4,
                End: 17,
                Str: 35,
                Dex: 9,
                Int: 2,
                Fai: 5
            }
        }
        else if (lvl === 4){
            return {
                HP: 560,
                FP: 65,
                Stam: 78,
                Vig: 24,
                Mind: 4,
                End: 15,
                Str: 32,
                Dex: 8,
                Int: 2,
                Fai: 5
            }
        }
        else if (lvl === 3){
            return {
                HP: 500,
                FP: 60,
                Stam: 74,
                Vig: 21,
                Mind: 3,
                End: 13,
                Str: 28,
                Dex: 7,
                Int: 2,
                Fai: 4
            }
        }
        else if (lvl === 2){
            return {
                HP: 440,
                FP: 60,
                Stam: 72,
                Vig: 18,
                Mind: 3,
                End: 13,
                Str: 25,
                Dex: 6,
                Int: 2,
                Fai: 4
            }
        }
        else if (lvl === 1){
            return {
                HP: 260,
                FP: 55,
                Stam: 60,
                Vig: 9,
                Mind: 2,
                End: 6,
                Str: 9,
                Dex: 4,
                Int: 1,
                Fai: 2
            }
        }
    }
    else if (nightfarer === "Revenant"){
        if (lvl === 15){
            return {
                HP: 780,
                FP: 200,
                Stam: 90,
                Vig: 35,
                Mind: 31,
                End: 21,
                Str: 21,
                Dex: 21,
                Int: 30,
                Fai: 51
            }
        }
        else if (lvl === 14){
            return {
                HP: 760,
                FP: 195,
                Stam: 88,
                Vig: 34,
                Mind: 30,
                End: 20,
                Str: 20,
                Dex: 20,
                Int: 29,
                Fai: 51
            }
        }
        else if (lvl === 13){
            return {
                HP: 740,
                FP: 190,
                Stam: 86,
                Vig: 33,
                Mind: 29,
                End: 19,
                Str: 19,
                Dex: 19,
                Int: 28,
                Fai: 47
            }
        }
        else if (lvl === 12){
            return {
                HP: 720,
                FP: 185,
                Stam: 84,
                Vig: 32,
                Mind: 28,
                End: 18,
                Str: 18,
                Dex: 18,
                Int: 27,
                Fai: 45
            }
        }
        else if (lvl === 11){
            return {
                HP: 660,
                FP: 175,
                Stam: 80,
                Vig: 29,
                Mind: 26,
                End: 16,
                Str: 16,
                Dex: 16,
                Int: 25,
                Fai: 42
            }
        }
        else if (lvl === 10){
            return {
                HP: 620,
                FP: 165,
                Stam: 78,
                Vig: 27,
                Mind: 24,
                End: 15,
                Str: 15,
                Dex: 15,
                Int: 23,
                Fai: 39
            }
        }
        else if (lvl === 9){
            return {
                HP: 580,
                FP: 155,
                Stam: 74,
                Vig: 25,
                Mind: 22,
                End: 13,
                Str: 14,
                Dex: 14,
                Int: 21,
                Fai: 36
            }
        }
        else if (lvl === 8){
            return {
                HP: 540,
                FP: 150,
                Stam: 72,
                Vig: 23,
                Mind: 21,
                End: 12,
                Str: 13,
                Dex: 13,
                Int: 19,
                Fai: 33
            }
        }
        else if (lvl === 7){
            return {
                HP: 500,
                FP: 140,
                Stam: 70,
                Vig: 21,
                Mind: 19,
                End: 11,
                Str: 12,
                Dex: 12,
                Int: 17,
                Fai: 30
            }
        }
        else if (lvl === 6){
            return {
                HP: 460,
                FP: 130,
                Stam: 66,
                Vig: 19,
                Mind: 17,
                End: 9,
                Str: 10,
                Dex: 10,
                Int: 15,
                Fai: 27
            }
        }
        else if (lvl === 5){
            return {
                HP: 420,
                FP: 125,
                Stam: 64,
                Vig: 17,
                Mind: 16,
                End: 8,
                Str: 9,
                Dex: 9,
                Int: 13,
                Fai: 24
            }
        }
        else if (lvl === 4){
            return {
                HP: 560,
                FP: 65,
                Stam: 78,
                Vig: 15,
                Mind: 14,
                End: 6,
                Str: 8,
                Dex: 8,
                Int: 11,
                Fai: 21
            }
        }
        else if (lvl === 3){
            return {
                HP: 380,
                FP: 105,
                Stam: 58,
                Vig: 13,
                Mind: 12,
                End: 5,
                Str: 7,
                Dex: 7,
                Int: 9,
                Fai: 18
            }
        }
        else if (lvl === 2){
            return {
                HP: 300,
                FP: 100,
                Stam: 56,
                Vig: 11,
                Mind: 11,
                End: 4,
                Str: 6,
                Dex: 6,
                Int: 7,
                Fai: 15
            }
        }
        else if (lvl === 1){
            return {
                HP: 200,
                FP: 80,
                Stam: 54,
                Vig: 6,
                Mind: 7,
                End: 3,
                Str: 2,
                Dex: 2,
                Int: 4,
                Fai: 5
            }
        }
    }
    else if (nightfarer === "Recluse"){
        if (lvl === 15){
            return {
                HP: 740,
                FP: 195,
                Stam: 94,
                Vig: 33,
                Mind: 30,
                End: 23,
                Str: 12,
                Dex: 19,
                Int: 51,
                Fai: 51
            }
        }
        else if (lvl === 14){
            return {
                HP: 720,
                FP: 190,
                Stam: 92,
                Vig: 32,
                Mind: 29,
                End: 22,
                Str: 11,
                Dex: 18,
                Int: 49,
                Fai: 49
            }
        }
        else if (lvl === 13){
            return {
                HP: 700,
                FP: 185,
                Stam: 90,
                Vig: 31,
                Mind: 28,
                End: 21,
                Str: 10,
                Dex: 17,
                Int: 47,
                Fai: 47
            }
        }
        else if (lvl === 12){
            return {
                HP: 680,
                FP: 180,
                Stam: 88,
                Vig: 30,
                Mind: 27,
                End: 20,
                Str: 9,
                Dex: 16,
                Int: 45,
                Fai: 45
            }
        }
        else if (lvl === 11){
            return {
                HP: 640,
                FP: 170,
                Stam: 84,
                Vig: 28,
                Mind: 25,
                End: 18,
                Str: 8,
                Dex: 14,
                Int: 42,
                Fai: 42
            }
        }
        else if (lvl === 10){
            return {
                HP: 600,
                FP: 160,
                Stam: 82,
                Vig: 26,
                Mind: 23,
                End: 17,
                Str: 7,
                Dex: 13,
                Int: 39,
                Fai: 39
            }
        }
        else if (lvl === 9){
            return {
                HP: 560,
                FP: 155,
                Stam: 78,
                Vig: 24,
                Mind: 22,
                End: 15,
                Str: 6,
                Dex: 12,
                Int: 36,
                Fai: 36
            }
        }
        else if (lvl === 8){
            return {
                HP: 520,
                FP: 145,
                Stam: 76,
                Vig: 22,
                Mind: 20,
                End: 14,
                Str: 6,
                Dex: 11,
                Int: 33,
                Fai: 33
            }
        }
        else if (lvl === 7){
            return {
                HP: 480,
                FP: 140,
                Stam: 72,
                Vig: 20,
                Mind: 19,
                End: 12,
                Str: 5,
                Dex: 10,
                Int: 30,
                Fai: 30
            }
        }
        else if (lvl === 6){
            return {
                HP: 440,
                FP: 130,
                Stam: 70,
                Vig: 18,
                Mind: 17,
                End: 11,
                Str: 4,
                Dex: 8,
                Int: 27,
                Fai: 27
            }
        }
        else if (lvl === 5){
            return {
                HP: 400,
                FP: 120,
                Stam: 66,
                Vig: 16,
                Mind: 15,
                End: 9,
                Str: 4,
                Dex: 7,
                Int: 24,
                Fai: 24
            }
        }
        else if (lvl === 4){
            return {
                HP: 360,
                FP: 115,
                Stam: 64,
                Vig: 14,
                Mind: 14,
                End: 8,
                Str: 3,
                Dex: 6,
                Int: 21,
                Fai: 21
            }
        }
        else if (lvl === 3){
            return {
                HP: 320,
                FP: 105,
                Stam: 60,
                Vig: 12,
                Mind: 12,
                End: 6,
                Str: 2,
                Dex: 5,
                Int: 18,
                Fai: 18
            }
        }
        else if (lvl === 2){
            return {
                HP: 280,
                FP: 100,
                Stam: 58,
                Vig: 10,
                Mind: 11,
                End: 5,
                Str: 2,
                Dex: 4,
                Int: 15,
                Fai: 15
            }
        }
        else if (lvl === 1){
            return {
                HP: 200,
                FP: 80,
                Stam: 54,
                Vig: 6,
                Mind: 7,
                End: 3,
                Str: 1,
                Dex: 2,
                Int: 5,
                Fai: 5
            }
        }
    }
    else if (nightfarer === "Executor"){
        if (lvl === 15){
            return {
                HP: 1000,
                FP: 100,
                Stam: 102,
                Vig: 46,
                Mind: 11,
                End: 27,
                Str: 25,
                Dex: 63,
                Int: 8,
                Fai: 6
            }
        }
        else if (lvl === 14){
            return {
                HP: 960,
                FP: 95,
                Stam: 100,
                Vig: 44,
                Mind: 10,
                End: 26,
                Str: 24,
                Dex: 62,
                Int: 7,
                Fai: 5
            }
        }
        else if (lvl === 13){
            return {
                HP: 920,
                FP: 90,
                Stam: 98,
                Vig: 42,
                Mind: 9,
                End: 25,
                Str: 23,
                Dex: 61,
                Int: 7,
                Fai: 5
            }
        }
        else if (lvl === 12){
            return {
                HP: 880,
                FP: 90,
                Stam: 96,
                Vig: 40,
                Mind: 9,
                End: 24,
                Str: 22,
                Dex: 60,
                Int: 7,
                Fai: 5
            }
        }
        else if (lvl === 11){
            return {
                HP: 820,
                FP: 85,
                Stam: 92,
                Vig: 37,
                Mind: 8,
                End: 22,
                Str: 20,
                Dex: 56,
                Int: 6,
                Fai: 4
            }
        }
        else if (lvl === 10){
            return {
                HP: 760,
                FP: 80,
                Stam: 88,
                Vig: 34,
                Mind: 7,
                End: 20,
                Str: 19,
                Dex: 52,
                Int: 6,
                Fai: 4
            }
        }
        else if (lvl === 9){
            return {
                HP: 720,
                FP: 80,
                Stam: 84,
                Vig: 32,
                Mind: 7,
                End: 18,
                Str: 18,
                Dex: 48,
                Int: 5,
                Fai: 4
            }
        }
        else if (lvl === 8){
            return {
                HP: 660,
                FP: 75,
                Stam: 80,
                Vig: 29,
                Mind: 6,
                End: 16,
                Str: 16,
                Dex: 44,
                Int: 5,
                Fai: 4
            }
        }
        else if (lvl === 7){
            return {
                HP: 620,
                FP: 75,
                Stam: 76,
                Vig: 27,
                Mind: 6,
                End: 14,
                Str: 15,
                Dex: 40,
                Int: 5,
                Fai: 4
            }
        }
        else if (lvl === 6){
            return {
                HP: 560,
                FP: 70,
                Stam: 72,
                Vig: 24,
                Mind: 5,
                End: 12,
                Str: 14,
                Dex: 36,
                Int: 4,
                Fai: 3
            }
        }
        else if (lvl === 5){
            return {
                HP: 500,
                FP: 65,
                Stam: 68,
                Vig: 21,
                Mind: 4,
                End: 10,
                Str: 12,
                Dex: 32,
                Int: 4,
                Fai: 3
            }
        }
        else if (lvl === 4){
            return {
                HP: 460,
                FP: 65,
                Stam: 64,
                Vig: 19,
                Mind: 4,
                End: 8,
                Str: 11,
                Dex: 28,
                Int: 3,
                Fai: 3
            }
        }
        else if (lvl === 3){
            return {
                HP: 400,
                FP: 65,
                Stam: 60,
                Vig: 16,
                Mind: 3,
                End: 6,
                Str: 10,
                Dex: 24,
                Int: 3,
                Fai: 3
            }
        }
        else if (lvl === 2){
            return {
                HP: 360,
                FP: 60,
                Stam: 58,
                Vig: 14,
                Mind: 3,
                End: 5,
                Str: 9,
                Dex: 20,
                Int: 3,
                Fai: 3
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 55,
                Stam: 54,
                Vig: 7,
                Mind: 2,
                End: 3,
                Str: 5,
                Dex: 8,
                Int: 2,
                Fai: 2
            }
        }
    }
    else if (nightfarer === "Scholar"){
        if (lvl === 15){
            return {
                HP: 900,
                FP: 145,
                Stam: 98
            }
        }
        else if (lvl === 14){
            return {
                HP: 860,
                FP: 140,
                Stam: 96
            }
        }
        else if (lvl === 13){
            return {
                HP: 820,
                FP: 135,
                Stam: 94
            }
        }
        else if (lvl === 12){
            return {
                HP: 800,
                FP: 130,
                Stam: 92
            }
        }
        else if (lvl === 11){
            return {
                HP: 740,
                FP: 120,
                Stam: 88
            }
        }
        else if (lvl === 10){
            return {
                HP: 700,
                FP: 115,
                Stam: 84
            }
        }
        else if (lvl === 9){
            return {
                HP: 660,
                FP: 110,
                Stam: 80
            }
        }
        else if (lvl === 8){
            return {
                HP: 620,
                FP: 105,
                Stam: 78
            }
        }
        else if (lvl === 7){
            return {
                HP: 580,
                FP: 100,
                Stam: 74
            }
        }
        else if (lvl === 6){
            return {
                HP: 520,
                FP: 95,
                Stam: 70
            }
        }
        else if (lvl === 5){
            return {
                HP: 480,
                FP: 90,
                Stam: 68
            }
        }
        else if (lvl === 4){
            return {
                HP: 440,
                FP: 85,
                Stam: 64
            }
        }
        else if (lvl === 3){
            return {
                HP: 400,
                FP: 80,
                Stam: 60
            }
        }
        else if (lvl === 2){
            return {
                HP: 360,
                FP: 75,
                Stam: 58
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 65,
                Stam: 54
            }
        }
    }
    else if (nightfarer === "Undertaker"){
        if (lvl === 15){
            return {
                HP: 1040,
                FP: 115,
                Stam: 92,
                Vig: 48,
                Mind: 14,
                End: 22,
                Str: 50,
                Dex: 13,
                Int: 5,
                Fai: 41
            }
        }
        else if (lvl === 14){
            return {
                HP: 1000,
                FP: 110,
                Stam: 90,
                Vig: 46,
                Mind: 13,
                End: 21,
                Str: 48,
                Dex: 12,
                Int: 4,
                Fai: 39
            }
        }
        else if (lvl === 13){
            return {
                HP: 960,
                FP: 105,
                Stam: 88,
                Vig: 44,
                Mind: 12,
                End: 20,
                Str: 46,
                Dex: 11,
                Int: 4,
                Fai: 38
            }
        }
        else if (lvl === 12){
            return {
                HP: 920,
                FP: 105,
                Stam: 86,
                Vig: 42,
                Mind: 12,
                End: 19,
                Str: 44,
                Dex: 11,
                Int: 4,
                Fai: 37
            }
        }
        else if (lvl === 11){
            return {
                HP: 860,
                FP: 100,
                Stam: 82,
                Vig: 39,
                Mind: 11,
                End: 17,
                Str: 41,
                Dex: 10,
                Int: 3,
                Fai: 35
            }
        }
        else if (lvl === 10){
            return {
                HP: 800,
                FP: 95,
                Stam: 80,
                Vig: 36,
                Mind: 10,
                End: 16,
                Str: 38,
                Dex: 9,
                Int: 3,
                Fai: 33
            }
        }
        else if (lvl === 9){
            return {
                HP: 740,
                FP: 95,
                Stam: 76,
                Vig: 33,
                Mind: 10,
                End: 14,
                Str: 36,
                Dex: 8,
                Int: 3,
                Fai: 31
            }
        }
        else if (lvl === 8){
            return {
                HP: 680,
                FP: 90,
                Stam: 74,
                Vig: 30,
                Mind: 9,
                End: 13,
                Str: 33,
                Dex: 8,
                Int: 3,
                Fai: 29
            }
        }
        else if (lvl === 7){
            return {
                HP: 640,
                FP: 75,
                Stam: 72,
                Vig: 28,
                Mind: 9,
                End: 12,
                Str: 31,
                Dex: 7,
                Int: 3,
                Fai: 27
            }
        }
        else if (lvl === 6){
            return {
                HP: 580,
                FP: 85,
                Stam: 68,
                Vig: 25,
                Mind: 8,
                End: 10,
                Str: 28,
                Dex: 6,
                Int: 2,
                Fai: 25
            }
        }
        else if (lvl === 5){
            return {
                HP: 520,
                FP: 80,
                Stam: 66,
                Vig: 22,
                Mind: 7,
                End: 9,
                Str: 25,
                Dex: 6,
                Int: 2,
                Fai: 23
            }
        }
        else if (lvl === 4){
            return {
                HP: 460,
                FP: 80,
                Stam: 62,
                Vig: 19,
                Mind: 7,
                End: 7,
                Str: 23,
                Dex: 5,
                Int: 2,
                Fai: 21
            }
        }
        else if (lvl === 3){
            return {
                HP: 400,
                FP: 75,
                Stam: 60,
                Vig: 16,
                Mind: 6,
                End: 6,
                Str: 20,
                Dex: 4,
                Int: 2,
                Fai: 19
            }
        }
        else if (lvl === 2){
            return {
                HP: 360,
                FP: 75,
                Stam: 58,
                Vig: 14,
                Mind: 6,
                End: 5,
                Str: 18,
                Dex: 4,
                Int: 2,
                Fai: 17
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 65,
                Stam: 54,
                Vig: 7,
                Mind: 4,
                End: 3,
                Str: 5,
                Dex: 2,
                Int: 2,
                Fai: 5
            }
        }
    }
    else{
        console.log("What?")
    }
}