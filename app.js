const uiContent = {
  en: {
    brandTagline: "Travel maps for international friends in China",
    openGuide: "Open Guide",
    navMap: "Map",
    navGuide: "Local Guide",
    navFood: "Food",
    navAI: "AI Assistant",
    heroEyebrow: "Five cities, one map-first travel hub",
    heroTitle: "Hello China: a map-style travel gateway designed for international friends.",
    heroText:
      "Pick a city on the national map, switch to the city map instantly, and explore every included attraction with local images, practical tips, and multilingual support.",
    startExploring: "Start Exploring",
    randomCity: "Random City",
    statCities: "featured cities",
    statSpots: "included attractions",
    statLanguages: "UI languages",
    heroPill: "Map + gallery",
    switchboardEyebrow: "China overview",
    switchboardTitle: "Select a city on the national map and jump into its attraction guide.",
    switchboardText:
      "The national map controls the whole page: city map, quick links, selected attraction gallery, and the full attraction list all update together.",
    citySelectorKicker: "City selector",
    citySelectorTitle: "Five featured cities",
    activeCityKicker: "Active city",
    jumpToGuide: "Open city guide",
    chinaMapKicker: "China map",
    chinaMapTitle: "Tourist city entry points",
    chinaMapHint: "Click any city marker to update the city map and attraction list.",
    workspaceEyebrow: "City workspace",
    cityMapKicker: "City map",
    cityMapHint: "Markers on this map are linked to the attraction cards below.",
    focusKicker: "Selected attraction",
    jumpToCard: "Locate card",
    routeKicker: "Suggested route",
    routeTitle: "Friend-friendly city rhythm",
    spotSectionEyebrow: "Attraction list",
    spotSectionTitle: "A curated attraction board for the selected city.",
    cityMapLabel: "Attractions map",
    localTip: "Local tip",
    bestTime: "Best time",
    theme: "Theme",
    quickJump: "Quick jump",
    citySpotCount: "attractions",
    cardsHint: "Click a city, map marker, quick link, or card to update this guide.",
    spotSectionSummary: "Now showing {city} · {spots} attractions",
    activeCitySummary: "Now exploring {city}",
    mapPopupHint: "Open the city guide",
    cardButton: "Ask AI about this spot",
    ticketLink: "Ticket / Booking",
    freeVisitNote: "Free entry for this attraction",
    askAI: "Ask AI",
    foodEyebrow: "Food Guide",
    foodTitle: "Taste each city through local specialties and friendly neighborhoods.",
    foodText: "This module follows the active city and highlights practical picks for breakfast, dinner, and local snacks.",
    foodCard1: "Morning Pick",
    foodCard2: "Dinner Pick",
    foodCard3: "Snack Street",
    aiEyebrow: "AI Concierge",
    aiTitle: "Ask detailed questions about the selected attraction.",
    aiText: "Ask route design, opening windows, transport details, and anti-crowd strategy for the current attraction.",
    aiInputPlaceholder: "Ask anything about this attraction...",
    sendAI: "Send",
    aiContextPrefix: "Current attraction",
    aiConfigMissing: "AI settings are not ready. Set endpoint/model/API key in app.js first.",
    aiThinking: "AI is thinking...",
    aiError: "Request failed. Check endpoint/key/model and try again.",
    routeDynamicTitle: "Route around {spot}",
    routeDynamicDesc: "Built around the selected attraction and nearby stops for a smoother visit."
  },
  zh: {
    brandTagline: "为在华国际友人准备的旅行地图",
    openGuide: "打开导览",
    navMap: "地图",
    navGuide: "地陪",
    navFood: "美食",
    navAI: "AI问答",
    heroEyebrow: "五座城市，一站式地图导览",
    heroTitle: "你好中国：为国际友人设计的地图式旅行入口。",
    heroText:
      "点击中国地图上的城市后，页面会直接切换到对应城市地图，并展示该城市全部景点、本地图片、购票信息与多语言内容。",
    startExploring: "开始探索",
    randomCity: "随机城市",
    statCities: "精选城市",
    statSpots: "已接入景点",
    statLanguages: "界面语言",
    heroPill: "地图 + 图库",
    switchboardEyebrow: "中国总览",
    switchboardTitle: "先在全国地图上选择城市，再直接进入这座城市的景点导览。",
    switchboardText:
      "全国地图会联动整个页面：城市地图、景点快捷跳转、当前景点画廊和完整景点列表会一起更新。",
    citySelectorKicker: "城市选择器",
    citySelectorTitle: "五个重点城市",
    activeCityKicker: "当前城市",
    jumpToGuide: "打开城市导览",
    chinaMapKicker: "中国地图",
    chinaMapTitle: "旅游城市入口",
    chinaMapHint: "点击任意城市标记，即可同步切换城市地图和景点列表。",
    workspaceEyebrow: "城市工作区",
    cityMapKicker: "城市地图",
    cityMapHint: "这个地图上的景点标记与下方景点卡片一一联动。",
    focusKicker: "当前景点",
    jumpToCard: "定位卡片",
    routeKicker: "推荐路线",
    routeTitle: "适合国际友人的城市游览节奏",
    spotSectionEyebrow: "景点列表",
    spotSectionTitle: "这里展示当前城市值得重点呈现的景点看板。",
    cityMapLabel: "景点地图",
    localTip: "本地建议",
    bestTime: "推荐时段",
    theme: "类型",
    quickJump: "快速跳转",
    citySpotCount: "个景点",
    cardsHint: "点击城市、地图标记、快捷入口或卡片，都可以更新当前导览。",
    spotSectionSummary: "当前显示 {city} · {spots} 个景点",
    activeCitySummary: "当前正在浏览 {city}",
    mapPopupHint: "打开城市导览",
    cardButton: "向AI咨询这个景点",
    ticketLink: "购票 / 预约",
    freeVisitNote: "此景点免费参观",
    askAI: "问问AI",
    foodEyebrow: "美食导览",
    foodTitle: "跟着城市节奏，快速找到本地代表性吃喝去处。",
    foodText: "美食模块会跟随当前城市变化，提供早午晚与街区小吃的实用建议。",
    foodCard1: "早餐推荐",
    foodCard2: "晚餐推荐",
    foodCard3: "小吃街区",
    aiEyebrow: "AI 地陪",
    aiTitle: "围绕当前景点发问，获取更具体的旅行建议。",
    aiText: "你可以围绕当前景点继续追问路线设计、开放时间、交通方式与避峰策略。",
    aiInputPlaceholder: "输入你想问的问题，比如如何安排半天行程...",
    sendAI: "发送",
    aiContextPrefix: "当前景点",
    aiConfigMissing: "AI 配置尚未完成，请先在 app.js 中设置 endpoint、model 与 API key。",
    aiThinking: "AI 正在思考...",
    aiError: "请求失败，请检查 Endpoint、Key 或 Model 后重试。",
    routeDynamicTitle: "围绕{spot}展开",
    routeDynamicDesc: "以当前点击景点为核心，并串联周边更顺路的游览点。"
  },
  ja: {
    brandTagline: "中国を旅する国際友人向けマップ",
    openGuide: "ガイドを開く",
    navMap: "地図",
    navGuide: "現地ガイド",
    navFood: "グルメ",
    navAI: "AIアシスタント",
    heroEyebrow: "5都市を1つのハブで",
    heroTitle: "こんにちは中国：国際的な友人のために設計された、地図型の旅行入口。",
    heroText:
      "中国地図で都市を選ぶと、その都市の地図、全観光スポット、ローカル画像、基本情報、多言語UIがまとめて切り替わります。",
    startExploring: "探索を始める",
    randomCity: "ランダム都市",
    statCities: "注目都市",
    statSpots: "収録スポット",
    statLanguages: "UI言語",
    heroPill: "地図 + ギャラリー",
    switchboardEyebrow: "中国全体",
    switchboardTitle: "全国マップで都市を選び、そのまま都市別スポットガイドへ移動。",
    switchboardText:
      "全国マップはページ全体を連動させます。都市マップ、クイックリンク、選択中スポットのギャラリー、一覧カードが同時に更新されます。",
    citySelectorKicker: "都市セレクター",
    citySelectorTitle: "5つの注目都市",
    activeCityKicker: "現在の都市",
    jumpToGuide: "都市ガイドへ",
    chinaMapKicker: "中国マップ",
    chinaMapTitle: "観光都市の入口",
    chinaMapHint: "都市マーカーをクリックすると都市マップと一覧が更新されます。",
    workspaceEyebrow: "都市ワークスペース",
    cityMapKicker: "都市マップ",
    cityMapHint: "この地図のマーカーは下の観光カードと連動しています。",
    focusKicker: "選択中スポット",
    jumpToCard: "カードへ移動",
    routeKicker: "おすすめルート",
    routeTitle: "国際友人向けの観光リズム",
    spotSectionEyebrow: "スポット一覧",
    spotSectionTitle: "ローカル画像フォルダに含まれる全スポットをここに表示しています。",
    cityMapLabel: "観光マップ",
    localTip: "現地メモ",
    bestTime: "おすすめ時間",
    theme: "テーマ",
    galleryCount: "ローカル写真",
    localPhotos: "枚の写真",
    quickJump: "クイック移動",
    citySpotCount: "スポット",
    cardsHint: "都市、マーカー、クイックリンク、カードをクリックするとガイドが更新されます。",
    spotSectionSummary: "{city} · {spots}スポットを表示中",
    activeCitySummary: "現在は {city} を表示中",
    mapPopupHint: "都市ガイドを開く",
    cardButton: "このスポットに切替",
    ticketLink: "チケット / 予約",
    freeVisitNote: "この観光地は無料で見学できます",
    askAI: "AIに相談",
    foodEyebrow: "グルメガイド",
    foodTitle: "都市ごとのローカルフードを、朝・夜・軽食で手早く把握できます。",
    foodText: "このモジュールは選択中の都市に連動し、実用的な食の選択肢を提示します。",
    foodCard1: "朝のおすすめ",
    foodCard2: "夕食のおすすめ",
    foodCard3: "軽食ストリート",
    aiEyebrow: "AI コンシェルジュ",
    aiTitle: "選択中スポットについて、より具体的な質問ができます。",
    aiText: "ルート、営業時間、交通、混雑回避のコツをその場で質問できます。",
    aiInputPlaceholder: "このスポットについて質問してください...",
    sendAI: "送信",
    aiContextPrefix: "現在のスポット",
    aiConfigMissing: "AI設定が未完了です。app.js で endpoint / model / API key を設定してください。",
    aiThinking: "AI が回答を準備中です...",
    aiError: "リクエストに失敗しました。app.js の API 設定を確認してください。",
    routeDynamicTitle: "{spot}を中心に回るルート",
    routeDynamicDesc: "選択中のスポットを核にしながら、近くの立ち寄り先をつないだルートです。"
  },
  ko: {
    brandTagline: "중국을 여행하는 국제 친구를 위한 지도",
    openGuide: "가이드 열기",
    navMap: "지도",
    navGuide: "현지 가이드",
    navFood: "음식",
    navAI: "AI 어시스턴트",
    heroEyebrow: "다섯 도시, 하나의 허브",
    heroTitle: "안녕하세요 중국: 국제 친구를 위해 설계된 지도형 여행 입구입니다.",
    heroText:
      "중국 지도에서 도시를 클릭하면 해당 도시 지도, 전체 관광지, 로컬 이미지, 핵심 정보, 다국어 UI가 함께 바뀝니다.",
    startExploring: "탐색 시작",
    randomCity: "랜덤 도시",
    statCities: "추천 도시",
    statSpots: "수록 명소",
    statLanguages: "UI 언어",
    heroPill: "지도 + 갤러리",
    switchboardEyebrow: "중국 개요",
    switchboardTitle: "전국 지도에서 도시를 고르고 바로 도시별 명소 가이드로 이동하세요.",
    switchboardText:
      "전국 지도는 도시 지도, 빠른 이동 링크, 선택한 명소 갤러리, 전체 카드 목록을 동시에 업데이트합니다.",
    citySelectorKicker: "도시 선택",
    citySelectorTitle: "다섯 개 핵심 도시",
    activeCityKicker: "현재 도시",
    jumpToGuide: "도시 가이드 열기",
    chinaMapKicker: "중국 지도",
    chinaMapTitle: "관광 도시 입구",
    chinaMapHint: "도시 마커를 누르면 도시 지도와 명소 목록이 함께 갱신됩니다.",
    workspaceEyebrow: "도시 워크스페이스",
    cityMapKicker: "도시 지도",
    cityMapHint: "이 지도 마커는 아래 명소 카드와 연결되어 있습니다.",
    focusKicker: "선택한 명소",
    jumpToCard: "카드로 이동",
    routeKicker: "추천 루트",
    routeTitle: "국제 친구 친화형 도시 동선",
    spotSectionEyebrow: "명소 목록",
    spotSectionTitle: "로컬 이미지 폴더에 포함된 모든 명소를 여기서 확인할 수 있습니다.",
    cityMapLabel: "명소 지도",
    localTip: "현지 팁",
    bestTime: "추천 시간",
    theme: "테마",
    galleryCount: "로컬 사진",
    localPhotos: "장의 사진",
    quickJump: "빠른 이동",
    citySpotCount: "개 명소",
    cardsHint: "도시, 지도 마커, 빠른 링크, 카드를 눌러 가이드를 업데이트하세요.",
    spotSectionSummary: "현재 {city} · {spots}개 명소 표시 중",
    activeCitySummary: "현재 {city} 탐색 중",
    mapPopupHint: "도시 가이드 열기",
    cardButton: "이 명소 보기",
    ticketLink: "티켓 / 예약",
    freeVisitNote: "이 명소는 무료로 관람할 수 있습니다",
    askAI: "AI에게 질문",
    foodEyebrow: "음식 가이드",
    foodTitle: "도시별 대표 음식을 아침·저녁·간식 기준으로 빠르게 확인하세요.",
    foodText: "이 모듈은 현재 도시와 연동되어 실용적인 식사 선택지를 제공합니다.",
    foodCard1: "아침 추천",
    foodCard2: "저녁 추천",
    foodCard3: "간식 거리",
    aiEyebrow: "AI 컨시어지",
    aiTitle: "선택한 명소에 대해 더 구체적인 질문을 해보세요.",
    aiText: "동선, 운영 시간, 교통, 혼잡 회피 전략을 바로 물어볼 수 있습니다.",
    aiInputPlaceholder: "이 명소에 대해 무엇이든 물어보세요...",
    sendAI: "보내기",
    aiContextPrefix: "현재 명소",
    aiConfigMissing: "AI 설정이 비어 있습니다. app.js에서 endpoint/model/API key를 먼저 설정하세요.",
    aiThinking: "AI가 답변을 준비 중입니다...",
    aiError: "요청에 실패했습니다. app.js의 API 설정을 확인해 주세요.",
    routeDynamicTitle: "{spot} 중심 루트",
    routeDynamicDesc: "현재 선택한 명소를 포함하도록 주변 동선을 함께 묶은 추천 루트입니다."
  },
  es: {
    brandTagline: "Mapas de viaje por China para amigos internacionales",
    openGuide: "Abrir guía",
    navMap: "Mapa",
    navGuide: "Guía local",
    navFood: "Comida",
    navAI: "Asistente AI",
    heroEyebrow: "Cinco ciudades, un solo centro",
    heroTitle: "Hola China: una puerta de viaje basada en mapas, diseñada para amigos internacionales.",
    heroText:
      "Haz clic en una ciudad del mapa de China y la página cambiará al mapa urbano, la lista completa de lugares, las imágenes locales y la información clave.",
    startExploring: "Empezar",
    randomCity: "Ciudad aleatoria",
    statCities: "ciudades destacadas",
    statSpots: "atracciones incluidas",
    statLanguages: "idiomas UI",
    heroPill: "Mapa + galería",
    switchboardEyebrow: "Vista de China",
    switchboardTitle: "Selecciona una ciudad en el mapa nacional y entra directamente en su guía.",
    switchboardText:
      "El mapa nacional controla toda la página: mapa urbano, accesos rápidos, galería del lugar activo y lista completa de atracciones.",
    citySelectorKicker: "Selector de ciudad",
    citySelectorTitle: "Cinco ciudades destacadas",
    activeCityKicker: "Ciudad activa",
    jumpToGuide: "Abrir guía urbana",
    chinaMapKicker: "Mapa de China",
    chinaMapTitle: "Entradas a ciudades turísticas",
    chinaMapHint: "Haz clic en cualquier marcador para actualizar el mapa urbano y la lista.",
    workspaceEyebrow: "Espacio urbano",
    cityMapKicker: "Mapa urbano",
    cityMapHint: "Los marcadores de este mapa están conectados con las tarjetas de abajo.",
    focusKicker: "Atracción seleccionada",
    jumpToCard: "Ir a la tarjeta",
    routeKicker: "Ruta sugerida",
    routeTitle: "Ritmo de visita para amigos internacionales",
    spotSectionEyebrow: "Lista de atracciones",
    spotSectionTitle: "Aquí aparece cada lugar incluido en las carpetas locales de imágenes.",
    cityMapLabel: "Mapa de atracciones",
    localTip: "Consejo local",
    bestTime: "Mejor momento",
    theme: "Tema",
    galleryCount: "fotos locales",
    localPhotos: "fotos",
    quickJump: "Salto rápido",
    citySpotCount: "atracciones",
    cardsHint: "Pulsa una ciudad, un marcador, un acceso rápido o una tarjeta para actualizar la guía.",
    spotSectionSummary: "Mostrando {city} · {spots} atracciones",
    activeCitySummary: "Explorando ahora {city}",
    mapPopupHint: "Abrir guía urbana",
    cardButton: "Ver este lugar",
    ticketLink: "Entradas / Reserva",
    freeVisitNote: "Esta atracción se visita gratis",
    askAI: "Preguntar a la IA",
    foodEyebrow: "Guía de comida",
    foodTitle: "Descubre cada ciudad a través de especialidades locales y barrios para comer.",
    foodText: "Este módulo sigue la ciudad activa y sugiere opciones prácticas para mañana, tarde y noche.",
    foodCard1: "Mañana",
    foodCard2: "Cena",
    foodCard3: "Zona de snacks",
    aiEyebrow: "Conserje AI",
    aiTitle: "Haz preguntas detalladas sobre la atracción seleccionada.",
    aiText: "Pregunta por rutas, horarios, transporte y estrategias para evitar picos de gente.",
    aiInputPlaceholder: "Pregunta lo que quieras sobre esta atracción...",
    sendAI: "Enviar",
    aiContextPrefix: "Atracción actual",
    aiConfigMissing: "La configuración de AI no está lista. Define endpoint/model/API key en app.js.",
    aiThinking: "La IA está pensando...",
    aiError: "La solicitud falló. Revisa la configuración API en app.js.",
    routeDynamicTitle: "Ruta alrededor de {spot}",
    routeDynamicDesc: "Incluye la atracción seleccionada y añade paradas cercanas para una visita más fluida."
  },
  fr: {
    brandTagline: "Cartes de voyage en Chine pour amis internationaux",
    openGuide: "Ouvrir le guide",
    navMap: "Carte",
    navGuide: "Guide local",
    navFood: "Cuisine",
    navAI: "Assistant IA",
    heroEyebrow: "Cinq villes, un seul hub",
    heroTitle: "Bonjour la Chine : une porte d'entrée de voyage fondée sur la carte, conçue pour les amis internationaux.",
    heroText:
      "Cliquez sur une ville de la carte de Chine et la page basculera vers sa carte locale, sa liste complète de sites, ses images locales et ses informations clés.",
    startExploring: "Explorer",
    randomCity: "Ville aléatoire",
    statCities: "villes en vedette",
    statSpots: "sites inclus",
    statLanguages: "langues UI",
    heroPill: "Carte + galerie",
    switchboardEyebrow: "Vue de Chine",
    switchboardTitle: "Choisissez une ville sur la carte nationale puis ouvrez directement son guide.",
    switchboardText:
      "La carte nationale pilote toute la page: carte de ville, liens rapides, galerie du site actif et liste complète des attractions.",
    citySelectorKicker: "Sélecteur de ville",
    citySelectorTitle: "Cinq villes vedettes",
    activeCityKicker: "Ville active",
    jumpToGuide: "Ouvrir le guide",
    chinaMapKicker: "Carte de Chine",
    chinaMapTitle: "Entrées des villes touristiques",
    chinaMapHint: "Cliquez sur un marqueur pour mettre à jour la carte locale et la liste.",
    workspaceEyebrow: "Espace ville",
    cityMapKicker: "Carte de ville",
    cityMapHint: "Les marqueurs de cette carte sont liés aux cartes d'attractions ci-dessous.",
    focusKicker: "Attraction sélectionnée",
    jumpToCard: "Voir la carte",
    routeKicker: "Itinéraire conseillé",
    routeTitle: "Rythme de visite pour amis internationaux",
    spotSectionEyebrow: "Liste des attractions",
    spotSectionTitle: "Tous les sites présents dans les dossiers d'images locales sont listés ici.",
    cityMapLabel: "Carte des sites",
    localTip: "Conseil local",
    bestTime: "Meilleur moment",
    theme: "Thème",
    galleryCount: "photos locales",
    localPhotos: "photos",
    quickJump: "Accès rapide",
    citySpotCount: "sites",
    cardsHint: "Cliquez sur une ville, un marqueur, un lien rapide ou une carte pour mettre à jour le guide.",
    spotSectionSummary: "Affichage de {city} · {spots} sites",
    activeCitySummary: "Exploration en cours: {city}",
    mapPopupHint: "Ouvrir le guide",
    cardButton: "Afficher ce site",
    ticketLink: "Billet / Réservation",
    freeVisitNote: "Ce site se visite gratuitement",
    askAI: "Demander à l'IA",
    foodEyebrow: "Guide culinaire",
    foodTitle: "Découvrez chaque ville via ses spécialités locales et ses quartiers accueillants.",
    foodText: "Ce module suit la ville active et propose des options pratiques pour la journée.",
    foodCard1: "Matin",
    foodCard2: "Dîner",
    foodCard3: "Rue gourmande",
    aiEyebrow: "Concierge IA",
    aiTitle: "Posez des questions précises sur l'attraction sélectionnée.",
    aiText: "Demandez des conseils d'itinéraire, d'horaires, de transport et d'affluence.",
    aiInputPlaceholder: "Posez votre question sur cette attraction...",
    sendAI: "Envoyer",
    aiContextPrefix: "Attraction actuelle",
    aiConfigMissing: "La configuration IA n'est pas prête. Définissez endpoint/model/API key dans app.js.",
    aiThinking: "L'IA réfléchit...",
    aiError: "Échec de la requête. Vérifiez la configuration API dans app.js.",
    routeDynamicTitle: "Parcours autour de {spot}",
    routeDynamicDesc: "Inclut le lieu sélectionné et relie quelques arrêts proches pour un trajet plus fluide."
  },
  ar: {
    brandTagline: "خرائط سفر في الصين للأصدقاء الدوليين",
    openGuide: "افتح الدليل",
    navMap: "الخريطة",
    navGuide: "الدليل المحلي",
    navFood: "الطعام",
    navAI: "مساعد الذكاء الاصطناعي",
    heroEyebrow: "خمس مدن، منصة واحدة",
    heroTitle: "مرحباً بالصين: بوابة سفر قائمة على الخريطة ومصممة للأصدقاء الدوليين.",
    heroText:
      "اضغط على مدينة في خريطة الصين لتنتقل الصفحة مباشرة إلى خريطة المدينة وقائمة المعالم الكاملة والصور المحلية والمعلومات الأساسية.",
    startExploring: "ابدأ الاستكشاف",
    randomCity: "مدينة عشوائية",
    statCities: "مدن مميزة",
    statSpots: "معالم مضافة",
    statLanguages: "لغات الواجهة",
    heroPill: "خريطة + معرض",
    switchboardEyebrow: "نظرة على الصين",
    switchboardTitle: "اختر مدينة من الخريطة الوطنية وادخل مباشرة إلى دليل معالمها.",
    switchboardText:
      "الخريطة الوطنية تتحكم في الصفحة كلها: خريطة المدينة والروابط السريعة ومعرض الموقع المحدد وقائمة المعالم الكاملة.",
    citySelectorKicker: "اختيار المدينة",
    citySelectorTitle: "خمس مدن رئيسية",
    activeCityKicker: "المدينة الحالية",
    jumpToGuide: "افتح دليل المدينة",
    chinaMapKicker: "خريطة الصين",
    chinaMapTitle: "مداخل المدن السياحية",
    chinaMapHint: "اضغط على أي علامة لتحديث خريطة المدينة وقائمة المعالم.",
    workspaceEyebrow: "مساحة المدينة",
    cityMapKicker: "خريطة المدينة",
    cityMapHint: "علامات هذه الخريطة مرتبطة ببطاقات المعالم في الأسفل.",
    focusKicker: "المعلم المحدد",
    jumpToCard: "انتقل إلى البطاقة",
    routeKicker: "مسار مقترح",
    routeTitle: "إيقاع مناسب للأصدقاء الدوليين",
    spotSectionEyebrow: "قائمة المعالم",
    spotSectionTitle: "كل المعالم الموجودة في مجلدات الصور المحلية تظهر هنا.",
    cityMapLabel: "خريطة المعالم",
    localTip: "نصيحة محلية",
    bestTime: "أفضل وقت",
    theme: "النوع",
    galleryCount: "صور محلية",
    localPhotos: "صور",
    quickJump: "انتقال سريع",
    citySpotCount: "معالم",
    cardsHint: "اضغط على مدينة أو علامة أو رابط سريع أو بطاقة لتحديث الدليل.",
    spotSectionSummary: "يتم الآن عرض {city} · {spots} معالم",
    activeCitySummary: "أنت الآن تستكشف {city}",
    mapPopupHint: "افتح دليل المدينة",
    cardButton: "عرض هذا المعلم",
    ticketLink: "تذاكر / حجز",
    freeVisitNote: "يمكن زيارة هذا المعلم مجانًا",
    askAI: "اسأل الذكاء الاصطناعي",
    foodEyebrow: "دليل الطعام",
    foodTitle: "اكتشف كل مدينة عبر أطباقها المحلية وأحيائها المناسبة للزيارة.",
    foodText: "هذا القسم يتبع المدينة الحالية ويعرض خيارات عملية للوجبات على مدار اليوم.",
    foodCard1: "ترشيح الصباح",
    foodCard2: "ترشيح العشاء",
    foodCard3: "شارع الوجبات الخفيفة",
    aiEyebrow: "مساعد AI",
    aiTitle: "اطرح أسئلة تفصيلية حول المعلم الذي اخترته.",
    aiText: "يمكنك السؤال عن المسار وأوقات الزيارة والمواصلات وتجنب الزحام.",
    aiInputPlaceholder: "اسأل أي شيء عن هذا المعلم...",
    sendAI: "إرسال",
    aiContextPrefix: "المعلم الحالي",
    aiConfigMissing: "إعدادات AI غير جاهزة. حدّد endpoint وmodel وAPI key داخل app.js.",
    aiThinking: "الذكاء الاصطناعي يفكر...",
    aiError: "فشل الطلب. راجع إعدادات API في app.js.",
    routeDynamicTitle: "مسار حول {spot}",
    routeDynamicDesc: "يشمل المعلم المحدد ويضيف محطات قريبة لتكوين خط زيارة أكثر سلاسة."
  }
};

