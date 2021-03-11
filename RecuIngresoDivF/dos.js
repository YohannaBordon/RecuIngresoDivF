function mostrar()
{
  
    let nombre;
    let carrera;
    let sexo;
    let cantidadMaterias;
    let notaPromedio;
    let edad;
  
    let mejorNotaFisica;
    let nombreMejorNotaFisica;
    let flagMejorPromFisica = 1;
  
    let flagAlumnaJoven = 1;
    let nombreAlumJoven;
    let edadAlumJoven;
  
    
    let contFisica = 0;
    let contQuimica = 0;
    let contSistema = 0;
    let porcjeFisica;
    let porcjeSistemas;
    let porcjeQuimica;
    let porcjeFisica; 
    let flagMaterias = 1;
     let masMaterias;
     

     let edadMasMaterias
     let nombreMasMaterias; 
     let contTotalAlumnos = 0;



      for ( let i = 0; i < 500 ; i++ ){
  
          nombre = prompt('ingrese un nombre');


          cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias: "));
          while ( cantidadMaterias <= 1  && cantidadMaterias >= 5){				
              cantidadMaterias = prompt("Error. Ingrese cantidad de materias entre 1 y 5: ");
          }


          carrera = prompt("Ingrese carrera: quimica, fisica y sistemas:  ");
      while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
          carrera = prompt("Error. Ingrese carrera: ");
      }
      notaPromedio = parseInt(prompt("Ingrese nota promedio entre 0 y 10: "));
      while (isNaN(notaPromedio) ||notaPromedio < 0  && notaPromedio >= 10){				
          notaPromedio = prompt("Error. Ingrese nota promedio entre 0 y 10.");
      }
      edad = parseInt( prompt("ingrese su edad: "));
      while (isNaN(edad) && edad <= 0)  {
      edad = parseInt (prompt('edad invalido, ingrese nuevamente su edad'));
      }


      sexo = prompt("Ingrese el sexo f, m o no binario: ");
          while(sexo != "m" && sexo != "f" && sexo != "no binario"){
          sexo = prompt("Error. Ingrese el sexo: ");
         }
      
  // a) 

  if(carrera == "fisica" && (flagMejorPromFisica || notaPromedio > mejorNotaFisica)){
    mejorNotaFisica = notaPromedio;
    nombreMejorNotaFisica = nombre;

    flagMejorPromFisica = 0;
}


    //b)  nombre Alumna mas joven: 
    if(sexo == "f"){
        if(flagAlumnaJoven || edad < edadAlumJoven){
            edadAlumJoven = edad;
            nombreAlumJoven = nombre;
            
            flagAlumnaJoven = 0;
        }
    


    //c) 
    switch(carrera){
        case "fisica":
        contFisica++
        break;
        case "quimica":
        contQuimica++
        break;
        case "sistemas":
        contSistema++
        break;

    }



    contTotalAlumnos++;
      
}
    // d)
    if(carrera != "quimica" && (flagMaterias|| masMaterias > cantidadMaterias) ){
        nombreMasMaterias = nombre;
        masMaterias = cantidadMaterias;
        edadMasMaterias = edad;
        flagMaterias = 0;

    }



   



    // 
    if(flagMejorPromFisica == 0){
        console.log("El nombre de la mejor nota de los alumnos de fisica es " + nombreMejorNotaFisica + " con una nota de " + mejorNotaFisica)
    }else{
        console.log("No se registraron alumnos de fisica");
    }

    //b)

    if(flagAlumnaJoven == 0){
        console.log("El nombre de la mujer mas joven es " + nombreAlumJoven + " con una edad de " + edadAlumJoven + " años")
    }else{

        console.log("No se registraron mujeres")
    }

    // c)


    porcjeFisica = (contFisica * 100) / contTotalAlumnos;


    porcQuimica= (contQuimica * 100) / contTotalAlumnos;
    porcjeSistemas = (contSistema * 100) / contTotalAlumnos;


    if(carrera == "fisica"){
    console.log("El porcentaje de los que estudian fisica es " + porcjeFisica);
    }else{
        console.log("No hay estudiantes de fisica.");
    }
    if(carrera == "quimica"){
    console.log("El porcentaje de los que quimica es " + porcjeQuimica);

    }else{
        console.log("No hay estudiantes de quimica.");
    }   

    if(carrera == "sistemas"){
    console.log("El porcentaje de los que estudian sistemas es " + porcjeSistemas);
    }
    else{
        console.log("No hay estudiantes de sistemas.");
    }


    // RESPUESTAS D
    if(flagMaterias = 0){
        console.log("el estudiante que cursa mas materias  tiene " + edadMasMaterias +" años" +  " y se llama " +nombreMasMaterias);
    }


  





  
  
  
  
  
  
  
  
  
    












  
  






        
 