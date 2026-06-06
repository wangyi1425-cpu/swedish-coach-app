const lessons = {
  preschool: {
    tag: "幼儿园",
    title: "幼儿园老师说孩子今天有点累",
    intro: "练习如何感谢提醒、追问症状，并说明你回家会观察。",
    dialogue: [
      ["Pedagog", "Han har varit lite trött idag och ville inte äta så mycket lunch.", "他今天有点累，午饭也没怎么吃。"],
      ["Du", "Tack för att du säger till. Han verkade som vanligt hemma i morse.", "谢谢你告诉我。他今天早上在家看起来和平时一样。"],
      ["Du", "Har han haft feber eller verkat ha ont någonstans?", "他有发烧吗，或者看起来哪里疼吗？"],
      ["Pedagog", "Nej, mest trött. Men vi håller lite koll här också.", "没有，主要是累。我们这边也会留意。"],
      ["Du", "Bra, då håller vi lite extra koll på honom hemma.", "好的，那我们回家也多留意他一点。"]
    ],
    blocks: [
      ["Tack för att du säger till.", "谢谢你告诉我。"],
      ["Han verkade som vanligt hemma i morse.", "他今天早上在家看起来和平时一样。"],
      ["Har han haft feber?", "他有发烧吗？"],
      ["Vi håller lite extra koll på honom hemma.", "我们回家会多留意他一点。"],
      ["Om han inte verkar må bra imorgon heller, hör jag av mig till er.", "如果他明天看起来还是不舒服，我会联系你们。"]
    ],
    drills: [
      ["把“他今天早上看起来和平时一样”换成“他今天早上看起来有点累”。", "Han verkade lite trött hemma i morse."],
      ["问老师：他有没有咳嗽？", "Har han hostat något?"],
      ["说：如果他明天还是咳嗽，我会联系你们。", "Om han fortfarande hostar imorgon, hör jag av mig till er."]
    ],
    prompt: "用瑞典语说或写 3-5 句：谢谢老师提醒；说明他早上在家状态；问一个症状；说明你回家会观察；如果明天还不舒服会联系幼儿园。",
    quick: "Tack för att du säger till. Har han haft feber? Vi håller lite extra koll på honom hemma."
  },
  healthcare: {
    tag: "医疗",
    title: "给 vårdcentral 或 1177 描述孩子症状",
    intro: "练习简洁说明症状、时间、严重程度，以及你想获得建议。",
    dialogue: [
      ["Sjuksköterska", "Vad gäller det?", "请问是什么情况？"],
      ["Du", "Min son är två år och fyra månader. Han har haft feber sedan igår kväll.", "我儿子两岁四个月。他从昨晚开始发烧。"],
      ["Sjuksköterska", "Hur hög feber har han haft?", "最高烧到多少？"],
      ["Du", "Som högst 39 grader. Han dricker, men äter inte så mycket.", "最高 39 度。他喝水，但吃得不多。"],
      ["Du", "Jag skulle vilja få råd om vad vi ska göra.", "我想咨询一下我们应该怎么做。"]
    ],
    blocks: [
      ["Vad gäller det?", "是什么情况？"],
      ["Han har haft feber sedan igår kväll.", "他从昨晚开始发烧。"],
      ["Som högst 39 grader.", "最高 39 度。"],
      ["Han dricker, men äter inte så mycket.", "他喝水，但吃得不多。"],
      ["Jag skulle vilja få råd om vad vi ska göra.", "我想咨询我们该怎么做。"]
    ],
    drills: [
      ["把“从昨晚开始发烧”换成“从今天早上开始咳嗽”。", "Han har hostat sedan i morse."],
      ["说：他喝得还可以，但吃得很少。", "Han dricker ganska bra, men äter väldigt lite."],
      ["礼貌地说：我想预约一个时间。", "Jag skulle vilja boka en tid."]
    ],
    prompt: "用瑞典语说或写 3-5 句：孩子年龄；症状从什么时候开始；最高温度或严重程度；饮食/喝水情况；你想得到建议或预约。",
    quick: "Min son är två år och fyra månader. Han har haft feber sedan igår kväll. Jag skulle vilja få råd."
  },
  public: {
    tag: "公共服务",
    title: "联系 Försäkringskassan/kommun 询问材料",
    intro: "练习礼貌说明来意、确认缺少什么、请求对方重复或发邮件。",
    dialogue: [
      ["Handläggare", "Hur kan jag hjälpa dig?", "我可以怎么帮你？"],
      ["Du", "Jag ringer angående mitt ärende och vill bara kontrollera om ni behöver något mer från mig.", "我打电话是关于我的案件，想确认你们是否还需要我补充什么。"],
      ["Handläggare", "Jag ska titta. Kan jag få ditt personnummer?", "我看一下。可以给我你的个人号码吗？"],
      ["Du", "Absolut. Kan du säga till om jag pratar för snabbt eller otydligt?", "当然。如果我说太快或不清楚，请告诉我。"],
      ["Du", "Skulle du kunna skicka informationen skriftligt också?", "你也可以把信息书面发给我吗？"]
    ],
    blocks: [
      ["Jag ringer angående mitt ärende.", "我打电话是关于我的案件。"],
      ["Behöver ni något mer från mig?", "你们还需要我补充什么吗？"],
      ["Kan du upprepa det lite långsammare?", "你可以稍微慢一点重复吗？"],
      ["Skulle du kunna skicka informationen skriftligt också?", "你也可以把信息书面发给我吗？"],
      ["Tack, då vet jag vad jag ska göra.", "谢谢，那我知道接下来该怎么做了。"]
    ],
    drills: [
      ["说：我想确认你们是否收到我的材料。", "Jag vill kontrollera om ni har fått mina handlingar."],
      ["请对方说慢一点。", "Kan du säga det lite långsammare?"],
      ["请对方通过邮件发送信息。", "Skulle du kunna skicka informationen via mejl?"]
    ],
    prompt: "用瑞典语说或写 3-5 句：你打电话关于一个 ärende；想确认是否缺材料；请对方慢一点重复；请求书面发送；最后感谢。",
    quick: "Jag ringer angående mitt ärende. Behöver ni något mer från mig? Kan du säga det lite långsammare?"
  },
  social: {
    tag: "日常社交",
    title: "和邻居或家长自然闲聊两三句",
    intro: "练习不尴尬地回应、接一句问题，并自然结束对话。",
    dialogue: [
      ["Granne", "Hur går det med förskolan?", "幼儿园适应得怎么样？"],
      ["Du", "Det går bättre och bättre. Han verkar trivas ganska bra nu.", "越来越好了。他现在看起来挺喜欢的。"],
      ["Granne", "Vad skönt!", "那太好了！"],
      ["Du", "Ja, verkligen. Hur går det för er?", "是啊，真的。你们怎么样？"],
      ["Du", "Vi måste vidare nu, men det var trevligt att ses.", "我们现在得走了，不过见到你很开心。"]
    ],
    blocks: [
      ["Det går bättre och bättre.", "越来越好了。"],
      ["Han verkar trivas ganska bra nu.", "他现在看起来挺适应/挺喜欢的。"],
      ["Ja, verkligen.", "是啊，真的。"],
      ["Hur går det för er?", "你们怎么样？"],
      ["Det var trevligt att ses.", "见到你很开心。"]
    ],
    drills: [
      ["说：他现在适应得好多了。", "Han trivs mycket bättre nu."],
      ["回应：是啊，这周好多了。", "Ja, den här veckan har det gått mycket bättre."],
      ["自然结束：我们现在得去幼儿园了。", "Vi måste gå till förskolan nu."]
    ],
    prompt: "用瑞典语说或写 3-5 句：回应别人问幼儿园怎么样；说明孩子适应情况；反问对方；自然结束对话。",
    quick: "Det går bättre och bättre. Han verkar trivas ganska bra nu. Hur går det för er?"
  },
  work: {
    tag: "工作礼貌",
    title: "在工作里礼貌确认和推迟回复",
    intro: "练习简短、清楚、不卑微的职场瑞典语。",
    dialogue: [
      ["Kollega", "Har du hunnit titta på det här?", "你有时间看这个了吗？"],
      ["Du", "Inte ordentligt än, men jag kan titta på det efter lunch.", "还没有认真看，但我午饭后可以看。"],
      ["Kollega", "Toppen.", "太好了。"],
      ["Du", "Jag återkommer om jag har några frågor.", "如果我有问题，我再联系你。"],
      ["Du", "Är det bråttom, eller räcker det senare idag?", "这个急吗，还是今天晚些时候可以？"]
    ],
    blocks: [
      ["Inte ordentligt än.", "还没有认真/完整看。"],
      ["Jag kan titta på det efter lunch.", "我午饭后可以看。"],
      ["Jag återkommer om jag har några frågor.", "如果我有问题，我再联系你。"],
      ["Är det bråttom?", "这个急吗？"],
      ["Räcker det senare idag?", "今天晚些时候可以吗？"]
    ],
    drills: [
      ["说：我明天上午可以看。", "Jag kan titta på det imorgon förmiddag."],
      ["问：今天晚些时候回复可以吗？", "Räcker det om jag återkommer senare idag?"],
      ["说：我需要先确认一下。", "Jag behöver kolla upp det först."]
    ],
    prompt: "用瑞典语说或写 3-5 句：说明你还没仔细看；给出可处理时间；问是否紧急；表示有问题会联系对方。",
    quick: "Inte ordentligt än. Jag kan titta på det efter lunch. Är det bråttom?"
  }
};

