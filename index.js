import {CustomDiv, gamem} from "./modules/js/HexDiv";
import './modules/css/style.css';
let size = 4;
document.body.onload = function defs() {
    let x = 1;
    document.getElementById('mapa').innerHTML = "";
    let left = 50;
    size = document.getElementById('size').value
    gamem.size = size;
    for(let i = 0; i < size; i++)
    {
        let top = 50;
        for(let j = 0; j < size; j++)
        {
            if(i%2 != 0 && j==0)
            {
                top += 50;
            }
            let newdiv = new CustomDiv(100, x, i, j)
            newdiv.setXY(left, top);
            document.getElementById('mapa').append(newdiv.getRoot())
            top += 100;
            x++;
        }
        left += 100;
    }
}

document.getElementById('size').onchange = function changesize() {
    document.getElementById('mapa').innerHTML = "";
    let left = 50;
    let x = 1;
    size = document.getElementById('size').value
    gamem.size = size;
    for(let i = 0; i < size; i++)
    {
        let top = 50;
        for(let j = 0; j < size; j++)
        {
            if(i%2 != 0 && j==0)
            {
                top += 50;
            }
            let newdiv = new CustomDiv(100, x, i, j)
            newdiv.setXY(left, top);
            document.getElementById('mapa').append(newdiv.getRoot())
            top += 100;
            x++;
        }
        left += 100;
    }
 }