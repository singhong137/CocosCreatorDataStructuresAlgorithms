import { Compare, defaultCompare } from "../../util";

export function insertionSort<T>(array: T[], compareFn = defaultCompare): T[] {
    const length = array.length;
    let temp: T;
    for (let i = 1; i < length; i++) {
        let j = i;
        temp = array[i];
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}