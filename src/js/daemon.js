import ImbalanceCharacter from './ImbalanceCharacter';

export default class Daemon extends ImbalanceCharacter {
  constructor(name) {
    super(name);
    this.attack = 100;
    this.type = 'Daemon';
  }
}
