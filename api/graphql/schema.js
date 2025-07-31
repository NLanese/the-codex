import { gql } from '@apollo/client';

const typeDefs = gql`
  scalar Date
  scalar JSON

##############
# USER MODEL #
##############
  type User {
    id: ID
    email: String
    username: String
    password: String
    memberSince: Date
    
    basics_lessons_operaters: Boolean
    basics_lessons_dataTypes: Boolean
    basics_lessons_printing: Boolean
    basics_lessons_conditionals: Boolean
    basics_lessons_functions: Boolean
    basics_lessons_arraysAndLists: Boolean
    basics_lessons_objectsAndClasses: Boolean

    basics_labs_puttingItTogether: Boolean
    basics_labs_basicsMastery: Boolean

    basics_tests_dataTypesAndVariables: Boolean
    basics_tests_advancedOperatorsAndConditions: Boolean
    basics_tests_mastery: Boolean
  }

  ###############
  # UNLOCKABLES #
  ###############
  type UserUnlockables {
    id: ID
    userID: Int
    user: User
    
    blueGunCamo: Boolean
    redGunCamo: Boolean 
    greenGunCamo: Boolean 
    silverGunCamo: Boolean 
    goldGunCamo: Boolean 
    diamondGunCamo: Boolean 
    celestialGunCamo: Boolean 

    lightingSpawn: Boolean 
    hellfireSpawn: Boolean 
    tundraSpawn: Boolean 
  }

  ###################
  # GUN UNLOCKABLES #
  ###################
  type GunUnlockables {
    id: ID
    userID: Int
    user: User
    gunName: String

    redDotSight: Boolean
    tracerDot: Boolean
    smartScope: Boolean
    tracerSmartScope: Boolean

    quickReload: Boolean
    extendedCapacity: Boolean
    increaseSpare: Boolean
  }

  ########
  # GAME #
  ########
  type Game {
    id: ID
    users: [User]

    dateStart: Date
    matchType: String
    matchLength: String
    teams: [Team]
  }

  ########
  # TEAM #
  ########
  type Team {
    id: ID
    teamColor: String
    players: [UserGameStats]
    gameID: Int
    game: Game
  }

  #################
  # UserGameStats #
  #################
  type UserGameStats {
    id: ID
    teamID: Int
    team: Team
    userID: Int
    user: User
    points: Int
    pointsPerGame: Float

    kills: Int
    deaths: Int
    assists: Int
    kd: Float

    flagCaptures: Int
    flagDistance: String
    flagSecures: Int
    flagReturns: Int

    zoneCaptures: Int
    zoneDefends: Int
  }

  ###########
  # LOADOUT #
  ###########
  type Loadout {
    id: ID
    userID: String
    user: User

    mainGunID: Int
    sidearmID: Int
    weapons: [Gun]
  }

  #######
  # GUN #
  #######
  type Gun {
    id: ID

    type: String
    fireType: String
    base: String

    displayName: String
    description: String

    scope: String
    magazine: String
    camo: String
    killEffect: String

    dam: Int
    shieldMod: Float
    headshotMod: Float
    recoilMod: Float
    range: Float
    fallOffRate: Float
    maxRange: Float
    fullAuto: Float
    charged: Float
    shotCooldown: Float
    baseMagAmmo: Float
    spareAmmoMax: Float

    userID: Int
    user: User
    loadout: [Loadout]
  }

  #########
  # BADGE #
  #########
  type Badge {
    id: ID
    name: String
    dateEarned: String
    userID: String
    user: User
  }

  ##########
  # AVATAR #
  ##########
  type Avatar {
    id: ID
    headAccessory: String
    bodySkin: String
    spawnEffect: String
    userID: Int
    user: User
  }

  ##############
  # AUTH TOKEN #
  ##############
  type AuthToken {
    active: Boolean
    token: String
    user: User
  }

# ---------------------------------------- END SCHEMAS ---------------------------------------- #


############################################################################ 
# QUERIES      QUERIES      QUERIES      QUERIES      QUERIES      QUERIES #
############################################################################

type Query {
    ######################
    #### USER QUERIES ####
    ######################
      getUser: User
      getUserStats: User
      getUserGameHistory: User

    #########################
    #### LOADOUT QUERIES ####
    #########################
}




########################################################################################
# MUTATIONS      MUTATIONS      MUTATIONS      MUTATIONS      MUTATIONS      MUTATIONS #
########################################################################################
  
  type Mutation {
    ######################
    #### LANDING PAGE ####
    ######################
      loginUser(username: String! password: String!): AuthToken

      signUpUser(
        email: String
        password: String!
        arenaAlias: String!
        phoneNumber: String
        firstName: String, 
        lastName: String,
        subscriptionStatus: String
      ): AuthToken

      signOutUser: String

    ########################
    #### SUPER COMMANDS ####
    ########################

    superDeleteUsers(userIDs: [String]!, superKey: String!): Boolean
}
`





module.exports = typeDefs;