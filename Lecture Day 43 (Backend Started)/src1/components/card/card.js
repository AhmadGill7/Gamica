import { useEffect } from "react"
import { Link } from "react-router-dom"

export function Card({a1, city}){

  useEffect(()=>{

    // jab component browser se delete hoga
    return function(){
      alert('g yeh delete hogya ' + a1.title)
    }

  }, [])

    return <div className="card" style={{ width: "18rem" }}>
      /products/0
      <Link to={"/products/"+a1.id}>
    <img src={a1.src} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{a1.title}</h5>
      <p className="card-text">
        Price : {a1.price}
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
    </Link>
  </div>
  

}