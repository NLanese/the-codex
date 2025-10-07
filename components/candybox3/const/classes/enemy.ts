

type EnemyConfig = {
  name: string;
  health: number;
  atk: number;
  atkSpeed: number;
  render: JSX.Element;
  movementSpeed: number;
  customMovement: boolean;
  candiesDroppedMin: number;
  candiesDroppedMax: number;
  spawnWeight: number;
};

class Enemy {
  name: string;
  health: number;
  atk: number;
  atkSpeed: number;
  render: JSX.Element;
  movementSpeed: number;
  customMovement: boolean;
  candiesDroppedMin: number;
  candiesDroppedMax: number;
  spawnWeight: number;

  constructor(config: EnemyConfig) {
    this.name = config.name;
    this.health = config.health;
    this.atk = config.atk;
    this.atkSpeed = config.atkSpeed;
    this.render = config.render;
    this.movementSpeed = config.movementSpeed;
    this.customMovement = config.customMovement;
    this.candiesDroppedMin = config.candiesDroppedMin;
    this.candiesDroppedMax = config.candiesDroppedMax;
    this.spawnWeight = config.spawnWeight
  }

  attack(): number {
    return this.atk;
  }

  dropCandies(): number {
    return Math.floor(Math.random() * (this.candiesDroppedMax - this.candiesDroppedMin + 1)) + this.candiesDroppedMin;
  }
}

export default Enemy