import { useState } from "react"


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event) => {
        event.prevent
    }

       <form className="flex flex-clo w-60 m-auto gap-2" onSubmit={submitHandler}>
        <label htmlFor="">Email</label>
        <input type="text" className="border border-black" onChange={event => setEmail(event.target.value)} />
        <label htmlFor="">Senha</label>
        <input type="text" className="border border-black" onChange={event => setPassword(event.target.value)}/>
        <button className="bg-black text-white">Entrar</button>
       </form>

}