import Image from "next/image";
import Logo from "../../../assets/logo.svg"

export default function Header(){
    return (
        <header className="grid grid-cols-12  gap-3 bg-blue-100 p-4">
          <Image
          className="col-span-full"
          alt="logo Softclever"
          src={Logo}
          ></Image> 

          <div className="flex flex-col col-span-full">
            <h2>Sirius ERP</h2>
            <h4>Sistema de Gestão para empresas de todos os tipos e tamanhos</h4>
            <p>    Tenha controle total de todos os departamentos da sua empresa, seja fiscal, comercial, estoque, financeiro, produção e muito mais.</p>
          </div>
        </header>
    )
}