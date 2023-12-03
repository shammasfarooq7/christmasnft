import { ReactComponent as EasyPaymentSvg } from "../assets/svg/easy-payment.svg"
import { ReactComponent as HighQualitySvg } from "../assets/svg/high-quality.svg"
import { ReactComponent as HugeCollectionSvgg } from "../assets/svg/huge-collection.svg"
import { ReactComponent as TopResourceSvg } from "../assets/svg/top-resource.svg"


const Card = ({ heading, text, className, icon }) => {
    return (
        <div className={`rounded-3xl border border-[#E8E8E840] px-8 py-12 w-[277px] h-fit ${className}`}>
            <div className="mb-8">
                {icon}
            </div>
            <div>
                <div className="font-bold text-[28px] w-[121px] leading-tight">
                    {heading}
                </div>
                <p className="pt-6 text-[#B7B4BB] text-[17px]">
                    {text}
                </p>
            </div>

        </div>
    )
}

const ChooseUsCards = () => {
    return (
        <div className="flex space-x-[30px] mt-[130px]">
            <Card heading={"Huge collection"} text={"So many unique collections to buy to gobeyond the digital space."} icon={<HugeCollectionSvgg />} />
            <Card heading={"High quality"} text={"Our collectionsthey include unique specimens from world-famous artists."} className={"!mt-12"} icon={<HighQualitySvg />} />
            <Card heading={"Top resource"} text={"Graphicscrafted with care in eachpixels, for unique NFTs."} className={"mt-6"} icon={<TopResourceSvg />} />
            <Card heading={"Easy payment"} text="Easily connect your wallet or create it in just a few clicks, directly from our site. " icon={<EasyPaymentSvg />} />

        </div>
    )
}

export default ChooseUsCards