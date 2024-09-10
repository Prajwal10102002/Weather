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
            <div className="container my-5">
        <div className="row">
          {/* Left Section: Search Bar and Location Button */}
          <div className="col-md-4">
            <div className="input-section p-4">
              <label htmlFor="city-input" className="form-label">Enter a City Name</label>
              <input id="city-input" type="text" className="form-control mb-3" placeholder="E.g., New York, London, Tokyo" />
              <button className="btn btn-primary w-100 mb-3">Search</button>
              <div className="text-center">or</div>
              <button className="btn btn-secondary w-100 mt-3">Use Current Location</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8">
            <div className="row">
              {/* Current Weather Card */}
              <div className="col-12">
                <div className="card bg-info text-white mb-4">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h4>London (2023-06-19)</h4>
                      <p>Temperature: 18.71°C</p>
                      <p>Wind: 4.31 M/S</p>
                      <p>Humidity: 76%</p>
                    </div>
                    <div className="weather-icon">
                      <img src="weather-icon.png" alt="Moderate rain" />
                      <p>Moderate rain</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Day Forecast Cards */}
              <div className="col-12">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card text-center bg-secondary text-white mb-3">
                      <div className="card-body">
                        <h6>(2023-06-20)</h6>
                        <img src="cloudy.png" alt="Cloudy" className="img-fluid mb-2" />
                        <p>Temp: 17.64°C</p>
                        <p>Wind: 0.73 M/S</p>
                        <p>Humidity: 70%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center bg-secondary text-white mb-3">
                      <div className="card-body">
                        <h6>(2023-06-21)</h6>
                        <img src="sunny.png" alt="Sunny" className="img-fluid mb-2" />
                        <p>Temp: 16.78°C</p>
                        <p>Wind: 2.72 M/S</p>
                        <p>Humidity: 83%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center bg-secondary text-white mb-3">
                      <div className="card-body">
                        <h6>(2023-06-22)</h6>
                        <img src="partly-cloudy.png" alt="Partly cloudy" className="img-fluid mb-2" />
                        <p>Temp: 18.20°C</p>
                        <p>Wind: 1.49 M/S</p>
                        <p>Humidity: 72%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-center bg-secondary text-white mb-3">
                      <div className="card-body">
                        <h6>(2023-06-23)</h6>
                        <img src="rainy.png" alt="Rainy" className="img-fluid mb-2" />
                        <p>Temp: 17.08°C</p>
                        <p>Wind: 0.9 M/S</p>
                        <p>Humidity: 89%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default dashboard