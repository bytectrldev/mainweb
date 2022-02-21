import React from 'react'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './BButton.css'

const BButton = (props) => {

  return (
    <div>
        <Container>
            <>
            <Button href={'/test-'+props.link} variant={props.btnstyle} className={props.animation}>View More</Button>
            </>
        </Container>
    </div>
  )
}

export default BButton