const spotAssets = {
  beijing: {
    "什刹海": [
      "景点图片/北京市/什刹海/什刹海傍晚/什刹海傍晚.jpg",
      "景点图片/北京市/什刹海/什刹海夜景/什刹海夜景.jpg",
      "景点图片/北京市/什刹海/什刹海清晨/什刹海清晨.jpg"
    ],
    "八达岭长城": [
      "景点图片/北京市/八达岭长城/八达岭长城全景/八达岭长城全景.jpg",
      "景点图片/北京市/八达岭长城/八达岭长城特写/八达岭长城特写.jpg",
      "景点图片/北京市/八达岭长城/八达岭长城秋/八达岭长城秋.jpg"
    ],
    "北海公园": [
      "景点图片/北京市/北海公园/北海公园傍晚/北海公园傍晚.jpg",
      "景点图片/北京市/北海公园/北海公园全景/北海公园全景.jpg",
      "景点图片/北京市/北海公园/北海公园北海/北海公园北海.jpg"
    ],
    "南锣鼓巷": [
      "景点图片/北京市/南锣鼓巷/南锣鼓巷街景/南锣鼓巷街景.jpg"
    ],
    "圆明园": [
      "景点图片/北京市/圆明园/圆明园复原图/圆明园复原图.jpg",
      "景点图片/北京市/圆明园/圆明园遗址/圆明园遗址.jpg",
      "景点图片/北京市/圆明园/圆明园长春园/圆明园长春园.jpg"
    ],
    "天坛": [
      "景点图片/北京市/天坛/天坛全景/天坛全景.jpg",
      "景点图片/北京市/天坛/天坛皇穹宇/天坛皇穹宇.jpg"
    ],
    "奥林匹克公园": [
      "景点图片/北京市/奥林匹克公园/奥林匹克夜景/奥林匹克夜景.jpg",
      "景点图片/北京市/奥林匹克公园/奥林匹克水立方/奥林匹克水立方.jpg",
      "景点图片/北京市/奥林匹克公园/奥林匹克鸟巢/奥林匹克鸟巢.jpg"
    ],
    "故宫博物院": [
      "景点图片/北京市/故宫博物院/故宫全景图/故宫全景图.jpg",
      "景点图片/北京市/故宫博物院/故宫文物/故宫文物.jpg",
      "景点图片/北京市/故宫博物院/故宫自然风光/故宫自然风光.jpg",
      "景点图片/北京市/故宫博物院/故宫角楼/故宫角楼.jpg"
    ],
    "景山公园": [
      "景点图片/北京市/景山公园/景山亭/景山亭.jpg",
      "景点图片/北京市/景山公园/景山全景/景山全景.jpg"
    ],
    "雍和宫": [
      "景点图片/北京市/雍和宫/雍和宫全景/雍和宫全景.jpg",
      "景点图片/北京市/雍和宫/雍和宫特写/雍和宫特写.jpg",
      "景点图片/北京市/雍和宫/雍和宫雪景/雍和宫雪景.jpg"
    ],
    "颐和园": [
      "景点图片/北京市/颐和园/颐和园佛香阁/颐和园佛香阁.jpg",
      "景点图片/北京市/颐和园/颐和园昆明湖/圆明园昆明湖.jpg",
      "景点图片/北京市/颐和园/颐和园石坊/颐和园石坊.jpg",
      "景点图片/北京市/颐和园/颐和园金光穿洞/颐和园金光穿洞.jpg"
    ],
    "香山公园": [
      "景点图片/北京市/香山公园/香山园林/香山园林.jpg",
      "景点图片/北京市/香山公园/香山寺/香山寺.jpg",
      "景点图片/北京市/香山公园/香山红叶/u=2649954270,2899710571&fm=253&fmt=auto&app=138&f=JPEG.jpg"
    ]
  },
  shanghai: {
    "七宝老街": [
      "景点图片/上海市/七宝老街/七宝老街全景/七宝老街全景.jpg",
      "景点图片/上海市/七宝老街/七宝老街夜景/七宝老街夜景.jpg",
      "景点图片/上海市/七宝老街/七宝老街特写/七宝老街特写.jpg"
    ],
    "东方明珠": [
      "景点图片/上海市/东方明珠/东方明珠仰视/东方明珠仰视.jpg",
      "景点图片/上海市/东方明珠/东方明珠全景/东方明珠全景.jpg",
      "景点图片/上海市/东方明珠/东方明珠夜景/东方明珠夜景.jpg",
      "景点图片/上海市/东方明珠/东方明珠特写/东方明珠特写.jpg"
    ],
    "南京路步行街": [
      "景点图片/上海市/南京路步行街/南京路步行街全景/南京路步行街全景.jpg",
      "景点图片/上海市/南京路步行街/南京路步行街夜景/南京路步行街夜景.jpg",
      "景点图片/上海市/南京路步行街/南京路步行街特写/南京路步行街特写.jpg"
    ],
    "城隍庙": [
      "景点图片/上海市/城隍庙/城隍庙全景/城隍庙全景.jpg",
      "景点图片/上海市/城隍庙/城隍庙特写/城隍庙特写.jpg",
      "景点图片/上海市/城隍庙/城隍庙街景/城隍庙街景.jpg"
    ],
    "外滩": [
      "景点图片/上海市/外滩/外滩全景/外滩全景.jpg",
      "景点图片/上海市/外滩/外滩夜景/外滩夜景.jpg",
      "景点图片/上海市/外滩/外滩海关大楼/外滩海关大楼.jpg"
    ],
    "朱家角古镇": [
      "景点图片/上海市/朱家角古镇/朱家角古镇全景.jpg",
      "景点图片/上海市/朱家角古镇/朱家角古镇夜景.jpg"
    ],
    "武康路": [
      "景点图片/上海市/武康路/武康路全景/武康路全景.jpg",
      "景点图片/上海市/武康路/武康路武康大楼/武康路武康大楼.jpg",
      "景点图片/上海市/武康路/武康路街景/武康路街景.jpg"
    ],
    "豫园": [
      "景点图片/上海市/豫园/豫园夜景/豫园夜景.jpg",
      "景点图片/上海市/豫园/豫园特写/豫园特写.jpg",
      "景点图片/上海市/豫园/豫园风光/豫园风光.jpg"
    ],
    "静安寺": [
      "景点图片/上海市/静安寺/静安寺全景/静安寺全景.jpeg",
      "景点图片/上海市/静安寺/静安寺夜景/静安寺夜景.jpg",
      "景点图片/上海市/静安寺/静安寺特写/静安寺特写.jpg"
    ]
  },
  xian: {
    "华清宫": [
      "景点图片/西安/华清宫/华清宫/华清宫.jpg",
      "景点图片/西安/华清宫/华清宫全景/华清宫全景.jpg",
      "景点图片/西安/华清宫/华清宫夜景/华清宫夜景.jpg",
      "景点图片/西安/华清宫/华清宫雕塑/华清宫雕塑.jpg"
    ],
    "回民街": [
      "景点图片/西安/回民街/回民街全景/回民街全景.jpg",
      "景点图片/西安/回民街/回民街特写/回民街特写.jpg",
      "景点图片/西安/回民街/回民街街景/回民街街景.jpg"
    ],
    "大唐不夜城": [
      "景点图片/西安/大唐不夜城/大唐不夜城全景/大唐不夜城全景.jpg",
      "景点图片/西安/大唐不夜城/大唐不夜城特写/大唐不夜城特写.jpg",
      "景点图片/西安/大唐不夜城/大唐不夜城街景/大唐不夜城街景.jpg"
    ],
    "大明宫": [
      "景点图片/西安/大明宫/大明宫侧写/大明宫侧写.jpg",
      "景点图片/西安/大明宫/大明宫全景/大明宫全景.jpg",
      "景点图片/西安/大明宫/大明宫夜景/大明宫夜景.jpg"
    ],
    "大雁塔": [
      "景点图片/西安/大雁塔/大雁塔/大雁塔.jpg",
      "景点图片/西安/大雁塔/大雁塔全景/大雁塔全景.jpg",
      "景点图片/西安/大雁塔/大雁塔雕塑/大雁塔雕塑.jpg"
    ],
    "小雁塔": [
      "景点图片/西安/小雁塔/小雁塔全景/小雁塔全景.jpg",
      "景点图片/西安/小雁塔/小雁塔正面/小雁塔正面.jpg",
      "景点图片/西安/小雁塔/小雁塔特写/小雁塔特写.jpg"
    ],
    "曲江池": [
      "景点图片/西安/曲江池/曲江池全景/曲江池全景.jpg",
      "景点图片/西安/曲江池/曲江池夜景/曲江池夜景.jpg",
      "景点图片/西安/曲江池/曲江池特写/曲江池特写.jpg"
    ],
    "碑林博物馆": [
      "景点图片/西安/碑林博物馆/碑林博物馆全景/碑林博物馆全景.jpg",
      "景点图片/西安/碑林博物馆/碑林博物馆特写/碑林博物馆特写.jpg",
      "景点图片/西安/碑林博物馆/碑林博物馆碑林亭/碑林博物馆碑林亭.jpg"
    ],
    "秦始皇陵博物馆": [
      "景点图片/西安/秦始皇陵博物馆/秦始皇陵博物馆兵马俑/秦始皇陵博物馆兵马俑.jpg",
      "景点图片/西安/秦始皇陵博物馆/秦始皇陵博物馆内景/秦始皇陵博物馆内景.jpg",
      "景点图片/西安/秦始皇陵博物馆/秦始皇陵博物馆外景/秦始皇陵博物馆外景.jpg",
      "景点图片/西安/秦始皇陵博物馆/秦始皇陵博物馆特写/秦始皇陵博物馆特写.jpg"
    ],
    "芙蓉园": [
      "景点图片/西安/芙蓉园/芙蓉园全景/芙蓉园全景.jpg",
      "景点图片/西安/芙蓉园/芙蓉园夜景/芙蓉园夜景.jpg",
      "景点图片/西安/芙蓉园/芙蓉园特写/芙蓉园特写.jpg"
    ],
    "钟鼓楼": [
      "景点图片/西安/钟鼓楼/钟鼓楼侧写/钟鼓楼侧写.jpg",
      "景点图片/西安/钟鼓楼/钟鼓楼全景/钟鼓楼全景.jpg",
      "景点图片/西安/钟鼓楼/钟鼓楼夜景/钟鼓楼夜景.jpg"
    ],
    "陕西历史博物馆": [
      "景点图片/西安/陕西历史博物馆/陕西历史博物馆/陕西历史博物馆.jpg",
      "景点图片/西安/陕西历史博物馆/陕西历史博物馆全景/陕西历史博物馆全景.jpg",
      "景点图片/西安/陕西历史博物馆/陕西历史博物馆馆内/陕西历史博物馆馆内.jpg"
    ],
    "青龙寺": [
      "景点图片/西安/青龙寺/青龙寺俯瞰/青龙寺俯瞰.jpg",
      "景点图片/西安/青龙寺/青龙寺全景/青龙寺全景.jpg",
      "景点图片/西安/青龙寺/青龙寺樱花/青龙寺樱花.jpg"
    ]
  },
  chengdu: {
    "东郊记忆": [
      "景点图片/成都/东郊记忆/东郊记忆全景/东郊记忆全景.jpg",
      "景点图片/成都/东郊记忆/东郊记忆夜景/东郊记忆夜景.jpg",
      "景点图片/成都/东郊记忆/东郊记忆打卡点/东郊记忆打卡点.jpg"
    ],
    "大熊猫基地": [
      "景点图片/成都/大熊猫基地/大熊猫基地大熊猫/大熊猫基地大熊猫.jpg",
      "景点图片/成都/大熊猫基地/大熊猫基地大熊猫2/大熊猫基地大熊猫2.jpg",
      "景点图片/成都/大熊猫基地/大熊猫基地正门/大熊猫基地正门.jpg"
    ],
    "宽窄巷子": [
      "景点图片/成都/宽窄巷子/宽窄巷子全景/宽窄巷子全景.jpg",
      "景点图片/成都/宽窄巷子/宽窄巷子地标/宽窄巷子地标.jpg",
      "景点图片/成都/宽窄巷子/宽窄巷子夜景/宽窄巷子夜景.jpg",
      "景点图片/成都/宽窄巷子/宽窄巷子街景/宽窄巷子街景.jpg"
    ],
    "文殊院": [
      "景点图片/成都/文殊院/文殊院侧写/文殊院侧写.jpg",
      "景点图片/成都/文殊院/文殊院全景/文殊院全景.jpg",
      "景点图片/成都/文殊院/文殊院雪景/文殊院雪景.jpg"
    ],
    "春熙路": [
      "景点图片/成都/春熙路/春熙路全景/春熙路全景.jpg",
      "景点图片/成都/春熙路/春熙路夜景/春熙路夜景.jpg",
      "景点图片/成都/春熙路/春熙路熊猫/春熙路熊猫.jpg"
    ],
    "杜甫草堂": [
      "景点图片/成都/杜甫草堂/杜甫草堂全景/杜甫草堂全景.jpg",
      "景点图片/成都/杜甫草堂/杜甫草堂杜甫像/杜甫草堂杜甫像.jpg",
      "景点图片/成都/杜甫草堂/杜甫草堂特写/杜甫草堂特写.jpg"
    ],
    "武侯祠": [
      "景点图片/成都/武侯祠/武侯祠正门/武侯祠正门.jpg",
      "景点图片/成都/武侯祠/武侯祠武侯像/武侯祠武侯像.jpg",
      "景点图片/成都/武侯祠/武侯祠红墙/武侯祠红墙.jpg"
    ],
    "都江堰": [
      "景点图片/成都/都江堰/都江堰全景/都江堰全景.jpg",
      "景点图片/成都/都江堰/都江堰夜景/都江堰夜景.jpg",
      "景点图片/成都/都江堰/都江堰宝瓶口/都江堰宝瓶口.jpg"
    ],
    "锦里古街": [
      "景点图片/成都/锦里古街/锦里古街夜景/锦里古街夜景.jpg",
      "景点图片/成都/锦里古街/锦里古街灯笼和花伞/锦里古街灯笼和花伞.jpg",
      "景点图片/成都/锦里古街/锦里古街牌坊/锦里古街牌坊.jpg",
      "景点图片/成都/锦里古街/锦里古街街景/锦里古街街景.jpg"
    ],
    "青城山": [
      "景点图片/成都/青城山/青城山全景/青城山全景.jpg",
      "景点图片/成都/青城山/青城山山门/青城山山门.jpg",
      "景点图片/成都/青城山/青城山月城湖/青城山月城湖.jpg",
      "景点图片/成都/青城山/青城山特写/青城山特写.jpg"
    ],
    "青羊宫": [
      "景点图片/成都/青羊宫/青羊宫全景/青羊宫全景.jpg",
      "景点图片/成都/青羊宫/青羊宫建筑/青羊宫建筑.jpg",
      "景点图片/成都/青羊宫/青羊宫特写/青羊宫特写.jpg"
    ]
  },
  hangzhou: {
    "六和塔": [
      "景点图片/杭州/六和塔/六和塔全景/六和塔全景.jpg",
      "景点图片/杭州/六和塔/六和塔内景/六和塔内景.jpg",
      "景点图片/杭州/六和塔/六和塔特写/六和塔特写.jpg",
      "景点图片/杭州/六和塔/六和塔雨景/六和塔雨景.jpg"
    ],
    "千岛湖": [
      "景点图片/杭州/千岛湖/千岛湖全景/千岛湖全景.jpg",
      "景点图片/杭州/千岛湖/千岛湖晚霞/千岛湖晚霞.jpg",
      "景点图片/杭州/千岛湖/千岛湖灯塔/千岛湖灯塔.jpg"
    ],
    "南宋御街": [
      "景点图片/杭州/南宋御街/南宋御街全景/南宋御街全景.jpg",
      "景点图片/杭州/南宋御街/南宋御街特写/南宋御街特写.jpg",
      "景点图片/杭州/南宋御街/南宋御街街景/南宋御街街景.jpg"
    ],
    "岳王庙": [
      "景点图片/杭州/岳王庙/岳王庙外景/岳王庙外景.jpg",
      "景点图片/杭州/岳王庙/岳王庙岳王像/岳王庙岳王像.jpg",
      "景点图片/杭州/岳王庙/岳王庙精忠报国/岳王庙精忠报国.jpg"
    ],
    "灵隐寺": [
      "景点图片/杭州/灵隐寺/灵隐寺佛像/灵隐寺佛像.jpg",
      "景点图片/杭州/灵隐寺/灵隐寺全景/灵隐寺全景.jpg",
      "景点图片/杭州/灵隐寺/灵隐寺正门/灵隐寺正门.jpg",
      "景点图片/杭州/灵隐寺/灵隐寺特写/灵隐寺特写.jpg"
    ],
    "良渚古城": [
      "景点图片/杭州/良渚古城/良渚古城全景/良渚古城全景.jpg",
      "景点图片/杭州/良渚古城/良渚古城建筑/良渚古城建筑.jpg",
      "景点图片/杭州/良渚古城/良渚古城特写/良渚古城特写.jpg"
    ],
    "苏堤": [
      "景点图片/杭州/苏堤/苏堤全景/苏堤全景.jpg",
      "景点图片/杭州/苏堤/苏堤春景/苏堤春景.jpg",
      "景点图片/杭州/苏堤/苏堤石碑/苏堤石碑.jpeg"
    ],
    "西湖": [
      "景点图片/杭州/西湖/西湖三潭映月/西湖三潭映月.jpg",
      "景点图片/杭州/西湖/西湖傍晚/西湖傍晚.jpg",
      "景点图片/杭州/西湖/西湖游船/西湖游船.jpg",
      "景点图片/杭州/西湖/西湖雪景/西湖雪景.jpg"
    ],
    "西溪国家湿地公园": [
      "景点图片/杭州/西溪国家湿地公园/西溪湿地公园全景/西溪湿地公园全景.jpg",
      "景点图片/杭州/西溪国家湿地公园/西溪湿地公园晚霞/西溪湿地公园晚霞.jpg",
      "景点图片/杭州/西溪国家湿地公园/西溪湿地公园特写/西溪湿地公园特写.jpg",
      "景点图片/杭州/西溪国家湿地公园/西溪湿地公园绿堤景区/西溪湿地公园绿堤景区.jpg"
    ],
    "雷峰塔": [
      "景点图片/杭州/雷峰塔/雷峰塔全景/雷峰塔全景.jpg",
      "景点图片/杭州/雷峰塔/雷峰塔夜景/雷峰塔夜景.jpg",
      "景点图片/杭州/雷峰塔/雷峰塔特写/雷峰塔特写.jpg"
    ],
    "龙井村": [
      "景点图片/杭州/龙井村/龙井村全景/龙井村全景.jpg",
      "景点图片/杭州/龙井村/龙井村制茶/龙井村制茶.jpg",
      "景点图片/杭州/龙井村/龙井村特写/龙井村特写.jpg"
    ]
  }
};

