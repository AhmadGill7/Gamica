import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

// hooks
// props
// parent/children
// life-cycle

export default({products})=>{

    let meraData = useParams();
    let [p, setP] = useState({});

    // setP();

    // jab component tyar hojata
    // jab iski state update hoti h 
    // jab yeh delete hota h 
    useEffect(()=>{
        
      let productMilgya =  products.find((p)=>{
            if(p.id == meraData.abc){
                return true;
            }
        });

        setP(productMilgya);

    }, [])

    return <div>

    <div className="row">
                <div className="md-col-6">
        <img src={p.src} /> 
        </div>

    </div>

        <h1>{meraData.abc}</h1>

        yeh details page h
    </div>

}