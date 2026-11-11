// src/lib/discord-notifier.ts

// Definimos qué datos esperamos recibir del prospecto
export interface LeadData {
  name: string;
  email: string;
  projectType: string;
  budgetMin: number;
  budgetMax: number;
  wantsMaintenance: boolean;
}

export async function sendDiscordAlert(lead: LeadData) {
  // Asegúrate de poner esta variable en tu archivo .env.local
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL; 
  
  if (!webhookUrl) {
    console.warn("Falta DISCORD_WEBHOOK_URL en las variables de entorno.");
    return;
  }

  // Formateador rápido para pesos mexicanos
  const formatMoney = (amount: number) => 
    new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount);

  // Construimos un "Embed" (Tarjeta con diseño dentro de Discord)
  const embed = {
    title: "🚀 ¡Nuevo Prospecto de Desarrollo Web!",
    color: 1082420, // Color Esmeralda en decimal
    fields: [
      { name: "👤 Nombre", value: lead.name, inline: true },
      { name: "📧 Correo", value: lead.email, inline: true },
      { name: "🛠️ Tipo de Proyecto", value: lead.projectType, inline: false },
      { 
        name: "💰 Presupuesto Estimado", 
        value: `${formatMoney(lead.budgetMin)} - ${formatMoney(lead.budgetMax)}`, 
        inline: true 
      },
      { 
        name: "🔄 Plan de Mantenimiento", 
        value: lead.wantsMaintenance ? "✅ Sí, incluido" : "❌ No", 
        inline: true 
      }
    ],
    footer: { text: "DevStudio Automations • Talento Emergente" },
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!response.ok) throw new Error("Error en la respuesta de Discord");
    return true;
  } catch (error) {
    console.error("Error al enviar alerta a Discord:", error);
    return false;
  }
}