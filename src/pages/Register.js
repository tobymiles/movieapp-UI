import "../assets/css/Register.css";

function Register() {
  return (
    <div>
      <h2>REGISTER</h2>
      <form>
        <div className='movieEmail'>
          <label>Email</label>
          <input type='text' />
        </div>
        <div className='passwordSection'>
          <label>Password</label>
          <input type='password' />
        </div>
        <div className='passwordConfirm'>
          <label>Confirm Password</label>
          <input type='password' />
        </div>

        <button id='btnRegister'>Register</button>
      </form>
    </div>
  );
}

export default Register;
