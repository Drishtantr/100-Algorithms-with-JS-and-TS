function htmlEndTag(tag) {
    var sp = tag.split('');
    const end = ['<', '/'] 
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

console.log(htmlEndTag('<i>'));
console.log(htmlEndTag('<button class="apple">'));