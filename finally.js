Promise.prototype.myFinal = function (fn) {
    return this.then((res)=>{
        fn&&fn(res)
    },(err)=>{
        fn&&fn(err)
    })
}