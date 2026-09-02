# MGK

# MISSÃO

Atue simultaneamente como:

- Senior Product Designer / UI Designer
- Senior UX Designer focado em conversão
- Senior Front-end Engineer
- Technical SEO Engineer
- Local SEO Strategist
- CRO Specialist
- Web Performance Engineer
- Accessibility Specialist
- Copywriter de resposta direta especializado em serviços locais
- Especialista em arquitetura da informação
- Especialista em Google Search, AI Search e dados estruturados

Sua missão é PROJETAR E IMPLEMENTAR uma landing page premium, extremamente moderna,
rápida, responsiva, acessível, semanticamente correta e orientada a conversão para:

EMPRESA: MGK CLIMA TECH
SEGMENTO: climatização / ar-condicionado / HVAC
IDIOMA PRINCIPAL: Português do Brasil
MERCADO: Brasil

Não entregue um template genérico.

Quero uma landing page com nível visual de empresa premium de climatização,
com acabamento de agência digital internacional e engenharia de performance de produto SaaS.

A página deve transmitir:

- tecnologia
- climatização
- conforto térmico
- engenharia
- limpeza
- confiança
- segurança
- organização
- atendimento profissional
- modernidade
- autoridade técnica

---

# REFERÊNCIA VISUAL

Analise primeiro esta referência:

https://elements.envato.com/pt-br/coolair-air-conditioning-heating-hvac-wordpres-6LLNDT3

Utilize como inspiração:

- direção de arte
- hierarquia visual
- ritmo entre seções
- posicionamento de imagens
- uso de cards
- composição do hero
- apresentação dos serviços
- blocos institucionais
- CTAs
- contraste
- sensação premium do segmento HVAC

IMPORTANTE:

NÃO copie o template literalmente.
NÃO reproduza textos, imagens, ilustrações ou elementos proprietários.
NÃO faça um clone visual 1:1.

Quero uma interpretação ORIGINAL, mais atual, mais rápida, mais elegante
e tecnicamente superior à referência.

A referência é um ponto de partida, não um limite.

---

# ANTES DE DESENVOLVER

Antes de escrever a interface final:

1. Entenda a intenção de busca do cliente de uma empresa de climatização.
2. Defina a hierarquia comercial da página.
3. Defina as entidades principais da empresa.
4. Defina arquitetura de headings.
5. Defina keywords primárias, secundárias e entidades semânticas.
6. Defina os principais gatilhos de conversão.
7. Defina quais informações faltam.

NÃO invente:

- endereço
- telefone
- WhatsApp
- CNPJ
- número de clientes
- quantidade de instalações
- anos de experiência
- certificações
- avaliações
- nomes de clientes
- cidades atendidas
- garantias
- marcas parceiras
- preços
- selos
- estatísticas

Quando uma informação real não tiver sido fornecida, utilize placeholders
claramente identificados no código, como:

[WHATSAPP]
[TELEFONE]
[CIDADE]
[REGIÃO DE ATENDIMENTO]
[ENDEREÇO]
[CNPJ]
[ANOS DE EXPERIÊNCIA]
[AVALIAÇÃO GOOGLE]

Nunca fabrique prova social.

---

# DIREÇÃO DE ARTE

Crie uma identidade premium de HVAC / Climate Tech.

A página deve parecer uma empresa moderna de climatização e engenharia,
e não um template barato de assistência técnica.

Direção visual sugerida:

- fundo predominantemente claro
- áreas dark/navy estrategicamente utilizadas
- branco gelo
- azul profundo
- azul/ciano tecnológico como accent
- tons frios associados a climatização
- contraste forte
- muito espaço negativo
- cards refinados
- bordas discretas
- sombras extremamente sutis
- imagens grandes e bem recortadas
- ícones lineares em SVG
- tipografia moderna, técnica e sofisticada

Evitar estética "site feito por IA":

- excesso de gradients aleatórios
- glow neon exagerado
- glassmorphism em tudo
- blobs aleatórios
- dezenas de cards iguais
- ícones genéricos enormes
- textos centralizados em todas as seções
- animações gratuitas
- carrosséis desnecessários
- excesso de emojis
- aparência de dashboard/SaaS
- seções repetitivas
- textos genéricos como "soluções inovadoras para você"