const modes = {
  daily: {
    title: "完整练习",
    intro: "15-30 分钟。先理解，再替换，最后输出 3-5 句。",
    summary: "完整练习会保留今日开场、经文、亲子表达和场景任务。"
  },
  quick: {
    title: "厕所版",
    intro: "3-5 分钟。只练一句能马上用的自然回应。",
    summary: "厕所版只保留最短路径：核心句、输出框和点评。"
  },
  record: {
    title: "录音模式",
    intro: "读瑞典语句子，保存录音，再发给教练做严格纠错。",
    summary: "录音模式会突出经文朗读、表达块朗读和录音控件。"
  },
  review: {
    title: "复习抽查",
    intro: "随机抽之前场景里的表达块，重点检查能不能脱口而出。",
    summary: "复习抽查会隐藏新内容，重点看你能不能主动回忆。"
  },
  free: {
    title: "自由造句",
    intro: "用今天场景自由写或说 3-5 句，目标是准确清楚和自然。",
    summary: "自由造句给你更大的空间，写完后可以直接请教练点评。"
  }
};

const cultureNotes = [
  {
    title: "“lagom”不只是适中",
    copy:
      "在工作、公共服务和邻里互动里，lagom 常常是一种低冲突、高可预期的表达风格：不要过度解释，也不要让对方猜。清楚、克制、留余地，通常比热情铺陈更有效。"
  },
  {
    title: "瑞典式礼貌常藏在 modal verbs 里",
    copy:
      "Skulle du kunna、Jag skulle vilja、Det vore bra om 这些表达并不是绕弯，而是在保护双方的空间。你在医疗和政府电话里用它们，会显得既礼貌又不弱。"
  },
  {
    title: "förskola 对话里，状态比诊断更重要",
    copy:
      "老师通常会描述孩子的状态：trött、hängig、ledsen、inte sig själv。回应时先接住状态，再问具体症状，比急着判断原因更自然。"
  },
  {
    title: "“hör av mig”是一种关系维护",
    copy:
      "瑞典语里的 hör av mig 不只是“联系你”，还带一点“我会负责后续沟通”的意思。幼儿园、邻居、同事之间都很常用，语气比 kontakta 更日常。"
  },
  {
    title: "公共服务电话里，书面确认很正常",
    copy:
      "请求 Skulle du kunna skicka det skriftligt? 并不显得麻烦，而是很瑞典式的风险控制。尤其涉及 Försäkringskassan、Skatteverket 或 kommun 时，这是成熟沟通。"
  },
  {
    title: "瑞典闲聊常用“轻问题”续航",
    copy:
      "Hur går det för er?、Har ni haft en bra helg? 这类问题不是为了深入聊天，而是给对方一个舒服的回应入口。它们让对话自然延长，也方便自然结束。"
  },
  {
    title: "说不确定，反而更像母语者",
    copy:
      "Jag är inte helt säker, men...、Jag behöver kolla upp det först. 这些表达在瑞典工作语境里很正常。清楚标出不确定性，通常比硬撑答案更专业。"
  }
];

