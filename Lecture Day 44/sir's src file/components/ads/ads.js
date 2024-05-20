export default({products, setProducts})=>{

    return <div id="ad">
        <table className="table">
            {
                products.map((ad, meraIndex)=>{
                    return <tr>
                        <td>
                            <img style={ {width:'100px'} } src={ad.src} />
                        </td>
                        <td>{ad.title}</td>
                        <td>{ad.price}</td>
                        <td>
                            <button onClick={()=>{

                                let deleteKardo = window.confirm("Delete this ad?");
                                if(deleteKardo){
                                    products.splice(meraIndex, 1)   
                                    setProducts([...products]);
                                }
                                
                            }}>Delete</button>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>
}