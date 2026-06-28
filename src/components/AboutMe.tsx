export default function AboutMe() {
  return (
    <section id="about-me" className="py-20 px-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <img
        src="https://res.cloudinary.com/dlklqihg6/image/upload/v1760308052/kkchmpjdp9izcjfvvo4k.jpg"
        alt="Mohammad Esa Ali"
        className="w-48 h-48 rounded-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div>
        <h3 className="text-3xl font-bold mb-4">👋 About Me</h3>
        <p className="text-lg text-gray-600 mb-4">
          Hello, I am Mohammad Esa Ali, a passionate and creative tech enthusiast. I specialize in Software Development, Web Solutions, and Creative Design. My goal is to help businesses grow by building smart, future-ready, and user-friendly digital solutions.
        </p>
        <blockquote className="italic text-blue-600 font-medium">
          “Success comes when your clients succeed.”
        </blockquote>
      </div>
    </section>
  );
}
