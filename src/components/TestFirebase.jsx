import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function TestFirebase() {
  const [status, setStatus] = useState('Проверяю...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'comments'));
        setStatus(`✅ Подключено! Найдено документов: ${querySnapshot.size}`);
      } catch (error) {
        setStatus(`❌ Ошибка: ${error.message}`);
        console.error(error);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3>Firebase Status:</h3>
      <p>{status}</p>
    </div>
  );
}