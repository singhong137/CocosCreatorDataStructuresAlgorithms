import Set from "../data_structures/Set";
const { ccclass, property } = cc._decorator;

@ccclass
export default class SetTest extends cc.Component {
    start(){
        console.log('SET~~');
        const set = new Set<number>();
        set.add(1);
        console.log(set.values());
        console.log(set.has(1));
        console.log(set.size());

        set.add(2);
        console.log(set.values());
        console.log(set.has(2));
        console.log(set.size());

        set.delete(1);
        console.log(set.values());

        set.delete(2);
        console.log(set.values());

        const setA = new Set<number>();
        setA.add(1);
        setA.add(2);
        setA.add(3);
        setA.add(6);

        const setB = new Set<number>();
        setB.add(3);
        setB.add(4);
        setB.add(5);
        setB.add(6);

        const unionAB = setA.union(setB);
        console.log('unionAB', unionAB.values());

        const intersectionAB = setA.intersection(setB);
        console.log('intersetionAB', intersectionAB.values());

        const differenceAB = setA.difference(setB);
        console.log('differenceAB', differenceAB.values());

        const setC = new Set<number>();
        setC.add(1);
        setC.add(2);
        setC.add(3);
        setC.add(6);
        setC.add(4);
        console.log('isSubsetOf', setA.isSubsetOf(setC));
    }
}