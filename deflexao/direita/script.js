function converterSexagesimal(valor) {
    let graus = Math.floor(valor);
    let minutos = Math.floor((valor - graus) * 60);
    let segundos = Math.floor((((valor - graus) * 60) - minutos) * 60);
    return `${graus}° ${minutos}' ${segundos}"`;
}

function calcular() {
    let azimuteGraus = parseFloat(document.getElementById("azimute-graus").value);
    let azimuteMinutos = parseFloat(document.getElementById("azimute-minutos").value);
    let azimuteSegundos = parseFloat(document.getElementById("azimute-segundos").value);
    let anguloGraus = parseFloat(document.getElementById("angulo-graus").value);
    let anguloMinutos = parseFloat(document.getElementById("angulo-minutos").value);
    let anguloSegundos = parseFloat(document.getElementById("angulo-segundos").value);

    let azimute = azimuteGraus + azimuteMinutos/60 + azimuteSegundos/3600;
    let angulo = anguloGraus + anguloMinutos/60 + anguloSegundos/3600;
    let resultado = azimute + angulo;

    if (resultado > 360) {
        resultado -= 360;
    } else if (resultado < 0) {
        resultado += 360;
    }

    let resultadoSexagesimal = converterSexagesimal(resultado);
    document.getElementById("resultado").innerHTML = `Resultado: ${resultadoSexagesimal}`;
}
