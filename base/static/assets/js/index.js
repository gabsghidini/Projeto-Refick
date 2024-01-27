// Função para calcular a diferença entre duas datas
function calcularTempoAtivo(dataInicial, dataFinal) {
	const umSegundoEmMilissegundos = 1000; // Quantidade de milissegundos em um segundo
	const umMinutoEmMilissegundos = 60 * umSegundoEmMilissegundos; // Quantidade de milissegundos em um minuto
	const umaHoraEmMilissegundos = 60 * umMinutoEmMilissegundos; // Quantidade de milissegundos em uma hora
	const umDiaEmMilissegundos = 24 * umaHoraEmMilissegundos; // Quantidade de milissegundos em um dia

	const dataInicio = new Date(dataInicial);
	const dataFim = new Date(dataFinal);
	const diferencaEmMilissegundos = Math.abs(dataInicio - dataFim);

	const dias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
	const horas = Math.floor(
		(diferencaEmMilissegundos % umDiaEmMilissegundos) /
			umaHoraEmMilissegundos
	);
	const minutos = Math.floor(
		(diferencaEmMilissegundos % umaHoraEmMilissegundos) /
			umMinutoEmMilissegundos
	);
	const segundos = Math.floor(
		(diferencaEmMilissegundos % umMinutoEmMilissegundos) /
			umSegundoEmMilissegundos
	);

	return {
		dias,
		horas,
		minutos,
		segundos,
	};
}

// Função para atualizar o contador a cada segundo
function atualizarContador() {
    const counterContainer = document.getElementById("home__counter");
    const counter = document.getElementById("home__counter--loader");
    // Data de início (01/01/2017)
    const dataInicioAtividade = "2017-01-01";

    // Data atual
    const dataAtual = new Date();

    // Calcula a diferença em dias, horas, minutos e segundos
    const tempoAtivo = calcularTempoAtivo(dataInicioAtividade, dataAtual);

    // Cria os elementos HTML
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const table = document.createElement("table");
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");

    // Define o conteúdo dos elementos
    h3.textContent = "Artista há";
    h3.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td1.textContent = tempoAtivo.dias;
    td1.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td2.textContent = tempoAtivo.horas;
    td2.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td3.textContent = tempoAtivo.minutos;
    td3.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td4.textContent = tempoAtivo.segundos;
    td4.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td5.textContent = "Dias";
    td5.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

    td6.textContent = "Horas";
    td6.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td7.textContent = "Minutos";
    td7.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
    
    td8.textContent = "Segundos";
    td8.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

    // Monta a estrutura do HTML
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);

    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);

    table.appendChild(tr1);
    table.appendChild(tr2);
    
    div.appendChild(h3);
    div.appendChild(table);

    // Remove todos os elementos filhos do contador
    while (counter.firstChild) {
        counter.removeChild(counter.firstChild);
    }

    // Adiciona estilo aos containeres
    counter.style.display = "flex";
    counter.style.justifyContent = "center";
    counter.style.alignItems = "center";

    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    h3.style.whiteSpace = "nowrap";
    h3.style.textAlign = "center";
    h3.style.margin = "0";

    table.style.textAlign = "center";
    table.style.margin = "0";

    tr1.style.margin = "0";
    tr1.style.padding = "0";
    tr2.style.margin = "0";
    tr2.style.padding = "0";

    tr2.style.textTransform = "uppercase";

    counterContainer.style.display = "flex";
    counterContainer.style.alignItems = "center";
    counterContainer.style.justifyContent = "flex-start";
    counterContainer.style.marginRight = "auto";
    counterContainer.style.marginLeft = "1rem";

    // Adiciona o novo conteúdo ao contador
    counter.appendChild(div);
    
}

// Chama a função atualizarContador a cada segundo
setInterval(atualizarContador, 1000);
