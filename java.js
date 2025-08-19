let no = document.getElementById('no');

index = 0;
function raj(){
    no.style.marginLeft=`${202*index}px`;
    no.style.scale="2"
}

let doo = document.getElementById('do');
let img = document.getElementById('rmg');

no.addEventListener("mouseover", ()=>{
    if(no.className=no){
        index++
       raj();
       no.innerText="please don't tuche me"
       doo.innerHTML="please maan <br> jao na madam ji"
       img.src="teddy.gif"
    }else{
         img.src="tkthao219-bubududu.gif"
    }
});

let td = src="file/796fdda81b2e0eb8bf8028b8893f6e3c.gif"
src="file/ted-love.gif"
src="file/tkthao219-bubududu.gif"



let yes = document.getElementById('yes');

yes.addEventListener("click", ()=>{
   if(yes.className=yes){
     img.src="tenor.gif"
    doo.innerHTML="mujhe pata tha <br> guddu tum maan jaogi"
    doo.style.marginLeft="45px"
    yes.style.padding="5px  20px 5px 20px"
     
   }
});