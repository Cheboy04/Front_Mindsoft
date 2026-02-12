'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  scrolled?: boolean;
}

export function NavLink({ href, children, className = '', scrolled = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative
        text-white/90
        font-medium
        text-2xl
        transition-all duration-300
        hover:text-blue-400
        ${scrolled ? 'normal-cursor' : 'cursor-target'}
        ${isActive ? 'text-blue-400' : ''}
        ${className}
        
        /* Underline effect */
        after:content-['']
        after:absolute
        after:bottom-[-4px]
        after:left-0
        after:w-0
        after:h-[2px]
        after:bg-gradient-to-r
        after:from-blue-400
        after:to-red-400
        after:transition-all
        after:duration-300
        hover:after:w-full
        ${isActive ? 'after:!w-full' : ''}
      `}
    >
      {children}
    </Link>
  );
}