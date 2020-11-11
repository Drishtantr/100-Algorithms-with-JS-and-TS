function electionWinnersts(votes: number[], n: number): number {
    let contender = 0;
    const maxVotes: number = Math.max(...votes);
    const sortVotes: number[] = votes.sort((a, b) => b-a);

    if (sortVotes[0] !== sortVotes[1] && n === 0) {
        return 1;
    }

    votes.forEach(voteCount => {
        if(maxVotes - voteCount < n) {
            contender++;
        }        
    });

    return contender;
}


console.log(electionWinnersts([2,3,5,2],3));
