import React from 'react'
import {Card} from 'react-bootstrap'
import './TeamMember.css'

function TeamMember() {
  return (
    <div>
        <Card className='tm_card'>
            <Card.Img variant="top" src="https://source.unsplash.com/random" className='cardimg'/>
            <Card.Body className='cardbody'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default TeamMember