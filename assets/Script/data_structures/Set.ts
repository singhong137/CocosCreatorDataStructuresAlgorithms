export default class Set<T>{
    private items: any;

    constructor() {
        this.items = {};
    }

    public add(element: T): boolean {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    public delete(element: T): boolean {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    public has(element: T): boolean {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    public size(): number {
        return Object.keys(this.items).length;
    }

    public values(): T[] {
        let values = [];
        for (let key in this.items) if (this.items.hasOwnProperty(key)) values.push(key);
        return values;
    }

    public union(otherSet: Set<T>): Set<T> {
        const unionSet = new Set<T>();

        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));

        return unionSet;
    }

    public intersection(otherSet: Set<T>): Set<T> {
        const intersectionSet = new Set<T>();

        const values = this.values();
        const otherValues = otherSet.values();

        let biggerSet = values;
        let smallerSet = otherValues;

        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }

        smallerSet.forEach(value => {
            if (biggerSet.indexOf(value) != -1) intersectionSet.add(value);
        });

        return intersectionSet;
    }

    public difference(otherSet: Set<T>): Set<T> {
        const differenceSet = new Set<T>();

        this.values().forEach(value => {
            if (!otherSet.has(value)) differenceSet.add(value);
        });

        return differenceSet;
    }

    public isSubsetOf(otherSet: Set<T>): boolean {
        if (this.size() > otherSet.size()) return false;

        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });

        return isSubset;
    }
}