import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import link from 'next/link';

export default function Obrigado() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-slate-800 from-10% to-emerald-500 to-90%">
            <style jsx>{`
               a {
                   color: white;
                     }
              `}</style>
        <div className='flex-row items-center justify-center'>
        <img className='' src="https://www.orkugifs.com/images/Obrigado-por-me-adicionar-e-aceitar-minha-amizade!_937.gif"/>
        <button className='bg-green-700 transform transition duration-300 hover:scale-105  flex items-center gap-3 mt-5 rounded-3xl px-10 py-1'>
            <a href="/" className='flex  items-center gap-3'>
            Volte para saber mais sobre o projeto!
            </a>
            </button>
        </div>
    </main>
  );
}