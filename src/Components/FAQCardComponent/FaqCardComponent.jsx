import React from "react";
import "./FaqCardComponent.scss";
import Typography from "../../assets/scss/components/Typography";
import { Panel } from 'rsuite';

const FaqCardComponent = ({ header, content }) => {
  return (
    <Panel className="faq-card">
      <Typography size="lg" variant="bold" className="faq-card__header">
        {header}
      </Typography>
      <Typography size="md" variant="regular" className="faq-card__content">
        {content}
      </Typography>
    </Panel>
  );
};

export default FaqCardComponent;
