import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function YandexAdBanner({ blockId, className = '' }) {
    const location = useLocation();
    const containerRef = useRef(null);
    const adId = `yandex_rtb_${blockId.replace(/-/g, '_')}`;

    useEffect(() => {
        // Функция для рендера рекламы
        const renderAd = () => {
            if (containerRef.current) {
                // Очищаем контейнер перед новым рендером
                containerRef.current.innerHTML = '';

                // Создаем новый контейнер для рекламы
                const container = document.createElement('div');
                container.id = adId;
                containerRef.current.appendChild(container);

                // Рендерим рекламу через API Яндекса
                window.yaContextCb.push(() => {
                    window.Ya.Context.AdvManager.render({
                        blockId: blockId,
                        renderTo: adId,
                        type: 'floorAd', // Можно убрать или заменить
                        platform: 'desktop' // или 'touch' для мобильных
                    });
                });
            }
        };

        // Проверяем, загрузился ли скрипт Яндекса
        if (typeof window.Ya === 'undefined' || !window.Ya.Context) {
            // Если скрипт еще не загружен, ждем
            const checkYa = setInterval(() => {
                if (window.Ya && window.Ya.Context) {
                    clearInterval(checkYa);
                    renderAd();
                }
            }, 100);
            return () => clearInterval(checkYa);
        } else {
            renderAd();
        }

        // Очищаем при размонтировании компонента
        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [blockId, location.pathname]); // 👈 Перезапускаем при смене страницы

    return <div ref={containerRef} className={`ad-container ${className}`} />;
}