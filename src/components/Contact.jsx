function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 text-center">
      <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
        Get in touch
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's work together</h1>
      <p className="text-base-content/70 max-w-xl mx-auto mb-10">
        Have a project in mind, a question, or just want to say hi? My inbox is
        always open — I'll try my best to get back to you.
      </p>

      {/* Direct contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <a
          href="mailto:abhinavsree243@gmail.com"
          className="group flex items-center gap-4 p-4 rounded-xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200"
        >
          <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
          </span>
          <div className="text-left overflow-hidden">
            <p className="text-sm text-base-content/60">Email</p>
            <p className="font-medium truncate group-hover:text-primary transition-colors">
              abhinavsree243@gmail.com
            </p>
          </div>
        </a>

        <a
          href="tel:+917356002538"
          className="group flex items-center gap-4 p-4 rounded-xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200"
        >
          <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
            </svg>
          </span>
          <div className="text-left overflow-hidden">
            <p className="text-sm text-base-content/60">Phone</p>
            <p className="font-medium truncate group-hover:text-primary transition-colors">
              +91 73560 02538
            </p>
          </div>
        </a>
      </div>

      {/* Social links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <a
          href="https://github.com/AbhiOO4"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost border border-base-300 hover:border-primary/50"
        >
          GitHub
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/abhinav-sreejith/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost border border-base-300 hover:border-primary/50"
        >
          LinkedIn
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
        <a
          href="https://leetcode.com/u/IP1g4JxdNy/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost border border-base-300 hover:border-primary/50"
        >
          LeetCode
          <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        </a>
      </div>

      <p className="text-base-content/50 text-sm mt-12">
        © {new Date().getFullYear()} Abhinav Sreejith. Built with React & Tailwind.
      </p>
    </div>
  )
}

export default Contact
