import React from 'react'
import "./style.css"

export const LoginForm = () => {
    return (
        <div className="login-box">
            <img src="/brasao.png" alt="" />
            <form action="">
                <div className="user-box">
                    <input type="text" required />
                    <label htmlFor="">Nome de Guerra</label>
                </div>
                <div className="user-box">
                    <input type="password" required />
                    <label htmlFor="">Senha</label>
                </div>
                <a href="">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Acessar o Sistema
                </a>
            </form>
        </div>
    )
}