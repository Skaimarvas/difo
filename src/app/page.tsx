import Time from "@/components/Time";
import Image from "next/image";
import copy from "@/assets/copy.png";
import image from "@/assets/636.png";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-between h-screen w-full">
      {/* <div className="bg-gradient-to-b from-purpleTransparent via-purpleOpaque to-purpleTransparent h-2 w-full rotate-90"></div> */}
      <section className="flex flex-col w-1/2">
        <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] bg-clip-text text-transparent text-3xl text-center font-extrabold">
          Pre-sale planning of the $DIFO Token
        </h2>
        <p className="text-center">
          The highly anticipated discounted public sale rounds of $DIFO token
          are now live.
        </p>
        <hr />
        <h4 className="bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent  text-center font-extrabold">
          Round 1 Total Token: 43,950.000 $DIFO
        </h4>
        <div className="flex flex-col w-full">
          <div className="flex justify-end">
            <span className="bg-gradient-to-r from-[#AB00FF] to-[#FFAC00] bg-clip-text text-transparent text-right font-extrabold">
              %100
            </span>
          </div>
          <div className="flex justify-center">
            <span>progress bar</span>
          </div>
        </div>
        <div className="flex justify-evenly relative">
          <Time timeData="21" timeType="Days" />
          <Time timeData="12" timeType="Hours" />
          <Time timeData="06" timeType="Minutes" />
          <Time timeData="57" timeType="Minutes" />
          <div className="absolute top-5">
            <span className="bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-5xl text-center font-extrabold">
              :
            </span>
          </div>
        </div>
        <hr />
        <h4 className="text-[#FFAC00] text-2xl text-center font-bold">
          Total Token Supply (TTS):
        </h4>
        <p className="text-center">
          <span className="font-bold">MAX:</span>It is limited to 879,000,000
          million $DIFO.
        </p>
        <hr />
        <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] bg-clip-text text-transparent text-3xl text-center font-extrabold">
          $DIFO Smart Contract Address:
        </h2>
        <div className="flex justify-center relative bg-black">
          <div className="rounded-xl p-1 bg-gradient-to-r from-[#00D1FF] to-[#FFAC00]">
            <div className="flex items-center gap-2 p-2 justify-center h-8 w-full bg-black rounded-lg">
              <span className=" text-white font-bold text-transparent bg-clip-text ">
                0x0E3FE9943Dc07B6eBF8D272e69BD6988330eeb99
              </span>
              <Image src={copy} alt="copy" />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="bg-gradient-to-b from-purpleTransparent via-purpleOpaque to-purpleTransparent h-2 w-full rotate-90"></div> */}
      <section className="flex flex-col w-1/2">
        <h2 className="bg-gradient-to-r from-[#016DD0] to-[#52FF00] bg-clip-text text-transparent text-3xl text-center font-extrabold">
          Pre-sale Details of the $DIFO Token
        </h2>
        <div className="flex justify-center gap-2 mt-8">
          <div className="flex justify-center relative bg-black">
            <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
              <div className="flex items-center gap-2 p-4 justify-center h-32 w-[300px] bg-black rounded-lg">
                <div>
                  <h5>Public Sale</h5>
                  <p>
                    The public sale will have 3 rounds. Round 1 will start on
                    October 15 at 12:00 UTC.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[-12px] bg-black px-4">
              <h4 className=" bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-2xl text-center font-extrabold ">
                Type of sale
              </h4>
            </div>
          </div>
          <div className="flex justify-center relative bg-black">
            <div className="rounded-xl p-1 bg-gradient-to-r from-[#FFAC00] to-[#AB00FF]">
              <div className="flex items-center gap-2 p-4 justify-center h-32 w-[300px] bg-black rounded-lg">
                <div>
                  <h5>Public Sale</h5>
                  <p>
                    The public sale will have 3 rounds. Round 1 will start on
                    October 15 at 12:00 UTC.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[-12px] bg-black px-4">
              <h4 className=" bg-gradient-to-r from-[#FFAC00] to-[#AB00FF] bg-clip-text text-transparent text-2xl text-center font-extrabold ">
                Type of sale
              </h4>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="bg-gradient-to-r from-[#52FF00] to-[#016DD0] bg-clip-text text-transparent text-3xl text-center font-extrabold">
          The buy-back protection program
        </h2>
        <div className="flex">
          <div className="flex flex-col">
            <p>
              If the $DIFO token falls below the public sale price within the
              first 6 months after its initial listing, Difo Finance commits to
              repurchasing $DIFO tokens at a 90% protection level.
            </p>
            <p>
              You can check out detailed information about the buyback
              protection program below.
            </p>
            <button>Learn More</button>
          </div>
          <Image src={image} alt="image" />
        </div>
      </section>
      {/*    <div className="bg-gradient-to-b from-purpleTransparent via-purpleOpaque to-purpleTransparent h-2 w-full rotate-90"></div> */}
    </div>
  );
}
