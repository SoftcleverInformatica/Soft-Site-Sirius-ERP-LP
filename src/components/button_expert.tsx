import { Button } from "./ui/button";
import WhatsappIcon from "../../assets/whatsapp.svg"
import WhatsappIconWhite from "../../assets/whatsapp_white.svg"
import Image from 'next/image';


interface props {
    className?: string,
    className2?: string,
    color?: string,
    label?: string,
}
export default function ButtonExpert({ className,className2, color = 'white', label = 'Fale com um  especialista' }: props) {
    return (
        <a 
        className={className2}
        href="https://s.tintim.app/whatsapp/039a35a9-d169-4b36-98c3-cfef6a71d234/21710a1b-daa7-48be-a44d-2f66d3526f1f" target="_blank">

            <Button className={`${className}`}  >
                <span className={`text-sm md:font-light ${color == 'white' && '!font-semibold'} `}>{label}</span>
                <Image
                    alt="WhatsappIcon"
                    src={color == 'white' ? WhatsappIcon : WhatsappIconWhite}
                />
            </Button>
        </a>
    )
}