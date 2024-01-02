import hex from '../gfx/hex.png';
import hex0 from '../gfx/hex0.png';
import hex1 from '../gfx/hex1.png';
import hex2 from '../gfx/hex2.png';
import hex3 from '../gfx/hex3.png';
import hex4 from '../gfx/hex4.png';
import hex5 from '../gfx/hex5.png';

let images = [hex0, hex1, hex2, hex3, hex4, hex5];
let level = [];
let gamem = {
    level: level,
};
let selHex = [];

class CustomDiv {

    constructor(w, id, x, z) {

        this.w = w;
        this.id = id;
        this.x = x;
        this.z = z;
        this.createDiv()

    }

    createDiv() {
        this.div = document.createElement('div');
        this.img = document.createElement('img');
        this.div.style.width = `${this.w}px`;
        this.div.style.position = 'absolute';
        this.div.id = `${this.id}`;
        this.img.src = hex
        this.img.width = 100;
        this.div.append(this.img)
        this.div.xPosition = this.x
        this.div.zPosition = this.z
        this.div.dirI = 0
        this.div.dirO = 0
        
        
        this.div.onclick = function () {
            let hexa = this
            let hexid = this.id
            if(selHex.includes(this.id)) {
                gamem.level.find(function(element, index) {
                    if(element.id == hexid) {
                        gamem.level[index].dirO++;
                        gamem.level[index].dirO = gamem.level[index].dirO % 6;
                        hexa.children[0].src = images[gamem.level[index].dirO]
                    }
                })
            }
            else {
                let clickedHexa = {}
                selHex.push(this.id)
                if(selHex[0] == this.id)
                {
                    clickedHexa = {
                        id: this.id,
                        x: this.xPosition,
                        z: this.zPosition,
                        dirO: this.dirO,
                        dirI: "startu"
                    }
                } 
                else {
                    let dirNS = 0;
                    selHex.find(function (element, index) {
                        if(element ==  hexid) {
                            dirNS = (gamem.level[index - 1].dirO + 3) % 6;
                        }
                    })
                    clickedHexa = {
                        id: this.id,
                        x: this.xPosition,
                        z: this.zPosition,
                        dirO: this.dirO,
                        dirI: selHex[0] != this.id ? dirNS : 'startu'
                    }
                    

                }
                hexa.children[0].src = images[0]
                gamem.level.push(clickedHexa)
            }
            document.getElementById('jsonD').innerText = JSON.stringify(gamem, null, 2);
        }

    }

    getRoot() {
        return this.div
    }
    setXY(x,y) {
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
    }

}
export { CustomDiv, gamem}