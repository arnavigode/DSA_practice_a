function findDay(day, n) {
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var check;
    for (var i = 0; i < days.length; i++)
        if (days[i] == day) {
            check = i;
            break;
        }
    var ans = (check + n) % 7;
    return days[ans];
}