const cityMeta = [
  {
    id: "beijing",
    names: { zh: "北京", en: "Beijing" },
    marker: [39.9042, 116.4074],
    center: [39.9305, 116.3568],
    zoom: 10.6,
    accent: "#4285F4",
    soft: "#E8F0FE",
    subtitle: {
      zh: "皇城古都、长城、园林与胡同共同构成北京的旅行层次。",
      en: "Imperial heritage, hutongs, grand parks, and the Great Wall shape Beijing's travel rhythm."
    },
    summary: {
      zh: "北京适合第一次系统游览中国的国际友人，历史地标密度高，地铁覆盖成熟，既能看经典建筑，也能体验街区生活。",
      en: "Beijing works well for first-time student travelers who want major historical landmarks, strong metro access, and a balance between iconic monuments and neighborhood life."
    },
    highlights: {
      zh: ["皇城中轴", "园林湖景", "长城一日游"],
      en: ["Imperial axis", "Lakefront parks", "Great Wall day trip"]
    },
    itinerary: {
      zh: [
        "上午先走故宫和景山公园，中午转向什刹海或南锣鼓巷休息。",
        "下午补天坛、雍和宫或颐和园其中一组，避免一天安排过满。",
        "如果是整天出行，可单独留一天给八达岭长城和香山方向。"
      ],
      en: [
        "Start with the Palace Museum and Jingshan Park, then slow down around Shichahai or Nanluoguxiang at midday.",
        "Use the afternoon for one major cluster such as the Temple of Heaven, Lama Temple, or Summer Palace.",
        "If you have a full extra day, reserve it for Badaling Great Wall and the western hill zone."
      ]
    },
    routeTemplates: [
      {
        id: "imperial-core",
        names: { zh: "皇城经典线", en: "Imperial Core" },
        description: {
          zh: "适合第一次来北京，串联最有代表性的中轴线与老城步行体验。",
          en: "A first-time Beijing route built around the imperial core and the old-city walking experience."
        },
        stops: ["故宫博物院", "景山公园", "北海公园", "什刹海", "南锣鼓巷"]
      },
      {
        id: "garden-temple",
        names: { zh: "园林寺院线", en: "Gardens and Temples" },
        description: {
          zh: "偏向古建、寺院和皇家园林，节奏更适合白天深度浏览。",
          en: "Focused on temples and imperial gardens, with a steadier daytime pace."
        },
        stops: ["天坛", "雍和宫", "颐和园", "圆明园"]
      }
    ],
    spotMeta: {
      "故宫博物院": { nameEn: "Palace Museum", coords: [39.9163, 116.3972], theme: "history", bestTime: "08:30-10:30" },
      "天坛": { nameEn: "Temple of Heaven", coords: [39.8837, 116.4120], theme: "temple", bestTime: "09:00-11:00" },
      "颐和园": { nameEn: "Summer Palace", coords: [39.9997, 116.2755], theme: "garden", bestTime: "15:00-sunset" },
      "八达岭长城": { nameEn: "Badaling Great Wall", coords: [40.3564, 116.0156], theme: "mountain", bestTime: "Morning" },
      "景山公园": { nameEn: "Jingshan Park", coords: [39.9226, 116.3967], theme: "park", bestTime: "Sunset" },
      "什刹海": { nameEn: "Shichahai", coords: [39.9489, 116.3846], theme: "water", bestTime: "Late afternoon" },
      "雍和宫": { nameEn: "Lama Temple", coords: [39.9494, 116.4173], theme: "temple", bestTime: "Morning" },
      "南锣鼓巷": { nameEn: "Nanluoguxiang", coords: [39.9375, 116.4039], theme: "street", bestTime: "Afternoon-evening" },
      "北海公园": { nameEn: "Beihai Park", coords: [39.9317, 116.3897], theme: "park", bestTime: "Morning" },
      "奥林匹克公园": { nameEn: "Olympic Park", coords: [40.0016, 116.3906], theme: "landmark", bestTime: "Night" },
      "圆明园": { nameEn: "Old Summer Palace", coords: [40.0084, 116.3146], theme: "history", bestTime: "Morning" },
      "香山公园": { nameEn: "Fragrant Hills Park", coords: [39.9970, 116.1883], theme: "nature", bestTime: "Autumn afternoon" }
    }
  },
  {
    id: "shanghai",
    names: { zh: "上海", en: "Shanghai" },
    marker: [31.2304, 121.4737],
    center: [31.2247, 121.4527],
    zoom: 10.6,
    accent: "#EA4335",
    soft: "#FDE9E7",
    subtitle: {
      zh: "上海把外滩天际线、梧桐街区和古镇水巷放在同一条城市旅线上。",
      en: "Shanghai blends skyline views, leafy streets, historic lanes, and water-town escapes in one trip."
    },
    summary: {
      zh: "上海适合喜欢大都市节奏的国际友人，地标集中、夜景资源强，也能穿插梧桐街区、寺院和古镇形成更丰富的城市体验。",
      en: "Shanghai suits international friends who want a fast urban rhythm, strong night views, and enough heritage streets, temples, and water towns to balance the skyline."
    },
    highlights: {
      zh: ["摩登夜景", "老街古镇", "街区漫步"],
      en: ["Modern skyline", "Old-town lanes", "Neighborhood walks"]
    },
    itinerary: {
      zh: [
        "上午先走武康路、静安寺一线，中午切到豫园和城隍庙附近补餐饮。",
        "下午可以选择南京路步行街和外滩主线，傍晚再看浦江夜景。",
        "如果有更多时间，七宝老街或朱家角古镇适合单独排半天。"
      ],
      en: [
        "Start with Wukang Road and Jing'an Temple, then shift toward Yu Garden and City God Temple for lunch.",
        "Use the afternoon for Nanjing Road and the Bund, saving the skyline for evening light.",
        "If you have extra time, Qibao or Zhujiajiao work best as a dedicated half-day escape."
      ]
    },
    routeTemplates: [
      {
        id: "bund-classic",
        names: { zh: "外滩经典线", en: "Bund Classic" },
        description: {
          zh: "把上海最典型的天际线、商圈和老城园林压缩进一条主线。",
          en: "A classic Shanghai line combining skyline views, shopping streets, and the old garden quarter."
        },
        stops: ["武康路", "静安寺", "南京路步行街", "外滩", "东方明珠"]
      },
      {
        id: "old-town-water",
        names: { zh: "老城古镇线", en: "Old Town and Water Town" },
        description: {
          zh: "更适合喜欢街区漫步、古镇水巷和传统氛围的人。",
          en: "A softer route for travelers who prefer old streets, temples, and water-town character."
        },
        stops: ["豫园", "城隍庙", "七宝老街", "朱家角古镇"]
      }
    ],
    spotMeta: {
      "外滩": { nameEn: "The Bund", coords: [31.2400, 121.4900], theme: "landmark", bestTime: "Sunset-night" },
      "豫园": { nameEn: "Yu Garden", coords: [31.2273, 121.4925], theme: "garden", bestTime: "Morning-afternoon" },
      "东方明珠": { nameEn: "Oriental Pearl Tower", coords: [31.2397, 121.4998], theme: "landmark", bestTime: "Sunset" },
      "南京路步行街": { nameEn: "Nanjing Road Pedestrian Street", coords: [31.2349, 121.4753], theme: "shopping", bestTime: "Evening" },
      "武康路": { nameEn: "Wukang Road", coords: [31.2044, 121.4368], theme: "street", bestTime: "Morning" },
      "静安寺": { nameEn: "Jing'an Temple", coords: [31.2232, 121.4450], theme: "temple", bestTime: "Morning" },
      "城隍庙": { nameEn: "City God Temple", coords: [31.2275, 121.4922], theme: "street", bestTime: "Afternoon" },
      "朱家角古镇": { nameEn: "Zhujiajiao Water Town", coords: [31.1128, 121.0516], theme: "water", bestTime: "Half-day" },
      "七宝老街": { nameEn: "Qibao Ancient Town", coords: [31.1572, 121.3496], theme: "street", bestTime: "Late afternoon" }
    }
  },
  {
    id: "xian",
    names: { zh: "西安", en: "Xi'an" },
    marker: [34.3416, 108.9398],
    center: [34.2558, 108.9732],
    zoom: 10.3,
    accent: "#FBBC05",
    soft: "#FFF3D7",
    subtitle: {
      zh: "西安把古都遗址、博物馆密度和夜游氛围压缩在一条极强的历史线里。",
      en: "Xi'an packs archaeological depth, museum density, pagodas, and dramatic night streets into one ancient-capital itinerary."
    },
    summary: {
      zh: "西安适合偏爱历史、博物馆和夜间街区的旅行者，老城核心区适合步行，向东可延展到华清宫和秦始皇陵博物馆。",
      en: "Xi'an is excellent for travelers who like archaeology, museums, pagodas, and evening street life. The old core is walkable, with longer trips east to Huaqing Palace and the Emperor Qinshihuang mausoleum complex."
    },
    highlights: {
      zh: ["古都遗址", "博物馆密集", "夜游气氛"],
      en: ["Ancient capital", "Museum-rich", "Night atmosphere"]
    },
    itinerary: {
      zh: [
        "如果安排秦始皇陵博物馆和华清宫，建议一早出发，把它们放在同一条东线。",
        "市区主线可以围绕陕西历史博物馆、大雁塔、大唐不夜城和曲江池展开。",
        "老城区域则适合钟鼓楼、回民街、碑林博物馆和小雁塔的慢节奏组合。"
      ],
      en: [
        "If you plan the Mausoleum Museum and Huaqing Palace, start early and keep them on the same eastern route.",
        "Within the city, a strong core line runs from Shaanxi History Museum to Giant Wild Goose Pagoda, Qujiang Pool, and Great Tang All Day Mall.",
        "The old-city rhythm works well with Bell and Drum Towers, Muslim Quarter, Beilin Museum, and Small Wild Goose Pagoda."
      ]
    },
    routeTemplates: [
      {
        id: "old-city-history",
        names: { zh: "老城历史线", en: "Old City History" },
        description: {
          zh: "围绕老城核心区展开，适合把历史建筑和街区生活放在同一天。",
          en: "An old-city route that pairs historic architecture with street-life stops."
        },
        stops: ["钟鼓楼", "回民街", "碑林博物馆", "小雁塔", "陕西历史博物馆"]
      },
      {
        id: "qujiang-night",
        names: { zh: "曲江夜游线", en: "Qujiang Night Route" },
        description: {
          zh: "适合下午到夜间展开，把博物馆、塔院和夜景商街连起来。",
          en: "Best from afternoon into evening, connecting museums, pagodas, and night districts."
        },
        stops: ["陕西历史博物馆", "大雁塔", "曲江池", "大唐不夜城", "芙蓉园"]
      }
    ],
    spotMeta: {
      "秦始皇陵博物馆": { nameEn: "Mausoleum Museum of Emperor Qinshihuang", coords: [34.3853, 109.2732], theme: "museum", bestTime: "Morning" },
      "华清宫": { nameEn: "Huaqing Palace", coords: [34.3646, 109.2123], theme: "garden", bestTime: "Morning-afternoon" },
      "大雁塔": { nameEn: "Giant Wild Goose Pagoda", coords: [34.2187, 108.9640], theme: "temple", bestTime: "Late afternoon" },
      "小雁塔": { nameEn: "Small Wild Goose Pagoda", coords: [34.2416, 108.9398], theme: "temple", bestTime: "Morning" },
      "陕西历史博物馆": { nameEn: "Shaanxi History Museum", coords: [34.2255, 108.9545], theme: "museum", bestTime: "Morning" },
      "大唐不夜城": { nameEn: "Great Tang All Day Mall", coords: [34.2158, 108.9681], theme: "night", bestTime: "Night" },
      "钟鼓楼": { nameEn: "Bell and Drum Towers", coords: [34.2601, 108.9471], theme: "history", bestTime: "Evening" },
      "回民街": { nameEn: "Muslim Quarter", coords: [34.2638, 108.9442], theme: "street", bestTime: "Evening" },
      "大明宫": { nameEn: "Daming Palace National Heritage Park", coords: [34.2858, 108.9706], theme: "history", bestTime: "Afternoon" },
      "曲江池": { nameEn: "Qujiang Pool", coords: [34.2050, 108.9790], theme: "water", bestTime: "Sunset" },
      "青龙寺": { nameEn: "Qinglong Temple", coords: [34.2323, 109.0007], theme: "temple", bestTime: "Spring morning" },
      "碑林博物馆": { nameEn: "Forest of Stone Steles Museum", coords: [34.2511, 108.9590], theme: "museum", bestTime: "Morning" },
      "芙蓉园": { nameEn: "Tang Paradise", coords: [34.2194, 108.9727], theme: "garden", bestTime: "Afternoon-night" }
    }
  },
  {
    id: "chengdu",
    names: { zh: "成都", en: "Chengdu" },
    marker: [30.5728, 104.0668],
    center: [30.6817, 104.0482],
    zoom: 10.2,
    accent: "#34A853",
    soft: "#E7F4EA",
    subtitle: {
      zh: "成都把熊猫、古迹、街巷和周边山水组合成一条松弛但饱满的城市旅行线。",
      en: "Chengdu mixes pandas, shrines, teahouse streets, creative districts, and mountain-water escapes in a relaxed city rhythm."
    },
    summary: {
      zh: "成都适合希望在慢节奏里把城市生活和周边景区一起打包的国际友人，市区可步行串联，远郊还能延展到都江堰和青城山。",
      en: "Chengdu is a strong choice for international friends who want softer city pacing while still covering major icons, food streets, and outlying scenic routes like Dujiangyan and Mount Qingcheng."
    },
    highlights: {
      zh: ["熊猫城市", "川味街区", "山水外延"],
      en: ["Panda city", "Street-food lanes", "Mountain escape"]
    },
    itinerary: {
      zh: [
        "上午优先去大熊猫基地，回城后再安排武侯祠、锦里古街或宽窄巷子。",
        "如果偏向城市日常，可以把春熙路、东郊记忆和文殊院放在一条线上。",
        "青城山和都江堰更适合整天外出，不建议和市中心密集景点硬拼在同一天。"
      ],
      en: [
        "Start with the panda base in the morning, then return downtown for Wuhou Shrine, Jinli, or Kuanzhai Alleys.",
        "If you want a more urban route, connect Chunxi Road, Dongjiao Memory, and Wenshu Monastery.",
        "Mount Qingcheng and Dujiangyan deserve a full outing and work best away from a crowded city-center day."
      ]
    },
    routeTemplates: [
      {
        id: "city-culture",
        names: { zh: "市区文化线", en: "Downtown Culture" },
        description: {
          zh: "适合第一次进成都城区，把寺院、古迹与老街串成顺路步行线。",
          en: "A first-time downtown route linking shrines, monasteries, and old-style streets."
        },
        stops: ["文殊院", "武侯祠", "锦里古街", "宽窄巷子", "春熙路"]
      },
      {
        id: "creative-night",
        names: { zh: "潮流夜游线", en: "Creative Night Route" },
        description: {
          zh: "更偏向城市生活感，把创意园区、商圈和夜晚氛围放在一起。",
          en: "A more urban route focused on creative districts, shopping, and evening energy."
        },
        stops: ["杜甫草堂", "青羊宫", "东郊记忆", "春熙路", "锦里古街"]
      }
    ],
    spotMeta: {
      "大熊猫基地": { nameEn: "Chengdu Panda Base", coords: [30.7335, 104.1458], theme: "nature", bestTime: "08:30-10:30" },
      "武侯祠": { nameEn: "Wuhou Shrine", coords: [30.6443, 104.0438], theme: "history", bestTime: "Morning" },
      "锦里古街": { nameEn: "Jinli Ancient Street", coords: [30.6451, 104.0430], theme: "night", bestTime: "Evening" },
      "宽窄巷子": { nameEn: "Kuanzhai Alleys", coords: [30.6655, 104.0550], theme: "street", bestTime: "Afternoon" },
      "春熙路": { nameEn: "Chunxi Road", coords: [30.6586, 104.0818], theme: "shopping", bestTime: "Evening" },
      "杜甫草堂": { nameEn: "Du Fu Thatched Cottage", coords: [30.6672, 104.0286], theme: "history", bestTime: "Morning" },
      "文殊院": { nameEn: "Wenshu Monastery", coords: [30.6788, 104.0705], theme: "temple", bestTime: "Morning" },
      "东郊记忆": { nameEn: "Dongjiao Memory", coords: [30.6687, 104.1206], theme: "night", bestTime: "Late afternoon" },
      "青羊宫": { nameEn: "Qingyang Palace", coords: [30.6651, 104.0406], theme: "temple", bestTime: "Morning" },
      "都江堰": { nameEn: "Dujiangyan", coords: [30.9986, 103.6167], theme: "water", bestTime: "Day trip" },
      "青城山": { nameEn: "Mount Qingcheng", coords: [30.9057, 103.5691], theme: "mountain", bestTime: "Day trip" }
    }
  },
  {
    id: "hangzhou",
    names: { zh: "杭州", en: "Hangzhou" },
    marker: [30.2741, 120.1551],
    center: [30.2556, 120.1288],
    zoom: 10.1,
    accent: "#4285F4",
    soft: "#E8F0FE",
    subtitle: {
      zh: "杭州围绕西湖展开，同时把寺院、古街、茶村、塔与湿地串成一条轻盈的江南路线。",
      en: "Hangzhou moves outward from West Lake into temples, tea villages, pagodas, wetlands, and old streets with a calm Jiangnan rhythm."
    },
    summary: {
      zh: "杭州适合喜欢湖景、慢节奏与江南气质的旅行者，市区景点之间衔接自然，外围还能延展到龙井村、良渚古城和千岛湖。",
      en: "Hangzhou suits travelers who want lakeside scenery, temple calm, tea culture, and a slower pace, with easy extensions to Longjing, Liangzhu, and Qiandao Lake."
    },
    highlights: {
      zh: ["西湖主线", "寺塔茶村", "湿地古城"],
      en: ["West Lake core", "Temples and tea", "Wetland escape"]
    },
    itinerary: {
      zh: [
        "上午围绕西湖和苏堤展开，午后接灵隐寺或岳王庙，傍晚看雷峰塔周边光线。",
        "如果喜欢街区步行，可把南宋御街放在晚间，再补小吃和夜景。",
        "龙井村、西溪湿地、良渚古城和千岛湖更适合拉开节奏，不建议塞进同一条紧凑日程。"
      ],
      en: [
        "Use the morning for West Lake and Su Causeway, then move toward Lingyin Temple or Yue Fei Temple in the afternoon.",
        "If you enjoy walking streets, save Southern Song Imperial Street for the evening and food breaks.",
        "Longjing Village, Xixi Wetland, Liangzhu, and Qiandao Lake deserve more breathing room instead of one compressed day."
      ]
    },
    routeTemplates: [
      {
        id: "west-lake-classic",
        names: { zh: "西湖经典线", en: "West Lake Classic" },
        description: {
          zh: "适合第一次来杭州，围绕西湖主线和周边核心景点展开。",
          en: "A first-time Hangzhou route built around the West Lake core and nearby anchors."
        },
        stops: ["西湖", "苏堤", "岳王庙", "雷峰塔", "南宋御街"]
      },
      {
        id: "temple-tea",
        names: { zh: "寺院茶村线", en: "Temple and Tea Route" },
        description: {
          zh: "把灵隐寺、茶村和湿地等更有江南气质的点串在一起。",
          en: "A calmer route centered on temple atmosphere, tea landscapes, and greener edges of the city."
        },
        stops: ["灵隐寺", "龙井村", "西溪国家湿地公园", "六和塔", "良渚古城"]
      }
    ],
    spotMeta: {
      "西湖": { nameEn: "West Lake", coords: [30.2507, 120.1409], theme: "water", bestTime: "Morning-sunset" },
      "灵隐寺": { nameEn: "Lingyin Temple", coords: [30.2429, 120.1015], theme: "temple", bestTime: "Morning" },
      "雷峰塔": { nameEn: "Leifeng Pagoda", coords: [30.2311, 120.1488], theme: "landmark", bestTime: "Sunset" },
      "龙井村": { nameEn: "Longjing Village", coords: [30.2107, 120.1085], theme: "nature", bestTime: "Morning-afternoon" },
      "西溪国家湿地公园": { nameEn: "Xixi National Wetland Park", coords: [30.2720, 120.0623], theme: "nature", bestTime: "Morning" },
      "千岛湖": { nameEn: "Qiandao Lake", coords: [29.6043, 119.0302], theme: "water", bestTime: "Day trip" },
      "苏堤": { nameEn: "Su Causeway", coords: [30.2485, 120.1379], theme: "water", bestTime: "Morning" },
      "岳王庙": { nameEn: "Yue Fei Temple", coords: [30.2596, 120.1431], theme: "history", bestTime: "Morning-afternoon" },
      "六和塔": { nameEn: "Liuhe Pagoda", coords: [30.2071, 120.1480], theme: "landmark", bestTime: "Afternoon" },
      "南宋御街": { nameEn: "Southern Song Imperial Street", coords: [30.2468, 120.1749], theme: "street", bestTime: "Evening" },
      "良渚古城": { nameEn: "Liangzhu Ancient City", coords: [30.3796, 120.0309], theme: "history", bestTime: "Daytime" }
    }
  }
];

