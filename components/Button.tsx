import Image from "next/image";

type ButtonProps ={
    type: "button" |"submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green"
}


const Button = ({title, type, icon, variant}:ButtonProps) => {
  return (
    <button type={type} className="flexCenter gap-3 rounded-full border ${variant}">
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label>{title}</label>
    </button>
  )
}

export default Button