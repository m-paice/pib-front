import React, { useCallback, useState, useEffect } from "react";

import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";

import IconeError from "../../assets/imagens/icone-erro.png";

interface FormValues {
    firstName: string;
    lastName: string;
    birthDate: string;
    email: string;
    phone: string;

    zipcode: string;
    type: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;

    currentPassword: string;
    password: string;
    passwordConfirm: string;

    receiveTips: boolean;
}

// components
import Input from "../../components/Fields/Input";

// validations form
const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("obrigatório"),
    lastName: Yup.string().required("obrigatório"),
    email: Yup.string().email("e-mail inválido").required("obrigatório"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "as senhas devem corresponder"),
});

const initialValues: FormValues = {
    firstName: "Matheus",
    lastName: "Paice",
    birthDate: "",
    email: "matheus.paice@gmail.com",
    phone: "(14) 99802-2422",
    zipcode: "",
    type: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
    currentPassword: "",
    password: "",
    passwordConfirm: "",
    receiveTips: true,
};

const Profile: React.FC = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // only for animation. code temporary.
    useEffect(() => {
        if (submitSuccess) {
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 3000);
        }
    }, [submitSuccess]);

    const handleSubmit = useCallback((values: FormValues) => {
        // TODO: call action

        console.log(values);
        setSubmitSuccess(true);
    }, []);

    return (
        <div className="container meu-cadastro">
            <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
                {(formikBag) => (
                    <Form>
                        <div className="row mb-4">
                            <div className="col-md-12 mt-3">
                                <h2 className="h2pad titulo-mob">Seus Dados</h2>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="descmod">
                                <div className="col-md-12 sub-titulo-mob">Confira aqui suas informações.</div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="firstName">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Nome"
                                                className="form-control"
                                                disabled
                                                {...props.field}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="form-group col-md-6">
                                <Field name="lastName">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Sobrenome" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="birthDate">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask mask="99/99/9999" {...props.field}>
                                                {() => (
                                                    <Input
                                                        placeholder="Data de Nascimento"
                                                        className="data-nascimento form-control"
                                                        {...props.field}
                                                    />
                                                )}
                                            </InputMask>

                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className="form-group col-md-6">
                                <Field name="email">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Email" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="phone">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask mask="(99) 99999-9999" {...props.field}>
                                                {() => (
                                                    <Input
                                                        placeholder="Celular"
                                                        className="telefone form-control"
                                                        {...props.field}
                                                    />
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

                        <div className="row mb-4">
                            <div className="col-md-12 mt-3">
                                <h2 className="h2pad titulo-mob">Endereço</h2>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="descmod">
                                <div className="col-md-12 sub-titulo-mob">Mantenha sempre seu endereço atualizado.</div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="form-group col-md-3 col-sm-6">
                                <Field name="zipcode">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask mask="99999-999" {...props.field}>
                                                {() => (
                                                    <Input
                                                        placeholder="CEP"
                                                        className="form-control"
                                                        {...props.field}
                                                    />
                                                )}
                                            </InputMask>

                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="form-group col-md-3 col-sm-6">
                                <Field name="type">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Tipo" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="form-group col-md-6">
                                <Field name="address">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Endereço" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="form-group col-md-3 col-sm-6">
                                <Field name="number">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Número" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="form-group col-md-3 col-sm-6">
                                <Field name="complement">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Complemento"
                                                className="form-control"
                                                {...props.field}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className="form-group col-md-6">
                                <Field name="neighborhood">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Bairro" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="city">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Cidade" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className="form-group col-md-6">
                                <Field name="uf">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="UF" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-12 mt-3">
                                <h2 className="h2pad titulo-mob">Senha</h2>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="descmod">
                                <div className="col-md-12 sub-titulo-mob">
                                    Aqui você pode alterar sua senha de acesso.
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="currentPassword">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Senha Atual"
                                                type="password"
                                                className="form-control"
                                                {...props.field}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="password">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Senha Nova"
                                                type="password"
                                                className="form-control"
                                                {...props.field}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            <div className="form-group col-md-6">
                                <Field name="passwordConfirm">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Repetir Senha Nova"
                                                type="password"
                                                className="form-control"
                                                {...props.field}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="form-group col-md-6 d-flex mt-4 mb-4">
                                <div>
                                    <Field name="receiveTips">
                                        {(props: FieldProps) => (
                                            <div>
                                                <Input type="checkbox" {...props.field} checked={props.field.value} />
                                                <span className="erro">
                                                    {props.meta.touched && props.meta.error && props.meta.error}
                                                </span>
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <div className="tex ml-2">Gostaria de receber dicas e oportunidades da Newco</div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="bbuttons col-md-6">
                                <button className="btpadrao" type="submit">
                                    Salvar Alterações
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            {submitSuccess && (
                <div className="row mb-4">
                    <div className="sucesso col-md-12 alert alert-success" role="alert">
                        Alterações salvas com sucesso!
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
