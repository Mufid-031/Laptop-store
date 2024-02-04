const Card = (Props) => {
    const { children } = Props

    return (
        <div className="m-w-sm h-60 bg-slate-400 ">
            {children}
        </div>
    )
}

const CartImage = () => {
    return (
        <div className="w-[384px] h-[384px] bg-slate-500">
            <img src="../../../../public/img/1.png" alt="" />
        </div>
    )
}


Card.Image = CartImage

export default Card