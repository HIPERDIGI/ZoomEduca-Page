// Objeto com os conteúdos dos modais
const modalContent = {
  profiles: `
    <article>
    <div class="container">
      <h2>O que cada perfil pode fazer?</h2>
      <p>Descubra o que se pode fazer com cada perfil </p>
    </div>
    <section class="container">
      <div class="col">
        <div class="row">
          <div data-aos="fade-right" class="col-md-6 img-container">
            <img src="src/assets/profile_parents.png" alt="Mãe observando filho" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text-center">Pais</h2>
            <p>Através do Zoom Educa os pais podem acompanhar o rendimento escolar de todos os seus filhos através do próprio celular.</p>
            <p>Eles poderão acessar o desempenho individual do seu filho em cada disciplina por simulado. Poderão ainda consultar histórico de desempenho para saber em que disciplinas o aluno está indo bem e em quais precisa melhorar.</p>
            <p>O Zoom Educa possui uma espécie de indicador de “comportamento” do aluno que avisa aos pais qualquer mudança abrupta no rendimento do seu filho, através de notificações pelo celular.</p>
          </div>
        </div>

        <div class="row">
          <div data-aos="fade-right" class="col-md-6">
            <img src="src/assets/profile_student.png" alt="Aluna sorridente" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text-center">Alunos</h2>
            <p>O aluno poderá responder provas presenciais e on-line em diversas modalidades.</p>
            <p>Na modalidade presencial as folhas de respostas são geradas pelo Zoom Educa de forma personalizada, com dados da avaliação e do aluno, com foto e Qr Code para a identificação de cada aluno e podem ser impressas em papel A4 comum para posterior escaneamento e envio para o Zoom Educa.</p>
            <p>Na modalidade presencial digital tanto a folha de respostas personalizada como o caderno de questões são disponibilizados pelo aplicativo.</p>
            <p>As folhas de respostas podem ser impressas ou geradas no modelo de qualquer sistema de ensino ou mesmo do ENEM.</p>
          </div>
        </div>

        <div class="row">
          <div data-aos="fade-right" class="col-md-6">
            <img src="src/assets/profile_teacher.png" alt="Professor dando aula" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text-center">Professor</h2>
            <p>O professor é um dos principais beneficiados com um módulo próprio, no qual ele tem acesso a uma série de informações, a cada avaliação, através do app, tais como: percentual de acertos de cada questão, percentual de marcação de cada alternativa, alunos com mais dificuldade em cada questão, rendimento da turma e disciplinas, pontuação dos alunos, recebe indicadores automáticos de rendimento, possibilidade de inserir, via app, mini-aulas de áudio ou explicações/comentários sobre as questões com menos acertos, onde somente alunos que erraram a questão receberão a notificação, etc. Podendo ainda cadastrar atividades extra classe fazer as correções através do aplicativo.</p>
          </div>
        </div>

        <div class="row">
          <div data-aos="fade-right" class="col-md-6">
            <img src="src/assets/profile_director.png" alt="Mãe observando filho" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text-center">Diretor (Gestor)</h2>
            <p>O gestor tem acesso a uma visão geral do rendimento de sua escola e visões detalhadas sobre o rendimento de cada série, turma, professor e disciplina.</p>
            <p>Ele tem acesso a gráficos comparativos que dão a visão geral e detalhada de toda a escola através de gráficos coloridos e com cores significativas de acordo com o percentual de rendimento.</p>
            <p>Com base nestas informações, a direção poderá tomar decisões estratégicas para melhorar ainda mais o índice de aprovação de sua escola no Enem e melhorar ainda o processo ensino-aprendizagem como um todo em sua escola.</p>
          </div>
        </div>

        <div class="row">
          <div data-aos="fade-right" class="col-md-6">
            <img src="src/assets/profile_coodinador.png" alt="coordernador mostrando informações em papel" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text-center">Coordernador</h2>
            <p>Assim como o Diretor, o Coordenador também tem uma visão privilegiada do sistema, porém com acesso somente às séries às quais é o responsável. Ele pode, principalmente, acompanhar o rendimento de cada série e cada turma como um todo, cada professor, cada disciplina e cada aluno individualmente que estejam sob sua coordenação.</p>
            <p>O Zoom Educa faz uso de indicadores de rendimento, que permitem a emissão de avisos importantes ao coordenador, para que este possa identificar facilmente problemas pontuais e intervir de forma eficaz para melhorar rendimentos ruins, sejam eles de professores, alunos ou da turma como um todo.</p>
          </div>
        </div>

        <div class="row">
          <div data-aos="fade-right" class="col-md-6">
            <img src="src/assets/profile_operator.png" alt="coordernador mostrando informações em papel" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text-center">Operador</h2>
            <p>O Operador pode ser um ou mais colaboradores da escola que serão responsáveis pelo cadastro das avaliações regulares, geração das folhas de respostas (no caso de modalidade presencial com folha física), digitação dos gabaritos oficiais e processamento do resultado com posterior habilitação para alunos, pais (opcional), professores, gestores e coordenadores. Também pode inserir avisos, cadastrar materiais de estudo, capturar folhas de repostas pelo aplicativo, etc.</p>
          </div>
        </div>
      </div>
    </section>
  </article>
  `,
  ballon_1: 
    `
    <section>
      <h3>Cadastro da escola na plataforma</h3>
      <p>A escola envia para plataforma as bases de dados necessárias para o cadastro, tais como, tabela de alunos, séries, turmas, disciplinas por turma e professores por disciplina/turma/série e escolhe a modalidade de uso da ferramenta conforme suas necessidades.</p>
    </section>
    `,
  ballon_2:
  `
    <section>
      <h3>Criação e cadastro da avaliação presencial ou on-line na plataforma</h3>
      <p>O operador da plataforma na escola faz o registro das avaliações no sistema, cadastrando data e hora da prova, caderno de questões elaborado pela escola, descrição da avaliação, séries, turmas e disciplinas que realizarão a prova, bem como pode gerar folhas de respostas personalizadas para provas presenciais ou habilitar para que alunos possam responder pelo aplicativo na própria sala de aula ou remotamente, modalidade na qual o aluno tem acesso tanto à folha de respostas virtual como ao caderno de questões virtual, pelo aplicativo ou web.</p>
    </section>
  `,
  ballon_3:
  `
    <section>
      <h3>A plataforma permite várias modalidades de aplicação de provas</h3>
      <ol>
        <li>Presencial, com folhas de respostas físicas e cadernos de questões físicos. Nessa modalidade é realizada a coleta das folhas de respostas para escaneamento e processamento do resultado.</li>
        <li>Presencial, com folhas de respostas físicas e cadernos de questões físicos, mas sem a coleta das folhas. Nesse caso o colégio faz o escaneamento das folhas e usa a opção do sistema para fazer o upload das folhas.</li>
        <li>Presencial com captura das folhas de respostas pelo aplicativo. Nessa modalidade o Operador da escola ou o professor ou até mesmo o aluno podem fazer a captura da folha de respostas física através do aplicativo Zoom Educa.  </li>
        <li>Presencial com folha de respostas virtual.  Nessa forma de aplicação o colégio imprime somente os cadernos de questões e o aluno marca a folha de respostas no aplicativo. </li>
        <li>Presencial com folha de respostas virtual e caderno de questões virtual. Nessa modalidade tanto o caderno de questões quanto a folha de repostas são virtuais e o aluno responde a prova na própria sala de aula através do aplicativo, sujeito à todas as medidas de segurança contra qualquer tipo de cola.</li>
        <li>Prova On-line. Nesse caso o aluno responde a prova remotamente tanto pelo aplicativo quanto pela web. </li>
      </ol>
    </section>
  `,
  ballon_4:
  `
    <section>
      <h3>Correção e Resultados</h3>
      <p>Após o término da avaliação, dependendo do tipo escolhido, a plataforma automaticamente processa as informações, analisando as respostas fornecidas e aplicando os critérios definidos para a correção. Em seguida, o sistema gera e apresenta o resultado correspondente para cada aluno, destacando os pontos fortes e indicando possíveis áreas de melhoria. Além disso, os resultados podem ser armazenados no perfil de cada aluno para acompanhamento do desempenho ao longo do tempo.</p>
    </section>
  `,
  ballon_5:
  `
    <section>
      <h3>Monitoramento</h3>
      <p>A plataforma permite o monitoramento completo do rendimento escolar com base nas avaliações realizadas, sejam elas da própria escola ou dos diversos sistemas de ensino, desde que cadastradas na plataforma Zoom Educa, fornecendo informações privilegiadas através de consultas gráficas e textuais, para o acompanhamento do desempenho escolar e possibilitando que a gestão da escola faça intervenções pontuais para melhorar o rendimento no processo ensino-aprendizagem.</p>
    </section>
  `,

  notifications_card: `
    <section>
      <h3>Avisos e notificações automatizadas</h3>
      <p>A plataforma envia automaticamente uma série de avisos e notificações para cada um dos perfis, tais como avisos de criação de novas avaliações, habilitação de resultado de uma avaliação, rendimento abaixo da média de um aluno, disciplina, turma ou série, novo comentário sobre uma questão, mudança de comportamento de aluno, risco de evasão ou reprovação, etc.</p>
    </section>
  `,

  audit_card: `
    <section>
      <h3> Auditoria Completa de Ações no Sistema</h3>
      <p>A funcionalidade de auditoria permite consultar e visualizar todas as ações realizadas no sistema, independentemente do perfil do usuário. Com essa ferramenta, gestores podem acompanhar e monitorar atividades de alunos, professores e outros membros da plataforma, garantindo maior segurança e transparência. A auditoria fornece um histórico detalhado de acessos, modificações e interações, facilitando o controle e a identificação de qualquer irregularidade ou necessidade de ajustes.</p>
    </section>
  `,

  activity_card: `
    <section>
      <h3> Registro Detalhado de Atividades dos Alunos</h3>
      <p>O professor pode registrar todas as atividades realizadas pelos alunos, como tarefas, avaliações e projetos, diretamente na plataforma. Esse registro permite o acompanhamento contínuo do desempenho de cada aluno, facilitando a análise de seu progresso e a personalização do feedback. Além disso, possibilita uma gestão mais eficiente do aprendizado e um histórico detalhado das atividades ao longo do período letivo.</p>
    </section>
  `,

  successMsg: `
    <h3 style="color: var(--GREEN)" class="text-center">E-mail Enviado com sucesso!</h3>
    <p style="color: var(--GREEN)" class="text-center">Retornaremos o mais rápido possivel!</p>
  `,
  errorMsg: `
    <h3 style="color: #ff0000" class="text-center">E-mail não enviado</h3>
    <p style="color: #ff0000" class="text-center">Algum problema ocorreu, por favor tente daqui a alguns minutos!</p>
  `,
};

// Função para abrir o modal
function openModal(contentKey) {
  const modal = document.getElementById('dynamicModal'); // Obtém o modal
  const modalBody = document.querySelector('.modal-body'); // Obtém o corpo do modal

  // Verifica se o conteúdo existe
  if (modalContent[contentKey]) {
    modalBody.innerHTML = modalContent[contentKey]; // Insere o conteúdo no modal
    modal.classList.add('show'); // Exibe o modal


    // Bloqueia o scroll da página principal
    document.body.classList.add("body-no-scroll");
  } else {
    console.error(`Conteúdo para o modal "${contentKey}" não encontrado.`);
  }
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById('dynamicModal'); // Obtém o modal
  modal.classList.remove('show'); // Remove a classe de exibição


  // Remove o bloqueio de scroll
  document.body.classList.remove("body-no-scroll");
}