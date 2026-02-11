"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Server, Code2, Database, X, CheckCircle, Calendar, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Custom Development',
    description: 'Built a scalable e-commerce solution for a local retailer, increasing their online sales by 200%.',
    icon: Code2,
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: 'from-blue-500 to-blue-600',
    client: 'Guangzhou Fashion Retail Co.',
    duration: '4 months',
    team: '5 developers',
    fullDescription: 'Our client, a traditional brick-and-mortar fashion retailer in Guangzhou, needed to establish a strong online presence to compete in the growing e-commerce market. We designed and built a comprehensive e-commerce platform from the ground up, featuring a modern responsive design, advanced product filtering, real-time inventory management, and seamless payment integration.',
    challenge: 'The client had no existing digital infrastructure and needed a complete solution that could handle high traffic during promotional periods while maintaining fast load times and a smooth user experience.',
    solution: 'We implemented a React-based frontend with server-side rendering for optimal SEO, a Node.js backend with PostgreSQL database for reliable data management, and integrated with popular Chinese payment gateways including Alipay and WeChat Pay.',
    results: [
      '200% increase in overall sales within 6 months',
      '50,000+ monthly active users',
      '99.9% uptime during peak shopping events',
      '3-second average page load time',
      'Seamless integration with existing inventory system'
    ],
  },
  {
    title: 'Cloud Migration Project',
    category: 'Cloud Services',
    description: 'Migrated legacy systems to cloud infrastructure, reducing operational costs by 40%.',
    icon: Server,
    tags: ['AWS', 'Docker', 'Kubernetes'],
    color: 'from-purple-500 to-purple-600',
    client: 'Shenzhen Manufacturing Ltd.',
    duration: '6 months',
    team: '4 engineers',
    fullDescription: 'A major manufacturing company in Shenzhen was struggling with aging on-premises infrastructure that was expensive to maintain and couldn\'t scale with their growing business. We executed a comprehensive cloud migration strategy, moving their critical business applications and data to a modern cloud architecture.',
    challenge: 'The client had over 15 years of legacy systems with complex interdependencies. Any downtime during migration would result in significant production losses. Data security and compliance requirements added additional complexity.',
    solution: 'We designed a phased migration approach using AWS services, containerized applications with Docker, and implemented Kubernetes for orchestration. This allowed for zero-downtime migration with automatic failover capabilities.',
    results: [
      '40% reduction in IT operational costs',
      'Zero downtime during the entire migration',
      'Auto-scaling capability handling 300% traffic spikes',
      'Improved disaster recovery with 15-minute RTO',
      'Enhanced security with automated compliance monitoring'
    ],
  },
  {
    title: 'Data Analytics Dashboard',
    category: 'Database Management',
    description: 'Designed a real-time analytics dashboard helping the client make data-driven decisions.',
    icon: Database,
    tags: ['Python', 'MongoDB', 'Grafana'],
    color: 'from-green-500 to-green-600',
    client: 'Pearl River Logistics',
    duration: '3 months',
    team: '3 developers',
    fullDescription: 'A logistics company managing thousands of shipments daily needed real-time visibility into their operations. We built a comprehensive analytics dashboard that aggregates data from multiple sources and presents actionable insights to management and operations teams.',
    challenge: 'Data was scattered across multiple systems including GPS tracking, warehouse management, and customer databases. The client needed a unified view with real-time updates and historical trend analysis.',
    solution: 'We implemented a MongoDB-based data lake to aggregate all data sources, built custom Python ETL pipelines for data processing, and created interactive Grafana dashboards with real-time updates and alerting capabilities.',
    results: [
      'Real-time visibility across 10,000+ daily shipments',
      '25% improvement in delivery time predictions',
      'Automated alerts reducing response time by 60%',
      'Executive dashboards accessed 500+ times daily',
      'Historical analysis enabling strategic route optimization'
    ],
  },
  {
    title: 'SaaS Application',
    category: 'Custom Development',
    description: 'Developed a multi-tenant SaaS platform for a startup, now serving 500+ businesses.',
    icon: Code2,
    tags: ['Next.js', 'Prisma', 'Stripe'],
    color: 'from-orange-500 to-orange-600',
    client: 'HRTech Startup',
    duration: '8 months',
    team: '6 developers',
    fullDescription: 'An ambitious startup approached us with a vision to revolutionize HR management for small businesses in China. We built their entire SaaS platform from concept to launch, including employee management, payroll processing, leave tracking, and compliance reporting features.',
    challenge: 'The platform needed to handle multiple business tenants with complete data isolation, comply with Chinese labor regulations, and scale efficiently as the user base grew. Integration with various payroll and tax systems was essential.',
    solution: 'We built a modern Next.js application with a multi-tenant architecture using Prisma ORM. Implemented Stripe for subscription billing, designed a robust permission system, and created APIs for third-party integrations.',
    results: [
      '500+ businesses onboarded within first year',
      '15,000+ employees managed on the platform',
      '99.95% platform availability',
      '¥2M+ in transactions processed monthly',
      'Featured in TechNode as a rising HR startup'
    ],
  },
];

