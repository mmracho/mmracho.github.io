// source from JLPT_Vocabulary_All.csv
const vocabEntry = [
    {
        kanji: "嗚呼",
        kana: "ああ",
        meaning: "Ah!, Oh!, Alas!",
        JLPT: 1
    },
    {
        kanji: "相",
        kana: "あい",
        meaning: "together, mutually, fellow",
        JLPT: 1
    },
    {
        kanji: "相変わらず",
        kana: "あいかわらず",
        meaning: "as ever, as usual, the same",
        JLPT: 1
    },
    {
        kanji: "愛想",
        kana: "あいそ",
        meaning: "civility, courtesy, compliments, sociability, graces",
        JLPT: 1
    },
    {
        kanji: "相対",
        kana: "あいたい",
        meaning: "confrontation, facing, between ourselves, no third party, tete-a-tete",
        JLPT: 1
    },
    {
        kanji: "間柄",
        kana: "あいだがら",
        meaning: "relation(ship)",
        JLPT: 1
    },
    {
        kanji: "愛憎",
        kana: "あいにく",
        meaning: "likes and dislikes",
        JLPT: 1
    },
    {
        kanji: "合間",
        kana: "あいま",
        meaning: "interval",
        JLPT: 1
    },
    {
        kanji: "曖昧",
        kana: "あいまい",
        meaning: "vague, ambiguous",
        JLPT: 1
    },
    {
        kanji: "敢えて",
        kana: "あえて",
        meaning: "dare (to do), challenge (to do)",
        JLPT: 1
    },
    {
        kanji: "仰ぐ",
        kana: "あおぐ",
        meaning: "to look up (to), to respect, to depend on, to ask for, to seek, to revere, to drink, to take",
        JLPT: 1
    },
    {
        kanji: "垢",
        kana: "あか",
        meaning: "dirt, filth",
        JLPT: 1
    },
    {
        kanji: "亜科",
        kana: "あか",
        meaning: "suborder, subfamily",
        JLPT: 1
    },
    {
        kanji: "銅",
        kana: "あかがね",
        meaning: "copper",
        JLPT: 1
    },
    {
        kanji: "証",
        kana: "あかし",
        meaning: "proof, evidence",
        JLPT: 1
    },
    {
        kanji: "赤字",
        kana: "あかじ",
        meaning: "deficit, go in the red",
        JLPT: 1
    },
    {
        kanji: "明かす",
        kana: "あかす",
        meaning: "to pass, spend, to reveal, to divulge",
        JLPT: 1
    },
    {
        kanji: "赤ちゃん",
        kana: "あかちゃん",
        meaning: "baby, infant",
        JLPT: 1
    },
    {
        kanji: "明白",
        kana: "あからさま",
        meaning: "obvious, overt, plainly, frankly",
        JLPT: 1
    },
    {
        kanji: "赤らむ",
        kana: "あからむ",
        meaning: "to become red, to redden, to blush",
        JLPT: 1
    },
    {
        kanji: "明るい",
        kana: "あかるい",
        meaning: "bright, cheerful",
        JLPT: 1
    },
    {
        kanji: "上がり",
        kana: "あがり",
        meaning: "1. slope, advance income, crop yield, ascent, rise, advance, death, spinning, completion, stop, finish, after",
        JLPT: 1
    },
    {
        kanji: "上がる",
        kana: "あがる",
        meaning: "to enter, to go up, to rise, to climb up, to advance, to appreciate, to be promoted, to improve, to call on,",
        JLPT: 1
    },
    {
        kanji: "商人",
        kana: "あきうど",
        meaning: "trader, shopkeeper, merchant",
        JLPT: 1
    },
    {
        kanji: "空間",
        kana: "あきま",
        meaning: "vacancy, room for rent or lease",
        JLPT: 1
    },
    {
        kanji: "諦め",
        kana: "あきらめ",
        meaning: "resignation, acceptance, consolation",
        JLPT: 1
    },
    {
        kanji: "呆れる",
        kana: "あきれる",
        meaning: "to be amazed, to be shocked",
        JLPT: 1
    },
    {
        kanji: "悪",
        kana: "あく",
        meaning: "evil, wickedness",
        JLPT: 1
    },
    {
        kanji: "灰",
        kana: "あく",
        meaning: "puckery juice",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あくどい",
        meaning: "1. gaudy, showy, excessive, 2. vicious",
        JLPT: 1
    },
    {
        kanji: "悪日",
        kana: "あくび",
        meaning: "unlucky day",
        JLPT: 1
    },
    {
        kanji: "明くる",
        kana: "あくる",
        meaning: "next, following",
        JLPT: 1
    },
    {
        kanji: "憧れ",
        kana: "あこがれ",
        meaning: "yearning, longing, aspiration",
        JLPT: 1
    },
    {
        kanji: "顎",
        kana: "あご",
        meaning: "chin",
        JLPT: 1
    },
    {
        kanji: "麻",
        kana: "あさ",
        meaning: "flax, linen, hemp",
        JLPT: 1
    },
    {
        kanji: "明後日",
        kana: "あさって",
        meaning: "day after tomorrow",
        JLPT: 1
    },
    {
        kanji: "朝寝坊",
        kana: "あさねぼう",
        meaning: "oversleeping, late riser",
        JLPT: 1
    },
    {
        kanji: "浅ましい",
        kana: "あさましい",
        meaning: "wretched, miserable, shameful, mean, despicable, abject",
        JLPT: 1
    },
    {
        kanji: "字",
        kana: "あざ",
        meaning: "section of village",
        JLPT: 1
    },
    {
        kanji: "欺く",
        kana: "あざむく",
        meaning: "to deceive",
        JLPT: 1
    },
    {
        kanji: "鮮やか",
        kana: "あざやか",
        meaning: "vivid, clear, brilliant",
        JLPT: 1
    },
    {
        kanji: "あざ笑う",
        kana: "あざわらう",
        meaning: "to sneer at, to ridicule",
        JLPT: 1
    },
    {
        kanji: "味わい",
        kana: "あじわい",
        meaning: "flavour, meaning, significance",
        JLPT: 1
    },
    {
        kanji: "東",
        kana: "あずま",
        meaning: "east, Eastern Japan",
        JLPT: 1
    },
    {
        kanji: "焦る",
        kana: "あせる",
        meaning: "to be in a hurry, to be impatient",
        JLPT: 1
    },
    {
        kanji: "彼処",
        kana: "あそこ",
        meaning: "1. (uk) there, over there, that place, 2. (X) (col) genitals",
        JLPT: 1
    },
    {
        kanji: "値",
        kana: "あたい",
        meaning: "value, price, cost, worth, merit",
        JLPT: 1
    },
    {
        kanji: "値する",
        kana: "あたいする",
        meaning: "to be worth, to deserve, to merit",
        JLPT: 1
    },
    {
        kanji: "私",
        kana: "あたし",
        meaning: "I (fem)",
        JLPT: 1
    },
    {
        kanji: "当たり",
        kana: "あたり",
        meaning: "hit, success, reaching the mark, per ..., vicinity, neighborhood",
        JLPT: 1
    },
    {
        kanji: "当たり前",
        kana: "あたりまえ",
        meaning: "usual, common, ordinary, natural, reasonable, obvious",
        JLPT: 1
    },
    {
        kanji: "他人",
        kana: "あだびと",
        meaning: "another person, unrelated person, outsider, stranger",
        JLPT: 1
    },
    {
        kanji: "彼方此方",
        kana: "あちこち",
        meaning: "here and there",
        JLPT: 1
    },
    {
        kanji: "彼方",
        kana: "あちら",
        meaning: "1. there, yonder, that",
        JLPT: 1
    },
    {
        kanji: "彼方此方",
        kana: "あちらこちら",
        meaning: "here and there",
        JLPT: 1
    },
    {
        kanji: "悪化",
        kana: "あっか",
        meaning: "deterioration, growing worse, aggravation, degeneration, corruption",
        JLPT: 1
    },
    {
        kanji: "呆気ない",
        kana: "あっけない",
        meaning: "not enough, too quick (short long etc.)",
        JLPT: 1
    },
    {
        kanji: "悪口",
        kana: "あっこう",
        meaning: "abuse, insult, slander, evil speaking",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あっさり",
        meaning: "easily, readily, quickly",
        JLPT: 1
    },
    {
        kanji: "圧迫",
        kana: "あっぱく",
        meaning: "pressure, coercion, oppression",
        JLPT: 1
    },
    {
        kanji: "扱い",
        kana: "あつかい",
        meaning: "treatment, service",
        JLPT: 1
    },
    {
        kanji: "集まる",
        kana: "あつまる",
        meaning: "to gather, to collect, to assemble",
        JLPT: 1
    },
    {
        kanji: "誂える",
        kana: "あつらえる",
        meaning: "to give an order, to place an order",
        JLPT: 1
    },
    {
        kanji: "圧力",
        kana: "あつりょく",
        meaning: "stress, pressure",
        JLPT: 1
    },
    {
        kanji: "当て",
        kana: "あて",
        meaning: "object, aim, end, hopes, expectations",
        JLPT: 1
    },
    {
        kanji: "宛",
        kana: "あて",
        meaning: "addressed to",
        JLPT: 1
    },
    {
        kanji: "当て字",
        kana: "あてじ",
        meaning: "phonetic-equivalent character, substitute character",
        JLPT: 1
    },
    {
        kanji: "当てはまる",
        kana: "あてはまる",
        meaning: "to apply (a rule)",
        JLPT: 1
    },
    {
        kanji: "当てはめる",
        kana: "あてはめる",
        meaning: "to apply, to adapt",
        JLPT: 1
    },
    {
        kanji: "宛てる",
        kana: "あてる",
        meaning: "to address",
        JLPT: 1
    },
    {
        kanji: "跡継ぎ",
        kana: "あとつぎ",
        meaning: "heir, successor",
        JLPT: 1
    },
    {
        kanji: "後回し",
        kana: "あとまわし",
        meaning: "putting off, postponing",
        JLPT: 1
    },
    {
        kanji: "貴女",
        kana: "あなた",
        meaning: "you, lady",
        JLPT: 1
    },
    {
        kanji: "彼の",
        kana: "あの",
        meaning: "that over there",
        JLPT: 1
    },
    {
        kanji: "溢れる",
        kana: "あふれる",
        meaning: "to flood, to overflow, to brim over",
        JLPT: 1
    },
    {
        kanji: "油絵",
        kana: "あぶらえ",
        meaning: "oil painting",
        JLPT: 1
    },
    {
        kanji: "炙る",
        kana: "あぶる",
        meaning: "to scorch",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あべこべ",
        meaning: "contrary, opposite, inverse",
        JLPT: 1
    },
    {
        kanji: "甘える",
        kana: "あまえる",
        meaning: "to behave like a spoiled child, to fawn on",
        JLPT: 1
    },
    {
        kanji: "甘口",
        kana: "あまくち",
        meaning: "sweet flavour, mildness, flattery, stupidity",
        JLPT: 1
    },
    {
        kanji: "雨具",
        kana: "あまぐ",
        meaning: "rain gear",
        JLPT: 1
    },
    {
        kanji: "天",
        kana: "あまつ",
        meaning: "heavenly, imperial",
        JLPT: 1
    },
    {
        kanji: "網",
        kana: "あみ",
        meaning: "net, network",
        JLPT: 1
    },
    {
        kanji: "天地",
        kana: "あめつち",
        meaning: "heaven and earth, the universe, nature, top and bottom, realm, sphere, world",
        JLPT: 1
    },
    {
        kanji: "操る",
        kana: "あやつる",
        meaning: "to manipulate, to operate, to pull strings",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あやふや",
        meaning: "uncertain, vague, ambiguous",
        JLPT: 1
    },
    {
        kanji: "危ぶむ",
        kana: "あやぶむ",
        meaning: "to fear, to have misgivings, to be doubtful, to mistrust",
        JLPT: 1
    },
    {
        kanji: "過ち",
        kana: "あやまち",
        meaning: "fault, error, indiscretion",
        JLPT: 1
    },
    {
        kanji: "誤る",
        kana: "あやまる",
        meaning: "to make a mistake",
        JLPT: 1
    },
    {
        kanji: "歩み",
        kana: "あゆみ",
        meaning: "walking",
        JLPT: 1
    },
    {
        kanji: "歩む",
        kana: "あゆむ",
        meaning: "to walk, to go on foot",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あら",
        meaning: "oh, ah, saw-edged perch (Niphon spinosus)",
        JLPT: 1
    },
    {
        kanji: "予め",
        kana: "あらかじめ",
        meaning: "beforehand, in advance, previously",
        JLPT: 1
    },
    {
        kanji: "荒らす",
        kana: "あらす",
        meaning: "to lay waste, to devastate, to damage, to invade, to break into",
        JLPT: 1
    },
    {
        kanji: "粗筋",
        kana: "あらすじ",
        meaning: "outline, summary",
        JLPT: 1
    },
    {
        kanji: "争い",
        kana: "あらそい",
        meaning: "dispute, strife, quarrel, dissension, conflict, rivalry, contest",
        JLPT: 1
    },
    {
        kanji: "改まる",
        kana: "あらたまる",
        meaning: "to be renewed",
        JLPT: 1
    },
    {
        kanji: "荒っぽい",
        kana: "あらっぽい",
        meaning: "rough, rude",
        JLPT: 1
    },
    {
        kanji: "凡ゆる",
        kana: "あらゆる",
        meaning: "all, every",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あられ",
        meaning: "kind of cookie, cartoon character",
        JLPT: 1
    },
    {
        kanji: "現われ",
        kana: "あらわれ",
        meaning: "embodiment, materialization",
        JLPT: 1
    },
    {
        kanji: "現われる",
        kana: "あらわれる",
        meaning: "to appear, to come in sight, to become visible, to come out, to embody, to materialize, to express oneself",
        JLPT: 1
    },
    {
        kanji: "有難う",
        kana: "ありがとう",
        meaning: "Thank you",
        JLPT: 1
    },
    {
        kanji: "有様",
        kana: "ありさま",
        meaning: "state, condition, circumstances, the way things are or should be, truth",
        JLPT: 1
    },
    {
        kanji: "有りのまま",
        kana: "ありのまま",
        meaning: "the truth, fact, as it is, frankly",
        JLPT: 1
    },
    {
        kanji: "或る",
        kana: "ある",
        meaning: "a certain..., some...",
        JLPT: 1
    },
    {
        kanji: "或いは",
        kana: "あるいは",
        meaning: "or, possibly",
        JLPT: 1
    },
    {
        kanji: "彼此",
        kana: "あれこれ",
        meaning: "one thing or another, this and that, this or that",
        JLPT: 1
    },
    {
        kanji: "合わす",
        kana: "あわす",
        meaning: "to join together, to face, to unite, to be opposite, to combine, to connect, to add up, to mix, to match, to",
        JLPT: 1
    },
    {
        kanji: "合わせ",
        kana: "あわせ",
        meaning: "joint together, opposite, facing",
        JLPT: 1
    },
    {
        kanji: "慌ただしい",
        kana: "あわただしい",
        meaning: "busy, hurried, confused, flurried",
        JLPT: 1
    },
    {
        kanji: "慌てる",
        kana: "あわてる",
        meaning: "to become confused (disconcerted disorganized)",
        JLPT: 1
    },
    {
        kanji: "暗殺",
        kana: "あんさつ",
        meaning: "assassination",
        JLPT: 1
    },
    {
        kanji: "暗算",
        kana: "あんざん",
        meaning: "mental arithmetic",
        JLPT: 1
    },
    {
        kanji: "暗示",
        kana: "あんじ",
        meaning: "hint, suggestion",
        JLPT: 1
    },
    {
        kanji: "案じる",
        kana: "あんじる",
        meaning: "to be anxious, to ponder",
        JLPT: 1
    },
    {
        kanji: "安静",
        kana: "あんせい",
        meaning: "rest",
        JLPT: 1
    },
    {
        kanji: "案の定",
        kana: "あんのじょう",
        meaning: "sure enough, as usual",
        JLPT: 1
    },
    {
        kanji: "余り",
        kana: "あんまり",
        meaning: "not very (this form only used as adverb), not much, remainder, rest, remnant, surplus, balance, excess, rema",
        JLPT: 1
    },
    {
        kanji: "依",
        kana: "い",
        meaning: "depending on",
        JLPT: 1
    },
    {
        kanji: "良い",
        kana: "いい",
        meaning: "good",
        JLPT: 1
    },
    {
        kanji: "伊井",
        kana: "いい",
        meaning: "that one, Italy",
        JLPT: 1
    },
    {
        kanji: "否",
        kana: "いいえ",
        meaning: "no, nay, yes, well",
        JLPT: 1
    },
    {
        kanji: "いい加減",
        kana: "いいかげん",
        meaning: "moderate, right, random, not thorough, vague, irresponsible, halfhearted",
        JLPT: 1
    },
    {
        kanji: "言い訳",
        kana: "いいわけ",
        meaning: "excuse, explanation",
        JLPT: 1
    },
    {
        kanji: "家出",
        kana: "いえで",
        meaning: "running away from home, leaving home",
        JLPT: 1
    },
    {
        kanji: "家主",
        kana: "いえぬし",
        meaning: "landlord",
        JLPT: 1
    },
    {
        kanji: "如何",
        kana: "いかが",
        meaning: "how, in what way",
        JLPT: 1
    },
    {
        kanji: "生かす",
        kana: "いかす",
        meaning: "to revive, to resuscitate, to make use of",
        JLPT: 1
    },
    {
        kanji: "雷",
        kana: "いかずち",
        meaning: "thunder",
        JLPT: 1
    },
    {
        kanji: "如何に",
        kana: "いかに",
        meaning: "how?, in what way?, how much?, however, whatever",
        JLPT: 1
    },
    {
        kanji: "如何にも",
        kana: "いかにも",
        meaning: "indeed, really, phrase meaning agreement",
        JLPT: 1
    },
    {
        kanji: "怒り",
        kana: "いかり",
        meaning: "anger, hatred",
        JLPT: 1
    },
    {
        kanji: "怒る",
        kana: "いかる",
        meaning: "to get angry, to be angry",
        JLPT: 1
    },
    {
        kanji: "歪む",
        kana: "いがむ",
        meaning: "to warp, to swerve, to deflect, to be crooked, to be distorted, to be bent, to incline, to slant, to be perv",
        JLPT: 1
    },
    {
        kanji: "粋",
        kana: "いき",
        meaning: "chic, style, purity, essence",
        JLPT: 1
    },
    {
        kanji: "域外",
        kana: "いきがい",
        meaning: "outside the area",
        JLPT: 1
    },
    {
        kanji: "意気込む",
        kana: "いきごむ",
        meaning: "to be enthusiastic about",
        JLPT: 1
    },
    {
        kanji: "経緯",
        kana: "いきさつ",
        meaning: "1. details, whole story, sequence of events, particulars, how it started, how things got this way, 2. c",
        JLPT: 1
    },
    {
        kanji: "行き違い",
        kana: "いきちがい",
        meaning: "misunderstanding, estrangement, disagreement, crossing without meeting, going astray",
        JLPT: 1
    },
    {
        kanji: "行き成り",
        kana: "いきなり",
        meaning: "suddenly",
        JLPT: 1
    },
    {
        kanji: "異議",
        kana: "いぎ",
        meaning: "objection, dissent, protest",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "いく",
        meaning: "to come, to orgasm",
        JLPT: 1
    },
    {
        kanji: "軍",
        kana: "いくさ",
        meaning: "war, battle, campaign, fight",
        JLPT: 1
    },
    {
        kanji: "戦",
        kana: "いくさ",
        meaning: "war, battle, campaign, fight",
        JLPT: 1
    },
    {
        kanji: "育成",
        kana: "いくせい",
        meaning: "rearing, training, nurture, cultivation, promotion",
        JLPT: 1
    },
    {
        kanji: "幾多",
        kana: "いくた",
        meaning: "many, numerous",
        JLPT: 1
    },
    {
        kanji: "活ける",
        kana: "いける",
        meaning: "to arrange (flowers)",
        JLPT: 1
    },
    {
        kanji: "異見",
        kana: "いけん",
        meaning: "different opinion, objection",
        JLPT: 1
    },
    {
        kanji: "意向",
        kana: "いこう",
        meaning: "intention, idea, inclination",
        JLPT: 1
    },
    {
        kanji: "移行",
        kana: "いこう",
        meaning: "switching over to",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "いざ",
        meaning: "now, come (now), well, crucial moment",
        JLPT: 1
    },
    {
        kanji: "碑",
        kana: "いしぶみ",
        meaning: "stone monument bearing an inscription",
        JLPT: 1
    },
    {
        kanji: "衣装",
        kana: "いしょう",
        meaning: "clothing, costume, outfit, garment, dress",
        JLPT: 1
    },
    {
        kanji: "意地",
        kana: "いじ",
        meaning: "disposition, spirit, willpower, obstinacy, backbone, appetite",
        JLPT: 1
    },
    {
        kanji: "苛める",
        kana: "いじめる",
        meaning: "to tease, to torment, to persecute, to chastise",
        JLPT: 1
    },
    {
        kanji: "移住",
        kana: "いじゅう",
        meaning: "migration, immigration",
        JLPT: 1
    },
    {
        kanji: "弄る",
        kana: "いじる",
        meaning: "to touch, to tamper with",
        JLPT: 1
    },
    {
        kanji: "何れ",
        kana: "いずれ",
        meaning: "where, which, who, anyway, anyhow, at any rate",
        JLPT: 1
    },
    {
        kanji: "異性",
        kana: "いせい",
        meaning: "the opposite sex",
        JLPT: 1
    },
    {
        kanji: "遺跡",
        kana: "いせき",
        meaning: "historic ruins (remains relics)",
        JLPT: 1
    },
    {
        kanji: "依然",
        kana: "いぜん",
        meaning: "still, as yet",
        JLPT: 1
    },
    {
        kanji: "依存",
        kana: "いそん",
        meaning: "dependence, dependent, reliance",
        JLPT: 1
    },
    {
        kanji: "委託",
        kana: "いたく",
        meaning: "consign (goods (for sale) to a firm), entrust (person with something), commit",
        JLPT: 1
    },
    {
        kanji: "悪戯",
        kana: "いたずら",
        meaning: "tease, prank, trick, practical joke, mischief",
        JLPT: 1
    },
    {
        kanji: "頂",
        kana: "いただき",
        meaning: "(top of) head, summit, spire",
        JLPT: 1
    },
    {
        kanji: "戴きます",
        kana: "いただきます",
        meaning: "expression of gratitude before meals",
        JLPT: 1
    },
    {
        kanji: "至って",
        kana: "いたって",
        meaning: "very much, exceedingly, extremely",
        JLPT: 1
    },
    {
        kanji: "痛む",
        kana: "いたむ",
        meaning: "to hurt, to feel a pain, to be injured",
        JLPT: 1
    },
    {
        kanji: "痛める",
        kana: "いためる",
        meaning: "to hurt, to injure, to cause pain, to worry, to bother, to afflict, to be grieved over",
        JLPT: 1
    },
    {
        kanji: "炒める",
        kana: "いためる",
        meaning: "to stir-fry",
        JLPT: 1
    },
    {
        kanji: "労る",
        kana: "いたわる",
        meaning: "to pity, to sympathize with, to console, to care for, to be kind to",
        JLPT: 1
    },
    {
        kanji: "市",
        kana: "いち",
        meaning: "market, fair",
        JLPT: 1
    },
    {
        kanji: "位地",
        kana: "いち",
        meaning: "place, situation, position, location",
        JLPT: 1
    },
    {
        kanji: "一々",
        kana: "いちいち",
        meaning: "one by one, separately",
        JLPT: 1
    },
    {
        kanji: "一概に",
        kana: "いちがいに",
        meaning: "unconditionally, as a rule",
        JLPT: 1
    },
    {
        kanji: "一見",
        kana: "いちげん",
        meaning: "unfamiliar, never before met",
        JLPT: 1
    },
    {
        kanji: "一言",
        kana: "いちげん",
        meaning: "single word",
        JLPT: 1
    },
    {
        kanji: "一日",
        kana: "いちじつ",
        meaning: "1. one day, 2. first of month",
        JLPT: 1
    },
    {
        kanji: "一定",
        kana: "いちじょう",
        meaning: "fixed, settled, definite, uniform, regularized, defined, standardized, certain, prescribed",
        JLPT: 1
    },
    {
        kanji: "著しい",
        kana: "いちじるしい",
        meaning: "remarkable, considerable",
        JLPT: 1
    },
    {
        kanji: "一同",
        kana: "いちどう",
        meaning: "all present, all concerned, all of us",
        JLPT: 1
    },
    {
        kanji: "一人",
        kana: "いちにん",
        meaning: "one person",
        JLPT: 1
    },
    {
        kanji: "一部",
        kana: "いちぶ",
        meaning: "1. one copy e.g. of a document, 2. a part, partly, some",
        JLPT: 1
    },
    {
        kanji: "一部分",
        kana: "いちぶぶん",
        meaning: "a part",
        JLPT: 1
    },
    {
        kanji: "一別",
        kana: "いちべつ",
        meaning: "parting",
        JLPT: 1
    },
    {
        kanji: "一面",
        kana: "いちめん",
        meaning: "one side, one phase, front page, the other hand, the whole surface",
        JLPT: 1
    },
    {
        kanji: "一目",
        kana: "いちもく",
        meaning: "a glance, a look, a glimpse",
        JLPT: 1
    },
    {
        kanji: "一様",
        kana: "いちよう",
        meaning: "uniformity, evenness, similarity, equality, impartiality",
        JLPT: 1
    },
    {
        kanji: "一律",
        kana: "いちりつ",
        meaning: "evenness, uniformity, monotony, equality",
        JLPT: 1
    },
    {
        kanji: "一連",
        kana: "いちれん",
        meaning: "a series, a chain, a ream (of paper)",
        JLPT: 1
    },
    {
        kanji: "一括",
        kana: "いっかつ",
        meaning: "all together, batch, one lump, one bundle, summing up",
        JLPT: 1
    },
    {
        kanji: "一気",
        kana: "いっき",
        meaning: "drink!(said repeatedly as a party cheer)",
        JLPT: 1
    },
    {
        kanji: "一挙に",
        kana: "いっきょに",
        meaning: "at a stroke, with a single swoop",
        JLPT: 1
    },
    {
        kanji: "一切",
        kana: "いっさい",
        meaning: "all, everything, without exception, the whole, entirely, absolutely",
        JLPT: 1
    },
    {
        kanji: "一心",
        kana: "いっしん",
        meaning: "one mind, wholeheartedness, the whole heart",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "いっそ",
        meaning: "rather, sooner, might as well",
        JLPT: 1
    },
    {
        kanji: "一帯",
        kana: "いったい",
        meaning: "a region, a zone, the whole place",
        JLPT: 1
    },
    {
        kanji: "一敗",
        kana: "いっぱい",
        meaning: "one defeat",
        JLPT: 1
    },
    {
        kanji: "一変",
        kana: "いっぺん",
        meaning: "complete change, about-face",
        JLPT: 1
    },
    {
        kanji: "何時",
        kana: "いつ",
        meaning: "when, how soon",
        JLPT: 1
    },
    {
        kanji: "何時か",
        kana: "いつか",
        meaning: "sometime, someday, one day, some time or other, the other day, in due course, in time",
        JLPT: 1
    },
    {
        kanji: "何時でも",
        kana: "いつでも",
        meaning: "(at) any time, always, at all times, never (neg), whenever",
        JLPT: 1
    },
    {
        kanji: "何時の間にか",
        kana: "いつのまにか",
        meaning: "before one knows, unnoticed, unawares",
        JLPT: 1
    },
    {
        kanji: "何時までも",
        kana: "いつまでも",
        meaning: "forever, for good, eternally, as long as one likes, indefinitely",
        JLPT: 1
    },
    {
        kanji: "何時も",
        kana: "いつも",
        meaning: "always, usually, every time, never (with neg. verb)",
        JLPT: 1
    },
    {
        kanji: "意図",
        kana: "いと",
        meaning: "intention, aim, design",
        JLPT: 1
    },
    {
        kanji: "営む",
        kana: "いとなむ",
        meaning: "to carry on (e.g. in ceremony), to run a business",
        JLPT: 1
    },
    {
        kanji: "暇",
        kana: "いとま",
        meaning: "free time, leisure, leave, spare time, farewell",
        JLPT: 1
    },
    {
        kanji: "異動",
        kana: "いどう",
        meaning: "a change",
        JLPT: 1
    },
    {
        kanji: "挑む",
        kana: "いどむ",
        meaning: "to challenge, to contend for, to make love to",
        JLPT: 1
    },
    {
        kanji: "稲光",
        kana: "いなびかり",
        meaning: "(flash of) lightning",
        JLPT: 1
    },
    {
        kanji: "古",
        kana: "いにしえ",
        meaning: "antiquity, ancient times",
        JLPT: 1
    },
    {
        kanji: "祈り",
        kana: "いのり",
        meaning: "prayer, supplication",
        JLPT: 1
    },
    {
        kanji: "鼾",
        kana: "いびき",
        meaning: "snoring",
        JLPT: 1
    },
    {
        kanji: "今更",
        kana: "いまさら",
        meaning: "now, at this late hour",
        JLPT: 1
    },
    {
        kanji: "未だ",
        kana: "いまだ",
        meaning: "as yet, hitherto, not yet (neg)",
        JLPT: 1
    },
    {
        kanji: "移民",
        kana: "いみん",
        meaning: "emigration, immigration, emigrant, immigrant",
        JLPT: 1
    },
    {
        kanji: "厭々",
        kana: "いやいや",
        meaning: "unwillingly, grudgingly, shaking head in refusal (to children)",
        JLPT: 1
    },
    {
        kanji: "卑しい",
        kana: "いやしい",
        meaning: "greedy, vulgar, shabby, humble, base, mean, vile",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "いやに",
        meaning: "awfully, terribly",
        JLPT: 1
    },
    {
        kanji: "厭やらしい",
        kana: "いやらしい",
        meaning: "detestable, disagreeable",
        JLPT: 1
    },
    {
        kanji: "愈々",
        kana: "いよいよ",
        meaning: "more and more, all the more, increasingly, at last, beyond doubt",
        JLPT: 1
    },
    {
        kanji: "意欲",
        kana: "いよく",
        meaning: "will, desire, ambition",
        JLPT: 1
    },
    {
        kanji: "苛々",
        kana: "いらいら",
        meaning: "getting nervous, irritation",
        JLPT: 1
    },
    {
        kanji: "入口",
        kana: "いりくち",
        meaning: "entrance, gate, approach, mouth",
        JLPT: 1
    },
    {
        kanji: "衣料",
        kana: "いりょう",
        meaning: "clothing",
        JLPT: 1
    },
    {
        kanji: "威力",
        kana: "いりょく",
        meaning: "power, might, authority, influence",
        JLPT: 1
    },
    {
        kanji: "入る",
        kana: "いる",
        meaning: "to get in, to go in, to come in, to flow into, to set, to set in",
        JLPT: 1
    },
    {
        kanji: "衣類",
        kana: "いるい",
        meaning: "clothes, clothing, garments",
        JLPT: 1
    },
    {
        kanji: "色々",
        kana: "いろいろ",
        meaning: "various",
        JLPT: 1
    },
    {
        kanji: "異論",
        kana: "いろん",
        meaning: "different opinion, objection",
        JLPT: 1
    },
    {
        kanji: "所謂",
        kana: "いわゆる",
        meaning: "the so-called, so to speak",
        JLPT: 1
    },
    {
        kanji: "印",
        kana: "いん",
        meaning: "seal, stamp, mark, print",
        JLPT: 1
    },
    {
        kanji: "員",
        kana: "いん",
        meaning: "member",
        JLPT: 1
    },
    {
        kanji: "印鑑",
        kana: "いんかん",
        meaning: "stamp, seal",
        JLPT: 1
    },
    {
        kanji: "陰気",
        kana: "いんき",
        meaning: "gloom, melancholy",
        JLPT: 1
    },
    {
        kanji: "隠居",
        kana: "いんきょ",
        meaning: "retirement, retired person",
        JLPT: 1
    },
    {
        kanji: "上下",
        kana: "うえした",
        meaning: "high and low, up and down, unloading and loading, praising and blaming",
        JLPT: 1
    },
    {
        kanji: "浮かぶ",
        kana: "うかぶ",
        meaning: "to float, to rise to surface, to come to mind",
        JLPT: 1
    },
    {
        kanji: "受かる",
        kana: "うかる",
        meaning: "to pass (examination)",
        JLPT: 1
    },
    {
        kanji: "含嗽",
        kana: "うがい",
        meaning: "gargle, rinse mouth",
        JLPT: 1
    },
    {
        kanji: "受け入れ",
        kana: "うけいれ",
        meaning: "receiving, acceptance",
        JLPT: 1
    },
    {
        kanji: "受け入れる",
        kana: "うけいれる",
        meaning: "to accept, to receive",
        JLPT: 1
    },
    {
        kanji: "受け継ぐ",
        kana: "うけつぐ",
        meaning: "to inherit, to succeed, to take over",
        JLPT: 1
    },
    {
        kanji: "受け付ける",
        kana: "うけつける",
        meaning: "to be accepted, to receive (an application)",
        JLPT: 1
    },
    {
        kanji: "受け止める",
        kana: "うけとめる",
        meaning: "to catch, to stop the blow, to react to, to take",
        JLPT: 1
    },
    {
        kanji: "受け取り",
        kana: "うけとり",
        meaning: "receipt",
        JLPT: 1
    },
    {
        kanji: "受身",
        kana: "うけみ",
        meaning: "passive, passive voice",
        JLPT: 1
    },
    {
        kanji: "動き",
        kana: "うごき",
        meaning: "movement, activity, trend, development, change",
        JLPT: 1
    },
    {
        kanji: "潮",
        kana: "うしお",
        meaning: "tide",
        JLPT: 1
    },
    {
        kanji: "氏",
        kana: "うじ",
        meaning: "family name",
        JLPT: 1
    },
    {
        kanji: "渦",
        kana: "うず",
        meaning: "swirl",
        JLPT: 1
    },
    {
        kanji: "埋まる",
        kana: "うずまる",
        meaning: "to be buried, to be surrounded, to overflow, to be filled",
        JLPT: 1
    },
    {
        kanji: "嘘つき",
        kana: "うそつき",
        meaning: "liar (sometimes said with not much seriousness), fibber",
        JLPT: 1
    },
    {
        kanji: "打ち合わせ",
        kana: "うちあわせ",
        meaning: "business meeting, previous arrangement, appointment",
        JLPT: 1
    },
    {
        kanji: "打ち合わせる",
        kana: "うちあわせる",
        meaning: "to knock together, to arrange",
        JLPT: 1
    },
    {
        kanji: "打ち切る",
        kana: "うちきる",
        meaning: "to stop, to abort, to discontinue, to close",
        JLPT: 1
    },
    {
        kanji: "打ち消し",
        kana: "うちけし",
        meaning: "negation, denial, negative",
        JLPT: 1
    },
    {
        kanji: "打ち込む",
        kana: "うちこむ",
        meaning: "to drive in (e.g. nail stake), to devote oneself to, to shoot into, to smash, to throw into, to cast int",
        JLPT: 1
    },
    {
        kanji: "団扇",
        kana: "うちわ",
        meaning: "fan",
        JLPT: 1
    },
    {
        kanji: "内訳",
        kana: "うちわけ",
        meaning: "the items, breakdown, classification",
        JLPT: 1
    },
    {
        kanji: "訴え",
        kana: "うったえ",
        meaning: "lawsuit, complaint",
        JLPT: 1
    },
    {
        kanji: "鬱陶しい",
        kana: "うっとうしい",
        meaning: "gloomy, depressing",
        JLPT: 1
    },
    {
        kanji: "写し",
        kana: "うつし",
        meaning: "copy, duplicate, facsimile, transcript",
        JLPT: 1
    },
    {
        kanji: "空ろ",
        kana: "うつろ",
        meaning: "blank, cavity, hollow, empty (space)",
        JLPT: 1
    },
    {
        kanji: "器",
        kana: "うつわ",
        meaning: "bowl, vessel, container",
        JLPT: 1
    },
    {
        kanji: "雨天",
        kana: "うてん",
        meaning: "rainy weather",
        JLPT: 1
    },
    {
        kanji: "腕前",
        kana: "うでまえ",
        meaning: "ability, skill, facility",
        JLPT: 1
    },
    {
        kanji: "饂飩",
        kana: "うどん",
        meaning: "noodles (Japanese)",
        JLPT: 1
    },
    {
        kanji: "促す",
        kana: "うながす",
        meaning: "to urge, to press, to suggest, to demand, to stimulate, to quicken, to incite, to invite (attention to)",
        JLPT: 1
    },
    {
        kanji: "唸る",
        kana: "うなる",
        meaning: "to groan, to moan, to roar, to howl, to growl, to hum, to buzz, to sough",
        JLPT: 1
    },
    {
        kanji: "自惚れ",
        kana: "うぬぼれ",
        meaning: "pretension, conceit, hubris",
        JLPT: 1
    },
    {
        kanji: "甘い",
        kana: "うまい",
        meaning: "delicious",
        JLPT: 1
    },
    {
        kanji: "生まれつき",
        kana: "うまれつき",
        meaning: "by nature, by birth, native",
        JLPT: 1
    },
    {
        kanji: "海路",
        kana: "うみじ",
        meaning: "sea route",
        JLPT: 1
    },
    {
        kanji: "産む",
        kana: "うむ",
        meaning: "to give birth, to deliver, to produce",
        JLPT: 1
    },
    {
        kanji: "埋め込む",
        kana: "うめこむ",
        meaning: "to bury",
        JLPT: 1
    },
    {
        kanji: "梅干",
        kana: "うめぼし",
        meaning: "dried plum",
        JLPT: 1
    },
    {
        kanji: "末",
        kana: "うら",
        meaning: "top end, tip",
        JLPT: 1
    },
    {
        kanji: "裏返し",
        kana: "うらがえし",
        meaning: "inside out, upside down",
        JLPT: 1
    },
    {
        kanji: "売り出し",
        kana: "うりだし",
        meaning: "(bargain) sale",
        JLPT: 1
    },
    {
        kanji: "売り出す",
        kana: "うりだす",
        meaning: "to put on sale, to market, to become popular",
        JLPT: 1
    },
    {
        kanji: "潤う",
        kana: "うるおう",
        meaning: "to be moist, to be damp, to get wet, to profit by, to be watered, to receive benefits, to favor, to charm, t",
        JLPT: 1
    },
    {
        kanji: "五月蝿い",
        kana: "うるさい",
        meaning: "noisy, loud, fussy",
        JLPT: 1
    },
    {
        kanji: "売れ行き",
        kana: "うれゆき",
        meaning: "sales",
        JLPT: 1
    },
    {
        kanji: "浮気",
        kana: "うわき",
        meaning: "flighty, fickle, wanton, unfaithful",
        JLPT: 1
    },
    {
        kanji: "上手",
        kana: "うわて",
        meaning: "1. upper part, upper stream, left side (of a stage), 2. skillful (only in comparisons), dexterity (on",
        JLPT: 1
    },
    {
        kanji: "上回る",
        kana: "うわまわる",
        meaning: "to exceed",
        JLPT: 1
    },
    {
        kanji: "植わる",
        kana: "うわる",
        meaning: "to be planted",
        JLPT: 1
    },
    {
        kanji: "運営",
        kana: "うんえい",
        meaning: "management, administration, operation",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "うんざり",
        meaning: "tedious, boring, being fed up with",
        JLPT: 1
    },
    {
        kanji: "運送",
        kana: "うんそう",
        meaning: "shipping, marine transportation",
        JLPT: 1
    },
    {
        kanji: "運賃",
        kana: "うんちん",
        meaning: "freight rates, shipping expenses, fare",
        JLPT: 1
    },
    {
        kanji: "云々",
        kana: "うんぬん",
        meaning: "and so on, and so forth, comment",
        JLPT: 1
    },
    {
        kanji: "運搬",
        kana: "うんぱん",
        meaning: "transport, carriage",
        JLPT: 1
    },
    {
        kanji: "運命",
        kana: "うんめい",
        meaning: "fate",
        JLPT: 1
    },
    {
        kanji: "運輸",
        kana: "うんゆ",
        meaning: "transportation",
        JLPT: 1
    },
    {
        kanji: "運用",
        kana: "うんよう",
        meaning: "making use of, application, investment, practical use",
        JLPT: 1
    },
    {
        kanji: "会",
        kana: "え",
        meaning: "understanding",
        JLPT: 1
    },
    {
        kanji: "重",
        kana: "え",
        meaning: "-fold, -ply",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "えい",
        meaning: "ray (fish)",
        JLPT: 1
    },
    {
        kanji: "映写",
        kana: "えいしゃ",
        meaning: "projection",
        JLPT: 1
    },
    {
        kanji: "英字",
        kana: "えいじ",
        meaning: "English letter (character)",
        JLPT: 1
    },
    {
        kanji: "衛生",
        kana: "えいせい",
        meaning: "health, hygiene, sanitation, medical",
        JLPT: 1
    },
    {
        kanji: "映像",
        kana: "えいぞう",
        meaning: "reflection, image",
        JLPT: 1
    },
    {
        kanji: "英雄",
        kana: "えいゆう",
        meaning: "hero, great man",
        JLPT: 1
    },
    {
        kanji: "液",
        kana: "えき",
        meaning: "liquid, fluid",
        JLPT: 1
    },
    {
        kanji: "役",
        kana: "えき",
        meaning: "war, campaign, battle",
        JLPT: 1
    },
    {
        kanji: "閲覧",
        kana: "えつらん",
        meaning: "inspection, reading",
        JLPT: 1
    },
    {
        kanji: "獲物",
        kana: "えもの",
        meaning: "game, spoils, trophy",
        JLPT: 1
    },
    {
        kanji: "襟",
        kana: "えり",
        meaning: "neck, collar, lapel, neckband",
        JLPT: 1
    },
    {
        kanji: "縁",
        kana: "えん",
        meaning: "chance, fate, destiny, relation, bonds, connection, karma",
        JLPT: 1
    },
    {
        kanji: "塩",
        kana: "えん",
        meaning: "salt",
        JLPT: 1
    },
    {
        kanji: "艶",
        kana: "えん",
        meaning: "charming, fascinating, voluptuous",
        JLPT: 1
    },
    {
        kanji: "園",
        kana: "えん",
        meaning: "garden (esp. man-made)",
        JLPT: 1
    },
    {
        kanji: "円滑",
        kana: "えんかつ",
        meaning: "harmony, smoothness",
        JLPT: 1
    },
    {
        kanji: "縁側",
        kana: "えんがわ",
        meaning: "veranda, porch, balcony, open corridor",
        JLPT: 1
    },
    {
        kanji: "沿岸",
        kana: "えんがん",
        meaning: "coast, shore",
        JLPT: 1
    },
    {
        kanji: "婉曲",
        kana: "えんきょく",
        meaning: "euphemistic, circumlocution, roundabout, indirect, insinuating",
        JLPT: 1
    },
    {
        kanji: "演習",
        kana: "えんしゅう",
        meaning: "practice, exercises, manoeuvers",
        JLPT: 1
    },
    {
        kanji: "演出",
        kana: "えんしゅつ",
        meaning: "production (e.g. play), direction",
        JLPT: 1
    },
    {
        kanji: "演じる",
        kana: "えんじる",
        meaning: "to perform (a play), to play (a part), to act (a part), to commit (a blunder)",
        JLPT: 1
    },
    {
        kanji: "演ずる",
        kana: "えんずる",
        meaning: "to perform, to play",
        JLPT: 1
    },
    {
        kanji: "沿線",
        kana: "えんせん",
        meaning: "along railway line",
        JLPT: 1
    },
    {
        kanji: "縁談",
        kana: "えんだん",
        meaning: "marriage proposal, engagement",
        JLPT: 1
    },
    {
        kanji: "遠方",
        kana: "えんぽう",
        meaning: "long way, distant place",
        JLPT: 1
    },
    {
        kanji: "円満",
        kana: "えんまん",
        meaning: "perfection, harmony, peace, smoothness, completeness, satisfaction, integrity",
        JLPT: 1
    },
    {
        kanji: "尾",
        kana: "お",
        meaning: "tail, ridge",
        JLPT: 1
    },
    {
        kanji: "於",
        kana: "お",
        meaning: "at, in, on",
        JLPT: 1
    },
    {
        kanji: "甥",
        kana: "おい",
        meaning: "nephew",
        JLPT: 1
    },
    {
        kanji: "追い込む",
        kana: "おいこむ",
        meaning: "to herd, to corner, to drive",
        JLPT: 1
    },
    {
        kanji: "美味しい",
        kana: "おいしい",
        meaning: "delicious, tasty",
        JLPT: 1
    },
    {
        kanji: "追い出す",
        kana: "おいだす",
        meaning: "to expel, to drive out",
        JLPT: 1
    },
    {
        kanji: "於いて",
        kana: "おいて",
        meaning: "at, in, on",
        JLPT: 1
    },
    {
        kanji: "お出でになる",
        kana: "おいでになる",
        meaning: "to be",
        JLPT: 1
    },
    {
        kanji: "老いる",
        kana: "おいる",
        meaning: "to age, to grow old",
        JLPT: 1
    },
    {
        kanji: "負う",
        kana: "おう",
        meaning: "to bear, to owe",
        JLPT: 1
    },
    {
        kanji: "応急",
        kana: "おうきゅう",
        meaning: "emergency",
        JLPT: 1
    },
    {
        kanji: "黄金",
        kana: "おうごん",
        meaning: "gold",
        JLPT: 1
    },
    {
        kanji: "黄色",
        kana: "おうしょく",
        meaning: "yellow",
        JLPT: 1
    },
    {
        kanji: "応募",
        kana: "おうぼ",
        meaning: "subscription, application",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "おおい",
        meaning: "hey!",
        JLPT: 1
    },
    {
        kanji: "大方",
        kana: "おおかた",
        meaning: "perhaps, almost all, majority",
        JLPT: 1
    },
    {
        kanji: "大柄",
        kana: "おおがら",
        meaning: "large build, large pattern",
        JLPT: 1
    },
    {
        kanji: "大げさ",
        kana: "おおげさ",
        meaning: "grandiose, exaggerated",
        JLPT: 1
    },
    {
        kanji: "大事",
        kana: "おおごと",
        meaning: "important, valuable, serious matter",
        JLPT: 1
    },
    {
        kanji: "大ざっぱ",
        kana: "おおざっぱ",
        meaning: "rough (as in not precise), broad, sketchy",
        JLPT: 1
    },
    {
        kanji: "大筋",
        kana: "おおすじ",
        meaning: "outline, summary",
        JLPT: 1
    },
    {
        kanji: "大空",
        kana: "おおぞら",
        meaning: "heaven, firmament, the sky",
        JLPT: 1
    },
    {
        kanji: "大幅",
        kana: "おおはば",
        meaning: "full width, large scale, drastic",
        JLPT: 1
    },
    {
        kanji: "大水",
        kana: "おおみず",
        meaning: "flood",
        JLPT: 1
    },
    {
        kanji: "公",
        kana: "おおやけ",
        meaning: "official, public, formal, open, governmental",
        JLPT: 1
    },
    {
        kanji: "お蔭",
        kana: "おかげ",
        meaning: "(your) backing, assistance",
        JLPT: 1
    },
    {
        kanji: "お蔭様で",
        kana: "おかげさまで",
        meaning: "Thanks to god, thanks to you",
        JLPT: 1
    },
    {
        kanji: "可笑しい",
        kana: "おかしい",
        meaning: "strange, funny, amusing, ridiculous",
        JLPT: 1
    },
    {
        kanji: "犯す",
        kana: "おかす",
        meaning: "to commit, to perpetrate, to violate, to rape",
        JLPT: 1
    },
    {
        kanji: "侵す",
        kana: "おかす",
        meaning: "to invade, to raid, to trespass, to violate, to intrude on",
        JLPT: 1
    },
    {
        kanji: "お菜",
        kana: "おかず",
        meaning: "side dish, accompaniment for rice dishes",
        JLPT: 1
    },
    {
        kanji: "臆病",
        kana: "おくびょう",
        meaning: "cowardice, timidity",
        JLPT: 1
    },
    {
        kanji: "遅らす",
        kana: "おくらす",
        meaning: "to retard, to delay",
        JLPT: 1
    },
    {
        kanji: "遅れ",
        kana: "おくれ",
        meaning: "delay, lag",
        JLPT: 1
    },
    {
        kanji: "起こす",
        kana: "おこす",
        meaning: "to raise, to cause, to wake someone",
        JLPT: 1
    },
    {
        kanji: "行い",
        kana: "おこない",
        meaning: "deed, conduct, behavior, action, asceticism",
        JLPT: 1
    },
    {
        kanji: "厳か",
        kana: "おごそか",
        meaning: "austere, majestic, dignified, stately, awful, impressive",
        JLPT: 1
    },
    {
        kanji: "傲る",
        kana: "おごる",
        meaning: "to be proud",
        JLPT: 1
    },
    {
        kanji: "長",
        kana: "おさ",
        meaning: "chief, head",
        JLPT: 1
    },
    {
        kanji: "押さえる",
        kana: "おさえる",
        meaning: "to stop, to restrain, to seize, to repress, to suppress, to press down",
        JLPT: 1
    },
    {
        kanji: "お先に",
        kana: "おさきに",
        meaning: "before, ahead, previously",
        JLPT: 1
    },
    {
        kanji: "収まる",
        kana: "おさまる",
        meaning: "to be obtained, to end, to settle into, to fit into, to be settled, to be paid, to be delivered",
        JLPT: 1
    },
    {
        kanji: "納まる",
        kana: "おさまる",
        meaning: "to be obtained, to end, to settle into, to fit into, to be settled, to be paid, to be delivered",
        JLPT: 1
    },
    {
        kanji: "治まる",
        kana: "おさまる",
        meaning: "to be at peace, to clamp down, to lessen (storm terror anger)",
        JLPT: 1
    },
    {
        kanji: "お産",
        kana: "おさん",
        meaning: "(giving) birth",
        JLPT: 1
    },
    {
        kanji: "教え",
        kana: "おしえ",
        meaning: "teachings, precept, lesson, doctrine",
        JLPT: 1
    },
    {
        kanji: "押し込む",
        kana: "おしこむ",
        meaning: "to push into, to crowd into",
        JLPT: 1
    },
    {
        kanji: "惜しむ",
        kana: "おしむ",
        meaning: "to be frugal, to value, to regret",
        JLPT: 1
    },
    {
        kanji: "お喋り",
        kana: "おしゃべり",
        meaning: "chattering, talk, idle talk, chat, chitchat, gossip, chatty, talkative, chatterbox, blabbermouth",
        JLPT: 1
    },
    {
        kanji: "お洒落",
        kana: "おしゃれ",
        meaning: "smartly dressed, someone smartly dressed, fashion-conscious",
        JLPT: 1
    },
    {
        kanji: "押し寄せる",
        kana: "おしよせる",
        meaning: "to push aside, to advance on",
        JLPT: 1
    },
    {
        kanji: "お祖父さん",
        kana: "おじいさん",
        meaning: "grandfather, male senior-citizen",
        JLPT: 1
    },
    {
        kanji: "お邪魔します",
        kana: "おじゃまします",
        meaning: "Excuse me for disturbing (interrupting) you",
        JLPT: 1
    },
    {
        kanji: "雄",
        kana: "おす",
        meaning: "male (animal)",
        JLPT: 1
    },
    {
        kanji: "お世辞",
        kana: "おせじ",
        meaning: "flattery, compliment",
        JLPT: 1
    },
    {
        kanji: "襲う",
        kana: "おそう",
        meaning: "to attack",
        JLPT: 1
    },
    {
        kanji: "遅くとも",
        kana: "おそくとも",
        meaning: "at the latest",
        JLPT: 1
    },
    {
        kanji: "恐らく",
        kana: "おそらく",
        meaning: "perhaps",
        JLPT: 1
    },
    {
        kanji: "恐れ",
        kana: "おそれ",
        meaning: "fear, horror",
        JLPT: 1
    },
    {
        kanji: "恐れ入る",
        kana: "おそれいる",
        meaning: "to be filled with awe, to feel small, to be amazed, to be surprised, to be disconcerted, to be sorry, to b",
        JLPT: 1
    },
    {
        kanji: "お大事に",
        kana: "おだいじに",
        meaning: "Take care of yourself",
        JLPT: 1
    },
    {
        kanji: "煽てる",
        kana: "おだてる",
        meaning: "to stir up, to instigate, to flatter",
        JLPT: 1
    },
    {
        kanji: "落ち込む",
        kana: "おちこむ",
        meaning: "to fall into, to feel down (sad)",
        JLPT: 1
    },
    {
        kanji: "落ち着き",
        kana: "おちつき",
        meaning: "calm, composure",
        JLPT: 1
    },
    {
        kanji: "落ち葉",
        kana: "おちば",
        meaning: "fallen leaves, leaf litter, defoliation, shedding leaves",
        JLPT: 1
    },
    {
        kanji: "落ちる",
        kana: "おちる",
        meaning: "to fail (e.g. exam), to fall down, to drop",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "おっかない",
        meaning: "frightening, huge",
        JLPT: 1
    },
    {
        kanji: "仰っしゃる",
        kana: "おっしゃる",
        meaning: "to say, to speak, to tell, to talk",
        JLPT: 1
    },
    {
        kanji: "乙",
        kana: "おつ",
        meaning: "1. strange, quaint, stylish, chic, spicy, queer, witty, tasty, romantic, 2. 2nd in rank, second sign of the",
        JLPT: 1
    },
    {
        kanji: "お使い",
        kana: "おつかい",
        meaning: "errand",
        JLPT: 1
    },
    {
        kanji: "お手上げ",
        kana: "おてあげ",
        meaning: "all over, given in, given up hope, bring to knees",
        JLPT: 1
    },
    {
        kanji: "御手洗い",
        kana: "おてあらい",
        meaning: "toilet, restroom, lavatory, bathroom (US)",
        JLPT: 1
    },
    {
        kanji: "弟",
        kana: "おと",
        meaning: "younger brother",
        JLPT: 1
    },
    {
        kanji: "落とす",
        kana: "おとす",
        meaning: "to drop, to lose, to let fall",
        JLPT: 1
    },
    {
        kanji: "訪れる",
        kana: "おとずれる",
        meaning: "to visit",
        JLPT: 1
    },
    {
        kanji: "大人しい",
        kana: "おとなしい",
        meaning: "obedient, docile, quiet",
        JLPT: 1
    },
    {
        kanji: "少女",
        kana: "おとめ",
        meaning: "daughter, young lady, virgin, maiden, little girl",
        JLPT: 1
    },
    {
        kanji: "お供",
        kana: "おとも",
        meaning: "attendant, companion",
        JLPT: 1
    },
    {
        kanji: "衰える",
        kana: "おとろえる",
        meaning: "to become weak, to decline, to wear, to abate, to decay, to wither, to waste away",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "おどおど",
        meaning: "coweringly, hesitantly",
        JLPT: 1
    },
    {
        kanji: "脅かす",
        kana: "おどかす",
        meaning: "to threaten, to coerce",
        JLPT: 1
    },
    {
        kanji: "脅す",
        kana: "おどす",
        meaning: "to threaten, to menace",
        JLPT: 1
    },
    {
        kanji: "驚き",
        kana: "おどろき",
        meaning: "surprise, astonishment, wonder",
        JLPT: 1
    },
    {
        kanji: "同い年",
        kana: "おないどし",
        meaning: "of the same age",
        JLPT: 1
    },
    {
        kanji: "女子",
        kana: "おなご",
        meaning: "woman, girl",
        JLPT: 1
    },
    {
        kanji: "お願いします",
        kana: "おねがいします",
        meaning: "please",
        JLPT: 1
    },
    {
        kanji: "各",
        kana: "おのおの",
        meaning: "each, every, either, respectively, severally",
        JLPT: 1
    },
    {
        kanji: "自ずから",
        kana: "おのずから",
        meaning: "naturally, as a matter of course",
        JLPT: 1
    },
    {
        kanji: "お早う",
        kana: "おはよう",
        meaning: "Good morning",
        JLPT: 1
    },
    {
        kanji: "お祖母さん",
        kana: "おばあさん",
        meaning: "grandmother, female senior-citizen",
        JLPT: 1
    },
    {
        kanji: "怯える",
        kana: "おびえる",
        meaning: "to become frightened, to have a nightmare",
        JLPT: 1
    },
    {
        kanji: "夥しい",
        kana: "おびただしい",
        meaning: "abundantly, innumerably",
        JLPT: 1
    },
    {
        kanji: "帯びる",
        kana: "おびる",
        meaning: "to wear, to carry, to be entrusted, to have, to take on, to have a trace of, to be tinged with",
        JLPT: 1
    },
    {
        kanji: "覚え",
        kana: "おぼえ",
        meaning: "memory, sense, experience",
        JLPT: 1
    },
    {
        kanji: "御負け",
        kana: "おまけ",
        meaning: "1. a discount, a prize, 2. something additional, bonus, an extra, 3. an exaggeration",
        JLPT: 1
    },
    {
        kanji: "お巡りさん",
        kana: "おまわりさん",
        meaning: "policeman (friendly term)",
        JLPT: 1
    },
    {
        kanji: "お宮",
        kana: "おみや",
        meaning: "Shinto shrine",
        JLPT: 1
    },
    {
        kanji: "お襁褓",
        kana: "おむつ",
        meaning: "diaper, nappy",
        JLPT: 1
    },
    {
        kanji: "お目出度う",
        kana: "おめでとう",
        meaning: "(ateji) (int) (uk) Congratulations!, an auspicious occasion!",
        JLPT: 1
    },
    {
        kanji: "面",
        kana: "おも",
        meaning: "face",
        JLPT: 1
    },
    {
        kanji: "思い付き",
        kana: "おもいつき",
        meaning: "plan, idea, suggestion",
        JLPT: 1
    },
    {
        kanji: "面白い",
        kana: "おもしろい",
        meaning: "interesting, amusing",
        JLPT: 1
    },
    {
        kanji: "玩具",
        kana: "おもちゃ",
        meaning: "toy",
        JLPT: 1
    },
    {
        kanji: "重なる",
        kana: "おもなる",
        meaning: "main, principal, important",
        JLPT: 1
    },
    {
        kanji: "趣",
        kana: "おもむき",
        meaning: "meaning, tenor, gist, effect, appearance, taste, grace, charm, refinement",
        JLPT: 1
    },
    {
        kanji: "赴く",
        kana: "おもむく",
        meaning: "to go, to proceed, to repair to, to become",
        JLPT: 1
    },
    {
        kanji: "重役",
        kana: "おもやく",
        meaning: "heavy responsibilities, director",
        JLPT: 1
    },
    {
        kanji: "重んじる",
        kana: "おもんじる",
        meaning: "to respect, to honor, to esteem, to prize",
        JLPT: 1
    },
    {
        kanji: "重んずる",
        kana: "おもんずる",
        meaning: "to honor, to respect, to esteem, to prize",
        JLPT: 1
    },
    {
        kanji: "お休み",
        kana: "おやすみ",
        meaning: "holiday, absence, rest, Good night",
        JLPT: 1
    },
    {
        kanji: "お八",
        kana: "おやつ",
        meaning: "1. (uk) between meal snack, afternoon refreshment, afternoon tea, 2. mid-day snack",
        JLPT: 1
    },
    {
        kanji: "凡そ",
        kana: "およそ",
        meaning: "about, roughly, as a rule, approximately",
        JLPT: 1
    },
    {
        kanji: "及び",
        kana: "および",
        meaning: "and, as well as",
        JLPT: 1
    },
    {
        kanji: "及ぶ",
        kana: "およぶ",
        meaning: "to reach, to come up to, to amount to, to befall, to happen to, to extend, to match, to equal",
        JLPT: 1
    },
    {
        kanji: "織",
        kana: "おり",
        meaning: "weave, weaving, woven item",
        JLPT: 1
    },
    {
        kanji: "檻",
        kana: "おり",
        meaning: "cage, pen, jail cell",
        JLPT: 1
    },
    {
        kanji: "折り返す",
        kana: "おりかえす",
        meaning: "to turn up, to fold back",
        JLPT: 1
    },
    {
        kanji: "織物",
        kana: "おりもの",
        meaning: "textile, fabric",
        JLPT: 1
    },
    {
        kanji: "織る",
        kana: "おる",
        meaning: "to weave",
        JLPT: 1
    },
    {
        kanji: "俺",
        kana: "おれ",
        meaning: "I (ego) (boastful first-person pronoun)",
        JLPT: 1
    },
    {
        kanji: "愚か",
        kana: "おろか",
        meaning: "foolish, stupid",
        JLPT: 1
    },
    {
        kanji: "疎か",
        kana: "おろそか",
        meaning: "neglect, negligence, carelessness",
        JLPT: 1
    },
    {
        kanji: "終わる",
        kana: "おわる",
        meaning: "to finish, to close",
        JLPT: 1
    },
    {
        kanji: "音色",
        kana: "おんいろ",
        meaning: "tone color, tone quality, timbre, synthesizer patch",
        JLPT: 1
    },
    {
        kanji: "温和",
        kana: "おんわ",
        meaning: "gentle, mild, moderate",
        JLPT: 1
    },
    {
        kanji: "仮",
        kana: "か",
        meaning: "tentative, provisional",
        JLPT: 1
    },
    {
        kanji: "科",
        kana: "か",
        meaning: "department, section",
        JLPT: 1
    },
    {
        kanji: "個",
        kana: "か",
        meaning: "article counter",
        JLPT: 1
    },
    {
        kanji: "下位",
        kana: "かい",
        meaning: "low rank, subordinate, lower order (e.g. byte)",
        JLPT: 1
    },
    {
        kanji: "階",
        kana: "かい",
        meaning: "-floor (counter), stories",
        JLPT: 1
    },
    {
        kanji: "改悪",
        kana: "かいあく",
        meaning: "deterioration, changing for the worse",
        JLPT: 1
    },
    {
        kanji: "海運",
        kana: "かいうん",
        meaning: "maritime, marine transportation",
        JLPT: 1
    },
    {
        kanji: "改革",
        kana: "かいかく",
        meaning: "reform, reformation, innovation",
        JLPT: 1
    },
    {
        kanji: "貝殻",
        kana: "かいがら",
        meaning: "shell",
        JLPT: 1
    },
    {
        kanji: "階級",
        kana: "かいきゅう",
        meaning: "class, rank, grade",
        JLPT: 1
    },
    {
        kanji: "海峡",
        kana: "かいきょう",
        meaning: "channel",
        JLPT: 1
    },
    {
        kanji: "会見",
        kana: "かいけん",
        meaning: "interview, audience",
        JLPT: 1
    },
    {
        kanji: "介護",
        kana: "かいご",
        meaning: "nursing",
        JLPT: 1
    },
    {
        kanji: "開催",
        kana: "かいさい",
        meaning: "holding a meeting, open an exhibition",
        JLPT: 1
    },
    {
        kanji: "回収",
        kana: "かいしゅう",
        meaning: "collection, recovery",
        JLPT: 1
    },
    {
        kanji: "改修",
        kana: "かいしゅう",
        meaning: "repair, improvement",
        JLPT: 1
    },
    {
        kanji: "怪獣",
        kana: "かいじゅう",
        meaning: "monster",
        JLPT: 1
    },
    {
        kanji: "解除",
        kana: "かいじょ",
        meaning: "cancellation, rescinding, release, calling off",
        JLPT: 1
    },
    {
        kanji: "回送",
        kana: "かいそう",
        meaning: "forwarding",
        JLPT: 1
    },
    {
        kanji: "階層",
        kana: "かいそう",
        meaning: "class, level, stratum, hierarchy",
        JLPT: 1
    },
    {
        kanji: "開拓",
        kana: "かいたく",
        meaning: "reclamation (of wasteland), cultivation, pioneer",
        JLPT: 1
    },
    {
        kanji: "会談",
        kana: "かいだん",
        meaning: "conversation, conference, discussion, interview",
        JLPT: 1
    },
    {
        kanji: "改定",
        kana: "かいてい",
        meaning: "reform",
        JLPT: 1
    },
    {
        kanji: "改訂",
        kana: "かいてい",
        meaning: "revision",
        JLPT: 1
    },
    {
        kanji: "街道",
        kana: "かいどう",
        meaning: "highway",
        JLPT: 1
    },
    {
        kanji: "介入",
        kana: "かいにゅう",
        meaning: "intervention",
        JLPT: 1
    },
    {
        kanji: "開発",
        kana: "かいはつ",
        meaning: "development, exploitation",
        JLPT: 1
    },
    {
        kanji: "海抜",
        kana: "かいばつ",
        meaning: "height above sea level",
        JLPT: 1
    },
    {
        kanji: "介抱",
        kana: "かいほう",
        meaning: "nursing, looking after",
        JLPT: 1
    },
    {
        kanji: "解剖",
        kana: "かいぼう",
        meaning: "dissection, autopsy",
        JLPT: 1
    },
    {
        kanji: "回覧",
        kana: "かいらん",
        meaning: "circulation",
        JLPT: 1
    },
    {
        kanji: "海流",
        kana: "かいりゅう",
        meaning: "ocean current",
        JLPT: 1
    },
    {
        kanji: "改良",
        kana: "かいりょう",
        meaning: "improvement, reform",
        JLPT: 1
    },
    {
        kanji: "回路",
        kana: "かいろ",
        meaning: "circuit (electric)",
        JLPT: 1
    },
    {
        kanji: "顧みる",
        kana: "かえりみる",
        meaning: "to look back, to turn around, to review",
        JLPT: 1
    },
    {
        kanji: "省みる",
        kana: "かえりみる",
        meaning: "to reflect",
        JLPT: 1
    },
    {
        kanji: "返る",
        kana: "かえる",
        meaning: "to return, to come back, to go back",
        JLPT: 1
    },
    {
        kanji: "顔付き",
        kana: "かおつき",
        meaning: "(outward) looks, features, face, countenance, expression",
        JLPT: 1
    },
    {
        kanji: "掲げる",
        kana: "かかげる",
        meaning: "to publish, to print, to carry (an article), to put up, to hang out, to hoist, to fly (a sail), to float (a",
        JLPT: 1
    },
    {
        kanji: "踵",
        kana: "かかと",
        meaning: "(shoe) heel",
        JLPT: 1
    },
    {
        kanji: "係り",
        kana: "かかり",
        meaning: "official, duty, person in charge",
        JLPT: 1
    },
    {
        kanji: "課外",
        kana: "かがい",
        meaning: "extracurricular",
        JLPT: 1
    },
    {
        kanji: "書き取り",
        kana: "かきとり",
        meaning: "dictation",
        JLPT: 1
    },
    {
        kanji: "書き取る",
        kana: "かきとる",
        meaning: "to write down, to take dictation, to take notes",
        JLPT: 1
    },
    {
        kanji: "掻き回す",
        kana: "かきまわす",
        meaning: "to stir up, to churn, to ransack, to disturb",
        JLPT: 1
    },
    {
        kanji: "欠く",
        kana: "かく",
        meaning: "to lack, to break, to crack, to chip",
        JLPT: 1
    },
    {
        kanji: "角",
        kana: "かく",
        meaning: "1. angle, 2. bishop (shogi)",
        JLPT: 1
    },
    {
        kanji: "核",
        kana: "かく",
        meaning: "nucleus, kernel",
        JLPT: 1
    },
    {
        kanji: "格",
        kana: "かく",
        meaning: "status, character, case",
        JLPT: 1
    },
    {
        kanji: "佳句",
        kana: "かく",
        meaning: "beautiful passage of literature",
        JLPT: 1
    },
    {
        kanji: "画",
        kana: "かく",
        meaning: "stroke",
        JLPT: 1
    },
    {
        kanji: "格差",
        kana: "かくさ",
        meaning: "qualitative difference, disparity",
        JLPT: 1
    },
    {
        kanji: "拡散",
        kana: "かくさん",
        meaning: "scattering, diffusion",
        JLPT: 1
    },
    {
        kanji: "各種",
        kana: "かくしゅ",
        meaning: "every kind, all sorts",
        JLPT: 1
    },
    {
        kanji: "隔週",
        kana: "かくしゅう",
        meaning: "every other week",
        JLPT: 1
    },
    {
        kanji: "確信",
        kana: "かくしん",
        meaning: "conviction, confidence",
        JLPT: 1
    },
    {
        kanji: "革新",
        kana: "かくしん",
        meaning: "reform, innovation",
        JLPT: 1
    },
    {
        kanji: "確定",
        kana: "かくてい",
        meaning: "definition (math), decision, settlement",
        JLPT: 1
    },
    {
        kanji: "獲得",
        kana: "かくとく",
        meaning: "acquisition, possession",
        JLPT: 1
    },
    {
        kanji: "確保",
        kana: "かくほ",
        meaning: "guarantee, ensure, maintain, insure, secure",
        JLPT: 1
    },
    {
        kanji: "革命",
        kana: "かくめい",
        meaning: "revolution",
        JLPT: 1
    },
    {
        kanji: "確立",
        kana: "かくりつ",
        meaning: "establishment",
        JLPT: 1
    },
    {
        kanji: "賭け",
        kana: "かけ",
        meaning: "betting, gambling, a gamble",
        JLPT: 1
    },
    {
        kanji: "掛け",
        kana: "かけ",
        meaning: "credit",
        JLPT: 1
    },
    {
        kanji: "駆け足",
        kana: "かけあし",
        meaning: "running fast, double time",
        JLPT: 1
    },
    {
        kanji: "家計",
        kana: "かけい",
        meaning: "household economy, family finances",
        JLPT: 1
    },
    {
        kanji: "駆けっこ",
        kana: "かけっこ",
        meaning: "(foot) race",
        JLPT: 1
    },
    {
        kanji: "駆ける",
        kana: "かける",
        meaning: "to run (race esp. horse), to gallop, to canter",
        JLPT: 1
    },
    {
        kanji: "賭ける",
        kana: "かける",
        meaning: "to wager, to bet, to risk, to stake, to gamble",
        JLPT: 1
    },
    {
        kanji: "ヶ月",
        kana: "かげつ",
        meaning: "#NAME?",
        JLPT: 1
    },
    {
        kanji: "加工",
        kana: "かこう",
        meaning: "manufacturing, processing, treatment",
        JLPT: 1
    },
    {
        kanji: "化合",
        kana: "かごう",
        meaning: "chemical combination",
        JLPT: 1
    },
    {
        kanji: "嵩張る",
        kana: "かさばる",
        meaning: "to be bulky, to be unwieldy, to grow voluminous",
        JLPT: 1
    },
    {
        kanji: "嵩む",
        kana: "かさむ",
        meaning: "to pile up, to increase",
        JLPT: 1
    },
    {
        kanji: "風車",
        kana: "かざぐるま",
        meaning: "1. windmill, 2. pinwheel",
        JLPT: 1
    },
    {
        kanji: "畏まりました",
        kana: "かしこまりました",
        meaning: "certainly!",
        JLPT: 1
    },
    {
        kanji: "華奢",
        kana: "かしゃ",
        meaning: "luxury, pomp, delicate, slender, gorgeous",
        JLPT: 1
    },
    {
        kanji: "箇所",
        kana: "かしょ",
        meaning: "passage, place, point, part",
        JLPT: 1
    },
    {
        kanji: "火傷",
        kana: "かしょう",
        meaning: "burn, scald",
        JLPT: 1
    },
    {
        kanji: "箇条書き",
        kana: "かじょうがき",
        meaning: "itemized form, itemization",
        JLPT: 1
    },
    {
        kanji: "噛る",
        kana: "かじる",
        meaning: "to chew, to bite (at), to gnaw, to nibble, to munch, to crunch, to have a smattering of",
        JLPT: 1
    },
    {
        kanji: "微か",
        kana: "かすか",
        meaning: "faint, dim, weak, indistinct, hazy, poor, wretched",
        JLPT: 1
    },
    {
        kanji: "霞む",
        kana: "かすむ",
        meaning: "to grow hazy, to be misty",
        JLPT: 1
    },
    {
        kanji: "化する",
        kana: "かする",
        meaning: "to change into, to convert into, to transform, to be reduced, to influence, to improve (someone)",
        JLPT: 1
    },
    {
        kanji: "擦る",
        kana: "かする",
        meaning: "to touch lightly, to take a percentage (from)",
        JLPT: 1
    },
    {
        kanji: "火星",
        kana: "かせい",
        meaning: "Mars (planet)",
        JLPT: 1
    },
    {
        kanji: "化石",
        kana: "かせき",
        meaning: "fossil, petrifaction, fossilization",
        JLPT: 1
    },
    {
        kanji: "河川",
        kana: "かせん",
        meaning: "rivers",
        JLPT: 1
    },
    {
        kanji: "化繊",
        kana: "かせん",
        meaning: "synthetic fibres",
        JLPT: 1
    },
    {
        kanji: "過疎",
        kana: "かそ",
        meaning: "depopulation",
        JLPT: 1
    },
    {
        kanji: "過多",
        kana: "かた",
        meaning: "excess, superabundance",
        JLPT: 1
    },
    {
        kanji: "難い",
        kana: "かたい",
        meaning: "difficult, hard",
        JLPT: 1
    },
    {
        kanji: "片思い",
        kana: "かたおもい",
        meaning: "unrequited love",
        JLPT: 1
    },
    {
        kanji: "敵",
        kana: "かたき",
        meaning: "enemy, rival",
        JLPT: 1
    },
    {
        kanji: "気質",
        kana: "かたぎ",
        meaning: "spirit, character, trait, temperament, disposition",
        JLPT: 1
    },
    {
        kanji: "片言",
        kana: "かたこと",
        meaning: "a smattering, talk like a baby, speak haltingly",
        JLPT: 1
    },
    {
        kanji: "片付け",
        kana: "かたづけ",
        meaning: "tidying up, finishing",
        JLPT: 1
    },
    {
        kanji: "傾く",
        kana: "かたぶく",
        meaning: "to incline toward, to slant, to lurch, to heel over, to be disposed to, to trend toward, to be prone to, to",
        JLPT: 1
    },
    {
        kanji: "傾ける",
        kana: "かたむける",
        meaning: "to incline, to list, to bend, to lean, to tip, to tilt, to slant, to concentrate on, to ruin (a country), to",
        JLPT: 1
    },
    {
        kanji: "固める",
        kana: "かためる",
        meaning: "to harden, to freeze, to fortify",
        JLPT: 1
    },
    {
        kanji: "偏る",
        kana: "かたよる",
        meaning: "to be one-sided, to incline, to be partial, to be prejudiced, to lean, to be biased",
        JLPT: 1
    },
    {
        kanji: "傍ら",
        kana: "かたわら",
        meaning: "beside(s), while, nearby",
        JLPT: 1
    },
    {
        kanji: "課題",
        kana: "かだい",
        meaning: "subject, theme, task",
        JLPT: 1
    },
    {
        kanji: "花壇",
        kana: "かだん",
        meaning: "flower bed",
        JLPT: 1
    },
    {
        kanji: "家畜",
        kana: "かちく",
        meaning: "domestic animals, livestock, cattle",
        JLPT: 1
    },
    {
        kanji: "画期",
        kana: "かっき",
        meaning: "epoch-making",
        JLPT: 1
    },
    {
        kanji: "活発",
        kana: "かっぱつ",
        meaning: "vigor, active",
        JLPT: 1
    },
    {
        kanji: "且つ",
        kana: "かつ",
        meaning: "yet, and",
        JLPT: 1
    },
    {
        kanji: "割",
        kana: "かつ",
        meaning: "divide, cut, halve, separate, split, rip, break, crack, smash, dilute",
        JLPT: 1
    },
    {
        kanji: "嘗て",
        kana: "かつて",
        meaning: "once, ever",
        JLPT: 1
    },
    {
        kanji: "日付",
        kana: "かづけ",
        meaning: "date, dating",
        JLPT: 1
    },
    {
        kanji: "門",
        kana: "かど",
        meaning: "gate",
        JLPT: 1
    },
    {
        kanji: "叶う",
        kana: "かなう",
        meaning: "to come true (wish)",
        JLPT: 1
    },
    {
        kanji: "叶える",
        kana: "かなえる",
        meaning: "to grant (request wish)",
        JLPT: 1
    },
    {
        kanji: "金槌",
        kana: "かなづち",
        meaning: "1. (iron) hammer, 2. punishment",
        JLPT: 1
    },
    {
        kanji: "鉄棒",
        kana: "かなぼう",
        meaning: "iron rod, crowbar, horizontal bar (gymnastics)",
        JLPT: 1
    },
    {
        kanji: "可成",
        kana: "かなり",
        meaning: "considerably, fairly, quite",
        JLPT: 1
    },
    {
        kanji: "加入",
        kana: "かにゅう",
        meaning: "becoming a member, joining, entry, admission, subscription, affiliation, adherence, signing",
        JLPT: 1
    },
    {
        kanji: "金庫",
        kana: "かねぐら",
        meaning: "safe, vault, treasury, provider of funds",
        JLPT: 1
    },
    {
        kanji: "予言",
        kana: "かねごと",
        meaning: "prediction, promise, prognostication",
        JLPT: 1
    },
    {
        kanji: "兼ねて",
        kana: "かねて",
        meaning: "simultaneously",
        JLPT: 1
    },
    {
        kanji: "下番",
        kana: "かばん",
        meaning: "going off duty",
        JLPT: 1
    },
    {
        kanji: "下品",
        kana: "かひん",
        meaning: "inferior article",
        JLPT: 1
    },
    {
        kanji: "華美",
        kana: "かび",
        meaning: "pomp, splendor, gaudiness",
        JLPT: 1
    },
    {
        kanji: "花粉",
        kana: "かふん",
        meaning: "pollen",
        JLPT: 1
    },
    {
        kanji: "株式",
        kana: "かぶしき",
        meaning: "stock (company)",
        JLPT: 1
    },
    {
        kanji: "気触れる",
        kana: "かぶれる",
        meaning: "to react to, to be influenced by, to go overboard for",
        JLPT: 1
    },
    {
        kanji: "貨幣",
        kana: "かへい",
        meaning: "money, currency, coinage",
        JLPT: 1
    },
    {
        kanji: "構え",
        kana: "かまえ",
        meaning: "posture, pose, style",
        JLPT: 1
    },
    {
        kanji: "構える",
        kana: "かまえる",
        meaning: "to set up",
        JLPT: 1
    },
    {
        kanji: "加味",
        kana: "かみ",
        meaning: "seasoning, flavoring",
        JLPT: 1
    },
    {
        kanji: "噛み切る",
        kana: "かみきる",
        meaning: "to bite off, to gnaw through",
        JLPT: 1
    },
    {
        kanji: "過密",
        kana: "かみつ",
        meaning: "crowded",
        JLPT: 1
    },
    {
        kanji: "瓶",
        kana: "かめ",
        meaning: "earthenware pot",
        JLPT: 1
    },
    {
        kanji: "かも知れない",
        kana: "かもしれない",
        meaning: "may, might, perhaps, may be, possibly",
        JLPT: 1
    },
    {
        kanji: "粥",
        kana: "かゆ",
        meaning: "(rice) gruel",
        JLPT: 1
    },
    {
        kanji: "痒い",
        kana: "かゆい",
        meaning: "itchy, itching",
        JLPT: 1
    },
    {
        kanji: "揶揄う",
        kana: "からかう",
        meaning: "to ridicule, to tease, to banter with, to make fun of",
        JLPT: 1
    },
    {
        kanji: "身体",
        kana: "からだ",
        meaning: "the body",
        JLPT: 1
    },
    {
        kanji: "体付き",
        kana: "からだつき",
        meaning: "body build, figure",
        JLPT: 1
    },
    {
        kanji: "絡む",
        kana: "からむ",
        meaning: "to entangle, to entwine",
        JLPT: 1
    },
    {
        kanji: "借り",
        kana: "かり",
        meaning: "borrowing, debt, loan",
        JLPT: 1
    },
    {
        kanji: "下吏",
        kana: "かり",
        meaning: "lower official",
        JLPT: 1
    },
    {
        kanji: "加留多",
        kana: "かるた",
        meaning: "(pt:) (n) playing cards (pt: carta)",
        JLPT: 1
    },
    {
        kanji: "涸れる",
        kana: "かれる",
        meaning: "to dry up, to run out",
        JLPT: 1
    },
    {
        kanji: "過労",
        kana: "かろう",
        meaning: "overwork, strain",
        JLPT: 1
    },
    {
        kanji: "辛うじて",
        kana: "かろうじて",
        meaning: "barely, narrowly, just manage to do st",
        JLPT: 1
    },
    {
        kanji: "側",
        kana: "かわ",
        meaning: "side, row, surroundings, part, (watch) case",
        JLPT: 1
    },
    {
        kanji: "可愛い",
        kana: "かわいい",
        meaning: "pretty, cute, lovely, charming, dear, darling, pet",
        JLPT: 1
    },
    {
        kanji: "可愛がる",
        kana: "かわいがる",
        meaning: "to love, to be affectionate",
        JLPT: 1
    },
    {
        kanji: "可哀想",
        kana: "かわいそう",
        meaning: "poor, pitiable, pathetic",
        JLPT: 1
    },
    {
        kanji: "可愛らしい",
        kana: "かわいらしい",
        meaning: "lovely, sweet",
        JLPT: 1
    },
    {
        kanji: "交わす",
        kana: "かわす",
        meaning: "to exchange (messages), to dodge, to parry, to avoid, to turn aside",
        JLPT: 1
    },
    {
        kanji: "代わる",
        kana: "かわる",
        meaning: "to take the place of, to relieve, to be substituted for, to be exchanged, to change places with, to take",
        JLPT: 1
    },
    {
        kanji: "代わる代わる",
        kana: "かわるがわる",
        meaning: "alternately",
        JLPT: 1
    },
    {
        kanji: "乾",
        kana: "かん",
        meaning: "heaven, emperor",
        JLPT: 1
    },
    {
        kanji: "管",
        kana: "かん",
        meaning: "pipe, tube",
        JLPT: 1
    },
    {
        kanji: "幹",
        kana: "かん",
        meaning: "(tree) trunk",
        JLPT: 1
    },
    {
        kanji: "冠",
        kana: "かん",
        meaning: "crown, diadem, first, best, peerless, cap, naming, designating, initiating on coming of age, top character ra",
        JLPT: 1
    },
    {
        kanji: "観",
        kana: "かん",
        meaning: "look, appearance, spectacle",
        JLPT: 1
    },
    {
        kanji: "館",
        kana: "かん",
        meaning: "house, hall, building, hotel, inn, guesthouse",
        JLPT: 1
    },
    {
        kanji: "簡易",
        kana: "かんい",
        meaning: "simplicity, easiness, quasi-",
        JLPT: 1
    },
    {
        kanji: "感慨",
        kana: "かんがい",
        meaning: "strong feelings, deep emotion",
        JLPT: 1
    },
    {
        kanji: "寒気",
        kana: "かんき",
        meaning: "cold, frost, chill",
        JLPT: 1
    },
    {
        kanji: "簡潔",
        kana: "かんけつ",
        meaning: "brevity, conciseness, simplicity",
        JLPT: 1
    },
    {
        kanji: "還元",
        kana: "かんげん",
        meaning: "resolution, reduction, return to origins",
        JLPT: 1
    },
    {
        kanji: "刊行",
        kana: "かんこう",
        meaning: "publication, issue",
        JLPT: 1
    },
    {
        kanji: "慣行",
        kana: "かんこう",
        meaning: "customary practice, habit, traditional event",
        JLPT: 1
    },
    {
        kanji: "勧告",
        kana: "かんこく",
        meaning: "advice, counsel, remonstrance, recommendation",
        JLPT: 1
    },
    {
        kanji: "看護",
        kana: "かんご",
        meaning: "nursing, (army) nurse",
        JLPT: 1
    },
    {
        kanji: "漢語",
        kana: "かんご",
        meaning: "Chinese word, Sino-Japanese word",
        JLPT: 1
    },
    {
        kanji: "換算",
        kana: "かんさん",
        meaning: "conversion, change, exchange",
        JLPT: 1
    },
    {
        kanji: "監視",
        kana: "かんし",
        meaning: "observation, guarding, inspection, surveillance",
        JLPT: 1
    },
    {
        kanji: "慣習",
        kana: "かんしゅう",
        meaning: "usual (historical) custom",
        JLPT: 1
    },
    {
        kanji: "観衆",
        kana: "かんしゅう",
        meaning: "spectators, onlookers, members of the audience",
        JLPT: 1
    },
    {
        kanji: "干渉",
        kana: "かんしょう",
        meaning: "interference, intervention",
        JLPT: 1
    },
    {
        kanji: "感触",
        kana: "かんしょく",
        meaning: "sense of touch, feeling, sensation",
        JLPT: 1
    },
    {
        kanji: "肝心",
        kana: "かんじん",
        meaning: "essential, fundamental, crucial, vital, main",
        JLPT: 1
    },
    {
        kanji: "歓声",
        kana: "かんせい",
        meaning: "cheer, shout of joy",
        JLPT: 1
    },
    {
        kanji: "感染",
        kana: "かんせん",
        meaning: "infection, contagion",
        JLPT: 1
    },
    {
        kanji: "幹線",
        kana: "かんせん",
        meaning: "main line, trunk line",
        JLPT: 1
    },
    {
        kanji: "関税",
        kana: "かんぜい",
        meaning: "customs, duty, tariff",
        JLPT: 1
    },
    {
        kanji: "簡素",
        kana: "かんそ",
        meaning: "simplicity, plain",
        JLPT: 1
    },
    {
        kanji: "観点",
        kana: "かんてん",
        meaning: "point of view",
        JLPT: 1
    },
    {
        kanji: "感度",
        kana: "かんど",
        meaning: "sensitivity, severity (quake)",
        JLPT: 1
    },
    {
        kanji: "幹部",
        kana: "かんぶ",
        meaning: "management, (executive) staff, leaders",
        JLPT: 1
    },
    {
        kanji: "勘弁",
        kana: "かんべん",
        meaning: "pardon, forgiveness, forbearance",
        JLPT: 1
    },
    {
        kanji: "完璧",
        kana: "かんぺき",
        meaning: "perfection, completeness, flawless",
        JLPT: 1
    },
    {
        kanji: "感無量",
        kana: "かんむりょう",
        meaning: "deep feeling, inexpressible feeling, filled with emotion",
        JLPT: 1
    },
    {
        kanji: "勧誘",
        kana: "かんゆう",
        meaning: "invitation, solicitation, canvassing, inducement, persuasion, encouragement",
        JLPT: 1
    },
    {
        kanji: "関与",
        kana: "かんよ",
        meaning: "participation, taking part in, participating in, being concerned in",
        JLPT: 1
    },
    {
        kanji: "慣用",
        kana: "かんよう",
        meaning: "common, customary",
        JLPT: 1
    },
    {
        kanji: "寛容",
        kana: "かんよう",
        meaning: "forbearance, tolerance, generosity",
        JLPT: 1
    },
    {
        kanji: "観覧",
        kana: "かんらん",
        meaning: "viewing",
        JLPT: 1
    },
    {
        kanji: "官僚",
        kana: "かんりょう",
        meaning: "bureaucrat, bureaucracy",
        JLPT: 1
    },
    {
        kanji: "慣例",
        kana: "かんれい",
        meaning: "custom, precedent, of convention",
        JLPT: 1
    },
    {
        kanji: "還暦",
        kana: "かんれき",
        meaning: "60th birthday",
        JLPT: 1
    },
    {
        kanji: "貫禄",
        kana: "かんろく",
        meaning: "presence, dignity",
        JLPT: 1
    },
    {
        kanji: "緩和",
        kana: "かんわ",
        meaning: "relief, mitigation",
        JLPT: 1
    },
    {
        kanji: "蓋",
        kana: "がい",
        meaning: "cover, lid, cap",
        JLPT: 1
    },
    {
        kanji: "街",
        kana: "がい",
        meaning: "~street, ~quarters",
        JLPT: 1
    },
    {
        kanji: "外貨",
        kana: "がいか",
        meaning: "imported goods, foreign money",
        JLPT: 1
    },
    {
        kanji: "外観",
        kana: "がいかん",
        meaning: "appearance, exterior, facade",
        JLPT: 1
    },
    {
        kanji: "外相",
        kana: "がいしょう",
        meaning: "Foreign Minister",
        JLPT: 1
    },
    {
        kanji: "害する",
        kana: "がいする",
        meaning: "to injure, to damage, to harm, to kill, to hinder",
        JLPT: 1
    },
    {
        kanji: "概説",
        kana: "がいせつ",
        meaning: "general statement, outline",
        JLPT: 1
    },
    {
        kanji: "該当",
        kana: "がいとう",
        meaning: "corresponding, answering to, coming under",
        JLPT: 1
    },
    {
        kanji: "街頭",
        kana: "がいとう",
        meaning: "in the street",
        JLPT: 1
    },
    {
        kanji: "概念",
        kana: "がいねん",
        meaning: "general idea, concept, notion",
        JLPT: 1
    },
    {
        kanji: "外来",
        kana: "がいらい",
        meaning: "imported, outpatient clinic",
        JLPT: 1
    },
    {
        kanji: "概略",
        kana: "がいりゃく",
        meaning: "outline, summary, gist, in brief",
        JLPT: 1
    },
    {
        kanji: "学芸",
        kana: "がくげい",
        meaning: "arts and sciences, liberal arts",
        JLPT: 1
    },
    {
        kanji: "学士",
        kana: "がくし",
        meaning: "university graduate",
        JLPT: 1
    },
    {
        kanji: "学説",
        kana: "がくせつ",
        meaning: "theory",
        JLPT: 1
    },
    {
        kanji: "楽譜",
        kana: "がくふ",
        meaning: "score (music)",
        JLPT: 1
    },
    {
        kanji: "学歴",
        kana: "がくれき",
        meaning: "academic background",
        JLPT: 1
    },
    {
        kanji: "崖",
        kana: "がけ",
        meaning: "cliff",
        JLPT: 1
    },
    {
        kanji: "雅致",
        kana: "がち",
        meaning: "artistry, good taste, elegance, grace",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "がっくり",
        meaning: "heartbroken",
        JLPT: 1
    },
    {
        kanji: "合唱",
        kana: "がっしょう",
        meaning: "chorus, singing in a chorus",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "がっしり",
        meaning: "firmly, solidly, tough",
        JLPT: 1
    },
    {
        kanji: "合致",
        kana: "がっち",
        meaning: "agreement, concurrence, conforming to",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "がっちり",
        meaning: "solidly built, tightly, shrewd, calculating",
        JLPT: 1
    },
    {
        kanji: "月日",
        kana: "がっぴ",
        meaning: "(the) date",
        JLPT: 1
    },
    {
        kanji: "合併",
        kana: "がっぺい",
        meaning: "combination, union, amalgamation, consolidation, merger, coalition, fusion, annexation, affiliation, incorpor",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "がる",
        meaning: "feel",
        JLPT: 1
    },
    {
        kanji: "側",
        kana: "がわ",
        meaning: "side, row, surroundings, part, (watch) case",
        JLPT: 1
    },
    {
        kanji: "癌",
        kana: "がん",
        meaning: "cancer",
        JLPT: 1
    },
    {
        kanji: "眼科",
        kana: "がんか",
        meaning: "ophthalmology",
        JLPT: 1
    },
    {
        kanji: "眼球",
        kana: "がんきゅう",
        meaning: "eyeball",
        JLPT: 1
    },
    {
        kanji: "眼鏡",
        kana: "がんきょう",
        meaning: "spectacles, glasses",
        JLPT: 1
    },
    {
        kanji: "頑固",
        kana: "がんこ",
        meaning: "stubbornness, obstinacy",
        JLPT: 1
    },
    {
        kanji: "願書",
        kana: "がんしょ",
        meaning: "written application or petition",
        JLPT: 1
    },
    {
        kanji: "頑丈",
        kana: "がんじょう",
        meaning: "solid, firm, stout, burly, strong, sturdy",
        JLPT: 1
    },
    {
        kanji: "岩石",
        kana: "がんせき",
        meaning: "rock",
        JLPT: 1
    },
    {
        kanji: "元年",
        kana: "がんねん",
        meaning: "first year (of a specific reign)",
        JLPT: 1
    },
    {
        kanji: "贋物",
        kana: "がんぶつ",
        meaning: "imitation, counterfeit, forgery, sham",
        JLPT: 1
    },
    {
        kanji: "元来",
        kana: "がんらい",
        meaning: "originally, primarily, essentially, logically, naturally",
        JLPT: 1
    },
    {
        kanji: "生",
        kana: "き",
        meaning: "pure, undiluted, raw, crude",
        JLPT: 1
    },
    {
        kanji: "期",
        kana: "き",
        meaning: "period, time",
        JLPT: 1
    },
    {
        kanji: "企画",
        kana: "きかく",
        meaning: "planning, project",
        JLPT: 1
    },
    {
        kanji: "規格",
        kana: "きかく",
        meaning: "standard, norm",
        JLPT: 1
    },
    {
        kanji: "着飾る",
        kana: "きかざる",
        meaning: "to dress up",
        JLPT: 1
    },
    {
        kanji: "器官",
        kana: "きかん",
        meaning: "organ (of body), instrument",
        JLPT: 1
    },
    {
        kanji: "季刊",
        kana: "きかん",
        meaning: "quarterly (e.g. magazine)",
        JLPT: 1
    },
    {
        kanji: "危害",
        kana: "きがい",
        meaning: "injury, harm, danger",
        JLPT: 1
    },
    {
        kanji: "気兼ね",
        kana: "きがね",
        meaning: "hesitance, diffidence, feeling constraint, fear of troubling someone, having scruples about doing someth",
        JLPT: 1
    },
    {
        kanji: "気軽",
        kana: "きがる",
        meaning: "cheerful, buoyant, lighthearted",
        JLPT: 1
    },
    {
        kanji: "危機",
        kana: "きき",
        meaning: "crisis",
        JLPT: 1
    },
    {
        kanji: "聞き取り",
        kana: "ききとり",
        meaning: "listening comprehension",
        JLPT: 1
    },
    {
        kanji: "効き目",
        kana: "ききめ",
        meaning: "effect, virtue, efficacy, impression",
        JLPT: 1
    },
    {
        kanji: "帰京",
        kana: "ききょう",
        meaning: "returning to Tokyo",
        JLPT: 1
    },
    {
        kanji: "基金",
        kana: "ききん",
        meaning: "fund, foundation",
        JLPT: 1
    },
    {
        kanji: "棄権",
        kana: "きけん",
        meaning: "abstain from voting, renunciation of a right",
        JLPT: 1
    },
    {
        kanji: "喜劇",
        kana: "きげき",
        meaning: "comedy, funny show",
        JLPT: 1
    },
    {
        kanji: "起源",
        kana: "きげん",
        meaning: "origin, beginning, rise",
        JLPT: 1
    },
    {
        kanji: "機構",
        kana: "きこう",
        meaning: "mechanism, organization",
        JLPT: 1
    },
    {
        kanji: "既婚",
        kana: "きこん",
        meaning: "marriage, married",
        JLPT: 1
    },
    {
        kanji: "記載",
        kana: "きさい",
        meaning: "mention, entry",
        JLPT: 1
    },
    {
        kanji: "気障",
        kana: "きざ",
        meaning: "affectation, conceit, snobbery",
        JLPT: 1
    },
    {
        kanji: "兆し",
        kana: "きざし",
        meaning: "signs, omen, symptoms",
        JLPT: 1
    },
    {
        kanji: "兆",
        kana: "きざし",
        meaning: "signs, omen, symptoms",
        JLPT: 1
    },
    {
        kanji: "軋む",
        kana: "きしむ",
        meaning: "to jar, to creak, to grate",
        JLPT: 1
    },
    {
        kanji: "気象",
        kana: "きしょう",
        meaning: "weather, climate",
        JLPT: 1
    },
    {
        kanji: "期日",
        kana: "きじつ",
        meaning: "fixed date, settlement date",
        JLPT: 1
    },
    {
        kanji: "記述",
        kana: "きじゅつ",
        meaning: "describing, descriptor",
        JLPT: 1
    },
    {
        kanji: "奇数",
        kana: "きすう",
        meaning: "odd number",
        JLPT: 1
    },
    {
        kanji: "築く",
        kana: "きずく",
        meaning: "to build, to pile up, to amass",
        JLPT: 1
    },
    {
        kanji: "傷付く",
        kana: "きずつく",
        meaning: "to be hurt, to be wounded, to get injured",
        JLPT: 1
    },
    {
        kanji: "規制",
        kana: "きせい",
        meaning: "regulation",
        JLPT: 1
    },
    {
        kanji: "汽船",
        kana: "きせん",
        meaning: "steamship",
        JLPT: 1
    },
    {
        kanji: "寄贈",
        kana: "きそう",
        meaning: "donation, presentation",
        JLPT: 1
    },
    {
        kanji: "貴族",
        kana: "きぞく",
        meaning: "noble, aristocrat",
        JLPT: 1
    },
    {
        kanji: "鍛える",
        kana: "きたえる",
        meaning: "to forge, to drill, to temper, to train, to discipline",
        JLPT: 1
    },
    {
        kanji: "来る",
        kana: "きたる",
        meaning: "to come, to arrive, to be due to, to be next, to be forthcoming",
        JLPT: 1
    },
    {
        kanji: "気立て",
        kana: "きだて",
        meaning: "disposition, nature",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "きちっと",
        meaning: "exactly, perfectly",
        JLPT: 1
    },
    {
        kanji: "几帳面",
        kana: "きちょうめん",
        meaning: "methodical, punctual, steady",
        JLPT: 1
    },
    {
        kanji: "切っ掛け",
        kana: "きっかけ",
        meaning: "chance, start, cue, excuse, motive, impetus, occasion",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "きっかり",
        meaning: "exactly, precisely",
        JLPT: 1
    },
    {
        kanji: "喫茶",
        kana: "きっさ",
        meaning: "tea drinking, tea house",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "きっちり",
        meaning: "precisely, tightly",
        JLPT: 1
    },
    {
        kanji: "屹度",
        kana: "きっと",
        meaning: "1. (uk) surely, undoubtedly, certainly, without fail, 2. sternly, severely",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "きっぱり",
        meaning: "clearly, plainly, distinctly",
        JLPT: 1
    },
    {
        kanji: "規定",
        kana: "きてい",
        meaning: "regulation, provisions",
        JLPT: 1
    },
    {
        kanji: "起点",
        kana: "きてん",
        meaning: "starting point",
        JLPT: 1
    },
    {
        kanji: "軌道",
        kana: "きどう",
        meaning: "orbit, railroad track",
        JLPT: 1
    },
    {
        kanji: "甲",
        kana: "きのえ",
        meaning: "1st in rank, first sign of the Chinese calendar, shell, instep, grade A",
        JLPT: 1
    },
    {
        kanji: "気配",
        kana: "きはい",
        meaning: "indication, market trend, worry",
        JLPT: 1
    },
    {
        kanji: "規範",
        kana: "きはん",
        meaning: "model, standard, pattern, norm, criterion, example",
        JLPT: 1
    },
    {
        kanji: "気品",
        kana: "きひん",
        meaning: "aroma",
        JLPT: 1
    },
    {
        kanji: "気風",
        kana: "きふう",
        meaning: "character, traits, ethos",
        JLPT: 1
    },
    {
        kanji: "起伏",
        kana: "きふく",
        meaning: "undulation",
        JLPT: 1
    },
    {
        kanji: "規模",
        kana: "きぼ",
        meaning: "scale, scope, plan, structure",
        JLPT: 1
    },
    {
        kanji: "気まぐれ",
        kana: "きまぐれ",
        meaning: "whim, caprice, whimsy, fickle, moody, uneven temper",
        JLPT: 1
    },
    {
        kanji: "生真面目",
        kana: "きまじめ",
        meaning: "too serious, person who is too serious, honesty, sincerity",
        JLPT: 1
    },
    {
        kanji: "期末",
        kana: "きまつ",
        meaning: "end of term",
        JLPT: 1
    },
    {
        kanji: "決まり悪い",
        kana: "きまりわるい",
        meaning: "feeling awkward, being ashamed",
        JLPT: 1
    },
    {
        kanji: "決まる",
        kana: "きまる",
        meaning: "to be decided, to be settled, to look good in (clothes)",
        JLPT: 1
    },
    {
        kanji: "記名",
        kana: "きめい",
        meaning: "signature, register",
        JLPT: 1
    },
    {
        kanji: "脚色",
        kana: "きゃくしょく",
        meaning: "dramatization (e.g. film)",
        JLPT: 1
    },
    {
        kanji: "脚本",
        kana: "きゃくほん",
        meaning: "scenario",
        JLPT: 1
    },
    {
        kanji: "客観",
        kana: "きゃっかん",
        meaning: "objective",
        JLPT: 1
    },
    {
        kanji: "規約",
        kana: "きやく",
        meaning: "agreement, rules, code",
        JLPT: 1
    },
    {
        kanji: "救援",
        kana: "きゅうえん",
        meaning: "relief, rescue, reinforcement",
        JLPT: 1
    },
    {
        kanji: "休学",
        kana: "きゅうがく",
        meaning: "temporary absence from school, suspension",
        JLPT: 1
    },
    {
        kanji: "究極",
        kana: "きゅうきょく",
        meaning: "ultimate, final, eventual",
        JLPT: 1
    },
    {
        kanji: "窮屈",
        kana: "きゅうくつ",
        meaning: "narrow, tight, stiff, rigid, uneasy, formal, constrained",
        JLPT: 1
    },
    {
        kanji: "球根",
        kana: "きゅうこん",
        meaning: "(plant) bulb",
        JLPT: 1
    },
    {
        kanji: "救済",
        kana: "きゅうさい",
        meaning: "relief, aid, rescue, salvation, help",
        JLPT: 1
    },
    {
        kanji: "給食",
        kana: "きゅうしょく",
        meaning: "school lunch, providing a meal",
        JLPT: 1
    },
    {
        kanji: "給仕",
        kana: "きゅうじ",
        meaning: "office boy (girl), page, waiter",
        JLPT: 1
    },
    {
        kanji: "休戦",
        kana: "きゅうせん",
        meaning: "truce, armistice",
        JLPT: 1
    },
    {
        kanji: "旧知",
        kana: "きゅうち",
        meaning: "old friend, old friendship",
        JLPT: 1
    },
    {
        kanji: "宮殿",
        kana: "きゅうでん",
        meaning: "palace",
        JLPT: 1
    },
    {
        kanji: "窮乏",
        kana: "きゅうぼう",
        meaning: "poverty",
        JLPT: 1
    },
    {
        kanji: "丘陵",
        kana: "きゅうりょう",
        meaning: "hill",
        JLPT: 1
    },
    {
        kanji: "共",
        kana: "きょう",
        meaning: "both, neither (neg), all, and, as well as, including, with, together with, plural ending",
        JLPT: 1
    },
    {
        kanji: "供",
        kana: "きょう",
        meaning: "offer, present, submit, serve (a meal), supply",
        JLPT: 1
    },
    {
        kanji: "驚異",
        kana: "きょうい",
        meaning: "wonder, miracle",
        JLPT: 1
    },
    {
        kanji: "教員",
        kana: "きょういん",
        meaning: "teaching staff",
        JLPT: 1
    },
    {
        kanji: "教科",
        kana: "きょうか",
        meaning: "subject, curriculum",
        JLPT: 1
    },
    {
        kanji: "協会",
        kana: "きょうかい",
        meaning: "association, society, organization",
        JLPT: 1
    },
    {
        kanji: "共感",
        kana: "きょうかん",
        meaning: "sympathy, response",
        JLPT: 1
    },
    {
        kanji: "共学",
        kana: "きょうがく",
        meaning: "coeducation",
        JLPT: 1
    },
    {
        kanji: "協議",
        kana: "きょうぎ",
        meaning: "conference, consultation, discussion, negotiation",
        JLPT: 1
    },
    {
        kanji: "教訓",
        kana: "きょうくん",
        meaning: "lesson, precept, moral instruction",
        JLPT: 1
    },
    {
        kanji: "境遇",
        kana: "きょうぐう",
        meaning: "environment, circumstances",
        JLPT: 1
    },
    {
        kanji: "強行",
        kana: "きょうこう",
        meaning: "forcing, enforcement",
        JLPT: 1
    },
    {
        kanji: "強硬",
        kana: "きょうこう",
        meaning: "firm, vigorous, unbending, unyielding, strong, stubborn",
        JLPT: 1
    },
    {
        kanji: "凶作",
        kana: "きょうさく",
        meaning: "bad harvest, poor crop",
        JLPT: 1
    },
    {
        kanji: "共産",
        kana: "きょうさん",
        meaning: "communism",
        JLPT: 1
    },
    {
        kanji: "教材",
        kana: "きょうざい",
        meaning: "teaching materials",
        JLPT: 1
    },
    {
        kanji: "教習",
        kana: "きょうしゅう",
        meaning: "training, instruction",
        JLPT: 1
    },
    {
        kanji: "郷愁",
        kana: "きょうしゅう",
        meaning: "nostalgia, homesickness",
        JLPT: 1
    },
    {
        kanji: "教職",
        kana: "きょうしょく",
        meaning: "teaching certificate, the teaching profession",
        JLPT: 1
    },
    {
        kanji: "享受",
        kana: "きょうじゅ",
        meaning: "reception, acceptance, enjoyment, being given",
        JLPT: 1
    },
    {
        kanji: "興じる",
        kana: "きょうじる",
        meaning: "to amuse oneself, to make merry",
        JLPT: 1
    },
    {
        kanji: "強制",
        kana: "きょうせい",
        meaning: "obligation, coercion, compulsion, enforcement",
        JLPT: 1
    },
    {
        kanji: "共存",
        kana: "きょうそん",
        meaning: "coexistence",
        JLPT: 1
    },
    {
        kanji: "姉妹",
        kana: "きょうだい",
        meaning: "sisters",
        JLPT: 1
    },
    {
        kanji: "協調",
        kana: "きょうちょう",
        meaning: "co-operation, conciliation, harmony, firm (market) tone",
        JLPT: 1
    },
    {
        kanji: "協定",
        kana: "きょうてい",
        meaning: "arrangement, pact, agreement",
        JLPT: 1
    },
    {
        kanji: "脅迫",
        kana: "きょうはく",
        meaning: "threat, menace, coercion, terrorism",
        JLPT: 1
    },
    {
        kanji: "共鳴",
        kana: "きょうめい",
        meaning: "resonance, sympathy",
        JLPT: 1
    },
    {
        kanji: "郷里",
        kana: "きょうり",
        meaning: "birth-place, home town",
        JLPT: 1
    },
    {
        kanji: "強烈",
        kana: "きょうれつ",
        meaning: "strong, intense, severe",
        JLPT: 1
    },
    {
        kanji: "共和",
        kana: "きょうわ",
        meaning: "republicanism, cooperation",
        JLPT: 1
    },
    {
        kanji: "曲",
        kana: "きょく",
        meaning: "tune, piece of music",
        JLPT: 1
    },
    {
        kanji: "局限",
        kana: "きょくげん",
        meaning: "limit, localize",
        JLPT: 1
    },
    {
        kanji: "極端",
        kana: "きょくたん",
        meaning: "extreme, extremity",
        JLPT: 1
    },
    {
        kanji: "居住",
        kana: "きょじゅう",
        meaning: "residence",
        JLPT: 1
    },
    {
        kanji: "拒絶",
        kana: "きょぜつ",
        meaning: "refusal, rejection",
        JLPT: 1
    },
    {
        kanji: "拒否",
        kana: "きょひ",
        meaning: "denial, veto, rejection, refusal",
        JLPT: 1
    },
    {
        kanji: "許容",
        kana: "きょよう",
        meaning: "permission, pardon",
        JLPT: 1
    },
    {
        kanji: "距離",
        kana: "きょり",
        meaning: "distance, range",
        JLPT: 1
    },
    {
        kanji: "寄与",
        kana: "きよ",
        meaning: "contribution, service",
        JLPT: 1
    },
    {
        kanji: "清らか",
        kana: "きよらか",
        meaning: "clean, pure, chaste",
        JLPT: 1
    },
    {
        kanji: "気楽",
        kana: "きらく",
        meaning: "at ease, comfortable",
        JLPT: 1
    },
    {
        kanji: "煌びやか",
        kana: "きらびやか",
        meaning: "gorgeous, gaudy, dazzling, gay",
        JLPT: 1
    },
    {
        kanji: "切り",
        kana: "きり",
        meaning: "limits, end, bounds, period, place to leave off, closing sentence, all there is, only, since",
        JLPT: 1
    },
    {
        kanji: "桐",
        kana: "きり",
        meaning: "paulownia tree",
        JLPT: 1
    },
    {
        kanji: "切り替える",
        kana: "きりかえる",
        meaning: "to change, to exchange, to convert, to renew, to throw a switch, to replace, to switch over",
        JLPT: 1
    },
    {
        kanji: "気流",
        kana: "きりゅう",
        meaning: "atmospheric current",
        JLPT: 1
    },
    {
        kanji: "奇麗",
        kana: "きれい",
        meaning: "pretty, clean, nice, tidy, beautiful, fair",
        JLPT: 1
    },
    {
        kanji: "切れ目",
        kana: "きれめ",
        meaning: "break, pause, gap, end, rift, interruption, cut, section, notch, incision, end (of a task)",
        JLPT: 1
    },
    {
        kanji: "際",
        kana: "きわ",
        meaning: "edge, brink, verge, side",
        JLPT: 1
    },
    {
        kanji: "木綿",
        kana: "きわた",
        meaning: "cotton",
        JLPT: 1
    },
    {
        kanji: "極めて",
        kana: "きわめて",
        meaning: "exceedingly, extremely",
        JLPT: 1
    },
    {
        kanji: "僅",
        kana: "きん",
        meaning: "a little, small quantity",
        JLPT: 1
    },
    {
        kanji: "近眼",
        kana: "きんがん",
        meaning: "nearsightedness, shortsightedness, myopia",
        JLPT: 1
    },
    {
        kanji: "緊急",
        kana: "きんきゅう",
        meaning: "urgent, pressing, emergency",
        JLPT: 1
    },
    {
        kanji: "近々",
        kana: "きんきん",
        meaning: "nearness, before long",
        JLPT: 1
    },
    {
        kanji: "近郊",
        kana: "きんこう",
        meaning: "suburbs, outskirts",
        JLPT: 1
    },
    {
        kanji: "均衡",
        kana: "きんこう",
        meaning: "equilibrium, balance",
        JLPT: 1
    },
    {
        kanji: "近視",
        kana: "きんし",
        meaning: "shortsightedness",
        JLPT: 1
    },
    {
        kanji: "禁じる",
        kana: "きんじる",
        meaning: "to prohibit",
        JLPT: 1
    },
    {
        kanji: "禁ずる",
        kana: "きんずる",
        meaning: "to forbid, to suppress",
        JLPT: 1
    },
    {
        kanji: "勤勉",
        kana: "きんべん",
        meaning: "industry, diligence",
        JLPT: 1
    },
    {
        kanji: "勤務",
        kana: "きんむ",
        meaning: "service, duty, work",
        JLPT: 1
    },
    {
        kanji: "禁物",
        kana: "きんもつ",
        meaning: "taboo, forbidden thing",
        JLPT: 1
    },
    {
        kanji: "勤労",
        kana: "きんろう",
        meaning: "labor, exertion, diligent service",
        JLPT: 1
    },
    {
        kanji: "議案",
        kana: "ぎあん",
        meaning: "legislative bill",
        JLPT: 1
    },
    {
        kanji: "戯曲",
        kana: "ぎきょく",
        meaning: "play, drama",
        JLPT: 1
    },
    {
        kanji: "議決",
        kana: "ぎけつ",
        meaning: "resolution, decision, vote",
        JLPT: 1
    },
    {
        kanji: "議事堂",
        kana: "ぎじどう",
        meaning: "Diet building",
        JLPT: 1
    },
    {
        kanji: "犠牲",
        kana: "ぎせい",
        meaning: "sacrifice",
        JLPT: 1
    },
    {
        kanji: "偽造",
        kana: "ぎぞう",
        meaning: "forgery, falsification, fabrication, counterfeiting",
        JLPT: 1
    },
    {
        kanji: "議題",
        kana: "ぎだい",
        meaning: "topic of discussion, agenda",
        JLPT: 1
    },
    {
        kanji: "技能",
        kana: "ぎのう",
        meaning: "technical skill, ability, capacity",
        JLPT: 1
    },
    {
        kanji: "逆転",
        kana: "ぎゃくてん",
        meaning: "(sudden) change, reversal, turn-around, coming from behind (baseball)",
        JLPT: 1
    },
    {
        kanji: "行",
        kana: "ぎょう",
        meaning: "line, row, verse",
        JLPT: 1
    },
    {
        kanji: "業者",
        kana: "ぎょうしゃ",
        meaning: "trader, merchant",
        JLPT: 1
    },
    {
        kanji: "行政",
        kana: "ぎょうせい",
        meaning: "administration",
        JLPT: 1
    },
    {
        kanji: "業績",
        kana: "ぎょうせき",
        meaning: "achievement, performance, results, work, contribution",
        JLPT: 1
    },
    {
        kanji: "業務",
        kana: "ぎょうむ",
        meaning: "business, affairs, duties, work",
        JLPT: 1
    },
    {
        kanji: "玉",
        kana: "ぎょく",
        meaning: "king (shogi)",
        JLPT: 1
    },
    {
        kanji: "漁船",
        kana: "ぎょせん",
        meaning: "fishing boat",
        JLPT: 1
    },
    {
        kanji: "漁村",
        kana: "ぎょそん",
        meaning: "fishing village",
        JLPT: 1
    },
    {
        kanji: "義理",
        kana: "ぎり",
        meaning: "duty, sense of duty, honor, decency, courtesy, debt of gratitude, social obligation",
        JLPT: 1
    },
    {
        kanji: "疑惑",
        kana: "ぎわく",
        meaning: "doubt, misgivings, distrust, suspicion",
        JLPT: 1
    },
    {
        kanji: "吟味",
        kana: "ぎんみ",
        meaning: "testing, scrutiny, careful investigation",
        JLPT: 1
    },
    {
        kanji: "区",
        kana: "く",
        meaning: "ward, district, section",
        JLPT: 1
    },
    {
        kanji: "食い違う",
        kana: "くいちがう",
        meaning: "to cross each other, to run counter to, to differ, to clash, to go awry",
        JLPT: 1
    },
    {
        kanji: "空腹",
        kana: "くうふく",
        meaning: "hunger",
        JLPT: 1
    },
    {
        kanji: "区画",
        kana: "くかく",
        meaning: "division, section, compartment, boundary, area, block",
        JLPT: 1
    },
    {
        kanji: "区間",
        kana: "くかん",
        meaning: "section (of track etc)",
        JLPT: 1
    },
    {
        kanji: "茎",
        kana: "くき",
        meaning: "stalk",
        JLPT: 1
    },
    {
        kanji: "区切り",
        kana: "くぎり",
        meaning: "an end, a stop, punctuation",
        JLPT: 1
    },
    {
        kanji: "潜る",
        kana: "くぐる",
        meaning: "1. to drive, to pass through, 2. to evade, to hide, 3. to dive (into or under water), to go undergro",
        JLPT: 1
    },
    {
        kanji: "種々",
        kana: "くさぐさ",
        meaning: "variety",
        JLPT: 1
    },
    {
        kanji: "嚏",
        kana: "くしゃみ",
        meaning: "sneeze",
        JLPT: 1
    },
    {
        kanji: "旧事",
        kana: "くじ",
        meaning: "past events, bygones",
        JLPT: 1
    },
    {
        kanji: "籤引",
        kana: "くじびき",
        meaning: "lottery, drawn lot",
        JLPT: 1
    },
    {
        kanji: "擽ぐったい",
        kana: "くすぐったい",
        meaning: "ticklish",
        JLPT: 1
    },
    {
        kanji: "草臥れる",
        kana: "くたびれる",
        meaning: "to get tired, to wear out",
        JLPT: 1
    },
    {
        kanji: "下らない",
        kana: "くだらない",
        meaning: "good-for-nothing, stupid, trivial, worthless",
        JLPT: 1
    },
    {
        kanji: "件",
        kana: "くだん",
        meaning: "example, precedent, the usual, the said, the above-mentioned, (man) in question",
        JLPT: 1
    },
    {
        kanji: "口ずさむ",
        kana: "くちずさむ",
        meaning: "to hum something, to sing to oneself",
        JLPT: 1
    },
    {
        kanji: "嘴",
        kana: "くちばし",
        meaning: "beak, bill",
        JLPT: 1
    },
    {
        kanji: "朽ちる",
        kana: "くちる",
        meaning: "to rot",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "くっきり",
        meaning: "distinctly, clearly, boldly",
        JLPT: 1
    },
    {
        kanji: "屈折",
        kana: "くっせつ",
        meaning: "bending, indentation, refraction",
        JLPT: 1
    },
    {
        kanji: "くっ付く",
        kana: "くっつく",
        meaning: "to adhere to, to keep close to",
        JLPT: 1
    },
    {
        kanji: "くっ付ける",
        kana: "くっつける",
        meaning: "to attach",
        JLPT: 1
    },
    {
        kanji: "覆す",
        kana: "くつがえす",
        meaning: "to overturn, to upset, to overthrow, to undermine",
        JLPT: 1
    },
    {
        kanji: "諄い",
        kana: "くどい",
        meaning: "verbose, importunate, heavy (taste)",
        JLPT: 1
    },
    {
        kanji: "国境",
        kana: "くにざかい",
        meaning: "national or state border",
        JLPT: 1
    },
    {
        kanji: "首飾り",
        kana: "くびかざり",
        meaning: "necklace",
        JLPT: 1
    },
    {
        kanji: "首輪",
        kana: "くびわ",
        meaning: "necklace, choker",
        JLPT: 1
    },
    {
        kanji: "組み合わせ",
        kana: "くみあわせ",
        meaning: "combination",
        JLPT: 1
    },
    {
        kanji: "組み合わせる",
        kana: "くみあわせる",
        meaning: "to join together, to combine, to join up",
        JLPT: 1
    },
    {
        kanji: "組み込む",
        kana: "くみこむ",
        meaning: "to insert, to include, to cut in (printing)",
        JLPT: 1
    },
    {
        kanji: "蔵",
        kana: "くら",
        meaning: "warehouse, cellar, magazine, granary, godown, depository, treasury, elevator",
        JLPT: 1
    },
    {
        kanji: "苦しめる",
        kana: "くるしめる",
        meaning: "to torment, to harass, to inflict pain",
        JLPT: 1
    },
    {
        kanji: "包む",
        kana: "くるむ",
        meaning: "to be engulfed in, to be enveloped by, to wrap up, to tuck in, to pack, to do up, to cover with, to dress i",
        JLPT: 1
    },
    {
        kanji: "呉れ呉れも",
        kana: "くれぐれも",
        meaning: "repeatedly, sincerely, earnestly",
        JLPT: 1
    },
    {
        kanji: "呉れる",
        kana: "くれる",
        meaning: "to give, to let one have, to do for one, to be given",
        JLPT: 1
    },
    {
        kanji: "玄人",
        kana: "くろうと",
        meaning: "expert, professional, geisha, prostitute",
        JLPT: 1
    },
    {
        kanji: "黒字",
        kana: "くろじ",
        meaning: "balance (figure) in the black",
        JLPT: 1
    },
    {
        kanji: "君主",
        kana: "くんしゅ",
        meaning: "ruler, monarch",
        JLPT: 1
    },
    {
        kanji: "愚痴",
        kana: "ぐち",
        meaning: "idle complaint, grumble",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぐっと",
        meaning: "firmly, fast, much, more",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぐらい",
        meaning: "approximately",
        JLPT: 1
    },
    {
        kanji: "群",
        kana: "ぐん",
        meaning: "group (math)",
        JLPT: 1
    },
    {
        kanji: "軍艦",
        kana: "ぐんかん",
        meaning: "warship, battleship",
        JLPT: 1
    },
    {
        kanji: "群集",
        kana: "ぐんしゅう",
        meaning: "(social) group, crowd, throng, mob, multitude",
        JLPT: 1
    },
    {
        kanji: "軍事",
        kana: "ぐんじ",
        meaning: "military affairs",
        JLPT: 1
    },
    {
        kanji: "軍備",
        kana: "ぐんび",
        meaning: "armaments, military preparations",
        JLPT: 1
    },
    {
        kanji: "軍服",
        kana: "ぐんぷく",
        meaning: "military or naval uniform",
        JLPT: 1
    },
    {
        kanji: "刑",
        kana: "けい",
        meaning: "penalty, sentence, punishment",
        JLPT: 1
    },
    {
        kanji: "頃",
        kana: "けい",
        meaning: "time, about, toward, approximately (time)",
        JLPT: 1
    },
    {
        kanji: "傾",
        kana: "けい",
        meaning: "lean, incline",
        JLPT: 1
    },
    {
        kanji: "系",
        kana: "けい",
        meaning: "system, lineage, group",
        JLPT: 1
    },
    {
        kanji: "経過",
        kana: "けいか",
        meaning: "passage, expiration, progress",
        JLPT: 1
    },
    {
        kanji: "軽快",
        kana: "けいかい",
        meaning: "rhythmical (e.g. melody), casual (e.g. dress), light, nimble",
        JLPT: 1
    },
    {
        kanji: "警戒",
        kana: "けいかい",
        meaning: "warning, admonition, vigilance",
        JLPT: 1
    },
    {
        kanji: "計器",
        kana: "けいき",
        meaning: "meter, gauge",
        JLPT: 1
    },
    {
        kanji: "契機",
        kana: "けいき",
        meaning: "opportunity, chance",
        JLPT: 1
    },
    {
        kanji: "敬具",
        kana: "けいぐ",
        meaning: "Sincerely yours",
        JLPT: 1
    },
    {
        kanji: "軽減",
        kana: "けいげん",
        meaning: "abatement",
        JLPT: 1
    },
    {
        kanji: "掲載",
        kana: "けいさい",
        meaning: "appearance (e.g. article in paper)",
        JLPT: 1
    },
    {
        kanji: "傾斜",
        kana: "けいしゃ",
        meaning: "inclination, slant, slope, bevel, list, dip",
        JLPT: 1
    },
    {
        kanji: "形成",
        kana: "けいせい",
        meaning: "formation",
        JLPT: 1
    },
    {
        kanji: "形勢",
        kana: "けいせい",
        meaning: "condition, situation, prospects",
        JLPT: 1
    },
    {
        kanji: "軽率",
        kana: "けいそつ",
        meaning: "rash, thoughtless, careless, hasty",
        JLPT: 1
    },
    {
        kanji: "携帯",
        kana: "けいたい",
        meaning: "carrying something",
        JLPT: 1
    },
    {
        kanji: "形態",
        kana: "けいたい",
        meaning: "form, shape, figure",
        JLPT: 1
    },
    {
        kanji: "刑罰",
        kana: "けいばつ",
        meaning: "judgement, penalty, punishment",
        JLPT: 1
    },
    {
        kanji: "経費",
        kana: "けいひ",
        meaning: "expenses, cost, outlay",
        JLPT: 1
    },
    {
        kanji: "警部",
        kana: "けいぶ",
        meaning: "police inspector",
        JLPT: 1
    },
    {
        kanji: "軽蔑",
        kana: "けいべつ",
        meaning: "scorn, disdain",
        JLPT: 1
    },
    {
        kanji: "経歴",
        kana: "けいれき",
        meaning: "personal history, career",
        JLPT: 1
    },
    {
        kanji: "経路",
        kana: "けいろ",
        meaning: "course, route, channel",
        JLPT: 1
    },
    {
        kanji: "汚す",
        kana: "けがす",
        meaning: "to disgrace, to dishonour",
        JLPT: 1
    },
    {
        kanji: "汚らわしい",
        kana: "けがらわしい",
        meaning: "filthy, unfair",
        JLPT: 1
    },
    {
        kanji: "汚れ",
        kana: "けがれ",
        meaning: "uncleanness, impurity, disgrace",
        JLPT: 1
    },
    {
        kanji: "汚れる",
        kana: "けがれる",
        meaning: "to get dirty, to become dirty",
        JLPT: 1
    },
    {
        kanji: "獣",
        kana: "けだもの",
        meaning: "beast, brute",
        JLPT: 1
    },
    {
        kanji: "吝嗇",
        kana: "けち",
        meaning: "stinginess, miser, miserliness, skinflint, tightwad, niggard, pinching pennies",
        JLPT: 1
    },
    {
        kanji: "結核",
        kana: "けっかく",
        meaning: "tuberculosis, tubercule",
        JLPT: 1
    },
    {
        kanji: "血管",
        kana: "けっかん",
        meaning: "blood vessel",
        JLPT: 1
    },
    {
        kanji: "決行",
        kana: "けっこう",
        meaning: "doing (with resolve), carrying out (i.e. a plan)",
        JLPT: 1
    },
    {
        kanji: "決算",
        kana: "けっさん",
        meaning: "balance sheet, settlement of accounts",
        JLPT: 1
    },
    {
        kanji: "決勝",
        kana: "けっしょう",
        meaning: "decision of a contest, finals (in sports)",
        JLPT: 1
    },
    {
        kanji: "結晶",
        kana: "けっしょう",
        meaning: "crystal, crystallization",
        JLPT: 1
    },
    {
        kanji: "結成",
        kana: "けっせい",
        meaning: "formation",
        JLPT: 1
    },
    {
        kanji: "結束",
        kana: "けっそく",
        meaning: "union, unity",
        JLPT: 1
    },
    {
        kanji: "傑",
        kana: "けつ",
        meaning: "excellence",
        JLPT: 1
    },
    {
        kanji: "決意",
        kana: "けつい",
        meaning: "decision, determination",
        JLPT: 1
    },
    {
        kanji: "決議",
        kana: "けつぎ",
        meaning: "resolution, vote, decision",
        JLPT: 1
    },
    {
        kanji: "結合",
        kana: "けつごう",
        meaning: "combination, union",
        JLPT: 1
    },
    {
        kanji: "決断",
        kana: "けつだん",
        meaning: "decision, determination",
        JLPT: 1
    },
    {
        kanji: "欠乏",
        kana: "けつぼう",
        meaning: "want, shortage, famine",
        JLPT: 1
    },
    {
        kanji: "蹴飛ばす",
        kana: "けとばす",
        meaning: "to kick away, to kick off, to kick (someone), to refuse, to reject",
        JLPT: 1
    },
    {
        kanji: "貶す",
        kana: "けなす",
        meaning: "to speak ill of",
        JLPT: 1
    },
    {
        kanji: "煙たい",
        kana: "けむたい",
        meaning: "smoky, feeling awkward",
        JLPT: 1
    },
    {
        kanji: "煙る",
        kana: "けむる",
        meaning: "to smoke (e.g. fire)",
        JLPT: 1
    },
    {
        kanji: "家来",
        kana: "けらい",
        meaning: "retainer, retinue, servant",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "けれど",
        meaning: "but, however",
        JLPT: 1
    },
    {
        kanji: "圏",
        kana: "けん",
        meaning: "sphere, circle, range",
        JLPT: 1
    },
    {
        kanji: "権",
        kana: "けん",
        meaning: "authority, the right (to do something)",
        JLPT: 1
    },
    {
        kanji: "権威",
        kana: "けんい",
        meaning: "authority, power, influence",
        JLPT: 1
    },
    {
        kanji: "兼業",
        kana: "けんぎょう",
        meaning: "side line, second business",
        JLPT: 1
    },
    {
        kanji: "権限",
        kana: "けんげん",
        meaning: "power, authority, jurisdiction",
        JLPT: 1
    },
    {
        kanji: "健在",
        kana: "けんざい",
        meaning: "in good health, well",
        JLPT: 1
    },
    {
        kanji: "懸賞",
        kana: "けんしょう",
        meaning: "offering prizes, winning, reward",
        JLPT: 1
    },
    {
        kanji: "検事",
        kana: "けんじ",
        meaning: "public prosecutor",
        JLPT: 1
    },
    {
        kanji: "健全",
        kana: "けんぜん",
        meaning: "health, soundness, wholesome",
        JLPT: 1
    },
    {
        kanji: "見地",
        kana: "けんち",
        meaning: "point of view",
        JLPT: 1
    },
    {
        kanji: "賢明",
        kana: "けんめい",
        meaning: "wisdom, intelligence, prudence",
        JLPT: 1
    },
    {
        kanji: "倹約",
        kana: "けんやく",
        meaning: "thrift, economy, frugality",
        JLPT: 1
    },
    {
        kanji: "兼用",
        kana: "けんよう",
        meaning: "multi-use, combined use, combination, serving two purposes",
        JLPT: 1
    },
    {
        kanji: "権力",
        kana: "けんりょく",
        meaning: "power, authority, influence",
        JLPT: 1
    },
    {
        kanji: "劇団",
        kana: "げきだん",
        meaning: "troupe, theatrical company",
        JLPT: 1
    },
    {
        kanji: "激励",
        kana: "げきれい",
        meaning: "encouragement",
        JLPT: 1
    },
    {
        kanji: "月謝",
        kana: "げっしゃ",
        meaning: "monthly tuition fee",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "げっそり",
        meaning: "being disheartened, losing weight",
        JLPT: 1
    },
    {
        kanji: "月賦",
        kana: "げっぷ",
        meaning: "monthly installment",
        JLPT: 1
    },
    {
        kanji: "下痢",
        kana: "げり",
        meaning: "diarrhoea",
        JLPT: 1
    },
    {
        kanji: "原",
        kana: "げん",
        meaning: "original, primitive, primary, fundamental, raw",
        JLPT: 1
    },
    {
        kanji: "原形",
        kana: "げんけい",
        meaning: "original form, base form",
        JLPT: 1
    },
    {
        kanji: "現行",
        kana: "げんこう",
        meaning: "present, current, in operation",
        JLPT: 1
    },
    {
        kanji: "原作",
        kana: "げんさく",
        meaning: "original work",
        JLPT: 1
    },
    {
        kanji: "原子",
        kana: "げんし",
        meaning: "atom",
        JLPT: 1
    },
    {
        kanji: "元首",
        kana: "げんしゅ",
        meaning: "ruler, sovereign",
        JLPT: 1
    },
    {
        kanji: "原書",
        kana: "げんしょ",
        meaning: "original document",
        JLPT: 1
    },
    {
        kanji: "減少",
        kana: "げんしょう",
        meaning: "decrease, reduction, decline",
        JLPT: 1
    },
    {
        kanji: "現場",
        kana: "げんじょう",
        meaning: "actual spot, scene, scene of the crime",
        JLPT: 1
    },
    {
        kanji: "元素",
        kana: "げんそ",
        meaning: "chemical element",
        JLPT: 1
    },
    {
        kanji: "原則",
        kana: "げんそく",
        meaning: "principle, general rule",
        JLPT: 1
    },
    {
        kanji: "現像",
        kana: "げんぞう",
        meaning: "developing (film)",
        JLPT: 1
    },
    {
        kanji: "現地",
        kana: "げんち",
        meaning: "actual place, local",
        JLPT: 1
    },
    {
        kanji: "限定",
        kana: "げんてい",
        meaning: "limit, restriction",
        JLPT: 1
    },
    {
        kanji: "原点",
        kana: "げんてん",
        meaning: "origin (coordinates), starting point",
        JLPT: 1
    },
    {
        kanji: "原典",
        kana: "げんてん",
        meaning: "original (text)",
        JLPT: 1
    },
    {
        kanji: "減点",
        kana: "げんてん",
        meaning: "subtract, give a demerit",
        JLPT: 1
    },
    {
        kanji: "原爆",
        kana: "げんばく",
        meaning: "atomic bomb",
        JLPT: 1
    },
    {
        kanji: "原文",
        kana: "げんぶん",
        meaning: "the text, original",
        JLPT: 1
    },
    {
        kanji: "厳密",
        kana: "げんみつ",
        meaning: "strict, close",
        JLPT: 1
    },
    {
        kanji: "原油",
        kana: "げんゆ",
        meaning: "crude oil",
        JLPT: 1
    },
    {
        kanji: "言論",
        kana: "げんろん",
        meaning: "discussion",
        JLPT: 1
    },
    {
        kanji: "故",
        kana: "こ",
        meaning: "the late (deceased)",
        JLPT: 1
    },
    {
        kanji: "戸",
        kana: "こ",
        meaning: "counter for houses",
        JLPT: 1
    },
    {
        kanji: "児",
        kana: "こ",
        meaning: "child, the young of animals",
        JLPT: 1
    },
    {
        kanji: "巨",
        kana: "こ",
        meaning: "big, large, great",
        JLPT: 1
    },
    {
        kanji: "恋する",
        kana: "こいする",
        meaning: "to fall in love with, to love",
        JLPT: 1
    },
    {
        kanji: "溝",
        kana: "こう",
        meaning: "10^38, hundred undecillion (American), hundred sextillion (British)",
        JLPT: 1
    },
    {
        kanji: "校",
        kana: "こう",
        meaning: "-school, proof",
        JLPT: 1
    },
    {
        kanji: "好意",
        kana: "こうい",
        meaning: "good will, favor, courtesy",
        JLPT: 1
    },
    {
        kanji: "行為",
        kana: "こうい",
        meaning: "act, deed, conduct",
        JLPT: 1
    },
    {
        kanji: "行員",
        kana: "こういん",
        meaning: "bank clerk",
        JLPT: 1
    },
    {
        kanji: "交易",
        kana: "こうえき",
        meaning: "trade, commerce",
        JLPT: 1
    },
    {
        kanji: "公演",
        kana: "こうえん",
        meaning: "public performance",
        JLPT: 1
    },
    {
        kanji: "後悔",
        kana: "こうかい",
        meaning: "regret, repentance",
        JLPT: 1
    },
    {
        kanji: "公開",
        kana: "こうかい",
        meaning: "presenting to the public",
        JLPT: 1
    },
    {
        kanji: "航海",
        kana: "こうかい",
        meaning: "sail, voyage",
        JLPT: 1
    },
    {
        kanji: "工学",
        kana: "こうがく",
        meaning: "engineering",
        JLPT: 1
    },
    {
        kanji: "皇居",
        kana: "こうきょ",
        meaning: "Imperial Palace",
        JLPT: 1
    },
    {
        kanji: "好況",
        kana: "こうきょう",
        meaning: "prosperous conditions, healthy economy",
        JLPT: 1
    },
    {
        kanji: "抗議",
        kana: "こうぎ",
        meaning: "protest, objection",
        JLPT: 1
    },
    {
        kanji: "鉱業",
        kana: "こうぎょう",
        meaning: "mining industry",
        JLPT: 1
    },
    {
        kanji: "興業",
        kana: "こうぎょう",
        meaning: "industrial enterprise",
        JLPT: 1
    },
    {
        kanji: "高原",
        kana: "こうげん",
        meaning: "tableland, plateau",
        JLPT: 1
    },
    {
        kanji: "煌々と",
        kana: "こうこうと",
        meaning: "brilliantly, brightly",
        JLPT: 1
    },
    {
        kanji: "考古学",
        kana: "こうこがく",
        meaning: "archaeology",
        JLPT: 1
    },
    {
        kanji: "交互",
        kana: "こうご",
        meaning: "mutual, reciprocal, alternate",
        JLPT: 1
    },
    {
        kanji: "工作",
        kana: "こうさく",
        meaning: "work, construction, handicraft, maneuvering",
        JLPT: 1
    },
    {
        kanji: "耕作",
        kana: "こうさく",
        meaning: "cultivation, farming",
        JLPT: 1
    },
    {
        kanji: "鉱山",
        kana: "こうざん",
        meaning: "mine (ore)",
        JLPT: 1
    },
    {
        kanji: "講習",
        kana: "こうしゅう",
        meaning: "short course, training",
        JLPT: 1
    },
    {
        kanji: "交渉",
        kana: "こうしょう",
        meaning: "negotiations, discussions, connection",
        JLPT: 1
    },
    {
        kanji: "高尚",
        kana: "こうしょう",
        meaning: "high, noble, refined, advanced",
        JLPT: 1
    },
    {
        kanji: "行進",
        kana: "こうしん",
        meaning: "march, parade",
        JLPT: 1
    },
    {
        kanji: "香辛料",
        kana: "こうしんりょう",
        meaning: "spices",
        JLPT: 1
    },
    {
        kanji: "口述",
        kana: "こうじゅつ",
        meaning: "verbal statement",
        JLPT: 1
    },
    {
        kanji: "控除",
        kana: "こうじょ",
        meaning: "subsidy, deduction",
        JLPT: 1
    },
    {
        kanji: "向上",
        kana: "こうじょう",
        meaning: "elevation, rise, improvement, advancement, progress",
        JLPT: 1
    },
    {
        kanji: "降水",
        kana: "こうすい",
        meaning: "rainfall, precipitation",
        JLPT: 1
    },
    {
        kanji: "洪水",
        kana: "こうずい",
        meaning: "flood",
        JLPT: 1
    },
    {
        kanji: "公然",
        kana: "こうぜん",
        meaning: "open (e.g. secret), public, official",
        JLPT: 1
    },
    {
        kanji: "抗争",
        kana: "こうそう",
        meaning: "dispute, resistance",
        JLPT: 1
    },
    {
        kanji: "構想",
        kana: "こうそう",
        meaning: "plan, plot, idea, conception",
        JLPT: 1
    },
    {
        kanji: "拘束",
        kana: "こうそく",
        meaning: "restriction, restraint",
        JLPT: 1
    },
    {
        kanji: "後退",
        kana: "こうたい",
        meaning: "retreat, backspace (BS)",
        JLPT: 1
    },
    {
        kanji: "光沢",
        kana: "こうたく",
        meaning: "brilliance, polish, lustre, glossy finish (of photographs)",
        JLPT: 1
    },
    {
        kanji: "公団",
        kana: "こうだん",
        meaning: "public corporation",
        JLPT: 1
    },
    {
        kanji: "好調",
        kana: "こうちょう",
        meaning: "favourable, promising, satisfactory, in good shape",
        JLPT: 1
    },
    {
        kanji: "口頭",
        kana: "こうとう",
        meaning: "oral",
        JLPT: 1
    },
    {
        kanji: "講読",
        kana: "こうどく",
        meaning: "reading, translation",
        JLPT: 1
    },
    {
        kanji: "購読",
        kana: "こうどく",
        meaning: "subscription (e.g. magazine)",
        JLPT: 1
    },
    {
        kanji: "購入",
        kana: "こうにゅう",
        meaning: "purchase, buy",
        JLPT: 1
    },
    {
        kanji: "公認",
        kana: "こうにん",
        meaning: "official recognition, authorization, licence, accreditation",
        JLPT: 1
    },
    {
        kanji: "光熱費",
        kana: "こうねつひ",
        meaning: "cost of fuel and light",
        JLPT: 1
    },
    {
        kanji: "荒廃",
        kana: "こうはい",
        meaning: "ruin",
        JLPT: 1
    },
    {
        kanji: "購買",
        kana: "こうばい",
        meaning: "purchase, buy",
        JLPT: 1
    },
    {
        kanji: "好評",
        kana: "こうひょう",
        meaning: "popularity, favorable reputation",
        JLPT: 1
    },
    {
        kanji: "交付",
        kana: "こうふ",
        meaning: "delivering, furnishing (with copies)",
        JLPT: 1
    },
    {
        kanji: "降伏",
        kana: "こうふく",
        meaning: "capitulation, surrender, submission",
        JLPT: 1
    },
    {
        kanji: "興奮",
        kana: "こうふん",
        meaning: "excitement, stimulation, agitation, arousal",
        JLPT: 1
    },
    {
        kanji: "公募",
        kana: "こうぼ",
        meaning: "public appeal, public contribution",
        JLPT: 1
    },
    {
        kanji: "巧妙",
        kana: "こうみょう",
        meaning: "ingenious, skillful, clever, deft",
        JLPT: 1
    },
    {
        kanji: "公用",
        kana: "こうよう",
        meaning: "government business, public use, public expense",
        JLPT: 1
    },
    {
        kanji: "小売",
        kana: "こうり",
        meaning: "retail",
        JLPT: 1
    },
    {
        kanji: "効率",
        kana: "こうりつ",
        meaning: "efficiency",
        JLPT: 1
    },
    {
        kanji: "公立",
        kana: "こうりつ",
        meaning: "public (institution)",
        JLPT: 1
    },
    {
        kanji: "小柄",
        kana: "こがら",
        meaning: "short (build)",
        JLPT: 1
    },
    {
        kanji: "小切手",
        kana: "こぎって",
        meaning: "cheque, check",
        JLPT: 1
    },
    {
        kanji: "国産",
        kana: "こくさん",
        meaning: "domestic products",
        JLPT: 1
    },
    {
        kanji: "国定",
        kana: "こくてい",
        meaning: "state-sponsored, national",
        JLPT: 1
    },
    {
        kanji: "国土",
        kana: "こくど",
        meaning: "realm",
        JLPT: 1
    },
    {
        kanji: "告白",
        kana: "こくはく",
        meaning: "confession, acknowledgement",
        JLPT: 1
    },
    {
        kanji: "国防",
        kana: "こくぼう",
        meaning: "national defence",
        JLPT: 1
    },
    {
        kanji: "国有",
        kana: "こくゆう",
        meaning: "national ownership",
        JLPT: 1
    },
    {
        kanji: "国連",
        kana: "こくれん",
        meaning: "U.N., United Nations",
        JLPT: 1
    },
    {
        kanji: "漕ぐ",
        kana: "こぐ",
        meaning: "to row, to scull, to pedal",
        JLPT: 1
    },
    {
        kanji: "焦げ茶",
        kana: "こげちゃ",
        meaning: "black tea",
        JLPT: 1
    },
    {
        kanji: "個々",
        kana: "ここ",
        meaning: "individual, one by one",
        JLPT: 1
    },
    {
        kanji: "箇箇",
        kana: "ここ",
        meaning: "individual, separate",
        JLPT: 1
    },
    {
        kanji: "心地",
        kana: "ここち",
        meaning: "feeling, sensation, mood",
        JLPT: 1
    },
    {
        kanji: "心得",
        kana: "こころえ",
        meaning: "knowledge, information",
        JLPT: 1
    },
    {
        kanji: "心掛け",
        kana: "こころがけ",
        meaning: "readiness, intention, aim",
        JLPT: 1
    },
    {
        kanji: "心掛ける",
        kana: "こころがける",
        meaning: "to bear in mind, to aim to do",
        JLPT: 1
    },
    {
        kanji: "志",
        kana: "こころざし",
        meaning: "will, intention, motive",
        JLPT: 1
    },
    {
        kanji: "志す",
        kana: "こころざす",
        meaning: "to plan, to intend, to aspire to, to set aims (sights on)",
        JLPT: 1
    },
    {
        kanji: "心強い",
        kana: "こころづよい",
        meaning: "heartening, reassuring",
        JLPT: 1
    },
    {
        kanji: "心細い",
        kana: "こころぼそい",
        meaning: "helpless, forlorn, hopeless, unpromising, lonely, discouraging, disheartening",
        JLPT: 1
    },
    {
        kanji: "試み",
        kana: "こころみ",
        meaning: "trial, experiment",
        JLPT: 1
    },
    {
        kanji: "試みる",
        kana: "こころみる",
        meaning: "to try, to test",
        JLPT: 1
    },
    {
        kanji: "快い",
        kana: "こころよい",
        meaning: "pleasant, agreeable",
        JLPT: 1
    },
    {
        kanji: "凝らす",
        kana: "こごらす",
        meaning: "to freeze, to congeal",
        JLPT: 1
    },
    {
        kanji: "凝る",
        kana: "こごる",
        meaning: "to congeal, to freeze",
        JLPT: 1
    },
    {
        kanji: "拵える",
        kana: "こしらえる",
        meaning: "to make, to manufacture",
        JLPT: 1
    },
    {
        kanji: "孤児",
        kana: "こじ",
        meaning: "orphan",
        JLPT: 1
    },
    {
        kanji: "拗れる",
        kana: "こじれる",
        meaning: "to get complicated, to grow worse",
        JLPT: 1
    },
    {
        kanji: "故人",
        kana: "こじん",
        meaning: "the deceased, old friend",
        JLPT: 1
    },
    {
        kanji: "梢",
        kana: "こずえ",
        meaning: "treetop",
        JLPT: 1
    },
    {
        kanji: "個性",
        kana: "こせい",
        meaning: "individuality, personality, idiosyncrasy",
        JLPT: 1
    },
    {
        kanji: "戸籍",
        kana: "こせき",
        meaning: "census, family register",
        JLPT: 1
    },
    {
        kanji: "小銭",
        kana: "こぜに",
        meaning: "coins, small change",
        JLPT: 1
    },
    {
        kanji: "固体",
        kana: "こたい",
        meaning: "solid (body)",
        JLPT: 1
    },
    {
        kanji: "答え",
        kana: "こたえ",
        meaning: "answer, response",
        JLPT: 1
    },
    {
        kanji: "堪える",
        kana: "こたえる",
        meaning: "to bear, to stand, to endure, to put up with, to support, to withstand, to resist, to brave, to be fit for, t",
        JLPT: 1
    },
    {
        kanji: "火燵",
        kana: "こたつ",
        meaning: "table with heater, (orig) charcoal brazier in a floor well",
        JLPT: 1
    },
    {
        kanji: "古代",
        kana: "こだい",
        meaning: "ancient times",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "こだわる",
        meaning: "to fuss over, to be particular about, to be concerned about",
        JLPT: 1
    },
    {
        kanji: "誇張",
        kana: "こちょう",
        meaning: "exaggeration",
        JLPT: 1
    },
    {
        kanji: "滑稽",
        kana: "こっけい",
        meaning: "funny, humorous, comical, laughable, ridiculous, joking",
        JLPT: 1
    },
    {
        kanji: "国交",
        kana: "こっこう",
        meaning: "diplomatic relations",
        JLPT: 1
    },
    {
        kanji: "骨董品",
        kana: "こっとうひん",
        meaning: "curio",
        JLPT: 1
    },
    {
        kanji: "骨",
        kana: "こつ",
        meaning: "knack, skill",
        JLPT: 1
    },
    {
        kanji: "固定",
        kana: "こてい",
        meaning: "fixation",
        JLPT: 1
    },
    {
        kanji: "事柄",
        kana: "ことがら",
        meaning: "matter, thing, affair, circumstance",
        JLPT: 1
    },
    {
        kanji: "悉く",
        kana: "ことごとく",
        meaning: "altogether, entirely",
        JLPT: 1
    },
    {
        kanji: "言伝",
        kana: "ことづて",
        meaning: "declaration, hearsay",
        JLPT: 1
    },
    {
        kanji: "殊に",
        kana: "ことに",
        meaning: "especially, above all",
        JLPT: 1
    },
    {
        kanji: "事によると",
        kana: "ことによると",
        meaning: "depending on the circumstances",
        JLPT: 1
    },
    {
        kanji: "孤独",
        kana: "こどく",
        meaning: "isolation, loneliness, solitude",
        JLPT: 1
    },
    {
        kanji: "粉々",
        kana: "こなごな",
        meaning: "in very small pieces",
        JLPT: 1
    },
    {
        kanji: "此の",
        kana: "この",
        meaning: "this",
        JLPT: 1
    },
    {
        kanji: "この間",
        kana: "このあいだ",
        meaning: "the other day, lately, recently",
        JLPT: 1
    },
    {
        kanji: "この頃",
        kana: "このごろ",
        meaning: "recently",
        JLPT: 1
    },
    {
        kanji: "好ましい",
        kana: "このましい",
        meaning: "nice, likeable, desirable",
        JLPT: 1
    },
    {
        kanji: "個別",
        kana: "こべつ",
        meaning: "particular case",
        JLPT: 1
    },
    {
        kanji: "零す",
        kana: "こぼす",
        meaning: "to spill",
        JLPT: 1
    },
    {
        kanji: "零れる",
        kana: "こぼれる",
        meaning: "to overflow, to spill",
        JLPT: 1
    },
    {
        kanji: "細やか",
        kana: "こまやか",
        meaning: "friendly",
        JLPT: 1
    },
    {
        kanji: "混む",
        kana: "こむ",
        meaning: "to be crowded",
        JLPT: 1
    },
    {
        kanji: "込める",
        kana: "こめる",
        meaning: "to include, to put into",
        JLPT: 1
    },
    {
        kanji: "篭る",
        kana: "こもる",
        meaning: "to seclude oneself, to be confined in, to be implied, to be stuffy",
        JLPT: 1
    },
    {
        kanji: "固有",
        kana: "こゆう",
        meaning: "characteristic, tradition, peculiar, inherent, eigen-",
        JLPT: 1
    },
    {
        kanji: "雇用",
        kana: "こよう",
        meaning: "employment (long term), hire",
        JLPT: 1
    },
    {
        kanji: "暦",
        kana: "こよみ",
        meaning: "calendar, almanac",
        JLPT: 1
    },
    {
        kanji: "堪える",
        kana: "こらえる",
        meaning: "to bear, to stand, to endure, to put up with, to support, to withstand, to resist, to brave, to be fit for, t",
        JLPT: 1
    },
    {
        kanji: "孤立",
        kana: "こりつ",
        meaning: "isolation, helplessness",
        JLPT: 1
    },
    {
        kanji: "懲りる",
        kana: "こりる",
        meaning: "to learn by experience, to be disgusted with",
        JLPT: 1
    },
    {
        kanji: "此れ",
        kana: "これ",
        meaning: "this",
        JLPT: 1
    },
    {
        kanji: "此れ等",
        kana: "これら",
        meaning: "these",
        JLPT: 1
    },
    {
        kanji: "魂",
        kana: "こん",
        meaning: "soul, spirit",
        JLPT: 1
    },
    {
        kanji: "根気",
        kana: "こんき",
        meaning: "patience, perseverance, energy",
        JLPT: 1
    },
    {
        kanji: "根拠",
        kana: "こんきょ",
        meaning: "basis, foundation",
        JLPT: 1
    },
    {
        kanji: "混血",
        kana: "こんけつ",
        meaning: "mixed race, mixed parentage",
        JLPT: 1
    },
    {
        kanji: "昆虫",
        kana: "こんちゅう",
        meaning: "insect, bug",
        JLPT: 1
    },
    {
        kanji: "根底",
        kana: "こんてい",
        meaning: "root, basis, foundation",
        JLPT: 1
    },
    {
        kanji: "混同",
        kana: "こんどう",
        meaning: "confusion, mixing, merger",
        JLPT: 1
    },
    {
        kanji: "今日は",
        kana: "こんにちは",
        meaning: "hello, good day (daytime greeting id)",
        JLPT: 1
    },
    {
        kanji: "今晩は",
        kana: "こんばんは",
        meaning: "good evening",
        JLPT: 1
    },
    {
        kanji: "根本",
        kana: "こんぽん",
        meaning: "origin, source, foundation, root, base, principle",
        JLPT: 1
    },
    {
        kanji: "御",
        kana: "ご",
        meaning: "go-, honourable",
        JLPT: 1
    },
    {
        kanji: "語彙",
        kana: "ごい",
        meaning: "vocabulary, glossary",
        JLPT: 1
    },
    {
        kanji: "濠",
        kana: "ごう",
        meaning: "moat",
        JLPT: 1
    },
    {
        kanji: "業",
        kana: "ごう",
        meaning: "Buddhist karma, actions committed in a former life",
        JLPT: 1
    },
    {
        kanji: "号",
        kana: "ごう",
        meaning: "number, issue",
        JLPT: 1
    },
    {
        kanji: "合意",
        kana: "ごうい",
        meaning: "agreement, consent, mutual understanding",
        JLPT: 1
    },
    {
        kanji: "合議",
        kana: "ごうぎ",
        meaning: "consultation, conference",
        JLPT: 1
    },
    {
        kanji: "強気",
        kana: "ごうぎ",
        meaning: "great, grand",
        JLPT: 1
    },
    {
        kanji: "合成",
        kana: "ごうせい",
        meaning: "synthesis, composition, synthetic, composite, mixed, combined, compound",
        JLPT: 1
    },
    {
        kanji: "護衛",
        kana: "ごえい",
        meaning: "guard, convoy, escort",
        JLPT: 1
    },
    {
        kanji: "語句",
        kana: "ごく",
        meaning: "words, phrases",
        JLPT: 1
    },
    {
        kanji: "極楽",
        kana: "ごくらく",
        meaning: "paradise",
        JLPT: 1
    },
    {
        kanji: "ご苦労様",
        kana: "ごくろうさま",
        meaning: "Thank you very much for your....",
        JLPT: 1
    },
    {
        kanji: "語源",
        kana: "ごげん",
        meaning: "word root, word derivation, etymology",
        JLPT: 1
    },
    {
        kanji: "誤差",
        kana: "ごさ",
        meaning: "error",
        JLPT: 1
    },
    {
        kanji: "ご座います",
        kana: "ございます",
        meaning: "to be (polite), to exist",
        JLPT: 1
    },
    {
        kanji: "ご馳走",
        kana: "ごちそう",
        meaning: "feast, treating (someone)",
        JLPT: 1
    },
    {
        kanji: "ご馳走さま",
        kana: "ごちそうさま",
        meaning: "feast",
        JLPT: 1
    },
    {
        kanji: "毎",
        kana: "ごと",
        meaning: "each respectively",
        JLPT: 1
    },
    {
        kanji: "碁盤",
        kana: "ごばん",
        meaning: "Go board",
        JLPT: 1
    },
    {
        kanji: "ご無沙汰",
        kana: "ごぶさた",
        meaning: "not writing or contacting for a while",
        JLPT: 1
    },
    {
        kanji: "誤魔化す",
        kana: "ごまかす",
        meaning: "to deceive, to falsify, to misrepresent",
        JLPT: 1
    },
    {
        kanji: "御免ください",
        kana: "ごめんください",
        meaning: "May I come in?",
        JLPT: 1
    },
    {
        kanji: "御免なさい",
        kana: "ごめんなさい",
        meaning: "I beg your pardon, excuse me",
        JLPT: 1
    },
    {
        kanji: "御覧なさい",
        kana: "ごらんなさい",
        meaning: "(please) look, (please) try to do",
        JLPT: 1
    },
    {
        kanji: "佐",
        kana: "さ",
        meaning: "help",
        JLPT: 1
    },
    {
        kanji: "再",
        kana: "さい",
        meaning: "re-, again, repeated",
        JLPT: 1
    },
    {
        kanji: "差異",
        kana: "さい",
        meaning: "difference, disparity",
        JLPT: 1
    },
    {
        kanji: "歳",
        kana: "さい",
        meaning: "#NAME?",
        JLPT: 1
    },
    {
        kanji: "再会",
        kana: "さいかい",
        meaning: "another meeting, meeting again, reunion",
        JLPT: 1
    },
    {
        kanji: "災害",
        kana: "さいがい",
        meaning: "calamity, disaster, misfortune",
        JLPT: 1
    },
    {
        kanji: "細菌",
        kana: "さいきん",
        meaning: "bacillus, bacterium, germ",
        JLPT: 1
    },
    {
        kanji: "細工",
        kana: "さいく",
        meaning: "work, craftsmanship, tactics, trick",
        JLPT: 1
    },
    {
        kanji: "採掘",
        kana: "さいくつ",
        meaning: "mining",
        JLPT: 1
    },
    {
        kanji: "採決",
        kana: "さいけつ",
        meaning: "vote, roll call",
        JLPT: 1
    },
    {
        kanji: "再建",
        kana: "さいけん",
        meaning: "rebuilding, reconstruction, rehabilitation",
        JLPT: 1
    },
    {
        kanji: "再現",
        kana: "さいげん",
        meaning: "reappearance, reproduction, return, revival",
        JLPT: 1
    },
    {
        kanji: "採算",
        kana: "さいさん",
        meaning: "profit",
        JLPT: 1
    },
    {
        kanji: "採集",
        kana: "さいしゅう",
        meaning: "collecting, gathering",
        JLPT: 1
    },
    {
        kanji: "再生",
        kana: "さいせい",
        meaning: "playback, regeneration, resuscitation, return to life, rebirth, reincarnation, narrow escape, reclamation, r",
        JLPT: 1
    },
    {
        kanji: "最善",
        kana: "さいぜん",
        meaning: "the very best",
        JLPT: 1
    },
    {
        kanji: "採択",
        kana: "さいたく",
        meaning: "adoption, selection, choice",
        JLPT: 1
    },
    {
        kanji: "再発",
        kana: "さいはつ",
        meaning: "return, relapse, reoccurrence",
        JLPT: 1
    },
    {
        kanji: "栽培",
        kana: "さいばい",
        meaning: "cultivation",
        JLPT: 1
    },
    {
        kanji: "細胞",
        kana: "さいぼう",
        meaning: "cell (biology)",
        JLPT: 1
    },
    {
        kanji: "採用",
        kana: "さいよう",
        meaning: "use, adopt",
        JLPT: 1
    },
    {
        kanji: "遮る",
        kana: "さえぎる",
        meaning: "to interrupt, to intercept, to obstruct",
        JLPT: 1
    },
    {
        kanji: "囀る",
        kana: "さえずる",
        meaning: "to sing, to chirp, to twitter",
        JLPT: 1
    },
    {
        kanji: "冴える",
        kana: "さえる",
        meaning: "to be clear, to be serene, to be cold, to be skillful",
        JLPT: 1
    },
    {
        kanji: "竿",
        kana: "さお",
        meaning: "rod, pole (e.g. for drying laundry)",
        JLPT: 1
    },
    {
        kanji: "栄える",
        kana: "さかえる",
        meaning: "to prosper, to flourish",
        JLPT: 1
    },
    {
        kanji: "杯",
        kana: "さかずき",
        meaning: "wine cups",
        JLPT: 1
    },
    {
        kanji: "逆立ち",
        kana: "さかだち",
        meaning: "handstand, headstand",
        JLPT: 1
    },
    {
        kanji: "逆上る",
        kana: "さかのぼる",
        meaning: "to go back, to go upstream, to make retroactive",
        JLPT: 1
    },
    {
        kanji: "盛る",
        kana: "さかる",
        meaning: "to prosper, to flourish, to copulate (animals)",
        JLPT: 1
    },
    {
        kanji: "差額",
        kana: "さがく",
        meaning: "balance, difference, margin",
        JLPT: 1
    },
    {
        kanji: "下がる",
        kana: "さがる",
        meaning: "to hang down, to abate, to retire, to fall, to step back",
        JLPT: 1
    },
    {
        kanji: "一昨昨日",
        kana: "さきおととい",
        meaning: "two days before yesterday",
        JLPT: 1
    },
    {
        kanji: "先に",
        kana: "さきに",
        meaning: "before, earlier than, ahead, beyond, away, previously, recently",
        JLPT: 1
    },
    {
        kanji: "詐欺",
        kana: "さぎ",
        meaning: "fraud, swindle",
        JLPT: 1
    },
    {
        kanji: "作",
        kana: "さく",
        meaning: "a work, a harvest",
        JLPT: 1
    },
    {
        kanji: "策",
        kana: "さく",
        meaning: "plan, policy",
        JLPT: 1
    },
    {
        kanji: "柵",
        kana: "さく",
        meaning: "fence, paling",
        JLPT: 1
    },
    {
        kanji: "削減",
        kana: "さくげん",
        meaning: "cut, reduction, curtailment",
        JLPT: 1
    },
    {
        kanji: "錯誤",
        kana: "さくご",
        meaning: "mistake",
        JLPT: 1
    },
    {
        kanji: "作戦",
        kana: "さくせん",
        meaning: "military or naval operations, tactics, strategy",
        JLPT: 1
    },
    {
        kanji: "作物",
        kana: "さくぶつ",
        meaning: "literary work",
        JLPT: 1
    },
    {
        kanji: "叫び",
        kana: "さけび",
        meaning: "shout, scream, outcry",
        JLPT: 1
    },
    {
        kanji: "裂ける",
        kana: "さける",
        meaning: "to split, to tear, to burst",
        JLPT: 1
    },
    {
        kanji: "捧げる",
        kana: "ささげる",
        meaning: "to lift up, to give, to offer, to consecrate, to devote, to sacrifice, to dedicate",
        JLPT: 1
    },
    {
        kanji: "差し掛かる",
        kana: "さしかかる",
        meaning: "to come near to, to approach",
        JLPT: 1
    },
    {
        kanji: "指図",
        kana: "さしず",
        meaning: "instruction, mandate",
        JLPT: 1
    },
    {
        kanji: "差し出す",
        kana: "さしだす",
        meaning: "to present, to submit, to tender, to hold out",
        JLPT: 1
    },
    {
        kanji: "差し支える",
        kana: "さしつかえる",
        meaning: "to interfere, to hinder, to become impeded",
        JLPT: 1
    },
    {
        kanji: "差し引く",
        kana: "さしひく",
        meaning: "to deduct",
        JLPT: 1
    },
    {
        kanji: "些事",
        kana: "さじ",
        meaning: "something small or petty, trifle",
        JLPT: 1
    },
    {
        kanji: "授ける",
        kana: "さずける",
        meaning: "to grant, to award, to teach",
        JLPT: 1
    },
    {
        kanji: "嘸",
        kana: "さぞ",
        meaning: "I am sure, certainly, no doubt",
        JLPT: 1
    },
    {
        kanji: "定まる",
        kana: "さだまる",
        meaning: "to become settled, to be fixed",
        JLPT: 1
    },
    {
        kanji: "定める",
        kana: "さだめる",
        meaning: "to decide, to establish, to determine",
        JLPT: 1
    },
    {
        kanji: "錯覚",
        kana: "さっかく",
        meaning: "optical illusion, hallucination",
        JLPT: 1
    },
    {
        kanji: "早急",
        kana: "さっきゅう",
        meaning: "urgent",
        JLPT: 1
    },
    {
        kanji: "察する",
        kana: "さっする",
        meaning: "to guess, to sense, to presume, to judge, to sympathize with",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "さっと",
        meaning: "quickly, suddenly",
        JLPT: 1
    },
    {
        kanji: "冊",
        kana: "さつ",
        meaning: "counter for books",
        JLPT: 1
    },
    {
        kanji: "殺人",
        kana: "さつじん",
        meaning: "murder",
        JLPT: 1
    },
    {
        kanji: "偖",
        kana: "さて",
        meaning: "well, now, then",
        JLPT: 1
    },
    {
        kanji: "悟る",
        kana: "さとる",
        meaning: "to attain enlightenment, to perceive, to understand, to discern",
        JLPT: 1
    },
    {
        kanji: "真実",
        kana: "さな",
        meaning: "truth, reality",
        JLPT: 1
    },
    {
        kanji: "裁く",
        kana: "さばく",
        meaning: "to judge",
        JLPT: 1
    },
    {
        kanji: "錆び",
        kana: "さび",
        meaning: "rust (colour)",
        JLPT: 1
    },
    {
        kanji: "左程",
        kana: "さほど",
        meaning: "(not) very, (not) much",
        JLPT: 1
    },
    {
        kanji: "様",
        kana: "さま",
        meaning: "Mr. or Mrs., manner, kind, appearance",
        JLPT: 1
    },
    {
        kanji: "三味線",
        kana: "さみせん",
        meaning: "three-stringed Japanese guitar, shamisen",
        JLPT: 1
    },
    {
        kanji: "侍",
        kana: "さむらい",
        meaning: "Samurai, warrior",
        JLPT: 1
    },
    {
        kanji: "然も",
        kana: "さも",
        meaning: "with gusto, with satisfaction",
        JLPT: 1
    },
    {
        kanji: "作用",
        kana: "さよう",
        meaning: "action, operation, effect, function",
        JLPT: 1
    },
    {
        kanji: "左様なら",
        kana: "さようなら",
        meaning: "good-bye",
        JLPT: 1
    },
    {
        kanji: "拐う",
        kana: "さらう",
        meaning: "to carry off, to run away with, to kidnap, to abduct",
        JLPT: 1
    },
    {
        kanji: "爽やか",
        kana: "さわやか",
        meaning: "fresh, refreshing, invigorating, clear, fluent, eloquent",
        JLPT: 1
    },
    {
        kanji: "障る",
        kana: "さわる",
        meaning: "to hinder, to interfere with, to affect, to do one harm, to be harmful to",
        JLPT: 1
    },
    {
        kanji: "酸",
        kana: "さん",
        meaning: "acid",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "さん",
        meaning: "Mr or Mrs",
        JLPT: 1
    },
    {
        kanji: "酸化",
        kana: "さんか",
        meaning: "oxidation",
        JLPT: 1
    },
    {
        kanji: "山岳",
        kana: "さんがく",
        meaning: "mountains",
        JLPT: 1
    },
    {
        kanji: "産休",
        kana: "さんきゅう",
        meaning: "maternity leave",
        JLPT: 1
    },
    {
        kanji: "桟橋",
        kana: "さんきょう",
        meaning: "wharf, bridge, jetty, pier",
        JLPT: 1
    },
    {
        kanji: "参議院",
        kana: "さんぎいん",
        meaning: "House of Councillors",
        JLPT: 1
    },
    {
        kanji: "産後",
        kana: "さんご",
        meaning: "postpartum, after childbirth",
        JLPT: 1
    },
    {
        kanji: "産出",
        kana: "さんしゅつ",
        meaning: "yield, produce",
        JLPT: 1
    },
    {
        kanji: "参照",
        kana: "さんしょう",
        meaning: "reference, consultation, consultation",
        JLPT: 1
    },
    {
        kanji: "参上",
        kana: "さんじょう",
        meaning: "calling on, visiting",
        JLPT: 1
    },
    {
        kanji: "賛成",
        kana: "さんせい",
        meaning: "approval, agreement, support, favour",
        JLPT: 1
    },
    {
        kanji: "賛美",
        kana: "さんび",
        meaning: "praise, adoration, glorification",
        JLPT: 1
    },
    {
        kanji: "産婦人科",
        kana: "さんふじんか",
        meaning: "maternity and gynecology department",
        JLPT: 1
    },
    {
        kanji: "産物",
        kana: "さんぶつ",
        meaning: "product, result, fruit",
        JLPT: 1
    },
    {
        kanji: "山腹",
        kana: "さんぷく",
        meaning: "hillside, mountainside",
        JLPT: 1
    },
    {
        kanji: "山脈",
        kana: "さんみゃく",
        meaning: "mountain range",
        JLPT: 1
    },
    {
        kanji: "財",
        kana: "ざい",
        meaning: "fortune, riches",
        JLPT: 1
    },
    {
        kanji: "財源",
        kana: "ざいげん",
        meaning: "source of funds, resources, finances",
        JLPT: 1
    },
    {
        kanji: "在庫",
        kana: "ざいこ",
        meaning: "stockpile, stock",
        JLPT: 1
    },
    {
        kanji: "財政",
        kana: "ざいせい",
        meaning: "economy, financial affairs",
        JLPT: 1
    },
    {
        kanji: "座談会",
        kana: "ざだんかい",
        meaning: "symposium, round-table discussion",
        JLPT: 1
    },
    {
        kanji: "雑貨",
        kana: "ざっか",
        meaning: "miscellaneous goods, general goods, sundries",
        JLPT: 1
    },
    {
        kanji: "雑",
        kana: "ざつ",
        meaning: "rough, crude",
        JLPT: 1
    },
    {
        kanji: "雑談",
        kana: "ざつだん",
        meaning: "chatting, idle talk",
        JLPT: 1
    },
    {
        kanji: "雑木",
        kana: "ざつぼく",
        meaning: "various kinds of small trees, assorted trees",
        JLPT: 1
    },
    {
        kanji: "座標",
        kana: "ざひょう",
        meaning: "coordinate(s)",
        JLPT: 1
    },
    {
        kanji: "残金",
        kana: "ざんきん",
        meaning: "remaining money",
        JLPT: 1
    },
    {
        kanji: "残酷",
        kana: "ざんこく",
        meaning: "cruelty, harshness",
        JLPT: 1
    },
    {
        kanji: "残高",
        kana: "ざんだか",
        meaning: "(bank) balance, remainder",
        JLPT: 1
    },
    {
        kanji: "死",
        kana: "し",
        meaning: "death, decease",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "し",
        meaning: "10^24 (kanji is JIS X 0212 kuten 4906), septillion (American), quadrillion (British)",
        JLPT: 1
    },
    {
        kanji: "次",
        kana: "し",
        meaning: "order, sequence, times, next, below",
        JLPT: 1
    },
    {
        kanji: "仕上がり",
        kana: "しあがり",
        meaning: "finish, end, completion",
        JLPT: 1
    },
    {
        kanji: "仕上げ",
        kana: "しあげ",
        meaning: "end, finishing touches, being finished",
        JLPT: 1
    },
    {
        kanji: "仕上げる",
        kana: "しあげる",
        meaning: "to finish up, to complete",
        JLPT: 1
    },
    {
        kanji: "明々後日",
        kana: "しあさって",
        meaning: "two days after tomorrow",
        JLPT: 1
    },
    {
        kanji: "飼育",
        kana: "しいく",
        meaning: "breeding, raising, rearing",
        JLPT: 1
    },
    {
        kanji: "強いて",
        kana: "しいて",
        meaning: "by force",
        JLPT: 1
    },
    {
        kanji: "強いる",
        kana: "しいる",
        meaning: "to force, to compel, to coerce",
        JLPT: 1
    },
    {
        kanji: "仕入れる",
        kana: "しいれる",
        meaning: "to lay in stock, to replenish stock, to procure",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "しいんと",
        meaning: "silent (as the grave), (deathly) quiet",
        JLPT: 1
    },
    {
        kanji: "歯科",
        kana: "しか",
        meaning: "dentistry",
        JLPT: 1
    },
    {
        kanji: "資格",
        kana: "しかく",
        meaning: "qualifications, requirements, capabilities",
        JLPT: 1
    },
    {
        kanji: "視覚",
        kana: "しかく",
        meaning: "sense of sight, vision",
        JLPT: 1
    },
    {
        kanji: "仕掛け",
        kana: "しかけ",
        meaning: "device, trick, mechanism, gadget, (small) scale, half finished, commencement, set up, challenge",
        JLPT: 1
    },
    {
        kanji: "仕掛ける",
        kana: "しかける",
        meaning: "to commence, to lay (mines), to set (traps), to wage (war), to challenge",
        JLPT: 1
    },
    {
        kanji: "然し",
        kana: "しかし",
        meaning: "however, but",
        JLPT: 1
    },
    {
        kanji: "然しながら",
        kana: "しかしながら",
        meaning: "nevertheless, however",
        JLPT: 1
    },
    {
        kanji: "而も",
        kana: "しかも",
        meaning: "moreover, furthermore, nevertheless, and yet",
        JLPT: 1
    },
    {
        kanji: "市街",
        kana: "しがい",
        meaning: "urban areas, the streets, town, city",
        JLPT: 1
    },
    {
        kanji: "指揮",
        kana: "しき",
        meaning: "command, direction",
        JLPT: 1
    },
    {
        kanji: "色彩",
        kana: "しきさい",
        meaning: "colour, hue, tints",
        JLPT: 1
    },
    {
        kanji: "式場",
        kana: "しきじょう",
        meaning: "ceremonial hall, place of ceremony (e.g. marriage)",
        JLPT: 1
    },
    {
        kanji: "為来り",
        kana: "しきたり",
        meaning: "customs",
        JLPT: 1
    },
    {
        kanji: "頻りに",
        kana: "しきりに",
        meaning: "frequently, repeatedly, incessantly, eagerly",
        JLPT: 1
    },
    {
        kanji: "仕切る",
        kana: "しきる",
        meaning: "to partition, to divide, to mark off, to settle accounts, to toe the mark",
        JLPT: 1
    },
    {
        kanji: "資金",
        kana: "しきん",
        meaning: "funds, capital",
        JLPT: 1
    },
    {
        kanji: "施行",
        kana: "しぎょう",
        meaning: "1. execution, enforcing, carrying out",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "しくじる",
        meaning: "to fail, to fall through, to blunder",
        JLPT: 1
    },
    {
        kanji: "仕組み",
        kana: "しくみ",
        meaning: "devising, plan, plot, contrivance, construction, arrangement",
        JLPT: 1
    },
    {
        kanji: "死刑",
        kana: "しけい",
        meaning: "death penalty, capital punishment",
        JLPT: 1
    },
    {
        kanji: "湿気る",
        kana: "しける",
        meaning: "to be damp, to be moist",
        JLPT: 1
    },
    {
        kanji: "思考",
        kana: "しこう",
        meaning: "thought",
        JLPT: 1
    },
    {
        kanji: "志向",
        kana: "しこう",
        meaning: "intention, aim",
        JLPT: 1
    },
    {
        kanji: "嗜好",
        kana: "しこう",
        meaning: "taste, liking, preference",
        JLPT: 1
    },
    {
        kanji: "視察",
        kana: "しさつ",
        meaning: "inspection, observation",
        JLPT: 1
    },
    {
        kanji: "資産",
        kana: "しさん",
        meaning: "property, fortune, means, assets",
        JLPT: 1
    },
    {
        kanji: "刺繍",
        kana: "ししゅう",
        meaning: "embroidery",
        JLPT: 1
    },
    {
        kanji: "支持",
        kana: "しじ",
        meaning: "support, maintenance",
        JLPT: 1
    },
    {
        kanji: "指示",
        kana: "しじ",
        meaning: "indication, instruction, directions",
        JLPT: 1
    },
    {
        kanji: "雫",
        kana: "しずく",
        meaning: "drop (of water)",
        JLPT: 1
    },
    {
        kanji: "沈める",
        kana: "しずめる",
        meaning: "to sink, to submerge",
        JLPT: 1
    },
    {
        kanji: "施設",
        kana: "しせつ",
        meaning: "institution, establishment, facility, (army) engineer",
        JLPT: 1
    },
    {
        kanji: "子息",
        kana: "しそく",
        meaning: "son",
        JLPT: 1
    },
    {
        kanji: "慕う",
        kana: "したう",
        meaning: "to yearn for, to miss, to adore, to love dearly",
        JLPT: 1
    },
    {
        kanji: "従って",
        kana: "したがって",
        meaning: "therefore, consequently, in accordance with",
        JLPT: 1
    },
    {
        kanji: "下心",
        kana: "したごころ",
        meaning: "secret intention, motive",
        JLPT: 1
    },
    {
        kanji: "親しむ",
        kana: "したしむ",
        meaning: "to be intimate with, to befriend",
        JLPT: 1
    },
    {
        kanji: "下調べ",
        kana: "したしらべ",
        meaning: "preliminary investigation, preparation",
        JLPT: 1
    },
    {
        kanji: "下地",
        kana: "したじ",
        meaning: "groundwork, foundation, inclination, aptitude, elementary knowledge of, grounding in, prearrangement, spade",
        JLPT: 1
    },
    {
        kanji: "認める",
        kana: "したためる",
        meaning: "to write up",
        JLPT: 1
    },
    {
        kanji: "仕立てる",
        kana: "したてる",
        meaning: "to tailor, to make, to prepare, to train, to send (a messenger)",
        JLPT: 1
    },
    {
        kanji: "下取り",
        kana: "したどり",
        meaning: "trade in, part exchange",
        JLPT: 1
    },
    {
        kanji: "下火",
        kana: "したび",
        meaning: "burning low, waning, declining",
        JLPT: 1
    },
    {
        kanji: "失格",
        kana: "しっかく",
        meaning: "disqualification, elimination, incapacity (legal)",
        JLPT: 1
    },
    {
        kanji: "確り",
        kana: "しっかり",
        meaning: "firmly, tightly, reliable, level-headed, steady",
        JLPT: 1
    },
    {
        kanji: "質素",
        kana: "しっそ",
        meaning: "simplicity, modesty, frugality",
        JLPT: 1
    },
    {
        kanji: "失調",
        kana: "しっちょう",
        meaning: "lack of harmony",
        JLPT: 1
    },
    {
        kanji: "嫉妬",
        kana: "しっと",
        meaning: "jealousy",
        JLPT: 1
    },
    {
        kanji: "尻尾",
        kana: "しっぽ",
        meaning: "tail (animal)",
        JLPT: 1
    },
    {
        kanji: "室",
        kana: "しつ",
        meaning: "room",
        JLPT: 1
    },
    {
        kanji: "質疑",
        kana: "しつぎ",
        meaning: "question",
        JLPT: 1
    },
    {
        kanji: "躾",
        kana: "しつけ",
        meaning: "home discipline, training, upbringing, breeding",
        JLPT: 1
    },
    {
        kanji: "仕付ける",
        kana: "しつける",
        meaning: "to be used to a job, to begin to do, to baste, to tack, to plant",
        JLPT: 1
    },
    {
        kanji: "指摘",
        kana: "してき",
        meaning: "pointing out, identification",
        JLPT: 1
    },
    {
        kanji: "視点",
        kana: "してん",
        meaning: "opinion, point of view, visual point",
        JLPT: 1
    },
    {
        kanji: "萎びる",
        kana: "しなびる",
        meaning: "to wilt, to fade",
        JLPT: 1
    },
    {
        kanji: "嫋か",
        kana: "しなやか",
        meaning: "supple, flexible, elastic",
        JLPT: 1
    },
    {
        kanji: "屎尿",
        kana: "しにょう",
        meaning: "excreta, raw sewage, human waste, night soil",
        JLPT: 1
    },
    {
        kanji: "凌ぐ",
        kana: "しのぐ",
        meaning: "to outdo, to surpass, to endure, to keep out (rain), to stave off, to tide over, to pull through, to defy, t",
        JLPT: 1
    },
    {
        kanji: "始発",
        kana: "しはつ",
        meaning: "first train",
        JLPT: 1
    },
    {
        kanji: "芝",
        kana: "しば",
        meaning: "lawn, sod, turf",
        JLPT: 1
    },
    {
        kanji: "屡",
        kana: "しばしば",
        meaning: "often, again and again, frequently",
        JLPT: 1
    },
    {
        kanji: "暫く",
        kana: "しばらく",
        meaning: "little while",
        JLPT: 1
    },
    {
        kanji: "痺れる",
        kana: "しびれる",
        meaning: "to become numb, to go to sleep (i.e. a limb)",
        JLPT: 1
    },
    {
        kanji: "渋い",
        kana: "しぶい",
        meaning: "1. tasteful (clothing), cool, an aura of refined masculinity, 2. astringent, sullen, bitter (taste), 3",
        JLPT: 1
    },
    {
        kanji: "私物",
        kana: "しぶつ",
        meaning: "private property, personal effects",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "しぶとい",
        meaning: "tenacious, stubborn",
        JLPT: 1
    },
    {
        kanji: "司法",
        kana: "しほう",
        meaning: "administration of justice",
        JLPT: 1
    },
    {
        kanji: "脂肪",
        kana: "しぼう",
        meaning: "fat, grease, blubber",
        JLPT: 1
    },
    {
        kanji: "志望",
        kana: "しぼう",
        meaning: "wish, desire, ambition",
        JLPT: 1
    },
    {
        kanji: "萎む",
        kana: "しぼむ",
        meaning: "to wither, to fade (away), to shrivel, to wilt",
        JLPT: 1
    },
    {
        kanji: "仕舞",
        kana: "しまい",
        meaning: "end, termination, informal (Noh play)",
        JLPT: 1
    },
    {
        kanji: "仕舞う",
        kana: "しまう",
        meaning: "to finish, to close, to do something completely, to put away, to put an end to",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "しまった",
        meaning: "Damn it!",
        JLPT: 1
    },
    {
        kanji: "始末",
        kana: "しまつ",
        meaning: "management, dealing, settlement, cleaning up afterwards",
        JLPT: 1
    },
    {
        kanji: "泌み泌み",
        kana: "しみじみ",
        meaning: "keenly, deeply, heartily",
        JLPT: 1
    },
    {
        kanji: "染みる",
        kana: "しみる",
        meaning: "to pierce, to permeate",
        JLPT: 1
    },
    {
        kanji: "使命",
        kana: "しめい",
        meaning: "mission, errand, message",
        JLPT: 1
    },
    {
        kanji: "締め切り",
        kana: "しめきり",
        meaning: "closing, cut-off, end, deadline, Closed, No Entrance",
        JLPT: 1
    },
    {
        kanji: "僕",
        kana: "しもべ",
        meaning: "manservant, servant (of God)",
        JLPT: 1
    },
    {
        kanji: "社交",
        kana: "しゃこう",
        meaning: "social life, social intercourse",
        JLPT: 1
    },
    {
        kanji: "謝絶",
        kana: "しゃぜつ",
        meaning: "refusal",
        JLPT: 1
    },
    {
        kanji: "社宅",
        kana: "しゃたく",
        meaning: "company owned house",
        JLPT: 1
    },
    {
        kanji: "吃逆",
        kana: "しゃっくり",
        meaning: "hiccough, hiccup",
        JLPT: 1
    },
    {
        kanji: "喋る",
        kana: "しゃべる",
        meaning: "to talk, to chat, to chatter",
        JLPT: 1
    },
    {
        kanji: "斜面",
        kana: "しゃめん",
        meaning: "slope, slanting surface, bevel",
        JLPT: 1
    },
    {
        kanji: "洒落",
        kana: "しゃらく",
        meaning: "frank, open-hearted",
        JLPT: 1
    },
    {
        kanji: "洒落る",
        kana: "しゃれる",
        meaning: "to joke, to play on words, to dress stylishly",
        JLPT: 1
    },
    {
        kanji: "視野",
        kana: "しや",
        meaning: "field of vision, outlook",
        JLPT: 1
    },
    {
        kanji: "種",
        kana: "しゅ",
        meaning: "kind, variety, species",
        JLPT: 1
    },
    {
        kanji: "衆",
        kana: "しゅう",
        meaning: "masses, great number, the people",
        JLPT: 1
    },
    {
        kanji: "周",
        kana: "しゅう",
        meaning: "circuit, lap, circumference, vicinity, Chou (dynasty)",
        JLPT: 1
    },
    {
        kanji: "収益",
        kana: "しゅうえき",
        meaning: "earnings, proceeds, returns",
        JLPT: 1
    },
    {
        kanji: "修学",
        kana: "しゅうがく",
        meaning: "learning",
        JLPT: 1
    },
    {
        kanji: "周期",
        kana: "しゅうき",
        meaning: "cycle, period",
        JLPT: 1
    },
    {
        kanji: "衆議院",
        kana: "しゅうぎいん",
        meaning: "Lower House, House of Representatives",
        JLPT: 1
    },
    {
        kanji: "就業",
        kana: "しゅうぎょう",
        meaning: "employment, starting work",
        JLPT: 1
    },
    {
        kanji: "修行",
        kana: "しゅうぎょう",
        meaning: "pursuit of knowledge, studying, learning, training, ascetic practice, discipline",
        JLPT: 1
    },
    {
        kanji: "集計",
        kana: "しゅうけい",
        meaning: "totalization, aggregate",
        JLPT: 1
    },
    {
        kanji: "襲撃",
        kana: "しゅうげき",
        meaning: "attack, charge, raid",
        JLPT: 1
    },
    {
        kanji: "収支",
        kana: "しゅうし",
        meaning: "income and expenditure",
        JLPT: 1
    },
    {
        kanji: "終始",
        kana: "しゅうし",
        meaning: "beginning and end, from beginning to end, doing a thing from beginning to end",
        JLPT: 1
    },
    {
        kanji: "修士",
        kana: "しゅうし",
        meaning: "Masters degree program",
        JLPT: 1
    },
    {
        kanji: "収集",
        kana: "しゅうしゅう",
        meaning: "gathering up, collection, accumulation",
        JLPT: 1
    },
    {
        kanji: "修飾",
        kana: "しゅうしょく",
        meaning: "ornamentation, embellishment, decoration, adornment, polish up (writing), modification (gram)",
        JLPT: 1
    },
    {
        kanji: "終日",
        kana: "しゅうじつ",
        meaning: "all day",
        JLPT: 1
    },
    {
        kanji: "執着",
        kana: "しゅうじゃく",
        meaning: "attachment, adhesion, tenacity",
        JLPT: 1
    },
    {
        kanji: "収容",
        kana: "しゅうよう",
        meaning: "accommodation, reception, seating, housing, custody, admission, entering (in a dictionary)",
        JLPT: 1
    },
    {
        kanji: "修了",
        kana: "しゅうりょう",
        meaning: "completion (of a course)",
        JLPT: 1
    },
    {
        kanji: "守衛",
        kana: "しゅえい",
        meaning: "security guard, doorkeeper",
        JLPT: 1
    },
    {
        kanji: "主演",
        kana: "しゅえん",
        meaning: "starring, playing the leading part",
        JLPT: 1
    },
    {
        kanji: "主観",
        kana: "しゅかん",
        meaning: "subjectivity, subject, ego",
        JLPT: 1
    },
    {
        kanji: "祝賀",
        kana: "しゅくが",
        meaning: "celebration, congratulations",
        JLPT: 1
    },
    {
        kanji: "宿命",
        kana: "しゅくめい",
        meaning: "fate, destiny, predestination",
        JLPT: 1
    },
    {
        kanji: "主権",
        kana: "しゅけん",
        meaning: "sovereignty, supremacy, dominion",
        JLPT: 1
    },
    {
        kanji: "手芸",
        kana: "しゅげい",
        meaning: "handicrafts",
        JLPT: 1
    },
    {
        kanji: "主催",
        kana: "しゅさい",
        meaning: "organization, sponsorship",
        JLPT: 1
    },
    {
        kanji: "取材",
        kana: "しゅざい",
        meaning: "choice of subject, collecting data",
        JLPT: 1
    },
    {
        kanji: "趣旨",
        kana: "しゅし",
        meaning: "object, meaning",
        JLPT: 1
    },
    {
        kanji: "主食",
        kana: "しゅしょく",
        meaning: "staple food",
        JLPT: 1
    },
    {
        kanji: "主人公",
        kana: "しゅじんこう",
        meaning: "protagonist, main character, hero(ine) (of a story), head of household",
        JLPT: 1
    },
    {
        kanji: "主体",
        kana: "しゅたい",
        meaning: "subject, main constituent",
        JLPT: 1
    },
    {
        kanji: "主題",
        kana: "しゅだい",
        meaning: "subject, theme, motif",
        JLPT: 1
    },
    {
        kanji: "出血",
        kana: "しゅっけつ",
        meaning: "bleeding, haemorrhage",
        JLPT: 1
    },
    {
        kanji: "出産",
        kana: "しゅっさん",
        meaning: "(child)birth, delivery, production (of goods)",
        JLPT: 1
    },
    {
        kanji: "出社",
        kana: "しゅっしゃ",
        meaning: "arrival (in a country at work etc.)",
        JLPT: 1
    },
    {
        kanji: "出生",
        kana: "しゅっしょう",
        meaning: "birth",
        JLPT: 1
    },
    {
        kanji: "出世",
        kana: "しゅっせ",
        meaning: "promotion, successful career, eminence",
        JLPT: 1
    },
    {
        kanji: "出費",
        kana: "しゅっぴ",
        meaning: "expenses, disbursements",
        JLPT: 1
    },
    {
        kanji: "出品",
        kana: "しゅっぴん",
        meaning: "exhibit, display",
        JLPT: 1
    },
    {
        kanji: "出演",
        kana: "しゅつえん",
        meaning: "performance, stage appearance",
        JLPT: 1
    },
    {
        kanji: "出題",
        kana: "しゅつだい",
        meaning: "proposing a question",
        JLPT: 1
    },
    {
        kanji: "出動",
        kana: "しゅつどう",
        meaning: "sailing, marching, going out",
        JLPT: 1
    },
    {
        kanji: "主導",
        kana: "しゅどう",
        meaning: "main leadership",
        JLPT: 1
    },
    {
        kanji: "主任",
        kana: "しゅにん",
        meaning: "person in charge, responsible official",
        JLPT: 1
    },
    {
        kanji: "首脳",
        kana: "しゅのう",
        meaning: "head, brains",
        JLPT: 1
    },
    {
        kanji: "守備",
        kana: "しゅび",
        meaning: "defense",
        JLPT: 1
    },
    {
        kanji: "手法",
        kana: "しゅほう",
        meaning: "technique",
        JLPT: 1
    },
    {
        kanji: "私有",
        kana: "しゆう",
        meaning: "private ownership",
        JLPT: 1
    },
    {
        kanji: "諸",
        kana: "しょ",
        meaning: "various, many, several",
        JLPT: 1
    },
    {
        kanji: "背負う",
        kana: "しょう",
        meaning: "to be burdened with, to carry on back or shoulder",
        JLPT: 1
    },
    {
        kanji: "象",
        kana: "しょう",
        meaning: "phenomenon",
        JLPT: 1
    },
    {
        kanji: "症",
        kana: "しょう",
        meaning: "illness",
        JLPT: 1
    },
    {
        kanji: "傷",
        kana: "しょう",
        meaning: "wound, injury, hurt, cut, gash, bruise, scratch, scar, weak point",
        JLPT: 1
    },
    {
        kanji: "商",
        kana: "しょう",
        meaning: "quotient",
        JLPT: 1
    },
    {
        kanji: "消去",
        kana: "しょうきょ",
        meaning: "elimination, erasing, dying out, melting away",
        JLPT: 1
    },
    {
        kanji: "衝撃",
        kana: "しょうげき",
        meaning: "shock, crash, impact, ballistic",
        JLPT: 1
    },
    {
        kanji: "証言",
        kana: "しょうげん",
        meaning: "evidence, testimony",
        JLPT: 1
    },
    {
        kanji: "証拠",
        kana: "しょうこ",
        meaning: "evidence, proof",
        JLPT: 1
    },
    {
        kanji: "消耗",
        kana: "しょうこう",
        meaning: "exhaustion, consumption",
        JLPT: 1
    },
    {
        kanji: "照合",
        kana: "しょうごう",
        meaning: "collation, comparison",
        JLPT: 1
    },
    {
        kanji: "詳細",
        kana: "しょうさい",
        meaning: "detail, particulars",
        JLPT: 1
    },
    {
        kanji: "昇進",
        kana: "しょうしん",
        meaning: "promotion",
        JLPT: 1
    },
    {
        kanji: "少数",
        kana: "しょうすう",
        meaning: "minority, few",
        JLPT: 1
    },
    {
        kanji: "称する",
        kana: "しょうする",
        meaning: "to pretend, to take the name of, to feign, to purport",
        JLPT: 1
    },
    {
        kanji: "消息",
        kana: "しょうそく",
        meaning: "news, letter, circumstances",
        JLPT: 1
    },
    {
        kanji: "承諾",
        kana: "しょうだく",
        meaning: "consent, acquiescence, agreement",
        JLPT: 1
    },
    {
        kanji: "象徴",
        kana: "しょうちょう",
        meaning: "symbol",
        JLPT: 1
    },
    {
        kanji: "小児科",
        kana: "しょうにか",
        meaning: "pediatrics",
        JLPT: 1
    },
    {
        kanji: "証人",
        kana: "しょうにん",
        meaning: "witness",
        JLPT: 1
    },
    {
        kanji: "照明",
        kana: "しょうめい",
        meaning: "illumination",
        JLPT: 1
    },
    {
        kanji: "勝利",
        kana: "しょうり",
        meaning: "victory, triumph, conquest, success, win",
        JLPT: 1
    },
    {
        kanji: "奨励",
        kana: "しょうれい",
        meaning: "encouragement, promotion, message, address",
        JLPT: 1
    },
    {
        kanji: "職員",
        kana: "しょくいん",
        meaning: "staff member, personnel",
        JLPT: 1
    },
    {
        kanji: "植民地",
        kana: "しょくみんち",
        meaning: "colony",
        JLPT: 1
    },
    {
        kanji: "職務",
        kana: "しょくむ",
        meaning: "professional duties",
        JLPT: 1
    },
    {
        kanji: "諸君",
        kana: "しょくん",
        meaning: "Gentlemen!, Ladies!",
        JLPT: 1
    },
    {
        kanji: "所在",
        kana: "しょざい",
        meaning: "whereabouts",
        JLPT: 1
    },
    {
        kanji: "所々",
        kana: "しょしょ",
        meaning: "here and there, some parts (of something)",
        JLPT: 1
    },
    {
        kanji: "所持",
        kana: "しょじ",
        meaning: "possession, owning",
        JLPT: 1
    },
    {
        kanji: "所属",
        kana: "しょぞく",
        meaning: "attached to, belong to",
        JLPT: 1
    },
    {
        kanji: "処置",
        kana: "しょち",
        meaning: "treatment",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "しょっちゅう",
        meaning: "always, constantly",
        JLPT: 1
    },
    {
        kanji: "所定",
        kana: "しょてい",
        meaning: "fixed, prescribed",
        JLPT: 1
    },
    {
        kanji: "所得",
        kana: "しょとく",
        meaning: "income, earnings",
        JLPT: 1
    },
    {
        kanji: "初版",
        kana: "しょはん",
        meaning: "first edition",
        JLPT: 1
    },
    {
        kanji: "処罰",
        kana: "しょばつ",
        meaning: "punishment",
        JLPT: 1
    },
    {
        kanji: "書評",
        kana: "しょひょう",
        meaning: "book review",
        JLPT: 1
    },
    {
        kanji: "処分",
        kana: "しょぶん",
        meaning: "disposal, dealing, punishment",
        JLPT: 1
    },
    {
        kanji: "庶民",
        kana: "しょみん",
        meaning: "masses, common people",
        JLPT: 1
    },
    {
        kanji: "庶務",
        kana: "しょむ",
        meaning: "general affairs",
        JLPT: 1
    },
    {
        kanji: "私用",
        kana: "しよう",
        meaning: "personal use, private business",
        JLPT: 1
    },
    {
        kanji: "仕様",
        kana: "しよう",
        meaning: "way, method, resource, remedy, (technical) specification",
        JLPT: 1
    },
    {
        kanji: "使用人",
        kana: "しようにん",
        meaning: "employee, servant",
        JLPT: 1
    },
    {
        kanji: "調べ",
        kana: "しらべ",
        meaning: "preparation, investigation, inspection",
        JLPT: 1
    },
    {
        kanji: "知り合い",
        kana: "しりあい",
        meaning: "acquaintance",
        JLPT: 1
    },
    {
        kanji: "退く",
        kana: "しりぞく",
        meaning: "to retreat, to recede, to withdraw",
        JLPT: 1
    },
    {
        kanji: "退ける",
        kana: "しりぞける",
        meaning: "to repel, to drive away",
        JLPT: 1
    },
    {
        kanji: "記す",
        kana: "しるす",
        meaning: "to note, to write down",
        JLPT: 1
    },
    {
        kanji: "指令",
        kana: "しれい",
        meaning: "orders, instructions, directive",
        JLPT: 1
    },
    {
        kanji: "代",
        kana: "しろ",
        meaning: "price, materials, substitution",
        JLPT: 1
    },
    {
        kanji: "皺",
        kana: "しわ",
        meaning: "wrinkles, creases",
        JLPT: 1
    },
    {
        kanji: "新",
        kana: "しん",
        meaning: "new",
        JLPT: 1
    },
    {
        kanji: "進化",
        kana: "しんか",
        meaning: "evolution, progress",
        JLPT: 1
    },
    {
        kanji: "殿",
        kana: "しんがり",
        meaning: "rear, rear unit guard",
        JLPT: 1
    },
    {
        kanji: "審議",
        kana: "しんぎ",
        meaning: "deliberation",
        JLPT: 1
    },
    {
        kanji: "進行",
        kana: "しんこう",
        meaning: "advance",
        JLPT: 1
    },
    {
        kanji: "新興",
        kana: "しんこう",
        meaning: "rising, developing, emergent",
        JLPT: 1
    },
    {
        kanji: "振興",
        kana: "しんこう",
        meaning: "promotion, encouragement",
        JLPT: 1
    },
    {
        kanji: "申告",
        kana: "しんこく",
        meaning: "report, statement, filing a return, notification",
        JLPT: 1
    },
    {
        kanji: "新婚",
        kana: "しんこん",
        meaning: "newly-wed",
        JLPT: 1
    },
    {
        kanji: "審査",
        kana: "しんさ",
        meaning: "judging, inspection, examination, investigation",
        JLPT: 1
    },
    {
        kanji: "紳士",
        kana: "しんし",
        meaning: "gentleman",
        JLPT: 1
    },
    {
        kanji: "進出",
        kana: "しんしゅつ",
        meaning: "advance, step forward",
        JLPT: 1
    },
    {
        kanji: "信者",
        kana: "しんじゃ",
        meaning: "believer, adherent, devotee, Christian",
        JLPT: 1
    },
    {
        kanji: "真珠",
        kana: "しんじゅ",
        meaning: "pearl",
        JLPT: 1
    },
    {
        kanji: "心中",
        kana: "しんじゅう",
        meaning: "double suicide, lovers suicide",
        JLPT: 1
    },
    {
        kanji: "心情",
        kana: "しんじょう",
        meaning: "mentality",
        JLPT: 1
    },
    {
        kanji: "新人",
        kana: "しんじん",
        meaning: "new face, newcomer",
        JLPT: 1
    },
    {
        kanji: "神聖",
        kana: "しんせい",
        meaning: "holiness, sacredness, dignity",
        JLPT: 1
    },
    {
        kanji: "親善",
        kana: "しんぜん",
        meaning: "friendship",
        JLPT: 1
    },
    {
        kanji: "真相",
        kana: "しんそう",
        meaning: "truth, real situation",
        JLPT: 1
    },
    {
        kanji: "新築",
        kana: "しんちく",
        meaning: "new building, new construction",
        JLPT: 1
    },
    {
        kanji: "進呈",
        kana: "しんてい",
        meaning: "presentation",
        JLPT: 1
    },
    {
        kanji: "進展",
        kana: "しんてん",
        meaning: "progress, development",
        JLPT: 1
    },
    {
        kanji: "神殿",
        kana: "しんでん",
        meaning: "temple, sacred place",
        JLPT: 1
    },
    {
        kanji: "進度",
        kana: "しんど",
        meaning: "progress",
        JLPT: 1
    },
    {
        kanji: "振動",
        kana: "しんどう",
        meaning: "oscillation, vibration",
        JLPT: 1
    },
    {
        kanji: "新入生",
        kana: "しんにゅうせい",
        meaning: "freshman, first-year student",
        JLPT: 1
    },
    {
        kanji: "信任",
        kana: "しんにん",
        meaning: "trust, confidence, credence",
        JLPT: 1
    },
    {
        kanji: "審判",
        kana: "しんばん",
        meaning: "refereeing, trial, judgement, umpire, referee",
        JLPT: 1
    },
    {
        kanji: "神秘",
        kana: "しんぴ",
        meaning: "mystery",
        JLPT: 1
    },
    {
        kanji: "辛抱",
        kana: "しんぼう",
        meaning: "patience, endurance",
        JLPT: 1
    },
    {
        kanji: "真理",
        kana: "しんり",
        meaning: "truth",
        JLPT: 1
    },
    {
        kanji: "侵略",
        kana: "しんりゃく",
        meaning: "aggression, invasion, raid",
        JLPT: 1
    },
    {
        kanji: "診療",
        kana: "しんりょう",
        meaning: "medical examination and treatment, diagnosis",
        JLPT: 1
    },
    {
        kanji: "進路",
        kana: "しんろ",
        meaning: "course, route",
        JLPT: 1
    },
    {
        kanji: "自覚",
        kana: "じかく",
        meaning: "self-conscious",
        JLPT: 1
    },
    {
        kanji: "地方",
        kana: "じかた",
        meaning: "area, locality, district, region, the coast",
        JLPT: 1
    },
    {
        kanji: "自我",
        kana: "じが",
        meaning: "self, the ego",
        JLPT: 1
    },
    {
        kanji: "磁気",
        kana: "じき",
        meaning: "magnetism",
        JLPT: 1
    },
    {
        kanji: "磁器",
        kana: "じき",
        meaning: "porcelain, china",
        JLPT: 1
    },
    {
        kanji: "事業",
        kana: "じぎょう",
        meaning: "project, enterprise, business, industry, operations",
        JLPT: 1
    },
    {
        kanji: "地形",
        kana: "じぎょう",
        meaning: "terrain, geographical features, topography",
        JLPT: 1
    },
    {
        kanji: "軸",
        kana: "じく",
        meaning: "axis, stem, shaft, axle",
        JLPT: 1
    },
    {
        kanji: "自己",
        kana: "じこ",
        meaning: "self, oneself",
        JLPT: 1
    },
    {
        kanji: "事項",
        kana: "じこう",
        meaning: "matter, item, facts",
        JLPT: 1
    },
    {
        kanji: "時刻表",
        kana: "じこくひょう",
        meaning: "table, diagram, chart, timetable, schedule",
        JLPT: 1
    },
    {
        kanji: "地獄",
        kana: "じごく",
        meaning: "hell",
        JLPT: 1
    },
    {
        kanji: "時差",
        kana: "じさ",
        meaning: "time difference",
        JLPT: 1
    },
    {
        kanji: "自在",
        kana: "じざい",
        meaning: "freely, at will",
        JLPT: 1
    },
    {
        kanji: "自主",
        kana: "じしゅ",
        meaning: "independence, autonomy",
        JLPT: 1
    },
    {
        kanji: "自首",
        kana: "じしゅ",
        meaning: "surrender, give oneself up",
        JLPT: 1
    },
    {
        kanji: "辞職",
        kana: "じしょく",
        meaning: "resignation",
        JLPT: 1
    },
    {
        kanji: "自信",
        kana: "じしん",
        meaning: "self-confidence",
        JLPT: 1
    },
    {
        kanji: "事前",
        kana: "じぜん",
        meaning: "prior, beforehand, in advance",
        JLPT: 1
    },
    {
        kanji: "自尊心",
        kana: "じそんしん",
        meaning: "self-respect, conceit",
        JLPT: 1
    },
    {
        kanji: "持続",
        kana: "じぞく",
        meaning: "continuation",
        JLPT: 1
    },
    {
        kanji: "字体",
        kana: "じたい",
        meaning: "type, font, lettering",
        JLPT: 1
    },
    {
        kanji: "辞退",
        kana: "じたい",
        meaning: "refusal",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "じっくり",
        meaning: "deliberately, carefully",
        JLPT: 1
    },
    {
        kanji: "実質",
        kana: "じっしつ",
        meaning: "substance, essence",
        JLPT: 1
    },
    {
        kanji: "実践",
        kana: "じっせん",
        meaning: "practice, put into practice",
        JLPT: 1
    },
    {
        kanji: "実態",
        kana: "じったい",
        meaning: "truth, fact",
        JLPT: 1
    },
    {
        kanji: "実費",
        kana: "じっぴ",
        meaning: "actual expense, cost price",
        JLPT: 1
    },
    {
        kanji: "十分",
        kana: "じっぷん",
        meaning: "10 minutes",
        JLPT: 1
    },
    {
        kanji: "実",
        kana: "じつ",
        meaning: "truth, reality, sincerity, fidelity, kindness, faith, substance, essence",
        JLPT: 1
    },
    {
        kanji: "実業家",
        kana: "じつぎょうか",
        meaning: "industrialist, businessman",
        JLPT: 1
    },
    {
        kanji: "実情",
        kana: "じつじょう",
        meaning: "real condition, actual circumstances, actual state of affairs",
        JLPT: 1
    },
    {
        kanji: "自転",
        kana: "じてん",
        meaning: "rotation, spin",
        JLPT: 1
    },
    {
        kanji: "自動詞",
        kana: "じどうし",
        meaning: "intransitive verb (no direct obj)",
        JLPT: 1
    },
    {
        kanji: "地主",
        kana: "じぬし",
        meaning: "landlord",
        JLPT: 1
    },
    {
        kanji: "耳鼻科",
        kana: "じびか",
        meaning: "otolaryngology",
        JLPT: 1
    },
    {
        kanji: "地元",
        kana: "じもと",
        meaning: "local",
        JLPT: 1
    },
    {
        kanji: "弱",
        kana: "じゃく",
        meaning: "weakness, the weak, little less then",
        JLPT: 1
    },
    {
        kanji: "若干",
        kana: "じゃっかん",
        meaning: "some, few, number of",
        JLPT: 1
    },
    {
        kanji: "砂利",
        kana: "じゃり",
        meaning: "gravel, ballast, pebbles",
        JLPT: 1
    },
    {
        kanji: "じゃん拳",
        kana: "じゃんけん",
        meaning: "rock-scissors-paper game",
        JLPT: 1
    },
    {
        kanji: "住",
        kana: "じゅう",
        meaning: "dwelling, living",
        JLPT: 1
    },
    {
        kanji: "従業員",
        kana: "じゅうぎょういん",
        meaning: "employee, worker",
        JLPT: 1
    },
    {
        kanji: "従事",
        kana: "じゅうじ",
        meaning: "engaging, pursuing, following",
        JLPT: 1
    },
    {
        kanji: "充実",
        kana: "じゅうじつ",
        meaning: "fullness, completion, perfection, substantiality, enrichment",
        JLPT: 1
    },
    {
        kanji: "十字路",
        kana: "じゅうじろ",
        meaning: "crossroads",
        JLPT: 1
    },
    {
        kanji: "絨毯",
        kana: "じゅうたん",
        meaning: "carpet",
        JLPT: 1
    },
    {
        kanji: "柔軟",
        kana: "じゅうなん",
        meaning: "flexible, lithe",
        JLPT: 1
    },
    {
        kanji: "重複",
        kana: "じゅうふく",
        meaning: "duplication, repetition, overlapping, redundancy, restoration",
        JLPT: 1
    },
    {
        kanji: "重宝",
        kana: "じゅうほう",
        meaning: "priceless treasure, convenience, usefulness",
        JLPT: 1
    },
    {
        kanji: "従来",
        kana: "じゅうらい",
        meaning: "up to now, so far, traditional",
        JLPT: 1
    },
    {
        kanji: "塾",
        kana: "じゅく",
        meaning: "coaching school, lessons",
        JLPT: 1
    },
    {
        kanji: "樹木",
        kana: "じゅもく",
        meaning: "trees and shrubs, arbour",
        JLPT: 1
    },
    {
        kanji: "樹立",
        kana: "じゅりつ",
        meaning: "establish, create",
        JLPT: 1
    },
    {
        kanji: "準急",
        kana: "じゅんきゅう",
        meaning: "local express (train slower than an express)",
        JLPT: 1
    },
    {
        kanji: "準じる",
        kana: "じゅんじる",
        meaning: "to follow, to conform, to apply to",
        JLPT: 1
    },
    {
        kanji: "準ずる",
        kana: "じゅんずる",
        meaning: "to apply correspondingly, to correspond to, to be proportionate to, to conform to",
        JLPT: 1
    },
    {
        kanji: "助",
        kana: "じょ",
        meaning: "help, rescue, assistant",
        JLPT: 1
    },
    {
        kanji: "情",
        kana: "じょう",
        meaning: "feelings, emotion, passion",
        JLPT: 1
    },
    {
        kanji: "畳",
        kana: "じょう",
        meaning: "#NAME?",
        JLPT: 1
    },
    {
        kanji: "尉",
        kana: "じょう",
        meaning: "jailer, old man, rank, company officer",
        JLPT: 1
    },
    {
        kanji: "嬢",
        kana: "じょう",
        meaning: "young woman",
        JLPT: 1
    },
    {
        kanji: "状",
        kana: "じょう",
        meaning: "shape",
        JLPT: 1
    },
    {
        kanji: "上位",
        kana: "じょうい",
        meaning: "superior (rank not class), higher order (e.g. byte), host computer (of connected device)",
        JLPT: 1
    },
    {
        kanji: "上演",
        kana: "じょうえん",
        meaning: "performance (e.g. music)",
        JLPT: 1
    },
    {
        kanji: "城下",
        kana: "じょうか",
        meaning: "land near the castle",
        JLPT: 1
    },
    {
        kanji: "乗客",
        kana: "じょうかく",
        meaning: "passenger",
        JLPT: 1
    },
    {
        kanji: "上空",
        kana: "じょうくう",
        meaning: "sky, the skies, high-altitude sky, upper air",
        JLPT: 1
    },
    {
        kanji: "上司",
        kana: "じょうし",
        meaning: "superior authorities, boss",
        JLPT: 1
    },
    {
        kanji: "情緒",
        kana: "じょうしょ",
        meaning: "emotion, feeling",
        JLPT: 1
    },
    {
        kanji: "上昇",
        kana: "じょうしょう",
        meaning: "rising, ascending, climbing",
        JLPT: 1
    },
    {
        kanji: "情勢",
        kana: "じょうせい",
        meaning: "state of things, condition, situation",
        JLPT: 1
    },
    {
        kanji: "情熱",
        kana: "じょうねつ",
        meaning: "passion, enthusiasm, zeal",
        JLPT: 1
    },
    {
        kanji: "丈夫",
        kana: "じょうふ",
        meaning: "1. hero, gentleman, warrior, manly person, 2. good health, robustness, strong, solid, durable",
        JLPT: 1
    },
    {
        kanji: "譲歩",
        kana: "じょうほ",
        meaning: "concession, conciliation, compromise",
        JLPT: 1
    },
    {
        kanji: "条約",
        kana: "じょうやく",
        meaning: "treaty, pact",
        JLPT: 1
    },
    {
        kanji: "上陸",
        kana: "じょうりく",
        meaning: "landing, disembarkation",
        JLPT: 1
    },
    {
        kanji: "蒸留",
        kana: "じょうりゅう",
        meaning: "distillation",
        JLPT: 1
    },
    {
        kanji: "除外",
        kana: "じょがい",
        meaning: "exception, exclusion",
        JLPT: 1
    },
    {
        kanji: "助言",
        kana: "じょげん",
        meaning: "advice, suggestion",
        JLPT: 1
    },
    {
        kanji: "徐行",
        kana: "じょこう",
        meaning: "going slowly",
        JLPT: 1
    },
    {
        kanji: "女史",
        kana: "じょし",
        meaning: "Ms.",
        JLPT: 1
    },
    {
        kanji: "助詞",
        kana: "じょし",
        meaning: "particle, postposition",
        JLPT: 1
    },
    {
        kanji: "助動詞",
        kana: "じょどうし",
        meaning: "auxiliary verb",
        JLPT: 1
    },
    {
        kanji: "自立",
        kana: "じりつ",
        meaning: "independence, self-reliance",
        JLPT: 1
    },
    {
        kanji: "人",
        kana: "じん",
        meaning: "man, person, people",
        JLPT: 1
    },
    {
        kanji: "人格",
        kana: "じんかく",
        meaning: "personality, character, individuality",
        JLPT: 1
    },
    {
        kanji: "人材",
        kana: "じんざい",
        meaning: "man of talent",
        JLPT: 1
    },
    {
        kanji: "迅速",
        kana: "じんそく",
        meaning: "quick, fast, rapid, swift, prompt",
        JLPT: 1
    },
    {
        kanji: "人体",
        kana: "じんたい",
        meaning: "human body",
        JLPT: 1
    },
    {
        kanji: "人民",
        kana: "じんみん",
        meaning: "people, public",
        JLPT: 1
    },
    {
        kanji: "人目",
        kana: "じんもく",
        meaning: "glimpse, public gaze",
        JLPT: 1
    },
    {
        kanji: "水気",
        kana: "すいき",
        meaning: "1. moisture, dampness, vapor, 2. dropsy, edema",
        JLPT: 1
    },
    {
        kanji: "水源",
        kana: "すいげん",
        meaning: "source of river, fountainhead",
        JLPT: 1
    },
    {
        kanji: "推進",
        kana: "すいしん",
        meaning: "propulsion, driving force",
        JLPT: 1
    },
    {
        kanji: "水洗",
        kana: "すいせん",
        meaning: "flushing",
        JLPT: 1
    },
    {
        kanji: "吹奏",
        kana: "すいそう",
        meaning: "playing wind instruments",
        JLPT: 1
    },
    {
        kanji: "推測",
        kana: "すいそく",
        meaning: "guess, conjecture",
        JLPT: 1
    },
    {
        kanji: "水田",
        kana: "すいでん",
        meaning: "(water-filled) paddy field",
        JLPT: 1
    },
    {
        kanji: "推理",
        kana: "すいり",
        meaning: "reasoning, inference, mystery or detective genre (movie novel etc.)",
        JLPT: 1
    },
    {
        kanji: "数詞",
        kana: "すうし",
        meaning: "numeral",
        JLPT: 1
    },
    {
        kanji: "崇拝",
        kana: "すうはい",
        meaning: "worship, adoration, admiration, cult",
        JLPT: 1
    },
    {
        kanji: "据え付ける",
        kana: "すえつける",
        meaning: "to install, to equip, to mount",
        JLPT: 1
    },
    {
        kanji: "据える",
        kana: "すえる",
        meaning: "to set (table), to lay (foundation), to place (gun), to apply (moxa)",
        JLPT: 1
    },
    {
        kanji: "清々しい",
        kana: "すがすがしい",
        meaning: "fresh, refreshing",
        JLPT: 1
    },
    {
        kanji: "過ぎ",
        kana: "すぎ",
        meaning: "past, after",
        JLPT: 1
    },
    {
        kanji: "救い",
        kana: "すくい",
        meaning: "help, aid, relief",
        JLPT: 1
    },
    {
        kanji: "掬う",
        kana: "すくう",
        meaning: "to scoop, to ladle out",
        JLPT: 1
    },
    {
        kanji: "少なくとも",
        kana: "すくなくとも",
        meaning: "at least",
        JLPT: 1
    },
    {
        kanji: "直ぐ",
        kana: "すぐ",
        meaning: "immediately, soon, easily, right (near), honest, upright",
        JLPT: 1
    },
    {
        kanji: "健やか",
        kana: "すこやか",
        meaning: "vigorous, healthy, sound",
        JLPT: 1
    },
    {
        kanji: "濯ぐ",
        kana: "すすぐ",
        meaning: "to rinse, to wash out",
        JLPT: 1
    },
    {
        kanji: "進み",
        kana: "すすみ",
        meaning: "progress",
        JLPT: 1
    },
    {
        kanji: "勧め",
        kana: "すすめ",
        meaning: "recommendation, advice, encouragement",
        JLPT: 1
    },
    {
        kanji: "裾",
        kana: "すそ",
        meaning: "(trouser) cuff, (skirt) hem, cut edge of a hairdo, foot of mountain",
        JLPT: 1
    },
    {
        kanji: "廃れる",
        kana: "すたれる",
        meaning: "to go out of use, to become obsolete, to die out, to go out of fashion",
        JLPT: 1
    },
    {
        kanji: "酸っぱい",
        kana: "すっぱい",
        meaning: "sour, acid",
        JLPT: 1
    },
    {
        kanji: "素敵",
        kana: "すてき",
        meaning: "lovely, dreamy, beautiful, great, fantastic, superb, cool, capital",
        JLPT: 1
    },
    {
        kanji: "即ち",
        kana: "すなわち",
        meaning: "that is, namely, i.e.",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "すばしこい",
        meaning: "nimble, smart, quick",
        JLPT: 1
    },
    {
        kanji: "素早い",
        kana: "すばやい",
        meaning: "fast, quick, prompt, agile",
        JLPT: 1
    },
    {
        kanji: "済ます",
        kana: "すます",
        meaning: "to finish, to get it over with, to settle, to conclude, to pay back",
        JLPT: 1
    },
    {
        kanji: "澄ます",
        kana: "すます",
        meaning: "to clear, to make clear, to be unruffled, to look unconcerned, to look demure, look prim, put on airs",
        JLPT: 1
    },
    {
        kanji: "済まない",
        kana: "すまない",
        meaning: "sorry (phrase)",
        JLPT: 1
    },
    {
        kanji: "済みません",
        kana: "すみません",
        meaning: "sorry, excuse me",
        JLPT: 1
    },
    {
        kanji: "天皇",
        kana: "すめらぎ",
        meaning: "Emperor of Japan",
        JLPT: 1
    },
    {
        kanji: "刷り",
        kana: "すり",
        meaning: "printing",
        JLPT: 1
    },
    {
        kanji: "剃る",
        kana: "する",
        meaning: "to shave",
        JLPT: 1
    },
    {
        kanji: "擦れ違い",
        kana: "すれちがい",
        meaning: "chance encounter",
        JLPT: 1
    },
    {
        kanji: "すれ違う",
        kana: "すれちがう",
        meaning: "to pass by one another, to disagree, to miss each other",
        JLPT: 1
    },
    {
        kanji: "擦れる",
        kana: "すれる",
        meaning: "to rub, to chafe, to wear, to become sophisticated",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "すんなり",
        meaning: "pass with no objection, slim, slender",
        JLPT: 1
    },
    {
        kanji: "図々しい",
        kana: "ずうずうしい",
        meaning: "impudent, shameless",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ずばり",
        meaning: "decisively, decidedly, once and for all, unreservedly, frankly",
        JLPT: 1
    },
    {
        kanji: "ずぶ濡れ",
        kana: "ずぶぬれ",
        meaning: "soaked, dripping wet",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ずらっと",
        meaning: "in a line, in a row",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ずるずる",
        meaning: "sound or act of dragging, loose, inconclusive but unwanted situation, trailingly",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ずれ",
        meaning: "gap, slippage",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ずれる",
        meaning: "to slide, to slip off",
        JLPT: 1
    },
    {
        kanji: "制",
        kana: "せい",
        meaning: "system, organization, imperial command, laws, regulation, control, government, suppression, restraint, holdin",
        JLPT: 1
    },
    {
        kanji: "製",
        kana: "せい",
        meaning: "-made, make",
        JLPT: 1
    },
    {
        kanji: "生育",
        kana: "せいいく",
        meaning: "growth, development, breeding",
        JLPT: 1
    },
    {
        kanji: "成果",
        kana: "せいか",
        meaning: "results, fruits",
        JLPT: 1
    },
    {
        kanji: "正解",
        kana: "せいかい",
        meaning: "correct, right, correct interpretation (answer solution)",
        JLPT: 1
    },
    {
        kanji: "正規",
        kana: "せいき",
        meaning: "regular, legal, formal, established, legitimate",
        JLPT: 1
    },
    {
        kanji: "正義",
        kana: "せいぎ",
        meaning: "justice, right, righteousness, correct meaning",
        JLPT: 1
    },
    {
        kanji: "生計",
        kana: "せいけい",
        meaning: "livelihood, living",
        JLPT: 1
    },
    {
        kanji: "政権",
        kana: "せいけん",
        meaning: "administration, political power",
        JLPT: 1
    },
    {
        kanji: "精巧",
        kana: "せいこう",
        meaning: "elaborate, delicate, exquisite",
        JLPT: 1
    },
    {
        kanji: "制裁",
        kana: "せいさい",
        meaning: "restraint, sanctions, punishment",
        JLPT: 1
    },
    {
        kanji: "政策",
        kana: "せいさく",
        meaning: "political measures, policy",
        JLPT: 1
    },
    {
        kanji: "清算",
        kana: "せいさん",
        meaning: "liquidation, settlement",
        JLPT: 1
    },
    {
        kanji: "星座",
        kana: "せいざ",
        meaning: "constellation",
        JLPT: 1
    },
    {
        kanji: "生死",
        kana: "せいし",
        meaning: "life and death",
        JLPT: 1
    },
    {
        kanji: "静止",
        kana: "せいし",
        meaning: "stillness, repose, standing still",
        JLPT: 1
    },
    {
        kanji: "青春",
        kana: "せいしゅん",
        meaning: "youth, springtime of life, adolescent",
        JLPT: 1
    },
    {
        kanji: "聖書",
        kana: "せいしょ",
        meaning: "Bible, scriptures",
        JLPT: 1
    },
    {
        kanji: "誠実",
        kana: "せいじつ",
        meaning: "sincere, honest, faithful",
        JLPT: 1
    },
    {
        kanji: "成熟",
        kana: "せいじゅく",
        meaning: "maturity, ripeness",
        JLPT: 1
    },
    {
        kanji: "清純",
        kana: "せいじゅん",
        meaning: "purity, innocence",
        JLPT: 1
    },
    {
        kanji: "正常",
        kana: "せいじょう",
        meaning: "normalcy, normality, normal",
        JLPT: 1
    },
    {
        kanji: "制する",
        kana: "せいする",
        meaning: "to control, to command, to get the better of",
        JLPT: 1
    },
    {
        kanji: "整然",
        kana: "せいぜん",
        meaning: "orderly, regular, well-organized, trim, accurate",
        JLPT: 1
    },
    {
        kanji: "盛装",
        kana: "せいそう",
        meaning: "be dressed up, wear rich clothes",
        JLPT: 1
    },
    {
        kanji: "盛大",
        kana: "せいだい",
        meaning: "grand, prosperous, magnificent",
        JLPT: 1
    },
    {
        kanji: "清濁",
        kana: "せいだく",
        meaning: "good and evil, purity and impurity",
        JLPT: 1
    },
    {
        kanji: "制定",
        kana: "せいてい",
        meaning: "enactment, establishment, creation",
        JLPT: 1
    },
    {
        kanji: "静的",
        kana: "せいてき",
        meaning: "static",
        JLPT: 1
    },
    {
        kanji: "製鉄",
        kana: "せいてつ",
        meaning: "iron manufacture",
        JLPT: 1
    },
    {
        kanji: "晴天",
        kana: "せいてん",
        meaning: "fine weather",
        JLPT: 1
    },
    {
        kanji: "正当",
        kana: "せいとう",
        meaning: "just, justifiable, right, due, proper, equitable, reasonable, legitimate, lawful",
        JLPT: 1
    },
    {
        kanji: "成年",
        kana: "せいねん",
        meaning: "majority, adult age",
        JLPT: 1
    },
    {
        kanji: "制服",
        kana: "せいふく",
        meaning: "uniform",
        JLPT: 1
    },
    {
        kanji: "征服",
        kana: "せいふく",
        meaning: "conquest, subjugation, overcoming",
        JLPT: 1
    },
    {
        kanji: "製法",
        kana: "せいほう",
        meaning: "manufacturing method, recipe, formula",
        JLPT: 1
    },
    {
        kanji: "精密",
        kana: "せいみつ",
        meaning: "precise, exact, detailed, minute, close",
        JLPT: 1
    },
    {
        kanji: "声明",
        kana: "せいめい",
        meaning: "declaration, statement, proclamation",
        JLPT: 1
    },
    {
        kanji: "姓名",
        kana: "せいめい",
        meaning: "full name",
        JLPT: 1
    },
    {
        kanji: "制約",
        kana: "せいやく",
        meaning: "limitation, restriction, condition, constraints",
        JLPT: 1
    },
    {
        kanji: "生理",
        kana: "せいり",
        meaning: "physiology, menses",
        JLPT: 1
    },
    {
        kanji: "勢力",
        kana: "せいりょく",
        meaning: "influence, power, might, strength, potency, force, energy",
        JLPT: 1
    },
    {
        kanji: "整列",
        kana: "せいれつ",
        meaning: "stand in a row, form a line",
        JLPT: 1
    },
    {
        kanji: "急かす",
        kana: "せかす",
        meaning: "to hurry, to urge on",
        JLPT: 1
    },
    {
        kanji: "伜",
        kana: "せがれ",
        meaning: "son, my son",
        JLPT: 1
    },
    {
        kanji: "責務",
        kana: "せきむ",
        meaning: "duty, obligation",
        JLPT: 1
    },
    {
        kanji: "世辞",
        kana: "せじ",
        meaning: "flattery, compliment",
        JLPT: 1
    },
    {
        kanji: "世帯",
        kana: "せたい",
        meaning: "household",
        JLPT: 1
    },
    {
        kanji: "世代",
        kana: "せだい",
        meaning: "generation, the world, the age",
        JLPT: 1
    },
    {
        kanji: "切開",
        kana: "せっかい",
        meaning: "clearing (land), opening up, cutting through",
        JLPT: 1
    },
    {
        kanji: "接触",
        kana: "せっしょく",
        meaning: "touch, contact",
        JLPT: 1
    },
    {
        kanji: "設置",
        kana: "せっち",
        meaning: "establishment, institution",
        JLPT: 1
    },
    {
        kanji: "折衷",
        kana: "せっちゅう",
        meaning: "compromise, cross, blending, eclecticism",
        JLPT: 1
    },
    {
        kanji: "設定",
        kana: "せってい",
        meaning: "establishment, creation",
        JLPT: 1
    },
    {
        kanji: "説得",
        kana: "せっとく",
        meaning: "persuasion",
        JLPT: 1
    },
    {
        kanji: "節",
        kana: "せつ",
        meaning: "node, section, occasion, time",
        JLPT: 1
    },
    {
        kanji: "切実",
        kana: "せつじつ",
        meaning: "compelling, serious, severe, acute, earnest, pressing, urgent",
        JLPT: 1
    },
    {
        kanji: "接続詞",
        kana: "せつぞくし",
        meaning: "conjunction",
        JLPT: 1
    },
    {
        kanji: "切ない",
        kana: "せつない",
        meaning: "painful, trying, oppressive, suffocating",
        JLPT: 1
    },
    {
        kanji: "設立",
        kana: "せつりつ",
        meaning: "establishment, foundation, institution",
        JLPT: 1
    },
    {
        kanji: "攻め",
        kana: "せめ",
        meaning: "attack, offence",
        JLPT: 1
    },
    {
        kanji: "世論",
        kana: "せろん",
        meaning: "public opinion",
        JLPT: 1
    },
    {
        kanji: "仙",
        kana: "せん",
        meaning: "hermit, wizard",
        JLPT: 1
    },
    {
        kanji: "前",
        kana: "せん",
        meaning: "before",
        JLPT: 1
    },
    {
        kanji: "繊維",
        kana: "せんい",
        meaning: "fibre, fiber, textile",
        JLPT: 1
    },
    {
        kanji: "選挙",
        kana: "せんきょ",
        meaning: "election",
        JLPT: 1
    },
    {
        kanji: "宣教",
        kana: "せんきょう",
        meaning: "religious mission",
        JLPT: 1
    },
    {
        kanji: "宣言",
        kana: "せんげん",
        meaning: "declaration, proclamation, announcement",
        JLPT: 1
    },
    {
        kanji: "先行",
        kana: "せんこう",
        meaning: "preceding, going first",
        JLPT: 1
    },
    {
        kanji: "選考",
        kana: "せんこう",
        meaning: "selection, screening",
        JLPT: 1
    },
    {
        kanji: "戦災",
        kana: "せんさい",
        meaning: "war damage",
        JLPT: 1
    },
    {
        kanji: "専修",
        kana: "せんしゅう",
        meaning: "specialization",
        JLPT: 1
    },
    {
        kanji: "戦術",
        kana: "せんじゅつ",
        meaning: "tactics",
        JLPT: 1
    },
    {
        kanji: "潜水",
        kana: "せんすい",
        meaning: "diving",
        JLPT: 1
    },
    {
        kanji: "先先月",
        kana: "せんせんげつ",
        meaning: "month before last",
        JLPT: 1
    },
    {
        kanji: "先先週",
        kana: "せんせんしゅう",
        meaning: "week before last",
        JLPT: 1
    },
    {
        kanji: "先代",
        kana: "せんだい",
        meaning: "family predecessor, previous age, previous generation",
        JLPT: 1
    },
    {
        kanji: "先だって",
        kana: "せんだって",
        meaning: "recently, the other day",
        JLPT: 1
    },
    {
        kanji: "先着",
        kana: "せんちゃく",
        meaning: "first arrival",
        JLPT: 1
    },
    {
        kanji: "先天的",
        kana: "せんてんてき",
        meaning: "a priori, inborn, innate, inherent, congenital, hereditary",
        JLPT: 1
    },
    {
        kanji: "戦闘",
        kana: "せんとう",
        meaning: "battle, fight, combat",
        JLPT: 1
    },
    {
        kanji: "潜入",
        kana: "せんにゅう",
        meaning: "infiltration, sneaking in",
        JLPT: 1
    },
    {
        kanji: "船舶",
        kana: "せんぱく",
        meaning: "ship",
        JLPT: 1
    },
    {
        kanji: "専用",
        kana: "せんよう",
        meaning: "exclusive use, personal use",
        JLPT: 1
    },
    {
        kanji: "占領",
        kana: "せんりょう",
        meaning: "occupation, capture, possession, have a room to oneself",
        JLPT: 1
    },
    {
        kanji: "戦力",
        kana: "せんりょく",
        meaning: "war potential",
        JLPT: 1
    },
    {
        kanji: "税務署",
        kana: "ぜいむしょ",
        meaning: "tax office",
        JLPT: 1
    },
    {
        kanji: "是正",
        kana: "ぜせい",
        meaning: "correction, revision",
        JLPT: 1
    },
    {
        kanji: "絶版",
        kana: "ぜっぱん",
        meaning: "out of print",
        JLPT: 1
    },
    {
        kanji: "絶望",
        kana: "ぜつぼう",
        meaning: "despair, hopelessness",
        JLPT: 1
    },
    {
        kanji: "是非とも",
        kana: "ぜひとも",
        meaning: "by all means (with sense of not taking no for an answer)",
        JLPT: 1
    },
    {
        kanji: "膳",
        kana: "ぜん",
        meaning: "(small) table, tray, meal",
        JLPT: 1
    },
    {
        kanji: "禅",
        kana: "ぜん",
        meaning: "Zen (Buddhism)",
        JLPT: 1
    },
    {
        kanji: "全快",
        kana: "ぜんかい",
        meaning: "complete recovery of health",
        JLPT: 1
    },
    {
        kanji: "全盛",
        kana: "ぜんせい",
        meaning: "height of prosperity",
        JLPT: 1
    },
    {
        kanji: "前提",
        kana: "ぜんてい",
        meaning: "preamble, premise, reason, prerequisite",
        JLPT: 1
    },
    {
        kanji: "前途",
        kana: "ぜんと",
        meaning: "future prospects, outlook, the journey ahead",
        JLPT: 1
    },
    {
        kanji: "全滅",
        kana: "ぜんめつ",
        meaning: "annihilation",
        JLPT: 1
    },
    {
        kanji: "善良",
        kana: "ぜんりょう",
        meaning: "goodness, excellence, virtue",
        JLPT: 1
    },
    {
        kanji: "前例",
        kana: "ぜんれい",
        meaning: "precedent",
        JLPT: 1
    },
    {
        kanji: "僧",
        kana: "そう",
        meaning: "monk, priest",
        JLPT: 1
    },
    {
        kanji: "沿う",
        kana: "そう",
        meaning: "to run along, to follow",
        JLPT: 1
    },
    {
        kanji: "添う",
        kana: "そう",
        meaning: "to accompany, to become married, to comply with",
        JLPT: 1
    },
    {
        kanji: "総",
        kana: "そう",
        meaning: "whole, all, general, gross",
        JLPT: 1
    },
    {
        kanji: "相応",
        kana: "そうおう",
        meaning: "suitability, fitness",
        JLPT: 1
    },
    {
        kanji: "総会",
        kana: "そうかい",
        meaning: "general meeting",
        JLPT: 1
    },
    {
        kanji: "創刊",
        kana: "そうかん",
        meaning: "launching (e.g. newspaper), first issue",
        JLPT: 1
    },
    {
        kanji: "送金",
        kana: "そうきん",
        meaning: "remittance, sending money",
        JLPT: 1
    },
    {
        kanji: "走行",
        kana: "そうこう",
        meaning: "running a wheeled vehicle (e.g. car), traveling",
        JLPT: 1
    },
    {
        kanji: "総合",
        kana: "そうごう",
        meaning: "synthesis, coordination, putting together, integration, composite",
        JLPT: 1
    },
    {
        kanji: "捜査",
        kana: "そうさ",
        meaning: "search (esp. in criminal investigations), investigation",
        JLPT: 1
    },
    {
        kanji: "捜索",
        kana: "そうさく",
        meaning: "search (esp. for someone or something missing), investigation",
        JLPT: 1
    },
    {
        kanji: "然うして",
        kana: "そうして",
        meaning: "and, like that",
        JLPT: 1
    },
    {
        kanji: "装飾",
        kana: "そうしょく",
        meaning: "ornament",
        JLPT: 1
    },
    {
        kanji: "操縦",
        kana: "そうじゅう",
        meaning: "management, handling, control, manipulation",
        JLPT: 1
    },
    {
        kanji: "創造",
        kana: "そうぞう",
        meaning: "creation",
        JLPT: 1
    },
    {
        kanji: "壮大",
        kana: "そうだい",
        meaning: "magnificent, grand, majestic, splendid",
        JLPT: 1
    },
    {
        kanji: "騒動",
        kana: "そうどう",
        meaning: "strife, riot, rebellion",
        JLPT: 1
    },
    {
        kanji: "遭難",
        kana: "そうなん",
        meaning: "disaster, shipwreck, accident",
        JLPT: 1
    },
    {
        kanji: "相場",
        kana: "そうば",
        meaning: "market price, speculation, estimation",
        JLPT: 1
    },
    {
        kanji: "装備",
        kana: "そうび",
        meaning: "equipment",
        JLPT: 1
    },
    {
        kanji: "創立",
        kana: "そうりつ",
        meaning: "establishment, founding, organization",
        JLPT: 1
    },
    {
        kanji: "添える",
        kana: "そえる",
        meaning: "to add to, to attach, to append, to accompany, to garnish, to imitate, to annex",
        JLPT: 1
    },
    {
        kanji: "即座に",
        kana: "そくざに",
        meaning: "immediately, right away",
        JLPT: 1
    },
    {
        kanji: "促進",
        kana: "そくしん",
        meaning: "promotion, acceleration, encouragement, facilitation, spurring on",
        JLPT: 1
    },
    {
        kanji: "即する",
        kana: "そくする",
        meaning: "to conform to, to agree with, to be adapted to, to be based on",
        JLPT: 1
    },
    {
        kanji: "束縛",
        kana: "そくばく",
        meaning: "restraint, shackles, restriction, confinement, binding",
        JLPT: 1
    },
    {
        kanji: "側面",
        kana: "そくめん",
        meaning: "side, flank, sidelight, lateral",
        JLPT: 1
    },
    {
        kanji: "其処",
        kana: "そこ",
        meaning: "that place, there",
        JLPT: 1
    },
    {
        kanji: "其処で",
        kana: "そこで",
        meaning: "so (conj), accordingly, now, then, thereupon",
        JLPT: 1
    },
    {
        kanji: "損なう",
        kana: "そこなう",
        meaning: "to harm, to hurt, to injure, to damage, to fail in doing",
        JLPT: 1
    },
    {
        kanji: "其処ら",
        kana: "そこら",
        meaning: "everywhere, somewhere, approximately, that area, around there",
        JLPT: 1
    },
    {
        kanji: "素材",
        kana: "そざい",
        meaning: "raw materials, subject matter",
        JLPT: 1
    },
    {
        kanji: "阻止",
        kana: "そし",
        meaning: "obstruction, check, hindrance, prevention, interdiction",
        JLPT: 1
    },
    {
        kanji: "然して",
        kana: "そして",
        meaning: "and",
        JLPT: 1
    },
    {
        kanji: "訴訟",
        kana: "そしょう",
        meaning: "litigation, lawsuit",
        JLPT: 1
    },
    {
        kanji: "育ち",
        kana: "そだち",
        meaning: "breeding, growth",
        JLPT: 1
    },
    {
        kanji: "措置",
        kana: "そち",
        meaning: "measure, step",
        JLPT: 1
    },
    {
        kanji: "其方",
        kana: "そちら",
        meaning: "over there, the other",
        JLPT: 1
    },
    {
        kanji: "素っ気ない",
        kana: "そっけない",
        meaning: "cold, short, curt, blunt",
        JLPT: 1
    },
    {
        kanji: "率直",
        kana: "そっちょく",
        meaning: "frankness, candour, openheartedness",
        JLPT: 1
    },
    {
        kanji: "外方",
        kana: "そっぽ",
        meaning: "look (or turn) the other way",
        JLPT: 1
    },
    {
        kanji: "備え付ける",
        kana: "そなえつける",
        meaning: "to provide, to furnish, to equip, to install",
        JLPT: 1
    },
    {
        kanji: "備わる",
        kana: "そなわる",
        meaning: "to be furnished with, to be endowed with, to possess, to be among, to be one of, to be possessed of",
        JLPT: 1
    },
    {
        kanji: "園",
        kana: "その",
        meaning: "garden, park, plantation",
        JLPT: 1
    },
    {
        kanji: "その上",
        kana: "そのうえ",
        meaning: "in addition, furthermore",
        JLPT: 1
    },
    {
        kanji: "その内",
        kana: "そのうち",
        meaning: "eventually, sooner or later, of the previously mentioned",
        JLPT: 1
    },
    {
        kanji: "その為",
        kana: "そのため",
        meaning: "hence, for that reason",
        JLPT: 1
    },
    {
        kanji: "その外",
        kana: "そのほか",
        meaning: "besides, in addition, the rest",
        JLPT: 1
    },
    {
        kanji: "其の儘",
        kana: "そのまま",
        meaning: "without change, as it is (i.e. now)",
        JLPT: 1
    },
    {
        kanji: "聳える",
        kana: "そびえる",
        meaning: "to rise, to tower, to soar",
        JLPT: 1
    },
    {
        kanji: "素朴",
        kana: "そぼく",
        meaning: "simplicity, artlessness, naivete",
        JLPT: 1
    },
    {
        kanji: "染まる",
        kana: "そまる",
        meaning: "to dye",
        JLPT: 1
    },
    {
        kanji: "背く",
        kana: "そむく",
        meaning: "to run counter to, to go against, to disobey, to infringe",
        JLPT: 1
    },
    {
        kanji: "染める",
        kana: "そめる",
        meaning: "to dye, to colour",
        JLPT: 1
    },
    {
        kanji: "逸らす",
        kana: "そらす",
        meaning: "to turn away, to avert",
        JLPT: 1
    },
    {
        kanji: "反り",
        kana: "そり",
        meaning: "warp, curvature, curve, arch",
        JLPT: 1
    },
    {
        kanji: "其れ",
        kana: "それ",
        meaning: "it, that",
        JLPT: 1
    },
    {
        kanji: "其れから",
        kana: "それから",
        meaning: "and then, after that",
        JLPT: 1
    },
    {
        kanji: "各々",
        kana: "それぞれ",
        meaning: "each, every, either, respectively, severally",
        JLPT: 1
    },
    {
        kanji: "其れで",
        kana: "それで",
        meaning: "and (conj), thereupon, because of that",
        JLPT: 1
    },
    {
        kanji: "其れでは",
        kana: "それでは",
        meaning: "in that situation, well then ...",
        JLPT: 1
    },
    {
        kanji: "其れでも",
        kana: "それでも",
        meaning: "but (still), and yet, nevertheless, even so, notwithstanding",
        JLPT: 1
    },
    {
        kanji: "其れ共",
        kana: "それとも",
        meaning: "or, or else",
        JLPT: 1
    },
    {
        kanji: "其れに",
        kana: "それに",
        meaning: "besides, moreover",
        JLPT: 1
    },
    {
        kanji: "其れ程",
        kana: "それほど",
        meaning: "to that degree, extent",
        JLPT: 1
    },
    {
        kanji: "其れ故",
        kana: "それゆえ",
        meaning: "therefore, for that reason, so",
        JLPT: 1
    },
    {
        kanji: "揃い",
        kana: "そろい",
        meaning: "set, suit, uniform",
        JLPT: 1
    },
    {
        kanji: "徐々",
        kana: "そろそろ",
        meaning: "gradually, steadily, quietly, slowly, soon",
        JLPT: 1
    },
    {
        kanji: "損失",
        kana: "そんしつ",
        meaning: "loss",
        JLPT: 1
    },
    {
        kanji: "存続",
        kana: "そんぞく",
        meaning: "duration, continuance",
        JLPT: 1
    },
    {
        kanji: "沿い",
        kana: "ぞい",
        meaning: "along",
        JLPT: 1
    },
    {
        kanji: "像",
        kana: "ぞう",
        meaning: "statue, image, figure, picture, portrait",
        JLPT: 1
    },
    {
        kanji: "増強",
        kana: "ぞうきょう",
        meaning: "augment, reinforce, increase",
        JLPT: 1
    },
    {
        kanji: "蔵相",
        kana: "ぞうしょう",
        meaning: "Minister of Finance",
        JLPT: 1
    },
    {
        kanji: "増進",
        kana: "ぞうしん",
        meaning: "promoting, increase, advance",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぞんざい",
        meaning: "rude, careless, slovenly",
        JLPT: 1
    },
    {
        kanji: "他意",
        kana: "たい",
        meaning: "ill will, malice, another intention, secret purpose, ulterior motive, fickleness, double-mindedness",
        JLPT: 1
    },
    {
        kanji: "対応",
        kana: "たいおう",
        meaning: "interaction, correspondence, coping with, dealing with",
        JLPT: 1
    },
    {
        kanji: "退化",
        kana: "たいか",
        meaning: "degeneration, retrogression",
        JLPT: 1
    },
    {
        kanji: "体格",
        kana: "たいかく",
        meaning: "physique, constitution",
        JLPT: 1
    },
    {
        kanji: "大概",
        kana: "たいがい",
        meaning: "in general, mainly",
        JLPT: 1
    },
    {
        kanji: "退学",
        kana: "たいがく",
        meaning: "dropping out of school",
        JLPT: 1
    },
    {
        kanji: "大金",
        kana: "たいきん",
        meaning: "great cost",
        JLPT: 1
    },
    {
        kanji: "待遇",
        kana: "たいぐう",
        meaning: "treatment, reception",
        JLPT: 1
    },
    {
        kanji: "対決",
        kana: "たいけつ",
        meaning: "confrontation, showdown",
        JLPT: 1
    },
    {
        kanji: "体験",
        kana: "たいけん",
        meaning: "personal experience",
        JLPT: 1
    },
    {
        kanji: "対抗",
        kana: "たいこう",
        meaning: "opposition, antagonism",
        JLPT: 1
    },
    {
        kanji: "対して",
        kana: "たいして",
        meaning: "for, in regard to, per",
        JLPT: 1
    },
    {
        kanji: "大衆",
        kana: "たいしゅう",
        meaning: "general public",
        JLPT: 1
    },
    {
        kanji: "対処",
        kana: "たいしょ",
        meaning: "deal with, cope",
        JLPT: 1
    },
    {
        kanji: "退職",
        kana: "たいしょく",
        meaning: "retirement (from office)",
        JLPT: 1
    },
    {
        kanji: "退治",
        kana: "たいじ",
        meaning: "extermination",
        JLPT: 1
    },
    {
        kanji: "態勢",
        kana: "たいせい",
        meaning: "attitude, conditions, preparations",
        JLPT: 1
    },
    {
        kanji: "対談",
        kana: "たいだん",
        meaning: "talk, dialogue, conversation",
        JLPT: 1
    },
    {
        kanji: "対等",
        kana: "たいとう",
        meaning: "equivalent",
        JLPT: 1
    },
    {
        kanji: "滞納",
        kana: "たいのう",
        meaning: "non-payment, default",
        JLPT: 1
    },
    {
        kanji: "対比",
        kana: "たいひ",
        meaning: "contrast, comparison",
        JLPT: 1
    },
    {
        kanji: "大部",
        kana: "たいぶ",
        meaning: "most (e.g. most part), greater, fairly, a good deal, much",
        JLPT: 1
    },
    {
        kanji: "対辺",
        kana: "たいへん",
        meaning: "(geometrical) opposite side",
        JLPT: 1
    },
    {
        kanji: "待望",
        kana: "たいぼう",
        meaning: "expectant waiting",
        JLPT: 1
    },
    {
        kanji: "怠慢",
        kana: "たいまん",
        meaning: "negligence, procrastination, carelessness",
        JLPT: 1
    },
    {
        kanji: "対面",
        kana: "たいめん",
        meaning: "interview, meeting",
        JLPT: 1
    },
    {
        kanji: "対立",
        kana: "たいりつ",
        meaning: "confrontation, opposition, antagonism",
        JLPT: 1
    },
    {
        kanji: "体力",
        kana: "たいりょく",
        meaning: "physical strength",
        JLPT: 1
    },
    {
        kanji: "対話",
        kana: "たいわ",
        meaning: "interactive, interaction, conversation, dialogue",
        JLPT: 1
    },
    {
        kanji: "耐える",
        kana: "たえる",
        meaning: "to bear, to endure",
        JLPT: 1
    },
    {
        kanji: "絶える",
        kana: "たえる",
        meaning: "to die out, to peter out, to become extinct",
        JLPT: 1
    },
    {
        kanji: "堪える",
        kana: "たえる",
        meaning: "to bear, to stand, to endure, to put up with, to support, to withstand, to resist, to brave, to be fit for, t",
        JLPT: 1
    },
    {
        kanji: "高",
        kana: "たか",
        meaning: "quantity, amount, volume, number, amount of money",
        JLPT: 1
    },
    {
        kanji: "高まる",
        kana: "たかまる",
        meaning: "to rise, to swell, to be promoted",
        JLPT: 1
    },
    {
        kanji: "焚火",
        kana: "たきび",
        meaning: "(open) fire",
        JLPT: 1
    },
    {
        kanji: "沢山",
        kana: "たくさん",
        meaning: "many, a lot, much",
        JLPT: 1
    },
    {
        kanji: "逞しい",
        kana: "たくましい",
        meaning: "burly, strong, sturdy",
        JLPT: 1
    },
    {
        kanji: "巧み",
        kana: "たくみ",
        meaning: "skill, cleverness",
        JLPT: 1
    },
    {
        kanji: "類",
        kana: "たぐい",
        meaning: "a kind",
        JLPT: 1
    },
    {
        kanji: "丈",
        kana: "たけ",
        meaning: "height, stature, length, measure, all (one has)",
        JLPT: 1
    },
    {
        kanji: "足し算",
        kana: "たしざん",
        meaning: "addition",
        JLPT: 1
    },
    {
        kanji: "多数決",
        kana: "たすうけつ",
        meaning: "majority rule",
        JLPT: 1
    },
    {
        kanji: "助け",
        kana: "たすけ",
        meaning: "assistance",
        JLPT: 1
    },
    {
        kanji: "携わる",
        kana: "たずさわる",
        meaning: "to participate, to take part",
        JLPT: 1
    },
    {
        kanji: "漂う",
        kana: "ただよう",
        meaning: "to drift about, to float, to hang in air",
        JLPT: 1
    },
    {
        kanji: "館",
        kana: "たち",
        meaning: "1. mansion, small castle",
        JLPT: 1
    },
    {
        kanji: "立方",
        kana: "たちかた",
        meaning: "dancing (geisha)",
        JLPT: 1
    },
    {
        kanji: "忽ち",
        kana: "たちまち",
        meaning: "at once, in a moment, suddenly, all at once",
        JLPT: 1
    },
    {
        kanji: "立ち寄る",
        kana: "たちよる",
        meaning: "to stop by, to drop in for a short visit",
        JLPT: 1
    },
    {
        kanji: "達者",
        kana: "たっしゃ",
        meaning: "skillful, in good health",
        JLPT: 1
    },
    {
        kanji: "達成",
        kana: "たっせい",
        meaning: "achievement",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "たった",
        meaning: "only, merely, but, no more than",
        JLPT: 1
    },
    {
        kanji: "尊い",
        kana: "たっとい",
        meaning: "precious, valuable, priceless, noble, exalted, sacred",
        JLPT: 1
    },
    {
        kanji: "貴い",
        kana: "たっとい",
        meaning: "precious, valuable, priceless, noble, exalted, sacred",
        JLPT: 1
    },
    {
        kanji: "尊ぶ",
        kana: "たっとぶ",
        meaning: "to value, to prize, to esteem",
        JLPT: 1
    },
    {
        kanji: "絶つ",
        kana: "たつ",
        meaning: "to sever, to cut off, to suppress, to abstain (from)",
        JLPT: 1
    },
    {
        kanji: "盾",
        kana: "たて",
        meaning: "shield, buckler, escutcheon, pretext",
        JLPT: 1
    },
    {
        kanji: "建前",
        kana: "たてまえ",
        meaning: "face, official stance, public position or attitude (as opposed to private thoughts)",
        JLPT: 1
    },
    {
        kanji: "奉る",
        kana: "たてまつる",
        meaning: "to offer, to present, to revere, to do respectfully",
        JLPT: 1
    },
    {
        kanji: "例え",
        kana: "たとえ",
        meaning: "example, even if, if, though, although",
        JLPT: 1
    },
    {
        kanji: "仮令",
        kana: "たとえ",
        meaning: "example, even if, if, though, although",
        JLPT: 1
    },
    {
        kanji: "他動詞",
        kana: "たどうし",
        meaning: "transitive verb (direct obj)",
        JLPT: 1
    },
    {
        kanji: "辿り着く",
        kana: "たどりつく",
        meaning: "to grope along to, to struggle on to, to arrive somewhere after a struggle",
        JLPT: 1
    },
    {
        kanji: "辿る",
        kana: "たどる",
        meaning: "to follow (road), to pursue (course), to follow up",
        JLPT: 1
    },
    {
        kanji: "掌",
        kana: "たなごころ",
        meaning: "the palm",
        JLPT: 1
    },
    {
        kanji: "楽しむ",
        kana: "たのしむ",
        meaning: "to enjoy oneself",
        JLPT: 1
    },
    {
        kanji: "頼み",
        kana: "たのみ",
        meaning: "request, favor, reliance, dependence",
        JLPT: 1
    },
    {
        kanji: "煙草",
        kana: "たばこ",
        meaning: "(pt:) (n) (uk) tobacco (pt: tabaco), cigarettes",
        JLPT: 1
    },
    {
        kanji: "度々",
        kana: "たびたび",
        meaning: "often, repeatedly, frequently",
        JLPT: 1
    },
    {
        kanji: "他方",
        kana: "たほう",
        meaning: "another side, different direction, (on) the other hand",
        JLPT: 1
    },
    {
        kanji: "多忙",
        kana: "たぼう",
        meaning: "busy, pressure of work",
        JLPT: 1
    },
    {
        kanji: "給う",
        kana: "たまう",
        meaning: "to receive, to grant",
        JLPT: 1
    },
    {
        kanji: "偶に",
        kana: "たまに",
        meaning: "occasionally, once in a while",
        JLPT: 1
    },
    {
        kanji: "堪らない",
        kana: "たまらない",
        meaning: "intolerable, unbearable, unendurable",
        JLPT: 1
    },
    {
        kanji: "溜まり",
        kana: "たまり",
        meaning: "collected things, gathering place, arrears",
        JLPT: 1
    },
    {
        kanji: "賜る",
        kana: "たまわる",
        meaning: "to grant, to bestow",
        JLPT: 1
    },
    {
        kanji: "例",
        kana: "ためし",
        meaning: "instance, example, case, precedent, experience, custom, usage, parallel, illustration",
        JLPT: 1
    },
    {
        kanji: "躊躇う",
        kana: "ためらう",
        meaning: "to hesitate",
        JLPT: 1
    },
    {
        kanji: "保つ",
        kana: "たもつ",
        meaning: "to keep, to preserve, to hold, to retain, to maintain, to support, to sustain, to last, to endure, to keep we",
        JLPT: 1
    },
    {
        kanji: "容易い",
        kana: "たやすい",
        meaning: "easy, simple, light",
        JLPT: 1
    },
    {
        kanji: "多様",
        kana: "たよう",
        meaning: "diversity, variety",
        JLPT: 1
    },
    {
        kanji: "弛み",
        kana: "たるみ",
        meaning: "slack, slackening, dullness, letdown",
        JLPT: 1
    },
    {
        kanji: "弛む",
        kana: "たるむ",
        meaning: "to slacken, to loosen, to relax",
        JLPT: 1
    },
    {
        kanji: "誰",
        kana: "たれ",
        meaning: "adjectival suffix for a person",
        JLPT: 1
    },
    {
        kanji: "垂れる",
        kana: "たれる",
        meaning: "to hang, to droop, to drop, to lower, to pull down, to dangle, to sag, to drip, to ooze, to trickle, to leave",
        JLPT: 1
    },
    {
        kanji: "歎",
        kana: "たん",
        meaning: "grief, sigh, lamentation",
        JLPT: 1
    },
    {
        kanji: "反",
        kana: "たん",
        meaning: "roll of cloth (c. 10 yds.), .245 acres, 300 tsubo",
        JLPT: 1
    },
    {
        kanji: "単一",
        kana: "たんいつ",
        meaning: "single, simple, sole, individual, unitory",
        JLPT: 1
    },
    {
        kanji: "短歌",
        kana: "たんか",
        meaning: "tanka, 31-syllable Japanese poem",
        JLPT: 1
    },
    {
        kanji: "担架",
        kana: "たんか",
        meaning: "stretcher, litter",
        JLPT: 1
    },
    {
        kanji: "短気",
        kana: "たんき",
        meaning: "quick temper",
        JLPT: 1
    },
    {
        kanji: "探検",
        kana: "たんけん",
        meaning: "exploration, expedition",
        JLPT: 1
    },
    {
        kanji: "短縮",
        kana: "たんしゅく",
        meaning: "shortening, abbreviation, reduction",
        JLPT: 1
    },
    {
        kanji: "箪笥",
        kana: "たんす",
        meaning: "chest of drawers",
        JLPT: 1
    },
    {
        kanji: "炭素",
        kana: "たんそ",
        meaning: "carbon (C)",
        JLPT: 1
    },
    {
        kanji: "短大",
        kana: "たんだい",
        meaning: "junior college",
        JLPT: 1
    },
    {
        kanji: "単調",
        kana: "たんちょう",
        meaning: "monotony, monotone, dullness",
        JLPT: 1
    },
    {
        kanji: "単独",
        kana: "たんどく",
        meaning: "sole, independence, single, solo (flight)",
        JLPT: 1
    },
    {
        kanji: "短波",
        kana: "たんぱ",
        meaning: "short wave",
        JLPT: 1
    },
    {
        kanji: "蛋白質",
        kana: "たんぱくしつ",
        meaning: "protein",
        JLPT: 1
    },
    {
        kanji: "第",
        kana: "だい",
        meaning: "ordinal",
        JLPT: 1
    },
    {
        kanji: "第一",
        kana: "だいいち",
        meaning: "first, foremost, # 1",
        JLPT: 1
    },
    {
        kanji: "大胆",
        kana: "だいたん",
        meaning: "bold, daring, audacious",
        JLPT: 1
    },
    {
        kanji: "台無し",
        kana: "だいなし",
        meaning: "mess, spoiled, (come to) nothing",
        JLPT: 1
    },
    {
        kanji: "大便",
        kana: "だいべん",
        meaning: "feces, excrement, shit",
        JLPT: 1
    },
    {
        kanji: "代弁",
        kana: "だいべん",
        meaning: "pay by proxy, act for another, speak for another",
        JLPT: 1
    },
    {
        kanji: "台本",
        kana: "だいほん",
        meaning: "libretto, scenario",
        JLPT: 1
    },
    {
        kanji: "代用",
        kana: "だいよう",
        meaning: "substitution",
        JLPT: 1
    },
    {
        kanji: "打開",
        kana: "だかい",
        meaning: "break in the deadlock",
        JLPT: 1
    },
    {
        kanji: "妥協",
        kana: "だきょう",
        meaning: "compromise, giving in",
        JLPT: 1
    },
    {
        kanji: "丈",
        kana: "だけ",
        meaning: "only, just, as",
        JLPT: 1
    },
    {
        kanji: "妥結",
        kana: "だけつ",
        meaning: "agreement",
        JLPT: 1
    },
    {
        kanji: "打撃",
        kana: "だげき",
        meaning: "1. blow, shock, strike, damage, 2. batting (baseball)",
        JLPT: 1
    },
    {
        kanji: "駄作",
        kana: "ださく",
        meaning: "poor work, rubbish",
        JLPT: 1
    },
    {
        kanji: "脱出",
        kana: "だっしゅつ",
        meaning: "escape",
        JLPT: 1
    },
    {
        kanji: "脱する",
        kana: "だっする",
        meaning: "to escape from, to get out",
        JLPT: 1
    },
    {
        kanji: "脱退",
        kana: "だったい",
        meaning: "secession",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "だぶだぶ",
        meaning: "loose, baggy",
        JLPT: 1
    },
    {
        kanji: "騙す",
        kana: "だます",
        meaning: "to trick, to cheat, to deceive",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "だらけ",
        meaning: "implying (negatively) that something is full of e.g. mistakes",
        JLPT: 1
    },
    {
        kanji: "怠い",
        kana: "だるい",
        meaning: "sluggish, feel heavy, languid, dull",
        JLPT: 1
    },
    {
        kanji: "壇",
        kana: "だん",
        meaning: "1. platform, podium, rostrum, 2. (arch) mandala",
        JLPT: 1
    },
    {
        kanji: "団結",
        kana: "だんけつ",
        meaning: "unity, union, combination",
        JLPT: 1
    },
    {
        kanji: "断言",
        kana: "だんげん",
        meaning: "declaration, affirmation",
        JLPT: 1
    },
    {
        kanji: "断然",
        kana: "だんぜん",
        meaning: "firmly, absolutely, definitely",
        JLPT: 1
    },
    {
        kanji: "段々",
        kana: "だんだん",
        meaning: "gradually, by degrees",
        JLPT: 1
    },
    {
        kanji: "旦那",
        kana: "だんな",
        meaning: "master (of house), husband (informal)",
        JLPT: 1
    },
    {
        kanji: "断面",
        kana: "だんめん",
        meaning: "cross section",
        JLPT: 1
    },
    {
        kanji: "弾力",
        kana: "だんりょく",
        meaning: "elasticity, flexibility",
        JLPT: 1
    },
    {
        kanji: "治安",
        kana: "ちあん",
        meaning: "public order",
        JLPT: 1
    },
    {
        kanji: "近付く",
        kana: "ちかづく",
        meaning: "to approach, to get near, to get acquainted with, to get closer",
        JLPT: 1
    },
    {
        kanji: "違える",
        kana: "ちがえる",
        meaning: "to change",
        JLPT: 1
    },
    {
        kanji: "契る",
        kana: "ちぎる",
        meaning: "to pledge, to promise, to swear",
        JLPT: 1
    },
    {
        kanji: "畜産",
        kana: "ちくさん",
        meaning: "animal husbandry",
        JLPT: 1
    },
    {
        kanji: "畜生",
        kana: "ちくしょう",
        meaning: "beast, brute, damn",
        JLPT: 1
    },
    {
        kanji: "蓄積",
        kana: "ちくせき",
        meaning: "accumulation, accumulate, store",
        JLPT: 1
    },
    {
        kanji: "知性",
        kana: "ちせい",
        meaning: "intelligence",
        JLPT: 1
    },
    {
        kanji: "乳",
        kana: "ちち",
        meaning: "milk, breast, loop",
        JLPT: 1
    },
    {
        kanji: "父母",
        kana: "ちちはは",
        meaning: "father and mother, parents",
        JLPT: 1
    },
    {
        kanji: "縮まる",
        kana: "ちぢまる",
        meaning: "to be shortened, to be contracted, to shrink",
        JLPT: 1
    },
    {
        kanji: "窒息",
        kana: "ちっそく",
        meaning: "suffocation",
        JLPT: 1
    },
    {
        kanji: "些とも",
        kana: "ちっとも",
        meaning: "not at all (neg. verb)",
        JLPT: 1
    },
    {
        kanji: "秩序",
        kana: "ちつじょ",
        meaning: "order, regularity, system, method",
        JLPT: 1
    },
    {
        kanji: "知的",
        kana: "ちてき",
        meaning: "intellectual",
        JLPT: 1
    },
    {
        kanji: "著",
        kana: "ちゃく",
        meaning: "counter for suits of clothing, arriving at ..",
        JLPT: 1
    },
    {
        kanji: "着",
        kana: "ちゃく",
        meaning: "counter for suits of clothing, arriving at ..",
        JLPT: 1
    },
    {
        kanji: "着手",
        kana: "ちゃくしゅ",
        meaning: "embarkation, launch",
        JLPT: 1
    },
    {
        kanji: "着色",
        kana: "ちゃくしょく",
        meaning: "colouring, coloring",
        JLPT: 1
    },
    {
        kanji: "着席",
        kana: "ちゃくせき",
        meaning: "sit down, seat",
        JLPT: 1
    },
    {
        kanji: "着目",
        kana: "ちゃくもく",
        meaning: "attention",
        JLPT: 1
    },
    {
        kanji: "着陸",
        kana: "ちゃくりく",
        meaning: "landing, alighting, touch down",
        JLPT: 1
    },
    {
        kanji: "着工",
        kana: "ちゃっこう",
        meaning: "start of (construction) work",
        JLPT: 1
    },
    {
        kanji: "茶の間",
        kana: "ちゃのま",
        meaning: "living room (Japanese style)",
        JLPT: 1
    },
    {
        kanji: "茶の湯",
        kana: "ちゃのゆ",
        meaning: "tea ceremony",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ちやほや",
        meaning: "pamper, make a fuss of, spoil",
        JLPT: 1
    },
    {
        kanji: "昼間",
        kana: "ちゅうかん",
        meaning: "daytime, during the day",
        JLPT: 1
    },
    {
        kanji: "宙返り",
        kana: "ちゅうがえり",
        meaning: "somersault, looping-the-loop",
        JLPT: 1
    },
    {
        kanji: "中継",
        kana: "ちゅうけい",
        meaning: "relay, hook-up",
        JLPT: 1
    },
    {
        kanji: "忠告",
        kana: "ちゅうこく",
        meaning: "advice, warning",
        JLPT: 1
    },
    {
        kanji: "中指",
        kana: "ちゅうし",
        meaning: "middle finger",
        JLPT: 1
    },
    {
        kanji: "中傷",
        kana: "ちゅうしょう",
        meaning: "slander, libel, defamation",
        JLPT: 1
    },
    {
        kanji: "忠実",
        kana: "ちゅうじつ",
        meaning: "fidelity, faithfulness",
        JLPT: 1
    },
    {
        kanji: "中枢",
        kana: "ちゅうすう",
        meaning: "centre, pivot, mainstay, nucleus, backbone, central figure, pillar, key man",
        JLPT: 1
    },
    {
        kanji: "抽選",
        kana: "ちゅうせん",
        meaning: "lottery, raffle, drawing (of lots)",
        JLPT: 1
    },
    {
        kanji: "中断",
        kana: "ちゅうだん",
        meaning: "interruption, suspension, break",
        JLPT: 1
    },
    {
        kanji: "中腹",
        kana: "ちゅうっぱら",
        meaning: "irritated, offended",
        JLPT: 1
    },
    {
        kanji: "中毒",
        kana: "ちゅうどく",
        meaning: "poisoning",
        JLPT: 1
    },
    {
        kanji: "仲人",
        kana: "ちゅうにん",
        meaning: "go-between, matchmaker",
        JLPT: 1
    },
    {
        kanji: "昼飯",
        kana: "ちゅうはん",
        meaning: "lunch, midday meal",
        JLPT: 1
    },
    {
        kanji: "中立",
        kana: "ちゅうりつ",
        meaning: "neutrality",
        JLPT: 1
    },
    {
        kanji: "中和",
        kana: "ちゅうわ",
        meaning: "neutralize, counteract",
        JLPT: 1
    },
    {
        kanji: "腸",
        kana: "ちょう",
        meaning: "guts, bowels, intestines",
        JLPT: 1
    },
    {
        kanji: "蝶",
        kana: "ちょう",
        meaning: "butterfly",
        JLPT: 1
    },
    {
        kanji: "超",
        kana: "ちょう",
        meaning: "super-, ultra-, hyper-",
        JLPT: 1
    },
    {
        kanji: "庁",
        kana: "ちょう",
        meaning: "government office",
        JLPT: 1
    },
    {
        kanji: "調印",
        kana: "ちょういん",
        meaning: "signature, sign, sealing",
        JLPT: 1
    },
    {
        kanji: "聴覚",
        kana: "ちょうかく",
        meaning: "the sense of hearing",
        JLPT: 1
    },
    {
        kanji: "長官",
        kana: "ちょうかん",
        meaning: "chief, (government) secretary",
        JLPT: 1
    },
    {
        kanji: "聴講",
        kana: "ちょうこう",
        meaning: "lecture attendance, auditing",
        JLPT: 1
    },
    {
        kanji: "徴収",
        kana: "ちょうしゅう",
        meaning: "collection, levy",
        JLPT: 1
    },
    {
        kanji: "聴診器",
        kana: "ちょうしんき",
        meaning: "stethoscope",
        JLPT: 1
    },
    {
        kanji: "挑戦",
        kana: "ちょうせん",
        meaning: "challenge, defiance",
        JLPT: 1
    },
    {
        kanji: "長大",
        kana: "ちょうだい",
        meaning: "very long, great length",
        JLPT: 1
    },
    {
        kanji: "調停",
        kana: "ちょうてい",
        meaning: "arbitration, conciliation, mediation",
        JLPT: 1
    },
    {
        kanji: "恰度",
        kana: "ちょうど",
        meaning: "just, right, exactly",
        JLPT: 1
    },
    {
        kanji: "長編",
        kana: "ちょうへん",
        meaning: "long (e.g. novel film)",
        JLPT: 1
    },
    {
        kanji: "丁目",
        kana: "ちょうめ",
        meaning: "district of a town, city block (of irregular size)",
        JLPT: 1
    },
    {
        kanji: "調理",
        kana: "ちょうり",
        meaning: "cooking",
        JLPT: 1
    },
    {
        kanji: "調和",
        kana: "ちょうわ",
        meaning: "harmony",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ちょくちょく",
        meaning: "often, frequently, now and then, occasionally",
        JLPT: 1
    },
    {
        kanji: "直面",
        kana: "ちょくめん",
        meaning: "confrontation",
        JLPT: 1
    },
    {
        kanji: "著書",
        kana: "ちょしょ",
        meaning: "literary work, book",
        JLPT: 1
    },
    {
        kanji: "貯蓄",
        kana: "ちょちく",
        meaning: "savings",
        JLPT: 1
    },
    {
        kanji: "直感",
        kana: "ちょっかん",
        meaning: "intuition",
        JLPT: 1
    },
    {
        kanji: "一寸",
        kana: "ちょっと",
        meaning: "(ateji) (adv int) (uk) just a minute, a short time, a while, just a little, somewhat, easily, readily, rath",
        JLPT: 1
    },
    {
        kanji: "著名",
        kana: "ちょめい",
        meaning: "well-known, noted, celebrated",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ちらっと",
        meaning: "at a glance, by accident",
        JLPT: 1
    },
    {
        kanji: "塵取り",
        kana: "ちりとり",
        meaning: "dustpan",
        JLPT: 1
    },
    {
        kanji: "治療",
        kana: "ちりょう",
        meaning: "medical treatment",
        JLPT: 1
    },
    {
        kanji: "賃金",
        kana: "ちんぎん",
        meaning: "wages",
        JLPT: 1
    },
    {
        kanji: "沈殿",
        kana: "ちんでん",
        meaning: "precipitation, settlement",
        JLPT: 1
    },
    {
        kanji: "沈没",
        kana: "ちんぼつ",
        meaning: "sinking, foundering",
        JLPT: 1
    },
    {
        kanji: "沈黙",
        kana: "ちんもく",
        meaning: "silence, reticence",
        JLPT: 1
    },
    {
        kanji: "陳列",
        kana: "ちんれつ",
        meaning: "exhibition, display, show",
        JLPT: 1
    },
    {
        kanji: "追及",
        kana: "ついきゅう",
        meaning: "gaining on, carrying out, solving (crime)",
        JLPT: 1
    },
    {
        kanji: "追跡",
        kana: "ついせき",
        meaning: "pursuit",
        JLPT: 1
    },
    {
        kanji: "次いで",
        kana: "ついで",
        meaning: "next, secondly, subsequently",
        JLPT: 1
    },
    {
        kanji: "追放",
        kana: "ついほう",
        meaning: "exile, banishment",
        JLPT: 1
    },
    {
        kanji: "費やす",
        kana: "ついやす",
        meaning: "to spend, to devote, to waste",
        JLPT: 1
    },
    {
        kanji: "墜落",
        kana: "ついらく",
        meaning: "falling, crashing",
        JLPT: 1
    },
    {
        kanji: "通",
        kana: "つう",
        meaning: "connoisseur, counter for letters",
        JLPT: 1
    },
    {
        kanji: "痛感",
        kana: "つうかん",
        meaning: "feeling keenly, fully realizing",
        JLPT: 1
    },
    {
        kanji: "通常",
        kana: "つうじょう",
        meaning: "common, general, usually",
        JLPT: 1
    },
    {
        kanji: "痛切",
        kana: "つうせつ",
        meaning: "keen, acute",
        JLPT: 1
    },
    {
        kanji: "杖",
        kana: "つえ",
        meaning: "cane",
        JLPT: 1
    },
    {
        kanji: "遣い",
        kana: "つかい",
        meaning: "mission, simple task, doing",
        JLPT: 1
    },
    {
        kanji: "使い道",
        kana: "つかいみち",
        meaning: "use",
        JLPT: 1
    },
    {
        kanji: "仕える",
        kana: "つかえる",
        meaning: "to serve, to work for",
        JLPT: 1
    },
    {
        kanji: "司る",
        kana: "つかさどる",
        meaning: "to rule, to govern, to administer",
        JLPT: 1
    },
    {
        kanji: "束の間",
        kana: "つかのま",
        meaning: "moment, brief time, brief, transient",
        JLPT: 1
    },
    {
        kanji: "付き",
        kana: "つき",
        meaning: "attached to, impression, sociality, appearance, furnished with, under, to",
        JLPT: 1
    },
    {
        kanji: "付き合う",
        kana: "つきあう",
        meaning: "to associate with, to keep company with, to get on with",
        JLPT: 1
    },
    {
        kanji: "月並み",
        kana: "つきなみ",
        meaning: "every month, common",
        JLPT: 1
    },
    {
        kanji: "尽きる",
        kana: "つきる",
        meaning: "to be used up, to be run out, to be exhausted, to be consumed, to come to an end",
        JLPT: 1
    },
    {
        kanji: "継ぎ目",
        kana: "つぎめ",
        meaning: "a joint, joining point",
        JLPT: 1
    },
    {
        kanji: "吐く",
        kana: "つく",
        meaning: "1. to breathe, 2. to tell (lies), 3. to vomit, to disgorge",
        JLPT: 1
    },
    {
        kanji: "尽くす",
        kana: "つくす",
        meaning: "to exhaust, to run out, to serve (a person), to befriend",
        JLPT: 1
    },
    {
        kanji: "作り",
        kana: "つくり",
        meaning: "make-up, sliced raw fish",
        JLPT: 1
    },
    {
        kanji: "造り",
        kana: "つくり",
        meaning: "make up, structure, physique",
        JLPT: 1
    },
    {
        kanji: "造る",
        kana: "つくる",
        meaning: "to make, to create, to manufacture, to draw up, to write, to compose, to build, to coin, to cultivate, to org",
        JLPT: 1
    },
    {
        kanji: "繕う",
        kana: "つくろう",
        meaning: "to mend, to repair, to fix, to patch up, to darn, to tidy up, to adjust, to trim",
        JLPT: 1
    },
    {
        kanji: "接ぐ",
        kana: "つぐ",
        meaning: "to join, to piece together, to set (bones), to graft (trees)",
        JLPT: 1
    },
    {
        kanji: "継ぐ",
        kana: "つぐ",
        meaning: "to succeed",
        JLPT: 1
    },
    {
        kanji: "付け加える",
        kana: "つけくわえる",
        meaning: "to add one thing to another",
        JLPT: 1
    },
    {
        kanji: "告げる",
        kana: "つげる",
        meaning: "to inform",
        JLPT: 1
    },
    {
        kanji: "辻褄",
        kana: "つじつま",
        meaning: "coherence, consistency",
        JLPT: 1
    },
    {
        kanji: "途中",
        kana: "つちゅう",
        meaning: "on the way, en route",
        JLPT: 1
    },
    {
        kanji: "突っ張る",
        kana: "つっぱる",
        meaning: "to support, to become stiff, to become taut, to thrust (ones opponent), to stick to (ones opinion), to in",
        JLPT: 1
    },
    {
        kanji: "筒",
        kana: "つつ",
        meaning: "pipe, tube",
        JLPT: 1
    },
    {
        kanji: "銃",
        kana: "つつ",
        meaning: "gun",
        JLPT: 1
    },
    {
        kanji: "突く",
        kana: "つつく",
        meaning: "1. to thrust, to strike, to attack, 2. to poke, to nudge, to pick at",
        JLPT: 1
    },
    {
        kanji: "慎む",
        kana: "つつしむ",
        meaning: "to be careful, to be chaste or discreet, to abstain or refrain",
        JLPT: 1
    },
    {
        kanji: "伝言",
        kana: "つてごと",
        meaning: "verbal message, rumor, word",
        JLPT: 1
    },
    {
        kanji: "勤まる",
        kana: "つとまる",
        meaning: "to be fit for, to be equal to, to function properly",
        JLPT: 1
    },
    {
        kanji: "勤め先",
        kana: "つとめさき",
        meaning: "place of work",
        JLPT: 1
    },
    {
        kanji: "努めて",
        kana: "つとめて",
        meaning: "make an effort!, work hard!",
        JLPT: 1
    },
    {
        kanji: "津波",
        kana: "つなみ",
        meaning: "tsunami, tidal wave",
        JLPT: 1
    },
    {
        kanji: "抓る",
        kana: "つねる",
        meaning: "to pinch",
        JLPT: 1
    },
    {
        kanji: "募る",
        kana: "つのる",
        meaning: "to invite, to solicit help participation etc",
        JLPT: 1
    },
    {
        kanji: "唾",
        kana: "つば",
        meaning: "saliva, sputum",
        JLPT: 1
    },
    {
        kanji: "呟く",
        kana: "つぶやく",
        meaning: "to mutter, to murmur",
        JLPT: 1
    },
    {
        kanji: "瞑る",
        kana: "つぶる",
        meaning: "to close the eyes",
        JLPT: 1
    },
    {
        kanji: "壷",
        kana: "つぼ",
        meaning: "tsubo jar, pot, vase",
        JLPT: 1
    },
    {
        kanji: "蕾",
        kana: "つぼみ",
        meaning: "bud, flower bud",
        JLPT: 1
    },
    {
        kanji: "躓く",
        kana: "つまずく",
        meaning: "to stumble, to trip",
        JLPT: 1
    },
    {
        kanji: "摘む",
        kana: "つまむ",
        meaning: "to pinch, to hold, to pick up",
        JLPT: 1
    },
    {
        kanji: "詰らない",
        kana: "つまらない",
        meaning: "insignificant, boring, trifling",
        JLPT: 1
    },
    {
        kanji: "詰まり",
        kana: "つまり",
        meaning: "in short, in brief, in other words, that is to say, in the long run, after all, blockade, stuffing, ultimate",
        JLPT: 1
    },
    {
        kanji: "積もり",
        kana: "つもり",
        meaning: "intention, plan",
        JLPT: 1
    },
    {
        kanji: "露",
        kana: "つゆ",
        meaning: "dew",
        JLPT: 1
    },
    {
        kanji: "強まる",
        kana: "つよまる",
        meaning: "to get strong, to gain strength",
        JLPT: 1
    },
    {
        kanji: "強める",
        kana: "つよめる",
        meaning: "to strengthen, to emphasize",
        JLPT: 1
    },
    {
        kanji: "連なる",
        kana: "つらなる",
        meaning: "to extend, to stretch out, to stand in a row",
        JLPT: 1
    },
    {
        kanji: "貫く",
        kana: "つらぬく",
        meaning: "to go through",
        JLPT: 1
    },
    {
        kanji: "連ねる",
        kana: "つらねる",
        meaning: "to link, to join, to put together",
        JLPT: 1
    },
    {
        kanji: "釣り",
        kana: "つり",
        meaning: "fishing, angling",
        JLPT: 1
    },
    {
        kanji: "吊り革",
        kana: "つりかわ",
        meaning: "strap",
        JLPT: 1
    },
    {
        kanji: "釣鐘",
        kana: "つりがね",
        meaning: "hanging bell",
        JLPT: 1
    },
    {
        kanji: "吊るす",
        kana: "つるす",
        meaning: "to hang",
        JLPT: 1
    },
    {
        kanji: "手当て",
        kana: "てあて",
        meaning: "allowance, compensation, treatment, medical care",
        JLPT: 1
    },
    {
        kanji: "体",
        kana: "てい",
        meaning: "appearance, air, condition, state, form",
        JLPT: 1
    },
    {
        kanji: "提供",
        kana: "ていきょう",
        meaning: "offer, tender, program sponsoring, furnishing",
        JLPT: 1
    },
    {
        kanji: "定義",
        kana: "ていぎ",
        meaning: "definition",
        JLPT: 1
    },
    {
        kanji: "提携",
        kana: "ていけい",
        meaning: "cooperation, tie-up, joint business, link-up",
        JLPT: 1
    },
    {
        kanji: "体裁",
        kana: "ていさい",
        meaning: "decency, style, form, appearance, show, get-up, format",
        JLPT: 1
    },
    {
        kanji: "梯子",
        kana: "ていし",
        meaning: "ladder, stairs",
        JLPT: 1
    },
    {
        kanji: "定食",
        kana: "ていしょく",
        meaning: "set meal, special (of the day)",
        JLPT: 1
    },
    {
        kanji: "提示",
        kana: "ていじ",
        meaning: "presentation, exhibit, suggest, citation",
        JLPT: 1
    },
    {
        kanji: "訂正",
        kana: "ていせい",
        meaning: "correction, revision",
        JLPT: 1
    },
    {
        kanji: "停滞",
        kana: "ていたい",
        meaning: "stagnation, tie-up, congestion, retention, accumulation, falling into arrears",
        JLPT: 1
    },
    {
        kanji: "邸宅",
        kana: "ていたく",
        meaning: "mansion, residence",
        JLPT: 1
    },
    {
        kanji: "定年",
        kana: "ていねん",
        meaning: "retirement age",
        JLPT: 1
    },
    {
        kanji: "堤防",
        kana: "ていぼう",
        meaning: "bank, weir",
        JLPT: 1
    },
    {
        kanji: "手遅れ",
        kana: "ておくれ",
        meaning: "too late, belated treatment",
        JLPT: 1
    },
    {
        kanji: "手数",
        kana: "てかず",
        meaning: "number of moves, trouble",
        JLPT: 1
    },
    {
        kanji: "手掛かり",
        kana: "てがかり",
        meaning: "contact, trail, scent, on hand, hand hold, clue, key",
        JLPT: 1
    },
    {
        kanji: "手掛ける",
        kana: "てがける",
        meaning: "to handle, to manage, to work with, to rear, to look after, to have experience with",
        JLPT: 1
    },
    {
        kanji: "手軽",
        kana: "てがる",
        meaning: "easy, simple, informal, offhand, cheap",
        JLPT: 1
    },
    {
        kanji: "的",
        kana: "てき",
        meaning: "-like, typical",
        JLPT: 1
    },
    {
        kanji: "適応",
        kana: "てきおう",
        meaning: "adaptation, accommodation, conformity",
        JLPT: 1
    },
    {
        kanji: "適宜",
        kana: "てきぎ",
        meaning: "suitability",
        JLPT: 1
    },
    {
        kanji: "適性",
        kana: "てきせい",
        meaning: "aptitude",
        JLPT: 1
    },
    {
        kanji: "手際",
        kana: "てぎわ",
        meaning: "performance, skill, tact",
        JLPT: 1
    },
    {
        kanji: "手順",
        kana: "てじゅん",
        meaning: "process, procedure, protocol",
        JLPT: 1
    },
    {
        kanji: "手錠",
        kana: "てじょう",
        meaning: "handcuffs, manacles",
        JLPT: 1
    },
    {
        kanji: "手近",
        kana: "てぢか",
        meaning: "near, handy, familiar",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "てっきり",
        meaning: "surely, certainly, beyond doubt",
        JLPT: 1
    },
    {
        kanji: "鉄鋼",
        kana: "てっこう",
        meaning: "iron and steel",
        JLPT: 1
    },
    {
        kanji: "徹する",
        kana: "てっする",
        meaning: "to sink in, to penetrate, to devote oneself, to believe in, to go through, to do intently and exclusively",
        JLPT: 1
    },
    {
        kanji: "鉄片",
        kana: "てっぺん",
        meaning: "iron scraps",
        JLPT: 1
    },
    {
        kanji: "手配",
        kana: "てはい",
        meaning: "arrangement, search (by police)",
        JLPT: 1
    },
    {
        kanji: "手筈",
        kana: "てはず",
        meaning: "arrangement, plan, programme",
        JLPT: 1
    },
    {
        kanji: "手引き",
        kana: "てびき",
        meaning: "guidance, guide, introduction",
        JLPT: 1
    },
    {
        kanji: "手本",
        kana: "てほん",
        meaning: "model, pattern",
        JLPT: 1
    },
    {
        kanji: "手回し",
        kana: "てまわし",
        meaning: "preparations, arrangements",
        JLPT: 1
    },
    {
        kanji: "手元",
        kana: "てもと",
        meaning: "on hand, at hand, at home",
        JLPT: 1
    },
    {
        kanji: "照り返す",
        kana: "てりかえす",
        meaning: "to reflect, to throw back light",
        JLPT: 1
    },
    {
        kanji: "手分け",
        kana: "てわけ",
        meaning: "division of labour",
        JLPT: 1
    },
    {
        kanji: "店",
        kana: "てん",
        meaning: "store, shop, establishment",
        JLPT: 1
    },
    {
        kanji: "点火",
        kana: "てんか",
        meaning: "ignition, lighting, set fire to",
        JLPT: 1
    },
    {
        kanji: "転回",
        kana: "てんかい",
        meaning: "revolution, rotation",
        JLPT: 1
    },
    {
        kanji: "転換",
        kana: "てんかん",
        meaning: "convert, divert",
        JLPT: 1
    },
    {
        kanji: "転居",
        kana: "てんきょ",
        meaning: "moving, changing residence",
        JLPT: 1
    },
    {
        kanji: "転勤",
        kana: "てんきん",
        meaning: "transfer, transmission",
        JLPT: 1
    },
    {
        kanji: "点検",
        kana: "てんけん",
        meaning: "inspection, examination, checking",
        JLPT: 1
    },
    {
        kanji: "転校",
        kana: "てんこう",
        meaning: "change schools",
        JLPT: 1
    },
    {
        kanji: "天国",
        kana: "てんごく",
        meaning: "paradise, heaven, Kingdom of Heaven",
        JLPT: 1
    },
    {
        kanji: "天才",
        kana: "てんさい",
        meaning: "genius, prodigy, natural gift",
        JLPT: 1
    },
    {
        kanji: "天災",
        kana: "てんさい",
        meaning: "natural calamity, disaster",
        JLPT: 1
    },
    {
        kanji: "展示",
        kana: "てんじ",
        meaning: "exhibition, display",
        JLPT: 1
    },
    {
        kanji: "天井",
        kana: "てんじょう",
        meaning: "ceiling, ceiling price",
        JLPT: 1
    },
    {
        kanji: "転じる",
        kana: "てんじる",
        meaning: "to turn, to shift, to alter, to distract",
        JLPT: 1
    },
    {
        kanji: "点線",
        kana: "てんせん",
        meaning: "dotted line, perforated line",
        JLPT: 1
    },
    {
        kanji: "天体",
        kana: "てんたい",
        meaning: "heavenly body",
        JLPT: 1
    },
    {
        kanji: "転転",
        kana: "てんてん",
        meaning: "rolling about, moving from place to place, being passed around repeatedly",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "てんで",
        meaning: "(not) at all, altogether, entirely",
        JLPT: 1
    },
    {
        kanji: "転任",
        kana: "てんにん",
        meaning: "change of post",
        JLPT: 1
    },
    {
        kanji: "展望",
        kana: "てんぼう",
        meaning: "view, outlook, prospect",
        JLPT: 1
    },
    {
        kanji: "転落",
        kana: "てんらく",
        meaning: "fall, degradation, slump",
        JLPT: 1
    },
    {
        kanji: "出合う",
        kana: "であう",
        meaning: "to meet by chance, to come across, to happen to encounter, to hold a rendezvous, to have a date",
        JLPT: 1
    },
    {
        kanji: "出入り口",
        kana: "でいりぐち",
        meaning: "exit and entrance",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "でかい",
        meaning: "huge",
        JLPT: 1
    },
    {
        kanji: "出来物",
        kana: "できもの",
        meaning: "able man, tumour, growth, boil, ulcer, abcess, rash, pimple",
        JLPT: 1
    },
    {
        kanji: "出切る",
        kana: "できる",
        meaning: "to be out of, to have no more at hand",
        JLPT: 1
    },
    {
        kanji: "出くわす",
        kana: "でくわす",
        meaning: "to happen to meet, to come across",
        JLPT: 1
    },
    {
        kanji: "出鱈目",
        kana: "でたらめ",
        meaning: "irresponsible utterance, nonsense, nonsensical, random, haphazard, unsystematic",
        JLPT: 1
    },
    {
        kanji: "出直し",
        kana: "でなおし",
        meaning: "adjustment, touch up",
        JLPT: 1
    },
    {
        kanji: "田園",
        kana: "でんえん",
        meaning: "country, rural districts",
        JLPT: 1
    },
    {
        kanji: "電源",
        kana: "でんげん",
        meaning: "source of electricity, power (button on TV etc.)",
        JLPT: 1
    },
    {
        kanji: "伝説",
        kana: "でんせつ",
        meaning: "tradition, legend, folklore",
        JLPT: 1
    },
    {
        kanji: "電線",
        kana: "でんせん",
        meaning: "electric line",
        JLPT: 1
    },
    {
        kanji: "伝達",
        kana: "でんたつ",
        meaning: "transmission (e.g. news), communication, delivery",
        JLPT: 1
    },
    {
        kanji: "伝来",
        kana: "でんらい",
        meaning: "ancestral, hereditary, imported, transmitted, handed down",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "と",
        meaning: "1. if (conjunction), 2. promoted pawn (shogi) (abbr)",
        JLPT: 1
    },
    {
        kanji: "問い合わせる",
        kana: "といあわせる",
        meaning: "to enquire, to seek information",
        JLPT: 1
    },
    {
        kanji: "問屋",
        kana: "といや",
        meaning: "wholesale store",
        JLPT: 1
    },
    {
        kanji: "問う",
        kana: "とう",
        meaning: "to ask, to question, to charge (i.e. with a crime), to accuse, without regard to (neg)",
        JLPT: 1
    },
    {
        kanji: "棟",
        kana: "とう",
        meaning: "place, section, building",
        JLPT: 1
    },
    {
        kanji: "等",
        kana: "とう",
        meaning: "et cetera, etc., and the like",
        JLPT: 1
    },
    {
        kanji: "陶器",
        kana: "とうき",
        meaning: "pottery, ceramics",
        JLPT: 1
    },
    {
        kanji: "等級",
        kana: "とうきゅう",
        meaning: "grade, class",
        JLPT: 1
    },
    {
        kanji: "討議",
        kana: "とうぎ",
        meaning: "debate, discussion",
        JLPT: 1
    },
    {
        kanji: "登校",
        kana: "とうこう",
        meaning: "attendance (at school)",
        JLPT: 1
    },
    {
        kanji: "統合",
        kana: "とうごう",
        meaning: "integration, unification, synthesis",
        JLPT: 1
    },
    {
        kanji: "倒産",
        kana: "とうさん",
        meaning: "(corporate) bankruptcy, insolvency",
        JLPT: 1
    },
    {
        kanji: "投資",
        kana: "とうし",
        meaning: "investment",
        JLPT: 1
    },
    {
        kanji: "統治",
        kana: "とうじ",
        meaning: "rule, reign, government, governing",
        JLPT: 1
    },
    {
        kanji: "統制",
        kana: "とうせい",
        meaning: "regulation, control",
        JLPT: 1
    },
    {
        kanji: "当選",
        kana: "とうせん",
        meaning: "being elected, winning the prize",
        JLPT: 1
    },
    {
        kanji: "逃走",
        kana: "とうそう",
        meaning: "flight, desertion, escape",
        JLPT: 1
    },
    {
        kanji: "統率",
        kana: "とうそつ",
        meaning: "command, lead, generalship, leadership",
        JLPT: 1
    },
    {
        kanji: "到達",
        kana: "とうたつ",
        meaning: "reaching, attaining, arrival",
        JLPT: 1
    },
    {
        kanji: "到底",
        kana: "とうてい",
        meaning: "(cannot) possibly",
        JLPT: 1
    },
    {
        kanji: "丁々",
        kana: "とうとう",
        meaning: "clashing of swords, felling of trees, ringing of an ax",
        JLPT: 1
    },
    {
        kanji: "投入",
        kana: "とうにゅう",
        meaning: "throw, investment, making (an electrical circuit)",
        JLPT: 1
    },
    {
        kanji: "当人",
        kana: "とうにん",
        meaning: "the one concerned, the said person",
        JLPT: 1
    },
    {
        kanji: "逃亡",
        kana: "とうぼう",
        meaning: "escape",
        JLPT: 1
    },
    {
        kanji: "冬眠",
        kana: "とうみん",
        meaning: "hibernation, winter sleep",
        JLPT: 1
    },
    {
        kanji: "登録",
        kana: "とうろく",
        meaning: "registration, register, entry, record",
        JLPT: 1
    },
    {
        kanji: "討論",
        kana: "とうろん",
        meaning: "debate, discussion",
        JLPT: 1
    },
    {
        kanji: "遠ざかる",
        kana: "とおざかる",
        meaning: "to go far off",
        JLPT: 1
    },
    {
        kanji: "遠回り",
        kana: "とおまわり",
        meaning: "detour, roundabout way",
        JLPT: 1
    },
    {
        kanji: "通りかかる",
        kana: "とおりかかる",
        meaning: "to happen to pass by",
        JLPT: 1
    },
    {
        kanji: "兎角",
        kana: "とかく",
        meaning: "anyhow, anyway, somehow or other, generally speaking, in any case, this and that, many, be apt to",
        JLPT: 1
    },
    {
        kanji: "咎める",
        kana: "とがめる",
        meaning: "to blame, to find fault, to take someone to task, to aggravate (an injury)",
        JLPT: 1
    },
    {
        kanji: "時折",
        kana: "ときおり",
        meaning: "sometimes",
        JLPT: 1
    },
    {
        kanji: "跡切れる",
        kana: "とぎれる",
        meaning: "to pause, to be interrupted",
        JLPT: 1
    },
    {
        kanji: "説く",
        kana: "とく",
        meaning: "to explain, to advocate, to preach, to persuade",
        JLPT: 1
    },
    {
        kanji: "特技",
        kana: "とくぎ",
        meaning: "special skill",
        JLPT: 1
    },
    {
        kanji: "特産",
        kana: "とくさん",
        meaning: "specialty, special product",
        JLPT: 1
    },
    {
        kanji: "特集",
        kana: "とくしゅう",
        meaning: "feature (e.g. newspaper), special edition, report",
        JLPT: 1
    },
    {
        kanji: "得点",
        kana: "とくてん",
        meaning: "score, points made, marks obtained, runs",
        JLPT: 1
    },
    {
        kanji: "特派",
        kana: "とくは",
        meaning: "send specially, special envoy",
        JLPT: 1
    },
    {
        kanji: "特有",
        kana: "とくゆう",
        meaning: "characteristic (of), peculiar (to)",
        JLPT: 1
    },
    {
        kanji: "研ぐ",
        kana: "とぐ",
        meaning: "to sharpen, to grind, to scour, to hone, to polish, to wash (rice)",
        JLPT: 1
    },
    {
        kanji: "刺",
        kana: "とげ",
        meaning: "thorn, splinter, spine, biting words",
        JLPT: 1
    },
    {
        kanji: "遂げる",
        kana: "とげる",
        meaning: "to accomplish, to achieve, to carry out",
        JLPT: 1
    },
    {
        kanji: "床",
        kana: "とこ",
        meaning: "bed, sickbed, alcove, padding",
        JLPT: 1
    },
    {
        kanji: "所が",
        kana: "ところが",
        meaning: "however, while, even if",
        JLPT: 1
    },
    {
        kanji: "所で",
        kana: "ところで",
        meaning: "by the way, even if, no matter what",
        JLPT: 1
    },
    {
        kanji: "年頃",
        kana: "としごろ",
        meaning: "age, marriageable age, age of puberty, adolescence, for some years",
        JLPT: 1
    },
    {
        kanji: "年寄り",
        kana: "としより",
        meaning: "old people, the aged",
        JLPT: 1
    },
    {
        kanji: "戸締り",
        kana: "とじまり",
        meaning: "closing up, fastening the doors",
        JLPT: 1
    },
    {
        kanji: "途上",
        kana: "とじょう",
        meaning: "en route, half way",
        JLPT: 1
    },
    {
        kanji: "綴じる",
        kana: "とじる",
        meaning: "to bind, to file",
        JLPT: 1
    },
    {
        kanji: "途絶える",
        kana: "とだえる",
        meaning: "to stop, to cease, to come to an end",
        JLPT: 1
    },
    {
        kanji: "特許",
        kana: "とっきょ",
        meaning: "special permission, patent",
        JLPT: 1
    },
    {
        kanji: "疾っくに",
        kana: "とっくに",
        meaning: "long ago, already, a long time ago",
        JLPT: 1
    },
    {
        kanji: "特権",
        kana: "とっけん",
        meaning: "privilege, special right",
        JLPT: 1
    },
    {
        kanji: "咄嗟",
        kana: "とっさ",
        meaning: "moment, instant",
        JLPT: 1
    },
    {
        kanji: "取っ手",
        kana: "とって",
        meaning: "handle, grip, knob",
        JLPT: 1
    },
    {
        kanji: "突破",
        kana: "とっぱ",
        meaning: "breaking through, breakthrough, penetration",
        JLPT: 1
    },
    {
        kanji: "突如",
        kana: "とつじょ",
        meaning: "suddenly, all of a sudden",
        JLPT: 1
    },
    {
        kanji: "迚も",
        kana: "とても",
        meaning: "very, awfully, exceedingly",
        JLPT: 1
    },
    {
        kanji: "整える",
        kana: "ととのえる",
        meaning: "to put in order, to get ready, to arrange, to adjust",
        JLPT: 1
    },
    {
        kanji: "届け",
        kana: "とどけ",
        meaning: "report, notification, registration",
        JLPT: 1
    },
    {
        kanji: "滞る",
        kana: "とどこおる",
        meaning: "to stagnate, to be delayed",
        JLPT: 1
    },
    {
        kanji: "止まる",
        kana: "とどまる",
        meaning: "to be limited to",
        JLPT: 1
    },
    {
        kanji: "留める",
        kana: "とどめる",
        meaning: "to stop, to cease, to put an end to",
        JLPT: 1
    },
    {
        kanji: "止める",
        kana: "とどめる",
        meaning: "to stop, to cease, to put an end to",
        JLPT: 1
    },
    {
        kanji: "唱える",
        kana: "となえる",
        meaning: "to recite, to chant, to call upon",
        JLPT: 1
    },
    {
        kanji: "兎に角",
        kana: "とにかく",
        meaning: "anyhow, at any rate, anyway, somehow or other, generally speaking, in any case",
        JLPT: 1
    },
    {
        kanji: "殿様",
        kana: "とのさま",
        meaning: "feudal lord",
        JLPT: 1
    },
    {
        kanji: "幕",
        kana: "とばり",
        meaning: "curtain, bunting, act (in play)",
        JLPT: 1
    },
    {
        kanji: "帳",
        kana: "とばり",
        meaning: "curtain",
        JLPT: 1
    },
    {
        kanji: "扉",
        kana: "とびら",
        meaning: "door, opening",
        JLPT: 1
    },
    {
        kanji: "徒歩",
        kana: "とほ",
        meaning: "walking, going on foot",
        JLPT: 1
    },
    {
        kanji: "乏しい",
        kana: "とぼしい",
        meaning: "meagre, scarce, limited, destitute, hard up, scanty, poor",
        JLPT: 1
    },
    {
        kanji: "富",
        kana: "とみ",
        meaning: "wealth, fortune",
        JLPT: 1
    },
    {
        kanji: "富む",
        kana: "とむ",
        meaning: "to be rich, to become rich",
        JLPT: 1
    },
    {
        kanji: "兎も角",
        kana: "ともかく",
        meaning: "anyhow, anyway, somehow or other, generally speaking, in any case",
        JLPT: 1
    },
    {
        kanji: "共稼ぎ",
        kana: "ともかせぎ",
        meaning: "working together, (husband and wife) earning a living together",
        JLPT: 1
    },
    {
        kanji: "灯",
        kana: "ともしび",
        meaning: "light",
        JLPT: 1
    },
    {
        kanji: "伴う",
        kana: "ともなう",
        meaning: "to accompany, to bring with, to be accompanied by, to be involved in",
        JLPT: 1
    },
    {
        kanji: "共働き",
        kana: "ともばたらき",
        meaning: "dual income",
        JLPT: 1
    },
    {
        kanji: "捕らえる",
        kana: "とらえる",
        meaning: "to seize, to grasp, to capture, to arrest",
        JLPT: 1
    },
    {
        kanji: "取りあえず",
        kana: "とりあえず",
        meaning: "at once, first of all, for the time being",
        JLPT: 1
    },
    {
        kanji: "取り扱い",
        kana: "とりあつかい",
        meaning: "treatment, service, handling, management",
        JLPT: 1
    },
    {
        kanji: "取り扱う",
        kana: "とりあつかう",
        meaning: "to treat, to handle, to deal in",
        JLPT: 1
    },
    {
        kanji: "鳥居",
        kana: "とりい",
        meaning: "torii (Shinto shrine archway)",
        JLPT: 1
    },
    {
        kanji: "取り替え",
        kana: "とりかえ",
        meaning: "swap, exchange",
        JLPT: 1
    },
    {
        kanji: "取り組む",
        kana: "とりくむ",
        meaning: "to tackle, to wrestle with, to engage in a bout, to come to grips with",
        JLPT: 1
    },
    {
        kanji: "取り締まり",
        kana: "とりしまり",
        meaning: "control, management, supervision",
        JLPT: 1
    },
    {
        kanji: "取り締まる",
        kana: "とりしまる",
        meaning: "to manage, to control, to supervise",
        JLPT: 1
    },
    {
        kanji: "取り調べる",
        kana: "とりしらべる",
        meaning: "to investigate, to examine",
        JLPT: 1
    },
    {
        kanji: "取り立てる",
        kana: "とりたてる",
        meaning: "to collect, to extort, to appoint, to promote",
        JLPT: 1
    },
    {
        kanji: "取り次ぐ",
        kana: "とりつぐ",
        meaning: "to act as an agent for, to announce (someone), to convey (a message)",
        JLPT: 1
    },
    {
        kanji: "取り除く",
        kana: "とりのぞく",
        meaning: "to remove, to take away, to set apart",
        JLPT: 1
    },
    {
        kanji: "取り引き",
        kana: "とりひき",
        meaning: "transactions, dealings, business",
        JLPT: 1
    },
    {
        kanji: "取り巻く",
        kana: "とりまく",
        meaning: "to surround, to circle, to enclose",
        JLPT: 1
    },
    {
        kanji: "取り混ぜる",
        kana: "とりまぜる",
        meaning: "to mix, to put together",
        JLPT: 1
    },
    {
        kanji: "取り戻す",
        kana: "とりもどす",
        meaning: "to take back, to regain",
        JLPT: 1
    },
    {
        kanji: "取り寄せる",
        kana: "とりよせる",
        meaning: "to order, to send away for",
        JLPT: 1
    },
    {
        kanji: "取り分",
        kana: "とりわけ",
        meaning: "especially, above all",
        JLPT: 1
    },
    {
        kanji: "副",
        kana: "とりわけ",
        meaning: "especially, above all",
        JLPT: 1
    },
    {
        kanji: "蕩ける",
        kana: "とろける",
        meaning: "to be enchanted with",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "とんだ",
        meaning: "terrible, awful, serious, preposterous, absolutely not",
        JLPT: 1
    },
    {
        kanji: "胴",
        kana: "どう",
        meaning: "trunk, body, frame",
        JLPT: 1
    },
    {
        kanji: "働",
        kana: "どう",
        meaning: "work, labor",
        JLPT: 1
    },
    {
        kanji: "同",
        kana: "どう",
        meaning: "the same, the said, ibid.",
        JLPT: 1
    },
    {
        kanji: "同意",
        kana: "どうい",
        meaning: "agreement, consent, same meaning, same opinion, approval",
        JLPT: 1
    },
    {
        kanji: "動員",
        kana: "どういん",
        meaning: "mobilization",
        JLPT: 1
    },
    {
        kanji: "同感",
        kana: "どうかん",
        meaning: "agreement, same opinion, same feeling, sympathy, concurrence",
        JLPT: 1
    },
    {
        kanji: "動機",
        kana: "どうき",
        meaning: "motive, incentive",
        JLPT: 1
    },
    {
        kanji: "同級",
        kana: "どうきゅう",
        meaning: "the same grade, same class",
        JLPT: 1
    },
    {
        kanji: "同居",
        kana: "どうきょ",
        meaning: "living together",
        JLPT: 1
    },
    {
        kanji: "動向",
        kana: "どうこう",
        meaning: "trend, tendency, movement, attitude",
        JLPT: 1
    },
    {
        kanji: "同士",
        kana: "どうし",
        meaning: "fellow, companion, comrade",
        JLPT: 1
    },
    {
        kanji: "同志",
        kana: "どうし",
        meaning: "same mind, comrade, kindred soul",
        JLPT: 1
    },
    {
        kanji: "如何して",
        kana: "どうして",
        meaning: "why?, for what reason, how, in what way, for what purpose, what for",
        JLPT: 1
    },
    {
        kanji: "如何しても",
        kana: "どうしても",
        meaning: "by all means, at any cost, no matter what, after all, in the long run, cravingly, at any rate, surely",
        JLPT: 1
    },
    {
        kanji: "同情",
        kana: "どうじょう",
        meaning: "sympathy, compassion, sympathize, pity, feel for",
        JLPT: 1
    },
    {
        kanji: "道場",
        kana: "どうじょう",
        meaning: "dojo, hall used for martial arts training, mandala",
        JLPT: 1
    },
    {
        kanji: "何卒",
        kana: "どうぞ",
        meaning: "please, kindly, by all means",
        JLPT: 1
    },
    {
        kanji: "どうぞ宜しく",
        kana: "どうぞよろしく",
        meaning: "pleased to meet you",
        JLPT: 1
    },
    {
        kanji: "同調",
        kana: "どうちょう",
        meaning: "sympathy, agree with, alignment, tuning",
        JLPT: 1
    },
    {
        kanji: "動的",
        kana: "どうてき",
        meaning: "dynamic, kinetic",
        JLPT: 1
    },
    {
        kanji: "同等",
        kana: "どうとう",
        meaning: "equality, equal, same rights, same rank",
        JLPT: 1
    },
    {
        kanji: "堂々",
        kana: "どうどう",
        meaning: "magnificent, grand, impressive",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "どうにか",
        meaning: "in some way or other, one way or another",
        JLPT: 1
    },
    {
        kanji: "導入",
        kana: "どうにゅう",
        meaning: "introduction, bringing in, leading in",
        JLPT: 1
    },
    {
        kanji: "同封",
        kana: "どうふう",
        meaning: "enclosure (e.g. in a letter)",
        JLPT: 1
    },
    {
        kanji: "同盟",
        kana: "どうめい",
        meaning: "alliance, union, league",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "どうやら",
        meaning: "it seems like, somehow or other",
        JLPT: 1
    },
    {
        kanji: "動揺",
        kana: "どうよう",
        meaning: "disturbance, unrest, shaking, trembling, pitching, rolling, oscillation, agitation, excitement, commotion",
        JLPT: 1
    },
    {
        kanji: "動力",
        kana: "どうりょく",
        meaning: "power, motive power, dynamic force",
        JLPT: 1
    },
    {
        kanji: "独裁",
        kana: "どくさい",
        meaning: "dictatorship, despotism",
        JLPT: 1
    },
    {
        kanji: "読者",
        kana: "どくしゃ",
        meaning: "reader",
        JLPT: 1
    },
    {
        kanji: "独自",
        kana: "どくじ",
        meaning: "original, peculiar, characteristic",
        JLPT: 1
    },
    {
        kanji: "独占",
        kana: "どくせん",
        meaning: "monopoly",
        JLPT: 1
    },
    {
        kanji: "独創",
        kana: "どくそう",
        meaning: "originality",
        JLPT: 1
    },
    {
        kanji: "何処",
        kana: "どこ",
        meaning: "where, what place",
        JLPT: 1
    },
    {
        kanji: "何処か",
        kana: "どこか",
        meaning: "somewhere, anywhere, in some respects",
        JLPT: 1
    },
    {
        kanji: "土産",
        kana: "どさん",
        meaning: "product of the land",
        JLPT: 1
    },
    {
        kanji: "土台",
        kana: "どだい",
        meaning: "foundation, base, basis",
        JLPT: 1
    },
    {
        kanji: "何方",
        kana: "どちら",
        meaning: "which, who",
        JLPT: 1
    },
    {
        kanji: "土手",
        kana: "どて",
        meaning: "embankment, bank",
        JLPT: 1
    },
    {
        kanji: "何方",
        kana: "どなた",
        meaning: "who?",
        JLPT: 1
    },
    {
        kanji: "怒鳴る",
        kana: "どなる",
        meaning: "to shout, to yell",
        JLPT: 1
    },
    {
        kanji: "何の",
        kana: "どの",
        meaning: "which, what",
        JLPT: 1
    },
    {
        kanji: "土俵",
        kana: "どひょう",
        meaning: "arena",
        JLPT: 1
    },
    {
        kanji: "土木",
        kana: "どぼく",
        meaning: "public works",
        JLPT: 1
    },
    {
        kanji: "何れ",
        kana: "どれ",
        meaning: "well, now, let me see, which (of three or more)",
        JLPT: 1
    },
    {
        kanji: "何々",
        kana: "どれどれ",
        meaning: "which (emphatic)",
        JLPT: 1
    },
    {
        kanji: "度忘れ",
        kana: "どわすれ",
        meaning: "lapse of memory, forget for a moment",
        JLPT: 1
    },
    {
        kanji: "鈍感",
        kana: "どんかん",
        meaning: "thickheadedness, stolidity",
        JLPT: 1
    },
    {
        kanji: "内閣",
        kana: "ないかく",
        meaning: "cabinet, (government) ministry",
        JLPT: 1
    },
    {
        kanji: "乃至",
        kana: "ないし",
        meaning: "from...to, between...and, or",
        JLPT: 1
    },
    {
        kanji: "内臓",
        kana: "ないぞう",
        meaning: "internal organs, intestines, viscera",
        JLPT: 1
    },
    {
        kanji: "内部",
        kana: "ないぶ",
        meaning: "interior, inside, internal",
        JLPT: 1
    },
    {
        kanji: "内乱",
        kana: "ないらん",
        meaning: "civil war, insurrection, rebellion, domestic conflict",
        JLPT: 1
    },
    {
        kanji: "内陸",
        kana: "ないりく",
        meaning: "inland",
        JLPT: 1
    },
    {
        kanji: "苗",
        kana: "なえ",
        meaning: "rice seedling",
        JLPT: 1
    },
    {
        kanji: "尚",
        kana: "なお",
        meaning: "furthermore, still, yet, more, still more, greater, further, less",
        JLPT: 1
    },
    {
        kanji: "尚更",
        kana: "なおさら",
        meaning: "all the more, still less",
        JLPT: 1
    },
    {
        kanji: "中程",
        kana: "なかほど",
        meaning: "middle, midway",
        JLPT: 1
    },
    {
        kanji: "流し",
        kana: "ながし",
        meaning: "sink",
        JLPT: 1
    },
    {
        kanji: "長々",
        kana: "ながなが",
        meaning: "long, drawn-out, very long",
        JLPT: 1
    },
    {
        kanji: "殴る",
        kana: "なぐる",
        meaning: "to strike, to hit",
        JLPT: 1
    },
    {
        kanji: "嘆く",
        kana: "なげく",
        meaning: "to sigh, to lament, to grieve",
        JLPT: 1
    },
    {
        kanji: "投げ出す",
        kana: "なげだす",
        meaning: "to throw down, to abandon, to sacrifice, to throw out",
        JLPT: 1
    },
    {
        kanji: "和やか",
        kana: "なごやか",
        meaning: "mild, calm, gentle, quiet, harmonious",
        JLPT: 1
    },
    {
        kanji: "名残",
        kana: "なごり",
        meaning: "remains, traces, memory",
        JLPT: 1
    },
    {
        kanji: "情け",
        kana: "なさけ",
        meaning: "sympathy, compassion",
        JLPT: 1
    },
    {
        kanji: "情け深い",
        kana: "なさけぶかい",
        meaning: "tender-hearted, compassionate",
        JLPT: 1
    },
    {
        kanji: "為さる",
        kana: "なさる",
        meaning: "to do",
        JLPT: 1
    },
    {
        kanji: "詰る",
        kana: "なじる",
        meaning: "to rebuke, to scold, to tell off",
        JLPT: 1
    },
    {
        kanji: "何故",
        kana: "なぜ",
        meaning: "why, how",
        JLPT: 1
    },
    {
        kanji: "何故なら",
        kana: "なぜなら",
        meaning: "because",
        JLPT: 1
    },
    {
        kanji: "名高い",
        kana: "なだかい",
        meaning: "famous, celebrated, well-known",
        JLPT: 1
    },
    {
        kanji: "雪崩",
        kana: "なだれ",
        meaning: "avalanche",
        JLPT: 1
    },
    {
        kanji: "懐く",
        kana: "なつく",
        meaning: "to become emotionally attached",
        JLPT: 1
    },
    {
        kanji: "名付ける",
        kana: "なづける",
        meaning: "to name (someone)",
        JLPT: 1
    },
    {
        kanji: "何気ない",
        kana: "なにげない",
        meaning: "casual, unconcerned",
        JLPT: 1
    },
    {
        kanji: "何しろ",
        kana: "なにしろ",
        meaning: "at any rate, anyhow, anyway, in any case",
        JLPT: 1
    },
    {
        kanji: "何卒",
        kana: "なにとぞ",
        meaning: "please",
        JLPT: 1
    },
    {
        kanji: "何も",
        kana: "なにも",
        meaning: "nothing",
        JLPT: 1
    },
    {
        kanji: "何より",
        kana: "なにより",
        meaning: "most, best",
        JLPT: 1
    },
    {
        kanji: "七日",
        kana: "なぬか",
        meaning: "seven days, the seventh day (of the month)",
        JLPT: 1
    },
    {
        kanji: "名札",
        kana: "なふだ",
        meaning: "name plate, name tag",
        JLPT: 1
    },
    {
        kanji: "生臭い",
        kana: "なまぐさい",
        meaning: "smelling of fish or blood, fish or meat",
        JLPT: 1
    },
    {
        kanji: "生温い",
        kana: "なまぬるい",
        meaning: "lukewarm, halfhearted",
        JLPT: 1
    },
    {
        kanji: "生身",
        kana: "なまみ",
        meaning: "living flesh, flesh and blood, the quick",
        JLPT: 1
    },
    {
        kanji: "鉛",
        kana: "なまり",
        meaning: "lead (the metal)",
        JLPT: 1
    },
    {
        kanji: "鈍る",
        kana: "なまる",
        meaning: "to become less capable, to grow dull, to become blunt, to weaken",
        JLPT: 1
    },
    {
        kanji: "並み",
        kana: "なみ",
        meaning: "average, medium, common, ordinary",
        JLPT: 1
    },
    {
        kanji: "滑らか",
        kana: "なめらか",
        meaning: "smoothness, glassiness",
        JLPT: 1
    },
    {
        kanji: "嘗める",
        kana: "なめる",
        meaning: "to lick, to taste, to experience, to make fun of, to make light of, to put down, to treat with contempt",
        JLPT: 1
    },
    {
        kanji: "悩ましい",
        kana: "なやましい",
        meaning: "seductive, melancholy, languid",
        JLPT: 1
    },
    {
        kanji: "悩ます",
        kana: "なやます",
        meaning: "to afflict, to torment, to harass, to molest",
        JLPT: 1
    },
    {
        kanji: "悩み",
        kana: "なやみ",
        meaning: "trouble(s), worry, distress, anguish, agony, problem",
        JLPT: 1
    },
    {
        kanji: "平均",
        kana: "ならし",
        meaning: "equilibrium, balance, average, mean",
        JLPT: 1
    },
    {
        kanji: "慣らす",
        kana: "ならす",
        meaning: "to accustom",
        JLPT: 1
    },
    {
        kanji: "馴らす",
        kana: "ならす",
        meaning: "to domesticate, to tame",
        JLPT: 1
    },
    {
        kanji: "並びに",
        kana: "ならびに",
        meaning: "and",
        JLPT: 1
    },
    {
        kanji: "成り立つ",
        kana: "なりたつ",
        meaning: "to conclude, to consist of, to be practical (logical feasible viable), to hold true",
        JLPT: 1
    },
    {
        kanji: "成る丈",
        kana: "なるたけ",
        meaning: "as much as possible, if possible",
        JLPT: 1
    },
    {
        kanji: "成るべく",
        kana: "なるべく",
        meaning: "as much as possible",
        JLPT: 1
    },
    {
        kanji: "慣れ",
        kana: "なれ",
        meaning: "practice, experience",
        JLPT: 1
    },
    {
        kanji: "馴れ馴れしい",
        kana: "なれなれしい",
        meaning: "over-familiar",
        JLPT: 1
    },
    {
        kanji: "難",
        kana: "なん",
        meaning: "difficulty, hardships, defect",
        JLPT: 1
    },
    {
        kanji: "南",
        kana: "なん",
        meaning: "south",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "なんか",
        meaning: "things like ..., or something like that .. (often derogatory)",
        JLPT: 1
    },
    {
        kanji: "何だか",
        kana: "なんだか",
        meaning: "a little, somewhat, somehow",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "なんだかんだ",
        meaning: "something or other",
        JLPT: 1
    },
    {
        kanji: "何て",
        kana: "なんて",
        meaning: "how...!, what...!",
        JLPT: 1
    },
    {
        kanji: "何と",
        kana: "なんと",
        meaning: "what, how, whatever",
        JLPT: 1
    },
    {
        kanji: "何となく",
        kana: "なんとなく",
        meaning: "somehow or other, for some reason or another",
        JLPT: 1
    },
    {
        kanji: "何とも",
        kana: "なんとも",
        meaning: "nothing (with neg. verb), quite, not a bit",
        JLPT: 1
    },
    {
        kanji: "何なり",
        kana: "なんなり",
        meaning: "any, anything, whatever",
        JLPT: 1
    },
    {
        kanji: "荷",
        kana: "に",
        meaning: "load, baggage, cargo",
        JLPT: 1
    },
    {
        kanji: "似通う",
        kana: "にかよう",
        meaning: "to resemble closely",
        JLPT: 1
    },
    {
        kanji: "面皰",
        kana: "にきび",
        meaning: "pimple, acne",
        JLPT: 1
    },
    {
        kanji: "賑わう",
        kana: "にぎわう",
        meaning: "to prosper, to flourish, to do thriving business, to be crowded with people",
        JLPT: 1
    },
    {
        kanji: "悪い",
        kana: "にくい",
        meaning: "hateful, abominable, poor-looking",
        JLPT: 1
    },
    {
        kanji: "憎しみ",
        kana: "にくしみ",
        meaning: "hatred",
        JLPT: 1
    },
    {
        kanji: "肉親",
        kana: "にくしん",
        meaning: "blood relationship, blood relative",
        JLPT: 1
    },
    {
        kanji: "肉体",
        kana: "にくたい",
        meaning: "the body, the flesh",
        JLPT: 1
    },
    {
        kanji: "逃げ出す",
        kana: "にげだす",
        meaning: "to run away, to escape from",
        JLPT: 1
    },
    {
        kanji: "西日",
        kana: "にしび",
        meaning: "westering sun",
        JLPT: 1
    },
    {
        kanji: "滲む",
        kana: "にじむ",
        meaning: "to run, to blur, to spread, to blot, to ooze",
        JLPT: 1
    },
    {
        kanji: "日夜",
        kana: "にちや",
        meaning: "day and night, always",
        JLPT: 1
    },
    {
        kanji: "日当",
        kana: "にっとう",
        meaning: "daily allowance",
        JLPT: 1
    },
    {
        kanji: "荷造り",
        kana: "にづくり",
        meaning: "packing, baling, crating",
        JLPT: 1
    },
    {
        kanji: "担う",
        kana: "になう",
        meaning: "to carry on shoulder, to bear (burden), to shoulder (gun)",
        JLPT: 1
    },
    {
        kanji: "二人",
        kana: "ににん",
        meaning: "two persons, two people, pair, couple",
        JLPT: 1
    },
    {
        kanji: "にも拘らず",
        kana: "にもかかわらず",
        meaning: "in spite of, nevertheless",
        JLPT: 1
    },
    {
        kanji: "入手",
        kana: "にゅうしゅ",
        meaning: "obtaining, coming to hand",
        JLPT: 1
    },
    {
        kanji: "入賞",
        kana: "にゅうしょう",
        meaning: "winning a prize or place (in a contest)",
        JLPT: 1
    },
    {
        kanji: "入浴",
        kana: "にゅうよく",
        meaning: "bathe, bathing",
        JLPT: 1
    },
    {
        kanji: "尿",
        kana: "にょう",
        meaning: "urine",
        JLPT: 1
    },
    {
        kanji: "俄か",
        kana: "にわか",
        meaning: "sudden, abrupt, unexpected, improvised, offhand",
        JLPT: 1
    },
    {
        kanji: "認識",
        kana: "にんしき",
        meaning: "recognition, cognizance",
        JLPT: 1
    },
    {
        kanji: "妊娠",
        kana: "にんしん",
        meaning: "conception, pregnancy",
        JLPT: 1
    },
    {
        kanji: "人情",
        kana: "にんじょう",
        meaning: "humanity, empathy, kindness, sympathy, human nature, common sense, customs and manners",
        JLPT: 1
    },
    {
        kanji: "任務",
        kana: "にんむ",
        meaning: "duty, function, office, mission, task",
        JLPT: 1
    },
    {
        kanji: "任命",
        kana: "にんめい",
        meaning: "appointment, nomination, ordination, commission, designation",
        JLPT: 1
    },
    {
        kanji: "抜かす",
        kana: "ぬかす",
        meaning: "to omit, to leave out",
        JLPT: 1
    },
    {
        kanji: "抜け出す",
        kana: "ぬけだす",
        meaning: "to slip out, to sneak away, to excel",
        JLPT: 1
    },
    {
        kanji: "盗み",
        kana: "ぬすみ",
        meaning: "stealing",
        JLPT: 1
    },
    {
        kanji: "沼",
        kana: "ぬま",
        meaning: "swamp, bog, pond, lake",
        JLPT: 1
    },
    {
        kanji: "音",
        kana: "ね",
        meaning: "sound, note",
        JLPT: 1
    },
    {
        kanji: "値打ち",
        kana: "ねうち",
        meaning: "value, worth, price, dignity",
        JLPT: 1
    },
    {
        kanji: "寝かせる",
        kana: "ねかせる",
        meaning: "to put to bed, to lay down, to ferment",
        JLPT: 1
    },
    {
        kanji: "捻子",
        kana: "ねじ",
        meaning: "screw, helix, spiral",
        JLPT: 1
    },
    {
        kanji: "ねじ回し",
        kana: "ねじまわし",
        meaning: "screwdriver",
        JLPT: 1
    },
    {
        kanji: "捻じれる",
        kana: "ねじれる",
        meaning: "to twist, to wrench, to screw",
        JLPT: 1
    },
    {
        kanji: "鼠",
        kana: "ねず",
        meaning: "1. mouse, rat, 2. dark gray, slate color",
        JLPT: 1
    },
    {
        kanji: "妬む",
        kana: "ねたむ",
        meaning: "to be jealous, to be envious",
        JLPT: 1
    },
    {
        kanji: "強請る",
        kana: "ねだる",
        meaning: "to tease, to coax, to solicit, to demand",
        JLPT: 1
    },
    {
        kanji: "熱湯",
        kana: "ねっとう",
        meaning: "boiling water",
        JLPT: 1
    },
    {
        kanji: "熱意",
        kana: "ねつい",
        meaning: "zeal, enthusiasm",
        JLPT: 1
    },
    {
        kanji: "熱量",
        kana: "ねつりょう",
        meaning: "temperature",
        JLPT: 1
    },
    {
        kanji: "粘り",
        kana: "ねばり",
        meaning: "stickyness, viscosity",
        JLPT: 1
    },
    {
        kanji: "粘る",
        kana: "ねばる",
        meaning: "to be sticky, to be adhesive, to persevere, to persist, to stick to",
        JLPT: 1
    },
    {
        kanji: "値引き",
        kana: "ねびき",
        meaning: "price reduction, discount",
        JLPT: 1
    },
    {
        kanji: "根回し",
        kana: "ねまわし",
        meaning: "making necessary arrangements",
        JLPT: 1
    },
    {
        kanji: "眠たい",
        kana: "ねむたい",
        meaning: "sleepy",
        JLPT: 1
    },
    {
        kanji: "練る",
        kana: "ねる",
        meaning: "to knead, to work over, to polish up",
        JLPT: 1
    },
    {
        kanji: "念",
        kana: "ねん",
        meaning: "sense, idea, thought, feeling, desire, concern, attention, care",
        JLPT: 1
    },
    {
        kanji: "年鑑",
        kana: "ねんかん",
        meaning: "yearbook",
        JLPT: 1
    },
    {
        kanji: "年号",
        kana: "ねんごう",
        meaning: "name of an era, year number",
        JLPT: 1
    },
    {
        kanji: "燃焼",
        kana: "ねんしょう",
        meaning: "burning, combustion",
        JLPT: 1
    },
    {
        kanji: "年生",
        kana: "ねんせい",
        meaning: "pupil in .... year, student in .... year",
        JLPT: 1
    },
    {
        kanji: "年長",
        kana: "ねんちょう",
        meaning: "seniority",
        JLPT: 1
    },
    {
        kanji: "燃料",
        kana: "ねんりょう",
        meaning: "fuel",
        JLPT: 1
    },
    {
        kanji: "年輪",
        kana: "ねんりん",
        meaning: "annual tree ring",
        JLPT: 1
    },
    {
        kanji: "脳",
        kana: "のう",
        meaning: "brain, memory",
        JLPT: 1
    },
    {
        kanji: "農耕",
        kana: "のうこう",
        meaning: "farming, agriculture",
        JLPT: 1
    },
    {
        kanji: "農場",
        kana: "のうじょう",
        meaning: "farm (agriculture)",
        JLPT: 1
    },
    {
        kanji: "農地",
        kana: "のうち",
        meaning: "agricultural land",
        JLPT: 1
    },
    {
        kanji: "納入",
        kana: "のうにゅう",
        meaning: "payment, supply",
        JLPT: 1
    },
    {
        kanji: "逃す",
        kana: "のがす",
        meaning: "to let loose, to set free, to let escape",
        JLPT: 1
    },
    {
        kanji: "逃れる",
        kana: "のがれる",
        meaning: "to escape",
        JLPT: 1
    },
    {
        kanji: "軒並み",
        kana: "のきなみ",
        meaning: "row of houses",
        JLPT: 1
    },
    {
        kanji: "鋸",
        kana: "のこぎり",
        meaning: "saw",
        JLPT: 1
    },
    {
        kanji: "望ましい",
        kana: "のぞましい",
        meaning: "desirable, hoped for",
        JLPT: 1
    },
    {
        kanji: "臨む",
        kana: "のぞむ",
        meaning: "to look out on, to face, to deal with, to attend (function)",
        JLPT: 1
    },
    {
        kanji: "乗っ取る",
        kana: "のっとる",
        meaning: "to capture, to occupy, to usurp",
        JLPT: 1
    },
    {
        kanji: "長閑",
        kana: "のどか",
        meaning: "tranquil, calm, quiet",
        JLPT: 1
    },
    {
        kanji: "罵る",
        kana: "ののしる",
        meaning: "to speak ill of, to abuse",
        JLPT: 1
    },
    {
        kanji: "延べ",
        kana: "のべ",
        meaning: "futures, credit (buying), stretching, total",
        JLPT: 1
    },
    {
        kanji: "飲み込む",
        kana: "のみこむ",
        meaning: "to gulp down, to swallow deeply, to understand, to take in, to catch on to, to learn, to digest",
        JLPT: 1
    },
    {
        kanji: "乗り換え",
        kana: "のりかえ",
        meaning: "transfer (trains buses etc.)",
        JLPT: 1
    },
    {
        kanji: "乗り込む",
        kana: "のりこむ",
        meaning: "to board, to embark on, to get into (a car), to ship (passengers), to man (a ship), to help (someone) int",
        JLPT: 1
    },
    {
        kanji: "刃",
        kana: "は",
        meaning: "edge (of a sword)",
        JLPT: 1
    },
    {
        kanji: "派",
        kana: "は",
        meaning: "clique, faction, school",
        JLPT: 1
    },
    {
        kanji: "把握",
        kana: "はあく",
        meaning: "grasp, catch, understanding",
        JLPT: 1
    },
    {
        kanji: "肺",
        kana: "はい",
        meaning: "lung",
        JLPT: 1
    },
    {
        kanji: "廃棄",
        kana: "はいき",
        meaning: "annullment, disposal, abandon, scrap, discarding, repeal",
        JLPT: 1
    },
    {
        kanji: "配給",
        kana: "はいきゅう",
        meaning: "distribution (eg. films rice)",
        JLPT: 1
    },
    {
        kanji: "配偶者",
        kana: "はいぐうしゃ",
        meaning: "spouse, wife, husband",
        JLPT: 1
    },
    {
        kanji: "拝啓",
        kana: "はいけい",
        meaning: "Dear (so and so)",
        JLPT: 1
    },
    {
        kanji: "背景",
        kana: "はいけい",
        meaning: "background, scenery, setting, circumstance",
        JLPT: 1
    },
    {
        kanji: "背後",
        kana: "はいご",
        meaning: "back, rear",
        JLPT: 1
    },
    {
        kanji: "灰皿",
        kana: "はいさら",
        meaning: "ashtray",
        JLPT: 1
    },
    {
        kanji: "廃止",
        kana: "はいし",
        meaning: "abolition, repeal",
        JLPT: 1
    },
    {
        kanji: "拝借",
        kana: "はいしゃく",
        meaning: "borrowing",
        JLPT: 1
    },
    {
        kanji: "排除",
        kana: "はいじょ",
        meaning: "exclusion, removal, rejection",
        JLPT: 1
    },
    {
        kanji: "排水",
        kana: "はいすい",
        meaning: "drainage",
        JLPT: 1
    },
    {
        kanji: "敗戦",
        kana: "はいせん",
        meaning: "defeat, losing a war",
        JLPT: 1
    },
    {
        kanji: "配置",
        kana: "はいち",
        meaning: "arrangement (of resources), disposition",
        JLPT: 1
    },
    {
        kanji: "配布",
        kana: "はいふ",
        meaning: "distribution",
        JLPT: 1
    },
    {
        kanji: "配分",
        kana: "はいぶん",
        meaning: "distribution, allotment",
        JLPT: 1
    },
    {
        kanji: "配慮",
        kana: "はいりょ",
        meaning: "consideration, concern, forethought",
        JLPT: 1
    },
    {
        kanji: "配列",
        kana: "はいれつ",
        meaning: "arrangement, array (programming)",
        JLPT: 1
    },
    {
        kanji: "映える",
        kana: "はえる",
        meaning: "to shine, to look attractive, to look pretty",
        JLPT: 1
    },
    {
        kanji: "破壊",
        kana: "はかい",
        meaning: "destruction",
        JLPT: 1
    },
    {
        kanji: "墓地",
        kana: "はかち",
        meaning: "cemetery, graveyard",
        JLPT: 1
    },
    {
        kanji: "捗る",
        kana: "はかどる",
        meaning: "to make progress, to move right ahead (with the work), to advance",
        JLPT: 1
    },
    {
        kanji: "果ない",
        kana: "はかない",
        meaning: "fleeting, transient, short-lived, momentary, vain, fickle, miserable, empty, ephemeral",
        JLPT: 1
    },
    {
        kanji: "諮る",
        kana: "はかる",
        meaning: "to consult with, to confer",
        JLPT: 1
    },
    {
        kanji: "図る",
        kana: "はかる",
        meaning: "to plot, to attempt, to plan, to take in, to deceive, to devise, to design, to refer A to B",
        JLPT: 1
    },
    {
        kanji: "剥がす",
        kana: "はがす",
        meaning: "to tear off, to peel off, to rip off, to strip off, to skin, to flay, to disrobe, to deprive of, to detach, t",
        JLPT: 1
    },
    {
        kanji: "破棄",
        kana: "はき",
        meaning: "revocation, annulment, breaking (e.g. treaty)",
        JLPT: 1
    },
    {
        kanji: "泊",
        kana: "はく",
        meaning: "counter for nights of a stay",
        JLPT: 1
    },
    {
        kanji: "迫害",
        kana: "はくがい",
        meaning: "persecution",
        JLPT: 1
    },
    {
        kanji: "薄弱",
        kana: "はくじゃく",
        meaning: "feebleness, weakness, weak",
        JLPT: 1
    },
    {
        kanji: "白状",
        kana: "はくじょう",
        meaning: "confession",
        JLPT: 1
    },
    {
        kanji: "剥ぐ",
        kana: "はぐ",
        meaning: "to tear off, to peel off, to rip off, to strip off, to skin, to flay, to disrobe, to deprive of",
        JLPT: 1
    },
    {
        kanji: "派遣",
        kana: "はけん",
        meaning: "dispatch, send",
        JLPT: 1
    },
    {
        kanji: "励ます",
        kana: "はげます",
        meaning: "to encourage, to cheer, to raise (the voice)",
        JLPT: 1
    },
    {
        kanji: "励む",
        kana: "はげむ",
        meaning: "to be zealous, to brace oneself, to endeavour, to strive, to make an effort",
        JLPT: 1
    },
    {
        kanji: "剥げる",
        kana: "はげる",
        meaning: "to come off, to be worn off, to fade, to discolor",
        JLPT: 1
    },
    {
        kanji: "鋏",
        kana: "はさみ",
        meaning: "scissors",
        JLPT: 1
    },
    {
        kanji: "柱",
        kana: "はしら",
        meaning: "pillar, post",
        JLPT: 1
    },
    {
        kanji: "橋渡し",
        kana: "はしわたし",
        meaning: "bridge building, mediation",
        JLPT: 1
    },
    {
        kanji: "恥",
        kana: "はじ",
        meaning: "shame, embarrassment",
        JLPT: 1
    },
    {
        kanji: "弾く",
        kana: "はじく",
        meaning: "to flip, to snap",
        JLPT: 1
    },
    {
        kanji: "始め",
        kana: "はじめ",
        meaning: "beginning, start, origin",
        JLPT: 1
    },
    {
        kanji: "始めまして",
        kana: "はじめまして",
        meaning: "How do you do?, I am glad to meet you",
        JLPT: 1
    },
    {
        kanji: "恥じらう",
        kana: "はじらう",
        meaning: "to feel shy, to be bashful, to blush",
        JLPT: 1
    },
    {
        kanji: "恥じる",
        kana: "はじる",
        meaning: "to feel ashamed",
        JLPT: 1
    },
    {
        kanji: "蓮",
        kana: "はす",
        meaning: "lotus",
        JLPT: 1
    },
    {
        kanji: "筈",
        kana: "はず",
        meaning: "it should be so",
        JLPT: 1
    },
    {
        kanji: "弾む",
        kana: "はずむ",
        meaning: "to spring, to bound, to bounce, to be stimulated, to be encouraged, to get lively, to treat oneself to, to",
        JLPT: 1
    },
    {
        kanji: "破損",
        kana: "はそん",
        meaning: "damage",
        JLPT: 1
    },
    {
        kanji: "機",
        kana: "はた",
        meaning: "loom",
        JLPT: 1
    },
    {
        kanji: "果たして",
        kana: "はたして",
        meaning: "as was expected, really",
        JLPT: 1
    },
    {
        kanji: "果たす",
        kana: "はたす",
        meaning: "to accomplish, to fulfill, to carry out, to achieve",
        JLPT: 1
    },
    {
        kanji: "裸足",
        kana: "はだし",
        meaning: "barefoot",
        JLPT: 1
    },
    {
        kanji: "蜂蜜",
        kana: "はちみつ",
        meaning: "honey",
        JLPT: 1
    },
    {
        kanji: "発掘",
        kana: "はっくつ",
        meaning: "excavation, exhumation",
        JLPT: 1
    },
    {
        kanji: "発生",
        kana: "はっせい",
        meaning: "outbreak, spring forth, occurrence, incidence, origin",
        JLPT: 1
    },
    {
        kanji: "発足",
        kana: "はっそく",
        meaning: "starting, inauguration",
        JLPT: 1
    },
    {
        kanji: "初",
        kana: "はつ",
        meaning: "first, new",
        JLPT: 1
    },
    {
        kanji: "発",
        kana: "はつ",
        meaning: "departure, beginning, counter for gunshots",
        JLPT: 1
    },
    {
        kanji: "発育",
        kana: "はついく",
        meaning: "(physical) growth, development",
        JLPT: 1
    },
    {
        kanji: "発芽",
        kana: "はつが",
        meaning: "burgeoning",
        JLPT: 1
    },
    {
        kanji: "発言",
        kana: "はつげん",
        meaning: "utterance, speech, proposal",
        JLPT: 1
    },
    {
        kanji: "発病",
        kana: "はつびょう",
        meaning: "attack (disease)",
        JLPT: 1
    },
    {
        kanji: "初耳",
        kana: "はつみみ",
        meaning: "something heard for the first time",
        JLPT: 1
    },
    {
        kanji: "果て",
        kana: "はて",
        meaning: "the end, the extremity, the limit(s), the result",
        JLPT: 1
    },
    {
        kanji: "果てる",
        kana: "はてる",
        meaning: "to end, to be finished, to be exhausted, to die, to perish",
        JLPT: 1
    },
    {
        kanji: "話し合い",
        kana: "はなしあい",
        meaning: "discussion, conference",
        JLPT: 1
    },
    {
        kanji: "甚だ",
        kana: "はなはだ",
        meaning: "very, greatly, exceedingly",
        JLPT: 1
    },
    {
        kanji: "華々しい",
        kana: "はなばなしい",
        meaning: "brilliant, magnificent, spectacular",
        JLPT: 1
    },
    {
        kanji: "花びら",
        kana: "はなびら",
        meaning: "(flower) petal",
        JLPT: 1
    },
    {
        kanji: "華やか",
        kana: "はなやか",
        meaning: "gay, showy, brilliant, gorgeous, florid",
        JLPT: 1
    },
    {
        kanji: "阻む",
        kana: "はばむ",
        meaning: "to keep someone from doing, to stop, to prevent, to check, to hinder, to obstruct, to oppose, to thwart",
        JLPT: 1
    },
    {
        kanji: "浜",
        kana: "はま",
        meaning: "beach, seashore",
        JLPT: 1
    },
    {
        kanji: "浜辺",
        kana: "はまべ",
        meaning: "beach, foreshore",
        JLPT: 1
    },
    {
        kanji: "填まる",
        kana: "はまる",
        meaning: "to get into, to go into, to fit, to be fit for, to suit, to fall into, to plunge into, to be deceived, to be",
        JLPT: 1
    },
    {
        kanji: "歯磨",
        kana: "はみがき",
        meaning: "dentifrice, toothpaste",
        JLPT: 1
    },
    {
        kanji: "填める",
        kana: "はめる",
        meaning: "to get in, to insert, to put on, to make love",
        JLPT: 1
    },
    {
        kanji: "生やす",
        kana: "はやす",
        meaning: "to grow, to cultivate, to wear beard",
        JLPT: 1
    },
    {
        kanji: "早める",
        kana: "はやめる",
        meaning: "to hasten, to quicken, to expedite, to precipitate, to accelerate",
        JLPT: 1
    },
    {
        kanji: "流行",
        kana: "はやり",
        meaning: "fashionable, fad, in vogue, prevailing",
        JLPT: 1
    },
    {
        kanji: "腹立ち",
        kana: "はらだち",
        meaning: "anger",
        JLPT: 1
    },
    {
        kanji: "原っぱ",
        kana: "はらっぱ",
        meaning: "open field, empty lot, plain",
        JLPT: 1
    },
    {
        kanji: "張り紙",
        kana: "はりがみ",
        meaning: "paper patch, paper backing, poster",
        JLPT: 1
    },
    {
        kanji: "遥か",
        kana: "はるか",
        meaning: "far, far-away, distant, remote, far off",
        JLPT: 1
    },
    {
        kanji: "破裂",
        kana: "はれつ",
        meaning: "explosion, rupture, break off",
        JLPT: 1
    },
    {
        kanji: "腫れる",
        kana: "はれる",
        meaning: "to swell (from inflammation), to become swollen",
        JLPT: 1
    },
    {
        kanji: "班",
        kana: "はん",
        meaning: "group, party, section (mil)",
        JLPT: 1
    },
    {
        kanji: "判",
        kana: "はん",
        meaning: "seal, stamp, monogram signature, judgment",
        JLPT: 1
    },
    {
        kanji: "版",
        kana: "はん",
        meaning: "edition",
        JLPT: 1
    },
    {
        kanji: "繁栄",
        kana: "はんえい",
        meaning: "prospering, prosperity, thriving, flourishing",
        JLPT: 1
    },
    {
        kanji: "反感",
        kana: "はんかん",
        meaning: "antipathy, revolt, animosity",
        JLPT: 1
    },
    {
        kanji: "版画",
        kana: "はんが",
        meaning: "art print",
        JLPT: 1
    },
    {
        kanji: "反響",
        kana: "はんきょう",
        meaning: "echo, reverberation, repercussion, reaction, influence",
        JLPT: 1
    },
    {
        kanji: "判決",
        kana: "はんけつ",
        meaning: "judicial decision, judgement, sentence, decree",
        JLPT: 1
    },
    {
        kanji: "反撃",
        kana: "はんげき",
        meaning: "counterattack, counteroffensive, counterblow",
        JLPT: 1
    },
    {
        kanji: "反射",
        kana: "はんしゃ",
        meaning: "reflection, reverberation",
        JLPT: 1
    },
    {
        kanji: "繁殖",
        kana: "はんしょく",
        meaning: "breed, multiply, increase, propagation",
        JLPT: 1
    },
    {
        kanji: "繁盛",
        kana: "はんじょう",
        meaning: "prosperity, flourishing, thriving",
        JLPT: 1
    },
    {
        kanji: "反する",
        kana: "はんする",
        meaning: "to be inconsistent with, to oppose, to contradict, to transgress, to rebel",
        JLPT: 1
    },
    {
        kanji: "判定",
        kana: "はんてい",
        meaning: "judgement, decision, award, verdict",
        JLPT: 1
    },
    {
        kanji: "反応",
        kana: "はんのう",
        meaning: "reaction, response",
        JLPT: 1
    },
    {
        kanji: "半端",
        kana: "はんぱ",
        meaning: "remnant, fragment, incomplete set, fraction, odd sum, incompleteness",
        JLPT: 1
    },
    {
        kanji: "反発",
        kana: "はんぱつ",
        meaning: "repelling, rebound, recover, oppose",
        JLPT: 1
    },
    {
        kanji: "反乱",
        kana: "はんらん",
        meaning: "insurrection, mutiny, rebellion, revolt, uprising",
        JLPT: 1
    },
    {
        kanji: "氾濫",
        kana: "はんらん",
        meaning: "overflowing, flood",
        JLPT: 1
    },
    {
        kanji: "黴菌",
        kana: "ばいきん",
        meaning: "bacteria, germ(s)",
        JLPT: 1
    },
    {
        kanji: "賠償",
        kana: "ばいしょう",
        meaning: "reparations, indemnity, compensation",
        JLPT: 1
    },
    {
        kanji: "倍率",
        kana: "ばいりつ",
        meaning: "diameter, magnification",
        JLPT: 1
    },
    {
        kanji: "馬鹿馬鹿しい",
        kana: "ばかばかしい",
        meaning: "stupid",
        JLPT: 1
    },
    {
        kanji: "馬鹿らしい",
        kana: "ばからしい",
        meaning: "absurd",
        JLPT: 1
    },
    {
        kanji: "漠然",
        kana: "ばくぜん",
        meaning: "obscure, vague, equivocal",
        JLPT: 1
    },
    {
        kanji: "爆弾",
        kana: "ばくだん",
        meaning: "bomb",
        JLPT: 1
    },
    {
        kanji: "爆破",
        kana: "ばくは",
        meaning: "blast, explosion, blow up",
        JLPT: 1
    },
    {
        kanji: "暴露",
        kana: "ばくろ",
        meaning: "disclosure, exposure, revelation",
        JLPT: 1
    },
    {
        kanji: "化ける",
        kana: "ばける",
        meaning: "to appear in disguise, to take the form of, to change for the worse",
        JLPT: 1
    },
    {
        kanji: "罰",
        kana: "ばち",
        meaning: "(divine) punishment, curse, retribution",
        JLPT: 1
    },
    {
        kanji: "伐",
        kana: "ばつ",
        meaning: "strike, attack, punish",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ばてる",
        meaning: "to be exhausted, to be worn out",
        JLPT: 1
    },
    {
        kanji: "発条",
        kana: "ばね",
        meaning: "spring (e.g. coil leaf)",
        JLPT: 1
    },
    {
        kanji: "散蒔く",
        kana: "ばらまく",
        meaning: "to disseminate, to scatter, to give money freely",
        JLPT: 1
    },
    {
        kanji: "判",
        kana: "ばん",
        meaning: "size (of paper or books)",
        JLPT: 1
    },
    {
        kanji: "万",
        kana: "ばん",
        meaning: "many, all",
        JLPT: 1
    },
    {
        kanji: "万人",
        kana: "ばんじん",
        meaning: "all people, everybody, 10000 people",
        JLPT: 1
    },
    {
        kanji: "万能",
        kana: "ばんのう",
        meaning: "all-purpose, almighty, omnipotent",
        JLPT: 1
    },
    {
        kanji: "番目",
        kana: "ばんめ",
        meaning: "cardinal number suffix",
        JLPT: 1
    },
    {
        kanji: "非",
        kana: "ひ",
        meaning: "faulty-, non-",
        JLPT: 1
    },
    {
        kanji: "費",
        kana: "ひ",
        meaning: "cost, expense",
        JLPT: 1
    },
    {
        kanji: "延いては",
        kana: "ひいては",
        meaning: "not only...but also, in addition to, consequently",
        JLPT: 1
    },
    {
        kanji: "控室",
        kana: "ひかえしつ",
        meaning: "waiting room",
        JLPT: 1
    },
    {
        kanji: "控える",
        kana: "ひかえる",
        meaning: "to draw in, to hold back, to make notes, to be temperate in",
        JLPT: 1
    },
    {
        kanji: "悲観",
        kana: "ひかん",
        meaning: "pessimism, disappointment",
        JLPT: 1
    },
    {
        kanji: "匹",
        kana: "ひき",
        meaning: "head, small animal counter, roll of cloth",
        JLPT: 1
    },
    {
        kanji: "引き上げる",
        kana: "ひきあげる",
        meaning: "to withdraw, to leave, to pull out, to retire",
        JLPT: 1
    },
    {
        kanji: "率いる",
        kana: "ひきいる",
        meaning: "to lead, to spearhead (a group), to command (troops)",
        JLPT: 1
    },
    {
        kanji: "引き受ける",
        kana: "ひきうける",
        meaning: "to undertake, to take up, to take over, to be responsible for, to guarantee, to contract (disease)",
        JLPT: 1
    },
    {
        kanji: "引き起こす",
        kana: "ひきおこす",
        meaning: "to cause",
        JLPT: 1
    },
    {
        kanji: "引き下げる",
        kana: "ひきさげる",
        meaning: "to pull down, to lower, to reduce, to withdraw",
        JLPT: 1
    },
    {
        kanji: "引きずる",
        kana: "ひきずる",
        meaning: "to seduce, to drag along, to pull, to prolong, to support",
        JLPT: 1
    },
    {
        kanji: "引き取る",
        kana: "ひきとる",
        meaning: "to take charge of, to take over, to retire to a private place",
        JLPT: 1
    },
    {
        kanji: "引き分け",
        kana: "ひきわけ",
        meaning: "a draw (in competition), tie game",
        JLPT: 1
    },
    {
        kanji: "否決",
        kana: "ひけつ",
        meaning: "rejection, negation, voting down",
        JLPT: 1
    },
    {
        kanji: "非行",
        kana: "ひこう",
        meaning: "delinquency, misconduct",
        JLPT: 1
    },
    {
        kanji: "日頃",
        kana: "ひごろ",
        meaning: "normally, habitually",
        JLPT: 1
    },
    {
        kanji: "久しい",
        kana: "ひさしい",
        meaning: "long, long-continued, old (story)",
        JLPT: 1
    },
    {
        kanji: "久し振り",
        kana: "ひさしぶり",
        meaning: "after a long time",
        JLPT: 1
    },
    {
        kanji: "悲惨",
        kana: "ひさん",
        meaning: "misery",
        JLPT: 1
    },
    {
        kanji: "秘書",
        kana: "ひしょ",
        meaning: "(private) secretary",
        JLPT: 1
    },
    {
        kanji: "比重",
        kana: "ひじゅう",
        meaning: "specific gravity",
        JLPT: 1
    },
    {
        kanji: "密か",
        kana: "ひそか",
        meaning: "secret, private, surreptitious",
        JLPT: 1
    },
    {
        kanji: "浸す",
        kana: "ひたす",
        meaning: "to soak, to dip, to drench",
        JLPT: 1
    },
    {
        kanji: "一向",
        kana: "ひたすら",
        meaning: "earnestly",
        JLPT: 1
    },
    {
        kanji: "左利き",
        kana: "ひだりきき",
        meaning: "left-handedness, sake drinker, left-hander",
        JLPT: 1
    },
    {
        kanji: "引っ掻く",
        kana: "ひっかく",
        meaning: "to scratch",
        JLPT: 1
    },
    {
        kanji: "引っ掛ける",
        kana: "ひっかける",
        meaning: "1. to hang (something) on (something), to throw on (clothes), 2. to hook, to catch, to trap, to ensnar",
        JLPT: 1
    },
    {
        kanji: "必修",
        kana: "ひっしゅう",
        meaning: "required (subject)",
        JLPT: 1
    },
    {
        kanji: "匹敵",
        kana: "ひってき",
        meaning: "comparing with, match, rival, equal",
        JLPT: 1
    },
    {
        kanji: "未",
        kana: "ひつじ",
        meaning: "eighth sign of Chinese zodiac (The Ram 1pm-3pm south-southwest June)",
        JLPT: 1
    },
    {
        kanji: "必然",
        kana: "ひつぜん",
        meaning: "inevitable, necessary",
        JLPT: 1
    },
    {
        kanji: "一息",
        kana: "ひといき",
        meaning: "puffy, a breath, a pause, an effort",
        JLPT: 1
    },
    {
        kanji: "単",
        kana: "ひとえ",
        meaning: "one layer, single",
        JLPT: 1
    },
    {
        kanji: "人柄",
        kana: "ひとがら",
        meaning: "personality, character, personal appearance, gentility",
        JLPT: 1
    },
    {
        kanji: "一頃",
        kana: "ひところ",
        meaning: "once, some time ago",
        JLPT: 1
    },
    {
        kanji: "人質",
        kana: "ひとじち",
        meaning: "hostage, prisoner",
        JLPT: 1
    },
    {
        kanji: "一筋",
        kana: "ひとすき",
        meaning: "a line, earnestly, blindly, straightforwardly",
        JLPT: 1
    },
    {
        kanji: "一まず",
        kana: "ひとまず",
        meaning: "for the present, once, in outline",
        JLPT: 1
    },
    {
        kanji: "一人でに",
        kana: "ひとりでに",
        meaning: "by itself, automatically, naturally",
        JLPT: 1
    },
    {
        kanji: "酷い",
        kana: "ひどい",
        meaning: "cruel, awful, severe, very bad, serious, terrible, heavy, violent",
        JLPT: 1
    },
    {
        kanji: "日取り",
        kana: "ひどり",
        meaning: "fixed date, appointed day",
        JLPT: 1
    },
    {
        kanji: "雛",
        kana: "ひな",
        meaning: "young bird, chick, doll",
        JLPT: 1
    },
    {
        kanji: "日向",
        kana: "ひなた",
        meaning: "sunny place, in the sun",
        JLPT: 1
    },
    {
        kanji: "非難",
        kana: "ひなん",
        meaning: "blame, attack, criticism",
        JLPT: 1
    },
    {
        kanji: "避難",
        kana: "ひなん",
        meaning: "taking refuge, finding shelter",
        JLPT: 1
    },
    {
        kanji: "日の丸",
        kana: "ひのまる",
        meaning: "the Japanese flag",
        JLPT: 1
    },
    {
        kanji: "火花",
        kana: "ひばな",
        meaning: "spark",
        JLPT: 1
    },
    {
        kanji: "日々",
        kana: "ひび",
        meaning: "every day, daily, day after day",
        JLPT: 1
    },
    {
        kanji: "悲鳴",
        kana: "ひめい",
        meaning: "shriek, scream",
        JLPT: 1
    },
    {
        kanji: "百科事典",
        kana: "ひゃっかじてん",
        meaning: "encyclopedia",
        JLPT: 1
    },
    {
        kanji: "百科辞典",
        kana: "ひゃっかじてん",
        meaning: "encyclopedia",
        JLPT: 1
    },
    {
        kanji: "冷やかす",
        kana: "ひやかす",
        meaning: "to banter, to make fun of, to jeer at, to cool, to refrigerate",
        JLPT: 1
    },
    {
        kanji: "日焼け",
        kana: "ひやけ",
        meaning: "sunburn",
        JLPT: 1
    },
    {
        kanji: "票",
        kana: "ひょう",
        meaning: "label, ballot, ticket, sign",
        JLPT: 1
    },
    {
        kanji: "標語",
        kana: "ひょうご",
        meaning: "motto, slogan, catchword",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ひょっと",
        meaning: "possibly, accidentally",
        JLPT: 1
    },
    {
        kanji: "平たい",
        kana: "ひらたい",
        meaning: "flat, even, level, simple, plain",
        JLPT: 1
    },
    {
        kanji: "比率",
        kana: "ひりつ",
        meaning: "ratio, proportion, percentage",
        JLPT: 1
    },
    {
        kanji: "肥料",
        kana: "ひりょう",
        meaning: "manure, fertilizer",
        JLPT: 1
    },
    {
        kanji: "比例",
        kana: "ひれい",
        meaning: "proportion",
        JLPT: 1
    },
    {
        kanji: "疲労",
        kana: "ひろう",
        meaning: "fatigue, weariness",
        JLPT: 1
    },
    {
        kanji: "広まる",
        kana: "ひろまる",
        meaning: "to spread, to be propagated",
        JLPT: 1
    },
    {
        kanji: "貧困",
        kana: "ひんこん",
        meaning: "poverty, lack",
        JLPT: 1
    },
    {
        kanji: "品質",
        kana: "ひんしつ",
        meaning: "quality",
        JLPT: 1
    },
    {
        kanji: "品種",
        kana: "ひんしゅ",
        meaning: "brand, kind, description",
        JLPT: 1
    },
    {
        kanji: "貧弱",
        kana: "ひんじゃく",
        meaning: "poor, meagre, insubstantial",
        JLPT: 1
    },
    {
        kanji: "頻繁",
        kana: "ひんぱん",
        meaning: "frequency",
        JLPT: 1
    },
    {
        kanji: "美",
        kana: "び",
        meaning: "beauty",
        JLPT: 1
    },
    {
        kanji: "微笑",
        kana: "びしょう",
        meaning: "smile",
        JLPT: 1
    },
    {
        kanji: "美術",
        kana: "びじゅつ",
        meaning: "art, fine arts",
        JLPT: 1
    },
    {
        kanji: "吃驚",
        kana: "びっくり",
        meaning: "be surprised, be amazed, be frightened, astonishment",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "びっしょり",
        meaning: "wet through, drenched",
        JLPT: 1
    },
    {
        kanji: "描写",
        kana: "びょうしゃ",
        meaning: "depiction, description, portrayal",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "びり",
        meaning: "last on the list, at the bottom",
        JLPT: 1
    },
    {
        kanji: "微量",
        kana: "びりょう",
        meaning: "minuscule amount, extremely small quantity",
        JLPT: 1
    },
    {
        kanji: "敏感",
        kana: "びんかん",
        meaning: "sensibility, susceptibility, sensitive (to), well attuned to",
        JLPT: 1
    },
    {
        kanji: "貧乏",
        kana: "びんぼう",
        meaning: "poverty, destitute, poor",
        JLPT: 1
    },
    {
        kanji: "歩",
        kana: "ふ",
        meaning: "pawn (in chess or shogi)",
        JLPT: 1
    },
    {
        kanji: "不意",
        kana: "ふい",
        meaning: "sudden, abrupt, unexpected, unforeseen",
        JLPT: 1
    },
    {
        kanji: "封",
        kana: "ふう",
        meaning: "seal",
        JLPT: 1
    },
    {
        kanji: "封鎖",
        kana: "ふうさ",
        meaning: "blockade, freezing (funds)",
        JLPT: 1
    },
    {
        kanji: "風習",
        kana: "ふうしゅう",
        meaning: "custom",
        JLPT: 1
    },
    {
        kanji: "風俗",
        kana: "ふうぞく",
        meaning: "1. manners, customs, 2. sex service, sex industry",
        JLPT: 1
    },
    {
        kanji: "風土",
        kana: "ふうど",
        meaning: "natural features, topography, climate, spiritual features",
        JLPT: 1
    },
    {
        kanji: "不可欠",
        kana: "ふかけつ",
        meaning: "indispensable, essential",
        JLPT: 1
    },
    {
        kanji: "深める",
        kana: "ふかめる",
        meaning: "to deepen, to heighten, to intensify",
        JLPT: 1
    },
    {
        kanji: "不吉",
        kana: "ふきつ",
        meaning: "ominous, sinister, bad luck, ill omen, inauspiciousness",
        JLPT: 1
    },
    {
        kanji: "不況",
        kana: "ふきょう",
        meaning: "recession, depression, slump",
        JLPT: 1
    },
    {
        kanji: "布巾",
        kana: "ふきん",
        meaning: "tea-towel, dish cloth",
        JLPT: 1
    },
    {
        kanji: "福",
        kana: "ふく",
        meaning: "good fortune",
        JLPT: 1
    },
    {
        kanji: "復旧",
        kana: "ふくきゅう",
        meaning: "restoration, restitution, rehabilitation",
        JLPT: 1
    },
    {
        kanji: "複合",
        kana: "ふくごう",
        meaning: "composite, complex",
        JLPT: 1
    },
    {
        kanji: "福祉",
        kana: "ふくし",
        meaning: "welfare, well-being",
        JLPT: 1
    },
    {
        kanji: "覆面",
        kana: "ふくめん",
        meaning: "mask, veil, disguise",
        JLPT: 1
    },
    {
        kanji: "膨れる",
        kana: "ふくれる",
        meaning: "to get cross, to get sulky, to swell (out), to expand, to be inflated, to distend, to bulge",
        JLPT: 1
    },
    {
        kanji: "不景気",
        kana: "ふけいき",
        meaning: "business recession, hard times, depression, gloom, sullenness, cheerlessness",
        JLPT: 1
    },
    {
        kanji: "老ける",
        kana: "ふける",
        meaning: "to age",
        JLPT: 1
    },
    {
        kanji: "布告",
        kana: "ふこく",
        meaning: "edict, ordinance, proclamation",
        JLPT: 1
    },
    {
        kanji: "富豪",
        kana: "ふごう",
        meaning: "wealthy person, millionaire",
        JLPT: 1
    },
    {
        kanji: "負債",
        kana: "ふさい",
        meaning: "debt, liabilities",
        JLPT: 1
    },
    {
        kanji: "相応しい",
        kana: "ふさわしい",
        meaning: "appropriate",
        JLPT: 1
    },
    {
        kanji: "不在",
        kana: "ふざい",
        meaning: "absence",
        JLPT: 1
    },
    {
        kanji: "不山戯る",
        kana: "ふざける",
        meaning: "to romp, to gambol, to frolic, to joke, to make fun of, to flirt",
        JLPT: 1
    },
    {
        kanji: "負傷",
        kana: "ふしょう",
        meaning: "injury, wound",
        JLPT: 1
    },
    {
        kanji: "不審",
        kana: "ふしん",
        meaning: "incomplete understanding, doubt, question, distrust, suspicion, strangeness, infidelity",
        JLPT: 1
    },
    {
        kanji: "不振",
        kana: "ふしん",
        meaning: "dullness, depression, slump, stagnation",
        JLPT: 1
    },
    {
        kanji: "不順",
        kana: "ふじゅん",
        meaning: "irregularity, unseasonableness",
        JLPT: 1
    },
    {
        kanji: "付属",
        kana: "ふぞく",
        meaning: "attached, belonging, affiliated, annexed, associated, subordinate, incidental, dependent, auxiliary",
        JLPT: 1
    },
    {
        kanji: "負担",
        kana: "ふたん",
        meaning: "burden, charge, responsibility",
        JLPT: 1
    },
    {
        kanji: "不調",
        kana: "ふちょう",
        meaning: "bad condition, not to work out (ie a deal), disagreement, break-off, disorder, slump, out of form",
        JLPT: 1
    },
    {
        kanji: "復活",
        kana: "ふっかつ",
        meaning: "revival (e.g. musical), restoration",
        JLPT: 1
    },
    {
        kanji: "復興",
        kana: "ふっこう",
        meaning: "revival, renaissance, reconstruction",
        JLPT: 1
    },
    {
        kanji: "沸騰",
        kana: "ふっとう",
        meaning: "boiling, seething",
        JLPT: 1
    },
    {
        kanji: "仏",
        kana: "ふつ",
        meaning: "French",
        JLPT: 1
    },
    {
        kanji: "不図",
        kana: "ふと",
        meaning: "suddenly, casually, accidentally, incidentally, unexpectedly, unintentionally",
        JLPT: 1
    },
    {
        kanji: "不当",
        kana: "ふとう",
        meaning: "injustice, impropriety, unreasonableness, undeservedness, unfair, invalid",
        JLPT: 1
    },
    {
        kanji: "不動産",
        kana: "ふどうさん",
        meaning: "real estate",
        JLPT: 1
    },
    {
        kanji: "赴任",
        kana: "ふにん",
        meaning: "(proceeding to) new appointment",
        JLPT: 1
    },
    {
        kanji: "腐敗",
        kana: "ふはい",
        meaning: "decay, depravity",
        JLPT: 1
    },
    {
        kanji: "不評",
        kana: "ふひょう",
        meaning: "bad reputation, disgrace, unpopularity",
        JLPT: 1
    },
    {
        kanji: "不便",
        kana: "ふびん",
        meaning: "pity, compassion",
        JLPT: 1
    },
    {
        kanji: "不服",
        kana: "ふふく",
        meaning: "dissatisfaction, discontent, disapproval, objection, complaint, protest, disagreement",
        JLPT: 1
    },
    {
        kanji: "普遍",
        kana: "ふへん",
        meaning: "universality, ubiquity, omnipresence",
        JLPT: 1
    },
    {
        kanji: "踏まえる",
        kana: "ふまえる",
        meaning: "to be based on, to have origin in",
        JLPT: 1
    },
    {
        kanji: "文",
        kana: "ふみ",
        meaning: "letter, writings",
        JLPT: 1
    },
    {
        kanji: "不明",
        kana: "ふめい",
        meaning: "unknown, obscure, indistinct, uncertain, ambiguous, ignorant, lack of wisdom, anonymous, unidentified",
        JLPT: 1
    },
    {
        kanji: "扶養",
        kana: "ふよう",
        meaning: "support, maintenance",
        JLPT: 1
    },
    {
        kanji: "振り",
        kana: "ふり",
        meaning: "pretence, show, appearance",
        JLPT: 1
    },
    {
        kanji: "振り出し",
        kana: "ふりだし",
        meaning: "outset, starting point, drawing or issuing (draft)",
        JLPT: 1
    },
    {
        kanji: "不良",
        kana: "ふりょう",
        meaning: "badness, delinquent, inferiority, failure",
        JLPT: 1
    },
    {
        kanji: "浮力",
        kana: "ふりょく",
        meaning: "buoyancy, floating power",
        JLPT: 1
    },
    {
        kanji: "震わせる",
        kana: "ふるわせる",
        meaning: "to be shaking, to be trembling",
        JLPT: 1
    },
    {
        kanji: "付録",
        kana: "ふろく",
        meaning: "appendix, supplement",
        JLPT: 1
    },
    {
        kanji: "分",
        kana: "ふん",
        meaning: "minute",
        JLPT: 1
    },
    {
        kanji: "憤慨",
        kana: "ふんがい",
        meaning: "indignation, resentment",
        JLPT: 1
    },
    {
        kanji: "紛失",
        kana: "ふんしつ",
        meaning: "losing something",
        JLPT: 1
    },
    {
        kanji: "噴出",
        kana: "ふんしゅつ",
        meaning: "spewing, gushing, spouting, eruption, effusion",
        JLPT: 1
    },
    {
        kanji: "紛争",
        kana: "ふんそう",
        meaning: "dispute, trouble, strife",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ふんだん",
        meaning: "plentiful, abundant, lavish",
        JLPT: 1
    },
    {
        kanji: "奮闘",
        kana: "ふんとう",
        meaning: "hard struggle, strenuous effort",
        JLPT: 1
    },
    {
        kanji: "粉末",
        kana: "ふんまつ",
        meaning: "fine powder",
        JLPT: 1
    },
    {
        kanji: "部",
        kana: "ぶ",
        meaning: "department, part, category, counter for copies of a newspaper or magazine",
        JLPT: 1
    },
    {
        kanji: "部下",
        kana: "ぶか",
        meaning: "subordinate person",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぶかぶか",
        meaning: "too big, baggy",
        JLPT: 1
    },
    {
        kanji: "侮辱",
        kana: "ぶじょく",
        meaning: "insult, contempt, slight",
        JLPT: 1
    },
    {
        kanji: "武装",
        kana: "ぶそう",
        meaning: "arms, armament, armed",
        JLPT: 1
    },
    {
        kanji: "斑",
        kana: "ぶち",
        meaning: "spots, speckles, mottles",
        JLPT: 1
    },
    {
        kanji: "物資",
        kana: "ぶっし",
        meaning: "goods, materials",
        JLPT: 1
    },
    {
        kanji: "物体",
        kana: "ぶったい",
        meaning: "body, object",
        JLPT: 1
    },
    {
        kanji: "物議",
        kana: "ぶつぎ",
        meaning: "public discussion (criticism)",
        JLPT: 1
    },
    {
        kanji: "打付ける",
        kana: "ぶつける",
        meaning: "to knock, to run into, to nail on, to strike hard, to hit and attack",
        JLPT: 1
    },
    {
        kanji: "仏像",
        kana: "ぶつぞう",
        meaning: "Buddhist image (statue)",
        JLPT: 1
    },
    {
        kanji: "無難",
        kana: "ぶなん",
        meaning: "safety, security",
        JLPT: 1
    },
    {
        kanji: "部門",
        kana: "ぶもん",
        meaning: "class, group, category, department, field, branch",
        JLPT: 1
    },
    {
        kanji: "ぶら下げる",
        kana: "ぶらさげる",
        meaning: "to hang, to suspend, to dangle, to swing",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぶらぶら",
        meaning: "dangle heavily, swing, sway to and fro, aimlessly, idly, lazily, loiter, loaf, be idle, stroll idly",
        JLPT: 1
    },
    {
        kanji: "武力",
        kana: "ぶりょく",
        meaning: "armed might, military power, the sword, force",
        JLPT: 1
    },
    {
        kanji: "無礼",
        kana: "ぶれい",
        meaning: "impolite, rude",
        JLPT: 1
    },
    {
        kanji: "文化財",
        kana: "ぶんかざい",
        meaning: "cultural assets, cultural property",
        JLPT: 1
    },
    {
        kanji: "分業",
        kana: "ぶんぎょう",
        meaning: "division of labor, specialization, assembly-line production",
        JLPT: 1
    },
    {
        kanji: "文語",
        kana: "ぶんご",
        meaning: "written language, literary language",
        JLPT: 1
    },
    {
        kanji: "分散",
        kana: "ぶんさん",
        meaning: "dispersion, decentralization, variance (statistics)",
        JLPT: 1
    },
    {
        kanji: "分子",
        kana: "ぶんし",
        meaning: "numerator, molecule",
        JLPT: 1
    },
    {
        kanji: "文書",
        kana: "ぶんしょ",
        meaning: "document, writing, letter, note, records, archives",
        JLPT: 1
    },
    {
        kanji: "分担",
        kana: "ぶんたん",
        meaning: "apportionment, sharing",
        JLPT: 1
    },
    {
        kanji: "分配",
        kana: "ぶんぱい",
        meaning: "division, sharing",
        JLPT: 1
    },
    {
        kanji: "分母",
        kana: "ぶんぼ",
        meaning: "denominator",
        JLPT: 1
    },
    {
        kanji: "分離",
        kana: "ぶんり",
        meaning: "separation, detachment, segregation, isolation",
        JLPT: 1
    },
    {
        kanji: "分裂",
        kana: "ぶんれつ",
        meaning: "split, division, break up",
        JLPT: 1
    },
    {
        kanji: "兵器",
        kana: "へいき",
        meaning: "arms, weapons, ordinance",
        JLPT: 1
    },
    {
        kanji: "閉口",
        kana: "へいこう",
        meaning: "shut mouth",
        JLPT: 1
    },
    {
        kanji: "平行",
        kana: "へいこう",
        meaning: "(going) side by side, concurrent, abreast, at the same time, occurring together, parallel, parallelism",
        JLPT: 1
    },
    {
        kanji: "閉鎖",
        kana: "へいさ",
        meaning: "closing, closure, shutdown, lockout, unsociable",
        JLPT: 1
    },
    {
        kanji: "兵士",
        kana: "へいし",
        meaning: "soldier",
        JLPT: 1
    },
    {
        kanji: "平常",
        kana: "へいじょう",
        meaning: "normal, usual",
        JLPT: 1
    },
    {
        kanji: "平方",
        kana: "へいほう",
        meaning: "square (e.g. metre), square",
        JLPT: 1
    },
    {
        kanji: "並列",
        kana: "へいれつ",
        meaning: "arrangement, parallel, abreast",
        JLPT: 1
    },
    {
        kanji: "辟易",
        kana: "へきえき",
        meaning: "wince, shrink back, succumbing to, being frightened, disconcerted",
        JLPT: 1
    },
    {
        kanji: "臍",
        kana: "へそ",
        meaning: "navel, belly-button",
        JLPT: 1
    },
    {
        kanji: "隔たる",
        kana: "へだたる",
        meaning: "to be distant",
        JLPT: 1
    },
    {
        kanji: "謙る",
        kana: "へりくだる",
        meaning: "to deprecate oneself and praise the listener",
        JLPT: 1
    },
    {
        kanji: "経る",
        kana: "へる",
        meaning: "to pass, to elapse, to experience",
        JLPT: 1
    },
    {
        kanji: "編",
        kana: "へん",
        meaning: "compilation, editing, completed poem, book, part of book",
        JLPT: 1
    },
    {
        kanji: "偏",
        kana: "へん",
        meaning: "side, left radical of a character, inclining, inclining toward, biased",
        JLPT: 1
    },
    {
        kanji: "変革",
        kana: "へんかく",
        meaning: "change, reform, revolution, upheaval, (the) Reformation",
        JLPT: 1
    },
    {
        kanji: "返還",
        kana: "へんかん",
        meaning: "return, restoration",
        JLPT: 1
    },
    {
        kanji: "偏見",
        kana: "へんけん",
        meaning: "prejudice, narrow view",
        JLPT: 1
    },
    {
        kanji: "返済",
        kana: "へんさい",
        meaning: "repayment",
        JLPT: 1
    },
    {
        kanji: "変遷",
        kana: "へんせん",
        meaning: "change, transition, vicissitudes",
        JLPT: 1
    },
    {
        kanji: "返答",
        kana: "へんとう",
        meaning: "reply",
        JLPT: 1
    },
    {
        kanji: "変動",
        kana: "へんどう",
        meaning: "change, fluctuation",
        JLPT: 1
    },
    {
        kanji: "弁解",
        kana: "べんかい",
        meaning: "explanation, justification, defence, excuse",
        JLPT: 1
    },
    {
        kanji: "便宜",
        kana: "べんぎ",
        meaning: "convenience, accommodation, advantage, expedience",
        JLPT: 1
    },
    {
        kanji: "弁護",
        kana: "べんご",
        meaning: "defense, pleading, advocacy",
        JLPT: 1
    },
    {
        kanji: "弁償",
        kana: "べんしょう",
        meaning: "next word, compensation, reparation, indemnity, reimbursement",
        JLPT: 1
    },
    {
        kanji: "弁論",
        kana: "べんろん",
        meaning: "discussion, debate, argument",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぺこぺこ",
        meaning: "fawn, be very hungry",
        JLPT: 1
    },
    {
        kanji: "穂",
        kana: "ほ",
        meaning: "ear (of plant), head (of plant)",
        JLPT: 1
    },
    {
        kanji: "保育",
        kana: "ほいく",
        meaning: "nursing, nurturing, rearing, lactation, suckling",
        JLPT: 1
    },
    {
        kanji: "倣",
        kana: "ほう",
        meaning: "imitate, follow, emulate",
        JLPT: 1
    },
    {
        kanji: "法案",
        kana: "ほうあん",
        meaning: "bill (law)",
        JLPT: 1
    },
    {
        kanji: "崩壊",
        kana: "ほうかい",
        meaning: "collapse, decay (physics), crumbling, breaking down, caving in",
        JLPT: 1
    },
    {
        kanji: "法学",
        kana: "ほうがく",
        meaning: "law, jurisprudence",
        JLPT: 1
    },
    {
        kanji: "放棄",
        kana: "ほうき",
        meaning: "abandonment, renunciation, abdication (responsibility right)",
        JLPT: 1
    },
    {
        kanji: "宝器",
        kana: "ほうき",
        meaning: "treasured article or vessel, outstanding individual",
        JLPT: 1
    },
    {
        kanji: "封建",
        kana: "ほうけん",
        meaning: "feudalistic",
        JLPT: 1
    },
    {
        kanji: "豊作",
        kana: "ほうさく",
        meaning: "abundant harvest, bumper crop",
        JLPT: 1
    },
    {
        kanji: "方策",
        kana: "ほうさく",
        meaning: "plan, policy",
        JLPT: 1
    },
    {
        kanji: "奉仕",
        kana: "ほうし",
        meaning: "attendance, service",
        JLPT: 1
    },
    {
        kanji: "方式",
        kana: "ほうしき",
        meaning: "form, method, system",
        JLPT: 1
    },
    {
        kanji: "放射",
        kana: "ほうしゃ",
        meaning: "radiation, emission",
        JLPT: 1
    },
    {
        kanji: "放射能",
        kana: "ほうしゃのう",
        meaning: "radioactivity",
        JLPT: 1
    },
    {
        kanji: "報酬",
        kana: "ほうしゅう",
        meaning: "remuneration, recompense, reward, toll",
        JLPT: 1
    },
    {
        kanji: "放出",
        kana: "ほうしゅつ",
        meaning: "release, emit",
        JLPT: 1
    },
    {
        kanji: "報じる",
        kana: "ほうじる",
        meaning: "to inform, to report",
        JLPT: 1
    },
    {
        kanji: "報ずる",
        kana: "ほうずる",
        meaning: "to inform, to report",
        JLPT: 1
    },
    {
        kanji: "放置",
        kana: "ほうち",
        meaning: "leave as is, leave to chance, leave alone, neglect",
        JLPT: 1
    },
    {
        kanji: "法廷",
        kana: "ほうてい",
        meaning: "courtroom",
        JLPT: 1
    },
    {
        kanji: "報道",
        kana: "ほうどう",
        meaning: "information, report",
        JLPT: 1
    },
    {
        kanji: "褒美",
        kana: "ほうび",
        meaning: "reward, prize",
        JLPT: 1
    },
    {
        kanji: "葬る",
        kana: "ほうむる",
        meaning: "to bury, to inter, to entomb, to consign to oblivion, to shelve",
        JLPT: 1
    },
    {
        kanji: "放り込む",
        kana: "ほうりこむ",
        meaning: "to throw into",
        JLPT: 1
    },
    {
        kanji: "放り出す",
        kana: "ほうりだす",
        meaning: "to throw out, to fire, to expel, to give up, to abandon, to neglect",
        JLPT: 1
    },
    {
        kanji: "飽和",
        kana: "ほうわ",
        meaning: "saturation",
        JLPT: 1
    },
    {
        kanji: "保温",
        kana: "ほおん",
        meaning: "retaining warmth, keeping heat in, heat insulation",
        JLPT: 1
    },
    {
        kanji: "捕獲",
        kana: "ほかく",
        meaning: "capture, seizure",
        JLPT: 1
    },
    {
        kanji: "保管",
        kana: "ほかん",
        meaning: "charge, custody, safekeeping, deposit, storage",
        JLPT: 1
    },
    {
        kanji: "補給",
        kana: "ほきゅう",
        meaning: "supply, supplying, replenishment",
        JLPT: 1
    },
    {
        kanji: "補強",
        kana: "ほきょう",
        meaning: "compensation, reinforcement",
        JLPT: 1
    },
    {
        kanji: "保険",
        kana: "ほけん",
        meaning: "insurance, guarantee",
        JLPT: 1
    },
    {
        kanji: "捕鯨",
        kana: "ほげい",
        meaning: "whaling, whale fishing",
        JLPT: 1
    },
    {
        kanji: "誇る",
        kana: "ほこる",
        meaning: "to boast of, to be proud of",
        JLPT: 1
    },
    {
        kanji: "綻びる",
        kana: "ほころびる",
        meaning: "to come apart at the seams, to begin to open, to smile broadly",
        JLPT: 1
    },
    {
        kanji: "保護",
        kana: "ほご",
        meaning: "care, protection, shelter, guardianship, favor, patronage",
        JLPT: 1
    },
    {
        kanji: "乾",
        kana: "ほし",
        meaning: "dried, cured",
        JLPT: 1
    },
    {
        kanji: "干し物",
        kana: "ほしもの",
        meaning: "dried washing (clothes)",
        JLPT: 1
    },
    {
        kanji: "保守",
        kana: "ほしゅ",
        meaning: "conservative, maintaining",
        JLPT: 1
    },
    {
        kanji: "保障",
        kana: "ほしょう",
        meaning: "guarantee, security, assurance, pledge, warranty",
        JLPT: 1
    },
    {
        kanji: "補償",
        kana: "ほしょう",
        meaning: "compensation, reparation",
        JLPT: 1
    },
    {
        kanji: "補充",
        kana: "ほじゅう",
        meaning: "supplementation, supplement, replenishment, replenishing",
        JLPT: 1
    },
    {
        kanji: "補助",
        kana: "ほじょ",
        meaning: "assistance, support, aid, auxiliary",
        JLPT: 1
    },
    {
        kanji: "舗装",
        kana: "ほそう",
        meaning: "pavement, road surface",
        JLPT: 1
    },
    {
        kanji: "補足",
        kana: "ほそく",
        meaning: "supplement, complement",
        JLPT: 1
    },
    {
        kanji: "発作",
        kana: "ほっさ",
        meaning: "fit, spasm",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ほっと",
        meaning: "feel relieved",
        JLPT: 1
    },
    {
        kanji: "頬っぺた",
        kana: "ほっぺた",
        meaning: "cheek",
        JLPT: 1
    },
    {
        kanji: "辺り",
        kana: "ほとり",
        meaning: "(in the) neighbourhood, vicinity, nearby",
        JLPT: 1
    },
    {
        kanji: "殆ど",
        kana: "ほとんど",
        meaning: "mostly, almost",
        JLPT: 1
    },
    {
        kanji: "解く",
        kana: "ほどく",
        meaning: "to unfasten",
        JLPT: 1
    },
    {
        kanji: "施す",
        kana: "ほどこす",
        meaning: "to donate, to give, to conduct, to apply, to perform",
        JLPT: 1
    },
    {
        kanji: "保母",
        kana: "ほぼ",
        meaning: "day care worker in a kindergarten nursery school etc.",
        JLPT: 1
    },
    {
        kanji: "保養",
        kana: "ほよう",
        meaning: "health preservation, recuperation, recreation",
        JLPT: 1
    },
    {
        kanji: "捕吏",
        kana: "ほり",
        meaning: "constable",
        JLPT: 1
    },
    {
        kanji: "捕虜",
        kana: "ほりょ",
        meaning: "prisoner (of war)",
        JLPT: 1
    },
    {
        kanji: "滅びる",
        kana: "ほろびる",
        meaning: "to be ruined, to go under, to perish, to be destroyed",
        JLPT: 1
    },
    {
        kanji: "滅ぼす",
        kana: "ほろぼす",
        meaning: "to destroy, to overthrow, to wreck, to ruin",
        JLPT: 1
    },
    {
        kanji: "本格",
        kana: "ほんかく",
        meaning: "propriety, fundamental rules",
        JLPT: 1
    },
    {
        kanji: "本館",
        kana: "ほんかん",
        meaning: "main building",
        JLPT: 1
    },
    {
        kanji: "本気",
        kana: "ほんき",
        meaning: "seriousness, truth, sanctity",
        JLPT: 1
    },
    {
        kanji: "本質",
        kana: "ほんしつ",
        meaning: "essence, true nature, reality",
        JLPT: 1
    },
    {
        kanji: "本体",
        kana: "ほんたい",
        meaning: "substance, real form, object of worship",
        JLPT: 1
    },
    {
        kanji: "本音",
        kana: "ほんね",
        meaning: "real intention, motive",
        JLPT: 1
    },
    {
        kanji: "本の",
        kana: "ほんの",
        meaning: "mere, only, just",
        JLPT: 1
    },
    {
        kanji: "本能",
        kana: "ほんのう",
        meaning: "instinct",
        JLPT: 1
    },
    {
        kanji: "本場",
        kana: "ほんば",
        meaning: "home, habitat, center, best place, genuine",
        JLPT: 1
    },
    {
        kanji: "本文",
        kana: "ほんぶん",
        meaning: "text (of document), body (of letter)",
        JLPT: 1
    },
    {
        kanji: "本名",
        kana: "ほんみょう",
        meaning: "real name",
        JLPT: 1
    },
    {
        kanji: "卯",
        kana: "ぼう",
        meaning: "fourth sign of Chinese zodiac (The Hare 5am-7am east February)",
        JLPT: 1
    },
    {
        kanji: "防衛",
        kana: "ぼうえい",
        meaning: "defense, protection, self-defense",
        JLPT: 1
    },
    {
        kanji: "防火",
        kana: "ぼうか",
        meaning: "fire prevention, fire fighting, fire proof",
        JLPT: 1
    },
    {
        kanji: "妨害",
        kana: "ぼうがい",
        meaning: "disturbance, obstruction, hindrance, jamming, interference",
        JLPT: 1
    },
    {
        kanji: "紡績",
        kana: "ぼうせき",
        meaning: "spinning",
        JLPT: 1
    },
    {
        kanji: "呆然",
        kana: "ぼうぜん",
        meaning: "dumbfounded, overcome with surprise, in blank amazement",
        JLPT: 1
    },
    {
        kanji: "膨脹",
        kana: "ぼうちょう",
        meaning: "expansion, swelling, increase, growth",
        JLPT: 1
    },
    {
        kanji: "冒頭",
        kana: "ぼうとう",
        meaning: "beginning, start, outset",
        JLPT: 1
    },
    {
        kanji: "暴動",
        kana: "ぼうどう",
        meaning: "insurrection, rebellion, revolt, riot, uprising",
        JLPT: 1
    },
    {
        kanji: "暴風",
        kana: "ぼうふう",
        meaning: "storm, windstorm, gale",
        JLPT: 1
    },
    {
        kanji: "暴力",
        kana: "ぼうりょく",
        meaning: "violence",
        JLPT: 1
    },
    {
        kanji: "募金",
        kana: "ぼきん",
        meaning: "fund-raising, collection of funds",
        JLPT: 1
    },
    {
        kanji: "牧師",
        kana: "ぼくし",
        meaning: "pastor, minister, clergyman",
        JLPT: 1
    },
    {
        kanji: "母校",
        kana: "ぼこう",
        meaning: "alma mater",
        JLPT: 1
    },
    {
        kanji: "没収",
        kana: "ぼっしゅう",
        meaning: "forfeited",
        JLPT: 1
    },
    {
        kanji: "坊ちゃん",
        kana: "ぼっちゃん",
        meaning: "son (of others)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぼつぼつ",
        meaning: "gradually, here and there, spots, pimples",
        JLPT: 1
    },
    {
        kanji: "没落",
        kana: "ぼつらく",
        meaning: "ruin, fall, collapse",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぼやく",
        meaning: "to grumble, to complain",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ぼやける",
        meaning: "to become dim, to become blurred",
        JLPT: 1
    },
    {
        kanji: "藍褸",
        kana: "ぼろ",
        meaning: "rag, scrap, tattered clothes, fault (esp. in a pretense), defect, run-down or junky",
        JLPT: 1
    },
    {
        kanji: "枚",
        kana: "まい",
        meaning: "counter for flat objects (e.g. sheets of paper)",
        JLPT: 1
    },
    {
        kanji: "埋蔵",
        kana: "まいぞう",
        meaning: "buried property, treasure trove",
        JLPT: 1
    },
    {
        kanji: "舞う",
        kana: "まう",
        meaning: "to dance, to flutter about, to revolve",
        JLPT: 1
    },
    {
        kanji: "真上",
        kana: "まうえ",
        meaning: "just above, right overhead",
        JLPT: 1
    },
    {
        kanji: "前売り",
        kana: "まえうり",
        meaning: "advance sale, booking",
        JLPT: 1
    },
    {
        kanji: "前置き",
        kana: "まえおき",
        meaning: "preface, introduction",
        JLPT: 1
    },
    {
        kanji: "前もって",
        kana: "まえもって",
        meaning: "in advance, beforehand, previously",
        JLPT: 1
    },
    {
        kanji: "任す",
        kana: "まかす",
        meaning: "to entrust, to leave to a person",
        JLPT: 1
    },
    {
        kanji: "負かす",
        kana: "まかす",
        meaning: "to defeat",
        JLPT: 1
    },
    {
        kanji: "賄う",
        kana: "まかなう",
        meaning: "to give board to, to provide meals, to pay",
        JLPT: 1
    },
    {
        kanji: "曲がる",
        kana: "まがる",
        meaning: "to turn, to bend",
        JLPT: 1
    },
    {
        kanji: "巻",
        kana: "まき",
        meaning: "volume",
        JLPT: 1
    },
    {
        kanji: "紛らわしい",
        kana: "まぎらわしい",
        meaning: "confusing, misleading, equivocal, ambiguous",
        JLPT: 1
    },
    {
        kanji: "紛れる",
        kana: "まぎれる",
        meaning: "to be diverted, to slip into",
        JLPT: 1
    },
    {
        kanji: "膜",
        kana: "まく",
        meaning: "membrane, film",
        JLPT: 1
    },
    {
        kanji: "捲る",
        kana: "まくる",
        meaning: "verb suffix to indicate reckless abandon to the activity",
        JLPT: 1
    },
    {
        kanji: "真心",
        kana: "まこころ",
        meaning: "sincerity, devotion",
        JLPT: 1
    },
    {
        kanji: "誠",
        kana: "まこと",
        meaning: "truth, faith, fidelity, sincerity, trust, confidence, reliance, devotion",
        JLPT: 1
    },
    {
        kanji: "真に",
        kana: "まことに",
        meaning: "truly, actually, really",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "まごつく",
        meaning: "to be confused, to be flustered",
        JLPT: 1
    },
    {
        kanji: "正しく",
        kana: "まさしく",
        meaning: "surely, no doubt, evidently",
        JLPT: 1
    },
    {
        kanji: "正に",
        kana: "まさに",
        meaning: "correctly, surely",
        JLPT: 1
    },
    {
        kanji: "勝る",
        kana: "まさる",
        meaning: "to excel, to surpass, to outrival",
        JLPT: 1
    },
    {
        kanji: "増し",
        kana: "まし",
        meaning: "extra, additional, less objectionable, better, preferable",
        JLPT: 1
    },
    {
        kanji: "真下",
        kana: "ました",
        meaning: "right under, directly below",
        JLPT: 1
    },
    {
        kanji: "況して",
        kana: "まして",
        meaning: "still more, still less (with neg. verb), to say nothing of, not to mention",
        JLPT: 1
    },
    {
        kanji: "交える",
        kana: "まじえる",
        meaning: "to mix, to converse with, to cross (swords)",
        JLPT: 1
    },
    {
        kanji: "交わる",
        kana: "まじわる",
        meaning: "to cross, to intersect, to associate with, to mingle with, to interest, to join",
        JLPT: 1
    },
    {
        kanji: "麻酔",
        kana: "ますい",
        meaning: "anaesthesia",
        JLPT: 1
    },
    {
        kanji: "益々",
        kana: "ますます",
        meaning: "increasingly, more and more",
        JLPT: 1
    },
    {
        kanji: "不味い",
        kana: "まずい",
        meaning: "unappetising, unpleasant (taste appearance situation), ugly, unskilful, awkward, bungling, unwise, untime",
        JLPT: 1
    },
    {
        kanji: "股",
        kana: "また",
        meaning: "groin, crotch, thigh",
        JLPT: 1
    },
    {
        kanji: "跨がる",
        kana: "またがる",
        meaning: "to extend over or into, to straddle",
        JLPT: 1
    },
    {
        kanji: "跨ぐ",
        kana: "またぐ",
        meaning: "to straddle",
        JLPT: 1
    },
    {
        kanji: "瞬き",
        kana: "またたき",
        meaning: "wink, twinkling (of stars), flicker (of light)",
        JLPT: 1
    },
    {
        kanji: "待ち合わせ",
        kana: "まちあわせ",
        meaning: "appointment",
        JLPT: 1
    },
    {
        kanji: "間違う",
        kana: "まちがう",
        meaning: "to make a mistake, to be incorrect, to be mistaken",
        JLPT: 1
    },
    {
        kanji: "待ち遠しい",
        kana: "まちどおしい",
        meaning: "looking forward to",
        JLPT: 1
    },
    {
        kanji: "待ち望む",
        kana: "まちのぞむ",
        meaning: "to look anxiously for, to wait eagerly for",
        JLPT: 1
    },
    {
        kanji: "区々",
        kana: "まちまち",
        meaning: "1. several, various, divergent, conflicting, different, diverse, 2. trivial",
        JLPT: 1
    },
    {
        kanji: "末期",
        kana: "まっき",
        meaning: "closing years (period days), last stage",
        JLPT: 1
    },
    {
        kanji: "真っ二つ",
        kana: "まっぷたつ",
        meaning: "in two equal parts",
        JLPT: 1
    },
    {
        kanji: "的",
        kana: "まと",
        meaning: "mark, target",
        JLPT: 1
    },
    {
        kanji: "纏まり",
        kana: "まとまり",
        meaning: "conclusion, settlement, consistency",
        JLPT: 1
    },
    {
        kanji: "纏め",
        kana: "まとめ",
        meaning: "settlement, conclusion",
        JLPT: 1
    },
    {
        kanji: "免れる",
        kana: "まぬかれる",
        meaning: "to escape from, to be rescued from, to avoid, to evade, to avert, to elude, to be exempted, to be relieved",
        JLPT: 1
    },
    {
        kanji: "招き",
        kana: "まねき",
        meaning: "invitation",
        JLPT: 1
    },
    {
        kanji: "麻痺",
        kana: "まひ",
        meaning: "paralysis, palsy, numbness, stupor",
        JLPT: 1
    },
    {
        kanji: "眩しい",
        kana: "まぶしい",
        meaning: "dazzling, radiant",
        JLPT: 1
    },
    {
        kanji: "目蓋",
        kana: "まぶた",
        meaning: "eyelid",
        JLPT: 1
    },
    {
        kanji: "間々",
        kana: "まま",
        meaning: "occasionally, frequently",
        JLPT: 1
    },
    {
        kanji: "間もなく",
        kana: "まもなく",
        meaning: "soon, before long, in a short time",
        JLPT: 1
    },
    {
        kanji: "眉",
        kana: "まゆ",
        meaning: "eyebrow",
        JLPT: 1
    },
    {
        kanji: "鞠",
        kana: "まり",
        meaning: "ball",
        JLPT: 1
    },
    {
        kanji: "丸ごと",
        kana: "まるごと",
        meaning: "in its entirety, whole, wholly",
        JLPT: 1
    },
    {
        kanji: "丸っきり",
        kana: "まるっきり",
        meaning: "completely, perfectly, just as if",
        JLPT: 1
    },
    {
        kanji: "丸で",
        kana: "まるで",
        meaning: "quite, entirely, completely, at all, as if, as though, so to speak",
        JLPT: 1
    },
    {
        kanji: "丸々",
        kana: "まるまる",
        meaning: "completely",
        JLPT: 1
    },
    {
        kanji: "丸める",
        kana: "まるめる",
        meaning: "to make round, to round off, to roll up, to curl up, to seduce, to cajole, to explain away",
        JLPT: 1
    },
    {
        kanji: "満月",
        kana: "まんげつ",
        meaning: "full moon",
        JLPT: 1
    },
    {
        kanji: "満場",
        kana: "まんじょう",
        meaning: "unanimous, whole audience",
        JLPT: 1
    },
    {
        kanji: "真ん中",
        kana: "まんなか",
        meaning: "middle, centre, mid-way",
        JLPT: 1
    },
    {
        kanji: "真ん前",
        kana: "まんまえ",
        meaning: "right in front, under the nose",
        JLPT: 1
    },
    {
        kanji: "真ん丸い",
        kana: "まんまるい",
        meaning: "perfectly circular",
        JLPT: 1
    },
    {
        kanji: "三",
        kana: "み",
        meaning: "(num) three",
        JLPT: 1
    },
    {
        kanji: "見合い",
        kana: "みあい",
        meaning: "formal marriage interview",
        JLPT: 1
    },
    {
        kanji: "見合わせる",
        kana: "みあわせる",
        meaning: "to exchange glances, to postpone, to suspend operations, to refrain from performing an action",
        JLPT: 1
    },
    {
        kanji: "見落とす",
        kana: "みおとす",
        meaning: "to overlook, to fail to notice",
        JLPT: 1
    },
    {
        kanji: "未開",
        kana: "みかい",
        meaning: "savage land, backward region, uncivilized",
        JLPT: 1
    },
    {
        kanji: "味覚",
        kana: "みかく",
        meaning: "taste, palate, sense of taste",
        JLPT: 1
    },
    {
        kanji: "見掛ける",
        kana: "みかける",
        meaning: "to (happen to) see, to notice, to catch sight of",
        JLPT: 1
    },
    {
        kanji: "三日月",
        kana: "みかずき",
        meaning: "new moon, crescent moon",
        JLPT: 1
    },
    {
        kanji: "見方",
        kana: "みかた",
        meaning: "viewpoint",
        JLPT: 1
    },
    {
        kanji: "見苦しい",
        kana: "みぐるしい",
        meaning: "unsightly, ugly",
        JLPT: 1
    },
    {
        kanji: "見込み",
        kana: "みこみ",
        meaning: "hope, prospects, expectation",
        JLPT: 1
    },
    {
        kanji: "未婚",
        kana: "みこん",
        meaning: "unmarried",
        JLPT: 1
    },
    {
        kanji: "惨め",
        kana: "みじめ",
        meaning: "miserable",
        JLPT: 1
    },
    {
        kanji: "未熟",
        kana: "みじゅく",
        meaning: "inexperience, unripeness, raw, unskilled, immature, inexperienced",
        JLPT: 1
    },
    {
        kanji: "微塵",
        kana: "みじん",
        meaning: "particle, atom",
        JLPT: 1
    },
    {
        kanji: "見すぼらしい",
        kana: "みすぼらしい",
        meaning: "shabby, seedy",
        JLPT: 1
    },
    {
        kanji: "見せびらかす",
        kana: "みせびらかす",
        meaning: "to show off, to flaunt",
        JLPT: 1
    },
    {
        kanji: "見せ物",
        kana: "みせもの",
        meaning: "show, exhibition",
        JLPT: 1
    },
    {
        kanji: "満たす",
        kana: "みたす",
        meaning: "to satisfy, to ingratiate, to fill, to fulfill",
        JLPT: 1
    },
    {
        kanji: "乱す",
        kana: "みだす",
        meaning: "to throw out of order, to disarrange, to disturb",
        JLPT: 1
    },
    {
        kanji: "乱れる",
        kana: "みだれる",
        meaning: "to get confused, to be disordered, to be disturbed",
        JLPT: 1
    },
    {
        kanji: "未知",
        kana: "みち",
        meaning: "not yet known",
        JLPT: 1
    },
    {
        kanji: "導く",
        kana: "みちびく",
        meaning: "to be guided, to be shown",
        JLPT: 1
    },
    {
        kanji: "身近",
        kana: "みぢか",
        meaning: "near oneself, close to one, familiar",
        JLPT: 1
    },
    {
        kanji: "密集",
        kana: "みっしゅう",
        meaning: "crowd, close formation, dense",
        JLPT: 1
    },
    {
        kanji: "密接",
        kana: "みっせつ",
        meaning: "related, connected, close, intimate",
        JLPT: 1
    },
    {
        kanji: "見っともない",
        kana: "みっともない",
        meaning: "shameful, indecent",
        JLPT: 1
    },
    {
        kanji: "蜜",
        kana: "みつ",
        meaning: "nectar, honey",
        JLPT: 1
    },
    {
        kanji: "密度",
        kana: "みつど",
        meaning: "density",
        JLPT: 1
    },
    {
        kanji: "見積り",
        kana: "みつもり",
        meaning: "estimation, quotation",
        JLPT: 1
    },
    {
        kanji: "未定",
        kana: "みてい",
        meaning: "not yet fixed, undecided, pending",
        JLPT: 1
    },
    {
        kanji: "見通し",
        kana: "みとおし",
        meaning: "perspective, unobstructed view, outlook, forecast, prospect, insight",
        JLPT: 1
    },
    {
        kanji: "源",
        kana: "みなもと",
        meaning: "source, origin",
        JLPT: 1
    },
    {
        kanji: "身なり",
        kana: "みなり",
        meaning: "personal appearance",
        JLPT: 1
    },
    {
        kanji: "峰",
        kana: "みね",
        meaning: "peak, ridge",
        JLPT: 1
    },
    {
        kanji: "見逃す",
        kana: "みのがす",
        meaning: "to miss, to overlook, to leave at large",
        JLPT: 1
    },
    {
        kanji: "見晴らし",
        kana: "みはらし",
        meaning: "view",
        JLPT: 1
    },
    {
        kanji: "身振り",
        kana: "みぶり",
        meaning: "gesture",
        JLPT: 1
    },
    {
        kanji: "見舞",
        kana: "みまい",
        meaning: "enquiry, expression of sympathy, expression of concern",
        JLPT: 1
    },
    {
        kanji: "脈",
        kana: "みゃく",
        meaning: "pulse",
        JLPT: 1
    },
    {
        kanji: "未練",
        kana: "みれん",
        meaning: "lingering affection, attachment, regret(s), reluctance",
        JLPT: 1
    },
    {
        kanji: "見渡す",
        kana: "みわたす",
        meaning: "to look out over, to survey (scene), to take an extensive view of",
        JLPT: 1
    },
    {
        kanji: "民主",
        kana: "みんしゅ",
        meaning: "democratic, the head of the nation",
        JLPT: 1
    },
    {
        kanji: "民宿",
        kana: "みんしゅく",
        meaning: "private home providing lodging for travelers",
        JLPT: 1
    },
    {
        kanji: "民族",
        kana: "みんぞく",
        meaning: "people, race, nation, racial customs, folk customs",
        JLPT: 1
    },
    {
        kanji: "民俗",
        kana: "みんぞく",
        meaning: "people, race, nation, racial customs, folk customs",
        JLPT: 1
    },
    {
        kanji: "六",
        kana: "む",
        meaning: "(num) six",
        JLPT: 1
    },
    {
        kanji: "無意味",
        kana: "むいみ",
        meaning: "nonsense, no meaning",
        JLPT: 1
    },
    {
        kanji: "向き",
        kana: "むき",
        meaning: "direction, situation, exposure, aspect, suitability",
        JLPT: 1
    },
    {
        kanji: "無口",
        kana: "むくち",
        meaning: "reticence",
        JLPT: 1
    },
    {
        kanji: "向け",
        kana: "むけ",
        meaning: "for ~, oriented towards ~",
        JLPT: 1
    },
    {
        kanji: "婿",
        kana: "むこ",
        meaning: "son-in-law",
        JLPT: 1
    },
    {
        kanji: "無効",
        kana: "むこう",
        meaning: "invalid, no effect, unavailable",
        JLPT: 1
    },
    {
        kanji: "無言",
        kana: "むごん",
        meaning: "silence",
        JLPT: 1
    },
    {
        kanji: "毟る",
        kana: "むしる",
        meaning: "to pluck, to pick, to tear",
        JLPT: 1
    },
    {
        kanji: "無邪気",
        kana: "むじゃき",
        meaning: "innocence, simple-mindedness",
        JLPT: 1
    },
    {
        kanji: "結び",
        kana: "むすび",
        meaning: "ending, conclusion, union",
        JLPT: 1
    },
    {
        kanji: "結び付き",
        kana: "むすびつき",
        meaning: "connection, relation",
        JLPT: 1
    },
    {
        kanji: "結び付く",
        kana: "むすびつく",
        meaning: "to be connected or related, to join together",
        JLPT: 1
    },
    {
        kanji: "結び付ける",
        kana: "むすびつける",
        meaning: "to combine, to join, to tie on, to attach with a knot",
        JLPT: 1
    },
    {
        kanji: "無線",
        kana: "むせん",
        meaning: "wireless, radio",
        JLPT: 1
    },
    {
        kanji: "無駄遣い",
        kana: "むだづかい",
        meaning: "waste money on, squander money on, flog a dead horse",
        JLPT: 1
    },
    {
        kanji: "無断",
        kana: "むだん",
        meaning: "without permission, without notice",
        JLPT: 1
    },
    {
        kanji: "無知",
        kana: "むち",
        meaning: "ignorance",
        JLPT: 1
    },
    {
        kanji: "無茶",
        kana: "むちゃ",
        meaning: "absurd, unreasonable, excessive, rash, absurdity, nonsense",
        JLPT: 1
    },
    {
        kanji: "無茶苦茶",
        kana: "むちゃくちゃ",
        meaning: "confused, jumbled, mixed up, unreasonable",
        JLPT: 1
    },
    {
        kanji: "空しい",
        kana: "むなしい",
        meaning: "vacant, futile, vain, void, empty, ineffective, lifeless",
        JLPT: 1
    },
    {
        kanji: "無念",
        kana: "むねん",
        meaning: "chagrin, regret",
        JLPT: 1
    },
    {
        kanji: "無能",
        kana: "むのう",
        meaning: "inefficiency, incompetence",
        JLPT: 1
    },
    {
        kanji: "無闇に",
        kana: "むやみに",
        meaning: "unreasonably, absurdly, recklessly, indiscreetly, at random",
        JLPT: 1
    },
    {
        kanji: "無用",
        kana: "むよう",
        meaning: "useless, futility, needlessness, unnecessariness",
        JLPT: 1
    },
    {
        kanji: "群がる",
        kana: "むらがる",
        meaning: "to swarm, to gather",
        JLPT: 1
    },
    {
        kanji: "無論",
        kana: "むろん",
        meaning: "of course, naturally",
        JLPT: 1
    },
    {
        kanji: "名産",
        kana: "めいさん",
        meaning: "noted product",
        JLPT: 1
    },
    {
        kanji: "名称",
        kana: "めいしょう",
        meaning: "name",
        JLPT: 1
    },
    {
        kanji: "命中",
        kana: "めいちゅう",
        meaning: "a hit",
        JLPT: 1
    },
    {
        kanji: "名簿",
        kana: "めいぼ",
        meaning: "register of names",
        JLPT: 1
    },
    {
        kanji: "名誉",
        kana: "めいよ",
        meaning: "honor, credit, prestige",
        JLPT: 1
    },
    {
        kanji: "明瞭",
        kana: "めいりょう",
        meaning: "clarity",
        JLPT: 1
    },
    {
        kanji: "明朗",
        kana: "めいろう",
        meaning: "bright, clear, cheerful",
        JLPT: 1
    },
    {
        kanji: "目方",
        kana: "めかた",
        meaning: "weight",
        JLPT: 1
    },
    {
        kanji: "恵み",
        kana: "めぐみ",
        meaning: "blessing",
        JLPT: 1
    },
    {
        kanji: "恵む",
        kana: "めぐむ",
        meaning: "to bless, to show mercy to",
        JLPT: 1
    },
    {
        kanji: "目覚しい",
        kana: "めざましい",
        meaning: "brilliant, splendid, striking, remarkable",
        JLPT: 1
    },
    {
        kanji: "目覚める",
        kana: "めざめる",
        meaning: "to wake up",
        JLPT: 1
    },
    {
        kanji: "召す",
        kana: "めす",
        meaning: "to call, to send for, to put on, to wear, to take (a bath), to ride in, to buy, to eat, to drink, to catch (a",
        JLPT: 1
    },
    {
        kanji: "雌",
        kana: "めす",
        meaning: "female (animal)",
        JLPT: 1
    },
    {
        kanji: "滅茶苦茶",
        kana: "めちゃくちゃ",
        meaning: "absurd, unreasonable, excessive, messed up, spoiled, wreaked",
        JLPT: 1
    },
    {
        kanji: "目付き",
        kana: "めつき",
        meaning: "look, expression of the eyes, eyes",
        JLPT: 1
    },
    {
        kanji: "滅亡",
        kana: "めつぼう",
        meaning: "downfall, ruin, collapse, destruction",
        JLPT: 1
    },
    {
        kanji: "愛でたい",
        kana: "めでたい",
        meaning: "auspicious",
        JLPT: 1
    },
    {
        kanji: "目眩",
        kana: "めまい",
        meaning: "dizziness, giddiness",
        JLPT: 1
    },
    {
        kanji: "目盛",
        kana: "めもり",
        meaning: "scale, gradations",
        JLPT: 1
    },
    {
        kanji: "面会",
        kana: "めんかい",
        meaning: "interview",
        JLPT: 1
    },
    {
        kanji: "免除",
        kana: "めんじょ",
        meaning: "exemption, exoneration, discharge",
        JLPT: 1
    },
    {
        kanji: "面する",
        kana: "めんする",
        meaning: "to face on, to look out on to",
        JLPT: 1
    },
    {
        kanji: "面目",
        kana: "めんぼく",
        meaning: "face, honour, reputation, prestige, dignity, credit",
        JLPT: 1
    },
    {
        kanji: "設ける",
        kana: "もうける",
        meaning: "to create, to establish",
        JLPT: 1
    },
    {
        kanji: "申し入れる",
        kana: "もうしいれる",
        meaning: "to propose, to suggest",
        JLPT: 1
    },
    {
        kanji: "申し込み",
        kana: "もうしこみ",
        meaning: "application, entry, request, subscription, offer, proposal, overture, challenge",
        JLPT: 1
    },
    {
        kanji: "申出",
        kana: "もうしで",
        meaning: "proposal, request, claim, report, notice",
        JLPT: 1
    },
    {
        kanji: "申し出る",
        kana: "もうしでる",
        meaning: "to report to, to tell, to suggest, to submit, to request, to make an offer, to come forward with informati",
        JLPT: 1
    },
    {
        kanji: "申し分",
        kana: "もうしぶん",
        meaning: "objection, shortcomings",
        JLPT: 1
    },
    {
        kanji: "盲点",
        kana: "もうてん",
        meaning: "blind spot",
        JLPT: 1
    },
    {
        kanji: "猛烈",
        kana: "もうれつ",
        meaning: "violent, vehement, rage",
        JLPT: 1
    },
    {
        kanji: "藻掻く",
        kana: "もがく",
        meaning: "to struggle, to wriggle, to be impatient",
        JLPT: 1
    },
    {
        kanji: "目録",
        kana: "もくろく",
        meaning: "catalogue, catalog, list",
        JLPT: 1
    },
    {
        kanji: "目論見",
        kana: "もくろみ",
        meaning: "a plan, a scheme, a project, a program, intention, goal",
        JLPT: 1
    },
    {
        kanji: "模型",
        kana: "もけい",
        meaning: "model, dummy, maquette",
        JLPT: 1
    },
    {
        kanji: "模索",
        kana: "もさく",
        meaning: "groping (for)",
        JLPT: 1
    },
    {
        kanji: "若し",
        kana: "もし",
        meaning: "if, in case, supposing",
        JLPT: 1
    },
    {
        kanji: "若しかしたら",
        kana: "もしかしたら",
        meaning: "perhaps, maybe, by some chance",
        JLPT: 1
    },
    {
        kanji: "若しかして",
        kana: "もしかして",
        meaning: "perhaps, possibly",
        JLPT: 1
    },
    {
        kanji: "若しかすると",
        kana: "もしかすると",
        meaning: "perhaps, maybe, by some chance",
        JLPT: 1
    },
    {
        kanji: "若しくは",
        kana: "もしくは",
        meaning: "or, otherwise",
        JLPT: 1
    },
    {
        kanji: "若しも",
        kana: "もしも",
        meaning: "if",
        JLPT: 1
    },
    {
        kanji: "齎らす",
        kana: "もたらす",
        meaning: "to bring, to take, to bring about",
        JLPT: 1
    },
    {
        kanji: "凭れる",
        kana: "もたれる",
        meaning: "to lean against, to lean on, to recline on, to lie heavy (on the stomach)",
        JLPT: 1
    },
    {
        kanji: "持ち",
        kana: "もち",
        meaning: "1. hold, charge, keep possession, in charge, 2. wear, durability, life, draw, 3. usage (suff)",
        JLPT: 1
    },
    {
        kanji: "持ち切り",
        kana: "もちきり",
        meaning: "hot topic, talk of the town",
        JLPT: 1
    },
    {
        kanji: "物体ない",
        kana: "もったいない",
        meaning: "too good, more than one deserves, wasteful, sacrilegious, unworthy of",
        JLPT: 1
    },
    {
        kanji: "以て",
        kana: "もって",
        meaning: "with, by, by means of, because, in view of",
        JLPT: 1
    },
    {
        kanji: "専ら",
        kana: "もっぱら",
        meaning: "wholly, solely, entirely",
        JLPT: 1
    },
    {
        kanji: "持て成す",
        kana: "もてなす",
        meaning: "to entertain, to make welcome",
        JLPT: 1
    },
    {
        kanji: "持てる",
        kana: "もてる",
        meaning: "to be well liked, to be popular",
        JLPT: 1
    },
    {
        kanji: "基",
        kana: "もとい",
        meaning: "basis",
        JLPT: 1
    },
    {
        kanji: "物置き",
        kana: "ものおき",
        meaning: "storeroom",
        JLPT: 1
    },
    {
        kanji: "物好き",
        kana: "ものずき",
        meaning: "curiosity",
        JLPT: 1
    },
    {
        kanji: "物足りない",
        kana: "ものたりない",
        meaning: "unsatisfied, unsatisfactory",
        JLPT: 1
    },
    {
        kanji: "最早",
        kana: "もはや",
        meaning: "already, now",
        JLPT: 1
    },
    {
        kanji: "模範",
        kana: "もはん",
        meaning: "exemplar, exemplification, exemplum, model, example",
        JLPT: 1
    },
    {
        kanji: "模倣",
        kana: "もほう",
        meaning: "imitation, copying",
        JLPT: 1
    },
    {
        kanji: "揉める",
        kana: "もめる",
        meaning: "to disagree, to dispute",
        JLPT: 1
    },
    {
        kanji: "腿",
        kana: "もも",
        meaning: "thigh, femur",
        JLPT: 1
    },
    {
        kanji: "催す",
        kana: "もよおす",
        meaning: "to hold (a meeting), to give (a dinner), to feel, to show signs of, to develop symptoms of, to feel (sick",
        JLPT: 1
    },
    {
        kanji: "漏らす",
        kana: "もらす",
        meaning: "to let leak, to reveal",
        JLPT: 1
    },
    {
        kanji: "盛り上がる",
        kana: "もりあがる",
        meaning: "to rouse, to swell, to rise",
        JLPT: 1
    },
    {
        kanji: "漏る",
        kana: "もる",
        meaning: "to leak, to run out",
        JLPT: 1
    },
    {
        kanji: "漏れる",
        kana: "もれる",
        meaning: "to leak out, to escape, to come through, to shine through, to filter out, to be omitted",
        JLPT: 1
    },
    {
        kanji: "脆い",
        kana: "もろい",
        meaning: "brittle, fragile, tender-hearted",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "もろに",
        meaning: "completely, all the way",
        JLPT: 1
    },
    {
        kanji: "問",
        kana: "もん",
        meaning: "problem, question",
        JLPT: 1
    },
    {
        kanji: "矢",
        kana: "や",
        meaning: "arrow",
        JLPT: 1
    },
    {
        kanji: "哉",
        kana: "や",
        meaning: "question mark",
        JLPT: 1
    },
    {
        kanji: "喧しい",
        kana: "やかましい",
        meaning: "noisy, strict, fussy",
        JLPT: 1
    },
    {
        kanji: "野外",
        kana: "やがい",
        meaning: "fields, outskirts, open air, suburbs",
        JLPT: 1
    },
    {
        kanji: "軈て",
        kana: "やがて",
        meaning: "before long, soon, at length",
        JLPT: 1
    },
    {
        kanji: "夜行",
        kana: "やぎょう",
        meaning: "walking around at night, night train, night travel",
        JLPT: 1
    },
    {
        kanji: "役職",
        kana: "やくしょく",
        meaning: "post, managerial position, official position",
        JLPT: 1
    },
    {
        kanji: "役立つ",
        kana: "やくだつ",
        meaning: "to be useful, to be helpful, to serve the purpose",
        JLPT: 1
    },
    {
        kanji: "役場",
        kana: "やくば",
        meaning: "town hall",
        JLPT: 1
    },
    {
        kanji: "夜具",
        kana: "やぐ",
        meaning: "bedding",
        JLPT: 1
    },
    {
        kanji: "優",
        kana: "やさ",
        meaning: "gentle, affectionate",
        JLPT: 1
    },
    {
        kanji: "屋敷",
        kana: "やしき",
        meaning: "mansion",
        JLPT: 1
    },
    {
        kanji: "養う",
        kana: "やしなう",
        meaning: "to rear, to maintain, to cultivate",
        JLPT: 1
    },
    {
        kanji: "社",
        kana: "やしろ",
        meaning: "Shinto shrine",
        JLPT: 1
    },
    {
        kanji: "野心",
        kana: "やしん",
        meaning: "ambition, aspiration, designs, treachery",
        JLPT: 1
    },
    {
        kanji: "易い",
        kana: "やすい",
        meaning: "easy",
        JLPT: 1
    },
    {
        kanji: "安っぽい",
        kana: "やすっぽい",
        meaning: "cheap-looking, tawdry, insignificant",
        JLPT: 1
    },
    {
        kanji: "休める",
        kana: "やすめる",
        meaning: "to rest, to suspend, to give relief",
        JLPT: 1
    },
    {
        kanji: "野生",
        kana: "やせい",
        meaning: "wild",
        JLPT: 1
    },
    {
        kanji: "矢鱈に",
        kana: "やたらに",
        meaning: "randomly, recklessly, blindly",
        JLPT: 1
    },
    {
        kanji: "夜中",
        kana: "やちゅう",
        meaning: "all night, the whole night",
        JLPT: 1
    },
    {
        kanji: "奴",
        kana: "やっこ",
        meaning: "servant, fellow",
        JLPT: 1
    },
    {
        kanji: "やっ付ける",
        kana: "やっつける",
        meaning: "to beat",
        JLPT: 1
    },
    {
        kanji: "矢っ張り",
        kana: "やっぱり",
        meaning: "also, as I thought, still, in spite of, absolutely",
        JLPT: 1
    },
    {
        kanji: "野党",
        kana: "やとう",
        meaning: "opposition party",
        JLPT: 1
    },
    {
        kanji: "病",
        kana: "やまい",
        meaning: "illness, disease",
        JLPT: 1
    },
    {
        kanji: "闇",
        kana: "やみ",
        meaning: "darkness, the dark, black-marketeering, dark, shady, illegal",
        JLPT: 1
    },
    {
        kanji: "病む",
        kana: "やむ",
        meaning: "to fall ill, to be ill",
        JLPT: 1
    },
    {
        kanji: "止むを得ない",
        kana: "やむをえない",
        meaning: "cannot be helped, unavoidable",
        JLPT: 1
    },
    {
        kanji: "稍",
        kana: "やや",
        meaning: "a little, partially, somewhat, a short time, a while",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ややこしい",
        meaning: "puzzling, tangled, complicated, complex",
        JLPT: 1
    },
    {
        kanji: "遣り通す",
        kana: "やりとおす",
        meaning: "to carry through, to achieve, to complete",
        JLPT: 1
    },
    {
        kanji: "やり遂げる",
        kana: "やりとげる",
        meaning: "to accomplish",
        JLPT: 1
    },
    {
        kanji: "遣る",
        kana: "やる",
        meaning: "to do, to have sexual intercourse, to kill, to give (to inferiors animals etc.), to dispatch (a letter",
        JLPT: 1
    },
    {
        kanji: "和らげる",
        kana: "やわらげる",
        meaning: "to soften, to moderate, to relieve",
        JLPT: 1
    },
    {
        kanji: "優位",
        kana: "ゆうい",
        meaning: "predominance, ascendancy, superiority",
        JLPT: 1
    },
    {
        kanji: "憂鬱",
        kana: "ゆううつ",
        meaning: "depression, melancholy, dejection, gloom",
        JLPT: 1
    },
    {
        kanji: "有益",
        kana: "ゆうえき",
        meaning: "beneficial, profitable",
        JLPT: 1
    },
    {
        kanji: "優越",
        kana: "ゆうえつ",
        meaning: "supremacy, predominance, being superior to",
        JLPT: 1
    },
    {
        kanji: "勇敢",
        kana: "ゆうかん",
        meaning: "bravery, heroism, gallantry",
        JLPT: 1
    },
    {
        kanji: "有機",
        kana: "ゆうき",
        meaning: "organic",
        JLPT: 1
    },
    {
        kanji: "夕暮れ",
        kana: "ゆうぐれ",
        meaning: "evening, (evening) twilight",
        JLPT: 1
    },
    {
        kanji: "融資",
        kana: "ゆうし",
        meaning: "financing, loan",
        JLPT: 1
    },
    {
        kanji: "有する",
        kana: "ゆうする",
        meaning: "to own, to be endowed with",
        JLPT: 1
    },
    {
        kanji: "融通",
        kana: "ゆうずう",
        meaning: "lending (money), accommodation, adaptability, versatility, finance",
        JLPT: 1
    },
    {
        kanji: "優勢",
        kana: "ゆうせい",
        meaning: "superiority, superior power, predominance, preponderance",
        JLPT: 1
    },
    {
        kanji: "優先",
        kana: "ゆうせん",
        meaning: "preference, priority",
        JLPT: 1
    },
    {
        kanji: "誘導",
        kana: "ゆうどう",
        meaning: "guidance, leading, induction, introduction, incitement, inducement",
        JLPT: 1
    },
    {
        kanji: "優美",
        kana: "ゆうび",
        meaning: "grace, refinement, elegance",
        JLPT: 1
    },
    {
        kanji: "有望",
        kana: "ゆうぼう",
        meaning: "good prospects, full of hope, promising",
        JLPT: 1
    },
    {
        kanji: "遊牧",
        kana: "ゆうぼく",
        meaning: "nomadism",
        JLPT: 1
    },
    {
        kanji: "夕焼け",
        kana: "ゆうやけ",
        meaning: "sunset",
        JLPT: 1
    },
    {
        kanji: "有力",
        kana: "ゆうりょく",
        meaning: "1. influence, prominence, 2. potent",
        JLPT: 1
    },
    {
        kanji: "幽霊",
        kana: "ゆうれい",
        meaning: "ghost, specter, apparition, phantom",
        JLPT: 1
    },
    {
        kanji: "誘惑",
        kana: "ゆうわく",
        meaning: "temptation, allurement, lure",
        JLPT: 1
    },
    {
        kanji: "揺さぶる",
        kana: "ゆさぶる",
        meaning: "to shake, to jolt, to rock, to swing",
        JLPT: 1
    },
    {
        kanji: "茹でる",
        kana: "ゆでる",
        meaning: "to boil",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ゆとり",
        meaning: "reserve, affluence, room, time (to spare)",
        JLPT: 1
    },
    {
        kanji: "指差す",
        kana: "ゆびさす",
        meaning: "to point at",
        JLPT: 1
    },
    {
        kanji: "弓",
        kana: "ゆみ",
        meaning: "bow (and arrow)",
        JLPT: 1
    },
    {
        kanji: "揺らぐ",
        kana: "ゆらぐ",
        meaning: "to swing, to sway, to shake, to tremble",
        JLPT: 1
    },
    {
        kanji: "緩む",
        kana: "ゆるむ",
        meaning: "to become loose, to slacken",
        JLPT: 1
    },
    {
        kanji: "緩める",
        kana: "ゆるめる",
        meaning: "to loosen, to slow down",
        JLPT: 1
    },
    {
        kanji: "緩やか",
        kana: "ゆるやか",
        meaning: "lenient",
        JLPT: 1
    },
    {
        kanji: "世",
        kana: "よ",
        meaning: "world, society, age, generation",
        JLPT: 1
    },
    {
        kanji: "好い",
        kana: "よい",
        meaning: "good",
        JLPT: 1
    },
    {
        kanji: "要因",
        kana: "よういん",
        meaning: "primary factor, main cause",
        JLPT: 1
    },
    {
        kanji: "溶液",
        kana: "ようえき",
        meaning: "solution (liquid)",
        JLPT: 1
    },
    {
        kanji: "用件",
        kana: "ようけん",
        meaning: "business",
        JLPT: 1
    },
    {
        kanji: "養護",
        kana: "ようご",
        meaning: "protection, nursing, protective care",
        JLPT: 1
    },
    {
        kanji: "用紙",
        kana: "ようし",
        meaning: "blank form",
        JLPT: 1
    },
    {
        kanji: "様式",
        kana: "ようしき",
        meaning: "style, form, pattern",
        JLPT: 1
    },
    {
        kanji: "要する",
        kana: "ようする",
        meaning: "to demand, to require, to take",
        JLPT: 1
    },
    {
        kanji: "要請",
        kana: "ようせい",
        meaning: "claim, demand, request, application",
        JLPT: 1
    },
    {
        kanji: "養成",
        kana: "ようせい",
        meaning: "training, development",
        JLPT: 1
    },
    {
        kanji: "様相",
        kana: "ようそう",
        meaning: "aspect",
        JLPT: 1
    },
    {
        kanji: "用品",
        kana: "ようひん",
        meaning: "articles, supplies, parts",
        JLPT: 1
    },
    {
        kanji: "洋風",
        kana: "ようふう",
        meaning: "western style",
        JLPT: 1
    },
    {
        kanji: "用法",
        kana: "ようほう",
        meaning: "directions, rules of use",
        JLPT: 1
    },
    {
        kanji: "要望",
        kana: "ようぼう",
        meaning: "demand for, request",
        JLPT: 1
    },
    {
        kanji: "余暇",
        kana: "よか",
        meaning: "leisure, leisure time, spare time",
        JLPT: 1
    },
    {
        kanji: "予感",
        kana: "よかん",
        meaning: "presentiment, premonition",
        JLPT: 1
    },
    {
        kanji: "余興",
        kana: "よきょう",
        meaning: "side show, entertainment",
        JLPT: 1
    },
    {
        kanji: "預金",
        kana: "よきん",
        meaning: "deposit, bank account",
        JLPT: 1
    },
    {
        kanji: "抑圧",
        kana: "よくあつ",
        meaning: "check, restraint, oppression, suppression",
        JLPT: 1
    },
    {
        kanji: "浴室",
        kana: "よくしつ",
        meaning: "bathroom, bath",
        JLPT: 1
    },
    {
        kanji: "抑制",
        kana: "よくせい",
        meaning: "suppression",
        JLPT: 1
    },
    {
        kanji: "欲深い",
        kana: "よくふかい",
        meaning: "greedy",
        JLPT: 1
    },
    {
        kanji: "欲望",
        kana: "よくぼう",
        meaning: "desire, appetite",
        JLPT: 1
    },
    {
        kanji: "寄こす",
        kana: "よこす",
        meaning: "to send, to forward",
        JLPT: 1
    },
    {
        kanji: "横綱",
        kana: "よこづな",
        meaning: "sumo grand champion",
        JLPT: 1
    },
    {
        kanji: "葦",
        kana: "よし",
        meaning: "reed, bulrush",
        JLPT: 1
    },
    {
        kanji: "善し悪し",
        kana: "よしあし",
        meaning: "good or bad, merits or demerits, quality, suitability",
        JLPT: 1
    },
    {
        kanji: "予想",
        kana: "よそう",
        meaning: "expectation, anticipation, prediction, forecast",
        JLPT: 1
    },
    {
        kanji: "余所見",
        kana: "よそみ",
        meaning: "looking away, looking aside",
        JLPT: 1
    },
    {
        kanji: "余地",
        kana: "よち",
        meaning: "place, room, margin, scope",
        JLPT: 1
    },
    {
        kanji: "依って",
        kana: "よって",
        meaning: "therefore, consequently, accordingly, because of",
        JLPT: 1
    },
    {
        kanji: "余程",
        kana: "よっぽど",
        meaning: "very, greatly, much, to a large extent, quite",
        JLPT: 1
    },
    {
        kanji: "与党",
        kana: "よとう",
        meaning: "government party, (ruling) party in power, government",
        JLPT: 1
    },
    {
        kanji: "呼び止める",
        kana: "よびとめる",
        meaning: "to challenge, to call somebody to halt",
        JLPT: 1
    },
    {
        kanji: "夜更かし",
        kana: "よふかし",
        meaning: "staying up late, keeping late hours, sitting up late at night, nighthawk",
        JLPT: 1
    },
    {
        kanji: "夜更け",
        kana: "よふけ",
        meaning: "late at night",
        JLPT: 1
    },
    {
        kanji: "読み上げる",
        kana: "よみあげる",
        meaning: "to read out loud (and clearly), to call a roll",
        JLPT: 1
    },
    {
        kanji: "寄り掛かる",
        kana: "よりかかる",
        meaning: "to lean against, to recline on, to lean on, to rely on",
        JLPT: 1
    },
    {
        kanji: "宜しく",
        kana: "よろしく",
        meaning: "well, properly, suitably, best regards, please remember me",
        JLPT: 1
    },
    {
        kanji: "弱まる",
        kana: "よわまる",
        meaning: "to abate, to weaken, to be emaciated, to be dejected, to be perplexed",
        JLPT: 1
    },
    {
        kanji: "弱める",
        kana: "よわめる",
        meaning: "to weaken",
        JLPT: 1
    },
    {
        kanji: "弱る",
        kana: "よわる",
        meaning: "to weaken, to be troubled, to be downcast, to be emaciated, to be dejected, to be perplexed, to impair",
        JLPT: 1
    },
    {
        kanji: "来場",
        kana: "らいじょう",
        meaning: "attendance",
        JLPT: 1
    },
    {
        kanji: "酪農",
        kana: "らくのう",
        meaning: "dairy (farm)",
        JLPT: 1
    },
    {
        kanji: "落下",
        kana: "らっか",
        meaning: "fall, drop, come down",
        JLPT: 1
    },
    {
        kanji: "楽観",
        kana: "らっかん",
        meaning: "optimism",
        JLPT: 1
    },
    {
        kanji: "濫用",
        kana: "らんよう",
        meaning: "abuse, misuse, misappropriation, using to excess",
        JLPT: 1
    },
    {
        kanji: "理屈",
        kana: "りくつ",
        meaning: "theory, reason",
        JLPT: 1
    },
    {
        kanji: "利根",
        kana: "りこん",
        meaning: "intelligence",
        JLPT: 1
    },
    {
        kanji: "利子",
        kana: "りし",
        meaning: "interest (bank)",
        JLPT: 1
    },
    {
        kanji: "利潤",
        kana: "りじゅん",
        meaning: "profit, returns",
        JLPT: 1
    },
    {
        kanji: "理性",
        kana: "りせい",
        meaning: "reason, sense",
        JLPT: 1
    },
    {
        kanji: "利息",
        kana: "りそく",
        meaning: "interest (bank)",
        JLPT: 1
    },
    {
        kanji: "立体",
        kana: "りったい",
        meaning: "solid body",
        JLPT: 1
    },
    {
        kanji: "立法",
        kana: "りっぽう",
        meaning: "legislation, lawmaking",
        JLPT: 1
    },
    {
        kanji: "利点",
        kana: "りてん",
        meaning: "advantage, point in favor",
        JLPT: 1
    },
    {
        kanji: "略語",
        kana: "りゃくご",
        meaning: "abbreviation, acronym",
        JLPT: 1
    },
    {
        kanji: "略奪",
        kana: "りゃくだつ",
        meaning: "pillage, plunder, looting, robbery",
        JLPT: 1
    },
    {
        kanji: "流",
        kana: "りゅう",
        meaning: "styleof, method of, manner of",
        JLPT: 1
    },
    {
        kanji: "流通",
        kana: "りゅうつう",
        meaning: "circulation of money or goods, flow of water or air, distribution",
        JLPT: 1
    },
    {
        kanji: "了",
        kana: "りょう",
        meaning: "finish, completion, understanding",
        JLPT: 1
    },
    {
        kanji: "料",
        kana: "りょう",
        meaning: "material, charge, rate, fee",
        JLPT: 1
    },
    {
        kanji: "領域",
        kana: "りょういき",
        meaning: "area, domain, territory, field, region, regime",
        JLPT: 1
    },
    {
        kanji: "了解",
        kana: "りょうかい",
        meaning: "comprehension, consent, understanding, roger (on the radio)",
        JLPT: 1
    },
    {
        kanji: "領海",
        kana: "りょうかい",
        meaning: "territorial waters",
        JLPT: 1
    },
    {
        kanji: "両極",
        kana: "りょうきょく",
        meaning: "both extremities, north and south poles, positive and negative poles",
        JLPT: 1
    },
    {
        kanji: "良好",
        kana: "りょうこう",
        meaning: "favorable, satisfactory",
        JLPT: 1
    },
    {
        kanji: "良識",
        kana: "りょうしき",
        meaning: "good sense",
        JLPT: 1
    },
    {
        kanji: "良質",
        kana: "りょうしつ",
        meaning: "good quality, superior quality",
        JLPT: 1
    },
    {
        kanji: "了承",
        kana: "りょうしょう",
        meaning: "acknowledgement, understanding (e.g. please be understanding of the mess during our renovation)",
        JLPT: 1
    },
    {
        kanji: "良心",
        kana: "りょうしん",
        meaning: "conscience",
        JLPT: 1
    },
    {
        kanji: "領地",
        kana: "りょうち",
        meaning: "territory, dominion",
        JLPT: 1
    },
    {
        kanji: "領土",
        kana: "りょうど",
        meaning: "dominion, territory, possession",
        JLPT: 1
    },
    {
        kanji: "両立",
        kana: "りょうりつ",
        meaning: "compatibility, coexistence, standing together",
        JLPT: 1
    },
    {
        kanji: "旅客",
        kana: "りょかく",
        meaning: "passenger (transport)",
        JLPT: 1
    },
    {
        kanji: "旅券",
        kana: "りょけん",
        meaning: "passport",
        JLPT: 1
    },
    {
        kanji: "履歴",
        kana: "りれき",
        meaning: "personal history, background, career, log",
        JLPT: 1
    },
    {
        kanji: "理論",
        kana: "りろん",
        meaning: "theory",
        JLPT: 1
    },
    {
        kanji: "輪",
        kana: "りん",
        meaning: "counter for wheels and flowers",
        JLPT: 1
    },
    {
        kanji: "林業",
        kana: "りんぎょう",
        meaning: "forestry",
        JLPT: 1
    },
    {
        kanji: "類似",
        kana: "るいじ",
        meaning: "analogous",
        JLPT: 1
    },
    {
        kanji: "類推",
        kana: "るいすい",
        meaning: "analogy",
        JLPT: 1
    },
    {
        kanji: "冷酷",
        kana: "れいこく",
        meaning: "cruelty, coldheartedness, relentless, ruthless",
        JLPT: 1
    },
    {
        kanji: "冷蔵",
        kana: "れいぞう",
        meaning: "cold storage, refrigeration",
        JLPT: 1
    },
    {
        kanji: "冷淡",
        kana: "れいたん",
        meaning: "coolness, indifference",
        JLPT: 1
    },
    {
        kanji: "恋愛",
        kana: "れんあい",
        meaning: "love, love-making, passion, emotion, affections",
        JLPT: 1
    },
    {
        kanji: "連休",
        kana: "れんきゅう",
        meaning: "consecutive holidays",
        JLPT: 1
    },
    {
        kanji: "連日",
        kana: "れんじつ",
        meaning: "every day, prolonged",
        JLPT: 1
    },
    {
        kanji: "連中",
        kana: "れんじゅう",
        meaning: "colleagues, company, a lot",
        JLPT: 1
    },
    {
        kanji: "連帯",
        kana: "れんたい",
        meaning: "solidarity",
        JLPT: 1
    },
    {
        kanji: "連邦",
        kana: "れんぽう",
        meaning: "commonwealth, federation of states",
        JLPT: 1
    },
    {
        kanji: "連盟",
        kana: "れんめい",
        meaning: "league, union, alliance",
        JLPT: 1
    },
    {
        kanji: "老衰",
        kana: "ろうすい",
        meaning: "senility, senile decay",
        JLPT: 1
    },
    {
        kanji: "朗読",
        kana: "ろうどく",
        meaning: "reading aloud, recitation",
        JLPT: 1
    },
    {
        kanji: "浪費",
        kana: "ろうひ",
        meaning: "waste, extravagance",
        JLPT: 1
    },
    {
        kanji: "労力",
        kana: "ろうりょく",
        meaning: "labour, effort, toil, trouble",
        JLPT: 1
    },
    {
        kanji: "碌な",
        kana: "ろくな",
        meaning: "satisfactory, decent",
        JLPT: 1
    },
    {
        kanji: "碌に",
        kana: "ろくに",
        meaning: "well, enough, sufficient",
        JLPT: 1
    },
    {
        kanji: "露骨",
        kana: "ろこつ",
        meaning: "1. frank, blunt, plain, outspoken, 2. conspicuous, open, 3. broad, suggestive",
        JLPT: 1
    },
    {
        kanji: "論議",
        kana: "ろんぎ",
        meaning: "discussion",
        JLPT: 1
    },
    {
        kanji: "論理",
        kana: "ろんり",
        meaning: "logic",
        JLPT: 1
    },
    {
        kanji: "和",
        kana: "わ",
        meaning: "sum, harmony, peace",
        JLPT: 1
    },
    {
        kanji: "我がまま",
        kana: "わがまま",
        meaning: "selfishness, egoism, wilfulness, disobedience, whim",
        JLPT: 1
    },
    {
        kanji: "枠",
        kana: "わく",
        meaning: "frame, slide",
        JLPT: 1
    },
    {
        kanji: "惑星",
        kana: "わくせい",
        meaning: "planet",
        JLPT: 1
    },
    {
        kanji: "技",
        kana: "わざ",
        meaning: "art, technique",
        JLPT: 1
    },
    {
        kanji: "態と",
        kana: "わざと",
        meaning: "on purpose",
        JLPT: 1
    },
    {
        kanji: "態々",
        kana: "わざわざ",
        meaning: "expressly, specially, doing something especially rather than incidentally",
        JLPT: 1
    },
    {
        kanji: "煩わしい",
        kana: "わずらわしい",
        meaning: "troublesome, annoying, complicated",
        JLPT: 1
    },
    {
        kanji: "渡り鳥",
        kana: "わたりどり",
        meaning: "migratory bird, bird of passage",
        JLPT: 1
    },
    {
        kanji: "詫び",
        kana: "わび",
        meaning: "apology",
        JLPT: 1
    },
    {
        kanji: "和風",
        kana: "わふう",
        meaning: "Japanese style",
        JLPT: 1
    },
    {
        kanji: "和文",
        kana: "わぶん",
        meaning: "Japanese text, sentence in Japanese",
        JLPT: 1
    },
    {
        kanji: "藁",
        kana: "わら",
        meaning: "straw",
        JLPT: 1
    },
    {
        kanji: "割合に",
        kana: "わりあいに",
        meaning: "comparatively",
        JLPT: 1
    },
    {
        kanji: "割り当て",
        kana: "わりあて",
        meaning: "allotment, assignment, allocation, quota, rationing",
        JLPT: 1
    },
    {
        kanji: "割り込む",
        kana: "わりこむ",
        meaning: "to cut in, to thrust oneself into, to wedge oneself in, to muscle in on, to interrupt, to disturb",
        JLPT: 1
    },
    {
        kanji: "割り算",
        kana: "わりざん",
        meaning: "division (math)",
        JLPT: 1
    },
    {
        kanji: "割引き",
        kana: "わりびき",
        meaning: "discount, reduction, rebate, tenths discounted",
        JLPT: 1
    },
    {
        kanji: "悪者",
        kana: "わるもの",
        meaning: "bad fellow, rascal, ruffian, scoundrel",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アイデア",
        meaning: "idea",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アクセル",
        meaning: "accelerator",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アップ",
        meaning: "up",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アプローチ",
        meaning: "approach (in golf)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アマチュア",
        meaning: "amateur",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アラブ",
        meaning: "Arab",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アルカリ",
        meaning: "alkali",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アルミ",
        meaning: "aluminum (Al), aluminium",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アワー",
        meaning: "hour",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アンケート",
        meaning: "(fr:) (n) questionnaire (fr: enquete), survey",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "アンコール",
        meaning: "encore",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "イエス",
        meaning: "Jesus, yes",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "インターチェンジ",
        meaning: "interchange",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "インターナショナル",
        meaning: "international",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "インターフォン",
        meaning: "intercom",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "インテリ",
        meaning: "egghead, intelligentsia",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "インフォメーション",
        meaning: "information",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "インフレ",
        meaning: "inflation",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ウェートレス",
        meaning: "waitress",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "エアメール",
        meaning: "air mail",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "エレガント",
        meaning: "elegant",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "エンジニア",
        meaning: "engineer",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "オーケー",
        meaning: "OK",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "オートマチック",
        meaning: "automatic",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "オープン",
        meaning: "open",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "オリエンテーション",
        meaning: "orientation",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "オレンジ",
        meaning: "an orange",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "オンライン",
        meaning: "on-line",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カーペット",
        meaning: "carpet",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カクテル",
        meaning: "cocktail",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カット",
        meaning: "cut, cutting",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カテゴリー",
        meaning: "category",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カムバック",
        meaning: "comeback",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カメラマン",
        meaning: "cameraman",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カルテ",
        meaning: "(de:) (n) clinical records (de: Karte)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "カンニング",
        meaning: "cunning, cheat",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ガイド",
        meaning: "tour guide",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ガイドブック",
        meaning: "guidebook",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ガレージ",
        meaning: "garage (at house)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "キャッチ",
        meaning: "catch",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "キャリア",
        meaning: "career, career government employee",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "クイズ",
        meaning: "quiz",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "クラブ",
        meaning: "club, crab",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "クレーン",
        meaning: "crane",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "グラフ",
        meaning: "graph",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "グレー",
        meaning: "grey, gray",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ゲスト",
        meaning: "guest",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コーナー",
        meaning: "corner",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コマーシャル",
        meaning: "a commercial",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コミュニケーション",
        meaning: "communication",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コメント",
        meaning: "comment",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コンタクト",
        meaning: "contact, contact lens",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コンテスト",
        meaning: "contest",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コントラスト",
        meaning: "contrast",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コントロール",
        meaning: "control",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "コンパス",
        meaning: "compass",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "サイクル",
        meaning: "cycle",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "サイズ",
        meaning: "size",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "サボる",
        meaning: "to be truant, to be idle, to sabotage by slowness",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "サンキュー",
        meaning: "thank you",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "サンタクロース",
        meaning: "Santa Claus",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "シート",
        meaning: "seat, sheet",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "システム",
        meaning: "system",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "シック",
        meaning: "chic",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "シナリオ",
        meaning: "scenario",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ショー",
        meaning: "show",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ショック",
        meaning: "shock",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ジーパン",
        meaning: "jeans (lit: jeans pants), dungarees",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ジャズ",
        meaning: "jazz",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ジャンパー",
        meaning: "jacket, jumper",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ジャンプ",
        meaning: "jump",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ジャンボ",
        meaning: "jumbo",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ジャンル",
        meaning: "genre",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スタジオ",
        meaning: "studio",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スチーム",
        meaning: "steam",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ストライキ",
        meaning: "strike",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ストレス",
        meaning: "stress",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ストロー",
        meaning: "straw",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ストロボ",
        meaning: "stroboscope (lit: strobo), strobe lamp, stroboscopic lamp",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スピード",
        meaning: "speed",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スプリング",
        meaning: "spring",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スペース",
        meaning: "space",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スポーツカー",
        meaning: "sports car",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "スラックス",
        meaning: "slacks",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "セール",
        meaning: "sale",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "セクション",
        meaning: "section",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "セックス",
        meaning: "sexual intercourse",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "セレモニー",
        meaning: "ceremony",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "センス",
        meaning: "good sense (for music style tact etc.)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ゼリー",
        meaning: "1. jelly, 2. Jerry",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ソース",
        meaning: "source",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ソックス",
        meaning: "socks",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ソロ",
        meaning: "solo",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイトル",
        meaning: "title",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイピスト",
        meaning: "typist",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイマー",
        meaning: "timer",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイミング",
        meaning: "timing",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイム",
        meaning: "time",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイムリー",
        meaning: "timely, run-batted-in (baseball), RBI",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイヤ",
        meaning: "tire, tyre",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タイル",
        meaning: "tile",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タレント",
        meaning: "talent, star, personality",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "タワー",
        meaning: "tower",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ダース",
        meaning: "dozen",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ダウン",
        meaning: "down",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ダブる",
        meaning: "to coincide (fall on the same day), to have two of something, to repeat a school year after failing",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ダンプ",
        meaning: "dump",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "チームワーク",
        meaning: "teamwork",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "チェンジ",
        meaning: "change",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "チャイム",
        meaning: "chime",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "チャンネル",
        meaning: "a channel",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ティッシュペーパー",
        meaning: "tissue paper",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "テレックス",
        meaning: "telex, teletypewriter exchange",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "データ",
        meaning: "data",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "デコレーション",
        meaning: "decoration",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "デザート",
        meaning: "dessert",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "デザイン",
        meaning: "design",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "デッサン",
        meaning: "(fr:) (n) rough sketch (fr: dessin)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "デモンストレーション",
        meaning: "demonstration",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "トーン",
        meaning: "tone",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "トラブル",
        meaning: "trouble (sometimes used as a verb)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "トランジスター",
        meaning: "transistor",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ドライ",
        meaning: "dry",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ドライクリーニング",
        meaning: "dry cleaning",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ドライバー",
        meaning: "driver, screwdriver",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ドライブイン",
        meaning: "drive in",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ドリル",
        meaning: "drill",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ナイター",
        meaning: "game under lights (e.g. baseball) (lit: nighter), night game",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ナプキン",
        meaning: "napkin",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ナンセンス",
        meaning: "nonsense",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ニュー",
        meaning: "new",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ニュアンス",
        meaning: "nuance",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ネガ",
        meaning: "(photographic) negative",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ノイローゼ",
        meaning: "(de:) (n) neurosis (de: Neurose)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ハンガー",
        meaning: "hangar, (coat) hanger, hunger",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "バー",
        meaning: "bar",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "バッジ",
        meaning: "badge",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "バット",
        meaning: "bat, vat",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "パジャマ",
        meaning: "pajamas, pyjamas",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "パチンコ",
        meaning: "pachinko (Japanese pinball)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "パトカー",
        meaning: "patrol car",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "パンク",
        meaning: "1. (abbr) puncture, bursting, 2. punk",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ヒント",
        meaning: "hint",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ビールス",
        meaning: "virus",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ビジネス",
        meaning: "business",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ファイト",
        meaning: "fight",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ファイル",
        meaning: "file",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ファン",
        meaning: "fan, fun",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "フィルター",
        meaning: "(camera) filter",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "フェリー",
        meaning: "ferry",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "フォーム",
        meaning: "foam, form",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "フロント",
        meaning: "front",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ブーツ",
        meaning: "boots",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ブーム",
        meaning: "boom",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ブザー",
        meaning: "buzzer",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ブルー",
        meaning: "blue",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ベース",
        meaning: "base, bass",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ベスト",
        meaning: "best, vest",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ベストセラー",
        meaning: "best-seller",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ペア",
        meaning: "pair, pear",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ホース",
        meaning: "hose",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ホール",
        meaning: "hall, hole",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ボイコット",
        meaning: "boycott",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ボルト",
        meaning: "volt, bolt",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ポーズ",
        meaning: "pause",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ポイント",
        meaning: "point",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ポジション",
        meaning: "position",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ポット",
        meaning: "pot",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ポンプ",
        meaning: "pump",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "マーク",
        meaning: "mark",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "マスコミ",
        meaning: "mass communication",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "マッサージ",
        meaning: "massage",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ミスプリント",
        meaning: "misprint",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ミセス",
        meaning: "Mrs.",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ミュージック",
        meaning: "music",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ミリ",
        meaning: "milli-, 10^-3",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ムード",
        meaning: "mood",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "メーカー",
        meaning: "maker",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "メッセージ",
        meaning: "message",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "メディア",
        meaning: "media",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "メロディー",
        meaning: "melody",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "モーテル",
        meaning: "motel",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "モニター",
        meaning: "(computer) monitor",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ヤング",
        meaning: "young",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ユニーク",
        meaning: "unique",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ユニフォーム",
        meaning: "uniform",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ライス",
        meaning: "rice",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ラベル",
        meaning: "label",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ランプ",
        meaning: "lamp, ramp, headlight, light",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ルーズ",
        meaning: "loose",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ルール",
        meaning: "rule",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レース",
        meaning: "race, lace",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レギュラー",
        meaning: "regular",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レクリエーション",
        meaning: "recreation",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レッスン",
        meaning: "lesson",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レディー",
        meaning: "lady",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レバー",
        meaning: "lever, liver",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レンジ",
        meaning: "range, stove",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レンタカー",
        meaning: "hire car (lit: rent-a-car)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "レントゲン",
        meaning: "X-ray (lit: Roentgen)",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ロープ",
        meaning: "rope",
        JLPT: 1
    },
    {
        kanji: "ローマ字",
        kana: "ローマじ",
        meaning: "romanization, Roman letters",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ロマンチック",
        meaning: "romantic",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "ワット",
        meaning: "watt",
        JLPT: 1
    },
    {
        kanji: "",
        kana: "あいかわらず",
        meaning: "as ever,as usual,the same",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "アイデア",
        meaning: "idea",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "アイディア",
        meaning: "idea",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あいまい",
        meaning: "vague,ambiguous",
        JLPT: 2
    },
    {
        kanji: "遭う",
        kana: "あう",
        meaning: "to meet,to encounter (undesirable nuance)",
        JLPT: 2
    },
    {
        kanji: "扇ぐ",
        kana: "あおぐ",
        meaning: "to fan,to flap",
        JLPT: 2
    },
    {
        kanji: "青白い",
        kana: "あおじろい",
        meaning: "pale,pallid",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あかんぼう",
        meaning: "baby",
        JLPT: 2
    },
    {
        kanji: "明き",
        kana: "あき",
        meaning: "room,time to spare,emptiness",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あきれる",
        meaning: "to be amazed,to be shocked",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "アクセント",
        meaning: "accent",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あくび",
        meaning: "yawn",
        JLPT: 2
    },
    {
        kanji: "飽くまで",
        kana: "あくまで",
        meaning: "to the end,to the last,stubbornly",
        JLPT: 2
    },
    {
        kanji: "明け方",
        kana: "あけがた",
        meaning: "dawn",
        JLPT: 2
    },
    {
        kanji: "揚げる",
        kana: "あげる",
        meaning: "to lift,to fry",
        JLPT: 2
    },
    {
        kanji: "挙げる",
        kana: "あげる",
        meaning: "to raise,to fly",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あげる (=やる)",
        meaning: "to do for",
        JLPT: 2
    },
    {
        kanji: "憧れる",
        kana: "あこがれる",
        meaning: "to long for,to yearn after,to admire",
        JLPT: 2
    },
    {
        kanji: "足跡",
        kana: "あしあと",
        meaning: "footprints",
        JLPT: 2
    },
    {
        kanji: "味わう",
        kana: "あじわう",
        meaning: "to taste,to savor,to relish",
        JLPT: 2
    },
    {
        kanji: "預かる",
        kana: "あずかる",
        meaning: "to keep in custody,to receive on deposit,to take charge of",
        JLPT: 2
    },
    {
        kanji: "暖まる",
        kana: "あたたまる",
        meaning: "to warm up,to get warm",
        JLPT: 2
    },
    {
        kanji: "暖める",
        kana: "あたためる",
        meaning: "to warm,to heat",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あたりまえ",
        meaning: "usual,common,ordinary",
        JLPT: 2
    },
    {
        kanji: "あひら",
        kana: "あひら",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あちらこちら",
        meaning: "here and there",
        JLPT: 2
    },
    {
        kanji: "厚かましい",
        kana: "あつかましい",
        meaning: "impudent,shameless,brazen",
        JLPT: 2
    },
    {
        kanji: "圧縮",
        kana: "あっしゅく",
        meaning: "compression,condensation,pressure",
        JLPT: 2
    },
    {
        kanji: "宛名",
        kana: "あてな",
        meaning: "address,direction",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あてはまる",
        meaning: "to be applicable,to come under (a category),to fulfill",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あてはめる",
        meaning: "to apply,to adapt",
        JLPT: 2
    },
    {
        kanji: "暴れる",
        kana: "あばれる",
        meaning: "to act violently,to rage,to struggle,to be riotous",
        JLPT: 2
    },
    {
        kanji: "脂",
        kana: "あぶら",
        meaning: "fat,tallow,lard",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あぶる",
        meaning: "to scorch",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あふれる",
        meaning: "to flood,to overflow,to brim over",
        JLPT: 2
    },
    {
        kanji: "雨戸",
        kana: "あまど",
        meaning: "sliding storm door",
        JLPT: 2
    },
    {
        kanji: "甘やかす",
        kana: "あまやかす",
        meaning: "to pamper,to spoil",
        JLPT: 2
    },
    {
        kanji: "余る",
        kana: "あまる",
        meaning: "to remain,to be left over,to be in excess,to be too many",
        JLPT: 2
    },
    {
        kanji: "編物",
        kana: "あみもの",
        meaning: "knitting,web",
        JLPT: 2
    },
    {
        kanji: "編む",
        kana: "あむ",
        meaning: "to knit",
        JLPT: 2
    },
    {
        kanji: "危うい",
        kana: "あやうい",
        meaning: "dangerous,critical,grave",
        JLPT: 2
    },
    {
        kanji: "怪しい",
        kana: "あやしい",
        meaning: "suspicious,dubious,doubtful",
        JLPT: 2
    },
    {
        kanji: "荒い",
        kana: "あらい",
        meaning: "rough,rude,wild",
        JLPT: 2
    },
    {
        kanji: "粗い",
        kana: "あらい",
        meaning: "coarse,rough",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あらすじ",
        meaning: "outline,summary",
        JLPT: 2
    },
    {
        kanji: "争う",
        kana: "あらそう",
        meaning: "to dispute,to argue,to be at variance,to compete",
        JLPT: 2
    },
    {
        kanji: "改めて",
        kana: "あらためて",
        meaning: "another time,again,over again,anew,formally",
        JLPT: 2
    },
    {
        kanji: "改める",
        kana: "あらためる",
        meaning: "to change,to alter,to reform,to revise",
        JLPT: 2
    },
    {
        kanji: "著す",
        kana: "あらわす",
        meaning: "to write,to publish",
        JLPT: 2
    },
    {
        kanji: "有難い",
        kana: "ありがたい",
        meaning: "grateful,thankful,welcome,appreciated,evoking gratitude",
        JLPT: 2
    },
    {
        kanji: "在る",
        kana: "ある",
        meaning: "to live,to be",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あれこれ",
        meaning: "one thing or another,this and that,this or that",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あわただしい",
        meaning: "busy,hurried,confused,flurried",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あわてる",
        meaning: "to become confused",
        JLPT: 2
    },
    {
        kanji: "安易",
        kana: "あんい",
        meaning: "easy-going",
        JLPT: 2
    },
    {
        kanji: "案外",
        kana: "あんがい",
        meaning: "unexpectedly",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "アンテナ",
        meaning: "antenna",
        JLPT: 2
    },
    {
        kanji: "言い出す",
        kana: "いいだす",
        meaning: "to start talking,to speak,to tell,to propose,to suggest,to break the ice",
        JLPT: 2
    },
    {
        kanji: "言い付ける",
        kana: "いいつける",
        meaning: "to tell,to tell on (someone),to order",
        JLPT: 2
    },
    {
        kanji: "意義",
        kana: "いぎ",
        meaning: "meaning,significance",
        JLPT: 2
    },
    {
        kanji: "生き生き",
        kana: "いきいき",
        meaning: "vividly,lively",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いきなり",
        meaning: "(uk) abruptly,suddenly,all of a sudden,without warning",
        JLPT: 2
    },
    {
        kanji: "育児",
        kana: "いくじ",
        meaning: "childcare,nursing,upbringing",
        JLPT: 2
    },
    {
        kanji: "幾分",
        kana: "いくぶん",
        meaning: "somewhat",
        JLPT: 2
    },
    {
        kanji: "生け花",
        kana: "いけばな",
        meaning: "(1) flower arrangement",
        JLPT: 2
    },
    {
        kanji: "以後",
        kana: "いご",
        meaning: "after this,from now on,hereafter,thereafter",
        JLPT: 2
    },
    {
        kanji: "以降",
        kana: "いこう",
        meaning: "on and after,hereafter,thereafter",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "イコール",
        meaning: "equal",
        JLPT: 2
    },
    {
        kanji: "勇ましい",
        kana: "いさましい",
        meaning: "brave,valiant,gallant,courageous",
        JLPT: 2
    },
    {
        kanji: "衣食住",
        kana: "いしょくじゅう",
        meaning: "necessities of life (food, clothing, etc.)",
        JLPT: 2
    },
    {
        kanji: "意地悪",
        kana: "いじわる",
        meaning: "malicious,ill-tempered,unkind",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いちいち",
        meaning: "one by one,separately",
        JLPT: 2
    },
    {
        kanji: "一応",
        kana: "いちおう",
        meaning: "once,tentatively,in outline,for the time being",
        JLPT: 2
    },
    {
        kanji: "一段と",
        kana: "いちだんと",
        meaning: "greater,more,further,still more",
        JLPT: 2
    },
    {
        kanji: "一流",
        kana: "いちりゅう",
        meaning: "first class,top grade,foremost,top-notch",
        JLPT: 2
    },
    {
        kanji: "佚",
        kana: "いつ",
        meaning: "be lost,peace,hide,mistake,beautiful,in turn",
        JLPT: 2
    },
    {
        kanji: "一昨日",
        kana: "いっさくじつ",
        meaning: "day before yesterday",
        JLPT: 2
    },
    {
        kanji: "一昨年",
        kana: "いっさくねん",
        meaning: "year before last",
        JLPT: 2
    },
    {
        kanji: "一斉",
        kana: "いっせい",
        meaning: "simultaneous,all at once",
        JLPT: 2
    },
    {
        kanji: "一旦",
        kana: "いったん",
        meaning: "once,for a moment,one morning,temporarily",
        JLPT: 2
    },
    {
        kanji: "一定",
        kana: "いってい",
        meaning: "fixed,settled,definite",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いっていらっしゃい",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いってらっしゃい",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いってまいります",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いつのまにか",
        meaning: "before one knows,unnoticed,unawares",
        JLPT: 2
    },
    {
        kanji: "移転",
        kana: "いてん",
        meaning: "moving,transfer,demise",
        JLPT: 2
    },
    {
        kanji: "井戸",
        kana: "いど",
        meaning: "water well",
        JLPT: 2
    },
    {
        kanji: "緯度",
        kana: "いど",
        meaning: "latitude (nav.)",
        JLPT: 2
    },
    {
        kanji: "従姉妹",
        kana: "いとこ",
        meaning: "cousin (female)",
        JLPT: 2
    },
    {
        kanji: "威張る",
        kana: "いばる",
        meaning: "to be proud,to swagger",
        JLPT: 2
    },
    {
        kanji: "嫌がる",
        kana: "いやがる",
        meaning: "to hate,to dislike",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "いよいよ",
        meaning: "more and more,all the more,increasingly,at last,beyond doubt",
        JLPT: 2
    },
    {
        kanji: "煎る",
        kana: "いる",
        meaning: "to parch,to fry",
        JLPT: 2
    },
    {
        kanji: "炒る",
        kana: "いる",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "入れ物",
        kana: "いれもの",
        meaning: "container,case,receptacle",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "インキ",
        meaning: "ink",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "インタビュー",
        meaning: "interview",
        JLPT: 2
    },
    {
        kanji: "引力",
        kana: "いんりょく",
        meaning: "gravity",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ウーマン",
        meaning: "woman",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ウール",
        meaning: "wool",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ウエートレス",
        meaning: "waitress",
        JLPT: 2
    },
    {
        kanji: "植木",
        kana: "うえき",
        meaning: "garden shrubs,trees,potted plant",
        JLPT: 2
    },
    {
        kanji: "飢える",
        kana: "うえる",
        meaning: "to starve",
        JLPT: 2
    },
    {
        kanji: "浮ぶ",
        kana: "うかぶ",
        meaning: "to float,to rise to surface,to come to mind",
        JLPT: 2
    },
    {
        kanji: "浮かべる",
        kana: "うかべる",
        meaning: "to float,to express,to look (sad, glad)",
        JLPT: 2
    },
    {
        kanji: "浮く",
        kana: "うく",
        meaning: "to float,to become merry,to become loose",
        JLPT: 2
    },
    {
        kanji: "承る",
        kana: "うけたまわる",
        meaning: "(hum) to hear,to be told,to know",
        JLPT: 2
    },
    {
        kanji: "受取",
        kana: "うけとり",
        meaning: "receipt",
        JLPT: 2
    },
    {
        kanji: "受け持つ",
        kana: "うけもつ",
        meaning: "to take (be in) charge of",
        JLPT: 2
    },
    {
        kanji: "薄暗い",
        kana: "うすぐらい",
        meaning: "dim,gloomy",
        JLPT: 2
    },
    {
        kanji: "薄める",
        kana: "うすめる",
        meaning: "to dilute,to water down",
        JLPT: 2
    },
    {
        kanji: "打合せ",
        kana: "うちあわせ",
        meaning: "business meeting,previous arrangement,appointment",
        JLPT: 2
    },
    {
        kanji: "打ち消す",
        kana: "うちけす",
        meaning: "to deny,to negate,to contradict",
        JLPT: 2
    },
    {
        kanji: "討つ",
        kana: "うつ",
        meaning: "to attack,to avenge",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "うっかり",
        meaning: "carelessly,thoughtlessly,inadvertently",
        JLPT: 2
    },
    {
        kanji: "映す",
        kana: "うつす",
        meaning: "to project,to reflect,to cast (shadow)",
        JLPT: 2
    },
    {
        kanji: "写る",
        kana: "うつる",
        meaning: "to be photographed,to be projected",
        JLPT: 2
    },
    {
        kanji: "映る",
        kana: "うつる",
        meaning: "to be reflected,to harmonize with,to come out (photo)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "うどん",
        meaning: "noodles (Japanese)",
        JLPT: 2
    },
    {
        kanji: "有無",
        kana: "うむ",
        meaning: "yes or no,existence,flag indicator (comp),presence or absence marker",
        JLPT: 2
    },
    {
        kanji: "埋める",
        kana: "うめる",
        meaning: "to bury,to fill up,to fill (a seat, a vacant position)",
        JLPT: 2
    },
    {
        kanji: "敬う",
        kana: "うやまう",
        meaning: "to show respect,to honour",
        JLPT: 2
    },
    {
        kanji: "裏返す",
        kana: "うらがえす",
        meaning: "to turn inside out,to turn (something) over",
        JLPT: 2
    },
    {
        kanji: "裏口",
        kana: "うらぐち",
        meaning: "backdoor,rear entrance",
        JLPT: 2
    },
    {
        kanji: "占う",
        kana: "うらなう",
        meaning: "to forecast,to predict",
        JLPT: 2
    },
    {
        kanji: "恨み",
        kana: "うらみ",
        meaning: "resentment",
        JLPT: 2
    },
    {
        kanji: "恨む",
        kana: "うらむ",
        meaning: "to curse,to feel bitter",
        JLPT: 2
    },
    {
        kanji: "羨ましい",
        kana: "うらやましい",
        meaning: "envious,enviable",
        JLPT: 2
    },
    {
        kanji: "羨む",
        kana: "うらやむ",
        meaning: "to envy",
        JLPT: 2
    },
    {
        kanji: "売上",
        kana: "うりあげ",
        meaning: "amount sold,proceeds",
        JLPT: 2
    },
    {
        kanji: "売り切れ",
        kana: "うりきれ",
        meaning: "sold-out",
        JLPT: 2
    },
    {
        kanji: "売り切れる",
        kana: "うりきれる",
        meaning: "to be sold out",
        JLPT: 2
    },
    {
        kanji: "売行き",
        kana: "うれゆき",
        meaning: "sales",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "うろうろ",
        meaning: "loiteringly,aimless wandering",
        JLPT: 2
    },
    {
        kanji: "運河",
        kana: "うんが",
        meaning: "canal,waterway",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "うんと",
        meaning: "a great deal,very much",
        JLPT: 2
    },
    {
        kanji: "英文",
        kana: "えいぶん",
        meaning: "sentence in English",
        JLPT: 2
    },
    {
        kanji: "英和",
        kana: "えいわ",
        meaning: "English-Japanese (e.g. dictionary)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ええと",
        meaning: "let me see,well,er....",
        JLPT: 2
    },
    {
        kanji: "液体",
        kana: "えきたい",
        meaning: "liquid,fluid",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "エチケット",
        meaning: "etiquette",
        JLPT: 2
    },
    {
        kanji: "絵の具",
        kana: "えのぐ",
        meaning: "colors,paints",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "エプロン",
        meaning: "apron",
        JLPT: 2
    },
    {
        kanji: "偉い",
        kana: "えらい",
        meaning: "great,celebrated,eminent,terrible,awful,famous,remarkable,excellent",
        JLPT: 2
    },
    {
        kanji: "宴会",
        kana: "えんかい",
        meaning: "party,banquet",
        JLPT: 2
    },
    {
        kanji: "園芸",
        kana: "えんげい",
        meaning: "horticulture,gardening",
        JLPT: 2
    },
    {
        kanji: "演劇",
        kana: "えんげき",
        meaning: "play (theatrical)",
        JLPT: 2
    },
    {
        kanji: "円周",
        kana: "えんしゅう",
        meaning: "circumference",
        JLPT: 2
    },
    {
        kanji: "遠足",
        kana: "えんそく",
        meaning: "trip,hike,picnic",
        JLPT: 2
    },
    {
        kanji: "延長",
        kana: "えんちょう",
        meaning: "extension,elongation,prolongation,lengthening",
        JLPT: 2
    },
    {
        kanji: "煙突",
        kana: "えんとつ",
        meaning: "chimney",
        JLPT: 2
    },
    {
        kanji: "追い掛ける",
        kana: "おいかける",
        meaning: "to chase or run after someone,to run down,to pursue",
        JLPT: 2
    },
    {
        kanji: "追い越す",
        kana: "おいこす",
        meaning: "to pass (e.g. car),to outdistance,to outstrip",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "オイル",
        meaning: "oil,engine oil,kerosene",
        JLPT: 2
    },
    {
        kanji: "応援",
        kana: "おうえん",
        meaning: "aid,assistance,help,reinforcement",
        JLPT: 2
    },
    {
        kanji: "王女",
        kana: "おうじょ",
        meaning: "princess",
        JLPT: 2
    },
    {
        kanji: "応ずる",
        kana: "おうずる",
        meaning: "to answer,to respond,to meet,to satisfy,to accept",
        JLPT: 2
    },
    {
        kanji: "応接",
        kana: "おうせつ",
        meaning: "reception",
        JLPT: 2
    },
    {
        kanji: "応対",
        kana: "おうたい",
        meaning: "receiving,dealing with",
        JLPT: 2
    },
    {
        kanji: "往復",
        kana: "おうふく",
        meaning: "(col) round trip,coming and going,return ticket",
        JLPT: 2
    },
    {
        kanji: "欧米",
        kana: "おうべい",
        meaning: "Europe and America,the West",
        JLPT: 2
    },
    {
        kanji: "応用",
        kana: "おうよう",
        meaning: "application,put to practical use",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "オーケストラ",
        meaning: "orchestra",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おおざっぱ",
        meaning: "rough (not precise),broad,sketchy",
        JLPT: 2
    },
    {
        kanji: "大通り",
        kana: "おおどおり",
        meaning: "main street",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "オートメーション",
        meaning: "automation",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "オーバーコート",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "大凡",
        kana: "おおよそ",
        meaning: "about,roughly,as a rule,approximately",
        JLPT: 2
    },
    {
        kanji: "お帰り",
        kana: "おかえり",
        meaning: "return,welcome",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おかけください",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おかげさまで",
        meaning: "Thanks to god,thanks to you",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おかず",
        meaning: "side dish,accompaniment for rice dishes",
        JLPT: 2
    },
    {
        kanji: "拝む",
        kana: "おがむ",
        meaning: "to worship,to beg,to make a supplication",
        JLPT: 2
    },
    {
        kanji: "お代わり",
        kana: "おかわり",
        meaning: "second helping,another cup",
        JLPT: 2
    },
    {
        kanji: "補う",
        kana: "おぎなう",
        meaning: "to compensate for",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おきのどくに",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "屋外",
        kana: "おくがい",
        meaning: "outdoors",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おくさん",
        meaning: "(hon) wife,your wife,madam",
        JLPT: 2
    },
    {
        kanji: "送り仮名",
        kana: "おくりがな",
        meaning: "part of word written in kana",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おげんきで",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "怠る",
        kana: "おこたる",
        meaning: "to neglect,to be off guard,to be feeling better",
        JLPT: 2
    },
    {
        kanji: "押える",
        kana: "おさえる",
        meaning: "to stop,to restrain,to seize,to repress,to suppress,to press down",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おさきに",
        meaning: "before,ahead,previously",
        JLPT: 2
    },
    {
        kanji: "納める",
        kana: "おさめる",
        meaning: "to obtain,to reap,to pay,to supply,to accept",
        JLPT: 2
    },
    {
        kanji: "治める",
        kana: "おさめる",
        meaning: "(1) to govern,to manage,(2) to subdue",
        JLPT: 2
    },
    {
        kanji: "惜しい",
        kana: "おしい",
        meaning: "regrettable,disappointing,precious",
        JLPT: 2
    },
    {
        kanji: "御辞儀",
        kana: "おじぎ",
        meaning: "bow",
        JLPT: 2
    },
    {
        kanji: "伯父さん",
        kana: "おじさん",
        meaning: "middle-aged gentleman,uncle",
        JLPT: 2
    },
    {
        kanji: "小父さん",
        kana: "おじさん",
        meaning: "middle-aged gentleman,uncle",
        JLPT: 2
    },
    {
        kanji: "叔父さん",
        kana: "おじさん",
        meaning: "middle-aged gentleman,uncle",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おしゃれ",
        meaning: "smartly dressed,someone smartly dressed,fashion-conscious",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おじゃまします",
        meaning: "Excuse me for disturbing you",
        JLPT: 2
    },
    {
        kanji: "教わる",
        kana: "おそわる",
        meaning: "to be taught",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おだいじに",
        meaning: "Take care of yourself",
        JLPT: 2
    },
    {
        kanji: "落着く",
        kana: "おちつく",
        meaning: "to calm down,to settle down",
        JLPT: 2
    },
    {
        kanji: "御手洗",
        kana: "おてあらい",
        meaning: "font of purifying water placed at entrance of shrine",
        JLPT: 2
    },
    {
        kanji: "お出掛け",
        kana: "おでかけ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "お手伝いさん",
        kana: "おてつだいさん",
        meaning: "maid",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おどかす",
        meaning: "to threaten,to coerce",
        JLPT: 2
    },
    {
        kanji: "落し物",
        kana: "おとしもの",
        meaning: "lost property",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おととい",
        meaning: "day before yesterday",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おととし",
        meaning: "year before last",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おとなしい",
        meaning: "obedient,docile,quiet",
        JLPT: 2
    },
    {
        kanji: "驚かす",
        kana: "おどろかす",
        meaning: "to surprise,to frighten,to create a stir",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おねがいします",
        meaning: "please",
        JLPT: 2
    },
    {
        kanji: "各々",
        kana: "おのおの",
        meaning: "each,every,either,respectively,severally",
        JLPT: 2
    },
    {
        kanji: "伯母さん",
        kana: "おばさん",
        meaning: "(hon) aunt",
        JLPT: 2
    },
    {
        kanji: "叔母さん",
        kana: "おばさん",
        meaning: "(1) aunt,(2) middle-aged lady",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おはよう",
        meaning: "(abbr) Good morning",
        JLPT: 2
    },
    {
        kanji: "お参り",
        kana: "おまいり",
        meaning: "worship,shrine visit",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おまたせしました",
        meaning: "Sorry to have kept you waiting",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おまちください",
        meaning: "Please wait a moment",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おまちどおさま",
        meaning: "Sorry to have kept you waiting",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おめでたい",
        meaning: "happy event,matter for congratulation,auspicious event,pregnancy",
        JLPT: 2
    },
    {
        kanji: "思い掛けない",
        kana: "おもいがけない",
        meaning: "unexpected,casual",
        JLPT: 2
    },
    {
        kanji: "思い込む",
        kana: "おもいこむ",
        meaning: "to be under impression that,to be convinced that",
        JLPT: 2
    },
    {
        kanji: "思いっ切り",
        kana: "おもいっきり",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "思い付く",
        kana: "おもいつく",
        meaning: "to think of,to hit upon",
        JLPT: 2
    },
    {
        kanji: "重たい",
        kana: "おもたい",
        meaning: "heavy,massive,serious",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おやすみ",
        meaning: "(1) holiday,absence,rest,(2) (exp) Good night",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "おやつ",
        meaning: "(1) between meal snack,afternoon refreshment",
        JLPT: 2
    },
    {
        kanji: "親指",
        kana: "おやゆび",
        meaning: "thumb",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "オルガン",
        meaning: "organ",
        JLPT: 2
    },
    {
        kanji: "卸す",
        kana: "おろす",
        meaning: "to sell wholesale,grated (vegetables)",
        JLPT: 2
    },
    {
        kanji: "恩恵",
        kana: "おんけい",
        meaning: "grace,favor,blessing,benefit",
        JLPT: 2
    },
    {
        kanji: "温室",
        kana: "おんしつ",
        meaning: "greenhouse",
        JLPT: 2
    },
    {
        kanji: "温泉",
        kana: "おんせん",
        meaning: "spa,hot spring,onsen",
        JLPT: 2
    },
    {
        kanji: "温帯",
        kana: "おんたい",
        meaning: "temperate zone",
        JLPT: 2
    },
    {
        kanji: "御中",
        kana: "おんちゅう",
        meaning: "and Company,Messrs.",
        JLPT: 2
    },
    {
        kanji: "女の人",
        kana: "おんなのひと",
        meaning: "woman",
        JLPT: 2
    },
    {
        kanji: "蚊",
        kana: "か",
        meaning: "mosquito",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "カーブ",
        meaning: "(1) curve,(2) curve ball (baseball)",
        JLPT: 2
    },
    {
        kanji: "貝",
        kana: "かい",
        meaning: "shell,shellfish",
        JLPT: 2
    },
    {
        kanji: "開会",
        kana: "かいかい",
        meaning: "opening of a meeting",
        JLPT: 2
    },
    {
        kanji: "会館",
        kana: "かいかん",
        meaning: "meeting hall,assembly hall",
        JLPT: 2
    },
    {
        kanji: "改札",
        kana: "かいさつ",
        meaning: "examination of tickets",
        JLPT: 2
    },
    {
        kanji: "解散",
        kana: "かいさん",
        meaning: "breakup,dissolution",
        JLPT: 2
    },
    {
        kanji: "海水浴",
        kana: "かいすいよく",
        meaning: "sea bathing,seawater bath",
        JLPT: 2
    },
    {
        kanji: "回数",
        kana: "かいすう",
        meaning: "number of times,frequency",
        JLPT: 2
    },
    {
        kanji: "回数券",
        kana: "かいすうけん",
        meaning: "book of tickets",
        JLPT: 2
    },
    {
        kanji: "改正",
        kana: "かいせい",
        meaning: "revision,amendment,alteration",
        JLPT: 2
    },
    {
        kanji: "快晴",
        kana: "かいせい",
        meaning: "good weather",
        JLPT: 2
    },
    {
        kanji: "解説",
        kana: "かいせつ",
        meaning: "explanation,commentary",
        JLPT: 2
    },
    {
        kanji: "改造",
        kana: "かいぞう",
        meaning: "(1) remodeling,(2) modding (comp)",
        JLPT: 2
    },
    {
        kanji: "開通",
        kana: "かいつう",
        meaning: "opening,open",
        JLPT: 2
    },
    {
        kanji: "回転",
        kana: "かいてん",
        meaning: "rotation,revolution,turning",
        JLPT: 2
    },
    {
        kanji: "解答",
        kana: "かいとう",
        meaning: "answer,solution",
        JLPT: 2
    },
    {
        kanji: "回答",
        kana: "かいとう",
        meaning: "reply,answer",
        JLPT: 2
    },
    {
        kanji: "外部",
        kana: "がいぶ",
        meaning: "the outside,external",
        JLPT: 2
    },
    {
        kanji: "解放",
        kana: "かいほう",
        meaning: "release,liberation,emancipation",
        JLPT: 2
    },
    {
        kanji: "開放",
        kana: "かいほう",
        meaning: "open,throw open,liberalization",
        JLPT: 2
    },
    {
        kanji: "海洋",
        kana: "かいよう",
        meaning: "ocean",
        JLPT: 2
    },
    {
        kanji: "概論",
        kana: "がいろん",
        meaning: "intro,outline,general remarks",
        JLPT: 2
    },
    {
        kanji: "帰す",
        kana: "かえす",
        meaning: "to send back",
        JLPT: 2
    },
    {
        kanji: "却って",
        kana: "かえって",
        meaning: "on the contrary,rather,all the more,instead",
        JLPT: 2
    },
    {
        kanji: "代える",
        kana: "かえる",
        meaning: "to exchange,to interchange,to substitute,to replace",
        JLPT: 2
    },
    {
        kanji: "反る",
        kana: "かえる",
        meaning: "to warp,to be warped,to curve",
        JLPT: 2
    },
    {
        kanji: "家屋",
        kana: "かおく",
        meaning: "house,building",
        JLPT: 2
    },
    {
        kanji: "係わる",
        kana: "かかわる",
        meaning: "to concern oneself in,to have to do with,to affect,to influence,to stick to (opinions)",
        JLPT: 2
    },
    {
        kanji: "書留",
        kana: "かきとめ",
        meaning: "writing down,putting on record,recording,making a note of,registration (of mail)",
        JLPT: 2
    },
    {
        kanji: "書取",
        kana: "かきとり",
        meaning: "dictation",
        JLPT: 2
    },
    {
        kanji: "垣根",
        kana: "かきね",
        meaning: "hedge",
        JLPT: 2
    },
    {
        kanji: "掻く",
        kana: "かく",
        meaning: "to scratch,to perspire",
        JLPT: 2
    },
    {
        kanji: "嗅ぐ",
        kana: "かぐ",
        meaning: "to sniff,to smell",
        JLPT: 2
    },
    {
        kanji: "架空",
        kana: "かくう",
        meaning: "aerial,overhead,fiction,fanciful",
        JLPT: 2
    },
    {
        kanji: "各自",
        kana: "かくじ",
        meaning: "individual,each",
        JLPT: 2
    },
    {
        kanji: "拡充",
        kana: "かくじゅう",
        meaning: "expansion",
        JLPT: 2
    },
    {
        kanji: "学術",
        kana: "がくじゅつ",
        meaning: "science,learning,scholarship",
        JLPT: 2
    },
    {
        kanji: "各地",
        kana: "かくち",
        meaning: "every place,various places",
        JLPT: 2
    },
    {
        kanji: "拡張",
        kana: "かくちょう",
        meaning: "expansion,extension,enlargement,escape (ESC)",
        JLPT: 2
    },
    {
        kanji: "角度",
        kana: "かくど",
        meaning: "angle",
        JLPT: 2
    },
    {
        kanji: "学年",
        kana: "がくねん",
        meaning: "year in school,grade in school",
        JLPT: 2
    },
    {
        kanji: "学部",
        kana: "がくぶ",
        meaning: "department of a university,undergraduate",
        JLPT: 2
    },
    {
        kanji: "格別",
        kana: "かくべつ",
        meaning: "exceptional",
        JLPT: 2
    },
    {
        kanji: "確率",
        kana: "かくりつ",
        meaning: "probability",
        JLPT: 2
    },
    {
        kanji: "学力",
        kana: "がくりょく",
        meaning: "scholarship,knowledge,literary ability",
        JLPT: 2
    },
    {
        kanji: "掛け算",
        kana: "かけざん",
        meaning: "multiplication",
        JLPT: 2
    },
    {
        kanji: "可決",
        kana: "かけつ",
        meaning: "approval,adoption (e.g. motion, bill),passage",
        JLPT: 2
    },
    {
        kanji: "火口",
        kana: "かこう",
        meaning: "a burner,origin of a fire",
        JLPT: 2
    },
    {
        kanji: "下降",
        kana: "かこう",
        meaning: "downward,descent,fall,drop,subsidence",
        JLPT: 2
    },
    {
        kanji: "重なる",
        kana: "かさなる",
        meaning: "to be piled up,lie on top of one another,overlap each other",
        JLPT: 2
    },
    {
        kanji: "重ねる",
        kana: "かさねる",
        meaning: "to pile up,to put something on another,to heap up,to add,to repeat",
        JLPT: 2
    },
    {
        kanji: "飾り",
        kana: "かざり",
        meaning: "decoration",
        JLPT: 2
    },
    {
        kanji: "火山",
        kana: "かざん",
        meaning: "volcano",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "かしこまりました",
        meaning: "certainly!",
        JLPT: 2
    },
    {
        kanji: "貸し出し",
        kana: "かしだし",
        meaning: "lending,loaning",
        JLPT: 2
    },
    {
        kanji: "過失",
        kana: "かしつ",
        meaning: "error,blunder,accident",
        JLPT: 2
    },
    {
        kanji: "果実",
        kana: "かじつ",
        meaning: "fruit,nut,berry.",
        JLPT: 2
    },
    {
        kanji: "貸間",
        kana: "かしま",
        meaning: "room to let",
        JLPT: 2
    },
    {
        kanji: "貸家",
        kana: "かしや",
        meaning: "house for rent",
        JLPT: 2
    },
    {
        kanji: "個所",
        kana: "かしょ",
        meaning: "passage,place,point,part",
        JLPT: 2
    },
    {
        kanji: "過剰",
        kana: "かじょう",
        meaning: "excess,over-",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "かじる",
        meaning: "to chew,to bite (at),to gnaw,to nibble",
        JLPT: 2
    },
    {
        kanji: "課税",
        kana: "かぜい",
        meaning: "taxation",
        JLPT: 2
    },
    {
        kanji: "下線",
        kana: "かせん",
        meaning: "underline,underscore",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "カセット",
        meaning: "cassette (tape)",
        JLPT: 2
    },
    {
        kanji: "加速",
        kana: "かそく",
        meaning: "acceleration",
        JLPT: 2
    },
    {
        kanji: "加速度",
        kana: "かそくど",
        meaning: "acceleration",
        JLPT: 2
    },
    {
        kanji: "固い",
        kana: "かたい",
        meaning: "stubborn,firm (not viscous or easily moved)",
        JLPT: 2
    },
    {
        kanji: "堅い",
        kana: "かたい",
        meaning: "hard (esp. wood),steadfast,honorable,stuffy writing",
        JLPT: 2
    },
    {
        kanji: "片仮名",
        kana: "かたかな",
        meaning: "katakana",
        JLPT: 2
    },
    {
        kanji: "片付く",
        kana: "かたづく",
        meaning: "to put in order,to dispose of,to solve",
        JLPT: 2
    },
    {
        kanji: "塊",
        kana: "かたまり",
        meaning: "lump,mass,clod,cluster",
        JLPT: 2
    },
    {
        kanji: "固まる",
        kana: "かたまる",
        meaning: "to harden,to solidify,to become firm,to become certain",
        JLPT: 2
    },
    {
        kanji: "片道",
        kana: "かたみち",
        meaning: "one-way (trip)",
        JLPT: 2
    },
    {
        kanji: "傾く",
        kana: "かたむく",
        meaning: "to incline toward,to slant,to lurch",
        JLPT: 2
    },
    {
        kanji: "片寄る",
        kana: "かたよる",
        meaning: "to be one-sided,to incline,to be partial",
        JLPT: 2
    },
    {
        kanji: "学科",
        kana: "がっか",
        meaning: "study subject,course of study",
        JLPT: 2
    },
    {
        kanji: "学会",
        kana: "がっかい",
        meaning: "scientific society,academic meeting",
        JLPT: 2
    },
    {
        kanji: "楽器",
        kana: "がっき",
        meaning: "musical instrument",
        JLPT: 2
    },
    {
        kanji: "学級",
        kana: "がっきゅう",
        meaning: "grade in school",
        JLPT: 2
    },
    {
        kanji: "担ぐ",
        kana: "かつぐ",
        meaning: "to shoulder,to carry on shoulder",
        JLPT: 2
    },
    {
        kanji: "括弧",
        kana: "かっこ",
        meaning: "parenthesis,brackets",
        JLPT: 2
    },
    {
        kanji: "活字",
        kana: "かつじ",
        meaning: "printing type",
        JLPT: 2
    },
    {
        kanji: "活躍",
        kana: "かつやく",
        meaning: "activity",
        JLPT: 2
    },
    {
        kanji: "活力",
        kana: "かつりょく",
        meaning: "vitality,energy",
        JLPT: 2
    },
    {
        kanji: "仮定",
        kana: "かてい",
        meaning: "assumption,supposition,hypothesis",
        JLPT: 2
    },
    {
        kanji: "過程",
        kana: "かてい",
        meaning: "process",
        JLPT: 2
    },
    {
        kanji: "課程",
        kana: "かてい",
        meaning: "course,curriculum",
        JLPT: 2
    },
    {
        kanji: "仮名",
        kana: "かな",
        meaning: "(n) alias,pseudonym,pen name",
        JLPT: 2
    },
    {
        kanji: "仮名遣い",
        kana: "かなづかい",
        meaning: "kana orthography,syllabary spelling",
        JLPT: 2
    },
    {
        kanji: "鐘",
        kana: "かね",
        meaning: "bell,chime",
        JLPT: 2
    },
    {
        kanji: "加熱",
        kana: "かねつ",
        meaning: "heating",
        JLPT: 2
    },
    {
        kanji: "兼ねる",
        kana: "かねる",
        meaning: "to hold (position),to serve,to be unable",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "カバー",
        meaning: "cover (ex. book)",
        JLPT: 2
    },
    {
        kanji: "過半数",
        kana: "かはんすう",
        meaning: "majority",
        JLPT: 2
    },
    {
        kanji: "被せる",
        kana: "かぶせる",
        meaning: "to cover (with something)",
        JLPT: 2
    },
    {
        kanji: "釜",
        kana: "かま",
        meaning: "iron pot,kettle",
        JLPT: 2
    },
    {
        kanji: "紙屑",
        kana: "かみくず",
        meaning: "wastepaper",
        JLPT: 2
    },
    {
        kanji: "神様",
        kana: "かみさま",
        meaning: "god",
        JLPT: 2
    },
    {
        kanji: "剃刀",
        kana: "かみそり",
        meaning: "razor",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ガム",
        meaning: "chewing gum",
        JLPT: 2
    },
    {
        kanji: "貨物",
        kana: "かもつ",
        meaning: "cargo,freight",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "かゆい",
        meaning: "itchy,itching",
        JLPT: 2
    },
    {
        kanji: "歌謡",
        kana: "かよう",
        meaning: "song,ballad",
        JLPT: 2
    },
    {
        kanji: "殻",
        kana: "から",
        meaning: "shell,husk,hull,chaff",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "カラー",
        meaning: "collar,color,colour",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "からかう",
        meaning: "to ridicule,to tease,to banter with,to make fun of",
        JLPT: 2
    },
    {
        kanji: "空っぽ",
        kana: "からっぽ",
        meaning: "empty,vacant,hollow",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "かるた",
        meaning: "(n) playing cards (pt: carta)",
        JLPT: 2
    },
    {
        kanji: "枯れる",
        kana: "かれる",
        meaning: "to wither,to die (plant),to be blasted (plant)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "カロリー",
        meaning: "calorie",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "かわいがる",
        meaning: "to love,to be affectionate",
        JLPT: 2
    },
    {
        kanji: "乾かす",
        kana: "かわかす",
        meaning: "to dry (clothes, etc.),to desiccate",
        JLPT: 2
    },
    {
        kanji: "渇く",
        kana: "かわく",
        meaning: "to be thirsty",
        JLPT: 2
    },
    {
        kanji: "為替",
        kana: "かわせ",
        meaning: "money order,exchange",
        JLPT: 2
    },
    {
        kanji: "瓦",
        kana: "かわら",
        meaning: "roof tile",
        JLPT: 2
    },
    {
        kanji: "代る",
        kana: "かわる",
        meaning: "(v5r,vi) to take the place of,to relieve,to be substituted for",
        JLPT: 2
    },
    {
        kanji: "間隔",
        kana: "かんかく",
        meaning: "space,interval,SPC",
        JLPT: 2
    },
    {
        kanji: "換気",
        kana: "かんき",
        meaning: "ventilation",
        JLPT: 2
    },
    {
        kanji: "感激",
        kana: "かんげき",
        meaning: "deep emotion,impression,inspiration",
        JLPT: 2
    },
    {
        kanji: "関西",
        kana: "かんさい",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "鑑賞",
        kana: "かんしょう",
        meaning: "appreciation",
        JLPT: 2
    },
    {
        kanji: "感ずる",
        kana: "かんずる",
        meaning: "to feel,to sense",
        JLPT: 2
    },
    {
        kanji: "間接",
        kana: "かんせつ",
        meaning: "indirection,indirectness",
        JLPT: 2
    },
    {
        kanji: "乾燥",
        kana: "かんそう",
        meaning: "dry,arid,insipid,dehydrated",
        JLPT: 2
    },
    {
        kanji: "感想",
        kana: "かんそう",
        meaning: "impressions,thoughts",
        JLPT: 2
    },
    {
        kanji: "観測",
        kana: "かんそく",
        meaning: "observation",
        JLPT: 2
    },
    {
        kanji: "寒帯",
        kana: "かんたい",
        meaning: "frigid zone",
        JLPT: 2
    },
    {
        kanji: "官庁",
        kana: "かんちょう",
        meaning: "government office,authorities",
        JLPT: 2
    },
    {
        kanji: "勘違い",
        kana: "かんちがい",
        meaning: "misunderstanding,wrong guess",
        JLPT: 2
    },
    {
        kanji: "缶詰",
        kana: "かんづめ",
        meaning: "packing (in cans),canning,canned goods,tin can",
        JLPT: 2
    },
    {
        kanji: "乾電池",
        kana: "かんでんち",
        meaning: "dry cell,battery",
        JLPT: 2
    },
    {
        kanji: "関東",
        kana: "かんとう",
        meaning: "eastern half of Japan, including Tokyo",
        JLPT: 2
    },
    {
        kanji: "観念",
        kana: "かんねん",
        meaning: "(1) idea,notion,conception,(2) sense (e.g. of duty)",
        JLPT: 2
    },
    {
        kanji: "乾杯",
        kana: "かんぱい",
        meaning: "toast (drink)",
        JLPT: 2
    },
    {
        kanji: "看板",
        kana: "かんばん",
        meaning: "sign,signboard,doorplate,poster",
        JLPT: 2
    },
    {
        kanji: "看病",
        kana: "かんびょう",
        meaning: "nursing (a patient)",
        JLPT: 2
    },
    {
        kanji: "冠",
        kana: "かんむり",
        meaning: "crown,diadem,first,best",
        JLPT: 2
    },
    {
        kanji: "漢和",
        kana: "かんわ",
        meaning: "Chinese Character-Japanese (e.g. dictionary)",
        JLPT: 2
    },
    {
        kanji: "気圧",
        kana: "きあつ",
        meaning: "atmospheric pressure",
        JLPT: 2
    },
    {
        kanji: "器械",
        kana: "きかい",
        meaning: "instrument",
        JLPT: 2
    },
    {
        kanji: "着替え",
        kana: "きがえ",
        meaning: "changing clothes,change of clothes",
        JLPT: 2
    },
    {
        kanji: "機関車",
        kana: "きかんしゃ",
        meaning: "locomotive,engine",
        JLPT: 2
    },
    {
        kanji: "飢饉",
        kana: "ききん",
        meaning: "famine",
        JLPT: 2
    },
    {
        kanji: "器具",
        kana: "きぐ",
        meaning: "utensil",
        JLPT: 2
    },
    {
        kanji: "期限",
        kana: "きげん",
        meaning: "term,period",
        JLPT: 2
    },
    {
        kanji: "記号",
        kana: "きごう",
        meaning: "symbol,code",
        JLPT: 2
    },
    {
        kanji: "刻む",
        kana: "きざむ",
        meaning: "to mince,to carve,to engrave",
        JLPT: 2
    },
    {
        kanji: "儀式",
        kana: "ぎしき",
        meaning: "ceremony,rite,ritual,service",
        JLPT: 2
    },
    {
        kanji: "基準",
        kana: "きじゅん",
        meaning: "standard,basis,criteria,norm",
        JLPT: 2
    },
    {
        kanji: "規準",
        kana: "きじゅん",
        meaning: "standard,basis,criteria,norm",
        JLPT: 2
    },
    {
        kanji: "起床",
        kana: "きしょう",
        meaning: "rising,getting out of bed",
        JLPT: 2
    },
    {
        kanji: "着せる",
        kana: "きせる",
        meaning: "to put on clothes",
        JLPT: 2
    },
    {
        kanji: "基礎",
        kana: "きそ",
        meaning: "foundation,basis",
        JLPT: 2
    },
    {
        kanji: "気体",
        kana: "きたい",
        meaning: "vapour,gas",
        JLPT: 2
    },
    {
        kanji: "基地",
        kana: "きち",
        meaning: "base",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "きっかけ",
        meaning: "chance,start,cue,excuse",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぎっしり",
        meaning: "tightly,fully",
        JLPT: 2
    },
    {
        kanji: "基盤",
        kana: "きばん",
        meaning: "foundation,basis",
        JLPT: 2
    },
    {
        kanji: "客席",
        kana: "きゃくせき",
        meaning: "guest seating",
        JLPT: 2
    },
    {
        kanji: "客間",
        kana: "きゃくま",
        meaning: "parlor,guest room",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ギャング",
        meaning: "gang",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "キャンパス",
        meaning: "campus",
        JLPT: 2
    },
    {
        kanji: "休業",
        kana: "きゅうぎょう",
        meaning: "closed (e.g. store),business suspended,shutdown,holiday",
        JLPT: 2
    },
    {
        kanji: "休講",
        kana: "きゅうこう",
        meaning: "lecture cancelled",
        JLPT: 2
    },
    {
        kanji: "休息",
        kana: "きゅうそく",
        meaning: "rest,relief,relaxation",
        JLPT: 2
    },
    {
        kanji: "給与",
        kana: "きゅうよ",
        meaning: "allowance,grant,supply",
        JLPT: 2
    },
    {
        kanji: "休養",
        kana: "きゅうよう",
        meaning: "rest,break,recreation",
        JLPT: 2
    },
    {
        kanji: "清い",
        kana: "きよい",
        meaning: "clear,pure,noble",
        JLPT: 2
    },
    {
        kanji: "強化",
        kana: "きょうか",
        meaning: "strengthen,intensify,reinforce,solidify",
        JLPT: 2
    },
    {
        kanji: "境界",
        kana: "きょうかい",
        meaning: "boundary",
        JLPT: 2
    },
    {
        kanji: "行事",
        kana: "ぎょうじ",
        meaning: "event,function",
        JLPT: 2
    },
    {
        kanji: "恐縮",
        kana: "きょうしゅく",
        meaning: "shame,very kind of you,sorry to trouble",
        JLPT: 2
    },
    {
        kanji: "教養",
        kana: "きょうよう",
        meaning: "culture,education,refinement,cultivation",
        JLPT: 2
    },
    {
        kanji: "行列",
        kana: "ぎょうれつ",
        meaning: "(1) line,procession,(2) matrix (math)",
        JLPT: 2
    },
    {
        kanji: "漁業",
        kana: "ぎょぎょう",
        meaning: "fishing (industry)",
        JLPT: 2
    },
    {
        kanji: "曲線",
        kana: "きょくせん",
        meaning: "curve",
        JLPT: 2
    },
    {
        kanji: "規律",
        kana: "きりつ",
        meaning: "order,rules,law",
        JLPT: 2
    },
    {
        kanji: "斬る",
        kana: "きる",
        meaning: "(v5r) to behead,to murder",
        JLPT: 2
    },
    {
        kanji: "気を付ける",
        kana: "きをつける",
        meaning: "to be careful,to pay attention,to take care",
        JLPT: 2
    },
    {
        kanji: "金魚",
        kana: "きんぎょ",
        meaning: "goldfish",
        JLPT: 2
    },
    {
        kanji: "区域",
        kana: "くいき",
        meaning: "limits,boundary,domain,zone,sphere,territory",
        JLPT: 2
    },
    {
        kanji: "偶数",
        kana: "ぐうすう",
        meaning: "even number",
        JLPT: 2
    },
    {
        kanji: "空想",
        kana: "くうそう",
        meaning: "daydream,fantasy,fancy,vision",
        JLPT: 2
    },
    {
        kanji: "空中",
        kana: "くうちゅう",
        meaning: "sky,air",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "クーラー",
        meaning: "cooler,air conditioner",
        JLPT: 2
    },
    {
        kanji: "釘",
        kana: "くぎ",
        meaning: "nail",
        JLPT: 2
    },
    {
        kanji: "区切る",
        kana: "くぎる",
        meaning: "to punctuate,to cut off,to mark off,to stop,to put an end to",
        JLPT: 2
    },
    {
        kanji: "櫛",
        kana: "くし",
        meaning: "comb",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くしゃみ",
        meaning: "sneeze",
        JLPT: 2
    },
    {
        kanji: "苦情",
        kana: "くじょう",
        meaning: "complaint,troubles,objection",
        JLPT: 2
    },
    {
        kanji: "苦心",
        kana: "くしん",
        meaning: "pain,trouble",
        JLPT: 2
    },
    {
        kanji: "屑",
        kana: "くず",
        meaning: "waste,scrap",
        JLPT: 2
    },
    {
        kanji: "崩す",
        kana: "くずす",
        meaning: "to destroy,to pull down,to make change (money)",
        JLPT: 2
    },
    {
        kanji: "薬指",
        kana: "くすりゆび",
        meaning: "ring finger",
        JLPT: 2
    },
    {
        kanji: "崩れる",
        kana: "くずれる",
        meaning: "to collapse,to crumble",
        JLPT: 2
    },
    {
        kanji: "砕く",
        kana: "くだく",
        meaning: "to break,to smash",
        JLPT: 2
    },
    {
        kanji: "砕ける",
        kana: "くだける",
        meaning: "to break,to be broken",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くたびれる",
        meaning: "to get tired,to wear out",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くだらない",
        meaning: "good-for-nothing,stupid,trivial,worthless",
        JLPT: 2
    },
    {
        kanji: "下る",
        kana: "くだる",
        meaning: "to get down,to descend",
        JLPT: 2
    },
    {
        kanji: "唇",
        kana: "くちびる",
        meaning: "lips",
        JLPT: 2
    },
    {
        kanji: "口紅",
        kana: "くちべに",
        meaning: "lipstick",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くっつく",
        meaning: "to adhere to,to keep close to",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くっつける",
        meaning: "to attach",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くどい",
        meaning: "verbose,importunate,heavy (taste)",
        JLPT: 2
    },
    {
        kanji: "句読点",
        kana: "くとうてん",
        meaning: "punctuation marks",
        JLPT: 2
    },
    {
        kanji: "配る",
        kana: "くばる",
        meaning: "to distribute,to deliver",
        JLPT: 2
    },
    {
        kanji: "工夫",
        kana: "くふう",
        meaning: "labourer,worker",
        JLPT: 2
    },
    {
        kanji: "区分",
        kana: "くぶん",
        meaning: "division,section,classification",
        JLPT: 2
    },
    {
        kanji: "組合せ",
        kana: "くみあわせ",
        meaning: "combination",
        JLPT: 2
    },
    {
        kanji: "組み立てる",
        kana: "くみたてる",
        meaning: "to assemble,to set up,to construct",
        JLPT: 2
    },
    {
        kanji: "汲む",
        kana: "くむ",
        meaning: "(1) to draw (water),to dip,to scoop,to pump",
        JLPT: 2
    },
    {
        kanji: "酌む",
        kana: "くむ",
        meaning: "to serve sake",
        JLPT: 2
    },
    {
        kanji: "悔しい",
        kana: "くやしい",
        meaning: "regrettable,mortifying,vexing",
        JLPT: 2
    },
    {
        kanji: "悔やむ",
        kana: "くやむ",
        meaning: "to mourn",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "クリーニング",
        meaning: "cleaning,dry cleaning,laundry service",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くるむ",
        meaning: "to be engulfed in,to be enveloped by,to wrap up",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "くれぐれも",
        meaning: "repeatedly,sincerely,earnestly",
        JLPT: 2
    },
    {
        kanji: "咥える",
        kana: "くわえる",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "郡",
        kana: "ぐん",
        meaning: "country,district",
        JLPT: 2
    },
    {
        kanji: "稽古",
        kana: "けいこ",
        meaning: "practice,training,study",
        JLPT: 2
    },
    {
        kanji: "敬語",
        kana: "けいご",
        meaning: "honorific,term of respect",
        JLPT: 2
    },
    {
        kanji: "蛍光灯",
        kana: "けいこうとう",
        meaning: "fluorescent lamp,person who is slow to react",
        JLPT: 2
    },
    {
        kanji: "形式",
        kana: "けいしき",
        meaning: "form,formality,format,math expression",
        JLPT: 2
    },
    {
        kanji: "継続",
        kana: "けいぞく",
        meaning: "continuation",
        JLPT: 2
    },
    {
        kanji: "毛糸",
        kana: "けいと",
        meaning: "knitting wool",
        JLPT: 2
    },
    {
        kanji: "経度",
        kana: "けいど",
        meaning: "longitude",
        JLPT: 2
    },
    {
        kanji: "系統",
        kana: "けいとう",
        meaning: "system,family line,geological formation",
        JLPT: 2
    },
    {
        kanji: "芸能",
        kana: "げいのう",
        meaning: "public entertainment,accomplishments,attainments",
        JLPT: 2
    },
    {
        kanji: "競馬",
        kana: "けいば",
        meaning: "horse racing",
        JLPT: 2
    },
    {
        kanji: "警備",
        kana: "けいび",
        meaning: "defense,guard,policing,security",
        JLPT: 2
    },
    {
        kanji: "形容詞",
        kana: "けいようし",
        meaning: "true adjective",
        JLPT: 2
    },
    {
        kanji: "形容動詞",
        kana: "けいようどうし",
        meaning: "adjectival noun,quasi-adjective",
        JLPT: 2
    },
    {
        kanji: "外科",
        kana: "げか",
        meaning: "surgical department",
        JLPT: 2
    },
    {
        kanji: "毛皮",
        kana: "けがわ",
        meaning: "fur,skin,pelt",
        JLPT: 2
    },
    {
        kanji: "激増",
        kana: "げきぞう",
        meaning: "sudden increase",
        JLPT: 2
    },
    {
        kanji: "下車",
        kana: "げしゃ",
        meaning: "alighting,getting off",
        JLPT: 2
    },
    {
        kanji: "下旬",
        kana: "げじゅん",
        meaning: "month (last third of)",
        JLPT: 2
    },
    {
        kanji: "下水",
        kana: "げすい",
        meaning: "drainage,sewage,ditch,gutter,sewerage",
        JLPT: 2
    },
    {
        kanji: "削る",
        kana: "けずる",
        meaning: "to cut down little by little,to take a percentage",
        JLPT: 2
    },
    {
        kanji: "桁",
        kana: "けた",
        meaning: "column,beam,digit",
        JLPT: 2
    },
    {
        kanji: "下駄",
        kana: "げた",
        meaning: "geta (Japanese footwear),wooden clogs",
        JLPT: 2
    },
    {
        kanji: "血圧",
        kana: "けつあつ",
        meaning: "blood pressure",
        JLPT: 2
    },
    {
        kanji: "血液",
        kana: "けつえき",
        meaning: "blood",
        JLPT: 2
    },
    {
        kanji: "月給",
        kana: "げっきゅう",
        meaning: "monthly salary",
        JLPT: 2
    },
    {
        kanji: "傑作",
        kana: "けっさく",
        meaning: "masterpiece,best work,boner,blunder",
        JLPT: 2
    },
    {
        kanji: "月末",
        kana: "げつまつ",
        meaning: "end of the month",
        JLPT: 2
    },
    {
        kanji: "気配",
        kana: "けはい",
        meaning: "indication,market trend,worry",
        JLPT: 2
    },
    {
        kanji: "下品",
        kana: "げひん",
        meaning: "vulgarity,meanness,indecency,coarseness",
        JLPT: 2
    },
    {
        kanji: "煙い",
        kana: "けむい",
        meaning: "smoky",
        JLPT: 2
    },
    {
        kanji: "蹴る",
        kana: "ける",
        meaning: "to kick",
        JLPT: 2
    },
    {
        kanji: "けれども",
        kana: "",
        meaning: "but,however",
        JLPT: 2
    },
    {
        kanji: "険しい",
        kana: "けわしい",
        meaning: "inaccessible place,sharp eyes",
        JLPT: 2
    },
    {
        kanji: "見学",
        kana: "けんがく",
        meaning: "inspection,study by observation,field trip",
        JLPT: 2
    },
    {
        kanji: "謙虚",
        kana: "けんきょ",
        meaning: "modesty,humility",
        JLPT: 2
    },
    {
        kanji: "原稿",
        kana: "げんこう",
        meaning: "manuscript,copy",
        JLPT: 2
    },
    {
        kanji: "原産",
        kana: "げんさん",
        meaning: "place of origin,habitat",
        JLPT: 2
    },
    {
        kanji: "原始",
        kana: "げんし",
        meaning: "origin,primeval",
        JLPT: 2
    },
    {
        kanji: "研修",
        kana: "けんしゅう",
        meaning: "training",
        JLPT: 2
    },
    {
        kanji: "厳重",
        kana: "げんじゅう",
        meaning: "strict,rigour,severe,firm",
        JLPT: 2
    },
    {
        kanji: "謙遜",
        kana: "けんそん",
        meaning: "humble,humility,modesty",
        JLPT: 2
    },
    {
        kanji: "県庁",
        kana: "けんちょう",
        meaning: "prefectural office",
        JLPT: 2
    },
    {
        kanji: "限度",
        kana: "げんど",
        meaning: "limit,bounds",
        JLPT: 2
    },
    {
        kanji: "現に",
        kana: "げんに",
        meaning: "actually,really",
        JLPT: 2
    },
    {
        kanji: "顕微鏡",
        kana: "けんびきょう",
        meaning: "microscope",
        JLPT: 2
    },
    {
        kanji: "原理",
        kana: "げんり",
        meaning: "principle,theory,fundamental truth",
        JLPT: 2
    },
    {
        kanji: "原料",
        kana: "げんりょう",
        meaning: "raw materials",
        JLPT: 2
    },
    {
        kanji: "碁",
        kana: "ご",
        meaning: "Go (board game of capturing territory)",
        JLPT: 2
    },
    {
        kanji: "恋しい",
        kana: "こいしい",
        meaning: "(1) dear,beloved,darling,(2) yearned for",
        JLPT: 2
    },
    {
        kanji: "請う",
        kana: "こう",
        meaning: "to ask,to request",
        JLPT: 2
    },
    {
        kanji: "工員",
        kana: "こういん",
        meaning: "factory worker",
        JLPT: 2
    },
    {
        kanji: "強引",
        kana: "ごういん",
        meaning: "overbearing,coercive,pushy,forcible,high-handed",
        JLPT: 2
    },
    {
        kanji: "公害",
        kana: "こうがい",
        meaning: "public nuisance,pollution",
        JLPT: 2
    },
    {
        kanji: "高級",
        kana: "こうきゅう",
        meaning: "high class,high grade",
        JLPT: 2
    },
    {
        kanji: "公共",
        kana: "こうきょう",
        meaning: "public,community,public service,society,communal",
        JLPT: 2
    },
    {
        kanji: "工芸",
        kana: "こうげい",
        meaning: "industrial arts",
        JLPT: 2
    },
    {
        kanji: "孝行",
        kana: "こうこう",
        meaning: "filial piety",
        JLPT: 2
    },
    {
        kanji: "交差",
        kana: "こうさ",
        meaning: "cross",
        JLPT: 2
    },
    {
        kanji: "講師",
        kana: "こうし",
        meaning: "lecturer",
        JLPT: 2
    },
    {
        kanji: "工事",
        kana: "こうじ",
        meaning: "construction work",
        JLPT: 2
    },
    {
        kanji: "公式",
        kana: "こうしき",
        meaning: "formula,formality,official",
        JLPT: 2
    },
    {
        kanji: "口実",
        kana: "こうじつ",
        meaning: "excuse",
        JLPT: 2
    },
    {
        kanji: "こうして",
        kana: "こうして",
        meaning: "thus",
        JLPT: 2
    },
    {
        kanji: "校舎",
        kana: "こうしゃ",
        meaning: "school building",
        JLPT: 2
    },
    {
        kanji: "公衆",
        kana: "こうしゅう",
        meaning: "the public",
        JLPT: 2
    },
    {
        kanji: "香水",
        kana: "こうすい",
        meaning: "perfume",
        JLPT: 2
    },
    {
        kanji: "公正",
        kana: "こうせい",
        meaning: "justice,fairness,impartiality",
        JLPT: 2
    },
    {
        kanji: "功績",
        kana: "こうせき",
        meaning: "achievements,merit,meritorious service,meritorious deed",
        JLPT: 2
    },
    {
        kanji: "光線",
        kana: "こうせん",
        meaning: "beam,light ray",
        JLPT: 2
    },
    {
        kanji: "高層",
        kana: "こうそう",
        meaning: "upper",
        JLPT: 2
    },
    {
        kanji: "構造",
        kana: "こうぞう",
        meaning: "structure,construction",
        JLPT: 2
    },
    {
        kanji: "交替",
        kana: "こうたい",
        meaning: "alternation,change,relief,relay,shift",
        JLPT: 2
    },
    {
        kanji: "耕地",
        kana: "こうち",
        meaning: "arable land",
        JLPT: 2
    },
    {
        kanji: "交通機関",
        kana: "こうつうきかん",
        meaning: "transportation facilities",
        JLPT: 2
    },
    {
        kanji: "校庭",
        kana: "こうてい",
        meaning: "campus",
        JLPT: 2
    },
    {
        kanji: "肯定",
        kana: "こうてい",
        meaning: "positive,affirmation",
        JLPT: 2
    },
    {
        kanji: "高度",
        kana: "こうど",
        meaning: "altitude,height,advanced",
        JLPT: 2
    },
    {
        kanji: "高等",
        kana: "こうとう",
        meaning: "high class,high grade",
        JLPT: 2
    },
    {
        kanji: "合同",
        kana: "ごうどう",
        meaning: "combination,incorporation,union,amalgamation",
        JLPT: 2
    },
    {
        kanji: "後輩",
        kana: "こうはい",
        meaning: "junior (at work or school)",
        JLPT: 2
    },
    {
        kanji: "公表",
        kana: "こうひょう",
        meaning: "official announcement,proclamation",
        JLPT: 2
    },
    {
        kanji: "鉱物",
        kana: "こうぶつ",
        meaning: "mineral",
        JLPT: 2
    },
    {
        kanji: "公務",
        kana: "こうむ",
        meaning: "official business,public business",
        JLPT: 2
    },
    {
        kanji: "項目",
        kana: "こうもく",
        meaning: "item",
        JLPT: 2
    },
    {
        kanji: "紅葉",
        kana: "こうよう",
        meaning: "(1) (Japanese) maple",
        JLPT: 2
    },
    {
        kanji: "合理",
        kana: "ごうり",
        meaning: "rational",
        JLPT: 2
    },
    {
        kanji: "交流",
        kana: "こうりゅう",
        meaning: "alternating current,intercourse,(cultural) exchange,intermingling",
        JLPT: 2
    },
    {
        kanji: "合流",
        kana: "ごうりゅう",
        meaning: "confluence,union,linking up,merge",
        JLPT: 2
    },
    {
        kanji: "効力",
        kana: "こうりょく",
        meaning: "effect,efficacy,validity,potency",
        JLPT: 2
    },
    {
        kanji: "超える",
        kana: "こえる",
        meaning: "to exceed,to cross over,to cross",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コース",
        meaning: "course",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コーラス",
        meaning: "chorus",
        JLPT: 2
    },
    {
        kanji: "焦がす",
        kana: "こがす",
        meaning: "to burn,to scorch,to singe,to char",
        JLPT: 2
    },
    {
        kanji: "国王",
        kana: "こくおう",
        meaning: "king",
        JLPT: 2
    },
    {
        kanji: "国籍",
        kana: "こくせき",
        meaning: "nationality",
        JLPT: 2
    },
    {
        kanji: "国立",
        kana: "こくりつ",
        meaning: "national",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ごくろうさま",
        meaning: "Thank you very much for your....",
        JLPT: 2
    },
    {
        kanji: "焦げる",
        kana: "こげる",
        meaning: "to burn,to be burned",
        JLPT: 2
    },
    {
        kanji: "凍える",
        kana: "こごえる",
        meaning: "to freeze,to be chilled,to be frozen",
        JLPT: 2
    },
    {
        kanji: "心当たり",
        kana: "こころあたり",
        meaning: "having some knowledge of,happening to know",
        JLPT: 2
    },
    {
        kanji: "心得る",
        kana: "こころえる",
        meaning: "to be informed,to have thorough knowledge",
        JLPT: 2
    },
    {
        kanji: "腰掛け",
        kana: "こしかけ",
        meaning: "seat,bench",
        JLPT: 2
    },
    {
        kanji: "腰掛ける",
        kana: "こしかける",
        meaning: "to sit (down)",
        JLPT: 2
    },
    {
        kanji: "五十音",
        kana: "ごじゅうおん",
        meaning: "the Japanese syllabary",
        JLPT: 2
    },
    {
        kanji: "胡椒",
        kana: "こしょう",
        meaning: "pepper",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こしらえる",
        meaning: "to make,to manufacture",
        JLPT: 2
    },
    {
        kanji: "超す",
        kana: "こす",
        meaning: "to cross,to pass,to tide over",
        JLPT: 2
    },
    {
        kanji: "擦る",
        kana: "こする",
        meaning: "to rub,to chafe,to file,to frost (glass),to strike (match)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ごぞんじですか",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "個体",
        kana: "こたい",
        meaning: "an individual",
        JLPT: 2
    },
    {
        kanji: "御馳走",
        kana: "ごちそう",
        meaning: "feast,treating (someone)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ごちそうさま",
        meaning: "feast",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こちらこそ",
        meaning: "it is I who should say so",
        JLPT: 2
    },
    {
        kanji: "小遣い",
        kana: "こづかい",
        meaning: "personal expenses,pocket money,spending money,incidental expenses,allowance",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コック",
        meaning: "(1) cook (nl:),(2) tap,spigot,faucet,cock",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こっそり",
        meaning: "stealthily,secretly",
        JLPT: 2
    },
    {
        kanji: "古典",
        kana: "こてん",
        meaning: "old book,classics,classic",
        JLPT: 2
    },
    {
        kanji: "琴",
        kana: "こと",
        meaning: "Koto (Japanese harp)",
        JLPT: 2
    },
    {
        kanji: "言付ける",
        kana: "ことづける",
        meaning: "to send word,to send a message",
        JLPT: 2
    },
    {
        kanji: "言葉遣い",
        kana: "ことばづかい",
        meaning: "speech,expression,wording",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こないだ",
        meaning: "the other day,lately,recently",
        JLPT: 2
    },
    {
        kanji: "御無沙汰",
        kana: "ごぶさた",
        meaning: "not writing or contacting for a while",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こぼす",
        meaning: "to spill",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こぼれる",
        meaning: "to overflow,to spill",
        JLPT: 2
    },
    {
        kanji: "塵芥",
        kana: "ごみ",
        meaning: "trash,rubbish",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ゴム",
        meaning: "gum,rubber,eraser",
        JLPT: 2
    },
    {
        kanji: "御免",
        kana: "ごめん",
        meaning: "your pardon,declining (something),dismissal,permission",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ごめんください",
        meaning: "May I come in?",
        JLPT: 2
    },
    {
        kanji: "小指",
        kana: "こゆび",
        meaning: "little finger",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こらえる",
        meaning: "to bear,to stand,to endure,to put up with",
        JLPT: 2
    },
    {
        kanji: "娯楽",
        kana: "ごらく",
        meaning: "pleasure,amusement",
        JLPT: 2
    },
    {
        kanji: "御覧",
        kana: "ごらん",
        meaning: "(hon) look,inspection,try",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コレクション",
        meaning: "(1) collection,(2) correction",
        JLPT: 2
    },
    {
        kanji: "転がす",
        kana: "ころがす",
        meaning: "to roll",
        JLPT: 2
    },
    {
        kanji: "転がる",
        kana: "ころがる",
        meaning: "to roll,to tumble",
        JLPT: 2
    },
    {
        kanji: "紺",
        kana: "こん",
        meaning: "navy blue,deep blue",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コンクール",
        meaning: "contest (fr: concours)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コンクリート",
        meaning: "concrete",
        JLPT: 2
    },
    {
        kanji: "混合",
        kana: "こんごう",
        meaning: "mixing,mixture",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "コンセント",
        meaning: "(1) consent,(2) concentric",
        JLPT: 2
    },
    {
        kanji: "献立",
        kana: "こんだて",
        meaning: "menu,program,schedule",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "こんばんは",
        meaning: "good evening",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "サークル",
        meaning: "circle,sports club (i.e. at a company)",
        JLPT: 2
    },
    {
        kanji: "在学",
        kana: "ざいがく",
        meaning: "(enrolled) in school",
        JLPT: 2
    },
    {
        kanji: "再三",
        kana: "さいさん",
        meaning: "again and again,repeatedly",
        JLPT: 2
    },
    {
        kanji: "祭日",
        kana: "さいじつ",
        meaning: "national holiday,festival day",
        JLPT: 2
    },
    {
        kanji: "催促",
        kana: "さいそく",
        meaning: "request,demand,claim,urge (action),press for",
        JLPT: 2
    },
    {
        kanji: "採点",
        kana: "さいてん",
        meaning: "marking,grading,looking over",
        JLPT: 2
    },
    {
        kanji: "災難",
        kana: "さいなん",
        meaning: "calamity,misfortune",
        JLPT: 2
    },
    {
        kanji: "裁縫",
        kana: "さいほう",
        meaning: "sewing",
        JLPT: 2
    },
    {
        kanji: "材木",
        kana: "ざいもく",
        meaning: "lumber,timber",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "サイレン",
        meaning: "siren",
        JLPT: 2
    },
    {
        kanji: "逆さ",
        kana: "さかさ",
        meaning: "reverse,inversion,upside down",
        JLPT: 2
    },
    {
        kanji: "逆様",
        kana: "さかさま",
        meaning: "inversion,upside down",
        JLPT: 2
    },
    {
        kanji: "捜す",
        kana: "さがす",
        meaning: "to search,to seek,to look for",
        JLPT: 2
    },
    {
        kanji: "遡る",
        kana: "さかのぼる",
        meaning: "to go back,to go upstream,to make retroactive",
        JLPT: 2
    },
    {
        kanji: "酒場",
        kana: "さかば",
        meaning: "bar,bar-room",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "さきおととい",
        meaning: "two days before yesterday",
        JLPT: 2
    },
    {
        kanji: "先程",
        kana: "さきほど",
        meaning: "some time ago",
        JLPT: 2
    },
    {
        kanji: "裂く",
        kana: "さく",
        meaning: "to tear,to split",
        JLPT: 2
    },
    {
        kanji: "索引",
        kana: "さくいん",
        meaning: "index,indices",
        JLPT: 2
    },
    {
        kanji: "作者",
        kana: "さくしゃ",
        meaning: "author,authoress",
        JLPT: 2
    },
    {
        kanji: "削除",
        kana: "さくじょ",
        meaning: "elimination,cancellation,deletion,erasure",
        JLPT: 2
    },
    {
        kanji: "作成",
        kana: "さくせい",
        meaning: "frame,draw up,make,producing",
        JLPT: 2
    },
    {
        kanji: "作製",
        kana: "さくせい",
        meaning: "manufacture",
        JLPT: 2
    },
    {
        kanji: "探る",
        kana: "さぐる",
        meaning: "to search,to look for,to sound out",
        JLPT: 2
    },
    {
        kanji: "囁く",
        kana: "ささやく",
        meaning: "to whisper,to murmur",
        JLPT: 2
    },
    {
        kanji: "刺さる",
        kana: "ささる",
        meaning: "to stick,to be stuck",
        JLPT: 2
    },
    {
        kanji: "匙",
        kana: "さじ",
        meaning: "spoon",
        JLPT: 2
    },
    {
        kanji: "座敷",
        kana: "ざしき",
        meaning: "tatami room",
        JLPT: 2
    },
    {
        kanji: "差し支え",
        kana: "さしつかえ",
        meaning: "hindrance,impediment",
        JLPT: 2
    },
    {
        kanji: "差し引き",
        kana: "さしひき",
        meaning: "deduction,subtraction,balance,ebb and flow,rise and fall",
        JLPT: 2
    },
    {
        kanji: "刺身",
        kana: "さしみ",
        meaning: "sliced raw fish",
        JLPT: 2
    },
    {
        kanji: "刺す",
        kana: "さす",
        meaning: "to pierce,to stab,to prick,to thrust",
        JLPT: 2
    },
    {
        kanji: "挿す",
        kana: "さす",
        meaning: "to insert,to put in,to graft,to wear in belt",
        JLPT: 2
    },
    {
        kanji: "注す",
        kana: "さす",
        meaning: "to pour (drink),to serve (drinks)",
        JLPT: 2
    },
    {
        kanji: "射す",
        kana: "さす",
        meaning: "to shine,to strike",
        JLPT: 2
    },
    {
        kanji: "流石",
        kana: "さすが",
        meaning: "clever,adept,good,expectations,as one would expect",
        JLPT: 2
    },
    {
        kanji: "撮影",
        kana: "さつえい",
        meaning: "photographing",
        JLPT: 2
    },
    {
        kanji: "雑音",
        kana: "ざつおん",
        meaning: "noise (jarring, grating)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "さっさと",
        meaning: "quickly",
        JLPT: 2
    },
    {
        kanji: "早速",
        kana: "さっそく",
        meaning: "at once,immediately,without delay,promptly",
        JLPT: 2
    },
    {
        kanji: "錆",
        kana: "さび",
        meaning: "rust (colour)",
        JLPT: 2
    },
    {
        kanji: "錆びる",
        kana: "さびる",
        meaning: "to rust,to become rusty",
        JLPT: 2
    },
    {
        kanji: "座布団",
        kana: "ざぶとん",
        meaning: "cushion (Japanese)",
        JLPT: 2
    },
    {
        kanji: "冷ます",
        kana: "さます",
        meaning: "to cool,to dampen,to let cool",
        JLPT: 2
    },
    {
        kanji: "妨げる",
        kana: "さまたげる",
        meaning: "to disturb,to prevent",
        JLPT: 2
    },
    {
        kanji: "冷める",
        kana: "さめる",
        meaning: "to become cool,to wear off,to abate,to subside",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "さようなら",
        meaning: "good-bye",
        JLPT: 2
    },
    {
        kanji: "再来月",
        kana: "さらいげつ",
        meaning: "month after next",
        JLPT: 2
    },
    {
        kanji: "再来週",
        kana: "さらいしゅう",
        meaning: "week after next",
        JLPT: 2
    },
    {
        kanji: "再来年",
        kana: "さらいねん",
        meaning: "year after next",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "サラリーマン",
        meaning: "salary man,company employee",
        JLPT: 2
    },
    {
        kanji: "騒がしい",
        kana: "さわがしい",
        meaning: "noisy",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "さわやか",
        meaning: "fresh,refreshing,invigorating",
        JLPT: 2
    },
    {
        kanji: "三角",
        kana: "さんかく",
        meaning: "triangle,triangular",
        JLPT: 2
    },
    {
        kanji: "算数",
        kana: "さんすう",
        meaning: "arithmetic",
        JLPT: 2
    },
    {
        kanji: "酸性",
        kana: "さんせい",
        meaning: "acidity",
        JLPT: 2
    },
    {
        kanji: "産地",
        kana: "さんち",
        meaning: "producing area",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "サンプル",
        meaning: "sample",
        JLPT: 2
    },
    {
        kanji: "山林",
        kana: "さんりん",
        meaning: "mountain forest,mountains and forest",
        JLPT: 2
    },
    {
        kanji: "仕上がる",
        kana: "しあがる",
        meaning: "to be finished",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しあさって",
        meaning: "two days after tomorrow",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "シーズン",
        meaning: "season (sporting)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "シーツ",
        meaning: "sheet",
        JLPT: 2
    },
    {
        kanji: "寺院",
        kana: "じいん",
        meaning: "temple",
        JLPT: 2
    },
    {
        kanji: "しいんと",
        kana: "（する）",
        meaning: "silent (as the grave),(deathly) quiet",
        JLPT: 2
    },
    {
        kanji: "自衛",
        kana: "じえい",
        meaning: "self-defense",
        JLPT: 2
    },
    {
        kanji: "塩辛い",
        kana: "しおからい",
        meaning: "salty (taste)",
        JLPT: 2
    },
    {
        kanji: "司会",
        kana: "しかい",
        meaning: "chairmanship",
        JLPT: 2
    },
    {
        kanji: "四角",
        kana: "しかく",
        meaning: "square",
        JLPT: 2
    },
    {
        kanji: "四角い",
        kana: "しかくい",
        meaning: "square",
        JLPT: 2
    },
    {
        kanji: "時間割",
        kana: "じかんわり",
        meaning: "timetable,schedule",
        JLPT: 2
    },
    {
        kanji: "四季",
        kana: "しき",
        meaning: "four seasons",
        JLPT: 2
    },
    {
        kanji: "敷地",
        kana: "しきち",
        meaning: "site",
        JLPT: 2
    },
    {
        kanji: "至急",
        kana: "しきゅう",
        meaning: "urgent,pressing",
        JLPT: 2
    },
    {
        kanji: "敷く",
        kana: "しく",
        meaning: "to spread out,to lay out",
        JLPT: 2
    },
    {
        kanji: "茂る",
        kana: "しげる",
        meaning: "to grow thick,to luxuriate,to be luxurious",
        JLPT: 2
    },
    {
        kanji: "持参",
        kana: "じさん",
        meaning: "bringing,taking,carrying",
        JLPT: 2
    },
    {
        kanji: "磁石",
        kana: "じしゃく",
        meaning: "magnet",
        JLPT: 2
    },
    {
        kanji: "四捨五入",
        kana: "ししゃごにゅう",
        meaning: "rounding up (fractions)",
        JLPT: 2
    },
    {
        kanji: "始終",
        kana: "しじゅう",
        meaning: "continuously,from beginning to end",
        JLPT: 2
    },
    {
        kanji: "自習",
        kana: "じしゅう",
        meaning: "self-study",
        JLPT: 2
    },
    {
        kanji: "静まる",
        kana: "しずまる",
        meaning: "to quieten down,to calm down,to subside",
        JLPT: 2
    },
    {
        kanji: "姿勢",
        kana: "しせい",
        meaning: "attitude,posture",
        JLPT: 2
    },
    {
        kanji: "自然科学",
        kana: "しぜんかがく",
        meaning: "natural science",
        JLPT: 2
    },
    {
        kanji: "時速",
        kana: "じそく",
        meaning: "speed (per hour)",
        JLPT: 2
    },
    {
        kanji: "子孫",
        kana: "しそん",
        meaning: "descendants,posterity,offspring",
        JLPT: 2
    },
    {
        kanji: "死体",
        kana: "したい",
        meaning: "corpse",
        JLPT: 2
    },
    {
        kanji: "下書き",
        kana: "したがき",
        meaning: "rough copy,draft",
        JLPT: 2
    },
    {
        kanji: "下町",
        kana: "したまち",
        meaning: "Shitamachi,lower parts of town",
        JLPT: 2
    },
    {
        kanji: "自治",
        kana: "じち",
        meaning: "self-government,autonomy",
        JLPT: 2
    },
    {
        kanji: "実感",
        kana: "じっかん",
        meaning: "feelings (actual, true)",
        JLPT: 2
    },
    {
        kanji: "湿気",
        kana: "しっけ",
        meaning: "moisture,humidity,dampness",
        JLPT: 2
    },
    {
        kanji: "湿気",
        kana: "しっき",
        meaning: "moisture,humidity,dampness",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しつこい",
        meaning: "insistent,obstinate",
        JLPT: 2
    },
    {
        kanji: "実習",
        kana: "じっしゅう",
        meaning: "practice,training",
        JLPT: 2
    },
    {
        kanji: "実績",
        kana: "じっせき",
        meaning: "achievements,actual results",
        JLPT: 2
    },
    {
        kanji: "湿度",
        kana: "しつど",
        meaning: "level of humidity",
        JLPT: 2
    },
    {
        kanji: "執筆",
        kana: "しっぴつ",
        meaning: "writing",
        JLPT: 2
    },
    {
        kanji: "実物",
        kana: "じつぶつ",
        meaning: "real thing,original",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しっぽ",
        meaning: "tail (animal)",
        JLPT: 2
    },
    {
        kanji: "実用",
        kana: "じつよう",
        meaning: "practical use,utility",
        JLPT: 2
    },
    {
        kanji: "実力",
        kana: "じつりょく",
        meaning: "merit,efficiency,arms,force",
        JLPT: 2
    },
    {
        kanji: "実例",
        kana: "じつれい",
        meaning: "example,illustration",
        JLPT: 2
    },
    {
        kanji: "失恋",
        kana: "しつれん",
        meaning: "disappointed love,broken heart,unrequited love,be lovelorn",
        JLPT: 2
    },
    {
        kanji: "指定",
        kana: "してい",
        meaning: "designation,specification,assignment,pointing at",
        JLPT: 2
    },
    {
        kanji: "私鉄",
        kana: "してつ",
        meaning: "private railway",
        JLPT: 2
    },
    {
        kanji: "児童",
        kana: "じどう",
        meaning: "children,juvenile",
        JLPT: 2
    },
    {
        kanji: "縛る",
        kana: "しばる",
        meaning: "to tie,to bind",
        JLPT: 2
    },
    {
        kanji: "地盤",
        kana: "じばん",
        meaning: "(the) ground",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しびれる",
        meaning: "to become numb,to go to sleep (i.e., a limb)",
        JLPT: 2
    },
    {
        kanji: "紙幣",
        kana: "しへい",
        meaning: "paper money,notes,bills",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しぼむ",
        meaning: "to wither,to fade (away),to shrivel,to wilt",
        JLPT: 2
    },
    {
        kanji: "絞る",
        kana: "しぼる",
        meaning: "to press,to wring,to squeeze",
        JLPT: 2
    },
    {
        kanji: "縞",
        kana: "しま",
        meaning: "stripe",
        JLPT: 2
    },
    {
        kanji: "地味",
        kana: "じみ",
        meaning: "plain,simple",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しみじみ",
        meaning: "keenly,deeply,heartily",
        JLPT: 2
    },
    {
        kanji: "氏名",
        kana: "しめい",
        meaning: "full name,identity",
        JLPT: 2
    },
    {
        kanji: "締切",
        kana: "しめきり",
        meaning: "closing,cut-off,end,deadline,Closed,No Entrance",
        JLPT: 2
    },
    {
        kanji: "締め切る",
        kana: "しめきる",
        meaning: "to shut up",
        JLPT: 2
    },
    {
        kanji: "湿る",
        kana: "しめる",
        meaning: "to be wet,to become wet,to be damp",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ジャーナリスト",
        meaning: "journalist",
        JLPT: 2
    },
    {
        kanji: "社会科学",
        kana: "しゃかいかがく",
        meaning: "social science",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しゃがむ",
        meaning: "to squat",
        JLPT: 2
    },
    {
        kanji: "蛇口",
        kana: "じゃぐち",
        meaning: "faucet,tap",
        JLPT: 2
    },
    {
        kanji: "弱点",
        kana: "じゃくてん",
        meaning: "weak point,weakness",
        JLPT: 2
    },
    {
        kanji: "車庫",
        kana: "しゃこ",
        meaning: "garage,car shed",
        JLPT: 2
    },
    {
        kanji: "車掌",
        kana: "しゃしょう",
        meaning: "(train) conductor",
        JLPT: 2
    },
    {
        kanji: "写生",
        kana: "しゃせい",
        meaning: "sketching,drawing from nature",
        JLPT: 2
    },
    {
        kanji: "社説",
        kana: "しゃせつ",
        meaning: "editorial,leading article",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しゃっくり",
        meaning: "hiccough,hiccup",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "シャッター",
        meaning: "shutter",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しゃぶる",
        meaning: "to suck,to chew",
        JLPT: 2
    },
    {
        kanji: "車輪",
        kana: "しゃりん",
        meaning: "(car) wheel",
        JLPT: 2
    },
    {
        kanji: "洒落",
        kana: "しゃれ",
        meaning: "joke,pun,witticism",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "じゃんけん",
        meaning: "(n) rock-scissors-paper game",
        JLPT: 2
    },
    {
        kanji: "集会",
        kana: "しゅうかい",
        meaning: "meeting,assembly",
        JLPT: 2
    },
    {
        kanji: "住居",
        kana: "じゅうきょ",
        meaning: "dwelling,house,residence,address",
        JLPT: 2
    },
    {
        kanji: "集金",
        kana: "しゅうきん",
        meaning: "money collection",
        JLPT: 2
    },
    {
        kanji: "集合",
        kana: "しゅうごう",
        meaning: "gathering,assembly,meeting,set (math)",
        JLPT: 2
    },
    {
        kanji: "習字",
        kana: "しゅうじ",
        meaning: "penmanship",
        JLPT: 2
    },
    {
        kanji: "修繕",
        kana: "しゅうぜん",
        meaning: "repair,mending",
        JLPT: 2
    },
    {
        kanji: "重体",
        kana: "じゅうたい",
        meaning: "seriously ill,serious condition,critical state",
        JLPT: 2
    },
    {
        kanji: "じゅうたん",
        kana: "（カーペット）",
        meaning: "carpet",
        JLPT: 2
    },
    {
        kanji: "終点",
        kana: "しゅうてん",
        meaning: "terminus,last stop (e.g train)",
        JLPT: 2
    },
    {
        kanji: "重点",
        kana: "じゅうてん",
        meaning: "important point,lay stress on,colon,emphasis",
        JLPT: 2
    },
    {
        kanji: "就任",
        kana: "しゅうにん",
        meaning: "inauguration,assumption of office",
        JLPT: 2
    },
    {
        kanji: "周辺",
        kana: "しゅうへん",
        meaning: "circumference,outskirts,environs,(computer) peripheral",
        JLPT: 2
    },
    {
        kanji: "重役",
        kana: "じゅうやく",
        meaning: "director,high executive",
        JLPT: 2
    },
    {
        kanji: "終了",
        kana: "しゅうりょう",
        meaning: "end,close,termination",
        JLPT: 2
    },
    {
        kanji: "重量",
        kana: "じゅうりょう",
        meaning: "(1) weight,(2) heavyweight boxer",
        JLPT: 2
    },
    {
        kanji: "重力",
        kana: "じゅうりょく",
        meaning: "gravity",
        JLPT: 2
    },
    {
        kanji: "熟語",
        kana: "じゅくご",
        meaning: "idiom,idiomatic phrase,kanji compound",
        JLPT: 2
    },
    {
        kanji: "祝日",
        kana: "しゅくじつ",
        meaning: "national holiday",
        JLPT: 2
    },
    {
        kanji: "縮小",
        kana: "しゅくしょう",
        meaning: "reduction,curtailment",
        JLPT: 2
    },
    {
        kanji: "受験",
        kana: "じゅけん",
        meaning: "taking an examination",
        JLPT: 2
    },
    {
        kanji: "主語",
        kana: "しゅご",
        meaning: "(gram) subject",
        JLPT: 2
    },
    {
        kanji: "出勤",
        kana: "しゅっきん",
        meaning: "going to work,at work",
        JLPT: 2
    },
    {
        kanji: "述語",
        kana: "じゅつご",
        meaning: "predicate",
        JLPT: 2
    },
    {
        kanji: "出張",
        kana: "しゅっちょう",
        meaning: "official tour,business trip",
        JLPT: 2
    },
    {
        kanji: "寿命",
        kana: "じゅみょう",
        meaning: "life span",
        JLPT: 2
    },
    {
        kanji: "主役",
        kana: "しゅやく",
        meaning: "leading part,leading actor (actress)",
        JLPT: 2
    },
    {
        kanji: "受話器",
        kana: "じゅわき",
        meaning: "(telephone) receiver",
        JLPT: 2
    },
    {
        kanji: "循環",
        kana: "じゅんかん",
        meaning: "circulation,rotation,cycle",
        JLPT: 2
    },
    {
        kanji: "巡査",
        kana: "じゅんさ",
        meaning: "police,policeman",
        JLPT: 2
    },
    {
        kanji: "順々",
        kana: "じゅんじゅん",
        meaning: "in order,in turn",
        JLPT: 2
    },
    {
        kanji: "順序",
        kana: "じゅんじょ",
        meaning: "order,sequence,procedure",
        JLPT: 2
    },
    {
        kanji: "純情",
        kana: "じゅんじょう",
        meaning: "pure heart,naivete,self-sacrificing devotion",
        JLPT: 2
    },
    {
        kanji: "純粋",
        kana: "じゅんすい",
        meaning: "pure,true,genuine,unmixed",
        JLPT: 2
    },
    {
        kanji: "消化",
        kana: "しょうか",
        meaning: "digestion",
        JLPT: 2
    },
    {
        kanji: "小学生",
        kana: "しょうがくせい",
        meaning: "grade school student",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "しょうがない",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "将棋",
        kana: "しょうぎ",
        meaning: "Japanese chess",
        JLPT: 2
    },
    {
        kanji: "蒸気",
        kana: "じょうき",
        meaning: "steam,vapour",
        JLPT: 2
    },
    {
        kanji: "定規",
        kana: "じょうぎ",
        meaning: "(measuring) ruler",
        JLPT: 2
    },
    {
        kanji: "上級",
        kana: "じょうきゅう",
        meaning: "advanced level,high grade,senior",
        JLPT: 2
    },
    {
        kanji: "商業",
        kana: "しょうぎょう",
        meaning: "commerce,trade,business",
        JLPT: 2
    },
    {
        kanji: "消極的",
        kana: "しょうきょくてき",
        meaning: "passive",
        JLPT: 2
    },
    {
        kanji: "賞金",
        kana: "しょうきん",
        meaning: "prize,monetary award",
        JLPT: 2
    },
    {
        kanji: "上下",
        kana: "じょうげ",
        meaning: "high and low,up and down,unloading and loading,praising and blaming",
        JLPT: 2
    },
    {
        kanji: "障子",
        kana: "しょうじ",
        meaning: "paper sliding door",
        JLPT: 2
    },
    {
        kanji: "商社",
        kana: "しょうしゃ",
        meaning: "trading company,firm",
        JLPT: 2
    },
    {
        kanji: "乗車",
        kana: "じょうしゃ",
        meaning: "taking a train,entraining",
        JLPT: 2
    },
    {
        kanji: "上旬",
        kana: "じょうじゅん",
        meaning: "first 10 days of month",
        JLPT: 2
    },
    {
        kanji: "生ずる",
        kana: "しょうずる",
        meaning: "to cause,to arise,to be generated",
        JLPT: 2
    },
    {
        kanji: "小数",
        kana: "しょうすう",
        meaning: "fraction (part of),decimal",
        JLPT: 2
    },
    {
        kanji: "商店",
        kana: "しょうてん",
        meaning: "shop,business firm",
        JLPT: 2
    },
    {
        kanji: "焦点",
        kana: "しょうてん",
        meaning: "focus,point",
        JLPT: 2
    },
    {
        kanji: "消毒",
        kana: "しょうどく",
        meaning: "disinfection,sterilization",
        JLPT: 2
    },
    {
        kanji: "勝敗",
        kana: "しょうはい",
        meaning: "victory or defeat,issue (of battle)",
        JLPT: 2
    },
    {
        kanji: "蒸発",
        kana: "じょうはつ",
        meaning: "evaporation,unexplained disappearance",
        JLPT: 2
    },
    {
        kanji: "賞品",
        kana: "しょうひん",
        meaning: "prize,trophy",
        JLPT: 2
    },
    {
        kanji: "勝負",
        kana: "しょうぶ",
        meaning: "victory or defeat,match,contest,game,bout",
        JLPT: 2
    },
    {
        kanji: "小便",
        kana: "しょうべん",
        meaning: "(col) urine,piss",
        JLPT: 2
    },
    {
        kanji: "消防署",
        kana: "しょうぼうしょ",
        meaning: "fire station",
        JLPT: 2
    },
    {
        kanji: "正味",
        kana: "しょうみ",
        meaning: "net (weight)",
        JLPT: 2
    },
    {
        kanji: "正面",
        kana: "しょうめん",
        meaning: "the front,honesty",
        JLPT: 2
    },
    {
        kanji: "消耗",
        kana: "しょうもう",
        meaning: "exhaustion,consumption",
        JLPT: 2
    },
    {
        kanji: "醤油",
        kana: "しょうゆ",
        meaning: "soy sauce",
        JLPT: 2
    },
    {
        kanji: "省略",
        kana: "しょうりゃく",
        meaning: "omission,abbreviation,abridgment",
        JLPT: 2
    },
    {
        kanji: "初級",
        kana: "しょきゅう",
        meaning: "elementary level",
        JLPT: 2
    },
    {
        kanji: "助教授",
        kana: "じょきょうじゅ",
        meaning: "assistant professor",
        JLPT: 2
    },
    {
        kanji: "食塩",
        kana: "しょくえん",
        meaning: "table salt",
        JLPT: 2
    },
    {
        kanji: "職人",
        kana: "しょくにん",
        meaning: "worker,mechanic,artisan,craftsman",
        JLPT: 2
    },
    {
        kanji: "初旬",
        kana: "しょじゅん",
        meaning: "first 10 days of the month",
        JLPT: 2
    },
    {
        kanji: "書籍",
        kana: "しょせき",
        meaning: "book,publication",
        JLPT: 2
    },
    {
        kanji: "食器",
        kana: "しょっき",
        meaning: "tableware",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ショップ",
        meaning: "a shop",
        JLPT: 2
    },
    {
        kanji: "書店",
        kana: "しょてん",
        meaning: "bookshop",
        JLPT: 2
    },
    {
        kanji: "書道",
        kana: "しょどう",
        meaning: "calligraphy",
        JLPT: 2
    },
    {
        kanji: "白髪",
        kana: "しらが",
        meaning: "white or grey hair,trendy hair bleaching",
        JLPT: 2
    },
    {
        kanji: "知合い",
        kana: "しりあい",
        meaning: "acquaintance",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "シリーズ",
        meaning: "series",
        JLPT: 2
    },
    {
        kanji: "私立",
        kana: "しりつ",
        meaning: "private (establishment)",
        JLPT: 2
    },
    {
        kanji: "資料",
        kana: "しりょう",
        meaning: "materials,data",
        JLPT: 2
    },
    {
        kanji: "汁",
        kana: "しる",
        meaning: "juice,sap,soup,broth",
        JLPT: 2
    },
    {
        kanji: "素人",
        kana: "しろうと",
        meaning: "amateur,novice",
        JLPT: 2
    },
    {
        kanji: "芯",
        kana: "しん",
        meaning: "core,heart,wick,marrow",
        JLPT: 2
    },
    {
        kanji: "新幹線",
        kana: "しんかんせん",
        meaning: "bullet train (very high speed),shinkansen",
        JLPT: 2
    },
    {
        kanji: "真空",
        kana: "しんくう",
        meaning: "vacuum,hollow,empty",
        JLPT: 2
    },
    {
        kanji: "信ずる",
        kana: "しんずる",
        meaning: "to believe,to believe in,to place trust in",
        JLPT: 2
    },
    {
        kanji: "心身",
        kana: "しんしん",
        meaning: "mind and body",
        JLPT: 2
    },
    {
        kanji: "申請",
        kana: "しんせい",
        meaning: "application,request,petition",
        JLPT: 2
    },
    {
        kanji: "人造",
        kana: "じんぞう",
        meaning: "man-made,synthetic,artificial",
        JLPT: 2
    },
    {
        kanji: "寝台",
        kana: "しんだい",
        meaning: "bed,couch",
        JLPT: 2
    },
    {
        kanji: "診断",
        kana: "しんだん",
        meaning: "diagnosis",
        JLPT: 2
    },
    {
        kanji: "侵入",
        kana: "しんにゅう",
        meaning: "penetration,invasion,raid,aggression,trespass",
        JLPT: 2
    },
    {
        kanji: "人文科学",
        kana: "じんぶんかがく",
        meaning: "social sciences,humanities",
        JLPT: 2
    },
    {
        kanji: "人命",
        kana: "じんめい",
        meaning: "(human) life",
        JLPT: 2
    },
    {
        kanji: "深夜",
        kana: "しんや",
        meaning: "late at night",
        JLPT: 2
    },
    {
        kanji: "森林",
        kana: "しんりん",
        meaning: "forest,woods",
        JLPT: 2
    },
    {
        kanji: "親類",
        kana: "しんるい",
        meaning: "relation,kin",
        JLPT: 2
    },
    {
        kanji: "針路",
        kana: "しんろ",
        meaning: "course,direction,compass bearing",
        JLPT: 2
    },
    {
        kanji: "神話",
        kana: "しんわ",
        meaning: "myth,legend",
        JLPT: 2
    },
    {
        kanji: "酢",
        kana: "す",
        meaning: "vinegar",
        JLPT: 2
    },
    {
        kanji: "水産",
        kana: "すいさん",
        meaning: "marine products,fisheries",
        JLPT: 2
    },
    {
        kanji: "炊事",
        kana: "すいじ",
        meaning: "cooking,culinary arts",
        JLPT: 2
    },
    {
        kanji: "水蒸気",
        kana: "すいじょうき",
        meaning: "water vapour,steam",
        JLPT: 2
    },
    {
        kanji: "水素",
        kana: "すいそ",
        meaning: "hydrogen",
        JLPT: 2
    },
    {
        kanji: "垂直",
        kana: "すいちょく",
        meaning: "vertical,perpendicular",
        JLPT: 2
    },
    {
        kanji: "推定",
        kana: "すいてい",
        meaning: "presumption,assumption,estimation",
        JLPT: 2
    },
    {
        kanji: "水滴",
        kana: "すいてき",
        meaning: "drop of water",
        JLPT: 2
    },
    {
        kanji: "水筒",
        kana: "すいとう",
        meaning: "canteen,flask,water bottle",
        JLPT: 2
    },
    {
        kanji: "随筆",
        kana: "ずいひつ",
        meaning: "essays,miscellaneous writings",
        JLPT: 2
    },
    {
        kanji: "水分",
        kana: "すいぶん",
        meaning: "moisture",
        JLPT: 2
    },
    {
        kanji: "水平",
        kana: "すいへい",
        meaning: "water level,horizon",
        JLPT: 2
    },
    {
        kanji: "水平線",
        kana: "すいへいせん",
        meaning: "horizon",
        JLPT: 2
    },
    {
        kanji: "水曜",
        kana: "すいよう",
        meaning: "Wednesday",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ずうずうしい",
        meaning: "impudent,shameless",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ずうっと",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "末っ子",
        kana: "すえっこ",
        meaning: "youngest child",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スカーフ",
        meaning: "scarf",
        JLPT: 2
    },
    {
        kanji: "図鑑",
        kana: "ずかん",
        meaning: "picture book",
        JLPT: 2
    },
    {
        kanji: "杉",
        kana: "すぎ",
        meaning: "Japanese cedar",
        JLPT: 2
    },
    {
        kanji: "好き嫌い",
        kana: "すききらい",
        meaning: "likes and dislikes,taste",
        JLPT: 2
    },
    {
        kanji: "好き好き",
        kana: "すきずき",
        meaning: "matter of taste",
        JLPT: 2
    },
    {
        kanji: "透き通る",
        kana: "すきとおる",
        meaning: "to be(come) transparent",
        JLPT: 2
    },
    {
        kanji: "隙間",
        kana: "すきま",
        meaning: "crevice,crack,gap,opening",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スクール",
        meaning: "school",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "すくなくとも",
        meaning: "at least",
        JLPT: 2
    },
    {
        kanji: "図形",
        kana: "ずけい",
        meaning: "figure",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スケジュール",
        meaning: "schedule",
        JLPT: 2
    },
    {
        kanji: "鈴",
        kana: "すず",
        meaning: "bell",
        JLPT: 2
    },
    {
        kanji: "涼む",
        kana: "すずむ",
        meaning: "to cool oneself,to cool off,to enjoy evening cool",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スタート",
        meaning: "start",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スチュワーデス",
        meaning: "stewardess",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "すっきり",
        meaning: "shapely,clear,neat",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "すっぱい",
        meaning: "sour,acid",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ステージ",
        meaning: "(1) stage,(2) performance",
        JLPT: 2
    },
    {
        kanji: "棄てる",
        kana: "すてる",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ストッキング",
        meaning: "stockings",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ストップ",
        meaning: "stop",
        JLPT: 2
    },
    {
        kanji: "素直",
        kana: "すなお",
        meaning: "obedient,meek,docile,unaffected",
        JLPT: 2
    },
    {
        kanji: "頭脳",
        kana: "ずのう",
        meaning: "head,brains,intellect",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スピーカー",
        meaning: "speaker",
        JLPT: 2
    },
    {
        kanji: "図表",
        kana: "ずひょう",
        meaning: "chart,diagram,graph",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スマート",
        meaning: "smart,stylish,slim",
        JLPT: 2
    },
    {
        kanji: "住まい",
        kana: "すまい",
        meaning: "dwelling,house,residence,address",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "すまない",
        meaning: "sorry (phrase)",
        JLPT: 2
    },
    {
        kanji: "墨",
        kana: "すみ",
        meaning: "ink",
        JLPT: 2
    },
    {
        kanji: "澄む",
        kana: "すむ",
        meaning: "to clear (e.g. weather),to become transparent",
        JLPT: 2
    },
    {
        kanji: "清む",
        kana: "すむ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "相撲",
        kana: "すもう",
        meaning: "sumo wrestling",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "スライド",
        meaning: "slide",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ずらす",
        meaning: "to put off,to delay",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ずらり",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "掏摸",
        kana: "すり",
        meaning: "pickpocket",
        JLPT: 2
    },
    {
        kanji: "刷る",
        kana: "する",
        meaning: "to print",
        JLPT: 2
    },
    {
        kanji: "狡い",
        kana: "ずるい",
        meaning: "sly,cunning",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "すれちがう",
        meaning: "to pass by one another,to disagree",
        JLPT: 2
    },
    {
        kanji: "滑れる",
        kana: "ずれる",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "寸法",
        kana: "すんぽう",
        meaning: "measurement,size,dimension",
        JLPT: 2
    },
    {
        kanji: "姓",
        kana: "せい",
        meaning: "surname,family name",
        JLPT: 2
    },
    {
        kanji: "税関",
        kana: "ぜいかん",
        meaning: "customs house",
        JLPT: 2
    },
    {
        kanji: "製作",
        kana: "せいさく",
        meaning: "manufacture,production",
        JLPT: 2
    },
    {
        kanji: "制作",
        kana: "せいさく",
        meaning: "work (film, book)",
        JLPT: 2
    },
    {
        kanji: "性質",
        kana: "せいしつ",
        meaning: "nature,property,disposition",
        JLPT: 2
    },
    {
        kanji: "清書",
        kana: "せいしょ",
        meaning: "clean copy",
        JLPT: 2
    },
    {
        kanji: "青少年",
        kana: "せいしょうねん",
        meaning: "youth,young person",
        JLPT: 2
    },
    {
        kanji: "整数",
        kana: "せいすう",
        meaning: "integer",
        JLPT: 2
    },
    {
        kanji: "清掃",
        kana: "せいそう",
        meaning: "cleaning",
        JLPT: 2
    },
    {
        kanji: "生存",
        kana: "せいぞん",
        meaning: "existence,being,survival",
        JLPT: 2
    },
    {
        kanji: "生長",
        kana: "せいちょう",
        meaning: "growth,increment",
        JLPT: 2
    },
    {
        kanji: "政党",
        kana: "せいとう",
        meaning: "(member of) political party",
        JLPT: 2
    },
    {
        kanji: "生年月日",
        kana: "せいねんがっぴ",
        meaning: "birth date",
        JLPT: 2
    },
    {
        kanji: "性能",
        kana: "せいのう",
        meaning: "ability,efficiency",
        JLPT: 2
    },
    {
        kanji: "整備",
        kana: "せいび",
        meaning: "adjustment,completion,consolidation",
        JLPT: 2
    },
    {
        kanji: "成分",
        kana: "せいぶん",
        meaning: "ingredient,component,composition",
        JLPT: 2
    },
    {
        kanji: "性別",
        kana: "せいべつ",
        meaning: "distinction by sex,sex,gender",
        JLPT: 2
    },
    {
        kanji: "正方形",
        kana: "せいほうけい",
        meaning: "square",
        JLPT: 2
    },
    {
        kanji: "正門",
        kana: "せいもん",
        meaning: "main gate,main entrance",
        JLPT: 2
    },
    {
        kanji: "成立",
        kana: "せいりつ",
        meaning: "coming into existence,arrangements,establishment,completion",
        JLPT: 2
    },
    {
        kanji: "西暦",
        kana: "せいれき",
        meaning: "Christian Era,anno domini (A.D.)",
        JLPT: 2
    },
    {
        kanji: "背負う",
        kana: "せおう",
        meaning: "to be burdened with,to carry on back or shoulder",
        JLPT: 2
    },
    {
        kanji: "赤道",
        kana: "せきどう",
        meaning: "equator",
        JLPT: 2
    },
    {
        kanji: "折角",
        kana: "せっかく",
        meaning: "with trouble,at great pains,long-awaited",
        JLPT: 2
    },
    {
        kanji: "接近",
        kana: "せっきん",
        meaning: "getting closer,drawing nearer,approaching",
        JLPT: 2
    },
    {
        kanji: "石鹸",
        kana: "せっけん",
        meaning: "soap",
        JLPT: 2
    },
    {
        kanji: "接する",
        kana: "せっする",
        meaning: "to come in contact with,to connect,to attend,to receive",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "せっせと",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "接続",
        kana: "せつぞく",
        meaning: "(1) connection,union,join,link,(2) changing trains",
        JLPT: 2
    },
    {
        kanji: "瀬戸物",
        kana: "せともの",
        meaning: "earthenware,crockery,china",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぜひとも",
        meaning: "by all means (with sense of not taking no for an answer)",
        JLPT: 2
    },
    {
        kanji: "迫る",
        kana: "せまる",
        meaning: "to draw near,to press",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ゼミ",
        meaning: "(n) seminar",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "せめて",
        meaning: "offense,method of attack",
        JLPT: 2
    },
    {
        kanji: "攻める",
        kana: "せめる",
        meaning: "to attack,to assault",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "セメント",
        meaning: "cement",
        JLPT: 2
    },
    {
        kanji: "栓",
        kana: "せん",
        meaning: "stopper,cork,stopcock",
        JLPT: 2
    },
    {
        kanji: "前後",
        kana: "ぜんご",
        meaning: "around,throughout,front and back,before and behind,before and after",
        JLPT: 2
    },
    {
        kanji: "洗剤",
        kana: "せんざい",
        meaning: "detergent,washing material",
        JLPT: 2
    },
    {
        kanji: "全集",
        kana: "ぜんしゅう",
        meaning: "complete works",
        JLPT: 2
    },
    {
        kanji: "全身",
        kana: "ぜんしん",
        meaning: "the whole body,full-length (portrait)",
        JLPT: 2
    },
    {
        kanji: "扇子",
        kana: "せんす",
        meaning: "folding fan",
        JLPT: 2
    },
    {
        kanji: "専制",
        kana: "せんせい",
        meaning: "despotism,autocracy",
        JLPT: 2
    },
    {
        kanji: "先々月",
        kana: "せんせんげつ",
        meaning: "month before last",
        JLPT: 2
    },
    {
        kanji: "先々週",
        kana: "せんせんしゅう",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "先祖",
        kana: "せんぞ",
        meaning: "ancestor",
        JLPT: 2
    },
    {
        kanji: "先端",
        kana: "せんたん",
        meaning: "pointed end,tip,fine point",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "センチ",
        meaning: "centimeter,centi-,10^-2",
        JLPT: 2
    },
    {
        kanji: "宣伝",
        kana: "せんでん",
        meaning: "propaganda,publicity",
        JLPT: 2
    },
    {
        kanji: "先頭",
        kana: "せんとう",
        meaning: "head,lead,vanguard,first",
        JLPT: 2
    },
    {
        kanji: "全般",
        kana: "ぜんぱん",
        meaning: "(the) whole,universal,wholly,general",
        JLPT: 2
    },
    {
        kanji: "扇風機",
        kana: "せんぷうき",
        meaning: "electric fan",
        JLPT: 2
    },
    {
        kanji: "線路",
        kana: "せんろ",
        meaning: "line,track,roadbed",
        JLPT: 2
    },
    {
        kanji: "相違",
        kana: "そうい",
        meaning: "difference,discrepancy,variation",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そういえば",
        meaning: "which reminds me ..",
        JLPT: 2
    },
    {
        kanji: "雑巾",
        kana: "ぞうきん",
        meaning: "house-cloth,dust cloth",
        JLPT: 2
    },
    {
        kanji: "増減",
        kana: "ぞうげん",
        meaning: "increase and decrease,fluctuation",
        JLPT: 2
    },
    {
        kanji: "倉庫",
        kana: "そうこ",
        meaning: "storehouse,warehouse,godown",
        JLPT: 2
    },
    {
        kanji: "相互",
        kana: "そうご",
        meaning: "mutual,reciprocal",
        JLPT: 2
    },
    {
        kanji: "創作",
        kana: "そうさく",
        meaning: "production,literary creation,work",
        JLPT: 2
    },
    {
        kanji: "葬式",
        kana: "そうしき",
        meaning: "funeral",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そうして",
        meaning: "and,like that",
        JLPT: 2
    },
    {
        kanji: "造船",
        kana: "ぞうせん",
        meaning: "shipbuilding",
        JLPT: 2
    },
    {
        kanji: "騒々しい",
        kana: "そうぞうしい",
        meaning: "noisy,boisterous",
        JLPT: 2
    },
    {
        kanji: "増大",
        kana: "ぞうだい",
        meaning: "enlargement",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そうっと",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "送別",
        kana: "そうべつ",
        meaning: "farewell,send-off",
        JLPT: 2
    },
    {
        kanji: "草履",
        kana: "ぞうり",
        meaning: "zoori (Japanese footwear),sandals",
        JLPT: 2
    },
    {
        kanji: "総理大臣",
        kana: "そうりだいじん",
        meaning: "Prime Minister",
        JLPT: 2
    },
    {
        kanji: "送料",
        kana: "そうりょう",
        meaning: "postage,carriage",
        JLPT: 2
    },
    {
        kanji: "属する",
        kana: "ぞくする",
        meaning: "to belong to,to come under,to be affiliated with,to be subject to",
        JLPT: 2
    },
    {
        kanji: "続々",
        kana: "ぞくぞく",
        meaning: "successively,one after another",
        JLPT: 2
    },
    {
        kanji: "速達",
        kana: "そくたつ",
        meaning: "express,special delivery",
        JLPT: 2
    },
    {
        kanji: "測定",
        kana: "そくてい",
        meaning: "measurement",
        JLPT: 2
    },
    {
        kanji: "測量",
        kana: "そくりょう",
        meaning: "measurement,surveying",
        JLPT: 2
    },
    {
        kanji: "速力",
        kana: "そくりょく",
        meaning: "speed",
        JLPT: 2
    },
    {
        kanji: "素質",
        kana: "そしつ",
        meaning: "character,qualities,genius",
        JLPT: 2
    },
    {
        kanji: "祖先",
        kana: "そせん",
        meaning: "ancestor",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そそっかしい",
        meaning: "careless,thoughtless",
        JLPT: 2
    },
    {
        kanji: "卒直",
        kana: "そっちょく",
        meaning: "frankness,candour,openheartedness",
        JLPT: 2
    },
    {
        kanji: "具える",
        kana: "そなえる",
        meaning: "to be furnished with",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そのうえ",
        meaning: "in addition,furthermore",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そのころ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そのため",
        meaning: "hence,for that reason",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "そのほか",
        meaning: "otherwise",
        JLPT: 2
    },
    {
        kanji: "蕎麦",
        kana: "そば",
        meaning: "soba (buckwheat noodles)",
        JLPT: 2
    },
    {
        kanji: "剃る",
        kana: "そる",
        meaning: "to shave",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "それなのに",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "逸れる",
        kana: "それる",
        meaning: "to stray (turn) from subject,to get lost,to go astray",
        JLPT: 2
    },
    {
        kanji: "揃う",
        kana: "そろう",
        meaning: "to become complete,to be equal,to be all present,to gather",
        JLPT: 2
    },
    {
        kanji: "揃える",
        kana: "そろえる",
        meaning: "to put things in order,to arrange,to make uniform,to get something ready",
        JLPT: 2
    },
    {
        kanji: "算盤",
        kana: "そろばん",
        meaning: "abacus",
        JLPT: 2
    },
    {
        kanji: "存じる",
        kana: "ぞんじる",
        meaning: "(hum) to know",
        JLPT: 2
    },
    {
        kanji: "存ずる",
        kana: "ぞんずる",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "損得",
        kana: "そんとく",
        meaning: "loss and gain,advantage and disadvantage",
        JLPT: 2
    },
    {
        kanji: "田ぼ",
        kana: "たんぼ",
        meaning: "paddy field,farm",
        JLPT: 2
    },
    {
        kanji: "だいいち",
        kana: "（副）",
        meaning: "first,foremost,# 1",
        JLPT: 2
    },
    {
        kanji: "退院",
        kana: "たいいん",
        meaning: "leaving hospital",
        JLPT: 2
    },
    {
        kanji: "大学院",
        kana: "だいがくいん",
        meaning: "graduate school",
        JLPT: 2
    },
    {
        kanji: "大工",
        kana: "だいく",
        meaning: "carpenter",
        JLPT: 2
    },
    {
        kanji: "体系",
        kana: "たいけい",
        meaning: "system,organization",
        JLPT: 2
    },
    {
        kanji: "太鼓",
        kana: "たいこ",
        meaning: "drum,tambourine",
        JLPT: 2
    },
    {
        kanji: "対策",
        kana: "たいさく",
        meaning: "counter-plan,counter-measure",
        JLPT: 2
    },
    {
        kanji: "大して",
        kana: "たいして",
        meaning: "(not so) much,(not) very",
        JLPT: 2
    },
    {
        kanji: "対照",
        kana: "たいしょう",
        meaning: "contrast,antithesis,comparison",
        JLPT: 2
    },
    {
        kanji: "大小",
        kana: "だいしょう",
        meaning: "size",
        JLPT: 2
    },
    {
        kanji: "体制",
        kana: "たいせい",
        meaning: "order,system,structure,set-up,organization",
        JLPT: 2
    },
    {
        kanji: "体積",
        kana: "たいせき",
        meaning: "capacity,volume",
        JLPT: 2
    },
    {
        kanji: "大層",
        kana: "たいそう",
        meaning: "very much,exaggerated,very fine",
        JLPT: 2
    },
    {
        kanji: "体操",
        kana: "たいそう",
        meaning: "gymnastics,physical exercises,calisthenics",
        JLPT: 2
    },
    {
        kanji: "大分",
        kana: "だいぶん",
        meaning: "considerably,greatly,a lot",
        JLPT: 2
    },
    {
        kanji: "大木",
        kana: "たいぼく",
        meaning: "large tree",
        JLPT: 2
    },
    {
        kanji: "題名",
        kana: "だいめい",
        meaning: "title",
        JLPT: 2
    },
    {
        kanji: "代名詞",
        kana: "だいめいし",
        meaning: "pronoun",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "タイア",
        meaning: "tire,tyre",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ダイヤグラム",
        meaning: "diagram",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ダイヤモンド",
        meaning: "diamond",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ダイヤル",
        meaning: "dial",
        JLPT: 2
    },
    {
        kanji: "Ͼ立",
        kana: "たいりつ",
        meaning: "confrontation,opposition,antagonism",
        JLPT: 2
    },
    {
        kanji: "田植え",
        kana: "たうえ",
        meaning: "rice planting",
        JLPT: 2
    },
    {
        kanji: "絶えず",
        kana: "たえず",
        meaning: "constantly",
        JLPT: 2
    },
    {
        kanji: "楕円",
        kana: "だえん",
        meaning: "ellipse",
        JLPT: 2
    },
    {
        kanji: "高める",
        kana: "たかめる",
        meaning: "to raise,to lift,to boost",
        JLPT: 2
    },
    {
        kanji: "耕す",
        kana: "たがやす",
        meaning: "to till,to plow,to cultivate",
        JLPT: 2
    },
    {
        kanji: "滝",
        kana: "たき",
        meaning: "waterfall",
        JLPT: 2
    },
    {
        kanji: "炊く",
        kana: "たく",
        meaning: "to boil,to cook",
        JLPT: 2
    },
    {
        kanji: "焚く",
        kana: "たく",
        meaning: "to burn,to kindle,to build a fire",
        JLPT: 2
    },
    {
        kanji: "蓄える",
        kana: "たくわえる",
        meaning: "to store,to lay in stock",
        JLPT: 2
    },
    {
        kanji: "竹",
        kana: "たけ",
        meaning: "bamboo,middle (of a three-tier ranking system)",
        JLPT: 2
    },
    {
        kanji: "助かる",
        kana: "たすかる",
        meaning: "to be saved,to be rescued,to survive,to be helpful",
        JLPT: 2
    },
    {
        kanji: "只",
        kana: "ただ",
        meaning: "free of charge,mere,sole,only,usual,common",
        JLPT: 2
    },
    {
        kanji: "但し",
        kana: "ただし",
        meaning: "but,however,provided that",
        JLPT: 2
    },
    {
        kanji: "畳む",
        kana: "たたむ",
        meaning: "to fold (clothes)",
        JLPT: 2
    },
    {
        kanji: "立ち止まる",
        kana: "たちどまる",
        meaning: "to stop,to halt,to stand still",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "たちまち",
        meaning: "at once,in a moment,suddenly,all at once",
        JLPT: 2
    },
    {
        kanji: "建つ",
        kana: "たつ",
        meaning: "to erect,to be erected,to be built",
        JLPT: 2
    },
    {
        kanji: "発つ",
        kana: "たつ",
        meaning: "to depart (on a plane, train, etc.)",
        JLPT: 2
    },
    {
        kanji: "脱線",
        kana: "だっせん",
        meaning: "derailment,digression",
        JLPT: 2
    },
    {
        kanji: "妥当",
        kana: "だとう",
        meaning: "valid,proper,right,appropriate",
        JLPT: 2
    },
    {
        kanji: "例える",
        kana: "たとえる",
        meaning: "to compare,to liken,to speak figuratively,to illustrate,to use a simile",
        JLPT: 2
    },
    {
        kanji: "頼もしい",
        kana: "たのもしい",
        meaning: "reliable,trustworthy,hopeful,promising",
        JLPT: 2
    },
    {
        kanji: "足袋",
        kana: "たび",
        meaning: "tabi,Japanese socks (with split toe)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ダブル",
        meaning: "double",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "だます",
        meaning: "to trick,to cheat,to deceive",
        JLPT: 2
    },
    {
        kanji: "溜まる",
        kana: "たまる",
        meaning: "to collect,to gather,to save",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ダム",
        meaning: "dumb",
        JLPT: 2
    },
    {
        kanji: "溜息",
        kana: "ためいき",
        meaning: "a sigh",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ためらう",
        meaning: "to hesitate",
        JLPT: 2
    },
    {
        kanji: "溜める",
        kana: "ためる",
        meaning: "to amass,to accumulate",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "だらしない",
        meaning: "slovenly,loose,a slut",
        JLPT: 2
    },
    {
        kanji: "足る",
        kana: "たる",
        meaning: "to be sufficient,to be enough",
        JLPT: 2
    },
    {
        kanji: "段階",
        kana: "だんかい",
        meaning: "gradation,grade,stage",
        JLPT: 2
    },
    {
        kanji: "短期",
        kana: "たんき",
        meaning: "short term",
        JLPT: 2
    },
    {
        kanji: "炭鉱",
        kana: "たんこう",
        meaning: "coal mine,coal pit",
        JLPT: 2
    },
    {
        kanji: "短所",
        kana: "たんしょ",
        meaning: "(1) defect,demerit,weak point,(2) disadvantage",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "たんす",
        meaning: "chest of drawers",
        JLPT: 2
    },
    {
        kanji: "淡水",
        kana: "たんすい",
        meaning: "fresh water",
        JLPT: 2
    },
    {
        kanji: "断水",
        kana: "だんすい",
        meaning: "water outage",
        JLPT: 2
    },
    {
        kanji: "単数",
        kana: "たんすう",
        meaning: "singular (number)",
        JLPT: 2
    },
    {
        kanji: "団地",
        kana: "だんち",
        meaning: "multi-unit apartments",
        JLPT: 2
    },
    {
        kanji: "断定",
        kana: "だんてい",
        meaning: "conclusion,decision",
        JLPT: 2
    },
    {
        kanji: "短編",
        kana: "たんぺん",
        meaning: "short (e.g. story, film)",
        JLPT: 2
    },
    {
        kanji: "誓う",
        kana: "ちかう",
        meaning: "to swear,to vow,to take an oath,to pledge",
        JLPT: 2
    },
    {
        kanji: "地下水",
        kana: "ちかすい",
        meaning: "underground water",
        JLPT: 2
    },
    {
        kanji: "近々",
        kana: "ちかぢか",
        meaning: "nearness,before long",
        JLPT: 2
    },
    {
        kanji: "近付ける",
        kana: "ちかづける",
        meaning: "to bring near,to put close,to let come near,to associate with",
        JLPT: 2
    },
    {
        kanji: "近寄る",
        kana: "ちかよる",
        meaning: "to approach,to draw near",
        JLPT: 2
    },
    {
        kanji: "力強い",
        kana: "ちからづよい",
        meaning: "reassuring,emboldened",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ちぎる",
        meaning: "to cut up fine,to pick (fruit)",
        JLPT: 2
    },
    {
        kanji: "地質",
        kana: "ちしつ",
        meaning: "geological features",
        JLPT: 2
    },
    {
        kanji: "知人",
        kana: "ちじん",
        meaning: "friend,acquaintance",
        JLPT: 2
    },
    {
        kanji: "地帯",
        kana: "ちたい",
        meaning: "area,zone",
        JLPT: 2
    },
    {
        kanji: "縮む",
        kana: "ちぢむ",
        meaning: "to shrink,to be contracted",
        JLPT: 2
    },
    {
        kanji: "縮める",
        kana: "ちぢめる",
        meaning: "to shorten,to reduce,to boil down,to shrink",
        JLPT: 2
    },
    {
        kanji: "縮れる",
        kana: "ちぢれる",
        meaning: "to be wavy,to be curled",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "チップ",
        meaning: "(1) gratuity,tip,(2) chip",
        JLPT: 2
    },
    {
        kanji: "地点",
        kana: "ちてん",
        meaning: "site,point on a map",
        JLPT: 2
    },
    {
        kanji: "地名",
        kana: "ちめい",
        meaning: "place name",
        JLPT: 2
    },
    {
        kanji: "茶色い",
        kana: "ちゃいろい",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "着々",
        kana: "ちゃくちゃく",
        meaning: "steadily",
        JLPT: 2
    },
    {
        kanji: "茶碗",
        kana: "ちゃわん",
        meaning: "rice bowl,tea cup,teacup",
        JLPT: 2
    },
    {
        kanji: "中間",
        kana: "ちゅうかん",
        meaning: "middle,midway,interim",
        JLPT: 2
    },
    {
        kanji: "中旬",
        kana: "ちゅうじゅん",
        meaning: "second third of a month",
        JLPT: 2
    },
    {
        kanji: "抽象",
        kana: "ちゅうしょう",
        meaning: "abstract",
        JLPT: 2
    },
    {
        kanji: "中世",
        kana: "ちゅうせい",
        meaning: "Middle Ages,mediaeval times",
        JLPT: 2
    },
    {
        kanji: "中性",
        kana: "ちゅうせい",
        meaning: "neuter gender,neutral (chem.),indifference,sterility",
        JLPT: 2
    },
    {
        kanji: "中途",
        kana: "ちゅうと",
        meaning: "in the middle,half-way",
        JLPT: 2
    },
    {
        kanji: "中年",
        kana: "ちゅうねん",
        meaning: "middle-aged",
        JLPT: 2
    },
    {
        kanji: "超過",
        kana: "ちょうか",
        meaning: "excess,being more than",
        JLPT: 2
    },
    {
        kanji: "彫刻",
        kana: "ちょうこく",
        meaning: "carving,engraving,sculpture",
        JLPT: 2
    },
    {
        kanji: "長所",
        kana: "ちょうしょ",
        meaning: "(1) strong point,merit,(2) advantage",
        JLPT: 2
    },
    {
        kanji: "長女",
        kana: "ちょうじょ",
        meaning: "eldest daughter",
        JLPT: 2
    },
    {
        kanji: "調整",
        kana: "ちょうせい",
        meaning: "regulation,adjustment,tuning",
        JLPT: 2
    },
    {
        kanji: "調節",
        kana: "ちょうせつ",
        meaning: "regulation,adjustment,control",
        JLPT: 2
    },
    {
        kanji: "長短",
        kana: "ちょうたん",
        meaning: "length,long and short,+-",
        JLPT: 2
    },
    {
        kanji: "頂点",
        kana: "ちょうてん",
        meaning: "top,summit",
        JLPT: 2
    },
    {
        kanji: "長男",
        kana: "ちょうなん",
        meaning: "eldest son",
        JLPT: 2
    },
    {
        kanji: "長方形",
        kana: "ちょうほうけい",
        meaning: "rectangle,oblong",
        JLPT: 2
    },
    {
        kanji: "調味料",
        kana: "ちょうみりょう",
        meaning: "condiment,seasoning",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "チョーク",
        meaning: "chock,chalk",
        JLPT: 2
    },
    {
        kanji: "直後",
        kana: "ちょくご",
        meaning: "immediately following",
        JLPT: 2
    },
    {
        kanji: "直線",
        kana: "ちょくせん",
        meaning: "straight line",
        JLPT: 2
    },
    {
        kanji: "直前",
        kana: "ちょくぜん",
        meaning: "just before",
        JLPT: 2
    },
    {
        kanji: "直通",
        kana: "ちょくつう",
        meaning: "direct communication",
        JLPT: 2
    },
    {
        kanji: "直流",
        kana: "ちょくりゅう",
        meaning: "direct current",
        JLPT: 2
    },
    {
        kanji: "貯蔵",
        kana: "ちょぞう",
        meaning: "storage,preservation",
        JLPT: 2
    },
    {
        kanji: "直角",
        kana: "ちょっかく",
        meaning: "right angle",
        JLPT: 2
    },
    {
        kanji: "直径",
        kana: "ちょっけい",
        meaning: "diameter",
        JLPT: 2
    },
    {
        kanji: "散らかす",
        kana: "ちらかす",
        meaning: "to scatter around,to leave untidy",
        JLPT: 2
    },
    {
        kanji: "散らかる",
        kana: "ちらかる",
        meaning: "to be in disorder,to lie scattered around",
        JLPT: 2
    },
    {
        kanji: "散らす",
        kana: "ちらす",
        meaning: "to scatter,to disperse,to distribute",
        JLPT: 2
    },
    {
        kanji: "塵紙",
        kana: "ちりがみ",
        meaning: "tissue paper,toilet paper",
        JLPT: 2
    },
    {
        kanji: "散る",
        kana: "ちる",
        meaning: "to fall,to scatter (e.g. blossoms)",
        JLPT: 2
    },
    {
        kanji: "追加",
        kana: "ついか",
        meaning: "addition,supplement,appendix",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ついで",
        meaning: "opportunity,occasion",
        JLPT: 2
    },
    {
        kanji: "通貨",
        kana: "つうか",
        meaning: "currency",
        JLPT: 2
    },
    {
        kanji: "通勤",
        kana: "つうきん",
        meaning: "commuting to work",
        JLPT: 2
    },
    {
        kanji: "通ずる",
        kana: "つうずる",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "通知",
        kana: "つうち",
        meaning: "notice,notification",
        JLPT: 2
    },
    {
        kanji: "通帳",
        kana: "つうちょう",
        meaning: "passbook",
        JLPT: 2
    },
    {
        kanji: "通訳",
        kana: "つうやく",
        meaning: "interpretation",
        JLPT: 2
    },
    {
        kanji: "通用",
        kana: "つうよう",
        meaning: "popular use,circulation",
        JLPT: 2
    },
    {
        kanji: "通路",
        kana: "つうろ",
        meaning: "passage,pathway",
        JLPT: 2
    },
    {
        kanji: "付合う",
        kana: "つきあう",
        meaning: "to associate with,to keep company with,to get on with",
        JLPT: 2
    },
    {
        kanji: "突き当たり",
        kana: "つきあたり",
        meaning: "end (e.g. of street)",
        JLPT: 2
    },
    {
        kanji: "突き当たる",
        kana: "つきあたる",
        meaning: "to run into,to collide with",
        JLPT: 2
    },
    {
        kanji: "月日",
        kana: "つきひ",
        meaning: "time,years,days",
        JLPT: 2
    },
    {
        kanji: "点く",
        kana: "つく",
        meaning: "to catch fire,(electricity) comes on",
        JLPT: 2
    },
    {
        kanji: "突く",
        kana: "つく",
        meaning: "(1) to thrust,to strike,(2) to poke",
        JLPT: 2
    },
    {
        kanji: "次ぐ",
        kana: "つぐ",
        meaning: "to rank next to,to come after",
        JLPT: 2
    },
    {
        kanji: "造る",
        kana: "つくる",
        meaning: "to create",
        JLPT: 2
    },
    {
        kanji: "着ける",
        kana: "つける",
        meaning: "(1) to attach,to join,to add,to append",
        JLPT: 2
    },
    {
        kanji: "点ける",
        kana: "つける",
        meaning: "to turn on,to switch on,to light up",
        JLPT: 2
    },
    {
        kanji: "浸ける",
        kana: "つける",
        meaning: "to dip in,to soak",
        JLPT: 2
    },
    {
        kanji: "伝わる",
        kana: "つたわる",
        meaning: "to be handed down,to be introduced,to be transmitted",
        JLPT: 2
    },
    {
        kanji: "突っ込む",
        kana: "つっこむ",
        meaning: "to plunge into,to go into deeply",
        JLPT: 2
    },
    {
        kanji: "務める",
        kana: "つとめる",
        meaning: "(1) to serve,to fill a post,to serve under,to work (for)",
        JLPT: 2
    },
    {
        kanji: "努める",
        kana: "つとめる",
        meaning: "(1) to serve,to fill a post,to serve under,to work (for)",
        JLPT: 2
    },
    {
        kanji: "綱",
        kana: "つな",
        meaning: "rope",
        JLPT: 2
    },
    {
        kanji: "繋がり",
        kana: "つながり",
        meaning: "connection,link,relationship",
        JLPT: 2
    },
    {
        kanji: "繋がる",
        kana: "つながる",
        meaning: "to be tied together,to be connected to,to be related to",
        JLPT: 2
    },
    {
        kanji: "繋げる",
        kana: "つなげる",
        meaning: "to connect",
        JLPT: 2
    },
    {
        kanji: "粒",
        kana: "つぶ",
        meaning: "grain",
        JLPT: 2
    },
    {
        kanji: "潰す",
        kana: "つぶす",
        meaning: "to smash,to waste",
        JLPT: 2
    },
    {
        kanji: "潰れる",
        kana: "つぶれる",
        meaning: "to be smashed,to go bankrupt",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "つまずく",
        meaning: "to stumble,to trip",
        JLPT: 2
    },
    {
        kanji: "詰まる",
        kana: "つまる",
        meaning: "to be blocked,to be packed",
        JLPT: 2
    },
    {
        kanji: "積む",
        kana: "つむ",
        meaning: "to pile up,to stack",
        JLPT: 2
    },
    {
        kanji: "爪",
        kana: "つめ",
        meaning: "fingernail or toenail,claw,talon,hoof",
        JLPT: 2
    },
    {
        kanji: "艶",
        kana: "つや",
        meaning: "gloss,glaze",
        JLPT: 2
    },
    {
        kanji: "強気",
        kana: "つよき",
        meaning: "firm,strong",
        JLPT: 2
    },
    {
        kanji: "釣り合う",
        kana: "つりあう",
        meaning: "to balance,to be in harmony,to suit",
        JLPT: 2
    },
    {
        kanji: "吊る",
        kana: "つる",
        meaning: "to hang",
        JLPT: 2
    },
    {
        kanji: "吊す",
        kana: "つるす",
        meaning: "to hang",
        JLPT: 2
    },
    {
        kanji: "出合い",
        kana: "であい",
        meaning: "an encounter",
        JLPT: 2
    },
    {
        kanji: "手洗い",
        kana: "てあらい",
        meaning: "restroom,lavatory,hand-washing",
        JLPT: 2
    },
    {
        kanji: "定員",
        kana: "ていいん",
        meaning: "fixed number of regular personnel,capacity (of boat, etc.)",
        JLPT: 2
    },
    {
        kanji: "定価",
        kana: "ていか",
        meaning: "established price",
        JLPT: 2
    },
    {
        kanji: "低下",
        kana: "ていか",
        meaning: "fall,decline,lowering,deterioration",
        JLPT: 2
    },
    {
        kanji: "定期券",
        kana: "ていきけん",
        meaning: "commuter pass,season ticket",
        JLPT: 2
    },
    {
        kanji: "定休日",
        kana: "ていきゅうび",
        meaning: "regular holiday",
        JLPT: 2
    },
    {
        kanji: "停止",
        kana: "ていし",
        meaning: "suspension,interruption,stoppage,ban",
        JLPT: 2
    },
    {
        kanji: "停車",
        kana: "ていしゃ",
        meaning: "stopping (e.g. train)",
        JLPT: 2
    },
    {
        kanji: "停電",
        kana: "ていでん",
        meaning: "failure of electricity",
        JLPT: 2
    },
    {
        kanji: "出入り",
        kana: "でいり",
        meaning: "in and out,coming and going,free association,income and expenditure,debits and credit",
        JLPT: 2
    },
    {
        kanji: "出入口",
        kana: "でいりぐち",
        meaning: "exit and entrance",
        JLPT: 2
    },
    {
        kanji: "手入れ",
        kana: "ていれ",
        meaning: "repairs,maintenance",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "テーマ",
        meaning: "(n) theme,project,topic (de: Thema)",
        JLPT: 2
    },
    {
        kanji: "出掛ける",
        kana: "でかける",
        meaning: "to depart,to set out,to start,to be going out",
        JLPT: 2
    },
    {
        kanji: "出来上がり",
        kana: "できあがり",
        meaning: "be finished,ready,made for,cut out",
        JLPT: 2
    },
    {
        kanji: "出来上がる",
        kana: "できあがる",
        meaning: "(1) to be finished,to be ready,by definition,(2) to be very drunk",
        JLPT: 2
    },
    {
        kanji: "的確",
        kana: "てきかく",
        meaning: "precise,accurate",
        JLPT: 2
    },
    {
        kanji: "適確",
        kana: "てきかく",
        meaning: "precise,accurate",
        JLPT: 2
    },
    {
        kanji: "手首",
        kana: "てくび",
        meaning: "wrist",
        JLPT: 2
    },
    {
        kanji: "凸凹",
        kana: "でこぼこ",
        meaning: "unevenness,roughness,ruggedness",
        JLPT: 2
    },
    {
        kanji: "手頃",
        kana: "てごろ",
        meaning: "moderate,handy",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "でたらめ",
        meaning: "(1) irresponsible utterance,nonsense,nonsensical,(2) random",
        JLPT: 2
    },
    {
        kanji: "手帳",
        kana: "てちょう",
        meaning: "notebook",
        JLPT: 2
    },
    {
        kanji: "鉄橋",
        kana: "てっきょう",
        meaning: "railway bridge,iron bridge",
        JLPT: 2
    },
    {
        kanji: "手続き",
        kana: "てつづき",
        meaning: "procedure,(legal) process,formalities",
        JLPT: 2
    },
    {
        kanji: "鉄砲",
        kana: "てっぽう",
        meaning: "gun",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "テニスコート",
        meaning: "tennis court",
        JLPT: 2
    },
    {
        kanji: "手拭い",
        kana: "てぬぐい",
        meaning: "(hand) towel",
        JLPT: 2
    },
    {
        kanji: "手前",
        kana: "てまえ",
        meaning: "before,this side,we,you",
        JLPT: 2
    },
    {
        kanji: "出迎え",
        kana: "でむかえ",
        meaning: "meeting,reception",
        JLPT: 2
    },
    {
        kanji: "出迎える",
        kana: "でむかえる",
        meaning: "to meet,to greet",
        JLPT: 2
    },
    {
        kanji: "照らす",
        kana: "てらす",
        meaning: "to shine on,to illuminate",
        JLPT: 2
    },
    {
        kanji: "照る",
        kana: "てる",
        meaning: "to shine",
        JLPT: 2
    },
    {
        kanji: "展開",
        kana: "てんかい",
        meaning: "develop,expansion (opposite of compression)",
        JLPT: 2
    },
    {
        kanji: "伝記",
        kana: "でんき",
        meaning: "biography,life story",
        JLPT: 2
    },
    {
        kanji: "電球",
        kana: "でんきゅう",
        meaning: "light bulb",
        JLPT: 2
    },
    {
        kanji: "点数",
        kana: "てんすう",
        meaning: "marks,points,score,runs",
        JLPT: 2
    },
    {
        kanji: "伝染",
        kana: "でんせん",
        meaning: "contagion",
        JLPT: 2
    },
    {
        kanji: "電池",
        kana: "でんち",
        meaning: "battery",
        JLPT: 2
    },
    {
        kanji: "点々",
        kana: "てんてん",
        meaning: "here and there,little by little",
        JLPT: 2
    },
    {
        kanji: "転々",
        kana: "てんてん",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "電柱",
        kana: "でんちゅう",
        meaning: "telephone pole,telegraph pole,lightpole",
        JLPT: 2
    },
    {
        kanji: "天皇",
        kana: "てんのう",
        meaning: "Emperor of Japan",
        JLPT: 2
    },
    {
        kanji: "電波",
        kana: "でんぱ",
        meaning: "electro-magnetic wave",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "テンポ",
        meaning: "tempo",
        JLPT: 2
    },
    {
        kanji: "電流",
        kana: "でんりゅう",
        meaning: "electric current",
        JLPT: 2
    },
    {
        kanji: "電力",
        kana: "でんりょく",
        meaning: "electric power",
        JLPT: 2
    },
    {
        kanji: "問い合わせ",
        kana: "といあわせ",
        meaning: "enquiry,ENQ",
        JLPT: 2
    },
    {
        kanji: "銅",
        kana: "どう",
        meaning: "copper",
        JLPT: 2
    },
    {
        kanji: "統一",
        kana: "とういつ",
        meaning: "unity,consolidation,uniformity",
        JLPT: 2
    },
    {
        kanji: "同格",
        kana: "どうかく",
        meaning: "the same rank,equality,apposition",
        JLPT: 2
    },
    {
        kanji: "峠",
        kana: "とうげ",
        meaning: "ridge,(mountain) pass,difficult part",
        JLPT: 2
    },
    {
        kanji: "統計",
        kana: "とうけい",
        meaning: "scattering,a scatter,dispersion",
        JLPT: 2
    },
    {
        kanji: "動作",
        kana: "どうさ",
        meaning: "action,movements,motions,bearing,behaviour,manners",
        JLPT: 2
    },
    {
        kanji: "東西",
        kana: "とうざい",
        meaning: "East and West,whole country",
        JLPT: 2
    },
    {
        kanji: "当日",
        kana: "とうじつ",
        meaning: "appointed day,very day",
        JLPT: 2
    },
    {
        kanji: "投書",
        kana: "とうしょ",
        meaning: "letter to the editor,letter from a reader,contribution",
        JLPT: 2
    },
    {
        kanji: "登場",
        kana: "とうじょう",
        meaning: "entry (on stage)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "どうせ",
        meaning: "anyhow,in any case,at any rate",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "どうぞよろしく",
        meaning: "pleased to meet you",
        JLPT: 2
    },
    {
        kanji: "灯台",
        kana: "とうだい",
        meaning: "lighthouse",
        JLPT: 2
    },
    {
        kanji: "盗難",
        kana: "とうなん",
        meaning: "theft,robbery",
        JLPT: 2
    },
    {
        kanji: "当番",
        kana: "とうばん",
        meaning: "being on duty",
        JLPT: 2
    },
    {
        kanji: "等分",
        kana: "とうぶん",
        meaning: "division into equal parts",
        JLPT: 2
    },
    {
        kanji: "透明",
        kana: "とうめい",
        meaning: "transparency,cleanness",
        JLPT: 2
    },
    {
        kanji: "灯油",
        kana: "とうゆ",
        meaning: "lamp oil,kerosene",
        JLPT: 2
    },
    {
        kanji: "東洋",
        kana: "とうよう",
        meaning: "Orient",
        JLPT: 2
    },
    {
        kanji: "童話",
        kana: "どうわ",
        meaning: "fairy tale",
        JLPT: 2
    },
    {
        kanji: "通り掛かる",
        kana: "とおりかかる",
        meaning: "to happen to pass by",
        JLPT: 2
    },
    {
        kanji: "溶かす",
        kana: "とかす",
        meaning: "to melt,to dissolve",
        JLPT: 2
    },
    {
        kanji: "尖る",
        kana: "とがる",
        meaning: "to taper to a point,to become sharp,to be sour,to look displeased",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "どきどき",
        meaning: "throb,beat (fast)",
        JLPT: 2
    },
    {
        kanji: "溶く",
        kana: "とく",
        meaning: "to dissolve (paint)",
        JLPT: 2
    },
    {
        kanji: "退く",
        kana: "どく",
        meaning: "(1) to retreat,to recede,to withdraw",
        JLPT: 2
    },
    {
        kanji: "特殊",
        kana: "とくしゅ",
        meaning: "special,unique",
        JLPT: 2
    },
    {
        kanji: "特色",
        kana: "とくしょく",
        meaning: "characteristic,feature",
        JLPT: 2
    },
    {
        kanji: "特長",
        kana: "とくちょう",
        meaning: "forte,merit",
        JLPT: 2
    },
    {
        kanji: "特定",
        kana: "とくてい",
        meaning: "specific,special,particular",
        JLPT: 2
    },
    {
        kanji: "特売",
        kana: "とくばい",
        meaning: "special sale",
        JLPT: 2
    },
    {
        kanji: "溶け込む",
        kana: "とけこむ",
        meaning: "to melt into",
        JLPT: 2
    },
    {
        kanji: "溶ける",
        kana: "とける",
        meaning: "to melt,to thaw,to fuse,to dissolve",
        JLPT: 2
    },
    {
        kanji: "退ける",
        kana: "どける",
        meaning: "to remove,to take away,to dislodge,to put something out of the way",
        JLPT: 2
    },
    {
        kanji: "床の間",
        kana: "とこのま",
        meaning: "alcove",
        JLPT: 2
    },
    {
        kanji: "床屋",
        kana: "とこや",
        meaning: "barber",
        JLPT: 2
    },
    {
        kanji: "所々",
        kana: "ところどころ",
        meaning: "here and there,some parts (of something)",
        JLPT: 2
    },
    {
        kanji: "都心",
        kana: "としん",
        meaning: "heart (of city)",
        JLPT: 2
    },
    {
        kanji: "戸棚",
        kana: "とだな",
        meaning: "cupboard,locker,closet,wardrobe",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "とっくに",
        meaning: "long ago,already,a long time ago",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "どっと",
        meaning: "suddenly",
        JLPT: 2
    },
    {
        kanji: "整う",
        kana: "ととのう",
        meaning: "to be prepared,to be in order,to be put in order,to be arranged",
        JLPT: 2
    },
    {
        kanji: "留まる",
        kana: "とどまる",
        meaning: "(1) to be fixed,(2) to abide,to stay (in the one place)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "どなる",
        meaning: "to shout,to yell",
        JLPT: 2
    },
    {
        kanji: "飛び込む",
        kana: "とびこむ",
        meaning: "to jump in,to leap in,to plunge into,to dive",
        JLPT: 2
    },
    {
        kanji: "跳ぶ",
        kana: "とぶ",
        meaning: "to jump,to fly,to leap",
        JLPT: 2
    },
    {
        kanji: "留まる",
        kana: "とまる",
        meaning: "(1) to be fixed,(2) to abide,to stay (in the one place)",
        JLPT: 2
    },
    {
        kanji: "泊める",
        kana: "とめる",
        meaning: "to give shelter to,to lodge",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ともかく",
        meaning: "anyhow,anyway,somehow or other,generally speaking,in any case",
        JLPT: 2
    },
    {
        kanji: "捕える",
        kana: "とらえる",
        meaning: "to seize,to grasp,to capture,to arrest",
        JLPT: 2
    },
    {
        kanji: "取り入れる",
        kana: "とりいれる",
        meaning: "to harvest,to take in,to adopt",
        JLPT: 2
    },
    {
        kanji: "取り消す",
        kana: "とりけす",
        meaning: "to cancel",
        JLPT: 2
    },
    {
        kanji: "取り出す",
        kana: "とりだす",
        meaning: "to take out,to produce,to pick out",
        JLPT: 2
    },
    {
        kanji: "採る",
        kana: "とる",
        meaning: "(1) to adopt (measure, proposal),(2) to pick (fruit)",
        JLPT: 2
    },
    {
        kanji: "捕る",
        kana: "とる",
        meaning: "to take,to catch (fish),to capture",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "トレーニング",
        meaning: "training",
        JLPT: 2
    },
    {
        kanji: "丼",
        kana: "どんぶり",
        meaning: "porcelain bowl,bowl of rice with food on top",
        JLPT: 2
    },
    {
        kanji: "内科",
        kana: "ないか",
        meaning: "internist clinic,internal medicine",
        JLPT: 2
    },
    {
        kanji: "内線",
        kana: "ないせん",
        meaning: "phone extension,indoor wiring,inner line",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ナイロン",
        meaning: "nylon",
        JLPT: 2
    },
    {
        kanji: "治す",
        kana: "なおす",
        meaning: "to cure,to heal,to fix,to correct,to repair",
        JLPT: 2
    },
    {
        kanji: "永い",
        kana: "ながい",
        meaning: "long,lengthy",
        JLPT: 2
    },
    {
        kanji: "仲直り",
        kana: "なかなおり",
        meaning: "reconciliation,make peace with",
        JLPT: 2
    },
    {
        kanji: "長引く",
        kana: "ながびく",
        meaning: "to be prolonged,to drag on",
        JLPT: 2
    },
    {
        kanji: "中身",
        kana: "なかみ",
        meaning: "contents,interior,substance,filling,(sword) blade",
        JLPT: 2
    },
    {
        kanji: "中味",
        kana: "なかみ",
        meaning: "contents,interior,substance,filling,(sword) blade",
        JLPT: 2
    },
    {
        kanji: "中指",
        kana: "なかゆび",
        meaning: "middle finger",
        JLPT: 2
    },
    {
        kanji: "仲良し",
        kana: "なかよし",
        meaning: "intimate friend,bosom buddy,chum",
        JLPT: 2
    },
    {
        kanji: "慰める",
        kana: "なぐさめる",
        meaning: "to comfort,to console",
        JLPT: 2
    },
    {
        kanji: "亡くす",
        kana: "なくす",
        meaning: "to lose someone, wife, child, etc",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "なぐる",
        meaning: "to strike,to hit",
        JLPT: 2
    },
    {
        kanji: "為す",
        kana: "なす",
        meaning: "to accomplish,to do",
        JLPT: 2
    },
    {
        kanji: "謎謎",
        kana: "なぞなぞ",
        meaning: "riddle,puzzle,enigma",
        JLPT: 2
    },
    {
        kanji: "傾らか",
        kana: "なだらか",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "懐かしい",
        kana: "なつかしい",
        meaning: "dear,desired,missed",
        JLPT: 2
    },
    {
        kanji: "撫でる",
        kana: "なでる",
        meaning: "to brush gently,to stroke",
        JLPT: 2
    },
    {
        kanji: "斜め",
        kana: "ななめ",
        meaning: "obliqueness",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "なにしろ",
        meaning: "at any rate,anyhow,anyway,in any case",
        JLPT: 2
    },
    {
        kanji: "何々",
        kana: "なになに",
        meaning: "such and such,What?",
        JLPT: 2
    },
    {
        kanji: "何分",
        kana: "なにぶん",
        meaning: "what minute?,how many minutes?",
        JLPT: 2
    },
    {
        kanji: "生意気",
        kana: "なまいき",
        meaning: "impertinent,saucy,cheeky,conceit,audacious,brazen",
        JLPT: 2
    },
    {
        kanji: "並木",
        kana: "なみき",
        meaning: "roadside tree,row of trees",
        JLPT: 2
    },
    {
        kanji: "倣う",
        kana: "ならう",
        meaning: "to imitate,to follow,to emulate",
        JLPT: 2
    },
    {
        kanji: "鳴らす",
        kana: "ならす",
        meaning: "to ring,to sound,to chime,to beat,to snort (nose)",
        JLPT: 2
    },
    {
        kanji: "生る",
        kana: "なる",
        meaning: "to bear fruit",
        JLPT: 2
    },
    {
        kanji: "馴れる",
        kana: "なれる",
        meaning: "to become domesticated,to become tame",
        JLPT: 2
    },
    {
        kanji: "南極",
        kana: "なんきょく",
        meaning: "south pole,Antarctic",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "なんとなく",
        meaning: "somehow or other,for some reason or another",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "なんとも",
        meaning: "nothing (with neg. verb),quite,not a bit",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ナンバー",
        meaning: "number",
        JLPT: 2
    },
    {
        kanji: "南米",
        kana: "なんべい",
        meaning: "South America",
        JLPT: 2
    },
    {
        kanji: "南北",
        kana: "なんぼく",
        meaning: "south and north",
        JLPT: 2
    },
    {
        kanji: "煮える",
        kana: "にえる",
        meaning: "to boil,to cook,to be cooked",
        JLPT: 2
    },
    {
        kanji: "匂う",
        kana: "におう",
        meaning: "to be fragrant,to smell,to stink",
        JLPT: 2
    },
    {
        kanji: "逃がす",
        kana: "にがす",
        meaning: "to let loose,to set free,to let escape",
        JLPT: 2
    },
    {
        kanji: "憎い",
        kana: "にくい",
        meaning: "hateful,abominable,poor-looking,detestable",
        JLPT: 2
    },
    {
        kanji: "憎む",
        kana: "にくむ",
        meaning: "to hate,to detest",
        JLPT: 2
    },
    {
        kanji: "憎らしい",
        kana: "にくらしい",
        meaning: "odious,hateful",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "にこにこ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "濁る",
        kana: "にごる",
        meaning: "to become muddy,to get impure",
        JLPT: 2
    },
    {
        kanji: "虹",
        kana: "にじ",
        meaning: "rainbow",
        JLPT: 2
    },
    {
        kanji: "日時",
        kana: "にちじ",
        meaning: "date and time",
        JLPT: 2
    },
    {
        kanji: "日用品",
        kana: "にちようひん",
        meaning: "daily necessities",
        JLPT: 2
    },
    {
        kanji: "日課",
        kana: "にっか",
        meaning: "daily lesson,daily work,daily routine",
        JLPT: 2
    },
    {
        kanji: "日程",
        kana: "にってい",
        meaning: "agenda",
        JLPT: 2
    },
    {
        kanji: "鈍い",
        kana: "にぶい",
        meaning: "dull (e.g. a knife),thickheaded,slow (opposite of fast),stupid",
        JLPT: 2
    },
    {
        kanji: "入社",
        kana: "にゅうしゃ",
        meaning: "entry to a company",
        JLPT: 2
    },
    {
        kanji: "女房",
        kana: "にょうぼう",
        meaning: "wife",
        JLPT: 2
    },
    {
        kanji: "睨む",
        kana: "にらむ",
        meaning: "to glare at,to scowl at,to keep an eye on",
        JLPT: 2
    },
    {
        kanji: "煮る",
        kana: "にる",
        meaning: "to boil,to cook",
        JLPT: 2
    },
    {
        kanji: "俄",
        kana: "にわか",
        meaning: "sudden,abrupt,unexpected,improvised,offhand",
        JLPT: 2
    },
    {
        kanji: "縫う",
        kana: "ぬう",
        meaning: "to sew",
        JLPT: 2
    },
    {
        kanji: "濡らす",
        kana: "ぬらす",
        meaning: "to wet,to soak,to dip",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ねじ",
        meaning: "(a) screw",
        JLPT: 2
    },
    {
        kanji: "捩る",
        kana: "ねじる",
        meaning: "to twist",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ネックレス",
        meaning: "necklace",
        JLPT: 2
    },
    {
        kanji: "熱する",
        kana: "ねっする",
        meaning: "to heat",
        JLPT: 2
    },
    {
        kanji: "寝間着",
        kana: "ねまき",
        meaning: "sleep-wear,nightclothes,pyjamas,nightgown,nightdress",
        JLPT: 2
    },
    {
        kanji: "寝巻",
        kana: "ねまき",
        meaning: "sleep-wear,nightclothes,pyjamas,nightgown,nightdress",
        JLPT: 2
    },
    {
        kanji: "狙い",
        kana: "ねらい",
        meaning: "aim",
        JLPT: 2
    },
    {
        kanji: "狙う",
        kana: "ねらう",
        meaning: "to aim at",
        JLPT: 2
    },
    {
        kanji: "年度",
        kana: "ねんど",
        meaning: "year,fiscal year,school year,term",
        JLPT: 2
    },
    {
        kanji: "農産物",
        kana: "のうさんぶつ",
        meaning: "agricultural produce",
        JLPT: 2
    },
    {
        kanji: "農村",
        kana: "のうそん",
        meaning: "agricultural community,farm village,rural",
        JLPT: 2
    },
    {
        kanji: "濃度",
        kana: "のうど",
        meaning: "concentration,brightness",
        JLPT: 2
    },
    {
        kanji: "農薬",
        kana: "のうやく",
        meaning: "agricultural chemicals",
        JLPT: 2
    },
    {
        kanji: "能率",
        kana: "のうりつ",
        meaning: "efficiency",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "のこぎり",
        meaning: "saw",
        JLPT: 2
    },
    {
        kanji: "残らず",
        kana: "のこらず",
        meaning: "all,entirely,completely,without exception",
        JLPT: 2
    },
    {
        kanji: "載せる",
        kana: "のせる",
        meaning: "to place on (something),to take on board,to give a ride",
        JLPT: 2
    },
    {
        kanji: "覗く",
        kana: "のぞく",
        meaning: "to peep in,to look in,to peek in,to stick out",
        JLPT: 2
    },
    {
        kanji: "延ばす",
        kana: "のばす",
        meaning: "to lengthen,to stretch,to reach out,to grow (beard)",
        JLPT: 2
    },
    {
        kanji: "延びる",
        kana: "のびる",
        meaning: "to be prolonged",
        JLPT: 2
    },
    {
        kanji: "上り",
        kana: "のぼり",
        meaning: "up-train (going to Tokyo),ascent",
        JLPT: 2
    },
    {
        kanji: "上る",
        kana: "のぼる",
        meaning: "to ascend,to go up,to climb",
        JLPT: 2
    },
    {
        kanji: "糊",
        kana: "のり",
        meaning: "paste,starch",
        JLPT: 2
    },
    {
        kanji: "乗換",
        kana: "のりかえ",
        meaning: "(n) transfer (trains, buses, etc.)",
        JLPT: 2
    },
    {
        kanji: "載る",
        kana: "のる",
        meaning: "to appear (in print),to be recorded",
        JLPT: 2
    },
    {
        kanji: "鈍い",
        kana: "のろい",
        meaning: "dull (e.g. a knife),thickheaded,slow (opposite of fast),stupid",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "のろのろ",
        meaning: "slowly,sluggishly",
        JLPT: 2
    },
    {
        kanji: "呑気",
        kana: "のんき",
        meaning: "carefree,optimistic,careless,reckless,heedless",
        JLPT: 2
    },
    {
        kanji: "灰色",
        kana: "はいいろ",
        meaning: "grey,gray,ashen",
        JLPT: 2
    },
    {
        kanji: "俳句",
        kana: "はいく",
        meaning: "haiku poetry",
        JLPT: 2
    },
    {
        kanji: "拝見",
        kana: "はいけん",
        meaning: "(hum) (pol) seeing,look at",
        JLPT: 2
    },
    {
        kanji: "売店",
        kana: "ばいてん",
        meaning: "shop,stand",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "バイバイ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "売買",
        kana: "ばいばい",
        meaning: "trade,buying and selling",
        JLPT: 2
    },
    {
        kanji: "這う",
        kana: "はう",
        meaning: "to creep,to crawl",
        JLPT: 2
    },
    {
        kanji: "生える",
        kana: "はえる",
        meaning: "(1) to grow,to spring up,(2) to cut (teeth)",
        JLPT: 2
    },
    {
        kanji: "剥す",
        kana: "はがす",
        meaning: "(v5s) to tear off,to peel off,to rip off",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ばからしい",
        meaning: "absurd",
        JLPT: 2
    },
    {
        kanji: "秤",
        kana: "はかり",
        meaning: "scales,weighing machine",
        JLPT: 2
    },
    {
        kanji: "量る",
        kana: "はかる",
        meaning: "to measure,to weigh,to survey",
        JLPT: 2
    },
    {
        kanji: "測る",
        kana: "はかる",
        meaning: "to measure,to weigh,to survey",
        JLPT: 2
    },
    {
        kanji: "吐き気",
        kana: "はきけ",
        meaning: "nausea,sickness in the stomach",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "はきはき",
        meaning: "lucidly",
        JLPT: 2
    },
    {
        kanji: "掃く",
        kana: "はく",
        meaning: "to sweep,to brush,to gather up",
        JLPT: 2
    },
    {
        kanji: "歯車",
        kana: "はぐるま",
        meaning: "gear,cog-wheel",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "バケツ",
        meaning: "bucket,pail",
        JLPT: 2
    },
    {
        kanji: "挟まる",
        kana: "はさまる",
        meaning: "to get between,to be caught in",
        JLPT: 2
    },
    {
        kanji: "挟む",
        kana: "はさむ",
        meaning: "to interpose,to hold between,to insert",
        JLPT: 2
    },
    {
        kanji: "箸",
        kana: "はし",
        meaning: "chopsticks",
        JLPT: 2
    },
    {
        kanji: "梯子",
        kana: "はしご",
        meaning: "ladder,stairs",
        JLPT: 2
    },
    {
        kanji: "始めに",
        kana: "はじめに",
        meaning: "to begin with,first of all",
        JLPT: 2
    },
    {
        kanji: "初めに",
        kana: "はじめに",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "はじめまして",
        meaning: "How do you do?,I am glad to meet you",
        JLPT: 2
    },
    {
        kanji: "斜",
        kana: "はす",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "外れる",
        kana: "はずれる",
        meaning: "to be disconnected,to get out of place,to be off,to be out (e.g. of gear)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "パターン",
        meaning: "pattern",
        JLPT: 2
    },
    {
        kanji: "肌着",
        kana: "はだぎ",
        meaning: "underwear",
        JLPT: 2
    },
    {
        kanji: "果して",
        kana: "はたして",
        meaning: "as was expected,really",
        JLPT: 2
    },
    {
        kanji: "鉢",
        kana: "はち",
        meaning: "a bowl,a pot",
        JLPT: 2
    },
    {
        kanji: "×",
        kana: "ばつ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "発揮",
        kana: "はっき",
        meaning: "exhibition,demonstration,utilization,display",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "バック",
        meaning: "back",
        JLPT: 2
    },
    {
        kanji: "発射",
        kana: "はっしゃ",
        meaning: "firing,shooting,discharge,catapult",
        JLPT: 2
    },
    {
        kanji: "発想",
        kana: "はっそう",
        meaning: "expression (music),conceptualization",
        JLPT: 2
    },
    {
        kanji: "発電",
        kana: "はつでん",
        meaning: "generation (e.g. power)",
        JLPT: 2
    },
    {
        kanji: "発売",
        kana: "はつばい",
        meaning: "sale",
        JLPT: 2
    },
    {
        kanji: "派手",
        kana: "はで",
        meaning: "showy,loud,gay,flashy,gaudy",
        JLPT: 2
    },
    {
        kanji: "話合い",
        kana: "はなしあい",
        meaning: "discussion,conference",
        JLPT: 2
    },
    {
        kanji: "話し掛ける",
        kana: "はなしかける",
        meaning: "to accost a person,to talk (to someone)",
        JLPT: 2
    },
    {
        kanji: "話中",
        kana: "はなしちゅう",
        meaning: "while talking,the line is busy",
        JLPT: 2
    },
    {
        kanji: "甚だしい",
        kana: "はなはだしい",
        meaning: "extreme,excessive,terrible",
        JLPT: 2
    },
    {
        kanji: "花火",
        kana: "はなび",
        meaning: "fireworks",
        JLPT: 2
    },
    {
        kanji: "花嫁",
        kana: "はなよめ",
        meaning: "bride",
        JLPT: 2
    },
    {
        kanji: "放れる",
        kana: "はなれる",
        meaning: "to leave,to get free,to cut oneself off",
        JLPT: 2
    },
    {
        kanji: "羽根",
        kana: "はね",
        meaning: "shuttlecock",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ばね",
        meaning: "spring (e.g. coil, leaf)",
        JLPT: 2
    },
    {
        kanji: "跳ねる",
        kana: "はねる",
        meaning: "to jump,to leap",
        JLPT: 2
    },
    {
        kanji: "破片",
        kana: "はへん",
        meaning: "fragment,splinter,broken piece",
        JLPT: 2
    },
    {
        kanji: "歯磨き",
        kana: "はみがき",
        meaning: "dentifrice,toothpaste",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "はめる",
        meaning: "(col) to get in,to insert,to put on,to make love",
        JLPT: 2
    },
    {
        kanji: "早口",
        kana: "はやくち",
        meaning: "fast-talking",
        JLPT: 2
    },
    {
        kanji: "流行る",
        kana: "はやる",
        meaning: "to flourish,to thrive,to be popular,to come into fashion",
        JLPT: 2
    },
    {
        kanji: "払い込む",
        kana: "はらいこむ",
        meaning: "to deposit,to pay in",
        JLPT: 2
    },
    {
        kanji: "払い戻す",
        kana: "はらいもどす",
        meaning: "to repay,to pay back",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "バランス",
        meaning: "balance",
        JLPT: 2
    },
    {
        kanji: "針金",
        kana: "はりがね",
        meaning: "wire",
        JLPT: 2
    },
    {
        kanji: "張り切る",
        kana: "はりきる",
        meaning: "to be in high spirits,to be full of vigor",
        JLPT: 2
    },
    {
        kanji: "反映",
        kana: "はんえい",
        meaning: "reflection,influence",
        JLPT: 2
    },
    {
        kanji: "半径",
        kana: "はんけい",
        meaning: "radius",
        JLPT: 2
    },
    {
        kanji: "判子",
        kana: "はんこ",
        meaning: "seal (used for signature)",
        JLPT: 2
    },
    {
        kanji: "万歳",
        kana: "ばんざい",
        meaning: "hurrah, cheers",
        JLPT: 2
    },
    {
        kanji: "判事",
        kana: "はんじ",
        meaning: "judge,judiciary",
        JLPT: 2
    },
    {
        kanji: "反省",
        kana: "はんせい",
        meaning: "reflection,reconsideration,introspection,meditation,contemplation",
        JLPT: 2
    },
    {
        kanji: "番地",
        kana: "ばんち",
        meaning: "house number,address",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "パンツ",
        meaning: "underpants",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "バンド",
        meaning: "band",
        JLPT: 2
    },
    {
        kanji: "半島",
        kana: "はんとう",
        meaning: "peninsula",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ハンドル",
        meaning: "handle,steering wheel",
        JLPT: 2
    },
    {
        kanji: "日当たり",
        kana: "ひあたり",
        meaning: "exposure to the sun,sunny place",
        JLPT: 2
    },
    {
        kanji: "日帰り",
        kana: "ひがえり",
        meaning: "day trip",
        JLPT: 2
    },
    {
        kanji: "比較的",
        kana: "ひかくてき",
        meaning: "comparatively,relatively",
        JLPT: 2
    },
    {
        kanji: "日陰",
        kana: "ひかげ",
        meaning: "shadow",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぴかぴか",
        meaning: "glitter,sparkle",
        JLPT: 2
    },
    {
        kanji: "引受る",
        kana: "ひきうける",
        meaning: "to undertake,to take up,to take over",
        JLPT: 2
    },
    {
        kanji: "引返す",
        kana: "ひきかえす",
        meaning: "to repeat,to send back,to bring back",
        JLPT: 2
    },
    {
        kanji: "引算",
        kana: "ひきざん",
        meaning: "subtraction",
        JLPT: 2
    },
    {
        kanji: "引出す",
        kana: "ひきだす",
        meaning: "to pull out,to take out,to draw out,to withdraw",
        JLPT: 2
    },
    {
        kanji: "引き止める",
        kana: "ひきとめる",
        meaning: "to detain,to check,to restrain",
        JLPT: 2
    },
    {
        kanji: "卑怯",
        kana: "ひきょう",
        meaning: "cowardice,meanness,unfairness",
        JLPT: 2
    },
    {
        kanji: "引分け",
        kana: "ひきわけ",
        meaning: "a draw (in competition),tie game",
        JLPT: 2
    },
    {
        kanji: "髭",
        kana: "ひげ",
        meaning: "moustache,beard,whiskers",
        JLPT: 2
    },
    {
        kanji: "陽射",
        kana: "ひざし",
        meaning: "sunlight,rays of the sun",
        JLPT: 2
    },
    {
        kanji: "肘",
        kana: "ひじ",
        meaning: "elbow",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ピストル",
        meaning: "pistol",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ビタミン",
        meaning: "vitamin",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぴたり",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "引っ掛かる",
        kana: "ひっかかる",
        meaning: "to be caught in,to be stuck in,to be cheated",
        JLPT: 2
    },
    {
        kanji: "筆記",
        kana: "ひっき",
        meaning: "(taking) notes,copying",
        JLPT: 2
    },
    {
        kanji: "引っ繰り返す",
        kana: "ひっくりかえす",
        meaning: "to turn over,to overturn,to knock over,to upset,to turn inside out",
        JLPT: 2
    },
    {
        kanji: "引っ繰り返る",
        kana: "ひっくりかえる",
        meaning: "to be overturned,to be upset,to topple over,to be reversed",
        JLPT: 2
    },
    {
        kanji: "引越し",
        kana: "ひっこし",
        meaning: "moving (dwelling etc.),changing residence",
        JLPT: 2
    },
    {
        kanji: "引っ込む",
        kana: "ひっこむ",
        meaning: "to draw back,to sink,to cave in",
        JLPT: 2
    },
    {
        kanji: "筆者",
        kana: "ひっしゃ",
        meaning: "writer,author",
        JLPT: 2
    },
    {
        kanji: "必需品",
        kana: "ひつじゅひん",
        meaning: "necessities,necessary article,requisite,essential",
        JLPT: 2
    },
    {
        kanji: "人差指",
        kana: "ひとさしゆび",
        meaning: "index finger",
        JLPT: 2
    },
    {
        kanji: "一通り",
        kana: "ひととおり",
        meaning: "ordinary,usual,in general,briefly",
        JLPT: 2
    },
    {
        kanji: "人通り",
        kana: "ひとどおり",
        meaning: "pedestrian traffic",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ひとまず",
        meaning: "for the present,once,in outline",
        JLPT: 2
    },
    {
        kanji: "瞳",
        kana: "ひとみ",
        meaning: "pupil (of eye)",
        JLPT: 2
    },
    {
        kanji: "一休み",
        kana: "ひとやすみ",
        meaning: "a rest",
        JLPT: 2
    },
    {
        kanji: "独り言",
        kana: "ひとりごと",
        meaning: "a soliloquy,a monologue,speaking to oneself",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ひとりでに",
        meaning: "by itself,automatically,naturally",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ビニール",
        meaning: "vinyl",
        JLPT: 2
    },
    {
        kanji: "皮肉",
        kana: "ひにく",
        meaning: "cynicism,sarcasm",
        JLPT: 2
    },
    {
        kanji: "日日",
        kana: "ひにち",
        meaning: "every day,daily,day after day",
        JLPT: 2
    },
    {
        kanji: "捻る",
        kana: "ひねる",
        meaning: "to turn (a switch) on or off,to twist,to puzzle over",
        JLPT: 2
    },
    {
        kanji: "日の入り",
        kana: "ひのいり",
        meaning: "sunset",
        JLPT: 2
    },
    {
        kanji: "日の出",
        kana: "ひので",
        meaning: "sunrise",
        JLPT: 2
    },
    {
        kanji: "響き",
        kana: "ひびき",
        meaning: "echo,sound,reverberation,noise",
        JLPT: 2
    },
    {
        kanji: "響く",
        kana: "ひびく",
        meaning: "to resound",
        JLPT: 2
    },
    {
        kanji: "皮膚",
        kana: "ひふ",
        meaning: "skin",
        JLPT: 2
    },
    {
        kanji: "冷やす",
        kana: "ひやす",
        meaning: "to cool,to refrigerate",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ひゃっかじてん",
        meaning: "encyclopedia",
        JLPT: 2
    },
    {
        kanji: "美容",
        kana: "びよう",
        meaning: "beauty of figure or form",
        JLPT: 2
    },
    {
        kanji: "表紙",
        kana: "ひょうし",
        meaning: "front cover,binding",
        JLPT: 2
    },
    {
        kanji: "標識",
        kana: "ひょうしき",
        meaning: "sign,mark",
        JLPT: 2
    },
    {
        kanji: "標準",
        kana: "ひょうじゅん",
        meaning: "standard,level",
        JLPT: 2
    },
    {
        kanji: "標本",
        kana: "ひょうほん",
        meaning: "example,specimen",
        JLPT: 2
    },
    {
        kanji: "評論",
        kana: "ひょうろん",
        meaning: "criticism,critique",
        JLPT: 2
    },
    {
        kanji: "平仮名",
        kana: "ひらがな",
        meaning: "hiragana,47 syllables,the cursive syllabary",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ビルディング",
        meaning: "building",
        JLPT: 2
    },
    {
        kanji: "昼寝",
        kana: "ひるね",
        meaning: "nap (at home),siesta",
        JLPT: 2
    },
    {
        kanji: "広げる",
        kana: "ひろげる",
        meaning: "to spread,to extend,to expand,to enlarge",
        JLPT: 2
    },
    {
        kanji: "広さ",
        kana: "ひろさ",
        meaning: "extent",
        JLPT: 2
    },
    {
        kanji: "広場",
        kana: "ひろば",
        meaning: "plaza",
        JLPT: 2
    },
    {
        kanji: "広々",
        kana: "ひろびろ",
        meaning: "extensive,spacious",
        JLPT: 2
    },
    {
        kanji: "広める",
        kana: "ひろめる",
        meaning: "to broaden,to propagate",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ピンク",
        meaning: "pink",
        JLPT: 2
    },
    {
        kanji: "便箋",
        kana: "びんせん",
        meaning: "writing paper,stationery",
        JLPT: 2
    },
    {
        kanji: "瓶詰",
        kana: "びんづめ",
        meaning: "bottling,bottled",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ファスナー",
        meaning: "fastener,zipper",
        JLPT: 2
    },
    {
        kanji: "風船",
        kana: "ふうせん",
        meaning: "balloon",
        JLPT: 2
    },
    {
        kanji: "不運",
        kana: "ふうん",
        meaning: "unlucky,misfortune,bad luck,fate",
        JLPT: 2
    },
    {
        kanji: "殖える",
        kana: "ふえる",
        meaning: "to increase,to multiply",
        JLPT: 2
    },
    {
        kanji: "深まる",
        kana: "ふかまる",
        meaning: "to deepen,to heighten,to intensify",
        JLPT: 2
    },
    {
        kanji: "不規則",
        kana: "ふきそく",
        meaning: "irregularity,unsteadiness,disorderly",
        JLPT: 2
    },
    {
        kanji: "普及",
        kana: "ふきゅう",
        meaning: "diffusion,spread",
        JLPT: 2
    },
    {
        kanji: "付近",
        kana: "ふきん",
        meaning: "neighbourhood,vicinity,environs",
        JLPT: 2
    },
    {
        kanji: "拭く",
        kana: "ふく",
        meaning: "to wipe,to dry",
        JLPT: 2
    },
    {
        kanji: "副詞",
        kana: "ふくし",
        meaning: "adverb",
        JLPT: 2
    },
    {
        kanji: "複写",
        kana: "ふくしゃ",
        meaning: "copy,duplicate",
        JLPT: 2
    },
    {
        kanji: "複数",
        kana: "ふくすう",
        meaning: "plural,multiple",
        JLPT: 2
    },
    {
        kanji: "含める",
        kana: "ふくめる",
        meaning: "to include,to instruct,to make one understand",
        JLPT: 2
    },
    {
        kanji: "膨らます",
        kana: "ふくらます",
        meaning: "to swell,to expand,to inflate,to bulge",
        JLPT: 2
    },
    {
        kanji: "膨らむ",
        kana: "ふくらむ",
        meaning: "to expand,to swell (out),to get big,to become inflated",
        JLPT: 2
    },
    {
        kanji: "不潔",
        kana: "ふけつ",
        meaning: "unclean,dirty,filthy,impure",
        JLPT: 2
    },
    {
        kanji: "更ける",
        kana: "ふける",
        meaning: "to get late,to advance,to wear on",
        JLPT: 2
    },
    {
        kanji: "符号",
        kana: "ふごう",
        meaning: "sign,mark,symbol",
        JLPT: 2
    },
    {
        kanji: "夫妻",
        kana: "ふさい",
        meaning: "man and wife,married couple",
        JLPT: 2
    },
    {
        kanji: "塞がる",
        kana: "ふさがる",
        meaning: "to be plugged up,to be shut up",
        JLPT: 2
    },
    {
        kanji: "塞ぐ",
        kana: "ふさぐ",
        meaning: "to stop up,to close up,to block (up)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ふざける",
        meaning: "to romp,to gambol,to frolic,to joke",
        JLPT: 2
    },
    {
        kanji: "無沙汰",
        kana: "ぶさた",
        meaning: "neglecting to stay in contact",
        JLPT: 2
    },
    {
        kanji: "武士",
        kana: "ぶし",
        meaning: "warrior,samurai",
        JLPT: 2
    },
    {
        kanji: "部首",
        kana: "ぶしゅ",
        meaning: "radical (of a kanji character)",
        JLPT: 2
    },
    {
        kanji: "襖",
        kana: "ふすま",
        meaning: "sliding screen",
        JLPT: 2
    },
    {
        kanji: "附属",
        kana: "ふぞく",
        meaning: "attached,belonging,affiliated",
        JLPT: 2
    },
    {
        kanji: "蓋",
        kana: "ふた",
        meaning: "cover,lid,cap",
        JLPT: 2
    },
    {
        kanji: "不通",
        kana: "ふつう",
        meaning: "suspension,interruption,stoppage,tie-up,cessation",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぶつかる",
        meaning: "to strike,to collide with",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぶつける",
        meaning: "to knock,to run into,to nail on,to strike hard,to hit and attack",
        JLPT: 2
    },
    {
        kanji: "物騒",
        kana: "ぶっそう",
        meaning: "dangerous,disturbed,insecure",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぶつぶつ",
        meaning: "grumbling,complaining in a small voice",
        JLPT: 2
    },
    {
        kanji: "船便",
        kana: "ふなびん",
        meaning: "surface mail (ship)",
        JLPT: 2
    },
    {
        kanji: "部品",
        kana: "ぶひん",
        meaning: "parts,accessories",
        JLPT: 2
    },
    {
        kanji: "吹雪",
        kana: "ふぶき",
        meaning: "snow storm",
        JLPT: 2
    },
    {
        kanji: "父母",
        kana: "ふぼ",
        meaning: "father and mother,parents",
        JLPT: 2
    },
    {
        kanji: "踏切",
        kana: "ふみきり",
        meaning: "railway crossing,level crossing,starting line,scratch,crossover",
        JLPT: 2
    },
    {
        kanji: "麓",
        kana: "ふもと",
        meaning: "the foot,the bottom,the base (of a mountain)",
        JLPT: 2
    },
    {
        kanji: "増やす",
        kana: "ふやす",
        meaning: "to increase,to add to,to augment",
        JLPT: 2
    },
    {
        kanji: "殖やす",
        kana: "ふやす",
        meaning: "to increase,to add to,to augment",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "フライパン",
        meaning: "fry pan,frying pan",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ブラウス",
        meaning: "blouse",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぶらさげる",
        meaning: "to hang,to suspend,to dangle,to swing",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ブラシ",
        meaning: "brushy,brush",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "プラスチック",
        meaning: "plastic",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "プラットホーム",
        meaning: "platform",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "フリー",
        meaning: "free",
        JLPT: 2
    },
    {
        kanji: "振り仮名",
        kana: "ふりがな",
        meaning: ",pronunciation key",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "プリント",
        meaning: "print,handout",
        JLPT: 2
    },
    {
        kanji: "振舞う",
        kana: "ふるまう",
        meaning: "to behave,to conduct oneself,to entertain (vt)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ブローチ",
        meaning: "brooch",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "プログラム",
        meaning: "program",
        JLPT: 2
    },
    {
        kanji: "風呂敷",
        kana: "ふろしき",
        meaning: "wrapping cloth,cloth wrapper",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ふわふわ",
        meaning: "light,soft",
        JLPT: 2
    },
    {
        kanji: "噴火",
        kana: "ふんか",
        meaning: "eruption",
        JLPT: 2
    },
    {
        kanji: "分解",
        kana: "ぶんかい",
        meaning: "analysis,disassembly",
        JLPT: 2
    },
    {
        kanji: "文芸",
        kana: "ぶんげい",
        meaning: "literature,art and literature,belles-lettres",
        JLPT: 2
    },
    {
        kanji: "文献",
        kana: "ぶんけん",
        meaning: "literature,books (reference)",
        JLPT: 2
    },
    {
        kanji: "噴水",
        kana: "ふんすい",
        meaning: "water fountain",
        JLPT: 2
    },
    {
        kanji: "分数",
        kana: "ぶんすう",
        meaning: "fraction (in math)",
        JLPT: 2
    },
    {
        kanji: "文体",
        kana: "ぶんたい",
        meaning: "literary style",
        JLPT: 2
    },
    {
        kanji: "分布",
        kana: "ぶんぷ",
        meaning: "distribution",
        JLPT: 2
    },
    {
        kanji: "文房具",
        kana: "ぶんぼうぐ",
        meaning: "stationery",
        JLPT: 2
    },
    {
        kanji: "文脈",
        kana: "ぶんみゃく",
        meaning: "context",
        JLPT: 2
    },
    {
        kanji: "分量",
        kana: "ぶんりょう",
        meaning: "amount,quantity",
        JLPT: 2
    },
    {
        kanji: "分類",
        kana: "ぶんるい",
        meaning: "classification",
        JLPT: 2
    },
    {
        kanji: "閉会",
        kana: "へいかい",
        meaning: "closure",
        JLPT: 2
    },
    {
        kanji: "平気",
        kana: "へいき",
        meaning: "coolness,calmness,composure,unconcern",
        JLPT: 2
    },
    {
        kanji: "並行",
        kana: "へいこう",
        meaning: "(going) side by side,concurrent,abreast,at the same time",
        JLPT: 2
    },
    {
        kanji: "平日",
        kana: "へいじつ",
        meaning: "weekday,ordinary days",
        JLPT: 2
    },
    {
        kanji: "兵隊",
        kana: "へいたい",
        meaning: "soldier,sailor",
        JLPT: 2
    },
    {
        kanji: "平凡",
        kana: "へいぼん",
        meaning: "common,commonplace,ordinary,mediocre",
        JLPT: 2
    },
    {
        kanji: "平野",
        kana: "へいや",
        meaning: "plain,open field",
        JLPT: 2
    },
    {
        kanji: "凹む",
        kana: "へこむ",
        meaning: "to be dented,to be indented,to yield to,to give,to sink,to collapse,to cave in,to be snubbed",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "へそ",
        meaning: "navel,belly-button",
        JLPT: 2
    },
    {
        kanji: "隔てる",
        kana: "へだてる",
        meaning: "to be shut out",
        JLPT: 2
    },
    {
        kanji: "別荘",
        kana: "べっそう",
        meaning: "holiday house,villa",
        JLPT: 2
    },
    {
        kanji: "別々",
        kana: "べつべつ",
        meaning: "separately,individually",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ベテラン",
        meaning: "veteran",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ヘリコプター",
        meaning: "helicopter",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "へる",
        meaning: "to decrease (in size or number),to diminish,to abate",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぺん",
        meaning: "pen",
        JLPT: 2
    },
    {
        kanji: "編集",
        kana: "へんしゅう",
        meaning: "editing,compilation,editorial (e.g. committee)",
        JLPT: 2
    },
    {
        kanji: "便所",
        kana: "べんじょ",
        meaning: "toilet,lavatory,rest room,latrine,comfort station",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ペンチ",
        meaning: "(abbr) pliers (lit: pinchers)",
        JLPT: 2
    },
    {
        kanji: "望遠鏡",
        kana: "ぼうえんきょう",
        meaning: "telescope",
        JLPT: 2
    },
    {
        kanji: "方角",
        kana: "ほうがく",
        meaning: "direction,way,compass point",
        JLPT: 2
    },
    {
        kanji: "箒",
        kana: "ほうき",
        meaning: "(n) broom",
        JLPT: 2
    },
    {
        kanji: "方言",
        kana: "ほうげん",
        meaning: "dialect",
        JLPT: 2
    },
    {
        kanji: "坊さん",
        kana: "ぼうさん",
        meaning: "Buddhist priest,monk",
        JLPT: 2
    },
    {
        kanji: "防止",
        kana: "ぼうし",
        meaning: "prevention,check",
        JLPT: 2
    },
    {
        kanji: "方針",
        kana: "ほうしん",
        meaning: "objective,plan,policy",
        JLPT: 2
    },
    {
        kanji: "包装",
        kana: "ほうそう",
        meaning: "packing,wrapping",
        JLPT: 2
    },
    {
        kanji: "法則",
        kana: "ほうそく",
        meaning: "law,rule",
        JLPT: 2
    },
    {
        kanji: "包帯",
        kana: "ほうたい",
        meaning: "bandage,dressing",
        JLPT: 2
    },
    {
        kanji: "膨大",
        kana: "ぼうだい",
        meaning: "huge,bulky,enormous,extensive,swelling,expansion",
        JLPT: 2
    },
    {
        kanji: "庖丁",
        kana: "ほうちょう",
        meaning: "kitchen knife,carving knife",
        JLPT: 2
    },
    {
        kanji: "方程式",
        kana: "ほうていしき",
        meaning: "equation",
        JLPT: 2
    },
    {
        kanji: "防犯",
        kana: "ぼうはん",
        meaning: "prevention of crime",
        JLPT: 2
    },
    {
        kanji: "方面",
        kana: "ほうめん",
        meaning: "direction,district,field (e.g., of study)",
        JLPT: 2
    },
    {
        kanji: "坊や",
        kana: "ぼうや",
        meaning: "boy",
        JLPT: 2
    },
    {
        kanji: "放る",
        kana: "ほうる",
        meaning: "to let go",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ボーナス",
        meaning: "bonus",
        JLPT: 2
    },
    {
        kanji: "朗らか",
        kana: "ほがらか",
        meaning: "brightness,cheerfulness,melodious",
        JLPT: 2
    },
    {
        kanji: "牧場",
        kana: "ぼくじょう",
        meaning: "(1) farm (livestock),(2) pasture land,meadow,grazing land",
        JLPT: 2
    },
    {
        kanji: "牧畜",
        kana: "ぼくちく",
        meaning: "stock-farming",
        JLPT: 2
    },
    {
        kanji: "保健",
        kana: "ほけん",
        meaning: "health preservation,hygiene,sanitation",
        JLPT: 2
    },
    {
        kanji: "募集",
        kana: "ぼしゅう",
        meaning: "recruiting,taking applications",
        JLPT: 2
    },
    {
        kanji: "干す",
        kana: "ほす",
        meaning: "to air,to dry,to desiccate,to drain (off),to drink up",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ポスター",
        meaning: "poster",
        JLPT: 2
    },
    {
        kanji: "北極",
        kana: "ほっきょく",
        meaning: "North Pole",
        JLPT: 2
    },
    {
        kanji: "坊っちゃん",
        kana: "ぼっちゃん",
        meaning: "son (of others)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ほどく",
        meaning: "to unfasten",
        JLPT: 2
    },
    {
        kanji: "堀",
        kana: "ほり",
        meaning: "moat,canal",
        JLPT: 2
    },
    {
        kanji: "掘る",
        kana: "ほる",
        meaning: "to dig,to excavate",
        JLPT: 2
    },
    {
        kanji: "彫る",
        kana: "ほる",
        meaning: "to carve,to engrave,to sculpture,to chisel",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ぼろ",
        meaning: "rag,scrap,tattered clothes,fault (esp. in a pretense)",
        JLPT: 2
    },
    {
        kanji: "盆",
        kana: "ぼん",
        meaning: "Lantern Festival,Festival of the Dead,tray",
        JLPT: 2
    },
    {
        kanji: "盆地",
        kana: "ぼんち",
        meaning: "basin (e.g. between mountains)",
        JLPT: 2
    },
    {
        kanji: "本部",
        kana: "ほんぶ",
        meaning: "headquarters",
        JLPT: 2
    },
    {
        kanji: "本来",
        kana: "ほんらい",
        meaning: "essentially,naturally,by nature",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "まあまあ",
        meaning: "so-so",
        JLPT: 2
    },
    {
        kanji: "枚数",
        kana: "まいすう",
        meaning: "the number of flat things",
        JLPT: 2
    },
    {
        kanji: "毎度",
        kana: "まいど",
        meaning: "each time,common service-sector greeting",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "マイナス",
        meaning: "minus",
        JLPT: 2
    },
    {
        kanji: "巻く",
        kana: "まく",
        meaning: "to wind,to coil,to roll",
        JLPT: 2
    },
    {
        kanji: "蒔く",
        kana: "まく",
        meaning: "to sow (seeds)",
        JLPT: 2
    },
    {
        kanji: "撒く",
        kana: "まく",
        meaning: "to scatter,to sprinkle,to sow",
        JLPT: 2
    },
    {
        kanji: "枕",
        kana: "まくら",
        meaning: "pillow,bolster",
        JLPT: 2
    },
    {
        kanji: "曲げる",
        kana: "まげる",
        meaning: "to bend,to crook,to lean",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "まごまご",
        meaning: "confused",
        JLPT: 2
    },
    {
        kanji: "摩擦",
        kana: "まさつ",
        meaning: "friction,rubbing,rubdown,chafe",
        JLPT: 2
    },
    {
        kanji: "混ざる",
        kana: "まざる",
        meaning: "to be mixed,to be blended with,to associate with,to mingle with,to join",
        JLPT: 2
    },
    {
        kanji: "交ざる",
        kana: "まざる",
        meaning: "to be mixed,to be blended with,to associate with,to mingle with,to join",
        JLPT: 2
    },
    {
        kanji: "混じる",
        kana: "まじる",
        meaning: "to be mixed,to be blended with,to associate with",
        JLPT: 2
    },
    {
        kanji: "交じる",
        kana: "まじる",
        meaning: "to be mixed,to be blended with,to associate with",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "マスク",
        meaning: "mask",
        JLPT: 2
    },
    {
        kanji: "混ぜる",
        kana: "まぜる",
        meaning: "to mix,to stir",
        JLPT: 2
    },
    {
        kanji: "交ぜる",
        kana: "まぜる",
        meaning: "to be mixed,to be blended with",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "またぐ",
        meaning: "to straddle",
        JLPT: 2
    },
    {
        kanji: "又は",
        kana: "または",
        meaning: "or,otherwise",
        JLPT: 2
    },
    {
        kanji: "待合室",
        kana: "まちあいしつ",
        meaning: "waiting room",
        JLPT: 2
    },
    {
        kanji: "待ち合わせる",
        kana: "まちあわせる",
        meaning: "to rendezvous,to meet at a prearranged place and time",
        JLPT: 2
    },
    {
        kanji: "街角",
        kana: "まちかど",
        meaning: "street corner",
        JLPT: 2
    },
    {
        kanji: "真っ暗",
        kana: "まっくら",
        meaning: "total darkness,shortsightedness,pitch dark",
        JLPT: 2
    },
    {
        kanji: "真っ黒",
        kana: "まっくろ",
        meaning: "pitch black",
        JLPT: 2
    },
    {
        kanji: "真っ青",
        kana: "まっさお",
        meaning: "deep blue,ghastly pale",
        JLPT: 2
    },
    {
        kanji: "真っ先",
        kana: "まっさき",
        meaning: "the head,the foremost,beginning",
        JLPT: 2
    },
    {
        kanji: "真っ白",
        kana: "まっしろ",
        meaning: "pure white",
        JLPT: 2
    },
    {
        kanji: "祭る",
        kana: "まつる",
        meaning: "to deify,to enshrine",
        JLPT: 2
    },
    {
        kanji: "窓口",
        kana: "まどぐち",
        meaning: "ticket window",
        JLPT: 2
    },
    {
        kanji: "纏まる",
        kana: "まとまる",
        meaning: "to be collected,to be settled,to be in order",
        JLPT: 2
    },
    {
        kanji: "纏める",
        kana: "まとめる",
        meaning: "to put in order,to collect,to bring to a conclusion",
        JLPT: 2
    },
    {
        kanji: "真似る",
        kana: "まねる",
        meaning: "to mimic,to imitate",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "まぶしい",
        meaning: "dazzling,radiant",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "まぶた",
        meaning: "eyelids",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "マフラー",
        meaning: "muffler,scarf",
        JLPT: 2
    },
    {
        kanji: "間も無く",
        kana: "まもなく",
        meaning: "soon,before long,in a short time",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "マラソン",
        meaning: "marathon",
        JLPT: 2
    },
    {
        kanji: "円い",
        kana: "まるい",
        meaning: "round,circular,spherical",
        JLPT: 2
    },
    {
        kanji: "稀",
        kana: "まれ",
        meaning: "rare,seldom",
        JLPT: 2
    },
    {
        kanji: "回り道",
        kana: "まわりみち",
        meaning: "detour",
        JLPT: 2
    },
    {
        kanji: "満員",
        kana: "まんいん",
        meaning: "full house,no vacancy,sold out",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "マンション",
        meaning: "large apartment,apartment house",
        JLPT: 2
    },
    {
        kanji: "満点",
        kana: "まんてん",
        meaning: "perfect score",
        JLPT: 2
    },
    {
        kanji: "見送る",
        kana: "みおくる",
        meaning: "(1) to see off,to farewell,(2) to escort,(3) to let pass",
        JLPT: 2
    },
    {
        kanji: "見下ろす",
        kana: "みおろす",
        meaning: "to overlook,to command a view of,to look down on something",
        JLPT: 2
    },
    {
        kanji: "見掛け",
        kana: "みかけ",
        meaning: "outward appearance",
        JLPT: 2
    },
    {
        kanji: "三日月",
        kana: "みかづき",
        meaning: "new moon,crescent moon",
        JLPT: 2
    },
    {
        kanji: "岬",
        kana: "みさき",
        meaning: "cape (on coast)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "みじめ",
        meaning: "(arch) sad,pitiful,wretched",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ミシン",
        meaning: "sewing machine",
        JLPT: 2
    },
    {
        kanji: "店屋",
        kana: "みせや",
        meaning: "store,shop",
        JLPT: 2
    },
    {
        kanji: "見出し",
        kana: "みだし",
        meaning: "heading,caption,subtitle,index",
        JLPT: 2
    },
    {
        kanji: "道順",
        kana: "みちじゅん",
        meaning: "itinerary,route",
        JLPT: 2
    },
    {
        kanji: "見付かる",
        kana: "みつかる",
        meaning: "to be found,to be discovered",
        JLPT: 2
    },
    {
        kanji: "見付ける",
        kana: "みつける",
        meaning: "to be familiar,to discover,to detect",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "みっともない",
        meaning: "shameful,indecent",
        JLPT: 2
    },
    {
        kanji: "見直す",
        kana: "みなおす",
        meaning: "to look again,to get a better opinion of",
        JLPT: 2
    },
    {
        kanji: "見慣れる",
        kana: "みなれる",
        meaning: "to become used to seeing,to be familiar with",
        JLPT: 2
    },
    {
        kanji: "醜い",
        kana: "みにくい",
        meaning: "ugly",
        JLPT: 2
    },
    {
        kanji: "実る",
        kana: "みのる",
        meaning: "to bear fruit,to ripen",
        JLPT: 2
    },
    {
        kanji: "身分",
        kana: "みぶん",
        meaning: "social position,social status",
        JLPT: 2
    },
    {
        kanji: "見本",
        kana: "みほん",
        meaning: "sample",
        JLPT: 2
    },
    {
        kanji: "見舞う",
        kana: "みまう",
        meaning: "to ask after (health),to visit",
        JLPT: 2
    },
    {
        kanji: "未満",
        kana: "みまん",
        meaning: "less than,insufficient",
        JLPT: 2
    },
    {
        kanji: "名字",
        kana: "みょうじ",
        meaning: "surname,family name",
        JLPT: 2
    },
    {
        kanji: "ミリ",
        kana: "（メートル）",
        meaning: "milli-,10^-3",
        JLPT: 2
    },
    {
        kanji: "診る",
        kana: "みる",
        meaning: "to examine (medical)",
        JLPT: 2
    },
    {
        kanji: "民間",
        kana: "みんかん",
        meaning: "private,civilian,civil,popular,folk,unofficial",
        JLPT: 2
    },
    {
        kanji: "民謡",
        kana: "みんよう",
        meaning: "folk song,popular song",
        JLPT: 2
    },
    {
        kanji: "向う",
        kana: "むかう",
        meaning: "(v5u) to face,to go towards",
        JLPT: 2
    },
    {
        kanji: "剥く",
        kana: "むく",
        meaning: "to peel,to skin,to pare,to hull",
        JLPT: 2
    },
    {
        kanji: "無限",
        kana: "むげん",
        meaning: "infinite",
        JLPT: 2
    },
    {
        kanji: "無地",
        kana: "むじ",
        meaning: "plain,unfigured",
        JLPT: 2
    },
    {
        kanji: "蒸し暑い",
        kana: "むしあつい",
        meaning: "humid,sultry",
        JLPT: 2
    },
    {
        kanji: "矛盾",
        kana: "むじゅん",
        meaning: "contradiction,inconsistency",
        JLPT: 2
    },
    {
        kanji: "蒸す",
        kana: "むす",
        meaning: "to steam,to poultice,to be sultry",
        JLPT: 2
    },
    {
        kanji: "無数",
        kana: "むすう",
        meaning: "countless number,infinite number",
        JLPT: 2
    },
    {
        kanji: "紫",
        kana: "むらさき",
        meaning: "purple colour,violet",
        JLPT: 2
    },
    {
        kanji: "群れ",
        kana: "むれ",
        meaning: "group,crowd,flock,herd",
        JLPT: 2
    },
    {
        kanji: "姪",
        kana: "めい",
        meaning: "niece",
        JLPT: 2
    },
    {
        kanji: "名作",
        kana: "めいさく",
        meaning: "masterpiece",
        JLPT: 2
    },
    {
        kanji: "名刺",
        kana: "めいし",
        meaning: "business card",
        JLPT: 2
    },
    {
        kanji: "名詞",
        kana: "めいし",
        meaning: "noun",
        JLPT: 2
    },
    {
        kanji: "名所",
        kana: "めいしょ",
        meaning: "famous place",
        JLPT: 2
    },
    {
        kanji: "命ずる",
        kana: "めいずる",
        meaning: "to command,to appoint",
        JLPT: 2
    },
    {
        kanji: "迷信",
        kana: "めいしん",
        meaning: "superstition",
        JLPT: 2
    },
    {
        kanji: "名物",
        kana: "めいぶつ",
        meaning: "famous product,special product,speciality",
        JLPT: 2
    },
    {
        kanji: "銘々",
        kana: "めいめい",
        meaning: "each,individual",
        JLPT: 2
    },
    {
        kanji: "目上",
        kana: "めうえ",
        meaning: "superior(s),senior",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "メーター",
        meaning: "meter (clock)",
        JLPT: 2
    },
    {
        kanji: "恵まれる",
        kana: "めぐまれる",
        meaning: "to be blessed with,to be rich in",
        JLPT: 2
    },
    {
        kanji: "巡る",
        kana: "めぐる",
        meaning: "to go around",
        JLPT: 2
    },
    {
        kanji: "目指す",
        kana: "めざす",
        meaning: "to aim at,to have an eye on",
        JLPT: 2
    },
    {
        kanji: "目覚し",
        kana: "めざまし",
        meaning: "(abbr) alarm-clock",
        JLPT: 2
    },
    {
        kanji: "目下",
        kana: "めした",
        meaning: "at present,now",
        JLPT: 2
    },
    {
        kanji: "目印",
        kana: "めじるし",
        meaning: "mark,sign,landmark",
        JLPT: 2
    },
    {
        kanji: "目立つ",
        kana: "めだつ",
        meaning: "to be conspicuous,to stand out",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "めちゃくちゃ",
        meaning: "absurd,unreasonable,excessive,messed up,spoiled,wreaked",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "めっきり",
        meaning: "remarkably",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "めでたい",
        meaning: "happy,simple soul,propitious,joyous",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "メニュー",
        meaning: "menu",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "めまい",
        meaning: "dizziness,giddiness",
        JLPT: 2
    },
    {
        kanji: "目安",
        kana: "めやす",
        meaning: "criterion,aim",
        JLPT: 2
    },
    {
        kanji: "免税",
        kana: "めんぜい",
        meaning: "tax exemption,duty exemption",
        JLPT: 2
    },
    {
        kanji: "面積",
        kana: "めんせき",
        meaning: "area",
        JLPT: 2
    },
    {
        kanji: "面接",
        kana: "めんせつ",
        meaning: "interview",
        JLPT: 2
    },
    {
        kanji: "面倒臭い",
        kana: "めんどうくさい",
        meaning: "bother to do,tiresome",
        JLPT: 2
    },
    {
        kanji: "儲かる",
        kana: "もうかる",
        meaning: "to be profitable,to yield a profit",
        JLPT: 2
    },
    {
        kanji: "儲ける",
        kana: "もうける",
        meaning: "to get,to earn,to gain,to have (bear, beget) a child",
        JLPT: 2
    },
    {
        kanji: "申し訳ない",
        kana: "もうしわけない",
        meaning: "inexcusable",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "モーター",
        meaning: "motor",
        JLPT: 2
    },
    {
        kanji: "木材",
        kana: "もくざい",
        meaning: "lumber,timber,wood",
        JLPT: 2
    },
    {
        kanji: "目次",
        kana: "もくじ",
        meaning: "table of contents",
        JLPT: 2
    },
    {
        kanji: "潜る",
        kana: "もぐる",
        meaning: "(1) to drive,to pass through,(2) to evade,to hide,(3) to dive (into or under water),to go undergroun",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "もしかしたら",
        meaning: "perhaps,maybe,by some chance",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "もしかすると",
        meaning: "perhaps,maybe,by some chance",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "もたれる",
        meaning: "to lean against,to lean on,to recline on,to lie heavy (on the stomach)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "モダン",
        meaning: "modern",
        JLPT: 2
    },
    {
        kanji: "餅",
        kana: "もち",
        meaning: "sticky rice cake",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "もったいない",
        meaning: "too good,more than one deserves,wasteful,sacrilegious,unworthy of",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "モデル",
        meaning: "model",
        JLPT: 2
    },
    {
        kanji: "元々",
        kana: "もともと",
        meaning: "originally,by nature,from the start",
        JLPT: 2
    },
    {
        kanji: "物置",
        kana: "ものおき",
        meaning: "storage room",
        JLPT: 2
    },
    {
        kanji: "物語る",
        kana: "ものがたる",
        meaning: "to tell,to indicate",
        JLPT: 2
    },
    {
        kanji: "物差し",
        kana: "ものさし",
        meaning: "ruler,measure",
        JLPT: 2
    },
    {
        kanji: "物凄い",
        kana: "ものすごい",
        meaning: "earth-shattering,staggering,to a very great extent",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "モノレール",
        meaning: "monorail",
        JLPT: 2
    },
    {
        kanji: "紅葉",
        kana: "もみじ",
        meaning: "(1) (Japanese) maple",
        JLPT: 2
    },
    {
        kanji: "揉む",
        kana: "もむ",
        meaning: "to rub,to crumple (up),to wrinkle",
        JLPT: 2
    },
    {
        kanji: "燃やす",
        kana: "もやす",
        meaning: "to burn",
        JLPT: 2
    },
    {
        kanji: "催し",
        kana: "もよおし",
        meaning: "event,festivities,function",
        JLPT: 2
    },
    {
        kanji: "盛る",
        kana: "もる",
        meaning: "(1) to serve (food, etc.),(2) to fill up,(3) to prescribe",
        JLPT: 2
    },
    {
        kanji: "問答",
        kana: "もんどう",
        meaning: "questions and answers,dialogue",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "やかましい",
        meaning: "(1) noisy,(2) strict,fussy",
        JLPT: 2
    },
    {
        kanji: "夜間",
        kana: "やかん",
        meaning: "at night,nighttime",
        JLPT: 2
    },
    {
        kanji: "薬缶",
        kana: "やかん",
        meaning: "kettle",
        JLPT: 2
    },
    {
        kanji: "役者",
        kana: "やくしゃ",
        meaning: "actor,actress",
        JLPT: 2
    },
    {
        kanji: "役所",
        kana: "やくしょ",
        meaning: "government office,public office",
        JLPT: 2
    },
    {
        kanji: "訳す",
        kana: "やくす",
        meaning: "to translate",
        JLPT: 2
    },
    {
        kanji: "役人",
        kana: "やくにん",
        meaning: "government official",
        JLPT: 2
    },
    {
        kanji: "薬品",
        kana: "やくひん",
        meaning: "medicine(s),chemical(s)",
        JLPT: 2
    },
    {
        kanji: "役目",
        kana: "やくめ",
        meaning: "duty,business",
        JLPT: 2
    },
    {
        kanji: "火傷",
        kana: "やけど",
        meaning: "burn,scald",
        JLPT: 2
    },
    {
        kanji: "夜行",
        kana: "やこう",
        meaning: "walking around at night,night train,night travel",
        JLPT: 2
    },
    {
        kanji: "矢印",
        kana: "やじるし",
        meaning: "directing arrow",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "やたらに",
        meaning: "randomly,recklessly,blindly",
        JLPT: 2
    },
    {
        kanji: "薬局",
        kana: "やっきょく",
        meaning: "pharmacy,drugstore",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "やっつける",
        meaning: "to attack (an enemy),to beat,to do away with,to finish off",
        JLPT: 2
    },
    {
        kanji: "家主",
        kana: "やぬし",
        meaning: "landlord",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "やっぱり",
        meaning: "also,as I thought,still,in spite of,absolutely,of course",
        JLPT: 2
    },
    {
        kanji: "破く",
        kana: "やぶく",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "破れる",
        kana: "やぶれる",
        meaning: "to get torn,to wear out",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "やむをえない",
        meaning: "cannot be helped,unavoidable",
        JLPT: 2
    },
    {
        kanji: "軟らかい",
        kana: "やわらかい",
        meaning: "soft,tender,limp",
        JLPT: 2
    },
    {
        kanji: "遊園地",
        kana: "ゆうえんち",
        meaning: "amusement park",
        JLPT: 2
    },
    {
        kanji: "夕刊",
        kana: "ゆうかん",
        meaning: "evening paper",
        JLPT: 2
    },
    {
        kanji: "友好",
        kana: "ゆうこう",
        meaning: "friendship",
        JLPT: 2
    },
    {
        kanji: "郵送",
        kana: "ゆうそう",
        meaning: "mailing",
        JLPT: 2
    },
    {
        kanji: "夕立",
        kana: "ゆうだち",
        meaning: "(sudden) evening shower (rain)",
        JLPT: 2
    },
    {
        kanji: "夕日",
        kana: "ゆうひ",
        meaning: "(in) the evening sun,setting sun",
        JLPT: 2
    },
    {
        kanji: "悠々",
        kana: "ゆうゆう",
        meaning: "quiet,calm,leisurely",
        JLPT: 2
    },
    {
        kanji: "有料",
        kana: "ゆうりょう",
        meaning: "admission-paid,toll",
        JLPT: 2
    },
    {
        kanji: "浴衣",
        kana: "ゆかた",
        meaning: "bathrobe,informal summer kimono,yukata",
        JLPT: 2
    },
    {
        kanji: "湯気",
        kana: "ゆげ",
        meaning: "steam,vapour",
        JLPT: 2
    },
    {
        kanji: "輸血",
        kana: "ゆけつ",
        meaning: "blood transfusion",
        JLPT: 2
    },
    {
        kanji: "輸送",
        kana: "ゆそう",
        meaning: "transport,transportation",
        JLPT: 2
    },
    {
        kanji: "油断",
        kana: "ゆだん",
        meaning: "negligence,unpreparedness",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ゆでる",
        meaning: "to boil",
        JLPT: 2
    },
    {
        kanji: "湯飲み",
        kana: "ゆのみ",
        meaning: "teacup",
        JLPT: 2
    },
    {
        kanji: "緩い",
        kana: "ゆるい",
        meaning: "loose,lenient,slow",
        JLPT: 2
    },
    {
        kanji: "溶岩",
        kana: "ようがん",
        meaning: "lava",
        JLPT: 2
    },
    {
        kanji: "容器",
        kana: "ようき",
        meaning: "container,vessel",
        JLPT: 2
    },
    {
        kanji: "用語",
        kana: "ようご",
        meaning: "term,terminology",
        JLPT: 2
    },
    {
        kanji: "要旨",
        kana: "ようし",
        meaning: "gist,essentials,summary,fundamentals",
        JLPT: 2
    },
    {
        kanji: "幼児",
        kana: "ようじ",
        meaning: "infant,baby,child",
        JLPT: 2
    },
    {
        kanji: "容積",
        kana: "ようせき",
        meaning: "capacity,volume",
        JLPT: 2
    },
    {
        kanji: "幼稚",
        kana: "ようち",
        meaning: "infancy,childish,infantile",
        JLPT: 2
    },
    {
        kanji: "幼稚園",
        kana: "ようちえん",
        meaning: "kindergarten",
        JLPT: 2
    },
    {
        kanji: "用途",
        kana: "ようと",
        meaning: "use,usefulness",
        JLPT: 2
    },
    {
        kanji: "洋品店",
        kana: "ようひんてん",
        meaning: "shop which handles Western-style apparel and accessories",
        JLPT: 2
    },
    {
        kanji: "養分",
        kana: "ようぶん",
        meaning: "nourishment,nutrient",
        JLPT: 2
    },
    {
        kanji: "羊毛",
        kana: "ようもう",
        meaning: "wool",
        JLPT: 2
    },
    {
        kanji: "漸く",
        kana: "ようやく",
        meaning: "gradually,finally,hardly",
        JLPT: 2
    },
    {
        kanji: "要領",
        kana: "ようりょう",
        meaning: "point,gist,essentials,outline",
        JLPT: 2
    },
    {
        kanji: "欲張り",
        kana: "よくばり",
        meaning: "avarice,covetousness,greed",
        JLPT: 2
    },
    {
        kanji: "余計",
        kana: "よけい",
        meaning: "too much,unnecessary,abundance,surplus,excess,superfluity",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "よこす",
        meaning: "(1) to send,to forward,(2) to hand over (e.g. money)",
        JLPT: 2
    },
    {
        kanji: "汚す",
        kana: "よごす",
        meaning: "(1) to disgrace,to dishonour,(2) to pollute,to contaminate,to soil,to make dirty,to stain",
        JLPT: 2
    },
    {
        kanji: "寄せる",
        kana: "よせる",
        meaning: "to collect,to gather,to add,to put aside",
        JLPT: 2
    },
    {
        kanji: "余所",
        kana: "よそ",
        meaning: "another place,somewhere else,strange parts",
        JLPT: 2
    },
    {
        kanji: "四つ角",
        kana: "よつかど",
        meaning: "four corners,crossroads",
        JLPT: 2
    },
    {
        kanji: "酔っ払い",
        kana: "よっぱらい",
        meaning: "drunkard",
        JLPT: 2
    },
    {
        kanji: "予備",
        kana: "よび",
        meaning: "preparation,preliminaries,reserve,spare",
        JLPT: 2
    },
    {
        kanji: "呼び掛ける",
        kana: "よびかける",
        meaning: "to call out to,to accost,to address (crowd),to appeal",
        JLPT: 2
    },
    {
        kanji: "呼び出す",
        kana: "よびだす",
        meaning: "to summon,to call (e.g. phone)",
        JLPT: 2
    },
    {
        kanji: "蘇る",
        kana: "よみがえる",
        meaning: "to be resurrected,to be revived,to be resuscitated,to be rehabilitated",
        JLPT: 2
    },
    {
        kanji: "因る",
        kana: "よる",
        meaning: "to come from",
        JLPT: 2
    },
    {
        kanji: "慶び",
        kana: "よろこび",
        meaning: "(n) (a) joy,(a) delight,rapture,pleasure,gratification,rejoicing,congratulations,felicitations",
        JLPT: 2
    },
    {
        kanji: "慶ぶ",
        kana: "よろこぶ",
        meaning: "",
        JLPT: 2
    },
    {
        kanji: "来日",
        kana: "らいにち",
        meaning: "arrival in Japan,coming to Japan,visit to Japan",
        JLPT: 2
    },
    {
        kanji: "落第",
        kana: "らくだい",
        meaning: "failure,dropping out of a class",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ラッシュアワー",
        meaning: "rush hour",
        JLPT: 2
    },
    {
        kanji: "欄",
        kana: "らん",
        meaning: "column of text (e.g. as in a newspaper)",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ランチ",
        meaning: "launch,lunch",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ランニング",
        meaning: "(1) running,(2) tank top",
        JLPT: 2
    },
    {
        kanji: "乱暴",
        kana: "らんぼう",
        meaning: "rude,violent,rough,lawless,unreasonable,reckless",
        JLPT: 2
    },
    {
        kanji: "理科",
        kana: "りか",
        meaning: "science",
        JLPT: 2
    },
    {
        kanji: "利害",
        kana: "りがい",
        meaning: "advantages and disadvantages,interest",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "リズム",
        meaning: "rhythm",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "リットル",
        meaning: "litre",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "リボン",
        meaning: "ribbon",
        JLPT: 2
    },
    {
        kanji: "略す",
        kana: "りゃくす",
        meaning: "to abbreviate",
        JLPT: 2
    },
    {
        kanji: "流域",
        kana: "りゅういき",
        meaning: "(river) basin",
        JLPT: 2
    },
    {
        kanji: "寮",
        kana: "りょう",
        meaning: "hostel,dormitory",
        JLPT: 2
    },
    {
        kanji: "両側",
        kana: "りょうがわ",
        meaning: "both sides",
        JLPT: 2
    },
    {
        kanji: "漁師",
        kana: "りょうし",
        meaning: "fisherman",
        JLPT: 2
    },
    {
        kanji: "領事",
        kana: "りょうじ",
        meaning: "consul",
        JLPT: 2
    },
    {
        kanji: "領収",
        kana: "りょうしゅう",
        meaning: "receipt,voucher",
        JLPT: 2
    },
    {
        kanji: "臨時",
        kana: "りんじ",
        meaning: "temporary,special,extraordinary",
        JLPT: 2
    },
    {
        kanji: "留守番",
        kana: "るすばん",
        meaning: "care-taking,caretaker,house-watching",
        JLPT: 2
    },
    {
        kanji: "例外",
        kana: "れいがい",
        meaning: "exception",
        JLPT: 2
    },
    {
        kanji: "零点",
        kana: "れいてん",
        meaning: "zero,no marks",
        JLPT: 2
    },
    {
        kanji: "冷凍",
        kana: "れいとう",
        meaning: "freezing,cold storage,refrigeration",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "レインコート",
        meaning: "raincoat",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "レクリェーション",
        meaning: "recreation",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "レジャー",
        meaning: "leisure",
        JLPT: 2
    },
    {
        kanji: "列島",
        kana: "れっとう",
        meaning: "chain of islands",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "レベル",
        meaning: "level",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "リポート",
        meaning: "report,paper",
        JLPT: 2
    },
    {
        kanji: "煉瓦",
        kana: "れんが",
        meaning: "brick",
        JLPT: 2
    },
    {
        kanji: "連合",
        kana: "れんごう",
        meaning: "union,alliance",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "レンズ",
        meaning: "lens",
        JLPT: 2
    },
    {
        kanji: "蝋燭",
        kana: "ろうそく",
        meaning: "candle",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ローマじ",
        meaning: "romanization,Roman letters",
        JLPT: 2
    },
    {
        kanji: "録音",
        kana: "ろくおん",
        meaning: "(audio) recording",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ロッカー",
        meaning: "locker",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ロビー",
        meaning: "lobby",
        JLPT: 2
    },
    {
        kanji: "論ずる",
        kana: "ろんずる",
        meaning: "to argue,to discuss,to debate",
        JLPT: 2
    },
    {
        kanji: "和英",
        kana: "わえい",
        meaning: "Japanese-English",
        JLPT: 2
    },
    {
        kanji: "分る",
        kana: "わかる",
        meaning: "to be understood",
        JLPT: 2
    },
    {
        kanji: "分かれる",
        kana: "わかれる",
        meaning: "to branch off,to diverge from,to fork,to split,to dispense,to scatter,to divide into",
        JLPT: 2
    },
    {
        kanji: "若々しい",
        kana: "わかわかしい",
        meaning: "youthful,young",
        JLPT: 2
    },
    {
        kanji: "湧く",
        kana: "わく",
        meaning: "to boil,to grow hot,to get excited,to gush forth",
        JLPT: 2
    },
    {
        kanji: "詫びる",
        kana: "わびる",
        meaning: "to apologize",
        JLPT: 2
    },
    {
        kanji: "和服",
        kana: "わふく",
        meaning: "Japanese clothes",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "わりあいに",
        meaning: "comparatively",
        JLPT: 2
    },
    {
        kanji: "割算",
        kana: "わりざん",
        meaning: "division (math)",
        JLPT: 2
    },
    {
        kanji: "割と",
        kana: "わりと",
        meaning: "relatively, comparitively",
        JLPT: 2
    },
    {
        kanji: "割引",
        kana: "わりびき",
        meaning: "discount,reduction,rebate",
        JLPT: 2
    },
    {
        kanji: "椀",
        kana: "わん",
        meaning: "Japanese soup bowl,wooden bowl",
        JLPT: 2
    },
    {
        kanji: "碗",
        kana: "わん",
        meaning: "bowl",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "ワンピース",
        meaning: "one-piece dress",
        JLPT: 2
    },
    {
        kanji: "",
        kana: "あっ",
        meaning: "Ah!,Oh!",
        JLPT: 3
    },
    {
        kanji: "愛",
        kana: "あい",
        meaning: "love",
        JLPT: 3
    },
    {
        kanji: "挨拶",
        kana: "あいさつ",
        meaning: "greeting,salutation",
        JLPT: 3
    },
    {
        kanji: "愛情",
        kana: "あいじょう",
        meaning: "love,affection",
        JLPT: 3
    },
    {
        kanji: "合図",
        kana: "あいず",
        meaning: "sign,signal",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "アイスクリーム",
        meaning: "ice cream",
        JLPT: 3
    },
    {
        kanji: "愛する",
        kana: "あいする",
        meaning: "to love",
        JLPT: 3
    },
    {
        kanji: "相手",
        kana: "あいて",
        meaning: "companion,partner,company",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あいにく",
        meaning: "unfortunately,Sorry, but....",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "アイロン",
        meaning: "(electric) iron",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "アウト",
        meaning: "out",
        JLPT: 3
    },
    {
        kanji: "明かり",
        kana: "あかり",
        meaning: "lamplight,light (in general),brightness",
        JLPT: 3
    },
    {
        kanji: "空き",
        kana: "あき",
        meaning: "room,time to spare,emptiness",
        JLPT: 3
    },
    {
        kanji: "明らか",
        kana: "あきらか",
        meaning: "obvious,evident,clear",
        JLPT: 3
    },
    {
        kanji: "諦める",
        kana: "あきらめる",
        meaning: "to give up,to abandon",
        JLPT: 3
    },
    {
        kanji: "飽きる",
        kana: "あきる",
        meaning: "to get tired of,to lose interest in,to have enough",
        JLPT: 3
    },
    {
        kanji: "握手",
        kana: "あくしゅ",
        meaning: "handshake",
        JLPT: 3
    },
    {
        kanji: "悪魔",
        kana: "あくま",
        meaning: "devil,demon,evil spirit",
        JLPT: 3
    },
    {
        kanji: "明ける",
        kana: "あける",
        meaning: "to dawn,to become daylight",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あした",
        meaning: "tomorrow",
        JLPT: 3
    },
    {
        kanji: "預ける",
        kana: "あずける",
        meaning: "to give into custody,to entrust,to deposit",
        JLPT: 3
    },
    {
        kanji: "汗",
        kana: "あせ",
        meaning: "sweat,perspiration",
        JLPT: 3
    },
    {
        kanji: "与える",
        kana: "あたえる",
        meaning: "to give,to present,to award",
        JLPT: 3
    },
    {
        kanji: "暖かい",
        kana: "あたたか(い)",
        meaning: "warm,mild",
        JLPT: 3
    },
    {
        kanji: "辺り",
        kana: "あたり",
        meaning: "vicinity,nearby",
        JLPT: 3
    },
    {
        kanji: "当たる",
        kana: "あたる",
        meaning: "to be hit,to be successful,to be equivalent to",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あちこち",
        meaning: "here and there",
        JLPT: 3
    },
    {
        kanji: "扱う",
        kana: "あつかう",
        meaning: "to handle,to deal with,to treat",
        JLPT: 3
    },
    {
        kanji: "集まり",
        kana: "あつまり",
        meaning: "gathering,meeting,assembly,collection",
        JLPT: 3
    },
    {
        kanji: "当てる",
        kana: "あてる",
        meaning: "to hit,to apply a patch",
        JLPT: 3
    },
    {
        kanji: "跡",
        kana: "あと",
        meaning: "(1) trace,tracks,mark,sign,(2) remains,ruins,(3) scar",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あと",
        meaning: "(1) trace,tracks,(2) remains,ruins,(3) scar",
        JLPT: 3
    },
    {
        kanji: "穴",
        kana: "あな",
        meaning: "hole",
        JLPT: 3
    },
    {
        kanji: "浴びる",
        kana: "あびる",
        meaning: "to bathe,to bask in the sun,to shower",
        JLPT: 3
    },
    {
        kanji: "油",
        kana: "あぶら",
        meaning: "oil",
        JLPT: 3
    },
    {
        kanji: "余り",
        kana: "あまり",
        meaning: "not very (used as adverb),not much",
        JLPT: 3
    },
    {
        kanji: "誤り",
        kana: "あやまり",
        meaning: "error",
        JLPT: 3
    },
    {
        kanji: "粗",
        kana: "あら",
        meaning: "defect,flaw,blemish,weak point",
        JLPT: 3
    },
    {
        kanji: "嵐",
        kana: "あらし",
        meaning: "storm,tempest",
        JLPT: 3
    },
    {
        kanji: "新た",
        kana: "あらた",
        meaning: "new,fresh,novel",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あらゆる",
        meaning: "all,every",
        JLPT: 3
    },
    {
        kanji: "表す",
        kana: "あらわす",
        meaning: "to express,to show,to reveal",
        JLPT: 3
    },
    {
        kanji: "現す",
        kana: "あらわす",
        meaning: "to show,to indicate,to display",
        JLPT: 3
    },
    {
        kanji: "現れ",
        kana: "あらわれ",
        meaning: "embodiment,materialization",
        JLPT: 3
    },
    {
        kanji: "現れる",
        kana: "あらわれる",
        meaning: "(1) to appear,to come in sight,to become visible,(2) to express oneself",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ありがとう",
        meaning: "(conj,exp,int) Thank you",
        JLPT: 3
    },
    {
        kanji: "有る",
        kana: "ある",
        meaning: "to be,to have",
        JLPT: 3
    },
    {
        kanji: "或",
        kana: "ある",
        meaning: "a certain...,some...",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あるいは",
        meaning: "or,possibly",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "アルバム",
        meaning: "album",
        JLPT: 3
    },
    {
        kanji: "泡",
        kana: "あわ",
        meaning: "bubble,foam,froth,head on beer",
        JLPT: 3
    },
    {
        kanji: "合わせる",
        kana: "あわせる",
        meaning: "to join together,to be opposite,to face,to unite",
        JLPT: 3
    },
    {
        kanji: "哀れ",
        kana: "あわれ",
        meaning: "helpless,pity,sorrow,grief",
        JLPT: 3
    },
    {
        kanji: "案",
        kana: "あん",
        meaning: "plan,suffix meaning draft",
        JLPT: 3
    },
    {
        kanji: "暗記",
        kana: "あんき",
        meaning: "memorization,learning by heart",
        JLPT: 3
    },
    {
        kanji: "安定",
        kana: "あんてい",
        meaning: "stability,equilibrium",
        JLPT: 3
    },
    {
        kanji: "案内",
        kana: "あんない",
        meaning: "information,guidance,leading",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あんなに",
        meaning: "to that extent,to that degree",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あんまり",
        meaning: "not very,not much,remainder,rest",
        JLPT: 3
    },
    {
        kanji: "胃",
        kana: "い",
        meaning: "stomach",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いい",
        meaning: "good",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "よい",
        meaning: "good,nice,pleasant,ok",
        JLPT: 3
    },
    {
        kanji: "いえ",
        kana: "いえ",
        meaning: "TODO same as いいえ?",
        JLPT: 3
    },
    {
        kanji: "委員",
        kana: "いいん",
        meaning: "committee member",
        JLPT: 3
    },
    {
        kanji: "言う",
        kana: "ゆう",
        meaning: "to say",
        JLPT: 3
    },
    {
        kanji: "意外",
        kana: "いがい",
        meaning: "unexpected,surprising",
        JLPT: 3
    },
    {
        kanji: "行き",
        kana: "いき",
        meaning: "going",
        JLPT: 3
    },
    {
        kanji: "行き",
        kana: "ゆき",
        meaning: "going",
        JLPT: 3
    },
    {
        kanji: "息",
        kana: "いき",
        meaning: "breath,tone",
        JLPT: 3
    },
    {
        kanji: "勢い",
        kana: "いきおい",
        meaning: "force,vigor,energy,spirit",
        JLPT: 3
    },
    {
        kanji: "生き物",
        kana: "いきもの",
        meaning: "living thing,animal",
        JLPT: 3
    },
    {
        kanji: "幾つ",
        kana: "いくつ",
        meaning: "how many?,how old?",
        JLPT: 3
    },
    {
        kanji: "幾ら",
        kana: "いくら",
        meaning: "how much?,how many?",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いけない",
        meaning: "must not do,bad,wrong,not good",
        JLPT: 3
    },
    {
        kanji: "医師",
        kana: "いし",
        meaning: "doctor,physician",
        JLPT: 3
    },
    {
        kanji: "意思",
        kana: "いし",
        meaning: "intention,purpose",
        JLPT: 3
    },
    {
        kanji: "意志",
        kana: "いし",
        meaning: "will,volition",
        JLPT: 3
    },
    {
        kanji: "維持",
        kana: "いじ",
        meaning: "maintenance,preservation",
        JLPT: 3
    },
    {
        kanji: "意識",
        kana: "いしき",
        meaning: "consciousness,senses",
        JLPT: 3
    },
    {
        kanji: "異常",
        kana: "いじょう",
        meaning: "strangeness,abnormality,disorder",
        JLPT: 3
    },
    {
        kanji: "椅子",
        kana: "いす",
        meaning: "chair",
        JLPT: 3
    },
    {
        kanji: "泉",
        kana: "いずみ",
        meaning: "spring,fountain",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いずれ",
        meaning: "where,which,who",
        JLPT: 3
    },
    {
        kanji: "以前",
        kana: "いぜん",
        meaning: "ago,since,before,previous",
        JLPT: 3
    },
    {
        kanji: "板",
        kana: "いた",
        meaning: "board,plank",
        JLPT: 3
    },
    {
        kanji: "偉大",
        kana: "いだい",
        meaning: "greatness",
        JLPT: 3
    },
    {
        kanji: "抱く",
        kana: "いだく",
        meaning: "(sl) to embrace,to hug,to harbour,to entertain",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いたずら",
        meaning: "tease,prank,trick,practical joke",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いただきます",
        meaning: "expression of gratitude before meals",
        JLPT: 3
    },
    {
        kanji: "頂く",
        kana: "いただく",
        meaning: "to receive,to take food or drink (hum)",
        JLPT: 3
    },
    {
        kanji: "痛み",
        kana: "いたみ",
        meaning: "pain,ache,sore,grief,distress",
        JLPT: 3
    },
    {
        kanji: "至る",
        kana: "いたる",
        meaning: "to come,to arrive",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いち",
        meaning: "market,fair",
        JLPT: 3
    },
    {
        kanji: "位置",
        kana: "いち",
        meaning: "place,situation,position,location",
        JLPT: 3
    },
    {
        kanji: "一時",
        kana: "いちじ",
        meaning: "moment,time",
        JLPT: 3
    },
    {
        kanji: "一度に",
        kana: "いちどに",
        meaning: "all at once",
        JLPT: 3
    },
    {
        kanji: "市場",
        kana: "いちば",
        meaning: "(the) market (as a concept)",
        JLPT: 3
    },
    {
        kanji: "一番",
        kana: "いちばん",
        meaning: "best,first,number one",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いつか",
        meaning: "sometime,someday,one day",
        JLPT: 3
    },
    {
        kanji: "一家",
        kana: "いっか",
        meaning: "a house,a home,a family,a household",
        JLPT: 3
    },
    {
        kanji: "一種",
        kana: "いっしゅ",
        meaning: "a species,a kind,a variety",
        JLPT: 3
    },
    {
        kanji: "一瞬",
        kana: "いっしゅん",
        meaning: "a moment,an instant",
        JLPT: 3
    },
    {
        kanji: "一生",
        kana: "いっしょう",
        meaning: "whole life,a lifetime,all through life",
        JLPT: 3
    },
    {
        kanji: "一層",
        kana: "いっそう",
        meaning: "much more,still more,all the more",
        JLPT: 3
    },
    {
        kanji: "一体",
        kana: "いったい",
        meaning: "(1) one object,one body,(2) what on earth?,really?,(3) generally",
        JLPT: 3
    },
    {
        kanji: "一致",
        kana: "いっち",
        meaning: "(1) coincidence,agreement,(2) conformity",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いつでも",
        meaning: "(at) any time,always,at all times,never (neg)",
        JLPT: 3
    },
    {
        kanji: "一般",
        kana: "いっぱん",
        meaning: "general,liberal,universal,ordinary,average",
        JLPT: 3
    },
    {
        kanji: "一方",
        kana: "いっぽう",
        meaning: "(1) on the other hand,(2) meanwhile,(3) only,simple,in turn",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いつまでも",
        meaning: "forever,for good,eternally,as long as one likes,indefinitely",
        JLPT: 3
    },
    {
        kanji: "いつも",
        kana: "いつも",
        meaning: "always,usually,every time,never (with neg. verb)",
        JLPT: 3
    },
    {
        kanji: "移動",
        kana: "いどう",
        meaning: "removal,migration,movement",
        JLPT: 3
    },
    {
        kanji: "従兄弟",
        kana: "いとこ",
        meaning: "cousin (male)",
        JLPT: 3
    },
    {
        kanji: "稲",
        kana: "いね",
        meaning: "rice-plant",
        JLPT: 3
    },
    {
        kanji: "居眠り",
        kana: "いねむり",
        meaning: "dozing,nodding off",
        JLPT: 3
    },
    {
        kanji: "命",
        kana: "いのち",
        meaning: "command,decree,life,destiny",
        JLPT: 3
    },
    {
        kanji: "違反",
        kana: "いはん",
        meaning: "violation (of law),transgression,infringement,breach",
        JLPT: 3
    },
    {
        kanji: "衣服",
        kana: "いふく",
        meaning: "clothes",
        JLPT: 3
    },
    {
        kanji: "居間",
        kana: "いま",
        meaning: "living room (western style)",
        JLPT: 3
    },
    {
        kanji: "今に",
        kana: "いまに",
        meaning: "before long,even now",
        JLPT: 3
    },
    {
        kanji: "今にも",
        kana: "いまにも",
        meaning: "at any time,soon",
        JLPT: 3
    },
    {
        kanji: "否",
        kana: "いや",
        meaning: "no,the noes",
        JLPT: 3
    },
    {
        kanji: "以来",
        kana: "いらい",
        meaning: "since,henceforth",
        JLPT: 3
    },
    {
        kanji: "依頼",
        kana: "いらい",
        meaning: "(1) request,commission,dispatch,(2) dependence,trust",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いらいら",
        meaning: "getting nervous,irritation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いらっしゃい",
        meaning: "welcome",
        JLPT: 3
    },
    {
        kanji: "医療",
        kana: "いりょう",
        meaning: "medical care,medical treatment",
        JLPT: 3
    },
    {
        kanji: "岩",
        kana: "いわ",
        meaning: "rock,crag",
        JLPT: 3
    },
    {
        kanji: "祝い",
        kana: "いわい",
        meaning: "celebration,festival",
        JLPT: 3
    },
    {
        kanji: "祝う",
        kana: "いわう",
        meaning: "to congratulate,to celebrate",
        JLPT: 3
    },
    {
        kanji: "言わば",
        kana: "いわば",
        meaning: "so to speak",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "いわゆる",
        meaning: "the so-called,so to speak",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "インク",
        meaning: "ink",
        JLPT: 3
    },
    {
        kanji: "印刷",
        kana: "いんさつ",
        meaning: "printing",
        JLPT: 3
    },
    {
        kanji: "印象",
        kana: "いんしょう",
        meaning: "impression",
        JLPT: 3
    },
    {
        kanji: "引退",
        kana: "いんたい",
        meaning: "retire",
        JLPT: 3
    },
    {
        kanji: "引用",
        kana: "いんよう",
        meaning: "quotation,citation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ウイスキー",
        meaning: "whisky",
        JLPT: 3
    },
    {
        kanji: "上",
        kana: "うわ",
        meaning: "upper,outer,surface",
        JLPT: 3
    },
    {
        kanji: "魚",
        kana: "うお",
        meaning: "fish",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "うがい",
        meaning: "gargle,rinse mouth",
        JLPT: 3
    },
    {
        kanji: "伺う",
        kana: "うかがう",
        meaning: "(hon) to visit,to ask,to inquire",
        JLPT: 3
    },
    {
        kanji: "受け取る",
        kana: "うけとる",
        meaning: "to receive,to get,to accept,to take",
        JLPT: 3
    },
    {
        kanji: "動かす",
        kana: "うごかす",
        meaning: "to move,to shift",
        JLPT: 3
    },
    {
        kanji: "兎",
        kana: "うさぎ",
        meaning: "rabbit,hare,cony",
        JLPT: 3
    },
    {
        kanji: "牛",
        kana: "うし",
        meaning: "cattle,cow",
        JLPT: 3
    },
    {
        kanji: "失う",
        kana: "うしなう",
        meaning: "to lose,to part with",
        JLPT: 3
    },
    {
        kanji: "後",
        kana: "うしろ",
        meaning: "afterwards,since then,in the future",
        JLPT: 3
    },
    {
        kanji: "嘘",
        kana: "うそ",
        meaning: "lie,falsehood,incorrect fact,inappropriate",
        JLPT: 3
    },
    {
        kanji: "疑う",
        kana: "うたがう",
        meaning: "to doubt,to distrust,to be suspicious of,to suspect",
        JLPT: 3
    },
    {
        kanji: "内",
        kana: "うち",
        meaning: "inside",
        JLPT: 3
    },
    {
        kanji: "宇宙",
        kana: "うちゅう",
        meaning: "universe,cosmos,space",
        JLPT: 3
    },
    {
        kanji: "撃つ",
        kana: "うつ",
        meaning: "to attack,to defeat,to destroy",
        JLPT: 3
    },
    {
        kanji: "移す",
        kana: "うつす",
        meaning: "to remove,to transfer,to infect",
        JLPT: 3
    },
    {
        kanji: "訴える",
        kana: "うったえる",
        meaning: "to sue (a person),to resort to,to appeal to",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "うなる",
        meaning: "to groan,to moan",
        JLPT: 3
    },
    {
        kanji: "奪う",
        kana: "うばう",
        meaning: "to snatch away",
        JLPT: 3
    },
    {
        kanji: "馬",
        kana: "うま",
        meaning: "(1) horse,(2) promoted bishop (shogi)",
        JLPT: 3
    },
    {
        kanji: "上手い",
        kana: "うまい",
        meaning: "skillful; skilful; skilled; good",
        JLPT: 3
    },
    {
        kanji: "生まれ",
        kana: "うまれ",
        meaning: "birth,birth-place",
        JLPT: 3
    },
    {
        kanji: "梅",
        kana: "うめ",
        meaning: "plum,plum-tree,lowest (of a three-tier ranking system)",
        JLPT: 3
    },
    {
        kanji: "裏切る",
        kana: "うらぎる",
        meaning: "to betray,to turn traitor to,to double-cross",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "うるさい",
        meaning: "noisy,loud,fussy",
        JLPT: 3
    },
    {
        kanji: "嬉しい",
        kana: "うれしい",
        meaning: "happy,glad,pleasant",
        JLPT: 3
    },
    {
        kanji: "売れる",
        kana: "うれる",
        meaning: "to be sold",
        JLPT: 3
    },
    {
        kanji: "噂",
        kana: "うわさ",
        meaning: "rumour,report,gossip,common talk",
        JLPT: 3
    },
    {
        kanji: "運",
        kana: "うん",
        meaning: "fortune,luck",
        JLPT: 3
    },
    {
        kanji: "運転",
        kana: "うんてん",
        meaning: "operation,motion,driving",
        JLPT: 3
    },
    {
        kanji: "運動",
        kana: "うんどう",
        meaning: "motion,exercise",
        JLPT: 3
    },
    {
        kanji: "柄",
        kana: "え",
        meaning: "handle,grip",
        JLPT: 3
    },
    {
        kanji: "永遠",
        kana: "えいえん",
        meaning: "eternity,perpetuity,immortality,permanence",
        JLPT: 3
    },
    {
        kanji: "永久",
        kana: "えいきゅう",
        meaning: "eternity,perpetuity,immortality",
        JLPT: 3
    },
    {
        kanji: "影響",
        kana: "えいきょう",
        meaning: "influence,effect",
        JLPT: 3
    },
    {
        kanji: "営業",
        kana: "えいぎょう",
        meaning: "business,trade,management",
        JLPT: 3
    },
    {
        kanji: "衛星",
        kana: "えいせい",
        meaning: "satellite",
        JLPT: 3
    },
    {
        kanji: "栄養",
        kana: "えいよう",
        meaning: "nutrition,nourishment",
        JLPT: 3
    },
    {
        kanji: "笑顔",
        kana: "えがお",
        meaning: "smiling face",
        JLPT: 3
    },
    {
        kanji: "描く",
        kana: "えがく",
        meaning: "to draw,to paint,to sketch,to depict,to describe",
        JLPT: 3
    },
    {
        kanji: "餌",
        kana: "えさ",
        meaning: "feed,bait",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "エネルギー",
        meaning: "(n) energy (de: Energie)",
        JLPT: 3
    },
    {
        kanji: "得る",
        kana: "える",
        meaning: "to get,to gain,to win",
        JLPT: 3
    },
    {
        kanji: "得る",
        kana: "うる",
        meaning: "to get,to gain,to win",
        JLPT: 3
    },
    {
        kanji: "円",
        kana: "えん",
        meaning: "circle,money",
        JLPT: 3
    },
    {
        kanji: "延期",
        kana: "えんき",
        meaning: "postponement,adjournment",
        JLPT: 3
    },
    {
        kanji: "演技",
        kana: "えんぎ",
        meaning: "acting,performance",
        JLPT: 3
    },
    {
        kanji: "援助",
        kana: "えんじょ",
        meaning: "assistance,aid,support",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "エンジン",
        meaning: "engine",
        JLPT: 3
    },
    {
        kanji: "演説",
        kana: "えんぜつ",
        meaning: "speech,address",
        JLPT: 3
    },
    {
        kanji: "演奏",
        kana: "えんそう",
        meaning: "musical performance",
        JLPT: 3
    },
    {
        kanji: "遠慮",
        kana: "えんりょ",
        meaning: "diffidence,restraint,reserve",
        JLPT: 3
    },
    {
        kanji: "御",
        kana: "お",
        meaning: "honourable",
        JLPT: 3
    },
    {
        kanji: "老い",
        kana: "おい",
        meaning: "old age,old person,the old,the aged",
        JLPT: 3
    },
    {
        kanji: "追い付く",
        kana: "おいつく",
        meaning: "to overtake,to catch up (with)",
        JLPT: 3
    },
    {
        kanji: "王",
        kana: "おう",
        meaning: "king,ruler,sovereign,monarch",
        JLPT: 3
    },
    {
        kanji: "追う",
        kana: "おう",
        meaning: "to chase,to run after",
        JLPT: 3
    },
    {
        kanji: "王様",
        kana: "おうさま",
        meaning: "king",
        JLPT: 3
    },
    {
        kanji: "王子",
        kana: "おうじ",
        meaning: "prince",
        JLPT: 3
    },
    {
        kanji: "応じる",
        kana: "おうじる",
        meaning: "to respond,to satisfy,to accept,to comply with,to apply for",
        JLPT: 3
    },
    {
        kanji: "横断",
        kana: "おうだん",
        meaning: "crossing",
        JLPT: 3
    },
    {
        kanji: "終える",
        kana: "おえる",
        meaning: "to finish",
        JLPT: 3
    },
    {
        kanji: "大いに",
        kana: "おおいに",
        meaning: "very,much,greatly",
        JLPT: 3
    },
    {
        kanji: "覆う",
        kana: "おおう",
        meaning: "to cover,to hide,to conceal,to wrap,to disguise",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "オーバー",
        meaning: "(1) overcoat,(2) over",
        JLPT: 3
    },
    {
        kanji: "大家",
        kana: "おおや",
        meaning: "rich family,distinguished family",
        JLPT: 3
    },
    {
        kanji: "丘",
        kana: "おか",
        meaning: "hill,height,knoll,rising ground",
        JLPT: 3
    },
    {
        kanji: "沖",
        kana: "おき",
        meaning: "open sea",
        JLPT: 3
    },
    {
        kanji: "奥",
        kana: "おく",
        meaning: "interior,inner part",
        JLPT: 3
    },
    {
        kanji: "贈る",
        kana: "おくる",
        meaning: "to send,to give to,to award to,to confer on",
        JLPT: 3
    },
    {
        kanji: "起こる",
        kana: "おこる",
        meaning: "to occur,to happen",
        JLPT: 3
    },
    {
        kanji: "幼い",
        kana: "おさない",
        meaning: "very young,childish",
        JLPT: 3
    },
    {
        kanji: "収める",
        kana: "おさめる",
        meaning: "to obtain,to reap,to pay,to supply,to accept",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "おじいさん",
        meaning: "grandfather,male senior-citizen",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "おしゃべり",
        meaning: "chattering,talk,idle talk",
        JLPT: 3
    },
    {
        kanji: "汚染",
        kana: "おせん",
        meaning: "pollution,contamination",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "おそらく",
        meaning: "perhaps",
        JLPT: 3
    },
    {
        kanji: "恐れる",
        kana: "おそれる",
        meaning: "to fear,to be afraid of",
        JLPT: 3
    },
    {
        kanji: "恐ろしい",
        kana: "おそろしい",
        meaning: "terrible,dreadful",
        JLPT: 3
    },
    {
        kanji: "お互い",
        kana: "おたがい",
        meaning: "mutual,reciprocal,each other",
        JLPT: 3
    },
    {
        kanji: "穏やか",
        kana: "おだやか",
        meaning: "calm,gentle,quiet",
        JLPT: 3
    },
    {
        kanji: "男の人",
        kana: "おとこのひと",
        meaning: "man",
        JLPT: 3
    },
    {
        kanji: "劣る",
        kana: "おとる",
        meaning: "to fall behind,to be inferior to",
        JLPT: 3
    },
    {
        kanji: "お腹",
        kana: "おなか",
        meaning: "stomach",
        JLPT: 3
    },
    {
        kanji: "鬼",
        kana: "おに",
        meaning: "ogre,demon,it (i.e., in a game of tag)",
        JLPT: 3
    },
    {
        kanji: "帯",
        kana: "おび",
        meaning: "band (e.g. conduction, valence)",
        JLPT: 3
    },
    {
        kanji: "お昼",
        kana: "おひる",
        meaning: "lunch,noon",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "オフィス",
        meaning: "office",
        JLPT: 3
    },
    {
        kanji: "溺れる",
        kana: "おぼれる",
        meaning: "to be drowned,to indulge in",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "おまえ",
        meaning: "(fam) you (sing),presence (of a high personage)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "おめでとう",
        meaning: "Congratulations!,an auspicious occasion!",
        JLPT: 3
    },
    {
        kanji: "お目に掛かる",
        kana: "おめにかかる",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "思い出",
        kana: "おもいで",
        meaning: "memories,recollections,reminiscence",
        JLPT: 3
    },
    {
        kanji: "主に",
        kana: "おもに",
        meaning: "mainly,primarily",
        JLPT: 3
    },
    {
        kanji: "思わず",
        kana: "おもわず",
        meaning: "unintentional,spontaneous",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "おや",
        meaning: "parents",
        JLPT: 3
    },
    {
        kanji: "泳ぎ",
        kana: "およぎ",
        meaning: "swimming",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "およそ",
        meaning: "about,roughly,as a rule,approximately",
        JLPT: 3
    },
    {
        kanji: "及ぼす",
        kana: "およぼす",
        meaning: "to exert,to cause,to exercise",
        JLPT: 3
    },
    {
        kanji: "居る",
        kana: "おる",
        meaning: "to be (animate),to be,to exist",
        JLPT: 3
    },
    {
        kanji: "下す",
        kana: "おろす",
        meaning: "to lower,to let go down",
        JLPT: 3
    },
    {
        kanji: "降ろす",
        kana: "おろす",
        meaning: "to take down,to launch,to drop",
        JLPT: 3
    },
    {
        kanji: "終",
        kana: "おわり",
        meaning: "the end",
        JLPT: 3
    },
    {
        kanji: "音",
        kana: "おん",
        meaning: "sound,note",
        JLPT: 3
    },
    {
        kanji: "恩",
        kana: "おん",
        meaning: "favour,obligation,debt of gratitude",
        JLPT: 3
    },
    {
        kanji: "温暖",
        kana: "おんだん",
        meaning: "warmth",
        JLPT: 3
    },
    {
        kanji: "温度",
        kana: "おんど",
        meaning: "temperature",
        JLPT: 3
    },
    {
        kanji: "可",
        kana: "か",
        meaning: "passable",
        JLPT: 3
    },
    {
        kanji: "課",
        kana: "か",
        meaning: "counter for chapters (of a book)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "カー",
        meaning: "car",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "カード",
        meaning: "card,curd",
        JLPT: 3
    },
    {
        kanji: "会",
        kana: "かい",
        meaning: "meeting,assembly,party,association,club",
        JLPT: 3
    },
    {
        kanji: "回",
        kana: "かい",
        meaning: "counter for occurrences",
        JLPT: 3
    },
    {
        kanji: "害",
        kana: "がい",
        meaning: "injury,harm,evil influence,damage",
        JLPT: 3
    },
    {
        kanji: "会員",
        kana: "かいいん",
        meaning: "member,the membership",
        JLPT: 3
    },
    {
        kanji: "絵画",
        kana: "かいが",
        meaning: "picture",
        JLPT: 3
    },
    {
        kanji: "海外",
        kana: "かいがい",
        meaning: "foreign,abroad,overseas",
        JLPT: 3
    },
    {
        kanji: "会計",
        kana: "かいけい",
        meaning: "account,finance,accountant",
        JLPT: 3
    },
    {
        kanji: "解決",
        kana: "かいけつ",
        meaning: "settlement,solution,resolution",
        JLPT: 3
    },
    {
        kanji: "会合",
        kana: "かいごう",
        meaning: "meeting,assembly",
        JLPT: 3
    },
    {
        kanji: "外交",
        kana: "がいこう",
        meaning: "diplomacy",
        JLPT: 3
    },
    {
        kanji: "開始",
        kana: "かいし",
        meaning: "start,commencement,beginning",
        JLPT: 3
    },
    {
        kanji: "解釈",
        kana: "かいしゃく",
        meaning: "explanation,interpretation",
        JLPT: 3
    },
    {
        kanji: "外出",
        kana: "がいしゅつ",
        meaning: "outing,going out",
        JLPT: 3
    },
    {
        kanji: "改善",
        kana: "かいぜん",
        meaning: "betterment,improvement",
        JLPT: 3
    },
    {
        kanji: "快適",
        kana: "かいてき",
        meaning: "pleasant,agreeable,comfortable",
        JLPT: 3
    },
    {
        kanji: "回復",
        kana: "かいふく",
        meaning: "recovery (from illness),improvement,rehabilitation,restoration",
        JLPT: 3
    },
    {
        kanji: "飼う",
        kana: "かう",
        meaning: "to keep,to raise,to feed",
        JLPT: 3
    },
    {
        kanji: "替える",
        kana: "かえる",
        meaning: "to exchange,to interchange,to substitute,to replace",
        JLPT: 3
    },
    {
        kanji: "換える",
        kana: "かえる",
        meaning: "to exchange,to interchange,to substitute,to replace",
        JLPT: 3
    },
    {
        kanji: "香り",
        kana: "かおり",
        meaning: "aroma,fragrance,scent,smell",
        JLPT: 3
    },
    {
        kanji: "画家",
        kana: "がか",
        meaning: "painter,artist",
        JLPT: 3
    },
    {
        kanji: "抱える",
        kana: "かかえる",
        meaning: "to hold or carry under or in the arms",
        JLPT: 3
    },
    {
        kanji: "価格",
        kana: "かかく",
        meaning: "price,value,cost",
        JLPT: 3
    },
    {
        kanji: "化学",
        kana: "かがく",
        meaning: "chemistry",
        JLPT: 3
    },
    {
        kanji: "輝く",
        kana: "かがやく",
        meaning: "to shine,to glitter,to sparkle",
        JLPT: 3
    },
    {
        kanji: "係",
        kana: "かかり",
        meaning: "official,duty,person in charge",
        JLPT: 3
    },
    {
        kanji: "掛かる",
        kana: "かかる",
        meaning: "to take (e.g. time, money, etc),to hang",
        JLPT: 3
    },
    {
        kanji: "罹る",
        kana: "かかる",
        meaning: "to suffer from",
        JLPT: 3
    },
    {
        kanji: "鍵",
        kana: "かぎ",
        meaning: "key",
        JLPT: 3
    },
    {
        kanji: "限る",
        kana: "かぎる",
        meaning: "to restrict,to limit,to confine",
        JLPT: 3
    },
    {
        kanji: "描く",
        kana: "かく",
        meaning: "to draw,to paint,to sketch,to depict,to describe",
        JLPT: 3
    },
    {
        kanji: "家具",
        kana: "かぐ",
        meaning: "furniture",
        JLPT: 3
    },
    {
        kanji: "学",
        kana: "がく",
        meaning: "learning,scholarship,erudition,knowledge",
        JLPT: 3
    },
    {
        kanji: "額",
        kana: "がく",
        meaning: "forehead,brow",
        JLPT: 3
    },
    {
        kanji: "覚悟",
        kana: "かくご",
        meaning: "resolution,resignation,readiness,preparedness",
        JLPT: 3
    },
    {
        kanji: "確実",
        kana: "かくじつ",
        meaning: "certainty,reliability,soundness",
        JLPT: 3
    },
    {
        kanji: "学者",
        kana: "がくしゃ",
        meaning: "scholar",
        JLPT: 3
    },
    {
        kanji: "学習",
        kana: "がくしゅう",
        meaning: "study,learning",
        JLPT: 3
    },
    {
        kanji: "隠す",
        kana: "かくす",
        meaning: "to hide,to conceal",
        JLPT: 3
    },
    {
        kanji: "拡大",
        kana: "かくだい",
        meaning: "magnification,enlargement",
        JLPT: 3
    },
    {
        kanji: "確認",
        kana: "かくにん",
        meaning: "affirmation,confirmation",
        JLPT: 3
    },
    {
        kanji: "学問",
        kana: "がくもん",
        meaning: "scholarship,study,learning",
        JLPT: 3
    },
    {
        kanji: "隠れる",
        kana: "かくれる",
        meaning: "to hide,to be hidden,to conceal oneself,to disappear",
        JLPT: 3
    },
    {
        kanji: "影",
        kana: "かげ",
        meaning: "shade,shadow,other side",
        JLPT: 3
    },
    {
        kanji: "陰",
        kana: "かげ",
        meaning: "shade,shadow,other side",
        JLPT: 3
    },
    {
        kanji: "欠ける",
        kana: "かける",
        meaning: "to be lacking",
        JLPT: 3
    },
    {
        kanji: "加減",
        kana: "かげん",
        meaning: "addition and subtraction,allowance for",
        JLPT: 3
    },
    {
        kanji: "過去",
        kana: "かこ",
        meaning: "the past,bygone days,the previous",
        JLPT: 3
    },
    {
        kanji: "籠",
        kana: "かご",
        meaning: "basket,cage",
        JLPT: 3
    },
    {
        kanji: "囲む",
        kana: "かこむ",
        meaning: "to surround,to encircle",
        JLPT: 3
    },
    {
        kanji: "火災",
        kana: "かさい",
        meaning: "conflagration,fire",
        JLPT: 3
    },
    {
        kanji: "貸し",
        kana: "かし",
        meaning: "loan,lending",
        JLPT: 3
    },
    {
        kanji: "菓子",
        kana: "かし",
        meaning: "pastry",
        JLPT: 3
    },
    {
        kanji: "家事",
        kana: "かじ",
        meaning: "housework,domestic chores",
        JLPT: 3
    },
    {
        kanji: "賢い",
        kana: "かしこい",
        meaning: "wise,clever,smart",
        JLPT: 3
    },
    {
        kanji: "歌手",
        kana: "かしゅ",
        meaning: "singer",
        JLPT: 3
    },
    {
        kanji: "数",
        kana: "かず",
        meaning: "number,figure",
        JLPT: 3
    },
    {
        kanji: "稼ぐ",
        kana: "かせぐ",
        meaning: "to earn income,to labor",
        JLPT: 3
    },
    {
        kanji: "数える",
        kana: "かぞえる",
        meaning: "to count",
        JLPT: 3
    },
    {
        kanji: "型",
        kana: "かた",
        meaning: "mold,model,style,shape,data-type",
        JLPT: 3
    },
    {
        kanji: "肩",
        kana: "かた",
        meaning: "shoulder",
        JLPT: 3
    },
    {
        kanji: "硬い",
        kana: "かたい",
        meaning: "solid,hard (esp. metal, stone),unpolished writing",
        JLPT: 3
    },
    {
        kanji: "方々",
        kana: "かたがた",
        meaning: "persons,this and that,here and there,everywhere",
        JLPT: 3
    },
    {
        kanji: "刀",
        kana: "かたな",
        meaning: "sword,saber,knife,engraving tool",
        JLPT: 3
    },
    {
        kanji: "語る",
        kana: "かたる",
        meaning: "to talk,to tell,to recite",
        JLPT: 3
    },
    {
        kanji: "勝ち",
        kana: "かち",
        meaning: "win,victory",
        JLPT: 3
    },
    {
        kanji: "価値",
        kana: "かち",
        meaning: "value,worth,merit",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "がっかり",
        meaning: "feel disappointed,be dejected,lose heart",
        JLPT: 3
    },
    {
        kanji: "活気",
        kana: "かっき",
        meaning: "energy,liveliness",
        JLPT: 3
    },
    {
        kanji: "学期",
        kana: "がっき",
        meaning: "term (school)",
        JLPT: 3
    },
    {
        kanji: "格好",
        kana: "かっこう",
        meaning: "shape,form,posture,suitability",
        JLPT: 3
    },
    {
        kanji: "活動",
        kana: "かつどう",
        meaning: "action,activity",
        JLPT: 3
    },
    {
        kanji: "活用",
        kana: "かつよう",
        meaning: "conjugation,practical use",
        JLPT: 3
    },
    {
        kanji: "悲しむ",
        kana: "かなしむ",
        meaning: "to be sad,to mourn for,to regret",
        JLPT: 3
    },
    {
        kanji: "必ずしも",
        kana: "かならずしも",
        meaning: "(not) always,(not) necessarily,(not) all,(not) entirely",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "かなり",
        meaning: "considerably,fairly,quite",
        JLPT: 3
    },
    {
        kanji: "金",
        kana: "かね",
        meaning: "(1) gold,(2) gold general (shogi) (abbr)",
        JLPT: 3
    },
    {
        kanji: "金持ち",
        kana: "かねもち",
        meaning: "rich man",
        JLPT: 3
    },
    {
        kanji: "可能",
        kana: "かのう",
        meaning: "possible,practicable,feasible",
        JLPT: 3
    },
    {
        kanji: "株",
        kana: "かぶ",
        meaning: "share,stock,stump (of tree)",
        JLPT: 3
    },
    {
        kanji: "被る",
        kana: "かぶる",
        meaning: "to suffer",
        JLPT: 3
    },
    {
        kanji: "構う",
        kana: "かまう",
        meaning: "to mind,to care about,to be concerned about",
        JLPT: 3
    },
    {
        kanji: "我慢",
        kana: "がまん",
        meaning: "patience,endurance,perseverance",
        JLPT: 3
    },
    {
        kanji: "上",
        kana: "かみ",
        meaning: "(1) first volume,(2) superior quality,(3) governmental",
        JLPT: 3
    },
    {
        kanji: "神",
        kana: "かみ",
        meaning: "god",
        JLPT: 3
    },
    {
        kanji: "雷",
        kana: "かみなり",
        meaning: "thunder",
        JLPT: 3
    },
    {
        kanji: "髪の毛",
        kana: "かみのけ",
        meaning: "hair (head)",
        JLPT: 3
    },
    {
        kanji: "科目",
        kana: "かもく",
        meaning: "(school) subject,curriculum,course",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "かもしれない",
        meaning: "may,might,perhaps,may be,possibly",
        JLPT: 3
    },
    {
        kanji: "火曜",
        kana: "かよう",
        meaning: "(abbr) Tuesday",
        JLPT: 3
    },
    {
        kanji: "空",
        kana: "から",
        meaning: "sky",
        JLPT: 3
    },
    {
        kanji: "柄",
        kana: "がら",
        meaning: "hilt (of a sword),haft (of a dagger),handgrip",
        JLPT: 3
    },
    {
        kanji: "刈る",
        kana: "かる",
        meaning: "to cut (hair),to mow (grass),to harvest",
        JLPT: 3
    },
    {
        kanji: "彼等",
        kana: "かれら",
        meaning: "they (usually male)",
        JLPT: 3
    },
    {
        kanji: "川",
        kana: "かわ",
        meaning: "river",
        JLPT: 3
    },
    {
        kanji: "河",
        kana: "かわ",
        meaning: "river,stream",
        JLPT: 3
    },
    {
        kanji: "皮",
        kana: "かわ",
        meaning: "skin,hide,leather,fur,pelt,bark,shell",
        JLPT: 3
    },
    {
        kanji: "革",
        kana: "かわ",
        meaning: "leather",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "かわいそう",
        meaning: "poor,pitiable,pathetic",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "かわいらしい",
        meaning: "lovely,sweet",
        JLPT: 3
    },
    {
        kanji: "缶",
        kana: "かん",
        meaning: "can,tin",
        JLPT: 3
    },
    {
        kanji: "勘",
        kana: "かん",
        meaning: "perception,intuition,the sixth sense",
        JLPT: 3
    },
    {
        kanji: "考え",
        kana: "かんがえ",
        meaning: "thinking,thought,ideas,intention",
        JLPT: 3
    },
    {
        kanji: "感覚",
        kana: "かんかく",
        meaning: "sense,sensation",
        JLPT: 3
    },
    {
        kanji: "観客",
        kana: "かんきゃく",
        meaning: "audience,spectator(s)",
        JLPT: 3
    },
    {
        kanji: "環境",
        kana: "かんきょう",
        meaning: "environment,circumstance",
        JLPT: 3
    },
    {
        kanji: "歓迎",
        kana: "かんげい",
        meaning: "welcome,reception",
        JLPT: 3
    },
    {
        kanji: "観光",
        kana: "かんこう",
        meaning: "sightseeing",
        JLPT: 3
    },
    {
        kanji: "観察",
        kana: "かんさつ",
        meaning: "observation,survey",
        JLPT: 3
    },
    {
        kanji: "感じ",
        kana: "かんじ",
        meaning: "feeling,sense,impression",
        JLPT: 3
    },
    {
        kanji: "感謝",
        kana: "かんしゃ",
        meaning: "thanks,gratitude",
        JLPT: 3
    },
    {
        kanji: "患者",
        kana: "かんじゃ",
        meaning: "a patient",
        JLPT: 3
    },
    {
        kanji: "勘定",
        kana: "かんじょう",
        meaning: "calculation,counting,consideration",
        JLPT: 3
    },
    {
        kanji: "感情",
        kana: "かんじょう",
        meaning: "emotion(s),feeling(s),sentiment",
        JLPT: 3
    },
    {
        kanji: "感じる",
        kana: "かんじる",
        meaning: "to feel,to sense,to experience",
        JLPT: 3
    },
    {
        kanji: "感心",
        kana: "かんしん",
        meaning: "admiration,Well done!",
        JLPT: 3
    },
    {
        kanji: "関心",
        kana: "かんしん",
        meaning: "concern,interest",
        JLPT: 3
    },
    {
        kanji: "関する",
        kana: "かんする",
        meaning: "to concern,to be related",
        JLPT: 3
    },
    {
        kanji: "完成",
        kana: "かんせい",
        meaning: "(1) complete,completion,(2) perfection,accomplishment",
        JLPT: 3
    },
    {
        kanji: "完全",
        kana: "かんぜん",
        meaning: "perfection,completeness",
        JLPT: 3
    },
    {
        kanji: "感動",
        kana: "かんどう",
        meaning: "being deeply moved,excitement,impression,deep emotion",
        JLPT: 3
    },
    {
        kanji: "監督",
        kana: "かんとく",
        meaning: "supervision,control,superintendence",
        JLPT: 3
    },
    {
        kanji: "管理",
        kana: "かんり",
        meaning: "control,management (e.g. of a business)",
        JLPT: 3
    },
    {
        kanji: "完了",
        kana: "かんりょう",
        meaning: "completion,conclusion",
        JLPT: 3
    },
    {
        kanji: "関連",
        kana: "かんれん",
        meaning: "relation,connection,relevance",
        JLPT: 3
    },
    {
        kanji: "議員",
        kana: "ぎいん",
        meaning: "member of the Diet, congress or parliament",
        JLPT: 3
    },
    {
        kanji: "記憶",
        kana: "きおく",
        meaning: "memory,recollection,remembrance",
        JLPT: 3
    },
    {
        kanji: "気温",
        kana: "きおん",
        meaning: "temperature",
        JLPT: 3
    },
    {
        kanji: "機械",
        kana: "きかい",
        meaning: "machine,mechanism",
        JLPT: 3
    },
    {
        kanji: "議会",
        kana: "ぎかい",
        meaning: "Diet,congress,parliament",
        JLPT: 3
    },
    {
        kanji: "期間",
        kana: "きかん",
        meaning: "period,term",
        JLPT: 3
    },
    {
        kanji: "機関",
        kana: "きかん",
        meaning: "organ,mechanism,facility,engine",
        JLPT: 3
    },
    {
        kanji: "企業",
        kana: "きぎょう",
        meaning: "enterprise,undertaking",
        JLPT: 3
    },
    {
        kanji: "効く",
        kana: "きく",
        meaning: "to be effective",
        JLPT: 3
    },
    {
        kanji: "機嫌",
        kana: "きげん",
        meaning: "humour,temper,mood",
        JLPT: 3
    },
    {
        kanji: "気候",
        kana: "きこう",
        meaning: "climate",
        JLPT: 3
    },
    {
        kanji: "岸",
        kana: "きし",
        meaning: "bank,coast,shore",
        JLPT: 3
    },
    {
        kanji: "生地",
        kana: "きじ",
        meaning: "birthplace",
        JLPT: 3
    },
    {
        kanji: "記事",
        kana: "きじ",
        meaning: "article,news story,report,account",
        JLPT: 3
    },
    {
        kanji: "技師",
        kana: "ぎし",
        meaning: "engineer,technician",
        JLPT: 3
    },
    {
        kanji: "記者",
        kana: "きしゃ",
        meaning: "reporter",
        JLPT: 3
    },
    {
        kanji: "傷",
        kana: "きず",
        meaning: "wound,injury,hurt,cut",
        JLPT: 3
    },
    {
        kanji: "期待",
        kana: "きたい",
        meaning: "expectation,anticipation,hope",
        JLPT: 3
    },
    {
        kanji: "帰宅",
        kana: "きたく",
        meaning: "returning home",
        JLPT: 3
    },
    {
        kanji: "貴重",
        kana: "きちょう",
        meaning: "precious,valuable",
        JLPT: 3
    },
    {
        kanji: "議長",
        kana: "ぎちょう",
        meaning: "chairman",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "きちんと",
        meaning: "precisely,accurately",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "きつい",
        meaning: "tight,close,intense",
        JLPT: 3
    },
    {
        kanji: "気付く",
        kana: "きづく",
        meaning: "to notice,to recognize,to become aware of",
        JLPT: 3
    },
    {
        kanji: "気に入る",
        kana: "きにいる",
        meaning: "to be pleased with,to suit",
        JLPT: 3
    },
    {
        kanji: "記入",
        kana: "きにゅう",
        meaning: "entry,filling in of forms",
        JLPT: 3
    },
    {
        kanji: "記念",
        kana: "きねん",
        meaning: "commemoration,memory",
        JLPT: 3
    },
    {
        kanji: "機能",
        kana: "きのう",
        meaning: "function,faculty",
        JLPT: 3
    },
    {
        kanji: "気の毒",
        kana: "きのどく",
        meaning: "pitiful,a pity",
        JLPT: 3
    },
    {
        kanji: "寄付",
        kana: "きふ",
        meaning: "contribution,donation",
        JLPT: 3
    },
    {
        kanji: "希望",
        kana: "きぼう",
        meaning: "hope,wish,aspiration",
        JLPT: 3
    },
    {
        kanji: "基本",
        kana: "きほん",
        meaning: "foundation,basis,standard",
        JLPT: 3
    },
    {
        kanji: "決まり",
        kana: "きまり",
        meaning: "settlement,conclusion,regulation,rule",
        JLPT: 3
    },
    {
        kanji: "気味",
        kana: "きみ",
        meaning: "-like,-looking,-looked",
        JLPT: 3
    },
    {
        kanji: "奇妙",
        kana: "きみょう",
        meaning: "strange,queer,curious",
        JLPT: 3
    },
    {
        kanji: "義務",
        kana: "ぎむ",
        meaning: "duty,obligation,responsibility",
        JLPT: 3
    },
    {
        kanji: "疑問",
        kana: "ぎもん",
        meaning: "question,problem,doubt,guess",
        JLPT: 3
    },
    {
        kanji: "逆",
        kana: "ぎゃく",
        meaning: "reverse,opposite",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "キャプテン",
        meaning: "captain",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "キャンプ",
        meaning: "camp",
        JLPT: 3
    },
    {
        kanji: "九",
        kana: "きゅう",
        meaning: "nine",
        JLPT: 3
    },
    {
        kanji: "旧",
        kana: "きゅう",
        meaning: "ex-",
        JLPT: 3
    },
    {
        kanji: "級",
        kana: "きゅう",
        meaning: "class, grade, rank,school class, grade",
        JLPT: 3
    },
    {
        kanji: "球",
        kana: "きゅう",
        meaning: "globe,sphere,ball",
        JLPT: 3
    },
    {
        kanji: "休暇",
        kana: "きゅうか",
        meaning: "holiday,day off,furlough",
        JLPT: 3
    },
    {
        kanji: "休憩",
        kana: "きゅうけい",
        meaning: "rest,break,recess,intermission",
        JLPT: 3
    },
    {
        kanji: "急激",
        kana: "きゅうげき",
        meaning: "sudden,precipitous,radical",
        JLPT: 3
    },
    {
        kanji: "吸収",
        kana: "きゅうしゅう",
        meaning: "absorption,suction,attraction",
        JLPT: 3
    },
    {
        kanji: "救助",
        kana: "きゅうじょ",
        meaning: "relief,aid,rescue",
        JLPT: 3
    },
    {
        kanji: "急速",
        kana: "きゅうそく",
        meaning: "rapid (e.g. progress)",
        JLPT: 3
    },
    {
        kanji: "急に",
        kana: "きゅうに",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "給料",
        kana: "きゅうりょう",
        meaning: "salary,wages",
        JLPT: 3
    },
    {
        kanji: "器用",
        kana: "きよう",
        meaning: "skillful,handy",
        JLPT: 3
    },
    {
        kanji: "教科書",
        kana: "きょうかしょ",
        meaning: "text book",
        JLPT: 3
    },
    {
        kanji: "競技",
        kana: "きょうぎ",
        meaning: "game,match,contest",
        JLPT: 3
    },
    {
        kanji: "行儀",
        kana: "ぎょうぎ",
        meaning: "manners",
        JLPT: 3
    },
    {
        kanji: "供給",
        kana: "きょうきゅう",
        meaning: "supply,provision",
        JLPT: 3
    },
    {
        kanji: "教師",
        kana: "きょうし",
        meaning: "teacher (classroom)",
        JLPT: 3
    },
    {
        kanji: "教授",
        kana: "きょうじゅ",
        meaning: "teaching,instruction,professor",
        JLPT: 3
    },
    {
        kanji: "強調",
        kana: "きょうちょう",
        meaning: "emphasis,stress,stressed point",
        JLPT: 3
    },
    {
        kanji: "共通",
        kana: "きょうつう",
        meaning: "commonness,community",
        JLPT: 3
    },
    {
        kanji: "共同",
        kana: "きょうどう",
        meaning: "cooperation,association,collaboration,joint",
        JLPT: 3
    },
    {
        kanji: "恐怖",
        kana: "きょうふ",
        meaning: "be afraid,dread,dismay,terror",
        JLPT: 3
    },
    {
        kanji: "協力",
        kana: "きょうりょく",
        meaning: "cooperation,collaboration",
        JLPT: 3
    },
    {
        kanji: "強力",
        kana: "きょうりょく",
        meaning: "herculean strength,mountain carrier-guide",
        JLPT: 3
    },
    {
        kanji: "許可",
        kana: "きょか",
        meaning: "permission,approval",
        JLPT: 3
    },
    {
        kanji: "局",
        kana: "きょく",
        meaning: "court lady,lady in waiting",
        JLPT: 3
    },
    {
        kanji: "巨大",
        kana: "きょだい",
        meaning: "huge,gigantic,enormous",
        JLPT: 3
    },
    {
        kanji: "嫌う",
        kana: "きらう",
        meaning: "to hate,to dislike,to loathe",
        JLPT: 3
    },
    {
        kanji: "霧",
        kana: "きり",
        meaning: "fog,mist",
        JLPT: 3
    },
    {
        kanji: "切れ",
        kana: "きれ",
        meaning: "cloth,piece,cut,chop",
        JLPT: 3
    },
    {
        kanji: "切れる",
        kana: "きれる",
        meaning: "(1) to cut well,to be sharp,(2) to break (off)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "キロ",
        meaning: "(abbr) kilo-,kilogram,kilometre,10^3",
        JLPT: 3
    },
    {
        kanji: "記録",
        kana: "きろく",
        meaning: "record,minutes,document",
        JLPT: 3
    },
    {
        kanji: "議論",
        kana: "ぎろん",
        meaning: "argument,discussion,dispute",
        JLPT: 3
    },
    {
        kanji: "金",
        kana: "きん",
        meaning: "(1) gold,(2) gold general (shogi) (abbr)",
        JLPT: 3
    },
    {
        kanji: "銀",
        kana: "ぎん",
        meaning: "(1) silver,silver coin,silver paint",
        JLPT: 3
    },
    {
        kanji: "禁煙",
        kana: "きんえん",
        meaning: "No Smoking!",
        JLPT: 3
    },
    {
        kanji: "金額",
        kana: "きんがく",
        meaning: "amount of money",
        JLPT: 3
    },
    {
        kanji: "金庫",
        kana: "きんこ",
        meaning: "safe,vault,treasury,provider of funds",
        JLPT: 3
    },
    {
        kanji: "禁止",
        kana: "きんし",
        meaning: "prohibition,ban",
        JLPT: 3
    },
    {
        kanji: "金銭",
        kana: "きんせん",
        meaning: "money,cash",
        JLPT: 3
    },
    {
        kanji: "金属",
        kana: "きんぞく",
        meaning: "metal",
        JLPT: 3
    },
    {
        kanji: "近代",
        kana: "きんだい",
        meaning: "present day",
        JLPT: 3
    },
    {
        kanji: "緊張",
        kana: "きんちょう",
        meaning: "tension,mental strain,nervousness",
        JLPT: 3
    },
    {
        kanji: "筋肉",
        kana: "きんにく",
        meaning: "muscle,sinew",
        JLPT: 3
    },
    {
        kanji: "金融",
        kana: "きんゆう",
        meaning: "monetary circulation,credit situation",
        JLPT: 3
    },
    {
        kanji: "金曜",
        kana: "きんよう",
        meaning: "(abbr) Friday",
        JLPT: 3
    },
    {
        kanji: "九",
        kana: "く",
        meaning: "nine",
        JLPT: 3
    },
    {
        kanji: "句",
        kana: "く",
        meaning: "sentence",
        JLPT: 3
    },
    {
        kanji: "食う",
        kana: "くう",
        meaning: "(male) (vulg) to eat",
        JLPT: 3
    },
    {
        kanji: "偶然",
        kana: "ぐうぜん",
        meaning: "(by) chance,unexpectedly,suddenly",
        JLPT: 3
    },
    {
        kanji: "臭い",
        kana: "くさい",
        meaning: "odour,scent,smell,stench",
        JLPT: 3
    },
    {
        kanji: "鎖",
        kana: "くさり",
        meaning: "chain",
        JLPT: 3
    },
    {
        kanji: "腐る",
        kana: "くさる",
        meaning: "to rot,to go bad",
        JLPT: 3
    },
    {
        kanji: "癖",
        kana: "くせ",
        meaning: "a habit (often a bad habit),peculiarity",
        JLPT: 3
    },
    {
        kanji: "管",
        kana: "くだ",
        meaning: "pipe,tube",
        JLPT: 3
    },
    {
        kanji: "具体",
        kana: "ぐたい",
        meaning: "concrete,tangible,material",
        JLPT: 3
    },
    {
        kanji: "下さる",
        kana: "くださる",
        meaning: "(hon) to give,to confer",
        JLPT: 3
    },
    {
        kanji: "下り",
        kana: "くだり",
        meaning: "down-train (going away from Tokyo)",
        JLPT: 3
    },
    {
        kanji: "苦痛",
        kana: "くつう",
        meaning: "pain,agony",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ぐっすり",
        meaning: "sound asleep,fast asleep",
        JLPT: 3
    },
    {
        kanji: "区別",
        kana: "くべつ",
        meaning: "distinction,differentiation,classification",
        JLPT: 3
    },
    {
        kanji: "組",
        kana: "くみ",
        meaning: "class,group,team,set",
        JLPT: 3
    },
    {
        kanji: "組合",
        kana: "くみあい",
        meaning: "association,union",
        JLPT: 3
    },
    {
        kanji: "組む",
        kana: "くむ",
        meaning: "to put together",
        JLPT: 3
    },
    {
        kanji: "曇",
        kana: "くもり",
        meaning: "cloudiness,cloudy weather,shadow",
        JLPT: 3
    },
    {
        kanji: "位",
        kana: "くらい",
        meaning: "grade,rank,about",
        JLPT: 3
    },
    {
        kanji: "暮らし",
        kana: "くらし",
        meaning: "living,livelihood,subsistence,circumstances",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "クラシック",
        meaning: "classic(s)",
        JLPT: 3
    },
    {
        kanji: "暮らす",
        kana: "くらす",
        meaning: "to live,to get along",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "グラス",
        meaning: "(1) glass,(2) grass",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "グランド",
        meaning: "gland,grand,(electrical) ground",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "クリーム",
        meaning: "cream",
        JLPT: 3
    },
    {
        kanji: "繰り返す",
        kana: "くりかえす",
        meaning: "to repeat,to do something over again",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "クリスマス",
        meaning: "Christmas",
        JLPT: 3
    },
    {
        kanji: "狂う",
        kana: "くるう",
        meaning: "to go mad,to get out of order",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "グループ",
        meaning: "group",
        JLPT: 3
    },
    {
        kanji: "苦しい",
        kana: "くるしい",
        meaning: "painful,difficult",
        JLPT: 3
    },
    {
        kanji: "苦しむ",
        kana: "くるしむ",
        meaning: "to suffer,to groan,to be worried",
        JLPT: 3
    },
    {
        kanji: "暮れ",
        kana: "くれ",
        meaning: "year end,sunset,nightfall,end",
        JLPT: 3
    },
    {
        kanji: "苦労",
        kana: "くろう",
        meaning: "troubles,hardships",
        JLPT: 3
    },
    {
        kanji: "加える",
        kana: "くわえる",
        meaning: "to append,to sum up,to add (up)",
        JLPT: 3
    },
    {
        kanji: "詳しい",
        kana: "くわしい",
        meaning: "knowing very well,detailed,full,accurate",
        JLPT: 3
    },
    {
        kanji: "加わる",
        kana: "くわわる",
        meaning: "to join in,to accede to,to increase,to gain in (influence)",
        JLPT: 3
    },
    {
        kanji: "訓",
        kana: "くん",
        meaning: "native Japanese reading of a Chinese character",
        JLPT: 3
    },
    {
        kanji: "軍",
        kana: "ぐん",
        meaning: "army,force,troops",
        JLPT: 3
    },
    {
        kanji: "軍隊",
        kana: "ぐんたい",
        meaning: "army,troops",
        JLPT: 3
    },
    {
        kanji: "訓練",
        kana: "くんれん",
        meaning: "practice,training",
        JLPT: 3
    },
    {
        kanji: "下",
        kana: "げ",
        meaning: "under,below,beneath",
        JLPT: 3
    },
    {
        kanji: "計",
        kana: "けい",
        meaning: "plan",
        JLPT: 3
    },
    {
        kanji: "敬意",
        kana: "けいい",
        meaning: "respect,honour",
        JLPT: 3
    },
    {
        kanji: "経営",
        kana: "けいえい",
        meaning: "management,administration",
        JLPT: 3
    },
    {
        kanji: "計画",
        kana: "けいかく",
        meaning: "plan,project,schedule,scheme,program",
        JLPT: 3
    },
    {
        kanji: "景気",
        kana: "けいき",
        meaning: "condition,state,business (condition)",
        JLPT: 3
    },
    {
        kanji: "経験",
        kana: "けいけん",
        meaning: "experience",
        JLPT: 3
    },
    {
        kanji: "傾向",
        kana: "けいこう",
        meaning: "tendency,trend,inclination",
        JLPT: 3
    },
    {
        kanji: "警告",
        kana: "けいこく",
        meaning: "warning,advice",
        JLPT: 3
    },
    {
        kanji: "計算",
        kana: "けいさん",
        meaning: "calculation,reckoning",
        JLPT: 3
    },
    {
        kanji: "掲示",
        kana: "けいじ",
        meaning: "notice,bulletin",
        JLPT: 3
    },
    {
        kanji: "刑事",
        kana: "けいじ",
        meaning: "criminal case,(police) detective",
        JLPT: 3
    },
    {
        kanji: "芸術",
        kana: "げいじゅつ",
        meaning: "(fine) art,the arts",
        JLPT: 3
    },
    {
        kanji: "契約",
        kana: "けいやく",
        meaning: "contract,compact,agreement",
        JLPT: 3
    },
    {
        kanji: "経由",
        kana: "けいゆ",
        meaning: "go by the way,via",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ケース",
        meaning: "case",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ゲーム",
        meaning: "game",
        JLPT: 3
    },
    {
        kanji: "怪我",
        kana: "けが",
        meaning: "injury (to animate object),hurt",
        JLPT: 3
    },
    {
        kanji: "劇",
        kana: "げき",
        meaning: "drama,play",
        JLPT: 3
    },
    {
        kanji: "劇場",
        kana: "げきじょう",
        meaning: "theatre,playhouse",
        JLPT: 3
    },
    {
        kanji: "化粧",
        kana: "けしょう",
        meaning: "make-up (cosmetic)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "けち",
        meaning: "stinginess,miser,miserliness",
        JLPT: 3
    },
    {
        kanji: "結果",
        kana: "けっか",
        meaning: "result,consequence",
        JLPT: 3
    },
    {
        kanji: "欠陥",
        kana: "けっかん",
        meaning: "defect,fault,deficiency",
        JLPT: 3
    },
    {
        kanji: "結局",
        kana: "けっきょく",
        meaning: "after all,eventually",
        JLPT: 3
    },
    {
        kanji: "決心",
        kana: "けっしん",
        meaning: "determination,resolution",
        JLPT: 3
    },
    {
        kanji: "欠席",
        kana: "けっせき",
        meaning: "absence,non-attendance",
        JLPT: 3
    },
    {
        kanji: "決定",
        kana: "けってい",
        meaning: "decision,determination",
        JLPT: 3
    },
    {
        kanji: "欠点",
        kana: "けってん",
        meaning: "faults,defect,weakness",
        JLPT: 3
    },
    {
        kanji: "月曜",
        kana: "げつよう",
        meaning: "Monday",
        JLPT: 3
    },
    {
        kanji: "結論",
        kana: "けつろん",
        meaning: "conclusion",
        JLPT: 3
    },
    {
        kanji: "煙",
        kana: "けむり",
        meaning: "smoke,fumes",
        JLPT: 3
    },
    {
        kanji: "券",
        kana: "けん",
        meaning: "ticket,coupon,bond,certificate",
        JLPT: 3
    },
    {
        kanji: "県",
        kana: "けん",
        meaning: "prefecture",
        JLPT: 3
    },
    {
        kanji: "軒",
        kana: "けん",
        meaning: "eaves",
        JLPT: 3
    },
    {
        kanji: "喧嘩",
        kana: "けんか",
        meaning: "quarrel,(drunken) brawl,failure",
        JLPT: 3
    },
    {
        kanji: "見解",
        kana: "けんかい",
        meaning: "opinion,point of view",
        JLPT: 3
    },
    {
        kanji: "限界",
        kana: "げんかい",
        meaning: "limit,bound",
        JLPT: 3
    },
    {
        kanji: "現金",
        kana: "げんきん",
        meaning: "cash,ready money,mercenary,self-interested",
        JLPT: 3
    },
    {
        kanji: "言語",
        kana: "げんご",
        meaning: "language",
        JLPT: 3
    },
    {
        kanji: "健康",
        kana: "けんこう",
        meaning: "health,sound,wholesome",
        JLPT: 3
    },
    {
        kanji: "検査",
        kana: "けんさ",
        meaning: "inspection (e.g. customs, factory),examination",
        JLPT: 3
    },
    {
        kanji: "現在",
        kana: "げんざい",
        meaning: "present,up to now,nowadays,modern times,current",
        JLPT: 3
    },
    {
        kanji: "現実",
        kana: "げんじつ",
        meaning: "reality",
        JLPT: 3
    },
    {
        kanji: "現象",
        kana: "げんしょう",
        meaning: "phenomenon",
        JLPT: 3
    },
    {
        kanji: "現状",
        kana: "げんじょう",
        meaning: "present condition,existing state,status quo",
        JLPT: 3
    },
    {
        kanji: "建設",
        kana: "けんせつ",
        meaning: "construction,establishment",
        JLPT: 3
    },
    {
        kanji: "現代",
        kana: "げんだい",
        meaning: "nowadays,modern times,present-day",
        JLPT: 3
    },
    {
        kanji: "建築",
        kana: "けんちく",
        meaning: "construction,architecture",
        JLPT: 3
    },
    {
        kanji: "見当",
        kana: "けんとう",
        meaning: "be found,aim,estimate,guess,approx",
        JLPT: 3
    },
    {
        kanji: "検討",
        kana: "けんとう",
        meaning: "consideration,examination,investigation,study,scrutiny",
        JLPT: 3
    },
    {
        kanji: "現場",
        kana: "げんば",
        meaning: "actual spot,scene,scene of the crime",
        JLPT: 3
    },
    {
        kanji: "憲法",
        kana: "けんぽう",
        meaning: "constitution",
        JLPT: 3
    },
    {
        kanji: "権利",
        kana: "けんり",
        meaning: "right,privilege",
        JLPT: 3
    },
    {
        kanji: "後",
        kana: "ご",
        meaning: "afterwards,since then,in the future",
        JLPT: 3
    },
    {
        kanji: "語",
        kana: "ご",
        meaning: "language,word",
        JLPT: 3
    },
    {
        kanji: "恋",
        kana: "こい",
        meaning: "love,tender passion",
        JLPT: 3
    },
    {
        kanji: "濃い",
        kana: "こい",
        meaning: "thick (as of color, liquid),dense,strong",
        JLPT: 3
    },
    {
        kanji: "恋人",
        kana: "こいびと",
        meaning: "lover,sweetheart",
        JLPT: 3
    },
    {
        kanji: "幸運",
        kana: "こううん",
        meaning: "good luck,fortune",
        JLPT: 3
    },
    {
        kanji: "講演",
        kana: "こうえん",
        meaning: "lecture,address",
        JLPT: 3
    },
    {
        kanji: "効果",
        kana: "こうか",
        meaning: "effect,effectiveness,efficacy,result",
        JLPT: 3
    },
    {
        kanji: "硬貨",
        kana: "こうか",
        meaning: "coin",
        JLPT: 3
    },
    {
        kanji: "高価",
        kana: "こうか",
        meaning: "high price",
        JLPT: 3
    },
    {
        kanji: "豪華",
        kana: "ごうか",
        meaning: "wonderful,gorgeous,splendor,pomp,extravagance",
        JLPT: 3
    },
    {
        kanji: "合格",
        kana: "ごうかく",
        meaning: "success,passing (e.g. exam),eligibility",
        JLPT: 3
    },
    {
        kanji: "交換",
        kana: "こうかん",
        meaning: "exchange,interchange,reciprocity",
        JLPT: 3
    },
    {
        kanji: "航空",
        kana: "こうくう",
        meaning: "aviation,flying",
        JLPT: 3
    },
    {
        kanji: "光景",
        kana: "こうけい",
        meaning: "scene,spectacle",
        JLPT: 3
    },
    {
        kanji: "合計",
        kana: "ごうけい",
        meaning: "sum total,total amount",
        JLPT: 3
    },
    {
        kanji: "攻撃",
        kana: "こうげき",
        meaning: "attack,strike,offensive,criticism,censure",
        JLPT: 3
    },
    {
        kanji: "貢献",
        kana: "こうけん",
        meaning: "contribution,services",
        JLPT: 3
    },
    {
        kanji: "広告",
        kana: "こうこく",
        meaning: "advertisement",
        JLPT: 3
    },
    {
        kanji: "交際",
        kana: "こうさい",
        meaning: "company,friendship,association,society,acquaintance",
        JLPT: 3
    },
    {
        kanji: "後者",
        kana: "こうしゃ",
        meaning: "the latter",
        JLPT: 3
    },
    {
        kanji: "工場",
        kana: "こうば",
        meaning: "factory,plant,mill,workshop",
        JLPT: 3
    },
    {
        kanji: "構成",
        kana: "こうせい",
        meaning: "organization,composition",
        JLPT: 3
    },
    {
        kanji: "高速",
        kana: "こうそく",
        meaning: "high speed,high gear",
        JLPT: 3
    },
    {
        kanji: "行動",
        kana: "こうどう",
        meaning: "action,conduct,behaviour,mobilization",
        JLPT: 3
    },
    {
        kanji: "強盗",
        kana: "ごうとう",
        meaning: "robbery,burglary",
        JLPT: 3
    },
    {
        kanji: "幸福",
        kana: "こうふく",
        meaning: "happiness,blessedness",
        JLPT: 3
    },
    {
        kanji: "公平",
        kana: "こうへい",
        meaning: "fairness,impartial,justice",
        JLPT: 3
    },
    {
        kanji: "候補",
        kana: "こうほ",
        meaning: "candidacy",
        JLPT: 3
    },
    {
        kanji: "考慮",
        kana: "こうりょ",
        meaning: "consideration,taking into account",
        JLPT: 3
    },
    {
        kanji: "越える",
        kana: "こえる",
        meaning: "to exceed,to cross over,to cross",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "コーチ",
        meaning: "coach",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "コード",
        meaning: "code,cord,chord",
        JLPT: 3
    },
    {
        kanji: "氷",
        kana: "こおり",
        meaning: "ice,hail",
        JLPT: 3
    },
    {
        kanji: "凍る",
        kana: "こおる",
        meaning: "to freeze,to be frozen over,to congeal",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ゴール",
        meaning: "goal",
        JLPT: 3
    },
    {
        kanji: "誤解",
        kana: "ごかい",
        meaning: "misunderstanding",
        JLPT: 3
    },
    {
        kanji: "語学",
        kana: "ごがく",
        meaning: "language study",
        JLPT: 3
    },
    {
        kanji: "呼吸",
        kana: "こきゅう",
        meaning: "breath,respiration",
        JLPT: 3
    },
    {
        kanji: "故郷",
        kana: "こきょう",
        meaning: "home town,birthplace,old village,historic village",
        JLPT: 3
    },
    {
        kanji: "極",
        kana: "ごく",
        meaning: "quite,very",
        JLPT: 3
    },
    {
        kanji: "国語",
        kana: "こくご",
        meaning: "national language",
        JLPT: 3
    },
    {
        kanji: "黒板",
        kana: "こくばん",
        meaning: "blackboard",
        JLPT: 3
    },
    {
        kanji: "克服",
        kana: "こくふく",
        meaning: "subjugation,conquest",
        JLPT: 3
    },
    {
        kanji: "国民",
        kana: "こくみん",
        meaning: "national,people,citizen",
        JLPT: 3
    },
    {
        kanji: "穀物",
        kana: "こくもつ",
        meaning: "grain,cereal,corn",
        JLPT: 3
    },
    {
        kanji: "ここ",
        kana: "ここ",
        meaning: "here",
        JLPT: 3
    },
    {
        kanji: "腰",
        kana: "こし",
        meaning: "hip",
        JLPT: 3
    },
    {
        kanji: "故障",
        kana: "こしょう",
        meaning: "break-down,failure,accident,out of order",
        JLPT: 3
    },
    {
        kanji: "個人",
        kana: "こじん",
        meaning: "individual,private person,personal,private",
        JLPT: 3
    },
    {
        kanji: "越す",
        kana: "こす",
        meaning: "to go over (e.g. with audience)",
        JLPT: 3
    },
    {
        kanji: "国家",
        kana: "こっか",
        meaning: "state,country,nation",
        JLPT: 3
    },
    {
        kanji: "国会",
        kana: "こっかい",
        meaning: "National Diet,parliament,congress",
        JLPT: 3
    },
    {
        kanji: "国境",
        kana: "こっきょう",
        meaning: "national or state border",
        JLPT: 3
    },
    {
        kanji: "骨折",
        kana: "こっせつ",
        meaning: "bone fracture",
        JLPT: 3
    },
    {
        kanji: "小包",
        kana: "こづつみ",
        meaning: "parcel,package",
        JLPT: 3
    },
    {
        kanji: "事",
        kana: "こと",
        meaning: "thing,matter,fact,circumstances",
        JLPT: 3
    },
    {
        kanji: "異なる",
        kana: "ことなる",
        meaning: "to differ,to vary,to disagree",
        JLPT: 3
    },
    {
        kanji: "諺",
        kana: "ことわざ",
        meaning: "proverb,maxim",
        JLPT: 3
    },
    {
        kanji: "断る",
        kana: "ことわる",
        meaning: "to refuse,to decline,to dismiss",
        JLPT: 3
    },
    {
        kanji: "粉",
        kana: "こな",
        meaning: "flour,meal,powder",
        JLPT: 3
    },
    {
        kanji: "この",
        kana: "この",
        meaning: "this",
        JLPT: 3
    },
    {
        kanji: "好み",
        kana: "このみ",
        meaning: "liking,taste,choice",
        JLPT: 3
    },
    {
        kanji: "好む",
        kana: "このむ",
        meaning: "to like,to prefer",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "コピー",
        meaning: "(1) a (photo)copy,(2) blurb on a book jacket",
        JLPT: 3
    },
    {
        kanji: "塵",
        kana: "ごみ",
        meaning: "dust,dirt",
        JLPT: 3
    },
    {
        kanji: "小麦",
        kana: "こむぎ",
        meaning: "wheat",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ごめんなさい",
        meaning: "I beg your pardon,excuse me",
        JLPT: 3
    },
    {
        kanji: "小屋",
        kana: "こや",
        meaning: "hut,cabin,shed,(animal) pen",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "これら",
        meaning: "these",
        JLPT: 3
    },
    {
        kanji: "頃",
        kana: "ころ",
        meaning: "time,about,toward,approximately (time)",
        JLPT: 3
    },
    {
        kanji: "殺す",
        kana: "ころす",
        meaning: "to kill",
        JLPT: 3
    },
    {
        kanji: "転ぶ",
        kana: "ころぶ",
        meaning: "to fall down,to fall over",
        JLPT: 3
    },
    {
        kanji: "今回",
        kana: "こんかい",
        meaning: "now,this time,lately",
        JLPT: 3
    },
    {
        kanji: "今後",
        kana: "こんご",
        meaning: "from now on,hereafter",
        JLPT: 3
    },
    {
        kanji: "混雑",
        kana: "こんざつ",
        meaning: "confusion,congestion",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "こんなに",
        meaning: "so,like this,in this way",
        JLPT: 3
    },
    {
        kanji: "困難",
        kana: "こんなん",
        meaning: "difficulty,distress",
        JLPT: 3
    },
    {
        kanji: "今日",
        kana: "こんにち",
        meaning: "today,this day",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "こんにちは",
        meaning: "hello,good day (daytime greeting, id)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "コンピューター",
        meaning: "computer",
        JLPT: 3
    },
    {
        kanji: "婚約",
        kana: "こんやく",
        meaning: "engagement,betrothal",
        JLPT: 3
    },
    {
        kanji: "混乱",
        kana: "こんらん",
        meaning: "disorder,chaos,confusion,mayhem",
        JLPT: 3
    },
    {
        kanji: "差",
        kana: "さ",
        meaning: "difference,variation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "サービス",
        meaning: "(1) service,support system,(2) goods or services without charge",
        JLPT: 3
    },
    {
        kanji: "際",
        kana: "さい",
        meaning: "on the occasion of,circumstances",
        JLPT: 3
    },
    {
        kanji: "最高",
        kana: "さいこう",
        meaning: "highest,supreme,the most",
        JLPT: 3
    },
    {
        kanji: "財産",
        kana: "ざいさん",
        meaning: "property,fortune,assets",
        JLPT: 3
    },
    {
        kanji: "最終",
        kana: "さいしゅう",
        meaning: "last,final,closing",
        JLPT: 3
    },
    {
        kanji: "最中",
        kana: "さいちゅう",
        meaning: "in the middle of",
        JLPT: 3
    },
    {
        kanji: "最低",
        kana: "さいてい",
        meaning: "least,lowest,worst",
        JLPT: 3
    },
    {
        kanji: "才能",
        kana: "さいのう",
        meaning: "talent,ability",
        JLPT: 3
    },
    {
        kanji: "裁判",
        kana: "さいばん",
        meaning: "trial,judgement",
        JLPT: 3
    },
    {
        kanji: "材料",
        kana: "ざいりょう",
        meaning: "ingredients,material",
        JLPT: 3
    },
    {
        kanji: "幸い",
        kana: "さいわい",
        meaning: "happiness,blessedness",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "サイン",
        meaning: "(1) autograph,(2) sign,(3) sine",
        JLPT: 3
    },
    {
        kanji: "境",
        kana: "さかい",
        meaning: "border,boundary,mental state",
        JLPT: 3
    },
    {
        kanji: "逆らう",
        kana: "さからう",
        meaning: "to go against,to oppose,to disobey,to defy",
        JLPT: 3
    },
    {
        kanji: "盛り",
        kana: "さかり",
        meaning: "helping,serving",
        JLPT: 3
    },
    {
        kanji: "作業",
        kana: "さぎょう",
        meaning: "work,operation,manufacturing,fatigue duty",
        JLPT: 3
    },
    {
        kanji: "昨",
        kana: "さく",
        meaning: "last (year),yesterday",
        JLPT: 3
    },
    {
        kanji: "作品",
        kana: "さくひん",
        meaning: "work,opus,performance,production",
        JLPT: 3
    },
    {
        kanji: "作物",
        kana: "さくもつ",
        meaning: "produce (e.g. agricultural),crops",
        JLPT: 3
    },
    {
        kanji: "桜",
        kana: "さくら",
        meaning: "cherry blossom,cherry tree",
        JLPT: 3
    },
    {
        kanji: "酒",
        kana: "さけ",
        meaning: "alcohol,sake",
        JLPT: 3
    },
    {
        kanji: "叫ぶ",
        kana: "さけぶ",
        meaning: "to shout,to cry",
        JLPT: 3
    },
    {
        kanji: "避ける",
        kana: "さける",
        meaning: "(1) to avoid (physical contact ),(2) to ward off,to avert",
        JLPT: 3
    },
    {
        kanji: "支える",
        kana: "ささえる",
        meaning: "to be blocked,to choke,to be obstructed",
        JLPT: 3
    },
    {
        kanji: "指す",
        kana: "さす",
        meaning: "to point,to put up umbrella,to play",
        JLPT: 3
    },
    {
        kanji: "座席",
        kana: "ざせき",
        meaning: "seat",
        JLPT: 3
    },
    {
        kanji: "誘う",
        kana: "さそう",
        meaning: "(1) to invite,to ask,(2) to tempt,to lure,to induce",
        JLPT: 3
    },
    {
        kanji: "札",
        kana: "さつ",
        meaning: "(1) token,label,(2) ticket,(3) charm",
        JLPT: 3
    },
    {
        kanji: "作家",
        kana: "さっか",
        meaning: "author,writer,novelist,artist",
        JLPT: 3
    },
    {
        kanji: "作曲",
        kana: "さっきょく",
        meaning: "composition,setting (of music)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ざっと",
        meaning: "roughly,in round numbers",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "さっぱり",
        meaning: "feeling refreshed,feeling relieved,neat,trimmed",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "さて",
        meaning: "well,now,then",
        JLPT: 3
    },
    {
        kanji: "砂漠",
        kana: "さばく",
        meaning: "desert",
        JLPT: 3
    },
    {
        kanji: "差別",
        kana: "さべつ",
        meaning: "discrimination,distinction,differentiation",
        JLPT: 3
    },
    {
        kanji: "作法",
        kana: "さほう",
        meaning: "manners,etiquette,propriety",
        JLPT: 3
    },
    {
        kanji: "様々",
        kana: "さまざま",
        meaning: "varied,various",
        JLPT: 3
    },
    {
        kanji: "覚ます",
        kana: "さます",
        meaning: "to awaken",
        JLPT: 3
    },
    {
        kanji: "覚める",
        kana: "さめる",
        meaning: "to wake,to wake up",
        JLPT: 3
    },
    {
        kanji: "左右",
        kana: "さゆう",
        meaning: "(1) left and right,(2) influence,control,domination",
        JLPT: 3
    },
    {
        kanji: "皿",
        kana: "さら",
        meaning: "plate,dish",
        JLPT: 3
    },
    {
        kanji: "更に",
        kana: "さらに",
        meaning: "furthermore,again,after all,more and more,moreover",
        JLPT: 3
    },
    {
        kanji: "去る",
        kana: "さる",
        meaning: "to leave,to go away",
        JLPT: 3
    },
    {
        kanji: "猿",
        kana: "さる",
        meaning: "monkey",
        JLPT: 3
    },
    {
        kanji: "騒ぎ",
        kana: "さわぎ",
        meaning: "uproar,disturbance",
        JLPT: 3
    },
    {
        kanji: "参加",
        kana: "さんか",
        meaning: "participation",
        JLPT: 3
    },
    {
        kanji: "参考",
        kana: "さんこう",
        meaning: "reference,consultation",
        JLPT: 3
    },
    {
        kanji: "賛成",
        kana: "Uӣ[い",
        meaning: "approval,agreement,support,favour",
        JLPT: 3
    },
    {
        kanji: "酸素",
        kana: "さんそ",
        meaning: "oxygen",
        JLPT: 3
    },
    {
        kanji: "散歩",
        kana: "さんぽ",
        meaning: "walk,stroll",
        JLPT: 3
    },
    {
        kanji: "四",
        kana: "し",
        meaning: "four",
        JLPT: 3
    },
    {
        kanji: "氏",
        kana: "し",
        meaning: "family name,lineage,birth",
        JLPT: 3
    },
    {
        kanji: "詩",
        kana: "し",
        meaning: "poem,verse of poetry",
        JLPT: 3
    },
    {
        kanji: "幸せ",
        kana: "しあわせ",
        meaning: "happiness,good fortune,luck,blessing",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ジーンズ",
        meaning: "jeans",
        JLPT: 3
    },
    {
        kanji: "ジェット機",
        kana: "ジェットき",
        meaning: "jet aeroplane",
        JLPT: 3
    },
    {
        kanji: "直に",
        kana: "じかに",
        meaning: "immediately,readily,directly",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "しかも",
        meaning: "moreover,furthermore,nevertheless,and yet",
        JLPT: 3
    },
    {
        kanji: "叱る",
        kana: "しかる",
        meaning: "to scold",
        JLPT: 3
    },
    {
        kanji: "式",
        kana: "しき",
        meaning: "equation,formula,ceremony",
        JLPT: 3
    },
    {
        kanji: "直",
        kana: "じき",
        meaning: "earnestly,immediately,exactly",
        JLPT: 3
    },
    {
        kanji: "時期",
        kana: "じき",
        meaning: "time,season,period",
        JLPT: 3
    },
    {
        kanji: "支給",
        kana: "しきゅう",
        meaning: "payment,allowance",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "しきりに",
        meaning: "frequently,repeatedly,incessantly,eagerly",
        JLPT: 3
    },
    {
        kanji: "刺激",
        kana: "しげき",
        meaning: "stimulus,impetus,incentive",
        JLPT: 3
    },
    {
        kanji: "資源",
        kana: "しげん",
        meaning: "resources",
        JLPT: 3
    },
    {
        kanji: "事件",
        kana: "じけん",
        meaning: "event,affair,incident",
        JLPT: 3
    },
    {
        kanji: "時刻",
        kana: "じこく",
        meaning: "instant,time,moment",
        JLPT: 3
    },
    {
        kanji: "自殺",
        kana: "じさつ",
        meaning: "suicide",
        JLPT: 3
    },
    {
        kanji: "事実",
        kana: "じじつ",
        meaning: "fact,truth,reality",
        JLPT: 3
    },
    {
        kanji: "支出",
        kana: "ししゅつ",
        meaning: "expenditure,expenses",
        JLPT: 3
    },
    {
        kanji: "事情",
        kana: "じじょう",
        meaning: "circumstances,consideration,conditions,situation,reasons",
        JLPT: 3
    },
    {
        kanji: "詩人",
        kana: "しじん",
        meaning: "poet",
        JLPT: 3
    },
    {
        kanji: "自身",
        kana: "じしん",
        meaning: "by oneself,personally",
        JLPT: 3
    },
    {
        kanji: "沈む",
        kana: "しずむ",
        meaning: "to sink,to feel depressed",
        JLPT: 3
    },
    {
        kanji: "自然",
        kana: "しぜん",
        meaning: "nature,spontaneous",
        JLPT: 3
    },
    {
        kanji: "思想",
        kana: "しそう",
        meaning: "thought,idea",
        JLPT: 3
    },
    {
        kanji: "舌",
        kana: "した",
        meaning: "tongue",
        JLPT: 3
    },
    {
        kanji: "次第",
        kana: "しだい",
        meaning: "(1) order,precedence,(2) circumstances,(3) immediate(ly)",
        JLPT: 3
    },
    {
        kanji: "事態",
        kana: "じたい",
        meaning: "situation,present state of affairs",
        JLPT: 3
    },
    {
        kanji: "従う",
        kana: "したがう",
        meaning: "to abide (by the rules),to obey,to follow,to accompany",
        JLPT: 3
    },
    {
        kanji: "したがって",
        kana: "したがって",
        meaning: "therefore,consequently,in accordance with",
        JLPT: 3
    },
    {
        kanji: "支度",
        kana: "したく",
        meaning: "preparation",
        JLPT: 3
    },
    {
        kanji: "親しい",
        kana: "したしい",
        meaning: "intimate,close (e.g. friend)",
        JLPT: 3
    },
    {
        kanji: "七",
        kana: "しち",
        meaning: "seven",
        JLPT: 3
    },
    {
        kanji: "質",
        kana: "しつ",
        meaning: "quality,nature (of person)",
        JLPT: 3
    },
    {
        kanji: "失業",
        kana: "しつぎょう",
        meaning: "unemployment",
        JLPT: 3
    },
    {
        kanji: "実験",
        kana: "じっけん",
        meaning: "experiment",
        JLPT: 3
    },
    {
        kanji: "実現",
        kana: "じつげん",
        meaning: "implementation,materialization,realization",
        JLPT: 3
    },
    {
        kanji: "実行",
        kana: "じっこう",
        meaning: "practice,performance,execution (e.g. program),realization",
        JLPT: 3
    },
    {
        kanji: "実際",
        kana: "じっさい",
        meaning: "practical,actual condition,status quo",
        JLPT: 3
    },
    {
        kanji: "実施",
        kana: "じっし",
        meaning: "enforcement,enact,put into practice,carry out,operation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "じっと",
        meaning: "fixedly,firmly,patiently,quietly",
        JLPT: 3
    },
    {
        kanji: "実に",
        kana: "じつに",
        meaning: "indeed,truly,surely",
        JLPT: 3
    },
    {
        kanji: "実は",
        kana: "じつは",
        meaning: "as a matter of fact,by the way",
        JLPT: 3
    },
    {
        kanji: "失望",
        kana: "しつぼう",
        meaning: "disappointment,despair",
        JLPT: 3
    },
    {
        kanji: "支店",
        kana: "してん",
        meaning: "branch store (office)",
        JLPT: 3
    },
    {
        kanji: "指導",
        kana: "しどう",
        meaning: "leadership,guidance,coaching",
        JLPT: 3
    },
    {
        kanji: "自動",
        kana: "じどう",
        meaning: "automatic,self-motion",
        JLPT: 3
    },
    {
        kanji: "品",
        kana: "しな",
        meaning: "thing,article,goods,dignity,article (goods),counter for meal courses",
        JLPT: 3
    },
    {
        kanji: "支配",
        kana: "しはい",
        meaning: "rule,control,direction",
        JLPT: 3
    },
    {
        kanji: "芝居",
        kana: "しばい",
        meaning: "play,drama",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "しばしば",
        meaning: "often,again and again,frequently",
        JLPT: 3
    },
    {
        kanji: "芝生",
        kana: "しばふ",
        meaning: "lawn",
        JLPT: 3
    },
    {
        kanji: "支払",
        kana: "しはらい",
        meaning: "payment",
        JLPT: 3
    },
    {
        kanji: "支払う",
        kana: "しはらう",
        meaning: "to pay",
        JLPT: 3
    },
    {
        kanji: "死亡",
        kana: "しぼう",
        meaning: "death,mortality",
        JLPT: 3
    },
    {
        kanji: "資本",
        kana: "しほん",
        meaning: "funds,capital",
        JLPT: 3
    },
    {
        kanji: "しまい",
        kana: "（終わり）",
        meaning: "sisters",
        JLPT: 3
    },
    {
        kanji: "姉妹",
        kana: "しまい",
        meaning: "sisters",
        JLPT: 3
    },
    {
        kanji: "しまう",
        kana: "（終わる）",
        meaning: "to finish,to close,to do something completely",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "しまった",
        meaning: "Damn it!",
        JLPT: 3
    },
    {
        kanji: "自慢",
        kana: "じまん",
        meaning: "pride,boast",
        JLPT: 3
    },
    {
        kanji: "事務",
        kana: "じむ",
        meaning: "business,office work",
        JLPT: 3
    },
    {
        kanji: "示す",
        kana: "しめす",
        meaning: "to denote,to show,to point out,to indicate",
        JLPT: 3
    },
    {
        kanji: "占める",
        kana: "しめる",
        meaning: "(1) to comprise,to account for,to make up (of),(2) to hold,to occupy",
        JLPT: 3
    },
    {
        kanji: "下",
        kana: "しも",
        meaning: "under,below,beneath",
        JLPT: 3
    },
    {
        kanji: "霜",
        kana: "しも",
        meaning: "frost",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "じゃあ",
        meaning: "well,well then",
        JLPT: 3
    },
    {
        kanji: "借金",
        kana: "しゃっきん",
        meaning: "debt,loan,liabilities",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "しゃべる",
        meaning: "to talk,to chat,to chatter",
        JLPT: 3
    },
    {
        kanji: "邪魔",
        kana: "じゃま",
        meaning: "hindrance,intrusion",
        JLPT: 3
    },
    {
        kanji: "週",
        kana: "しゅう",
        meaning: "week",
        JLPT: 3
    },
    {
        kanji: "州",
        kana: "しゅう",
        meaning: "sandbank",
        JLPT: 3
    },
    {
        kanji: "十",
        kana: "じゅう",
        meaning: "10,ten",
        JLPT: 3
    },
    {
        kanji: "銃",
        kana: "じゅう",
        meaning: "gun",
        JLPT: 3
    },
    {
        kanji: "周囲",
        kana: "しゅうい",
        meaning: "surroundings,circumference,environs",
        JLPT: 3
    },
    {
        kanji: "収穫",
        kana: "しゅうかく",
        meaning: "harvest,crop,ingathering",
        JLPT: 3
    },
    {
        kanji: "週間",
        kana: "しゅうかん",
        meaning: "week,weekly",
        JLPT: 3
    },
    {
        kanji: "宗教",
        kana: "しゅうきょう",
        meaning: "religion",
        JLPT: 3
    },
    {
        kanji: "重視",
        kana: "じゅうし",
        meaning: "importance,stress,serious consideration",
        JLPT: 3
    },
    {
        kanji: "就職",
        kana: "しゅうしょく",
        meaning: "finding employment,inauguration",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ジュース",
        meaning: "juice,soft drink,deuce",
        JLPT: 3
    },
    {
        kanji: "修正",
        kana: "しゅうせい",
        meaning: "amendment,correction,revision,modification",
        JLPT: 3
    },
    {
        kanji: "渋滞",
        kana: "じゅうたい",
        meaning: "congestion (e.g. traffic),delay,stagnation",
        JLPT: 3
    },
    {
        kanji: "重大",
        kana: "じゅうだい",
        meaning: "serious,important,grave,weighty",
        JLPT: 3
    },
    {
        kanji: "住宅",
        kana: "じゅうたく",
        meaning: "resident,housing",
        JLPT: 3
    },
    {
        kanji: "集団",
        kana: "しゅうだん",
        meaning: "group,mass",
        JLPT: 3
    },
    {
        kanji: "集中",
        kana: "しゅうちゅう",
        meaning: "concentration,focusing the mind",
        JLPT: 3
    },
    {
        kanji: "収入",
        kana: "しゅうにゅう",
        meaning: "income,receipts,revenue",
        JLPT: 3
    },
    {
        kanji: "住民",
        kana: "じゅうみん",
        meaning: "citizens,inhabitants,residents,population",
        JLPT: 3
    },
    {
        kanji: "重要",
        kana: "じゅうよう",
        meaning: "important,momentous,essential,principal,major",
        JLPT: 3
    },
    {
        kanji: "修理",
        kana: "しゅうり",
        meaning: "repairing,mending",
        JLPT: 3
    },
    {
        kanji: "主義",
        kana: "しゅぎ",
        meaning: "doctrine,rule,principle",
        JLPT: 3
    },
    {
        kanji: "宿泊",
        kana: "しゅくはく",
        meaning: "lodging",
        JLPT: 3
    },
    {
        kanji: "手術",
        kana: "しゅじゅつ",
        meaning: "surgical operation",
        JLPT: 3
    },
    {
        kanji: "首相",
        kana: "しゅしょう",
        meaning: "Prime Minister",
        JLPT: 3
    },
    {
        kanji: "手段",
        kana: "しゅだん",
        meaning: "means,way,measure",
        JLPT: 3
    },
    {
        kanji: "主張",
        kana: "しゅちょう",
        meaning: "claim,request,insistence,assertion",
        JLPT: 3
    },
    {
        kanji: "出身",
        kana: "しゅっしん",
        meaning: "graduate from,come from",
        JLPT: 3
    },
    {
        kanji: "出席",
        kana: "しゅっせき",
        meaning: "attendance,presence",
        JLPT: 3
    },
    {
        kanji: "出発",
        kana: "しゅっぱつ",
        meaning: "departure",
        JLPT: 3
    },
    {
        kanji: "出版",
        kana: "しゅっぱん",
        meaning: "publication",
        JLPT: 3
    },
    {
        kanji: "首都",
        kana: "しゅと",
        meaning: "capital city",
        JLPT: 3
    },
    {
        kanji: "主婦",
        kana: "しゅふ",
        meaning: "housewife,mistress",
        JLPT: 3
    },
    {
        kanji: "主要",
        kana: "しゅよう",
        meaning: "chief,main,principal,major",
        JLPT: 3
    },
    {
        kanji: "需要",
        kana: "じゅよう",
        meaning: "demand,request",
        JLPT: 3
    },
    {
        kanji: "種類",
        kana: "しゅるい",
        meaning: "variety,kind,type",
        JLPT: 3
    },
    {
        kanji: "順",
        kana: "じゅん",
        meaning: "order,turn",
        JLPT: 3
    },
    {
        kanji: "瞬間",
        kana: "しゅんかん",
        meaning: "moment,second,instant",
        JLPT: 3
    },
    {
        kanji: "順調",
        kana: "じゅんちょう",
        meaning: "favourable,doing well,O.K.,all right",
        JLPT: 3
    },
    {
        kanji: "順番",
        kana: "じゅんばん",
        meaning: "turn (in line),order of things",
        JLPT: 3
    },
    {
        kanji: "準備",
        kana: "じゅんび",
        meaning: "preparation,arrangements,provision,reserve",
        JLPT: 3
    },
    {
        kanji: "使用",
        kana: "しよう",
        meaning: "use,application,employment,utilization",
        JLPT: 3
    },
    {
        kanji: "小",
        kana: "しょう",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "章",
        kana: "しょう",
        meaning: "(1) chapter,section,(2) medal",
        JLPT: 3
    },
    {
        kanji: "賞",
        kana: "しょう",
        meaning: "prize,award",
        JLPT: 3
    },
    {
        kanji: "上",
        kana: "じょう",
        meaning: "(1) first volume,(2) superior quality,(3) governmental",
        JLPT: 3
    },
    {
        kanji: "障害",
        kana: "しょうがい",
        meaning: "obstacle,impediment (fault),damage",
        JLPT: 3
    },
    {
        kanji: "奨学金",
        kana: "しょうがくきん",
        meaning: "scholarship",
        JLPT: 3
    },
    {
        kanji: "乗客",
        kana: "じょうきゃく",
        meaning: "passenger",
        JLPT: 3
    },
    {
        kanji: "上京",
        kana: "じょうきょう",
        meaning: "proceeding to the capital (Tokyo)",
        JLPT: 3
    },
    {
        kanji: "状況",
        kana: "じょうきょう",
        meaning: "state of affairs,situation,circumstances",
        JLPT: 3
    },
    {
        kanji: "条件",
        kana: "じょうけん",
        meaning: "conditions,terms",
        JLPT: 3
    },
    {
        kanji: "正午",
        kana: "しょうご",
        meaning: "noon,mid-day",
        JLPT: 3
    },
    {
        kanji: "正直",
        kana: "しょうじき",
        meaning: "honesty,integrity,frankness",
        JLPT: 3
    },
    {
        kanji: "常識",
        kana: "じょうしき",
        meaning: "common sense",
        JLPT: 3
    },
    {
        kanji: "少女",
        kana: "しょうじょ",
        meaning: "daughter,young lady,virgin,maiden,little girl",
        JLPT: 3
    },
    {
        kanji: "少々",
        kana: "しょうしょう",
        meaning: "just a minute,small quantity",
        JLPT: 3
    },
    {
        kanji: "症状",
        kana: "しょうじょう",
        meaning: "symptoms,condition",
        JLPT: 3
    },
    {
        kanji: "生じる",
        kana: "しょうじる",
        meaning: "to produce,to yield,to result from,to arise,to be generated",
        JLPT: 3
    },
    {
        kanji: "招待",
        kana: "しょうたい",
        meaning: "invitation",
        JLPT: 3
    },
    {
        kanji: "状態",
        kana: "じょうたい",
        meaning: "condition,situation,circumstances,state",
        JLPT: 3
    },
    {
        kanji: "上達",
        kana: "じょうたつ",
        meaning: "improvement,advance,progress",
        JLPT: 3
    },
    {
        kanji: "冗談",
        kana: "じょうだん",
        meaning: "jest,joke",
        JLPT: 3
    },
    {
        kanji: "承知",
        kana: "しょうち",
        meaning: "consent,acceptance,assent,admitting",
        JLPT: 3
    },
    {
        kanji: "上等",
        kana: "じょうとう",
        meaning: "superiority,first class,very good",
        JLPT: 3
    },
    {
        kanji: "衝突",
        kana: "しょうとつ",
        meaning: "collision,conflict",
        JLPT: 3
    },
    {
        kanji: "商人",
        kana: "しょうにん",
        meaning: "trader,shopkeeper,merchant",
        JLPT: 3
    },
    {
        kanji: "承認",
        kana: "しょうにん",
        meaning: "recognition,acknowledgement,approval,consent,agreement",
        JLPT: 3
    },
    {
        kanji: "少年",
        kana: "しょうねん",
        meaning: "boys,juveniles",
        JLPT: 3
    },
    {
        kanji: "商売",
        kana: "しょうばい",
        meaning: "trade,business,commerce,transaction,occupation",
        JLPT: 3
    },
    {
        kanji: "消費",
        kana: "しょうひ",
        meaning: "consumption,expenditure",
        JLPT: 3
    },
    {
        kanji: "商品",
        kana: "しょうひん",
        meaning: "commodity,article of commerce,goods,stock,merchandise",
        JLPT: 3
    },
    {
        kanji: "消防",
        kana: "しょうぼう",
        meaning: "fire fighting,fire department",
        JLPT: 3
    },
    {
        kanji: "情報",
        kana: "じょうほう",
        meaning: "information,(military) intelligence",
        JLPT: 3
    },
    {
        kanji: "証明",
        kana: "しょうめい",
        meaning: "proof,verification",
        JLPT: 3
    },
    {
        kanji: "女王",
        kana: "じょおう",
        meaning: "queen",
        JLPT: 3
    },
    {
        kanji: "職",
        kana: "しょく",
        meaning: "employment",
        JLPT: 3
    },
    {
        kanji: "職業",
        kana: "しょくぎょう",
        meaning: "occupation,business",
        JLPT: 3
    },
    {
        kanji: "食事",
        kana: "しょくじ",
        meaning: "meal",
        JLPT: 3
    },
    {
        kanji: "食卓",
        kana: "しょくたく",
        meaning: "dining table",
        JLPT: 3
    },
    {
        kanji: "食品",
        kana: "しょくひん",
        meaning: "commodity,foodstuff",
        JLPT: 3
    },
    {
        kanji: "植物",
        kana: "しょくぶつ",
        meaning: "plant,vegetation",
        JLPT: 3
    },
    {
        kanji: "食物",
        kana: "しょくもつ",
        meaning: "food,foodstuff",
        JLPT: 3
    },
    {
        kanji: "食欲",
        kana: "しょくよく",
        meaning: "appetite (for food)",
        JLPT: 3
    },
    {
        kanji: "食料",
        kana: "しょくりょう",
        meaning: "food",
        JLPT: 3
    },
    {
        kanji: "食糧",
        kana: "しょくりょう",
        meaning: "provisions,rations",
        JLPT: 3
    },
    {
        kanji: "書斎",
        kana: "しょさい",
        meaning: "study",
        JLPT: 3
    },
    {
        kanji: "女子",
        kana: "じょし",
        meaning: "woman,girl",
        JLPT: 3
    },
    {
        kanji: "助手",
        kana: "じょしゅ",
        meaning: "helper,helpmeet,assistant,tutor",
        JLPT: 3
    },
    {
        kanji: "徐々に",
        kana: "じょじょに",
        meaning: "slowly,little by little,gradually,steadily,quietly",
        JLPT: 3
    },
    {
        kanji: "署名",
        kana: "しょめい",
        meaning: "signature",
        JLPT: 3
    },
    {
        kanji: "書物",
        kana: "しょもつ",
        meaning: "books",
        JLPT: 3
    },
    {
        kanji: "女優",
        kana: "じょゆう",
        meaning: "actress",
        JLPT: 3
    },
    {
        kanji: "処理",
        kana: "しょり",
        meaning: "processing,dealing with,treatment,disposition,disposal",
        JLPT: 3
    },
    {
        kanji: "書類",
        kana: "しょるい",
        meaning: "documents,official papers",
        JLPT: 3
    },
    {
        kanji: "知らせ",
        kana: "しらせ",
        meaning: "notice",
        JLPT: 3
    },
    {
        kanji: "尻",
        kana: "しり",
        meaning: "buttocks,bottom",
        JLPT: 3
    },
    {
        kanji: "印",
        kana: "しるし",
        meaning: "(1) mark,(2) symbol,(3) evidence",
        JLPT: 3
    },
    {
        kanji: "城",
        kana: "しろ",
        meaning: "castle",
        JLPT: 3
    },
    {
        kanji: "進学",
        kana: "しんがく",
        meaning: "going on to university",
        JLPT: 3
    },
    {
        kanji: "神経",
        kana: "しんけい",
        meaning: "nerve,sensitivity",
        JLPT: 3
    },
    {
        kanji: "真剣",
        kana: "しんけん",
        meaning: "seriousness,earnestness",
        JLPT: 3
    },
    {
        kanji: "信仰",
        kana: "しんこう",
        meaning: "(religious) faith,belief,creed",
        JLPT: 3
    },
    {
        kanji: "信号",
        kana: "しんごう",
        meaning: "traffic lights,signal,semaphore",
        JLPT: 3
    },
    {
        kanji: "人工",
        kana: "じんこう",
        meaning: "artificial,manmade,human work,human skill,artificiality",
        JLPT: 3
    },
    {
        kanji: "深刻",
        kana: "しんこく",
        meaning: "serious",
        JLPT: 3
    },
    {
        kanji: "診察",
        kana: "しんさつ",
        meaning: "medical examination",
        JLPT: 3
    },
    {
        kanji: "人種",
        kana: "じんしゅ",
        meaning: "race (of people)",
        JLPT: 3
    },
    {
        kanji: "信じる",
        kana: "しんじる",
        meaning: "to believe,to place trust in",
        JLPT: 3
    },
    {
        kanji: "人生",
        kana: "じんせい",
        meaning: "(human) life (i.e. conception to death)",
        JLPT: 3
    },
    {
        kanji: "親戚",
        kana: "しんせき",
        meaning: "relative",
        JLPT: 3
    },
    {
        kanji: "新鮮",
        kana: "しんせん",
        meaning: "fresh",
        JLPT: 3
    },
    {
        kanji: "心臓",
        kana: "しんぞう",
        meaning: "heart",
        JLPT: 3
    },
    {
        kanji: "身体",
        kana: "しんたい",
        meaning: "the body",
        JLPT: 3
    },
    {
        kanji: "身長",
        kana: "しんちょう",
        meaning: "height (of body),stature",
        JLPT: 3
    },
    {
        kanji: "慎重",
        kana: "しんちょう",
        meaning: "discretion,prudence",
        JLPT: 3
    },
    {
        kanji: "心配",
        kana: "しんぱい",
        meaning: "worry,concern,anxiety,care",
        JLPT: 3
    },
    {
        kanji: "審判",
        kana: "しんぱん",
        meaning: "refereeing,trial,judgement,umpire,referee",
        JLPT: 3
    },
    {
        kanji: "人物",
        kana: "じんぶつ",
        meaning: "character,personality,person,man,personage,talented man",
        JLPT: 3
    },
    {
        kanji: "進歩",
        kana: "しんぽ",
        meaning: "progress,development",
        JLPT: 3
    },
    {
        kanji: "親友",
        kana: "しんゆう",
        meaning: "close friend,buddy",
        JLPT: 3
    },
    {
        kanji: "信用",
        kana: "しんよう",
        meaning: "confidence,dependence,credit,faith",
        JLPT: 3
    },
    {
        kanji: "信頼",
        kana: "しんらい",
        meaning: "reliance,trust,confidence",
        JLPT: 3
    },
    {
        kanji: "心理",
        kana: "しんり",
        meaning: "mentality",
        JLPT: 3
    },
    {
        kanji: "人類",
        kana: "じんるい",
        meaning: "mankind,humanity",
        JLPT: 3
    },
    {
        kanji: "巣",
        kana: "す",
        meaning: "nest,rookery,breeding place,beehive,cobweb",
        JLPT: 3
    },
    {
        kanji: "図",
        kana: "ず",
        meaning: "figure (e.g. Fig 1),drawing,picture,illustration",
        JLPT: 3
    },
    {
        kanji: "水準",
        kana: "すいじゅん",
        meaning: "(1) water level,(2) level,standard",
        JLPT: 3
    },
    {
        kanji: "推薦",
        kana: "すいせん",
        meaning: "recommendation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スイッチ",
        meaning: "switch",
        JLPT: 3
    },
    {
        kanji: "随分",
        kana: "ずいぶん",
        meaning: "extremely",
        JLPT: 3
    },
    {
        kanji: "睡眠",
        kana: "すいみん",
        meaning: "sleep",
        JLPT: 3
    },
    {
        kanji: "数",
        kana: "すう",
        meaning: "number,figure",
        JLPT: 3
    },
    {
        kanji: "数字",
        kana: "すうじ",
        meaning: "numeral,figure",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スープ",
        meaning: "(Western) soup",
        JLPT: 3
    },
    {
        kanji: "末",
        kana: "すえ",
        meaning: "the end of,powder",
        JLPT: 3
    },
    {
        kanji: "姿",
        kana: "すがた",
        meaning: "figure,shape,appearance",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スキー",
        meaning: "skiing",
        JLPT: 3
    },
    {
        kanji: "空く",
        kana: "すく",
        meaning: "(1) to open,to become empty,(2) to be less crowded",
        JLPT: 3
    },
    {
        kanji: "救う",
        kana: "すくう",
        meaning: "to rescue from,to help out of",
        JLPT: 3
    },
    {
        kanji: "優れる",
        kana: "すぐれる",
        meaning: "to surpass,to outstrip,to excel",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スケート",
        meaning: "skate(s),skating",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "すごい",
        meaning: "terrible,dreadful,terrific,amazing,great",
        JLPT: 3
    },
    {
        kanji: "少しも",
        kana: "すこしも",
        meaning: "anything of,not one bit",
        JLPT: 3
    },
    {
        kanji: "過ごす",
        kana: "すごす",
        meaning: "to pass,to spend,to go through,to tide over",
        JLPT: 3
    },
    {
        kanji: "筋",
        kana: "すじ",
        meaning: "muscle,string,line",
        JLPT: 3
    },
    {
        kanji: "進める",
        kana: "すすめる",
        meaning: "to advance,to promote,to hasten",
        JLPT: 3
    },
    {
        kanji: "勧める",
        kana: "すすめる",
        meaning: "to recommend,to advise,to encourage,to offer (wine)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スター",
        meaning: "star",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スタイル",
        meaning: "style",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スタンド",
        meaning: "stand",
        JLPT: 3
    },
    {
        kanji: "頭痛",
        kana: "ずつう",
        meaning: "headache",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ずっと",
        meaning: "consecutively,throughout,a lot",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "すてき",
        meaning: "lovely,dreamy,beautiful,great",
        JLPT: 3
    },
    {
        kanji: "既に",
        kana: "すでに",
        meaning: "already,too late",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "すなわち",
        meaning: "that is,namely,i.e.",
        JLPT: 3
    },
    {
        kanji: "素晴らしい",
        kana: "すばらしい",
        meaning: "wonderful,splendid,magnificent",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "スピーチ",
        meaning: "speech",
        JLPT: 3
    },
    {
        kanji: "全て",
        kana: "すべて",
        meaning: "all,the whole,entirely,in general,wholly",
        JLPT: 3
    },
    {
        kanji: "済ませる",
        kana: "すませる",
        meaning: "to be finished",
        JLPT: 3
    },
    {
        kanji: "角",
        kana: "すみ",
        meaning: "horn",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "すみません",
        meaning: "sorry,excuse me",
        JLPT: 3
    },
    {
        kanji: "為る",
        kana: "する",
        meaning: "to change,to be of use,to reach to",
        JLPT: 3
    },
    {
        kanji: "すると",
        kana: "すると",
        meaning: "thereupon,hereupon",
        JLPT: 3
    },
    {
        kanji: "鋭い",
        kana: "するどい",
        meaning: "pointed,sharp",
        JLPT: 3
    },
    {
        kanji: "背",
        kana: "せい",
        meaning: "height,stature",
        JLPT: 3
    },
    {
        kanji: "正",
        kana: "せい",
        meaning: "(logical) true,regular",
        JLPT: 3
    },
    {
        kanji: "生",
        kana: "せい",
        meaning: "(1) draft (beer),(2) raw,unprocessed",
        JLPT: 3
    },
    {
        kanji: "性",
        kana: "せい",
        meaning: "sex,gender",
        JLPT: 3
    },
    {
        kanji: "所為",
        kana: "せい",
        meaning: "cause,reason,fault",
        JLPT: 3
    },
    {
        kanji: "税",
        kana: "ぜい",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "性格",
        kana: "せいかく",
        meaning: "character,personality",
        JLPT: 3
    },
    {
        kanji: "正確",
        kana: "せいかく",
        meaning: "accurate,punctuality,exactness,authenticity,veracity",
        JLPT: 3
    },
    {
        kanji: "世紀",
        kana: "せいき",
        meaning: "century,era",
        JLPT: 3
    },
    {
        kanji: "請求",
        kana: "せいきゅう",
        meaning: "claim,demand,application,request",
        JLPT: 3
    },
    {
        kanji: "税金",
        kana: "ぜいきん",
        meaning: "tax,duty",
        JLPT: 3
    },
    {
        kanji: "清潔",
        kana: "せいけつ",
        meaning: "clean",
        JLPT: 3
    },
    {
        kanji: "制限",
        kana: "せいげん",
        meaning: "restriction,restraint,limitation",
        JLPT: 3
    },
    {
        kanji: "成功",
        kana: "せいこう",
        meaning: "success,hit",
        JLPT: 3
    },
    {
        kanji: "生産",
        kana: "せいさん",
        meaning: "production,manufacture",
        JLPT: 3
    },
    {
        kanji: "正式",
        kana: "せいしき",
        meaning: "due form,official,formality",
        JLPT: 3
    },
    {
        kanji: "精神",
        kana: "せいしん",
        meaning: "mind,soul,heart,spirit,intention",
        JLPT: 3
    },
    {
        kanji: "成人",
        kana: "せいじん",
        meaning: "adult",
        JLPT: 3
    },
    {
        kanji: "精々",
        kana: "せいぜい",
        meaning: "at the most,at best,to the utmost,as much (far) as possible",
        JLPT: 3
    },
    {
        kanji: "成績",
        kana: "せいせき",
        meaning: "results,record",
        JLPT: 3
    },
    {
        kanji: "製造",
        kana: "せいぞう",
        meaning: "manufacture,production",
        JLPT: 3
    },
    {
        kanji: "贅沢",
        kana: "ぜいたく",
        meaning: "luxury,extravagance",
        JLPT: 3
    },
    {
        kanji: "成長",
        kana: "せいちょう",
        meaning: "growth,grow to adulthood",
        JLPT: 3
    },
    {
        kanji: "制度",
        kana: "せいど",
        meaning: "system,institution,organization",
        JLPT: 3
    },
    {
        kanji: "青年",
        kana: "せいねん",
        meaning: "youth,young man",
        JLPT: 3
    },
    {
        kanji: "製品",
        kana: "せいひん",
        meaning: "manufactured goods,finished goods",
        JLPT: 3
    },
    {
        kanji: "政府",
        kana: "せいふ",
        meaning: "government,administration",
        JLPT: 3
    },
    {
        kanji: "生物",
        kana: "せいぶつ",
        meaning: "raw food",
        JLPT: 3
    },
    {
        kanji: "生命",
        kana: "せいめい",
        meaning: "life,existence",
        JLPT: 3
    },
    {
        kanji: "整理",
        kana: "せいり",
        meaning: "sorting,arrangement,adjustment,regulation",
        JLPT: 3
    },
    {
        kanji: "咳",
        kana: "せき",
        meaning: "cough",
        JLPT: 3
    },
    {
        kanji: "石炭",
        kana: "せきたん",
        meaning: "coal",
        JLPT: 3
    },
    {
        kanji: "責任",
        kana: "せきにん",
        meaning: "duty,responsibility",
        JLPT: 3
    },
    {
        kanji: "石油",
        kana: "せきゆ",
        meaning: "oil,petroleum,kerosene",
        JLPT: 3
    },
    {
        kanji: "世間",
        kana: "せけん",
        meaning: "world,society",
        JLPT: 3
    },
    {
        kanji: "説",
        kana: "せつ",
        meaning: "theory",
        JLPT: 3
    },
    {
        kanji: "積極的",
        kana: "せっきょくてき",
        meaning: "positive,active,proactive",
        JLPT: 3
    },
    {
        kanji: "設計",
        kana: "せっけい",
        meaning: "plan,design",
        JLPT: 3
    },
    {
        kanji: "絶対",
        kana: "ぜったい",
        meaning: "absolute,unconditional,absoluteness",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "セット",
        meaning: "set",
        JLPT: 3
    },
    {
        kanji: "設備",
        kana: "せつび",
        meaning: "equipment,device,facilities,installation",
        JLPT: 3
    },
    {
        kanji: "絶滅",
        kana: "ぜつめつ",
        meaning: "destruction,extinction",
        JLPT: 3
    },
    {
        kanji: "節約",
        kana: "せつやく",
        meaning: "economising,saving",
        JLPT: 3
    },
    {
        kanji: "是非",
        kana: "ぜひ",
        meaning: "certainly,without fail",
        JLPT: 3
    },
    {
        kanji: "責める",
        kana: "せめる",
        meaning: "to condemn,to blame,to criticize",
        JLPT: 3
    },
    {
        kanji: "世話",
        kana: "せわ",
        meaning: "looking after,help,aid,assistance",
        JLPT: 3
    },
    {
        kanji: "善",
        kana: "ぜん",
        meaning: "good,goodness,right,virtue",
        JLPT: 3
    },
    {
        kanji: "全",
        kana: "ぜん",
        meaning: "all,whole,entire,complete,overall,pan",
        JLPT: 3
    },
    {
        kanji: "全員",
        kana: "ぜんいん",
        meaning: "all members (unanimity),all hands,the whole crew",
        JLPT: 3
    },
    {
        kanji: "専攻",
        kana: "せんこう",
        meaning: "major subject,special study",
        JLPT: 3
    },
    {
        kanji: "全国",
        kana: "ぜんこく",
        meaning: "country-wide,nation-wide,whole country,national",
        JLPT: 3
    },
    {
        kanji: "先日",
        kana: "せんじつ",
        meaning: "the other day,a few days ago",
        JLPT: 3
    },
    {
        kanji: "前者",
        kana: "ぜんしゃ",
        meaning: "the former",
        JLPT: 3
    },
    {
        kanji: "選手",
        kana: "せんしゅ",
        meaning: "(1) player (in game),(2) team",
        JLPT: 3
    },
    {
        kanji: "前進",
        kana: "ぜんしん",
        meaning: "advance,drive,progress",
        JLPT: 3
    },
    {
        kanji: "全然",
        kana: "ぜんぜん",
        meaning: "(1) wholly,entirely,completely,(2) not at all (with neg. verb)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "センター",
        meaning: "a center",
        JLPT: 3
    },
    {
        kanji: "全体",
        kana: "ぜんたい",
        meaning: "whole,entirety,whatever (is the matter)",
        JLPT: 3
    },
    {
        kanji: "選択",
        kana: "せんたく",
        meaning: "selection,choice",
        JLPT: 3
    },
    {
        kanji: "そう",
        kana: "そう",
        meaning: "so",
        JLPT: 3
    },
    {
        kanji: "象",
        kana: "ぞう",
        meaning: "elephant",
        JLPT: 3
    },
    {
        kanji: "騒音",
        kana: "そうおん",
        meaning: "noise",
        JLPT: 3
    },
    {
        kanji: "増加",
        kana: "ぞうか",
        meaning: "increase,addition",
        JLPT: 3
    },
    {
        kanji: "操作",
        kana: "そうさ",
        meaning: "operation,management,processing",
        JLPT: 3
    },
    {
        kanji: "掃除",
        kana: "そうじ",
        meaning: "cleaning,sweeping",
        JLPT: 3
    },
    {
        kanji: "想像",
        kana: "そうぞう",
        meaning: "imagination,guess",
        JLPT: 3
    },
    {
        kanji: "相続",
        kana: "そうぞく",
        meaning: "succession,inheritance",
        JLPT: 3
    },
    {
        kanji: "相談",
        kana: "そうだん",
        meaning: "consultation,discussion",
        JLPT: 3
    },
    {
        kanji: "装置",
        kana: "そうち",
        meaning: "equipment,installation,apparatus",
        JLPT: 3
    },
    {
        kanji: "相当",
        kana: "そうとう",
        meaning: "suitable,fair,tolerable,proper",
        JLPT: 3
    },
    {
        kanji: "速度",
        kana: "そくど",
        meaning: "speed,velocity,rate",
        JLPT: 3
    },
    {
        kanji: "そこ",
        kana: "そこ",
        meaning: "bottom,sole",
        JLPT: 3
    },
    {
        kanji: "底",
        kana: "そこ",
        meaning: "bottom,sole",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "そこで",
        meaning: "so (conj),accordingly,now,then,thereupon",
        JLPT: 3
    },
    {
        kanji: "組織",
        kana: "そしき",
        meaning: "(1) organization,(2) structure,construction,(3) tissue,(4) system",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "そして",
        meaning: "and",
        JLPT: 3
    },
    {
        kanji: "注ぐ",
        kana: "そそぐ",
        meaning: "to pour (into),to irrigate,to pay,to fill,to feed (e.g. a fire)",
        JLPT: 3
    },
    {
        kanji: "育つ",
        kana: "そだつ",
        meaning: "to raise (child),to be brought up,to grow (up)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "そっくり",
        meaning: "all,altogether,entirely,be just like,the splitting image of",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "そっと",
        meaning: "face of the earth",
        JLPT: 3
    },
    {
        kanji: "袖",
        kana: "そで",
        meaning: "sleeve",
        JLPT: 3
    },
    {
        kanji: "備える",
        kana: "そなえる",
        meaning: "to furnish,to provide for,to equip,to install",
        JLPT: 3
    },
    {
        kanji: "その",
        kana: "その",
        meaning: "the,that",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "そのうち",
        meaning: "eventually,sooner or later,of the previously mentioned",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "そのまま",
        meaning: "without change,as it is (i.e. now)",
        JLPT: 3
    },
    {
        kanji: "側",
        kana: "そば",
        meaning: "side,edge,third person",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ソファー",
        meaning: "sofa,couch",
        JLPT: 3
    },
    {
        kanji: "粗末",
        kana: "そまつ",
        meaning: "crude,rough,plain,humble",
        JLPT: 3
    },
    {
        kanji: "それ",
        kana: "（接。感）",
        meaning: "it,that",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "それぞれ",
        meaning: "each,every,either,respectively,severally",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "それでも",
        meaning: "but (still),and yet,nevertheless,even so,notwithstanding",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "それと",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "それとも",
        meaning: "or,or else",
        JLPT: 3
    },
    {
        kanji: "損",
        kana: "そん",
        meaning: "loss,disadvantage",
        JLPT: 3
    },
    {
        kanji: "損害",
        kana: "そんがい",
        meaning: "damage,injury,loss",
        JLPT: 3
    },
    {
        kanji: "尊敬",
        kana: "そんけい",
        meaning: "respect,esteem,reverence,honour",
        JLPT: 3
    },
    {
        kanji: "存在",
        kana: "そんざい",
        meaning: "existence,being",
        JLPT: 3
    },
    {
        kanji: "尊重",
        kana: "そんちょう",
        meaning: "respect,esteem,regard",
        JLPT: 3
    },
    {
        kanji: "田",
        kana: "た",
        meaning: "rice field",
        JLPT: 3
    },
    {
        kanji: "他",
        kana: "た",
        meaning: "other (esp. places and things)",
        JLPT: 3
    },
    {
        kanji: "対",
        kana: "たい",
        meaning: "pair,couple,set",
        JLPT: 3
    },
    {
        kanji: "大",
        kana: "だい",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "台",
        kana: "だい",
        meaning: "stand,rack,table,support",
        JLPT: 3
    },
    {
        kanji: "題",
        kana: "だい",
        meaning: "title,subject,theme,topic",
        JLPT: 3
    },
    {
        kanji: "体育",
        kana: "たいいく",
        meaning: "physical education,gymnastics,athletics",
        JLPT: 3
    },
    {
        kanji: "体温",
        kana: "たいおん",
        meaning: "temperature (body)",
        JLPT: 3
    },
    {
        kanji: "大会",
        kana: "たいかい",
        meaning: "convention,tournament,mass meeting,rally",
        JLPT: 3
    },
    {
        kanji: "大気",
        kana: "たいき",
        meaning: "atmosphere",
        JLPT: 3
    },
    {
        kanji: "代金",
        kana: "だいきん",
        meaning: "price,payment,cost,charge",
        JLPT: 3
    },
    {
        kanji: "退屈",
        kana: "たいくつ",
        meaning: "tedium,boredom",
        JLPT: 3
    },
    {
        kanji: "滞在",
        kana: "たいざい",
        meaning: "stay,sojourn",
        JLPT: 3
    },
    {
        kanji: "大使",
        kana: "たいし",
        meaning: "ambassador",
        JLPT: 3
    },
    {
        kanji: "大した",
        kana: "たいした",
        meaning: "considerable,great,important,significant,a big deal",
        JLPT: 3
    },
    {
        kanji: "対象",
        kana: "たいしょう",
        meaning: "target,object (of worship, study, etc),subject (of taxation, etc)",
        JLPT: 3
    },
    {
        kanji: "大臣",
        kana: "だいじん",
        meaning: "cabinet minister",
        JLPT: 3
    },
    {
        kanji: "対する",
        kana: "たいする",
        meaning: "to face,to confront,to oppose",
        JLPT: 3
    },
    {
        kanji: "大戦",
        kana: "たいせん",
        meaning: "great war,great battle",
        JLPT: 3
    },
    {
        kanji: "大抵",
        kana: "たいてい",
        meaning: "usually,generally",
        JLPT: 3
    },
    {
        kanji: "態度",
        kana: "たいど",
        meaning: "attitude,manner",
        JLPT: 3
    },
    {
        kanji: "大統領",
        kana: "だいとうりょう",
        meaning: "president,chief executive",
        JLPT: 3
    },
    {
        kanji: "大半",
        kana: "たいはん",
        meaning: "majority,mostly,generally",
        JLPT: 3
    },
    {
        kanji: "代表",
        kana: "だいひょう",
        meaning: "representative,representation,delegation,type,example,model",
        JLPT: 3
    },
    {
        kanji: "大部分",
        kana: "だいぶぶん",
        meaning: "most part,greater part,majority",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "タイプライター",
        meaning: "typewriter",
        JLPT: 3
    },
    {
        kanji: "大変",
        kana: "たいへん",
        meaning: "awful,dreadful,terrible,very",
        JLPT: 3
    },
    {
        kanji: "逮捕",
        kana: "たいほ",
        meaning: "arrest,apprehension,capture",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ダイヤ",
        meaning: "(1) dyer,(2) diagram,(3) (railway) schedule,(4) diamond",
        JLPT: 3
    },
    {
        kanji: "太陽",
        kana: "たいよう",
        meaning: "sun,solar",
        JLPT: 3
    },
    {
        kanji: "平ら",
        kana: "たいら",
        meaning: "flatness,level,smooth,calm,plain",
        JLPT: 3
    },
    {
        kanji: "代理",
        kana: "だいり",
        meaning: "representation,agency,proxy,deputy,agent",
        JLPT: 3
    },
    {
        kanji: "大陸",
        kana: "たいりく",
        meaning: "continent",
        JLPT: 3
    },
    {
        kanji: "倒す",
        kana: "たおす",
        meaning: "to throw down,to beat,to bring down,to blow down",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "タオル",
        meaning: "(hand) towel",
        JLPT: 3
    },
    {
        kanji: "だが",
        kana: "だが",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "互い",
        kana: "たがい",
        meaning: "mutual,reciprocal",
        JLPT: 3
    },
    {
        kanji: "宝",
        kana: "たから",
        meaning: "treasure",
        JLPT: 3
    },
    {
        kanji: "だから",
        kana: "だから",
        meaning: "so,therefore",
        JLPT: 3
    },
    {
        kanji: "宅",
        kana: "たく",
        meaning: "house,home,husband",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "だけど",
        meaning: "however",
        JLPT: 3
    },
    {
        kanji: "確かめる",
        kana: "たしかめる",
        meaning: "to ascertain",
        JLPT: 3
    },
    {
        kanji: "多少",
        kana: "たしょう",
        meaning: "more or less,somewhat,a little,some",
        JLPT: 3
    },
    {
        kanji: "助ける",
        kana: "たすける",
        meaning: "to help,to save,to rescue",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ただ",
        meaning: "free of charge,mere,only",
        JLPT: 3
    },
    {
        kanji: "唯",
        kana: "ただ",
        meaning: "free of charge,mere,sole,only,usual,common",
        JLPT: 3
    },
    {
        kanji: "戦い",
        kana: "たたかい",
        meaning: "battle,fight,struggle,conflict",
        JLPT: 3
    },
    {
        kanji: "戦う",
        kana: "たたかう",
        meaning: "to fight,to battle,to combat",
        JLPT: 3
    },
    {
        kanji: "叩く",
        kana: "たたく",
        meaning: "to strike,to clap,to dust,to beat",
        JLPT: 3
    },
    {
        kanji: "直ちに",
        kana: "ただちに",
        meaning: "at once,immediately,directly,in person",
        JLPT: 3
    },
    {
        kanji: "立ち上がる",
        kana: "たちあがる",
        meaning: "to stand up",
        JLPT: 3
    },
    {
        kanji: "立場",
        kana: "たちば",
        meaning: "standpoint,position,situation",
        JLPT: 3
    },
    {
        kanji: "経つ",
        kana: "たつ",
        meaning: "to pass,to lapse",
        JLPT: 3
    },
    {
        kanji: "達する",
        kana: "たっする",
        meaning: "to reach,to get to",
        JLPT: 3
    },
    {
        kanji: "唯",
        kana: "たった",
        meaning: "free of charge,mere,sole,only,usual,common",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "だって",
        meaning: "but,because,even,also,too",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "たっぷり",
        meaning: "full,in plenty,ample",
        JLPT: 3
    },
    {
        kanji: "縦",
        kana: "たて",
        meaning: "length,height",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "たとえ",
        meaning: "simile,metaphor,allegory",
        JLPT: 3
    },
    {
        kanji: "谷",
        kana: "たに",
        meaning: "valley",
        JLPT: 3
    },
    {
        kanji: "他人",
        kana: "たにん",
        meaning: "another person,unrelated person,outsider,stranger",
        JLPT: 3
    },
    {
        kanji: "種",
        kana: "たね",
        meaning: "(1) seed,(2) material,(3) cause,source",
        JLPT: 3
    },
    {
        kanji: "束",
        kana: "たば",
        meaning: "handbreadth,bundle",
        JLPT: 3
    },
    {
        kanji: "度",
        kana: "たび",
        meaning: "counter for occurrences",
        JLPT: 3
    },
    {
        kanji: "旅",
        kana: "たび",
        meaning: "travel,trip,journey",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "たびたび",
        meaning: "often,repeatedly,frequently",
        JLPT: 3
    },
    {
        kanji: "多分",
        kana: "たぶん",
        meaning: "perhaps,probably",
        JLPT: 3
    },
    {
        kanji: "玉",
        kana: "たま",
        meaning: "ball,sphere,coin",
        JLPT: 3
    },
    {
        kanji: "球",
        kana: "たま",
        meaning: "globe,sphere,ball",
        JLPT: 3
    },
    {
        kanji: "弾",
        kana: "たま",
        meaning: "bullet,shot,shell",
        JLPT: 3
    },
    {
        kanji: "偶",
        kana: "たま",
        meaning: "even number,couple,man and wife,friend",
        JLPT: 3
    },
    {
        kanji: "偶々",
        kana: "たまたま",
        meaning: "casually,unexpectedly,accidentally,by chance",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "たまらない",
        meaning: "intolerable,unbearable,unendurable",
        JLPT: 3
    },
    {
        kanji: "黙る",
        kana: "だまる",
        meaning: "to be silent",
        JLPT: 3
    },
    {
        kanji: "駄目",
        kana: "だめ",
        meaning: "useless,no good,hopeless",
        JLPT: 3
    },
    {
        kanji: "試し",
        kana: "ためし",
        meaning: "trial,test",
        JLPT: 3
    },
    {
        kanji: "試す",
        kana: "ためす",
        meaning: "to attempt,to test",
        JLPT: 3
    },
    {
        kanji: "便り",
        kana: "たより",
        meaning: "news,tidings,information,correspondence,letter",
        JLPT: 3
    },
    {
        kanji: "頼る",
        kana: "たよる",
        meaning: "to rely on,to have recourse to,to depend on",
        JLPT: 3
    },
    {
        kanji: "誰か",
        kana: "だれか",
        meaning: "someone,somebody",
        JLPT: 3
    },
    {
        kanji: "段",
        kana: "だん",
        meaning: "step,stair,flight of steps,grade,rank,level",
        JLPT: 3
    },
    {
        kanji: "単位",
        kana: "たんい",
        meaning: "unit,denomination,credit (in school)",
        JLPT: 3
    },
    {
        kanji: "単語",
        kana: "たんご",
        meaning: "word,vocabulary,(usually) single-character word",
        JLPT: 3
    },
    {
        kanji: "男子",
        kana: "だんし",
        meaning: "youth,young man",
        JLPT: 3
    },
    {
        kanji: "単純",
        kana: "たんじゅん",
        meaning: "simplicity",
        JLPT: 3
    },
    {
        kanji: "誕生",
        kana: "たんじょう",
        meaning: "birth",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ダンス",
        meaning: "dance",
        JLPT: 3
    },
    {
        kanji: "団体",
        kana: "だんたい",
        meaning: "organization,association",
        JLPT: 3
    },
    {
        kanji: "担当",
        kana: "たんとう",
        meaning: "(in) charge",
        JLPT: 3
    },
    {
        kanji: "単なる",
        kana: "たんなる",
        meaning: "mere,simple,sheer",
        JLPT: 3
    },
    {
        kanji: "単に",
        kana: "たんに",
        meaning: "simply,merely,only,solely",
        JLPT: 3
    },
    {
        kanji: "地",
        kana: "ち",
        meaning: "earth",
        JLPT: 3
    },
    {
        kanji: "地位",
        kana: "ちい",
        meaning: "(social) position,status",
        JLPT: 3
    },
    {
        kanji: "地域",
        kana: "ちいき",
        meaning: "area,region",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "チーズ",
        meaning: "cheese",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "チーム",
        meaning: "team",
        JLPT: 3
    },
    {
        kanji: "知恵",
        kana: "ちえ",
        meaning: "wisdom,wit,sagacity,sense,intelligence,advice",
        JLPT: 3
    },
    {
        kanji: "地下",
        kana: "ちか",
        meaning: "basement,underground",
        JLPT: 3
    },
    {
        kanji: "違い",
        kana: "ちがい",
        meaning: "difference,discrepancy",
        JLPT: 3
    },
    {
        kanji: "違いない",
        kana: "ちがいない",
        meaning: "(phrase) sure,no mistaking it,for certain",
        JLPT: 3
    },
    {
        kanji: "近頃",
        kana: "ちかごろ",
        meaning: "lately,recently,nowadays",
        JLPT: 3
    },
    {
        kanji: "地球",
        kana: "ちきゅう",
        meaning: "the earth",
        JLPT: 3
    },
    {
        kanji: "地区",
        kana: "ちく",
        meaning: "district,section,sector",
        JLPT: 3
    },
    {
        kanji: "遅刻",
        kana: "ちこく",
        meaning: "lateness,late coming",
        JLPT: 3
    },
    {
        kanji: "知事",
        kana: "ちじ",
        meaning: "prefectural governor",
        JLPT: 3
    },
    {
        kanji: "知識",
        kana: "ちしき",
        meaning: "knowledge,information",
        JLPT: 3
    },
    {
        kanji: "父親",
        kana: "ちちおや",
        meaning: "father",
        JLPT: 3
    },
    {
        kanji: "知能",
        kana: "ちのう",
        meaning: "intelligence,brains",
        JLPT: 3
    },
    {
        kanji: "地平線",
        kana: "ちへいせん",
        meaning: "horizon",
        JLPT: 3
    },
    {
        kanji: "地方",
        kana: "ちほう",
        meaning: "area,locality,district,region,the coast",
        JLPT: 3
    },
    {
        kanji: "茶",
        kana: "ちゃ",
        meaning: "tea",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "チャンス",
        meaning: "chance,opportunity",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ちゃんと",
        meaning: "perfectly,properly,exactly",
        JLPT: 3
    },
    {
        kanji: "中",
        kana: "ちゅう",
        meaning: "inside,middle,among",
        JLPT: 3
    },
    {
        kanji: "注",
        kana: "ちゅう",
        meaning: "annotation,explanatory note",
        JLPT: 3
    },
    {
        kanji: "中央",
        kana: "ちゅうおう",
        meaning: "centre,central,center,middle",
        JLPT: 3
    },
    {
        kanji: "中学",
        kana: "ちゅうがく",
        meaning: "middle school,junior high school",
        JLPT: 3
    },
    {
        kanji: "中古",
        kana: "ちゅうこ",
        meaning: "(1) used,second-hand,old",
        JLPT: 3
    },
    {
        kanji: "中止",
        kana: "ちゅうし",
        meaning: "suspension,stoppage,discontinuance,interruption",
        JLPT: 3
    },
    {
        kanji: "駐車",
        kana: "ちゅうしゃ",
        meaning: "parking (e.g. car)",
        JLPT: 3
    },
    {
        kanji: "昼食",
        kana: "ちゅうしょく",
        meaning: "lunch,midday meal",
        JLPT: 3
    },
    {
        kanji: "中心",
        kana: "ちゅうしん",
        meaning: "center,core,heart,pivot,emphasis,balance",
        JLPT: 3
    },
    {
        kanji: "注目",
        kana: "ちゅうもく",
        meaning: "notice,attention,observation",
        JLPT: 3
    },
    {
        kanji: "注文",
        kana: "ちゅうもん",
        meaning: "order,request",
        JLPT: 3
    },
    {
        kanji: "長期",
        kana: "ちょうき",
        meaning: "long time period",
        JLPT: 3
    },
    {
        kanji: "調査",
        kana: "ちょうさ",
        meaning: "investigation,examination,inquiry,survey",
        JLPT: 3
    },
    {
        kanji: "調子",
        kana: "ちょうし",
        meaning: "tune,tone,key",
        JLPT: 3
    },
    {
        kanji: "頂上",
        kana: "ちょうじょう",
        meaning: "top,summit,peak",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ちょうだい",
        meaning: "(1) please do for me (preceded by -te),(2) reception,being given,get",
        JLPT: 3
    },
    {
        kanji: "貯金",
        kana: "ちょきん",
        meaning: "(bank) savings",
        JLPT: 3
    },
    {
        kanji: "直接",
        kana: "ちょくせつ",
        meaning: "direct,immediate,personal,firsthand",
        JLPT: 3
    },
    {
        kanji: "著者",
        kana: "ちょしゃ",
        meaning: "author,writer",
        JLPT: 3
    },
    {
        kanji: "遂に",
        kana: "ついに",
        meaning: "finally,at last",
        JLPT: 3
    },
    {
        kanji: "通過",
        kana: "つうか",
        meaning: "passage through,passing",
        JLPT: 3
    },
    {
        kanji: "通学",
        kana: "つうがく",
        meaning: "commuting to school",
        JLPT: 3
    },
    {
        kanji: "通行",
        kana: "つうこう",
        meaning: "passage,passing",
        JLPT: 3
    },
    {
        kanji: "通じる",
        kana: "つうじる",
        meaning: "to run to,to lead to,to communicate,to understand",
        JLPT: 3
    },
    {
        kanji: "通信",
        kana: "つうしん",
        meaning: "correspondence,communication,news,signal",
        JLPT: 3
    },
    {
        kanji: "捕まる",
        kana: "つかまる",
        meaning: "to be caught,to be arrested",
        JLPT: 3
    },
    {
        kanji: "掴む",
        kana: "つかむ",
        meaning: "to seize,to catch,to grasp",
        JLPT: 3
    },
    {
        kanji: "疲れ",
        kana: "つかれ",
        meaning: "tiredness,fatigue",
        JLPT: 3
    },
    {
        kanji: "月",
        kana: "つき",
        meaning: "moon,month",
        JLPT: 3
    },
    {
        kanji: "付き合い",
        kana: "つきあい",
        meaning: "association,socializing,fellowship",
        JLPT: 3
    },
    {
        kanji: "次々",
        kana: "つぎつぎ",
        meaning: "in succession,one by one",
        JLPT: 3
    },
    {
        kanji: "就く",
        kana: "つく",
        meaning: "to settle in (place),to take (seat, position),to study (under teacher)",
        JLPT: 3
    },
    {
        kanji: "注ぐ",
        kana: "つぐ",
        meaning: "to pour (into),to irrigate,to pay",
        JLPT: 3
    },
    {
        kanji: "付ける",
        kana: "つける",
        meaning: "to attach,to join,to add,to append",
        JLPT: 3
    },
    {
        kanji: "土",
        kana: "つち",
        meaning: "earth,soil",
        JLPT: 3
    },
    {
        kanji: "続き",
        kana: "つづき",
        meaning: "sequel,continuation",
        JLPT: 3
    },
    {
        kanji: "包み",
        kana: "つつみ",
        meaning: "bundle,package,parcel,bale",
        JLPT: 3
    },
    {
        kanji: "勤め",
        kana: "つとめ",
        meaning: "(1) service,duty,business,responsibility,task,(2) Buddhist religious services",
        JLPT: 3
    },
    {
        kanji: "務め",
        kana: "つとめ",
        meaning: "(1) service,duty,(2) Buddhist religious services",
        JLPT: 3
    },
    {
        kanji: "繋ぐ",
        kana: "つなぐ",
        meaning: "to tie,to fasten,to connect,to transfer (phone call)",
        JLPT: 3
    },
    {
        kanji: "常に",
        kana: "つねに",
        meaning: "always,constantly",
        JLPT: 3
    },
    {
        kanji: "翼",
        kana: "つばさ",
        meaning: "wings",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "つまり",
        meaning: "in short,in brief,in other words",
        JLPT: 3
    },
    {
        kanji: "罪",
        kana: "つみ",
        meaning: "crime,fault,indiscretion",
        JLPT: 3
    },
    {
        kanji: "詰める",
        kana: "つめる",
        meaning: "to pack,to shorten,to work out (details)",
        JLPT: 3
    },
    {
        kanji: "積もる",
        kana: "つもる",
        meaning: "to pile up",
        JLPT: 3
    },
    {
        kanji: "梅雨",
        kana: "つゆ",
        meaning: "rainy season,rain during the rainy season",
        JLPT: 3
    },
    {
        kanji: "辛い",
        kana: "つらい",
        meaning: "painful,heart-breaking",
        JLPT: 3
    },
    {
        kanji: "釣",
        kana: "つり",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "連れ",
        kana: "つれ",
        meaning: "companion,company",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "で",
        meaning: "outflow,coming (going) out,graduate (of)",
        JLPT: 3
    },
    {
        kanji: "出会い",
        kana: "であい",
        meaning: "meeting,rendezvous,encounter",
        JLPT: 3
    },
    {
        kanji: "出会う",
        kana: "であう",
        meaning: "to meet by chance,to come across,to happen to encounter",
        JLPT: 3
    },
    {
        kanji: "提案",
        kana: "ていあん",
        meaning: "proposal,proposition,suggestion",
        JLPT: 3
    },
    {
        kanji: "定期",
        kana: "ていき",
        meaning: "fixed term",
        JLPT: 3
    },
    {
        kanji: "抵抗",
        kana: "ていこう",
        meaning: "electrical resistance,resistance,opposition",
        JLPT: 3
    },
    {
        kanji: "提出",
        kana: "ていしゅつ",
        meaning: "presentation,submission,filing",
        JLPT: 3
    },
    {
        kanji: "程度",
        kana: "ていど",
        meaning: "degree,amount,grade,standard,of the order of (following a number)",
        JLPT: 3
    },
    {
        kanji: "停留所",
        kana: "ていりゅうじょ",
        meaning: "bus or tram stop",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "デート",
        meaning: "date,go on a date",
        JLPT: 3
    },
    {
        kanji: "敵",
        kana: "てき",
        meaning: "enemy,rival",
        JLPT: 3
    },
    {
        kanji: "出来事",
        kana: "できごと",
        meaning: "incident,affair,happening,event",
        JLPT: 3
    },
    {
        kanji: "適する",
        kana: "てきする",
        meaning: "to fit,to suit",
        JLPT: 3
    },
    {
        kanji: "適切",
        kana: "てきせつ",
        meaning: "pertinent,appropriate,adequate,relevance",
        JLPT: 3
    },
    {
        kanji: "適度",
        kana: "てきど",
        meaning: "moderate",
        JLPT: 3
    },
    {
        kanji: "適用",
        kana: "てきよう",
        meaning: "applying",
        JLPT: 3
    },
    {
        kanji: "できる",
        kana: "（可能。出現。発生）",
        meaning: "to be able to,to be ready,to occur",
        JLPT: 3
    },
    {
        kanji: "出来るだけ",
        kana: "できるだけ",
        meaning: "if at all possible",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "できれば",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "手品",
        kana: "てじな",
        meaning: "sleight of hand,conjuring trick,magic,juggling",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ですから",
        meaning: "therefore",
        JLPT: 3
    },
    {
        kanji: "鉄",
        kana: "てつ",
        meaning: "iron",
        JLPT: 3
    },
    {
        kanji: "哲学",
        kana: "てつがく",
        meaning: "philosophy",
        JLPT: 3
    },
    {
        kanji: "手伝い",
        kana: "てつだい",
        meaning: "help,helper,assistant",
        JLPT: 3
    },
    {
        kanji: "徹底",
        kana: "てってい",
        meaning: "thoroughness,completeness",
        JLPT: 3
    },
    {
        kanji: "鉄道",
        kana: "てつどう",
        meaning: "railroad",
        JLPT: 3
    },
    {
        kanji: "徹夜",
        kana: "てつや",
        meaning: "all night,all night vigil,sleepless night",
        JLPT: 3
    },
    {
        kanji: "では",
        kana: "では",
        meaning: "chance of going out,opportunity (to succeed),moment of departure,beginning of work",
        JLPT: 3
    },
    {
        kanji: "手間",
        kana: "てま",
        meaning: "time,labour",
        JLPT: 3
    },
    {
        kanji: "でも",
        kana: "でも",
        meaning: "but,however",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "デモ",
        meaning: "(abbr) demo,demonstration",
        JLPT: 3
    },
    {
        kanji: "典型",
        kana: "てんけい",
        meaning: "type,pattern,archetypal",
        JLPT: 3
    },
    {
        kanji: "天候",
        kana: "てんこう",
        meaning: "weather",
        JLPT: 3
    },
    {
        kanji: "電子",
        kana: "でんし",
        meaning: "electron",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "テント",
        meaning: "tent",
        JLPT: 3
    },
    {
        kanji: "伝統",
        kana: "でんとう",
        meaning: "tradition,convention",
        JLPT: 3
    },
    {
        kanji: "天然",
        kana: "てんねん",
        meaning: "nature,spontaneity",
        JLPT: 3
    },
    {
        kanji: "度",
        kana: "ど",
        meaning: "counter for occurrences",
        JLPT: 3
    },
    {
        kanji: "問い",
        kana: "とい",
        meaning: "question,query",
        JLPT: 3
    },
    {
        kanji: "党",
        kana: "とう",
        meaning: "party (political)",
        JLPT: 3
    },
    {
        kanji: "塔",
        kana: "とう",
        meaning: "tower,pagoda",
        JLPT: 3
    },
    {
        kanji: "どう",
        kana: "（接。副）",
        meaning: "child,servant,foolishness",
        JLPT: 3
    },
    {
        kanji: "答案",
        kana: "とうあん",
        meaning: "examination paper,examination script",
        JLPT: 3
    },
    {
        kanji: "同一",
        kana: "どういつ",
        meaning: "identity,sameness,similarity",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "どうか",
        meaning: "copper coin",
        JLPT: 3
    },
    {
        kanji: "当時",
        kana: "とうじ",
        meaning: "at that time,in those days",
        JLPT: 3
    },
    {
        kanji: "動詞",
        kana: "どうし",
        meaning: "verb",
        JLPT: 3
    },
    {
        kanji: "同時",
        kana: "どうじ",
        meaning: "simultaneous(ly),concurrent,same time,synchronous",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "どうしても",
        meaning: "by all means,at any cost,no matter what",
        JLPT: 3
    },
    {
        kanji: "到着",
        kana: "とうちゃく",
        meaning: "arrival",
        JLPT: 3
    },
    {
        kanji: "道徳",
        kana: "どうとく",
        meaning: "morals",
        JLPT: 3
    },
    {
        kanji: "投票",
        kana: "とうひょう",
        meaning: "voting,poll",
        JLPT: 3
    },
    {
        kanji: "同様",
        kana: "どうよう",
        meaning: "identical,equal to,same (kind),like",
        JLPT: 3
    },
    {
        kanji: "同僚",
        kana: "どうりょう",
        meaning: "coworker,colleague,associate",
        JLPT: 3
    },
    {
        kanji: "道路",
        kana: "どうろ",
        meaning: "road,highway",
        JLPT: 3
    },
    {
        kanji: "十",
        kana: "とお",
        meaning: "10,ten",
        JLPT: 3
    },
    {
        kanji: "通す",
        kana: "とおす",
        meaning: "to let pass,to overlook,to continue",
        JLPT: 3
    },
    {
        kanji: "通り",
        kana: "とおり",
        meaning: "in accordance with ~,following ~,~ Street,~ Avenue",
        JLPT: 3
    },
    {
        kanji: "通り過ぎる",
        kana: "とおりすぎる",
        meaning: "to pass,to pass through",
        JLPT: 3
    },
    {
        kanji: "都会",
        kana: "とかい",
        meaning: "city",
        JLPT: 3
    },
    {
        kanji: "時",
        kana: "とき",
        meaning: "(1) time,hour,(2) occasion,moment",
        JLPT: 3
    },
    {
        kanji: "解く",
        kana: "とく",
        meaning: "to unfasten",
        JLPT: 3
    },
    {
        kanji: "毒",
        kana: "どく",
        meaning: "poison,toxicant",
        JLPT: 3
    },
    {
        kanji: "得意",
        kana: "とくい",
        meaning: "pride,triumph,prosperity",
        JLPT: 3
    },
    {
        kanji: "読書",
        kana: "どくしょ",
        meaning: "reading",
        JLPT: 3
    },
    {
        kanji: "独身",
        kana: "どくしん",
        meaning: "bachelorhood,single,unmarried,celibate",
        JLPT: 3
    },
    {
        kanji: "特徴",
        kana: "とくちょう",
        meaning: "feature,characteristic",
        JLPT: 3
    },
    {
        kanji: "独特",
        kana: "どくとく",
        meaning: "peculiarity,uniqueness,characteristic",
        JLPT: 3
    },
    {
        kanji: "独立",
        kana: "どくりつ",
        meaning: "independence (e.g. Ind. Day),self-support",
        JLPT: 3
    },
    {
        kanji: "解ける",
        kana: "とける",
        meaning: "to come untied,to come apart",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "どこか",
        meaning: "somewhere,anywhere",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ところが",
        meaning: "however,while,even if",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ところで",
        meaning: "by the way,even if,no matter what",
        JLPT: 3
    },
    {
        kanji: "登山",
        kana: "とざん",
        meaning: "mountain-climbing",
        JLPT: 3
    },
    {
        kanji: "都市",
        kana: "とし",
        meaning: "town,city,municipal,urban",
        JLPT: 3
    },
    {
        kanji: "年月",
        kana: "としつき",
        meaning: "months and years",
        JLPT: 3
    },
    {
        kanji: "図書",
        kana: "としょ",
        meaning: "books",
        JLPT: 3
    },
    {
        kanji: "年寄",
        kana: "としより",
        meaning: "old people,the aged",
        JLPT: 3
    },
    {
        kanji: "閉じる",
        kana: "とじる",
        meaning: "to close (e.g. book, eyes),to shut",
        JLPT: 3
    },
    {
        kanji: "途端",
        kana: "とたん",
        meaning: "just (now, at the moment, etc.)",
        JLPT: 3
    },
    {
        kanji: "土地",
        kana: "とち",
        meaning: "plot of land,lot,soil",
        JLPT: 3
    },
    {
        kanji: "突然",
        kana: "とつぜん",
        meaning: "abruptly,suddenly,unexpectedly,all at once",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "トップ",
        meaning: "top",
        JLPT: 3
    },
    {
        kanji: "届く",
        kana: "とどく",
        meaning: "to reach",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "とにかく",
        meaning: "anyhow,at any rate,anyway,somehow or other,generally speaking,in any case",
        JLPT: 3
    },
    {
        kanji: "飛ばす",
        kana: "とばす",
        meaning: "to skip over,to omit",
        JLPT: 3
    },
    {
        kanji: "飛び出す",
        kana: "とびだす",
        meaning: "to jump out,to rush out,to fly out",
        JLPT: 3
    },
    {
        kanji: "留める",
        kana: "とめる",
        meaning: "to fasten,to turn off,to detain",
        JLPT: 3
    },
    {
        kanji: "友",
        kana: "とも",
        meaning: "friend,companion,pal",
        JLPT: 3
    },
    {
        kanji: "共に",
        kana: "ともに",
        meaning: "sharing with,participate in",
        JLPT: 3
    },
    {
        kanji: "土曜",
        kana: "どよう",
        meaning: "Saturday",
        JLPT: 3
    },
    {
        kanji: "虎",
        kana: "とら",
        meaning: "tiger",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ドライブ",
        meaning: "drive,trip by car,driving",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "トラック",
        meaning: "(1) truck,(2) (running) track",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ドラマ",
        meaning: "drama",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "トランプ",
        meaning: "playing cards (lit: trump)",
        JLPT: 3
    },
    {
        kanji: "取り上げる",
        kana: "とりあげる",
        meaning: "to take up,to pick up,to disqualify,to confiscate,to deprive",
        JLPT: 3
    },
    {
        kanji: "努力",
        kana: "どりょく",
        meaning: "great effort,exertion,endeavour,effort",
        JLPT: 3
    },
    {
        kanji: "どれ",
        kana: "どれ",
        meaning: "well,now,let me see,which (of three or more)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ドレス",
        meaning: "dress",
        JLPT: 3
    },
    {
        kanji: "取れる",
        kana: "とれる",
        meaning: "to come off,to be taken off,to be removed",
        JLPT: 3
    },
    {
        kanji: "泥",
        kana: "どろ",
        meaning: "mud",
        JLPT: 3
    },
    {
        kanji: "とん",
        kana: "（1000",
        meaning: "ton",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "とんでもない",
        meaning: "unexpected,offensive,What a thing to say!,No way!",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "どんな",
        meaning: "what,what kind of",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "どんなに",
        meaning: "how,how much",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "トンネル",
        meaning: "tunnel",
        JLPT: 3
    },
    {
        kanji: "名",
        kana: "な",
        meaning: "name,reputation",
        JLPT: 3
    },
    {
        kanji: "内容",
        kana: "ないよう",
        meaning: "subject,contents,matter,substance,detail,import",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "なお",
        meaning: "straight,mischief,ordinary,common",
        JLPT: 3
    },
    {
        kanji: "仲",
        kana: "なか",
        meaning: "relation,relationship",
        JLPT: 3
    },
    {
        kanji: "流す",
        kana: "ながす",
        meaning: "to drain,to float,to shed (blood, tears),to cruise (e.g. taxi)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "なかなか",
        meaning: "very,considerably,easily",
        JLPT: 3
    },
    {
        kanji: "半ば",
        kana: "なかば",
        meaning: "middle,half,semi,halfway,partly",
        JLPT: 3
    },
    {
        kanji: "仲間",
        kana: "なかま",
        meaning: "company,fellow,colleague,associate",
        JLPT: 3
    },
    {
        kanji: "眺め",
        kana: "ながめ",
        meaning: "scene,view,prospect,outlook",
        JLPT: 3
    },
    {
        kanji: "眺める",
        kana: "ながめる",
        meaning: "to view,to gaze at",
        JLPT: 3
    },
    {
        kanji: "流れ",
        kana: "ながれ",
        meaning: "stream,current",
        JLPT: 3
    },
    {
        kanji: "流れる",
        kana: "ながれる",
        meaning: "to stream,to flow,to run (ink),to be washed away",
        JLPT: 3
    },
    {
        kanji: "無し",
        kana: "なし",
        meaning: "without",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "なぜなら",
        meaning: "because",
        JLPT: 3
    },
    {
        kanji: "謎",
        kana: "なぞ",
        meaning: "riddle,puzzle,enigma",
        JLPT: 3
    },
    {
        kanji: "納得",
        kana: "なっとく",
        meaning: "consent,assent,understanding",
        JLPT: 3
    },
    {
        kanji: "等",
        kana: "など",
        meaning: "et cetera,etc.,and the like",
        JLPT: 3
    },
    {
        kanji: "七",
        kana: "なな",
        meaning: "seven",
        JLPT: 3
    },
    {
        kanji: "何",
        kana: "なに",
        meaning: "what",
        JLPT: 3
    },
    {
        kanji: "何",
        kana: "なん",
        meaning: "what",
        JLPT: 3
    },
    {
        kanji: "何か",
        kana: "なにか",
        meaning: "something",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "なにも",
        meaning: "nothing",
        JLPT: 3
    },
    {
        kanji: "鍋",
        kana: "なべ",
        meaning: "saucepan,pot",
        JLPT: 3
    },
    {
        kanji: "生",
        kana: "なま",
        meaning: "(1) draft (beer),(2) raw,unprocessed",
        JLPT: 3
    },
    {
        kanji: "怠ける",
        kana: "なまける",
        meaning: "to be idle,to neglect",
        JLPT: 3
    },
    {
        kanji: "波",
        kana: "なみ",
        meaning: "wave",
        JLPT: 3
    },
    {
        kanji: "涙",
        kana: "なみだ",
        meaning: "tear",
        JLPT: 3
    },
    {
        kanji: "悩む",
        kana: "なやむ",
        meaning: "to be worried,to be troubled",
        JLPT: 3
    },
    {
        kanji: "為る",
        kana: "なる",
        meaning: "to change,to be of use,to reach to",
        JLPT: 3
    },
    {
        kanji: "成る",
        kana: "なる",
        meaning: "to become",
        JLPT: 3
    },
    {
        kanji: "縄",
        kana: "なわ",
        meaning: "rope,hemp",
        JLPT: 3
    },
    {
        kanji: "何で",
        kana: "なんで",
        meaning: "Why?,What for?",
        JLPT: 3
    },
    {
        kanji: "何でも",
        kana: "なんでも",
        meaning: "by all means,everything",
        JLPT: 3
    },
    {
        kanji: "何とか",
        kana: "なんとか",
        meaning: "somehow,anyhow,one way or another",
        JLPT: 3
    },
    {
        kanji: "似合う",
        kana: "にあう",
        meaning: "to suit,to match,to become,to be like",
        JLPT: 3
    },
    {
        kanji: "匂い",
        kana: "におい",
        meaning: "odour,scent,smell,stench",
        JLPT: 3
    },
    {
        kanji: "苦手",
        kana: "にがて",
        meaning: "poor (at),weak (in),dislike (of)",
        JLPT: 3
    },
    {
        kanji: "握る",
        kana: "にぎる",
        meaning: "to grasp,to seize,to mould sushi",
        JLPT: 3
    },
    {
        kanji: "日",
        kana: "にち",
        meaning: "sun,sunshine,day",
        JLPT: 3
    },
    {
        kanji: "日常",
        kana: "にちじょう",
        meaning: "ordinary,regular,everyday,usual",
        JLPT: 3
    },
    {
        kanji: "日曜",
        kana: "にちよう",
        meaning: "Sunday",
        JLPT: 3
    },
    {
        kanji: "日光",
        kana: "にっこう",
        meaning: "sunlight",
        JLPT: 3
    },
    {
        kanji: "日中",
        kana: "にっちゅう",
        meaning: "daytime,broad daylight",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "にっこり",
        meaning: "smile sweetly,smile,grin",
        JLPT: 3
    },
    {
        kanji: "日本",
        kana: "にっぽん",
        meaning: "Japan",
        JLPT: 3
    },
    {
        kanji: "日本",
        kana: "にほん",
        meaning: "Japan",
        JLPT: 3
    },
    {
        kanji: "入院",
        kana: "にゅういん",
        meaning: "hospitalization",
        JLPT: 3
    },
    {
        kanji: "入学",
        kana: "にゅうがく",
        meaning: "entry to school or university,matriculation",
        JLPT: 3
    },
    {
        kanji: "入場",
        kana: "にゅうじょう",
        meaning: "entrance,admission,entering",
        JLPT: 3
    },
    {
        kanji: "人気",
        kana: "にんき",
        meaning: "sign of life",
        JLPT: 3
    },
    {
        kanji: "人間",
        kana: "にんげん",
        meaning: "human being,man,person",
        JLPT: 3
    },
    {
        kanji: "抜く",
        kana: "ぬく",
        meaning: "to extract,to omit,to surpass,to draw out,to unplug",
        JLPT: 3
    },
    {
        kanji: "抜ける",
        kana: "ぬける",
        meaning: "to come out,to fall out,to be omitted",
        JLPT: 3
    },
    {
        kanji: "布",
        kana: "ぬの",
        meaning: "cloth",
        JLPT: 3
    },
    {
        kanji: "濡れる",
        kana: "ぬれる",
        meaning: "to get wet",
        JLPT: 3
    },
    {
        kanji: "根",
        kana: "ね",
        meaning: "root",
        JLPT: 3
    },
    {
        kanji: "値",
        kana: "ね",
        meaning: "value,price,cost",
        JLPT: 3
    },
    {
        kanji: "願い",
        kana: "ねがい",
        meaning: "desire,wish,request",
        JLPT: 3
    },
    {
        kanji: "願う",
        kana: "ねがう",
        meaning: "to desire,to wish,to request",
        JLPT: 3
    },
    {
        kanji: "鼠",
        kana: "ねずみ",
        meaning: "(1) mouse,rat,(2) dark gray,slate color",
        JLPT: 3
    },
    {
        kanji: "値段",
        kana: "ねだん",
        meaning: "price,cost",
        JLPT: 3
    },
    {
        kanji: "熱心",
        kana: "ねっしん",
        meaning: "zeal,enthusiasm",
        JLPT: 3
    },
    {
        kanji: "熱帯",
        kana: "ねったい",
        meaning: "tropics",
        JLPT: 3
    },
    {
        kanji: "熱中",
        kana: "ねっちゅう",
        meaning: "nuts!,enthusiasm,zeal,mania",
        JLPT: 3
    },
    {
        kanji: "年間",
        kana: "ねんかん",
        meaning: "year",
        JLPT: 3
    },
    {
        kanji: "年月",
        kana: "ねんげつ",
        meaning: "months and years",
        JLPT: 3
    },
    {
        kanji: "年中",
        kana: "ねんじゅう",
        meaning: "whole year,always,everyday",
        JLPT: 3
    },
    {
        kanji: "年代",
        kana: "ねんだい",
        meaning: "age,era,period,date",
        JLPT: 3
    },
    {
        kanji: "年齢",
        kana: "ねんれい",
        meaning: "age,years",
        JLPT: 3
    },
    {
        kanji: "野",
        kana: "の",
        meaning: "field",
        JLPT: 3
    },
    {
        kanji: "能",
        kana: "のう",
        meaning: "being skilled in,nicely,properly",
        JLPT: 3
    },
    {
        kanji: "農家",
        kana: "のうか",
        meaning: "farmer,farm family",
        JLPT: 3
    },
    {
        kanji: "農業",
        kana: "のうぎょう",
        meaning: "agriculture",
        JLPT: 3
    },
    {
        kanji: "農民",
        kana: "のうみん",
        meaning: "farmers,peasants",
        JLPT: 3
    },
    {
        kanji: "能力",
        kana: "のうりょく",
        meaning: "ability,faculty",
        JLPT: 3
    },
    {
        kanji: "ノー",
        kana: "（no）",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "軒",
        kana: "のき",
        meaning: "eaves",
        JLPT: 3
    },
    {
        kanji: "残す",
        kana: "のこす",
        meaning: "to leave (behind, over),to bequeath,to save,to reserve",
        JLPT: 3
    },
    {
        kanji: "残り",
        kana: "のこり",
        meaning: "remnant,residue,remaining,left-over",
        JLPT: 3
    },
    {
        kanji: "乗せる",
        kana: "のせる",
        meaning: "to place on (something),to take on board,to give a ride",
        JLPT: 3
    },
    {
        kanji: "除く",
        kana: "のぞく",
        meaning: "to remove,to exclude,to except",
        JLPT: 3
    },
    {
        kanji: "望み",
        kana: "のぞみ",
        meaning: "wish,desire,(a) hope",
        JLPT: 3
    },
    {
        kanji: "望む",
        kana: "のぞむ",
        meaning: "to desire,to wish for,to see,to command (a view of)",
        JLPT: 3
    },
    {
        kanji: "後",
        kana: "のち",
        meaning: "afterwards,since then,in the future",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ノック",
        meaning: "(1) knock,(2) fungo (baseball)",
        JLPT: 3
    },
    {
        kanji: "喉",
        kana: "のど",
        meaning: "throat",
        JLPT: 3
    },
    {
        kanji: "伸ばす",
        kana: "のばす",
        meaning: "to lengthen,to stretch,to reach out,to grow (beard)",
        JLPT: 3
    },
    {
        kanji: "伸びる",
        kana: "のびる",
        meaning: "to stretch,to extend,to make progress,to grow (beard, body height)",
        JLPT: 3
    },
    {
        kanji: "述べる",
        kana: "のべる",
        meaning: "to state,to express,to mention",
        JLPT: 3
    },
    {
        kanji: "昇る",
        kana: "のぼる",
        meaning: "to arise,to ascend,to go up",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "のんびり",
        meaning: "carefree,at leisure",
        JLPT: 3
    },
    {
        kanji: "場",
        kana: "ば",
        meaning: "place,field (physics)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "パーセント",
        meaning: "percent",
        JLPT: 3
    },
    {
        kanji: "灰",
        kana: "はい",
        meaning: "ash",
        JLPT: 3
    },
    {
        kanji: "梅雨",
        kana: "ばいう",
        meaning: "rainy season,rain during the rainy season",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "バイオリン",
        meaning: "violin",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ハイキング",
        meaning: "hiking",
        JLPT: 3
    },
    {
        kanji: "配達",
        kana: "はいたつ",
        meaning: "delivery,distribution",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "パイプ",
        meaning: "(1) pipe,tube,(2) channels, official or otherwise",
        JLPT: 3
    },
    {
        kanji: "俳優",
        kana: "はいゆう",
        meaning: "actor,actress,player,performer",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "パイロット",
        meaning: "pilot",
        JLPT: 3
    },
    {
        kanji: "墓",
        kana: "はか",
        meaning: "grave,tomb",
        JLPT: 3
    },
    {
        kanji: "馬鹿",
        kana: "ばか",
        meaning: "fool,idiot,trivial matter,folly",
        JLPT: 3
    },
    {
        kanji: "博士",
        kana: "はかせ",
        meaning: "doctorate,PhD",
        JLPT: 3
    },
    {
        kanji: "計る",
        kana: "はかる",
        meaning: "to measure,to weigh,to survey",
        JLPT: 3
    },
    {
        kanji: "履く",
        kana: "はく",
        meaning: "to wear,to put on (lower body)",
        JLPT: 3
    },
    {
        kanji: "吐く",
        kana: "はく",
        meaning: "(1) to breathe,(2) to tell (lies),(3) to vomit,to disgorge",
        JLPT: 3
    },
    {
        kanji: "拍手",
        kana: "はくしゅ",
        meaning: "clapping hands,applause",
        JLPT: 3
    },
    {
        kanji: "莫大",
        kana: "ばくだい",
        meaning: "enormous,vast",
        JLPT: 3
    },
    {
        kanji: "爆発",
        kana: "ばくはつ",
        meaning: "explosion,detonation,eruption",
        JLPT: 3
    },
    {
        kanji: "博物館",
        kana: "はくぶつかん",
        meaning: "museum",
        JLPT: 3
    },
    {
        kanji: "激しい",
        kana: "はげしい",
        meaning: "violent,vehement,intense",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "はさみ",
        meaning: "scissors",
        JLPT: 3
    },
    {
        kanji: "破産",
        kana: "はさん",
        meaning: "(personal) bankruptcy",
        JLPT: 3
    },
    {
        kanji: "端",
        kana: "はし",
        meaning: "end (e.g. of street),edge,tip,margin,point",
        JLPT: 3
    },
    {
        kanji: "始まり",
        kana: "はじまり",
        meaning: "origin,beginning",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "パス",
        meaning: "path,pass (in games)",
        JLPT: 3
    },
    {
        kanji: "外す",
        kana: "はずす",
        meaning: "to unfasten,to remove",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "パスポート",
        meaning: "passport",
        JLPT: 3
    },
    {
        kanji: "旗",
        kana: "はた",
        meaning: "flag",
        JLPT: 3
    },
    {
        kanji: "肌",
        kana: "はだ",
        meaning: "skin",
        JLPT: 3
    },
    {
        kanji: "裸",
        kana: "はだか",
        meaning: "naked,nude",
        JLPT: 3
    },
    {
        kanji: "畑",
        kana: "はたけ",
        meaning: "field",
        JLPT: 3
    },
    {
        kanji: "二十",
        kana: "はたち",
        meaning: "20 years old,20th year",
        JLPT: 3
    },
    {
        kanji: "働き",
        kana: "はたらき",
        meaning: "work,labor",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "バッグ",
        meaning: "bag,bug",
        JLPT: 3
    },
    {
        kanji: "発見",
        kana: "はっけん",
        meaning: "discovery,detection,finding",
        JLPT: 3
    },
    {
        kanji: "発行",
        kana: "はっこう",
        meaning: "issue (publications)",
        JLPT: 3
    },
    {
        kanji: "発車",
        kana: "はっしゃ",
        meaning: "departure of a vehicle",
        JLPT: 3
    },
    {
        kanji: "罰する",
        kana: "ばっする",
        meaning: "to punish,to penalize",
        JLPT: 3
    },
    {
        kanji: "発達",
        kana: "はったつ",
        meaning: "development,growth",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ばったり",
        meaning: "with a clash (thud),with a bang,plump,flop",
        JLPT: 3
    },
    {
        kanji: "発展",
        kana: "はってん",
        meaning: "development,growth",
        JLPT: 3
    },
    {
        kanji: "発表",
        kana: "はっぴょう",
        meaning: "announcement,publication",
        JLPT: 3
    },
    {
        kanji: "発明",
        kana: "はつめい",
        meaning: "invention",
        JLPT: 3
    },
    {
        kanji: "話し合う",
        kana: "はなしあう",
        meaning: "to discuss,to talk together",
        JLPT: 3
    },
    {
        kanji: "離す",
        kana: "はなす",
        meaning: "to part,divide,separate",
        JLPT: 3
    },
    {
        kanji: "放す",
        kana: "はなす",
        meaning: "to separate,to set free",
        JLPT: 3
    },
    {
        kanji: "離れる",
        kana: "はなれる",
        meaning: "to be separated from,to leave,to go away,to be a long way off",
        JLPT: 3
    },
    {
        kanji: "羽",
        kana: "はね",
        meaning: "counter for birds,counter for rabbits",
        JLPT: 3
    },
    {
        kanji: "幅",
        kana: "はば",
        meaning: "width,breadth",
        JLPT: 3
    },
    {
        kanji: "母親",
        kana: "ははおや",
        meaning: "mother",
        JLPT: 3
    },
    {
        kanji: "省く",
        kana: "はぶく",
        meaning: "to omit,to eliminate,to curtail,to economize",
        JLPT: 3
    },
    {
        kanji: "場面",
        kana: "ばめん",
        meaning: "scene,setting (e.g. of novel)",
        JLPT: 3
    },
    {
        kanji: "腹",
        kana: "はら",
        meaning: "abdomen,belly,stomach",
        JLPT: 3
    },
    {
        kanji: "原",
        kana: "はら",
        meaning: "field,plain,prairie,tundra,moor,wilderness",
        JLPT: 3
    },
    {
        kanji: "針",
        kana: "はり",
        meaning: "needle,hand (e.g. clock)",
        JLPT: 3
    },
    {
        kanji: "張る",
        kana: "はる",
        meaning: "to stick,to paste",
        JLPT: 3
    },
    {
        kanji: "番",
        kana: "ばん",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "バン",
        meaning: "bun,van (caravan),VAN (value-added network)",
        JLPT: 3
    },
    {
        kanji: "範囲",
        kana: "はんい",
        meaning: "extent,scope,sphere,range",
        JLPT: 3
    },
    {
        kanji: "反抗",
        kana: "はんこう",
        meaning: "opposition,resistance",
        JLPT: 3
    },
    {
        kanji: "犯罪",
        kana: "はんざい",
        meaning: "crime",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ハンサム",
        meaning: "handsome",
        JLPT: 3
    },
    {
        kanji: "判断",
        kana: "はんだん",
        meaning: "judgement,decision",
        JLPT: 3
    },
    {
        kanji: "犯人",
        kana: "はんにん",
        meaning: "offender,criminal",
        JLPT: 3
    },
    {
        kanji: "販売",
        kana: "はんばい",
        meaning: "sale,selling,marketing",
        JLPT: 3
    },
    {
        kanji: "灯",
        kana: "ひ",
        meaning: "light",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ビール",
        meaning: "beer",
        JLPT: 3
    },
    {
        kanji: "被害",
        kana: "ひがい",
        meaning: "damage",
        JLPT: 3
    },
    {
        kanji: "比較",
        kana: "ひかく",
        meaning: "comparison",
        JLPT: 3
    },
    {
        kanji: "轢く",
        kana: "ひく",
        meaning: "to run somebody over (with vehicle),to knock someone down",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ピクニック",
        meaning: "picnic",
        JLPT: 3
    },
    {
        kanji: "悲劇",
        kana: "ひげき",
        meaning: "tragedy",
        JLPT: 3
    },
    {
        kanji: "飛行",
        kana: "ひこう",
        meaning: "aviation",
        JLPT: 3
    },
    {
        kanji: "膝",
        kana: "ひざ",
        meaning: "knee,lap",
        JLPT: 3
    },
    {
        kanji: "非常",
        kana: "ひじょう",
        meaning: "emergency,extraordinary,unusual",
        JLPT: 3
    },
    {
        kanji: "美人",
        kana: "びじん",
        meaning: "beautiful person (woman)",
        JLPT: 3
    },
    {
        kanji: "額",
        kana: "ひたい",
        meaning: "forehead,brow",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "びっくり",
        meaning: "be surprised,be amazed,be frightened,astonishment",
        JLPT: 3
    },
    {
        kanji: "日付",
        kana: "ひづけ",
        meaning: "date,dating",
        JLPT: 3
    },
    {
        kanji: "必死",
        kana: "ひっし",
        meaning: "inevitable death,desperation,frantic,inevitable result",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ぴったり",
        meaning: "exactly,neatly,sharp",
        JLPT: 3
    },
    {
        kanji: "引っ張る",
        kana: "ひっぱる",
        meaning: "(1) to pull,to draw,to stretch,to drag,(2) to pull the ball (baseball)",
        JLPT: 3
    },
    {
        kanji: "否定",
        kana: "ひてい",
        meaning: "negation,denial,repudiation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ビデオ",
        meaning: "video",
        JLPT: 3
    },
    {
        kanji: "一言",
        kana: "ひとこと",
        meaning: "single word",
        JLPT: 3
    },
    {
        kanji: "人込み",
        kana: "ひとごみ",
        meaning: "crowd of people",
        JLPT: 3
    },
    {
        kanji: "等しい",
        kana: "ひとしい",
        meaning: "equal",
        JLPT: 3
    },
    {
        kanji: "独り",
        kana: "ひとり",
        meaning: "alone,unmarried",
        JLPT: 3
    },
    {
        kanji: "一人一人",
        kana: "ひとりひとり",
        meaning: "one by one,each,one at a time",
        JLPT: 3
    },
    {
        kanji: "批判",
        kana: "ひはん",
        meaning: "criticism,judgement,comment",
        JLPT: 3
    },
    {
        kanji: "批評",
        kana: "ひひょう",
        meaning: "criticism,review,commentary",
        JLPT: 3
    },
    {
        kanji: "秘密",
        kana: "ひみつ",
        meaning: "secret,secrecy",
        JLPT: 3
    },
    {
        kanji: "微妙",
        kana: "びみょう",
        meaning: "delicate,subtle",
        JLPT: 3
    },
    {
        kanji: "紐",
        kana: "ひも",
        meaning: "(1) string,cord,(2) pimp",
        JLPT: 3
    },
    {
        kanji: "費用",
        kana: "ひよう",
        meaning: "cost,expense",
        JLPT: 3
    },
    {
        kanji: "表",
        kana: "ひょう",
        meaning: "table (e.g. Tab 1),chart,list",
        JLPT: 3
    },
    {
        kanji: "秒",
        kana: "びょう",
        meaning: "second (60th min)",
        JLPT: 3
    },
    {
        kanji: "評価",
        kana: "ひょうか",
        meaning: "valuation,estimation,assessment,evaluation",
        JLPT: 3
    },
    {
        kanji: "表現",
        kana: "ひょうげん",
        meaning: "expression,presentation,representation (math)",
        JLPT: 3
    },
    {
        kanji: "表情",
        kana: "ひょうじょう",
        meaning: "facial expression",
        JLPT: 3
    },
    {
        kanji: "平等",
        kana: "びょうどう",
        meaning: "equality (a),impartiality,evenness",
        JLPT: 3
    },
    {
        kanji: "評判",
        kana: "ひょうばん",
        meaning: "fame,reputation,popularity,arrant",
        JLPT: 3
    },
    {
        kanji: "表面",
        kana: "ひょうめん",
        meaning: "surface,outside,face,appearance",
        JLPT: 3
    },
    {
        kanji: "広がる",
        kana: "ひろがる",
        meaning: "to spread (out),to extend,to stretch,to reach to,to get around",
        JLPT: 3
    },
    {
        kanji: "品",
        kana: "ひん",
        meaning: "thing,article,goods,dignity,article (goods),counter for meal courses",
        JLPT: 3
    },
    {
        kanji: "瓶",
        kana: "びん",
        meaning: "bottle",
        JLPT: 3
    },
    {
        kanji: "便",
        kana: "びん",
        meaning: "way,means",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ピン",
        meaning: "pin",
        JLPT: 3
    },
    {
        kanji: "不",
        kana: "ふ",
        meaning: "un,non,negative prefix",
        JLPT: 3
    },
    {
        kanji: "不",
        kana: "ぶ",
        meaning: "un,non,negative prefix",
        JLPT: 3
    },
    {
        kanji: "無",
        kana: "ぶ",
        meaning: "nothing,naught,nil,zero",
        JLPT: 3
    },
    {
        kanji: "分",
        kana: "ぶ",
        meaning: "dividing,part",
        JLPT: 3
    },
    {
        kanji: "不安",
        kana: "ふあん",
        meaning: "anxiety,uneasiness,insecurity,suspense",
        JLPT: 3
    },
    {
        kanji: "風景",
        kana: "ふうけい",
        meaning: "scenery",
        JLPT: 3
    },
    {
        kanji: "夫婦",
        kana: "ふうふ",
        meaning: "married couple,husband and wife",
        JLPT: 3
    },
    {
        kanji: "笛",
        kana: "ふえ",
        meaning: "flute,pipe",
        JLPT: 3
    },
    {
        kanji: "不可",
        kana: "ふか",
        meaning: "wrong,bad,improper,unjustifiable,inadvisable",
        JLPT: 3
    },
    {
        kanji: "武器",
        kana: "ぶき",
        meaning: "weapon,arms,ordinance",
        JLPT: 3
    },
    {
        kanji: "服装",
        kana: "ふくそう",
        meaning: "garments",
        JLPT: 3
    },
    {
        kanji: "含む",
        kana: "ふくむ",
        meaning: "to hold in the mouth,to bear in mind",
        JLPT: 3
    },
    {
        kanji: "袋",
        kana: "ふくろ",
        meaning: "bag,sack",
        JLPT: 3
    },
    {
        kanji: "不幸",
        kana: "ふこう",
        meaning: "unhappiness,sorrow,misfortune,disaster,accident,death",
        JLPT: 3
    },
    {
        kanji: "節",
        kana: "ふし",
        meaning: "tune,tone,knot,knob,point",
        JLPT: 3
    },
    {
        kanji: "無事",
        kana: "ぶじ",
        meaning: "safety,peace,quietness",
        JLPT: 3
    },
    {
        kanji: "不思議",
        kana: "ふしぎ",
        meaning: "mystery,curiosity",
        JLPT: 3
    },
    {
        kanji: "不自由",
        kana: "ふじゆう",
        meaning: "discomfort,disability,inconvenience,destitution",
        JLPT: 3
    },
    {
        kanji: "夫人",
        kana: "ふじん",
        meaning: "wife,Mrs,madam",
        JLPT: 3
    },
    {
        kanji: "婦人",
        kana: "ふじん",
        meaning: "woman,female",
        JLPT: 3
    },
    {
        kanji: "不正",
        kana: "ふせい",
        meaning: "injustice,unfairness",
        JLPT: 3
    },
    {
        kanji: "防ぐ",
        kana: "ふせぐ",
        meaning: "to defend (against),to protect,to prevent",
        JLPT: 3
    },
    {
        kanji: "不足",
        kana: "ふそく",
        meaning: "insufficiency,shortage,deficiency,lack,dearth",
        JLPT: 3
    },
    {
        kanji: "舞台",
        kana: "ぶたい",
        meaning: "stage (theatre)",
        JLPT: 3
    },
    {
        kanji: "双子",
        kana: "ふたご",
        meaning: "twins,a twin",
        JLPT: 3
    },
    {
        kanji: "再び",
        kana: "ふたたび",
        meaning: "again,once more,a second time",
        JLPT: 3
    },
    {
        kanji: "普段",
        kana: "ふだん",
        meaning: "usually,habitually,ordinarily,always",
        JLPT: 3
    },
    {
        kanji: "縁",
        kana: "ふち",
        meaning: "a means, e.g. of living",
        JLPT: 3
    },
    {
        kanji: "打つ",
        kana: "ぶつ",
        meaning: "to hit,to strike",
        JLPT: 3
    },
    {
        kanji: "物価",
        kana: "ぶっか",
        meaning: "prices of commodities,prices (in general)",
        JLPT: 3
    },
    {
        kanji: "物質",
        kana: "ぶっしつ",
        meaning: "material,substance",
        JLPT: 3
    },
    {
        kanji: "物理",
        kana: "ぶつり",
        meaning: "physics",
        JLPT: 3
    },
    {
        kanji: "筆",
        kana: "ふで",
        meaning: "writing brush",
        JLPT: 3
    },
    {
        kanji: "ふと",
        kana: "（副）",
        meaning: "suddenly,casually,accidentally,incidentally,unexpectedly,unintentionally",
        JLPT: 3
    },
    {
        kanji: "船",
        kana: "ふね",
        meaning: "ship,boat,watercraft,shipping,vessel,steamship",
        JLPT: 3
    },
    {
        kanji: "部分",
        kana: "ぶぶん",
        meaning: "portion,section,part",
        JLPT: 3
    },
    {
        kanji: "不平",
        kana: "ふへい",
        meaning: "complaint,discontent,dissatisfaction",
        JLPT: 3
    },
    {
        kanji: "不満",
        kana: "ふまん",
        meaning: "dissatisfaction,displeasure,discontent,complaints,unhappiness",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "プラス",
        meaning: "plus",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "プラン",
        meaning: "plan",
        JLPT: 3
    },
    {
        kanji: "不利",
        kana: "ふり",
        meaning: "disadvantage,handicap,unfavorable,drawback",
        JLPT: 3
    },
    {
        kanji: "振る",
        kana: "ふる",
        meaning: "(1) to wave,to shake,to swing,(2) to sprinkle,(3) to cast (actor),to allocate (work)",
        JLPT: 3
    },
    {
        kanji: "震える",
        kana: "ふるえる",
        meaning: "to shiver,to shake,to quake",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ブレーキ",
        meaning: "a brake",
        JLPT: 3
    },
    {
        kanji: "触れる",
        kana: "ふれる",
        meaning: "to touch,to be touched,to touch on a subject,to feel,to violate (law, copyright, etc.),to perceive,t",
        JLPT: 3
    },
    {
        kanji: "風呂",
        kana: "ふろ",
        meaning: "bath",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "プロ",
        meaning: "professional",
        JLPT: 3
    },
    {
        kanji: "分",
        kana: "ぶん",
        meaning: "dividing,part,segment",
        JLPT: 3
    },
    {
        kanji: "文",
        kana: "ぶん",
        meaning: "sentence",
        JLPT: 3
    },
    {
        kanji: "雰囲気",
        kana: "ふんいき",
        meaning: "atmosphere (e.g. musical),mood,ambience",
        JLPT: 3
    },
    {
        kanji: "分析",
        kana: "ぶんせき",
        meaning: "analysis",
        JLPT: 3
    },
    {
        kanji: "文明",
        kana: "ぶんめい",
        meaning: "civilization,culture",
        JLPT: 3
    },
    {
        kanji: "分野",
        kana: "ぶんや",
        meaning: "field,sphere,realm,division,branch",
        JLPT: 3
    },
    {
        kanji: "塀",
        kana: "へい",
        meaning: "wall,fence",
        JLPT: 3
    },
    {
        kanji: "平均",
        kana: "へいきん",
        meaning: "equilibrium,balance,average,mean",
        JLPT: 3
    },
    {
        kanji: "平和",
        kana: "へいわ",
        meaning: "peace,harmony",
        JLPT: 3
    },
    {
        kanji: "別に",
        kana: "べつに",
        meaning: "(not) particularly,nothing",
        JLPT: 3
    },
    {
        kanji: "減らす",
        kana: "へらす",
        meaning: "to abate,to decrease,to diminish,to shorten",
        JLPT: 3
    },
    {
        kanji: "減る",
        kana: "へる",
        meaning: "to decrease (in size or number),to diminish,to abate",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ベルト",
        meaning: "Belt for western clothes",
        JLPT: 3
    },
    {
        kanji: "変化",
        kana: "へんか",
        meaning: "goblin,ghost,apparition,bugbear",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ペンキ",
        meaning: "(n) paint (nl: pek)",
        JLPT: 3
    },
    {
        kanji: "勉強",
        kana: "べんきょう",
        meaning: "study,diligence,discount,reduction",
        JLPT: 3
    },
    {
        kanji: "変更",
        kana: "へんこう",
        meaning: "change,modification,alteration",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ベンチ",
        meaning: "bench",
        JLPT: 3
    },
    {
        kanji: "弁当",
        kana: "べんとう",
        meaning: "box lunch",
        JLPT: 3
    },
    {
        kanji: "方",
        kana: "ほう",
        meaning: "side",
        JLPT: 3
    },
    {
        kanji: "法",
        kana: "ほう",
        meaning: "Act (law: the X Act)",
        JLPT: 3
    },
    {
        kanji: "棒",
        kana: "ぼう",
        meaning: "pole,rod,stick",
        JLPT: 3
    },
    {
        kanji: "冒険",
        kana: "ぼうけん",
        meaning: "risk,venture,adventure",
        JLPT: 3
    },
    {
        kanji: "方向",
        kana: "ほうこう",
        meaning: "direction,course,way",
        JLPT: 3
    },
    {
        kanji: "報告",
        kana: "ほうこく",
        meaning: "report,information",
        JLPT: 3
    },
    {
        kanji: "宝石",
        kana: "ほうせき",
        meaning: "gem,jewel",
        JLPT: 3
    },
    {
        kanji: "放送",
        kana: "ほうそう",
        meaning: "broadcast,broadcasting",
        JLPT: 3
    },
    {
        kanji: "豊富",
        kana: "ほうふ",
        meaning: "abundance,wealth,plenty,bounty",
        JLPT: 3
    },
    {
        kanji: "方法",
        kana: "ほうほう",
        meaning: "method,manner,way,means,technique",
        JLPT: 3
    },
    {
        kanji: "方々",
        kana: "ほうぼう",
        meaning: "persons,this and that,here and there,everywhere",
        JLPT: 3
    },
    {
        kanji: "訪問",
        kana: "ほうもん",
        meaning: "call,visit",
        JLPT: 3
    },
    {
        kanji: "吠える",
        kana: "ほえる",
        meaning: "to bark,to bay,to howl,to bellow,to roar,to cry",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ボーイ",
        meaning: "boy",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ボート",
        meaning: "rowing boat",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ホーム",
        meaning: "(1) platform,(2) home",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ボール",
        meaning: "ball,bowl",
        JLPT: 3
    },
    {
        kanji: "他",
        kana: "ほか",
        meaning: "other (esp. places and things)",
        JLPT: 3
    },
    {
        kanji: "外",
        kana: "ほか",
        meaning: "other place,the rest",
        JLPT: 3
    },
    {
        kanji: "誇り",
        kana: "ほこり",
        meaning: "pride",
        JLPT: 3
    },
    {
        kanji: "埃",
        kana: "ほこり",
        meaning: "dust",
        JLPT: 3
    },
    {
        kanji: "保証",
        kana: "ほしょう",
        meaning: "guarantee,security,assurance,pledge,warranty",
        JLPT: 3
    },
    {
        kanji: "保存",
        kana: "ほぞん",
        meaning: "preservation,conservation,storage,maintenance",
        JLPT: 3
    },
    {
        kanji: "程",
        kana: "ほど",
        meaning: "degree,extent,bounds,limit",
        JLPT: 3
    },
    {
        kanji: "歩道",
        kana: "ほどう",
        meaning: "footpath,walkway,sidewalk",
        JLPT: 3
    },
    {
        kanji: "仏",
        kana: "ほとけ",
        meaning: "Buddha,merciful person,Buddhist image,the dead",
        JLPT: 3
    },
    {
        kanji: "骨",
        kana: "ほね",
        meaning: "bone",
        JLPT: 3
    },
    {
        kanji: "炎",
        kana: "ほのお",
        meaning: "flame",
        JLPT: 3
    },
    {
        kanji: "頬",
        kana: "ほほ",
        meaning: "cheek (of face)",
        JLPT: 3
    },
    {
        kanji: "頬",
        kana: "ほお",
        meaning: "cheek (of face)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ほぼ",
        meaning: "almost,roughly,approximately",
        JLPT: 3
    },
    {
        kanji: "微笑む",
        kana: "ほほえむ",
        meaning: "to smile",
        JLPT: 3
    },
    {
        kanji: "褒める",
        kana: "ほめる",
        meaning: "to praise,to admire,to speak well",
        JLPT: 3
    },
    {
        kanji: "濠",
        kana: "ほり",
        meaning: "moat",
        JLPT: 3
    },
    {
        kanji: "本当",
        kana: "ほんと",
        meaning: "truth,reality",
        JLPT: 3
    },
    {
        kanji: "本当",
        kana: "ほんとう",
        meaning: "truth,reality",
        JLPT: 3
    },
    {
        kanji: "本人",
        kana: "ほんにん",
        meaning: "the person himself",
        JLPT: 3
    },
    {
        kanji: "本物",
        kana: "ほんもの",
        meaning: "genuine article",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ぼんやり",
        meaning: "absent-minded,block-head,dim,faint,vague",
        JLPT: 3
    },
    {
        kanji: "間",
        kana: "ま",
        meaning: "space,room,time,pause",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "まあ",
        meaning: "(female) you might say",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "マーケット",
        meaning: "market",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "マイク",
        meaning: "mike",
        JLPT: 3
    },
    {
        kanji: "迷子",
        kana: "まいご",
        meaning: "lost (stray) child",
        JLPT: 3
    },
    {
        kanji: "任せる",
        kana: "まかせる",
        meaning: "to entrust to another,to leave to",
        JLPT: 3
    },
    {
        kanji: "幕",
        kana: "まく",
        meaning: "curtain,bunting,act (in play)",
        JLPT: 3
    },
    {
        kanji: "負け",
        kana: "まけ",
        meaning: "defeat,loss,losing (a game)",
        JLPT: 3
    },
    {
        kanji: "孫",
        kana: "まご",
        meaning: "grandchild",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "まさか",
        meaning: "by no means",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "まさに",
        meaning: "correctly,surely",
        JLPT: 3
    },
    {
        kanji: "真面目",
        kana: "まじめ",
        meaning: "diligent,serious,honest",
        JLPT: 3
    },
    {
        kanji: "増す",
        kana: "ます",
        meaning: "to increase,to grow",
        JLPT: 3
    },
    {
        kanji: "先ず",
        kana: "まず",
        meaning: "first (of all),to start with,about,almost,hardly (with neg. verb)",
        JLPT: 3
    },
    {
        kanji: "貧しい",
        kana: "まずしい",
        meaning: "poor,needy",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "マスター",
        meaning: "proprietor,manager,barowner,master (e.g. arts, science)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ますます",
        meaning: "increasingly,more and more",
        JLPT: 3
    },
    {
        kanji: "又",
        kana: "また",
        meaning: "again,and",
        JLPT: 3
    },
    {
        kanji: "未だ",
        kana: "まだ",
        meaning: "yet,still,more,besides",
        JLPT: 3
    },
    {
        kanji: "街",
        kana: "まち",
        meaning: "(1) town,(2) street,road",
        JLPT: 3
    },
    {
        kanji: "間違い",
        kana: "まちがい",
        meaning: "mistake",
        JLPT: 3
    },
    {
        kanji: "松",
        kana: "まつ",
        meaning: "(1) pine tree,(2) highest (of a three-tier ranking system)",
        JLPT: 3
    },
    {
        kanji: "真っ赤",
        kana: "まっか",
        meaning: "deep red,flushed (of face)",
        JLPT: 3
    },
    {
        kanji: "真っ直ぐ",
        kana: "まっすぐ",
        meaning: "straight (ahead),direct,upright",
        JLPT: 3
    },
    {
        kanji: "全く",
        kana: "まったく",
        meaning: "really,truly,entirely,completely",
        JLPT: 3
    },
    {
        kanji: "祭",
        kana: "まつり",
        meaning: "festival,feast",
        JLPT: 3
    },
    {
        kanji: "学ぶ",
        kana: "まなぶ",
        meaning: "to study (in depth),to learn,to take lessons in",
        JLPT: 3
    },
    {
        kanji: "真似",
        kana: "まね",
        meaning: "mimicry,imitation,behavior,pretense",
        JLPT: 3
    },
    {
        kanji: "招く",
        kana: "まねく",
        meaning: "to invite",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ママ",
        meaning: "Mama",
        JLPT: 3
    },
    {
        kanji: "豆",
        kana: "まめ",
        meaning: "beans,peas",
        JLPT: 3
    },
    {
        kanji: "守る",
        kana: "まもる",
        meaning: "to protect,to obey,to guard,to abide (by the rules)",
        JLPT: 3
    },
    {
        kanji: "丸",
        kana: "まる",
        meaning: "circle,full (month),perfection,purity,suffix for ship names",
        JLPT: 3
    },
    {
        kanji: "円",
        kana: "まる",
        meaning: "circle,money",
        JLPT: 3
    },
    {
        kanji: "丸い",
        kana: "まるい",
        meaning: "round,circular,spherical",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "まるで",
        meaning: "quite,entirely,completely",
        JLPT: 3
    },
    {
        kanji: "回す",
        kana: "まわす",
        meaning: "to turn,to revolve",
        JLPT: 3
    },
    {
        kanji: "回り",
        kana: "まわり",
        meaning: "circumference,surroundings,circulation",
        JLPT: 3
    },
    {
        kanji: "万一",
        kana: "まんいち",
        meaning: "by some chance,by some possibility,if by any chance,10E4:1 odds",
        JLPT: 3
    },
    {
        kanji: "満足",
        kana: "まんぞく",
        meaning: "satisfaction",
        JLPT: 3
    },
    {
        kanji: "身",
        kana: "み",
        meaning: "body,main part,oneself,sword",
        JLPT: 3
    },
    {
        kanji: "実",
        kana: "み",
        meaning: "fruit,nut,seed,content,good result",
        JLPT: 3
    },
    {
        kanji: "見送り",
        kana: "みおくり",
        meaning: "seeing one off,farewell,escort",
        JLPT: 3
    },
    {
        kanji: "味方",
        kana: "みかた",
        meaning: "friend,ally,supporter",
        JLPT: 3
    },
    {
        kanji: "見事",
        kana: "みごと",
        meaning: "splendid,magnificent,beautiful,admirable",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ミス",
        meaning: "miss (mistake, error, failure),Miss",
        JLPT: 3
    },
    {
        kanji: "満ちる",
        kana: "みちる",
        meaning: "to be full,to rise (tide),to mature,to expire",
        JLPT: 3
    },
    {
        kanji: "密",
        kana: "みつ",
        meaning: "",
        JLPT: 3
    },
    {
        kanji: "認める",
        kana: "みとめる",
        meaning: "to recognize,to appreciate,to approve,to admit,to notice",
        JLPT: 3
    },
    {
        kanji: "皆",
        kana: "みんな",
        meaning: "all,everyone,everybody",
        JLPT: 3
    },
    {
        kanji: "見舞い",
        kana: "みまい",
        meaning: "enquiry,expression of sympathy,expression of concern",
        JLPT: 3
    },
    {
        kanji: "土産",
        kana: "みやげ",
        meaning: "present,souvenir",
        JLPT: 3
    },
    {
        kanji: "都",
        kana: "みやこ",
        meaning: "capital",
        JLPT: 3
    },
    {
        kanji: "妙",
        kana: "みょう",
        meaning: "strange,unusual",
        JLPT: 3
    },
    {
        kanji: "明後日",
        kana: "みょうごにち",
        meaning: "day after tomorrow",
        JLPT: 3
    },
    {
        kanji: "未来",
        kana: "みらい",
        meaning: "future (life, tense)",
        JLPT: 3
    },
    {
        kanji: "魅力",
        kana: "みりょく",
        meaning: "charm,fascination,glamour",
        JLPT: 3
    },
    {
        kanji: "見る",
        kana: "みる",
        meaning: "to see,to watch",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ミルク",
        meaning: "milk",
        JLPT: 3
    },
    {
        kanji: "無",
        kana: "む",
        meaning: "nothing,naught,nil,zero",
        JLPT: 3
    },
    {
        kanji: "向かい",
        kana: "むかい",
        meaning: "facing,opposite,across the street,other side",
        JLPT: 3
    },
    {
        kanji: "迎え",
        kana: "むかえ",
        meaning: "meeting,person sent to pick up an arrival",
        JLPT: 3
    },
    {
        kanji: "向く",
        kana: "むく",
        meaning: "to face",
        JLPT: 3
    },
    {
        kanji: "向ける",
        kana: "むける",
        meaning: "to turn towards,to point",
        JLPT: 3
    },
    {
        kanji: "無視",
        kana: "むし",
        meaning: "disregard,ignore",
        JLPT: 3
    },
    {
        kanji: "虫歯",
        kana: "むしば",
        meaning: "cavity,tooth decay,decayed tooth,caries",
        JLPT: 3
    },
    {
        kanji: "寧ろ",
        kana: "むしろ",
        meaning: "rather,better,instead",
        JLPT: 3
    },
    {
        kanji: "結ぶ",
        kana: "むすぶ",
        meaning: "to tie,to bind,to link",
        JLPT: 3
    },
    {
        kanji: "無駄",
        kana: "むだ",
        meaning: "futility,uselessness",
        JLPT: 3
    },
    {
        kanji: "夢中",
        kana: "むちゅう",
        meaning: "daze,(in a) trance,ecstasy,delirium,engrossment",
        JLPT: 3
    },
    {
        kanji: "胸",
        kana: "むね",
        meaning: "breast,chest",
        JLPT: 3
    },
    {
        kanji: "無料",
        kana: "むりょう",
        meaning: "free,no charge",
        JLPT: 3
    },
    {
        kanji: "芽",
        kana: "め",
        meaning: "sprout",
        JLPT: 3
    },
    {
        kanji: "明確",
        kana: "めいかく",
        meaning: "clear up,clarify,define",
        JLPT: 3
    },
    {
        kanji: "命じる",
        kana: "めいじる",
        meaning: "to order,to command,to appoint",
        JLPT: 3
    },
    {
        kanji: "名人",
        kana: "めいじん",
        meaning: "master,expert",
        JLPT: 3
    },
    {
        kanji: "命令",
        kana: "めいれい",
        meaning: "order,command,decree,directive,(software) instruction",
        JLPT: 3
    },
    {
        kanji: "迷惑",
        kana: "めいわく",
        meaning: "trouble,bother,annoyance",
        JLPT: 3
    },
    {
        kanji: "飯",
        kana: "めし",
        meaning: "(sl) meals,food",
        JLPT: 3
    },
    {
        kanji: "滅多に",
        kana: "めったに",
        meaning: "rarely (with neg. verb),seldom",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "メモ",
        meaning: "memorandum",
        JLPT: 3
    },
    {
        kanji: "面",
        kana: "めん",
        meaning: "face,mug,surface,facial features,mask,face guard,side or facet,corner,page",
        JLPT: 3
    },
    {
        kanji: "綿",
        kana: "めん",
        meaning: "cotton,padding",
        JLPT: 3
    },
    {
        kanji: "免許",
        kana: "めんきょ",
        meaning: "license,permit,licence,certificate",
        JLPT: 3
    },
    {
        kanji: "面倒",
        kana: "めんどう",
        meaning: "trouble,difficulty,care,attention",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "メンバー",
        meaning: "member",
        JLPT: 3
    },
    {
        kanji: "申し込む",
        kana: "もうしこむ",
        meaning: "to apply for,to make an application",
        JLPT: 3
    },
    {
        kanji: "申し訳",
        kana: "もうしわけ",
        meaning: "apology,excuse",
        JLPT: 3
    },
    {
        kanji: "毛布",
        kana: "もうふ",
        meaning: "blanket",
        JLPT: 3
    },
    {
        kanji: "燃える",
        kana: "もえる",
        meaning: "to burn",
        JLPT: 3
    },
    {
        kanji: "目的",
        kana: "もくてき",
        meaning: "purpose,goal,aim,objective,intention",
        JLPT: 3
    },
    {
        kanji: "目標",
        kana: "もくひょう",
        meaning: "mark,objective,target",
        JLPT: 3
    },
    {
        kanji: "木曜",
        kana: "もくよう",
        meaning: "Thursday",
        JLPT: 3
    },
    {
        kanji: "文字",
        kana: "もじ",
        meaning: "letter (of alphabet),character",
        JLPT: 3
    },
    {
        kanji: "文字",
        kana: "もんじ",
        meaning: "letter (of alphabet),character",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "もしも",
        meaning: "if",
        JLPT: 3
    },
    {
        kanji: "持ち上げる",
        kana: "もちあげる",
        meaning: "to raise,to lift up,to flatter",
        JLPT: 3
    },
    {
        kanji: "用いる",
        kana: "もちいる",
        meaning: "to use,to make use of",
        JLPT: 3
    },
    {
        kanji: "勿論",
        kana: "もちろん",
        meaning: "of course,certainly,naturally",
        JLPT: 3
    },
    {
        kanji: "最も",
        kana: "もっとも",
        meaning: "most,extremely",
        JLPT: 3
    },
    {
        kanji: "尤も",
        kana: "もっとも",
        meaning: "quite right,plausible,natural,but then,although",
        JLPT: 3
    },
    {
        kanji: "元",
        kana: "もと",
        meaning: "(1) origin,original,(2) former",
        JLPT: 3
    },
    {
        kanji: "基",
        kana: "もと",
        meaning: "basis",
        JLPT: 3
    },
    {
        kanji: "素",
        kana: "もと",
        meaning: "prime",
        JLPT: 3
    },
    {
        kanji: "戻す",
        kana: "もどす",
        meaning: "to restore,to put back,to return",
        JLPT: 3
    },
    {
        kanji: "基づく",
        kana: "もとづく",
        meaning: "to be grounded on,to be based on,to be due to,to originate from",
        JLPT: 3
    },
    {
        kanji: "求める",
        kana: "もとめる",
        meaning: "to seek,to request,to demand,to want,to wish for,to search for,to pursue (pleasure),to hunt (a job),",
        JLPT: 3
    },
    {
        kanji: "者",
        kana: "もの",
        meaning: "person",
        JLPT: 3
    },
    {
        kanji: "物音",
        kana: "ものおと",
        meaning: "sounds",
        JLPT: 3
    },
    {
        kanji: "物語",
        kana: "ものがたり",
        meaning: "tale,story,legend",
        JLPT: 3
    },
    {
        kanji: "物事",
        kana: "ものごと",
        meaning: "things,everything",
        JLPT: 3
    },
    {
        kanji: "模様",
        kana: "もよう",
        meaning: "pattern,figure,design",
        JLPT: 3
    },
    {
        kanji: "貰う",
        kana: "もらう",
        meaning: "to receive",
        JLPT: 3
    },
    {
        kanji: "文句",
        kana: "もんく",
        meaning: "phrase,complaint",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "やがて",
        meaning: "before long,soon,at length",
        JLPT: 3
    },
    {
        kanji: "役",
        kana: "やく",
        meaning: "use,service,role,position",
        JLPT: 3
    },
    {
        kanji: "約",
        kana: "やく",
        meaning: "approximately,about,some",
        JLPT: 3
    },
    {
        kanji: "訳",
        kana: "やく",
        meaning: "meaning,reason,circumstances,can be deduced,situation",
        JLPT: 3
    },
    {
        kanji: "役割",
        kana: "やくわり",
        meaning: "part,assigning (allotment of) parts,role,duties",
        JLPT: 3
    },
    {
        kanji: "家賃",
        kana: "やちん",
        meaning: "rent",
        JLPT: 3
    },
    {
        kanji: "厄介",
        kana: "やっかい",
        meaning: "trouble,burden,care,bother",
        JLPT: 3
    },
    {
        kanji: "宿",
        kana: "やど",
        meaning: "inn,lodging",
        JLPT: 3
    },
    {
        kanji: "雇う",
        kana: "やとう",
        meaning: "to employ,to hire",
        JLPT: 3
    },
    {
        kanji: "屋根",
        kana: "やね",
        meaning: "roof",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "やはり",
        meaning: "also,as I thought,still,in spite of,absolutely,of course",
        JLPT: 3
    },
    {
        kanji: "破る",
        kana: "やぶる",
        meaning: "to tear,to violate,to defeat,to smash,to destroy",
        JLPT: 3
    },
    {
        kanji: "辞める",
        kana: "やめる",
        meaning: "to retire",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "やや",
        meaning: "a little,partially,somewhat,a short time,a while",
        JLPT: 3
    },
    {
        kanji: "唯一",
        kana: "ゆいいつ",
        meaning: "only,sole,unique",
        JLPT: 3
    },
    {
        kanji: "勇気",
        kana: "ゆうき",
        meaning: "courage,bravery,valour,nerve,boldness",
        JLPT: 3
    },
    {
        kanji: "有効",
        kana: "ゆうこう",
        meaning: "validity,availability,effectiveness",
        JLPT: 3
    },
    {
        kanji: "優秀",
        kana: "ゆうしゅう",
        meaning: "superiority,excellence",
        JLPT: 3
    },
    {
        kanji: "優勝",
        kana: "ゆうしょう",
        meaning: "overall victory,championship",
        JLPT: 3
    },
    {
        kanji: "友情",
        kana: "ゆうじょう",
        meaning: "friendship,fellowship",
        JLPT: 3
    },
    {
        kanji: "友人",
        kana: "ゆうじん",
        meaning: "friend",
        JLPT: 3
    },
    {
        kanji: "有能",
        kana: "ゆうのう",
        meaning: "able,capable,efficient,skill",
        JLPT: 3
    },
    {
        kanji: "郵便",
        kana: "ゆうびん",
        meaning: "mail,postal service",
        JLPT: 3
    },
    {
        kanji: "夕べ",
        kana: "ゆうべ",
        meaning: "evening",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ユーモア",
        meaning: "humor",
        JLPT: 3
    },
    {
        kanji: "有利",
        kana: "ゆうり",
        meaning: "advantageous,better,profitable,lucrative",
        JLPT: 3
    },
    {
        kanji: "床",
        kana: "ゆか",
        meaning: "floor",
        JLPT: 3
    },
    {
        kanji: "愉快",
        kana: "ゆかい",
        meaning: "pleasant,happy",
        JLPT: 3
    },
    {
        kanji: "輸出",
        kana: "ゆしゅつ",
        meaning: "export",
        JLPT: 3
    },
    {
        kanji: "譲る",
        kana: "ゆずる",
        meaning: "to turn over,to assign,to hand over",
        JLPT: 3
    },
    {
        kanji: "豊か",
        kana: "ゆたか",
        meaning: "abundant,wealthy,plentiful,rich",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ゆっくり",
        meaning: "slowly,at ease",
        JLPT: 3
    },
    {
        kanji: "輸入",
        kana: "ゆにゅう",
        meaning: "importation,import,introduction",
        JLPT: 3
    },
    {
        kanji: "許す",
        kana: "ゆるす",
        meaning: "to permit,to allow,to approve",
        JLPT: 3
    },
    {
        kanji: "夜",
        kana: "よ",
        meaning: "evening,night",
        JLPT: 3
    },
    {
        kanji: "夜明け",
        kana: "よあけ",
        meaning: "dawn,daybreak",
        JLPT: 3
    },
    {
        kanji: "様",
        kana: "よう",
        meaning: "way,manner,kind",
        JLPT: 3
    },
    {
        kanji: "酔う",
        kana: "よう",
        meaning: "to get drunk,to become intoxicated",
        JLPT: 3
    },
    {
        kanji: "容易",
        kana: "ようい",
        meaning: "easy,simple,plain",
        JLPT: 3
    },
    {
        kanji: "陽気",
        kana: "ようき",
        meaning: "season,weather,cheerfulness",
        JLPT: 3
    },
    {
        kanji: "要求",
        kana: "ようきゅう",
        meaning: "request,demand,requisition",
        JLPT: 3
    },
    {
        kanji: "用心",
        kana: "ようじん",
        meaning: "care,precaution,guarding,caution",
        JLPT: 3
    },
    {
        kanji: "様子",
        kana: "ようす",
        meaning: "aspect,state,appearance",
        JLPT: 3
    },
    {
        kanji: "要するに",
        kana: "ようするに",
        meaning: "in a word,after all,the point is ..,in short ..",
        JLPT: 3
    },
    {
        kanji: "要素",
        kana: "ようそ",
        meaning: "element",
        JLPT: 3
    },
    {
        kanji: "要点",
        kana: "ようてん",
        meaning: "gist,main point",
        JLPT: 3
    },
    {
        kanji: "曜日",
        kana: "ようび",
        meaning: "day of the week",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ヨーロッパ",
        meaning: "Europe",
        JLPT: 3
    },
    {
        kanji: "予期",
        kana: "よき",
        meaning: "expectation,assume will happen,forecast",
        JLPT: 3
    },
    {
        kanji: "横切る",
        kana: "よこぎる",
        meaning: "to cross (e.g. arms),to traverse",
        JLPT: 3
    },
    {
        kanji: "予算",
        kana: "よさん",
        meaning: "estimate,budget",
        JLPT: 3
    },
    {
        kanji: "止す",
        kana: "よす",
        meaning: "to cease,to abolish,to resign,to give up",
        JLPT: 3
    },
    {
        kanji: "予測",
        kana: "よそく",
        meaning: "prediction,estimation",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ヨット",
        meaning: "yacht",
        JLPT: 3
    },
    {
        kanji: "夜中",
        kana: "よなか",
        meaning: "midnight,dead of night",
        JLPT: 3
    },
    {
        kanji: "世の中",
        kana: "よのなか",
        meaning: "society,the world,the times",
        JLPT: 3
    },
    {
        kanji: "余分",
        kana: "よぶん",
        meaning: "extra,excess,surplus",
        JLPT: 3
    },
    {
        kanji: "予報",
        kana: "よほう",
        meaning: "forecast,prediction",
        JLPT: 3
    },
    {
        kanji: "予防",
        kana: "よぼう",
        meaning: "prevention,precaution,protection against",
        JLPT: 3
    },
    {
        kanji: "読み",
        kana: "よみ",
        meaning: "reading",
        JLPT: 3
    },
    {
        kanji: "嫁",
        kana: "よめ",
        meaning: "bride,daughter-in-law",
        JLPT: 3
    },
    {
        kanji: "余裕",
        kana: "よゆう",
        meaning: "surplus,composure,margin,room,time,allowance,scope,rope",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "より",
        meaning: "twist,ply",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "よると",
        meaning: "according to",
        JLPT: 3
    },
    {
        kanji: "喜び",
        kana: "よろこび",
        meaning: "(a) joy,(a) delight,rapture,pleasure,gratification,rejoicing,congratulations,felicitations",
        JLPT: 3
    },
    {
        kanji: "宜しい",
        kana: "よろしい",
        meaning: "(hon) good,OK,all right,fine,very well,will do,may,can",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "よろしく",
        meaning: "well,properly,suitably,best regards,please remember me",
        JLPT: 3
    },
    {
        kanji: "四",
        kana: "よん",
        meaning: "four",
        JLPT: 3
    },
    {
        kanji: "来",
        kana: "らい",
        meaning: ",for (10 days),next (year)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ライター",
        meaning: "lighter,rider,writer",
        JLPT: 3
    },
    {
        kanji: "楽",
        kana: "らく",
        meaning: "comfort,ease",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ラケット",
        meaning: "paddle,racket",
        JLPT: 3
    },
    {
        kanji: "利益",
        kana: "りえき",
        meaning: "profits,gains,(political, economic) interest",
        JLPT: 3
    },
    {
        kanji: "理解",
        kana: "りかい",
        meaning: "understanding,comprehension",
        JLPT: 3
    },
    {
        kanji: "陸",
        kana: "りく",
        meaning: "six (used in legal documents)",
        JLPT: 3
    },
    {
        kanji: "利口",
        kana: "りこう",
        meaning: "clever,shrewd,bright,sharp,wise,intelligent",
        JLPT: 3
    },
    {
        kanji: "離婚",
        kana: "りこん",
        meaning: "divorce",
        JLPT: 3
    },
    {
        kanji: "理想",
        kana: "りそう",
        meaning: "ideal",
        JLPT: 3
    },
    {
        kanji: "率",
        kana: "りつ",
        meaning: "rate,ratio,proportion,percentage",
        JLPT: 3
    },
    {
        kanji: "立派",
        kana: "りっぱ",
        meaning: "splendid,fine,handsome,elegant,imposing,prominent,legal,legitimate",
        JLPT: 3
    },
    {
        kanji: "留学",
        kana: "りゅうがく",
        meaning: "studying abroad",
        JLPT: 3
    },
    {
        kanji: "流行",
        kana: "りゅうこう",
        meaning: "fashionable,fad,in vogue,prevailing",
        JLPT: 3
    },
    {
        kanji: "量",
        kana: "りょう",
        meaning: "quantity,amount,volume,portion (of food)",
        JLPT: 3
    },
    {
        kanji: "両替",
        kana: "りょうがえ",
        meaning: "change,money exchange",
        JLPT: 3
    },
    {
        kanji: "料金",
        kana: "りょうきん",
        meaning: "fee,charge,fare",
        JLPT: 3
    },
    {
        kanji: "例",
        kana: "れい",
        meaning: "instance,example,case",
        JLPT: 3
    },
    {
        kanji: "礼",
        kana: "れい",
        meaning: "expression of gratitude",
        JLPT: 3
    },
    {
        kanji: "礼儀",
        kana: "れいぎ",
        meaning: "manners,courtesy,etiquette",
        JLPT: 3
    },
    {
        kanji: "冷静",
        kana: "れいせい",
        meaning: "calm,composure,coolness,serenity",
        JLPT: 3
    },
    {
        kanji: "列",
        kana: "れつ",
        meaning: "queue,line,row",
        JLPT: 3
    },
    {
        kanji: "列車",
        kana: "れっしゃ",
        meaning: "train (ordinary)",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "レポート",
        meaning: "report,paper",
        JLPT: 3
    },
    {
        kanji: "練習",
        kana: "れんしゅう",
        meaning: "practice",
        JLPT: 3
    },
    {
        kanji: "連想",
        kana: "れんそう",
        meaning: "association (of ideas),suggestion",
        JLPT: 3
    },
    {
        kanji: "連続",
        kana: "れんぞく",
        meaning: "serial,consecutive,continuity,continuing",
        JLPT: 3
    },
    {
        kanji: "老人",
        kana: "ろうじん",
        meaning: "the aged,old person",
        JLPT: 3
    },
    {
        kanji: "労働",
        kana: "ろうどう",
        meaning: "manual labor,toil,work",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ロケット",
        meaning: "locket,rocket",
        JLPT: 3
    },
    {
        kanji: "論じる",
        kana: "ろんじる",
        meaning: "to argue,to discuss,to debate",
        JLPT: 3
    },
    {
        kanji: "論争",
        kana: "ろんそう",
        meaning: "controversy,dispute",
        JLPT: 3
    },
    {
        kanji: "論文",
        kana: "ろんぶん",
        meaning: "thesis,essay,treatise,paper",
        JLPT: 3
    },
    {
        kanji: "輪",
        kana: "わ",
        meaning: "ring,hoop,circle",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "ワイン",
        meaning: "wine",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "わがまま",
        meaning: "selfishness,egoism,wilfulness,disobedience,whim",
        JLPT: 3
    },
    {
        kanji: "別れ",
        kana: "わかれ",
        meaning: "parting,separation,farewell",
        JLPT: 3
    },
    {
        kanji: "脇",
        kana: "わき",
        meaning: "side",
        JLPT: 3
    },
    {
        kanji: "分ける",
        kana: "わける",
        meaning: "to divide,to separate",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "わざと",
        meaning: "on purpose",
        JLPT: 3
    },
    {
        kanji: "僅か",
        kana: "わずか",
        meaning: "only,merely,a little,small quantity",
        JLPT: 3
    },
    {
        kanji: "綿",
        kana: "わた",
        meaning: "cotton,padding",
        JLPT: 3
    },
    {
        kanji: "話題",
        kana: "わだい",
        meaning: "topic,subject",
        JLPT: 3
    },
    {
        kanji: "笑い",
        kana: "わらい",
        meaning: "laugh,laughter,smile",
        JLPT: 3
    },
    {
        kanji: "割る",
        kana: "わる",
        meaning: "to divide,to cut,to break,to halve",
        JLPT: 3
    },
    {
        kanji: "悪口",
        kana: "わるくち",
        meaning: "abuse,insult,slander,evil speaking",
        JLPT: 3
    },
    {
        kanji: "我々",
        kana: "われわれ",
        meaning: "we",
        JLPT: 3
    },
    {
        kanji: "湾",
        kana: "わん",
        meaning: "bay,gulf,inlet",
        JLPT: 3
    },
    {
        kanji: "",
        kana: "あ",
        meaning: "Ah",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ああ",
        meaning: "like that",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "あいさつ",
        meaning: "to greet",
        JLPT: 4
    },
    {
        kanji: "間",
        kana: "あいだ",
        meaning: "a space",
        JLPT: 4
    },
    {
        kanji: "合う",
        kana: "あう",
        meaning: "to match",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "あかちゃん",
        meaning: "infant",
        JLPT: 4
    },
    {
        kanji: "上る",
        kana: "あがる",
        meaning: "to rise",
        JLPT: 4
    },
    {
        kanji: "赤ん坊",
        kana: "あかんぼう",
        meaning: "baby",
        JLPT: 4
    },
    {
        kanji: "空く",
        kana: "あく",
        meaning: "to open, to become empty",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アクセサリー",
        meaning: "accessory",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "あげる",
        meaning: "to give",
        JLPT: 4
    },
    {
        kanji: "浅い",
        kana: "あさい",
        meaning: "shallow,superficial",
        JLPT: 4
    },
    {
        kanji: "味",
        kana: "あじ",
        meaning: "flavour",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アジア",
        meaning: "Asia",
        JLPT: 4
    },
    {
        kanji: "明日",
        kana: "あす",
        meaning: "tomorrow",
        JLPT: 4
    },
    {
        kanji: "遊び",
        kana: "あそび",
        meaning: "play",
        JLPT: 4
    },
    {
        kanji: "集る",
        kana: "あつまる",
        meaning: "to gather",
        JLPT: 4
    },
    {
        kanji: "集める",
        kana: "あつめる",
        meaning: "to collect something",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アナウンサー",
        meaning: "announcer",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アフリカ",
        meaning: "Africa",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アメリカ",
        meaning: "America",
        JLPT: 4
    },
    {
        kanji: "謝る",
        kana: "あやまる",
        meaning: "to apologize",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アルコール",
        meaning: "alcohol",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "アルバイト",
        meaning: "part-time job",
        JLPT: 4
    },
    {
        kanji: "安心",
        kana: "あんしん",
        meaning: "relief",
        JLPT: 4
    },
    {
        kanji: "安全",
        kana: "あんぜん",
        meaning: "safety",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "あんな",
        meaning: "such",
        JLPT: 4
    },
    {
        kanji: "案内",
        kana: "あんない",
        meaning: "to guide",
        JLPT: 4
    },
    {
        kanji: "以下",
        kana: "いか",
        meaning: "less than",
        JLPT: 4
    },
    {
        kanji: "以外",
        kana: "いがい",
        meaning: "with the exception of",
        JLPT: 4
    },
    {
        kanji: "医学",
        kana: "いがく",
        meaning: "medical science",
        JLPT: 4
    },
    {
        kanji: "生きる",
        kana: "いきる",
        meaning: "to live",
        JLPT: 4
    },
    {
        kanji: "意見",
        kana: "いけん",
        meaning: "opinion",
        JLPT: 4
    },
    {
        kanji: "石",
        kana: "いし",
        meaning: "stone",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "いじめる",
        meaning: "to tease",
        JLPT: 4
    },
    {
        kanji: "以上",
        kana: "いじょう",
        meaning: "more than,this is all",
        JLPT: 4
    },
    {
        kanji: "急ぐ",
        kana: "いそぐ",
        meaning: "to hurry",
        JLPT: 4
    },
    {
        kanji: "致す",
        kana: "いたす",
        meaning: "(humble) to do",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "いただく",
        meaning: "(humble) to receive",
        JLPT: 4
    },
    {
        kanji: "一度",
        kana: "いちど",
        meaning: "once",
        JLPT: 4
    },
    {
        kanji: "一生懸命",
        kana: "いっしょうけんめい",
        meaning: "with utmost effort",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "いっぱい",
        meaning: "full",
        JLPT: 4
    },
    {
        kanji: "糸",
        kana: "いと",
        meaning: "thread",
        JLPT: 4
    },
    {
        kanji: "以内",
        kana: "いない",
        meaning: "within",
        JLPT: 4
    },
    {
        kanji: "田舎",
        kana: "いなか",
        meaning: "countryside",
        JLPT: 4
    },
    {
        kanji: "祈る",
        kana: "いのる",
        meaning: "to pray",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "いらっしゃる",
        meaning: "(respectful) to be,to come or to go",
        JLPT: 4
    },
    {
        kanji: "植える",
        kana: "うえる",
        meaning: "to plant,to grow",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "うかがう",
        meaning: "to visit",
        JLPT: 4
    },
    {
        kanji: "受付",
        kana: "うけつけ",
        meaning: "receipt",
        JLPT: 4
    },
    {
        kanji: "受ける",
        kana: "うける",
        meaning: "to take a lesson or test",
        JLPT: 4
    },
    {
        kanji: "動く",
        kana: "うごく",
        meaning: "to move",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "うそ",
        meaning: "a lie",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "うち",
        meaning: "within",
        JLPT: 4
    },
    {
        kanji: "打つ",
        kana: "うつ",
        meaning: "to hit",
        JLPT: 4
    },
    {
        kanji: "美しい",
        kana: "うつくしい",
        meaning: "beautiful",
        JLPT: 4
    },
    {
        kanji: "写す",
        kana: "うつす",
        meaning: "to copy or photograph",
        JLPT: 4
    },
    {
        kanji: "移る",
        kana: "うつる",
        meaning: "to move house or transfer",
        JLPT: 4
    },
    {
        kanji: "腕",
        kana: "うで",
        meaning: "arm",
        JLPT: 4
    },
    {
        kanji: "美味い",
        kana: "うまい",
        meaning: "delicious",
        JLPT: 4
    },
    {
        kanji: "裏",
        kana: "うら",
        meaning: "reverse side",
        JLPT: 4
    },
    {
        kanji: "売り場",
        kana: "うりば",
        meaning: "place where things are sold",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "うれしい",
        meaning: "glad",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "うん",
        meaning: "(informal) yes",
        JLPT: 4
    },
    {
        kanji: "運転",
        kana: "うんてん",
        meaning: "to drive",
        JLPT: 4
    },
    {
        kanji: "運転手",
        kana: "うんてんしゅ",
        meaning: "driver",
        JLPT: 4
    },
    {
        kanji: "運動",
        kana: "うんどう",
        meaning: "to exercise",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "エスカレーター",
        meaning: "escalator",
        JLPT: 4
    },
    {
        kanji: "枝",
        kana: "えだ",
        meaning: "branch, twig",
        JLPT: 4
    },
    {
        kanji: "選ぶ",
        kana: "えらぶ",
        meaning: "to choose",
        JLPT: 4
    },
    {
        kanji: "遠慮",
        kana: "えんりょ",
        meaning: "to be reserved, to be restrained",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "おいでになる",
        meaning: "(respectful) to be",
        JLPT: 4
    },
    {
        kanji: "お祝い",
        kana: "おいわい",
        meaning: "congratulation",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "オートバイ",
        meaning: "motorcycle",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "おかげ",
        meaning: "owing to",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "おかしい",
        meaning: "strange or funny",
        JLPT: 4
    },
    {
        kanji: "億",
        kana: "おく",
        meaning: "one hundred million",
        JLPT: 4
    },
    {
        kanji: "屋上",
        kana: "おくじょう",
        meaning: "rooftop",
        JLPT: 4
    },
    {
        kanji: "贈り物",
        kana: "おくりもの",
        meaning: "gift",
        JLPT: 4
    },
    {
        kanji: "送る",
        kana: "おくる",
        meaning: "to send",
        JLPT: 4
    },
    {
        kanji: "遅れる",
        kana: "おくれる",
        meaning: "to be late",
        JLPT: 4
    },
    {
        kanji: "起す",
        kana: "おこす",
        meaning: "to wake",
        JLPT: 4
    },
    {
        kanji: "行う",
        kana: "おこなう",
        meaning: "to do",
        JLPT: 4
    },
    {
        kanji: "怒る",
        kana: "おこる",
        meaning: "to get angry,to be angry",
        JLPT: 4
    },
    {
        kanji: "押し入れ",
        kana: "おしいれ",
        meaning: "closet",
        JLPT: 4
    },
    {
        kanji: "お嬢さん",
        kana: "おじょうさん",
        meaning: "young lady",
        JLPT: 4
    },
    {
        kanji: "お宅",
        kana: "おたく",
        meaning: "(polite) your house",
        JLPT: 4
    },
    {
        kanji: "落る",
        kana: "おちる",
        meaning: "to fall or drop",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "おっしゃる",
        meaning: "(respectful) to say",
        JLPT: 4
    },
    {
        kanji: "夫",
        kana: "おっと",
        meaning: "husband",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "おつり",
        meaning: "change from purchase, balance",
        JLPT: 4
    },
    {
        kanji: "音",
        kana: "おと",
        meaning: "sound,note",
        JLPT: 4
    },
    {
        kanji: "落す",
        kana: "おとす",
        meaning: "to drop",
        JLPT: 4
    },
    {
        kanji: "踊り",
        kana: "おどり",
        meaning: "a dance",
        JLPT: 4
    },
    {
        kanji: "踊る",
        kana: "おどる",
        meaning: "to dance",
        JLPT: 4
    },
    {
        kanji: "驚く",
        kana: "おどろく",
        meaning: "to be surprised",
        JLPT: 4
    },
    {
        kanji: "お祭り",
        kana: "おまつり",
        meaning: "festival",
        JLPT: 4
    },
    {
        kanji: "お見舞い",
        kana: "おみまい",
        meaning: "calling on someone who is ill,enquiry",
        JLPT: 4
    },
    {
        kanji: "お土産",
        kana: "おみやげ",
        meaning: "souvenir",
        JLPT: 4
    },
    {
        kanji: "思い出す",
        kana: "おもいだす",
        meaning: "to remember",
        JLPT: 4
    },
    {
        kanji: "思う",
        kana: "おもう",
        meaning: "to think,to feel",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "おもちゃ",
        meaning: "toy",
        JLPT: 4
    },
    {
        kanji: "表",
        kana: "おもて",
        meaning: "the front",
        JLPT: 4
    },
    {
        kanji: "親",
        kana: "おや",
        meaning: "parents",
        JLPT: 4
    },
    {
        kanji: "下りる",
        kana: "おりる",
        meaning: "to get off",
        JLPT: 4
    },
    {
        kanji: "折る",
        kana: "おる",
        meaning: "to break or to fold",
        JLPT: 4
    },
    {
        kanji: "お礼",
        kana: "おれい",
        meaning: "expression of gratitude",
        JLPT: 4
    },
    {
        kanji: "折れる",
        kana: "おれる",
        meaning: "to break or be folded",
        JLPT: 4
    },
    {
        kanji: "終わり",
        kana: "おわり",
        meaning: "the end",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "カーテン",
        meaning: "curtain",
        JLPT: 4
    },
    {
        kanji: "海岸",
        kana: "かいがん",
        meaning: "coast",
        JLPT: 4
    },
    {
        kanji: "会議",
        kana: "かいぎ",
        meaning: "meeting",
        JLPT: 4
    },
    {
        kanji: "会議室",
        kana: "かいぎしつ",
        meaning: "meeting room",
        JLPT: 4
    },
    {
        kanji: "会場",
        kana: "かいじょう",
        meaning: "assembly hall or meeting place",
        JLPT: 4
    },
    {
        kanji: "会話",
        kana: "かいわ",
        meaning: "conversation",
        JLPT: 4
    },
    {
        kanji: "帰り",
        kana: "かえり",
        meaning: "return",
        JLPT: 4
    },
    {
        kanji: "変える",
        kana: "かえる",
        meaning: "to change",
        JLPT: 4
    },
    {
        kanji: "科学",
        kana: "かがく",
        meaning: "science",
        JLPT: 4
    },
    {
        kanji: "鏡",
        kana: "かがみ",
        meaning: "mirror",
        JLPT: 4
    },
    {
        kanji: "掛ける",
        kana: "かける",
        meaning: "to hang something",
        JLPT: 4
    },
    {
        kanji: "飾る",
        kana: "かざる",
        meaning: "to decorate",
        JLPT: 4
    },
    {
        kanji: "火事",
        kana: "かじ",
        meaning: "fire",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ガス",
        meaning: "petrol",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ガソリン",
        meaning: "petrol",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ガソリンスタンド",
        meaning: "petrol station",
        JLPT: 4
    },
    {
        kanji: "堅",
        kana: "かたい",
        meaning: "hard",
        JLPT: 4
    },
    {
        kanji: "硬",
        kana: "かたい",
        meaning: "hard",
        JLPT: 4
    },
    {
        kanji: "固い",
        kana: "かたい",
        meaning: "hard",
        JLPT: 4
    },
    {
        kanji: "形",
        kana: "かたち",
        meaning: "shape",
        JLPT: 4
    },
    {
        kanji: "片付ける",
        kana: "かたづける",
        meaning: "to tidy up",
        JLPT: 4
    },
    {
        kanji: "課長",
        kana: "かちょう",
        meaning: "section manager",
        JLPT: 4
    },
    {
        kanji: "勝つ",
        kana: "かつ",
        meaning: "to win",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "かっこう",
        meaning: "appearance",
        JLPT: 4
    },
    {
        kanji: "家内",
        kana: "かない",
        meaning: "housewife",
        JLPT: 4
    },
    {
        kanji: "悲しい",
        kana: "かなしい",
        meaning: "sad",
        JLPT: 4
    },
    {
        kanji: "必ず",
        kana: "かならず",
        meaning: "certainly,necessarily",
        JLPT: 4
    },
    {
        kanji: "お金持ち",
        kana: "おかねもち",
        meaning: "rich man",
        JLPT: 4
    },
    {
        kanji: "彼女",
        kana: "かのじょ",
        meaning: "she,girlfriend",
        JLPT: 4
    },
    {
        kanji: "壁",
        kana: "かべ",
        meaning: "wall",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "かまう",
        meaning: "to mind",
        JLPT: 4
    },
    {
        kanji: "髪",
        kana: "かみ",
        meaning: "hair",
        JLPT: 4
    },
    {
        kanji: "噛む",
        kana: "かむ",
        meaning: "to bite,to chew",
        JLPT: 4
    },
    {
        kanji: "通う",
        kana: "かよう",
        meaning: "to commute",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ガラス",
        meaning: "a glass pane",
        JLPT: 4
    },
    {
        kanji: "彼",
        kana: "かれ",
        meaning: "he,boyfriend",
        JLPT: 4
    },
    {
        kanji: "彼ら",
        kana: "かれら",
        meaning: "they",
        JLPT: 4
    },
    {
        kanji: "乾く",
        kana: "かわく",
        meaning: "to get dry",
        JLPT: 4
    },
    {
        kanji: "代わり",
        kana: "かわり",
        meaning: "substitute,alternate",
        JLPT: 4
    },
    {
        kanji: "変わる",
        kana: "かわる",
        meaning: "to change",
        JLPT: 4
    },
    {
        kanji: "考える",
        kana: "かんがえる",
        meaning: "to consider",
        JLPT: 4
    },
    {
        kanji: "関係",
        kana: "かんけい",
        meaning: "relationship",
        JLPT: 4
    },
    {
        kanji: "看護婦",
        kana: "かんごふ",
        meaning: "female nurse",
        JLPT: 4
    },
    {
        kanji: "簡単",
        kana: "かんたん",
        meaning: "simple",
        JLPT: 4
    },
    {
        kanji: "気",
        kana: "き",
        meaning: "spirit,mood",
        JLPT: 4
    },
    {
        kanji: "機会",
        kana: "きかい",
        meaning: "opportunity",
        JLPT: 4
    },
    {
        kanji: "危険",
        kana: "きけん",
        meaning: "danger",
        JLPT: 4
    },
    {
        kanji: "聞こえる",
        kana: "きこえる",
        meaning: "to be heard",
        JLPT: 4
    },
    {
        kanji: "汽車",
        kana: "きしゃ",
        meaning: "steam train",
        JLPT: 4
    },
    {
        kanji: "技術",
        kana: "ぎじゅつ",
        meaning: "art,technology,skill",
        JLPT: 4
    },
    {
        kanji: "季節",
        kana: "きせつ",
        meaning: "season",
        JLPT: 4
    },
    {
        kanji: "規則",
        kana: "きそく",
        meaning: "regulations",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "きっと",
        meaning: "surely",
        JLPT: 4
    },
    {
        kanji: "絹",
        kana: "きぬ",
        meaning: "silk",
        JLPT: 4
    },
    {
        kanji: "厳しい",
        kana: "きびしい",
        meaning: "strict",
        JLPT: 4
    },
    {
        kanji: "気分",
        kana: "きぶん",
        meaning: "mood",
        JLPT: 4
    },
    {
        kanji: "決る",
        kana: "きまる",
        meaning: "to be decided",
        JLPT: 4
    },
    {
        kanji: "君",
        kana: "きみ",
        meaning: "(informal) You (used by men towards women)",
        JLPT: 4
    },
    {
        kanji: "決める",
        kana: "きめる",
        meaning: "to decide",
        JLPT: 4
    },
    {
        kanji: "気持ち",
        kana: "きもち",
        meaning: "feeling,mood",
        JLPT: 4
    },
    {
        kanji: "着物",
        kana: "きもの",
        meaning: "kimono",
        JLPT: 4
    },
    {
        kanji: "客",
        kana: "きゃく",
        meaning: "guest,customer",
        JLPT: 4
    },
    {
        kanji: "急",
        kana: "きゅう",
        meaning: "urgent, steep",
        JLPT: 4
    },
    {
        kanji: "急行",
        kana: "きゅうこう",
        meaning: "speedy, express",
        JLPT: 4
    },
    {
        kanji: "教育",
        kana: "きょういく",
        meaning: "education",
        JLPT: 4
    },
    {
        kanji: "教会",
        kana: "きょうかい",
        meaning: "church",
        JLPT: 4
    },
    {
        kanji: "競争",
        kana: "きょうそう",
        meaning: "competition",
        JLPT: 4
    },
    {
        kanji: "興味",
        kana: "きょうみ",
        meaning: "an interest",
        JLPT: 4
    },
    {
        kanji: "近所",
        kana: "きんじょ",
        meaning: "neighbourhood",
        JLPT: 4
    },
    {
        kanji: "具合",
        kana: "ぐあい",
        meaning: "condition,health",
        JLPT: 4
    },
    {
        kanji: "空気",
        kana: "くうき",
        meaning: "air,atmosphere",
        JLPT: 4
    },
    {
        kanji: "空港",
        kana: "くうこう",
        meaning: "airport",
        JLPT: 4
    },
    {
        kanji: "草",
        kana: "くさ",
        meaning: "grass",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "くださる",
        meaning: "(respectful) to give",
        JLPT: 4
    },
    {
        kanji: "首",
        kana: "くび",
        meaning: "neck",
        JLPT: 4
    },
    {
        kanji: "雲",
        kana: "くも",
        meaning: "cloud",
        JLPT: 4
    },
    {
        kanji: "比べる",
        kana: "くらべる",
        meaning: "to compare",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "くれる",
        meaning: "to give",
        JLPT: 4
    },
    {
        kanji: "暮れる",
        kana: "くれる",
        meaning: "to get dark,to come to an end",
        JLPT: 4
    },
    {
        kanji: "君",
        kana: "くん",
        meaning: "suffix for familiar young male",
        JLPT: 4
    },
    {
        kanji: "毛",
        kana: "け",
        meaning: "hair or fur",
        JLPT: 4
    },
    {
        kanji: "計画",
        kana: "けいかく",
        meaning: "to plan",
        JLPT: 4
    },
    {
        kanji: "経験",
        kana: "けいけん",
        meaning: "to experience",
        JLPT: 4
    },
    {
        kanji: "経済",
        kana: "けいざい",
        meaning: "finance,economy",
        JLPT: 4
    },
    {
        kanji: "警察",
        kana: "けいさつ",
        meaning: "police",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ケーキ",
        meaning: "cake",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "けが",
        meaning: "to injure",
        JLPT: 4
    },
    {
        kanji: "景色",
        kana: "けしき",
        meaning: "scene,landscape",
        JLPT: 4
    },
    {
        kanji: "消しゴム",
        kana: "けしゴム",
        meaning: "eraser",
        JLPT: 4
    },
    {
        kanji: "下宿",
        kana: "げしゅく",
        meaning: "lodging",
        JLPT: 4
    },
    {
        kanji: "決して",
        kana: "けっして",
        meaning: "never",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "けれど",
        meaning: "however",
        JLPT: 4
    },
    {
        kanji: "原因",
        kana: "げんいん",
        meaning: "cause,source",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "けんか",
        meaning: "to quarrel",
        JLPT: 4
    },
    {
        kanji: "研究",
        kana: "けんきゅう",
        meaning: "research",
        JLPT: 4
    },
    {
        kanji: "研究室",
        kana: "けんきゅうしつ",
        meaning: "study room,laboratory",
        JLPT: 4
    },
    {
        kanji: "見物",
        kana: "けんぶつ",
        meaning: "sightseeing",
        JLPT: 4
    },
    {
        kanji: "子",
        kana: "こ",
        meaning: "child",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "こう",
        meaning: "this way",
        JLPT: 4
    },
    {
        kanji: "郊外",
        kana: "こうがい",
        meaning: "outskirts",
        JLPT: 4
    },
    {
        kanji: "講義",
        kana: "こうぎ",
        meaning: "lecture",
        JLPT: 4
    },
    {
        kanji: "工業",
        kana: "こうぎょう",
        meaning: "the manufacturing industry",
        JLPT: 4
    },
    {
        kanji: "高校",
        kana: "こうこう",
        meaning: "high school",
        JLPT: 4
    },
    {
        kanji: "高校生",
        kana: "こうこうせい",
        meaning: "high school student",
        JLPT: 4
    },
    {
        kanji: "工場",
        kana: "こうじょう",
        meaning: "factory",
        JLPT: 4
    },
    {
        kanji: "校長",
        kana: "こうちょう",
        meaning: "headmaster",
        JLPT: 4
    },
    {
        kanji: "交通",
        kana: "こうつう",
        meaning: "traffic,transportation",
        JLPT: 4
    },
    {
        kanji: "講堂",
        kana: "こうどう",
        meaning: "auditorium",
        JLPT: 4
    },
    {
        kanji: "高等学校",
        kana: "こうとうがっこう",
        meaning: "high school",
        JLPT: 4
    },
    {
        kanji: "公務員",
        kana: "こうむいん",
        meaning: "government worker",
        JLPT: 4
    },
    {
        kanji: "国際",
        kana: "こくさい",
        meaning: "international",
        JLPT: 4
    },
    {
        kanji: "心",
        kana: "こころ",
        meaning: "core,heart",
        JLPT: 4
    },
    {
        kanji: "御主人",
        kana: "ごしゅじん",
        meaning: "(honorable) your husband",
        JLPT: 4
    },
    {
        kanji: "故障",
        kana: "こしょう",
        meaning: "to break-down",
        JLPT: 4
    },
    {
        kanji: "ご存じ",
        kana: "ごぞんじ",
        meaning: "knowing,acquaintance",
        JLPT: 4
    },
    {
        kanji: "答",
        kana: "こたえ",
        meaning: "response",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ごちそう",
        meaning: "a feast",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "こと",
        meaning: "thing,matter",
        JLPT: 4
    },
    {
        kanji: "小鳥",
        kana: "ことり",
        meaning: "small bird",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "このあいだ",
        meaning: "the other day,recently",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "このごろ",
        meaning: "these days,nowadays",
        JLPT: 4
    },
    {
        kanji: "細かい",
        kana: "こまかい",
        meaning: "small, fine",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ごみ",
        meaning: "rubbish",
        JLPT: 4
    },
    {
        kanji: "込む",
        kana: "こむ",
        meaning: "to be crowded",
        JLPT: 4
    },
    {
        kanji: "米",
        kana: "こめ",
        meaning: "uncooked rice",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ごらんになる",
        meaning: "(respectful) to see",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "これから",
        meaning: "after this",
        JLPT: 4
    },
    {
        kanji: "怖い",
        kana: "こわい",
        meaning: "frightening",
        JLPT: 4
    },
    {
        kanji: "壊す",
        kana: "こわす",
        meaning: "to break",
        JLPT: 4
    },
    {
        kanji: "壊れる",
        kana: "こわれる",
        meaning: "to be broken",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "コンサート",
        meaning: "concert",
        JLPT: 4
    },
    {
        kanji: "今度",
        kana: "こんど",
        meaning: "now,next time",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "コンピューター",
        meaning: "computer",
        JLPT: 4
    },
    {
        kanji: "今夜",
        kana: "こんや",
        meaning: "tonight",
        JLPT: 4
    },
    {
        kanji: "最近",
        kana: "さいきん",
        meaning: "latest,nowadays",
        JLPT: 4
    },
    {
        kanji: "最後",
        kana: "さいご",
        meaning: "last,end",
        JLPT: 4
    },
    {
        kanji: "最初",
        kana: "さいしょ",
        meaning: "beginning,first",
        JLPT: 4
    },
    {
        kanji: "坂",
        kana: "さか",
        meaning: "slope,hill",
        JLPT: 4
    },
    {
        kanji: "探す",
        kana: "さがす",
        meaning: "to look for",
        JLPT: 4
    },
    {
        kanji: "下る",
        kana: "さがる",
        meaning: "to get down,to descend",
        JLPT: 4
    },
    {
        kanji: "盛ん",
        kana: "さかん",
        meaning: "popularity,prosperous",
        JLPT: 4
    },
    {
        kanji: "下げる",
        kana: "さげる",
        meaning: "to hang,to lower,to move back",
        JLPT: 4
    },
    {
        kanji: "差し上げる",
        kana: "さしあげる",
        meaning: "(polite) to give",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "さっき",
        meaning: "some time ago",
        JLPT: 4
    },
    {
        kanji: "寂しい",
        kana: "さびしい",
        meaning: "lonely",
        JLPT: 4
    },
    {
        kanji: "さ来月",
        kana: "さらいげつ",
        meaning: "the month after next",
        JLPT: 4
    },
    {
        kanji: "さ来週",
        kana: "さらいしゅう",
        meaning: "the week after next",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "サラダ",
        meaning: "salad",
        JLPT: 4
    },
    {
        kanji: "騒ぐ",
        kana: "さわぐ",
        meaning: "to make noise,to be excited",
        JLPT: 4
    },
    {
        kanji: "触る",
        kana: "さわる",
        meaning: "to touch",
        JLPT: 4
    },
    {
        kanji: "産業",
        kana: "さんぎょう",
        meaning: "industry",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "サンダル",
        meaning: "sandal",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "サンドイッチ",
        meaning: "sandwich",
        JLPT: 4
    },
    {
        kanji: "残念",
        kana: "ざんねん",
        meaning: "disappointment",
        JLPT: 4
    },
    {
        kanji: "市",
        kana: "し",
        meaning: "city",
        JLPT: 4
    },
    {
        kanji: "字",
        kana: "じ",
        meaning: "character",
        JLPT: 4
    },
    {
        kanji: "試合",
        kana: "しあい",
        meaning: "match,game",
        JLPT: 4
    },
    {
        kanji: "仕方",
        kana: "しかた",
        meaning: "method",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "しかる",
        meaning: "a particular",
        JLPT: 4
    },
    {
        kanji: "試験",
        kana: "しけん",
        meaning: "examination",
        JLPT: 4
    },
    {
        kanji: "事故",
        kana: "じこ",
        meaning: "accident",
        JLPT: 4
    },
    {
        kanji: "地震",
        kana: "じしん",
        meaning: "earthquake",
        JLPT: 4
    },
    {
        kanji: "時代",
        kana: "じだい",
        meaning: "era",
        JLPT: 4
    },
    {
        kanji: "下着",
        kana: "したぎ",
        meaning: "underwear",
        JLPT: 4
    },
    {
        kanji: "支度",
        kana: "したく",
        meaning: "to prepare",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "しっかり",
        meaning: "firmly,steadily",
        JLPT: 4
    },
    {
        kanji: "失敗",
        kana: "しっぱい",
        meaning: "failure,mistake",
        JLPT: 4
    },
    {
        kanji: "辞典",
        kana: "じてん",
        meaning: "dictionary",
        JLPT: 4
    },
    {
        kanji: "品物",
        kana: "しなもの",
        meaning: "goods",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "しばらく",
        meaning: "little while",
        JLPT: 4
    },
    {
        kanji: "島",
        kana: "しま",
        meaning: "island",
        JLPT: 4
    },
    {
        kanji: "市民",
        kana: "しみん",
        meaning: "citizen",
        JLPT: 4
    },
    {
        kanji: "事務所",
        kana: "じむしょ",
        meaning: "office",
        JLPT: 4
    },
    {
        kanji: "社会",
        kana: "しゃかい",
        meaning: "society,public",
        JLPT: 4
    },
    {
        kanji: "社長",
        kana: "しゃちょう",
        meaning: "company president",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "じゃま",
        meaning: "hindrance,intrusion",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ジャム",
        meaning: "jam",
        JLPT: 4
    },
    {
        kanji: "自由",
        kana: "じゆう",
        meaning: "freedom",
        JLPT: 4
    },
    {
        kanji: "習慣",
        kana: "しゅうかん",
        meaning: "custom,manners",
        JLPT: 4
    },
    {
        kanji: "住所",
        kana: "じゅうしょ",
        meaning: "an address,a residence",
        JLPT: 4
    },
    {
        kanji: "柔道",
        kana: "じゅうどう",
        meaning: "judo",
        JLPT: 4
    },
    {
        kanji: "十分",
        kana: "じゅうぶん",
        meaning: "enough",
        JLPT: 4
    },
    {
        kanji: "出席",
        kana: "しゅっせき",
        meaning: "to attend",
        JLPT: 4
    },
    {
        kanji: "出発",
        kana: "しゅっぱつ",
        meaning: "to depart",
        JLPT: 4
    },
    {
        kanji: "趣味",
        kana: "しゅみ",
        meaning: "hobby",
        JLPT: 4
    },
    {
        kanji: "準備",
        kana: "じゅんび",
        meaning: "to prepare",
        JLPT: 4
    },
    {
        kanji: "紹介",
        kana: "しょうかい",
        meaning: "introduction",
        JLPT: 4
    },
    {
        kanji: "小学校",
        kana: "しょうがっこう",
        meaning: "elementary school",
        JLPT: 4
    },
    {
        kanji: "小説",
        kana: "しょうせつ",
        meaning: "novel",
        JLPT: 4
    },
    {
        kanji: "招待",
        kana: "しょうたい",
        meaning: "to invite",
        JLPT: 4
    },
    {
        kanji: "承知",
        kana: "しょうち",
        meaning: "to consent",
        JLPT: 4
    },
    {
        kanji: "将来",
        kana: "しょうらい",
        meaning: "future,prospects",
        JLPT: 4
    },
    {
        kanji: "食事",
        kana: "しょくじ",
        meaning: "to have a meal",
        JLPT: 4
    },
    {
        kanji: "食料品",
        kana: "しょくりょうひん",
        meaning: "groceries",
        JLPT: 4
    },
    {
        kanji: "女性",
        kana: "じょせい",
        meaning: "woman",
        JLPT: 4
    },
    {
        kanji: "知らせる",
        kana: "しらせる",
        meaning: "to notify",
        JLPT: 4
    },
    {
        kanji: "調べる",
        kana: "しらべる",
        meaning: "to investigate",
        JLPT: 4
    },
    {
        kanji: "人口",
        kana: "じんこう",
        meaning: "population",
        JLPT: 4
    },
    {
        kanji: "神社",
        kana: "じんじゃ",
        meaning: "Shinto shrine",
        JLPT: 4
    },
    {
        kanji: "親切",
        kana: "しんせつ",
        meaning: "kindness",
        JLPT: 4
    },
    {
        kanji: "心配",
        kana: "しんぱい",
        meaning: "to worry",
        JLPT: 4
    },
    {
        kanji: "新聞社",
        kana: "しんぶんしゃ",
        meaning: "newspaper company",
        JLPT: 4
    },
    {
        kanji: "水泳",
        kana: "すいえい",
        meaning: "swimming",
        JLPT: 4
    },
    {
        kanji: "水道",
        kana: "すいどう",
        meaning: "water supply",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ずいぶん",
        meaning: "extremely",
        JLPT: 4
    },
    {
        kanji: "数学",
        kana: "すうがく",
        meaning: "mathematics,arithmetic",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "スーツ",
        meaning: "suit",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "スーツケース",
        meaning: "suitcase",
        JLPT: 4
    },
    {
        kanji: "過ぎる",
        kana: "すぎる",
        meaning: "to exceed",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "すく",
        meaning: "to become empty",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "スクリーン",
        meaning: "screen",
        JLPT: 4
    },
    {
        kanji: "凄い",
        kana: "すごい",
        meaning: "terrific",
        JLPT: 4
    },
    {
        kanji: "進む",
        kana: "すすむ",
        meaning: "to make progress",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "すっかり",
        meaning: "completely",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "すっと",
        meaning: "straight,all of a sudden",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ステーキ",
        meaning: "steak",
        JLPT: 4
    },
    {
        kanji: "捨てる",
        kana: "すてる",
        meaning: "to throw away",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ステレオ",
        meaning: "stereo",
        JLPT: 4
    },
    {
        kanji: "砂",
        kana: "すな",
        meaning: "sand",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "すばらしい",
        meaning: "wonderful",
        JLPT: 4
    },
    {
        kanji: "滑る",
        kana: "すべる",
        meaning: "to slide,to slip",
        JLPT: 4
    },
    {
        kanji: "隅",
        kana: "すみ",
        meaning: "corner,nook",
        JLPT: 4
    },
    {
        kanji: "済む",
        kana: "すむ",
        meaning: "to finish",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "すり",
        meaning: "pickpocket",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "すると",
        meaning: "then",
        JLPT: 4
    },
    {
        kanji: "生活",
        kana: "せいかつ",
        meaning: "to live",
        JLPT: 4
    },
    {
        kanji: "生産",
        kana: "せいさん",
        meaning: "to produce",
        JLPT: 4
    },
    {
        kanji: "政治",
        kana: "せいじ",
        meaning: "politics,government",
        JLPT: 4
    },
    {
        kanji: "西洋",
        kana: "せいよう",
        meaning: "western countries",
        JLPT: 4
    },
    {
        kanji: "世界",
        kana: "せかい",
        meaning: "the world",
        JLPT: 4
    },
    {
        kanji: "席",
        kana: "せき",
        meaning: "seat",
        JLPT: 4
    },
    {
        kanji: "説明",
        kana: "せつめい",
        meaning: "explanation",
        JLPT: 4
    },
    {
        kanji: "背中",
        kana: "せなか",
        meaning: "back of the body",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ぜひ",
        meaning: "without fail",
        JLPT: 4
    },
    {
        kanji: "世話",
        kana: "せわ",
        meaning: "to look after",
        JLPT: 4
    },
    {
        kanji: "線",
        kana: "せん",
        meaning: "line",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ぜんぜん",
        meaning: "not entirely (used in a negative sentence)",
        JLPT: 4
    },
    {
        kanji: "戦争",
        kana: "せんそう",
        meaning: "war",
        JLPT: 4
    },
    {
        kanji: "先輩",
        kana: "せんぱい",
        meaning: "senior",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "そう",
        meaning: "really",
        JLPT: 4
    },
    {
        kanji: "相談",
        kana: "そうだん",
        meaning: "to discuss",
        JLPT: 4
    },
    {
        kanji: "育てる",
        kana: "そだてる",
        meaning: "to rear,to bring up",
        JLPT: 4
    },
    {
        kanji: "卒業",
        kana: "そつぎょう",
        meaning: "graduation",
        JLPT: 4
    },
    {
        kanji: "祖父",
        kana: "そふ",
        meaning: "grandfather",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ソフト",
        meaning: "soft",
        JLPT: 4
    },
    {
        kanji: "祖母",
        kana: "そぼ",
        meaning: "grandmother",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "それで",
        meaning: "because of that",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "それに",
        meaning: "moreover",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "それほど",
        meaning: "to that extent",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "そろそろ",
        meaning: "gradually,soon",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "そんな",
        meaning: "that sort of",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "そんなに",
        meaning: "so much,like that",
        JLPT: 4
    },
    {
        kanji: "退院",
        kana: "たいいん",
        meaning: "to leave hospital",
        JLPT: 4
    },
    {
        kanji: "大学生",
        kana: "だいがくせい",
        meaning: "university student",
        JLPT: 4
    },
    {
        kanji: "大事",
        kana: "だいじ",
        meaning: "important,valuable,serious matter",
        JLPT: 4
    },
    {
        kanji: "大体",
        kana: "だいたい",
        meaning: "generally",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "たいてい",
        meaning: "usually",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "タイプ",
        meaning: "type,style",
        JLPT: 4
    },
    {
        kanji: "大分",
        kana: "だいぶ",
        meaning: "greatly",
        JLPT: 4
    },
    {
        kanji: "台風",
        kana: "たいふう",
        meaning: "typhoon",
        JLPT: 4
    },
    {
        kanji: "倒れる",
        kana: "たおれる",
        meaning: "to break down",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "だから",
        meaning: "so,therefore",
        JLPT: 4
    },
    {
        kanji: "確か",
        kana: "たしか",
        meaning: "definite",
        JLPT: 4
    },
    {
        kanji: "足す",
        kana: "たす",
        meaning: "to add a number",
        JLPT: 4
    },
    {
        kanji: "訪ねる",
        kana: "たずねる",
        meaning: "to visit",
        JLPT: 4
    },
    {
        kanji: "尋ねる",
        kana: "たずねる",
        meaning: "to ask",
        JLPT: 4
    },
    {
        kanji: "正しい",
        kana: "ただしい",
        meaning: "correct",
        JLPT: 4
    },
    {
        kanji: "畳",
        kana: "たたみ",
        meaning: "Japanese straw mat",
        JLPT: 4
    },
    {
        kanji: "立てる",
        kana: "たてる",
        meaning: "to stand something up",
        JLPT: 4
    },
    {
        kanji: "建てる",
        kana: "たてる",
        meaning: "to build",
        JLPT: 4
    },
    {
        kanji: "例えば",
        kana: "たとえば",
        meaning: "for example",
        JLPT: 4
    },
    {
        kanji: "棚",
        kana: "たな",
        meaning: "shelves",
        JLPT: 4
    },
    {
        kanji: "楽しみ",
        kana: "たのしみ",
        meaning: "joy",
        JLPT: 4
    },
    {
        kanji: "楽む",
        kana: "たのしむ",
        meaning: "to enjoy oneself",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "たまに",
        meaning: "occasionally",
        JLPT: 4
    },
    {
        kanji: "為",
        kana: "ため",
        meaning: "in order to",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "だめ",
        meaning: "no good",
        JLPT: 4
    },
    {
        kanji: "足りる",
        kana: "たりる",
        meaning: "to be enough",
        JLPT: 4
    },
    {
        kanji: "男性",
        kana: "だんせい",
        meaning: "male",
        JLPT: 4
    },
    {
        kanji: "暖房",
        kana: "だんぼう",
        meaning: "heating",
        JLPT: 4
    },
    {
        kanji: "血",
        kana: "ち",
        meaning: "blood",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "チェック",
        meaning: "to check",
        JLPT: 4
    },
    {
        kanji: "力",
        kana: "ちから",
        meaning: "strength,power",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ちっとも",
        meaning: "not at all (used with a negative verb)",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ちゃん",
        meaning: "suffix for familiar female person",
        JLPT: 4
    },
    {
        kanji: "注意",
        kana: "ちゅうい",
        meaning: "caution",
        JLPT: 4
    },
    {
        kanji: "中学校",
        kana: "ちゅうがっこう",
        meaning: "junior high school,middle school",
        JLPT: 4
    },
    {
        kanji: "注射",
        kana: "ちゅうしゃ",
        meaning: "injection",
        JLPT: 4
    },
    {
        kanji: "駐車場",
        kana: "ちゅうしゃじょう",
        meaning: "parking lot",
        JLPT: 4
    },
    {
        kanji: "地理",
        kana: "ちり",
        meaning: "geography",
        JLPT: 4
    },
    {
        kanji: "捕まえる",
        kana: "つかまえる",
        meaning: "to seize",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "つき",
        meaning: "moon",
        JLPT: 4
    },
    {
        kanji: "付く",
        kana: "つく",
        meaning: "to be attached",
        JLPT: 4
    },
    {
        kanji: "漬ける",
        kana: "つける",
        meaning: "to soak,to pickle",
        JLPT: 4
    },
    {
        kanji: "都合",
        kana: "つごう",
        meaning: "circumstances,convenience",
        JLPT: 4
    },
    {
        kanji: "伝える",
        kana: "つたえる",
        meaning: "to report",
        JLPT: 4
    },
    {
        kanji: "続く",
        kana: "つづく",
        meaning: "to be continued",
        JLPT: 4
    },
    {
        kanji: "続ける",
        kana: "つづける",
        meaning: "to continue",
        JLPT: 4
    },
    {
        kanji: "包む",
        kana: "つつむ",
        meaning: "to wrap",
        JLPT: 4
    },
    {
        kanji: "妻",
        kana: "つま",
        meaning: "(humble) wife",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "つもり",
        meaning: "intention",
        JLPT: 4
    },
    {
        kanji: "釣る",
        kana: "つる",
        meaning: "to fish",
        JLPT: 4
    },
    {
        kanji: "連れる",
        kana: "つれる",
        meaning: "to lead",
        JLPT: 4
    },
    {
        kanji: "丁寧",
        kana: "ていねい",
        meaning: "polite",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "テキスト",
        meaning: "text,text book",
        JLPT: 4
    },
    {
        kanji: "適当",
        kana: "てきとう",
        meaning: "suitability",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "できるだけ",
        meaning: "as much as possible",
        JLPT: 4
    },
    {
        kanji: "手伝う",
        kana: "てつだう",
        meaning: "to assist",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "テニス",
        meaning: "tennis",
        JLPT: 4
    },
    {
        kanji: "手袋",
        kana: "てぶくろ",
        meaning: "glove",
        JLPT: 4
    },
    {
        kanji: "寺",
        kana: "てら",
        meaning: "temple",
        JLPT: 4
    },
    {
        kanji: "点",
        kana: "てん",
        meaning: "point,dot",
        JLPT: 4
    },
    {
        kanji: "店員",
        kana: "てんいん",
        meaning: "shop assistant",
        JLPT: 4
    },
    {
        kanji: "天気予報",
        kana: "てんきよほう",
        meaning: "weather forecast",
        JLPT: 4
    },
    {
        kanji: "電灯",
        kana: "でんとう",
        meaning: "electric light",
        JLPT: 4
    },
    {
        kanji: "電報",
        kana: "でんぽう",
        meaning: "telegram",
        JLPT: 4
    },
    {
        kanji: "展覧会",
        kana: "てんらんかい",
        meaning: "exhibition",
        JLPT: 4
    },
    {
        kanji: "都",
        kana: "と",
        meaning: "metropolitan",
        JLPT: 4
    },
    {
        kanji: "道具",
        kana: "どうぐ",
        meaning: "tool,means",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "とうとう",
        meaning: "finally, after all",
        JLPT: 4
    },
    {
        kanji: "動物園",
        kana: "どうぶつえん",
        meaning: "zoo",
        JLPT: 4
    },
    {
        kanji: "遠く",
        kana: "とおく",
        meaning: "distant",
        JLPT: 4
    },
    {
        kanji: "通る",
        kana: "とおる",
        meaning: "to go through",
        JLPT: 4
    },
    {
        kanji: "特に",
        kana: "とくに",
        meaning: "particularly,especially",
        JLPT: 4
    },
    {
        kanji: "特別",
        kana: "とくべつ",
        meaning: "special",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "とこや",
        meaning: "barber",
        JLPT: 4
    },
    {
        kanji: "途中",
        kana: "とちゅう",
        meaning: "on the way",
        JLPT: 4
    },
    {
        kanji: "特急",
        kana: "とっきゅう",
        meaning: "limited express train (faster than an express train)",
        JLPT: 4
    },
    {
        kanji: "届ける",
        kana: "とどける",
        meaning: "to reach",
        JLPT: 4
    },
    {
        kanji: "泊まる",
        kana: "とまる",
        meaning: "to lodge at",
        JLPT: 4
    },
    {
        kanji: "止める",
        kana: "とめる",
        meaning: "to stop something",
        JLPT: 4
    },
    {
        kanji: "取り替える",
        kana: "とりかえる",
        meaning: "to exchange",
        JLPT: 4
    },
    {
        kanji: "泥棒",
        kana: "どろぼう",
        meaning: "thief",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "どんどん",
        meaning: "more and more",
        JLPT: 4
    },
    {
        kanji: "直す",
        kana: "なおす",
        meaning: "to fix,to repair",
        JLPT: 4
    },
    {
        kanji: "直る",
        kana: "なおる",
        meaning: "to be fixed,to be repaired",
        JLPT: 4
    },
    {
        kanji: "治る",
        kana: "なおる",
        meaning: "to be cured,to heal",
        JLPT: 4
    },
    {
        kanji: "中々",
        kana: "なかなか",
        meaning: "considerably",
        JLPT: 4
    },
    {
        kanji: "泣く",
        kana: "なく",
        meaning: "to weep",
        JLPT: 4
    },
    {
        kanji: "無くなる",
        kana: "なくなる",
        meaning: "to disappear,to get lost",
        JLPT: 4
    },
    {
        kanji: "亡くなる",
        kana: "なくなる",
        meaning: "to die",
        JLPT: 4
    },
    {
        kanji: "投げる",
        kana: "なげる",
        meaning: "to throw or cast away",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "なさる",
        meaning: "(respectful) to do",
        JLPT: 4
    },
    {
        kanji: "鳴る",
        kana: "なる",
        meaning: "to sound",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "なるべく",
        meaning: "as much as possible",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "なるほど",
        meaning: "now I understand",
        JLPT: 4
    },
    {
        kanji: "慣れる",
        kana: "なれる",
        meaning: "to grow accustomed to",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "におい",
        meaning: "a smell",
        JLPT: 4
    },
    {
        kanji: "苦い",
        kana: "にがい",
        meaning: "bitter",
        JLPT: 4
    },
    {
        kanji: "二階建て",
        kana: "にかいだて",
        meaning: "two storied",
        JLPT: 4
    },
    {
        kanji: "逃げる",
        kana: "にげる",
        meaning: "to escape",
        JLPT: 4
    },
    {
        kanji: "日記",
        kana: "にっき",
        meaning: "journal",
        JLPT: 4
    },
    {
        kanji: "入院",
        kana: "にゅういん",
        meaning: "to hospitalise",
        JLPT: 4
    },
    {
        kanji: "入学",
        kana: "にゅうがく",
        meaning: "to enter school or university",
        JLPT: 4
    },
    {
        kanji: "似る",
        kana: "にる",
        meaning: "to be similar",
        JLPT: 4
    },
    {
        kanji: "人形",
        kana: "にんぎょう",
        meaning: "doll, figure",
        JLPT: 4
    },
    {
        kanji: "盗む",
        kana: "ぬすむ",
        meaning: "to steal",
        JLPT: 4
    },
    {
        kanji: "塗る",
        kana: "ぬる",
        meaning: "to paint,to plaster",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ぬれる",
        meaning: "to get wet",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ねだん",
        meaning: "price",
        JLPT: 4
    },
    {
        kanji: "熱",
        kana: "ねつ",
        meaning: "fever",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ねっしん",
        meaning: "enthusiasm",
        JLPT: 4
    },
    {
        kanji: "寝坊",
        kana: "ねぼう",
        meaning: "sleeping in late",
        JLPT: 4
    },
    {
        kanji: "眠い",
        kana: "ねむい",
        meaning: "sleepy",
        JLPT: 4
    },
    {
        kanji: "眠る",
        kana: "ねむる",
        meaning: "to sleep",
        JLPT: 4
    },
    {
        kanji: "残る",
        kana: "のこる",
        meaning: "to remain",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "のど",
        meaning: "throat",
        JLPT: 4
    },
    {
        kanji: "乗り換える",
        kana: "のりかえる",
        meaning: "to change between buses or trains",
        JLPT: 4
    },
    {
        kanji: "乗り物",
        kana: "のりもの",
        meaning: "vehicle",
        JLPT: 4
    },
    {
        kanji: "葉",
        kana: "は",
        meaning: "leaf",
        JLPT: 4
    },
    {
        kanji: "場合",
        kana: "ばあい",
        meaning: "situation",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "パート",
        meaning: "part time",
        JLPT: 4
    },
    {
        kanji: "倍",
        kana: "ばい",
        meaning: "double",
        JLPT: 4
    },
    {
        kanji: "拝見",
        kana: "はいけん",
        meaning: "(humble) to look at",
        JLPT: 4
    },
    {
        kanji: "歯医者",
        kana: "はいしゃ",
        meaning: "dentist",
        JLPT: 4
    },
    {
        kanji: "運ぶ",
        kana: "はこぶ",
        meaning: "to transport",
        JLPT: 4
    },
    {
        kanji: "始める",
        kana: "はじめる",
        meaning: "to begin",
        JLPT: 4
    },
    {
        kanji: "場所",
        kana: "ばしょ",
        meaning: "location",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "はず",
        meaning: "it should be so",
        JLPT: 4
    },
    {
        kanji: "恥ずかしい",
        kana: "はずかしい",
        meaning: "embarrassed",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "パソコン",
        meaning: "personal computer",
        JLPT: 4
    },
    {
        kanji: "発音",
        kana: "はつおん",
        meaning: "pronunciation",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "はっきり",
        meaning: "clearly",
        JLPT: 4
    },
    {
        kanji: "花見",
        kana: "はなみ",
        meaning: "cherry-blossom viewing",
        JLPT: 4
    },
    {
        kanji: "林",
        kana: "はやし",
        meaning: "woods,forester",
        JLPT: 4
    },
    {
        kanji: "払う",
        kana: "はらう",
        meaning: "to pay",
        JLPT: 4
    },
    {
        kanji: "番組",
        kana: "ばんぐみ",
        meaning: "television or radio program",
        JLPT: 4
    },
    {
        kanji: "反対",
        kana: "はんたい",
        meaning: "opposition",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ハンドバッグ",
        meaning: "handbag　",
        JLPT: 4
    },
    {
        kanji: "日",
        kana: "ひ",
        meaning: "day, sun",
        JLPT: 4
    },
    {
        kanji: "火",
        kana: "ひ",
        meaning: "fire",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ピアノ",
        meaning: "piano",
        JLPT: 4
    },
    {
        kanji: "冷える",
        kana: "ひえる",
        meaning: "to grow cold",
        JLPT: 4
    },
    {
        kanji: "光",
        kana: "ひかり",
        meaning: "light",
        JLPT: 4
    },
    {
        kanji: "光る",
        kana: "ひかる",
        meaning: "to shine,to glitter",
        JLPT: 4
    },
    {
        kanji: "引き出し",
        kana: "ひきだし",
        meaning: "drawer,drawing out",
        JLPT: 4
    },
    {
        kanji: "引き出す",
        kana: "ひきだす",
        meaning: "to withdraw",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ひげ",
        meaning: "beard",
        JLPT: 4
    },
    {
        kanji: "飛行場",
        kana: "ひこうじょう",
        meaning: "airport",
        JLPT: 4
    },
    {
        kanji: "久しぶり",
        kana: "ひさしぶり",
        meaning: "after a long time",
        JLPT: 4
    },
    {
        kanji: "美術館",
        kana: "びじゅつかん",
        meaning: "art gallery",
        JLPT: 4
    },
    {
        kanji: "非常に",
        kana: "ひじょうに",
        meaning: "extremely",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "びっくり",
        meaning: "to be surprised",
        JLPT: 4
    },
    {
        kanji: "引っ越す",
        kana: "ひっこす",
        meaning: "to move house",
        JLPT: 4
    },
    {
        kanji: "必要",
        kana: "ひつよう",
        meaning: "necessary",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ひどい",
        meaning: "awful",
        JLPT: 4
    },
    {
        kanji: "開く",
        kana: "ひらく",
        meaning: "to open an event",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ビル",
        meaning: "building or bill",
        JLPT: 4
    },
    {
        kanji: "昼間",
        kana: "ひるま",
        meaning: "daytime,during the day",
        JLPT: 4
    },
    {
        kanji: "昼休み",
        kana: "ひるやすみ",
        meaning: "noon break",
        JLPT: 4
    },
    {
        kanji: "拾う",
        kana: "ひろう",
        meaning: "to pick up,to gather",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ファックス",
        meaning: "fax",
        JLPT: 4
    },
    {
        kanji: "増える",
        kana: "ふえる",
        meaning: "to increase",
        JLPT: 4
    },
    {
        kanji: "深い",
        kana: "ふかい",
        meaning: "deep",
        JLPT: 4
    },
    {
        kanji: "複雑",
        kana: "ふくざつ",
        meaning: "complexity,complication",
        JLPT: 4
    },
    {
        kanji: "復習",
        kana: "ふくしゅう",
        meaning: "revision",
        JLPT: 4
    },
    {
        kanji: "部長",
        kana: "ぶちょう",
        meaning: "head of a section",
        JLPT: 4
    },
    {
        kanji: "普通",
        kana: "ふつう",
        meaning: "usually, or a train that stops at every station",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ぶどう",
        meaning: "grapes",
        JLPT: 4
    },
    {
        kanji: "太る",
        kana: "ふとる",
        meaning: "to become fat",
        JLPT: 4
    },
    {
        kanji: "布団",
        kana: "ふとん",
        meaning: "Japanese bedding, futon",
        JLPT: 4
    },
    {
        kanji: "舟",
        kana: "ふね",
        meaning: "ship",
        JLPT: 4
    },
    {
        kanji: "不便",
        kana: "ふべん",
        meaning: "inconvenience",
        JLPT: 4
    },
    {
        kanji: "踏む",
        kana: "ふむ",
        meaning: "to step on",
        JLPT: 4
    },
    {
        kanji: "降り出す",
        kana: "ふりだす",
        meaning: "to start to rain",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "プレゼント",
        meaning: "present",
        JLPT: 4
    },
    {
        kanji: "文化",
        kana: "ぶんか",
        meaning: "culture",
        JLPT: 4
    },
    {
        kanji: "文学",
        kana: "ぶんがく",
        meaning: "literature",
        JLPT: 4
    },
    {
        kanji: "文法",
        kana: "ぶんぽう",
        meaning: "grammar",
        JLPT: 4
    },
    {
        kanji: "別",
        kana: "べつ",
        meaning: "different",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ベル",
        meaning: "bell",
        JLPT: 4
    },
    {
        kanji: "変",
        kana: "へん",
        meaning: "strange",
        JLPT: 4
    },
    {
        kanji: "返事",
        kana: "へんじ",
        meaning: "reply",
        JLPT: 4
    },
    {
        kanji: "貿易",
        kana: "ぼうえき",
        meaning: "trade",
        JLPT: 4
    },
    {
        kanji: "放送",
        kana: "ほうそう",
        meaning: "to broadcast",
        JLPT: 4
    },
    {
        kanji: "法律",
        kana: "ほうりつ",
        meaning: "law",
        JLPT: 4
    },
    {
        kanji: "僕",
        kana: "ぼく",
        meaning: "I (used by males)",
        JLPT: 4
    },
    {
        kanji: "星",
        kana: "ほし",
        meaning: "star",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ほど",
        meaning: "extent",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ほとんど",
        meaning: "mostly",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ほめる",
        meaning: "to praise",
        JLPT: 4
    },
    {
        kanji: "翻訳",
        kana: "ほんやく",
        meaning: "translation",
        JLPT: 4
    },
    {
        kanji: "参る",
        kana: "まいる",
        meaning: "(humble) to go,to come",
        JLPT: 4
    },
    {
        kanji: "負ける",
        kana: "まける",
        meaning: "to lose",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "まじめ",
        meaning: "serious",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "まず",
        meaning: "first of all",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "または",
        meaning: "or,otherwise",
        JLPT: 4
    },
    {
        kanji: "間違える",
        kana: "まちがえる",
        meaning: "to make a mistake",
        JLPT: 4
    },
    {
        kanji: "間に合う",
        kana: "まにあう",
        meaning: "to be in time for",
        JLPT: 4
    },
    {
        kanji: "周り",
        kana: "まわり",
        meaning: "surroundings",
        JLPT: 4
    },
    {
        kanji: "回る",
        kana: "まわる",
        meaning: "to go around",
        JLPT: 4
    },
    {
        kanji: "漫画",
        kana: "まんが",
        meaning: "comic",
        JLPT: 4
    },
    {
        kanji: "真中",
        kana: "まんなか",
        meaning: "middle",
        JLPT: 4
    },
    {
        kanji: "見える",
        kana: "みえる",
        meaning: "to be in sight",
        JLPT: 4
    },
    {
        kanji: "湖",
        kana: "みずうみ",
        meaning: "lake",
        JLPT: 4
    },
    {
        kanji: "味噌",
        kana: "みそ",
        meaning: "bean paste",
        JLPT: 4
    },
    {
        kanji: "見つかる",
        kana: "みつかる",
        meaning: "to be discovered",
        JLPT: 4
    },
    {
        kanji: "見つける",
        kana: "みつける",
        meaning: "to discover",
        JLPT: 4
    },
    {
        kanji: "皆",
        kana: "みな",
        meaning: "everybody",
        JLPT: 4
    },
    {
        kanji: "港",
        kana: "みなと",
        meaning: "harbour",
        JLPT: 4
    },
    {
        kanji: "向かう",
        kana: "むかう",
        meaning: "to face",
        JLPT: 4
    },
    {
        kanji: "迎える",
        kana: "むかえる",
        meaning: "to go out to meet",
        JLPT: 4
    },
    {
        kanji: "昔",
        kana: "むかし",
        meaning: "olden days, former",
        JLPT: 4
    },
    {
        kanji: "虫",
        kana: "むし",
        meaning: "insect",
        JLPT: 4
    },
    {
        kanji: "息子",
        kana: "むすこ",
        meaning: "(humble) son",
        JLPT: 4
    },
    {
        kanji: "娘",
        kana: "むすめ",
        meaning: "(humble) daughter",
        JLPT: 4
    },
    {
        kanji: "無理",
        kana: "むり",
        meaning: "impossible",
        JLPT: 4
    },
    {
        kanji: "召し上がる",
        kana: "めしあがる",
        meaning: "(polite) to eat",
        JLPT: 4
    },
    {
        kanji: "珍しい",
        kana: "めずらしい",
        meaning: "rare",
        JLPT: 4
    },
    {
        kanji: "申し上げる",
        kana: "もうしあげる",
        meaning: "(humble) to say,to tell",
        JLPT: 4
    },
    {
        kanji: "申す",
        kana: "もうす",
        meaning: "(humble) to be called,to say",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "もうすぐ",
        meaning: "soon",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "もし",
        meaning: "if",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "もちろん",
        meaning: "of course",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "もっとも",
        meaning: "extremely",
        JLPT: 4
    },
    {
        kanji: "戻る",
        kana: "もどる",
        meaning: "to turn back",
        JLPT: 4
    },
    {
        kanji: "木綿",
        kana: "もめん",
        meaning: "cotton",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "もらう",
        meaning: "to receive",
        JLPT: 4
    },
    {
        kanji: "森",
        kana: "もり",
        meaning: "forest",
        JLPT: 4
    },
    {
        kanji: "焼く",
        kana: "やく",
        meaning: "to bake,to grill",
        JLPT: 4
    },
    {
        kanji: "約束",
        kana: "やくそく",
        meaning: "promise",
        JLPT: 4
    },
    {
        kanji: "役に立つ",
        kana: "やくにたつ",
        meaning: "to be helpful",
        JLPT: 4
    },
    {
        kanji: "焼ける",
        kana: "やける",
        meaning: "to burn,to be roasted",
        JLPT: 4
    },
    {
        kanji: "優しい",
        kana: "やさしい",
        meaning: "kind",
        JLPT: 4
    },
    {
        kanji: "痩せる",
        kana: "やせる",
        meaning: "to become thin",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "やっと",
        meaning: "at last",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "やはり",
        meaning: "as expected; sure enough; just as one thought・note: not やっぱり",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "やっぱり",
        meaning: "as expected; sure enough; just as one thought・note: not やはり",
        JLPT: 4
    },
    {
        kanji: "止む",
        kana: "やむ",
        meaning: "to stop",
        JLPT: 4
    },
    {
        kanji: "止める",
        kana: "やめる",
        meaning: "to stop",
        JLPT: 4
    },
    {
        kanji: "柔らかい",
        kana: "やわらかい",
        meaning: "soft",
        JLPT: 4
    },
    {
        kanji: "湯",
        kana: "ゆ",
        meaning: "hot water",
        JLPT: 4
    },
    {
        kanji: "輸出",
        kana: "ゆしゅつ",
        meaning: "to export",
        JLPT: 4
    },
    {
        kanji: "輸入",
        kana: "ゆにゅう",
        meaning: "to import",
        JLPT: 4
    },
    {
        kanji: "指",
        kana: "ゆび",
        meaning: "finger",
        JLPT: 4
    },
    {
        kanji: "指輪",
        kana: "ゆびわ",
        meaning: "finger ring",
        JLPT: 4
    },
    {
        kanji: "夢",
        kana: "ゆめ",
        meaning: "dream",
        JLPT: 4
    },
    {
        kanji: "揺れる",
        kana: "ゆれる",
        meaning: "to shake,to sway",
        JLPT: 4
    },
    {
        kanji: "用",
        kana: "よう",
        meaning: "use",
        JLPT: 4
    },
    {
        kanji: "用意",
        kana: "ようい",
        meaning: "preparation",
        JLPT: 4
    },
    {
        kanji: "用事",
        kana: "ようじ",
        meaning: "things to do",
        JLPT: 4
    },
    {
        kanji: "汚れる",
        kana: "よごれる",
        meaning: "to get dirty",
        JLPT: 4
    },
    {
        kanji: "予習",
        kana: "よしゅう",
        meaning: "preparation for a lesson",
        JLPT: 4
    },
    {
        kanji: "予定",
        kana: "よてい",
        meaning: "arrangement",
        JLPT: 4
    },
    {
        kanji: "予約",
        kana: "よやく",
        meaning: "reservation",
        JLPT: 4
    },
    {
        kanji: "寄る",
        kana: "よる",
        meaning: "to visit",
        JLPT: 4
    },
    {
        kanji: "喜ぶ",
        kana: "よろこぶ",
        meaning: "to be delighted",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "よろしい",
        meaning: "(respectful) OK,all right",
        JLPT: 4
    },
    {
        kanji: "理由",
        kana: "りゆう",
        meaning: "reason",
        JLPT: 4
    },
    {
        kanji: "利用",
        kana: "りよう",
        meaning: "utilization",
        JLPT: 4
    },
    {
        kanji: "両方",
        kana: "りょうほう",
        meaning: "both sides",
        JLPT: 4
    },
    {
        kanji: "旅館",
        kana: "りょかん",
        meaning: "Japanese hotel",
        JLPT: 4
    },
    {
        kanji: "留守",
        kana: "るす",
        meaning: "absence",
        JLPT: 4
    },
    {
        kanji: "冷房",
        kana: "れいぼう",
        meaning: "air conditioning",
        JLPT: 4
    },
    {
        kanji: "歴史",
        kana: "れきし",
        meaning: "history",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "レジ",
        meaning: "register",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "レポート",
        meaning: "report",
        JLPT: 4
    },
    {
        kanji: "連絡",
        kana: "れんらく",
        meaning: "contact",
        JLPT: 4
    },
    {
        kanji: "",
        kana: "ワープロ",
        meaning: "word processor",
        JLPT: 4
    },
    {
        kanji: "沸かす",
        kana: "わかす",
        meaning: "to boil,to heat",
        JLPT: 4
    },
    {
        kanji: "別れる",
        kana: "わかれる",
        meaning: "to separate",
        JLPT: 4
    },
    {
        kanji: "沸く",
        kana: "わく",
        meaning: "to boil, to grow hot,to get excited",
        JLPT: 4
    },
    {
        kanji: "訳",
        kana: "わけ",
        meaning: "meaning,reason",
        JLPT: 4
    },
    {
        kanji: "忘れ物",
        kana: "わすれもの",
        meaning: "lost article",
        JLPT: 4
    },
    {
        kanji: "笑う",
        kana: "わらう",
        meaning: "to laugh,to smile",
        JLPT: 4
    },
    {
        kanji: "割合",
        kana: "わりあい",
        meaning: "rate,ratio,percentage",
        JLPT: 4
    },
    {
        kanji: "割れる",
        kana: "われる",
        meaning: "to break",
        JLPT: 4
    },
    {
        kanji: "泳ぎ方",
        kana: "およぎかた",
        meaning: "way of swimming",
        JLPT: 4
    },
    {
        kanji: "会う",
        kana: "あう",
        meaning: "to meet",
        JLPT: 5
    },
    {
        kanji: "青",
        kana: "あお",
        meaning: "blue",
        JLPT: 5
    },
    {
        kanji: "青い",
        kana: "あおい",
        meaning: "blue",
        JLPT: 5
    },
    {
        kanji: "赤",
        kana: "あか",
        meaning: "red",
        JLPT: 5
    },
    {
        kanji: "赤い",
        kana: "あかい",
        meaning: "red",
        JLPT: 5
    },
    {
        kanji: "明い",
        kana: "あかるい",
        meaning: "bright",
        JLPT: 5
    },
    {
        kanji: "秋",
        kana: "あき",
        meaning: "autumn",
        JLPT: 5
    },
    {
        kanji: "開く",
        kana: "あく",
        meaning: "to open, to become open",
        JLPT: 5
    },
    {
        kanji: "開ける",
        kana: "あける",
        meaning: "to open",
        JLPT: 5
    },
    {
        kanji: "上げる",
        kana: "あげる",
        meaning: "to give",
        JLPT: 5
    },
    {
        kanji: "朝",
        kana: "あさ",
        meaning: "morning",
        JLPT: 5
    },
    {
        kanji: "朝御飯",
        kana: "あさごはん",
        meaning: "breakfast",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あさって",
        meaning: "day after tomorrow",
        JLPT: 5
    },
    {
        kanji: "足",
        kana: "あし",
        meaning: "foot, leg",
        JLPT: 5
    },
    {
        kanji: "明日",
        kana: "あした",
        meaning: "tomorrow",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あそこ",
        meaning: "over there",
        JLPT: 5
    },
    {
        kanji: "遊ぶ",
        kana: "あそぶ",
        meaning: "to play, to make a visit",
        JLPT: 5
    },
    {
        kanji: "暖かい",
        kana: "あたたかい",
        meaning: "warm",
        JLPT: 5
    },
    {
        kanji: "頭",
        kana: "あたま",
        meaning: "head",
        JLPT: 5
    },
    {
        kanji: "新しい",
        kana: "あたらしい",
        meaning: "new",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あちら",
        meaning: "there",
        JLPT: 5
    },
    {
        kanji: "暑い",
        kana: "あつい",
        meaning: "hot",
        JLPT: 5
    },
    {
        kanji: "熱い",
        kana: "あつい",
        meaning: "hot to the touch",
        JLPT: 5
    },
    {
        kanji: "厚い",
        kana: "あつい",
        meaning: "kind, deep, thick",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あっち",
        meaning: "over there",
        JLPT: 5
    },
    {
        kanji: "後",
        kana: "あと",
        meaning: "afterwards",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あなた",
        meaning: "you",
        JLPT: 5
    },
    {
        kanji: "兄",
        kana: "あに",
        meaning: "(humble) older brother",
        JLPT: 5
    },
    {
        kanji: "姉",
        kana: "あね",
        meaning: "(humble) older sister",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あの",
        meaning: "that over there",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あの",
        meaning: "um...",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "アパート",
        meaning: "apartment",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あびる",
        meaning: "to bathe, to shower",
        JLPT: 5
    },
    {
        kanji: "危ない",
        kana: "あぶない",
        meaning: "dangerous",
        JLPT: 5
    },
    {
        kanji: "甘い",
        kana: "あまい",
        meaning: "sweet",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あまり",
        meaning: "not very",
        JLPT: 5
    },
    {
        kanji: "雨",
        kana: "あめ",
        meaning: "rain",
        JLPT: 5
    },
    {
        kanji: "飴",
        kana: "あめ",
        meaning: "candy",
        JLPT: 5
    },
    {
        kanji: "洗う",
        kana: "あらう",
        meaning: "to wash",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ある",
        meaning: "to be,to have (used for inanimate objects)",
        JLPT: 5
    },
    {
        kanji: "歩く",
        kana: "あるく",
        meaning: "to walk",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "あれ",
        meaning: "that",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いい",
        meaning: "good",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いいえ",
        meaning: "no",
        JLPT: 5
    },
    {
        kanji: "言う",
        kana: "いう",
        meaning: "to say",
        JLPT: 5
    },
    {
        kanji: "家",
        kana: "いえ",
        meaning: "house",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いかが",
        meaning: "how",
        JLPT: 5
    },
    {
        kanji: "行く",
        kana: "いく",
        meaning: "to go",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いくつ",
        meaning: "how many?,how old?",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いくら",
        meaning: "how much?",
        JLPT: 5
    },
    {
        kanji: "池",
        kana: "いけ",
        meaning: "pond",
        JLPT: 5
    },
    {
        kanji: "医者",
        kana: "いしゃ",
        meaning: "medical doctor",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いす",
        meaning: "chair",
        JLPT: 5
    },
    {
        kanji: "忙しい",
        kana: "いそがしい",
        meaning: "busy, irritated",
        JLPT: 5
    },
    {
        kanji: "痛い",
        kana: "いたい",
        meaning: "painful",
        JLPT: 5
    },
    {
        kanji: "一",
        kana: "いち",
        meaning: "one",
        JLPT: 5
    },
    {
        kanji: "一日",
        kana: "いちにち",
        meaning: "first of the month",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いちばん",
        meaning: "best, first",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いつ",
        meaning: "when",
        JLPT: 5
    },
    {
        kanji: "五日",
        kana: "いつか",
        meaning: "five days, fifth day",
        JLPT: 5
    },
    {
        kanji: "一緒",
        kana: "いっしょ",
        meaning: "together",
        JLPT: 5
    },
    {
        kanji: "五つ",
        kana: "いつつ",
        meaning: "five",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いつも",
        meaning: "always",
        JLPT: 5
    },
    {
        kanji: "犬",
        kana: "いぬ",
        meaning: "dog",
        JLPT: 5
    },
    {
        kanji: "今",
        kana: "いま",
        meaning: "now",
        JLPT: 5
    },
    {
        kanji: "意味",
        kana: "いみ",
        meaning: "meaning",
        JLPT: 5
    },
    {
        kanji: "妹",
        kana: "いもうと",
        meaning: "(humble) younger sister",
        JLPT: 5
    },
    {
        kanji: "嫌",
        kana: "いや",
        meaning: "unpleasant",
        JLPT: 5
    },
    {
        kanji: "入口",
        kana: "いりぐち",
        meaning: "entrance",
        JLPT: 5
    },
    {
        kanji: "居る",
        kana: "いる",
        meaning: "to be, to have (used for people and animals)",
        JLPT: 5
    },
    {
        kanji: "要る",
        kana: "いる",
        meaning: "to need",
        JLPT: 5
    },
    {
        kanji: "入れる",
        kana: "いれる",
        meaning: "to put in",
        JLPT: 5
    },
    {
        kanji: "色",
        kana: "いろ",
        meaning: "colour",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "いろいろ",
        meaning: "various",
        JLPT: 5
    },
    {
        kanji: "上",
        kana: "うえ",
        meaning: "on top of",
        JLPT: 5
    },
    {
        kanji: "後ろ",
        kana: "うしろ",
        meaning: "behind",
        JLPT: 5
    },
    {
        kanji: "薄い",
        kana: "うすい",
        meaning: "thin,weak",
        JLPT: 5
    },
    {
        kanji: "歌",
        kana: "うた",
        meaning: "song",
        JLPT: 5
    },
    {
        kanji: "歌う",
        kana: "うたう",
        meaning: "to sing",
        JLPT: 5
    },
    {
        kanji: "生まれる",
        kana: "うまれる",
        meaning: "to be born",
        JLPT: 5
    },
    {
        kanji: "海",
        kana: "うみ",
        meaning: "sea",
        JLPT: 5
    },
    {
        kanji: "売る",
        kana: "うる",
        meaning: "to sell",
        JLPT: 5
    },
    {
        kanji: "煩い",
        kana: "うるさい",
        meaning: "noisy, annoying",
        JLPT: 5
    },
    {
        kanji: "上着",
        kana: "うわぎ",
        meaning: "jacket",
        JLPT: 5
    },
    {
        kanji: "絵",
        kana: "え",
        meaning: "picture",
        JLPT: 5
    },
    {
        kanji: "映画",
        kana: "えいが",
        meaning: "movie",
        JLPT: 5
    },
    {
        kanji: "映画館",
        kana: "えいがかん",
        meaning: "cinema",
        JLPT: 5
    },
    {
        kanji: "英語",
        kana: "えいご",
        meaning: "English language",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ええ",
        meaning: "yes",
        JLPT: 5
    },
    {
        kanji: "駅",
        kana: "えき",
        meaning: "station",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "エレベーター",
        meaning: "elevator",
        JLPT: 5
    },
    {
        kanji: "鉛筆",
        kana: "えんぴつ",
        meaning: "pencil",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "おいしい",
        meaning: "delicious",
        JLPT: 5
    },
    {
        kanji: "多い",
        kana: "おおい",
        meaning: "many",
        JLPT: 5
    },
    {
        kanji: "大きい",
        kana: "おおきい",
        meaning: "big",
        JLPT: 5
    },
    {
        kanji: "大きな",
        kana: "おおきな",
        meaning: "big",
        JLPT: 5
    },
    {
        kanji: "大勢",
        kana: "おおぜい",
        meaning: "great number of people",
        JLPT: 5
    },
    {
        kanji: "お母さん",
        kana: "おかあさん",
        meaning: "(honorable) mother",
        JLPT: 5
    },
    {
        kanji: "お菓子",
        kana: "おかし",
        meaning: "sweets, candy",
        JLPT: 5
    },
    {
        kanji: "お金",
        kana: "おかね",
        meaning: "money",
        JLPT: 5
    },
    {
        kanji: "起きる",
        kana: "おきる",
        meaning: "to get up",
        JLPT: 5
    },
    {
        kanji: "置く",
        kana: "おく",
        meaning: "to put",
        JLPT: 5
    },
    {
        kanji: "奥さん",
        kana: "おくさん",
        meaning: "(honorable) wife",
        JLPT: 5
    },
    {
        kanji: "お酒",
        kana: "おさけ",
        meaning: "alcohol, rice wine",
        JLPT: 5
    },
    {
        kanji: "お皿",
        kana: "おさら",
        meaning: "plate, dish",
        JLPT: 5
    },
    {
        kanji: "伯父さん",
        kana: "おじいさん",
        meaning: "grandfather, male senior citizen",
        JLPT: 5
    },
    {
        kanji: "教える",
        kana: "おしえる",
        meaning: "to teach, to tell",
        JLPT: 5
    },
    {
        kanji: "叔父",
        kana: "おじ",
        meaning: "uncle, middle aged gentleman",
        JLPT: 5
    },
    {
        kanji: "押す",
        kana: "おす",
        meaning: "to push, to stamp something",
        JLPT: 5
    },
    {
        kanji: "遅い",
        kana: "おそい",
        meaning: "late, slow",
        JLPT: 5
    },
    {
        kanji: "お茶",
        kana: "おちゃ",
        meaning: "green tea",
        JLPT: 5
    },
    {
        kanji: "お手洗い",
        kana: "おてあらい",
        meaning: "bathroom",
        JLPT: 5
    },
    {
        kanji: "お父さん",
        kana: "おとうさん",
        meaning: "(honorable) father",
        JLPT: 5
    },
    {
        kanji: "弟",
        kana: "おとうと",
        meaning: "younger brother",
        JLPT: 5
    },
    {
        kanji: "男",
        kana: "おとこ",
        meaning: "Man",
        JLPT: 5
    },
    {
        kanji: "男の子",
        kana: "おとこのこ",
        meaning: "Boy",
        JLPT: 5
    },
    {
        kanji: "一昨日",
        kana: "おととい",
        meaning: "day before yesterday",
        JLPT: 5
    },
    {
        kanji: "一昨年",
        kana: "おととし",
        meaning: "year before last",
        JLPT: 5
    },
    {
        kanji: "大人",
        kana: "おとな",
        meaning: "Adult",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "おなか",
        meaning: "stomach",
        JLPT: 5
    },
    {
        kanji: "同じ",
        kana: "おなじ",
        meaning: "same",
        JLPT: 5
    },
    {
        kanji: "お兄さん",
        kana: "おにいさん",
        meaning: "(honorable) older brother",
        JLPT: 5
    },
    {
        kanji: "お姉さん",
        kana: "おねえさん",
        meaning: "(honorable) older sister",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "おばあさん",
        meaning: "grandmother, female senior-citizen",
        JLPT: 5
    },
    {
        kanji: "伯母さん",
        kana: "おばさん",
        meaning: "Aunt",
        JLPT: 5
    },
    {
        kanji: "お風呂",
        kana: "おふろ",
        meaning: "Bath",
        JLPT: 5
    },
    {
        kanji: "お弁当",
        kana: "おべんとう",
        meaning: "boxed lunch",
        JLPT: 5
    },
    {
        kanji: "覚える",
        kana: "おぼえる",
        meaning: "to remember",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "おまわりさん",
        meaning: "friendly term for policeman",
        JLPT: 5
    },
    {
        kanji: "重い",
        kana: "おもい",
        meaning: "Heavy",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "おもしろい",
        meaning: "Interesting",
        JLPT: 5
    },
    {
        kanji: "泳ぐ",
        kana: "およぐ",
        meaning: "to swim",
        JLPT: 5
    },
    {
        kanji: "降りる",
        kana: "おりる",
        meaning: "to get off, to descend",
        JLPT: 5
    },
    {
        kanji: "終る",
        kana: "おわる",
        meaning: "to finish",
        JLPT: 5
    },
    {
        kanji: "音楽",
        kana: "おんがく",
        meaning: "Music",
        JLPT: 5
    },
    {
        kanji: "女",
        kana: "おんな",
        meaning: "Woman",
        JLPT: 5
    },
    {
        kanji: "女の子",
        kana: "おんなのこ",
        meaning: "Girl",
        JLPT: 5
    },
    {
        kanji: "外国",
        kana: "がいこく",
        meaning: "foreign country",
        JLPT: 5
    },
    {
        kanji: "外国人",
        kana: "がいこくじん",
        meaning: "Foreigner",
        JLPT: 5
    },
    {
        kanji: "会社",
        kana: "かいしゃ",
        meaning: "Company",
        JLPT: 5
    },
    {
        kanji: "階段",
        kana: "かいだん",
        meaning: "Stairs",
        JLPT: 5
    },
    {
        kanji: "買い物",
        kana: "かいもの",
        meaning: "Shopping",
        JLPT: 5
    },
    {
        kanji: "買う",
        kana: "かう",
        meaning: "to buy",
        JLPT: 5
    },
    {
        kanji: "返す",
        kana: "かえす",
        meaning: "to return something",
        JLPT: 5
    },
    {
        kanji: "帰る",
        kana: "かえる",
        meaning: "to go back",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "かかる",
        meaning: "to take time or money",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "かぎ",
        meaning: "Key",
        JLPT: 5
    },
    {
        kanji: "書く",
        kana: "かく",
        meaning: "to write",
        JLPT: 5
    },
    {
        kanji: "学生",
        kana: "がくせい",
        meaning: "Student",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "かける",
        meaning: "to call by phone",
        JLPT: 5
    },
    {
        kanji: "傘",
        kana: "かさ",
        meaning: "Umbrella",
        JLPT: 5
    },
    {
        kanji: "貸す",
        kana: "かす",
        meaning: "to lend",
        JLPT: 5
    },
    {
        kanji: "風",
        kana: "かぜ",
        meaning: "Wind",
        JLPT: 5
    },
    {
        kanji: "風邪",
        kana: "かぜ",
        meaning: "a cold",
        JLPT: 5
    },
    {
        kanji: "家族",
        kana: "かぞく",
        meaning: "Family",
        JLPT: 5
    },
    {
        kanji: "方",
        kana: "かた",
        meaning: "person, way of doing",
        JLPT: 5
    },
    {
        kanji: "学校",
        kana: "がっこう",
        meaning: "School",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "カップ",
        meaning: "Cup",
        JLPT: 5
    },
    {
        kanji: "家庭",
        kana: "かてい",
        meaning: "Household",
        JLPT: 5
    },
    {
        kanji: "角",
        kana: "かど",
        meaning: "a corner",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "かばん",
        meaning: "bag, basket",
        JLPT: 5
    },
    {
        kanji: "花瓶",
        kana: "かびん",
        meaning: "a vase",
        JLPT: 5
    },
    {
        kanji: "紙",
        kana: "かみ",
        meaning: "paper",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "カメラ",
        meaning: "camera",
        JLPT: 5
    },
    {
        kanji: "火曜日",
        kana: "かようび",
        meaning: "Tuesday",
        JLPT: 5
    },
    {
        kanji: "辛い",
        kana: "からい",
        meaning: "Spicy",
        JLPT: 5
    },
    {
        kanji: "体",
        kana: "からだ",
        meaning: "Body",
        JLPT: 5
    },
    {
        kanji: "借りる",
        kana: "かりる",
        meaning: "to borrow",
        JLPT: 5
    },
    {
        kanji: "軽い",
        kana: "かるい",
        meaning: "Light",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "カレー",
        meaning: "Curry",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "カレンダー",
        meaning: "calendar",
        JLPT: 5
    },
    {
        kanji: "川",
        kana: "かわ",
        meaning: "River",
        JLPT: 5
    },
    {
        kanji: "河",
        kana: "かわ",
        meaning: "River",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "かわいい",
        meaning: "Cute",
        JLPT: 5
    },
    {
        kanji: "漢字",
        kana: "かんじ",
        meaning: "Chinese character",
        JLPT: 5
    },
    {
        kanji: "木",
        kana: "き",
        meaning: "tree, wood",
        JLPT: 5
    },
    {
        kanji: "黄色",
        kana: "きいろ",
        meaning: "yellow",
        JLPT: 5
    },
    {
        kanji: "黄色い",
        kana: "きいろい",
        meaning: "yellow",
        JLPT: 5
    },
    {
        kanji: "消える",
        kana: "きえる",
        meaning: "to disappear",
        JLPT: 5
    },
    {
        kanji: "聞く",
        kana: "きく",
        meaning: "to hear, to listen to, to ask",
        JLPT: 5
    },
    {
        kanji: "北",
        kana: "きた",
        meaning: "North",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ギター",
        meaning: "Guitar",
        JLPT: 5
    },
    {
        kanji: "汚い",
        kana: "きたない",
        meaning: "Dirty",
        JLPT: 5
    },
    {
        kanji: "喫茶店",
        kana: "きっさてん",
        meaning: "coffee lounge",
        JLPT: 5
    },
    {
        kanji: "切手",
        kana: "きって",
        meaning: "postage stamp",
        JLPT: 5
    },
    {
        kanji: "切符",
        kana: "きっぷ",
        meaning: "Ticket",
        JLPT: 5
    },
    {
        kanji: "昨日",
        kana: "きのう",
        meaning: "Yesterday",
        JLPT: 5
    },
    {
        kanji: "九",
        kana: "きゅう",
        meaning: "Nine",
        JLPT: 5
    },
    {
        kanji: "牛肉",
        kana: "ぎゅうにく",
        meaning: "Beef",
        JLPT: 5
    },
    {
        kanji: "牛乳",
        kana: "ぎゅうにゅう",
        meaning: "Milk",
        JLPT: 5
    },
    {
        kanji: "今日",
        kana: "きょう",
        meaning: "Today",
        JLPT: 5
    },
    {
        kanji: "教室",
        kana: "きょうしつ",
        meaning: "Classroom",
        JLPT: 5
    },
    {
        kanji: "兄弟",
        kana: "きょうだい",
        meaning: "(humble) siblings",
        JLPT: 5
    },
    {
        kanji: "去年",
        kana: "きょねん",
        meaning: "last year",
        JLPT: 5
    },
    {
        kanji: "嫌い",
        kana: "きらい",
        meaning: "Hate",
        JLPT: 5
    },
    {
        kanji: "切る",
        kana: "きる",
        meaning: "to cut",
        JLPT: 5
    },
    {
        kanji: "着る",
        kana: "きる",
        meaning: "to put on from the shoulders down",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "きれい",
        meaning: "pretty, clean",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "キログラム",
        meaning: "Kilogram",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "キロメートル",
        meaning: "Kilometer",
        JLPT: 5
    },
    {
        kanji: "銀行",
        kana: "ぎんこう",
        meaning: "Bank",
        JLPT: 5
    },
    {
        kanji: "金曜日",
        kana: "きんようび",
        meaning: "Friday",
        JLPT: 5
    },
    {
        kanji: "薬",
        kana: "くすり",
        meaning: "medicine",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ください",
        meaning: "Please",
        JLPT: 5
    },
    {
        kanji: "果物",
        kana: "くだもの",
        meaning: "Fruit",
        JLPT: 5
    },
    {
        kanji: "口",
        kana: "くち",
        meaning: "mouth, opening",
        JLPT: 5
    },
    {
        kanji: "靴",
        kana: "くつ",
        meaning: "Shoes",
        JLPT: 5
    },
    {
        kanji: "靴下",
        kana: "くつした",
        meaning: "Socks",
        JLPT: 5
    },
    {
        kanji: "国",
        kana: "くに",
        meaning: "Country",
        JLPT: 5
    },
    {
        kanji: "曇り",
        kana: "くもり",
        meaning: "cloudy weather",
        JLPT: 5
    },
    {
        kanji: "曇る",
        kana: "くもる",
        meaning: "to become cloudy, to become dim",
        JLPT: 5
    },
    {
        kanji: "暗い",
        kana: "くらい",
        meaning: "Gloomy",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "クラス",
        meaning: "Class",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "グラム",
        meaning: "Gram",
        JLPT: 5
    },
    {
        kanji: "来る",
        kana: "くる",
        meaning: "to come",
        JLPT: 5
    },
    {
        kanji: "車",
        kana: "くるま",
        meaning: "car, vehicle",
        JLPT: 5
    },
    {
        kanji: "黒",
        kana: "くろ",
        meaning: "Black",
        JLPT: 5
    },
    {
        kanji: "黒い",
        kana: "くろい",
        meaning: "black",
        JLPT: 5
    },
    {
        kanji: "警官",
        kana: "けいかん",
        meaning: "policeman",
        JLPT: 5
    },
    {
        kanji: "今朝",
        kana: "けさ",
        meaning: "this morning",
        JLPT: 5
    },
    {
        kanji: "消す",
        kana: "けす",
        meaning: "to erase, to turn off power",
        JLPT: 5
    },
    {
        kanji: "結構",
        kana: "けっこう",
        meaning: "splendid, enough",
        JLPT: 5
    },
    {
        kanji: "結婚",
        kana: "けっこん",
        meaning: "Marriage",
        JLPT: 5
    },
    {
        kanji: "月曜日",
        kana: "げつようび",
        meaning: "Monday",
        JLPT: 5
    },
    {
        kanji: "玄関",
        kana: "げんかん",
        meaning: "entry hall",
        JLPT: 5
    },
    {
        kanji: "元気",
        kana: "げんき",
        meaning: "health, vitality",
        JLPT: 5
    },
    {
        kanji: "五",
        kana: "ご",
        meaning: "Five",
        JLPT: 5
    },
    {
        kanji: "公園",
        kana: "こうえん",
        meaning: "Park",
        JLPT: 5
    },
    {
        kanji: "交差点",
        kana: "こうさてん",
        meaning: "intersection",
        JLPT: 5
    },
    {
        kanji: "紅茶",
        kana: "こうちゃ",
        meaning: "black tea",
        JLPT: 5
    },
    {
        kanji: "交番",
        kana: "こうばん",
        meaning: "police box",
        JLPT: 5
    },
    {
        kanji: "声",
        kana: "こえ",
        meaning: "Voice",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "コート",
        meaning: "coat, tennis court",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "コーヒー",
        meaning: "Coffee",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ここ",
        meaning: "Here",
        JLPT: 5
    },
    {
        kanji: "午後",
        kana: "ごご",
        meaning: "afternoon",
        JLPT: 5
    },
    {
        kanji: "九日",
        kana: "ここのか",
        meaning: "nine days, ninth day",
        JLPT: 5
    },
    {
        kanji: "九つ",
        kana: "ここのつ",
        meaning: "Nine",
        JLPT: 5
    },
    {
        kanji: "午前",
        kana: "ごぜん",
        meaning: "morning",
        JLPT: 5
    },
    {
        kanji: "答える",
        kana: "こたえる",
        meaning: "to answer",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "こちら",
        meaning: "this person or way",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "こっち",
        meaning: "this person or way",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "コップ",
        meaning: "a glass",
        JLPT: 5
    },
    {
        kanji: "今年",
        kana: "ことし",
        meaning: "this year",
        JLPT: 5
    },
    {
        kanji: "言葉",
        kana: "ことば",
        meaning: "word, language",
        JLPT: 5
    },
    {
        kanji: "子供",
        kana: "こども",
        meaning: "Child",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "この",
        meaning: "This",
        JLPT: 5
    },
    {
        kanji: "御飯",
        kana: "ごはん",
        meaning: "cooked rice, meal",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "コピーする",
        meaning: "to copy",
        JLPT: 5
    },
    {
        kanji: "困る",
        kana: "こまる",
        meaning: "to be worried",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "これ",
        meaning: "This",
        JLPT: 5
    },
    {
        kanji: "今月",
        kana: "こんげつ",
        meaning: "this month",
        JLPT: 5
    },
    {
        kanji: "今週",
        kana: "こんしゅう",
        meaning: "this week",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "こんな",
        meaning: "Such",
        JLPT: 5
    },
    {
        kanji: "今晩",
        kana: "こんばん",
        meaning: "this evening",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "さあ",
        meaning: "well…",
        JLPT: 5
    },
    {
        kanji: "財布",
        kana: "さいふ",
        meaning: "Wallet",
        JLPT: 5
    },
    {
        kanji: "魚",
        kana: "さかな",
        meaning: "Fish",
        JLPT: 5
    },
    {
        kanji: "先",
        kana: "さき",
        meaning: "the future, previous",
        JLPT: 5
    },
    {
        kanji: "咲く",
        kana: "さく",
        meaning: "to bloom",
        JLPT: 5
    },
    {
        kanji: "作文",
        kana: "さくぶん",
        meaning: "composition, writing",
        JLPT: 5
    },
    {
        kanji: "差す",
        kana: "さす",
        meaning: "to stretch out hands, to raise an umbrella",
        JLPT: 5
    },
    {
        kanji: "雑誌",
        kana: "ざっし",
        meaning: "Magazine",
        JLPT: 5
    },
    {
        kanji: "砂糖",
        kana: "さとう",
        meaning: "Sugar",
        JLPT: 5
    },
    {
        kanji: "寒い",
        kana: "さむい",
        meaning: "Cold",
        JLPT: 5
    },
    {
        kanji: "さ来年",
        kana: "さらいねん",
        meaning: "year after next",
        JLPT: 5
    },
    {
        kanji: "三",
        kana: "さん",
        meaning: "Three",
        JLPT: 5
    },
    {
        kanji: "散歩",
        kana: "さんぽする",
        meaning: "to stroll",
        JLPT: 5
    },
    {
        kanji: "四",
        kana: "よん",
        meaning: "Four",
        JLPT: 5
    },
    {
        kanji: "塩",
        kana: "しお",
        meaning: "Salt",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "しかし",
        meaning: "However",
        JLPT: 5
    },
    {
        kanji: "時間",
        kana: "じかん",
        meaning: "Time",
        JLPT: 5
    },
    {
        kanji: "仕事",
        kana: "しごと",
        meaning: "Job",
        JLPT: 5
    },
    {
        kanji: "辞書",
        kana: "じしょ",
        meaning: "Dictionary",
        JLPT: 5
    },
    {
        kanji: "静か",
        kana: "しずか",
        meaning: "Quiet",
        JLPT: 5
    },
    {
        kanji: "下",
        kana: "した",
        meaning: "Below",
        JLPT: 5
    },
    {
        kanji: "七",
        kana: "なな",
        meaning: "Seven",
        JLPT: 5
    },
    {
        kanji: "質問",
        kana: "しつもん",
        meaning: "Question",
        JLPT: 5
    },
    {
        kanji: "自転車",
        kana: "じてんしゃ",
        meaning: "Bicycle",
        JLPT: 5
    },
    {
        kanji: "自動車",
        kana: "じどうしゃ",
        meaning: "Automobile",
        JLPT: 5
    },
    {
        kanji: "死ぬ",
        kana: "しぬ",
        meaning: "to die",
        JLPT: 5
    },
    {
        kanji: "字引",
        kana: "じびき",
        meaning: "Dictionary",
        JLPT: 5
    },
    {
        kanji: "自分",
        kana: "じぶん",
        meaning: "Oneself",
        JLPT: 5
    },
    {
        kanji: "閉まる",
        kana: "しまる",
        meaning: "to close, to be closed",
        JLPT: 5
    },
    {
        kanji: "閉める",
        kana: "しめる",
        meaning: "to close something",
        JLPT: 5
    },
    {
        kanji: "締める",
        kana: "しめる",
        meaning: "to tie",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "じゃあ",
        meaning: "well then…",
        JLPT: 5
    },
    {
        kanji: "写真",
        kana: "しゃしん",
        meaning: "photograph",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "シャツ",
        meaning: "Shirt",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "シャワー",
        meaning: "Shower",
        JLPT: 5
    },
    {
        kanji: "十",
        kana: "じゅう とお",
        meaning: "Ten",
        JLPT: 5
    },
    {
        kanji: "授業",
        kana: "じゅぎょう",
        meaning: "lesson, class work",
        JLPT: 5
    },
    {
        kanji: "宿題",
        kana: "しゅくだい",
        meaning: "homework",
        JLPT: 5
    },
    {
        kanji: "上手",
        kana: "じょうず",
        meaning: "Skillful",
        JLPT: 5
    },
    {
        kanji: "丈夫",
        kana: "じょうぶ",
        meaning: "strong, durable",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "しょうゆ",
        meaning: "soy sauce",
        JLPT: 5
    },
    {
        kanji: "食堂",
        kana: "しょくどう",
        meaning: "dining hall",
        JLPT: 5
    },
    {
        kanji: "知る",
        kana: "しる",
        meaning: "to know",
        JLPT: 5
    },
    {
        kanji: "白",
        kana: "しろ",
        meaning: "White",
        JLPT: 5
    },
    {
        kanji: "白い",
        kana: "しろい",
        meaning: "White",
        JLPT: 5
    },
    {
        kanji: "新聞",
        kana: "しんぶん",
        meaning: "newspaper",
        JLPT: 5
    },
    {
        kanji: "水曜日",
        kana: "すいようび",
        meaning: "Wednesday",
        JLPT: 5
    },
    {
        kanji: "吸う",
        kana: "すう",
        meaning: "to smoke, to suck",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "スカート",
        meaning: "Skirt",
        JLPT: 5
    },
    {
        kanji: "好き",
        kana: "すき",
        meaning: "Likeable",
        JLPT: 5
    },
    {
        kanji: "少ない",
        kana: "すくない",
        meaning: "a few",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "すぐに",
        meaning: "Instantly",
        JLPT: 5
    },
    {
        kanji: "少し",
        kana: "すこし",
        meaning: "Few",
        JLPT: 5
    },
    {
        kanji: "涼しい",
        kana: "すずしい",
        meaning: "Refreshing",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ストーブ",
        meaning: "Heater",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "スプーン",
        meaning: "Spoon",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "スポーツ",
        meaning: "Sport",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ズボン",
        meaning: "Trousers",
        JLPT: 5
    },
    {
        kanji: "住む",
        kana: "すむ",
        meaning: "to live in",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "スリッパ",
        meaning: "Slippers",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "する",
        meaning: "to do",
        JLPT: 5
    },
    {
        kanji: "座る",
        kana: "すわる",
        meaning: "to sit",
        JLPT: 5
    },
    {
        kanji: "背",
        kana: "せ",
        meaning: "height, stature",
        JLPT: 5
    },
    {
        kanji: "生徒",
        kana: "せいと",
        meaning: "Pupil",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "セーター",
        meaning: "sweater, jumper",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "せっけん",
        meaning: "Economy",
        JLPT: 5
    },
    {
        kanji: "背広",
        kana: "せびろ",
        meaning: "business suit",
        JLPT: 5
    },
    {
        kanji: "狭い",
        kana: "せまい",
        meaning: "Narrow",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ゼロ",
        meaning: "Zero",
        JLPT: 5
    },
    {
        kanji: "千",
        kana: "せん",
        meaning: "Thousand",
        JLPT: 5
    },
    {
        kanji: "先月",
        kana: "せんげつ",
        meaning: "last month",
        JLPT: 5
    },
    {
        kanji: "先週",
        kana: "せんしゅう",
        meaning: "last week",
        JLPT: 5
    },
    {
        kanji: "先生",
        kana: "せんせい",
        meaning: "teacher, doctor",
        JLPT: 5
    },
    {
        kanji: "洗濯",
        kana: "せんたく",
        meaning: "Washing",
        JLPT: 5
    },
    {
        kanji: "全部",
        kana: "ぜんぶ",
        meaning: "All",
        JLPT: 5
    },
    {
        kanji: "掃除",
        kana: "そうじする",
        meaning: "to clean, to sweep",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "そして",
        meaning: "And",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "そこ",
        meaning: "that place",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "そちら",
        meaning: "over there",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "そっち",
        meaning: "over there",
        JLPT: 5
    },
    {
        kanji: "外",
        kana: "そと",
        meaning: "Outside",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "その",
        meaning: "That",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "そば",
        meaning: "near, beside",
        JLPT: 5
    },
    {
        kanji: "空",
        kana: "そら",
        meaning: "Sky",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "それ",
        meaning: "that",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "それから",
        meaning: "after that",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "それでは",
        meaning: "in that situation",
        JLPT: 5
    },
    {
        kanji: "大学",
        kana: "だいがく",
        meaning: "university",
        JLPT: 5
    },
    {
        kanji: "大使館",
        kana: "たいしかん",
        meaning: "embassy",
        JLPT: 5
    },
    {
        kanji: "大丈夫",
        kana: "だいじょうぶ",
        meaning: "all right",
        JLPT: 5
    },
    {
        kanji: "大好き",
        kana: "だいすき",
        meaning: "to be very likeable",
        JLPT: 5
    },
    {
        kanji: "大切",
        kana: "たいせつ",
        meaning: "important",
        JLPT: 5
    },
    {
        kanji: "台所",
        kana: "だいどころ",
        meaning: "kitchen",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "たいへん",
        meaning: "very",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "たいへん",
        meaning: "difficult situation",
        JLPT: 5
    },
    {
        kanji: "高い",
        kana: "たかい",
        meaning: "tall, expensive",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "たくさん",
        meaning: "many",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "タクシー",
        meaning: "taxi",
        JLPT: 5
    },
    {
        kanji: "出す",
        kana: "だす",
        meaning: "to put out",
        JLPT: 5
    },
    {
        kanji: "立つ",
        kana: "たつ",
        meaning: "to stand",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "たて",
        meaning: "length,height",
        JLPT: 5
    },
    {
        kanji: "建物",
        kana: "たてもの",
        meaning: "building",
        JLPT: 5
    },
    {
        kanji: "楽しい",
        kana: "たのしい",
        meaning: "enjoyable",
        JLPT: 5
    },
    {
        kanji: "頼む",
        kana: "たのむ",
        meaning: "to ask",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "たばこ",
        meaning: "tobacco,cigarettes",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "たぶん",
        meaning: "probably",
        JLPT: 5
    },
    {
        kanji: "食べ物",
        kana: "たべもの",
        meaning: "food",
        JLPT: 5
    },
    {
        kanji: "食べる",
        kana: "たべる",
        meaning: "to eat",
        JLPT: 5
    },
    {
        kanji: "卵",
        kana: "たまご",
        meaning: "egg",
        JLPT: 5
    },
    {
        kanji: "誰",
        kana: "だれ",
        meaning: "who",
        JLPT: 5
    },
    {
        kanji: "誰",
        kana: "だれか",
        meaning: "somebody",
        JLPT: 5
    },
    {
        kanji: "誕生日",
        kana: "たんじょうび",
        meaning: "birthday",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "だんだん",
        meaning: "gradually",
        JLPT: 5
    },
    {
        kanji: "小さい",
        kana: "ちいさい",
        meaning: "little",
        JLPT: 5
    },
    {
        kanji: "小さな",
        kana: "ちいさな",
        meaning: "little",
        JLPT: 5
    },
    {
        kanji: "近い",
        kana: "ちかい",
        meaning: "near",
        JLPT: 5
    },
    {
        kanji: "違う",
        kana: "ちがう",
        meaning: "to differ",
        JLPT: 5
    },
    {
        kanji: "近く",
        kana: "ちかく",
        meaning: "near",
        JLPT: 5
    },
    {
        kanji: "地下鉄",
        kana: "ちかてつ",
        meaning: "underground train",
        JLPT: 5
    },
    {
        kanji: "地図",
        kana: "ちず",
        meaning: "map",
        JLPT: 5
    },
    {
        kanji: "茶色",
        kana: "ちゃいろ",
        meaning: "brown",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ちゃわん",
        meaning: "rice bowl",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ちょうど",
        meaning: "exactly",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ちょっと",
        meaning: "somewhat",
        JLPT: 5
    },
    {
        kanji: "一日",
        kana: "ついたち",
        meaning: "first of month",
        JLPT: 5
    },
    {
        kanji: "使う",
        kana: "つかう",
        meaning: "to use",
        JLPT: 5
    },
    {
        kanji: "疲れる",
        kana: "つかれる",
        meaning: "to get tired",
        JLPT: 5
    },
    {
        kanji: "次",
        kana: "つぎ",
        meaning: "next",
        JLPT: 5
    },
    {
        kanji: "着く",
        kana: "つく",
        meaning: "to arrive at",
        JLPT: 5
    },
    {
        kanji: "机",
        kana: "つくえ",
        meaning: "desk",
        JLPT: 5
    },
    {
        kanji: "作る",
        kana: "つくる",
        meaning: "to make",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "つける",
        meaning: "to turn on",
        JLPT: 5
    },
    {
        kanji: "勤める",
        kana: "つとめる",
        meaning: "to work for someone",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "つまらない",
        meaning: "boring",
        JLPT: 5
    },
    {
        kanji: "冷たい",
        kana: "つめたい",
        meaning: "cold to the touch",
        JLPT: 5
    },
    {
        kanji: "強い",
        kana: "つよい",
        meaning: "powerful",
        JLPT: 5
    },
    {
        kanji: "手",
        kana: "て",
        meaning: "hand",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "テープ",
        meaning: "tape",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "テーブル",
        meaning: "table",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "テープレコーダー",
        meaning: "tape recorder",
        JLPT: 5
    },
    {
        kanji: "出かける",
        kana: "でかける",
        meaning: "to go out",
        JLPT: 5
    },
    {
        kanji: "手紙",
        kana: "てがみ",
        meaning: "letter",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "できる",
        meaning: "to be able to",
        JLPT: 5
    },
    {
        kanji: "出口",
        kana: "でぐち",
        meaning: "exit",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "テスト",
        meaning: "test",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "では",
        meaning: "with that...",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "デパート",
        meaning: "department store",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "でも",
        meaning: "but",
        JLPT: 5
    },
    {
        kanji: "出る",
        kana: "でる",
        meaning: "to appear,to leave",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "テレビ",
        meaning: "television",
        JLPT: 5
    },
    {
        kanji: "天気",
        kana: "てんき",
        meaning: "weather",
        JLPT: 5
    },
    {
        kanji: "電気",
        kana: "でんき",
        meaning: "electricity,electric light",
        JLPT: 5
    },
    {
        kanji: "電車",
        kana: "でんしゃ",
        meaning: "electric train",
        JLPT: 5
    },
    {
        kanji: "電話",
        kana: "でんわ",
        meaning: "telephone",
        JLPT: 5
    },
    {
        kanji: "戸",
        kana: "と",
        meaning: "Japanese style door",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ドア",
        meaning: "Western style door",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "トイレ",
        meaning: "toilet",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どう",
        meaning: "how,in what way",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どうして",
        meaning: "for what reason",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どうぞ",
        meaning: "please",
        JLPT: 5
    },
    {
        kanji: "動物",
        kana: "どうぶつ",
        meaning: "animal",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どうも",
        meaning: "thanks",
        JLPT: 5
    },
    {
        kanji: "遠い",
        kana: "とおい",
        meaning: "far",
        JLPT: 5
    },
    {
        kanji: "十日",
        kana: "とおか",
        meaning: "ten days,the tenth day",
        JLPT: 5
    },
    {
        kanji: "時々",
        kana: "ときどき",
        meaning: "sometimes",
        JLPT: 5
    },
    {
        kanji: "時計",
        kana: "とけい",
        meaning: "watch,clock",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どこ",
        meaning: "where",
        JLPT: 5
    },
    {
        kanji: "所",
        kana: "ところ",
        meaning: "place",
        JLPT: 5
    },
    {
        kanji: "年",
        kana: "とし",
        meaning: "year",
        JLPT: 5
    },
    {
        kanji: "図書館",
        kana: "としょかん",
        meaning: "library",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どちら",
        meaning: "which of two",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どっち",
        meaning: "which",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "とても",
        meaning: "very",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どなた",
        meaning: "who",
        JLPT: 5
    },
    {
        kanji: "隣",
        kana: "となり",
        meaning: "next door to",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どの",
        meaning: "which",
        JLPT: 5
    },
    {
        kanji: "飛ぶ",
        kana: "とぶ",
        meaning: "to fly,to hop",
        JLPT: 5
    },
    {
        kanji: "止まる",
        kana: "とまる",
        meaning: "to come to a halt",
        JLPT: 5
    },
    {
        kanji: "友達",
        kana: "ともだち",
        meaning: "friend",
        JLPT: 5
    },
    {
        kanji: "土曜日",
        kana: "どようび",
        meaning: "Saturday",
        JLPT: 5
    },
    {
        kanji: "鳥",
        kana: "とり",
        meaning: "bird",
        JLPT: 5
    },
    {
        kanji: "とり肉",
        kana: "とりにく",
        meaning: "chicken meat",
        JLPT: 5
    },
    {
        kanji: "取る",
        kana: "とる",
        meaning: "to take something",
        JLPT: 5
    },
    {
        kanji: "撮る",
        kana: "とる",
        meaning: "to take a photo or record a film",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "どれ",
        meaning: "which (of three or more)",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ナイフ",
        meaning: "knife",
        JLPT: 5
    },
    {
        kanji: "中",
        kana: "なか",
        meaning: "middle",
        JLPT: 5
    },
    {
        kanji: "長い",
        kana: "ながい",
        meaning: "long",
        JLPT: 5
    },
    {
        kanji: "鳴く",
        kana: "なく",
        meaning: "animal noise. to chirp, roar or croak etc.",
        JLPT: 5
    },
    {
        kanji: "無くす",
        kana: "なくす",
        meaning: "to lose something",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "なぜ",
        meaning: "why",
        JLPT: 5
    },
    {
        kanji: "夏",
        kana: "なつ",
        meaning: "summer",
        JLPT: 5
    },
    {
        kanji: "夏休み",
        kana: "なつやすみ",
        meaning: "summer holiday",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "など",
        meaning: "et cetera",
        JLPT: 5
    },
    {
        kanji: "七つ",
        kana: "ななつ",
        meaning: "seven",
        JLPT: 5
    },
    {
        kanji: "七日",
        kana: "なのか",
        meaning: "seven days,the seventh day",
        JLPT: 5
    },
    {
        kanji: "名前",
        kana: "なまえ",
        meaning: "name",
        JLPT: 5
    },
    {
        kanji: "習う",
        kana: "ならう",
        meaning: "to learn",
        JLPT: 5
    },
    {
        kanji: "並ぶ",
        kana: "ならぶ",
        meaning: "to line up,to stand in a line",
        JLPT: 5
    },
    {
        kanji: "並べる",
        kana: "ならべる",
        meaning: "to line up,to set up",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "なる",
        meaning: "to become",
        JLPT: 5
    },
    {
        kanji: "何",
        kana: "なに",
        meaning: "what",
        JLPT: 5
    },
    {
        kanji: "二",
        kana: "に",
        meaning: "two",
        JLPT: 5
    },
    {
        kanji: "賑やか",
        kana: "にぎやか",
        meaning: "bustling,busy",
        JLPT: 5
    },
    {
        kanji: "肉",
        kana: "にく",
        meaning: "meat",
        JLPT: 5
    },
    {
        kanji: "西",
        kana: "にし",
        meaning: "west",
        JLPT: 5
    },
    {
        kanji: "日曜日",
        kana: "にちようび",
        meaning: "Sunday",
        JLPT: 5
    },
    {
        kanji: "荷物",
        kana: "にもつ",
        meaning: "luggage",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ニュース",
        meaning: "news",
        JLPT: 5
    },
    {
        kanji: "庭",
        kana: "にわ",
        meaning: "garden",
        JLPT: 5
    },
    {
        kanji: "脱ぐ",
        kana: "ぬぐ",
        meaning: "to take off clothes",
        JLPT: 5
    },
    {
        kanji: "温い",
        kana: "ぬるい",
        meaning: "luke warm",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ネクタイ",
        meaning: "tie,necktie",
        JLPT: 5
    },
    {
        kanji: "猫",
        kana: "ねこ",
        meaning: "cat",
        JLPT: 5
    },
    {
        kanji: "寝る",
        kana: "ねる",
        meaning: "to go to bed,to sleep",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ノート",
        meaning: "notebook,exercise book",
        JLPT: 5
    },
    {
        kanji: "登る",
        kana: "のぼる",
        meaning: "to climb",
        JLPT: 5
    },
    {
        kanji: "飲み物",
        kana: "のみもの",
        meaning: "a drink",
        JLPT: 5
    },
    {
        kanji: "飲む",
        kana: "のむ",
        meaning: "to drink",
        JLPT: 5
    },
    {
        kanji: "乗る",
        kana: "のる",
        meaning: "to get on,to ride",
        JLPT: 5
    },
    {
        kanji: "歯",
        kana: "は",
        meaning: "tooth",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "パーティー",
        meaning: "party",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "はい",
        meaning: "yes",
        JLPT: 5
    },
    {
        kanji: "灰皿",
        kana: "はいざら",
        meaning: "ashtray",
        JLPT: 5
    },
    {
        kanji: "入る",
        kana: "はいる",
        meaning: "to enter,to contain",
        JLPT: 5
    },
    {
        kanji: "葉書",
        kana: "はがき",
        meaning: "postcard",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "はく",
        meaning: "to wear,to put on trousers",
        JLPT: 5
    },
    {
        kanji: "箱",
        kana: "はこ",
        meaning: "box",
        JLPT: 5
    },
    {
        kanji: "橋",
        kana: "はし",
        meaning: "bridge",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "はし",
        meaning: "chopsticks",
        JLPT: 5
    },
    {
        kanji: "始まる",
        kana: "はじまる",
        meaning: "to begin",
        JLPT: 5
    },
    {
        kanji: "初め",
        kana: "はじめ",
        meaning: "beginning",
        JLPT: 5
    },
    {
        kanji: "始め",
        kana: "はじめ",
        meaning: "beginning",
        JLPT: 5
    },
    {
        kanji: "初めて",
        kana: "はじめて",
        meaning: "for the first time",
        JLPT: 5
    },
    {
        kanji: "走る",
        kana: "はしる",
        meaning: "to run",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "バス",
        meaning: "bus",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "バター",
        meaning: "butter",
        JLPT: 5
    },
    {
        kanji: "二十歳",
        kana: "はたち",
        meaning: "20 years old,20th year",
        JLPT: 5
    },
    {
        kanji: "働く",
        kana: "はたらく",
        meaning: "to work",
        JLPT: 5
    },
    {
        kanji: "八",
        kana: "はち",
        meaning: "eight",
        JLPT: 5
    },
    {
        kanji: "二十日",
        kana: "はつか",
        meaning: "twenty days,twentieth",
        JLPT: 5
    },
    {
        kanji: "花",
        kana: "はな",
        meaning: "flower",
        JLPT: 5
    },
    {
        kanji: "鼻",
        kana: "はな",
        meaning: "nose",
        JLPT: 5
    },
    {
        kanji: "話",
        kana: "はなし",
        meaning: "talk,story",
        JLPT: 5
    },
    {
        kanji: "話す",
        kana: "はなす",
        meaning: "to speak",
        JLPT: 5
    },
    {
        kanji: "早い",
        kana: "はやい",
        meaning: "early",
        JLPT: 5
    },
    {
        kanji: "速い",
        kana: "はやい",
        meaning: "quick",
        JLPT: 5
    },
    {
        kanji: "春",
        kana: "はる",
        meaning: "spring",
        JLPT: 5
    },
    {
        kanji: "貼る",
        kana: "はる",
        meaning: "to stick",
        JLPT: 5
    },
    {
        kanji: "晴れ",
        kana: "はれ",
        meaning: "clear weather",
        JLPT: 5
    },
    {
        kanji: "晴れる",
        kana: "はれる",
        meaning: "to be sunny",
        JLPT: 5
    },
    {
        kanji: "半",
        kana: "はん",
        meaning: "half",
        JLPT: 5
    },
    {
        kanji: "晩",
        kana: "ばん",
        meaning: "evening",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "パン",
        meaning: "bread",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ハンカチ",
        meaning: "handkerchief",
        JLPT: 5
    },
    {
        kanji: "番号",
        kana: "ばんごう",
        meaning: "number",
        JLPT: 5
    },
    {
        kanji: "晩御飯",
        kana: "ばんごはん",
        meaning: "evening meal",
        JLPT: 5
    },
    {
        kanji: "半分",
        kana: "はんぶん",
        meaning: "half minute",
        JLPT: 5
    },
    {
        kanji: "東",
        kana: "ひがし",
        meaning: "east",
        JLPT: 5
    },
    {
        kanji: "引く",
        kana: "ひく",
        meaning: "to pull",
        JLPT: 5
    },
    {
        kanji: "弾く",
        kana: "ひく",
        meaning: "to play an instrument with strings, including piano",
        JLPT: 5
    },
    {
        kanji: "低い",
        kana: "ひくい",
        meaning: "short,low",
        JLPT: 5
    },
    {
        kanji: "飛行機",
        kana: "ひこうき",
        meaning: "aeroplane",
        JLPT: 5
    },
    {
        kanji: "左",
        kana: "ひだり",
        meaning: "left hand side",
        JLPT: 5
    },
    {
        kanji: "人",
        kana: "ひと",
        meaning: "person",
        JLPT: 5
    },
    {
        kanji: "一つ",
        kana: "ひとつ",
        meaning: "one",
        JLPT: 5
    },
    {
        kanji: "一月",
        kana: "ひとつき",
        meaning: "one month",
        JLPT: 5
    },
    {
        kanji: "一人",
        kana: "ひとり",
        meaning: "one person",
        JLPT: 5
    },
    {
        kanji: "暇",
        kana: "ひま",
        meaning: "free time",
        JLPT: 5
    },
    {
        kanji: "百",
        kana: "ひゃく",
        meaning: "hundred",
        JLPT: 5
    },
    {
        kanji: "病院",
        kana: "びょういん",
        meaning: "hospital",
        JLPT: 5
    },
    {
        kanji: "病気",
        kana: "びょうき",
        meaning: "illness",
        JLPT: 5
    },
    {
        kanji: "昼",
        kana: "ひる",
        meaning: "noon, daytime",
        JLPT: 5
    },
    {
        kanji: "昼御飯",
        kana: "ひるごはん",
        meaning: "midday meal",
        JLPT: 5
    },
    {
        kanji: "広い",
        kana: "ひろい",
        meaning: "spacious,wide",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "フィルム",
        meaning: "roll of film",
        JLPT: 5
    },
    {
        kanji: "封筒",
        kana: "ふうとう",
        meaning: "envelope",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "プール",
        meaning: "swimming pool",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "フォーク",
        meaning: "fork",
        JLPT: 5
    },
    {
        kanji: "吹く",
        kana: "ふく",
        meaning: "to blow",
        JLPT: 5
    },
    {
        kanji: "服",
        kana: "ふく",
        meaning: "clothes",
        JLPT: 5
    },
    {
        kanji: "二つ",
        kana: "ふたつ",
        meaning: "two",
        JLPT: 5
    },
    {
        kanji: "豚肉",
        kana: "ぶたにく",
        meaning: "pork",
        JLPT: 5
    },
    {
        kanji: "二人",
        kana: "ふたり",
        meaning: "two people",
        JLPT: 5
    },
    {
        kanji: "二日",
        kana: "ふつか",
        meaning: "two days, second day of the month",
        JLPT: 5
    },
    {
        kanji: "太い",
        kana: "ふとい",
        meaning: "fat",
        JLPT: 5
    },
    {
        kanji: "冬",
        kana: "ふゆ",
        meaning: "winter",
        JLPT: 5
    },
    {
        kanji: "降る",
        kana: "ふる",
        meaning: "to fall, e.g. rain or snow",
        JLPT: 5
    },
    {
        kanji: "古い",
        kana: "ふるい",
        meaning: "old (not used for people)",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ふろ",
        meaning: "bath",
        JLPT: 5
    },
    {
        kanji: "文章",
        kana: "ぶんしょう",
        meaning: "sentence,text",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ページ",
        meaning: "page",
        JLPT: 5
    },
    {
        kanji: "下手",
        kana: "へた",
        meaning: "unskillful",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ベッド",
        meaning: "bed",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ペット",
        meaning: "pet",
        JLPT: 5
    },
    {
        kanji: "部屋",
        kana: "へや",
        meaning: "room",
        JLPT: 5
    },
    {
        kanji: "辺",
        kana: "へん",
        meaning: "area",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ペン",
        meaning: "pen",
        JLPT: 5
    },
    {
        kanji: "勉強",
        kana: "べんきょうする",
        meaning: "to study",
        JLPT: 5
    },
    {
        kanji: "便利",
        kana: "べんり",
        meaning: "useful, convenient",
        JLPT: 5
    },
    {
        kanji: "帽子",
        kana: "ぼうし",
        meaning: "hat",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ボールペン",
        meaning: "ball-point pen",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ほか",
        meaning: "other, the rest",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ポケット",
        meaning: "pocket",
        JLPT: 5
    },
    {
        kanji: "欲しい",
        kana: "ほしい",
        meaning: "want",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ポスト",
        meaning: "post",
        JLPT: 5
    },
    {
        kanji: "細い",
        kana: "ほそい",
        meaning: "thin",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ボタン",
        meaning: "button",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ホテル",
        meaning: "hotel",
        JLPT: 5
    },
    {
        kanji: "本",
        kana: "ほん",
        meaning: "book",
        JLPT: 5
    },
    {
        kanji: "本棚",
        kana: "ほんだな",
        meaning: "bookshelves",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ほんとう",
        meaning: "truth",
        JLPT: 5
    },
    {
        kanji: "毎朝",
        kana: "まいあさ",
        meaning: "every morning",
        JLPT: 5
    },
    {
        kanji: "毎月",
        kana: "まいつき",
        meaning: "every month",
        JLPT: 5
    },
    {
        kanji: "毎週",
        kana: "まいしゅう",
        meaning: "every week",
        JLPT: 5
    },
    {
        kanji: "毎日",
        kana: "まいにち",
        meaning: "every day",
        JLPT: 5
    },
    {
        kanji: "毎年",
        kana: "まいとし",
        meaning: "every year",
        JLPT: 5
    },
    {
        kanji: "毎晩",
        kana: "まいばん",
        meaning: "every night",
        JLPT: 5
    },
    {
        kanji: "前",
        kana: "まえ",
        meaning: "before",
        JLPT: 5
    },
    {
        kanji: "曲る",
        kana: "まがる",
        meaning: "to turn,to bend",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "まずい",
        meaning: "unpleasant",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "また",
        meaning: "again,and",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "まだ",
        meaning: "yet,still",
        JLPT: 5
    },
    {
        kanji: "町",
        kana: "まち",
        meaning: "town,city",
        JLPT: 5
    },
    {
        kanji: "待つ",
        kana: "まつ",
        meaning: "to wait",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "まっすぐ",
        meaning: "straight ahead,direct",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "マッチ",
        meaning: "match",
        JLPT: 5
    },
    {
        kanji: "窓",
        kana: "まど",
        meaning: "window",
        JLPT: 5
    },
    {
        kanji: "丸い",
        kana: "まるい",
        meaning: "round,circular",
        JLPT: 5
    },
    {
        kanji: "円い",
        kana: "まるい",
        meaning: "round,circular",
        JLPT: 5
    },
    {
        kanji: "万",
        kana: "まん",
        meaning: "ten thousand",
        JLPT: 5
    },
    {
        kanji: "万年筆",
        kana: "まんねんひつ",
        meaning: "fountain pen",
        JLPT: 5
    },
    {
        kanji: "磨く",
        kana: "みがく",
        meaning: "to brush teeth, to polish",
        JLPT: 5
    },
    {
        kanji: "右",
        kana: "みぎ",
        meaning: "right side",
        JLPT: 5
    },
    {
        kanji: "短い",
        kana: "みじかい",
        meaning: "short",
        JLPT: 5
    },
    {
        kanji: "水",
        kana: "みず",
        meaning: "water",
        JLPT: 5
    },
    {
        kanji: "店",
        kana: "みせ",
        meaning: "shop",
        JLPT: 5
    },
    {
        kanji: "見せる",
        kana: "みせる",
        meaning: "to show",
        JLPT: 5
    },
    {
        kanji: "道",
        kana: "みち",
        meaning: "street",
        JLPT: 5
    },
    {
        kanji: "三日",
        kana: "みっか",
        meaning: "three days, third day of the month",
        JLPT: 5
    },
    {
        kanji: "三つ",
        kana: "みっつ",
        meaning: "three",
        JLPT: 5
    },
    {
        kanji: "緑",
        kana: "みどり",
        meaning: "green",
        JLPT: 5
    },
    {
        kanji: "皆さん",
        kana: "みなさん",
        meaning: "everyone",
        JLPT: 5
    },
    {
        kanji: "南",
        kana: "みなみ",
        meaning: "south",
        JLPT: 5
    },
    {
        kanji: "耳",
        kana: "みみ",
        meaning: "ear",
        JLPT: 5
    },
    {
        kanji: "観る",
        kana: "みる",
        meaning: "to see, to watch",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "みんな",
        meaning: "everyone",
        JLPT: 5
    },
    {
        kanji: "六日",
        kana: "むいか",
        meaning: "six days, sixth day of the month",
        JLPT: 5
    },
    {
        kanji: "向こう",
        kana: "むこう",
        meaning: "over there",
        JLPT: 5
    },
    {
        kanji: "難しい",
        kana: "むずかしい",
        meaning: "difficult",
        JLPT: 5
    },
    {
        kanji: "六つ",
        kana: "むっつ",
        meaning: "six",
        JLPT: 5
    },
    {
        kanji: "村",
        kana: "むら",
        meaning: "village",
        JLPT: 5
    },
    {
        kanji: "目",
        kana: "め",
        meaning: "eye",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "メートル",
        meaning: "metre",
        JLPT: 5
    },
    {
        kanji: "眼鏡",
        kana: "めがね",
        meaning: "glasses",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "もう",
        meaning: "already",
        JLPT: 5
    },
    {
        kanji: "もう一度",
        kana: "もういちど",
        meaning: "again",
        JLPT: 5
    },
    {
        kanji: "木曜日",
        kana: "もくようび",
        meaning: "Thursday",
        JLPT: 5
    },
    {
        kanji: "持つ",
        kana: "もつ",
        meaning: "to hold",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "もっと",
        meaning: "more",
        JLPT: 5
    },
    {
        kanji: "物",
        kana: "もの",
        meaning: "thing",
        JLPT: 5
    },
    {
        kanji: "門",
        kana: "もん",
        meaning: "gate",
        JLPT: 5
    },
    {
        kanji: "問題",
        kana: "もんだい",
        meaning: "problem",
        JLPT: 5
    },
    {
        kanji: "八百屋",
        kana: "やおや",
        meaning: "greengrocer",
        JLPT: 5
    },
    {
        kanji: "野菜",
        kana: "やさい",
        meaning: "vegetable",
        JLPT: 5
    },
    {
        kanji: "易しい",
        kana: "やさしい",
        meaning: "easy, simple",
        JLPT: 5
    },
    {
        kanji: "安い",
        kana: "やすい",
        meaning: "cheap",
        JLPT: 5
    },
    {
        kanji: "休み",
        kana: "やすみ",
        meaning: "rest,holiday",
        JLPT: 5
    },
    {
        kanji: "休む",
        kana: "やすむ",
        meaning: "to rest",
        JLPT: 5
    },
    {
        kanji: "八つ",
        kana: "やっつ",
        meaning: "eight",
        JLPT: 5
    },
    {
        kanji: "山",
        kana: "やま",
        meaning: "mountain",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "やる",
        meaning: "to do",
        JLPT: 5
    },
    {
        kanji: "夕方",
        kana: "ゆうがた",
        meaning: "evening",
        JLPT: 5
    },
    {
        kanji: "夕飯",
        kana: "ゆうはん",
        meaning: "dinner",
        JLPT: 5
    },
    {
        kanji: "郵便局",
        kana: "ゆうびんきょく",
        meaning: "post office",
        JLPT: 5
    },
    {
        kanji: "昨夜",
        kana: "ゆうべ",
        meaning: "last night",
        JLPT: 5
    },
    {
        kanji: "有名",
        kana: "ゆうめい",
        meaning: "famous",
        JLPT: 5
    },
    {
        kanji: "雪",
        kana: "ゆき",
        meaning: "snow",
        JLPT: 5
    },
    {
        kanji: "行く",
        kana: "ゆく",
        meaning: "to go",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ゆっくりと",
        meaning: "slowly",
        JLPT: 5
    },
    {
        kanji: "八日",
        kana: "ようか",
        meaning: "eight days, eighth day of the month",
        JLPT: 5
    },
    {
        kanji: "洋服",
        kana: "ようふく",
        meaning: "western-style clothes",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "よく",
        meaning: "often, well",
        JLPT: 5
    },
    {
        kanji: "横",
        kana: "よこ",
        meaning: "beside,side,width",
        JLPT: 5
    },
    {
        kanji: "四日",
        kana: "よっか",
        meaning: "four days, fouth day of the month",
        JLPT: 5
    },
    {
        kanji: "四つ",
        kana: "よっつ",
        meaning: "four",
        JLPT: 5
    },
    {
        kanji: "呼ぶ",
        kana: "よぶ",
        meaning: "to call out,to invite",
        JLPT: 5
    },
    {
        kanji: "読む",
        kana: "よむ",
        meaning: "to read",
        JLPT: 5
    },
    {
        kanji: "夜",
        kana: "よる",
        meaning: "evening,night",
        JLPT: 5
    },
    {
        kanji: "弱い",
        kana: "よわい",
        meaning: "weak",
        JLPT: 5
    },
    {
        kanji: "来月",
        kana: "らいげつ",
        meaning: "next month",
        JLPT: 5
    },
    {
        kanji: "来週",
        kana: "らいしゅう",
        meaning: "next week",
        JLPT: 5
    },
    {
        kanji: "来年",
        kana: "らいねん",
        meaning: "next year",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ラジオ",
        meaning: "radio",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ラジオカセット",
        meaning: "radio cassette player",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "りっぱ",
        meaning: "splendid",
        JLPT: 5
    },
    {
        kanji: "留学生",
        kana: "りゅうがくせい",
        meaning: "overseas student",
        JLPT: 5
    },
    {
        kanji: "両親",
        kana: "りょうしん",
        meaning: "both parents",
        JLPT: 5
    },
    {
        kanji: "料理",
        kana: "りょうり",
        meaning: "cuisine",
        JLPT: 5
    },
    {
        kanji: "旅行",
        kana: "りょこう",
        meaning: "travel",
        JLPT: 5
    },
    {
        kanji: "零",
        kana: "れい",
        meaning: "zero",
        JLPT: 5
    },
    {
        kanji: "冷蔵庫",
        kana: "れいぞうこ",
        meaning: "refrigerator",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "レコード",
        meaning: "record",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "レストラン",
        meaning: "restaurant",
        JLPT: 5
    },
    {
        kanji: "練習",
        kana: "れんしゅうする",
        meaning: "to practice",
        JLPT: 5
    },
    {
        kanji: "廊下",
        kana: "ろうか",
        meaning: "corridor",
        JLPT: 5
    },
    {
        kanji: "六",
        kana: "ろく",
        meaning: "six",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "ワイシャツ",
        meaning: "business shirt",
        JLPT: 5
    },
    {
        kanji: "若い",
        kana: "わかい",
        meaning: "young",
        JLPT: 5
    },
    {
        kanji: "分かる",
        kana: "わかる",
        meaning: "to be understood",
        JLPT: 5
    },
    {
        kanji: "忘れる",
        kana: "わすれる",
        meaning: "to forget",
        JLPT: 5
    },
    {
        kanji: "私",
        kana: "わたくし",
        meaning: "(humble) I,myself",
        JLPT: 5
    },
    {
        kanji: "私",
        kana: "わたし",
        meaning: "I,myself",
        JLPT: 5
    },
    {
        kanji: "渡す",
        kana: "わたす",
        meaning: "to hand over",
        JLPT: 5
    },
    {
        kanji: "渡る",
        kana: "わたる",
        meaning: "to go across",
        JLPT: 5
    },
    {
        kanji: "悪い",
        kana: "わるい",
        meaning: "bad",
        JLPT: 5
    },
    {
        kanji: "",
        kana: "より、ほう",
        meaning: "Used for comparison.",
        JLPT: 5
    }
]

function getVocabs(level) {
    return vocabEntry.filter(entry => entry.JLPT === level && entry.kanji !== '')
}

function checkKanji(kanji) {
    return vocabEntry.find(entry => entry.kanji.includes(kanji));
}

export {getVocabs, checkKanji};