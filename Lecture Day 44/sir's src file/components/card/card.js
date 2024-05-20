
export function Card({a1, city}){

    return <div className="card" style={{ width: "18rem" }}>

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
  </div>
  

}