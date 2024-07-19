import { GoDotFill } from "react-icons/go";

const Experience = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl sm:text-center font-bold my-5 mb-7 md:my-3 mx-5">
        My Work Experience
      </h1>
      <div className="flex px-2 my-1 justify-center items-start">
        <div className="w-[50vw] ml-4 text-left md:text-right mr-4">
          <h1 className="text-lg md:text-2xl font-bold">Consultant, Optanium</h1>
          <p className="italic text-muted-foreground">Sept 2016, Aug 2014</p>
        </div>
        <div className="flex">
          <div className="mr-3 flex flex-col">
            <div className="text-green-700 text-4xl border-4 border-dashed rounded-full">
              <GoDotFill />
            </div>
            <div className="border-r-4 m-auto w-1 border-dashed mt-1 h-full" />
          </div>
          <div className="w-[50vw]">
            <h1 className="text-2xl font-bold">Full Stack Developer</h1>
            <div className="w-fit lg:w-[400px] mr-4 md:pl-8">
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique quaerat accusantium, rem distinctio, aperiam harum
                omnis fuga voluptas, placeat voluptate sunt deleniti. Incidunt
                necessitatibus laborum non eos aliquid autem itaque!
              </p>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique quaerat accusantium, rem distinctio, aperiam harum
                omnis fuga voluptas, placeat voluptate sunt deleniti. Incidunt
                necessitatibus laborum non eos aliquid autem itaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
