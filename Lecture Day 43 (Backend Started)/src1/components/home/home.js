import { Card } from "../card/card"

export default({products, setProducts})=>{



    return   <div className="flex">
      <button onClick={()=>{

        let index = +prompt("ente rindex");
        products.splice(index, 1);
        setProducts([...products])

      }}>Some</button>
    {
      products.map((product)=>{
        return <Card a1={product}></Card>

      })
    }
    
  </div>


}