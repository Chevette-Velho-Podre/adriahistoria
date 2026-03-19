export interface Habilidade {
  codigo: string;
  descricao: string;
}

export interface ObjetoConhecimento {
  id: string;
  titulo: string;
  subtopicos?: string[];
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
            titulo: "Formas de registro da história e da produção do conhecimento histórico (HTEF)",
            subtopicos: [
              "A função social da História.",
              "Fontes históricas e sua importância.",
            ],
            sugestaoMetodologica: "Desenvolver a ideia de que História não é \"coisa do passado\", mas uma interpretação construída a partir de vestígios. Comece com um problema concreto, a ser discutido, para o qual deve ser elaborada uma solução.",
            habilidades: [
              { codigo: "EF06HIMOC01", descricao: "Elaborar conceito de História." },
              { codigo: "EF06HIMOC02", descricao: "Compreender a função social História." },
              { codigo: "EF06HIMOC03", descricao: "Elaborar conceito sobre fontes históricas." },
              { codigo: "EF06HIMOC04", descricao: "Identificar os tipos de fontes históricas." },
              { codigo: "EF06HIMOC05", descricao: "Reconhecer a importância das fontes históricas para a formação do conhecimento histórico." },
              { codigo: "EF06HI02", descricao: "Identificar a gênese da produção do saber histórico e analisar o significado das fontes que originaram determinadas formas de registro em sociedades e épocas distintas." },
            ],
          },
          {
            id: "6-1-2",
            titulo: "A questão do tempo, sincronias e diacronias: reflexões sobre o sentido das cronologias (HTEF)",
            subtopicos: [
              "A construção social do tempo.",
              "Unidades de medida do tempo.",
              "Instrumentos de aferição.",
            ],
            sugestaoMetodologica: "Trabalhar a ideia de que o tempo é uma construção social, referência para organizar e sistematizar as experiências humanas. Demonstre diferentes instrumentos para aferição do tempo, enfatizando o aspecto do controle social (datas e prazos, registros de entrada e saída etc).",
            habilidades: [
              { codigo: "EF06HIMOC06", descricao: "Conceituar tempo." },
              { codigo: "EF06HI01", descricao: "Identificar diferentes formas de compreensão da noção de tempo e de periodização dos processos históricos (continuidades e rupturas)." },
              { codigo: "EF06HIMOC07", descricao: "Discutir o processo de construção social do tempo e seus distintos significados de acordo com as sociedades." },
              { codigo: "EF06HIMOC08", descricao: "Identificar os diferentes tipos de instrumentos de aferição do tempo." },
            ],
          },
          {
            id: "6-1-3",
            titulo: "As origens da humanidade, seus deslocamentos e os processos de sedentarização (HTEF)",
            subtopicos: [
              "História e Pré-história.",
              "Criacionismo X Evolucionismo.",
              "A origem do homem americano.",
              "Os povos originais e o povoamento do território americano.",
            ],
            sugestaoMetodologica: "Desenvolver a compreensão de que as narrativas sobre as origens da humanidade não são únicas e nem neutras, mas resultam de diferentes formas de explicar o mundo, tanto científicas quanto míticas. A partir disso, introduza hipóteses sobre o surgimento da espécie humana, as teorias acerca da origem do homem americano e as rotas de povoamento do continente, enfatizando deslocamentos, adaptações e processos de sedentarização.",
            habilidades: [
              { codigo: "EF06HIMOC09", descricao: "Diferenciar História e Pré-história." },
              { codigo: "EF06HI03", descricao: "Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua historicidade e analisar os significados dos mitos de fundação." },
              { codigo: "EF06HI04", descricao: "Conhecer as teorias sobre a origem do homem americano." },
              { codigo: "EF06HI05", descricao: "Descrever modificações da natureza e da paisagem realizadas por diferentes tipos de sociedade, com destaque para os povos indígenas originários e povos africanos, e discutir a natureza e a lógica das transformações ocorridas." },
              { codigo: "EF06HI06", descricao: "Identificar as rotas de povoamento no território americano." },
              { codigo: "EF06HIMOC10", descricao: "Compreender o modo de vida dos primeiros habitantes do território americano." },
            ],
          },
          {
            id: "6-1-4",
            titulo: "Povos da Antiguidade na África (egípcios), no Oriente Médio (mesopotâmicos) e nas Américas (pré-colombianos) (HMCS)",
            subtopicos: [
              "Hebreus, Fenícios e Persas.",
              "Os egípcios e povos africanos.",
              "A mesopotâmia.",
              "Povos pré-colombianos: astecas, maias e incas.",
            ],
            sugestaoMetodologica: "Desenvolver a compreensão de que as sociedades antigas apresentaram organizações sociais, políticas, econômicas e culturais complexas. Parta do problema sobre por que algumas civilizações são mais lembradas que outras e realize uma análise comparativa entre Egito, Mesopotâmia e povos pré-colombianos, destacando formas de registro, cultura material, poder, trabalho e produção de conhecimentos, evidenciando que cada sociedade criou soluções próprias para desafios semelhantes.",
            habilidades: [
              { codigo: "EF06HI07", descricao: "Identificar aspectos e formas de registro das sociedades antigas na África, no Oriente Médio e nas Américas, distinguindo alguns significados presentes na cultura material e na tradição oral dessas sociedades." },
              { codigo: "EF06HIMOC11", descricao: "Identificar e caraterizar os povos hebreus, fenícios e persas, analisando suas peculiaridades e importância para a história da humanidade." },
              { codigo: "EF06HIMOC12", descricao: "Caracterizar o Egito Antigo, identificando aspectos sociais, culturais, políticos e econômicos." },
              { codigo: "EF06HIMOC13", descricao: "Caracterizar a Mesopotâmia, identificando os aspectos sociais, econômicos e políticos." },
              { codigo: "EF06HIMOC14", descricao: "Identificar, compreender e diferenciar os povos americanos pré-colombianos." },
              { codigo: "EF06HI08", descricao: "Identificar os espaços territoriais ocupados e os aportes culturais, científicos, sociais e econômicos dos astecas, maias e incas e dos povos indígenas de diversas regiões brasileiras." },
            ],
          },
          {
            id: "6-1-5",
            titulo: "As diferentes formas de organização política na África: reinos, impérios, cidades-estados e sociedades linhageiras ou aldeias (HLOP)",
            subtopicos: [
              "Os impérios africanos.",
              "As nações.",
              "A organização política.",
            ],
            sugestaoMetodologica: "Promover a compreensão de que o continente africano possui trajetória marcada por formas diversas de organização. Explore a existência de reinos e impérios, enfatizando estruturas de poder, econômicas e sociais. A abordagem deve problematizar estereótipos e evidenciar a diversidade de identidades, reforçando a importância do continente para a história da humanidade.",
            habilidades: [
              { codigo: "EF06HIMOC15", descricao: "Compreender a importância histórica e política do continente africano." },
              { codigo: "EF06HIMOC16", descricao: "Conhecer os impérios africanos: Gana, Mali." },
              { codigo: "EF06HIMOC17", descricao: "Identificar as diferentes e nações que compunham os povos africanos." },
              { codigo: "EF06HIMOC18", descricao: "Analisar o processo de formação política e econômica dos territórios no continente africano." },
            ],
          },
          {
            id: "6-1-6",
            titulo: "Os povos indígenas originários do atual território brasileiro e seus hábitos culturais e sociais (HMCS)",
            subtopicos: [
              "Povos indígenas brasileiros.",
              "A importância e influência da cultura indígena.",
              "Territórios e ocupação do solo pelos povos indígenas.",
            ],
            sugestaoMetodologica: "Problematizar a ideia de que os povos indígenas pertencem apenas ao passado, evidenciando sua presença histórica, contemporânea e a diversidade de seus modos de vida. Explore a pluralidade dos povos indígenas no território brasileiro, destacando hábitos, formas de organização social e ocupação do espaço. A abordagem deve enfatizar os aportes culturais, sociais e tecnológicos, além de analisar as transformações provocadas pela colonização, as disputas territoriais e a lógica das reservas indígenas, reforçando o protagonismo indígena na história do Brasil.",
            habilidades: [
              { codigo: "EF06HI08", descricao: "Identificar os espaços territoriais ocupados e os aportes culturais, científicos, sociais e econômicos dos astecas, maias e incas e dos povos indígenas de diversas regiões brasileiras." },
              { codigo: "EF06HIMOC19", descricao: "Conhecer os povos indígenas brasileiros." },
              { codigo: "EF06HIMOC20", descricao: "Analisar a importância histórica e cultural indígena na sociedade brasileira." },
              { codigo: "EF06HIMOC21", descricao: "Analisar as formas de organização territorial dos povos indígenas, as transformações decorrentes da colonização e a criação das reservas indígenas no Brasil." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "6-2-1",
            titulo: "O Ocidente Clássico: aspectos da cultura na Grécia e em Roma (HMCS)",
            subtopicos: [
              "A Antiguidade Clássica.",
              "O conceito de cidadania na Grécia e em Roma.",
              "A democracia.",
              "Arte, Cultura e religiosidade.",
            ],
            sugestaoMetodologica: "Examinar os conceitos de cidadania e democracia, na Grécia e Roma, de modo a explicitar suas características e implicações nas formas de organização social e política dessas sociedades. A abordagem deve privilegiar a comparação, evitando anacronismos, de modo a evidenciar que tais noções não são universais, mas categorias historicamente situadas, cujos significados se transformaram ao longo do tempo até a contemporaneidade.",
            habilidades: [
              { codigo: "EF06HI09", descricao: "Discutir o conceito de Antiguidade Clássica, seu alcance e limite na tradição ocidental, assim como os impactos sobre outras sociedades e culturas." },
              { codigo: "EF06HIMOC22", descricao: "Discutir e diferenciar a noção de cidadania na Grécia e em Roma." },
              { codigo: "EF06HIMOC23", descricao: "Analisar o conceito de democracia na Antiguidade." },
              { codigo: "EF06HIMOC24", descricao: "Conhecer os aspectos culturais inerentes aos gregos e romanos, diferenciando-os." },
              { codigo: "EF06HIMOC25", descricao: "Compreender a importância da arte na sociedade grega e romana." },
            ],
          },
          {
            id: "6-2-2",
            titulo: "As noções de cidadania e política na Grécia e em Roma (HLOP)",
            subtopicos: [
              "Domínios e expansão das culturas grega e romana.",
              "Significados do conceito de \"império\" e as lógicas de conquista, conflito e negociação dessa forma de organização política.",
              "As cidades.",
              "A organização política.",
              "A cidadania.",
              "A pólis grega.",
              "As fases de Roma.",
              "O cristianismo.",
            ],
            sugestaoMetodologica: "Analisar as noções de cidadania e organização política na Grécia e em Roma como construções históricas marcadas por disputas, limites e exclusões. Explore a formação da pólis grega, as estruturas políticas e sociais romanas, as dinâmicas de inclusão e exclusão, e o papel central da escravidão nessas sociedades. A abordagem deve articular a expansão territorial, o conceito de império, a importância das cidades como espaços de poder e as transformações provocadas pelo cristianismo.",
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
            titulo: "A passagem do mundo antigo para o mundo medieval (HLOP) / A fragmentação do poder político na Idade Média (HLOP)",
            subtopicos: [
              "A transição entre o mundo antigo e a Idade Média.",
              "Os povos bárbaros.",
              "As invasões bárbaras.",
              "A crise do Império Romano.",
              "A fragmentação do poder real.",
              "O feudalismo.",
              "As cruzadas.",
            ],
            sugestaoMetodologica: "Desenvolver o conceito de \"transição\" como ferramenta para compreender as transformações ocorridas entre o final do mundo romano e a formação das estruturas medievais. A abordagem deve articular a crise do Império Romano, os arranjos políticos e territoriais e as interações com os povos germânicos, evitando explicações baseadas em ruptura abrupta ou colapso homogêneo. A partir desse cenário, analisar a sociedade feudal em suas bases econômicas, sociais e políticas, explicitando suas dinâmicas internas, hierarquias e formas de poder. Na análise da religião, privilegiar uma leitura que a compreenda como instituição central na produção de valores e práticas sociais, evitando reducionismos.",
            habilidades: [
              { codigo: "EF06HI14", descricao: "Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre populações em diferentes tempos e espaços." },
              { codigo: "EF06HIMOC29", descricao: "Perceber a participação dos povos bárbaros na ocorrência da crise que leva ao fim do Império Romano." },
              { codigo: "EF06HIMOC30", descricao: "Analisar os fatores que levaram à crise do Império Romano e como estes contribuíram para o Feudalismo." },
              { codigo: "EF06HIMOC31", descricao: "Caracterizar o processo de ruralização da economia e a importância histórica desse fenômeno." },
              { codigo: "EF06HIMOC32", descricao: "Conceituar o Feudalismo, identificando as principais características políticas, econômicas, sociais e culturais." },
              { codigo: "EF06HIMOC33", descricao: "Analisar o papel social da religião e das cruzadas durante a Idade Média." },
            ],
          },
          {
            id: "6-2-4",
            titulo: "O Mediterrâneo como espaço de interação entre as sociedades da Europa, da África e do Oriente Médio (HLOP)",
            subtopicos: [
              "A circulação de produtos nos mercados medievais.",
              "Os tipos de produtos.",
              "As trocas.",
            ],
            sugestaoMetodologica: "Compreender o Mediterrâneo medieval como um espaço de circulação e interação entre sociedades, desmistificando a ideia de isolamento ou estagnação econômica no período. A abordagem deve enfatizar as dinâmicas de deslocamento de pessoas, mercadorias e práticas culturais, destacando a diversidade de produtos comercializados, como especiarias e matérias-primas, e seus significados econômicos e sociais. A análise precisa evidenciar as lógicas de troca, negociação e relacionamentos entre regiões, reforçando a importância do Mediterrâneo e seu papel estruturante nas relações comerciais e culturais da Idade Média.",
            habilidades: [
              { codigo: "EF06HI15", descricao: "Descrever as dinâmicas de circulação de pessoas, produtos e culturas no Mediterrâneo e seu significado." },
              { codigo: "EF06HIMOC34", descricao: "Conhecer os diferentes produtos que circulavam nos mercados medievais: gengibre, algodão, pimenta etc." },
              { codigo: "EF06HIMOC35", descricao: "Compreender como se davam as negociações de produtos, baseadas em trocas durante a Idade Média." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "6-3-1",
            titulo: "Senhores e servos no mundo antigo e no medieval (HTSC)",
            subtopicos: [
              "Suserania e vassalagem.",
              "Os estamentos.",
            ],
            sugestaoMetodologica: "Analisar as relações entre senhores e servos como formas históricas de organização do trabalho, do poder e da hierarquia social, evitando leituras simplistas dessas estruturas. A abordagem deve explorar os vínculos de suserania e vassalagem como formas de articulação política e social, bem como a estrutura rígida dos estamentos no feudalismo enquanto ordenação e legitimação de desigualdades. A análise precisa enfatizar que tais relações expressam contextos históricos específicos, evidenciando as lógicas de dependência, obrigações e manutenção da ordem social.",
            habilidades: [
              { codigo: "EF06HI16", descricao: "Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos." },
              { codigo: "EF06HIMOC36", descricao: "Compreender como se dava a formação dos estamentos sociais no feudalismo, e sua importância para a manutenção da ordem social estabelecida." },
            ],
          },
          {
            id: "6-3-2",
            titulo: "Escravidão e trabalho livre em diferentes temporalidades e espaços (Roma Antiga, Europa medieval e África) (HLOP)",
            subtopicos: [
              "A escravidão no continente africano.",
              "A escravidão em Roma.",
              "A servidão medieval.",
              "O trabalho livre.",
            ],
            sugestaoMetodologica: "Diferenciar escravidão, servidão e trabalho livre como formas de organização do trabalho. A abordagem deve examinar a escravidão em Roma e no continente africano a partir de suas lógicas específicas, bem como analisar a servidão medieval em suas diferenças quanto à escravidão. A análise deve evidenciar que tais regimes de trabalho respondem a contextos históricos específicos, destacando o papel e as condições do trabalhador livre em diferentes temporalidades, reforçando a variedade das relações de trabalho.",
            habilidades: [
              { codigo: "EF06HI17", descricao: "Diferenciar escravidão, servidão e trabalho livre no mundo antigo." },
              { codigo: "EF06HIMOC37", descricao: "Identificar e contextualizar formas de escravização em sociedades africanas." },
              { codigo: "EF06HIMOC38", descricao: "Analisar o papel da escravidão na organização econômica e social da Roma Antiga." },
              { codigo: "EF06HIMOC39", descricao: "Analisar o conceito de servidão e suas diferenças em relação à escravidão." },
              { codigo: "EF06HIMOC40", descricao: "Compreender o papel do trabalhador livre em diferentes momentos históricos." },
            ],
          },
          {
            id: "6-3-3",
            titulo: "Lógicas comerciais na Antiguidade romana e no mundo medieval (HLOP)",
            subtopicos: [
              "O comércio medieval.",
              "As feiras.",
            ],
            sugestaoMetodologica: "Examinar a economia medieval com ênfase nas dinâmicas comerciais e na importância das feiras como espaços de circulação, negociação e articulação econômica. A abordagem deve evidenciar que as práticas comerciais assumem configurações distintas no tempo e no espaço, condicionadas pelos contextos, e que as trocas não se restringem à mediação monetária, podendo operar por variados instrumentos de troca.",
            habilidades: [
              { codigo: "EF06HIMOC41", descricao: "Caracterizar o comércio medieval." },
              { codigo: "EF06HIMOC42", descricao: "Compreender a importância das feiras para a manutenção da existência de atividades comerciais." },
            ],
          },
          {
            id: "6-3-4",
            titulo: "O papel da religião cristã, dos mosteiros e da cultura na Idade Média (HLOP)",
            subtopicos: [
              "O cristianismo.",
              "A religião como mecanismo de controle social.",
              "A cultura medieval.",
            ],
            sugestaoMetodologica: "Analisar o papel do cristianismo na configuração das estruturas sociais, políticas e culturais medievais, considerando sua atuação para a produção de valores, normas e formas de organização da vida. A abordagem deve examinar o papel dos mosteiros, das universidades e da arte como espaços de elaboração e difusão cultural, bem como as funções da religião no período. A análise precisa evidenciar a complexidade da cultura medieval e suas dinâmicas de legitimação, sociabilidade e produção de saberes.",
            habilidades: [
              { codigo: "EF06HI18", descricao: "Analisar o papel da religião cristã na cultura e nos modos de organização social no período medieval." },
              { codigo: "EF06HIMOC43", descricao: "Analisar a influência da religiosidade cristã nas relações sociais, culturais e políticas da sociedade medieval." },
              { codigo: "EF06HIMOC44", descricao: "Identificar o papel dos mosteiros, universidades e da arte religiosa na cultura medieval." },
            ],
          },
          {
            id: "6-3-5",
            titulo: "O papel da mulher na Grécia e em Roma, e no período medieval (HLOP)",
            subtopicos: [
              "A mulher na sociedade grega e na sociedade romana.",
              "O papel social das mulheres no período medieval.",
            ],
            sugestaoMetodologica: "Analisar os papéis sociais atribuídos às mulheres na Grécia, em Roma e no período medieval como construções históricas vinculadas às estruturas sociais, políticas e culturais de cada contexto. A abordagem deve evidenciar diferenças, permanências e limites dessas posições sociais, evitando generalizações ou projeções de valores contemporâneos. A análise precisa enfatizar que as experiências femininas foram condicionadas por fatores como status e organização das relações de poder, reforçando a historicidade das relações de gênero.",
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
            titulo: "A construção da ideia de modernidade e seus impactos na concepção de História (HMCS)",
            subtopicos: [
              "A ideia de modernidade na história.",
              "Os diferentes contextos de modernidade.",
            ],
            sugestaoMetodologica: "Problematizar a modernidade como construção histórica, evitando sua compreensão como sinônimo automático de progresso. Como estratégia didática, pode-se analisar situações concretas e/ou transformações em diferentes sociedades e épocas, de modo a explicitar que processos de modernização não são universais. A atividade pode ser estruturada a partir de questões orientadoras, como \"O que significa ser 'moderno' em diferentes momentos históricos?\", levando os estudantes a identificar permanências, rupturas e os significados atribuídos à ideia de \"ser moderno\" em cada contexto.",
            habilidades: [
              { codigo: "EF07HI01", descricao: "Explicar o significado de \"modernidade\" e suas lógicas de inclusão e exclusão, com base em uma concepção europeia." },
              { codigo: "EF07HIMOC01", descricao: "Analisar os impactos das transformações e modernização das sociedades ao longo da história." },
            ],
          },
          {
            id: "7-1-2",
            titulo: "Humanismos: uma nova visão de ser humano e de mundo (HRNM)",
            subtopicos: [
              "Contexto histórico.",
              "O pensamento humanista e científico.",
            ],
            sugestaoMetodologica: "Examinar os Humanismos como expressão de transformações intelectuais e culturais que redefiniram o conhecimento e o mundo, situando-os em seu contexto. A abordagem deve identificar suas principais características e significados, destacando a valorização da experiência, da razão e da investigação, bem como suas implicações nas formas de pensar a ciência e o saber. A análise precisa abordar o surgimento do racionalismo, problematizando as mudanças nas dinâmicas do período.",
            habilidades: [
              { codigo: "EF07HI04", descricao: "Identificar as principais características dos Humanismos e dos Renascimentos e analisar seus significados." },
              { codigo: "EF07HIMOC02", descricao: "Identificar como o humanismo contribuiu para mudanças nas formas de pensar a ciência e o conhecimento." },
              { codigo: "EF07HIMOC03", descricao: "Debater a construção de uma mentalidade racional e o papel da imprensa para a transformação das sociedades." },
            ],
          },
          {
            id: "7-1-3",
            titulo: "Renascimentos artísticos e culturais (HRNM)",
            subtopicos: [
              "A Arte do Renascimento.",
              "Transformações sociais.",
              "Características do Renascimento.",
              "A crise do Renascimento.",
            ],
            sugestaoMetodologica: "Examinar os renascimentos artísticos e culturais como processos complexos, evitando compreensões restritas a um único modelo. A abordagem deve identificar suas características e as transformações sociais, culturais e intelectuais, destacando mudanças nas formas de representar o ser humano, a natureza e o conhecimento. A análise precisa problematizar os fatores que contribuíram para sua crise, evidenciando tensões, limites e reconfigurações desses processos.",
            habilidades: [
              { codigo: "EF07HIMOC04", descricao: "Reconhecer as diferenças do Renascimento entre os países europeus." },
              { codigo: "EF07HIMOC05", descricao: "Analisar as transformações culturais, sociais e intelectuais associadas ao Renascimento, relacionando-as às mudanças na forma de representar o ser humano, a natureza e o conhecimento." },
              { codigo: "EF07HIMOC06", descricao: "Analisar os fatores que concorreram para a crise do Renascimento." },
            ],
          },
          {
            id: "7-1-4",
            titulo: "A formação e o funcionamento das monarquias europeias: a lógica da centralização política e os conflitos na Europa (HPMC)",
            subtopicos: [
              "O processo de Formação dos Estados Nacionais.",
              "O Absolutismo dos reis.",
              "Os estados modernos absolutistas e a centralização política.",
            ],
            sugestaoMetodologica: "Examinar a formação e consolidação das monarquias europeias como parte das transformações do mundo medieval para o moderno. A abordagem deve caracterizar o Absolutismo, o fortalecimento da monarquia e as tensões inerentes ao processo.",
            habilidades: [
              { codigo: "EF07HI07", descricao: "Descrever os processos de formação e consolidação das monarquias e suas principais características com vistas à compreensão das razões da centralização política." },
              { codigo: "EF07HIMOC07", descricao: "Analisar os fatores políticos, econômicos e sociais que contribuíram para o processo de centralização do poder monárquico na Europa, considerando as transformações ocorridas na transição do mundo medieval para o moderno." },
              { codigo: "EF07HIMOC08", descricao: "Identificar as principais características dos Estados modernos absolutistas, relacionando a centralização do poder político ao fortalecimento da autoridade monárquica." },
              { codigo: "EF07HIMOC09", descricao: "Analisar a importância da centralização do poder real para a política europeia até o século XVIII." },
            ],
          },
          {
            id: "7-1-5",
            titulo: "Reformas religiosas: a cristandade fragmentada (HRNM)",
            subtopicos: [
              "A reforma protestante.",
              "A contrarreforma católica.",
              "Os impactos políticos e culturais das reformas.",
            ],
            sugestaoMetodologica: "Analisar as reformas religiosas como processos que redefiniram as relações entre religião, poder e cultura no mundo moderno. A abordagem deve contemplar os antecedentes da Reforma Protestante, suas vertentes e os impactos decorrentes dessas transformações em diferentes contextos, bem como examinar os desdobramentos da reação católica no âmbito da Contrarreforma. A análise precisa evidenciar que tais movimentos ultrapassam o campo religioso, envolvendo política, reconfigurações institucionais e mudanças culturais.",
            habilidades: [
              { codigo: "EF07HI05", descricao: "Identificar e relacionar as vinculações entre as reformas religiosas e os processos culturais e sociais do período moderno na Europa e na América." },
              { codigo: "EF07HIMOC10", descricao: "Identificar os antecedentes da Reforma Protestante." },
              { codigo: "EF07HIMOC11", descricao: "Reconhecer as diferentes vertentes do protestantismo, no contexto da Reforma Protestante." },
              { codigo: "EF07HIMOC12", descricao: "Analisar os impactos da Reforma Protestante na Europa e no mundo." },
              { codigo: "EF07HIMOC13", descricao: "Elencar as causas que fizeram com que a Igreja reagisse ao avanço protestante por meio da Contrarreforma, bem como as consequências desse processo." },
              { codigo: "EF07HIMOC14", descricao: "Relacionar o processo que levou à Reforma Protestante e à Contrarreforma ao contexto religioso atual." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "7-2-1and2",
            titulo: "A ideia de \"Novo Mundo\" ante o Mundo Antigo: permanências e rupturas de saberes e práticas na emergência do mundo moderno (HMCS) / As descobertas científicas e a expansão marítima (HRNM)",
            subtopicos: [
              "A expansão marítima e comercial europeia.",
              "As concepções de \"Novo Mundo\".",
              "As descobertas científicas.",
              "A expansão marítima europeia.",
              "Fatores determinantes para a expansão marítima.",
              "Consequências.",
            ],
            sugestaoMetodologica: "Examinar a ideia de \"Novo Mundo\" como uma formulação histórica vinculada à expansão marítima europeia. A abordagem deve articular os fatores que impulsionaram as navegações, bem como situar o contexto em que se estruturaram, destacando os países pioneiros e as razões do pioneirismo. A análise precisa enfatizar que as navegações produziram interações complexas entre Europa, África, Ásia e Américas, afastando a ideia de \"descoberta\" unilateral, ou de passividade por parte dos povos nativos do continente americano.",
            habilidades: [
              { codigo: "EF07HI02", descricao: "Identificar conexões e interações entre as sociedades do Novo Mundo, da Europa, da África e da Ásia no contexto das navegações e indicar a complexidade e as interações que ocorrem nos Oceanos Atlântico, Índico e Pacífico." },
              { codigo: "EF07HIMOC15", descricao: "Estabelecer conexões entre o processo de expansão marítima europeu e as transformações ocorridas nos territórios \"descobertos\" no Novo Mundo." },
              { codigo: "EF07HI06", descricao: "Comparar as navegações no Atlântico e no Pacífico entre os séculos XIV e XVI." },
              { codigo: "EF07HIMOC16", descricao: "Identificar o contexto no qual ocorreu expansão marítima europeia." },
              { codigo: "EF07HIMOC17", descricao: "Caracterizar os fatores que levaram à necessidade do processo de expansão marítima." },
              { codigo: "EF07HIMOC18", descricao: "Identificar e analisar os países pioneiros." },
              { codigo: "EF07HIMOC19", descricao: "Analisar os fatores do pioneirismo." },
              { codigo: "EF07HIMOC20", descricao: "Averiguar as consequências do processo expansionista." },
            ],
          },
          {
            id: "7-2-3",
            titulo: "Saberes dos povos africanos e pré-colombianos expressos na cultura material e imaterial (HMCS)",
            subtopicos: [
              "Sociedade e cultura na América pré-colombiana: práticas culturais, religiosidade e organização política.",
              "Povos árabes e o islamismo.",
              "Povos africanos: imaginário, cultura e organização política.",
            ],
            sugestaoMetodologica: "Analisar as características das sociedades africanas, árabes e americanas, sobretudo no âmbito das formas de vida. A abordagem deve contemplar o processo de organização dessas sociedades, as manifestações culturais, científicas e o papel da religiosidade como marco regulador das vivências e crenças coletivas.",
            habilidades: [
              { codigo: "EF07HI03", descricao: "Identificar aspectos e processos específicos das sociedades africanas e americanas antes da chegada dos europeus, com destaque para as formas de organização social e o desenvolvimento de saberes e técnicas." },
              { codigo: "EF07HIMOC21", descricao: "Compreender o processo de formação das sociedades pré-colombianas, a partir da cultura e política." },
              { codigo: "EF07HIMOC22", descricao: "Analisar a importância da religiosidade para os povos pré-colombianos." },
              { codigo: "EF09HIMOC23", descricao: "Identificar as origens do islamismo, compreender seus princípios e reconhecer a diversidade histórica e cultural dos povos árabes, evitando estereótipos." },
              { codigo: "EF07HIMOC24", descricao: "Identificar a importância da cultura e estruturas políticas dos povos africanos." },
            ],
          },
          {
            id: "7-2-4",
            titulo: "A conquista da América e as formas de organização política dos indígenas e europeus: conflitos, dominação e conciliação (HPMC)",
            subtopicos: [
              "A conquista da América espanhola.",
              "A Colonização da América Portuguesa.",
            ],
            sugestaoMetodologica: "Analisar a conquista da América como parte de um processo histórico marcado por conflitos e resistência indígena. A abordagem deve examinar as estruturas de organização política das sociedades americanas, bem como comparar as dinâmicas de dominação espanhola e portuguesa. A análise precisa problematizar o uso da violência, destacando os impactos para as populações ameríndias.",
            habilidades: [
              { codigo: "EF07HI08", descricao: "Descrever as formas de organização das sociedades americanas no tempo da conquista com vistas à compreensão dos mecanismos de alianças, confrontos e resistências." },
              { codigo: "EF07HI09", descricao: "Analisar os diferentes impactos da conquista europeia da América para as populações ameríndias e identificar as formas de resistência." },
              { codigo: "EF07HIMOC25", descricao: "Identificar as diferenças e semelhanças dos processos de dominação colonial espanhola e portuguesa sobre os povos indígenas americanos." },
              { codigo: "EF07HIMOC26", descricao: "Discutir o uso da violência como estratégia de dominação no processo de colonização da América Espanhola e da América Portuguesa." },
            ],
          },
          {
            id: "7-2-5",
            titulo: "A estruturação dos vice-reinos nas Américas (HPMC)",
            subtopicos: [
              "Organização político-administrativa da América espanhola.",
              "Disputas coloniais.",
            ],
            sugestaoMetodologica: "Examinar a estruturação dos vice-reinos na América Espanhola como parte das estratégias de organização e domínio colonial. A abordagem deve caracterizar os princípios da administração colonial, destacando hierarquias, funções e formas de controle do território, bem como as tensões e distinções entre colonos e autoridades metropolitanas. A análise precisa contemplar também as disputas coloniais e as dinâmicas de poder do período.",
            habilidades: [
              { codigo: "EF07HI10", descricao: "Analisar, com base em documentos históricos, diferentes interpretações sobre as dinâmicas das sociedades americanas no período colonial." },
              { codigo: "EF07HIMOC27", descricao: "Caracterizar a política administrativa colonial na América Espanhola." },
              { codigo: "EF07HIMOC28", descricao: "Identificar as diferenças entre colonos e europeus na colonização da América Espanhola." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "7-3-1and2",
            titulo: "As lógicas mercantis e o domínio europeu sobre os mares e o contraponto Oriental (HLCM) / A emergência do capitalismo (HLCM)",
            subtopicos: [
              "Mercantilismo.",
              "Os impérios orientais.",
              "O surgimento da burguesia.",
              "O surgimento e desenvolvimento do capitalismo.",
            ],
            sugestaoMetodologica: "Compreender as lógicas mercantis que orientaram a expansão europeia, situando o mercantilismo no contexto dos Estados modernos. A abordagem deve relacionar essas dinâmicas às interações comerciais entre sociedades europeias, africanas, americanas e orientais. A análise precisa contemplar as transformações decorrentes do surgimento da burguesia e do desenvolvimento do capitalismo, enfatizando a passagem do mercantilismo para o capitalismo como um processo marcado por mudanças econômicas e sociais.",
            habilidades: [
              { codigo: "EF07HI13", descricao: "Caracterizar a ação dos europeus e suas lógicas mercantis visando ao domínio no mundo atlântico." },
              { codigo: "EF07HI14", descricao: "Descrever as dinâmicas comerciais das sociedades americanas e africanas e analisar suas interações com outras sociedades do Ocidente e do Oriente." },
              { codigo: "EF07HIMOC29", descricao: "Compreender a importância da política mercantilista como base do Absolutismo Monárquico." },
              { codigo: "EF07HI17", descricao: "Discutir a passagem do mercantilismo para o capitalismo." },
              { codigo: "EF07HIMOC30", descricao: "Analisar as transformações sociais e econômicas da que levaram ao surgimento da burguesia." },
              { codigo: "EF07HIMOC31", descricao: "Caracterizar o capitalismo e compreender os meios pelos quais as sociedades passaram a se organizar." },
            ],
          },
          {
            id: "7-3-3",
            titulo: "A escravidão moderna e o tráfico de Escravizados (HLCM)",
            subtopicos: [
              "Os afrodescendentes no Brasil.",
              "A cultura afro-brasileira.",
              "A escravidão.",
              "O tráfico negreiro.",
              "Senhores e escravos.",
              "Escravidão e resistência.",
            ],
            sugestaoMetodologica: "Examinar a escravidão como uma estrutura articulada às lógicas econômicas, políticas e sociais do mundo atlântico, ressaltando suas distinções em relação ao escravismo antigo e à servidão medieval. A abordagem deve analisar o tráfico de africanos escravizados em suas diferentes fases e enfatizar a experiência dos sujeitos escravizados, evidenciando estratégias de resistência. O fechamento deve reconhecer a importância dos afrodescendentes e da cultura afro-brasileira na formação do Brasil.",
            habilidades: [
              { codigo: "EF07HI15", descricao: "Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval." },
              { codigo: "EF07HI16", descricao: "Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico e as regiões e zonas africanas de procedência dos escravizados." },
              { codigo: "EF07HIMOC32", descricao: "Identificar os elementos da cultura afro-brasileira que contribuíram para a formação do povo brasileiro." },
              { codigo: "EF07HIMOC33", descricao: "Analisar as relações de poder e formas de resistência no interior das sociedades escravistas." },
              { codigo: "EF07HIMOC34", descricao: "Conhecer os mecanismos pelos quais os povos africanos escravizados resistiam à dominação dos senhores." },
            ],
          },
          {
            id: "7-3-4and5",
            titulo: "Resistências indígenas, invasões e expansão na América portuguesa (HPMC) / As formas de organização das sociedades ameríndias (HLCM)",
            subtopicos: [
              "A resistência indígena.",
              "As invasões estrangeiras.",
              "As formas de organização das sociedades.",
            ],
            sugestaoMetodologica: "Analisar a formação territorial da América Portuguesa evidenciando que a expansão colonial ocorreu em meio a conflitos e negociações. A abordagem deve contemplar as formas de organização e os modos de vida das sociedades ameríndias, contrapondo-os às lógicas europeias de ocupação e domínio, de modo a explicitar diferenças culturais. A análise precisa enfatizar as estratégias de resistência indígena, as invasões estrangeiras e suas implicações políticas e econômicas.",
            habilidades: [
              { codigo: "EF07HI11", descricao: "Analisar a formação histórico-geográfica do território da América portuguesa por meio de mapas históricos." },
              { codigo: "EF07HI12", descricao: "Identificar a distribuição territorial da população brasileira em diferentes épocas, considerando a diversidade étnico-racial e étnico-cultural (indígena, africana, europeia e asiática)." },
              { codigo: "EF07HIMOC35", descricao: "Analisar o modo de vida das sociedades indígenas e contrapô-la ao europeu." },
              { codigo: "EF07HIMOC36", descricao: "Discutir as formas de resistência indígena a dominação portuguesa." },
              { codigo: "EF07HIMOC37", descricao: "Identificar as invasões estrangeiras ocorridas durante a colonização portuguesa no Brasil." },
            ],
          },
          {
            id: "7-3-6",
            titulo: "As lógicas internas das sociedades africanas (HLCM)",
            subtopicos: [
              "Reinos africanos e sua organização social.",
            ],
            sugestaoMetodologica: "Compreender as sociedades africanas a partir de suas formas de organização social e estruturas políticas. A abordagem deve evidenciar a diversidade de povos, etnias e reinos, bem como analisar os elementos que estruturavam essas sociedades, como hierarquias, relações de poder e modos de organização coletiva. A análise precisa reforçar a pluralidade do continente africano e a complexidade de sua formação.",
            habilidades: [
              { codigo: "EF07HIMOC38", descricao: "Analisar os elementos que compunham as sociedades africanas: organização social, estrutura política." },
              { codigo: "EF07HIMOC39", descricao: "Diferenciar os povos africanos, compreendendo que existiam diversas etnias e reinos." },
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
            titulo: "A questão do iluminismo e da ilustração (HCAR)",
            subtopicos: [
              "O Iluminismo.",
              "Teóricos iluministas.",
              "O despotismo esclarecido.",
              "O Liberalismo.",
            ],
            sugestaoMetodologica: "Examinar o Iluminismo como um movimento articulado às transformações da Europa do século XVIII. A abordagem deve identificar conceitos, caracterizar principais teóricos e explicitar suas críticas ao Antigo Regime, bem como analisar as relações entre pensamento iluminista, despotismo esclarecido e a formulação das doutrinas liberais. A análise precisa evidenciar a relação entre Iluminismo e Liberalismo, destacando seus impactos na organização do mundo contemporâneo.",
            habilidades: [
              { codigo: "EF08HI01", descricao: "Identificar os principais aspectos conceituais do iluminismo e do liberalismo e discutir a relação entre eles e a organização do mundo contemporâneo." },
              { codigo: "EF08HIMOC01", descricao: "Identificar e analisar as transformações da Europa do século XVIII." },
              { codigo: "EF08HIMOC02", descricao: "Caracterizar o Iluminismo e identificar seus principais teóricos." },
              { codigo: "EF08HIMOC03", descricao: "Conceituar Despotismo Esclarecido." },
              { codigo: "EF08HIMOC04", descricao: "Discutir o desenvolvimento das doutrinas liberais e seus teóricos." },
            ],
          },
          {
            id: "8-1-2",
            titulo: "As revoluções inglesas e os princípios do liberalismo (HCAR)",
            subtopicos: [
              "Absolutismo.",
              "Revolução Puritana.",
              "Revolução Gloriosa.",
            ],
            sugestaoMetodologica: "Analisar as revoluções inglesas do século XVII como processos que mudaram as relações entre monarquia e Parlamento, no contexto de crise do absolutismo. A abordagem deve caracterizar a Revolução Puritana e a Revolução Gloriosa, destacando seus fundamentos políticos, conflitos e desdobramentos institucionais, que permitiram a continuidade da monarquia inglesa.",
            habilidades: [
              { codigo: "EF08HI02", descricao: "Identificar as particularidades político-sociais da Inglaterra do século XVII e analisar os desdobramentos posteriores à Revolução Gloriosa." },
              { codigo: "EF08HIMOC05", descricao: "Caracterizar as revoluções inglesas relacionando-as com a manutenção da monarquia na Inglaterra da atualidade." },
            ],
          },
          {
            id: "8-1-3",
            titulo: "Revolução Industrial e seus impactos na produção e circulação de povos, produtos e culturas (HCAR)",
            subtopicos: [
              "As características da Revolução Industrial.",
              "Emergência do capitalismo.",
              "Transição campo/cidade.",
              "Movimento operário.",
            ],
            sugestaoMetodologica: "Examinar a Revolução Industrial em suas bases econômicas, técnicas e sociais, enfatizando as mudanças nas formas de produção e na organização do trabalho. A abordagem deve relacionar esse processo à emergência do capitalismo industrial, à transição campo–cidade e o surgimento do movimento operário, destacando os impactos nas condições de vida e nas dinâmicas sociais da classe trabalhadora.",
            habilidades: [
              { codigo: "EF08HI03", descricao: "Analisar os impactos da Revolução Industrial na produção e circulação de povos, produtos e culturas." },
              { codigo: "EF08HIMOC06", descricao: "Identificar e analisar as transformações da Europa do século XVIII." },
              { codigo: "EF08HIMOC07", descricao: "Determinar o contexto que fez emergir o capitalismo." },
              { codigo: "EF08HIMOC08", descricao: "Analisar o processo de transição campo/cidade e seus desdobramentos." },
              { codigo: "EF08HIMOC09", descricao: "Investigar o surgimento do movimento operário e sua importância histórica." },
            ],
          },
          {
            id: "8-1-4",
            titulo: "Revolução Francesa e seus desdobramentos (HCAR)",
            subtopicos: [
              "A França pré-revolução.",
              "A crise econômica.",
              "Grupos sociais envolvidos na revolução.",
              "As fases da revolução.",
              "Consequências.",
              "Era napoleônica.",
              "Governo dos Cem Dias.",
              "Congresso de Viena.",
            ],
            sugestaoMetodologica: "Analisar a Revolução Francesa vinculada às tensões do Antigo Regime, contemplando a crise econômica, as disputas entre grupos sociais e as reconfigurações políticas ao longo de suas diferentes fases. A abordagem deve articular os antecedentes da revolução à crise do absolutismo, à ascensão da burguesia e às influências iluministas, bem como seus desdobramentos, com destaque para a Era Napoleônica, o Governo dos Cem Dias e o Congresso de Viena. A análise precisa enfatizar os impactos e legados do processo revolucionário, sobretudo no mundo contemporâneo.",
            habilidades: [
              { codigo: "EF08HI04", descricao: "Identificar e relacionar os processos da Revolução Francesa e seus desdobramentos na Europa e no mundo." },
              { codigo: "EF08HIMOC10", descricao: "Identificar os antecedentes e fases da Revolução Francesa." },
              { codigo: "EF08HIMOC12", descricao: "Analisar o legado e a influência da revolução nas atuais práticas políticas e sociais." },
              { codigo: "EF08HIMOC13", descricao: "Relacionar a ascensão da burguesia à crise do Absolutismo e influências iluministas." },
              { codigo: "EF08HIMOC14", descricao: "Identificar a importância de Napoleão Bonaparte e os fatores que levaram a seu declínio." },
              { codigo: "EF08HIMOC15", descricao: "Caracterizar o governo dos Cem Dias." },
              { codigo: "EF08HIMOC16", descricao: "Analisar o Congresso de Viena e seus desdobramentos para a política europeia." },
            ],
          },
          {
            id: "8-1-5",
            titulo: "Independência dos Estados Unidos da América (HPIA)",
            subtopicos: [
              "Contexto histórico.",
              "Relações colônia/metrópole.",
              "Economia colonial.",
              "A política.",
              "Constituição.",
            ],
            sugestaoMetodologica: "Analisar a Independência dos Estados Unidos nas tensões entre colônia e metrópole, considerando seus antecedentes. A abordagem deve examinar as relações entre as XIII Colônias e a Inglaterra, as dinâmicas da economia colonial e os conflitos que impulsionaram a ruptura. A análise precisa contemplar a formulação constitucional e suas influências intelectuais, em especial os referenciais iluministas.",
            habilidades: [
              { codigo: "EF08HI06", descricao: "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões." },
              { codigo: "EF08HIMOC17", descricao: "Conhecer os fatos e disputas políticas que antecedem a independência americana." },
              { codigo: "EF08HIMOC18", descricao: "Caracterizar as relações entre EUA e Inglaterra no contexto do processo de independência americana." },
              { codigo: "EF08HIMOC19", descricao: "Discutir o desenvolvimento econômico colonial das XIII Colônias e suas implicações." },
              { codigo: "EF08HIMOC20", descricao: "Caracterizar a Constituição promulgada e as influências iluministas." },
            ],
          },
          {
            id: "8-1-6",
            titulo: "Rebeliões na América portuguesa: as conjurações mineira e baiana (HCAR)",
            subtopicos: [
              "O Pacto colonial.",
              "A decadência do ouro.",
              "Inconfidência mineira.",
              "Conjuração baiana.",
              "A Cidadania na América Portuguesa.",
            ],
            sugestaoMetodologica: "Analisar as rebeliões na América Portuguesa como manifestações das tensões do sistema colonial, situando o pacto colonial e a decadência da produção aurífera como elementos centrais para a compreensão desses movimentos. A abordagem deve examinar a Inconfidência Mineira e a Conjuração Baiana em seus contextos específicos, contemplando participantes, projetos políticos e desdobramentos. A análise precisa articular tais experiências às circulações de ideias e às transformações mais amplas do período, com destaque para o Iluminismo e os processos revolucionários no espaço atlântico, bem como problematizar a noção de cidadania no contexto colonial.",
            habilidades: [
              { codigo: "EF08HI05", descricao: "Explicar os movimentos e as rebeliões da América portuguesa, articulando as temáticas locais e suas interfaces com processos ocorridos na Europa e nas Américas." },
              { codigo: "EF08HIMOC21", descricao: "Conceituar pacto colonial." },
              { codigo: "EF08HIMOC22", descricao: "Compreender causas e consequências da decadência da produção aurífera." },
              { codigo: "EF08HIMOC23", descricao: "Analisar o movimento que levou a Inconfidência Mineira, seus participantes, objetivos e resultados." },
              { codigo: "EF08HIMOC24", descricao: "Discutir a Conjuração Baiana e os fatores que ocasionaram sua eclosão." },
              { codigo: "EF08HIMOC25", descricao: "Relacionar Inconfidência Mineira e Conjuração Baiana à luz do Iluminismo e das revoluções nos EUA e França." },
              { codigo: "EF08HIMOC26", descricao: "Analisar a noção de cidadania no período colonial relacionando-a com o conceito no mundo contemporâneo." },
            ],
          },
          {
            id: "8-1-7",
            titulo: "Independências na América espanhola (HPIA)",
            subtopicos: [
              "A revolução dos escravizados em São Domingo e seus múltiplos significados e desdobramentos: o caso do Haiti.",
              "Estado, nação, território e governo nas Américas.",
              "A independência dos países da América espanhola.",
              "O Pan-americanismo.",
            ],
            sugestaoMetodologica: "Examinar as independências na América Espanhola como fenômenos marcados por disputas políticas, territoriais e tensões sociais. A abordagem deve atribuir centralidade à Revolução de São Domingo, compreendendo-a como acontecimento singular, e analisar seus significados e desdobramentos. A análise precisa mobilizar os conceitos de Estado, nação, território e governo como instrumentos interpretativos das rupturas e continuidades nas formações políticas americanas, bem como considerar projetos, interesses e limites envolvidos nas experiências independentistas.",
            habilidades: [
              { codigo: "EF08HI06", descricao: "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões." },
              { codigo: "EF08HI07", descricao: "Identificar e contextualizar as especificidades dos diversos processos de independência nas Américas, seus aspectos populacionais e suas conformações territoriais." },
              { codigo: "EF08HI08", descricao: "Conhecer o ideário dos líderes dos movimentos independentistas e seu papel nas revoluções que levaram à independência das colônias hispano-americanas." },
              { codigo: "EF08HI09", descricao: "Conhecer as características e os principais pensadores do Pan-americanismo." },
              { codigo: "EF08HI10", descricao: "Identificar a Revolução de São Domingo como evento singular e desdobramento da Revolução Francesa e avaliar suas implicações." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "8-2-1",
            titulo: "Os caminhos até a independência do Brasil (HPIA)",
            subtopicos: [
              "A vinda da Família Real portuguesa para o Brasil.",
              "Abertura dos portos às nações amigas e tratados de 1810.",
              "Modernização e Reino Unido.",
              "A revolução de 1817.",
              "A revolução de 1820.",
              "Pedro I e as elites.",
              "A proclamação da Independência.",
            ],
            sugestaoMetodologica: "Examinar os caminhos até a independência do Brasil como uma dinâmica marcada por tensões e disputas de poder. A abordagem deve situar a transferência da Corte portuguesa em 1808, a abertura dos portos, os tratados de 1810 e a elevação à condição de Reino Unido como elementos fundamentais das transformações políticas e econômicas do período.\n\nA análise precisa contemplar as revoltas e insurreições, com destaque para 1817 e 1820, articulando-as às crises do sistema colonial e do poder metropolitano. Deve ainda problematizar o papel de Pedro I e das elites, bem como analisar a Independência como um arranjo político, enfatizando seus limites, contradições e desdobramentos para a organização do Estado e da sociedade brasileira.",
            habilidades: [
              { codigo: "EF08HI06", descricao: "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões." },
              { codigo: "EF08HI07", descricao: "Identificar e contextualizar as especificidades dos diversos processos de independência nas Américas, seus aspectos populacionais e suas conformações territoriais." },
              { codigo: "EF08HI11", descricao: "Identificar e explicar os protagonismos e a atuação de diferentes grupos sociais e étnicos nas lutas de independência no Brasil, na América espanhola e no Haiti." },
              { codigo: "EF08HI12", descricao: "Caracterizar a organização política e social no Brasil desde a chegada da Corte portuguesa, em 1808, até 1822 e seus desdobramentos para a história política brasileira." },
              { codigo: "EF08HI13", descricao: "Analisar o processo de independência em diferentes países latino-americanos e comparar as formas de governo neles adotadas." },
              { codigo: "EF08HIMOC27", descricao: "Caracterizar o processo de ascensão da colônia a reino unido e a modernização decorrente da presença da Família Real." },
              { codigo: "EF08HIMOC28", descricao: "Analisar a revolução de 1817, relacionando-a à centralização imposta por D. João VI." },
              { codigo: "EF08HIMOC29", descricao: "Relacionar a Revolução de 1820 à aceleração do processo político da independência." },
              { codigo: "EF08HIMOC30", descricao: "Discutir a proclamação da Independência enquanto arranjo político e suas consequências." },
            ],
          },
          {
            id: "8-2-2",
            titulo: "A tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão (HPIA)",
            subtopicos: [
              "Os cativos indígenas e africanos.",
            ],
            sugestaoMetodologica: "Analisar as formas de tutela e dominação impostas às populações indígenas e negras no contexto brasileiro, examinando a condição dos cativos indígenas e africanos. A abordagem deve problematizar a noção de tutela como prática de controle, exclusão e hierarquização social, bem como evidenciar a participação dos negros na sociedade colonial. A análise precisa destacar permanências e reconfigurações dessas relações, identificando preconceitos, estereótipos e violências que incidem sobre populações indígenas e negras no continente.",
            habilidades: [
              { codigo: "EF08HI14", descricao: "Discutir a noção da tutela dos grupos indígenas e a participação dos negros na sociedade brasileira do final do período colonial, identificando permanências na forma de preconceitos, estereótipos e violências sobre as populações indígenas e negras no Brasil e nas Américas." },
            ],
          },
          {
            id: "8-2-3",
            titulo: "Brasil: Primeiro Reinado (HBS)",
            subtopicos: [
              "O governo de Pedro I.",
              "A Confederação do Equador.",
              "A Constituição de 1824.",
              "O Poder Moderador.",
              "O fim do Primeiro Reinado.",
            ],
            sugestaoMetodologica: "Compreender o Primeiro Reinado como período de disputas políticas consolidação do Império. A abordagem deve examinar o governo de D. Pedro I, situando a Confederação do Equador no contexto da resistência ao projeto centralizador. A análise precisa contemplar a Constituição de 1824 e o Poder Moderador como chave da organização do Império, destacando sua função e implicações, bem como considerar os fatores que levaram ao fim do Primeiro Reinado.",
            habilidades: [
              { codigo: "EF08HIMOC31", descricao: "Analisar as características do governo de D. Pedro I." },
              { codigo: "EF08HIMOC32", descricao: "Discutir a ambiência política do Primeiro Reinado e os fatores que levaram a Confederação do Equador." },
              { codigo: "EF08HIMOC33", descricao: "Analisar a importância da Constituição de 1824, suas características e os impactos que causou." },
              { codigo: "EF08HIMOC34", descricao: "Caracterizar o Poder Moderador, sua importância e desdobramentos ao longo da história do Império." },
            ],
          },
          {
            id: "8-2-4",
            titulo: "O Período Regencial e as contestações ao poder central (HBS)",
            subtopicos: [
              "A política regencial.",
              "Governos regenciais.",
              "Ato adicional.",
              "Revoltas regenciais.",
              "Golpe da Maioridade.",
            ],
            sugestaoMetodologica: "Compreender o Período Regencial como uma fase de instabilidade política e disputas em torno da organização do poder no Império, examinando as características e dos diferentes governos regenciais. A abordagem deve contemplar o Ato Adicional como marco de reconfiguração institucional, destacando suas implicações para a descentralização política. A análise precisa examinar as revoltas regenciais em sua diversidade social, política e regional, evidenciando motivações, agentes e tensões com o poder central.",
            habilidades: [
              { codigo: "EF08HI16", descricao: "Identificar, comparar e analisar a diversidade política, social e regional nas rebeliões e nos movimentos contestatórios ao poder centralizado." },
              { codigo: "EF08HIMOC35", descricao: "Caracterizar e distinguir os governos regenciais." },
              { codigo: "EF08HIMOC36", descricao: "Interpretar a importância do Ato Adicional e a descentralização política resultante disso." },
              { codigo: "EF08HIMOC37", descricao: "Discutir e caracterizar as revoltas regenciais, assim como seus objetivos e envolvidos." },
              { codigo: "EF08HIMOC38", descricao: "Analisar os processos políticos que conduziram ao golpe da maioridade." },
            ],
          },
          {
            id: "8-2-5",
            titulo: "O Brasil do Segundo Reinado: política e economia (HBS)",
            subtopicos: [
              "Ascensão de Pedro II.",
              "Alternância política.",
              "Lei Eusébio de Queiroz e Lei Bill Aberdeen.",
              "A Lei de Terras e seus desdobramentos na política do Segundo Reinado.",
              "Territórios e fronteiras: a Guerra do Paraguai.",
              "O exército.",
              "O abolicionismo.",
              "O café.",
              "Imigração.",
            ],
            sugestaoMetodologica: "Examinar o Segundo Reinado como período de consolidação política e redefinições econômicas, destacando a importância de Pedro II e a dinâmica da alternância partidária na organização do poder. A abordagem deve relacionar as medidas legais e diplomáticas, como a Lei Eusébio de Queiroz e a Bill Aberdeen, às transformações institucionais e impactos sociais. A análise precisa incorporar as questões territoriais e a Guerra do Paraguai, enfatizando seus impactos sobre o Exército e a política nacional. Devem ainda ser consideradas o papel da economia cafeeira, o abolicionismo e a imigração, privilegiando as conexões entre mudanças econômicas, tensões sociais e a dinâmica do Império no século XIX.",
            habilidades: [
              { codigo: "EF08HI15", descricao: "Identificar e analisar os sujeitos envolvidos nas disputas políticas durante o Primeiro e o Segundo Reinado." },
              { codigo: "EF08HI17", descricao: "Relacionar as transformações territoriais com as tensões e conflitos durante o Império." },
              { codigo: "EF08HI18", descricao: "Identificar as questões internas e externas sobre a atuação do Brasil na Guerra do Paraguai e discutir diferentes versões sobre o conflito." },
              { codigo: "EF08HIMOC39", descricao: "Avaliar as primeiras ações de Pedro II enquanto Imperador e a alternância política entre partidos." },
              { codigo: "EF08HIMOC40", descricao: "Conhecer as leis Eusébio de Queiroz e Bill Aberdeen, bem como sua importância histórica." },
              { codigo: "EF08HIMOC41", descricao: "Analisar a situação política, economia e social do Brasil e do Paraguai após o conflito." },
              { codigo: "EF08HIMOC42", descricao: "Compreender como a Guerra do Paraguai alterou o papel do Exército Brasileiro, discutindo seu prestígio social, organização e influência na política do fim do século XIX." },
              { codigo: "EF08HIMOC43", descricao: "Conhecer o movimento abolicionista, sua importância e as leis antiescravidão." },
              { codigo: "EF08HIMOC44", descricao: "Analisar a situação social dos negros após a abolição da escravatura." },
              { codigo: "EF08HIMOC45", descricao: "Compreender os meios pelos quais se implantou e desenvolveu a lavoura cafeeira na economia do Brasil no século XIX." },
              { codigo: "EF08HIMOC46", descricao: "Analisar e contextualizar o processo de imigração para o Brasil no século XIX, bem como sua importância para a economia nacional." },
            ],
          },
          {
            id: "8-2-6",
            titulo: "O escravismo no Brasil do século XIX: plantations e revoltas de escravizados, abolicionismo e políticas migratórias no Brasil Imperial (HBS)",
            subtopicos: [
              "O processo de abolição da escravidão.",
              "Os desdobramentos da abolição.",
              "As políticas migratórias para substituição de mão de obra.",
            ],
            sugestaoMetodologica: "Investigar o escravismo no Brasil do século XIX no âmbito das relações econômicas e sociais do Império. A abordagem deve analisar o processo de abolição e seus desdobramentos, evidenciando permanências, tensões e reconfigurações das hierarquias sociais. A análise precisa contemplar as políticas migratórias voltadas ao trabalho, situando-as em seus interesses econômicos e implicações sociais. O tema deve ainda estimular a formulação de questionamentos sobre os legados da escravidão no país, articulando passado e presente na compreensão das desigualdades, exclusão, identidade e dos debates contemporâneos a respeito da temática.",
            habilidades: [
              { codigo: "EF08HI19", descricao: "Formular questionamentos sobre o legado da escravidão nas Américas, com base na seleção e consulta de fontes de diferentes naturezas." },
              { codigo: "EF08HI20", descricao: "Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil e discutir a importância de ações afirmativas." },
              { codigo: "EF08HIMOC47", descricao: "Discutir a importância histórica das políticas migratórias para a formação do Brasil contemporâneo." },
            ],
          },
          {
            id: "8-2-7",
            titulo: "Políticas de extermínio do indígena durante o Império (HBS)",
            subtopicos: [
              "Políticas imperiais para a população indígena.",
            ],
            sugestaoMetodologica: "Analisar as políticas imperiais direcionadas às populações indígenas, examinando seus fundamentos, práticas e implicações no contexto da organização do Estado nacional. A abordagem deve problematizar as estratégias de tutela, assimilação e violência institucional, evidenciando seus efeitos sobre territórios, modos de vida e dinâmicas sociais indígenas.",
            habilidades: [
              { codigo: "EF08HI21", descricao: "Identificar e analisar as políticas oficiais com relação ao indígena durante o Império." },
            ],
          },
          {
            id: "8-2-8",
            titulo: "A produção do imaginário nacional brasileiro: cultura popular, representações visuais, letras e o Romantismo no Brasil (HBS)",
            subtopicos: [
              "O imaginário nacional brasileiro: arte e cultura.",
            ],
            sugestaoMetodologica: "Examinar a produção do imaginário brasileiro no século XIX como uma construção vinculada às artes, cultura e às disputas em torno da identidade nacional. A abordagem deve analisar o papel das culturas letradas e não letradas e das representações visuais e literárias na elaboração de imagens sobre o Brasil. A análise precisa contemplar o Romantismo como referência estética e política do período, além da atuação de intelectuais e escritores em debates centrais, como o abolicionismo.",
            habilidades: [
              { codigo: "EF08HI22", descricao: "Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX." },
              { codigo: "EF08HIMOC48", descricao: "Interpretar o papel das artes e da cultura na produção e difusão de imagens sobre o Brasil, problematizando estereótipos, idealizações e projetos de identidade nacional." },
              { codigo: "EF08HIMOC49", descricao: "Analisar a atuação de intelectuais, artistas e escritores no movimento abolicionista, compreendendo como suas produções dialogaram com os debates sociais do período." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "8-3-1",
            titulo: "Nacionalismo, revoluções e as novas nações europeias (HCM)",
            subtopicos: [
              "Ideias liberais.",
              "Nacionalismo.",
              "Revoluções de 1830 e 1848.",
              "Socialismo.",
              "Anarquismo.",
              "Comuna de Paris.",
            ],
            sugestaoMetodologica: "Examinar o nacionalismo e as revoluções europeias do século XIX como manifestações das transformações que mudaram o continente. A abordagem deve analisar a influência do liberalismo, do nacionalismo e seus vínculos com movimentos de unificação. A análise precisa contemplar o socialismo e o anarquismo como formulações críticas às estruturas do período, destacando conceitos e projetos políticos. O tratamento do tema deve ainda articular essas dinâmicas ao avanço do imperialismo, problematizando as relações entre ideologias raciais, determinismo e dominação colonial na África e na Ásia.",
            habilidades: [
              { codigo: "EF08HIMOC50", descricao: "Compreender como as ideias liberais influenciaram a política europeia do século XIX." },
              { codigo: "EF08HIMOC51", descricao: "Compreender de que forma o nacionalismo influenciou processos de unificação nacionais e disputas territoriais." },
              { codigo: "EF08HIMOC52", descricao: "Caracterizar a revolução francesa de 1830." },
              { codigo: "EF08HIMOC53", descricao: "Identificar os ideais da Primavera dos Povos e da Revolução de 1848." },
              { codigo: "EF08HIMOC54", descricao: "Conceituar e caracterizar o socialismo." },
              { codigo: "EF08HIMOC55", descricao: "Analisar e compreender as principais características do anarquismo, diferenciando-o do socialismo." },
              { codigo: "EF08HIMOC56", descricao: "Conhecer a Comuna de Paris e sua importância histórica." },
              { codigo: "EF08HI23", descricao: "Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia." },
            ],
          },
          {
            id: "8-3-2",
            titulo: "Os Estados Unidos da América e a América Latina no século XIX (HCM)",
            subtopicos: [
              "América para os \"americanos\": relacionamento entre Estados Unidos e a América Latina.",
            ],
            sugestaoMetodologica: "Examinar as relações entre os Estados Unidos e a América Latina no século XIX, destacando as disputas de poder e interesses estratégicos. A abordagem deve problematizar o \"América para os americanos\" como parte de um projeto político e ideológico, analisando seu significado. A análise precisa evidenciar os efeitos da política externa norte-americana sobre a autonomia dos países latino-americanos, ressaltando tensões, formas de influência e mecanismos de intervenção característicos do período.",
            habilidades: [
              { codigo: "EF08HI25", descricao: "Caracterizar e contextualizar aspectos das relações entre os Estados Unidos e a América Latina no século XIX." },
              { codigo: "EF08HIMOC57", descricao: "Compreender como a política externa dos Estados Unidos afetou o poder e a autonomia dos países latino-americanos no século XIX." },
            ],
          },
          {
            id: "8-3-3and4",
            titulo: "Uma nova ordem econômica: as demandas do capitalismo industrial e o lugar das economias africanas e asiáticas nas dinâmicas globais (HCM) / O imperialismo europeu e a partilha da África e da Ásia (HCM)",
            subtopicos: [
              "O Imperialismo europeu.",
              "A expansão do capital industrial e a importância das economias africanas e asiáticas.",
              "Justificativas para o colonialismo.",
              "Meios de dominação.",
              "Resistência dos dominados.",
            ],
            sugestaoMetodologica: "Analisar o imperialismo do século XIX como expressão das demandas do capitalismo industrial e da expansão do capital, examinando a inserção das economias africanas e asiáticas nas dinâmicas globais de exploração e circulação de riquezas. A abordagem deve problematizar as justificativas ideológicas do colonialismo, com destaque para as ideologias raciais e o determinismo, bem como examinar os interesses econômicos e políticos que sustentaram a expansão europeia. A análise precisa caracterizar os meios de dominação empregados, os impactos sobre as sociedades locais e as formas de organização e uso dos recursos, além de evidenciar as diversas estratégias de resistência frente as violências coloniais.",
            habilidades: [
              { codigo: "EF08HI24", descricao: "Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica." },
              { codigo: "EF08HI23", descricao: "Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia." },
              { codigo: "EF08HI26", descricao: "Identificar e contextualizar o protagonismo das populações locais na resistência ao imperialismo na África e Ásia." },
              { codigo: "EF08HIMOC58", descricao: "Analisar o processo de desenvolvimento industrial das nações europeias no contexto do século XIX." },
              { codigo: "EF08HIMOC59", descricao: "Conceituar o Imperialismo." },
              { codigo: "EF08HIMOC60", descricao: "Identificar os elementos que justificaram a expansão europeia rumo ao continente africano e asiático." },
              { codigo: "EF08HIMOC61", descricao: "Caracterizar as estratégias de dominação utilizadas pelos países europeus em relação às nações subjugadas na África e Ásia." },
              { codigo: "EF08HIMOC62", descricao: "Interpretar as formas de resistência dos povos colonizados frente as violências a que foram submetidos durante a dominação imperialista das nações europeias." },
            ],
          },
          {
            id: "8-3-5and6and7",
            titulo: "Pensamento e cultura no século XIX: darwinismo e racismo (HCM) / O discurso civilizatório nas Américas, o silenciamento dos saberes indígenas e as formas de integração e destruição de comunidades e povos indígenas (HCM) / A resistência dos povos e comunidades indígenas diante da ofensiva civilizatória (HCM)",
            subtopicos: [
              "Teorias raciais.",
              "O cientificismo.",
              "Darwinismo racial.",
              "Extermínio dos povos indígenas.",
              "Práticas de resistência dos povos indígenas.",
            ],
            sugestaoMetodologica: "Problematizar as formulações do século XIX que articularam cientificismo, teorias raciais e darwinismo social, evidenciando seus usos políticos e efeitos na legitimação de hierarquias e práticas de dominação. A abordagem deve discutir o discurso civilizatório nas Américas, explorando seus significados, mecanismos de silenciamento e impactos sobre populações indígenas e negras, com destaque para estratégias de integração forçada. A análise precisa enfatizar que tais construções sustentaram práticas de destruição de comunidades, bem como evidenciar o protagonismo dos povos indígenas em suas diversas formas de resistência, ressaltando estratégias de enfrentamento, adaptação e preservação cultural.",
            habilidades: [
              { codigo: "EF08HI27", descricao: "Identificar as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e as populações negras nas Américas." },
              { codigo: "EF08HIMOC63", descricao: "Analisar a importância que as teorias científicas de superioridade dos povos brancos tiveram para a propagação da ideia de \"raças\", racismo e da suposta inferioridade de povos negros e indígenas." },
              { codigo: "EF08HIMOC64", descricao: "Discutir os métodos de resistência das populações indígenas frente as violências de que foram vítimas durante o processo de colonização brasileiro." },
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
            titulo: "Experiências republicanas e práticas autoritárias: as tensões e disputas do mundo contemporâneo",
            sugestaoMetodologica: "Compreender a emergência da República no Brasil como uma experiência marcada por disputas políticas, tensões sociais, violência e autoritarismo. A abordagem deve problematizar o arranjo republicano, evidenciando contradições, problemas sociais e revoltas populares, bem como examinar as dinâmicas de marginalização e resistência da população negra no pós-abolição.",
            habilidades: [
              { codigo: "EF09HI01", descricao: "Descrever e contextualizar os principais aspectos sociais, culturais, econômicos e políticos da emergência da República no Brasil." },
              { codigo: "EF09HI02", descricao: "Caracterizar e compreender os ciclos da história republicana, identificando particularidades da história local e regional até 1954." },
              { codigo: "EF09HIMOC01", descricao: "Identificar e caracterizar os movimentos revoltosos urbanos, messiânicos e o banditismo social." },
              { codigo: "EF09HI03", descricao: "Identificar os mecanismos de inserção dos negros na sociedade brasileira pós-abolição e avaliar os seus resultados." },
              { codigo: "EF09HI04", descricao: "Discutir a importância da participação da população negra na formação econômica, política e social do Brasil." },
              { codigo: "EF09HIMOC02", descricao: "Analisar as transformações sociais, econômicas e políticas na sociedade brasileira que, ao longo da história, visaram combater a exclusão social da população negra." },
            ],
          },
          {
            id: "9-1-2",
            titulo: "A questão da inserção dos negros no período republicano pós-abolição",
            sugestaoMetodologica: "A análise precisa destacar os mecanismos de inserção dos negros na ordem republicana, seus limites e resultados, além de reconhecer o papel dos movimentos sociais e das práticas culturais afro-brasileiras como formas de enfrentamento às exclusões e aos dispositivos de controle social.",
            habilidades: [
              { codigo: "EF09HIMOC03", descricao: "Identificar os mecanismos de controle social que serviram para perseguir e marginalizar as práticas culturais afro-brasileiras." },
            ],
          },
          {
            id: "9-1-3",
            titulo: "Primeira República e suas características",
            habilidades: [
              { codigo: "EF09HIMOC04", descricao: "Compreender o enfraquecimento do governo imperial e a ascensão das ideias republicanas." },
              { codigo: "EF09HIMOC05", descricao: "Identificar o contexto em que se deu o fortalecimento dos militares ao longo da Primeira República." },
              { codigo: "EF09HIMOC06", descricao: "Analisar a hegemonia política das oligarquias rurais, o coronelismo e a política do café-com-leite." },
            ],
          },
          {
            id: "9-1-4",
            titulo: "Contestações e dinâmicas da vida cultural no Brasil entre 1900 e 1930",
            sugestaoMetodologica: "A abordagem deve contemplar as dinâmicas institucionais e as tensões inerentes a esse arranjo, bem como relacionar a expansão industrial às transformações econômicas e ao surgimento de novos atores sociais.",
            habilidades: [
              { codigo: "EF09HIMOC07", descricao: "Conceituar o fenômeno do coronelismo." },
              { codigo: "EF09HIMOC08", descricao: "Explicar como a alternância de poder entre São Paulo e Minas Gerais moldou a dinâmica política da Primeira República." },
              { codigo: "EF09HIMOC09", descricao: "Relacionar o processo de industrialização ao surgimento do movimento operário e à Primeira Guerra Mundial." },
              { codigo: "EF09HI05", descricao: "Identificar os processos de urbanização e modernização da sociedade brasileira e avaliar suas contradições e impactos na região em que vive." },
              { codigo: "EF09HIMOC10", descricao: "Discutir e contextualizar a Semana de Arte Moderna de 1922, o Tenentismo e o legado deixado por ambos." },
            ],
          },
          {
            id: "9-1-5",
            titulo: "O período varguista e suas contradições",
            sugestaoMetodologica: "Compreender o período varguista como uma experiência política marcada por disputas ideológicas e contradições. A abordagem deve contemplar as transformações políticas e legais, como a Constituição de 1934, a legislação trabalhista e a centralização autoritária do Estado Novo, bem como os usos da propaganda oficial na difusão de valores nacionalistas e na legitimação do poder.",
            habilidades: [
              { codigo: "EF09HI06", descricao: "Identificar e discutir o papel do trabalhismo como força política, social e cultural no Brasil, em diferentes escalas (nacional, regional, cidade, comunidade)." },
              { codigo: "EF09HIMOC11", descricao: "Conceituar a Era Vargas, identificando suas ambiguidades." },
              { codigo: "EF09HIMOC12", descricao: "Compreender os meios pelos quais se deram a cessão de direitos sociais durante o governo Vargas." },
              { codigo: "EF09HIMOC13", descricao: "Caracterizar o Estado Novo." },
              { codigo: "EF09HIMOC14", descricao: "Analisar as disputas entre comunistas e fascistas no contexto das décadas de 1930 e 1940 no Brasil." },
              { codigo: "EF09HIMOC15", descricao: "Relacionar o desenvolvimento da indústria no Brasil e a Segunda Guerra Mundial." },
            ],
          },
          {
            id: "9-1-6",
            titulo: "A emergência da vida urbana e a segregação espacial",
            habilidades: [
              { codigo: "EF09HIMOC16", descricao: "Discutir os usos da propaganda oficial na difusão de ideias nacionalistas a partir do Departamento de Imprensa e Propaganda, no governo Vargas." },
              { codigo: "EF09HIMOC17", descricao: "Debater o processo de urbanização brasileiro." },
            ],
          },
          {
            id: "9-1-7",
            titulo: "O trabalhismo e seu protagonismo político",
            sugestaoMetodologica: "O trabalhismo como força política, evidenciando seu significado histórico, projeto e desdobramentos na organização da vida pública brasileira.",
            habilidades: [
              { codigo: "EF09HIMOC18", descricao: "Compreender a importância do trabalhismo para a consolidação da política brasileira, bem como seus desdobramentos sobre a vida pública no país." },
            ],
          },
          {
            id: "9-1-8",
            titulo: "A questão indígena durante a República (até 1964)",
            sugestaoMetodologica: "A abordagem deve problematizar as lógicas que marcaram as relações entre o Estado e indígenas, evidenciando práticas de assimilação e violência. A análise precisa articular essas dinâmicas às pautas indígenas e afrodescendentes, destacando tensões, formas de resistência e impactos culturais, econômicos, religiosos e políticos associados a essas relações.",
            habilidades: [
              { codigo: "EF09HI07", descricao: "Identificar e explicar, em meio a lógicas de inclusão e exclusão, as pautas dos povos indígenas, no contexto republicano (até 1964), e das populações afrodescendentes." },
              { codigo: "EF09HIMOC19", descricao: "Problematizar as relações sociais e de poder em torno das pautas indígenas e afrodescendentes, considerando os aspectos culturais, religiosos, econômicos e políticos." },
            ],
          },
          {
            id: "9-1-9",
            titulo: "Anarquismo e protagonismo feminino",
            sugestaoMetodologica: "Discutir o anarquismo, o comunismo e o feminismo como expressões das disputas políticas e sociais do século XX. A abordagem deve destacar o protagonismo feminino, ressaltando conflitos, estratégias de mobilização e reivindicações por direitos. A reflexão precisa articular essas experiências às transformações nos debates sobre diversidade e cidadania, relacionando as conquistas de direitos políticos, sociais e civis à ação dos movimentos sociais.",
            habilidades: [
              { codigo: "EF09HI08", descricao: "Identificar as transformações ocorridas no debate sobre as questões da diversidade no Brasil durante o século XX e compreender o significado das mudanças de abordagem em relação ao tema." },
              { codigo: "EF09HI09", descricao: "Relacionar as conquistas de direitos políticos, sociais e civis à atuação de movimentos sociais." },
            ],
          },
        ],
      },
      {
        numero: 2,
        objetos: [
          {
            id: "9-2-1",
            titulo: "O mundo em conflito: a Primeira Guerra Mundial",
            sugestaoMetodologica: "Compreender o início do século XX como um período marcado por conflitos de grande escala e instabilidades econômicas, articulando a Primeira Guerra Mundial, a Revolução Russa e a crise capitalista de 1929 às dinâmicas do capitalismo e às disputas de poder.",
            habilidades: [
              { codigo: "EF09HI10", descricao: "Identificar e relacionar as dinâmicas do capitalismo e suas crises, os grandes conflitos mundiais e os conflitos vivenciados na Europa." },
              { codigo: "EF09HIMOC20", descricao: "Identificar os fatores que levaram a ocorrência da Primeira Guerra Mundial." },
              { codigo: "EF09HIMOC21", descricao: "Identificar os países envolvidos na Primeira Guerra." },
              { codigo: "EF09HIMOC22", descricao: "Analisar de que maneira a participação dos Estados Unidos na Primeira Guerra Mundial contribuiu para sua consolidação como potência econômica no pós-guerra." },
            ],
          },
          {
            id: "9-2-2",
            titulo: "A Revolução Russa",
            habilidades: [
              { codigo: "EF09HI11", descricao: "Identificar as especificidades e os desdobramentos mundiais da Revolução Russa, bem como seu significado histórico." },
              { codigo: "EF09HIMOC23", descricao: "Analisar os elementos econômicos, políticos e sociais que levaram ao colapso do regime czarista." },
              { codigo: "EF09HIMOC24", descricao: "Analisar os impactos políticos, sociais e econômicos da Revolução Russa no contexto do século XX." },
            ],
          },
          {
            id: "9-2-3",
            titulo: "A crise capitalista de 1929",
            habilidades: [
              { codigo: "EF09HI12", descricao: "Analisar a crise capitalista de 1929 e seus desdobramentos em relação à economia global." },
              { codigo: "EF09HIMOC25", descricao: "Relacionar os aspectos que fizeram com que a crise de 1929 atingisse proporções mundiais." },
              { codigo: "EF09HIMOC26", descricao: "Identificar as políticas de recuperação econômica norte-americana que foram colocadas em prática a fim de encerrar a grave crise econômica." },
            ],
          },
          {
            id: "9-2-4",
            titulo: "A emergência do fascismo e do nazismo",
            habilidades: [
              { codigo: "EF09HI13", descricao: "Descrever e contextualizar os processos da emergência do fascismo e do nazismo, a consolidação dos estados totalitários e as práticas de extermínio (como o holocausto)." },
              { codigo: "EF09HIMOC27", descricao: "Analisar o processo de ascensão dos regimes totalitários na Alemanha e na Itália." },
            ],
          },
          {
            id: "9-2-5",
            titulo: "A Segunda Guerra Mundial",
            sugestaoMetodologica: "A reflexão deve contemplar o Holocausto como expressão autoritária, bem como situar a criação da ONU e a afirmação dos Direitos Humanos no cenário do pós-guerra.",
            habilidades: [
              { codigo: "EF09HIMOC28", descricao: "Relacionar os resultados da Primeira Grande Guerra e a Crise de 1929 ao surgimento dos regimes totalitários." },
              { codigo: "EF09HIMOC29", descricao: "Discutir a importância que o Nazifascismo teve para o desencadeamento da Segunda Guerra Mundial." },
              { codigo: "EF09HIMOC30", descricao: "Conceituar o Holocausto, compreender suas causas e as consequências pós Segunda Guerra Mundial." },
              { codigo: "EF09HIMOC31", descricao: "Analisar as consequências da Segunda Guerra Mundial, considerando a atuação da Organização das Nações Unidas e a criação do Estado de Israel." },
            ],
          },
          {
            id: "9-2-6",
            titulo: "A Guerra Fria: confrontos de dois modelos políticos",
            sugestaoMetodologica: "Explorar a Guerra Fria como uma ordem internacional marcada pela polarização, disputas estratégicas e conflitos indiretos, destacando suas implicações globais. Conhecer os antecedentes que levaram à ascensão de Fidel Castro e o sucesso da revolução cubana, bem como considerar episódios e confrontos emblemáticos, como a Guerra do Vietnã, os conflitos árabe-israelenses e a crise da URSS.",
            habilidades: [
              { codigo: "EF09HIMOC32", descricao: "Conceituar Guerra Fria." },
              { codigo: "EF09HIMOC33", descricao: "Identificar de que maneira a polarização entre capitalismo e socialismo se manifestou em conflitos e alianças internacionais." },
              { codigo: "EF09HIMOC34", descricao: "Analisar as condições que levaram à Revolução Chinesa de 1949 e seus desdobramentos políticos e sociais." },
              { codigo: "EF09HIMOC35", descricao: "Explicar por que União Soviética e China desenvolveram experiências socialistas politicamente distintas." },
            ],
          },
          {
            id: "9-2-7",
            titulo: "O colonialismo na África e os processos de descolonização",
            sugestaoMetodologica: "Compreender o colonialismo europeu na África e na Ásia como forma de dominação política que produziu transformações nas sociedades locais ao longo do século XX. A abordagem deve evidenciar as dinâmicas de exploração, mecanismos de controle e as lógicas de resistência das populações submetidas ao domínio colonial. A análise precisa articular as guerras mundiais à crise do colonialismo e à emergência dos nacionalismos africanos e asiáticos, destacando a Conferência de Bandung como marco dessas reconfigurações.",
            habilidades: [
              { codigo: "EF09HI14", descricao: "Caracterizar e discutir as dinâmicas do colonialismo no continente africano e asiático e as lógicas de resistência das populações locais diante das questões internacionais." },
              { codigo: "EF09HIMOC41", descricao: "Reconhecer a importância da Conferência de Bandung para os países subdesenvolvidos." },
              { codigo: "EF09HI31", descricao: "Descrever e avaliar os processos de descolonização na África e na Ásia." },
              { codigo: "EF09HIMOC42", descricao: "Analisar os processos de independência das nações afro-asiáticas, considerando seus contextos históricos, estratégias políticas e impactos internacionais." },
            ],
          },
          {
            id: "9-2-8",
            titulo: "As experiências ditatoriais na América Latina",
            sugestaoMetodologica: "Explorar as experiências ditatoriais na América Latina como regimes marcados por centralização do poder, repressão e uso da força. A reflexão deve ressaltar mecanismos de controle, censura, formas de opressão e o uso da força, bem como as reformas econômicas e sociais e seus impactos. Devem ainda ser consideradas as políticas econômicas adotadas na região, como as formulações da CEPAL, a teoria da dependência e o neoliberalismo, enfatizando seus fundamentos, motivações e impactos sociais.",
            habilidades: [
              { codigo: "EF09HI29", descricao: "Descrever e analisar as experiências ditatoriais na América Latina, seus procedimentos e vínculos com o poder, em nível nacional e internacional, e a atuação de movimentos de contestação às ditaduras." },
              { codigo: "EF09HI30", descricao: "Comparar as características dos regimes ditatoriais latino-americanos." },
              { codigo: "EF09HI34", descricao: "Discutir as motivações da adoção de diferentes políticas econômicas na América Latina, assim como seus impactos sociais nos países da região." },
              { codigo: "EF09HIMOC43", descricao: "Comparar as características das ditaduras latino-americanas com a ditadura civil-militar brasileira, destacando suas diferenças." },
            ],
          },
          {
            id: "9-2-9",
            titulo: "O fim da Guerra Fria e o processo de globalização",
            sugestaoMetodologica: "Tratar o fim da Guerra Fria como um marco das relações internacionais, destacando o declínio da polarização política e seus efeitos no equilíbrio global de poder. A reflexão deve enfatizar os significados simbólicos da dissolução da URSS e suas implicações na reorganização econômica, política e ideológica em escala mundial. Devem ainda ser considerados os aspectos relacionados à globalização, ressaltando mudanças, permanências e críticas formuladas por movimentos sociais. A exposição precisa contemplar o papel das tecnologias digitais na intensificação dos fluxos de informação, nas formas de interação social e nas transformações das práticas políticas em diferentes escalas.",
            habilidades: [
              { codigo: "EF09HIMOC44", descricao: "Interpretar os significados simbólicos do fim da URSS e a relação com a ascensão do processo de globalização." },
              { codigo: "EF09HI32", descricao: "Analisar mudanças e permanências associadas ao processo de globalização, considerando os argumentos dos movimentos críticos às políticas globais." },
              { codigo: "EF09HI33", descricao: "Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação." },
            ],
          },
        ],
      },
      {
        numero: 3,
        objetos: [
          {
            id: "9-3-1",
            titulo: "O Brasil da era JK e o ideal de uma nação moderna: a urbanização e seus desdobramentos em um país em transformação",
            sugestaoMetodologica: "Interpretar o Brasil pós-1946 em suas transformações econômicas, políticas e culturais, ressaltando o governo JK e o ideal de modernização associado à industrialização e à urbanização. A proposta deve evidenciar tensões inerentes ao desenvolvimentismo, especialmente seus efeitos sobre as dinâmicas sociais e espaciais, além de situar as manifestações culturais dos anos 1960 como formas de intervenção e contestação política. A reflexão precisa considerar a ditadura civil-militar nas disputas de poder da época, destacando a repressão, a oposição, o significado do AI-5 e a atuação de diferentes atores sociais, em articulação com a Guerra Fria.",
            habilidades: [
              { codigo: "EF09HI17", descricao: "Identificar e analisar processos sociais, econômicos, culturais e políticos do Brasil a partir de 1946." },
              { codigo: "EF09HI18", descricao: "Descrever e analisar as relações entre as transformações urbanas e seus impactos na cultura brasileira entre 1946 e 1964 e na produção das desigualdades regionais e sociais." },
              { codigo: "EF09HIMOC45", descricao: "Analisar as políticas desenvolvimentistas do governo Juscelino Kubitschek e seus impactos na industrialização e na urbanização brasileira." },
              { codigo: "EF09HIMOC46", descricao: "Compreender a importância das manifestações culturais e artísticas como formas de manifestação política nos anos 1960." },
            ],
          },
          {
            id: "9-3-2",
            titulo: "A ditadura civil-militar e os processos de resistência",
            habilidades: [
              { codigo: "EF09HI19", descricao: "Identificar e compreender o processo que resultou na ditadura civil-militar no Brasil e discutir a emergência de questões relacionadas à memória e à justiça sobre os casos de violação dos direitos humanos." },
              { codigo: "EF09HI20", descricao: "Discutir os processos de resistência e as propostas de reorganização da sociedade brasileira durante a ditadura civil-militar." },
            ],
          },
          {
            id: "9-3-3",
            titulo: "O processo de redemocratização",
            sugestaoMetodologica: "Compreender a importância da campanha popular por eleições diretas no contexto de retorno à democracia brasileira como resultado das mobilizações sociais e das disputas políticas associadas ao esgotamento do regime civil-militar, ressaltando o significado das campanhas por eleições diretas e a rearticulação das forças políticas. A reflexão deve enfatizar o protagonismo da sociedade civil na redefinição das instituições e ampliação de direitos, destacando a Constituição de 1988 como marco simbólico.",
            habilidades: [
              { codigo: "EF09HI21", descricao: "Identificar e relacionar as demandas indígenas e quilombolas como forma de contestação ao modelo desenvolvimentista." },
              { codigo: "EF09HI22", descricao: "Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988." },
            ],
          },
          {
            id: "9-3-4",
            titulo: "A Constituição de 1988 e a emancipação das cidadanias",
            habilidades: [
              { codigo: "EF09HI23", descricao: "Identificar direitos civis, políticos e sociais expressos na Constituição de 1988 e relacioná-los à noção de cidadania e ao pacto da sociedade brasileira de combate a diversas formas de preconceito, como o racismo." },
            ],
          },
          {
            id: "9-3-5",
            titulo: "A história recente do Brasil: transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais",
            sugestaoMetodologica: "Tratar a história do Brasil, de 1989 aos dias atuais, como um período marcado por mudanças econômicas, disputas políticas e reconfigurações sociais. A exposição precisa contemplar a violência contra populações marginalizadas, enfatizando suas causas, bem como reconhecer a atuação de discursos e práticas discriminatórias na produção e reprodução das desigualdades, estimulando a construção de valores associados ao respeito, empatia e à cultura de paz.",
            habilidades: [
              { codigo: "EF09HI24", descricao: "Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões prioritárias para a promoção da cidadania e dos valores democráticos." },
              { codigo: "EF09HIMOC50", descricao: "Debater a importância do plano Real para a estabilização da economia brasileira." },
              { codigo: "EF09HIMOC51", descricao: "Explicar como as políticas adotadas nos governos FHC se inserem nas transformações econômicas e políticas do Brasil dos anos 1990." },
              { codigo: "EF09HIMOC52", descricao: "Discutir o governo Lula, levando em consideração a ampliação de políticas públicas e a ascensão de movimentos sociais." },
              { codigo: "EF09HIMOC53", descricao: "Analisar as Jornadas de 2013, identificando a diversidade de pautas e atores sociais." },
              { codigo: "EF09HIMOC54", descricao: "Analisar os governos Dilma, sua política econômica, escândalos de corrupção e o ocaso do impeachment." },
              { codigo: "EF09HIMOC55", descricao: "Analisar o papel das redes sociais na eleição de 2018, discutindo seus impactos na comunicação política, na formação da opinião pública e na circulação de desinformação." },
              { codigo: "EF09HI25", descricao: "Relacionar as transformações da sociedade brasileira aos protagonismos da sociedade civil após 1989." },
              { codigo: "EF09HI26", descricao: "Discutir e analisar as causas da violência contra populações marginalizadas (negros, indígenas, mulheres, homossexuais, camponeses, pobres etc.) com vistas à tomada de consciência e à construção de uma cultura de paz, empatia e respeito às pessoas." },
            ],
          },
          {
            id: "9-3-6",
            titulo: "O Brasil e suas relações internacionais na era da globalização",
            sugestaoMetodologica: "A reflexão deve destacar mudanças nas formas de inserção econômica, na circulação de bens, informações e referências culturais, bem como seus impactos nas relações políticas e nas estratégias de integração global. A exposição precisa enfatizar que a globalização envolve disputas, assimetrias e reconfigurações de poder, produzindo efeitos diferenciados sobre as sociedades e suas formas de organização.",
            habilidades: [
              { codigo: "EF09HI27", descricao: "Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do País no cenário internacional na era da globalização." },
            ],
          },
          {
            id: "9-3-7",
            titulo: "Os conflitos do século XXI e a questão do terrorismo",
            sugestaoMetodologica: "Analisar os novos tipos de conflitos políticos, baseados na radicalização e retorno ao nacionalismo, destacando as novas modalidades de enfrentamento e violência. Devem ainda ser consideradas as ondas migratórias e seus efeitos nas dinâmicas sociais e políticas, ressaltando o fortalecimento de nacionalismos, práticas de xenofobia e tensões entre grupos e identidades.",
            habilidades: [
              { codigo: "EF09HI28", descricao: "Analisar os aspectos relacionados ao fenômeno do terrorismo na contemporaneidade, incluindo os movimentos migratórios e os choques entre diferentes grupos e culturas." },
              { codigo: "EF09HIMOC58", descricao: "Identificar a importância das ondas migratórias para o acirramento dos nacionalismos e xenofobia." },
              { codigo: "EF09HIMOC59", descricao: "Debater as ações terroristas como resposta ao acirramento dos ânimos políticos." },
            ],
          },
          {
            id: "9-3-8",
            titulo: "Pluralidades e diversidades identitárias na atualidade",
            sugestaoMetodologica: "Devem ser contempladas as pautas dos povos indígenas no século XXI, evidenciando suas formas de participação e intervenção em diferentes escalas, além das tensões e reivindicações que marcam sua relação com o Estado e com as políticas públicas.",
            habilidades: [
              { codigo: "EF09HI36", descricao: "Identificar e discutir as diversidades identitárias e seus significados históricos no início do século XXI, combatendo qualquer forma de preconceito e violência." },
              { codigo: "EF09HIMOC60", descricao: "Conhecer e analisar as pautas dos povos indígenas e confrontá-las com as políticas públicas para esse grupo social." },
            ],
          },
        ],
      },
    ],
  },
];
