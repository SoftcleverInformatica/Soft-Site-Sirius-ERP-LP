"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Cog from "../../../assets/Cog.svg";
import ButtonExpert from "@/src/components/button_expert";
import { Card, CardContent } from "@/src/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel";




export default function Products() {
    const [isMobile, setIsMobile] = useState(true);

    const cards: { image: any, label: string, description: string }[] = [
        { image: "Imagem1", label: "Nota Fiscal Eletronica", description: "Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a SEFAZ. Atribuição de CFOP, CST e cálculos automatizados. Permite a baixa do estoque e o envio dos títulos ao contas a receber." },
        { image: "Imagem2", label: "Pedidos de Vendas", description: "Controle comercial completo. Orçamentos, pedidos, comissões, curva ABC de clientes e produtos, estatísticas de vendas e muito mais. Permite a geração da NF-e, baixa do estoque e envio dos títulos ao contas a receber. Também pode ser integrado ao Força de Vendas." },
        { image: "Imagem3", label: "Financeiro", description: "Controle detalhado das contas a pagar e a receber a partir de contas contábeis ou centro de custos. Permite integração com cobrança bancária (boletos) e conciliação de saldo." },
        { image: "Imagem4", label: "Compras", description: "Pedidos de compras para serviços ou produtos. Entrada de mercadoria a partir do XML do fornecedor com envio dos títulos ao módulo contas a pagar." },
        { image: "Imagem5", label: "Produção", description: "Geração de ordem de produção para estoque a partir do pedido de venda. Controle de matéria prima, ficha técnica, fases da produção e muito mais." },
        { image: "Imagem6", label: "Relatórios Gerenciais", description: "Essenciais para o controle completo e gestão financeira da empresa. Permite ao usuário diversas opções de filtros e relatórios" },
        { image: "Imagem7", label: "Ordens de Serviços", description: "Totalmente integrado com as vendas, estoque e financeiro. Controle de entradas dos itens que serão consertados." },
        { image: "Imagem8", label: "Nota Fiscal de Serviços", description: "Nota Fiscal de Serviços Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro." },
        { image: "Imagem9", label: "Força de Vendas", description: "Geração de pedido de venda através da WEB já integrado ao Sírius. Indicado para empresas que possuem vendedores externos e precisam de agilidade nas vendas, controle de estoque em tempo real e geração eficiente da NF-e." },
    ]

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
        window.addEventListener("resize", updateText);

        // Remove o ouvinte de evento ao desmontar o componente
        return () => {
            window.removeEventListener("resize", updateText);
        };
    }, []);

    return (
        <section className="w-full flex flex-col justify-center items-center overflow-y-hidden py-5  gap-7">
            <h2 className="p-5 font-extrabold text-sc2 text-2xl text-center ">Conheça tudo que o Sírius ERP oferece para o seu negócio!</h2>
            <div className="w-full flex flex-col justify-center items-center h-[80%] md:mt-5">
                <Carousel className="w-[100%]" plugins={[
                    Autoplay({ delay: 2000 })
                ]}>
                    <CarouselContent className="-ml-1 pb-10">
                        {cards.map((_, index) => (
                            <CarouselItem key={index} className="pl-4 pb-10  lg:px-8 basis-[78%] md:basis-[38%] lg:basis-[24%] h-[100%] ">
                                <div className="p-1 mb-15 lg:p-0">
                                    <Card className=" mb-15 shadow-2xl z-30">
                                        <CardContent className="grid grid-rows-12 grid-cols-1 gap-3  h-[27rem] lg:h-[20rem]">
                                            <div
                                                className=" col-span-full row-span-4 row-start-2 w-[100%] border-none  flex flex-col items-center justify-center"
                                            >
                                                <Image 
                                                    className="w-[65%] lg:w-[50%]" 
                                                    alt="Cog"
                                                    src={Cog}
                                                />
                                            </div>

                                            <h2 className=" w-full col-span-full  row-span-2 row-start-6 text-center flex flex-row justify-center items-center font-bold text-2xl lg:text-[1.14rem] text-sc">{_.label}</h2>
                                            <p className="col-span-full  row-span-5 row-start-8 text-center text-sc lg:text-sm">{_.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>


            <ButtonExpert color={'blue'} className="gap-2 py-6 px-12 w-[82%] bg-sky-950 text-white hover:bg-scHover lg:w-[15.25rem] " />
        </section>
    )
}