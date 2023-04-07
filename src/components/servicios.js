import React from 'react'
import Image from 'next/image'
import Homen from '../img/imgHome.jpg';
import Link  from 'next/link';
import Wsslogo from '../img/wsslogo.svg'
// import Nosotros from '../nosotros.js'


export default function servicios() {
  return (
    <>
    <section className='w-full h-screen '>

        <div>
        <div className='w-full h-3/4'>

        <div className= 'flex items-start h-full py-4 text-4xl'> 
               <div className='flex-col w-1/2'>
               <p className='mx-32 mt-20 md:text-4xl font-abc'>Transformas tus Proyectos en realidad con Expertoplus </p>
                 <p className='mt-5 ml-32 text-lg'>¡Empieza el proyecto de tus sueños con Expertoplus!</p>
                 <button className='px-8 pt-2 pb-2 mt-5 ml-32 text-xl text-white bg-blue font-abc'>Informacion</button>
               </div>
        
                 <div className='flex-col block w-1/2 mx-10 my-10 bg-black '>
                <Image className='' src={Homen.src}
                width={400} height={100}/>
            </div>
            </div>
           
           

            <div className='absolute flex flex-col items-end w-full h-full px-6 md:pt-80 pt-96 '><Link  href="https://web.whatsapp.com/"><Image  src={Wsslogo.src}
                     width={80} height={80}/></Link></div>

        </div>
        </div>

    </section>
    <main className='flex flex-col items-center mt-10 bg-gradient-to-b from-blue'>
   {/* <div className='bg-white'> */}
     <section className="text-gray-600 body-font-abc">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src="https://dummyimage.com/720x400" alt="blog"/>
          <div className="p-6">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">CATEGORY</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">The Catalyzer</h1>
            <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex flex-wrap items-center ">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">CATEGORY</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">The 400 Blows</h1>
            <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex flex-wrap items-center">
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src="https://dummyimage.com/722x402" alt="blog"/>
          <div className="p-6">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">CATEGORY</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Shooting Stars</h1>
            <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex flex-wrap items-center ">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* </div> */}
    </main>
    
    </>
  )
}
