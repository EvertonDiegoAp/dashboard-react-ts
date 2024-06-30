import React from "react";

import { NavLink } from "react-router-dom";

import Styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={Styles.sidebar}>
            <nav className={Styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" className={Styles.active}>
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>
                <h3>Currículo</h3>
                <ul>

                    <li>
                        <NavLink to="/curriculo/informacoes/cadastro" className={Styles.active}>
                            Cadastrar Informações
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" className={Styles.active}>
                            Cadastrar Experiência 
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/curriculo/experiencia/lista" className={Styles.active}>
                            Listagem de Experiência 
                        </NavLink>
                    </li>

                </ul>
                <h3>Portfólio</h3>
                <ul>

                    <li>
                        <NavLink to="/portifolio/cadastro" className={Styles.active}>
                            Cadastrar Portifólio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/portfolio/lista" className={Styles.active}>
                            Listagem de Portfólios
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
