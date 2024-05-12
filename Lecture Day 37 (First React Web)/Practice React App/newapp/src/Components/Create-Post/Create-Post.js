import { useRef } from "react"
import { data } from "../Data/Data"

export default ({ data, setData }) => {
    let BrandNameRef = useRef()
    let srcRef = useRef()

    function postAd(evt) {
        let meraAd = {
            Company: BrandNameRef.current.value,
            src: URL.createObjectURL(srcRef.current.files[0])
        }
        data.push(meraAd);
        console.log(meraAd)
        evt.preventDefault();
        document.getElementById("form").reset()
    }

    return <form id="form" style={{ height: "60svh" }} onSubmit={postAd}>
        <div className="w-50 d-flex justify-content-around flex-column  m-auto" style={{ height: "100%" }}>
            <div>
            <h1 className="mb-3">Create a New Post</h1> 
            </div>
            <div className="mb-4">
                <input
                    ref={BrandNameRef}
                    className="form-control form-control-lg"
                    type="text"
                    id="formFileMultiple"
                    multiple=""
                    placeholder="Enter Car Title"
                />
            </div>
            <div className="mb-4">
                <input
                    ref={srcRef}
                    className="form-control form-control-lg"
                    id="formFileSm"
                    type="file"
                />
            </div>
            <div>
            <button className="btn btn-light btn-outline-success btn-lg">Post Add</button>

            </div>

        </div >
    </form>
}
