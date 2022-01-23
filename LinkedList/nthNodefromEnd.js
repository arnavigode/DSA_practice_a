function nth_node(head,n){
    var k = 0;
        var current = head;
         while (current != null)
        {
            current = current.next;
            k++;
        }
 
        if (k >= n)
        {
            current = head;
            for (var i = 0; i < k - n; i++) {
                current = current.next;
            }
        }
 
        return current.data;
}
        