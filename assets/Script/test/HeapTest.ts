
import { MinHeap, MaxHeap } from "../data_structures/Heap";
import heapSort from "../algorithms/sorting/heap-sort";
const { ccclass, property } = cc._decorator;

@ccclass
export default class HeapTest extends cc.Component {
    start(){
        console.log('HeapTest~~');

        const heap = new MinHeap();
        // const heap = new MaxHeap();

        heap.insert(2);
        heap.insert(3);
        heap.insert(4);
        heap.insert(5);

        heap.insert(1);

        heap.insert(6);
        heap.insert(9);
        heap.insert(8);
        heap.insert(7);

        console.log(heap.size());
        console.log(heap.isEmpty());
        console.log(heap.findMinimum());

        console.log(heap.getAsArray().toString());

        console.log('heap sort--');
        console.log(heap.extract()); //console.log(heap.getAsArray().toString());
        console.log(heap.extract()); //console.log(heap.getAsArray().toString());
        console.log(heap.extract()); //console.log(heap.getAsArray().toString());
        console.log(heap.extract()); //console.log(heap.getAsArray().toString());

        // console.log(heap.heapSort(heap.getAsArray()).toString());

        // console.log(heap.heapify([8, 7, 10, 6, 9]).toString());
        // console.log(heap.heapify([2, 3, 4, 5, 1]).toString());
        // console.log(heap.heapify(heap.heapify([2, 3, 4, 5, 1])).toString());
        // console.log(heap.heapify(heap.getAsArray()).toString());

        console.log('array [2, 3, 4, 5, 1]');
        console.log('heapify-');
        heap.heapify([2, 3, 4, 5, 1]);
        console.log(heap.getAsArray().toString());

        console.log('array [2, 1, 4, 5, 3]');
        console.log('heapify-');
        heap.heapify([2, 1, 4, 5, 3]);
        console.log(heap.getAsArray().toString());

        console.log('array [2, 1, 4, 5, 3, 7, 8, 6, 10, 19, 9]');
        console.log('heapify-');
        heap.heapify([2, 1, 4, 5, 3, 7, 8, 6, 10, 19, 9]);
        console.log(heap.getAsArray().toString());

        console.log('array [8, 7, 10, 6, 9, 1, 3, 5]');
        console.log('heapify-');
        heap.heapify([8, 7, 10, 6, 9, 1, 3, 5]);
        console.log(heap.getAsArray().toString());

        console.log('array [7, 6, 3, 5, 4, 1, 2]');
        console.log('heapify-');
        heap.heapify([7, 6, 3, 5, 4, 1, 2]);
        console.log(heap.getAsArray().toString());

        // heap.heapify([2, 1, 4, 5, 3])
        console.log(heap.getAsArray().toString());
        console.log(heapSort([8, 7, 10, 6, 9]).toString());

        console.log(heapSort([7, 1, 4, 5, 3, 2, 8, 6, 10, 19, 9]).toString());
        console.log(heapSort([17, 11, 14, 15, 13, 12, 18, 16, 20, 29, 19]).toString());

        console.log(heapSort([7, 6, 3, 5, 4, 1, 2]).toString());
        // heapSort

        // console.log(heap.heapSort(heap.getAsArray()).toString());
    }
}