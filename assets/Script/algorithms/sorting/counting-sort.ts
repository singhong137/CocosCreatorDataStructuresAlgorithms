import { findMaxValue } from "../search/min-max-search";

export function countingSort(array: number[]): number[] {
    if (array.length < 2) return array;
    
    const maxValue = findMaxValue<number>(array);
    let sortedIndex = 0;
    const counts = new Array<number>(maxValue + 1);

    array.forEach(element => {
        if (!counts[element]) counts[element] = 0;
        counts[element]++;
    });

    counts.forEach((element, i) => {
        while (element > 0) {
            array[sortedIndex++] = i;
            element--;
        }
    });
    return array;
}