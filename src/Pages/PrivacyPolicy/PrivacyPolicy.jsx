import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="outer-container">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1 className="privacy-title">Research Decode: Privacy Policy</h1>
          <p className="privacy-date">Effective Date: 18-01-2025</p>
        </header>

        <section className="privacy-content">
          <p className="privacy-intro">
            At Research Decode, we are committed to protecting your privacy and ensuring a secure and trustworthy experience while using our platform. This Privacy Policy explains how we collect, use, share, and protect your personal information. By using Research Decode, you agree to the practices described in this Privacy Policy.
          </p>

          <div className="privacy-card">
            <h2 className="privacy-section-title">1. Information We Collect</h2>
            <p>We collect and process different types of information to provide and improve our services:</p>

            <h3 className="privacy-subsection-title">1.1 Information You Provide Directly</h3>
            <ul>
              <li>Account Information: When you register on the platform, we collect your name, email address, password, and profile information (e.g., professional background, expertise areas, etc.).</li>
              <li>Expert Registration (eSupervisors): When registering as an eSupervisor, additional details such as academic qualifications, professional history, and areas of specialization may be required.</li>
              <li>Course Creation: If you create and sell courses, we may collect course content, payment details, and related metadata.</li>
              <li>Event Participation: Information about your participation in events such as webinars, workshops, or conferences.</li>
            </ul>

            <h3 className="privacy-subsection-title">1.2 Information Automatically Collected</h3>
            <ul>
              <li>Usage Data: Information about how you use the platform, including pages visited, features used, and time spent on the site.</li>
              <li>Device and Browser Information: Data such as IP address, device type, operating system, browser type, and settings.</li>
              <li>Cookies and Tracking Technologies: We use cookies and similar technologies to enhance your experience and analyze platform usage.</li>
            </ul>

            <h3 className="privacy-subsection-title">1.3 Information From Third Parties</h3>
            <ul>
              <li>We may collect information from third-party sources, such as social media platforms if you use social login to access our platform.</li>
              <li>Payment processors to facilitate transactions.</li>
            </ul>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">2. How We Use Your Information</h2>
            <p>We use your information to provide, maintain, and improve the services offered on Research Decode:</p>
            <ul>
              <li>To create and manage user accounts and profiles.</li>
              <li>To connect researchers with experts (eSupervisors) for guidance and collaboration.</li>
              <li>To facilitate course creation, enrollment, and transactions.</li>
              <li>To organize and promote events such as webinars, workshops, and conferences.</li>
              <li>To personalize user experiences and recommend relevant content or resources.</li>
              <li>To communicate updates, respond to inquiries, and provide customer support.</li>
              <li>To analyze platform performance and user behavior to improve functionality.</li>
              <li>To ensure compliance with legal obligations and enforce our Terms of Service.</li>
            </ul>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">3. How We Share Your Information</h2>
            <p>We do not sell your personal information. However, we may share it in the following situations:</p>

            <h3 className="privacy-subsection-title">3.1 With Other Users</h3>
            <ul>
              <li>When you register as an eSupervisor, certain profile details (e.g., name, expertise, and professional background) will be visible to other users.</li>
              <li>If you create courses, your name and profile information will appear alongside the course listing.</li>
            </ul>

            <h3 className="privacy-subsection-title">3.2 With Service Providers</h3>
            <ul>
              <li>We may share your information with third-party service providers that assist us in delivering our services, such as hosting providers, payment processors, or marketing platforms.</li>
            </ul>

            <h3 className="privacy-subsection-title">3.3 For Legal Purposes</h3>
            <ul>
              <li>We may disclose your information if required to do so by law, or in response to valid legal requests such as subpoenas or court orders.</li>
            </ul>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">4. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to safeguard your information against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your data, no method of transmission or storage is completely secure.</p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">6. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li>Access and Correction: You can access and update your information through your account settings.</li>
              <li>Data Deletion: You can request the deletion of your account and associated data.</li>
              <li>Opt-Out: You can opt out of marketing communications by following the unsubscribe instructions in our emails.</li>
              <li>Cookies Management: You can manage cookies through your browser settings.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at [Insert Contact Email].</p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">7. International Users</h2>
            <p>If you are accessing Research Decode from outside India, note that your information may be transferred to, stored, and processed in India where our servers are located. By using our platform, you consent to such transfers.</p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">9. Third-Party Links</h2>
            <p>Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites.</p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">10. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy to reflect changes in our practices, services, or legal obligations. We will notify you of significant changes by posting a notice on our platform or sending an email.</p>
          </div>

          <div className="privacy-card">
            <h2 className="privacy-section-title">11. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <p>
              Email: info@researchdecode.com<br />
              Address: Gaya
            </p>
          </div>

          <footer className="privacy-footer">
            <p>
              By using Research Decode, you agree to the terms of this Privacy Policy.
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
