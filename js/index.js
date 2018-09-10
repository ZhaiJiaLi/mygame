window.onload=function () {
    let game=new Game();
    game.screen=document.querySelector(".screen");
    game.fenbox=document.querySelector("#fenbox");
    game.smbox=document.querySelector("#smbox");
    game.point=document.querySelector("#point");
    game.musicD=document.querySelector(".musicD");
    game.con=document.querySelector(".con");
    console.log(game.musicD);
    // game.createletter();
    // game.createletter();
    // game.createletter();

    let num=5;
    for (let i=1;i<=num;i++){
        game.createletter();

    }
    // console.log(game.letters);
    game.pause();
    let con=document.querySelector(".con");
    let state1=false;
    con.onclick=function (event) {
        if (state1){
            return;
        }
        if (event.target.className!="con") {
            let text=event.target.innerText;
            game.musicD.play();
            game.remove(text);
        }
    }

    let flag=document.querySelector("#flag");
    console.log(flag);
    let alertbox=document.querySelector(".alertbox");
    let btn=document.querySelector(".alertbox .btn");

    let state=true;
    flag.onclick=function () {
        if (state){
            this.className="pause1"
            state=false;
            state1=false;
            game.run();
        } else{
            this.className="play1"
            state=true;
            state1=true;
            game.pause();
        }
    }
    // btn.onclick=function () {
    //     game.run();
    //     state=false;
    //     flag.className="play1"
    // }
    let sm=smbox.innerText;
    console.log(sm);
    if(this.sm<=0){
        alertbox.style.display="block";
        this.pause();
    }
    btn.onclick=function () {
        alertbox.style.display="none";
        location.reload();
    }

    let musicBtn=document.querySelector("#bgMusic");
    let musicBg=document.querySelector("#bgMusic audio");
    musicBg.play();
    musicBtn.onclick=function () {
        if (state){
            this.className="play"
            state=false;
            state1=false;
            musicBg.pause();
        } else{
            this.className="pause"
            state=true;
            state1=true;
            musicBg.play()
        }
    }
}