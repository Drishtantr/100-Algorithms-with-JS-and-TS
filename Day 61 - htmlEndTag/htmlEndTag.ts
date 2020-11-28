function htmlEndTagts(tag: string): string {
    var sp: string[] = tag.split('');
    const end: string[] = ['<', '/'];
    for (let i=1; i<tag.length; i++) {
        if (sp[i] !== ' ') {
            end.push(sp[i]);
        } else {
            end.push('>');
            break;
        }
    }
    return end.join(''); 

};

console.log(htmlEndTagts('<i>'));
console.log(htmlEndTagts('<button class="link" disabled>'));