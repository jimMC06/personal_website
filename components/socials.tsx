import Image from "next/image";
export default function Socials(){
    return(
        <div className="mt-10 flex gap-6">
            <a
            href="https://github.com/jimMC06"
            target="_blank"
            rel="noopener noreferrer"
            >
                <Image
                src="/icons/github.png"
                alt="GitHub"
                width={40}
                height={40}
                className="transition duration-300 hover:scale-110 hover:opacity-80"
                />
            </a>

            <a
            href="https://www.linkedin.com/in/jim-murcia-calderon-3349a3350/"
            target="_blank"
            rel="noopener noreferrer"
            >
                <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="transition duration-300 hover:scale-110 hover:opacity-80"
                />
            </a>
            <a
            href="https://www.instagram.com/dumbneon_j/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            >
                <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width = {40}
                height = {40}
                className="transition duration-300 hover:scale-110 hover:opacity-80"
                />
            </a>
        </div>
    );
}
