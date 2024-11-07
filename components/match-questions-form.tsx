"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type FormData = {
  [key: string]: string | number | undefined;
};

const steps = [
  {
    question: "What gender are you interested in?",
    name: "gender",
    options: ["Women", "Men"],
  },
  {
    question: "Desired relationship type?",
    name: "relationshipType",
    options: [
      "New friends",
      "Short-term dating",
      "Long-term dating",
      "Hookups",
    ],
  },
  {
    question: "What ages are you open to dating?",
    name: "ageRange",
    type: "range",
  },
  {
    question:
      "Do you think it's important to have an emotional connection before a physical one?",
    name: "emotionalConnection",
    options: ["Yes", "No"],
  },
  {
    question: "Which word describes you better?",
    name: "personality",
    options: ["Carefree", "Intense"],
  },
  {
    question: "Do you enjoy discussing politics?",
    name: "discussPolitics",
    options: ["Yes", "No"],
  },
  {
    question: "Is astrological sign at all important in a match?",
    name: "astrologicalSign",
    options: ["Yes", "No"],
  },
  {
    question: "Should women continue to work full-time after marriage?",
    name: "workAfterMarriage",
    options: [
      "Yes",
      "No",
      "Either way, it's their choice",
      "Only if it's necessary",
    ],
  },
  {
    question: "Could you date someone who is really messy?",
    name: "messy",
    options: ["Yes", "No"],
  },
  {
    question: "Who makes decisions about your relationships?",
    name: "decisionMaker",
    options: ["Family", "Friends", "Society", "Me"],
  },
  {
    question: "How do you typically react when you feel stressed?",
    name: "stressReaction",
    options: [
      "I seek solitude.",
      "I talk to friends or family.",
      "I engage in physical activity.",
      "I try to distract myself.",
    ],
  },
  {
    question: "What role does physical attraction play in your relationships?",
    name: "physicalAttraction",
    options: [
      "It's the most important factor.",
      "It's important, but personality matters more.",
      "It's a bonus, but not essential.",
      "I prioritize emotional connection over physical attraction.",
    ],
  },
  {
    question: "How do you prefer to resolve conflicts in a relationship?",
    name: "conflictResolution",
    options: [
      "Open and honest discussion.",
      "Taking time to cool off before talking.",
      "Avoiding the issue until it resolves itself.",
      "Seeking help from a third party.",
    ],
  },
  {
    question: "How often do you feel a strong desire for physical intimacy?",
    name: "desireForIntimacy",
    options: [
      "Very often; it's a significant part of my life.",
      "Occasionally; I enjoy it but it's not a priority.",
      "Rarely; I prefer emotional intimacy.",
      "Almost never; I'm not focused on physical attraction.",
    ],
  },
  {
    question: "What's your preferred way of expressing affection?",
    name: "affectionExpression",
    options: [
      "Words of affirmation.",
      "Physical touch.",
      "Acts of service.",
      "Quality time together.",
    ],
  },
  {
    question:
      "How important is it for you to share similar values with your partner?",
    name: "sharedValues",
    options: [
      "Very important, it's a deal-breaker.",
      "Important, but we can differ on some things.",
      "Not very important, as long as we respect each other.",
      "It doesn't matter to me.",
    ],
  },
  {
    question:
      "When you meet someone new, what's your first impression based on?",
    name: "firstImpression",
    options: [
      "Their physical appearance.",
      "Their confidence and demeanor.",
      "Their personality and how they make me feel.",
      "A combination of all factors.",
    ],
  },
  {
    question: "What type of relationship are you most comfortable with?",
    name: "relationshipComfort",
    options: [
      "Casual and fun, no strings attached.",
      "Something light but with potential for more.",
      "A serious relationship from the start.",
      "I'm open to anything, depending on the chemistry.",
    ],
  },
  {
    question: "How do you feel about change in a relationship?",
    name: "relationshipChange",
    options: [
      "I embrace it and see it as an opportunity.",
      "I find it challenging but manageable.",
      "I resist change and prefer stability.",
      "It depends on the nature of the change.",
    ],
  },
];

const validateForm = (formData: FormData, step: number) => {
  const errors: Partial<Record<string, string>> = {};

  // Step-specific validation
  switch (step) {
    case 0:
    case 1:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      if (!formData[steps[step].name]) {
        errors[steps[step].name] = "This field is required";
      }
      break;
    case 2:
      if (formData.ageRange === undefined) {
        errors.ageRange = "Age range is required";
      }
      break;
    default:
      break;
  }

  return errors;
};

const MatchQuestionsForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const router = useRouter();

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
      // const response = await axios.post('/api/survey', formData);
      // console.log(response.data);
      // Handle success (e.g., redirect to a different page)
      console.log(formData);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const renderStepContent = (stepIndex: number) => {
    const { name, question, options, type } = steps[stepIndex];
    return (
      <div className="flex flex-col gap-6">
        <p className="text-lg font-semibold text-gray-800 mb-4">{question}</p>
        {type === "range" ? (
          <div className="flex flex-col items-center">
            <input
              className="w-full h-2 bg-blue-200 rounded-lg"
              type="range"
              name={name}
              min="18"
              max="60"
              onChange={handleInputChange}
              value={formData[name as keyof FormData] || 18}
            />
            <p className="mt-2 text-gray-600">{`18 - ${
              formData[name as keyof FormData] || 18
            }`}</p>
          </div>
        ) : options ? (
          options.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                name={name}
                value={option}
                onChange={handleInputChange}
                checked={formData[name as keyof FormData] === option}
                className="form-radio text-blue-600 p-2 h-5 w-5"
              />
              <span className="text-gray-900 text-lg font-semibold">
                {option}
              </span>
            </label>
          ))
        ) : (
          <input
            className="input p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name={name}
            placeholder={question}
            onChange={handleInputChange}
            value={formData[name as keyof FormData] || ""}
          />
        )}
        {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
      </div>
    );
  };

  return (
    <div className="md:max-w-7xl sm:m-20 mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        {steps[step].question}
      </h2>
      {renderStepContent(step)}
      <div className="flex justify-between mt-8">
        {step > 0 && (
          <button
            className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            onClick={handleBack}
          >
            Back
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ml-auto"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg ml-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchQuestionsForm;
