import React from "react";

import styles from './ListarExperiencia.module.css';

interface Experiência {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: number;
    anoFim: number;
}

const ListarExperiencia: React.FC = () => {

    const [experiencias, setExperiencias] = React.useState<Experiência[]>([
        {
            titulo: 'Estágio em Desenvolvimento de Software',
            descricao: 'Desenvolvimento de aplicações web utilizando React e Node.JS',
            tipo: 'Desenvolvimento Web',
            anoInicio: 2020,
            anoFim: 2022
        }
    ]);

    const handleDelete = (index: number) => {
        //Lógica para excluir
    }

    const handleEdit = (index: number) => {
        //Lógica para editar
    }

  return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descricão</th>
                    <th>Tipo</th>
                    <th>Ano de Início</th>
                    <th>Ano de Fim</th>
                    <th>Ações</th>     
                </tr>       
            </thead>   
            <tbody>
                {experiencias.map((experiencia, index) => (
                    <tr key={index}>
                        <td>{experiencia.titulo}</td>
                        <td>{experiencia.descricao}</td>
                        <td>{experiencia.tipo}</td>
                        <td>{experiencia.anoInicio}</td>
                        <td>{experiencia.anoFim}</td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table>
  );
};

export default ListarExperiencia;