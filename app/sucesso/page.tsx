import Link from "next/link";
import {
  GOOGLE_CALENDAR_BOOKING_URL,
  hasBooking,
  OFFER,
} from "@/lib/config";

export default function SucessoPage() {
  return (
    <main className="success-wrap">
      <div className="container">
        <div className="success-card">
          <div className="badge" style={{ marginBottom: "1rem" }}>
            Pagamento recebido
          </div>
          <h1>Próximo passo: agende sua sessão</h1>
          <p>
            Obrigado pela compra do {OFFER.name}. Agora escolha o horário da
            sessão ao vivo ({OFFER.duration}).
          </p>

          {hasBooking ? (
            <a
              className="btn btn-primary"
              href={GOOGLE_CALENDAR_BOOKING_URL}
              rel="noopener noreferrer"
              style={{ width: "100%", marginBottom: "0.85rem" }}
            >
              Agendar no Google Calendar
            </a>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-primary is-disabled"
                disabled
                aria-disabled="true"
                style={{ width: "100%", marginBottom: "0.85rem" }}
              >
                Agendamento em breve
              </button>
              <p className="note" style={{ margin: "0 auto 1rem" }}>
                Link de agenda pendente — configure
                NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL no Vercel.
              </p>
            </>
          )}

          <Link className="btn btn-secondary" href="/" style={{ width: "100%" }}>
            Voltar à página
          </Link>
        </div>
      </div>
    </main>
  );
}
