import { M_PLUS_Rounded_1c } from "next/font/google";
import { Button } from "../ui/button";
import UserBadge from "../user-badge";
import Image from "next/image";
import Link from "next/link";

const rounded = M_PLUS_Rounded_1c({
  weight: "800",
  subsets: ["cyrillic-ext"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <div
        className={`text-[2.8rem] sm:text-[4rem] lg:text-[4rem] font-bold w-full   text-center leading-sm lg:leading-none tracking-tight flex-col ${rounded.className} uppercase`}
      >
        <h1>
          Create
          <span className="text-indigo-600 font-bold mx-6">new Development</span>
          <br />
          <span className="custom-h1-border-white text-red-200">
            experiences
          </span>{" "}
          with{" "}
          <span className="text-brand/yellow drop-shadow-[4px_4px_var(--tw-shadow-color)] shadow-yellow-600 custom-h1-border-black">
            collaboration{" "}
          </span>
          and{" "}
          <span className="text-blue-200 custom-dotted-border px-6 py-2 inline-block mt-4 rotate-3 w-[5rem]">
            building
          </span>{" "}
          <span className="text-purple-400">With the help of AI</span>
        </h1>
      </div>

      <div
        className="bg-slate-400/20 backdrop-blur-lg p-3 md:w-[1000px]  mt-[-10px] flex rounded-xl  z-20"
        style={{
          perspective: "1000px",
          transform: "rotateX(-10deg)",
        }}
      >
        <div
          className="
          overflow-hidden
          after:absolute
          after:bottom-0
          after:right-0
          after:left-0
          after:dark:bg-gradient-to-t
          after:dark:from-background
          after:dark:via-background/50
          after:to-transparent
          after:w-full
          after:h-[50%]
          after:z-10
        "
        />

        <div className="absolute w-full h-12 lg:h-64 blur-3xl rounded-full aspect-square bg-brand/yellow/20 -z-10 -translate-y-6"></div>

        {/* Badges */}
        <UserBadge
          type="discussion_dynamo"
          className="absolute h-16 w-20  -z-10 hidden lg:block -left-12 -top-10 -rotate-[20deg]"
        />

        <UserBadge
          type="uiux_architect"
          className="absolute h-16 w-20  -z-10 hidden lg:block -right-14 top-32 rotate-[30deg]"
        />
        <UserBadge
          type="deep_learning_disciple"
          className="absolute h-16 w-20  -z-10 hidden lg:block -left-14 top-1/2 -rotate-[12deg]"
        />

        <div className="border-2 border-slate-500/20 rounded-xl z-20">
          <Image
            src={"/dashboard-image.png"}
            alt="hero-image"
            width={1896}
            height={871}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center">
        <Button className="bg-yellow-400 text-black">
          <Link href={"/join-environments"}>Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
