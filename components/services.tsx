"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Code2, Database, Cloud, Lock, Headphones, ArrowRight, X, Check, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: Server,
    title: 'Web Hosting',
    description: 'High-performance hosting solutions with 99.9% uptime guarantee. Fast, secure, and scalable infrastructure for your websites and applications.',
    features: ['SSD Storage', 'DDoS Protection', 'Auto Backups', 'CDN Integration'],
    image: '/images/server-room.jpg',
    fullDescription: 'Our enterprise-grade web hosting infrastructure is built on cutting-edge technology, featuring high-speed SSD storage, advanced load balancing, and multi-layer security protocols. We maintain data centers in Guangzhou with redundant power supplies and cooling systems to ensure maximum uptime.',
    benefits: [
      'Lightning-fast page load speeds with NVMe SSD storage',
      'Automatic daily backups with 30-day retention',
      'Free SSL certificates for all hosted domains',
      'One-click staging environments for testing',
      'Global CDN integration for worldwide performance',
      'Real-time monitoring and instant alerts'
    ],
    process: ['Initial consultation and requirements analysis', 'Server configuration and optimization', 'Migration assistance and DNS setup', 'Performance testing and launch', 'Ongoing monitoring and support'],
    pricing: 'Starting from ¥299/month for shared hosting, ¥999/month for VPS, custom pricing for dedicated servers',
    timeline: 'Setup within 24-48 hours, migrations typically 1-3 days',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to match your exact business requirements. From web apps to enterprise systems, including low-level assembly programming.',
    features: ['Full-Stack Development', 'API Integration', 'Mobile Apps', 'System Programming'],
    image: '/images/code-screen.jpg',
    fullDescription: 'Our development team brings expertise across the entire technology stack, from low-level assembly and C programming to modern frameworks like React, Node.js, and Python. We specialize in building scalable, maintainable software that grows with your business.',
    benefits: [
      'Custom solutions tailored to your specific workflow',
      'Modern tech stack with future-proof architecture',
      'Agile development with regular progress updates',
      'Comprehensive testing and quality assurance',
      'Full source code ownership and documentation',
      'Post-launch support and maintenance packages'
    ],
    process: ['Discovery workshop and requirements gathering', 'Technical architecture and design', 'Iterative development with sprint demos', 'User acceptance testing', 'Deployment and training', 'Ongoing maintenance and updates'],
    pricing: 'Project-based pricing from ¥15,000 for small apps, ¥50,000-200,000 for enterprise systems',
    timeline: 'Small projects: 2-4 weeks, Medium: 1-3 months, Enterprise: 3-12 months',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance services. Keep your data organized, secure, and easily accessible.',
    features: ['Schema Design', 'Performance Tuning', 'Data Migration', 'Backup Solutions'],
    image: '/images/data-center.png',
    fullDescription: 'We provide comprehensive database services covering MySQL, PostgreSQL, MongoDB, Redis, and enterprise solutions like Oracle and SQL Server. Our DBAs optimize query performance, ensure data integrity, and implement robust backup strategies to protect your critical business data.',
    benefits: [
      'Up to 10x performance improvement through optimization',
      'Automated backup and disaster recovery plans',
      'Real-time replication and high availability setup',
      'Data encryption at rest and in transit',
      'Compliance with GDPR, SOC2, and local regulations',
      '24/7 monitoring with proactive issue resolution'
    ],
    process: ['Database audit and health assessment', 'Performance bottleneck identification', 'Optimization implementation', 'Backup strategy setup', 'Monitoring and alerting configuration', 'Regular maintenance and reviews'],
    pricing: 'Audit: ¥3,000, Monthly management from ¥1,500, Migration projects from ¥8,000',
    timeline: 'Audits: 2-3 days, Optimization: 1-2 weeks, Migrations: 1-4 weeks',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration and management. Leverage the power of cloud computing for flexibility and cost efficiency.',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Multi-Cloud Support'],
    image: '/images/cloud-network.png',
    fullDescription: 'We help businesses leverage major cloud platforms including Alibaba Cloud, Tencent Cloud, AWS, and Azure. Our cloud architects design cost-effective, scalable infrastructure that reduces operational overhead while improving reliability and performance.',
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Auto-scaling to handle traffic spikes',
      'Multi-region deployment for disaster recovery',
      'Infrastructure as Code for reproducibility',
      'Cost monitoring and optimization recommendations',
      'Vendor-agnostic approach avoiding lock-in'
    ],
    process: ['Current infrastructure assessment', 'Cloud architecture design', 'Migration planning and risk assessment', 'Phased migration execution', 'Testing and validation', 'Optimization and handover'],
    pricing: 'Assessment: ¥5,000, Migration from ¥20,000, Monthly management from ¥3,000',
    timeline: 'Assessment: 1 week, Migration: 2-8 weeks depending on complexity',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions. From vulnerability assessments to ongoing monitoring.',
    features: ['Security Audits', 'SSL Certificates', 'Firewall Setup', 'Compliance Support'],
    fullDescription: 'Our security team provides end-to-end protection for your digital infrastructure. We conduct penetration testing, implement security best practices, and ensure compliance with industry standards. Stay protected against evolving cyber threats with our proactive security approach.',
    benefits: [
      'Comprehensive vulnerability scanning and remediation',
      'Employee security awareness training',
      'Incident response planning and support',
      'Regular security audits and compliance checks',
      'Web Application Firewall (WAF) implementation',
      'Security Operations Center (SOC) monitoring'
    ],
    process: ['Security assessment and gap analysis', 'Risk prioritization and roadmap', 'Security controls implementation', 'Penetration testing', 'Compliance documentation', 'Ongoing monitoring and updates'],
    pricing: 'Security audit from ¥8,000, Penetration testing from ¥15,000, SOC monitoring from ¥5,000/month',
    timeline: 'Audits: 1-2 weeks, Full security implementation: 1-3 months',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Dedicated support team available around the clock. Quick response times and expert assistance when you need it.',
    features: ['24/7 Availability', 'Remote Support', 'On-site Service', 'Training Sessions'],
    fullDescription: 'Our technical support team provides responsive assistance through multiple channels including phone, email, and remote access. We offer tiered support plans to match your business needs, from basic troubleshooting to dedicated on-site engineers.',
    benefits: [
      'Response times as fast as 15 minutes for critical issues',
      'Dedicated account manager for enterprise clients',
      'Remote troubleshooting and screen sharing',
      'On-site visits for hardware and complex issues',
      'Regular training sessions for your team',
      'Detailed ticket tracking and reporting'
    ],
    process: ['Support plan selection', 'Onboarding and documentation', 'Communication channel setup', 'SLA agreement and escalation paths', 'Regular review meetings', 'Continuous improvement feedback'],
    pricing: 'Basic: ¥800/month, Business: ¥2,500/month, Enterprise: Custom pricing with dedicated resources',
    timeline: 'Setup within 1-2 business days, immediate support access after onboarding',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Comprehensive Tech <span className="text-[#E53935]">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From hosting to development, we offer end-to-end technology services
            designed to help small businesses thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services?.map?.((service, index) => {
            const Icon = service?.icon;
            const hasImage = 'image' in service && service.image;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Service Image */}
                {hasImage && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={service.image as string}
                      alt={`${service?.title} service`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-lg">
                      {Icon && <Icon className="w-5 h-5 text-[#E53935]" />}
                    </div>
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                  {!hasImage && (
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E53935] to-[#C62828] rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-red-200">
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service?.title ?? ''}
                  </h3>
                  <p className="text-gray-600 mb-5">
                    {service?.description ?? ''}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service?.features?.map?.((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-[#E53935] rounded-full mr-2" />
                        {feature ?? ''}
                      </li>
                    )) ?? null}
                  </ul>
                  <button
                    onClick={() => openModal(index)}
                    className="inline-flex items-center text-[#E53935] font-semibold group-hover:gap-2 transition-all cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </motion.div>
            );
          }) ?? null}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const service = services[selectedService];
                const Icon = service?.icon;
                const hasImage = 'image' in service && service.image;
                
                return (
                  <>
                    {/* Modal Header with Image */}
                    <div className="relative">
                      {hasImage ? (
                        <div className="relative h-48 sm:h-64">
                          <Image
                            src={service.image as string}
                            alt={service?.title ?? ''}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        </div>
                      ) : (
                        <div className="h-32 bg-gradient-to-br from-[#E53935] to-[#C62828]" />
                      )}
                      
                      {/* Close Button */}
                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-700" />
                      </button>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            {Icon && <Icon className="w-6 h-6 text-[#E53935]" />}
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {service?.title ?? ''}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 sm:p-8">
                      {/* Full Description */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {service?.fullDescription ?? ''}
                      </p>

                      {/* Benefits Section */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-[#E53935]" />
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service?.benefits?.map?.((benefit, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                              </div>
                              <span className="text-sm text-gray-700">{benefit ?? ''}</span>
                            </div>
                          )) ?? null}
                        </div>
                      </div>

                      {/* Process Section */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Our Process</h4>
                        <div className="space-y-3">
                          {service?.process?.map?.((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <div className="w-8 h-8 bg-[#E53935] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-gray-700">{step ?? ''}</span>
                            </div>
                          )) ?? null}
                        </div>
                      </div>

                      {/* Pricing & Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 text-[#E53935] font-semibold mb-2">
                            <DollarSign className="w-5 h-5" />
                            Pricing
                          </div>
                          <p className="text-gray-700 text-sm">{service?.pricing ?? ''}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 text-[#E53935] font-semibold mb-2">
                            <Clock className="w-5 h-5" />
                            Timeline
                          </div>
                          <p className="text-gray-700 text-sm">{service?.timeline ?? ''}</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="#contact"
                          onClick={closeModal}
                          className="flex-1 bg-[#E53935] hover:bg-[#C62828] text-white text-center py-4 px-6 rounded-xl font-semibold transition-colors"
                        >
                          Get Started with {service?.title}
                        </Link>
                        <button
                          onClick={closeModal}
                          className="px-6 py-4 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
