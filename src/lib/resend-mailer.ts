// src/lib/resend-mailer.ts
import { Resend } from 'resend';
import { LeadData } from './discord-notifier'; // Reutilizamos la interfaz

// Inicializamos Resend con la llave secreta de tu archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(lead: LeadData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("Falta RESEND_API_KEY en las variables de entorno.");
    return;
  }

  // Diseño en HTML limpio y oscuro, muy en sintonía con su marca.
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #18181b; color: #f4f4f5; padding: 30px; border-radius: 8px;">
      <h2 style="color: #34d399; margin-bottom: 20px;">Hola ${lead.name}, gracias por pensar en nosotros.</h2>
      
      <p style="font-size: 16px; line-height: 1.5; color: #a1a1aa;">
        Hemos recibido los detalles de tu proyecto (${lead.projectType}). Como equipo de talento emergente, nos emociona mucho la posibilidad de construir algo increíble y rentable para tu negocio.
      </p>
      
      <p style="font-size: 16px; line-height: 1.5; color: #a1a1aa;">
        Revisaremos tu estimación y nos prepararemos para nuestra llamada. Si aún no has agendado tu sesión gratuita de 15 minutos, puedes hacerlo en el siguiente enlace:
      </p>
      
      <div style="margin: 30px 0;">
        <a href="https://cal.com/tu-usuario/15min" style="background-color: #10b981; color: #09090b; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block;">
          Agendar mi llamada técnica
        </a>
      </div>
      
      <p style="font-size: 14px; color: #71717a; border-top: 1px solid #27272a; padding-top: 20px;">
        Este es un correo automático, pero detrás hay futuros ingenieros listos para programar tu éxito. ¡Hablamos pronto! <br>
        <strong>El equipo de DevStudio.</strong>
      </p>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: 'DevStudio <contacto@tuagencia.com>', // Tu dominio verificado en Resend
      to: lead.email,
      subject: 'Recibimos tu cotización. Siguiente paso 🚀',
      html: htmlContent,
    });

    return data;
  } catch (error) {
    console.error("Error al enviar correo con Resend:", error);
    throw error;
  }
}