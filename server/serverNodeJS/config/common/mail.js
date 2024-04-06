var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "phatdtph37313@fpt.edu.vn",
        pass: "lcgs nyku wohn xegn"
    }
});
module.exports = transporter 