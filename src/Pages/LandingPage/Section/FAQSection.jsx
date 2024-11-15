// FAQSection.jsx
import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import FaqCardComponent from '../../../Components/FAQCardComponent/FaqCardComponent'
import Typography from '../../../assets/scss/components/Typography';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is dropshipping?",
      answer: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"
    },
    {
      question: "What is refund policy?",
      answer: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"
    },
    {
      question: "Who are your suppliers?",
      answer: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"
    },
    {
      question: "Why choose us?",
      answer: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"
    },
    {
      question: "What is the shipping cost?",
      answer: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"
    },
    {
      question: "What is dropshipping?",
      answer: "Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies"
    }
  ];

  return (
    <div className="faq-section">
      <div className="faq-header">
        <Typography  variant={"semibold"} size={"3xl"}>Frequently Asked Questions</Typography>
        <Typography variant={"regular"} size={"sm"}>
          Install our top-rated dropshipping app to your e-commerce site and get access to
          US Suppliers, AliExpress vendors, and the best.
        </Typography>
      </div>

      <Grid fluid>
        <Row className="faq-grid">
          {faqs.map((faq, index) => (
            <Col xs={24} md={12} key={index} className="faq-item">
              <FaqCardComponent
                header={faq.question}
                content={faq.answer}
              />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default FAQSection;