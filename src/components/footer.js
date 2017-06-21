import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { white, orange, boxShadow } from './componentStyles/colors';


const styles = {
  row: {
    textAlign: 'center',
    fontSize: '3rem',
    paddingTop: 20,
  },
  h4: {
    textAlign: 'center',
    fontSize: '2rem',
  },
  a: {
    color: white,
    textDecoration: 'none',
    fontSize: '4rem',
  },
  i: {
    background: orange,
    padding: '4px 10px',
    borderRadius: '50%',
    boxShadow,
  },
};
const { row, h4, a, i } = styles;

export default function Footer() {
  return (
    <div>
      <Appbar>
        <Container fluid>
          <Row style={row}>
            <Col xs="6" md="3">
              <a
                style={a}
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/scottiecrump/"
              >
                <i style={i} className="fa fa-linkedin" />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                style={a}
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/Scrump31/"
              >
                <i style={i} className="fa fa-github" />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                style={a}
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.youtube.com/channel/UCNLKKASf6kkiBu5ewsv7jwQ"
              >
                <i style={i} className="fa fa-youtube" />
              </a>
            </Col>
            <Col xs="6" md="3">
              <a
                style={a}
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/ScottieCrump"
              >
                <i style={i} className="fa fa-twitter" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col md="12"><h4 style={h4}>CodeMeUpScottie.com © 2017.</h4></Col>
          </Row>
        </Container>
      </Appbar>
    </div>
  );
}
