import { Button } from "./ui/button";
import WhatsappIcon from "/assets/whatsapp.svg"
import Image from 'next/image';

export default function ButtonExpert(){
    return (
        <Button>
            <span>Fale com um Especialista</span>
            <Image
            alt="WhatsappIcon"
            src={WhatsappIcon}
            />
        </Button>
    )
}