interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move: () => void;
}
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  // 무조건 실행을 해야한다.
  move() {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
