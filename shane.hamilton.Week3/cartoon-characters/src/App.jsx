import './App.css';
import Image from './Components/Image';


function App(){
  return (
    <>
    <main data-bs-theme="dark" className="bg-dark text-white min-vh-100">
    <h1>Blue Eye Samurai Characters </h1>
    <br />
    <div className="row" style={{margin: "20px"}}>
      <div className="col-md-6">
        <Image img_file={"Mizu.jpg"} alt={"The Blue Eyed Samurai Mizu"} width={"300"} height={"300"} />
        <p>Mizu</p>
      </div>
      <div className="col-md-6">
        <Image img_file={"Akemi.jpg"} alt={"Akemi from Blue Eye Samurai"} width={"300"} height={"300"} />
        <p>Akemi</p>
      </div>
    </div>
    <div className="row dark" style={{margin: "20px"}}>
      <div className="col-md-6">
        <Image img_file={"Taigen.jpg"} alt={"Taigen from Blue Eye Samurai"} width={"300"} height={"300"} />
        <p>Taigen</p>
      </div>
      <div className="col-md-6">
        <Image img_file={"Ringo.jpg"} alt={"Ringo from Blue Eye Samurai"} width={"300"} height={"300"} />
        <p>Ringo</p>
      </div>

    </div>
    </main>
    </>
  )
}

export default App;