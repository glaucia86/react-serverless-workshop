const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env['SENDGRID_API_KEY']);

module.exports = async function(context) {    
    const { email, title, startAt, description } = context.bindings.payload;
    
    const msg = {
        to: email,
        from: { email: 'skinclear86@gmail.com', name: 'Glaucia Lemos Calendar' },
        subject: `Evento: ${title}`,
        html: `<h4>${title} @ ${startAt}</h4> <p>${description}</p>`
    };

    sgMail.send(msg);
    return msg;   
}