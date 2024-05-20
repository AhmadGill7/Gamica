import { Link } from "react-router-dom";
export function Header({ currentUser, setCurrentUser }) {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand darkTheme' href='#'>
          Cool Cars
        </Link>
        <button
          // onClick={showLinks}
          id='NavbarToggler'
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse  navbar-collapse' id='navbarSupportedContent'>
          {currentUser.UserName || currentUser.Email ? (
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

              <li className='nav-item'>
                <Link to='/profile' className='nav-link' href='#'>
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/showusers' className='nav-link' href='#'>
                  Show Users
                </Link>
              </li>

              <li className='nav-item '>
                <Link
                  to='/posts'
                  className='nav-link'
                  href='#'
                  role='button'
                  aria-expanded='false'>
                  Posts
                </Link>
              </li>
            </ul>
          ) : null}
          <ul className='navbar-nav float-end me-auto mb-2 mb-lg-0'>
            {currentUser.UserName || currentUser.Email ? (
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li class="nav-item darkTheme">
                  <Link to="/login" onClick={() => {
                    setCurrentUser({})
                  }} class="nav-link  darkTheme active" aria-current="page" href="#">Logout</Link>
                </li>
              </ul>
            ) : (
              <ul className='navbar-nav  me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link to='/login' className='nav-link' aria-disabled='true'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-link' aria-disabled='true'>
                    signup
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  //  <nav class="navbar nav navbar-expand-sm bg-body-tertiary px-3 ">
  //   <div class="container-fluid ">
  //     <div class=" d-flex  navbar-collapse" id="navbarSupportedContent">
  //       <Link to="/" class="navbar-brand " href="#">
  //         <img src='Dark Logo.png' alt='Logo' style={{ mixBlendMode: "lighten" }} width={40} height={30}></img> <span className="navbar-text darkTheme App-logo">COOL CARS</span>
  //       </Link>
  //       <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0">
  //         {currentUser.Email || currentUser.UserName ? <>
  //           <li class="nav-item">
  //             <Link to="/home" class="nav-link active" href="#">Home</Link>
  //           </li>
  //           <li class="nav-item">
  //             <Link to="/profile" class="nav-link active" href="#">Profile</Link>
  //           </li>
  //           <li class="nav-item">
  //             <Link to="/posts" class="nav-link darkTheme active"  href="#">Posts</Link>
  //           </li>

  //         </> : null}
  //       </ul>

  //       <div className="d-flex">
  //         <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0 float-end ">
  //           {!currentUser.Email || !currentUser.UserName ? <>

  //             <li class="nav-item ">
  //               <Link to="/login" class="nav-link  active " href="#">Login</Link>
  //             </li>
  //             <li class="nav-item darkTheme">
  //               <Link to="/signup" class="nav-link active " href="#">SignUp</Link>
  //             </li>
  //           </>
  //             :
  // <li class="nav-item darkTheme">
  //   <Link to="/login" onClick={() => {
  //     setCurrentUser({})
  //   }} class="nav-link darkTheme active" aria-current="page" href="#">Logout</Link>
  // </li>
  //           }
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
}
