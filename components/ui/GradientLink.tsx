import Link from 'next/link';
import { ReactNode } from 'react';

interface GradientLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function GradientLink({ href, children, className = '' }: GradientLinkProps) {
  return (
    <Link
      href={href}
      className={`
        relative
        transition-all duration-300
        hover:opacity-85
        cursor-target
        ${className}
      `}
    >
      {children}
    </Link>
  );
}