const dailyVerses = [
  {
    ref: "Psaltaren 23:1",
    sv: "Herren är min herde, mig skall intet fattas.",
    zh: "耶和华是我的牧者，我必不至缺乏。",
    prayer: "Herre, tack för att du är min herde. Hjälp mig att vila i din omsorg idag."
  },
  {
    ref: "Psaltaren 46:2",
    sv: "Gud är vår tillflykt och vår starkhet, en hjälp i nöden, väl beprövad.",
    zh: "神是我们的避难所，是我们的力量，是我们在患难中随时的帮助。",
    prayer: "Gud, var min tillflykt idag. Ge mig ro när jag känner mig osäker."
  },
  {
    ref: "Ordspråksboken 3:5",
    sv: "Förtrösta på Herren av allt ditt hjärta och förlita dig icke på ditt förstånd.",
    zh: "你要专心仰赖耶和华，不可倚靠自己的聪明。",
    prayer: "Herre, lär mig att förtrösta på dig. Led mina ord, mina beslut och mitt mod."
  },
  {
    ref: "Matteusevangeliet 6:34",
    sv: "Gören eder alltså icke bekymmer för morgondagen.",
    zh: "所以，不要为明天忧虑。",
    prayer: "Jesus, hjälp mig att lägga morgondagen i dina händer och vara närvarande idag."
  },
  {
    ref: "Filipperbrevet 4:6",
    sv: "Gören eder intet bekymmer, utan låten i allting edra önskningar bliva kunniga inför Gud.",
    zh: "应当一无挂虑，只要凡事借着祷告、祈求告诉神。",
    prayer: "Gud, jag kommer till dig med det som oroar mig. Ge mig frid och klarhet."
  },
  {
    ref: "Jakobsbrevet 1:5",
    sv: "Om någon av eder brister i vishet, så må han utbedja sig sådan från Gud.",
    zh: "你们中间若有缺少智慧的，应当求那厚赐与众人的神。",
    prayer: "Herre, ge mig vishet idag, särskilt i samtal där jag behöver vara tydlig och mild."
  },
  {
    ref: "Kolosserbrevet 3:12",
    sv: "Så ikläden eder nu, såsom Guds utvalda, innerlig barmhärtighet, godhet, ödmjukhet, saktmod, tålamod.",
    zh: "所以你们既是神的选民，就要存怜悯、恩慈、谦虚、温柔、忍耐。",
    prayer: "Herre, klä mig i tålamod och mildhet idag, hemma och i alla möten med andra."
  }
];

