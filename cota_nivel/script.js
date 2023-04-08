function criarTabela() {
    var qtdPontos = parseInt(prompt("Quantos pontos terá a tabela?"));
    var visadasMudanca = prompt("Quais pontos são visadas de mudança? (separar por vírgula)");
  
    var pontosMudanca = [];
    if (visadasMudanca) {
      pontosMudanca = visadasMudanca.split(",");
    }
  
    var tabela = document.createElement("table");
    tabela.id = "tabela-pontos";
  
    var cabecalho = tabela.createTHead();
    var linhaCabecalho = cabecalho.insertRow();
    var estacasCabecalho = linhaCabecalho.insertCell();
    estacasCabecalho.appendChild(document.createTextNode("Estacas"));
    var visadaReCabecalho = linhaCabecalho.insertCell();
    visadaReCabecalho.appendChild(document.createTextNode("Visada Ré"));
    var alturaInstrumentoCabecalho = linhaCabecalho.insertCell();
    alturaInstrumentoCabecalho.appendChild(document.createTextNode("Altura do Instrumento"));
    var visadaVanteCabecalho = linhaCabecalho.insertCell();
    visadaVanteCabecalho.colSpan = "2";
    visadaVanteCabecalho.appendChild(document.createTextNode("Visada Vante"));
    var cotaTerrenoCabecalho = linhaCabecalho.insertCell();
    cotaTerrenoCabecalho.appendChild(document.createTextNode("Cota do Terreno"));
  
    var corpo = tabela.createTBody();
  
    var alturaInstrumento = 0;
    var cotaTerreno = parseFloat(prompt("Qual a cota do terreno do primeiro ponto?"));
  
    var somaVisadasRe = 0;
    var somaVisadasMudanca = 0;
  
    for (var i = 1; i <= qtdPontos; i++) {
      var linhaCorpo = corpo.insertRow();
      var estacasCorpo = linhaCorpo.insertCell();
      estacasCorpo.appendChild(document.createTextNode("Ponto " + i));
  
      var visadaRe = linhaCorpo.insertCell();
      var visadaReInput = document.createElement("input");
      visadaReInput.type = "number";
      visadaReInput.min = "0";
      visadaReInput.step = "0.01";
      visadaRe.appendChild(visadaReInput);
  
      var alturaInstrumentoCell = linhaCorpo.insertCell();
      alturaInstrumentoCell.appendChild(document.createTextNode(alturaInstrumento.toFixed(3)));
  
      var visadaVante = linhaCorpo.insertCell();
      var visadaVanteInput1 = document.createElement("input");
      visadaVanteInput1.type = "number";
      visadaVanteInput1.min = "0";
      visadaVanteInput1.step = "0.01";
      visadaVante.appendChild(visadaVanteInput1);
  
      var visadaVanteInput2 = document.createElement("input");
      visadaVanteInput2.type = "number";
      visadaVanteInput2.min = "0";
      visadaVanteInput2.step = "0.01";
      visadaVanteInput2.style.display = "none";
      visadaVante.appendChild(visadaVanteInput2);
  
      var cotaTerrenoCell = linhaCorpo.insertCell();
      cotaTerrenoCell.appendChild(document.createTextNode(cotaTerreno.toFixed(3)));
      if (pontosMudanca.includes(i.toString())) {
        alturaInstrumento = cotaTerreno + visadaReFloat;
        somaAlturasInstrumento.push(alturaInstrumento);
        somaVisadasIntermediarias.push(0);
        somaVisadasMudanca.push(0);
        cotaPonto = alturaInstrumento + visadaVanteIntermediariaFloat;
        somaCotasTerreno.push(cotaPonto);
      } else {
        somaAlturasInstrumento.push(alturaInstrumento);
        somaVisadasIntermediarias.push(visadaVanteIntermediariaFloat);
        somaVisadasMudanca.push(visadaVanteMudancaFloat);
        cotaPonto = cotaTerreno + visadaReFloat + visadaVanteIntermediariaFloat;
        somaCotasTerreno.push(cotaPonto);
      }
      
      // Cálculo da cota final
      var cotaFinal = cotaInicial + somaVisadasRe - somaVisadasMudanca.reduce((a, b) => a + b, 0);
      
      // Gerando a tabela com os resultados
      var tabela = "<table><tr><th>Estacas</th><th>Visada Ré</th><th>Altura do Instrumento</th><th>Visada Vante (Intermediária)</th><th>Visada Vante (Mudança)</th><th>Cota do Terreno</th></tr>";
      for (var i = 0; i < numPontos; i++) {
        tabela += "<tr><td>" + (i + 1) + "</td><td>" + visadasRe[i] + "</td><td>" + somaAlturasInstrumento[i].toFixed(3) + "</td><td>" + somaVisadasIntermediarias[i].toFixed(3) + "</td><td>" + somaVisadasMudanca[i].toFixed(3) + "</td><td>" + somaCotasTerreno[i].toFixed(3) + "</td></tr>";
      }
      tabela += "</table>";
      document.write(tabela);
    }
}