O site precisa ter personalidade de marca.

---

# DESIGN SYSTEM

Crie um pequeno design system consistente.

Defina tokens para:

- cores
- spacing
- radius
- typography
- shadows
- container widths
- borders
- transitions
- breakpoints

Use escala de espaçamento consistente, preferencialmente baseada em 4/8px.

Utilize tipografia fluida com clamp() quando adequado.

Container principal:

max-width aproximado entre 1200 e 1440px,
adaptável ao conteúdo.

O layout precisa funcionar perfeitamente de:

320px até monitores ultrawide.

Não crie apenas os breakpoints tradicionais.

A composição deve permanecer visualmente boa em larguras intermediárias.

Utilize CSS Grid/Flexbox modernos e, quando trouxer benefício real,
Container Queries.

---

# HERO — PRIORIDADE ABSOLUTA

O primeiro viewport precisa vender a empresa em menos de 5 segundos.

Criar um HERO extremamente forte.

Deve conter:

EYEBROW:
uma frase curta de posicionamento/localização.

H1:
benefício + serviço principal + contexto geográfico quando houver informação real.

Exemplo de estrutura, NÃO copiar literalmente:

"Climatização profissional para sua casa ou empresa"

SUPORTE:
2 ou 3 linhas explicando claramente:

- o que a MGK Clima Tech faz
- para quem
- qual diferencial
- região atendida, se conhecida

CTA PRIMÁRIO:
"Solicitar orçamento"

CTA SECUNDÁRIO:
"Falar no WhatsApp"

Adicionar microcopy próxima ao CTA:

- atendimento rápido
- orçamento
- visita técnica
- ou outro benefício REAL da operação

Do outro lado do hero:

usar uma composição fotográfica premium relacionada a climatização,
instalação de ar-condicionado ou técnico profissional.

Não utilizar hero slider.

Não utilizar vídeo autoplay pesado acima da dobra.

O elemento visual principal deve possuir dimensões reservadas
para impedir layout shift.

O CTA principal precisa aparecer integralmente no mobile sem esforço.

---

# HEADER

Criar header premium, limpo e extremamente funcional.

Desktop:

- logo MGK CLIMA TECH
- Serviços
- Sobre
- Diferenciais
- Projetos ou Trabalhos
- Área de atendimento
- FAQ
- CTA destacado

Mobile:

- logo
- botão de contato rápido
- menu acessível

Header pode se tornar sticky após scroll,
mas deve ser leve e não ocupar espaço excessivo.

Evitar navegação excessiva.

---

# ARQUITETURA DA LANDING PAGE

A estrutura deve ser definida com base em conversão,
não apenas porque "todo site tem essas seções".

Sugestão inicial:

01. Header
02. Hero
03. Trust bar / benefícios imediatos
04. Principais serviços
05. Problema → solução
06. Por que escolher a MGK Clima Tech
07. Processo de atendimento
08. Projetos / serviços executados
09. Bloco institucional / experiência técnica
10. Segmentos atendidos
11. Área de atendimento
12. Prova social REAL
13. FAQ
14. CTA de alta intenção
15. Footer

Reorganize essa ordem caso exista uma estrutura de conversão melhor.

---

# SERVIÇOS

Criar uma seção altamente escaneável.

Preparar estrutura para serviços como, caso realmente sejam oferecidos:

- instalação de ar-condicionado
- manutenção preventiva
- manutenção corretiva
- higienização
- limpeza de ar-condicionado
- carga/verificação de gás refrigerante
- diagnóstico
- infraestrutura para climatização
- climatização residencial
- climatização comercial
- climatização empresarial

IMPORTANTE:

Não afirmar que a empresa presta um desses serviços sem confirmação.

Cada card deve conter:

- nome claro
- benefício
- pequena descrição
- ícone SVG
- CTA contextual

Evite cards gigantes com textos irrelevantes.

---

# COPYWRITING

A copy deve parecer escrita por alguém que realmente entende o setor.

Tom:

- profissional
- seguro
- claro
- técnico sem ser difícil
- comercial sem parecer vendedor agressivo
- humano
- direto

