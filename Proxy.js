/**
 * 代理模式预加载图片
 */
let myImage =(function() {
    let img = document.createElement('img');
    document.body.appendChild(img);
    return {
        setSrc: function(src) {
            img.src = src;
        }
    }
})();

let proxyImage =(function() {
    let img = new Image();
    img.onload = function() {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function(src) {
            myImage.setSrc('loading.gif');
            img.src = src;
        }
    }
})();

proxyImage.setSrc('profile.jpg');
