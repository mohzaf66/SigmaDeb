import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import {Github,BoxArrowUpRight} from 'react-bootstrap-icons'
import {Tooltip} from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'


const Projects = () => {
  return (
    <div className="projects">
      <section className="skills">
        <Row className="flex justify-content-center">
        <Col className="col-sm-9">
          <Card className="project">
          <img
                variant="top"
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
              />
              <div className="project-content">
             <p>This is the content of developer's skill and there is many more to come</p>
             <div className="link">
             <Link to="https://google.com" target="_blank" rel="noreferrer"><Github className="project-content-link" color="white"/></Link>
             <Link ><BoxArrowUpRight className="project-content-link" color="white"/></Link>
             </div>
              </div>
            </Card>

            </Col>
          <Col className="col-sm-9">
            <Card className="project">
              <img
                variant="top"
                src="https://buffml.com/wp-content/uploads/2022/12/django_python-1024x576.png"
              />
              <div className="project-content">
             <p>This is the content of developer's skill</p>
             <div className="link">
             <Link to="https://google.com" target="_blank" rel="noreferrer"><Github className="project-content-link" color="white"/></Link>
             <Link ><BoxArrowUpRight className="project-content-link" color="white"/></Link>
             
             </div>
              </div>
            </Card>
          </Col>


                  </Row>
      </section>
    </div>
  );
};

export default Projects;
