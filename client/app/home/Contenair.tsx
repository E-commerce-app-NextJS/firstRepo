
interface ContenairProps{
    children?:React.ReactNode
}

const Contenair:React.FC<ContenairProps>=({children})=>{

    return (
        <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
            {children}
        </div>
    )
}

export default Contenair