const themeText = {
  zh: {
    history: "历史地标",
    temple: "寺院古建",
    garden: "园林景观",
    mountain: "山地景区",
    park: "城市公园",
    water: "水岸风景",
    street: "街区漫游",
    shopping: "城市商圈",
    landmark: "城市地标",
    museum: "博物馆",
    night: "夜游热点",
    nature: "自然景观"
  },
  en: {
    history: "Heritage",
    temple: "Temple",
    garden: "Garden",
    mountain: "Mountain",
    park: "Park",
    water: "Waterfront",
    street: "Street walk",
    shopping: "Urban district",
    landmark: "Landmark",
    museum: "Museum",
    night: "Nightlife",
    nature: "Nature"
  },
  ja: {
    history: "歴史名所",
    temple: "寺院建築",
    garden: "庭園景観",
    mountain: "山岳景勝地",
    park: "都市公園",
    water: "水辺風景",
    street: "街歩き",
    shopping: "都市商業エリア",
    landmark: "都市ランドマーク",
    museum: "博物館",
    night: "ナイトスポット",
    nature: "自然景観"
  },
  ko: {
    history: "역사 명소",
    temple: "사찰 건축",
    garden: "정원 풍경",
    mountain: "산악 경관",
    park: "도시 공원",
    water: "수변 풍경",
    street: "거리 산책",
    shopping: "도심 상권",
    landmark: "도시 랜드마크",
    museum: "박물관",
    night: "야간 명소",
    nature: "자연 경관"
  },
  es: {
    history: "Patrimonio histórico",
    temple: "Templo y arquitectura",
    garden: "Jardín",
    mountain: "Zona de montaña",
    park: "Parque urbano",
    water: "Paisaje junto al agua",
    street: "Paseo por calles",
    shopping: "Distrito comercial",
    landmark: "Icono urbano",
    museum: "Museo",
    night: "Vida nocturna",
    nature: "Naturaleza"
  },
  fr: {
    history: "Patrimoine historique",
    temple: "Temple et architecture",
    garden: "Jardin",
    mountain: "Paysage de montagne",
    park: "Parc urbain",
    water: "Paysage au bord de l'eau",
    street: "Promenade urbaine",
    shopping: "Quartier commerçant",
    landmark: "Repère urbain",
    museum: "Musée",
    night: "Sortie nocturne",
    nature: "Nature"
  },
  ar: {
    history: "معلم تاريخي",
    temple: "معبد وعمارة",
    garden: "حديقة ومنظر طبيعي",
    mountain: "منطقة جبلية",
    park: "حديقة حضرية",
    water: "مشهد مائي",
    street: "جولة في الشوارع",
    shopping: "منطقة تجارية",
    landmark: "معلم بارز",
    museum: "متحف",
    night: "حياة ليلية",
    nature: "طبيعة"
  }
};

const bestTimeText = {
  zh: {
    Flexible: "时间灵活",
    Morning: "上午",
    "Morning-afternoon": "上午至下午",
    Afternoon: "下午",
    "Afternoon-evening": "下午至傍晚",
    "Afternoon-night": "下午至夜间",
    "Late afternoon": "傍晚前后",
    Evening: "傍晚至夜间",
    Night: "夜间",
    Sunset: "日落时分",
    "Sunset-night": "日落到夜间",
    "Morning-sunset": "上午至日落",
    "Day trip": "适合一日往返",
    "Half-day": "适合半日游",
    Daytime: "白天",
    "Spring morning": "春日上午",
    "Autumn afternoon": "秋日下午",
    "15:00-sunset": "15:00 至日落"
  },
  ja: {
    Flexible: "時間は柔軟",
    Morning: "午前",
    "Morning-afternoon": "午前から午後",
    Afternoon: "午後",
    "Afternoon-evening": "午後から夕方",
    "Afternoon-night": "午後から夜",
    "Late afternoon": "夕方前",
    Evening: "夕方から夜",
    Night: "夜",
    Sunset: "夕暮れ",
    "Sunset-night": "夕暮れから夜",
    "Morning-sunset": "午前から夕暮れ",
    "Day trip": "日帰り向き",
    "Half-day": "半日向き",
    Daytime: "日中",
    "Spring morning": "春の午前",
    "Autumn afternoon": "秋の午後",
    "15:00-sunset": "15:00 から夕暮れ"
  },
  ko: {
    Flexible: "시간 자유",
    Morning: "오전",
    "Morning-afternoon": "오전부터 오후",
    Afternoon: "오후",
    "Afternoon-evening": "오후부터 저녁",
    "Afternoon-night": "오후부터 밤",
    "Late afternoon": "늦은 오후",
    Evening: "저녁",
    Night: "야간",
    Sunset: "해질 무렵",
    "Sunset-night": "해질 무렵부터 밤",
    "Morning-sunset": "오전부터 일몰",
    "Day trip": "당일치기 추천",
    "Half-day": "반나절 추천",
    Daytime: "주간",
    "Spring morning": "봄 오전",
    "Autumn afternoon": "가을 오후",
    "15:00-sunset": "15:00 부터 일몰"
  },
  es: {
    Flexible: "Horario flexible",
    Morning: "Mañana",
    "Morning-afternoon": "De la mañana a la tarde",
    Afternoon: "Tarde",
    "Afternoon-evening": "De la tarde al anochecer",
    "Afternoon-night": "De la tarde a la noche",
    "Late afternoon": "Última hora de la tarde",
    Evening: "Tarde-noche",
    Night: "Noche",
    Sunset: "Atardecer",
    "Sunset-night": "Del atardecer a la noche",
    "Morning-sunset": "De la mañana al atardecer",
    "Day trip": "Ideal para excursión de un día",
    "Half-day": "Ideal para medio día",
    Daytime: "Durante el día",
    "Spring morning": "Mañana de primavera",
    "Autumn afternoon": "Tarde de otoño",
    "15:00-sunset": "De 15:00 al atardecer"
  },
  fr: {
    Flexible: "Horaire flexible",
    Morning: "Matin",
    "Morning-afternoon": "Du matin à l'après-midi",
    Afternoon: "Après-midi",
    "Afternoon-evening": "De l'après-midi au soir",
    "Afternoon-night": "De l'après-midi à la nuit",
    "Late afternoon": "Fin d'après-midi",
    Evening: "Soirée",
    Night: "Nuit",
    Sunset: "Coucher du soleil",
    "Sunset-night": "Du coucher du soleil à la nuit",
    "Morning-sunset": "Du matin au coucher du soleil",
    "Day trip": "Adapté à une excursion d'une journée",
    "Half-day": "Adapté à une demi-journée",
    Daytime: "En journée",
    "Spring morning": "Matin de printemps",
    "Autumn afternoon": "Après-midi d'automne",
    "15:00-sunset": "De 15:00 au coucher du soleil"
  },
  ar: {
    Flexible: "الوقت مرن",
    Morning: "صباحًا",
    "Morning-afternoon": "من الصباح إلى بعد الظهر",
    Afternoon: "بعد الظهر",
    "Afternoon-evening": "من بعد الظهر إلى المساء",
    "Afternoon-night": "من بعد الظهر إلى الليل",
    "Late afternoon": "آخر بعد الظهر",
    Evening: "المساء",
    Night: "ليلًا",
    Sunset: "وقت الغروب",
    "Sunset-night": "من الغروب إلى الليل",
    "Morning-sunset": "من الصباح إلى الغروب",
    "Day trip": "مناسب لرحلة يوم واحد",
    "Half-day": "مناسب لنصف يوم",
    Daytime: "خلال النهار",
    "Spring morning": "صباح ربيعي",
    "Autumn afternoon": "بعد ظهر خريفي",
    "15:00-sunset": "من 15:00 حتى الغروب"
  }
};

const themeSummary = {
  zh: {
    history: "{spot}是{city}那种越慢走越有感觉的地方，不一定靠打卡取胜，更多是在建筑、尺度和故事里把节奏放下来。",
    temple: "{spot}更适合静下来看，别急着赶路，听一会儿声音、看看院落和细节，体验会比匆匆拍照更好。",
    garden: "{spot}属于很适合散步的景点，边走边看水面、树影和园林转折，半天时间通常会比较舒服。",
    mountain: "{spot}更像一条需要留出体力和时间的路线，景色会慢慢展开，越往后走越值。",
    park: "{spot}很适合在城市主线里插入一段轻松的停留，让整天的节奏没那么紧绷。",
    water: "{spot}的看点不只是某一个角度，更在于沿着水边慢慢走，光线和氛围会一直变化。",
    street: "{spot}适合边走边逛，不用太有任务感，顺着街景、小店和人流去感受这座城市就行。",
    shopping: "{spot}是感受城市热度很直接的地方，尤其到了傍晚以后，灯光、人群和节奏会一下子起来。",
    landmark: "{spot}比较适合在视野打开或灯光亮起的时候去看，现场辨识度和照片效果都会更强。",
    museum: "{spot}适合把时间留给展陈本身，别排得太赶，慢慢看反而更容易记住这座城市的气质。",
    night: "{spot}最好留到天色渐暗之后，等灯光、音乐和人流都到位了，氛围才真正出来。",
    nature: "{spot}更讲究环境和呼吸感，建议别压缩得太紧，留一点发呆和停下来的时间会更值。"
  },
  en: {
    history: "{spot} feels best when you slow down and let the place unfold. It is less about rushing a checklist and more about noticing architecture, scale, and story.",
    temple: "{spot} is better experienced quietly. If you give it a little time instead of treating it as a quick stop, the atmosphere lands much more naturally.",
    garden: "{spot} is the kind of place that rewards an easy walk. Water, trees, and changing views do most of the work here.",
    mountain: "{spot} works better as a route with some breathing room. The scenery builds gradually, and it gets better when you are not rushing it.",
    park: "{spot} is a good pause inside a busy city day, offering open space and a softer pace without fully leaving the urban core.",
    water: "{spot} is less about one exact viewpoint and more about walking along the water and watching the mood shift with the light.",
    street: "{spot} is ideal for wandering without overplanning. Let the storefronts, snacks, and passing rhythm shape the visit.",
    shopping: "{spot} is one of the easiest ways to feel the city's energy, especially once the evening lights and crowds start building.",
    landmark: "{spot} hits hardest when the view opens up or the lights come on, so timing makes a big difference here.",
    museum: "{spot} works best when you give the exhibits real attention instead of squeezing it into a rushed stop.",
    night: "{spot} really comes alive later in the day, when lights, sound, and movement all start working together.",
    nature: "{spot} is more about air, space, and rhythm, so it is worth leaving enough time to linger instead of hurrying through."
  },
  ja: {
    history: "{spot}は、急いで回るよりも足をゆるめて眺めたほうが魅力が伝わる場所です。建築やスケール、背景の物語が少しずつ効いてきます。",
    temple: "{spot}は静かに過ごすほど印象が深まります。急いで写真だけ撮るより、音や中庭、細部を見るほうが心地よく残ります。",
    garden: "{spot}は気負わず歩くのに向いた場所です。水面や木陰、曲がり角ごとの景色が自然に旅の時間をつくってくれます。",
    mountain: "{spot}は体力と時間に少し余裕を持たせるほど楽しめます。景色が段階的に開いていくので、急がないほうが得です。",
    park: "{spot}は都市観光の途中でひと息入れるのにちょうどよく、一日の流れを少しやわらげてくれます。",
    water: "{spot}は一つの撮影ポイントだけでなく、水辺を歩きながら光と空気の変化を感じるのが魅力です。",
    street: "{spot}は予定を詰め込みすぎず、店先や人の流れに合わせて歩くとその街らしさが見えてきます。",
    shopping: "{spot}は街の熱量をつかみやすい場所で、とくに夕方以降は灯りと人の動きで一気に表情が出ます。",
    landmark: "{spot}は視界が開く時間帯やライトアップの時間に訪れると、現地での迫力がぐっと増します。",
    museum: "{spot}は展示そのものに時間を使うほうが満足度が高い場所です。慌てずに見るのが合っています。",
    night: "{spot}は空が暗くなってから本番です。灯り、音、人の流れがそろうと雰囲気が一気に立ち上がります。",
    nature: "{spot}は空気感や余白を楽しむ場所なので、詰め込みすぎず、少し立ち止まる時間を残すのが向いています。"
  },
  ko: {
    history: "{spot}은 서두르기보다 천천히 걸을 때 더 매력이 살아나는 곳입니다. 건축과 규모, 이야기가 차분하게 다가옵니다.",
    temple: "{spot}은 조용히 머물수록 인상이 깊어집니다. 사진만 급히 찍기보다 소리와 마당, 세부를 보는 편이 더 좋습니다.",
    garden: "{spot}은 가볍게 산책하듯 둘러보기 좋은 장소입니다. 물과 나무, 동선의 변화가 자연스럽게 여행의 리듬을 만듭니다.",
    mountain: "{spot}은 체력과 시간을 조금 넉넉하게 잡을수록 만족도가 높습니다. 풍경이 천천히 펼쳐지기 때문에 서두르지 않는 편이 좋습니다.",
    park: "{spot}은 빡빡한 도시 일정 속에서 숨을 돌리기 좋은 장소로, 하루의 템포를 부드럽게 바꿔 줍니다.",
    water: "{spot}의 매력은 한 지점에서 끝나지 않습니다. 물가를 따라 걸으며 빛과 분위기가 바뀌는 과정을 보는 것이 좋습니다.",
    street: "{spot}은 계획을 너무 촘촘하게 세우지 않고, 가게와 사람 흐름에 맞춰 걷는 편이 더 잘 어울립니다.",
    shopping: "{spot}은 도시의 활기를 가장 직접적으로 느끼기 좋은 곳이고, 특히 저녁이 되면 분위기가 더 살아납니다.",
    landmark: "{spot}은 시야가 트이거나 조명이 들어오는 시간대에 가면 현장감이 훨씬 강해집니다.",
    museum: "{spot}은 전시 자체에 시간을 충분히 쓰는 편이 좋습니다. 짧게 훑기보다 천천히 보는 쪽이 더 어울립니다.",
    night: "{spot}은 해가 지고 난 뒤에 진짜 분위기가 살아납니다. 조명과 소리, 사람 흐름이 모이면 매력이 커집니다.",
    nature: "{spot}은 공기와 여백을 느끼는 장소라서, 일정을 너무 꽉 채우지 말고 잠시 멈출 시간을 남겨두는 편이 좋습니다."
  },
  es: {
    history: "{spot} se disfruta más cuando bajas el ritmo. Aquí importan más la arquitectura, la escala y la historia que correr de un punto a otro.",
    temple: "{spot} funciona mejor con una visita tranquila. Si le das un poco de tiempo, el ambiente se siente de forma mucho más natural.",
    garden: "{spot} es un lugar para caminar sin prisa. El agua, los árboles y los cambios de perspectiva hacen casi todo el trabajo.",
    mountain: "{spot} conviene con algo de tiempo y energía reservados. El paisaje se abre poco a poco y mejora cuando no lo haces con prisa.",
    park: "{spot} es una buena pausa dentro de un día urbano intenso, con espacio abierto y un ritmo bastante más suave.",
    water: "{spot} no depende de un solo ángulo. Lo mejor es avanzar junto al agua y dejar que cambien la luz y el ambiente.",
    street: "{spot} se presta a pasear sin demasiado plan. Las tiendas, la comida y el movimiento de la calle van marcando la visita.",
    shopping: "{spot} es una de las formas más directas de sentir la energía de la ciudad, sobre todo cuando empiezan las luces de la tarde.",
    landmark: "{spot} luce mucho más cuando se abre la vista o se enciende la iluminación, así que el horario importa bastante.",
    museum: "{spot} merece tiempo para mirar las exposiciones con calma, en lugar de meterlo como una parada rápida.",
    night: "{spot} cobra vida al caer la tarde, cuando luces, sonido y movimiento empiezan a encajar de verdad.",
    nature: "{spot} tiene más que ver con el aire, el espacio y el ritmo, así que vale la pena dejar tiempo para quedarse un rato."
  },
  fr: {
    history: "{spot} se découvre mieux quand on ralentit. Ici, l'architecture, l'échelle et l'histoire comptent plus qu'une visite expédiée.",
    temple: "{spot} gagne à être visité dans le calme. En prenant un peu de temps, l'atmosphère s'installe beaucoup plus naturellement.",
    garden: "{spot} se prête à une promenade tranquille. L'eau, les arbres et les changements de perspective font l'essentiel.",
    mountain: "{spot} demande un peu d'énergie et de marge dans le programme. Le paysage se révèle progressivement, donc mieux vaut ne pas se presser.",
    park: "{spot} est une bonne respiration au milieu d'une journée de ville, avec plus d'espace et un rythme plus doux.",
    water: "{spot} ne se résume pas à un seul point de vue. Le plus agréable est d'avancer le long de l'eau et de sentir l'ambiance évoluer.",
    street: "{spot} fonctionne bien sans programme trop rigide. Les vitrines, les snacks et le rythme de la rue construisent naturellement la visite.",
    shopping: "{spot} est l'un des moyens les plus simples de sentir l'énergie de la ville, surtout quand les lumières du soir montent.",
    landmark: "{spot} est nettement plus fort quand la vue s'ouvre ou que l'éclairage s'allume, donc le moment choisi change vraiment l'effet.",
    museum: "{spot} mérite qu'on prenne le temps de regarder les collections au lieu d'en faire un simple arrêt rapide.",
    night: "{spot} prend toute son ampleur à la tombée du jour, quand les lumières, les sons et le mouvement se mettent ensemble en place.",
    nature: "{spot} repose davantage sur l'air, l'espace et le rythme, donc il vaut mieux laisser un peu de marge pour s'y attarder."
  },
  ar: {
    history: "{spot} يكون أجمل عندما تزوره بهدوء ومن دون استعجال، لأن العمارة والحجم والحكاية هي ما يصنع التجربة هنا.",
    temple: "{spot} يناسب الزيارة الهادئة أكثر. إذا منحت المكان بعض الوقت ستشعر بأجوائه بشكل أعمق بكثير.",
    garden: "{spot} مكان مناسب للمشي المريح. الماء والأشجار وتبدل المشاهد هي التي تمنح الزيارة قيمتها.",
    mountain: "{spot} يحتاج إلى وقت وطاقة إضافيين قليلًا، لأن المشهد يتكشف تدريجيًا ويكون أجمل عندما لا تستعجل.",
    park: "{spot} محطة جيدة لالتقاط النفس داخل يوم مزدحم في المدينة، ويمنحك إيقاعًا أخف ومساحة أوسع.",
    water: "{spot} لا يعتمد على زاوية واحدة فقط، بل على المشي بمحاذاة الماء وملاحظة تغير الضوء والأجواء.",
    street: "{spot} يناسب التجول من دون خطة صارمة، حيث تقودك الواجهات والطعام وحركة الناس إلى تجربة المكان.",
    shopping: "{spot} من أسهل الأماكن لالتقاط طاقة المدينة، خاصة عندما تبدأ الأضواء والحشود بالظهور في المساء.",
    landmark: "{spot} يبدو أقوى عندما ينفتح المشهد أو تضاء الأنوار، لذلك يؤثر التوقيت كثيرًا في التجربة.",
    museum: "{spot} يستحق أن تمنحه وقتًا حقيقيًا للمعروضات بدل أن يكون مجرد توقف سريع.",
    night: "{spot} يتألق فعلًا بعد حلول المساء، حين تجتمع الإضاءة والصوت والحركة في مشهد واحد.",
    nature: "{spot} يدور أكثر حول الهواء والمساحة والإيقاع، لذلك من الأفضل ترك وقت كافٍ للتوقف والتأمل."
  }
};

