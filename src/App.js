import logo from './logo.svg';
import am_red_squirrel from './Tamiasciurus_hudsonicus_CT.jpg';
import black_squirrel from './Black_squirrel_in_Santa_Clara_CA.jpg'
import eastern_gray_squirrel from './EasternGraySquirrel_GAm.jpg'
import './App.css';
import Card from './Card';

const App=()=> {
  return (
    <div>
<Card src={am_red_squirrel}/>
<Card src={black_squirrel}/>
<Card/>
</div>
  );
}

export default App;
