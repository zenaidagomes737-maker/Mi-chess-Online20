export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h2 className="text-4xl font-bold">Bienvenido a Tornel.com</h2>
      <p className="text-lg text-gray-700">Juega online, crea torneos y mejora tu Elo</p>
      <div className="space-x-4">
        <a href="/register" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Registrarse</a>
        <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Iniciar Sesión</a>
      </div>
    </div>
  );
}
