const regenDeepRelics = [
    {
        title: "Art Gauge Charged from successful Guarding +1",
        desc: "1.5 Ultimate Charge per Successful Guard",
        stacks: {self: false, selfType: true},
        selfType: "ultGuard",
        effect: {
            always: true,
            ultGuard: 1.5
        }
    },
    {
        title: "Art Gauge Filled Moderately on Critical Hit",
        desc: "Critical Hits increase Ultimate Gauge by 6.5.",
        stacks: {self: false, selfType: true},
        selfType: "ultCrit",
        effect: {
            always: true,
            ultCrit: 6.5
        }
    },
    {
        title: "Defeating enemies fills more of the Art gauge +1",
        desc: "Ultimate Gauge regenerates 6.5 points per kill",
        stacks: {self: true, selfType: true},
        selfType: "ultGrantOnKill",
        effect: {
            always: true,
            ultGrantOnKill: 6.5,
        }
    },
]