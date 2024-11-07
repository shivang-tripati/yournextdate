import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useAuthStore from "@/hooks/user-auth-store";

const validateForm = (formData: Partial<FormData>, step: number) => {
  const errors: Partial<Record<keyof FormData, string>> = {};

  switch (step) {
    case 0:
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Invalid email address";
      }
      break;
    case 1:
      if (!formData.name) {
        errors.name = "Name is required";
      }
      break;
    case 2:
      if (!formData.country) {
        errors.country = "Country is required";
      }
      if (!formData.city) {
        errors.city = "City is required";
      }
      break;
    case 3:
      if (!formData.gender) {
        errors.gender = "Gender is required";
      } else if (!["Male", "Female", "Other"].includes(formData.gender)) {
        errors.gender = "Invalid gender selection";
      }
      if (!formData.dateOfBirth || isNaN(Date.parse(formData.dateOfBirth))) {
        errors.dateOfBirth = "Invalid date";
      }
      break;
    case 4:
      if (!formData.ideaPerson) {
        errors.ideaPerson = "Ideal person description is required";
      }
      break;
    case 5:
      if (!formData.password || formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      break;
    default:
      break;
  }

  return errors;
};

type FormData = {
  email: string;
  name: string;
  country: string;
  city: string;
  nearBy?: string;
  gender?: "Male" | "Female" | "Other";
  dateOfBirth?: string;
  ideaPerson: string;
  password: string;
  confirmPassword: string;
};

const steps = [
  { title: "Step 1: What’s your email?", fields: ["email"] },
  { title: "Step 2: What’s your name?", fields: ["name"] },
  {
    title: "Step 3: Where do you live?",
    fields: ["country", "city", "nearBy"],
  },
  { title: "Step 4: About me", fields: ["gender", "dateOfBirth"] },
  { title: "Step 5: Ideal person to date", fields: ["ideaPerson"] },
  { title: "Step 6: Password", fields: ["password", "confirmPassword"] },
];

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({
    email: "",
    name: "",
    country: "",
    city: "",
    nearBy: "",
    gender: undefined,
    dateOfBirth: "",
    ideaPerson: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleNext = () => {
    const stepErrors = validateForm(formData, step);
    if (Object.keys(stepErrors).length === 0) {
      setStep(step + 1);
      setErrors({});
    } else {
      setErrors(stepErrors);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    const allErrors = validateForm(formData, steps.length - 1);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData;
      const response = await axios.post("/api/auth/signup", dataToSend);
      const data = await response.data;

      const user = {
        id: data.id, // Directly accessing id from the data
        email: data.email,
        name: data.name,
        city: data.city,
        nearBy: data.nearBy,
        profilePictureUrl: data.profilePictureUrl,
        idealPerson: data.idealPerson,
      };

      if (response.status === 201) {
        login(user);
        router.push("/onboarding");
      } else {
        console.error("Error while signing up:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderStepContent = (stepIndex: number) => {
    const fields = steps[stepIndex].fields;
    return (
      <div className="flex flex-col gap-6">
        {fields.map((field) => (
          <div key={field} className="relative">
            <label
              htmlFor={field}
              className="block text-lg font-semibold text-gray-800 mb-2"
            >
              {field.charAt(0).toUpperCase() +
                field.slice(1).replace(/([A-Z])/g, " $1")}
            </label>
            {field === "gender" ? (
              <select
                id={field}
                name={field}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleInputChange}
                value={formData.gender || ""}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : field === "dateOfBirth" ? (
              <input
                id={field}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                name={field}
                onChange={handleInputChange}
                value={formData[field as keyof FormData] || ""}
              />
            ) : field === "password" || field === "confirmPassword" ? (
              <input
                id={field}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name={field}
                placeholder={
                  field === "password" ? "Password" : "Confirm Password"
                }
                onChange={handleInputChange}
                value={formData[field as keyof FormData] || ""}
              />
            ) : (
              <input
                id={field}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                onChange={handleInputChange}
                value={formData[field as keyof FormData] || ""}
              />
            )}
            {errors[field as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field as keyof FormData]}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-lg p-8 bg-white shadow-2xl rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {steps[step].title}
      </h2>
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        {renderStepContent(step)}
      </motion.div>
      <div className="flex justify-between mt-8">
        {step > 0 && (
          <button
            className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm"
            onClick={handleBack}
          >
            Back
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="btn bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
      <div className="mt-6 flex flex-row items-center space-x-2 text-sm text-gray-600">
        <div className="w-full h-1 bg-gray-200 rounded-lg overflow-hidden">
          <p
            className="h-full bg-blue-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
      <span className="flex flex-row items-center justify-center mt-6 text-lg font-medium text-leadt">
        Step&nbsp;{step + 1}&nbsp;of&nbsp;{steps.length}
      </span>
    </div>
  );
};

export default RegistrationForm;
