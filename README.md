# Mini-diagnóstico Comercial (SP.mkt)

Landing page de conversão para a oferta **Mini-diagnóstico Comercial** — R$297.

- Entrega: 1 sessão 45–60 min + mapa padronizado do gargalo + 3 ações objetivas
- Stack: Next.js 14 (App Router), TypeScript, pt-BR, mobile-first

## Variáveis de ambiente

Configure no **Vercel → Project → Settings → Environment Variables** (Production + Preview + Development):

| Nome Vercel | Uso | Obrigatório |
|---|---|---|
| `NEXT_PUBLIC_GATEWAY_CHECKOUT_URL` | CTA primário de checkout | Sim (para ativar compra) |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` | Agendamento pós-pagamento (`/sucesso`) | Sim (para ativar booking) |

### Onde o código lê essas vars

- Fonte única: [`lib/config.ts`](lib/config.ts)
- CTA checkout: [`app/page.tsx`](app/page.tsx) (usa `GATEWAY_CHECKOUT_URL` / `hasCheckout`)
- Booking pós-pagamento: [`app/sucesso/page.tsx`](app/sucesso/page.tsx) (usa `GOOGLE_CALENDAR_BOOKING_URL` / `hasBooking`)

Aliases aceitos (mesmo comportamento de placeholder se vazios):

- `GATEWAY_CHECKOUT_URL`
- `GOOGLE_CALENDAR_BOOKING_URL`

> **Importante:** como são lidas no client via `NEXT_PUBLIC_*`, altere no Vercel e **faça um novo deploy** para refletir.

### Comportamento com vars vazias

- Checkout vazio → botão **“Checkout em breve”** (disabled) + nota visível
- Booking vazio → botão **“Agendamento em breve”** na página `/sucesso` + nota visível

Não invente URLs. Só ative quando Silo fornecer o gateway e o Calendar booking.

## Local

```bash
cp .env.example .env.local
# preencha as URLs se tiver
npm install
npm run dev
```

## Deploy

Projeto sugerido no Vercel: `mini-diagnostico-comercial` (time SP.mkt / Silorsp).

Após setar as env vars, redeploy. O gateway e o Calendar **não** devem ser hardcoded.
