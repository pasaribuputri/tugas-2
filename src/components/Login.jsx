import KontakTeks from "./KontakTeks";
import Tombol from "./Tombol";

function Login(){
    return(
        <>
        <form action="">
        <label htmlFor="Email">Email</label>
        <KontakTeks/>
        <label htmlFor="Password">Password</label>
        <KontakTeks/>
        <Tombol/>
        </form>
        </>
    )
}

export default Login