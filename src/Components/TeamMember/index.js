import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './TeamMember.css';
import SocialIcons from '../Footer/FooterComponents/SocialMedia/index';
import TeamData from '../TeamMember/TeamData'

function TeamMember() {
  return (
    <>
        {TeamData.map((data)=>{
            return(
                <>
                    <Container>
                    <Col>
                                <Card className='TM_card'>
                                    <img className='TM_teamimage' src={data.photo} alt='teamphoto'/>
                                    <div className='TM_Details'>
                                        <span>{data.name}</span>
                                        <span>{data.profession}</span>
                                    </div>
                                </Card>
                            </Col>
                    </Container>
                </>
            );
        })}
    </>  
  );
}

export default TeamMember