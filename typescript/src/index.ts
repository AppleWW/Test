const isLoading: boolean = false;
const decLiter: number = 6;

const decLiter2: number = 0xf00d;
const str: string = '1111';

function fn(): void {
  console.log(111);
}
const aNull: void = undefined;
const num: null = null;
const num2: undefined = undefined;
const num3: any = null;

declare let foo: number;
declare let foo2: bigint;

const list: number[] = [1, 2, 3];
const list2: Array<number> = [0];

interface Tuple extends Array<string | number> {
  0: number;
  1: string;
  length: 2;
}

let test1: number;
test1 = 10;

// [prop: string]: any 任意类型的属性
let c: { name: string; [prop: string]: any };
c = { name: '111' };

let d: (a: number, b: number) => number;
d = function (a: number, b: number): number {
  return 10;
};

let aa: object[];
aa = [{ a: 1 }];