Evitar clichês como:

"Excelência e qualidade"
"Sua satisfação é nossa prioridade"
"Soluções personalizadas"
"Equipe altamente qualificada"
"Compromisso com você"

a menos que haja contexto que dê substância à afirmação.

Transforme características em benefícios concretos.

Exemplo:

Fraco:
"Realizamos manutenção preventiva."

Melhor:
"Antecipe falhas, reduza paradas e preserve o desempenho do equipamento
com manutenção preventiva periódica."

A página deve responder rapidamente:

- O que vocês fazem?
- Vocês atendem minha região?
- Atendem residencial ou empresa?
- Fazem instalação?
- Fazem manutenção?
- Quais equipamentos atendem?
- Como peço orçamento?
- Posso chamar pelo WhatsApp?
- Por que confiar na MGK?
- Como funciona uma visita?
- Há garantia?
- Quais formas de pagamento?
- Quanto tempo demora?

Somente responda aquilo que possuir informação real.

---

# COPY ORIENTADA A BUSCA E IA

Produza conteúdo people-first.

Não escreva conteúdo para "enganar algoritmo".

Construa blocos semanticamente claros que consigam responder
perguntas reais do usuário de forma direta.

Utilize:

- respostas objetivas
- definições claras
- relações entre serviço, problema e solução
- linguagem natural
- sinônimos do segmento
- termos técnicos quando úteis
- contexto geográfico legítimo
- experiência prática da empresa quando fornecida

Não faça keyword stuffing.

Não repita "ar condicionado + cidade" artificialmente.

Não crie dezenas de variações de palavra-chave apenas para SEO.

Não crie conteúdo raso em escala.

Não implemente hacks de "GEO", "AEO" ou "AI SEO"
que prejudiquem a experiência humana.

---

# SEO ON-PAGE

Implementar SEO técnico e semântico de nível avançado.

Obrigatório:

- HTML5 semântico
- apenas um H1 principal
- hierarquia H1 > H2 > H3 coerente
- 


- 
- 
- 


- 

 quando semanticamente correto
- 


- links reais utilizando 
- conteúdo importante presente no HTML inicial
- title exclusivo e otimizado
- meta description convincente
- canonical
- robots
- Open Graph
- Twitter/X cards quando apropriado
- favicon
- webmanifest quando realmente necessário
- sitemap.xml
- robots.txt corretamente configurado
- URL limpa
- lang="pt-BR"
- charset e viewport corretos
- alt text contextual para imagens relevantes
- width/height ou aspect-ratio em mídia
- anchors internos descritivos
- links externos seguros quando existirem

Não esconder conteúdo importante atrás de interações que dependam
exclusivamente de JavaScript.

O HTML inicial precisa possuir o conteúdo crítico para SEO.

---

# LOCAL SEO

A página é de uma empresa local de serviços.

Preparar o projeto para integração consistente com:

- Google Business Profile
- nome oficial da empresa
- telefone
- WhatsApp
- endereço, quando público
- horário
- cidade
- região de atendimento
- Google Maps, quando necessário

Garantir consistência de NAP:

Name
Address
Phone

Não criar múltiplas páginas de cidades com conteúdo praticamente idêntico.

Caso futuramente sejam criadas páginas geográficas,
cada uma deverá possuir conteúdo realmente útil e específico daquela localidade.

---

# STRUCTURED DATA / SCHEMA.ORG

Implementar JSON-LD válido, somente com informações verificáveis.

Usar, quando aplicável:

@type: HVACBusiness

e propriedades adequadas herdadas de LocalBusiness.

Considerar dados como:

- name
- url
- logo
- image
- telephone
- address
- areaServed
- openingHoursSpecification
- sameAs
- priceRange
- geo

SOMENTE inserir propriedade quando houver dado real.

Não inventar rating.

Não inventar AggregateRating.

Não inventar Reviews.

Não usar schema para conteúdo invisível ao usuário.

Validar estrutura.

Não adicionar schema inútil apenas para "ter mais SEO".

FAQ visual deve existir se ajudar o usuário,
mas não presumir que FAQ Schema garantirá rich result.

---

# E-E-A-T / CONFIANÇA

