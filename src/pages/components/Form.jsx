import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FORMINPUT_LIST } from "../../constants";
import MainLayout from "../../components/layout/main-layout";
import FormFieldError from "../../components/shared/FormFieldError";

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const codeSnippetList = [
    {
      id: 1,
      code: codeSnippet,
      filename: "components/LoginForm.jsx",
    },
    {
      id: 2,
      code: codeSnippet2,
      filename: "constants/index.js",
    },
    {
      id: 3,
      code: codeSnippet3,
      filename: "components/shared/FormFieldError.jsx",
    },
  ];

  const PACKAGES = [
    {
      name: "npm install react-hook-form",
      link: "https://www.npmjs.com/package/react-hook-form",
    },
  ];

  const LOGIN_INPUT_LIST =
    FORMINPUT_LIST.filter((input) => input.isLogin) || [];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainLayout
      title="Form"
      packages={PACKAGES}
      codeSnippetList={codeSnippetList}
    >
      <section className="mx-auto max-w-[1200px] px-4 overflow-hidden flex_center">
        <form
          className="max-w-[400px] min-h-[500px] mx-auto text-lg p-14 rounded-xl space-y-8 shadow-lg dark:border-border dark:border-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Sign In</h2>

          <div className="space-y-4">
            {LOGIN_INPUT_LIST?.length > 0 &&
              LOGIN_INPUT_LIST.map((input) => (
                <div className="space-y-4 text-sm" key={input.name}>
                  <label className="capitalize">{input.label}</label>
                  <input
                    autoComplete="off"
                    {...register(input.name, input.rules)}
                    className="w-full rounded-md border border-gray-200 py-2 pl-4 text-black"
                  />
                  {errors[input.name] && (
                    <FormFieldError message={errors[input.name].message} />
                  )}
                </div>
              ))}
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-700 w-full"
          >
            Submit
          </button>

          <p className="text-center">
            Don't have an account ?
            <Link to="/signup" className="ml-2">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </MainLayout>
  );
}

const codeSnippet = `import { useForm } from "react-hook-form";
import { FORMINPUT_LIST } from "../../constants";
import { Link } from "react-router-dom";
import FormFieldError from "../../components/shared/FormFieldError";

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const LOGIN_INPUT_LIST =
    FORMINPUT_LIST.filter((input) => input.isLogin) || [];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
      <section className="mx-auto max-w-[1200px] px-4 overflow-hidden flex_center">
        <form
          className="max-w-[400px] min-h-[500px] mx-auto text-lg p-14 rounded-xl space-y-8 shadow-lg dark:border-border dark:border-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Sign In</h2>

          <div className="space-y-4">
            {LOGIN_INPUT_LIST?.length > 0 &&
              LOGIN_INPUT_LIST.map((input) => (
                <div className="space-y-4 text-sm" key={input.name}>
                  <label className="capitalize">{input.label}</label>
                  <input
                    autoComplete="off"
                    {...register(input.name, input.rules)}
                    className="w-full rounded-md border border-gray-200 py-2 pl-4 text-black"
                  />
                  {errors[input.name] && (
                    <FormFieldError message={errors[input.name].message} />
                  )}
                </div>
              ))}
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-700 w-full"
          >
            Submit
          </button>

          <p className="text-center">
            Don't have an account ?
            <Link to="/signup" className="ml-2">
              Sign up
            </Link>
          </p>
        </form>
      </section>
  );
}`;

const codeSnippet2 = `const FIELD_REQUIRED = "This field is required";
const FORMINPUT_LIST = [
  {
    name: "name",
    label: "Name",
    type: "name",
    placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: FIELD_REQUIRED,
      },
    },
    isSignup: true,
  },
  {
    name: "username",
    label: "Username",
    type: "username",
    placeholder: "Enter your username",
    rules: {
      required: {
        value: true,
        message: FIELD_REQUIRED,
      },
    },
    isSignup: true,
    isLogin: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    rules: {
      required: {
        value: true,
        message: FIELD_REQUIRED,
      },
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Please enter a valid email",
      },
    },

    isSignup: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    rules: {
      required: {
        value: true,
        message: FIELD_REQUIRED,
      },
      minLength: {
        value: 3,
        message: "Password must be at least 3 characters",
      },
    },
    isLogin: true,
    isSignup: true,
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    type: "contactNumber",
    placeholder: "Enter your contactNumber",
    rules: {
      required: {
        value: true,
        message: FIELD_REQUIRED,
      },
      maxLength: {
        value: 10,
        message: "Password must be at least 10 characters",
      },
      minLength: {
        value: 10,
        message: "Password must be at least 10 characters",
      },
    },
    isSignup: true,
  },
  {
    name: "referCode",
    label: "Refer Code",
    type: "referCode",
    placeholder: "Enter your referCode",
    rules: {},
    isSignup: true,
  },
];

export { FORMINPUT_LIST };`;

const codeSnippet3 = `export default function FormFieldError({ message = "" }) {
  return <p className="text-red-500 text-xs">{message.toString()}</p>;
}
`;
