export class Node<T>{
    constructor(public element: T, public next?: Node<T>) { }
}

export class DoublyNode<T> extends Node<T> {
    constructor(public element: T, public next?: DoublyNode<T>, public prev?: DoublyNode<T>) {
        super(element, next);
    }
}

export class TreeNode<K>{
    public left: TreeNode<K>;
    public right: TreeNode<K>;
    constructor(public key: K) { }

    public toString(): string {
        return `${this.key}`;
    }
}

export enum Colors {
    RED = 0,
    BLACK = 1
}
export class RedBlackNode<K> extends TreeNode<K>{
    public left: RedBlackNode<K>;
    public right: RedBlackNode<K>;
    public parent: RedBlackNode<K>;
    public color: Colors;

    constructor(public key: K) {
        super(key);
        this.color = Colors.RED;
    }

    public isRed(): boolean {
        return this.color === Colors.RED;
    }

    public flipColor() {
        this.color === Colors.RED ? this.color = Colors.BLACK : this.color = Colors.RED;
    }
}