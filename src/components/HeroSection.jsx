import portrait from "../assets/portrait.png";

export default function HeroSection() {
  return (
    <div className="min-h-page-height bg-gradient flex content-center">
      <div className="m-auto">
        <div className="ml-0 flex flex-col justify-around p-7 md:ml-3 md:flex-row">
          <div className="mx-auto mb-3 mr-0 flex max-w-[600px] flex-grow basis-[300px] border-spacing-1 flex-col justify-center rounded-3xl bg-white bg-opacity-10 p-4 shadow-sm md:mb-0 lg:mr-5 lg:p-7">
            <span className="text-blue-darkest ml-[0.25em] text-base font-semibold opacity-70">
              Hey, I'm Gabe
            </span>
            <div className="flex flex-col">
              <h2
                className="animate-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text pb-2 pt-1 
            text-7xl font-bold tracking-tighter
            text-transparent"
              >
                Software <br></br> Engineer
              </h2>
            </div>
            <span className="my-2 ml-1 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore
            </span>
            <button className="border-blue-darker hover:bg-blue-darker text-blue-darkest max-w-[150px] rounded border bg-transparent px-4 py-2 font-semibold transition duration-300 ease-in-out hover:border-transparent hover:text-white">
              Get in touch
            </button>
          </div>

          <div className="mx-3 flex flex-grow justify-center">
            <div className="relative flex flex-grow basis-[300px] justify-center">
              <img
                src={portrait}
                className="w-100 z-[2] mx-auto max-h-[500px] min-h-[350px]"
              />
              <div className="bg-primary animate-pulse-long absolute bottom-0 left-0 right-0 z-[1] mx-auto h-[60%] max-w-[600px] self-center rounded-3xl opacity-75 shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
