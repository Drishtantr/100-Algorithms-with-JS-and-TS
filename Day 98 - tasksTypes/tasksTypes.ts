function tasksTypests(tasks: number[], days: number): number[] {
    let old: number = 0;
    let upcoming: number = 0;
    let later: number = 0;
    for (let i: number=0; i<tasks.length; i++) {
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

console.log(tasksTypests([1,2,3,4,5], 2));
console.log(tasksTypests([1,2,4,2,10,3,1,4,5,4,9,8], 1));