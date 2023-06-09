import {useState,useEffect} from "react";
import io from "socket.io-client";
const socket=io.connect("http://localhost:5000");



function Qu() {
  const [message,setmessage]=useState('');
  function send(event){
    event.preventDefault();
     var e=event.target.value;
    socket.emit("question",e);
  }
    useEffect(()=>{
      socket.on("questionRe",(data) =>
      {
          setmessage(data);
      })
    })

  return (
    <div className="App">
      <header className="App-header">
         <h1>  Questions   </h1>
              <form>
              <input type="text" name="chat"
              placeholder="Questions will be shown here...."
             onChange={send}
             value={message || ''}
             />
          </form>
      </header>
    </div>
  );
}

export default Qu;
