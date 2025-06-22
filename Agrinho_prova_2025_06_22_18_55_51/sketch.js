let cenário = 1;
let botoesVisiveis = true;
let pontos = 0; // Contador de pontos
let respostaDada = false; // Indica se o usuário já respondeu à pergunta (para feedback de mensagem)

// Variáveis para o Quiz 2 (NOVO: Drones)
let respostaCorretaQuiz2 = false; // Indica se a resposta dada ao Quiz 2 foi correta
let botaoClicadoQuiz2 = -1; // Armazena qual botão do Quiz 2 foi clicado

// Variáveis para o Quiz 3 (Agora é o segundo quiz)
let respostaCorretaQuiz3 = false; // Indica se a resposta dada ao Quiz 3 foi correta
let botaoClicadoQuiz3 = -1; // Armazena qual botão do Quiz 3 foi clicado

// Variáveis para o Quiz 4 (Agora é o terceiro quiz)
let respostaCorretaQuiz4 = false; // Indica se a resposta dada ao Quiz 4 foi correta
let botaoClicadoQuiz4 = -1; // Armazena qual botão do Quiz 4 foi clicado

// Variáveis para o Quiz 5 (Agora é o quarto quiz)
let respostaCorretaQuiz5 = false; // Indica se a resposta dada ao Quiz 5 foi correta
let botaoClicadoQuiz5 = -1; // Armazena qual botão do Quiz 5 foi clicado

// Variáveis para as imagens
let imgInicio, imgAgrinho, imgInstrucoes, imgIntroducao2, imgTecnologia, imgTecnologia3, imgÁgua, imgEnergia2, imgQuiz, imgQuiz1, imgQuiz3, imgQuiz4, imgQuiz5, imgInstrucoes2, imgFeiras;

/**
 * Função preload()
 * Carrega todas as imagens antes que o jogo comece.
 */
function preload() {
  imgInicio = loadImage("agrinho.png");
  imgAgrinho = loadImage("explicacao_agrinho.png");
  imgInstrucoes = loadImage("explicacoes.png");
  imgInstrucoes2 = loadImage("explicacoes2.png"); // Imagem para a segunda
  imgIntroducao2 = loadImage("introducao2.png");
  imgTecnologia = loadImage("tecnologia.png");
  imgTecnologia3 = loadImage("tecnologia3.png");
  imgFeiras = loadImage("Feiras.png"); // Adicionei a variável imgFeiras aqui
  imgÁgua = loadImage("Água.png");
  imgEnergia2 = loadImage("Energia sustentável.png");
  imgQuiz = loadImage("Quiz.png");
  imgQuiz1 = loadImage("Quiz1.png"); // This is the image for Quiz 2 (cenário 13)
  imgQuiz3 = loadImage("Quiz3.png");
  imgQuiz4 = loadImage("Quiz4.png");
  imgQuiz5 = loadImage("Quiz5.png");
}

/**
 * Função setup()
 * Configura o ambiente inicial do canvas.
 */
function setup() {
  createCanvas(600, 500);
  textAlign(CENTER, CENTER);
  textSize(28); // Tamanho padrão do texto para títulos
}

/**
 * Função draw()
 * Desenha os elementos na tela a cada frame.
 */
