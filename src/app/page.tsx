import AuthGuard from "@/components/AuthGuard";
import Advertisement from "@/components/Advertisement";
import IconImage from "@/components/IconImage";
import AnimationTitle from "@/components/AnimationTitle";

export default function Home() {
  return (
    <AuthGuard>
      <div className="relative">
        <main className="py-20 mx-2 sm:ms-10 md:ms-16 xl:ms-[100px] mt-[68px] flex flex-col gap-6">
          <div>
            <AnimationTitle duration={0.5}>
              <span className="font-semibold text-black text-[40px] linhi leading-[135%]">
                Discover The
              </span>
            </AnimationTitle>
            <AnimationTitle duration={0.8}>
              <h1 className="font-light italic block text-[40px] text-main  leading-[120%]">
                Newest Real Estate Offerings
              </h1>
            </AnimationTitle>
            <AnimationTitle duration={1.1}>
              <p className="text-xl leading-[150%] text-black">
                Stay ahead with our newest real estate oppertunities .
              </p>
            </AnimationTitle>
          </div>
          <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
            {Array.from({ length: 5 }).map((_, i) => (
              <Advertisement i={i} key={i} />
            ))}
          </div>
          <div className="p-10 ms-auto w-[278px] ">
            <p className="font-semibold cursor-pointer w-fit">
              See All Properties{" "}
              <svg
                className="w-5 h-5 rotate-45 inline stroke-black dark:stroke-white"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14m0 0l6-6m-6 6l-6-6" />
              </svg>
            </p>
          </div>
        </main>
        <IconImage />
      </div>
    </AuthGuard>
  );
}
