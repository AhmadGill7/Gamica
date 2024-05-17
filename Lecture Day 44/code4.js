import axios from "axios";
import { useRef, useState } from "react"
import { useForm } from "react-hook-form";


// react-hook-form
// validation

export default function Signup({users}){
 
    let [error, setError] = useState();
  let {register, handleSubmit, formState:{errors}}  = useForm();

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

        console.log(person);
        axios.post('/signup', person);

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