import Button from "../../components/button";
import { ReactComponent as UserListSvg } from "../../assets/svg/user-list.svg"
import { ReactComponent as PageDividerSvg } from "../../assets/svg/page-divider.svg"
import { ReactComponent as LinkIcon } from "../../assets/svg/link-icon.svg"
import { ReactComponent as StarsIcon } from "../../assets/svg/stars.svg"
import Logo from "../../assets/images/Logo.png"
import ArtCollectionImages from "../../components/art-collection-images";
import SoccerCollectionImages from "../../components/soccer-collection-images";
import ChristmasCollectionImages from "../../components/christmas-collection-images";
import Footer from "../../components/footer";

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            {/* main */}
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <div className="flex items-center space-x-3">
                        <img src={Logo} />
                        <div className="font-semibold text-[40px]">Chainblock
                            <div className="text-[#FA24FA] font-semibold text-[40px] leading-tight">
                                ART
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center space-x-8 ml-[130px]">
                        <div className="text-lg font-bold">Home</div>
                        <div className="text-lg font-bold">Collection</div>
                        <div className="text-lg font-bold">Choose</div>
                        <div className="text-lg font-bold">Roadmap</div>
                        <div className="text-lg font-bold">Artists</div>
                    </div>
                    <Button className={"ml-[170px]"}>CONNECT WALLET</Button>
                </div>

                <div className="flex items-center space-x-2 mt-[150px]">
                    <div className="w-[520px]">
                        <div className="font-bold text-[72px] leading-tight">
                            High Quality NFT Collection
                        </div>
                        <div className="text-[#B7B4BB] font-normal text-[22px] mt-10">
                            Chainblock offers you many works of<br /> famous artists,
                            divided into different<br /> collections.
                        </div>
                        <Button className={"mt-10"}>DISCOVER ALL</Button>

                        <div className="mt-[114px] flex items-center space-x-5">
                            <UserListSvg />
                            <div className="font-bold text-[32px]">
                                47k+
                                <div className="text-xs font-normal">
                                    Community members
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <StarsIcon />
                    </div>
                </div>
            </div>
            <PageDividerSvg className="mt-20" />

            {/* Art Collection */}
            <div className="mt-[200px] flex flex-col items-center justify-center">
                <div className="text-[64px] font-bold text-center">
                    Art <span className="text-gradient-high-quality">collection</span>
                </div>
                <ArtCollectionImages />

                <Button className={"mt-[100px] flex items-center space-x-2"}>
                    <span>View collection</span>
                    <LinkIcon />
                </Button>

            </div>

            <PageDividerSvg className="mt-20" />

            {/* Soccer Collection */}
            <div className="mt-[200px] flex flex-col items-center justify-center">
                <div className="text-[64px] font-bold text-center">
                    Soccer  <span className="text-gradient-high-quality">collection</span>
                </div>
                <SoccerCollectionImages />

                <Button className={"mt-[100px] flex items-center space-x-2"}>
                    <span>View collection</span>
                    <LinkIcon />
                </Button>
            </div>

            <PageDividerSvg className="mt-20" />

            {/* Christams Collection */}
            <div className="mt-[200px] flex flex-col items-center justify-center">
                <div className="text-[64px] font-bold text-center">
                    Christmas  <span className="text-gradient-high-quality">collection</span>
                </div>
                <ChristmasCollectionImages />

                <Button className={"mt-[100px] flex items-center space-x-2"}>
                    <span>View collection</span>
                    <LinkIcon />
                </Button>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
