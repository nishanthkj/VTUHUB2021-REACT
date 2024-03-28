import React from "react";
import "./Font.css"; // Assuming Font.css contains your styling

function Privacy() {
  return (
    <>
      <div className="fontstyle">
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy describes how we collect, use, disclose, and
          protect the personal information of visitors to our website. We
          understand the importance of privacy and are committed to ensuring the
          confidentiality and security of your personal information. By
          accessing or using our website, you consent to the terms and practices
          described in this Privacy Policy.
        </p>

        <h2>Information Collection</h2>

        <ol>
          <li>
            <h3>Personal Information:</h3>
            <p>
              We may collect personal information, such as your name, email
              address, and any other information you provide when you register
              on our website, submit forms, or interact with our services.
            </p>
          </li>

          <li>
            <h3>Usage Data:</h3>
            <p>
              We may collect non-personal information about your interactions
              with our website. This may include your IP address, browser type,
              device information, pages visited, and referring website. We use
              this information to analyze trends, administer the site, track
              users' movements, and gather broad demographic information for
              aggregate use.
            </p>
          </li>
        </ol>

        {/* ... (Continue with the rest of your content) */}

        <h2>Contact Us</h2>

        <p>
          If you have any questions, concerns, or suggestions regarding this
          Privacy Policy, please contact us.
        </p>
      </div>
    </>
  );
}

export default Privacy;
