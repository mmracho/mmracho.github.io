// source from kradfile_conv
const kanjiRadical = [
    {
        kanji: "亜",
        radicals: "｜一口"
    },
    {
        kanji: "唖",
        radicals: "｜一口"
    },
    {
        kanji: "娃",
        radicals: "女土"
    },
    {
        kanji: "阿",
        radicals: "一口亅阡"
    },
    {
        kanji: "哀",
        radicals: "衣口亠"
    },
    {
        kanji: "愛",
        radicals: "心爪冖夂"
    },
    {
        kanji: "挨",
        radicals: "矢厶扎乞"
    },
    {
        kanji: "姶",
        radicals: "一口女个"
    },
    {
        kanji: "逢",
        radicals: "｜込二夂"
    },
    {
        kanji: "葵",
        radicals: "人大二癶艾ノ"
    },
    {
        kanji: "茜",
        radicals: "西艾"
    },
    {
        kanji: "穐",
        radicals: "禾亀乙勹田"
    },
    {
        kanji: "悪",
        radicals: "｜一口心"
    },
    {
        kanji: "握",
        radicals: "至土厶尸扎"
    },
    {
        kanji: "渥",
        radicals: "至汁土厶尸"
    },
    {
        kanji: "旭",
        radicals: "日九"
    },
    {
        kanji: "葦",
        radicals: "口艾韋"
    },
    {
        kanji: "芦",
        radicals: "戸艾一尸"
    },
    {
        kanji: "鯵",
        radicals: "魚大田厶彡杰"
    },
    {
        kanji: "梓",
        radicals: "十辛木立"
    },
    {
        kanji: "圧",
        radicals: "土厂"
    },
    {
        kanji: "斡",
        radicals: "十斗日个"
    },
    {
        kanji: "扱",
        radicals: "扎及"
    },
    {
        kanji: "宛",
        radicals: "夕卩宀"
    },
    {
        kanji: "姐",
        radicals: "女目"
    },
    {
        kanji: "虻",
        radicals: "虫亡亠"
    },
    {
        kanji: "飴",
        radicals: "口食厶"
    },
    {
        kanji: "絢",
        radicals: "糸幺小日勹"
    },
    {
        kanji: "綾",
        radicals: "糸幺小土儿夂"
    },
    {
        kanji: "鮎",
        radicals: "魚口田卜杰"
    },
    {
        kanji: "或",
        radicals: "口戈一"
    },
    {
        kanji: "粟",
        radicals: "西米"
    },
    {
        kanji: "袷",
        radicals: "口初个一"
    },
    {
        kanji: "安",
        radicals: "女宀"
    },
    {
        kanji: "庵",
        radicals: "田广大"
    },
    {
        kanji: "按",
        radicals: "女宀扎"
    },
    {
        kanji: "暗",
        radicals: "音日立"
    },
    {
        kanji: "案",
        radicals: "女木宀"
    },
    {
        kanji: "闇",
        radicals: "音日門立"
    },
    {
        kanji: "鞍",
        radicals: "女宀革"
    },
    {
        kanji: "杏",
        radicals: "口木"
    },
    {
        kanji: "以",
        radicals: "｜人丶"
    },
    {
        kanji: "伊",
        radicals: "｜ヨ化"
    },
    {
        kanji: "位",
        radicals: "化立"
    },
    {
        kanji: "依",
        radicals: "衣化亠"
    },
    {
        kanji: "偉",
        radicals: "化口韋"
    },
    {
        kanji: "囲",
        radicals: "囗井"
    },
    {
        kanji: "夷",
        radicals: "ノ一弓大"
    },
    {
        kanji: "委",
        radicals: "禾女"
    },
    {
        kanji: "威",
        radicals: "ノ女戈厂"
    },
    {
        kanji: "尉",
        radicals: "示二小寸尸"
    },
    {
        kanji: "惟",
        radicals: "忙隹"
    },
    {
        kanji: "意",
        radicals: "音心日立"
    },
    {
        kanji: "慰",
        radicals: "示二小心寸尸"
    },
    {
        kanji: "易",
        radicals: "日勿勹ノ"
    },
    {
        kanji: "椅",
        radicals: "口大木一亅"
    },
    {
        kanji: "為",
        radicals: "ノ杰ユ丶并勹"
    },
    {
        kanji: "畏",
        radicals: "衣一田"
    },
    {
        kanji: "異",
        radicals: "一田ハ井"
    },
    {
        kanji: "移",
        radicals: "禾夕"
    },
    {
        kanji: "維",
        radicals: "糸幺小隹"
    },
    {
        kanji: "緯",
        radicals: "口糸幺小韋"
    },
    {
        kanji: "胃",
        radicals: "月田"
    },
    {
        kanji: "萎",
        radicals: "禾女艾"
    },
    {
        kanji: "衣",
        radicals: "衣亠"
    },
    {
        kanji: "謂",
        radicals: "月言田"
    },
    {
        kanji: "違",
        radicals: "口込韋"
    },
    {
        kanji: "遺",
        radicals: "一貝目ハ込口｜"
    },
    {
        kanji: "医",
        radicals: "矢匚乞"
    },
    {
        kanji: "井",
        radicals: "｜ノ一二井"
    },
    {
        kanji: "亥",
        radicals: "人亠ノ丶"
    },
    {
        kanji: "域",
        radicals: "口土戈"
    },
    {
        kanji: "育",
        radicals: "月亠厶"
    },
    {
        kanji: "郁",
        radicals: "ノ一月邦"
    },
    {
        kanji: "磯",
        radicals: "ノ口石戈幺丶"
    },
    {
        kanji: "一",
        radicals: "一"
    },
    {
        kanji: "壱",
        radicals: "士冖匕"
    },
    {
        kanji: "溢",
        radicals: "皿汁尚ハ并"
    },
    {
        kanji: "逸",
        radicals: "ノ込免儿勹"
    },
    {
        kanji: "稲",
        radicals: "｜禾爪日"
    },
    {
        kanji: "茨",
        radicals: "欠冫艾"
    },
    {
        kanji: "芋",
        radicals: "一艾干"
    },
    {
        kanji: "鰯",
        radicals: "弓魚田冫杰"
    },
    {
        kanji: "允",
        radicals: "厶儿"
    },
    {
        kanji: "印",
        radicals: "｜卩"
    },
    {
        kanji: "咽",
        radicals: "口大囗"
    },
    {
        kanji: "員",
        radicals: "貝目ハ口"
    },
    {
        kanji: "因",
        radicals: "大囗"
    },
    {
        kanji: "姻",
        radicals: "女大囗"
    },
    {
        kanji: "引",
        radicals: "｜弓"
    },
    {
        kanji: "飲",
        radicals: "欠食"
    },
    {
        kanji: "淫",
        radicals: "ノ士汁爪王"
    },
    {
        kanji: "胤",
        radicals: "月儿幺"
    },
    {
        kanji: "蔭",
        radicals: "二个厶艾阡一"
    },
    {
        kanji: "院",
        radicals: "二儿宀阡元"
    },
    {
        kanji: "陰",
        radicals: "二个厶阡一"
    },
    {
        kanji: "隠",
        radicals: "ノヨ尚心阡"
    },
    {
        kanji: "韻",
        radicals: "音貝目ハ口日立"
    },
    {
        kanji: "吋",
        radicals: "口寸"
    },
    {
        kanji: "右",
        radicals: "ノ一口"
    },
    {
        kanji: "宇",
        radicals: "干亅宀"
    },
    {
        kanji: "烏",
        radicals: "鳥杰"
    },
    {
        kanji: "羽",
        radicals: "羽冫"
    },
    {
        kanji: "迂",
        radicals: "干込二亅"
    },
    {
        kanji: "雨",
        radicals: "雨"
    },
    {
        kanji: "卯",
        radicals: "卩"
    },
    {
        kanji: "鵜",
        radicals: "｜ノ弓鳥并杰"
    },
    {
        kanji: "窺",
        radicals: "見ハ宀一大穴二儿"
    },
    {
        kanji: "丑",
        radicals: "｜ノ一"
    },
    {
        kanji: "碓",
        radicals: "口石隹"
    },
    {
        kanji: "臼",
        radicals: "臼"
    },
    {
        kanji: "渦",
        radicals: "｜口汁冂"
    },
    {
        kanji: "嘘",
        radicals: "口卜匕厂虍"
    },
    {
        kanji: "唄",
        radicals: "貝目ハ口"
    },
    {
        kanji: "欝",
        radicals: "艮寸買木"
    },
    {
        kanji: "蔚",
        radicals: "示二小寸尸艾"
    },
    {
        kanji: "鰻",
        radicals: "魚田日買又杰"
    },
    {
        kanji: "姥",
        radicals: "女老匕"
    },
    {
        kanji: "厩",
        radicals: "牙艮儿厂"
    },
    {
        kanji: "浦",
        radicals: "十汁用丶"
    },
    {
        kanji: "瓜",
        radicals: "瓜厶"
    },
    {
        kanji: "閏",
        radicals: "王門"
    },
    {
        kanji: "噂",
        radicals: "口寸西并"
    },
    {
        kanji: "云",
        radicals: "一二厶"
    },
    {
        kanji: "運",
        radicals: "込車冖"
    },
    {
        kanji: "雲",
        radicals: "一雨二厶"
    },
    {
        kanji: "荏",
        radicals: "化士艾"
    },
    {
        kanji: "餌",
        radicals: "艮耳食"
    },
    {
        kanji: "叡",
        radicals: "ハ卜又目冖"
    },
    {
        kanji: "営",
        radicals: "口尚冖ノ"
    },
    {
        kanji: "嬰",
        radicals: "貝目ハ女"
    },
    {
        kanji: "影",
        radicals: "口小日亠彡"
    },
    {
        kanji: "映",
        radicals: "ノ日大冖"
    },
    {
        kanji: "曳",
        radicals: "乙日"
    },
    {
        kanji: "栄",
        radicals: "尚木冖"
    },
    {
        kanji: "永",
        radicals: "水丶"
    },
    {
        kanji: "泳",
        radicals: "汁水丶"
    },
    {
        kanji: "洩",
        radicals: "ノ乙汁日"
    },
    {
        kanji: "瑛",
        radicals: "ノ王艾大冖"
    },
    {
        kanji: "盈",
        radicals: "ノ一皿又"
    },
    {
        kanji: "穎",
        radicals: "禾貝目ハ頁匕"
    },
    {
        kanji: "頴",
        radicals: "貝目ハ示二小頁匕"
    },
    {
        kanji: "英",
        radicals: "ノ艾大冖"
    },
    {
        kanji: "衛",
        radicals: "口行彳韋"
    },
    {
        kanji: "詠",
        radicals: "言水丶"
    },
    {
        kanji: "鋭",
        radicals: "金口并个儿"
    },
    {
        kanji: "液",
        radicals: "化汁亠攵夕乞"
    },
    {
        kanji: "疫",
        radicals: "殳疔几又"
    },
    {
        kanji: "益",
        radicals: "一皿ハ并"
    },
    {
        kanji: "駅",
        radicals: "馬尸杰丶"
    },
    {
        kanji: "悦",
        radicals: "口并忙儿"
    },
    {
        kanji: "謁",
        radicals: "言日勹匕"
    },
    {
        kanji: "越",
        radicals: "走土戈"
    },
    {
        kanji: "閲",
        radicals: "口并門儿"
    },
    {
        kanji: "榎",
        radicals: "一自木目夂"
    },
    {
        kanji: "厭",
        radicals: "月犬日厂"
    },
    {
        kanji: "円",
        radicals: "冂亠一｜"
    },
    {
        kanji: "園",
        radicals: "衣口土囗"
    },
    {
        kanji: "堰",
        radicals: "女土日匚"
    },
    {
        kanji: "奄",
        radicals: "乙大日奄"
    },
    {
        kanji: "宴",
        radicals: "女日宀"
    },
    {
        kanji: "延",
        radicals: "一止廴"
    },
    {
        kanji: "怨",
        radicals: "心夕卩"
    },
    {
        kanji: "掩",
        radicals: "乙大日扎奄"
    },
    {
        kanji: "援",
        radicals: "ノ一爪又扎"
    },
    {
        kanji: "沿",
        radicals: "口汁ハ"
    },
    {
        kanji: "演",
        radicals: "汁田ハ宀一"
    },
    {
        kanji: "炎",
        radicals: "火"
    },
    {
        kanji: "焔",
        radicals: "｜火日勹"
    },
    {
        kanji: "煙",
        radicals: "火西土"
    },
    {
        kanji: "燕",
        radicals: "口匕杰爿艾"
    },
    {
        kanji: "猿",
        radicals: "衣口土犯"
    },
    {
        kanji: "縁",
        radicals: "ヨ糸幺小豕"
    },
    {
        kanji: "艶",
        radicals: "｜口色豆日并勹"
    },
    {
        kanji: "苑",
        radicals: "夕卩艾"
    },
    {
        kanji: "薗",
        radicals: "衣口土囗艾"
    },
    {
        kanji: "遠",
        radicals: "衣口込土"
    },
    {
        kanji: "鉛",
        radicals: "金口并ハ"
    },
    {
        kanji: "鴛",
        radicals: "鳥夕卩杰"
    },
    {
        kanji: "塩",
        radicals: "口皿土ノ一人乞"
    },
    {
        kanji: "於",
        radicals: "方个"
    },
    {
        kanji: "汚",
        radicals: "一汁勹二"
    },
    {
        kanji: "甥",
        radicals: "生田力"
    },
    {
        kanji: "凹",
        radicals: "凵"
    },
    {
        kanji: "央",
        radicals: "ノ一大冖"
    },
    {
        kanji: "奥",
        radicals: "大米冂"
    },
    {
        kanji: "往",
        radicals: "王丶彳"
    },
    {
        kanji: "応",
        radicals: "心广"
    },
    {
        kanji: "押",
        radicals: "｜日扎田"
    },
    {
        kanji: "旺",
        radicals: "王日"
    },
    {
        kanji: "横",
        radicals: "｜黄田二日ハ木廾"
    },
    {
        kanji: "欧",
        radicals: "欠匚ノ丶"
    },
    {
        kanji: "殴",
        radicals: "ノ丶匚殳几又"
    },
    {
        kanji: "王",
        radicals: "王"
    },
    {
        kanji: "翁",
        radicals: "羽ハ冫厶"
    },
    {
        kanji: "襖",
        radicals: "初大米冂釆"
    },
    {
        kanji: "鴬",
        radicals: "尚鳥冖杰"
    },
    {
        kanji: "鴎",
        radicals: "鳥匚杰ノ丶"
    },
    {
        kanji: "黄",
        radicals: "黄田ハ"
    },
    {
        kanji: "岡",
        radicals: "并冂一山岡"
    },
    {
        kanji: "沖",
        radicals: "｜汁口"
    },
    {
        kanji: "荻",
        radicals: "火犯艾"
    },
    {
        kanji: "億",
        radicals: "音化心日立"
    },
    {
        kanji: "屋",
        radicals: "至土厶尸"
    },
    {
        kanji: "憶",
        radicals: "音心日忙立"
    },
    {
        kanji: "臆",
        radicals: "音月心日立"
    },
    {
        kanji: "桶",
        radicals: "木用マ"
    },
    {
        kanji: "牡",
        radicals: "牛土"
    },
    {
        kanji: "乙",
        radicals: "乙"
    },
    {
        kanji: "俺",
        radicals: "乙化大奄"
    },
    {
        kanji: "卸",
        radicals: "ノ止卩乞"
    },
    {
        kanji: "恩",
        radicals: "心大囗"
    },
    {
        kanji: "温",
        radicals: "皿汁日"
    },
    {
        kanji: "穏",
        radicals: "ヨ禾心爪"
    },
    {
        kanji: "音",
        radicals: "音日立"
    },
    {
        kanji: "下",
        radicals: "｜一卜"
    },
    {
        kanji: "化",
        radicals: "化匕"
    },
    {
        kanji: "仮",
        radicals: "化又厂"
    },
    {
        kanji: "何",
        radicals: "化口亅一"
    },
    {
        kanji: "伽",
        radicals: "化口力"
    },
    {
        kanji: "価",
        radicals: "化西"
    },
    {
        kanji: "佳",
        radicals: "化土"
    },
    {
        kanji: "加",
        radicals: "口力"
    },
    {
        kanji: "可",
        radicals: "一口亅"
    },
    {
        kanji: "嘉",
        radicals: "口士力"
    },
    {
        kanji: "夏",
        radicals: "一自夂目"
    },
    {
        kanji: "嫁",
        radicals: "女宀豕"
    },
    {
        kanji: "家",
        radicals: "宀豕"
    },
    {
        kanji: "寡",
        radicals: "一自刀ハ宀"
    },
    {
        kanji: "科",
        radicals: "禾斗"
    },
    {
        kanji: "暇",
        radicals: "日又"
    },
    {
        kanji: "果",
        radicals: "｜田木"
    },
    {
        kanji: "架",
        radicals: "口木力"
    },
    {
        kanji: "歌",
        radicals: "一欠口亅"
    },
    {
        kanji: "河",
        radicals: "口汁亅一"
    },
    {
        kanji: "火",
        radicals: "火"
    },
    {
        kanji: "珂",
        radicals: "王口亅一"
    },
    {
        kanji: "禍",
        radicals: "口礼冂"
    },
    {
        kanji: "禾",
        radicals: "禾木ノ"
    },
    {
        kanji: "稼",
        radicals: "禾宀豕"
    },
    {
        kanji: "箇",
        radicals: "口十竹囗乞"
    },
    {
        kanji: "花",
        radicals: "化匕艾"
    },
    {
        kanji: "苛",
        radicals: "一口亅艾"
    },
    {
        kanji: "茄",
        radicals: "口力艾"
    },
    {
        kanji: "荷",
        radicals: "化口亅艾一"
    },
    {
        kanji: "華",
        radicals: "｜一艾"
    },
    {
        kanji: "菓",
        radicals: "田木艾"
    },
    {
        kanji: "蝦",
        radicals: "虫又口"
    },
    {
        kanji: "課",
        radicals: "言田木"
    },
    {
        kanji: "嘩",
        radicals: "一口艾｜"
    },
    {
        kanji: "貨",
        radicals: "化貝目ハ匕"
    },
    {
        kanji: "迦",
        radicals: "口込力"
    },
    {
        kanji: "過",
        radicals: "口込冂"
    },
    {
        kanji: "霞",
        radicals: "雨又"
    },
    {
        kanji: "蚊",
        radicals: "虫文"
    },
    {
        kanji: "俄",
        radicals: "化亅戈手"
    },
    {
        kanji: "峨",
        radicals: "山亅戈手"
    },
    {
        kanji: "我",
        radicals: "亅戈手"
    },
    {
        kanji: "牙",
        radicals: "牙"
    },
    {
        kanji: "画",
        radicals: "一田凵"
    },
    {
        kanji: "臥",
        radicals: "臣人"
    },
    {
        kanji: "芽",
        radicals: "牙艾"
    },
    {
        kanji: "蛾",
        radicals: "虫亅戈手"
    },
    {
        kanji: "賀",
        radicals: "貝目ハ口力"
    },
    {
        kanji: "雅",
        radicals: "牙隹"
    },
    {
        kanji: "餓",
        radicals: "食亅戈手"
    },
    {
        kanji: "駕",
        radicals: "口馬力杰"
    },
    {
        kanji: "介",
        radicals: "ハ个"
    },
    {
        kanji: "会",
        radicals: "二个厶"
    },
    {
        kanji: "解",
        radicals: "角牛刀"
    },
    {
        kanji: "回",
        radicals: "口囗"
    },
    {
        kanji: "塊",
        radicals: "鬼田土儿匕厶"
    },
    {
        kanji: "壊",
        radicals: "衣十土買亠"
    },
    {
        kanji: "廻",
        radicals: "口囗廴"
    },
    {
        kanji: "快",
        radicals: "人大二忙ユ"
    },
    {
        kanji: "怪",
        radicals: "土忙又"
    },
    {
        kanji: "悔",
        radicals: "母忙毋ノ一人乞"
    },
    {
        kanji: "恢",
        radicals: "火厂忙"
    },
    {
        kanji: "懐",
        radicals: "衣十買忙亠"
    },
    {
        kanji: "戒",
        radicals: "廾戈"
    },
    {
        kanji: "拐",
        radicals: "口刀扎"
    },
    {
        kanji: "改",
        radicals: "已攵乞"
    },
    {
        kanji: "魁",
        radicals: "鬼田斗儿厶匕"
    },
    {
        kanji: "晦",
        radicals: "日母毋乞"
    },
    {
        kanji: "械",
        radicals: "木廾戈"
    },
    {
        kanji: "海",
        radicals: "汁母毋乞"
    },
    {
        kanji: "灰",
        radicals: "火厂"
    },
    {
        kanji: "界",
        radicals: "田个儿"
    },
    {
        kanji: "皆",
        radicals: "白比"
    },
    {
        kanji: "絵",
        radicals: "糸幺小二个厶"
    },
    {
        kanji: "芥",
        radicals: "个艾儿"
    },
    {
        kanji: "蟹",
        radicals: "角牛虫刀"
    },
    {
        kanji: "開",
        radicals: "一門廾二ノ"
    },
    {
        kanji: "階",
        radicals: "白比阡"
    },
    {
        kanji: "貝",
        radicals: "貝目ハ"
    },
    {
        kanji: "凱",
        radicals: "口山豆并几"
    },
    {
        kanji: "劾",
        radicals: "人力亠ノ丶"
    },
    {
        kanji: "外",
        radicals: "卜夕"
    },
    {
        kanji: "咳",
        radicals: "口人亠ノ丶"
    },
    {
        kanji: "害",
        radicals: "口土亠宀二"
    },
    {
        kanji: "崖",
        radicals: "山土厂"
    },
    {
        kanji: "慨",
        radicals: "牙艮忙"
    },
    {
        kanji: "概",
        radicals: "牙艮木"
    },
    {
        kanji: "涯",
        radicals: "汁土厂"
    },
    {
        kanji: "碍",
        radicals: "口寸石日一"
    },
    {
        kanji: "蓋",
        radicals: "皿土厶艾"
    },
    {
        kanji: "街",
        radicals: "行土彳"
    },
    {
        kanji: "該",
        radicals: "言人亠ノ丶"
    },
    {
        kanji: "鎧",
        radicals: "金口山豆并"
    },
    {
        kanji: "骸",
        radicals: "月骨人亠冂冖ノ丶"
    },
    {
        kanji: "浬",
        radicals: "汁里田土"
    },
    {
        kanji: "馨",
        radicals: "禾香士日又几殳尸"
    },
    {
        kanji: "蛙",
        radicals: "虫土"
    },
    {
        kanji: "垣",
        radicals: "一土日"
    },
    {
        kanji: "柿",
        radicals: "｜巾木亠冂"
    },
    {
        kanji: "蛎",
        radicals: "斤虫厂"
    },
    {
        kanji: "鈎",
        radicals: "金勹厶"
    },
    {
        kanji: "劃",
        radicals: "一刈田聿"
    },
    {
        kanji: "嚇",
        radicals: "口赤土"
    },
    {
        kanji: "各",
        radicals: "口夂攵"
    },
    {
        kanji: "廓",
        radicals: "口子邦亅亠广"
    },
    {
        kanji: "拡",
        radicals: "厶广扎"
    },
    {
        kanji: "撹",
        radicals: "見尚冖扎"
    },
    {
        kanji: "格",
        radicals: "口木夂"
    },
    {
        kanji: "核",
        radicals: "人木亠ノ丶"
    },
    {
        kanji: "殻",
        radicals: "士冖殳几又"
    },
    {
        kanji: "獲",
        radicals: "犯又艾隹"
    },
    {
        kanji: "確",
        radicals: "口石宀隹"
    },
    {
        kanji: "穫",
        radicals: "禾又艾隹"
    },
    {
        kanji: "覚",
        radicals: "見尚冖"
    },
    {
        kanji: "角",
        radicals: "角勹月｜"
    },
    {
        kanji: "赫",
        radicals: "赤土"
    },
    {
        kanji: "較",
        radicals: "車父亠"
    },
    {
        kanji: "郭",
        radicals: "口邦亅亠子"
    },
    {
        kanji: "閣",
        radicals: "口門夂"
    },
    {
        kanji: "隔",
        radicals: "一口儿冂阡鬲"
    },
    {
        kanji: "革",
        radicals: "革廾口十"
    },
    {
        kanji: "学",
        radicals: "子尚冖"
    },
    {
        kanji: "岳",
        radicals: "山斤一"
    },
    {
        kanji: "楽",
        radicals: "白木冫"
    },
    {
        kanji: "額",
        radicals: "貝目ハ口頁夂宀"
    },
    {
        kanji: "顎",
        radicals: "貝目ハ口頁二勹"
    },
    {
        kanji: "掛",
        radicals: "土卜扎"
    },
    {
        kanji: "笠",
        radicals: "竹立乞"
    },
    {
        kanji: "樫",
        radicals: "臣土又木"
    },
    {
        kanji: "橿",
        radicals: "一田木"
    },
    {
        kanji: "梶",
        radicals: "毛木尸"
    },
    {
        kanji: "鰍",
        radicals: "火禾魚田杰"
    },
    {
        kanji: "潟",
        radicals: "臼汁勹杰"
    },
    {
        kanji: "割",
        radicals: "刈口土宀亠二"
    },
    {
        kanji: "喝",
        radicals: "口日勹匕"
    },
    {
        kanji: "恰",
        radicals: "口忙个一"
    },
    {
        kanji: "括",
        radicals: "ノ口十舌扎"
    },
    {
        kanji: "活",
        radicals: "ノ口十汁舌"
    },
    {
        kanji: "渇",
        radicals: "汁日勹匕"
    },
    {
        kanji: "滑",
        radicals: "月骨汁冂冖"
    },
    {
        kanji: "葛",
        radicals: "日勹匕艾"
    },
    {
        kanji: "褐",
        radicals: "初日勹匕"
    },
    {
        kanji: "轄",
        radicals: "口車土亠宀二"
    },
    {
        kanji: "且",
        radicals: "一目"
    },
    {
        kanji: "鰹",
        radicals: "魚臣田土又杰"
    },
    {
        kanji: "叶",
        radicals: "口十"
    },
    {
        kanji: "椛",
        radicals: "化木匕艾"
    },
    {
        kanji: "樺",
        radicals: "｜一木艾"
    },
    {
        kanji: "鞄",
        radicals: "革勹已"
    },
    {
        kanji: "株",
        radicals: "牛木"
    },
    {
        kanji: "兜",
        radicals: "白儿"
    },
    {
        kanji: "竃",
        radicals: "亀穴土宀儿乙勹田"
    },
    {
        kanji: "蒲",
        radicals: "汁用丶艾十"
    },
    {
        kanji: "釜",
        radicals: "一干并父王丶ノ金"
    },
    {
        kanji: "鎌",
        radicals: "金王丶ノヨ并ハ"
    },
    {
        kanji: "噛",
        radicals: "口止歯米"
    },
    {
        kanji: "鴨",
        radicals: "｜鳥日杰田"
    },
    {
        kanji: "栢",
        radicals: "一白木"
    },
    {
        kanji: "茅",
        radicals: "矛艾"
    },
    {
        kanji: "萱",
        radicals: "一日宀艾"
    },
    {
        kanji: "粥",
        radicals: "弓米"
    },
    {
        kanji: "刈",
        radicals: "刈"
    },
    {
        kanji: "苅",
        radicals: "刈艾"
    },
    {
        kanji: "瓦",
        radicals: "瓦一"
    },
    {
        kanji: "乾",
        radicals: "乙十日ノ一人乞"
    },
    {
        kanji: "侃",
        radicals: "化口川"
    },
    {
        kanji: "冠",
        radicals: "寸儿冖元"
    },
    {
        kanji: "寒",
        radicals: "一ハ宀丶井"
    },
    {
        kanji: "刊",
        radicals: "刈干"
    },
    {
        kanji: "勘",
        radicals: "力匚甘儿"
    },
    {
        kanji: "勧",
        radicals: "ノ力隹矢乞"
    },
    {
        kanji: "巻",
        radicals: "大二并已"
    },
    {
        kanji: "喚",
        radicals: "口大儿冂勹"
    },
    {
        kanji: "堪",
        radicals: "土儿匚甘"
    },
    {
        kanji: "姦",
        radicals: "女"
    },
    {
        kanji: "完",
        radicals: "二儿宀元"
    },
    {
        kanji: "官",
        radicals: "口宀｜"
    },
    {
        kanji: "寛",
        radicals: "見宀艾"
    },
    {
        kanji: "干",
        radicals: "干十一"
    },
    {
        kanji: "幹",
        radicals: "干十日个"
    },
    {
        kanji: "患",
        radicals: "｜口心"
    },
    {
        kanji: "感",
        radicals: "ノ口心戈"
    },
    {
        kanji: "慣",
        radicals: "貝目ハ母忙毋"
    },
    {
        kanji: "憾",
        radicals: "ノ口心忙戈"
    },
    {
        kanji: "換",
        radicals: "大儿冂勹扎"
    },
    {
        kanji: "敢",
        radicals: "耳攵乞"
    },
    {
        kanji: "柑",
        radicals: "日木甘"
    },
    {
        kanji: "桓",
        radicals: "一日木"
    },
    {
        kanji: "棺",
        radicals: "口木宀｜"
    },
    {
        kanji: "款",
        radicals: "欠士示二小"
    },
    {
        kanji: "歓",
        radicals: "欠隹矢乞"
    },
    {
        kanji: "汗",
        radicals: "干汁"
    },
    {
        kanji: "漢",
        radicals: "汁艾口一大二"
    },
    {
        kanji: "澗",
        radicals: "汁日門"
    },
    {
        kanji: "潅",
        radicals: "汁隹矢乞"
    },
    {
        kanji: "環",
        radicals: "衣王口買一"
    },
    {
        kanji: "甘",
        radicals: "甘"
    },
    {
        kanji: "監",
        radicals: "皿臣二乞"
    },
    {
        kanji: "看",
        radicals: "ノ一手二目"
    },
    {
        kanji: "竿",
        radicals: "干竹乞"
    },
    {
        kanji: "管",
        radicals: "口竹宀｜乞"
    },
    {
        kanji: "簡",
        radicals: "竹日門乞"
    },
    {
        kanji: "緩",
        radicals: "糸幺小爪一ノ又"
    },
    {
        kanji: "缶",
        radicals: "缶凵山"
    },
    {
        kanji: "翰",
        radicals: "羽十日个冫"
    },
    {
        kanji: "肝",
        radicals: "干月"
    },
    {
        kanji: "艦",
        radicals: "皿舟臣二乞"
    },
    {
        kanji: "莞",
        radicals: "二儿宀艾元"
    },
    {
        kanji: "観",
        radicals: "見隹矢乞"
    },
    {
        kanji: "諌",
        radicals: "｜言日木田"
    },
    {
        kanji: "貫",
        radicals: "貝目ハ母毋"
    },
    {
        kanji: "還",
        radicals: "衣口込買一"
    },
    {
        kanji: "鑑",
        radicals: "金皿臣二乞"
    },
    {
        kanji: "間",
        radicals: "日門"
    },
    {
        kanji: "閑",
        radicals: "木門"
    },
    {
        kanji: "関",
        radicals: "人大二ハ門并一"
    },
    {
        kanji: "陥",
        radicals: "｜日勹阡"
    },
    {
        kanji: "韓",
        radicals: "十日韋口"
    },
    {
        kanji: "館",
        radicals: "口食宀｜"
    },
    {
        kanji: "舘",
        radicals: "干口个宀｜"
    },
    {
        kanji: "丸",
        radicals: "九丶"
    },
    {
        kanji: "含",
        radicals: "口个一"
    },
    {
        kanji: "岸",
        radicals: "干山厂"
    },
    {
        kanji: "巌",
        radicals: "山耳尚厂攵乞"
    },
    {
        kanji: "玩",
        radicals: "王儿二元"
    },
    {
        kanji: "癌",
        radicals: "口山疔品"
    },
    {
        kanji: "眼",
        radicals: "艮目"
    },
    {
        kanji: "岩",
        radicals: "口山石"
    },
    {
        kanji: "翫",
        radicals: "羽白儿冫元"
    },
    {
        kanji: "贋",
        radicals: "化貝目ハ厂隹"
    },
    {
        kanji: "雁",
        radicals: "化厂隹"
    },
    {
        kanji: "頑",
        radicals: "貝目ハ頁儿二元"
    },
    {
        kanji: "顔",
        radicals: "貝目ハ頁立亠厂彡"
    },
    {
        kanji: "願",
        radicals: "貝目ハ小白頁厂"
    },
    {
        kanji: "企",
        radicals: "止个"
    },
    {
        kanji: "伎",
        radicals: "化支又十"
    },
    {
        kanji: "危",
        radicals: "勹厂卩"
    },
    {
        kanji: "喜",
        radicals: "口士豆并"
    },
    {
        kanji: "器",
        radicals: "口大"
    },
    {
        kanji: "基",
        radicals: "一甘土ハ"
    },
    {
        kanji: "奇",
        radicals: "一口大亅"
    },
    {
        kanji: "嬉",
        radicals: "口士女豆并"
    },
    {
        kanji: "寄",
        radicals: "一口大亅宀"
    },
    {
        kanji: "岐",
        radicals: "山支又十"
    },
    {
        kanji: "希",
        radicals: "ノ一巾"
    },
    {
        kanji: "幾",
        radicals: "ノ幺戈丶"
    },
    {
        kanji: "忌",
        radicals: "心已"
    },
    {
        kanji: "揮",
        radicals: "車冖扎"
    },
    {
        kanji: "机",
        radicals: "木几"
    },
    {
        kanji: "旗",
        radicals: "甘ハ方乞"
    },
    {
        kanji: "既",
        radicals: "牙艮"
    },
    {
        kanji: "期",
        radicals: "甘月ハ"
    },
    {
        kanji: "棋",
        radicals: "甘ハ木"
    },
    {
        kanji: "棄",
        radicals: "一木亠凵厶"
    },
    {
        kanji: "機",
        radicals: "ノ木丶幺戈"
    },
    {
        kanji: "帰",
        radicals: "ヨ刈巾冖"
    },
    {
        kanji: "毅",
        radicals: "立亠殳豕几又"
    },
    {
        kanji: "気",
        radicals: "气丶ノ乞"
    },
    {
        kanji: "汽",
        radicals: "汁气乞"
    },
    {
        kanji: "畿",
        radicals: "田幺戈丶ノ"
    },
    {
        kanji: "祈",
        radicals: "斤礼"
    },
    {
        kanji: "季",
        radicals: "禾子"
    },
    {
        kanji: "稀",
        radicals: "ノ一禾巾丶"
    },
    {
        kanji: "紀",
        radicals: "糸幺小已"
    },
    {
        kanji: "徽",
        radicals: "山糸幺小攵彳"
    },
    {
        kanji: "規",
        radicals: "見土人二大"
    },
    {
        kanji: "記",
        radicals: "言已"
    },
    {
        kanji: "貴",
        radicals: "｜一貝目ハ口"
    },
    {
        kanji: "起",
        radicals: "走土已"
    },
    {
        kanji: "軌",
        radicals: "車九"
    },
    {
        kanji: "輝",
        radicals: "車尚儿冖一"
    },
    {
        kanji: "飢",
        radicals: "食几"
    },
    {
        kanji: "騎",
        radicals: "口大馬亅一杰"
    },
    {
        kanji: "鬼",
        radicals: "鬼田儿匕厶"
    },
    {
        kanji: "亀",
        radicals: "亀田勹乙"
    },
    {
        kanji: "偽",
        radicals: "化丶杰ユノ并勹"
    },
    {
        kanji: "儀",
        radicals: "一王化并羊亅戈手"
    },
    {
        kanji: "妓",
        radicals: "支女又十"
    },
    {
        kanji: "宜",
        radicals: "一目宀"
    },
    {
        kanji: "戯",
        radicals: "卜匕厂戈虍"
    },
    {
        kanji: "技",
        radicals: "支扎又十"
    },
    {
        kanji: "擬",
        radicals: "疋矢匕扎マ乞"
    },
    {
        kanji: "欺",
        radicals: "甘欠ハ"
    },
    {
        kanji: "犠",
        radicals: "一王牛并羊亅戈手"
    },
    {
        kanji: "疑",
        radicals: "疋矢匕マ乞"
    },
    {
        kanji: "祇",
        radicals: "氏礼"
    },
    {
        kanji: "義",
        radicals: "一王并羊亅戈手"
    },
    {
        kanji: "蟻",
        radicals: "一王虫并羊亅戈手"
    },
    {
        kanji: "誼",
        radicals: "一言目宀"
    },
    {
        kanji: "議",
        radicals: "一王言并羊亅戈手"
    },
    {
        kanji: "掬",
        radicals: "米勹扎"
    },
    {
        kanji: "菊",
        radicals: "米勹艾"
    },
    {
        kanji: "鞠",
        radicals: "革米勹"
    },
    {
        kanji: "吉",
        radicals: "口士"
    },
    {
        kanji: "吃",
        radicals: "乙口乞"
    },
    {
        kanji: "喫",
        radicals: "口大土刀亠二"
    },
    {
        kanji: "桔",
        radicals: "口士木"
    },
    {
        kanji: "橘",
        radicals: "口矛木儿冂"
    },
    {
        kanji: "詰",
        radicals: "言口士"
    },
    {
        kanji: "砧",
        radicals: "口石卜"
    },
    {
        kanji: "杵",
        radicals: "ノ干木十乞"
    },
    {
        kanji: "黍",
        radicals: "禾黍水"
    },
    {
        kanji: "却",
        radicals: "土卩厶"
    },
    {
        kanji: "客",
        radicals: "口夂宀"
    },
    {
        kanji: "脚",
        radicals: "月土卩厶"
    },
    {
        kanji: "虐",
        radicals: "卜匕匚厂虍"
    },
    {
        kanji: "逆",
        radicals: "込并屮"
    },
    {
        kanji: "丘",
        radicals: "一斤"
    },
    {
        kanji: "久",
        radicals: "ノ入久"
    },
    {
        kanji: "仇",
        radicals: "化九"
    },
    {
        kanji: "休",
        radicals: "化木"
    },
    {
        kanji: "及",
        radicals: "丶及乃ノ"
    },
    {
        kanji: "吸",
        radicals: "ノ口及"
    },
    {
        kanji: "宮",
        radicals: "口宀ノ"
    },
    {
        kanji: "弓",
        radicals: "弓"
    },
    {
        kanji: "急",
        radicals: "ヨ心勹"
    },
    {
        kanji: "救",
        radicals: "水丶攵乞"
    },
    {
        kanji: "朽",
        radicals: "一木勹"
    },
    {
        kanji: "求",
        radicals: "一水丶"
    },
    {
        kanji: "汲",
        radicals: "ノ汁及"
    },
    {
        kanji: "泣",
        radicals: "汁立"
    },
    {
        kanji: "灸",
        radicals: "久火"
    },
    {
        kanji: "球",
        radicals: "王水丶"
    },
    {
        kanji: "究",
        radicals: "穴九儿宀"
    },
    {
        kanji: "窮",
        radicals: "弓穴身儿宀"
    },
    {
        kanji: "笈",
        radicals: "ノ竹及乞"
    },
    {
        kanji: "級",
        radicals: "ノ糸幺小及"
    },
    {
        kanji: "糾",
        radicals: "｜糸幺小十"
    },
    {
        kanji: "給",
        radicals: "口糸幺小个一"
    },
    {
        kanji: "旧",
        radicals: "｜日"
    },
    {
        kanji: "牛",
        radicals: "牛"
    },
    {
        kanji: "去",
        radicals: "土厶"
    },
    {
        kanji: "居",
        radicals: "口十尸"
    },
    {
        kanji: "巨",
        radicals: "匚巨"
    },
    {
        kanji: "拒",
        radicals: "匚扎巨"
    },
    {
        kanji: "拠",
        radicals: "几夂扎"
    },
    {
        kanji: "挙",
        radicals: "手尚ハ"
    },
    {
        kanji: "渠",
        radicals: "汁木匚巨"
    },
    {
        kanji: "虚",
        radicals: "一卜匕厂虍"
    },
    {
        kanji: "許",
        radicals: "ノ干言十乞"
    },
    {
        kanji: "距",
        radicals: "口足匚巨止"
    },
    {
        kanji: "鋸",
        radicals: "金口十尸"
    },
    {
        kanji: "漁",
        radicals: "魚汁田杰"
    },
    {
        kanji: "禦",
        radicals: "止示二小卩彳乞"
    },
    {
        kanji: "魚",
        radicals: "魚田杰"
    },
    {
        kanji: "亨",
        radicals: "口亠一亅"
    },
    {
        kanji: "享",
        radicals: "口子亠"
    },
    {
        kanji: "京",
        radicals: "口小亠"
    },
    {
        kanji: "供",
        radicals: "｜一化二ハ"
    },
    {
        kanji: "侠",
        radicals: "化人大二并亠"
    },
    {
        kanji: "僑",
        radicals: "ノ化口冂大"
    },
    {
        kanji: "兇",
        radicals: "儿凵丶ノ"
    },
    {
        kanji: "競",
        radicals: "口立儿"
    },
    {
        kanji: "共",
        radicals: "ハ｜一二"
    },
    {
        kanji: "凶",
        radicals: "凵丶ノ"
    },
    {
        kanji: "協",
        radicals: "十力"
    },
    {
        kanji: "匡",
        radicals: "王匚"
    },
    {
        kanji: "卿",
        radicals: "艮卩"
    },
    {
        kanji: "叫",
        radicals: "｜口十"
    },
    {
        kanji: "喬",
        radicals: "ノ口冂大"
    },
    {
        kanji: "境",
        radicals: "音土日立儿"
    },
    {
        kanji: "峡",
        radicals: "山人大二并亠"
    },
    {
        kanji: "強",
        radicals: "弓虫厶"
    },
    {
        kanji: "彊",
        radicals: "一弓田"
    },
    {
        kanji: "怯",
        radicals: "土忙厶"
    },
    {
        kanji: "恐",
        radicals: "工心丶几"
    },
    {
        kanji: "恭",
        radicals: "心ハ井"
    },
    {
        kanji: "挟",
        radicals: "人大二并丶亠扎"
    },
    {
        kanji: "教",
        radicals: "子老攵乞"
    },
    {
        kanji: "橋",
        radicals: "ノ口木冂"
    },
    {
        kanji: "況",
        radicals: "口汁儿"
    },
    {
        kanji: "狂",
        radicals: "王犯"
    },
    {
        kanji: "狭",
        radicals: "人大二并犯丶亠"
    },
    {
        kanji: "矯",
        radicals: "ノ口矢冂大乞"
    },
    {
        kanji: "胸",
        radicals: "月凵勹ノ丶"
    },
    {
        kanji: "脅",
        radicals: "月力"
    },
    {
        kanji: "興",
        radicals: "臼口ハ冂一"
    },
    {
        kanji: "蕎",
        radicals: "ノ口冂艾大"
    },
    {
        kanji: "郷",
        radicals: "艮邦幺"
    },
    {
        kanji: "鏡",
        radicals: "音金日立儿"
    },
    {
        kanji: "響",
        radicals: "音艮日邦立幺"
    },
    {
        kanji: "饗",
        radicals: "艮食邦幺"
    },
    {
        kanji: "驚",
        radicals: "口馬勹夂艾攵杰乞"
    },
    {
        kanji: "仰",
        radicals: "化卩"
    },
    {
        kanji: "凝",
        radicals: "矢冫匕マ疋乞"
    },
    {
        kanji: "尭",
        radicals: "十儿廾一"
    },
    {
        kanji: "暁",
        radicals: "十日儿廾"
    },
    {
        kanji: "業",
        radicals: "｜一王并木羊耒"
    },
    {
        kanji: "局",
        radicals: "口尸"
    },
    {
        kanji: "曲",
        radicals: "｜日"
    },
    {
        kanji: "極",
        radicals: "口又木一"
    },
    {
        kanji: "玉",
        radicals: "王丶"
    },
    {
        kanji: "桐",
        radicals: "口木冂一"
    },
    {
        kanji: "粁",
        radicals: "干米十"
    },
    {
        kanji: "僅",
        radicals: "化土艾口二一"
    },
    {
        kanji: "勤",
        radicals: "土力艾口二一"
    },
    {
        kanji: "均",
        radicals: "土冫勹二"
    },
    {
        kanji: "巾",
        radicals: "巾冂｜"
    },
    {
        kanji: "錦",
        radicals: "巾金白"
    },
    {
        kanji: "斤",
        radicals: "斤"
    },
    {
        kanji: "欣",
        radicals: "斤欠"
    },
    {
        kanji: "欽",
        radicals: "金欠"
    },
    {
        kanji: "琴",
        radicals: "王个一"
    },
    {
        kanji: "禁",
        radicals: "示二小木"
    },
    {
        kanji: "禽",
        radicals: "个亠冂凵厶禹丶ノ"
    },
    {
        kanji: "筋",
        radicals: "月竹力乞"
    },
    {
        kanji: "緊",
        radicals: "糸幺小臣又"
    },
    {
        kanji: "芹",
        radicals: "斤艾"
    },
    {
        kanji: "菌",
        radicals: "禾囗艾"
    },
    {
        kanji: "衿",
        radicals: "初个一"
    },
    {
        kanji: "襟",
        radicals: "示二小初木"
    },
    {
        kanji: "謹",
        radicals: "言土艾口二"
    },
    {
        kanji: "近",
        radicals: "斤込"
    },
    {
        kanji: "金",
        radicals: "金王ハ个并"
    },
    {
        kanji: "吟",
        radicals: "口个一"
    },
    {
        kanji: "銀",
        radicals: "金艮"
    },
    {
        kanji: "九",
        radicals: "九"
    },
    {
        kanji: "倶",
        radicals: "化ハ目一"
    },
    {
        kanji: "句",
        radicals: "口勹"
    },
    {
        kanji: "区",
        radicals: "匚丶ノ"
    },
    {
        kanji: "狗",
        radicals: "口犯勹"
    },
    {
        kanji: "玖",
        radicals: "久王"
    },
    {
        kanji: "矩",
        radicals: "矢巨乞"
    },
    {
        kanji: "苦",
        radicals: "口十艾"
    },
    {
        kanji: "躯",
        radicals: "身匚丶ノ"
    },
    {
        kanji: "駆",
        radicals: "馬匚丶ノ杰"
    },
    {
        kanji: "駈",
        radicals: "斤馬杰一"
    },
    {
        kanji: "駒",
        radicals: "口馬勹杰"
    },
    {
        kanji: "具",
        radicals: "一ハ目"
    },
    {
        kanji: "愚",
        radicals: "心田冂厶禹"
    },
    {
        kanji: "虞",
        radicals: "口ハ卜匕厂虍"
    },
    {
        kanji: "喰",
        radicals: "口食"
    },
    {
        kanji: "空",
        radicals: "穴工儿宀"
    },
    {
        kanji: "偶",
        radicals: "化田冂厶禹"
    },
    {
        kanji: "寓",
        radicals: "田冂厶宀禹"
    },
    {
        kanji: "遇",
        radicals: "込田冂厶禹"
    },
    {
        kanji: "隅",
        radicals: "田日冂厶禹阡"
    },
    {
        kanji: "串",
        radicals: "｜口"
    },
    {
        kanji: "櫛",
        radicals: "艮竹木卩乞"
    },
    {
        kanji: "釧",
        radicals: "金川"
    },
    {
        kanji: "屑",
        radicals: "月尚尸"
    },
    {
        kanji: "屈",
        radicals: "｜山尸凵"
    },
    {
        kanji: "掘",
        radicals: "｜山尸扎凵"
    },
    {
        kanji: "窟",
        radicals: "｜穴山儿宀尸"
    },
    {
        kanji: "沓",
        radicals: "水日"
    },
    {
        kanji: "靴",
        radicals: "化革匕"
    },
    {
        kanji: "轡",
        radicals: "口糸幺小車"
    },
    {
        kanji: "窪",
        radicals: "穴汁土儿宀"
    },
    {
        kanji: "熊",
        radicals: "月匕厶杰"
    },
    {
        kanji: "隈",
        radicals: "衣田阡"
    },
    {
        kanji: "粂",
        radicals: "久米"
    },
    {
        kanji: "栗",
        radicals: "西木"
    },
    {
        kanji: "繰",
        radicals: "口糸幺小木品"
    },
    {
        kanji: "桑",
        radicals: "又木"
    },
    {
        kanji: "鍬",
        radicals: "火禾金"
    },
    {
        kanji: "勲",
        radicals: "｜力杰日一ノ"
    },
    {
        kanji: "君",
        radicals: "一口ノヨ"
    },
    {
        kanji: "薫",
        radicals: "｜杰艾日ノ一"
    },
    {
        kanji: "訓",
        radicals: "言川"
    },
    {
        kanji: "群",
        radicals: "一王口并羊ノヨ"
    },
    {
        kanji: "軍",
        radicals: "車冖"
    },
    {
        kanji: "郡",
        radicals: "一口邦ノヨ"
    },
    {
        kanji: "卦",
        radicals: "土卜"
    },
    {
        kanji: "袈",
        radicals: "衣口力亠"
    },
    {
        kanji: "祁",
        radicals: "邦礼"
    },
    {
        kanji: "係",
        radicals: "ノ化糸幺小"
    },
    {
        kanji: "傾",
        radicals: "化貝目ハ頁匕"
    },
    {
        kanji: "刑",
        radicals: "刈廾ノ二一"
    },
    {
        kanji: "兄",
        radicals: "口儿"
    },
    {
        kanji: "啓",
        radicals: "戸口攵一尸乞"
    },
    {
        kanji: "圭",
        radicals: "土"
    },
    {
        kanji: "珪",
        radicals: "王土"
    },
    {
        kanji: "型",
        radicals: "刈土廾ノ二一"
    },
    {
        kanji: "契",
        radicals: "大土刀亠二"
    },
    {
        kanji: "形",
        radicals: "廾彡ノ二一"
    },
    {
        kanji: "径",
        radicals: "土又彳"
    },
    {
        kanji: "恵",
        radicals: "一心田"
    },
    {
        kanji: "慶",
        radicals: "心冖夂广"
    },
    {
        kanji: "慧",
        radicals: "ヨ心｜一"
    },
    {
        kanji: "憩",
        radicals: "口自心舌目"
    },
    {
        kanji: "掲",
        radicals: "日勹匕扎"
    },
    {
        kanji: "携",
        radicals: "ノ扎隹乃"
    },
    {
        kanji: "敬",
        radicals: "口勹攵艾乞"
    },
    {
        kanji: "景",
        radicals: "口小日亠"
    },
    {
        kanji: "桂",
        radicals: "土木"
    },
    {
        kanji: "渓",
        radicals: "汁人爪土二大"
    },
    {
        kanji: "畦",
        radicals: "田土"
    },
    {
        kanji: "稽",
        radicals: "禾日匕尤"
    },
    {
        kanji: "系",
        radicals: "ノ糸幺小"
    },
    {
        kanji: "経",
        radicals: "糸幺小土又"
    },
    {
        kanji: "継",
        radicals: "｜糸幺小米"
    },
    {
        kanji: "繋",
        radicals: "糸幺小車殳几又"
    },
    {
        kanji: "罫",
        radicals: "土買卜"
    },
    {
        kanji: "茎",
        radicals: "土又艾"
    },
    {
        kanji: "荊",
        radicals: "刈廾艾ノ二一"
    },
    {
        kanji: "蛍",
        radicals: "尚虫冖"
    },
    {
        kanji: "計",
        radicals: "言十"
    },
    {
        kanji: "詣",
        radicals: "言日匕"
    },
    {
        kanji: "警",
        radicals: "言口勹夂艾攵乞"
    },
    {
        kanji: "軽",
        radicals: "車土又"
    },
    {
        kanji: "頚",
        radicals: "貝目ハ土頁又"
    },
    {
        kanji: "鶏",
        radicals: "人爪土大鳥杰二"
    },
    {
        kanji: "芸",
        radicals: "二厶艾"
    },
    {
        kanji: "迎",
        radicals: "込卩"
    },
    {
        kanji: "鯨",
        radicals: "魚口小田亠杰"
    },
    {
        kanji: "劇",
        radicals: "刈卜匕厂虍豕"
    },
    {
        kanji: "戟",
        radicals: "十日戈"
    },
    {
        kanji: "撃",
        radicals: "車手殳几又"
    },
    {
        kanji: "激",
        radicals: "汁白方攵乞"
    },
    {
        kanji: "隙",
        radicals: "小日阡"
    },
    {
        kanji: "桁",
        radicals: "行木彳"
    },
    {
        kanji: "傑",
        radicals: "化舛木夕"
    },
    {
        kanji: "欠",
        radicals: "欠勹人"
    },
    {
        kanji: "決",
        radicals: "汁人大二ユ"
    },
    {
        kanji: "潔",
        radicals: "糸幺小汁土刀亠二"
    },
    {
        kanji: "穴",
        radicals: "穴ハ宀儿"
    },
    {
        kanji: "結",
        radicals: "口士糸幺小"
    },
    {
        kanji: "血",
        radicals: "血皿"
    },
    {
        kanji: "訣",
        radicals: "言人大二ユ"
    },
    {
        kanji: "月",
        radicals: "月"
    },
    {
        kanji: "件",
        radicals: "化牛"
    },
    {
        kanji: "倹",
        radicals: "化口人个一"
    },
    {
        kanji: "倦",
        radicals: "化已大二并卩ハ"
    },
    {
        kanji: "健",
        radicals: "化廴聿"
    },
    {
        kanji: "兼",
        radicals: "｜ヨ一ハ并"
    },
    {
        kanji: "券",
        radicals: "一人大刀二并"
    },
    {
        kanji: "剣",
        radicals: "刈口人个"
    },
    {
        kanji: "喧",
        radicals: "一口日宀"
    },
    {
        kanji: "圏",
        radicals: "一人大二并囗已"
    },
    {
        kanji: "堅",
        radicals: "臣土又"
    },
    {
        kanji: "嫌",
        radicals: "｜ヨ女ハ并"
    },
    {
        kanji: "建",
        radicals: "廴聿"
    },
    {
        kanji: "憲",
        radicals: "心土買亠宀二"
    },
    {
        kanji: "懸",
        radicals: "ノ糸幺小心目"
    },
    {
        kanji: "拳",
        radicals: "一手并大二"
    },
    {
        kanji: "捲",
        radicals: "一并已扎大二"
    },
    {
        kanji: "検",
        radicals: "口人木个"
    },
    {
        kanji: "権",
        radicals: "矢木隹乞"
    },
    {
        kanji: "牽",
        radicals: "亠冖厶牛"
    },
    {
        kanji: "犬",
        radicals: "犬大丶"
    },
    {
        kanji: "献",
        radicals: "干犬十并冂"
    },
    {
        kanji: "研",
        radicals: "｜口石亅廾ノ二一"
    },
    {
        kanji: "硯",
        radicals: "見口石"
    },
    {
        kanji: "絹",
        radicals: "月口糸幺小"
    },
    {
        kanji: "県",
        radicals: "小目"
    },
    {
        kanji: "肩",
        radicals: "月戸一尸"
    },
    {
        kanji: "見",
        radicals: "見目儿"
    },
    {
        kanji: "謙",
        radicals: "｜ヨ言ハ并"
    },
    {
        kanji: "賢",
        radicals: "貝目ハ臣又"
    },
    {
        kanji: "軒",
        radicals: "干車"
    },
    {
        kanji: "遣",
        radicals: "｜一口込"
    },
    {
        kanji: "鍵",
        radicals: "金廴聿"
    },
    {
        kanji: "険",
        radicals: "口人个阡"
    },
    {
        kanji: "顕",
        radicals: "貝目ハ日頁"
    },
    {
        kanji: "験",
        radicals: "口人馬个杰"
    },
    {
        kanji: "鹸",
        radicals: "口十人个囗鹵"
    },
    {
        kanji: "元",
        radicals: "二儿元"
    },
    {
        kanji: "原",
        radicals: "小白厂"
    },
    {
        kanji: "厳",
        radicals: "耳尚厂攵乞"
    },
    {
        kanji: "幻",
        radicals: "幺"
    },
    {
        kanji: "弦",
        radicals: "弓玄亠幺"
    },
    {
        kanji: "減",
        radicals: "口汁亅戈"
    },
    {
        kanji: "源",
        radicals: "汁小白厂"
    },
    {
        kanji: "玄",
        radicals: "玄亠幺"
    },
    {
        kanji: "現",
        radicals: "王見"
    },
    {
        kanji: "絃",
        radicals: "玄糸幺小亠"
    },
    {
        kanji: "舷",
        radicals: "玄舟亠幺"
    },
    {
        kanji: "言",
        radicals: "言"
    },
    {
        kanji: "諺",
        radicals: "言并立亅亠彡"
    },
    {
        kanji: "限",
        radicals: "艮阡"
    },
    {
        kanji: "乎",
        radicals: "ノ一并亅"
    },
    {
        kanji: "個",
        radicals: "化口十囗"
    },
    {
        kanji: "古",
        radicals: "口十"
    },
    {
        kanji: "呼",
        radicals: "ノ口并亅"
    },
    {
        kanji: "固",
        radicals: "口十囗"
    },
    {
        kanji: "姑",
        radicals: "口十女"
    },
    {
        kanji: "孤",
        radicals: "瓜子"
    },
    {
        kanji: "己",
        radicals: "已"
    },
    {
        kanji: "庫",
        radicals: "車广"
    },
    {
        kanji: "弧",
        radicals: "瓜弓"
    },
    {
        kanji: "戸",
        radicals: "戸一尸"
    },
    {
        kanji: "故",
        radicals: "口十攵乞"
    },
    {
        kanji: "枯",
        radicals: "口十木"
    },
    {
        kanji: "湖",
        radicals: "月口十汁"
    },
    {
        kanji: "狐",
        radicals: "瓜犯"
    },
    {
        kanji: "糊",
        radicals: "月口十米"
    },
    {
        kanji: "袴",
        radicals: "初大二勹"
    },
    {
        kanji: "股",
        radicals: "月殳几又"
    },
    {
        kanji: "胡",
        radicals: "月口十"
    },
    {
        kanji: "菰",
        radicals: "瓜子艾"
    },
    {
        kanji: "虎",
        radicals: "卜儿匕厂虍"
    },
    {
        kanji: "誇",
        radicals: "言大二勹"
    },
    {
        kanji: "跨",
        radicals: "口足大二勹止"
    },
    {
        kanji: "鈷",
        radicals: "金口十"
    },
    {
        kanji: "雇",
        radicals: "戸隹一尸"
    },
    {
        kanji: "顧",
        radicals: "貝目ハ戸頁隹一尸"
    },
    {
        kanji: "鼓",
        radicals: "口士支豆并又十鼓"
    },
    {
        kanji: "五",
        radicals: "五"
    },
    {
        kanji: "互",
        radicals: "ヨ一彑"
    },
    {
        kanji: "伍",
        radicals: "化五"
    },
    {
        kanji: "午",
        radicals: "ノ干十乞"
    },
    {
        kanji: "呉",
        radicals: "口ハ"
    },
    {
        kanji: "吾",
        radicals: "口五"
    },
    {
        kanji: "娯",
        radicals: "口女ハ"
    },
    {
        kanji: "後",
        radicals: "夂幺彳"
    },
    {
        kanji: "御",
        radicals: "ノ止卩彳乞"
    },
    {
        kanji: "悟",
        radicals: "口忙五"
    },
    {
        kanji: "梧",
        radicals: "口木五"
    },
    {
        kanji: "檎",
        radicals: "木个亠冂厶禹"
    },
    {
        kanji: "瑚",
        radicals: "王月口十"
    },
    {
        kanji: "碁",
        radicals: "一口石ハ甘"
    },
    {
        kanji: "語",
        radicals: "言口五"
    },
    {
        kanji: "誤",
        radicals: "言口ハ"
    },
    {
        kanji: "護",
        radicals: "言又艾隹"
    },
    {
        kanji: "醐",
        radicals: "月口十酉"
    },
    {
        kanji: "乞",
        radicals: "ノ一乙人乞"
    },
    {
        kanji: "鯉",
        radicals: "魚田里杰"
    },
    {
        kanji: "交",
        radicals: "父亠"
    },
    {
        kanji: "佼",
        radicals: "化父亠"
    },
    {
        kanji: "侯",
        radicals: "化矢ユ乞"
    },
    {
        kanji: "候",
        radicals: "｜化矢ユ乞"
    },
    {
        kanji: "倖",
        radicals: "化十辛立亠"
    },
    {
        kanji: "光",
        radicals: "一尚儿"
    },
    {
        kanji: "公",
        radicals: "ハ厶"
    },
    {
        kanji: "功",
        radicals: "工力"
    },
    {
        kanji: "効",
        radicals: "父力亠"
    },
    {
        kanji: "勾",
        radicals: "勹厶"
    },
    {
        kanji: "厚",
        radicals: "子日厂"
    },
    {
        kanji: "口",
        radicals: "囗口"
    },
    {
        kanji: "向",
        radicals: "口冂"
    },
    {
        kanji: "后",
        radicals: "ノ一斤口亅厂"
    },
    {
        kanji: "喉",
        radicals: "化口矢乞"
    },
    {
        kanji: "坑",
        radicals: "土亠几"
    },
    {
        kanji: "垢",
        radicals: "ノ斤口土亅厂"
    },
    {
        kanji: "好",
        radicals: "子女"
    },
    {
        kanji: "孔",
        radicals: "乙子"
    },
    {
        kanji: "孝",
        radicals: "子老"
    },
    {
        kanji: "宏",
        radicals: "ノ一厶宀"
    },
    {
        kanji: "工",
        radicals: "工"
    },
    {
        kanji: "巧",
        radicals: "工一勹"
    },
    {
        kanji: "巷",
        radicals: "ハ已井"
    },
    {
        kanji: "幸",
        radicals: "十辛立亠"
    },
    {
        kanji: "広",
        radicals: "厶广"
    },
    {
        kanji: "庚",
        radicals: "人广ヨ"
    },
    {
        kanji: "康",
        radicals: "ヨ水广隶"
    },
    {
        kanji: "弘",
        radicals: "弓厶"
    },
    {
        kanji: "恒",
        radicals: "一日忙"
    },
    {
        kanji: "慌",
        radicals: "川忙艾亡"
    },
    {
        kanji: "抗",
        radicals: "亠几扎"
    },
    {
        kanji: "拘",
        radicals: "口勹扎"
    },
    {
        kanji: "控",
        radicals: "穴工儿宀扎"
    },
    {
        kanji: "攻",
        radicals: "工攵乞"
    },
    {
        kanji: "昂",
        radicals: "日卩"
    },
    {
        kanji: "晃",
        radicals: "一尚日儿"
    },
    {
        kanji: "更",
        radicals: "ノ一日田"
    },
    {
        kanji: "杭",
        radicals: "木亠几"
    },
    {
        kanji: "校",
        radicals: "父木亠"
    },
    {
        kanji: "梗",
        radicals: "ノ一日木田"
    },
    {
        kanji: "構",
        radicals: "木冂一十"
    },
    {
        kanji: "江",
        radicals: "工汁"
    },
    {
        kanji: "洪",
        radicals: "｜一汁二ハ"
    },
    {
        kanji: "浩",
        radicals: "ノ口汁土"
    },
    {
        kanji: "港",
        radicals: "汁ハ已井"
    },
    {
        kanji: "溝",
        radicals: "汁冂一十｜"
    },
    {
        kanji: "甲",
        radicals: "｜日田"
    },
    {
        kanji: "皇",
        radicals: "王白"
    },
    {
        kanji: "硬",
        radicals: "ノ一口石日田"
    },
    {
        kanji: "稿",
        radicals: "禾口高亠冂"
    },
    {
        kanji: "糠",
        radicals: "ヨ水米广隶"
    },
    {
        kanji: "紅",
        radicals: "工糸幺小"
    },
    {
        kanji: "紘",
        radicals: "ノ一糸幺小厶"
    },
    {
        kanji: "絞",
        radicals: "糸幺小父亠"
    },
    {
        kanji: "綱",
        radicals: "糸幺小并冂山一岡"
    },
    {
        kanji: "耕",
        radicals: "｜土ハ木亅耒井ノ"
    },
    {
        kanji: "考",
        radicals: "老勹"
    },
    {
        kanji: "肯",
        radicals: "月止"
    },
    {
        kanji: "肱",
        radicals: "ノ一月厶"
    },
    {
        kanji: "腔",
        radicals: "穴月工儿宀"
    },
    {
        kanji: "膏",
        radicals: "月口亠冖高"
    },
    {
        kanji: "航",
        radicals: "舟亠几"
    },
    {
        kanji: "荒",
        radicals: "川艾亡"
    },
    {
        kanji: "行",
        radicals: "行彳"
    },
    {
        kanji: "衡",
        radicals: "行大田彳勹"
    },
    {
        kanji: "講",
        radicals: "言冂一十"
    },
    {
        kanji: "貢",
        radicals: "貝目ハ工"
    },
    {
        kanji: "購",
        radicals: "｜一貝目ハ冂十"
    },
    {
        kanji: "郊",
        radicals: "父邦亠"
    },
    {
        kanji: "酵",
        radicals: "子酉老"
    },
    {
        kanji: "鉱",
        radicals: "金厶广"
    },
    {
        kanji: "砿",
        radicals: "口石厶广"
    },
    {
        kanji: "鋼",
        radicals: "金并冂山岡"
    },
    {
        kanji: "閤",
        radicals: "口門个一"
    },
    {
        kanji: "降",
        radicals: "夂阡十"
    },
    {
        kanji: "項",
        radicals: "貝目ハ工頁"
    },
    {
        kanji: "香",
        radicals: "禾香日"
    },
    {
        kanji: "高",
        radicals: "口高亠冂"
    },
    {
        kanji: "鴻",
        radicals: "工汁鳥杰"
    },
    {
        kanji: "剛",
        radicals: "刈并冂岡山"
    },
    {
        kanji: "劫",
        radicals: "土力厶"
    },
    {
        kanji: "号",
        radicals: "一口勹"
    },
    {
        kanji: "合",
        radicals: "口个一"
    },
    {
        kanji: "壕",
        radicals: "口土亠冖豕"
    },
    {
        kanji: "拷",
        radicals: "老扎"
    },
    {
        kanji: "濠",
        radicals: "口汁亠冖豕"
    },
    {
        kanji: "豪",
        radicals: "口亠冖豕"
    },
    {
        kanji: "轟",
        radicals: "車"
    },
    {
        kanji: "麹",
        radicals: "土麦米亠勹夂二"
    },
    {
        kanji: "克",
        radicals: "口十儿"
    },
    {
        kanji: "刻",
        radicals: "刈亠人ノ丶"
    },
    {
        kanji: "告",
        radicals: "ノ口土"
    },
    {
        kanji: "国",
        radicals: "王囗丶"
    },
    {
        kanji: "穀",
        radicals: "禾士冖殳几又"
    },
    {
        kanji: "酷",
        radicals: "ノ口土酉"
    },
    {
        kanji: "鵠",
        radicals: "ノ口鳥土杰"
    },
    {
        kanji: "黒",
        radicals: "黒里杰"
    },
    {
        kanji: "獄",
        radicals: "言犯犬"
    },
    {
        kanji: "漉",
        radicals: "鹿汁比广"
    },
    {
        kanji: "腰",
        radicals: "月女西"
    },
    {
        kanji: "甑",
        radicals: "瓦田日并"
    },
    {
        kanji: "忽",
        radicals: "勿心勹ノ"
    },
    {
        kanji: "惚",
        radicals: "心忙勿"
    },
    {
        kanji: "骨",
        radicals: "月冖冂骨"
    },
    {
        kanji: "狛",
        radicals: "白犯"
    },
    {
        kanji: "込",
        radicals: "込入"
    },
    {
        kanji: "此",
        radicals: "止匕"
    },
    {
        kanji: "頃",
        radicals: "貝目ハ頁匕"
    },
    {
        kanji: "今",
        radicals: "个一"
    },
    {
        kanji: "困",
        radicals: "木囗"
    },
    {
        kanji: "坤",
        radicals: "｜土日田"
    },
    {
        kanji: "墾",
        radicals: "艮爪土犯豸"
    },
    {
        kanji: "婚",
        radicals: "氏女日"
    },
    {
        kanji: "恨",
        radicals: "艮忙"
    },
    {
        kanji: "懇",
        radicals: "艮心爪犯豸"
    },
    {
        kanji: "昏",
        radicals: "氏日"
    },
    {
        kanji: "昆",
        radicals: "日比"
    },
    {
        kanji: "根",
        radicals: "艮木"
    },
    {
        kanji: "梱",
        radicals: "木囗"
    },
    {
        kanji: "混",
        radicals: "汁日比"
    },
    {
        kanji: "痕",
        radicals: "艮疔"
    },
    {
        kanji: "紺",
        radicals: "甘糸幺小"
    },
    {
        kanji: "艮",
        radicals: "艮"
    },
    {
        kanji: "魂",
        radicals: "鬼田二儿匕厶"
    },
    {
        kanji: "些",
        radicals: "止二匕"
    },
    {
        kanji: "佐",
        radicals: "ノ一化工"
    },
    {
        kanji: "叉",
        radicals: "又丶"
    },
    {
        kanji: "唆",
        radicals: "口儿厶夂"
    },
    {
        kanji: "嵯",
        radicals: "ノ王工山并羊"
    },
    {
        kanji: "左",
        radicals: "ノ一工"
    },
    {
        kanji: "差",
        radicals: "ノ王工并羊"
    },
    {
        kanji: "査",
        radicals: "一木目"
    },
    {
        kanji: "沙",
        radicals: "ノ汁小"
    },
    {
        kanji: "瑳",
        radicals: "ノ王工并羊"
    },
    {
        kanji: "砂",
        radicals: "ノ口小石"
    },
    {
        kanji: "詐",
        radicals: "｜ノ言"
    },
    {
        kanji: "鎖",
        radicals: "貝目ハ金尚"
    },
    {
        kanji: "裟",
        radicals: "ノ衣汁小亠"
    },
    {
        kanji: "坐",
        radicals: "｜土人"
    },
    {
        kanji: "座",
        radicals: "｜土人广"
    },
    {
        kanji: "挫",
        radicals: "｜土人扎"
    },
    {
        kanji: "債",
        radicals: "化貝目ハ土亠二"
    },
    {
        kanji: "催",
        radicals: "化山隹"
    },
    {
        kanji: "再",
        radicals: "｜一冂王"
    },
    {
        kanji: "最",
        radicals: "一耳日又"
    },
    {
        kanji: "哉",
        radicals: "口土戈"
    },
    {
        kanji: "塞",
        radicals: "一土ハ宀"
    },
    {
        kanji: "妻",
        radicals: "｜ヨ一女"
    },
    {
        kanji: "宰",
        radicals: "十辛立宀"
    },
    {
        kanji: "彩",
        radicals: "爪木彡"
    },
    {
        kanji: "才",
        radicals: "ノ一亅"
    },
    {
        kanji: "採",
        radicals: "爪木扎"
    },
    {
        kanji: "栽",
        radicals: "土木戈"
    },
    {
        kanji: "歳",
        radicals: "ノ止小戈"
    },
    {
        kanji: "済",
        radicals: "｜ノ汁文廾斉"
    },
    {
        kanji: "災",
        radicals: "火巛"
    },
    {
        kanji: "采",
        radicals: "爪木"
    },
    {
        kanji: "犀",
        radicals: "尸｜二十ノ一"
    },
    {
        kanji: "砕",
        radicals: "ノ口十石九"
    },
    {
        kanji: "砦",
        radicals: "口止石匕"
    },
    {
        kanji: "祭",
        radicals: "示二小个癶"
    },
    {
        kanji: "斎",
        radicals: "｜ノ文廾斉示二小"
    },
    {
        kanji: "細",
        radicals: "糸幺小田"
    },
    {
        kanji: "菜",
        radicals: "爪木艾"
    },
    {
        kanji: "裁",
        radicals: "土亠厶戈衣"
    },
    {
        kanji: "載",
        radicals: "車土戈"
    },
    {
        kanji: "際",
        radicals: "ノ示二小癶阡"
    },
    {
        kanji: "剤",
        radicals: "｜ノ刈文廾斉"
    },
    {
        kanji: "在",
        radicals: "｜ノ一土"
    },
    {
        kanji: "材",
        radicals: "ノ一木亅"
    },
    {
        kanji: "罪",
        radicals: "買非"
    },
    {
        kanji: "財",
        radicals: "ノ一貝目ハ亅"
    },
    {
        kanji: "冴",
        radicals: "牙冫"
    },
    {
        kanji: "坂",
        radicals: "土又厂"
    },
    {
        kanji: "阪",
        radicals: "又厂阡"
    },
    {
        kanji: "堺",
        radicals: "田土ハ儿"
    },
    {
        kanji: "榊",
        radicals: "｜日木礼田"
    },
    {
        kanji: "肴",
        radicals: "ノ一月丶"
    },
    {
        kanji: "咲",
        radicals: "口人大二并一"
    },
    {
        kanji: "崎",
        radicals: "口山大｜一"
    },
    {
        kanji: "埼",
        radicals: "口大土｜一"
    },
    {
        kanji: "碕",
        radicals: "口石大｜一"
    },
    {
        kanji: "鷺",
        radicals: "口足鳥夂杰止"
    },
    {
        kanji: "作",
        radicals: "｜ノ化一乞"
    },
    {
        kanji: "削",
        radicals: "刈月尚"
    },
    {
        kanji: "咋",
        radicals: "｜ノ口"
    },
    {
        kanji: "搾",
        radicals: "｜ノ穴儿宀扎"
    },
    {
        kanji: "昨",
        radicals: "｜ノ日"
    },
    {
        kanji: "朔",
        radicals: "月并屮"
    },
    {
        kanji: "柵",
        radicals: "｜一木亅冂冊廾"
    },
    {
        kanji: "窄",
        radicals: "｜ノ穴儿宀"
    },
    {
        kanji: "策",
        radicals: "｜巾竹ハ木亅冂乞"
    },
    {
        kanji: "索",
        radicals: "糸幺小十冖"
    },
    {
        kanji: "錯",
        radicals: "金日廾二"
    },
    {
        kanji: "桜",
        radicals: "女尚木"
    },
    {
        kanji: "鮭",
        radicals: "魚田土杰"
    },
    {
        kanji: "笹",
        radicals: "世竹乞"
    },
    {
        kanji: "匙",
        radicals: "日匕疋"
    },
    {
        kanji: "冊",
        radicals: "｜一亅冂廾冊"
    },
    {
        kanji: "刷",
        radicals: "刈巾尸"
    },
    {
        kanji: "察",
        radicals: "ノ示二小宀癶"
    },
    {
        kanji: "拶",
        radicals: "巛夕扎"
    },
    {
        kanji: "撮",
        radicals: "耳日又扎"
    },
    {
        kanji: "擦",
        radicals: "ノ示二小宀扎癶"
    },
    {
        kanji: "札",
        radicals: "乙木"
    },
    {
        kanji: "殺",
        radicals: "木殳ノ丶几又"
    },
    {
        kanji: "薩",
        radicals: "ノ生并立亠厂艾阡"
    },
    {
        kanji: "雑",
        radicals: "木隹九"
    },
    {
        kanji: "皐",
        radicals: "十白二"
    },
    {
        kanji: "鯖",
        radicals: "魚月青田土二亠杰"
    },
    {
        kanji: "捌",
        radicals: "刈口力扎勹"
    },
    {
        kanji: "錆",
        radicals: "金月青土二亠"
    },
    {
        kanji: "鮫",
        radicals: "魚田父亠杰"
    },
    {
        kanji: "皿",
        radicals: "皿"
    },
    {
        kanji: "晒",
        radicals: "西日"
    },
    {
        kanji: "三",
        radicals: "一二"
    },
    {
        kanji: "傘",
        radicals: "十人个"
    },
    {
        kanji: "参",
        radicals: "一厶彡"
    },
    {
        kanji: "山",
        radicals: "山"
    },
    {
        kanji: "惨",
        radicals: "一忙厶彡"
    },
    {
        kanji: "撒",
        radicals: "｜月夂扎攵廾二乞"
    },
    {
        kanji: "散",
        radicals: "月攵廾二乞"
    },
    {
        kanji: "桟",
        radicals: "木戈二"
    },
    {
        kanji: "燦",
        radicals: "火米又夕"
    },
    {
        kanji: "珊",
        radicals: "｜一王亅冂冊廾"
    },
    {
        kanji: "産",
        radicals: "ノ生并立亠厂"
    },
    {
        kanji: "算",
        radicals: "竹目廾乞"
    },
    {
        kanji: "纂",
        radicals: "糸幺小竹目乞"
    },
    {
        kanji: "蚕",
        radicals: "一大虫二"
    },
    {
        kanji: "讃",
        radicals: "貝目ハ言人大二亠"
    },
    {
        kanji: "賛",
        radicals: "貝目ハ人大二亠"
    },
    {
        kanji: "酸",
        radicals: "酉儿厶夂"
    },
    {
        kanji: "餐",
        radicals: "食又夕"
    },
    {
        kanji: "斬",
        radicals: "斤車"
    },
    {
        kanji: "暫",
        radicals: "斤車日"
    },
    {
        kanji: "残",
        radicals: "歹戈二"
    },
    {
        kanji: "仕",
        radicals: "化士"
    },
    {
        kanji: "仔",
        radicals: "化子"
    },
    {
        kanji: "伺",
        radicals: "化口亅一"
    },
    {
        kanji: "使",
        radicals: "ノ一化口"
    },
    {
        kanji: "刺",
        radicals: "刈巾ハ木亅冂"
    },
    {
        kanji: "司",
        radicals: "一口亅"
    },
    {
        kanji: "史",
        radicals: "ノ口"
    },
    {
        kanji: "嗣",
        radicals: "｜一口亅冂"
    },
    {
        kanji: "四",
        radicals: "儿囗"
    },
    {
        kanji: "士",
        radicals: "士"
    },
    {
        kanji: "始",
        radicals: "口女厶"
    },
    {
        kanji: "姉",
        radicals: "巾女亠"
    },
    {
        kanji: "姿",
        radicals: "欠女冫"
    },
    {
        kanji: "子",
        radicals: "子"
    },
    {
        kanji: "屍",
        radicals: "一夕匕尸歹"
    },
    {
        kanji: "市",
        radicals: "巾亠"
    },
    {
        kanji: "師",
        radicals: "｜一巾口"
    },
    {
        kanji: "志",
        radicals: "士心"
    },
    {
        kanji: "思",
        radicals: "心田"
    },
    {
        kanji: "指",
        radicals: "日匕扎"
    },
    {
        kanji: "支",
        radicals: "支十又"
    },
    {
        kanji: "孜",
        radicals: "子攵乞"
    },
    {
        kanji: "斯",
        radicals: "甘斤ハ"
    },
    {
        kanji: "施",
        radicals: "ノ方一也乞"
    },
    {
        kanji: "旨",
        radicals: "日匕"
    },
    {
        kanji: "枝",
        radicals: "支木十又"
    },
    {
        kanji: "止",
        radicals: "止"
    },
    {
        kanji: "死",
        radicals: "一夕匕歹"
    },
    {
        kanji: "氏",
        radicals: "氏"
    },
    {
        kanji: "獅",
        radicals: "｜巾口犯"
    },
    {
        kanji: "祉",
        radicals: "止礼"
    },
    {
        kanji: "私",
        radicals: "禾厶"
    },
    {
        kanji: "糸",
        radicals: "糸幺小"
    },
    {
        kanji: "紙",
        radicals: "氏糸幺小"
    },
    {
        kanji: "紫",
        radicals: "止糸幺小匕"
    },
    {
        kanji: "肢",
        radicals: "月支十又"
    },
    {
        kanji: "脂",
        radicals: "月日匕"
    },
    {
        kanji: "至",
        radicals: "一至土厶"
    },
    {
        kanji: "視",
        radicals: "見礼"
    },
    {
        kanji: "詞",
        radicals: "言口亅一"
    },
    {
        kanji: "詩",
        radicals: "言寸土"
    },
    {
        kanji: "試",
        radicals: "言工弋"
    },
    {
        kanji: "誌",
        radicals: "言士心"
    },
    {
        kanji: "諮",
        radicals: "欠言口冫"
    },
    {
        kanji: "資",
        radicals: "貝目ハ欠冫"
    },
    {
        kanji: "賜",
        radicals: "勿貝目ハ日"
    },
    {
        kanji: "雌",
        radicals: "止匕隹"
    },
    {
        kanji: "飼",
        radicals: "口艮亅个食"
    },
    {
        kanji: "歯",
        radicals: "止歯米凵"
    },
    {
        kanji: "事",
        radicals: "一口亅ヨ"
    },
    {
        kanji: "似",
        radicals: "化人丶"
    },
    {
        kanji: "侍",
        radicals: "化寸土"
    },
    {
        kanji: "児",
        radicals: "｜日儿"
    },
    {
        kanji: "字",
        radicals: "子宀"
    },
    {
        kanji: "寺",
        radicals: "寸土"
    },
    {
        kanji: "慈",
        radicals: "一心并幺"
    },
    {
        kanji: "持",
        radicals: "寸土扎"
    },
    {
        kanji: "時",
        radicals: "寸土日"
    },
    {
        kanji: "次",
        radicals: "欠冫"
    },
    {
        kanji: "滋",
        radicals: "一汁并幺"
    },
    {
        kanji: "治",
        radicals: "口汁厶"
    },
    {
        kanji: "爾",
        radicals: "｜一ハ冂爻"
    },
    {
        kanji: "璽",
        radicals: "｜一王ハ冂爻"
    },
    {
        kanji: "痔",
        radicals: "寸土疔"
    },
    {
        kanji: "磁",
        radicals: "一口石并幺"
    },
    {
        kanji: "示",
        radicals: "示二小"
    },
    {
        kanji: "而",
        radicals: "而"
    },
    {
        kanji: "耳",
        radicals: "耳"
    },
    {
        kanji: "自",
        radicals: "自目"
    },
    {
        kanji: "蒔",
        radicals: "寸土日艾"
    },
    {
        kanji: "辞",
        radicals: "口十辛舌立"
    },
    {
        kanji: "汐",
        radicals: "汁夕"
    },
    {
        kanji: "鹿",
        radicals: "鹿比广"
    },
    {
        kanji: "式",
        radicals: "工弋"
    },
    {
        kanji: "識",
        radicals: "音言日立戈"
    },
    {
        kanji: "鴫",
        radicals: "鳥田杰"
    },
    {
        kanji: "竺",
        radicals: "竹二乞"
    },
    {
        kanji: "軸",
        radicals: "｜車日田"
    },
    {
        kanji: "宍",
        radicals: "ハ亠宀"
    },
    {
        kanji: "雫",
        radicals: "雨丶一｜"
    },
    {
        kanji: "七",
        radicals: "乙匕ノ"
    },
    {
        kanji: "叱",
        radicals: "口匕"
    },
    {
        kanji: "執",
        radicals: "ノ九十辛土立丶亠"
    },
    {
        kanji: "失",
        radicals: "ノ人二大"
    },
    {
        kanji: "嫉",
        radicals: "女矢疔乞"
    },
    {
        kanji: "室",
        radicals: "至土厶宀"
    },
    {
        kanji: "悉",
        radicals: "ノ心釆米"
    },
    {
        kanji: "湿",
        radicals: "｜汁日"
    },
    {
        kanji: "漆",
        radicals: "汁水木个"
    },
    {
        kanji: "疾",
        radicals: "矢疔乞"
    },
    {
        kanji: "質",
        radicals: "貝目ハ斤"
    },
    {
        kanji: "実",
        radicals: "士大宀"
    },
    {
        kanji: "蔀",
        radicals: "口邦立艾"
    },
    {
        kanji: "篠",
        radicals: "｜化竹木攵乞"
    },
    {
        kanji: "偲",
        radicals: "化心田"
    },
    {
        kanji: "柴",
        radicals: "止木匕"
    },
    {
        kanji: "芝",
        radicals: "亠艾"
    },
    {
        kanji: "屡",
        radicals: "女米尸"
    },
    {
        kanji: "蕊",
        radicals: "心艾"
    },
    {
        kanji: "縞",
        radicals: "口高糸幺小亠冂"
    },
    {
        kanji: "舎",
        radicals: "口土个"
    },
    {
        kanji: "写",
        radicals: "一冖勹"
    },
    {
        kanji: "射",
        radicals: "身寸"
    },
    {
        kanji: "捨",
        radicals: "口土个扎"
    },
    {
        kanji: "赦",
        radicals: "赤土攵乞"
    },
    {
        kanji: "斜",
        radicals: "禾斗个一"
    },
    {
        kanji: "煮",
        radicals: "日老杰"
    },
    {
        kanji: "社",
        radicals: "土礼"
    },
    {
        kanji: "紗",
        radicals: "ノ糸幺小"
    },
    {
        kanji: "者",
        radicals: "日老"
    },
    {
        kanji: "謝",
        radicals: "言身寸"
    },
    {
        kanji: "車",
        radicals: "車"
    },
    {
        kanji: "遮",
        radicals: "一込广杰"
    },
    {
        kanji: "蛇",
        radicals: "虫匕宀"
    },
    {
        kanji: "邪",
        radicals: "牙邦"
    },
    {
        kanji: "借",
        radicals: "化日廾二"
    },
    {
        kanji: "勺",
        radicals: "丶勹"
    },
    {
        kanji: "尺",
        radicals: "尸丶"
    },
    {
        kanji: "杓",
        radicals: "木丶勹"
    },
    {
        kanji: "灼",
        radicals: "火丶勹"
    },
    {
        kanji: "爵",
        radicals: "艮寸爪買"
    },
    {
        kanji: "酌",
        radicals: "酉丶勹"
    },
    {
        kanji: "釈",
        radicals: "釆米尸丶"
    },
    {
        kanji: "錫",
        radicals: "金日勿"
    },
    {
        kanji: "若",
        radicals: "ノ一口艾"
    },
    {
        kanji: "寂",
        radicals: "小卜又宀"
    },
    {
        kanji: "弱",
        radicals: "弓冫"
    },
    {
        kanji: "惹",
        radicals: "ノ一口心艾"
    },
    {
        kanji: "主",
        radicals: "王丶"
    },
    {
        kanji: "取",
        radicals: "耳又"
    },
    {
        kanji: "守",
        radicals: "寸宀"
    },
    {
        kanji: "手",
        radicals: "手"
    },
    {
        kanji: "朱",
        radicals: "｜ノ牛二ハ木"
    },
    {
        kanji: "殊",
        radicals: "｜ノ牛二ハ木歹"
    },
    {
        kanji: "狩",
        radicals: "寸犯宀"
    },
    {
        kanji: "珠",
        radicals: "｜ノ王牛二ハ木"
    },
    {
        kanji: "種",
        radicals: "｜禾日里ノ"
    },
    {
        kanji: "腫",
        radicals: "｜月日里ノ"
    },
    {
        kanji: "趣",
        radicals: "耳走土又"
    },
    {
        kanji: "酒",
        radicals: "汁酉"
    },
    {
        kanji: "首",
        radicals: "自首并目"
    },
    {
        kanji: "儒",
        radicals: "雨化而"
    },
    {
        kanji: "受",
        radicals: "爪又冖"
    },
    {
        kanji: "呪",
        radicals: "口儿"
    },
    {
        kanji: "寿",
        radicals: "ノ一寸二"
    },
    {
        kanji: "授",
        radicals: "爪又冖扎"
    },
    {
        kanji: "樹",
        radicals: "口寸土豆并木"
    },
    {
        kanji: "綬",
        radicals: "糸幺小爪又冖"
    },
    {
        kanji: "需",
        radicals: "雨而"
    },
    {
        kanji: "囚",
        radicals: "人囗"
    },
    {
        kanji: "収",
        radicals: "｜又"
    },
    {
        kanji: "周",
        radicals: "口土冂"
    },
    {
        kanji: "宗",
        radicals: "示二小宀"
    },
    {
        kanji: "就",
        radicals: "口小丶亠尤尢"
    },
    {
        kanji: "州",
        radicals: "｜川丶"
    },
    {
        kanji: "修",
        radicals: "｜化彡攵乞"
    },
    {
        kanji: "愁",
        radicals: "火禾心"
    },
    {
        kanji: "拾",
        radicals: "口个扎一"
    },
    {
        kanji: "洲",
        radicals: "｜汁川丶"
    },
    {
        kanji: "秀",
        radicals: "乃禾ノ"
    },
    {
        kanji: "秋",
        radicals: "火禾"
    },
    {
        kanji: "終",
        radicals: "糸幺小夂"
    },
    {
        kanji: "繍",
        radicals: "｜ノヨ糸幺小水隶"
    },
    {
        kanji: "習",
        radicals: "羽白冫"
    },
    {
        kanji: "臭",
        radicals: "自大目"
    },
    {
        kanji: "舟",
        radicals: "舟"
    },
    {
        kanji: "蒐",
        radicals: "鬼田儿匕艾厶"
    },
    {
        kanji: "衆",
        radicals: "血皿糸"
    },
    {
        kanji: "襲",
        radicals: "衣月立亠"
    },
    {
        kanji: "讐",
        radicals: "言隹"
    },
    {
        kanji: "蹴",
        radicals: "ノ乙口小足丶亠尤尢止"
    },
    {
        kanji: "輯",
        radicals: "口耳車"
    },
    {
        kanji: "週",
        radicals: "口込土冂"
    },
    {
        kanji: "酋",
        radicals: "酉并"
    },
    {
        kanji: "酬",
        radicals: "｜川酉丶"
    },
    {
        kanji: "集",
        radicals: "木隹"
    },
    {
        kanji: "醜",
        radicals: "鬼田酉儿匕厶"
    },
    {
        kanji: "什",
        radicals: "化十"
    },
    {
        kanji: "住",
        radicals: "王化丶"
    },
    {
        kanji: "充",
        radicals: "亠儿厶"
    },
    {
        kanji: "十",
        radicals: "十"
    },
    {
        kanji: "従",
        radicals: "并疋彳"
    },
    {
        kanji: "戎",
        radicals: "戈"
    },
    {
        kanji: "柔",
        radicals: "矛木マ"
    },
    {
        kanji: "汁",
        radicals: "十汁"
    },
    {
        kanji: "渋",
        radicals: "止汁冫"
    },
    {
        kanji: "獣",
        radicals: "犬口尚田"
    },
    {
        kanji: "縦",
        radicals: "糸幺小并疋彳"
    },
    {
        kanji: "重",
        radicals: "｜ノ一日里"
    },
    {
        kanji: "銃",
        radicals: "金亠儿厶"
    },
    {
        kanji: "叔",
        radicals: "小卜又"
    },
    {
        kanji: "夙",
        radicals: "几歹"
    },
    {
        kanji: "宿",
        radicals: "化白宀"
    },
    {
        kanji: "淑",
        radicals: "汁小卜又"
    },
    {
        kanji: "祝",
        radicals: "口礼儿"
    },
    {
        kanji: "縮",
        radicals: "化糸幺小白宀"
    },
    {
        kanji: "粛",
        radicals: "｜ノヨ米隶"
    },
    {
        kanji: "塾",
        radicals: "丶九口子土亠"
    },
    {
        kanji: "熟",
        radicals: "丶九口子亠杰"
    },
    {
        kanji: "出",
        radicals: "｜山凵"
    },
    {
        kanji: "術",
        radicals: "行十丶彳木"
    },
    {
        kanji: "述",
        radicals: "込十丶木"
    },
    {
        kanji: "俊",
        radicals: "化儿厶夂"
    },
    {
        kanji: "峻",
        radicals: "山儿厶夂"
    },
    {
        kanji: "春",
        radicals: "一二日人大"
    },
    {
        kanji: "瞬",
        radicals: "牛舛爪目夕冖"
    },
    {
        kanji: "竣",
        radicals: "立儿厶夂"
    },
    {
        kanji: "舜",
        radicals: "牛舛爪夕冖"
    },
    {
        kanji: "駿",
        radicals: "馬儿厶夂杰"
    },
    {
        kanji: "准",
        radicals: "冫隹"
    },
    {
        kanji: "循",
        radicals: "斤十目厂彳"
    },
    {
        kanji: "旬",
        radicals: "日勹"
    },
    {
        kanji: "楯",
        radicals: "斤十木目厂"
    },
    {
        kanji: "殉",
        radicals: "日勹歹"
    },
    {
        kanji: "淳",
        radicals: "口子汁亠"
    },
    {
        kanji: "準",
        radicals: "十汁隹"
    },
    {
        kanji: "潤",
        radicals: "王汁門"
    },
    {
        kanji: "盾",
        radicals: "斤十目厂"
    },
    {
        kanji: "純",
        radicals: "糸幺小屯"
    },
    {
        kanji: "巡",
        radicals: "込巛"
    },
    {
        kanji: "遵",
        radicals: "込寸酉并"
    },
    {
        kanji: "醇",
        radicals: "口子酉亠"
    },
    {
        kanji: "順",
        radicals: "貝目ハ川頁"
    },
    {
        kanji: "処",
        radicals: "几夂攵"
    },
    {
        kanji: "初",
        radicals: "初刀"
    },
    {
        kanji: "所",
        radicals: "斤戸一尸"
    },
    {
        kanji: "暑",
        radicals: "日老"
    },
    {
        kanji: "曙",
        radicals: "日買老"
    },
    {
        kanji: "渚",
        radicals: "汁日老"
    },
    {
        kanji: "庶",
        radicals: "广杰"
    },
    {
        kanji: "緒",
        radicals: "糸幺小日老"
    },
    {
        kanji: "署",
        radicals: "日買老"
    },
    {
        kanji: "書",
        radicals: "日聿"
    },
    {
        kanji: "薯",
        radicals: "日買老艾"
    },
    {
        kanji: "藷",
        radicals: "言日老艾"
    },
    {
        kanji: "諸",
        radicals: "言日老"
    },
    {
        kanji: "助",
        radicals: "目力"
    },
    {
        kanji: "叙",
        radicals: "禾又个一"
    },
    {
        kanji: "女",
        radicals: "女"
    },
    {
        kanji: "序",
        radicals: "子广亅マ一"
    },
    {
        kanji: "徐",
        radicals: "禾个彳一"
    },
    {
        kanji: "恕",
        radicals: "口女心"
    },
    {
        kanji: "鋤",
        radicals: "金目力"
    },
    {
        kanji: "除",
        radicals: "示个阡一"
    },
    {
        kanji: "傷",
        radicals: "ノ化日勿一人勹乞"
    },
    {
        kanji: "償",
        radicals: "化貝目ハ口尚冖"
    },
    {
        kanji: "勝",
        radicals: "月人大二并力"
    },
    {
        kanji: "匠",
        radicals: "斤匚"
    },
    {
        kanji: "升",
        radicals: "ノ廾十"
    },
    {
        kanji: "召",
        radicals: "口刀"
    },
    {
        kanji: "哨",
        radicals: "月口尚"
    },
    {
        kanji: "商",
        radicals: "口并立亠儿冂"
    },
    {
        kanji: "唱",
        radicals: "口日"
    },
    {
        kanji: "嘗",
        radicals: "口尚日冖匕"
    },
    {
        kanji: "奨",
        radicals: "寸大爪爿"
    },
    {
        kanji: "妾",
        radicals: "女立"
    },
    {
        kanji: "娼",
        radicals: "女日"
    },
    {
        kanji: "宵",
        radicals: "月尚宀"
    },
    {
        kanji: "将",
        radicals: "寸爪爿"
    },
    {
        kanji: "小",
        radicals: "小"
    },
    {
        kanji: "少",
        radicals: "ノ小"
    },
    {
        kanji: "尚",
        radicals: "口尚冂"
    },
    {
        kanji: "庄",
        radicals: "土广"
    },
    {
        kanji: "床",
        radicals: "木广"
    },
    {
        kanji: "廠",
        radicals: "口尚冂广攵乞"
    },
    {
        kanji: "彰",
        radicals: "音十日立彡"
    },
    {
        kanji: "承",
        radicals: "ノ二亅手"
    },
    {
        kanji: "抄",
        radicals: "ノ小扎"
    },
    {
        kanji: "招",
        radicals: "口刀扎"
    },
    {
        kanji: "掌",
        radicals: "口手尚冖"
    },
    {
        kanji: "捷",
        radicals: "疋扎ヨ"
    },
    {
        kanji: "昇",
        radicals: "ノ日廾十"
    },
    {
        kanji: "昌",
        radicals: "日"
    },
    {
        kanji: "昭",
        radicals: "口刀日"
    },
    {
        kanji: "晶",
        radicals: "日"
    },
    {
        kanji: "松",
        radicals: "ハ木厶"
    },
    {
        kanji: "梢",
        radicals: "月尚木"
    },
    {
        kanji: "樟",
        radicals: "音十日木立"
    },
    {
        kanji: "樵",
        radicals: "木杰隹"
    },
    {
        kanji: "沼",
        radicals: "口汁刀"
    },
    {
        kanji: "消",
        radicals: "月汁尚"
    },
    {
        kanji: "渉",
        radicals: "ノ止汁小"
    },
    {
        kanji: "湘",
        radicals: "汁木目"
    },
    {
        kanji: "焼",
        radicals: "火十儿"
    },
    {
        kanji: "焦",
        radicals: "杰隹"
    },
    {
        kanji: "照",
        radicals: "口刀日杰"
    },
    {
        kanji: "症",
        radicals: "一止疔"
    },
    {
        kanji: "省",
        radicals: "ノ小目"
    },
    {
        kanji: "硝",
        radicals: "月口尚石"
    },
    {
        kanji: "礁",
        radicals: "口石杰隹"
    },
    {
        kanji: "祥",
        radicals: "王并羊礼"
    },
    {
        kanji: "称",
        radicals: "ノ禾小一乞"
    },
    {
        kanji: "章",
        radicals: "音十日立"
    },
    {
        kanji: "笑",
        radicals: "禾竹大乞"
    },
    {
        kanji: "粧",
        radicals: "土米广"
    },
    {
        kanji: "紹",
        radicals: "口糸幺小刀"
    },
    {
        kanji: "肖",
        radicals: "月尚"
    },
    {
        kanji: "菖",
        radicals: "日艾"
    },
    {
        kanji: "蒋",
        radicals: "寸爪爿艾"
    },
    {
        kanji: "蕉",
        radicals: "杰艾隹"
    },
    {
        kanji: "衝",
        radicals: "｜行日彳里ノ"
    },
    {
        kanji: "裳",
        radicals: "衣口尚冖亠"
    },
    {
        kanji: "訟",
        radicals: "言ハ厶"
    },
    {
        kanji: "証",
        radicals: "一言止"
    },
    {
        kanji: "詔",
        radicals: "言口刀"
    },
    {
        kanji: "詳",
        radicals: "王言并羊"
    },
    {
        kanji: "象",
        radicals: "勹豕口一"
    },
    {
        kanji: "賞",
        radicals: "貝目ハ口尚冖"
    },
    {
        kanji: "醤",
        radicals: "寸爪酉爿"
    },
    {
        kanji: "鉦",
        radicals: "一金止"
    },
    {
        kanji: "鍾",
        radicals: "｜金日里ノ"
    },
    {
        kanji: "鐘",
        radicals: "金里立"
    },
    {
        kanji: "障",
        radicals: "音十日立阡"
    },
    {
        kanji: "鞘",
        radicals: "革月尚"
    },
    {
        kanji: "上",
        radicals: "一卜"
    },
    {
        kanji: "丈",
        radicals: "ノ一丶"
    },
    {
        kanji: "丞",
        radicals: "ノ一亅"
    },
    {
        kanji: "乗",
        radicals: "｜ノ一禾ハ"
    },
    {
        kanji: "冗",
        radicals: "冖几"
    },
    {
        kanji: "剰",
        radicals: "｜ノ一刈"
    },
    {
        kanji: "城",
        radicals: "ノ土戈"
    },
    {
        kanji: "場",
        radicals: "土日一勿"
    },
    {
        kanji: "壌",
        radicals: "衣土ハ亠"
    },
    {
        kanji: "嬢",
        radicals: "衣女ハ亠"
    },
    {
        kanji: "常",
        radicals: "巾口尚冖"
    },
    {
        kanji: "情",
        radicals: "月青土二忙亠"
    },
    {
        kanji: "擾",
        radicals: "一心白冖夂扎自"
    },
    {
        kanji: "条",
        radicals: "木夂攵"
    },
    {
        kanji: "杖",
        radicals: "ノ一木"
    },
    {
        kanji: "浄",
        radicals: "汁亅勹ヨ"
    },
    {
        kanji: "状",
        radicals: "犬爿"
    },
    {
        kanji: "畳",
        radicals: "一田冖"
    },
    {
        kanji: "穣",
        radicals: "衣禾ハ亠"
    },
    {
        kanji: "蒸",
        radicals: "ノ一亅杰艾"
    },
    {
        kanji: "譲",
        radicals: "衣言ハ亠"
    },
    {
        kanji: "醸",
        radicals: "衣酉ハ亠"
    },
    {
        kanji: "錠",
        radicals: "金疋宀"
    },
    {
        kanji: "嘱",
        radicals: "口尸禹"
    },
    {
        kanji: "埴",
        radicals: "十土目"
    },
    {
        kanji: "飾",
        radicals: "ノ巾食一人乞"
    },
    {
        kanji: "拭",
        radicals: "工弋扎"
    },
    {
        kanji: "植",
        radicals: "十木目"
    },
    {
        kanji: "殖",
        radicals: "十目歹"
    },
    {
        kanji: "燭",
        radicals: "火虫買勹"
    },
    {
        kanji: "織",
        radicals: "音糸幺小日立戈"
    },
    {
        kanji: "職",
        radicals: "音耳日立戈"
    },
    {
        kanji: "色",
        radicals: "色巴勹"
    },
    {
        kanji: "触",
        radicals: "角虫"
    },
    {
        kanji: "食",
        radicals: "食"
    },
    {
        kanji: "蝕",
        radicals: "食虫"
    },
    {
        kanji: "辱",
        radicals: "衣寸辰厂"
    },
    {
        kanji: "尻",
        radicals: "九尸"
    },
    {
        kanji: "伸",
        radicals: "｜化日田"
    },
    {
        kanji: "信",
        radicals: "化言"
    },
    {
        kanji: "侵",
        radicals: "ヨ化又冖"
    },
    {
        kanji: "唇",
        radicals: "衣口辰厂"
    },
    {
        kanji: "娠",
        radicals: "衣女辰厂"
    },
    {
        kanji: "寝",
        radicals: "ヨ又冖宀爿"
    },
    {
        kanji: "審",
        radicals: "田釆米宀"
    },
    {
        kanji: "心",
        radicals: "心"
    },
    {
        kanji: "慎",
        radicals: "一十ハ忙目"
    },
    {
        kanji: "振",
        radicals: "衣辰厂扎"
    },
    {
        kanji: "新",
        radicals: "斤辛并木立亠"
    },
    {
        kanji: "晋",
        radicals: "一日"
    },
    {
        kanji: "森",
        radicals: "木"
    },
    {
        kanji: "榛",
        radicals: "一禾人二木"
    },
    {
        kanji: "浸",
        radicals: "ヨ汁又冖"
    },
    {
        kanji: "深",
        radicals: "汁木儿冖"
    },
    {
        kanji: "申",
        radicals: "｜日田"
    },
    {
        kanji: "疹",
        radicals: "个彡疔"
    },
    {
        kanji: "真",
        radicals: "一十ハ目"
    },
    {
        kanji: "神",
        radicals: "｜日礼田"
    },
    {
        kanji: "秦",
        radicals: "一禾二人大"
    },
    {
        kanji: "紳",
        radicals: "｜糸幺小日田"
    },
    {
        kanji: "臣",
        radicals: "臣匚"
    },
    {
        kanji: "芯",
        radicals: "心艾"
    },
    {
        kanji: "薪",
        radicals: "斤辛并木立艾亠"
    },
    {
        kanji: "親",
        radicals: "見辛并木立亠"
    },
    {
        kanji: "診",
        radicals: "言个彡"
    },
    {
        kanji: "身",
        radicals: "身"
    },
    {
        kanji: "辛",
        radicals: "十辛立"
    },
    {
        kanji: "進",
        radicals: "込隹"
    },
    {
        kanji: "針",
        radicals: "金十"
    },
    {
        kanji: "震",
        radicals: "衣雨辰厂"
    },
    {
        kanji: "人",
        radicals: "人"
    },
    {
        kanji: "仁",
        radicals: "化二"
    },
    {
        kanji: "刃",
        radicals: "刀丶"
    },
    {
        kanji: "塵",
        radicals: "鹿土比广"
    },
    {
        kanji: "壬",
        radicals: "ノ士"
    },
    {
        kanji: "尋",
        radicals: "ヨ口工寸"
    },
    {
        kanji: "甚",
        radicals: "一甘儿"
    },
    {
        kanji: "尽",
        radicals: "尸丶"
    },
    {
        kanji: "腎",
        radicals: "月臣又"
    },
    {
        kanji: "訊",
        radicals: "ノ言几"
    },
    {
        kanji: "迅",
        radicals: "込十乙"
    },
    {
        kanji: "陣",
        radicals: "車阡"
    },
    {
        kanji: "靭",
        radicals: "革刀丶"
    },
    {
        kanji: "笥",
        radicals: "一口竹亅乞"
    },
    {
        kanji: "諏",
        radicals: "言耳又"
    },
    {
        kanji: "須",
        radicals: "貝目ハ頁彡"
    },
    {
        kanji: "酢",
        radicals: "｜ノ酉"
    },
    {
        kanji: "図",
        radicals: "斗囗"
    },
    {
        kanji: "厨",
        radicals: "口寸豆并厂"
    },
    {
        kanji: "逗",
        radicals: "口込豆并"
    },
    {
        kanji: "吹",
        radicals: "欠口"
    },
    {
        kanji: "垂",
        radicals: "｜ノ一"
    },
    {
        kanji: "帥",
        radicals: "｜巾口"
    },
    {
        kanji: "推",
        radicals: "扎隹"
    },
    {
        kanji: "水",
        radicals: "水"
    },
    {
        kanji: "炊",
        radicals: "火欠"
    },
    {
        kanji: "睡",
        radicals: "｜ノ一目"
    },
    {
        kanji: "粋",
        radicals: "九十米"
    },
    {
        kanji: "翠",
        radicals: "羽十人亠冫"
    },
    {
        kanji: "衰",
        radicals: "衣一亠"
    },
    {
        kanji: "遂",
        radicals: "込并豕"
    },
    {
        kanji: "酔",
        radicals: "九十酉"
    },
    {
        kanji: "錐",
        radicals: "金隹"
    },
    {
        kanji: "錘",
        radicals: "｜ノ一金"
    },
    {
        kanji: "随",
        radicals: "ノ一月込阡"
    },
    {
        kanji: "瑞",
        radicals: "王山而"
    },
    {
        kanji: "髄",
        radicals: "ノ一月込冖骨"
    },
    {
        kanji: "崇",
        radicals: "山示二小宀"
    },
    {
        kanji: "嵩",
        radicals: "口高山亠冂"
    },
    {
        kanji: "数",
        radicals: "女米攵夂乞"
    },
    {
        kanji: "枢",
        radicals: "木匚"
    },
    {
        kanji: "趨",
        radicals: "走土勹屮"
    },
    {
        kanji: "雛",
        radicals: "勹屮隹"
    },
    {
        kanji: "据",
        radicals: "口十尸扎"
    },
    {
        kanji: "杉",
        radicals: "木彡"
    },
    {
        kanji: "椙",
        radicals: "日木"
    },
    {
        kanji: "菅",
        radicals: "｜口宀艾"
    },
    {
        kanji: "頗",
        radicals: "貝目ハ皮頁又"
    },
    {
        kanji: "雀",
        radicals: "ノ小隹"
    },
    {
        kanji: "裾",
        radicals: "口十初尸"
    },
    {
        kanji: "澄",
        radicals: "口汁豆并癶"
    },
    {
        kanji: "摺",
        radicals: "羽白冫扎"
    },
    {
        kanji: "寸",
        radicals: "寸"
    },
    {
        kanji: "世",
        radicals: "｜一世"
    },
    {
        kanji: "瀬",
        radicals: "｜貝目ハ汁頁木口"
    },
    {
        kanji: "畝",
        radicals: "田亠久"
    },
    {
        kanji: "是",
        radicals: "日疋"
    },
    {
        kanji: "凄",
        radicals: "女冫ヨ十"
    },
    {
        kanji: "制",
        radicals: "ノ刈牛巾二"
    },
    {
        kanji: "勢",
        radicals: "土力丶儿九"
    },
    {
        kanji: "姓",
        radicals: "女生"
    },
    {
        kanji: "征",
        radicals: "一止彳"
    },
    {
        kanji: "性",
        radicals: "生忙"
    },
    {
        kanji: "成",
        radicals: "ノ戈"
    },
    {
        kanji: "政",
        radicals: "一止攵乞"
    },
    {
        kanji: "整",
        radicals: "｜一口止木攵乞"
    },
    {
        kanji: "星",
        radicals: "生日"
    },
    {
        kanji: "晴",
        radicals: "月青土二日亠"
    },
    {
        kanji: "棲",
        radicals: "女木ヨ十"
    },
    {
        kanji: "栖",
        radicals: "西木"
    },
    {
        kanji: "正",
        radicals: "一止"
    },
    {
        kanji: "清",
        radicals: "月汁青土二亠"
    },
    {
        kanji: "牲",
        radicals: "牛生"
    },
    {
        kanji: "生",
        radicals: "生"
    },
    {
        kanji: "盛",
        radicals: "ノ皿戈"
    },
    {
        kanji: "精",
        radicals: "月青土二米亠"
    },
    {
        kanji: "聖",
        radicals: "王口耳"
    },
    {
        kanji: "声",
        radicals: "士尸"
    },
    {
        kanji: "製",
        radicals: "衣刈牛巾亠"
    },
    {
        kanji: "西",
        radicals: "西"
    },
    {
        kanji: "誠",
        radicals: "ノ言戈"
    },
    {
        kanji: "誓",
        radicals: "斤言扎"
    },
    {
        kanji: "請",
        radicals: "月言青土二亠"
    },
    {
        kanji: "逝",
        radicals: "斤込扎"
    },
    {
        kanji: "醒",
        radicals: "生酉日"
    },
    {
        kanji: "青",
        radicals: "月青土二亠"
    },
    {
        kanji: "静",
        radicals: "月青土亅亠勹ヨ二"
    },
    {
        kanji: "斉",
        radicals: "｜ノ文廾斉"
    },
    {
        kanji: "税",
        radicals: "禾口并儿"
    },
    {
        kanji: "脆",
        radicals: "月厂勹卩"
    },
    {
        kanji: "隻",
        radicals: "又隹"
    },
    {
        kanji: "席",
        radicals: "巾广一凵"
    },
    {
        kanji: "惜",
        radicals: "｜一二日忙"
    },
    {
        kanji: "戚",
        radicals: "ノ小卜戈"
    },
    {
        kanji: "斥",
        radicals: "斤丶"
    },
    {
        kanji: "昔",
        radicals: "｜一二日"
    },
    {
        kanji: "析",
        radicals: "斤木"
    },
    {
        kanji: "石",
        radicals: "口石"
    },
    {
        kanji: "積",
        radicals: "禾貝目ハ土亠二"
    },
    {
        kanji: "籍",
        radicals: "｜一竹土日ハ木亠耒二ノ乞"
    },
    {
        kanji: "績",
        radicals: "貝目ハ糸幺小土亠二"
    },
    {
        kanji: "脊",
        radicals: "月二人"
    },
    {
        kanji: "責",
        radicals: "貝目ハ土亠二"
    },
    {
        kanji: "赤",
        radicals: "赤土"
    },
    {
        kanji: "跡",
        radicals: "口止赤足亠"
    },
    {
        kanji: "蹟",
        radicals: "貝目ハ口足土亠止二"
    },
    {
        kanji: "碩",
        radicals: "貝目ハ口石頁"
    },
    {
        kanji: "切",
        radicals: "刀匕"
    },
    {
        kanji: "拙",
        radicals: "｜山扎凵"
    },
    {
        kanji: "接",
        radicals: "女立扎"
    },
    {
        kanji: "摂",
        radicals: "耳冫扎"
    },
    {
        kanji: "折",
        radicals: "斤扎"
    },
    {
        kanji: "設",
        radicals: "言殳几又"
    },
    {
        kanji: "窃",
        radicals: "穴刀儿匕宀"
    },
    {
        kanji: "節",
        radicals: "艮竹卩乞"
    },
    {
        kanji: "説",
        radicals: "言口并儿"
    },
    {
        kanji: "雪",
        radicals: "ヨ雨"
    },
    {
        kanji: "絶",
        radicals: "糸幺小色"
    },
    {
        kanji: "舌",
        radicals: "口舌"
    },
    {
        kanji: "蝉",
        radicals: "十尚虫田"
    },
    {
        kanji: "仙",
        radicals: "化山"
    },
    {
        kanji: "先",
        radicals: "ノ土儿"
    },
    {
        kanji: "千",
        radicals: "ノ十"
    },
    {
        kanji: "占",
        radicals: "口卜"
    },
    {
        kanji: "宣",
        radicals: "一日宀"
    },
    {
        kanji: "専",
        radicals: "十寸田"
    },
    {
        kanji: "尖",
        radicals: "小大"
    },
    {
        kanji: "川",
        radicals: "川"
    },
    {
        kanji: "戦",
        radicals: "十尚田戈"
    },
    {
        kanji: "扇",
        radicals: "羽戸冫一尸"
    },
    {
        kanji: "撰",
        radicals: "｜二ハ已扎"
    },
    {
        kanji: "栓",
        radicals: "王木个"
    },
    {
        kanji: "栴",
        radicals: "ノ木冂乞"
    },
    {
        kanji: "泉",
        radicals: "水白"
    },
    {
        kanji: "浅",
        radicals: "汁戈二"
    },
    {
        kanji: "洗",
        radicals: "ノ汁土儿"
    },
    {
        kanji: "染",
        radicals: "九汁木"
    },
    {
        kanji: "潜",
        radicals: "汁日二大人亠"
    },
    {
        kanji: "煎",
        radicals: "一刈月并杰"
    },
    {
        kanji: "煽",
        radicals: "羽火戸冫一尸"
    },
    {
        kanji: "旋",
        radicals: "疋方乞"
    },
    {
        kanji: "穿",
        radicals: "牙穴儿宀"
    },
    {
        kanji: "箭",
        radicals: "一刈月竹并乞"
    },
    {
        kanji: "線",
        radicals: "糸幺小水白"
    },
    {
        kanji: "繊",
        radicals: "糸幺小土戈赤"
    },
    {
        kanji: "羨",
        radicals: "王欠汁并羊"
    },
    {
        kanji: "腺",
        radicals: "月水白"
    },
    {
        kanji: "舛",
        radicals: "舛夕"
    },
    {
        kanji: "船",
        radicals: "口舟ハ"
    },
    {
        kanji: "薦",
        radicals: "广杰艾"
    },
    {
        kanji: "詮",
        radicals: "王言个ハ"
    },
    {
        kanji: "賎",
        radicals: "貝目ハ戈二"
    },
    {
        kanji: "践",
        radicals: "口足戈二止"
    },
    {
        kanji: "選",
        radicals: "｜込二ハ已"
    },
    {
        kanji: "遷",
        radicals: "込西大已"
    },
    {
        kanji: "銭",
        radicals: "金戈二"
    },
    {
        kanji: "銑",
        radicals: "ノ金土儿"
    },
    {
        kanji: "閃",
        radicals: "人門"
    },
    {
        kanji: "鮮",
        radicals: "王魚田并羊杰"
    },
    {
        kanji: "前",
        radicals: "一刈月并"
    },
    {
        kanji: "善",
        radicals: "王口并羊"
    },
    {
        kanji: "漸",
        radicals: "斤車汁"
    },
    {
        kanji: "然",
        radicals: "犬夕杰"
    },
    {
        kanji: "全",
        radicals: "王ハ个"
    },
    {
        kanji: "禅",
        radicals: "十尚田礼"
    },
    {
        kanji: "繕",
        radicals: "王口糸幺小并羊"
    },
    {
        kanji: "膳",
        radicals: "王月口并羊"
    },
    {
        kanji: "糎",
        radicals: "米里厂"
    },
    {
        kanji: "噌",
        radicals: "口田日并"
    },
    {
        kanji: "塑",
        radicals: "月土并屮"
    },
    {
        kanji: "岨",
        radicals: "一山目"
    },
    {
        kanji: "措",
        radicals: "｜一二日扎"
    },
    {
        kanji: "曾",
        radicals: "日ハ"
    },
    {
        kanji: "曽",
        radicals: "田日并"
    },
    {
        kanji: "楚",
        radicals: "疋木"
    },
    {
        kanji: "狙",
        radicals: "一犯目"
    },
    {
        kanji: "疏",
        radicals: "止川亠厶"
    },
    {
        kanji: "疎",
        radicals: "｜一口止木"
    },
    {
        kanji: "礎",
        radicals: "口石疋木"
    },
    {
        kanji: "祖",
        radicals: "一目礼"
    },
    {
        kanji: "租",
        radicals: "一禾目"
    },
    {
        kanji: "粗",
        radicals: "一米目"
    },
    {
        kanji: "素",
        radicals: "糸幺小土亠二"
    },
    {
        kanji: "組",
        radicals: "一糸幺小目"
    },
    {
        kanji: "蘇",
        radicals: "禾魚田杰艾"
    },
    {
        kanji: "訴",
        radicals: "斤言丶"
    },
    {
        kanji: "阻",
        radicals: "一目阡"
    },
    {
        kanji: "遡",
        radicals: "月込并屮"
    },
    {
        kanji: "鼠",
        radicals: "臼鼠"
    },
    {
        kanji: "僧",
        radicals: "化田日并"
    },
    {
        kanji: "創",
        radicals: "刈口个一"
    },
    {
        kanji: "双",
        radicals: "又丶"
    },
    {
        kanji: "叢",
        radicals: "王耳并又羊"
    },
    {
        kanji: "倉",
        radicals: "ノ口个尸一"
    },
    {
        kanji: "喪",
        radicals: "｜衣一口亠"
    },
    {
        kanji: "壮",
        radicals: "士爿"
    },
    {
        kanji: "奏",
        radicals: "一禾大二人"
    },
    {
        kanji: "爽",
        radicals: "一人亠"
    },
    {
        kanji: "宋",
        radicals: "木宀"
    },
    {
        kanji: "層",
        radicals: "田日并尸"
    },
    {
        kanji: "匝",
        radicals: "巾匚"
    },
    {
        kanji: "惣",
        radicals: "牛心勿"
    },
    {
        kanji: "想",
        radicals: "心木目"
    },
    {
        kanji: "捜",
        radicals: "｜日又扎田"
    },
    {
        kanji: "掃",
        radicals: "ヨ巾冖扎"
    },
    {
        kanji: "挿",
        radicals: "｜ノ十日扎田"
    },
    {
        kanji: "掻",
        radicals: "虫又扎"
    },
    {
        kanji: "操",
        radicals: "口木扎品"
    },
    {
        kanji: "早",
        radicals: "十日"
    },
    {
        kanji: "曹",
        radicals: "｜一日"
    },
    {
        kanji: "巣",
        radicals: "尚田木"
    },
    {
        kanji: "槍",
        radicals: "口木个一"
    },
    {
        kanji: "槽",
        radicals: "｜一日木"
    },
    {
        kanji: "漕",
        radicals: "｜一汁日"
    },
    {
        kanji: "燥",
        radicals: "火口木品"
    },
    {
        kanji: "争",
        radicals: "ヨ一亅勹"
    },
    {
        kanji: "痩",
        radicals: "又疔"
    },
    {
        kanji: "相",
        radicals: "木目"
    },
    {
        kanji: "窓",
        radicals: "穴心儿厶宀"
    },
    {
        kanji: "糟",
        radicals: "｜一日米"
    },
    {
        kanji: "総",
        radicals: "糸幺小心ハ厶"
    },
    {
        kanji: "綜",
        radicals: "糸幺小示二宀"
    },
    {
        kanji: "聡",
        radicals: "耳心ハ厶"
    },
    {
        kanji: "草",
        radicals: "十日艾"
    },
    {
        kanji: "荘",
        radicals: "士爿艾"
    },
    {
        kanji: "葬",
        radicals: "一夕匕廾艾"
    },
    {
        kanji: "蒼",
        radicals: "ノ口个艾一"
    },
    {
        kanji: "藻",
        radicals: "口汁木艾品"
    },
    {
        kanji: "装",
        radicals: "衣士爿亠"
    },
    {
        kanji: "走",
        radicals: "走土"
    },
    {
        kanji: "送",
        radicals: "込并大一二"
    },
    {
        kanji: "遭",
        radicals: "｜一込日"
    },
    {
        kanji: "鎗",
        radicals: "ノ金口个一"
    },
    {
        kanji: "霜",
        radicals: "雨木目"
    },
    {
        kanji: "騒",
        radicals: "虫馬又杰"
    },
    {
        kanji: "像",
        radicals: "化勹豕口一"
    },
    {
        kanji: "増",
        radicals: "田土日并"
    },
    {
        kanji: "憎",
        radicals: "田日并忙"
    },
    {
        kanji: "臓",
        radicals: "ノ月臣戈艾厂"
    },
    {
        kanji: "蔵",
        radicals: "ノ臣戈艾厂"
    },
    {
        kanji: "贈",
        radicals: "貝目ハ田日并"
    },
    {
        kanji: "造",
        radicals: "ノ口込土"
    },
    {
        kanji: "促",
        radicals: "化口足止"
    },
    {
        kanji: "側",
        radicals: "化貝目ハ刈"
    },
    {
        kanji: "則",
        radicals: "貝目ハ刈"
    },
    {
        kanji: "即",
        radicals: "艮卩"
    },
    {
        kanji: "息",
        radicals: "自心目"
    },
    {
        kanji: "捉",
        radicals: "口足扎止"
    },
    {
        kanji: "束",
        radicals: "｜一口ハ木"
    },
    {
        kanji: "測",
        radicals: "貝目ハ刈汁"
    },
    {
        kanji: "足",
        radicals: "口足止"
    },
    {
        kanji: "速",
        radicals: "｜一口込ハ木"
    },
    {
        kanji: "俗",
        radicals: "化口谷ハ个"
    },
    {
        kanji: "属",
        radicals: "ノ尸禹"
    },
    {
        kanji: "賊",
        radicals: "貝目ハ十戈"
    },
    {
        kanji: "族",
        radicals: "方矢乞"
    },
    {
        kanji: "続",
        radicals: "士糸幺小儿冖"
    },
    {
        kanji: "卒",
        radicals: "十人亠"
    },
    {
        kanji: "袖",
        radicals: "｜一初田"
    },
    {
        kanji: "其",
        radicals: "一甘ハ"
    },
    {
        kanji: "揃",
        radicals: "一刈月并扎"
    },
    {
        kanji: "存",
        radicals: "｜ノ一子"
    },
    {
        kanji: "孫",
        radicals: "ノ子糸幺小"
    },
    {
        kanji: "尊",
        radicals: "寸酉并"
    },
    {
        kanji: "損",
        radicals: "貝目ハ口扎"
    },
    {
        kanji: "村",
        radicals: "寸木"
    },
    {
        kanji: "遜",
        radicals: "ノ込子糸幺小"
    },
    {
        kanji: "他",
        radicals: "化也"
    },
    {
        kanji: "多",
        radicals: "夕"
    },
    {
        kanji: "太",
        radicals: "大丶"
    },
    {
        kanji: "汰",
        radicals: "汁大丶"
    },
    {
        kanji: "詑",
        radicals: "言匕宀"
    },
    {
        kanji: "唾",
        radicals: "｜ノ一口"
    },
    {
        kanji: "堕",
        radicals: "ノ一月土阡"
    },
    {
        kanji: "妥",
        radicals: "女爪"
    },
    {
        kanji: "惰",
        radicals: "ノ一月工忙"
    },
    {
        kanji: "打",
        radicals: "亅扎"
    },
    {
        kanji: "柁",
        radicals: "木匕宀"
    },
    {
        kanji: "舵",
        radicals: "舟匕宀"
    },
    {
        kanji: "楕",
        radicals: "ノ一月工木"
    },
    {
        kanji: "陀",
        radicals: "匕宀阡"
    },
    {
        kanji: "駄",
        radicals: "大馬丶杰"
    },
    {
        kanji: "騨",
        radicals: "十尚田馬杰"
    },
    {
        kanji: "体",
        radicals: "木一化"
    },
    {
        kanji: "堆",
        radicals: "土隹"
    },
    {
        kanji: "対",
        radicals: "寸文"
    },
    {
        kanji: "耐",
        radicals: "而寸"
    },
    {
        kanji: "岱",
        radicals: "化山弋"
    },
    {
        kanji: "帯",
        radicals: "｜一巾冖"
    },
    {
        kanji: "待",
        radicals: "寸土彳"
    },
    {
        kanji: "怠",
        radicals: "口心厶"
    },
    {
        kanji: "態",
        radicals: "月心匕厶"
    },
    {
        kanji: "戴",
        radicals: "｜一田土二ハ戈"
    },
    {
        kanji: "替",
        radicals: "人大二日亠"
    },
    {
        kanji: "泰",
        radicals: "｜一水二人大"
    },
    {
        kanji: "滞",
        radicals: "巾汁冖"
    },
    {
        kanji: "胎",
        radicals: "月口厶"
    },
    {
        kanji: "腿",
        radicals: "月込艮"
    },
    {
        kanji: "苔",
        radicals: "口厶艾"
    },
    {
        kanji: "袋",
        radicals: "衣化弋亠"
    },
    {
        kanji: "貸",
        radicals: "化貝目ハ弋"
    },
    {
        kanji: "退",
        radicals: "込艮"
    },
    {
        kanji: "逮",
        radicals: "ヨ込水隶"
    },
    {
        kanji: "隊",
        radicals: "并豕阡"
    },
    {
        kanji: "黛",
        radicals: "化黒里弋杰"
    },
    {
        kanji: "鯛",
        radicals: "魚口田土冂杰"
    },
    {
        kanji: "代",
        radicals: "化弋"
    },
    {
        kanji: "台",
        radicals: "口厶"
    },
    {
        kanji: "大",
        radicals: "大"
    },
    {
        kanji: "第",
        radicals: "弓竹乞"
    },
    {
        kanji: "醍",
        radicals: "酉日疋"
    },
    {
        kanji: "題",
        radicals: "貝目ハ日疋頁"
    },
    {
        kanji: "鷹",
        radicals: "化鳥广杰隹"
    },
    {
        kanji: "滝",
        radicals: "汁田立竜"
    },
    {
        kanji: "瀧",
        radicals: "月汁立"
    },
    {
        kanji: "卓",
        radicals: "十日卜"
    },
    {
        kanji: "啄",
        radicals: "口豕"
    },
    {
        kanji: "宅",
        radicals: "ノ一乙宀"
    },
    {
        kanji: "托",
        radicals: "ノ一乙扎"
    },
    {
        kanji: "択",
        radicals: "尸扎丶"
    },
    {
        kanji: "拓",
        radicals: "口石扎"
    },
    {
        kanji: "沢",
        radicals: "汁尸丶"
    },
    {
        kanji: "濯",
        radicals: "ヨ汁隹"
    },
    {
        kanji: "琢",
        radicals: "王豕"
    },
    {
        kanji: "託",
        radicals: "ノ一乙言"
    },
    {
        kanji: "鐸",
        radicals: "金十辛買立亠"
    },
    {
        kanji: "濁",
        radicals: "汁虫買勹"
    },
    {
        kanji: "諾",
        radicals: "ノ一言口艾"
    },
    {
        kanji: "茸",
        radicals: "耳艾"
    },
    {
        kanji: "凧",
        radicals: "｜巾冂几"
    },
    {
        kanji: "蛸",
        radicals: "月尚虫"
    },
    {
        kanji: "只",
        radicals: "口ハ"
    },
    {
        kanji: "叩",
        radicals: "口卩"
    },
    {
        kanji: "但",
        radicals: "一化日"
    },
    {
        kanji: "達",
        radicals: "王込土并羊"
    },
    {
        kanji: "辰",
        radicals: "衣辰厂"
    },
    {
        kanji: "奪",
        radicals: "寸大隹"
    },
    {
        kanji: "脱",
        radicals: "月口并儿"
    },
    {
        kanji: "巽",
        radicals: "｜一二ハ已"
    },
    {
        kanji: "竪",
        radicals: "臣又立"
    },
    {
        kanji: "辿",
        radicals: "込山"
    },
    {
        kanji: "棚",
        radicals: "月木"
    },
    {
        kanji: "谷",
        radicals: "口谷ハ个"
    },
    {
        kanji: "狸",
        radicals: "犯里"
    },
    {
        kanji: "鱈",
        radicals: "ヨ雨魚田杰"
    },
    {
        kanji: "樽",
        radicals: "寸酉并木"
    },
    {
        kanji: "誰",
        radicals: "言隹"
    },
    {
        kanji: "丹",
        radicals: "ノ一丶亅"
    },
    {
        kanji: "単",
        radicals: "十尚田"
    },
    {
        kanji: "嘆",
        radicals: "ノ一口艾二大"
    },
    {
        kanji: "坦",
        radicals: "一土日"
    },
    {
        kanji: "担",
        radicals: "一日扎"
    },
    {
        kanji: "探",
        radicals: "木儿冖扎"
    },
    {
        kanji: "旦",
        radicals: "一日"
    },
    {
        kanji: "歎",
        radicals: "大一欠艾口二"
    },
    {
        kanji: "淡",
        radicals: "火汁"
    },
    {
        kanji: "湛",
        radicals: "｜一甘汁儿匚"
    },
    {
        kanji: "炭",
        radicals: "火山厂"
    },
    {
        kanji: "短",
        radicals: "口豆并矢乞"
    },
    {
        kanji: "端",
        radicals: "山而立"
    },
    {
        kanji: "箪",
        radicals: "十尚竹田乞"
    },
    {
        kanji: "綻",
        radicals: "糸幺小疋宀"
    },
    {
        kanji: "耽",
        radicals: "耳尢冖"
    },
    {
        kanji: "胆",
        radicals: "一月日"
    },
    {
        kanji: "蛋",
        radicals: "虫疋"
    },
    {
        kanji: "誕",
        radicals: "ノ言止廴"
    },
    {
        kanji: "鍛",
        radicals: "金殳几又"
    },
    {
        kanji: "団",
        radicals: "寸囗"
    },
    {
        kanji: "壇",
        radicals: "一口土日亠囗"
    },
    {
        kanji: "弾",
        radicals: "弓十尚田"
    },
    {
        kanji: "断",
        radicals: "斤米｜一"
    },
    {
        kanji: "暖",
        radicals: "ノ一爪日又"
    },
    {
        kanji: "檀",
        radicals: "一口日木亠"
    },
    {
        kanji: "段",
        radicals: "｜殳几又ノ一"
    },
    {
        kanji: "男",
        radicals: "田力"
    },
    {
        kanji: "談",
        radicals: "火言"
    },
    {
        kanji: "値",
        radicals: "化十目｜一"
    },
    {
        kanji: "知",
        radicals: "口矢乞"
    },
    {
        kanji: "地",
        radicals: "土也"
    },
    {
        kanji: "弛",
        radicals: "弓也"
    },
    {
        kanji: "恥",
        radicals: "耳心"
    },
    {
        kanji: "智",
        radicals: "口日矢乞"
    },
    {
        kanji: "池",
        radicals: "汁也"
    },
    {
        kanji: "痴",
        radicals: "口矢疔乞"
    },
    {
        kanji: "稚",
        radicals: "禾隹"
    },
    {
        kanji: "置",
        radicals: "十買目一｜"
    },
    {
        kanji: "致",
        radicals: "至土厶攵乞"
    },
    {
        kanji: "蜘",
        radicals: "口虫矢乞"
    },
    {
        kanji: "遅",
        radicals: "王込并羊尸"
    },
    {
        kanji: "馳",
        radicals: "馬也杰"
    },
    {
        kanji: "築",
        radicals: "工竹木丶几"
    },
    {
        kanji: "畜",
        radicals: "玄田亠幺"
    },
    {
        kanji: "竹",
        radicals: "竹乞"
    },
    {
        kanji: "筑",
        radicals: "工竹丶几乞"
    },
    {
        kanji: "蓄",
        radicals: "玄田亠幺艾"
    },
    {
        kanji: "逐",
        radicals: "込豕"
    },
    {
        kanji: "秩",
        radicals: "ノ禾人土大"
    },
    {
        kanji: "窒",
        radicals: "一穴至土儿厶宀"
    },
    {
        kanji: "茶",
        radicals: "个艾木"
    },
    {
        kanji: "嫡",
        radicals: "口十女并立亠冂滴"
    },
    {
        kanji: "着",
        radicals: "ノ王并目羊"
    },
    {
        kanji: "中",
        radicals: "｜口"
    },
    {
        kanji: "仲",
        radicals: "｜化口"
    },
    {
        kanji: "宙",
        radicals: "｜日宀田"
    },
    {
        kanji: "忠",
        radicals: "｜口心"
    },
    {
        kanji: "抽",
        radicals: "｜日扎田"
    },
    {
        kanji: "昼",
        radicals: "一日尸丶"
    },
    {
        kanji: "柱",
        radicals: "王木丶"
    },
    {
        kanji: "注",
        radicals: "王汁丶"
    },
    {
        kanji: "虫",
        radicals: "虫"
    },
    {
        kanji: "衷",
        radicals: "衣十口"
    },
    {
        kanji: "註",
        radicals: "王言丶"
    },
    {
        kanji: "酎",
        radicals: "寸酉"
    },
    {
        kanji: "鋳",
        radicals: "ノ亠土金寸"
    },
    {
        kanji: "駐",
        radicals: "王馬丶杰"
    },
    {
        kanji: "樗",
        radicals: "雨木二勹"
    },
    {
        kanji: "瀦",
        radicals: "汁日老豕"
    },
    {
        kanji: "猪",
        radicals: "日犯老"
    },
    {
        kanji: "苧",
        radicals: "一亅宀艾"
    },
    {
        kanji: "著",
        radicals: "日老艾"
    },
    {
        kanji: "貯",
        radicals: "一貝目ハ亅宀"
    },
    {
        kanji: "丁",
        radicals: "一亅"
    },
    {
        kanji: "兆",
        radicals: "儿冫"
    },
    {
        kanji: "凋",
        radicals: "口土冂冫"
    },
    {
        kanji: "喋",
        radicals: "口木世"
    },
    {
        kanji: "寵",
        radicals: "月立宀"
    },
    {
        kanji: "帖",
        radicals: "巾口卜"
    },
    {
        kanji: "帳",
        radicals: "巾長"
    },
    {
        kanji: "庁",
        radicals: "一亅广"
    },
    {
        kanji: "弔",
        radicals: "｜弓"
    },
    {
        kanji: "張",
        radicals: "弓長"
    },
    {
        kanji: "彫",
        radicals: "口土冂彡"
    },
    {
        kanji: "徴",
        radicals: "王山彳攵乞"
    },
    {
        kanji: "懲",
        radicals: "王山心彳攵乞"
    },
    {
        kanji: "挑",
        radicals: "儿冫扎"
    },
    {
        kanji: "暢",
        radicals: "｜一日田勿"
    },
    {
        kanji: "朝",
        radicals: "月十日"
    },
    {
        kanji: "潮",
        radicals: "月十汁日"
    },
    {
        kanji: "牒",
        radicals: "片木世"
    },
    {
        kanji: "町",
        radicals: "一田亅"
    },
    {
        kanji: "眺",
        radicals: "目儿冫"
    },
    {
        kanji: "聴",
        radicals: "耳十心買"
    },
    {
        kanji: "脹",
        radicals: "月長"
    },
    {
        kanji: "腸",
        radicals: "一月日勿"
    },
    {
        kanji: "蝶",
        radicals: "虫木世"
    },
    {
        kanji: "調",
        radicals: "言口土冂"
    },
    {
        kanji: "諜",
        radicals: "言木世"
    },
    {
        kanji: "超",
        radicals: "口走土刀"
    },
    {
        kanji: "跳",
        radicals: "口足儿冫止"
    },
    {
        kanji: "銚",
        radicals: "金儿冫"
    },
    {
        kanji: "長",
        radicals: "長"
    },
    {
        kanji: "頂",
        radicals: "一貝目ハ頁亅"
    },
    {
        kanji: "鳥",
        radicals: "鳥杰"
    },
    {
        kanji: "勅",
        radicals: "｜一口木力"
    },
    {
        kanji: "捗",
        radicals: "ノ止小扎"
    },
    {
        kanji: "直",
        radicals: "十目｜一"
    },
    {
        kanji: "朕",
        radicals: "月人大一并"
    },
    {
        kanji: "沈",
        radicals: "汁尢冖"
    },
    {
        kanji: "珍",
        radicals: "王个彡"
    },
    {
        kanji: "賃",
        radicals: "王化貝目ハ"
    },
    {
        kanji: "鎮",
        radicals: "金十并目一ハ"
    },
    {
        kanji: "陳",
        radicals: "｜一田日木阡"
    },
    {
        kanji: "津",
        radicals: "汁聿"
    },
    {
        kanji: "墜",
        radicals: "土并豕阡"
    },
    {
        kanji: "椎",
        radicals: "木隹"
    },
    {
        kanji: "槌",
        radicals: "｜口込木"
    },
    {
        kanji: "追",
        radicals: "｜口込"
    },
    {
        kanji: "鎚",
        radicals: "｜金口込"
    },
    {
        kanji: "痛",
        radicals: "用疔マ"
    },
    {
        kanji: "通",
        radicals: "込用マ"
    },
    {
        kanji: "塚",
        radicals: "土冖豕"
    },
    {
        kanji: "栂",
        radicals: "母木毋"
    },
    {
        kanji: "掴",
        radicals: "王囗扎丶"
    },
    {
        kanji: "槻",
        radicals: "見人大木一二"
    },
    {
        kanji: "佃",
        radicals: "化田"
    },
    {
        kanji: "漬",
        radicals: "貝目ハ汁土亠二"
    },
    {
        kanji: "柘",
        radicals: "口石木"
    },
    {
        kanji: "辻",
        radicals: "込十"
    },
    {
        kanji: "蔦",
        radicals: "鳥杰艾"
    },
    {
        kanji: "綴",
        radicals: "糸幺小又"
    },
    {
        kanji: "鍔",
        radicals: "金口二勹"
    },
    {
        kanji: "椿",
        radicals: "一二日木人大"
    },
    {
        kanji: "潰",
        radicals: "貝目ハ汁十口｜一"
    },
    {
        kanji: "坪",
        radicals: "干土并"
    },
    {
        kanji: "壷",
        radicals: "｜一口士冖"
    },
    {
        kanji: "嬬",
        radicals: "雨而女"
    },
    {
        kanji: "紬",
        radicals: "｜糸幺小日田"
    },
    {
        kanji: "爪",
        radicals: "爪"
    },
    {
        kanji: "吊",
        radicals: "巾口"
    },
    {
        kanji: "釣",
        radicals: "金丶勹"
    },
    {
        kanji: "鶴",
        radicals: "鳥杰隹宀冖"
    },
    {
        kanji: "亭",
        radicals: "口亅亠冖"
    },
    {
        kanji: "低",
        radicals: "化氏一"
    },
    {
        kanji: "停",
        radicals: "化口亅亠冖一"
    },
    {
        kanji: "偵",
        radicals: "化貝目ハ卜"
    },
    {
        kanji: "剃",
        radicals: "｜ノ刈弓并"
    },
    {
        kanji: "貞",
        radicals: "貝目ハ卜"
    },
    {
        kanji: "呈",
        radicals: "王口"
    },
    {
        kanji: "堤",
        radicals: "土日疋"
    },
    {
        kanji: "定",
        radicals: "疋宀"
    },
    {
        kanji: "帝",
        radicals: "巾并立亠冖"
    },
    {
        kanji: "底",
        radicals: "氏广"
    },
    {
        kanji: "庭",
        radicals: "王广廴"
    },
    {
        kanji: "廷",
        radicals: "王廴士"
    },
    {
        kanji: "弟",
        radicals: "｜ノ弓并"
    },
    {
        kanji: "悌",
        radicals: "｜ノ弓并忙"
    },
    {
        kanji: "抵",
        radicals: "氏扎"
    },
    {
        kanji: "挺",
        radicals: "王廴扎"
    },
    {
        kanji: "提",
        radicals: "日疋扎"
    },
    {
        kanji: "梯",
        radicals: "｜ノ弓并木"
    },
    {
        kanji: "汀",
        radicals: "一汁亅"
    },
    {
        kanji: "碇",
        radicals: "口石疋宀"
    },
    {
        kanji: "禎",
        radicals: "貝目ハ卜礼"
    },
    {
        kanji: "程",
        radicals: "王禾口"
    },
    {
        kanji: "締",
        radicals: "巾糸幺小并立亠冖"
    },
    {
        kanji: "艇",
        radicals: "王舟廴"
    },
    {
        kanji: "訂",
        radicals: "一言亅"
    },
    {
        kanji: "諦",
        radicals: "巾言并立亠冖"
    },
    {
        kanji: "蹄",
        radicals: "巾口足并立亠冖止"
    },
    {
        kanji: "逓",
        radicals: "巾込厂二｜"
    },
    {
        kanji: "邸",
        radicals: "氏邦"
    },
    {
        kanji: "鄭",
        radicals: "大酉并邦"
    },
    {
        kanji: "釘",
        radicals: "一金亅"
    },
    {
        kanji: "鼎",
        radicals: "｜一鼎片目爿"
    },
    {
        kanji: "泥",
        radicals: "汁匕尸"
    },
    {
        kanji: "摘",
        radicals: "口十并立亠冂扎滴"
    },
    {
        kanji: "擢",
        radicals: "ヨ扎隹"
    },
    {
        kanji: "敵",
        radicals: "口十并立亠冂攵滴乞"
    },
    {
        kanji: "滴",
        radicals: "口十汁并立亠冂滴"
    },
    {
        kanji: "的",
        radicals: "白丶勹"
    },
    {
        kanji: "笛",
        radicals: "｜竹日田乞"
    },
    {
        kanji: "適",
        radicals: "口込十并立亠冂滴"
    },
    {
        kanji: "鏑",
        radicals: "金口十并立亠冂滴"
    },
    {
        kanji: "溺",
        radicals: "弓汁冫"
    },
    {
        kanji: "哲",
        radicals: "斤口扎"
    },
    {
        kanji: "徹",
        radicals: "月亠厶彳攵乞"
    },
    {
        kanji: "撤",
        radicals: "月亠厶扎攵乞"
    },
    {
        kanji: "轍",
        radicals: "月車亠厶攵乞"
    },
    {
        kanji: "迭",
        radicals: "｜ノ一牛込矢大二乞"
    },
    {
        kanji: "鉄",
        radicals: "ノ金二矢大乞"
    },
    {
        kanji: "典",
        radicals: "｜一日ハ"
    },
    {
        kanji: "填",
        radicals: "十土ハ目"
    },
    {
        kanji: "天",
        radicals: "一大二"
    },
    {
        kanji: "展",
        radicals: "｜衣一二尸"
    },
    {
        kanji: "店",
        radicals: "口卜广"
    },
    {
        kanji: "添",
        radicals: "ノ汁心大一二"
    },
    {
        kanji: "纏",
        radicals: "糸幺小土里儿广"
    },
    {
        kanji: "甜",
        radicals: "甘口舌"
    },
    {
        kanji: "貼",
        radicals: "貝目ハ口卜"
    },
    {
        kanji: "転",
        radicals: "車二厶"
    },
    {
        kanji: "顛",
        radicals: "貝十ハ頁目"
    },
    {
        kanji: "点",
        radicals: "口卜杰"
    },
    {
        kanji: "伝",
        radicals: "化二厶"
    },
    {
        kanji: "殿",
        radicals: "｜一二ハ尸殳几又"
    },
    {
        kanji: "澱",
        radicals: "｜一汁二ハ尸殳几又"
    },
    {
        kanji: "田",
        radicals: "田"
    },
    {
        kanji: "電",
        radicals: "雨田乙"
    },
    {
        kanji: "兎",
        radicals: "ノ丶儿口｜"
    },
    {
        kanji: "吐",
        radicals: "口土"
    },
    {
        kanji: "堵",
        radicals: "土日老"
    },
    {
        kanji: "塗",
        radicals: "汁土ハ个亅木一"
    },
    {
        kanji: "妬",
        radicals: "口女石"
    },
    {
        kanji: "屠",
        radicals: "日老尸"
    },
    {
        kanji: "徒",
        radicals: "走土彳"
    },
    {
        kanji: "斗",
        radicals: "斗"
    },
    {
        kanji: "杜",
        radicals: "土木"
    },
    {
        kanji: "渡",
        radicals: "汁又广"
    },
    {
        kanji: "登",
        radicals: "口豆并癶"
    },
    {
        kanji: "菟",
        radicals: "丶儿艾勹口｜"
    },
    {
        kanji: "賭",
        radicals: "貝目ハ日老"
    },
    {
        kanji: "途",
        radicals: "込ハ个亅木一"
    },
    {
        kanji: "都",
        radicals: "日邦老"
    },
    {
        kanji: "鍍",
        radicals: "金又广"
    },
    {
        kanji: "砥",
        radicals: "口氏石"
    },
    {
        kanji: "砺",
        radicals: "一斤口石厂"
    },
    {
        kanji: "努",
        radicals: "女又力"
    },
    {
        kanji: "度",
        radicals: "又广一凵"
    },
    {
        kanji: "土",
        radicals: "土"
    },
    {
        kanji: "奴",
        radicals: "女又"
    },
    {
        kanji: "怒",
        radicals: "女心又"
    },
    {
        kanji: "倒",
        radicals: "化刈至土厶"
    },
    {
        kanji: "党",
        radicals: "口尚儿冖"
    },
    {
        kanji: "冬",
        radicals: "夂丶攵"
    },
    {
        kanji: "凍",
        radicals: "｜一日木冫田"
    },
    {
        kanji: "刀",
        radicals: "刀"
    },
    {
        kanji: "唐",
        radicals: "｜ヨ一口广"
    },
    {
        kanji: "塔",
        radicals: "口土个艾一"
    },
    {
        kanji: "塘",
        radicals: "｜ヨ一口土广"
    },
    {
        kanji: "套",
        radicals: "大長厶"
    },
    {
        kanji: "宕",
        radicals: "口石宀"
    },
    {
        kanji: "島",
        radicals: "山鳥白"
    },
    {
        kanji: "嶋",
        radicals: "山鳥杰"
    },
    {
        kanji: "悼",
        radicals: "十日忙卜"
    },
    {
        kanji: "投",
        radicals: "扎殳几又"
    },
    {
        kanji: "搭",
        radicals: "口个扎艾一"
    },
    {
        kanji: "東",
        radicals: "｜一日木田"
    },
    {
        kanji: "桃",
        radicals: "木儿冫"
    },
    {
        kanji: "梼",
        radicals: "ノ寸木土亠二"
    },
    {
        kanji: "棟",
        radicals: "｜一日木田"
    },
    {
        kanji: "盗",
        radicals: "欠皿冫"
    },
    {
        kanji: "淘",
        radicals: "缶汁凵勹"
    },
    {
        kanji: "湯",
        radicals: "｜一汁日勿"
    },
    {
        kanji: "涛",
        radicals: "ノ汁寸土亠二"
    },
    {
        kanji: "灯",
        radicals: "一火亅"
    },
    {
        kanji: "燈",
        radicals: "口豆并癶火"
    },
    {
        kanji: "当",
        radicals: "ヨ尚"
    },
    {
        kanji: "痘",
        radicals: "口豆并疔"
    },
    {
        kanji: "祷",
        radicals: "ノ寸礼土亠二"
    },
    {
        kanji: "等",
        radicals: "寸竹土乞"
    },
    {
        kanji: "答",
        radicals: "口竹个一乞"
    },
    {
        kanji: "筒",
        radicals: "口竹冂乞一"
    },
    {
        kanji: "糖",
        radicals: "口米广"
    },
    {
        kanji: "統",
        radicals: "糸幺小亠儿厶"
    },
    {
        kanji: "到",
        radicals: "刈至土厶"
    },
    {
        kanji: "董",
        radicals: "｜一日艾里ノ"
    },
    {
        kanji: "蕩",
        radicals: "｜一汁日艾勿"
    },
    {
        kanji: "藤",
        radicals: "｜一月水艾二大"
    },
    {
        kanji: "討",
        radicals: "言寸"
    },
    {
        kanji: "謄",
        radicals: "｜一月言二大"
    },
    {
        kanji: "豆",
        radicals: "口豆并"
    },
    {
        kanji: "踏",
        radicals: "口水足日止"
    },
    {
        kanji: "逃",
        radicals: "込儿冫"
    },
    {
        kanji: "透",
        radicals: "ノ禾込乃"
    },
    {
        kanji: "鐙",
        radicals: "金口豆并癶"
    },
    {
        kanji: "陶",
        radicals: "缶勹阡"
    },
    {
        kanji: "頭",
        radicals: "貝目ハ口豆并頁"
    },
    {
        kanji: "騰",
        radicals: "月馬并一人大二杰"
    },
    {
        kanji: "闘",
        radicals: "口寸豆并門"
    },
    {
        kanji: "働",
        radicals: "｜一化力日ノ"
    },
    {
        kanji: "動",
        radicals: "｜一日力里ノ"
    },
    {
        kanji: "同",
        radicals: "口冂一"
    },
    {
        kanji: "堂",
        radicals: "口尚土冖"
    },
    {
        kanji: "導",
        radicals: "込自寸并首"
    },
    {
        kanji: "憧",
        radicals: "忙里立"
    },
    {
        kanji: "撞",
        radicals: "里立扎"
    },
    {
        kanji: "洞",
        radicals: "口汁冂一"
    },
    {
        kanji: "瞳",
        radicals: "目里立"
    },
    {
        kanji: "童",
        radicals: "里立"
    },
    {
        kanji: "胴",
        radicals: "月口冂一"
    },
    {
        kanji: "萄",
        radicals: "缶勹艾"
    },
    {
        kanji: "道",
        radicals: "込自并首"
    },
    {
        kanji: "銅",
        radicals: "金口冂一"
    },
    {
        kanji: "峠",
        radicals: "｜一山卜"
    },
    {
        kanji: "鴇",
        radicals: "十鳥匕杰"
    },
    {
        kanji: "匿",
        radicals: "ノ口匚艾"
    },
    {
        kanji: "得",
        radicals: "寸日彳一"
    },
    {
        kanji: "徳",
        radicals: "十心買彳"
    },
    {
        kanji: "涜",
        radicals: "士汁儿冖"
    },
    {
        kanji: "特",
        radicals: "牛寸土"
    },
    {
        kanji: "督",
        radicals: "小卜又目"
    },
    {
        kanji: "禿",
        radicals: "禾儿"
    },
    {
        kanji: "篤",
        radicals: "竹杰馬乞"
    },
    {
        kanji: "毒",
        radicals: "土母亠毋二"
    },
    {
        kanji: "独",
        radicals: "虫犯"
    },
    {
        kanji: "読",
        radicals: "言士儿冖"
    },
    {
        kanji: "栃",
        radicals: "斤木厂"
    },
    {
        kanji: "橡",
        radicals: "木豕勹口｜"
    },
    {
        kanji: "凸",
        radicals: "｜一冂凵"
    },
    {
        kanji: "突",
        radicals: "穴大儿宀"
    },
    {
        kanji: "椴",
        radicals: "木殳几又"
    },
    {
        kanji: "届",
        radicals: "｜日尸田"
    },
    {
        kanji: "鳶",
        radicals: "鳥弋杰"
    },
    {
        kanji: "苫",
        radicals: "口卜艾"
    },
    {
        kanji: "寅",
        radicals: "田ハ宀一"
    },
    {
        kanji: "酉",
        radicals: "酉"
    },
    {
        kanji: "瀞",
        radicals: "月汁青土亅亠ヨ二"
    },
    {
        kanji: "噸",
        radicals: "貝目ハ口頁屯"
    },
    {
        kanji: "屯",
        radicals: "ノ乙凵屯"
    },
    {
        kanji: "惇",
        radicals: "口子忙亠"
    },
    {
        kanji: "敦",
        radicals: "口子亠攵乞"
    },
    {
        kanji: "沌",
        radicals: "汁屯"
    },
    {
        kanji: "豚",
        radicals: "月豕"
    },
    {
        kanji: "遁",
        radicals: "斤込十目厂"
    },
    {
        kanji: "頓",
        radicals: "貝目ハ頁屯"
    },
    {
        kanji: "呑",
        radicals: "ノ口大"
    },
    {
        kanji: "曇",
        radicals: "雨二日厶"
    },
    {
        kanji: "鈍",
        radicals: "金屯"
    },
    {
        kanji: "奈",
        radicals: "示二小大"
    },
    {
        kanji: "那",
        radicals: "刀邦二"
    },
    {
        kanji: "内",
        radicals: "人冂"
    },
    {
        kanji: "乍",
        radicals: "｜ノ一乞"
    },
    {
        kanji: "凪",
        radicals: "止几"
    },
    {
        kanji: "薙",
        radicals: "矢艾隹乞"
    },
    {
        kanji: "謎",
        radicals: "言込米"
    },
    {
        kanji: "灘",
        radicals: "汁大口艾隹亠二"
    },
    {
        kanji: "捺",
        radicals: "示二小大扎"
    },
    {
        kanji: "鍋",
        radicals: "金口冂"
    },
    {
        kanji: "楢",
        radicals: "酉并木"
    },
    {
        kanji: "馴",
        radicals: "川馬杰"
    },
    {
        kanji: "縄",
        radicals: "亀糸幺小田乙勹"
    },
    {
        kanji: "畷",
        radicals: "田又"
    },
    {
        kanji: "南",
        radicals: "干十并冂"
    },
    {
        kanji: "楠",
        radicals: "干十并木冂"
    },
    {
        kanji: "軟",
        radicals: "欠車"
    },
    {
        kanji: "難",
        radicals: "艾隹大口亠二"
    },
    {
        kanji: "汝",
        radicals: "汁女"
    },
    {
        kanji: "二",
        radicals: "二"
    },
    {
        kanji: "尼",
        radicals: "匕尸"
    },
    {
        kanji: "弐",
        radicals: "一弋二"
    },
    {
        kanji: "迩",
        radicals: "ノ込小乞"
    },
    {
        kanji: "匂",
        radicals: "勹匕"
    },
    {
        kanji: "賑",
        radicals: "貝目ハ辰衣"
    },
    {
        kanji: "肉",
        radicals: "肉冂人"
    },
    {
        kanji: "虹",
        radicals: "工虫"
    },
    {
        kanji: "廿",
        radicals: "｜一凵"
    },
    {
        kanji: "日",
        radicals: "日"
    },
    {
        kanji: "乳",
        radicals: "乙子爪"
    },
    {
        kanji: "入",
        radicals: "入"
    },
    {
        kanji: "如",
        radicals: "口女"
    },
    {
        kanji: "尿",
        radicals: "水尸"
    },
    {
        kanji: "韮",
        radicals: "韭艾"
    },
    {
        kanji: "任",
        radicals: "ノ王化士"
    },
    {
        kanji: "妊",
        radicals: "ノ王士女"
    },
    {
        kanji: "忍",
        radicals: "心刀丶"
    },
    {
        kanji: "認",
        radicals: "言心刀丶"
    },
    {
        kanji: "濡",
        radicals: "雨而汁"
    },
    {
        kanji: "禰",
        radicals: "｜一礼冂爻"
    },
    {
        kanji: "祢",
        radicals: "ノ小礼"
    },
    {
        kanji: "寧",
        radicals: "一心買亅宀皿"
    },
    {
        kanji: "葱",
        radicals: "心丶艾勿"
    },
    {
        kanji: "猫",
        radicals: "田犯艾"
    },
    {
        kanji: "熱",
        radicals: "土九丶儿杰"
    },
    {
        kanji: "年",
        radicals: "ノ一干乞"
    },
    {
        kanji: "念",
        radicals: "｜一心个"
    },
    {
        kanji: "捻",
        radicals: "｜一心个扎"
    },
    {
        kanji: "撚",
        radicals: "犬夕扎杰"
    },
    {
        kanji: "燃",
        radicals: "火犬夕杰"
    },
    {
        kanji: "粘",
        radicals: "口米卜"
    },
    {
        kanji: "乃",
        radicals: "｜ノ一乃"
    },
    {
        kanji: "廼",
        radicals: "西廴"
    },
    {
        kanji: "之",
        radicals: "乙丶亠廴"
    },
    {
        kanji: "埜",
        radicals: "土木"
    },
    {
        kanji: "嚢",
        radicals: "｜衣一口ハ亠冖"
    },
    {
        kanji: "悩",
        radicals: "尚忙凵"
    },
    {
        kanji: "濃",
        radicals: "｜衣一汁辰日厂"
    },
    {
        kanji: "納",
        radicals: "糸幺小人冂"
    },
    {
        kanji: "能",
        radicals: "月匕厶"
    },
    {
        kanji: "脳",
        radicals: "月尚凵"
    },
    {
        kanji: "膿",
        radicals: "｜衣一月辰日厂"
    },
    {
        kanji: "農",
        radicals: "｜衣一辰日厂"
    },
    {
        kanji: "覗",
        radicals: "見口亅一"
    },
    {
        kanji: "蚤",
        radicals: "虫又"
    },
    {
        kanji: "巴",
        radicals: "乙已巴"
    },
    {
        kanji: "把",
        radicals: "巴扎"
    },
    {
        kanji: "播",
        radicals: "田釆米扎"
    },
    {
        kanji: "覇",
        radicals: "革月西"
    },
    {
        kanji: "杷",
        radicals: "木巴"
    },
    {
        kanji: "波",
        radicals: "汁皮又"
    },
    {
        kanji: "派",
        radicals: "斤汁厂"
    },
    {
        kanji: "琶",
        radicals: "王巴"
    },
    {
        kanji: "破",
        radicals: "口石皮又"
    },
    {
        kanji: "婆",
        radicals: "汁女皮又"
    },
    {
        kanji: "罵",
        radicals: "馬買杰"
    },
    {
        kanji: "芭",
        radicals: "巴艾"
    },
    {
        kanji: "馬",
        radicals: "馬杰"
    },
    {
        kanji: "俳",
        radicals: "化非"
    },
    {
        kanji: "廃",
        radicals: "一儿广癶"
    },
    {
        kanji: "拝",
        radicals: "｜一干扎"
    },
    {
        kanji: "排",
        radicals: "非扎"
    },
    {
        kanji: "敗",
        radicals: "貝目ハ攵乞"
    },
    {
        kanji: "杯",
        radicals: "｜ノ一木礼"
    },
    {
        kanji: "盃",
        radicals: "ノ一皿"
    },
    {
        kanji: "牌",
        radicals: "十田片"
    },
    {
        kanji: "背",
        radicals: "月匕爿"
    },
    {
        kanji: "肺",
        radicals: "巾月亠"
    },
    {
        kanji: "輩",
        radicals: "車非"
    },
    {
        kanji: "配",
        radicals: "酉已"
    },
    {
        kanji: "倍",
        radicals: "化口立"
    },
    {
        kanji: "培",
        radicals: "口土立"
    },
    {
        kanji: "媒",
        radicals: "甘女木"
    },
    {
        kanji: "梅",
        radicals: "母木毋乞"
    },
    {
        kanji: "楳",
        radicals: "甘木"
    },
    {
        kanji: "煤",
        radicals: "火甘木"
    },
    {
        kanji: "狽",
        radicals: "貝目ハ犯"
    },
    {
        kanji: "買",
        radicals: "貝目ハ買"
    },
    {
        kanji: "売",
        radicals: "士儿冖"
    },
    {
        kanji: "賠",
        radicals: "貝目ハ口立"
    },
    {
        kanji: "陪",
        radicals: "口立阡"
    },
    {
        kanji: "這",
        radicals: "言込"
    },
    {
        kanji: "蝿",
        radicals: "亀虫田乙勹"
    },
    {
        kanji: "秤",
        radicals: "禾干并"
    },
    {
        kanji: "矧",
        radicals: "｜弓矢乞"
    },
    {
        kanji: "萩",
        radicals: "火禾艾"
    },
    {
        kanji: "伯",
        radicals: "化白"
    },
    {
        kanji: "剥",
        radicals: "ヨ刈水"
    },
    {
        kanji: "博",
        radicals: "十寸田丶"
    },
    {
        kanji: "拍",
        radicals: "白扎"
    },
    {
        kanji: "柏",
        radicals: "白木"
    },
    {
        kanji: "泊",
        radicals: "汁白"
    },
    {
        kanji: "白",
        radicals: "白"
    },
    {
        kanji: "箔",
        radicals: "汁竹白乞"
    },
    {
        kanji: "粕",
        radicals: "白米"
    },
    {
        kanji: "舶",
        radicals: "舟白"
    },
    {
        kanji: "薄",
        radicals: "十汁寸田丶艾"
    },
    {
        kanji: "迫",
        radicals: "込白"
    },
    {
        kanji: "曝",
        radicals: "｜一水日ハ"
    },
    {
        kanji: "漠",
        radicals: "汁大日艾"
    },
    {
        kanji: "爆",
        radicals: "｜一火水日ハ井"
    },
    {
        kanji: "縛",
        radicals: "糸幺小十寸田丶"
    },
    {
        kanji: "莫",
        radicals: "大日艾"
    },
    {
        kanji: "駁",
        radicals: "馬爻杰"
    },
    {
        kanji: "麦",
        radicals: "麦夂土二亠"
    },
    {
        kanji: "函",
        radicals: "一水凵"
    },
    {
        kanji: "箱",
        radicals: "竹木目乞"
    },
    {
        kanji: "硲",
        radicals: "口石谷ハ个"
    },
    {
        kanji: "箸",
        radicals: "竹日老乞"
    },
    {
        kanji: "肇",
        radicals: "戸攵聿一尸乞"
    },
    {
        kanji: "筈",
        radicals: "口舌竹乞"
    },
    {
        kanji: "櫨",
        radicals: "皿田卜木匕厂虍"
    },
    {
        kanji: "幡",
        radicals: "巾田釆米"
    },
    {
        kanji: "肌",
        radicals: "月几"
    },
    {
        kanji: "畑",
        radicals: "火田"
    },
    {
        kanji: "畠",
        radicals: "田白"
    },
    {
        kanji: "八",
        radicals: "ハ"
    },
    {
        kanji: "鉢",
        radicals: "一金木"
    },
    {
        kanji: "溌",
        radicals: "二汁儿癶"
    },
    {
        kanji: "発",
        radicals: "二儿癶"
    },
    {
        kanji: "醗",
        radicals: "二酉儿癶"
    },
    {
        kanji: "髪",
        radicals: "夂一長彡髟"
    },
    {
        kanji: "伐",
        radicals: "化戈"
    },
    {
        kanji: "罰",
        radicals: "刈言買"
    },
    {
        kanji: "抜",
        radicals: "夂亠扎又"
    },
    {
        kanji: "筏",
        radicals: "化竹戈乞"
    },
    {
        kanji: "閥",
        radicals: "化門戈"
    },
    {
        kanji: "鳩",
        radicals: "九鳥杰"
    },
    {
        kanji: "噺",
        radicals: "斤口辛并木立亠"
    },
    {
        kanji: "塙",
        radicals: "口高土亠冂"
    },
    {
        kanji: "蛤",
        radicals: "口虫个一"
    },
    {
        kanji: "隼",
        radicals: "十隹"
    },
    {
        kanji: "伴",
        radicals: "｜化二并十"
    },
    {
        kanji: "判",
        radicals: "｜刈二并十"
    },
    {
        kanji: "半",
        radicals: "｜二并十"
    },
    {
        kanji: "反",
        radicals: "又厂"
    },
    {
        kanji: "叛",
        radicals: "并又厂"
    },
    {
        kanji: "帆",
        radicals: "巾丶几"
    },
    {
        kanji: "搬",
        radicals: "舟扎殳几又"
    },
    {
        kanji: "斑",
        radicals: "王文"
    },
    {
        kanji: "板",
        radicals: "又木厂"
    },
    {
        kanji: "氾",
        radicals: "乙汁卩"
    },
    {
        kanji: "汎",
        radicals: "汁丶几"
    },
    {
        kanji: "版",
        radicals: "片又厂"
    },
    {
        kanji: "犯",
        radicals: "乙犯卩"
    },
    {
        kanji: "班",
        radicals: "王刈"
    },
    {
        kanji: "畔",
        radicals: "｜田二并十"
    },
    {
        kanji: "繁",
        radicals: "糸幺小母攵毋乞"
    },
    {
        kanji: "般",
        radicals: "舟殳几又"
    },
    {
        kanji: "藩",
        radicals: "汁田釆米艾"
    },
    {
        kanji: "販",
        radicals: "貝目ハ又厂"
    },
    {
        kanji: "範",
        radicals: "乙車竹卩乞"
    },
    {
        kanji: "釆",
        radicals: "釆米"
    },
    {
        kanji: "煩",
        radicals: "火貝目ハ頁"
    },
    {
        kanji: "頒",
        radicals: "貝目刀ハ頁"
    },
    {
        kanji: "飯",
        radicals: "食又厂"
    },
    {
        kanji: "挽",
        radicals: "｜一免儿扎勹"
    },
    {
        kanji: "晩",
        radicals: "免日儿勹"
    },
    {
        kanji: "番",
        radicals: "田釆米"
    },
    {
        kanji: "盤",
        radicals: "皿舟殳几又"
    },
    {
        kanji: "磐",
        radicals: "口舟石殳几又"
    },
    {
        kanji: "蕃",
        radicals: "田釆米艾"
    },
    {
        kanji: "蛮",
        radicals: "虫亠"
    },
    {
        kanji: "匪",
        radicals: "非匚"
    },
    {
        kanji: "卑",
        radicals: "十田"
    },
    {
        kanji: "否",
        radicals: "ノ一口｜丶"
    },
    {
        kanji: "妃",
        radicals: "女已"
    },
    {
        kanji: "庇",
        radicals: "比广"
    },
    {
        kanji: "彼",
        radicals: "皮又彳"
    },
    {
        kanji: "悲",
        radicals: "心非"
    },
    {
        kanji: "扉",
        radicals: "戸非一尸"
    },
    {
        kanji: "批",
        radicals: "比扎"
    },
    {
        kanji: "披",
        radicals: "皮又扎"
    },
    {
        kanji: "斐",
        radicals: "非文"
    },
    {
        kanji: "比",
        radicals: "比"
    },
    {
        kanji: "泌",
        radicals: "ノ汁心丶"
    },
    {
        kanji: "疲",
        radicals: "皮又疔"
    },
    {
        kanji: "皮",
        radicals: "皮又"
    },
    {
        kanji: "碑",
        radicals: "口十石田"
    },
    {
        kanji: "秘",
        radicals: "ノ禾心丶"
    },
    {
        kanji: "緋",
        radicals: "糸幺小非"
    },
    {
        kanji: "罷",
        radicals: "月買匕厶"
    },
    {
        kanji: "肥",
        radicals: "月巴"
    },
    {
        kanji: "被",
        radicals: "初皮又"
    },
    {
        kanji: "誹",
        radicals: "言非"
    },
    {
        kanji: "費",
        radicals: "｜貝目ハ弓"
    },
    {
        kanji: "避",
        radicals: "口込十辛立尸"
    },
    {
        kanji: "非",
        radicals: "非"
    },
    {
        kanji: "飛",
        radicals: "飛"
    },
    {
        kanji: "樋",
        radicals: "込木用マ"
    },
    {
        kanji: "簸",
        radicals: "甘竹皮又乞"
    },
    {
        kanji: "備",
        radicals: "化用厂艾"
    },
    {
        kanji: "尾",
        radicals: "毛尸"
    },
    {
        kanji: "微",
        radicals: "山彳攵乞"
    },
    {
        kanji: "枇",
        radicals: "比木"
    },
    {
        kanji: "毘",
        radicals: "田比"
    },
    {
        kanji: "琵",
        radicals: "王比"
    },
    {
        kanji: "眉",
        radicals: "目尸｜"
    },
    {
        kanji: "美",
        radicals: "王大并羊"
    },
    {
        kanji: "鼻",
        radicals: "自田廾鼻目"
    },
    {
        kanji: "柊",
        radicals: "木夂丶"
    },
    {
        kanji: "稗",
        radicals: "禾十田"
    },
    {
        kanji: "匹",
        radicals: "儿匚"
    },
    {
        kanji: "疋",
        radicals: "疋"
    },
    {
        kanji: "髭",
        radicals: "止長匕彡髟"
    },
    {
        kanji: "彦",
        radicals: "并立亠厂彡"
    },
    {
        kanji: "膝",
        radicals: "月水木个"
    },
    {
        kanji: "菱",
        radicals: "土儿夂艾"
    },
    {
        kanji: "肘",
        radicals: "月寸"
    },
    {
        kanji: "弼",
        radicals: "弓白ノ"
    },
    {
        kanji: "必",
        radicals: "ノ心"
    },
    {
        kanji: "畢",
        radicals: "｜一田"
    },
    {
        kanji: "筆",
        radicals: "竹聿乞"
    },
    {
        kanji: "逼",
        radicals: "口込田一"
    },
    {
        kanji: "桧",
        radicals: "二木个厶"
    },
    {
        kanji: "姫",
        radicals: "女臣"
    },
    {
        kanji: "媛",
        radicals: "ノ女爪又"
    },
    {
        kanji: "紐",
        radicals: "｜一糸幺小"
    },
    {
        kanji: "百",
        radicals: "一白"
    },
    {
        kanji: "謬",
        radicals: "羽言个冫彡"
    },
    {
        kanji: "俵",
        radicals: "衣化士土二亠"
    },
    {
        kanji: "彪",
        radicals: "卜儿匕厂彡虍"
    },
    {
        kanji: "標",
        radicals: "示二小西木"
    },
    {
        kanji: "氷",
        radicals: "水丶"
    },
    {
        kanji: "漂",
        radicals: "示二小汁西"
    },
    {
        kanji: "瓢",
        radicals: "瓜示二小西"
    },
    {
        kanji: "票",
        radicals: "示二小西"
    },
    {
        kanji: "表",
        radicals: "衣士土二亠"
    },
    {
        kanji: "評",
        radicals: "｜一言二并"
    },
    {
        kanji: "豹",
        radicals: "丶勹豸"
    },
    {
        kanji: "廟",
        radicals: "月十日广"
    },
    {
        kanji: "描",
        radicals: "田扎艾"
    },
    {
        kanji: "病",
        radicals: "一人冂疔"
    },
    {
        kanji: "秒",
        radicals: "ノ禾小"
    },
    {
        kanji: "苗",
        radicals: "田艾"
    },
    {
        kanji: "錨",
        radicals: "金田艾"
    },
    {
        kanji: "鋲",
        radicals: "斤金并ハ"
    },
    {
        kanji: "蒜",
        radicals: "示二小艾"
    },
    {
        kanji: "蛭",
        radicals: "至虫土厶一"
    },
    {
        kanji: "鰭",
        radicals: "魚田日老杰匕"
    },
    {
        kanji: "品",
        radicals: "口品"
    },
    {
        kanji: "彬",
        radicals: "木彡"
    },
    {
        kanji: "斌",
        radicals: "止文弋"
    },
    {
        kanji: "浜",
        radicals: "斤汁ハ一"
    },
    {
        kanji: "瀕",
        radicals: "ノ貝目ハ止汁小頁"
    },
    {
        kanji: "貧",
        radicals: "貝目刀ハ"
    },
    {
        kanji: "賓",
        radicals: "ノ貝目ハ小宀一"
    },
    {
        kanji: "頻",
        radicals: "ノ貝目ハ止小頁"
    },
    {
        kanji: "敏",
        radicals: "母攵毋乞"
    },
    {
        kanji: "瓶",
        radicals: "瓦并二一ノ"
    },
    {
        kanji: "不",
        radicals: "｜ノ一丶"
    },
    {
        kanji: "付",
        radicals: "化寸"
    },
    {
        kanji: "埠",
        radicals: "｜口十土阡"
    },
    {
        kanji: "夫",
        radicals: "人二大亠"
    },
    {
        kanji: "婦",
        radicals: "ヨ巾女冖"
    },
    {
        kanji: "富",
        radicals: "口田宀一"
    },
    {
        kanji: "冨",
        radicals: "口田冖一"
    },
    {
        kanji: "布",
        radicals: "ノ一巾"
    },
    {
        kanji: "府",
        radicals: "化寸广"
    },
    {
        kanji: "怖",
        radicals: "ノ一巾忙"
    },
    {
        kanji: "扶",
        radicals: "人二扎大"
    },
    {
        kanji: "敷",
        radicals: "十田方丶攵乞"
    },
    {
        kanji: "斧",
        radicals: "斤父"
    },
    {
        kanji: "普",
        radicals: "｜一二日并"
    },
    {
        kanji: "浮",
        radicals: "子汁爪"
    },
    {
        kanji: "父",
        radicals: "父"
    },
    {
        kanji: "符",
        radicals: "化寸竹乞"
    },
    {
        kanji: "腐",
        radicals: "化寸肉广"
    },
    {
        kanji: "膚",
        radicals: "月田卜匕厂虍"
    },
    {
        kanji: "芙",
        radicals: "人二艾大"
    },
    {
        kanji: "譜",
        radicals: "｜一言二日并"
    },
    {
        kanji: "負",
        radicals: "貝目ハ勹"
    },
    {
        kanji: "賦",
        radicals: "貝目ハ止弋"
    },
    {
        kanji: "赴",
        radicals: "走土卜"
    },
    {
        kanji: "阜",
        radicals: "阡十口｜"
    },
    {
        kanji: "附",
        radicals: "化寸阡"
    },
    {
        kanji: "侮",
        radicals: "化母毋乞"
    },
    {
        kanji: "撫",
        radicals: "｜ノ一扎杰無乞"
    },
    {
        kanji: "武",
        radicals: "止弋"
    },
    {
        kanji: "舞",
        radicals: "｜ノ一舛二夕無乞"
    },
    {
        kanji: "葡",
        radicals: "十用勹艾丶"
    },
    {
        kanji: "蕪",
        radicals: "｜ノ一杰艾無乞"
    },
    {
        kanji: "部",
        radicals: "口邦立"
    },
    {
        kanji: "封",
        radicals: "寸土"
    },
    {
        kanji: "楓",
        radicals: "風木几虫ノ"
    },
    {
        kanji: "風",
        radicals: "風几虫ノ"
    },
    {
        kanji: "葺",
        radicals: "口耳艾"
    },
    {
        kanji: "蕗",
        radicals: "口足夂艾止"
    },
    {
        kanji: "伏",
        radicals: "化犬"
    },
    {
        kanji: "副",
        radicals: "一刈口田"
    },
    {
        kanji: "復",
        radicals: "日夂彳ノ一人乞"
    },
    {
        kanji: "幅",
        radicals: "一巾口田"
    },
    {
        kanji: "服",
        radicals: "月又卩"
    },
    {
        kanji: "福",
        radicals: "一口田礼"
    },
    {
        kanji: "腹",
        radicals: "月日夂ノ一人乞"
    },
    {
        kanji: "複",
        radicals: "初日夂乞"
    },
    {
        kanji: "覆",
        radicals: "西日夂彳乞"
    },
    {
        kanji: "淵",
        radicals: "｜一汁爿片"
    },
    {
        kanji: "弗",
        radicals: "｜ノ弓"
    },
    {
        kanji: "払",
        radicals: "厶扎"
    },
    {
        kanji: "沸",
        radicals: "｜ノ弓汁"
    },
    {
        kanji: "仏",
        radicals: "化厶"
    },
    {
        kanji: "物",
        radicals: "勿牛勹ノ"
    },
    {
        kanji: "鮒",
        radicals: "化魚寸田杰"
    },
    {
        kanji: "分",
        radicals: "刀ハ"
    },
    {
        kanji: "吻",
        radicals: "勿口勹ノ"
    },
    {
        kanji: "噴",
        radicals: "貝目ハ口十艾"
    },
    {
        kanji: "墳",
        radicals: "貝目ハ十土艾"
    },
    {
        kanji: "憤",
        radicals: "貝目ハ十忙艾"
    },
    {
        kanji: "扮",
        radicals: "刀ハ扎"
    },
    {
        kanji: "焚",
        radicals: "火木"
    },
    {
        kanji: "奮",
        radicals: "大田隹"
    },
    {
        kanji: "粉",
        radicals: "刀并米ハ"
    },
    {
        kanji: "糞",
        radicals: "｜一田二并米井"
    },
    {
        kanji: "紛",
        radicals: "糸幺小刀ハ"
    },
    {
        kanji: "雰",
        radicals: "雨刀ハ"
    },
    {
        kanji: "文",
        radicals: "文"
    },
    {
        kanji: "聞",
        radicals: "耳門"
    },
    {
        kanji: "丙",
        radicals: "一人冂"
    },
    {
        kanji: "併",
        radicals: "｜ノ一化二并廾"
    },
    {
        kanji: "兵",
        radicals: "一斤ハ"
    },
    {
        kanji: "塀",
        radicals: "｜ノ一土二ハ尸廾"
    },
    {
        kanji: "幣",
        radicals: "巾并冂攵乞"
    },
    {
        kanji: "平",
        radicals: "干并"
    },
    {
        kanji: "弊",
        radicals: "｜巾尚并冂廾攵乞"
    },
    {
        kanji: "柄",
        radicals: "一人木冂"
    },
    {
        kanji: "並",
        radicals: "｜一二并"
    },
    {
        kanji: "蔽",
        radicals: "｜巾尚并冂攵艾乞"
    },
    {
        kanji: "閉",
        radicals: "ノ一門亅"
    },
    {
        kanji: "陛",
        radicals: "土比阡"
    },
    {
        kanji: "米",
        radicals: "米"
    },
    {
        kanji: "頁",
        radicals: "貝目ハ頁"
    },
    {
        kanji: "僻",
        radicals: "化口十辛立尸"
    },
    {
        kanji: "壁",
        radicals: "口十辛土立尸"
    },
    {
        kanji: "癖",
        radicals: "口十辛立尸疔"
    },
    {
        kanji: "碧",
        radicals: "王口石白"
    },
    {
        kanji: "別",
        radicals: "刈口力勹"
    },
    {
        kanji: "瞥",
        radicals: "｜巾尚并目冂攵乞"
    },
    {
        kanji: "蔑",
        radicals: "ノ買戈艾"
    },
    {
        kanji: "箆",
        radicals: "竹比冂乞"
    },
    {
        kanji: "偏",
        radicals: "｜一化戸冂冊尸廾"
    },
    {
        kanji: "変",
        radicals: "亠夂"
    },
    {
        kanji: "片",
        radicals: "片"
    },
    {
        kanji: "篇",
        radicals: "｜一戸竹冂冊尸廾乞"
    },
    {
        kanji: "編",
        radicals: "｜一戸糸幺小冂冊尸廾"
    },
    {
        kanji: "辺",
        radicals: "込刀"
    },
    {
        kanji: "返",
        radicals: "込又厂"
    },
    {
        kanji: "遍",
        radicals: "｜一戸込冂冊尸廾"
    },
    {
        kanji: "便",
        radicals: "｜ノ一化日田"
    },
    {
        kanji: "勉",
        radicals: "力免儿勹"
    },
    {
        kanji: "娩",
        radicals: "女免儿勹"
    },
    {
        kanji: "弁",
        radicals: "厶廾"
    },
    {
        kanji: "鞭",
        radicals: "ノ一化革日田"
    },
    {
        kanji: "保",
        radicals: "化口木"
    },
    {
        kanji: "舗",
        radicals: "口十土用个丶"
    },
    {
        kanji: "鋪",
        radicals: "金十用丶"
    },
    {
        kanji: "圃",
        radicals: "十用丶囗"
    },
    {
        kanji: "捕",
        radicals: "十用丶扎"
    },
    {
        kanji: "歩",
        radicals: "ノ止小"
    },
    {
        kanji: "甫",
        radicals: "十用丶"
    },
    {
        kanji: "補",
        radicals: "十初用丶"
    },
    {
        kanji: "輔",
        radicals: "車十用丶"
    },
    {
        kanji: "穂",
        radicals: "禾十心田"
    },
    {
        kanji: "募",
        radicals: "大日力艾"
    },
    {
        kanji: "墓",
        radicals: "大土日艾"
    },
    {
        kanji: "慕",
        radicals: "心大日艾"
    },
    {
        kanji: "戊",
        radicals: "ノ戈"
    },
    {
        kanji: "暮",
        radicals: "大日艾"
    },
    {
        kanji: "母",
        radicals: "母毋"
    },
    {
        kanji: "簿",
        radicals: "十汁寸竹田丶乞"
    },
    {
        kanji: "菩",
        radicals: "口立艾"
    },
    {
        kanji: "倣",
        radicals: "化方攵乞"
    },
    {
        kanji: "俸",
        radicals: "｜一化人大二"
    },
    {
        kanji: "包",
        radicals: "勹已"
    },
    {
        kanji: "呆",
        radicals: "口木"
    },
    {
        kanji: "報",
        radicals: "十辛土又立亠卩"
    },
    {
        kanji: "奉",
        radicals: "｜一人大二"
    },
    {
        kanji: "宝",
        radicals: "王宀丶"
    },
    {
        kanji: "峰",
        radicals: "｜一山夂"
    },
    {
        kanji: "峯",
        radicals: "｜一山夂"
    },
    {
        kanji: "崩",
        radicals: "月山"
    },
    {
        kanji: "庖",
        radicals: "勹已广"
    },
    {
        kanji: "抱",
        radicals: "勹已扎"
    },
    {
        kanji: "捧",
        radicals: "｜一人大二扎"
    },
    {
        kanji: "放",
        radicals: "方攵乞"
    },
    {
        kanji: "方",
        radicals: "方"
    },
    {
        kanji: "朋",
        radicals: "月"
    },
    {
        kanji: "法",
        radicals: "汁土厶"
    },
    {
        kanji: "泡",
        radicals: "汁勹已"
    },
    {
        kanji: "烹",
        radicals: "口亅亠杰"
    },
    {
        kanji: "砲",
        radicals: "口石勹已"
    },
    {
        kanji: "縫",
        radicals: "｜一込糸幺小夂"
    },
    {
        kanji: "胞",
        radicals: "月勹已"
    },
    {
        kanji: "芳",
        radicals: "方艾"
    },
    {
        kanji: "萌",
        radicals: "月日艾"
    },
    {
        kanji: "蓬",
        radicals: "｜一込夂艾"
    },
    {
        kanji: "蜂",
        radicals: "｜一虫夂"
    },
    {
        kanji: "褒",
        radicals: "衣化口小亠"
    },
    {
        kanji: "訪",
        radicals: "言方"
    },
    {
        kanji: "豊",
        radicals: "｜一口豆日并"
    },
    {
        kanji: "邦",
        radicals: "ノ二邦"
    },
    {
        kanji: "鋒",
        radicals: "｜一金夂"
    },
    {
        kanji: "飽",
        radicals: "食勹已"
    },
    {
        kanji: "鳳",
        radicals: "鳥几杰"
    },
    {
        kanji: "鵬",
        radicals: "月鳥杰"
    },
    {
        kanji: "乏",
        radicals: "ノ乙丶亠廴"
    },
    {
        kanji: "亡",
        radicals: "亡亠"
    },
    {
        kanji: "傍",
        radicals: "化并方立亠冖"
    },
    {
        kanji: "剖",
        radicals: "刈口立"
    },
    {
        kanji: "坊",
        radicals: "土方"
    },
    {
        kanji: "妨",
        radicals: "女方"
    },
    {
        kanji: "帽",
        radicals: "巾日目"
    },
    {
        kanji: "忘",
        radicals: "心亡亠"
    },
    {
        kanji: "忙",
        radicals: "亡忙亠"
    },
    {
        kanji: "房",
        radicals: "戸方一尸"
    },
    {
        kanji: "暴",
        radicals: "｜一水二日ハ井"
    },
    {
        kanji: "望",
        radicals: "王亡月"
    },
    {
        kanji: "某",
        radicals: "甘木"
    },
    {
        kanji: "棒",
        radicals: "｜一人木二大"
    },
    {
        kanji: "冒",
        radicals: "日目"
    },
    {
        kanji: "紡",
        radicals: "糸幺小方"
    },
    {
        kanji: "肪",
        radicals: "月方"
    },
    {
        kanji: "膨",
        radicals: "月口十土豆并彡"
    },
    {
        kanji: "謀",
        radicals: "甘言木"
    },
    {
        kanji: "貌",
        radicals: "白儿豸"
    },
    {
        kanji: "貿",
        radicals: "貝目ハ刀厶"
    },
    {
        kanji: "鉾",
        radicals: "牛金厶"
    },
    {
        kanji: "防",
        radicals: "方阡"
    },
    {
        kanji: "吠",
        radicals: "犬口"
    },
    {
        kanji: "頬",
        radicals: "貝目ハ人頁二并大"
    },
    {
        kanji: "北",
        radicals: "匕爿"
    },
    {
        kanji: "僕",
        radicals: "王化并羊大二"
    },
    {
        kanji: "卜",
        radicals: "卜"
    },
    {
        kanji: "墨",
        radicals: "黒土里杰"
    },
    {
        kanji: "撲",
        radicals: "王人并羊扎二大"
    },
    {
        kanji: "朴",
        radicals: "卜木"
    },
    {
        kanji: "牧",
        radicals: "牛攵乞"
    },
    {
        kanji: "睦",
        radicals: "土目儿"
    },
    {
        kanji: "穆",
        radicals: "禾小白彡"
    },
    {
        kanji: "釦",
        radicals: "金口"
    },
    {
        kanji: "勃",
        radicals: "子十力冖"
    },
    {
        kanji: "没",
        radicals: "汁殳几又"
    },
    {
        kanji: "殆",
        radicals: "口厶歹"
    },
    {
        kanji: "堀",
        radicals: "｜山土尸凵"
    },
    {
        kanji: "幌",
        radicals: "巾尚日儿"
    },
    {
        kanji: "奔",
        radicals: "ノ一十大廾"
    },
    {
        kanji: "本",
        radicals: "一木"
    },
    {
        kanji: "翻",
        radicals: "羽田釆米冫"
    },
    {
        kanji: "凡",
        radicals: "丶几"
    },
    {
        kanji: "盆",
        radicals: "皿刀ハ"
    },
    {
        kanji: "摩",
        radicals: "手木广麻"
    },
    {
        kanji: "磨",
        radicals: "口石木广麻"
    },
    {
        kanji: "魔",
        radicals: "鬼田木儿匕广麻厶"
    },
    {
        kanji: "麻",
        radicals: "木广麻"
    },
    {
        kanji: "埋",
        radicals: "土里"
    },
    {
        kanji: "妹",
        radicals: "｜女二ハ木亠"
    },
    {
        kanji: "昧",
        radicals: "｜二日ハ木亠"
    },
    {
        kanji: "枚",
        radicals: "木攵乞"
    },
    {
        kanji: "毎",
        radicals: "母毋乞"
    },
    {
        kanji: "哩",
        radicals: "口里"
    },
    {
        kanji: "槙",
        radicals: "十ハ木目"
    },
    {
        kanji: "幕",
        radicals: "巾大日艾"
    },
    {
        kanji: "膜",
        radicals: "月大日艾"
    },
    {
        kanji: "枕",
        radicals: "ノ乙木冖尢"
    },
    {
        kanji: "鮪",
        radicals: "ノ一魚月田杰"
    },
    {
        kanji: "柾",
        radicals: "一止木"
    },
    {
        kanji: "鱒",
        radicals: "魚寸田酉并杰"
    },
    {
        kanji: "桝",
        radicals: "舛木夕"
    },
    {
        kanji: "亦",
        radicals: "ノハ亅亠"
    },
    {
        kanji: "俣",
        radicals: "化口大二一"
    },
    {
        kanji: "又",
        radicals: "又"
    },
    {
        kanji: "抹",
        radicals: "｜一ハ木亠扎"
    },
    {
        kanji: "末",
        radicals: "｜一ハ木亠"
    },
    {
        kanji: "沫",
        radicals: "｜汁二ハ木亠"
    },
    {
        kanji: "迄",
        radicals: "乙込乞"
    },
    {
        kanji: "侭",
        radicals: "化尸丶"
    },
    {
        kanji: "繭",
        radicals: "糸幺小虫風冂艾"
    },
    {
        kanji: "麿",
        radicals: "口木广麻ノ"
    },
    {
        kanji: "万",
        radicals: "｜ノ一"
    },
    {
        kanji: "慢",
        radicals: "日買忙又"
    },
    {
        kanji: "満",
        radicals: "｜一汁二冂山艾"
    },
    {
        kanji: "漫",
        radicals: "汁日買又"
    },
    {
        kanji: "蔓",
        radicals: "日買又艾"
    },
    {
        kanji: "味",
        radicals: "｜口二ハ木亠"
    },
    {
        kanji: "未",
        radicals: "｜二ハ木亠"
    },
    {
        kanji: "魅",
        radicals: "｜鬼田二ハ木亠儿匕厶"
    },
    {
        kanji: "巳",
        radicals: "已"
    },
    {
        kanji: "箕",
        radicals: "甘竹ハ乞"
    },
    {
        kanji: "岬",
        radicals: "｜山日田凵"
    },
    {
        kanji: "密",
        radicals: "ノ山心丶宀"
    },
    {
        kanji: "蜜",
        radicals: "ノ心虫丶宀"
    },
    {
        kanji: "湊",
        radicals: "一汁大二人"
    },
    {
        kanji: "蓑",
        radicals: "衣一亠艾"
    },
    {
        kanji: "稔",
        radicals: "禾心个一"
    },
    {
        kanji: "脈",
        radicals: "斤月厂"
    },
    {
        kanji: "妙",
        radicals: "ノ女小"
    },
    {
        kanji: "粍",
        radicals: "米毛"
    },
    {
        kanji: "民",
        radicals: "口氏尸"
    },
    {
        kanji: "眠",
        radicals: "口氏目尸"
    },
    {
        kanji: "務",
        radicals: "矛力攵"
    },
    {
        kanji: "夢",
        radicals: "買夕冖艾"
    },
    {
        kanji: "無",
        radicals: "｜ノ一杰無乞"
    },
    {
        kanji: "牟",
        radicals: "牛厶"
    },
    {
        kanji: "矛",
        radicals: "矛マ"
    },
    {
        kanji: "霧",
        radicals: "雨矛力攵"
    },
    {
        kanji: "鵡",
        radicals: "止鳥弋戈杰"
    },
    {
        kanji: "椋",
        radicals: "口小木亠"
    },
    {
        kanji: "婿",
        radicals: "月女疋"
    },
    {
        kanji: "娘",
        radicals: "艮女"
    },
    {
        kanji: "冥",
        radicals: "日ハ亠冖"
    },
    {
        kanji: "名",
        radicals: "口夕"
    },
    {
        kanji: "命",
        radicals: "口个卩一"
    },
    {
        kanji: "明",
        radicals: "月日"
    },
    {
        kanji: "盟",
        radicals: "月皿日"
    },
    {
        kanji: "迷",
        radicals: "込米"
    },
    {
        kanji: "銘",
        radicals: "金口夕"
    },
    {
        kanji: "鳴",
        radicals: "口鳥杰"
    },
    {
        kanji: "姪",
        radicals: "至女土厶"
    },
    {
        kanji: "牝",
        radicals: "牛匕"
    },
    {
        kanji: "滅",
        radicals: "ノ火汁戈"
    },
    {
        kanji: "免",
        radicals: "｜一勹口儿免"
    },
    {
        kanji: "棉",
        radicals: "巾白木"
    },
    {
        kanji: "綿",
        radicals: "巾糸幺小白"
    },
    {
        kanji: "緬",
        radicals: "糸幺小面"
    },
    {
        kanji: "面",
        radicals: "面"
    },
    {
        kanji: "麺",
        radicals: "麦面夂土亠二"
    },
    {
        kanji: "摸",
        radicals: "大日扎艾"
    },
    {
        kanji: "模",
        radicals: "大日木艾"
    },
    {
        kanji: "茂",
        radicals: "ノ戈艾"
    },
    {
        kanji: "妄",
        radicals: "亡女亠"
    },
    {
        kanji: "孟",
        radicals: "皿子"
    },
    {
        kanji: "毛",
        radicals: "毛"
    },
    {
        kanji: "猛",
        radicals: "皿子犯"
    },
    {
        kanji: "盲",
        radicals: "亡目亠"
    },
    {
        kanji: "網",
        radicals: "亡糸幺小并冂"
    },
    {
        kanji: "耗",
        radicals: "｜士ハ毛木耒ノ"
    },
    {
        kanji: "蒙",
        radicals: "冖艾豕"
    },
    {
        kanji: "儲",
        radicals: "化言日老"
    },
    {
        kanji: "木",
        radicals: "木"
    },
    {
        kanji: "黙",
        radicals: "犬里杰黒"
    },
    {
        kanji: "目",
        radicals: "目"
    },
    {
        kanji: "杢",
        radicals: "工木"
    },
    {
        kanji: "勿",
        radicals: "ノ勹勿"
    },
    {
        kanji: "餅",
        radicals: "｜ノ一食二并廾"
    },
    {
        kanji: "尤",
        radicals: "丶尢尤"
    },
    {
        kanji: "戻",
        radicals: "戸大一尸"
    },
    {
        kanji: "籾",
        radicals: "刀米丶"
    },
    {
        kanji: "貰",
        radicals: "貝目ハ世"
    },
    {
        kanji: "問",
        radicals: "口門"
    },
    {
        kanji: "悶",
        radicals: "心門"
    },
    {
        kanji: "紋",
        radicals: "糸幺小文"
    },
    {
        kanji: "門",
        radicals: "門"
    },
    {
        kanji: "匁",
        radicals: "ノ勹丶"
    },
    {
        kanji: "也",
        radicals: "｜乙匕也"
    },
    {
        kanji: "冶",
        radicals: "口冫厶"
    },
    {
        kanji: "夜",
        radicals: "化夕亠"
    },
    {
        kanji: "爺",
        radicals: "耳父邦"
    },
    {
        kanji: "耶",
        radicals: "耳邦"
    },
    {
        kanji: "野",
        radicals: "矛里亅"
    },
    {
        kanji: "弥",
        radicals: "ノ弓亅小乞"
    },
    {
        kanji: "矢",
        radicals: "ノ大一矢乞"
    },
    {
        kanji: "厄",
        radicals: "卩厂"
    },
    {
        kanji: "役",
        radicals: "彳殳几又"
    },
    {
        kanji: "約",
        radicals: "糸幺小丶勹"
    },
    {
        kanji: "薬",
        radicals: "日木冫艾"
    },
    {
        kanji: "訳",
        radicals: "言尸丶"
    },
    {
        kanji: "躍",
        radicals: "ヨ口足隹止"
    },
    {
        kanji: "靖",
        radicals: "月青土二立亠"
    },
    {
        kanji: "柳",
        radicals: "木卩"
    },
    {
        kanji: "薮",
        radicals: "女米夂艾攵乞"
    },
    {
        kanji: "鑓",
        radicals: "｜一金口込"
    },
    {
        kanji: "愉",
        radicals: "刈月忙个一"
    },
    {
        kanji: "愈",
        radicals: "刈月心个一"
    },
    {
        kanji: "油",
        radicals: "｜汁日田"
    },
    {
        kanji: "癒",
        radicals: "刈月心个疔"
    },
    {
        kanji: "諭",
        radicals: "刈月言个一"
    },
    {
        kanji: "輸",
        radicals: "刈月車个一"
    },
    {
        kanji: "唯",
        radicals: "口隹"
    },
    {
        kanji: "佑",
        radicals: "ノ一化口"
    },
    {
        kanji: "優",
        radicals: "一化心白冖夂自"
    },
    {
        kanji: "勇",
        radicals: "田力マ"
    },
    {
        kanji: "友",
        radicals: "ノ一又"
    },
    {
        kanji: "宥",
        radicals: "ノ一月宀"
    },
    {
        kanji: "幽",
        radicals: "｜凵幺"
    },
    {
        kanji: "悠",
        radicals: "｜化心夂攵乞"
    },
    {
        kanji: "憂",
        radicals: "一自心冖夂白"
    },
    {
        kanji: "揖",
        radicals: "口耳扎"
    },
    {
        kanji: "有",
        radicals: "ノ一月"
    },
    {
        kanji: "柚",
        radicals: "｜日木田"
    },
    {
        kanji: "湧",
        radicals: "汁田力マ"
    },
    {
        kanji: "涌",
        radicals: "汁用マ"
    },
    {
        kanji: "猶",
        radicals: "酉并犯"
    },
    {
        kanji: "猷",
        radicals: "并酉犬"
    },
    {
        kanji: "由",
        radicals: "｜日田"
    },
    {
        kanji: "祐",
        radicals: "ノ一口礼"
    },
    {
        kanji: "裕",
        radicals: "口初谷ハ个"
    },
    {
        kanji: "誘",
        radicals: "乃禾言ノ"
    },
    {
        kanji: "遊",
        radicals: "込子方乞"
    },
    {
        kanji: "邑",
        radicals: "口巴"
    },
    {
        kanji: "郵",
        radicals: "｜ノ一邦"
    },
    {
        kanji: "雄",
        radicals: "ノ一厶隹"
    },
    {
        kanji: "融",
        radicals: "口虫儿冂鬲"
    },
    {
        kanji: "夕",
        radicals: "夕"
    },
    {
        kanji: "予",
        radicals: "マ一亅"
    },
    {
        kanji: "余",
        radicals: "一二ハ个亅示小"
    },
    {
        kanji: "与",
        radicals: "勹一卜"
    },
    {
        kanji: "誉",
        radicals: "一言尚并"
    },
    {
        kanji: "輿",
        radicals: "臼車ハ"
    },
    {
        kanji: "預",
        radicals: "貝目ハ欠マ一亅頁"
    },
    {
        kanji: "傭",
        radicals: "ヨ化用广聿"
    },
    {
        kanji: "幼",
        radicals: "力幺"
    },
    {
        kanji: "妖",
        radicals: "ノ女大"
    },
    {
        kanji: "容",
        radicals: "穴口谷ハ个宀"
    },
    {
        kanji: "庸",
        radicals: "ヨ用广聿"
    },
    {
        kanji: "揚",
        radicals: "一日扎勿"
    },
    {
        kanji: "揺",
        radicals: "干爪凵扎"
    },
    {
        kanji: "擁",
        radicals: "亠扎隹幺"
    },
    {
        kanji: "曜",
        radicals: "ヨ日隹"
    },
    {
        kanji: "楊",
        radicals: "一日木勿"
    },
    {
        kanji: "様",
        radicals: "王水并木羊"
    },
    {
        kanji: "洋",
        radicals: "王汁并羊"
    },
    {
        kanji: "溶",
        radicals: "穴口汁谷ハ个宀"
    },
    {
        kanji: "熔",
        radicals: "火穴口谷ハ个宀"
    },
    {
        kanji: "用",
        radicals: "用"
    },
    {
        kanji: "窯",
        radicals: "王穴并羊儿宀杰"
    },
    {
        kanji: "羊",
        radicals: "王并羊"
    },
    {
        kanji: "耀",
        radicals: "ヨ尚儿隹"
    },
    {
        kanji: "葉",
        radicals: "木世艾"
    },
    {
        kanji: "蓉",
        radicals: "穴口谷ハ个宀艾"
    },
    {
        kanji: "要",
        radicals: "女西"
    },
    {
        kanji: "謡",
        radicals: "干言爪凵"
    },
    {
        kanji: "踊",
        radicals: "口足用マ止"
    },
    {
        kanji: "遥",
        radicals: "干込爪凵"
    },
    {
        kanji: "陽",
        radicals: "一日阡勿"
    },
    {
        kanji: "養",
        radicals: "王食并羊"
    },
    {
        kanji: "慾",
        radicals: "欠口心谷ハ个"
    },
    {
        kanji: "抑",
        radicals: "卩扎"
    },
    {
        kanji: "欲",
        radicals: "欠口谷ハ个"
    },
    {
        kanji: "沃",
        radicals: "ノ汁大"
    },
    {
        kanji: "浴",
        radicals: "口汁谷ハ个"
    },
    {
        kanji: "翌",
        radicals: "羽立冫"
    },
    {
        kanji: "翼",
        radicals: "｜一羽田二ハ冫井"
    },
    {
        kanji: "淀",
        radicals: "汁疋宀"
    },
    {
        kanji: "羅",
        radicals: "糸幺小買隹"
    },
    {
        kanji: "螺",
        radicals: "糸幺小虫田"
    },
    {
        kanji: "裸",
        radicals: "初田木"
    },
    {
        kanji: "来",
        radicals: "｜二米亠木"
    },
    {
        kanji: "莱",
        radicals: "｜二米亠艾木"
    },
    {
        kanji: "頼",
        radicals: "｜貝目口ハ頁木"
    },
    {
        kanji: "雷",
        radicals: "雨田"
    },
    {
        kanji: "洛",
        radicals: "口汁夂"
    },
    {
        kanji: "絡",
        radicals: "口糸幺小夂"
    },
    {
        kanji: "落",
        radicals: "口汁夂艾"
    },
    {
        kanji: "酪",
        radicals: "口酉夂"
    },
    {
        kanji: "乱",
        radicals: "乙口舌"
    },
    {
        kanji: "卵",
        radicals: "ノ卜丶卩"
    },
    {
        kanji: "嵐",
        radicals: "山風"
    },
    {
        kanji: "欄",
        radicals: "｜一日木門田"
    },
    {
        kanji: "濫",
        radicals: "ノ皿汁臣二乞"
    },
    {
        kanji: "藍",
        radicals: "ノ皿臣二艾乞"
    },
    {
        kanji: "蘭",
        radicals: "｜一日木門艾"
    },
    {
        kanji: "覧",
        radicals: "ノ見臣二乞"
    },
    {
        kanji: "利",
        radicals: "禾刈"
    },
    {
        kanji: "吏",
        radicals: "ノ一口丶"
    },
    {
        kanji: "履",
        radicals: "日夂尸彳乞"
    },
    {
        kanji: "李",
        radicals: "子木"
    },
    {
        kanji: "梨",
        radicals: "禾刈木"
    },
    {
        kanji: "理",
        radicals: "王里"
    },
    {
        kanji: "璃",
        radicals: "王亠凵禹"
    },
    {
        kanji: "痢",
        radicals: "禾刈疔"
    },
    {
        kanji: "裏",
        radicals: "衣里亠"
    },
    {
        kanji: "裡",
        radicals: "初里"
    },
    {
        kanji: "里",
        radicals: "里"
    },
    {
        kanji: "離",
        radicals: "亠凵禹隹"
    },
    {
        kanji: "陸",
        radicals: "土儿阡"
    },
    {
        kanji: "律",
        radicals: "彳聿"
    },
    {
        kanji: "率",
        radicals: "玄十亠冫幺"
    },
    {
        kanji: "立",
        radicals: "立"
    },
    {
        kanji: "葎",
        radicals: "彳聿艾"
    },
    {
        kanji: "掠",
        radicals: "口小亠扎"
    },
    {
        kanji: "略",
        radicals: "口田夂"
    },
    {
        kanji: "劉",
        radicals: "刈金厶"
    },
    {
        kanji: "流",
        radicals: "汁川亠厶"
    },
    {
        kanji: "溜",
        radicals: "汁刀厶田"
    },
    {
        kanji: "琉",
        radicals: "王川亠厶"
    },
    {
        kanji: "留",
        radicals: "田刀厶"
    },
    {
        kanji: "硫",
        radicals: "口石川亠厶"
    },
    {
        kanji: "粒",
        radicals: "米立"
    },
    {
        kanji: "隆",
        radicals: "生夂阡"
    },
    {
        kanji: "竜",
        radicals: "立竜田乙"
    },
    {
        kanji: "龍",
        radicals: "月立"
    },
    {
        kanji: "侶",
        radicals: "化口ノ"
    },
    {
        kanji: "慮",
        radicals: "心田卜匕厂虍"
    },
    {
        kanji: "旅",
        radicals: "ノ方乞"
    },
    {
        kanji: "虜",
        radicals: "田卜力匕厂虍"
    },
    {
        kanji: "了",
        radicals: "一亅"
    },
    {
        kanji: "亮",
        radicals: "口亠儿冖"
    },
    {
        kanji: "僚",
        radicals: "化小日大"
    },
    {
        kanji: "両",
        radicals: "｜一冂山"
    },
    {
        kanji: "凌",
        radicals: "土儿冫夂"
    },
    {
        kanji: "寮",
        radicals: "小日并大宀"
    },
    {
        kanji: "料",
        radicals: "斗米"
    },
    {
        kanji: "梁",
        radicals: "汁刀木丶"
    },
    {
        kanji: "涼",
        radicals: "口汁小亠"
    },
    {
        kanji: "猟",
        radicals: "尚犯用几"
    },
    {
        kanji: "療",
        radicals: "小日并大疔"
    },
    {
        kanji: "瞭",
        radicals: "小日并目大"
    },
    {
        kanji: "稜",
        radicals: "禾土儿夂"
    },
    {
        kanji: "糧",
        radicals: "一日米里"
    },
    {
        kanji: "良",
        radicals: "艮"
    },
    {
        kanji: "諒",
        radicals: "言口小亠"
    },
    {
        kanji: "遼",
        radicals: "込小日并大"
    },
    {
        kanji: "量",
        radicals: "一日里"
    },
    {
        kanji: "陵",
        radicals: "土儿夂阡"
    },
    {
        kanji: "領",
        radicals: "貝目ハ頁个卩一"
    },
    {
        kanji: "力",
        radicals: "力"
    },
    {
        kanji: "緑",
        radicals: "ヨ糸幺小水隶"
    },
    {
        kanji: "倫",
        radicals: "｜一化个亅冊廾"
    },
    {
        kanji: "厘",
        radicals: "里厂"
    },
    {
        kanji: "林",
        radicals: "木"
    },
    {
        kanji: "淋",
        radicals: "汁木"
    },
    {
        kanji: "燐",
        radicals: "火舛米夕"
    },
    {
        kanji: "琳",
        radicals: "王木"
    },
    {
        kanji: "臨",
        radicals: "ノ口臣品一人乞"
    },
    {
        kanji: "輪",
        radicals: "｜一車个冊廾"
    },
    {
        kanji: "隣",
        radicals: "舛米夕阡"
    },
    {
        kanji: "鱗",
        radicals: "魚舛田米夕杰"
    },
    {
        kanji: "麟",
        radicals: "鹿舛比米夕广"
    },
    {
        kanji: "瑠",
        radicals: "王田刀厶"
    },
    {
        kanji: "塁",
        radicals: "田土冫"
    },
    {
        kanji: "涙",
        radicals: "戸汁大一尸"
    },
    {
        kanji: "累",
        radicals: "糸幺小田"
    },
    {
        kanji: "類",
        radicals: "貝目ハ大米頁"
    },
    {
        kanji: "令",
        radicals: "个卩一"
    },
    {
        kanji: "伶",
        radicals: "个卩一化"
    },
    {
        kanji: "例",
        radicals: "化刈歹"
    },
    {
        kanji: "冷",
        radicals: "个冫卩一"
    },
    {
        kanji: "励",
        radicals: "斤力厂"
    },
    {
        kanji: "嶺",
        radicals: "貝目ハ山頁个卩一"
    },
    {
        kanji: "怜",
        radicals: "忙个卩一"
    },
    {
        kanji: "玲",
        radicals: "王个卩一"
    },
    {
        kanji: "礼",
        radicals: "乙礼"
    },
    {
        kanji: "苓",
        radicals: "个卩艾一"
    },
    {
        kanji: "鈴",
        radicals: "金个卩一"
    },
    {
        kanji: "隷",
        radicals: "ヨ士小水二隶示"
    },
    {
        kanji: "零",
        radicals: "雨个卩一"
    },
    {
        kanji: "霊",
        radicals: "｜一雨二"
    },
    {
        kanji: "麗",
        radicals: "一鹿比冂广"
    },
    {
        kanji: "齢",
        radicals: "止歯米个凵卩一"
    },
    {
        kanji: "暦",
        radicals: "日麻木厂广"
    },
    {
        kanji: "歴",
        radicals: "止麻木厂广"
    },
    {
        kanji: "列",
        radicals: "刈歹"
    },
    {
        kanji: "劣",
        radicals: "ノ小力"
    },
    {
        kanji: "烈",
        radicals: "刈杰歹"
    },
    {
        kanji: "裂",
        radicals: "衣刈歹亠"
    },
    {
        kanji: "廉",
        radicals: "｜ヨハ广并"
    },
    {
        kanji: "恋",
        radicals: "心ハ亠"
    },
    {
        kanji: "憐",
        radicals: "舛米忙夕"
    },
    {
        kanji: "漣",
        radicals: "込車汁"
    },
    {
        kanji: "煉",
        radicals: "｜一火日ハ木田"
    },
    {
        kanji: "簾",
        radicals: "｜ヨ竹ハ广乞"
    },
    {
        kanji: "練",
        radicals: "｜糸幺小日ハ木田"
    },
    {
        kanji: "聯",
        radicals: "耳幺"
    },
    {
        kanji: "蓮",
        radicals: "込車艾"
    },
    {
        kanji: "連",
        radicals: "込車"
    },
    {
        kanji: "錬",
        radicals: "｜一金日木田并ハ"
    },
    {
        kanji: "呂",
        radicals: "口ノ"
    },
    {
        kanji: "魯",
        radicals: "魚田日杰"
    },
    {
        kanji: "櫓",
        radicals: "魚田日木杰"
    },
    {
        kanji: "炉",
        radicals: "火戸一尸"
    },
    {
        kanji: "賂",
        radicals: "貝目ハ口夂"
    },
    {
        kanji: "路",
        radicals: "口足夂止"
    },
    {
        kanji: "露",
        radicals: "雨口足夂止"
    },
    {
        kanji: "労",
        radicals: "尚力冖"
    },
    {
        kanji: "婁",
        radicals: "｜一口女"
    },
    {
        kanji: "廊",
        radicals: "艮邦广"
    },
    {
        kanji: "弄",
        radicals: "王廾"
    },
    {
        kanji: "朗",
        radicals: "月艮"
    },
    {
        kanji: "楼",
        radicals: "女米木"
    },
    {
        kanji: "榔",
        radicals: "艮邦木"
    },
    {
        kanji: "浪",
        radicals: "艮汁"
    },
    {
        kanji: "漏",
        radicals: "雨汁尸"
    },
    {
        kanji: "牢",
        radicals: "牛宀"
    },
    {
        kanji: "狼",
        radicals: "艮犯"
    },
    {
        kanji: "篭",
        radicals: "竹立竜乞"
    },
    {
        kanji: "老",
        radicals: "老匕"
    },
    {
        kanji: "聾",
        radicals: "月耳立"
    },
    {
        kanji: "蝋",
        radicals: "｜一尚虫用几"
    },
    {
        kanji: "郎",
        radicals: "艮邦"
    },
    {
        kanji: "六",
        radicals: "ハ亠"
    },
    {
        kanji: "麓",
        radicals: "鹿比木广"
    },
    {
        kanji: "禄",
        radicals: "ヨ水礼隶"
    },
    {
        kanji: "肋",
        radicals: "月力"
    },
    {
        kanji: "録",
        radicals: "ヨ金水隶"
    },
    {
        kanji: "論",
        radicals: "｜一言个冊廾"
    },
    {
        kanji: "倭",
        radicals: "化禾女"
    },
    {
        kanji: "和",
        radicals: "禾口"
    },
    {
        kanji: "話",
        radicals: "言口舌"
    },
    {
        kanji: "歪",
        radicals: "｜ノ一止丶"
    },
    {
        kanji: "賄",
        radicals: "ノ一貝目ハ月"
    },
    {
        kanji: "脇",
        radicals: "月力"
    },
    {
        kanji: "惑",
        radicals: "口心戈"
    },
    {
        kanji: "枠",
        radicals: "九十木"
    },
    {
        kanji: "鷲",
        radicals: "口小鳥丶亠尤杰尢"
    },
    {
        kanji: "亙",
        radicals: "ノ一二丶"
    },
    {
        kanji: "亘",
        radicals: "一二日"
    },
    {
        kanji: "鰐",
        radicals: "魚口田二杰勹"
    },
    {
        kanji: "詫",
        radicals: "ノ乙言宀"
    },
    {
        kanji: "藁",
        radicals: "口高木亠冂艾"
    },
    {
        kanji: "蕨",
        radicals: "欠并厂屮艾"
    },
    {
        kanji: "椀",
        radicals: "木夕卩宀"
    },
    {
        kanji: "湾",
        radicals: "弓汁亠"
    },
    {
        kanji: "碗",
        radicals: "口石夕卩宀"
    },
    {
        kanji: "腕",
        radicals: "月夕卩宀"
    },
    {
        kanji: "弌",
        radicals: "一弋"
    },
    {
        kanji: "丐",
        radicals: "一弓止疋"
    },
    {
        kanji: "丕",
        radicals: "｜ノ一丶"
    },
    {
        kanji: "个",
        radicals: "｜个"
    },
    {
        kanji: "丱",
        radicals: "｜ノ丶"
    },
    {
        kanji: "丶",
        radicals: "丶"
    },
    {
        kanji: "丼",
        radicals: "｜ノ二丶廾井"
    },
    {
        kanji: "丿",
        radicals: "ノ"
    },
    {
        kanji: "乂",
        radicals: "ノ丶"
    },
    {
        kanji: "乖",
        radicals: "ノ十匕爿"
    },
    {
        kanji: "乘",
        radicals: "ノ十ハ匕爿禾"
    },
    {
        kanji: "亂",
        radicals: "乙爪冂厶"
    },
    {
        kanji: "亅",
        radicals: "亅"
    },
    {
        kanji: "豫",
        radicals: "勹口｜矛亅豕マ"
    },
    {
        kanji: "亊",
        radicals: "ヨ一并亅"
    },
    {
        kanji: "舒",
        radicals: "干口舌矛个亅マ"
    },
    {
        kanji: "弍",
        radicals: "二弋"
    },
    {
        kanji: "于",
        radicals: "二亅"
    },
    {
        kanji: "亞",
        radicals: "一二"
    },
    {
        kanji: "亟",
        radicals: "口二又"
    },
    {
        kanji: "亠",
        radicals: "亠"
    },
    {
        kanji: "亢",
        radicals: "亠几"
    },
    {
        kanji: "亰",
        radicals: "小日亠"
    },
    {
        kanji: "亳",
        radicals: "ノ一乙口亠冖"
    },
    {
        kanji: "亶",
        radicals: "一口日亠囗"
    },
    {
        kanji: "从",
        radicals: "人"
    },
    {
        kanji: "仍",
        radicals: "ノ化乃"
    },
    {
        kanji: "仄",
        radicals: "人厂"
    },
    {
        kanji: "仆",
        radicals: "化卜"
    },
    {
        kanji: "仂",
        radicals: "化力"
    },
    {
        kanji: "仗",
        radicals: "ノ化一丶"
    },
    {
        kanji: "仞",
        radicals: "化刀丶"
    },
    {
        kanji: "仭",
        radicals: "化刀丶"
    },
    {
        kanji: "仟",
        radicals: "ノ化十"
    },
    {
        kanji: "价",
        radicals: "儿化个"
    },
    {
        kanji: "伉",
        radicals: "化亠几"
    },
    {
        kanji: "佚",
        radicals: "ノ化人大二"
    },
    {
        kanji: "估",
        radicals: "化口十"
    },
    {
        kanji: "佛",
        radicals: "｜ノ化弓"
    },
    {
        kanji: "佝",
        radicals: "化口勹"
    },
    {
        kanji: "佗",
        radicals: "化匕宀"
    },
    {
        kanji: "佇",
        radicals: "化亅宀一"
    },
    {
        kanji: "佶",
        radicals: "化口士"
    },
    {
        kanji: "侈",
        radicals: "化夕"
    },
    {
        kanji: "侏",
        radicals: "ノ化牛ハ木"
    },
    {
        kanji: "侘",
        radicals: "ノ乙化宀"
    },
    {
        kanji: "佻",
        radicals: "化儿冫"
    },
    {
        kanji: "佩",
        radicals: "化巾几一"
    },
    {
        kanji: "佰",
        radicals: "化白一"
    },
    {
        kanji: "侑",
        radicals: "ノ一化月"
    },
    {
        kanji: "佯",
        radicals: "王化并羊"
    },
    {
        kanji: "來",
        radicals: "｜一十人ハ木"
    },
    {
        kanji: "侖",
        radicals: "个冂冊廾一"
    },
    {
        kanji: "儘",
        radicals: "ヨ化皿杰"
    },
    {
        kanji: "俔",
        radicals: "化見"
    },
    {
        kanji: "俟",
        radicals: "化矢厶乞"
    },
    {
        kanji: "俎",
        radicals: "人目"
    },
    {
        kanji: "俘",
        radicals: "化子爪"
    },
    {
        kanji: "俛",
        radicals: "化免儿勹"
    },
    {
        kanji: "俑",
        radicals: "化用マ"
    },
    {
        kanji: "俚",
        radicals: "化里"
    },
    {
        kanji: "俐",
        radicals: "化禾刈"
    },
    {
        kanji: "俤",
        radicals: "｜ノ化弓并"
    },
    {
        kanji: "俥",
        radicals: "化車"
    },
    {
        kanji: "倚",
        radicals: "化口大亅一"
    },
    {
        kanji: "倨",
        radicals: "化口十尸"
    },
    {
        kanji: "倔",
        radicals: "｜化山尸"
    },
    {
        kanji: "倪",
        radicals: "臼化儿"
    },
    {
        kanji: "倥",
        radicals: "化穴工儿宀"
    },
    {
        kanji: "倅",
        radicals: "化十人亠"
    },
    {
        kanji: "伜",
        radicals: "九化十"
    },
    {
        kanji: "俶",
        radicals: "化小卜又"
    },
    {
        kanji: "倡",
        radicals: "化日"
    },
    {
        kanji: "倩",
        radicals: "化月青土二亠"
    },
    {
        kanji: "倬",
        radicals: "化十日卜曰"
    },
    {
        kanji: "俾",
        radicals: "化十田ノ"
    },
    {
        kanji: "俯",
        radicals: "化寸广"
    },
    {
        kanji: "們",
        radicals: "化門"
    },
    {
        kanji: "倆",
        radicals: "｜化人冂"
    },
    {
        kanji: "偃",
        radicals: "化女日匚"
    },
    {
        kanji: "假",
        radicals: "｜化又"
    },
    {
        kanji: "會",
        radicals: "日買个一"
    },
    {
        kanji: "偕",
        radicals: "化白比"
    },
    {
        kanji: "偐",
        radicals: "化并立亠厂彡"
    },
    {
        kanji: "偈",
        radicals: "化日勹匕人一｜"
    },
    {
        kanji: "做",
        radicals: "化口十攵乞"
    },
    {
        kanji: "偖",
        radicals: "化日老"
    },
    {
        kanji: "偬",
        radicals: "丶化心勿"
    },
    {
        kanji: "偸",
        radicals: "化刈月个一"
    },
    {
        kanji: "傀",
        radicals: "化鬼田儿匕厶"
    },
    {
        kanji: "傚",
        radicals: "化父亠攵乞"
    },
    {
        kanji: "傅",
        radicals: "化寸田丶"
    },
    {
        kanji: "傴",
        radicals: "化口匚品"
    },
    {
        kanji: "傲",
        radicals: "化土方攵亠二乞"
    },
    {
        kanji: "僉",
        radicals: "口人个一"
    },
    {
        kanji: "僊",
        radicals: "化西大已"
    },
    {
        kanji: "傳",
        radicals: "化寸田厶十"
    },
    {
        kanji: "僂",
        radicals: "化十女"
    },
    {
        kanji: "僖",
        radicals: "化口士十豆并"
    },
    {
        kanji: "僞",
        radicals: "化爪杰"
    },
    {
        kanji: "僥",
        radicals: "化土儿"
    },
    {
        kanji: "僭",
        radicals: "化日亠无"
    },
    {
        kanji: "僣",
        radicals: "化日二大"
    },
    {
        kanji: "僮",
        radicals: "化里立"
    },
    {
        kanji: "價",
        radicals: "化貝目ハ西"
    },
    {
        kanji: "僵",
        radicals: "一化田二"
    },
    {
        kanji: "儉",
        radicals: "化口人个一"
    },
    {
        kanji: "儁",
        radicals: "化隹"
    },
    {
        kanji: "儂",
        radicals: "｜化辰日衣"
    },
    {
        kanji: "儖",
        radicals: "化皿臣二乞"
    },
    {
        kanji: "儕",
        radicals: "化刀亠齊氏廾"
    },
    {
        kanji: "儔",
        radicals: "化口工士寸"
    },
    {
        kanji: "儚",
        radicals: "化買夕冖艾"
    },
    {
        kanji: "儡",
        radicals: "化田"
    },
    {
        kanji: "儺",
        radicals: "化艾隹二大井"
    },
    {
        kanji: "儷",
        radicals: "化鹿比冂广"
    },
    {
        kanji: "儼",
        radicals: "化口耳厂攵乞"
    },
    {
        kanji: "儻",
        radicals: "化口黒尚里冖杰"
    },
    {
        kanji: "儿",
        radicals: "儿"
    },
    {
        kanji: "兀",
        radicals: "一儿"
    },
    {
        kanji: "兒",
        radicals: "臼儿"
    },
    {
        kanji: "兌",
        radicals: "口并儿"
    },
    {
        kanji: "兔",
        radicals: "免丶儿勹"
    },
    {
        kanji: "兢",
        radicals: "口十儿"
    },
    {
        kanji: "竸",
        radicals: "音日立儿"
    },
    {
        kanji: "兩",
        radicals: "｜一入冂"
    },
    {
        kanji: "兪",
        radicals: "月入个一"
    },
    {
        kanji: "兮",
        radicals: "弓ハ"
    },
    {
        kanji: "冀",
        radicals: "田二ハ匕爿"
    },
    {
        kanji: "冂",
        radicals: "冂"
    },
    {
        kanji: "囘",
        radicals: "冂已"
    },
    {
        kanji: "册",
        radicals: "一冂"
    },
    {
        kanji: "冉",
        radicals: "｜一冂十"
    },
    {
        kanji: "冏",
        radicals: "口儿冂"
    },
    {
        kanji: "冑",
        radicals: "月田二冂"
    },
    {
        kanji: "冓",
        radicals: "｜一冂二十"
    },
    {
        kanji: "冕",
        radicals: "月免二儿冂勹"
    },
    {
        kanji: "冖",
        radicals: "冖"
    },
    {
        kanji: "冤",
        radicals: "免丶冖儿勹"
    },
    {
        kanji: "冦",
        radicals: "元卜又儿冖"
    },
    {
        kanji: "冢",
        radicals: "冖豕丶"
    },
    {
        kanji: "冩",
        radicals: "臼冖勹杰"
    },
    {
        kanji: "冪",
        radicals: "巾大日冖艾"
    },
    {
        kanji: "冫",
        radicals: "冫"
    },
    {
        kanji: "决",
        radicals: "ノ人冫ユ大"
    },
    {
        kanji: "冱",
        radicals: "一二冫彑"
    },
    {
        kanji: "冲",
        radicals: "｜口冫"
    },
    {
        kanji: "冰",
        radicals: "水冫"
    },
    {
        kanji: "况",
        radicals: "口儿冫"
    },
    {
        kanji: "冽",
        radicals: "刈冫歹"
    },
    {
        kanji: "凅",
        radicals: "口十冫囗"
    },
    {
        kanji: "凉",
        radicals: "口小亠冫"
    },
    {
        kanji: "凛",
        radicals: "口示二小亠冫囗"
    },
    {
        kanji: "几",
        radicals: "几"
    },
    {
        kanji: "處",
        radicals: "卜几匕厂夂虍"
    },
    {
        kanji: "凩",
        radicals: "木几"
    },
    {
        kanji: "凭",
        radicals: "ノ化士几"
    },
    {
        kanji: "凰",
        radicals: "王白几"
    },
    {
        kanji: "凵",
        radicals: "凵"
    },
    {
        kanji: "凾",
        radicals: "口又凵"
    },
    {
        kanji: "刄",
        radicals: "刀"
    },
    {
        kanji: "刋",
        radicals: "ノ刈十"
    },
    {
        kanji: "刔",
        radicals: "刈人ユ大"
    },
    {
        kanji: "刎",
        radicals: "刈勿勹ノ"
    },
    {
        kanji: "刧",
        radicals: "土刀厶"
    },
    {
        kanji: "刪",
        radicals: "刈冊冂廾"
    },
    {
        kanji: "刮",
        radicals: "刈口舌"
    },
    {
        kanji: "刳",
        radicals: "刈大二勹"
    },
    {
        kanji: "刹",
        radicals: "刈木ノ丶"
    },
    {
        kanji: "剏",
        radicals: "｜ノ刀二并廾一"
    },
    {
        kanji: "剄",
        radicals: "刈工巛一"
    },
    {
        kanji: "剋",
        radicals: "刈口十儿"
    },
    {
        kanji: "剌",
        radicals: "｜刈口ハ木"
    },
    {
        kanji: "剞",
        radicals: "刈口大亅一"
    },
    {
        kanji: "剔",
        radicals: "刈日勿"
    },
    {
        kanji: "剪",
        radicals: "一刈月并刀"
    },
    {
        kanji: "剴",
        radicals: "刈口山豆并"
    },
    {
        kanji: "剩",
        radicals: "｜刈匕爿禾"
    },
    {
        kanji: "剳",
        radicals: "刈口个艾一"
    },
    {
        kanji: "剿",
        radicals: "刈尚田木巛"
    },
    {
        kanji: "剽",
        radicals: "刈示二小西"
    },
    {
        kanji: "劍",
        radicals: "刈口人个一"
    },
    {
        kanji: "劔",
        radicals: "口人刀个丶一"
    },
    {
        kanji: "劒",
        radicals: "口人个丶刀一"
    },
    {
        kanji: "剱",
        radicals: "口人刀个丶"
    },
    {
        kanji: "劈",
        radicals: "口十辛刀立尸"
    },
    {
        kanji: "劑",
        radicals: "刈亠齊刀氏廾"
    },
    {
        kanji: "辨",
        radicals: "ノ十辛立"
    },
    {
        kanji: "辧",
        radicals: "十辛刀立"
    },
    {
        kanji: "劬",
        radicals: "口力勹"
    },
    {
        kanji: "劭",
        radicals: "口刀力"
    },
    {
        kanji: "劼",
        radicals: "口士力"
    },
    {
        kanji: "劵",
        radicals: "人大二ハ力"
    },
    {
        kanji: "勁",
        radicals: "工巛力"
    },
    {
        kanji: "勍",
        radicals: "口小力亠"
    },
    {
        kanji: "勗",
        radicals: "日目力"
    },
    {
        kanji: "勞",
        radicals: "火力冖"
    },
    {
        kanji: "勣",
        radicals: "貝目ハ土力亠二"
    },
    {
        kanji: "勦",
        radicals: "尚田木力巛"
    },
    {
        kanji: "飭",
        radicals: "食力乞"
    },
    {
        kanji: "勠",
        radicals: "羽力个冫彡"
    },
    {
        kanji: "勳",
        radicals: "｜力杰"
    },
    {
        kanji: "勵",
        radicals: "田力厂禹"
    },
    {
        kanji: "勸",
        radicals: "口十力艾隹"
    },
    {
        kanji: "勹",
        radicals: "勹"
    },
    {
        kanji: "匆",
        radicals: "丶勿勹ノ"
    },
    {
        kanji: "匈",
        radicals: "凵勹"
    },
    {
        kanji: "甸",
        radicals: "田勹"
    },
    {
        kanji: "匍",
        radicals: "十用丶勹"
    },
    {
        kanji: "匐",
        radicals: "一口田勹"
    },
    {
        kanji: "匏",
        radicals: "大二勹已"
    },
    {
        kanji: "匕",
        radicals: "匕"
    },
    {
        kanji: "匚",
        radicals: "匚"
    },
    {
        kanji: "匣",
        radicals: "｜田匚"
    },
    {
        kanji: "匯",
        radicals: "汁匚隹"
    },
    {
        kanji: "匱",
        radicals: "貝目ハ匚亠｜一口"
    },
    {
        kanji: "匳",
        radicals: "口人个匚一"
    },
    {
        kanji: "匸",
        radicals: "匚"
    },
    {
        kanji: "區",
        radicals: "口匚品"
    },
    {
        kanji: "卆",
        radicals: "九十"
    },
    {
        kanji: "卅",
        radicals: "｜ノ一十川"
    },
    {
        kanji: "丗",
        radicals: "｜山十凵"
    },
    {
        kanji: "卉",
        radicals: "十廾"
    },
    {
        kanji: "卍",
        radicals: "｜一十"
    },
    {
        kanji: "凖",
        radicals: "十冫隹"
    },
    {
        kanji: "卞",
        radicals: "卜亠"
    },
    {
        kanji: "卩",
        radicals: "卩"
    },
    {
        kanji: "卮",
        radicals: "卩厂"
    },
    {
        kanji: "夘",
        radicals: "夕卩"
    },
    {
        kanji: "卻",
        radicals: "口ハ卩谷"
    },
    {
        kanji: "卷",
        radicals: "人大二ハ卩并"
    },
    {
        kanji: "厂",
        radicals: "厂"
    },
    {
        kanji: "厖",
        radicals: "丶厂尤彡尢"
    },
    {
        kanji: "厠",
        radicals: "貝目ハ刈厂"
    },
    {
        kanji: "厦",
        radicals: "一自厂夂"
    },
    {
        kanji: "厥",
        radicals: "欠并厂屮"
    },
    {
        kanji: "厮",
        radicals: "甘斤ハ厂"
    },
    {
        kanji: "厰",
        radicals: "口尚冂厂攵乞"
    },
    {
        kanji: "厶",
        radicals: "厶"
    },
    {
        kanji: "參",
        radicals: "个厶彡"
    },
    {
        kanji: "簒",
        radicals: "大竹目厶乞"
    },
    {
        kanji: "雙",
        radicals: "又隹"
    },
    {
        kanji: "叟",
        radicals: "臼支又十"
    },
    {
        kanji: "曼",
        radicals: "日買又"
    },
    {
        kanji: "燮",
        radicals: "火言又"
    },
    {
        kanji: "叮",
        radicals: "口亅一"
    },
    {
        kanji: "叨",
        radicals: "口刀"
    },
    {
        kanji: "叭",
        radicals: "口ハ"
    },
    {
        kanji: "叺",
        radicals: "口入"
    },
    {
        kanji: "吁",
        radicals: "口二亅"
    },
    {
        kanji: "吽",
        radicals: "｜牛口二"
    },
    {
        kanji: "呀",
        radicals: "牙口"
    },
    {
        kanji: "听",
        radicals: "斤口"
    },
    {
        kanji: "吭",
        radicals: "口亠几"
    },
    {
        kanji: "吼",
        radicals: "乙口子"
    },
    {
        kanji: "吮",
        radicals: "口儿厶"
    },
    {
        kanji: "吶",
        radicals: "口人冂"
    },
    {
        kanji: "吩",
        radicals: "口刀ハ"
    },
    {
        kanji: "吝",
        radicals: "口文"
    },
    {
        kanji: "呎",
        radicals: "口尸丶"
    },
    {
        kanji: "咏",
        radicals: "ノ口水丶"
    },
    {
        kanji: "呵",
        radicals: "口亅"
    },
    {
        kanji: "咎",
        radicals: "口人夂"
    },
    {
        kanji: "呟",
        radicals: "玄口亠幺"
    },
    {
        kanji: "呱",
        radicals: "瓜口"
    },
    {
        kanji: "呷",
        radicals: "｜口田"
    },
    {
        kanji: "呰",
        radicals: "口止匕"
    },
    {
        kanji: "咒",
        radicals: "口几"
    },
    {
        kanji: "呻",
        radicals: "｜口田"
    },
    {
        kanji: "咀",
        radicals: "一口目"
    },
    {
        kanji: "呶",
        radicals: "口女又"
    },
    {
        kanji: "咄",
        radicals: "｜口山"
    },
    {
        kanji: "咐",
        radicals: "化口寸"
    },
    {
        kanji: "咆",
        radicals: "口勹已"
    },
    {
        kanji: "哇",
        radicals: "口土"
    },
    {
        kanji: "咢",
        radicals: "口二勹"
    },
    {
        kanji: "咸",
        radicals: "ノ口戈"
    },
    {
        kanji: "咥",
        radicals: "口至土厶"
    },
    {
        kanji: "咬",
        radicals: "口父亠"
    },
    {
        kanji: "哄",
        radicals: "｜一口二ハ"
    },
    {
        kanji: "哈",
        radicals: "口个一"
    },
    {
        kanji: "咨",
        radicals: "欠口冫"
    },
    {
        kanji: "咫",
        radicals: "口ハ尸丶"
    },
    {
        kanji: "哂",
        radicals: "口西"
    },
    {
        kanji: "咤",
        radicals: "ノ乙口宀"
    },
    {
        kanji: "咾",
        radicals: "口老匕"
    },
    {
        kanji: "咼",
        radicals: "口冂"
    },
    {
        kanji: "哘",
        radicals: "口行彳"
    },
    {
        kanji: "哥",
        radicals: "一口亅"
    },
    {
        kanji: "哦",
        radicals: "口亅戈"
    },
    {
        kanji: "唏",
        radicals: "ノ一巾口"
    },
    {
        kanji: "唔",
        radicals: "口五"
    },
    {
        kanji: "哽",
        radicals: "ノ口田一"
    },
    {
        kanji: "哮",
        radicals: "口子老"
    },
    {
        kanji: "哭",
        radicals: "犬口"
    },
    {
        kanji: "哺",
        radicals: "口十用丶"
    },
    {
        kanji: "哢",
        radicals: "王口廾"
    },
    {
        kanji: "唹",
        radicals: "口方个冫"
    },
    {
        kanji: "啀",
        radicals: "口土厂"
    },
    {
        kanji: "啣",
        radicals: "口止凵卩乞"
    },
    {
        kanji: "啌",
        radicals: "穴口工儿宀"
    },
    {
        kanji: "售",
        radicals: "口隹"
    },
    {
        kanji: "啜",
        radicals: "口又"
    },
    {
        kanji: "啅",
        radicals: "口十日卜"
    },
    {
        kanji: "啖",
        radicals: "火口"
    },
    {
        kanji: "啗",
        radicals: "臼口勹"
    },
    {
        kanji: "唸",
        radicals: "口心个一"
    },
    {
        kanji: "唳",
        radicals: "戸口大一尸"
    },
    {
        kanji: "啝",
        radicals: "禾口"
    },
    {
        kanji: "喙",
        radicals: "ヨ口豕"
    },
    {
        kanji: "喀",
        radicals: "口夂宀"
    },
    {
        kanji: "咯",
        radicals: "口夂"
    },
    {
        kanji: "喊",
        radicals: "ノ口戈"
    },
    {
        kanji: "喟",
        radicals: "月口田"
    },
    {
        kanji: "啻",
        radicals: "巾口并立亠冖"
    },
    {
        kanji: "啾",
        radicals: "火禾口"
    },
    {
        kanji: "喘",
        radicals: "｜一口山而冂"
    },
    {
        kanji: "喞",
        radicals: "口艮卩"
    },
    {
        kanji: "單",
        radicals: "口十田"
    },
    {
        kanji: "啼",
        radicals: "巾口并立亠冖"
    },
    {
        kanji: "喃",
        radicals: "干口十并冂"
    },
    {
        kanji: "喩",
        radicals: "刈月口个一"
    },
    {
        kanji: "喇",
        radicals: "｜刈口ハ木亠"
    },
    {
        kanji: "喨",
        radicals: "口亠儿冖"
    },
    {
        kanji: "嗚",
        radicals: "口鳥杰"
    },
    {
        kanji: "嗅",
        radicals: "口自大目犬"
    },
    {
        kanji: "嗟",
        radicals: "ノ王口工并羊"
    },
    {
        kanji: "嗄",
        radicals: "一口自夂"
    },
    {
        kanji: "嗜",
        radicals: "口日老匕"
    },
    {
        kanji: "嗤",
        radicals: "口山虫"
    },
    {
        kanji: "嗔",
        radicals: "口十ハ目"
    },
    {
        kanji: "嘔",
        radicals: "口匚品"
    },
    {
        kanji: "嗷",
        radicals: "口土方攵乞"
    },
    {
        kanji: "嘖",
        radicals: "貝目ハ口土亠二"
    },
    {
        kanji: "嗾",
        radicals: "口方矢乞"
    },
    {
        kanji: "嗽",
        radicals: "｜欠口ハ木"
    },
    {
        kanji: "嘛",
        radicals: "口麻木广"
    },
    {
        kanji: "嗹",
        radicals: "口込車"
    },
    {
        kanji: "噎",
        radicals: "口士豆并冖"
    },
    {
        kanji: "噐",
        radicals: "口工"
    },
    {
        kanji: "營",
        radicals: "火口冖ノ"
    },
    {
        kanji: "嘴",
        radicals: "角口止匕"
    },
    {
        kanji: "嘶",
        radicals: "甘斤口ハ"
    },
    {
        kanji: "嘲",
        radicals: "月口十日"
    },
    {
        kanji: "嘸",
        radicals: "｜ノ一口杰無乞"
    },
    {
        kanji: "噫",
        radicals: "音口心日立"
    },
    {
        kanji: "噤",
        radicals: "口示二小木"
    },
    {
        kanji: "嘯",
        radicals: "｜ノヨ口水米隶聿"
    },
    {
        kanji: "噬",
        radicals: "口工人竹乞"
    },
    {
        kanji: "噪",
        radicals: "口木品"
    },
    {
        kanji: "嚆",
        radicals: "口高亠冂艾"
    },
    {
        kanji: "嚀",
        radicals: "口心買宀皿"
    },
    {
        kanji: "嚊",
        radicals: "口自田廾鼻目"
    },
    {
        kanji: "嚠",
        radicals: "刈金口厶刀"
    },
    {
        kanji: "嚔",
        radicals: "口十田冖疋"
    },
    {
        kanji: "嚏",
        radicals: "口十田疋冖"
    },
    {
        kanji: "嚥",
        radicals: "一口凵匕杰爿"
    },
    {
        kanji: "嚮",
        radicals: "口艮邦冂幺"
    },
    {
        kanji: "嚶",
        radicals: "貝目ハ口女"
    },
    {
        kanji: "嚴",
        radicals: "口耳厂攵乞"
    },
    {
        kanji: "囂",
        radicals: "一口ハ頁貝目"
    },
    {
        kanji: "嚼",
        radicals: "口艮寸爪買"
    },
    {
        kanji: "囁",
        radicals: "口耳"
    },
    {
        kanji: "囃",
        radicals: "口人木亠隹"
    },
    {
        kanji: "囀",
        radicals: "口車十寸田厶"
    },
    {
        kanji: "囈",
        radicals: "九口土二丶儿厶艾"
    },
    {
        kanji: "囎",
        radicals: "貝目口田日ハ并"
    },
    {
        kanji: "囑",
        radicals: "口虫買勹尸"
    },
    {
        kanji: "囓",
        radicals: "口止歯土刀米亠凵二"
    },
    {
        kanji: "囗",
        radicals: "囗口"
    },
    {
        kanji: "囮",
        radicals: "化匕囗"
    },
    {
        kanji: "囹",
        radicals: "刀个囗一"
    },
    {
        kanji: "圀",
        radicals: "方儿囗"
    },
    {
        kanji: "囿",
        radicals: "ノ一月囗"
    },
    {
        kanji: "圄",
        radicals: "口囗五"
    },
    {
        kanji: "圉",
        radicals: "干十辛土立亠囗"
    },
    {
        kanji: "圈",
        radicals: "人大二并卩囗"
    },
    {
        kanji: "國",
        radicals: "口囗戈"
    },
    {
        kanji: "圍",
        radicals: "口囗韋"
    },
    {
        kanji: "圓",
        radicals: "貝目ハ口囗"
    },
    {
        kanji: "團",
        radicals: "十寸厶囗田"
    },
    {
        kanji: "圖",
        radicals: "口囗"
    },
    {
        kanji: "嗇",
        radicals: "口人土囗"
    },
    {
        kanji: "圜",
        radicals: "衣一口買囗"
    },
    {
        kanji: "圦",
        radicals: "土入"
    },
    {
        kanji: "圷",
        radicals: "土卜一"
    },
    {
        kanji: "圸",
        radicals: "山土"
    },
    {
        kanji: "坎",
        radicals: "欠土"
    },
    {
        kanji: "圻",
        radicals: "斤土"
    },
    {
        kanji: "址",
        radicals: "止土"
    },
    {
        kanji: "坏",
        radicals: "｜ノ一土丶"
    },
    {
        kanji: "坩",
        radicals: "甘土"
    },
    {
        kanji: "埀",
        radicals: "ノ土匕爿"
    },
    {
        kanji: "垈",
        radicals: "化土弋"
    },
    {
        kanji: "坡",
        radicals: "土皮又"
    },
    {
        kanji: "坿",
        radicals: "化寸土"
    },
    {
        kanji: "垉",
        radicals: "土勹已"
    },
    {
        kanji: "垓",
        radicals: "人土亠ノ丶"
    },
    {
        kanji: "垠",
        radicals: "艮土"
    },
    {
        kanji: "垳",
        radicals: "行土彳"
    },
    {
        kanji: "垤",
        radicals: "至土厶"
    },
    {
        kanji: "垪",
        radicals: "｜ノ土二并廾一"
    },
    {
        kanji: "垰",
        radicals: "土卜"
    },
    {
        kanji: "埃",
        radicals: "土矢厶乞"
    },
    {
        kanji: "埆",
        radicals: "角土"
    },
    {
        kanji: "埔",
        radicals: "十土用丶"
    },
    {
        kanji: "埒",
        radicals: "寸爪土"
    },
    {
        kanji: "埓",
        radicals: "ノ寸土"
    },
    {
        kanji: "堊",
        radicals: "一土二"
    },
    {
        kanji: "埖",
        radicals: "化土匕艾"
    },
    {
        kanji: "埣",
        radicals: "十人土亠"
    },
    {
        kanji: "堋",
        radicals: "月土"
    },
    {
        kanji: "堙",
        radicals: "｜一西土"
    },
    {
        kanji: "堝",
        radicals: "口土冂"
    },
    {
        kanji: "塲",
        radicals: "土日勿一乞"
    },
    {
        kanji: "堡",
        radicals: "化口土木"
    },
    {
        kanji: "塢",
        radicals: "鳥土杰"
    },
    {
        kanji: "塋",
        radicals: "火土冖"
    },
    {
        kanji: "塰",
        radicals: "汁土母毋乞"
    },
    {
        kanji: "毀",
        radicals: "臼土殳几又"
    },
    {
        kanji: "塒",
        radicals: "寸土日"
    },
    {
        kanji: "堽",
        radicals: "止土買"
    },
    {
        kanji: "塹",
        radicals: "斤車土"
    },
    {
        kanji: "墅",
        radicals: "土里マ"
    },
    {
        kanji: "墹",
        radicals: "土日門"
    },
    {
        kanji: "墟",
        radicals: "｜一土并卜匕厂虍"
    },
    {
        kanji: "墫",
        radicals: "寸土酉并"
    },
    {
        kanji: "墺",
        radicals: "大土米冂釆"
    },
    {
        kanji: "壞",
        radicals: "衣土買亠"
    },
    {
        kanji: "墻",
        radicals: "口人土囗"
    },
    {
        kanji: "墸",
        radicals: "土日老艾"
    },
    {
        kanji: "墮",
        radicals: "月工土阡"
    },
    {
        kanji: "壅",
        radicals: "土亠隹幺"
    },
    {
        kanji: "壓",
        radicals: "月犬土日厂"
    },
    {
        kanji: "壑",
        radicals: "口土ハ卜又个冖谷"
    },
    {
        kanji: "壗",
        radicals: "ヨ皿土杰聿"
    },
    {
        kanji: "壙",
        radicals: "｜一黄田土二ハ广"
    },
    {
        kanji: "壘",
        radicals: "田土"
    },
    {
        kanji: "壥",
        radicals: "黒土里厂杰"
    },
    {
        kanji: "壜",
        radicals: "雨土二日厶"
    },
    {
        kanji: "壤",
        radicals: "｜衣一口土亠二"
    },
    {
        kanji: "壟",
        radicals: "月土立"
    },
    {
        kanji: "壯",
        radicals: "士爿"
    },
    {
        kanji: "壺",
        radicals: "一士冖"
    },
    {
        kanji: "壹",
        radicals: "口士豆并冖"
    },
    {
        kanji: "壻",
        radicals: "月土疋"
    },
    {
        kanji: "壼",
        radicals: "一士二冖"
    },
    {
        kanji: "壽",
        radicals: "一口工士寸"
    },
    {
        kanji: "夂",
        radicals: "夂攵"
    },
    {
        kanji: "夊",
        radicals: "夂"
    },
    {
        kanji: "夐",
        radicals: "目冂夂勹人"
    },
    {
        kanji: "夛",
        radicals: "ヨ夕"
    },
    {
        kanji: "梦",
        radicals: "木夕"
    },
    {
        kanji: "夥",
        radicals: "田木夕"
    },
    {
        kanji: "夬",
        radicals: "人大二ユ"
    },
    {
        kanji: "夭",
        radicals: "ノ大"
    },
    {
        kanji: "夲",
        radicals: "十大"
    },
    {
        kanji: "夸",
        radicals: "大二勹"
    },
    {
        kanji: "夾",
        radicals: "人大"
    },
    {
        kanji: "竒",
        radicals: "一口并立亅亠"
    },
    {
        kanji: "奕",
        radicals: "赤大ハ亠"
    },
    {
        kanji: "奐",
        radicals: "大儿冂勹"
    },
    {
        kanji: "奎",
        radicals: "大土"
    },
    {
        kanji: "奚",
        radicals: "大爪幺"
    },
    {
        kanji: "奘",
        radicals: "士大爿"
    },
    {
        kanji: "奢",
        radicals: "大日老"
    },
    {
        kanji: "奠",
        radicals: "大酉并"
    },
    {
        kanji: "奧",
        radicals: "大米冂釆"
    },
    {
        kanji: "奬",
        radicals: "寸大爿夕"
    },
    {
        kanji: "奩",
        radicals: "口大匚品"
    },
    {
        kanji: "奸",
        radicals: "干女"
    },
    {
        kanji: "妁",
        radicals: "女丶勹"
    },
    {
        kanji: "妝",
        radicals: "女爿"
    },
    {
        kanji: "佞",
        radicals: "化女二"
    },
    {
        kanji: "侫",
        radicals: "亡化女"
    },
    {
        kanji: "妣",
        radicals: "女比"
    },
    {
        kanji: "妲",
        radicals: "女日一"
    },
    {
        kanji: "姆",
        radicals: "女母毋"
    },
    {
        kanji: "姨",
        radicals: "弓女人大"
    },
    {
        kanji: "姜",
        radicals: "王女并羊"
    },
    {
        kanji: "妍",
        radicals: "｜ノ一女二廾"
    },
    {
        kanji: "姙",
        radicals: "ノ化士女"
    },
    {
        kanji: "姚",
        radicals: "女儿冫"
    },
    {
        kanji: "娥",
        radicals: "女亅戈"
    },
    {
        kanji: "娟",
        radicals: "月口女"
    },
    {
        kanji: "娑",
        radicals: "ノ汁女小"
    },
    {
        kanji: "娜",
        radicals: "女刀邦二"
    },
    {
        kanji: "娉",
        radicals: "｜女田一勹"
    },
    {
        kanji: "娚",
        radicals: "女田力"
    },
    {
        kanji: "婀",
        radicals: "口女亅阡一"
    },
    {
        kanji: "婬",
        radicals: "ノ士女爪"
    },
    {
        kanji: "婉",
        radicals: "女夕卩宀"
    },
    {
        kanji: "娵",
        radicals: "耳女又"
    },
    {
        kanji: "娶",
        radicals: "耳女又"
    },
    {
        kanji: "婢",
        radicals: "十女田"
    },
    {
        kanji: "婪",
        radicals: "女木"
    },
    {
        kanji: "媚",
        radicals: "女目尸｜"
    },
    {
        kanji: "媼",
        radicals: "皿女日"
    },
    {
        kanji: "媾",
        radicals: "｜一女二冂十"
    },
    {
        kanji: "嫋",
        radicals: "弓女冫"
    },
    {
        kanji: "嫂",
        radicals: "｜女田又"
    },
    {
        kanji: "媽",
        radicals: "女馬杰"
    },
    {
        kanji: "嫣",
        radicals: "一止女鳥杰"
    },
    {
        kanji: "嫗",
        radicals: "口女匚品"
    },
    {
        kanji: "嫦",
        radicals: "巾口女尚"
    },
    {
        kanji: "嫩",
        radicals: "｜口女ハ木攵乞"
    },
    {
        kanji: "嫖",
        radicals: "示二小女西"
    },
    {
        kanji: "嫺",
        radicals: "女日門"
    },
    {
        kanji: "嫻",
        radicals: "女木門"
    },
    {
        kanji: "嬌",
        radicals: "ノ口女大冂"
    },
    {
        kanji: "嬋",
        radicals: "｜口十女田"
    },
    {
        kanji: "嬖",
        radicals: "口十女辛立尸"
    },
    {
        kanji: "嬲",
        radicals: "女田力"
    },
    {
        kanji: "嫐",
        radicals: "女田力"
    },
    {
        kanji: "嬪",
        radicals: "ノ貝目ハ女小宀"
    },
    {
        kanji: "嬶",
        radicals: "自女田鼻目廾"
    },
    {
        kanji: "嬾",
        radicals: "｜貝目口女ハ頁木"
    },
    {
        kanji: "孃",
        radicals: "｜衣一口女亠"
    },
    {
        kanji: "孅",
        radicals: "女人戈韭"
    },
    {
        kanji: "孀",
        radicals: "雨女木目"
    },
    {
        kanji: "孑",
        radicals: "子"
    },
    {
        kanji: "孕",
        radicals: "乃子ノ"
    },
    {
        kanji: "孚",
        radicals: "子爪"
    },
    {
        kanji: "孛",
        radicals: "士子十冖"
    },
    {
        kanji: "孥",
        radicals: "子女又"
    },
    {
        kanji: "孩",
        radicals: "子亠ノ丶"
    },
    {
        kanji: "孰",
        radicals: "九口子丶亠"
    },
    {
        kanji: "孳",
        radicals: "一子并幺"
    },
    {
        kanji: "孵",
        radicals: "子爪丶卩"
    },
    {
        kanji: "學",
        radicals: "臼子冖"
    },
    {
        kanji: "斈",
        radicals: "子文"
    },
    {
        kanji: "孺",
        radicals: "｜一雨子而冂"
    },
    {
        kanji: "宀",
        radicals: "宀"
    },
    {
        kanji: "它",
        radicals: "匕宀"
    },
    {
        kanji: "宦",
        radicals: "臣宀"
    },
    {
        kanji: "宸",
        radicals: "衣辰厂宀"
    },
    {
        kanji: "寃",
        radicals: "免丶儿宀勹"
    },
    {
        kanji: "寇",
        radicals: "二卜又儿宀元"
    },
    {
        kanji: "寉",
        radicals: "宀隹"
    },
    {
        kanji: "寔",
        radicals: "日疋宀"
    },
    {
        kanji: "寐",
        radicals: "二ハ亅宀爿"
    },
    {
        kanji: "寤",
        radicals: "口宀爿五"
    },
    {
        kanji: "實",
        radicals: "一貝目ハ田宀"
    },
    {
        kanji: "寢",
        radicals: "ヨ又冖宀爿"
    },
    {
        kanji: "寞",
        radicals: "大日宀艾"
    },
    {
        kanji: "寥",
        radicals: "羽个冫宀彡"
    },
    {
        kanji: "寫",
        radicals: "臼勹宀杰"
    },
    {
        kanji: "寰",
        radicals: "衣一口買宀"
    },
    {
        kanji: "寶",
        radicals: "王貝目ハ缶凵宀"
    },
    {
        kanji: "寳",
        radicals: "王貝目ハ小宀乞"
    },
    {
        kanji: "尅",
        radicals: "口十寸儿"
    },
    {
        kanji: "將",
        radicals: "寸夕爿"
    },
    {
        kanji: "專",
        radicals: "一十寸虫田厶"
    },
    {
        kanji: "對",
        radicals: "王寸并羊"
    },
    {
        kanji: "尓",
        radicals: "ノ小乞"
    },
    {
        kanji: "尠",
        radicals: "ノ甘小儿匚"
    },
    {
        kanji: "尢",
        radicals: "尢"
    },
    {
        kanji: "尨",
        radicals: "丶尤彡尢"
    },
    {
        kanji: "尸",
        radicals: "尸"
    },
    {
        kanji: "尹",
        radicals: "ノヨ一"
    },
    {
        kanji: "屁",
        radicals: "比尸"
    },
    {
        kanji: "屆",
        radicals: "士土凵尸"
    },
    {
        kanji: "屎",
        radicals: "米尸"
    },
    {
        kanji: "屓",
        radicals: "貝目ハ尸"
    },
    {
        kanji: "屐",
        radicals: "支尸彳又十"
    },
    {
        kanji: "屏",
        radicals: "｜ノ二并尸廾一"
    },
    {
        kanji: "孱",
        radicals: "子尸"
    },
    {
        kanji: "屬",
        radicals: "虫買勹尸"
    },
    {
        kanji: "屮",
        radicals: "屮"
    },
    {
        kanji: "乢",
        radicals: "乙山"
    },
    {
        kanji: "屶",
        radicals: "山刀"
    },
    {
        kanji: "屹",
        radicals: "ノ乙山乞"
    },
    {
        kanji: "岌",
        radicals: "及山"
    },
    {
        kanji: "岑",
        radicals: "山个一"
    },
    {
        kanji: "岔",
        radicals: "山刀ハ"
    },
    {
        kanji: "妛",
        radicals: "一山女"
    },
    {
        kanji: "岫",
        radicals: "｜山田凵"
    },
    {
        kanji: "岻",
        radicals: "山氏一"
    },
    {
        kanji: "岶",
        radicals: "山白"
    },
    {
        kanji: "岼",
        radicals: "｜干山二ハ"
    },
    {
        kanji: "岷",
        radicals: "口山氏尸"
    },
    {
        kanji: "峅",
        radicals: "山厶廾"
    },
    {
        kanji: "岾",
        radicals: "口山卜"
    },
    {
        kanji: "峇",
        radicals: "口山个一"
    },
    {
        kanji: "峙",
        radicals: "山寸土"
    },
    {
        kanji: "峩",
        radicals: "山亅戈"
    },
    {
        kanji: "峽",
        radicals: "山人大"
    },
    {
        kanji: "峺",
        radicals: "ノ一山田"
    },
    {
        kanji: "峭",
        radicals: "月山尚"
    },
    {
        kanji: "嶌",
        radicals: "山鳥杰"
    },
    {
        kanji: "峪",
        radicals: "口山ハ个谷"
    },
    {
        kanji: "崋",
        radicals: "｜一山"
    },
    {
        kanji: "崕",
        radicals: "山土厂"
    },
    {
        kanji: "崗",
        radicals: "山并冂凵岡"
    },
    {
        kanji: "嵜",
        radicals: "一口山并立亅亠大"
    },
    {
        kanji: "崟",
        radicals: "金山"
    },
    {
        kanji: "崛",
        radicals: "｜山尸凵"
    },
    {
        kanji: "崑",
        radicals: "山日比"
    },
    {
        kanji: "崔",
        radicals: "山隹"
    },
    {
        kanji: "崢",
        radicals: "ヨ山爪亅尸"
    },
    {
        kanji: "崚",
        radicals: "山土儿夂"
    },
    {
        kanji: "崙",
        radicals: "｜一山个冊廾"
    },
    {
        kanji: "崘",
        radicals: "｜一山个冊廾"
    },
    {
        kanji: "嵌",
        radicals: "甘欠山"
    },
    {
        kanji: "嵒",
        radicals: "口山品"
    },
    {
        kanji: "嵎",
        radicals: "山田禹"
    },
    {
        kanji: "嵋",
        radicals: "山目尸｜"
    },
    {
        kanji: "嵬",
        radicals: "鬼山田儿匕厶"
    },
    {
        kanji: "嵳",
        radicals: "王工山并羊"
    },
    {
        kanji: "嵶",
        radicals: "弓山冫"
    },
    {
        kanji: "嶇",
        radicals: "口山匚品"
    },
    {
        kanji: "嶄",
        radicals: "斤山車"
    },
    {
        kanji: "嶂",
        radicals: "音山十日立曰"
    },
    {
        kanji: "嶢",
        radicals: "山土儿"
    },
    {
        kanji: "嶝",
        radicals: "口山豆并癶"
    },
    {
        kanji: "嶬",
        radicals: "王山并羊亅戈"
    },
    {
        kanji: "嶮",
        radicals: "口山人个一"
    },
    {
        kanji: "嶽",
        radicals: "犬言山"
    },
    {
        kanji: "嶐",
        radicals: "山生夂阡"
    },
    {
        kanji: "嶷",
        radicals: "山疋矢匕乞"
    },
    {
        kanji: "嶼",
        radicals: "臼山ハ"
    },
    {
        kanji: "巉",
        radicals: "山比丶儿勹口"
    },
    {
        kanji: "巍",
        radicals: "禾鬼山女田儿匕厶"
    },
    {
        kanji: "巓",
        radicals: "貝山十ハ頁目"
    },
    {
        kanji: "巒",
        radicals: "言山糸幺小"
    },
    {
        kanji: "巖",
        radicals: "口山耳厂攵乞"
    },
    {
        kanji: "巛",
        radicals: "巛"
    },
    {
        kanji: "巫",
        radicals: "工人"
    },
    {
        kanji: "已",
        radicals: "已"
    },
    {
        kanji: "巵",
        radicals: "一厂巴"
    },
    {
        kanji: "帋",
        radicals: "巾氏"
    },
    {
        kanji: "帚",
        radicals: "ヨ巾冖"
    },
    {
        kanji: "帙",
        radicals: "ノ巾人大二"
    },
    {
        kanji: "帑",
        radicals: "巾女又"
    },
    {
        kanji: "帛",
        radicals: "巾白"
    },
    {
        kanji: "帶",
        radicals: "一巾儿冖凵"
    },
    {
        kanji: "帷",
        radicals: "巾隹"
    },
    {
        kanji: "幄",
        radicals: "巾至土厶尸"
    },
    {
        kanji: "幃",
        radicals: "巾韋口"
    },
    {
        kanji: "幀",
        radicals: "貝目ハ巾卜"
    },
    {
        kanji: "幎",
        radicals: "巾日ハ亠冖"
    },
    {
        kanji: "幗",
        radicals: "巾口囗戈"
    },
    {
        kanji: "幔",
        radicals: "巾日買又"
    },
    {
        kanji: "幟",
        radicals: "音巾日立戈"
    },
    {
        kanji: "幢",
        radicals: "巾里立"
    },
    {
        kanji: "幤",
        radicals: "巾口尚冂攵乞"
    },
    {
        kanji: "幇",
        radicals: "巾寸土"
    },
    {
        kanji: "幵",
        radicals: "干"
    },
    {
        kanji: "并",
        radicals: "ノ干二并一"
    },
    {
        kanji: "幺",
        radicals: "幺"
    },
    {
        kanji: "麼",
        radicals: "木幺广麻"
    },
    {
        kanji: "广",
        radicals: "广"
    },
    {
        kanji: "庠",
        radicals: "王并羊广"
    },
    {
        kanji: "廁",
        radicals: "貝目ハ刈广"
    },
    {
        kanji: "廂",
        radicals: "木目广"
    },
    {
        kanji: "廈",
        radicals: "一自夂广"
    },
    {
        kanji: "廐",
        radicals: "艮广无"
    },
    {
        kanji: "廏",
        radicals: "艮广殳几又"
    },
    {
        kanji: "廖",
        radicals: "羽个冫广彡"
    },
    {
        kanji: "廣",
        radicals: "黄田ハ广"
    },
    {
        kanji: "廝",
        radicals: "甘斤ハ广"
    },
    {
        kanji: "廚",
        radicals: "口士寸豆并广"
    },
    {
        kanji: "廛",
        radicals: "土里儿广"
    },
    {
        kanji: "廢",
        radicals: "弓广殳癶几又"
    },
    {
        kanji: "廡",
        radicals: "｜一广杰無ノ乞"
    },
    {
        kanji: "廨",
        radicals: "角牛刀广"
    },
    {
        kanji: "廩",
        radicals: "禾口亠囗广"
    },
    {
        kanji: "廬",
        radicals: "皿田卜匕厂广虍"
    },
    {
        kanji: "廱",
        radicals: "口巛巴广隹"
    },
    {
        kanji: "廳",
        radicals: "一王耳十心買广"
    },
    {
        kanji: "廰",
        radicals: "耳十心買广"
    },
    {
        kanji: "廴",
        radicals: "廴"
    },
    {
        kanji: "廸",
        radicals: "｜日廴"
    },
    {
        kanji: "廾",
        radicals: "廾"
    },
    {
        kanji: "弃",
        radicals: "亠厶廾"
    },
    {
        kanji: "弉",
        radicals: "士廾爿"
    },
    {
        kanji: "彝",
        radicals: "ヨ糸幺小米廾彑"
    },
    {
        kanji: "彜",
        radicals: "ヨ刀并米廾彑"
    },
    {
        kanji: "弋",
        radicals: "弋"
    },
    {
        kanji: "弑",
        radicals: "工木弋"
    },
    {
        kanji: "弖",
        radicals: "一弓"
    },
    {
        kanji: "弩",
        radicals: "弓女又"
    },
    {
        kanji: "弭",
        radicals: "弓耳"
    },
    {
        kanji: "弸",
        radicals: "弓月"
    },
    {
        kanji: "彁",
        radicals: "弓口亅一"
    },
    {
        kanji: "彈",
        radicals: "｜弓口十田"
    },
    {
        kanji: "彌",
        radicals: "｜一弓ハ冂爻"
    },
    {
        kanji: "彎",
        radicals: "弓言糸幺小"
    },
    {
        kanji: "弯",
        radicals: "弓赤ハ亠"
    },
    {
        kanji: "彑",
        radicals: "ヨ彑"
    },
    {
        kanji: "彖",
        radicals: "彑豕"
    },
    {
        kanji: "彗",
        radicals: "ヨ二亠土"
    },
    {
        kanji: "彙",
        radicals: "ヨ田木冖彑"
    },
    {
        kanji: "彡",
        radicals: "彡"
    },
    {
        kanji: "彭",
        radicals: "口土豆并彡"
    },
    {
        kanji: "彳",
        radicals: "彳"
    },
    {
        kanji: "彷",
        radicals: "方彳"
    },
    {
        kanji: "徃",
        radicals: "生彳"
    },
    {
        kanji: "徂",
        radicals: "目彳"
    },
    {
        kanji: "彿",
        radicals: "｜ノ弓彳"
    },
    {
        kanji: "徊",
        radicals: "口囗彳"
    },
    {
        kanji: "很",
        radicals: "艮彳"
    },
    {
        kanji: "徑",
        radicals: "一工巛彳"
    },
    {
        kanji: "徇",
        radicals: "日勹彳"
    },
    {
        kanji: "從",
        radicals: "人疋彳"
    },
    {
        kanji: "徙",
        radicals: "止疋彳"
    },
    {
        kanji: "徘",
        radicals: "非彳"
    },
    {
        kanji: "徠",
        radicals: "｜人ハ木彳"
    },
    {
        kanji: "徨",
        radicals: "王白彳"
    },
    {
        kanji: "徭",
        radicals: "缶夕凵彳"
    },
    {
        kanji: "徼",
        radicals: "白方夂彳"
    },
    {
        kanji: "忖",
        radicals: "寸忙"
    },
    {
        kanji: "忻",
        radicals: "斤忙"
    },
    {
        kanji: "忤",
        radicals: "ノ干忙十乞"
    },
    {
        kanji: "忸",
        radicals: "｜一忙"
    },
    {
        kanji: "忱",
        radicals: "忙儿冖尢"
    },
    {
        kanji: "忝",
        radicals: "ノ心大一二"
    },
    {
        kanji: "悳",
        radicals: "十心目"
    },
    {
        kanji: "忿",
        radicals: "心刀ハ"
    },
    {
        kanji: "怡",
        radicals: "口忙厶"
    },
    {
        kanji: "恠",
        radicals: "ノ一土忙"
    },
    {
        kanji: "怙",
        radicals: "口十忙"
    },
    {
        kanji: "怐",
        radicals: "口忙勹"
    },
    {
        kanji: "怩",
        radicals: "忙匕尸"
    },
    {
        kanji: "怎",
        radicals: "｜ノ一心乞"
    },
    {
        kanji: "怱",
        radicals: "ノ心丶勿勹"
    },
    {
        kanji: "怛",
        radicals: "日忙一"
    },
    {
        kanji: "怕",
        radicals: "白忙"
    },
    {
        kanji: "怫",
        radicals: "｜ノ弓忙"
    },
    {
        kanji: "怦",
        radicals: "干ハ忙"
    },
    {
        kanji: "怏",
        radicals: "人大忙冂冖"
    },
    {
        kanji: "怺",
        radicals: "水忙丶"
    },
    {
        kanji: "恚",
        radicals: "心土"
    },
    {
        kanji: "恁",
        radicals: "ノ化士心"
    },
    {
        kanji: "恪",
        radicals: "口忙夂"
    },
    {
        kanji: "恷",
        radicals: "化心木"
    },
    {
        kanji: "恟",
        radicals: "忙凵勹"
    },
    {
        kanji: "恊",
        radicals: "忙力"
    },
    {
        kanji: "恆",
        radicals: "｜一忙彑"
    },
    {
        kanji: "恍",
        radicals: "尚忙儿"
    },
    {
        kanji: "恣",
        radicals: "欠心冫"
    },
    {
        kanji: "恃",
        radicals: "寸土忙"
    },
    {
        kanji: "恤",
        radicals: "血皿忙"
    },
    {
        kanji: "恂",
        radicals: "日忙勹"
    },
    {
        kanji: "恬",
        radicals: "口舌忙"
    },
    {
        kanji: "恫",
        radicals: "口忙冂一"
    },
    {
        kanji: "恙",
        radicals: "王心并羊"
    },
    {
        kanji: "悁",
        radicals: "月口忙"
    },
    {
        kanji: "悍",
        radicals: "干日忙"
    },
    {
        kanji: "惧",
        radicals: "ハ忙目"
    },
    {
        kanji: "悃",
        radicals: "忙木囗"
    },
    {
        kanji: "悚",
        radicals: "｜口ハ忙木"
    },
    {
        kanji: "悄",
        radicals: "月尚忙"
    },
    {
        kanji: "悛",
        radicals: "忙儿厶夂"
    },
    {
        kanji: "悖",
        radicals: "子十忙冖"
    },
    {
        kanji: "悗",
        radicals: "免忙儿勹"
    },
    {
        kanji: "悒",
        radicals: "口忙巴"
    },
    {
        kanji: "悧",
        radicals: "禾刈忙"
    },
    {
        kanji: "悋",
        radicals: "口文忙"
    },
    {
        kanji: "惡",
        radicals: "一心二"
    },
    {
        kanji: "悸",
        radicals: "禾子忙"
    },
    {
        kanji: "惠",
        radicals: "｜一心虫日厶"
    },
    {
        kanji: "惓",
        radicals: "大二并忙已"
    },
    {
        kanji: "悴",
        radicals: "十人忙亠"
    },
    {
        kanji: "忰",
        radicals: "九十忙"
    },
    {
        kanji: "悽",
        radicals: "ヨ女忙"
    },
    {
        kanji: "惆",
        radicals: "口土忙冂"
    },
    {
        kanji: "悵",
        radicals: "長忙"
    },
    {
        kanji: "惘",
        radicals: "工并忙冂"
    },
    {
        kanji: "慍",
        radicals: "皿日忙"
    },
    {
        kanji: "愕",
        radicals: "口二忙勹"
    },
    {
        kanji: "愆",
        radicals: "行汁心彳"
    },
    {
        kanji: "惶",
        radicals: "王白忙"
    },
    {
        kanji: "惷",
        radicals: "心大二日"
    },
    {
        kanji: "愀",
        radicals: "火禾忙"
    },
    {
        kanji: "惴",
        radicals: "山而忙"
    },
    {
        kanji: "惺",
        radicals: "生日忙"
    },
    {
        kanji: "愃",
        radicals: "二日忙宀一"
    },
    {
        kanji: "愡",
        radicals: "ノ心忙丶勿勹"
    },
    {
        kanji: "惻",
        radicals: "貝目ハ刈忙"
    },
    {
        kanji: "惱",
        radicals: "巛忙囗"
    },
    {
        kanji: "愍",
        radicals: "口氏心攵尸乞"
    },
    {
        kanji: "愎",
        radicals: "日忙夂乞"
    },
    {
        kanji: "慇",
        radicals: "心日殳几又"
    },
    {
        kanji: "愾",
        radicals: "米忙气乞"
    },
    {
        kanji: "愨",
        radicals: "士心冖殳几又"
    },
    {
        kanji: "愧",
        radicals: "鬼田忙儿匕厶"
    },
    {
        kanji: "慊",
        radicals: "｜ヨ并忙"
    },
    {
        kanji: "愿",
        radicals: "小心白厂"
    },
    {
        kanji: "愼",
        radicals: "ハ忙目匕"
    },
    {
        kanji: "愬",
        radicals: "月心并屮"
    },
    {
        kanji: "愴",
        radicals: "戸口人忙一尸"
    },
    {
        kanji: "愽",
        radicals: "十寸田忙丶"
    },
    {
        kanji: "慂",
        radicals: "汁心用マ"
    },
    {
        kanji: "慄",
        radicals: "西忙木"
    },
    {
        kanji: "慳",
        radicals: "臣土忙又"
    },
    {
        kanji: "慷",
        radicals: "ヨ水忙广隶"
    },
    {
        kanji: "慘",
        radicals: "忙个厶彡"
    },
    {
        kanji: "慙",
        radicals: "斤車心"
    },
    {
        kanji: "慚",
        radicals: "斤車忙"
    },
    {
        kanji: "慫",
        radicals: "心并疋彳"
    },
    {
        kanji: "慴",
        radicals: "羽白忙冫"
    },
    {
        kanji: "慯",
        radicals: "ノ一日忙勹勿乞"
    },
    {
        kanji: "慥",
        radicals: "口込土忙"
    },
    {
        kanji: "慱",
        radicals: "十寸虫田忙亠厶"
    },
    {
        kanji: "慟",
        radicals: "｜ノ日忙力"
    },
    {
        kanji: "慝",
        radicals: "ノ一口心厂艾匚"
    },
    {
        kanji: "慓",
        radicals: "示二小西忙"
    },
    {
        kanji: "慵",
        radicals: "ヨ忙用冂广聿"
    },
    {
        kanji: "憙",
        radicals: "一口士心豆ハ"
    },
    {
        kanji: "憖",
        radicals: "｜犬心人ハ木"
    },
    {
        kanji: "憇",
        radicals: "甘口心舌"
    },
    {
        kanji: "憬",
        radicals: "口小日忙亠"
    },
    {
        kanji: "憔",
        radicals: "忙杰隹"
    },
    {
        kanji: "憚",
        radicals: "｜口十田忙"
    },
    {
        kanji: "憊",
        radicals: "化心用厂艾"
    },
    {
        kanji: "憑",
        radicals: "心馬冫杰"
    },
    {
        kanji: "憫",
        radicals: "文忙門"
    },
    {
        kanji: "憮",
        radicals: "忙杰無一｜ノ乞"
    },
    {
        kanji: "懌",
        radicals: "十辛土買忙立亠"
    },
    {
        kanji: "懊",
        radicals: "大米忙冂釆"
    },
    {
        kanji: "應",
        radicals: "化心广隹"
    },
    {
        kanji: "懷",
        radicals: "衣買忙亠"
    },
    {
        kanji: "懈",
        radicals: "角牛刀忙"
    },
    {
        kanji: "懃",
        radicals: "心力艾土口二"
    },
    {
        kanji: "懆",
        radicals: "口忙木品"
    },
    {
        kanji: "憺",
        radicals: "言忙儿厂勹"
    },
    {
        kanji: "懋",
        radicals: "心矛木マ"
    },
    {
        kanji: "罹",
        radicals: "買忙隹"
    },
    {
        kanji: "懍",
        radicals: "禾口忙亠囗"
    },
    {
        kanji: "懦",
        radicals: "雨而忙"
    },
    {
        kanji: "懣",
        radicals: "｜一汁心入冂凵"
    },
    {
        kanji: "懶",
        radicals: "｜貝目口ハ頁忙木"
    },
    {
        kanji: "懺",
        radicals: "人忙戈韭"
    },
    {
        kanji: "懴",
        radicals: "土忙戈韭"
    },
    {
        kanji: "懿",
        radicals: "欠口士心豆并冖冫"
    },
    {
        kanji: "懽",
        radicals: "口十忙艾隹"
    },
    {
        kanji: "懼",
        radicals: "忙目隹"
    },
    {
        kanji: "懾",
        radicals: "耳忙"
    },
    {
        kanji: "戀",
        radicals: "言糸幺小心"
    },
    {
        kanji: "戈",
        radicals: "戈"
    },
    {
        kanji: "戉",
        radicals: "戈"
    },
    {
        kanji: "戍",
        radicals: "ノ丶戈厂"
    },
    {
        kanji: "戌",
        radicals: "ノ戈丶厂"
    },
    {
        kanji: "戔",
        radicals: "戈"
    },
    {
        kanji: "戛",
        radicals: "一自戈白目"
    },
    {
        kanji: "戞",
        radicals: "一自冖戈"
    },
    {
        kanji: "戡",
        radicals: "甘儿匚戈"
    },
    {
        kanji: "截",
        radicals: "土戈隹"
    },
    {
        kanji: "戮",
        radicals: "羽个冫彡戈"
    },
    {
        kanji: "戰",
        radicals: "｜口十田戈"
    },
    {
        kanji: "戲",
        radicals: "口豆并卜匕厂戈虍"
    },
    {
        kanji: "戳",
        radicals: "ヨ戈隹"
    },
    {
        kanji: "扁",
        radicals: "｜一戸冂冊尸廾"
    },
    {
        kanji: "扎",
        radicals: "乙扎"
    },
    {
        kanji: "扞",
        radicals: "干扎"
    },
    {
        kanji: "扣",
        radicals: "口扎"
    },
    {
        kanji: "扛",
        radicals: "工扎"
    },
    {
        kanji: "扠",
        radicals: "又丶扎"
    },
    {
        kanji: "扨",
        radicals: "刀扎丶"
    },
    {
        kanji: "扼",
        radicals: "卩厂扎"
    },
    {
        kanji: "抂",
        radicals: "王扎"
    },
    {
        kanji: "抉",
        radicals: "人大二扎ユ"
    },
    {
        kanji: "找",
        radicals: "戈扎"
    },
    {
        kanji: "抒",
        radicals: "矛亅扎マ"
    },
    {
        kanji: "抓",
        radicals: "爪扎"
    },
    {
        kanji: "抖",
        radicals: "斗扎"
    },
    {
        kanji: "拔",
        radicals: "ノ一丶扎"
    },
    {
        kanji: "抃",
        radicals: "卜亠扎"
    },
    {
        kanji: "抔",
        radicals: "｜ノ一丶扎"
    },
    {
        kanji: "拗",
        radicals: "力幺扎"
    },
    {
        kanji: "拑",
        radicals: "甘扎"
    },
    {
        kanji: "抻",
        radicals: "｜日扎田"
    },
    {
        kanji: "拏",
        radicals: "手女又"
    },
    {
        kanji: "拿",
        radicals: "口手个一"
    },
    {
        kanji: "拆",
        radicals: "斤丶扎"
    },
    {
        kanji: "擔",
        radicals: "言儿厂扎勹"
    },
    {
        kanji: "拈",
        radicals: "口卜扎"
    },
    {
        kanji: "拜",
        radicals: "ノ干扎"
    },
    {
        kanji: "拌",
        radicals: "｜干二ハ扎十"
    },
    {
        kanji: "拊",
        radicals: "化寸扎"
    },
    {
        kanji: "拂",
        radicals: "｜ノ弓扎"
    },
    {
        kanji: "拇",
        radicals: "母扎毋"
    },
    {
        kanji: "抛",
        radicals: "ノ九扎力"
    },
    {
        kanji: "拉",
        radicals: "立扎"
    },
    {
        kanji: "挌",
        radicals: "口夂扎"
    },
    {
        kanji: "拮",
        radicals: "口士扎"
    },
    {
        kanji: "拱",
        radicals: "｜一二ハ扎"
    },
    {
        kanji: "挧",
        radicals: "羽冫扎"
    },
    {
        kanji: "挂",
        radicals: "土扎"
    },
    {
        kanji: "挈",
        radicals: "手土刀"
    },
    {
        kanji: "拯",
        radicals: "水扎"
    },
    {
        kanji: "拵",
        radicals: "ノ一子扎"
    },
    {
        kanji: "捐",
        radicals: "月口扎"
    },
    {
        kanji: "挾",
        radicals: "人大扎"
    },
    {
        kanji: "捍",
        radicals: "干日扎"
    },
    {
        kanji: "搜",
        radicals: "｜臼支又扎十"
    },
    {
        kanji: "捏",
        radicals: "土日扎"
    },
    {
        kanji: "掖",
        radicals: "化丶亠夂扎夕"
    },
    {
        kanji: "掎",
        radicals: "口大亅扎一"
    },
    {
        kanji: "掀",
        radicals: "斤欠扎"
    },
    {
        kanji: "掫",
        radicals: "耳又扎"
    },
    {
        kanji: "捶",
        radicals: "｜ノ二扎"
    },
    {
        kanji: "掣",
        radicals: "刈缶牛巾手凵"
    },
    {
        kanji: "掏",
        radicals: "缶凵勹扎"
    },
    {
        kanji: "掉",
        radicals: "十日卜扎曰"
    },
    {
        kanji: "掟",
        radicals: "疋宀扎"
    },
    {
        kanji: "掵",
        radicals: "口个卩扎一"
    },
    {
        kanji: "捫",
        radicals: "門扎"
    },
    {
        kanji: "捩",
        radicals: "戸大扎一尸"
    },
    {
        kanji: "掾",
        radicals: "ヨ扎豕"
    },
    {
        kanji: "揩",
        radicals: "白比扎"
    },
    {
        kanji: "揀",
        radicals: "｜日ハ木扎"
    },
    {
        kanji: "揆",
        radicals: "人大二扎癶"
    },
    {
        kanji: "揣",
        radicals: "山而扎"
    },
    {
        kanji: "揉",
        radicals: "矛木扎マ"
    },
    {
        kanji: "插",
        radicals: "ノ臼十扎"
    },
    {
        kanji: "揶",
        radicals: "耳邦扎"
    },
    {
        kanji: "揄",
        radicals: "刈月个扎一"
    },
    {
        kanji: "搖",
        radicals: "缶夕凵扎"
    },
    {
        kanji: "搴",
        radicals: "｜一手二ハ宀"
    },
    {
        kanji: "搆",
        radicals: "｜一黄冂扎十"
    },
    {
        kanji: "搓",
        radicals: "王工并羊扎"
    },
    {
        kanji: "搦",
        radicals: "弓冫扎"
    },
    {
        kanji: "搶",
        radicals: "戸口个扎一尸"
    },
    {
        kanji: "攝",
        radicals: "耳扎"
    },
    {
        kanji: "搗",
        radicals: "山鳥扎"
    },
    {
        kanji: "搨",
        radicals: "羽日冫扎"
    },
    {
        kanji: "搏",
        radicals: "十寸田丶扎"
    },
    {
        kanji: "摧",
        radicals: "山扎隹"
    },
    {
        kanji: "摯",
        radicals: "ノ九手十辛立丶"
    },
    {
        kanji: "摶",
        radicals: "十寸虫田厶扎"
    },
    {
        kanji: "摎",
        radicals: "羽个冫彡扎"
    },
    {
        kanji: "攪",
        radicals: "臼見扎"
    },
    {
        kanji: "撕",
        radicals: "甘斤ハ扎"
    },
    {
        kanji: "撓",
        radicals: "土儿扎"
    },
    {
        kanji: "撥",
        radicals: "二儿扎癶"
    },
    {
        kanji: "撩",
        radicals: "小人大日并亠扎"
    },
    {
        kanji: "撈",
        radicals: "火力冖扎"
    },
    {
        kanji: "撼",
        radicals: "ノ口心戈扎"
    },
    {
        kanji: "據",
        radicals: "卜匕厂扎虍豕"
    },
    {
        kanji: "擒",
        radicals: "个亠凵扎禹"
    },
    {
        kanji: "擅",
        radicals: "口日亠囗扎一"
    },
    {
        kanji: "擇",
        radicals: "十辛土買立亠扎"
    },
    {
        kanji: "撻",
        radicals: "王込十辛土羊立亠扎"
    },
    {
        kanji: "擘",
        radicals: "口手十辛立尸"
    },
    {
        kanji: "擂",
        radicals: "雨田扎"
    },
    {
        kanji: "擱",
        radicals: "口門夂扎"
    },
    {
        kanji: "擧",
        radicals: "臼手ハ"
    },
    {
        kanji: "舉",
        radicals: "｜一臼二ハ"
    },
    {
        kanji: "擠",
        radicals: "亠扎齊刀氏廾"
    },
    {
        kanji: "擡",
        radicals: "口士至土冖厶扎"
    },
    {
        kanji: "抬",
        radicals: "口厶扎"
    },
    {
        kanji: "擣",
        radicals: "口工士寸扎"
    },
    {
        kanji: "擯",
        radicals: "ノ貝目ハ小宀扎"
    },
    {
        kanji: "攬",
        radicals: "見臣扎乞"
    },
    {
        kanji: "擶",
        radicals: "刈月竹并扎"
    },
    {
        kanji: "擴",
        radicals: "黄田ハ广扎"
    },
    {
        kanji: "擲",
        radicals: "大酉并邦扎"
    },
    {
        kanji: "擺",
        radicals: "月買匕厶扎"
    },
    {
        kanji: "攀",
        radicals: "一手大ハ木爻"
    },
    {
        kanji: "擽",
        radicals: "白木冫扎幺"
    },
    {
        kanji: "攘",
        radicals: "衣二ハ亠扎口"
    },
    {
        kanji: "攜",
        radicals: "口山儿冂扎隹"
    },
    {
        kanji: "攅",
        radicals: "貝目ハ人大土亠扎二"
    },
    {
        kanji: "攤",
        radicals: "二扎艾隹井"
    },
    {
        kanji: "攣",
        radicals: "言糸幺小手"
    },
    {
        kanji: "攫",
        radicals: "又目扎隹"
    },
    {
        kanji: "攴",
        radicals: "攵"
    },
    {
        kanji: "攵",
        radicals: "攵乞"
    },
    {
        kanji: "攷",
        radicals: "攵乞"
    },
    {
        kanji: "收",
        radicals: "｜攵乞"
    },
    {
        kanji: "攸",
        radicals: "｜ノ攵乞"
    },
    {
        kanji: "畋",
        radicals: "田攵乞"
    },
    {
        kanji: "效",
        radicals: "父亠攵乞"
    },
    {
        kanji: "敖",
        radicals: "土方攵亠二乞"
    },
    {
        kanji: "敕",
        radicals: "｜口ハ木攵乞"
    },
    {
        kanji: "敍",
        radicals: "干小个攵一"
    },
    {
        kanji: "敘",
        radicals: "干小个攵一乞"
    },
    {
        kanji: "敞",
        radicals: "口尚冂攵乞"
    },
    {
        kanji: "敝",
        radicals: "｜巾尚并冂攵乞"
    },
    {
        kanji: "敲",
        radicals: "口高亠冂攵"
    },
    {
        kanji: "數",
        radicals: "｜一口女攵乞"
    },
    {
        kanji: "斂",
        radicals: "口人个攵一乞"
    },
    {
        kanji: "斃",
        radicals: "巾小尚并夕冂匕攵乞"
    },
    {
        kanji: "變",
        radicals: "言糸幺小攵乞"
    },
    {
        kanji: "斛",
        radicals: "角斗"
    },
    {
        kanji: "斟",
        radicals: "甘斗儿匚"
    },
    {
        kanji: "斫",
        radicals: "ノ斤口石"
    },
    {
        kanji: "斷",
        radicals: "｜斤幺"
    },
    {
        kanji: "旃",
        radicals: "方冂乞"
    },
    {
        kanji: "旆",
        radicals: "干缶巾方凵乞"
    },
    {
        kanji: "旁",
        radicals: "并方立亠冖"
    },
    {
        kanji: "旄",
        radicals: "方毛乞"
    },
    {
        kanji: "旌",
        radicals: "生方乞"
    },
    {
        kanji: "旒",
        radicals: "川方亠厶乞"
    },
    {
        kanji: "旛",
        radicals: "田釆米方乞"
    },
    {
        kanji: "旙",
        radicals: "田釆米方"
    },
    {
        kanji: "无",
        radicals: "无"
    },
    {
        kanji: "旡",
        radicals: "无"
    },
    {
        kanji: "旱",
        radicals: "干日"
    },
    {
        kanji: "杲",
        radicals: "日木"
    },
    {
        kanji: "昊",
        radicals: "一大日二"
    },
    {
        kanji: "昃",
        radicals: "人日厂"
    },
    {
        kanji: "旻",
        radicals: "日文"
    },
    {
        kanji: "杳",
        radicals: "日木"
    },
    {
        kanji: "昵",
        radicals: "日匕尸"
    },
    {
        kanji: "昶",
        radicals: "水日丶"
    },
    {
        kanji: "昴",
        radicals: "日卩"
    },
    {
        kanji: "昜",
        radicals: "ノ一日勿勹"
    },
    {
        kanji: "晏",
        radicals: "女日宀"
    },
    {
        kanji: "晄",
        radicals: "尚日儿"
    },
    {
        kanji: "晉",
        radicals: "一二日厶"
    },
    {
        kanji: "晁",
        radicals: "日儿冫"
    },
    {
        kanji: "晞",
        radicals: "ノ一巾日"
    },
    {
        kanji: "晝",
        radicals: "一日聿"
    },
    {
        kanji: "晤",
        radicals: "口日五"
    },
    {
        kanji: "晧",
        radicals: "ノ口土日"
    },
    {
        kanji: "晨",
        radicals: "辰日衣"
    },
    {
        kanji: "晟",
        radicals: "ノ日戈"
    },
    {
        kanji: "晢",
        radicals: "斤日扎"
    },
    {
        kanji: "晰",
        radicals: "斤日木"
    },
    {
        kanji: "暃",
        radicals: "日非"
    },
    {
        kanji: "暈",
        radicals: "車日冖"
    },
    {
        kanji: "暎",
        radicals: "人大日冂艾冖"
    },
    {
        kanji: "暉",
        radicals: "車日冖"
    },
    {
        kanji: "暄",
        radicals: "一二日宀"
    },
    {
        kanji: "暘",
        radicals: "ノ一日勹勿"
    },
    {
        kanji: "暝",
        radicals: "日ハ亠冖"
    },
    {
        kanji: "曁",
        radicals: "一艮日无匕白"
    },
    {
        kanji: "暹",
        radicals: "込日隹"
    },
    {
        kanji: "曉",
        radicals: "土日儿"
    },
    {
        kanji: "暾",
        radicals: "口子日亠攵乞"
    },
    {
        kanji: "暼",
        radicals: "巾小尚日并冂攵乞"
    },
    {
        kanji: "曄",
        radicals: "｜一二日艾"
    },
    {
        kanji: "暸",
        radicals: "小大日并亠"
    },
    {
        kanji: "曖",
        radicals: "心爪日冖夂"
    },
    {
        kanji: "曚",
        radicals: "日冖艾豕"
    },
    {
        kanji: "曠",
        radicals: "黄田日ハ广"
    },
    {
        kanji: "昿",
        radicals: "日厶广"
    },
    {
        kanji: "曦",
        radicals: "王日并羊亅戈"
    },
    {
        kanji: "曩",
        radicals: "｜衣一日ハ亠井"
    },
    {
        kanji: "曰",
        radicals: "曰"
    },
    {
        kanji: "曵",
        radicals: "弋曰"
    },
    {
        kanji: "曷",
        radicals: "日勹匕曰"
    },
    {
        kanji: "朏",
        radicals: "｜月山"
    },
    {
        kanji: "朖",
        radicals: "月艮"
    },
    {
        kanji: "朞",
        radicals: "一甘月ハ"
    },
    {
        kanji: "朦",
        radicals: "月冖艾豕"
    },
    {
        kanji: "朧",
        radicals: "月立"
    },
    {
        kanji: "霸",
        radicals: "雨革月"
    },
    {
        kanji: "朮",
        radicals: "｜一木丶儿"
    },
    {
        kanji: "朿",
        radicals: "｜一ハ木冂"
    },
    {
        kanji: "朶",
        radicals: "ノ木乃"
    },
    {
        kanji: "杁",
        radicals: "入木"
    },
    {
        kanji: "朸",
        radicals: "木力"
    },
    {
        kanji: "朷",
        radicals: "刀木"
    },
    {
        kanji: "杆",
        radicals: "干木"
    },
    {
        kanji: "杞",
        radicals: "木已"
    },
    {
        kanji: "杠",
        radicals: "工木"
    },
    {
        kanji: "杙",
        radicals: "木弋"
    },
    {
        kanji: "杣",
        radicals: "山木"
    },
    {
        kanji: "杤",
        radicals: "ノ一木"
    },
    {
        kanji: "枉",
        radicals: "王木"
    },
    {
        kanji: "杰",
        radicals: "木杰"
    },
    {
        kanji: "枩",
        radicals: "ハ木厶"
    },
    {
        kanji: "杼",
        radicals: "矛木亅"
    },
    {
        kanji: "杪",
        radicals: "ノ小木"
    },
    {
        kanji: "枌",
        radicals: "刀ハ木"
    },
    {
        kanji: "枋",
        radicals: "方木"
    },
    {
        kanji: "枦",
        radicals: "戸木一尸"
    },
    {
        kanji: "枡",
        radicals: "ノ木廾"
    },
    {
        kanji: "枅",
        radicals: "木廾二一ノ"
    },
    {
        kanji: "枷",
        radicals: "口木力"
    },
    {
        kanji: "柯",
        radicals: "口木亅一"
    },
    {
        kanji: "枴",
        radicals: "口刀木"
    },
    {
        kanji: "柬",
        radicals: "巾并木亠"
    },
    {
        kanji: "枳",
        radicals: "口ハ木"
    },
    {
        kanji: "柩",
        radicals: "入木匚久"
    },
    {
        kanji: "枸",
        radicals: "口木勹"
    },
    {
        kanji: "柤",
        radicals: "木目"
    },
    {
        kanji: "柞",
        radicals: "｜ノ木"
    },
    {
        kanji: "柝",
        radicals: "斤木丶"
    },
    {
        kanji: "柢",
        radicals: "氏木"
    },
    {
        kanji: "柮",
        radicals: "｜山木凵"
    },
    {
        kanji: "枹",
        radicals: "木勹已"
    },
    {
        kanji: "柎",
        radicals: "化寸木"
    },
    {
        kanji: "柆",
        radicals: "木立"
    },
    {
        kanji: "柧",
        radicals: "瓜木"
    },
    {
        kanji: "檜",
        radicals: "日買木个一"
    },
    {
        kanji: "栞",
        radicals: "干木"
    },
    {
        kanji: "框",
        radicals: "王木匚"
    },
    {
        kanji: "栩",
        radicals: "羽木冫"
    },
    {
        kanji: "桀",
        radicals: "舛木夕"
    },
    {
        kanji: "桍",
        radicals: "大二木勹"
    },
    {
        kanji: "栲",
        radicals: "木老勹"
    },
    {
        kanji: "桎",
        radicals: "至土木厶一"
    },
    {
        kanji: "梳",
        radicals: "川木亠厶"
    },
    {
        kanji: "栫",
        radicals: "ノ一子木"
    },
    {
        kanji: "桙",
        radicals: "牛木厶"
    },
    {
        kanji: "档",
        radicals: "ヨ尚木"
    },
    {
        kanji: "桷",
        radicals: "角木"
    },
    {
        kanji: "桿",
        radicals: "干日木"
    },
    {
        kanji: "梟",
        radicals: "鳥木"
    },
    {
        kanji: "梏",
        radicals: "ノ口土木"
    },
    {
        kanji: "梭",
        radicals: "木儿厶夂"
    },
    {
        kanji: "梔",
        radicals: "木厂巴"
    },
    {
        kanji: "條",
        radicals: "化木攵乞｜"
    },
    {
        kanji: "梛",
        radicals: "刀邦木二"
    },
    {
        kanji: "梃",
        radicals: "王木廴"
    },
    {
        kanji: "檮",
        radicals: "口工士寸木"
    },
    {
        kanji: "梹",
        radicals: "斤ハ木一"
    },
    {
        kanji: "桴",
        radicals: "子爪木"
    },
    {
        kanji: "梵",
        radicals: "木丶几"
    },
    {
        kanji: "梠",
        radicals: "口木ノ"
    },
    {
        kanji: "梺",
        radicals: "一卜木"
    },
    {
        kanji: "椏",
        radicals: "一二木"
    },
    {
        kanji: "梍",
        radicals: "乙白木匕"
    },
    {
        kanji: "桾",
        radicals: "ヨ口木尸"
    },
    {
        kanji: "椁",
        radicals: "口子木亠"
    },
    {
        kanji: "棊",
        radicals: "一甘ハ木"
    },
    {
        kanji: "椈",
        radicals: "米木勹"
    },
    {
        kanji: "棘",
        radicals: "｜巾ハ木亠冂"
    },
    {
        kanji: "椢",
        radicals: "王木囗"
    },
    {
        kanji: "椦",
        radicals: "大二并木力"
    },
    {
        kanji: "棡",
        radicals: "并木冂凵山岡"
    },
    {
        kanji: "椌",
        radicals: "穴工木儿"
    },
    {
        kanji: "棍",
        radicals: "日比木"
    },
    {
        kanji: "棔",
        radicals: "氏日木"
    },
    {
        kanji: "棧",
        radicals: "木戈"
    },
    {
        kanji: "棕",
        radicals: "示二小木宀"
    },
    {
        kanji: "椶",
        radicals: "木儿凵夂"
    },
    {
        kanji: "椒",
        radicals: "小卜又木"
    },
    {
        kanji: "椄",
        radicals: "女木立"
    },
    {
        kanji: "棗",
        radicals: "｜一巾ハ木亠冂"
    },
    {
        kanji: "棣",
        radicals: "ヨ水木隶"
    },
    {
        kanji: "椥",
        radicals: "口木矢乞"
    },
    {
        kanji: "棹",
        radicals: "十日卜木"
    },
    {
        kanji: "棠",
        radicals: "口尚木冖"
    },
    {
        kanji: "棯",
        radicals: "心木个一"
    },
    {
        kanji: "椨",
        radicals: "化寸木广"
    },
    {
        kanji: "椪",
        radicals: "｜一并木"
    },
    {
        kanji: "椚",
        radicals: "木門"
    },
    {
        kanji: "椣",
        radicals: "｜一日ハ木"
    },
    {
        kanji: "椡",
        radicals: "刈至土木厶"
    },
    {
        kanji: "棆",
        radicals: "｜一木个冊廾"
    },
    {
        kanji: "楹",
        radicals: "ノ皿又木乃"
    },
    {
        kanji: "楷",
        radicals: "白比木"
    },
    {
        kanji: "楜",
        radicals: "月口十木"
    },
    {
        kanji: "楸",
        radicals: "火禾木"
    },
    {
        kanji: "楫",
        radicals: "口耳木"
    },
    {
        kanji: "楔",
        radicals: "大土刀木亠二"
    },
    {
        kanji: "楾",
        radicals: "水白木"
    },
    {
        kanji: "楮",
        radicals: "日木老"
    },
    {
        kanji: "椹",
        radicals: "甘木儿匚"
    },
    {
        kanji: "楴",
        radicals: "巾并木立亠冖"
    },
    {
        kanji: "椽",
        radicals: "ヨ木豕"
    },
    {
        kanji: "楙",
        radicals: "矛木"
    },
    {
        kanji: "椰",
        radicals: "耳邦木"
    },
    {
        kanji: "楡",
        radicals: "刈月木个一"
    },
    {
        kanji: "楞",
        radicals: "買方木"
    },
    {
        kanji: "楝",
        radicals: "巾ハ木亠"
    },
    {
        kanji: "榁",
        radicals: "至土木厶宀"
    },
    {
        kanji: "楪",
        radicals: "木世"
    },
    {
        kanji: "榲",
        radicals: "皿日木"
    },
    {
        kanji: "榮",
        radicals: "火木冖"
    },
    {
        kanji: "槐",
        radicals: "鬼田木儿匕厶"
    },
    {
        kanji: "榿",
        radicals: "口山豆并木"
    },
    {
        kanji: "槁",
        radicals: "口高木亠冂"
    },
    {
        kanji: "槓",
        radicals: "貝目ハ工木"
    },
    {
        kanji: "榾",
        radicals: "月口木冖骨"
    },
    {
        kanji: "槎",
        radicals: "ノ王工并木羊"
    },
    {
        kanji: "寨",
        radicals: "｜一ハ木宀"
    },
    {
        kanji: "槊",
        radicals: "月并木屮"
    },
    {
        kanji: "槝",
        radicals: "山鳥木"
    },
    {
        kanji: "榻",
        radicals: "羽日木冫"
    },
    {
        kanji: "槃",
        radicals: "舟木殳几又"
    },
    {
        kanji: "榧",
        radicals: "非木匚"
    },
    {
        kanji: "樮",
        radicals: "火西木"
    },
    {
        kanji: "榑",
        radicals: "十寸田木丶"
    },
    {
        kanji: "榠",
        radicals: "日ハ木亠冖"
    },
    {
        kanji: "榜",
        radicals: "并方木立亠冖"
    },
    {
        kanji: "榕",
        radicals: "穴口ハ木个宀谷"
    },
    {
        kanji: "榴",
        radicals: "田刀木厶"
    },
    {
        kanji: "槞",
        radicals: "木立竜"
    },
    {
        kanji: "槨",
        radicals: "口子邦木亠"
    },
    {
        kanji: "樂",
        radicals: "白木幺"
    },
    {
        kanji: "樛",
        radicals: "羽木个冫彡"
    },
    {
        kanji: "槿",
        radicals: "土二木艾口"
    },
    {
        kanji: "權",
        radicals: "口十木艾隹"
    },
    {
        kanji: "槹",
        radicals: "十斗白木"
    },
    {
        kanji: "槲",
        radicals: "角斗木"
    },
    {
        kanji: "槧",
        radicals: "斤車木"
    },
    {
        kanji: "樅",
        radicals: "并疋木彳"
    },
    {
        kanji: "榱",
        radicals: "衣木亠"
    },
    {
        kanji: "樞",
        radicals: "口木匚品"
    },
    {
        kanji: "槭",
        radicals: "小卜木戈"
    },
    {
        kanji: "樔",
        radicals: "尚田木巛"
    },
    {
        kanji: "槫",
        radicals: "十寸虫田木厶"
    },
    {
        kanji: "樊",
        radicals: "木大爻"
    },
    {
        kanji: "樒",
        radicals: "ノ山心木丶宀"
    },
    {
        kanji: "櫁",
        radicals: "ノ心虫木丶宀"
    },
    {
        kanji: "樣",
        radicals: "王水并木羊丶"
    },
    {
        kanji: "樓",
        radicals: "｜一口女木"
    },
    {
        kanji: "橄",
        radicals: "耳木攵乞"
    },
    {
        kanji: "樌",
        radicals: "貝目ハ田木"
    },
    {
        kanji: "橲",
        radicals: "口士十豆并木"
    },
    {
        kanji: "樶",
        radicals: "耳日又木"
    },
    {
        kanji: "橸",
        radicals: "日木"
    },
    {
        kanji: "橇",
        radicals: "毛木"
    },
    {
        kanji: "橢",
        radicals: "ノ一月工木阡"
    },
    {
        kanji: "橙",
        radicals: "口豆并木癶"
    },
    {
        kanji: "橦",
        radicals: "木里立"
    },
    {
        kanji: "橈",
        radicals: "土木儿"
    },
    {
        kanji: "樸",
        radicals: "二并木羊"
    },
    {
        kanji: "樢",
        radicals: "鳥木杰"
    },
    {
        kanji: "檐",
        radicals: "言木儿厂"
    },
    {
        kanji: "檍",
        radicals: "音心日木立"
    },
    {
        kanji: "檠",
        radicals: "口木勹攵艾乞"
    },
    {
        kanji: "檄",
        radicals: "白方木攵乞"
    },
    {
        kanji: "檢",
        radicals: "口人木个一"
    },
    {
        kanji: "檣",
        radicals: "口人土木囗"
    },
    {
        kanji: "檗",
        radicals: "口十辛木立尸"
    },
    {
        kanji: "蘗",
        radicals: "口十辛木立尸艾"
    },
    {
        kanji: "檻",
        radicals: "皿臣二木乞"
    },
    {
        kanji: "櫃",
        radicals: "一貝目ハ木匚｜口"
    },
    {
        kanji: "櫂",
        radicals: "ヨ木隹"
    },
    {
        kanji: "檸",
        radicals: "一心買木亅宀皿"
    },
    {
        kanji: "檳",
        radicals: "ノ貝目ハ小木宀"
    },
    {
        kanji: "檬",
        radicals: "木冖艾豕"
    },
    {
        kanji: "櫞",
        radicals: "ヨ糸幺小木豕"
    },
    {
        kanji: "櫑",
        radicals: "田木"
    },
    {
        kanji: "櫟",
        radicals: "白木幺"
    },
    {
        kanji: "檪",
        radicals: "白木冫"
    },
    {
        kanji: "櫚",
        radicals: "口木門ノ"
    },
    {
        kanji: "櫪",
        radicals: "止木厂"
    },
    {
        kanji: "櫻",
        radicals: "貝目ハ女木"
    },
    {
        kanji: "欅",
        radicals: "尚ハ木手"
    },
    {
        kanji: "蘖",
        radicals: "口十辛木立艾｜"
    },
    {
        kanji: "櫺",
        radicals: "雨口木"
    },
    {
        kanji: "欒",
        radicals: "言糸幺小木"
    },
    {
        kanji: "欖",
        radicals: "見臣二木乞"
    },
    {
        kanji: "鬱",
        radicals: "缶木冖凵匕彡鬯"
    },
    {
        kanji: "欟",
        radicals: "見口十木艾隹"
    },
    {
        kanji: "欸",
        radicals: "欠矢厶乞"
    },
    {
        kanji: "欷",
        radicals: "ノ一巾欠"
    },
    {
        kanji: "盜",
        radicals: "欠皿汁"
    },
    {
        kanji: "欹",
        radicals: "欠口大亅一"
    },
    {
        kanji: "飮",
        radicals: "｜欠个食"
    },
    {
        kanji: "歇",
        radicals: "欠日勹匕"
    },
    {
        kanji: "歃",
        radicals: "ノ臼欠十"
    },
    {
        kanji: "歉",
        radicals: "｜ヨ欠并"
    },
    {
        kanji: "歐",
        radicals: "欠口匚品"
    },
    {
        kanji: "歙",
        radicals: "羽欠口个冫"
    },
    {
        kanji: "歔",
        radicals: "欠并卜匕厂虍"
    },
    {
        kanji: "歛",
        radicals: "欠口人个一"
    },
    {
        kanji: "歟",
        radicals: "一臼欠ハ"
    },
    {
        kanji: "歡",
        radicals: "欠口十艾隹"
    },
    {
        kanji: "歸",
        radicals: "ヨ巾口止冖｜"
    },
    {
        kanji: "歹",
        radicals: "歹"
    },
    {
        kanji: "歿",
        radicals: "又歹勹"
    },
    {
        kanji: "殀",
        radicals: "ノ大歹"
    },
    {
        kanji: "殄",
        radicals: "个彡歹"
    },
    {
        kanji: "殃",
        radicals: "人大冂歹冖"
    },
    {
        kanji: "殍",
        radicals: "子爪歹"
    },
    {
        kanji: "殘",
        radicals: "戈歹"
    },
    {
        kanji: "殕",
        radicals: "口立歹"
    },
    {
        kanji: "殞",
        radicals: "貝目ハ口歹"
    },
    {
        kanji: "殤",
        radicals: "ノ一日勿歹勹乞"
    },
    {
        kanji: "殪",
        radicals: "口士豆并冖歹"
    },
    {
        kanji: "殫",
        radicals: "口十田歹"
    },
    {
        kanji: "殯",
        radicals: "ノ貝目ハ小宀歹"
    },
    {
        kanji: "殲",
        radicals: "人戈歹韭"
    },
    {
        kanji: "殱",
        radicals: "土戈歹韭"
    },
    {
        kanji: "殳",
        radicals: "殳几又"
    },
    {
        kanji: "殷",
        radicals: "厂殳几又"
    },
    {
        kanji: "殼",
        radicals: "土儿冖殳几又"
    },
    {
        kanji: "毆",
        radicals: "口匚殳品几又"
    },
    {
        kanji: "毋",
        radicals: "母毋"
    },
    {
        kanji: "毓",
        radicals: "川母亠厶毋乞"
    },
    {
        kanji: "毟",
        radicals: "ノ小毛"
    },
    {
        kanji: "毬",
        radicals: "水毛丶亠"
    },
    {
        kanji: "毫",
        radicals: "口毛亠冖"
    },
    {
        kanji: "毳",
        radicals: "毛"
    },
    {
        kanji: "毯",
        radicals: "火毛"
    },
    {
        kanji: "麾",
        radicals: "毛木广麻"
    },
    {
        kanji: "氈",
        radicals: "口毛目亠囗日一"
    },
    {
        kanji: "氓",
        radicals: "亡口氏尸"
    },
    {
        kanji: "气",
        radicals: "气乞"
    },
    {
        kanji: "氛",
        radicals: "刀ハ气乞"
    },
    {
        kanji: "氤",
        radicals: "大囗气乞"
    },
    {
        kanji: "氣",
        radicals: "米气乞"
    },
    {
        kanji: "汞",
        radicals: "工水"
    },
    {
        kanji: "汕",
        radicals: "山汁"
    },
    {
        kanji: "汢",
        radicals: "汁土"
    },
    {
        kanji: "汪",
        radicals: "王汁"
    },
    {
        kanji: "沂",
        radicals: "斤汁"
    },
    {
        kanji: "沍",
        radicals: "ヨ一汁彑"
    },
    {
        kanji: "沚",
        radicals: "止汁"
    },
    {
        kanji: "沁",
        radicals: "汁心"
    },
    {
        kanji: "沛",
        radicals: "巾汁亠"
    },
    {
        kanji: "汾",
        radicals: "汁刀ハ"
    },
    {
        kanji: "汨",
        radicals: "汁日"
    },
    {
        kanji: "汳",
        radicals: "汁又厂"
    },
    {
        kanji: "沒",
        radicals: "汁又力"
    },
    {
        kanji: "沐",
        radicals: "汁木"
    },
    {
        kanji: "泄",
        radicals: "汁世"
    },
    {
        kanji: "泱",
        radicals: "汁人大冂冖"
    },
    {
        kanji: "泓",
        radicals: "弓汁厶"
    },
    {
        kanji: "沽",
        radicals: "口十汁"
    },
    {
        kanji: "泗",
        radicals: "汁儿囗"
    },
    {
        kanji: "泅",
        radicals: "汁人囗"
    },
    {
        kanji: "泝",
        radicals: "斤汁丶"
    },
    {
        kanji: "沮",
        radicals: "汁目"
    },
    {
        kanji: "沱",
        radicals: "汁匕宀"
    },
    {
        kanji: "沾",
        radicals: "口汁卜"
    },
    {
        kanji: "沺",
        radicals: "汁田"
    },
    {
        kanji: "泛",
        radicals: "ノ乙汁亠"
    },
    {
        kanji: "泯",
        radicals: "口氏汁尸"
    },
    {
        kanji: "泙",
        radicals: "干汁ハ"
    },
    {
        kanji: "泪",
        radicals: "汁目"
    },
    {
        kanji: "洟",
        radicals: "弓汁人大"
    },
    {
        kanji: "衍",
        radicals: "行汁彳"
    },
    {
        kanji: "洶",
        radicals: "汁凵勹"
    },
    {
        kanji: "洫",
        radicals: "血皿汁"
    },
    {
        kanji: "洽",
        radicals: "口汁个一"
    },
    {
        kanji: "洸",
        radicals: "汁尚儿"
    },
    {
        kanji: "洙",
        radicals: "｜ノ牛汁土二ハ木"
    },
    {
        kanji: "洵",
        radicals: "汁日勹"
    },
    {
        kanji: "洳",
        radicals: "口汁女"
    },
    {
        kanji: "洒",
        radicals: "汁西"
    },
    {
        kanji: "洌",
        radicals: "刈汁歹"
    },
    {
        kanji: "浣",
        radicals: "汁二儿宀"
    },
    {
        kanji: "涓",
        radicals: "月口汁"
    },
    {
        kanji: "浤",
        radicals: "ノ一汁厶宀"
    },
    {
        kanji: "浚",
        radicals: "汁ハ厶夂"
    },
    {
        kanji: "浹",
        radicals: "汁人大"
    },
    {
        kanji: "浙",
        radicals: "斤汁扎"
    },
    {
        kanji: "涎",
        radicals: "ノ止汁廴"
    },
    {
        kanji: "涕",
        radicals: "｜ノ弓汁并"
    },
    {
        kanji: "濤",
        radicals: "口工士汁寸"
    },
    {
        kanji: "涅",
        radicals: "汁土日"
    },
    {
        kanji: "淹",
        radicals: "乙汁大日奄"
    },
    {
        kanji: "渕",
        radicals: "刈汁人大二并"
    },
    {
        kanji: "渊",
        radicals: "｜ノ汁米"
    },
    {
        kanji: "涵",
        radicals: "一汁水凵"
    },
    {
        kanji: "淇",
        radicals: "甘汁ハ"
    },
    {
        kanji: "淦",
        radicals: "金汁"
    },
    {
        kanji: "涸",
        radicals: "口十汁囗"
    },
    {
        kanji: "淆",
        radicals: "ノ一月汁"
    },
    {
        kanji: "淬",
        radicals: "十汁人亠"
    },
    {
        kanji: "淞",
        radicals: "汁ハ木厶"
    },
    {
        kanji: "淌",
        radicals: "口汁尚冂"
    },
    {
        kanji: "淨",
        radicals: "ヨ汁爪亅"
    },
    {
        kanji: "淒",
        radicals: "｜ヨ一汁女"
    },
    {
        kanji: "淅",
        radicals: "斤汁木"
    },
    {
        kanji: "淺",
        radicals: "汁戈"
    },
    {
        kanji: "淙",
        radicals: "示二小汁宀"
    },
    {
        kanji: "淤",
        radicals: "汁方个冫"
    },
    {
        kanji: "淕",
        radicals: "汁土儿"
    },
    {
        kanji: "淪",
        radicals: "｜一汁个冊廾"
    },
    {
        kanji: "淮",
        radicals: "汁隹"
    },
    {
        kanji: "渭",
        radicals: "月汁田"
    },
    {
        kanji: "湮",
        radicals: "汁西土"
    },
    {
        kanji: "渮",
        radicals: "口汁亅艾"
    },
    {
        kanji: "渙",
        radicals: "汁大儿冂"
    },
    {
        kanji: "湲",
        radicals: "ノ一汁爪二又"
    },
    {
        kanji: "湟",
        radicals: "王汁白"
    },
    {
        kanji: "渾",
        radicals: "車汁冖"
    },
    {
        kanji: "渣",
        radicals: "汁木目"
    },
    {
        kanji: "湫",
        radicals: "火禾汁"
    },
    {
        kanji: "渫",
        radicals: "汁木世"
    },
    {
        kanji: "湶",
        radicals: "汁水白"
    },
    {
        kanji: "湍",
        radicals: "山而汁"
    },
    {
        kanji: "渟",
        radicals: "口汁亅亠冖"
    },
    {
        kanji: "湃",
        radicals: "干汁扎"
    },
    {
        kanji: "渺",
        radicals: "ノ汁小目"
    },
    {
        kanji: "湎",
        radicals: "一汁面囗"
    },
    {
        kanji: "渤",
        radicals: "子十汁力冖"
    },
    {
        kanji: "滿",
        radicals: "一汁人入冂凵"
    },
    {
        kanji: "渝",
        radicals: "刈月汁个一"
    },
    {
        kanji: "游",
        radicals: "子汁方乞"
    },
    {
        kanji: "溂",
        radicals: "｜刈口汁ハ木"
    },
    {
        kanji: "溪",
        radicals: "汁大爪幺"
    },
    {
        kanji: "溘",
        radicals: "皿汁土厶"
    },
    {
        kanji: "滉",
        radicals: "汁尚日儿"
    },
    {
        kanji: "溷",
        radicals: "汁囗豕"
    },
    {
        kanji: "滓",
        radicals: "十汁辛立宀"
    },
    {
        kanji: "溽",
        radicals: "汁寸辰衣"
    },
    {
        kanji: "溯",
        radicals: "月汁并屮"
    },
    {
        kanji: "滄",
        radicals: "戸口汁个一尸"
    },
    {
        kanji: "溲",
        radicals: "支汁日又十"
    },
    {
        kanji: "滔",
        radicals: "臼汁爪"
    },
    {
        kanji: "滕",
        radicals: "月人水大二并"
    },
    {
        kanji: "溏",
        radicals: "｜ヨ口汁广"
    },
    {
        kanji: "溥",
        radicals: "十汁寸田丶"
    },
    {
        kanji: "滂",
        radicals: "汁并方立亠冖"
    },
    {
        kanji: "溟",
        radicals: "汁日ハ亠冖"
    },
    {
        kanji: "潁",
        radicals: "貝目ハ水頁匕"
    },
    {
        kanji: "漑",
        radicals: "艮汁无"
    },
    {
        kanji: "灌",
        radicals: "口十汁艾隹"
    },
    {
        kanji: "滬",
        radicals: "戸口汁巴一尸"
    },
    {
        kanji: "滸",
        radicals: "干言汁乞"
    },
    {
        kanji: "滾",
        radicals: "衣口汁ハ亠"
    },
    {
        kanji: "漿",
        radicals: "水寸夕爿"
    },
    {
        kanji: "滲",
        radicals: "汁大厶彡"
    },
    {
        kanji: "漱",
        radicals: "欠口汁木"
    },
    {
        kanji: "滯",
        radicals: "一巾汁儿冖凵"
    },
    {
        kanji: "漲",
        radicals: "弓汁長"
    },
    {
        kanji: "滌",
        radicals: "化汁木攵乞｜"
    },
    {
        kanji: "漾",
        radicals: "王汁水并羊丶"
    },
    {
        kanji: "漓",
        radicals: "汁亠凵禹"
    },
    {
        kanji: "滷",
        radicals: "十汁卜囗鹵"
    },
    {
        kanji: "澆",
        radicals: "汁土儿"
    },
    {
        kanji: "潺",
        radicals: "子汁尸"
    },
    {
        kanji: "潸",
        radicals: "月汁木"
    },
    {
        kanji: "澁",
        radicals: "止汁"
    },
    {
        kanji: "澀",
        radicals: "止汁刀丶"
    },
    {
        kanji: "潯",
        radicals: "ヨ口工汁寸"
    },
    {
        kanji: "潛",
        radicals: "汁日无"
    },
    {
        kanji: "濳",
        radicals: "汁土日儿"
    },
    {
        kanji: "潭",
        radicals: "十汁西日曰"
    },
    {
        kanji: "澂",
        radicals: "王山汁攵乞"
    },
    {
        kanji: "潼",
        radicals: "汁里立"
    },
    {
        kanji: "潘",
        radicals: "汁田釆米"
    },
    {
        kanji: "澎",
        radicals: "口十汁土豆并彡"
    },
    {
        kanji: "澑",
        radicals: "｜一汁田"
    },
    {
        kanji: "濂",
        radicals: "｜ヨ汁ハ广"
    },
    {
        kanji: "潦",
        radicals: "汁小大日并亠"
    },
    {
        kanji: "澳",
        radicals: "汁大米冂釆"
    },
    {
        kanji: "澣",
        radicals: "干十汁日个"
    },
    {
        kanji: "澡",
        radicals: "口汁木品"
    },
    {
        kanji: "澤",
        radicals: "十汁辛土買立亠"
    },
    {
        kanji: "澹",
        radicals: "言汁儿厂"
    },
    {
        kanji: "濆",
        radicals: "貝目ハ十汁艾"
    },
    {
        kanji: "澪",
        radicals: "雨汁个卩一"
    },
    {
        kanji: "濟",
        radicals: "汁亠齊刀氏廾"
    },
    {
        kanji: "濕",
        radicals: "汁日幺杰"
    },
    {
        kanji: "濬",
        radicals: "汁ハ卜目个冖"
    },
    {
        kanji: "濔",
        radicals: "｜一汁ハ冂爻"
    },
    {
        kanji: "濘",
        radicals: "汁心買亅宀皿"
    },
    {
        kanji: "濱",
        radicals: "ノ貝目ハ汁小宀"
    },
    {
        kanji: "濮",
        radicals: "王化汁大并羊"
    },
    {
        kanji: "濛",
        radicals: "汁冖艾豕"
    },
    {
        kanji: "瀉",
        radicals: "臼汁勹宀杰"
    },
    {
        kanji: "瀋",
        radicals: "汁田釆米宀"
    },
    {
        kanji: "濺",
        radicals: "貝目ハ汁戈"
    },
    {
        kanji: "瀑",
        radicals: "｜一汁水二日ハ"
    },
    {
        kanji: "瀁",
        radicals: "王汁食并羊"
    },
    {
        kanji: "瀏",
        radicals: "刈金汁"
    },
    {
        kanji: "濾",
        radicals: "汁田心厂卜"
    },
    {
        kanji: "瀛",
        radicals: "亡月口汁女丶几"
    },
    {
        kanji: "瀚",
        radicals: "羽十汁日个冫"
    },
    {
        kanji: "潴",
        radicals: "汁日犯老"
    },
    {
        kanji: "瀝",
        radicals: "止汁木厂"
    },
    {
        kanji: "瀘",
        radicals: "皿汁田卜匕厂虍"
    },
    {
        kanji: "瀟",
        radicals: "｜ノヨ汁水艾"
    },
    {
        kanji: "瀰",
        radicals: "｜一弓汁ハ冂爻"
    },
    {
        kanji: "瀾",
        radicals: "｜汁田日木門"
    },
    {
        kanji: "瀲",
        radicals: "口汁人个攵一乞"
    },
    {
        kanji: "灑",
        radicals: "鹿汁比冂广"
    },
    {
        kanji: "灣",
        radicals: "弓言糸幺小汁"
    },
    {
        kanji: "炙",
        radicals: "火夕丶"
    },
    {
        kanji: "炒",
        radicals: "ノ火小"
    },
    {
        kanji: "炯",
        radicals: "火口冂"
    },
    {
        kanji: "烱",
        radicals: "火口儿冂"
    },
    {
        kanji: "炬",
        radicals: "火匚巨"
    },
    {
        kanji: "炸",
        radicals: "｜ノ火"
    },
    {
        kanji: "炳",
        radicals: "一火人冂"
    },
    {
        kanji: "炮",
        radicals: "火勹已"
    },
    {
        kanji: "烟",
        radicals: "火大囗"
    },
    {
        kanji: "烋",
        radicals: "化木杰"
    },
    {
        kanji: "烝",
        radicals: "一水亅杰"
    },
    {
        kanji: "烙",
        radicals: "火口夂"
    },
    {
        kanji: "焉",
        radicals: "一止杰"
    },
    {
        kanji: "烽",
        radicals: "｜火二夂"
    },
    {
        kanji: "焜",
        radicals: "火日比"
    },
    {
        kanji: "焙",
        radicals: "火口立"
    },
    {
        kanji: "煥",
        radicals: "火大儿冂"
    },
    {
        kanji: "煕",
        radicals: "臣匚已杰"
    },
    {
        kanji: "熈",
        radicals: "ノ臣卩已杰"
    },
    {
        kanji: "煦",
        radicals: "口日勹杰"
    },
    {
        kanji: "煢",
        radicals: "乙火十冖"
    },
    {
        kanji: "煌",
        radicals: "王火白"
    },
    {
        kanji: "煖",
        radicals: "ノ一火爪又"
    },
    {
        kanji: "煬",
        radicals: "ノ火日勿一勹"
    },
    {
        kanji: "熏",
        radicals: "｜ノ田日杰"
    },
    {
        kanji: "燻",
        radicals: "｜ノ火田日"
    },
    {
        kanji: "熄",
        radicals: "火自心目"
    },
    {
        kanji: "熕",
        radicals: "火貝目ハ工"
    },
    {
        kanji: "熨",
        radicals: "火示二小寸尸"
    },
    {
        kanji: "熬",
        radicals: "土方攵杰乞"
    },
    {
        kanji: "燗",
        radicals: "火月門"
    },
    {
        kanji: "熹",
        radicals: "口士十豆并杰"
    },
    {
        kanji: "熾",
        radicals: "音火日立戈"
    },
    {
        kanji: "燒",
        radicals: "火土儿"
    },
    {
        kanji: "燉",
        radicals: "火口子亠攵乞"
    },
    {
        kanji: "燔",
        radicals: "火田釆米"
    },
    {
        kanji: "燎",
        radicals: "火小大日并亠"
    },
    {
        kanji: "燠",
        radicals: "火大米冂釆"
    },
    {
        kanji: "燬",
        radicals: "臼王火殳几又"
    },
    {
        kanji: "燧",
        radicals: "火込并豕"
    },
    {
        kanji: "燵",
        radicals: "火込土并立亠二"
    },
    {
        kanji: "燼",
        radicals: "｜ヨ火皿杰聿"
    },
    {
        kanji: "燹",
        radicals: "火豕"
    },
    {
        kanji: "燿",
        radicals: "ヨ火隹"
    },
    {
        kanji: "爍",
        radicals: "火白木冫"
    },
    {
        kanji: "爐",
        radicals: "火皿田卜匕厂虍"
    },
    {
        kanji: "爛",
        radicals: "｜火日ハ木門"
    },
    {
        kanji: "爨",
        radicals: "火ハ木冂冖一大口臼"
    },
    {
        kanji: "爭",
        radicals: "ヨ爪亅"
    },
    {
        kanji: "爬",
        radicals: "爪已巴"
    },
    {
        kanji: "爰",
        radicals: "ノ一爪又"
    },
    {
        kanji: "爲",
        radicals: "爪尸杰"
    },
    {
        kanji: "爻",
        radicals: "爻"
    },
    {
        kanji: "爼",
        radicals: "目爻"
    },
    {
        kanji: "爿",
        radicals: "爿"
    },
    {
        kanji: "牀",
        radicals: "木爿"
    },
    {
        kanji: "牆",
        radicals: "口人土囗爿"
    },
    {
        kanji: "牋",
        radicals: "片戈"
    },
    {
        kanji: "牘",
        radicals: "貝目ハ士片儿囗"
    },
    {
        kanji: "牴",
        radicals: "牛氏"
    },
    {
        kanji: "牾",
        radicals: "牛口五"
    },
    {
        kanji: "犂",
        radicals: "ノ禾牛勿"
    },
    {
        kanji: "犁",
        radicals: "禾刈牛"
    },
    {
        kanji: "犇",
        radicals: "牛"
    },
    {
        kanji: "犒",
        radicals: "牛口高亠冂"
    },
    {
        kanji: "犖",
        radicals: "火牛冖"
    },
    {
        kanji: "犢",
        radicals: "貝目ハ牛士儿囗"
    },
    {
        kanji: "犧",
        radicals: "王禾牛并羊戈"
    },
    {
        kanji: "犹",
        radicals: "犯丶尤尢"
    },
    {
        kanji: "犲",
        radicals: "ノ一犯亅"
    },
    {
        kanji: "狃",
        radicals: "｜一犯"
    },
    {
        kanji: "狆",
        radicals: "｜口犯"
    },
    {
        kanji: "狄",
        radicals: "火犯"
    },
    {
        kanji: "狎",
        radicals: "｜日犯田"
    },
    {
        kanji: "狒",
        radicals: "｜ノ弓犯"
    },
    {
        kanji: "狢",
        radicals: "口犯夂"
    },
    {
        kanji: "狠",
        radicals: "艮犯"
    },
    {
        kanji: "狡",
        radicals: "犯父亠"
    },
    {
        kanji: "狹",
        radicals: "人大犯"
    },
    {
        kanji: "狷",
        radicals: "月口犯"
    },
    {
        kanji: "倏",
        radicals: "化犬夂攵｜"
    },
    {
        kanji: "猗",
        radicals: "口大犯亅一"
    },
    {
        kanji: "猊",
        radicals: "臼犯儿"
    },
    {
        kanji: "猜",
        radicals: "月青土二犯亠"
    },
    {
        kanji: "猖",
        radicals: "日犯"
    },
    {
        kanji: "猝",
        radicals: "十人犯亠"
    },
    {
        kanji: "猴",
        radicals: "化犯矢乞"
    },
    {
        kanji: "猯",
        radicals: "山而犯"
    },
    {
        kanji: "猩",
        radicals: "生日犯"
    },
    {
        kanji: "猥",
        radicals: "衣田犯"
    },
    {
        kanji: "猾",
        radicals: "月骨犯冂冖"
    },
    {
        kanji: "獎",
        radicals: "犬寸夕爿"
    },
    {
        kanji: "獏",
        radicals: "大日犯艾"
    },
    {
        kanji: "默",
        radicals: "犬里杰黒"
    },
    {
        kanji: "獗",
        radicals: "欠并犯厂屮"
    },
    {
        kanji: "獪",
        radicals: "日買犯个一"
    },
    {
        kanji: "獨",
        radicals: "虫買犯勹"
    },
    {
        kanji: "獰",
        radicals: "心買犯亅宀皿"
    },
    {
        kanji: "獸",
        radicals: "一犬口田"
    },
    {
        kanji: "獵",
        radicals: "臼乙口巛鼠犯"
    },
    {
        kanji: "獻",
        radicals: "犬口卜儿冂匕厂虍鬲"
    },
    {
        kanji: "獺",
        radicals: "貝目ハ口犯頁木"
    },
    {
        kanji: "珈",
        radicals: "王口力"
    },
    {
        kanji: "玳",
        radicals: "王化弋"
    },
    {
        kanji: "珎",
        radicals: "王小乞"
    },
    {
        kanji: "玻",
        radicals: "王皮又"
    },
    {
        kanji: "珀",
        radicals: "王白"
    },
    {
        kanji: "珥",
        radicals: "王耳"
    },
    {
        kanji: "珮",
        radicals: "王巾几"
    },
    {
        kanji: "珞",
        radicals: "王口夂"
    },
    {
        kanji: "璢",
        radicals: "｜一王田"
    },
    {
        kanji: "琅",
        radicals: "王艮"
    },
    {
        kanji: "瑯",
        radicals: "王艮邦"
    },
    {
        kanji: "琥",
        radicals: "王卜儿匕厂虍"
    },
    {
        kanji: "珸",
        radicals: "王口五"
    },
    {
        kanji: "琲",
        radicals: "王非"
    },
    {
        kanji: "琺",
        radicals: "王汁土厶"
    },
    {
        kanji: "瑕",
        radicals: "｜王又"
    },
    {
        kanji: "琿",
        radicals: "王車冖"
    },
    {
        kanji: "瑟",
        radicals: "ノ王心丶"
    },
    {
        kanji: "瑙",
        radicals: "王巛囗"
    },
    {
        kanji: "瑁",
        radicals: "王目冂"
    },
    {
        kanji: "瑜",
        radicals: "王刈月个一"
    },
    {
        kanji: "瑩",
        radicals: "王火冖"
    },
    {
        kanji: "瑰",
        radicals: "王鬼田儿匕厶"
    },
    {
        kanji: "瑣",
        radicals: "王貝目ハ尚"
    },
    {
        kanji: "瑪",
        radicals: "王馬杰"
    },
    {
        kanji: "瑶",
        radicals: "王缶爪凵"
    },
    {
        kanji: "瑾",
        radicals: "｜一王口艾土二"
    },
    {
        kanji: "璋",
        radicals: "王音十日立曰"
    },
    {
        kanji: "璞",
        radicals: "王人并羊二大"
    },
    {
        kanji: "璧",
        radicals: "王口十辛立尸"
    },
    {
        kanji: "瓊",
        radicals: "王目冂夂"
    },
    {
        kanji: "瓏",
        radicals: "王月立"
    },
    {
        kanji: "瓔",
        radicals: "王貝目ハ女"
    },
    {
        kanji: "珱",
        radicals: "王女尚"
    },
    {
        kanji: "瓠",
        radicals: "瓜大"
    },
    {
        kanji: "瓣",
        radicals: "瓜十辛立"
    },
    {
        kanji: "瓧",
        radicals: "瓦十"
    },
    {
        kanji: "瓩",
        radicals: "ノ瓦十"
    },
    {
        kanji: "瓮",
        radicals: "瓦ハ厶"
    },
    {
        kanji: "瓲",
        radicals: "瓦屯"
    },
    {
        kanji: "瓰",
        radicals: "瓦刀ハ"
    },
    {
        kanji: "瓱",
        radicals: "瓦毛"
    },
    {
        kanji: "瓸",
        radicals: "一瓦白日"
    },
    {
        kanji: "瓷",
        radicals: "瓦欠冫"
    },
    {
        kanji: "甄",
        radicals: "瓦西土"
    },
    {
        kanji: "甃",
        radicals: "火禾瓦"
    },
    {
        kanji: "甅",
        radicals: "瓦里厂"
    },
    {
        kanji: "甌",
        radicals: "瓦口匚品"
    },
    {
        kanji: "甎",
        radicals: "瓦十寸虫田亠"
    },
    {
        kanji: "甍",
        radicals: "瓦買冖艾"
    },
    {
        kanji: "甕",
        radicals: "瓦亠幺隹"
    },
    {
        kanji: "甓",
        radicals: "瓦口十辛立尸"
    },
    {
        kanji: "甞",
        radicals: "甘口尚冖"
    },
    {
        kanji: "甦",
        radicals: "一生日田ノ"
    },
    {
        kanji: "甬",
        radicals: "用"
    },
    {
        kanji: "甼",
        radicals: "一田亅"
    },
    {
        kanji: "畄",
        radicals: "尚田"
    },
    {
        kanji: "畍",
        radicals: "｜ノ田个"
    },
    {
        kanji: "畊",
        radicals: "｜ノ田二井"
    },
    {
        kanji: "畉",
        radicals: "人田二大"
    },
    {
        kanji: "畛",
        radicals: "田个彡"
    },
    {
        kanji: "畆",
        radicals: "田亠厶"
    },
    {
        kanji: "畚",
        radicals: "大田厶"
    },
    {
        kanji: "畩",
        radicals: "衣田亠"
    },
    {
        kanji: "畤",
        radicals: "寸田土"
    },
    {
        kanji: "畧",
        radicals: "口田夂"
    },
    {
        kanji: "畫",
        radicals: "一田聿"
    },
    {
        kanji: "畭",
        radicals: "工小田个一"
    },
    {
        kanji: "畸",
        radicals: "口大田亅一"
    },
    {
        kanji: "當",
        radicals: "口尚田冖"
    },
    {
        kanji: "疆",
        radicals: "一弓田土"
    },
    {
        kanji: "疇",
        radicals: "口工士寸田"
    },
    {
        kanji: "畴",
        radicals: "ノ一寸田二"
    },
    {
        kanji: "疊",
        radicals: "田目冖"
    },
    {
        kanji: "疉",
        radicals: "ヨ田宀"
    },
    {
        kanji: "疂",
        radicals: "田目冖冫"
    },
    {
        kanji: "疔",
        radicals: "一亅疔"
    },
    {
        kanji: "疚",
        radicals: "ノ入疔久"
    },
    {
        kanji: "疝",
        radicals: "山疔"
    },
    {
        kanji: "疥",
        radicals: "｜ノ个疔"
    },
    {
        kanji: "疣",
        radicals: "丶尤疔尢"
    },
    {
        kanji: "痂",
        radicals: "口力疔"
    },
    {
        kanji: "疳",
        radicals: "甘疔"
    },
    {
        kanji: "痃",
        radicals: "亠幺疔玄"
    },
    {
        kanji: "疵",
        radicals: "止匕疔"
    },
    {
        kanji: "疽",
        radicals: "目疔"
    },
    {
        kanji: "疸",
        radicals: "一日疔"
    },
    {
        kanji: "疼",
        radicals: "冫夂疔丶"
    },
    {
        kanji: "疱",
        radicals: "勹已疔"
    },
    {
        kanji: "痍",
        radicals: "弓人大疔"
    },
    {
        kanji: "痊",
        radicals: "王个疔"
    },
    {
        kanji: "痒",
        radicals: "王并羊疔"
    },
    {
        kanji: "痙",
        radicals: "工巛疔"
    },
    {
        kanji: "痣",
        radicals: "士心疔"
    },
    {
        kanji: "痞",
        radicals: "｜ノ一口丶疔"
    },
    {
        kanji: "痾",
        radicals: "口亅疔阡一"
    },
    {
        kanji: "痿",
        radicals: "禾女疔"
    },
    {
        kanji: "痼",
        radicals: "口十囗疔"
    },
    {
        kanji: "瘁",
        radicals: "十人亠疔"
    },
    {
        kanji: "痰",
        radicals: "火疔"
    },
    {
        kanji: "痺",
        radicals: "十田疔"
    },
    {
        kanji: "痲",
        radicals: "十木儿疔"
    },
    {
        kanji: "痳",
        radicals: "木疔"
    },
    {
        kanji: "瘋",
        radicals: "風疔虫几"
    },
    {
        kanji: "瘍",
        radicals: "ノ一日勹疔勿"
    },
    {
        kanji: "瘉",
        radicals: "刈月个疔一"
    },
    {
        kanji: "瘟",
        radicals: "皿日疔"
    },
    {
        kanji: "瘧",
        radicals: "卜匕厂疔虍"
    },
    {
        kanji: "瘠",
        radicals: "月疔人二"
    },
    {
        kanji: "瘡",
        radicals: "口个尸疔一"
    },
    {
        kanji: "瘢",
        radicals: "舟殳疔几又"
    },
    {
        kanji: "瘤",
        radicals: "田刀厶疔"
    },
    {
        kanji: "瘴",
        radicals: "音十日立曰疔"
    },
    {
        kanji: "瘰",
        radicals: "糸幺小田疔"
    },
    {
        kanji: "瘻",
        radicals: "｜一口女疔"
    },
    {
        kanji: "癇",
        radicals: "日月門疔"
    },
    {
        kanji: "癈",
        radicals: "二儿疔癶"
    },
    {
        kanji: "癆",
        radicals: "火力冖疔"
    },
    {
        kanji: "癜",
        radicals: "ハ尸殳疔几又"
    },
    {
        kanji: "癘",
        radicals: "田疔禹艾"
    },
    {
        kanji: "癡",
        radicals: "疋矢匕疔乞"
    },
    {
        kanji: "癢",
        radicals: "王食并羊疔"
    },
    {
        kanji: "癨",
        radicals: "雨疔隹"
    },
    {
        kanji: "癩",
        radicals: "貝目ハ口頁木疔"
    },
    {
        kanji: "癪",
        radicals: "禾貝目ハ土二亠疔"
    },
    {
        kanji: "癧",
        radicals: "止木厂疔"
    },
    {
        kanji: "癬",
        radicals: "王并羊疔魚田杰"
    },
    {
        kanji: "癰",
        radicals: "口巛巴疔隹"
    },
    {
        kanji: "癲",
        radicals: "貝十ハ頁目疔"
    },
    {
        kanji: "癶",
        radicals: "癶"
    },
    {
        kanji: "癸",
        radicals: "大二癶一"
    },
    {
        kanji: "發",
        radicals: "弓殳癶几又"
    },
    {
        kanji: "皀",
        radicals: "白匕"
    },
    {
        kanji: "皃",
        radicals: "白儿"
    },
    {
        kanji: "皈",
        radicals: "白又厂"
    },
    {
        kanji: "皋",
        radicals: "十大白"
    },
    {
        kanji: "皎",
        radicals: "白父亠"
    },
    {
        kanji: "皖",
        radicals: "二白儿宀元"
    },
    {
        kanji: "皓",
        radicals: "ノ口土白"
    },
    {
        kanji: "皙",
        radicals: "斤白木"
    },
    {
        kanji: "皚",
        radicals: "口山豆白并"
    },
    {
        kanji: "皰",
        radicals: "皮又勹已"
    },
    {
        kanji: "皴",
        radicals: "皮又儿厶夂"
    },
    {
        kanji: "皸",
        radicals: "車皮又冖"
    },
    {
        kanji: "皹",
        radicals: "車皮又冖"
    },
    {
        kanji: "皺",
        radicals: "皮又勹屮"
    },
    {
        kanji: "盂",
        radicals: "皿二亅"
    },
    {
        kanji: "盍",
        radicals: "皿土厶"
    },
    {
        kanji: "盖",
        radicals: "王皿并羊"
    },
    {
        kanji: "盒",
        radicals: "口皿个一"
    },
    {
        kanji: "盞",
        radicals: "皿戈"
    },
    {
        kanji: "盡",
        radicals: "ヨ皿聿"
    },
    {
        kanji: "盥",
        radicals: "臼皿水"
    },
    {
        kanji: "盧",
        radicals: "皿田卜匕厂虍"
    },
    {
        kanji: "盪",
        radicals: "ノ皿汁日勹一"
    },
    {
        kanji: "蘯",
        radicals: "ノ皿汁日勹艾一"
    },
    {
        kanji: "盻",
        radicals: "ハ目一勹"
    },
    {
        kanji: "眈",
        radicals: "目尢冖"
    },
    {
        kanji: "眇",
        radicals: "ノ小目"
    },
    {
        kanji: "眄",
        radicals: "目一山亅"
    },
    {
        kanji: "眩",
        radicals: "玄目亠幺"
    },
    {
        kanji: "眤",
        radicals: "目匕尸"
    },
    {
        kanji: "眞",
        radicals: "ハ目匕"
    },
    {
        kanji: "眥",
        radicals: "止目匕"
    },
    {
        kanji: "眦",
        radicals: "止目匕"
    },
    {
        kanji: "眛",
        radicals: "｜二ハ木目"
    },
    {
        kanji: "眷",
        radicals: "人大二并目"
    },
    {
        kanji: "眸",
        radicals: "牛目厶"
    },
    {
        kanji: "睇",
        radicals: "｜ノ弓并目"
    },
    {
        kanji: "睚",
        radicals: "土目厂"
    },
    {
        kanji: "睨",
        radicals: "臼目儿"
    },
    {
        kanji: "睫",
        radicals: "｜ヨ走土目"
    },
    {
        kanji: "睛",
        radicals: "月青土二目亠"
    },
    {
        kanji: "睥",
        radicals: "十田目"
    },
    {
        kanji: "睿",
        radicals: "ハ卜目个冖"
    },
    {
        kanji: "睾",
        radicals: "十辛土買目立亠"
    },
    {
        kanji: "睹",
        radicals: "日目老"
    },
    {
        kanji: "瞎",
        radicals: "口土二目亠宀"
    },
    {
        kanji: "瞋",
        radicals: "十ハ目"
    },
    {
        kanji: "瞑",
        radicals: "日ハ目亠冖"
    },
    {
        kanji: "瞠",
        radicals: "口尚土目冖"
    },
    {
        kanji: "瞞",
        radicals: "｜一入目冂凵"
    },
    {
        kanji: "瞰",
        radicals: "耳目攵乞"
    },
    {
        kanji: "瞶",
        radicals: "｜一貝ハ口目"
    },
    {
        kanji: "瞹",
        radicals: "心爪目冖夂"
    },
    {
        kanji: "瞿",
        radicals: "目隹"
    },
    {
        kanji: "瞼",
        radicals: "口人目个一"
    },
    {
        kanji: "瞽",
        radicals: "口士支十豆并目又鼓"
    },
    {
        kanji: "瞻",
        radicals: "言目儿厂勹"
    },
    {
        kanji: "矇",
        radicals: "目冖艾豕"
    },
    {
        kanji: "矍",
        radicals: "又目隹"
    },
    {
        kanji: "矗",
        radicals: "十目｜一"
    },
    {
        kanji: "矚",
        radicals: "虫買目勹尸"
    },
    {
        kanji: "矜",
        radicals: "矛个マ一"
    },
    {
        kanji: "矣",
        radicals: "矢厶乞"
    },
    {
        kanji: "矮",
        radicals: "禾女矢乞"
    },
    {
        kanji: "矼",
        radicals: "口工石"
    },
    {
        kanji: "砌",
        radicals: "口石刀匕"
    },
    {
        kanji: "砒",
        radicals: "口石比"
    },
    {
        kanji: "礦",
        radicals: "黄口石田ハ广"
    },
    {
        kanji: "砠",
        radicals: "口石目"
    },
    {
        kanji: "礪",
        radicals: "口石田厂禹艾"
    },
    {
        kanji: "硅",
        radicals: "口石土"
    },
    {
        kanji: "碎",
        radicals: "口十人石亠"
    },
    {
        kanji: "硴",
        radicals: "化口石匕艾"
    },
    {
        kanji: "碆",
        radicals: "口汁石皮又"
    },
    {
        kanji: "硼",
        radicals: "月口石"
    },
    {
        kanji: "碚",
        radicals: "口石立"
    },
    {
        kanji: "碌",
        radicals: "ヨ口水石隶"
    },
    {
        kanji: "碣",
        radicals: "口石日勹匕人一｜"
    },
    {
        kanji: "碵",
        radicals: "貝目ハ口石卜"
    },
    {
        kanji: "碪",
        radicals: "甘口石儿匚"
    },
    {
        kanji: "碯",
        radicals: "口石巛囗"
    },
    {
        kanji: "磑",
        radicals: "口山石豆并"
    },
    {
        kanji: "磆",
        radicals: "月口骨石冂冖"
    },
    {
        kanji: "磋",
        radicals: "王口工石并羊"
    },
    {
        kanji: "磔",
        radicals: "口石舛木夕"
    },
    {
        kanji: "碾",
        radicals: "衣口石二尸"
    },
    {
        kanji: "碼",
        radicals: "口石馬杰"
    },
    {
        kanji: "磅",
        radicals: "口石并方立亠冖"
    },
    {
        kanji: "磊",
        radicals: "口石"
    },
    {
        kanji: "磬",
        radicals: "口士石殳尸几又"
    },
    {
        kanji: "磧",
        radicals: "貝目ハ口石土二亠"
    },
    {
        kanji: "磚",
        radicals: "口十寸石虫田亠厶"
    },
    {
        kanji: "磽",
        radicals: "口石土儿"
    },
    {
        kanji: "磴",
        radicals: "口石豆并癶"
    },
    {
        kanji: "礇",
        radicals: "口石大米冂釆"
    },
    {
        kanji: "礒",
        radicals: "王口石并羊亅戈"
    },
    {
        kanji: "礑",
        radicals: "口尚石田冖"
    },
    {
        kanji: "礙",
        radicals: "口石疋矢匕マ乞"
    },
    {
        kanji: "礬",
        radicals: "口石大木爻"
    },
    {
        kanji: "礫",
        radicals: "口石白木冫"
    },
    {
        kanji: "祀",
        radicals: "礼已"
    },
    {
        kanji: "祠",
        radicals: "口礼亅一"
    },
    {
        kanji: "祗",
        radicals: "氏礼一"
    },
    {
        kanji: "祟",
        radicals: "｜山示二小凵"
    },
    {
        kanji: "祚",
        radicals: "｜ノ礼"
    },
    {
        kanji: "祕",
        radicals: "ノ心礼丶"
    },
    {
        kanji: "祓",
        radicals: "ノ一礼丶"
    },
    {
        kanji: "祺",
        radicals: "甘ハ礼"
    },
    {
        kanji: "祿",
        radicals: "水礼隶彑"
    },
    {
        kanji: "禊",
        radicals: "大土礼亠刀二"
    },
    {
        kanji: "禝",
        radicals: "田礼儿夂"
    },
    {
        kanji: "禧",
        radicals: "口士十豆并礼"
    },
    {
        kanji: "齋",
        radicals: "小齊元刀氏廾"
    },
    {
        kanji: "禪",
        radicals: "｜一口田日礼"
    },
    {
        kanji: "禮",
        radicals: "｜一口豆日并礼"
    },
    {
        kanji: "禳",
        radicals: "｜衣一ハ礼亠口"
    },
    {
        kanji: "禹",
        radicals: "ノ虫禹冂"
    },
    {
        kanji: "禺",
        radicals: "田日禹冂"
    },
    {
        kanji: "秉",
        radicals: "｜ノヨ一禾ハ"
    },
    {
        kanji: "秕",
        radicals: "禾比"
    },
    {
        kanji: "秧",
        radicals: "禾人大冂冖"
    },
    {
        kanji: "秬",
        radicals: "禾巨"
    },
    {
        kanji: "秡",
        radicals: "ノ一禾丶"
    },
    {
        kanji: "秣",
        radicals: "｜一禾ハ木亠"
    },
    {
        kanji: "稈",
        radicals: "禾干日"
    },
    {
        kanji: "稍",
        radicals: "禾月尚"
    },
    {
        kanji: "稘",
        radicals: "禾甘ハ"
    },
    {
        kanji: "稙",
        radicals: "禾十目"
    },
    {
        kanji: "稠",
        radicals: "禾口土冂"
    },
    {
        kanji: "稟",
        radicals: "禾口亠囗"
    },
    {
        kanji: "禀",
        radicals: "口示二小亠囗"
    },
    {
        kanji: "稱",
        radicals: "｜一禾爪冂十"
    },
    {
        kanji: "稻",
        radicals: "臼禾爪"
    },
    {
        kanji: "稾",
        radicals: "禾口高亠冂"
    },
    {
        kanji: "稷",
        radicals: "禾田儿夂"
    },
    {
        kanji: "穃",
        radicals: "禾穴口ハ个宀谷"
    },
    {
        kanji: "穗",
        radicals: "禾心虫日"
    },
    {
        kanji: "穉",
        radicals: "禾牛尸"
    },
    {
        kanji: "穡",
        radicals: "禾口人土囗"
    },
    {
        kanji: "穢",
        radicals: "ノ禾止小戈"
    },
    {
        kanji: "穩",
        radicals: "ヨ禾工心爪"
    },
    {
        kanji: "龝",
        radicals: "禾亀乙勹田"
    },
    {
        kanji: "穰",
        radicals: "｜衣一禾口亠"
    },
    {
        kanji: "穹",
        radicals: "弓穴儿宀"
    },
    {
        kanji: "穽",
        radicals: "｜ノ穴二儿宀井"
    },
    {
        kanji: "窈",
        radicals: "穴力儿宀幺"
    },
    {
        kanji: "窗",
        radicals: "穴儿囗宀夕"
    },
    {
        kanji: "窕",
        radicals: "穴儿冫宀"
    },
    {
        kanji: "窘",
        radicals: "ノヨ一穴口儿宀"
    },
    {
        kanji: "窖",
        radicals: "ノ穴口土儿宀"
    },
    {
        kanji: "窩",
        radicals: "穴口入冂宀"
    },
    {
        kanji: "竈",
        radicals: "穴土儿宀黽"
    },
    {
        kanji: "窰",
        radicals: "缶穴夕儿凵宀"
    },
    {
        kanji: "窶",
        radicals: "｜一穴口女儿宀"
    },
    {
        kanji: "竅",
        radicals: "穴白方儿宀攵乞"
    },
    {
        kanji: "竄",
        radicals: "臼穴鼠儿宀"
    },
    {
        kanji: "窿",
        radicals: "穴生儿夂宀阡"
    },
    {
        kanji: "邃",
        radicals: "穴込并儿宀豕"
    },
    {
        kanji: "竇",
        radicals: "貝目ハ穴士儿冂宀"
    },
    {
        kanji: "竊",
        radicals: "穴釆米卜儿冂厶宀禹"
    },
    {
        kanji: "竍",
        radicals: "十立"
    },
    {
        kanji: "竏",
        radicals: "ノ十立"
    },
    {
        kanji: "竕",
        radicals: "刀并立"
    },
    {
        kanji: "竓",
        radicals: "毛立"
    },
    {
        kanji: "站",
        radicals: "口卜立"
    },
    {
        kanji: "竚",
        radicals: "立亅宀"
    },
    {
        kanji: "竝",
        radicals: "立"
    },
    {
        kanji: "竡",
        radicals: "一白立"
    },
    {
        kanji: "竢",
        radicals: "矢立厶乞"
    },
    {
        kanji: "竦",
        radicals: "｜口并木立"
    },
    {
        kanji: "竭",
        radicals: "日立勹匕"
    },
    {
        kanji: "竰",
        radicals: "里立厂"
    },
    {
        kanji: "笂",
        radicals: "九竹丶乞"
    },
    {
        kanji: "笏",
        radicals: "ノ竹勹勿乞"
    },
    {
        kanji: "笊",
        radicals: "竹爪乞"
    },
    {
        kanji: "笆",
        radicals: "竹巴乞"
    },
    {
        kanji: "笳",
        radicals: "口竹力乞"
    },
    {
        kanji: "笘",
        radicals: "口竹卜乞"
    },
    {
        kanji: "笙",
        radicals: "生竹乞"
    },
    {
        kanji: "笞",
        radicals: "口竹厶乞"
    },
    {
        kanji: "笵",
        radicals: "汁竹卩乞"
    },
    {
        kanji: "笨",
        radicals: "一竹木乞"
    },
    {
        kanji: "笶",
        radicals: "竹矢乞"
    },
    {
        kanji: "筐",
        radicals: "王竹匚乞"
    },
    {
        kanji: "筺",
        radicals: "王竹匚丶乞"
    },
    {
        kanji: "笄",
        radicals: "｜ノ竹二廾一乞"
    },
    {
        kanji: "筍",
        radicals: "竹日勹乞"
    },
    {
        kanji: "笋",
        radicals: "ノヨ竹乞"
    },
    {
        kanji: "筌",
        radicals: "王竹个乞"
    },
    {
        kanji: "筅",
        radicals: "竹土儿乞"
    },
    {
        kanji: "筵",
        radicals: "止竹廴ノ乞"
    },
    {
        kanji: "筥",
        radicals: "口竹ノ乞"
    },
    {
        kanji: "筴",
        radicals: "人大竹乞"
    },
    {
        kanji: "筧",
        radicals: "見竹乞"
    },
    {
        kanji: "筰",
        radicals: "｜ノ化竹乞"
    },
    {
        kanji: "筱",
        radicals: "化竹攵｜乞"
    },
    {
        kanji: "筬",
        radicals: "ノ竹戈乞"
    },
    {
        kanji: "筮",
        radicals: "工人竹乞"
    },
    {
        kanji: "箝",
        radicals: "甘竹扎乞"
    },
    {
        kanji: "箘",
        radicals: "禾竹囗乞"
    },
    {
        kanji: "箟",
        radicals: "竹日比乞"
    },
    {
        kanji: "箍",
        radicals: "巾竹匚扎乞"
    },
    {
        kanji: "箜",
        radicals: "穴工竹儿宀乞"
    },
    {
        kanji: "箚",
        radicals: "刈口竹个一乞"
    },
    {
        kanji: "箋",
        radicals: "竹戈乞"
    },
    {
        kanji: "箒",
        radicals: "ヨ巾竹冖乞"
    },
    {
        kanji: "箏",
        radicals: "ヨ竹爪亅乞"
    },
    {
        kanji: "筝",
        radicals: "ヨ竹亅勹乞"
    },
    {
        kanji: "箙",
        radicals: "月竹又卩乞"
    },
    {
        kanji: "篋",
        radicals: "人大竹匚乞"
    },
    {
        kanji: "篁",
        radicals: "王竹白乞"
    },
    {
        kanji: "篌",
        radicals: "化竹矢ユ乞"
    },
    {
        kanji: "篏",
        radicals: "甘欠竹乞"
    },
    {
        kanji: "箴",
        radicals: "ノ口竹戈乞"
    },
    {
        kanji: "篆",
        radicals: "彑竹豕乞"
    },
    {
        kanji: "篝",
        radicals: "｜一竹二冂十乞"
    },
    {
        kanji: "篩",
        radicals: "巾口竹｜乞"
    },
    {
        kanji: "簑",
        radicals: "衣一竹亠口乞"
    },
    {
        kanji: "簔",
        radicals: "衣一竹亠口乞"
    },
    {
        kanji: "篦",
        radicals: "竹比囗乞"
    },
    {
        kanji: "篥",
        radicals: "西竹木乞"
    },
    {
        kanji: "籠",
        radicals: "月竹立乞"
    },
    {
        kanji: "簀",
        radicals: "貝目ハ竹土二亠乞"
    },
    {
        kanji: "簇",
        radicals: "竹方矢乞"
    },
    {
        kanji: "簓",
        radicals: "口十竹冂彡乞"
    },
    {
        kanji: "篳",
        radicals: "｜一竹田日乞"
    },
    {
        kanji: "篷",
        radicals: "込竹夂乞"
    },
    {
        kanji: "簗",
        radicals: "汁竹刀木丶乞"
    },
    {
        kanji: "簍",
        radicals: "｜一口女竹乞"
    },
    {
        kanji: "篶",
        radicals: "一止竹鳥杰乞"
    },
    {
        kanji: "簣",
        radicals: "｜一貝目ハ口竹乞"
    },
    {
        kanji: "簧",
        radicals: "黄竹田ハ乞"
    },
    {
        kanji: "簪",
        radicals: "竹日无乞"
    },
    {
        kanji: "簟",
        radicals: "十西竹日曰乞"
    },
    {
        kanji: "簷",
        radicals: "言竹儿厂乞"
    },
    {
        kanji: "簫",
        radicals: "｜ノヨ水竹隶聿乞"
    },
    {
        kanji: "簽",
        radicals: "口人竹个一乞"
    },
    {
        kanji: "籌",
        radicals: "口工士寸竹乞"
    },
    {
        kanji: "籃",
        radicals: "皿臣竹二乞"
    },
    {
        kanji: "籔",
        radicals: "女竹米攵乞"
    },
    {
        kanji: "籏",
        radicals: "甘竹ハ方乞"
    },
    {
        kanji: "籀",
        radicals: "竹田刀厶扎乞"
    },
    {
        kanji: "籐",
        radicals: "月人水大竹二并乞"
    },
    {
        kanji: "籘",
        radicals: "月糸幺小人大竹二并乞"
    },
    {
        kanji: "籟",
        radicals: "｜貝目口竹ハ頁木乞"
    },
    {
        kanji: "籤",
        radicals: "竹戈韭人乞"
    },
    {
        kanji: "籖",
        radicals: "竹土戈韭乞"
    },
    {
        kanji: "籥",
        radicals: "｜一口竹个冊龠廾乞"
    },
    {
        kanji: "籬",
        radicals: "竹亠凵禹隹乞"
    },
    {
        kanji: "籵",
        radicals: "十米"
    },
    {
        kanji: "粃",
        radicals: "比米"
    },
    {
        kanji: "粐",
        radicals: "戸米一尸"
    },
    {
        kanji: "粤",
        radicals: "一米囗勹釆"
    },
    {
        kanji: "粭",
        radicals: "口米个一"
    },
    {
        kanji: "粢",
        radicals: "欠米冫"
    },
    {
        kanji: "粫",
        radicals: "而米"
    },
    {
        kanji: "粡",
        radicals: "口米冂一"
    },
    {
        kanji: "粨",
        radicals: "米一白"
    },
    {
        kanji: "粳",
        radicals: "ノ米一田"
    },
    {
        kanji: "粲",
        radicals: "米卜又夕"
    },
    {
        kanji: "粱",
        radicals: "汁刀并米"
    },
    {
        kanji: "粮",
        radicals: "艮米"
    },
    {
        kanji: "粹",
        radicals: "十人米亠"
    },
    {
        kanji: "粽",
        radicals: "示二小米宀"
    },
    {
        kanji: "糀",
        radicals: "化米匕艾"
    },
    {
        kanji: "糅",
        radicals: "米矛木マ"
    },
    {
        kanji: "糂",
        radicals: "甘米儿匚"
    },
    {
        kanji: "糘",
        radicals: "米宀豕"
    },
    {
        kanji: "糒",
        radicals: "米用厂艾"
    },
    {
        kanji: "糜",
        radicals: "米木广麻"
    },
    {
        kanji: "糢",
        radicals: "大日米艾"
    },
    {
        kanji: "鬻",
        radicals: "一弓口米儿冂鬲"
    },
    {
        kanji: "糯",
        radicals: "雨而米"
    },
    {
        kanji: "糲",
        radicals: "田米厂禹艾"
    },
    {
        kanji: "糴",
        radicals: "ヨ入米隹"
    },
    {
        kanji: "糶",
        radicals: "｜ヨ山米隹"
    },
    {
        kanji: "糺",
        radicals: "乙糸幺小"
    },
    {
        kanji: "紆",
        radicals: "糸幺小二亅"
    },
    {
        kanji: "紂",
        radicals: "糸幺小寸"
    },
    {
        kanji: "紜",
        radicals: "糸幺小二厶"
    },
    {
        kanji: "紕",
        radicals: "糸幺小比"
    },
    {
        kanji: "紊",
        radicals: "糸幺小文"
    },
    {
        kanji: "絅",
        radicals: "口糸幺小冂"
    },
    {
        kanji: "絋",
        radicals: "糸幺小厶广"
    },
    {
        kanji: "紮",
        radicals: "乙糸幺小木"
    },
    {
        kanji: "紲",
        radicals: "糸幺小世"
    },
    {
        kanji: "紿",
        radicals: "口糸幺小厶"
    },
    {
        kanji: "紵",
        radicals: "糸幺小亅宀"
    },
    {
        kanji: "絆",
        radicals: "｜糸幺小二并十"
    },
    {
        kanji: "絳",
        radicals: "糸幺小二夂"
    },
    {
        kanji: "絖",
        radicals: "糸幺小尚儿"
    },
    {
        kanji: "絎",
        radicals: "行糸幺小彳"
    },
    {
        kanji: "絲",
        radicals: "糸幺小"
    },
    {
        kanji: "絨",
        radicals: "ノ一糸幺小戈"
    },
    {
        kanji: "絮",
        radicals: "口糸幺小女"
    },
    {
        kanji: "絏",
        radicals: "ノ糸幺小日"
    },
    {
        kanji: "絣",
        radicals: "｜ノ糸幺小二并廾一"
    },
    {
        kanji: "經",
        radicals: "工糸幺小巛"
    },
    {
        kanji: "綉",
        radicals: "乃禾糸幺小ノ"
    },
    {
        kanji: "絛",
        radicals: "化糸幺小夂攵乞｜"
    },
    {
        kanji: "綏",
        radicals: "糸幺小女爪"
    },
    {
        kanji: "絽",
        radicals: "口糸幺小ノ"
    },
    {
        kanji: "綛",
        radicals: "丶糸幺小心刀"
    },
    {
        kanji: "綺",
        radicals: "口糸幺小大亅一"
    },
    {
        kanji: "綮",
        radicals: "戸糸幺小攵一尸乞"
    },
    {
        kanji: "綣",
        radicals: "糸幺小人大二并已"
    },
    {
        kanji: "綵",
        radicals: "糸幺小爪木"
    },
    {
        kanji: "緇",
        radicals: "糸幺小巛田"
    },
    {
        kanji: "綽",
        radicals: "糸幺小十日卜"
    },
    {
        kanji: "綫",
        radicals: "糸幺小戈"
    },
    {
        kanji: "總",
        radicals: "糸幺小心囗夂"
    },
    {
        kanji: "綢",
        radicals: "口糸幺小土冂"
    },
    {
        kanji: "綯",
        radicals: "缶糸幺小凵勹"
    },
    {
        kanji: "緜",
        radicals: "ノ巾糸幺小白"
    },
    {
        kanji: "綸",
        radicals: "｜一糸幺小个冊廾"
    },
    {
        kanji: "綟",
        radicals: "戸糸幺小大一尸"
    },
    {
        kanji: "綰",
        radicals: "｜口糸幺小宀"
    },
    {
        kanji: "緘",
        radicals: "ノ口糸幺小戈"
    },
    {
        kanji: "緝",
        radicals: "口糸幺小耳"
    },
    {
        kanji: "緤",
        radicals: "糸幺小木世"
    },
    {
        kanji: "緞",
        radicals: "｜糸幺小殳几又"
    },
    {
        kanji: "緻",
        radicals: "糸幺小至土厶攵一乞"
    },
    {
        kanji: "緲",
        radicals: "ノ糸幺小目"
    },
    {
        kanji: "緡",
        radicals: "口氏糸幺小日尸"
    },
    {
        kanji: "縅",
        radicals: "ノ糸幺小女戈"
    },
    {
        kanji: "縊",
        radicals: "皿糸幺小并"
    },
    {
        kanji: "縣",
        radicals: "糸幺小目一｜"
    },
    {
        kanji: "縡",
        radicals: "糸幺小十辛立宀"
    },
    {
        kanji: "縒",
        radicals: "王工糸幺小并羊"
    },
    {
        kanji: "縱",
        radicals: "化糸幺小人走土彳"
    },
    {
        kanji: "縟",
        radicals: "糸幺小寸辰衣"
    },
    {
        kanji: "縉",
        radicals: "一糸幺小二日厶"
    },
    {
        kanji: "縋",
        radicals: "｜口込糸幺小"
    },
    {
        kanji: "縢",
        radicals: "月糸幺小人大二并"
    },
    {
        kanji: "繆",
        radicals: "羽糸幺小个冫彡"
    },
    {
        kanji: "繦",
        radicals: "弓糸幺小虫厶"
    },
    {
        kanji: "縻",
        radicals: "糸幺小木广麻"
    },
    {
        kanji: "縵",
        radicals: "糸幺小日買又"
    },
    {
        kanji: "縹",
        radicals: "糸幺小示二西"
    },
    {
        kanji: "繃",
        radicals: "月山糸幺小"
    },
    {
        kanji: "縷",
        radicals: "｜一口糸幺小女"
    },
    {
        kanji: "縲",
        radicals: "糸幺小田"
    },
    {
        kanji: "縺",
        radicals: "込糸幺小車"
    },
    {
        kanji: "繧",
        radicals: "雨糸幺小二厶"
    },
    {
        kanji: "繝",
        radicals: "糸幺小日門"
    },
    {
        kanji: "繖",
        radicals: "｜一月糸幺小二攵乞"
    },
    {
        kanji: "繞",
        radicals: "糸幺小土儿"
    },
    {
        kanji: "繙",
        radicals: "糸幺小田釆米"
    },
    {
        kanji: "繚",
        radicals: "糸幺小大日并亠"
    },
    {
        kanji: "繹",
        radicals: "糸幺小十辛土買立亠"
    },
    {
        kanji: "繪",
        radicals: "糸幺小日買个一"
    },
    {
        kanji: "繩",
        radicals: "糸幺小黽"
    },
    {
        kanji: "繼",
        radicals: "｜糸幺小匚"
    },
    {
        kanji: "繻",
        radicals: "雨糸幺小而"
    },
    {
        kanji: "纃",
        radicals: "糸幺小齊刀氏廾"
    },
    {
        kanji: "緕",
        radicals: "糸幺小斉文"
    },
    {
        kanji: "繽",
        radicals: "ノ貝目ハ糸幺小宀"
    },
    {
        kanji: "辮",
        radicals: "糸幺小十辛立"
    },
    {
        kanji: "繿",
        radicals: "皿糸幺小臣二乞"
    },
    {
        kanji: "纈",
        radicals: "貝目ハ口士糸幺小頁"
    },
    {
        kanji: "纉",
        radicals: "貝目ハ糸幺小人大二亠"
    },
    {
        kanji: "續",
        radicals: "貝目ハ士糸幺小儿囗"
    },
    {
        kanji: "纒",
        radicals: "黒糸幺小土里厂杰"
    },
    {
        kanji: "纐",
        radicals: "貝目ハ糸幺小父頁亠"
    },
    {
        kanji: "纓",
        radicals: "貝目ハ糸幺小女"
    },
    {
        kanji: "纔",
        radicals: "糸幺小比儿勹"
    },
    {
        kanji: "纖",
        radicals: "糸幺小人戈韭"
    },
    {
        kanji: "纎",
        radicals: "糸幺小土戈韭"
    },
    {
        kanji: "纛",
        radicals: "糸幺小土二母目亠毋"
    },
    {
        kanji: "纜",
        radicals: "見糸幺小臣二乞"
    },
    {
        kanji: "缸",
        radicals: "缶工凵"
    },
    {
        kanji: "缺",
        radicals: "ノ缶人大二凵ユ"
    },
    {
        kanji: "罅",
        radicals: "缶二并卜亅凵匕厂虍"
    },
    {
        kanji: "罌",
        radicals: "貝目ハ缶凵"
    },
    {
        kanji: "罍",
        radicals: "缶田凵"
    },
    {
        kanji: "罎",
        radicals: "雨缶二日凵厶"
    },
    {
        kanji: "罐",
        radicals: "缶口凵艾隹"
    },
    {
        kanji: "网",
        radicals: "ノ丶冂"
    },
    {
        kanji: "罕",
        radicals: "干儿冖"
    },
    {
        kanji: "罔",
        radicals: "亡一并冂亠"
    },
    {
        kanji: "罘",
        radicals: "｜ノ一買丶"
    },
    {
        kanji: "罟",
        radicals: "口士買"
    },
    {
        kanji: "罠",
        radicals: "口氏買尸"
    },
    {
        kanji: "罨",
        radicals: "乙大日買奄"
    },
    {
        kanji: "罩",
        radicals: "十日買卜"
    },
    {
        kanji: "罧",
        radicals: "買木"
    },
    {
        kanji: "罸",
        radicals: "言寸買"
    },
    {
        kanji: "羂",
        radicals: "月口糸幺小買"
    },
    {
        kanji: "羆",
        radicals: "月買厶匕杰"
    },
    {
        kanji: "羃",
        radicals: "巾大日買艾"
    },
    {
        kanji: "羈",
        radicals: "革馬買杰"
    },
    {
        kanji: "羇",
        radicals: "革口大買亅凵"
    },
    {
        kanji: "羌",
        radicals: "王并羊儿"
    },
    {
        kanji: "羔",
        radicals: "王并羊杰"
    },
    {
        kanji: "羞",
        radicals: "ノヨ王并羊"
    },
    {
        kanji: "羝",
        radicals: "王氏并羊"
    },
    {
        kanji: "羚",
        radicals: "王并羊个卩一"
    },
    {
        kanji: "羣",
        radicals: "ノヨ王口并羊"
    },
    {
        kanji: "羯",
        radicals: "王日并羊勹匕"
    },
    {
        kanji: "羲",
        radicals: "王禾并羊戈"
    },
    {
        kanji: "羹",
        radicals: "王大并羊杰"
    },
    {
        kanji: "羮",
        radicals: "王人大并羊杰二"
    },
    {
        kanji: "羶",
        radicals: "王口日并羊亠囗一"
    },
    {
        kanji: "羸",
        radicals: "王亡月口并羊丶几"
    },
    {
        kanji: "譱",
        radicals: "王言并羊"
    },
    {
        kanji: "翅",
        radicals: "羽支冫又十"
    },
    {
        kanji: "翆",
        radicals: "羽九十冫"
    },
    {
        kanji: "翊",
        radicals: "羽立冫"
    },
    {
        kanji: "翕",
        radicals: "羽口个冫一"
    },
    {
        kanji: "翔",
        radicals: "羽并羊冫"
    },
    {
        kanji: "翡",
        radicals: "羽非冫"
    },
    {
        kanji: "翦",
        radicals: "一羽刈月并冫"
    },
    {
        kanji: "翩",
        radicals: "｜一羽戸冊冫尸廾"
    },
    {
        kanji: "翳",
        radicals: "羽矢冫匚殳几又乞"
    },
    {
        kanji: "翹",
        radicals: "羽土儿冫"
    },
    {
        kanji: "飜",
        radicals: "田釆飛米"
    },
    {
        kanji: "耆",
        radicals: "日老匕"
    },
    {
        kanji: "耄",
        radicals: "毛老匕"
    },
    {
        kanji: "耋",
        radicals: "至土老厶匕"
    },
    {
        kanji: "耒",
        radicals: "｜木耒ノハ"
    },
    {
        kanji: "耘",
        radicals: "｜二ハ木厶耒ノ"
    },
    {
        kanji: "耙",
        radicals: "｜ハ木巴耒ノ"
    },
    {
        kanji: "耜",
        radicals: "｜口木耒ノハ"
    },
    {
        kanji: "耡",
        radicals: "｜ハ木目力耒ノ"
    },
    {
        kanji: "耨",
        radicals: "｜寸辰ハ木耒ノ衣"
    },
    {
        kanji: "耿",
        radicals: "火耳"
    },
    {
        kanji: "耻",
        radicals: "止耳"
    },
    {
        kanji: "聊",
        radicals: "耳卩"
    },
    {
        kanji: "聆",
        radicals: "耳个卩一"
    },
    {
        kanji: "聒",
        radicals: "口耳舌"
    },
    {
        kanji: "聘",
        radicals: "｜耳日一勹"
    },
    {
        kanji: "聚",
        radicals: "耳又冫"
    },
    {
        kanji: "聟",
        radicals: "口耳矢乞"
    },
    {
        kanji: "聢",
        radicals: "耳疋宀"
    },
    {
        kanji: "聨",
        radicals: "耳幺廾"
    },
    {
        kanji: "聳",
        radicals: "耳并疋彳人"
    },
    {
        kanji: "聲",
        radicals: "士耳尸殳几又"
    },
    {
        kanji: "聰",
        radicals: "耳心囗夂"
    },
    {
        kanji: "聶",
        radicals: "耳"
    },
    {
        kanji: "聹",
        radicals: "耳心買亅宀皿"
    },
    {
        kanji: "聽",
        radicals: "王耳十心買"
    },
    {
        kanji: "聿",
        radicals: "聿"
    },
    {
        kanji: "肄",
        radicals: "矢匕聿乞"
    },
    {
        kanji: "肆",
        radicals: "長厶聿"
    },
    {
        kanji: "肅",
        radicals: "ヨ片爿聿"
    },
    {
        kanji: "肛",
        radicals: "工月"
    },
    {
        kanji: "肓",
        radicals: "亡月亠"
    },
    {
        kanji: "肚",
        radicals: "土月"
    },
    {
        kanji: "肭",
        radicals: "人月冂"
    },
    {
        kanji: "冐",
        radicals: "月二冂"
    },
    {
        kanji: "肬",
        radicals: "月丶尤尢"
    },
    {
        kanji: "胛",
        radicals: "｜月日田"
    },
    {
        kanji: "胥",
        radicals: "月疋"
    },
    {
        kanji: "胙",
        radicals: "｜ノ月"
    },
    {
        kanji: "胝",
        radicals: "月氏"
    },
    {
        kanji: "胄",
        radicals: "｜月日田"
    },
    {
        kanji: "胚",
        radicals: "｜ノ一月丶"
    },
    {
        kanji: "胖",
        radicals: "｜二月并十"
    },
    {
        kanji: "脉",
        radicals: "月水丶"
    },
    {
        kanji: "胯",
        radicals: "月大二勹"
    },
    {
        kanji: "胱",
        radicals: "月尚儿"
    },
    {
        kanji: "脛",
        radicals: "月工巛"
    },
    {
        kanji: "脩",
        radicals: "化月攵乞｜"
    },
    {
        kanji: "脣",
        radicals: "月辰衣"
    },
    {
        kanji: "脯",
        radicals: "｜十月用丶"
    },
    {
        kanji: "腋",
        radicals: "化月夕亠"
    },
    {
        kanji: "隋",
        radicals: "ノ一月工阡"
    },
    {
        kanji: "腆",
        radicals: "｜一月日ハ冂"
    },
    {
        kanji: "脾",
        radicals: "月十田ノ"
    },
    {
        kanji: "腓",
        radicals: "月非"
    },
    {
        kanji: "腑",
        radicals: "化月寸广"
    },
    {
        kanji: "胼",
        radicals: "｜ノ月二并廾一"
    },
    {
        kanji: "腱",
        radicals: "月廴聿"
    },
    {
        kanji: "腮",
        radicals: "月心田"
    },
    {
        kanji: "腥",
        radicals: "月生日"
    },
    {
        kanji: "腦",
        radicals: "巛月囗"
    },
    {
        kanji: "腴",
        radicals: "月人日臼"
    },
    {
        kanji: "膃",
        radicals: "月皿日"
    },
    {
        kanji: "膈",
        radicals: "口月儿冂鬲"
    },
    {
        kanji: "膊",
        radicals: "十寸田月日丶"
    },
    {
        kanji: "膀",
        radicals: "月并方立亠冖"
    },
    {
        kanji: "膂",
        radicals: "衣月方亠乞"
    },
    {
        kanji: "膠",
        radicals: "羽月个冫彡"
    },
    {
        kanji: "膕",
        radicals: "口月囗戈"
    },
    {
        kanji: "膤",
        radicals: "ヨ雨月"
    },
    {
        kanji: "膣",
        radicals: "穴至土月儿厶宀"
    },
    {
        kanji: "腟",
        radicals: "至土月厶宀"
    },
    {
        kanji: "膓",
        radicals: "ノ月日勿一乞"
    },
    {
        kanji: "膩",
        radicals: "貝目ハ二月弋"
    },
    {
        kanji: "膰",
        radicals: "田月釆米"
    },
    {
        kanji: "膵",
        radicals: "十人月亠艾"
    },
    {
        kanji: "膾",
        radicals: "月日買个一"
    },
    {
        kanji: "膸",
        radicals: "ノ一月工込"
    },
    {
        kanji: "膽",
        radicals: "言月儿厂勹"
    },
    {
        kanji: "臀",
        radicals: "月ハ尸殳几又"
    },
    {
        kanji: "臂",
        radicals: "月口十辛立尸"
    },
    {
        kanji: "膺",
        radicals: "化月广隹"
    },
    {
        kanji: "臉",
        radicals: "口人月个一"
    },
    {
        kanji: "臍",
        radicals: "月齊刀氏廾"
    },
    {
        kanji: "臑",
        radicals: "雨而月"
    },
    {
        kanji: "臙",
        radicals: "口月凵匕杰爿"
    },
    {
        kanji: "臘",
        radicals: "臼巛鼠月囗"
    },
    {
        kanji: "臈",
        radicals: "月日勹匕艾"
    },
    {
        kanji: "臚",
        radicals: "皿田月卜匕厂虍"
    },
    {
        kanji: "臟",
        radicals: "ノ臣月戈艾"
    },
    {
        kanji: "臠",
        radicals: "言糸幺小肉"
    },
    {
        kanji: "臧",
        radicals: "ノ臣冫戈疔"
    },
    {
        kanji: "臺",
        radicals: "口士至土冖厶"
    },
    {
        kanji: "臻",
        radicals: "ノ禾至大土二厶"
    },
    {
        kanji: "臾",
        radicals: "臼人"
    },
    {
        kanji: "舁",
        radicals: "臼廾"
    },
    {
        kanji: "舂",
        radicals: "ノ臼大二"
    },
    {
        kanji: "舅",
        radicals: "臼田力"
    },
    {
        kanji: "與",
        radicals: "一臼ハ"
    },
    {
        kanji: "舊",
        radicals: "臼艾隹"
    },
    {
        kanji: "舍",
        radicals: "口舌个"
    },
    {
        kanji: "舐",
        radicals: "口氏舌"
    },
    {
        kanji: "舖",
        radicals: "口十舌用个丶"
    },
    {
        kanji: "舩",
        radicals: "舟ハ厶"
    },
    {
        kanji: "舫",
        radicals: "舟方"
    },
    {
        kanji: "舸",
        radicals: "口舟亅"
    },
    {
        kanji: "舳",
        radicals: "｜舟日田"
    },
    {
        kanji: "艀",
        radicals: "子舟爪"
    },
    {
        kanji: "艙",
        radicals: "口舟个尸一"
    },
    {
        kanji: "艘",
        radicals: "支舟日又"
    },
    {
        kanji: "艝",
        radicals: "ヨ雨舟"
    },
    {
        kanji: "艚",
        radicals: "｜一舟日"
    },
    {
        kanji: "艟",
        radicals: "舟里立"
    },
    {
        kanji: "艤",
        radicals: "王舟并羊亅戈"
    },
    {
        kanji: "艢",
        radicals: "口舟人土囗"
    },
    {
        kanji: "艨",
        radicals: "舟冖艾豕"
    },
    {
        kanji: "艪",
        radicals: "魚舟田日杰"
    },
    {
        kanji: "艫",
        radicals: "皿舟田卜匕厂虍"
    },
    {
        kanji: "舮",
        radicals: "戸舟一尸"
    },
    {
        kanji: "艱",
        radicals: "艮人大二艾"
    },
    {
        kanji: "艷",
        radicals: "口山色豆并凵"
    },
    {
        kanji: "艸",
        radicals: "艾屮"
    },
    {
        kanji: "艾",
        radicals: "ノ艾"
    },
    {
        kanji: "芍",
        radicals: "丶勹艾"
    },
    {
        kanji: "芒",
        radicals: "亡艾亠"
    },
    {
        kanji: "芫",
        radicals: "二儿艾元"
    },
    {
        kanji: "芟",
        radicals: "殳艾几又"
    },
    {
        kanji: "芻",
        radicals: "勹屮艾"
    },
    {
        kanji: "芬",
        radicals: "刀ハ艾"
    },
    {
        kanji: "苡",
        radicals: "｜人艾"
    },
    {
        kanji: "苣",
        radicals: "巨艾"
    },
    {
        kanji: "苟",
        radicals: "口勹艾"
    },
    {
        kanji: "苒",
        radicals: "｜一冂艾十"
    },
    {
        kanji: "苴",
        radicals: "一目艾"
    },
    {
        kanji: "苳",
        radicals: "丶夂艾"
    },
    {
        kanji: "苺",
        radicals: "母艾毋"
    },
    {
        kanji: "莓",
        radicals: "一母艾毋乞"
    },
    {
        kanji: "范",
        radicals: "汁卩艾"
    },
    {
        kanji: "苻",
        radicals: "化寸艾"
    },
    {
        kanji: "苹",
        radicals: "干ハ艾"
    },
    {
        kanji: "苞",
        radicals: "勹已艾"
    },
    {
        kanji: "茆",
        radicals: "ノ卩艾"
    },
    {
        kanji: "苜",
        radicals: "目艾"
    },
    {
        kanji: "茉",
        radicals: "｜一ハ木亠艾"
    },
    {
        kanji: "苙",
        radicals: "立艾"
    },
    {
        kanji: "茵",
        radicals: "大囗艾"
    },
    {
        kanji: "茴",
        radicals: "口囗艾"
    },
    {
        kanji: "茖",
        radicals: "口夂艾"
    },
    {
        kanji: "茲",
        radicals: "幺艾"
    },
    {
        kanji: "茱",
        radicals: "｜ノ牛二ハ木亠艾"
    },
    {
        kanji: "荀",
        radicals: "日勹艾"
    },
    {
        kanji: "茹",
        radicals: "口女艾"
    },
    {
        kanji: "荐",
        radicals: "ノ一子艾"
    },
    {
        kanji: "荅",
        radicals: "口个艾一"
    },
    {
        kanji: "茯",
        radicals: "化犬艾"
    },
    {
        kanji: "茫",
        radicals: "亡汁艾"
    },
    {
        kanji: "茗",
        radicals: "口夕艾"
    },
    {
        kanji: "茘",
        radicals: "刀艾"
    },
    {
        kanji: "莅",
        radicals: "化立艾"
    },
    {
        kanji: "莚",
        radicals: "ノ止廴艾"
    },
    {
        kanji: "莪",
        radicals: "亅戈艾"
    },
    {
        kanji: "莟",
        radicals: "口个艾一"
    },
    {
        kanji: "莢",
        radicals: "人大艾"
    },
    {
        kanji: "莖",
        radicals: "一工巛艾"
    },
    {
        kanji: "茣",
        radicals: "一口ハ艾"
    },
    {
        kanji: "莎",
        radicals: "ノ汁小艾"
    },
    {
        kanji: "莇",
        radicals: "目力艾"
    },
    {
        kanji: "莊",
        radicals: "士爿艾"
    },
    {
        kanji: "荼",
        radicals: "小二ハ个亅艾一"
    },
    {
        kanji: "莵",
        radicals: "鬼儿匕艾"
    },
    {
        kanji: "荳",
        radicals: "口豆并艾"
    },
    {
        kanji: "荵",
        radicals: "心刀丶艾"
    },
    {
        kanji: "莠",
        radicals: "ノ禾艾"
    },
    {
        kanji: "莉",
        radicals: "禾刈艾"
    },
    {
        kanji: "莨",
        radicals: "艮艾"
    },
    {
        kanji: "菴",
        radicals: "乙大日艾奄"
    },
    {
        kanji: "萓",
        radicals: "一目宀艾"
    },
    {
        kanji: "菫",
        radicals: "｜一口土二艾"
    },
    {
        kanji: "菎",
        radicals: "日比艾"
    },
    {
        kanji: "菽",
        radicals: "小卜又艾"
    },
    {
        kanji: "萃",
        radicals: "十人亠艾"
    },
    {
        kanji: "菘",
        radicals: "ハ木厶艾"
    },
    {
        kanji: "萋",
        radicals: "｜ヨ女艾"
    },
    {
        kanji: "菁",
        radicals: "月青土二亠艾"
    },
    {
        kanji: "菷",
        radicals: "ヨ巾冖艾"
    },
    {
        kanji: "萇",
        radicals: "長艾"
    },
    {
        kanji: "菠",
        radicals: "汁皮又艾"
    },
    {
        kanji: "菲",
        radicals: "非艾"
    },
    {
        kanji: "萍",
        radicals: "干汁并艾"
    },
    {
        kanji: "萢",
        radicals: "汁勹已艾"
    },
    {
        kanji: "萠",
        radicals: "月艾"
    },
    {
        kanji: "莽",
        radicals: "大廾艾"
    },
    {
        kanji: "萸",
        radicals: "人日艾臼"
    },
    {
        kanji: "蔆",
        radicals: "汁土儿夂艾"
    },
    {
        kanji: "菻",
        radicals: "木艾"
    },
    {
        kanji: "葭",
        radicals: "｜又艾"
    },
    {
        kanji: "萪",
        radicals: "禾斗艾"
    },
    {
        kanji: "萼",
        radicals: "口二艾勹"
    },
    {
        kanji: "蕚",
        radicals: "口二艾勹品"
    },
    {
        kanji: "蒄",
        radicals: "寸二儿冖艾元"
    },
    {
        kanji: "葷",
        radicals: "車冖艾"
    },
    {
        kanji: "葫",
        radicals: "月口十艾"
    },
    {
        kanji: "蒭",
        radicals: "勹屮艾"
    },
    {
        kanji: "葮",
        radicals: "｜殳艾几又"
    },
    {
        kanji: "蒂",
        radicals: "巾并立亠冖艾"
    },
    {
        kanji: "葩",
        radicals: "白巴艾"
    },
    {
        kanji: "葆",
        radicals: "化口木艾"
    },
    {
        kanji: "萬",
        radicals: "田日冂禹艾"
    },
    {
        kanji: "葯",
        radicals: "糸幺小丶勹艾"
    },
    {
        kanji: "葹",
        radicals: "也方匕艾乞"
    },
    {
        kanji: "萵",
        radicals: "口冂艾"
    },
    {
        kanji: "蓊",
        radicals: "羽ハ冫厶艾"
    },
    {
        kanji: "葢",
        radicals: "皿大丶艾"
    },
    {
        kanji: "蒹",
        radicals: "｜ヨ一并艾"
    },
    {
        kanji: "蒿",
        radicals: "口高亠冂艾"
    },
    {
        kanji: "蒟",
        radicals: "口立勹艾"
    },
    {
        kanji: "蓙",
        radicals: "人土广艾"
    },
    {
        kanji: "蓍",
        radicals: "日老艾匕"
    },
    {
        kanji: "蒻",
        radicals: "弓冫艾"
    },
    {
        kanji: "蓚",
        radicals: "化彡攵艾乞｜"
    },
    {
        kanji: "蓐",
        radicals: "寸辰艾衣"
    },
    {
        kanji: "蓁",
        radicals: "禾大二艾"
    },
    {
        kanji: "蓆",
        radicals: "一巾凵广艾"
    },
    {
        kanji: "蓖",
        radicals: "比囗艾丶ノ"
    },
    {
        kanji: "蒡",
        radicals: "并方立亠冖艾"
    },
    {
        kanji: "蔡",
        radicals: "示二小癶艾"
    },
    {
        kanji: "蓿",
        radicals: "化白宀艾"
    },
    {
        kanji: "蓴",
        radicals: "一寸虫日艾十田"
    },
    {
        kanji: "蔗",
        radicals: "一凵广杰艾"
    },
    {
        kanji: "蔘",
        radicals: "大厶彡艾"
    },
    {
        kanji: "蔬",
        radicals: "止川亠厶艾疋"
    },
    {
        kanji: "蔟",
        radicals: "方矢艾乞"
    },
    {
        kanji: "蔕",
        radicals: "一巾儿冖凵艾"
    },
    {
        kanji: "蔔",
        radicals: "口田勹艾"
    },
    {
        kanji: "蓼",
        radicals: "羽个冫彡艾"
    },
    {
        kanji: "蕀",
        radicals: "｜ハ木冂艾"
    },
    {
        kanji: "蕣",
        radicals: "舛爪夕冖艾"
    },
    {
        kanji: "蕘",
        radicals: "一土儿艾"
    },
    {
        kanji: "蕈",
        radicals: "十西日曰艾"
    },
    {
        kanji: "蕁",
        radicals: "ヨ口工寸艾"
    },
    {
        kanji: "蘂",
        radicals: "心木艾"
    },
    {
        kanji: "蕋",
        radicals: "止艾"
    },
    {
        kanji: "蕕",
        radicals: "酉并犯艾"
    },
    {
        kanji: "薀",
        radicals: "皿汁口人艾"
    },
    {
        kanji: "薤",
        radicals: "歹艾韭"
    },
    {
        kanji: "薈",
        radicals: "日買个艾一"
    },
    {
        kanji: "薑",
        radicals: "一田二艾"
    },
    {
        kanji: "薊",
        radicals: "刈魚田杰艾"
    },
    {
        kanji: "薨",
        radicals: "買夕冖匕艾"
    },
    {
        kanji: "蕭",
        radicals: "｜ノヨ米艾聿"
    },
    {
        kanji: "薔",
        radicals: "口人土囗艾"
    },
    {
        kanji: "薛",
        radicals: "｜口十辛立艾"
    },
    {
        kanji: "藪",
        radicals: "｜一口女攵艾乞"
    },
    {
        kanji: "薇",
        radicals: "山几彳攵艾乞"
    },
    {
        kanji: "薜",
        radicals: "口十辛立尸艾"
    },
    {
        kanji: "蕷",
        radicals: "貝目ハ頁矛亅艾"
    },
    {
        kanji: "蕾",
        radicals: "雨田艾"
    },
    {
        kanji: "薐",
        radicals: "禾土儿夂艾"
    },
    {
        kanji: "藉",
        radicals: "｜一二日ハ木耒艾ノ"
    },
    {
        kanji: "薺",
        radicals: "亠艾齊刀氏廾"
    },
    {
        kanji: "藏",
        radicals: "ノ臣戈爿艾"
    },
    {
        kanji: "薹",
        radicals: "口士至土冖厶艾"
    },
    {
        kanji: "藐",
        radicals: "日儿艾豸"
    },
    {
        kanji: "藕",
        radicals: "｜田日ハ木禹耒艾ノ"
    },
    {
        kanji: "藝",
        radicals: "九土二丶儿厶艾"
    },
    {
        kanji: "藥",
        radicals: "白木幺艾"
    },
    {
        kanji: "藜",
        radicals: "禾水个勹艾黍"
    },
    {
        kanji: "藹",
        radicals: "言日勹匕艾"
    },
    {
        kanji: "蘊",
        radicals: "皿糸幺小日艾"
    },
    {
        kanji: "蘓",
        radicals: "禾魚田杰艾"
    },
    {
        kanji: "蘋",
        radicals: "ノ貝目ハ止小頁艾"
    },
    {
        kanji: "藾",
        radicals: "｜貝目口ハ頁木艾"
    },
    {
        kanji: "藺",
        radicals: "門艾隹"
    },
    {
        kanji: "蘆",
        radicals: "皿田卜匕厂艾虍"
    },
    {
        kanji: "蘢",
        radicals: "月立艾"
    },
    {
        kanji: "蘚",
        radicals: "王魚田并羊杰艾"
    },
    {
        kanji: "蘰",
        radicals: "糸幺小日買又艾"
    },
    {
        kanji: "蘿",
        radicals: "糸幺小買艾隹"
    },
    {
        kanji: "虍",
        radicals: "卜匕厂虍"
    },
    {
        kanji: "乕",
        radicals: "｜ノ一巾厂"
    },
    {
        kanji: "虔",
        radicals: "文卜匕厂虍"
    },
    {
        kanji: "號",
        radicals: "口卜儿匕厂虍一勹"
    },
    {
        kanji: "虧",
        radicals: "二卜匕厂虍隹勹"
    },
    {
        kanji: "虱",
        radicals: "ノ一乙虫"
    },
    {
        kanji: "蚓",
        radicals: "｜弓虫"
    },
    {
        kanji: "蚣",
        radicals: "虫ハ厶"
    },
    {
        kanji: "蚩",
        radicals: "一山虫屮"
    },
    {
        kanji: "蚪",
        radicals: "虫斗"
    },
    {
        kanji: "蚋",
        radicals: "人虫冂"
    },
    {
        kanji: "蚌",
        radicals: "｜一虫二"
    },
    {
        kanji: "蚶",
        radicals: "甘虫"
    },
    {
        kanji: "蚯",
        radicals: "斤虫一"
    },
    {
        kanji: "蛄",
        radicals: "口十虫"
    },
    {
        kanji: "蛆",
        radicals: "虫目"
    },
    {
        kanji: "蚰",
        radicals: "｜虫日田"
    },
    {
        kanji: "蛉",
        radicals: "虫个卩一"
    },
    {
        kanji: "蠣",
        radicals: "虫田厂禹艾"
    },
    {
        kanji: "蚫",
        radicals: "虫勹已"
    },
    {
        kanji: "蛔",
        radicals: "口虫囗"
    },
    {
        kanji: "蛞",
        radicals: "口舌虫"
    },
    {
        kanji: "蛩",
        radicals: "工虫丶几"
    },
    {
        kanji: "蛬",
        radicals: "｜一虫二ハ"
    },
    {
        kanji: "蛟",
        radicals: "虫父亠"
    },
    {
        kanji: "蛛",
        radicals: "｜ノ牛虫二ハ木"
    },
    {
        kanji: "蛯",
        radicals: "虫老匕"
    },
    {
        kanji: "蜒",
        radicals: "ノ止虫廴"
    },
    {
        kanji: "蜆",
        radicals: "見虫"
    },
    {
        kanji: "蜈",
        radicals: "口虫ハ"
    },
    {
        kanji: "蜀",
        radicals: "虫買勹"
    },
    {
        kanji: "蜃",
        radicals: "辰虫衣"
    },
    {
        kanji: "蛻",
        radicals: "口虫并儿"
    },
    {
        kanji: "蜑",
        radicals: "ノ止虫廴"
    },
    {
        kanji: "蜉",
        radicals: "子虫爪"
    },
    {
        kanji: "蜍",
        radicals: "小虫二个亅一"
    },
    {
        kanji: "蛹",
        radicals: "虫用マ"
    },
    {
        kanji: "蜊",
        radicals: "禾刈虫"
    },
    {
        kanji: "蜴",
        radicals: "ノ虫日勿勹"
    },
    {
        kanji: "蜿",
        radicals: "虫夕卩宀"
    },
    {
        kanji: "蜷",
        radicals: "人大虫二并已"
    },
    {
        kanji: "蜻",
        radicals: "月青虫土二亠"
    },
    {
        kanji: "蜥",
        radicals: "斤虫木"
    },
    {
        kanji: "蜩",
        radicals: "口虫土冂"
    },
    {
        kanji: "蜚",
        radicals: "虫非"
    },
    {
        kanji: "蝠",
        radicals: "口虫田"
    },
    {
        kanji: "蝟",
        radicals: "月虫田"
    },
    {
        kanji: "蝸",
        radicals: "口虫冂"
    },
    {
        kanji: "蝌",
        radicals: "禾虫斗"
    },
    {
        kanji: "蝎",
        radicals: "虫日勹匕"
    },
    {
        kanji: "蝴",
        radicals: "月口十虫"
    },
    {
        kanji: "蝗",
        radicals: "王虫白"
    },
    {
        kanji: "蝨",
        radicals: "ノ一乙虫"
    },
    {
        kanji: "蝮",
        radicals: "虫日夂乞"
    },
    {
        kanji: "蝙",
        radicals: "｜一戸虫冊尸廾"
    },
    {
        kanji: "蝓",
        radicals: "刈月虫个一"
    },
    {
        kanji: "蝣",
        radicals: "子虫方乞"
    },
    {
        kanji: "蝪",
        radicals: "ノ虫日勿一勹"
    },
    {
        kanji: "蠅",
        radicals: "虫黽"
    },
    {
        kanji: "螢",
        radicals: "火虫冖"
    },
    {
        kanji: "螟",
        radicals: "虫日ハ亠冖"
    },
    {
        kanji: "螂",
        radicals: "艮虫邦"
    },
    {
        kanji: "螯",
        radicals: "虫土方攵乞"
    },
    {
        kanji: "蟋",
        radicals: "心虫釆米"
    },
    {
        kanji: "螽",
        radicals: "虫丶夂"
    },
    {
        kanji: "蟀",
        radicals: "十虫亠冫幺玄"
    },
    {
        kanji: "蟐",
        radicals: "巾口尚虫冖"
    },
    {
        kanji: "雖",
        radicals: "口虫隹"
    },
    {
        kanji: "螫",
        radicals: "赤虫土攵乞"
    },
    {
        kanji: "蟄",
        radicals: "九十辛虫立丶亠"
    },
    {
        kanji: "螳",
        radicals: "口尚虫土冖"
    },
    {
        kanji: "蟇",
        radicals: "大虫日艾"
    },
    {
        kanji: "蟆",
        radicals: "大虫日艾"
    },
    {
        kanji: "螻",
        radicals: "｜一口女虫"
    },
    {
        kanji: "蟯",
        radicals: "虫土儿"
    },
    {
        kanji: "蟲",
        radicals: "虫"
    },
    {
        kanji: "蟠",
        radicals: "虫田釆米"
    },
    {
        kanji: "蠏",
        radicals: "角牛虫刀"
    },
    {
        kanji: "蠍",
        radicals: "欠虫日勹匕"
    },
    {
        kanji: "蟾",
        radicals: "言虫儿厂"
    },
    {
        kanji: "蟶",
        radicals: "王口耳虫"
    },
    {
        kanji: "蟷",
        radicals: "口尚虫田冖"
    },
    {
        kanji: "蠎",
        radicals: "十大虫廾艾"
    },
    {
        kanji: "蟒",
        radicals: "大虫廾艾"
    },
    {
        kanji: "蠑",
        radicals: "火虫木冖"
    },
    {
        kanji: "蠖",
        radicals: "虫又艾隹"
    },
    {
        kanji: "蠕",
        radicals: "雨而虫"
    },
    {
        kanji: "蠢",
        radicals: "大虫二日"
    },
    {
        kanji: "蠡",
        radicals: "彑虫豕"
    },
    {
        kanji: "蠱",
        radicals: "皿虫"
    },
    {
        kanji: "蠶",
        radicals: "虫日无"
    },
    {
        kanji: "蠹",
        radicals: "｜一口石虫冖"
    },
    {
        kanji: "蠧",
        radicals: "口士石虫冖"
    },
    {
        kanji: "蠻",
        radicals: "言糸幺小虫"
    },
    {
        kanji: "衄",
        radicals: "｜一血皿"
    },
    {
        kanji: "衂",
        radicals: "血皿刀丶"
    },
    {
        kanji: "衒",
        radicals: "行亠幺彳玄"
    },
    {
        kanji: "衙",
        radicals: "一口行彳五｜"
    },
    {
        kanji: "衞",
        radicals: "巾口行彳"
    },
    {
        kanji: "衢",
        radicals: "行目彳隹"
    },
    {
        kanji: "衫",
        radicals: "初彡"
    },
    {
        kanji: "袁",
        radicals: "衣口土"
    },
    {
        kanji: "衾",
        radicals: "衣个亠一"
    },
    {
        kanji: "袞",
        radicals: "衣口ハ亠"
    },
    {
        kanji: "衵",
        radicals: "初日"
    },
    {
        kanji: "衽",
        radicals: "王初士"
    },
    {
        kanji: "袵",
        radicals: "王化初"
    },
    {
        kanji: "衲",
        radicals: "初人冂"
    },
    {
        kanji: "袂",
        radicals: "初人大二ユ"
    },
    {
        kanji: "袗",
        radicals: "初个彡"
    },
    {
        kanji: "袒",
        radicals: "初日一"
    },
    {
        kanji: "袮",
        radicals: "ノ初小乞"
    },
    {
        kanji: "袙",
        radicals: "初白"
    },
    {
        kanji: "袢",
        radicals: "｜初二并十"
    },
    {
        kanji: "袍",
        radicals: "初勹已"
    },
    {
        kanji: "袤",
        radicals: "衣矛亠"
    },
    {
        kanji: "袰",
        radicals: "衣母毋亠"
    },
    {
        kanji: "袿",
        radicals: "初土"
    },
    {
        kanji: "袱",
        radicals: "化犬初"
    },
    {
        kanji: "裃",
        radicals: "初卜"
    },
    {
        kanji: "裄",
        radicals: "行初彳"
    },
    {
        kanji: "裔",
        radicals: "衣口儿冂亠"
    },
    {
        kanji: "裘",
        radicals: "衣水丶亠"
    },
    {
        kanji: "裙",
        radicals: "ノヨ口初尸"
    },
    {
        kanji: "裝",
        radicals: "衣士爿亠"
    },
    {
        kanji: "裹",
        radicals: "衣田ハ亠木"
    },
    {
        kanji: "褂",
        radicals: "初土卜"
    },
    {
        kanji: "裼",
        radicals: "ノ初日勿勹"
    },
    {
        kanji: "裴",
        radicals: "衣非亠"
    },
    {
        kanji: "裨",
        radicals: "十初田"
    },
    {
        kanji: "裲",
        radicals: "｜一初入冂"
    },
    {
        kanji: "褄",
        radicals: "｜ヨ一初女"
    },
    {
        kanji: "褌",
        radicals: "車初冖"
    },
    {
        kanji: "褊",
        radicals: "｜一戸初冊尸廾"
    },
    {
        kanji: "褓",
        radicals: "化口初木"
    },
    {
        kanji: "襃",
        radicals: "衣口木亠"
    },
    {
        kanji: "褞",
        radicals: "皿初日"
    },
    {
        kanji: "褥",
        radicals: "初寸辰衣"
    },
    {
        kanji: "褪",
        radicals: "込艮初"
    },
    {
        kanji: "褫",
        radicals: "初卜儿匕厂虍"
    },
    {
        kanji: "襁",
        radicals: "弓初虫厶"
    },
    {
        kanji: "襄",
        radicals: "｜衣一ハ亠井"
    },
    {
        kanji: "褻",
        radicals: "衣九土丶亠"
    },
    {
        kanji: "褶",
        radicals: "羽初白冫"
    },
    {
        kanji: "褸",
        radicals: "｜一口初女"
    },
    {
        kanji: "襌",
        radicals: "口十初田"
    },
    {
        kanji: "褝",
        radicals: "十初尚田"
    },
    {
        kanji: "襠",
        radicals: "口初尚田冖"
    },
    {
        kanji: "襞",
        radicals: "衣口十辛立尸亠"
    },
    {
        kanji: "襦",
        radicals: "雨而初"
    },
    {
        kanji: "襤",
        radicals: "皿初臣二乞"
    },
    {
        kanji: "襭",
        radicals: "貝目ハ口初土頁"
    },
    {
        kanji: "襪",
        radicals: "ノ初買戈艾"
    },
    {
        kanji: "襯",
        radicals: "見初木立"
    },
    {
        kanji: "襴",
        radicals: "初日木門"
    },
    {
        kanji: "襷",
        radicals: "手初尚并"
    },
    {
        kanji: "襾",
        radicals: "西"
    },
    {
        kanji: "覃",
        radicals: "十西日"
    },
    {
        kanji: "覈",
        radicals: "西白方攵乞"
    },
    {
        kanji: "覊",
        radicals: "革西馬杰"
    },
    {
        kanji: "覓",
        radicals: "見爪"
    },
    {
        kanji: "覘",
        radicals: "見口卜"
    },
    {
        kanji: "覡",
        radicals: "見工人"
    },
    {
        kanji: "覩",
        radicals: "見日老十"
    },
    {
        kanji: "覦",
        radicals: "刈月見个一"
    },
    {
        kanji: "覬",
        radicals: "見口山豆并"
    },
    {
        kanji: "覯",
        radicals: "｜一見冂"
    },
    {
        kanji: "覲",
        radicals: "見土艾口二"
    },
    {
        kanji: "覺",
        radicals: "臼見冖爻"
    },
    {
        kanji: "覽",
        radicals: "見臣買乞"
    },
    {
        kanji: "覿",
        radicals: "貝目ハ見士儿囗"
    },
    {
        kanji: "觀",
        radicals: "見口十艾隹"
    },
    {
        kanji: "觚",
        radicals: "瓜角"
    },
    {
        kanji: "觜",
        radicals: "角止匕"
    },
    {
        kanji: "觝",
        radicals: "角氏"
    },
    {
        kanji: "觧",
        radicals: "王角并羊"
    },
    {
        kanji: "觴",
        radicals: "ノ角日勿一勹乞"
    },
    {
        kanji: "觸",
        radicals: "角虫買勹"
    },
    {
        kanji: "訃",
        radicals: "言卜"
    },
    {
        kanji: "訖",
        radicals: "乙言乞"
    },
    {
        kanji: "訐",
        radicals: "干言"
    },
    {
        kanji: "訌",
        radicals: "言工"
    },
    {
        kanji: "訛",
        radicals: "化言匕"
    },
    {
        kanji: "訝",
        radicals: "牙言"
    },
    {
        kanji: "訥",
        radicals: "言人冂"
    },
    {
        kanji: "訶",
        radicals: "言口亅一"
    },
    {
        kanji: "詁",
        radicals: "言口十"
    },
    {
        kanji: "詛",
        radicals: "言目"
    },
    {
        kanji: "詒",
        radicals: "言口厶"
    },
    {
        kanji: "詆",
        radicals: "言氏"
    },
    {
        kanji: "詈",
        radicals: "言買"
    },
    {
        kanji: "詼",
        radicals: "火言厂"
    },
    {
        kanji: "詭",
        radicals: "言卩厂勹"
    },
    {
        kanji: "詬",
        radicals: "言口厂"
    },
    {
        kanji: "詢",
        radicals: "言日勹"
    },
    {
        kanji: "誅",
        radicals: "｜ノ牛言二ハ木"
    },
    {
        kanji: "誂",
        radicals: "言儿冫"
    },
    {
        kanji: "誄",
        radicals: "｜言木耒ハノ"
    },
    {
        kanji: "誨",
        radicals: "言母毋乞"
    },
    {
        kanji: "誡",
        radicals: "言廾戈"
    },
    {
        kanji: "誑",
        radicals: "王言犯"
    },
    {
        kanji: "誥",
        radicals: "ノ言口土"
    },
    {
        kanji: "誦",
        radicals: "言用"
    },
    {
        kanji: "誚",
        radicals: "月言尚"
    },
    {
        kanji: "誣",
        radicals: "言工人"
    },
    {
        kanji: "諄",
        radicals: "言子亠口"
    },
    {
        kanji: "諍",
        radicals: "ヨ言爪亅"
    },
    {
        kanji: "諂",
        radicals: "臼言"
    },
    {
        kanji: "諚",
        radicals: "言疋宀"
    },
    {
        kanji: "諫",
        radicals: "｜言口買ハ木"
    },
    {
        kanji: "諳",
        radicals: "音言日立"
    },
    {
        kanji: "諧",
        radicals: "言白比"
    },
    {
        kanji: "諤",
        radicals: "言口二勹"
    },
    {
        kanji: "諱",
        radicals: "言口韋"
    },
    {
        kanji: "謔",
        radicals: "言卜匕匚厂虍"
    },
    {
        kanji: "諠",
        radicals: "言二日宀一"
    },
    {
        kanji: "諢",
        radicals: "言車冖"
    },
    {
        kanji: "諷",
        radicals: "言虫風几"
    },
    {
        kanji: "諞",
        radicals: "｜一言戸冊尸廾"
    },
    {
        kanji: "諛",
        radicals: "言人日臼"
    },
    {
        kanji: "謌",
        radicals: "言口亅一"
    },
    {
        kanji: "謇",
        radicals: "｜一言ハ宀"
    },
    {
        kanji: "謚",
        radicals: "言皿并"
    },
    {
        kanji: "諡",
        radicals: "言皿ハ一勹"
    },
    {
        kanji: "謖",
        radicals: "言田儿夂"
    },
    {
        kanji: "謐",
        radicals: "ノ言皿心丶"
    },
    {
        kanji: "謗",
        radicals: "言并方立亠冖"
    },
    {
        kanji: "謠",
        radicals: "缶言夕凵"
    },
    {
        kanji: "謳",
        radicals: "言口匚品"
    },
    {
        kanji: "鞫",
        radicals: "革言勹"
    },
    {
        kanji: "謦",
        radicals: "言士尸殳几又"
    },
    {
        kanji: "謫",
        radicals: "言口十并立亠冂滴"
    },
    {
        kanji: "謾",
        radicals: "言日買又"
    },
    {
        kanji: "謨",
        radicals: "言大日艾"
    },
    {
        kanji: "譁",
        radicals: "｜一言艾"
    },
    {
        kanji: "譌",
        radicals: "ノ言爪杰"
    },
    {
        kanji: "譏",
        radicals: "言丶幺戈ノ"
    },
    {
        kanji: "譎",
        radicals: "言口矛儿冂"
    },
    {
        kanji: "證",
        radicals: "言口豆并癶"
    },
    {
        kanji: "譖",
        radicals: "言日无"
    },
    {
        kanji: "譛",
        radicals: "言人大二日亠"
    },
    {
        kanji: "譚",
        radicals: "言十西日曰"
    },
    {
        kanji: "譫",
        radicals: "言儿厂勹"
    },
    {
        kanji: "譟",
        radicals: "言口木品"
    },
    {
        kanji: "譬",
        radicals: "言口十辛立尸"
    },
    {
        kanji: "譯",
        radicals: "言十辛土買立亠"
    },
    {
        kanji: "譴",
        radicals: "｜一言口込"
    },
    {
        kanji: "譽",
        radicals: "臼言ハ"
    },
    {
        kanji: "讀",
        radicals: "貝目ハ言士儿囗"
    },
    {
        kanji: "讌",
        radicals: "一言口凵匕杰爿"
    },
    {
        kanji: "讎",
        radicals: "言隹"
    },
    {
        kanji: "讒",
        radicals: "言口比儿勹"
    },
    {
        kanji: "讓",
        radicals: "｜衣一言口亠"
    },
    {
        kanji: "讖",
        radicals: "言人戈韭"
    },
    {
        kanji: "讙",
        radicals: "言口十艾隹"
    },
    {
        kanji: "讚",
        radicals: "ノ言土儿貝目ハ"
    },
    {
        kanji: "谺",
        radicals: "牙口谷ハ个"
    },
    {
        kanji: "豁",
        radicals: "口谷土ハ个亠宀二"
    },
    {
        kanji: "谿",
        radicals: "口大谷爪并个幺"
    },
    {
        kanji: "豈",
        radicals: "口山豆并"
    },
    {
        kanji: "豌",
        radicals: "口豆并夕卩宀"
    },
    {
        kanji: "豎",
        radicals: "口臣豆并又"
    },
    {
        kanji: "豐",
        radicals: "口山豆并凵"
    },
    {
        kanji: "豕",
        radicals: "豕"
    },
    {
        kanji: "豢",
        radicals: "人大二并豕"
    },
    {
        kanji: "豬",
        radicals: "日老豕"
    },
    {
        kanji: "豸",
        radicals: "豸"
    },
    {
        kanji: "豺",
        radicals: "ノ一亅豸"
    },
    {
        kanji: "貂",
        radicals: "口刀豸"
    },
    {
        kanji: "貉",
        radicals: "口夂豸"
    },
    {
        kanji: "貅",
        radicals: "化木豸"
    },
    {
        kanji: "貊",
        radicals: "白豸"
    },
    {
        kanji: "貍",
        radicals: "里豸"
    },
    {
        kanji: "貎",
        radicals: "臼儿豸"
    },
    {
        kanji: "貔",
        radicals: "比囗豸"
    },
    {
        kanji: "豼",
        radicals: "比豸"
    },
    {
        kanji: "貘",
        radicals: "大日艾豸"
    },
    {
        kanji: "戝",
        radicals: "貝目ハ戈"
    },
    {
        kanji: "貭",
        radicals: "貝目ハ十厂"
    },
    {
        kanji: "貪",
        radicals: "貝目ハ个一"
    },
    {
        kanji: "貽",
        radicals: "貝目ハ口厶"
    },
    {
        kanji: "貲",
        radicals: "貝目ハ止匕"
    },
    {
        kanji: "貳",
        radicals: "貝目ハ二弋"
    },
    {
        kanji: "貮",
        radicals: "貝目ハ弋"
    },
    {
        kanji: "貶",
        radicals: "ノ乙貝目ハ亠"
    },
    {
        kanji: "賈",
        radicals: "貝目ハ西"
    },
    {
        kanji: "賁",
        radicals: "貝目ハ十艾"
    },
    {
        kanji: "賤",
        radicals: "貝目ハ戈"
    },
    {
        kanji: "賣",
        radicals: "貝目ハ士買"
    },
    {
        kanji: "賚",
        radicals: "一貝目人ハ木"
    },
    {
        kanji: "賽",
        radicals: "｜一貝目ハ宀"
    },
    {
        kanji: "賺",
        radicals: "｜ヨ貝目ハ"
    },
    {
        kanji: "賻",
        radicals: "貝目ハ十寸田丶"
    },
    {
        kanji: "贄",
        radicals: "九貝目ハ十辛立丶亠"
    },
    {
        kanji: "贅",
        radicals: "貝目ハ土方攵乞"
    },
    {
        kanji: "贊",
        radicals: "ノ貝目ハ土儿"
    },
    {
        kanji: "贇",
        radicals: "貝目ハ止文戈"
    },
    {
        kanji: "贏",
        radicals: "亡貝目ハ月口"
    },
    {
        kanji: "贍",
        radicals: "貝目ハ言儿厂"
    },
    {
        kanji: "贐",
        radicals: "｜ヨ貝目ハ皿杰"
    },
    {
        kanji: "齎",
        radicals: "貝目ハ亠齊刀氏廾"
    },
    {
        kanji: "贓",
        radicals: "ノ貝目ハ臣冫戈疔"
    },
    {
        kanji: "賍",
        radicals: "貝目ハ土广"
    },
    {
        kanji: "贔",
        radicals: "貝目ハ"
    },
    {
        kanji: "贖",
        radicals: "貝目ハ士儿囗"
    },
    {
        kanji: "赧",
        radicals: "｜口赤土又"
    },
    {
        kanji: "赭",
        radicals: "赤土日老"
    },
    {
        kanji: "赱",
        radicals: "走土"
    },
    {
        kanji: "赳",
        radicals: "｜走土"
    },
    {
        kanji: "趁",
        radicals: "走土个彡"
    },
    {
        kanji: "趙",
        radicals: "月尚走土"
    },
    {
        kanji: "跂",
        radicals: "口支足又十止"
    },
    {
        kanji: "趾",
        radicals: "口止足"
    },
    {
        kanji: "趺",
        radicals: "口人足二大止"
    },
    {
        kanji: "跏",
        radicals: "口足力止"
    },
    {
        kanji: "跚",
        radicals: "｜一口足冊冂止廾"
    },
    {
        kanji: "跖",
        radicals: "口石足止"
    },
    {
        kanji: "跌",
        radicals: "ノ口人足大土二止"
    },
    {
        kanji: "跛",
        radicals: "口足皮又止"
    },
    {
        kanji: "跋",
        radicals: "ノ一口足丶止"
    },
    {
        kanji: "跪",
        radicals: "口足卩厂勹止"
    },
    {
        kanji: "跫",
        radicals: "口工足丶几止"
    },
    {
        kanji: "跟",
        radicals: "口艮足止"
    },
    {
        kanji: "跣",
        radicals: "ノ口足土儿止"
    },
    {
        kanji: "跼",
        radicals: "口足尸止"
    },
    {
        kanji: "踈",
        radicals: "｜口足ハ木止"
    },
    {
        kanji: "踉",
        radicals: "口艮足止"
    },
    {
        kanji: "跿",
        radicals: "口走足土止"
    },
    {
        kanji: "踝",
        radicals: "口足田木止"
    },
    {
        kanji: "踞",
        radicals: "口十足尸止"
    },
    {
        kanji: "踐",
        radicals: "口足戈止"
    },
    {
        kanji: "踟",
        radicals: "口足矢止乞"
    },
    {
        kanji: "蹂",
        radicals: "口足矛木マ止"
    },
    {
        kanji: "踵",
        radicals: "｜ノ口足日里止"
    },
    {
        kanji: "踰",
        radicals: "刈月口足个止一"
    },
    {
        kanji: "踴",
        radicals: "口足田力マ止"
    },
    {
        kanji: "蹊",
        radicals: "口足大爪幺止"
    },
    {
        kanji: "蹇",
        radicals: "｜一口足ハ宀止"
    },
    {
        kanji: "蹉",
        radicals: "王口工足并羊止"
    },
    {
        kanji: "蹌",
        radicals: "口足个尸止一"
    },
    {
        kanji: "蹐",
        radicals: "月口人足止二"
    },
    {
        kanji: "蹈",
        radicals: "臼口足爪止"
    },
    {
        kanji: "蹙",
        radicals: "ノ口小足卜戈止"
    },
    {
        kanji: "蹤",
        radicals: "口足并疋彳止"
    },
    {
        kanji: "蹠",
        radicals: "一口足凵广杰止"
    },
    {
        kanji: "踪",
        radicals: "口示二小足宀止"
    },
    {
        kanji: "蹣",
        radicals: "一口足入冂凵止"
    },
    {
        kanji: "蹕",
        radicals: "｜一口足田止"
    },
    {
        kanji: "蹶",
        radicals: "欠口足并厂屮止"
    },
    {
        kanji: "蹲",
        radicals: "口寸足酉并止"
    },
    {
        kanji: "蹼",
        radicals: "王口人足并羊止二大"
    },
    {
        kanji: "躁",
        radicals: "口足木品止"
    },
    {
        kanji: "躇",
        radicals: "口足日老艾止"
    },
    {
        kanji: "躅",
        radicals: "口足虫買勹止"
    },
    {
        kanji: "躄",
        radicals: "口十辛足立尸止"
    },
    {
        kanji: "躋",
        radicals: "口足亠齊刀氏廾止"
    },
    {
        kanji: "躊",
        radicals: "口工士寸足止"
    },
    {
        kanji: "躓",
        radicals: "貝目ハ斤口足止"
    },
    {
        kanji: "躑",
        radicals: "口足大酉并邦止"
    },
    {
        kanji: "躔",
        radicals: "口足田土儿广止里"
    },
    {
        kanji: "躙",
        radicals: "口足門隹止"
    },
    {
        kanji: "躪",
        radicals: "口足門艾隹止"
    },
    {
        kanji: "躡",
        radicals: "口耳足止"
    },
    {
        kanji: "躬",
        radicals: "弓身"
    },
    {
        kanji: "躰",
        radicals: "｜身木"
    },
    {
        kanji: "軆",
        radicals: "｜一口身豆日并"
    },
    {
        kanji: "躱",
        radicals: "ノ身木乃"
    },
    {
        kanji: "躾",
        radicals: "王身大并羊"
    },
    {
        kanji: "軅",
        radicals: "化身厂隹"
    },
    {
        kanji: "軈",
        radicals: "化心身广隹"
    },
    {
        kanji: "軋",
        radicals: "乙車"
    },
    {
        kanji: "軛",
        radicals: "車卩厂"
    },
    {
        kanji: "軣",
        radicals: "車冫"
    },
    {
        kanji: "軼",
        radicals: "ノ車人大土二"
    },
    {
        kanji: "軻",
        radicals: "口車亅"
    },
    {
        kanji: "軫",
        radicals: "車个彡"
    },
    {
        kanji: "軾",
        radicals: "工車戈弋"
    },
    {
        kanji: "輊",
        radicals: "至車土厶一"
    },
    {
        kanji: "輅",
        radicals: "口車夂"
    },
    {
        kanji: "輕",
        radicals: "工車巛"
    },
    {
        kanji: "輒",
        radicals: "乙耳車"
    },
    {
        kanji: "輙",
        radicals: "耳車又"
    },
    {
        kanji: "輓",
        radicals: "車免儿勹"
    },
    {
        kanji: "輜",
        radicals: "車巛田"
    },
    {
        kanji: "輟",
        radicals: "車又"
    },
    {
        kanji: "輛",
        radicals: "｜車入冂"
    },
    {
        kanji: "輌",
        radicals: "｜一車冂山"
    },
    {
        kanji: "輦",
        radicals: "化車人大二亠"
    },
    {
        kanji: "輳",
        radicals: "一車人大二"
    },
    {
        kanji: "輻",
        radicals: "口車田"
    },
    {
        kanji: "輹",
        radicals: "車日夂乞"
    },
    {
        kanji: "轅",
        radicals: "口車土衣"
    },
    {
        kanji: "轂",
        radicals: "士車冖殳几又"
    },
    {
        kanji: "輾",
        radicals: "｜衣車二尸"
    },
    {
        kanji: "轌",
        radicals: "ヨ雨車"
    },
    {
        kanji: "轉",
        radicals: "車十寸虫田厶"
    },
    {
        kanji: "轆",
        radicals: "鹿車比广"
    },
    {
        kanji: "轎",
        radicals: "ノ口車大冂"
    },
    {
        kanji: "轗",
        radicals: "ノ口車心戈"
    },
    {
        kanji: "轜",
        radicals: "雨而車"
    },
    {
        kanji: "轢",
        radicals: "車白木冫"
    },
    {
        kanji: "轣",
        radicals: "止車木厂禾"
    },
    {
        kanji: "轤",
        radicals: "皿車田卜匕厂虍"
    },
    {
        kanji: "辜",
        radicals: "口十辛立"
    },
    {
        kanji: "辟",
        radicals: "口十辛立尸"
    },
    {
        kanji: "辣",
        radicals: "｜口十辛木立"
    },
    {
        kanji: "辭",
        radicals: "十辛爪又立冂禹"
    },
    {
        kanji: "辯",
        radicals: "言十辛立"
    },
    {
        kanji: "辷",
        radicals: "一込"
    },
    {
        kanji: "迚",
        radicals: "｜口込"
    },
    {
        kanji: "迥",
        radicals: "口込冂"
    },
    {
        kanji: "迢",
        radicals: "口込刀"
    },
    {
        kanji: "迪",
        radicals: "｜込日田"
    },
    {
        kanji: "迯",
        radicals: "込卜夕"
    },
    {
        kanji: "邇",
        radicals: "｜一込ハ冂爻"
    },
    {
        kanji: "迴",
        radicals: "口込囗"
    },
    {
        kanji: "逅",
        radicals: "口込厂"
    },
    {
        kanji: "迹",
        radicals: "込赤ハ亅亠"
    },
    {
        kanji: "迺",
        radicals: "込西"
    },
    {
        kanji: "逑",
        radicals: "込水丶亠"
    },
    {
        kanji: "逕",
        radicals: "一工込巛"
    },
    {
        kanji: "逡",
        radicals: "込儿厶夂"
    },
    {
        kanji: "逍",
        radicals: "月込尚"
    },
    {
        kanji: "逞",
        radicals: "王口込"
    },
    {
        kanji: "逖",
        radicals: "火込犯"
    },
    {
        kanji: "逋",
        radicals: "込十用丶"
    },
    {
        kanji: "逧",
        radicals: "口込谷ハ个"
    },
    {
        kanji: "逶",
        radicals: "禾込女"
    },
    {
        kanji: "逵",
        radicals: "込土儿"
    },
    {
        kanji: "逹",
        radicals: "込十辛立亠"
    },
    {
        kanji: "迸",
        radicals: "｜ノ込二并廾一"
    },
    {
        kanji: "遏",
        radicals: "込日勹匕"
    },
    {
        kanji: "遐",
        radicals: "｜口込又"
    },
    {
        kanji: "遑",
        radicals: "王込白"
    },
    {
        kanji: "遒",
        radicals: "込酉并"
    },
    {
        kanji: "逎",
        radicals: "込酉"
    },
    {
        kanji: "遉",
        radicals: "貝目ハ込卜"
    },
    {
        kanji: "逾",
        radicals: "刈月込个一"
    },
    {
        kanji: "遖",
        radicals: "干込十并冂"
    },
    {
        kanji: "遘",
        radicals: "｜一込冂"
    },
    {
        kanji: "遞",
        radicals: "込卜儿匕厂虍"
    },
    {
        kanji: "遨",
        radicals: "込土方攵乞"
    },
    {
        kanji: "遯",
        radicals: "込月豕"
    },
    {
        kanji: "遶",
        radicals: "込土儿"
    },
    {
        kanji: "隨",
        radicals: "ノ一月工阡込"
    },
    {
        kanji: "遲",
        radicals: "牛込水尸"
    },
    {
        kanji: "邂",
        radicals: "角牛込刀"
    },
    {
        kanji: "遽",
        radicals: "込卜匕厂虍豕"
    },
    {
        kanji: "邁",
        radicals: "込田禹艾"
    },
    {
        kanji: "邀",
        radicals: "込白方攵乞"
    },
    {
        kanji: "邊",
        radicals: "穴込自方儿宀目"
    },
    {
        kanji: "邉",
        radicals: "口込自ハ冖目儿"
    },
    {
        kanji: "邏",
        radicals: "込糸幺小買隹"
    },
    {
        kanji: "邨",
        radicals: "屯邦"
    },
    {
        kanji: "邯",
        radicals: "甘邦"
    },
    {
        kanji: "邱",
        radicals: "斤邦一"
    },
    {
        kanji: "邵",
        radicals: "口刀邦"
    },
    {
        kanji: "郢",
        radicals: "王口邦"
    },
    {
        kanji: "郤",
        radicals: "口谷ハ邦个"
    },
    {
        kanji: "扈",
        radicals: "戸邦口巴一尸"
    },
    {
        kanji: "郛",
        radicals: "子爪邦"
    },
    {
        kanji: "鄂",
        radicals: "口二邦"
    },
    {
        kanji: "鄒",
        radicals: "邦勹屮艾"
    },
    {
        kanji: "鄙",
        radicals: "口邦囗"
    },
    {
        kanji: "鄲",
        radicals: "｜口十田邦"
    },
    {
        kanji: "鄰",
        radicals: "舛米邦夕"
    },
    {
        kanji: "酊",
        radicals: "酉亅一"
    },
    {
        kanji: "酖",
        radicals: "酉尢冖"
    },
    {
        kanji: "酘",
        radicals: "酉殳几又"
    },
    {
        kanji: "酣",
        radicals: "甘酉"
    },
    {
        kanji: "酥",
        radicals: "禾酉"
    },
    {
        kanji: "酩",
        radicals: "口酉夕"
    },
    {
        kanji: "酳",
        radicals: "月酉幺"
    },
    {
        kanji: "酲",
        radicals: "王口酉"
    },
    {
        kanji: "醋",
        radicals: "｜一酉二日"
    },
    {
        kanji: "醉",
        radicals: "十人酉亠"
    },
    {
        kanji: "醂",
        radicals: "酉木"
    },
    {
        kanji: "醢",
        radicals: "ノ一口皿酉"
    },
    {
        kanji: "醫",
        radicals: "酉矢匚殳几又乞"
    },
    {
        kanji: "醯",
        radicals: "皿川酉亠厶"
    },
    {
        kanji: "醪",
        radicals: "羽酉个冫彡"
    },
    {
        kanji: "醵",
        radicals: "酉卜匕厂虍豕"
    },
    {
        kanji: "醴",
        radicals: "｜一口豆酉日并"
    },
    {
        kanji: "醺",
        radicals: "｜ノ酉杰"
    },
    {
        kanji: "釀",
        radicals: "｜衣一口酉亠"
    },
    {
        kanji: "釁",
        radicals: "臼刀酉ハ冂"
    },
    {
        kanji: "釉",
        radicals: "｜日釆米田"
    },
    {
        kanji: "釋",
        radicals: "十辛買釆米立亠"
    },
    {
        kanji: "釐",
        radicals: "｜二ハ木里厂攵乞"
    },
    {
        kanji: "釖",
        radicals: "金刀"
    },
    {
        kanji: "釟",
        radicals: "金并ハ"
    },
    {
        kanji: "釡",
        radicals: "金并ハ"
    },
    {
        kanji: "釛",
        radicals: "金力"
    },
    {
        kanji: "釼",
        radicals: "金刀丶"
    },
    {
        kanji: "釵",
        radicals: "金又丶"
    },
    {
        kanji: "釶",
        radicals: "也金匕"
    },
    {
        kanji: "鈞",
        radicals: "金冫勹"
    },
    {
        kanji: "釿",
        radicals: "斤金"
    },
    {
        kanji: "鈔",
        radicals: "ノ金小"
    },
    {
        kanji: "鈬",
        radicals: "金尸丶"
    },
    {
        kanji: "鈕",
        radicals: "｜一金"
    },
    {
        kanji: "鈑",
        radicals: "金又厂"
    },
    {
        kanji: "鉞",
        radicals: "｜金戈"
    },
    {
        kanji: "鉗",
        radicals: "甘金"
    },
    {
        kanji: "鉅",
        radicals: "金巨"
    },
    {
        kanji: "鉉",
        radicals: "金玄亠幺"
    },
    {
        kanji: "鉤",
        radicals: "金口勹"
    },
    {
        kanji: "鉈",
        radicals: "金匕宀"
    },
    {
        kanji: "銕",
        radicals: "弓金人大"
    },
    {
        kanji: "鈿",
        radicals: "金田"
    },
    {
        kanji: "鉋",
        radicals: "金勹已"
    },
    {
        kanji: "鉐",
        radicals: "金口石"
    },
    {
        kanji: "銜",
        radicals: "金行彳"
    },
    {
        kanji: "銖",
        radicals: "｜ノ牛金二并木ハ"
    },
    {
        kanji: "銓",
        radicals: "王金个"
    },
    {
        kanji: "銛",
        radicals: "金口舌"
    },
    {
        kanji: "鉚",
        radicals: "ノ金卩"
    },
    {
        kanji: "鋏",
        radicals: "金人大个"
    },
    {
        kanji: "銹",
        radicals: "ノ禾金乃"
    },
    {
        kanji: "銷",
        radicals: "金月尚"
    },
    {
        kanji: "鋩",
        radicals: "亡金艾"
    },
    {
        kanji: "錏",
        radicals: "｜一金二"
    },
    {
        kanji: "鋺",
        radicals: "金夕卩宀"
    },
    {
        kanji: "鍄",
        radicals: "金口小亠"
    },
    {
        kanji: "錮",
        radicals: "金口十囗"
    },
    {
        kanji: "錙",
        radicals: "金巛田"
    },
    {
        kanji: "錢",
        radicals: "金戈"
    },
    {
        kanji: "錚",
        radicals: "ヨ金爪亅"
    },
    {
        kanji: "錣",
        radicals: "金又"
    },
    {
        kanji: "錺",
        radicals: "金方艾"
    },
    {
        kanji: "錵",
        radicals: "化金个匕艾"
    },
    {
        kanji: "錻",
        radicals: "金止戈"
    },
    {
        kanji: "鍜",
        radicals: "｜金又"
    },
    {
        kanji: "鍠",
        radicals: "王金白"
    },
    {
        kanji: "鍼",
        radicals: "ノ金口戈"
    },
    {
        kanji: "鍮",
        radicals: "刈金月个一"
    },
    {
        kanji: "鍖",
        radicals: "甘金儿匚"
    },
    {
        kanji: "鎰",
        radicals: "金皿并ハ"
    },
    {
        kanji: "鎬",
        radicals: "金口高亠冂"
    },
    {
        kanji: "鎭",
        radicals: "金并目匕一｜ハ"
    },
    {
        kanji: "鎔",
        radicals: "金穴口谷并个宀ハ"
    },
    {
        kanji: "鎹",
        radicals: "金込人大二ハ"
    },
    {
        kanji: "鏖",
        radicals: "金鹿比广"
    },
    {
        kanji: "鏗",
        radicals: "金臣土又"
    },
    {
        kanji: "鏨",
        radicals: "斤金車"
    },
    {
        kanji: "鏥",
        radicals: "化金白个宀"
    },
    {
        kanji: "鏘",
        radicals: "金寸夕爿"
    },
    {
        kanji: "鏃",
        radicals: "金方矢乞"
    },
    {
        kanji: "鏝",
        radicals: "金日買又"
    },
    {
        kanji: "鏐",
        radicals: "羽金个冫彡"
    },
    {
        kanji: "鏈",
        radicals: "金込車"
    },
    {
        kanji: "鏤",
        radicals: "｜一金口女"
    },
    {
        kanji: "鐚",
        radicals: "金心二"
    },
    {
        kanji: "鐔",
        radicals: "金十西日曰"
    },
    {
        kanji: "鐓",
        radicals: "金子亠囗攵乞"
    },
    {
        kanji: "鐃",
        radicals: "金土儿"
    },
    {
        kanji: "鐇",
        radicals: "金田釆米"
    },
    {
        kanji: "鐐",
        radicals: "金小大日并亠ハ"
    },
    {
        kanji: "鐶",
        radicals: "衣金口買"
    },
    {
        kanji: "鐫",
        radicals: "金隹"
    },
    {
        kanji: "鐵",
        radicals: "王金口土戈"
    },
    {
        kanji: "鐡",
        radicals: "金口土豆并戈"
    },
    {
        kanji: "鐺",
        radicals: "金口尚田冖"
    },
    {
        kanji: "鑁",
        radicals: "金儿凵夂"
    },
    {
        kanji: "鑒",
        radicals: "金臣二買乞"
    },
    {
        kanji: "鑄",
        radicals: "金口工士寸"
    },
    {
        kanji: "鑛",
        radicals: "黄金田ハ广"
    },
    {
        kanji: "鑠",
        radicals: "金白木冫"
    },
    {
        kanji: "鑢",
        radicals: "金心田卜匕厂虍"
    },
    {
        kanji: "鑞",
        radicals: "臼金巛鼠囗"
    },
    {
        kanji: "鑪",
        radicals: "金皿田卜匕厂虍"
    },
    {
        kanji: "鈩",
        radicals: "金戸一尸"
    },
    {
        kanji: "鑰",
        radicals: "｜一金口个冂冊龠廾"
    },
    {
        kanji: "鑵",
        radicals: "金口十艾隹"
    },
    {
        kanji: "鑷",
        radicals: "金耳"
    },
    {
        kanji: "鑽",
        radicals: "ノ貝目ハ金土儿"
    },
    {
        kanji: "鑚",
        radicals: "貝目ハ金人大二儿亠"
    },
    {
        kanji: "鑼",
        radicals: "金糸幺小買隹"
    },
    {
        kanji: "鑾",
        radicals: "金言糸幺小"
    },
    {
        kanji: "钁",
        radicals: "金又目隹"
    },
    {
        kanji: "鑿",
        radicals: "臼干金并殳几又"
    },
    {
        kanji: "閂",
        radicals: "一門"
    },
    {
        kanji: "閇",
        radicals: "卜門"
    },
    {
        kanji: "閊",
        radicals: "山門"
    },
    {
        kanji: "閔",
        radicals: "文門"
    },
    {
        kanji: "閖",
        radicals: "水門"
    },
    {
        kanji: "閘",
        radicals: "｜日門田"
    },
    {
        kanji: "閙",
        radicals: "巾門亠"
    },
    {
        kanji: "閠",
        radicals: "王門丶"
    },
    {
        kanji: "閨",
        radicals: "土門"
    },
    {
        kanji: "閧",
        radicals: "｜一二ハ門"
    },
    {
        kanji: "閭",
        radicals: "口門ノ"
    },
    {
        kanji: "閼",
        radicals: "方門个冫"
    },
    {
        kanji: "閻",
        radicals: "臼門勹"
    },
    {
        kanji: "閹",
        radicals: "乙大日門奄"
    },
    {
        kanji: "閾",
        radicals: "口門戈"
    },
    {
        kanji: "闊",
        radicals: "口汁舌門"
    },
    {
        kanji: "濶",
        radicals: "口汁舌門"
    },
    {
        kanji: "闃",
        radicals: "犬目門"
    },
    {
        kanji: "闍",
        radicals: "日門老"
    },
    {
        kanji: "闌",
        radicals: "｜日ハ木門"
    },
    {
        kanji: "闕",
        radicals: "欠并門屮"
    },
    {
        kanji: "闔",
        radicals: "皿土門厶"
    },
    {
        kanji: "闖",
        radicals: "馬門杰"
    },
    {
        kanji: "關",
        radicals: "門幺"
    },
    {
        kanji: "闡",
        radicals: "口十田門"
    },
    {
        kanji: "闥",
        radicals: "王込十辛土門羊立亠二"
    },
    {
        kanji: "闢",
        radicals: "口十辛門立尸"
    },
    {
        kanji: "阡",
        radicals: "ノ十阡"
    },
    {
        kanji: "阨",
        radicals: "卩厂阡"
    },
    {
        kanji: "阮",
        radicals: "二儿阡元"
    },
    {
        kanji: "阯",
        radicals: "止阡"
    },
    {
        kanji: "陂",
        radicals: "皮又阡"
    },
    {
        kanji: "陌",
        radicals: "白阡"
    },
    {
        kanji: "陏",
        radicals: "ノ一月阡"
    },
    {
        kanji: "陋",
        radicals: "人冂阡"
    },
    {
        kanji: "陷",
        radicals: "臼阡勹"
    },
    {
        kanji: "陜",
        radicals: "人大阡"
    },
    {
        kanji: "陞",
        radicals: "土廾阡ノ"
    },
    {
        kanji: "陝",
        radicals: "人大入阡"
    },
    {
        kanji: "陟",
        radicals: "ノ止小阡"
    },
    {
        kanji: "陦",
        radicals: "ノ寸二阡土"
    },
    {
        kanji: "陲",
        radicals: "｜ノ一阡"
    },
    {
        kanji: "陬",
        radicals: "耳又阡"
    },
    {
        kanji: "隍",
        radicals: "王白阡"
    },
    {
        kanji: "隘",
        radicals: "皿并阡"
    },
    {
        kanji: "隕",
        radicals: "貝目ハ口阡"
    },
    {
        kanji: "隗",
        radicals: "鬼田儿匕阡厶"
    },
    {
        kanji: "險",
        radicals: "口人个阡一"
    },
    {
        kanji: "隧",
        radicals: "込并豕阡"
    },
    {
        kanji: "隱",
        radicals: "ヨ工心爪阡"
    },
    {
        kanji: "隲",
        radicals: "ノ小馬阡杰"
    },
    {
        kanji: "隰",
        radicals: "日幺杰阡"
    },
    {
        kanji: "隴",
        radicals: "月立阡"
    },
    {
        kanji: "隶",
        radicals: "ヨ水隶"
    },
    {
        kanji: "隸",
        radicals: "ヨ示二小水木亅隶"
    },
    {
        kanji: "隹",
        radicals: "隹"
    },
    {
        kanji: "雎",
        radicals: "目隹"
    },
    {
        kanji: "雋",
        radicals: "亅冂凵隹"
    },
    {
        kanji: "雉",
        radicals: "矢隹乞"
    },
    {
        kanji: "雍",
        radicals: "亠幺隹"
    },
    {
        kanji: "襍",
        radicals: "初木隹"
    },
    {
        kanji: "雜",
        radicals: "人木亠隹"
    },
    {
        kanji: "霍",
        radicals: "雨隹"
    },
    {
        kanji: "雕",
        radicals: "口士冂隹"
    },
    {
        kanji: "雹",
        radicals: "雨勹已"
    },
    {
        kanji: "霄",
        radicals: "雨月尚"
    },
    {
        kanji: "霆",
        radicals: "雨王廴"
    },
    {
        kanji: "霈",
        radicals: "雨巾汁亠"
    },
    {
        kanji: "霓",
        radicals: "雨臼儿"
    },
    {
        kanji: "霎",
        radicals: "雨女立"
    },
    {
        kanji: "霑",
        radicals: "雨口汁卜"
    },
    {
        kanji: "霏",
        radicals: "雨非"
    },
    {
        kanji: "霖",
        radicals: "雨木"
    },
    {
        kanji: "霙",
        radicals: "雨大冂艾冖"
    },
    {
        kanji: "霤",
        radicals: "雨田刀厶"
    },
    {
        kanji: "霪",
        radicals: "雨王汁爪"
    },
    {
        kanji: "霰",
        radicals: "｜一雨月二攵乞"
    },
    {
        kanji: "霹",
        radicals: "雨口十辛立尸"
    },
    {
        kanji: "霽",
        radicals: "雨亠齊刀氏廾"
    },
    {
        kanji: "霾",
        radicals: "雨里豸"
    },
    {
        kanji: "靄",
        radicals: "雨言日勹匕"
    },
    {
        kanji: "靆",
        radicals: "ヨ雨込水二厶隶"
    },
    {
        kanji: "靈",
        radicals: "雨口工人"
    },
    {
        kanji: "靂",
        radicals: "雨止木厂"
    },
    {
        kanji: "靉",
        radicals: "雨心爪二冖厶夂"
    },
    {
        kanji: "靜",
        radicals: "ノヨ月尚青爪土二亅亠"
    },
    {
        kanji: "靠",
        radicals: "ノ口土非"
    },
    {
        kanji: "靤",
        radicals: "面勹已"
    },
    {
        kanji: "靦",
        radicals: "見面"
    },
    {
        kanji: "靨",
        radicals: "犬日面目厂"
    },
    {
        kanji: "勒",
        radicals: "革力"
    },
    {
        kanji: "靫",
        radicals: "革又丶"
    },
    {
        kanji: "靱",
        radicals: "革刀"
    },
    {
        kanji: "靹",
        radicals: "革人冂"
    },
    {
        kanji: "鞅",
        radicals: "革口人大冂凵冖"
    },
    {
        kanji: "靼",
        radicals: "革日一"
    },
    {
        kanji: "鞁",
        radicals: "革皮又"
    },
    {
        kanji: "靺",
        radicals: "｜革口ハ木亠凵"
    },
    {
        kanji: "鞆",
        radicals: "革人冂"
    },
    {
        kanji: "鞋",
        radicals: "革土"
    },
    {
        kanji: "鞏",
        radicals: "革工丶几"
    },
    {
        kanji: "鞐",
        radicals: "革卜"
    },
    {
        kanji: "鞜",
        radicals: "革水日"
    },
    {
        kanji: "鞨",
        radicals: "革日勹匕"
    },
    {
        kanji: "鞦",
        radicals: "火禾革"
    },
    {
        kanji: "鞣",
        radicals: "｜革口矛木凵マ"
    },
    {
        kanji: "鞳",
        radicals: "革口个艾一"
    },
    {
        kanji: "鞴",
        radicals: "革用厂艾"
    },
    {
        kanji: "韃",
        radicals: "王革込土并羊"
    },
    {
        kanji: "韆",
        radicals: "革込西ハ已"
    },
    {
        kanji: "韈",
        radicals: "ノ革買戈艾"
    },
    {
        kanji: "韋",
        radicals: "韋口"
    },
    {
        kanji: "韜",
        radicals: "臼爪韋口"
    },
    {
        kanji: "韭",
        radicals: "韭"
    },
    {
        kanji: "齏",
        radicals: "亠齊韭刀氏廾"
    },
    {
        kanji: "韲",
        radicals: "亠齊韭刀氏廾"
    },
    {
        kanji: "竟",
        radicals: "音日立儿"
    },
    {
        kanji: "韶",
        radicals: "音口刀日立"
    },
    {
        kanji: "韵",
        radicals: "音日立冫勹"
    },
    {
        kanji: "頏",
        radicals: "貝目ハ頁亠儿"
    },
    {
        kanji: "頌",
        radicals: "貝目ハ頁厶"
    },
    {
        kanji: "頸",
        radicals: "貝目ハ工巛頁"
    },
    {
        kanji: "頤",
        radicals: "貝目ハ臣頁匚"
    },
    {
        kanji: "頡",
        radicals: "貝目ハ口士頁"
    },
    {
        kanji: "頷",
        radicals: "貝目ハ口頁个一"
    },
    {
        kanji: "頽",
        radicals: "禾貝目ハ頁几"
    },
    {
        kanji: "顆",
        radicals: "｜貝目ハ田日頁木"
    },
    {
        kanji: "顏",
        radicals: "貝目ハ文頁厂彡"
    },
    {
        kanji: "顋",
        radicals: "貝目ハ心田頁"
    },
    {
        kanji: "顫",
        radicals: "貝目ハ口日頁亠囗一"
    },
    {
        kanji: "顯",
        radicals: "貝目ハ日頁幺杰"
    },
    {
        kanji: "顰",
        radicals: "ノ貝目ハ止十小田頁"
    },
    {
        kanji: "顱",
        radicals: "貝目ハ皿田頁卜匕厂虍"
    },
    {
        kanji: "顴",
        radicals: "貝目ハ口十頁艾隹"
    },
    {
        kanji: "顳",
        radicals: "貝目ハ耳頁"
    },
    {
        kanji: "颪",
        radicals: "風卜虫几一"
    },
    {
        kanji: "颯",
        radicals: "風立虫几"
    },
    {
        kanji: "颱",
        radicals: "口風厶虫几"
    },
    {
        kanji: "颶",
        radicals: "ハ風目虫几"
    },
    {
        kanji: "飄",
        radicals: "示二小西風虫几"
    },
    {
        kanji: "飃",
        radicals: "示二小西風虫几"
    },
    {
        kanji: "飆",
        radicals: "犬風虫几"
    },
    {
        kanji: "飩",
        radicals: "食屯"
    },
    {
        kanji: "飫",
        radicals: "ノ食大"
    },
    {
        kanji: "餃",
        radicals: "食父亠"
    },
    {
        kanji: "餉",
        radicals: "口食冂"
    },
    {
        kanji: "餒",
        radicals: "女食爪"
    },
    {
        kanji: "餔",
        radicals: "十食用丶"
    },
    {
        kanji: "餘",
        radicals: "干食二ハ个亅一"
    },
    {
        kanji: "餡",
        radicals: "臼食"
    },
    {
        kanji: "餝",
        radicals: "食方艾"
    },
    {
        kanji: "餞",
        radicals: "食戈"
    },
    {
        kanji: "餤",
        radicals: "火食"
    },
    {
        kanji: "餠",
        radicals: "｜干食"
    },
    {
        kanji: "餬",
        radicals: "口十食月"
    },
    {
        kanji: "餮",
        radicals: "食个彡歹"
    },
    {
        kanji: "餽",
        radicals: "鬼食田儿匕厶"
    },
    {
        kanji: "餾",
        radicals: "食田卩厶刀"
    },
    {
        kanji: "饂",
        radicals: "皿食日"
    },
    {
        kanji: "饉",
        radicals: "｜一食二艾土口"
    },
    {
        kanji: "饅",
        radicals: "食日買又"
    },
    {
        kanji: "饐",
        radicals: "口士食豆并冖"
    },
    {
        kanji: "饋",
        radicals: "｜一貝目ハ口食"
    },
    {
        kanji: "饑",
        radicals: "食丶幺戈ノ"
    },
    {
        kanji: "饒",
        radicals: "食土儿"
    },
    {
        kanji: "饌",
        radicals: "｜食二ハ已"
    },
    {
        kanji: "饕",
        radicals: "口食卜儿匕厂虍"
    },
    {
        kanji: "馗",
        radicals: "九自首并目"
    },
    {
        kanji: "馘",
        radicals: "口自首并目戈"
    },
    {
        kanji: "馥",
        radicals: "禾香日夂乞"
    },
    {
        kanji: "馭",
        radicals: "馬又杰"
    },
    {
        kanji: "馮",
        radicals: "馬冫杰"
    },
    {
        kanji: "馼",
        radicals: "馬文杰"
    },
    {
        kanji: "駟",
        radicals: "馬儿囗杰"
    },
    {
        kanji: "駛",
        radicals: "ノ口馬杰"
    },
    {
        kanji: "駝",
        radicals: "馬匕宀杰"
    },
    {
        kanji: "駘",
        radicals: "口馬厶杰"
    },
    {
        kanji: "駑",
        radicals: "女馬又杰"
    },
    {
        kanji: "駭",
        radicals: "人馬亠杰ノ丶"
    },
    {
        kanji: "駮",
        radicals: "馬父亠杰"
    },
    {
        kanji: "駱",
        radicals: "口馬夂杰"
    },
    {
        kanji: "駲",
        radicals: "｜ノ川馬丶杰"
    },
    {
        kanji: "駻",
        radicals: "干日馬杰"
    },
    {
        kanji: "駸",
        radicals: "ヨ馬又冖杰"
    },
    {
        kanji: "騁",
        radicals: "｜日馬一勹田杰"
    },
    {
        kanji: "騏",
        radicals: "甘馬ハ杰"
    },
    {
        kanji: "騅",
        radicals: "馬隹杰"
    },
    {
        kanji: "駢",
        radicals: "｜ノ二馬并廾杰一"
    },
    {
        kanji: "騙",
        radicals: "｜一戸馬冂冊尸杰廾"
    },
    {
        kanji: "騫",
        radicals: "｜一馬ハ宀杰"
    },
    {
        kanji: "騷",
        radicals: "虫馬又丶杰"
    },
    {
        kanji: "驅",
        radicals: "口馬匚品杰"
    },
    {
        kanji: "驂",
        radicals: "大馬厶彡杰个"
    },
    {
        kanji: "驀",
        radicals: "大日馬艾杰"
    },
    {
        kanji: "驃",
        radicals: "示二小西馬杰"
    },
    {
        kanji: "騾",
        radicals: "糸幺小田馬杰"
    },
    {
        kanji: "驕",
        radicals: "ノ口大馬冂杰"
    },
    {
        kanji: "驍",
        radicals: "土馬儿杰"
    },
    {
        kanji: "驛",
        radicals: "十辛馬買立亠杰"
    },
    {
        kanji: "驗",
        radicals: "口人馬个杰一"
    },
    {
        kanji: "驟",
        radicals: "衣耳馬又杰"
    },
    {
        kanji: "驢",
        radicals: "皿田馬卜匕厂虍杰"
    },
    {
        kanji: "驥",
        radicals: "｜田二馬ハ匕爿杰"
    },
    {
        kanji: "驤",
        radicals: "｜衣二馬ハ亠杰井"
    },
    {
        kanji: "驩",
        radicals: "口十馬艾隹杰"
    },
    {
        kanji: "驫",
        radicals: "馬杰"
    },
    {
        kanji: "驪",
        radicals: "鹿馬比亠冂广杰"
    },
    {
        kanji: "骭",
        radicals: "干月骨冂冖"
    },
    {
        kanji: "骰",
        radicals: "月骨冂冖殳几又"
    },
    {
        kanji: "骼",
        radicals: "月口骨冂冖夂"
    },
    {
        kanji: "髀",
        radicals: "月骨十田冂冖"
    },
    {
        kanji: "髏",
        radicals: "｜一月口骨女冂冖"
    },
    {
        kanji: "髑",
        radicals: "月骨虫買冂冖勹"
    },
    {
        kanji: "髓",
        radicals: "ノ一月工骨込冂冖"
    },
    {
        kanji: "體",
        radicals: "｜月口骨豆日并冂冖"
    },
    {
        kanji: "髞",
        radicals: "口高木亠冂品"
    },
    {
        kanji: "髟",
        radicals: "長彡髟"
    },
    {
        kanji: "髢",
        radicals: "也長匕彡髟"
    },
    {
        kanji: "髣",
        radicals: "長方彡髟"
    },
    {
        kanji: "髦",
        radicals: "長毛彡髟"
    },
    {
        kanji: "髯",
        radicals: "｜一長冂厶彡髟十"
    },
    {
        kanji: "髫",
        radicals: "口長刀彡髟"
    },
    {
        kanji: "髮",
        radicals: "長彡攵髟又"
    },
    {
        kanji: "髴",
        radicals: "｜ノ弓長彡髟"
    },
    {
        kanji: "髱",
        radicals: "長勹已彡髟"
    },
    {
        kanji: "髷",
        radicals: "｜長日厶彡髟"
    },
    {
        kanji: "髻",
        radicals: "口士長彡髟"
    },
    {
        kanji: "鬆",
        radicals: "長ハ木厶彡髟"
    },
    {
        kanji: "鬘",
        radicals: "長日買又彡髟"
    },
    {
        kanji: "鬚",
        radicals: "貝目ハ長頁彡髟"
    },
    {
        kanji: "鬟",
        radicals: "衣一口長買彡髟"
    },
    {
        kanji: "鬢",
        radicals: "ノ貝目ハ小長宀彡髟"
    },
    {
        kanji: "鬣",
        radicals: "臼鼠長囗彡髟巛"
    },
    {
        kanji: "鬥",
        radicals: "鬥"
    },
    {
        kanji: "鬧",
        radicals: "巾亠鬥"
    },
    {
        kanji: "鬨",
        radicals: "｜二ハ亅鬥"
    },
    {
        kanji: "鬩",
        radicals: "臼儿鬥"
    },
    {
        kanji: "鬪",
        radicals: "口寸豆并鬥"
    },
    {
        kanji: "鬮",
        radicals: "亀鬥乙勹田"
    },
    {
        kanji: "鬯",
        radicals: "凵匕鬯"
    },
    {
        kanji: "鬲",
        radicals: "口儿冂鬲"
    },
    {
        kanji: "魄",
        radicals: "鬼田白儿匕厶"
    },
    {
        kanji: "魃",
        radicals: "鬼田丶儿匕攵厶"
    },
    {
        kanji: "魏",
        radicals: "禾鬼女田儿匕厶"
    },
    {
        kanji: "魍",
        radicals: "亡鬼田并儿冂匕厶"
    },
    {
        kanji: "魎",
        radicals: "｜鬼田入儿冂厶匕"
    },
    {
        kanji: "魑",
        radicals: "鬼田亠儿凵匕禹厶"
    },
    {
        kanji: "魘",
        radicals: "鬼月犬田日儿匕厂厶"
    },
    {
        kanji: "魴",
        radicals: "魚田方杰"
    },
    {
        kanji: "鮓",
        radicals: "｜ノ魚田杰"
    },
    {
        kanji: "鮃",
        radicals: "干魚田并杰"
    },
    {
        kanji: "鮑",
        radicals: "魚田勹已杰"
    },
    {
        kanji: "鮖",
        radicals: "魚口石田杰"
    },
    {
        kanji: "鮗",
        radicals: "魚田冫夂杰"
    },
    {
        kanji: "鮟",
        radicals: "魚女田宀杰"
    },
    {
        kanji: "鮠",
        radicals: "魚田卩厂杰"
    },
    {
        kanji: "鮨",
        radicals: "魚田日匕杰"
    },
    {
        kanji: "鮴",
        radicals: "化魚田木杰"
    },
    {
        kanji: "鯀",
        radicals: "ノ魚糸幺小田杰"
    },
    {
        kanji: "鯊",
        radicals: "ノ魚汁小田杰"
    },
    {
        kanji: "鮹",
        radicals: "魚月尚田杰"
    },
    {
        kanji: "鯆",
        radicals: "魚十田用丶杰"
    },
    {
        kanji: "鯏",
        radicals: "禾刈魚田杰"
    },
    {
        kanji: "鯑",
        radicals: "ノ一魚巾田杰"
    },
    {
        kanji: "鯒",
        radicals: "魚田用杰"
    },
    {
        kanji: "鯣",
        radicals: "ノ魚田日勹杰勿"
    },
    {
        kanji: "鯢",
        radicals: "臼魚田儿杰"
    },
    {
        kanji: "鯤",
        radicals: "魚田日比杰"
    },
    {
        kanji: "鯔",
        radicals: "魚巛田杰"
    },
    {
        kanji: "鯡",
        radicals: "魚田非杰"
    },
    {
        kanji: "鰺",
        radicals: "魚田个厶彡杰"
    },
    {
        kanji: "鯲",
        radicals: "魚田方个冫杰"
    },
    {
        kanji: "鯱",
        radicals: "魚田卜儿匕厂杰虍"
    },
    {
        kanji: "鯰",
        radicals: "魚心田个杰一"
    },
    {
        kanji: "鰕",
        radicals: "｜魚口田又杰"
    },
    {
        kanji: "鰔",
        radicals: "ノ魚口田戈杰"
    },
    {
        kanji: "鰉",
        radicals: "王魚田白杰"
    },
    {
        kanji: "鰓",
        radicals: "魚心田杰"
    },
    {
        kanji: "鰌",
        radicals: "魚田酉ハ杰"
    },
    {
        kanji: "鰆",
        radicals: "魚人大田二日杰"
    },
    {
        kanji: "鰈",
        radicals: "魚田木世杰"
    },
    {
        kanji: "鰒",
        radicals: "魚田日夂杰乞"
    },
    {
        kanji: "鰊",
        radicals: "｜魚口田買并木杰"
    },
    {
        kanji: "鰄",
        radicals: "ノ魚女田戈杰"
    },
    {
        kanji: "鰮",
        radicals: "魚皿人田囗杰"
    },
    {
        kanji: "鰛",
        radicals: "魚皿田日杰"
    },
    {
        kanji: "鰥",
        radicals: "｜魚田買冫杰"
    },
    {
        kanji: "鰤",
        radicals: "｜魚巾口田冂杰"
    },
    {
        kanji: "鰡",
        radicals: "魚田刀厶杰"
    },
    {
        kanji: "鰰",
        radicals: "｜魚田礼杰"
    },
    {
        kanji: "鱇",
        radicals: "ヨ魚水田广杰隶"
    },
    {
        kanji: "鰲",
        radicals: "魚田土方攵杰亠二乞"
    },
    {
        kanji: "鱆",
        radicals: "音魚十田日立杰"
    },
    {
        kanji: "鰾",
        radicals: "魚示二小西田杰"
    },
    {
        kanji: "鱚",
        radicals: "魚口士十田豆并杰"
    },
    {
        kanji: "鱠",
        radicals: "魚田日買个杰一"
    },
    {
        kanji: "鱧",
        radicals: "｜魚田豆日杰"
    },
    {
        kanji: "鱶",
        radicals: "王魚艮食田并羊杰"
    },
    {
        kanji: "鱸",
        radicals: "魚皿田卜匕厂杰虍"
    },
    {
        kanji: "鳧",
        radicals: "鳥几杰"
    },
    {
        kanji: "鳬",
        radicals: "鳥几"
    },
    {
        kanji: "鳰",
        radicals: "鳥入杰"
    },
    {
        kanji: "鴉",
        radicals: "牙鳥杰"
    },
    {
        kanji: "鴈",
        radicals: "化鳥厂杰"
    },
    {
        kanji: "鳫",
        radicals: "鳥厂杰"
    },
    {
        kanji: "鴃",
        radicals: "人大鳥二杰ユ"
    },
    {
        kanji: "鴆",
        radicals: "鳥尢杰冖"
    },
    {
        kanji: "鴪",
        radicals: "穴鳥ハ宀杰儿"
    },
    {
        kanji: "鴦",
        radicals: "大鳥杰冖"
    },
    {
        kanji: "鶯",
        radicals: "火鳥冖杰"
    },
    {
        kanji: "鴣",
        radicals: "口十鳥杰"
    },
    {
        kanji: "鴟",
        radicals: "氏鳥杰"
    },
    {
        kanji: "鵄",
        radicals: "至鳥土厶杰"
    },
    {
        kanji: "鴕",
        radicals: "鳥匕宀杰"
    },
    {
        kanji: "鴒",
        radicals: "鳥个卩杰一"
    },
    {
        kanji: "鵁",
        radicals: "鳥父亠杰"
    },
    {
        kanji: "鴿",
        radicals: "口鳥个杰一"
    },
    {
        kanji: "鴾",
        radicals: "牛鳥厶杰"
    },
    {
        kanji: "鵆",
        radicals: "行鳥彳杰"
    },
    {
        kanji: "鵈",
        radicals: "耳鳥杰"
    },
    {
        kanji: "鵝",
        radicals: "鳥亅戈杰"
    },
    {
        kanji: "鵞",
        radicals: "鳥亅戈杰"
    },
    {
        kanji: "鵤",
        radicals: "角鳥杰"
    },
    {
        kanji: "鵑",
        radicals: "月口鳥杰"
    },
    {
        kanji: "鵐",
        radicals: "工人鳥杰"
    },
    {
        kanji: "鵙",
        radicals: "貝目ハ鳥杰"
    },
    {
        kanji: "鵲",
        radicals: "｜一鳥日杰"
    },
    {
        kanji: "鶉",
        radicals: "口子鳥亠杰"
    },
    {
        kanji: "鶇",
        radicals: "｜鳥日ハ木杰田"
    },
    {
        kanji: "鶫",
        radicals: "｜口鳥買并木杰"
    },
    {
        kanji: "鵯",
        radicals: "十鳥田杰"
    },
    {
        kanji: "鵺",
        radicals: "鳥亠杰化夕"
    },
    {
        kanji: "鶚",
        radicals: "口鳥二杰勹"
    },
    {
        kanji: "鶤",
        radicals: "車鳥冖杰"
    },
    {
        kanji: "鶩",
        radicals: "鳥矛攵杰乞"
    },
    {
        kanji: "鶲",
        radicals: "羽鳥ハ冫厶杰"
    },
    {
        kanji: "鷄",
        radicals: "大鳥爪幺杰"
    },
    {
        kanji: "鷁",
        radicals: "皿鳥并杰"
    },
    {
        kanji: "鶻",
        radicals: "月骨鳥冂冖杰"
    },
    {
        kanji: "鶸",
        radicals: "弓鳥冫杰"
    },
    {
        kanji: "鶺",
        radicals: "月人鳥杰二亠大"
    },
    {
        kanji: "鷆",
        radicals: "鳥ハ目匕杰"
    },
    {
        kanji: "鷏",
        radicals: "十鳥ハ目杰"
    },
    {
        kanji: "鷂",
        radicals: "缶鳥夕凵杰"
    },
    {
        kanji: "鷙",
        radicals: "九十辛鳥立丶亠杰"
    },
    {
        kanji: "鷓",
        radicals: "一鳥凵广杰"
    },
    {
        kanji: "鷸",
        radicals: "口鳥矛儿冂杰"
    },
    {
        kanji: "鷦",
        radicals: "鳥杰隹"
    },
    {
        kanji: "鷭",
        radicals: "鳥田釆米杰"
    },
    {
        kanji: "鷯",
        radicals: "小鳥日并大亠杰"
    },
    {
        kanji: "鷽",
        radicals: "臼鳥冖杰爻"
    },
    {
        kanji: "鸚",
        radicals: "貝目ハ女鳥杰"
    },
    {
        kanji: "鸛",
        radicals: "口鳥杰艾隹"
    },
    {
        kanji: "鸞",
        radicals: "言糸幺小鳥杰"
    },
    {
        kanji: "鹵",
        radicals: "十囗鹵"
    },
    {
        kanji: "鹹",
        radicals: "ノ口卜囗戈鹵十"
    },
    {
        kanji: "鹽",
        radicals: "皿十臣囗鹵乞"
    },
    {
        kanji: "麁",
        radicals: "鹿比广勹"
    },
    {
        kanji: "麈",
        radicals: "王鹿比丶广"
    },
    {
        kanji: "麋",
        radicals: "鹿比米广"
    },
    {
        kanji: "麌",
        radicals: "口鹿ハ比广大"
    },
    {
        kanji: "麒",
        radicals: "甘鹿ハ比广"
    },
    {
        kanji: "麕",
        radicals: "禾鹿比囗广"
    },
    {
        kanji: "麑",
        radicals: "臼鹿比儿广"
    },
    {
        kanji: "麝",
        radicals: "鹿身寸比广"
    },
    {
        kanji: "麥",
        radicals: "人十夂"
    },
    {
        kanji: "麩",
        radicals: "人二十夂大亠"
    },
    {
        kanji: "麸",
        radicals: "人土二麦亠夂大"
    },
    {
        kanji: "麪",
        radicals: "止人十疋夂"
    },
    {
        kanji: "麭",
        radicals: "人十勹夂已"
    },
    {
        kanji: "靡",
        radicals: "非麻木广"
    },
    {
        kanji: "黌",
        radicals: "臼黄田ハ冖爻"
    },
    {
        kanji: "黎",
        radicals: "黍勿禾水"
    },
    {
        kanji: "黏",
        radicals: "黍口卜禾水"
    },
    {
        kanji: "黐",
        radicals: "黍亠凵禹禾水"
    },
    {
        kanji: "黔",
        radicals: "黒里个杰一"
    },
    {
        kanji: "黜",
        radicals: "｜黒山里杰"
    },
    {
        kanji: "點",
        radicals: "口黒卜里杰"
    },
    {
        kanji: "黝",
        radicals: "黒里力幺杰"
    },
    {
        kanji: "黠",
        radicals: "口黒士里杰"
    },
    {
        kanji: "黥",
        radicals: "口黒小里亠杰"
    },
    {
        kanji: "黨",
        radicals: "口黒尚里冖杰"
    },
    {
        kanji: "黯",
        radicals: "音黒日里立杰"
    },
    {
        kanji: "黴",
        radicals: "黒山里彳攵杰乞"
    },
    {
        kanji: "黶",
        radicals: "犬黒日里厂杰"
    },
    {
        kanji: "黷",
        radicals: "貝目ハ黒士里儿囗杰買"
    },
    {
        kanji: "黹",
        radicals: "ハ冂黹并"
    },
    {
        kanji: "黻",
        radicals: "ハ丶冂黹并ノ一"
    },
    {
        kanji: "黼",
        radicals: "十ハ用丶冂黹并"
    },
    {
        kanji: "黽",
        radicals: "黽"
    },
    {
        kanji: "鼇",
        radicals: "土方攵黽亠二乞"
    },
    {
        kanji: "鼈",
        radicals: "小尚冂攵黽乞"
    },
    {
        kanji: "皷",
        radicals: "鼓口士并皮十又支豆"
    },
    {
        kanji: "鼕",
        radicals: "鼓口士支ハ冫夂又十豆丶"
    },
    {
        kanji: "鼡",
        radicals: "用尚"
    },
    {
        kanji: "鼬",
        radicals: "｜臼鼠日田"
    },
    {
        kanji: "鼾",
        radicals: "干自田鼻目廾"
    },
    {
        kanji: "齊",
        radicals: "齊亠刀氏廾"
    },
    {
        kanji: "齒",
        radicals: "止歯人凵米"
    },
    {
        kanji: "齔",
        radicals: "止歯米凵匕"
    },
    {
        kanji: "齣",
        radicals: "口止歯米凵勹"
    },
    {
        kanji: "齟",
        radicals: "止歯米目凵"
    },
    {
        kanji: "齠",
        radicals: "口止歯刀米凵"
    },
    {
        kanji: "齡",
        radicals: "止歯人个凵卩米一"
    },
    {
        kanji: "齦",
        radicals: "艮止歯米凵"
    },
    {
        kanji: "齧",
        radicals: "止歯土刀米亠凵二"
    },
    {
        kanji: "齬",
        radicals: "口止歯米凵五"
    },
    {
        kanji: "齪",
        radicals: "口止歯足米凵"
    },
    {
        kanji: "齷",
        radicals: "止至歯土米凵厶尸"
    },
    {
        kanji: "齲",
        radicals: "ノ止歯虫米冂凵禹"
    },
    {
        kanji: "齶",
        radicals: "口止歯二米凵勹"
    },
    {
        kanji: "龕",
        radicals: "月口立个一"
    },
    {
        kanji: "龜",
        radicals: "亀乙勹田"
    },
    {
        kanji: "龠",
        radicals: "一口个龠冊廾"
    },
    {
        kanji: "堯",
        radicals: "土儿一"
    },
    {
        kanji: "槇",
        radicals: "木貝目ハ｜一"
    },
    {
        kanji: "遙",
        radicals: "込夕丶缶"
    },
    {
        kanji: "瑤",
        radicals: "王夕丶缶"
    },
    {
        kanji: "凜",
        radicals: "冫亠禾口"
    },
    {
        kanji: "熙",
        radicals: "杰已匚口"
    }
]

function getKRAD(kanji) {
    const val = kanjiRadical.find(entry => entry.kanji === kanji);
    return val ? val.radicals : '';
}

export {getKRAD};