import React from 'react'

function projects() {
  const projects =[
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
      }
  ];

  return (
    <section className='project' id='project'>
      <Row>
        <Col>
          <h2>projects</h2>
          <p> Lorem Ipsum</p>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey='first'>Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                Tab 3
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </section>
  )
}

export default projects