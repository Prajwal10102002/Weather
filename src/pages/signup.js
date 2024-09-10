import React from "react";

const signup = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-3 fw-bold ls-tight text-center">
              Weather <br />
              <span className="text-primary">App</span>
            </h1>
          </div>

          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body py-5 px-md-5">
                <h1 className="mb-3 p-3 display-10 fw-bold ls-tight text-center">
                  SignUp <br />
                </h1>
                <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        placeholder="UserName"
                      />
                    </div>
                  
                  
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Confrom Password"
                    />
                  </div>

                  <div className="form-outline mb-4  ">
                    <select
                      type="select"
                      id="form3Example4"
                      className="form-control dropdown show"
                      placeholder="Role"
                      defaultValue={"User"}
                    >
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>
                  <div >
                <a href="#!">Already User? Login</a>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
