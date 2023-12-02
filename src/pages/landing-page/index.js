import Button from "../../components/button";

const LandingPage = () => {
    return (
        <div className="mt-10">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <div>
                        <div className="font-semibold text-[40px]">Chainblock</div>
                        <div className="text-[#FA24FA] font-semibold text-[40px] leading-tight">
                            ART
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

                <div className="flex items-center space-x-2">
                    <div className="w-[520px]">
                        <div className="font-bold text-[72px] leading-tight">
                            High Quality NFT Collection
                        </div>
                        <div className="text-[#B7B4BB] font-normal text-[22px] mt-10">
                            Chainblock offers you many works of<br /> famous artists,
                            divided into different<br /> collections.
                        </div>
                        <Button className={"mt-10"}>DISCOVER ALL</Button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
