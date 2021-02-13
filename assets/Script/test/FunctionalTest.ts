const { ccclass, property } = cc._decorator;

@ccclass
export default class FunctionalTest extends cc.Component {
    start() {
        console.log('Functional Test~~~');

        const printArray = function (array: any[]) {
            for (let i = 0; i < array.length; i++)console.log(array[i]);
        }

        printArray([1, 2, 3, 4, 5]);

        const forEach = function (array: any[], action: Function) {
            for (let i = 0; i < array.length; i++)action(array[i]);
        }

        const logItem = function (item: any) {
            console.log(item);
        }

        forEach([1, 2, 3, 4, 5], logItem);

        var findMinArray = function (array: any[]) {
            let minValue = array[0];
            for (let i = 1; i < array.length; i++)if (minValue > array[i]) minValue = array[i];
            return minValue;
        }

        console.log(findMinArray([8, 6, 4, 5, 9]));

        const min_ = function (array: any[]) {
            return Math.min(...array);
        }

        console.log(min_([8, 6, 4, 5, 9]));

        const daysOfWeek = [{ name: 'Monday', value: 1 }, { name: 'Tuesday', value: 2 }, { name: 'Wednesday', value: 7 }];

        let daysOfWeekValues_ = [];
        for (let i = 0; i < daysOfWeek.length; i++)daysOfWeekValues_.push(daysOfWeek[i].value);
        console.log(daysOfWeekValues_);

        const daysOfWeekValues = daysOfWeek.map(day => day.value);
        console.log(daysOfWeekValues);

        const positiveNumbers_ = function (array: any[]) {
            let positive = [];
            for (let i = 0; i < array.length; i++)if (array[i] >= 0) positive.push(array[i]);
            return positive;
        }
        console.log(positiveNumbers_([-1, 1, 2, -3]));

        const positiveNumbers = (array: any[]) => array.filter(num => (num >= 0));
        console.log(positiveNumbers([-1, 1, 2, -3]));

        const sumValues = function (array: any[]) {
            let total = array[0];
            for (let i = 1; i < array.length; i++)total += array[i];
            return total;
        }
        console.log(sumValues([1, 2, 3, 4, 5]));

        const sum = (arr: any[]) => arr.reduce((a, b) => a + b);
        console.log(sum([1, 2, 3, 4, 5]));

        const mergeArrays_ = function (arrays: number[][]) {
            const count = arrays.length;
            let newArray = [];
            let k = 0;
            for (let i = 0; i < count; i++)for (let j = 0; j < arrays[i].length; j++)newArray[k++] = arrays[i][j];
            return newArray;
        }
        console.log(mergeArrays_([[1, 2, 3], [4, 5], [6]]));

        const mergeArraysConcat = (arrays: number[][]) => {
            return arrays.reduce((p, n) => { return p.concat(n) });
        };
        console.log(mergeArraysConcat([[1, 2, 3], [4, 5], [6]]));
    }
}