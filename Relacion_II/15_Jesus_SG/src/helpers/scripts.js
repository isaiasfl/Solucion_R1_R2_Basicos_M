const nombresEstudiantesConAltaCalificacion = estudiantes
  .filter(estudiante => estudiante.calificacion >= 85)
  .map(estudiante => estudiante.nombre);

module.export = nombresEstudiantesConAltaCalificacion;