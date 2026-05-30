let square=document.getElementsByClassName("square")


let boardArray=[
   "0", "1","2","3","4","5","6","7","8"
]
let gameisfinshed=false

let currentTurn="x"

for (const item of square) {


    item.addEventListener("click",()=>{
    if (gameisfinshed) {
        return
    }
    let value=   item.getAttribute("value")
    let index = value - 1
  if (boardArray[index]=="x" ||boardArray[index]=="o"  ) {
    return
  }
boardArray[index]=currentTurn



    let squarecontent=document.querySelector(`.square[value="${value}"]`)
    squarecontent.innerHTML=currentTurn
      evaluationboard()
    if (currentTurn =="x") {
        currentTurn="o"
    }else{
        currentTurn="x"
    }
    document.getElementById("instruction").innerHTML=`${currentTurn} turn`
    })


function evaluationboard() {
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6,],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    for (const win of wins) {
        let [a,b,c]=win
    
    if (
    boardArray[a] ==boardArray[b]&&boardArray[b]==boardArray[c]
   
    ) 
    {
        var winner=currentTurn
        gameisfinshed=true
        
        alertify.alert(`${winner} is won!`)
    }}
 let isdraw=true
 for (const square of boardArray) {
    if (square !="x" && square !="o") {
    isdraw=false
}}
if(isdraw){
    gameisfinshed=true
    alert(" is draw")
}
 



}

}


document.getElementById("footer-btn").addEventListener("click",()=>{
    rest()
})


function rest() {
    for (const item of square) {
         let value=   item.getAttribute("value")
           let squarecontent=document.querySelector(`.square[value="${value}"]`)
             squarecontent.innerHTML=""
             boardArray=[
   "0", "1","2","3","4","5","6","7","8"
]
    }
    gameisfinshed=false
}