const childPhrases = [
  [
    ["Kom, så tar vi på skorna.", "来，我们穿鞋。"],
    ["Vill du hålla mamma i handen?", "你想牵妈妈的手吗？"],
    ["Vi går försiktigt här.", "我们在这里慢慢走/小心走。"]
  ],
  [
    ["Är du hungrig eller bara trött?", "你是饿了，还是只是累了？"],
    ["Vill du ha vatten?", "你想喝水吗？"],
    ["Ta en tugga till, om du vill.", "如果你愿意，再吃一口。"]
  ],
  [
    ["Jag ser att du är ledsen.", "我看见你很难过。"],
    ["Det är okej att vara arg, men vi slåss inte.", "可以生气，但我们不打人。"],
    ["Kom, jag hjälper dig.", "来，我帮你。"]
  ],
  [
    ["Nu byter vi blöja.", "现在我们换尿布。"],
    ["Ligg stilla en liten stund.", "稍微躺好一会儿。"],
    ["Så, nu är du klar.", "好了，现在弄好了。"]
  ],
  [
    ["Dags att borsta tänderna.", "该刷牙了。"],
    ["Först pyjamas, sedan saga.", "先穿睡衣，然后讲故事。"],
    ["Nu säger vi god natt.", "现在我们说晚安。"]
  ],
  [
    ["Vill du prova själv?", "你想自己试试吗？"],
    ["Bra försökt, vi provar igen.", "试得很好，我们再试一次。"],
    ["Jag är stolt över dig.", "我为你骄傲。"]
  ],
  [
    ["Vi väntar på vår tur.", "我们等轮到我们。"],
    ["Säg tack.", "说谢谢。"],
    ["Kan du ge den till mig?", "你可以把那个给我吗？"]
  ]
];

const levelStages = [
  {
    min: 0,
    max: 6,
    name: "生活回应打底期",
    feedback: "你现在重点在把“听懂”转换成自然回应，先稳住幼儿园、医疗和日常问答的高频表达。"
  },
  {
    min: 7,
    max: 20,
    name: "场景反应加速期",
    feedback: "你已经开始积累可直接出口的表达块。下一步是减少中英翻译痕迹，让回应更短、更顺。"
  },
  {
    min: 21,
    max: 44,
    name: "自然表达塑形期",
    feedback: "你正在从“能说出来”走向“像瑞典生活里会这样说”。重点练语序、时态和固定搭配。"
  },
  {
    min: 45,
    max: 89,
    name: "生活工作衔接期",
    feedback: "你的目标可以放到部分工作沟通：礼貌确认、推迟回复、解释情况、请求书面信息。"
  },
  {
    min: 90,
    max: 180,
    name: "瑞典语生活化期",
    feedback: "你已经有稳定输入输出节奏。现在要练的是反应速度、语气细节和更真实的对话回合。"
  }
];

const state = {
  scenario: localStorage.getItem("scenario") || "preschool",
  mode: "daily",
  mediaRecorder: null,
  audioChunks: [],
  deferredInstallPrompt: null
};

