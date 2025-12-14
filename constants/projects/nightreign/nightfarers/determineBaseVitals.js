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
                Stam: 124
            }
        }
        else if (lvl === 14){
            return {
                HP: 1240,
                FP: 110,
                Stam: 120
            }
        }
        else if (lvl === 13){
            return {
                HP: 1200,
                FP: 105,
                Stam: 116
            }
        }
        else if (lvl === 12){
            return {
                HP: 1160,
                FP: 100,
                Stam: 114
            }
        }
        else if (lvl === 11){
            return {
                HP: 1080,
                FP: 95,
                Stam: 108
            }
        }
        else if (lvl === 10){
            return {
                HP: 1020,
                FP: 90,
                Stam: 104
            }
        }
        else if (lvl === 9){
            return {
                HP: 940,
                FP: 85,
                Stam: 100
            }
        }
        else if (lvl === 8){
            return {
                HP: 880,
                FP: 80,
                Stam: 96
            }
        }
        else if (lvl === 7){
            return {
                HP: 800,
                FP: 80,
                Stam: 92
            }
        }
        else if (lvl === 6){
            return {
                HP: 740,
                FP: 75,
                Stam: 88
            }
        }
        else if (lvl === 5){
            return {
                HP: 660,
                FP: 70,
                Stam: 84
            }
        }
        else if (lvl === 4){
            return {
                HP: 600,
                FP: 65,
                Stam: 80
            }
        }
        else if (lvl === 3){
            return {
                HP: 520,
                FP: 60,
                Stam: 76
            }
        }
        else if (lvl === 2){
            return {
                HP: 460,
                FP: 60,
                Stam: 72
            }
        }
        else if (lvl === 1){
            return {
                HP: 280,
                FP: 55,
                Stam: 60
            }
        }
    }
    else if (nightfarer === "Ironeye"){
        if (lvl === 15){
            return {
                HP: 820,
                FP: 115,
                Stam: 104
            }
        }
        else if (lvl === 14){
            return {
                HP: 800,
                FP: 110,
                Stam: 102
            }
        }
        else if (lvl === 13){
            return {
                HP: 780,
                FP: 105,
                Stam: 102
            }
        }
        else if (lvl === 12){
            return {
                HP: 760,
                FP: 100,
                Stam: 98
            }
        }
        else if (lvl === 11){
            return {
                HP: 700,
                FP: 95,
                Stam: 94
            }
        }
        else if (lvl === 10){
            return {
                HP: 660,
                FP: 90,
                Stam: 90
            }
        }
        else if (lvl === 9){
            return {
                HP: 620,
                FP: 85,
                Stam: 86
            }
        }
        else if (lvl === 8){
            return {
                HP: 580,
                FP: 80,
                Stam: 82
            }
        }
        else if (lvl === 7){
            return {
                HP: 540,
                FP: 80,
                Stam: 80
            }
        }
        else if (lvl === 6){
            return {
                HP: 480,
                FP: 75,
                Stam: 76
            }
        }
        else if (lvl === 5){
            return {
                HP: 440,
                FP: 70,
                Stam: 72
            }
        }
        else if (lvl === 4){
            return {
                HP: 400,
                FP: 65,
                Stam: 68
            }
        }
        else if (lvl === 3){
            return {
                HP: 360,
                FP: 60,
                Stam: 62
            }
        }
        else if (lvl === 2){
            return {
                HP: 320,
                FP: 60,
                Stam: 62
            }
        }
        else if (lvl === 1){
            return {
                HP: 200,
                FP: 55,
                Stam: 56
            }
        }
    }
    else if (nightfarer === "Duchess"){
        if (lvl === 15){
            return {
                HP: 860,
                FP: 180,
                Stam: 84
            }
        }
        else if (lvl === 14){
            return {
                HP: 820,
                FP: 175,
                Stam: 80
            }
        }
        else if (lvl === 13){
            return {
                HP: 800,
                FP: 170,
                Stam: 80
            }
        }
        else if (lvl === 12){
            return {
                HP: 780,
                FP: 165,
                Stam: 76
            }
        }
        else if (lvl === 11){
            return {
                HP: 720,
                FP: 155,
                Stam: 74
            }
        }
        else if (lvl === 10){
            return {
                HP: 680,
                FP: 150,
                Stam: 72
            }
        }
        else if (lvl === 9){
            return {
                HP: 640,
                FP: 140,
                Stam: 70
            }
        }
        else if (lvl === 8){
            return {
                HP: 600,
                FP: 135,
                Stam: 68
            }
        }
        else if (lvl === 7){
            return {
                HP: 560,
                FP: 125,
                Stam: 66
            }
        }
        else if (lvl === 6){
            return {
                HP: 500,
                FP: 120,
                Stam: 64
            }
        }
        else if (lvl === 5){
            return {
                HP: 460,
                FP: 110,
                Stam: 62
            }
        }
        else if (lvl === 4){
            return {
                HP: 420,
                FP: 105,
                Stam: 60
            }
        }
        else if (lvl === 3){
            return {
                HP: 380,
                FP: 95,
                Stam: 58
            }
        }
        else if (lvl === 2){
            return {
                HP: 340,
                FP: 90,
                Stam: 56
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 75,
                Stam: 54
            }
        }
    }
    else if (nightfarer === "Raider"){
        if (lvl === 15){
            return {
                HP: 1200,
                FP: 95,
                Stam: 122
            }
        }
        else if (lvl === 14){
            return {
                HP: 1160,
                FP: 90,
                Stam: 118
            }
        }
        else if (lvl === 13){
            return {
                HP: 1120,
                FP: 85,
                Stam: 114
            }
        }
        else if (lvl === 12){
            return {
                HP: 1080,
                FP: 85,
                Stam: 110
            }
        }
        else if (lvl === 11){
            return {
                HP: 1000,
                FP: 80,
                Stam: 106
            }
        }
        else if (lvl === 10){
            return {
                HP: 950,
                FP: 80,
                Stam: 102
            }
        }
        else if (lvl === 9){
            return {
                HP: 880,
                FP: 75,
                Stam: 98
            }
        }
        else if (lvl === 8){
            return {
                HP: 820,
                FP: 75,
                Stam: 94
            }
        }
        else if (lvl === 7){
            return {
                HP: 760,
                FP: 70,
                Stam: 90
            }
        }
        else if (lvl === 6){
            return {
                HP: 680,
                FP: 70,
                Stam: 86
            }
        }
        else if (lvl === 5){
            return {
                HP: 620,
                FP: 70,
                Stam: 82
            }
        }
        else if (lvl === 4){
            return {
                HP: 560,
                FP: 65,
                Stam: 78
            }
        }
        else if (lvl === 3){
            return {
                HP: 500,
                FP: 60,
                Stam: 74
            }
        }
        else if (lvl === 2){
            return {
                HP: 440,
                FP: 60,
                Stam: 72
            }
        }
        else if (lvl === 1){
            return {
                HP: 260,
                FP: 55,
                Stam: 60
            }
        }
    }
    else if (nightfarer === "Revenant"){
        if (lvl === 15){
            return {
                HP: 780,
                FP: 200,
                Stam: 90
            }
        }
        else if (lvl === 14){
            return {
                HP: 760,
                FP: 195,
                Stam: 88
            }
        }
        else if (lvl === 13){
            return {
                HP: 740,
                FP: 190,
                Stam: 86
            }
        }
        else if (lvl === 12){
            return {
                HP: 720,
                FP: 185,
                Stam: 84
            }
        }
        else if (lvl === 11){
            return {
                HP: 660,
                FP: 175,
                Stam: 80
            }
        }
        else if (lvl === 10){
            return {
                HP: 620,
                FP: 165,
                Stam: 78
            }
        }
        else if (lvl === 9){
            return {
                HP: 580,
                FP: 155,
                Stam: 74
            }
        }
        else if (lvl === 8){
            return {
                HP: 540,
                FP: 150,
                Stam: 72
            }
        }
        else if (lvl === 7){
            return {
                HP: 500,
                FP: 140,
                Stam: 70
            }
        }
        else if (lvl === 6){
            return {
                HP: 460,
                FP: 130,
                Stam: 66
            }
        }
        else if (lvl === 5){
            return {
                HP: 420,
                FP: 125,
                Stam: 64
            }
        }
        else if (lvl === 4){
            return {
                HP: 560,
                FP: 65,
                Stam: 78
            }
        }
        else if (lvl === 3){
            return {
                HP: 380,
                FP: 105,
                Stam: 58
            }
        }
        else if (lvl === 2){
            return {
                HP: 300,
                FP: 100,
                Stam: 56
            }
        }
        else if (lvl === 1){
            return {
                HP: 200,
                FP: 80,
                Stam: 54
            }
        }
    }
    else if (nightfarer === "Recluse"){
        if (lvl === 15){
            return {
                HP: 740,
                FP: 195,
                Stam: 94
            }
        }
        else if (lvl === 14){
            return {
                HP: 720,
                FP: 190,
                Stam: 92
            }
        }
        else if (lvl === 13){
            return {
                HP: 700,
                FP: 185,
                Stam: 90
            }
        }
        else if (lvl === 12){
            return {
                HP: 680,
                FP: 180,
                Stam: 88
            }
        }
        else if (lvl === 11){
            return {
                HP: 640,
                FP: 170,
                Stam: 84
            }
        }
        else if (lvl === 10){
            return {
                HP: 600,
                FP: 160,
                Stam: 82
            }
        }
        else if (lvl === 9){
            return {
                HP: 560,
                FP: 155,
                Stam: 78
            }
        }
        else if (lvl === 8){
            return {
                HP: 520,
                FP: 145,
                Stam: 76
            }
        }
        else if (lvl === 7){
            return {
                HP: 480,
                FP: 140,
                Stam: 72
            }
        }
        else if (lvl === 6){
            return {
                HP: 440,
                FP: 130,
                Stam: 70
            }
        }
        else if (lvl === 5){
            return {
                HP: 400,
                FP: 120,
                Stam: 66
            }
        }
        else if (lvl === 4){
            return {
                HP: 360,
                FP: 115,
                Stam: 64
            }
        }
        else if (lvl === 3){
            return {
                HP: 320,
                FP: 105,
                Stam: 60
            }
        }
        else if (lvl === 2){
            return {
                HP: 280,
                FP: 100,
                Stam: 58
            }
        }
        else if (lvl === 1){
            return {
                HP: 200,
                FP: 80,
                Stam: 54
            }
        }
    }
    else if (nightfarer === "Executor"){
        if (lvl === 15){
            return {
                HP: 1000,
                FP: 100,
                Stam: 102
            }
        }
        else if (lvl === 14){
            return {
                HP: 960,
                FP: 95,
                Stam: 100
            }
        }
        else if (lvl === 13){
            return {
                HP: 920,
                FP: 90,
                Stam: 98
            }
        }
        else if (lvl === 12){
            return {
                HP: 880,
                FP: 90,
                Stam: 96
            }
        }
        else if (lvl === 11){
            return {
                HP: 820,
                FP: 85,
                Stam: 92
            }
        }
        else if (lvl === 10){
            return {
                HP: 760,
                FP: 80,
                Stam: 88
            }
        }
        else if (lvl === 9){
            return {
                HP: 720,
                FP: 80,
                Stam: 84
            }
        }
        else if (lvl === 8){
            return {
                HP: 660,
                FP: 75,
                Stam: 80
            }
        }
        else if (lvl === 7){
            return {
                HP: 620,
                FP: 75,
                Stam: 76
            }
        }
        else if (lvl === 6){
            return {
                HP: 560,
                FP: 70,
                Stam: 72
            }
        }
        else if (lvl === 5){
            return {
                HP: 500,
                FP: 65,
                Stam: 68
            }
        }
        else if (lvl === 4){
            return {
                HP: 460,
                FP: 65,
                Stam: 64
            }
        }
        else if (lvl === 3){
            return {
                HP: 400,
                FP: 65,
                Stam: 60
            }
        }
        else if (lvl === 2){
            return {
                HP: 360,
                FP: 60,
                Stam: 58
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 55,
                Stam: 54
            }
        }
    }
    else if (nightfarer === "Scholar"){
        if (lvl === 15){
            return {
                HP: 1000,
                FP: 100,
                Stam: 102
            }
        }
        else if (lvl === 14){
            return {
                HP: 960,
                FP: 95,
                Stam: 100
            }
        }
        else if (lvl === 13){
            return {
                HP: 920,
                FP: 90,
                Stam: 98
            }
        }
        else if (lvl === 12){
            return {
                HP: 880,
                FP: 90,
                Stam: 96
            }
        }
        else if (lvl === 11){
            return {
                HP: 820,
                FP: 85,
                Stam: 92
            }
        }
        else if (lvl === 10){
            return {
                HP: 760,
                FP: 80,
                Stam: 88
            }
        }
        else if (lvl === 9){
            return {
                HP: 720,
                FP: 80,
                Stam: 84
            }
        }
        else if (lvl === 8){
            return {
                HP: 660,
                FP: 75,
                Stam: 80
            }
        }
        else if (lvl === 7){
            return {
                HP: 620,
                FP: 75,
                Stam: 76
            }
        }
        else if (lvl === 6){
            return {
                HP: 560,
                FP: 70,
                Stam: 72
            }
        }
        else if (lvl === 5){
            return {
                HP: 500,
                FP: 65,
                Stam: 68
            }
        }
        else if (lvl === 4){
            return {
                HP: 460,
                FP: 65,
                Stam: 64
            }
        }
        else if (lvl === 3){
            return {
                HP: 400,
                FP: 65,
                Stam: 60
            }
        }
        else if (lvl === 2){
            return {
                HP: 360,
                FP: 60,
                Stam: 58
            }
        }
        else if (lvl === 1){
            return {
                HP: 220,
                FP: 55,
                Stam: 54
            }
        }
    }
    else if (nightfarer === "Undertaker"){
        if (lvl === 15){
            return {
                HP: 1040,
                FP: 115,
                Stam: 92
            }
        }
        else if (lvl === 14){
            return {
                HP: 1000,
                FP: 110,
                Stam: 90
            }
        }
        else if (lvl === 13){
            return {
                HP: 960,
                FP: 105,
                Stam: 88
            }
        }
        else if (lvl === 12){
            return {
                HP: 920,
                FP: 105,
                Stam: 86
            }
        }
        else if (lvl === 11){
            return {
                HP: 860,
                FP: 100,
                Stam: 82
            }
        }
        else if (lvl === 10){
            return {
                HP: 800,
                FP: 95,
                Stam: 80
            }
        }
        else if (lvl === 9){
            return {
                HP: 740,
                FP: 95,
                Stam: 76
            }
        }
        else if (lvl === 8){
            return {
                HP: 680,
                FP: 90,
                Stam: 74
            }
        }
        else if (lvl === 7){
            return {
                HP: 640,
                FP: 75,
                Stam: 72
            }
        }
        else if (lvl === 6){
            return {
                HP: 580,
                FP: 85,
                Stam: 68
            }
        }
        else if (lvl === 5){
            return {
                HP: 520,
                FP: 80,
                Stam: 66
            }
        }
        else if (lvl === 4){
            return {
                HP: 460,
                FP: 80,
                Stam: 62
            }
        }
        else if (lvl === 3){
            return {
                HP: 400,
                FP: 75,
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
    else{
        console.log("What?")
    }
}