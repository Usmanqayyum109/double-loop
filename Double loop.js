function mytable(){
    
    let table=document.getElementById("mynumber").value;
    for (let index = 1; index < 6; index++) {
        document.write(`<h1> The Table Of ${index}</h1>`);
     
      for (let inbox = 1; inbox <11; inbox++) 
         document.write(`<h1> ${index} x ${inbox} =  ${index*inbox}`);
        
    }
    }
