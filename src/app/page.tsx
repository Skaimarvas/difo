import image from "@/assets/636.png";
import copy from "@/assets/copy.png";
import external from "@/assets/external.png";
import ProgressBar from "@/components/atoms/ProgressBar";
import HorizontalLines from "@/components/molecules/HorizontalLines";
import VerticalLines from "@/components/molecules/VerticalLines";
import TimeSection from "@/components/TimeSection";
import Image from "next/image";
import icon from "@/assets/icon.png";
import lock from "@/assets/kilit.png";

export default function Home() {
  return (
    <div className="flex lg:flex-wrap flex-row lg:justify-center justify-between h-screen w-full px-5 lg:px-2 sm-px-1">
      <section className="flex">
        <div className="block">
          <VerticalLines />
        </div>
        <div className="flex flex-col lg:w-[500px] w-[700px] sm:min-w-[300px]  p-4">
          <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] bg-clip-text text-transparent text-3xl sm:text-xl text-center font-extrabold">
            Pre-sale planning of the $DIFO Token
          </h2>
          <p className="text-center text-xl sm:text-lg mt-4">
            The highly anticipated discounted public sale rounds of $DIFO token
            are now live.
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] my-4 sm:hidden"></div>
          <h4 className="bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent  text-center text-lg sm:text-sm sm:mt-5 font-extrabold">
            Round 1 Total Token: 43,950.000 $DIFO
          </h4>
          <ProgressBar />
          <TimeSection />
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] opacity-50"></div>
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00]"></div>
          <div className="my-4">
            <h4 className="text-[#FFAC00] text-2xl text-center font-bold">
              Total Token Supply (TTS):
            </h4>
            <p className="text-center">
              <span className="font-bold">MAX:</span> It is limited to
              879,000,000 million $DIFO.
            </p>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00]"></div>
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] opacity-50"></div>

          <div className="mt-10">
            <h2 className="bg-gradient-to-r from-[#016DD0] to-[#52FF00] bg-clip-text text-transparent text-3xl sm:text-xl text-center font-extrabold">
              $DIFO Smart Contract Address:
            </h2>
            <div className="flex justify-center relative bg-black my-6">
              <div className="rounded-md p-[2px] bg-gradient-to-r from-[#00D1FF] to-[#FFAC00]">
                <div className="flex items-center gap-2 p-2 justify-center h-10 w-full bg-black rounded-md">
                  <span className=" text-white font-bold text-transparent bg-clip-text sm:text-xs ">
                    0x0E3FE9943Dc07B6eBF8D272e69BD6988330eeb99
                  </span>
                  <button>
                    <Image height={20} width={20} src={copy} alt="copy" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block ">
          <VerticalLines />
        </div>
      </section>
      <div className="lg:hidden">
        <VerticalLines />
      </div>
      <section className="flex">
        <div className="hidden lg:block sm:hidden">
          <VerticalLines />
        </div>
        <div className="flex flex-col lg:w-[500px] w-[700px] sm:min-w-[300px] p-4 sm:p-2">
          <h2 className="bg-gradient-to-r from-[#016DD0] to-[#52FF00] bg-clip-text text-transparent text-3xl text-center font-extrabold">
            Pre-sale Details of the $DIFO Token
          </h2>
          <div className="flex justify-center gap-2 mt-8">
            <div className="flex justify-center relative bg-black">
              <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
                <div className="flex gap-2 p-4 justify-center h-48 lg:w-[200px] w-[300px] bg-black rounded-lg">
                  <div>
                    <h5 className="text-[#99EDFF] lg:text-sm">Public Sale</h5>
                    <p className="lg:text-sm">
                      The public sale will have 3 rounds. Round 1 will start on
                      October 15 at 12:00 UTC.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-12px] bg-black px-4">
                <h4 className=" bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-2xl lg:text-base text-center font-extrabold ">
                  Type of sale
                </h4>
              </div>
            </div>
            <div className="flex justify-center relative bg-black">
              <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
                <div className="flex  gap-2 p-4 justify-center h-48 lg:w-[200px] w-[300px] bg-black rounded-lg">
                  <div>
                    <h5 className="text-[#99EDFF] lg:text-sm">
                      First come, first served
                    </h5>
                    <p className="lg:text-sm">
                      The public sale rounds of the $DIFO token will be
                      conducted on a first-come, first-served basis, exclusively
                      during the opening of Difo Launchpad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-12px] bg-black px-4">
                <h4 className=" bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-2xl lg:text-base text-center font-extrabold ">
                  Token Sale Format
                </h4>
              </div>
            </div>
          </div>
          <div className=" sm:hidden my-5">
            <HorizontalLines />
          </div>
          <div className="relative hidden  sm:block my-16 w-full">
            <div className="h-1 w-full bg-gradient-to-r from-[#016DD000] via-[#F3BA2F] to-[#016DD000]"></div>
            <div className="absolute top-[-24px]">
              <Image width={60} height={60} src={icon} alt="copy" />
            </div>
            <div className="absolute top-[-32px] left-[210px] bg-black">
              <Image width={70} height={70} src={lock} alt="lock" />
            </div>
            <div className="absolute top-[-24px] right-0">
              <Image width={60} height={60} src={icon} alt="copy" />
            </div>
          </div>
          <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] sm:bg-gradient-to-r sm:from-[#00D1FF] sm:to-[#AB00FF] bg-clip-text text-transparent text-3xl sm:text-2xl text-center sm:text-left font-extrabold  mb-2">
            The buy-back protection program
          </h2>
          <div className="flex sm:flex-row-reverse sm:gap-2 ">
            <div className="flex flex-col gap-2 items-start">
              <p>
                If the $DIFO token falls below the public sale price within the
                first 6 months after its initial listing, Difo Finance commits
                to repurchasing $DIFO tokens at a 90% protection level.
              </p>
              <p className="text-[#00E0FF] font-semibold sm:hidden">
                You can check out detailed information about the buyback
                protection program below.
              </p>
              <div className="flex justify-center relative bg-black my-2 sm:hidden">
                <div className="rounded-md p-[2px] bg-gradient-to-r from-[#EE1D52] to-[#00D1FF]">
                  <button className="flex items-center justify-center gap-2 p-5 h-10 w-full bg-black hover:bg-gradient-to-r from-[#EE1D52] to-[#00D1FF] rounded-md">
                    <span className="text-[#00B2FF]">Learn More</span>
                    <Image
                      width={20}
                      height={20}
                      src={external}
                      alt="external"
                    />
                  </button>
                </div>
              </div>
            </div>
            <Image
              className="w-[400px] h-[300px] sm:w-[200px] sm:h-[180px] lg:w-[300px] lg:h-[250px]"
              src={image}
              alt="image"
            />
          </div>
          <p className="hidden sm:block text-[#00E0FF] font-semibold sm:font-normal">
            You can check out detailed information about the buyback protection
            program below.
          </p>
          <div className="hidden sm:flex justify-center relative bg-black my-2 w-full">
            <div className="rounded-md p-[2px] bg-gradient-to-r from-[#EE1D52] to-[#00D1FF] w-full">
              <button className="flex items-center justify-center gap-2 p-5 h-10 w-full bg-black hover:bg-gradient-to-r from-[#EE1D52] to-[#00D1FF] rounded-md">
                <span className="text-[#00B2FF]">Learn More</span>
                <Image width={20} height={20} src={external} alt="external" />
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <VerticalLines />
        </div>
      </section>
    </div>
  );
}
