import { 
    ChaosDemonsUnits, ChaosMarinesUnits, ChaosKnightsUnits,
    DeathGuardUnits, ThousandSonsUnits, WorldEatersUnits, 
    AdeptaSororitasUnits, AdeptusCustodesUnits, AdeptusMechanicusUnits,
    AdeptusTitanicusUnits, AstraMilitarumUnits, BlackTemplarsUnits,
    BloodAngelsUnits, DarkAngelsUnits, DeathwatchUnits,
    GreyKnightsUnits,ImperialAgentsUnits, ImperialKnightsUnits,
    IronHandsUnits, RavenGuardUnits, SalamandersUnits,
    SpaceMarinesUnits, SpaceWolvesUnits, UltramarinesUnits,
    ImperialArmourUnits, LegendsUnits, AeldariUnits,
    DrukhariUnits, GenestealerCultsUnits, NecronsUnits,
    OrksUnits, TauUnits, VotannUnits
} from "./getAllData";
export default function getAllArmies(){

        const ALL_ARMIES = []
    
        const chaosDemons = {title: "Chaos Demons", getUnits: ChaosDemonsUnits}
        ALL_ARMIES.push(chaosDemons)
        const chaosMarines = {title: "Chaos Marines", getUnits: ChaosMarinesUnits}
        ALL_ARMIES.push(chaosMarines)
        const ChaosKnights = {title: "Chaos Knights", getUnits: ChaosKnightsUnits}
        ALL_ARMIES.push(ChaosKnights)
        const DeathGuard = {title: "Death Guard", getUnits: DeathGuardUnits}
        ALL_ARMIES.push(DeathGuard)
        const ThousandSons = {title: "Thousand Sons", getUnits: ThousandSonsUnits}
        ALL_ARMIES.push(ThousandSons)
        const WorldEaters = {title: "World Eaters", getUnits: WorldEatersUnits}
        ALL_ARMIES.push(WorldEaters)
        const AgentsOfChaos = {title: "Agents of Chaos", getUnits: DeathGuardUnits}
        ALL_ARMIES.push(AgentsOfChaos)
        const AdeptaSororitas = {title: "Adepta Sororitas", getUnits: AdeptaSororitasUnits}
        ALL_ARMIES.push(AdeptaSororitas)
        const AdeptusCustodes = {title: "Adeptus Custodes", getUnits: AdeptusCustodesUnits}
        ALL_ARMIES.push(AdeptusCustodes)
        const AdeptusMechanicus = {title: "Adeptus Mechanicus", getUnits: AdeptusMechanicusUnits}
        ALL_ARMIES.push(AdeptusMechanicus)
        const AdeptusTitanicus = {title: "Adeptus Titanicus", getUnits: AdeptusTitanicusUnits}
        ALL_ARMIES.push(AdeptusTitanicus)
        const AstraMilitarum = {title: "Astra Militarum", getUnits: AstraMilitarumUnits}
        ALL_ARMIES.push(AstraMilitarum)
        const BlackTemplars = {title: "Black Templars", getUnits: BlackTemplarsUnits}
        ALL_ARMIES.push(BlackTemplars)
        const BloodAngels = {title: "Blood Angels", getUnits: BloodAngelsUnits}
        ALL_ARMIES.push(BloodAngels)
        const DarkAngels = {title: "Dark Angels", getUnits: DarkAngelsUnits}
        ALL_ARMIES.push(DarkAngels)
        const Deathwatch = {title: "Death Watch", getUnits: DeathwatchUnits}
        ALL_ARMIES.push(Deathwatch)
        const GreyKnights = {title: "Grey Knights", getUnits: GreyKnightsUnits}
        ALL_ARMIES.push(GreyKnights)
        const ImperialAgents = {title: "Imperial Agents", getUnits: ImperialAgentsUnits}
        ALL_ARMIES.push(ImperialAgents)
        const ImperialKnights = {title: "Imperial Knightd", getUnits: ImperialKnightsUnits}
        ALL_ARMIES.push(ImperialKnights)
        const IronHands = {title: "Iron Hands", getUnits: IronHandsUnits}
        ALL_ARMIES.push(IronHands)
        const RavenGuard = {title: "Raven Guard", getUnits: RavenGuardUnits}
        ALL_ARMIES.push(RavenGuard)
        const Salamanders = {title: "Salamanders", getUnits: SalamandersUnits}
        ALL_ARMIES.push(Salamanders)
        const SpaceMarines = {title: "Space Marines", getUnits: SpaceMarinesUnits}
        ALL_ARMIES.push(SpaceMarines)
        const SpaceWolves = {title: "Space Wolves", getUnits: SpaceWolvesUnits}
        ALL_ARMIES.push(SpaceWolves)
        const Ultramarines = {title: "Ultra Marines", getUnits: UltramarinesUnits}
        ALL_ARMIES.push(Ultramarines)
        const ImperialArmour = {title: "Imperial Armour", getUnits: ImperialArmourUnits}
        ALL_ARMIES.push(ImperialArmour)
        const Legends = {title: "Legends", getUnits: LegendsUnits}
        ALL_ARMIES.push(Legends)
        const Aeldari = {title: "Aeldari", getUnits: AeldariUnits}
        ALL_ARMIES.push(Aeldari)
        const Drukhari = {title: "Drukhari", getUnits: DrukhariUnits}
        ALL_ARMIES.push(Drukhari)
        const GenestealerCults = {title: "Genestealer Cults", getUnits: GenestealerCultsUnits}
        ALL_ARMIES.push(GenestealerCults)
        const Necrons = {title: "Necrons", getUnits: NecronsUnits}
        ALL_ARMIES.push(Necrons)
        const Orks = {title: "Orks", getUnits: OrksUnits}
        ALL_ARMIES.push(Orks)
        const Tau = {title: "Tau", getUnits: TauUnits}
        ALL_ARMIES.push(Tau)
        const Votann = {title: "Leagues of Votann", getUnits: VotannUnits}
        ALL_ARMIES.push(Votann)

        return ALL_ARMIES
}