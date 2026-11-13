// src/lib/discord-notifier.ts

export interface LeadData {
  nombre: string;
  email: string;
  servicio?: string;
  presupuesto?: number | string;
  [key: string]: any;
}

export async function sendDiscordAlert(leadData: LeadData) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("Falta el DISCORD_WEBHOOK_URL en las variables de entorno.");
    return;
  }

  const message = {
    embeds: [
      {
        title: "🚨 ¡NUEVO LEAD PREMIUM!",
        color: 3066993, // Verde esmeralda
        fields: [
          { name: "Nombre", value: leadData.nombre || "No especificado", inline: true },
          { name: "Email", value: leadData.email || "No especificado", inline: true },
          { name: "Servicio", value: leadData.servicio || "No especificado", inline: true },
          { name: "Presupuesto Estimado", value: `$${leadData.presupuesto} MXN`, inline: false },
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