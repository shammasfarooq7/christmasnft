import ImageCard from "./image-card"
import ScroogeImg from "../assets/images/Scrooge.png"

const ChristmasCollectionImages = () => {

    return (
        <div className="flex items-center space-x-6 mt-[140px]">
            <ImageCard image={ScroogeImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={ScroogeImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={ScroogeImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={ScroogeImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
        </div>

    )
}
export default ChristmasCollectionImages