const localizedCityContent = {
  beijing: {
    names: { ja: "北京", ko: "베이징", es: "Pekín", fr: "Pékin", ar: "بكين" },
    subtitle: {
      ja: "北京では、皇城の遺産、長城、庭園、胡同の暮らしが一つの旅の流れにつながります。",
      ko: "베이징은 황성 유산, 만리장성, 왕실 정원, 후퉁 골목이 한 도시 여행선 안에 이어집니다.",
      es: "Pekín reúne patrimonio imperial, la Gran Muralla, jardines clásicos y vida de hutong en una misma ruta.",
      fr: "Pékin relie héritage impérial, Grande Muraille, jardins classiques et vie des hutongs dans un même voyage.",
      ar: "تجمع بكين بين التراث الإمبراطوري وسور الصين والحدائق والحياة في أزقة الهوتونغ ضمن رحلة واحدة."
    },
    summary: {
      ja: "北京は、中国を初めてしっかり回る国際友人に向いた都市です。主要名所の密度が高く、地下鉄も使いやすく、定番建築と街の暮らしを同時に体験できます。",
      ko: "베이징은 중국을 처음 본격적으로 둘러보는 유학생에게 잘 맞는 도시입니다. 대표 명소 밀도가 높고 지하철이 편리해 상징적인 건축과 일상적인 거리 풍경을 함께 볼 수 있습니다.",
      es: "Pekín funciona muy bien para estudiantes internacionales que quieren una primera visión completa de China. Hay muchos iconos históricos, una red de metro madura y un buen equilibrio entre monumentos y vida urbana.",
      fr: "Pékin convient très bien à une première découverte structurée de la Chine. Les grands repères historiques sont denses, le métro est efficace et l'on alterne facilement monuments et vie de quartier.",
      ar: "تعد بكين خيارًا مناسبًا للطلاب الدوليين الذين يريدون تجربة أولى متكاملة في الصين، إذ تجمع بين كثافة المعالم التاريخية وسهولة المترو والتوازن بين الرموز المعروفة وحياة الأحياء."
    },
    highlights: {
      ja: ["皇城中軸", "庭園と湖景", "長城日帰り"],
      ko: ["황성 중심축", "정원과 호수 풍경", "만리장성 당일 코스"],
      es: ["Eje imperial", "Jardines y lagos", "Excursión a la Gran Muralla"],
      fr: ["Axe impérial", "Jardins et lacs", "Excursion sur la Grande Muraille"],
      ar: ["المحور الإمبراطوري", "حدائق ومشاهد البحيرات", "رحلة يومية إلى سور الصين"]
    },
    routes: {
      "imperial-core": {
        names: {
          ja: "皇城王道ルート",
          ko: "황성 핵심 코스",
          es: "Ruta clásica imperial",
          fr: "Parcours classique impérial",
          ar: "المسار الإمبراطوري الكلاسيكي"
        },
        description: {
          ja: "初めての北京に向いた定番線で、皇城の軸線と旧市街の散策感をまとめて味わえます。",
          ko: "처음 베이징을 찾을 때 좋은 대표 코스로, 황성 축선과 구도심 산책 분위기를 함께 담았습니다.",
          es: "Una ruta ideal para una primera visita, centrada en el eje imperial y el paseo por la ciudad antigua.",
          fr: "Un itinéraire idéal pour une première visite, centré sur l'axe impérial et la promenade dans l'ancien Pékin.",
          ar: "مسار مناسب للزيارة الأولى، يجمع بين المحور الإمبراطوري وأجواء المشي في المدينة القديمة."
        }
      },
      "garden-temple": {
        names: {
          ja: "庭園と寺院ルート",
          ko: "정원과 사찰 코스",
          es: "Ruta de jardines y templos",
          fr: "Parcours jardins et temples",
          ar: "مسار الحدائق والمعابد"
        },
        description: {
          ja: "寺院や皇家庭園をじっくり見たい人向けで、日中に落ち着いて回りやすい流れです。",
          ko: "사찰과 황실 정원을 차분히 보고 싶을 때 어울리는 코스로, 낮 시간대에 깊게 둘러보기 좋습니다.",
          es: "Pensada para quien quiere ver templos y jardines imperiales con un ritmo más pausado durante el día.",
          fr: "Un parcours plus calme pour ceux qui veulent prendre le temps de voir temples et jardins impériaux.",
          ar: "مسار أهدأ لمن يريد التركيز على المعابد والحدائق الإمبراطورية خلال النهار."
        }
      }
    },
    spots: {
      "故宫博物院": { ja: "故宮博物院", ko: "자금성 박물관", es: "Museo del Palacio", fr: "Musée du Palais", ar: "متحف القصر الإمبراطوري" },
      "天坛": { ja: "天壇", ko: "천단공원", es: "Templo del Cielo", fr: "Temple du Ciel", ar: "معبد السماء" },
      "颐和园": { ja: "頤和園", ko: "이화원", es: "Palacio de Verano", fr: "Palais d'Été", ar: "القصر الصيفي" },
      "八达岭长城": { ja: "八達嶺長城", ko: "팔달령 장성", es: "Gran Muralla en Badaling", fr: "Grande Muraille de Badaling", ar: "سور بادالينغ العظيم" },
      "景山公园": { ja: "景山公園", ko: "경산공원", es: "Parque Jingshan", fr: "Parc Jingshan", ar: "حديقة جينغشان" },
      "什刹海": { ja: "什刹海", ko: "스차하이", es: "Shichahai", fr: "Shichahai", ar: "شي차هاي" },
      "雍和宫": { ja: "雍和宮", ko: "옹화궁", es: "Templo Lama", fr: "Temple des Lamas", ar: "معبد لاما" },
      "南锣鼓巷": { ja: "南鑼鼓巷", ko: "난뤄구샹", es: "Nanluoguxiang", fr: "Nanluoguxiang", ar: "نانلووقوشيانغ" },
      "北海公园": { ja: "北海公園", ko: "베이하이공원", es: "Parque Beihai", fr: "Parc Beihai", ar: "حديقة بيهاي" },
      "奥林匹克公园": { ja: "オリンピック公園", ko: "올림픽공원", es: "Parque Olímpico", fr: "Parc olympique", ar: "الحديقة الأولمبية" },
      "圆明园": { ja: "円明園", ko: "원명원", es: "Antiguo Palacio de Verano", fr: "Ancien Palais d'Été", ar: "القصر الصيفي القديم" },
      "香山公园": { ja: "香山公園", ko: "샹산공원", es: "Parque Xiangshan", fr: "Parc Xiangshan", ar: "حديقة شيانغشان" }
    }
  },
  shanghai: {
    names: { ja: "上海", ko: "상하이", es: "Shanghái", fr: "Shanghai", ar: "شنغهاي" },
    subtitle: {
      ja: "上海では、外灘のスカイライン、梧桐並木の街区、古鎮の水路が一つの都市旅にまとまります。",
      ko: "상하이는 와이탄 스카이라인, 플라타너스 거리, 수향 고진이 하나의 도시 여행 안에 함께 들어옵니다.",
      es: "Shanghái combina el skyline del Bund, barrios arbolados y antiguos pueblos de agua en un mismo recorrido.",
      fr: "Shanghai mêle skyline du Bund, rues arborées et bourgs d'eau anciens dans un seul voyage urbain.",
      ar: "تجمع شنغهاي بين أفق البوند وأحياء الأشجار والبلدات المائية القديمة في رحلة حضرية واحدة."
    },
    summary: {
      ja: "上海は大都市のリズムを楽しみたい国際友人に向いています。夜景が強く、街歩きや寺院、古鎮まで組み合わせると旅の幅が広がります。",
      ko: "상하이는 대도시의 속도감을 좋아하는 유학생에게 잘 맞습니다. 야경이 강하고, 거리 산책과 사찰, 고진까지 조합하면 도시 경험이 훨씬 풍부해집니다.",
      es: "Shanghái es ideal para estudiantes que disfrutan de una gran metrópoli. Tiene noches muy fuertes y también permite combinar barrios, templos y pueblos de agua.",
      fr: "Shanghai convient bien à ceux qui aiment l'énergie d'une grande métropole. Les vues nocturnes sont fortes, mais on peut aussi y glisser temples, vieux quartiers et bourgs d'eau.",
      ar: "تناسب شنغهاي من يحب إيقاع المدن الكبرى، فهي قوية من ناحية المشاهد الليلية، وفي الوقت نفسه تسمح بدمج الأحياء والمعابد والبلدات المائية في الرحلة."
    },
    highlights: {
      ja: ["モダン夜景", "旧市街と古鎮", "街区散策"],
      ko: ["현대적 야경", "구도심과 고진", "거리 산책"],
      es: ["Skyline moderno", "Casco antiguo y pueblos de agua", "Paseos urbanos"],
      fr: ["Skyline moderne", "Vieille ville et bourgs d'eau", "Promenades de quartier"],
      ar: ["مشاهد ليلية حديثة", "المدينة القديمة والبلدات المائية", "التجول في الأحياء"]
    },
    routes: {
      "bund-classic": {
        names: {
          ja: "外灘クラシック",
          ko: "와이탄 클래식 코스",
          es: "Ruta clásica del Bund",
          fr: "Parcours classique du Bund",
          ar: "المسار الكلاسيكي للبوند"
        },
        description: {
          ja: "上海らしい天際線、商業エリア、旧市街の庭園を一つの主線にまとめたルートです。",
          ko: "상하이다운 스카이라인과 상권, 구도심 정원을 한 줄로 묶은 대표 코스입니다.",
          es: "Una línea principal que reúne el skyline más típico de Shanghái, las zonas comerciales y el jardín del casco antiguo.",
          fr: "Un itinéraire principal qui rassemble le skyline emblématique de Shanghai, les rues commerçantes et le jardin de la vieille ville.",
          ar: "مسار رئيسي يجمع بين أفق شنغهاي الشهير والمناطق التجارية وحديقة المدينة القديمة."
        }
      },
      "old-town-water": {
        names: {
          ja: "旧市街と水郷ルート",
          ko: "구도심과 수향 코스",
          es: "Ruta de casco antiguo y pueblo de agua",
          fr: "Parcours vieille ville et bourg d'eau",
          ar: "مسار المدينة القديمة والبلدة المائية"
        },
        description: {
          ja: "街歩きや古鎮、水辺の空気が好きな人に向いた、やわらかい雰囲気のルートです。",
          ko: "거리 산책과 고진, 수향 분위기를 좋아할 때 잘 맞는 조금 더 부드러운 코스입니다.",
          es: "Más adecuada para quien prefiere callejear, ver barrios antiguos y sentir el ambiente de las zonas de agua.",
          fr: "Un parcours plus doux pour ceux qui préfèrent marcher, voir de vieux quartiers et retrouver l'ambiance des villes d'eau.",
          ar: "مسار أنسب لمن يفضل المشي في الأحياء القديمة وأجواء القنوات والبلدات المائية."
        }
      }
    },
    spots: {
      "外滩": { ja: "外灘", ko: "와이탄", es: "El Bund", fr: "Le Bund", ar: "البوند" },
      "豫园": { ja: "豫園", ko: "위위안", es: "Jardín Yuyuan", fr: "Jardin Yuyuan", ar: "حديقة يوييوان" },
      "东方明珠": { ja: "東方明珠テレビ塔", ko: "동방명주탑", es: "Torre Perla Oriental", fr: "Tour de la Perle de l'Orient", ar: "برج لؤلؤة الشرق" },
      "南京路步行街": { ja: "南京路歩行街", ko: "난징루 보행가", es: "Calle peatonal Nanjing", fr: "Rue piétonne de Nankin", ar: "شارع نانجينغ للمشاة" },
      "武康路": { ja: "武康路", ko: "우캉루", es: "Wukang Road", fr: "Wukang Road", ar: "طريق ووكانغ" },
      "静安寺": { ja: "静安寺", ko: "징안사", es: "Templo Jing'an", fr: "Temple Jing'an", ar: "معبد جينغآن" },
      "城隍庙": { ja: "城隍廟", ko: "성황묘", es: "Templo del Dios de la Ciudad", fr: "Temple du Dieu de la ville", ar: "معبد إله المدينة" },
      "朱家角古镇": { ja: "朱家角古鎮", ko: "주자자오 수향마을", es: "Pueblo acuático de Zhujiajiao", fr: "Bourg d'eau de Zhujiajiao", ar: "بلدة تشوجياجياو المائية" },
      "七宝老街": { ja: "七宝老街", ko: "치바오 옛거리", es: "Calle antigua de Qibao", fr: "Vieille rue de Qibao", ar: "الشارع القديم في تشيباو" }
    }
  },
  xian: {
    names: { ja: "西安", ko: "시안", es: "Xi'an", fr: "Xi'an", ar: "شيآن" },
    subtitle: {
      ja: "西安は、古都遺跡、博物館、塔院、夜の街並みを一本の強い歴史線にまとめています。",
      ko: "시안은 고도 유적, 박물관, 탑, 야간 거리 분위기를 하나의 강한 역사선으로 압축한 도시입니다.",
      es: "Xi'an concentra restos de la antigua capital, museos, pagodas y ambiente nocturno en una ruta histórica muy intensa.",
      fr: "Xi'an concentre vestiges de l'ancienne capitale, musées, pagodes et ambiance nocturne dans une ligne historique très forte.",
      ar: "تضغط شيآن آثار العاصمة القديمة والمتاحف والأبراج والأجواء الليلية في مسار تاريخي شديد الكثافة."
    },
    summary: {
      ja: "西安は、歴史、博物館、夜の街区が好きな旅行者に向いています。旧市街は歩きやすく、東へ伸ばせば華清宮や兵馬俑方面までつながります。",
      ko: "시안은 역사와 박물관, 야간 거리 분위기를 좋아하는 여행자에게 잘 맞습니다. 구도심은 도보로 보기 좋고, 동쪽으로는 화청궁과 병마용 방면까지 이어집니다.",
      es: "Xi'an es excelente para quienes disfrutan de la historia, los museos y los barrios nocturnos. El centro antiguo se recorre bien a pie y hacia el este se amplía hasta Huaqing y el complejo del mausoleo de Qin.",
      fr: "Xi'an convient très bien aux voyageurs attirés par l'histoire, les musées et les quartiers animés le soir. Le cœur ancien se parcourt facilement à pied et l'on peut prolonger vers Huaqing et le mausolée de Qin.",
      ar: "تعد شيآن مناسبة لمن يفضل التاريخ والمتاحف والأحياء الليلية، فالقلب القديم مريح للمشي ويمكن توسيع الرحلة شرقًا نحو هوا تشينغ ومجمع ضريح الإمبراطور تشين."
    },
    highlights: {
      ja: ["古都遺跡", "博物館密度", "夜の雰囲気"],
      ko: ["고도 유적", "박물관 밀집", "야간 분위기"],
      es: ["Capital antigua", "Alta densidad de museos", "Ambiente nocturno"],
      fr: ["Ancienne capitale", "Forte densité de musées", "Ambiance nocturne"],
      ar: ["آثار العاصمة القديمة", "كثافة المتاحف", "أجواء ليلية"]
    },
    routes: {
      "old-city-history": {
        names: {
          ja: "旧城歴史ルート",
          ko: "구도심 역사 코스",
          es: "Ruta histórica del casco antiguo",
          fr: "Parcours historique de la vieille ville",
          ar: "المسار التاريخي للمدينة القديمة"
        },
        description: {
          ja: "旧城の中心を回りながら、歴史建築と街区の暮らしを同じ一日に組み込めるルートです。",
          ko: "구도심 핵심을 돌며 역사 건축과 거리 생활을 하루 안에 함께 담기 좋은 코스입니다.",
          es: "Una ruta por el casco antiguo que mezcla arquitectura histórica con vida de barrio en un mismo día.",
          fr: "Un itinéraire dans le vieux centre qui associe architecture historique et vie de quartier sur la même journée.",
          ar: "مسار يدور داخل قلب المدينة القديمة ويجمع بين العمارة التاريخية والحياة اليومية في الأحياء."
        }
      },
      "qujiang-night": {
        names: {
          ja: "曲江ナイトルート",
          ko: "취장 야간 코스",
          es: "Ruta nocturna de Qujiang",
          fr: "Parcours nocturne de Qujiang",
          ar: "المسار الليلي في تشوجيانغ"
        },
        description: {
          ja: "午後から夜にかけて回りやすく、博物館、塔、夜景スポットをなめらかにつなげます。",
          ko: "오후부터 밤까지 이어서 보기 좋고, 박물관과 탑, 야경 구역을 자연스럽게 연결합니다.",
          es: "Funciona mejor de la tarde a la noche y enlaza museos, pagodas y zonas iluminadas con bastante fluidez.",
          fr: "Le parcours fonctionne très bien de l'après-midi au soir, en reliant musées, pagodes et quartiers illuminés.",
          ar: "يناسب الفترة من بعد الظهر حتى الليل، ويربط المتاحف والأبراج والمناطق الليلية بسلاسة."
        }
      }
    },
    spots: {
      "秦始皇陵博物馆": { ja: "秦始皇帝陵博物院", ko: "진시황릉 박물관", es: "Museo del Mausoleo de Qin Shi Huang", fr: "Musée du mausolée de Qin Shi Huang", ar: "متحف ضريح الإمبراطور تشين شي هوانغ" },
      "华清宫": { ja: "華清宮", ko: "화청궁", es: "Palacio Huaqing", fr: "Palais Huaqing", ar: "قصر هوا تشينغ" },
      "大雁塔": { ja: "大雁塔", ko: "대안탑", es: "Gran Pagoda del Ganso Salvaje", fr: "Grande pagode de l'Oie sauvage", ar: "الباغودا الكبرى للإوزة البرية" },
      "小雁塔": { ja: "小雁塔", ko: "소안탑", es: "Pequeña Pagoda del Ganso Salvaje", fr: "Petite pagode de l'Oie sauvage", ar: "الباغودا الصغرى للإوزة البرية" },
      "陕西历史博物馆": { ja: "陝西歴史博物館", ko: "산시 역사박물관", es: "Museo de Historia de Shaanxi", fr: "Musée d'histoire du Shaanxi", ar: "متحف شنشي للتاريخ" },
      "大唐不夜城": { ja: "大唐不夜城", ko: "대당불야성", es: "Ciudad Tang que nunca duerme", fr: "Ville Tang qui ne dort jamais", ar: "مدينة تانغ التي لا تنام" },
      "钟鼓楼": { ja: "鐘鼓楼", ko: "종루와 고루", es: "Torres de la Campana y del Tambor", fr: "Tours de la Cloche et du Tambour", ar: "برجا الجرس والطبل" },
      "回民街": { ja: "回民街", ko: "회민가", es: "Barrio musulmán", fr: "Quartier musulman", ar: "الحي الإسلامي" },
      "大明宫": { ja: "大明宮国家遺址公園", ko: "대명궁 유적공원", es: "Parque patrimonial del Palacio Daming", fr: "Parc patrimonial du palais Daming", ar: "حديقة آثار قصر دامينغ" },
      "曲江池": { ja: "曲江池", ko: "취장지", es: "Estanque Qujiang", fr: "Étang de Qujiang", ar: "بحيرة تشوجيانغ" },
      "青龙寺": { ja: "青龍寺", ko: "청룡사", es: "Templo Qinglong", fr: "Temple Qinglong", ar: "معبد تشينغلونغ" },
      "碑林博物馆": { ja: "碑林博物館", ko: "비림박물관", es: "Museo del Bosque de Estelas", fr: "Musée de la forêt de stèles", ar: "متحف غابة الشواهد الحجرية" },
      "芙蓉园": { ja: "大唐芙蓉園", ko: "대당부용원", es: "Jardín Tang Paradise", fr: "Parc Tang Paradise", ar: "حديقة تانغ بارادايس" }
    }
  },
  chengdu: {
    names: { ja: "成都", ko: "청두", es: "Chengdú", fr: "Chengdu", ar: "تشنغدو" },
    subtitle: {
      ja: "成都は、パンダ、古跡、路地、周辺の山水を、ゆるやかで満ちた都市旅にまとめてくれます。",
      ko: "청두는 판다와 유적, 골목, 주변 산수 경관을 느긋하지만 충실한 도시 여행선으로 묶어 줍니다.",
      es: "Chengdú mezcla pandas, patrimonio, callejones y escapadas naturales en una ruta urbana relajada pero completa.",
      fr: "Chengdu assemble pandas, sites historiques, ruelles et paysages voisins dans un rythme urbain détendu mais dense.",
      ar: "تجمع تشنغدو بين الباندا والآثار والأزقة والطبيعة القريبة ضمن إيقاع سفر مريح لكنه غني."
    },
    summary: {
      ja: "成都は、ゆったりしたテンポの中で街の暮らしと周辺観光をまとめて楽しみたい国際友人に向いています。市内は歩いてつなぎやすく、郊外では都江堰や青城山まで広げられます。",
      ko: "청두는 느긋한 리듬 속에서 도시 생활과 주변 명소를 함께 보고 싶은 유학생에게 잘 맞습니다. 시내는 도보로 이어 보기 좋고, 외곽으로는 두장옌과 청청산까지 확장할 수 있습니다.",
      es: "Chengdú es una buena opción para estudiantes que quieren un ritmo más suave sin renunciar a ver tanto la ciudad como sus alrededores. El centro se enlaza bien y fuera de él se puede ampliar hacia Dujiangyan y Qingcheng.",
      fr: "Chengdu est un bon choix pour les étudiants qui veulent un rythme plus doux tout en couvrant à la fois la ville et ses extensions naturelles. Le centre s'enchaîne bien et les alentours ouvrent vers Dujiangyan et Qingcheng.",
      ar: "تعد تشنغدو خيارًا مناسبًا للطلاب الذين يريدون الجمع بين حياة المدينة والمعالم القريبة بإيقاع أهدأ، إذ يسهل ربط مواقع المركز بينما تمتد الرحلة إلى دوجيانغيان وتشينغتشنغشان."
    },
    highlights: {
      ja: ["パンダの街", "四川の街区", "山水への延長"],
      ko: ["판다 도시", "쓰촨 거리", "산수 확장 코스"],
      es: ["Ciudad del panda", "Calles de Sichuan", "Escapada a la montaña"],
      fr: ["Ville des pandas", "Rues du Sichuan", "Ouverture vers la montagne"],
      ar: ["مدينة الباندا", "أحياء سيتشوان", "امتداد نحو الجبال والطبيعة"]
    },
    routes: {
      "city-culture": {
        names: {
          ja: "市内文化ルート",
          ko: "도심 문화 코스",
          es: "Ruta cultural del centro",
          fr: "Parcours culturel du centre",
          ar: "المسار الثقافي في وسط المدينة"
        },
        description: {
          ja: "初めて成都中心部を回る人向けで、寺院、古跡、老街を歩きやすくつなげます。",
          ko: "처음 청두 도심을 둘러볼 때 좋은 코스로, 사찰과 유적, 옛거리를 자연스럽게 연결합니다.",
          es: "Pensada para una primera vuelta por el centro, enlazando templos, patrimonio y calles antiguas con un recorrido cómodo.",
          fr: "Pensé pour une première découverte du centre, en reliant temples, patrimoine et vieilles rues dans un parcours fluide.",
          ar: "مسار مناسب لأول جولة في وسط تشنغدو، يربط المعابد والآثار والشوارع القديمة بخط سهل."
        }
      },
      "creative-night": {
        names: {
          ja: "クリエイティブ夜遊びルート",
          ko: "감성 야간 코스",
          es: "Ruta creativa nocturna",
          fr: "Parcours créatif du soir",
          ar: "المسار الإبداعي الليلي"
        },
        description: {
          ja: "都市生活の気配を感じやすく、クリエイティブ地区、商業エリア、夜の空気をまとめて楽しめます。",
          ko: "도시 생활감이 강한 코스로, 창의구역과 상권, 밤 분위기를 함께 즐기기 좋습니다.",
          es: "Una ruta más urbana, centrada en distritos creativos, zonas comerciales y el ambiente de la noche.",
          fr: "Un parcours plus urbain, tourné vers les quartiers créatifs, les zones commerçantes et l'énergie du soir.",
          ar: "مسار حضري أكثر، يركز على المناطق الإبداعية والتجارية وأجواء الليل في المدينة."
        }
      }
    },
    spots: {
      "大熊猫基地": { ja: "成都ジャイアントパンダ繁育研究基地", ko: "청두 판다기지", es: "Base de pandas de Chengdú", fr: "Base des pandas de Chengdu", ar: "قاعدة باندا تشنغدو" },
      "武侯祠": { ja: "武侯祠", ko: "무후사", es: "Templo Wuhou", fr: "Temple Wuhou", ar: "معبد ووهоу" },
      "锦里古街": { ja: "錦里古街", ko: "진리 고가", es: "Calle antigua Jinli", fr: "Vieille rue de Jinli", ar: "شارع جينلي القديم" },
      "宽窄巷子": { ja: "寛窄巷子", ko: "관자이샹즈", es: "Callejones Kuanzhai", fr: "Ruelles Kuanzhai", ar: "أزقة كوانتشاي" },
      "春熙路": { ja: "春熙路", ko: "춘시루", es: "Chunxi Road", fr: "Chunxi Road", ar: "شارع تشونشي" },
      "杜甫草堂": { ja: "杜甫草堂", ko: "두보초당", es: "Cabaña de paja de Du Fu", fr: "Chaumière de Du Fu", ar: "كوخ دو فو" },
      "文殊院": { ja: "文殊院", ko: "문수원", es: "Monasterio Wenshu", fr: "Monastère Wenshu", ar: "دير ونشو" },
      "东郊记忆": { ja: "東郊記憶", ko: "둥자오 메모리", es: "Dongjiao Memory", fr: "Dongjiao Memory", ar: "دونغجياو ميموري" },
      "青羊宫": { ja: "青羊宮", ko: "청양궁", es: "Palacio Qingyang", fr: "Palais Qingyang", ar: "قصر تشينغيانغ" },
      "都江堰": { ja: "都江堰", ko: "두장옌", es: "Dujiangyan", fr: "Dujiangyan", ar: "دوجيانغيان" },
      "青城山": { ja: "青城山", ko: "청성산", es: "Monte Qingcheng", fr: "Mont Qingcheng", ar: "جبل تشينغتشنغ" }
    }
  },
  hangzhou: {
    names: { ja: "杭州", ko: "항저우", es: "Hangzhou", fr: "Hangzhou", ar: "هانغتشو" },
    subtitle: {
      ja: "杭州は西湖を軸に、寺院、古街、茶村、塔、湿地を軽やかな江南の流れでつないでいきます。",
      ko: "항저우는 서호를 중심으로 사찰과 옛거리, 차 마을, 탑, 습지를 가볍고 우아한 강남의 리듬으로 이어 줍니다.",
      es: "Hangzhou se despliega desde el Lago del Oeste hacia templos, calles antiguas, pueblos del té, pagodas y humedales con un ritmo suave de Jiangnan.",
      fr: "Hangzhou s'ouvre depuis le lac de l'Ouest vers temples, rues anciennes, villages de thé, pagodes et zones humides dans un rythme doux de Jiangnan.",
      ar: "تتحرك هانغتشو انطلاقًا من البحيرة الغربية نحو المعابد والشوارع القديمة وقرى الشاي والأبراج والأراضي الرطبة بإيقاع جيانغنان هادئ."
    },
    summary: {
      ja: "杭州は、湖景、ゆるやかなテンポ、江南らしい空気を好む旅行者に向いています。市内のつながりが自然で、外へ伸ばせば龍井村、良渚古城、千島湖まで広がります。",
      ko: "항저우는 호수 풍경과 느린 리듬, 강남 분위기를 좋아하는 여행자에게 잘 맞습니다. 시내 명소 연결이 자연스럽고, 바깥으로는 룽징촌과 량주고성, 첸다오호까지 넓힐 수 있습니다.",
      es: "Hangzhou es muy adecuada para viajeros que prefieren lagos, calma y un ambiente clásico de Jiangnan. Los lugares del centro se enlazan de forma natural y alrededor se puede ampliar hacia Longjing, Liangzhu y Qiandao.",
      fr: "Hangzhou convient aux voyageurs qui aiment les paysages de lac, le rythme lent et l'atmosphère de Jiangnan. Les sites du centre s'enchaînent facilement et l'on peut élargir vers Longjing, Liangzhu et Qiandao.",
      ar: "تناسب هانغتشو من يحب مشاهد البحيرات والإيقاع الهادئ وأجواء جيانغنان، إذ ترتبط معالمها داخل المدينة بسهولة ويمكن توسيع الرحلة نحو لونغجينغ وليانغتشو وبحيرة تشيانداو."
    },
    highlights: {
      ja: ["西湖主線", "寺院と茶村", "湿地と古城"],
      ko: ["서호 핵심선", "사찰과 차 마을", "습지와 고성"],
      es: ["Eje del Lago del Oeste", "Templos y aldeas del té", "Humedales y ciudad antigua"],
      fr: ["Cœur du lac de l'Ouest", "Temples et villages de thé", "Zones humides et cité ancienne"],
      ar: ["المسار الرئيسي للبحيرة الغربية", "المعابد وقرى الشاي", "الأراضي الرطبة والمدينة القديمة"]
    },
    routes: {
      "west-lake-classic": {
        names: {
          ja: "西湖クラシック",
          ko: "서호 클래식 코스",
          es: "Ruta clásica del Lago del Oeste",
          fr: "Parcours classique du lac de l'Ouest",
          ar: "المسار الكلاسيكي للبحيرة الغربية"
        },
        description: {
          ja: "初めての杭州に向いた、西湖主線と周辺の代表スポットを押さえるルートです。",
          ko: "처음 항저우를 볼 때 좋은 코스로, 서호 핵심선과 주변 대표 명소를 함께 담습니다.",
          es: "Una ruta ideal para una primera visita a Hangzhou, centrada en el Lago del Oeste y sus principales anclas.",
          fr: "Un itinéraire idéal pour une première visite de Hangzhou, centré sur le lac de l'Ouest et ses sites majeurs.",
          ar: "مسار مناسب للزيارة الأولى إلى هانغتشو، يركز على البحيرة الغربية وأهم النقاط المحيطة بها."
        }
      },
      "temple-tea": {
        names: {
          ja: "寺院と茶村ルート",
          ko: "사찰과 차 마을 코스",
          es: "Ruta de templos y té",
          fr: "Parcours temples et thé",
          ar: "مسار المعابد وقرى الشاي"
        },
        description: {
          ja: "寺院の空気、茶畑の景色、湿地の緑を一緒に味わえる、杭州らしい穏やかなルートです。",
          ko: "사찰의 분위기와 차밭 풍경, 습지의 녹음을 함께 담은 항저우다운 차분한 코스입니다.",
          es: "Una ruta más serena, centrada en templos, paisajes de té y los bordes verdes de la ciudad.",
          fr: "Un parcours plus paisible, centré sur les temples, les paysages de thé et les lisières vertes de la ville.",
          ar: "مسار أكثر هدوءًا يركز على أجواء المعابد ومشاهد الشاي والأطراف الخضراء للمدينة."
        }
      }
    },
    spots: {
      "西湖": { ja: "西湖", ko: "서호", es: "Lago del Oeste", fr: "Lac de l'Ouest", ar: "البحيرة الغربية" },
      "灵隐寺": { ja: "霊隠寺", ko: "영은사", es: "Templo Lingyin", fr: "Temple Lingyin", ar: "معبد لينغيين" },
      "雷峰塔": { ja: "雷峰塔", ko: "뇌봉탑", es: "Pagoda Leifeng", fr: "Pagode Leifeng", ar: "برج ليفنغ" },
      "龙井村": { ja: "龍井村", ko: "룽징촌", es: "Pueblo Longjing", fr: "Village de Longjing", ar: "قرية لونغجينغ" },
      "西溪国家湿地公园": { ja: "西渓国家湿地公園", ko: "시시 국가습지공원", es: "Parque nacional de humedales de Xixi", fr: "Parc national des zones humides de Xixi", ar: "حديقة شيشي الوطنية للأراضي الرطبة" },
      "千岛湖": { ja: "千島湖", ko: "첸다오호", es: "Lago Qiandao", fr: "Lac Qiandao", ar: "بحيرة تشيانداو" },
      "苏堤": { ja: "蘇堤", ko: "쑤디", es: "Calzada Su", fr: "Chaussée de Su", ar: "جسر سو" },
      "岳王庙": { ja: "岳王廟", ko: "악왕묘", es: "Templo de Yue Fei", fr: "Temple de Yue Fei", ar: "معبد يويه في" },
      "六和塔": { ja: "六和塔", ko: "육화탑", es: "Pagoda Liuhe", fr: "Pagode Liuhe", ar: "برج ليوخه" },
      "南宋御街": { ja: "南宋御街", ko: "남송어가", es: "Calle imperial de la dinastía Song del Sur", fr: "Rue impériale des Song du Sud", ar: "الشارع الإمبراطوري لأسرة سونغ الجنوبية" },
      "良渚古城": { ja: "良渚古城", ko: "량주 고성", es: "Ciudad antigua de Liangzhu", fr: "Cité ancienne de Liangzhu", ar: "المدينة القديمة في ليانغتشو" }
    }
  }
};

