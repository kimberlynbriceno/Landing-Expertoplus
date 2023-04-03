import React from 'react'
import Image from 'next/image'
import Homen from '../img/imgHome.jpg';
import Link  from 'next/link';
import Wsslogo from '../img/wsslogo.svg'
// import Nosotros from '../nosotros.js'


export default function servicios() {
  return (
    <>
    <section className='w-full h-screen'>

        <div>
        <div className='w-full h-3/4'>

        <div className='absolute flex flex-col items-start w-full h-full py-4 text-4xl space-y-7'> 
                <p className='ml-8 mt-32 text-white lg:text-8xl font-abc'>Transformas tus <br/> Proyectos en realidad <br/> con Expertoplus </p>
                 <button className='p-3 ml-40 text-xl text-white bg-blue rounded-3xl font-abc'>Informacion</button>
        
            </div>
            <div className='absolute flex flex-col items-end w-full h-full px-6 md:pt-80 pt-96  '><Link  href="https://web.whatsapp.com/"><Image  src={Wsslogo.src}
                     width={80} height={80}/></Link></div>

            <div className='w-full h-full bg-black '>
                <Image className='' src={Homen.src}
                width={600} height={600}/>
            </div>

           
        </div>
        </div>

    </section>
    <main className='flex flex-col items-center bg-gradient-to-r from-blue'>
   {/* <div className='bg-white'> */}
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
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
