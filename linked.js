// const { node } = require("webpack");

class linkedList {
    constructor(head = null) {
        this.head = head;
    };

append(value) {
    if (!this.head) {
        this.head = new node(value);
        return this;
    }
    let tail = this.getTail();
    tail.next = new node(value);
    return tail;
};

prepend(value) {
    if (!this.head) {
        this.head = new node(value);
        return this;
    }
    const prevHead = this.head;
    this.head = new node(value, prevHead);
};

};


class node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

