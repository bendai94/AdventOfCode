const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename): string[] {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

let list = syncReadFile('./day1.txt');

let One = 0;
let Two = 0;
let Thr = 0;

let currentcount = 0;

list.forEach(element => {
    if (!element)
    {
        checkCount(currentcount);
        currentcount = 0;
    }
    else
    {
        currentcount += +element;
    }
})

function checkCount(count) {
    if (currentcount > Thr)
    {
        Thr = currentcount;   
    }
    if (currentcount > Two)
    {
        Thr = Two;
        Two = currentcount;
    }
    if (currentcount > One)
    {
        Thr = Two;
        Two = One;
        One = currentcount;
    }
}

console.log(One + Two + Thr);

let message: string = "End Of Line";
console.log(message);