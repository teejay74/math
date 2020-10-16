import Daemon from '../daemon';
import Magician from '../magician';

test('Атака на 1 клетку, без stoned', () => {
  const expected = 100;
  const magician = new Magician('Kain');
  magician.attackAction = 1; 
  const received = magician.attackAction;
  expect(received).toBe(expected);
});

test('Атака на 5 клеток, без stoned', () => {
  const expected = 60;
  const daemon = new Daemon('Teejay');
  daemon.attackAction = 5;
  const received = daemon.attackAction;
  expect(received).toBe(expected);
});

test('Атака с параметром stoned', () => {
  const expected = 85;
  const magician = new Magician('Essentia');
  magician.attackAction = 2;
  magician.stoned = true;
  const received = magician.attackAction;
  expect(received).toBe(expected);
});
