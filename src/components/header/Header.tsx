import Logo from "@/components/header/Logo";
import HeaderMenu from "@/components/header/HeaderMenu";
export default function Header(){
    return(
        <div className="w-full h-[120px] bg-[#000000] p-4 flex items-center justify-between">
            <Logo></Logo>
            <HeaderMenu></HeaderMenu>
        </div>
    )
}