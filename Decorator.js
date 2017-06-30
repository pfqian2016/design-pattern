/**
 * 装饰者模式
 */
window.onload = function() {
    let Coffee = function() {}
    Coffee.prototype.order = function() {
        console.log('small size');
    }
    let MiddleDecorator = function(coffee) {
        this.coffee = coffee;
    }
    MiddleDecorator.prototype.order = function() {
        this.coffee.order();
        console.log('upgrade to middle size');
    }
    let LargeDecorator = function(coffee) {
        this.coffee = coffee;
    }
    LargeDecorator.prototype.order = function() {
        this.coffee.order();
        console.log('upgrade to large size');
    }
    let coffee = new Coffee();
    coffee = new MiddleDecorator(coffee)
    coffee = new LargeDecorator(coffee);
    coffee.order();
}
