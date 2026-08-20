import { useEffect, useState } from "react";
import logoAsset from "@/assets/mgk-logo.png.asset.json";

const logo = logoAsset.url;
import { phoneHref, site, isReal, track, whatsappHref } from "@/lib/site";
import { IconPhone, IconWhatsApp } from "./icons";

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
          className="btn btn-ghost !min-h-11 !px-4 lg:hidden"
        >
          <span className="sr-only">Abrir menu de navegação</span>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
          <span aria-hidden="true" className="text-[0.95rem] font-semibold">Menu</span>
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="hairline lg:hidden">
          <nav aria-label="Navegação mobile" className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium hover:bg-muted"
              >
                {item.label}
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
          </nav>
        </div>
      )}
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
