var hasCycle = function (head) {
  var setLL = new Set();
  while (head != null) {
    if (setLL.has(head)) {
      return true;
    } else {
      setLL.add(head);
    }

    head = head.next;
  }

  return false;
};
