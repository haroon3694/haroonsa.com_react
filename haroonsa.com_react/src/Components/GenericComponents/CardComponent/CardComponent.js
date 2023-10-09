import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import "./CardComponent.scss"

const CardComponent = (props) => {
  return (
    <Card className="card"
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src={props.image}
        />
        <CardBody>
            <CardTitle className='pt-2' tag="h5">
            {props.title}
            </CardTitle>
            <CardSubtitle
            className="mb-2 pt-3"
            tag="h6"
            >
            {props.subtitle}
            </CardSubtitle>
            <CardText className=''>
              {props.text}
            </CardText>
            {/* <div className="btn btn-outline-primary">
            {props.button}
            </div> */}
        </CardBody>
    </Card>
  )
}

export default CardComponent