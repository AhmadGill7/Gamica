import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


// react-hook-form
// validation

export default function Signup({users}){
 
    let myParams = useParams();

    // myParams.myID

    let [error, setError] = useState();
  let {register, handleSubmit, formState:{errors}, reset}  = useForm();

    useEffect(()=>{

        if(myParams.myID){

           axios.get('/get-user-id-se?abc='+myParams.myID).then((resp)=>{
            console.log(resp.data);
            reset(resp.data);
           })

        }

    }, [])

  let data = [
     {
        province:'Punjab',
        cities:['lahore', 'faisalabad', 'toba']
     },
     {
        province:'kpk',
        cities:['peshawar', 'kohat', 'AbbotAbad']
     },
     {
        province:'Balochistan',
        cities:['Quetta', 'Zhob', 'Zyarat']
     }
  ]

// react-hook-form
// formid

    const saveData = (person)=>{


        // formData tab use krenge jab file upload karenge
        let fData = new FormData();
        fData.append('_id', person._id);
        fData.append('name', person.name);
        fData.append('password',  person.password);
        fData.append('city', person.city);

        // multiple files keliye
        // for(let file of person.meriFile){
        //     fData.append('meriFile', file);
        // }

        // single file keliye
        fData.append('meriFile', person.meriFile[0]);


        // simple {} tab use karenge jab file nahi send karni
        // let fData = {name:'ali', city:'fsd'}

        console.log(person);
        
        // if(myParams.myID){
        //     axios.post('/update', fData);

        // }else{
            axios.post('/signup', fData);

        // }

    }

    return <div>
        <form onSubmit={handleSubmit(saveData)}>
            <div>
                <input {...register('name', {required:true})}  type="text" />
                {errors.name ? <div className="error">This field is required</div> : null}
            </div>
            <div>
                <input {...register('password', {required:true})} type="text" />
                {errors.password ? <div className="error">This field is required</div> : null}
            </div>
            <div>
                <input multiple {...register('meriFile', {required:true})} type="file" />
                {errors.file ? <div className="error">This field is required</div> : null}
            </div>
            <div>
                
                <select  {...register('city', {required:true, validate:(value)=>{

                    let provinceNikalo = data.find((province)=>{
                        if(province.cities.includes(value)){
                            return true;
                        }
                    })

                    if(provinceNikalo && provinceNikalo.province == 'Punjab'){
                        setError('Seat not avalable')
                        return false;
                    }else if(value == 'Select City'){
                        setError('Please select a city');
                        return false;

                    }{
                        return true;
                    }

                }})}>
                    <option>Select City</option>
                    {
                        data.map((province)=>{
                            return province.cities.map((city)=>{
                                return <option>{city}</option>
                            })

                        })
                    }
                    {/* <option>Faisalabad</option>
                    <option>Toba</option>
                    <option>Gojra</option>
                    <option>Jhumra</option> */}
                </select>
                {errors.city && errors.city.type == 'required' ? <div className="error">This field is required</div> : null}
                {errors.city && errors.city.type == 'validate' ? <div className="error">{error}</div> : null}
            </div>

      <button>Save Data</button>
        </form>
    </div>
  }