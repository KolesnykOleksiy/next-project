import HeaderButton from "@/components/header/HeaderButton";

export default function HeaderMenu(){
    return(
        <div className="flex md:flex space-x-4">
            <HeaderButton>Увійти</HeaderButton>
            <HeaderButton>Зареєструватись</HeaderButton>
        </div>
    )
}