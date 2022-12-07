

function biggerAndGreener(){
    
    var divs = document.getElementsByTagName('div');

    for (x=0; x < divs.length; x++){
        console.log(divs[x]);
        divs[x].style.height="100px";
        divs[x].style.width="100px";
        divs[x].style.backgroundColor="chartreuse";
        divs[x].style.border="solid 2px red";
        
      

    }
}
