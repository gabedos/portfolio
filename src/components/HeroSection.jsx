import portrait from "../assets/portrait.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-around p-7 md:flex-row">
      <div className="mx-3 mb-3 flex flex-grow basis-[300px] border-spacing-1 flex-col justify-center rounded-3xl bg-white bg-opacity-10 p-4 md:mb-0">
        <span className="ml-[0.25em] font-semibold">Hey, I'm Gabe</span>
        <div className="flex flex-col">
          <h2 className="my-1 text-5xl font-bold tracking-tighter">Software</h2>
          <h2 className="my-1 text-5xl font-bold tracking-tighter">Engineer</h2>
        </div>
        <span className="my-2 ml-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore
        </span>
        <button className="bg-primary max-w-[150px] rounded border-2 border-solid border-black px-6 py-2 font-[Poppins] font-bold transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:mb-0">
          Get in touch
        </button>
      </div>

      <div className="mx-3 flex flex-grow justify-center">
        <div className="relative flex max-w-[500px] flex-grow basis-[300px] justify-center">
          <img src={portrait} className="w-100 z-[2] m-auto h-[400px]" />
          <div className="bg-primary absolute bottom-0 left-0 right-0 z-[1] h-[60%] rounded-3xl shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
}
