export class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

export  class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }

        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;

    }
    shift() {
        if(!this.head){
            return undefined
        }

        let oldHead = this.head
        this.head = oldHead.next
        this.length--

        return oldHead
    }
    unshift(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length ++
        return this
    }
}

export class DoublyLinkedList {

}

export class BinaryTree {
    
}