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

                    <div className="form-control py-2">
                        <label className="input-group">
                            <span>Email</span>
                            <Field type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </label>
                        <ErrorMessage className="text-red-600" name="email" component="div" />
                    </div>
                    <div className="form-control py-2">
                        <label className="input-group">
                            <span>Pass</span>
                            <Field type="password" name="password" placeholder="******" className="input input-bordered w-full max-w-xs" />
                        </label>
                        <ErrorMessage name="password" className="text-red-600" component="div" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flexEnd' }}>

                        <Button disabled={isSubmitting} name="вход" />


                        {children}
                    </div>

                </Form>
            )}
        </Formik>

    );
}

export default Enter;