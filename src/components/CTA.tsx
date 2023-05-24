import smilepurple from "../assets/smilepurple.svg";
import { RegisterBtn } from "./RegisterBtn";

export const CTA = () => {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-[4.375rem] flex flex-col justify-center items-center gap-y-16">
        <h2 className="text-white text-[2rem] font-light"><span className="purple-text-highlight">Free</span> membership</h2>
        <div className="grid grid-cols-4 w-full gap-7 justify-items-center">
          <div className="cta-card">
            <img className="pb-2" src={smilepurple} alt="" />
            <h4 className="font-semibold text-lg">Lorem ipsum</h4>
            <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="cta-card">
            <img className="pb-2" src={smilepurple} alt="" />
            <h4 className="font-semibold text-lg">Lorem ipsum</h4>
            <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="cta-card">
            <img className="pb-2" src={smilepurple} alt="" />
            <h4 className="font-semibold text-lg">Lorem ipsum</h4>
            <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="cta-card">
            <img className="pb-2" src={smilepurple} alt="" />
            <h4 className="font-semibold text-lg">Lorem ipsum</h4>
            <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <RegisterBtn />
      </div>
    </section>
  )
}
