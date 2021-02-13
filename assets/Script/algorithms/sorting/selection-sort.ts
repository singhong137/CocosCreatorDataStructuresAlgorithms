import { Compare, defaultCompare, swap } from "../../util";

export function selectionSort<T>(array: T[], compareFn = defaultCompare): T[] {
    const length = array.length;
    let indexMin: number;

    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) indexMin = j;
        }
        if (i !== indexMin) swap(array, i, indexMin);
    }

    return array;
}