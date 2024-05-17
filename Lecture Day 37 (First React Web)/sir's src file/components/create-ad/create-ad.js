
import { useRef } from 'react';
import './create-ad.css';


export default({products})=>{

    // useRef tab use karte jab comoponent m pare kisi tag ko access krna ho
    let titleRef = useRef();
    let priceRef = useRef();
    let fileRef = useRef();

    const saveAd = (evt)=>{

        let meraAd = {
            title:titleRef.current.value,
            price:priceRef.current.value,
            // createObjectURL ka fnuction aapse file ka object lekar uska string wala pathg return karta jo aap easily src m use kar sakte hen
            src: URL.createObjectURL(fileRef.current.files[0])
        }

        products.push(meraAd);

        console.log(meraAd)

        evt.preventDefault();

        
    }

    return <div id='create-ad'>
        <form onSubmit={saveAd}>
  {/* Email input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input ref={titleRef} placeholder='Ad Title'  type="text" id="form1Example1" className="form-control" />
  
  </div>
  {/* Password input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input ref={priceRef} placeholder='Ad Price' type="number" id="form1Example2" className="form-control" />

  </div>

  <div data-mdb-input-init="" className="form-outline mb-4">
    <input ref={fileRef}  type="file" id="form1Example2" className="form-control" />
    
  </div>


  <button
    data-mdb-ripple-init=""
    type="submit"
    className="btn btn-primary btn-block"
  >
    Create Ad
  </button>
</form>

    </div>

}