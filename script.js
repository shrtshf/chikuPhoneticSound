let gridContainer=document.querySelector("#containerId");
let items=document.querySelectorAll(".item");
let buttons=document.querySelectorAll(".item button");
let result=document.querySelector("#result");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        switch(this.innerHTML){
            case "A": var audio=new Audio("/sounds/a.mp3").play();
                      result.innerHTML=this.innerHTML;
                      break;
            case "B": var audio=new Audio("/sounds/b.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "C": var audio=new Audio("/sounds/c.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "D": var audio=new Audio("/sounds/d.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "E": var audio=new Audio("/sounds/e.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "F": var audio=new Audio("/sounds/f.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "G": var audio=new Audio("/sounds/g.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "H": var audio=new Audio("/sounds/h.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "I": var audio=new Audio("/sounds/i.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "J": var audio=new Audio("/sounds/j.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "K": var audio=new Audio("/sounds/k.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "L": var audio=new Audio("/sounds/l.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "M": var audio=new Audio("/sounds/m.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "N": var audio=new Audio("/sounds/n.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "O": var audio=new Audio("/sounds/o.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "P": var audio=new Audio("/sounds/p.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "Q": var audio=new Audio("/sounds/q.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "R": var audio=new Audio("/sounds/r.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "S": var audio=new Audio("/sounds/s.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "T": var audio=new Audio("/sounds/t.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "U": var audio=new Audio("/sounds/u.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "V": var audio=new Audio("/sounds/v.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "W": var audio=new Audio("/sounds/w.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "X": var audio=new Audio("/sounds/x.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "Y": var audio=new Audio("/sounds/y.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "Z": var audio=new Audio("/sounds/z.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "0": var audio=new Audio("/sounds/0.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "1": var audio=new Audio("/sounds/1.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "2": var audio=new Audio("/sounds/2.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "3": var audio=new Audio("/sounds/3.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "4": var audio=new Audio("/sounds/4.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "5": var audio=new Audio("/sounds/5.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "6": var audio=new Audio("/sounds/6.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "7": var audio=new Audio("/sounds/7.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "8": var audio=new Audio("/sounds/8.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            case "9": var audio=new Audio("/sounds/9.mp3").play();
            result.innerHTML=this.innerHTML;
                      break;
            default: alert("Something went wrong");         
        }
    })
}