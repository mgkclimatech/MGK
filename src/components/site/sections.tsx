import instalacao from "@/assets/instalacao-ar-condicionado-tecnico-mgk.jpg";
import comercial from "@/assets/climatizacao-comercial-condensadoras.jpg";
import higienizacao from "@/assets/higienizacao-ar-condicionado-limpeza.jpg";
import { isReal, phoneHref, site, track, whatsappHref } from "@/lib/site";
import { QuoteForm } from "./quote-form";
import {
  IconArrow,
  IconBlueprint,
  IconBuilding,
  IconClock,
  IconDroplet,
  IconGauge,
  IconHome,
  IconPhone,
  IconPin,
  IconSearch,
  IconServer,
  IconShield,
  IconSplit,
  IconStore,
  IconWhatsApp,
  IconWrench,
} from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 78% 12%, var(--accent), transparent 65%), radial-gradient(40rem 24rem at 8% 92%, var(--accent), transparent 70%)",
        }}
      />
      <div className="container-page relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="eyebrow !text-ink-muted">
            <IconPin width={16} height={16} />
            Climatização técnica {isReal(site.region) ? `— ${site.region}` : ""}
          </p>
          <h1 className="display-1 mt-4">
            Ar-condicionado instalado do jeito certo — e mantido para durar.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted">
            Instalação, manutenção preventiva, higienização e projeto de climatização para
            residências, comércios e empresas. Equipe técnica, execução limpa e garantia por
            escrito.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              onClick={() => track("click_whatsapp", { local: "hero" })}
              className="btn btn-accent"
            >
              <IconWhatsApp width={20} height={20} />
              Solicitar Orçamento
            </a>
            <a
              href={isReal(site.phone) ? phoneHref : "#orcamento"}
              onClick={() => track("click_telefone", { local: "hero" })}
              className="btn btn-on-ink"
            >
              <IconPhone width={19} height={19} />
              {isReal(site.phone) ? site.phone : "Falar com um Técnico"}
            </a>
          </div>

          <ul className="mt-9 grid gap-3 text-[0.98rem] text-ink-muted sm:grid-cols-3">
            {["Serviço com garantia", "Técnicos qualificados", "Orçamento sem compromisso"].map(
              (item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconShield width={19} height={19} className="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="relative">
          <img
            src={instalacao}
            alt="Técnico da MGK Clima Tech instalando uma unidade evaporadora de ar-condicionado split"
            width={1200}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="w-full rounded-[var(--radius-2xl)] border border-white/15 object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: IconClock, label: "Atendimento ágil", desc: "Agendamento rápido e horário confirmado" },
    { icon: IconShield, label: "Garantia no serviço", desc: "Execução conforme norma do fabricante" },
    { icon: IconGauge, label: "Economia de energia", desc: "Equipamento limpo consome menos" },
    { icon: IconBlueprint, label: "Projeto correto", desc: "Cálculo de carga térmica antes de instalar" },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon width={22} height={22} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="font-semibold">{label}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const servicos = [
  {
    icon: IconSplit,
    title: "Instalação de ar-condicionado",
    text: "Split, inverter, multi-split e cassete. Infraestrutura, vácuo, teste de estanqueidade e acabamento impecável.",
  },
  {
    icon: IconWrench,
    title: "Manutenção preventiva",
    text: "Plano periódico que evita paradas, prolonga a vida útil do equipamento e mantém a garantia de fábrica.",
  },
  {
    icon: IconGauge,
    title: "Manutenção corretiva",
    text: "Diagnóstico de falhas, vazamento de gás, ruído, gelo na serpentina e placa eletrônica. Reparo com peças adequadas.",
  },
  {
    icon: IconDroplet,
    title: "Higienização e limpeza",
    text: "Limpeza profunda de evaporadora e condensadora com produtos específicos — ar mais saudável e menos alergias.",
  },
  {
    icon: IconBlueprint,
    title: "Projeto e dimensionamento",
    text: "Cálculo de carga térmica, definição de BTUs, posicionamento e infraestrutura elétrica antes da obra.",
  },
  {
    icon: IconSearch,
    title: "Contrato PMOC para empresas",
    text: "Plano de manutenção, operação e controle documentado, com relatórios e cronograma para ambientes corporativos.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="section-y">
      <div className="container-page">
        <p className="eyebrow">Serviços</p>
        <h2 className="display-2 mt-3 max-w-2xl">
          Tudo que o seu ar-condicionado precisa, com um só responsável técnico
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Da escolha do equipamento à manutenção anual — sem terceirização improvisada e sem
          retrabalho.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ icon: Icon, title, text }) => (
            <li key={title} className="card card-hover p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-muted text-accent-foreground">
                <Icon width={22} height={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProblemaSolucao() {
  const linhas = [
    ["Aparelho pingando ou com cheiro ruim", "Higienização completa e correção do dreno"],
    ["Conta de luz subindo todo mês", "Limpeza, carga de gás correta e ajuste de operação"],
    ["Não gela como antes", "Diagnóstico de vazamento e teste de pressão"],
    ["Instalação mal feita pelo instalador anterior", "Refazemos a infraestrutura conforme norma"],
  ];
  return (
    <section className="bg-surface section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <img
          src={higienizacao}
          alt="Limpeza e higienização de filtro de ar-condicionado feita por técnico especializado"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full rounded-[var(--radius-2xl)] border border-border object-cover shadow-[var(--shadow-card)]"
        />
        <div>
          <p className="eyebrow">Problema → solução</p>
          <h2 className="display-2 mt-3">O sintoma é sempre o mesmo: falta de manutenção correta</h2>
          <ul className="mt-7 grid gap-4">
            {linhas.map(([problema, solucao]) => (
              <li key={problema} className="card p-5">
                <p className="font-semibold">{problema}</p>
                <p className="mt-1.5 flex items-start gap-2 text-muted-foreground">
                  <IconArrow width={18} height={18} className="mt-1 shrink-0 text-accent" />
                  {solucao}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Diferenciais() {
  const itens = [
    ["Diagnóstico antes do orçamento", "Ninguém troca peça no chute. Medimos, testamos e só depois orçamos."],
    ["Execução limpa", "Proteção do ambiente, recolhimento de resíduos e local entregue organizado."],
    ["Preço fechado", "Você aprova o valor antes do serviço começar. Sem surpresa no fim."],
    ["Registro técnico", "Relatório do que foi feito, peças usadas e recomendação da próxima revisão."],
  ];
  return (
    <section id="diferenciais" className="section-y">
      <div className="container-page">
        <p className="eyebrow">Por que a MGK</p>
        <h2 className="display-2 mt-3 max-w-2xl">Trabalho técnico, não “gambiarra de instalador”</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {itens.map(([title, text]) => (
            <div key={title} className="card card-hover flex gap-4 p-6">
              <IconShield width={24} height={24} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1.5 text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Processo() {
  const passos = [
    ["Contato", "Você descreve o que precisa pelo WhatsApp ou pelo formulário."],
    ["Avaliação", "Analisamos ambiente, equipamento e infraestrutura — presencial ou por fotos."],
    ["Orçamento", "Proposta clara, com escopo, prazo e valor fechado."],
    ["Execução", "Serviço agendado, feito por técnico e testado na sua frente."],
    ["Acompanhamento", "Orientação de uso e lembrete da próxima manutenção."],
  ];
  return (
    <section id="processo" className="bg-ink text-ink-foreground section-y">
      <div className="container-page">
        <p className="eyebrow !text-ink-muted">Como funciona</p>
        <h2 className="display-2 mt-3 max-w-2xl">Cinco etapas, zero incerteza</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {passos.map(([title, text], i) => (
            <li key={title} className="rounded-[var(--radius-xl)] border border-white/15 p-5">
              <span className="text-sm font-bold tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Segmentos() {
  const segs = [
    { icon: IconHome, title: "Residências", text: "Quartos, salas e home office com conforto silencioso." },
    { icon: IconStore, title: "Comércio", text: "Lojas, clínicas e restaurantes que não podem parar." },
    { icon: IconBuilding, title: "Corporativo", text: "Escritórios e prédios com plano de manutenção documentado." },
    { icon: IconServer, title: "Salas técnicas", text: "CPD e data center com climatização de precisão." },
  ];
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Onde atuamos</p>
          <h2 className="display-2 mt-3">Do split do quarto ao sistema da empresa inteira</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {segs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-5">
                <Icon width={22} height={22} className="text-accent" />
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={comercial}
          alt="Conjunto de unidades condensadoras de climatização comercial instaladas em área técnica"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full rounded-[var(--radius-2xl)] border border-border object-cover shadow-[var(--shadow-card)]"
        />
      </div>
    </section>
  );
}

export function AreaAtendimento() {
  return (
    <section id="atendimento" className="bg-surface section-y">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Área de atendimento</p>
        <h2 className="display-2 mt-3">
          {isReal(site.region) ? site.region : "Atendimento na região da empresa"}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Atendemos residências e empresas {isReal(site.city) ? `em ${site.city}` : "na região"} e
          cidades vizinhas. Se você está próximo, conseguimos agendar visita técnica com data e
          horário confirmados.
        </p>
        <dl className="mt-8 grid gap-5 sm:grid-cols-3">
          {([
            { label: "Endereço", value: site.address as string },
            { label: "Horário", value: site.hours as string },
            { label: "Contato", value: site.phone as string },
          ]).map(({ label, value }) => (
            <div key={label} className="card p-5">
              <dt className="text-sm font-semibold text-muted-foreground">{label}</dt>
              <dd className="mt-1 font-semibold">{isReal(value) ? value : "A confirmar"}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export const faqs = [
  [
    "Quanto custa instalar um ar-condicionado split?",
    "O valor depende da capacidade do aparelho, da distância entre evaporadora e condensadora, da necessidade de infraestrutura elétrica e do acabamento. Fazemos a avaliação e enviamos um orçamento fechado antes de começar.",
  ],
  [
    "De quanto em quanto tempo devo fazer a manutenção?",
    "Em uso residencial, a recomendação é a cada 6 a 12 meses. Em comércios, clínicas e escritórios com uso intenso, o ideal é a cada 3 a 6 meses, com registro das intervenções.",
  ],
  [
    "A instalação mantém a garantia do fabricante?",
    "Sim. A instalação é feita conforme o manual do fabricante, com vácuo, teste de estanqueidade e emissão do comprovante de serviço, condições exigidas para manter a garantia.",
  ],
  [
    "Vocês fazem higienização completa ou só limpeza de filtro?",
    "Fazemos higienização completa: filtros, serpentina, turbina, bandeja e dreno, com produtos específicos. Limpar só o filtro não elimina o mau cheiro nem os fungos.",
  ],
  [
    "Meu ar-condicionado não gela. É falta de gás?",
    "Nem sempre. Pode ser sujeira na serpentina, sensor com defeito, capacitor, compressor ou vazamento. Fazemos o diagnóstico antes de qualquer recarga — recarregar sem corrigir o vazamento é desperdício.",
  ],
  [
    "Atendem empresas com contrato de manutenção?",
    "Sim. Montamos plano PMOC com cronograma, relatórios e responsável técnico, adequado a escritórios, clínicas, lojas e indústrias.",
  ],
] as const;

export function FAQ() {
  return (
    <section id="faq" className="section-y">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="display-2 mt-3">Perguntas que recebemos todos os dias</h2>
        <div className="mt-8 grid gap-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="card group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold">
                {q}
                <IconArrow
                  width={20}
                  height={20}
                  className="shrink-0 rotate-90 text-accent transition-transform group-open:-rotate-90"
                />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTAFinal() {
  return (
    <section id="orcamento" className="bg-surface section-y">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">Fale com a gente</p>
          <h2 className="display-2 mt-3">Receba um orçamento com escopo e preço fechado</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conte o que está acontecendo com o seu equipamento ou o que pretende instalar. Nós
            avaliamos e respondemos com uma proposta objetiva.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              onClick={() => track("click_whatsapp", { local: "cta_final" })}
              className="btn btn-primary"
            >
              <IconWhatsApp width={20} height={20} />
              Chamar no WhatsApp
            </a>
            {isReal(site.phone) && (
              <a href={phoneHref} className="btn btn-ghost">
                <IconPhone width={19} height={19} />
                {site.phone}
              </a>
            )}
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-ink-foreground md:pb-0">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold">
            MGK <span className="text-accent">Clima Tech</span>
          </p>
          <p className="mt-3 text-sm text-ink-muted">{site.tagline}</p>
          {isReal(site.cnpj) && <p className="mt-3 text-sm text-ink-muted">CNPJ {site.cnpj}</p>}
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase">Serviços</h2>
          <ul className="mt-3 grid gap-2 text-sm text-ink-muted">
            {servicos.slice(0, 5).map((s) => (
              <li key={s.title}>
                <a href="#servicos" className="hover:text-ink-foreground">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase">Navegação</h2>
          <ul className="mt-3 grid gap-2 text-sm text-ink-muted">
            <li><a href="#diferenciais" className="hover:text-ink-foreground">Diferenciais</a></li>
            <li><a href="#processo" className="hover:text-ink-foreground">Como funciona</a></li>
            <li><a href="#atendimento" className="hover:text-ink-foreground">Área de atendimento</a></li>
            <li><a href="#faq" className="hover:text-ink-foreground">Dúvidas frequentes</a></li>
            <li><a href="#orcamento" className="hover:text-ink-foreground">Orçamento</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase">Contato</h2>
          <ul className="mt-3 grid gap-2 text-sm text-ink-muted">
            <li>{isReal(site.phone) ? site.phone : "Telefone a confirmar"}</li>
            <li>{isReal(site.email) ? site.email : "E-mail a confirmar"}</li>
            <li>{isReal(site.address) ? site.address : "Endereço a confirmar"}</li>
            <li>{isReal(site.hours) ? site.hours : "Horário a confirmar"}</li>
          </ul>
          <a href={whatsappHref} className="btn btn-on-ink mt-5 !min-h-11">
            <IconWhatsApp width={18} height={18} />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="container-page py-6 text-sm text-ink-muted">
          © {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
