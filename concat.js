Buffer.myConcat = function (bufArr) {
    let length = 0;
    bufArr.forEach(r=>length+=r.length);
    let buffer = Buffer.alloc(length);
    let index = 0;
    bufArr.forEach(r=>{
        ////buffer 是拷贝到的buffer目标对象  index是拷贝目标对象的位置开始    0代表拷贝源对象的起点  r.length源对象是终点  r是拷贝源的对象
        r.copy(buffer,index,0,r.length,r);
        index+=r.length
    })
    return buffer;
}

let buf1 = Buffer.from('你好');
let buf2 = Buffer.from('我好');
let buf3 = Buffer.from('大家好');
let bufCon1 = Buffer.myConcat([buf1,buf2,buf3]).toString()
let bufCon2 = Buffer.concat([buf1,buf2,buf3]).toString()
console.log(bufCon1,bufCon2)