function draw() {
  background(220); // Cor de fundo padrão

  // Exibe a imagem do cenário atual com base na variável 'cenário'
  switch (cenário) {
    case 1:
      image(imgInicio, 0, 0, 600, 500);
      // --- FRASE "CLIQUE NOS BOTÕES PARA COMEÇAR" ---
      if (botoesVisiveis) { // Só mostra a frase se os botões do menu estiverem visíveis
        fill(255); // Cor branca para o texto
        textSize(20); // Tamanho adequado para a frase
        text("CLIQUE NOS BOTÕES PARA COMEÇAR", width / 2, 470); // Ajustado para 470
      }
      // ---------------------------------------------
      break;
    case 2:
      image(imgInstrucoes, 0, 0, 600, 500);
      break;
    case 3:
      image(imgAgrinho, 0, 0, 600, 500);
      break;
    case 4: // Cenário para explicacoes2.png
      image(imgInstrucoes2, 0, 0, 600, 500);
      break;
    case 5:
      image(imgIntroducao2, 0, 0, 600, 500);
      break;
    case 6: // Placeholder for scenario 6. This case will now be skipped in the flow from scenario 5.
      // Este cenário será pulado, mas deixamos o case aqui por segurança.
      background(220);
      break;
    case 7:
      image(imgTecnologia, 0, 0, 600, 500);
      break;
    case 8:
      image(imgTecnologia3, 0, 0, 600, 500);
      break;
    case 9: // Feiras
      image(imgFeiras, 0, 0, 600, 500);
      break;
    case 10: // Água
      image(imgÁgua, 0, 0, 600, 500);
      break;
    case 11: // Energia sustentável
      image(imgEnergia2, 0, 0, 600, 500);
      break;
    case 12: // Quiz 1 (Quiz geral antes dos específicos)
      image(imgQuiz, 0, 0, 600, 500);
      break;
    case 13: // Quiz 2 (Drones) - This corresponds to Quiz1.png
      image(imgQuiz1, 0, 0, 600, 500);
      drawQuiz2Elements(); // Chamando a função para desenhar os elementos do quiz
      break;
    case 14: // Quiz 3
      image(imgQuiz3, 0, 0, 600, 500);
      drawQuiz3Elements();
      break;
    case 15: // Quiz 4
      image(imgQuiz4, 0, 0, 600, 500);
      drawQuiz4Elements();
      break;
    case 16: // Quiz 5
      image(imgQuiz5, 0, 0, 600, 500);
      drawQuiz5Elements();
      break;
    case 17: // Cenário final - Aparece SOMENTE após o Quiz 5
      background(100);
      fill(255);
      textSize(36);
      text("Fim do Jogo!", width / 2, height / 2 - 50);
      textSize(24);
      text(`Pontuação Final: ${pontos}`, width / 2, height / 2);
      drawButton(width / 2 - 60, height - 80, 120, 40, "Reiniciar");
      break;
    // Não há 'default' para a tela final, ela é explicitamente o case 17
  }

  // Botões da tela inicial (cenário 1)
  if (cenário === 1 && botoesVisiveis) {
    drawMenuButton(160, 190, "Jogar");
    drawMenuButton(160, 290, "Instruções");
    drawMenuButton(160, 390, "Agrinho");
  }

  // Botão "Voltar"
  // Não mostra o botão "Voltar" na tela final (cenário 17)
  if (cenário > 1 && cenário <= 16) {
    // Não mostra o botão "Voltar" se a resposta correta foi dada em um quiz
    if (!((cenário === 13 && respostaDada && respostaCorretaQuiz2) || // Quiz 2
        (cenário === 14 && respostaDada && respostaCorretaQuiz3) || // Quiz 3
        (cenário === 15 && respostaDada && respostaCorretaQuiz4) || // Quiz 4
        (cenário === 16 && respostaDada && respostaCorretaQuiz5))) { // Quiz 5
      drawButton(10, 460, 100, 35, "Voltar"); // Moved left
    }
  }

  // Botão "Avançar"
  // Desenha o botão "Avançar" especificamente para o cenário 2 (explicacoes.png)
  if (cenário === 2) { // **REMOVIDO || cenário === 4**
    drawButton(460, 460, 100, 35, "Avançar");
  }
  // Lógica generalizada para desenhar o botão "Avançar" do cenário 5 em diante (fluxo principal e quizzes)
  if (cenário >= 5 && cenário <= 16) { // Agora começa do cenário 5 e vai até o cenário 16 (Quiz 5)
    // EXCEÇÃO: Não mostra o botão "Avançar" no cenário 6, pois ele será pulado
    // A condição (cenário === 6) no if abaixo agora está redundante mas não causa problema.
    // O importante é que a transição do cenário 5 PULA o 6.
    if ((cenário !== 13 && cenário !== 14 && cenário !== 15 && cenário !== 16) ||
      (cenário === 13 && respostaCorretaQuiz2) || // ...é o Quiz 2 e acertou
      (cenário === 14 && respostaCorretaQuiz3) || // ...é o Quiz 3 e acertou
      (cenário === 15 && respostaCorretaQuiz4) || // ...é o Quiz 4 e acertou
      (cenário === 16 && respostaCorretaQuiz5)) { // ...é o Quiz 5 e acertou
      drawButton(460, 460, 100, 35, "Avançar");
    }
  }
}

/**
 * Função drawQuiz2Elements()
 * Desenha os elementos específicos do Quiz 2 (Drones), incluindo alternativas e feedback.
 */
