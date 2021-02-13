import { insertionSort } from "./insertion-sort";

function createBuckets(array: number[], bucketSize: number): number[][] {
    let minValue = array[0];
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        } else if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }

    const bucketCount = ((maxValue - minValue) / bucketSize | 0) + 1;
    const buckets: number[][] = [];
    for (let i = 0; i < bucketCount; i++)buckets[i] = [];

    for (let j = 0; j < array.length; j++)buckets[(array[j] - minValue) / bucketSize | 0].push(array[j]);

    return buckets;
}

function sortBuckets(buckets: number[][]): number[] {
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i]);
            sortedArray.push(...buckets[i]);
        }
    }

    return sortedArray;
}

export function bucketSort(array: number[], bucketSize: number = 5): number[] {
    if (array.length < 2) return array;

    const buckets = createBuckets(array, bucketSize);

    return sortBuckets(buckets);
}