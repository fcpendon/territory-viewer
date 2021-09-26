import React from 'react';
import ReactDOM from 'react-dom';

function LoginForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                            <form>
                                <div>
                                    <label>Username: </label>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label>Password: </label>
                                    <input type="password"></input>
                                </div>
                                <div>
                                    <button type="submit"></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;

if (document.getElementById('login-form')) {
    ReactDOM.render(<LoginForm />, document.getElementById('login-form'));
}
