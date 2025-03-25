type PropsText = {
    children: string
}
export default function HeaderButton({children}:PropsText){
    return(
        <div className="p-2">
            <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded hover:bg-orange hover:text-black transition cursor-pointer">
                {children}
            </button>
        </div>
)
}