// a binary search tree 

class Node {
      constructor(val) {
            this.val = val;
            this.repeat = 1; 
            // left always less then parent
            this.left = null;
            // right always greater then parent
            this.right = null;
      }
}

class BinarySearchTree {
      constructor() {
            this.root = null;
      }

      insert(val) {
            var newNode = new Node(val);
            if(this.root === null) {
                  this.root = newNode;
            } else {
                  var current = this.root;
                  while(true) {
                        if(val < current.val){
                              if(current.left === null) {
                                    current.left = newNode;
                                    break;
                              } else {
                                    current = current.left;
                              }
                        } else if(val > current.val){
                              if(current.right === null) {
                                    current.right = newNode;
                                    break;
                              } else {
                                    current = current.right;
                              }
                        } else {
                              current.repeat++;
                              break;
                        }
                  }
            }
            return this;
      }

      contain(val) {
            var found = false;
            if(this.root !== null) {
                  var current = this.root;
                  while(current !== null && !found) {
                        if(val < current.val) {
                              current = current.left;
                        } else if(val > current.val) {
                              current = current.right;
                        } else {
                              found = true;
                        }
                  }
            }
            return current ? current : `Value ${val} was not found`;
      }
} 

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(10);

tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(13);
tree.insert(16);
tree.insert(16);
console.log(tree.contain(111));


// console.log(tree)



