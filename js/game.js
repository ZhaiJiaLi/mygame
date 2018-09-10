class Game {
    constructor() {
        this.screen = "";
        this.letters = [];    //{top:y,left:x,none:node}
        // this.speed=0.1;
        this.fen = 0;
        this.sm = 5;
        this.fenbox = "";
        this.smbox = "";
        this.point=document.querySelector("#point");
        this.alertbox=document.querySelector(".alertbox");
    }

    //创建字母，定义一个方法。先随机产生一个数，把数转换成ascii码中的字母，最后利用这个字母变量选中对应的图片
    createletter() {
        let div = document.createElement("div");
        let asc;
        let letter;
        // let asc=Math.floor(Math.random()*26+65);   //
        // let letter=String.fromCharCode(asc);
        do {
            asc = Math.floor(Math.random() * 26 + 65);   //
            letter = String.fromCharCode(asc);
        } while (letterrepeat(letter, this.letters))
        // div.style.background="red";
        div.style.backgroundImage = `url(img/zm/${letter}.png)`;


        let left;
        // let left=Math.random()*(7.5-0.5*3)+0.5;
        do {
            left = Math.random() * (7.5 - 0.5 * 3) + 0.5;
        } while (leftrepeat(left, this.letters));
        let top = Math.random() * .72 + .76;
        let sudu = Math.random() * 0.05 + 0.05;
        let obj = {};
        obj['top'] = top;
        obj['left'] = left;
        obj['node'] = div;
        obj['name'] = letter;
        obj['sudo'] = sudu;
        this.letters.push(obj);
        div.style.left = left + "rem";
        div.style.top = top + "rem";

        this.screen.appendChild(div);
    }

    //    下落
    run() {
        this.t = setInterval(() => {
            for (let item of this.letters) {
                item['top'] += item['sudo'];

                if (item['top'] >= 7.18) {
                    this.remove(item['name'], 0);
                    continue;
                }
                if(this.sm<=0){
                    this.alertbox.style.display="block";
                    this.pause();
                }
                item['node'].style.top = item['top'] + "rem";
            }
        }, 50)
    }

    //    移除   传入字母（A  D  T）,从screen中移除对应节点，从this.letters中移除对应的数据,type=0－实名制
    remove(letter, type) {
        for (let item of this.letters) {
            if (item["name"] == letter) {
                let index = this.letters.indexOf(item);
                this.screen.removeChild(item['node']);//从screen中移除对应节点
                // this.screen.remove(this.letters[index]['node']);
                this.letters.splice(index, 1);  //从this.letters中移除对应的数据
                this.createletter();
                if (type == 0) {
                    this.sm--;
                } else  {
                    this.fen++;
                }
                this.fenbox.innerText = this.fen;
                this.smbox.innerText = this.sm;
                this.point.innerText=this.fen;
            }

        }

    }

    //  暂停
    pause(){
        clearInterval(this.t);
    }



}

function leftrepeat(left,letters) {
    for(let item of letters){
        if (Math.abs(item["left"]-left)<0.5){
            return true;
        }
    }
    return false;
}
function letterrepeat(letter,letters) {
    for (let item of letters){
        if (item['name']==letter){
            return true;
        }
    }
    return false;
}