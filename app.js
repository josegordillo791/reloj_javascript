function  ActualizarHora () {
       var fecha = new Date(),
           horas = fecha.getHours(),
           ampm=ampm,
           diadelmes=fecha.getDate();
           hora=fecha.getHours();
           min=fecha.getMinutes(),
           seg=fecha.getSeconds(),
           anio=fecha.getFullYear(),
           dia=fecha.getDay(),
           mes=fecha.getMonth(); 
           

            var semana_a =  ["Lunes" ,"Martes" ,"Miercoles","Jueves" ,"Viernes","Sabado","Domingo"];
            var meses_a =  ["Enero","Febrero" ,"Marzo" ,"Abril" ,"Mayo" ,"Junio" ,"Julio" ,"Agosto" ,"Septiembre" ,"Octubre" ,"Noviembre" ,"Diciembre"]; 
           
            var diaDeSemana = semana_a[dia-1];
                console.log((dia-1)+"dia");
                console.log("DIA DE SEMANA ES :"+diaDeSemana);      
            var parrafoSemana=document.getElementById("dia"); 
                parrafoSemana.textContent=diaDeSemana+" "+diadelmes+" de "+ meses_a[mes]+" del "+  anio;
            var parrafoHora=document.getElementById("horas");
                if (seg<10){
                    seg="0"+seg;
                } 
                if (min<10){
                    min="0"+min;
                }
            var ampm =document.getElementById("ampm");
                if (horas<10){
                    horas="0"+horas;
                    ampm.textContent="AM";
                } else {
                    ampm.textContent="PM";
                }
                
                parrafoHora.textContent=horas+" : "+min+" : "+seg; 
           
              


   }   

   ActualizarHora();
   
   var seteo = setInterval (ActualizarHora,1000);

   
   
   

  


