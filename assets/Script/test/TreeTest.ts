import { BinarySearchTree, AVLTree, RedBlackTree } from "../data_structures/Tree";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TreeTest extends cc.Component {
    start(){
        console.log('TreeTest---');

        // const tree = new BinarySearchTree();
        // const tree = new AVLTree();
        const tree = new RedBlackTree();

        tree.insert(11);

        tree.insert(7);
        tree.insert(15);
        tree.insert(5);
        tree.insert(3);
        tree.insert(9);
        tree.insert(8);
        tree.insert(10);
        tree.insert(13);
        tree.insert(12);
        tree.insert(14);
        tree.insert(20);
        tree.insert(18);
        tree.insert(25);

        tree.insert(6);

        const printNode = (value: number) => console.log(value);

        console.log('inOrderTraverse...');
        tree.inOrderTraverse(printNode);

        console.log('preOrderTraverse...');
        tree.preOrderTraverse(printNode);

        console.log('postOrderTraverse...');
        tree.postOrderTraverse(printNode);

        console.log('search min max...', tree.min(), tree.max());

        console.log(tree.search(1) ? 'key 1 found.' : 'key 1 not found.');
        console.log(tree.search(8) ? 'key 8 found.' : 'key 8 not found.');

        console.log('remove 6...');
        tree.remove(6);
        tree.inOrderTraverse(printNode);
        console.log('remove 5...');
        tree.remove(5);
        tree.inOrderTraverse(printNode);
        console.log('remove 15...');
        tree.remove(15);
        tree.inOrderTraverse(printNode);
    }
}