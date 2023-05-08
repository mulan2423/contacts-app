import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const App = ()  => {
  const [test, setTest] = useState([])

  const formSubmit= (e) => {
    e.preventDefault() 
    setTest([...test, [name, ' ',email, ' ', state]])
  }

  const [name, setname] = useState('Addy')
  const [email, setemail] = useState ('123@gmail.com')
  const [phoneNumber, setphoneNumber] = useState('123-456-7890')
  const [address, setaddress] = useState('56 blv avenue')
  const [state, setState] = useState('GA')
  const [city, setcity] = useState('Atlanta')
  const [zipcode, setzipcode] = useState('23456')

  return (
    <div className="container">
      <h1>Contact List</h1>
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email}onChange={e=> setemail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value ={name}onChange={e=>setname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter phoneNumber" value ={phoneNumber}onChange={e=>setphoneNumber(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" value ={address}onChange={e=>setaddress(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" value ={city}onChange={e=>setcity(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>zip code</Form.Label>
          <Form.Control type="text" placeholder="Enter set" value ={zipcode}onChange={e=>setzipcode(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>state</Form.Label>
          <Form.Control type="text" placeholder="Enter state" value ={state}onChange={e=>setState(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {test.map((item,index)=>{
        return <div key={index}>{item}</div>
      })}
    </div>
  );
}

export default App;