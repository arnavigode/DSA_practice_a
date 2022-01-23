function reverse(head) {
    var before = null;
var current = head;
var next = null;
    while (current != null) {
        next = current.next;
        current.next = before;
        before = current;
        current = next;
    }
    head = before;
    return head;
}
