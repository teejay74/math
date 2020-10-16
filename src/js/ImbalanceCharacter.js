export default class ImbalanceCharacter {
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }

  set attackAction(distance) {
    this.attackDicstance = distance;
  }

  get attackAction() {
    let currentAttack = this.attack - (((this.attackDicstance - 1) * 10) / 100) * this.attack;
    if (this.stoned) { currentAttack -= Math.log2(this.attackDicstance) * 5; }
    return Math.round(currentAttack);
  }

  set stoned(flag) {
    this.isStoned = flag;
  }

  get stoned() {
    return this.isStoned;
  }
}