const state = {
  language: "en",
  activeCityId: "beijing",
  activeSpotId: null,
  activeImageIndex: 0,
  activeRouteId: "dynamic",
  activeAskSpotId: null,
  aiMessages: [],
  aiBusy: false
};

const SCRIPT_AI_CONFIG = Object.freeze({
  // Set these values manually before running deployment/demo.
  endpoint: "https://api.openai.com/v1/chat/completions",
  model: "gpt-4.1-mini",
  apiKey: ""
});

const elements = {
  body: document.body,
  statCityCount: document.querySelector("#stat-city-count"),
  statSpotCount: document.querySelector("#stat-spot-count"),
  statLanguageCount: document.querySelector("#stat-language-count"),
  heroCityName: document.querySelector("#hero-city-name"),
  heroCardTitle: document.querySelector("#hero-card-title"),
  heroCardSummary: document.querySelector("#hero-card-summary"),
  heroCardIntro: document.querySelector("#hero-card-intro"),
  heroHighlightGrid: document.querySelector("#hero-highlight-grid"),
  cityChipGrid: document.querySelector("#city-chip-grid"),
  cityPanelCount: document.querySelector("#city-panel-count"),
  activeCityTitle: document.querySelector("#active-city-title"),
  activeCitySummary: document.querySelector("#active-city-summary"),
  activeCityFacts: document.querySelector("#active-city-facts"),
  workspaceCityTitle: document.querySelector("#workspace-city-title"),
  workspaceCityCopy: document.querySelector("#workspace-city-copy"),
  cityMapTitle: document.querySelector("#city-map-title"),
  focusSpotName: document.querySelector("#focus-spot-name"),
  focusSpotSummary: document.querySelector("#focus-spot-summary"),
  focusSpotMeta: document.querySelector("#focus-spot-meta"),
  focusTicketLink: document.querySelector("#focus-ticket-link"),
  focusMainImage: document.querySelector("#focus-main-image"),
  focusThumbnailGrid: document.querySelector("#focus-thumbnail-grid"),
  spotQuickLinks: document.querySelector("#spot-quick-links"),
  routeSwitcher: document.querySelector("#route-switcher"),
  routeDisplay: document.querySelector("#route-display"),
  spotGrid: document.querySelector("#spot-grid"),
  spotSectionCopy: document.querySelector("#spot-section-copy"),
  foodGrid: document.querySelector("#food-grid"),
  aiContextLine: document.querySelector("#ai-context-line"),
  aiMessages: document.querySelector("#ai-messages"),
  aiInput: document.querySelector("#ai-input"),
  sendAiMessage: document.querySelector("#send-ai-message"),
  openAiAssistant: document.querySelector("#open-ai-assistant")
};

const cityMap = L.map("city-map", { zoomControl: false }).setView([39.9305, 116.3568], 10.6);
const chinaMap = L.map("china-map", { zoomControl: false }).setView([35.6, 104.4], 4.2);

const tileConfigs = {
  zh: {
    key: "zh",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  },
  ja: {
    key: "ja",
    url: "https://tile.openstreetmap.jp/styles/maptiler-basic-ja/{z}/{x}/{y}.png",
    options: {
      maxZoom: 18,
      attribution:
        '&copy; OpenStreetMap contributors &copy; <a href="https://tile.openstreetmap.jp/">OpenStreetMap Japan</a>'
    }
  },
  intlEn: {
    key: "intl-en",
    url: "https://tile.openstreetmap.jp/styles/osm-bright-en/{z}/{x}/{y}.png",
    options: {
      maxZoom: 18,
      attribution:
        '&copy; OpenStreetMap contributors &copy; <a href="https://tile.openstreetmap.jp/">OpenStreetMap Japan</a>'
    }
  }
};

let cityBaseLayer = null;
let chinaBaseLayer = null;
let activeTileKey = null;

const chinaMarkers = new Map();
let citySpotMarkers = [];
let activeRouteLine = null;
const aiRuntime = {
  settings: { ...SCRIPT_AI_CONFIG },
  introTranslations: createEmptyIntroTranslationMap(),
  translationPending: {},
  translationFailed: {}
};

const cityFolderMap = {
  beijing: "北京",
  shanghai: "上海",
  xian: "西安",
  chengdu: "成都",
  hangzhou: "杭州"
};

const spotFolderAlias = {
  beijing: {
    "故宫博物院": "故宫"
  }
};

const introSupportedLanguages = ["zh", "en", "ja", "ko", "es", "fr", "ar"];

const externalContent = {
  cityIntro: {},
  cityIntroByLanguage: {},
  spotIntro: {},
  spotIntroByLanguage: {},
  spotTicket: {}
};

const cityFoodPicks = {
  beijing: {
    breakfast: {
      zh: "豆汁与焦圈、包子店、胡同早餐铺",
      en: "Fermented mung-bean drink, crispy jiaoqian rings, baozi shops, and hutong breakfast stands."
    },
    dinner: {
      zh: "北京烤鸭、铜锅涮肉、京味家常菜",
      en: "Peking duck, copper-pot sliced mutton, and classic Beijing home-style dishes."
    },
    snack: {
      zh: "南锣鼓巷与什刹海周边小吃街",
      en: "Evening snack lanes around Nanluoguxiang and Shichahai."
    }
  },
  shanghai: {
    breakfast: {
      zh: "生煎、小笼、葱油拌面",
      en: "Shengjian buns, xiaolongbao, and scallion-oil noodles."
    },
    dinner: {
      zh: "本帮菜、黄鱼面、海派融合餐厅",
      en: "Benbang classics, yellow-croaker noodles, and modern Shanghainese fusion dining."
    },
    snack: {
      zh: "城隍庙与南京东路周边小吃点",
      en: "Quick local snack stops near City God Temple and East Nanjing Road."
    }
  },
  xian: {
    breakfast: {
      zh: "肉夹馍、胡辣汤、甑糕",
      en: "Roujiamo, hulatang pepper soup, and steamed zenggao rice cake."
    },
    dinner: {
      zh: "泡馍、葫芦鸡、关中风味馆",
      en: "Yangrou paomo, hulu chicken, and Guanzhong-style local kitchens."
    },
    snack: {
      zh: "回民街夜间小吃体验",
      en: "A night snack walk through the Muslim Quarter."
    }
  },
  chengdu: {
    breakfast: {
      zh: "担担面、甜水面、钟水饺",
      en: "Dandan noodles, sweet-water noodles, and Zhong dumplings."
    },
    dinner: {
      zh: "川式火锅、串串、川菜馆",
      en: "Sichuan hotpot, chuanchuan skewers, and neighborhood Sichuan restaurants."
    },
    snack: {
      zh: "锦里、春熙路和玉林附近街头小吃",
      en: "Street food around Jinli, Chunxi Road, and Yulin."
    }
  },
  hangzhou: {
    breakfast: {
      zh: "片儿川、葱包桧、西湖藕粉",
      en: "Pian’erchuan noodles, congbaohui wraps, and West Lake lotus-root starch drinks."
    },
    dinner: {
      zh: "杭帮菜、龙井虾仁、东坡肉",
      en: "Hangzhou cuisine, Longjing tea shrimp, and Dongpo braised pork."
    },
    snack: {
      zh: "河坊街与南宋御街轻松夜逛",
      en: "A relaxed evening snack walk through Hefang Street and Southern Song Imperial Street."
    }
  }
};

