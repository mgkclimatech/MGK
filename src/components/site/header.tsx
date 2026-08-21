import { useEffect, useState } from "react";
import logoAsset from "@/assets/mgk-logo.png.asset.json";

const logo = logoAsset.url;
import { phoneHref, site, isReal, track, whatsappHref } from "@/lib/site";
import { IconArrow, IconPhone, IconWhatsApp } from "./icons";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Como funciona" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset["menuOpen"] = open ? "true" : "false";
    return () => {
      delete document.body.dataset["menuOpen"];
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--border),0_10px_30px_-24px_rgba(0,0,0,.5)]" : "hairline"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} — início`}>
          <img src={logo} alt="" width={40} height={40} className="h-10 w-auto" />
          <span className="text-base leading-tight font-bold tracking-tight">
            MGK <span className="text-accent">Clima Tech</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isReal(site.phone) && (
            <a
              href={phoneHref}
              onClick={() => track("click_telefone", { local: "header" })}
              className="btn btn-ghost !min-h-11 !px-4 text-[0.95rem]"
            >
              <IconPhone width={18} height={18} />
              {site.phone}
            </a>
          )}
          <a
            href={whatsappHref}
            onClick={() => track("click_whatsapp", { local: "header" })}
            className="btn btn-primary !min-h-11 !px-5 text-[0.95rem]"
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="btn btn-ghost !min-h-11 !w-11 !px-0 lg:hidden"
        >
          <svg
            className="burger"
            data-open={open}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      <div
        id="menu-mobile"
        data-open={open}
        className="menu-mobile fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="container-page flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-4 text-base font-semibold transition-colors hover:border-accent hover:bg-surface"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted text-accent">
                  <IconArrow width={16} height={16} />
                </span>
                <span className="truncate">{item.label}</span>
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="shrink-0 text-muted-foreground">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </a>
          ))}

          <a
            href={whatsappHref}
            onClick={() => {
              setOpen(false);
              track("click_whatsapp", { local: "menu_mobile" });
            }}
            className="btn btn-primary mt-3"
          >
            <IconWhatsApp width={19} height={19} />
            Solicitar orçamento
          </a>
          {isReal(site.phone) && (
            <a
              href={phoneHref}
              onClick={() => {
                setOpen(false);
                track("click_telefone", { local: "menu_mobile" });
              }}
              className="btn btn-ghost mt-2"
            >
              <IconPhone width={18} height={18} />
              {site.phone}
            </a>
          )}
        </nav>
      </div>

    </header>
  );
}

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-2.5 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={phoneHref}
          onClick={() => track("click_telefone", { local: "barra_mobile" })}
          className="btn btn-ghost flex-1 !min-h-12 !px-3 text-[0.95rem]"
        >
          <IconPhone width={18} height={18} />
          Ligar
        </a>
        <a
          href={whatsappHref}
          onClick={() => track("click_whatsapp", { local: "barra_mobile" })}
          className="btn btn-accent flex-1 !min-h-12 !px-3 text-[0.95rem]"
        >
          <IconWhatsApp width={18} height={18} />
          Orçamento
        </a>
      </div>
    </div>
  );
}
