import { ValuePair } from "./data_models/Value-pair";
import { default2String } from "../util";

export default class Dictionary<K, V>{
    private table: { [key: string]: ValuePair<K, V> };

    constructor(private toStrFn: (key: K | string) => string = default2String) {
        this.table = {};
    }

    public set(key: K, value: V): boolean {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    public get(key: K): V|undefined {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    public hasKey(key: K | string): boolean {
        return this.table[this.toStrFn(key)] != null;
    }

    public remove(key: K): boolean {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    public values(): V[] {
        return this.keyValues().map((valuePair: ValuePair<K, V>) => valuePair.value);
    }

    public keys(): K[] {
        return this.keyValues().map((valuePair: ValuePair<K, V>) => valuePair.key);
    }

    public keyValues(): ValuePair<K, V>[] {
        const valuePairs = [];
        for (const k in this.table) if (this.hasKey(k)) valuePairs.push(this.table[k]);
        return valuePairs;
    }

    public forEach(callbackFn: (key: K, value: V) => any) {
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
            if (result === false) break;
        }
    }

    public isEmpty(): boolean {
        return this.size() === 0;
    }

    public size(): number {
        return Object.keys(this.table).length;
    }

    public clear(): void {
        this.table = {};
    }

    public toString(): string {
        if (this.isEmpty()) return '';

        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++)objString = `${objString},${valuePairs[i].toString()}`;
        return objString;
    }
}