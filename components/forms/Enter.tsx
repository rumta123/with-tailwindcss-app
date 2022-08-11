import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from "../ui/Button";

const Enter = function ({ children }: React.PropsWithChildren) {

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Обязательное поле';
                } else if (!values.password) {
                    errors.password = 'Обязательное поле';
                }
                else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'неправильный email адресс';
                }
                else if (values.password.length <= 6) {
                    errors.password = 'Количество знаков должно быть 6';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="py-2">
                        <Field type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <ErrorMessage className="text-red-600" name="email" component="div" />
                    </div>
                    <div className="py-2">
                        <Field type="password" name="password" placeholder="******" className="input input-bordered w-full max-w-xs" />
                        <ErrorMessage name="password" className="text-red-600" component="div" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>

                        {/* <Button disabled={isSubmitting} name="вход" />
                        <Button disabled={isSubmitting} name="регистрация" /> */}

                        {children}
                    </div>

                </Form>
            )}
        </Formik>
    );
}

export default Enter;