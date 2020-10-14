import React from 'react';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const SummaryStat = (props) => {
  const { title, input } = props;

  return (

    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{input}</Card.Title>
        <Card.Text>
                    Text to be rendered based on card type
          <Badge pill variant="secondary">
                        Button Placeholder
          </Badge>{' '}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SummaryStat;