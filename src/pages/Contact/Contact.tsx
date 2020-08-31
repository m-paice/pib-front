import React, { useCallback } from "react";

import InputMask from "react-input-mask";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

interface Props {}

interface FormValues {
    name: string;
    email: string;
    telephone: string;
    cellPhone: string;
    message: string;
}

// validations form
const SignupSchema = Yup.object().shape({
    name: Yup.string().required("obrigatório"),
    telephone: Yup.string().matches(/^\(\d{2}\)\ \d{4}-\d{4}$/, "telefone inválido"),
    cellPhone: Yup.string().matches(/^\(\d{2}\)\ \d{5}-\d{4}$/, "celular inválido"),
});

// initial values form
const initialValues: FormValues = {
    name: "Matheus Paice",
    email: "matheus.paice@gmail.com",
    telephone: "",
    cellPhone: "",
    message: "",
};

const Contact: React.FC<Props> = (props) => {
    const history = useHistory();

    const handleSubmit = useCallback((values: FormValues) => {
        // TODO: call action

        console.log(values);
    }, []);

    return (
        <div className="container contact">
            <div className="text-header mb-5">
                <h3>Temos um canal de dúvida completo para te ajudar</h3>
                <button onClick={() => history.push("/help")} className="btpadrao botaoCadastrar" value="">
                    Quero ver as dúvidas frquentes
                </button>
                <h4>Mas se preferir deixe sua mensagem</h4>
            </div>
            <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
                {(formikBag) => (
                    <Form>
                        <div className="col-md-6">
                            <Field name="name">
                                {(props: FieldProps) => (
                                    <div>
                                        <label htmlFor="">Nome:</label>
                                        <input type="text" {...props.field} />
                                    </div>
                                )}
                            </Field>

                            <Field name="email">
                                {(props: FieldProps) => (
                                    <div>
                                        <label htmlFor="">E-mail:</label>
                                        <input type="email" {...props.field} />
                                    </div>
                                )}
                            </Field>

                            <div className="row">
                                <Field name="telephone">
                                    {(props: FieldProps) => (
                                        <div className="col-md-6">
                                            <InputMask mask="(99) 9999-9999" {...props.field}>
                                                {() => (
                                                    <div>
                                                        <label htmlFor="">Tel fixo:</label>
                                                        <input type="text" className="telefone" {...props.field} />
                                                    </div>
                                                )}
                                            </InputMask>

                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>

                                <Field name="cellPhone">
                                    {(props: FieldProps) => (
                                        <div className="col-md-6">
                                            <InputMask mask="(99) 99999-9999" {...props.field}>
                                                {() => (
                                                    <div>
                                                        <label htmlFor="">Celular:</label>
                                                        <input type="text" className="telefone" {...props.field} />
                                                    </div>
                                                )}
                                            </InputMask>

                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Field name="message">
                                {(props: FieldProps) => (
                                    <div>
                                        <label htmlFor="">Mensagem:</label>
                                        <textarea {...props.field} cols={30} rows={8}></textarea>

                                        <span className="erro">
                                            {props.meta.touched && props.meta.error && props.meta.error}
                                        </span>
                                    </div>
                                )}
                            </Field>

                            <button type="submit" className="btpadrao botaoCadastrar" value="">
                                Enviar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
