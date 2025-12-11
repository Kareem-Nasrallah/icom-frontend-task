"use clinet";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { FieldError } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  id,
  name,
  type,
  register,
  watch,
  error,
  className,
}: {
  id: string;
  name: string;
  type: "password" | "text" | "email";
  register: any;
  watch: any;
  error?: FieldError;
  className?: string;
}) => {
  const hasValue = watch(`${id}`);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={className + " relative group" + (error ? " mb-5" : " mb-6")}
    >
      <label
        className={`p-1 cursor-text transition-all duration-300 text-base absolute top-2 start-3 text-slate-400 group-focus-within:-top-4 group-focus-within:text-sm group-focus-within:bg-background z-10 ${
          hasValue && "-top-4! text-sm text-primary/70! bg-background"
        } group-focus-within:text-primary!`}
        htmlFor={id}
      >
        {name}
      </label>
      <Input
        className="m-0 py-6"
        id={id}
        type={type === "password" ? (isVisible ? "text" : "password") : type}
        {...register(id)}
      />
      {type === "password" && (
        <div
          className="absolute top-0 right-0 rounded-md p-3 border border-transparent"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? <EyeOff /> : <Eye />}
        </div>
      )}
      <p className={` text-sm ms-2 text-red-600 ${error ? "block" : "hidden"}`}>
        {error?.message}
      </p>
    </div>
  );
};

export default InputField;
