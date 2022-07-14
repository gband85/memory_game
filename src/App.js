import './App.css';
import Card from './Card';

const App=()=> {
  const importAll=(r)=>{
    return r.keys();
  }
  const images=importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className='cards'>
    {images.map((img)=>{      
      return <Card src={require('./images/'+ img.replace('./',''))}/>
    })}
</div>
  );
}

export default App;
