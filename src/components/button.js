const Button = ({ children, className, ...props }) => {
    return (
        <button className={`text-[17px] font-bold rounded-full w-[286px] bg-purple-gradient py-5 px-16 ${className}`} {...{ props }}>
            {children}
        </button>
    )
}
export default Button