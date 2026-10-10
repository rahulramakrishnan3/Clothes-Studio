import type { VercelRequest, VercelResponse } from '@vercel/node';

const MESSAGE =
  "Hello Sutra Studio, I'd love to ask about a custom stitching or embroidery enquiry.";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const number = process.env['WHATSAPP_NUMBER'];

  if (!number) {
    // Fail gracefully — don't expose why it failed
    res.status(503).send('Service temporarily unavailable.');
    return;
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}`;

  // 302 temporary redirect — WhatsApp opens on the client
  res.redirect(302, url);
}
