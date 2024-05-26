import { useEffect, useState } from "react";
import { Card } from "../card/card"
import axios from "axios";

export default()=>{
  
  let [products, setProducts] = useState([]);

  
  useEffect(()=>{

    axios.get('/ads-lao').then((resp)=>{
      setProducts(resp.data);
    })

  }, [])




    return   <div  className="flex">

        <div className="inline-flex" style={{flexGrow:1}}>

          <table>
            <tr>
             <td>
                Lahore <input type='checkbox' />
              </td>
            </tr> 
            <tr>
             <td>
                Faisalabad <input type='checkbox' />
              </td>
            </tr> 
            </table>

        </div>


          <div className="inline-flex"  style={{flexGrow:4}}>
              
              {
                products.map((product)=>{
                  return <Card a1={product}></Card>

                })
              }
              
            </div>
    </div>
    
    
    


}