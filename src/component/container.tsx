type Props = {
    children: React.ReactNode,
    className: string,
    flex?: "col" | "row" | null
}

const Container = (Props: Props) => {
    return(
        <div className={`px-56 max-[600px]:p-8 min-[1440px]:px-72 mb-16 max-[600px]:mb-46 flex md:max-lg:p-24 ${Props.className}`}>
            {Props.children}
        </div>
    )
}

export default Container