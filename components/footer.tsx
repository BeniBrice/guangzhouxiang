import Image from 'next/image';
import Link from 'next/link';
import { Server, Code2, Database, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpeg"
                  alt="Guangzhou Xiang Technology Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <div>
                <p className="font-bold text-lg">Guangzhou Xiang Technology</p>
                <p className="text-gray-400 text-sm">广州祥科技</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              Empowering small businesses with reliable hosting, custom software development,
              and comprehensive tech solutions since 2000.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>2nd Floor, No.8, Lane 13, Shangatang Street, Yuexiu District, Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contact@gzxiang.tech</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About Us' },
                { href: '#services', label: 'Services' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#contact', label: 'Contact' },
              ]?.map?.((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href ?? '#'}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link?.label ?? ''}
                  </Link>
                </li>
              )) ?? null}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { icon: Server, label: 'Web Hosting' },
                { icon: Code2, label: 'Software Development' },
                { icon: Database, label: 'Database Management' },
              ]?.map?.((service, index) => {
                const Icon = service?.icon;
                return (
                  <li key={index} className="flex items-center gap-2 text-gray-400">
                    {Icon && <Icon className="w-4 h-4" />}
                    {service?.label ?? ''}
                  </li>
                );
              }) ?? null}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2026 Guangzhou Xiang Technology. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ in Guangzhou
          </p>
        </div>
      </div>
    </footer>
  );
}
