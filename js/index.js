import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Daemon from './Daemon';
import Undead from './Undead';
import Zombie from './Zombie';

const heroes = [
  new Bowerman('Robin'),
  new Swordsman('Arthur'),
  new Magician('Gandalf'),
  new Daemon('Diablo'),
  new Undead('Skeleton'),
  new Zombie('Walker'),
];

// Вывод в консоль
heroes.forEach((hero) => console.log(hero));

// Вывод на страницу
const outputDiv = document.getElementById('output');
heroes.forEach((hero) => {
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(hero, null, 2);
  outputDiv.appendChild(pre);
});
