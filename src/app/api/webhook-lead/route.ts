// src/app/api/webhook-lead/route.ts
import { NextResponse } from 'next/server';
import { sendDiscordAlert } from '@/lib/discord-notifier';
import { sendWelcomeEmail } from '@/lib/resend-mailer';

export async function POST(request: Request) {
  try {
    // 1. Extraemos los datos enviados desde el frontend (el cotizador/formulario)
    const body = await request.json();
    const { name, email, projectType, budgetMin, budgetMax, wantsMaintenance } = body;

    // 2. Validación de seguridad básica (que no envíen datos vacíos)
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios (nombre, correo o proyecto).' },
        { status: 400 }
      );
    }

    // 3. Empaquetamos los datos
    const leadData = {
      name,
      email,
      projectType,
      budgetMin,
      budgetMax,
      wantsMaintenance
    };

    // 4. Ejecutamos ambas promesas en paralelo para no hacer esperar al cliente
    // No usamos 'await' en cada una por separado para máxima velocidad.
    await Promise.all([
      sendDiscordAlert(leadData),
      sendWelcomeEmail(leadData)
    ]);

    // 5. Respondemos al frontend que todo fue un éxito
    return NextResponse.json(
      { success: true, message: 'Lead procesado, notificaciones enviadas.' },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error en la ruta del webhook-lead:", error);
    // En caso de que algo falle, respondemos con error de servidor
    return NextResponse.json(
      { error: 'Ocurrió un error interno al procesar el prospecto.' },
      { status: 500 }
    );
  }
}