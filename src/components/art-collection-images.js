import ImageCard from "./image-card"
import BitcoinLoversImg from "../assets/images/bitcoin-lovers.js.png"

const ArtCollectionImages = () => {

    return (
        <div className="flex items-center space-x-6 mt-[140px]">
            <ImageCard image={BitcoinLoversImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={BitcoinLoversImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={BitcoinLoversImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={BitcoinLoversImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
        </div>

    )
}
export default ArtCollectionImages