import ZoomInOnScroll from '../animations/zoom-load.jsx'
import Twinkle from '../animations/twinkle-chars.jsx'

import ExperienceList from '../layout/experience-list.jsx';
import { experienceData } from '../data/experience-info.js';
import { educationData } from '../data/education-info.js';
import { projectData } from '../data/project-info.js';

export default function Resume() {
  return (
    <section className="flex flex-col min-h-screen">

      <div className="flex justify-center pt-8">
        <ZoomInOnScroll delay={0}>
          <h2 id="resume" className="text-3xl font-medium text-center scroll-mt-20 mb-4">
            <Twinkle>⋆｡˚✶</Twinkle>
            <span className="mx-4">resume</span>
            <Twinkle>⋆. •⺌</Twinkle>
          </h2>
        </ZoomInOnScroll>
      </div>

      <ZoomInOnScroll delay={0}>
        <div className="min-h-screen py-4">
          <ExperienceList 
              title="Professional Experience" 
              experiences={experienceData} 
          />

          <div className="mb-8"></div>

          <ExperienceList 
            title="Education" 
            experiences={educationData} 
          />

          <div className="mb-8"></div>

          <ExperienceList 
            title="Projects" 
            experiences={projectData} 
          />
          
        </div>
      </ZoomInOnScroll>

    </section>
  )
}