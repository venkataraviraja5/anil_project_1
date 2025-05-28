import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "venkataraviraja5@gmail.com",
        pass: "rbga kdue uvdu ltjv",
      },
    });

    const mailOptions = {
      from: email,
      to: "venkataraviraja5@gmail.com",
      subject: `📩 New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain fallback
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #333;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 5px;"><strong>Message:</strong></p>
            <div style="background: #fff; border-left: 4px solid #007bff; padding: 15px; color: #555; border-radius: 4px;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #aaa;">
            <p>This message was sent from your contact form.</p>
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: `Server error -- >  ${error}` }), { status: 500 });
  }
}
