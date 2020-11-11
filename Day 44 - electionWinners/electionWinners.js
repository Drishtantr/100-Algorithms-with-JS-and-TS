function electionWinners(votes, n) {
    let contender = 0;
    const maxVotes = Math.max(...votes);
    const sortVotes = votes.sort((a, b) => b-a);

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


console.log(electionWinners([2,3,5,2],3));
