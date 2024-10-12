import React from "react";
import { useState } from "react";
import MainLayout from "../../components/layout/main-layout";

export default function ModalComponent() {
  const [show, setShow] = useState(false);
  const codeSnippetList = [
    {
      id: 1,
      code: codeSnippet,
      filename: "components/Modal.jsx",
    },
  ];
  return (
    <MainLayout title="Modal" codeSnippetList={codeSnippetList}>
      <div className="relative min-h-[500px] flex_center">
        {!show && (
          <button
            className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out  hover:bg-orange-700"
            type="button"
            onClick={() => setShow(!show)}
          >
            Toggle modal
          </button>
        )}

        {show && (
          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className="flex_center overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white dark:bg-transparent rounded-lg shadow-lg border-border border-2">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-700"
                  >
                    I accept
                  </button>
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="ml-3 cursor-pointer rounded-lg text-black bg-gray-100 px-8 py-3 text-xs capitalize  shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

const codeSnippet = `import React from "react";
import { useState } from "react";

export default function ModalComponent() {
  const [show, setShow] = useState(false);
  return (
      <div className="relative min-h-[500px] flex_center">
        {!show && (
          <button
            className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out  hover:bg-orange-700"
            type="button"
            onClick={() => setShow(!show)}
          >
            Toggle modal
          </button>
        )}

        {show && (
          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className="flex_center overflow-y-auto overflow-x-hidden absolute top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              <div className="relative bg-white dark:bg-transparent rounded-lg shadow-lg border-border border-2">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 text-xs capitalize text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-700"
                  >
                    I accept
                  </button>
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    className="ml-3 cursor-pointer rounded-lg text-black bg-gray-100 px-8 py-3 text-xs capitalize  shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
`;
