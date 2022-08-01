class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const is_palindromic_linked_list = function(head) {
  let p = head;
  let ans = true;

  const isPalindrom = (node) => {
    if (node.next) {
      isPalindrom(node.next);
    }

    let pValue = p.value;
    p = p.next;
    if (node.value !== pValue) {
      ans = false;
    }
  };


  isPalindrom(head);  

  return ans;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(`Is palindrome: ${is_palindromic_linked_list(head, head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head, head)}`)
