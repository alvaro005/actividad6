import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import CreateProduct from "./components/CreateProduct";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        {/* Header */}
        <header className="fixed w-full top-0 z-50">
          <div className="bg-white/70 backdrop-blur-lg border-b border-purple-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 items-center h-20">
                {/* Menú Móvil - Izquierda */}
                <div className="md:hidden flex justify-start">
                  <button className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>

                {/* Logo y Nombre - Centro */}
                <div className="flex justify-center">
                  <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative bg-white p-2 rounded-lg">
                        <svg
                          className="h-8 w-8 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        NexusShop
                      </h1>
                      <p className="text-xs text-gray-500">
                        Donde la innovación se encuentra
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Navegación Principal - Derecha */}
                <div className="hidden md:flex justify-end items-center space-x-8">
                  <Link
                    to="/"
                    className="relative group px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    <span className="relative z-10">Productos</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                  <Link
                    to="/create"
                    className="relative group px-6 py-2.5 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Crear Producto
                    </span>
                    <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/create" element={<CreateProduct />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/70 backdrop-blur-lg border-t border-purple-100 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Columna 1 - Información */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  NexusShop
                </h3>
                <p className="text-gray-600 text-sm">
                  Tu destino para descubrir productos únicos y extraordinarios.
                </p>
              </div>

              {/* Columna 2 - Enlaces Rápidos */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Enlaces Rápidos
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-purple-600 text-sm transition-colors duration-200"
                    >
                      Productos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create"
                      className="text-gray-600 hover:text-purple-600 text-sm transition-colors duration-200"
                    >
                      Crear Producto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Columna 3 - Redes Sociales */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Síguenos
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-purple-100">
              <p className="text-center text-gray-500 text-sm">
                © 2024 NexusShop. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