const testimonials = [
  {
    quote: "Guangzhou Xiang Technology transformed our online presence. Their hosting is rock-solid and support is exceptional.",
    author: "Li Wei",
    role: "CEO, TechStart Co.",
  },
  {
    quote: "The custom software they built for us streamlined our operations completely. Highly recommended!",
    author: "Sarah Chen",
    role: "Operations Manager, Retail Plus",
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Projects That <span className="text-[#E53935]">Deliver Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of our successful projects and see how we've helped
            businesses achieve their technology goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {projects?.map?.((project, index) => {
            const Icon = project?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-50 hover:bg-gray-900 rounded-2xl p-6 sm:p-8 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${project?.color ?? 'from-gray-500 to-gray-600'} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                  {Icon && <Icon className="w-7 h-7 text-white" />}
                </div>
                <span className="text-sm text-[#E53935] font-medium">
                  {project?.category ?? ''}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mt-2 mb-3 transition-colors">
                  {project?.title ?? ''}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 mb-5 transition-colors">
                  {project?.description ?? ''}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project?.tags?.map?.((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 group-hover:bg-gray-800 text-gray-700 group-hover:text-gray-300 px-3 py-1 rounded-full transition-colors"
                    >
                      {tag ?? ''}
                    </span>
                  )) ?? null}
                </div>
                <button
                  onClick={() => openModal(index)}
                  className="flex items-center text-[#E53935] font-medium hover:text-[#C62828] transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </button>
              </motion.div>
            );
          }) ?? null}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
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
                  const project = projects[selectedProject];
                  const Icon = project?.icon;
                  
                  return (
                    <>
                      {/* Modal Header */}
                      <div className={`relative bg-gradient-to-br ${project?.color ?? 'from-gray-500 to-gray-600'} p-8 sm:p-10`}>
                        {/* Close Button */}
                        <button
                          onClick={closeModal}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                            {Icon && <Icon className="w-7 h-7 text-white" />}
                          </div>
                          <div>
                            <span className="text-white/80 text-sm font-medium">{project?.category ?? ''}</span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                              {project?.title ?? ''}
                            </h3>
                          </div>
                        </div>

                        {/* Project Meta */}
                        <div className="flex flex-wrap gap-4 mt-6">
                          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">{project?.client ?? ''}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                            <Calendar className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">{project?.duration ?? ''}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-white text-sm">{project?.team ?? ''}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project?.tags?.map?.((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/30 text-white px-3 py-1 rounded-full"
                            >
                              {tag ?? ''}
                            </span>
                          )) ?? null}
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="p-6 sm:p-8">
                        {/* Overview */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h4>
                          <p className="text-gray-600 leading-relaxed">
                            {project?.fullDescription ?? ''}
                          </p>
                        </div>

                        {/* Challenge */}
                        <div className="mb-8 bg-red-50 p-6 rounded-xl border-l-4 border-[#E53935]">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">The Challenge</h4>
                          <p className="text-gray-600">
                            {project?.challenge ?? ''}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-8 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Our Solution</h4>
                          <p className="text-gray-600">
                            {project?.solution ?? ''}
                          </p>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            Key Results
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project?.results?.map?.((result, i) => (
                              <div key={i} className="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-sm text-gray-700">{result ?? ''}</span>
                              </div>
                            )) ?? null}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            href="#contact"
                            onClick={closeModal}
                            className="flex-1 bg-[#E53935] hover:bg-[#C62828] text-white text-center py-4 px-6 rounded-xl font-semibold transition-colors"
                          >
                            Start a Similar Project
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

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials?.map?.((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl"
              >
                <p className="text-white text-lg mb-6 italic">
                  "{testimonial?.quote ?? ''}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial?.author ?? ''}</p>
                  <p className="text-gray-400 text-sm">{testimonial?.role ?? ''}</p>
                </div>
              </div>
            )) ?? null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