const els = {
  dateLabel: document.getElementById("dateLabel"),
  screenTitle: document.getElementById("screenTitle"),
  modeSummary: document.getElementById("modeSummary"),
  greetingTitle: document.getElementById("greetingTitle"),
  greetingCopy: document.getElementById("greetingCopy"),
  cultureIndex: document.getElementById("cultureIndex"),
  cultureTitle: document.getElementById("cultureTitle"),
  cultureCopy: document.getElementById("cultureCopy"),
  levelName: document.getElementById("levelName"),
  levelPercent: document.getElementById("levelPercent"),
  levelFill: document.getElementById("levelFill"),
  levelFeedback: document.getElementById("levelFeedback"),
  verseRef: document.getElementById("verseRef"),
  verseText: document.getElementById("verseText"),
  verseZh: document.getElementById("verseZh"),
  prayerPrompt: document.getElementById("prayerPrompt"),
  childPhraseList: document.getElementById("childPhraseList"),
  playVerseButton: document.getElementById("playVerseButton"),
  copyChildButton: document.getElementById("copyChildButton"),
  completionCard: document.getElementById("completionCard"),
  completionTitle: document.getElementById("completionTitle"),
  completionCopy: document.getElementById("completionCopy"),
  learnMoreButton: document.getElementById("learnMoreButton"),
  extraTaskCard: document.getElementById("extraTaskCard"),
  extraTaskPrompt: document.getElementById("extraTaskPrompt"),
  extraTaskBlocks: document.getElementById("extraTaskBlocks"),
  closeExtraTaskButton: document.getElementById("closeExtraTaskButton"),
  scenarioTag: document.getElementById("scenarioTag"),
  scenarioTitle: document.getElementById("scenarioTitle"),
  scenarioIntro: document.getElementById("scenarioIntro"),
  dialogueList: document.getElementById("dialogueList"),
  blockList: document.getElementById("blockList"),
  drillList: document.getElementById("drillList"),
  outputPrompt: document.getElementById("outputPrompt"),
  answerBox: document.getElementById("answerBox"),
  feedbackPanel: document.getElementById("feedbackPanel"),
  feedbackContent: document.getElementById("feedbackContent"),
  clearFeedbackButton: document.getElementById("clearFeedbackButton"),
  toast: document.getElementById("toast"),
  streakCount: document.getElementById("streakCount"),
  doneCount: document.getElementById("doneCount"),
  extraCount: document.getElementById("extraCount"),
  progressFill: document.getElementById("progressFill"),
  completeButton: document.getElementById("completeButton"),
  audioPlayback: document.getElementById("audioPlayback"),
  recordButton: document.getElementById("recordButton"),
  downloadRecording: document.getElementById("downloadRecording"),
  installButton: document.getElementById("installButton")
};

function todayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate() {
  return new Intl.DateTimeFormat("zh-CN", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date());
}

function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function getProgress() {
  const fallback = { done: 0, extra: 0, lastDone: "", streak: 0 };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem("progress")) || {}) };
  } catch {
    return fallback;
  }
}

function saveProgress(progress) {
  localStorage.setItem("progress", JSON.stringify(progress));
}

function getLevel(done) {
  return levelStages.find((stage) => done >= stage.min && done <= stage.max) || levelStages[levelStages.length - 1];
}

function renderCoachBoard(progress) {
  const hour = new Date().getHours();
  const lesson = lessons[state.scenario];
  const greeting =
    hour < 11
      ? "早上好，Eva。今天先练一句能马上接住对话的话。"
      : hour < 17
        ? "Eva，今天给瑞典语一点位置。短短一轮，也算数。"
        : "晚上好，Eva。今天不用拼强度，把一句话说顺就很好。";

  els.greetingTitle.textContent = greeting;
  els.greetingCopy.textContent = `今天场景是“${lesson.tag}”。目标不是打卡，是让你下次听懂以后能更快、更自然地回一句。`;

  const cultureIndex = dayOfYear() % cultureNotes.length;
  const note = cultureNotes[cultureIndex];
  els.cultureIndex.textContent = `${cultureIndex + 1}/${cultureNotes.length}`;
  els.cultureTitle.textContent = note.title;
  els.cultureCopy.textContent = note.copy;

  const done = progress.done || 0;
  const stage = getLevel(done);
  const span = Math.max(stage.max - stage.min + 1, 1);
  const percent = Math.min(100, Math.round(((done - stage.min) / span) * 100));
  els.levelName.textContent = stage.name;
  els.levelPercent.textContent = `${percent}%`;
  els.levelFill.style.width = `${percent}%`;
  els.levelFeedback.textContent = stage.feedback;

  const completedToday = progress.lastDone === todayKey();
  els.completionCard.classList.toggle("visible", completedToday);
  els.completeButton.classList.toggle("completed", completedToday);
  els.completeButton.textContent = completedToday ? "已完成" : "完成今天";
  els.completeButton.setAttribute("aria-pressed", completedToday ? "true" : "false");
  els.completionTitle.textContent = completedToday ? "已完成，Eva，今天这一步很稳" : "完成后这里会出现加练入口";
  els.completionCopy.textContent = completedToday
    ? `你今天已经完成了“${lesson.tag}”主线训练。不是靠真实社交硬冲，而是在练听懂后的自然回应。累计完成 ${progress.done || 0} 次，加练 ${progress.extra || 0} 次。`
    : "今天先做一轮主线练习。完成后，如果还有时间，可以继续加练一个轻量场景。";
}

function getDailyVerse() {
  return dailyVerses[dayOfYear() % dailyVerses.length];
}

