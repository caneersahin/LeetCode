var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  while(--n && fast) {
      fast = fast.next;
  }
  if(n>0) {
      return null;
  }
  
  let prev = null;
  while(fast&&fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next;
  }
  // remove target
  if(!prev) {
      head = slow.next;
  }else {
      prev.next = slow.next;
  }
  return head;
};
