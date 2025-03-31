import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border transition duration-200 hover:shadow-xl dark:border-gray-500/[0.1] dark:bg-fill-card dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(20,20,20)",
        backgroundColor: "radial-gradient(circle, rgba(20,20,20,1) 0%, rgba(16,16,16,1) 50%)"
      }}
    >
      <div className={`${id === 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="lg:text-3xl max-w-96 z-10 font-sans text-lg font-bold">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['React.js', 'Next.js', 'Typescript'].map((item) => (
                  <span key={item} className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-gray-500/[0.1]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#0c0c44]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-lg text-center bg-[#0c0c44]" />
                {['React.js', 'Next.js', 'Typescript'].map((item) => (
                  <span key={item} className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg-opacity-100 rounded-lg text-center bg-gray-500/[0.1]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
