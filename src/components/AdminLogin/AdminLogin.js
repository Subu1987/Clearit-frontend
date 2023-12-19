function AdminLogin(){
    return(
        <section className='container'>
            <div className='form'>
                <h1>Admin Login</h1>
                <input type='text' placeholder='Enter Email'></input>
                <input type='password' placeholder='Enter Password'></input>
                <button>Login</button>

            </div>
        </section>
    )
}

export default AdminLogin;