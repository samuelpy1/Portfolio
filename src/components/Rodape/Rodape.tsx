// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Logo from "@/public/img/logo.png"

export default function Rodape() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-pink-500 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">Links rápidos</h3>
          <ul>
            <li className="mb-1"><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>


        <div className="mb-6 md:mb-0">
          <Link href="/" passHref>
            <Image src={Logo} alt="Design2Tailwind" width={150} height={50} />
          </Link>
        </div>

        <div>
          <h3 className="font-bold mb-2">Entre em contato:</h3>
          <p className="mb-2">contato@contato.com.br</p>
          <div className='flex gap-4'>
            <FaTwitter size={24} />
            <FaYoutube size={24} />
            <FaLinkedin size={24} />
            <FaFacebook size={24} />
        </div>
        </div>
      </div>
    </footer>
  );
};

