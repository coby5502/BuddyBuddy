import { useState } from "react";

// ==================== i18n ====================
const i18n = {
  ja: {
    appName: "BuddyBuddy",
    tagline: "韓国人の先生と楽しく学ぼう",
    searchPlaceholder: "先生を探す...",
    sortLabel: "並べ替え",
    sortOptions: { popular: "人気順", rating: "評価順", sales: "販売順", newest: "新着順" },
    filterLabel: "フィルター",
    filters: { beginner: "初心者OK", freetalk: "フリートーク", love: "恋愛相談", offline: "オフライン可能" },
    viewProfile: "プロフィールを見る",
    reviews: "件",
    online: "オンライン",
    offline: "オフライン",
    online30: "30分 ¥3,500",
    offline30: "30分 ¥6,000",
    lessonType: "レッスンタイプ",
    onlineLesson: "オンラインレッスン",
    offlineLesson: "オフラインレッスン",
    offlineDesc: "東京で直接会ってレッスン",
    premiumBadge: "プレミアム",
    popularBadge: "人気",
    lessonStyle: "レッスンスタイル",
    styles: { freetalk: "フリートーク中心", beginner: "初心者歓迎", love: "恋愛トークOK" },
    reviewSection: "受講者の声",
    bookNow: "予約する",
    selectLesson: "レッスンタイプを選択",
    selectDate: "日付を選択",
    selectTime: "時間を選択",
    selectCourse: "コースを選択",
    courses: {
      "20min": "20分コース ¥2,500",
      "30min": "30分コース ¥3,500",
      "60min": "60分コース ¥6,000",
      "off20": "20分コース ¥4,500",
      "off30": "30分コース ¥6,000",
      "off60": "60分コース ¥11,000",
    },
    confirmTitle: "予約内容の確認",
    tutor: "先生",
    time: "時間",
    checkPoints: ["1:1 プライベートレッスン", "初心者OK", "Zoom or 対面"],
    confirmBtn: "今すぐ予約する",
    completeTitle: "予約が完了しました 🎉",
    completeNotes: ["Zoomリンク送信済み", "開始10分前にリマインド送信"],
    backToHome: "ホームに戻る",
    signupTitle: "素敵な先生と出会いましょう",
    name: "お名前",
    email: "メールアドレス",
    password: "パスワード",
    signupBtn: "アカウントを作成",
    orLogin: "または",
    googleLogin: "Googleでログイン",
    appleLogin: "Appleでログイン",
    tutorRegTitle: "講師として登録する",
    tutorAge: "年齢",
    tutorArea: "居住エリア",
    tutorPhoto: "プロフィール写真",
    tutorVideo: "自己紹介動画",
    tutorIntro: "自己紹介（日本語）",
    tutorIntroKr: "自己紹介（韓国語）",
    tutorStyleTitle: "レッスンスタイル",
    tutorOnline: "オンライン可能",
    tutorOffline: "オフライン可能",
    tutorPrice: "料金設定（30分）",
    tutorRegBtn: "講師として登録する",
    nav: { home: "ホーム", signup: "会員登録", tutorReg: "講師登録" },
    fromAge: "歳",
  },
  ko: {
    appName: "버디버디",
    tagline: "한국인 선생님과 즐겁게 배워요",
    searchPlaceholder: "선생님 찾기...",
    sortLabel: "정렬",
    sortOptions: { popular: "인기순", rating: "평점순", sales: "예약많은순", newest: "최신순" },
    filterLabel: "필터",
    filters: { beginner: "초보자 OK", freetalk: "프리토크", love: "연애상담", offline: "오프라인 가능" },
    viewProfile: "프로필 보기",
    reviews: "건",
    online: "온라인",
    offline: "오프라인",
    online30: "30분 ¥3,500",
    offline30: "30분 ¥6,000",
    lessonType: "레슨 타입",
    onlineLesson: "온라인 레슨",
    offlineLesson: "오프라인 레슨",
    offlineDesc: "도쿄에서 직접 만나서 레슨",
    premiumBadge: "프리미엄",
    popularBadge: "인기",
    lessonStyle: "레슨 스타일",
    styles: { freetalk: "프리토크 중심", beginner: "초보자 환영", love: "연애 토크 OK" },
    reviewSection: "수강생 후기",
    bookNow: "예약하기",
    selectLesson: "레슨 타입 선택",
    selectDate: "날짜 선택",
    selectTime: "시간 선택",
    selectCourse: "코스 선택",
    courses: {
      "20min": "20분 코스 ¥2,500",
      "30min": "30분 코스 ¥3,500",
      "60min": "60분 코스 ¥6,000",
      "off20": "20분 코스 ¥4,500",
      "off30": "30분 코스 ¥6,000",
      "off60": "60분 코스 ¥11,000",
    },
    confirmTitle: "예약 내용 확인",
    tutor: "선생님",
    time: "시간",
    checkPoints: ["1:1 프라이빗 레슨", "초보자 OK", "Zoom 또는 대면"],
    confirmBtn: "지금 바로 예약하기",
    completeTitle: "예약이 완료되었습니다 🎉",
    completeNotes: ["Zoom 링크 전송 완료", "시작 10분 전 리마인드 발송"],
    backToHome: "홈으로 돌아가기",
    signupTitle: "좋은 선생님을 만나보세요",
    name: "이름",
    email: "이메일",
    password: "비밀번호",
    signupBtn: "계정 만들기",
    orLogin: "또는",
    googleLogin: "Google로 로그인",
    appleLogin: "Apple로 로그인",
    tutorRegTitle: "강사로 등록하기",
    tutorAge: "나이",
    tutorArea: "거주 지역",
    tutorPhoto: "프로필 사진",
    tutorVideo: "자기소개 영상",
    tutorIntro: "자기소개 (일본어)",
    tutorIntroKr: "자기소개 (한국어)",
    tutorStyleTitle: "레슨 스타일",
    tutorOnline: "온라인 가능",
    tutorOffline: "오프라인 가능",
    tutorPrice: "요금 설정 (30분)",
    tutorRegBtn: "강사로 등록하기",
    nav: { home: "홈", signup: "회원가입", tutorReg: "강사등록" },
    fromAge: "세",
  },
};

