export interface Habilidade {
  codigo: string;
  descricao: string;
}

export interface ObjetoConhecimento {
  id: string;
  titulo: string;
  sugestaoMetodologica?: string;
  habilidades: Habilidade[];
}

export interface Trimestre {
  numero: number;
  objetos: ObjetoConhecimento[];
}

export interface AnoLetivo {
  ano: string;
  trimestres: Trimestre[];
}

export const curriculumData: AnoLetivo[] = [
  {
    ano: "6º Ano",
    trimestres: [
      {
        numero: 1,
        objetos: [
          {
            id: "6-1-1",
            titulo: "Formas de registro da história e da produção do conhecimento histórico",
            sugestaoMetodologica: "Desenvolver a ideia de que História não é 'coisa do passado', mas uma interpretação construída a partir de vestígios. Comece com um problema concreto, a ser discutido, para o qual deve ser elaborada uma solução.",
            habilidades: [
              { codigo: "EF06HIMOC01", descricao: "Elaborar conceito de História." },
              { codigo: "EF06HIMOC02", descricao: "Compreender a função social da História." },
              { codigo: "EF06HIMOC03", descricao: "Elaborar conceito sobre fontes históricas." },
              { codigo: "EF06HIMOC04", descricao: "Identificar os tipos de fontes históricas." },
              { codigo: "EF06HIMOC05", descricao: "Reconhecer a importância das fontes históricas para a formação do conhecimento histórico." },
              { codigo: "EF06HI02", descricao: "Identificar a gênese da produção do saber histórico e analisar o significado das fontes que originaram determinadas formas de registro em sociedades e épocas distintas." },
            ],
          },
          {
            id: "6-1-2",
            titulo: "A questão do tempo, sincronias e diacronias: reflexões sobre o sentido das cronologias",
            sugestaoMetodologica: "Trabalhar a ideia de que o tempo é uma construção social, referência para organizar e sistematizar as experiências humanas. Demonstre diferentes instrumentos para aferição do tempo.",
            habilidades: [
              { codigo: "EF06HIMOC06", descricao: "Conceituar tempo." },
              { codigo: "EF06HI01", descricao: "Identificar diferentes formas de compreensão da noção de tempo e de periodização dos processos históricos (continuidades e rupturas)." },
              { codigo: "EF06HIMOC07", descricao: "Discutir o processo de construção social do tempo e seus distintos significados de acordo com as sociedades." },
              { codigo: "EF06HIMOC08", descricao: "Identificar os diferentes tipos de instrumentos de aferição do tempo." },
            ],
          },
          {
            id: "6-1-3",
            titulo: "As origens da humanidade, seus deslocamentos e os processos de sedentarização",
            sugestaoMetodologica: "Desenvolver a compreensão de que as narrativas sobre as origens da humanidade não são únicas e nem neutras, mas resultam de diferentes formas de explicar o mundo, tanto científicas quanto míticas.",
            habilidades: [
              { codigo: "EF06HIMOC09", descricao: "Diferenciar História e Pré-história." },
              { codigo: "EF06HI03", descricao: "Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua historicidade e analisar os significados dos mitos de fundação." },
              { codigo: "EF06HI04", descricao: "Conhecer as teorias sobre a origem do homem americano." },
              { codigo: "EF06HI05", descricao: "Descrever modificações da natureza e da paisagem realizadas por diferentes tipos de sociedade, com destaque para os povos indígenas originários e povos africanos." },
            ],
          },
          {
            id: "6-1-4",
            titulo: "Povos originais e o povoamento do território americano",
            habilidades: [
              { codigo: "EF06HI06", descricao: "Identificar as rotas de povoamento no território americano." },
              { codigo: "EF06HIMOC10", descricao: "Compreender o modo de vida dos primeiros habitantes do território americano." },
            ],
          },
          {
            id: "6-1-5",
            titulo: "Povos da Antiguidade na África",
            sugestaoMetodologica: "Desenvolver a compreensão de que as sociedades antigas apresentaram organizações sociais, políticas, econômicas e culturais complexas.",
            habilidades: [
              { codigo: "EF06HI07", descricao: "Identificar aspectos e formas de registro das sociedades antigas na África, no Oriente Médio e nas Américas." },
              { codigo: "EF06HIMOC11", descricao: "Identificar e caracterizar os povos hebreus, fenícios e persas." },
              { codigo: "EF06HIMOC12", descricao: "Caracterizar o Egito Antigo, identificando aspectos sociais, culturais, políticos e econômicos." },
              { codigo: "EF06HIMOC13", descricao: "Caracterizar a Mesopotâmia, identificando os aspectos sociais, econômicos e políticos." },
              { codigo: "EF06HIMOC14", descricao: "Identificar, compreender e diferenciar os povos americanos pré-colombianos." },
              { codigo: "EF06HI08", descricao: "Identificar os espaços territoriais ocupados e os aportes culturais, científicos, sociais e econômicos dos astecas, maias e incas." },
            ],
          },
          {
            id: "6-1-6",
            titulo: "As diferentes formas de organização política na África",
            sugestaoMetodologica: "Promover a compreensão de que o continente africano possui trajetória marcada por formas diversas de organização.",
            habilidades: [
              { codigo: "EF06HIMOC15", descricao: "Compreender a importância histórica e política do continente africano." },
              { codigo: "EF06HIMOC16", descricao: "Conhecer os impérios africanos: Gana, Mali." },
              { codigo: "EF06HIMOC17", descricao: "Identificar as diferentes nações que compunham os povos africanos." },
              { codigo: "EF06HIMOC18", descricao: "Analisar o processo de formação política e econômica dos territórios no continente africano." },
            ],
          },
          {
            id: "6-1-7",
            titulo: "Os povos indígenas",
            sugestaoMetodologica: "Explore a pluralidade dos povos indígenas no território brasileiro, destacando hábitos, formas de organização social e ocupação do espaço.",
            habilidades: [
              { codigo: "EF06HIMOC19", descricao: "Conhecer os povos indígenas brasileiros." },
              { codigo: "EF06HIMOC20", descricao: "Analisar a importância histórica e cultural indígena na sociedade brasileira." },
              { codigo: "EF06HIMOC21", descricao: "Analisar as formas de organização territorial dos povos indígenas." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "6-2-1",
            titulo: "O Ocidente Clássico: aspectos da cultura na Grécia e em Roma",
            sugestaoMetodologica: "Articular a expansão territorial, o conceito de império, a importância das cidades como espaços de poder e as transformações provocadas pelo cristianismo.",
            habilidades: [
              { codigo: "EF06HI09", descricao: "Discutir o conceito de Antiguidade Clássica, seu alcance e limite na tradição ocidental." },
              { codigo: "EF06HIMOC22", descricao: "Discutir e diferenciar a noção de cidadania na Grécia e em Roma." },
              { codigo: "EF06HIMOC23", descricao: "Analisar o conceito de democracia na Antiguidade." },
              { codigo: "EF06HIMOC24", descricao: "Conhecer os aspectos culturais inerentes aos gregos e romanos." },
              { codigo: "EF06HIMOC25", descricao: "Compreender a importância da arte na sociedade grega e romana." },
            ],
          },
          {
            id: "6-2-2",
            titulo: "As noções de cidadania e política na Grécia e em Roma",
            habilidades: [
              { codigo: "EF06HI10", descricao: "Explicar a formação da Grécia, enfatizando a pólis e as transformações políticas, sociais e culturais." },
              { codigo: "EF06HI11", descricao: "Caracterizar a Roma Antiga e suas configurações sociais e políticas nos períodos monárquico e republicano." },
              { codigo: "EF06HI12", descricao: "Associar o conceito de cidadania a dinâmicas de inclusão e exclusão na Grécia e Roma antigas." },
              { codigo: "EF06HIMOC26", descricao: "Compreender a escravidão na Grécia e em Roma." },
              { codigo: "EF06HIMOC27", descricao: "Discutir o processo de formação e a importância das cidades na Grécia e em Roma." },
              { codigo: "EF06HIMOC28", descricao: "Identificar o papel do cristianismo nas mudanças políticas e culturais do Império Romano." },
            ],
          },
          {
            id: "6-2-3",
            titulo: "A passagem do mundo antigo para o mundo medieval",
            habilidades: [
              { codigo: "EF06HI14", descricao: "Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre populações em diferentes tempos e espaços." },
              { codigo: "EF06HIMOC29", descricao: "Perceber a participação dos povos bárbaros na crise que leva ao fim do Império Romano." },
              { codigo: "EF06HIMOC30", descricao: "Analisar os fatores que levaram à crise do Império Romano e como contribuíram para o Feudalismo." },
              { codigo: "EF06HIMOC31", descricao: "Caracterizar o processo de ruralização da economia." },
            ],
          },
          {
            id: "6-2-4",
            titulo: "A fragmentação do poder político na Idade Média",
            sugestaoMetodologica: "A fragmentação do poder em suas bases econômicas, sociais e políticas, explicitando suas dinâmicas internas, hierarquias e formas de poder.",
            habilidades: [
              { codigo: "EF06HIMOC32", descricao: "Conceituar o Feudalismo, identificando as principais características políticas, econômicas, sociais e culturais." },
              { codigo: "EF06HIMOC33", descricao: "Analisar o papel social da religião e das interações com os povos germânicos." },
            ],
          },
          {
            id: "6-2-5",
            titulo: "O Mediterrâneo como espaço de interação entre sociedades",
            sugestaoMetodologica: "Compreender como se davam as negociações de produtos, baseadas em trocas durante a Idade Média.",
            habilidades: [
              { codigo: "EF06HI15", descricao: "Descrever as dinâmicas de circulação de pessoas, produtos e culturas no Mediterrâneo e seu significado." },
              { codigo: "EF06HIMOC34", descricao: "Conhecer os diferentes produtos que circulavam nos mercados medievais." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "6-3-1",
            titulo: "Senhores e servos no mundo antigo e no medieval",
            habilidades: [
              { codigo: "EF06HI16", descricao: "Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida." },
              { codigo: "EF06HIMOC36", descricao: "Compreender a formação dos estamentos sociais no feudalismo." },
            ],
          },
          {
            id: "6-3-2",
            titulo: "Escravidão e trabalho livre em diferentes temporalidades e espaços",
            habilidades: [
              { codigo: "EF06HI17", descricao: "Diferenciar escravidão, servidão e trabalho livre no mundo antigo." },
              { codigo: "EF06HIMOC37", descricao: "Identificar e contextualizar formas de organização do trabalho." },
              { codigo: "EF06HIMOC38", descricao: "Analisar o papel da escravidão na organização econômica e social da Roma Antiga." },
              { codigo: "EF06HIMOC39", descricao: "Analisar o conceito de servidão e suas diferenças em relação à escravidão." },
              { codigo: "EF06HIMOC40", descricao: "Compreender o papel do trabalhador livre em diferentes momentos históricos." },
            ],
          },
          {
            id: "6-3-3",
            titulo: "Lógicas comerciais na Antiguidade romana e no mundo medieval",
            habilidades: [
              { codigo: "EF06HIMOC41", descricao: "Caracterizar o comércio medieval." },
            ],
          },
          {
            id: "6-3-4",
            titulo: "O papel da religião cristã, dos mosteiros e da cultura na Idade Média",
            habilidades: [
              { codigo: "EF06HI18", descricao: "Analisar o papel da religião cristã na cultura e nos modos de organização social no período medieval." },
              { codigo: "EF06HIMOC43", descricao: "Analisar a influência da religiosidade cristã nas relações sociais, culturais e políticas." },
              { codigo: "EF06HIMOC44", descricao: "Identificar o papel dos mosteiros, universidades e da arte religiosa na cultura medieval." },
            ],
          },
          {
            id: "6-3-5",
            titulo: "O papel da mulher na Grécia, em Roma e no período medieval",
            habilidades: [
              { codigo: "EF06HI19", descricao: "Descrever e analisar os diferentes papéis sociais das mulheres no mundo antigo e nas sociedades medievais." },
            ],
          },
        ],
      },
    ],
  },
  {
    ano: "7º Ano",
    trimestres: [
      {
        numero: 1,
        objetos: [
          {
            id: "7-1-1",
            titulo: "A construção da ideia de modernidade e seus impactos na concepção de História",
            sugestaoMetodologica: "Problematizar a modernidade como construção histórica, evitando sua compreensão como sinônimo automático de progresso.",
            habilidades: [
              { codigo: "EF07HI01", descricao: "Explicar o significado de 'modernidade' e suas lógicas de inclusão e exclusão." },
              { codigo: "EF07HIMOC01", descricao: "Analisar os impactos das transformações e modernização das sociedades ao longo da história." },
            ],
          },
          {
            id: "7-1-2",
            titulo: "Humanismos e Renascimentos",
            sugestaoMetodologica: "Identificar as principais características e significados, destacando a valorização da experiência, da razão e da investigação.",
            habilidades: [
              { codigo: "EF07HI04", descricao: "Identificar as principais características dos Humanismos e dos Renascimentos." },
              { codigo: "EF07HIMOC02", descricao: "Identificar como o humanismo contribuiu para mudanças nas formas de pensar a ciência." },
              { codigo: "EF07HIMOC03", descricao: "Debater a construção de uma mentalidade racional e o papel da imprensa." },
              { codigo: "EF07HIMOC04", descricao: "Reconhecer as diferenças do Renascimento entre os países europeus." },
              { codigo: "EF07HIMOC05", descricao: "Analisar as transformações culturais, sociais e intelectuais associadas ao Renascimento." },
            ],
          },
          {
            id: "7-1-3",
            titulo: "A formação e o funcionamento das monarquias europeias",
            habilidades: [
              { codigo: "EF07HI07", descricao: "Descrever os processos de formação e consolidação das monarquias." },
              { codigo: "EF07HIMOC07", descricao: "Analisar os fatores que contribuíram para a centralização do poder monárquico na Europa." },
              { codigo: "EF07HIMOC08", descricao: "Identificar as principais características dos Estados modernos absolutistas." },
              { codigo: "EF07HIMOC09", descricao: "Analisar a importância da centralização do poder real para a política europeia até o século XVIII." },
            ],
          },
          {
            id: "7-1-4",
            titulo: "Reformas religiosas: a cristandade fragmentada",
            habilidades: [
              { codigo: "EF07HI05", descricao: "Identificar e relacionar as vinculações entre as reformas religiosas e os processos culturais e sociais." },
              { codigo: "EF07HIMOC10", descricao: "Identificar os antecedentes da Reforma Protestante." },
              { codigo: "EF07HIMOC11", descricao: "Reconhecer as diferentes vertentes do protestantismo." },
              { codigo: "EF07HIMOC12", descricao: "Analisar os impactos da Reforma Protestante na Europa e no mundo." },
              { codigo: "EF07HIMOC13", descricao: "Elencar as causas da Contrarreforma e suas consequências." },
              { codigo: "EF07HIMOC14", descricao: "Relacionar a Reforma Protestante e a Contrarreforma ao contexto religioso atual." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "7-2-1",
            titulo: "A ideia de 'Novo Mundo' e a expansão marítima",
            sugestaoMetodologica: "Examinar a ideia de 'Novo Mundo' como uma formulação histórica vinculada à expansão marítima europeia.",
            habilidades: [
              { codigo: "EF07HI02", descricao: "Identificar conexões e interações entre as sociedades do Novo Mundo, da Europa, da África e da Ásia." },
              { codigo: "EF07HIMOC17", descricao: "Caracterizar os fatores que levaram à expansão marítima." },
              { codigo: "EF07HIMOC18", descricao: "Identificar e analisar os países pioneiros." },
              { codigo: "EF07HIMOC19", descricao: "Analisar os fatores do pioneirismo." },
              { codigo: "EF07HIMOC20", descricao: "Averiguar as consequências do processo expansionista." },
            ],
          },
          {
            id: "7-2-2",
            titulo: "Saberes dos povos africanos e pré-colombianos",
            habilidades: [
              { codigo: "EF07HI03", descricao: "Identificar aspectos e processos específicos das sociedades africanas e americanas antes da chegada dos europeus." },
              { codigo: "EF07HIMOC21", descricao: "Compreender o processo de formação das sociedades pré-colombianas." },
              { codigo: "EF07HIMOC22", descricao: "Analisar a importância da religiosidade para os povos pré-colombianos." },
            ],
          },
          {
            id: "7-2-3",
            titulo: "A conquista da América e as formas de organização política",
            habilidades: [
              { codigo: "EF07HI08", descricao: "Descrever as formas de organização das sociedades americanas no tempo da conquista." },
              { codigo: "EF07HI09", descricao: "Analisar os diferentes impactos da conquista europeia da América para as populações ameríndias." },
              { codigo: "EF07HIMOC25", descricao: "Identificar as diferenças e semelhanças dos processos de dominação colonial." },
              { codigo: "EF07HIMOC26", descricao: "Discutir o uso da violência como estratégia de dominação no processo de colonização." },
            ],
          },
          {
            id: "7-2-4",
            titulo: "A estruturação dos vice-reinos nas Américas",
            habilidades: [
              { codigo: "EF07HI10", descricao: "Analisar diferentes interpretações sobre as dinâmicas das sociedades americanas no período colonial." },
              { codigo: "EF07HIMOC27", descricao: "Caracterizar a política administrativa colonial na América Espanhola." },
              { codigo: "EF07HIMOC28", descricao: "Identificar as diferenças entre colonos e europeus." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "7-3-1",
            titulo: "Mercantilismo e a emergência do capitalismo",
            habilidades: [
              { codigo: "EF07HI13", descricao: "Caracterizar a ação dos europeus e suas lógicas mercantis." },
              { codigo: "EF07HI14", descricao: "Descrever as dinâmicas comerciais das sociedades situando o mercantilismo no contexto dos Estados modernos." },
              { codigo: "EF07HIMOC29", descricao: "Compreender a importância da política mercantilista como base do Absolutismo Monárquico." },
              { codigo: "EF07HI17", descricao: "Discutir a passagem do mercantilismo para o capitalismo." },
              { codigo: "EF07HIMOC30", descricao: "Analisar as transformações que levaram ao surgimento da burguesia." },
              { codigo: "EF07HIMOC31", descricao: "Caracterizar o capitalismo e compreender os meios de organização das sociedades." },
            ],
          },
          {
            id: "7-3-2",
            titulo: "A escravidão moderna e o tráfico de escravizados",
            habilidades: [
              { codigo: "EF07HI15", descricao: "Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo." },
              { codigo: "EF07HI16", descricao: "Analisar os mecanismos e as dinâmicas de comércio de escravizados." },
              { codigo: "EF07HIMOC32", descricao: "Identificar os elementos da cultura afro-brasileira que contribuíram para a formação do povo brasileiro." },
              { codigo: "EF07HIMOC33", descricao: "Analisar as relações de poder e formas de resistência nas sociedades escravistas." },
              { codigo: "EF07HIMOC34", descricao: "Conhecer os mecanismos de resistência dos povos africanos escravizados." },
            ],
          },
          {
            id: "7-3-3",
            titulo: "Resistências indígenas e as formas de organização das sociedades ameríndias",
            habilidades: [
              { codigo: "EF07HI11", descricao: "Analisar a formação histórico-geográfica do território da América portuguesa." },
              { codigo: "EF07HI12", descricao: "Identificar a distribuição territorial da população brasileira em diferentes épocas." },
              { codigo: "EF07HIMOC35", descricao: "Analisar o modo de vida das sociedades indígenas." },
              { codigo: "EF07HIMOC36", descricao: "Discutir as formas de resistência indígena à dominação portuguesa." },
              { codigo: "EF07HIMOC37", descricao: "Identificar as invasões estrangeiras durante a colonização portuguesa." },
            ],
          },
          {
            id: "7-3-4",
            titulo: "As lógicas internas das sociedades africanas",
            habilidades: [
              { codigo: "EF07HIMOC38", descricao: "Analisar os elementos que compunham as sociedades africanas: organização social, estrutura política." },
            ],
          },
        ],
      },
    ],
  },
  {
    ano: "8º Ano",
    trimestres: [
      {
        numero: 1,
        objetos: [
          {
            id: "8-1-1",
            titulo: "O mundo contemporâneo: o Antigo Regime em crise",
            sugestaoMetodologica: "Examinar a crise do Antigo Regime como processo multifacetado, articulando fatores econômicos, sociais e ideológicos.",
            habilidades: [
              { codigo: "EF08HI01", descricao: "Identificar os principais aspectos conceituais do iluminismo e do liberalismo e discutir a relação entre eles." },
              { codigo: "EF08HIMOC01", descricao: "Identificar os ideais iluministas e os principais pensadores do movimento." },
              { codigo: "EF08HIMOC02", descricao: "Analisar as propostas do despotismo esclarecido e suas relações com o iluminismo." },
              { codigo: "EF08HIMOC03", descricao: "Discutir a importância dos ideais iluministas para o mundo contemporâneo." },
            ],
          },
          {
            id: "8-1-2",
            titulo: "A Revolução Francesa e seus desdobramentos",
            habilidades: [
              { codigo: "EF08HI04", descricao: "Identificar e relacionar os processos da Revolução Francesa e seus desdobramentos na Europa e no mundo." },
              { codigo: "EF08HIMOC04", descricao: "Analisar as causas que levaram à Revolução Francesa." },
              { codigo: "EF08HIMOC05", descricao: "Compreender os acontecimentos decorrentes do desenrolar da Revolução Francesa." },
              { codigo: "EF08HIMOC06", descricao: "Analisar as consequências da Revolução Francesa para o mundo." },
            ],
          },
          {
            id: "8-1-3",
            titulo: "Revolução Industrial e o mundo do trabalho",
            habilidades: [
              { codigo: "EF08HI03", descricao: "Analisar os impactos da Revolução Industrial na produção e circulação de povos, produtos e culturas." },
              { codigo: "EF08HIMOC07", descricao: "Compreender a Revolução Industrial como processo de mudanças." },
              { codigo: "EF08HIMOC08", descricao: "Identificar e caracterizar os principais avanços tecnológicos." },
              { codigo: "EF08HIMOC09", descricao: "Analisar a urbanização europeia como consequência da industrialização." },
            ],
          },
          {
            id: "8-1-4",
            titulo: "Independência dos EUA e processos de independência na América Espanhola",
            habilidades: [
              { codigo: "EF08HI06", descricao: "Aplicar os conceitos de Estado, nação, território, governo e país para compreender conflitos." },
              { codigo: "EF08HI07", descricao: "Identificar e contextualizar as especificidades dos processos de independência nas Américas." },
              { codigo: "EF08HIMOC10", descricao: "Analisar os fatores que levaram à independência das 13 colônias inglesas." },
              { codigo: "EF08HIMOC11", descricao: "Explicar a Doutrina Monroe e seu impacto." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "8-2-1",
            titulo: "A colonização do Brasil e a interiorização",
            habilidades: [
              { codigo: "EF08HI12", descricao: "Caracterizar a organização política e social no Brasil desde a chegada da Corte portuguesa." },
              { codigo: "EF08HIMOC19", descricao: "Compreender a estrutura social e econômica da colônia." },
              { codigo: "EF08HIMOC20", descricao: "Identificar e analisar os movimentos de interiorização do Brasil Colônia." },
            ],
          },
          {
            id: "8-2-2",
            titulo: "O processo de independência do Brasil",
            habilidades: [
              { codigo: "EF08HI11", descricao: "Identificar e explicar os protagonismos e a atuação de diferentes grupos sociais na Independência." },
              { codigo: "EF08HIMOC27", descricao: "Analisar os fatores que levaram à transferência da Corte portuguesa para o Brasil." },
              { codigo: "EF08HIMOC28", descricao: "Analisar a revolução de 1817." },
              { codigo: "EF08HIMOC30", descricao: "Discutir a proclamação da Independência enquanto arranjo político." },
            ],
          },
          {
            id: "8-2-3",
            titulo: "Brasil: Primeiro Reinado",
            habilidades: [
              { codigo: "EF08HIMOC31", descricao: "Analisar as características do governo de D. Pedro I." },
              { codigo: "EF08HIMOC32", descricao: "Discutir a ambiência política do Primeiro Reinado e a Confederação do Equador." },
            ],
          },
          {
            id: "8-2-4",
            titulo: "O Período Regencial e as contestações ao poder central",
            habilidades: [
              { codigo: "EF08HI16", descricao: "Identificar, comparar e analisar a diversidade política, social e regional nas rebeliões regenciais." },
              { codigo: "EF08HIMOC35", descricao: "Caracterizar e distinguir os governos regenciais." },
              { codigo: "EF08HIMOC36", descricao: "Interpretar a importância do Ato Adicional." },
              { codigo: "EF08HIMOC37", descricao: "Discutir e caracterizar as revoltas regenciais." },
              { codigo: "EF08HIMOC38", descricao: "Analisar os processos que conduziram ao golpe da maioridade." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "8-3-1",
            titulo: "O Brasil do Segundo Reinado: política e economia",
            habilidades: [
              { codigo: "EF08HI15", descricao: "Identificar e analisar os sujeitos envolvidos nas disputas políticas do Primeiro e Segundo Reinado." },
              { codigo: "EF08HI17", descricao: "Relacionar as transformações territoriais com as tensões e conflitos durante o Império." },
              { codigo: "EF08HIMOC39", descricao: "Avaliar as primeiras ações de Pedro II e a alternância política entre partidos." },
              { codigo: "EF08HIMOC40", descricao: "Conhecer as leis Eusébio de Queiroz e Bill Aberdeen." },
              { codigo: "EF08HIMOC41", descricao: "Analisar a situação do Brasil e do Paraguai após o conflito." },
              { codigo: "EF08HIMOC43", descricao: "Conhecer o movimento abolicionista e as leis antiescravidão." },
              { codigo: "EF08HIMOC45", descricao: "Compreender o desenvolvimento da lavoura cafeeira." },
              { codigo: "EF08HIMOC46", descricao: "Analisar o processo de imigração para o Brasil no século XIX." },
            ],
          },
          {
            id: "8-3-2",
            titulo: "Nacionalismo, revoluções e as novas nações europeias",
            habilidades: [
              { codigo: "EF08HIMOC50", descricao: "Compreender como as ideias liberais influenciaram a política europeia do século XIX." },
              { codigo: "EF08HIMOC51", descricao: "Compreender o nacionalismo e os processos de unificação nacionais." },
              { codigo: "EF08HIMOC52", descricao: "Caracterizar a revolução francesa de 1830." },
              { codigo: "EF08HIMOC53", descricao: "Identificar os ideais da Primavera dos Povos e da Revolução de 1848." },
              { codigo: "EF08HIMOC54", descricao: "Conceituar e caracterizar o socialismo." },
              { codigo: "EF08HIMOC55", descricao: "Analisar as principais características do anarquismo." },
              { codigo: "EF08HIMOC56", descricao: "Conhecer a Comuna de Paris e sua importância histórica." },
            ],
          },
          {
            id: "8-3-3",
            titulo: "O imperialismo europeu e a partilha da África e da Ásia",
            habilidades: [
              { codigo: "EF08HI23", descricao: "Estabelecer relações causais entre as ideologias raciais e o imperialismo europeu." },
              { codigo: "EF08HI24", descricao: "Reconhecer os principais produtos procedentes do continente africano durante o imperialismo." },
              { codigo: "EF08HI26", descricao: "Identificar o protagonismo das populações locais na resistência ao imperialismo." },
              { codigo: "EF08HIMOC58", descricao: "Analisar o desenvolvimento industrial das nações europeias no século XIX." },
              { codigo: "EF08HIMOC59", descricao: "Conceituar o Imperialismo." },
              { codigo: "EF08HIMOC60", descricao: "Identificar os elementos que justificaram a expansão europeia." },
            ],
          },
        ],
      },
    ],
  },
  {
    ano: "9º Ano",
    trimestres: [
      {
        numero: 1,
        objetos: [
          {
            id: "9-1-1",
            titulo: "Experiências republicanas e práticas autoritárias",
            sugestaoMetodologica: "Compreender a emergência da República no Brasil como experiência marcada por disputas políticas, tensões sociais, violência e autoritarismo.",
            habilidades: [
              { codigo: "EF09HI01", descricao: "Descrever e contextualizar os principais aspectos sociais, culturais, econômicos e políticos da emergência da República." },
              { codigo: "EF09HI02", descricao: "Caracterizar e compreender os ciclos da história republicana." },
              { codigo: "EF09HIMOC01", descricao: "Identificar e caracterizar os movimentos revoltosos urbanos, messiânicos e o banditismo social." },
              { codigo: "EF09HI03", descricao: "Identificar os mecanismos de inserção dos negros na sociedade brasileira pós-abolição." },
              { codigo: "EF09HI04", descricao: "Discutir a importância da participação da população negra na formação do Brasil." },
            ],
          },
          {
            id: "9-1-2",
            titulo: "Primeira República e suas características",
            habilidades: [
              { codigo: "EF09HIMOC04", descricao: "Compreender o enfraquecimento do governo imperial e a ascensão das ideias republicanas." },
              { codigo: "EF09HIMOC05", descricao: "Identificar o contexto do fortalecimento dos militares na Primeira República." },
            ],
          },
          {
            id: "9-1-3",
            titulo: "A Primeira Guerra Mundial e seus desdobramentos",
            habilidades: [
              { codigo: "EF09HI10", descricao: "Identificar e relacionar as dinâmicas do capitalismo e suas crises, os grandes conflitos mundiais e os conflitos vivenciados na Europa." },
              { codigo: "EF09HIMOC11", descricao: "Analisar as causas e consequências da Primeira Guerra Mundial." },
            ],
          },
          {
            id: "9-1-4",
            titulo: "A Revolução Russa e a crise capitalista de 1929",
            habilidades: [
              { codigo: "EF09HI11", descricao: "Identificar as especificidades e os desdobramentos mundiais da Revolução Russa." },
              { codigo: "EF09HIMOC14", descricao: "Analisar o contexto da Revolução Russa." },
              { codigo: "EF09HIMOC16", descricao: "Conhecer e analisar os desdobramentos da Crise de 1929." },
            ],
          },
          {
            id: "9-1-5",
            titulo: "A emergência do fascismo e do nazismo",
            habilidades: [
              { codigo: "EF09HI12", descricao: "Analisar a crise capitalista de 1929 e seus desdobramentos em relação à economia global." },
              { codigo: "EF09HIMOC17", descricao: "Analisar como se deu a emergência dos regimes totalitários europeus." },
              { codigo: "EF09HIMOC18", descricao: "Compreender o Fascismo e o Nazismo." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "9-2-1",
            titulo: "A Era Vargas e as práticas trabalhistas",
            habilidades: [
              { codigo: "EF09HI06", descricao: "Identificar e discutir o papel do trabalhismo como força política e social no Brasil." },
              { codigo: "EF09HIMOC06", descricao: "Compreender a ascensão de Vargas ao poder." },
              { codigo: "EF09HIMOC07", descricao: "Conhecer a Revolução Constitucionalista de 1932." },
              { codigo: "EF09HIMOC08", descricao: "Analisar a importância das leis trabalhistas." },
              { codigo: "EF09HIMOC09", descricao: "Interpretar o Estado Novo de Vargas." },
            ],
          },
          {
            id: "9-2-2",
            titulo: "A Segunda Guerra Mundial e o Holocausto",
            habilidades: [
              { codigo: "EF09HI13", descricao: "Descrever e contextualizar os processos da emergência do fascismo e do nazismo, a Segunda Guerra Mundial e o Holocausto." },
              { codigo: "EF09HIMOC19", descricao: "Analisar as causas que levaram à eclosão da Segunda Guerra Mundial." },
              { codigo: "EF09HIMOC20", descricao: "Compreender o Holocausto e suas consequências." },
              { codigo: "EF09HIMOC21", descricao: "Identificar as consequências da Segunda Guerra Mundial." },
            ],
          },
          {
            id: "9-2-3",
            titulo: "A Guerra Fria e a bipolarização mundial",
            habilidades: [
              { codigo: "EF09HIMOC22", descricao: "Conceituar e contextualizar a Guerra Fria." },
              { codigo: "EF09HIMOC23", descricao: "Compreender o contexto de criação da ONU." },
              { codigo: "EF09HIMOC24", descricao: "Identificar as guerras e conflitos decorrentes da Guerra Fria." },
            ],
          },
          {
            id: "9-2-4",
            titulo: "O colonialismo na África e os processos de descolonização",
            habilidades: [
              { codigo: "EF09HI14", descricao: "Caracterizar e discutir as dinâmicas do colonialismo no continente africano e asiático." },
              { codigo: "EF09HI31", descricao: "Descrever e avaliar os processos de descolonização na África e na Ásia." },
              { codigo: "EF09HIMOC41", descricao: "Reconhecer a importância da Conferência de Bandung." },
              { codigo: "EF09HIMOC42", descricao: "Analisar os processos de independência das nações afro-asiáticas." },
            ],
          },
          {
            id: "9-2-5",
            titulo: "As experiências ditatoriais na América Latina",
            habilidades: [
              { codigo: "EF09HI29", descricao: "Descrever e analisar as experiências ditatoriais na América Latina." },
              { codigo: "EF09HI30", descricao: "Comparar as características dos regimes ditatoriais latino-americanos." },
              { codigo: "EF09HIMOC43", descricao: "Comparar ditaduras latino-americanas com a ditadura civil-militar brasileira." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "9-3-1",
            titulo: "O Brasil da era JK e o ideal de modernização",
            habilidades: [
              { codigo: "EF09HI17", descricao: "Identificar e analisar processos sociais, econômicos, culturais e políticos do Brasil a partir de 1946." },
              { codigo: "EF09HI18", descricao: "Descrever e analisar as relações entre as transformações urbanas e seus impactos na cultura brasileira." },
              { codigo: "EF09HIMOC45", descricao: "Analisar as políticas desenvolvimentistas do governo JK." },
              { codigo: "EF09HIMOC46", descricao: "Compreender a importância das manifestações culturais como formas de manifestação política." },
            ],
          },
          {
            id: "9-3-2",
            titulo: "A ditadura civil-militar e os processos de resistência",
            habilidades: [
              { codigo: "EF09HI19", descricao: "Identificar e compreender o processo que resultou na ditadura civil-militar no Brasil." },
              { codigo: "EF09HI20", descricao: "Discutir os processos de resistência e as propostas de reorganização da sociedade brasileira." },
            ],
          },
          {
            id: "9-3-3",
            titulo: "O processo de redemocratização e a Constituição de 1988",
            habilidades: [
              { codigo: "EF09HI21", descricao: "Identificar e relacionar as demandas indígenas e quilombolas como forma de contestação ao modelo desenvolvimentista." },
              { codigo: "EF09HI22", descricao: "Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988." },
            ],
          },
          {
            id: "9-3-4",
            titulo: "A história recente do Brasil: de 1989 aos dias atuais",
            habilidades: [
              { codigo: "EF09HIMOC50", descricao: "Debater a importância do Plano Real para a estabilização da economia brasileira." },
              { codigo: "EF09HIMOC51", descricao: "Explicar as políticas dos governos FHC." },
              { codigo: "EF09HIMOC52", descricao: "Discutir o governo Lula e a ampliação de políticas públicas." },
              { codigo: "EF09HIMOC53", descricao: "Analisar as Jornadas de 2013." },
              { codigo: "EF09HIMOC55", descricao: "Analisar o papel das redes sociais na eleição de 2018." },
            ],
          },
          {
            id: "9-3-5",
            titulo: "O fim da Guerra Fria e o processo de globalização",
            habilidades: [
              { codigo: "EF09HI32", descricao: "Analisar mudanças e permanências associadas ao processo de globalização." },
              { codigo: "EF09HI33", descricao: "Analisar as transformações geradas pelo desenvolvimento das tecnologias digitais." },
              { codigo: "EF09HIMOC44", descricao: "Interpretar os significados simbólicos do fim da URSS." },
            ],
          },
          {
            id: "9-3-6",
            titulo: "Os conflitos do século XXI e a questão do terrorismo",
            habilidades: [
              { codigo: "EF09HIMOC58", descricao: "Identificar a importância das ondas migratórias para o acirramento dos nacionalismos." },
              { codigo: "EF09HIMOC59", descricao: "Debater as ações terroristas como resposta ao acirramento dos ânimos políticos." },
              { codigo: "EF09HI36", descricao: "Identificar e discutir as diversidades identitárias e seus significados históricos no início do século XXI." },
            ],
          },
        ],
      },
    ],
  },
];