function drawQuiz2Elements() {
  fill(0); // Cor preta para o texto principal
  textSize(20);

  // Contador de pontos: posicionado ao lado esquerdo do ponto de interrogação
  textAlign(LEFT, CENTER);
  text(`Pontos: ${pontos}`, 20, 60); // Ajustado para X=20 e Y=60 para ficar ao lado esquerdo do '?'
  textAlign(CENTER, CENTER); // Resetar para o centro para outros textos

  // Adjusted button dimensions
  let defaultButtonWidth = 450; // Made smaller
  let quiz2ButtonHeight = 70; // Made smaller
  let textPadding = 15;

  let startX = (width - defaultButtonWidth) / 2;

  // As alternativas do Quiz 2
  let alternas = [
    "a) Os drones são utilizados exclusivamente para espantar pássaros e outras pragas das plantações, sem outras funcionalidades agrícolas.",
    "b) Drones com sensores multiespectrais podem identificar áreas da lavoura com deficiências nutricionais ou problemas de irrigação, permitindo a aplicação precisa de insumos.", // RESPOSTA CORRETA
    "c) A principal função dos drones é substituir completamente o trabalho manual de colheita em grandes fazendas, acelerando o processo.",
    "d) Na agricultura, os drones são empregados unicamente para a pulverização de grandes extensões de monoculturas, sendo ineficazes em culturas diversas ou pequenas propriedades."
  ];

  // Posições Y para cada botão de alternativa - Ajustado para ficar ABAIXO do ponto de interrogação
  let yPos_a = 130; // Mantido em 130 para ficar abaixo do ponto de interrogação
  let yPos_b = yPos_a + quiz2ButtonHeight + textPadding;
  let yPos_c = yPos_b + quiz2ButtonHeight + textPadding;
  let yPos_d = yPos_c + quiz2ButtonHeight + textPadding;

  let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];

  // Desenha cada botão de alternativa
  for (let i = 0; i < alternas.length; i++) {
    let corBotao = 'white';
    let currentTextSize = 14;

    // Lógica para definir a cor do botão
    if ((respostaDada && respostaCorretaQuiz2 && i === 1) || (cenário === 13 && respostaCorretaQuiz2 && i === 1 && !respostaDada)) {
      corBotao = 'green';
    } else if (respostaDada && !respostaCorretaQuiz2 && i === botaoClicadoQuiz2) {
      corBotao = 'red';
    }

    drawQuizButton(startX, yPositions[i], defaultButtonWidth, quiz2ButtonHeight, alternas[i], corBotao, currentTextSize);
  }

  // Mensagem de feedback - Posicionado abaixo, para não colidir com os botões.
  if (respostaDada) {
    textSize(24);
    let feedbackY = 400; // Mantido em 400
    if (respostaCorretaQuiz2) {
      fill('green');
      text("Você acertou!", width / 2, feedbackY);
    } else {
      fill('red');
      text("Você errou, tente novamente!", width / 2, feedbackY);
    }
  }
}

/**
 * Função drawQuiz3Elements()
 * Desenha os elementos específicos do Quiz 3, incluindo alternativas e feedback.
 */
