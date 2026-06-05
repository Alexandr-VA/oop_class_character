import Character from '../js/Character';
import Bowerman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

describe('Класс Character', () => {
  test('должен выбрасывать ошибку при коротком имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('должен выбрасывать ошибку при длинном имени', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('должен выбрасывать ошибку при недопустимом типе', () => {
    expect(() => new Character('Legolas', 'Elf')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  });

  test('должен корректно создавать персонажа типа Bowman', () => {
    const bowman = new Bowerman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('должен корректно создавать персонажа типа Swordsman', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('должен корректно создавать персонажа типа Magician', () => {
    const magician = new Magician('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('должен корректно создавать персонажа типа Daemon', () => {
    const daemon = new Daemon('Diablo');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('должен корректно создавать персонажа типа Undead', () => {
    const undead = new Undead('Skeleton');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('должен корректно создавать персонажа типа Zombie', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
