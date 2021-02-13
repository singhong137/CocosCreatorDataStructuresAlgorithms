import { biggerEquals, Compare, defaultCompare, defaultDiff, defaultEquals, DOES_NOT_EXIST, lesserEquals } from "../../util";

export function interpolationSearch<T>(array: T[], value: T, compareFn = defaultCompare, equalsFn = defaultEquals, diffFn = defaultDiff): number {
    const length = array.length;
    let [low, high, position, delta] = [0, length - 1, -1, -1];

    while (low <= high && biggerEquals(value, array[low], compareFn) && lesserEquals(value, array[high], compareFn)) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
        position = low + (high - low) * delta | 0;
        if (equalsFn(array[position], value)) return position;
        compareFn(array[position], value) === Compare.LESS_THAN ? low = position + 1 : high = position - 1;
    }

    return DOES_NOT_EXIST;
}