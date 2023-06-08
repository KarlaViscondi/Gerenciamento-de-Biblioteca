import { GiWhiteBook } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href='/'>Catálogo</a>
                <a className="btn btn-ghost normal-case text-xl" href='/reserva'>Reserva</a>
                <a className="btn btn-ghost normal-case text-xl" href='/emprestimo'>Empréstimo</a>
                <a className="btn btn-ghost normal-case text-xl" href='/devolucao'>Devolução</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 livros</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">Ver selecionados</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <span className="text-3xl">K</span>
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className="justify-between">Perfil</a></li>
                        <li><a>Configurações</a></li>
                        <li><a>Encerrar sessão</a></li>
                    </ul>
                </div>
            </div>
        </div>  
    );
};

export default Navbar;