function  ActualizarHora () {
       var fecha = new Date(),
           horas = fecha.getHours(),
           ampm=ampm,
           diadelmes=fecha.getDate();
           min=fecha.getMinutes(),
           seg=fecha.getSeconds(),
           anio=fecha.getFullYear(),
           dia=fecha.getDay(),
           mes=fecha.getMonth(); 
           

           var semana_a =  ['Domingo',"Lunes" ,"Martes" ,"Miercoles","Jueves" ,"Sabado"];
           var meses_a =  ["Enero","Febrero" ,"Marzo" ,"Abril" ,"Mayo" ,"Junio" ,"Julio" ,"Agosto" ,"Septiembre" ,"Octubre" ,"Noviembre" ,"Diciembre"]; 
           
          /*  let diasemana=document.getElementById("diaSemana"); */
        
            

 

              var diaDeSemana = semana_a[dia];
              console.log("DIA DE SEMANA ES :"+diaDeSemana);      
              var parrafo =document.getElementById("3"); 
              parrafo.textContent=diaDeSemana+" "+diadelmes+" de "+ meses_a[mes]+" del "+  anio;
    

      
   }   

   ActualizarHora();
   
   var seteo = setInterval (ActualizarHora,1000);

   
   
   

  


