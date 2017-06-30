window.onload = function() {
    let pay500 = function(type, paid) {
        if(type === 1 && paid === true) {
            console.log('paid 500');
        } else {
            return 'nextSuccessor';
        }
    }
    let pay200 = function(type, paid) {
        if(type === 2 && paid === true) {
            console.log('paid 200');
        } else {
            return 'nextSuccessor'
        }
    }
    let pay100 = function(type, paid) {
        if(type === 3 && paid === true) {
            console.log('paid 100');
        } else {
            console.log('insufficient stock');
        }
    }
    let Chain = function(fn) {
        this.fn = fn;
        this.successor = null;
    }
    Chain.prototype.setSuccessor  = function(successor) {
        this.successor = successor
    }
    Chain.prototype.passRequest = function() {
        let ret = this.fn.apply(this, arguments);
        if(ret === 'nextSuccessor') {
            return this.successor && this.successor.passRequest.apply(this.successor, arguments);
        }
        return ret;
    }
    let payChain500 = new Chain(pay500);
    let payChain200 = new Chain(pay200);
    let payChain100 = new Chain(pay100);

    payChain500.setSuccessor(payChain200);
    payChain200.setSuccessor(payChain100);

    payChain500.passRequest(1,true);
    payChain500.passRequest(2,true);
    payChain500.passRequest(1,false);
}
