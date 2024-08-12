import logo from "./images/logo.svg";
import illustration from "./images/illustration-dashboard.png";
import Form from "./Form";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="mx-7 lg:mx-0">
        {/* main content */}
        <div className="mb-[72px] text-center lg:mb-[94px]">
          <h1 className="mx-auto mb-8 w-14 lg:mb-10 lg:w-[90px]">
            <img src={logo} alt="logo" className="w-full" />
          </h1>

          <h2 className="mb-5 text-[22px] font-light leading-8 text-gray lg:text-5xl lg:leading-[60px]">
            We are launching{" "}
            <span className="font-bold text-very-dark-blue">soon!</span>
          </h2>

          <p className="mb-8 text-xs font-light leading-none text-very-dark-blue lg:mb-10 lg:text-xl">
            Subscribe and get notified
          </p>

          <Form />
        </div>
        {/* main content */}

        {/* illustration */}
        <div className="mb-[116px] max-w-[640px] lg:mb-16">
          <img src={illustration} alt="illustration" className="w-full" />
        </div>
        {/* illustration */}

        {/* socials */}
        <div className="flex flex-col items-center gap-7">
          <div className="flex items-center gap-[12.49px] text-blue">
            <a className="flex h-[31px] w-[31.224px] cursor-pointer items-center justify-center rounded-full border-[0.918px] border-pale-blue border-opacity-50 transition-colors hover:bg-blue hover:text-white">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a className="flex h-[31px] w-[31.224px] cursor-pointer items-center justify-center rounded-full border-[0.918px] border-pale-blue border-opacity-50 transition-colors hover:bg-blue hover:text-white">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a className="flex h-[31px] w-[31.224px] cursor-pointer items-center justify-center rounded-full border-[0.918px] border-pale-blue border-opacity-50 transition-colors hover:bg-blue hover:text-white">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>

          <p className="text-[10px] font-light text-gray">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </div>
        {/* socials */}
      </div>
      {/* container */}
    </main>
  );
}
export default App;
