import type { VercelRequest, VercelResponse } from '@vercel/node';

const MESSAGE =
  "Hello Nivha By Fashion Cut, I'd love to ask about a custom stitching or embroidery enquiry.";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const number = process.env['WHATSAPP_NUMBER'];

  const url = number
    ? `https://wa.me/${number}?text=${encodeURIComponent(MESSAGE)}`
    : `https://web.whatsapp.com/`;  // safe fallback until env var is set

  // 302 temporary redirect — WhatsApp opens on the client
  res.redirect(302, url);
}