function renderFaithAndFamily() {
  const index = dayOfYear() % childPhrases.length;
  const verse = getDailyVerse();
  els.verseRef.textContent = `${verse.ref} · Svenska Bibeln 1917`;
  els.verseText.textContent = verse.sv;
  els.verseZh.textContent = verse.zh;
  els.prayerPrompt.textContent = `根据这节经文，用瑞典语祷告 2-3 句。可以这样开始：${verse.prayer}`;
  els.childPhraseList.innerHTML = childPhrases[index]
    .map(([sv, zh]) => {
      return `
        <div class="child-phrase-item">
          <p class="sv">${sv}</p>
          <p class="zh">${zh}</p>
        </div>
      `;
    })
    .join("");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("visible"), 1800);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    showToast("当前浏览器不支持朗读。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "sv-SE";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function renderDialogue(lesson) {
  els.dialogueList.innerHTML = lesson.dialogue
    .map(([speaker, sv, zh]) => {
      return `
        <div class="dialogue-item">
          <span class="speaker">${speaker}</span>
          <p class="sv">${sv}</p>
          <p class="zh">${zh}</p>
        </div>
      `;
    })
    .join("");
}

function renderBlocks(lesson) {
  els.blockList.innerHTML = lesson.blocks
    .map(([sv, zh]) => {
      return `
        <div class="block-item">
          <p class="sv">${sv}</p>
          <p class="zh">${zh}</p>
        </div>
      `;
    })
    .join("");
}

function renderDrills(lesson) {
  els.drillList.classList.remove("show-answers");
  els.drillList.innerHTML = lesson.drills
    .map(([task, answer]) => {
      return `
        <div class="drill-item">
          <p class="zh">${task}</p>
          <p class="answer">${answer}</p>
        </div>
      `;
    })
    .join("");
}

function renderModeContent(lesson) {
  const mode = modes[state.mode];
  const verse = getDailyVerse();
  els.screenTitle.textContent = mode.title;
  els.modeSummary.textContent = mode.summary;

  if (state.mode === "quick") {
    els.outputPrompt.textContent = `极简练习：先听一遍，再跟读三遍。句子：${lesson.quick}`;
    els.answerBox.placeholder = "把这句改成你自己的情况，例如换症状、换时间、换联系人。";
    return;
  }

  if (state.mode === "record") {
    const text = `${verse.sv} ${lesson.blocks.map(([sv]) => sv).slice(0, 3).join(" ")}`;
    els.outputPrompt.textContent = `请录音朗读：${text}`;
    els.answerBox.placeholder = "录音后可以在这里写下你觉得卡住的词，或者把转写文本发给教练。";
    return;
  }

  if (state.mode === "review") {
    const items = lesson.blocks.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    els.outputPrompt.textContent = `复习抽查：请遮住瑞典语，看中文说瑞典语。${items
      .map(([, zh], index) => `${index + 1}. ${zh}`)
      .join(" ")}`;
    els.answerBox.placeholder = "写下你能回忆出的瑞典语，再点击核心表达块核对。";
    return;
  }

  if (state.mode === "free") {
    els.outputPrompt.textContent = "自由造句：围绕这个场景写或说 3-5 句。尽量使用今天的表达块，但要换成自己的真实情况。";
    els.answerBox.placeholder = "例如：Tack för att du säger till...";
    return;
  }

  els.outputPrompt.textContent = `${lesson.prompt} 额外信仰练习：根据今日经文写 2-3 句瑞典语祷告。`;
  els.answerBox.placeholder = "在这里写 3-5 句瑞典语。也可以录音后把文本发给教练严格纠错。";
}

function getExtraTask() {
  try {
    return JSON.parse(localStorage.getItem("extraTask"));
  } catch {
    return null;
  }
}

function saveExtraTask(task) {
  if (!task) {
    localStorage.removeItem("extraTask");
    return;
  }
  localStorage.setItem("extraTask", JSON.stringify(task));
}

function renderExtraTask() {
  const task = getExtraTask();
  els.extraTaskCard.classList.toggle("visible", Boolean(task));
  if (!task) return;
  els.extraTaskPrompt.textContent = task.prompt;
  els.extraTaskBlocks.innerHTML = task.blocks
    .map(([sv, zh]) => {
      return `
        <div class="block-item">
          <p class="sv">${sv}</p>
          <p class="zh">${zh}</p>
        </div>
      `;
    })
    .join("");
}

function render() {
  const lesson = lessons[state.scenario];
  const progress = getProgress();
  document.body.className = `mode-${state.mode}`;
  els.dateLabel.textContent = formatDate();
  els.scenarioTag.textContent = lesson.tag;
  els.scenarioTitle.textContent = lesson.title;
  els.scenarioIntro.textContent = state.mode === "daily" ? lesson.intro : modes[state.mode].intro;
  renderCoachBoard(progress);
  renderFaithAndFamily();
  renderDialogue(lesson);
  renderBlocks(lesson);
  renderDrills(lesson);
  renderModeContent(lesson);
  renderExtraTask();

  document.querySelectorAll(".chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === state.scenario);
  });
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  els.streakCount.textContent = `${progress.streak || 0} 天`;
  els.doneCount.textContent = `${progress.done || 0} 次`;
  els.extraCount.textContent = `${progress.extra || 0} 次`;
  els.progressFill.style.width = `${Math.min((progress.done || 0) * 8, 100)}%`;
}

