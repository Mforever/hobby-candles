import { Helmet } from 'react-helmet-async';
import { FaFire, FaUsers, FaHeart, FaLeaf } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Helmet>
        <title>О проекте | СвечнойБлог</title>
      </Helmet>

      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              О проекте <span className="text-amber-600">СвечнойБлог</span>
            </h1>
            <p className="text-xl text-gray-700">
              Мы создали этот блог, чтобы делиться знаниями о свечеварении
              и вдохновлять на творчество.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaFire, title: 'Наша миссия', text: 'Популяризировать свечеварение как доступное и увлекательное хобби' },
              { icon: FaUsers, title: 'Сообщество', text: 'Объединяем тысячи свечеваров, помогаем обмениваться опытом' },
              { icon: FaHeart, title: 'С любовью', text: 'Каждая статья написана практиками и проверена на опыте' },
              { icon: FaLeaf, title: 'Натурально', text: 'Пропагандируем экологичные материалы и безопасные технологии' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="bg-amber-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-3xl text-amber-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}