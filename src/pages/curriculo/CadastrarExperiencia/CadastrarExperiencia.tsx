import React from "react";

import { Formik, Form } from "formik";
import * as Yup from 'yup';

import styles from './CadastrarExperiencia.module.css';
import Input from "../../../components/forms/Input/Input";
import Textarea from "../../../components/forms/Textarea";
import Select from "../../../components/forms/Select";

interface FormValues {
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: number;
    anoFim: number;
}

const CadastrarExperiencia: React.FC = () => {
 
    
    const initialValues: FormValues = {
        titulo: '',
        descricao: '',
        tipo: '',
        anoInicio: 0,
        anoFim: 0,
    };

    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('Campo obrigatório'),
        descricao: Yup.string().required('Campo obrigatório'),
        tipo: Yup.string().required('Campo obrigatório'),
        anoInicio: Yup.number().required('Campo obrigatório').typeError('Apenas números'),
        anoFim: Yup.number().required('Campo obrigatório').typeError('Apenas números'),
    });

    const onSubmit = (values: FormValues, { resetForm}: {resetForm: () => void }) => {
        // Lógica de envio para backend
        console.log(values);
        resetForm();
        alert('Informações enviadas com sucesso!');
    };

    return (
        <div className={styles.formWrapper}>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>

                  <h2 className={styles.title}>Cadastrar Experiencia</h2>

                  <Input 
                      label="Título"
                      name="titulo"
                      errors={errors.titulo}
                      touched={touched.titulo}
                  />

                  <Input 
                      label="Ano Início"
                      name="ano Início"
                      errors={errors.anoInicio}
                      touched={touched.anoInicio}
                  />

                  <Input
                      label="Ano Fim"
                      name="ano Fim"
                      errors={errors.anoFim}
                      touched={touched.anoFim}
                  />

                  <Select
                     label="Tipo de experiência"
                     name="tipo"
                     options={[
                         { value: 'profissional', label: 'Profissional' },
                         { value: 'academico', label: 'Acadêmico' },
                     ]}
                     errors={errors.anoFim}
                     touched={touched.anoFim}
                  />

                    <Textarea
                        label="Descricão"
                        name="Descricão"
                        errors={errors.descricao}
                        touched={touched.descricao}
                    />

                    <button type="submit" className={styles.button}>Cadastar</button>
                </Form>
            )}
        </Formik>
    </div>
    );
};

export default CadastrarExperiencia;  