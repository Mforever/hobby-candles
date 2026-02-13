import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function YandexAd({ blockId, className = '' }) {
    const location = useLocation();
    const containerRef = useRef(null);
    const adId = `yandex_rtb_${blockId.replace(/-/g, '_')}`;

    useEffect(() => {
        // Убеждаемся, что объект Ya существует
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

        function renderAd() {
            // Очищаем контейнер перед новым рендером
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
                const container = document.createElement('div');
                container.id = adId;
                containerRef.current.appendChild(container);

                // Рендерим рекламу
                window.yaContextCb.push(() => {
                    Ya.Context.AdvManager.render({
                        blockId: blockId,
                        renderTo: adId,
                        type: 'floorAd', // Можно убрать или заменить
                    });
                });
            }
        }

        // Очищаем при размонтировании
        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [blockId, location.pathname]); // 👈 Перезапускаем при смене страницы

    return <div ref={containerRef} className={`ad-container ${className}`} />;
}