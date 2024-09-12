type buttonProps = {
    size: "small" | "normal" | "big",
    children: React.ReactNode,
}

const Button = (props: buttonProps) => {
  return(
    <>
        <button className={`w-64 h-12 bg-cyan-400 text-white rounded-xl font-bold hover:scale-110 active:scale-90 transition-all`} >
            {props.children}
        </button>
    </>
  )
}

export default Button