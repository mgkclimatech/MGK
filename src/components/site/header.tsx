import { useEffect, useState } from "react";

import logo from "@/assets/mgk-logo.png";
import { phoneHref, site, isReal, track, whatsappHref } from "@/lib/site";
import { MenuIcon } from "./menu-icon";
import {
  IconChevronRight,
  IconFileText,
  IconLayoutGrid,
  IconPhone,
  IconSparkles,
  IconUsers,
  IconWhatsApp,
  IconZap,
} from "./icons";

const nav = [
  { href: "#servicos", label: "Serviços", Icon: IconLayoutGrid },
  { href: "#diferenciais", label: "Diferenciais", Icon: IconSparkles },
  { href: "#processo", label: "Como funciona", Icon: IconZap },
  { href: "#atendimento", label: "Atendimento", Icon: IconUsers },
  { href: "#faq", label: "Dúvidas", Icon: IconFileText },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previous || "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
              className="nav-link rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            Solicitar Orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 shrink-0 items-center justify-center border-0 bg-transparent p-0 text-accent lg:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        data-open={open}
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        className="menu-mobile absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-background lg:hidden"
      >
        <nav aria-label="Navegação mobile" className="container-page flex flex-col gap-2 py-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              onClick={() => {
                setActive(item.href);
                setOpen(false);
              }}
              tabIndex={open ? 0 : -1}
              className="menu-link flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-4 text-base font-semibold transition-colors hover:border-accent hover:bg-surface data-[active=true]:border-accent data-[active=true]:bg-surface"
            >
              <span className="flex min-w-0 items-center gap-3">
                <item.Icon width={18} height={18} className="shrink-0 text-accent" />
                <span className="truncate">{item.label}</span>
              </span>
              <IconChevronRight width={18} height={18} className="shrink-0 text-muted-foreground" />
            </a>
          ))}

          <a
            href={whatsappHref}
            tabIndex={open ? 0 : -1}
            onClick={() => {
              setOpen(false);
              track("click_whatsapp", { local: "menu_mobile" });
            }}
            className="btn btn-primary mt-3"
          >
            <IconWhatsApp width={19} height={19} />
            Solicitar Orçamento
          </a>
          {isReal(site.phone) && (
            <a
              href={phoneHref}
              tabIndex={open ? 0 : -1}
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-2.5 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
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
