import { Queue, Deque, PriorityQueue } from "../data_structures/Queue";
const { ccclass, property } = cc._decorator;

@ccclass
export default class QueueTest extends cc.Component {
    start(){
        console.log('queue~~');
        const queue = new Queue();
        console.log(queue.isEmpty());

        queue.enqueue('John');
        queue.enqueue('Jack');
        console.log(queue.toString());

        queue.enqueue('Camila');
        console.log(queue.toString());
        console.log(queue.size());
        console.log(queue.isEmpty());
        queue.dequeue();
        queue.dequeue();
        console.log(queue.toString());

        console.log('deque~~')
        const deque = new Deque();
        console.log(deque.isEmpty());
        deque.addBack('John');
        deque.addBack('Jack');
        console.log(deque.toString());
        deque.addBack('Camila');
        console.log(deque.toString());
        console.log(deque.size());
        console.log(deque.isEmpty());
        deque.removeFront();
        console.log(deque.toString());
        deque.removeBack();
        console.log(deque.toString());
        deque.addFront('John');
        console.log(deque.toString());

        let dd = new Deque();
        dd.addFront('a0');
        dd.addFront('a1');
        dd.addFront('a2');
        console.log(dd.toString());

        const hotPotato = (elementsList: Array<any>, num: number) => {
            const queue = new Queue();
            const elimintatedList = [];
            for (let i = 0; i < elementsList.length; i++)queue.enqueue(elementsList[i]);
            while (queue.size() > 1) {
                for (let i = 0; i < num; i++)queue.enqueue(queue.dequeue());
                elimintatedList.push(queue.dequeue());
            }
            return {
                eliminated: elimintatedList,
                winner: queue.dequeue()
            };
        }

        const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
        const result = hotPotato(names, 7);
        result.eliminated.forEach(name => console.log(`${name} was eliminated `));
        console.log(`Winner is ${result.winner}`);

        const palindromeChecker = (aString: string): boolean => {
            if (aString === undefined || aString === null || (aString !== null && aString.length == 0)) return false;
            const deque = new Deque<string>();
            const lowerString = aString.toLocaleLowerCase().split(' ').join('');
            let isEqual = true;
            let [firstChar, lastChar] = ['', ''];
            for (let i = 0; i < lowerString.length; i++)deque.addBack(lowerString.charAt(i));
            while (deque.size() > 1 && isEqual) {
                firstChar = deque.removeFront();
                lastChar = deque.removeBack();
                if (firstChar !== lastChar) isEqual = false;
            }
            return isEqual;
        }

        console.log('a', palindromeChecker('a'));
        console.log('aa', palindromeChecker('aa'));
        console.log('kayak', palindromeChecker('kayak'));
        console.log('level', palindromeChecker('level'));
        console.log('was it a car or a cat i saw', palindromeChecker('was it a car or a cat i saw'));
        console.log('step on no pets', palindromeChecker('step on no pets'));

        console.log('priorityQueue~~');

        const priorityQueue = new PriorityQueue<number>();
        priorityQueue.enqueue(4);
        priorityQueue.enqueue(5);
        priorityQueue.enqueue(3);
        console.log(priorityQueue.toString());
        priorityQueue.dequeue();
        console.log(priorityQueue.toString());
    }
}