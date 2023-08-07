import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <div className="skills">
      <section className="">
        <Row md={2} sm={1} lg={3}>
          <Col className="mb-3">
          <Card className="skill">
          <img
                variant="top"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
              />
              <div className="skill-content">
             <p>This is the content of developer's skill and there is many more to come</p>
             <button>Save</button>
              </div>
            </Card>

            </Col>
          <Col className="mb-3">
            <Card className="skill">
              <img
                variant="top"
                src="https://buffml.com/wp-content/uploads/2022/12/django_python-1024x576.png"
              />
              <div className="skill-content">
             <p>This is the content of developer's skill</p>
              </div>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="skill">
              <img
                variant="top"
                src="https://litslink.com/wp-content/uploads/2020/12/node.js-logo-image.png"
              />
              <div className="skill-content">
             <p>This is the content of developer's skill</p>
              </div>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="skill">
              <img
                variant="top"
                src="https://g.foolcdn.com/editorial/images/738413/ai-concept.jpg"
              />
               <div className="skill-content">
             <p>This is the content of developer's skill</p>
              </div>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="skill">
              <img
                variant="top"
                src="https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"
              />
              <div className="skill-content">
             <p>This is the content of developer's skill</p>
              </div>
            </Card>
          </Col>

          <Col className="mb-3">
            <Card className="skill">
              <img
                variant="top"
                src="https://g.foolcdn.com/editorial/images/738413/ai-concept.jpg"
              />
               <div className="skill-content">
             <p>This is the content of developer's skill</p>
              </div>
            </Card>
          </Col>
        </Row>
      </section>
 
    </div>
  );
};

export default Skills;
