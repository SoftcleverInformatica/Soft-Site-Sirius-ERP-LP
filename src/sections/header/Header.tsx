"use client"
import Image from "next/image";
import LogoAzul from "/assets/logo_azul.svg"
import LogoBranco from "/assets/logo_branco.svg"
import HeaderFull from "/assets/header-bg.png"
import HeaderPartial from "/assets/header.png"

import WhatsappIcon from "/assets/whatsapp.svg"
import { useEffect, useState } from "react";
import ButtonExpert from "@/components/button_expert";

export default function Header() {
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        if (window.innerWidth >= 320 && window.innerWidth <= 767) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        function updateText() {
            if (window.innerWidth >= 320 && window.innerWidth <= 767) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        // Adiciona um ouvinte de evento de redimensionamento da janela
        window.addEventListener("resize", updateText);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener("resize", updateText);
        };
    }, []);

    const bg = isMobile ? { backgroundImage: `url(${HeaderPartial.src})`, } : undefined;
    return (
        <header
            style={bg}
            className={`grid relative overflow-x-hidden grid-cols-12 grid-rows-8 gap-3 h-[100vh] bg-no-repeat w-screen ${!isMobile && 'h-screen'} bg-right-top`}>
            <div className="col-span-full md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-2 p-4 ">
                <Image
                    className="w-[60%] md:w-[100%]"
                    alt="logo Softclever"
                    src={isMobile ? LogoBranco : LogoAzul}
                ></Image>
            </div>




            <div className="flex flex-col col-start-2 col-span-10 row-start-3  text-[#f2faff] md:text-[#003658] md:col-span-5 md:row-span-8 md:col-start-3 md:row-start-5 p-2 gap-3">
                <div className="flex flex-col gap-[18px]">
                    <h2 className="text-5xl font-bold">Sirius ERP</h2>
                    <h4 className="text-3xl font-bold text-justify">Sistema de Gestão para empresas de todos os tipos e tamanhos</h4>
                </div>
                <p className="text-xl font-normal">Tenha controle total de todos os departamentos da sua empresa, seja fiscal, comercial, estoque, financeiro, produção e muito mais.</p>
            </div>

            <ButtonExpert/>
            {!isMobile && (<>
                <div className="flex justify-start items-start flex-col absolute top-[15vh] left-[80vw]">
                    <button className="bg-white text-[#003658] flex flex-row gap-1  justify-center col-span-2 items-center w-[8rem] p-1 rounded-md hover:bg-zinc-300  hover:transition">
                        <span className="font-semibold text-[#003658] w-2rem h-fit pr-2">
                            Contato
                        </span>
                        <Image
                            className="w-[1.2rem] h-fit"
                            alt="WhatsappIcon"
                            src={WhatsappIcon}
                        />
                    </button>
                </div>
                <Image
                    className="h-[120vh] md:col-span-6 md:col-start-7"
                    alt="background_image"
                    src={HeaderPartial}
                />
            </>
            )}

        </header>
    )
}