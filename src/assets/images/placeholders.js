// ============================================
// 🎨 ГЕОМЕТРИЧЕСКИЕ ПАТТЕРНЫ ДЛЯ КАРТОЧЕК СТАТЕЙ
// ============================================

export const articlePlaceholders = {
  // 🟡 ВОСК - круги
  wax: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23FFF3E0"/%3E%3Ccircle cx="400" cy="300" r="200" fill="%23FFB74D" opacity="0.12"/%3E%3Ccircle cx="150" cy="150" r="80" fill="%23FF9800" opacity="0.1"/%3E%3Ccircle cx="650" cy="450" r="120" fill="%23FF9800" opacity="0.1"/%3E%3Ccircle cx="100" cy="500" r="60" fill="%23FFB74D" opacity="0.08"/%3E%3Ccircle cx="700" cy="100" r="90" fill="%23FFB74D" opacity="0.08"/%3E%3C/svg%3E',

  // 🌸 АРОМАТЫ - круги (фиолетовые)
  fragrances: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23F3E5F5"/%3E%3Ccircle cx="400" cy="300" r="200" fill="%23BA68C8" opacity="0.12"/%3E%3Ccircle cx="200" cy="200" r="60" fill="%23AB47BC" opacity="0.1"/%3E%3Ccircle cx="600" cy="400" r="100" fill="%23AB47BC" opacity="0.1"/%3E%3Ccircle cx="250" cy="500" r="70" fill="%23BA68C8" opacity="0.08"/%3E%3Ccircle cx="550" cy="150" r="80" fill="%23BA68C8" opacity="0.08"/%3E%3C/svg%3E',

  // 🧵 ФИТИЛИ - квадраты (зеленые)
  wicks: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23E8F5E9"/%3E%3Crect x="300" y="200" width="200" height="200" fill="%234CAF50" opacity="0.12"/%3E%3Crect x="100" y="100" width="50" height="50" fill="%234CAF50" opacity="0.1"/%3E%3Crect x="600" y="400" width="100" height="100" fill="%234CAF50" opacity="0.1"/%3E%3Crect x="500" y="50" width="40" height="40" fill="%234CAF50" opacity="0.08"/%3E%3Crect x="50" y="450" width="70" height="70" fill="%234CAF50" opacity="0.08"/%3E%3C/svg%3E',

  // 🧊 ФОРМЫ - треугольники (синие)
  molds: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23E3F2FD"/%3E%3Cpolygon points="400,200 500,300 400,400 300,300" fill="%232196F3" opacity="0.12"/%3E%3Cpolygon points="200,150 250,200 200,250 150,200" fill="%232196F3" opacity="0.1"/%3E%3Cpolygon points="600,400 680,480 600,560 520,480" fill="%232196F3" opacity="0.1"/%3E%3Cpolygon points="100,400 140,450 100,500 60,450" fill="%232196F3" opacity="0.08"/%3E%3Cpolygon points="700,200 750,250 700,300 650,250" fill="%232196F3" opacity="0.08"/%3E%3C/svg%3E',

  // ✨ ДЕКОР - треугольники (розовые)
  decor: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23FCE4EC"/%3E%3Cpolygon points="400,200 450,300 350,300" fill="%23EC407A" opacity="0.12"/%3E%3Cpolygon points="200,400 250,500 150,500" fill="%23EC407A" opacity="0.1"/%3E%3Cpolygon points="600,300 650,400 550,400" fill="%23EC407A" opacity="0.1"/%3E%3Cpolygon points="100,150 130,200 70,200" fill="%23EC407A" opacity="0.08"/%3E%3Cpolygon points="700,450 740,520 660,520" fill="%23EC407A" opacity="0.08"/%3E%3C/svg%3E',

  // 💼 БИЗНЕС - шестиугольники/сложные формы
  business: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23ECEFF1"/%3E%3Cpolygon points="400,200 500,250 500,350 400,400 300,350 300,250" fill="%23545E6B" opacity="0.12"/%3E%3Cpolygon points="200,150 260,180 260,250 200,280 140,250 140,180" fill="%23545E6B" opacity="0.1"/%3E%3Cpolygon points="650,350 710,380 710,450 650,480 590,450 590,380" fill="%23545E6B" opacity="0.08"/%3E%3C/svg%3E',

  // 🔥 ПО УМОЛЧАНИЮ - смесь геометрии (теплые тона)
  default: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23FFF8E1"/%3E%3Ccircle cx="300" cy="250" r="120" fill="%23FFB74D" opacity="0.12"/%3E%3Crect x="500" y="350" width="80" height="80" fill="%23FF9800" opacity="0.1"/%3E%3Cpolygon points="200,400 230,450 170,450" fill="%23FF9800" opacity="0.1"/%3E%3Ccircle cx="650" cy="200" r="60" fill="%23FFB74D" opacity="0.08"/%3E%3C/svg%3E'
};

// ============================================
// 🚀 ФУНКЦИЯ ДЛЯ ПОЛУЧЕНИЯ КАРТИНКИ ПО КАТЕГОРИИ
// ============================================

export const getArticleImage = (category) => {
  return articlePlaceholders[category] || articlePlaceholders.default;
};

export default articlePlaceholders;