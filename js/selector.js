function showDiv(select){
   if (select.value == "FIP"){
    document.getElementById('fip').style.display = "block";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPIPS"){
    document.getElementById('fpips').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPBS"){
    document.getElementById('fpbs').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPMIPA"){
    document.getElementById('fpmipa').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPTK"){
    document.getElementById('fptk').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPOK"){
    document.getElementById('fpok').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPEB"){
    document.getElementById('fpeb').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   } else if(select.value == "FPSD"){
    document.getElementById('fpsd').style.display = "block";
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
   } else {
    document.getElementById('fip').style.display = "none";
    document.getElementById('fpips').style.display = "none";
    document.getElementById('fpbs').style.display = "none";
    document.getElementById('fpmipa').style.display = "none";
    document.getElementById('fptk').style.display = "none";
    document.getElementById('fpok').style.display = "none";
    document.getElementById('fpeb').style.display = "none";
    document.getElementById('fpsd').style.display = "none";
   }
} 