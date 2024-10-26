import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center">
      <Card.Footer className="text-light bg-primary  p-4">&copy; {new Date().getFullYear()} Employee Management. &reg;All Rights Reserved.</Card.Footer>
    </Card>
  );
}

export default Footer;
