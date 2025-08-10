let boxes = document.querySelectorAll(".box");
let rst = document.querySelector(".rst");
let msg = document.querySelector("#msg");
let asd = document.querySelector(".asd");
let ng = document.querySelector("#ng");
let turn =1;
const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

boxes.forEach( (box)=>{
    box.addEventListener("click",()=>{
        if(turn == 1){
            box.innerText = "X";
            turn =2;
            box.disabled = true;
            checkwinner();
            
        }else{
            box.innerText ="O";
            turn =1;
            box.disabled = true;
            checkwinner();
        }
    })
}
)


rst.addEventListener("click",()=>{
    boxes.forEach( (box1)=>{
        box1.innerText ="";
        box1.disabled =false;
        asd.classList.add("hide");
    
        turn =1;
    })
})
ng.addEventListener("click",()=>{
    boxes.forEach( (box1)=>{
        box1.innerText ="";
        box1.disabled =false;
        turn =1;
        asd.classList.add("hide");
    
    })
})

const showWinner = (w) =>{
    msg.innerText = `winner is player ${w}`;
    asd.classList.remove("hide");
    

}

const disb =() =>{
    for(let m of boxes){
        m.disabled = true;
    }
}

const checkwinner = () =>{
    for( let a of winPattern){
        if(boxes[a[0]].innerText !="" && boxes[a[1]].innerText !="" && boxes[a[2]].innerText !=""){
            if(boxes[a[0]].innerText=== boxes[a[1]].innerText &&  boxes[a[1]].innerText ===boxes[a[2]].innerText){
                let w = turn==1?2:1;
                showWinner(w);
                disb();
                console.log(`winner is player ${w}`);
                
            }
        }
    }
    
}