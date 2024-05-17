import axios from "axios"

export default()=>{


  const touchRoute =()=>{

    axios.get('/abc').then(function(resp){
      console.log(resp.data);
    })

  }

return <div>


  <button onClick={touchRoute}>Send Request</button>

</div>

}