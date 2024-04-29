import { useEffect, useState } from "react";

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
            className={`w-full bg-sc flex flex-col justify-center items-start px-[2rem] py-[2.5rem]`}
        >
            <h1
                className={` text-white font-bold text-xl ml-[0.2rem] lg:ml-[12rem]`}
            >Segmentos Atendidos</h1>

            <div className={` w-[21.2rem] lg:w-[58.2rem] lg:ml-[12rem] flex flex-col`}>
                <div className={`gap-7 py-6 lg:gap-0 lg:py-0 flex flex-col lg:flex-row justify-between items-center`}>
                    <div 
                    className={`w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2 bg-green-400`}>
                        <h2>Titulo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates. Ea placeat fuga quo libero reprehenderit, eligendi recusandae fugiat quod accusamus, veniam quae minima. Quis commodi nobis cum ipsum nihil.</p>
                    </div>
                    <div 
                    className={`w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2`}>
                        <h2>Titulo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates. Ea placeat fuga quo libero reprehenderit, eligendi recusandae fugiat quod accusamus, veniam quae minima. Quis commodi nobis cum ipsum nihil.</p>
                    </div>
                </div>
                <div className={`gap-7 py-6 lg:gap-0 lg:py-0 flex flex-col lg:flex-row justify-between items-center`}>
                    <div 
                    className={`w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2 bg-green-400`}>
                        <h2>Titulo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates. Ea placeat fuga quo libero reprehenderit, eligendi recusandae fugiat quod accusamus, veniam quae minima. Quis commodi nobis cum ipsum nihil.</p>
                    </div>
                    <div 
                    className={`w-[21rem] bg-cover bg-no-repeat flex flex-col p-5 gap-3 lg:w-[29rem] rounded-xl lg:m-2`}>
                        <h2>Titulo</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptates. Ea placeat fuga quo libero reprehenderit, eligendi recusandae fugiat quod accusamus, veniam quae minima. Quis commodi nobis cum ipsum nihil.</p>
                    </div>
                </div>
            </div>
            {/* 

            <div>
                <div>
                    <div >
                        <h2>Varejo</h2>
                        <p>Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.</p>
                    </div>
                    <div >
                        <h2>Atacado e Distribuição</h2>
                        <p>NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.</p>
                    </div>

                </div>
                <div >
                    <div >
                        <h2>Indústria e Serviço</h2>
                        <p>Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.</p>
                    </div>
                    <div >
                        <h2>Fiscal</h2>
                        <p>Sped ICMS, IPI, Pis e Cofins e Bloco K completo.</p>
                    </div>
                </div>
            </div> */}
            {/* <Image
            alt="sdai"
            src={Imagem5}

            /> */}
        </section>
    )
}