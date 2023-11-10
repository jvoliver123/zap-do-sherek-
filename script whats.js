async function enviarScript(scriptText) {
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
        textarea = main.querySelector(`div[contenteditable="true"]`)

    if (!textarea) throw new Error("Não há uma conversa aberta")

    for (const line of lines) {
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);

        if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`

Manifesto do Partido Comunista
Marx e Engels
 Um espectro ronda a Europa - o espectro do comunismo. Todas as
potências da velha Europa unem-se numa Santa Aliança para conjurá-lo: o papa e o czar, Metternich e
Guizot, os radicais da França e os policiais da Alemanha.
Que partido de oposição não foi acusado de comunista por seus adversários no poder? Que partido de
oposição, por sua vez, não lançou a seus adversários de direita ou de esquerda a pecha infamante de
comunista?
Duas conclusões decorrem desses fatos:
1a. O comunismo já é reconhecido como força por todas as potências da Europa;
2.a. É Tempo de os comunistas exporem, .à face do mundo inteiro, seu modo de ver, seus fins e suas
tendências, opondo um manifesto do próprio partido à lenda do espectro do comunismo.
Com este fim, reuniram-se, em Londres, comunistas de várias nacionalidades e redigiram o manifesto
seguinte, que será publicado em inglês, francês, alemão, italiano, flamengo e dinamarquês.
Burgueses e Proletários
A história de todas as sociedades que existiram até nossos dias tem sido a história das lutas de classes.
Homem livre e escravo, patrício e plebeu, barão e servo, mestre de corporação e companheiro, numa
palavra, opressores e oprimidos, em constante oposição, têm vivido numa guerra ininterrupta, ora franca,
ora disfarçada; uma guerra que terminou sempre, ou por uma transformação revolucionária, da sociedade
inteira, ou pela destruição das duas classes em luta.
Nas primeiras épocas históricas, verificamos, quase por toda parte, uma completa divisão da sociedade
em classes distintas, uma escala graduada de condições sociais. Na Roma antiga encontramos patrícios,
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (1 of 21) [01/07/2001 23:31:58]
cavaleiros, plebeus, escravos; na Idade Média, senhores, vassalos, mestres, companheiros, servos; e, em
cada uma destas classes, gradações especiais.
A sociedade burguesa moderna, que brotou das ruínas da sociedade feudal, não aboliu os antagonismos
de classe. Não fez senão substituir novas classes, novas condições de opressão, novas formas de luta às
que existiram no passado.
Entretanto, a nossa época, a época da burguesia, caracteriza-se por ter simplificado os antagonismos de
classe. A sociedade divide-se cada vez mais em dois vastos campos opostos, em duas grandes classes
diametralmente opostas: a burguesia e o proletariado.
Dos servos da Idade Média nasceram os burgueses livres das primeiras cidades; desta população
municipal, saíram os primeiros elementos da burguesia.
A descoberta da América, a circunavegação da África ofereceram à burguesia em assenso um novo
campo de ação. Os mercados da Índia e da China, a colonização da América, o comércio colonial, o
incremento dos meios de troca e, em geral, das mercadorias imprimiram um impulso, desconhecido até
então, ao comércio, à indústria, à navegação, e, por conseguinte, desenvolveram rapidamente o elemento
revolucionário da sociedade feudal em decomposição.
A antiga organização feudal da indústria, em que esta era circunscrita a corporações fechadas, já não
podia satisfazer às necessidades que cresciam com a abertura de novos mercados. A manufatura a
substituiu. A pequena burguesia industrial suplantou os mestres das corporações; a divisão do trabalho
entre as diferentes corporações desapareceu diante da divisão do trabalho dentro da própria oficina.
Todavia, os mercados ampliavam-se cada vez mais: a procura de mercadorias aumentava sempre. A
própria manufatura tornou-se insuficiente; então, o vapor e a maquinaria revolucionaram a produção
industrial. A grande indústria moderna suplantou a manufatura; a média burguesia manufatureira cedeu
lugar aos milionários da indústria, aos chefes de verdadeiros exércitos industriais, aos burgueses
modernos.
A grande indústria criou o mercado mundial preparado pela descoberta da América: O mercado mundial
acelerou prodigiosamente o desenvolvimento do comércio, da navegação e dos meios de comunicação
por terra. Este desenvolvimento reagiu por sua vez sobre a extensão da indústria; e, à medida que a
indústria, o comércio, a navegação, as vias férreas se desenvolviam, crescia a burguesia, multiplicando
seus capitais e relegando a segundo plano as classes legadas pela Idade Média.
Vemos, pois, que a própria burguesia moderna é o produto de um longo processo de desenvolvimento, de
uma série de revoluções no modo de produção e de troca.
Cada etapa da evolução percorrida, pela burguesia era acompanhada de um progresso político
correspondente. Classe oprimida pelo despotismo feudal, associação armada administrando-se a si
própria na comuna ; aqui, república urbana independente, ali, terceiro estado, tributário da monarquia;
depois, durante o período manufatureiro, contrapeso da nobreza na monarquia feudal ou absoluta, pedra
angular das grandes monarquias, a burguesia, desde o estabelecimento da grande indústria e do mercado
mundial, conquistou, finalmente, a soberania política exclusiva no Estado representativo moderno. O
governo moderno não é senão um comitê para gerir os negócios comuns de toda a classe burguesa.
A burguesia desempenhou na História um papel eminentemente revolucionário.
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (2 of 21) [01/07/2001 23:31:58]
Onde quer que tenha conquistado o poder, a burguesia calcou aos pés as relações feudais, patriarcais e
idílicas. Todos os complexos e variados laços que prendiam o homem feudal a seus "superiores naturais"
ela os despedaçou sem piedade, para só deixar subsistir, de homem para homem, o laço do frio interesse,
as duras exigências do "pagamento à vista". Afogou os fervores sagrados do êxtase religioso, do
entusiasmo cavalheiresco, do sentimentalismo pequeno-burguês nas águas geladas do cálculo egoísta.
Fez da dignidade pessoal um simples valor de troca; substituiu as numerosas liberdades, conquistadas
com tanto esforço, pela única e implacável liberdade de comércio. Em uma palavra, em lugar da
exploração velada por ilusões religiosas e políticas, a burguesia colocou uma exploração aberta, cínica,
direta e brutal.
A burguesia despojou de sua auréola todas as atividades até então reputadas veneráveis e encaradas com
piedoso respeito. Do médico, do jurista, do sacerdote, do poeta, do sábio fez seus servidores assalariados.
A burguesia rasgou o véu de sentimentalismo que envolvia as relações de família e reduziu-as a simples
relações monetárias.
A burguesia revelou como a brutal manifestação de força na Idade Média, tão admirada pela reação,
encontra seu complemento natural na ociosidade mais completa. Foi a primeira a provar o que pode
realizar a atividade humana: criou maravilhas maiores que as pirâmides do Egito, os aquedutos romanos,
as catedrais góticas; conduziu expedições que empanaram mesmo as antigas invasões e as Cruzadas.
A burguesia só pode existir com a condição de revolucionar incessantemente os instrumentos de
produção, por conseguinte, as relações de produção e, como isso, todas as relações sociais. A
conservação inalterada do antigo modo de produção constituía, pelo contrário, a primeira condição de
existência de todas as classes industriais anteriores. Essa revolução contínua da produção, esse abalo
constante de todo o sistema social, essa agitação permanente e essa falta de segurança distinguem a
época burguesa de todas as precedentes. Dissolvem-se todas as relações sociais antigas e cristalizadas,
com seu cortejo de concepções e de idéias secularmente veneradas; as relações que as substituem
tornam-se antiquadas antes de se ossificar. Tudo que era sólido e estável se esfuma, tudo o que era
sagrado é profanado, e os homens são obrigados finalmente a encarar com serenidade suas condições de
existência e suas relações recíprocas.
Impelida pela necessidade de mercados sempre novos, a burguesia invade todo o globo. Necessita
estabelecer-se em toda parte, explorar em toda parte, criar vínculos em toda, parte.
Pela exploração do mercado mundial a burguesia imprime um caráter cosmopolita à produção e ao
consumo em todos os países. Para desespero dos reacionários, ela retirou à indústria sua base nacional.
As velhas indústrias nacionais foram destruídas e continuam a sê-lo diariamente. São suplantadas por
novas indústrias, cuja introdução se torna uma questão vital para todas as nações civilizadas, indústrias
que não empregam mais matérias-primas autóctones, mas sim matérias-primas vindas das regiões mais
distantes, e cujos produtos se consomem não somente no próprio país mas em todas as partes do globo.
Em lugar das antigas necessidades, satisfeitas pelos produtos nacionais, nascem novas necessidades, que
reclamam para sua satisfação os produtos das regiões mais longínquas e dos climas mais diversos. Em
lugar do antigo isolamento de regiões e nações que se bastavam a si próprias, desenvolvem-se um
intercâmbio universal, uma universal interdependência das nações. E isto se refere tanto à produção
material como à produção intelectual.
As criações intelectuais de uma nação tornam-se propriedade comum de todas. A estreiteza e o
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (3 of 21) [01/07/2001 23:31:58]
exclusivismo nacionais tornam-se cada vez mais impossíveis; das inúmeras literaturas nacionais e locais,
nasce uma literatura universal.
Devido ao rápido aperfeiçoamento dos instrumentos de produção e ao constante progresso dos meios de
comunicação, a burguesia arrasta para a torrente da civilização mesmo as nações mais bárbaras. Os
baixos preços de seus produtos são a artilharia pesada que destroi todas as muralhas da China e obriga a
capitularem os bárbaros mais tenazmente hostis aos estrangeiros. Sob pena de morte, ela obriga todas as
nações a adotarem o modo burguês de produção, constrange-as a abraçar o que ela chama civilização,
isto é, a se tornarem burguesas. Em uma palavra, cria um mundo à sua imagem e semelhança.
A burguesia submeteu o campo à cidade. Criou grandes centros urbanos; aumentou prodigiosamente. a
população das cidades em relação à dos campos e, com isso, arrancou uma grande parte da população do
embrutecimento da vida rural. Do mesmo modo que subordinou o campo à cidade, os países bárbaros ou
semi-bárbaros aos países civilizados, subordinou os povos camponeses aos povos burgueses, o Oriente
ao Ocidente.
A burguesia suprime cada vez mais a dispersão dos meios de produção, da propriedade e da população.
Aglomerou as populações, centralizou os meios de produção e concentrou a propriedade em poucas
mãos. A conseqüência necessária dessas transformações foi a centralização política. Províncias
independentes, apenas ligadas por débeis laços federativos, possuindo interesses, leis, governos e tarifas
aduaneiras diferentes, foram reunidas em uma só nação, com um só governo, uma só lei, um só interesse
nacional de classe, uma só barreira alfandegária.
A burguesia, durante seu domínio de classe, apenas secular, criou forças produtivas mais numerosas e
mais colossais que todas as gerações passadas em conjunto. A subjugação das forças da natureza, as
máquinas, a aplicação da . química à indústria e à agricultura, a navegação a vapor, as estradas de ferro, o
telégrafo elétrico, a exploração de continentes inteiros, a canalização dos rios, populações inteiras
brotando na terra como por encanto - que século anterior teria suspeitado que semelhantes forças
produtivas estivessem adormecidas no seio do trabalho social?
Vemos pois: os meios de produção e de troca, sobre cuja base se ergue a burguesia, foram gerados no
seio da sociedade feudal. Em um certo grau do desenvolvimento desses meios de produção e de troca, as
condições em que a sociedade feudal produzia e trocava, a .organização feudal da agricultura e da
manufatura, em suma, o regime feudal de propriedade, deixaram de corresponder às forças produtivas em
pleno desenvolvimento. Entravavam a produção em lugar de impulsioná-la. Transformaram-se em outras
tantas cadeias que era preciso despedaçar; foram despedaçadas.
Em seu lugar, estabeleceu-se a livre concorrência, com uma organização social e política correspondente,
com a supremacia econômica e política da classe burguesa.
Assistimos hoje a um processo semelhante. As relações burguesas de produção e de troca, o regime
burguês de propriedade, a sociedade burguesa moderna, que conjurou gigantescos meios de produção e
de troca, assemelha-se ao feiticeiro que já não pode controlar as potências infernais que pôs em
movimento com suas palavras mágicas. Há dezenas de anos, a história da indústria e do comércio não é
senão a história da revolta das forças produtivas modernas contra as modernas relações de produção e de
propriedade que condicionam a existência da burguesia e seu domínio. Basta mencionar as crises
comerciais que, repetindo-se periodicamente, ameaçam cada vez mais a existência da sociedade
burguesa. Cada crise destroi regularmente não só uma grande massa de produtos já fabricados, mas
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (4 of 21) [01/07/2001 23:31:58]
também uma grande parte das próprias forças produtivas já desenvolvidas. Uma epidemia, que em
qualquer outra época teria parecido um paradoxo, desaba sobre a sociedade - a epidemia da
superprodução. Subitamente, a sociedade vê-se reconduzida a um estado de barbaria momentânea;
dir-se-ia que a fome ou uma guerra de extermínio cortaram-lhe todos os meios de subsistência; a
indústria e o comércio parecem aniquilados. E por quê? Porque a sociedade possui demasiada
civilização, demasiados meios de subsistência, demasiada indústria, demasiado comércio. As forças
produtivas de que dispõe não mais favorecem o desenvolvimento das relações de propriedade burguesa;
pelo contrário, tornaram-se por demais poderosas para essas condições, que passam a entravá-las; e todas
as vezes que as forças produtivas sociais se libertam desses entraves, precipitam na desordem a sociedade
inteira e ameaçam a existência da propriedade burguesa. O sistema burguês tornou-se demasiado estreito
para conter as riquezas criadas em seu seio. De que maneira consegue a burguesia vencer essas crises?
De um lado, pela destruição violenta de grande quantidade de forças produtivas; de outro lado, pela
conquista de novos mercados e pela exploração mais intensa dos antigos. A que leva isso? Ao preparo de
crises mais extensas e mais destruidoras e à diminuição dos meios de evitá-las.
As armas que a burguesia utilizou para abater o feudalismo, voltam-se hoje contra a própria burguesia. A
burguesia, porém, não forjou somente as armas que lhe darão morte; produziu também os homens que
manejarão essas armas - os operários modernos, os proletários. Com o desenvolvimento da burguesia,
isto é, do capital, desenvolve-se também o proletariado, a classe dos operários modernos, que só podem
viver se encontrarem trabalho, e que só encontram trabalho na medida em que este aumenta o capital.
Esses operários, constrangidos a vender-se diariamente, são mercadoria, artigo de comércio como
qualquer outro; em conseqüência, estão sujeitos a todas as vicissitudes da concorrência, a todas as
flutuações do mercado. O crescente emprego de máquinas e a divisão do trabalho, despojando o trabalho
do operário de seu caráter autônomo, tiram-lhe todo atrativo. O produtor passa a um simples apêndice da
máquina e só se requer dele a operação mais simples, mais monótona, mais fácil de aprender. Desse
modo, o custo do operário se reduz, quase exclusivamente, aos meios de manutenção que lhe são
necessários para viver e perpetuar sua existência. Ora, o preço do trabalho , como de toda mercadoria, é
igual ao custo de sua produção. Portanto, à medida que aumenta o caráter enfadonho do trabalho,
decrescem os salários. Mais ainda, a quantidade de trabalho cresce com o desenvolvimento do
maquinismo e da divisão do trabalho, quer pelo prolongamento das horas de labor, quer pelo aumento do
trabalho exigido em um tempo determinado, pela aceleração do movimento das máquinas, etc. A
indústria moderna transformou a pequena oficina do antigo mestre da corporação patriarcal na grande
fábrica do industrial capitalista. Massas de operários, amontoados na fábrica, são organizadas
militarmente. Como soldados da indústria, estão sob a vigilância de uma hierarquia completa de oficiais
e suboficiais. Não são somente escravos da classe burguesa, do Estado burguês, mas também
diariamente, a cada hora, escravos da máquina, do contramestre e, sobretudo, do dono da fábrica. E esse
despotismo é tanto mais mesquinho, odioso e exasperador quanto maior é a franqueza com que proclama
ter no lucro seu objetivo exclusivo. Quanto menos o trabalho exige habilidade e força, isto é, quanto mais
a indústria moderna progride, tanto mais o trabalho dos homens é suplantado pelo das mulheres e
crianças. As diferenças de idade e de sexo não têm mais importância social para a classe operária. Não há
senão instrumentos de trabalho, cujo preço varia segundo a idade e o sexo. Depois de sofrer a exploração
do fabricante e de receber seu salário em dinheiro, o operário torna-se presa de outros membros da
burguesia, do proprietário, do varejista, do usurário, etc. As camadas inferiores da classe média de
outrora, os pequenos industriais, pequenos comerciantes e pessoas que possuem rendas, artesãos e
camponeses, caem nas fileiras do proletariado: uns porque seus pequenos capitais, não lhes permitindo
empregar os processos da grande indústria, sucumbiram na concorrência com os grandes capitalistas;
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (5 of 21) [01/07/2001 23:31:58]
outros porque sua habilidade profissional é depreciada pelos novos métodos de produção. Assim, o
proletariado é recrutado em todas as classes da população. O proletariado passa por diferentes fases de
desenvolvimento. Logo que nasce começa sua luta contra a burguesia. A princípio, empenham-se na luta
operários isolados, mais tarde, operários de uma mesma fábrica, finalmente operários do mesmo ramo de
indústria, de uma mesma localidade, contra o burguês que os explora diretamente. Não se limitam a
atacar as relações burguesas de produção, atacam os instrumentos de produção: destroem as mercadorias
estrangeiras que lhes fazem concorrência, quebram as máquinas, queimam as fábricas e esforçam-se para
reconquistar a posição perdida do artesão da Idade Média. Nessa fase, constitui o proletariado massa
disseminada por todo o país e dispersa pela concorrência. Se, por vezes, os operários se unem para agir
em massa compacta, isto não é ainda o resultado de sua própria união, mas da união da burguesia que,
para atingir seus próprios fins políticos, é levada a por em movimento todo o proletariado, o que ainda
pode fazer provisoriamente. Durante essa fase, os proletários não combatem ainda seus próprios
inimigos, mas os inimigos de seus inimigos, isto é, os restos da monarquia absoluta, os proprietários
territoriais, os burgueses não industriais, os pequenos burgueses. Todo o movimento histórico está desse
modo concentrado nas mães da burguesia e qualquer vitória alcançada nessas condições é uma vitória
burguesa. Ora, a indústria, desenvolvendo-se, não somente aumenta o número dos proletários, mas
concentra-os em massas cada vez mais consideráveis; sua força cresce e eles adquirem maior consciência
dela. Os interesses, as condições de existência dos proletários se igualam cada vez mais, à medida que a
máquina extingue toda diferença do trabalho e quase por toda parte reduz o salário a um nível igualmente
baixo. Em virtude da concorrência crescente dos burgueses entre si e devido às crises comerciais que
disso resultam, os salários se tornam cada vez mais instáveis; o aperfeiçoamento constante e cada vez
mais rápido das máquinas torna a condição de vida do operário cada vez mais precária; os choques
individuais entre o operário e o burguês tomam cada vez mais o caráter de choques entre duas classes. Os
operários começam a formar uniões contra os burgueses e atuam em comum na defesa de seus salários;
chegam a fundar associações permanentes a fim de se prepararem, na previsão daqueles choques
eventuais. Aqui e ali a luta se transforma em motim. Os operários triunfam às vezes; mas é um triunfo
efêmero. O verdadeiro resultado de suas lutas não é o êxito imediato, mas a união cada vez mais ampla
dos trabalhadores. Esta união é facilitada pelo crescimento dos meios de comunicação criados pela
grande indústria e que permitem o contato entre operários de localidades diferentes. Ora, basta esse
contato para concentrar as numerosas lutas locais, que têm o mesmo caráter em toda parte, em uma luta
nacional, em uma luta de classes. Mas toda luta de classes é uma luta política. E a união que os
habitantes das cidades da Idade Média levavam séculos a realizar, com seus caminhos vicinais, os
proletários modernos realizam em alguns anos por meio das vias férreas. A organização do proletariado
em classe e, portanto, em partido político, é incessantemente destruída pela concorrência que fazem entre
si os próprios operários. Mas renasce sempre, e cada vez mais forte, mais firme, mais poderosa.
Aproveita-se das divisões intestinas da burguesia para obrigá-la ao reconhecimento legal de certos
interesses da classe operária, como, por exemplo, a lei da jornada de dez horas de trabalho na Inglaterra.
Em geral, os choques que se produzem na velha sociedade favorecem de diversos modos o
desenvolvimento do proletariado. A burguesia vive em guerra perpétua; primeiro, contra a aristocracia;
depois, contra as frações da própria burguesia cujos interesses se encontram em conflito com os
progressos da indústria; e sempre contra a burguesia dos países estrangeiros. Em todas essas lutas, vê-se
forçada a apelar para o proletariado, reclamar seu concurso e arrastá-lo assim para o movimento político,
de modo que a burguesia fornece aos proletários os elementos de sua própria educação política, isto é,
armas contra ela própria. Demais, como já vimo, frações inteiras da classe dominante, em conseqüência
do desenvolvimento da indústria são precipitadas no proletariado, ou ameaçadas, pelo menos, em suas
condições de existência. Também elas trazem ao proletariado numerosos elementos de educação.
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (6 of 21) [01/07/2001 23:31:58]
Finalmente, nos períodos em que a luta de classes se aproxima da hora decisiva, o processo de dissolução
da classe dominante, de toda a velha sociedade, adquire um caráter tão violento e agudo, que uma
pequena fração da classe dominante se desliga desta, ligando-se à classe , revolucionária, a classe que
traz em si o futuro. Do mesmo modo que outrora uma parte da nobreza passou-se para a burguesia, em
nossos dias, uma parte da burguesia passa-se para o proletariado, especialmente a parte dos ideólogos
burgueses que chegaram à compreensão teórica do movimento histórico em seu conjunto. De todas as
classes que ora enfrentam a burguesia, só o proletariado é uma classe verdadeiramente revolucionária. As
outras classes degeneram e perecem com o desenvolvimento da grande indústria; o proletariado pelo
contrário, é seu produto mais autêntico. As classes médias - pequenos comerciantes, pequenos
fabricantes, artesãos, camponeses - combatem a burguês " porque esta compromete sua existência como
classes médias. Não são, pois, revolucionárias, mas conservadoras; mais ainda, reacionárias, pois
pretendem fazer girar para trás a rada da História. Quando são revolucionárias é em conseqüência de sua
iminente passagem para o proletariado; não defendem então seus interesses atuais, mas seus interesses
futuros; abandonam seu próprio ponto de vista para se colocar no do proletariado.
O lumpen-proletariado, esse produto passivo da putrefação das camadas mais baixas da velha sociedade,
pode, às vezes, ser arrastado ao movimento por uma revolução proletária; todavia, suas condições de vida
o predispõem mais a vender-se a reação.
Nas condições de existência do proletariado já estão destruídas as da velha sociedade. O proletário não
tem propriedade; suas relações com a mulher e os filhos nada têm de comum com as relações familiares
burguesas. O trabalho industrial moderno, a sujeição do operário pelo capital, tanto na Inglaterra como na
França, na América como na Alemanha, despoja o proletário de todo caráter nacional. As leis, a moral, a
religião são para ele meros preconceitos burgueses, atrás dos quais se ocultam outros tantos interesses
burgueses.
Todas as classes que no passado conquistaram o poder trataram de consolidar a situação adquirida
submetendo a sociedade às suas condições de apropriação. Os proletários não podem apoderar-se das
forças produtivas sociais senão abolindo o modo de apropriação que era próprio a estas e, por
conseguinte, todo modo de apropriação em vigor até hoje. Os proletários nada têm de seu a salvaguardar;
sua missão é destruir todas as garantias e seguranças da propriedade privada até aqui existentes.
Todos os movimentos históricos têm sido, até hoje, movimentos de minorias ou em proveito de minorias.
O movimento proletário é o movimento independente da imensa maioria em proveito da imensa maioria.
O proletariado, a camada inferior da sociedade atual, não pode erguer-se, por-se de pé, sem fazer saltar
todos os estratos superpostos que constituem a sociedade oficial.
A luta do proletariado contra a burguesia, embora não seja na essência uma luta nacional, reverte-se
contudo dessa forma nos primeiros tempos. É natural que o proletariado de cada país deva, antes de tudo,
liquidar sua própria burguesia.
Esboçando em linhas gerais as fases do desenvolvimento proletário, descrevemos a história da guerra
civil, mais ou menos oculta, que lavra na sociedade atual, até a hora em que essa guerra explode numa
revolução aberta e o proletariado estabelece sua dominação pela derrubada violenta da burguesia.
Todas as sociedades anteriores, como vimos, se basearam no antagonismo entre classes opressoras e
classes oprimidas. Mas para oprimir uma classe é preciso poder garantir-lhe condições tais que lhe
permitam pelo menos uma existência de escravo: O servo, em plena servidão, conseguia tornar-se
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (7 of 21) [01/07/2001 23:31:58]
membro da comuna, da mesma forma que o pequeno burguês, sob o jugo do absolutismo feudal,
elevava-se à categoria de burguês. O operário moderno, pelo contrário, longe de se elevar com o
progresso da indústria, desce cada vez mais abaixo das condições de sua própria classe. O trabalhador cai
no pauperismo, e este cresce ainda mais rapidamente que a população e a riqueza. É, pois, evidente que a
burguesia é incapaz de continuar desempenhando o papel de classe dominante ; e de impor à sociedade,
como lei suprema, as condições . de existência de sua classe. Não pode exercer o seu ' domínio porque
não pode mais assegurar a existência de seu escravo, mesmo no quadro de sua escravidão, porque é
obrigada a deixá-lo cair numa tal situação, que deve nutri-lo em lugar de se fazer nutrir por ele. A
sociedade não pode mais existir sob sua dominação, o que quer dizer que a existência da burguesia é,
doravante, incompatível com a da sociedade.
A condição essencial da existência e da supremacia da classe burguesa é a acumulação da riqueza nas
mãos dos particulares, a formação e o crescimento do capital a condição de existência do capital é o
trabalho assalariado. Este baseia-se exclusivamente na concorrência dos operários entre si. O progresso
da indústria, de que a burguesia é agente passivo e inconsciente, substitui o isolamento dos operários,
resultante de sua competição, por sua união revolucionária mediante a associação. Assim, o
desenvolvimento da grande indústria socava o terreno em que a burguesia assentou o seu regime de
produção e de apropriação dos produtos. A burguesia produz, sobretudo, seus próprios coveiros. Sua
queda e a vitória do proletariado são igualmente inevitáveis.
Proletários e comunistas
Qual a posição dos comunistas diante dos proletários em geral? Os comunistas não formam um partido à
parte, oposto aos outros partidos operários.
Não têm interesses que os separem do proletariado em geral.
Não proclamam princípios particulares, segundo os quais pretenderiam modelar o movimento operário.
Os comunistas só se distinguem dos outros partidos operários em dois pontos: 1) Nas diversas lutas
nacionais dos proletários, destacam e fazem prevalecer os interesses comuns do proletariado,
independentemente da nacionalidade; 2) Nas diferentes fases por que passa a luta entre proletários e
burgueses, representam, sempre e em toda parte, os interesses do movimento em seu conjunto.
Praticamente, os comunistas constituem, pois, a fração mais resoluta dos partidos operários de cada país,
a fração que impulsiona as demais; teoricamente têm sobre o resto do proletariado a vantagem de uma
compreensão nítida das condições, da marcha e dos fins gerais do movimento proletário.
O objetivo imediato dos comunistas é o mesmo que o de todos os demais partidos proletários:
constituição dos proletários em classe, derrubada da supremacia burguesa, conquista do poder político
pelo proletariado
. As concepções teóricas dos comunistas não se baseiam, de modo algum, em idéias ou princípios
inventados ou descobertos por tal ou qual reformador do mundo. São apenas a expressão geral das
condições reais de uma luta de classes existente, de um movimento histórico que se desenvolve sob os
nossos olhos. A abolição das relações de propriedade que têm existido até hoje não é uma característica
peculiar e exclusiva do comunismo.
Todas as relações de propriedade têm passado por modificações constantes em conseqüência das
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (8 of 21) [01/07/2001 23:31:58]
contínuas transformações das condições históricas.
A Revolução Francesa, por exemplo, aboliu a propriedade feudal em proveito da propriedade burguesa.
O que caracteriza o comunismo não é a abolição da propriedade em geral, mas a abolição da propriedade
burguesa. Ora, a propriedade privada atual, a propriedade burguesa, é a última e mais perfeita expressão
do modo de produção e de apropriação baseado nos antagonismos de classe, na exploração de uns pelos
outros.
Nesse sentido, os comunistas podem resumir sua teoria nesta fórmula única: abolição da propriedade
privada. Censuram-nos, a nós comunistas, o querer abolir a propriedade pessoalmente adquirida, fruto do
trabalho do indivíduo, propriedade que se declara ser a base de toda liberdade, de toda independência
individual.
A propriedade pessoal, fruto do trabalho e do mérito! Pretende-se falar da propriedade do pequeno
burguês, do pequeno camponês, forma de propriedade anterior à propriedade burguesa? Não precisamos
aboli-la, porque o progresso da indústria já a aboliu e continua a aboli-la diariamente. Ou por ventura
pretende-se falar da propriedade privada atual, da propriedade burguesa?
Mas, o trabalho do proletário, o trabalho assalariado cria propriedade para o proletário? De nenhum
modo. Cria o capital, isto é, a propriedade que explora o trabalho assalariado e que só pode aumentar sob
a condição de produzir novo trabalho assalariado, a fim de explorá-lo novamente. Em sua forma atual a
propriedade se move entre os dois termos antagônicos: capital e trabalho.
Examinemos os dois termos dessa antinomia.
Ser capitalista significa ocupar não somente uma posição pessoal, mas também uma posição social na
produção. O capital é um produto coletivo: só pode ser posto em movimento pelos esforços combinados
de muitos membros da sociedade, e mesmo, em última instância, pelos esforços combinados de todos os
membros da sociedade.
O capital não é, pois, uma força pessoal; é uma força social. Assim, quando o capital é transformado em
propriedade comum, pertencente a todos os membros da sociedade, não é uma propriedade pessoal que
se transforma em propriedade social. O que se transformou foi apenas o caráter social da propriedade.
Esta, perde seu caráter de classe.
Passemos ao trabalho assalariado.
O preço médio que se paga pelo trabalho assalariado é o mínimo de salário, isto é, a soma dos meios de
subsistência necessária para que o operário viva como operário. Por conseguinte, o que o operário obtém
com o seu trabalho é o estritamente necessário para a mera conservação e reprodução de sua vida. Não
queremos de nenhum modo abolir essa apropriação pessoal dos produtos do trabalho, indispensável à
manutenção e à reprodução da vida humana, pois essa apropriação não deixa nenhum lucro líquido que
confira poder sobre o trabalho alheio. O que queremos é suprimir o caráter miserável desta, apropriação
que faz com que o operário só viva para aumentar o capital e só viva na medida em que o exigem os
interesses da classe dominante.
Na sociedade burguesa, o trabalho vivo é sempre um meio de aumentar o trabalho acumulado. Na
sociedade comunista, o trabalho acumulado é sempre um meio de ampliar, enriquecer e melhorar cada
vez mais a existência dos trabalhadores.
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (9 of 21) [01/07/2001 23:31:58]
Na sociedade burguesa, o passado domina o presente; na sociedade comunista é o presente que domina o
passado. Na sociedade burguesa, o capital é independente e pessoal, ao passo que o indivíduo que
trabalha não tem nem independência nem personalidade. a abolição de semelhante estado de coisas que a
burguesia verbera como a abolição da individualidade e da liberdade. E com razão. Porque se trata
efetivamente de abolir a individualidade burguesa, a independência burguesa, a liberdade burguesa.
Por liberdade, nas condições atuais da produção burguesa, compreende-se a liberdade de comércio, a
liberdade de comprar e vender.
Mas, se o tráfico desaparece, desaparecerá também a liberdade de traficar. Demais, toda a fraseologia
sobre a liberdade de comércio, bem como todas as basófias liberais de nossa burguesia só têm sentido
quando se referem ao comércio tolhido e ao burguês oprimido da Idade Média; nenhum sentido têm
quando se trata da abolição comunista do tráfico, das relações burguesas de produção e da própria
burguesia.
Horrorizai-vos porque queremos abolir a propriedade privada. Mas em vossa sociedade a propriedade
privada está abolida para nove décimos de seus membros. E é precisamente porque não existe para estes
nove décimos que ela existe para vós. Acusai-nos, portanto, de querer abolir uma forma de propriedade
que só pode existir com a condição de privar de toda propriedade a imensa maioria da sociedade.
Em resumo, acusai-nos de querer abolir vossa propriedade. De fato, é isso que queremos.
Desde o momento em que o trabalho não mais pode ser convertido em capital, em dinheiro, em renda da
terra, numa palavra, em poder social capaz de ser monopolizado, isto é, desde o momento em que a
propriedade individual não possa mais se converter em propriedade burguesa, declarais que a
individualidade está suprimida.
Confessais, pois, que quando falais do indivíduo, quereis referir-vos unicamente ao burguês, ao
proprietário burguês. E este indivíduo, sem dúvida, deve ser suprimido.
O comunismo não retira a ninguém o poder de apropriar-se de sua parte dos produtos sociais, apenas
suprime o poder de escravizar o trabalho de outrem por meio dessa apropriação.
Alega-se ainda que, com a abolição da propriedade privada, toda a atividade cessaria, uma inércia geral
apoderar-se-ia do mundo.
Se isso fosse verdade, há muito que a sociedade burguesa teria sucumbido à ociosidade, pois que os que
no regime burguês trabalham não lucram e os que lucram não trabalham. Toda a objeção se reduz a essa
tautologia : não haverá mais trabalho assalariado quando não mais existir capital.
As acusações feitas contra o modo comunista de produção e de apropriação dos produtos materiais têm
sido feitas igualmente contra a produção e a apropriação dos produtos do trabalho intelectual. Assim
como o desaparecimento da propriedade de classe eqüivale, para o burguês, ao desaparecimento de toda
a produção, também o desaparecimento da cultura de classe significa, para ele, o desaparecimento de
toda a cultura.
A cultura, cuja perda o burguês deplora, é, para a imensa maioria dos homens, apenas um adestramento
que os transforma em máquinas.
Mas não discutais conosco enquanto aplicardes à abolição da propriedade burguesa o critério de vossas
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (10 of 21) [01/07/2001 23:31:58]
noções burguesas de liberdade, cultura, direito, etc. Vossas próprias idéias decorrem do regime burguês
de produção e de propriedade burguesa, assim como vosso direito não passa da vontade de vossa classe
erigida em lei, vontade cujo conteúdo é determinado pelas condições materiais de vossa existência como
classe.
A falsa concepção interesseira que vos leva a erigir em leis eternas da natureza e da razão as relações
sociais oriundas do vosso modo de produção e de propriedade - relações transitórias que surgem e
desaparecem no curso da produção - a compartilhais com todas as classes dominantes já desaparecidas. O
que admitis para a propriedade antiga, o que admitis para a propriedade feudal, já não vos atreveis a
admitir para a propriedade burguesa.
Abolição da família! Até os mais radicais ficam indignados diante desse desígnio infame dos comunistas.
Sobre que fundamento repousa a família atual, a família burguesa? No capital, no ganho individual. A
família, na sua plenitude, só existe para a burguesia, mas encontra seu complemento na supressão forçada
da família para o proletário e na prostituição pública.
A família burguesa desvanece-se naturalmente com o desvanecer de seu complemento, e uma e outra
desaparecerão com o desaparecimento do capital.
Acusai-nos de querer abolir a exploração das crianças por seus próprios pais? Confessamos este crime.
Dizeis também que destruímos os vínculos mais íntimos, substituindo a educação doméstica pela
educação social. E vossa educação não é também determinada pela sociedade, pelas condições sociais em
que educais vossos filhos, pela intervenção direta ou indireta da sociedade por meio de vossas escolas,
etc? Os comunistas não inventaram essa intromissão da sociedade na educação, apenas mudam seu
caráter e arrancam a educação à influência da classe dominante.
As declamações burguesas sobre a família e a educação, sobre os doces laços que unem a criança aos
pais, tornam-se cada vez mais repugnantes à medida que a grande indústria destroi todos os laços
familiares do proletário e transforma as crianças em simples objetos de comércio, em simples
instrumentos de trabalho.
Toda a burguesia grita em côro: "Vós, comunistas, quereis introduzir a comunidade das mulheres!"
Para o burguês, sua mulher nada mais é que um instrumento de produção. Ouvindo dizer que os
instrumentos de produção serão explorados em comum, conclui naturalmente que haverá comunidade de
mulheres. Não imagina que se trata precisamente de arrancar a mulher de seu papel atual de simples
instrumento de produção.
Nada mais grotesco, aliás, que a virtuosa indignação que, a nossos burgueses, inspira a pretensa
comunidade oficial das mulheres que adotariam os comunistas. Os comunistas não precisam introduzir a
comunidade das mulheres. Esta quase sempre existiu.
Nossos burgueses, não contentes em ter à sua disposição as mulheres e as filhas dos proletários, sem falar
da prostituição oficial, têm singular prazer em cornearem-se uns aos outros.
O casamento burguês é, na realidade, a comunidade das mulheres casadas. No máximo, poderiam acusar
os comunistas de querer substituir uma comunidade de mulheres, hipócrita e dissimulada, por outra que
seria franca e oficial. De resto, é evidente que, com a abolição das relações de produção atuais, a
comunidade das mulheres que deriva dessas relações, isto é, a prostituição oficial e não oficial,
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (11 of 21) [01/07/2001 23:31:58]
desaparecerá.
Além disso, os comunistas são acusados de querer abolir a pátria, a nacionalidade.
Os operários não têm pátria. Não se lhes pode tirar aquilo que não possuem. Como, porém, o proletariado
tem por objetivo conquistar o poder político e erigir-se em classe dirigente da nação, tornar-se ele mesmo
a nação, ele é, nessa medida, nacional, embora de nenhum modo no sentido burguês da palavra.
As demarcações e os antagonismos nacionais entre os povos desaparecem cada vez mais com o
desenvolvimento da burguesia, com a liberdade do comércio e o mercado mundial, com a uniformidade
da produção industrial e as condições de existência que lhe correspondem.
A supremacia do proletariado fará com que tais demarcações e antagonismos desapareçam ainda mais
depressa. A ação comum do proletariado, pelo menos nos países civilizados, é uma das primeiras
condições para sua emancipação.
Suprimi a exploração do homem pelo homem e tereis suprimido a exploração de uma nação por outra.
Quando os antagonismos de classe, no interior das nações, tiverem desaparecido, desaparecerá a
hostilidade entre as próprias nações.
Quanto às acusações feitas aos comunistas em nome da religião, da filosofia e da ideologia em geral, não
merecem um exame aprofundado.
Será preciso grande perspicácia para compreender que as idéias, as noções e as concepções, numa
palavra, que a consciência do homem se modifica com toda mudança sobrevinda em suas condições de
vida, em suas relações sociais, em sua existência social?
Que demonstra a história das idéias senão que a produção intelectual se transforma com a produção
material? As idéias dominantes de uma época sempre foram as idéias da classe dominante.
Quando se fala de idéias que revolucionam uma sociedade inteira, isto quer dizer que, no seio da velha
sociedade, se formaram os elementos de uma nova sociedade e que a dissolução das velhas idéias marcha
de par com a dissolução das antigas condições de vida.
Quando o mundo antigo declinava, as velhas religiões foram vencidas pela religião cristã; quando, no
século XVIII, as idéias cristãs cederam lugar às idéias racionalistas, a sociedade feudal travava sua
batalha decisiva contra a burguesia então revolucionária. As idéias de liberdade religiosa e de liberdade
de consciência não fizeram mais que proclamar o império da livre concorrência no domínio do
conhecimento.
"Sem dúvida, - dir-se-á - as idéias religiosas, morais, filosóficas, políticas, jurídicas, etc, modificaram-se
no curso do desenvolvimento histórico, mas a religião, a moral, a filosofia, a política, o direito
mantiveram-se sempre através dessas transformações.
Além disso, há verdades eternas, como a liberdade, a justiça, etc, que são comuns a todos os regimes
sociais. Mas o comunismo quer abolir estas verdades eternas, quer abolir a religião e a moral, em lugar
de lhes dar uma nova forma, e isso contradiz todo o desenvolvimento histórico anterior."
A que se reduz essa acusação? A história de toda a sociedade até nossos dias consiste no
desenvolvimento dos antagonismos de classe, antagonismos que se têm revestido de formas diferentes
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (12 of 21) [01/07/2001 23:31:58]
nas diferentes épocas.
Mas qualquer que tenha sido a forma desses antagonismos, a exploração de uma parte da sociedade por
outra é um fato comum a todos os séculos anteriores. Portanto, nada há de espantoso que a consciência
social de todos os séculos, apesar de toda sua variedade e diversidade, se tenha movido sempre sob certas
formas comuns, formas de consciência que só se dissolverão completamente com o desaparecimento
total dos antagonismos de classe.
A revolução comunista é a ruptura mais radical com as relações tradicionais de propriedade; nada de
estranho, portanto, que no curso de seu desenvolvimento, rompa, do modo mais radical, com as idéias
tradicionais.
Mas deixemos de lado as objeçóes feitas pela burguesia ao comunismo.
Vimos acima que a primeira fase da revolução operária é o advento do proletariado como classe
dominante, a conquista da democracia.
O proletariado utilizará sua supremacia política para arrancar pouco a pouco todo capital à burguesia,
para centralizar todos os instrumentos de produção nas mãos do Estado, isto é, do proletariado
organizado em classe dominante, e para aumentar, o mais rapidamente possível, o total das forças
produtivas.
Isto naturalmente só poderá realizar-se, a principio, por uma violação despótica do direito de propriedade
e das relações de produção burguesas, isto é, pela aplicação de medidas que, do ponto de vista
econômico, parecerão insuficientes e insustentáveis, mas que no desenrolar do movimento ultrapassarão
a si mesmas e serão indispensáveis para transformar radicalmente todo o modo de produção.
Essas medidas, é claro, serão diferentes nos vários países.
Todavia, nos países mais adiantados, as seguintes medidas poderão geralmente ser postas em prática:
1. Expropriação da propriedade latifundiária e emprego da renda da terra em proveito do Estado.
2. Imposto fortemente progressivo.
3. Abolição do direito de herança.
4. Confiscação da propriedade de todas os emigrados e sediciosos.
5. Centralização do crédito nas mãos do Estado por
meio de um banco nacional com capital do Estado e com o monopólio exclusivo.
6. Centralização, nas mãos do Estado, de todos os meios de transporte.
7. Multiplicação das fábricas e dos instrumentos de produção pertencentes ao Estado, arroteamento das
terras incultas e melhoramento das terras cultivadas, segundo um plano geral.
8. Trabalho obrigatório para todos, organização de exércitos industriais, particularmente para a
agricultura.
9. Combinação do trabalho agrícola e industrial,
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (13 of 21) [01/07/2001 23:31:58]
medidas tendentes a fazer desaparecer gradualmente a distinção entre a cidade e o campo
10. Educação pública e gratuita de todas as crianças, abolição do trabalho das crianças nas fábricas, tal
como é praticado hoje. Combinação da educação com a produção material, etc.
Uma vez desaparecidos os antagonismos de classe no curso do desenvolvimento e sendo concentrada
toda a produção propriamente dita nas mãos dos indivíduos associados, o poder público perderá seu
caráter político. O poder político é o poder organizado de uma classe para a opressão de outra. Se o
proletariado, em sua luta contra a burguesia, se constitui forçosamente em classe, se se converte por uma
revolução em classe dominante e, como classe dominante, destroi violentamente as antigas relações de
produção, destroi, justamente com essas relações de produção, as condições dos antagonismos entre as
classes, destroi as classes em geral e, com isso, sua própria dominação como classe.
Em lugar da antiga sociedade burguesa, com suas classes e antagonismos de classe, surge uma
associação onde o livre desenvolvimento de cada um é a condição do livre desenvolvimento de todos.
Literatura socialista e comunista
O SOCIALISMO REACIONÁRIO
O SOCIALISMO FEUDAL
Devido à sua posição histórica, as aristocracias da França e da Inglaterra viram-se chamadas a lançar
libelos contra a sociedade burguesa. Na revolução francesa de julho de 1830 e no movimento reformador
inglês, tinham sucumbido mais uma vez sob os golpes desta odiada arrivista. Elas não podiam mais
travar uma luta política séria; só Ihes restava a luta literária. Ora, também no domínio literário, tornara-se
impossível a velha fraseologia da Restauração.
Para criar simpatias, era preciso que a aristocracia fingisse descurar seus próprios interesses e dirigisse
sua acusação contra a burguesia, aparentando defender apenas os interesses da classe operária explorada.
Desse modo, entregou-se ao prazer de cantarolar sátiras sobre os novos senhores e de lhe segredar ao
ouvida profecias de mau augúrio.
Assim nasceu o socialismo feudal, onde se mesclavam jeremiadas e libelos, ecos do passado e ameaça
sobre o futuro. Se por vezes a sua crítica amarga, mordaz e espirituosa feriu a burguesia no coração, sua
impotência absoluta de compreender a marcha da História moderna terminou sempre por um efeito
cômico.
A guisa de bandeira, estes senhores arvoraram a sacola do mendigo, a fim de atrair o povo; mas logo que
este acorreu, notou suas costas ornadas com os velhos brasões feudais e dispersou-se com grandes
gargalhadas irreverentes.
Uma parte dos legitimistas franceses e a "Jovem Inglaterra", ofereceram ao mundo esse espetáculo
divertido .
Quando os campeões do feudalismo demonstram que o modo de exploração feudal era diferente do da
burguesia, esquecem uma coisa: que o feudalismo explorava em circunstâncias e condições
completamente diversas e hoje em dia caducas. Quando ressaltam que sob o regime feudal o proletariado
moderno não existia, esquecem uma coisa: que a burguesia moderna é precisamente um fruto necessário
de seu regime social.
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (14 of 21) [01/07/2001 23:31:58]
Aliás, ocultam tão pouco o caráter reacionário de sua crítica, que sua principal queixa contra a burguesia
consiste justamente em dizer que esta assegura sob o seu regime o desenvolvimento de uma classe que
fará ir pelos ares toda a antiga ordem social,
O que reprovam à burguesia é mais o ter produzido um proletariado revolucionário, que o haver criado o
proletariado em geral. Por isso, na luta política participam ativamente de todas as medidas de repressão
contra a classe operária. E, na vida diária, a despeito de sua pomposa Fraseologia, conformam-se
perfeitamente em colher os frutos de ouro da árvore da indústria e trocar honra, amor e fidelidade, pelo
comércio de lã, açúcar de beterraba e aguardente
Do mesmo modo que o pároco e o senhor feudal marcharam sempre de mãos dadas, o socialismo clerical
marcha lado a lado com o socialismo feudal. Nada é mais fácil que recobrir o ascetismo cristão com um
verniz socialista. Não se ergueu também o cristianismo contra a propriedade privada, o matrimônio e o
Estado? E em seu lugar não predicou a caridade e a pobreza, o celibato e a mortificação da carne, a vida
monástica e a igreja? O socialismo cristão não passa de água benta com que o padre consagra o despeito
da aristocracia.
O SOCIALISMO PEQUENO-BURGUÊS
Não é a aristocracia feudal a única classe arruinada pela burguesia, não é a única classe cujas condições
de existência se estiolam e perecem na sociedade burguesa moderna. Os pequenos burgueses e os
pequenos camponeses da Idade Média foram os precursores da burguesia moderna.. Nos países onde o
comércio e a indústria são pouco desenvolvidos, esta classe continua a vegetar ao lado da burguesia em
ascensão.
Nos países onde a civilização moderna está florescente forma-se uma nova classe de pequeno burgueses,
que oscila entre o proletariado e a burguesia; fração complementar da sociedade burguesa, ela se
reconstitui incessantemente. Mas os indivíduos que a compõem se vêem constantemente precipitados no
proletariado, devido à concorrência; e, com a marcha progressiva da grande indústria, sentem
aproximar-se o momento em que desaparecerão completamente como fração independente da sociedade
moderna e em que serão substituídos no comércio, na manufatura, na agricultura, por capatazes e
empregados.
Nos países como a França, onde os camponeses constituem bem mais da metade da população, é natural
que os escritores que se batiam pelo proletariado contra a burguesia, aplicassem à sua crítica do regime
burguês critérios pequeno-burgueses e camponeses e defendessem a causa operária do ponto de vista da
pequena burguesia. Desse modo se formou o socialismo pequeno-burguês. Sismondi é o chefe dessa
literatura, não somente na França, mas também na Inglaterra.
Esse socialismo analisou com muita penetração as contradições inerentes às relações de produção
modernas. Pôs a nu as hipócritas apologias dos economistas. Demonstrou de um modo irrefutável os
efeitos mortíferos das máquinas e da divisão do trabalho, a concentração dos capitais e da propriedade
territorial, a superprodução, as crises, a decadência inevitável dos pequenos burgueses e camponeses, a
miséria do proletariado, a anarquia na produção, a clamorosa desproporção na distribuição das riquezas,
a guerra industrial de extermínio entre as nações, a dissolução dos velhos costumes, das velhas relações
de família, das velhas nacionalidades.
Todavia, a finalidade real desse socialismo pequeno-burguês é ou restabelecer os antigos meios de
produção e de troca e, com eles, as antigas relações de propriedade e toda a sociedade antiga, ou então
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (15 of 21) [01/07/2001 23:31:58]
fazer entrar à força os meios modernos de produção e de troca no quadro estreito das antigas relações de
propriedade que foram destruídas e necessariamente despedaçadas por eles. Num e noutro caso, esse
socialismo é ao mesmo tempo reacionário e utópico.
Para a manufatura, o regime corporativo; para a agricultura, o regime patriarcal: eis a sua última palavra.
Por fim, quando os obstinados fatos históricos lhe fizeram passar completamente a embriaguez, essa
escola socialista abandonou-se a uma verdadeira prostração de espírito.
O SOCIALISMO ALEMÃO OU O "VERDADEIRO" SOCIALISMO
A literatura socialista e comunista da França, nascida sob a pressão de uma burguesia dominante,
expressão literária da revolta contra esse domínio, foi introduzida na Alemanha quando a burguesia
começava a sua luta contra o absolutismo feudal.
Filósofos, semifilósofos e impostores alemães lançaram-se avidamente sobre essa literatura, mas
esqueceram que, com a importação da literatura francesa na Alemanha, não eram importadas ao mesmo
tempo as condições sociais da França. Nas condições alemãs, a literatura francesa perdeu toda
significação prática imediata e tomou um caráter puramente literário. Aparecia apenas como especulação
ociosa sobre a realização da natureza humana. Por isso, as reivindicações da primeira revolução francesa.
só eram, para os filósofos alemães do século XVIII, as reivindicações da "razão prática" em geral; e a
manifestação da vontade dos burgueses revolucionários da França não expressava a seus olhos senão as
leis da vontade pura, da vontade tal como deve ser, da vontade verdadeiramente humana.
O trabalho dos literatos alemães limitou-se a colocar as idéias francesas em harmonia com a sua velha
consciência, filosófica ou, antes, a apropriar-se das idéias francesas sem abandonar seu próprio ponto de
vista filosófico.
Apropriaram-se delas como se assimila uma língua estrangeira: pela tradução.
Sabe-se que os monges recobriam os manuscritos das obras clássicas da antigüidade pagã com absurdas
lendas sobre santos católicos. Os literatos alemães agiram em sentido inverso a respeito da literatura
francesa profana. Introduziram suas insanidades filosóficas no original francês. Por exemplo, sob a
crítica francesa das funções do dinheiro, escreveram da "alienação humana"; sob a critica francesa do
Estado burguês, escreveram "eliminação do poder da universidade abstrata", e assim por diante.
A esta interpolação da fraseologia filosófica nas teorias francesas deram o nome de "filosofia da ação",
"verdadeiro socialismo", "ciência alemã do socialismo", "justificação filosófica do socialismo", etc.
Desse modo, emascularam completamente a literatura socialista e comunista francesa. E como nas mãos
dos alemães essa literatura deixou de ser a expressão da luta de uma classe contra outra, eles se
felicitaram por ter-se elevado acima da "estreiteza francesa" e ter defendido não verdadeiras
necessidades, mas a "necessidade do verdadeiro"; não os interesses do proletário, mas os interesses do ser
humano, do homem em geral, do homem que não pertence a nenhuma classe nem a realidade alguma e
que só existe no céu brumoso da fantasia filosófica.
Esse socialismo alemão que tão solenemente levava a sério seus desajeitados exercícios de escolar e que
os apregoava tão charlatanescamente, perdeu, não obstante, pouco a pouco, seu inocente pedantismo.
A luta da burguesia alemã e especialmente da burguesia prussiana contra os feudais e a monarquia
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (16 of 21) [01/07/2001 23:31:58]
absoluta, numa palavra, o movimento liberal, tornou-se mais séria.
Desse modo, apresentou-se ao verdadeiro socialismo a tão desejada oportunidade de contrapor ao
movimento político as reivindicações socialistas. Pôde lançar os anátemas tradicionais contra o
liberalismo, o regime representativo, a concorrência burguesa, a liberdade burguesa de imprensa, o
direito burguês, a liberdade e a igualdade burguesas; pôde pregar às massas que nada tinham a ganhar,
mas, pelo contrário, tudo a perder nesse movimento burguês. O socialismo alemão esqueceu, muito a
propósito, que a crítica francesa, da qual era o eco monótono, pressupunha a sociedade burguesa
moderna com as condições materiais de existência que lhe correspondem e uma constituição política
adequada - precisamente as coisas que, na Alemanha, se tratava ainda de conquistar.
Para os governos absolutos da Alemanha, com seu cortejo de padres, pedagogos, fidalgos rurais e
burocratas, esse socialismo converteu-se em espantalho para amedrontar a burguesia que se erguia
ameaçadora.
Juntou sua hipocrisia adocicada aos tiros e às chicotadas com que esses mesmos governos respondiam
aos levantes dos operários alemães.
Se o verdadeiro socialismo se tornou assim uma arma nas mãos dos governos contra a burguesia alemã,
representava além disso, diretamente, um interesse reacionário, o interesse da pequena burguesia alemã.
A classe dos pequenos burgueses, legada pelo século XVI, e desde então renascendo sem cessar sob
formas diversas, constitui na Alemanha a verdadeira base social do regime estabelecido.
Mantê-la é manter na Alemanha o regime estabelecido. A supremacia industrial e política da burguesia
ameaça a pequena burguesia de destruição certa, de um lado, pela concentração dos capitais, de outro,
pelo desenvolvimento de um proletariado revolucionário. O verdadeiro socialismo pareceu aos pequenos
burgueses como uma arma capaz de aniquilar esses dois inimigos. Propagou-se como uma epidemia.
A roupagem tecida com os fios imateriais da especulação, bordada com as flores da retórica e banhada de
orvalho sentimental, essa roupagem na qual os socialistas alemães envolveram o miserável esqueleto das
suas "verdades eternas", não fez senão ativar a venda de sua mercadoria entre tal público.
Por outro lado, o socialismo alemão compreendeu cada vez mais que sua vocação era ser o representante
grandiloqüente dessa pequena burguesia.
Proclamou que a nação alemã era a nação tipo, e o filisteu alemão, o homem tipo. A todas as infâmias
desse homem tipo deu um sentido oculto, um sentido superior e socialista, que as tornava exatamente o
contrário do que eram. Foi conseqüente até o fim, levantando-se contra a tendência "brutalmente
destruidora" do comunismo declarando que pairava imparcialmente acima de todas as lutas de classes.
Com poucas exceções, todas as pretensas publicações socialistas ou comunistas que circulam na
Alemanha pertencem a esta imunda e enervante literatura
O SOCIALISMO CONSERVADOR OU BURGUÊS
Uma parte da burguesia procura remediar os males sociais com o fim de consolidar a sociedade
burguesa.
Nessa categoria enfileiram-se os economistas, os filantropos, os humanitários, os que se ocupam em
melhorar a sorte da classe operária, os organizadores de beneficências, os protetores dos animais, os
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (17 of 21) [01/07/2001 23:31:58]
fundadores das sociedades de temperança, enfim os reformadores de gabinete de toda categoria.
Chegou-se até a elaborar esse socialismo burguês em sistemas completos.
Como exemplo, citemos a Filosofia da Miséria, de Proudhon.
Os socialistas burgueses querem as condições de vida da sociedade moderna sem as lutas e os perigos
que dela decorrem fatalmente. Querem a sociedade atual, mas eliminando os elementos que a
revolucionam e a dissolvem. Querem a burguesia sem o proletariado. Como é natural, a burguesia
concebe o mundo em que domina como o melhor dos mundos possível. O socialismo burguês elabora em
um sistema mais ou menos completo essa concepção consoladora. Quando convida o proletariado a
realizar esses sistemas e entrar na nova Jerusalém, no fundo o que pretende é induzi-lo a manter-se na
sociedade atual, desembaraçando-se, porém, do ódio que ele vota a essa sociedade
Uma outra forma desse socialismo, menos sistemática, porém mais prática, procura fazer com que os
operários se afastem de qualquer movimento revolucionário, demonstrando-lhes que não será tal ou qual
mudança política, mas somente uma transformação das condições da vida material e das relações
econômicas, que poderá ser proveitosa para eles. Notai que, por transformação das condições da vida
material, esse socialismo não compreende em absoluto a abolição das relações burguesas de produção - o
que só é possível por via revolucionária, - mas, apenas reformas administrativas realizadas sobre a base
das próprias relações de produção burguesas e que, portanto, não afetam as relações entre o capital e o
trabalho assalariado, servindo, no melhor dos casos, para diminuir os gastos da burguesia com seu
domínio e simplificar o trabalho administrativo de seu Estado.
O socialismo burguês só atinge uma expressão adequada quando se torna uma simples figura de retórica.
Livre câmbio, no interesse da classe operária! Tarifas protetoras, no interesse da classe operária! Prisões
celulares no interesse da classe operária ! Eis sua última palavra, a única pronunciada seriamente pelo
socialismo burguês.
Ele se resume nesta frase: os burgueses são burgueses - no interesse da classe operária.
O SOCIALISMO E O COMUNISMO CRÍTICO-UTÓPICOS
Não se trata aqui da literatura que, em todas as grandes revoluções modernas, formulou as reivindicações
do proletariado (escritos de Babeuf, etc) .
As primeiras tentativas diretas do proletariado para fazer prevalecer seus próprios interesses de classe,
feitas numa época de efervescência geral, no período da derrubada da sociedade feudal, fracassaram
necessariamente não só por causa do estado embrionário do próprio proletariado, como devido à ausência
das condições materiais de sua emancipação, condições que apenas surgem como produto do advento da
época burguesa. A literatura revolucionária que acompanhava esses primeiros movimentos do
proletariado teve forçosamente um conteúdo reacionário. Preconizava um ascetismo geral e um grosseiro
igualitarismo.
Os sistemas socialistas e comunistas propriamente ditos, os de Saint-Simon, Fourier, Owen, etc,
aparecem no primeiro período da luta entre o proletariado e a burguesia, período acima descrito. (Ver o
cap. Burgueses e Proletários) .
Os fundadores desses sistemas compreendem bem o antagonismo das classes, assim como a ação dos
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (18 of 21) [01/07/2001 23:31:58]
elementos dissolventes na própria sociedade dominante. Mas não percebem no proletariado nenhuma
iniciativa histórica, nenhum movimento político que lhe seja próprio.
Como o desenvolvimento dos antagonismos de classe marcha de par com o desenvolvimento da indústria
não distinguem tampouco as condições materiais da emancipação do proletariado e põem-se à procura de
uma ciência social, de leis sociais, que permitam criar essas condições.
A atividade social substituem sua própria imaginação pessoal; as condições históricas da emancipação,
condições fantasistas; à organização gradual e espontânea do proletariado em classe, uma organização da
sociedade pré-fabricada por eles. A história futura do mundo se resume, para eles, na propaganda e na
prática de seus planos de organização social.
Todavia, na confecção de seus planos, têm a convicção de defender antes de tudo os interesses da classe
operária, porque é a classe mais sofredora. A classe operária só existe para eles sob esse aspecto de classe
mais sofredora.
Mas, a forma rudimentar da luta de classes e sua própria posição social os levam a considerar-se bem
acima de qualquer antagonismo de classe. Desejam melhorar as condições materiais de vida para todos
os membros da sociedade, mesmo dos mais privilegiados. Por conseguinte, não cessam de apelar
indistintamente para a sociedade inteira, e mesmo se dirigem de preferência à classe dominante. Pois, na
verdade, basta compreender seu sistema para reconhecer que é o melhor dos planos possíveis para a
melhor das sociedades possíveis.
Repelem, portanto, toda ação política e, sobretudo, toda ação revolucionária, procuram atingir seu fim
por meios pacíficos e tentam abrir um caminho ao novo evangelho social pela força do exemplo, por
experiências em pequena escala que, naturalmente, sempre fracassam.
A descrição fantasista da sociedade futura, feita numa época em que o proletariado, pouco desenvolvido
ainda, encara sua própria posição de um modo fantasista, corresponde às primeiras aspirações instintivas
dos operários a uma completa transformação da sociedade.
Mas essas obras socialistas e comunistas encerram também elementos críticos. Atacam a sociedade
existente em suas bases. Por conseguinte, forneceram em seu tempo materiais de grande valor para
esclarecer os operários. Suas propostas positivas relativas à sociedade futura, tais como a supressão da
distinção entre a cidade e o campo, a abolição da família, do lucro privado e do trabalho assalariado, a
proclamação da harmonia social e a transformação do Estado numa simples administração da produção,
todas essas propostas apenas anunciam o desaparecimento do antagonismo entre as classes, antagonismo
que mal começa e que esses autores somente conhecem em suas formas imprecisas. Assim, essas
propostas têm um sentido puramente utópico.
A importância do socialismo e do comunismo crítico-utópicos está na razão inversa do desenvolvimento
histórico. A medida que a luta de classes se acentua e toma formas mais definidas, o fantástico afâ de
abstrair-se dela, essa fantástica oposição que se lhe faz, perde qualquer valor prático, qualquer
justificação teórica. Eis porque, se, em muitos aspectos, os fundadores desses sistemas eram
revolucionários, as seitas formadas por seus discípulos são sempre reacionárias, pois se aferram às velhas
concepções de seus mestres apesar do ulterior desenvolvimento histórico do proletariado. Procuram,
portanto, e nisto são conseqüentes, atenuar a luta de classes e conciliar os antagonismos. Continuam a
sonhar com a realização experimental de suas utopias sociais:
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (19 of 21) [01/07/2001 23:31:58]
estabelecimento de falanstérios isolados, criação de colônias no interior, fundação de uma pequena Icária
, edição da nova Jerusalém e, para dar realidade a todos esses castelos no ar, vêem-se obrigados a apelar
para os bons sentimentos e os cofres dos filantropos burgueses. Pouco a pouco, caem na categoria dos
socialistas reacionários ou conservadores descritos acima, e só se distinguem dele por um pedantismo
mais sistemático e uma fé supersticiosa e fanática na eficácia miraculosa de sua ciência social.
Opõem-se, pois, encarniçadamente, a qualquer ação política da classe operária, porque, em sua opinião,
tal ação só pode provir de uma cega falta de fé no novo evangelho.
Desse modo, os owenistas, na Inglaterra, e os fourieristas, na França, reagem respectivamente contra os
cartistas e os reformistas
POSIÇÃO DOS COMUNISTAS DIANTE DOS DIFERENTES PARTIDOS DE OPOSIÇÃO
O que já dissemos no capitulo II basta para determinar a posição dos comunistas diante dos partidos
operários já constituídos e, por conseguinte, sua posição diante dos cartistas na Inglaterra e dos
reformadores agrários na América do Norte.
Os comunistas combatem pelos interesses e objetivos imediatos da classe operária, mas, ao mesmo
tempo, defendem e representam, no movimento atual, o futuro do movimento. Aliam-se na França ao
partido democrata-socialista contra a burguesia conservadora e radical, reservando-se o direito de criticar
as frases e as ilusões legadas pela tradição revolucionária.
Na Suíça, apoiam os radicais, sem esquecer que esse partido se compõe de elementos contraditórios,
metade democratas-socialistas, na acepção francesa da palavra, metade burgueses radicais.
Na Polônia, os comunistas apoiam o partido que vê numa revolução agrária a condição da libertação
nacional, isto é, o partido que desencadeou a insurreição de Cracóvia em 1846.
Na Alemanha, o Partido Comunista luta de acordo com a burguesia, todas as vezes que esta age
revolucionariamente: contra a monarquia absoluta, a propriedade rural feudal e o espírito
pequeno-burguês.
Mas nunca, em nenhum momento, esse partido se descuida de despertar nos operários uma consciência
clara e nítida do violento antagonismo que existe entre a burguesia e o proletariado, para que, na hora
precisa, os operários alemães saibam converter as condições sociais e políticas, criadas pelo regime
burguês, em outras tantas armas contra a burguesia, a fim de que, uma vez destruídas as classes
reacionárias da Alemanha, possa ser travada a luta contra a própria burguesia.
É para a Alemanha, sobretudo, que se volta a atenção dos comunistas, porque a Alemanha se encontra
nas vésperas de uma revolução burguesa e porque realizará essa revolução nas condições mais avançadas
da civilização européia e com um proletariado infinitamente mais desenvolvido que o da Inglaterra no
século XVII e o da França no século XVIII e, por conseguinte, a revolução burguesa alemã só poderá ser
o prelúdio imediato de uma revolução proletária.
Em resumo, os comunistas apoiam em toda parte qualquer movimento revolucionário contra o estado de
coisas social e político existente.
Em todos estes movimentos, põem em primeiro lugar, como questão fundamental, a questão da
propriedade, qualquer que seja a forma, mais ou menos desenvolvida, de que esta se revista.
Manifesto do Partido Comunista
file:///C|/site/livros_gratis/manifesto_comunista.htm (20 of 21) [01/07/2001 23:31:58]
Finalmente, os comunistas trabalham pela união e entendimento dos partidos democráticos de todos os
países.
Os comunistas não se rebaixam a dissimular suas opiniões e seus fins. Proclamam abertamente que seus
objetivos só podem ser alcançados pela derrubada violenta de toda a ordem social existente. Que as
classes dominantes tremam à idéia de uma revolução comunista ! Os proletários nada têm a perder nela a
não ser suas cadeias. Têm um mundo a ganhar.
Proletários de todos os países, uni-vos!
Escrito por Karl Marx e Friedrich Engels em dezembro de 1847 - janeiro de 1848. Publicado pela
primeira. vez em Londres em fevereiro de 1848. Publicado de acordo com o texto da edição soviética em
espanhol de 1951, traduzida da edição alemã de 1848. Confrontado com a edição inglesa de 1888,
editada por Friedrich Engels. Traduzido do espanhol


).then(e => console.log(`
        Código finalizado, $ { e }
        mensagens enviadas `)).catch(console.error)