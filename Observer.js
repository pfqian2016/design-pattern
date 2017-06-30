/**
 * 发布-订阅模式
 */
window.onload = function() {
    let Observer = {
        list:[],//缓存订阅者的数组
        listen(key, fn) {//订阅者fn订阅了key事件
            if(!this.list[key]) {
                this.list[key] =[];
            }
            this.list[key].push(fn);
        },
        trigger(...args) {//发布者发布key事件
            let key = args.shift();
            let fns = this.list[key];
            if(!fns || fns.length ===0) {
                return false
            }
            for(let i = 0, fn; fn = fns[i++]; ) {
                fn.apply(this, args);
            }
        },
        remove(key, fn) {//取消订阅某个事件
            let fns = this.list[key];
            if(!fns) {
                return false;
            }
            if(!fn) {
                fns && (fns.length = 0)
            }else {
                for(let i = 0;i < fns.length; i++) {
                    if(fns[i] === fn) {
                        fns.splice(i, 1);
                    }
                }
            }
        }
    };
}
/************************************************************/
//An instance
/************************************************************/
let Navbar = (function() {
    return {
        update(name) {
            console.log('In Navbar Module');
            console.log('name: ' + name);
        }
    }
})();
let Profile = (function() {
    return {
        setImg(imgURL) {
            console.log('In Profile Module');
            console.log('imgURL: ' + imgURL);
        }
    }
})()
Observer.listen('login', function({name,imgURL}) {
    Navbar.update(name);
    Profile.setImg(imgURL);
});
Observer.trigger('login',{
    name:'irish',
    imgURL: 'http://www.qianpengfei.com/asset/profile.jpg',
    age:18,
    gender:'male'
});
