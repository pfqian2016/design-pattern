window.onload = function() {
    let MacroCommand = function() {
        return {
            commandList:[],
            add(cmd) {
                this.commandList.push(cmd);
            },
            execute() {
                for(let i = 0; i < this.commandList.length; i++) {
                    this.commandList[i].execute();
                }
            }
        }
    }
    let OpenEyesCommand = {
        execute() {
            console.log('open eyes');
        }
    }
    let WearClothesCommand = {
        execute() {
            console.log('wear clothes');
        }
    }
    let LeaveCommand = {
        execute() {
            console.log('leave dorm');
        }
    }
    let macroCommand = new MacroCommand();
    macroCommand.add(OpenEyesCommand)
    macroCommand.add(WearClothesCommand)
    macroCommand.add(LeaveCommand)
    let btn = document.createElement('button')
    btn.innerHTML = 'Execute';
    document.body.appendChild(btn);
    btn.onclick = function() {
        macroCommand.execute();
    }
}
