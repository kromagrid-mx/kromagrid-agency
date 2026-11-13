// src/lib/discord-notifier.ts

export interface LeadData {
  name?: string;
  nombre?: string;
  email: string;
  projectType?: string;
  servicio?: string;
  budgetMin?: number | string;
  budgetMax?: number | string;
  presupuesto?: number | string;
  wantsMaintenance?: boolean;
  [key: string]: any;
}

export async function sendDiscordAlert(leadData: LeadData) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("Falta el DISCORD_WEBHOOK_URL en las variables de entorno.");
    return;
  }

  const cliente = leadData.name || leadData.nombre || "No especificado";
  const proyecto = leadData.projectType || leadData.servicio || "No especificado";
  const presupuesto =
    leadData.budgetMin !== undefined && leadData.budgetMax !== undefined
      ? `$${leadData.budgetMin} - $${leadData.budgetMax} MXN`
      : leadData.presupuesto
      ? `$${leadData.presupuesto} MXN`
      : "No especificado";

  const message = {
    embeds: [
      {
        title: "🚨 ¡NUEVO LEAD PREMIUM!",
        color: 3066993, // Verde esmeralda
        fields: [
          { name: "Nombre", value: cliente, inline: true },
          { name: "Email", value: leadData.email || "No especificado", inline: true },
          { name: "Proyecto", value: proyecto, inline: true },
          { name: "Presupuesto Estimado", value: presupuesto, inline: true },
          { name: "Mantenimiento", value: leadData.wantsMaintenance ? "Sí" : "No", inline: true },
        ],
        timestamp: new Date().toISOString(),
      }
    ]
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error("Error enviando alerta a Discord:", error);
  }
}