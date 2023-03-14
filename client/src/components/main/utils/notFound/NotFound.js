import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <div className="not_container">
                <h1>
                    404
                </h1>
                <p>
                    Not Found
                </p>
                <Link to="/">
                    Go to back
                </Link>
            </div>
        </div>
    )
}

export default NotFound
