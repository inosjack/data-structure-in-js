//  piece of data - val
// referense to next node - next
class Node {
      constructor(val) {
            this.val = val;
            this.next = null;
      }
}

// bad way to create list
// var first = new Node("hi");
// first.next = new Node("are");
// first.next.next = new Node("you");




class SinglyLinkedList{
      constructor() {
            this.head = null;
            this.tail = null;
            this.lenght = 0;
      }

      push(val) {
            let newNode = new Node(val);
            if(!this.head) {
                  this.head = newNode;
            } else {
                  this.tail.next= newNode;
            }

            this.tail = newNode;
            this.lenght++;
            return this;
      }

      pop() {
            if(!this.head) return undefined
            let current = this.head;
            let newTail = current
            while (current.next) {
                  newTail = current
                  current = current.next
                  
            }
            this.tail = newTail
            this.tail.next = null
            this.lenght--
            // if zero item in list 
            if(this.lenght === 0) {
                  this.head = null
                  this.tail = null
            }
            console.log(this)
            return current
      }

      shift() {
            if(!this.head) return undefined
            let current = this.head;
            this.head = current.next;
            this.lenght--
            // if zero item in list 
            if(this.lenght === 0) {
                  this.tail = null
            }
            return current;
      }
      unshift(val) {
            let newNode = new Node(val);
            let currentHead = this.head;

            if(!currentHead){
                  this.tail = newNode
            }
            this.head = newNode
            this.head.next = currentHead
            this.lenght++
            return this;
      }

      get(index) {
            if(index < 0 || index >= this.lenght) return null;
            let count = 0;
            let current = this.head
            while(count !== index) {
                  current = current.next
                  count++
            }
            return current
      }

      set(index,val) {
            var foundNode = get(index)
            if(foundNode) {
                  foundNode.val = val
                  return true
            }
            return false
      }

      insert(index,val) {
            if(index < 0 || index > this.lenght) return false
            if(index === this.lenght) return this.push(val);
            if(index === 0) return this.unshift(val)
            var newNode = new Node(val);
            var prev = this.get(index-1);
            var temp = prev.next;
            prev.next = newNode
            newNode.next = temp
            this.lenght++
            return true
      }
}

let list = new SinglyLinkedList();

// list.push("2");


// list.pop()

console.log(list)
list.unshift(1)
list.unshift(2)
console.log(list)