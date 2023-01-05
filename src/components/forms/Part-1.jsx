import React, {useEffect} from 'react';
import Form from 'react-bootstrap/Form';

import "../../css/Part-1.css";

export default function Part(props) {

  useEffect(()=>{
    props.setTeamSize(0);
    props.setTeamName("");
  },[]);

  return (
    <Form className='part-1-main-container'>
      <Form.Group className="drop-down-container">
          <Form.Label htmlFor="teamname" className='label'>Team Name :</Form.Label>
          <Form.Control name='teamname' size="lg" id="size" className='input-box' type="text" onChange={(e) => {props.setTeamName(e.target.value)}}/>
        </Form.Group>
      <Form.Group className="drop-down-container">
        <Form.Label htmlFor="size" className='label'>Team Size :</Form.Label>
        <Form.Select name="size" size='lg' id="size" onChange={(e) => props.setTeamSize(e.target.value)}>
          <option value="" hidden>Select</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="abstract-container">
        <p className='abstract-text'> Sample Abstract :</p>
        <a href="https://docs.google.com/document/d/1rbljprsyUYE1Y8nNQO5Kh3DFrjILUE3t/edit?usp=sharing&ouid=101729110658745518569&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Abstract</a>
      </Form.Group>
    </Form>
  )
}
