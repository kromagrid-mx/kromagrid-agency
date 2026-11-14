import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Reemplaza con tu API Key de Resend (ponla en tu .env idealmente)
const resend = new Resend('re_TU_API_KEY_AQUI'); 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, budgetMin, budgetMax, wantsMaintenance } = body;

    const { data, error } = await resend.emails.send({
      from: 'Kromagrid <cotizaciones@tudominio.com>', // Debes verificar tu dominio en Resend
      to: ['tu-correo-personal@gmail.com'], // A donde quieres que te lleguen los leads
      subject: `🔥 Nuevo Lead: ${name} cotizó un proyecto`,
      html: `
        <h2>Nuevo prospecto desde la calculadora</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Tipo de Proyecto:</strong> ${projectType}</p>
        <p><strong>Presupuesto estimado:</strong> $${budgetMin} - $${budgetMax} MXN</p>
        <p><strong>¿Quiere mantenimiento?:</strong> ${wantsMaintenance ? 'Sí' : 'No'}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Hubo un error procesando la solicitud' }, { status: 500 });
  }
}