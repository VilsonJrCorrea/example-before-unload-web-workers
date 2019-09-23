import React,{useEffect,useState} from 'react';
import { Button,Form,Row,Col} from 'react-bootstrap';

function App() {
  const [data]=useState({name:'',lastName:''});
  const baseUrlApi ='http://localhost:8080';

  useEffect(()=>{
      window.addEventListener("beforeunload", async(ev) => {
        const plain = `name ${data.name} lastName: ${data.lastName}`; 
        navigator.sendBeacon(baseUrlApi,plain);
      });
  })

  async function handleSubmit(ev){
    ev.preventDefault();
    const plain = `name ${data.name} lastName: ${data.lastName}`; 
    await  fetch(baseUrlApi,  {method: "POST", body: plain});
  }
  
  function handleForm(ev){
    ev.preventDefault();
    const field = ev.target.name;
    data[field]=ev.target.value;
  }

  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" onChange={handleForm} name="name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" onChange={handleForm} name="lastName" />
        </Col>
        <Col>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default App;
