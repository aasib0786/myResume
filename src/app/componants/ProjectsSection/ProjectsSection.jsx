'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import GPSPROJECTIMAGE from '../../Assses/images/GPS_PROJECT.jpg'; 
import TheMobilePlus from "../../Assses/images/TheMobilePlus.jpg";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // ✅ Stop observing after visible
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: GPSPROJECTIMAGE,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Material UI',],
      liveUrl: 'https://oredogps.com/',
      githubUrl: '',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: TheMobilePlus,
      technologies: ['React', 'Node.js', 'MYSQL', 'Stripe', 'Material UI',],
      liveUrl: 'https://themobileplus.co/',
      githubUrl: '',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.',
      image: 'https://readdy.ai/api/search-image?query=Task%20management%20application%20interface&width=600&height=400',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://readdy.ai/api/search-image?query=Weather%20dashboard%20application%2C%20weather%20forecast%20interface%2C%20meteorological%20data%20visualization%2C%20clean%20modern%20design%2C%20blue%20sky%20background%2C%20weather%20icons%2C%20responsive%20web%20app%2C%20professional%20weather%20app&width=600&height=400&seq=project-3&orientation=landscape',
      technologies: ['Vue.js', 'Express.js', 'OpenWeather API', 'Chart.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'Full-featured social media platform with user profiles, real-time messaging, content sharing, and advanced privacy controls.',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20platform%20interface%2C%20user%20profiles%2C%20news%20feed%20layout%2C%20modern%20social%20networking%20design%2C%20engaging%20user%20interface%2C%20contemporary%20web%20design%2C%20community%20features%2C%20clean%20layout&width=600&height=400&seq=project-4&orientation=landscape',
      technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, progress tracking, video streaming, and interactive assessments.',
      image: 'https://readdy.ai/api/search-image?query=Learning%20management%20system%20interface%2C%20online%20education%20platform%2C%20course%20dashboard%2C%20educational%20technology%2C%20modern%20e-learning%20design%2C%20student%20progress%20tracking%2C%20clean%20academic%20interface&width=600&height=400&seq=project-5&orientation=landscape',
      technologies: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Analytics Dashboard',
      description: 'Business intelligence dashboard with real-time data visualization, custom reports, and advanced filtering capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Business%20analytics%20dashboard%2C%20data%20visualization%20charts%2C%20modern%20dashboard%20interface%2C%20business%20intelligence%20design%2C%20professional%20analytics%20platform%2C%20graphs%20and%20metrics%2C%20clean%20corporate%20design&width=600&height=400&seq=project-6&orientation=landscape',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    }
    // ... (other projects)
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl w-full h-48">
                    {typeof project?.image === 'string' ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
                      >
                        🔗 Live Demo
                      </a>
                      {project.githubUrl.length > 0 &&
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition"
                        >
                          💻 Code
                        </a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
