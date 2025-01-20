import React from "react";

const PaymentPolicy = () => {
  return (
    <div className="outer-container">
      <div className="payment-container">
        <header className="payment-header">
          <h1 className="payment-title">Research Decode: Payment Policy</h1>
          <p className="payment-date">Effective Date: 18 - 01 - 2025</p>
        </header>

        <section className="payment-content">
          <p className="payment-intro">
            At Research Decode, we prioritize a secure, transparent, and user-friendly payment system to foster collaboration, education, and innovation. This Payment Policy outlines the commission structures and procedures governing all financial transactions on our platform.
          </p>

          <div className="payment-card">
            <h2 className="payment-section-title">1. Purpose of the Payment Policy</h2>
            <p>This policy establishes:</p>
            <ul>
              <li>Transparent commission structures for services and course creation.</li>
              <li>Payment workflows and user responsibilities.</li>
              <li>Measures for dispute resolution and security in financial transactions.</li>
            </ul>
            <p>All users must acknowledge and adhere to this Payment Policy to continue using the platform.</p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">2. Fee Structure</h2>

            <h3 className="payment-subsection-title">2.1. Services (Expert and Client Commissions)</h3>
            <p><strong>Experts (eSupervisors)</strong></p>
            <p>
              A 20% commission is deducted from the total amount earned by experts for providing services. This commission sustains platform operations, including user support, secure communications, and promotional opportunities.
            </p>
            <p><strong>Clients (Researchers)</strong></p>
            <p>
              A 10% commission is added to the total payment for services rendered. This fee covers features such as secure payments, access to qualified experts, and efficient project management tools.
            </p>

            <p><strong>Examples:</strong></p>
            <ul>
              <li>
                <strong>For Experts:</strong> If an expert earns ₹10,000 for a project, ₹2,000 (20%) is deducted. The expert receives ₹8,000.
              </li>
              <li>
                <strong>For Clients:</strong> If a client agrees to pay ₹10,000 for a project, they are charged an additional ₹1,000 (10%), making the total payment ₹11,000.
              </li>
            </ul>

            <h3 className="payment-subsection-title">2.2. Course Creation (Instructor Commission)</h3>
            <p>
              At Research Decode, instructors who create and sell courses will be subject to a 25% platform commission, which is competitive and supportive of educators.
            </p>

            <p><strong>Instructor Commission Structure</strong></p>
            <p><strong>Flat Rate:</strong></p>
            <p>
              A 25% commission is deducted from the total net revenue of each course sale, regardless of the method of promotion (personal or platform-driven).
            </p>

            <p><strong>Examples:</strong></p>
            <ul>
              <li>
                <strong>Course Sale:</strong> Course Price: ₹10,000<br />
                Transaction Fees (e.g., payment gateway): ₹500<br />
                Net Revenue: ₹9,500<br />
                Platform Commission (25%): ₹2,375<br />
                Instructor Earnings: ₹7,125.
              </li>
            </ul>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">3. Payment Workflow</h2>

            <h3 className="payment-subsection-title">3.1. Services (Expert-Client Transactions)</h3>
            <p><strong>Pre-Payment:</strong></p>
            <p>
              Clients and experts agree on project terms within the platform. Clients deposit the total project amount (inclusive of the 10% client fee) into the escrow account.
            </p>
            <p><strong>Project Execution:</strong></p>
            <p>
              Funds remain in escrow while the expert works on the project.
            </p>
            <p><strong>Completion:</strong></p>
            <p>
              Upon client approval, funds (minus the 20% expert commission) are released to the expert.
            </p>

            <h3 className="payment-subsection-title">3.2. Course Creation</h3>
            <p><strong>Revenue Allocation:</strong></p>
            <p>
              A 25% commission is deducted from the total net revenue of each course sale. The remaining 75% is credited to the instructor’s account.
            </p>
            <p><strong>Payouts:</strong></p>
            <p>
              Revenue is calculated monthly. Payments are disbursed to instructors within 30 days of the end of the month.
            </p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">4. Refunds and Disputes</h2>

            <h3 className="payment-subsection-title">4.1. Refund Policy</h3>
            <p>Refunds may be requested for:</p>
            <ul>
              <li>Non-delivery of promised services or products.</li>
              <li>Substandard course content or service quality.</li>
            </ul>
            <p>
              Refund requests must be submitted within 14 days of service completion or course purchase. Refunds are reviewed and processed by the support team.
            </p>

            <h3 className="payment-subsection-title">4.2. Dispute Resolution</h3>
            <p>
              Users may file a dispute for unresolved concerns. Research Decode mediates disputes by reviewing evidence and provides resolutions within 10 business days.
            </p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">5. Tax Compliance</h2>
            <p><strong>Experts and Instructors:</strong></p>
            <p>Responsible for reporting earnings and paying applicable taxes in their jurisdictions.</p>
            <p><strong>Clients:</strong></p>
            <p>
              Responsible for indirect taxes (e.g., GST, VAT) incurred during transactions. Detailed invoices will be provided to assist with tax reporting.
            </p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">6. Confidentiality and Security</h2>
            <p>
              Financial data is processed securely through encrypted payment gateways. Research Decode does not store sensitive payment information like credit card details.
            </p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">7. Prohibited Activities</h2>
            <p>Users are prohibited from:</p>
            <ul>
              <li>Circumventing the platform’s payment system to avoid fees.</li>
              <li>Submitting false or misleading financial information.</li>
              <li>Engaging in unauthorized chargebacks or disputes.</li>
            </ul>
            <p>Violations may result in suspension or termination of accounts.</p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">8. Amendments to the Payment Policy</h2>
            <p>
              Research Decode reserves the right to modify this Payment Policy as needed. Users will be notified of significant changes via email or platform notifications. Continued use of the platform constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="payment-card">
            <h2 className="payment-section-title">9. Contact Us</h2>
            <p>For payment-related assistance, please contact:</p>
            <p>
              Email: paymentsupport@researchdecode.com<br />
              Phone: +91 8249799187<br />
              Address: Jamsedpur , Jharkhand
            </p>
          </div>
        </section>

        <footer className="payment-footer">
          <p>
            By using Research Decode, you agree to this Payment Policy, ensuring secure and transparent transactions on our platform.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PaymentPolicy;
