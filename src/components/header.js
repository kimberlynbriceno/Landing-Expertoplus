import Logo from '../img/logo2.png'
import MenuBurguer from '../img/menuHamburguesas.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function header() {

  const [isMobile, setIsMobile] = useState(false);

  const handleMenu = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  return (

    <header className="bg-header  flex items-center p-6 flex-wrap justify-between">
      <div className="flex items-center lg:h-auto flex-shrink-0 mr-6">
            <Image className=" h-22 w-32 md:ml-4 inline-block mt-0"
             src={Logo.src} width={300} height={120} />

      </div>

      <div className="block md:hidden">
          {" "}
          <button
            onClick={handleMenu}
            className="flex items-center px-2 py-2 rounded-2xl border bg-blue "
          >
            <img
              className="w-5 h-5 block lg:inline-block lg:mt-0 items-center"
              src={MenuBurguer.src}
              alt="MenuBurguer"
            />
               </button>
        </div>

        <div
          className={
            isMobile
              ? "w-full block lg:flex sm:items-center text-center lg:w-auto"
              : "w-full lg:flex-grow lg:items-center lg:w-auto hidden"
          }
        >
        <nav className="lg:flex-grow lg:items-center m-3 text-primary pr-3 ">
      
            <Link className="pr-5 block mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-dfg" href="/"> Inicio</Link>
            <Link className="pr-5 block mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-dfg" href="/Nosotros">Nosotros</Link>
            <Link className="pr-5 block mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-dfg" href="/Servicios">Servicios</Link>
            <Link className="bg-blue p-3 text-white block mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 rounded-3xl font-abc" href="/Contactanos">Contáctanos</Link>

        </nav>
       </div>

    </header>

  )
}
