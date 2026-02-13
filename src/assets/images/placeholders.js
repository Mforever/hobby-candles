// ============================================
// 🎨 ГЕОМЕТРИЧЕСКИЕ ПАТТЕРНЫ ДЛЯ КАРТОЧЕК СТАТЕЙ
// ============================================

export const articlePlaceholders = {
  // 🟡 ВОСК - круги с градиентом
  wax: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23FFF3E0;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23FFE0B2;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Ccircle cx="400" cy="300" r="200" fill="%23FFB74D" opacity="0.15"/%3E%3Ccircle cx="150" cy="150" r="80" fill="%23FF9800" opacity="0.12"/%3E%3Ccircle cx="650" cy="450" r="120" fill="%23FF9800" opacity="0.12"/%3E%3C/svg%3E',

  // 🌸 АРОМАТЫ - круги с градиентом
  fragrances: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23F3E5F5;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23E1BEE7;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Ccircle cx="400" cy="300" r="200" fill="%23BA68C8" opacity="0.15"/%3E%3Ccircle cx="200" cy="200" r="60" fill="%23AB47BC" opacity="0.12"/%3E%3Ccircle cx="600" cy="400" r="100" fill="%23AB47BC" opacity="0.12"/%3E%3C/svg%3E',

  // 🧵 ФИТИЛИ - квадраты с градиентом
  wicks: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23E8F5E9;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23C8E6C9;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Crect x="300" y="200" width="200" height="200" fill="%234CAF50" opacity="0.15"/%3E%3Crect x="100" y="100" width="50" height="50" fill="%234CAF50" opacity="0.12"/%3E%3Crect x="600" y="400" width="100" height="100" fill="%234CAF50" opacity="0.12"/%3E%3C/svg%3E',

  // 🧊 ФОРМЫ - треугольники с градиентом
  molds: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23E3F2FD;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23BBDEFB;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Cpolygon points="400,200 500,300 400,400 300,300" fill="%232196F3" opacity="0.15"/%3E%3Cpolygon points="200,150 250,200 200,250 150,200" fill="%232196F3" opacity="0.12"/%3E%3Cpolygon points="600,400 680,480 600,560 520,480" fill="%232196F3" opacity="0.12"/%3E%3C/svg%3E',

  // ✨ ДЕКОР - треугольники с градиентом
  decor: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23FCE4EC;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23F8BBD0;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Cpolygon points="400,200 450,300 350,300" fill="%23EC407A" opacity="0.15"/%3E%3Cpolygon points="200,400 250,500 150,500" fill="%23EC407A" opacity="0.12"/%3E%3Cpolygon points="600,300 650,400 550,400" fill="%23EC407A" opacity="0.12"/%3E%3C/svg%3E',

  // 💼 БИЗНЕС - шестиугольники с градиентом
  business: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23ECEFF1;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23CFD8DC;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Cpolygon points="400,200 500,250 500,350 400,400 300,350 300,250" fill="%23545E6B" opacity="0.15"/%3E%3Cpolygon points="200,150 260,180 260,250 200,280 140,250 140,180" fill="%23545E6B" opacity="0.12"/%3E%3C/svg%3E',

  // 🔥 ПО УМОЛЧАНИЮ - теплый градиент
  default: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23FFF8E1;stop-opacity:1"/%3E%3Cstop offset="100%25" style="stop-color:%23FFECB3;stop-opacity:1"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23grad)"/%3E%3Ccircle cx="300" cy="250" r="120" fill="%23FFB74D" opacity="0.15"/%3E%3Crect x="500" y="350" width="80" height="80" fill="%23FF9800" opacity="0.12"/%3E%3Cpolygon points="200,400 230,450 170,450" fill="%23FF9800" opacity="0.12"/%3E%3C/svg%3E'
};

// ============================================
// 🚀 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ КАРТИНКИ ПО КАТЕГОРИИ
// ============================================

export const getArticleImage = (category) => {
  return articlePlaceholders[category] || articlePlaceholders.default;
};

export default articlePlaceholders;