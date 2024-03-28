import React from "react";
import "./Font.css";

function Contact() {
  return (
    <>
      <div div className="fontstyle">
        <h2>Contact vtuhub2021:</h2>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:vtuhub2021@gmail.com">vtuhub2021@gmail.com</a> /{" "}
          <a href="https://t.me/yourTelegramUsername" target="_blank">
            Telegram
          </a>
        </p>

        <p>
          For any inquiries, please reach out to us via email at{" "}
          <a href="mailto:vtuhub2021@gmail.com">vtuhub2021@gmail.com</a>. We
          strive to respond to all email inquiries within a day. To expedite the
          process, please include a clear and concise subject line in your
          email.
        </p>

        <h2>Social Media:</h2>

        <p>
          Connect with us on our social media platforms, including{" "}
          <a href="https://t.me/yourTelegramUsername" target="_blank">
            Telegram
          </a>
          . Feel free to send a direct message or comment on our posts. We are
          committed to responding to your queries in a timely manner.
        </p>

        <p>
          Please note that response times may vary, especially during peak
          periods or unforeseen circumstances. We appreciate your patience and
          want to assure you that we will address your concerns as promptly as
          possible. For security reasons, we advise against sharing sensitive or
          confidential information through non-secure communication channels.
          While we implement reasonable measures to protect your data, the
          security of information transmitted via email or online forms cannot
          be guaranteed.
        </p>

        <p>
          Thank you for choosing vtuhub2021. We look forward to assisting you
          and providing the best possible support.
        </p>
      </div>
    </>
  );
}

export default Contact;
