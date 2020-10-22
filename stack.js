class Item{
      constructor(val){
          this.val = val;
          this.next = null;
      }
}

class Stack{
      constructor () {
            this.first = null;
            this.last = null;
            this.size = 0;
      }

      push(val) {
            var item = new Item(val);
            if(!this.first){
                  this.first = item;
                  this.last = item;
            } else {
                  let temp = this.first;
                  this.first = item;
                  this.first.next = temp;
            }
            return ++this.size;
      }

      pop() {
            if(this.size===0) return undefined;
            var firstItem = this.first;
            this.first = firstItem.next;
            this.size--;
            if(this.size===0) {
                  this.last = null;
            }
            return firstItem.val;
      }
}

var stack = new Stack();
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.pop())

console.log(stack.pop())

console.log(stack.pop())
console.log(stack.pop())





