import { useRef } from "react"

export default ({ data }) => {
    let BrandNameRef = useRef()
    let srcRef = useRef()

    function postAd(evt) {
        let meraAd = {
            Title: BrandNameRef.current.value,
            src: URL.createObjectURL(srcRef.current.files[0])
        }
        data.push(meraAd);
        console.log(meraAd)
        evt.preventDefault();
        document.getElementById("form").reset()
    }

    return <form id="form" style={{ height: "60svh" }} onSubmit={postAd}>
        <div className=" d-flex justify-content-around flex-column  m-auto" style={{ height: "100%" }}>
            <div>
                <h1 className="mb-3">Wants to Create a New Post ?</h1>
            </div>
            <div className="mb-4">
                <input ref={BrandNameRef} className="form-control form-control-lg" type="text" placeholder="Enter Title" />
            </div>
            <div className="mb-4">
                <input ref={srcRef} className="form-control form-control-lg" id="formFileSm" type="file" />
            </div>
            <div>
                <button className="btn btn-light btn-outline-success btn-lg">Create Post</button>

            </div>

        </div >
    </form>
}