// ==================== DUMMY DATA ====================
const tutors = [
  {
    id: 1,
    nameKr: "김민준",
    nameJp: "キム・ミンジュン",
    nameEn: "Minjun Kim",
    age: 28,
    area: "東京",
    type: "犬系",
    rating: 4.9,
    reviewCount: 218,
    tagJp: ["初心者OK", "フリートーク", "恋愛相談"],
    tagKo: ["초보자 OK", "프리토크", "연애상담"],
    introJp: "優しく楽しくレッスンします！恋愛トークも大歓迎😊",
    introKo: "친절하고 즐겁게 레슨할게요! 연애 토크도 대환영😊",
    onlinePrice: 3500, offlinePrice: 6000,
    bgColor: "from-rose-100 to-pink-50",
    avatar: "MJ",
    avatarBg: "bg-rose-300",
    styles: ["freetalk", "beginner", "love"],
    reviews: [
      { name: "さくら", text: "ミンジュン先生はとても優しくて、毎回のレッスンが楽しみになりました💕", rating: 5 },
      { name: "はな", text: "韓国語が全然話せなかった私でも、3ヶ月で会話できるように！", rating: 5 },
      { name: "ゆい", text: "先生のトークが面白くて時間があっという間に過ぎます✨", rating: 5 },
    ],
  },
  {
    id: 2,
    nameKr: "이서준",
    nameJp: "イ・ソジュン",
    nameEn: "Seojun Lee",
    age: 25,
    area: "大阪",
    type: "クール系",
    rating: 4.8,
    reviewCount: 182,
    tagJp: ["フリートーク", "初心者OK"],
    tagKo: ["프리토크", "초보자 OK"],
    introJp: "クールだけど授業は丁寧です。K-popや映画から学ぼう🎬",
    introKo: "쿨하지만 수업은 친절해요. K-pop·영화로 배워요🎬",
    onlinePrice: 3500, offlinePrice: 6000,
    bgColor: "from-blue-100 to-indigo-50",
    avatar: "SJ",
    avatarBg: "bg-indigo-300",
    styles: ["freetalk", "beginner"],
    reviews: [
      { name: "みさき", text: "クールな見た目なのに授業はとても丁寧で感動しました", rating: 5 },
      { name: "あかね", text: "K-popの話で盛り上がりながら韓国語を学べます！", rating: 4 },
    ],
  },
  {
    id: 3,
    nameKr: "박도윤",
    nameJp: "パク・ドユン",
    nameEn: "Doyun Park",
    age: 30,
    area: "東京",
    type: "年上タイプ",
    rating: 4.9,
    reviewCount: 305,
    tagJp: ["オフライン可能", "フリートーク", "恋愛相談"],
    tagKo: ["오프라인 가능", "프리토크", "연애상담"],
    introJp: "東京在住10年。カフェで楽しくレッスンしませんか☕",
    introKo: "도쿄 거주 10년. 카페에서 즐겁게 배워봐요☕",
    onlinePrice: 3500, offlinePrice: 6000,
    bgColor: "from-amber-100 to-orange-50",
    avatar: "DY",
    avatarBg: "bg-amber-400",
    styles: ["freetalk", "love"],
    reviews: [
      { name: "なな", text: "カフェでのオフラインレッスンが最高すぎる✨デートみたいでドキドキした", rating: 5 },
      { name: "りか", text: "ドユン先生は頼りになる年上の雰囲気がすてき", rating: 5 },
      { name: "もも", text: "毎週のレッスンが楽しみで仕方ないです💗", rating: 5 },
    ],
  },
  {
    id: 4,
    nameKr: "최현우",
    nameJp: "チェ・ヒョヌ",
    nameEn: "Hyunwoo Choi",
    age: 26,
    area: "福岡",
    type: "優しい系",
    rating: 4.7,
    reviewCount: 143,
    tagJp: ["初心者OK", "恋愛相談"],
    tagKo: ["초보자 OK", "연애상담"],
    introJp: "初めての韓国語でも大丈夫！一緒にゆっくり頑張ろう🌸",
    introKo: "처음 한국어도 괜찮아요! 함께 천천히 해봐요🌸",
    onlinePrice: 3000, offlinePrice: 5500,
    bgColor: "from-green-100 to-teal-50",
    avatar: "HW",
    avatarBg: "bg-teal-300",
    styles: ["beginner", "love"],
    reviews: [
      { name: "こころ", text: "初めて韓国語を習いましたが、ヒョヌ先生のおかげで全然怖くなかった😌", rating: 5 },
      { name: "あい", text: "優しくて穏やかな先生で毎回癒されてます", rating: 4 },
    ],
  },
  {
    id: 5,
    nameKr: "정재원",
    nameJp: "チョン・ジェウォン",
    nameEn: "Jaewon Jung",
    age: 23,
    area: "東京",
    type: "犬系",
    rating: 4.8,
    reviewCount: 97,
    tagJp: ["フリートーク", "初心者OK", "オフライン可能"],
    tagKo: ["프리토크", "초보자 OK", "오프라인 가능"],
    introJp: "明るくて元気いっぱい！楽しく話しながら韓国語上達✨",
    introKo: "밝고 에너지 넘쳐요! 즐겁게 대화하며 실력 UP✨",
    onlinePrice: 3000, offlinePrice: 5500,
    bgColor: "from-yellow-100 to-lime-50",
    avatar: "JW",
    avatarBg: "bg-yellow-400",
    styles: ["freetalk", "beginner"],
    reviews: [
      { name: "るか", text: "ジェウォン先生は年が近くて話しやすい！毎回笑いっぱなし😂", rating: 5 },
      { name: "まい", text: "明るくてレッスンが全然しんどくない", rating: 4 },
    ],
  },
  {
    id: 6,
    nameKr: "한승민",
    nameJp: "ハン・スンミン",
    nameEn: "Seungmin Han",
    age: 29,
    area: "名古屋",
    type: "クール系",
    rating: 4.6,
    reviewCount: 88,
    tagJp: ["フリートーク", "恋愛相談"],
    tagKo: ["프리토크", "연애상담"],
    introJp: "ビジネス韓国語からカジュアル会話まで幅広く対応🔥",
    introKo: "비즈니스 한국어부터 캐주얼 회화까지 폭넓게 대응🔥",
    onlinePrice: 4000, offlinePrice: 7000,
    bgColor: "from-purple-100 to-violet-50",
    avatar: "SM",
    avatarBg: "bg-violet-400",
    styles: ["freetalk", "love"],
    reviews: [
      { name: "のぞみ", text: "スンミン先生のレッスンは密度が濃くてとても勉強になります", rating: 5 },
      { name: "ちひろ", text: "クールなのにちゃんと褒めてくれる先生💕", rating: 4 },
    ],
  },
  {
    id: 7,
    nameKr: "오준혁",
    nameJp: "オ・ジュンヒョク",
    nameEn: "Junhyuk Oh",
    age: 32,
    area: "東京",
    type: "年上タイプ",
    rating: 4.9,
    reviewCount: 267,
    tagJp: ["オフライン可能", "初心者OK", "フリートーク"],
    tagKo: ["오프라인 가능", "초보자 OK", "프리토크"],
    introJp: "渋谷・新宿でカフェレッスン開催中。一緒に韓国旅行の夢を叶えよう🇰🇷",
    introKo: "시부야·신주쿠에서 카페 레슨 진행 중. 함께 한국 여행의 꿈을 이뤄요🇰🇷",
    onlinePrice: 3500, offlinePrice: 6500,
    bgColor: "from-red-100 to-rose-50",
    avatar: "JH",
    avatarBg: "bg-red-400",
    styles: ["freetalk", "beginner"],
    reviews: [
      { name: "ゆか", text: "ジュンヒョク先生とのレッスンでソウル旅行がもっと楽しくなりました！", rating: 5 },
      { name: "さな", text: "カフェで勉強するの初めてだったけどすごく集中できた✨", rating: 5 },
      { name: "えり", text: "先生の韓国の話が面白くてもっと聞きたくなる", rating: 5 },
    ],
  },
  {
    id: 8,
    nameKr: "신태양",
    nameJp: "シン・テヤン",
    nameEn: "Taeyang Shin",
    age: 27,
    area: "東京",
    type: "優しい系",
    rating: 4.8,
    reviewCount: 154,
    tagJp: ["初心者OK", "フリートーク", "恋愛相談", "オフライン可能"],
    tagKo: ["초보자 OK", "프리토크", "연애상담", "오프라인 가능"],
    introJp: "韓国ドラマ好きな方大歓迎！ドラマのセリフから自然な韓国語を学ぼう📺",
    introKo: "한국 드라마 좋아하는 분 대환영! 드라마 대사로 자연스러운 한국어를🎬",
    onlinePrice: 3500, offlinePrice: 6000,
    bgColor: "from-pink-100 to-fuchsia-50",
    avatar: "TY",
    avatarBg: "bg-pink-400",
    styles: ["freetalk", "beginner", "love"],
    reviews: [
      { name: "みお", text: "ドラマで韓国語を教えてもらえるなんて夢みたい！推しのセリフが言えるようになった😭", rating: 5 },
      { name: "りりか", text: "テヤン先生は話が上手でレッスン中ずっとワクワクしてました", rating: 5 },
      { name: "あゆ", text: "優しくて丁寧で最高の先生です💗毎週楽しみにしてます", rating: 5 },
    ],
  },
];

