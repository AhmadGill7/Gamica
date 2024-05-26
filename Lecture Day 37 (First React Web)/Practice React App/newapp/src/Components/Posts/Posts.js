export default ({ data, setData }) => {
    function removeAd(post, index) {
        let deleteKrdo = window.confirm("Delete Kradain ?")
        if (deleteKrdo) {
            data.splice(index, 1)
            setData([...data])
        }
    }

    return <div id="posts" >
        <table className="table">{
            data.map((post, index) => {
                return <tr>
                    <td >
                        <img className="postImage" style={{ width: "150px", margin: "0.3rem", boxShadow: "0px 0px 8px Red", borderRadius: "30px" }} src={post.src} />
                    </td>
                    <td ><h4 style={{
                        backgroundColor: "rgb(20, 20, 20)", color: "#FFF5EA",
                        boxShadow: "0px 0px 10px Red", borderRadius: "50px",
                        padding: "0.7rem"
                    }}>
                        {post.Title}
                    </h4>
                    </td>
                    <td ><button onClick={removeAd} style={{ boxShadow: "0px 0px 10px Red",borderRadius: "15px" ,padding: "0.6rem" }} className="btn btn-lg btn-primary btn-outline-primary">Delete</button></td>
                </tr>
            })
        }
        </table>
    </div >


}
