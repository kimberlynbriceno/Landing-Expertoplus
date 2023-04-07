import Logo from '../img/logo.svg'
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
    <header className="flex flex-wrap items-center justify-between p-6 bg-header">
      <div className="flex items-center flex-shrink-0 ml-24 mr-6 lg:h-auto">
            <Image className="inline-block w-48 mt-0 h-22 md:ml-4"
             src={Logo.src} width={300} height={120} />

      </div>

      <div className="block md:hidden">
          {" "}
          <button
            onClick={handleMenu}
            className="flex items-center px-2 py-2 border bg-blue "
          >
            <img
              className="items-center block w-5 h-5 lg:inline-block lg:mt-0"
              src={MenuBurguer.src}
              alt="MenuBurguer"
            />
               </button>
        </div>

        <div
         className={
          isMobile
            ? "w-full block lg:flex sm:items-center text-center lg:w-auto"
            : "w-full lg:flex lg:items-center lg:w-auto hidden"
        }
        >
        <nav className="pr-3 m-3 lg:flex-grow lg:items-center text-primary ">
      
            <Link className="block pr-5 mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-dfg" href="/"> Inicio</Link>
            <Link className="block pr-5 mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-dfg" href="/Nosotros">Nosotros</Link>
            <Link className="block pr-5 mt-4 md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-dfg" href="/Servicios">Servicios</Link>
            <Link className="block px-8 pt-4 pb-2 mt-4 text-white bg-blue md:ml-4 hover:text-slate-100 lg:inline-block lg:mt-0 font-abc" href="https://web.whatsapp.com/">CONTACTANOS</Link>

        </nav>
       </div>

    </header>
  )
}
