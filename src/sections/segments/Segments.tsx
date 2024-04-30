"use client"
import { useEffect, useState } from "react";
import Imagem5 from "@/assets/Image5.png"
import ButtonExpert from "@/src/components/button_expert";
export default function Segments() {
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        function updateText() {
            if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        // Adiciona um ouvinte de evento de redimensionamento da janela
        window.addEventListener(`resize`, updateText);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener(`resize`, updateText);
        };
    }, []);


    return (
        <section
            className={`w-full bg-sc flex flex-col gap-[1.5rem] lg:gap-[2.5rem] justify-center items-start px-[2rem] py-[2.5rem]`}
        >
            <h1
                className={` text-white font-bold text-2xl ml-[0.2rem] lg:ml-[12.5rem]`}
            >Segmentos Atendidos</h1>

            <div className={` w-[21.2rem] gap-[1.5rem] lg:gap-0 lg:w-[58.2rem] lg:ml-[12rem] flex flex-col`}>
                <div className={`gap-[1.5rem] lg:gap-0 lg:py-0 flex flex-col lg:flex-row justify-between items-center`}>
                    <div
                        className={`varejo h-[13.8rem] lg:h-[10.3rem] w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2`}>
                        <h2 className="text-white font-semibold">Varejo</h2>
                        <p className="text-white font-light">Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.</p>
                    </div>
                    <div
                        className={`atacado h-[13.8rem] lg:h-[10.3rem] w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2`}>
                        <h2 className="text-white font-semibold">Atacado e Distribuição</h2>
                        <p className="text-white font-light">NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.</p>
                    </div>
                </div>
                <div className={`gap-[1.5rem] lg:gap-0 lg:py-0 flex flex-col lg:flex-row justify-between items-center`}>
                    <div
                        className={`industria h-[13.8rem] lg:h-[10.3rem] w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2`}>
                        <h2 className="text-white font-semibold">Indústria e Serviço</h2>
                        <p className="text-white font-light">Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.</p>
                    </div>
                    <div
                        className={`fiscal h-[13.8rem] lg:h-[10.3rem] w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2`}>
                        <h2 className="text-white font-semibold">Fiscal</h2>
                        <p className="text-white font-light">Sped ICMS, IPI, Pis e Cofins e Bloco K completo.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <ButtonExpert color={'white'} className="gap-2 py-6 px-12  w-[97%] font-semibold bg-white text-sky-950 hover:bg-zinc-300 lg:w-[15.25rem] lg:font-bold " />
            </div>


        </section>
    )
}