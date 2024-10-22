// TS 타입
// 기본 제공 타입
// number, string, boolean, object
// unknown, any, null, undefined, void, symbol, never etc....

// let num: number = 1;

// 타입 자동 추론 기능 ( 점진적 타입시스템 => 타입추론 => 타입주석을 입력하지 않아도 )
let num = 1;
// num = 10;

let str: string = "Hello";
str = "World";
// str = 1;

let bool: boolean = true;

let obj: object = {
  name: "Daivd",
};

// 타입 안에서도 다양한 종류 가운데, 치트키의 역할!
// any는 모든 타입을 수용할 수 있습니다.
let sample: any = 0;
sample = "Hello";

// undefined
let sample01: undefined = undefined;

// 오로지 undefined만
// sample01 = undefined;

// 타입스크립트는 계층 구조를 가지고 있다!
// 계층 구조에 따라서 타입이 수용가능한 게 있고 아닌 게 있다.
// 최고 정점은 unknown이 있다. any보다 더 위의
// unknown super type =>  상대적으로 상위 랭크 되어있는 타입: 슈퍼타입
// 그 아래는 sub type => 상대적으로 하위 랭크 되어있는 타입: 서브타입
let sample02: unknown = 10;
sample02 = "1";

// 순서는 unknown => any => null  => void null + st => bbl => s ...
// void => never, undefined

// 배열타입!! (제너릭을 배우게 되면, 이러한 정의는 흔하지 않다.)
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["Dk", "Ezen"];

// ex) => 이것이 바로 제너릭 형태
const boolArr: Array<boolean> = [true, false, true];

// 혼합된 상태 / 이것을 바로 union 타입 (합친다. 겹쳐진 상태)
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 중첩배열 배열안에 배열
const doubleArr: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

// 고차함수로 가면, 외계어로 간다.

// 배열은 배열인데,
// 만약에 길이 & 타입이 고정된 배열
// 두 개 이상, 이하는 절대 들어갈 수 없음
// Tuple 타입 (고정된)
const tup1: [number, number] = [1, 2];

// tup1.push(1);
// 무언가의 값을 추가하고자 할 때는, no

const users: [string, number][] = [
  ["Dk", 1],
  ["Romeo", 2],
  ["Juilet", 3],
  ["Peter", 4],
  // [5, "ZZANGUN"],
];
