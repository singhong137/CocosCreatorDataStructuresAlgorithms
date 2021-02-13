
import { LinkedList, DoublyLinkedList, SortedLinkedList } from "../data_structures/LinkedList";
const { ccclass, property } = cc._decorator;

@ccclass
export default class LinkedListTest extends cc.Component {
    start(){
        console.log('LinkedListTest~~');

         // const list = new LinkedList();
         const list = new DoublyLinkedList();

         list.push(15);
         list.push(10);
         list.push(8);
         console.log(list.toString());
         list.insert(9, 2)
         console.log(list.toString());
         console.log(list.getElementAt(3));
         console.log(list.toString());
         console.log(list.remove(15));
         console.log(list.toString());
 
         console.log(list.indexOf(9));
         console.log(list.removeAt(2));
         console.log(list.toString());
         console.log(list.size());
         console.log(list.isEmpty());
         console.log(list.getHead());
 
         console.log(list.getTail());
         console.log(list.inverseToString());
 
         console.log('==========');
         const sortedLinkedList = new SortedLinkedList();
         sortedLinkedList.push(1);
         sortedLinkedList.insert(4, 1);
         console.log(sortedLinkedList.toString());
         sortedLinkedList.push(2);
         sortedLinkedList.insert(3, 0);
         console.log(sortedLinkedList.toString());
    }
}