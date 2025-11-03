export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Namratha — DevOps Engineer. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
