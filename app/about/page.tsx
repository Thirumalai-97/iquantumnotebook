export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold text-white">About Me</h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        I’m <span className="text-cyan-400 font-semibold">Thirumalai</span>,  
        a Quantum Engineer working in
        <span className="text-violet-400"> Quantum Algorithms </span>
        <span className="text-cyan-400"> Research and Development </span>  
        
      </p>

      <p className="text-gray-400 leading-relaxed">
        My work focuses on variational quantum algorithms, optimization,
        quantum ML, and building practical quantum applications.  
        I write to document my journey, share insights, and explore the
        deeper patterns behind Quantum Technology.
      </p>

      <p className="text-gray-400 leading-relaxed">
        This blog is a collection of essays — ranging from quantum computing 
        guides, research notes, career thoughts, philosophy, and personal life.
      </p>

      <h2 className="text-2xl text-cyan-400 font-semibold mt-10">Connect</h2>
      <ul className="text-gray-300 space-y-2">
        <li>📌 Portfolio — <a className="text-cyan-400" href="https://thirumalai-97.github.io/portfolio" target="_blank">Visit Portfolio</a></li>
        <li>💼 LinkedIn — <a className="text-cyan-400" href="https://www.linkedin.com/in/m-thirumalai/" target="_blank">LinkedIn</a></li>
        <li>📧 Email — er.mthirumalai@gmail.com</li>
      </ul>
    </section>
  );
}
