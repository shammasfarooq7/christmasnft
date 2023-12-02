const ImageCard = ({ image, heading, text }) => {

    return (
        <div className="text-center w-[289px]">
            <img className="w-full h-[352px]" src={image}/>
            <div className="text-[28px] font-bold mt-5">{heading}</div>
            <div className="text-[#B7B4BB] text-[15px] mt-[10px] ">{text}</div>
        </div>
    )
}

export default ImageCard;