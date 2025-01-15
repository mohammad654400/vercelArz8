import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
  .min(5, "نام و نام خانوادگی باید حداقل 5 حرف باشد.")
  .required("نام و نام خانوادگی الزامی است."),
  phoneNumber: Yup.string()
    .required("شماره تماس ضروری است")
    .matches(/^09[0-9]{9}$/,  "شماره تماس نامعتبر است."),

    message:Yup.string()
    .required("متن پیام ضروری است")
    .min(10, " پیام شما باید حداقل 10 کاراکتر باشد")
});
