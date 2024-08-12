import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function Form() {
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "") {
      setIsEmailEmpty(true);
    }

    if (emailRegex.test(email) === false) {
      setIsEmailInvalid(true);
    }
  }

  return (
    <form
      className="mx-[10px] flex max-w-[637px] flex-col items-center lg:mx-0 lg:flex-row lg:flex-wrap"
      onSubmit={handleSubmit}
    >
      {/* input */}
      <input
        type="text"
        className={`h-10 w-full rounded-[28px] border-[1px] py-[10px] pl-8 text-xs leading-5 shadow-input outline-none placeholder:text-xs placeholder:font-light placeholder:leading-5 placeholder:text-[#B8C7ED] focus:text-xs focus:font-light focus:leading-5 lg:h-14 lg:max-w-[421px] lg:text-base lg:placeholder:text-base lg:focus:text-base ${isEmailEmpty || isEmailInvalid ? "border-light-red" : "border-pale-blue"}`}
        placeholder="Your email address…"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onFocus={() => {
          setEmail("");
          setIsEmailEmpty(false);
          setIsEmailInvalid(false);
        }}
      />
      {/* input */}

      {/* error text */}
      <p
        className={`${isEmailEmpty || isEmailInvalid ? "block" : "hidden"} mb-[10px] text-[10px] italic leading-5 tracking-[0.125px] text-light-red lg:order-last lg:mb-0 lg:ml-8 lg:mt-[10px] lg:text-xs lg:tracking-[0.15px]`}
      >
        {isEmailEmpty
          ? "Whoops! It looks like you forgot to add your email"
          : isEmailInvalid
            ? "Please provide a valid email address"
            : null}
      </p>
      {/* error text */}

      {/* button */}
      <button
        className="mt-[10px] w-full rounded-[28px] bg-blue py-3 text-xs font-semibold leading-4 text-white shadow-button transition-colors hover:bg-[#7196f5] lg:ml-4 lg:mt-0 lg:max-w-[200px] lg:py-5 lg:text-base lg:leading-none"
        type="submit"
      >
        Notify Me
      </button>
      {/* button */}
    </form>
  );
}
export default Form;
