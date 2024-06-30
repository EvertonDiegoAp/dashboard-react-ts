import React from "react";

import { Formik, Form  } from "formik";
import * as Yup from 'yup';

import styles from './CadastrarPortfolio.module.css';
import Input from "../../../components/forms/Input";

interface FormValues {
    link: string;
    imagem: string;
    title: string;
}

const initialValues: FormValues = {
    link: '',
    imagem: '',
    title: '',
};

const validationSchema = Yup.object().shape({
    link: Yup.string().required('Campo obrigatório'),
    imagem: Yup.string().required('Campo obrigatório'),
    title: Yup.string().required('Campo obrigatório'),
});

const CadastrarPortfolio = () => {

    const onSubmit = (values: FormValues, {resetForm}: {resetForm: () => void }) => {
        //lógica de envio para backend
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
                  <h2 className={styles.title}>Cadastro de Portfolio</h2>

                  <Input
                    label="Link"
                    name="link"
                    errors={errors.link}
                    touched={touched.link}
                  />

                  <Input
                    label="Imagem"
                    name="imagem"
                    errors={errors.imagem}
                    touched={touched.imagem}
                  />

                  <Input
                    label="Title"
                    name="title"
                    errors={errors.title}
                    touched={touched.title}
                  />

                  <button type="submit" className={styles.button}>Cadastrar</button>

             </Form>
            )}
        </Formik>
        </div>
    );
};

export default CadastrarPortfolio;