import "./header.css"
import { Link } from "react-router-dom"
export function Header() {
  return <nav class="navbar nav navbar-expand-lg bg-body-tertiary px-3">
    <div class="container-fluid">
      <Link to="/home" class="navbar-brand" href="#">COOL CARS</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/profile" class="nav-link active" aria-current="page" href="#">Profile</Link>
          </li>
          <li class="nav-item">
            <Link to="/create-post" class="nav-link active" aria-current="page" href="#">Create Post</Link>
          </li>
          <li class="nav-item">
            <Link to="/posts" class="nav-link active" aria-current="page" href="#">Posts</Link>
          </li>


        </ul>
        <div class="d-flex" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/login" class="nav-link" href="#">Login</Link>
            </li>
            <li class="nav-item">
              <Link to="/signup" class="nav-link" href="#">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
}