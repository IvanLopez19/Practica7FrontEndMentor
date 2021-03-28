import react,{useState} from 'react';
import './Estilos/Style.css';
import Information from './Components/Information';
import Button from './Components/Button'
import image1 from './Assets/image-tanya.jpg';
import image2 from './Assets/image-john.jpg';


function App() {
  const info= [
    {
      id:1,
      info:"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future",
      image: image1,
      name: "Tanya Sinclais",
      profetion: "UX Enginer"
    },
    {
      id:2,
      info:"If you want to lay the best foundation possible I'd recommend taking this course. Thr depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      image: image2,
      name: "John Tarkpor",
      profetion: "Junior Front-End Developer"
    }
  ];
  
  const [active,setActive] = useState('left');

    function ClickRight(){
        setActive('right');
    }
    function ClickLeft(){
      setActive('left');
  }
  return (
    <div className='App'>
    <div className={`container ${active}`}>
      {info.map(card=>(
        <Information key={card.id} image={card.image} name={card.name} info={card.info} profetion={card.profetion}/>
      ))
      }
    </div>
      <Button right={ClickRight} left={ClickLeft}/>
    </div>
  );
}

export default App;
