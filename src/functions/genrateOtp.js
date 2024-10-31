
const generateANumber = () => {
    return Math.floor(Math.random() * 10);
}

const generateOtp = (digit) => {
    let otp = "";
    for (let i = 0; i < digit; i++) {
        otp += generateANumber();
    }
    return otp;
}

export default generateOtp;