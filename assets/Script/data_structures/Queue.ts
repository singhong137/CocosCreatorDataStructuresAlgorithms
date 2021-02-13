import { ICompareFunction, defaultCompare, Compare } from "../util";

export class Queue<T> {
    protected count: number;
    protected lowestCount: number;
    protected items: T[];

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = [];
    }

    public enqueue(element: T) {
        this.items[this.count] = element;
        this.count++;
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    public peek(): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public size(): number {
        return this.count - this.lowestCount;
    }

    public clear() {
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++)objString = `${objString},${this.items[i]}`;
        return objString;
    }
}

export class Deque<T> extends Queue<T> {

    constructor() {
        super();
    }

    public addFront(element: T) {
        if (super.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) this.items[i] = this.items[i - 1];//items[i] is doesn't exist before this step, in this step, items[i] is last one.
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    public addBack(element: T) {
        super.enqueue(element);
    }

    public removeFront(): T | undefined {
        return super.dequeue();
    }

    public removeBack(): T | undefined {
        if (super.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    public peekFront(): T | undefined {
        return super.peek();
    }

    public peekBack(): T | undefined {
        if (super.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

}

export class PriorityQueue<T>{
    private items: T[];

    constructor(private compareFn: ICompareFunction<T> = defaultCompare, private compare: Compare = Compare.LESS_THAN) {
        this.items = [];
    }

    public enqueue(element: T) {
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.compareFn(element, this.items[i]) === this.compare) {
                this.items.splice(i, 0, element);
                added = true;
                break;
            }
        }
        if (!added) this.items.push(element);
    }

    public dequeue(): T {
        return this.items.shift();
    }

    public peek(): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.items[0];
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }

    public clear() {
        this.items = [];
    }

    public size(): number {
        return this.items.length;
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        return this.items.toString();
    }
}