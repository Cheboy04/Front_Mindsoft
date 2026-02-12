'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { GradientLink } from '../ui/GradientLink';
import { NavLink } from '../ui/NavLink';
import {LogoWithWordsWhite} from '../../assets/images';
import { useCursorZone } from '@/components/hooks/useCursorZone';


export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useCursorZone('navbar');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 75);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/how-we-work', label: 'How We Work' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div ref={navRef as React.RefObject<HTMLDivElement>}>
      <nav
        
        className={`
          fixed top-0 left-0 right-0
          z-50
          transition-all duration-500
          ${scrolled 
            ? 'bg-[rgba(45,45,45,0.40)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex justify-between items-center min-h-[64px] sm:min-h-[80px] py-3">
            
            {/* Logo */}
            <GradientLink href="/" className="flex items-center">
              <Image
                src={LogoWithWordsWhite}
                alt="MindSoft Logo"
                width={200}
                height={50}
                className="h-[40px] sm:h-[50px] max-w-max pr-4"
                priority
              />
            </GradientLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-20">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  href={item.path}
                  scrolled={scrolled}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Abrir menú de navegación"
              className={`
                md:hidden
                cursor-target
                p-2
                rounded-lg
                border border-white/12
                bg-white/5
                text-white/95
                transition-all duration-200
                hover:bg-white/8
                hover:-translate-y-0.5
              `}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className={`
              fixed top-0 right-0 bottom-0
              w-[300px]
              z-50
              md:hidden
              transform transition-transform duration-300
              ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
              bg-gradient-to-b from-[#0B1220] to-[#070B12]
              border-l border-white/10
              
              before:absolute
              before:inset-0
              before:bg-[radial-gradient(900px_480px_at_20%_0%,rgba(80,160,255,0.16)_0%,rgba(0,0,0,0)_55%)]
              before:pointer-events-none
              
              after:absolute
              after:inset-0
              after:bg-[radial-gradient(700px_420px_at_90%_20%,rgba(255,68,56,0.10)_0%,rgba(0,0,0,0)_60%)]
              after:pointer-events-none
            `}
          >
            <div className="relative z-10 p-5">
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-4">
                <Image
                  src={LogoWithWordsWhite}
                  alt="MindSoft Logo"
                  width={150}
                  height={38}
                  className="h-[38px] w-auto"
                />

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Cerrar menú de navegación"
                  className="
                    p-2
                    rounded-lg
                    border border-white/12
                    bg-white/5
                    text-white/95
                    transition-all
                    hover:bg-white/8
                    cursor-target
                  "
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/12 mb-4" />

              {/* Navigation Items */}
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`
                        block
                        py-3 px-4
                        rounded-xl
                        transition-all duration-200
                        border
                        cursor-target
                        ${isActive
                          ? 'text-blue-400 bg-blue-400/10 border-blue-400/22 font-bold'
                          : 'text-white/88 bg-transparent border-white/8 font-medium hover:bg-white/6 hover:border-white/14 hover:translate-x-1.5'
                        }
                      `}
                    >
                      <span className="text-[1.05rem]">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Decorative Divider */}
              <div
                className="
                  mt-6
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-red-400/35
                  to-transparent
                  opacity-90
                "
              />
            </div>
          </div>
        </>
      )}
      </div>
  );
}