function drawQuiz3Elements() {
  fill(0);
  textSize(20);

  // Contador de pontos
  textAlign(LEFT, CENTER);
  text(`Pontos: ${pontos}`, 20, 130);
  textAlign(CENTER, CENTER);

  let defaultButtonWidth = 500;
  let quiz3ButtonHeight = 80;
  let textPadding = 15;

  let startX = (width - defaultButtonWidth) / 2;

  // As alternativas do quiz 3
  let alternas = [
    "a) Elas são importantes apenas para o turismo, atraindo visitantes de outras regiões e não contribuindo para a cultura interna.",
    "b) Elas servem como um espaço para a transmissão de conhecimentos, práticas e valores entre gerações, mantendo vivas as tradições.",
    "c) Elas se focam unicamente na comercialização de produtos, sem qualquer preocupação com a dimensão cultural das comunidades.",
    "d) Elas promovem a modernização das práticas culturais, substituindo as tradições antigas por novas formas de expressão."
  ];

  // Posições Y para cada botão de alternativa
  let yPos_a = 160;
  let yPos_b = yPos_a + quiz3ButtonHeight + textPadding;
  let yPos_c = yPos_b + quiz3ButtonHeight + textPadding;
  let yPos_d = yPos_c + quiz3ButtonHeight + textPadding;

  let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];


  // Desenha cada botão de alternativa
  for (let i = 0; i < alternas.length; i++) {
    let currentButtonWidth = defaultButtonWidth;
    let currentButtonHeight = quiz3ButtonHeight;
    let currentStartX = startX;
    let currentTextSize = 14;

    let corBotao = 'white';

    // Lógica para definir a cor do botão
    if ((respostaDada && respostaCorretaQuiz3 && i === 1) || (cenário === 14 && respostaCorretaQuiz3 && i === 1 && !respostaDada)) {
      corBotao = 'green';
    } else if (respostaDada && !respostaCorretaQuiz3 && i === botaoClicadoQuiz3) {
      corBotao = 'red';
    }

    drawQuizButton(currentStartX, yPositions[i], currentButtonWidth, currentButtonHeight, alternas[i], corBotao, currentTextSize);
  }

  // Mensagem de feedback
  if (respostaDada) {
    textSize(24);
    let feedbackY = 130;
    if (respostaCorretaQuiz3) {
      fill('green');
      text("Você acertou!", width / 2, feedbackY);
    } else {
      fill('red');
      text("Você errou, tente novamente!", width / 2, feedbackY);
    }
  }
}

/**
 * Função drawQuiz4Elements()
 * Desenha os elementos específicos do Quiz 4, incluindo alternativas e feedback.
 */
function drawQuiz4Elements() {
  fill(0);
  textSize(20);

  // Contador de pontos
  textAlign(LEFT, CENTER);
  text(`Pontos: ${pontos}`, 20, 130);
  textAlign(CENTER, CENTER);

  let defaultButtonWidth = 500;
  let quiz4ButtonHeight = 80;
  let textPadding = 15;

  let startX = (width - defaultButtonWidth) / 2;

  // As alternativas do Quiz 4
  let alternas = [
    "a) A água é usada exclusivamente no campo para a irrigação, sem impacto direto na cidade.",
    "b) A água serve principalmente para o transporte de mercadorias agrícolas do campo para os centros urbanos.",
    "c) Através de represas e rios que nascem no campo, a água irriga lavouras para produzir alimentos e, posteriormente, é tratada para abastecer as casas e indústrias da cidade.", // RESPOSTA CORRETA
    "d) A água é importante apenas para o lazer em áreas rurais, como rios e lagos, sem relação com as necessidades urbanas."
  ];

  // Posições Y para cada botão de alternativa
  let yPos_a = 160;
  let yPos_b = yPos_a + quiz4ButtonHeight + textPadding;
  let yPos_c = yPos_b + quiz4ButtonHeight + textPadding;
  let yPos_d = yPos_c + quiz4ButtonHeight + textPadding;

  let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];

  // Desenha cada botão de alternativa
  for (let i = 0; i < alternas.length; i++) {
    let currentButtonWidth = defaultButtonWidth;
    let currentButtonHeight = quiz4ButtonHeight;
    let currentStartX = startX;
    let currentTextSize = 14;

    let corBotao = 'white';

    // Lógica para definir a cor do botão
    if ((respostaDada && respostaCorretaQuiz4 && i === 2) || (cenário === 15 && respostaCorretaQuiz4 && i === 2 && !respostaDada)) {
      corBotao = 'green';
    } else if (respostaDada && !respostaCorretaQuiz4 && i === botaoClicadoQuiz4) {
      corBotao = 'red';
    }

    drawQuizButton(currentStartX, yPositions[i], currentButtonWidth, currentButtonHeight, alternas[i], corBotao, currentTextSize);
  }

  // Mensagem de feedback
  if (respostaDada) {
    textSize(24);
    let feedbackY = 130;
    if (respostaCorretaQuiz4) {
      fill('green');
      text("Você acertou!", width / 2, feedbackY);
    } else {
      fill('red');
      text("Você errou, tente novamente!", width / 2, feedbackY);
    }
  }
}

/**
 * Função drawQuiz5Elements()
 * Desenha os elementos específicos do Quiz 5, incluindo a pergunta, alternativas em ordem alfabética e feedback.
 */
