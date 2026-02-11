# 📖 馬太福音生命讀經 - 青少年追求網頁

專為香港召會中二學生設計的馬太福音生命讀經追求平台，每週半篇，免費使用。

## 🚀 功能特色

### 核心功能
- **每週讀經計劃**：系統化安排每週半篇生命讀經
- **進度追蹤**：視覺化顯示個人追求進度
- **筆記系統**：記錄個人亮光與應用
- **小組分享**：與同伴分享讀經心得
- **成就系統**：遊戲化激勵持續追求

### 技術特色
- **響應式設計**：完美適配手機、平板、電腦
- **繁體中文界面**：專為香港青少年優化
- **完全免費**：無廣告、無訂閱費用
- **離線支援**：可下載內容離線閱讀

## 🛠️ 技術棧

- **前端**：React 18 + Vite
- **UI框架**：Chakra UI
- **後端**：Supabase (免費層)
- **部署**：Vercel (免費CDN)
- **字體**：Noto Sans TC (繁體中文)

## 📁 項目結構

```
matthew-life-study/
├── src/
│   ├── components/     # React組件
│   │   ├── Header.jsx
│   │   ├── ProgressCard.jsx
│   │   ├── StudyCard.jsx
│   │   ├── NotesSection.jsx
│   │   ├── StudyPlan.jsx
│   │   └── Achievements.jsx
│   ├── pages/         # 頁面組件
│   ├── data/          # 靜態數據
│   │   └── studyContent.js
│   ├── styles/        # 樣式文件
│   │   ├── theme.js
│   │   └── global.css
│   ├── utils/         # 工具函數
│   ├── App.jsx        # 主應用
│   └── main.jsx       # 入口文件
├── public/            # 靜態資源
└── package.json       # 依賴配置
```

## 🚀 快速開始

### 本地開發
```bash
# 克隆項目
git clone <repository-url>
cd matthew-life-study

# 安裝依賴
npm install

# 啟動開發服務器
npm run dev
```

訪問 http://localhost:3000 查看應用。

### 生產部署
```bash
# 構建項目
npm run build

# 預覽生產版本
npm run preview
```

## 📱 響應式設計

- **手機** (≤ 640px)：單欄布局，優化觸控體驗
- **平板** (641px-1024px)：適應性布局
- **電腦** (≥ 1025px)：雙欄布局，最大化信息密度

## 🎨 設計系統

### 色彩方案
- **主色**：`#3B82F6` (藍色 - 屬天)
- **輔助色**：`#10B981` (綠色 - 生命)
- **強調色**：`#F59E0B` (橙色 - 活力)
- **中性色**：灰度系統

### 字體
- **主要字體**：Noto Sans TC (繁體中文)
- **備用字體**：系統默認無襯線字體

## 📊 數據結構

### 讀經內容
```javascript
{
  id: 1,
  week: 1,
  title: '基督的家譜與出生',
  scripture: '馬太福音1:1-17',
  content: {
    highlights: [],      // 生命讀經要點
    questions: [],       // 思考問題
    recoveryVersion: '', // 恢復本經文
    application: ''      // 應用提醒
  }
}
```

### 用戶進度
```javascript
{
  currentWeek: 4,
  overallProgress: 60,
  streak: 28,           // 連續追求天數
  completedWeeks: 3,
  notes: []             // 個人筆記
}
```

## 🔧 環境配置

### Supabase 配置
1. 創建 Supabase 項目
2. 獲取 API 金鑰
3. 配置環境變量：
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Vercel 部署
1. 連接 GitHub 倉庫
2. 配置環境變量
3. 自動部署

## 📈 開發路線圖

### 第一階段 (已完成)
- [x] 基礎讀經界面
- [x] 進度追蹤系統
- [x] 筆記功能
- [x] 響應式設計

### 第二階段 (進行中)
- [ ] 用戶認證系統
- [ ] 數據持久化 (Supabase)
- [ ] 小組分享功能
- [ ] 成就系統

### 第三階段 (規劃中)
- [ ] 教師管理後台
- [ ] 數據分析報告
- [ ] 音頻講解集成
- [ ] 移動應用 (React Native)

## 🤝 貢獻指南

1. Fork 本項目
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 許可證

本項目採用 MIT 許可證 - 查看 [LICENSE](LICENSE) 文件了解詳情。

## 🙏 致謝

- 李常受弟兄的《生命讀經》
- 香港召會青少年追求者
- 所有貢獻者和使用者

## 📞 聯繫方式

如有問題或建議，請通過以下方式聯繫：
- 項目 Issues：提交問題報告
- 郵件：聯絡項目維護者

---

**願主祝福這個平台，幫助更多青少年深入追求主的話語！** 🙏