import { useSelector, useDispatch } from "react-redux"
import { addName, removeName, updateName } from "./store/store";

export default()=>{


  let bhejo = useDispatch();

  // store ko data dene keliye useDispatch() lagega

  // store se data mangwaney keliye useSelector() lgta h 
  let data = useSelector(function(store){
    return store.p1.abc;
  })
 let data1 = useSelector(function(store){
    return store.p2.abc;
  })

  const addkaro = ()=>{

    let name = prompt("enter name");


    bhejo( addName(name) )

  }
  
  return <div>

  <button onClick={addkaro}>Send Data</button>

    <ol>
      {
        data.map((i, meraIndex)=>{
          return <li>
            {i}
            <button onClick={()=>{

              bhejo( removeName(meraIndex) )

            }}>DELETE</button>
             <button onClick={()=>{
            
            let newName =  prompt('enter new name')

             bhejo( updateName({
              meraIndex,
              newName
             }) )

          }}>UPDATE</button>
            </li>
        })
      }
    </ol>

  </div>

}