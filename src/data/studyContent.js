// 馬太福音生命讀經內容
export const studyWeeks = [
  {
    id: 1,
    week: 1,
    title: '基督的家譜與出生',
    scripture: '馬太福音1:1-17',
    duration: '第1週',
    completed: true,
    current: false,
    content: {
      highlights: [
        '基督的家譜顯示祂是亞伯拉罕的後裔，大衛的子孫',
        '家譜中的五個女人顯明神的恩典超越傳統',
        '基督的出生應驗舊約的預言'
      ],
      questions: [
        '基督的家譜對我們今天的基督徒有什麼意義？',
        '從家譜中的五個女人，你看到神怎樣的性情？',
        '如何將基督的出生與你的日常生活連結？'
      ],
      recoveryVersion: '「亞伯拉罕生以撒，以撒生雅各，雅各生猶大和他的弟兄們...」（馬太福音1:2 恢復本）',
      application: '本週我們要學習：神的計劃超越人的軟弱，祂使用不完美的人成就祂完美的旨意。'
    }
  },
  {
    id: 2,
    week: 2,
    title: '基督的幼年與受浸',
    scripture: '馬太福音1:18-2:23',
    duration: '第2週',
    completed: true,
    current: false,
    content: {
      highlights: [
        '基督由聖靈成孕，應驗以賽亞的預言',
        '東方博士的朝拜顯明基督是萬民的救主',
        '逃往埃及應驗「我從埃及召出我的兒子來」'
      ],
      questions: [
        '基督由聖靈成孕對我們的信仰有什麼重要性？',
        '從東方博士的朝拜，你學到什麼關於敬拜的功課？',
        '基督幼年的經歷如何顯明神的保護？'
      ],
      recoveryVersion: '「看哪，必有童女懷孕生子，人要稱祂的名為以馬內利。」（馬太福音1:23 恢復本）',
      application: '學習順服神的帶領，即使在困難中仍相信神的保護和計劃。'
    }
  },
  {
    id: 3,
    week: 3,
    title: '基督的受試與開始職事',
    scripture: '馬太福音3:1-4:25',
    duration: '第3週',
    completed: true,
    current: false,
    content: {
      highlights: [
        '施浸約翰預備主的道路',
        '基督受浸顯明三一神的同在',
        '基督勝過撒但的試探'
      ],
      questions: [
        '施浸約翰的事奉對我們有什麼榜樣？',
        '基督受浸時，三一神如何顯明？',
        '從基督勝過試探，我們學到什麼得勝的秘訣？'
      ],
      recoveryVersion: '「這是我的愛子，我所喜悅的。」（馬太福音3:17 恢復本）',
      application: '靠著神的話和聖靈的能力，我們也能勝過生活中的試探。'
    }
  },
  {
    id: 4,
    week: 4,
    title: '山上教訓（一）－八福',
    scripture: '馬太福音5:1-26',
    duration: '第4週',
    completed: false,
    current: true,
    content: {
      highlights: [
        '八福揭示國度子民的品格',
        '虛心的人有福了，因為天國是他們的',
        '哀慟的人有福了，因為他們必得安慰'
      ],
      questions: [
        '八福中哪一福對你最有挑戰？為什麼？',
        '如何在學校生活中活出「使人和睦」的見證？',
        '「飢渴慕義」對青少年追求者是什麼意思？'
      ],
      recoveryVersion: '「虛心的人有福了，因為諸天的國是他們的。」（馬太福音5:3 恢復本）',
      application: '追求國度的品格，在學校、家庭中活出屬天的見證。'
    }
  },
  {
    id: 5,
    week: 5,
    title: '山上教訓（二）－鹽與光',
    scripture: '馬太福音5:27-48',
    duration: '第5週',
    completed: false,
    current: false,
    content: {
      highlights: [
        '你們是世上的鹽，是世上的光',
        '論到姦淫、起誓、報復的教訓',
        '要愛你們的仇敵，為那逼迫你們的禱告'
      ],
      questions: [
        '如何在學校作「鹽」作「光」？',
        '基督對姦淫的教訓對青少年有什麼提醒？',
        '愛仇敵的功課如何實際應用？'
      ],
      recoveryVersion: '「你們是世上的鹽...你們是世上的光。」（馬太福音5:13-14 恢復本）',
      application: '在校園中發揮正面的影響力，活出與世人不同的生命。'
    }
  },
  {
    id: 6,
    week: 6,
    title: '山上教訓（三）－禱告與財寶',
    scripture: '馬太福音6:1-34',
    duration: '第6週',
    completed: false,
    current: false,
    content: {
      highlights: [
        '主禱文的教導',
        '論到禁食和積攢財寶',
        '不要為生命憂慮'
      ],
      questions: [
        '主禱文中哪一部分對你最有幫助？',
        '「積攢財寶在天上」對青少年意味著什麼？',
        '如何實踐「不要憂慮」的教導？'
      ],
      recoveryVersion: '「所以你們要這樣禱告：我們在諸天之上的父...」（馬太福音6:9 恢復本）',
      application: '學習正確的禱告生活，並將目光定睛在永恆的事物上。'
    }
  }
]

// 用戶進度數據
export const userProgress = {
  currentWeek: 4,
  overallProgress: 60,
  streak: 28, // 連續追求天數
  completedWeeks: 3,
  totalWeeks: 6,
  lastStudyDate: '2026-02-10',
  notes: [
    {
      id: 1,
      weekId: 4,
      content: '今天讀到八福，看到國度子民需要有與世人不同的品格，很受提醒！',
      date: '2026-02-10',
      tags: ['亮光', '應用']
    },
    {
      id: 2,
      weekId: 3,
      content: '基督勝過試探的榜樣讓我學到要依靠神的話語。',
      date: '2026-02-03',
      tags: ['學習']
    }
  ]
}

// 成就系統
export const achievements = [
  {
    id: 1,
    name: '初學者',
    description: '完成第一週讀經',
    icon: '🎯',
    unlocked: true,
    date: '2026-01-20'
  },
  {
    id: 2,
    name: '忠心追求者',
    description: '連續追求4週',
    icon: '🏆',
    unlocked: true,
    date: '2026-02-10'
  },
  {
    id: 3,
    name: '深度思考者',
    description: '寫下10篇筆記',
    icon: '💡',
    unlocked: false,
    progress: 2,
    target: 10
  },
  {
    id: 4,
    name: '分享見證者',
    description: '分享5次亮光',
    icon: '📢',
    unlocked: false,
    progress: 1,
    target: 5
  }
]

// 小組分享
export const groupShares = [
  {
    id: 1,
    user: '張小明',
    week: 4,
    content: '八福中的「使人和睦」提醒我要在同學間作和平的使者。',
    likes: 5,
    date: '2026-02-10',
    avatar: '👦'
  },
  {
    id: 2,
    user: '李美美',
    week: 3,
    content: '基督受試探時用經文回應，我要更多背誦神的話！',
    likes: 8,
    date: '2026-02-09',
    avatar: '👧'
  },
  {
    id: 3,
    user: '王大同',
    week: 2,
    content: '東方博士不遠千里朝拜基督，我要學習這樣的敬拜態度。',
    likes: 3,
    date: '2026-02-08',
    avatar: '🧑'
  }
]