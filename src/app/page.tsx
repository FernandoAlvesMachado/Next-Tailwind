import Image from 'next/image'
import obrigado from '../../pages/obrigado'
import link from '../../pages/obrigado'

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-slate-800 from-10% to-emerald-500 to-90% w-screen h-screen overflow-x-hidden flex-row gap-9'>
      <div className='h-40 justify-center flex items-center align-middle'>
        <div className='flex items-center max-w-5xl w-screen justify-between  gap-7'>
          <img className='w-36 invert' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="" />
          <nav className='flex gap-4 items-center pr-40'>
            <p>Início</p> 
            <p>Serviços</p>
            <p>Portifólio</p>
            <p>Blog</p>
            <p>Contato</p>
          </nav>
        </div>
      </div>
      <div className='flex-row gap-14 h-4/5  items-center justify-start content-center overflow-hidden'>
      <div className='flex h-4/5 w-3/4 mx-auto items-center gap-10'>
        <div className='flex-row items-center'>
          <h1 className='font-semibold text-3xl'>Aqui É um titulo Bem Chamativo e que vai fazer entender a ideia</h1>
          <p className=' max-w-sm mt-3'>Aqui eu posso usar para explicar um pouco mais a ideia do negocio e fazer com que a pessoa que estiver lendo possa entender e gostar da minha ideia </p>
          <button className='bg-green-700 transform transition duration-300 hover:scale-105 flex items-center gap-3 mt-5 rounded-3xl px-10 py-1'>
            <a href="/obrigado" className='flex items-center gap-3'>
            <img className='w-10 invert' src="https://cdn.icon-icons.com/icons2/2659/PNG/512/whatsapp_logo_brand_icon_161140.png" alt="" />
            Entre em contato por aqui!
            </a>
            </button>
        </div>
        <div className='max-w-xl'>
        <img src="https://clickup.com/videos/teams/pm/PM_LP_v10-Update_STATIC.png" alt="" />
        </div>
      </div>
  
      </div>
      <div className='w-screen pl-52 pr-52 flex text-center gap-4 h-1/2 mx-auto items-center'>
        <div className='overflow-x-hidden'>
          <h1 className='font-black text-2xl'>Titulo</h1>
          <p className='max-w-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque maxime aut ab quibusdam, deleniti expedita eum esse commodi aperiam. Nobis saepe ullam qui ipsa, perspiciatis a quia laboriosam tempora. Molestias.</p>
        </div>
        <div className='overflow-x-hidden mt-20'>
          <h1 className='font-black text-2xl'>Titulo</h1>
          <p className='max-w-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque maxime aut ab quibusdam, deleniti expedita eum esse commodi aperiam. Nobis saepe ullam qui ipsa, perspiciatis a quia laboriosam tempora. Molestias.</p>
        </div>
        <div className='overflow-x-hidden mt-40'>
          <h1 className='font-black text-2xl'>Titulo</h1>
          <p className='max-w-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque maxime aut ab quibusdam, deleniti expedita eum esse commodi aperiam. Nobis saepe ullam qui ipsa, perspiciatis a quia laboriosam tempora. Molestias.</p>
        </div>
        <div className='overflow-x-hidden mt-60'>
          <h1 className='font-black text-2xl'>Titulo</h1>
          <p className='max-w-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque maxime aut ab quibusdam, deleniti expedita eum esse commodi aperiam. Nobis saepe ullam qui ipsa, perspiciatis a quia laboriosam tempora. Molestias.</p>
        </div>
      </div>

      <div className='mt-36 flex text-center gap-2 h-1/2 w-3/4 mx-auto items-center'>
        <div className='text-start'>
          <h1 className='font-black text-2xl'>Titulo Sobre o projeto</h1>
          <p className='max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque maxime aut ab quibusdam, deleniti expedita eum esse commodi aperiam. Nobis saepe ullam qui ipsa, perspiciatis a quia laboriosam tempora. Molestias.</p>
          <button className='bg-green-700 transform transition duration-300 hover:scale-105 flex items-center gap-3 mt-5 rounded-3xl px-10 py-1'>
            <img className='w-10 invert' src="https://cdn.icon-icons.com/icons2/2659/PNG/512/whatsapp_logo_brand_icon_161140.png" alt="" />
            Entre em contato por aqui!</button>
        </div>
        <div className='max-w-md'>
          <img src="https://images.ctfassets.net/w6r2i5d8q73s/5E93acERmf5sAOecbuBMNG/41f5909533d5df907f4784dfddab59a3/about_us_second_screen.png" alt="" />
        </div>
      </div>
    </main>
  )
}
