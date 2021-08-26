function  ActualizarHora () {
       var fecha = new Date(),
           horas = fecha.getHours(),
           ampm=ampm,
           min=fecha.getMinutes(),
           seg=fecha.getSeconds(),
           dia=fecha.getDay(),
           mes=fecha.getMonth(); 
          // year=fecha.getfullYear();

           var semana = ['Domingo',"Lunes" ,"Martes" ,"Miercoles","Jueves" ,"Sabado"];
           var meses_a = ["Enero","Febrero" ,"Marzo" ,"Abril" ,"Mayo" ,"Junio" ,"Julio" ,"Agosto" ,"Septiembre" ,"Octubre" ,"Noviembre" ,"Diciembre"]; 
           
          /*  let diasemana=document.getElementById("diaSemana"); */


              
    
   }   

   ActualizarHora();
   
   var seteo = setInterval (ActualizarHora,1000);

   var x = "x";
   parrafo =document.getElementById("3");
   parrafo.innerHTML="hh";


