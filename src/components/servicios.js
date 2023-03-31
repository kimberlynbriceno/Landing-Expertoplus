import React from 'react'
import Image from 'next/image'
import Homen from '../img/imgHome.jpg';


export default function servicios() {
  return (
    <>
    <section className='w-full h-screen'>

        <div>
        <div className='w-full h-3/4'>

            <div className='w-full h-full bg-black '>
                <Image className='' src={Homen.src}
                width={300} height={120}/>
            </div>

            <div className='w-full h-full flex flex-col absolute'>
                <p className='bg-black text-white font-abc'>Transformas tus Proyectos en realidad con ExpertoPlus </p>
                 <button className='bg-blue text-white p-3 rounded-xl'>Informacion</button>
            </div>
        </div>
        </div>

    </section>
    
    </>
  )
}
