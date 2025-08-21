import ZoomInOnScroll from '../animations/zoom-load.jsx'

export default function Home() {
  return (
    <section id="home" className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-2">

          <div className="flex flex-col justify-center items-center flex-1">
            <ZoomInOnScroll delay={0}>
              <h1 className="text-4xl md:text-5xl font-medium mb-4 text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                Hi, I'm Caroline!
              </h1>
            </ZoomInOnScroll>
            <ZoomInOnScroll delay={0.2}>
              <p className="text-lg mb-8 text-center opacity-70 hover:scale-110 transition-transform duration-300 cursor-pointer">
                Big Data | Data Science | Data Engineering  
              </p>
            </ZoomInOnScroll>
            <ZoomInOnScroll delay={0.4}>
              <a href="#resume">
                <button className="btn btn-soft w-fit mb-2">
                  check out my experience
                </button>
                </a>
            </ZoomInOnScroll>
            <ZoomInOnScroll delay={0.4}>
              <a href="https://www.linkedin.com/in/carolinerobinsonn/" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-ghost btn-secondary w-fit">
                  let's connect!
                </button>
                </a>
            </ZoomInOnScroll>
          </div>

          <div className="flex-1 flex justify-center mb-12">
            <ZoomInOnScroll delay={0.6}>
              <img 
                src="/pfp.png" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"/>
            </ZoomInOnScroll>
          </div>
          
        </div>
      </main>
    </section>
  )
}