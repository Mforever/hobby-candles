import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12 my-12">
      <div className="max-w-2xl mx-auto text-center">
        <FaEnvelope className="text-4xl text-amber-600 mx-auto mb-4" />
        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
          Ничего не пропускайте
        </h3>
        <p className="text-gray-700 mb-6">
          Подпишитесь на рассылку и получайте новые рецепты свечей первыми
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ваш email"
            required
            className="flex-1 px-6 py-3 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition font-medium disabled:opacity-50"
          >
            {status === 'loading' ? 'Отправка...' : 'Подписаться'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-600 mt-3">✓ Спасибо за подписку!</p>
        )}
      </div>
    </div>
  );
}