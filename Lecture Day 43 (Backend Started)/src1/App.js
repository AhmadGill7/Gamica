import { useSelector } from "react-redux"

export default()=>{

  // store ko data dene keliye useDispatch() lagega

  // store se data mangwaney keliye useSelector() lgta h 


  let data = useSelector(function(store){
    return store.abc;
  })
  
  return <div>

    <ol>
      {
        data.map((i)=>{
          return <li>{i}</li>
        })
      }
    </ol>

  </div>

}