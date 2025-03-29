import React, { useCallback, useEffect, useRef, useState } from 'react';
import DocumentUpload from "@/assets/icons/job/documentUpload";
import FormField from '@/sections/job/input/inputField';
import InputSelect from '@/sections/job/input/InputSelect';
import validationSchema from './yup/validationSchema';
import Modal from '@/components/Modal';
import ErrorJob from "@/assets/icons/modal/errorJob"
import SuccessJob from "@/assets/icons/modal/successJob"
import * as Yup from 'yup';
import usePostData from '@/hooks/usePostData';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Cookies from "js-cookie";
import { SHA256 } from "crypto-js";

interface FormDataType {
	fullName: string;
	email: string;
	title: string;
	vulnerableSector: string;
	description: string;
	Offer?: string;
	pathOfError?: string;
	files: File[];
}


interface ModalLine {
	text: string;
	highlightedWords?: { word: string; color: "green" | "red" }[];
}


export default function FormBugBounty() {

	const { executeRecaptcha } = useGoogleReCaptcha();
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
	const [totalFileSize, setTotalFileSize] = useState(0);
	const [isChecked, setIsChecked] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState<"success" | "error" | "loading">("loading");
	const [modalLines, setModalLines] = useState<ModalLine[]>([]);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const formDataRef = useRef<{
		fullName: string;
		email: string;
		files: File[];
		title: string;
		vulnerableSector: string;
		description: string;
		pathOfError: string;
		Offer?: string;
		[key: string]: any;
	}>({
		fullName: "",
		email: "",
		files: [],
		title: "",
		vulnerableSector: "",
		description: "",
		pathOfError: "",
		Offer: "",
	});

	const { mutate, isError, isSuccess } = usePostData("bug-bounty");

	useEffect(() => {
		if (isSuccess) {
			setModalType("success");
			setModalLines([{ text: "پیام شما با موفقیت ارسال شد.", highlightedWords: [{ word: "موفقیت", color: "green" }] }]);
			setIsModalOpen(true);
		} else if (isError) {
			setModalType("error");
			setModalLines([{ text: "ارسال پیام با مشکل روبرو شد", highlightedWords: [{ word: "مشکل", color: "red" }] }]);
			setIsModalOpen(true);
		}
	}, [isError, isSuccess]);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		formDataRef.current = { ...formDataRef.current, [name]: value };
	}, []);

	const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);

		const newUploadedFiles: File[] = [];
		let newTotalFileSize = totalFileSize;

		for (const file of files) {
			if (newTotalFileSize + file.size > 100 * 1024 * 1024) {
				setErrors((prev) => ({ ...prev, files: "حجم کل فایل‌ها نباید بیشتر از 100 مگابایت باشد." }));
				return;
			}
			newUploadedFiles.push(file);
			newTotalFileSize += file.size;
		}

		setUploadedFiles((prevFiles) => {
			const combinedFiles = [...prevFiles, ...newUploadedFiles];

			const imageFiles = combinedFiles.filter((file) => ["image/jpeg", "image/png"].includes(file.type));
			const videoOrZipFiles = combinedFiles.filter((file) =>
				["video/mp4", "application/zip", "application/octet-stream"].includes(file.type) || file.name.endsWith(".zip")
			);

			if (imageFiles.length > 5) {
				setErrors((prev) => ({ ...prev, files: "حداکثر 5 تصویر مجاز است." }));
				return prevFiles;
			}

			if (videoOrZipFiles.length > 1) {
				setErrors((prev) => ({ ...prev, files: "فقط یک ویدیو یا فایل ZIP مجاز است." }));
				return prevFiles;
			}

			return combinedFiles;
		});

		setTotalFileSize(newTotalFileSize);
		formDataRef.current.files = [...uploadedFiles, ...newUploadedFiles];
		setErrors((prev) => ({ ...prev, files: "" }));
	}, [totalFileSize, uploadedFiles]);

	const handleFileRemove = useCallback((index: number) => {
		const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
		const removedFileSize = uploadedFiles[index].size;
		setUploadedFiles(updatedFiles);
		setTotalFileSize((prev) => prev - removedFileSize);
		formDataRef.current.files = updatedFiles;
	}, [uploadedFiles]);

	const validateForm = useCallback(async () => {
		try {
			await validationSchema.validate(formDataRef.current, { abortEarly: false });
			setErrors({});
			return true;
		} catch (err: unknown) {
			const newErrors: Record<string, string> = {};

			// Ensure err is a Yup.ValidationError before accessing its properties
			if (err instanceof Yup.ValidationError) {
				err.inner.forEach((error) => {
					if (error.path) {
						newErrors[error.path] = error.message;
					}
				});
			}

			setErrors(newErrors);
			return false;
		}
	}, []);


	const hashFormData = (data: FormDataType) => {
		console.log(data);
		const { files, ...dataWithoutFiles } = data; // Exclude files
		const dataString = JSON.stringify(dataWithoutFiles);
		return SHA256(dataString).toString(); // Hash only the textual data
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();


		if (!isChecked) {
			setErrors((prev) => ({ ...prev, acceptCheckbox: "پذیرش قوانین الزامی است." }));
			return;
		}

		const isValid = await validateForm();
		if (!isValid) return;

		if (!executeRecaptcha) {
			return;
		}

		// Generate hash for form fields excluding files
		const currentHash = hashFormData(formDataRef.current);
		const previousHash = Cookies.get("formHash");

		if (currentHash === previousHash) {

			// Show the modal with the duplicate message
			setModalType("error");
			setModalLines([
				{
					text: "این پیام قبلاً ارسال شده است",
					highlightedWords: [{ word: "قبلاً", color: "red" }],
				},
			]);
			setIsModalOpen(true);
			return;
		}

		// Store new hash in cookies (expires in 1 day)
		Cookies.set("formHash", currentHash, { expires: 1 });

		try {
			const reCaptchaToken = await executeRecaptcha("bug_bounty");
			const formData = new FormData();

			formData.append("name", formDataRef.current.fullName);
			formData.append("email", formDataRef.current.email);
			formData.append("title", formDataRef.current.title);
			formData.append("section", formDataRef.current.vulnerableSector);
			formData.append("description", formDataRef.current.description);
			formData.append("route", formDataRef.current.pathOfError);
			if (formDataRef.current.Offer) {
				formData.append("proposal", formDataRef.current.Offer);
			}
			formData.append("recaptcha", reCaptchaToken);

			formDataRef.current.files.forEach((file) => {
				formData.append("file", file);
			});

			mutate(formData);

			setModalType("loading");
			setModalLines([
				{ text: "رزومه ی شما در حال آپلود است", highlightedWords: [{ word: "آپلود", color: "green" }] },
				{ text: "...لطفا منتظر بمانید" },
			]);
			setIsModalOpen(true);
		} catch (error) {
			setModalType("error");
			setModalLines([{ text: "ارسال پیام با مشکل روبرو شد", highlightedWords: [{ word: "مشکل", color: "red" }] }]);
			setIsModalOpen(true);
		}
	};



	return (
		<div className=" rounded-[30px] w-full py-10 px-5 bg-[#FFFFFF] dark:bg-[#242428]">

			<form onSubmit={handleSubmit} className='flex flex-col gap-5 '>
				<div className="grid sm:grid-cols-2 gap-5 text-xs lg:text-sm">
					<FormField
						name="fullName"
						label="نام و نام خانوادگی (یا لقب)"
						type="text"
						onChange={handleChange}
						error={errors.fullName}

					/>
					<FormField
						name="email"
						label="ایمیل"
						type="text"
						onChange={handleChange}
						error={errors.email}
					/>
					<FormField
						name="title"
						label="عنوان باگ "
						type="text"
						onChange={handleChange}
						error={errors.title}
					/>
					<InputSelect
						name="vulnerableSector"
						label="بخش آسیب پذیر"
						options={["احراز هویت", "خرید", "فروش", "برداشت ارزی", "برداشت ریالی", "سایر"]}
						onChange={handleChange}
						error={errors.vulnerableSector}
					/>
				</div>

				<FormField
					name="description"
					label="توضیحات خطا"
					type="textarea"
					onChange={handleChange}
					error={errors.description}
				/>
				<FormField
					name="pathOfError"
					label="مسیر ایجاد خطا"
					type="textarea"
					onChange={handleChange}
					error={errors.pathOfError}
				/>
				<FormField
					name="Offer"
					label="پیشنهاد جهت رفع آسیب (اختیاری)"
					type="textarea"
					onChange={handleChange}
					error={errors.Offer}
				/>

				<div>
					<label className="block text-sm font-medium mb-3">بارگذاری مستندات</label>
					<div className="relative z-10 h-[160px] lg:h-[227px] border border-dashed lg:border-solid border-gray-300 rounded-xl mb-4">
						<div className="absolute  inset-0 flex flex-col items-center justify-center pt-[14px] pb-[11px] lg:pt-[37px] lg:pb-[21px]">
							<div className='w-[51px] h-[51px] lg:w-[69px] lg:h-[69px]'>
								<DocumentUpload />
							</div>

							<button className='mt-[8px] mb-[13px] lg:mt-[11px] lg:mb-[30px] w-[78px] h-[26px] lg:w-[105px] lg:h-[35px] rounded-[7.43px] lg:rounded-[10px] bg-primary text-xs lg:text-base font-bold text-white text-center'>آپلود فایل</button>
							<span className="text-[9px] md:text-sm font-normal opacity-50 text-center text-sixth">حداکثر ۵ تصویر jpeg یا PNG ،یک ویدیو MP4 یا یک فایل Zip ،حداکثر حجم کل فایل ها 100 مگابایت باشد
							</span>
						</div>
						<input
							type="file"
							accept=".jpeg,.jpg,.png,.mp4,.zip"
							multiple
							onChange={handleFileUpload}
							className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
						/>
					</div>
					{errors.files && <p className="text-red-500 text-xs mt-1">{errors.files}</p>}
					{uploadedFiles.length > 0 && (
						<div className="space-y-2">
							{uploadedFiles.map((file, index) => (
								<div key={index} className="flex justify-between items-center">
									<span className="text-sm">{file.name}</span>
									<button
										type="button"
										onClick={() => handleFileRemove(index)}
										className="text-red-500 text-xs"
									>
										حذف
									</button>
								</div>
							))}
							<p className="text-sm text-gray-600">
								حجم کل: {(totalFileSize / (1024 * 1024)).toFixed(2)} مگابایت
							</p>
						</div>
					)}
				</div>

				<div className="flex items-start mb-[19px]">

					<input
						id="accept-checkbox"
						type="checkbox"
						checked={isChecked}
						onChange={handleCheckboxChange}
						className="peer hidden "
					/>

					<label
						htmlFor="accept-checkbox"
						className={`min-w-5 w-5 h-5 lg:w-9 lg:h-9 flex items-start justify-center rounded lg:rounded-lg border border-[#ADADAD80] cursor-pointer ${isChecked ? "bg-[#FFF6DD]" : "bg-white"
							}`}>
						{isChecked && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-3 h-3 lg:w-7 lg:h-7 text-[#FFC107]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={3}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						)}
					</label>

					<div className='flex flex-col '>
						<label
							htmlFor="accept-checkbox"
							className="lg:text-[25px] text-sm font-normal flex  self-center text-foreground mr-2 lg:mr-[17px] leading-6"
						>
							ارسال این گزارش به معنی پذیرش قوانین و مقررات باگ بانتی ارزهشت است.
						</label>
						{errors.acceptCheckbox && <p className="text-red-500 text-xs mt-2 lg:mt-5 mr-2 lg:mr-4">{errors.acceptCheckbox}</p>}

					</div>

				</div>

				<button type="submit" className="w-[124px] h-[40px] lg:w-[232px] lg:h-[75px] bg-primary text-white px-4 py-2 rounded-xl self-end text-[13.44px] lg:text-[25px]  transition-all duration-300 ease-in-out hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] dark:hover:shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] hover:-translate-y-[3px] hover:bg-[rgb(255,185,9)]  active:translate-y-0 active:bg-primary">
					ارسال درخواست
				</button>
			</form>
			{isModalOpen && (
				<Modal
					isOpen={isModalOpen}
					type={modalType}
					icon={
						modalType === "success" ? (
							<div className="  w-24 h-24 lg:w-44 lg:h-44">
								<SuccessJob />
							</div>
						) : (
							<div className=" w-24 h-24 lg:w-44 lg:h-44">
								<ErrorJob />
							</div>
						)
					}
					lines={modalLines}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</div>
	);
}
