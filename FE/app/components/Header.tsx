import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="realative w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="https://images.prismic.io/ski-com/Z8eVnhsAHJWomHqS_Full_logo_color.png?auto=format%2Ccompress&fit=max&w=256"
              alt="Ski Resort Logo"
              width={120}
              height={40}
              objectFit="contain"
              priority
            />
          </Link>
        </div>

        <div>
          <Link
            href="/resorts"
            className="text-lg font-semibold text-sky-600 hover:text-sky-800"
          >
            Resorts
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
