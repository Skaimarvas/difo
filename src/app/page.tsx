import Time from "@/components/Time";

export default function Home() {
  return (
    <div className="flex flex-row justify-between h-screen w-full">
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
      </section>
      {/* <div className="bg-gradient-to-b from-purpleTransparent via-purpleOpaque to-purpleTransparent h-2 w-full rotate-90"></div> */}
      <section className="flex flex-col w-1/2">
        <h2 className="bg-gradient-to-r from-[#016DD0] to-[#52FF00] bg-clip-text text-transparent text-3xl text-center font-extrabold">
          Pre-sale Details of the $DIFO Token
        </h2>
      </section>
      {/*    <div className="bg-gradient-to-b from-purpleTransparent via-purpleOpaque to-purpleTransparent h-2 w-full rotate-90"></div> */}
    </div>
  );
}
