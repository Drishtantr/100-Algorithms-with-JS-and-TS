function tasksTypes(tasks, days) {
    let old = 0;
    let upcoming = 0;
    let later = 0;
    for (let i=0; i<tasks.length; i++) {
        if(tasks[i] <= days) {
            old+=1;
        } else if (tasks[i] > days + 7) {
            later += 1;
        } else {
            upcoming +=1;
        }
    }

    return [old, upcoming, later];

}

console.log(tasksTypes([1,2,3,4,5], 2));
console.log(tasksTypes([1,2,4,2,10,3,1,4,5,4,9,8], 1));