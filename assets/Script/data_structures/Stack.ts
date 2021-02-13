export class StackArray<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    public push(element: T) {
        this.items.push(element);
    }

    public pop(): T {
        return this.items.pop();
    }

    public peek(): T {
        return this.items[this.items.length - 1];
    }

    public isEmpty(): boolean {
        return this.items.length == 0;
    }

    public clear() {
        this.items = [];
    }

    public size(): number {
        return this.items.length;
    }

    public toArray(): T[] {
        return this.items;
    }

    public toString(): string {
        return this.items.toString();
    }
}

export class Stack<T> {
    private items: T[];
    private count: number;

    constructor() {
        this.count = 0;
        this.items = [];
    }

    public push(element: T) {
        this.items[this.count] = element;
        this.count++;
    }

    public size(): number {
        return this.count;
    }

    public isEmpty(): boolean {
        return this.count === 0;
    }

    public pop(): T|undefined {
        if (this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    public peek(): T|undefined {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    public clear() {
        this.items = [];
        this.count = 0;
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++)objString = `${objString},${this.items[i]}`;
        return objString;
    }
}