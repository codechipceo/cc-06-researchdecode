import React from 'react';
import { Button } from 'rsuite';
import './consulting.scss';

const ConsultingServices= () => {
  return (
    <div className="consulting-section">
      <div className="overlay">
        <div className="content">
          <h1>IT Consulting services</h1>
          <p>
            Current state of IT does not align with your business strategy? Request our IT consulting services now.
          </p>
          <Button appearance="default" size="lg">
            Talk to Us →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;