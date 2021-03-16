import React, { CSSProperties } from "react";

import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import { Container } from "./NewPasswordContainer";

const stylesContainer: CSSProperties = {
    maxWidth: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const stylesForm: CSSProperties = { minWidth: 500, display: "flex", flexDirection: "column", alignItems: "center" };

interface FormValues {
    password: string;
    confirmPassword: string;
}

// validations form
const SignupSchema = Yup.object().shape({
    password: Yup.string().required("obrigatório"),
    confirmPassword: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("password")], "as senhas devem corresponder"),
});

interface Props {
    payload: {
        data: {};
        actions: {
            handleNewPassword(data): void;
        };
    };
}

const NewPassword: React.FC<Props> = ({ payload }) => {
    const { token } = useParams();

    console.log(token);

    const { actions } = payload;
    const { handleNewPassword } = actions;

    const handleSubmit = (values: FormValues) => {
        handleNewPassword({
            password: values.password,
            hash: token,
        });
    };

    const initialValues: FormValues = {
        password: "",
        confirmPassword: "",
    };

    return (
        <div className="page">
            <div className="container meu-cadastro" style={stylesContainer}>
                <div className="descmod cadastro">
                    <div className="titulo-mob noneBr" style={{ textAlign: "center" }}>
                        Atualizar senha
                    </div>
                </div>

                <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
                    {(props) => (
                        <form onSubmit={props.handleSubmit} style={stylesForm}>
                            <input
                                name="password"
                                onChange={props.handleChange}
                                value={props.values.password}
                                className="form-control"
                                placeholder="Nova senha"
                                type="password"
                            />

                            <span className="erro">
                                {props.touched && props.errors.password ? props.errors.password : null}
                            </span>

                            <input
                                name="confirmPassword"
                                onChange={props.handleChange}
                                value={props.values.confirmPassword}
                                className="form-control mt-1"
                                placeholder="Confirmar senha"
                                type="password"
                            />

                            <span className="erro">
                                {props.touched && props.errors.confirmPassword ? props.errors.confirmPassword : null}
                            </span>

                            <button style={{ marginTop: 50 }} className="btpadrao" type="submit">
                                Atualizar
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Container(NewPassword);
