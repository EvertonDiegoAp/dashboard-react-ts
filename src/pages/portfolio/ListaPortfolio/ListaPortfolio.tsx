import React, { useState } from "react";

import styles from './ListaPortfolio.module.css';

interface Portfolio {
    link: string;
    imagem: string;
    title: string;
};

const ListaPortfolio: React.FC = () => {
    const [Portfolio, setPortfolio] = useState<Portfolio[]>([

        {
            link: 'https://academy.comeialabs.com.br/',
            imagem: 'https://via.placeholder.com/150',
            title: 'Portfólio 1',
        },
        {
            link: 'https://academy.comeialabs.com.br/',
            imagem: 'https://via.placeholder.com/150',
            title: 'Portfólio 2',
        },
        {
            link: 'https://academy.comeialabs.com.br/',
            imagem: 'https://via.placeholder.com/150',
            title: 'Portfólio 3',
        }
        
    ]);
    const handleEdit = (index: number) => {
        // lógica para lidar com a edição do item de índice "index"
    };

    const handleDelete = (index: number) => {
        // lógica para lidar com a aedicão do item de índice "index"   
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {Portfolio.map((itemPortfolio, index) => (
                    <tr key={index}>
                        <td>{itemPortfolio.title}</td>
                        <td><img src={itemPortfolio.imagem} alt={itemPortfolio.imagem} className={styles.image} /></td>         
                        <td><a href={itemPortfolio.link} target="_blank" rel="noreferrer">{itemPortfolio.link}</a></td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleEdit(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default ListaPortfolio;