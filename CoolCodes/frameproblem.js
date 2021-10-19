// Suppose	a	wall	is	1900	mm	long	and	2,400	mm	high.	What	combination	of	villa	
// boards	is	required	(i.e.	2	X	1,800mm	and	1X3,000)	to	completely	cover	the	wall,	as	well	as	
// minimize	the	wastage?	There	will	be	wastage,	because	you	will	have	to	cut	the	villa	board	
// sometimes. Try	and	come	up	with	a	general algorithm,	that	finds	the	minimal	wastage	solution	
// for	any	wall	length,	height	combination.

const perfectMatch = (length, height) => {
    const availableLength = [1800, 2400, 2700, 3000];
    const availableHeight = 1200;
  
    let retLength = length;
    let noLength = 2;
    for (let i = 0; i < availableLength.length; i++) {
      if (retLength <= availableLength[i]) {
        retLength = availableLength[i];
        break;
      }
    }
  
    if (length > Math.max(...availableLength)) {
      retLength = length;
      noLength = 2;
      while (retLength > Math.max(...availableLength)) {
        retLength = retLength / noLength;
        noLength++;
      }
      retLength = Math.max(...availableLength);
    }
  
    let noHeight = 2;
    let retHeight = height;
    while (retHeight > availableHeight) {
      retHeight = retHeight / noHeight;
      noHeight++;
    }
  
    return [noLength - 1, retLength, noHeight - 1, availableHeight];
};
  

console.log(perfectMatch(1900, 2400));
  