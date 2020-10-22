class Item{
      constructor(val){
          this.val = val;
          this.next = null;
      }
}

class Queue{
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
                  this.last.next = item;
                  this.last = item;
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

var quq = new Queue();
console.log(quq.push(1))
console.log(quq.push(2))
console.log(quq.push(3))
console.log(quq)
console.log(quq.pop())

console.log(quq.pop())

console.log(quq.pop())
console.log(quq.pop())





