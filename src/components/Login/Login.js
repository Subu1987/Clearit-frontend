import './Login.css'

function Login(){
    return(
        <section className='container'>
            <div className='form'>
                <h1>Login</h1>
                <input type='text' placeholder='Enter Username'></input>
                <input type='password' placeholder='Enter Password'></input>
                <button>Login</button>

            </div>
        </section>
    )
}

export default Login;