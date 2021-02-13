import { shuffle } from "../algorithms/shuffle/fisher-yates";
import { BubbleSort } from "../algorithms/sorting/bubble-sort";
import { bucketSort } from "../algorithms/sorting/bucket-sort";
import { countingSort } from "../algorithms/sorting/counting-sort";
import { insertionSort } from "../algorithms/sorting/insertion-sort";
import { mergeSort } from "../algorithms/sorting/merge-sort";
import { quickSort } from "../algorithms/sorting/quick-sort";
import { radixSort } from "../algorithms/sorting/radix-sort";
import { selectionSort } from "../algorithms/sorting/selection-sort";
import { shellSort } from "../algorithms/sorting/shell-sort";
const { ccclass, property } = cc._decorator;

@ccclass
export default class SortingTest extends cc.Component {
    start(){
        console.log('Sorting test ~~');

        let createNonSortedArray = (l: number = 5) => {
            let array = [];
            for (let i = l; i > 0; i--)array.push(i);
            shuffle<number>(array);
            return array;
        }

        const noiseArray = createNonSortedArray();

        const arrayBubble = BubbleSort(noiseArray.slice(0));
        console.log('bubbleSort: ', noiseArray.toString(), ' to ', arrayBubble.toString());

        const arraySelection = selectionSort(noiseArray.slice(0));
        console.log('selectionSort: ', noiseArray.toString(), ' to ', arraySelection.toString());

        const arrayInsertion = insertionSort(noiseArray.slice(0));
        console.log('insertionSort: ', noiseArray.toString(), ' to ', arrayInsertion.toString());

        const arrayMerge = mergeSort(noiseArray.slice(0));
        console.log('mergeSort: ', noiseArray.toString(), ' to ', arrayMerge.toString());

        const quickNoiseArray = [3, 5, 1, 6, 4, 7, 2]
        const arrayQuick = quickSort(quickNoiseArray.slice(0));
        console.log('quickSort: ', quickNoiseArray.toString(), ' to ', arrayQuick.toString());

        const countingArray = [4, 5, 3, 2, 3, 1];
        const arrayCounting = countingSort(countingArray.slice(0));
        console.log('countingSort: ', countingArray.toString(), ' to ', arrayCounting.toString());

        const bucketArray = [1, 3, 9, 6, 4, 7, 8, 5, 2];
        const arrayBucket = bucketSort(bucketArray.slice(0));
        console.log('bucketSort: ', bucketArray.toString(), ' to ', arrayBucket.toString());

        // const radixArray = [3, 2, 4, 1, 6];
        const radixArray = [1, 3, 9, 6, 4, 7, 8, 5, 2, 11, 15, 41, 23, 33, 17];
        // const radixArray = createNonSortedArray(20);
        const arrayRadix = radixSort(radixArray.slice(0));
        console.log('radixSort: ', radixArray.toString(), ' to ', arrayRadix.toString());

        const shellArray = createNonSortedArray(10);
        const arrayShell = shellSort(shellArray.slice(0));
        console.log('shellSort: ', shellArray.toString(), ' to ', arrayShell.toString());

        const shellArray1 = radixArray;
        const arrayShell1 = shellSort(shellArray1.slice(0));
        console.log('shellSort: ', shellArray1.toString(), ' to ', arrayShell1.toString());

        const shellArray2 = createNonSortedArray(3);
        const arrayShell2 = shellSort(shellArray2.slice(0));
        console.log('shellSort: ', shellArray2.toString(), ' to ', arrayShell2.toString());
    }
}