import { ValuePair, ValuePairLazy } from "./data_models/Value-pair";
import { default2String } from "../util";
import { LinkedList } from "./LinkedList";

export class HashTable<K, V>{
    protected table: { [key: string]: ValuePair<K, V> };

    constructor(protected toStrFn: (key: K) => string = default2String) {
        this.table = {};
    }

    private loseloseHashCode(key: K): number {
        if (typeof key === 'number') return key;
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i: number = 0; i < tableKey.length; i++)hash += tableKey.charCodeAt(i);
        return hash % 37;
    }

    private djb2HashCode(key: K): number {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++)hash = (hash * 33) + tableKey.charCodeAt(i);
        return hash % 1013;
    }

    public hashCode(key: K): number {
        return this.loseloseHashCode(key);
    }

    public put(key: K, value: V): boolean {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    public get(key: K): V | undefined {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    public remove(key: K): boolean {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }

    public getTable(): object {
        return this.table;
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public size(): number {
        return Object.keys(this.table).length;
    }

    public clear() {
        this.table = {};
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]}=>${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++)objString = `${objString},{${keys[i]}=>${this.table[keys[i]].toString()}}`;
        return objString;
    }
}

export class HashTableSeparateChaining<K, V> {
    protected table: { [key: string]: LinkedList<ValuePair<K, V>> };

    constructor(protected toStrFn: (key: K) => string = default2String) {
        this.table = {};
    }

    private loseloseHashCode(key: K): number {
        if (typeof key === 'number') return key;
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i: number = 0; i < tableKey.length; i++)hash += tableKey.charCodeAt(i);
        return hash % 37;
    }

    private djb2HashCode(key: K): number {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++)hash = (hash * 33) + tableKey.charCodeAt(i);
        return hash % 1013;
    }

    public hashCode(key: K): number {
        return this.loseloseHashCode(key);
    }

    public put(key: K, value: V): boolean {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) this.table[position] = new LinkedList<ValuePair<K, V>>();
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }

    public get(key: K): V | undefined {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) return current.element.value;
                current = current.next;
            }
        }
        return undefined;
    }

    public remove(key: K): boolean {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) delete this.table[position];
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }

    public getTable(): object {
        return this.table;
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public size(): number {
        return Object.keys(this.table).length;
    }

    public clear() {
        this.table = {};
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]}=>${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++)objString = `${objString},{${keys[i]}=>${this.table[keys[i]].toString()}}`;
        return objString;
    }
}

export class HashTableLinearProbing<K, V>{
    protected table: { [key: string]: ValuePair<K, V> };

    constructor(protected toStrFn: (key: K) => string = default2String) {
        this.table = {};
    }

    private loseloseHashCode(key: K): number {
        if (typeof key === 'number') return key;
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i: number = 0; i < tableKey.length; i++)hash += tableKey.charCodeAt(i);
        return hash % 37;
    }

    private djb2HashCode(key: K): number {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++)hash = (hash * 33) + tableKey.charCodeAt(i);
        return hash % 1013;
    }

    public hashCode(key: K): number {
        return this.loseloseHashCode(key);
    }

    public put(key: K, value: V): boolean {
        if (key != null && value != null) {
            const position = this.hashCode(key);

            if (this.table[position] == null) {
                this.table[position] = new ValuePair(key, value);
            } else {
                let index = position + 1;
                while (this.table[index] != null) index++;
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }

    public get(key: K): V | undefined {
        const position = this.hashCode(key);

        if (this.table[position] != null) {
            if (this.table[position].key === key) return this.table[position].value;
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) index++;
            if (this.table[index] != null && this.table[index].key === key) return this.table[position].value;
        }
        return undefined;
    }

    public remove(key: K): boolean {
        const position = this.hashCode(key);

        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) index++;
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }

    private verifyRemoveSideEffect(key: K, removedPosition: number) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while (this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }

    public getTable(): object {
        return this.table;
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public size(): number {
        return Object.keys(this.table).length;
    }

    public clear() {
        this.table = {};
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]}=>${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++)objString = `${objString},{${keys[i]}=>${this.table[keys[i]].toString()}}`;
        return objString;
    }
}

export class HashTableLinearProbingLazy<K, V>{
    protected table: { [key: string]: ValuePairLazy<K, V> };

    constructor(protected toStrFn: (key: K) => string = default2String) {
        this.table = {};
    }

    private loseloseHashCode(key: K): number {
        if (typeof key === 'number') return key;
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i: number = 0; i < tableKey.length; i++)hash += tableKey.charCodeAt(i);
        return hash % 37;
    }

    private djb2HashCode(key: K): number {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++)hash = (hash * 33) + tableKey.charCodeAt(i);
        return hash % 1013;
    }

    public hashCode(key: K): number {
        return this.loseloseHashCode(key);
    }

    public put(key: K, value: V): boolean {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null || (this.table[position] != null && this.table[position].isDeleted)) {
                this.table[position] = new ValuePairLazy(key, value);
            } else {
                let index = position + 1;
                while (this.table[index] != null && !this.table[position].isDeleted) index++;
                this.table[index] = new ValuePairLazy(key, value);
            }
            return true;
        }
        return false;
    }

    public get(key: K): V | undefined {
        const position = this.hashCode(key);

        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDeleted) return this.table[position].value;
            let index = position + 1;
            while (this.table[index] != null && (this.table[index].key !== key || this.table[index].isDeleted)) {
                if (this.table[index].key === key && this.table[index].isDeleted) return undefined;
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key && !this.table[index].isDeleted) return this.table[position].value;
        }
        return undefined;
    }

    public remove(key: K): boolean {
        const position = this.hashCode(key);

        if (this.table[position] != null) {
            if (this.table[position].key === key && !this.table[position].isDeleted) {
                this.table[position].isDeleted = true;
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && (this.table[index].key !== key || this.table[index].isDeleted)) index++;
            if (this.table[index] != null && this.table[index].key === key && !this.table[index].isDeleted) {
                this.table[index].isDeleted = true;
                return true;
            }
        }
        return false;
    }

    public getTable(): object {
        return this.table;
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public size(): number {
        return Object.keys(this.table).length;
    }

    public clear() {
        this.table = {};
    }

    public toString(): string {
        if (this.isEmpty()) return '';
        const keys = Object.keys(this.table);
        let objString = `{${keys[0]}=>${this.table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++)objString = `${objString},{${keys[i]}=>${this.table[keys[i]].toString()}}`;
        return objString;
    }
}
