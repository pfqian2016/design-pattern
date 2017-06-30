/**
 * 状态模式
 */
window.onload = function() {
    let OffLightState = function(light) {
        this.light = light;
    }
    OffLightState.prototype.wasClicked = function() {
        console.log('Weak light');
        this.light.setState(this.light.weakLightState);
    }
    let WeakLightState = function(light) {
        this.light = light;
    }
    WeakLightState.prototype.wasClicked = function() {
        console.log('Strong light');
        this.light.setState(this.light.strongLightState);
    }
    let StrongLightState = function(light) {
        this.light = light;
    }
    StrongLightState.prototype.wasClicked = function() {
        console.log('light off');
        this.light.setState(this.light.offLightState);
    }
    let Light = function() {
        this.offLightState = new OffLightState(this);
        this.weakLightState = new WeakLightState(this);
        this.strongLightState = new StrongLightState(this);
    }
    Light.prototype.setState = function(state) {
        this.currentState = state;
    }
    Light.prototype.init = function() {
        let btn = document.createElement('button')
        btn.innerHTML = 'Click';
        document.body.appendChild(btn);
        let light = new Light();
        this.currentState = this.offLightState;
        let _self = this;
        btn.onclick = function() {
            _self.currentState.wasClicked();
        }
    }
    let light = new Light();
    light.init();
}
