/**
 * Runtime config for the Speak to Kit marketing site.
 *
 * There is no build step, so values are read directly from
 * window.STK_CONFIG at runtime. Replace placeholders below
 * before deploy. See .env.example at the repo root for the
 * canonical names.
 */
window.STK_CONFIG = {
  // n8n webhook URL — receives lead capture POSTs from the hero
  // capsule. Body shape: { email, query, source, timestamp }.
  LEAD_WEBHOOK_URL: 'https://n8n.contxt.network/webhook/contxt-website-post',
};
