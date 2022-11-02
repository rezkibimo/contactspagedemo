import * as React from "react"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "react-bootstrap"
import '../components/index.css'
class IndexPage extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };
  getFetchUsers() {
    this.setState({
      loading: true
    }, () => {
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(result => this.setState({
        loading: false,
        users: result
      })).catch(console.log);
    });
  }
  componentDidMount() {
    this.getFetchUsers();
  }
  render() {
    const {
      users,
      error
    } = this.state;
    return (
      <React.Fragment>
        <Layout>
          {
            error ? <p>
              {
                error.message
              } </p> : null}  {
            users.map(user => {
              const {
                id,
                name,
                username,
                email,
                address,
                phone,
                website,
                company

              } = user;
              return (
                <Container>
                  <Row>
                    <Col key={id}>
                      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 shadow-sm" >
                        <div className="my-3 py-3">
                          <h2 className="SerifFont"><b>{company.name}</b></h2>
                          <h3 className="SerifFont"><b>{name}</b></h3>
                          <div class="divider my-1 py-1"></div>
                          <p className="lead">Email: {email}</p>
                          <p className="lead">Address: {address.suite} , {address.street} , {address.city} {address.zipcode}</p>
                          <p className="lead">Phone: {phone}</p>
                          <p className="lead">Website: {website}</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              );
            })
          }
        </Layout>
      </React.Fragment>);
  }
}


export default IndexPage