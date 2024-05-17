import { Card } from "../card/card"

export default({products})=>{

    return   <div className="flex">
    {
      products.map((product)=>{
        return <Card a1={product}></Card>

      })
    }
    
  </div>


}