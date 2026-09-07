/**
 * Dados da empresa — ponto único de edição.
 *
 * IMPORTANTE: os campos abaixo estão com PLACEHOLDERS porque ainda não foram
 * fornecidos dados reais. Substitua o valor e o conteúdo aparece automaticamente
 * nos CTAs, no footer e no JSON-LD. Enquanto o valor começar com "[", o site
 * direciona o usuário para o formulário de orçamento em vez de gerar link quebrado.
 */

export const site = {
  name: "MGK Clima Tech",
  legalName: "MGK Clima Tech",
  tagline: "Climatização, instalação e manutenção de ar-condicionado",
  phone: "(11) 97756-4619",
  whatsapp: "5511977564619", // apenas dígitos com DDI, ex.: 5511999999999
  email: "[E-MAIL]",
  address: "[ENDEREÇO]",
  city: "[CIDADE]",
  region: "[REGIÃO DE ATENDIMENTO]",
  cnpj: "[CNPJ]",
  hours: "[HORÁRIO DE ATENDIMENTO]",
  instagram: "[INSTAGRAM]",
} as const;

export const isReal = (value: string) => !value.startsWith("[");

export const whatsappMessage =
  "Olá! Vim pelo site da MGK Clima Tech e gostaria de solicitar um orçamento de ar-condicionado (instalação, manutenção ou higienização). Pode me ajudar?";

/** Link do WhatsApp quando houver número real; caso contrário, âncora do formulário. */
export const whatsappHref = isReal(site.whatsapp)
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
  : "#orcamento";

export const phoneHref = isReal(site.phone)
  ? `tel:${site.phone.replace(/[^\d+]/g, "")}`
  : "#orcamento";

/** Evento de analytics tolerante à ausência de GA4 — não bloqueia render. */
export function track(event: string, params: Record<string, string> = {}) {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