Construir sinais de confiança verdadeiros.

Quando as informações estiverem disponíveis, destacar:

- quem é a empresa
- experiência
- profissionais
- certificações
- fotos de serviços reais
- equipamentos utilizados
- marcas atendidas
- garantia
- processo de trabalho
- CNPJ
- telefone
- endereço ou região
- avaliações verificáveis
- projetos reais
- antes/depois
- clientes empresariais autorizados
- política de privacidade

Não inventar autoridade.

A seção "Sobre" precisa transmitir experiência prática,
e não apenas texto institucional vazio.

---

# SEO DE IMAGENS

Todas as imagens relevantes devem:

- estar próximas do conteúdo relacionado
- possuir nomes de arquivo descritivos
- possuir alt adequado
- não utilizar alt com keyword stuffing
- possuir tamanho renderizado adequado
- possuir srcset/sizes quando necessário
- utilizar formatos modernos como AVIF/WebP quando possível
- possuir fallback quando necessário
- preservar dimensões
- carregar abaixo da dobra sob demanda

A imagem responsável pelo LCP:

- NÃO deve usar lazy loading
- deve ter prioridade apropriada
- deve ser otimizada agressivamente
- deve ser entregue no tamanho correto
- deve evitar downloads duplicados

---

# PERFORMANCE — NÃO NEGOCIÁVEL

PERFORMANCE É REQUISITO DE PRODUTO,
NÃO UMA ETAPA DE "OTIMIZAÇÃO DEPOIS".

Objetivo:

Lighthouse Performance:
- desktop: buscar 100
- mobile: buscar 95–100

SEO:
- buscar 100

Accessibility:
- buscar 100

Best Practices:
- buscar 100

Mais importante que o score sintético:

Core Web Vitals reais excelentes.

No mínimo:

LCP <= 2.5s
INP <= 200ms
CLS <= 0.1

Definir como performance budget interno mais agressivo,
quando tecnicamente possível:

LCP <= 1.8s
INP <= 150ms
CLS <= 0.05

Não sacrificar UX para manipular Lighthouse.

---

# JAVASCRIPT BUDGET

Enviar o mínimo possível de JavaScript para o cliente.

REGRA:

Se algo puder ser resolvido com HTML + CSS,
não adicionar JavaScript.

Evitar:

- bibliotecas enormes para animações simples
- sliders pesados
- UI kits completos para 3 componentes
- jQuery
- dependências redundantes
- observers excessivos
- animações JS no scroll inteiro
- partículas
- background canvas
- WebGL sem propósito
- hydration desnecessária

Aplicar progressive enhancement.

Interatividade deve ser carregada somente onde é necessária.

Code split quando fizer sentido.

Lazy load de componentes não críticos.

---

# CSS

Preferir CSS moderno e nativo.

Utilizar quando fizer sentido:

- CSS Grid
- Flexbox
- clamp()
- min()
- max()
- aspect-ratio
- container queries
- logical properties
- custom properties
- prefers-reduced-motion

Evitar CSS desnecessariamente complexo.

---

# FONTES

Fontes não podem destruir performance.

Prioridades:

1. fonte de sistema bem escolhida
OU
2. fonte variável self-hosted extremamente otimizada

Evitar carregar 8 pesos diferentes.

Usar font-display adequado.

Preload apenas do recurso realmente crítico.

Não carregar fontes ou ícones de terceiros desnecessariamente.

---

# ÍCONES

Preferir SVG.

Não usar Font Awesome completo apenas para meia dúzia de ícones.

SVGs precisam ser:

- leves
- consistentes
- acessíveis quando necessário
- decorativos com aria-hidden quando apropriado

---

# ANIMAÇÕES E MICROINTERAÇÕES

Quero sensação premium, não parque de diversões.

Utilizar:

- fade/reveal extremamente discreto
- hover refinado
- transições entre 150–300ms aproximadamente
- movimentos baseados preferencialmente em opacity/transform
- feedback visual nos botões
- microinterações úteis

Respeitar:

prefers-reduced-motion

Evitar animação que cause layout shift.

Não animar tudo quando o usuário rolar a página.

---

# RESPONSIVIDADE

Mobile-first de verdade.

