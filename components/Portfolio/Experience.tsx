import { GoDotFill } from "react-icons/go";
import { data } from "../../constants";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="text-4xl md:text-5xl sm:text-center font-bold my-5 mb-7 md:my-3 mx-5">
        Work Experience
      </h1>
      {data.workExperience.map((item) => {
        return (
          <div className="flex px-2 my-1 justify-center items-start">
            <div className="w-[50vw] ml-4 text-left md:text-right mr-4">
              <h1 className="text-lg md:text-2xl font-bold">
                {item.company_name}
              </h1>
              <p className="italic text-muted-foreground">{item.duration}</p>
            </div>
            <div className="flex">
              <div className="mr-3 flex flex-col">
                <div
                  className="text-4xl border-4 border-dashed rounded-full"
                  style={{
                    color: item.color,
                  }}
                >
                  <GoDotFill />
                </div>
                <div className="border-r-4 m-auto w-1 border-dashed mt-1 h-full" />
              </div>
              <div className="w-[50vw]">
                <h1 className="text-2xl font-bold">{item.profession}</h1>
                <div className="w-fit lg:w-[400px] mr-4 md:pl-8">
                  {item.description.map((point) => {
                    return <p className="my-4">{point}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <h1 className="text-4xl md:text-5xl sm:text-center font-bold my-5 mb-7 md:my-3 mx-5">
        Education
      </h1>
      {data.education.map((item) => {
        return (
          <div className="flex px-2 my-1 justify-center items-start">
            <div className="w-[50vw] ml-4 text-left md:text-right mr-4">
              <h1 className="text-lg md:text-2xl font-bold">
                {item.degree_name}
              </h1>
              <p className="italic text-muted-foreground">{item.duration}</p>
            </div>
            <div className="flex">
              <div className="mr-3 flex flex-col">
                <div
                  className="text-4xl border-4 border-dashed rounded-full"
                  style={{
                    color: item.color,
                  }}
                >
                  <GoDotFill />
                </div>
                <div className="border-r-4 m-auto w-1 border-dashed mt-1 h-full" />
              </div>
              <div className="w-[50vw]">
                <h1 className="text-xl w-2/3 font-bold">
                  {item.university_name}
                </h1>
                <div className="w-fit lg:w-[400px] mr-4 md:pl-8">
                  {item.description.map((point) => {
                    return <p className="my-4">{point}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
