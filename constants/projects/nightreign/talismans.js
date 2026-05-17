 const talismans = [
    
    {
        title: "Ancestral Spirit Horn", 
        desc: "Defeating Eenmies Restores 5% max FP per kill",
        stacks: {self: true, selfType: true},
        selfType: "FPrest",
        effect: {
            fpRest: 1.05,
            always: true,
        }
    },
    {
        title: "Arrow's Reach Talisman", 
        desc: "Reduces Projectile Drop-Off Reduction",
        stacks: {self: true, selfType: true},
        selfType: "dropOff",
        effect: {
            dropoff: 0.5,
            always: true,
        }
    },
    {
        title: "Cerulean Dagger", 
        desc: "Critical Hits Restore 10% Max FP",
        stacks: {self: true, selfType: true},
        selfType: "dropOff",
        selfType: "FPrest",
        effect: {
            fpRest: 1.10,
            always: true,
        }
    },
    {
        title: "Crimson Dagger", 
        desc: "Critical Hits Restore 10% Max FP",
        stacks: {self: true, selfType: true},
        selfType: "dropOff",
        selfType: "FPrest",
        effect: {
            fpRest: 1.10,
            always: true,
        }
    },
    {
        title: "Axe Talisman", 
        desc: "Improves Charged Attacks by 12%",
        stacks: {self: true, selfType: true},
        selfType: "dropOff",
        selfType: "FPrest",
        effect: {
            fpRest: 1.10,
            always: true,
        }
    },
 ]