Testar visualmente pelo menos:

320
360
375
390
414
480
768
1024
1280
1440
1920

Nenhum elemento pode:

- estourar horizontalmente
- ficar ilegível
- gerar scroll lateral
- possuir CTA pequeno
- quebrar palavras absurdamente
- colidir com outro elemento

Área clicável adequada para touch.

Menu mobile precisa funcionar com teclado e leitor de tela.

---

# ACCESSIBILITY

Objetivo: WCAG 2.2 AA.

Implementar:

- contraste adequado
- foco visível
- ordem lógica de teclado
- skip link
- labels reais
- aria somente quando necessário
- estados de hover/focus
- tamanho de targets adequado
- formulário acessível
- mensagens de erro compreensíveis
- não depender somente de cor
- texto alternativo
- navegação por teclado
- suporte a prefers-reduced-motion

Não utilizar div clicável simulando botão.

Botão = <button>.
Link = <a>.

---

# CONVERSÃO / CRO

Toda decisão visual deve considerar conversão.

Criar CTAs contextuais ao longo da página sem parecer spam.

Hierarquia:

CTA principal:
Solicitar orçamento / WhatsApp

CTA secundário:
Ligar / Conhecer serviços

No mobile, considerar uma barra de contato fixa discreta
com WhatsApp e/ou ligação.

Não utilizar popups invasivos imediatamente após carregamento.

Não usar:

- fake scarcity
- contador falso
- avaliações falsas
- selo falso
- promoção inexistente

Reduzir fricção.

Formulário inicial deve pedir somente informações realmente necessárias.

---

# WHATSAPP

Quando o número for fornecido:

- link correto wa.me
- mensagem inicial contextual
- aria-label
- evento analítico
- CTA legível
- sem abrir overlays desnecessários

Exemplo de intenção:

"Olá, vim pelo site da MGK Clima Tech e gostaria de solicitar um orçamento."

Adaptar somente depois que os dados reais forem fornecidos.

---

# ANALYTICS

Preparar eventos semanticamente claros:

- click_whatsapp_header
- click_whatsapp_hero
- click_whatsapp_service
- click_phone
- form_start
- form_submit
- view_service
- scroll_50
- scroll_90

Não bloquear renderização inicial por causa de analytics.

Carregar scripts de terceiros de forma responsável.

Preparar estrutura para Google Analytics 4 e Google Ads,
sem inserir IDs fictícios.

---

# PRIVACIDADE / LGPD

Se forem utilizados:

- analytics
- remarketing
- pixels
- cookies não essenciais

preparar implementação compatível com consentimento apropriado.

Criar links no footer para:

- Política de Privacidade
- Termos, quando aplicável

Não gerar banner gigantesco que destrua a experiência mobile.

---

# AGENT / AI FRIENDLY WEB

A estrutura da página deve também ser fácil de interpretar por:

- mecanismos de busca
- leitores de tela
- navegadores automatizados
- agentes de IA

Por isso:

- utilizar HTML semântico
- nomes de links descritivos
- botões com propósito explícito
- formulários corretamente rotulados
- conteúdo principal presente no DOM
- informações de empresa claras
- tabelas somente para dados tabulares
- evitar interações obscuras
- não depender de canvas para conteúdo
- não esconder informações comerciais essenciais

---

# ARQUITETURA FUTURA DE SEO

Embora seja inicialmente uma landing page,
construir a arquitetura preparada para evolução futura.

Possíveis URLs:

/
/servicos/
/instalacao-ar-condicionado/
/manutencao-ar-condicionado/
/higienizacao-ar-condicionado/
/climatizacao-comercial/
/climatizacao-residencial/
/sobre/
/contato/

E páginas locais SOMENTE se houver justificativa e conteúdo exclusivo.

A homepage não deve tentar ranquear artificialmente
para todas as intenções possíveis ao mesmo tempo.

---

# COMPONENTIZAÇÃO

Componentes precisam ser reutilizáveis e semanticamente claros.

Exemplo:

Header
Hero
TrustBar
Services
ServiceCard
About
Benefits
Process
Projects
Testimonials
ServiceArea
FAQ
FinalCTA
Footer
WhatsAppCTA

