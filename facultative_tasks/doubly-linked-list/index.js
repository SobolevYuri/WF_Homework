class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this._head=null;
        this._tail=null;
        this.length=0;
    }

    append(data) {
        let x = new Node(data);
        if (this.length) {
            x.prev = this._tail;
            this._tail.next = x;
            this._tail = x;
        } else {
            this._head = x;
            this._tail = x;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let i,
            x=this._head;
        while (index>0){
            x=x.next;
            index--;
        }
        return x.data;
    }

    insertAt(index, data) {

        if (!this.length){
            this.append(data);
            return this;
        }

        let i, x=this._head,y=new Node();
        while (index>0){
            x=x.next;
            index--;
        }
        y.data=data;
        y.next=x;
        y.prev=x.prev;
        x.prev=y;
        y.prev.next=y;
        this.length++;
    }

    isEmpty() {
        return (!this.length);
    }

    clear() {
        this._head.data=null;
        this._head.next=null;
        this._head.prev=null;
        this._tail.data=null;
        this._tail.next=null;
        this._tail.prev=null;
        this.length=0;
        return this;
    }

    deleteAt(index) {
        let i,x=this._head;
        if (index===1 && this.length<=1){
            this._head.next=null;
            this._tail=this._head;
            this.length--;
            return this;
        }
        if (index===0 && this.length<=1){
            this._tail.prev=null;
            this._head=this._tail;
            this.length--;
            return this;
        }
        while (index>0){
            x=x.next;
            index--;
        }
        x.next.prev=x.prev;
        x.prev.next=x.next;
        x=null;
        this.length--;
    }

    reverse() {
        if (this._tail===this._head) return this;
        var x=this._tail,i,buf;
        this._head=x;
        for(i=0;i<this.length;i++){
            buf=x.prev;
            x.prev=x.next;
            x.next=buf;
            if(x.next){
                x=x.next;
            }
            else break;
        }
        this._tail=x;
    }

    indexOf(data) {
        let i=0,
            x=this._head;
        while (i<this.length){
            if (x.data===data) break;
            x=x.next;
            i++;
        }
        if (i===this.length) return -1;
        return i;
    }
}
