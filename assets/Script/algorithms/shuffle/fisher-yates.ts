import { swap } from "../../util";

export function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.random() * (i + 1) | 0;
        swap(array, i, randomIndex);
    }
    return array;
}