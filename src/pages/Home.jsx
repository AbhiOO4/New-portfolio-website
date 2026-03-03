
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import VideoBg from '../components/VideoBg'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'

function Home({ setIsChecked, isChecked }) {
    return (
        <div className=''>
            <Navbar setIsChecked={setIsChecked} isChecked={isChecked} />
            <>
                <section
                    id="about"
                    className="min-h-screen"
                >
                    <VideoBg>
                        <HeroSection />
                    </VideoBg>
                </section>

                <section id="skills" className="min-h-screen flex items-center justify-center bg-base-200">
                    <Skills />
                </section>

                <section id="projects" className="min-h-screen flex items-center justify-center">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                        <ProjectCard
                            title={"Modus - Task Manager"}
                            description={
                                "A modern full-stack productivity web app that helps users manage tasks, track progress, and collaborate in real time with a clean and responsive UI."
                            }
                            techStack={[
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "JWT Auth"
                            ]}
                            liveLink={"https://modus-demo.vercel.app"}
                            gitLink={"https://github.com/username/modus-project"}
                        />
                        <ProjectCard
                            title={"Modus - Task Manager"}
                            description={
                                "A modern full-stack productivity web app that helps users manage tasks, track progress, and collaborate in real time with a clean and responsive UI."
                            }
                            techStack={[
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "JWT Auth"
                            ]}
                            liveLink={"https://modus-demo.vercel.app"}
                            gitLink={"https://github.com/username/modus-project"}
                        />
                        <ProjectCard
                            title={"Modus - Task Manager"}
                            description={
                                "A modern full-stack productivity web app that helps users manage tasks, track progress, and collaborate in real time with a clean and responsive UI."
                            }
                            techStack={[
                                "React",
                                "Tailwind CSS",
                                "Node.js",
                                "Express",
                                "MongoDB",
                                "JWT Auth"
                            ]}
                            liveLink={"https://modus-demo.vercel.app"}
                            gitLink={"https://github.com/username/modus-project"}
                        />
                        
                    </div>
                </section>

                <footer id="contact" className="min-h-screen flex items-center justify-center bg-base-200">
                    <h1 className="text-4xl font-bold">Contact</h1>
                </footer>
            </>
        </div>
    )
}

export default Home
