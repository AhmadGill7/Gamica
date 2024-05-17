export function Card({ Comp }) {
  return <div className="card mainCard" style={{ width: "18rem", }}>
    <div id="imageContainer">
      <img id="imageOnCard" src={Comp.src} alt={Comp.Title} />
    </div>
    <div className="card-body">
      <p className="card-text">
        Title :  {Comp.Title}
      </p>
    </div>
  </div>
}

