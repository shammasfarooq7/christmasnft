import ZeroPercenImg from "../assets/images/zero-percent.png"
import HundredPercemtImg from "../assets/images/hundred-percent.png"
import FiftyPercentImg from "../assets/images/fifty-percent.png"

const Card = ({ heading, text, phaseText, className, image }) => {
    return (
        <div className={`rounded-3xl border border-[#E8E8E840] pt-5 px-7 pb-10 w-[368px] h-fit ${className}`}>
            <div className="flex items-center justify-between">
                <span className="text-gradient-high-quality ">{phaseText}</span>
                <img src={image} />
            </div>
            <div className="mt-8">
                <div className="font-bold text-[32px] w-[121px] leading-tight">
                    {heading}
                </div>
                <p className="pt-10 text-[#B7B4BB] text-[19px]">
                    {text}
                </p>
            </div>

        </div>
    )
}

const RoadMapCards = () => {
    return (
        <div className="flex space-x-[30px] mt-[130px]">
            <Card phaseText={"Phase 01"} heading={"Choose"} text={"Choose the one you like from our unique collections. You are spoiled for choice."} image={ZeroPercenImg} />
            <Card phaseText={"Phase 02"} heading={"Connect"} text={"Connect your wallet or, if you don't have one yet, create it directly from our site in a few simple steps."} image={FiftyPercentImg} />
            <Card phaseText={"Phase 03"} heading={"Pay"} text={"Get your awesome NFT in seconds. Share your purchase on social pages and come back to visit us soon! "} image={HundredPercemtImg} />
        </div>
    )
}

export default RoadMapCards