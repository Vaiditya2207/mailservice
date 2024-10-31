// projectCretorVerificationMailTemplate.js

const verificationTemplate = (name, verificationLink) => {
  return `
    <div style="width: 600px; margin: 0 auto;">
      <div style="text-align: center; font-family: Arial, sans-serif; color: #333; border: 2px solid #1a73e8; padding: 20px; border-radius: 10px;">
        <h1 style="color: #1a73e8;">Email Verification Required</h1>
        <p>Hello ${name},</p>
        <p>Thank you for registering with ProjectCreator! Please verify your email address to complete your registration.</p>
        <p style="margin: 20px 0;">
          <a href="${verificationLink}" style="background-color: #1a73e8; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email Address</a>
        </p>
        <p>If the button above doesn't work, please copy and paste the following link into your web browser:</p>
        <p><a href="${verificationLink}" style="color: #1a73e8;">${verificationLink}</a></p>
        <p>If you did not create an account with us, please ignore this email.</p>
        <p style="color: #1a73e8;">Best regards,</p>
        <p style="color: #1a73e8;">The ProjectCreator Team</p>
      </div>
    </div>
  `;
};

export default verificationTemplate;