let dollor=document.getElementById("dollor");
let pound=document.getElementById("pound");



dollor.onkeyup=function coin() {
    pound.value = (dollor.value*18.87) 
    
}
pound.onkeyup=function coin() {
   dollor.value=(pound.value /18.87)

    
}


