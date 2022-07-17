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
      const common_name=img.slice(2,img.search(/-/g)).replace(/_/g," ")
      const sci_name=img.slice(img.search(/-/g)+1,img.length-4).replace(/_/g," ")
      return <Card common_name={common_name} sci_name={sci_name} src={require('./images/'+img.replace('./',''))}/>
    })}
</div>
  );
}

export default App;
