import { useState } from 'react';
import Image from 'next/image';



const SubscribeButton = () => {
  return (
    <button className="bg-orange-200 ml-2 px-2 py-1 text-orange-500 mt-2 text-sm rounded-xl">
      Subscribe <span>&#62;</span>
    </button>
  );
};



// const Navbar = () => {
//   const [hoveredImage, setHoveredImage] = useState<string | null>(null);

//   const handleImageHover = (alt: string) => {
//     setHoveredImage(alt);
//   };

//   const handleImageLeave = () => {
//     setHoveredImage(null);
//   };

//   return (
//     <div className='bg-black opacity-100'>
//       <div className='px-8 py-12 cursor-pointer'>

//         <div className="flex items-center">
//           <a href="/mypage">
//             <Image
//               src="brand-myspace.svg"
//               alt="icon-1"
//               className={`py-4 transition-transform transform ${
//                 hoveredImage === "icon-1" ? "scale-110" : "scale-100"
//               }`}
//               width={25}
//               height={25}
//               onMouseEnter={() => handleImageHover("icon-1")}
//               onMouseLeave={handleImageLeave}
//             />
//             </a>
//             {hoveredImage === "icon-1" && (
//             <a href="/in/mypage">
//               <span className="text-white ml-3">
//                 My Space
//               </span>
//             </a>
//             )}
//         </div>

//         <div className="flex items-center">
//           <a href="/in/explore">
//             <Image
//               src="icons8-search-48.svg"
//               alt="icon-2"
//               className={`py-4 transition-transform transform ${
//                 hoveredImage === "icon-2" ? "scale-110" : "scale-100"
//               }`}
//               width={20}
//               height={20}
//               onMouseEnter={() => handleImageHover("icon-2")}
//               onMouseLeave={handleImageLeave}
//             />
//           </a>
//           {hoveredImage === "icon-2" && (
//           <a href="/in/explore">
//             <span className="text-white ml-3">
//               Search
//             </span>
//           </a>
//           )}
//         </div>

//         <div className="flex items-center">
//           <a href='/in/home'>
//             <Image
//               src="icons8-home.svg"
//               alt="icon-3"
//               className={`py-4 transition-transform transform ${
//                 hoveredImage === "icon-3" ? "scale-110" : "scale-100"
//               }`}
//               width={20}
//               height={20}
//               onMouseEnter={() => handleImageHover("icon-3")}
//               onMouseLeave={handleImageLeave}
//             />
//           </a>
//           {hoveredImage === "icon-3" && (
//             <a href='/in/home'>
//               <span className="text-white ml-3">
//                 Home
//               </span>
//             </a>
//           )}
//         </div>
         
//         <div className="flex items-center">
//           <a href='/in/shows'>
//             <Image
//               src="/icons8-tv-96.png"
//               alt="icon-4"
//               className={`py-4 transition-transform transform ${
//                 hoveredImage === "icon-4" ? "scale-110" : "scale-100"
//               }`}
//               width={20}
//               height={20}
//               onMouseEnter={() => handleImageHover("icon-4")}
//               onMouseLeave={handleImageLeave}
//             />
//           </a>
//           {hoveredImage === "icon-4" && (
//             <a href='/in/shows'>
//               <span className="text-white ml-3">
//                 TV
//               </span>
//             </a>
//           )}
//         </div>
        
//         <div className="flex items-center">
//           <a href='/in/movies'>
//             <Image
//               src="/icons8-movies-96.png"
//               alt="icon-5"
//               className={`py-4 transition-transform transform ${
//                 hoveredImage === "icon-5" ? "scale-110" : "scale-100"
//               }`}
//               width={20}
//               height={20}
//               onMouseEnter={() => handleImageHover("icon-5")}
//               onMouseLeave={handleImageLeave}
//             />
//           </a>
//           {hoveredImage === "icon-5" && (
//             <a href ='/in/movies'>
//               <span className="text-white ml-3">
//                 Movies
//               </span>
//             </a>
//           )}
//         </div>

//         <div className="flex items-center">
//           <a href='/in/sports'>
//             <Image
//               src="/icons8-trophy-96.png"
//               alt="icon-6"
//               className={`py-4 transition-transform transform ${
//                 hoveredImage === "icon-6" ? "scale-110" : "scale-100"
//               }`}
//               width={20}
//               height={20}
//               onMouseEnter={() => handleImageHover("icon-6")}
//               onMouseLeave={handleImageLeave}
//             />
//           </a>
//           {hoveredImage === "icon-6" && (
//             <a href='/in/sports'>
//               <span className="text-white ml-3">
//                 Sports
//               </span>
//             </a>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };


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





const Header = () => {
  return (
    <div className='fex flex-col w-1/4'>
      <div className='px-6 pt-8'>
        <Image 
          src="/logo-d-plus.svg" 
          alt="disney-logo"
          width={60}
          height={60}
        />
      </div>
        <SubscribeButton/>
        <Navbar/>

    </div>
  );
};

export default Header;
