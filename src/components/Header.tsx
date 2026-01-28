

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-sie.png" alt="SIE Logo" className="h-20 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#funcionalidades"
            className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
          >
            Funcionalidades
          </a>
          <a
            href="#como-funciona"
            className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
          >
            Como Funciona
          </a>
          <a
            href="#seguranca"
            className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
          >
            Segurança
          </a>
          <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all font-semibold shadow-sm hover:shadow-md">
            Solicitar Demo
          </button>
        </nav>
      </div>
    </header>
  );
}
