import Logo from "../assets/images/Logo.png"
import InstaLogo from "../assets/images/Instagram.png"
import TwitterLogo from "../assets/images/twitter.png"
import YoutubeLogo from "../assets/images/youtube.png"

const Footer = () => {
    return (
        <div className="py-20">
            <div className="flex items-center justify-between w-full">
                <div className="">
                    <div className="flex items-center space-x-4">
                        <img src={Logo} alt="" />
                        <div className="font-semibold text-[40px]">Chainblock <span className="text-[#FA24FA] font-semibold text-[40px] leading-tight">
                            ART
                        </span>
                        </div>
                    </div>
                    <div className="text-[#B7B4BB] font-[17px] mt-10">
                        Follow us on social media to stay updated on our collections, new artists, new works and much more.
                    </div>
                    <div className="flex items-center space-x-5 mt-8">
                        <img src={TwitterLogo} alt="" />
                        <img src={InstaLogo} alt="" />
                        <img src={YoutubeLogo} alt="" />
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-10 w-full ">
                    <div className="flex flex-col">
                        <span className="text-[22px] font-bold">Quick Link</span>
                        <span className="text-[#B7B4BB] text-[17px] mt-4">Collection</span>
                        <span className="text-[#B7B4BB] text-[17px] mt-2">Roadmap</span>
                        <span className="text-[#B7B4BB] text-[17px] mt-2">FAQs</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[22px] font-bold">Quick Link</span>
                        <span className="text-[#B7B4BB] text-[17px] mt-4">Artists</span>
                        <span className="text-[#B7B4BB] text-[17px] mt-2">Choose</span>
                        <span className="text-[#B7B4BB] text-[17px] mt-2">Start selling</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-20">
                <span className="text-[#B7B4BB] text-[17px]">Copyright © 2023 More. All Rights Reserved.</span>
                <div className="flex items-center justify-end space-x-5">
                    <a href="" target="_blank" className="text-[#B7B4BB] text-[17px]">Privacy policy</a>
                    <a href="" target="_blank" className="text-[#B7B4BB] text-[17px]">Terms of Use</a>
                </div>
            </div>

        </div>
    )
}
export default Footer