import { useState } from 'react';
import Image from 'next/image';



const SubscribeButton = () => {
  return (
    <div className='flex w-6 h-6 mt-2 ml-2'>
    <button className="bg-orange-200 flex align-middle justify-center rounded-xl">
      <p  className=' text-orange-500 text-sm'>Subscribe</p>
    </button>
    </div>
  );
};

interface NavItem {
  href: string;
  src: string;
  alt: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleImageHover = (alt: string) => {
    setHoveredImage(alt);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  
  const navItems: NavItem[] = [
    {
      href: '/in/mypage',
      src: 'brand-myspace.svg',
      alt: 'icon-1',
      label: 'My Space',
    },
    {
      href: '/in/explore',
      src: 'icons8-search-48.svg',
      alt: 'icon-2',
      label: 'Search',
    },
    {
      href: '/in/home',
      src: 'icons8-home.svg',
      alt: 'icon-3',
      label: 'Home',
    },
    {
      href: '/in/shows',
      src: '/icons8-tv-96.png',
      alt: 'icon-4',
      label: 'TV',
    },
    {
      href: '/in/movies',
      src: '/icons8-movies-96.png',
      alt: 'icon-5',
      label: 'Movies',
    },
    {
      href: '/in/sports',
      src: '/icons8-trophy-96.png',
      alt: 'icon-6',
      label: 'Sports',
    },
  ];

  return (
    <div className='bg-black opacity-100'>
      <div className='px-8 py-12 cursor-pointer'>
        {navItems.map((item) => (
          <div className='flex items-center' key={item.alt}>
            <a href={item.href}>
              <Image
                src={item.src}
                alt={item.alt}
                className={`py-4 transition-transform transform ${
                  hoveredImage === item.alt ? 'scale-110' : 'scale-100'
                }`}
                width={20}
                height={20}
                onMouseEnter={() => handleImageHover(item.alt)}
                onMouseLeave={handleImageLeave}
              />
            </a>
            {hoveredImage === item.alt && (
              <a href={item.href}>
                <span className='text-white ml-3'>{item.label}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


const LandingPage = () => {
  return (
    <div className='flex flex-col flex-grow h-screen w-1/4  bg-black'>
      <div className= 'px-6 pt-8'>
        <Image 
          src="/logo-d-plus.svg" 
          alt="disney-logo"
          width={60}
          height={60}
        />
      </div>

        <SubscribeButton/>

      <div>
        <Navbar/>
      </div>

    </div>
  );
};

export default LandingPage;