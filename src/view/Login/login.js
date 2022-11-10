import React from 'react'

import './style.css'

const Login = () => {
    return (
        <div className="parent clearfix">
            <div className="bg-illustration">
                <img src="../../assets/images/logo.png" alt="logo" />

                <div className="about-us">
                    <div className="header">Ametos Group</div><br />
                    <div className="info">Ametos Group was established in 2009<br />
                        Combining specialists from all spheres of the security spectrum: <br />
                        Intelligence, Security, Defense, Cyber Warfare, Information Technology, and Counter-terrorism.<br />
                        Proven and trusted support for Governments, Corporations,<br />
                        and High-Net Worth Individuals.</div>
                    <br />
                    <div className="ametos">AMETOS PROVIDES ADVANCED ELITE SECURITY AND STRATEGIC SERVICES</div>
                </div>

            </div>

            <div className="login">
                <div className="container">
                    <h1 className="log-header">Login   account</h1>

                    <div className="login-form">
                        <form action="">
                            <input type="email" placeholder="E-mail Address" />
                            <input type="password" placeholder="Password" />

                            <div className="remember-form">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div className="forget-pass">
                                <a href="#">Forgot Password ?</a>
                            </div>

                            <button type="submit">LOG-IN</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login