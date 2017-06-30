/**
 * 享元模式
 */
window.onload = function() {
    let Model = function(sex) {
        this.sex = sex;
    }
    Model.prototype.check = function() {
        console.log('sex: ' + this.sex + ' id: ' + this.id + ' is checked');
    }
    let maleModel = new Model('male');
    let femaleModel = new Model('femele');
    for(let i = 1; i < 51; i++) {
        maleModel.id = i;
        maleModel.check();
    }
    for(let j = 1; j < 51; j++) {
        femaleModel.id = j;
        femaleModel.check();
    }

    /**
    * 对象池
    */
    let divPool = (function() {
        divList = [];
        return {
            create() {
                if(divList.length === 0) {
                    let div = document.createElement('div');
                    document.body.appendChild(div);
                    return div;
                }else {
                    return divList.shift();
                }
            },
            recover(div) {
                return divList.push(div);
            }
        }
    })();
    let arr = [];
    for(let i = 0, str;str = ['A','B'][i++];){
        let div = divPool.create();
        arr.push(div);
        div.innerHTML = str;
    }
    console.log('Create done');
    setTimeout(function() {
        console.log('Begin recover');
        for(let j = 0, div;div = arr[j++];){
            divPool.recover(div);
        }
        console.log('create another four divs');
        for(let k = 0, str; str = ['a','b','c','d'][k++];) {
            let div = divPool.create();
            div.innerHTML = str;
            arr.push(div);
        }
    }, 3000);
}
