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
    <div className="flex md:flex-wrap flex-row lg:justify-center justify-center min-h-screen w-full lg:w-[1024px] sm:w-fit px-5 lg:px-2 sm:px-0">
      {/* Section 1 --> */}
      <section className="flex">
        <div className="block">
          <VerticalLines />
        </div>
        <div className="flex flex-col lg:w-[450px] md:w-[800px] w-[700px] sm:min-w-[300px] sm:max-w-[375px] p-4 sm:p-2">
          <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] bg-clip-text text-transparent text-3xl lg:text-2xl sm:text-xl text-center font-extrabold">
            Pre-sale planning of the $DIFO Token
          </h2>
          <p className="text-center text-xl lg:text-lg sm:text-base sm:w-[320px] mx-auto mt-4 ">
            The highly anticipated discounted public sale rounds of $DIFO token
            are now live.
          </p>
          {/* Horizontal Line 1 --> */}
          <div className="flex h-[2px] w-full bg-gradient-to-r from-purpleOpaque via-[#FF5C00] to-purpleOpaque my-4 sm:hidden"></div>
          <h4 className="bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent  text-center text-lg lg:text-base sm:text-sm sm:mt-5 font-extrabold">
            Round 1 Total Token: 43,950.000 $DIFO
          </h4>
          <ProgressBar />
          <TimeSection />
          {/* Horizontal Line 1 --> */}
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] sm:from-[#016DD000] sm:via-[#AB00FF] sm:to-[#016DD000]  opacity-50"></div>
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] sm:from-[#016DD000] sm:via-[#AB00FF] sm:to-[#016DD000]"></div>
          <div className="my-4">
            <h4 className="text-[#FFAC00] text-2xl lg:text-xl  text-center font-bold">
              Total Token Supply (TTS):
            </h4>
            <p className="text-center text-base">
              <span className="font-bold">MAX:</span> It is limited to
              879,000,000 million $DIFO.
            </p>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] sm:from-[#016DD000] sm:via-[#AB00FF] sm:to-[#016DD000]"></div>
          <div className="h-1 w-full bg-gradient-to-r from-[#0500FF00] via-[#FF5C00] to-[#0500FF00] sm:from-[#016DD000] sm:via-[#AB00FF] sm:to-[#016DD000] opacity-50 "></div>

          <div className="mt-10">
            <h2 className="bg-gradient-to-r from-[#016DD0] to-[#52FF00] bg-clip-text text-transparent text-3xl lg:text-2xl sm:text-xl text-center font-extrabold">
              $DIFO Smart Contract Address:
            </h2>
            {/* Smart Contract Address */}
            <div className="flex justify-center relative bg-black my-6">
              <div className="rounded-md p-[2px] bg-gradient-to-r from-[#00D1FF] to-[#FFAC00]">
                <div className="flex justify-evenly md:justify-between items-center gap-2 p-2  h-11 w-[550px] lg:w-[400px] md:w-[600px] sm:w-[320px] bg-black rounded-md">
                  <span className=" text-white text-lg text-transparent bg-clip-text lg:text-sm md:text-base sm:text-[10px] ">
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
        <div className="hidden md:block ">
          <VerticalLines />
        </div>
      </section>
      <div className="md:hidden">
        <VerticalLines />
      </div>
      {/* Section 2 --> */}
      <section className="flex">
        <div className="hidden md:block sm:hidden">
          <VerticalLines />
        </div>
        <div className="flex flex-col lg:w-[450px] md:w-[800px] w-[700px] sm:min-w-[300px] sm:max-w-[375px] p-4 sm:p-2">
          <h2 className="bg-gradient-to-r from-[#016DD0] to-[#52FF00] bg-clip-text text-transparent text-3xl lg:text-2xl sm:text-xl text-center font-extrabold">
            Pre-sale Details of the $DIFO Token
          </h2>
          {/* Type of Sale --> */}
          <div className="flex justify-center gap-2 md:gap-24 sm:gap-2 mt-8 mb-1 sm:w-[320px] mx-auto">
            <div className="flex justify-center relative bg-black">
              <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
                <div className="flex gap-2 p-4 justify-center h-[170px] sm:h-48 lg:w-[200px] w-[300px] sm:w-[150px] bg-black rounded-lg">
                  <div>
                    <h5 className="text-[#99EDFF] lg:text-xs sm:text-[10px] ">
                      Public Sale
                    </h5>
                    <p className="lg:text-xs sm:text-[10px] ">
                      The public sale will have 3 rounds. Round 1 will start on
                      October 15 at 12:00 UTC.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-10px] bg-black px-4 sm:px-2 ">
                <h4 className=" bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-xl lg:text-base sm:text-xs text-center font-extrabold ">
                  Type of sale
                </h4>
              </div>
            </div>
            <div className="flex justify-center relative bg-black">
              <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
                <div className="flex  gap-2 p-4 justify-center h-[170px] sm:h-48 lg:w-[200px] w-[300px] sm:w-[150px] bg-black rounded-lg">
                  <div>
                    <h5 className="text-[#99EDFF]  lg:text-xs sm:text-[10px] ">
                      First come, first served
                    </h5>
                    <p className="lg:text-xs sm:text-[10px] ">
                      The public sale rounds of the $DIFO token will be
                      conducted on a first-come, first-served basis, exclusively
                      during the opening of Difo Launchpad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-10px] bg-black px-4 sm:px-2">
                <h4 className=" bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-xl lg:text-base sm:text-xs text-center font-extrabold ">
                  Token Sale Format
                </h4>
              </div>
            </div>
          </div>
          <div className=" sm:hidden my-5 lg:my-6">
            <HorizontalLines />
          </div>
          {/* Mobil Icons Section -->*/}
          <div className="relative hidden  sm:flex sm:justify-center my-16 mx-auto w-[320px]">
            <div className=" h-1 w-[200px] bg-gradient-to-r from-[#016DD000] via-[#F3BA2F] to-[#016DD000]"></div>
            <div className="absolute top-[-26px] left-[0px]">
              <Image width={60} height={60} src={icon} alt="copy" />
            </div>
            <div className="absolute top-[-35px] left-[125px] bg-black">
              <Image width={70} height={70} src={lock} alt="lock" />
            </div>
            <div className="absolute top-[-26px] right-[0px]">
              <Image width={60} height={60} src={icon} alt="copy" />
            </div>
          </div>
          {/* Buy Protection -->*/}
          <div className="sm:flex sm:flex-col sm:w-[320px] mx-auto">
            <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] sm:bg-gradient-to-r sm:from-[#00D1FF] sm:to-[#AB00FF] bg-clip-text text-transparent text-4xl lg:text-2xl sm:text-lg text-left sm:text-left font-extrabold  my-3">
              The buy-back protection program
            </h2>
            <div className="flex sm:flex-row-reverse  sm:gap-2 ">
              <div className="flex flex-col gap-4 md:gap-8 sm:gap-4 items-start">
                <p className="sm:text-xs lg:text-sm">
                  If the $DIFO token falls below the public sale price within
                  the first 6 months after its initial listing, Difo Finance
                  commits to repurchasing $DIFO tokens at a 90% protection
                  level.
                </p>
                <p className="text-[#00E0FF] lg:text-sm font-semibold sm:hidden">
                  You can check out detailed information about the buyback
                  protection program below.
                </p>
                <div className="flex justify-center relative bg-black my-2 sm:hidden">
                  <div className="rounded-md p-[2px] bg-gradient-to-r from-[#EE1D52] to-[#00D1FF]">
                    <button className="flex items-center justify-between gap-2 p-5 h-11 w-[200px] bg-black hover:bg-gradient-to-r from-[#EE1D52] to-[#00D1FF] rounded-md">
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
                className="w-[400px] h-[300px] lg:w-[200px] lg:h-[150px] md:w-[300px] md:h-[250px] sm:w-[140px] sm:h-[120px]  "
                src={image}
                alt="image"
              />
            </div>
            <p className="hidden sm:block text-[#00E0FF] font-semibold sm:font-normal sm:text-xs">
              You can check out detailed information about the buyback
              protection program below.
            </p>
            {/* Learn More Mobile Version --> */}
            <div className="hidden sm:flex justify-center relative bg-black my-4 w-full">
              <div className="rounded-md p-[2px] bg-gradient-to-r from-[#EE1D52] to-[#00D1FF] w-full">
                <button className="flex items-center justify-center gap-2 p-5 h-10 w-full bg-black hover:bg-gradient-to-r from-[#EE1D52] to-[#00D1FF] rounded-md">
                  <span className="text-[#00B2FF]">Learn More</span>
                  <Image width={20} height={20} src={external} alt="external" />
                </button>
              </div>
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