const foodLineTranslations = {
  "豆汁与焦圈、包子店、胡同早餐铺": {
    ja: "豆汁と焦圈、包子店、胡同の朝食屋台",
    ko: "더우즈와 자오취안, 만두집, 후퉁 아침 노점",
    es: "Douzhi con rosquillas jiaoqian, tiendas de baozi y puestos de desayuno en los hutongs",
    fr: "Douzhi et beignets jiaoqian, boutiques de baozi et échoppes de petit-déjeuner dans les hutongs",
    ar: "حليب الفاصوليا المخمر مع خبز جياو تشيوان، ومتاجر الباوزي وأكشاك إفطار الأزقة التقليدية"
  },
  "北京烤鸭、铜锅涮肉、京味家常菜": {
    ja: "北京ダック、銅鍋しゃぶ肉、北京家庭料理",
    ko: "베이징 카오야, 동솥 샤브고기, 베이징 가정식",
    es: "Pato laqueado de Pekín, cordero en olla de cobre y cocina casera pekinesa",
    fr: "Canard laqué de Pékin, fondue en marmite de cuivre et cuisine familiale pékinoise",
    ar: "بط بكيني مشوي، ولحم مسلوق في قدر نحاسي، وأطباق منزلية بطابع بكيني"
  },
  "南锣鼓巷与什刹海周边小吃街": {
    ja: "南鑼鼓巷と什刹海周辺の屋台ストリート",
    ko: "난뤄구샹과 스차하이 주변 길거리 음식 거리",
    es: "Calles de comida alrededor de Nanluoguxiang y Shichahai",
    fr: "Rues gourmandes autour de Nanluoguxiang et de Shichahai",
    ar: "شوارع الوجبات الخفيفة حول نانلووقوشيانغ وشيچاهاي"
  },
  "生煎、小笼、葱油拌面": {
    ja: "生煎包、小籠包、ネギ油和え麺",
    ko: "생젠바오, 샤오롱바오, 파기름 비빔면",
    es: "Shengjian, xiaolongbao y fideos con aceite de cebolleta",
    fr: "Shengjian, xiaolongbao et nouilles à l’huile de ciboule",
    ar: "شنغجيان، شياولونغباو، ونودلز بزيت البصل الأخضر"
  },
  "本帮菜、黄鱼面、海派融合餐厅": {
    ja: "上海本帮料理、黄魚麺、海派フュージョンレストラン",
    ko: "상하이 본방요리, 황어면, 하이파이 퓨전 레스토랑",
    es: "Cocina benbang, fideos de corvina amarilla y restaurantes fusión de estilo shanghainés",
    fr: "Cuisine benbang, nouilles au poisson jaune et restaurants fusion de style shanghaien",
    ar: "أطباق بنبانغ المحلية، ونودلز السمك الأصفر، ومطاعم دمج بطابع شنغهاي"
  },
  "城隍庙与南京东路周边小吃点": {
    ja: "城隍廟と南京東路周辺の軽食スポット",
    ko: "청황먀오와 난징동루 주변 간식 명소",
    es: "Puestos de snacks cerca del Templo del Dios de la Ciudad y Nanjing East Road",
    fr: "Points de snacks autour du Temple du Dieu de la Ville et de Nanjing Est",
    ar: "نقاط الوجبات الخفيفة قرب معبد إله المدينة وشارع نانجينغ الشرقي"
  },
  "肉夹馍、胡辣汤、甑糕": {
    ja: "肉夾馍、胡辣湯、甑糕",
    ko: "러우자모, 후라탕, 쩡가오",
    es: "Roujiamo, sopa picante hulatang y zenggao",
    fr: "Roujiamo, soupe épicée hulatang et zenggao",
    ar: "روجيامو، وحساء هولاتانغ الحار، وزنغغاو"
  },
  "泡馍、葫芦鸡、关中风味馆": {
    ja: "泡馍、ひょうたん鶏、関中料理店",
    ko: "파오모, 후루지, 관중식 풍미 식당",
    es: "Paomo, pollo hulu y restaurantes de sabor Guanzhong",
    fr: "Paomo, poulet hulu et restaurants aux saveurs du Guanzhong",
    ar: "باومو، ودجاج هولو، ومطاعم نكهات قوانتشونغ"
  },
  "回民街夜间小吃体验": {
    ja: "回民街の夜食散策",
    ko: "후이민제 야간 길거리 음식 체험",
    es: "Experiencia nocturna de snacks en la Calle Musulmana",
    fr: "Expérience de snacks de nuit dans le quartier musulman",
    ar: "تجربة الوجبات الليلية في شارع المسلمين"
  },
  "担担面、甜水面、钟水饺": {
    ja: "担々麺、甜水麺、鐘水餃",
    ko: "단단면, 톈수이면, 중수이자오",
    es: "Dan dan mian, fideos de agua dulce y dumplings Zhongshui",
    fr: "Dan dan mian, nouilles sucrées et raviolis Zhongshui",
    ar: "دان دان ميان، ونودلز الماء الحلو، وزلابية تشونغشوي"
  },
  "川式火锅、串串、川菜馆": {
    ja: "四川火鍋、串串、四川料理店",
    ko: "쓰촨식 훠궈, 촨촨, 쓰촨 요리집",
    es: "Hotpot de Sichuan, brochetas chuanchuan y restaurantes sichuaneses",
    fr: "Fondue du Sichuan, brochettes chuanchuan et restaurants du Sichuan",
    ar: "هوت بوت سيتشوان، وأسياخ تشوانتشوان، ومطاعم المطبخ السيتشواني"
  },
  "锦里、春熙路和玉林附近街头小吃": {
    ja: "錦里・春熙路・玉林周辺のストリートフード",
    ko: "진리·춘시루·위린 인근 길거리 음식",
    es: "Comida callejera cerca de Jinli, Chunxi Road y Yulin",
    fr: "Street food autour de Jinli, Chunxi Road et Yulin",
    ar: "مأكولات الشارع قرب جينلي وتشونشي رود ويولين"
  },
  "片儿川、葱包桧、西湖藕粉": {
    ja: "片児川、葱包桧、西湖蓮根デンプン",
    ko: "피안얼촨, 충바오후이, 시후 연근전분 음료",
    es: "Pian’erchuan, congbaohui y fécula de loto de West Lake",
    fr: "Pian’erchuan, congbaohui et boisson de fécule de lotus du lac de l’Ouest",
    ar: "بيان إرتشوان، ولفائف كونغباوهوي، ومشروب نشا جذر اللوتس من بحيرة الغرب"
  },
  "杭帮菜、龙井虾仁、东坡肉": {
    ja: "杭州料理、龍井蝦仁、東坡肉",
    ko: "항저우 요리, 룽징 새우, 둥포러우",
    es: "Cocina de Hangzhou, camarones al Longjing y cerdo Dongpo",
    fr: "Cuisine de Hangzhou, crevettes au Longjing et porc Dongpo",
    ar: "مطبخ هانغتشو، وروبيان لونغجينغ، ولحم دونغبو"
  },
  "河坊街与南宋御街轻松夜逛": {
    ja: "河坊街と南宋御街の気軽な夜散歩",
    ko: "허팡제와 남송어가의 가벼운 야간 산책",
    es: "Paseo nocturno relajado por Hefang Street y Southern Song Imperial Street",
    fr: "Balade nocturne détendue entre Hefang Street et la rue impériale des Song du Sud",
    ar: "جولة ليلية خفيفة في شارع هيفانغ والشارع الإمبراطوري لأسرة سونغ الجنوبية"
  }
};

function currentUi() {
  return uiContent[state.language];
}

function currentThemeText(theme) {
  return themeText[state.language]?.[theme] || themeText.en[theme] || theme;
}

function localize(record) {
  if (typeof record === "string") return record;
  return record?.[state.language] || record?.en || record?.zh || "";
}

function localizeForLanguage(record, language) {
  if (typeof record === "string") return record;
  return record?.[language] || record?.en || record?.zh || "";
}

function localizeBestTime(bestTime) {
  return bestTimeText[state.language]?.[bestTime] || bestTime;
}

function uiText(key) {
  return currentUi()[key] || uiContent.en[key] || "";
}

function localizeFoodLine(record) {
  if (typeof record === "string") return record;
  const direct = record?.[state.language];
  if (direct) return direct;

  const zh = record?.zh;
  if (zh) {
    const translated = foodLineTranslations[zh]?.[state.language];
    if (translated) return translated;
  }
  return record?.en || zh || "";
}

function normalizeTicketNote(note) {
  return (note || "").replace(/\s+/g, "").trim();
}

function isFreeVisitNote(note) {
  const normalized = normalizeTicketNote(note);
  if (!normalized) return false;
  const keywords = [
    "此景点免费参观",
    "免费参观",
    "免費參觀",
    "freeentry",
    "freevisit",
    "freeadmission",
    "entrada gratuita",
    "visitegratuite",
    "無料",
    "무료",
    "مجانًا",
    "مجاني"
  ];
  const compact = normalized.toLowerCase();
  return keywords.some((item) => compact.includes(item.toLowerCase()));
}

function localizeTicketNote(note) {
  if (!note) return note;
  if (isFreeVisitNote(note)) return uiText("freeVisitNote");
  return note;
}

function mapTileMode() {
  if (state.language === "zh") return tileConfigs.zh;
  if (state.language === "ja") return tileConfigs.ja;
  return tileConfigs.intlEn;
}

function applyMapTileLanguage() {
  const config = mapTileMode();
  if (activeTileKey === config.key) return;

  if (cityBaseLayer) cityMap.removeLayer(cityBaseLayer);
  if (chinaBaseLayer) chinaMap.removeLayer(chinaBaseLayer);

  cityBaseLayer = L.tileLayer(config.url, config.options).addTo(cityMap);
  chinaBaseLayer = L.tileLayer(config.url, config.options).addTo(chinaMap);
  activeTileKey = config.key;
}

function storageKey(name) {
  return `hellochina.${name}`;
}

function createEmptyIntroTranslationMap() {
  return Object.fromEntries(
    Object.keys(uiContent)
      .filter((language) => language !== "zh")
      .map((language) => [language, { city: {}, spot: {} }])
  );
}

function normalizeIntroTranslationMap(rawValue) {
  const normalized = createEmptyIntroTranslationMap();
  if (!rawValue || typeof rawValue !== "object") return normalized;

  Object.keys(normalized).forEach((language) => {
    const langEntry = rawValue[language];
    if (!langEntry || typeof langEntry !== "object") return;
    normalized[language].city = { ...(langEntry.city || {}) };
    normalized[language].spot = { ...(langEntry.spot || {}) };
  });
  return normalized;
}

function loadIntroTranslationsFromStorage() {
  try {
    const raw = localStorage.getItem(storageKey("introTranslations.v1"));
    if (!raw) return;
    aiRuntime.introTranslations = normalizeIntroTranslationMap(JSON.parse(raw));
  } catch (error) {
    aiRuntime.introTranslations = createEmptyIntroTranslationMap();
  }
}

function persistIntroTranslations() {
  try {
    localStorage.setItem(storageKey("introTranslations.v1"), JSON.stringify(aiRuntime.introTranslations));
  } catch (error) {
    // Ignore quota/storage failures and keep runtime cache in memory.
  }
}

function isAiConfigured() {
  return Boolean(
    aiRuntime.settings.endpoint?.trim() &&
      aiRuntime.settings.model?.trim() &&
      aiRuntime.settings.apiKey?.trim()
  );
}

function translationLanguageName(language) {
  const langNameMap = {
    en: "English",
    ja: "Japanese",
    ko: "Korean",
    es: "Spanish",
    fr: "French",
    ar: "Arabic"
  };
  return langNameMap[language] || "";
}

