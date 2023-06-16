const alumno ={
    nombre: 'Pedro Vergara ',
    cursos :{
        ingles: 6,
        programacion: 5,
        html: 7
    }
}

let media = (alumno.cursos.ingles + alumno.cursos.programacion+alumno.cursos.html)/3;

console.log("Sacará nota media de: " + alumno.nombre + media);