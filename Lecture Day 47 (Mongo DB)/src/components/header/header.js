import { Link } from "react-router-dom";
import './header.css'
import { useDispatch, useSelector } from "react-redux";
import { logoutHogya } from "../../store/store";
export default function Header(){

  let dispatch = useDispatch();

  let currentUser = useSelector(function(store){
    return store.p2.loggedWalaUser
  })

  // let name  = 'ali'

  // function say(){
  //   alert('code chaling');
  // }


    return <nav class="navbar navbar-expand-lg bg-body-tertiary">
      {/* <h1>{name}</h1> */}
      
      {/* <button onClick={say}>Click me</button> */}

    <div class="container-fluid">
    <Link to='/' class="nav-link active" aria-current="page" href="#">
      <img className="logo" src="no-pic.jpg"  alt="" />
      
      { currentUser.name ? 
            <span> Welcome {currentUser.name}</span> 
                         : null}

      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
         

         {currentUser.name ?  <>
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/create-ad">Create Ad</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ads">My Ads</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/users">Users</Link>
            </li>
            <li class="nav-item">
              <Link onClick={()=>{


          dispatch( logoutHogya() );

                // setCurrentUser({});

              }} class="nav-link" to="/login">Logout</Link>
            </li>
          </> : 
          <>
              <li class="nav-item">            
                <Link to='/login' class="nav-link active" aria-current="page" href="#">Login</Link>
              </li>
              <li class="nav-item">
                <Link to='/signup' class="nav-link active" aria-current="page" href="#">Signup</Link>
              </li>
          </>
  }


        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

}