function drawQuiz5Elements() {
  fill(0);
  textSize(20);

  // Contador de pontos
  textAlign(LEFT, CENTER);
  text(`Pontos: ${pontos}`, 20, 130);
  textAlign(CENTER, CENTER);

  let defaultButtonWidth = 500;
  let quiz5ButtonHeight = 80;
  let textPadding = 15;

  let startX = (width - defaultButtonWidth) / 2;

  // As alternativas do Quiz 5, já em ordem alfabética
  let alternas = [
    "a) A tecnologia na agricultura serve apenas para aumentar a produção de alimentos no campo, sem qualquer impacto nas cidades.",
    "b) A tecnologia agrícola moderniza o campo, permitindo maior produtividade, uso eficiente de recursos e conectando-o à cidade através do fornecimento de alimentos processados e matérias-primas.", // RESPOSTA CORRETA
    "c) O uso de tecnologia no campo tem como principal objetivo reduzir a dependência da cidade em relação aos produtos agrícolas, tornando as áreas rurais autossuficientes.",
    "d) A tecnologia no campo se limita ao uso de máquinas pesadas, sem desenvolver sistemas de comunicação ou logística que unam o campo e a cidade."
  ];

  // Posições Y para cada botão de alternativa
  let yPos_a = 160;
  let yPos_b = yPos_a + quiz5ButtonHeight + textPadding;
  let yPos_c = yPos_b + quiz5ButtonHeight + textPadding;
  let yPos_d = yPos_c + quiz5ButtonHeight + textPadding;

  let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];

  // Desenha cada botão de alternativa
  for (let i = 0; i < alternas.length; i++) {
    let corBotao = 'white';
    let currentTextSize = 14;

    // Lógica para definir a cor do botão
    if ((respostaDada && respostaCorretaQuiz5 && i === 1) || (cenário === 16 && respostaCorretaQuiz5 && i === 1 && !respostaDada)) {
      corBotao = 'green';
    } else if (respostaDada && !respostaCorretaQuiz5 && i === botaoClicadoQuiz5) {
      corBotao = 'red';
    }

    drawQuizButton(startX, yPositions[i], defaultButtonWidth, quiz5ButtonHeight, alternas[i], corBotao, currentTextSize);
  }

  // Mensagem de feedback
  if (respostaDada) {
    textSize(24);
    let feedbackY = 130;
    if (respostaCorretaQuiz5) {
      fill('green');
      text("Você acertou!", width / 2, feedbackY);
    } else {
      fill('red');
      text("Você errou, tente novamente!", width / 2, feedbackY);
    }
  }
}

/**
 * Função drawQuizButton()
 * Desenha um botão de quiz com texto que quebra linha e se ajusta ao tamanho.
 * @param {number} x Posição X do canto superior esquerdo do botão.
 * @param {number} y Posição Y do canto superior esquerdo do botão.
 * @param {number} w Largura do botão.
 * @param {number} h Altura do botão.
 * @param {string} label Texto a ser exibido no botão.
 * @param {string} cor Cor de preenchimento do botão.
 * @param {number} tSize Tamanho do texto.
 */
function drawQuizButton(x, y, w, h, label, cor, tSize) {
  fill(cor);
  noStroke();
  rect(x, y, w, h, 30); // Desenha o retângulo do botão com bordas arredondadas
  fill('black'); // Cor do texto
  textSize(tSize); // Tamanho do texto
  textAlign(CENTER, CENTER); // Alinha o texto no centro da área do botão
  // Usa text() com 4 parâmetros para permitir quebra de linha e padding
  text(label, x + 10, y + 10, w - 20, h - 20); // Adicionado padding interno
}

/**
 * Função drawMenuButton()
 * Desenha um botão para o menu principal.
 * @param {number} x Posição X do canto superior esquerdo do botão.
 * @param {number} y Posição Y do canto superior esquerdo do botão.
 * @param {string} label Texto do botão.
 */
function drawMenuButton(x, y, label) {
  fill('white');
  noStroke();
  rect(x, y, 220, 50, 30);
  fill('black');
  textSize(24);
  text(label, x + 110, y + 25);
}

/**
 * Função drawButton()
 * Desenha um botão genérico (usado para Voltar, Avançar, Reiniciar).
 * @param {number} x Posição X do canto superior esquerdo do botão.
 * @param {number} y Posição Y do canto superior esquerdo do botão.
 * @param {number} w Largura do botão.
 * @param {number} h Altura do botão.
 * @param {string} label Texto do botão.
 */
