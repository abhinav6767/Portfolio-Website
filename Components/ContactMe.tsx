import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

type Props = {};
export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (formdata) => console.log(formdata);

  // watch input value by passing the name of it

  return (
    <div className="h-screen flex text-central relative overflow-hidden md:text-left flex-col  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center ">
          {" "}
          I Have got what you need.
          <span className="underline decoration-[#E30B5C] ">
            Lets Talk.
          </span>{" "}
        </h4>
        <div>
          <div className="flex  item-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7ab0a] h-7 w-7 animate-pulse " />
            <p className="">+91 99117782819 </p>
          </div>
          <div className="flex  item-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7ab0a] h-7 w-7 animate-pulse " />
            <p className="text-2xl">India</p>
          </div>
          <div className="flex  item-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7ab0a] h-7 w-7 animate-pulse " />
            <p className="text-2xl">Abhinavsaxena6767@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-aut0"
        >
          <div className="flex space-x-2">
            <div className="flex flex-col">
              {" "}
              <input
                {...register("name")}
                className="contactInput"
                placeholder="Name"
                type="text"
              />
              <p className="text-red-500 animate-pulse">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <input
                {...register("email")}
                className="contactInput"
                placeholder="Email"
                type="text"
              />
              <p className="text-red-500 animate-pulse">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <input
            className="contactInput"
            {...register("subject")}
            type="text"
            placeholder="Subject"
          />
          <p className="text-red-500 animate-pulse">
            {errors.subject?.message}
          </p>
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <p className="text-red-500 animate-pulse">
            {errors.message?.message}
          </p>
          <button
            type="submit"
            className="bg-[#E30B5C] py-5 pc-10 rounded-md text-lg  text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