// ==================== UTILS ====================
const StarRating = ({ rating }) => (
  <span className="text-yellow-400 font-semibold text-sm">⭐ {rating.toFixed(1)}</span>
);

const TagBadge = ({ label, color = "bg-pink-100 text-pink-600" }) => (
  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${color}`}>{label}</span>
);

const Avatar = ({ tutor }) => (
  <div className={`w-full h-full ${tutor.avatarBg} flex items-center justify-center text-white font-bold text-2xl rounded-2xl`}>
    <div className={`w-full h-full bg-gradient-to-br ${tutor.bgColor} rounded-2xl flex flex-col items-center justify-center`}>
      <div className={`w-20 h-20 ${tutor.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
        {tutor.avatar}
      </div>
    </div>
  </div>
);

// ==================== HEADER ====================
const Header = ({ lang, setLang, t, onNav, screen }) => (
  <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 px-4 py-3 flex items-center justify-between">
    <button onClick={() => onNav("home")} className="flex items-center gap-1">
      <span className="text-lg font-bold bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
        💕 {t.appName}
      </span>
    </button>
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang(lang === "ja" ? "ko" : "ja")}
        className="text-xs bg-pink-50 border border-pink-200 rounded-full px-3 py-1 font-medium text-pink-600 hover:bg-pink-100 transition-all"
      >
        {lang === "ja" ? "한국어" : "日本語"}
      </button>
    </div>
  </div>
);

