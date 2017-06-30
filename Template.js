/**
 * 模板方法模式
 */
window.onload = function() {
    //Beverage template
    let Beverage = function(){};
    Beverage.prototype.boilWater = function() {
        throw new Error('boilWater must be overrided');
    }
    Beverage.prototype.brew = function() {
        throw new Error('brew must be overrided');
    }
    Beverage.prototype.pour = function() {
        throw new Error('pour must be overrided');
    }
    Beverage.prototype.add = function() {
        throw new Error('add must be overrided');
    }
    //A hook to check whether exec add method
    Beverage.prototype.wantsToAdd = function() {
        return true;
    }
    Beverage.prototype.init = function() {
        this.boilWater();
        this.brew();
        this.pour();
        if(this.wantsToAdd()){
            this.add();
        }
    }
    //coffee
    let Coffee = function(){};
    Coffee.prototype = new Beverage();
    Coffee.prototype.boilWater = function() {
        console.log('boil coffee water');
    }
    Coffee.prototype.brew = function() {
        console.log('brew coffee');
    }
    Coffee.prototype.pour = function() {
        console.log('pour coffee');
    }
    Coffee.prototype.add = function() {
        console.log('add sth to coffee');
    }
    let coffee = new Coffee();
    coffee.init();

    //tea
    let Tea = function(){};
    Tea.prototype = new Beverage();
    Tea.prototype.boilWater = function() {
        console.log('boil tea water');
    }
    Tea.prototype.brew = function() {
        console.log('brew tea');
    }
    Tea.prototype.pour = function() {
        console.log('pour tea');
    }
    Tea.prototype.add = function() {
        console.log('add sth to tea');
    }
    Tea.prototype.wantsToAdd = function() {
        return false;
    }
    let tea = new Tea();
    tea.init();
}
