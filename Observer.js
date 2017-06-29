/**
 * 发布-订阅模式
 */
window.onload = function() {
    let observer = {
        list:[],
        listen(key, fn) {
            if(!this.list[key]) {
                this.list[key] =[];
            }
            this.list[key].push(fn);
        },
        trigger(...args) {
            let key = args.shift();
            let fns = this.list[key];
            if(!fns || fns.length ===0) {
                return false
            }
            for(let i = 0, fn; fn = fns[i++]; ) {
                fn.apply(this, args);
            }
        }
    };
    
    observer.listen('irish',function(age) {
        console.log('irish:age= ' + age);
    });
    observer.listen('puppey',function(age) {
        console.log('puppey:age= ' + age);
    });
    observer.trigger('irish', 18);
    observer.trigger('puppey',20);
}