async function copyText(text, success) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(success);
  } catch {
    els.answerBox.value = text;
    els.answerBox.select();
    showToast("已放到输入框，可以手动复制。");
  }
}

function completeToday() {
  const progress = getProgress();
  const key = todayKey();
  const wasCompleted = progress.lastDone === key;
  if (progress.lastDone !== key) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(
      yesterday.getDate()
    ).padStart(2, "0")}`;
    progress.done = (progress.done || 0) + 1;
    progress.streak = progress.lastDone === yKey ? (progress.streak || 0) + 1 : 1;
    progress.lastDone = key;
    saveProgress(progress);
    const stage = getLevel(progress.done || 0);
    showToast(`做得好，Eva。今天完成的是“${lessons[state.scenario].tag}”回应训练，当前阶段：${stage.name}。`);
  } else {
    showToast("Eva，今天已经记录过了。你可以继续录音或做复习抽查。");
  }
  render();
  if (!wasCompleted || els.completionCard.classList.contains("visible")) {
    els.completionCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function learnMore() {
  const keys = Object.keys(lessons);
  const currentIndex = keys.indexOf(state.scenario);
  state.scenario = keys[(currentIndex + 1) % keys.length];
  state.mode = "quick";
  localStorage.setItem("scenario", state.scenario);

  const progress = getProgress();
  progress.extra = (progress.extra || 0) + 1;
  saveProgress(progress);

  const lesson = lessons[state.scenario];
  const task = {
    scenario: state.scenario,
    prompt: `加练 ${progress.extra || 1}：用“${lesson.tag}”场景说 3 句。第一句回应对方，第二句追问或说明情况，第三句自然结束。`,
    blocks: [
      lesson.blocks[0],
      lesson.blocks[Math.min(1, lesson.blocks.length - 1)],
      ["Säg det kort, lugnt och naturligt.", "说短一点、稳一点、自然一点。"]
    ]
  };
  saveExtraTask(task);
  els.answerBox.value = "";
  showToast(`Eva，给你加一轮“${lessons[state.scenario].tag}”轻量练习。今天多学一点，很赚。`);
  render();
  els.extraTaskCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function splitSentences(text) {
  return text
    .split(/[.!?。！？\n]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildCoachFeedback(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return `
      <p class="feedback-title">先写 3-5 句瑞典语，我再点评。</p>
      <p class="zh">你可以直接写今天输出任务，或者写一段根据经文的瑞典语祷告。</p>
    `;
  }

  const issues = [];
  const strengths = [];
  const lower = trimmed.toLowerCase();
  const sentences = splitSentences(trimmed);

  if (sentences.length >= 3) strengths.push("句子数量够，已经有口语输出的完整感。");
  if (/tack för att du säger till/i.test(trimmed)) strengths.push("“Tack för att du säger till” 很自然，适合幼儿园和日常提醒。");
  if (/hör jag av mig till er/i.test(trimmed)) strengths.push("“hör jag av mig till er” 用得好，比 kontakta er 更日常。");
  if (/herre|gud|jesus/i.test(trimmed)) strengths.push("祷告语境明确，适合继续练信仰表达。");

  if (/verkar[^.!?\n]*(i morse|igår|förra)/i.test(trimmed)) {
    issues.push(["时态", "有过去时间词时，verkar 要改成 verkade。例：Han verkade som vanligt hemma i morse."]);
  }
  if (/har du han/i.test(lower)) {
    issues.push(["词序", "“Har du han...” 不自然。问孩子状态直接说：Har han varit snuvig? 如果要问老师是否注意到，说：Har du märkt om han har varit snuvig?"]);
  }
  if (/\bhan haft\b/i.test(lower)) {
    issues.push(["完整句", "“han haft” 少了助动词。问句：Har han haft feber? 陈述：Han har haft feber."]);
  }
  if (/väck|väcker|väckade/i.test(lower)) {
    issues.push(["词汇", "如果你想说“看起来”，用 verka：Han verkade trött. väcka 是“叫醒别人”，vakna 是“醒来”。"]);
  }
  if (/hålla på hemma/i.test(lower)) {
    issues.push(["搭配", "“留意他”不要说 hålla på hemma，要说：hålla koll på honom hemma。"]);
  }
  if (/jag ska kontakta er|jag ska säga till er/i.test(lower)) {
    issues.push(["自然度", "这里更自然的是：Jag hör av mig till er."]);
  }
  if (/inte känns bra/i.test(lower)) {
    issues.push(["自然度", "孩子“不舒服”更自然说：han inte verkar må bra 或 han fortfarande inte mår bra。"]);
  }

  const nextStep =
    issues.length > 0
      ? "下一步：先只改上面第一条错误，再大声读两遍。不要一次改太多。"
      : "下一步：这段可以进入录音模式，练语速、重音和语调。";

  return `
    <p class="feedback-title">点评结果</p>
    <div class="feedback-group">
      <strong>正反馈</strong>
      <p>${strengths.length ? strengths.join(" ") : "你已经开始主动输出了，这一步很关键。现在重点是把句子压短、说稳。"}</p>
    </div>
    <div class="feedback-group">
      <strong>需要改</strong>
      ${
        issues.length
          ? issues.map(([title, body]) => `<p><span>${title}：</span>${body}</p>`).join("")
          : "<p>没有发现明显高频错误。可以继续追求更自然的词序和语气。</p>"
      }
    </div>
    <div class="feedback-group">
      <strong>教练建议</strong>
      <p>${nextStep}</p>
    </div>
  `;
}

function showCoachFeedback() {
  els.feedbackContent.innerHTML = buildCoachFeedback(els.answerBox.value);
  els.feedbackPanel.classList.add("visible");
  els.feedbackPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function toggleRecording() {
  if (state.mediaRecorder?.state === "recording") {
    state.mediaRecorder.stop();
    els.recordButton.textContent = "开始录音";
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("当前浏览器不支持录音。");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.audioChunks = [];
    state.mediaRecorder = new MediaRecorder(stream);
    state.mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) state.audioChunks.push(event.data);
    });
    state.mediaRecorder.addEventListener("stop", () => {
      const blob = new Blob(state.audioChunks, { type: "audio/webm" });
      const audioUrl = URL.createObjectURL(blob);
      els.audioPlayback.src = audioUrl;
      els.downloadRecording.href = audioUrl;
      els.downloadRecording.classList.add("visible");
      stream.getTracks().forEach((track) => track.stop());
      showToast("录音已生成，可以播放检查。");
    });
    state.mediaRecorder.start();
    els.recordButton.textContent = "停止录音";
  } catch {
    showToast("没有获得麦克风权限。");
  }
}

document.querySelectorAll(".chip").forEach((button) => {
  button.addEventListener("click", () => {
    state.scenario = button.dataset.scenario;
    localStorage.setItem("scenario", state.scenario);
    render();
  });
});

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    render();
    document.querySelector(".topbar").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("shuffleButton").addEventListener("click", () => {
  const keys = Object.keys(lessons);
  const currentIndex = keys.indexOf(state.scenario);
  state.scenario = keys[(currentIndex + 1) % keys.length];
  localStorage.setItem("scenario", state.scenario);
  render();
});

document.getElementById("completeButton").addEventListener("click", completeToday);

document.getElementById("playDialogueButton").addEventListener("click", () => {
  const text = lessons[state.scenario].dialogue.map(([, sv]) => sv).join(" ");
  speak(text);
});

els.playVerseButton.addEventListener("click", () => {
  speak(getDailyVerse().sv);
});

document.getElementById("copyBlocksButton").addEventListener("click", () => {
  const text = lessons[state.scenario].blocks.map(([sv, zh]) => `${sv}\n${zh}`).join("\n\n");
  copyText(text, "表达块已复制。");
});

els.copyChildButton.addEventListener("click", () => {
  const text = Array.from(els.childPhraseList.querySelectorAll(".child-phrase-item"))
    .map((item) => item.innerText)
    .join("\n\n");
  copyText(text, "亲子表达已复制。");
});

document.getElementById("copyPromptButton").addEventListener("click", () => {
  showCoachFeedback();
});

document.getElementById("showAnswersButton").addEventListener("click", () => {
  els.drillList.classList.toggle("show-answers");
});

els.recordButton.addEventListener("click", toggleRecording);
els.learnMoreButton.addEventListener("click", learnMore);
els.closeExtraTaskButton.addEventListener("click", () => {
  saveExtraTask(null);
  renderExtraTask();
});
els.clearFeedbackButton.addEventListener("click", () => {
  els.feedbackPanel.classList.remove("visible");
  els.feedbackContent.innerHTML = '<p class="zh">写完瑞典语后点“请教练点评”，这里会直接显示点评结果。</p>';
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  state.deferredInstallPrompt = event;
  els.installButton.classList.add("available");
});

els.installButton.addEventListener("click", async () => {
  if (!state.deferredInstallPrompt) {
    showToast("iPhone 可用分享按钮，然后选择“添加到主屏幕”。");
    return;
  }
  state.deferredInstallPrompt.prompt();
  await state.deferredInstallPrompt.userChoice;
  state.deferredInstallPrompt = null;
  els.installButton.classList.remove("available");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      showToast("离线缓存暂时不可用。");
    });
  });
}

render();
