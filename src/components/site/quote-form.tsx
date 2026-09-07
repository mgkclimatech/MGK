import { useState, type FormEvent } from "react";
import { site, track, whatsappHref, isReal } from "@/lib/site";

type Errors = Partial<Record<"nome" | "contato" | "servico", string>>;

const servicos = [
  "Instalação de ar-condicionado",
  "Manutenção preventiva",
  "Manutenção corretiva / reparo",
  "Higienização e limpeza",
  "Projeto e dimensionamento",
  "Contrato PMOC / empresa",
];

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const contato = String(data.get("contato") ?? "").trim();
    const servico = String(data.get("servico") ?? "");
    const next: Errors = {};
    if (nome.length < 2) next.nome = "Informe seu nome.";
    if (contato.replace(/\D/g, "").length < 10) next.contato = "Informe um telefone com DDD.";
    if (!servico) next.servico = "Selecione o serviço desejado.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    track("envio_orcamento", { servico });
    setSent(true);

    if (isReal(site.whatsapp)) {
      const msg = `Olá, sou ${nome}. Preciso de: ${servico}. Meu contato: ${contato}.`;
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    }
  }

  if (sent) {
    return (
      <div className="card p-7" role="status">
        <h3 className="text-xl font-bold">Pedido registrado</h3>
        <p className="mt-2 text-muted-foreground">
          {isReal(site.whatsapp)
            ? "Abrimos o WhatsApp com seus dados. Se a janela não abriu, toque no botão abaixo."
            : "Assim que o número de contato for publicado, o envio será direcionado automaticamente. Enquanto isso, use os canais do rodapé."}
        </p>
        <a href={whatsappHref} className="btn btn-primary mt-5">
          Continuar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-7">
      <h3 className="text-xl font-bold">Peça seu orçamento</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Resposta rápida em horário comercial. Sem compromisso.
      </p>

      <div className="mt-5 grid gap-4">
        <Field id="nome" label="Nome" error={errors.nome}>
          <input
            id="nome"
            name="nome"
            autoComplete="name"
            className="input-field"
            placeholder="Como podemos te chamar"
            aria-invalid={!!errors.nome}
          />
        </Field>

        <Field id="contato" label="Telefone / WhatsApp" error={errors.contato}>
          <input
            id="contato"
            name="contato"
            inputMode="tel"
            autoComplete="tel"
            className="input-field"
            placeholder="(00) 00000-0000"
            aria-invalid={!!errors.contato}
          />
        </Field>

        <Field id="servico" label="Serviço" error={errors.servico}>
          <select id="servico" name="servico" className="input-field" aria-invalid={!!errors.servico} defaultValue="">
            <option value="" disabled>
              Selecione…
            </option>
            {servicos.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field id="detalhes" label="Detalhes (opcional)">
          <textarea
            id="detalhes"
            name="detalhes"
            rows={3}
            className="input-field"
            placeholder="Ambiente, metragem, quantidade de aparelhos…"
          />
        </Field>
      </div>

      <button type="submit" className="btn btn-primary mt-5 w-full">
        Quero Meu Orçamento
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Usamos seus dados apenas para responder a esta solicitação.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm font-medium text-[oklch(0.52_0.19_25)]">{error}</p>
      )}
    </div>
  );
}
