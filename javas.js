const bigcup = document.getElementById("cup")
const liters = document.getElementById("liter")
const smallcups = document.querySelectorAll(".cup-small")
const percentage = document.getElementById("percentage")
const remain = document.getElementById("remained")
//const small = document.getElementById("small")

//let noofclass = smallcups.length
// smallcups.addEventListener("click", ()=>{
// //     smallcups[0].innerHTML = pugah;
//     console.log("pugazh")
//     console.log(noofclass)
//  })
//bigcup.addEventListener('click', a);


// function a(){
//     bigcup.style.backgroundColor = "#6ab3f8";
// }

// smallcups.forEach((item, index)=>{
//     //smallcups.length =8
//     console.log(smallcups.length)
//     console.log(item.addEventListener('click', a(index)));
// }) 

// // let cupcount = 0;
// function a(index){
//     //bigcup.style.backgroundColor = "#6ab3f8";
//     let cupcount = 0;

//     for(let i=0; i<index;i++){
//     smallcups.style.backgroundColor = "#6ab3f8";
//     }
    
    
// }

// function reset(index) {
// 	 console.log("pugazh")
// 	for(var i = 0; i <index; i++){
// 		smallcups[i].style.backgroundColor = "red";
// 	}
// }
// smallcups.forEach((item,index) =>{
//     console.log(item+'-'+index)
//     item.addEventListener('click',reset(index))
// })



// smallcups.forEach((item)=>{
//     item.addEventListener("click",(e)=>{
//     console.log(e.target)
//     transitionfunc(e.target)
// })
// })

function smallcupbgcolor(index){
   	for(var i = 0; i <index+1; i++){
        smallcups[i].style.backgroundColor = "rgb(106, 179, 248)";
       // smallcups[i].style.backgroundColor = "lightblue";
	}
    //console.log(index)
 //removeifbgpresent(index)
 //bigcupcalculation(index)
   smallcups[index].addEventListener('click', ()=>{
     //console.log(index)
     //console.log(smallcups[index].style.backgroundColor)
     
        if(smallcups[index].style.backgroundColor === 'rgb(106, 179, 248)'){
            console.log("pugazh")
           // index--;
              smallcups[index].style.backgroundColor='#fff';
                //removebg(index)
                bigcupcalculation(index-1)
        }else{
            smallcups[index].style.backgroundColor = "rgb(106, 179, 248)";
           // removebg(index)
          // smallcupbgcolor(index)
            bigcupcalculation(index)
        }
     })
    //bigcupcalculation(index)
}

function removebg(index){
    for(let i = index+1;i<smallcups.length;i++){
        smallcups[i].style.backgroundColor = "#fff";
       }
        //bigcupcalculation(index)
}
// function removeifbgpresent(index){
   
// }
  
function bigcupcalculation(index){
    const filledsmallcups = index+1;
    const totalcups = smallcups.length;
    if(bigcup === 0 ) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${filledsmallcups / totalcups * 350}px`;
    percentage.innerText = `${filledsmallcups / totalcups * 100}%`;
  }
  if(filledsmallcups === totalcups){
      remain.style.visibility = "hidden";
      remain.style.height = 0;
  }
  else{
    remain.style.visibility = "visible";
    //remain.style.height = `${250*filledsmallcups/2000}`;
    remain.innerText = `${2-(250*filledsmallcups/1000)}L`;
  }


}
  

for(i=0; i < smallcups.length; i++) {
    //console.log(smallcups[i])

  smallcups[i].index = i;

  smallcups[i].addEventListener('click', function(e) {
    
    //e.target.innerHTML = e.target.index;
    // console.log(e.target.index)
    
    smallcupbgcolor(e.target.index)
    removebg(e.target.index)
    //  smallcups[e.target.index].addEventListener('click', ()=>{
    //     if(smallcups[e.target.index].style.backgroundColor === "#6ab3f8"){
    //         smallcups[e.target.index].style.backgroundColor="#fff";
    //     }else{
    //         smallcups[e.target.index].style.backgroundColor = "#6ab3f8";
    //     }
    //  })
   // removeifbgpresent(e.target.index)
  }, false);
}


