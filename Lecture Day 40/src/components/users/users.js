export default({users})=>{

    return <div>
        <table className="table">
        {
            users.map((user)=>{
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                    </tr>
            })
        }
        </table>
    </div>

}