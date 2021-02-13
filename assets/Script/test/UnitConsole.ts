import Main from "../Main";

const { ccclass, property } = cc._decorator;

const lele: number = 3.14;

@ccclass
export default class UnitConsole extends cc.Component {

    

    start(){
        console.log('================ UnitConsole ================');
        
        console.log(`array's methods~~~`);

        console.time('a1');
        let aa = 1;
        for (let i: number = 0; i < 1000; i++) {
            aa *= 2;
        }
        console.timeEnd('a1');//a1: 0.02001953125ms

        console.time('a2');
        let bb = 1;
        for (let j: number = 0; j < 1000; j++) {
            bb << 1;
        }
        console.timeEnd('a2');//a2: 0.013916015625ms

        //a1 - a2 = 0.006103515625
        console.log(lele);

        let [a, b] = [1, 2];
        console.log(a, ' / ', b);
        [a, b] = [b, a];
        console.log(a, ' / ', b);

        let c = a ** 3;
        console.log(`c:${c}`);

        const fibonacci = [];
        fibonacci[0] = 1;
        fibonacci[1] = 1;
        for (let i: number = 2; i < 20; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }
        console.log(fibonacci);

        fibonacci.splice(5, 0, -1, -2, -3);
        console.log(fibonacci);

        let tm = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];
        for (let i: number = 0; i < tm.length; i++) {
            for (let j: number = 0; j < tm[0].length; j++) {
                console.log(tm[i][j]);
            }
        }
        console.table(tm);

        const m333 = [];
        for (let i = 0; i < 3; i++) {
            m333[i] = [];
            for (let j = 0; j < 3; j++) {
                m333[i][j] = []
                for (let k = 0; k < 3; k++) {
                    m333[i][j][k] = i + j + k;
                }
            }
        }
        console.log(m333);
        console.table(m333);

        let cc = [1, 3, 5, 7, 8];
        let mtc = (x: number) => {
            console.log(x);
            return x % 2 === 0;
        }

        console.log('every:', cc.every(mtc));
        console.log('some', cc.some(mtc));
        console.log('---------');

        cc.forEach((a, b, c) => { a *= 2; console.log(a, b, c); });
        console.log(cc)

        console.log('map:', cc.map(mtc));
        console.log('filter:', cc.filter(mtc));

        console.log('reduce:', cc.reduce((m, n) => { return m + n }));//console.log('reduce:', cc.reduce((m, n) => m + n ));//Omitted "return"

        let dd = [1, 2, 3, 4, 5];

        let iterator = cc[Symbol.iterator]();
        console.log(iterator);
        for (let i = 0; i < 5; i++)console.log(iterator.next().value);
        console.log('---------');
        iterator = cc[Symbol.iterator]();//iterator's state update
        for (let nn of iterator) console.log(nn);

        // let entries=cc.entries();
        let [entries, keys, values] = [cc.entries(), cc.keys(), cc.values()];
        for (let i of entries) console.log('entries:', i);
        for (let i of keys) console.log('keys:', i);
        for (let i of values) console.log('values:', i);

        let ee = Array.from(cc);
        console.log('from:', ee);
        let ff = Array.from(ee, a => a % 2 == 1);
        console.log('from cb:', ff);

        let gg = Array.of(1);
        gg = Array.of(...ee);
        console.log('of:', gg);

        let hh = Array.of(...gg);
        hh.fill(0);
        console.log('fill:', hh);

        let ii = Array.from(gg);
        ii.copyWithin(0, 3);
        console.log('copyWithin:', ii);

        let jj = new Array(15);
        jj.fill(1);
        for (let i = 0; i < 15; i++)jj[i] = jj[i] + i;
        let multiple3 = (a: number, b: number, c?: Array<number>) => { return a % 3 == 0 }
        console.log(jj);
        console.log('find:', jj.find(multiple3));
        console.log('findIndex:', jj.findIndex(multiple3));

        const friends = [
            { name: 'john', age: 30 },
            { name: 'ana', age: 20 },
            { name: 'chris', age: 25 },
        ];
        let comparePenson = (z1: any, z2: any) => {
            let rt = 0;
            z1.age < z2.age ? rt = -1 : rt = 1;
            return rt;
        }
        console.log('Array sort:', friends.sort(comparePenson));

        console.log('join:', jj.join('~'));

        let lt = 50;
        let int16 = new Int16Array(lt);
        let array16 = [];
        array16.length = lt;
        for (let i = 0; i < lt; i++)int16[i] = i++;
        console.log('TypedArray:', int16,array16);
    }
}