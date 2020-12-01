function incrementalBackups(lastBackup, changes) {
    const fieldIds = [];
    for(let change of changes) {
        const fileBackup = change[0];
        const fieldId = change[1];

        if(fileBackup > lastBackup) {
            if(!fieldIds.includes(fieldId)) {
                fieldIds.push(fieldId);
            }
        }
    }

    return fieldIds.sort((fileId1, fileId2) => fileId1 - fileId2);
};

console.log(incrementalBackups(461620205, [[461620203,1], 
    [461620204,2],
    [461620205,6],
[461620206, 5],
[461620207,3],
[461620207,5],
[461620208,1]]));