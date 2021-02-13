import { binarySearch } from "../algorithms/search/binary-search";
import { binarySearchIteration } from "../algorithms/search/binary-search-iteration";
import { interpolationSearch } from "../algorithms/search/interpolation-search";
import { sequentialSearch } from "../algorithms/search/sequential-search";
import { quickSort } from "../algorithms/sorting/quick-sort";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SearchTest extends cc.Component {
    start(){
        console.log('SearchTest~~~');

        let arr = [5, 4, 3, 2, 1];
        console.log('SequentialSearch: ', sequentialSearch(arr.slice(0), 3));

        console.log('BinarySearch: ', binarySearch(arr.slice(0), 4));

        console.log('InterpolationSearch: ', interpolationSearch(quickSort(arr.slice(0)), 2));

        console.log('BinarySearchIteration: ', binarySearchIteration(arr.slice(0), 5));
    }
}