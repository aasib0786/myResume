// 'use client';

// import { useEffect, useState } from 'react';

// export default function SkillsSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = document.getElementById('skills');
//     if (element) {
//       observer.observe(element);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const skills = [
//     {
//       category: 'Frontend',
//       technologies: [
//         { name: 'React', level: 95, icon: 'ri-reactjs-line' },
//         { name: 'Next.js', level: 90, icon: 'ri-nextjs-line' },
//         { name: 'TypeScript', level: 88, icon: 'ri-code-line' },
//         { name: 'Redux.js', level: 85, icon: 'ri-vuejs-line' },
//         { name: 'ReduxToolkit.js', level: 85, icon: 'ri-vuejs-line' },
//         { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
//       ]
//     },
//     {
//       category: 'Backend',
//       technologies: [
//         { name: 'Node.js', level: 90, icon: 'ri-nodejs-line' },
//         { name: 'JavaScript', level: 85, icon: 'ri-code-s-slash-line' },
//         { name: 'Express.JS ', level: 80, icon: 'ri-java-line' },
//         { name: 'MySQL', level: 88, icon: 'ri-database-line' },
//         { name: 'MongoDB', level: 85, icon: 'ri-database-2-line' }
//       ]
//     },
//     {
//       category: 'CSS Frameworks',
//       technologies: [
//         { name: 'Bootstrap', level: 95, icon: 'ri-reactjs-line' },
//         { name: 'Material UI', level: 90, icon: 'ri-nextjs-line' },
//         { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
//       ]
//     },
//     {
//       category: 'Extra Skills & Tools',
//       technologies: [
//         { name: 'Git', level: 85, icon: 'ri-instance-line' },
//         { name: 'Git Hub', level: 95, icon: 'ri-git-branch-line' },
//         { name: 'Visual Studio Code', level: 82, icon: 'ri-cloud-line' },
//         { name: 'Canva', level: 60, icon: 'ri-settings-3-line' },
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}>
//             <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
//               Skills & Technologies
//             </h2>

//             <div className="grid md:grid-cols-3 gap-8">
//               {skills.map((skillGroup, groupIndex) => (
//                 <div
//                   key={skillGroup.category}
//                   className={`bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//                     }`}
//                   style={{ transitionDelay: `${groupIndex * 200}ms` }}
//                 >
//                   <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//                     {skillGroup.category}
//                   </h3>

//                   <div className="space-y-6">
//                     {skillGroup.technologies.map((tech, techIndex) => (
//                       <div key={tech.name} className="space-y-2">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <div className="w-8 h-8 flex items-center justify-center">
//                               <i className={`${tech.icon} text-xl text-blue-600`}></i>
//                             </div>
//                             <span className="font-semibold text-gray-700">{tech.name}</span>
//                           </div>
//                           <span className="text-sm text-gray-500 font-medium">{tech.level}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div
//                             className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
//                             style={{
//                               width: isVisible ? `${tech.level}%` : '0%',
//                               transitionDelay: `${(groupIndex * 200) + (techIndex * 100)}ms`
//                             }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import './Skills.css';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', level: 95, icon: 'ri-reactjs-line' },
        { name: 'Next.js', level: 90, icon: 'ri-nextjs-line' },
        { name: 'TypeScript', level: 88, icon: 'ri-code-line' },
        { name: 'Redux.js', level: 85, icon: 'ri-vuejs-line' },
        { name: 'ReduxToolkit.js', level: 85, icon: 'ri-vuejs-line' },
        { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', level: 90, icon: 'ri-nodejs-line' },
        { name: 'JavaScript', level: 85, icon: 'ri-code-s-slash-line' },
        { name: 'C Language', level: 85, icon: 'ri-code-s-slash-line' },
        { name: 'Express.JS ', level: 80, icon: 'ri-java-line' },
        { name: 'MySQL', level: 88, icon: 'ri-database-line' },
        { name: 'MongoDB', level: 85, icon: 'ri-database-2-line' }
      ]
    },
    {
      category: 'CSS Frameworks',
      technologies: [
        { name: 'Bootstrap', level: 95, icon: 'ri-reactjs-line' },
        { name: 'Material UI', level: 90, icon: 'ri-nextjs-line' },
        { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
      ]
    },
    {
      category: 'Extra Skills & Tools',
      technologies: [
        { name: 'Git', level: 85, icon: 'ri-instance-line' },
        { name: 'Git Hub', level: 95, icon: 'ri-git-branch-line' },
        { name: 'Visual Studio Code', level: 82, icon: 'ri-cloud-line' },
        { name: 'Canva', level: 60, icon: 'ri-settings-3-line' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`skill-section ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <div
                  key={skillGroup.category}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg skill-container"
                  style={{
                    animationDelay: isVisible ? `${groupIndex * 200}ms` : '0ms'
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-6">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <div key={tech.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center">
                              <i className={`${tech.icon} text-xl text-blue-600`}></i>
                            </div>
                            <span className="font-semibold text-gray-700">{tech.name}</span>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full skill-bar"
                            style={{
                              width: isVisible ? `${tech.level}%` : '0%',
                              transitionDelay: `${(groupIndex * 200) + (techIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
