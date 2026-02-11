"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Zap, Shield, MapPin, Calendar, Award, Building } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Dedicated to helping small businesses leverage technology for growth and success.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Building long-term partnerships with personalized solutions for every client.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Staying ahead with cutting-edge technologies and modern development practices.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Delivering secure, stable, and scalable solutions you can depend on.',
  },
];

const companyStats = [
  { icon: Calendar, label: 'Founded', value: '2000' },
  { icon: MapPin, label: 'Headquarters', value: 'Guangzhou, China' },
  { icon: Award, label: 'Certifications', value: 'ISO 27001' },
  { icon: Building, label: 'Clients Served', value: '200+' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Your Trusted Technology <span className="text-[#E53935]">Partner</span>
          </h2>
        </motion.div>

        {/* Company Story Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Bridging Technology & Business Since 2000
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in the heart of Guangzhou, <strong>广州祥科技 (Guangzhou Xiang Technology)</strong> was 
              established with a clear vision: to make enterprise-grade technology accessible to small and 
              medium-sized businesses across China and beyond.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our team of experienced developers, system architects, and IT specialists bring together 
              decades of combined expertise in web hosting, custom software development, database management, 
              and cloud infrastructure. We understand the unique challenges that growing businesses face 
              in today&apos;s digital landscape.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From our state-of-the-art data centers in Guangzhou, we provide reliable hosting services 
              with 99.9% uptime guarantee, serving clients across Asia-Pacific. Our development team 
              specializes in everything from low-level system programming to modern full-stack web 
              applications, ensuring we can tackle any technical challenge.
            </p>

            {/* Company Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {companyStats?.map?.((stat, index) => {
                const Icon = stat?.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                    {Icon && <Icon className="w-5 h-5 text-[#E53935]" />}
                    <div>
                      <div className="text-xs text-gray-500">{stat?.label ?? ''}</div>
                      <div className="font-semibold text-gray-900">{stat?.value ?? ''}</div>
                    </div>
                  </div>
                );
              }) ?? null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/developers-team.jpg"
                alt="Guangzhou Xiang Technology development team"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#E53935] text-white p-6 rounded-xl shadow-lg hidden sm:block">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Core Values</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values?.map?.((value, index) => {
            const Icon = value?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-gray-50 hover:bg-gradient-to-br hover:from-[#E53935] hover:to-[#C62828] p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#E53935]/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-[#E53935] group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {value?.title ?? ''}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                  {value?.description ?? ''}
                </p>
              </motion.div>
            );
          }) ?? null}
        </div>
      </div>
    </section>
  );
}
