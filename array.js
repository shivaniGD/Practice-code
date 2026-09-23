const stuff = [
  { id: 1, nm: "bolt", qty: 12, cat: "hw", px: 4 },
  { id: 2, nm: "pixel", qty: 3, cat: "gfx", px: 40 },
  { id: 3, nm: "wrench", qty: 7, cat: "hw", px: 15 },
  { id: 4, nm: "brush", qty: 0, cat: "gfx", px: 9 },
  { id: 5, nm: "cable", qty: 20, cat: "el", px: 6 },
  { id: 6, nm: "fuse", qty: 45, cat: "el", px: 1 },
];

const mm = stuff.map((z) => ({ id: z.id, label: z.nm.toUpperCase() }));
console.log(mm);

const mm2 = stuff.map((z) => z.px * 2);
console.log(mm2);

const mm3 = stuff.map(({ nm, qty }) => `${nm}-${qty}`);
console.log(mm3);

const ff = stuff.filter((z) => z.qty > 10);
console.log(ff);

const ff2 = stuff.filter((z) => z.cat === "hw" && z.px < 10);
console.log(ff2);

const ff3 = stuff.filter(({ qty }) => qty === 0).map(({ nm }) => nm);
console.log(ff3);

const rr = stuff.reduce((acc, z) => acc + z.qty * z.px, 0);
console.log(rr);

const rr2 = stuff.reduce((acc, z) => {
  if (!acc[z.cat]) acc[z.cat] = [];
  acc[z.cat].push(z.nm);
  return acc;
}, {});
console.log(rr2);

const rr3 = stuff.reduce((acc, z) => {
  acc[z.cat] = (acc[z.cat] || 0) + z.qty;
  return acc;
}, {});
console.log(rr3);

const nested = [[1, 2], [3], [4, 5, 6], []];
const flat1 = nested.reduce((acc, z) => acc.concat(z), []);
console.log(flat1);

const maxItem = stuff.reduce((a, b) => (b.px > a.px ? b : a));
console.log(maxItem);

const kk = {
  q: 10,
  w: "hey",
  e: [1, 2, 3],
  r: { t: "deep", y: 99 },
  hello() {
    return "hi " + this.w;
  },
};
const zz = "dyn";
const kk2 = { ...kk, [zz]: true };
console.log(kk2.hello());

const { q: qq, w, r: { t, y } } = kk;
console.log(qq, w, t, y);

const { missing = "nope", w: ww = "x" } = kk;
console.log(missing, ww);

const [a1, b1, , d1 = 100, ...others] = [5, 6, 7, undefined, 8, 9];
console.log(a1, b1, d1, others);

let p = 1;
let o = 2;
[p, o] = [o, p];
console.log(p, o);

const mix = ({ nm, px }, [first, second]) => `${nm} ${px} ${first} ${second}`;
console.log(mix(stuff[0], [7, 8]));

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const joined = [...arr1, ...arr2, 99];
const copy1 = [...arr1];
copy1.push(50);
console.log(arr1, copy1, joined);

const o1 = { a: 1, b: 2, c: { d: 3 } };
const o2 = { b: 20, e: 5 };
const merged = { ...o1, ...o2 };
const upd = { ...o1, a: 111 };
console.log(o1, merged, upd);

const shallow = { ...o1 };
shallow.c.d = 777;
console.log(o1.c.d);

const addItem = (list, thing) => [...list, thing];
const wipe = (list, idx) => [...list.slice(0, idx), ...list.slice(idx + 1)];
const patch = (list, idx, chg) =>
  list.map((z, i) => (i === idx ? { ...z, ...chg } : z));

console.log(addItem(arr1, 9), wipe(arr1, 1), patch(stuff, 0, { qty: 500 })[0]);
console.log(arr1, stuff[0]);

const summ = (...nums) => nums.reduce((s, n) => s + n, 0);
console.log(summ(1, 2, 3, 4));

const head = (first, ...rest) => ({ first, rest });
console.log(head(1, 2, 3, 4));

const { id, ...leftover } = stuff[1];
console.log(id, leftover);

const [top, ...tail] = stuff;
console.log(top.nm, tail.length);

console.log(Math.max(...stuff.map((z) => z.px)));