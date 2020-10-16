import ImbalanceCharacter from './ImbalanceCharacter';

export default class Magician extends ImbalanceCharacter {
  constructor(name) {
    super(name);
    this.attack = 100;
    this.type = 'Magician';
  }
}
