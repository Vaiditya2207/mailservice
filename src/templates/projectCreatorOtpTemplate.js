function generateOtpTemplate(otp, user) {
    return `
        <div style="width: 600px; margin: 0 auto;">
            <div style="text-align: center; font-family: Arial, sans-serif; color: #333; border: 2px solid #1a73e8; padding: 20px; border-radius: 10px;">
                <h1 style="color: #1a73e8;">Your OTP Code</h1>
                <p>Hello ${user},</p>
                <p>We received a request to access your account. Use the following One Time Password (OTP) to complete the process:</p>
                <h2 style="color: #1a73e8;">${otp}</h2>
                <p>This OTP is valid for 10 minutes. Please do not share this code with anyone.</p>
                <p>If you did not request this, please ignore this email.</p>
                <p style="color: #1a73e8;">Best regards,</p>
                <p style="color: #1a73e8;">The ProjectCreator Team</p>
            </div>
        </div>
    `;
}

export default generateOtpTemplate;