import Image from "next/image";
import Logo from "../../public/img/fiaplogo.png"
import Link from "next/link";
export default function Cabecalho() {
    return (
        <div className="flex justify-between items-center p-5 bg-blue-900 sticky text-white border-b-white border-b-2">
            <span className="flex items-center">
            <Link href="/" passHref>
                <Image src={Logo} alt="Logo Black Hole" height={60} />
            </Link>
                <Link className="ml-4 font-semibold text-3xl" href={'/'}>Immanuel Velikovsky</Link>
            </span>
            <nav className="flex gap-3 text-lg">
                <Link className="hover:text-yellow-500" href={'/pages/checkpoints'}>CheckPoints</Link>
                <Link className="hover:text-yellow-500" href={'/pages/gs'}>Global Solution</Link>
                <Link className="hover:text-yellow-500" href={'/pages/cs'}>Challenge Sprints</Link>
            </nav>
        </div>
    );
};