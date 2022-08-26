import axios from "axios"; 
import {Button, Card, Col, Container, Form, Row,} from "react-bootstrap";
import './App.css';
import {useState} from 'react';
import './custom.css';

function App() {
const [search,setSearch]=useState("mumbai");
const [data,setData]=useState("");
const [error,setError]=useState("");


const submithandler=(e)=>{
  setError("");
  e.preventDefault();
  //https://api.openweathermap.org
  //api.openweathermap.org/data/2.5/forecast?q={city name}&appid=847f204de03af6165e62671349c4da35
   axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=3&appid=847f204de03af6165e62671349c4da35&units=metric`)
   .then((res)=>
   setData(res.data))
.catch((error)=>
  setError(error.response.data.message)
);

};



  return (
    <div className="App">
     <Container>
      
       
    <Form onSubmit={submithandler}>
    <Row>
    <Col>
      <Form.Group  controlId="formBasicEmail" className="mb-3 col-sm-10 ">

       

        <div className="searchbar" >
        <Form.Control type="text" value={search} placeholder="City name" style={{borderRadius: '3.375rem' ,width: '90%'}}
        onChange={(e)=> setSearch(e.target.value)}
       
         />
       </div>
      </Form.Group>
      </Col>
</Row>
      
      <div className="mybtn">
      <Button variant="primary" type="submit" style={{borderRadius: '0.77rem'}}
      >
        Search
      </Button>
      </div>
    </Form>
    </Container>
    
    {error && <div>{error}</div>}
    {data &&
  
 <Container className="tablecont">
    <table class="table table-hover">
  <thead>
      <tr class="table-info">
      <td scope="row">Timestamp {data.list[0].dt_txt.split(" ")[0]}</td>
      <td>{data.list[0].dt_txt.split(" ")[1]}</td>
      <td>{data.list[1].dt_txt.split(" ")[1]}</td>
      <td>{data.list[2].dt_txt.split(" ")[1]}</td>
    </tr>

    </thead>
    <thead>
    <tr class="table-info">
      <td scope="row"><strong >feels_like </strong> </td>
      <td>{data.list[0].main.feels_like} &#8451;</td>
      <td>{data.list[1].main.feels_like} &#8451;</td>
      <td>{data.list[2].main.feels_like} &#8451;</td>
    </tr>
    </thead>
    <thead>
    <tr class="table-info">
      <td scope="row"><strong >humidity </strong> </td>
      <td>{data.list[0].main.humidity}%</td>
      <td>{data.list[1].main.humidity}%</td>
      <td>{data.list[2].main.humidity}%</td>
    </tr>
    </thead>
    
    <thead>
    <tr class="table-info">
      <td scope="row"> <strong >sea_level </strong> </td>
      <td>{data.list[0].main.sea_level}</td>
      <td>{data.list[1].main.sea_level}</td>
      <td>{data.list[2].main.sea_level}</td>
    </tr>
    </thead>
    <thead>
    <tr class="table-info">
      <td scope="row"> <strong >description </strong> </td>
      <td>{data.list[0].weather[0].description}</td>
      <td>{data.list[1].weather[0].description}</td>
      <td>{data.list[2].weather[0].description}</td>
    </tr>
    </thead>
    </table>
   
  </Container>
    }
    
    </div>

  );
}

export default App;
