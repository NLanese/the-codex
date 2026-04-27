export default async function getAllWarhammerData(){

    const ChaosDemons = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Chaos%20Daemons');
    const ChaosDemonsUnits = await ChaosDemons.json();

    const ChaosMarines = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Chaos%20Space%20Marines');
    const ChaosMarinesUnits = await ChaosMarines.json();

    const ChaosKnights = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Chaos%20Knights');
    const ChaosKnightsUnits = await ChaosKnights.json();

    const Votann = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Leagues%20of%20Votann');
    const VotannUnits = await Votann.json();

    const DeathGuard = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Death%20Guard');
    const DeathGuardUnits = await DeathGuard.json();

    const ThousandSons = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Thousand%20Sons');
    const ThousandSonsUnits = await ThousandSons.json();

    const WorldEaters = await fetch('https://openhammer-api-production.up.railway.app/units?faction=World%20Eaters');
    const WorldEatersUnits = await WorldEaters.json();

    const AgentsOfChaos = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Agents%20of%20Chaos');
    const AgentsOfChaosUnits = await AgentsOfChaos.json();

    const AdeptaSororitas = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Adepta%20Sororitas');
    const AdeptaSororitasUnits = await AdeptaSororitas.json();

    const AdeptusCustodes = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Adeptus%20Custodes');
    const AdeptusCustodesUnits = await AdeptusCustodes.json();

    const AdeptusMechanicus = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Adeptus%20Mechanicus');
    const AdeptusMechanicusUnits = await AdeptusMechanicus.json();

    const AdeptusTitanicus = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Adeptus%20Titanicus');
    const AdeptusTitanicusUnits = await AdeptusTitanicus.json();

    const AstraMilitarum = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Astra%20Militarum');
    const AstraMilitarumUnits = await AstraMilitarum.json();

    const BlackTemplars = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Black%20Templars');
    const BlackTemplarsUnits = await BlackTemplars.json();

    const BloodAngels = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Blood%20Angels');
    const BloodAngelsUnits = await BloodAngels.json();

    const DarkAngels = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Dark%20Angels');
    const DarkAngelsUnits = await DarkAngels.json();

    const Deathwatch = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Deathwatch');
    const DeathwatchUnits = await Deathwatch.json();

    const GreyKnights = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Grey%20Knights');
    const GreyKnightsUnits = await GreyKnights.json();

    const ImperialAgents = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Imperial%20Agents');
    const ImperialAgentsUnits = await ImperialAgents.json();

    const ImperialKnights = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Imperial%20Knights');
    const ImperialKnightsUnits = await ImperialKnights.json();

    const IronHands = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Iron%20Hands');
    const IronHandsUnits = await IronHands.json();

    const RavenGuard = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Raven%20Guard');
    const RavenGuardUnits = await RavenGuard.json();

    const Salamanders = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Salamanders');
    const SalamandersUnits = await Salamanders.json();

    const SpaceMarines = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Space%20Marines');
    const SpaceMarinesUnits = await SpaceMarines.json();

    const SpaceWolves = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Space%20Wolves');
    const SpaceWolvesUnits = await SpaceWolves.json();

    const Ultramarines = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Ultramarines');
    const UltramarinesUnits = await Ultramarines.json();

    const ImperialArmour = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Imperial%20Armour');
    const ImperialArmourUnits = await ImperialArmour.json();

    const Legends = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Legends');
    const LegendsUnits = await Legends.json();

    const Aeldari = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Aeldari');
    const AeldariUnits = await Aeldari.json();

    const Drukhari = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Drukhari');
    const DrukhariUnits = await Drukhari.json();

    const GenestealerCults = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Genestealer%20Cults');
    const GenestealerCultsUnits = await GenestealerCults.json();

    const Necrons = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Necrons');
    const NecronsUnits = await Necrons.json();

    const Orks = await fetch('https://openhammer-api-production.up.railway.app/units?faction=Orks');
    const OrksUnits = await Orks.json();

    const Tau = await fetch('https://openhammer-api-production.up.railway.app/units?faction=T%27au%20Empire');
    const TauUnits = await Tau.json();

return {
    // CHAOS
    ChaosDemons: ChaosDemonsUnits,
    ChaosMarines: ChaosMarinesUnits,
    ChaosKnights: ChaosKnightsUnits,
    DeathGuard: DeathGuardUnits,
    ThousandSons: ThousandSonsUnits,
    WorldEaters: WorldEatersUnits,
    AgentsOfChaos: AgentsOfChaosUnits,

    // IMPERIUM
    AdeptaSororitas: AdeptaSororitasUnits,
    AdeptusCustodes: AdeptusCustodesUnits,
    AdeptusMechanicus: AdeptusMechanicusUnits,
    AdeptusTitanicus: AdeptusTitanicusUnits,
    AstraMilitarum: AstraMilitarumUnits,
    BlackTemplars: BlackTemplarsUnits,
    BloodAngels: BloodAngelsUnits,
    DarkAngels: DarkAngelsUnits,
    Deathwatch: DeathwatchUnits,
    GreyKnights: GreyKnightsUnits,
    ImperialAgents: ImperialAgentsUnits,
    ImperialKnights: ImperialKnightsUnits,
    IronHands: IronHandsUnits,
    RavenGuard: RavenGuardUnits,
    Salamanders: SalamandersUnits,
    SpaceMarines: SpaceMarinesUnits,
    SpaceWolves: SpaceWolvesUnits,
    Ultramarines: UltramarinesUnits,

    // UNALIGNED
    ImperialArmour: ImperialArmourUnits,
    Legends: LegendsUnits,

    // XENOS
    Aeldari: AeldariUnits,
    Drukhari: DrukhariUnits,
    GenestealerCults: GenestealerCultsUnits,
    Votann: VotannUnits,
    Necrons: NecronsUnits,
    Orks: OrksUnits,
    Tau: TauUnits
}


}
