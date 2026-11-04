import React from "react";
import { FiCheck } from "react-icons/fi";

const steps = ["Cart", "Your Details", "Send on WhatsApp"];

const CheckoutSteps = ({ current }) => (
  <ol className="flex items-center gap-2 text-xs font-semibold sm:gap-3 sm:text-sm">
    {steps.map((label, index) => {
      const step = index + 1;
      const done = step < current;
      const active = step === current;

      return (
        <li key={label} className="flex items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1.5 sm:gap-2">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold sm:h-7 sm:w-7 sm:text-xs ${
                done
                  ? "bg-green-600 text-white"
                  : active
                    ? "bg-blue-700 text-white ring-4 ring-blue-100"
                    : "bg-slate-200 text-slate-500"
              }`}
            >
              {done ? <FiCheck strokeWidth={3} /> : step}
            </span>
            <span
              className={`whitespace-nowrap ${
                active ? "text-navy" : done ? "text-green-700" : "text-slate-400"
              } ${active ? "" : "hidden sm:inline"}`}
            >
              {label}
            </span>
          </span>

          {step < steps.length && (
            <span
              className={`h-px w-5 sm:w-10 ${done ? "bg-green-600" : "bg-slate-300"}`}
            />
          )}
        </li>
      );
    })}
  </ol>
);

export default CheckoutSteps;
