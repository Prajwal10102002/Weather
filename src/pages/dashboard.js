import React from 'react'


const dashboard = () => {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                        <span className="fs-4">Weather App</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link">Users List</a></li>
                        <li className="nav-item"><a href="#" className="nav-link active">Sign Out</a></li>
                    </ul>
                </header>
            </div>
            
        </>
    )
}

export default dashboard