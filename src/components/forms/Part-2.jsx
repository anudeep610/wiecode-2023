import React, { useContext, useEffect } from 'react'
import userContext from "../../utils/context";
import Form from 'react-bootstrap/Form';

export default function Part(props) {

  const user = useContext(userContext);
  useEffect(()=>{
    props.setTeamDetails([])
  },[])
  return (
    <div className='part-1-main-container grid'>
      <Form className="input-container-box">
        <h1 className='input-container-heading'> Team Leader </h1>
        <Form.Group className="input-container">
          <Form.Label htmlFor="name" className='label'>Name :</Form.Label>
          <Form.Control name='name' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadName":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="mob" className='label'>Mobile :</Form.Label>
          <Form.Control name='mob'size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadMobile":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}} />
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="gen" className='label'>Gender :</Form.Label>
          <Form.Control name='gen' size="lg" value={"Female"} disabled={true} className='input-box' type="text" />
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="email" className='label'>Email :</Form.Label>
          <Form.Control name='email' size="lg" className='input-box' type="email" onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadEmail":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="college" className='label'>College :</Form.Label>
          <Form.Control name='college' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([{...props.teamDetails[0], "leadClg":e.target.value},props.teamDetails[1], props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
      </Form>

      <Form className="input-container-box">
        <h1 className='input-container-heading'> Team Member 1 </h1>
        <Form.Group className="input-container">
          <Form.Label htmlFor="name" className='label'>Name :</Form.Label>
          <Form.Control name='name' className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Name":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="mob" className='label'>Mobile :</Form.Label>
          <Form.Control name='mob' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Mobile":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="gen" className='label'>Gender :</Form.Label>
          <Form.Control name='gen' size="lg" defaultValue={(user.teamSize==="2" || user.teamSize==="4")?"Female":""} disabled={(user.teamSize==="2" || user.teamSize==="4")?true:false} className='input-box' type="text" />
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="email" className='label'>Email :</Form.Label>
          <Form.Control name='email' size="lg" className='input-box' type="email" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Email":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="college" className='label'>College :</Form.Label>
          <Form.Control name='college' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], {...props.teamDetails[1], "m1Clg":e.target.value},props.teamDetails[2], props.teamDetails[3]])}}/>
        </Form.Group>
      </Form>

      {
        user.teamSize > 2 && <Form className="input-container-box">
        <h1 className='input-container-heading'> Team Member 2 </h1>
        <Form.Group className="input-container">
          <Form.Label htmlFor="name" className='label'>Name :</Form.Label>
          <Form.Control name='name' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], {...props.teamDetails[2], "m2Name":e.target.value}, props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="mob" className='label'>Mobile :</Form.Label>
          <Form.Control name='mob' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], {...props.teamDetails[2], "m2Mobile":e.target.value}, props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="gen" className='label'>Gender :</Form.Label>
          <Form.Control name='gen' size="lg" className='input-box' type="text" />
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="email" className='label'>Email :</Form.Label>
          <Form.Control name='email' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1],  {...props.teamDetails[2], "m2Email":e.target.value}, props.teamDetails[3]])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="college" className='label'>College :</Form.Label>
          <Form.Control name='college' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1],{...props.teamDetails[2], "m2Clg":e.target.value}, props.teamDetails[3]])}}/>
        </Form.Group>
      </Form>
      }

      {
        user.teamSize>3 &&  <Form className="input-container-box">
        <h1 className='input-container-heading'> Team Member 3 </h1>
        <Form.Group className="input-container">
          <Form.Label htmlFor="name" className='label'>Name :</Form.Label>
          <Form.Control name='name' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Name":e.target.value}])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="mob" className='label'>Mobile :</Form.Label>
          <Form.Control name='mob' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Mobile":e.target.value}])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="gen" className='label'>Gender :</Form.Label>
          <Form.Control name='gen' size="lg" className='input-box' type="text" />
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="email" className='label'>Email :</Form.Label>
          <Form.Control name='email' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Email":e.target.value}])}}/>
        </Form.Group>
        <Form.Group className="input-container">
          <Form.Label htmlFor="college" className='label'>College :</Form.Label>
          <Form.Control name='college' size="lg" className='input-box' type="text" onChange={(e) => {props.setTeamDetails([props.teamDetails[0], props.teamDetails[1], props.teamDetails[2], {...props.teamDetails[3], "m3Clg":e.target.value}])}}/>
        </Form.Group>
      </Form>
      }
    </div>
  )
}
