import './App.css'
import  Todo from './Todo'
import Actor from './Actor';


function App() {

  const actor = ['Jun Ji Hyun', 'Park Shin Hye','Song Hye Kyo ', 'Shin Min Ah','Bae Suzy']
  return (
    <>
      <h2>Hello, This is  my first React Code!!!!! </h2>
      <Parsions />
      <Devices name ="Laptop" price ="55600" Brand = "Hp " />
      <Devices name = " Phone" price= "22000"  Brand = " Samgsung "/>
      <Student Class = "10th"  Score ="33"/>
      <Student Class = "11th" Score ="45" />
      <Developer />
      <Todo task = " laren React" />
      <Todo task = " laren Java script"  />
      <Todo task = " laren Java "  />
      <Actor name= "전지현"></Actor>
      {
        actor.map(actor =><Actor name={actor}></Actor>)
      }
    </>
  )
}










function Devices(props) {
  console.log(props);
  return(
    <div>
      <h2>Devices : {props.name}  price : {props.price} Brand : {props.Brand}</h2>
    </div>
  )
}


function Developer() {

  const developerStyle = {
    margin : '10px',
    padding : '10px',
    border : '2px solid black',
    borderRadius : '10px',
  }
  return(
    <div style={developerStyle}>
      <h5>I am a Web Developer </h5>
      <p>I love coding </p>
    </div>
  )
}
 const {Class , Score } = {Class : "10th" , Score :"33"};
function Student({ Class = 1 ,Score = 0}) {
  console.log(Class , Score);
  return(
    <div className='student-container'>
      <h2>class : {Class} </h2>
      <p> Score : {Score}</p>
    </div>
  )
}


function Parsions() {
  const ages = 20;
  const money = 100;
  return <h4>Welcome, {ages + money}</h4>
}
export default App
