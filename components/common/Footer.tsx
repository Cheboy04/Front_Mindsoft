import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import Image from 'next/image';
import {LogoWithWordsWhite} from '../../assets/images';

// Tipos para cuando conectes con Drupal
interface SocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'linkedin';
}

interface CompanyLink {
  href: string;
  label: string;
}

interface ContactInfo {
  email?: string;
  phone?: string;
  mobile?: string;
  location?: string;
}

interface FooterProps {
  brandDescription?: string;
  socialLinks?: SocialLink[];
  companyLinks?: CompanyLink[];
  contact?: ContactInfo;
  legalLinks?: {
    copyright?: string;
    brandLine?: string;
    privacy?: string;
    terms?: string;
  };
}

export function Footer({
  brandDescription,
  socialLinks,
  companyLinks,
  contact,
  legalLinks,
}: FooterProps = {}) {
  const year = new Date().getFullYear();

  const defaultBrandDescription = brandDescription || 
    'Transformamos ideas innovadoras en soluciones digitales que impulsan tu negocio al siguiente nivel.';

  const defaultSocialLinks: SocialLink[] = socialLinks || [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ];

  const defaultCompanyLinks: CompanyLink[] = companyLinks || [
    { href: '/about', label: 'Nosotros' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/how-we-work', label: 'Cómo trabajamos' },
    { href: '/contact', label: 'Contacto' },
  ];

  const defaultContact: ContactInfo = contact || {
    email: 'info@mindsoft.com',
    phone: '+593 213-4567',
    mobile: '+593 987-6543',
    location: 'Quito, Ecuador',
  };

  const defaultLegalLinks = legalLinks || {
    copyright: 'Todos los derechos reservados',
    brandLine: 'MindSoft',
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
  };

  const safeTel = (value: string): string => value.replace(/[^\d+]/g, '');

  // Mapeo de iconos
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative text-white/92 pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/[0.08]">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night2 to-night" />
      
      <div 
        className="absolute inset-0 -z-10 opacity-100"
        style={{
          background: `
            radial-gradient(1200px 600px at 10% 0%, rgba(80, 160, 255, 0.18) 0%, rgba(0,0,0,0) 55%),
            radial-gradient(900px 500px at 90% 20%, rgba(120, 90, 255, 0.16) 0%, rgba(0,0,0,0) 60%)
          `
        }}
      />

      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-90"
        style={{
          background: 'linear-gradient(90deg, rgba(80,160,255,0) 0%, rgba(80,160,255,0.65) 50%, rgba(80,160,255,0) 100%)'
        }}
      />

      <div className="w-full md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Columna 1: Marca y Social */}
          <div className="md:col-span-4">
            <div className="mb-4 flex items-center gap-4 justify-center md:justify-start">
              <Image
                src={LogoWithWordsWhite}
                alt="MindSoft Logo"
                className="w-48 h-auto"
                />
            </div>

            <p className="text-white/72 max-w-sm leading-relaxed text-md text-center md:text-left mx-auto md:mx-0">
              {defaultBrandDescription}
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {defaultSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/90 border border-white/10 bg-white/[0.04] 
                    p-2.5 rounded-lg hover:bg-white/[0.08] hover:-translate-y-0.5 
                    transition-all duration-200"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces de la Compañía */}
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="font-bold mb-4 tracking-wide text-white text-lg">
              Compañía
            </h3>
            
            <div className="flex flex-col gap-2 items-center md:items-start">
              {defaultCompanyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/72 text-md hover:text-white/95 transition-colors mb-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:col-span-5 text-center md:text-left">
            <h3 className="font-bold mb-4 tracking-wide text-white text-lg">
              Contacto
            </h3>

            <div className="flex flex-col gap-3.5 items-center md:items-start">
              {/* Email */}
              {defaultContact.email && (
                <div className="flex items-center gap-3">
                  <Mail className="w-4.5 h-4.5 text-[#A0C8FF]/90 flex-shrink-0" />
                  
                    <a href={`mailto:${defaultContact.email}`}
                    className="text-white/80 text-md hover:text-white/95 transition-colors"
                  >
                    {defaultContact.email}
                  </a>
                </div>
              )}

              {/* Teléfono */}
              {defaultContact.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-4.5 h-4.5 text-[#A0C8FF]/90 flex-shrink-0" />
                  
                    <a href={`tel:${safeTel(defaultContact.phone)}`}
                    className="text-white/80 text-md hover:text-white/95 transition-colors"
                  >
                    {defaultContact.phone}
                  </a>
                </div>
              )}

              {/* Móvil */}
              {defaultContact.mobile && (
                <div className="flex items-center gap-3">
                  <Phone className="w-4.5 h-4.5 text-[#A0C8FF]/90 flex-shrink-0" />
                  
                    <a href={`tel:${safeTel(defaultContact.mobile)}`}
                    className="text-white/80 text-md hover:text-white/95 transition-colors"
                  >
                    {defaultContact.mobile}
                  </a>
                </div>
              )}

              {/* Ubicación */}
              {defaultContact.location && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-4.5 h-4.5 text-[#A0C8FF]/90 flex-shrink-0" />
                  <span className="text-white/72 text-md">
                    {defaultContact.location}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="my-8 md:my-10 h-px bg-white/10" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center text-center">
          <p className="text-white/62 text-xs">
            {defaultLegalLinks.copyright} © {year} {defaultLegalLinks.brandLine}
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/privacy"
              className="text-white/62 text-xs hover:text-white/90 transition-colors"
            >
              {defaultLegalLinks.privacy}
            </Link>
            <Link
              href="/terms"
              className="text-white/62 text-xs hover:text-white/90 transition-colors"
            >
              {defaultLegalLinks.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}