async function translateFromZh(zhText, language) {
  if (!isAiConfigured() || !zhText) return "";

  const target = translationLanguageName(language);
  if (!target) return "";

  try {
    const response = await fetch(aiRuntime.settings.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${aiRuntime.settings.apiKey}`
      },
      body: JSON.stringify({
        model: aiRuntime.settings.model,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content:
              "You are a senior travel translator. Translate Simplified Chinese into the target language accurately and naturally. Keep all facts, named entities, sentence boundaries, and paragraph structure aligned with the source text. Do not summarize or omit details. Return translation only."
          },
          {
            role: "user",
            content: `Target language: ${target}\n\nSource text:\n${zhText}`
          }
        ]
      })
    });
    if (!response.ok) return "";
    const payload = await response.json();
    return (payload?.choices?.[0]?.message?.content || "").trim();
  } catch (error) {
    return "";
  }
}

function translationPendingKey(scope, rawKey, language) {
  return `${language}:${scope}:${rawKey}`;
}

function getIntroTranslation(scope, rawKey, language = state.language) {
  if (language === "zh") return "";
  return aiRuntime.introTranslations?.[language]?.[scope]?.[rawKey] || "";
}

function setIntroTranslation(scope, rawKey, text, language = state.language) {
  if (language === "zh" || !text) return;
  if (!aiRuntime.introTranslations[language]) {
    aiRuntime.introTranslations[language] = { city: {}, spot: {} };
  }
  aiRuntime.introTranslations[language][scope][rawKey] = text;
  persistIntroTranslations();
}

function requestTranslation(scope, rawKey, zhText) {
  if (state.language === "zh" || !zhText || !isAiConfigured()) return;
  const targetLanguage = state.language;
  if (getIntroTranslation(scope, rawKey, targetLanguage)) return;

  const pendingKey = translationPendingKey(scope, rawKey, targetLanguage);
  if (aiRuntime.translationFailed[pendingKey]) return;
  if (aiRuntime.translationPending[pendingKey]) return;

  aiRuntime.translationPending[pendingKey] = true;
  translateFromZh(zhText, targetLanguage)
    .then((translated) => {
      if (translated) {
        setIntroTranslation(scope, rawKey, translated, targetLanguage);
      } else {
        aiRuntime.translationFailed[pendingKey] = true;
      }
    })
    .finally(() => {
      delete aiRuntime.translationPending[pendingKey];
      renderAll();
    });
}

function spotFolderName(cityId, spotZh) {
  return spotFolderAlias[cityId]?.[spotZh] || spotZh;
}

async function fetchTextFile(path) {
  try {
    const response = await fetch(encodeAssetPath(path));
    if (!response.ok) return "";
    return (await response.text()).trim();
  } catch (error) {
    return "";
  }
}

function introPathWithLanguage(basePath, language) {
  if (language === "zh") return basePath;
  return basePath.replace(/\.txt$/i, `.${language}.txt`);
}

async function loadExternalContent() {
  const jobs = [];
  cities.forEach((city) => {
    const cityFolder = cityFolderMap[city.id];
    if (!cityFolder) return;
    externalContent.cityIntroByLanguage[city.id] = {};

    const cityIntroBasePath = `景点/${cityFolder}/城市介绍/城市介绍.txt`;
    introSupportedLanguages.forEach((language) => {
      jobs.push(
        fetchTextFile(introPathWithLanguage(cityIntroBasePath, language)).then((text) => {
          if (!text) return;
          externalContent.cityIntroByLanguage[city.id][language] = text;
          if (language === "zh") {
            externalContent.cityIntro[city.id] = text;
          }
        })
      );
    });

    city.spots.forEach((spot) => {
      const spotZh = spot.names.zh;
      const folder = spotFolderName(city.id, spotZh);
      const introBasePath = `景点/${cityFolder}/${folder}/介绍.txt`;
      const ticketPathA = `景点/${cityFolder}/${folder}/网址.txt`;
      const ticketPathB = `景点/${cityFolder}/${folder}/网站.txt`;
      const spotKey = `${city.id}:${spotZh}`;
      externalContent.spotIntroByLanguage[spotKey] = {};

      introSupportedLanguages.forEach((language) => {
        jobs.push(
          fetchTextFile(introPathWithLanguage(introBasePath, language)).then((text) => {
            if (!text) return;
            externalContent.spotIntroByLanguage[spotKey][language] = text;
            if (language === "zh") {
              externalContent.spotIntro[spotKey] = text;
            }
          })
        );
      });
      jobs.push(
        fetchTextFile(ticketPathA).then(async (text) => {
          if (text) {
            externalContent.spotTicket[spotKey] = text;
            return;
          }
          const backup = await fetchTextFile(ticketPathB);
          externalContent.spotTicket[spotKey] = backup;
        })
      );
    });
  });

  await Promise.all(jobs);
}

function spotContentKey(city, spot) {
  return `${city.id}:${spot.names.zh}`;
}

function spotNarrative(spot, city) {
  const key = spotContentKey(city, spot);
  const localizedIntro = externalContent.spotIntroByLanguage[key]?.[state.language];
  if (localizedIntro) return localizedIntro;

  const zhIntro = externalContent.spotIntro[key] || externalContent.spotIntroByLanguage[key]?.zh;
  if (state.language === "zh" && zhIntro) {
    return zhIntro;
  }
  if (zhIntro && state.language !== "zh") {
    const translated = getIntroTranslation("spot", key);
    if (translated) return translated;
    requestTranslation("spot", key, zhIntro);
    return zhIntro;
  }
  return buildSpotSummary(spot, city);
}

function cityNarrative(city) {
  const localizedIntro = externalContent.cityIntroByLanguage[city.id]?.[state.language];
  if (localizedIntro) return localizedIntro;

  const zhIntro = externalContent.cityIntro[city.id] || externalContent.cityIntroByLanguage[city.id]?.zh;
  if (state.language === "zh" && zhIntro) {
    return zhIntro;
  }
  if (zhIntro && state.language !== "zh") {
    const translated = getIntroTranslation("city", city.id);
    if (translated) return translated;
    requestTranslation("city", city.id, zhIntro);
    return zhIntro;
  }
  return localize(city.summary);
}

function conciseText(text, maxLength) {
  const normalized = (text || "").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  if (normalized.length <= maxLength) return normalized;

  const sentenceMatch = normalized.match(/^(.+?[。！？.!?])/);
  if (sentenceMatch && sentenceMatch[1].length <= maxLength) {
    return sentenceMatch[1];
  }
  return `${normalized.slice(0, maxLength).trimEnd()}…`;
}

function cityWorkspaceNarrative(city) {
  const preferred = localize(city.summary) || cityNarrative(city);
  const maxLength = state.language === "zh" ? 54 : 120;
  return conciseText(preferred, maxLength);
}

function prefetchActiveCityTranslations() {
  if (state.language === "zh" || !isAiConfigured()) return;
  const city = activeCity();

  const cityIntro = externalContent.cityIntro[city.id];
  if (cityIntro && !externalContent.cityIntroByLanguage[city.id]?.[state.language]) {
    requestTranslation("city", city.id, cityIntro);
  }

  city.spots.forEach((spot) => {
    const key = spotContentKey(city, spot);
    if (externalContent.spotIntroByLanguage[key]?.[state.language]) return;
    const intro = externalContent.spotIntro[key];
    if (intro) {
      requestTranslation("spot", key, intro);
    }
  });
}

function ticketInfoForSpot(spot, city) {
  const raw = (externalContent.spotTicket[spotContentKey(city, spot)] || "").trim();
  if (!raw) return { type: "none", value: "" };
  if (/^https?:\/\//i.test(raw)) return { type: "url", value: raw };
  return { type: "note", value: raw };
}

function ticketSnippet(spot, city) {
  const info = ticketInfoForSpot(spot, city);
  if (info.type === "url") {
    return `<a class="fact-pill" href="${info.value}" target="_blank" rel="noopener noreferrer">${uiText("ticketLink")}</a>`;
  }
  if (info.type === "note") {
    return `<span class="fact-pill">${localizeTicketNote(info.value)}</span>`;
  }
  return "";
}

function setTicketLink(spot, city) {
  const ticket = ticketInfoForSpot(spot, city);
  const node = elements.focusTicketLink;
  if (ticket.type === "url") {
    node.href = ticket.value;
    node.textContent = uiText("ticketLink");
    node.classList.remove("is-note");
    node.removeAttribute("aria-disabled");
  } else if (ticket.type === "note") {
    node.href = "#";
    node.textContent = localizeTicketNote(ticket.value);
    node.classList.add("is-note");
    node.setAttribute("aria-disabled", "true");
  } else {
    node.href = "#";
    node.textContent = uiText("ticketLink");
    node.classList.add("is-note");
    node.setAttribute("aria-disabled", "true");
  }
}

function aiSeedMessage(language) {
  const seedMessage = {
    zh: "你好，我是你的景点地陪助手。选中景点后，你可以问我交通、时段、路线与注意事项。",
    en: "Hi, I am your attraction guide assistant. Ask me about transport, timing, route planning, and practical details.",
    ja: "こんにちは、観光地ガイドAIです。選んだ景点について、交通・時間配分・回り方・注意点を気軽に聞いてください。",
    ko: "안녕하세요, 명소 가이드 AI입니다. 선택한 명소 기준으로 교통, 시간대, 동선, 유의사항을 물어보세요.",
    es: "Hola, soy tu asistente de guía turística. Puedes preguntar por transporte, horarios, rutas y consejos prácticos del lugar seleccionado.",
    fr: "Bonjour, je suis votre assistant guide. Vous pouvez demander transport, horaires, itinéraires et conseils pratiques sur le site choisi.",
    ar: "مرحبًا، أنا مساعدك السياحي. يمكنك السؤال عن المواصلات والتوقيت وخط السير والنصائح العملية للمعلم الذي اخترته."
  };
  return seedMessage[language] || seedMessage.en;
}

function ensureAiSeedMessage() {
  if (state.aiMessages.length > 0) return;
  state.aiMessages.push({
    role: "assistant",
    content: aiSeedMessage(state.language),
    meta: "seed"
  });
}

function syncAiSeedMessageLanguage() {
  if (state.aiMessages.length !== 1) return;
  const [first] = state.aiMessages;
  if (first.role !== "assistant" || first.meta !== "seed") return;
  first.content = aiSeedMessage(state.language);
}

function aiContextSpot() {
  const city = activeCity();
  const spot =
    city.spots.find((item) => item.id === state.activeAskSpotId) ||
    city.spots.find((item) => item.id === state.activeSpotId) ||
    city.spots[0];
  return { city, spot };
}

function renderAiMessages() {
  elements.aiMessages.innerHTML = state.aiMessages
    .map((message) => {
      const klass = message.role === "user" ? "ai-msg ai-msg-user" : "ai-msg ai-msg-assistant";
      return `<article class="${klass}">${message.content}</article>`;
    })
    .join("");
  elements.aiMessages.scrollTop = elements.aiMessages.scrollHeight;
}

function renderAiContext() {
  const { city, spot } = aiContextSpot();
  elements.aiContextLine.textContent = `${uiText("aiContextPrefix")}: ${localize(city.names)} · ${localize(spot.names)}`;
}

function openAiAssistantForSpot(spotId) {
  state.activeAskSpotId = spotId;
  ensureAiSeedMessage();
  renderAiContext();
  renderAiMessages();
  document.querySelector("#ai-assistant").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function sendAiMessage() {
  if (state.aiBusy) return;
  const question = elements.aiInput.value.trim();
  if (!question) return;

  if (!isAiConfigured()) {
    state.aiMessages.push({ role: "assistant", content: uiText("aiConfigMissing") });
    renderAiMessages();
    return;
  }

  const { city, spot } = aiContextSpot();
  const ticket = ticketInfoForSpot(spot, city);
  const contextText = [
    `Attraction: ${spot.names.zh} in ${city.names.zh}`,
    `Localized city name: ${localize(city.names)}`,
    `Localized spot name: ${localize(spot.names)}`,
    `Spot intro: ${externalContent.spotIntro[spotContentKey(city, spot)] || ""}`,
    `City intro: ${externalContent.cityIntro[city.id] || ""}`,
    `Ticket info: ${ticket.value || "N/A"}`
  ].join("\n");

  state.aiMessages.push({ role: "user", content: question });
  state.aiMessages.push({ role: "assistant", content: uiText("aiThinking") });
  elements.aiInput.value = "";
  state.aiBusy = true;
  renderAiMessages();

  try {
    const response = await fetch(aiRuntime.settings.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${aiRuntime.settings.apiKey}`
      },
      body: JSON.stringify({
        model: aiRuntime.settings.model,
        messages: [
          {
            role: "system",
            content:
              "You are a practical China travel guide. Use concise, concrete tips. If information is uncertain, say so clearly."
          },
          {
            role: "system",
            content: `Current attraction context:\n${contextText}`
          },
          ...state.aiMessages
            .filter((msg) => msg.content !== uiText("aiThinking"))
            .map((msg) => ({ role: msg.role, content: msg.content }))
        ],
        temperature: 0.6
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    const answer =
      payload?.choices?.[0]?.message?.content ||
      payload?.output_text ||
      uiText("aiError");
    state.aiMessages.pop();
    state.aiMessages.push({ role: "assistant", content: answer.trim() });
  } catch (error) {
    state.aiMessages.pop();
    state.aiMessages.push({ role: "assistant", content: uiText("aiError") });
  } finally {
    state.aiBusy = false;
    renderAiMessages();
  }
}

function encodeAssetPath(path) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function imageLabel(path) {
  const filename = path.split("/").pop() || "";
  return decodeURIComponent(filename).replace(/\.[^.]+$/, "");
}

function fillTemplate(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function buildSpotSummary(spot, city) {
  const template = themeSummary[state.language]?.[spot.theme] || themeSummary.en[spot.theme];
  return fillTemplate(template, {
    spot: localize(spot.names),
    city: localize(city.names)
  });
}

function buildLocalizedCityMeta() {
  return cityMeta.map((city) => {
    const localized = localizedCityContent[city.id] || {};
    const routeLookup = localized.routes || {};
    const spotLookup = localized.spots || {};

    return {
      ...city,
      names: { ...city.names, ...(localized.names || {}) },
      subtitle: { ...city.subtitle, ...(localized.subtitle || {}) },
      summary: { ...city.summary, ...(localized.summary || {}) },
      highlights: { ...city.highlights, ...(localized.highlights || {}) },
      routeTemplates: (city.routeTemplates || []).map((route) => ({
        ...route,
        names: { ...route.names, ...(routeLookup[route.id]?.names || {}) },
        description: { ...route.description, ...(routeLookup[route.id]?.description || {}) }
      })),
      spotMeta: Object.fromEntries(
        Object.entries(city.spotMeta || {}).map(([nameZh, meta]) => [
          nameZh,
          {
            ...meta,
            names: {
              zh: nameZh,
              en: meta.nameEn || nameZh,
              ...(spotLookup[nameZh] || {})
            }
          }
        ])
      )
    };
  });
}

function buildCityData() {
  return buildLocalizedCityMeta().map((city) => {
    const assetEntries = Object.entries(spotAssets[city.id]);
    const spots = assetEntries.map(([nameZh, images], index) => {
      const meta = city.spotMeta[nameZh] || {};
      const fallbackLat = city.center[0] + index * 0.01;
      const fallbackLng = city.center[1] + index * 0.01;

      return {
        id: `${city.id}-${index + 1}`,
        order: index + 1,
        theme: meta.theme || "landmark",
        bestTime: meta.bestTime || "Flexible",
        coords: meta.coords || [fallbackLat, fallbackLng],
        names: meta.names || {
          zh: nameZh,
          en: meta.nameEn || nameZh
        },
        images,
        imageCount: images.length
      };
    });

    return {
      ...city,
      spots,
      imageCount: spots.reduce((total, spot) => total + spot.images.length, 0)
    };
  });
}

const cities = buildCityData();
state.activeSpotId = cities[0].spots[0].id;
state.activeAskSpotId = cities[0].spots[0].id;

function activeCity() {
  return cities.find((city) => city.id === state.activeCityId) || cities[0];
}

function activeSpot() {
  return activeCity().spots.find((spot) => spot.id === state.activeSpotId) || activeCity().spots[0];
}

function formatSpotSectionSummary(city) {
  return fillTemplate(currentUi().spotSectionSummary, {
    city: localize(city.names),
    spots: city.spots.length
  });
}

function distanceBetween(a, b) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function buildDynamicRoute(city, spot) {
  const nearestSpots = city.spots
    .filter((candidate) => candidate.id !== spot.id)
    .sort((left, right) => distanceBetween(left.coords, spot.coords) - distanceBetween(right.coords, spot.coords))
    .slice(0, 3);

  const routeNames = Object.fromEntries(
    Object.keys(uiContent).map((language) => [
      language,
      fillTemplate(uiContent[language].routeDynamicTitle, { spot: localizeForLanguage(spot.names, language) })
    ])
  );

  const routeDescriptions = Object.fromEntries(
    Object.keys(uiContent).map((language) => [language, uiContent[language].routeDynamicDesc])
  );

  return {
    id: "dynamic",
    names: routeNames,
    description: routeDescriptions,
    spots: [spot, ...nearestSpots]
  };
}

function buildRouteObjects(city) {
  const dynamicRoute = buildDynamicRoute(city, activeSpot());
  const staticRoutes = (city.routeTemplates || []).map((route) => ({
    ...route,
    spots: route.stops
      .map((nameZh) => city.spots.find((spot) => spot.names.zh === nameZh))
      .filter(Boolean)
  }));
  return [dynamicRoute, ...staticRoutes];
}

function activeRoutes() {
  return buildRouteObjects(activeCity());
}

function selectedRoute() {
  const routes = activeRoutes();
  return routes.find((route) => route.id === state.activeRouteId) || routes[0];
}

function cityMarkerIcon(city, isActive) {
  const size = isActive ? 22 : 18;
  const ring = isActive ? 10 : 8;
  return L.divIcon({
    className: "",
    html: `<div class="city-marker-dot" style="width:${size}px;height:${size}px;background:${city.accent};box-shadow:0 0 0 ${ring}px ${hexToRgba(city.accent, isActive ? 0.26 : 0.18)}"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

function spotMarkerIcon(city, spot, isActive) {
  const size = isActive ? 34 : 30;
  const ring = isActive ? 10 : 8;
  const extraClass = isActive ? "is-active" : "";
  return L.divIcon({
    className: "",
    html: `
      <div class="spot-marker-dot ${extraClass}" style="width:${size}px;height:${size}px;background:${city.accent};box-shadow:0 0 0 ${ring}px ${hexToRgba(city.accent, isActive ? 0.26 : 0.16)}">
        <span class="spot-marker-index">${spot.order}</span>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

function popupHtml(title, text) {
  return `
    <div class="map-popup">
      <h4>${title}</h4>
      <p>${text}</p>
    </div>
  `;
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function refreshUiText() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : state.language;
  elements.body.classList.toggle("lang-ar", state.language === "ar");

  document.querySelectorAll("[data-ui]").forEach((node) => {
    const key = node.dataset.ui;
    const text = uiText(key);
    if (text) {
      node.textContent = text;
    }
  });

  document.querySelectorAll("[data-ui-placeholder]").forEach((node) => {
    const key = node.dataset.uiPlaceholder;
    const text = uiText(key);
    if (text) {
      node.setAttribute("placeholder", text);
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });
}

function renderHero() {
  const city = activeCity();
  elements.statCityCount.textContent = cities.length;
  elements.statSpotCount.textContent = cities.reduce((sum, item) => sum + item.spots.length, 0);
  elements.statLanguageCount.textContent = Object.keys(uiContent).length;
  elements.heroCityName.textContent = localize(city.names);
  elements.heroCardTitle.textContent = localize(city.names);
  elements.heroCardSummary.textContent = localize(city.subtitle);
  elements.heroCardIntro.textContent = cityNarrative(city);
  elements.heroHighlightGrid.innerHTML = localize(city.highlights)
    .map((item) => `<span class="hero-pill">${item}</span>`)
    .join("");
}

function renderCitySelector() {
  elements.cityPanelCount.textContent = `${cities.length}`;
  elements.cityChipGrid.innerHTML = cities
    .map((city) => {
      const isActive = city.id === state.activeCityId;
      return `
        <button
          class="city-chip ${isActive ? "is-active" : ""}"
          type="button"
          data-city="${city.id}"
          style="--accent:${city.accent};--accent-soft:${city.soft};${isActive ? `background:${city.soft};border-color:${hexToRgba(city.accent, 0.24)};` : ""}"
        >
          <span>
            <strong>${localize(city.names)}</strong><br>
            <small>${city.spots.length} ${currentUi().citySpotCount}</small>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderActiveCityPanel() {
  const city = activeCity();
  elements.activeCityTitle.textContent = localize(city.names);
  elements.activeCitySummary.textContent = cityNarrative(city);
  elements.activeCityFacts.innerHTML = localize(city.highlights)
    .map((text, index) => {
      const colors = [city.soft, "var(--yellow-soft)", "var(--green-soft)"];
      const ink = [city.accent, "#9a6a00", "#1f7a3f"];
      return `<span class="fact-pill" style="background:${colors[index] || city.soft};color:${ink[index] || city.accent};">${text}</span>`;
    })
    .join("");
}

function renderWorkspace() {
  const city = activeCity();
  elements.workspaceCityTitle.textContent = localize(city.names);
  elements.workspaceCityCopy.textContent = cityWorkspaceNarrative(city);
  elements.cityMapTitle.textContent = `${localize(city.names)} · ${currentUi().cityMapLabel}`;
  elements.spotSectionCopy.textContent = formatSpotSectionSummary(city);
}

function renderSpotQuickLinks() {
  const city = activeCity();
  elements.spotQuickLinks.innerHTML = city.spots
    .map((spot) => {
      const isActive = spot.id === state.activeSpotId;
      return `
        <button
          class="quick-link ${isActive ? "is-active" : ""}"
          type="button"
          data-spot="${spot.id}"
          style="${isActive ? `background:${city.soft};border-color:${hexToRgba(city.accent, 0.22)};color:${city.accent};` : ""}"
        >
          ${spot.order}. ${localize(spot.names)}
        </button>
      `;
    })
    .join("");
}

function renderSpotFocus() {
  const city = activeCity();
  const spot = activeSpot();
  const safeIndex = Math.min(state.activeImageIndex, spot.images.length - 1);
  state.activeImageIndex = safeIndex;

  elements.focusSpotName.textContent = localize(spot.names);
  elements.focusSpotSummary.textContent = spotNarrative(spot, city);
  elements.focusSpotMeta.innerHTML = [
    `${currentUi().theme}: ${currentThemeText(spot.theme)}`,
    `${currentUi().bestTime}: ${localizeBestTime(spot.bestTime)}`
  ]
    .map((item, index) => {
      const tone = index === 0 ? city.soft : "var(--yellow-soft)";
      const ink = index === 0 ? city.accent : "#956500";
      return `<span class="fact-pill" style="background:${tone};color:${ink};">${item}</span>`;
    })
    .join("");
  setTicketLink(spot, city);

  elements.focusMainImage.src = encodeAssetPath(spot.images[safeIndex]);
  elements.focusMainImage.alt = `${localize(spot.names)} - ${imageLabel(spot.images[safeIndex])}`;

  elements.focusThumbnailGrid.innerHTML = spot.images
    .map((image, index) => {
      const isActive = index === safeIndex;
      return `
        <button
          class="thumbnail-button ${isActive ? "is-active" : ""}"
          type="button"
          data-image-index="${index}"
          style="${isActive ? `outline:3px solid ${city.accent};` : ""}"
          aria-label="${imageLabel(image)}"
        >
          <img src="${encodeAssetPath(image)}" alt="${imageLabel(image)}">
        </button>
      `;
    })
    .join("");
}

function renderSpotCards() {
  const city = activeCity();
  elements.spotGrid.innerHTML = city.spots
    .map((spot) => {
      const isActive = spot.id === state.activeSpotId;
      return `
        <article
          id="spot-card-${spot.id}"
          class="spot-card ${isActive ? "is-active" : ""}"
          data-spot-card="${spot.id}"
          style="${isActive ? `border-color:${hexToRgba(city.accent, 0.26)};` : ""}"
        >
          <div class="spot-card-image">
            <img src="${encodeAssetPath(spot.images[0])}" alt="${localize(spot.names)}">
          </div>
          <div class="spot-card-body">
            <div class="spot-card-head">
              <div>
                <h3>${localize(spot.names)}</h3>
                <p class="spot-copy">${currentThemeText(spot.theme)}</p>
              </div>
              <span class="spot-badge" style="background:${city.soft};color:${city.accent};">${spot.order}</span>
            </div>
            <p class="spot-description">${spotNarrative(spot, city)}</p>
            <div class="fact-grid">
              <span class="fact-pill">${currentUi().bestTime}: ${localizeBestTime(spot.bestTime)}</span>
              <span class="fact-pill">${currentUi().theme}: ${currentThemeText(spot.theme)}</span>
              ${ticketSnippet(spot, city)}
            </div>
            <button class="tiny-button" type="button" data-ask-spot="${spot.id}" style="background:${city.soft};color:${city.accent};">
              ${currentUi().cardButton}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderFoodSection() {
  const city = activeCity();
  const picks = cityFoodPicks[city.id];
  if (!picks) {
    elements.foodGrid.innerHTML = "";
    return;
  }

  const rows = [
    { key: "foodCard1", value: picks.breakfast },
    { key: "foodCard2", value: picks.dinner },
    { key: "foodCard3", value: picks.snack }
  ];

  elements.foodGrid.innerHTML = rows
    .map((item) => {
      const text = localizeFoodLine(item.value);
      return `
        <article class="food-card">
          <span class="fact-pill food-pill">${uiText(item.key)}</span>
          <h3>${localize(city.names)}</h3>
          <p>${text}</p>
        </article>
      `;
    })
    .join("");
}

function renderRoutes() {
  const city = activeCity();
  const routes = activeRoutes();
  const route = selectedRoute();

  elements.routeSwitcher.innerHTML = routes
    .map((item) => {
      const isActive = item.id === route.id;
      return `
        <button
          class="route-tab ${isActive ? "is-active" : ""}"
          type="button"
          data-route="${item.id}"
          style="${isActive ? `background:${city.soft};border-color:${hexToRgba(city.accent, 0.24)};color:${city.accent};box-shadow:0 12px 26px ${hexToRgba(city.accent, 0.12)};` : ""}"
        >
          ${localize(item.names)}
        </button>
      `;
    })
    .join("");

  elements.routeDisplay.innerHTML = `
    <article class="route-panel">
      <h4>${localize(route.names)}</h4>
      <p>${localize(route.description)}</p>
      <ol class="route-list">
        ${route.spots.map((spot) => `<li>${localize(spot.names)}</li>`).join("")}
      </ol>
    </article>
  `;
}

function refreshChinaMap() {
  cities.forEach((city) => {
    const marker = chinaMarkers.get(city.id);
    if (marker) {
      marker.setIcon(cityMarkerIcon(city, city.id === state.activeCityId));
      marker.bindPopup(
        popupHtml(localize(city.names), `${cityNarrative(city)} ${currentUi().mapPopupHint}`)
      );
      marker.bindTooltip(localize(city.names), {
        direction: "top",
        offset: [0, -10],
        className: "spot-tooltip",
        opacity: 0.95,
        permanent: true
      });
    }
  });
}

function renderCityMap() {
  const city = activeCity();
  const bounds = L.latLngBounds(city.spots.map((spot) => spot.coords));
  cityMap.flyToBounds(bounds, { padding: [46, 46], maxZoom: 11, duration: 0.8 });

  citySpotMarkers.forEach((entry) => {
    if (entry.marker) {
      entry.marker.remove();
    }
  });
  citySpotMarkers = city.spots.map((spot) => {
    const isActive = spot.id === state.activeSpotId;
    const marker = L.marker(spot.coords, { icon: spotMarkerIcon(city, spot, isActive) })
      .addTo(cityMap)
      .bindPopup(popupHtml(localize(spot.names), spotNarrative(spot, city)))
      .bindTooltip(`${spot.order}. ${localize(spot.names)}`, {
        direction: "top",
        offset: [0, -18],
        className: "spot-tooltip",
        opacity: 0.96,
        permanent: true
      })
      .on("click", () => focusSpot(spot.id, { scrollCard: true }));
    return { id: spot.id, marker };
  });

  if (activeRouteLine) {
    activeRouteLine.remove();
  }

  const route = selectedRoute();
  if (route.spots.length > 1) {
    activeRouteLine = L.polyline(route.spots.map((spot) => spot.coords), {
      color: city.accent,
      weight: 4,
      opacity: 0.75,
      dashArray: "10 8"
    }).addTo(cityMap);
  } else {
    activeRouteLine = null;
  }
}

function focusSpot(spotId, options = {}) {
  state.activeSpotId = spotId;
  state.activeAskSpotId = spotId;
  state.activeImageIndex = 0;
  state.activeRouteId = "dynamic";
  renderAll();

  if (options.scrollCard) {
    const card = document.querySelector(`#spot-card-${spotId}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function focusCity(cityId, options = {}) {
  state.activeCityId = cityId;
  const city = activeCity();
  state.activeSpotId = city.spots[0].id;
  state.activeAskSpotId = city.spots[0].id;
  state.activeImageIndex = 0;
  state.activeRouteId = "dynamic";
  renderAll();

  if (options.scroll) {
    document.querySelector("#city-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderAll() {
  applyMapTileLanguage();
  refreshUiText();
  syncAiSeedMessageLanguage();
  renderHero();
  renderCitySelector();
  renderActiveCityPanel();
  renderWorkspace();
  renderSpotQuickLinks();
  renderSpotFocus();
  renderRoutes();
  renderSpotCards();
  renderFoodSection();
  prefetchActiveCityTranslations();
  renderAiContext();
  renderAiMessages();
  refreshChinaMap();
  renderCityMap();
  requestAnimationFrame(() => {
    chinaMap.invalidateSize();
    cityMap.invalidateSize();
  });
  bindFloatEffects();
}

function bindFloatEffects() {
  const selector = ".hero-card, .map-card, .focus-card, .route-card, .spot-card, .panel-block, .city-chip, .food-card, .ai-card";
  document.querySelectorAll(selector).forEach((element) => {
    if (element.dataset.floatBound === "true") return;
    element.dataset.floatBound = "true";

    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 3.6;
      const rotateX = (0.5 - y) * 3.2;
      element.classList.add("is-floating");
      element.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    element.addEventListener("pointerleave", () => {
      element.classList.remove("is-floating");
      element.style.transform = "";
    });
  });
}

function setupChinaMap() {
  cities.forEach((city) => {
    const marker = L.marker(city.marker, { icon: cityMarkerIcon(city, city.id === state.activeCityId) })
      .addTo(chinaMap)
      .bindPopup(popupHtml(localize(city.names), `${cityNarrative(city)} ${currentUi().mapPopupHint}`))
      .bindTooltip(localize(city.names), {
        direction: "top",
        offset: [0, -10],
        className: "spot-tooltip",
        opacity: 0.95,
        permanent: true
      })
      .on("click", () => focusCity(city.id, { scroll: true }));
    chinaMarkers.set(city.id, marker);
  });
}

document.addEventListener("click", (event) => {
  const langButton = event.target.closest("[data-lang]");
  const cityButton = event.target.closest("[data-city]");
  const spotButton = event.target.closest("[data-spot]");
  const askSpotButton = event.target.closest("[data-ask-spot]");
  const spotCard = event.target.closest("[data-spot-card]");
  const thumbButton = event.target.closest("[data-image-index]");
  const routeButton = event.target.closest("[data-route]");

  if (langButton) {
    state.language = langButton.dataset.lang;
    syncAiSeedMessageLanguage();
    renderAll();
    return;
  }

  if (cityButton) {
    focusCity(cityButton.dataset.city, { scroll: true });
    return;
  }

  if (spotButton) {
    focusSpot(spotButton.dataset.spot, { scrollCard: true });
    return;
  }

  if (askSpotButton) {
    const spotId = askSpotButton.dataset.askSpot;
    focusSpot(spotId);
    openAiAssistantForSpot(spotId);
    return;
  }

  if (spotCard) {
    focusSpot(spotCard.dataset.spotCard);
    return;
  }

  if (thumbButton) {
    state.activeImageIndex = Number(thumbButton.dataset.imageIndex);
    renderSpotFocus();
    return;
  }

  if (routeButton) {
    state.activeRouteId = routeButton.dataset.route;
    renderRoutes();
    renderCityMap();
  }
});

document.querySelector("#jump-random-city").addEventListener("click", () => {
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  focusCity(randomCity.id, { scroll: true });
});

document.querySelector("#jump-to-city-guide").addEventListener("click", () => {
  document.querySelector("#city-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#jump-to-spot-card").addEventListener("click", () => {
  const card = document.querySelector(`#spot-card-${state.activeSpotId}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

elements.openAiAssistant.addEventListener("click", () => {
  openAiAssistantForSpot(state.activeSpotId);
});

elements.sendAiMessage.addEventListener("click", () => {
  sendAiMessage();
});

elements.aiInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendAiMessage();
  }
});

elements.focusTicketLink.addEventListener("click", (event) => {
  if (elements.focusTicketLink.classList.contains("is-note")) {
    event.preventDefault();
  }
});

async function bootstrap() {
  loadIntroTranslationsFromStorage();
  ensureAiSeedMessage();
  setupChinaMap();
  renderAll();
  await loadExternalContent();
  renderAll();
}

bootstrap();
