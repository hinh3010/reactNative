import * as Yup from 'yup'


export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(5, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(5, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(5, 'Too Short!') 
        .max(10, 'Too Long!'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf(
            [Yup.ref("password")] ,
            "Password và confirm Password phải giống nhau"
        )
});

