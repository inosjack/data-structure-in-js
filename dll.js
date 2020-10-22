class Node {
      constructor(val){
            this.val = val;
            this.next = null;
            this.prev = null;
      }
}

class DoublyLinkedList {
      constructor() {
            this.head = null;
            this.tail = null;
            this.lenght = 0;
      }

      push(val) {
            let newNode = new Node(val);
            if(this.lenght === 0) {
                  this.head = newNode;
                  this.tail = newNode;
            } else {
                  this.tail.next = newNode;
                  newNode.prev = this.tail;
                  this.tail = newNode;
            }
            this.lenght++;
            return this;
      }

      pop() {
            if(this.lenght === 0) return undefined;
            var poppedNode = this.tail;
            if(this.lenght === 1) {
                  this.head = null;
                  this.tail = null;
            } else {
                  this.tail = poppedNode.prev;
                  this.tail.next = null;
                  poppedNode.prev = null;
            }
            this.lenght--;
            return poppedNode;
      }

      shift() {
            if(this.lenght === 0) return undefined;
            var shiftNode = this.head;
            if(this.lenght === 1) {
                  this.head = null;
                  this.tail = null;
            } else {
                  this.head = shiftNode.next;
                  this.head.prev = null;
                  shiftNode.next = null;
            }
            this.lenght--;
            return shiftNode;
      }

      unshift(val) {
            var newNode = new Node(val);
            if(this.lenght === 0) {
                  this.head = newNode;
                  this.tail = newNode;
            } else {
                  this.head.prev = newNode;
                  newNode.next = this.head;
                  this.head = newNode;
            }
            this.lenght++;
            return this;
      }

      get(index) {
            if(index < 0 || index >= this.lenght) return null;
            var count,current;
            if(index <= this.lenght/2) {
                  // start with head
                  count = 0;
                  current = this.head;
                  while(count !== index) {
                        current = current.next;
                        count++;
                  }
            }else {
                  // start with tail
                  count = this.lenght - 1
                  current = this.tail;
                  while(count !== index) {
                        current = current.prev;
                        count--;
                  }
            }
            return current;
      }

      set(index,val) {
            var foundNode = this.get(index);
            if(foundNode !== null) {
                  foundNode.val = val;
                  return true;
            }
            return false;
      }

      insert(index, val){
            // invalid index
            if(index < 0 || index > this.length) return false;
            // insert start of the string
            if(index === 0) return !!this.unshift(val);
            // insert end of the list
            if(index === this.length) return !!this.push(val);
    
            var newNode = new Node(val);
            var beforeNode = this.get(index-1);
            var afterNode = beforeNode.next;
            
            beforeNode.next = newNode, newNode.prev = beforeNode;
            newNode.next = afterNode, afterNode.prev = newNode;
            this.length++;
            return true;
        }

        remove(index) {
              // invalid index
            if(index < 0 || index > this.length) return undefined;
             // insert start of the string
            if(index === 0) return !!this.shift();
             // insert end of the list
            if(index === this.length) return !!this.pop();

            var removeNode = this.get(index);
            removeNode.prev.next = removeNode.next;
            removeNode.next.prev = removeNode.prev;
            removeNode.next = null;
            removeNode.prev = null;
            this.lenght--;
            return removeNode;
        }

        reverse(){
            var node = this.head;
            this.head = this.tail;
            this.tail = node;
            
            for(var i = 0; i < this.lenght; i++){
                 let next = node.next;
                 let prev = node.prev
                 node.next = prev;
                 node.prev = next;
                 node = node.prev;
            }
            return this;
        }

        print(){
            var arr = [];
            var current = this.head
            while(current){
                arr.push(current.val)
                current = current.next
            }
            console.log(arr);
        }
}

var myFriendsList = new DoublyLinkedList()
myFriendsList.push("1")
myFriendsList.push("2")
myFriendsList.push("3")
myFriendsList.push("3")

myFriendsList.push("4")
console.log(myFriendsList.print())
myFriendsList.reverse()
console.log(myFriendsList.print())