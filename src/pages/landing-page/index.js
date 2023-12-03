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
import ChooseUsCards from "../../components/choose-us-cards";
import RoadMapCards from "../../components/roadmap-cards";
import ConnectWallet from "../../components/connect-wallet";
import { useTranslation } from "react-i18next";


const LandingPage = () => {
  const {t, i18n} = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center">
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
                        <div className="text-lg font-bold">{t("Home")}</div>
                        <div className="text-lg font-bold">{t("Collection")}</div>
                        <div className="text-lg font-bold">{t("Choose")}</div>
                        <div className="text-lg font-bold">{t("Roadmap")}</div>
                        <div className="text-lg font-bold">{t("Artists")}</div>
                    </div>
                    <Button className={"ml-[170px] flex items-center justify-center overflow-hidden truncate"}>{t("ConnectW")}</Button>
                </div>

                <div className="flex items-center space-x-2 mt-[150px]">
                    <div className="w-[520px]">
                        <div className="font-bold text-[72px] leading-tight">
                            {t("LF")}
                        </div>
                        <div className="text-[#B7B4BB] font-normal text-[22px] mt-10">
                        {t("LFB1")}<br /> {t("LFB2")}<br /> {t("LFB3")}
                        </div>
                        <Button className={"mt-10"}>{t("DSA")}</Button>

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
            <PageDividerSvg className="mt-20" />

            {/* Choose Us */}
            <div className="mt-[200px] flex flex-col items-center justify-center">
                <div className="text-[64px] font-bold text-center">
                    Why  <span className="text-gradient-high-quality">choose us?</span>
                </div>
                <ChooseUsCards />
            </div>
            <PageDividerSvg className="mt-20" />

            {/* Chainblock Roadmap */}
            <div className="mt-[200px] flex flex-col items-center justify-center">
                <div className="text-[64px] font-bold text-center">
                    Chainblock  <span className="text-gradient-high-quality">Roadmap</span>
                </div>
                <RoadMapCards />
            </div>
            <PageDividerSvg className="mt-20" />

               {/* Connect Wallet */}
               <div className="mt-[200px] flex flex-col items-center justify-center">
                <div className="text-[64px] font-bold text-center">
                Connect  <span className="text-gradient-high-quality">Wallet</span>
                </div>
                <ConnectWallet/>
            </div>
            <PageDividerSvg className="mt-20" />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LandingPage;
