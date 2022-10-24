import React from 'react';
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

const About = () => {
  return (
    <div className="section section-about-u">
      <Container>
        <Row>
          <Col md="5">
            <div
              className="image-container image-right"
              style={{
                backgroundImage:
                  'url(' + require('assets/img/senor1.jpg') + ')',
              }}
            ></div>
            <h2 className="title">OUR CORE VALUES</h2>
            <h3>
              <span style={{ color: 'gold', fontStyle: 'bold' }}>A</span>
              SSERTIVENESS
            </h3>
            <h3>
              <span style={{ color: 'gold', fontStyle: 'bold' }}>D</span>
              EDICATION
            </h3>
            <h3>
              <span style={{ color: 'gold', fontStyle: 'bold' }}>N</span>
              EAT
            </h3>
            <h3>
              <span style={{ color: 'gold', fontStyle: 'bold' }}>E</span>
              XCELLENCE
            </h3>
            <h3>
              <span style={{ color: 'gold', fontStyle: 'bold' }}>K</span>
              NOWLEDGE
            </h3>
            <h3>
              We are here to set the new record for the highest level of
              accolades for the premium services accross the region of Africa.
              Our ambition is to turn every social interaction into a genuine
              and friendly experience of sharing
            </h3>
            <p>
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever
              happens with climate change. Even if the Arctic continues to be
              one of the fastest-warming regions of the world, it will always be
              plunged into bitterly cold polar dark every winter. And
              year-by-year, for all kinds of natural reasons, there’s huge
              variety of the state of the ice.
            </p>
            <p>
              As we create and share our Pernod Ricard products we become
              immersed in this extraordinary human experience of convivialité.
              We are respectful and responsible hosts, committed to nurturing
              every terroir and its biodiversity. Our people add a human touch
              to our products with their own personality and passion. Our
              beverages travel the world because, although they are born in
              different lands and cultures, they are made to be shared
            </p>
            <p>
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that process will continue whatever
              happens with climate change. Even if the Arctic continues to be
              one of the fastest-warming regions of the world, it will always be
              plunged into bitterly cold polar dark every winter. And
              year-by-year, for all kinds of natural reasons, there’s huge
              variety of the state of the ice.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
