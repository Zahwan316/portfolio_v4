type Props = {
    children: React.ReactNode,
    className: string,
    flex?: "col" | "row" | null
}

const Container = (Props: Props) => {
    return(
        <div className={`px-56 min-[1440px]:px-72 mb-16 flex ${Props.className}`}>
            {Props.children}
        </div>
    )
}

export default Container