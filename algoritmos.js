let arrayInfraccion = [
  {
    nroActa: 100,
    fecha: "12/03/2024",
    patente: "AA123AA",
    descrip: "Estacionamiento Medido",
    lugar: "Calle Simón Bolívar y Ayacucho",
    juzgado: "J1",
    estado: "Citación",
    importe: 40000,
  },
  {
    nroActa: 111,
    fecha: "12/03/2024",
    patente: "AA123BB",
    descrip: "Estacionar obstruyendo el radio de giro",
    lugar: "Calle San Juan y Av. Uruguay",
    juzgado: "J2",
    estado: "Prescripta",
    importe: 60000,
  },
  {
    nroActa: 200,
    fecha: "12/03/2024",
    patente: "AB123AA",
    descrip: "Estacionar obstruyendo rampa discapacitado",
    lugar: "Av. Santa Catalina 1234",
    juzgado: "J3",
    estado: "Desestimada",
    importe: 70000,
  },
  {
    nroActa: 222,
    fecha: "12/03/2024",
    patente: "AB123BB",
    descrip: "Cemáforo rojo",
    lugar: "Av. López y Planes 2000",
    juzgado: "J1",
    estado: "Pago Registrado",
    importe: 100000,
  },
  {
    nroActa: 300,
    fecha: "12/03/2024",
    patente: "AC123AA",
    descrip: "Estacionamiento Medido",
    lugar: "Av. Blas Pareras 2340",
    juzgado: "J2",
    estado: "Citación",
    importe: 40000,
  },
  {
    nroActa: 333,
    fecha: "12/03/2024",
    patente: "AC123CC",
    descrip: "Estacionar obstruyendo el radio de giro",
    lugar: "Av. Corrientes 9000",
    juzgado: "J3",
    estado: "Prescripta",
    importe: 60000,
  },
  {
    nroActa: 400,
    fecha: "12/03/2024",
    patente: "AC123AA",
    descrip: "Estacionar obstruyendo rampa de discapacitado",
    lugar: "Av. Blas Pareras 2340",
    juzgado: "J2",
    estado: "Desestimada",
    importe: 70000,
  },
  {
    nroActa: 444,
    fecha: "12/03/2024",
    patente: "AC123CC",
    descrip: "Cemáforo rojo",
    lugar: "Av. Corrientes 9000",
    juzgado: "J3",
    estado: "Pago Registrado",
    importe: 100000,
  },
];

let actaInfrac = {
  infractor: arrayInfraccion,
  consultarAinfrac: function (nroActa) {
    let infractorEncontrado = this.infractor.find(
      (infractor) => infractor.nroActa === nroActa
    );
    if (infractorEncontrado !== undefined) {
      return infractorEncontrado;
    } else {
      return "el acta de infracción no existe";
    }
  },
  //filtrar todos las actas de infracción pagas
  filtrarAiPagadas: function () {
    let nroActaPaga = this.infractor.filter(
      (infractor) => infractor.estado === "Pago Registrado"
    );
    return nroActaPaga;
  },
  // Sumar multas pagadas por juzgado
  sumarMultasPagadasPorJuzgado: function () {
    let sumaPorJuzgado = {};
    let infraccionesPagadas = this.filtrarAiPagadas();

    infraccionesPagadas.forEach((infraccion) => {
      let juzgado = infraccion.juzgado;
      let importe = infraccion.importe;

      if (sumaPorJuzgado[juzgado]) {
        sumaPorJuzgado[juzgado] += importe;
      } else {
        sumaPorJuzgado[juzgado] = importe;
      }
    });

    return sumaPorJuzgado;
  },
  // Calcular el total de todas las multas pagadas
  calcularTotalMultasPagadas: function () {
    let totalMultasPagadas = 0;
    let infraccionesPagadas = this.filtrarAiPagadas();

    infraccionesPagadas.forEach((infraccion) => {
      totalMultasPagadas += infraccion.importe;
    });

    return totalMultasPagadas;
  },
};

// Solicitar el número de acta de infracción al usuario
let numeroActa = Number(
  prompt("Ingrese el número de acta de infracción a buscar: ")
);

// Consultar el acta de infracción
let resultadoAi = actaInfrac.consultarAinfrac(numeroActa);
console.log(resultadoAi);

// Consultar si está paga el acta
let resultadoPagado = actaInfrac.filtrarAiPagadas();
console.log(resultadoPagado);

// Sumar las multas pagadas por juzgado
let sumaMultasPorJuzgado = actaInfrac.sumarMultasPagadasPorJuzgado();
console.log(sumaMultasPorJuzgado);

// Calcular el total de todas las multas pagadas
let totalMultasPagadas = actaInfrac.calcularTotalMultasPagadas();
console.log(
  "El total de todas las multas pagadas es de: " + totalMultasPagadas + " pesos"
);
