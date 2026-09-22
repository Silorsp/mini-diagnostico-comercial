import {
  GATEWAY_CHECKOUT_URL,
  hasCheckout,
  OFFER,
} from "@/lib/config";

const BULLETS = [
  "Sessão ao vivo focada no seu funil comercial",
  "Mapa claro do principal gargalo (não é planilha genérica)",
  "3 ações priorizadas pra executar primeiro",
  "Próximo passo sugerido só se o mapa indicar (piloto ~R$997)",
] as const;

const INCLUSO = [
  "1 sessão ao vivo de 45–60 min",
  "Mapa padronizado do gargalo comercial",
  "3 ações objetivas e priorizadas",
  "Próximo passo sugerido (somente se o mapa indicar)",
] as const;

const NAO_INCLUSO = [
  "App Diagnóstico/Pulso",
  "Implementação",
  "Campanhas",
  "Retainer",
  "Piloto / WhatsApp na Prática",
] as const;

const STEPS = [
  {
    title: "Escolha o Mini-diagnóstico",
    text: "Confirme que a oferta de R$297 faz sentido para o momento do seu funil.",
  },
  {
    title: "Finalize o pagamento",
    text: "Checkout seguro via gateway (link configurado quando disponível).",
  },
  {
    title: "Agende a sessão",
    text: "Após o pagamento, escolha o horário na agenda (link de booking).",
  },
  {
    title: "Prepare o contexto",
    text: "Traga números básicos do funil e onde você sente que trava.",
  },
  {
    title: "Sessão ao vivo (45–60 min)",
    text: "Diagnóstico humano focado no gargalo principal — sem planilha genérica.",
  },
  {
    title: "Receba o mapa + 3 ações",
    text: "Entregável documentado com priorização clara do que executar primeiro.",
  },
] as const;

function PrimaryCta({ className = "" }: { className?: string }) {
  if (hasCheckout) {
    return (
      <a
        className={`btn btn-primary ${className}`.trim()}
        href={GATEWAY_CHECKOUT_URL}
        rel="noopener noreferrer"
      >
        Quero meu Mini-diagnóstico por R$297
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`btn btn-primary is-disabled ${className}`.trim()}
      disabled
      aria-disabled="true"
      title="Link de checkout pendente"
    >
      Checkout em breve
    </button>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            SP<span>.mkt</span>
          </div>
          {hasCheckout ? (
            <a className="nav-cta" href={GATEWAY_CHECKOUT_URL} rel="noopener noreferrer">
              R$297
            </a>
          ) : (
            <span className="nav-cta is-disabled">R$297</span>
          )}
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="badge">Oferta humana · entregável documentado</div>
            <h1>Descubra o gargalo que trava suas vendas — em 1 sessão.</h1>
            <p className="hero-sub">
              Mini-diagnóstico Comercial: 45–60 min + mapa padronizado + 3 ações
              objetivas. R$297.
            </p>
            <div className="price-pill">
              <span>{OFFER.name}</span>
              <strong>{OFFER.price}</strong>
            </div>
            <div className="cta-row">
              <PrimaryCta />
              <a className="btn btn-secondary" href="#incluso">
                Ver o que está incluso
              </a>
            </div>
            {!hasCheckout && (
              <p className="note">
                Link de checkout pendente — configure NEXT_PUBLIC_GATEWAY_CHECKOUT_URL
                no Vercel para ativar o CTA.
              </p>
            )}
          </div>
        </section>

        <section className="section" id="beneficios">
          <div className="container">
            <h2 className="section-title">O que você leva</h2>
            <ul className="bullets">
              {BULLETS.map((item) => (
                <li key={item}>
                  <span className="mark" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="incluso">
          <div className="container">
            <h2 className="section-title">Incluso / não incluso</h2>
            <div className="grid-2">
              <div className="card">
                <h3>Incluso</h3>
                <ul className="check-list yes">
                  {INCLUSO.map((item) => (
                    <li key={item}>
                      <span className="icon" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3>Não incluso</h3>
                <ul className="check-list no">
                  {NAO_INCLUSO.map((item) => (
                    <li key={item}>
                      <span className="icon" aria-hidden="true">
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <div className="container">
            <h2 className="section-title">Como funciona</h2>
            <ol className="steps">
              {STEPS.map((step) => (
                <li key={step.title}>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="politica">
          <div className="container">
            <h2 className="section-title">Reembolso e no-show</h2>
            <div className="card policy">
              <ul>
                <li>Sem reembolso após a sessão realizada.</li>
                <li>1 remarcação permitida com aviso de pelo menos 24h.</li>
                <li>No-show = sessão consumida (sem reembolso).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="proximo-passo">
          <div className="container">
            <h2 className="section-title">Próximo passo (se o mapa indicar)</h2>
            <div className="card upsell">
              <p>
                Se o mapa do Mini-diagnóstico apontar necessidade de execução
                acompanhada, o próximo passo sugerido pode ser um{" "}
                <strong>piloto concierge (~R$997)</strong>. Não é venda automática —
                só entra se o diagnóstico indicar.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <h2 className="section-title">Perguntas frequentes</h2>
            <div className="faq">
              <details open>
                <summary>O que esta oferta inclui de fato?</summary>
                <p>
                  Esta oferta é humana + entregável documentado. Não inclui o app
                  Diagnóstico/Pulso nem implementação.
                </p>
              </details>
              <details>
                <summary>Quanto tempo dura a sessão?</summary>
                <p>Entre 45 e 60 minutos, ao vivo, focada no seu funil comercial.</p>
              </details>
              <details>
                <summary>Recebo algo além da conversa?</summary>
                <p>
                  Sim: mapa padronizado do gargalo + 3 ações objetivas priorizadas
                  para executar primeiro.
                </p>
              </details>
              <details>
                <summary>Posso remarcar?</summary>
                <p>
                  Sim, 1 remarcação com aviso mínimo de 24h. No-show consome a
                  sessão.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="final-cta">
              <h2>Pronto para mapear o gargalo?</h2>
              <p>
                Mini-diagnóstico Comercial · {OFFER.duration} · mapa + 3 ações ·{" "}
                {OFFER.price}
              </p>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <PrimaryCta />
              </div>
              {!hasCheckout && (
                <p className="note" style={{ margin: "0.85rem auto 0" }}>
                  Checkout em breve — link de pagamento ainda não configurado.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>SP.mkt · Silo Pimentel</span>
          <span>Mini-diagnóstico Comercial · {OFFER.price}</span>
        </div>
      </footer>
    </>
  );
}
