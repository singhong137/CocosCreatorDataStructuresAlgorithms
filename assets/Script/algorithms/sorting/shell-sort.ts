import { Compare, defaultCompare } from "../../util";

export function shellSort<T>(array: T[], compareFn = defaultCompare): T[] {
    const length = array.length;
    let temp: T;
    let gap = 1;
    while (gap < length / 3) gap = gap * 3 + 1;

    for (gap; gap > 0; gap = gap / 3 | 0) {
        console.log('gap: ', gap)
        for (let i = gap; i < length; i++) {
            temp = array[i];
            let j = i - gap;
            while (j >= 0 && compareFn(array[j], temp) === Compare.BIGGER_THAN) {
                array[j + gap] = array[j];
                j -= gap;
            }
            array[j + gap] = temp;
        }
    }
    return array;
}