// ==================== BOTTOM NAV ====================
const BottomNav = ({ t, onNav, screen }) => (
  <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 py-3 flex justify-around z-50">
    <button onClick={() => onNav("home")} className={`flex flex-col items-center gap-0.5 ${screen === "home" ? "text-rose-500" : "text-gray-400"}`}>
      <span className="text-xl">🏠</span>
      <span className="text-xs font-medium">{t.nav.home}</span>
    </button>
    <button onClick={() => onNav("signup")} className={`flex flex-col items-center gap-0.5 ${screen === "signup" ? "text-rose-500" : "text-gray-400"}`}>
      <span className="text-xl">👩</span>
      <span className="text-xs font-medium">{t.nav.signup}</span>
    </button>
    <button onClick={() => onNav("tutorReg")} className={`flex flex-col items-center gap-0.5 ${screen === "tutorReg" ? "text-rose-500" : "text-gray-400"}`}>
      <span className="text-xl">👨</span>
      <span className="text-xs font-medium">{t.nav.tutorReg}</span>
    </button>
  </div>
);

// ==================== SCREEN 1: HOME ====================
const HomeScreen = ({ t, lang, onNav, setSelectedTutor }) => {
  const [sort, setSort] = useState("popular");
  const [activeFilters, setActiveFilters] = useState([]);
  const [showSort, setShowSort] = useState(false);

  const filterKeys = Object.keys(t.filters);
  const sortKeys = Object.keys(t.sortOptions);

  const toggleFilter = (f) => setActiveFilters(prev =>
    prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
  );

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 px-4 pt-6 pb-8">
        <p className="text-gray-500 text-sm mb-1">✨ {lang === "ja" ? "毎週500人以上が学習中" : "매주 500명 이상이 학습 중"}</p>
        <h1 className="text-2xl font-bold text-gray-800 leading-tight mb-4">
          {t.tagline}
        </h1>
        {/* Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 flex items-center px-4 py-3 gap-2">
          <span className="text-gray-400">🔍</span>
          <input
            placeholder={t.searchPlaceholder}
            className="flex-1 outline-none text-sm text-gray-600 bg-transparent"
          />
        </div>
      </div>

      {/* Sort + Filter */}
      <div className="px-4 pt-4">
        {/* Sort dropdown */}
        <div className="flex items-center gap-2 mb-3">
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-1 bg-white border border-pink-200 rounded-xl px-3 py-1.5 text-sm text-gray-700 shadow-sm"
            >
              <span>↕️</span>
              <span>{t.sortOptions[sort]}</span>
              <span className="text-gray-400">▾</span>
            </button>
            {showSort && (
              <div className="absolute top-10 left-0 bg-white rounded-2xl shadow-xl border border-pink-100 z-30 overflow-hidden min-w-36">
                {sortKeys.map(k => (
                  <button
                    key={k}
                    onClick={() => { setSort(k); setShowSort(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-pink-50 transition-colors ${sort === k ? "text-rose-500 font-semibold bg-pink-50" : "text-gray-700"}`}
                  >
                    {t.sortOptions[k]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500">{tutors.length}{lang === "ja" ? "人の先生" : "명의 선생님"}</span>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-4">
          {filterKeys.map(f => (
            <button
              key={f}
              onClick={() => toggleFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${
                activeFilters.includes(f)
                  ? "bg-rose-500 text-white border-rose-500"
                  : "bg-white text-gray-600 border-gray-200"
              }`}
            >
              {t.filters[f]}
            </button>
          ))}
        </div>

        {/* Tutor Cards */}
        <div className="grid grid-cols-1 gap-4">
          {tutors.map(tutor => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              t={t}
              lang={lang}
              onView={() => { setSelectedTutor(tutor); onNav("detail"); }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== TUTOR CARD ====================
const TutorCard = ({ tutor, t, lang, onView }) => (
  <div className="bg-white rounded-3xl shadow-sm border border-pink-50 overflow-hidden hover:shadow-md transition-all">
    <div className="flex gap-0">
      {/* Image area */}
      <div className={`w-32 h-40 flex-shrink-0 bg-gradient-to-br ${tutor.bgColor} relative`}>
        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
          <div className={`w-16 h-16 ${tutor.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md`}>
            {tutor.avatar}
          </div>
          <span className="text-xs text-gray-500 bg-white/70 rounded-full px-2 py-0.5">
            {tutor.type}
          </span>
        </div>
        {tutor.id <= 3 && (
          <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
            {t.popularBadge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="font-bold text-gray-800 text-base">{lang === "ja" ? tutor.nameJp : tutor.nameKr}</h3>
            <span className="text-xs text-gray-400">{tutor.age}{t.fromAge}</span>
          </div>
          <p className="text-xs text-gray-500 mb-2 leading-relaxed">
            {lang === "ja" ? tutor.introJp : tutor.introKo}
          </p>
          <div className="flex flex-wrap gap-1 mb-2">
            {(lang === "ja" ? tutor.tagJp : tutor.tagKo).slice(0, 2).map((tag, i) => (
              <TagBadge key={i} label={tag} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <StarRating rating={tutor.rating} />
            <span className="text-xs text-gray-400">({tutor.reviewCount}{t.reviews})</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-xs">
            <span className="text-gray-500">💻 {lang === "ja" ? `30分 ¥${tutor.onlinePrice.toLocaleString()}` : `30분 ¥${tutor.onlinePrice.toLocaleString()}`}</span>
            <span className="text-rose-500 font-semibold">🏠 ¥{tutor.offlinePrice.toLocaleString()}</span>
          </div>
          <button
            onClick={onView}
            className="w-full bg-gradient-to-r from-rose-400 to-pink-400 text-white text-xs font-semibold py-2 rounded-xl shadow-sm hover:opacity-90 transition-opacity"
          >
            {t.viewProfile}
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ==================== SCREEN 2: DETAIL ====================
const DetailScreen = ({ t, lang, tutor, onBack, onBook }) => {
  const [lessonTab, setLessonTab] = useState("online");

  const onlineCourses = [
    { key: "20min", label: lang === "ja" ? "20分" : "20분", price: `¥${(tutor.onlinePrice * 0.7).toFixed(0)}` },
    { key: "30min", label: lang === "ja" ? "30分" : "30분", price: `¥${tutor.onlinePrice}` },
    { key: "60min", label: lang === "ja" ? "60分" : "60분", price: `¥${tutor.onlinePrice * 1.7}` },
  ];
  const offlineCourses = [
    { key: "off20", label: lang === "ja" ? "20分" : "20분", price: `¥${(tutor.offlinePrice * 0.75).toFixed(0)}` },
    { key: "off30", label: lang === "ja" ? "30分" : "30분", price: `¥${tutor.offlinePrice}` },
    { key: "off60", label: lang === "ja" ? "60分" : "60분", price: `¥${tutor.offlinePrice * 1.8}` },
  ];

  return (
    <div className="pb-32">
      {/* Back button + hero */}
      <div className={`relative bg-gradient-to-br ${tutor.bgColor} pt-4 pb-10 px-4`}>
        <button onClick={onBack} className="mb-4 flex items-center gap-1 text-gray-600 text-sm font-medium">
          ← {lang === "ja" ? "戻る" : "뒤로"}
        </button>
        <div className="flex flex-col items-center">
          <div className={`w-28 h-28 ${tutor.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-xl mb-3`}>
            {tutor.avatar}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{lang === "ja" ? tutor.nameJp : tutor.nameKr}</h2>
          <p className="text-gray-500 text-sm">{tutor.nameEn} · {tutor.age}{t.fromAge} · {tutor.area}</p>
          <div className="flex items-center gap-2 mt-2">
            <StarRating rating={tutor.rating} />
            <span className="text-gray-500 text-sm">({tutor.reviewCount}{t.reviews})</span>
            <span className="text-xs bg-white/70 border border-pink-200 text-rose-500 px-2 py-0.5 rounded-full font-medium">{tutor.type}</span>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-6">
        {/* Intro Card */}
        <div className="bg-white rounded-3xl shadow-md p-4 mb-4 border border-pink-50">
          <p className="text-sm text-gray-700 leading-relaxed">
            {lang === "ja" ? tutor.introJp : tutor.introKo}
          </p>
        </div>

        {/* Lesson Type Toggle */}
        <div className="bg-white rounded-3xl shadow-md p-4 mb-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{t.lessonType}</h3>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setLessonTab("online")}
              className={`flex-1 py-2 rounded-2xl text-sm font-semibold transition-all ${lessonTab === "online" ? "bg-rose-500 text-white shadow" : "bg-gray-100 text-gray-600"}`}
            >
              💻 {t.onlineLesson}
            </button>
            <button
              onClick={() => setLessonTab("offline")}
              className={`flex-1 py-2 rounded-2xl text-sm font-semibold transition-all ${lessonTab === "offline" ? "bg-rose-500 text-white shadow" : "bg-gray-100 text-gray-600"}`}
            >
              🏠 {t.offlineLesson}
            </button>
          </div>

          {lessonTab === "online" ? (
            <div className="space-y-2">
              {onlineCourses.map(c => (
                <div key={c.key} className="flex items-center justify-between bg-pink-50 rounded-2xl px-4 py-3">
                  <span className="text-sm text-gray-700 font-medium">{c.label}</span>
                  <span className="text-rose-500 font-bold">{c.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-2xl px-4 py-3 mb-3 flex items-center gap-2">
                <span>📍</span>
                <div>
                  <span className="text-xs font-bold text-rose-600">{t.premiumBadge} · {t.popularBadge}</span>
                  <p className="text-sm text-gray-700">{t.offlineDesc}</p>
                </div>
              </div>
              <div className="space-y-2">
                {offlineCourses.map(c => (
                  <div key={c.key} className="flex items-center justify-between bg-rose-50 rounded-2xl px-4 py-3">
                    <span className="text-sm text-gray-700 font-medium">{c.label}</span>
                    <span className="text-rose-600 font-bold">{c.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lesson Style */}
        <div className="bg-white rounded-3xl shadow-md p-4 mb-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{t.lessonStyle}</h3>
          <div className="space-y-2">
            {tutor.styles.map(s => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✔</span>
                <span className="text-sm text-gray-700">{t.styles[s]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-3xl shadow-md p-4 mb-6 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">💬 {t.reviewSection}</h3>
          <div className="space-y-3">
            {tutor.reviews.map((r, i) => (
              <div key={i} className="bg-pink-50 rounded-2xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center text-xs text-rose-600 font-bold">
                    {r.name[0]}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{r.name}</span>
                  <StarRating rating={r.rating} />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white/95 backdrop-blur-md border-t border-pink-100 px-4 py-3 z-40">
        <button
          onClick={onBook}
          className="w-full bg-gradient-to-r from-rose-500 to-pink-400 text-white font-bold py-4 rounded-2xl shadow-lg text-base hover:opacity-90 transition-opacity"
        >
          💕 {t.bookNow}
        </button>
      </div>
    </div>
  );
};

// ==================== SCREEN 3: BOOKING ====================
const BookingScreen = ({ t, lang, tutor, onBack, onConfirm }) => {
  const [lessonType, setLessonType] = useState("online");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const times = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "18:00", "19:00", "20:00"];
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i + 1);
    return d;
  });

  const onlineCourses = lang === "ja"
    ? [{ key: "20min", label: "20分コース", price: "¥2,500" }, { key: "30min", label: "30分コース", price: "¥3,500" }, { key: "60min", label: "60分コース", price: "¥6,000" }]
    : [{ key: "20min", label: "20분 코스", price: "¥2,500" }, { key: "30min", label: "30분 코스", price: "¥3,500" }, { key: "60min", label: "60분 코스", price: "¥6,000" }];
  const offlineCourses = lang === "ja"
    ? [{ key: "off20", label: "20分コース", price: "¥4,500" }, { key: "off30", label: "30分コース", price: "¥6,000" }, { key: "off60", label: "60分コース", price: "¥11,000" }]
    : [{ key: "off20", label: "20분 코스", price: "¥4,500" }, { key: "off30", label: "30분 코스", price: "¥6,000" }, { key: "off60", label: "60분 코스", price: "¥11,000" }];

  const courses = lessonType === "online" ? onlineCourses : offlineCourses;
  const dayNames = lang === "ja" ? ["日", "月", "火", "水", "木", "金", "土"] : ["일", "월", "화", "수", "목", "금", "토"];

  const canConfirm = selectedDate !== null && selectedTime !== null && selectedCourse !== null;

  return (
    <div className="pb-32">
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 px-4 pt-4 pb-6">
        <button onClick={onBack} className="mb-3 flex items-center gap-1 text-gray-600 text-sm font-medium">
          ← {lang === "ja" ? "戻る" : "뒤로"}
        </button>
        <h2 className="text-xl font-bold text-gray-800">
          {lang === "ja" ? `${tutor.nameJp}先生の予約` : `${tutor.nameKr} 선생님 예약`}
        </h2>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Lesson Type Toggle */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">① {t.selectLesson}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => { setLessonType("online"); setSelectedCourse(null); }}
              className={`flex-1 py-3 rounded-2xl text-sm font-semibold transition-all ${lessonType === "online" ? "bg-rose-500 text-white shadow" : "bg-gray-100 text-gray-600"}`}
            >
              💻 {t.online}
            </button>
            <button
              onClick={() => { setLessonType("offline"); setSelectedCourse(null); }}
              className={`flex-1 py-3 rounded-2xl text-sm font-semibold transition-all ${lessonType === "offline" ? "bg-rose-500 text-white shadow" : "bg-gray-100 text-gray-600"}`}
            >
              🏠 {t.offline}
            </button>
          </div>
        </div>

        {/* Course Selection */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">② {t.selectCourse}</h3>
          <div className="space-y-2">
            {courses.map(c => (
              <button
                key={c.key}
                onClick={() => setSelectedCourse(c.key)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border-2 transition-all ${selectedCourse === c.key ? "border-rose-400 bg-rose-50" : "border-gray-100 bg-gray-50"}`}
              >
                <span className="text-sm font-medium text-gray-700">{c.label}</span>
                <span className={`font-bold ${selectedCourse === c.key ? "text-rose-500" : "text-gray-500"}`}>{c.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">③ {t.selectDate}</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((d, i) => (
              <button
                key={i}
                onClick={() => setSelectedDate(i)}
                className={`flex-shrink-0 w-12 flex flex-col items-center py-2 rounded-2xl border-2 transition-all ${selectedDate === i ? "border-rose-400 bg-rose-50" : "border-gray-100"}`}
              >
                <span className="text-xs text-gray-500">{dayNames[d.getDay()]}</span>
                <span className={`text-sm font-bold ${selectedDate === i ? "text-rose-500" : "text-gray-700"}`}>{d.getDate()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">④ {t.selectTime}</h3>
          <div className="grid grid-cols-3 gap-2">
            {times.map(tm => (
              <button
                key={tm}
                onClick={() => setSelectedTime(tm)}
                className={`py-2 rounded-2xl border-2 text-sm font-medium transition-all ${selectedTime === tm ? "border-rose-400 bg-rose-50 text-rose-600" : "border-gray-100 text-gray-700"}`}
              >
                {tm}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white/95 backdrop-blur-md border-t border-pink-100 px-4 py-3 z-40">
        <button
          onClick={canConfirm ? onConfirm : undefined}
          className={`w-full font-bold py-4 rounded-2xl shadow-lg text-base transition-opacity ${canConfirm ? "bg-gradient-to-r from-rose-500 to-pink-400 text-white hover:opacity-90" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          {lang === "ja" ? "次へ進む →" : "다음으로 →"}
        </button>
      </div>
    </div>
  );
};

// ==================== SCREEN 4: CONFIRM ====================
const ConfirmScreen = ({ t, lang, tutor, onBack, onComplete }) => (
  <div className="pb-32">
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 px-4 pt-4 pb-6">
      <button onClick={onBack} className="mb-3 flex items-center gap-1 text-gray-600 text-sm font-medium">
        ← {lang === "ja" ? "戻る" : "뒤로"}
      </button>
      <h2 className="text-xl font-bold text-gray-800">{t.confirmTitle}</h2>
    </div>

    <div className="px-4 py-4 space-y-4">
      {/* Tutor Summary */}
      <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
        <div className="flex items-center gap-3">
          <div className={`w-14 h-14 ${tutor.avatarBg} rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
            {tutor.avatar}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{lang === "ja" ? tutor.nameJp : tutor.nameKr}</h3>
            <p className="text-sm text-gray-500">{tutor.age}{t.fromAge} · {tutor.area}</p>
            <StarRating rating={tutor.rating} />
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
        <div className="space-y-3">
          {[
            { icon: "💻", label: t.lessonType, value: lang === "ja" ? "オンライン · 30分コース" : "온라인 · 30분 코스" },
            { icon: "📅", label: t.time, value: lang === "ja" ? "4月15日（火）15:00〜" : "4월 15일(화) 15:00~" },
            { icon: "💴", label: lang === "ja" ? "合計金額" : "총 금액", value: "¥3,500" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-sm text-gray-500">{item.label}</span>
              </div>
              <span className="text-sm font-semibold text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Checkpoints */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-4 border border-rose-100">
        <div className="space-y-2">
          {t.checkPoints.map((cp, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-green-500 font-bold text-lg">✔</span>
              <span className="text-sm text-gray-700">{cp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment method */}
      <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
        <h3 className="font-bold text-gray-800 mb-3">{lang === "ja" ? "お支払い方法" : "결제 방법"}</h3>
        <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
          <span className="text-2xl">💳</span>
          <div>
            <p className="text-sm font-medium text-gray-700">Visa **** 4242</p>
            <p className="text-xs text-gray-400">{lang === "ja" ? "登録済みカード" : "등록된 카드"}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Confirm Button */}
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white/95 backdrop-blur-md border-t border-pink-100 px-4 py-3 z-40">
      <button
        onClick={onComplete}
        className="w-full bg-gradient-to-r from-rose-500 to-pink-400 text-white font-bold py-4 rounded-2xl shadow-lg text-base hover:opacity-90 transition-opacity"
      >
        💕 {t.confirmBtn}
      </button>
    </div>
  </div>
);

// ==================== SCREEN 5: COMPLETE ====================
const CompleteScreen = ({ t, lang, tutor, onHome }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">
    <div className="text-center">
      <div className="text-7xl mb-6 animate-bounce">🎉</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.completeTitle}</h2>
      <p className="text-gray-500 text-sm mb-8">
        {lang === "ja" ? `${tutor.nameJp}先生のレッスンが予約されました` : `${tutor.nameKr} 선생님 레슨이 예약되었습니다`}
      </p>

      <div className="bg-white rounded-3xl shadow-md p-6 mb-8 text-left w-full max-w-xs mx-auto border border-pink-100">
        {t.completeNotes.map((note, i) => (
          <div key={i} className="flex items-start gap-2 mb-3 last:mb-0">
            <span className="text-blue-400 mt-0.5">·</span>
            <span className="text-sm text-gray-700">{note}</span>
          </div>
        ))}
      </div>

      <div className={`w-24 h-24 ${tutor.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-xl mx-auto mb-6`}>
        {tutor.avatar}
      </div>
      <p className="text-sm text-gray-500 mb-6">
        {lang === "ja" ? `また${tutor.nameJp}先生に会えるのが楽しみ！` : `또 ${tutor.nameKr} 선생님을 만나는 게 기대돼요!`}
      </p>

      <button
        onClick={onHome}
        className="bg-gradient-to-r from-rose-500 to-pink-400 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:opacity-90 transition-opacity"
      >
        {t.backToHome}
      </button>
    </div>
  </div>
);

// ==================== SCREEN 6: SIGNUP ====================
const SignupScreen = ({ t, lang }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="pb-24 px-4 pt-6">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">💕</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{t.signupTitle}</h2>
        <p className="text-gray-400 text-sm">{lang === "ja" ? "無料で始めよう" : "무료로 시작해요"}</p>
      </div>

      {/* Social Login */}
      <div className="space-y-3 mb-6">
        <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-2xl py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          <span className="text-xl">🔵</span>
          {t.googleLogin}
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-black border-2 border-black rounded-2xl py-3.5 text-sm font-semibold text-white hover:bg-gray-900 transition-colors shadow-sm">
          <span className="text-xl">🍎</span>
          {t.appleLogin}
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">{t.orLogin}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <div className="space-y-4 mb-6">
        {[
          { label: t.name, value: name, setter: setName, type: "text", placeholder: lang === "ja" ? "山田 花子" : "홍길동" },
          { label: t.email, value: email, setter: setEmail, type: "email", placeholder: lang === "ja" ? "hanako@example.com" : "example@email.com" },
          { label: t.password, value: password, setter: setPassword, type: "password", placeholder: "••••••••" },
        ].map((field, i) => (
          <div key={i}>
            <label className="text-sm font-semibold text-gray-700 mb-1 block">{field.label}</label>
            <input
              type={field.type}
              value={field.value}
              onChange={e => field.setter(e.target.value)}
              placeholder={field.placeholder}
              className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-rose-300 transition-colors bg-gray-50"
            />
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-rose-500 to-pink-400 text-white font-bold py-4 rounded-2xl shadow-lg text-base hover:opacity-90 transition-opacity mb-4">
        {t.signupBtn}
      </button>

      <p className="text-center text-xs text-gray-400">
        {lang === "ja"
          ? "登録することでプライバシーポリシーと利用規約に同意します"
          : "가입하면 개인정보 처리방침 및 이용약관에 동의하는 것으로 간주됩니다"}
      </p>
    </div>
  );
};

// ==================== SCREEN 7: TUTOR REG ====================
const TutorRegScreen = ({ t, lang }) => {
  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const styleKeys = Object.keys(t.styles);

  const toggleStyle = (s) => setSelectedStyles(prev =>
    prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
  );

  return (
    <div className="pb-24 px-4 pt-6">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">👨</div>
        <h2 className="text-xl font-bold text-gray-800">{t.tutorRegTitle}</h2>
        <p className="text-gray-400 text-sm mt-1">
          {lang === "ja" ? "プロフィールを作成して生徒を見つけよう" : "프로필을 만들고 학생을 찾아봐요"}
        </p>
      </div>

      <div className="space-y-4">
        {/* Basic Info */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{lang === "ja" ? "基本情報" : "기본 정보"}</h3>
          <div className="space-y-3">
            {[
              { label: t.name, placeholder: lang === "ja" ? "キム・ミンジュン" : "김민준", type: "text" },
              { label: t.tutorAge, placeholder: "25", type: "number" },
              { label: t.tutorArea, placeholder: lang === "ja" ? "東京都新宿区" : "도쿄도 신주쿠구", type: "text" },
            ].map((f, i) => (
              <div key={i}>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-rose-300 bg-gray-50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Photo & Video */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{lang === "ja" ? "写真・動画" : "사진·영상"}</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-2 block">{t.tutorPhoto}</label>
              <div className="border-2 border-dashed border-pink-200 rounded-2xl py-6 flex flex-col items-center justify-center gap-2 bg-pink-50">
                <span className="text-3xl">📸</span>
                <span className="text-xs text-gray-500">{lang === "ja" ? "タップして写真を追加" : "탭하여 사진 추가"}</span>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-2 block">{t.tutorVideo}</label>
              <div className="border-2 border-dashed border-pink-200 rounded-2xl py-6 flex flex-col items-center justify-center gap-2 bg-pink-50">
                <span className="text-3xl">🎬</span>
                <span className="text-xs text-gray-500">{lang === "ja" ? "自己紹介動画をアップロード" : "자기소개 영상 업로드"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{lang === "ja" ? "自己紹介" : "자기소개"}</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">{t.tutorIntro}</label>
              <textarea
                placeholder={lang === "ja" ? "日本語で自己紹介を書いてください" : "일본어로 자기소개를 작성하세요"}
                rows={3}
                className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-rose-300 bg-gray-50 resize-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">{t.tutorIntroKr}</label>
              <textarea
                placeholder={lang === "ja" ? "韓国語でも自己紹介を書いてください" : "한국어로도 자기소개를 작성하세요"}
                rows={3}
                className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-rose-300 bg-gray-50 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Style Selection */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{t.tutorStyleTitle}</h3>
          <div className="flex flex-wrap gap-2">
            {styleKeys.map(s => (
              <button
                key={s}
                onClick={() => toggleStyle(s)}
                className={`text-sm px-4 py-2 rounded-2xl border-2 font-medium transition-all ${
                  selectedStyles.includes(s)
                    ? "bg-rose-500 text-white border-rose-500"
                    : "bg-gray-50 text-gray-600 border-gray-200"
                }`}
              >
                {t.styles[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Online/Offline */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{lang === "ja" ? "対応可能なレッスン" : "가능한 레슨"}</h3>
          <div className="space-y-2">
            {[
              { label: t.tutorOnline, value: online, setter: setOnline, icon: "💻" },
              { label: t.tutorOffline, value: offline, setter: setOffline, icon: "🏠" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
                <button
                  onClick={() => item.setter(!item.value)}
                  className={`w-12 h-6 rounded-full transition-all relative ${item.value ? "bg-rose-500" : "bg-gray-300"}`}
                >
                  <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${item.value ? "left-6" : "left-0.5"}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="bg-white rounded-3xl shadow-sm p-4 border border-pink-50">
          <h3 className="font-bold text-gray-800 mb-3">{t.tutorPrice}</h3>
          <div className="space-y-3">
            {[
              { label: lang === "ja" ? "オンライン (30分)" : "온라인 (30분)", placeholder: "3500" },
              { label: lang === "ja" ? "オフライン (30分)" : "오프라인 (30분)", placeholder: "6000" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <label className="text-sm text-gray-600 min-w-32">{f.label}</label>
                <div className="flex-1 flex items-center border-2 border-gray-100 rounded-2xl px-3 py-2 bg-gray-50">
                  <span className="text-gray-500 text-sm mr-1">¥</span>
                  <input
                    type="number"
                    placeholder={f.placeholder}
                    className="flex-1 outline-none text-sm bg-transparent text-gray-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-rose-500 to-pink-400 text-white font-bold py-4 rounded-2xl shadow-lg text-base hover:opacity-90 transition-opacity">
          👨 {t.tutorRegBtn}
        </button>
      </div>
    </div>
  );
};

// ==================== MAIN APP ====================
export default function BuddyBuddyApp() {
  const [lang, setLang] = useState("ja");
  const [screen, setScreen] = useState("home"); // home | detail | booking | confirm | complete | signup | tutorReg
  const [selectedTutor, setSelectedTutor] = useState(tutors[0]);
  const t = i18n[lang];

  const noNavScreens = ["complete"];
  const noHeaderScreens = ["complete"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-sm mx-auto relative bg-white min-h-screen shadow-xl overflow-hidden">
        {!noHeaderScreens.includes(screen) && (
          <Header lang={lang} setLang={setLang} t={t} onNav={setScreen} screen={screen} />
        )}

        <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 56px)" }}>
          {screen === "home" && (
            <HomeScreen t={t} lang={lang} onNav={setScreen} setSelectedTutor={setSelectedTutor} />
          )}
          {screen === "detail" && (
            <DetailScreen
              t={t} lang={lang} tutor={selectedTutor}
              onBack={() => setScreen("home")}
              onBook={() => setScreen("booking")}
            />
          )}
          {screen === "booking" && (
            <BookingScreen
              t={t} lang={lang} tutor={selectedTutor}
              onBack={() => setScreen("detail")}
              onConfirm={() => setScreen("confirm")}
            />
          )}
          {screen === "confirm" && (
            <ConfirmScreen
              t={t} lang={lang} tutor={selectedTutor}
              onBack={() => setScreen("booking")}
              onComplete={() => setScreen("complete")}
            />
          )}
          {screen === "complete" && (
            <CompleteScreen
              t={t} lang={lang} tutor={selectedTutor}
              onHome={() => setScreen("home")}
            />
          )}
          {screen === "signup" && (
            <SignupScreen t={t} lang={lang} />
          )}
          {screen === "tutorReg" && (
            <TutorRegScreen t={t} lang={lang} />
          )}
        </div>

        {!noNavScreens.includes(screen) && (
          <BottomNav t={t} onNav={setScreen} screen={screen} />
        )}
      </div>
    </div>
  );
}
