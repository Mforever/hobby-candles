import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function YandexAd({ blockId, slotId, className = '' }) {
    const location = useLocation();
    const adRef = useRef(null);
    const isAdRendered = useRef(false);

    useEffect(() => {
        // Убеждаемся, что объект Ya существует
        if (typeof window.Ya === 'undefined' || !window.Ya.Context) {
            // Если скрипт еще не загрузился, ждем и пробуем снова
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
            // Очищаем контейнер перед новым рендером (важно для SPA)
            if (adRef.current) {
                adRef.current.innerHTML = '';
            }

            // Добавляем контейнер обратно
            const container = document.createElement('div');
            container.id = `yandex_rtb_${slotId}`;
            if (adRef.current) {
                adRef.current.appendChild(container);
            }

            // Рендерим рекламу
            window.yaContextCb.push(() => {
                window.Ya.Context.AdvManager.render({
                    "blockId": blockId,
                    "renderTo": `yandex_rtb_${slotId}`,
                    "type": "floorAd", // Можно убрать или заменить на нужный тип
                    "platform": "desktop" // или "touch" для мобильных
                });
            });
        }

        // Очищаем при размонтировании компонента
        return () => {
            if (adRef.current) {
                adRef.current.innerHTML = '';
            }
        };
    }, [blockId, slotId, location.pathname]); // 👈 Перезапускаем при смене страницы

    return <div ref={adRef} className={`ad-container ${className}`} />;
}