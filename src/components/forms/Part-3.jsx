import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Part(props) {
  return (
    <Form className='part-1-main-container'>
      <Form.Group className="drop-down-container">
        <Form.Label htmlFor="domain" className='label'>Domain :</Form.Label>
        <Form.Select name="domain" id="size" required onChange={(e)=>props.setDomain(e.target.value)}>
          <option value="" hidden>Select</option>
          <option value="Health Care">Health Care</option>
          <option value="Education">Education</option>
          <option value="Industry">Industry</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="abstract-container">
        <Form.Label className='abstract-text'> Upload File :</Form.Label>
        <Form.Control className='upload' required type="file" />
      </Form.Group>
    </Form>
  )
}
