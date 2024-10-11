export const BRAND_NAME = "Niamudeen Docs";

const FIELD_REQUIRED = "This field is required";

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

export { FORMINPUT_LIST };
