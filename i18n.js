(function () {
  const languages = [
    ["zh-CN", "简体中文", "语言"],
    ["zh-Hant", "繁體中文", "語言"],
    ["en", "English", "Language"],
    ["ja", "日本語", "言語"],
    ["ko", "한국어", "언어"],
    ["es", "Español", "Idioma"],
    ["fr", "Français", "Langue"],
    ["de", "Deutsch", "Sprache"],
    ["pt-BR", "Português", "Idioma"],
    ["ru", "Русский", "Язык"]
  ];

  const page = document.body.dataset.page || "index";
  const contentRoot = document.getElementById("localizedContent");
  const select = document.getElementById("languageSelect");
  const label = document.getElementById("languageLabel");
  const storageKey = "arkflow-legal-language";
  const defaultLang = "zh-CN";
  const langCodes = languages.map(([code]) => code);

  const data = {
    "zh-CN": {
      common: {
        brand: "ArkFlow / 长流",
        updated: "最后更新：2026 年 7 月 3 日",
        authority: "翻译仅为方便阅读；如不同语言版本存在差异，以简体中文版本为准。",
        home: "法律与支持首页",
        privacy: "隐私政策",
        terms: "用户协议",
        support: "技术支持"
      },
      index: {
        title: "法律与支持",
        body: "这里提供 ArkFlow 的隐私政策、用户协议和技术支持入口。",
        links: [["privacy.html", "隐私政策"], ["terms.html", "用户协议"], ["support.html", "技术支持"]]
      },
      privacy: {
        title: "隐私政策",
        intro: [
          "ArkFlow 是一个本地优先的个人资产管理 App。当前版本不提供 ArkFlow 账号系统，不运营用于保存用户资产数据的 ArkFlow 服务器，也不会把你的账户、截图、资产金额或 OCR 结果上传到 ArkFlow 服务器。App 会在你同意后使用匿名产品分析，帮助我们理解功能使用情况并改进体验。"
        ],
        sections: [
          { h: "我们处理哪些数据", p: ["你在 App 内主动录入或生成的数据会保存在你的设备本地，包括但不限于："], l: ["账户名称、账户分类、余额、负债、信用卡账单字段、还款日和备注。", "资产快照、循环收支、本位币、汇率、提醒偏好和隐私模式设置。", "你选择的账户 logo，包括 App Store 搜索后选用的图标，或你从相册上传并裁剪的图片。", "截图识别结果。截图识别默认在设备本地完成，识别结果需要你确认后才会保存。"] },
          { h: "哪些情况下会访问网络", p: ["当前版本的核心资产记录可以在不登录账号、不连接银行的情况下使用。以下功能会访问 Apple、PostHog 或你主动选择的外部服务："], l: ["匿名产品分析：在你首次启动时同意，或之后在设置中开启“匿名使用数据”后，ArkFlow 会通过 PostHog 发送手动定义的产品交互事件和匿名分群属性，用于了解功能使用、漏斗转化和稳定性。分析数据可能包括事件名称、入口类型、结果状态、次数上限、App 版本、语言、本位币、Pro 状态、安装月份和非内容设置偏好；不会包含资产金额、账户名称、银行/机构、卡号/尾号/CVV/有效期、卡片昵称、截图、OCR 原文、备注、文件名、文件路径或备份内容。你可以随时在 App 设置中关闭发送，关闭后将停止发送新的分析数据。", "内购和订阅：购买、恢复购买、订阅状态和退款/撤销状态由 Apple App Store 和 StoreKit 处理。ArkFlow 不接触你的银行卡号、支付账号或完整付款凭证。", "iCloud Drive 备份与快照同步：当 Pro 用户主动上传、拉取或开启自动同步时，App 会把 ArkFlow 数据导出为 `.arkflowbackup` 文件并存入你自己的 iCloud Drive 容器，或从该容器读取备份。该文件由 Apple iCloud 提供存储和设备间传输，ArkFlow 不运营用于保存这些备份的服务器，也无法访问你的 Apple ID 或 iCloud 账户。", "App Store 图标搜索：当你主动使用“App Store 搜索添加”账户 logo 时，App 会把你输入的搜索关键词和所选商店地区发送到 Apple 的 iTunes Search API，并从 Apple 返回的图标地址下载你选择的图标。请避免把不必要的个人敏感信息作为搜索关键词。", "技术支持：如果你通过邮件或支持页面联系我们，你主动提供的邮箱地址、问题描述、截图或诊断信息会用于处理你的支持请求。"] },
          { h: "照片与截图", p: ["ArkFlow 只会在你主动选择图片时读取相关图片。你上传的账户 logo 和卡面图片会保存在设备本地，不会上传到 ArkFlow 服务器。iOS 的照片选择器和权限弹窗由系统提供。"] },
          { h: "本地通知", p: ["ArkFlow 可以使用本地通知提醒你账单日、还款日或需要更新数据的时间。通知由你的设备本地排程。你可以在系统设置中关闭通知权限。"] },
          { h: "内购、订阅和 Pro 状态", p: ["ArkFlow Pro 的购买和订阅由 Apple 处理。App 会使用 StoreKit 读取商品信息、发起购买、恢复购买，并根据 Apple 返回的有效交易状态判断 Pro 权益是否可用。价格、订阅周期、续订、取消和退款规则以 Apple 的购买界面、App Store 账户设置和 Apple 政策为准。"] },
          { h: "第三方图标和本地上传内容", p: ["第三方 App 名称、图标、商标和相关素材归各自权利人所有。ArkFlow 的 App Store 图标搜索功能仅用于让你在本机选择一个账户视觉标识，不代表 ArkFlow 与相关 App、开发者或商标权利人存在关联、授权、赞助或背书关系。你也可以随时恢复默认图标或使用自己有权使用的本地图片。"] },
          { h: "我们不会做的事", l: ["不会要求你注册 ArkFlow 账号才能使用当前本地核心功能。", "不会自动连接银行、券商或支付账户。", "不会出售你的个人资产数据。", "不会在当前版本中把你的资产数据上传到 ArkFlow 服务器进行集中存储。"] },
          { h: "数据删除和撤回", p: ["你可以在 App 内删除账户、替换或清除账户 logo，也可以在设置中删除 ArkFlow 保存在 iCloud Drive 容器里的备份文件。卸载 App 通常会删除 App 沙盒内的本地数据，但不会必然删除你已存入 iCloud Drive 的备份；iOS 系统备份、设备迁移和 iCloud 设置可能影响数据保留与恢复。你也可以在 App 设置中关闭“匿名使用数据”，撤回后 ArkFlow 将停止发送新的分析事件。"] },
          { h: "政策更新", p: ["如果未来 ArkFlow 增加第三方 AI 识别、账号系统、实时云端同步或其他会改变数据处理方式的功能，我们会在上线前更新本政策，并在必要时请求你的同意。"] },
          { h: "联系我们", p: ["如有隐私问题，请通过技术支持页面联系我们。"] }
        ],
        footer: [["index.html", "法律与支持首页"], ["terms.html", "用户协议"]]
      },
      terms: {
        title: "用户协议",
        intro: ["欢迎使用 ArkFlow。使用 ArkFlow 前，你需要同意本用户协议以及我们的隐私政策。如果你不同意，请停止使用本 App。"],
        sections: [
          { h: "服务性质", p: ["ArkFlow 是一个本地优先的个人资产记录和自由度分析工具。它帮助你整理资产、负债、现金流、还款提醒和自由画像，但不提供银行、券商、会计、税务、法律或投资顾问服务。App 内的分析和提示仅供个人记录与参考，不构成投资建议、收益承诺或财务决策依据。"] },
          { h: "你的数据和责任", p: ["你负责确保在 App 中录入、上传或选择的内容真实、合法，并且你有权使用。你应自行备份重要数据。当前版本以设备本地保存为主，卸载 App、清除设备、系统故障或备份恢复失败都可能导致本地数据丢失。"] },
          { h: "匿名使用数据", p: ["你可以同意 ArkFlow 发送匿名使用数据，用于改进产品体验、判断功能是否有效和排查漏斗问题。该数据不应包含资产金额、账户名称、截图、OCR 原文、卡号、备注或备份内容。你可以随时在 App 设置中关闭发送匿名使用数据，关闭后不影响本地核心功能。"] },
          { h: "截图识别和手动确认", p: ["ArkFlow 的 OCR 识别用于降低录入成本。识别结果可能不完整或不准确，保存前必须由你确认和编辑。你应自行核对账户名称、金额、还款日、账单日、币种和是否纳入净资产统计等关键信息。"] },
          { h: "ArkFlow Pro、内购和订阅", p: ["ArkFlow 可能通过 Apple App Store 提供 Pro 买断、月度订阅或年度订阅。具体可购买项目、价格、地区可用性、试用或优惠信息，以 App 内 StoreKit 商品展示和 Apple 购买界面为准。"], l: ["自动续期订阅会在每个订阅周期结束时自动续订，直到你在 Apple 账户中取消。", "订阅费用由 Apple 向你的 Apple ID 账户收取。", "你可以在 iOS 设置或 App Store 的订阅管理页面查看、取消或管理订阅。", "已购买项目可在 App 内使用“恢复购买”恢复。", "退款、撤销、账单问题和支付方式由 Apple 处理。退款或订阅过期后，Pro 权益可能被移除。"] },
          { h: "Pro 功能边界", p: ["当前 Pro 主要用于解锁外币账户、本位币切换和卡面自定义等高阶能力。基础资产记录、手动录入、OCR 确认后保存、隐私遮罩和基础提醒等能力不应被理解为仅限 Pro，除非 App 内后续版本明确调整并在购买前说明。"] },
          { h: "第三方 App 图标、商标和用户上传图片", p: ["ArkFlow 允许你通过 App Store 搜索选择第三方 App 图标，或从相册上传图片，用作本机账户 logo。第三方 App 名称、图标、商标和相关素材归各自权利人所有。ArkFlow 不声称拥有这些素材，也不表示与相关 App、开发者、商标权利人或 Apple 存在关联、授权、赞助或背书关系。", "该功能仅用于个人、本地、非公开的账户视觉标识。你不得将第三方图标或他人素材用于违法、误导、侵权、公开推广或商业混淆用途。若权利人、平台规则或法律要求限制相关使用，ArkFlow 可能调整、下线或限制该功能。你可以随时恢复默认图标或删除自定义 logo。"] },
          { h: "知识产权", p: ["ArkFlow 的产品名称、界面、代码、文案和原创素材受相关法律保护。除非获得许可，你不得复制、反向工程、出售、转授权或以其他方式滥用 ArkFlow 的内容和服务。"] },
          { h: "禁止行为", l: ["不得使用 ArkFlow 进行违法、欺诈、侵权或误导性活动。", "不得试图绕过内购、权限、订阅或安全机制。", "不得上传或使用你无权使用的图片、商标或其他内容。", "不得把 ArkFlow 的分析结果包装成专业投资、税务、法律或会计意见。"] },
          { h: "免责声明和责任限制", p: ["ArkFlow 会努力保持功能稳定，但不保证任何识别、计算、提醒、汇率、订阅状态或分析结果完全无误。你应自行核对关键财务信息，并对自己的记录、操作和决策负责。在法律允许的范围内，ArkFlow 不对因使用或无法使用本 App 导致的间接损失、数据丢失、利润损失或其他后果承担责任。"] },
          { h: "协议更新", p: ["我们可能根据产品、法律或平台规则变化更新本协议。重大变化会在合理方式下提示。继续使用 ArkFlow 表示你接受更新后的协议。"] },
          { h: "联系我们", p: ["如有协议、购买或技术支持问题，请访问技术支持页面。"] }
        ],
        footer: [["index.html", "法律与支持首页"], ["privacy.html", "隐私政策"]]
      },
      support: {
        title: "技术支持",
        intro: ["如果你在使用 ArkFlow 时遇到问题，可以通过邮件联系我们。"],
        emailLabel: "支持邮箱：",
        emailHelp: "发送支持请求时，请尽量说明设备型号、iOS 版本、App 版本、问题步骤和是否可以稳定复现。除非必要，请不要发送包含真实资产金额、银行卡号、完整账单或其他敏感信息的截图。",
        sections: [
          { h: "社区与更新", p: ["你也可以关注 ArkFlow 的小红书主页，了解产品更新、使用思路和社区内容。小红书主页适合交流和关注动态；涉及隐私、购买、订阅、退款或具体故障的支持请求，请优先通过邮箱联系。"], links: [["https://www.xiaohongshu.com/user/profile/671fced8000000001d033b1c", "访问小红书主页"]] },
          { h: "购买和订阅问题", p: ["ArkFlow Pro 的购买、订阅、恢复购买和退款由 Apple App Store 处理。请先在 App 内尝试“恢复购买”。如需取消订阅或申请退款，请前往 Apple ID 的订阅管理或 Apple 官方退款流程。"] },
          { h: "隐私和数据问题", p: ["当前版本以本地存储为主，不提供 ArkFlow 账号系统。请阅读隐私政策了解数据如何在设备、本地通知、StoreKit 和 App Store 图标搜索中处理。"] },
          { h: "法律信息", links: [["privacy.html", "隐私政策"], ["terms.html", "用户协议"]] }
        ],
        footer: [["index.html", "法律与支持首页"]]
      }
    }
  };

  data["zh-Hant"] = cloneLang(data["zh-CN"], {
    common: { updated: "最後更新：2026 年 7 月 3 日", authority: "翻譯僅為方便閱讀；如不同語言版本存在差異，以簡體中文版本為準。", home: "法律與支援首頁", privacy: "隱私政策", terms: "使用者協議", support: "技術支援" },
    index: { title: "法律與支援", body: "這裡提供 ArkFlow 的隱私政策、使用者協議和技術支援入口。", links: [["privacy.html", "隱私政策"], ["terms.html", "使用者協議"], ["support.html", "技術支援"]] },
    privacy: { title: "隱私政策", intro: ["ArkFlow 是一個本地優先的個人資產管理 App。當前版本不提供 ArkFlow 帳號系統，不營運用於保存使用者資產資料的 ArkFlow 伺服器，也不會把你的帳戶、截圖、資產金額或 OCR 結果上傳到 ArkFlow 伺服器。"] },
    terms: { title: "使用者協議", intro: ["歡迎使用 ArkFlow。使用 ArkFlow 即表示你同意本使用者協議以及我們的隱私政策。如果你不同意，請停止使用本 App。"] },
    support: { title: "技術支援", intro: ["如果你在使用 ArkFlow 時遇到問題，可以透過電子郵件聯絡我們。"], emailLabel: "支援信箱：" }
  });

  data.en = {
    common: { brand: "ArkFlow / Changliu", updated: "Last updated: July 3, 2026", authority: "Translations are provided for convenience. If versions differ, the Simplified Chinese version controls.", home: "Legal & Support Home", privacy: "Privacy Policy", terms: "Terms of Use", support: "Support" },
    index: { title: "Legal & Support", body: "This site provides ArkFlow's Privacy Policy, Terms of Use, and support contact information.", links: [["privacy.html", "Privacy Policy"], ["terms.html", "Terms of Use"], ["support.html", "Support"]] },
    privacy: {
      title: "Privacy Policy",
      intro: ["ArkFlow is a local-first personal asset management app. The current version does not provide an ArkFlow account system, does not operate ArkFlow servers for storing your asset data, and does not upload your accounts, screenshots, asset amounts, or OCR results to ArkFlow servers. After you consent, the app uses anonymous product analytics to help us understand feature usage and improve the experience."],
      sections: [
        { h: "Data We Process", p: ["Data you enter or generate in the app is stored locally on your device, including:"], l: ["Account names, categories, balances, liabilities, credit card bill fields, repayment dates, and notes.", "Asset snapshots, recurring cashflows, base currency, exchange rates, reminder preferences, and privacy mode settings.", "Account logos you select, including icons chosen through App Store search or images you upload and crop from Photos.", "Screenshot recognition results. Recognition is performed locally by default and is saved only after you confirm it."] },
        { h: "When Network Access Is Used", p: ["Core asset recording works without an account login or bank connection. The following features may access Apple, PostHog, or services you choose:"], l: ["Anonymous product analytics: after you consent during first launch or enable Anonymous Usage Data in Settings, ArkFlow sends manually defined product interaction events and anonymous grouping properties through PostHog to understand feature usage, funnel conversion, and reliability. Analytics may include event names, entry points, result states, bounded counts, app version, language, base currency, Pro status, install month, and non-content settings preferences. It does not include asset amounts, account names, banks or institutions, card numbers, card tails, CVV, expiry dates, card nicknames, screenshots, OCR text, notes, file names, file paths, or backup contents. You can turn this off at any time in app Settings, which stops sending new analytics events.", "In-app purchases and subscriptions are handled by Apple App Store and StoreKit. ArkFlow does not access your card number, payment account, or full payment credentials.", "iCloud Drive backup and snapshot sync: when Pro users upload, pull, or enable automatic sync, the app exports ArkFlow data as a `.arkflowbackup` file and stores it in your own iCloud Drive container, or reads that backup from the same container. Apple iCloud provides the storage and transfer between your devices. ArkFlow does not operate servers for these backups and cannot access your Apple ID or iCloud account.", "App Store icon search sends your search keyword and selected storefront region to Apple's iTunes Search API and downloads the icon you choose from Apple's returned URL. Avoid entering unnecessary sensitive personal information as search terms.", "If you contact support by email or the support page, the email address, description, screenshots, or diagnostics you provide are used to handle your request."] },
        { h: "Photos and Screenshots", p: ["ArkFlow reads images only when you choose them. Uploaded account logos and card-face images are stored locally on your device and are not uploaded to ArkFlow servers. iOS provides the photo picker and permission prompts."] },
        { h: "Local Notifications", p: ["ArkFlow can schedule local notifications for statement dates, repayment dates, or data update reminders. Notifications are scheduled on your device. You can disable notification permission in system settings."] },
        { h: "Purchases, Subscriptions, and Pro Status", p: ["ArkFlow Pro purchases and subscriptions are handled by Apple. The app uses StoreKit to load products, start purchases, restore purchases, and determine Pro access from valid Apple transactions. Pricing, renewal, cancellation, and refund rules are governed by Apple's purchase sheet, App Store account settings, and Apple policies."] },
        { h: "Third-Party Icons and Uploaded Content", p: ["Third-party app names, icons, trademarks, and materials belong to their respective owners. App Store icon search only helps you choose a local visual identifier for an account on your device. It does not imply affiliation, authorization, sponsorship, or endorsement by the related app, developer, trademark owner, or Apple."] },
        { h: "What We Do Not Do", l: ["We do not require an ArkFlow account to use the current local core features.", "We do not automatically connect to banks, brokerages, or payment accounts.", "We do not sell your personal asset data.", "We do not upload your asset data to ArkFlow servers for centralized storage in the current version."] },
        { h: "Data Deletion and Withdrawal", p: ["You can delete accounts, replace or clear account logos, and delete ArkFlow backup files stored in your iCloud Drive container from Settings. Uninstalling the app normally removes data stored in its sandbox, but does not necessarily delete backups you already stored in iCloud Drive. iOS backups, device migration, and iCloud settings may affect retention and restoration. You can also turn off Anonymous Usage Data in app Settings. After withdrawal, ArkFlow stops sending new analytics events."] },
        { h: "Policy Updates", p: ["If ArkFlow later adds third-party AI recognition, accounts, real-time cloud sync, or other features that change data processing, we will update this policy before launch and request consent where required."] },
        { h: "Contact Us", p: ["For privacy questions, contact us through the support page."] }
      ],
      footer: [["index.html", "Legal & Support Home"], ["terms.html", "Terms of Use"]]
    },
    terms: {
      title: "Terms of Use",
      intro: ["Welcome to ArkFlow. Before using ArkFlow, you need to agree to these Terms of Use and our Privacy Policy. If you do not agree, please stop using the app."],
      sections: [
        { h: "Nature of the Service", p: ["ArkFlow is a local-first personal asset record and freedom analysis tool. It helps organize assets, liabilities, cashflow, repayment reminders, and a freedom profile. It does not provide banking, brokerage, accounting, tax, legal, or investment advisory services. In-app analysis is for personal reference and is not investment advice, a return promise, or a financial decision basis."] },
        { h: "Your Data and Responsibilities", p: ["You are responsible for ensuring that content you enter, upload, or select is accurate, lawful, and yours to use. You should back up important data. The current version stores data mainly on your device, so uninstalling the app, erasing the device, system failure, or backup restore failure may cause local data loss."] },
        { h: "Anonymous Usage Data", p: ["You may agree to let ArkFlow send anonymous usage data to improve the product experience, understand whether features are useful, and diagnose funnel issues. This data should not include asset amounts, account names, screenshots, OCR text, card numbers, notes, or backup contents. You can turn off Anonymous Usage Data at any time in app Settings without affecting local core features."] },
        { h: "Screenshot Recognition and Manual Confirmation", p: ["OCR reduces entry effort. Results may be incomplete or inaccurate and must be confirmed and edited by you before saving. You should verify account names, amounts, repayment dates, statement dates, currencies, and whether an account is included in net worth."] },
        { h: "ArkFlow Pro, Purchases, and Subscriptions", p: ["ArkFlow may offer Pro lifetime purchase, monthly subscription, or annual subscription through Apple App Store. Available products, prices, regional availability, trials, and offers are shown in the app through StoreKit and Apple's purchase sheet."], l: ["Auto-renewable subscriptions renew at the end of each period until canceled in your Apple account.", "Apple charges subscription fees to your Apple ID account.", "You can view, cancel, or manage subscriptions in iOS Settings or the App Store.", "Purchased items can be restored in the app with Restore Purchases.", "Refunds, revocations, billing issues, and payment methods are handled by Apple. Pro access may be removed after a refund or subscription expiration."] },
        { h: "Pro Feature Boundaries", p: ["Pro currently focuses on advanced capabilities such as foreign-currency accounts, base currency switching, and card-face customization. Basic asset recording, manual entry, confirmed OCR saving, privacy masking, and basic reminders should not be understood as Pro-only unless a future version clearly says so before purchase."] },
        { h: "Third-Party App Icons, Trademarks, and Uploaded Images", p: ["ArkFlow lets you choose third-party app icons through App Store search or upload images from Photos as local account logos. Third-party names, icons, trademarks, and materials belong to their owners. ArkFlow does not claim ownership or imply affiliation, authorization, sponsorship, or endorsement.", "This feature is only for personal, local, non-public account visual identification. Do not use third-party icons or others' materials for unlawful, misleading, infringing, public promotional, or commercially confusing purposes. ArkFlow may adjust or limit the feature if required by rights holders, platform rules, or law."] },
        { h: "Intellectual Property", p: ["ArkFlow's product name, interface, code, copy, and original materials are protected by law. Without permission, you may not copy, reverse engineer, sell, sublicense, or misuse ArkFlow content or services."] },
        { h: "Prohibited Conduct", l: ["Do not use ArkFlow for unlawful, fraudulent, infringing, or misleading activities.", "Do not attempt to bypass purchases, permissions, subscriptions, or security mechanisms.", "Do not upload or use images, trademarks, or other content you are not allowed to use.", "Do not present ArkFlow analysis as professional investment, tax, legal, or accounting advice."] },
        { h: "Disclaimer and Limitation of Liability", p: ["ArkFlow works to keep features stable but does not guarantee that recognition, calculations, reminders, exchange rates, subscription status, or analysis results are error-free. You should verify important financial information and are responsible for your records, actions, and decisions. To the extent permitted by law, ArkFlow is not liable for indirect loss, data loss, lost profits, or other consequences caused by using or being unable to use the app."] },
        { h: "Changes to These Terms", p: ["We may update these terms as the product, law, or platform rules change. Major changes will be communicated reasonably. Continued use of ArkFlow means you accept the updated terms."] },
        { h: "Contact Us", p: ["For questions about these terms, purchases, or technical support, visit the support page."] }
      ],
      footer: [["index.html", "Legal & Support Home"], ["privacy.html", "Privacy Policy"]]
    },
    support: {
      title: "Support",
      intro: ["If you have trouble using ArkFlow, you can contact us by email."],
      emailLabel: "Support email: ",
      emailHelp: "When sending a support request, please include your device model, iOS version, app version, steps to reproduce, and whether the issue is stable. Unless necessary, do not send screenshots containing real asset amounts, bank card numbers, full statements, or other sensitive information.",
      sections: [
        { h: "Community and Updates", p: ["You can also follow ArkFlow on Xiaohongshu for product updates, usage ideas, and community content. For privacy, purchase, subscription, refund, or specific technical issues, please prioritize email support."], links: [["https://www.xiaohongshu.com/user/profile/671fced8000000001d033b1c", "Visit Xiaohongshu profile"]] },
        { h: "Purchase and Subscription Issues", p: ["ArkFlow Pro purchases, subscriptions, restore purchases, and refunds are handled by Apple App Store. Try Restore Purchases in the app first. To cancel a subscription or request a refund, use Apple ID subscription management or Apple's refund process."] },
        { h: "Privacy and Data Questions", p: ["The current version is local-first and does not provide an ArkFlow account system. Read the Privacy Policy to learn how data is handled on device, by local notifications, StoreKit, and App Store icon search."] },
        { h: "Legal Information", links: [["privacy.html", "Privacy Policy"], ["terms.html", "Terms of Use"]] }
      ],
      footer: [["index.html", "Legal & Support Home"]]
    }
  };

  data.ja = translateFromEnglish("ja", {
    common: { brand: "ArkFlow / 長流", updated: "最終更新日：2026年7月3日", authority: "翻訳は読みやすさのために提供されています。内容に差異がある場合は簡体字中国語版が優先されます。", home: "法律・サポート ホーム", privacy: "プライバシーポリシー", terms: "利用規約", support: "サポート" },
    titles: ["法律・サポート", "プライバシーポリシー", "利用規約", "サポート"],
    indexBody: "ArkFlow のプライバシーポリシー、利用規約、サポート連絡先を掲載しています。",
    supportIntro: "ArkFlow の利用中に問題が発生した場合は、メールでお問い合わせください。",
    emailLabel: "サポートメール：",
    xhs: "小紅書プロフィールを見る"
  });

  data.ko = translateFromEnglish("ko", {
    common: { brand: "ArkFlow / 장류", updated: "마지막 업데이트: 2026년 7월 3일", authority: "번역은 편의를 위해 제공됩니다. 버전 간 차이가 있는 경우 간체 중국어 버전이 우선합니다.", home: "법률 및 지원 홈", privacy: "개인정보 처리방침", terms: "이용약관", support: "지원" },
    titles: ["법률 및 지원", "개인정보 처리방침", "이용약관", "지원"],
    indexBody: "이 사이트는 ArkFlow의 개인정보 처리방침, 이용약관, 지원 연락처를 제공합니다.",
    supportIntro: "ArkFlow 사용 중 문제가 있으면 이메일로 문의할 수 있습니다.",
    emailLabel: "지원 이메일: ",
    xhs: "샤오홍슈 프로필 방문"
  });

  data.es = translateFromEnglish("es", {
    common: { brand: "ArkFlow / Changliu", updated: "Última actualización: 3 de julio de 2026", authority: "Las traducciones se ofrecen para facilitar la lectura. Si existen diferencias, prevalece la versión en chino simplificado.", home: "Inicio legal y soporte", privacy: "Política de privacidad", terms: "Términos de uso", support: "Soporte" },
    titles: ["Legal y soporte", "Política de privacidad", "Términos de uso", "Soporte"],
    indexBody: "Este sitio proporciona la Política de privacidad, los Términos de uso y la información de soporte de ArkFlow.",
    supportIntro: "Si tienes problemas al usar ArkFlow, puedes contactarnos por correo electrónico.",
    emailLabel: "Correo de soporte: ",
    xhs: "Visitar perfil de Xiaohongshu"
  });

  data.fr = translateFromEnglish("fr", {
    common: { brand: "ArkFlow / Changliu", updated: "Dernière mise à jour : 3 juillet 2026", authority: "Les traductions sont fournies pour faciliter la lecture. En cas de divergence, la version en chinois simplifié prévaut.", home: "Accueil juridique et support", privacy: "Politique de confidentialité", terms: "Conditions d'utilisation", support: "Support" },
    titles: ["Juridique et support", "Politique de confidentialité", "Conditions d'utilisation", "Support"],
    indexBody: "Ce site fournit la politique de confidentialité, les conditions d'utilisation et les informations de support d'ArkFlow.",
    supportIntro: "Si vous rencontrez un problème avec ArkFlow, vous pouvez nous contacter par e-mail.",
    emailLabel: "E-mail de support : ",
    xhs: "Visiter le profil Xiaohongshu"
  });

  data.de = translateFromEnglish("de", {
    common: { brand: "ArkFlow / Changliu", updated: "Zuletzt aktualisiert: 3. Juli 2026", authority: "Übersetzungen dienen der besseren Lesbarkeit. Bei Abweichungen gilt die vereinfachte chinesische Version.", home: "Rechtliches & Support", privacy: "Datenschutzerklärung", terms: "Nutzungsbedingungen", support: "Support" },
    titles: ["Rechtliches & Support", "Datenschutzerklärung", "Nutzungsbedingungen", "Support"],
    indexBody: "Diese Website enthält die Datenschutzerklärung, Nutzungsbedingungen und Supportinformationen von ArkFlow.",
    supportIntro: "Wenn bei der Nutzung von ArkFlow ein Problem auftritt, können Sie uns per E-Mail kontaktieren.",
    emailLabel: "Support-E-Mail: ",
    xhs: "Xiaohongshu-Profil besuchen"
  });

  data["pt-BR"] = translateFromEnglish("pt-BR", {
    common: { brand: "ArkFlow / Changliu", updated: "Última atualização: 3 de julho de 2026", authority: "As traduções são fornecidas para conveniência. Em caso de diferença, prevalece a versão em chinês simplificado.", home: "Início jurídico e suporte", privacy: "Política de privacidade", terms: "Termos de uso", support: "Suporte" },
    titles: ["Jurídico e suporte", "Política de privacidade", "Termos de uso", "Suporte"],
    indexBody: "Este site fornece a Política de Privacidade, os Termos de Uso e as informações de suporte do ArkFlow.",
    supportIntro: "Se tiver problemas ao usar o ArkFlow, entre em contato por e-mail.",
    emailLabel: "E-mail de suporte: ",
    xhs: "Visitar perfil no Xiaohongshu"
  });

  data.ru = translateFromEnglish("ru", {
    common: { brand: "ArkFlow / Changliu", updated: "Последнее обновление: 3 июля 2026 г.", authority: "Переводы предоставлены для удобства. При расхождениях преимущественную силу имеет версия на упрощенном китайском языке.", home: "Юридическая информация и поддержка", privacy: "Политика конфиденциальности", terms: "Условия использования", support: "Поддержка" },
    titles: ["Юридическая информация и поддержка", "Политика конфиденциальности", "Условия использования", "Поддержка"],
    indexBody: "На этом сайте размещены Политика конфиденциальности ArkFlow, Условия использования и контактная информация поддержки.",
    supportIntro: "Если у вас возникли проблемы с ArkFlow, свяжитесь с нами по электронной почте.",
    emailLabel: "Email поддержки: ",
    xhs: "Открыть профиль Xiaohongshu"
  });

  applyCompactBodies({
    "zh-Hant": {
      privacyIntro: "ArkFlow 是一個本地優先的個人資產管理 App。當前版本不提供 ArkFlow 帳號系統，不營運用於保存使用者資產資料的 ArkFlow 伺服器，也不會把你的帳戶、截圖、資產金額或 OCR 結果上傳到 ArkFlow 伺服器。",
      termsIntro: "歡迎使用 ArkFlow。使用 ArkFlow 即表示你同意本使用者協議以及我們的隱私政策。如果你不同意，請停止使用本 App。",
      privacy: [
        "你在 App 內主動錄入或產生的資料會保存在本機，包括帳戶名稱、分類、餘額、負債、信用卡帳單欄位、還款日、備註、資產快照、循環收支、本位幣、匯率、提醒偏好、隱私模式設定、帳戶 logo 和截圖辨識結果。截圖辨識預設在裝置本機完成，必須經你確認後才會保存。",
        "核心資產記錄可以在不登入帳號、不連接銀行的情況下使用。內購、訂閱、恢復購買與退款/撤銷狀態由 Apple App Store 和 StoreKit 處理；Pro 使用者主動上傳、拉取或開啟自動同步時，ArkFlow 會把資料匯出為 `.arkflowbackup` 並存入你的 iCloud Drive 容器，或從該容器讀取備份；App Store 圖示搜尋會把搜尋關鍵字和商店地區傳送給 Apple 的 iTunes Search API；你透過郵件或支援頁主動提供的資訊會用於處理支援請求。",
        "ArkFlow 只會在你主動選擇圖片時讀取相關照片或截圖。你上傳的帳戶 logo 和卡面圖片會保存在裝置本機，不會上傳到 ArkFlow 伺服器。",
        "ArkFlow 可以使用本機通知提醒帳單日、還款日或更新資料。通知由你的裝置本機排程，你可以在系統設定中關閉通知權限。",
        "ArkFlow Pro 的購買和訂閱由 Apple 處理。App 使用 StoreKit 讀取商品、發起購買、恢復購買，並依 Apple 回傳的有效交易狀態判斷 Pro 權益是否可用。價格、續訂、取消和退款規則以 Apple 介面和政策為準。",
        "第三方 App 名稱、圖示、商標和相關素材歸各自權利人所有。App Store 圖示搜尋只用於在本機選擇帳戶視覺標識，不代表 ArkFlow 與相關 App、開發者、商標權利人或 Apple 存在關聯、授權、贊助或背書。",
        "我們不要求你註冊 ArkFlow 帳號才能使用目前的本機核心功能，不會自動連接銀行、券商或支付帳戶，不會出售你的個人資產資料，也不會在目前版本把你的資產資料上傳到 ArkFlow 伺服器集中存儲。",
        "你可以在 App 內刪除帳戶、替換或清除帳戶 logo，也可以在設定中刪除 ArkFlow 存在 iCloud Drive 容器裡的備份檔。卸載 App 通常會刪除 App 沙盒內的本機資料，但不一定刪除已存入 iCloud Drive 的備份；iOS 備份、裝置遷移和 iCloud 設定可能影響資料保留與恢復。",
        "如果未來 ArkFlow 增加第三方 AI 辨識、帳號系統、分析服務、即時雲端同步或其他會改變資料處理方式的功能，我們會在上線前更新本政策，並在必要時徵求你的同意。",
        "如有隱私問題，請透過技術支援頁面聯絡我們。"
      ],
      terms: [
        "ArkFlow 是本地優先的個人資產記錄與自由度分析工具，可協助整理資產、負債、現金流、還款提醒和自由画像，但不提供銀行、券商、會計、稅務、法律或投資顧問服務。App 內分析僅供個人記錄與參考，不構成投資建議、收益承諾或財務決策依據。",
        "你負責確保在 App 中錄入、上傳或選擇的內容真實、合法且有權使用，並應自行備份重要資料。目前版本主要保存在裝置本機，卸載 App、清除裝置、系統故障或備份恢復失敗都可能造成本機資料遺失。",
        "OCR 辨識用於降低錄入成本，結果可能不完整或不準確，保存前必須由你確認和編輯。請自行核對帳戶名稱、金額、還款日、帳單日、幣種以及是否納入淨資產統計等關鍵資訊。",
        "ArkFlow 可能透過 Apple App Store 提供 Pro 買斷、月度訂閱或年度訂閱。可購買項目、價格、地區可用性、試用或優惠資訊，以 App 內 StoreKit 商品展示和 Apple 購買介面為準。自動續期訂閱會持續續訂，直到你在 Apple 帳戶中取消；退款、帳單和付款方式由 Apple 處理。",
        "目前 Pro 主要解鎖外幣帳戶、本位幣切換和卡面自訂等高階能力。基礎資產記錄、手動錄入、OCR 確認後保存、隱私遮罩和基礎提醒不應被理解為僅限 Pro，除非未來版本在購買前明確說明。",
        "ArkFlow 允許你透過 App Store 搜尋選擇第三方 App 圖示，或從相簿上傳圖片作為本機帳戶 logo。相關名稱、圖示、商標和素材歸權利人所有，該功能僅用於個人、本機、非公開的帳戶視覺標識，不得用於違法、誤導、侵權、公開推廣或商業混淆用途。",
        "ArkFlow 的產品名稱、介面、程式碼、文案和原創素材受法律保護。未經許可，不得複製、反向工程、出售、轉授權或以其他方式濫用 ArkFlow 的內容和服務。",
        "不得使用 ArkFlow 從事違法、詐欺、侵權或誤導性活動；不得繞過內購、權限、訂閱或安全機制；不得上傳或使用無權使用的圖片、商標或其他內容；不得把 ArkFlow 分析結果包裝成專業投資、稅務、法律或會計意見。",
        "ArkFlow 會努力保持功能穩定，但不保證辨識、計算、提醒、匯率、訂閱狀態或分析結果完全無誤。你應自行核對關鍵財務資訊，並對自己的記錄、操作和決策負責。在法律允許範圍內，ArkFlow 不對間接損失、資料遺失、利潤損失或其他後果承擔責任。",
        "我們可能因產品、法律或平台規則變化更新本協議。重大變更會以合理方式提示。繼續使用 ArkFlow 表示你接受更新後的協議。",
        "如有協議、購買或技術支援問題，請訪問技術支援頁面。"
      ],
      support: [
        "你也可以關注 ArkFlow 的小紅書主頁，了解產品更新、使用思路和社群內容。小紅書適合交流和關注動態；涉及隱私、購買、訂閱、退款或具體故障的支援請求，請優先透過信箱聯絡。",
        "ArkFlow Pro 的購買、訂閱、恢復購買和退款由 Apple App Store 處理。請先在 App 內嘗試「恢復購買」。如需取消訂閱或申請退款，請前往 Apple ID 訂閱管理或 Apple 官方退款流程。",
        "目前版本以本機儲存為主，不提供 ArkFlow 帳號系統。請閱讀隱私政策了解資料如何在裝置、本機通知、StoreKit 和 App Store 圖示搜尋中處理。",
        "以下是法律資訊入口。"
      ],
      emailHelp: "發送支援請求時，請盡量說明裝置型號、iOS 版本、App 版本、問題步驟和是否可以穩定重現。除非必要，請不要發送包含真實資產金額、銀行卡號、完整帳單或其他敏感資訊的截圖。"
    },
    ja: {
      privacyIntro: "ArkFlow はローカル優先の個人資産管理アプリです。現在のバージョンでは ArkFlow アカウントシステムを提供せず、ユーザーの資産データを保存する ArkFlow サーバーも運営していません。口座、スクリーンショット、資産額、OCR 結果を ArkFlow サーバーへアップロードすることもありません。",
      termsIntro: "ArkFlow へようこそ。ArkFlow を利用することで、本利用規約およびプライバシーポリシーに同意したものとみなされます。同意しない場合は、本アプリの利用を停止してください。",
      privacy: [
        "アプリ内で入力または生成したデータは端末内に保存されます。これには、口座名、分類、残高、負債、クレジットカード請求項目、返済日、メモ、資産スナップショット、定期収支、基準通貨、為替レート、通知設定、プライバシーモード、口座ロゴ、スクリーンショット認識結果が含まれます。認識結果は原則として端末内で処理され、あなたが確認した後にのみ保存されます。",
        "中核となる資産記録機能は、アカウント登録や銀行接続なしで利用できます。アプリ内購入、サブスクリプション、購入の復元、返金または取消状態は Apple App Store と StoreKit が処理します。Pro ユーザーがアップロード、取得、自動同期を有効にすると、ArkFlow はデータを `.arkflowbackup` として書き出し、あなたの iCloud Drive コンテナに保存またはそこから読み取ります。App Store アイコン検索では、検索語とストア地域が Apple の iTunes Search API に送信されます。サポートへ送信した情報は、問い合わせ対応のために使用されます。",
        "ArkFlow は、あなたが明示的に選択した画像のみを読み取ります。アップロードした口座ロゴやカード画像は端末内に保存され、ArkFlow サーバーには送信されません。",
        "ArkFlow は請求日、返済日、データ更新のリマインダーとしてローカル通知を使用できます。通知は端末上でスケジュールされ、システム設定で無効にできます。",
        "ArkFlow Pro の購入とサブスクリプションは Apple が処理します。アプリは StoreKit を使用して商品情報の取得、購入、復元、有効な取引に基づく Pro 権限判定を行います。価格、更新、解約、返金は Apple の画面、App Store 設定、Apple のポリシーに従います。",
        "第三者アプリの名称、アイコン、商標、素材はそれぞれの権利者に帰属します。App Store アイコン検索は、端末上の口座識別用ビジュアルを選ぶための機能であり、関連アプリ、開発者、商標権者、Apple との提携、許諾、後援、推奨を意味しません。",
        "現在のローカル中核機能の利用に ArkFlow アカウント登録は求めません。銀行、証券、決済口座へ自動接続しません。個人資産データを販売せず、現在のバージョンでは資産データを ArkFlow サーバーへ集中保存しません。",
        "アプリ内で口座を削除したり、口座ロゴを置き換えまたは削除できます。設定から iCloud Drive コンテナ内の ArkFlow バックアップファイルも削除できます。アプリのアンインストールにより通常はローカルデータが削除されますが、iCloud Drive に保存済みのバックアップが必ず削除されるとは限りません。iOS バックアップ、端末移行、iCloud 設定は保持や復元に影響する場合があります。",
        "将来、第三者 AI 認識、アカウント機能、分析サービス、リアルタイムクラウド同期などデータ処理を変更する機能を追加する場合、公開前に本ポリシーを更新し、必要に応じて同意を求めます。",
        "プライバシーに関する質問は、サポートページからお問い合わせください。"
      ],
      terms: [
        "ArkFlow はローカル優先の個人資産記録および自由度分析ツールです。資産、負債、キャッシュフロー、返済リマインダー、自由プロフィールの整理を支援しますが、銀行、証券、会計、税務、法律、投資助言サービスは提供しません。アプリ内の分析は個人の参考情報であり、投資助言、収益保証、財務判断の根拠ではありません。",
        "アプリに入力、アップロード、選択する内容が正確で合法であり、使用権限があることはあなたの責任です。重要なデータは自分でバックアップしてください。現在のバージョンは主に端末内保存のため、アンインストール、端末消去、システム障害、バックアップ復元失敗によりローカルデータが失われる場合があります。",
        "OCR は入力負担を減らすための機能です。結果は不完全または不正確な場合があり、保存前にあなたが確認・編集する必要があります。口座名、金額、返済日、請求日、通貨、純資産への算入可否などを確認してください。",
        "ArkFlow は Apple App Store を通じて Pro の買い切り、月額、年額サブスクリプションを提供する場合があります。購入可能な項目、価格、地域、試用、割引は、アプリ内 StoreKit 表示と Apple の購入画面に従います。自動更新サブスクリプションは Apple アカウントで解約するまで更新され、請求、返金、支払い方法は Apple が処理します。",
        "現在の Pro は主に外貨口座、基準通貨切替、カードフェイスのカスタマイズなどを対象とします。基本的な資産記録、手動入力、確認後の OCR 保存、プライバシーマスク、基本リマインダーは、将来のバージョンで購入前に明示されない限り Pro 限定とは解釈されません。",
        "ArkFlow では App Store 検索で第三者アプリのアイコンを選ぶ、または写真から画像をアップロードしてローカル口座ロゴにできます。名称、アイコン、商標、素材は各権利者に帰属します。この機能は個人・ローカル・非公開の識別目的に限られ、違法、誤認、侵害、公開宣伝、商業的混同の目的で使用してはいけません。",
        "ArkFlow の名称、画面、コード、文言、オリジナル素材は法律で保護されています。許可なく複製、リバースエンジニアリング、販売、再許諾、その他の不正利用をしてはいけません。",
        "ArkFlow を違法、詐欺、侵害、誤認を招く行為に使用してはいけません。購入、権限、サブスクリプション、安全機構の回避を試みてはいけません。使用権限のない画像、商標、その他の内容をアップロードまたは使用してはいけません。分析結果を専門的な投資、税務、法律、会計助言として提示してはいけません。",
        "ArkFlow は安定した機能提供に努めますが、認識、計算、通知、為替レート、サブスクリプション状態、分析結果の完全な正確性を保証しません。重要な財務情報は自分で確認し、記録、操作、判断について責任を負います。法律で許される範囲で、ArkFlow は間接損失、データ損失、利益損失、その他の結果について責任を負いません。",
        "製品、法律、プラットフォーム規則の変更に応じて本規約を更新する場合があります。重要な変更は合理的な方法で通知します。継続利用は更新後の規約への同意を意味します。",
        "規約、購入、技術サポートに関する質問はサポートページをご利用ください。"
      ],
      support: [
        "製品更新、使い方、コミュニティ情報については ArkFlow の小紅書プロフィールも利用できます。プライバシー、購入、サブスクリプション、返金、具体的な不具合についてはメールサポートを優先してください。",
        "ArkFlow Pro の購入、サブスクリプション、購入復元、返金は Apple App Store が処理します。まずアプリ内の「購入を復元」を試してください。解約や返金申請は Apple ID のサブスクリプション管理または Apple の返金手続きから行ってください。",
        "現在のバージョンはローカル保存を中心としており、ArkFlow アカウントシステムは提供していません。データが端末、ローカル通知、StoreKit、App Store アイコン検索でどのように扱われるかはプライバシーポリシーをご確認ください。",
        "法律情報へのリンクです。"
      ],
      emailHelp: "お問い合わせの際は、端末モデル、iOS バージョン、アプリバージョン、再現手順、安定して再現できるかをできるだけ記載してください。必要がない限り、実際の資産額、カード番号、完全な明細、その他の機微情報を含むスクリーンショットは送らないでください。"
    },
    ko: {
      privacyIntro: "ArkFlow는 로컬 우선 개인 자산 관리 앱입니다. 현재 버전은 ArkFlow 계정 시스템을 제공하지 않으며, 사용자 자산 데이터를 저장하기 위한 ArkFlow 서버를 운영하지 않습니다. 계좌, 스크린샷, 자산 금액 또는 OCR 결과를 ArkFlow 서버로 업로드하지 않습니다.",
      termsIntro: "ArkFlow에 오신 것을 환영합니다. ArkFlow를 사용하면 본 이용약관과 개인정보 처리방침에 동의한 것으로 간주됩니다. 동의하지 않는 경우 앱 사용을 중단해 주세요.",
      privacy: [
        "앱 안에서 직접 입력하거나 생성한 데이터는 기기 로컬에 저장됩니다. 여기에는 계좌명, 분류, 잔액, 부채, 신용카드 청구 항목, 상환일, 메모, 자산 스냅샷, 반복 수입/지출, 기준 통화, 환율, 알림 설정, 개인정보 보호 모드, 계좌 로고, 스크린샷 인식 결과가 포함됩니다. 스크린샷 인식은 기본적으로 기기에서 처리되며 사용자가 확인한 뒤에만 저장됩니다.",
        "핵심 자산 기록 기능은 계정 로그인이나 은행 연결 없이 사용할 수 있습니다. 인앱 구매, 구독, 구매 복원, 환불/취소 상태는 Apple App Store와 StoreKit이 처리합니다. Pro 사용자가 업로드, 가져오기 또는 자동 동기화를 켜면 ArkFlow는 데이터를 `.arkflowbackup` 파일로 내보내 사용자의 iCloud Drive 컨테이너에 저장하거나 그 컨테이너에서 읽습니다. App Store 아이콘 검색은 검색어와 선택한 스토어 지역을 Apple iTunes Search API로 보냅니다. 지원 요청으로 사용자가 제공한 정보는 요청 처리에 사용됩니다.",
        "ArkFlow는 사용자가 직접 선택한 이미지에만 접근합니다. 업로드한 계좌 로고와 카드 이미지는 기기에 로컬 저장되며 ArkFlow 서버로 업로드되지 않습니다.",
        "ArkFlow는 청구일, 상환일 또는 데이터 업데이트를 알리기 위해 로컬 알림을 사용할 수 있습니다. 알림은 기기에서 예약되며 시스템 설정에서 권한을 끌 수 있습니다.",
        "ArkFlow Pro 구매와 구독은 Apple이 처리합니다. 앱은 StoreKit으로 상품 정보를 불러오고, 구매와 복원을 시작하며, Apple의 유효 거래 상태에 따라 Pro 권한을 판단합니다. 가격, 갱신, 취소, 환불 규칙은 Apple 구매 화면, App Store 계정 설정 및 Apple 정책을 따릅니다.",
        "타사 앱 이름, 아이콘, 상표 및 자료는 각 권리자에게 귀속됩니다. App Store 아이콘 검색은 기기 안에서 계좌의 시각적 식별자를 선택하기 위한 기능일 뿐이며, 관련 앱, 개발자, 상표권자 또는 Apple과의 제휴, 승인, 후원, 추천을 의미하지 않습니다.",
        "현재 로컬 핵심 기능을 사용하기 위해 ArkFlow 계정 가입을 요구하지 않습니다. 은행, 증권사, 결제 계좌에 자동 연결하지 않습니다. 개인 자산 데이터를 판매하지 않으며, 현재 버전에서는 자산 데이터를 ArkFlow 서버에 중앙 저장하지 않습니다.",
        "앱에서 계좌를 삭제하거나 계좌 로고를 교체 또는 삭제할 수 있으며, 설정에서 iCloud Drive 컨테이너에 저장된 ArkFlow 백업 파일도 삭제할 수 있습니다. 앱 삭제 시 일반적으로 로컬 데이터는 제거되지만 이미 iCloud Drive에 저장된 백업이 반드시 삭제되는 것은 아닙니다. iOS 백업, 기기 이전 및 iCloud 설정은 데이터 보존과 복원에 영향을 줄 수 있습니다.",
        "향후 타사 AI 인식, 계정 시스템, 분석 서비스, 실시간 클라우드 동기화 등 데이터 처리 방식을 바꾸는 기능이 추가되면 출시 전에 본 정책을 업데이트하고 필요한 경우 동의를 요청합니다.",
        "개인정보 관련 질문은 지원 페이지를 통해 문의해 주세요."
      ],
      terms: [
        "ArkFlow는 로컬 우선 개인 자산 기록 및 자유도 분석 도구입니다. 자산, 부채, 현금흐름, 상환 알림, 자유 프로필 정리를 돕지만 은행, 증권, 회계, 세무, 법률 또는 투자 자문 서비스를 제공하지 않습니다. 앱 내 분석은 개인 참고용이며 투자 조언, 수익 보장 또는 재무 결정 근거가 아닙니다.",
        "앱에 입력, 업로드 또는 선택하는 콘텐츠가 정확하고 합법적이며 사용 권한이 있는지 확인할 책임은 사용자에게 있습니다. 중요한 데이터는 직접 백업해야 합니다. 현재 버전은 주로 기기에 저장되므로 앱 삭제, 기기 초기화, 시스템 오류 또는 백업 복원 실패로 로컬 데이터가 손실될 수 있습니다.",
        "OCR 인식은 입력 부담을 줄이기 위한 기능입니다. 결과는 불완전하거나 부정확할 수 있으며 저장 전 사용자가 직접 확인하고 편집해야 합니다. 계좌명, 금액, 상환일, 청구일, 통화, 순자산 포함 여부 등 핵심 정보를 확인해야 합니다.",
        "ArkFlow는 Apple App Store를 통해 Pro 영구 구매, 월간 구독 또는 연간 구독을 제공할 수 있습니다. 구매 가능 항목, 가격, 지역 제공 여부, 체험 또는 할인 정보는 앱 내 StoreKit 표시와 Apple 구매 화면을 기준으로 합니다. 자동 갱신 구독은 Apple 계정에서 취소할 때까지 갱신되며 청구, 환불, 결제 수단은 Apple이 처리합니다.",
        "현재 Pro는 주로 외화 계좌, 기준 통화 전환, 카드 디자인 사용자화 등 고급 기능을 위한 것입니다. 기본 자산 기록, 수동 입력, 확인 후 OCR 저장, 개인정보 보호 마스킹, 기본 알림은 향후 버전이 구매 전에 명확히 알리지 않는 한 Pro 전용으로 이해해서는 안 됩니다.",
        "ArkFlow는 App Store 검색으로 타사 앱 아이콘을 선택하거나 사진에서 이미지를 업로드해 로컬 계좌 로고로 사용할 수 있게 합니다. 이름, 아이콘, 상표 및 자료는 각 권리자에게 귀속됩니다. 이 기능은 개인적이고 로컬이며 비공개인 계좌 식별 용도에 한정되며, 불법·오도·침해·공개 홍보·상업적 혼동 목적으로 사용할 수 없습니다.",
        "ArkFlow의 제품명, 인터페이스, 코드, 문구 및 원본 자료는 법으로 보호됩니다. 허가 없이 복제, 리버스 엔지니어링, 판매, 재라이선스 또는 오용할 수 없습니다.",
        "ArkFlow를 불법, 사기, 침해 또는 오도 행위에 사용해서는 안 됩니다. 구매, 권한, 구독 또는 보안 장치를 우회하려고 시도해서는 안 됩니다. 권한 없는 이미지, 상표 또는 기타 콘텐츠를 업로드하거나 사용해서는 안 되며, ArkFlow 분석 결과를 전문 투자, 세무, 법률 또는 회계 의견으로 포장해서는 안 됩니다.",
        "ArkFlow는 기능 안정성을 위해 노력하지만 인식, 계산, 알림, 환율, 구독 상태 또는 분석 결과가 완전히 오류 없음을 보장하지 않습니다. 중요한 재무 정보는 사용자가 직접 확인해야 하며 기록, 조작, 결정에 대한 책임은 사용자에게 있습니다. 법이 허용하는 범위에서 ArkFlow는 간접 손실, 데이터 손실, 이익 손실 또는 기타 결과에 책임지지 않습니다.",
        "제품, 법률 또는 플랫폼 규칙 변경에 따라 본 약관을 업데이트할 수 있습니다. 중요한 변경은 합리적인 방식으로 안내합니다. 계속 사용하는 것은 업데이트된 약관에 동의함을 의미합니다.",
        "약관, 구매 또는 기술 지원 관련 질문은 지원 페이지를 방문해 주세요."
      ],
      support: [
        "제품 업데이트, 사용 아이디어, 커뮤니티 콘텐츠는 ArkFlow의 샤오홍슈 프로필에서도 확인할 수 있습니다. 개인정보, 구매, 구독, 환불 또는 구체적인 오류는 이메일 지원을 우선 이용해 주세요.",
        "ArkFlow Pro 구매, 구독, 구매 복원, 환불은 Apple App Store가 처리합니다. 먼저 앱에서 구매 복원을 시도해 주세요. 구독 취소나 환불 신청은 Apple ID 구독 관리 또는 Apple 공식 환불 절차를 이용해 주세요.",
        "현재 버전은 로컬 저장을 중심으로 하며 ArkFlow 계정 시스템을 제공하지 않습니다. 데이터가 기기, 로컬 알림, StoreKit, App Store 아이콘 검색에서 어떻게 처리되는지는 개인정보 처리방침을 확인해 주세요.",
        "법률 정보 링크입니다."
      ],
      emailHelp: "지원 요청을 보낼 때 기기 모델, iOS 버전, 앱 버전, 문제 재현 단계, 안정적으로 재현되는지 여부를 가능한 한 포함해 주세요. 필요하지 않다면 실제 자산 금액, 카드 번호, 전체 명세서 또는 기타 민감한 정보가 담긴 스크린샷은 보내지 마세요."
    },
    es: {
      privacyIntro: "ArkFlow es una app local-first de gestión de activos personales. La versión actual no ofrece un sistema de cuenta ArkFlow, no opera servidores ArkFlow para guardar tus datos patrimoniales y no sube tus cuentas, capturas, importes de activos ni resultados OCR a servidores ArkFlow.",
      termsIntro: "Bienvenido a ArkFlow. Al usar ArkFlow aceptas estos Términos de uso y nuestra Política de privacidad. Si no estás de acuerdo, deja de usar la app.",
      privacy: [
        "Los datos que introduces o generas en la app se guardan localmente en tu dispositivo, incluidos nombres de cuentas, categorías, saldos, deudas, campos de tarjetas de crédito, fechas de pago, notas, instantáneas de activos, flujos recurrentes, moneda base, tipos de cambio, preferencias de recordatorios, modo de privacidad, logos de cuentas y resultados de reconocimiento de capturas. El reconocimiento se realiza por defecto en el dispositivo y solo se guarda tras tu confirmación.",
        "El registro básico de activos funciona sin iniciar sesión ni conectar bancos. Las compras, suscripciones, restauraciones y estados de reembolso o revocación los gestionan Apple App Store y StoreKit. Cuando usuarios Pro suben, descargan o activan la sincronización automática, ArkFlow exporta los datos como `.arkflowbackup` y los guarda en tu contenedor de iCloud Drive, o lee la copia desde ese contenedor. La búsqueda de iconos de App Store envía tu palabra clave y región a la API iTunes Search de Apple. La información que envías a soporte se usa para atender tu solicitud.",
        "ArkFlow solo lee imágenes cuando las eliges. Los logos de cuenta e imágenes de tarjeta que subes se almacenan localmente y no se envían a servidores de ArkFlow.",
        "ArkFlow puede usar notificaciones locales para fechas de estado, fechas de pago o recordatorios de actualización. Se programan en tu dispositivo y puedes desactivarlas en Ajustes del sistema.",
        "Apple gestiona las compras y suscripciones de ArkFlow Pro. La app usa StoreKit para cargar productos, iniciar compras, restaurar compras y determinar el acceso Pro según transacciones válidas de Apple. Los precios, renovaciones, cancelaciones y reembolsos se rigen por Apple.",
        "Los nombres, iconos, marcas y materiales de apps de terceros pertenecen a sus propietarios. La búsqueda de iconos de App Store solo ayuda a elegir un identificador visual local para una cuenta; no implica afiliación, autorización, patrocinio ni respaldo.",
        "No exigimos una cuenta de ArkFlow para usar las funciones locales actuales, no conectamos automáticamente bancos, brokers o cuentas de pago, no vendemos tus datos patrimoniales y no subimos tus activos a servidores de ArkFlow para almacenamiento centralizado.",
        "Puedes eliminar cuentas, cambiar o borrar logos y borrar desde Ajustes los archivos de copia de seguridad de ArkFlow guardados en tu contenedor de iCloud Drive. Al desinstalar la app normalmente se eliminan los datos locales, pero no necesariamente las copias ya guardadas en iCloud Drive. Las copias de iOS, la migración de dispositivo y los ajustes de iCloud pueden afectar conservación y restauración.",
        "Si ArkFlow añade en el futuro reconocimiento de IA de terceros, cuentas, analíticas, sincronización en la nube en tiempo real u otras funciones que cambien el tratamiento de datos, actualizaremos esta política antes del lanzamiento y pediremos consentimiento cuando sea necesario.",
        "Para preguntas de privacidad, contáctanos desde la página de soporte."
      ],
      terms: [
        "ArkFlow es una herramienta local-first para registro de activos personales y análisis de libertad. Ayuda a organizar activos, deudas, flujo de caja, recordatorios y perfil de libertad, pero no ofrece servicios bancarios, bursátiles, contables, fiscales, legales ni de inversión. El análisis de la app es solo referencia personal y no constituye asesoramiento, promesa de rentabilidad ni base de decisión financiera.",
        "Eres responsable de que el contenido que introduces, subes o eliges sea exacto, legal y de que tengas derecho a usarlo. Debes respaldar tus datos importantes. La versión actual guarda principalmente en el dispositivo; desinstalación, borrado, fallos o restauraciones fallidas pueden causar pérdida de datos locales.",
        "El OCR reduce el esfuerzo de entrada. Los resultados pueden ser incompletos o inexactos y debes confirmarlos y editarlos antes de guardar. Verifica nombres de cuentas, importes, fechas, monedas y si se incluyen en patrimonio neto.",
        "ArkFlow puede ofrecer Pro de por vida, suscripción mensual o anual mediante Apple App Store. Productos, precios, disponibilidad, pruebas y ofertas dependen de StoreKit en la app y de la pantalla de compra de Apple. Las suscripciones se renuevan hasta que las canceles en Apple; facturación y reembolsos los gestiona Apple.",
        "Actualmente Pro se centra en cuentas en moneda extranjera, cambio de moneda base y personalización de tarjetas. Registro básico, entrada manual, guardado tras confirmar OCR, ocultación por privacidad y recordatorios básicos no deben entenderse como Pro salvo que una versión futura lo indique claramente antes de comprar.",
        "ArkFlow permite elegir iconos de terceros mediante App Store o subir imágenes como logos locales de cuentas. Nombres, iconos, marcas y materiales pertenecen a sus propietarios. La función es solo para identificación personal, local y no pública, y no debe usarse con fines ilegales, engañosos, infractores, promocionales públicos o de confusión comercial.",
        "El nombre, interfaz, código, textos y materiales originales de ArkFlow están protegidos por la ley. Sin permiso no puedes copiar, aplicar ingeniería inversa, vender, sublicenciar ni abusar del contenido o servicio.",
        "No uses ArkFlow para actividades ilegales, fraudulentas, infractoras o engañosas. No intentes eludir compras, permisos, suscripciones o seguridad. No uses contenido sin derecho. No presentes análisis de ArkFlow como asesoría profesional de inversión, fiscal, legal o contable.",
        "ArkFlow procura mantener funciones estables, pero no garantiza que reconocimiento, cálculos, recordatorios, tipos de cambio, estado de suscripción o análisis sean perfectos. Debes verificar información financiera importante y eres responsable de tus registros, acciones y decisiones. En la medida permitida por la ley, ArkFlow no responde por pérdidas indirectas, datos perdidos, lucro cesante u otras consecuencias.",
        "Podemos actualizar estos términos por cambios de producto, ley o plataforma. Los cambios importantes se comunicarán razonablemente. Seguir usando ArkFlow implica aceptar los términos actualizados.",
        "Para preguntas sobre términos, compras o soporte técnico, visita la página de soporte."
      ],
      support: [
        "También puedes seguir a ArkFlow en Xiaohongshu para novedades, ideas de uso y contenido de comunidad. Para privacidad, compras, suscripciones, reembolsos o fallos concretos, prioriza el correo de soporte.",
        "Las compras, suscripciones, restauraciones y reembolsos de ArkFlow Pro los gestiona Apple App Store. Primero prueba Restaurar compras en la app. Para cancelar o pedir reembolso, usa la gestión de suscripciones de Apple ID o el proceso oficial de Apple.",
        "La versión actual es local-first y no ofrece sistema de cuenta ArkFlow. Lee la Política de privacidad para entender cómo se tratan los datos en el dispositivo, notificaciones locales, StoreKit y búsqueda de iconos.",
        "Enlaces de información legal."
      ],
      emailHelp: "Al enviar una solicitud, incluye modelo de dispositivo, versión de iOS, versión de la app, pasos del problema y si se reproduce de forma estable. Salvo que sea necesario, no envíes capturas con importes reales, números de tarjetas, extractos completos u otra información sensible."
    },
    fr: {
      privacyIntro: "ArkFlow est une app local-first de gestion d'actifs personnels. La version actuelle ne fournit pas de système de compte ArkFlow, n'exploite pas de serveurs ArkFlow pour stocker vos données patrimoniales et n'envoie pas vos comptes, captures, montants d'actifs ou résultats OCR vers des serveurs ArkFlow.",
      termsIntro: "Bienvenue dans ArkFlow. En utilisant ArkFlow, vous acceptez ces Conditions d'utilisation et notre Politique de confidentialité. Si vous n'êtes pas d'accord, cessez d'utiliser l'app.",
      privacy: [
        "Les données que vous saisissez ou générez dans l'app sont conservées localement sur votre appareil : noms de comptes, catégories, soldes, dettes, champs de carte de crédit, dates de remboursement, notes, instantanés d'actifs, flux récurrents, devise de base, taux de change, préférences de rappels, mode confidentialité, logos de comptes et résultats de reconnaissance de captures. La reconnaissance est effectuée par défaut sur l'appareil et n'est enregistrée qu'après votre confirmation.",
        "L'enregistrement principal des actifs fonctionne sans compte ni connexion bancaire. Les achats, abonnements, restaurations et statuts de remboursement ou révocation sont traités par Apple App Store et StoreKit. Quand un utilisateur Pro téléverse, récupère ou active la synchronisation automatique, ArkFlow exporte les données en fichier `.arkflowbackup` et les stocke dans votre conteneur iCloud Drive, ou lit la sauvegarde depuis ce conteneur. La recherche d'icônes App Store envoie le mot-clé et la région choisie à l'API iTunes Search d'Apple. Les informations envoyées au support servent à traiter votre demande.",
        "ArkFlow ne lit les images que lorsque vous les choisissez. Les logos de compte et images de carte importés restent sur l'appareil et ne sont pas envoyés aux serveurs ArkFlow.",
        "ArkFlow peut utiliser des notifications locales pour les dates de relevé, de remboursement ou de mise à jour. Elles sont planifiées sur votre appareil et peuvent être désactivées dans les réglages système.",
        "Les achats et abonnements ArkFlow Pro sont gérés par Apple. L'app utilise StoreKit pour charger les produits, lancer et restaurer les achats, puis déterminer l'accès Pro selon les transactions valides d'Apple. Prix, renouvellement, annulation et remboursement suivent les règles d'Apple.",
        "Les noms, icônes, marques et contenus d'apps tierces appartiennent à leurs propriétaires. La recherche d'icônes App Store sert seulement à choisir un identifiant visuel local pour un compte et n'implique aucune affiliation, autorisation, sponsorisation ou approbation.",
        "Nous ne demandons pas de compte ArkFlow pour utiliser les fonctions locales actuelles, ne connectons pas automatiquement banques, courtiers ou moyens de paiement, ne vendons pas vos données patrimoniales et ne téléversons pas actuellement vos actifs vers des serveurs ArkFlow pour stockage centralisé.",
        "Vous pouvez supprimer des comptes, remplacer ou effacer des logos, et supprimer depuis Réglages les fichiers de sauvegarde ArkFlow stockés dans votre conteneur iCloud Drive. La désinstallation supprime normalement les données locales, mais pas nécessairement les sauvegardes déjà stockées dans iCloud Drive. Les sauvegardes iOS, la migration d'appareil et les réglages iCloud peuvent influencer conservation et restauration.",
        "Si ArkFlow ajoute plus tard reconnaissance IA tierce, comptes, analytique, synchronisation cloud en temps réel ou d'autres fonctions changeant le traitement des données, nous mettrons cette politique à jour avant lancement et demanderons le consentement si nécessaire.",
        "Pour toute question de confidentialité, contactez-nous via la page de support."
      ],
      terms: [
        "ArkFlow est un outil local-first de suivi d'actifs personnels et d'analyse de liberté. Il aide à organiser actifs, dettes, flux de trésorerie, rappels et profil de liberté, mais ne fournit pas de services bancaires, de courtage, comptables, fiscaux, juridiques ou de conseil en investissement. Les analyses sont une référence personnelle et ne constituent pas un conseil, une promesse de rendement ni une base de décision financière.",
        "Vous êtes responsable de l'exactitude, de la légalité et du droit d'utilisation des contenus saisis, importés ou choisis. Vous devez sauvegarder les données importantes. La version actuelle stocke principalement sur l'appareil ; désinstallation, effacement, panne ou échec de restauration peuvent entraîner une perte de données locales.",
        "L'OCR réduit l'effort de saisie. Les résultats peuvent être incomplets ou inexacts et doivent être confirmés et modifiés avant enregistrement. Vérifiez les noms de comptes, montants, dates, devises et inclusion dans la valeur nette.",
        "ArkFlow peut proposer Pro en achat définitif, abonnement mensuel ou annuel via Apple App Store. Produits, prix, disponibilité, essais et offres dépendent de StoreKit dans l'app et de l'interface d'achat Apple. Les abonnements se renouvellent jusqu'à annulation dans Apple ; facturation et remboursements sont traités par Apple.",
        "Pro concerne aujourd'hui surtout les comptes en devise étrangère, le changement de devise de base et la personnalisation de carte. Le suivi de base, la saisie manuelle, l'enregistrement OCR confirmé, le masquage de confidentialité et les rappels de base ne sont pas Pro sauf indication claire avant achat dans une version future.",
        "ArkFlow permet de choisir des icônes d'apps tierces via l'App Store ou d'importer des images comme logos locaux. Les noms, icônes, marques et contenus appartiennent à leurs propriétaires. Cette fonction est limitée à une identification personnelle, locale et non publique, sans usage illégal, trompeur, contrefaisant, promotionnel public ou créant une confusion commerciale.",
        "Le nom, l'interface, le code, les textes et contenus originaux d'ArkFlow sont protégés. Sans autorisation, vous ne pouvez pas copier, rétroconcevoir, vendre, sous-licencier ou détourner le contenu ou le service.",
        "N'utilisez pas ArkFlow pour des activités illégales, frauduleuses, contrefaisantes ou trompeuses. Ne contournez pas achats, permissions, abonnements ou sécurité. N'utilisez pas de contenus sans droit. Ne présentez pas les analyses ArkFlow comme conseil professionnel d'investissement, fiscal, juridique ou comptable.",
        "ArkFlow s'efforce de rester stable mais ne garantit pas l'absence d'erreur dans la reconnaissance, les calculs, rappels, taux de change, statuts d'abonnement ou analyses. Vous devez vérifier les informations financières importantes et restez responsable de vos enregistrements, actions et décisions. Dans la limite légale, ArkFlow n'est pas responsable des pertes indirectes, pertes de données, pertes de bénéfices ou autres conséquences.",
        "Nous pouvons mettre à jour ces conditions selon le produit, la loi ou les règles de plateforme. Les changements importants seront signalés raisonnablement. Continuer à utiliser ArkFlow vaut acceptation des conditions mises à jour.",
        "Pour les conditions, achats ou questions techniques, consultez la page de support."
      ],
      support: [
        "Vous pouvez aussi suivre ArkFlow sur Xiaohongshu pour les nouveautés, idées d'utilisation et contenus de communauté. Pour confidentialité, achats, abonnements, remboursements ou problèmes précis, privilégiez l'e-mail de support.",
        "Les achats, abonnements, restaurations et remboursements ArkFlow Pro sont gérés par Apple App Store. Essayez d'abord Restaurer les achats dans l'app. Pour annuler ou demander un remboursement, utilisez la gestion des abonnements Apple ID ou la procédure officielle Apple.",
        "La version actuelle est local-first et ne fournit pas de compte ArkFlow. Lisez la Politique de confidentialité pour comprendre le traitement des données sur l'appareil, les notifications locales, StoreKit et la recherche d'icônes App Store.",
        "Liens vers les informations juridiques."
      ],
      emailHelp: "Lors d'une demande, indiquez autant que possible le modèle d'appareil, la version iOS, la version de l'app, les étapes et si le problème est reproductible. Sauf nécessité, n'envoyez pas de captures contenant montants réels, numéros de carte, relevés complets ou autres informations sensibles."
    },
    de: {
      privacyIntro: "ArkFlow ist eine local-first App zur Verwaltung persönlicher Vermögenswerte. Die aktuelle Version bietet kein ArkFlow-Kontosystem, betreibt keine ArkFlow-Server zur Speicherung Ihrer Vermögensdaten und lädt Ihre Konten, Screenshots, Vermögensbeträge oder OCR-Ergebnisse nicht auf ArkFlow-Server hoch.",
      termsIntro: "Willkommen bei ArkFlow. Durch die Nutzung von ArkFlow stimmen Sie diesen Nutzungsbedingungen und unserer Datenschutzerklärung zu. Wenn Sie nicht einverstanden sind, verwenden Sie die App bitte nicht weiter.",
      privacy: [
        "Daten, die Sie in der App eingeben oder erzeugen, werden lokal auf Ihrem Gerät gespeichert: Kontonamen, Kategorien, Salden, Verbindlichkeiten, Kreditkartenfelder, Fälligkeiten, Notizen, Vermögens-Snapshots, wiederkehrende Cashflows, Basiswährung, Wechselkurse, Erinnerungseinstellungen, Datenschutzmodus, Kontologos und Screenshot-Erkennungsergebnisse. Die Erkennung erfolgt standardmäßig auf dem Gerät und wird erst nach Ihrer Bestätigung gespeichert.",
        "Die Kernfunktion zur Vermögensaufzeichnung funktioniert ohne Login oder Bankverbindung. Käufe, Abos, Wiederherstellungen und Rückerstattungs- oder Widerrufsstatus werden von Apple App Store und StoreKit verarbeitet. Wenn Pro-Nutzer hochladen, abrufen oder automatische Synchronisierung aktivieren, exportiert ArkFlow Daten als `.arkflowbackup` und speichert sie in Ihrem iCloud-Drive-Container oder liest die Sicherung daraus. Die App-Store-Icon-Suche sendet Suchbegriff und Region an Apples iTunes Search API. Supportangaben werden zur Bearbeitung Ihrer Anfrage genutzt.",
        "ArkFlow liest Bilder nur, wenn Sie sie auswählen. Hochgeladene Kontologos und Kartenbilder bleiben lokal auf dem Gerät und werden nicht an ArkFlow-Server gesendet.",
        "ArkFlow kann lokale Mitteilungen für Abrechnungsdaten, Fälligkeiten oder Datenaktualisierungen verwenden. Sie werden auf Ihrem Gerät geplant und können in den Systemeinstellungen deaktiviert werden.",
        "ArkFlow-Pro-Käufe und Abos werden von Apple verarbeitet. Die App nutzt StoreKit zum Laden von Produkten, Starten und Wiederherstellen von Käufen sowie zur Bestimmung des Pro-Zugriffs anhand gültiger Apple-Transaktionen. Preise, Verlängerung, Kündigung und Rückerstattung richten sich nach Apple.",
        "Namen, Icons, Marken und Materialien von Drittanbieter-Apps gehören ihren jeweiligen Eigentümern. Die App-Store-Icon-Suche dient nur der lokalen visuellen Kennzeichnung eines Kontos und bedeutet keine Verbindung, Autorisierung, Förderung oder Empfehlung.",
        "Wir verlangen kein ArkFlow-Konto für aktuelle lokale Kernfunktionen, verbinden nicht automatisch Banken, Broker oder Zahlungskonten, verkaufen keine persönlichen Vermögensdaten und laden in der aktuellen Version keine Vermögensdaten zentral auf ArkFlow-Server.",
        "Sie können Konten löschen, Kontologos ersetzen oder entfernen und in den Einstellungen ArkFlow-Sicherungsdateien aus Ihrem iCloud-Drive-Container löschen. Beim Deinstallieren werden lokale App-Daten normalerweise gelöscht, aber bereits in iCloud Drive gespeicherte Sicherungen nicht zwingend. iOS-Backups, Gerätemigration und iCloud-Einstellungen können Aufbewahrung und Wiederherstellung beeinflussen.",
        "Wenn ArkFlow künftig KI-Erkennung Dritter, Konten, Analyse, Echtzeit-Cloud-Synchronisierung oder andere datenverändernde Funktionen hinzufügt, aktualisieren wir diese Richtlinie vor Veröffentlichung und holen, falls nötig, Zustimmung ein.",
        "Bei Datenschutzfragen kontaktieren Sie uns über die Support-Seite."
      ],
      terms: [
        "ArkFlow ist ein lokal ausgerichtetes Werkzeug zur persönlichen Vermögensaufzeichnung und Freiheitsanalyse. Es hilft bei Vermögen, Verbindlichkeiten, Cashflow, Erinnerungen und Freiheitsprofil, bietet aber keine Bank-, Broker-, Buchhaltungs-, Steuer-, Rechts- oder Anlageberatung. Analysen dienen nur der persönlichen Orientierung und sind keine Anlageberatung, Renditezusage oder Grundlage finanzieller Entscheidungen.",
        "Sie sind dafür verantwortlich, dass eingegebene, hochgeladene oder ausgewählte Inhalte korrekt, rechtmäßig und nutzungsberechtigt sind. Wichtige Daten sollten Sie selbst sichern. Die aktuelle Version speichert hauptsächlich auf dem Gerät; Deinstallation, Löschen, Systemfehler oder fehlgeschlagene Wiederherstellung können lokale Datenverluste verursachen.",
        "OCR reduziert Eingabeaufwand. Ergebnisse können unvollständig oder ungenau sein und müssen vor dem Speichern von Ihnen bestätigt und bearbeitet werden. Prüfen Sie Kontonamen, Beträge, Fälligkeiten, Abrechnungsdaten, Währungen und Net-Worth-Einbeziehung.",
        "ArkFlow kann Pro als Einmalkauf, Monats- oder Jahresabo über Apple App Store anbieten. Produkte, Preise, Verfügbarkeit, Tests und Angebote richten sich nach StoreKit in der App und Apples Kaufoberfläche. Abos verlängern sich bis zur Kündigung im Apple-Konto; Abrechnung und Rückerstattung erfolgen durch Apple.",
        "Pro konzentriert sich derzeit auf Fremdwährungskonten, Basiswährungswechsel und Kartendesign-Anpassung. Grundlegende Vermögensaufzeichnung, manuelle Eingabe, bestätigtes OCR-Speichern, Datenschutzmaskierung und Basis-Erinnerungen sind nicht als Pro-exklusiv zu verstehen, sofern eine künftige Version dies nicht vor dem Kauf klar erklärt.",
        "ArkFlow erlaubt, Drittanbieter-Icons über den App Store zu wählen oder Bilder als lokale Kontologos hochzuladen. Namen, Icons, Marken und Materialien gehören ihren Eigentümern. Die Funktion dient nur privater, lokaler, nicht öffentlicher Kennzeichnung und darf nicht rechtswidrig, irreführend, verletzend, öffentlich werbend oder kommerziell verwirrend genutzt werden.",
        "Name, Oberfläche, Code, Texte und Originalmaterialien von ArkFlow sind gesetzlich geschützt. Ohne Erlaubnis dürfen Sie Inhalte oder Dienste nicht kopieren, zurückentwickeln, verkaufen, unterlizenzieren oder missbrauchen.",
        "Nutzen Sie ArkFlow nicht für rechtswidrige, betrügerische, verletzende oder irreführende Zwecke. Umgehen Sie keine Käufe, Berechtigungen, Abos oder Sicherheit. Verwenden Sie keine Inhalte ohne Rechte. Stellen Sie ArkFlow-Analysen nicht als professionelle Anlage-, Steuer-, Rechts- oder Buchhaltungsberatung dar.",
        "ArkFlow bemüht sich um Stabilität, garantiert aber keine Fehlerfreiheit bei Erkennung, Berechnung, Erinnerungen, Wechselkursen, Abo-Status oder Analysen. Prüfen Sie wichtige Finanzinformationen selbst und tragen Verantwortung für Aufzeichnungen, Handlungen und Entscheidungen. Soweit gesetzlich zulässig, haftet ArkFlow nicht für indirekte Schäden, Datenverlust, entgangenen Gewinn oder sonstige Folgen.",
        "Wir können diese Bedingungen wegen Produkt-, Rechts- oder Plattformänderungen aktualisieren. Wesentliche Änderungen werden angemessen mitgeteilt. Die weitere Nutzung bedeutet Zustimmung zu den aktualisierten Bedingungen.",
        "Bei Fragen zu Bedingungen, Käufen oder technischem Support besuchen Sie die Support-Seite."
      ],
      support: [
        "Sie können ArkFlow auch auf Xiaohongshu folgen, um Produktupdates, Nutzungsideen und Community-Inhalte zu sehen. Für Datenschutz, Käufe, Abos, Rückerstattungen oder konkrete technische Probleme nutzen Sie bitte vorrangig E-Mail-Support.",
        "ArkFlow-Pro-Käufe, Abos, Wiederherstellungen und Rückerstattungen werden vom Apple App Store verarbeitet. Versuchen Sie zuerst, Käufe in der App wiederherzustellen. Kündigungen oder Rückerstattungen erfolgen über Apple-ID-Abos oder Apples offiziellen Prozess.",
        "Die aktuelle Version ist local-first und bietet kein ArkFlow-Kontosystem. Lesen Sie die Datenschutzerklärung, um zu verstehen, wie Daten auf dem Gerät, durch lokale Mitteilungen, StoreKit und App-Store-Icon-Suche verarbeitet werden.",
        "Links zu rechtlichen Informationen."
      ],
      emailHelp: "Geben Sie bei Supportanfragen möglichst Gerätemodell, iOS-Version, App-Version, Schritte zur Reproduktion und Stabilität des Problems an. Senden Sie nur bei Bedarf Screenshots mit echten Vermögenswerten, Kartennummern, vollständigen Abrechnungen oder anderen sensiblen Informationen."
    },
    "pt-BR": {
      privacyIntro: "O ArkFlow é um app local-first de gestão de ativos pessoais. A versão atual não oferece sistema de conta ArkFlow, não opera servidores ArkFlow para guardar seus dados patrimoniais e não envia suas contas, capturas, valores de ativos ou resultados de OCR para servidores ArkFlow.",
      termsIntro: "Bem-vindo ao ArkFlow. Ao usar o ArkFlow, você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se não concordar, pare de usar o app.",
      privacy: [
        "Os dados que você insere ou gera no app são salvos localmente no dispositivo, incluindo nomes de contas, categorias, saldos, dívidas, campos de cartão de crédito, datas de pagamento, notas, snapshots de ativos, fluxos recorrentes, moeda base, câmbio, preferências de lembrete, modo de privacidade, logos de contas e resultados de OCR. O reconhecimento ocorre por padrão no dispositivo e só é salvo após sua confirmação.",
        "O registro principal de ativos funciona sem login ou conexão bancária. Compras, assinaturas, restaurações e estados de reembolso ou revogação são processados pela Apple App Store e StoreKit. Quando usuários Pro enviam, puxam ou ativam sincronização automática, o ArkFlow exporta dados como `.arkflowbackup` e salva no seu contêiner do iCloud Drive, ou lê o backup desse contêiner. A busca de ícones da App Store envia palavra-chave e região à API iTunes Search da Apple. Informações enviadas ao suporte são usadas para atender sua solicitação.",
        "O ArkFlow só lê imagens quando você as escolhe. Logos de conta e imagens de cartão enviados ficam no dispositivo e não são enviados a servidores do ArkFlow.",
        "O ArkFlow pode usar notificações locais para datas de fatura, pagamento ou atualização de dados. Elas são agendadas no dispositivo e podem ser desativadas nos Ajustes do sistema.",
        "Compras e assinaturas do ArkFlow Pro são processadas pela Apple. O app usa StoreKit para carregar produtos, iniciar e restaurar compras e determinar acesso Pro por transações válidas da Apple. Preços, renovação, cancelamento e reembolso seguem regras da Apple.",
        "Nomes, ícones, marcas e materiais de apps terceiros pertencem a seus donos. A busca de ícones da App Store serve apenas para escolher um identificador visual local de conta e não implica afiliação, autorização, patrocínio ou endosso.",
        "Não exigimos conta ArkFlow para usar os recursos locais atuais, não conectamos automaticamente bancos, corretoras ou contas de pagamento, não vendemos seus dados patrimoniais e, na versão atual, não enviamos seus ativos a servidores ArkFlow para armazenamento centralizado.",
        "Você pode excluir contas, trocar ou apagar logos e remover em Ajustes os arquivos de backup do ArkFlow salvos no seu contêiner do iCloud Drive. Desinstalar o app normalmente remove dados locais, mas não necessariamente backups já salvos no iCloud Drive. Backups do iOS, migração de dispositivo e ajustes do iCloud podem afetar retenção e restauração.",
        "Se o ArkFlow adicionar reconhecimento por IA de terceiros, contas, analytics, sincronização em nuvem em tempo real ou outros recursos que mudem o processamento de dados, atualizaremos esta política antes do lançamento e pediremos consentimento quando necessário.",
        "Para dúvidas de privacidade, entre em contato pela página de suporte."
      ],
      terms: [
        "O ArkFlow é uma ferramenta local-first de registro de ativos pessoais e análise de liberdade. Ajuda a organizar ativos, dívidas, fluxo de caixa, lembretes e perfil de liberdade, mas não oferece serviços bancários, corretagem, contabilidade, impostos, jurídicos ou consultoria de investimento. As análises são referência pessoal e não são conselho de investimento, promessa de retorno ou base de decisão financeira.",
        "Você é responsável por garantir que o conteúdo inserido, enviado ou escolhido seja correto, legal e que tenha direito de uso. Faça backup dos dados importantes. A versão atual salva principalmente no dispositivo; desinstalação, limpeza, falha do sistema ou restauração malsucedida podem causar perda de dados locais.",
        "O OCR reduz esforço de entrada. Resultados podem ser incompletos ou imprecisos e devem ser confirmados e editados antes de salvar. Verifique nomes de contas, valores, datas, moedas e inclusão no patrimônio líquido.",
        "O ArkFlow pode oferecer Pro vitalício, assinatura mensal ou anual pela Apple App Store. Produtos, preços, disponibilidade, testes e ofertas seguem o StoreKit no app e a tela de compra da Apple. Assinaturas renovam até cancelamento na conta Apple; cobrança e reembolso são tratados pela Apple.",
        "Atualmente o Pro foca contas em moeda estrangeira, troca de moeda base e personalização de cartões. Registro básico, entrada manual, salvamento após OCR confirmado, máscara de privacidade e lembretes básicos não devem ser entendidos como Pro, salvo aviso claro antes da compra em versão futura.",
        "O ArkFlow permite escolher ícones de terceiros via App Store ou enviar imagens como logos locais. Nomes, ícones, marcas e materiais pertencem a seus donos. O recurso é apenas para identificação pessoal, local e não pública, sem uso ilegal, enganoso, infrator, promocional público ou de confusão comercial.",
        "Nome, interface, código, textos e materiais originais do ArkFlow são protegidos por lei. Sem permissão, você não pode copiar, fazer engenharia reversa, vender, sublicenciar ou abusar do conteúdo ou serviço.",
        "Não use ArkFlow para atividades ilegais, fraudulentas, infratoras ou enganosas. Não tente contornar compras, permissões, assinaturas ou segurança. Não use conteúdo sem direito. Não apresente análises do ArkFlow como aconselhamento profissional de investimento, impostos, jurídico ou contábil.",
        "O ArkFlow busca estabilidade, mas não garante que reconhecimento, cálculos, lembretes, câmbio, status de assinatura ou análises sejam livres de erro. Você deve verificar informações financeiras importantes e é responsável por registros, ações e decisões. Na medida permitida por lei, o ArkFlow não responde por perdas indiretas, perda de dados, lucros cessantes ou outras consequências.",
        "Podemos atualizar estes termos por mudanças de produto, lei ou plataforma. Mudanças importantes serão comunicadas de forma razoável. Continuar usando o ArkFlow significa aceitar os termos atualizados.",
        "Para dúvidas sobre termos, compras ou suporte técnico, visite a página de suporte."
      ],
      support: [
        "Você também pode seguir o ArkFlow no Xiaohongshu para atualizações, ideias de uso e conteúdo de comunidade. Para privacidade, compras, assinaturas, reembolsos ou problemas específicos, priorize o suporte por e-mail.",
        "Compras, assinaturas, restaurações e reembolsos do ArkFlow Pro são processados pela Apple App Store. Primeiro tente Restaurar compras no app. Para cancelar ou pedir reembolso, use o gerenciamento de assinaturas do Apple ID ou o processo oficial da Apple.",
        "A versão atual é local-first e não fornece sistema de conta ArkFlow. Leia a Política de Privacidade para entender como dados são tratados no dispositivo, notificações locais, StoreKit e busca de ícones da App Store.",
        "Links de informações legais."
      ],
      emailHelp: "Ao enviar uma solicitação, inclua modelo do dispositivo, versão do iOS, versão do app, passos do problema e se ele é reproduzível. Salvo necessidade, não envie capturas com valores reais, números de cartão, extratos completos ou outras informações sensíveis."
    },
    ru: {
      privacyIntro: "ArkFlow — локальное приложение для управления личными активами. Текущая версия не предоставляет систему аккаунтов ArkFlow, не использует серверы ArkFlow для хранения ваших данных об активах и не загружает ваши счета, скриншоты, суммы активов или результаты OCR на серверы ArkFlow.",
      termsIntro: "Добро пожаловать в ArkFlow. Используя ArkFlow, вы соглашаетесь с настоящими Условиями использования и нашей Политикой конфиденциальности. Если вы не согласны, прекратите использование приложения.",
      privacy: [
        "Данные, которые вы вводите или создаете в приложении, сохраняются локально на устройстве: названия счетов, категории, балансы, долги, поля кредитных карт, даты платежей, заметки, снимки активов, регулярные доходы и расходы, базовая валюта, курсы, настройки напоминаний, режим приватности, логотипы счетов и результаты распознавания скриншотов. Распознавание по умолчанию выполняется на устройстве и сохраняется только после вашего подтверждения.",
        "Основной учет активов работает без входа в аккаунт и без подключения банка. Покупки, подписки, восстановление покупок, возвраты и отзывы обрабатываются Apple App Store и StoreKit. Когда пользователи Pro загружают, получают или включают автоматическую синхронизацию, ArkFlow экспортирует данные в файл `.arkflowbackup` и сохраняет его в вашем контейнере iCloud Drive либо читает резервную копию из него. Поиск иконок App Store отправляет ключевое слово и регион в Apple iTunes Search API. Информация, отправленная в поддержку, используется для обработки обращения.",
        "ArkFlow читает изображения только тогда, когда вы сами их выбираете. Загруженные логотипы счетов и изображения карт хранятся на устройстве и не отправляются на серверы ArkFlow.",
        "ArkFlow может использовать локальные уведомления о датах выписки, платежа или обновления данных. Они планируются на вашем устройстве и могут быть отключены в системных настройках.",
        "Покупки и подписки ArkFlow Pro обрабатываются Apple. Приложение использует StoreKit для загрузки продуктов, покупки, восстановления и определения доступа Pro по действительным транзакциям Apple. Цены, продление, отмена и возврат регулируются интерфейсом и правилами Apple.",
        "Названия, иконки, товарные знаки и материалы сторонних приложений принадлежат их владельцам. Поиск иконок App Store нужен только для выбора локального визуального идентификатора счета и не означает связь, разрешение, спонсорство или поддержку со стороны соответствующего приложения, разработчика, правообладателя или Apple.",
        "Мы не требуем аккаунт ArkFlow для текущих локальных функций, не подключаем автоматически банки, брокеров или платежные счета, не продаем ваши данные об активах и в текущей версии не загружаем их на серверы ArkFlow для централизованного хранения.",
        "В приложении можно удалить счет, заменить или очистить логотип, а также удалить в настройках файлы резервных копий ArkFlow из вашего контейнера iCloud Drive. При удалении приложения обычно удаляются локальные данные, но уже сохраненные в iCloud Drive резервные копии не обязательно удаляются. Резервные копии iOS, перенос устройства и настройки iCloud могут влиять на хранение и восстановление.",
        "Если в будущем ArkFlow добавит стороннее AI-распознавание, аккаунты, аналитику, облачную синхронизацию в реальном времени или другие функции, меняющие обработку данных, мы обновим эту политику до запуска и при необходимости запросим согласие.",
        "По вопросам конфиденциальности обращайтесь через страницу поддержки."
      ],
      terms: [
        "ArkFlow — локальный инструмент для учета личных активов и анализа финансовой свободы. Он помогает организовать активы, долги, денежные потоки, напоминания и профиль свободы, но не предоставляет банковские, брокерские, бухгалтерские, налоговые, юридические или инвестиционные консультации. Аналитика в приложении предназначена только для личной справки и не является советом, обещанием доходности или основанием для финансовых решений.",
        "Вы отвечаете за точность, законность и право использования вводимого, загружаемого или выбранного контента. Важные данные следует резервировать самостоятельно. Текущая версия в основном хранит данные на устройстве; удаление приложения, очистка устройства, сбой системы или неудачное восстановление могут привести к потере локальных данных.",
        "OCR снижает трудозатраты на ввод. Результаты могут быть неполными или неточными и должны быть подтверждены и отредактированы вами перед сохранением. Проверяйте названия счетов, суммы, даты платежей, даты выписок, валюты и включение в расчет чистых активов.",
        "ArkFlow может предлагать Pro как пожизненную покупку, месячную или годовую подписку через Apple App Store. Доступные продукты, цены, регионы, пробные периоды и предложения определяются отображением StoreKit в приложении и интерфейсом покупки Apple. Подписки продлеваются до отмены в аккаунте Apple; счета и возвраты обрабатываются Apple.",
        "Сейчас Pro в основном относится к счетам в иностранной валюте, смене базовой валюты и настройке внешнего вида карт. Базовый учет активов, ручной ввод, сохранение после подтвержденного OCR, маскировка приватности и базовые напоминания не следует считать Pro-функциями, если будущая версия явно не сообщит об этом до покупки.",
        "ArkFlow позволяет выбрать иконку стороннего приложения через App Store или загрузить изображение как локальный логотип счета. Названия, иконки, товарные знаки и материалы принадлежат владельцам. Функция предназначена только для личной, локальной, непубличной идентификации счета и не должна использоваться незаконно, вводяще в заблуждение, с нарушением прав, для публичной рекламы или коммерческого смешения.",
        "Название, интерфейс, код, тексты и оригинальные материалы ArkFlow защищены законом. Без разрешения нельзя копировать, декомпилировать, продавать, сублицензировать или неправомерно использовать контент или сервис.",
        "Не используйте ArkFlow для незаконных, мошеннических, нарушающих права или вводящих в заблуждение действий. Не обходите покупки, разрешения, подписки или защиту. Не используйте контент без прав. Не представляйте аналитику ArkFlow как профессиональную инвестиционную, налоговую, юридическую или бухгалтерскую консультацию.",
        "ArkFlow стремится к стабильности, но не гарантирует отсутствие ошибок в распознавании, расчетах, напоминаниях, курсах валют, статусе подписки или аналитике. Вы должны самостоятельно проверять важную финансовую информацию и отвечаете за свои записи, действия и решения. В пределах, разрешенных законом, ArkFlow не несет ответственности за косвенные убытки, потерю данных, упущенную выгоду или другие последствия.",
        "Мы можем обновлять эти условия в связи с изменениями продукта, закона или правил платформы. Существенные изменения будут сообщены разумным способом. Продолжение использования ArkFlow означает согласие с обновленными условиями.",
        "По вопросам условий, покупок или технической поддержки посетите страницу поддержки."
      ],
      support: [
        "Вы также можете следить за ArkFlow в Xiaohongshu, чтобы узнавать об обновлениях, идеях использования и материалах сообщества. По вопросам конфиденциальности, покупок, подписок, возвратов или конкретных ошибок в первую очередь пишите на email поддержки.",
        "Покупки, подписки, восстановление и возвраты ArkFlow Pro обрабатываются Apple App Store. Сначала попробуйте восстановить покупки в приложении. Для отмены подписки или запроса возврата используйте управление подписками Apple ID или официальный процесс Apple.",
        "Текущая версия ориентирована на локальное хранение и не предоставляет аккаунты ArkFlow. Прочитайте Политику конфиденциальности, чтобы понять обработку данных на устройстве, локальными уведомлениями, StoreKit и поиском иконок App Store.",
        "Ссылки на юридическую информацию."
      ],
      emailHelp: "При обращении укажите модель устройства, версию iOS, версию приложения, шаги воспроизведения и повторяется ли проблема стабильно. Без необходимости не отправляйте скриншоты с реальными суммами активов, номерами карт, полными выписками или другой чувствительной информацией."
    }
  });

  localizeSectionLabels(data["zh-Hant"], "zh-Hant");
  data["zh-Hant"].privacy.footer = [["index.html", "法律與支援首頁"], ["terms.html", "使用者協議"]];
  data["zh-Hant"].terms.footer = [["index.html", "法律與支援首頁"], ["privacy.html", "隱私政策"]];
  data["zh-Hant"].support.footer = [["index.html", "法律與支援首頁"]];
  data["zh-Hant"].support.sections[3].links = [["privacy.html", "隱私政策"], ["terms.html", "使用者協議"]];

  function translateFromEnglish(code, cfg) {
    const lang = JSON.parse(JSON.stringify(data.en));
    lang.common = cfg.common;
    lang.index.title = cfg.titles[0];
    lang.index.body = cfg.indexBody;
    lang.index.links = [["privacy.html", cfg.common.privacy], ["terms.html", cfg.common.terms], ["support.html", cfg.common.support]];
    lang.privacy.title = cfg.titles[1];
    lang.terms.title = cfg.titles[2];
    lang.support.title = cfg.titles[3];
    lang.support.intro = [cfg.supportIntro];
    lang.support.emailLabel = cfg.emailLabel;
    lang.support.sections[0].links = [["https://www.xiaohongshu.com/user/profile/671fced8000000001d033b1c", cfg.xhs]];
    lang.support.sections[3].links = [["privacy.html", cfg.common.privacy], ["terms.html", cfg.common.terms]];
    lang.privacy.footer = [["index.html", cfg.common.home], ["terms.html", cfg.common.terms]];
    lang.terms.footer = [["index.html", cfg.common.home], ["privacy.html", cfg.common.privacy]];
    lang.support.footer = [["index.html", cfg.common.home]];
    localizeSectionLabels(lang, code);
    return lang;
  }

  function localizeSectionLabels(lang, code) {
    const labels = {
      "zh-Hant": ["我們處理哪些資料", "哪些情況下會存取網路", "照片與截圖", "本機通知", "內購、訂閱和 Pro 狀態", "第三方圖示和本機上傳內容", "我們不會做的事", "資料刪除", "政策更新", "聯絡我們", "服務性質", "你的資料和責任", "截圖辨識和手動確認", "ArkFlow Pro、內購和訂閱", "Pro 功能邊界", "第三方 App 圖示、商標和使用者上傳圖片", "智慧財產權", "禁止行為", "免責聲明和責任限制", "協議更新", "聯絡我們", "社群與更新", "購買和訂閱問題", "隱私和資料問題", "法律資訊"],
      ja: ["処理するデータ", "ネットワークアクセスが使われる場合", "写真とスクリーンショット", "ローカル通知", "購入、サブスクリプション、Pro 状態", "第三者アイコンとアップロード内容", "当社が行わないこと", "データ削除", "ポリシー更新", "お問い合わせ", "サービスの性質", "あなたのデータと責任", "スクリーンショット認識と手動確認", "ArkFlow Pro、購入、サブスクリプション", "Pro 機能の範囲", "第三者アプリアイコン、商標、アップロード画像", "知的財産", "禁止行為", "免責事項と責任制限", "規約の変更", "お問い合わせ", "コミュニティと更新", "購入とサブスクリプションの問題", "プライバシーとデータの質問", "法律情報"],
      ko: ["처리하는 데이터", "네트워크 접근이 사용되는 경우", "사진 및 스크린샷", "로컬 알림", "구매, 구독 및 Pro 상태", "타사 아이콘 및 업로드 콘텐츠", "하지 않는 일", "데이터 삭제", "정책 업데이트", "문의", "서비스 성격", "사용자 데이터와 책임", "스크린샷 인식 및 수동 확인", "ArkFlow Pro, 구매 및 구독", "Pro 기능 범위", "타사 앱 아이콘, 상표 및 업로드 이미지", "지적 재산", "금지 행위", "면책 및 책임 제한", "약관 변경", "문의", "커뮤니티와 업데이트", "구매 및 구독 문제", "개인정보와 데이터 질문", "법률 정보"],
      es: ["Datos que tratamos", "Cuándo se usa acceso a red", "Fotos y capturas", "Notificaciones locales", "Compras, suscripciones y estado Pro", "Iconos de terceros y contenido subido", "Lo que no hacemos", "Eliminación de datos", "Actualizaciones de la política", "Contacto", "Naturaleza del servicio", "Tus datos y responsabilidades", "Reconocimiento de capturas y confirmación manual", "ArkFlow Pro, compras y suscripciones", "Límites de funciones Pro", "Iconos, marcas e imágenes subidas", "Propiedad intelectual", "Conductas prohibidas", "Descargo y limitación de responsabilidad", "Cambios en los términos", "Contacto", "Comunidad y actualizaciones", "Problemas de compra y suscripción", "Privacidad y datos", "Información legal"],
      fr: ["Données traitées", "Quand l'accès réseau est utilisé", "Photos et captures d'écran", "Notifications locales", "Achats, abonnements et statut Pro", "Icônes tierces et contenus importés", "Ce que nous ne faisons pas", "Suppression des données", "Mises à jour de la politique", "Nous contacter", "Nature du service", "Vos données et responsabilités", "Reconnaissance de captures et confirmation manuelle", "ArkFlow Pro, achats et abonnements", "Limites des fonctions Pro", "Icônes, marques et images importées", "Propriété intellectuelle", "Conduites interdites", "Clause de non-responsabilité et limitation", "Modification des conditions", "Nous contacter", "Communauté et mises à jour", "Achats et abonnements", "Confidentialité et données", "Informations juridiques"],
      de: ["Verarbeitete Daten", "Wann Netzwerkzugriff genutzt wird", "Fotos und Screenshots", "Lokale Mitteilungen", "Käufe, Abos und Pro-Status", "Drittanbieter-Icons und hochgeladene Inhalte", "Was wir nicht tun", "Datenlöschung", "Aktualisierung der Richtlinie", "Kontakt", "Art des Dienstes", "Ihre Daten und Verantwortung", "Screenshot-Erkennung und manuelle Bestätigung", "ArkFlow Pro, Käufe und Abos", "Grenzen der Pro-Funktionen", "App-Icons, Marken und hochgeladene Bilder", "Geistiges Eigentum", "Verbotenes Verhalten", "Haftungsausschluss und Begrenzung", "Änderungen der Bedingungen", "Kontakt", "Community und Updates", "Kauf- und Abo-Fragen", "Datenschutz und Daten", "Rechtliche Informationen"],
      "pt-BR": ["Dados que processamos", "Quando o acesso à rede é usado", "Fotos e capturas de tela", "Notificações locais", "Compras, assinaturas e status Pro", "Ícones de terceiros e conteúdo enviado", "O que não fazemos", "Exclusão de dados", "Atualizações da política", "Contato", "Natureza do serviço", "Seus dados e responsabilidades", "Reconhecimento de capturas e confirmação manual", "ArkFlow Pro, compras e assinaturas", "Limites dos recursos Pro", "Ícones, marcas e imagens enviadas", "Propriedade intelectual", "Condutas proibidas", "Isenção e limitação de responsabilidade", "Alterações destes termos", "Contato", "Comunidade e atualizações", "Problemas de compra e assinatura", "Privacidade e dados", "Informações legais"],
      ru: ["Какие данные мы обрабатываем", "Когда используется сеть", "Фото и скриншоты", "Локальные уведомления", "Покупки, подписки и статус Pro", "Сторонние иконки и загруженный контент", "Чего мы не делаем", "Удаление данных", "Обновления политики", "Связаться с нами", "Характер сервиса", "Ваши данные и ответственность", "Распознавание скриншотов и ручное подтверждение", "ArkFlow Pro, покупки и подписки", "Границы функций Pro", "Иконки приложений, товарные знаки и загруженные изображения", "Интеллектуальная собственность", "Запрещенное поведение", "Отказ от гарантий и ограничение ответственности", "Изменения условий", "Связаться с нами", "Сообщество и обновления", "Покупки и подписки", "Конфиденциальность и данные", "Юридическая информация"]
    }[code];
    if (!labels) return;
    lang.privacy.sections.forEach((section, index) => { section.h = labels[index]; });
    lang.terms.sections.forEach((section, index) => { section.h = labels[index + 10]; });
    lang.support.sections.forEach((section, index) => { section.h = labels[index + 21]; });
  }

  function applyCompactBodies(bundle) {
    Object.entries(bundle).forEach(([code, body]) => {
      const lang = data[code];
      if (!lang) return;
      replaceSectionBodies(lang.privacy.sections, body.privacy);
      replaceSectionBodies(lang.terms.sections, body.terms);
      replaceSectionBodies(lang.support.sections, body.support);
      if (body.privacyIntro) lang.privacy.intro = [body.privacyIntro];
      if (body.termsIntro) lang.terms.intro = [body.termsIntro];
      if (body.emailHelp) lang.support.emailHelp = body.emailHelp;
    });
  }

  function replaceSectionBodies(sections, texts) {
    sections.forEach((section, index) => {
      const text = texts[index];
      if (!text) return;
      section.p = [text];
      delete section.l;
    });
  }

  function cloneLang(base, overrides) {
    const next = JSON.parse(JSON.stringify(base));
    Object.keys(overrides).forEach((key) => {
      if (typeof overrides[key] === "object" && !Array.isArray(overrides[key])) {
        next[key] = Object.assign(next[key] || {}, overrides[key]);
      } else {
        next[key] = overrides[key];
      }
    });
    return next;
  }

  function initLanguageSelect(current) {
    languages.forEach(([code, name]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = name;
      select.append(option);
    });
    select.value = current;
    select.addEventListener("change", () => setLanguage(select.value, true));
  }

  function getInitialLanguage() {
    const hashLang = new URLSearchParams(location.hash.replace(/^#/, "")).get("lang");
    const saved = localStorage.getItem(storageKey);
    const browser = navigator.language || "";
    const normalizedBrowser = langCodes.find((code) => browser.toLowerCase() === code.toLowerCase())
      || langCodes.find((code) => browser.toLowerCase().startsWith(code.toLowerCase().split("-")[0]));
    return [hashLang, saved, normalizedBrowser, defaultLang].find((code) => langCodes.includes(code));
  }

  function setLanguage(lang, updateHash) {
    const current = langCodes.includes(lang) ? lang : defaultLang;
    localStorage.setItem(storageKey, current);
    document.documentElement.lang = current;
    document.documentElement.dir = "ltr";
    select.value = current;
    label.textContent = languages.find(([code]) => code === current)[2];
    render(current);
    if (updateHash) {
      history.replaceState(null, "", `#lang=${current}`);
    }
  }

  window.addEventListener("hashchange", () => {
    const hashLang = new URLSearchParams(location.hash.replace(/^#/, "")).get("lang");
    if (langCodes.includes(hashLang) && hashLang !== select.value) {
      setLanguage(hashLang, false);
    }
  });

  function render(lang) {
    const langData = data[lang] || data[defaultLang];
    const pageData = langData[page] || langData.index;
    document.title = `ArkFlow ${pageData.title}`;
    contentRoot.replaceChildren();

    contentRoot.append(
      textEl("p", "eyebrow", langData.common.brand),
      textEl("h1", "", pageData.title),
      textEl("p", "muted", langData.common.updated),
      textEl("p", "notice", langData.common.authority)
    );

    if (page === "index") {
      contentRoot.append(textEl("p", "", pageData.body), linkRow(pageData.links));
      return;
    }

    if (page === "support") {
      pageData.intro.forEach((paragraph) => contentRoot.append(textEl("p", "", paragraph)));
      const notice = document.createElement("div");
      notice.className = "notice";
      const emailLine = document.createElement("p");
      const strong = textEl("strong", "", pageData.emailLabel);
      const email = document.createElement("a");
      email.href = "mailto:arkflow@hotmail.com?subject=ArkFlow%20Support";
      email.textContent = "arkflow@hotmail.com";
      emailLine.append(strong, email);
      notice.append(emailLine, textEl("p", "muted", pageData.emailHelp));
      contentRoot.append(notice);
      renderSections(pageData.sections);
      contentRoot.append(makeFooter(pageData.footer));
      return;
    }

    pageData.intro.forEach((paragraph) => contentRoot.append(textEl("p", "", paragraph)));
    renderSections(pageData.sections);
    contentRoot.append(makeFooter(pageData.footer));
  }

  function renderSections(sections) {
    sections.forEach((section) => {
      contentRoot.append(textEl("h2", "", section.h));
      (section.p || []).forEach((paragraph) => contentRoot.append(textEl("p", "", paragraph)));
      if (section.l) {
        const list = document.createElement("ul");
        section.l.forEach((item) => list.append(textEl("li", "", item)));
        contentRoot.append(list);
      }
      if (section.links) contentRoot.append(linkRow(section.links));
    });
  }

  function textEl(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text || "";
    return element;
  }

  function linkRow(links) {
    const row = document.createElement("div");
    row.className = "pill-row";
    links.forEach(([href, text]) => {
      const link = document.createElement("a");
      link.className = "pill";
      link.href = href;
      link.textContent = text;
      if (/^https?:\/\//.test(href)) {
        link.rel = "noopener noreferrer";
      }
      row.append(link);
    });
    return row;
  }

  function makeFooter(links) {
    const footer = document.createElement("footer");
    links.forEach(([href, text], index) => {
      if (index) footer.append(" · ");
      const link = document.createElement("a");
      link.href = href;
      link.textContent = text;
      footer.append(link);
    });
    return footer;
  }

  const initial = getInitialLanguage();
  initLanguageSelect(initial);
  setLanguage(initial, false);
})();

// Legal copy sync: 2026-07-03 analytics consent disclosure.
