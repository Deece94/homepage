export default function email(request, response) {
    try {
        const sgMail = require("@sendgrid/mail");
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        // Authenticate request
        if (request.method !== "POST") {
            response.status(405).json({ error: "Method not allowed." });
            return;
        }

        const to = request.body.to;
        const from = request.body.from;
        const subject = request.body.subject;
        const text = request.body.text;
        const html = request.body.html;

        // Validate inputs
        if (!to || !from || !subject || !text || !html) {
            response.status(400).json({ error: "Please provide all required fields." });
            return;
        }

        const msg = {
            to: to,
            from: from,
            subject: subject,
            text: text,
            html: html,
        };

        sgMail
            .send(msg)
            .then((response) => {
                console.log(response[0].statusCode);
                console.log(response[0].headers);
            })
            .catch((error) => {
                console.error(error);
            });

        response.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        response.status(500).json({ error: "Something went wrong. Please try again later." });
    }
}
