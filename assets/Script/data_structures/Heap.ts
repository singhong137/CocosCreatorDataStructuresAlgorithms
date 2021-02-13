import { ICompareFunction, defaultCompare, Compare, swap, reverseCompare } from "../util";

export class MinHeap<T>{
    protected heap: T[] = [];

    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) { }

    private getLeftIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightIndex(index: number): number {
        return 2 * index + 2;
    }

    private getParentIndex(index: number): number {
        if (index === 0) return undefined;
        return Math.floor((index - 1) / 2);
    }

    public size(): number {
        return this.heap.length;
    }

    public isEmpty(): boolean {
        return this.size() <= 0;
    }

    public clear() {
        this.heap = [];
    }

    public findMinimum(): T {
        return this.isEmpty() ? undefined : this.heap[0];
    }

    public insert(value: T): boolean {
        if (value != null) {
            const index = this.heap.length;
            this.heap.push(value);
            this.siftUp(index);
            return true;
        }
        return false;
    }

    private siftDown(index: number) {
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();

        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) element = left;
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) element = right;

        if (index !== element) {
            swap(this.heap, index, element);
            this.siftDown(element);
        }
    }

    private siftUp(index: number) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    public extract(): T {
        if (this.isEmpty()) return undefined;
        if (this.size() === 1) return this.heap.shift();

        const removedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return removedValue;
    }

    public heapify(array: T[]): T[] {
        if (array) this.heap = array;
        for (let i = Math.floor(this.size() / 2); i >= 0; --i)this.siftDown(i);
        return this.heap;
    }

    public heapSort1(array: T[], compareFn: ICompareFunction<T> = defaultCompare): T[] {
        this.heapify(array);
        let sortedArray: T[] = [];
        let l = this.size();
        for (let i = 0; i < l; i++)sortedArray.push(this.extract());
        return this.heap = sortedArray;
    }

    public getAsArray(): T[] {
        return this.heap;
    }
}

export class MaxHeap<T> extends MinHeap<T>{
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}