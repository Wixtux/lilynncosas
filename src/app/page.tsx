
function createStudent(nombre: string, calificaciones: number[]) {
  return {
    nombre: nombre,
    calificaciones: calificaciones,
    calcularPromedio: function () {
      if (this.calificaciones.length === 0) {
        return 0;
      }
      const sum = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      return sum / this.calificaciones.length;
    }
  };
}

const student1 = createStudent("Ganlo", [90, 85, 95, 92, 88]);
const student1Promedio = student1.calcularPromedio();

const student2 = createStudent("Lilynn", [80, 75, 85, 90, 92]);
const student2Promedio = student2.calcularPromedio();

console.log(`${student1.nombre}: ${student1Promedio}`);
console.log(`${student2.nombre}: ${student2Promedio}`);

export default function Home() {
  return (
    <div className="">
      <p>{student1.nombre}: {student1Promedio}</p>
      <p>{student2.nombre}: {student2Promedio}</p>
    </div>
  );
}
