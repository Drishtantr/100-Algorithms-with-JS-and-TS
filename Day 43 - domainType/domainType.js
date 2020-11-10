function domainType(a) {
    const dom = {
        'org': 'organization',
        'com': 'commercial',
        'net': 'network',
        'info': 'information',
    }
    const names = [];
    
    for (let i=0; i<a.length; i++) {
        if (a[i].includes('org')) {
            names.push(dom.org);
        } else if (a[i].includes('com')) {
            names.push(dom.com);
        } else if (a[i].includes('net')) {
            names.push(dom.net);
        } else if (a[i].includes('info')) {
            names.push(dom.info);
        } else {
            names.push('Not Found');
        }
    }
    return names;
};

console.log(domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info']));