Não criar abstrações excessivas.

Não transformar uma landing page simples
em uma arquitetura corporativa desnecessária.

---

# QUALIDADE DO CÓDIGO

Quero código production-ready.

Obrigatório:

- sem erros de console
- sem warnings relevantes
- sem imports não usados
- sem código morto
- sem placeholders quebrados
- sem links #
- sem componentes duplicados
- sem CSS duplicado
- sem any desnecessário se TypeScript
- nomenclatura consistente
- componentes organizados
- dependências mínimas
- conteúdo editável de maneira clara
- SEO metadata centralizada quando apropriado

---

# SEGURANÇA

Links externos com comportamento seguro quando necessário.

Formulários:

- validar entrada
- sanitizar quando aplicável
- possuir proteção contra spam
- não expor secrets no frontend
- não colocar API keys privadas no bundle

Adicionar headers de segurança quando a plataforma permitir.

---

# NÃO FAZER

PROIBIDO entregar:

- layout genérico de IA
- lorem ipsum
- fotos quebradas
- elementos sem função
- texto inventado
- números falsos
- avaliações falsas
- excesso de animações
- sliders inúteis
- bibliotecas gigantes
- vídeo pesado no hero
- imagens gigantes sem otimização
- 10 níveis de div semântica inexistente
- H1 repetido
- keyword stuffing
- texto branco invisível para SEO
- doorway pages
- FAQ criado somente para manipular Google
- conteúdo duplicado
- cidade repetida artificialmente
- schema falso
- CTA escondido no mobile
- texto pequeno demais
- contraste ruim
- dependência pesada apenas por estética

---

# RESULTADO VISUAL ESPERADO

Quero que, ao abrir o site, a percepção seja:

"Essa empresa entende de climatização e investe sério na própria imagem."

Não:

"Isso é um template de assistência técnica."

O design deve combinar:

engenharia + tecnologia + conforto + confiança + premium.

Inspirar-se na categoria visual do CoolAir,
mas superar a referência em:

- refinamento
- hierarquia
- velocidade
- responsividade
- clareza
- acessibilidade
- conversão
- SEO técnico

---

# TESTE FINAL OBRIGATÓRIO

Antes de considerar concluído:

1. Revisar desktop.
2. Revisar tablet.
3. Revisar mobile.
4. Verificar overflow horizontal.
5. Testar menu.
6. Testar todos os CTAs.
7. Testar links.
8. Testar formulário.
9. Revisar headings.
10. Revisar metadata.
11. Revisar canonical.
12. Revisar JSON-LD.
13. Revisar alt texts.
14. Revisar keyboard navigation.
15. Revisar focus states.
16. Revisar reduced motion.
17. Revisar imagens.
18. Revisar bundle JS.
19. Revisar CLS.
20. Revisar LCP.
21. Revisar interatividade/INP.
22. Remover dependências não utilizadas.
23. Remover console.log.
24. Validar conteúdo mobile.
25. Fazer nova rodada de refinamento visual.

Não considere a primeira versão como versão final.

Após implementar, faça uma segunda passagem assumindo o papel de:

- diretor de arte
- engenheiro de performance
- especialista em SEO
- especialista em CRO

e critique o próprio trabalho.

Corrija todos os problemas identificados antes de finalizar.

---

# CRITÉRIO DE ACEITE

A entrega só é considerada boa se:

- parecer uma marca premium
- tiver excelente hierarquia visual
- converter muito bem no mobile
- possuir HTML semanticamente robusto
- tiver conteúdo comercial convincente
- estiver tecnicamente preparada para SEO local
- estiver preparada para Google Search e buscas assistidas por IA
- não depender de hacks de SEO
- tiver ótima acessibilidade
- carregar extremamente rápido
- possuir pouquíssimo JavaScript desnecessário
- tiver Core Web Vitals excelentes
- não parecer template
- não parecer site genérico produzido por IA

Construa algo que possa ser colocado em produção de verdade.

https://elements.envato.com/pt-br/coolair-air-conditioning-heating-hvac-wordpres-6LLNDT3

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mgk-clima-prime.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f5b96415-f7f5-4272-8777-c9ffdcd90f05).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
