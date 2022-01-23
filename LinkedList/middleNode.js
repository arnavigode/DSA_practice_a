function printMiddle(head) {
    var count = 0;
    var mid = head;

    while (head != null) {

        if ((count % 2) == 1){
            mid = mid.next;
        }
            
        ++count;
        head = head.next;
    }

    if (mid != null){
        return(mid.data )
    }
        
}