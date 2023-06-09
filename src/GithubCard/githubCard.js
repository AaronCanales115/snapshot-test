import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src='https://avatars.githubusercontent.com/u/52388985?v=4' />
        <Card.Body>
            <Card.Title>Aaron Canales</Card.Title>
            <Card.Text>
            I am a software developer!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard