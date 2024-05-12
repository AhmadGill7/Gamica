import "./Footer.css"
export function Footer(){
    return <footer className="d-flex flex-wrap justify-content-between align-items-center  mx-3 p-3 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
      >
        <svg className="bi" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">
        © 2024 Company, Inc
      </span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-body-secondary" href="https://twitter.com/AhmadGill_007?t=3exLf1t3VBzjq8qn0oy1jA&s=09" target="blank">
          <svg className="bi" width={24} height={24}>
            <use xlinkHref="#twitter" />
          </svg>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="https://www.instagram.com/m_a_gill_/" target="blank">
          <svg className="bi" width={24} height={24}>
            <use xlinkHref="#instagram" />
          </svg>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-body-secondary" href="https://www.facebook.com/Muhammad.Ahmad.012" target="blank">
          <svg className="bi" width={24} height={24}>
            <use xlinkHref="#facebook" />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
  
  
}