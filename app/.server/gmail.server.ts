
import nodemailer from "nodemailer";

export type GmailEmailMessage = {
    email: string,
    from: string,
    content: string,
};
  
export async function sendEmailWithGmail(message: GmailEmailMessage) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hugues.carlos.soares@gmail.com",
          pass: "qugd ppqz jxyr xzud"        
        }
    });

    const mailOptions = {
        from: message.from,
        to: "hugues.carlos.soares@gmail.com",
        subject: "Message received from hezino.com",
        text: message.content
    };
      
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}