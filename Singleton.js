var Singleton = function(name) {
    this.name = name;
}
Singleton.prototype.getName = function() {
    return this.name;
}
/**
 * 惰性单例
 */
Singleton.getInstance = (function() {
    var instance = null;
    return function(name) {
        if(!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})()
