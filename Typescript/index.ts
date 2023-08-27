import * as _ from 'lodash';
//console.log('hello world');
async function hello(){
return 'world';
}
//const url : new URL(); 
let lucky = 10;
//lucky = "1"; because it assignd to number not string

interface Person {
    first: string;
    last: string;
}

const person: Person={
    first:'Duaa',
    last: 'Zyd'
}
const person2: Person={
    first:  'Ismail',
    last: 'Amr',
}
function pow(x: number, y: number): string{
    return Math.pow(x,y),toString();
}
pow(5,5);
