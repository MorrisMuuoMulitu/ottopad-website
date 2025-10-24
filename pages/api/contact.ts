import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  company: z.string().max(100).optional(),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ErrorResponse {
  error: string;
  details?: unknown;
}

interface SuccessResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const validatedData: ContactFormData = contactSchema.parse(req.body);

    console.log('Contact form submission:', {
      name: validatedData.name,
      company: validatedData.company || 'N/A',
      email: validatedData.email,
      message: validatedData.message.substring(0, 50) + '...',
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors,
      });
    }

    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Internal server error. Please try again later.',
    });
  }
}
