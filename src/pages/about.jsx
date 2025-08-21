import Twinkle from '../animations/twinkle-chars.jsx';
import ZoomInOnScroll from '../animations/zoom-load.jsx';
import ImageCarousel from '../layout/image-carousel.jsx';

export default function About() {
  return (
    <section className="flex flex-col min-h-screen">
      
      <div className="flex justify-center pt-8">
        <ZoomInOnScroll delay={0}>
          <h2 id="about" className="text-3xl font-medium text-center scroll-mt-20 mb-4">
            <Twinkle>⊹⋆˚⟡</Twinkle>
            <span className="mx-6">about me</span>
            <Twinkle>⋆｡˚✶</Twinkle>
          </h2>
        </ZoomInOnScroll>
      </div>

      <main className="flex-1 flex items-center justify-center flex-col">
        <ZoomInOnScroll delay={0.2}>
          <p className="mb-6 text-center mx-8">
          I'm a Data Science graduate from Chapman University, currently working as a Big Data Engineer at TP-Link Systems, Inc.
          </p>
          <p className="mb-3 text-center mx-8">
          As a data professional with a background in data science and a focus on data engineering, I aim to make complex data more useful and accessible.
          Whether it's building big data pipelines, cleaning messy data, or using machine learning to identify patterns, 
          I enjoy creating practical solutions that help people make better decisions.
          </p>
        </ZoomInOnScroll>
      </main>

      <div className="pb-8">
        <ZoomInOnScroll delay={0.4}>
          <ImageCarousel />
        </ZoomInOnScroll>
      </div>

    </section>
  );
}