function drawButton(x, y, w, h, label) {
  fill('white');
  rect(x, y, w, h, 20); // Desenha o retângulo do botão com bordas arredondadas
  fill('black');
  textSize(18);
  text(label, x + w / 2, y + h / 2); // Centraliza o texto no botão
}

/**
 * Função mousePressed()
 * Lida com os eventos de clique do mouse.
 */
function mousePressed() {
  // --- Lógica de cliques no menu principal (cenário 1) ---
  if (cenário === 1 && botoesVisiveis) {
    if (mouseX > 160 && mouseX < 380) { // Área horizontal dos botões do menu
      if (mouseY > 190 && mouseY < 240) { // Botão "Jogar"
        cenário = 5; // Inicia o jogo na tela de introdução2
        botoesVisiveis = false;
        // Reseta o estado dos quizzes e pontuação ao iniciar um novo jogo
        respostaCorretaQuiz2 = false;
        botaoClicadoQuiz2 = -1;
        respostaCorretaQuiz3 = false;
        botaoClicadoQuiz3 = -1;
        respostaCorretaQuiz4 = false;
        botaoClicadoQuiz4 = -1;
        respostaCorretaQuiz5 = false;
        botaoClicadoQuiz5 = -1;
        respostaDada = false;
        pontos = 0; // Zera pontos ao iniciar
      } else if (mouseY > 290 && mouseY < 340) { // Botão "Instruções"
        cenário = 2;
        botoesVisiveis = false;
      } else if (mouseY > 390 && mouseY < 440) { // Botão "Agrinho"
        cenário = 3;
        botoesVisiveis = false;
      }
    }
  }
  // --- Lógica de clique no botão "Reiniciar" (tela final - cenário 17) ---
  else if (cenário === 17) {
    if (mouseX > width / 2 - 60 && mouseX < width / 2 + 60 && mouseY > height - 80 && mouseY < height - 40) {
      cenário = 1; // Volta para a tela inicial
      pontos = 0; // Zera a pontuação
      botoesVisiveis = true; // Mostra botões do menu principal
      // Reseta todos os estados dos quizzes
      respostaCorretaQuiz2 = false;
      botaoClicadoQuiz2 = -1;
      respostaCorretaQuiz3 = false;
      botaoClicadoQuiz3 = -1;
      respostaCorretaQuiz4 = false;
      botaoClicadoQuiz4 = -1;
      respostaCorretaQuiz5 = false;
      botaoClicadoQuiz5 = -1;
      respostaDada = false;
    }
  }

  // --- Lógica de cliques nas alternativas dos Quizzes ---

  // Quiz 2 (cenário 13)
  if (cenário === 13) {
    if (!respostaCorretaQuiz2) { // Somente permite clicar se ainda não acertou
      // Updated dimensions for click detection
      let defaultButtonWidth = 450;
      let quiz2ButtonHeight = 70;
      let textPadding = 15;

      // Updated Y positions for all quiz buttons
      let yPos_a = 130; // Mantido em 130
      let yPos_b = yPos_a + quiz2ButtonHeight + textPadding;
      let yPos_c = yPos_b + quiz2ButtonHeight + textPadding;
      let yPos_d = yPos_c + quiz2ButtonHeight + textPadding;

      let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];
      let startX = (width - defaultButtonWidth) / 2;

      for (let i = 0; i < 4; i++) {
        let yPos = yPositions[i];
        if (mouseX > startX && mouseX < startX + defaultButtonWidth &&
          mouseY > yPos && mouseY < yPos + quiz2ButtonHeight) {

          botaoClicadoQuiz2 = i;
          respostaDada = true;

          if (i === 1) { // A resposta correta é a 'b' (índice 1)
            respostaCorretaQuiz2 = true;
            pontos += 5;
          } else {
            respostaCorretaQuiz2 = false;
          }
          break;
        }
      }
    }
  }

  // Quiz 3 (cenário 14)
  if (cenário === 14) {
    if (!respostaCorretaQuiz3) {
      let defaultButtonWidth = 500;
      let quiz3ButtonHeight = 80;
      let textPadding = 15;

      let yPos_a = 160;
      let yPos_b = yPos_a + quiz3ButtonHeight + textPadding;
      let yPos_c = yPos_b + quiz3ButtonHeight + textPadding;
      let yPos_d = yPos_c + quiz3ButtonHeight + textPadding;

      let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];

      for (let i = 0; i < 4; i++) {
        let currentButtonWidth = defaultButtonWidth;
        let currentButtonHeight = quiz3ButtonHeight;
        let currentStartX = (width - currentButtonWidth) / 2;

        let yPos = yPositions[i];
        if (mouseX > currentStartX && mouseX < currentStartX + currentButtonWidth &&
          mouseY > yPos && mouseY < yPos + currentButtonHeight) {

          botaoClicadoQuiz3 = i;
          respostaDada = true;

          if (i === 1) { // A resposta correta é a 'b' (índice 1)
            respostaCorretaQuiz3 = true;
            pontos += 5;
          } else {
            respostaCorretaQuiz3 = false;
          }
          break;
        }
      }
    }
  }

  // Quiz 4 (cenário 15)
  if (cenário === 15) {
    if (!respostaCorretaQuiz4) {
      let defaultButtonWidth = 500;
      let quiz4ButtonHeight = 80;
      let textPadding = 15;

      let yPos_a = 160;
      let yPos_b = yPos_a + quiz4ButtonHeight + textPadding;
      let yPos_c = yPos_b + quiz4ButtonHeight + textPadding;
      let yPos_d = yPos_c + quiz4ButtonHeight + textPadding;

      let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];

      for (let i = 0; i < 4; i++) {
        let currentButtonWidth = defaultButtonWidth;
        let currentButtonHeight = quiz4ButtonHeight;
        let currentStartX = (width - currentButtonWidth) / 2;

        let yPos = yPositions[i];
        if (mouseX > currentStartX && mouseX < currentStartX + currentButtonWidth &&
          mouseY > yPos && mouseY < yPos + currentButtonHeight) {

          botaoClicadoQuiz4 = i;
          respostaDada = true;

          if (i === 2) { // A resposta correta é a 'c' (índice 2)
            respostaCorretaQuiz4 = true;
            pontos += 5;
          } else {
            respostaCorretaQuiz4 = false;
          }
          break;
        }
      }
    }
  }

  // Quiz 5 (cenário 16)
  if (cenário === 16) {
    if (!respostaCorretaQuiz5) {
      let defaultButtonWidth = 500;
      let quiz5ButtonHeight = 80;
      let textPadding = 15;

      let yPos_a = 160;
      let yPos_b = yPos_a + quiz5ButtonHeight + textPadding;
      let yPos_c = yPos_b + quiz5ButtonHeight + textPadding;
      let yPos_d = yPos_c + quiz5ButtonHeight + textPadding;

      let yPositions = [yPos_a, yPos_b, yPos_c, yPos_d];
      let startX = (width - defaultButtonWidth) / 2;

      for (let i = 0; i < 4; i++) {
        let yPos = yPositions[i];
        if (mouseX > startX && mouseX < startX + defaultButtonWidth &&
          mouseY > yPos && mouseY < yPos + quiz5ButtonHeight) {

          botaoClicadoQuiz5 = i;
          respostaDada = true;

          if (i === 1) { // A resposta correta é a 'b' (índice 1)
            respostaCorretaQuiz5 = true;
            pontos += 5;
          } else {
            respostaCorretaQuiz5 = false;
          }
          break;
        }
      }
    }
  }

  // --- Lógica de clique no botão "Avançar" ---
  // Apenas considera cliques se estiver dentro da área do botão Avançar
  if (mouseX > 460 && mouseX < 560 && mouseY > 460 && mouseY < 495) {
    // Lógica específica para o botão "Avançar" nas telas de instruções
    if (cenário === 2) {
      cenário = 4; // Avança para a tela explicacoes2.png
      respostaDada = false; // Reset feedback for next screen
      return;
    }
    // REMOVIDO: else if (cenário === 4) { // Se estiver em explicacoes2.png, avança para introducao2.png
    //   cenário = 5;
    //   respostaDada = false;
    //   return;
    // }

    // Lógica generalizada para avançar entre cenários (incluindo quizzes)
    if (cenário >= 5 && cenário <= 16) {
      // Se estiver no cenário 5 (introducao2.png), pule o cenário 6 e vá direto para o 7
      if (cenário === 5) {
        cenário = 7;
      } else if (cenário === 16 && respostaCorretaQuiz5) {
        cenário = 17; // Avança para a tela final (cenário 17)
      } else if (cenário !== 16) {
        cenário++;
      }
      respostaDada = false;

      // Resetar o estado do botão clicado ao avançar de um quiz
      if (cenário === 14) { // Se avançou do Quiz 2 para Quiz 3
        botaoClicadoQuiz2 = -1;
      } else if (cenário === 15) { // Se avançou do Quiz 3 para Quiz 4
        botaoClicadoQuiz3 = -1;
      } else if (cenário === 16) { // Se avançou do Quiz 4 para Quiz 5
        botaoClicadoQuiz4 = -1;
      } else if (cenário === 17) { // Se avançou do Quiz 5 para a tela final
        botaoClicadoQuiz5 = -1;
      }
    }
  }

  // --- Lógica de clique no botão "Voltar" ---
  // O botão "Voltar" não aparecerá na tela final (cenário 17)
  if (mouseX > 10 && mouseX < 110 && mouseY > 460 && mouseY < 495 && cenário > 1 && cenário <= 16) {
    // Lógica para cenários de Instruções (cenário 4 volta para 2, cenário 2 volta para 1)
    if (cenário === 4) {
      cenário = 2; // Volta de explicacoes2.png para explicacoes.png
      respostaDada = false;
    } else if (cenário === 2) {
      cenário = 1; // Volta de explicacoes.png para a tela inicial
      botoesVisiveis = true; // Mostra botões do menu principal
      // Reseta todos os estados dos quizzes e pontuação ao voltar ao menu principal
      respostaCorretaQuiz2 = false;
      botaoClicadoQuiz2 = -1;
      respostaCorretaQuiz3 = false;
      botaoClicadoQuiz3 = -1;
      respostaCorretaQuiz4 = false;
      botaoClicadoQuiz4 = -1;
      respostaCorretaQuiz5 = false;
      botaoClicadoQuiz5 = -1;
      respostaDada = false;
      pontos = 0; // Zera os pontos ao voltar para o menu principal
    }
    // Para o cenário "Agrinho" (cenário 3), volta direto para a tela inicial
    else if (cenário === 3) {
      cenário = 1;
      botoesVisiveis = true;
      respostaCorretaQuiz2 = false; // Garante que tudo seja resetado
      botaoClicadoQuiz2 = -1;
      respostaCorretaQuiz3 = false;
      botaoClicadoQuiz3 = -1;
      respostaCorretaQuiz4 = false;
      botaoClicadoQuiz4 = -1;
      respostaCorretaQuiz5 = false;
      botaoClicadoQuiz5 = -1;
      respostaDada = false;
      pontos = 0;
    }
    // Adição da nova condição: Cenário 5 (introducao2.png) volta para a tela inicial (cenário 1)
    else if (cenário === 5) {
      cenário = 1;
      botoesVisiveis = true; // Garante que os botões do menu principal reapareçam
      // Reseta os estados dos quizzes e pontuação, como se estivesse começando um novo jogo
      respostaCorretaQuiz2 = false;
      botaoClicadoQuiz2 = -1;
      respostaCorretaQuiz3 = false;
      botaoClicadoQuiz3 = -1;
      respostaCorretaQuiz4 = false;
      botaoClicadoQuiz4 = -1;
      respostaCorretaQuiz5 = false;
      botaoClicadoQuiz5 = -1;
      respostaDada = false;
      pontos = 0;
    }
    // Para os outros cenários (dentro do fluxo de "Jogar", como as introduções e quizzes)
    else {
      // Se estiver no cenário 7 (tecnologia.png), ao voltar, vá para o cenário 5 (introducao2.png)
      if (cenário === 7) {
        cenário = 5;
      } else {
        cenário--;
      }
      // Resetar o feedback e o botão clicado ao voltar de um quiz
      respostaDada = false;
      if (cenário === 13) { // Se voltou para o Quiz 2
        botaoClicadoQuiz2 = -1;
      } else if (cenário === 14) { // Se voltou para o Quiz 3
        botaoClicadoQuiz3 = -1;
      } else if (cenário === 15) { // Se voltou para o Quiz 4
        botaoClicadoQuiz4 = -1;
      } else if (cenário === 16) { // Se voltou para o Quiz 5
        botaoClicadoQuiz5 = -1;
      }
    }
  }
}