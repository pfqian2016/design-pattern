/**
 * 命令模式
 */
window.onload = function() {
    let btn1 = document.createElement('button');
    btn1.innerHTML = 'add';
    let btn2 = document.createElement('button');
    btn2.innerHTML = 'refresh';
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
    let bindCommand = function(btn, command) {
            btn.onclick = function() {
                command.excute();
            }
    }
    let Menu = {
        refresh() {
            console.log('refresh');
        },
        add(item) {
            console.log('add: ' + item);
        },
        remove(item) {
            console.log('remove: ' + item);
        }
    }
    let RefreshCommand = function(receiver) {
        this.receiver = receiver;
    }
    RefreshCommand.prototype.excute = function() {
        this.receiver.refresh();
    }
    let AddCommand = function(receiver) {
        this.receiver = receiver;
    }
    AddCommand.prototype.excute = function() {
        this.receiver.add('item');
    }
    let refreshCommand = new RefreshCommand(Menu);
    let addCommand = new AddCommand(Menu);
    bindCommand(btn1,addCommand);
    bindCommand(btn2,refreshCommand);
}
