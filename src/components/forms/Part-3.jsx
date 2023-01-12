import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Part(props) {
  return (
    <Form className='part-1-main-container'>
      <Form.Group className="drop-down-container">
        <Form.Label htmlFor="domain" className='label'>Domain :</Form.Label>
        <Form.Select name="domain" id="size" required onChange={(e)=>props.setDomain(e.target.value)}>
          <option value="" hidden>Select</option>
          <option value="Health Care">Healthcare</option>
          <option value="Education">Smart Education</option>
          <option value="Industry">Urbanization</option>
          <option value="Industry">E-Commerce</option>
          <option value="Industry">Fintech</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Agriculture">Environment</option>
          <option value="Miscellaneous">Open Innovation</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="abstract-container">
        <Form.Label className='abstract-text'> Upload File :</Form.Label>
        <Form.Control className='upload' required type="file" onChange={(e)=>props.setAbstract(e.target.files[0])}/>
      </Form.Group>
    </Form>
  )
}
