function TimeLine() {
  return (
    <ul className="timeline timeline-snap-icon timeline-vertical">

      {/* School */}
      <li>
        <div className="timeline-middle">
          <div className="h-3 w-3 rounded-full bg-base-content"></div>
        </div>

        <div className="timeline-start mb-10 md:text-end max-w-xl">
          <time className="font-mono italic text-[clamp(0.8rem,0.9vw,0.9rem)] opacity-70">
            2019 – 2021
          </time>

          <div className="font-bold text-[clamp(1.1rem,2vw,1.2rem)]">
            Senior Secondary (XII)
          </div>

          <p className="text-[clamp(0.95rem,1.3vw,1.1rem)] leading-relaxed opacity-80">
            Kendriya Vidyalaya (CBSE) Graduated with <b>84%</b>.
          </p>
        </div>

        <hr />
      </li>

      {/* College */}
      <li>
        <hr />

        <div className="timeline-middle">
          <div className="h-3 w-3 rounded-full bg-base-content"></div>
        </div>

        <div className="timeline-end mb-10 max-w-xl">
          <time className="font-mono italic text-[clamp(0.8rem,0.9vw,0.9rem)] opacity-70">
            2021 – 2025
          </time>

          <div className="font-bold text-[clamp(1.1rem,2vw,1.2rem)]">
            B.Tech – Computer Science & Design
          </div>

          <p className="text-[clamp(0.95rem,1.3vw,1.1rem)] leading-relaxed opacity-80">
            APJ Abdul Kalam Technological University
            <br />
            CGPA: <b>7.5 / 10</b>
          </p>
        </div>

        <hr />
      </li>

      {/* Present */}
      <li>
        <hr />

        <div className="timeline-middle">
          <div className="h-3 w-3 rounded-full bg-base-content animate-pulse"></div>
        </div>

        <div className="timeline-start md:text-end max-w-xl">
          <time className="font-mono italic text-[clamp(0.8rem,0.9vw,0.9rem)] opacity-70">
            2025 – Present
          </time>

          <div className="font-bold text-[clamp(1.1rem,2vw,1.25rem)]">
            Full Stack Developer
          </div>

          <p className="text-[clamp(0.95rem,1.3vw,1.0rem)] leading-relaxed opacity-80">
            Currently building projects, improving DSA, and actively
            seeking software developer opportunities.
          </p>
        </div>
      </li>

    </ul>
  );
}

export default TimeLine;