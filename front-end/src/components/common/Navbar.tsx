import Link from 'next/link';
import React from 'react';

export default function Navbar(){
    return(
        <div className="navbar bg-[#1d0f3b] text-white flex justify-end">
            <div className="flex-none pr-4">
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
                <div className="dropdown dropdown-end text-black">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus  rounded-full w-10">
                                <span className="text-3xl text-white">L</span>
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
    )
}

