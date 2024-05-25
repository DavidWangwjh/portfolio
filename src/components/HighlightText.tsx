type HighlightTextProps = {
    text: string;
    color: string;
}

const HighlightText = ({ text, color }: HighlightTextProps) => {
  return (
    <div className="relative">
        <span className="relative z-10" >{text}</span>
        <span className="absolute inset-x-0 bottom-0 leading-4 w-full z-0" style={{ backgroundColor: color}}></span>
    </div>
  )
}

export default HighlightText