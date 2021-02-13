import { findMaxValue, findMinValue } from "../search/min-max-search";

function countingSortForRadix(array: number[], radixBase: number, significantDigit: number, minValue: number): number[] {
    let bucketsIndex: number;
    const buckets: number[] = [];
    const aux: number[] = [];

    for (let i = 0; i < radixBase; i++)buckets[i] = 0;

    for (let i = 0; i < array.length; i++) {
        bucketsIndex = ((array[i] - minValue) / significantDigit) % radixBase | 0;
        console.log('~~~  ', array[i], minValue, significantDigit, radixBase, bucketsIndex)
        buckets[bucketsIndex]++;
    }
    console.log(buckets)

    for (let i = 1; i < radixBase; i++)buckets[i] += buckets[i - 1];
    console.log(buckets)

    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = ((array[i] - minValue) / significantDigit) % radixBase | 0;
        aux[--buckets[bucketsIndex]] = array[i];
        console.log('``` ', array[i], minValue, significantDigit, radixBase, bucketsIndex)
    }
    console.log(buckets)

    for (let i = 0; i < array.length; i++)array[i] = aux[i];

    return array;
}

export function radixSort(array: number[], radixBase: number = 10): number[] {
    if (array.length < 2) return array;

    const [minValue, maxValue] = [findMinValue(array), findMaxValue(array)];

    let significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue);
        significantDigit *= radixBase;
    }

    return array;
}