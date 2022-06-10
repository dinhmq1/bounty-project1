import { Link } from 'react-router-dom'
import React from 'react'
import { withRouter } from 'react-router'

const Header = () =>
  <header>
    <div className="row">
      <div className="col-xs">
        <Link to="/" >
          Pokemon Center
        </Link>
      </div>
    </div>
  </header>

export default withRouter(Header)
