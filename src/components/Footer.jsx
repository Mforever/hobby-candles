import { Link } from 'react-router-dom';
import { FaFire, FaTelegram, FaVk, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-amber-100 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FaFire className="text-2xl text-amber-600" />
              <span className="font-serif text-xl font-bold">СвечнойБлог</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Сообщество свечеваров. Делимся рецептами, техниками и секретами
              создания идеальных свечей. Присоединяйся!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition"><FaTelegram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition"><FaVk size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition"><FaYoutube size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Рубрики</h3>
            <ul className="space-y-2">
              <li><Link to="/category/wax" className="text-gray-600 hover:text-amber-600">Воск</Link></li>
              <li><Link to="/category/fragrances" className="text-gray-600 hover:text-amber-600">Ароматы</Link></li>
              <li><Link to="/category/wicks" className="text-gray-600 hover:text-amber-600">Фитили</Link></li>
              <li><Link to="/category/molds" className="text-gray-600 hover:text-amber-600">Формы</Link></li>
              <li><Link to="/category/decor" className="text-gray-600 hover:text-amber-600">Декор</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-amber-600">О проекте</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-amber-600">Контакты</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-amber-600">Конфиденциальность</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-100 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 СвечнойБлог. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}