import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("نام خانوادگی ضروری است")
    .min(3, "نام خانوادگی باید حداقل 3 کاراکتر باشد")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از 50 کاراکتر باشد"),
  phoneNumber: Yup.string()
    .required("شماره تماس ضروری است")
    .matches(/^[0-9]{10}$/, "شماره تماس باید 10 رقمی باشد"),

    message:Yup.string()
    .required("متن پیام ضروری است")
    .min(10, " پیام شما باید حداقل 10 کاراکتر باشد")
});


