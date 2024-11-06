
export default function AdminPage() {
        
    let token = localStorage.getItem("token");

    if(!token) {
        location.href = '/login'
        return;
    }

    const logout = ( ) => {
        localStorage.removeItem("token");
    }

    return(
        <div>
            <h1>Cadastro de Produto</h1>
            <button>SAIR</button>
        </div>
    )

}