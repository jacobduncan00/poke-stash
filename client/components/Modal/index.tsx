import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

type Props = {
  open: boolean;
  message: string;
  messageTitle: string;
  buttonMessage: string;
  setIsOpen: (arg0: boolean) => void;
};

function Modal({
  open,
  message,
  messageTitle,
  buttonMessage,
  setIsOpen,
}: Props) {
  console.log(open);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {messageTitle}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{message}</p>
              </div>

              <div className="mt-4">
                {buttonMessage === "Close" ? (
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-secondary bg-primary border border-transparent rounded-md hover:bg-primaryOffset focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {buttonMessage}
                  </button>
                ) : (
                  <Link href="/dashboard">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-secondary bg-primary border border-transparent rounded-md hover:bg-primaryOffset focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {buttonMessage}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
