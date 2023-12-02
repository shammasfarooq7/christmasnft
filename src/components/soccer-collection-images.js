import ImageCard from "./image-card"
import PlatinitImg from "../assets/images/Platini.png"

const SoccerCollectionImages = () => {

    return (
        <div className="flex items-center space-x-6 mt-[140px]">
            <ImageCard image={PlatinitImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={PlatinitImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={PlatinitImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
            <ImageCard image={PlatinitImg} heading={"#Bitcoin lovers"} text={"By TheSalvare"} />
        </div>

    )
}
export default SoccerCollectionImages