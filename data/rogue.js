let rogueData = {};

rogueData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Agility" ],
		requiredPoints: 2,
		x: -1198.861,
		y: 607.225
	},
	"Agility": {
		connections: [ "Subterfuge" ],
		requiredPoints: 6,
		x: 503.82,
		y: 1513.225
	},
	"Subterfuge": {
		connections: [ "Imbuements" ],
		requiredPoints: 11,
		x: -1196.535,
		y: 2437.774
	},
	"Imbuements": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 513.93,
		y: 3341.84
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1204.781,
		y: 4246.85
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -6.259,
		y: 4859.065
	},
};

rogueData["Basic"] = {
	"Blade Shift": {
		connections: [ "Enhanced Blade Shift", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: 35% (per hit)
Quickly stab your victim for {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% damage and shift, allowing you to move freely through enemies for 3 seconds.

Tags: Basic, Cutthroat, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Gleitklinge",
			"esES": "Traslación eviscerante",
			"esMX": "Desplazamiento con Cuchillas",
			"frFR": "Passage des lames",
			"itIT": "Guizzo di Lama",
			"jaJP": "ブレード・シフト",
			"koKR": "칼날 차원 이동",
			"plPL": "Taniec Ostrzy",
			"ptBR": "Lâmina Ágil",
			"ruRU": "Блуждающий клинок",
			"zhCN": "锋刃闪转",
			"zhTW": "移行之刃"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: 35% (per hit)\nStecht schnell auf Euer Ziel ein, fügt ihm {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% Schaden zu und gleitet, wodurch Ihr Euch 3 Sek. lang frei durch Gegner bewegen könnt.\n\nTags: Basis, Meucheln, Schaden, Physisch.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: 35% (per hit)\nApuñalas rápidamente a tu víctima para infligir {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de daño y trasladarte, lo que te permite atravesar libremente a los enemigos durante 3 s.\n\nTags: Básica, Degollación, Daño, Física.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: 35% (per hit)\nApuñalas rápidamente a tu víctima, le infliges {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de daño y desapareces, lo que te permite desplazarte libremente a través de los enemigos durante 3 segundos.\n\nTags: Básica, Degollador, Daño, Física.",
			"frFR": "Points de combo générés: 1\nChances d'obtenir un coup de chance: 35% (per hit)\nVous poignardez rapidement votre victime en lui infligeant {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% points de dégâts et vous déphasez, ce qui vous permet de vous mouvoir librement parmi les adversaires pendant 3 s.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: 35% (per hit)\nAccoltelli rapidamente la vittima, infliggendo {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% danni e ti sposti più velocemente tra i nemici per 3 s.\n\nTags: Base, Sgozzamento, Danni, Fisico.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: 35% (per hit)\n素早く敵を刺し、{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%のダメージを与えた上で身のこなしを切り替え、3秒間にわたって敵をすり抜けて移動できるようになる。\n\nTags: 基本, 喉かき, ダメージ, 物理.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: 35% (per hit)\n적을 빠르게 찔러 {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%의 피해를 주고, 차원 이동을 하여 3초 동안 적을 자유롭게 통과합니다.\n\nTags: 기본, 암살, 피해, 물리.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: 35% (per hit)\nSzybko przebijasz ofiarę ostrzem i zadajesz jej {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% pkt. obrażeń, a następnie przemieniasz się, aby przenikać przez wrogów przez 3 sek.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: 35% (per hit)\nApunhala rapidamente a vítima, causando {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% de dano e deslocando-se, permitindo que você se mova livremente através de inimigos por 3 segundos.\n\nTags: Básica, Degola, Dano, Física.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: 35% (per hit)\nВы стремительно пронзаете цель, нанося {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% ед. урона, и переходите в другое измерение, получая возможность проходить сквозь врагов в течение 3 сек.\n\nTags: Базовое, Головорез, Урон, Физический урон.",
			"zhCN": "生成连击点数: 1\n幸运一击几率: 35% (per hit)\n快速刺击你的受害者, 造成 {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% 点伤害并闪转腾挪, 使你可以自由地穿过敌人, 持续 3 秒。\n\nTags: 基础, 刺杀, 伤害, 物理.",
			"zhTW": "產生連擊點數:1\n幸運觸發機率: 35% (per hit)\n快刀捅進被害者,造成 {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% 點傷害並移行,讓你可以自由穿越敵人,持續 3 秒。\n\nTags: 基本, 割喉, 傷害, 物理."
},
		id: 0,
		maxPoints: 5,
		x: -1.473,
		y: -323.735
	},
	"Enhanced Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Fundamental Blade Shift", "Blade Shift", "Primary Blade Shift" ],
		description: `Damaging an enemy with Blade Shift grants +5% Movement Speed while Blade Shift is active, up to +20%.

Tags: Basic, Cutthroat, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserte Gleitklinge",
			"esES": "Traslación eviscerante mejorada",
			"esMX": "Desplazamiento con Cuchillas Potenciado",
			"frFR": "Passage des lames renforcé",
			"itIT": "Guizzo di Lama Rinforzato",
			"jaJP": "ブレード・シフト(強化版)",
			"koKR": "강화된 칼날 차원 이동",
			"plPL": "Wzmocniony Taniec Ostrzy",
			"ptBR": "Lâmina Ágil Aperfeiçoada",
			"ruRU": "Усиленный блуждающий клинок",
			"zhCN": "强化锋刃闪转",
			"zhTW": "強化移行之刃"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner mit Gleitklinge Schaden zufügt, erhaltet Ihr +5% Bewegungsgeschwindigkeit, während Gleitklinge aktiv ist, bis maximal +20%.\n\nTags: Basis, Meucheln, Schaden, Physisch.",
			"esES": "Infligir daño a un enemigo con Traslación eviscerante otorga un +5% de velocidad de movimiento mientras dura Traslación eviscerante, hasta un máximo de un +20%.\n\nTags: Básica, Degollación, Daño, Física.",
			"esMX": "Infligir daño a un enemigo con Desplazamiento con Cuchillas te otorga un +5% más de velocidad de movimiento mientras Desplazamiento con Cuchillas está activa, hasta un +20%.\n\nTags: Básica, Degollador, Daño, Física.",
			"frFR": "Infliger des dégâts à une cible avec Passage des lames augmente votre vitesse de déplacement de +5% tant que Passage des lames est actif, jusqu'à un maximum de +20%.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques.",
			"itIT": "Danneggiare un nemico con Guizzo di Lama conferisce una velocità di movimento del +5% mentre Guizzo di Lama è attivo, fino a un massimo del +20%.\n\nTags: Base, Sgozzamento, Danni, Fisico.",
			"jaJP": "〈ブレード・シフト〉で敵1体にダメージを与えると、〈ブレード・シフト〉発動中の移動速度が+5%増加する。効果は最大で+20%。\n\nTags: 基本, 喉かき, ダメージ, 物理.",
			"koKR": "칼날 차원 이동으로 적에게 피해를 주면 칼날 차원 이동이 활성화되어 있는 동안 이동 속도가 +5%만큼, 최대 +20%까지 증가합니다.\n\nTags: 기본, 암살, 피해, 물리.",
			"plPL": "Zranienie wroga przy użyciu Tańca Ostrzy zapewnia ci premię +5% do szybkości ruchu, kiedy Taniec Ostrzy jest aktywny, maksymalnie do +20%.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne.",
			"ptBR": "Causar dano a um inimigo com Lâmina Ágil concede +5% de velocidade de movimento enquanto Lâmina Ágil está ativa, até +20%.\n\nTags: Básica, Degola, Dano, Física.",
			"ruRU": "Когда \"Блуждающий клинок\" наносит противнику урон, ваша скорость передвижения повышается на +5% на время действия умения, вплоть до +20%.\n\nTags: Базовое, Головорез, Урон, Физический урон.",
			"zhCN": "锋刃闪转激活时, 使用锋刃闪转对一名敌人造成伤害会使移动速度提高 +5%, 最多提高 +20%。\n\nTags: 基础, 刺杀, 伤害, 物理.",
			"zhTW": "以移行之刃對敵人造成傷害,會在移行之刃作用期間使你的移動速度提高 +5%,最多提高 +20%。\n\nTags: 基本, 割喉, 傷害, 物理."
},
		id: 1,
		maxPoints: 1,
		x: 3.694,
		y: -527.345
	},
	"Fundamental Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `Moving through enemies while Blade Shift is active refreshes its duration. After moving through enemies 5 times, your next Blade Shift will Daze enemies for 2 seconds.

Tags: Basic, Cutthroat, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentale Gleitklinge",
			"esES": "Traslación eviscerante fundamental",
			"esMX": "Desplazamiento con Cuchillas Fundamental",
			"frFR": "Passage des lames fondamental",
			"itIT": "Guizzo di Lama Fondamentale",
			"jaJP": "ブレード・シフト(本格)",
			"koKR": "근본적인 칼날 차원 이동",
			"plPL": "Fundamentalny Taniec Ostrzy",
			"ptBR": "Lâmina Ágil Fundamental",
			"ruRU": "Фундаментальный блуждающий клинок",
			"zhCN": "基础锋刃闪转",
			"zhTW": "基要移行之刃"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Euch durch Gegner hindurchbewegt, während Gleitklinge aktiv ist, wird ihre Dauer aktualisiert. Wenn Ihr Euch 5-mal durch Gegner hindurchbewegt habt, wird Eure nächste Gleitklinge Gegner 2 Sek. lang benommen machen.\n\nTags: Basis, Meucheln, Schaden, Physisch.",
			"esES": "Al atravesar a los enemigos mientras dura Traslación eviscerante, se renueva su duración. Tras atravesar a los enemigos 5 veces, tu siguiente Traslación eviscerante los atontará durante 2 s.\n\nTags: Básica, Degollación, Daño, Física.",
			"esMX": "Desplazarte a través de los enemigos mientras Desplazamiento con Cuchillas está activa renueva su duración. Tras desplazarte a través de enemigos 5 veces, tu siguiente Desplazamiento con Cuchillas atontará a los enemigos durante 2 segundos.\n\nTags: Básica, Degollador, Daño, Física.",
			"frFR": "Lorsque vous traversez des adversaires pendant que Passage des lames est actif, sa durée se réinitialise. Après avoir traversé 5 adversaires, votre prochain Passage des lames hébète les adversaires pendant 2 s.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques.",
			"itIT": "Attraversare i nemici mentre Guizzo di Lama è attivo ne ripristina la durata. Dopo aver attraversato i nemici per 5 volte, il tuo prossimo Guizzo di Lama infliggerà Frastornamento ai nemici per 2 s.\n\nTags: Base, Sgozzamento, Danni, Fisico.",
			"jaJP": "〈ブレード・シフト〉の発動中に敵の中をすり抜けると持続時間がリセットされる。敵を5回すり抜けると、次に使用する〈ブレード・シフト〉は、敵を2秒間にわたって朦朧状態にする。\n\nTags: 基本, 喉かき, ダメージ, 物理.",
			"koKR": "칼날 차원 이동이 활성화되어 있는 동안 적을 통과하면 지속시간이 초기화됩니다. 적을 5번 통과하면 다음 칼날 차원 이동이 적을 2초 동안 멍하게 만듭니다.\n\nTags: 기본, 암살, 피해, 물리.",
			"plPL": "Przenikanie przez wrogów, kiedy Taniec Ostrzy jest aktywny, odświeża czas jego działania. Po przeniknięciu wrogów 5 razy twój następny Taniec Ostrzy oszałamia wrogów na 2 sek.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne.",
			"ptBR": "Mover-se através de inimigos enquanto Lâmina Ágil está ativa atualiza sua duração. Depois de se mover através de inimigos 5 vezes, sua próxima Lâmina Ágil aplicará torpor nos inimigos por 2 segundos.\n\nTags: Básica, Degola, Dano, Física.",
			"ruRU": "Когда вы проходите сквозь противников во время действия \"Блуждающего клинка\" время действия умения обновляется. Когда вы проходите сквозь противников 5 раза:раз, следующий \"Блуждающий клинок\" вызывает у противников головокружение на 2 сек.\n\nTags: Базовое, Головорез, Урон, Физический урон.",
			"zhCN": "锋刃闪转激活期间穿过敌人会刷新其持续时间。穿过敌人 5 次后, 你的下一次锋刃闪转会眩晕敌人 2 秒。\n\nTags: 基础, 刺杀, 伤害, 物理.",
			"zhTW": "在移行之刃效果期間穿過敵人可重置其持續時間。穿過敵人 5 次後,你的下一個移行之刃會使敵人暈眩,持續 2 秒。\n\nTags: 基本, 割喉, 傷害, 物理."
},
		id: 2,
		maxPoints: 1,
		x: 154.361,
		y: -636.79
	},
	"Primary Blade Shift": {
		baseSkill: "Blade Shift",
		connections: [ "Enhanced Blade Shift" ],
		description: `While Blade Shift is active you gain 15% to all Non-Physical Resistances and reduce the duration of incoming Control Impairing Effects by 20%.

Tags: Basic, Cutthroat, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primäre Gleitklinge",
			"esES": "Contador de Traslación eviscerante primaria",
			"esMX": "Desplazamiento con Cuchillas Primario",
			"frFR": "Passage des lames primaire",
			"itIT": "Guizzo di Lama Primario",
			"jaJP": "ブレード・シフト(極上)",
			"koKR": "주요한 칼날 차원 이동",
			"plPL": "Podstawowy Taniec Ostrzy",
			"ptBR": "Lâmina Ágil Primária",
			"ruRU": "Основной блуждающий клинок",
			"zhCN": "主要锋刃闪转",
			"zhTW": "首要移行之刃"
},
		descriptionLocalized: {
			"deDE": "Während Gleitklinge aktiv ist, werden all Eure nichtphysischen Widerstände um 15% erhöht und die Dauer von eingehenden Kontrollverlusteffekten um 20% reduziert.\n\nTags: Basis, Meucheln, Schaden, Physisch.",
			"esES": "Mientras dura Traslación eviscerante, aumentan un 15% todas tus resistencias no físicas y se reduce un 20% la duración de los efectos de pérdida de control dirigidos hacia ti.\n\nTags: Básica, Degollación, Daño, Física.",
			"esMX": "Mientras Desplazamiento con Cuchillas está activa, obtienes un 15% de todas las resistencias no físicas y reduces la duración de los efectos que causan pérdida de control un 20%.\n\nTags: Básica, Degollador, Daño, Física.",
			"frFR": "Tant que Passage des lames est actif, toutes vos résistances non physiques sont augmentées de 15% et la durée des effets affectant le contrôle est réduite de 20%.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques.",
			"itIT": "Mentre Guizzo di Lama è attivo ottieni il 15% a tutte le resistenze non fisiche e la durata degli effetti debilitanti subiti in seguito si riduce del 20%.\n\nTags: Base, Sgozzamento, Danni, Fisico.",
			"jaJP": "〈ブレード・シフト〉中はすべての非物理攻撃耐性が15%増加し、受けた操作障害効果の持続時間を20%短縮する。\n\nTags: 基本, 喉かき, ダメージ, 物理.",
			"koKR": "칼날 차원 이동이 활성화된 상태에서 모든 비물리 저항이 15% 증가하고, 받는 제어 방해 효과의 지속시간이 20% 감소합니다.\n\nTags: 기본, 암살, 피해, 물리.",
			"plPL": "Kiedy Taniec Ostrzy jest aktywny, zyskujesz premię 15% do wszystkich odporności niefizycznych i skracasz czas działania ograniczenia kontroli o 20%.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne.",
			"ptBR": "Enquanto Lâmina Ágil está ativa, você recebe 15% para todas as resistências a dano não físico e reduz a duração de efeitos de controle recebidos em 20%.\n\nTags: Básica, Degola, Dano, Física.",
			"ruRU": "Пока действует \"Блуждающий клинок\", сопротивление всем видам нефизического урона повышается на 15%, а время действия применяемых к вам эффектов контроля сокращается на 20%.\n\nTags: Базовое, Головорез, Урон, Физический урон.",
			"zhCN": "锋刃闪转激活时, 你的所有非物理抗性提高 15%, 并使所有受到的控制类限制效果的持续时间缩短 20%。\n\nTags: 基础, 刺杀, 伤害, 物理.",
			"zhTW": "當移行之刃啟動時,你會獲得 15% 所有非物理抗性,並使所受到的控場效果持續時間降低 20%。\n\nTags: 基本, 割喉, 傷害, 物理."
},
		id: 3,
		maxPoints: 1,
		x: -170.121,
		y: -634.25
	},
	"Invigorating Strike": {
		connections: [ "Enhanced Invigorating Strike", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: 50% (per hit)
Melee attack an enemy, dealing {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% damage and increasing Energy Regeneration by x20% for 3 seconds.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Belebender Schlag",
			"esES": "Golpe vigorizador",
			"esMX": "Golpe Vigorizante",
			"frFR": "Frappe revigorante",
			"itIT": "Assalto Rinvigorente",
			"jaJP": "活性の一撃",
			"koKR": "원기의 일격",
			"plPL": "Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante",
			"ruRU": "Живительный удар",
			"zhCN": "振奋打击",
			"zhTW": "振奮之擊"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: 50% (per hit)\nGreift einen Gegner im Nahkampf an, verursacht {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% Schaden und erhöht die Energieregeneration 3 Sek. lang um x20%.\n\nTags: Basis, Meucheln, Schaden, Physisch, Energie.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: 50% (per hit)\nEjecutas un ataque cuerpo a cuerpo contra un enemigo para infligir {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de daño y aumentar un x20% tu regeneración de energía durante 3 s.\n\nTags: Básica, Degollación, Daño, Física, Energía.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: 50% (per hit)\nAsestas un ataque de melé a un enemigo, le infliges {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de daño y aumentas la regeneración de Energía un x20% durante 3 segundos.\n\nTags: Básica, Degollador, Daño, Física, Energía.",
			"frFR": "Points de combo générés: 1\nChances d'obtenir un coup de chance: 50% (per hit)\nVous attaquez une cible en mêlée, ce qui lui inflige {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% points de dégâts et augmente votre régénération d'énergie de x20% pendant 3 s.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: 50% (per hit)\nAttacca un nemico in mischia, infliggendo {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% danni e aumentando la rigenerazione di energia del x20% per 3 s.\n\nTags: Base, Sgozzamento, Danni, Fisico, Energia.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: 50% (per hit)\n敵に近接攻撃を行い、{23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%のダメージを与える。さらにエネルギー回復量が3秒間にわたりx20%増加する。\n\nTags: 基本, 喉かき, ダメージ, 物理, エネルギー.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: 50% (per hit)\n적을 근접 공격하여 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%의 피해를 주고 3초 동안 기력 재생이 x20% 증가합니다.\n\nTags: 기본, 암살, 피해, 물리, 기력.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: 50% (per hit)\nAtakujesz wroga wręcz, zadając {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% pkt. obrażeń i zwiększając regenerację energii o x20% przez 3 sek.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: 50% (per hit)\nAtaca um inimigo em corpo a corpo, causando {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de dano e aumentando a regeneração de energia em 20% por 3 segundos.\n\nTags: Básica, Degola, Dano, Física, Energia.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: 50% (per hit)\nВы атакуете противника в ближнем бою, нанося {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% ед. урона. При этом ваша скорость восстановления энергии увеличивается на x20% на 3 сек.\n\nTags: Базовое, Головорез, Урон, Физический урон, Энергия.",
			"zhCN": "生成连击点数: 1\n幸运一击几率: 50% (per hit)\n近战攻击一名敌人时造成 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% 点伤害, 并且使能量回复速度提高 x20%, 持续 3 秒。\n\nTags: 基础, 刺杀, 伤害, 物理, 能量.",
			"zhTW": "產生連擊點數:1\n幸運觸發機率: 50% (per hit)\n對敵人施展近戰攻擊,造成 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% 點傷害,並使能量恢復提高 x20%,持續 3 秒。\n\nTags: 基本, 割喉, 傷害, 物理, 能量."
},
		id: 4,
		maxPoints: 5,
		x: -393.363,
		y: -211.415
	},
	"Enhanced Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Invigorating Strike", "Primary Invigorating Strike", "Fundamental Invigorating Strike" ],
		description: `Damaging a Crowd Controlled or Injured enemy with Invigorating Strike increases its Energy Regeneration bonus to x30%.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserter Belebender Schlag",
			"esES": "Golpe vigorizador mejorado",
			"esMX": "Golpe Vigorizante Potenciado",
			"frFR": "Frappe revigorante renforcée",
			"itIT": "Assalto Rinvigorente Rinforzato",
			"jaJP": "活性の一撃(強化版)",
			"koKR": "강화된 원기의 일격",
			"plPL": "Wzmocnione Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante Aperfeiçoado",
			"ruRU": "Усиленный живительный удар",
			"zhCN": "强化振奋打击",
			"zhTW": "強化振奮之擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner, der unter Kontrollverlusteffekten leidet oder verwundet ist, mit Belebender Schlag Schaden zufügt, erhöht sich der Bonus auf Energieregeneration auf x30%.\n\nTags: Basis, Meucheln, Schaden, Physisch, Energie.",
			"esES": "Infligir daño a un enemigo afectado por control de masas o herido con Golpe vigorizador aumenta un x30% su bonus de regeneración de energía.\n\nTags: Básica, Degollación, Daño, Física, Energía.",
			"esMX": "Al infligir daño a un enemigo bajo los efectos de control de multitudes o herido con Golpe Vigorizante, aumentas su bonificación de regeneración de Energía al x30%.\n\nTags: Básica, Degollador, Daño, Física, Energía.",
			"frFR": "Infliger des dégâts à une cible blessée ou subissant un effet de perte de contrôle avec Frappe revigorante augmente son bonus de régénération d'énergie de x30%.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Infliggere danni a un nemico ferito o sotto effetti debilitanti con Assalto Rinvigorente aumenta al x30% il suo bonus di rigenerazione di energia.\n\nTags: Base, Sgozzamento, Danni, Fisico, Energia.",
			"jaJP": "操作障害または負傷効果を受けた敵に〈活性の一撃〉でダメージを与えると、エネルギー回復ボーナスがx30%に増加する。\n\nTags: 基本, 喉かき, ダメージ, 物理, エネルギー.",
			"koKR": "원기의 일격으로 군중 제어 또는 부상 상태의 적에게 피해를 주면 기력 재생이 추가로 x30% 증가합니다.\n\nTags: 기본, 암살, 피해, 물리, 기력.",
			"plPL": "Zadawanie Ożywczym Uderzeniem obrażeń wrogowi okaleczonemu lub o ograniczonej kontroli zwiększa premię do regeneracji energii zapewnianą przez tę moc do x30%.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Causar dano a um inimigo sob controle de grupo ou ferido com Golpe Revigorante aumenta o bônus de regeneração de energia em 30%.\n\nTags: Básica, Degola, Dano, Física, Energia.",
			"ruRU": "Когда \"Живительный удар\" наносит урон противнику с низким уровнем здоровья или цели под действием эффектов контроля, бонус к скорости восстановления энергии этого умения повышается до x30%.\n\nTags: Базовое, Головорез, Урон, Физический урон, Энергия.",
			"zhCN": "使用振奋打击对一名被群控或受伤的敌人造成伤害, 会使其能量回复速度加成提高至 x30%。\n\nTags: 基础, 刺杀, 伤害, 物理, 能量.",
			"zhTW": "以振奮之擊對受控場或受傷的敵人造成傷害時,會使其能量恢復加成提高 x30%。\n\nTags: 基本, 割喉, 傷害, 物理, 能量."
},
		id: 5,
		maxPoints: 1,
		x: -686.981,
		y: -357.315
	},
	"Primary Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Invigorating Strike additionally grants +8% Lucky Hit Chance. Hitting a Crowd Controlled or Injured enemy increases this bonus to +16% Lucky Hit Chance.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Primärer Belebender Schlag",
			"esES": "Golpe vigorizador primario",
			"esMX": "Golpe Vigorizante Primario",
			"frFR": "Frappe revigorante primaire",
			"itIT": "Assalto Rinvigorente Primario",
			"jaJP": "活性の一撃(極上)",
			"koKR": "주요한 원기의 일격",
			"plPL": "Podstawowe Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante Primário",
			"ruRU": "Основной живительный удар",
			"zhCN": "主要振奋打击",
			"zhTW": "首要振奮之擊"
},
		descriptionLocalized: {
			"deDE": "Belebender Schlag verleiht außerdem +8% Glückstrefferchance. Wenn Ihr einen Gegner trefft, der unter Kontrollverlusteffekten leidet oder verwundet ist, wird dieser Bonus auf +16% Glückstrefferchance erhöht.\n\nTags: Basis, Meucheln, Schaden, Physisch, Energie.",
			"esES": "Golpe vigorizador también otorga un +8% de probabilidad de golpe de suerte. Golpear a un enemigo afectado por control de masas o herido aumenta este bonus a un +16% de probabilidad de golpe de suerte.\n\nTags: Básica, Degollación, Daño, Física, Energía.",
			"esMX": "Golpe Vigorizante además otorga un +8% de probabilidad de golpe afortunado. Golpear a un enemigo bajo los efectos de control de multitudes o herido aumenta esta bonificación a un +16% de probabilidad de golpe afortunado.\n\nTags: Básica, Degollador, Daño, Física, Energía.",
			"frFR": "Frappe revigorante confère aussi un bonus aux chances d'obtenir un coup de chance de +8%. Lorsque vous touchez une cible blessée ou subissant un effet de perte de contrôle, ce bonus est porté à +16%.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Assalto Rinvigorente conferisce inoltre il +8% di probabilità di colpo fortunato. Colpire un nemico sotto effetti debilitanti o ferito incrementa questo bonus al +16% di probabilità di colpo fortunato.\n\nTags: Base, Sgozzamento, Danni, Fisico, Energia.",
			"jaJP": "〈活性の一撃〉に、幸運の一撃発生率を+8%増加させる効果が加わる。操作障害または負傷効果を受けた敵に〈活性の一撃〉を命中させると、このボーナスの効果が+16%に強化される。\n\nTags: 基本, 喉かき, ダメージ, 物理, エネルギー.",
			"koKR": "원기의 일격이 추가로 행운의 적중 확률을 +8% 증가시킵니다. 군중 제어 또는 부상 상태의 적에게 공격을 적중시키면 행운의 적중 확률이 +16% 증가합니다.\n\nTags: 기본, 암살, 피해, 물리, 기력.",
			"plPL": "Ożywcze Uderzenie dodatkowo zapewnia premię +8% do szansy na szczęśliwy traf. Trafienie wroga okaleczonego lub o ograniczonej kontroli zwiększa tę premię do +16%.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Golpe Revigorante também concede +8% de chance de Golpe de Sorte. Atingir um inimigo sob controle de grupo ou ferido aumenta esse bônus em +16% de chance de Golpe de Sorte.\n\nTags: Básica, Degola, Dano, Física, Energia.",
			"ruRU": "\"Живительный удар\" дополнительно повышает вероятность удачного удара на +8%. Когда вы поражаете противника с низким уровнем здоровья или цель под действием эффектов контроля, этот бонус увеличивается до +16%.\n\nTags: Базовое, Головорез, Урон, Физический урон, Энергия.",
			"zhCN": "振奋打击额外给予 +8% 的幸运一击几率。命中一名被群控或受伤的敌人时, 使该加成提高至 +16%。\n\nTags: 基础, 刺杀, 伤害, 物理, 能量.",
			"zhTW": "振奮之擊額外賦予 +8% 幸運觸發機率。擊中受控場或受傷的敵人可使此加成效果提升至 +16% 幸運觸發機率。\n\nTags: 基本, 割喉, 傷害, 物理, 能量."
},
		id: 7,
		maxPoints: 1,
		x: -660.611,
		y: -496.7
	},
	"Fundamental Invigorating Strike": {
		baseSkill: "Invigorating Strike",
		connections: [ "Enhanced Invigorating Strike" ],
		description: `Hitting an enemy with Invigorating Strike while you are below 50% Energy makes them Vulnerable for 3 seconds.

Tags: Basic, Cutthroat, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Fundamentaler Belebender Schlag",
			"esES": "Golpe vigorizador fundamental",
			"esMX": "Golpe Vigorizante Fundamental",
			"frFR": "Frappe revigorante fondamentale",
			"itIT": "Assalto Rinvigorente Fondamentale",
			"jaJP": "活性の一撃(本格)",
			"koKR": "근본적인 원기의 일격",
			"plPL": "Fundamentalne Ożywcze Uderzenie",
			"ptBR": "Golpe Revigorante Fundamental",
			"ruRU": "Фундаментальный живительный удар",
			"zhCN": "基础振奋打击",
			"zhTW": "基要振奮之擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner mit Belebender Schlag trefft, während Ihr über weniger als 50% Energie verfügt, wird dieser 3 Sek. lang verwundbar.\n\nTags: Basis, Meucheln, Schaden, Physisch, Energie.",
			"esES": "Golpear a un enemigo con Golpe vigorizador cuando tienes menos de un 50% de energía lo vuelve vulnerable durante 3 s.\n\nTags: Básica, Degollación, Daño, Física, Energía.",
			"esMX": "Golpear a un enemigo con Golpe Vigorizante mientras tienes menos del 50% de Energía lo vuelve vulnerable durante 3 segundos.\n\nTags: Básica, Degollador, Daño, Física, Energía.",
			"frFR": "Toucher une cible avec Frappe revigorante alors que vous avez moins de 50% d'énergie rend celle-ci vulnérable pendant 3 s.\n\nTags: Basique, Coupe-jarret, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Colpire un nemico con Assalto Rinvigorente mentre hai meno del 50% di energia li rende vulnerabili per 3 s.\n\nTags: Base, Sgozzamento, Danni, Fisico, Energia.",
			"jaJP": "エネルギーが50%未満の状態で〈活性の一撃〉を敵に命中させると、その敵を3秒間にわたり脆弱状態にする。\n\nTags: 基本, 喉かき, ダメージ, 物理, エネルギー.",
			"koKR": "원기의 일격을 기력이 50% 미만일 때 적에게 적중시키면 해당 적이 3초 동안 취약해집니다.\n\nTags: 기본, 암살, 피해, 물리, 기력.",
			"plPL": "Wróg trafiony Ożywczym Uderzeniem, kiedy twój poziom energii jest poniżej 50%, staje się odsłonięty na 3 sek.\n\nTags: Podstawowe, Napaść, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Acertar um inimigo com Golpe Revigorante enquanto você estiver abaixo de 50% de energia torna-o vulnerável por 3 segundos.\n\nTags: Básica, Degola, Dano, Física, Energia.",
			"ruRU": "Когда вы поражаете противника \"Живительным ударом\", пока ваш запас энергии ниже 50%, он становится уязвимым на 3 сек.\n\nTags: Базовое, Головорез, Урон, Физический урон, Энергия.",
			"zhCN": "能量低于 50% 时, 使用振奋打击命中一名敌人会使其陷入易伤状态, 持续 3 秒。\n\nTags: 基础, 刺杀, 伤害, 物理, 能量.",
			"zhTW": "當你在低於 50% 點能量的情況下,以振奮之擊擊中敵人時,會使其易傷 3 秒。\n\nTags: 基本, 割喉, 傷害, 物理, 能量."
},
		id: 6,
		maxPoints: 1,
		x: -955.226,
		y: -375.21
	},
	"Puncture": {
		connections: [ "Enhanced Puncture", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: 35% (per hit)
Throw blades a short distance, dealing {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% damage. Every 3rd cast Slows enemies by 20% for 2 seconds. Critical Strikes will always Slow.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Einstich",
			"esES": "Pinchar",
			"esMX": "Punzar",
			"frFR": "Perforation",
			"itIT": "Perforazione",
			"jaJP": "釘刺し",
			"koKR": "구멍 뚫기",
			"plPL": "Rana Kłuta",
			"ptBR": "Puncionar",
			"ruRU": "Колющий удар",
			"zhCN": "穿刺飞刀",
			"zhTW": "穿刺飛刀"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: 35% (per hit)\nWerft Klingen über eine kurze Distanz und verursacht {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% Schaden. Jeder 3. Einsatz verlangsamt Gegner 2 Sek. lang um 20%. Kritische Treffer verlangsamen immer.\n\nTags: Basis, Präzision, Kontrollverlust, Kritische Treffer, Schaden, Physisch.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: 35% (per hit)\nLanzas a corta distancia unas cuchillas que infligen {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de daño. Cada 3 lanzamientos, los enemigos se ralentizan un 20% durante 2 s. Los golpes críticos siempre ralentizan.\n\nTags: Básica, Tirador, Control de masas, Golpes críticos, Daño, Física.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: 35% (per hit)\nArrojas cuchillas a corta distancia que infligen {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de daño. Cada 3 lanzamientos, ralentiza a los enemigos un 20% durante 2 segundos. Los golpes críticos siempre ralentizan.\n\nTags: Básica, Tirador, Control de multitudes, Golpes críticos, Daño, Física.",
			"frFR": "Points de combo générés: 1\nChances d'obtenir un coup de chance: 35% (per hit)\nVous lancez des lames à courte distance, ce qui inflige {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% points de dégâts. Toutes les 3 utilisations, ralentit les adversaires de 20% pendant 2 s. Les coups critiques ralentissent à coup sûr les adversaires.\n\nTags: Basique, Tir d'élite, Perte de contrôle, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: 35% (per hit)\nLancia delle lame a breve distanza, infliggendo {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% danni. Ogni 3 lanci dell'abilità rallenta i nemici del 20% per 2 s. I colpi critici rallenteranno sempre i nemici.\n\nTags: Base, Tiro di precisione, Effetti debilitanti, Colpi critici, Danni, Fisico.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: 35% (per hit)\n近距離に刃を投げつけ、{21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%のダメージを与える。3回使用するたびに、対象となった敵の移動速度を2秒間にわたって20%低下させる。クリティカルヒット時、移動速度低下効果が必ず発生する。\n\nTags: 基本, 射手, 操作障害効果, クリティカルヒット, ダメージ, 物理.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: 35% (per hit)\n짧게 칼날을 던져 {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}%의 피해를 줍니다. 3번 시전할 때마다 2초 동안 적을 20% 감속시킵니다. 극대화 적중하면 언제나 적을 감속시킵니다.\n\nTags: 기본, 명사수, 군중 제어, 극대화, 피해, 물리.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: 35% (per hit)\nRzucasz ostrzami na niewielką odległość, zadając {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% pkt. obrażeń. Co 3 użycie spowalnia wrogów o 20% na 2 sek. Trafienia krytyczne zawsze spowalniają cele.\n\nTags: Podstawowe, Strzelectwo, Ograniczanie Kontroli, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: 35% (per hit)\nArremessa lâminas por uma curta distância, causando {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% de dano. Cada 3° lançamento desacelera inimigos em 20% por 2 segundos. Acertos críticos sempre aplicarão lentidão.\n\nTags: Básica, Atirador, Controle de Grupo, Acertos Críticos, Dano, Física.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: 35% (per hit)\nВы бросаете на короткое расстояние клинки, наносящие {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% ед. урона. Каждое 3-е применение замедляет противников на 20% на 2 сек. Критические удары всегда замедляют цели.\n\nTags: Базовое, Стрелок, Контроль, Критические удары, Урон, Физический урон.",
			"zhCN": "生成连击点数: 1\n幸运一击几率: 35% (per hit)\n短距离扔出你的飞刀, 造成 {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% 点伤害。每第 3 次施放会使敌人减速 20%, 持续 2 秒。暴击必定造成减速。\n\nTags: 基础, 神射手, 群控, 暴击, 伤害, 物理.",
			"zhTW": "產生連擊點數:1\n幸運觸發機率: 35% (per hit)\n丟出短距離飛行的刀刃,造成 {21/23.1/25.2/27.3/29.4/31.5/33.6/35.7/37.8/39.9}% 點傷害。每第 3 次施放會使敵人緩速 20%,持續 2 秒。爆擊時必定緩速。\n\nTags: 基本, 射手, 控場, 爆擊, 傷害, 物理."
},
		id: 8,
		maxPoints: 5,
		x: 391.432,
		y: -210.87
	},
	"Enhanced Puncture": {
		baseSkill: "Puncture",
		connections: [ "Puncture", "Fundamental Puncture", "Primary Puncture" ],
		description: `Gain 2 Energy when Puncture damages a Crowd Controlled enemy.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Einstich",
			"esES": "Pinchar mejorado",
			"esMX": "Punción Potenciada",
			"frFR": "Perforation renforcée",
			"itIT": "Perforazione Rinforzata",
			"jaJP": "釘刺し(強化版)",
			"koKR": "강화된 구멍 뚫기",
			"plPL": "Wzmocniona Rana Kłuta",
			"ptBR": "Puncionar Aperfeiçoado",
			"ruRU": "Усиленный колющий удар",
			"zhCN": "强化穿刺飞刀",
			"zhTW": "強化穿刺飛刀"
},
		descriptionLocalized: {
			"deDE": "Erhaltet 2 Energie, wenn Einstich einem Gegner Schaden zufügt, der unter Kontrollverlusteffekten leidet.\n\nTags: Basis, Präzision, Kontrollverlust, Kritische Treffer, Schaden, Physisch.",
			"esES": "Obtienes 2 de energía cuando Pinchar inflige daño a un enemigo afectado por control de masas.\n\nTags: Básica, Tirador, Control de masas, Golpes críticos, Daño, Física.",
			"esMX": "Obtienes 2 de Energía cuando Punzar inflige daño a un enemigo bajo los efectos de control de multitudes.\n\nTags: Básica, Tirador, Control de multitudes, Golpes críticos, Daño, Física.",
			"frFR": "Vous gagnez 2 points d'énergie lorsque Perforation blesse une cible subissant un effet de perte de contrôle.\n\nTags: Basique, Tir d'élite, Perte de contrôle, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Ottieni 2 energia quando Perforazione infligge danni a un nemico sotto effetti debilitanti.\n\nTags: Base, Tiro di precisione, Effetti debilitanti, Colpi critici, Danni, Fisico.",
			"jaJP": "操作障害効果を受けている敵に〈釘刺し〉でダメージを与えると、2のエネルギーを獲得する。\n\nTags: 基本, 射手, 操作障害効果, クリティカルヒット, ダメージ, 物理.",
			"koKR": "구멍 뚫기가 군중 제어 상태의 적에게 피해를 주면 기력을 2 얻습니다.\n\nTags: 기본, 명사수, 군중 제어, 극대화, 피해, 물리.",
			"plPL": "Zyskujesz 2 pkt. energii, kiedy Rana Kłuta zada obrażenia wrogowi o ograniczonej kontroli.\n\nTags: Podstawowe, Strzelectwo, Ograniczanie Kontroli, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Recebe 2 de energia quando Puncionar causa dano a um inimigo sob controle de grupo.\n\nTags: Básica, Atirador, Controle de Grupo, Acertos Críticos, Dano, Física.",
			"ruRU": "Вы накапливаете 2 ед. энергии, когда \"Колющий удар\" наносит урон противнику под действием эффектов контроля.\n\nTags: Базовое, Стрелок, Контроль, Критические удары, Урон, Физический урон.",
			"zhCN": "穿刺飞刀对被群控的敌人造成伤害时获得 2 点能量。\n\nTags: 基础, 神射手, 群控, 暴击, 伤害, 物理.",
			"zhTW": "當穿刺飛刀對受控場效果影響的敵人造成傷害時,獲得 2 點能量。\n\nTags: 基本, 射手, 控場, 爆擊, 傷害, 物理."
},
		id: 9,
		maxPoints: 1,
		x: 665.19,
		y: -347.11
	},
	"Fundamental Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Puncture now throws 3 blades in a spread, each dealing 35% of its Base damage. Hitting an enemy with at least 2 blades at once makes them Vulnerable for 2 seconds.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentaler Einstich",
			"esES": "Pinchar fundamental",
			"esMX": "Punción Fundamental",
			"frFR": "Perforation fondamentale",
			"itIT": "Perforazione Fondamentale",
			"jaJP": "釘刺し(本格)",
			"koKR": "근본적인 구멍 뚫기",
			"plPL": "Fundamentalna Rana Kłuta",
			"ptBR": "Puncionar Fundamental",
			"ruRU": "Фундаментальный колющий удар",
			"zhCN": "基础穿刺飞刀",
			"zhTW": "基要穿刺飛刀"
},
		descriptionLocalized: {
			"deDE": "Einstich schleudert jetzt 3 Klingen in einer Fächerform, wobei jede 35% des Basisschadens verursacht. Wenn ein Gegner mit mindestens 2 Klingen gleichzeitig getroffen wird, wird er 2 Sek. lang verwundbar.\n\nTags: Basis, Präzision, Kontrollverlust, Kritische Treffer, Schaden, Physisch.",
			"esES": "Ahora, Pinchar lanza en abanico 3 cuchillas que infligen un 35% de su daño base cada una. Golpear a un enemigo con al menos 2 cuchillas a la vez lo vuelve vulnerable durante 2 s.\n\nTags: Básica, Tirador, Control de masas, Golpes críticos, Daño, Física.",
			"esMX": "Punzar ahora lanza 3 cuchillas desplegadas, y cada una inflige un 35% de su daño de base. Golpear a un enemigo con al menos 2 cuchillas a la vez lo vuelve vulnerable durante 2 segundos.\n\nTags: Básica, Tirador, Control de multitudes, Golpes críticos, Daño, Física.",
			"frFR": "Perforation lance désormais 3 lames en éventail qui infligent chacune 35% de ses dégâts de base. Si au moins 2 lames touchent une même cible en même temps, celle-ci devient vulnérable pendant 2 s.\n\nTags: Basique, Tir d'élite, Perte de contrôle, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Perforazione ora scaglia a ventaglio 3 lame che infliggono ciascuna il 35% dei danni base. Colpire un nemico con almeno 2 lame simultaneamente lo rende vulnerabile per 2 s.\n\nTags: Base, Tiro di precisione, Effetti debilitanti, Colpi critici, Danni, Fisico.",
			"jaJP": "〈釘刺し〉使用時に3本の刃をばらまくようになる。それぞれの刃は基礎ダメージの35%のダメージを与える。1体の敵に少なくとも2本の刃が同時に命中すると、その敵を2秒間にわたり脆弱状態にする。\n\nTags: 基本, 射手, 操作障害効果, クリティカルヒット, ダメージ, 物理.",
			"koKR": "구멍 뚫기가 3개의 칼날을 흩뿌려 각각 기본 공격력의 35%에 해당하는 피해를 줍니다. 한 번에 적에게 2개 이상의 칼날을 적중시키면 해당 적은 2초 동안 취약해집니다.\n\nTags: 기본, 명사수, 군중 제어, 극대화, 피해, 물리.",
			"plPL": "Rana Kłuta powoduje teraz ciśnięcie 3 ostrzami na obszar w kształcie wachlarza. Każde z nich zadaje 35% podstawowych obrażeń od Rany Kłutej. Wróg trafiony co najmniej 2 ostrzami naraz staje się odsłonięty na 2 sek.\n\nTags: Podstawowe, Strzelectwo, Ograniczanie Kontroli, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Puncionar agora arremessa 3 lâminas em uma área. Cada uma causa 35% do dano-base. Atingir um inimigo com pelo menos 2 lâminas de uma vez torna-o vulnerável por 2 segundos.\n\nTags: Básica, Atirador, Controle de Grupo, Acertos Críticos, Dano, Física.",
			"ruRU": "\"Колющий удар\" теперь выпускает веером 3 клинка, наносящие по 35% базового урона. Если хотя бы 2 клинка поражают одну цель, она становится уязвимой на 2 сек.\n\nTags: Базовое, Стрелок, Контроль, Критические удары, Урон, Физический урон.",
			"zhCN": "现在穿刺飞刀会投掷 3 把散开的刀刃, 每把造成 35% 的基础伤害。一次至少用 2 把飞刀命中一名敌人将使其陷入易伤状态, 持续 2 秒。\n\nTags: 基础, 神射手, 群控, 暴击, 伤害, 物理.",
			"zhTW": "穿刺飛刀會散射出 3 把刀刃,每把造成相當於其基礎傷害的 35%。以至少 2 把刀刃擊中一名敵人時,會使其易傷 2 秒。\n\nTags: 基本, 射手, 控場, 爆擊, 傷害, 物理."
},
		id: 10,
		maxPoints: 1,
		x: 939.345,
		y: -358.89
	},
	"Primary Puncture": {
		baseSkill: "Puncture",
		connections: [ "Enhanced Puncture" ],
		description: `Every 3rd cast of Puncture will also ricochet up to 2 times. Critical Strikes will always ricochet.

Tags: Basic, Marksman, Crowd Control, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primärer Einstich",
			"esES": "Pinchar primario",
			"esMX": "Punción Primaria",
			"frFR": "Perforation primaire",
			"itIT": "Perforazione Primaria",
			"jaJP": "釘刺し(極上)",
			"koKR": "주요한 구멍 뚫기",
			"plPL": "Podstawowa Rana Kłuta",
			"ptBR": "Puncionar Primário",
			"ruRU": "Основной колющий удар",
			"zhCN": "主要穿刺飞刀",
			"zhTW": "首要穿刺飛刀"
},
		descriptionLocalized: {
			"deDE": "Jeder 3. Einsatz von Einstich prallt außerdem bis zu 2-mal ab. Kritische Treffer prallen immer ab.\n\nTags: Basis, Präzision, Kontrollverlust, Kritische Treffer, Schaden, Physisch.",
			"esES": "Cada 3 lanzamientos de Pinchar, el efecto rebotará también hasta 2 veces. Los golpes críticos siempre rebotan.\n\nTags: Básica, Tirador, Control de masas, Golpes críticos, Daño, Física.",
			"esMX": "Cada 3 lanzamientos de Punzar, también rebotará hasta 2 veces. Los golpes críticos siempre rebotan.\n\nTags: Básica, Tirador, Control de multitudes, Golpes críticos, Daño, Física.",
			"frFR": "Toutes les 3 utilisations de Perforation, ricoche jusqu'à 2 fois. Les coups critiques ricochent toujours.\n\nTags: Basique, Tir d'élite, Perte de contrôle, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Ogni 3 lanci di Perforazione rimbalzerà inoltre 2 volte. I colpi critici rimbalzeranno sempre.\n\nTags: Base, Tiro di precisione, Effetti debilitanti, Colpi critici, Danni, Fisico.",
			"jaJP": "〈釘刺し〉が、3回使用するたびに最大2回跳飛するようになる。クリティカルヒット時は必ず跳飛する。\n\nTags: 基本, 射手, 操作障害効果, クリティカルヒット, ダメージ, 物理.",
			"koKR": "구멍 뚫기를 3번째로 시전하면 공격이 최대 2번 튕깁니다. 극대화 적중하면 언제나 튕깁니다.\n\nTags: 기본, 명사수, 군중 제어, 극대화, 피해, 물리.",
			"plPL": "Co 3 użycie Rany Kłutej rykoszetuje maksymalnie 2 razy. Trafienia krytyczne zawsze rykoszetują.\n\nTags: Podstawowe, Strzelectwo, Ograniczanie Kontroli, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Cada 3° lançamento de Puncionar também ricocheteará até 2 vezes. Acertos críticos sempre ricochetearão.\n\nTags: Básica, Atirador, Controle de Grupo, Acertos Críticos, Dano, Física.",
			"ruRU": "При каждом 3-м применении \"Колющий удар\" рикошетит, поражая до 2 целей. При критических ударах эффект рикошета срабатывает гарантированно.\n\nTags: Базовое, Стрелок, Контроль, Критические удары, Урон, Физический урон.",
			"zhCN": "每第 3 次施放穿刺飞刀也会弹射最多 2 次。暴击必定弹射。\n\nTags: 基础, 神射手, 群控, 暴击, 伤害, 物理.",
			"zhTW": "每第 3 次施放的穿刺飛刀會彈射,最多 2 次。爆擊時必定會彈射。\n\nTags: 基本, 射手, 控場, 爆擊, 傷害, 物理."
},
		id: 11,
		maxPoints: 1,
		x: 692.899,
		y: -483.34
	},
	"Heartseeker": {
		connections: [ "Enhanced Heartseeker", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: 50% (per hit)
Fire an arrow that seeks an enemy, dealing {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% damage and increasing your Critical Strike Chance against them by +3% for 4 seconds, up to +15%.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Herzsucher",
			"esES": "Buscacorazones",
			"esMX": "Buscacorazones",
			"frFR": "Crève-cœur",
			"itIT": "Centracuore",
			"jaJP": "ハートシーカー",
			"koKR": "심장추적자",
			"plPL": "Poszukiwanie Serc",
			"ptBR": "Furacórdio",
			"ruRU": "Пронзатель сердец",
			"zhCN": "觅心箭",
			"zhTW": "穿心箭"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: 50% (per hit)\nSchießt einen Pfeil ab, der einen Gegner sucht, {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% Schaden verursacht und Eure kritische Trefferchance gegen ihn 4 Sek. lang um +3% erhöht, bis maximal +15%.\n\nTags: Basis, Präzision, Kritische Treffer, Schaden, Physisch.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: 50% (per hit)\nDisparas una flecha que busca a un enemigo, le inflige {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% de daño y aumenta un +3% la probabilidad de golpe crítico contra él durante 4 s, hasta un máximo de un +15%.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: 50% (per hit)\nDisparas una flecha que busca a un enemigo, le inflige {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% de daño y aumenta un +3% tu probabilidad de golpe crítico contra él durante 4 segundos, hasta un máximo del +15%.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"frFR": "Points de combo générés: 1\nChances d'obtenir un coup de chance: 50% (per hit)\nVous tirez une flèche qui traque une cible, ce qui lui inflige {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% points de dégâts à l'impact et augmente vos chances de lui infliger un coup critique de +3% pendant 4 s, jusqu'à un maximum de +15%.\n\nTags: Basique, Tir d'élite, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: 50% (per hit)\nScagli una freccia che insegue un nemico, infliggendo {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% danni e aumentando la probabilità di critico contro di questi del +3% per 4 s, fino a un massimo del +15%.\n\nTags: Base, Tiro di precisione, Colpi critici, Danni, Fisico.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: 50% (per hit)\n敵を追尾する矢を放ち{22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}%のダメージを与えた上で、その敵に対するクリティカルヒット率が4秒間にわたり+3%上昇する。上昇量は最大で+15%。\n\nTags: 基本, 射手, クリティカルヒット, ダメージ, 物理.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: 50% (per hit)\n적을 추적하는 화살을 발사하여, {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}%의 피해를 주고 대상에 대한 자신의 극대화 확률을 4초 동안 +3%만큼, 최대 +15%까지 증가시킵니다.\n\nTags: 기본, 명사수, 극대화, 피해, 물리.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: 50% (per hit)\nWypuszczasz strzałę, która wyszukuje wroga, zadaje mu {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% pkt. obrażeń i zwiększa szansę na zadanie mu trafienia krytycznego o +3% przez 4 sek., maksymalnie do +15%.\n\nTags: Podstawowe, Strzelectwo, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: 50% (per hit)\nDispara uma flecha que busca um inimigo, causando {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% de dano e aumentando sua chance de acerto crítico contra ele em +3% por 4 segundos, até +15%.\n\nTags: Básica, Atirador, Acertos Críticos, Dano, Física.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: 50% (per hit)\nВыпускает стрелу, которая сама находит и поражает противника. Стрела наносит {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% ед. урона и повышает вашу вероятность критического удара против этой цели на +3% на 4 сек. вплоть до +15%.\n\nTags: Базовое, Стрелок, Критические удары, Урон, Физический урон.",
			"zhCN": "生成连击点数: 1\n幸运一击几率: 50% (per hit)\n发射一支会追踪敌人的箭矢, 造成 {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% 点伤害, 并且使你对其造成暴击的几率提高 +3%, 持续 4 秒, 最多提高 +15%。\n\nTags: 基础, 神射手, 暴击, 伤害, 物理.",
			"zhTW": "產生連擊點數:1\n幸運觸發機率: 50% (per hit)\n射出會尋覓敵人的箭矢,造成 {22/24.2/26.4/28.6/30.8/33/35.2/37.4/39.6/41.8}% 點傷害,對該敵人的爆擊機率提高 +3%,持續 4 秒,最多提高 +15%。\n\nTags: 基本, 射手, 爆擊, 傷害, 物理."
},
		id: 12,
		maxPoints: 5,
		x: 517.08,
		y: -0.265
	},
	"Enhanced Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Heartseeker", "Fundamental Heartseeker", "Primary Heartseeker" ],
		description: `When Heartseeker Critically Strikes, gain +8% Attack Speed for 4 seconds. Double this amount if the enemy is Vulnerable.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Herzsucher",
			"esES": "Buscacorazones mejorado",
			"esMX": "Buscacorazones Potenciado",
			"frFR": "Crève-cœur renforcé",
			"itIT": "Centracuore Rinforzato",
			"jaJP": "ハートシーカー(強化版)",
			"koKR": "강화된 심장추적자",
			"plPL": "Wzmocnione Poszukiwanie Serc",
			"ptBR": "Furacórdio Aperfeiçoado",
			"ruRU": "Усиленный пронзатель сердец",
			"zhCN": "强化觅心箭",
			"zhTW": "強化穿心箭"
},
		descriptionLocalized: {
			"deDE": "Wenn Herzsucher einen kritischen Treffer erzielt, erhaltet Ihr 4 Sek. lang +8% Angriffsgeschwindigkeit. Dieser Wert verdoppelt sich, wenn der Gegner verwundbar ist.\n\nTags: Basis, Präzision, Kritische Treffer, Schaden, Physisch.",
			"esES": "Cuando Buscacorazones asesta un golpe crítico, obtienes un +8% de velocidad de ataque durante 4 s. Esta cantidad se duplica si el enemigo es vulnerable.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"esMX": "Cuando asestas un golpe crítico con Buscacorazones, obtienes un +8% más de velocidad de ataque durante 4 segundos. Esta cantidad se duplica si el enemigo está vulnerable.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"frFR": "Lorsque Crève-cœur inflige un coup critique, votre vitesse d'attaque est augmentée de +8% pendant 4 s. Cette valeur est doublée si l'adversaire est vulnérable.\n\nTags: Basique, Tir d'élite, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Infliggere colpi critici con Centracuore aumenta la velocità d'attacco del +8% per 4 s. Questo ammontare raddoppia se il nemico è vulnerabile.\n\nTags: Base, Tiro di precisione, Colpi critici, Danni, Fisico.",
			"jaJP": "〈ハートシーカー〉でクリティカルヒットが発生すると、攻撃速度が4秒間にわたり+8%上昇する。脆弱状態の敵に対しては、この上昇度が2倍になる。\n\nTags: 基本, 射手, クリティカルヒット, ダメージ, 物理.",
			"koKR": "심장추적자가 극대화로 적중하면 4초 동안 공격 속도가 +8% 증가합니다. 적이 취약 상태일 경우 효과가 2배로 증가합니다.\n\nTags: 기본, 명사수, 극대화, 피해, 물리.",
			"plPL": "Kiedy Poszukiwanie Serc zada trafienie krytyczne, zyskujesz +8% do szybkości ataku na 4 sek. Wartość ta jest podwojona, jeśli wróg jest odsłonięty.\n\nTags: Podstawowe, Strzelectwo, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Quando Furacórdio desfere um acerto crítico, recebe +8% de velocidade de ataque por 4 segundos. O valor é dobrado se o inimigo está vulnerável.\n\nTags: Básica, Atirador, Acertos Críticos, Dano, Física.",
			"ruRU": "Когда \"Пронзатель сердец\" наносит критический урон, ваша скорость атаки повышается на +8% на 4 сек. Прибавка удваивается, если противник уязвим.\n\nTags: Базовое, Стрелок, Критические удары, Урон, Физический урон.",
			"zhCN": "觅心箭暴击时, 攻击速度提高 +8%, 持续 4 秒。如果敌人处于易伤状态则该加成翻倍。\n\nTags: 基础, 神射手, 暴击, 伤害, 物理.",
			"zhTW": "穿心箭爆擊可使攻擊速度提高 +8%,持續 4 秒。敵人若處於易傷狀態則此效果加倍。\n\nTags: 基本, 射手, 爆擊, 傷害, 物理."
},
		id: 13,
		maxPoints: 1,
		x: 878.274,
		y: -0.72
	},
	"Fundamental Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker also increases the Critical Strike Damage the enemy takes from you by +5% for 4 seconds, up to +25%.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentaler Herzsucher",
			"esES": "Buscacorazones fundamental",
			"esMX": "Buscacorazones Fundamental",
			"frFR": "Crève-cœur fondamental",
			"itIT": "Centracuore Fondamentale",
			"jaJP": "ハートシーカー(本格)",
			"koKR": "근본적인 심장추적자",
			"plPL": "Fundamentalne Poszukiwanie Serc",
			"ptBR": "Furacórdio Fundamental",
			"ruRU": "Фундаментальный пронзатель сердец",
			"zhCN": "基础觅心箭",
			"zhTW": "基要穿心箭"
},
		descriptionLocalized: {
			"deDE": "Herzsucher erhöht außerdem 4 Sek. lang den durch Euch erlittenen kritischen Trefferschaden des Gegners um +5%, bis maximal +25%.\n\nTags: Basis, Präzision, Kritische Treffer, Schaden, Physisch.",
			"esES": "Buscacorazones también aumenta el daño de golpe crítico que infliges al enemigo un +5% durante 4 s, hasta un máximo de un +25%.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"esMX": "Buscacorazones también aumenta un +5% el daño de golpe crítico que recibe de ti el enemigo durante 4 segundos, hasta un máximo del +25%.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"frFR": "Crève-cœur augmente aussi les dégâts critiques que l'adversaire subit de votre part de +5% pendant 4 s, jusqu'à un maximum de +25%.\n\nTags: Basique, Tir d'élite, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Centracuore aumenta anche i danni critici che infliggi al nemico del +5% per 4 s, fino a un massimo del +25%.\n\nTags: Base, Tiro di precisione, Colpi critici, Danni, Fisico.",
			"jaJP": "〈ハートシーカー〉に、命中した敵に自分が与えるクリティカルのダメージが4秒間にわたり+5%増加する効果が加わる。増加量は最大で+25%。\n\nTags: 基本, 射手, クリティカルヒット, ダメージ, 物理.",
			"koKR": "심장추적자가 추가로 적이 자신에게 받는 극대화 피해를 4초 동안 +5%만큼, 최대 +25%까지 증가시킵니다.\n\nTags: 기본, 명사수, 극대화, 피해, 물리.",
			"plPL": "Poszukiwanie Serc zwiększa również obrażenia otrzymywane przez wroga od twoich trafień krytycznych o +5% na 4 sek., maksymalnie do +25%.\n\nTags: Podstawowe, Strzelectwo, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Furacórdio também aumenta o dano de acerto crítico que o inimigo recebe de você em +5% por 4 segundos, até +25%.\n\nTags: Básica, Atirador, Acertos Críticos, Dano, Física.",
			"ruRU": "\"Пронзатель сердец\" также увеличивает критический урон, который противник получает от вас, на +5% на 4 сек. вплоть до +25%.\n\nTags: Базовое, Стрелок, Критические удары, Урон, Физический урон.",
			"zhCN": "觅心箭也会使你对敌人的暴击伤害提高 +5%, 持续 4 秒, 最多提高 +25%。\n\nTags: 基础, 神射手, 暴击, 伤害, 物理.",
			"zhTW": "穿心箭會使你對敵人造成的爆擊傷害提高 +5%,持續 4 秒,最多提高 +25%。\n\nTags: 基本, 射手, 爆擊, 傷害, 物理."
},
		id: 14,
		maxPoints: 1,
		x: 1078.76,
		y: -93.745
	},
	"Primary Heartseeker": {
		baseSkill: "Heartseeker",
		connections: [ "Enhanced Heartseeker" ],
		description: `Heartseeker ricochets to an additional enemy, dealing 30% of the original damage.

Tags: Basic, Marksman, Critical Strikes, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primärer Herzsucher",
			"esES": "Buscacorazones primario",
			"esMX": "Buscacorazones Primario",
			"frFR": "Crève-cœur primaire",
			"itIT": "Centracuore Primario",
			"jaJP": "ハートシーカー(極上)",
			"koKR": "주요한 심장추적자",
			"plPL": "Podstawowe Poszukiwanie Serc",
			"ptBR": "Furacórdio Primário",
			"ruRU": "Основной пронзатель сердец",
			"zhCN": "主要觅心箭",
			"zhTW": "首要穿心箭"
},
		descriptionLocalized: {
			"deDE": "Herzsucher springt zu einem zusätzlichen Gegner und fügt ihm 30% des ursprünglichen Schadens zu.\n\nTags: Basis, Präzision, Kritische Treffer, Schaden, Physisch.",
			"esES": "Buscacorazones rebota a un enemigo adicional, que sufre un 30% del daño original.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"esMX": "Buscacorazones rebota en un enemigo adicional e inflige un 30% del daño original.\n\nTags: Básica, Tirador, Golpes críticos, Daño, Física.",
			"frFR": "Crève-cœur ricoche sur une cible supplémentaire et lui inflige 30% des dégâts initiaux.\n\nTags: Basique, Tir d'élite, Coups critiques, Dégâts, Dégâts physiques.",
			"itIT": "Centracuore rimbalza su un nemico aggiuntivo, infliggendo il 30% dei danni originali.\n\nTags: Base, Tiro di precisione, Colpi critici, Danni, Fisico.",
			"jaJP": "〈ハートシーカー〉が追加の敵1体に跳飛し、本来の30%のダメージを与える。\n\nTags: 基本, 射手, クリティカルヒット, ダメージ, 物理.",
			"koKR": "심장추적자가 튕겨나가 다른 대상 하나에 추가로 적중하여, 원래 피해의 30%만큼 피해를 줍니다.\n\nTags: 기본, 명사수, 극대화, 피해, 물리.",
			"plPL": "Poszukiwanie Serc rykoszetuje do dodatkowego wroga i zadaje mu 30% pierwotnych obrażeń.\n\nTags: Podstawowe, Strzelectwo, Trafienia Krytyczne, Obrażenia, Fizyczne.",
			"ptBR": "Furacórdio ricocheteia em um inimigo adicional, causando 30% do dano original.\n\nTags: Básica, Atirador, Acertos Críticos, Dano, Física.",
			"ruRU": "\"Пронзатель сердец\" рикошетит в еще одного противника и наносит 30% изначального урона.\n\nTags: Базовое, Стрелок, Критические удары, Урон, Физический урон.",
			"zhCN": "觅心箭弹射至一名额外的敌人, 造成 30% 初始伤害。\n\nTags: 基础, 神射手, 暴击, 伤害, 物理.",
			"zhTW": "穿心箭彈射至一名額外敵人身上,造成原始傷害的 30% 傷害。\n\nTags: 基本, 射手, 爆擊, 傷害, 物理."
},
		id: 15,
		maxPoints: 1,
		x: 1082.04,
		y: 80.68
	},
	"Forceful Arrow": {
		connections: [ "Enhanced Forceful Arrow", "Basic" ],
		description: `Generate Combo Point: 1
Lucky Hit Chance: 40% (per hit)
Fire a powerful arrow at an enemy, dealing {20/22/24/26/28/30/32/34/36/38}% damage. Every 3rd cast makes the enemy Vulnerable for 2 seconds.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Kraftvoller Pfeil",
			"esES": "Flecha impetuosa",
			"esMX": "Flecha Imperiosa",
			"frFR": "Flèche puissante",
			"itIT": "Freccia Travolgente",
			"jaJP": "フォースフル・アロー",
			"koKR": "강력한 화살",
			"plPL": "Mocarna Strzała",
			"ptBR": "Flecha Contundente",
			"ruRU": "Стрела силы",
			"zhCN": "蓄力劲射",
			"zhTW": "強力箭矢"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Kombopunkte: 1\nGlückstrefferchance: 40% (per hit)\nFeuert einen kraftvollen Pfeil auf einen Gegner und fügt ihm {20/22/24/26/28/30/32/34/36/38}% Schaden zu. Jeder 3. Einsatz macht den Gegner 2 Sek. lang verwundbar.\n\nTags: Basis, Präzision, Verwundbar, Schaden, Physisch.",
			"esES": "Generación de puntos de combo: 1\nProbabilidad de golpe de suerte: 40% (per hit)\nDisparas a un enemigo una poderosa flecha que inflige {20/22/24/26/28/30/32/34/36/38}% de daño. Cada 3 lanzamientos, vuelve vulnerable al enemigo durante 2 s.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"esMX": "Generación de puntos de combo: 1\nProbabilidad de golpe afortunado: 40% (per hit)\nDisparas una flecha potente a un enemigo, lo que inflige {20/22/24/26/28/30/32/34/36/38}% de daño. Cada 3 lanzamientos, lo vuelve vulnerable durante 2 segundos.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"frFR": "Points de combo générés: 1\nChances d'obtenir un coup de chance: 40% (per hit)\nVous tirez une flèche puissante qui inflige {20/22/24/26/28/30/32/34/36/38}% points de dégâts à une cible. Toutes les 3 utilisations, rend la cible vulnérable pendant 2 s.\n\nTags: Basique, Tir d'élite, Vulnérable, Dégâts, Dégâts physiques.",
			"itIT": "Generazione punti combo: 1\nProbabilità di colpo fortunato: 40% (per hit)\nScagli una potente freccia verso un nemico, infliggendo {20/22/24/26/28/30/32/34/36/38}% danni. Ogni 3 utilizzi dell'abilità rende il nemico vulnerabile per 2 s.\n\nTags: Base, Tiro di precisione, Vulnerabilità, Danni, Fisico.",
			"jaJP": "コンボポイント生成量: 1\n幸運の一撃発生率: 40% (per hit)\n敵1体に強力な矢を放ち、{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。3回使用するたびに、対象となった敵を2秒間にわたり脆弱状態にする。\n\nTags: 基本, 射手, 脆弱, ダメージ, 物理.",
			"koKR": "생성: 연계 점수 1\n행운의 적중 확률: 40% (per hit)\n적에게 강력한 화살을 발사하여 {20/22/24/26/28/30/32/34/36/38}%의 피해를 줍니다. 3번째 시전할 때마다 적이 2초 동안 취약해집니다.\n\nTags: 기본, 명사수, 취약, 피해, 물리.",
			"plPL": "Generuje: 1 pkt. kombinacji\nSzansa na szczęśliwy traf: 40% (per hit)\nWystrzeliwujesz we wroga potężną strzałę, która zadaje {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń. Co 3 użycie odsłania wroga na 2 sek.\n\nTags: Podstawowe, Strzelectwo, Odsłonięcie, Obrażenia, Fizyczne.",
			"ptBR": "Gerar Ponto de Combo: 1\nChance de Golpe de Sorte: 40% (per hit)\nDispara uma flecha poderosa contra um inimigo, causando {20/22/24/26/28/30/32/34/36/38}% de dano. Cada 3º lançamento deixa o inimigo vulnerável por 2 segundos.\n\nTags: Básica, Atirador, Vulnerável, Dano, Física.",
			"ruRU": "Продлевает серию приемов на 1.\nВероятность удачного удара: 40% (per hit)\nВыпускает в противника мощную стрелу, наносящую {20/22/24/26/28/30/32/34/36/38}% ед. урона. Каждое 3-е применение делает цель уязвимой на 2 сек.\n\nTags: Базовое, Стрелок, Уязвимость, Урон, Физический урон.",
			"zhCN": "生成连击点数: 1\n幸运一击几率: 40% (per hit)\n对一名敌人发射一支强力箭矢, 造成 {20/22/24/26/28/30/32/34/36/38}% 点伤害。每第 3 次施放会使敌人陷入易伤状态, 持续 2 秒。\n\nTags: 基础, 神射手, 易伤, 伤害, 物理.",
			"zhTW": "產生連擊點數:1\n幸運觸發機率: 40% (per hit)\n朝敵人發射強力箭矢,造成 {20/22/24/26/28/30/32/34/36/38}% 點傷害。每第 3 次施放此技能會使敵人易傷,持續 2 秒。\n\nTags: 基本, 射手, 易傷, 傷害, 物理."
},
		id: 16,
		maxPoints: 5,
		x: 396.765,
		y: 197.18
	},
	"Enhanced Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Forceful Arrow", "Fundamental Forceful Arrow", "Primary Forceful Arrow" ],
		description: `Every 3rd cast of Forceful Arrow additionally has a +15% increased Critical Strike Chance.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Verbesserter Kraftvoller Pfeil",
			"esES": "Flecha impetuosa mejorada",
			"esMX": "Flecha Imperiosa Potenciada",
			"frFR": "Flèche puissante renforcée",
			"itIT": "Freccia Travolgente Rinforzata",
			"jaJP": "フォースフル・アロー(強化版)",
			"koKR": "강화된 강력한 화살",
			"plPL": "Wzmocniona Mocarna Strzała",
			"ptBR": "Flecha Contundente Aperfeiçoada",
			"ruRU": "Усиленная стрела силы",
			"zhCN": "强化蓄力劲射",
			"zhTW": "強化強力箭矢"
},
		descriptionLocalized: {
			"deDE": "Jeder 3 Einsatz von Kraftvoller Pfeil hat außerdem eine um +15% erhöhte kritische Trefferchance.\n\nTags: Basis, Präzision, Verwundbar, Schaden, Physisch.",
			"esES": "Cada 3 lanzamientos de Flecha impetuosa, obtienes también un +15% más de probabilidad de golpe crítico.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"esMX": "Cada tres lanzamientos de Flecha Imperiosa, también tiene un +15% más de probabilidad de golpe crítico.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"frFR": "Toutes les 3 utilisations de Flèche puissante, les chances d'infliger un coup critique de la 3e utilisation sont augmentées de +15%.\n\nTags: Basique, Tir d'élite, Vulnérable, Dégâts, Dégâts physiques.",
			"itIT": "Ogni 3 utilizzi di Freccia Travolgente aumenta la probabilità di critico del +15%.\n\nTags: Base, Tiro di precisione, Vulnerabilità, Danni, Fisico.",
			"jaJP": "〈フォースフル・アロー〉のクリティカルヒット率が3回使用するたびに一度、+15%増加する。\n\nTags: 基本, 射手, 脆弱, ダメージ, 物理.",
			"koKR": "강력한 화살을 3번 시전할 때마다 극대화 확률이 추가로 +15% 증가합니다.\n\nTags: 기본, 명사수, 취약, 피해, 물리.",
			"plPL": "Co 3 użycie Mocarnej Strzały ma dodatkowo premię +15% do szansy na trafienie krytyczne.\n\nTags: Podstawowe, Strzelectwo, Odsłonięcie, Obrażenia, Fizyczne.",
			"ptBR": "Cada 3º lançamento de Flecha Contundente também tem +15% de chance de acerto crítico aumentada.\n\nTags: Básica, Atirador, Vulnerável, Dano, Física.",
			"ruRU": "При каждом 3-м применении вероятность критического удара \"Стрелы силы\" повышена на +15%.\n\nTags: Базовое, Стрелок, Уязвимость, Урон, Физический урон.",
			"zhCN": "每第 3 次施放蓄力劲射的暴击几率额外提高 +15%。\n\nTags: 基础, 神射手, 易伤, 伤害, 物理.",
			"zhTW": "每第 3 次施放的強力箭矢有額外 +15% 爆擊機率。\n\nTags: 基本, 射手, 易傷, 傷害, 物理."
},
		id: 17,
		maxPoints: 1,
		x: 668.675,
		y: 321.035
	},
	"Fundamental Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow Knocks Back Non-Elite enemies if they are Close. If they collide with another enemy, both are Knocked Down for 1.5 seconds.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Fundamentaler Kraftvoller Pfeil",
			"esES": "Flecha impetuosa fundamental",
			"esMX": "Flecha Imperiosa Fundamental",
			"frFR": "Flèche puissante fondamentale",
			"itIT": "Freccia Travolgente Fondamentale",
			"jaJP": "基礎〈フォースフル・アロー〉",
			"koKR": "근본적인 강력한 화살",
			"plPL": "Fundamentalna Mocarna Strzała",
			"ptBR": "Flecha Contundente Fundamental",
			"ruRU": "Фундаментальная стрела силы",
			"zhCN": "基础蓄力劲射",
			"zhTW": "基要強力箭矢"
},
		descriptionLocalized: {
			"deDE": "Kraftvoller Pfeil stößt Nicht-Elitegegner in der Nähe zurück. Wenn dieser mit einem weiteren Gegner zusammenstößt, werden beide 1.5 Sek. lang niedergeschlagen.\n\nTags: Basis, Präzision, Verwundbar, Schaden, Physisch.",
			"esES": "Flecha impetuosa repele a los enemigos que no sean de élite si están cerca. Si chocan contra otro enemigo, ambos quedan derribados durante 1.5 s.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"esMX": "Flecha Imperiosa repele a los enemigos que no son de Élite si están cerca. Si chocan con otro enemigo, ambos quedan derribados durante 1.5 segundos.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"frFR": "Flèche puissante repousse les cibles non élites à proximité. Si celles-ci percutent une autre cible, elles sont toutes deux renversées pendant 1.5 s.\n\nTags: Basique, Tir d'élite, Vulnérable, Dégâts, Dégâts physiques.",
			"itIT": "Freccia Travolgente respinge indietro i nemici vicini non élite. Se si scontrano con un altro nemico, cadono tutti a terra per 1.5 s.\n\nTags: Base, Tiro di precisione, Vulnerabilità, Danni, Fisico.",
			"jaJP": "〈フォースフル・アロー〉が付近にいる非エリート敵をノックバックさせる。ノックバックさせた敵が別の敵と衝突すると、どちらも1.5秒間ノックダウン状態になる。\n\nTags: 基本, 射手, 脆弱, ダメージ, 物理.",
			"koKR": "강력한 화살이 근거리에 있는 비정예 적을 밀쳐냅니다. 적이 다른 적과 충돌하면 둘 다 1.5초 동안 넘어집니다.\n\nTags: 기본, 명사수, 취약, 피해, 물리.",
			"plPL": "Mocarna Strzała odrzuca pobliskich wrogów nieelitarnych. Jeśli odrzucony wróg zderzy się z innym, obaj zostają powaleni na 1.5 sek.\n\nTags: Podstawowe, Strzelectwo, Odsłonięcie, Obrażenia, Fizyczne.",
			"ptBR": "Flecha Contundente repele inimigos não elite se estiverem próximos. Se colidirem com outro inimigo, ambos são nocauteados por 1.5 segundos.\n\nTags: Básica, Atirador, Vulnerável, Dano, Física.",
			"ruRU": "\"Стрела силы\" отбрасывает находящихся рядом противников. Если отброшенный противник столкнется с другим врагом, они оба будут сбиты с ног на 1.5 сек. Не действует на особых противников.\n\nTags: Базовое, Стрелок, Уязвимость, Урон, Физический урон.",
			"zhCN": "蓄力劲射会击退附近的非精英敌人。如果被击退的敌人撞到另一名敌人, 两者都会被击倒 1.5 秒。\n\nTags: 基础, 神射手, 易伤, 伤害, 物理.",
			"zhTW": "若非精英敵人位於近距離,強力箭矢可擊退他們。若敵人因此相撞,雙方都會被擊倒,持續 1.5 秒。\n\nTags: 基本, 射手, 易傷, 傷害, 物理."
},
		id: 18,
		maxPoints: 1,
		x: 689.435,
		y: 457.555
	},
	"Primary Forceful Arrow": {
		baseSkill: "Forceful Arrow",
		connections: [ "Enhanced Forceful Arrow" ],
		description: `Forceful Arrow pierces through Vulnerable enemies.

Tags: Basic, Marksman, Vulnerable, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Primärer Kraftvoller Pfeil",
			"esES": "Flecha impetuosa primaria",
			"esMX": "Flecha Imperiosa Primaria",
			"frFR": "Flèche puissante primaire",
			"itIT": "Freccia Travolgente Primaria",
			"jaJP": "フォースフル・アロー(極上)",
			"koKR": "주요한 강력한 화살",
			"plPL": "Podstawowa Mocarna Strzała",
			"ptBR": "Flecha Contundente Primária",
			"ruRU": "Основная стрела силы",
			"zhCN": "主要蓄力劲射",
			"zhTW": "首要強力箭矢"
},
		descriptionLocalized: {
			"deDE": "Kraftvoller Pfeil durchschlägt verwundbare Gegner.\n\nTags: Basis, Präzision, Verwundbar, Schaden, Physisch.",
			"esES": "Flecha impetuosa atraviesa a los enemigos vulnerables.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"esMX": "Flecha Imperiosa perfora a los enemigos vulnerables.\n\nTags: Básica, Tirador, Vulnerable, Daño, Física.",
			"frFR": "Flèche puissante transperce les adversaires vulnérables.\n\nTags: Basique, Tir d'élite, Vulnérable, Dégâts, Dégâts physiques.",
			"itIT": "Freccia Travolgente trapassa i nemici vulnerabili.\n\nTags: Base, Tiro di precisione, Vulnerabilità, Danni, Fisico.",
			"jaJP": "〈フォースフル・アロー〉が脆弱状態の敵を貫通する。\n\nTags: 基本, 射手, 脆弱, ダメージ, 物理.",
			"koKR": "강력한 화살이 취약 상태의 적을 관통합니다.\n\nTags: 기본, 명사수, 취약, 피해, 물리.",
			"plPL": "Mocarna Strzała przebija odsłoniętych wrogów.\n\nTags: Podstawowe, Strzelectwo, Odsłonięcie, Obrażenia, Fizyczne.",
			"ptBR": "Flecha Contundente atravessa inimigos vulneráveis.\n\nTags: Básica, Atirador, Vulnerável, Dano, Física.",
			"ruRU": "\"Стрела силы\" проходит через уязвимых противников.\n\nTags: Базовое, Стрелок, Уязвимость, Урон, Физический урон.",
			"zhCN": "蓄力劲射会穿透易伤的敌人。\n\nTags: 基础, 神射手, 易伤, 伤害, 物理.",
			"zhTW": "強力箭矢會貫穿易傷敵人。\n\nTags: 基本, 射手, 易傷, 傷害, 物理."
},
		id: 19,
		maxPoints: 1,
		x: 922.875,
		y: 320.12
	},
};

rogueData["Core"] = {
	"Twisting Blades": {
		connections: [ "Enhanced Twisting Blades", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: 33% (per hit)
Impale an enemy with your blades, dealing {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% damage and making them take x8% increased damage from you while impaled. After 1.5 seconds the blades return to you, piercing enemies for {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage.

Combo Points increase damage and grant a Movement Speed bonus:
• 1 Point: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% damage, +20% bonus
• 2 Points: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage, +40% bonus
• 3 Points: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% damage, +60% bonus

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Schraubklingen",
			"esES": "Hojas retorcidas",
			"esMX": "Cuchillas Inteligentes",
			"frFR": "Lames sournoises",
			"itIT": "Lame Serpeggianti",
			"jaJP": "ツイストブレード",
			"koKR": "회전 칼날",
			"plPL": "Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas",
			"ruRU": "Вонзающиеся клинки",
			"zhCN": "回旋刀锋",
			"zhTW": "扭轉迴刃"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: 33% (per hit)\nSpießt einen Gegner mit Euren Klingen auf, verursacht {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% Schaden und fügt ihm anschließend x8% mehr Schaden zu, solange er aufgespießt ist. Nach 1.5 Sek. kehren die Klingen zu Euch zurück, durchschlagen Gegner und verursachen dabei {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% Schaden.\n\nKombopunkte erhöhen den Schaden und verleihen einen Bonus auf Bewegungsgeschwindigkeit:\n • 1 Punkt: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% Schaden, +20% Bonus\n• 2 Punkte: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% Schaden, +40% Bonus\n • 3 Punkte: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% Schaden, +60% Bonus\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: 33% (per hit)\nEmpalas a un enemigo con tus hojas, lo que le inflige {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de daño y hace que le inflijas un x8% más de daño mientras está empalado. Tras 1.5 s, las hojas vuelven a ti y perforan a los enemigos para infligirles {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño.\n\nLos puntos de combo aumentan el daño y otorgan un bonus de velocidad de movimiento:\n• 1 punto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% de daño, +20% de bonus\n• 2 puntos: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño, +40% de bonus\n• 3 puntos: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% de daño, +60% de bonus\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: 33% (per hit)\nHundes tus cuchillas en un enemigo, infliges {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de daño y haces que reciba un x8% más de daño mientras está empalado. Después de 1.5 segundos, las cuchillas vuelven a ti e infligen {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño a los enemigos que perforan.\n\nLos puntos de combo aumentan el daño y otorgan una bonificación de velocidad de movimiento:\n• 1 punto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% de daño, un +20% de bonificación\n• 2 puntos: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño, un +40% de bonificación\n• 3 puntos: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% de daño, un +60% de bonificación\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Coût en énergie: {#}\nChances d'obtenir un coup de chance: 33% (per hit)\nVous empalez une cible avec vos lames et infligez {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% points de dégâts. Tant que la cible est empalée, vous lui infligez x8% de dégâts supplémentaires. Après 1.5 s, vos lames reviennent vers vous en transperçant les adversaires, infligeant {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% points de dégâts.\n\nLes points de combo augmentent les dégâts et confèrent un bonus à la vitesse de déplacement :\n• 1 point: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% points de dégâts, bonus de +20%\n• 2 points: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% points de dégâts, bonus de +40%\n• 3 points: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% points de dégâts, bonus de +60%.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: 33% (per hit)\nImpali un nemico con le tue lame, infliggendo {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% danni e facendogli subire il x8% di danni aggiuntivi mentre è impalato. Dopo 1.5 s, le lame tornano da te, trapassando i nemici e infliggendo {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% danni.\n\nI punti combo aumentano i danni e la velocità di movimento:\n• 1 punto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% danni, +20% bonus\n• 2 punti: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% danni, +40% bonus\n• 3 punti: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% danni, +60% bonus\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: 33% (per hit)\n敵に刃を突き立て、{45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%のダメージを与える。刃が刺さっている間、自身がその敵に与えるダメージがx8%増加する。1.5秒後、刃は敵を貫通して{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%のダメージを与えながら手元に戻って来る。\n\nコンボポイントでダメージ上昇効果と移動速度ボーナスを得る:\n• 1ポイント: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}%ダメージ、ボーナス量+20%\n• 2ポイント: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%ダメージ、ボーナス量+40%\n• 3ポイント: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}%ダメージ、ボーナス量+60%\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: 33% (per hit)\n적을 칼날로 꿰뚫어 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}%의 피해를 주고, 꿰뚫려 있는 동안 대상에게 주는 피해를 x8% 증가시킵니다. 1.5초 후에는 칼날이 돌아오면서 적을 관통하여 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%의 피해를 줍니다.\n\n연계 점수에 따라 피해가 증가하고 이동 속도가 증가합니다.\n• 1점: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}%의 피해, 이동 속도 +20% 증가\n• 2점: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%의 피해, 이동 속도 +40% 증가\n• 3점: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}%의 피해, 이동 속도 +60% 증가\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: 33% (per hit)\nNabijasz wroga na swoje ostrza, zadając mu {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% pkt. obrażeń i sprawiając, że otrzymuje w tym stanie o x8% większe obrażenia. Po 1.5 sek. ostrza wracają do ciebie, przebijając wrogów i zadając im {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają zadawane obrażenia i zapewniają premię do szybkości ruchu:\n • 1 pkt.: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% pkt. obrażeń, +20% premii.\n • 2 pkt.: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% pkt. obrażeń, +40% premii.\n • 3 pkt.: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% pkt. obrażeń, +60% premii.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: 33% (per hit)\nEmpala um inimigo com suas lâminas, causando {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% de dano e fazendo-o receber 8% de dano aumentado de você enquanto empalado. Após 1.5 segundos, as lâminas retornam até você, perfurando inimigos e causando {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de dano.\n\nPontos de combo aumentam o dano e concedem um bônus de velocidade de movimento:\n • 1 ponto: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% de dano, 20% de bônus\n • 2 pontos: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de dano, 40% de bônus\n • 3 pontos: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% de dano, +60% de bônus\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удара: 33% (per hit)\nВы пронзаете противника клинками, нанося {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% ед. урона. Пока действует эффект, вы наносите цели на x8% больше урона. Через 1.5 сек. клинки возвращаются к вам, пробивая противников и нанося им {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% ед. урона.\n\nДополнительные приемы серии увеличивают урон и повышают скорость передвижения:\n• 1 прием: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% ед. урона, +20% бонус\n• 2 приема: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% ед. урона, +40% бонус\n• 3 приема: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% ед. урона, +60% бонус\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "能量消耗: {#}\n幸运一击几率: 33% (per hit)\n用你的剑刃刺穿一名敌人, 造成 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% 点伤害并使其在被刺穿时受到来自你的伤害提高 x8%。 1.5 秒后, 剑刃会回到你身边, 穿透敌人并造成 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% 点伤害。\n\n连击点数会提高伤害并给予移动速度加成:\n• 1点: {58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% 点伤害, +20% 加成\n• 2点: {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% 点伤害, +40% 加成\n• 3点: {85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% 点伤害, +60% 加成\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "能量消耗:{#}\n幸運觸發機率: 33% (per hit)\n將刀刃插入敵人體內,造成 {45/49.5/54/58.5/63/67.5/72/76.5/81/85.5}% 點傷害,並在插入期間使你對其造成的傷害提高 x8%。這些刀刃會在 1.5 秒後回到你身邊,貫穿敵人造成 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% 點傷害。\n\n連擊點數會提高傷害並賦予移動速度加成:\n• 1 點:{58.5/64.4/70.2/76/81.9/87.8/93.6/99.4/105.3/111.2}% 點傷害,+20% 移動速度加成\n• 2 點:{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% 點傷害,+40% 移動速度加成\n• 3 點:{85.5/94/102.6/111.2/119.7/128.2/136.8/145.4/153.9/162.4}% 點傷害,+60% 移動速度加成\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 20,
		maxPoints: 5,
		values: [ "30" ],
		x: -394.26,
		y: -207.555
	},
	"Enhanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Twisting Blades", "Advanced Twisting Blades", "Improved Twisting Blades" ],
		description: `Twisting Blades deals x30% increased damage when returning.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserte Schraubklingen",
			"esES": "Hojas retorcidas mejoradas",
			"esMX": "Cuchillas Inteligentes Potenciadas",
			"frFR": "Lames sournoises renforcées",
			"itIT": "Lame Serpeggianti Rinforzate",
			"jaJP": "ツイストブレード(強化版)",
			"koKR": "강화된 회전 칼날",
			"plPL": "Wzmocnione Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas Aperfeiçoadas",
			"ruRU": "Усиленные вонзающиеся клинки",
			"zhCN": "强化回旋刀锋",
			"zhTW": "強化扭轉迴刃"
},
		descriptionLocalized: {
			"deDE": "Schraubklingen verursachen bei der Rückkehr x30% mehr Schaden.\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Las hojas retorcidas infligen un x30% más de daño al volver.\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Cuchillas Inteligentes inflige un x30% más de daño cuando las cuchillas regresan.\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Vos Lames sournoises infligent x30% de dégâts supplémentaires lorsqu'elles reviennent vers vous.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Le Lame Serpeggianti infliggono il x30% di danni aggiuntivi quando tornano indietro.\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈ツイストブレード〉が戻って来る際に与えるダメージがx30%増加する。\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "회전 칼날이 돌아오면서 주는 피해가 x30% 증가합니다.\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "W drodze powrotnej Wirujące Ostrza zadają obrażenia zwiększone o x30%.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Lâminas Retorcidas causam 30% de dano aumentado ao retornarem.\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Возвращаясь к вам, \"Вонзающиеся клинки\" наносят на x30% больше урона.\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "回旋刀锋返回时造成的伤害提高 x30%。\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "扭轉迴刃返回時造成的傷害提高 x30%。\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 21,
		maxPoints: 1,
		x: -673.39,
		y: -339.63
	},
	"Advanced Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `When your Twisting Blades return, your active Cooldowns are reduced by 0.25 second per enemy they passed through, up to 3 seconds.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickelte Schraubklingen",
			"esES": "Hojas retorcidas avanzadas",
			"esMX": "Cuchillas Inteligentes Avanzadas",
			"frFR": "Lames sournoises avancées",
			"itIT": "Lame Serpeggianti Avanzate",
			"jaJP": "ツイストブレード(高度)",
			"koKR": "고급 회전 칼날",
			"plPL": "Zaawansowane Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas Avançadas",
			"ruRU": "Передовые вонзающиеся клинки",
			"zhCN": "进阶回旋刀锋",
			"zhTW": "進階扭轉迴刃"
},
		descriptionLocalized: {
			"deDE": "Wenn Eure Schraubklingen zurückkehren, werden Eure aktiven Abklingzeiten um 0.25 Sek. pro durchschlagenem Gegner reduziert, bis maximal 3 Sek.\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Cuando vuelven las hojas retorcidas, tus tiempos de reutilización activos se reducen 0.25 s por cada enemigo atravesado, hasta un máximo de 3 s.\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Cuando tus Cuchillas Inteligentes vuelven, tus recuperaciones se reducen 0.25 segundo por cada enemigo que atravesaron, hasta un máximo de 3 segundos.\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Lorsque vos Lames sournoises reviennent, vos temps de recharge actifs sont réduits de 0.25 s par cible traversée par les lames, jusqu'à 3 s au maximum.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Quando le tue Lame Serpeggianti tornano indietro, i tuoi tempi di recupero attivi si riducono di 0.25 s per ogni nemico trapassato, fino a 3 s.\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈ツイストブレード〉の戻り時にブレードが触れた敵1体ごとに、クールダウンが0.25秒短縮される。短縮量は最大で3秒。\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "자신의 회전 칼날이 돌아오면 칼날이 통과한 적 하나당 재사용 대기 중인 기술들의 재사용 대기시간이 0.25초만큼, 최대 3초까지 감소합니다.\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Kiedy twoje Wirujące Ostrza wracają do ciebie, twoje aktywne czasy odnowienia zostają skrócone o 0.25 sek. za każdego wroga, przez którego przeniknęły, do maksymalnie 3 sek.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Quando suas Lâminas Retorcidas retornam, suas recargas ativas são reduzidas em 0.25 segundos por inimigo atravessado por elas, até 3 segundos.\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда \"Вонзающиеся клинки\" возвращаются к вам, время восстановления умений сокращается на 0.25 сек. за каждого противника, через которого они прошли, вплоть до 3 сек.\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "回旋刀锋返回时每穿过一名敌人, 你的剩余冷却时间缩短 0.25 秒, 最多缩短 3 秒。\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "扭轉迴刃在返回途中每穿過一個敵人,就會使現有冷卻時間縮短 0.25 秒,最多縮短 3 秒。\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 22,
		maxPoints: 1,
		x: -925,
		y: -337.045
	},
	"Improved Twisting Blades": {
		baseSkill: "Twisting Blades",
		connections: [ "Enhanced Twisting Blades" ],
		description: `Enemies are Dazed while impaled with Twisting Blades.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübte Schraubklingen",
			"esES": "Hojas retorcidas perfeccionadas",
			"esMX": "Cuchillas Inteligentes Mejoradas",
			"frFR": "Lames sournoises améliorées",
			"itIT": "Lame Serpeggianti Migliorato",
			"jaJP": "ツイストブレード(改良)",
			"koKR": "향상된 회전 칼날",
			"plPL": "Ulepszone Wirujące Ostrza",
			"ptBR": "Lâminas Retorcidas Aprimoradas",
			"ruRU": "Улучшенные вонзающиеся клинки",
			"zhCN": "强力回旋刀锋",
			"zhTW": "改良扭轉迴刃"
},
		descriptionLocalized: {
			"deDE": "Gegner sind benommen, solange sie von Schraubklingen aufgespießt sind.\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Los enemigos quedan atontados mientras están empalados por Hojas retorcidas.\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Los enemigos quedan atontados cuando están empalados por Cuchillas Inteligentes.\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Les cibles empalées par vos Lames sournoises sont hébétées.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "I nemici sono affetti da Frastornamento quando vengono colpiti da Lame Serpeggianti.\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈ツイストブレード〉に貫かれている敵は朦朧状態になる。\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "회전 칼날에 꿰뚫린 적이 멍해짐 상태가 됩니다.\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Wrogowie są oszołomieni, kiedy przebijają ich Wirujące Ostrza.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Inimigos são atingidos por torpor enquanto empalados por Lâminas Retorcidas.\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Пока \"Вонзающиеся клинки\" пронзают цель, на нее действует головокружение.\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "回旋刀锋穿透敌人时使其眩晕。\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "被扭轉迴刃插中的敵人會暈眩。\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 23,
		maxPoints: 1,
		x: -701.45,
		y: -465.235
	},
	"Flurry": {
		connections: [ "Enhanced Flurry", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: 10% (per hit)
Unleash a flurry of stabs and slashes, striking enemies in front of you 4 times and dealing a total of {60/66/72/78/84/90/96/102/108/114}% damage to each.

Combo Points increase damage and grant an Attack Speed bonus:
• 1 Point: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% damage, +15% bonus
• 2 Points: {90/99/108/117/126/135/144/153/162/171}% damage, +30% bonus
• 3 Points: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% damage, +45% bonus

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Klingensturm",
			"esES": "Aluvión",
			"esMX": "Ráfaga",
			"frFR": "Rafale",
			"itIT": "Raffica",
			"jaJP": "連続斬り",
			"koKR": "연타",
			"plPL": "Szybkie Natarcie",
			"ptBR": "Turbilhão",
			"ruRU": "Шквал",
			"zhCN": "快刀乱刺",
			"zhTW": "狂襲"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: 10% (per hit)\nEntfesselt einen Sturm aus Klingenhieben, der Gegner vor Euch 4-mal trifft und jedem Gegner insgesamt {60/66/72/78/84/90/96/102/108/114}% Schaden zufügt.\n\nKombopunkte erhöhen den Schaden und verleihen einen Angriffsgeschwindigkeitsbonus:\n • 1 Punkt: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% Schaden, +15% Bonus\n • 2 Punkte: {90/99/108/117/126/135/144/153/162/171}% Schaden, +30% Bonus\n • 3 Punkte: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% Schaden, +45% Bonus\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: 10% (per hit)\nEjecutas un aluvión de puñaladas y tajos para golpear 4 veces a los enemigos frente a ti e infligir un total de {60/66/72/78/84/90/96/102/108/114}% de daño a cada uno.\n\nLos puntos de combo aumentan el daño y otorgan un bonus de velocidad de ataque:\n• 1 punto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño y un +15% de bonus\n• 2 puntos: {90/99/108/117/126/135/144/153/162/171}% de daño y un +30% de bonus\n• 3 puntos: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% de daño y un +45% de bonus\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: 10% (per hit)\nDesatas una ráfaga de puñaladas y cuchilladas que golpean a los enemigos frente a ti 4 veces e infligen un total de {60/66/72/78/84/90/96/102/108/114}% de daño a cada uno.\n\nLos puntos de combo aumentan el daño y otorgan una bonificación de velocidad de ataque:\n• 1 punto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de daño, +15% de bonificación\n• 2 puntos: {90/99/108/117/126/135/144/153/162/171}% de daño, +30% de bonificación\n• 3 puntos: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% de daño, +45% de bonificación\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Coût en énergie: {#}\nChances d'obtenir un coup de chance: 10% (per hit)\nVous déclenchez une rafale de coups et frappez les adversaires devant vous 4 fois, ce qui inflige {60/66/72/78/84/90/96/102/108/114}% points de dégâts au total à chaque cible.\n\nLes points de combo augmentent les dégâts et confèrent un bonus à la vitesse d'attaque :\n• 1 point: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% points de dégâts, bonus de +15%\n• 2 points: {90/99/108/117/126/135/144/153/162/171}% points de dégâts, bonus de +30%\n• 3 points: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% points de dégâts, bonus de +45%\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: 10% (per hit)\nScateni una raffica di colpi e fendenti, che colpisce i nemici frontali per 4 volte e infligge a ciascuno un totale di {60/66/72/78/84/90/96/102/108/114}% danni.\n\nI punti combo aumentano i danni e forniscono un bonus del alla velocità d'attacco:\n• 1 punto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% danni, bonus del +15%\n• 2 punti: {90/99/108/117/126/135/144/153/162/171}% danni, bonus del +30%\n• 3 punti: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% danni, bonus del +45%\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: 10% (per hit)\n高速の刺突と斬撃を繰り出して前方の敵を4回攻撃し、敵それぞれに合計で{60/66/72/78/84/90/96/102/108/114}%のダメージを与える。\n\nコンボポイントでダメージが上昇し、の攻撃速度ボーナスを得る:\n• 1ポイント: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%ダメージ、+15%のボーナス\n• 2ポイント: {90/99/108/117/126/135/144/153/162/171}%ダメージ、+30%のボーナス\n• 3ポイント: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}%ダメージ、+45%のボーナス\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: 10% (per hit)\n전방의 적들을 4번 마구 찌르고 베어 각각의 적에게 총 {60/66/72/78/84/90/96/102/108/114}%의 피해를 줍니다.\n\n연계 점수에 따라 피해가 증가하고 공격 속도가 증가합니다.\n• 1점: 피해 {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}%, 추가 +15%\n• 2점: 피해 {90/99/108/117/126/135/144/153/162/171}%, 추가 +30%\n• 3점: 피해 {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}%, 추가 +45%\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: 10% (per hit)\nWyzwalasz nawałnicę cięć i ciosów, atakując wrogów przed tobą 4 razy i zadając każdemu z nich {60/66/72/78/84/90/96/102/108/114}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają zadawane obrażenia i zapewniają premię do szybkości ataku:\n• 1 pkt.: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% pkt. obrażeń, premia +15% sek.\n• 2 pkt.: {90/99/108/117/126/135/144/153/162/171}% pkt. obrażeń, premia +30% sek.\n• 3 pkt.: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% pkt. obrażeń, premia +45% sek.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: 10% (per hit)\nLibera um turbilhão de punhaladas e cortes, atingindo inimigos à sua frente 4 vezes e causando um total de {60/66/72/78/84/90/96/102/108/114}% de dano a cada um.\n\nPontos de combo aumentam o dano e concedem um bônus de velocidade de ataque:\n • 1 ponto: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% de dano, +15% de bônus\n• 2 pontos: {90/99/108/117/126/135/144/153/162/171}% de dano, +30% de bônus\n• 3 pontos: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% de dano, +45% de bônus\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удар: 10% (per hit)\nВы обрушиваете на противников перед собой шквал из 4 рубящих и режущих ударов, в общей сложности нанося {60/66/72/78/84/90/96/102/108/114}% ед. урона каждой цели.\n\nДополнительные приемы серии увеличивают урон и повышают скорость атаки:\n• 1 прием: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% ед. урона, +15% к скорости атаки\n• 2 приема: {90/99/108/117/126/135/144/153/162/171}% ед. урона, +30% к скорости атаки\n• 3 приема: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% ед. урона, +45% к скорости атаки\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "能量消耗: {#}\n幸运一击几率: 10% (per hit)\n连续刺击并劈砍前方的敌人 4 次, 造成总计 {60/66/72/78/84/90/96/102/108/114}% 点伤害。\n\n连击点数会提高伤害并给予攻击速度加成:\n• 1点: {75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% 点伤害, +15% 加成\n• 2点: {90/99/108/117/126/135/144/153/162/171}%伤害, +30% 加成\n• 3点: {105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% 点伤害, +45% 加成\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "能量消耗:{#}\n幸運觸發機率: 10% (per hit)\n對你前方的敵人施展連環刺擊與斬擊 4 次,對每一個敵人造成共 {60/66/72/78/84/90/96/102/108/114}% 點傷害。\n\n連擊點數會提高傷害並賦予攻擊速度加成:\n• 1 點:{75/82.5/90/97.5/105/112.5/120/127.5/135/142.5}% 點傷害,+15% 加成\n• 2 點:{90/99/108/117/126/135/144/153/162/171}% 點傷害,+30% 加成\n• 3 點:{105/115.5/126/136.5/147/157.5/168/178.5/189/199.5}% 點傷害,+45% 加成\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 24,
		maxPoints: 5,
		values: [ "25" ],
		x: -382.935,
		y: 182.375
	},
	"Enhanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Flurry", "Improved Flurry", "Advanced Flurry" ],
		description: `Each time Flurry damages a Crowd Controlled or Vulnerable enemy, you are Healed for 1% of your Maximum Life, up to 12% Maximum Life per cast.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserter Klingensturm",
			"esES": "Aluvión mejorado",
			"esMX": "Ráfaga Potenciada",
			"frFR": "Rafale renforcée",
			"itIT": "Raffica Rinforzata",
			"jaJP": "連続斬り(強化版)",
			"koKR": "강화된 연타",
			"plPL": "Wzmocnione Szybkie Natarcie",
			"ptBR": "Turbilhão Aperfeiçoado",
			"ruRU": "Усиленный шквал",
			"zhCN": "强化快刀乱刺",
			"zhTW": "強化狂襲"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Klingensturm einem Gegner Schaden zufügt, der unter Kontrollverlusteffekten leidet oder verwundbar ist, werdet Ihr um 1% Eures maximalen Lebens geheilt, bis zu 12% maximalem Leben pro Einsatz.\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Cada vez que Aluvión inflige daño a un enemigo vulnerable o afectado por control de masas, te curas un 1% de tu vida máxima, hasta un máximo de un 12% de vida máxima por lanzamiento.\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Cada vez que Ráfaga inflige daño a un enemigo bajo los efectos de control de multitudes o vulnerable, te sanas un 1% de tu vida máxima, hasta un 12% de vida máxima por lanzamiento.\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Chaque fois que Rafale inflige des dégâts à une cible vulnérable ou subissant un effet de perte de contrôle, vous récupérez 1% de votre maximum de points de vie, jusqu'à un maximum de 12% de vos points de vie par utilisation.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Ogni volta che Raffica infligge danni a un nemico sotto effetti debilitanti o vulnerabile, ti cura del 1% della tua Vita massima, fino a un massimo del 12% della Vita massima per utilizzo.\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "操作妨害効果を受けているか脆弱状態の敵に対して〈連続斬り〉でダメージを与えるたびに、ライフ最大値の1%にあたるのライフを回復する。一度の使用での回復上限は、ライフ最大値の12%にあたる。\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "연타로 군중 제어 또는 취약 상태의 적에게 피해를 줄 때마다 자신의 생명력을 최대 생명력의 1%만큼, 시전당 최대 12%까지 회복합니다.\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Za każdym razem, gdy Szybkie Natarcie zadaje obrażenia wrogowi odsłoniętemu albo o ograniczonej kontroli, odzyskujesz 1% maksymalnego zdrowia, aż do 12% za każde użycie umiejętności.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Sempre que Turbilhão causa dano a um inimigo sob controle de grupo ou vulnerável, você recebe cura de 1% da sua vida máxima, até 12% da vida máxima por lançamento.\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда \"Шквал\" поражает уязвимого противника или цель под действием эффектов контроля, вы восполняете 1% максимального запаса здоровья вплоть до 12% максимального запаса здоровья за одно применение.\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "每次快刀乱刺对一名被群控或处于易伤状态的敌人造成伤害, 你会恢复 1%生命上限, 单次施法最多恢复 12%生命上限。\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "每次狂襲對受到控場或易傷的敵人造成傷害時,會使你恢復生命值上限的 1%,每次施放最多恢復生命值上限的 12%。\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 25,
		maxPoints: 1,
		x: -659.145,
		y: 319.86
	},
	"Improved Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `If Flurry hits any Vulnerable enemy it will make all enemies hit by that cast Vulnerable for 3 seconds.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübter Klingensturm",
			"esES": "Aluvión perfeccionado",
			"esMX": "Ráfaga Mejorada",
			"frFR": "Rafale améliorée",
			"itIT": "Raffica Migliorata",
			"jaJP": "連続斬り(改良)",
			"koKR": "향상된 연타",
			"plPL": "Ulepszone Szybkie Natarcie",
			"ptBR": "Turbilhão Aprimorado",
			"ruRU": "Улучшенный шквал",
			"zhCN": "强力快刀乱刺",
			"zhTW": "改良狂襲"
},
		descriptionLocalized: {
			"deDE": "Wenn Klingensturm einen verwundbaren Gegner trifft, werden alle Gegner, die von diesem Einsatz getroffen werden, 3 Sek. lang verwundbar.\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Si Aluvión golpea a cualquier enemigo vulnerable, volverá vulnerables durante 3 s a todos los enemigos golpeados por el lanzamiento.\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Si Ráfaga golpea a algún enemigo vulnerable, volverá vulnerables a todos los enemigos golpeados por ese lanzamiento durante 3 segundos.\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Si Rafale touche une cible vulnérable, toutes les cibles qu'elle touche lors de cette utilisation deviennent vulnérables pendant 3 s.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Se Raffica colpisce un nemico vulnerabile renderà tutti i nemici colpiti da quel lancio vulnerabili per 3 s.\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈連続斬り〉が脆弱状態の敵に命中すると、その際に命中していたすべての敵を3秒間にわたり脆弱状態にする。\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "연타가 취약 상태의 적에게 적중하면 해당 기술을 시전하여 적중한 모든 적이 3초 동안 취약 상태가 됩니다.\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Jeśli Szybkie Natarcie trafi odsłoniętego wroga, wszyscy wrogowie trafieni tym użyciem staną się odsłonięci na 3 sek.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Se Turbilhão atingir qualquer inimigo vulnerável, ele deixará todos os inimigos atingidos por esse lançamento vulneráveis por 3 segundos.\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда \"Шквал\" поражает уязвимого противника, все противники, пораженные за это применение умения, становятся уязвимыми на 3 сек.\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "如果快刀乱刺命中任意易伤的敌人, 其会使所有被该次技能命中的敌人都陷入易伤状态, 持续 3 秒。\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "若狂襲擊中任何易傷的敵人,其會使該次施放所擊中的所有敵人均易傷,持續 3 秒。\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 26,
		maxPoints: 1,
		x: -919.385,
		y: 329.755
	},
	"Advanced Flurry": {
		baseSkill: "Flurry",
		connections: [ "Enhanced Flurry" ],
		description: `Evading through an enemy will cause your next Flurry to Stun enemies for 2.5 seconds.

Tags: Core, Cutthroat, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickelter Klingensturm",
			"esES": "Aluvión avanzado",
			"esMX": "Ráfaga Avanzada",
			"frFR": "Rafale avancée",
			"itIT": "Raffica Avanzata",
			"jaJP": "連続斬り(高度)",
			"koKR": "고급 연타",
			"plPL": "Zaawansowane Szybkie Natarcie",
			"ptBR": "Turbilhão Avançado",
			"ruRU": "Передовой шквал",
			"zhCN": "高级快刀乱刺",
			"zhTW": "進階狂襲"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr durch einen Gegner hindurch entrinnt, wird Euer nächster Klingensturm Gegner 2.5 Sek. lang betäuben.\n\nTags: Kern, Meucheln, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Evadirte a través de un enemigo hace que tu siguiente Aluvión aturda a los enemigos durante 2.5 s.\n\nTags: Principal, Degollación, Imbuible, Daño, Física, Energía.",
			"esMX": "Atravesar a un enemigo para evadir hará que tu siguiente Ráfaga aturda a los enemigos durante 2.5 segundos.\n\nTags: Principal, Degollador, Imbuible, Daño, Física, Energía.",
			"frFR": "Après avoir effectué une esquive en traversant une cible, votre prochaine Rafale étourdit les cibles pendant 2.5 s.\n\nTags: Principale, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Schivando attraverso un nemico il tuo prossimo utilizzo di Raffica stordirà i nemici per 2.5 s.\n\nTags: Primaria, Sgozzamento, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "敵をすり抜けると、次に使用する〈連続斬り〉が敵を2.5秒間にわたりスタンさせる。\n\nTags: コア, 喉かき, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "피하기로 적을 통과하면 다음 연타가 적을 2.5초 동안 기절시킵니다.\n\nTags: 핵심, 암살, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Przeniknięcie przez wroga przy użyciu Odskoku sprawi, że twoje następne Szybkie Natarcie ogłuszy wrogów na 2.5 sek.\n\nTags: Główne, Napaść, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Evadir através de um inimigo fará seu próximo Turbilhão atordoar inimigos por 2.5 segundos.\n\nTags: Principal, Degola, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда вы уклоняетесь через противника, ваш следующий \"Шквал\" оглушает противников на 2.5 сек.\n\nTags: Основное, Головорез, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "闪避穿过敌人攻击将使你的下一个快刀乱刺击晕敌人 2.5 秒。\n\nTags: 核心, 刺杀, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "閃避穿過敵人會使你的下一個狂襲擊昏敵人 2.5 秒。\n\nTags: 核心, 割喉, 可灌注, 傷害, 物理, 能量."
},
		id: 27,
		maxPoints: 1,
		x: -685.845,
		y: 462.11
	},
	"Penetrating Shot": {
		connections: [ "Enhanced Penetrating Shot", "Core" ],
		description: `Energy Cost: 35
Lucky Hit Chance: 50% (per hit)
Fire an arrow that pierces through all enemies in a line, dealing {70/77/84/91/98/105/112/119/126/133}% damage.

Combo Points increase damage and improve Lucky Hit Chance:
• 1 Point: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% damage, +10% chance
• 2 Points: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% damage, +20% chance
• 3 Points: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% damage, +30% chance

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Durchschlagender Schuss",
			"esES": "Disparo penetrante",
			"esMX": "Disparo Penetrante",
			"frFR": "Tir pénétrant",
			"itIT": "Tiro Penetrante",
			"jaJP": "貫通矢",
			"koKR": "꿰뚫는 사격",
			"plPL": "Przebijający Strzał",
			"ptBR": "Disparo Perfurante",
			"ruRU": "Пробивающий выстрел",
			"zhCN": "穿透射击",
			"zhTW": "穿透射擊"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: 35\nGlückstrefferchance: 50% (per hit)\nSchießt einen Pfeil ab, der alle Gegner in einer Linie durchschlägt und {70/77/84/91/98/105/112/119/126/133}% Schaden verursacht.\n\nKombopunkte erhöhen den Schaden und verbessern die Glückstrefferchance:\n • 1 Punkt: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% Schaden, Chance von +10%\n • 2 Punkte: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% Schaden, Chance von +20%\n • 3 Punkte: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% Schaden, Chance von +30%\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Coste de energía: 35\nProbabilidad de golpe de suerte: 50% (per hit)\nDisparas una flecha que perfora a todos los enemigos situados en una línea e inflige {70/77/84/91/98/105/112/119/126/133}% de daño.\n\nLos puntos de combo aumentan el daño y la probabilidad de golpe de suerte:\n• 1 punto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% de daño y un +10% de probabilidad\n• 2 puntos: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% de daño y un +20% de probabilidad\n• 3 puntos: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% de daño y un +30% de probabilidad\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Costo de Energía: 35\nProbabilidad de golpe afortunado: 50% (per hit)\nDisparas una flecha que perfora a todos los enemigos en una línea y les inflige {70/77/84/91/98/105/112/119/126/133}% de daño.\n\nLos puntos de combo aumentan el daño y mejoran la probabilidad de golpe afortunado:\n• 1 punto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% de daño, +10% de probabilidad\n• 2 puntos: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% de daño, +20% de probabilidad\n• 3 puntos: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% de daño, +30% de probabilidad\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Coût en énergie: 35\nChances d'obtenir un coup de chance: 50% (per hit)\nVous tirez une flèche qui transperce toutes les cibles adverses en ligne droite et leur inflige {70/77/84/91/98/105/112/119/126/133}% points de dégâts.\n\nLes points de combo augmentent les dégâts et confèrent un bonus aux chances d'obtenir un coup de chance :\n• 1 point: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% points de dégâts, bonus de +10%\n• 2 points: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% points de dégâts, bonus de +20%\n• 3 point: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% points de dégâts, bonus de +30%\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Costo in energia: 35\nProbabilità di colpo fortunato: 50% (per hit)\nScagli una freccia che trapassa i nemici lungo una linea retta, infliggendo {70/77/84/91/98/105/112/119/126/133}% danni.\n\nI punti combo aumentano i danni e migliorano le probabilità di colpo fortunato:\n• 1 punto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% danni, +10% probabilità\n• 2 punti: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% danni, +20% probabilità\n• 3 punti: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% danni, +30% probabilità\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "エネルギー消費量: 35\n幸運の一撃発生率: 50% (per hit)\n直線上にいるすべての敵を貫通する矢を放ち、{70/77/84/91/98/105/112/119/126/133}%のダメージを与える。\n\nコンボポイントでダメージと幸運の一撃発生率が増加する:\n• 1ポイント: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}%ダメージ、発生率+10%\n• 2ポイント: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}%ダメージ、発生率+20%\n• 3ポイント: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}%ダメージ、発生率+30%\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "소모: 기력 35\n행운의 적중 확률: 50% (per hit)\n직선상의 모든 적을 관통하는 화살을 발사하여 {70/77/84/91/98/105/112/119/126/133}%의 피해를 줍니다.\n\n연계 점수에 따라 피해와 행운의 적중 확률이 증가합니다.\n• 1점: 피해 {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}%, 확률 +10%\n• 2점: 피해 {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}%, 확률 +20%\n• 3점: 피해 {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}%, 확률 +30%\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Koszt: 35 pkt. energii\nSzansa na szczęśliwy traf: 50% (per hit)\nWypuszczasz strzałę, która przebija wszystkich wrogów w linii prostej, zadając im {70/77/84/91/98/105/112/119/126/133}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają obrażenia i szansę na szczęśliwy traf:\n• 1 pkt.: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% pkt. obrażeń, +10% szans.\n • 2 pkt.: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% pkt. obrażeń, +20% szans.\n • 3 pkt.: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% pkt. obrażeń, +30% szans.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Custo de energia: 35\nChance de Golpe de Sorte: 50% (per hit)\nDispara uma flecha que atravessa todos os inimigos em uma linha, causando {70/77/84/91/98/105/112/119/126/133}% de dano.\n\nPontos de combo aumentam o dano e melhoram a chance de Golpe de Sorte:\n• 1 ponto: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% de dano, +10% de chance\n• 2 pontos: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% de dano, +20% de chance\n• 3 pontos: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% de dano, +30% de chance\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Затраты энергии: 35\nВероятность удачного удара: 50% (per hit)\nВы выпускаете стрелу, пронзающую всех противников на линии и наносящую {70/77/84/91/98/105/112/119/126/133}% ед. урона.\n\nДополнительные приемы серии увеличивают урон и повышают вероятность удачного удара:\n• 1 прием: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% ед. урона, +10% к вероятности\n• 2 приема: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% ед. урона, +20% к вероятности\n• 3 приема: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% ед. урона, +30% к вероятности\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "能量消耗: 35\n幸运一击几率: 50% (per hit)\n发射一支会穿透一条直线上所有敌人的箭矢, 造成 {70/77/84/91/98/105/112/119/126/133}% 点伤害。\n\n连击点数会提高伤害与幸运一击几率:\n• 1点: {91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% 点伤害, +10% 几率\n• 2点: {112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% 点伤害, +20% 几率\n• 3点: {133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% 点伤害, +30% 几率\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "能量消耗:35\n幸運觸發機率: 50% (per hit)\n發射貫穿路線上所有敵人的箭矢,造成 {70/77/84/91/98/105/112/119/126/133}% 點傷害。\n\n連擊點數會提高傷害與幸運觸發機率:\n• 1 點:{91/100.1/109.2/118.3/127.4/136.5/145.6/154.7/163.8/172.9}% 點傷害,+10% 機率\n• 2 點:{112/123.2/134.4/145.6/156.8/168/179.2/190.4/201.6/212.8}% 點傷害,+20% 機率\n • 3 點:{133/146.3/159.6/172.9/186.2/199.5/212.8/226.1/239.4/252.7}% 點傷害,+30% 機率\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 28,
		maxPoints: 5,
		x: 4.86,
		y: 290.085
	},
	"Enhanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Penetrating Shot", "Advanced Penetrating Shot", "Improved Penetrating Shot" ],
		description: `Penetrating Shot deals x10% increased damage per enemy it pierces.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbesserter Durchschlagender Schuss",
			"esES": "Disparo penetrante mejorado",
			"esMX": "Disparo Penetrante Potenciado",
			"frFR": "Tir pénétrant renforcé",
			"itIT": "Tiro Penetrante Rinforzato",
			"jaJP": "貫通矢(強化版)",
			"koKR": "강화된 꿰뚫는 사격",
			"plPL": "Wzmocniony Przebijający Strzał",
			"ptBR": "Disparo Perfurante Aperfeiçoado",
			"ruRU": "Усиленный пробивающий выстрел",
			"zhCN": "强化穿透射击",
			"zhTW": "強化穿透射擊"
},
		descriptionLocalized: {
			"deDE": "Durchschlagender Schuss verursacht x10% mehr Schaden pro durchschlagenem Gegner.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Disparo penetrante inflige un x10% más de daño por cada enemigo que atraviesa.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Disparo Penetrante inflige un x10% más de daño por cada enemigo que perfora.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Tir pénétrant inflige x10% de dégâts supplémentaires par cible transpercée.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Tiro Penetrante infligge il x10% di danni aggiuntivi per ogni nemico che trapassa.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "敵1体を貫くごとに〈貫通矢〉の与えるダメージがx10%増加する。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "꿰뚫는 사격이 관통하는 적 하나당 공격력이 x10% 증가합니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Przebijający Strzał zadaje obrażenia zwiększone o x10% za każdego przebitego wroga.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Disparo Perfurante causa 10% de dano aumentado por inimigo perfurado.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Урон от \"Пробивающего выстрела\" увеличивается на x10% за каждого пронзенного противника.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "穿透射击每穿透一名敌人, 造成的伤害提高 x10%。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "穿透射擊每貫穿一個敵人,造成的傷害提高 x10%。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 29,
		maxPoints: 1,
		x: 3.43,
		y: 491.945
	},
	"Advanced Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `When cast with full Energy, Penetrating Shot will Slow all enemies it hits by 50% for 3 seconds. Elite enemies will also be Knocked Down for 1.5 seconds.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickelter Durchschlagender Schuss",
			"esES": "Disparo penetrante avanzado",
			"esMX": "Disparo Penetrante Avanzado",
			"frFR": "Tir pénétrant avancé",
			"itIT": "Tiro Penetrante Avanzato",
			"jaJP": "高度〈貫通ショット〉",
			"koKR": "고급 꿰뚫는 사격",
			"plPL": "Zaawansowany Przebijający Strzał",
			"ptBR": "Disparo Perfurante Avançado",
			"ruRU": "Передовой пробивающий выстрел",
			"zhCN": "进阶穿透射击",
			"zhTW": "進階穿透射擊"
},
		descriptionLocalized: {
			"deDE": "Beim Einsatz mit voller Energie wird Durchschlagender Schuss alle getroffenen Gegner 3 Sek. um 50% verlangsamen. Elitegegner werden außerdem 1.5 Sek. lang niedergeschlagen.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Cuando se lanza con la energía al máximo, Disparo penetrante ralentizará a todos los enemigos que golpee un 50% durante 3 s. Además, los enemigos de élite quedarán derribados durante 1.5 s.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Lanzar Disparo Penetrante con la Energía al máximo ralentizará a todos los enemigos golpeados un 50% durante 3 segundos. Los enemigos de Élite también serán derribados durante 1.5 segundos.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Si vous lancez Tir pénétrant alors que votre énergie est au maximum, il ralentira les adversaires qu'il touche de 50% pendant 3 s. Il renversera également les élites pendant 1.5 s.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Quando viene lanciato con l'energia al massimo, Tiro Penetrante rallenta tutti i nemici che colpisce del 50% per 3 s. I nemici élite inoltre cadranno a terra per 1.5 s.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "エネルギー満タン時に使用した〈貫通矢〉は、命中したすべての敵の移動速度を3秒間にわたり50%低下させる。エリートの敵に対しては、1.5秒間にわたりノックダウン状態にする効果が加わる。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "기력이 가득 차 있을 때 꿰뚫는 사격이 적중한 모든 적을 3초 동안 50% 감속시킵니다. 또한 정예 적은 1.5초 동안 넘어뜨립니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Jeśli Przebijający Strzał zostanie użyty przy pełnym zasobie energii, spowolni wszystkich trafionych wrogów o 50% na 3 sek. Elitarni wrogowie zostaną dodatkowo powaleni na 1.5 sek.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Ao ser lançado com energia cheia, Disparo Perfurante aplicará lentidão a todos os inimigos atingidos em 50% por 3 segundos. Inimigos de elite também serão nocauteados por 1.5 segundos.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда вы применяете \"Пробивающий выстрел\" с полным запасом энергии, пораженные противники замедляются на 50% на 3 сек. Особые противники также сбиваются с ног на 1.5 сек.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "能量全满时, 穿透射击会使所有命中的敌人减速 50%, 持续 3 秒。精英敌人还会被击倒, 持续 1.5 秒。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "在能量全滿時施放穿透射擊,會使其擊中的所有敵人緩速 50%,持續 3 秒。精英怪同時會被擊倒 1.5 秒。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 30,
		maxPoints: 1,
		x: -151.43,
		y: 600.305
	},
	"Improved Penetrating Shot": {
		baseSkill: "Penetrating Shot",
		connections: [ "Enhanced Penetrating Shot" ],
		description: `If Penetrating Shot damages at least 3 enemies, your next Penetrating Shot has a +20% increased Critical Strike Chance.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübter Durchschlagender Schuss",
			"esES": "Disparo penetrante perfeccionado",
			"esMX": "Disparo Penetrante Mejorado",
			"frFR": "Tir pénétrant amélioré",
			"itIT": "Tiro Penetrante Migliorato",
			"jaJP": "貫通矢(改良)",
			"koKR": "향상된 꿰뚫는 사격",
			"plPL": "Ulepszony Przebijający Strzał",
			"ptBR": "Disparo Perfurante Aprimorado",
			"ruRU": "Улучшенный пробивающий выстрел",
			"zhCN": "强力穿透射击",
			"zhTW": "改良穿透射擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Durchschlagender Schuss mindestens 3 Gegnern Schaden zufügt, verfügt Euer nächster Einsatz von Durchschlagender Schuss über eine +20% höhere kritische Trefferchance.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Si Disparo penetrante inflige daño a al menos 3 enemigos, tu siguiente Disparo penetrante tiene un +20% más de probabilidad de golpe crítico.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Si Disparo Penetrante inflige daño a por lo menos 3 enemigos, tu próximo Disparo Penetrante tiene un +20% más de probabilidad de golpe crítico.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Si Tir pénétrant inflige des dégâts à au moins 3 adversaires, les chances d'infliger un coup critique de votre prochain Tir pénétrant sont augmentées de +20%.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Se Tiro Penetrante infligge danni ad almeno 3 nemici, la probabilità di critico del tuo successivo Tiro Penetrante aumenta del +20%.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈貫通矢〉が少なくとも3体の敵にダメージを与えると、次の〈貫通矢〉のクリティカルヒット率が+20%上昇する。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "꿰뚫는 사격으로 최소 3마리 이상의 적에게 피해를 주면, 다음 꿰뚫는 사격의 극대화 확률이 +20% 증가합니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Jeśli Przebijający Strzał zada obrażenia co najmniej 3 wrogom, twój kolejny Przebijający Strzał będzie miał szansę na trafienie krytyczne zwiększoną o +20%.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Se Disparo Perfurante causar dano a pelo menos 3 inimigos, seu próximo Disparo Perfurante tem +20% de chance de acerto crítico aumentada.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Если \"Пробивающий выстрел\" поражает не менее 3 противников, вероятность критического эффекта следующего \"Пробивающего выстрела\" повышается на +20%.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "如果穿透射击至少对 3 名敌人造成伤害, 你的下一个穿透射击的暴击几率提高 +20%。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "如果穿透射擊對至少 3 個敵人造成傷害,你下一次穿透射擊爆擊機率提高+20%。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 31,
		maxPoints: 1,
		x: 167.52,
		y: 602.47
	},
	"Rapid Fire": {
		connections: [ "Enhanced Rapid Fire", "Core" ],
		description: `Energy Cost: {#}
Lucky Hit Chance: 20% (per hit)
Rapidly fire 5 arrows, each dealing {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% damage.

Combo Points increase damage and arrows fired:
• 1 Point: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% damage, 6 arrows
• 2 Points: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% damage, 7 arrows
• 3 Points: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% damage, 8 arrows

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Schnellfeuer",
			"esES": "Fuego rápido",
			"esMX": "Disparo Rápido",
			"frFR": "Tir rapide",
			"itIT": "Tiro Rapido",
			"jaJP": "ラピッド・ファイア",
			"koKR": "연발 사격",
			"plPL": "Szybki Ostrzał",
			"ptBR": "Fogo Rápido",
			"ruRU": "Скоростная стрельба",
			"zhCN": "快速射击",
			"zhTW": "連射"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: {#}\nGlückstrefferchance: 20% (per hit)\nFeuert schnell 5 Pfeile ab, die jeweils {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% Schaden verursachen.\n\nKombopunkte erhöhen den Schaden und die Menge der abgeschossenen Pfeile::\n • 1 Punkt: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% Schaden, 6 Pfeile\n • 2 Punkte: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% Schaden, 7 Pfeile\n • 3 Punkte: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% Schaden, 8 Pfeile\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Coste de energía: {#}\nProbabilidad de golpe de suerte: 20% (per hit)\nDisparas rápidamente 5 flechas que infligen {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% de daño cada una.\n\nLos puntos de combo aumentan el daño y el número de flechas lanzadas:\n• 1 punto: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% de daño y 6 flechas\n• 2 puntos: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% de daño y 7 flechas\n• 3 puntos: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% de daño y 8 flechas\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Costo de Energía: {#}\nProbabilidad de golpe afortunado: 20% (per hit)\nDisparas 5 flechas con rapidez que infligen {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% de daño cada una.\n\nLos puntos de combo aumentan el daño y la cantidad de flechas disparadas:\n• 1 punto: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% de daño, 6 flechas\n• 2 puntos: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% de daño, 7 flechas\n• 3 puntos: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% de daño, 8 flechas\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Coût en énergie: {#}\nChances d'obtenir un coup de chance: 20% (per hit)\nVous tirez rapidement 5 flèches qui infligent chacune {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% points de dégâts.\n\nLes points de combo augmentent les dégâts et le nombre de flèches tirées :\n• 1 point: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% points de dégâts, 6 flèches\n• 2 points: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% points de dégâts, 7 flèches\n• 3 points: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% points de dégâts, 8 flèches\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Costo in energia: {#}\nProbabilità di colpo fortunato: 20% (per hit)\nScagli rapidamente 5 frecce che infliggono {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% danni ciascuna.\n\nI punti combo aumentano i danni e le frecce scagliate:\n• 1 punto: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% danni, 6 frecce\n• 2 punti: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% danni, 7 frecce\n• 3 punti: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% danni, 8 frecce\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "エネルギー消費量: {#}\n幸運の一撃発生率: 20% (per hit)\n矢を5本連射し、それぞれの矢が{24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}%のダメージを与える。\n\nコンボポイントでダメージと放たれる矢の数が増大:\n• 1ポイント: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}%ダメージ、6本の矢\n• 2ポイント: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}%ダメージ、7本の矢\n• 3ポイント: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}%ダメージ、8本の矢\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "소모: 기력 {#}\n행운의 적중 확률: 20% (per hit)\n화살 5개를 빠르게 발사하여 각각 {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}%의 피해를 줍니다.\n\n연계 점수에 따라 주는 피해와 발사하는 화살 개수가 증가합니다.\n• 1점: 피해 {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}%, 화살 6개\n• 2점: 피해 {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}%, 화살 7개\n• 3점: 피해 {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}%, 화살 8개\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Koszt: {#} pkt. energii\nSzansa na szczęśliwy traf: 20% (per hit)\nSzybko wypuszczasz strzały (5), z których każda zadaje {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% pkt. obrażeń.\n\nPunkty kombinacji zwiększają zadawane obrażenia i liczbę wypuszczonych strzał:\n • 1 pkt.: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% pkt. obrażeń, strzały: 6.\n • 2 pkt.: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% pkt. obrażeń, strzały: 7.\n • 3 pkt.: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% pkt. obrażeń, strzały: 8.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Custo de energia: {#}\nChance de Golpe de Sorte: 20% (per hit)\nDispara 5 flechas rapidamente. Cada uma causa {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% de dano.\n\nPontos de combo aumentam o dano e a quantidade de flechas disparadas:\n• 1: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% de dano, 6 flechas\n• 2: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% de dano, 7 flechas\n• 3: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% de dano, 8 flechas\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Затраты энергии: {#}\nВероятность удачного удара: 20% (per hit)\nВы стремительно выпускаете 5 стрелы, наносящие:стрел, наносящих по {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% ед. урона.\n\nДополнительные приемы серии увеличивают урон и количество стрел:\n• 1 прием: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% ед. урона, 6 стрелы:стрел\n• 2 приема: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% ед. урона, 7 стрелы:стрел\n• 3 приема: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% ед. урона, 8 стрелы:стрел\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "能量消耗: {#}\n幸运一击几率: 20% (per hit)\n快速发射 5 支箭矢, 每支造成 {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% 点伤害。\n\n连击点数会提高伤害并增加箭矢数量:\n• 1点: {26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% 点伤害, 6 支箭矢\n• 2点: {29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% 点伤害, 7 支箭矢\n• 3点: {33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% 点伤害, 8 支箭矢\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "能量消耗:{#}\n幸運觸發機率: 20% (per hit)\n快速發射 5 支箭矢,每支造成 {24/26.4/28.8/31.2/33.6/36/38.4/40.8/43.2/45.6}% 點傷害。\n\n連擊點數會提高傷害與射出的箭矢數量:\n• 1 點:{26.4/29/31.7/34.3/37/39.6/42.2/44.9/47.5/50.2}% 點傷害,6 支箭矢\n• 2 點:{29.4/32.3/35.3/38.2/41.2/44.1/47/50/52.9/55.9}% 點傷害,7 支箭矢\n• 3 點:{33.6/37/40.3/43.7/47/50.4/53.8/57.1/60.5/63.8}% 點傷害,8 支箭矢\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 32,
		maxPoints: 5,
		values: [ "25" ],
		x: 574.29,
		y: -57.45
	},
	"Enhanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Rapid Fire", "Advanced Rapid Fire", "Improved Rapid Fire" ],
		description: `Each subsequent arrow from Rapid Fire has +5% increased Critical Strike Chance, up to +40% for the 8th arrow

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbessertes Schnellfeuer",
			"esES": "Fuego rápido mejorado",
			"esMX": "Disparo Rápido Potenciado",
			"frFR": "Tir rapide renforcé",
			"itIT": "Tiro Rapido Rinforzato",
			"jaJP": "ラピッド・ファイア(強化版)",
			"koKR": "강화된 연발 사격",
			"plPL": "Wzmocniony Szybki Ostrzał",
			"ptBR": "Fogo Rápido Aperfeiçoado",
			"ruRU": "Усиленная скоростная стрельба",
			"zhCN": "强化快速射击",
			"zhTW": "強化連射"
},
		descriptionLocalized: {
			"deDE": "Jeder nachfolgende Pfeil von Schnellfeuer verfügt über eine +5% höhere kritische Trefferchance, bis maximal +40% für den 8. Pfeil.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Cada flecha adicional de Fuego rápido tiene un +5% más de probabilidad de golpe crítico, hasta un +40% para la 8.ª flecha.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Cada flecha consecutiva de Disparo Rápido tiene un +5% más de probabilidad de golpe crítico, hasta un +40% para la flecha 8.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Chaque flèche de Tir rapide suivant la première a +5% de chances supplémentaires d'infliger un coup critique, jusqu'à un maximum de +40% pour la 8e flèche.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Ogni successiva freccia di Tiro Rapido ha una probabilità di critico aggiuntiva del +5%, fino a un massimo del +40% per la 8a freccia.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈ラピッド・ファイア〉で2本目以降の矢を放つたびにクリティカルヒット率が+5%増加する。クリティカルヒット率は8本目の矢を放つまで上がり、最大で+40%増加する。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "연발 사격으로 화살을 발사할 때마다 극대화 확률이 +5%만큼, 최대 8번째 화살의 +40%까지 증가합니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Każda kolejna strzała wypuszczona przy użyciu Szybkiego Ostrzału ma szansę na trafienie krytyczne zwiększoną o +5%, maksymalnie do +40% w przypadku 8 strzały.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Cada flecha subsequente de Fogo Rápido tem +5% de chance de acerto crítico aumentada, até +40% para a 8ª flecha.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "При \"Скоростной стрельбе\" вероятность критического удара повышается на +5% для каждой последующей стрелы, вплоть до +40% для 8-й стрелы.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "快速射击的每一支后续箭矢都会使暴击几率提高 +5%, 在第 8 支箭矢时达到最高 +40%。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "連射後續的每枝箭矢爆擊機率都會提高 +5%,最多於第 8 根箭矢時提高 +40%\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 33,
		maxPoints: 1,
		x: 953.768,
		y: -54.995
	},
	"Advanced Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Rapid Fire deals x30% increased Critical Strike Damage for 3 seconds after you Evade.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickeltes Schnellfeuer",
			"esES": "Fuego rápido avanzado",
			"esMX": "Disparo Rápido Avanzado",
			"frFR": "Tir rapide avancé",
			"itIT": "Tiro Rapido Avanzato",
			"jaJP": "ラピッド・ファイア(高度)",
			"koKR": "고급 연발 사격",
			"plPL": "Zaawansowany Szybki Ostrzał",
			"ptBR": "Fogo Rápido Avançado",
			"ruRU": "Передовая скоростная стрельба",
			"zhCN": "进阶快速射击",
			"zhTW": "進階連射"
},
		descriptionLocalized: {
			"deDE": "Schnellfeuer verursacht 3 Sek. lang nach dem Entrinnen x30% mehr kritischen Trefferschaden.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Fuego rápido inflige un x30% más de daño de golpe crítico durante 3 s tras evadir.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Disparo Rápido inflige un x30% más de daño de golpe crítico durante 3 segundos al evadir.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Tir rapide inflige x30% de dégâts critiques supplémentaires durant les 3 s qui suivent une esquive.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Tiro Rapido infligge il x30% di danni critici aggiuntivi per 3 s dopo aver eseguito una schivata.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "回避した後の3秒間、〈ラピッド・ファイア〉のクリティカルヒットダメージがx30%増加する。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "피하기 후 3초 동안 연발 사격으로 주는 극대화 피해가 x30% 증가합니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Szybki Ostrzał zadaje obrażenia od trafień krytycznych zwiększone o x30% przez 3 sek. po wykonaniu Odskoku.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Fogo Rápido causa 30% de dano de acerto crítico aumentado por 3 segundos após uma evasão.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда вы ускользваете, \"Скоростная стрельба\" наносит на x30% больше критического урона в течение 3 сек.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "闪避后, 快速射击造成的的暴击伤害提高 x30%, 持续 3 秒。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "當你閃避後,連射造成的爆擊傷害提高 x30%,持續 3 秒。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 34,
		maxPoints: 1,
		x: 1172.98,
		y: 34.93
	},
	"Improved Rapid Fire": {
		baseSkill: "Rapid Fire",
		connections: [ "Enhanced Rapid Fire" ],
		description: `Gain 15 Energy per cast of Rapid Fire when it damages a Vulnerable enemy.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübtes Schnellfeuer",
			"esES": "Fuego rápido perfeccionado",
			"esMX": "Disparo Rápido Mejorado",
			"frFR": "Tir rapide amélioré",
			"itIT": "Tiro Rapido Migliorato",
			"jaJP": "ラピッド・ファイア(改良)",
			"koKR": "향상된 연발 사격",
			"plPL": "Ulepszony Szybki Ostrzał",
			"ptBR": "Fogo Rápido Aprimorado",
			"ruRU": "Улучшенная скоростная стрельба",
			"zhCN": "强力快速射击",
			"zhTW": "改良連射"
},
		descriptionLocalized: {
			"deDE": "Erhaltet 15 Energie pro Einsatz von Schnellfeuer, wenn einem verwundbaren Gegner Schaden zugefügt wird.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Obtienes 15 de energía por cada lanzamiento de Fuego rápido cuando daña a un enemigo vulnerable.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Obtienes 15 de Energía por lanzamiento de Disparo Rápido cuando inflige daño a un enemigo vulnerable.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Vous obtenez 15 points d'énergie chaque fois qu'une utilisation de Tir rapide inflige des dégâts à une cible vulnérable.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Ottieni 15 energia per ogni utilizzo di Tiro Rapido che danneggia un nemico vulnerabile.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈ラピッド・ファイア〉が脆弱状態の敵にダメージを与えると、1回の使用あたり15のエネルギーを獲得する。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "연발 사격을 시전하여 취약 상태의 적에게 피해를 줄 때마다 기력을 15 얻습니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Zyskujesz 15 pkt. energii za każde użycie umiejętności, kiedy Szybki Ostrzał zada obrażenia odsłoniętemu wrogowi.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Recebe 15 de energia por lançamento de Fogo Rápido ao causar dano a um inimigo vulnerável.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Вы накапливаете 15 ед. энергии за одно применение \"Скоростной стрельбы\", когда умение поражает уязвимого противника.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "每次施放快速射击对一名处于易伤状态的敌人造成伤害时获得 15 点能量。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "每次施放連射並對易傷敵人造成傷害時,獲得 15 點能量。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 35,
		maxPoints: 1,
		x: 1175.849,
		y: -134.515
	},
	"Barrage": {
		connections: [ "Enhanced Barrage", "Core" ],
		description: `Energy Cost: 30
Lucky Hit Chance: 16% (per hit)
Unleash a barrage of 5 arrows that expands outwards, each dealing {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% damage. Each arrow has a 20% chance to ricochet off an enemy up to 1 time. Ricochets deal 40% of the arrow's Base damage.

Combo Points increase damage and arrows fired:
• 1 Point: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% damage, 6 arrows
• 2 Points: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% damage, 7 arrows
• 3 Points: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% damage, 8 arrows

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Sperrfeuer",
			"esES": "Ráfaga",
			"esMX": "Aluvión",
			"frFR": "Déluge",
			"itIT": "Salva",
			"jaJP": "怒涛",
			"koKR": "탄막",
			"plPL": "Salwa",
			"ptBR": "Salva",
			"ruRU": "Шквальный огонь",
			"zhCN": "乱射",
			"zhTW": "箭幕"
},
		descriptionLocalized: {
			"deDE": "Energiekosten: 30\nGlückstrefferchance: 16% (per hit)\nEntfesselt ein Sperrfeuer aus 5 Pfeilen, die sich ausdehnen und jeweils {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% Schaden verursachen. Jeder Pfeil verfügt über eine Chance von 20%, bis zu 1-mal von einem Gegner abzuprallen. Querschläger verursachen 40% des Basisschadens des Pfeils.\n\nKombopunkte erhöhen den Schaden und die Menge der abgeschossenen Pfeile:\n • 1 Punkt: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% Schaden, 6 Pfeile\n • 2 Punkte: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% Schaden, 7 Pfeile\n• 3 Punkte: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% Schaden, 8 Pfeile\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Coste de energía: 30\nProbabilidad de golpe de suerte: 16% (per hit)\nLanzas una amplia ráfaga de 5 flechas que se abren hacia fuera e infligen {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% de daño cada una. Cada flecha tiene un 20% de probabilidad de rebotar sobre el enemigo hasta 1 vez. Los rebotes infligen un 40% del daño base de la flecha.\n\nLos puntos de combo aumentan el daño y el número de flechas lanzadas:\n• 1 punto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% de daño y 6 flechas\n• 2 puntos: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% de daño y 7 flechas\n• 3 puntos: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% de daño y 8 flechas\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Costo de Energía: 30\nProbabilidad de golpe afortunado: 16% (per hit)\nDesatas un aluvión de 5 flechas que se expande hacia afuera, cuyas flechas infligen {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% de daño cada una. Cada flecha tiene un 20% de probabilidad de rebotar en un enemigo hasta 1 vez. Los rebotes infligen un 40% del daño de base de la flecha.\n\nLos puntos de combo aumentan el daño y la cantidad de flechas disparadas:\n• 1 punto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% de daño, 6 flechas\n • 2 puntos: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% de daño, 7 flechas\n • 3 puntos: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% de daño, 8 flechas\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Coût en énergie: 30\nChances d'obtenir un coup de chance: 16% (per hit)\nVous déclenchez un violent déluge de 5 flèches qui se déploient en infligeant chacune {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% points de dégâts. Chaque flèche a 20% de chances de ricocher sur une cible jusqu'à 1 fois. Les ricochets infligent 40% des dégâts de base de la flèche.\n\nLes points de combo augmentent les dégâts et le nombre de flèches tirées :\n• 1 point: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% points de dégâts, 6 flèches\n• 2 points: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% points de dégâts, 7 flèches\n• 3 points: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% points de dégâts, 8 flèches\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Costo in energia: 30\nProbabilità di colpo fortunato: 16% (per hit)\nScatena una raffica di 5 di frecce che si espandono verso l'esterno e infliggono {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% danni ciascuna. Ogni freccia ha il 20% di probabilità di rimbalzare su un nemico fino a 1 volte. Le frecce rimbalzate infliggono il 40% dei danni base delle frecce.\n\nI punti combo aumentano i danni e le frecce scagliate:\n • 1 punto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% danni, 6 frecce\n • 2 punti: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% danni, 7 frecce\n • 3 punti: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% danni, 8 frecce\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "エネルギー消費量: 30\n幸運の一撃発生率: 16% (per hit)\n5本の外側に拡散する矢を放ち、それぞれの矢が{20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}%のダメージを与える。それぞれの矢は敵に命中した際に20%の確率で最大で1回まで跳飛する。跳飛した矢は、矢の基礎ダメージの40%のダメージを与える。\n\nコンボポイントでダメージと放たれる矢の数が増大:\n• 1ポイント: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}%ダメージ、6本の矢\n• 2ポイント: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}%ダメージ、7本の矢\n• 3ポイント: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}%ダメージ、8本の矢\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "소모: 기력 30\n행운의 적중 확률: 16% (per hit)\n화살 5개를 넓게 발사하여 각각 {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}%의 피해를 줍니다. 화살은 각각 20% 확률로 최대 1번까지 적에게 부딪혀 튕깁니다. 튕긴 화살은 화살의 기본 공격력의 40%에 해당하는 피해를 줍니다.\n\n연계 점수에 따라 주는 피해와 발사하는 화살 개수가 증가합니다.\n• 1점: 피해 {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}%, 화살 6개\n• 2점: 피해 {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}%, 화살 7개\n• 3점: 피해 {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}%, 화살 8개\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Koszt: 30 pkt. energii.\nSzansa na szczęśliwy traf: 16% (per hit)\nWystrzeliwujesz salwę 5 strzał, która rozchodzi się na boki. Każda z nich zadaje {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% pkt. obrażeń i ma 20% szans na odbicie się rykoszetem od wroga maksymalnie 1 raz. Trafienie rykoszetem zadaje 40% obrażeń podstawowych strzały.\n\nPunkty kombinacji zwiększają zadawane obrażenia i liczbę wypuszczonych strzał:\n • 1 pkt.: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% pkt. obrażeń, strzały: 6.\n • 2 pkt.: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% pkt. obrażeń, strzały: 7.\n • 3 pkt.: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% pkt. obrażeń, strzały: 8.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Custo de energia: 30\nChance de Golpe de Sorte: 16% (per hit)\nLibera uma salva de 5 flechas que se expande. Cada uma causa {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% de dano. Cada flecha tem 20% de chance de ricochetear em um inimigo até 1 vez. Os ricochetes causam 40% do dano-base da flecha.\n\nPontos de combo aumentam o dano e a quantidade de flechas disparadas:\n• 1 ponto: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% de dano, 6 flechas\n• 2 pontos: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% de dano, 7 flechas\n• 3 pontos: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% de dano, 8 flechas\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Затраты энергии: 30\nВероятность удачного удара: 16% (per hit)\nВы выпускаете 5 стрелы:стрел, которые разлетаются веером и наносят по {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% ед. урона. Каждая стрела с вероятностью 20% может срикошетить до 1 раз:раз. Рикошетящие стрелы наносят 40% базового урона.\n\nДополнительные приемы серии увеличивают урон и количество стрел:\n• 1 прием: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% ед. урона, 6 стрелы:стрел\n• 2 приема: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% ед. урона, 7 стрелы:стрел\n• 3 приема: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% ед. урона, 8 стрелы:стрел\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "能量消耗: 30\n幸运一击几率: 16% (per hit)\n释放 5 支向外散射的箭矢, 每支箭矢造成 {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% 点伤害。每支有 20% 几率从敌人身上弹射最多 1 次。弹射造成箭矢 40% 基础伤害。\n\n连击点数会提高伤害和箭矢数量:\n• 1点: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% 点伤害, 6 支箭矢\n• 2点: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% 点伤害, 7 支箭矢\n• 3点: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% 点伤害, 8 支箭矢\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "能量消耗:30\n幸運觸發機率: 16% (per hit)\n向外發射 5 根箭矢,每根造成 {20.8/22.9/25/27/29.1/31.2/33.3/35.4/37.4/39.5}% 點傷害。每根箭矢有 20% 機率在敵人身上彈射 1 次。彈射的箭矢會造成原本箭矢基礎傷害的 40%。\n\n連擊點數可提高傷害和發射的箭矢數量:\n• 1 點: {25/27.5/30/32.4/34.9/37.4/40/42.5/44.9/47.4}% 點傷害,6 根箭矢\n• 2 點: {29.1/32.1/35/37.8/40.7/43.7/46.6/49.6/52.4/55.3}% 點傷害,7 根箭矢\n• 3 點: {33.3/36.6/40/43.2/46.6/49.9/53.3/56.6/59.8/63.2}% 點傷害,8 根箭矢\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 36,
		maxPoints: 5,
		x: -5,
		y: -292.875
	},
	"Enhanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Barrage", "Advanced Barrage", "Improved Barrage" ],
		description: `Barrage's ricochet chance is increased to 100% for arrows that damage a Vulnerable enemy or Critically Strike any enemy.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Verbessertes Sperrfeuer",
			"esES": "Ráfaga mejorada",
			"esMX": "Aluvión Potenciado",
			"frFR": "Déluge renforcé",
			"itIT": "Salva Rinforzata",
			"jaJP": "怒涛(強化版)",
			"koKR": "강화된 탄막",
			"plPL": "Wzmocniona Salwa",
			"ptBR": "Salva Aperfeiçoada",
			"ruRU": "Усиленный шквальный огонь",
			"zhCN": "强化乱射",
			"zhTW": "強化箭幕"
},
		descriptionLocalized: {
			"deDE": "Die Querschlägerchance von Sperrfeuer erhöht sich auf 100% für Pfeile, die einem verwundbaren Gegner Schaden zufügen oder einen kritischen Treffer erzielen.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "La probabilidad de rebote de Ráfaga aumenta al 100% en las flechas que inflijan daño a un enemigo vulnerable o asesten un golpe crítico a cualquier enemigo.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "La probabilidad de rebotar de Aluvión aumenta al 100% para flechas que infligen daño a un enemigo vulnerable o asestan un golpe crítico a cualquier enemigo.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Les chances de ricocher de Déluge sont augmentées de 100% pour les flèches qui infligent des dégâts à une cible vulnérable ou qui infligent un coup critique.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "La probabilità di rimbalzo di Salva sale al 100% per quelle frecce che danneggiano un nemico vulnerabile o che infliggono danni critici a un nemico qualsiasi.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈怒涛〉の矢が脆弱状態の敵に命中するかクリティカルヒットになると、その矢が跳飛する確率が100%になる。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "탄막이 취약 상태의 적에게 피해를 주거나 아무 적에게나 극대화로 적중하면 화살이 튕길 확률이 100%로 증가합니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Szansa Salwy na rykoszet jest zwiększona do 100% w przypadku strzał, które zranią odsłoniętego wroga lub zadadzą trafienie krytyczne dowolnemu wrogowi.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "A chance de ricochete de Salva é aumentada para 100% para flechas que causam dano a um inimigo vulnerável ou desferem um acerto crítico contra qualquer inimigo.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Если стрела \"Шквального огня\" поражает уязвимого противника или наносит любому противнику критический урон, ее вероятность рикошета повышается до 100%.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "乱射的箭矢对易伤敌人造成伤害, 或对任意敌人造成暴击时, 箭矢弹射几率提高至 100%。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "箭幕的箭矢對易傷敵人造成傷害,或對任意敵人爆擊時,彈射的機率提高 100%。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 37,
		maxPoints: 1,
		x: -2.455,
		y: -503.82
	},
	"Advanced Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Whenever a single cast of Barrage ricochets at least 4 times, your next cast gains +20% increased Critical Strike Chance.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Weiterentwickeltes Sperrfeuer",
			"esES": "Ráfaga avanzada",
			"esMX": "Aluvión Avanzado",
			"frFR": "Déluge avancé",
			"itIT": "Salva Avanzata",
			"jaJP": "怒涛(高度)",
			"koKR": "고급 탄막",
			"plPL": "Zaawansowana Salwa",
			"ptBR": "Salva Avançada",
			"ruRU": "Передовой шквальный огонь",
			"zhCN": "进阶乱射",
			"zhTW": "進階箭幕"
},
		descriptionLocalized: {
			"deDE": "Immer, wenn ein Einsatz von Sperrfeuer mindestens 4-mal abprallt, erhält Euer nächster Einsatz eine um +20% erhöhte kritische Trefferchance.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Cuando un mismo lanzamiento de Ráfaga rebota al menos 4 veces, tu siguiente lanzamiento obtiene un +20% más de probabilidad de golpe crítico.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "Cuando un único lanzamiento de Aluvión rebota al menos 4 veces, tu siguiente lanzamiento obtiene un +20% más de probabilidad de golpe crítico.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Chaque fois qu'une utilisation de Déluge produit au moins 4 ricochets, les chances d'infliger un coup critique lors de sa prochaine utilisation sont augmentées de +20%.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Ogni volta che un singolo lancio di Salva rimbalza almeno 4 volte, la probabilità di critico del lancio successivo aumenta del +20%.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "〈怒涛〉が1回の使用で少なくとも4回跳飛すると、次回使用時のクリティカルヒット率が+20%増加する。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "1회 시전한 탄막이 최소 4회 이상 튕기면, 다음 시전 시의 극대화 확률이 +20% 증가합니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Za każdym razem, gdy pojedyncze użycie Salwy rykoszetuje co najmniej 4 razy, następne użycie zyska premię +20% do szansy na trafienie krytyczne.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Sempre que um único lançamento de Salva ricocheteia pelo menos 4 vezes, seu próximo lançamento recebe +20% de chance de acerto crítico aumentada.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "Когда \"Шквальный огонь\" рикошетит хотя бы 4 раза:раз, вероятность нанести критический урон при следующем применении повышается на +20%.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "单次乱射弹射至少 4 次, 你的下一次施法的暴击几率提高 +20%。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "在施放一次箭幕時,若箭矢彈射至少 4 次,你下一次施放的爆擊機率提高 +20%。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 38,
		maxPoints: 1,
		x: 171.15,
		y: -615.165
	},
	"Improved Barrage": {
		baseSkill: "Barrage",
		connections: [ "Enhanced Barrage" ],
		description: `Every 3rd cast of Barrage makes enemies Vulnerable for 2 seconds.

Tags: Core, Marksman, Imbueable, Damage, Physical, Energy.`,
		nameLocalized: {
			"deDE": "Geübtes Sperrfeuer",
			"esES": "Ráfaga perfeccionada",
			"esMX": "Aluvión Mejorado",
			"frFR": "Déluge amélioré",
			"itIT": "Salva Migliorata",
			"jaJP": "怒涛(改良)",
			"koKR": "향상된 탄막",
			"plPL": "Ulepszona Salwa",
			"ptBR": "Salva Aprimorada",
			"ruRU": "Улучшенный шквальный огонь",
			"zhCN": "强力乱射",
			"zhTW": "改良箭幕"
},
		descriptionLocalized: {
			"deDE": "Jeder 3. Einsatz von Sperrfeuer macht Ziele 2 Sek. lang verwundbar.\n\nTags: Kern, Präzision, Infusionsfähig, Schaden, Physisch, Energie.",
			"esES": "Cada 3 lanzamientos de Ráfaga, los enemigos se vuelven vulnerables durante 2 s.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"esMX": "El tercer lanzamiento de Aluvión vuelve a los enemigos vulnerables durante 2 segundos.\n\nTags: Principal, Tirador, Imbuible, Daño, Física, Energía.",
			"frFR": "Toutes les 3 utilisations de Déluge, la 3e utilisation rend les adversaires vulnérables pendant 2 s.\n\nTags: Principale, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Énergie.",
			"itIT": "Ogni 3 utilizzi di Salva rende i nemici vulnerabili per 2 s.\n\nTags: Primaria, Tiro di precisione, Infondibile, Danni, Fisico, Energia.",
			"jaJP": "3回使用するごとに、〈怒涛〉が敵を2秒間にわたり脆弱状態にする。\n\nTags: コア, 射手, 注入可能, ダメージ, 物理, エネルギー.",
			"koKR": "탄막을 3번째 시전할 때마다 적이 2초 동안 취약해집니다.\n\nTags: 핵심, 명사수, 주입 가능, 피해, 물리, 기력.",
			"plPL": "Co 3 Salwa odsłania wrogów na 2 sek.\n\nTags: Główne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Energia.",
			"ptBR": "Cada 3º lançamento de Salva deixa os inimigos vulneráveis por 2 segundos.\n\nTags: Principal, Atirador, Imbuível, Dano, Física, Energia.",
			"ruRU": "При каждом 3-м применении \"Шквальный огонь\" делает пораженных противников уязвимыми на 2 сек.\n\nTags: Основное, Стрелок, Насыщение, Урон, Физический урон, Энергия.",
			"zhCN": "每第 3 次施放乱射会使敌人陷入易伤状态, 持续 2 秒。\n\nTags: 核心, 神射手, 可灌注, 伤害, 物理, 能量.",
			"zhTW": "每第 3 次施放的箭幕,會使被擊中的敵人易傷,持續 2 秒。\n\nTags: 核心, 射手, 可灌注, 傷害, 物理, 能量."
},
		id: 39,
		maxPoints: 1,
		x: -162.535,
		y: -614.96
	},
	"Sturdy": {
		connections: [ "Core", "Siphoning Strikes" ],
		description: `You gain {4/8/12/16/20/24/28/32/36/40}% Close Damage Reduction.

Tags: Damage Reduction.`,
		nameLocalized: {
			"deDE": "Zäh",
			"esES": "Firme",
			"esMX": "Robusto",
			"frFR": "Robuste",
			"itIT": "Solido",
			"jaJP": "頑丈",
			"koKR": "튼튼함",
			"plPL": "Solidność",
			"ptBR": "Resistente",
			"ruRU": "Прочность",
			"zhCN": "坚韧",
			"zhTW": "結實"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet {4/8/12/16/20/24/28/32/36/40}% Schadensreduktion im Nahkampf.\n\nTags: Schadensreduktion.",
			"esES": "Obtienes un {4/8/12/16/20/24/28/32/36/40}% de reducción de daño cercano.\n\nTags: Reducción de daño.",
			"esMX": "Obtienes un {4/8/12/16/20/24/28/32/36/40}% de reducción de daño a corta distancia.\n\nTags: Reducción de daño.",
			"frFR": "Vous obtenez {4/8/12/16/20/24/28/32/36/40}% de réduction des dégâts à proximité.\n\nTags: Réduction des dégâts.",
			"itIT": "Ottieni il {4/8/12/16/20/24/28/32/36/40}% di riduzione danni da vicino.\n\nTags: Riduzione danni.",
			"jaJP": "受ける近距離ダメージが{4/8/12/16/20/24/28/32/36/40}%軽減される。\n\nTags: ダメージ減少.",
			"koKR": "근접 피해 감소가 {4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 피해 감소.",
			"plPL": "Twoja redukcja obrażeń z bliska jest zwiększona o {4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Redukcja Obrażeń.",
			"ptBR": "Você recebe {4/8/12/16/20/24/28/32/36/40}% de redução de dano de curta distância.\n\nTags: Redução de Dano.",
			"ruRU": "Вы получаете на x{4/8/12/16/20/24/28/32/36/40}% меньше урона в ближнем бою.\n\nTags: Уменьшение урона.",
			"zhCN": "你获得 {4/8/12/16/20/24/28/32/36/40}% 近距伤害减免。\n\nTags: 伤害减免.",
			"zhTW": "你獲得 {4/8/12/16/20/24/28/32/36/40}% 近程傷害減免。\n\nTags: 傷害減免."
},
		id: 40,
		maxPoints: 3,
		x: -508.635,
		y: 1.66
	},
	"Siphoning Strikes": {
		connections: [ "Sturdy" ],
		description: `Heal for {1/2/3/4/5/6/7/8/9/10}% of your Maximum Life when you Critically Strike Close enemies.

Tags: Critical Strikes, Healing.`,
		nameLocalized: {
			"deDE": "Labende Schläge",
			"esES": "Golpes absorbentes",
			"esMX": "Ataques Succionadores",
			"frFR": "Frappes drainantes",
			"itIT": "Assalti Prosciuganti",
			"jaJP": "吸収攻撃",
			"koKR": "흡수의 일격",
			"plPL": "Wysysające Uderzenia",
			"ptBR": "Golpes Drenantes",
			"ruRU": "Вытягивающие удары",
			"zhCN": "虹吸打击",
			"zhTW": "虹吸打擊"
},
		descriptionLocalized: {
			"deDE": "Heilt Euch um {1/2/3/4/5/6/7/8/9/10}% Eures maximalen Lebens, wenn Ihr Gegner in der Nähe kritisch trefft.\n\nTags: Kritische Treffer, Heilung.",
			"esES": "Te curas un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima cuando asestas un golpe crítico a enemigos cercanos.\n\nTags: Golpes críticos, Curación.",
			"esMX": "Te sanas por un {1/2/3/4/5/6/7/8/9/10}% de tu vida máxima cuando asestas un golpe crítico a los enemigos cercanos.\n\nTags: Golpes críticos, Sanación.",
			"frFR": "Vous récupérez {1/2/3/4/5/6/7/8/9/10}% de votre maximum de points de vie lorsque vous infligez des coups critiques aux adversaires à proximité.\n\nTags: Coups critiques, Soins.",
			"itIT": "Quando infliggi danni critici ai nemici vicini ti curi del {1/2/3/4/5/6/7/8/9/10}% della tua Vita massima.\n\nTags: Colpi critici, Guarigione.",
			"jaJP": "付近の敵にクリティカルヒットを与えると、ライフが最大値の{1/2/3/4/5/6/7/8/9/10}%にあたる回復する。\n\nTags: クリティカルヒット, 回復.",
			"koKR": "근거리에 있는 적에게 공격이 극대화로 적중하면 최대 생명력의 {1/2/3/4/5/6/7/8/9/10}%만큼 생명력을 회복합니다.\n\nTags: 극대화, 치유.",
			"plPL": "Odzyskujesz {1/2/3/4/5/6/7/8/9/10}% twojego maksymalnego zdrowia, gdy zadajesz pobliskim wrogom trafienia krytyczne.\n\nTags: Trafienia Krytyczne, Leczenie.",
			"ptBR": "Cura {1/2/3/4/5/6/7/8/9/10}% da sua vida máxima ao desferir um acerto crítico contra inimigos próximos.\n\nTags: Acertos Críticos, Cura.",
			"ruRU": "Вы восполняете {1/2/3/4/5/6/7/8/9/10}% максимального запаса здоровья, когда поражаете противников вблизи критическими ударами.\n\nTags: Критические удары, Исцеление.",
			"zhCN": "对近距敌人造成暴击时, 为你恢复 {1/2/3/4/5/6/7/8/9/10}%生命上限。\n\nTags: 暴击, 治疗.",
			"zhTW": "對近距離敵人使出爆擊時,恢復生命值上限的 {1/2/3/4/5/6/7/8/9/10}%。\n\nTags: 爆擊, 治療."
},
		id: 41,
		maxPoints: 3,
		x: -854.135,
		y: 2.815
	},
	"Stutter Step": {
		connections: [ "Core" ],
		description: `Critically Striking an enemy grants +{5/10/15/20/25/30/35/40/45/50}% Movement Speed for 4.0 seconds.

Tags: Critical Strikes, Movement.`,
		nameLocalized: {
			"deDE": "Stotterschritt",
			"esES": "Juego de pies",
			"esMX": "Paso Interrumpido",
			"frFR": "Petits pas",
			"itIT": "Passo Impetuoso",
			"jaJP": "スタッター・ステップ",
			"koKR": "비틀걸음",
			"plPL": "Przerywany Krok",
			"ptBR": "Passo Hesitante",
			"ruRU": "Перебежка",
			"zhCN": "鬼步疾行",
			"zhTW": "蹣跚步伐"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr bei Gegnern einen kritischen Treffer erzielt, erhaltet Ihr 4.0 Sek. lang +{5/10/15/20/25/30/35/40/45/50}% Bewegungsgeschwindigkeit.\n\nTags: Kritische Treffer, Bewegung.",
			"esES": "Asestar un golpe crítico a un enemigo otorga un +{5/10/15/20/25/30/35/40/45/50}% de velocidad de movimiento durante 4.0 s.\n\nTags: Golpes críticos, Movimiento.",
			"esMX": "Asestar un golpe crítico a un enemigo otorga un +{5/10/15/20/25/30/35/40/45/50}% de velocidad de movimiento durante 4.0 segundos.\n\nTags: Golpes críticos, Movimiento.",
			"frFR": "Infliger un coup critique à une cible augmente votre vitesse de déplacement de +{5/10/15/20/25/30/35/40/45/50}% pendant 4.0 s.\n\nTags: Coups critiques, Déplacement.",
			"itIT": "Infliggere colpi critici a un nemico aumenta la velocità di movimento del +{5/10/15/20/25/30/35/40/45/50}% per 4.0 s.\n\nTags: Colpi critici, Movimento.",
			"jaJP": "敵1体にクリティカルヒットを与えると、移動速度が4.0秒間にわたり+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: クリティカルヒット, 移動.",
			"koKR": "적에게 공격이 극대화로 적중하면 4.0초 동안 이동 속도가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 극대화, 이동.",
			"plPL": "Zadanie krytycznego trafienia wrogowi zapewnia +{5/10/15/20/25/30/35/40/45/50}% do szybkości ruchu na 4.0 sek.\n\nTags: Trafienia Krytyczne, Ruch.",
			"ptBR": "Desferir um acerto crítico contra um inimigo concede +{5/10/15/20/25/30/35/40/45/50}% de velocidade de movimento por 4.0 segundos.\n\nTags: Acertos Críticos, Movimento.",
			"ruRU": "Критический удар повышает скорость передвижения на +{5/10/15/20/25/30/35/40/45/50}% на 4.0 сек.\n\nTags: Критические удары, Движение.",
			"zhCN": "对一名敌人造成暴击时, 移动速度提高 +{5/10/15/20/25/30/35/40/45/50}%, 持续 4.0 秒。\n\nTags: 暴击, 移动.",
			"zhTW": "對敵人爆擊可獲得額外 +{5/10/15/20/25/30/35/40/45/50}% 移動速度,持續 4.0 秒。\n\nTags: 爆擊, 移動."
},
		id: 42,
		maxPoints: 3,
		x: 577.69,
		y: 84.675
	},
};

rogueData["Agility"] = {
	"Shadow Step": {
		connections: [ "Enhanced Shadow Step", "Agility" ],
		description: `Cooldown: 9 seconds
Lucky Hit Chance: 100% (per hit)
Become Unstoppable and quickly move through the shadows to stab your victim from behind for {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% damage. Gain 50% increased Movement Speed for 2 seconds afterwards.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Schattenschritt",
			"esES": "Paso de las sombras",
			"esMX": "Paso Umbrío",
			"frFR": "Pas de l'ombre",
			"itIT": "Passo d'Ombra",
			"jaJP": "シャドウ・ステップ",
			"koKR": "그림자 걸음",
			"plPL": "Cienisty Krok",
			"ptBR": "Passo Sombrio",
			"ruRU": "Шаг сквозь тень",
			"zhCN": "暗影步",
			"zhTW": "暗影步伐"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 9 Sek.\nGlückstrefferchance: 100% (per hit)\nWerdet unaufhaltsam, bewegt Euch schnell durch die Schatten und stecht aus dem Hinterhalt auf ein Opfer ein, wodurch Ihr {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% Schaden verursacht. Erhaltet danach 2 Sek. lang 50% mehr Bewegungsgeschwindigkeit.\n\nTags: Wendigkeit, Meucheln, Unaufhaltsam, Infusionsfähig, Schaden, Physisch, Abklingzeit, Bewegung.",
			"esES": "Tiempo de reutilización: 9 s\nProbabilidad de golpe de suerte: 100% (per hit)\nTe vuelves imparable y te mueves con rapidez por las sombras para apuñalar por la espalda a tu víctima e infligir {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño. Después, obtienes un 50% más de velocidad de movimiento durante 2 s.\n\nTags: Agilidad, Degollación, Imparable, Imbuible, Daño, Física, Tiempo de reutilización, Movimiento.",
			"esMX": "Recuperación: 9 segundos\nProbabilidad de golpe afortunado: 100% (per hit)\nTe vuelves imparable, te mueves rápidamente entre las sombras, apuñalas a tu víctima por la espalda y le infliges {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de daño. Luego, obtienes un 50% más de velocidad de movimiento durante 2 segundos.\n\nTags: Agilidad, Degollador, Imparable, Imbuible, Daño, Física, Recuperación, Movimiento.",
			"frFR": "Temps de recharge: 9 s\nChances d'obtenir un coup de chance: 100% (per hit)\nVous devenez inarrêtable et vous vous déplacez rapidement à travers les ombres pour poignarder votre victime par-derrière, ce qui lui inflige {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% points de dégâts. Votre vitesse de déplacement est ensuite augmentée de 50% pendant 2 s.\n\nTags: Agilité, Coupe-jarret, Inarrêtable, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge, Déplacement.",
			"itIT": "Tempo di recupero: 9 s\nProbabilità di colpo fortunato: 100% (per hit)\nDiventi inarrestabile e ti muovi rapidamente tra le ombre per pugnalare la tua vittima nella schiena, infliggendo {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% danni. La tua velocità di movimento aumenta del 50% per i 2 s successivi.\n\nTags: Agilità, Sgozzamento, Inarrestabile, Infondibile, Danni, Fisico, Tempo di recupero, Movimento.",
			"jaJP": "クールダウン: 9秒\n幸運の一撃発生率: 100% (per hit)\n抑圧不可状態になって影を素早くすり抜けて移動し、背後から標的を突き刺して{72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%のダメージを与える。その後、移動速度が2秒間にわたり50%上昇する。\n\nTags: 神速, 喉かき, 抑圧不可, 注入可能, ダメージ, 物理, クールダウン, 移動.",
			"koKR": "재사용 대기시간: 9초\n행운의 적중 확률: 100% (per hit)\n저지 불가 상태가 되어 그림자를 통해 빠르게 이동한 후 대상을 후방에서 찔러 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}%의 피해를 줍니다. 이후 2초 동안 이동 속도가 50% 증가합니다.\n\nTags: 날쌘 몸놀림, 암살, 저지 불가, 주입 가능, 피해, 물리, 재사용 대기시간, 이동.",
			"plPL": "Czas odnowienia: 9 sek.\nSzansa na szczęśliwy traf: 100% (per hit)\nZyskujesz nieustępliwość i przemykasz szybko wśród cieni, a następnie dźgasz od tyłu wroga i zadajesz mu {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% pkt. obrażeń. Zyskujesz następnie 50% do szybkości ruchu przez 2 sek.\n\nTags: Zwinność, Napaść, Nieustępliwość, Nasycalne, Obrażenia, Fizyczne, Odnowienie, Ruch.",
			"ptBR": "Recarga: 9 segundos\nChance de Golpe de Sorte: 100% (per hit)\nVocê fica implacável e move-se rapidamente pelas sombras para apunhalar a vítima por trás, causando {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% de dano. Depois, recebe 50% de velocidade de movimento aumentada por 2 segundos.\n\nTags: Agilidade, Degola, Implacável, Imbuível, Dano, Física, Recarga, Movimento.",
			"ruRU": "Время восстановления: 9 сек.\nВероятность удачного удара: 100% (per hit)\nВы становитесь неудержимым, быстро идете к цели сквозь тень и бьете ее в спину, нанося {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% ед. урона. После этого ваша скорость передвижения повышается на 50% на 2 сек.\n\nTags: Ловкость, Головорез, Неудержимость, Насыщение, Урон, Физический урон, Время восстановления, Движение.",
			"zhCN": "冷却时间: 9 秒\n幸运一击几率: 100% (per hit)\n变得不可阻挡, 快速穿过暗影并从背后刺击受害者, 造成 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% 点伤害。之后移动速度提高 50%, 持续 2 秒。\n\nTags: 敏捷, 刺杀, 不可阻挡, 可灌注, 伤害, 物理, 冷却时间, 移动.",
			"zhTW": "冷卻時間: 9 秒\n幸運觸發機率: 100% (per hit)\n進入無阻狀態,快速穿越陰影並從後方刺擊敵人,造成 {72/79.2/86.4/93.6/100.8/108/115.2/122.4/129.6/136.8}% 點傷害。移動速度提高 50%,持續 2 秒。\n\nTags: 靈巧, 割喉, 無阻, 可灌注, 傷害, 物理, 冷卻時間, 移動."
},
		id: 43,
		maxPoints: 5,
		x: 5.42,
		y: -278.485
	},
	"Enhanced Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Shadow Step", "Methodical Shadow Step", "Disciplined Shadow Step" ],
		description: `Damaging an enemy with Shadow Step increases your Critical Strike Chance against them by +8% for 3 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verbesserter Schattenschritt",
			"esES": "Paso de las sombras mejorado",
			"esMX": "Paso Umbrío Potenciado",
			"frFR": "Pas de l'ombre renforcé",
			"itIT": "Passo d'Ombra Rinforzato",
			"jaJP": "シャドウ・ステップ(強化版)",
			"koKR": "강화된 그림자 걸음",
			"plPL": "Wzmocniony Cienisty Krok",
			"ptBR": "Passo Sombrio Aperfeiçoado",
			"ruRU": "Усиленный шаг сквозь тень",
			"zhCN": "强化暗影步",
			"zhTW": "強化暗影步伐"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner mit Schattenschritt Schaden zufügt, wird Eure kritische Trefferchance gegen ihn 3 Sek. lang um +8% erhöht.\n\nTags: Wendigkeit, Meucheln, Unaufhaltsam, Infusionsfähig, Schaden, Physisch, Abklingzeit, Bewegung.",
			"esES": "Infligir daño a un enemigo con Paso de las sombras aumenta tu probabilidad de golpe crítico contra él un +8% durante 3 s.\n\nTags: Agilidad, Degollación, Imparable, Imbuible, Daño, Física, Tiempo de reutilización, Movimiento.",
			"esMX": "Dañar a un enemigo con Paso Umbrío aumenta tu probabilidad de golpe crítico en su contra un +8% durante 3 segundos.\n\nTags: Agilidad, Degollador, Imparable, Imbuible, Daño, Física, Recuperación, Movimiento.",
			"frFR": "Infliger des dégâts à une cible avec Pas de l'ombre augmente vos chances de lui infliger un coup critique de +8% pendant 3 s.\n\nTags: Agilité, Coupe-jarret, Inarrêtable, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge, Déplacement.",
			"itIT": "Danneggiare un nemico con Passo d'Ombra aumenta le tue probabilità di critico contro di lui del +8% per 3 s.\n\nTags: Agilità, Sgozzamento, Inarrestabile, Infondibile, Danni, Fisico, Tempo di recupero, Movimento.",
			"jaJP": "操作障害効果を受けた敵に〈シャドウ・ステップ〉のダメージを与えると、その敵へのクリティカルヒット率が3秒間にわたり+8%上昇する。\n\nTags: 神速, 喉かき, 抑圧不可, 注入可能, ダメージ, 物理, クールダウン, 移動.",
			"koKR": "그림자 걸음이 적에게 피해를 주면 3 초 동안 해당 적에 대한 극대화 확률이 +8% 증가합니다.\n\nTags: 날쌘 몸놀림, 암살, 저지 불가, 주입 가능, 피해, 물리, 재사용 대기시간, 이동.",
			"plPL": "Zranienie wroga Cienistym Krokiem zwiększa twoją szansę na zadanie mu trafienia krytycznego o +8% na 3 sek.\n\nTags: Zwinność, Napaść, Nieustępliwość, Nasycalne, Obrażenia, Fizyczne, Odnowienie, Ruch.",
			"ptBR": "Causar dano a um inimigo com Passo Sombrio aumenta sua chance de acerto crítico contra ele em +8% por 3 segundos.\n\nTags: Agilidade, Degola, Implacável, Imbuível, Dano, Física, Recarga, Movimento.",
			"ruRU": "Когда \"Шаг сквозь тень\" наносит противнику урон, вероятность нанести этой цели критический урон повышается на +8% на 3 сек.\n\nTags: Ловкость, Головорез, Неудержимость, Насыщение, Урон, Физический урон, Время восстановления, Движение.",
			"zhCN": "暗影步对一名敌人造成伤害时, 你对其造成暴击的几率提高 +8%, 持续 3 秒。\n\nTags: 敏捷, 刺杀, 不可阻挡, 可灌注, 伤害, 物理, 冷却时间, 移动.",
			"zhTW": "以暗影步伐對敵人造成傷害,會使你對其的爆擊機率提高 +8%,持續 3 秒。\n\nTags: 靈巧, 割喉, 無阻, 可灌注, 傷害, 物理, 冷卻時間, 移動."
},
		id: 44,
		maxPoints: 1,
		x: 4.62,
		y: -479.05
	},
	"Methodical Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Enemies damaged by Shadow Step are Stunned for 2 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Methodischer Schattenschritt",
			"esES": "Paso de las sombras metódico",
			"esMX": "Paso Umbrío Metódico",
			"frFR": "Pas de l'ombre méthodique",
			"itIT": "Passo d'Ombra Metodico",
			"jaJP": "シャドウ・ステップ(緻密)",
			"koKR": "체계적 그림자 걸음",
			"plPL": "Metodyczny Cienisty Krok",
			"ptBR": "Passo Sombrio Metódico",
			"ruRU": "Методичный шаг сквозь тень",
			"zhCN": "有序暗影步",
			"zhTW": "訓規暗影步伐"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Schattenschritt Schaden erleiden, sind 2 Sek. lang betäubt.\n\nTags: Wendigkeit, Meucheln, Unaufhaltsam, Infusionsfähig, Schaden, Physisch, Abklingzeit, Bewegung.",
			"esES": "Los enemigos dañados por Paso de las sombras quedan aturdidos durante 2 s.\n\nTags: Agilidad, Degollación, Imparable, Imbuible, Daño, Física, Tiempo de reutilización, Movimiento.",
			"esMX": "Los enemigos dañados por Paso Umbrío quedan aturdidos durante 2 segundos.\n\nTags: Agilidad, Degollador, Imparable, Imbuible, Daño, Física, Recuperación, Movimiento.",
			"frFR": "Les cibles blessées par Pas de l'ombre sont étourdies pendant 2 s.\n\nTags: Agilité, Coupe-jarret, Inarrêtable, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge, Déplacement.",
			"itIT": "I nemici colpiti da Passo d'Ombra sono storditi per 2 s.\n\nTags: Agilità, Sgozzamento, Inarrestabile, Infondibile, Danni, Fisico, Tempo di recupero, Movimento.",
			"jaJP": "〈シャドウ・ステップ〉でダメージを受けた敵が2秒間にわたりスタン状態になる。\n\nTags: 神速, 喉かき, 抑圧不可, 注入可能, ダメージ, 物理, クールダウン, 移動.",
			"koKR": "그림자 걸음의 피해를 받은 적이 2초 동안 기절합니다.\n\nTags: 날쌘 몸놀림, 암살, 저지 불가, 주입 가능, 피해, 물리, 재사용 대기시간, 이동.",
			"plPL": "Wrogowie, którzy otrzymali obrażenia od Cienistego Kroku, zostają ogłuszeni na 2 sek.\n\nTags: Zwinność, Napaść, Nieustępliwość, Nasycalne, Obrażenia, Fizyczne, Odnowienie, Ruch.",
			"ptBR": "Inimigos atingidos por Passo Sombrio ficam atordoados por 2 segundos.\n\nTags: Agilidade, Degola, Implacável, Imbuível, Dano, Física, Recarga, Movimento.",
			"ruRU": "Когда \"Шаг сквозь тень\" наносит противникам урон, он оглушает их на 2 сек.\n\nTags: Ловкость, Головорез, Неудержимость, Насыщение, Урон, Физический урон, Время восстановления, Движение.",
			"zhCN": "暗影步对敌人造成伤害时使其昏迷 2 秒。\n\nTags: 敏捷, 刺杀, 不可阻挡, 可灌注, 伤害, 物理, 冷却时间, 移动.",
			"zhTW": "受到暗影步伐傷害的敵人會昏迷 2 秒。\n\nTags: 靈巧, 割喉, 無阻, 可灌注, 傷害, 物理, 冷卻時間, 移動."
},
		id: 45,
		maxPoints: 1,
		x: -150.428,
		y: -594.06
	},
	"Disciplined Shadow Step": {
		baseSkill: "Shadow Step",
		connections: [ "Enhanced Shadow Step" ],
		description: `Shadow Step's Cooldown is reduced by 3 seconds when it damages an enemy you have not hit with Shadow Step in the last 4 seconds.

Tags: Agility, Cutthroat, Unstoppable, Imbueable, Damage, Physical, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Disziplinierter Schattenschritt",
			"esES": "Paso de las sombras disciplinado",
			"esMX": "Paso Umbrío Disciplinado",
			"frFR": "Pas de l'ombre discipliné",
			"itIT": "Passo d'Ombra Disciplinato",
			"jaJP": "シャドウ・ステップ(鍛錬)",
			"koKR": "절제된 그림자 걸음",
			"plPL": "Zdyscyplinowany Cienisty Krok",
			"ptBR": "Passo Sombrio Disciplinado",
			"ruRU": "Упорядоченный шаг сквозь тень",
			"zhCN": "戒律暗影步",
			"zhTW": "戒令暗影步伐"
},
		descriptionLocalized: {
			"deDE": "Die Abklingzeit von Schattenschritt ist um 3 Sek. reduziert, wenn er einem Gegner Schaden zufügt, den Ihr in den letzten 4 Sek. nicht mit Schattenschritt getroffen habt.\n\nTags: Wendigkeit, Meucheln, Unaufhaltsam, Infusionsfähig, Schaden, Physisch, Abklingzeit, Bewegung.",
			"esES": "El tiempo de reutilización de Paso de las sombras se reduce 3 s cuando inflige daño a un enemigo al que no has golpeado con Paso de las sombras durante los últimos 4 s.\n\nTags: Agilidad, Degollación, Imparable, Imbuible, Daño, Física, Tiempo de reutilización, Movimiento.",
			"esMX": "La recuperación de Paso Umbrío se reduce 3 segundos cuando daña a un enemigo que no has golpeado con Paso Umbrío en los últimos 4 segundos.\n\nTags: Agilidad, Degollador, Imparable, Imbuible, Daño, Física, Recuperación, Movimiento.",
			"frFR": "Le temps de recharge de Pas de l'ombre est réduit de 3 s lorsqu'il inflige des dégâts à une cible que vous n'avez pas touchée avec Pas de l'ombre au cours des 4 dernières secondes.\n\nTags: Agilité, Coupe-jarret, Inarrêtable, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge, Déplacement.",
			"itIT": "Il tempo di recupero di Passo d'Ombra si riduce di 3 s quando danneggia un nemico che non hai colpito con Passo d'Ombra negli ultimi 4 s.\n\nTags: Agilità, Sgozzamento, Inarrestabile, Infondibile, Danni, Fisico, Tempo di recupero, Movimento.",
			"jaJP": "直近の4秒に〈シャドウ・ステップ〉を当てていない敵にダメージを与えると、〈シャドウ・ステップ〉のクールダウンが3秒短くなる。\n\nTags: 神速, 喉かき, 抑圧不可, 注入可能, ダメージ, 物理, クールダウン, 移動.",
			"koKR": "그림자 걸음이 최근 4초 동안 그림자 걸음으로 피해를 주지 않은 적에게 피해를 주면 그림자 걸음의 재사용 대기시간이 3초 감소합니다.\n\nTags: 날쌘 몸놀림, 암살, 저지 불가, 주입 가능, 피해, 물리, 재사용 대기시간, 이동.",
			"plPL": "Czas odnowienia Cienistego Kroku jest skrócony o 3 sek., kiedy przy użyciu tej umiejętności ranisz wroga, który nie otrzymał od niej obrażeń w ciągu ostatnich 4 sek.\n\nTags: Zwinność, Napaść, Nieustępliwość, Nasycalne, Obrażenia, Fizyczne, Odnowienie, Ruch.",
			"ptBR": "A recarga de Passo Sombrio é reduzida em 3 segundos ao causar dano a um inimigo que você não atingiu com Passo Sombrio nos últimos 4 segundos.\n\nTags: Agilidade, Degola, Implacável, Imbuível, Dano, Física, Recarga, Movimento.",
			"ruRU": "Когда \"Шаг сквозь тень\" поражает противника, которому вы не наносили урон этим умением в течение последних 4 сек., время восстановления \"Шага сквозь тень\" сокращается на 3 сек.\n\nTags: Ловкость, Головорез, Неудержимость, Насыщение, Урон, Физический урон, Время восстановления, Движение.",
			"zhCN": "在过去的 4 秒内当你用暗影步对一个未曾命中过的敌人造成伤害时, 暗影步的冷却时间缩短 3 秒。\n\nTags: 敏捷, 刺杀, 不可阻挡, 可灌注, 伤害, 物理, 冷却时间, 移动.",
			"zhTW": "以暗影步伐對 4 秒內未被你的暗影步伐擊中的敵人造成傷害時,其冷卻時間降低3 秒。\n\nTags: 靈巧, 割喉, 無阻, 可灌注, 傷害, 物理, 冷卻時間, 移動."
},
		id: 46,
		maxPoints: 1,
		x: 157.65,
		y: -595.05
	},
	"Dash": {
		connections: [ "Enhanced Dash", "Agility" ],
		description: `Charges: 2
Charge Cooldown: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} seconds
Lucky Hit Chance: 25% (per hit)
Dash forward and slash enemies for {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% damage.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Preschen",
			"esES": "Carrera",
			"esMX": "Arremetida",
			"frFR": "Célérité",
			"itIT": "Scatto",
			"jaJP": "ダッシュ",
			"koKR": "질주",
			"plPL": "Pęd",
			"ptBR": "Disparada",
			"ruRU": "Рывок",
			"zhCN": "疾行斩",
			"zhTW": "疾衝"
},
		descriptionLocalized: {
			"deDE": "Aufladungen: 2\nAufladungsabklingzeit: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} Sek.\nGlückstrefferchance: 25% (per hit)\nPrescht vorwärts und versetzt Gegnern Hiebe, die {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% Schaden verursachen.\n\nTags: Wendigkeit, Meucheln, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "Cargas: 2\nTiempo de reutilización de las cargas: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} s\nProbabilidad de golpe de suerte: 25% (per hit)\nCorres hacia delante y rajas a los enemigos, lo que inflige {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de daño.\n\nTags: Agilidad, Degollación, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "Cargas: 2\nRecuperación de carga: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} segundos\nProbabilidad de golpe afortunado: 25% (per hit)\nArremetes hacia adelante, cortas a los enemigos y les infliges {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de daño.\n\nTags: Agilidad, Degollador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "Charges: 2\nTemps de recharge des charges: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} s\nChances d'obtenir un coup de chance: 25% (per hit)\nVous foncez sur les adversaires et les lacérez en infligeant {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% points de dégâts.\n\nTags: Agilité, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Cariche: 2\nTempo di recupero cariche: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} s\nProbabilità di colpo fortunato: 25% (per hit)\nScatti in avanti e colpisci i nemici, infliggendo {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% danni.\n\nTags: Agilità, Sgozzamento, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "チャージ: 2\nチャージのクールダウン: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2}秒\n幸運の一撃発生率: 25% (per hit)\n前方に突進して敵を斬りつけ、{32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%のダメージを与える。\n\nTags: 神速, 喉かき, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "충전: 2\n충전 재사용 대기시간: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2}초\n행운의 적중 확률: 25% (per hit)\n앞으로 질주하며 적을 베어 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}%의 피해를 줍니다.\n\nTags: 날쌘 몸놀림, 암살, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Ładunki: 2\nCzas odnowienia ładunku: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} sek.\nSzansa na szczęśliwy traf: 25% (per hit)\nPędzisz naprzód i tniesz wrogów, zadając {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% pkt. obrażeń.\n\nTags: Zwinność, Napaść, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Cargas: 2\nRecarga de cargas: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} segundos\nChance de Golpe de Sorte: 25% (per hit)\nAvança e retalha os inimigos, causando {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% de dano.\n\nTags: Agilidade, Degola, Imbuível, Dano, Física, Recarga.",
			"ruRU": "Количество зарядов: 2.\nВремя восстановления заряда: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} сек.\nВероятность удачного удара: 25% (per hit)\nВы делаете рывок вперед и атакуете противников, нанося {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% ед. урона.\n\nTags: Ловкость, Головорез, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "使用次数: 2\n充能冷却时间: {12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} 秒\n幸运一击几率: 25% (per hit)\n冲向前方并劈砍敌人, 造成 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% 点伤害。\n\nTags: 敏捷, 刺杀, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "使用次數:2\n使用次數冷卻時間:{12/11.4/10.8/10.32/9.84/9.48/9.12/8.88/8.64/8.4/8.16/7.92/7.8/7.68/7.56/7.44/7.38/7.32/7.26/7.2} 秒\n幸運觸發機率: 25% (per hit)\n衝上前斬擊敵人,造成 {32/35.2/38.4/41.6/44.8/48/51.2/54.4/57.6/60.8}% 點傷害。\n\nTags: 靈巧, 割喉, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 47,
		maxPoints: 5,
		x: 9.47,
		y: 289.26
	},
	"Enhanced Dash": {
		baseSkill: "Dash",
		connections: [ "Dash", "Methodical Dash", "Disciplined Dash" ],
		description: `Enemies damaged by Dash take x20% increased Critical Strike Damage from you for 5 seconds.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbessertes Preschen",
			"esES": "Carrera mejorada",
			"esMX": "Arremetida Potenciada",
			"frFR": "Célérité renforcée",
			"itIT": "Scatto Rinforzato",
			"jaJP": "ダッシュ(強化版)",
			"koKR": "강화된 질주",
			"plPL": "Wzmocniony Pęd",
			"ptBR": "Disparada Aperfeiçoada",
			"ruRU": "Усиленный рывок",
			"zhCN": "强化疾行斩",
			"zhTW": "強化疾衝"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Preschen Schaden erleiden, erleiden 5 Sek. lang x20% mehr kritischen Trefferschaden durch Euch.\n\nTags: Wendigkeit, Meucheln, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "Infliges un x20% más de daño de golpe crítico a los enemigos dañados por Carrera durante 5 s.\n\nTags: Agilidad, Degollación, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "Los enemigos dañados por Arremetida reciben un x20% más de daño de golpe crítico de ti durante 5 segundos.\n\nTags: Agilidad, Degollador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "Les cibles blessées par Célérité subissent x20% de dégâts critiques supplémentaires de votre part pendant 5 s.\n\nTags: Agilité, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "I nemici colpiti da Scatto subiscono da te il x20% di danni critici aggiuntivi per 5 s.\n\nTags: Agilità, Sgozzamento, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈ダッシュ〉で敵にダメージを与えると、自分がその敵に与えるクリティカルダメージが5秒間にわたりx20%増加する。\n\nTags: 神速, 喉かき, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "질주로 피해를 받은 적이 자신에게 5초 동안 받는 극대화 피해가 x20% 증가합니다.\n\nTags: 날쌘 몸놀림, 암살, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Wrogowie, którym Pęd zadał obrażenia, otrzymują przez 5 sek. obrażenia od twoich trafień krytycznych zwiększone o x20%.\n\nTags: Zwinność, Napaść, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Inimigos atingidos por Disparada recebem 20% de dano de acerto crítico aumentado de você por 5 segundos.\n\nTags: Agilidade, Degola, Imbuível, Dano, Física, Recarga.",
			"ruRU": "Противники, пораженные \"Рывком\", получают от вас на x20% больше критического урона в течение 5 сек.\n\nTags: Ловкость, Головорез, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "疾行斩对敌人造成伤害时, 你对其造成的暴击伤害提高 x20%, 持续 5 秒。\n\nTags: 敏捷, 刺杀, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "你對遭疾衝傷害的敵人造成的爆擊傷害提高 x20%,持續 5 秒。\n\nTags: 靈巧, 割喉, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 48,
		maxPoints: 1,
		x: 10.465,
		y: 496.62
	},
	"Methodical Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dealing damage to Crowd Controlled enemies with Dash reduces its Charge Cooldown by 0.5 seconds, up to 3 seconds per cast.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Methodisches Stürmen",
			"esES": "Carrera metódica",
			"esMX": "Arremetida Metódica",
			"frFR": "Célérité méthodique",
			"itIT": "Scatto Metodico",
			"jaJP": "ダッシュ(緻密)",
			"koKR": "체계적 질주",
			"plPL": "Metodyczny Pęd",
			"ptBR": "Disparada Metódica",
			"ruRU": "Методичный рывок",
			"zhCN": "有序疾行斩",
			"zhTW": "訓規疾衝"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mit Preschen Gegnern Schaden zufügt, die unter Kontrollverlusteffekten leiden, wird die Aufladungsabklingzeit der Fertigkeit um 0.5 Sek. reduziert, bis maximal 3 Sek. pro Einsatz.\n\nTags: Wendigkeit, Meucheln, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "Infligir daño a enemigos afectados por control de masas con Carrera reduce 0.5 s el tiempo de reutilización de las cargas, hasta 3 s por lanzamiento.\n\nTags: Agilidad, Degollación, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "Infligir daño a enemigos bajo los efectos de control de multitudes con Arremetida reduce su recuperación de carga 0.5 segundos, hasta un máximo de 3 segundos por lanzamiento.\n\nTags: Agilidad, Degollador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "Infliger des dégâts avec Célérité à des adversaires subissant un effet de perte de contrôle réduit son temps de recharge de 0.5 s, jusqu'à un maximum de 3 s par utilisation.\n\nTags: Agilité, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Infliggere danni ai nemici sotto effetti debilitanti con Scatto riduce il tempo di recupero di una carica di 0.5 s, fino a un massimo di 3 s per lancio.\n\nTags: Agilità, Sgozzamento, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "操作障害効果を受けた敵に対して〈ダッシュ〉でダメージを与えると、〈ダッシュ〉のクールダウンが0.5秒短縮される。短縮量は1回の発動で最大3秒。\n\nTags: 神速, 喉かき, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "질주로 군중 제어 상태의 적에게 피해를 주면 시전당 충전 재사용 대기시간이 0.5초만큼, 최대 3초까지 감소합니다.\n\nTags: 날쌘 몸놀림, 암살, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Zadawanie obrażeń Pędem wrogom o ograniczonej kontroli skraca czas odnowienia ładunku o 0.5 sek., maksymalnie do 3 sek. za każde użycie umiejętności.\n\nTags: Zwinność, Napaść, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Causar dano com Disparada a inimigos sob controle de grupo reduz a recarga de cargas em 0.5 segundos, até 3 segundos por lançamento.\n\nTags: Agilidade, Degola, Imbuível, Dano, Física, Recarga.",
			"ruRU": "Когда \"Рывок\" наносит урон противникам под действием эффектов контроля, время восстановления его заряда сокращается на 0.5 сек. вплоть до 3 сек. за каждое применение.\n\nTags: Ловкость, Головорез, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "使用疾行斩对被群控的敌人造成伤害可以使其充能冷却时间缩短 0.5 秒, 每次施放最多缩短 3 秒。\n\nTags: 敏捷, 刺杀, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "以疾衝對受到控場效果的敵人造成傷害,可縮短使用次數冷卻時間 0.5 秒,每次施展最多縮短 3 秒。\n\nTags: 靈巧, 割喉, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 49,
		maxPoints: 1,
		x: -154.131,
		y: 595.963
	},
	"Disciplined Dash": {
		baseSkill: "Dash",
		connections: [ "Enhanced Dash" ],
		description: `Dash Slows enemies it hits by 30% for 3 seconds. Any enemy already Slowed will be Dazed for 2 seconds instead.

Tags: Agility, Cutthroat, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Diszipliniertes Stürmen",
			"esES": "Carrera disciplinada",
			"esMX": "Arremetida Disciplinada",
			"frFR": "Célérité disciplinée",
			"itIT": "Scatto Disciplinato",
			"jaJP": "ダッシュ(鍛錬)",
			"koKR": "절제된 질주",
			"plPL": "Zdyscyplinowany Pęd",
			"ptBR": "Disparada Disciplinada",
			"ruRU": "Упорядоченный рывок",
			"zhCN": "戒律疾行斩",
			"zhTW": "戒令疾衝"
},
		descriptionLocalized: {
			"deDE": "Preschen verlangsamt getroffene Gegner 3 Sek. lang um 30%. Bereits verlangsamte Gegner werden stattdessen 2 Sek. lang benommen.\n\nTags: Wendigkeit, Meucheln, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "Carrera ralentiza a los enemigos que golpea un 30% durante 3 s. Si el enemigo ya está ralentizado, lo atonta durante 2 s en su lugar.\n\nTags: Agilidad, Degollación, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "Arremetida ralentiza a los enemigos golpeados un 30% durante 3 segundos. Los enemigos que ya están ralentizados serán atontados durante 2 segundos.\n\nTags: Agilidad, Degollador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "Célérité ralentit les cibles touchées de 30% pendant 3 s. Les cibles déjà ralenties sont hébétées pendant 2 s à la place.\n\nTags: Agilité, Coupe-jarret, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Scatto rallenta i nemici che colpisce del 30% per 3 s. I nemici già rallentati subiranno Frastornamento per 2 s.\n\nTags: Agilità, Sgozzamento, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈ダッシュ〉が命中した敵は、3秒間にわたり移動速度が30%低下する。敵の移動速度がすでに低下していた場合は、代わりに2秒間にわたり朦朧状態になる。\n\nTags: 神速, 喉かき, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "질주가 적중한 적을 3초 동안 30% 감소시킵니다. 적이 이미 감속 상태인 경우 대신 2초 동안 멍해집니다.\n\nTags: 날쌘 몸놀림, 암살, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Pęd spowalnia trafionych wrogów o 30% na 3 sek. Cele spowolnione wcześniej zostaną zamiast tego oszołomione na 2 sek.\n\nTags: Zwinność, Napaść, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Disparada desacelera inimigos atingidos em 30% por 3 segundos. Qualquer inimigo já desacelerado ficará sob torpor por 2 segundos.\n\nTags: Agilidade, Degola, Imbuível, Dano, Física, Recarga.",
			"ruRU": "\"Рывок\" замедляет пораженных противников на 30% на 3 сек. У уже замедленных противников вместо этого начинается головокружение, действующее 2 сек.\n\nTags: Ловкость, Головорез, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "疾行斩使命中的敌人减速 30%, 持续 3 秒。已被减速的敌人会被眩晕, 持续 2 秒。\n\nTags: 敏捷, 刺杀, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "疾衝可使擊中的敵人緩速 30%,持續 3 秒。任何已遭緩速的敵人會改為暈眩 2 秒。\n\nTags: 靈巧, 割喉, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 50,
		maxPoints: 1,
		x: 170.02,
		y: 597.246
	},
	"Weapon Mastery": {
		connections: [ "Agility" ],
		description: `Gain a bonus when attacking based on weapon type:
• Daggers: x{5/10/15/20/25/30/35/40/45/50}% increased damage to Healthy enemies.
• Swords: x{3/6/9/12/15/18/21/24/27/30}% increased damage.
• Bows: x{4/8/12/16/20/24/28/32/36/40}% increased damage to Vulnerable enemies.
• Crossbows: x{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Damage.

Tags: Vulnerable, Healthy, Critical Strikes, Damage.`,
		nameLocalized: {
			"deDE": "Waffenbeherrschung",
			"esES": "Dominio de las armas",
			"esMX": "Dominio de Arma",
			"frFR": "Maîtrise d'arme",
			"itIT": "Dominio delle Armi",
			"jaJP": "武器の達人",
			"koKR": "무기 숙련",
			"plPL": "Mistrzostwo Broni",
			"ptBR": "Maestria em Armas",
			"ruRU": "Мастер оружия",
			"zhCN": "武器精通",
			"zhTW": "武器專精"
},
		descriptionLocalized: {
			"deDE": "Erhaltet je nach Waffentyp einen Angriffsbonus:\n• Dolche: x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden gegen gesunde Gegner.\n• Schwerter: x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden.\n• Bögen: x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden gegen verwundbare Gegner.\n• Armbrüste: x{5/10/15/20/25/30/35/40/45/50}% mehr kritischer Trefferschaden.\n\nTags: Verwundbar, Gesund, Kritische Treffer, Schaden.",
			"esES": "Obtienes un bonus al atacar en función del tipo de arma:\n• Dagas: un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos saludables.\n• Espadas: un x{3/6/9/12/15/18/21/24/27/30}% más de daño.\n• Arcos: un x{4/8/12/16/20/24/28/32/36/40}% más de daño a enemigos vulnerables.\n• Ballestas: un x{5/10/15/20/25/30/35/40/45/50}% más de daño de golpe crítico.\n\nTags: Vulnerable, Saludable, Golpes críticos, Daño.",
			"esMX": "Obtienes una bonificación al atacar según el tipo de arma:\n• Dagas: Un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos saludables.\n• Espadas: Un x{3/6/9/12/15/18/21/24/27/30}% más de daño.\n• Arcos: Un x{4/8/12/16/20/24/28/32/36/40}% más de daño a enemigos vulnerables.\n• Ballestas: Un x{5/10/15/20/25/30/35/40/45/50}% más de daño de golpe crítico.\n\nTags: Vulnerable, Saludable, Golpes críticos, Daño.",
			"frFR": "Vous bénéficiez d'un bonus lorsque vous attaquez en fonction du type d'arme utilisé :\n• Dagues: x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires aux cibles en bonne santé.\n• Épées: x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires.\n• Arcs: x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires aux cibles vulnérables.\n• Arbalètes: x{5/10/15/20/25/30/35/40/45/50}% de dégâts critiques supplémentaires.\n\nTags: Vulnérable, En bonne santé, Coups critiques, Dégâts.",
			"itIT": "Fornisce un bonus quando attacchi in base al tipo di arma:\n• Pugnali: x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi ai nemici in salute.\n• Spade: x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi.\n• Archi: x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi ai nemici vulnerabili.\n• Balestre: x{5/10/15/20/25/30/35/40/45/50}% di danni critici aggiuntivi.\n\nTags: Vulnerabilità, In salute, Colpi critici, Danni.",
			"jaJP": "攻撃時、武器の種類に応じてボーナスを獲得する:\n• ダガー: 健全状態の敵に対するダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n• 剣: ダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n• 弓: 脆弱状態の敵へのダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n• クロスボウ: クリティカルヒットダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 脆弱, 健全, クリティカルヒット, ダメージ.",
			"koKR": "무기 유형에 따라 공격 시 강화 효과를 얻습니다.\n• 단도: 건강 상태의 적에게 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n• 도검: 공격력이 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n• 활: 취약 상태의 적에게 주는 피해가 최대 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n• 쇠뇌: 극대화 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 취약, 건강, 극대화, 피해.",
			"plPL": "Zyskujesz premię w zależności od rodzaju używanej broni:\n• Sztylety: obrażenia są zwiększone o x{5/10/15/20/25/30/35/40/45/50}%, gdy atakujesz wroga będącego w pełni sił.\n• Miecze: obrażenia są zwiększone o x{3/6/9/12/15/18/21/24/27/30}%.\n• Łuki: obrażenia zadawane odsłoniętym wrogom są zwiększone o x{4/8/12/16/20/24/28/32/36/40}%.\n• Kusze: obrażenia od trafień krytycznych są zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Odsłonięcie, Pełnia Sił, Trafienia Krytyczne, Obrażenia.",
			"ptBR": "Recebe um bônus ao atacar com base no tipo de arma:\n• Adagas: {5/10/15/20/25/30/35/40/45/50}% de dano aumentado contra inimigos saudáveis.\n• Espadas: {3/6/9/12/15/18/21/24/27/30}% de dano aumentado.\n• Arcos: {4/8/12/16/20/24/28/32/36/40}% de dano aumentado contra inimigos vulneráveis.\n• Bestas: {5/10/15/20/25/30/35/40/45/50}% de dano de acerto crítico aumentado.\n\nTags: Vulnerável, Saudável, Acertos Críticos, Dano.",
			"ruRU": "Ваши атаки усиливаются в зависимости от типа оружия:\n• Кинжалы: урон при атаке противников с высоким уровнем здоровья увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n• Мечи: урон увеличивается на x{3/6/9/12/15/18/21/24/27/30}%.\n• Луки: урон увеличивается на x{4/8/12/16/20/24/28/32/36/40}% в бою с уязвимыми противниками.\n• Арбалеты: критический урон увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Уязвимость, Высокое здоровье, Критические удары, Урон.",
			"zhCN": "攻击时根据武器类型获得加成:\n• 匕首: 对健康敌人造成的伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n• x剑: 造成的伤害提高 42001705.874%。\n• 弓: 对处于易伤状态的敌人造成的伤害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n• 弩: 暴击伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 易伤, 健康, 暴击, 伤害.",
			"zhTW": "攻擊時會依照武器類型獲得加成:\n• 匕首:對健康敵人的傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n• 劍:傷害提高 x{3/6/9/12/15/18/21/24/27/30}%。\n• 弓:對易傷敵人的傷害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n• 弩:爆擊傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 易傷, 健康, 爆擊, 傷害."
},
		id: 51,
		maxPoints: 3,
		x: -590.813,
		y: 1.36
	},
	"Concussive": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `After Knocking Back or Knocking Down an enemy, you gain +{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Chance against them for 3 seconds.

Tags: Crowd Control, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Erschütterung",
			"esES": "Magullador",
			"esMX": "Conmocionante",
			"frFR": "Traumatisme",
			"itIT": "Concussione",
			"jaJP": "振盪",
			"koKR": "충격",
			"plPL": "Wstrząsy",
			"ptBR": "Concussão",
			"ruRU": "Фугасный снаряд",
			"zhCN": "震荡打击",
			"zhTW": "震盪"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr einen Gegner zurückgestoßen oder niedergeschlagen habt, ist Eure kritische Trefferchance gegen diesen Gegner 3 Sek. lang um +{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Kontrollverlust, Kritische Treffer.",
			"esES": "Tras repeler o derribar a un enemigo, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe crítico contra él durante 3 s.\n\nTags: Control de masas, Golpes críticos.",
			"esMX": "Después de repeler o derribar a un enemigo, tienes un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de asestarle un golpe crítico durante 3 segundos.\n\nTags: Control de multitudes, Golpes críticos.",
			"frFR": "Après avoir repoussé ou renversé une cible, vos chances de lui infliger un coup critique sont augmentées de +{5/10/15/20/25/30/35/40/45/50}% pendant 3 s.\n\nTags: Perte de contrôle, Coups critiques.",
			"itIT": "Dopo aver respinto indietro o fatto cadere un nemico, la probabilità di critico contro di lui aumenta del +{5/10/15/20/25/30/35/40/45/50}% per 3 s.\n\nTags: Effetti debilitanti, Colpi critici.",
			"jaJP": "敵1体をノックバックまたはノックダウンさせた後、その敵に対するクリティカルヒット率が3秒間にわたり+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: 操作障害効果, クリティカルヒット.",
			"koKR": "적을 밀쳐내거나 넘어뜨린 후, 3초 동안 해당 적을 상대로 극대화 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 군중 제어, 극대화.",
			"plPL": "Po odrzuceniu lub powaleniu wroga zyskujesz zwiększoną o +{5/10/15/20/25/30/35/40/45/50}% szansę na zadanie mu trafienia krytycznego przez 3 sek.\n\nTags: Ograniczanie Kontroli, Trafienia Krytyczne.",
			"ptBR": "Depois de repelir ou nocautear um inimigo, você recebe +{5/10/15/20/25/30/35/40/45/50}% de chance de acerto crítico aumentada contra ele por 3 segundos.\n\nTags: Controle de Grupo, Acertos Críticos.",
			"ruRU": "Когда вы отбрасываете противника или сбиваете его с ног, вероятность нанести ему критический удар повышается на +{5/10/15/20/25/30/35/40/45/50}% на 3 сек.\n\nTags: Контроль, Критические удары.",
			"zhCN": "击退或击倒一名敌人后, 你对其造成暴击的几率提高 +{5/10/15/20/25/30/35/40/45/50}%, 持续 3 秒。\n\nTags: 群控, 暴击.",
			"zhTW": "在擊退或擊倒敵人後,你對其的爆擊機率提高 +{5/10/15/20/25/30/35/40/45/50}%,持續 3 秒。\n\nTags: 控場, 爆擊."
},
		id: 52,
		maxPoints: 3,
		x: 645.39,
		y: 181.745
	},
	"Trick Attacks": {
		connections: [ "Rapid Gambits", "Concussive" ],
		description: `When you Critically Strike a Dazed enemy they are Knocked Down for {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Daze, Crowd Control, Critical Strikes.`,
		nameLocalized: {
			"deDE": "Listige Angriffe",
			"esES": "Ataques con truco",
			"esMX": "Ataques con Truco",
			"frFR": "Attaques trompeuses",
			"itIT": "Attacchi Ingannevoli",
			"jaJP": "秘技攻撃",
			"koKR": "속임수 공격",
			"plPL": "Podstępny Atak",
			"ptBR": "Ataque Ardiloso",
			"ruRU": "Коварные удары",
			"zhCN": "诡诈攻击",
			"zhTW": "詭詐攻擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen kritischen Treffer gegen einen benommenen Gegner erzielt, wird er {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek. lang niedergeschlagen.\n\nTags: Benommenheit, Kontrollverlust, Kritische Treffer.",
			"esES": "Cuando asestas un golpe crítico a un enemigo atontado, queda derribado durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Atontamiento, Control de masas, Golpes críticos.",
			"esMX": "Cuando asestas un golpe crítico a un enemigo atontado, es derribado durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Atontar, Control de multitudes, Golpes críticos.",
			"frFR": "Lorsque vous infligez un coup critique à une cible hébétée, celle-ci est renversée pendant {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Hébétement, Perte de contrôle, Coups critiques.",
			"itIT": "Quando infliggi danni critici a un nemico affetto da Frastornamento cadrà a terra per {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Frastornamento, Effetti debilitanti, Colpi critici.",
			"jaJP": "朦朧状態の敵にクリティカルヒットが発生すると、その敵は{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒間にわたりノックダウンする。\n\nTags: 朦朧, 操作障害効果, クリティカルヒット.",
			"koKR": "멍해진 적에게 극대화 공격을 적중시키면 해당 적이 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}초 동안 넘어집니다.\n\nTags: 멍해짐, 군중 제어, 극대화.",
			"plPL": "Po trafieniu krytycznym oszołomionego wroga zostaje on powalony na {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Oszołomienie, Ograniczanie Kontroli, Trafienia Krytyczne.",
			"ptBR": "Ao desferir um acerto crítico contra um inimigo atingido por torpor, ele é nocauteado por {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Torpor, Controle de Grupo, Acertos Críticos.",
			"ruRU": "Нанося критический удар противнику с головокружением, вы сбиваете его с ног на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Головокружение, Контроль, Критические удары.",
			"zhCN": "当你对被眩晕的敌人造成暴击时, 它们将被击倒 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 秒。\n\nTags: 眩晕, 群控, 暴击.",
			"zhTW": "當你對暈眩的敵人造成爆擊時,其會被擊倒 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 秒。\n\nTags: 暈眩, 控場, 爆擊."
},
		id: 143,
		maxPoints: 3,
		x: 483.505,
		y: 485.53
	},
	"Rapid Gambits": {
		connections: [ "Agility", "Trick Attacks" ],
		description: `Your Evade Cooldown is reduced by {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds when you Daze an enemy.

Tags: Daze, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Schnelle Schachzüge",
			"esES": "Gambitos rápidos",
			"esMX": "Tácticas Rápidas",
			"frFR": "Manœuvres expéditives",
			"itIT": "Azzardo Rapido",
			"jaJP": "ラピッド・ガンビット",
			"koKR": "빠른 술수",
			"plPL": "Błyskawiczny Gambit",
			"ptBR": "Manobras Rápidas",
			"ruRU": "Быстрые хитрости",
			"zhCN": "棋行险招",
			"zhTW": "快手先機"
},
		descriptionLocalized: {
			"deDE": "Die Abklingzeit von Entrinnen wird um {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek. reduziert, wenn Ihr einen Gegner benommen macht.\n\nTags: Benommenheit, Kontrollverlust, Abklingzeit.",
			"esES": "El tiempo de reutilización de tu Evadir se reduce {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s cuando atontas a un enemigo.\n\nTags: Atontamiento, Control de masas, Tiempo de reutilización.",
			"esMX": "La recuperación de tu Evadir se reduce {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos cuando atontas a un enemigo.\n\nTags: Atontar, Control de multitudes, Recuperación.",
			"frFR": "Votre temps de recharge d'Esquive est réduit de {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s lorsque vous hébétez une cible.\n\nTags: Hébétement, Perte de contrôle, Temps de recharge.",
			"itIT": "Il tempo di recupero di Elusione si riduce di {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s quando infliggi Frastornamento a un nemico.\n\nTags: Frastornamento, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "敵1体を朦朧状態にすると、回避のクールダウンが{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒短縮される。\n\nTags: 朦朧, 操作障害効果, クールダウン.",
			"koKR": "적을 멍하게 만들 때마다 자신의 피하기 재사용 대기시간이 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}초 감소합니다.\n\nTags: 멍해짐, 군중 제어, 재사용 대기시간.",
			"plPL": "Po oszołomieniu wroga czas odnowienia twojego Odskoku jest skrócony o {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Oszołomienie, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Sua recarga de Evadir é reduzida em {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos ao aplicar torpor em um inimigo.\n\nTags: Torpor, Controle de Grupo, Recarga.",
			"ruRU": "Когда вы вызываете у противника головокружение, время восстановления \"Ускользания\" сокращается на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Головокружение, Контроль, Время восстановления.",
			"zhCN": "当你眩晕一名敌人时, 你的闪避技能的冷却时间缩短 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 秒。\n\nTags: 眩晕, 群控, 冷却时间.",
			"zhTW": "當你使敵人暈眩時,閃避冷卻時間降低 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 秒。\n\nTags: 暈眩, 控場, 冷卻時間."
},
		id: 144,
		maxPoints: 3,
		x: 316.785,
		y: 288.665
	},
	"Caltrops": {
		connections: [ "Enhanced Caltrops", "Agility" ],
		description: `Charges: 2
Charge Cooldown: 12 seconds
Lucky Hit Chance: 25% (per hit)
Leap backwards and throw caltrops on the ground, dealing {30/33/36/39/42/45/48/51/54/57}% damage and Slowing enemies by {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Lasts 6 seconds.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Krähenfüße",
			"esES": "Abrojos",
			"esMX": "Abrojos",
			"frFR": "Chausse-trappe",
			"itIT": "Triboli",
			"jaJP": "鉄菱",
			"koKR": "쇠못 덫",
			"plPL": "Kolczatki",
			"ptBR": "Estrepes",
			"ruRU": "Шипы",
			"zhCN": "铁蒺藜",
			"zhTW": "釘爪刺"
},
		descriptionLocalized: {
			"deDE": "Aufladungen: 2\nAufladungsabklingzeit: 12 Sek.\nGlückstrefferchance: 25% (per hit)\nSpringt zurück und werft Krähenfüße auf den Boden, wodurch Ihr {30/33/36/39/42/45/48/51/54/57}% Schaden verursacht und Gegner um {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}% verlangsamt. Hält 6 Sek. an.\n\nTags: Wendigkeit, Falle, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Cargas: 2\nTiempo de reutilización de las cargas: 12 s\nProbabilidad de golpe de suerte: 25% (per hit)\nSaltas hacia atrás y lanzas al suelo unos abrojos que infligen {30/33/36/39/42/45/48/51/54/57}% de daño y ralentizan un {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}% a los enemigos. Dura 6 s.\n\nTags: Agilidad, Trampa, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Cargas: 2\nRecuperación de carga: 12 segundos\nProbabilidad de golpe afortunado: 25% (per hit)\nSaltas hacia atrás y sueltas abrojos en el suelo que infligen {30/33/36/39/42/45/48/51/54/57}% de daño y ralentizan a los enemigos un {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dura 6 segundos.\n\nTags: Agilidad, Trampa, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Charges: 2\nTemps de recharge des charges: 12 s\nChances d'obtenir un coup de chance: 25% (per hit)\nVous bondissez en arrière et lancez des chausse-trappes au sol qui infligent {30/33/36/39/42/45/48/51/54/57}% points de dégâts et ralentissent les adversaires de {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dure 6 s.\n\nTags: Agilité, Piège, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Cariche: 2\nTempo di recupero cariche: 12 s\nProbabilità di colpo fortunato: 25% (per hit)\nBalzi indietro e lanci dei triboli sul terreno, infliggendo {30/33/36/39/42/45/48/51/54/57}% danni e rallentando i nemici del {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dura 6 s.\n\nTags: Agilità, Trappole, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "チャージ: 2\nチャージのクールダウン: 12秒\n幸運の一撃発生率: 25% (per hit)\n後方に飛び退き、地面に鉄菱をばら撒いて敵に{30/33/36/39/42/45/48/51/54/57}%のダメージを与え、移動速度を{50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%低下させる。6秒間持続する。\n\nTags: 神速, 罠, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "충전: 2\n충전 재사용 대기시간: 12초\n행운의 적중 확률: 25% (per hit)\n뒤로 뛰어오르며 땅에 쇠못 덫을 던져 {30/33/36/39/42/45/48/51/54/57}%의 피해를 주고 적을 {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}% 감속시킵니다. 이 효과는 6초 동안 지속됩니다.\n\nTags: 날쌘 몸놀림, 덫, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Ładunki: 2\nCzas odnowienia ładunku: 12 sek.\nSzansa na szczęśliwy traf: 25% (per hit)\nOdskakujesz do tyłu i rzucasz na ziemię kolczatki, które zadają {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń i spowalniają wrogów o {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Czas działania: 6 sek.\n\nTags: Zwinność, Pułapki, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Cargas: 2\nRecarga de cargas: 12 segundos\nChance de Golpe de Sorte: 25% (per hit)\nSalta para trás e arremessa estrepes no chão, causando {30/33/36/39/42/45/48/51/54/57}% de dano e desacelerando inimigos em {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Dura 6 segundos.\n\nTags: Agilidade, Armadilha, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Количество зарядов: 2.\nВремя восстановления заряда: 12 сек.\nВероятность удачного удара: 25% (per hit)\nВы прыгаете назад, бросая на землю шипы, которые наносят {30/33/36/39/42/45/48/51/54/57}% ед. урона и замедляют противников на {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%. Время действия – 6 сек.\n\nTags: Ловкость, Ловушка, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "使用次数: 2\n充能冷却时间: 12 秒\n幸运一击几率: 25% (per hit)\n向后跳跃并向地面扔下铁蒺藜, 造成 {30/33/36/39/42/45/48/51/54/57}% 点伤害并使敌人减速 {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%。持续 6 秒。\n\nTags: 敏捷, 陷阱, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "使用次數:2\n使用次數冷卻時間:12 秒\n幸運觸發機率: 25% (per hit)\n向後跳躍並將釘爪刺丟到地上,造成 {30/33/36/39/42/45/48/51/54/57}% 點傷害,並使敵人緩速 {50/53.3/56.5/59.4/62.1/64.6/67/69.2/71.3/73.2}%。持續 6 秒。\n\nTags: 靈巧, 陷阱, 控場, 傷害, 物理, 冷卻時間."
},
		id: 53,
		maxPoints: 5,
		x: 542.77,
		y: -1.12
	},
	"Enhanced Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Caltrops", "Methodical Caltrops", "Disciplined Caltrops" ],
		description: `Enemies take x3% increased damage from you each second they are in Caltrops.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Krähenfüße",
			"esES": "Abrojos mejorados",
			"esMX": "Abrojos Potenciados",
			"frFR": "Chausse-trappe renforcée",
			"itIT": "Triboli Rinforzati",
			"jaJP": "鉄菱(強化版)",
			"koKR": "강화된 쇠못 덫",
			"plPL": "Wzmocnione Kolczatki",
			"ptBR": "Estrepes Aperfeiçoados",
			"ruRU": "Усиленные шипы",
			"zhCN": "强化铁蒺藜",
			"zhTW": "強化釘爪刺"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Krähenfüße betroffen sind, erleiden jede Sekunde x3% mehr Schaden durch Euch.\n\nTags: Wendigkeit, Falle, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Infliges un x3% más de daño a los enemigos por cada segundo que permanecen en los abrojos.\n\nTags: Agilidad, Trampa, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Los enemigos reciben un x3% más de daño de ti por cada segundo que permanecen en Abrojos.\n\nTags: Agilidad, Trampa, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Les cibles subissent x3% de dégâts supplémentaires de votre part par seconde passée dans des chausse-trappes.\n\nTags: Agilité, Piège, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "I nemici subiscono il x3% di danni aggiuntivi da te per ogni secondo trascorso in mezzo ai Triboli.\n\nTags: Agilità, Trappole, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "敵が〈鉄菱〉の範囲内にいる時、自分がその敵に与えるダメージが毎秒x3%増加する。\n\nTags: 神速, 罠, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "쇠못 덫 범위 내에 있는 적에게 주는 피해가 매초 x3% 증가합니다.\n\nTags: 날쌘 몸놀림, 덫, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Wrogowie otrzymują od ciebie obrażenia zwiększone o x3% za każdą sekundę spędzoną pod wpływem Kolczatek.\n\nTags: Zwinność, Pułapki, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Inimigos recebem 3% de dano aumentado de você a cada segundo que estiverem em Estrepes.\n\nTags: Agilidade, Armadilha, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "За каждую секунду, проведенную в области действия \"Шипов\", противники получают от вас на x3% больше урона.\n\nTags: Ловкость, Ловушка, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "敌人在铁蒺藜范围内时, 受到来自你的伤害每秒提高 x3%。\n\nTags: 敏捷, 陷阱, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "敵人在釘爪刺範圍內時,你對其造成的傷害每秒提高 x3%。\n\nTags: 靈巧, 陷阱, 控場, 傷害, 物理, 冷卻時間."
},
		id: 54,
		maxPoints: 1,
		x: 938.955,
		y: -0.925
	},
	"Methodical Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `Caltrops now deals Cold damage and Chills enemies for 20% per second.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Methodische Krähenfüße",
			"esES": "Abrojos metódicos",
			"esMX": "Abrojos Metódicos",
			"frFR": "Chausse-trappe méthodique",
			"itIT": "Triboli Metodici",
			"jaJP": "鉄菱(緻密)",
			"koKR": "체계적 쇠못 덫",
			"plPL": "Metodyczne Kolczatki",
			"ptBR": "Estrepes Metódicos",
			"ruRU": "Методичные шипы",
			"zhCN": "有序铁蒺藜",
			"zhTW": "訓規釘爪刺"
},
		descriptionLocalized: {
			"deDE": "Krähenfüße verursacht jetzt Kälteschaden und unterkühlt Gegner in Höhe von bis zu 20% pro Sek.\n\nTags: Wendigkeit, Falle, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Ahora Abrojos inflige daño de frío y hiela a los enemigos un 20% por segundo.\n\nTags: Agilidad, Trampa, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Abrojos ahora inflige daño de frío y aplica un 20% de helamiento por segundo.\n\nTags: Agilidad, Trampa, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Chausse-trappe inflige désormais des dégâts de froid et glace les adversaires à hauteur de 20% par seconde.\n\nTags: Agilité, Piège, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Triboli ora infligge danni da freddo e raggela i nemici del 20% ogni secondo.\n\nTags: Agilità, Trappole, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈鉄菱〉が、敵に冷気ダメージを与え、さらに毎秒20%の冷気効果を付与するようになる。\n\nTags: 神速, 罠, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "쇠못 덫이 이제 냉기 피해를 주고 적에게 매초 20%의 오한을 느끼게 합니다.\n\nTags: 날쌘 몸놀림, 덫, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Kolczatki zadają teraz obrażenia od Zimna i wyziębiają wrogów o 20% na sekundę.\n\nTags: Zwinność, Pułapki, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Estrepes agora causa dano gélido e gela inimigos em 20% por segundo.\n\nTags: Agilidade, Armadilha, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "\"Шипы\" теперь наносят урон от холода и заставляют противников коченеть, уменьшая их подвижность на 20% раз в секунду.\n\nTags: Ловкость, Ловушка, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "铁蒺藜现在造成冰霜伤害并且每秒冻伤敌人 20%。\n\nTags: 敏捷, 陷阱, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "釘爪刺會造成冰寒傷害,每秒附加 20% 冰冷效果。\n\nTags: 靈巧, 陷阱, 控場, 傷害, 物理, 冷卻時間."
},
		id: 55,
		maxPoints: 1,
		x: 1156.86,
		y: -91.955
	},
	"Disciplined Caltrops": {
		baseSkill: "Caltrops",
		connections: [ "Enhanced Caltrops" ],
		description: `You have +5% Critical Strike Chance against enemies inside your Caltrops. Double this amount against Vulnerable enemies.

Tags: Agility, Trap, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Disziplinierte Krähenfüße",
			"esES": "Abrojos disciplinados",
			"esMX": "Abrojos Disciplinados",
			"frFR": "Chausse-trappe disciplinée",
			"itIT": "Triboli Disciplinati",
			"jaJP": "鉄菱(鍛錬)",
			"koKR": "절제된 쇠못 덫",
			"plPL": "Zdyscyplinowane Kolczatki",
			"ptBR": "Estrepes Disciplinados",
			"ruRU": "Упорядоченные шипы",
			"zhCN": "戒律铁蒺藜",
			"zhTW": "戒令釘爪刺"
},
		descriptionLocalized: {
			"deDE": "Ihr verfügt über eine kritische Trefferchance von +5% gegen Gegner, die von Krähenfüße betroffen sind. Der Wert verdoppelt sich bei verwundbaren Gegnern.\n\nTags: Wendigkeit, Falle, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Tienes un +5% de probabilidad de golpe crítico contra los enemigos en el interior de tus abrojos. Esta cantidad se duplica contra enemigos vulnerables.\n\nTags: Agilidad, Trampa, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Tienes un +5% de probabilidad de golpe crítico contra enemigos dentro de tus Abrojos. Esta cantidad se duplica contra enemigos vulnerables.\n\nTags: Agilidad, Trampa, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Vos chances d'infliger un coup critique sont augmentées de +5% contre les cibles prises dans vos chausse-trappes. Cette valeur est doublée contre les cibles vulnérables.\n\nTags: Agilité, Piège, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Ottieni il +5% di probabilità di critico aggiuntiva contro i nemici in mezzo ai Triboli. Questo ammontare raddoppia contro i nemici vulnerabili.\n\nTags: Agilità, Trappole, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈鉄菱〉の範囲内の敵に対するクリティカルヒット率が+5%になる。脆弱状態の敵に対しては発生率が2倍になる。\n\nTags: 神速, 罠, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "쇠못 덫 안의 적에 대한 극대화 확률이 +5% 증가합니다. 적이 취약 상태일 경우 효과가 2배로 증가합니다.\n\nTags: 날쌘 몸놀림, 덫, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Twoja szansa na trafienie krytyczne wrogów pod wpływem twoich Kolczatek jest zwiększona o +5%. Wartość ta jest podwojona w przypadku odsłoniętych wrogów.\n\nTags: Zwinność, Pułapki, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Você tem +5% de chance de acerto crítico contra inimigos dentro dos seus Estrepes. O valor é dobrado contra inimigos vulneráveis.\n\nTags: Agilidade, Armadilha, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Вероятность критического удара повышается на +5% в бою с противниками в области действия ваших \"Шипов\". Это значение удваивается в бою с уязвимыми противниками.\n\nTags: Ловкость, Ловушка, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "你对铁蒺藜范围内的敌人造成暴击几率提高 +5%。该加成对处于易伤状态的敌人翻倍。\n\nTags: 敏捷, 陷阱, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "你對釘爪刺範圍內敵人的爆擊機率提高 +5%。對易傷的敵人此效果加倍。\n\nTags: 靈巧, 陷阱, 控場, 傷害, 物理, 冷卻時間."
},
		id: 56,
		maxPoints: 1,
		x: 1154.395,
		y: 99.55
	},
	"Rugged": {
		connections: [ "Agility", "Reactive Defense" ],
		description: `Gain {5/10/15/20/25/30/35/40/45/50}% Damage Reduction against Damage Over Time effects.

Tags: Damage Reduction.`,
		nameLocalized: {
			"deDE": "Robustheit",
			"esES": "Inquebrantable",
			"esMX": "Resistente",
			"frFR": "Opiniâtreté",
			"itIT": "Robustezza",
			"jaJP": "頑健",
			"koKR": "다부짐",
			"plPL": "Szorstkość",
			"ptBR": "Robustez",
			"ruRU": "Двужильность",
			"zhCN": "糙皮",
			"zhTW": "強健體魄"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {5/10/15/20/25/30/35/40/45/50}% Schadensreduktion gegen Effekte mit Schaden über Zeit.\n\nTags: Schadensreduktion.",
			"esES": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño contra efectos de daño en el tiempo.\n\nTags: Reducción de daño.",
			"esMX": "Obtienes un {5/10/15/20/25/30/35/40/45/50}% de reducción de daño contra los efectos de daño con el tiempo.\n\nTags: Reducción de daño.",
			"frFR": "Vous obtenez {5/10/15/20/25/30/35/40/45/50}% de réduction des dégâts infligés par les effets de dégâts sur la durée.\n\nTags: Réduction des dégâts.",
			"itIT": "Ottieni il {5/10/15/20/25/30/35/40/45/50}% di riduzione danni contro i danni periodici.\n\nTags: Riduzione danni.",
			"jaJP": "継続ダメージの効果が{5/10/15/20/25/30/35/40/45/50}%軽減される。\n\nTags: ダメージ減少.",
			"koKR": "지속 피해 효과에 대한 피해 감소가 {5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 피해 감소.",
			"plPL": "Zyskujesz {5/10/15/20/25/30/35/40/45/50}% redukcji obrażeń względem efektów obrażeń z upływem czasu.\n\nTags: Redukcja Obrażeń.",
			"ptBR": "Recebe {5/10/15/20/25/30/35/40/45/50}% de redução de dano contra efeitos de dano ao longo do tempo.\n\nTags: Redução de Dano.",
			"ruRU": "Вы получаете на {5/10/15/20/25/30/35/40/45/50}% меньше периодического урона.\n\nTags: Уменьшение урона.",
			"zhCN": "对持续性伤害效果获得 {5/10/15/20/25/30/35/40/45/50}% 伤害减免。\n\nTags: 伤害减免.",
			"zhTW": "對持續傷害效果獲得 {5/10/15/20/25/30/35/40/45/50}% 傷害減免。\n\nTags: 傷害減免."
},
		id: 57,
		maxPoints: 3,
		x: 366.67,
		y: -223.635
	},
	"Reactive Defense": {
		connections: [ "Rugged" ],
		description: `Gain {6/12/18/24/30/36/42/48/54/60}% Damage Reduction while inflicted with Control Impairing Effects.

Tags: Damage Reduction.`,
		nameLocalized: {
			"deDE": "Reaktive Verteidigung",
			"esES": "Defensa reactiva",
			"esMX": "Defensa Reactiva",
			"frFR": "Défense réactive",
			"itIT": "Difesa Reattiva",
			"jaJP": "反射防御",
			"koKR": "반응성 방어",
			"plPL": "Reaktywna Obrona",
			"ptBR": "Defesa Reativa",
			"ruRU": "Защитный импульс",
			"zhCN": "被动防御",
			"zhTW": "反應防禦"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {6/12/18/24/30/36/42/48/54/60}% Schadensreduktion, während Ihr unter Kontrollverlusteffekten leidet.\n\nTags: Schadensreduktion.",
			"esES": "Obtienes un {6/12/18/24/30/36/42/48/54/60}% de reducción de daño mientras sufres efectos de pérdida de control.\n\nTags: Reducción de daño.",
			"esMX": "Obtienes un {6/12/18/24/30/36/42/48/54/60}% de reducción de daño mientras tienes efectos que debilitan el control.\n\nTags: Reducción de daño.",
			"frFR": "Vous obtenez {6/12/18/24/30/36/42/48/54/60}% de réduction des dégâts lorsque vous subissez des effets affectant le contrôle.\n\nTags: Réduction des dégâts.",
			"itIT": "Ottieni il {6/12/18/24/30/36/42/48/54/60}% di riduzione danni quando subisci effetti debilitanti.\n\nTags: Riduzione danni.",
			"jaJP": "操作障害効果を受けている間、受けるダメージが{6/12/18/24/30/36/42/48/54/60}%軽減される。\n\nTags: ダメージ減少.",
			"koKR": "제어 방해 효과를 받고 있을 때 피해 감소가 {6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: 피해 감소.",
			"plPL": "Zyskujesz {6/12/18/24/30/36/42/48/54/60}% do redukcji obrażeń, gdy masz ograniczoną kontrolę.\n\nTags: Redukcja Obrażeń.",
			"ptBR": "Recebe {6/12/18/24/30/36/42/48/54/60}% de redução de dano enquanto sob efeitos de controle.\n\nTags: Redução de Dano.",
			"ruRU": "Под действием эффектов контроля вы получаете на {6/12/18/24/30/36/42/48/54/60}% меньше урона.\n\nTags: Уменьшение урона.",
			"zhCN": "受到控制类限制效果时获得 {6/12/18/24/30/36/42/48/54/60}% 伤害减免。\n\nTags: 伤害减免.",
			"zhTW": "受到控場效果時,獲得 {6/12/18/24/30/36/42/48/54/60}% 傷害減免。\n\nTags: 傷害減免."
},
		id: 58,
		maxPoints: 3,
		x: 645.62,
		y: -393.555
	},
};

rogueData["Subterfuge"] = {
	"Smoke Grenade": {
		connections: [ "Enhanced Smoke Grenade", "Subterfuge" ],
		description: `Cooldown: 15 seconds
Throw a smoky concoction at enemies that Dazes them for {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} seconds.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Rauchgranate",
			"esES": "Granada de humo",
			"esMX": "Granada de Humo",
			"frFR": "Bombe fumigène",
			"itIT": "Bomba Fumogena",
			"jaJP": "スモーク・グレネード",
			"koKR": "연막탄",
			"plPL": "Granat Dymny",
			"ptBR": "Granada de Fumaça",
			"ruRU": "Ослепляющий дым",
			"zhCN": "烟雾手雷",
			"zhTW": "煙霧彈"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 15 Sek.\nWerft ein rauchendes Gebräu auf Gegner, das sie {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} Sek. lang benommen macht.\n\nTags: Täuschung, Benommenheit, Granate, Kontrollverlust, Abklingzeit.",
			"esES": "Tiempo de reutilización: 15 s\nLanzas a los enemigos un brebaje humeante que los atonta durante {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} s.\n\nTags: Subterfugio, Atontamiento, Granada, Control de masas, Tiempo de reutilización.",
			"esMX": "Recuperación: 15 segundos\nLanzas una bomba humeante a los enemigos que los atonta durante {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} segundos.\n\nTags: Subterfugio, Atontar, Granadas, Control de multitudes, Recuperación.",
			"frFR": "Temps de recharge: 15 s\nVous lancez une concoction fumante sur vos adversaires, ce qui les hébète pendant {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} s.\n\nTags: Subterfuge, Hébétement, Grenade, Perte de contrôle, Temps de recharge.",
			"itIT": "Tempo di recupero: 15 s\nLanci una mistura fumogena sui nemici, infliggendo Frastornamento per {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} s.\n\nTags: Sotterfugio, Frastornamento, Bombe, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "クールダウン: 15秒\n煙を発する調合物を敵に投げつけ、{4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6}秒間にわたり朦朧状態にする。\n\nTags: 遁走, 朦朧, グレネード, 操作障害効果, クールダウン.",
			"koKR": "재사용 대기시간: 15초\n적에게 연기가 피어오르는 혼합물을 던져 {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6}초 동안 멍해지게 합니다.\n\nTags: 기만, 멍해짐, 수류탄, 군중 제어, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 15 sek.\nRzucasz we wrogów dymną miksturę, która oszałamia ich na {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} sek.\n\nTags: Podstęp, Oszołomienie, Granat, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Recarga: 15 segundos\nArremessa uma mistura esfumaçada que aplica torpor nos inimigos por {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} segundos.\n\nTags: Subterfúgio, Torpor, Granada, Controle de Grupo, Recarga.",
			"ruRU": "Время восстановления: 15 сек.\nВы бросаете в противников дымящийся отвар, вызывающий у них головокружение на {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} сек.\n\nTags: Уловки, Головокружение, Граната, Контроль, Время восстановления.",
			"zhCN": "冷却时间: 15 秒\n向敌人投掷烟雾缭绕的混合物, 眩晕敌人 {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} 秒。\n\nTags: 诡诈, 眩晕, 手雷, 群控, 冷却时间.",
			"zhTW": "冷卻時間:15 秒\n對敵人投擲會產生煙霧的藥劑,使其 暈眩 {4/4.4/4.8/5.2/5.6/6/6.4/6.8/7.2/7.6} 秒。\n\nTags: 欺敵, 暈眩, 榴彈, 控場, 冷卻時間."
},
		id: 123,
		maxPoints: 5,
		x: -603.97,
		y: 4.535
	},
	"Enhanced Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Smoke Grenade", "Subverting Smoke Grenade", "Countering Smoke Grenade" ],
		description: `Enemies affected by Smoke Grenade take x15% increased damage from you.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Rauchgranate",
			"esES": "Granada de humo mejorada",
			"esMX": "Granada de Humo Potenciada",
			"frFR": "Bombe fumigène renforcée",
			"itIT": "Bomba Fumogena Rinforzata",
			"jaJP": "スモーク・グレネード(強化版)",
			"koKR": "강화된 연막탄",
			"plPL": "Wzmocniony Granat Dymny",
			"ptBR": "Granada de Fumaça Aperfeiçoada",
			"ruRU": "Усиленный ослепляющий дым",
			"zhCN": "强化烟雾手雷",
			"zhTW": "強化煙霧彈"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Rauchgranate betroffen sind, erleiden durch Euch x15% mehr Schaden.\n\nTags: Täuschung, Benommenheit, Granate, Kontrollverlust, Abklingzeit.",
			"esES": "Infliges un x15% más de daño a los enemigos afectados por Granada de humo.\n\nTags: Subterfugio, Atontamiento, Granada, Control de masas, Tiempo de reutilización.",
			"esMX": "Los enemigos afectados por Granada de Humo reciben un x15% más de daño de ti.\n\nTags: Subterfugio, Atontar, Granadas, Control de multitudes, Recuperación.",
			"frFR": "Les cibles affectées par Bombe fumigène subissent x15% de dégâts supplémentaires de votre part.\n\nTags: Subterfuge, Hébétement, Grenade, Perte de contrôle, Temps de recharge.",
			"itIT": "I nemici colpiti da Bomba Fumogena subiscono il x15% di danni aggiuntivi da te.\n\nTags: Sotterfugio, Frastornamento, Bombe, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "〈スモーク・グレネード〉の影響を受けた敵に自分が与えるダメージがx15%増加する。\n\nTags: 遁走, 朦朧, グレネード, 操作障害効果, クールダウン.",
			"koKR": "연막탄의 영향을 받는 적에게 주는 피해가 x15% 증가합니다.\n\nTags: 기만, 멍해짐, 수류탄, 군중 제어, 재사용 대기시간.",
			"plPL": "Wrogowie znajdujący się pod wpływem Granatu Dymnego otrzymują od ciebie obrażenia zwiększone o x15%.\n\nTags: Podstęp, Oszołomienie, Granat, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Inimigos afetados por Granada de Fumaça recebem 15% de dano aumentado de você.\n\nTags: Subterfúgio, Torpor, Granada, Controle de Grupo, Recarga.",
			"ruRU": "Противники под действием \"Ослепляющего дыма\" получают от вас на x15% больше урона.\n\nTags: Уловки, Головокружение, Граната, Контроль, Время восстановления.",
			"zhCN": "被烟雾手雷影响的敌人受到来自你的伤害提高 x15%。\n\nTags: 诡诈, 眩晕, 手雷, 群控, 冷却时间.",
			"zhTW": "受到煙霧彈影響的敵人,你對其造成的傷害提高 x15%。\n\nTags: 欺敵, 暈眩, 榴彈, 控場, 冷卻時間."
},
		id: 124,
		maxPoints: 1,
		x: -1015.755,
		y: 4.314
	},
	"Subverting Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `If an enemy is Vulnerable, Slowed, or Chilled then Smoke Grenade will Daze them for x20% longer.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Zerrüttende Rauchgranate",
			"esES": "Granada de humo subversiva",
			"esMX": "Granada de Humo Subversiva",
			"frFR": "Bombe fumigène subversive",
			"itIT": "Bomba Fumogena Rivoluzionaria",
			"jaJP": "スモーク・グレネード(逆転)",
			"koKR": "전복시키는 연막탄",
			"plPL": "Obalający Granat Dymny",
			"ptBR": "Granada de Fumaça Destruidora",
			"ruRU": "Коварный ослепляющий дым",
			"zhCN": "颠覆烟雾手雷",
			"zhTW": "顛覆煙霧彈"
},
		descriptionLocalized: {
			"deDE": "Wenn ein Gegner verwundbar, verlangsamt oder unterkühlt ist, macht Rauchgranate ihn x20% länger benommen.\n\nTags: Täuschung, Benommenheit, Granate, Kontrollverlust, Abklingzeit.",
			"esES": "Si un enemigo es vulnerable o está ralentizado o helado, Granada de humo lo atonta durante un x20% más.\n\nTags: Subterfugio, Atontamiento, Granada, Control de masas, Tiempo de reutilización.",
			"esMX": "Si el enemigo está vulnerable, ralentizado o helado, Granada de Humo lo atonta un x20% más de tiempo.\n\nTags: Subterfugio, Atontar, Granadas, Control de multitudes, Recuperación.",
			"frFR": "Si une cible est vulnérable, ralentie ou glacée, alors Bombe fumigène l'hébète pour une durée rallongée de x20%.\n\nTags: Subterfuge, Hébétement, Grenade, Perte de contrôle, Temps de recharge.",
			"itIT": "Se un nemico è vulnerabile, rallentato o raggelato colpirlo con Bomba Fumogena gli infliggerà Frastornamento per il x20% più a lungo.\n\nTags: Sotterfugio, Frastornamento, Bombe, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "敵が脆弱、スロウ、または 冷気状態の場合、〈スモーク・グレネード〉がその敵を眩暈 状態にする時間がx20%伸びる。\n\nTags: 遁走, 朦朧, グレネード, 操作障害効果, クールダウン.",
			"koKR": "적이 취약, 감속, 오한 상태인 경우 연막탄이 대상을 멍해지게 만드는 지속시간이 x20% 증가합니다.\n\nTags: 기만, 멍해짐, 수류탄, 군중 제어, 재사용 대기시간.",
			"plPL": "Jeśli wróg jest odsłonięty, spowolniony albo wyziębiony, jego oszołomienie od Granatu Dymnego trwa o x20% dłużej.\n\nTags: Podstęp, Oszołomienie, Granat, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Se um inimigo está vulnerável, desacelerado ou com gelidez, então Granada de Fumaça aplicará torpor nele por 20% mais tempo.\n\nTags: Subterfúgio, Torpor, Granada, Controle de Grupo, Recarga.",
			"ruRU": "\"Ослепляющий дым\" вызывает головокружение у уязвимых, замедленных или окоченевших противников на x20% дольше.\n\nTags: Уловки, Головокружение, Граната, Контроль, Время восстановления.",
			"zhCN": "如果敌人处于易伤、减速或冻伤状态, 烟雾手雷的眩晕时间延长 x20%。\n\nTags: 诡诈, 眩晕, 手雷, 群控, 冷却时间.",
			"zhTW": "若敵人處於易傷、緩速或冰冷狀態,則煙霧彈的對其造成的暈眩時間延長 x20%。\n\nTags: 欺敵, 暈眩, 榴彈, 控場, 冷卻時間."
},
		id: 125,
		maxPoints: 1,
		x: -1235.79,
		y: 94.325
	},
	"Countering Smoke Grenade": {
		baseSkill: "Smoke Grenade",
		connections: [ "Enhanced Smoke Grenade" ],
		description: `Lucky Hit: Dealing direct damage to enemies affected by Smoke Grenade has up to a 25% chance to reduce its Cooldown by 1 second, or by 3 seconds instead if the enemy is Vulnerable.

Tags: Subterfuge, Daze, Grenade, Crowd Control, Cooldown.`,
		nameLocalized: {
			"deDE": "Konternde Rauchgranate",
			"esES": "Granada de humo contrarrestante",
			"esMX": "Granada de Humo Contrarrestante",
			"frFR": "Bombe fumigène rebelle",
			"itIT": "Bomba Fumogena Contrastante",
			"jaJP": "スモーク・グレネード(逆襲)",
			"koKR": "역습하는 연막탄",
			"plPL": "Kontrujący Granat Dymny",
			"ptBR": "Granada de Fumaça Replicante",
			"ruRU": "Ответный ослепляющий дым",
			"zhCN": "反击烟雾手雷",
			"zhTW": "反擊煙霧彈"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Bei direktem Schaden gegen Gegner, die unter Rauchgranate leiden, besteht eine Chance von 25%, die Abklingzeit um 1 Sek. zu reduzieren. Ist der Gegner verwundbar, wird die Abklingzeit stattdessen um 3 Sek. reduziert.\n\nTags: Täuschung, Benommenheit, Granate, Kontrollverlust, Abklingzeit.",
			"esES": "Golpe de suerte: Infligir daño directo a enemigos afectados por Granada de humo tiene hasta un 25% de probabilidad de reducir 1 s su tiempo de reutilización, o 3 s si el enemigo es vulnerable.\n\nTags: Subterfugio, Atontamiento, Granada, Control de masas, Tiempo de reutilización.",
			"esMX": "Golpe afortunado: Al infligir daño directo a enemigos afectados por Granada de Humo, obtienes un 25% de probabilidad de reducir su recuperación 1 segundo, o 3 segundos si el enemigo está vulnerable.\n\nTags: Subterfugio, Atontar, Granadas, Control de multitudes, Recuperación.",
			"frFR": "Coup de chance: en infligeant des dégâts directs à une cible affectée par Bombe fumigène, vous avez jusqu'à 25% de chances de réduire son temps de recharge de 1 s, ou de 3 s si la cible est vulnérable.\n\nTags: Subterfuge, Hébétement, Grenade, Perte de contrôle, Temps de recharge.",
			"itIT": "Colpo fortunato: i danni diretti inflitti ai nemici affetti da Bomba Fumogena hanno fino al 25% di probabilità di ridurne il tempo di recupero di 1 s, o di 3 s se il nemico è vulnerabile.\n\nTags: Sotterfugio, Frastornamento, Bombe, Effetti debilitanti, Tempo di recupero.",
			"jaJP": "幸運の一撃: 〈スモーク・グレネード〉の影響を受けた敵に直接ダメージを与えると、最大25%の確率で〈スモーク・グレネード〉のクールダウンが1秒短くなる。敵が脆弱状態の場合は3秒短くなる。\n\nTags: 遁走, 朦朧, グレネード, 操作障害効果, クールダウン.",
			"koKR": "행운의 적중: 연막탄의 영향을 받고 있는 적에게 직접 피해를 주면 최대 25% 확률로 해당 기술의 재사용 대기시간이 1초 감소합니다. 취약 상태의 적에게 피해를 주면 3초 감소합니다.\n\nTags: 기만, 멍해짐, 수류탄, 군중 제어, 재사용 대기시간.",
			"plPL": "Szczęśliwy traf: Zadawanie bezpośrednich obrażeń wrogom pod wpływem Granatu Dymnego ma do 25% szans na skrócenie jego czasu odnowienia o 1 sek. albo o 3 sek., jeśli przeciwnik jest odsłonięty.\n\nTags: Podstęp, Oszołomienie, Granat, Ograniczanie Kontroli, Odnowienie.",
			"ptBR": "Golpe de Sorte: Causar dano direto a inimigos afetados por Granada de Fumaça tem até 25% de chance de reduzir a recarga em 1 segundo, ou em 3 segundos se o inimigo estiver vulnerável.\n\nTags: Subterfúgio, Torpor, Granada, Controle de Grupo, Recarga.",
			"ruRU": "Удачный удар: прямой урон противникам под действием \"Ослепляющего дыма\" с вероятностью до 25% снижает его время восстановления на 1 сек. Если противники уязвимы, время восстановления сокращается на 3 сек.\n\nTags: Уловки, Головокружение, Граната, Контроль, Время восстановления.",
			"zhCN": "幸运一击: 对受烟雾手雷影响的敌人造成直接伤害时, 最多有 25% 几率使其冷却时间缩短 1 秒, 如果敌人处于易伤状态, 则冷却时间缩短 3 秒。\n\nTags: 诡诈, 眩晕, 手雷, 群控, 冷却时间.",
			"zhTW": "幸運觸發:對受煙霧彈影響的敵人造成直接傷害有最高 25% 機率縮短其冷卻時間 1 秒,若敵人處於易傷狀態則縮短 3 秒。\n\nTags: 欺敵, 暈眩, 榴彈, 控場, 冷卻時間."
},
		id: 126,
		maxPoints: 1,
		x: -1241.33,
		y: -67.379
	},
	"Concealment": {
		connections: [ "Subterfuge", "Enhanced Stealth" ],
		description: `Cooldown: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} seconds
Vanish from sight, gaining an advanced form of Stealth for 4 seconds that will not be removed by taking damage.

Concealment also makes you Unstoppable, grants +30% Movement Speed, and allows you to move freely through enemies for its duration.

Using an attack Skill during Concealment will break Concealment.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verschleierung",
			"esES": "Ocultación",
			"esMX": "Ocultamiento",
			"frFR": "Dissimulation",
			"itIT": "Occultamento",
			"jaJP": "隠密",
			"koKR": "은신",
			"plPL": "Maskowanie",
			"ptBR": "Dissimulação",
			"ruRU": "Маскировка",
			"zhCN": "隐蔽",
			"zhTW": "隱匿"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} Sek.\nMacht Euch unsichtbar und geht 4 Sek. lang in eine fortgeschrittene Form von Verstohlenheit über, die nicht entfernt wird, wenn Ihr Schaden erleidet.\n\nVerschleierung lässt Euch zudem unaufhaltsam werden, gewährt Euch +30% Bewegungsgeschwindigkeit und ermöglicht es Euch, Euch während der Dauer ungehindert durch Gegner hindurchzubewegen.\n\nWenn Ihr während Verschleierung eine Angriffsfertigkeit einsetzt, endet Verschleierung.\n\nTags: Täuschung, Unaufhaltsam, Verstohlenheit, Abklingzeit, Bewegung.",
			"esES": "Tiempo de reutilización: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} s\nTe esfumas y obtienes una forma avanzada de sigilo que no se elimina al sufrir daño durante 4 s.\n\nAdemás, Ocultación te vuelve imparable, te otorga un +30% de velocidad de movimiento y te permite atravesar a los enemigos libremente mientras dura.\n\nUsar una habilidad de ataque durante Ocultación interrumpe su efecto.\n\nTags: Subterfugio, Imparable, Sigilo, Tiempo de reutilización, Movimiento.",
			"esMX": "Recuperación: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} segundos\nDesapareces y obtienes una forma avanzada de Sigilo durante 4 segundos que no se quitará al recibir daño.\n\nOcultamiento también te vuelve imparable, te otorga un +30% de velocidad de movimiento y te permite moverte libremente a través de los enemigos en el transcurso de su duración.\n\nSi usas una habilidad de ataque mientras tienes Ocultamiento, el Ocultamiento se interrumpirá.\n\nTags: Subterfugio, Imparable, Sigilo, Recuperación, Movimiento.",
			"frFR": "Temps de recharge: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} s\nVous devenez invisible, ce qui vous confère pendant 4 s une forme avancée de Camouflage qui ne se dissipe pas lorsque vous subissez des dégâts.\n\nDissimulation vous rend aussi inarrêtable, augmente votre vitesse de déplacement de +30% et vous permet de vous mouvoir librement parmi les adversaires pendant toute sa durée.\n\nDissimulation prend fin lorsque vous utilisez une compétence d'attaque.\n\nTags: Subterfuge, Inarrêtable, Camouflage, Temps de recharge, Déplacement.",
			"itIT": "Tempo di recupero: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} s\nScompari, ottenendo una forma avanzata di Furtività per 4 s (il tempo non diminuirà quando subirai danni).\n\nOccultamento ti rende anche inarrestabile, aumenta la velocità di movimento del +30% e ti permette di spostarti più velocemente tra i nemici per tutta la sua durata.\n\nUsare un'abilità d'attacco durante Occultamento interromperà Occultamento.\n\nTags: Sotterfugio, Inarrestabile, Furtività, Tempo di recupero, Movimento.",
			"jaJP": "クールダウン: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12}秒\n隠密の上位状態になり、4秒間にわたり認識されなくなる。この効果はダメージを受けても解除されない。\n\n〈隠密〉状態になると抑圧不可の効果も得る上に、移動速度が+30%増加し、持続時間中は敵をすり抜けて自由に移動できる。\n\n〈隠密〉中に攻撃スキルを使うと、〈隠密〉が解除される。\n\nTags: 遁走, 抑圧不可, 隠密, クールダウン, 移動.",
			"koKR": "재사용 대기시간: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12}초\n시야에서 사라지며 4초 동안 향상된 방식으로 은폐 상태가 되어, 피해를 받아도 해당 효과가 사라지지 않습니다.\n\n은신의 지속시간 동안 저지 불가 상태가 되고, 이동 속도가 +30% 증가하고, 적을 자유롭게 통과합니다.\n\n은신 도중에 공격 기술을 사용하면 은신이 해제됩니다.\n\nTags: 기만, 저지 불가, 은폐, 재사용 대기시간, 이동.",
			"plPL": "Czas odnowienia: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} sek.\nZnikasz wrogom z oczu, zyskując zaawansowaną formę ukrycia na 4 sek. Efekt ten nie zostanie przerwany po otrzymaniu obrażeń.\n\nGdy Maskowanie jest aktywne, zapewnia ci również nieustępliwość i premię +30% do szybkości ruchu, a także pozwala swobodnie przenikać przez wrogów.\n\nUżycie umiejętności ataku w trakcie trwania Maskowania przerwie ten efekt.\n\nTags: Podstęp, Nieustępliwość, Ukrycie, Odnowienie, Ruch.",
			"ptBR": "Recarga: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} segundos\nVocê desaparece, recebendo uma forma avançada de Furtividade por 4 segundos que não será removida ao receber dano.\n\nDissimulação também torna você implacável, concede +30% de velocidade de movimento e permite mover-se livremente através de inimigos durante o efeito.\n\nUsar uma habilidade de ataque durante Dissimulação cancelará Dissimulação.\n\nTags: Subterfúgio, Implacável, Furtividade, Recarga, Movimento.",
			"ruRU": "Время восстановления: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} сек.\nВы скрываетесь из виду, переходя в совершенное состояние незаметности на 4 сек., которое не рассеивается при получении урона.\n\nПока действует маскировка, вы также получаете неудержимость, скорость передвижения повышается на +30% и вы можете свободно проходить сквозь врагов.\n\nПри применении наносящих урон умений маскировка снимается.\n\nTags: Уловки, Неудержимость, Незаметность, Время восстановления, Движение.",
			"zhCN": "冷却时间: {20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} 秒\n从视线中消失, 获得高级形式的潜行, 持续 4 秒, 不会因受到伤害而移除。\n\n隐蔽 还可以让你变得不可阻挡, 移动速度提高 +30%, 并使你可以在持续时间内自由穿过敌人。\n\n在隐蔽 期间使用攻击技能会打破隐蔽状态。\n\nTags: 诡诈, 不可阻挡, 潜行, 冷却时间, 移动.",
			"zhTW": "冷卻時間:{20/19/18/17.2/16.4/15.8/15.2/14.8/14.4/14/13.6/13.2/13/12.8/12.6/12.4/12.3/12.2/12.1/12} 秒\n從視線中消失,進入進階匿蹤狀態,持續 4 秒,此狀態不會因受到傷害而解除。\n\n隱匿會使你無阻,賦予你 +30% 移動速度,並在其持續時間內讓你自由穿過敵人。\n\n在隱匿其間使用攻擊技能會解除隱匿。\n\nTags: 欺敵, 無阻, 匿蹤, 冷卻時間, 移動."
},
		id: 127,
		maxPoints: 5,
		x: -390.71,
		y: -209.637
	},
	"Enhanced Stealth": {
		baseSkill: "Concealment",
		connections: [ "Concealment", "Subverting Stealth", "Countering Stealth" ],
		description: `You gain 40 Energy when you enter Concealment.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Verbesserte Verstohlenheit",
			"esES": "Sigilo mejorado",
			"esMX": "Sigilo Potenciado",
			"frFR": "Camouflage renforcé",
			"itIT": "Occultamento Rinforzato",
			"jaJP": "隠遁(強化版)",
			"koKR": "강화된 은폐",
			"plPL": "Wzmocnione Ukrycie",
			"ptBR": "Furtividade Aperfeiçoada",
			"ruRU": "Усиленная незаметность",
			"zhCN": "强化潜行",
			"zhTW": "強化匿蹤"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet 40 Energie, wenn Ihr Verschleierung aktiviert.\n\nTags: Täuschung, Unaufhaltsam, Verstohlenheit, Abklingzeit, Bewegung.",
			"esES": "Obtienes 40 de energía cuando entras en estado de Ocultación.\n\nTags: Subterfugio, Imparable, Sigilo, Tiempo de reutilización, Movimiento.",
			"esMX": "Obtienes 40 de Energía cuando usas Ocultamiento.\n\nTags: Subterfugio, Imparable, Sigilo, Recuperación, Movimiento.",
			"frFR": "Vous obtenez 40 points d'énergie lorsque vous entrez en Dissimulation.\n\nTags: Subterfuge, Inarrêtable, Camouflage, Temps de recharge, Déplacement.",
			"itIT": "Ottieni 40 energia attivando Occultamento.\n\nTags: Sotterfugio, Inarrestabile, Furtività, Tempo di recupero, Movimento.",
			"jaJP": "〈隠遁〉状態になると、40のエネルギーを獲得する。\n\nTags: 遁走, 抑圧不可, 隠密, クールダウン, 移動.",
			"koKR": "은신 상태가 되면 기력을 40 얻습니다.\n\nTags: 기만, 저지 불가, 은폐, 재사용 대기시간, 이동.",
			"plPL": "Odzyskujesz 40 pkt. energii, kiedy wchodzisz w tryb maskowania.\n\nTags: Podstęp, Nieustępliwość, Ukrycie, Odnowienie, Ruch.",
			"ptBR": "Você recebe 40 de energia ao ativar Dissimulação.\n\nTags: Subterfúgio, Implacável, Furtividade, Recarga, Movimento.",
			"ruRU": "Вы накапливаете 40 ед. энергии после перехода в состояние маскировки.\n\nTags: Уловки, Неудержимость, Незаметность, Время восстановления, Движение.",
			"zhCN": "你进入隐蔽时获得 40 点能量。\n\nTags: 诡诈, 不可阻挡, 潜行, 冷却时间, 移动.",
			"zhTW": "當你進入隱匿狀態時,獲得 40 點能量。\n\nTags: 欺敵, 無阻, 匿蹤, 冷卻時間, 移動."
},
		id: 75,
		maxPoints: 1,
		x: -681.17,
		y: -340.45
	},
	"Subverting Stealth": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Stealth" ],
		description: `The Skill that breaks Concealment always makes enemies Vulnerable for 6 seconds.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Zerrüttende Verstohlenheit",
			"esES": "Sigilo subversivo",
			"esMX": "Sigilo Subversivo",
			"frFR": "Camouflage subversif",
			"itIT": "Occultamento Rivoluzionario",
			"jaJP": "隠遁(逆転)",
			"koKR": "전복시키는 은폐",
			"plPL": "Obalające Ukrycie",
			"ptBR": "Furtividade Destruidora",
			"ruRU": "Коварная незаметность",
			"zhCN": "颠覆潜行",
			"zhTW": "顛覆匿蹤"
},
		descriptionLocalized: {
			"deDE": "Die Fertigkeit, die Verschleierung beendet, macht Gegner immer 6 Sek. lang verwundbar.\n\nTags: Täuschung, Unaufhaltsam, Verstohlenheit, Abklingzeit, Bewegung.",
			"esES": "La habilidad que interrumpe Ocultación siempre vuelve vulnerables a los enemigos durante 6 s.\n\nTags: Subterfugio, Imparable, Sigilo, Tiempo de reutilización, Movimiento.",
			"esMX": "La habilidad que interrumpe el Ocultamiento siempre vuelve a los enemigos vulnerables durante 6 segundos.\n\nTags: Subterfugio, Imparable, Sigilo, Recuperación, Movimiento.",
			"frFR": "La compétence qui annule Dissimulation rend toujours les adversaires vulnérables pendant 6 s.\n\nTags: Subterfuge, Inarrêtable, Camouflage, Temps de recharge, Déplacement.",
			"itIT": "Attivare un'abilità che interrompe Occultamento rende sempre i nemici vulnerabili per 6 s.\n\nTags: Sotterfugio, Inarrestabile, Furtività, Tempo di recupero, Movimento.",
			"jaJP": "〈隠密〉を解除したスキルは、必ず敵を6秒間にわたり脆弱状態にする。\n\nTags: 遁走, 抑圧不可, 隠密, クールダウン, 移動.",
			"koKR": "은신을 해제하는 기술이 적을 항상 6초 동안 취약하게 만듭니다.\n\nTags: 기만, 저지 불가, 은폐, 재사용 대기시간, 이동.",
			"plPL": "Umiejętność, która przerwie maskowanie, zawsze również sprawia, że wrogowie stają się odsłonięci przez 6 sek.\n\nTags: Podstęp, Nieustępliwość, Ukrycie, Odnowienie, Ruch.",
			"ptBR": "A habilidade que cancelar Dissimulação sempre torna os inimigos vulneráveis por 6 segundos.\n\nTags: Subterfúgio, Implacável, Furtividade, Recarga, Movimento.",
			"ruRU": "Умение, снимающее состояние маскировки, всегда делает противников уязвимыми на 6 сек.\n\nTags: Уловки, Неудержимость, Незаметность, Время восстановления, Движение.",
			"zhCN": "技能打破隐蔽 的技能效果时必定会使敌人陷入易伤状态, 持续 6 秒。\n\nTags: 诡诈, 不可阻挡, 潜行, 冷却时间, 移动.",
			"zhTW": "使隱匿狀態解除的技能必定會讓敵人易傷 6 秒。\n\nTags: 欺敵, 無阻, 匿蹤, 冷卻時間, 移動."
},
		id: 77,
		maxPoints: 1,
		x: -706.615,
		y: -486.354
	},
	"Countering Stealth": {
		baseSkill: "Concealment",
		connections: [ "Enhanced Stealth" ],
		description: `The Skill that breaks Concealment will always be a guaranteed Critical Strike.

Tags: Subterfuge, Unstoppable, Stealth, Cooldown, Movement.`,
		nameLocalized: {
			"deDE": "Konternde Verstohlenheit",
			"esES": "Sigilo contrarrestante",
			"esMX": "Sigilo Contrarrestante",
			"frFR": "Camouflage rebelle",
			"itIT": "Occultamento Contrastante",
			"jaJP": "隠遁(逆襲)",
			"koKR": "역습하는 은폐",
			"plPL": "Kontrujące Ukrycie",
			"ptBR": "Furtividade Replicante",
			"ruRU": "Ответная незаметность",
			"zhCN": "反击潜行",
			"zhTW": "反擊匿蹤"
},
		descriptionLocalized: {
			"deDE": "Die Fertigkeit, die Verschleierung unterbricht, erzielt garantiert einen kritischen Treffer.\n\nTags: Täuschung, Unaufhaltsam, Verstohlenheit, Abklingzeit, Bewegung.",
			"esES": "La habilidad que interrumpa Ocultación asestará siempre un golpe crítico.\n\nTags: Subterfugio, Imparable, Sigilo, Tiempo de reutilización, Movimiento.",
			"esMX": "La habilidad que interrumpe el Ocultamiento siempre será un golpe crítico garantizado.\n\nTags: Subterfugio, Imparable, Sigilo, Recuperación, Movimiento.",
			"frFR": "La compétence qui annule Dissimulation inflige un coup critique garanti.\n\nTags: Subterfuge, Inarrêtable, Camouflage, Temps de recharge, Déplacement.",
			"itIT": "Attivare un'abilità che interrompe Occultamento infliggerà sempre un colpo critico garantito.\n\nTags: Sotterfugio, Inarrestabile, Furtività, Tempo di recupero, Movimento.",
			"jaJP": "〈隠遁〉を解除したスキルは必ずクリティカルヒットになる。\n\nTags: 遁走, 抑圧不可, 隠密, クールダウン, 移動.",
			"koKR": "은신을 해제하는 기술은 언제나 확정적으로 극대화 적중합니다.\n\nTags: 기만, 저지 불가, 은폐, 재사용 대기시간, 이동.",
			"plPL": "Umiejętność, która przerwie maskowanie, ma zagwarantowane trafienie krytyczne.\n\nTags: Podstęp, Nieustępliwość, Ukrycie, Odnowienie, Ruch.",
			"ptBR": "A habilidade que cancelar Dissimulação sempre será um acerto crítico garantido.\n\nTags: Subterfúgio, Implacável, Furtividade, Recarga, Movimento.",
			"ruRU": "Умение, снимающее состояние маскировки, гарантированно наносит критический урон.\n\nTags: Уловки, Неудержимость, Незаметность, Время восстановления, Движение.",
			"zhCN": "技能打破隐蔽的技能效果时必定暴击。\n\nTags: 诡诈, 不可阻挡, 潜行, 冷却时间, 移动.",
			"zhTW": "使隱匿狀態解除的技能必定爆擊。\n\nTags: 欺敵, 無阻, 匿蹤, 冷卻時間, 移動."
},
		id: 76,
		maxPoints: 1,
		x: -951.19,
		y: -343.327
	},
	"Poison Trap": {
		connections: [ "Subterfuge", "Enhanced Poison Trap" ],
		description: `Cooldown: 10 seconds
Lucky Hit Chance: 20% (per hit)
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, applying {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% Poisoning damage over 9 seconds to enemies in the area.

You can have 4 armed traps out at once.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Giftfalle",
			"esES": "Trampa de veneno",
			"esMX": "Trampa Venenosa",
			"frFR": "Piège de poison",
			"itIT": "Trappola Avvelenata",
			"jaJP": "ポイズン・トラップ",
			"koKR": "맹독 덫",
			"plPL": "Trująca Pułapka",
			"ptBR": "Armadilha Venenosa",
			"ruRU": "Ловушка с ядом",
			"zhCN": "剧毒陷阱",
			"zhTW": "劇毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 10 Sek.\nGlückstrefferchance: 20% (per hit)\nPlatziert eine Falle, die nach {#} Sek. scharf wird. Kommen Gegner ihr zu nahe, aktiviert sie sich und fügt Gegnern im Wirkungsbereich im Verlauf von 9 Sek. {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% Giftschaden zu.\n\nIhr könnt 4 scharfe Fallen gleichzeitig haben.\n\nTags: Täuschung, Falle, Schaden, Gift, Abklingzeit.",
			"esES": "Tiempo de reutilización: 10 s\nProbabilidad de golpe de suerte: 20% (per hit)\nColocas una trampa que se arma al cabo de {#} s. Cuando un enemigo se pone al alcance, se activa e inflige {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% de daño de veneno durante 9 s a los enemigos en la zona.\n\nPuedes tener 4 trampas armadas a la vez.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Tiempo de reutilización.",
			"esMX": "Recuperación: 10 segundos\nProbabilidad de golpe afortunado: 20% (per hit)\nColocas una trampa que se arma después de {#} segundos. Se activa cuando un enemigo se acerca e inflige {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% de daño de veneno durante 9 segundos a los enemigos en el área.\n\nPuedes tener 4 trampas armadas al mismo tiempo.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Recuperación.",
			"frFR": "Temps de recharge: 10 s\nChances d'obtenir un coup de chance: 20% (per hit)\nVous placez un piège qui s'arme au bout de {#} s. Il s'active lorsqu'une cible passe à portée, ce qui applique {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% points de dégâts de poison en 9 s aux adversaires se trouvant dans la zone affectée.\n\nVous pouvez avoir jusqu'à 4 pièges armés à la fois.\n\nTags: Subterfuge, Piège, Dégâts, Poison, Temps de recharge.",
			"itIT": "Tempo di recupero: 10 s\nProbabilità di colpo fortunato: 20% (per hit)\nPiazzi una trappola che si arma dopo {#} s. Quando un nemico entra nel suo raggio d'azione, la trappola si attiva infliggendo {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% danni da veleno per 9 s ai nemici nell'area.\n\nPuoi armare 4 trappole simultaneamente.\n\nTags: Sotterfugio, Trappole, Danni, Veleno, Tempo di recupero.",
			"jaJP": "クールダウン: 10秒\n幸運の一撃発生率: 20% (per hit)\n{#}秒後に起動準備が完了する罠を仕掛ける。罠は範囲内で敵が動くと起動し、エリア内にいる敵に9秒間かけて{345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}%の毒ダメージを与える。\n\n罠は同時に4個まで起動可能状態にできる。\n\nTags: 遁走, 罠, ダメージ, 毒, クールダウン.",
			"koKR": "재사용 대기시간: 10초\n행운의 적중 확률: 20% (per hit)\n{#}초 후 장전되는 덫을 설치합니다. 덫은 적이 범위 내에 들어오면 발동하며, 해당 범위에 있는 적들에게 9초에 걸쳐 {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}%의 중독 피해를 줍니다.\n\n덫은 한 번에 4개까지 장전할 수 있습니다.\n\nTags: 기만, 덫, 피해, 독, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 10 sek.\nSzansa na szczęśliwy traf: 20% (per hit)\nTworzysz pułapkę, która uzbraja się po {#} sek. Gdy wróg zajdzie się w jej zasięgu, pułapka się aktywuje, a następnie zadaje wrogom na jej obszarze {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% pkt. obrażeń od zatrucia w ciągu 9 sek.\n\nMożesz mieć jednocześnie 4 uzbrojone pułapki:uzbrojonych pułapek.\n\nTags: Podstęp, Pułapki, Obrażenia, Trucizna, Odnowienie.",
			"ptBR": "Recarga: 10 segundos\nChance de Golpe de Sorte: 20% (per hit)\nPosiciona uma armadilha que arma após {#} segundos. É ativada quando um inimigo entra em alcance, aplicando {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% de dano venenoso ao longo de 9 segundos a inimigos na área.\n\nVocê pode ter 4 armadilhas armadas de uma vez.\n\nTags: Subterfúgio, Armadilha, Dano, Veneno, Recarga.",
			"ruRU": "Время восстановления: 10 сек.\nВероятность удачного удара: 20% (per hit)\nВы размещаете на земле ловушку, которая заряжается через {#} сек. Когда в область действия попадает противник, она срабатывает и отравляет цели в зоне поражения, нанося {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% ед. урона от отравления за 9 сек.\n\nМаксимальное количество заряженных размещенных ловушек – 4.\n\nTags: Уловки, Ловушка, Урон, Яд, Время восстановления.",
			"zhCN": "冷却时间: 10 秒\n幸运一击几率: 20% (per hit)\n放置一个在 {#} 秒后完成部署的陷阱。陷阱会在敌人进入范围时激活, 在 9 秒内对范围内的敌人造成 {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% 点毒素伤害。\n\n你在同一时间只能拥有 4 个部署的陷阱。\n\nTags: 诡诈, 陷阱, 伤害, 毒素, 冷却时间.",
			"zhTW": "冷卻時間:10 秒\n幸運觸發機率:20% (per hit)\n放置一個 {#} 秒後設置完成的陷阱,於敵人進入範圍內時啟動,對範圍內的敵人在 9 秒內造成 {345.6/378/414/446.4/482.4/514.8/550.8/586.8/619.2/655.2}% 點中毒傷害。\n\n你同時只能有 4 個設置完成的陷阱。\n\nTags: 欺敵, 陷阱, 傷害, 毒素, 冷卻時間."
},
		id: 70,
		maxPoints: 5,
		values: [ "1.25" ],
		x: -411.99,
		y: 220.272
	},
	"Enhanced Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Poison Trap", "Countering Poison Trap", "Subverting Poison Trap" ],
		description: `Poison Trap Knocks Down enemies for 1.5 seconds when it activates.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserte Giftfalle",
			"esES": "Trampa de veneno mejorada",
			"esMX": "Trampa Venenosa Potenciada",
			"frFR": "Piège de poison renforcé",
			"itIT": "Trappola Avvelenata Rinforzata",
			"jaJP": "ポイズン・トラップ(強化版)",
			"koKR": "강화된 맹독 덫",
			"plPL": "Wzmocniona Trująca Pułapka",
			"ptBR": "Armadilha Venenosa Aperfeiçoada",
			"ruRU": "Усиленная ловушка с ядом",
			"zhCN": "强化剧毒陷阱",
			"zhTW": "強化劇毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Giftfalle schlägt Gegner bei der Aktivierung 1.5 Sek. lang nieder.\n\nTags: Täuschung, Falle, Schaden, Gift, Abklingzeit.",
			"esES": "Trampa de veneno derriba a los enemigos durante 1.5 s cuando se activa.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Tiempo de reutilización.",
			"esMX": "Trampa Venenosa derriba a los enemigos durante 1.5 segundos al activarse.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Recuperación.",
			"frFR": "Piège de poison renverse les adversaires pendant 1.5 s quand il s'active.\n\nTags: Subterfuge, Piège, Dégâts, Poison, Temps de recharge.",
			"itIT": "Trappola Avvelenata fa cadere a terra i nemici per 1.5 s quando si attiva.\n\nTags: Sotterfugio, Trappole, Danni, Veleno, Tempo di recupero.",
			"jaJP": "〈ポイズン・トラップ〉が起動すると、敵を1.5秒間ノックダウン状態にする。\n\nTags: 遁走, 罠, ダメージ, 毒, クールダウン.",
			"koKR": "맹독 덫이 발동할 때 적들을 1.5초 동안 넘어뜨립니다.\n\nTags: 기만, 덫, 피해, 독, 재사용 대기시간.",
			"plPL": "Przy aktywacji Trująca Pułapka powala wrogów na 1.5 sek.\n\nTags: Podstęp, Pułapki, Obrażenia, Trucizna, Odnowienie.",
			"ptBR": "Armadilha Venenosa nocauteia inimigos por 1.5 segundos quando é ativada.\n\nTags: Subterfúgio, Armadilha, Dano, Veneno, Recarga.",
			"ruRU": "При срабатывании \"Ловушка с ядом\" сбивает противников с ног на 1.5 сек.\n\nTags: Уловки, Ловушка, Урон, Яд, Время восстановления.",
			"zhCN": "剧毒陷阱激活时击倒敌人, 持续 1.5 秒。\n\nTags: 诡诈, 陷阱, 伤害, 毒素, 冷却时间.",
			"zhTW": "劇毒陷阱啟動時會擊倒敵人 1.5 秒。\n\nTags: 欺敵, 陷阱, 傷害, 毒素, 冷卻時間."
},
		id: 71,
		maxPoints: 1,
		x: -686.37,
		y: 364.826
	},
	"Countering Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `Poison Trap has a 30% chance to reset your Imbuement Skill Cooldowns when activated.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Konternde Giftfalle",
			"esES": "Trampa de veneno contrarrestante",
			"esMX": "Trampa Venenosa Contrarrestante",
			"frFR": "Piège de poison rebelle",
			"itIT": "Trappola Avvelenata Contrastante",
			"jaJP": "ポイズン・トラップ(逆襲)",
			"koKR": "역습하는 맹독 덫",
			"plPL": "Kontrująca Trująca Pułapka",
			"ptBR": "Armadilha Venenosa Replicante",
			"ruRU": "Ответная ловушка с ядом",
			"zhCN": "反击剧毒陷阱",
			"zhTW": "反擊劇毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Giftfalle verfügt über eine Chance von 30%, bei der Aktivierung Eure Infusionsabklingzeiten abzuschließen.\n\nTags: Täuschung, Falle, Schaden, Gift, Abklingzeit.",
			"esES": "Trampa de veneno tiene un 30% de probabilidad de reiniciar los tiempos de reutilización de tus habilidades de imbuición cuando se activa.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Tiempo de reutilización.",
			"esMX": "Trampa Venenosa tiene un 30% de probabilidad de restablecer tus recuperaciones de habilidades de Imbuición al activarse.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Recuperación.",
			"frFR": "Piège de poison a 30% de chances de réinitialiser les temps de recharge de vos compétences d'imprégnation lorsqu'il est activé.\n\nTags: Subterfuge, Piège, Dégâts, Poison, Temps de recharge.",
			"itIT": "Trappola Avvelenata ha una probabilità del 30% di azzerare i tempi di recupero delle tue abilità di Infusione quando si attiva.\n\nTags: Sotterfugio, Trappole, Danni, Veleno, Tempo di recupero.",
			"jaJP": "〈ポイズン・トラップ〉が起動すると、30%の確率で注入スキルのクールダウンがリセットされる。\n\nTags: 遁走, 罠, ダメージ, 毒, クールダウン.",
			"koKR": "맹독 덫이 발동하면 30% 확률로 주입 기술의 재사용 대기시간이 초기화됩니다.\n\nTags: 기만, 덫, 피해, 독, 재사용 대기시간.",
			"plPL": "Trująca Pułapka ma przy aktywacji 30% szans na wyzerowanie czasów odnowienia twoich umiejętności Nasycania.\n\nTags: Podstęp, Pułapki, Obrażenia, Trucizna, Odnowienie.",
			"ptBR": "Armadilha Venenosa tem 30% de chance de reiniciar as recargas de habilidades de Imbuição quando ativada.\n\nTags: Subterfúgio, Armadilha, Dano, Veneno, Recarga.",
			"ruRU": "При срабатывании \"Ловушка с ядом\" с вероятностью 30% обновляет ваши умения категории \"Насыщение\".\n\nTags: Уловки, Ловушка, Урон, Яд, Время восстановления.",
			"zhCN": "剧毒陷阱激活时有 30% 几率重置你的灌注技能冷却时间。\n\nTags: 诡诈, 陷阱, 伤害, 毒素, 冷却时间.",
			"zhTW": "劇毒陷阱啟動時有 30% 機率重置你的灌注技能冷卻時間。\n\nTags: 欺敵, 陷阱, 傷害, 毒素, 冷卻時間."
},
		id: 72,
		maxPoints: 1,
		x: -971.755,
		y: 363.911
	},
	"Subverting Poison Trap": {
		baseSkill: "Poison Trap",
		connections: [ "Enhanced Poison Trap" ],
		description: `You deal x10% increased Poison damage to enemies standing inside your Poison Trap.

Tags: Subterfuge, Trap, Damage, Poison, Cooldown.`,
		nameLocalized: {
			"deDE": "Zerrüttende Giftfalle",
			"esES": "Trampa de veneno subversiva",
			"esMX": "Trampa Venenosa Subversiva",
			"frFR": "Piège de poison subversif",
			"itIT": "Trappola Avvelenata Rivoluzionaria",
			"jaJP": "ポイズン・トラップ(逆転)",
			"koKR": "전복시키는 맹독 덫",
			"plPL": "Obalająca Trująca Pułapka",
			"ptBR": "Armadilha Venenosa Destruidora",
			"ruRU": "Коварная ловушка с ядом",
			"zhCN": "颠覆剧毒陷阱",
			"zhTW": "顛覆劇毒陷阱"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt Gegnern, die in Eurer Giftfalle stehen, x10% mehr Giftschaden zu.\n\nTags: Täuschung, Falle, Schaden, Gift, Abklingzeit.",
			"esES": "Infliges un x10% más de daño de veneno a enemigos en el interior de tu Trampa de veneno.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Tiempo de reutilización.",
			"esMX": "Infliges un x10% más de daño de veneno a los enemigos que se encuentran dentro de tu Trampa Venenosa.\n\nTags: Subterfugio, Trampa, Daño, Veneno, Recuperación.",
			"frFR": "Vous infligez x10% de dégâts de poison supplémentaires aux adversaires se trouvant dans votre Piège de poison.\n\nTags: Subterfuge, Piège, Dégâts, Poison, Temps de recharge.",
			"itIT": "Infliggi il x10% di danni da veleno aggiuntivi ai nemici che si trovano all'interno della tua Trappola Avvelenata.\n\nTags: Sotterfugio, Trappole, Danni, Veleno, Tempo di recupero.",
			"jaJP": "〈ポイズン・トラップ〉の中にいる敵に与える毒ダメージがx10%増加する。\n\nTags: 遁走, 罠, ダメージ, 毒, クールダウン.",
			"koKR": "자신의 맹독 덫 안에 있는 적들에게 주는 독 피해가 x10% 증가합니다.\n\nTags: 기만, 덫, 피해, 독, 재사용 대기시간.",
			"plPL": "Zadajesz obrażenia od Trucizny zwiększone o x10% wrogom stojącym na Trującej Pułapce.\n\nTags: Podstęp, Pułapki, Obrażenia, Trucizna, Odnowienie.",
			"ptBR": "Você causa 10% de dano venenoso aumentado a inimigos que estão dentro da sua Armadilha Venenosa.\n\nTags: Subterfúgio, Armadilha, Dano, Veneno, Recarga.",
			"ruRU": "Вы наносите на x10% больше урона от яда противникам, находящимся в ловушке с ядом.\n\nTags: Уловки, Ловушка, Урон, Яд, Время восстановления.",
			"zhCN": "你对站在剧毒陷阱中的敌人造成的毒素伤害提高 x10%。\n\nTags: 诡诈, 陷阱, 伤害, 毒素, 冷却时间.",
			"zhTW": "你對站立在你劇毒陷阱中的敵人,造成的毒素傷害提高 x10%。\n\nTags: 欺敵, 陷阱, 傷害, 毒素, 冷卻時間."
},
		id: 73,
		maxPoints: 1,
		x: -713.635,
		y: 514.772
	},
	"Dark Shroud": {
		connections: [ "Enhanced Dark Shroud", "Subterfuge" ],
		description: `Cooldown: 20 seconds
Surround yourself with up to 5 protective shadows. Gain {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% Damage Reduction per active shadow. Each time you take direct damage, that damage is reduced and a shadow is consumed.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Dunkler Schleier",
			"esES": "Embozo oscuro",
			"esMX": "Sudario Oscuro",
			"frFR": "Sombre voile",
			"itIT": "Manto Oscuro",
			"jaJP": "ダーク・シュラウド",
			"koKR": "어둠의 장막",
			"plPL": "Mroczny Całun",
			"ptBR": "Véu Sombrio",
			"ruRU": "Теневая завеса",
			"zhCN": "暗影帷幕",
			"zhTW": "黑暗籠罩"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 20 Sek.\nUmhüllt Euch mit bis zu 5 schützenden Schatten. Erhaltet {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% Schadensreduktion pro aktivem Schatten. Jedes Mal, wenn Ihr direkten Schaden erleidet, wird dieser Schaden reduziert und ein Schatten wird verbraucht.\n\nTags: Täuschung, Schadensreduktion, Abklingzeit.",
			"esES": "Tiempo de reutilización: 20 s\nTe rodeas con hasta 5 sombras protectoras. Obtienes un {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de reducción de daño por sombra activa. Cada vez que sufres daño directo, ese daño se reduce y se consume una sombra.\n\nTags: Subterfugio, Reducción de daño, Tiempo de reutilización.",
			"esMX": "Recuperación: 20 segundos\nTe envuelves con hasta 5 sombras protectoras. Obtienes un {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de reducción de daño por cada sombra activa. Cada vez que recibes daño directo, dicho daño se reduce, y se consume una sombra.\n\nTags: Subterfugio, Reducción de daño, Recuperación.",
			"frFR": "Temps de recharge: 20 s\nVous vous entourez de 5 ombres protectrices au maximum. Vous obtenez {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de réduction des dégâts pour chaque ombre active. Chaque fois que vous subissez des dégâts directs, ces dégâts sont réduits et une ombre est consommée.\n\nTags: Subterfuge, Réduction des dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: 20 s\nTi circondi di massimo 5 ombre protettive. Ottieni il {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% di riduzione danni per ombra attiva. Ogni volta che subisci danni diretti, quei danni si riducono e un'ombra si consuma.\n\nTags: Sotterfugio, Riduzione danni, Tempo di recupero.",
			"jaJP": "クールダウン: 20秒\n最大5個の防御用影で身を取り巻く。発動している影1個につき、受けるダメージが{8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%軽減される。直接ダメージを受けるたびに、影1個を消費してそのダメージを軽減する。\n\nTags: 遁走, ダメージ減少, クールダウン.",
			"koKR": "재사용 대기시간: 20초\n자신을 최대 5개의 그림자로 둘러쌉니다. 활성화된 그림자 하나당 피해 감소가 {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% 증가합니다. 자신이 직접 피해를 받을 때마다 해당 피해가 감소하고 그림자 하나가 소모됩니다.\n\nTags: 기만, 피해 감소, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 20 sek.\nOtaczasz się ochronnymi cieniami (maksymalnie 5). Zyskujesz premię {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% do redukcji obrażeń za aktywny cień. Za każdym razem, gdy otrzymujesz bezpośrednie obrażenia, są one zredukowane, a jeden z cieni zostaje pochłonięty.\n\nTags: Podstęp, Redukcja Obrażeń, Odnowienie.",
			"ptBR": "Recarga: 20 segundos\nAté 5 sombras protetoras cercam você. Você recebe {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% de redução de dano por sombra ativa. Sempre que você receber dano direto, esse dano é reduzido e uma sombra é consumida.\n\nTags: Subterfúgio, Redução de Dano, Recarga.",
			"ruRU": "Время восстановления: 20 сек.\nВас окружает до 5 теней, каждая из которых уменьшает получаемый урон на {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%. Каждый раз, когда вы получаете прямой урон, этот урон уменьшается, а одна тень исчезает.\n\nTags: Уловки, Уменьшение урона, Время восстановления.",
			"zhCN": "冷却时间: 20 秒\n用最多 5 层防御性暗影环绕你。每有一层激活的暗影获得 {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}% 伤害减免。每次受到直接伤害时, 该伤害都会降低并消耗一层暗影。\n\nTags: 诡诈, 伤害减免, 冷却时间.",
			"zhTW": "冷卻時間:20 秒\n用最多 5 個防護暗影包圍自己。每個作用中的暗影會使傷害減免提高 {8/8.8/9.6/10.4/11.2/12/12.8/13.6/14.4/15.2}%。每次你受到直接傷害時,該傷害會降低並消耗一個暗影。\n\nTags: 欺敵, 傷害減免, 冷卻時間."
},
		id: 59,
		maxPoints: 5,
		x: 546.385,
		y: 3.375
	},
	"Enhanced Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Dark Shroud", "Countering Dark Shroud", "Subverting Dark Shroud" ],
		description: `Dark Shroud's shadows have a 10% chance to not be consumed.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Verbesserter Dunkler Schleier",
			"esES": "Embozo oscuro mejorado",
			"esMX": "Sudario Oscuro Potenciado",
			"frFR": "Sombre voile renforcé",
			"itIT": "Manto Oscuro Rinforzato",
			"jaJP": "ダーク・シュラウド(強化版)",
			"koKR": "강화된 어둠의 장막",
			"plPL": "Wzmocniony Mroczny Całun",
			"ptBR": "Véu Sombrio Aperfeiçoado",
			"ruRU": "Усиленная теневая завеса",
			"zhCN": "强化暗影帷幕",
			"zhTW": "強化黑暗籠罩"
},
		descriptionLocalized: {
			"deDE": "Die Schatten von Dunkle Schleier verfügen über eine Chance von 10%, nicht verbraucht zu werden.\n\nTags: Täuschung, Schadensreduktion, Abklingzeit.",
			"esES": "Las sombras de Embozo oscuro tienen un 10% de probabilidad de no consumirse.\n\nTags: Subterfugio, Reducción de daño, Tiempo de reutilización.",
			"esMX": "Las sombras de Sudario Oscuro tienen un 10% de probabilidad de no consumirse.\n\nTags: Subterfugio, Reducción de daño, Recuperación.",
			"frFR": "Les ombres de Sombre voile ont 10% de chances de ne pas être consommées.\n\nTags: Subterfuge, Réduction des dégâts, Temps de recharge.",
			"itIT": "Le ombre di Manto Oscuro hanno una probabilità del 10% di non essere consumate.\n\nTags: Sotterfugio, Riduzione danni, Tempo di recupero.",
			"jaJP": "〈ダーク・シュラウド〉の影が10%の確率で消費されない。\n\nTags: 遁走, ダメージ減少, クールダウン.",
			"koKR": "어둠의 장막의 그림자가 10% 확률로 소모되지 않습니다.\n\nTags: 기만, 피해 감소, 재사용 대기시간.",
			"plPL": "Istnieje 10% szans na to, że cienie z Mrocznego Całunu nie zostaną pochłonięte.\n\nTags: Podstęp, Redukcja Obrażeń, Odnowienie.",
			"ptBR": "As sombras de Véu Sombrio têm 10% de chance de não serem consumidas.\n\nTags: Subterfúgio, Redução de Dano, Recarga.",
			"ruRU": "Тени \"Теневой завесы\" с вероятностью 10% не исчезают после принятия удара.\n\nTags: Уловки, Уменьшение урона, Время восстановления.",
			"zhCN": "暗影帷幕的暗影有 10% 几率不被消耗。\n\nTags: 诡诈, 伤害减免, 冷却时间.",
			"zhTW": "黑暗籠罩的暗影有 10% 機率不會被消耗。\n\nTags: 欺敵, 傷害減免, 冷卻時間."
},
		id: 60,
		maxPoints: 1,
		x: 948.573,
		y: 3.039
	},
	"Countering Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `While you have at least 4 active shadows from Dark Shroud, gain +8% Critical Strike Chance.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Konternder Dunkler Schleier",
			"esES": "Embozo oscuro contrarrestante",
			"esMX": "Sudario Oscuro Contrarrestante",
			"frFR": "Sombre voile rebelle",
			"itIT": "Manto Oscuro Contrastante",
			"jaJP": "ダーク・シュラウド(逆襲)",
			"koKR": "역습하는 어둠의 장막",
			"plPL": "Kontrujący Mroczny Całun",
			"ptBR": "Véu Sombrio Replicante",
			"ruRU": "Ответная теневая завеса",
			"zhCN": "反击暗影帷幕",
			"zhTW": "反擊黑暗籠罩"
},
		descriptionLocalized: {
			"deDE": "Solange Ihr mindestens 4 aktive Schatten von Dunkler Schleier habt, steigt Eure kritische Trefferchance um +8%.\n\nTags: Täuschung, Schadensreduktion, Abklingzeit.",
			"esES": "Mientras tengas al menos 4 sombras activas de Embozo oscuro, obtienes un +8% de probabilidad de golpe crítico.\n\nTags: Subterfugio, Reducción de daño, Tiempo de reutilización.",
			"esMX": "Mientras tengas al menos 4 sombras activas de Sudario Oscuro, obtienes un +8% de probabilidad de golpe crítico.\n\nTags: Subterfugio, Reducción de daño, Recuperación.",
			"frFR": "Tant que Sombre voile a encore 4 ombres actives, vos chances d'infliger un coup critique sont augmentées de +8%.\n\nTags: Subterfuge, Réduction des dégâts, Temps de recharge.",
			"itIT": "Finché hai 4 o più ombre di Manto Oscuro attive, la tua probabilità di critico aumenta del +8%.\n\nTags: Sotterfugio, Riduzione danni, Tempo di recupero.",
			"jaJP": "〈ダーク・シュラウド〉による影が少なくとも4個発動している間、クリティカルヒット率が+8%上昇する。\n\nTags: 遁走, ダメージ減少, クールダウン.",
			"koKR": "어둠의 장막의 그림자가 4개 이상 활성화되어 있을 때 극대화 확률이 +8% 증가합니다.\n\nTags: 기만, 피해 감소, 재사용 대기시간.",
			"plPL": "Kiedy masz aktywne cienie (co najmniej 4) z Mrocznego Całunu, zyskujesz premię +8% do szansy na trafienie krytyczne.\n\nTags: Podstęp, Redukcja Obrażeń, Odnowienie.",
			"ptBR": "Enquanto você tiver pelo menos 4 sombras ativas de Véu Sombrio, recebe +8% de chance de acerto crítico.\n\nTags: Subterfúgio, Redução de Dano, Recarga.",
			"ruRU": "Пока существует не менее 4 теней, созданных \"Теневой завесой\", ваша вероятность критического удара повышается на +8%.\n\nTags: Уловки, Уменьшение урона, Время восстановления.",
			"zhCN": "暗影帷幕至少有 4 层激活的暗影时, 暴击几率提高 +8%。\n\nTags: 诡诈, 伤害减免, 冷却时间.",
			"zhTW": "當你擁有至少 4 個由黑暗籠罩產生且作用中的暗影時,爆擊機率提高 +8%。\n\nTags: 欺敵, 傷害減免, 冷卻時間."
},
		id: 62,
		maxPoints: 1,
		x: 1160.602,
		y: -68.416
	},
	"Subverting Dark Shroud": {
		baseSkill: "Dark Shroud",
		connections: [ "Enhanced Dark Shroud" ],
		description: `Each active shadow from Dark Shroud grants you +4% increased Movement Speed.

Tags: Subterfuge, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Zerrüttender Dunkler Schleier",
			"esES": "Embozo oscuro subversivo",
			"esMX": "Sudario Oscuro Subversivo",
			"frFR": "Sombre voile subversif",
			"itIT": "Manto Oscuro Rivoluzionaria",
			"jaJP": "ダーク・シュラウド(逆転)",
			"koKR": "전복시키는 어둠의 장막",
			"plPL": "Obalający Mroczny Całun",
			"ptBR": "Véu Sombrio Destruidor",
			"ruRU": "Коварная теневая завеса",
			"zhCN": "颠覆暗影帷幕",
			"zhTW": "顛覆黑暗籠罩"
},
		descriptionLocalized: {
			"deDE": "Jeder aktive Schatten von Dunkler Schleier verleiht Euch +4% mehr Bewegungsgeschwindigkeit.\n\nTags: Täuschung, Schadensreduktion, Abklingzeit.",
			"esES": "Cada sombra activa de Embozo oscuro te otorga un +4% más de velocidad de movimiento.\n\nTags: Subterfugio, Reducción de daño, Tiempo de reutilización.",
			"esMX": "Cada sombra activa de Sudario Oscuro te otorga un +4% más de velocidad de movimiento.\n\nTags: Subterfugio, Reducción de daño, Recuperación.",
			"frFR": "Chaque ombre active de Sombre voile augmente votre vitesse de déplacement de +4%.\n\nTags: Subterfuge, Réduction des dégâts, Temps de recharge.",
			"itIT": "Ogni ombra attiva di Manto Oscuro aumenta la tua velocità di movimento del +4%.\n\nTags: Sotterfugio, Riduzione danni, Tempo di recupero.",
			"jaJP": "〈ダーク・シュラウド〉によって発動している影1個につき、移動速度が+4%上昇する。\n\nTags: 遁走, ダメージ減少, クールダウン.",
			"koKR": "어둠의 장막의 활성화된 그림자 하나당 자신의 이동 속도가 +4% 증가합니다.\n\nTags: 기만, 피해 감소, 재사용 대기시간.",
			"plPL": "Każdy aktywny cień z Mrocznego Całunu zapewnia ci +4% do szybkości ruchu.\n\nTags: Podstęp, Redukcja Obrażeń, Odnowienie.",
			"ptBR": "Cada sombra ativa de Véu Sombrio concede a você +4% de velocidade de movimento aumentada.\n\nTags: Subterfúgio, Redução de Dano, Recarga.",
			"ruRU": "Каждая активная тень \"Теневой завесы\" повышает скорость передвижения на +4%.\n\nTags: Уловки, Уменьшение урона, Время восстановления.",
			"zhCN": "暗影帷幕每层激活的暗影都会使你的移动速度提高 +4%。\n\nTags: 诡诈, 伤害减免, 冷却时间.",
			"zhTW": "黑暗籠罩產生的每個作用中暗影,會賦予你 +4% 移動速度。\n\nTags: 欺敵, 傷害減免, 冷卻時間."
},
		id: 61,
		maxPoints: 1,
		x: 1157.68,
		y: 98.315
	},
	"Exploit": {
		connections: [ "Malice", "Subterfuge" ],
		description: `You deal x{6/12/18/24/30/36/42/48/54/60}% increased damage to Healthy and Injured enemies.

Tags: Healthy, Injured, Damage.`,
		nameLocalized: {
			"deDE": "Ausnutzen",
			"esES": "Explotar",
			"esMX": "Aprovechamiento",
			"frFR": "Exploitation",
			"itIT": "Opportunismo",
			"jaJP": "搾取",
			"koKR": "착취",
			"plPL": "Nadużycie",
			"ptBR": "Exploração",
			"ruRU": "Уловка",
			"zhCN": "利用",
			"zhTW": "剝削手段"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt gesunden und verletzten Gegnern x{6/12/18/24/30/36/42/48/54/60}% mehr Schaden zu.\n\nTags: Gesund, Verletzt, Schaden.",
			"esES": "Infliges un x{6/12/18/24/30/36/42/48/54/60}% más de daño a enemigos saludables y heridos.\n\nTags: Saludable, Herido, Daño.",
			"esMX": "Infliges un x{6/12/18/24/30/36/42/48/54/60}% más de daño a enemigos saludables y heridos.\n\nTags: Saludable, Herido, Daño.",
			"frFR": "Vous infligez x{6/12/18/24/30/36/42/48/54/60}% de dégâts supplémentaires aux cibles en bonne santé et aux cibles blessées.\n\nTags: En bonne santé, Blessure, Dégâts.",
			"itIT": "Infliggi il x{6/12/18/24/30/36/42/48/54/60}% di danni aggiuntivi contro i nemici in salute e feriti.\n\nTags: In salute, Ferita, Danni.",
			"jaJP": "健全状態および負傷した敵に与えるダメージがx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: 健全, 負傷, ダメージ.",
			"koKR": "건강 및 부상 상태의 적에게 주는 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: 건강, 부상, 피해.",
			"plPL": "Zadajesz obrażenia zwiększone o x{6/12/18/24/30/36/42/48/54/60}% wrogom w pełni sił i okaleczonym.\n\nTags: Pełnia Sił, Okaleczenie, Obrażenia.",
			"ptBR": "Você causa {6/12/18/24/30/36/42/48/54/60}% de dano aumentado a inimigos saudáveis e feridos.\n\nTags: Saudável, Ferido, Dano.",
			"ruRU": "Вы наносите на x{6/12/18/24/30/36/42/48/54/60}% больше урона противникам с высоким и низким уровнем здоровья.\n\nTags: Высокое здоровье, Ранение, Урон.",
			"zhCN": "你对健康和受伤的敌人造成的伤害提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 健康, 受伤, 伤害.",
			"zhTW": "你對健康和受傷的敵人造成的傷害提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 健康, 受傷, 傷害."
},
		id: 68,
		maxPoints: 3,
		x: 1.475,
		y: 280.736
	},
	"Malice": {
		connections: [ "Exploit" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Vulnerable enemies.

Tags: Vulnerable, Damage.`,
		nameLocalized: {
			"deDE": "Bösartigkeit",
			"esES": "Malicia",
			"esMX": "Malicia",
			"frFR": "Malveillance",
			"itIT": "Malizia",
			"jaJP": "悪意",
			"koKR": "악의",
			"plPL": "Złośliwość",
			"ptBR": "Malícia",
			"ruRU": "Злоба",
			"zhCN": "恶意",
			"zhTW": "惡意居心"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt verwundbaren Gegnern x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden zu.\n\nTags: Verwundbar, Schaden.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos vulnerables.\n\nTags: Vulnerable, Daño.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos vulnerables.\n\nTags: Vulnerable, Daño.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux adversaires vulnérables.\n\nTags: Vulnérable, Dégâts.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi ai nemici vulnerabili.\n\nTags: Vulnerabilità, Danni.",
			"jaJP": "脆弱状態の敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: 脆弱, ダメージ.",
			"koKR": "취약한 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 취약, 피해.",
			"plPL": "Zadajesz obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}% odsłoniętym wrogom.\n\nTags: Odsłonięcie, Obrażenia.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano aumentado a inimigos vulneráveis.\n\nTags: Vulnerável, Dano.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона уязвимым противникам.\n\nTags: Уязвимость, Урон.",
			"zhCN": "你对处于易伤状态的敌人造成的伤害提高 x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 易伤, 伤害.",
			"zhTW": "你對易傷的敵人造成的傷害提高 x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 易傷, 傷害."
},
		id: 69,
		maxPoints: 3,
		x: 0.765,
		y: 481.536
	},
	"Agile": {
		connections: [ "Subterfuge", "Mending Obscurity" ],
		description: `Using a Cooldown increases your Dodge Chance by {4/8/12/16/20/24/28/32/36/40}% for 3 seconds.

Tags: Dodge, Cooldown.`,
		nameLocalized: {
			"deDE": "Agil",
			"esES": "Ágil",
			"esMX": "Ágil",
			"frFR": "Agilité",
			"itIT": "Agilità",
			"jaJP": "機敏",
			"koKR": "날렵함",
			"plPL": "Zwinność",
			"ptBR": "Ágil",
			"ruRU": "Изворотливость",
			"zhCN": "敏捷",
			"zhTW": "輕靈身法"
},
		descriptionLocalized: {
			"deDE": "Bei der Nutzung einer Abklingzeit erhöht sich Eure Ausweichchance 3 Sek. lang um {4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Ausweichen, Abklingzeit.",
			"esES": "Usar un tiempo de reutilización aumenta tu probabilidad de esquivar un {4/8/12/16/20/24/28/32/36/40}% durante 3 s.\n\nTags: Esquivar, Tiempo de reutilización.",
			"esMX": "Usar una habilidad con recuperación aumenta tu probabilidad de esquivar un {4/8/12/16/20/24/28/32/36/40}% durante 3 segundos.\n\nTags: Evasión, Recuperación.",
			"frFR": "Utiliser une compétence avec temps de recharge augmente vos chances d'esquiver de {4/8/12/16/20/24/28/32/36/40}% pendant 3 s.\n\nTags: Esquive, Temps de recharge.",
			"itIT": "Lanciare un'abilità con tempo di recupero aumenta la tua probabilità di schivata del {4/8/12/16/20/24/28/32/36/40}% per 3 s.\n\nTags: Schivata, Tempo di recupero.",
			"jaJP": "クールダウンを使用すると、回避率が3秒間にわたり{4/8/12/16/20/24/28/32/36/40}%上昇する。\n\nTags: 回避, クールダウン.",
			"koKR": "재사용 대기시간이 있는 기술을 사용하면 3초 동안 회피 확률이 {4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 회피, 재사용 대기시간.",
			"plPL": "Użycie umiejętności z czasem odnowienia zwiększa twoją szansę na unik o {4/8/12/16/20/24/28/32/36/40}% na 3 sek.\n\nTags: Unik, Odnowienie.",
			"ptBR": "Usar uma recarga aumenta sua chance de esquiva em {4/8/12/16/20/24/28/32/36/40}% por 3 segundos.\n\nTags: Esquiva, Recarga.",
			"ruRU": "Когда вы применяете умение с временем восстановления, ваша вероятность уклонения повышается на {4/8/12/16/20/24/28/32/36/40}% на 3 сек.\n\nTags: Уклонение, Время восстановления.",
			"zhCN": "使用一个冷却技能会使你的躲闪几率提高 {4/8/12/16/20/24/28/32/36/40}%, 持续 3 秒。\n\nTags: 躲闪, 冷却时间.",
			"zhTW": "使用有冷卻時間的技能會使你的閃躲機率提高 {4/8/12/16/20/24/28/32/36/40}%,持續 3 秒。\n\nTags: 閃躲, 冷卻時間."
},
		id: 67,
		maxPoints: 3,
		x: 0.75,
		y: -269.039
	},
	"Mending Obscurity": {
		connections: [ "Agile" ],
		description: `While Stealthed, you Heal for {3/6/9/12/15/18/21/24/27/30}% Maximum Life per second.

Tags: Stealth, Healing.`,
		nameLocalized: {
			"deDE": "Lindernde Dunkelheit",
			"esES": "Oscuridad reparadora",
			"esMX": "Oscuridad Reparadora",
			"frFR": "Obscurité réparatrice",
			"itIT": "Oscurità Curativa",
			"jaJP": "忍び治療",
			"koKR": "회복의 어스름",
			"plPL": "Leczące Zaciemnienie",
			"ptBR": "Reparação Obscura",
			"ruRU": "Целительная пелена",
			"zhCN": "晦暗疗愈",
			"zhTW": "隱晦癒合"
},
		descriptionLocalized: {
			"deDE": "Während Ihr verstohlen seid, werdet Ihr pro Sekunde um {3/6/9/12/15/18/21/24/27/30}% Eures maximalen Lebens geheilt.\n\nTags: Verstohlenheit, Heilung.",
			"esES": "Mientras estás en sigilo, te curas un {3/6/9/12/15/18/21/24/27/30}% de tu vida máxima por segundo.\n\nTags: Sigilo, Curación.",
			"esMX": "Mientras tengas Sigilo, te sanas un {3/6/9/12/15/18/21/24/27/30}% de tu vida máxima por segundo.\n\nTags: Sigilo, Sanación.",
			"frFR": "En Camouflage, vous récupérez {3/6/9/12/15/18/21/24/27/30}% de votre maximum de points de vie par seconde.\n\nTags: Camouflage, Soins.",
			"itIT": "Mentre sei in modalità furtiva, ti curi del {3/6/9/12/15/18/21/24/27/30}% della tua Vita massima ogni secondo.\n\nTags: Furtività, Guarigione.",
			"jaJP": "隠密中、ライフが毎秒最大値の{3/6/9/12/15/18/21/24/27/30}%にあたる回復する。\n\nTags: 隠密, 回復.",
			"koKR": "은폐 상태에서 초당 최대 생명력의 {3/6/9/12/15/18/21/24/27/30}%만큼 생명력을 회복합니다.\n\nTags: 은폐, 치유.",
			"plPL": "Podczas trwania ukrycia przywracasz sobie {3/6/9/12/15/18/21/24/27/30}% maksymalnego zdrowia na sekundę.\n\nTags: Ukrycie, Leczenie.",
			"ptBR": "Enquanto estiver em furtividade, você cura {3/6/9/12/15/18/21/24/27/30}% da vida máxima por segundo.\n\nTags: Furtividade, Cura.",
			"ruRU": "В состоянии незаметности вы восполняете {3/6/9/12/15/18/21/24/27/30}% максимального запаса здоровья в секунду.\n\nTags: Незаметность, Исцеление.",
			"zhCN": "在潜行状态下, 你每秒恢复 {3/6/9/12/15/18/21/24/27/30}% 生命上限。\n\nTags: 潜行, 治疗.",
			"zhTW": "匿蹤時,每秒恢復生命值上限的 {3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 匿蹤, 治療."
},
		id: 145,
		maxPoints: 3,
		x: 4.7,
		y: -479.249
	},
};

rogueData["Imbuements"] = {
	"Deadly Venom": {
		connections: [ "Alchemical Advantage", "Debilitating Toxins", "Imbuements" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased Poisoning damage.

Tags: Damage, Poison.`,
		nameLocalized: {
			"deDE": "Tödliches Gift",
			"esES": "Veneno mortífero",
			"esMX": "Veneno Letal",
			"frFR": "Venin mortel",
			"itIT": "Veleno Letale",
			"jaJP": "死を誘う毒",
			"koKR": "치명적인 맹독",
			"plPL": "Zabójczy Jad",
			"ptBR": "Veneno Mortal",
			"ruRU": "Смертельный яд",
			"zhCN": "致命剧毒",
			"zhTW": "奪命劇毒"
},
		descriptionLocalized: {
			"deDE": "Ihr verursacht x{3/6/9/12/15/18/21/24/27/30}% mehr Giftschaden.\n\nTags: Schaden, Gift.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño de veneno.\n\nTags: Daño, Veneno.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño de veneno.\n\nTags: Daño, Veneno.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts de poison supplémentaires.\n\nTags: Dégâts, Poison.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni da veleno aggiuntivi.\n\nTags: Danni, Veleno.",
			"jaJP": "敵に毒で与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: ダメージ, 毒.",
			"koKR": "주는 중독 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 피해, 독.",
			"plPL": "Zadajesz obrażenia od Trucizny zwiększone o x{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Obrażenia, Trucizna.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano venenoso aumentado.\n\nTags: Dano, Veneno.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона от отравления.\n\nTags: Урон, Яд.",
			"zhCN": "你造成的毒素伤害提高 x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 伤害, 毒素.",
			"zhTW": "你造成的中毒傷害提高 x{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 傷害, 毒素."
},
		id: 78,
		maxPoints: 3,
		x: 498.16,
		y: 90.21
	},
	"Alchemical Advantage": {
		connections: [ "Deadly Venom" ],
		description: `You gain +{1/2/3/4/5/6/7/8/9/10}% increased Attack Speed for each enemy you've Poisoned, up to +15%.

Tags: Poison, Attack Speed.`,
		nameLocalized: {
			"deDE": "Alchemistischer Vorteil",
			"esES": "Ventaja alquímica",
			"esMX": "Ventaja Alquímica",
			"frFR": "Avantage alchimique",
			"itIT": "Vantaggio Alchemico",
			"jaJP": "錬金術の恩恵",
			"koKR": "연금술의 우위",
			"plPL": "Przewaga Alchemiczna",
			"ptBR": "Vantagem Alquímica",
			"ruRU": "Польза алхимии",
			"zhCN": "炼金优势",
			"zhTW": "鍊金優勢"
},
		descriptionLocalized: {
			"deDE": "Für jeden von Euch vergifteten Gegner erhaltet Ihr +{1/2/3/4/5/6/7/8/9/10}% mehr Angriffsgeschwindigkeit, bis maximal +15%.\n\nTags: Gift, Angriffsgeschwindigkeit.",
			"esES": "Obtienes un +{1/2/3/4/5/6/7/8/9/10}% más de velocidad de ataque por cada enemigo al que hayas envenenado, hasta un máximo de un +15%.\n\nTags: Veneno, Velocidad de ataque.",
			"esMX": "Obtienes un +{1/2/3/4/5/6/7/8/9/10}% más de velocidad de ataque por cada enemigo envenenado, hasta un máximo del +15%.\n\nTags: Veneno, Velocidad de ataque.",
			"frFR": "Votre vitesse d'attaque est augmentée de +{1/2/3/4/5/6/7/8/9/10}% pour chaque cible que vous avez empoisonnée, jusqu'à un maximum de +15%.\n\nTags: Poison, Vitesse d'attaque.",
			"itIT": "La tua velocità d'attacco aumenta del +{1/2/3/4/5/6/7/8/9/10}% per ogni nemico che hai avvelenato, fino a un massimo del +15%.\n\nTags: Veleno, Velocità d'attacco.",
			"jaJP": "敵を1体毒でおかすたびに攻撃速度が+{1/2/3/4/5/6/7/8/9/10}%増加する。増加量は最大+15%。\n\nTags: 毒, 攻撃速度.",
			"koKR": "중독시킨 적 하나당 공격 속도가 +{1/2/3/4/5/6/7/8/9/10}%만큼, 최대 +15%까지 증가합니다.\n\nTags: 독, 공격 속도.",
			"plPL": "Zyskujesz premię +{1/2/3/4/5/6/7/8/9/10}% do szybkości ataku za każdego zatrutego przez ciebie wroga, maksymalnie do +15%.\n\nTags: Trucizna, Szybkość Ataku.",
			"ptBR": "Você recebe +{1/2/3/4/5/6/7/8/9/10}% de velocidade de ataque aumentada por cada inimigo que envenenou, até +15%.\n\nTags: Veneno, Velocidade de Ataque.",
			"ruRU": "Ваша скорость атаки повышается на +{1/2/3/4/5/6/7/8/9/10}% за каждого отравленного противника, вплоть до +15%.\n\nTags: Яд, Скорость атаки.",
			"zhCN": "你每使一名敌人中毒, 你的攻击速度就会提高 +{1/2/3/4/5/6/7/8/9/10}%, 最多提高 +15%。\n\nTags: 毒素, 攻击速度.",
			"zhTW": "每使一位敵人中毒,你的攻擊速度提高 +{1/2/3/4/5/6/7/8/9/10}% 攻擊速度,最多提高 +15%。\n\nTags: 毒素, 攻擊速度."
},
		id: 79,
		maxPoints: 3,
		x: 776.575,
		y: 174.9
	},
	"Debilitating Toxins": {
		connections: [ "Deadly Venom" ],
		description: `Poisoned enemies deal {5/10/15/20/25/30/35/40/45/50}% less damage.

Tags: Poison, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Schwächende Toxine",
			"esES": "Toxinas debilitantes",
			"esMX": "Toxinas Debilitantes",
			"frFR": "Toxines incapacitantes",
			"itIT": "Tossine Debilitanti",
			"jaJP": "弱体の毒物",
			"koKR": "쇠약의 독소",
			"plPL": "Obezwładniające Toksyny",
			"ptBR": "Toxinas Debilitantes",
			"ruRU": "Изнуряющие яды",
			"zhCN": "衰弱毒素",
			"zhTW": "致衰毒素"
},
		descriptionLocalized: {
			"deDE": "Vergiftete Gegner verursachen {5/10/15/20/25/30/35/40/45/50}% weniger Schaden.\n\nTags: Gift, Schadensreduktion.",
			"esES": "Los enemigos envenenados infligen un {5/10/15/20/25/30/35/40/45/50}% menos de daño.\n\nTags: Veneno, Reducción de daño.",
			"esMX": "Los enemigos envenenados infligen un {5/10/15/20/25/30/35/40/45/50}% menos de daño.\n\nTags: Veneno, Reducción de daño.",
			"frFR": "Les cibles empoisonnées infligent {5/10/15/20/25/30/35/40/45/50}% de dégâts en moins.\n\nTags: Poison, Réduction des dégâts.",
			"itIT": "I nemici avvelenati infliggono il {5/10/15/20/25/30/35/40/45/50}% di danni in meno.\n\nTags: Veleno, Riduzione danni.",
			"jaJP": "毒状態の敵から受けるダメージが{5/10/15/20/25/30/35/40/45/50}%減少する。\n\nTags: 毒, ダメージ減少.",
			"koKR": "중독된 적이 주는 피해가 {5/10/15/20/25/30/35/40/45/50}% 감소합니다.\n\nTags: 독, 피해 감소.",
			"plPL": "Zatruci wrogowie zadają obrażenia zmniejszone o {5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Trucizna, Redukcja Obrażeń.",
			"ptBR": "Inimigos envenenados causam {5/10/15/20/25/30/35/40/45/50}% de dano reduzido.\n\nTags: Veneno, Redução de Dano.",
			"ruRU": "Отравленные противники наносят на {5/10/15/20/25/30/35/40/45/50}% меньше урона.\n\nTags: Яд, Уменьшение урона.",
			"zhCN": "中毒的敌人造成的伤害降低 {5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 毒素, 伤害减免.",
			"zhTW": "中毒的敵人造成的傷害降低 {5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 毒素, 傷害減免."
},
		id: 80,
		maxPoints: 3,
		x: 776.715,
		y: 4.865
	},
	"Poison Imbuement": {
		connections: [ "Enhanced Poison Imbuement", "Imbuements" ],
		description: `Cooldown: 13 seconds
Lucky Hit Chance: 33% (per use)
Imbue your weapons with lethal poison. Your next 2 Imbueable Skills deal Poison damage and apply {100/110/120/130/140/150/160/170/180/190}% of their Base damage as additional Poisoning damage over 5 seconds.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Giftinfusion",
			"esES": "Imbuición de veneno",
			"esMX": "Imbuición Venenosa",
			"frFR": "Imprégnation de poison",
			"itIT": "Infusione del Veleno",
			"jaJP": "毒注入",
			"koKR": "독 주입",
			"plPL": "Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno",
			"ruRU": "Насыщение ядом",
			"zhCN": "毒素灌注",
			"zhTW": "毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 13 Sek.\nGlückstrefferchance: 33% (per use)\nErfüllt Eure Waffen mit tödlichem Gift. Eure nächsten 2 infusionsfähigen Fertigkeiten verursachen Giftschaden und fügen zusätzliche {100/110/120/130/140/150/160/170/180/190}% ihres Basisschadens im Verlauf von 5 Sek. als Giftschaden zu.\n\nTags: Infusion, Schaden, Gift, Abklingzeit, Infusionsfähig.",
			"esES": "Tiempo de reutilización: 13 s\nProbabilidad de golpe de suerte: 33% (per use)\nImbuyes tus armas de veneno letal. Tus 2 siguientes habilidades imbuibles infligen daño de veneno y aplican un {100/110/120/130/140/150/160/170/180/190}% de su daño base como daño de veneno adicional durante 5 s.\n\nTags: Imbuición, Daño, Veneno, Tiempo de reutilización, Imbuible.",
			"esMX": "Recuperación: 13 segundos\nProbabilidad de golpe afortunado: 33% (per use)\nImbuyes tus armas con veneno letal. Tus próximas 2 habilidades imbuibles infligen daño de veneno y aplican un {100/110/120/130/140/150/160/170/180/190}% de su daño de base como daño de veneno adicional durante 5 segundos.\n\nTags: Imbuición, Daño, Veneno, Recuperación, Imbuible.",
			"frFR": "Temps de recharge: 13 s\nChances d'obtenir un coup de chance: 33% (per use)\nVous imprégnez vos armes d'un poison mortel. Vos 2 prochaines compétences imprégnables infligent des dégâts de poison et appliquent {100/110/120/130/140/150/160/170/180/190}% de leurs dégâts de base sous forme de dégâts de poison supplémentaires en 5 s.\n\nTags: Imprégnation, Dégâts, Poison, Temps de recharge, Imprégnable.",
			"itIT": "Tempo di recupero: 13 s\nProbabilità di colpo fortunato: 33% (per use)\nInfondi le tue armi con veleno letale. Le prossime 2 volte che utilizzerai delle abilità infondibili infliggerai danni da veleno e il {100/110/120/130/140/150/160/170/180/190}% dei relativi danni base sotto forma di danni da veleno aggiuntivi per 5 s.\n\nTags: Infusione, Danni, Veleno, Tempo di recupero, Infondibile.",
			"jaJP": "クールダウン: 13秒\n幸運の一撃発生率: 33% (per use)\n武器に猛毒を注入する。次の2回の注入対応 スキルは毒ダメージを与え、さらに5秒かけて基礎ダメージの{100/110/120/130/140/150/160/170/180/190}%の毒ダメージを追加で与える。\n\nTags: 注入, ダメージ, 毒, クールダウン, 注入可能.",
			"koKR": "재사용 대기시간: 13초\n행운의 적중 확률: 33% (per use)\n무기에 치명적인 독을 주입합니다. 다음 2번의 주입 가능 기술이 독 피해를 주고 5초에 걸쳐 기본 공격력의 {100/110/120/130/140/150/160/170/180/190}%에 해당하는 중독 피해를 추가로 부여합니다.\n\nTags: 주입, 피해, 독, 재사용 대기시간, 주입 가능.",
			"plPL": "Czas odnowienia: 13 sek.\nSzansa na szczęśliwy traf: 33% (per use)\nNasycasz swoją broń śmiercionośną trucizną. Twoje następne 2 Nasycalne umiejętności zadają obrażenia od Trucizny oraz dodatkowo {100/110/120/130/140/150/160/170/180/190}% swoich obrażeń podstawowych w postaci obrażeń od zatrucia w ciągu 5 sek.\n\nTags: Nasycenie, Obrażenia, Trucizna, Odnowienie, Nasycalne.",
			"ptBR": "Recarga: 13 segundos\nChance de Golpe de Sorte: 33% (per use)\nImbui suas armas com veneno letal. Suas próximas 2 habilidades Imbuíveis causam dano venenoso e aplicam {100/110/120/130/140/150/160/170/180/190}% do dano-base como dano venenoso adicional ao longo de 5 segundos.\n\nTags: Imbuição, Dano, Veneno, Recarga, Imbuível.",
			"ruRU": "Время восстановления: 13 сек.\nВероятность удачного удара: 33% (per use).\nВы насыщаете оружие смертоносным ядом. Атаки 2 следующих насыщаемых умений наносят урон от яда и дополнительно отравляют цели, нанося {100/110/120/130/140/150/160/170/180/190}% базового урона за 5 сек.\n\nTags: Насыщение, Урон, Яд, Время восстановления.",
			"zhCN": "冷却时间: 13 秒\n幸运一击几率: 33% (per use)\n用致命毒素灌注你的武器。你的下 2 次灌注技能造成毒素伤害并在 5 秒内额外造成 {100/110/120/130/140/150/160/170/180/190}% 基础伤害的毒素伤害。\n\nTags: 灌注, 伤害, 毒素, 冷却时间, 可灌注.",
			"zhTW": "冷卻時間:13 秒\n幸運觸發機率:33% (per use)\n以致命毒素灌注你的武器。你接下來 2 個可灌注技能會造成毒素傷害,並額外在 5 秒內造成等同其基礎傷害 {100/110/120/130/140/150/160/170/180/190}% 的中毒傷害。\n\nTags: 灌注, 傷害, 毒素, 冷卻時間, 可灌注."
},
		id: 128,
		maxPoints: 5,
		x: 500.35,
		y: -114.65
	},
	"Enhanced Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Poison Imbuement", "Mixed Poison Imbuement", "Blended Poison Imbuement" ],
		description: `Poison Imbuement's Poisoning Duration is increased by 1 second.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Verbesserte Giftinfusion",
			"esES": "Imbuición de veneno mejorada",
			"esMX": "Imbuición Venenosa Potenciada",
			"frFR": "Imprégnation de poison renforcée",
			"itIT": "Infusione del Veleno Rinforzata",
			"jaJP": "毒注入(強化版)",
			"koKR": "강화된 독 주입",
			"plPL": "Wzmocnione Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno Aperfeiçoada",
			"ruRU": "Усиленное насыщение ядом",
			"zhCN": "强化毒素灌注",
			"zhTW": "強化毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Die Giftdauer von Giftinfusion wird um 1 Sek. erhöht.\n\nTags: Infusion, Schaden, Gift, Abklingzeit, Infusionsfähig.",
			"esES": "La duración del veneno de Imbuición de veneno aumenta 1 s.\n\nTags: Imbuición, Daño, Veneno, Tiempo de reutilización, Imbuible.",
			"esMX": "La duración del veneno de Imbuición Venenosa aumenta 1 segundo.\n\nTags: Imbuición, Daño, Veneno, Recuperación, Imbuible.",
			"frFR": "La durée d'empoisonnement de l'imprégnation de poison augmente de 1 s.\n\nTags: Imprégnation, Dégâts, Poison, Temps de recharge, Imprégnable.",
			"itIT": "La durata del veleno di Infusione di Veleno aumenta di 1 s.\n\nTags: Infusione, Danni, Veleno, Tempo di recupero, Infondibile.",
			"jaJP": "毒注入の毒の持続時間が1秒伸びる。\n\nTags: 注入, ダメージ, 毒, クールダウン, 注入可能.",
			"koKR": "독 주입의 중독 지속시간이 1초 증가합니다.\n\nTags: 주입, 피해, 독, 재사용 대기시간, 주입 가능.",
			"plPL": "Czas trwania zatrucia wywołanego przez nasycenie Trucizną jest wydłużony o 1 sek.\n\nTags: Nasycenie, Obrażenia, Trucizna, Odnowienie, Nasycalne.",
			"ptBR": "A duração do veneno de Imbuição de Veneno é aumentada em 1 segundo.\n\nTags: Imbuição, Dano, Veneno, Recarga, Imbuível.",
			"ruRU": "Время действия эффекта отравления от \"Насыщения ядом\" увеличивается на 1 сек.\n\nTags: Насыщение, Урон, Яд, Время восстановления.",
			"zhCN": "毒素灌注的中毒持续时间延长 1 秒。\n\nTags: 灌注, 伤害, 毒素, 冷却时间, 可灌注.",
			"zhTW": "毒素灌注的中毒持續時間延長 1 秒。\n\nTags: 灌注, 傷害, 毒素, 冷卻時間, 可灌注."
},
		id: 129,
		maxPoints: 1,
		x: 882.88,
		y: -208.685
	},
	"Mixed Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Lucky Hit: Poison Imbued Skills have up to a 30% chance to apply double the amount of Poisoning damage over time.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Gemischte Giftinfusion",
			"esES": "Imbuición de veneno combinada",
			"esMX": "Imbuición Venenosa Mezclada",
			"frFR": "Imprégnation de poison mixte",
			"itIT": "Infusione del Veleno Mista",
			"jaJP": "混合〈毒合成〉",
			"koKR": "뒤섞은 독 주입",
			"plPL": "Spojone Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno Misturada",
			"ruRU": "Смешанное насыщение ядом",
			"zhCN": "混合毒素灌注",
			"zhTW": "混合毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Fertigkeiten mit Giftinfusion verfügen über eine Chance von 30%, über Zeit die doppelte Menge an Giftschaden zu verursachen.\n\nTags: Infusion, Schaden, Gift, Abklingzeit, Infusionsfähig.",
			"esES": "Golpe de suerte: Tus habilidades imbuidas de veneno tienen hasta un 30% de probabilidad de aplicar el doble de daño de veneno en el tiempo.\n\nTags: Imbuición, Daño, Veneno, Tiempo de reutilización, Imbuible.",
			"esMX": "Golpe afortunado: Las habilidades de Imbuición Venenosa tienen hasta un 30% de probabilidad de duplicar la cantidad de daño de veneno con el tiempo.\n\nTags: Imbuición, Daño, Veneno, Recuperación, Imbuible.",
			"frFR": "Coup de chance: les compétences imprégnées de poison ont jusqu'à 30% de chances d'appliquer le double de dégâts de poison sur la durée.\n\nTags: Imprégnation, Dégâts, Poison, Temps de recharge, Imprégnable.",
			"itIT": "Colpo fortunato: le abilità Infuse di veleno hanno fino al 30% di probabilità di infliggere il doppio dei danni da veleno periodici.\n\nTags: Infusione, Danni, Veleno, Tempo di recupero, Infondibile.",
			"jaJP": "幸運の一撃: 毒注入状態のスキルで与える毒の継続ダメージ量が、30%の確率で2倍になる。\n\nTags: 注入, ダメージ, 毒, クールダウン, 注入可能.",
			"koKR": "행운의 적중: 독 주입된 기술이 최대 30% 확률로 지속 중독 피해를 두 배로 적용합니다.\n\nTags: 주입, 피해, 독, 재사용 대기시간, 주입 가능.",
			"plPL": "Szczęśliwy traf: Umiejętności nasycone Trucizną mają 30% szans na nałożenie podwójnych obrażeń od zatrucia wraz z upływem czasu.\n\nTags: Nasycenie, Obrażenia, Trucizna, Odnowienie, Nasycalne.",
			"ptBR": "Golpe de Sorte: Habilidades de Imbuição de Veneno têm até 30% de chance de aplicar o dobro de dano venenoso ao longo do tempo.\n\nTags: Imbuição, Dano, Veneno, Recarga, Imbuível.",
			"ruRU": "Удачный удар: умения, насыщенные ядом, с вероятностью до 30% наносят двойной периодический урон от отравления.\n\nTags: Насыщение, Урон, Яд, Время восстановления.",
			"zhCN": "幸运一击: 毒素灌注技能最多有 30% 几率使持续性毒素伤害翻倍。\n\nTags: 灌注, 伤害, 毒素, 冷却时间, 可灌注.",
			"zhTW": "幸運觸發:毒素灌注強化的技能最高有 30% 機率使附加的中毒持續傷害加倍。\n\nTags: 灌注, 傷害, 毒素, 冷卻時間, 可灌注."
},
		id: 130,
		maxPoints: 1,
		x: 1140.45,
		y: -189.88
	},
	"Blended Poison Imbuement": {
		baseSkill: "Poison Imbuement",
		connections: [ "Enhanced Poison Imbuement" ],
		description: `Critical Strikes with Poison Imbued Skills deal x75% increased Poisoning damage.

Tags: Imbuement, Damage, Poison, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Vermengte Giftinfusion",
			"esES": "Imbuición de veneno mezclada",
			"esMX": "Imbuición Venenosa Combinada",
			"frFR": "Imprégnation de poison composite",
			"itIT": "Infusione del Veleno Miscelata",
			"jaJP": "毒注入(融合)",
			"koKR": "혼합 독 주입",
			"plPL": "Stopione Nasycenie Trucizną",
			"ptBR": "Imbuição de Veneno Mesclada",
			"ruRU": "Сопряженное насыщение ядом",
			"zhCN": "交融毒素灌注",
			"zhTW": "調和毒素灌注"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Fertigkeiten mit Giftinfusion verursachen x75% mehr Giftschaden.\n\nTags: Infusion, Schaden, Gift, Abklingzeit, Infusionsfähig.",
			"esES": "Los golpes críticos con habilidades imbuidas de veneno infligen un x75% más de daño de veneno.\n\nTags: Imbuición, Daño, Veneno, Tiempo de reutilización, Imbuible.",
			"esMX": "Los golpes críticos con habilidades de Imbuición Venenosa infligen un x75% más de daño de veneno.\n\nTags: Imbuición, Daño, Veneno, Recuperación, Imbuible.",
			"frFR": "Les coups critiques portés avec des compétences imprégnées de poison infligent x75% de dégâts de poison supplémentaires.\n\nTags: Imprégnation, Dégâts, Poison, Temps de recharge, Imprégnable.",
			"itIT": "Infliggere colpi critici con abilità Infuse di veleno infligge il x75% di danni da veleno aggiuntivi.\n\nTags: Infusione, Danni, Veleno, Tempo di recupero, Infondibile.",
			"jaJP": "毒注入状態のスキルのクリティカルヒットで与える毒ダメージがx75%増加する。\n\nTags: 注入, ダメージ, 毒, クールダウン, 注入可能.",
			"koKR": "독 주입된 기술이 극대화로 적중하면 주는 중독 피해가 x75% 증가합니다.\n\nTags: 주입, 피해, 독, 재사용 대기시간, 주입 가능.",
			"plPL": "Trafienia krytyczne umiejętnościami nasyconymi Trucizną zadają x75% zwiększone obrażenia od zatrucia.\n\nTags: Nasycenie, Obrażenia, Trucizna, Odnowienie, Nasycalne.",
			"ptBR": "Acertos críticos com habilidades de Imbuição de Veneno causam 75% de dano venenoso aumentado.\n\nTags: Imbuição, Dano, Veneno, Recarga, Imbuível.",
			"ruRU": "Критические удары умений, насыщенных ядом, наносят на x75% больше урона от отравления.\n\nTags: Насыщение, Урон, Яд, Время восстановления.",
			"zhCN": "使用毒素灌注技能暴击时造成的毒素伤害提高 x75%。\n\nTags: 灌注, 伤害, 毒素, 冷却时间, 可灌注.",
			"zhTW": "毒素灌注強化的技能爆擊時會額外造成 x75% 中毒傷害。\n\nTags: 灌注, 傷害, 毒素, 冷卻時間, 可灌注."
},
		id: 131,
		maxPoints: 1,
		x: 969.07,
		y: -338.106
	},
	"Shadow Crash": {
		connections: [ "Consuming Shadows", "Imbuements" ],
		description: `Lucky Hit: Shadow damage has up to a 10% chance to Stun for {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} seconds.

Tags: Crowd Control, Shadow, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Schattensturz",
			"esES": "Choque tenebroso",
			"esMX": "Fragor de Sombra",
			"frFR": "Déferlante d'ombre",
			"itIT": "Schianto d'Ombra",
			"jaJP": "シャドウ・クラッシュ",
			"koKR": "그림자 붕괴",
			"plPL": "Zderzenie Cienia",
			"ptBR": "Colisão de Sombras",
			"ruRU": "Теневое сокрушение",
			"zhCN": "暗影压制",
			"zhTW": "暗影暴擊"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Schattenschaden verfügt über eine Chance von bis zu 10%, Gegner {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} Sek. lang zu betäuben.\n\nTags: Kontrollverlust, Schatten, Glückstreffer.",
			"esES": "Golpe de suerte: El daño de sombra tiene hasta un 10% de probabilidad de aturdir durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Control de masas, Sombra, Golpe de suerte.",
			"esMX": "Golpe afortunado: El daño de sombra tiene hasta un 10% de probabilidad de aturdir durante {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Control de multitudes, Sombra, Golpe afortunado.",
			"frFR": "Coup de chance: vos dégâts d'ombre ont jusqu'à 10% de chances d'étourdir les adversaires pendant {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Perte de contrôle, Ombre, Coup de chance.",
			"itIT": "Colpo fortunato: i danni da ombra hanno fino al 10% di probabilità di stordire per {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} s.\n\nTags: Effetti debilitanti, Ombra, Colpo fortunato.",
			"jaJP": "幸運の一撃: シャドウダメージが、最大10%の確率で敵を{0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}秒間スタンさせる。\n\nTags: 操作障害効果, 影, 幸運の一撃.",
			"koKR": "행운의 적중: 암흑 피해가 최대 10% 확률로 적을 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5}초 동안 기절시킵니다.\n\nTags: 군중 제어, 암흑, 행운의 적중.",
			"plPL": "Szczęśliwy traf: Obrażenia Cienia mają do 10% szans na ogłuszenie wroga na {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} sek.\n\nTags: Ograniczanie Kontroli, Cień, Szczęśliwy Traf.",
			"ptBR": "Golpe de Sorte: Dano de sombra tem até 10% de chance de atordoar por {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} segundos.\n\nTags: Controle de Grupo, Sombra, Golpe de Sorte.",
			"ruRU": "Удачный удар: урон от темной магии с вероятностью до 10% оглушает цель на {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} сек.\n\nTags: Контроль, Темная магия, Удачный удар.",
			"zhCN": "幸运一击: 暗影伤害最多有 10% 几率使敌人昏迷 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 秒。\n\nTags: 群控, 暗影, 幸运一击.",
			"zhTW": "幸運觸發:暗影傷害最多有 10% 機率擊昏敵人 {0.5/1/1.5/2/2.5/3/3.5/4/4.5/5} 秒。\n\nTags: 控場, 暗影, 幸運觸發."
},
		id: 85,
		maxPoints: 3,
		x: -165.624,
		y: -327.788
	},
	"Consuming Shadows": {
		connections: [ "Shadow Crash" ],
		description: `Each time you kill an enemy with Shadow damage, you generate {10/20/30/40/50/60/70/80/90/100} Energy.

Tags: Shadow, Energy.`,
		nameLocalized: {
			"deDE": "Verschlingende Schatten",
			"esES": "Sombras consumidoras",
			"esMX": "Sombras Acuciantes",
			"frFR": "Ombres brûlantes",
			"itIT": "Ombre Logoranti",
			"jaJP": "貪る影",
			"koKR": "흡수의 어둠",
			"plPL": "Pożerające Cienie",
			"ptBR": "Sombras Debilitantes",
			"ruRU": "Поглощающие теней",
			"zhCN": "吞噬之影",
			"zhTW": "吞噬暗影"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr einen Gegner mit Schattenschaden tötet, erzeugt Ihr {10/20/30/40/50/60/70/80/90/100} Energie.\n\nTags: Schatten, Energie.",
			"esES": "Cada vez que matas a un enemigo con daño de sombra, generas {10/20/30/40/50/60/70/80/90/100} de energía.\n\nTags: Sombra, Energía.",
			"esMX": "Cada vez que eliminas a un enemigo con daño de sombra, generas {10/20/30/40/50/60/70/80/90/100} de energía.\n\nTags: Sombra, Energía.",
			"frFR": "Chaque fois que vous tuez une cible avec des dégâts d'ombre, vous générez {10/20/30/40/50/60/70/80/90/100} points d'énergie.\n\nTags: Ombre, Énergie.",
			"itIT": "Ogni volta che uccidi un nemico con danni da ombra, generi {10/20/30/40/50/60/70/80/90/100} energia.\n\nTags: Ombra, Energia.",
			"jaJP": "シャドウダメージで敵を1体倒すたび、エネルギーが{10/20/30/40/50/60/70/80/90/100}回復する。\n\nTags: 影, エネルギー.",
			"koKR": "암흑 피해로 적을 처치할 때마다 기력을 {10/20/30/40/50/60/70/80/90/100} 생성합니다.\n\nTags: 암흑, 기력.",
			"plPL": "Za każdego wroga zabitego przy pomocy obrażeń od Cienia generujesz {10/20/30/40/50/60/70/80/90/100} pkt. energii.\n\nTags: Cień, Energia.",
			"ptBR": "Cada vez que você mata um inimigo com dano de sombra, você gera {10/20/30/40/50/60/70/80/90/100} de energia.\n\nTags: Sombra, Energia.",
			"ruRU": "Когда вы убиваете противника уроном от темной магии, вы накапливаете {10/20/30/40/50/60/70/80/90/100} ед. энергии.\n\nTags: Темная магия, Энергия.",
			"zhCN": "每当你使用暗影伤害消灭敌人, 产生 {10/20/30/40/50/60/70/80/90/100} 点能量。\n\nTags: 暗影, 能量.",
			"zhTW": "每次你以暗影傷害擊殺敵人時,產生 {10/20/30/40/50/60/70/80/90/100} 點能量。\n\nTags: 暗影, 能量."
},
		id: 86,
		maxPoints: 3,
		x: -163.933,
		y: -493.045
	},
	"Shadow Imbuement": {
		connections: [ "Enhanced Shadow Imbuement", "Imbuements" ],
		description: `Cooldown: 13 seconds
Lucky Hit Chance: 33% (per hit)
Imbue your weapons with festering shadows. Your next 2 Imbueable Skills deal Shadow damage and infect enemies for 6 seconds. Infected enemies explode on death, dealing {40/44/48/52/56/60/64/68/72/76}% damage to all surrounding enemies.

If the infection expires before the enemy dies, it will deal {40/44/48/52/56/60/64/68/72/76}% damage to only that enemy.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Schatteninfusion",
			"esES": "Imbuición de sombra",
			"esMX": "Imbuición Umbría",
			"frFR": "Imprégnation d'ombre",
			"itIT": "Infusione dell'Ombra",
			"jaJP": "シャドウ注入",
			"koKR": "암흑 주입",
			"plPL": "Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra",
			"ruRU": "Насыщение тенью",
			"zhCN": "暗影灌注",
			"zhTW": "暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 13 Sek.\nGlückstrefferchance: 33% (per hit)\nErfüllt Eure Waffen mit schwärenden Schatten. Eure nächsten 2 infusionsfähigen Fertigkeiten verursachen Schattenschaden und infizieren Gegner 6 Sek. lang. Infizierte Gegner explodieren beim Tod und fügen allen Gegnern in der Nähe {40/44/48/52/56/60/64/68/72/76}% Schaden zu.\n\nWenn die Infektion vor dem Tod des Gegners abläuft, fügt sie nur diesem Gegner {40/44/48/52/56/60/64/68/72/76}% Schaden zu.\n\nTags: Infusion, Schaden, Schatten, Abklingzeit, Infusionsfähig.",
			"esES": "Tiempo de reutilización: 13 s\nProbabilidad de golpe de suerte: 33% (per hit)\nImbuyes tus armas de sombras infectas. Tus 2 siguientes habilidades imbuibles infligen daño de sombra e infectan a los enemigos durante 6 s. Los enemigos infectados explotan al morir e infligen {40/44/48/52/56/60/64/68/72/76}% de daño a todos los enemigos cercanos.\n\nSi la infección termina antes de que el enemigo muera, infligirá {40/44/48/52/56/60/64/68/72/76}% de daño solo a ese enemigo.\n\nTags: Imbuición, Daño, Sombra, Tiempo de reutilización, Imbuible.",
			"esMX": "Recuperación: 13 segundos\nProbabilidad de golpe afortunado: 33% (per hit)\nImbuyes tus armas con sombras purulentas. Tus siguientes 2 habilidades imbuibles infligen daño de sombra e infectan a los enemigos durante 6 segundos. Los enemigos infectados explotan al morir e infligen {40/44/48/52/56/60/64/68/72/76}% de daño a todos los enemigos circundantes.\n\nSi la infección caduca antes de que el enemigo muera, infligirá {40/44/48/52/56/60/64/68/72/76}% de daño solo a ese enemigo.\n\nTags: Imbuición, Daño, Sombra, Recuperación, Imbuible.",
			"frFR": "Temps de recharge: 13 s\nChances d'obtenir un coup de chance: 33% (per hit)\nVous imprégnez vos armes d'ombres purulentes. Vos 2 prochaines compétences imprégnables infligent des dégâts d'ombre et infectent les cibles pendant 6 s. Les cibles infectées explosent en mourant, ce qui inflige {40/44/48/52/56/60/64/68/72/76}% points de dégâts à l'ensemble des adversaires à proximité.\n\nSi l'infection expire avant la mort d'une cible, celle-ci sera la seule à subir {40/44/48/52/56/60/64/68/72/76}% points de dégâts.\n\nTags: Imprégnation, Dégâts, Ombre, Temps de recharge, Imprégnable.",
			"itIT": "Tempo di recupero: 13 s\nProbabilità di colpo fortunato: 33% (per hit)\nInfondi le tue armi con ombre putrescenti. Le prossime 2 volte che utilizzerai delle abilità infondibili infliggerai danni da ombra e infetterai i nemici per 6 s. I nemici infettati esplodono alla morte, infliggendo {40/44/48/52/56/60/64/68/72/76}% danni a tutti i nemici vicini.\n\nSe l'infezione si esaurisce prima della morte del nemico, infligge {40/44/48/52/56/60/64/68/72/76}% danni solamente a quel nemico.\n\nTags: Infusione, Danni, Ombra, Tempo di recupero, Infondibile.",
			"jaJP": "クールダウン: 13秒\n幸運の一撃発生率: 33% (per hit)\n武器に腐敗をもたらす闇を注入する。次の2回の注入対応スキルはシャドウダメージを与え、さらに6秒間にわたり敵を闇に感染させる。感染した敵は死亡時に爆発し、周囲にいるすべての敵に{40/44/48/52/56/60/64/68/72/76}%のダメージを与える。\n\n敵が死亡する前に感染が終了すると、その敵のみに{40/44/48/52/56/60/64/68/72/76}%のダメージを与える。\n\nTags: 注入, ダメージ, 影, クールダウン, 注入可能.",
			"koKR": "재사용 대기시간: 13초\n행운의 적중 확률: 33% (per hit)\n무기에 부패한 암흑을 주입합니다. 다음 2번의 주입 가능 기술이 암흑 피해를 주고 적을 6초 동안 감염시킵니다. 감염된 적은 사망 시 폭발하여 주변 적들에게 {40/44/48/52/56/60/64/68/72/76}%의 피해를 줍니다.\n\n적이 죽기 전에 감염이 만료되면, 해당 적에게만 {40/44/48/52/56/60/64/68/72/76}%의 피해를 줍니다.\n\nTags: 주입, 피해, 암흑, 재사용 대기시간, 주입 가능.",
			"plPL": "Czas odnowienia: 13 sek.\nSzansa na szczęśliwy traf: 33% (per hit)\nNasycasz swoją broń jątrzącymi cieniami. Twoje następne (2) Nasycalne umiejętności zadają obrażenia Cienia i zakażają wrogów na 6 sek. Zakażeni wrogowie po śmierci wybuchają, zadając {40/44/48/52/56/60/64/68/72/76}% pkt. obrażeń wszystkim pobliskim celom.\n\nJeśli zakażenie dobiegnie końca, zanim wróg zginie, zada {40/44/48/52/56/60/64/68/72/76}% pkt. obrażeń tylko temu wrogowi.\n\nTags: Nasycenie, Obrażenia, Cień, Odnowienie, Nasycalne.",
			"ptBR": "Recarga: 13 segundos\nChance de Golpe de Sorte: 33% (per hit)\nImbui suas armas com sombras pútridas. Suas próximas 2 habilidades Imbuíveis causam dano de sombra e infectam inimigos por 6 segundos. Inimigos infectados explodem ao morrer, causando {40/44/48/52/56/60/64/68/72/76}% de dano a todos os inimigos ao redor.\n\nSe a infecção expirar antes de o inimigo morrer, causará {40/44/48/52/56/60/64/68/72/76}% de dano somente a esse inimigo.\n\nTags: Imbuição, Dano, Sombra, Recarga, Imbuível.",
			"ruRU": "Время восстановления: 13 сек.\nВероятность удачного удара: 33% (per hit)\nВы насыщаете оружие тлетворной силой тени. Атаки 2 следующих насыщаемых умений наносят урон от темной магии и заражают противников на 6 сек.\nЗараженные противники взрываются после смерти, нанося {40/44/48/52/56/60/64/68/72/76}% ед. урона окружающим противникам.\n\nЕсли действие заражения заканчивается до смерти противника, он получает {40/44/48/52/56/60/64/68/72/76}% ед. урона.\n\nTags: Насыщение, Урон, Темная магия, Время восстановления.",
			"zhCN": "冷却时间: 13 秒\n幸运一击几率: 33% (per hit)\n使用溃烂的暗影能量灌注你的武器。你接下来的 2 个 可灌注技能造成暗影伤害并感染敌人 6 秒。被感染的敌人死亡时爆炸, 对周围所有敌人造成 {40/44/48/52/56/60/64/68/72/76}% 点伤害。\n\n如果感染在敌人死亡前结束, 它只会对那一名敌人造成 {40/44/48/52/56/60/64/68/72/76}% 点伤害。\n\nTags: 灌注, 伤害, 暗影, 冷却时间, 可灌注.",
			"zhTW": "冷卻時間:13 秒\n幸運觸發機率: 33% (per hit)\n以潰膿暗影灌注你的武器。你接下來 2 個可灌注技能會造成暗影傷害並感染敵人 6 秒。受感染的敵人在死亡時會爆炸,對附近所有敵人造成 {40/44/48/52/56/60/64/68/72/76}% 點傷害。\n\n若感染效果結束時該敵人尚未死亡,則只會對該敵人造成 {40/44/48/52/56/60/64/68/72/76}% 點傷害。\n\nTags: 灌注, 傷害, 暗影, 冷卻時間, 可灌注."
},
		id: 132,
		maxPoints: 5,
		x: 221.62,
		y: -249.835
	},
	"Enhanced Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Shadow Imbuement", "Mixed Shadow Imbuement", "Blended Shadow Imbuement" ],
		description: `You have +15% increased Critical Strike Chance against Injured enemies infected by Shadow Imbuement.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Verbesserte Schatteninfusion",
			"esES": "Imbuición de sombra mejorada",
			"esMX": "Imbuición Umbría Potenciada",
			"frFR": "Imprégnation d'ombre renforcée",
			"itIT": "Infusione dell'Ombra Rinforzata",
			"jaJP": "シャドウ注入(強化版)",
			"koKR": "강화된 암흑 주입",
			"plPL": "Wzmocnione Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra Aperfeiçoada",
			"ruRU": "Усиленное насыщение тенью",
			"zhCN": "强化暗影灌注",
			"zhTW": "強化暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Ihr habt eine +15% höhere kritische Trefferchance gegen verwundete Gegner, die mit Schatteninfusion infiziert sind.\n\nTags: Infusion, Schaden, Schatten, Abklingzeit, Infusionsfähig.",
			"esES": "Tienes un +15% más de probabilidad de golpe crítico contra enemigos heridos infectados por Imbuición de sombra.\n\nTags: Imbuición, Daño, Sombra, Tiempo de reutilización, Imbuible.",
			"esMX": "Tienes un +15% más de probabilidad de golpe crítico contra enemigos heridos infectados por Imbuición Umbría.\n\nTags: Imbuición, Daño, Sombra, Recuperación, Imbuible.",
			"frFR": "Vos chances d'infliger un coup critique aux cibles blessées infectées par l'imprégnation d'ombre sont augmentées de +15%.\n\nTags: Imprégnation, Dégâts, Ombre, Temps de recharge, Imprégnable.",
			"itIT": "La tua probabilità di critico contro nemici feriti e infettati da Infusione dell'Ombra aumenta del +15%.\n\nTags: Infusione, Danni, Ombra, Tempo di recupero, Infondibile.",
			"jaJP": "〈シャドウ注入〉の影響を受けている負傷状態の敵に対してのクリティカルヒット率が、+15%増加する。\n\nTags: 注入, ダメージ, 影, クールダウン, 注入可能.",
			"koKR": "암흑 주입의 영향을 받은 부상 상태의 적에 대한 극대화 확률이 +15% 증가합니다.\n\nTags: 주입, 피해, 암흑, 재사용 대기시간, 주입 가능.",
			"plPL": "Masz premię +15% do szansy na trafienie krytyczne przeciwko okaleczonym wrogom pod wpływem Nasycenia Cieniem.\n\nTags: Nasycenie, Obrażenia, Cień, Odnowienie, Nasycalne.",
			"ptBR": "Você tem +15% de chance de acerto crítico aumentada contra inimigos feridos infectados por Imbuição de Sombra.\n\nTags: Imbuição, Dano, Sombra, Recarga, Imbuível.",
			"ruRU": "Вероятность нанести противнику критический урон повышается на +15%, если у цели низкий уровень здоровья и на нее действует эффект \"Насыщения тенью\".\n\nTags: Насыщение, Урон, Темная магия, Время восстановления.",
			"zhCN": "你对受暗影灌注影响的受伤的敌人造成伤害时, 打出暴击的几率提高 +15%。\n\nTags: 灌注, 伤害, 暗影, 冷却时间, 可灌注.",
			"zhTW": "你對受傷且受暗影灌注感染的敵人爆擊機率提高 +15%。\n\nTags: 灌注, 傷害, 暗影, 冷卻時間, 可灌注."
},
		id: 133,
		maxPoints: 1,
		x: 415.425,
		y: -434.215
	},
	"Mixed Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Enemies infected by Shadow Imbuement take x12% increased Non-Physical damage from you for 8 seconds.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Gemischte Schatteninfusion",
			"esES": "Imbuición de sombra combinada",
			"esMX": "Imbuición Umbría Mezclada",
			"frFR": "Imprégnation d'ombre mixte",
			"itIT": "Infusione dell'Ombra Mista",
			"jaJP": "シャドウ注入(混合)",
			"koKR": "뒤섞은 암흑 주입",
			"plPL": "Spojone Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra Misturada",
			"ruRU": "Смешанное насыщение тенью",
			"zhCN": "混合暗影灌注",
			"zhTW": "混合暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Gegner, die mit Schatteninfusion infiziert sind, erleiden 8 Sek. lang x12% mehr nichtphysischen Schaden von Euch.\n\nTags: Infusion, Schaden, Schatten, Abklingzeit, Infusionsfähig.",
			"esES": "Infliges un x12% más de daño no físico a los enemigos infectados por Imbuición de sombra durante 8 s.\n\nTags: Imbuición, Daño, Sombra, Tiempo de reutilización, Imbuible.",
			"esMX": "Los enemigos infectados por Imbuición Umbría reciben un x12% más de daño no físico de ti durante 8 segundos.\n\nTags: Imbuición, Daño, Sombra, Recuperación, Imbuible.",
			"frFR": "Les cibles infectées par l'imprégnation d'ombre subissent x12% de dégâts non physiques supplémentaires de votre part pendant 8 s.\n\nTags: Imprégnation, Dégâts, Ombre, Temps de recharge, Imprégnable.",
			"itIT": "I nemici infettati da Infusione dell'Ombra subiscono il x12% di danni non fisici aggiuntivi per 8 s.\n\nTags: Infusione, Danni, Ombra, Tempo di recupero, Infondibile.",
			"jaJP": "*〈*シャドウ注入*〉*]の効果を受けた敵は、受ける非物理ダメージが\\8\\秒間にわたり\\x[\\0.12*100\\%増加する。\n\nTags: 注入, ダメージ, 影, クールダウン, 注入可能.",
			"koKR": "암흑 주입에 감염된 적은 자신으로부터 받는 비물리 피해가 8초 동안 x12% 증가합니다.\n\nTags: 주입, 피해, 암흑, 재사용 대기시간, 주입 가능.",
			"plPL": "Wrogowie zainfekowani Nasyceniem Cieniem otrzymują zwiększone o x12% obrażenia niefizyczne przez 8 sek.\n\nTags: Nasycenie, Obrażenia, Cień, Odnowienie, Nasycalne.",
			"ptBR": "Inimigos infectados por Imbuição de Sombra recebem 12% de dano não físico aumentado por 8 segundos.\n\nTags: Imbuição, Dano, Sombra, Recarga, Imbuível.",
			"ruRU": "Противники, зараженные насыщенным тенью умением, получают от вас на x12% больше нефизического урона в течение 8 сек.\n\nTags: Насыщение, Урон, Темная магия, Время восстановления.",
			"zhCN": "敌人受暗影灌注影响时, 其受到来自你的非物理伤害提高 x12%, 持续 8 秒。\n\nTags: 灌注, 伤害, 暗影, 冷却时间, 可灌注.",
			"zhTW": "對受到暗影灌注影響的敵人造成的非物理傷害提高 x12%,持續 8 秒。\n\nTags: 灌注, 傷害, 暗影, 冷卻時間, 可灌注."
},
		id: 134,
		maxPoints: 1,
		x: 665.515,
		y: -493.117
	},
	"Blended Shadow Imbuement": {
		baseSkill: "Shadow Imbuement",
		connections: [ "Enhanced Shadow Imbuement" ],
		description: `Shadow Imbuement's primary explosion makes enemies Vulnerable for 2 seconds.

Tags: Imbuement, Damage, Shadow, Cooldown, Imbueable.`,
		nameLocalized: {
			"deDE": "Vermengte Schatteninfusion",
			"esES": "Imbuición de sombra mezclada",
			"esMX": "Imbuición Umbría Combinada",
			"frFR": "Imprégnation d'ombre composite",
			"itIT": "Infusione dell'Ombra Miscelata",
			"jaJP": "シャドウ注入(融合)",
			"koKR": "혼합 암흑 주입",
			"plPL": "Stopione Nasycenie Cieniem",
			"ptBR": "Imbuição de Sombra Mesclada",
			"ruRU": "Сопряженное насыщение тенью",
			"zhCN": "交融暗影灌注",
			"zhTW": "調和暗影灌注"
},
		descriptionLocalized: {
			"deDE": "Die primäre Explosion von Schatteninfusion macht Gegner 2 Sek. lang verwundbar.\n\nTags: Infusion, Schaden, Schatten, Abklingzeit, Infusionsfähig.",
			"esES": "La explosión principal de Imbuición de sombra vuelve vulnerables a los enemigos durante 2 s.\n\nTags: Imbuición, Daño, Sombra, Tiempo de reutilización, Imbuible.",
			"esMX": "La explosión principal de Imbuición Umbría vuelve a los enemigos vulnerables durante 2 segundos.\n\nTags: Imbuición, Daño, Sombra, Recuperación, Imbuible.",
			"frFR": "L'explosion principale de l'imprégnation d'ombre rend les adversaires vulnérables pendant 2 s.\n\nTags: Imprégnation, Dégâts, Ombre, Temps de recharge, Imprégnable.",
			"itIT": "L'esplosione principale di Infusione dell'Ombra rende i nemici vulnerabili per 2 s.\n\nTags: Infusione, Danni, Ombra, Tempo di recupero, Infondibile.",
			"jaJP": "〈シャドウ注入〉の最初の爆発が、敵を2秒間にわたり脆弱状態にする。\n\nTags: 注入, ダメージ, 影, クールダウン, 注入可能.",
			"koKR": "암흑 주입의 주 폭발이 적을 2초 동안 취약하게 만듭니다.\n\nTags: 주입, 피해, 암흑, 재사용 대기시간, 주입 가능.",
			"plPL": "Główna eksplozja Nasycenia Cieniem sprawia, że wrogowie stają się odsłonięci na 2 sek.\n\nTags: Nasycenie, Obrażenia, Cień, Odnowienie, Nasycalne.",
			"ptBR": "A explosão primária de Imbuição de Sombra torna os inimigos vulneráveis por 2 segundos.\n\nTags: Imbuição, Dano, Sombra, Recarga, Imbuível.",
			"ruRU": "Первый взрыв \"Насыщения тенью\" делает противников уязвимыми на 2 сек.\n\nTags: Насыщение, Урон, Темная магия, Время восстановления.",
			"zhCN": "暗影灌注的主要爆炸使敌人陷入易伤, 持续 2 秒。\n\nTags: 灌注, 伤害, 暗影, 冷却时间, 可灌注.",
			"zhTW": "暗影灌注的主要爆發會使敵人易傷,持續 2 秒。\n\nTags: 灌注, 傷害, 暗影, 冷卻時間, 可灌注."
},
		id: 135,
		maxPoints: 1,
		x: 393.345,
		y: -571.263
	},
	"Cold Imbuement": {
		connections: [ "Enhanced Cold Imbuement", "Imbuements" ],
		description: `Cooldown: 13 seconds
Imbue your weapons with frigid energies. Your next 2 Imbueable Skills deal Cold damage and Chill enemies for {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% per hit.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Kälteinfusion",
			"esES": "Imbuición de frío",
			"esMX": "Imbuición Gélida",
			"frFR": "Imprégnation de givre",
			"itIT": "Infusione del Freddo",
			"jaJP": "冷気注入",
			"koKR": "냉기 주입",
			"plPL": "Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo",
			"ruRU": "Насыщение холодом",
			"zhCN": "冰霜灌注",
			"zhTW": "冰寒灌注"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 13 Sek.\nErfüllt Eure Waffen mit frostiger Energie. Eure nächsten 2 infusionsfähigen Fertigkeiten verursachen Kälteschaden und unterkühlen Gegner um {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pro Treffer.\n\nTags: Infusion, Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Infusionsfähig.",
			"esES": "Tiempo de reutilización: 13 s\nImbuye tus armas de energías gélidas. Tus 2 siguientes habilidades imbuibles infligen daño de frío y aplican un {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de helada por golpe a los enemigos.\n\nTags: Imbuición, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Imbuible.",
			"esMX": "Recuperación: 13 segundos\nImbuyes tus armas de energías frígidas. Tus próximas 2 habilidades imbuibles infligen daño de frío y hielan a los enemigos un {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% por golpe.\n\nTags: Imbuición, Helar, Daño, Frío, Recuperación, Control de multitudes, Imbuible.",
			"frFR": "Temps de recharge: 13 s\nVous imprégnez vos armes d'énergie glaciale. Vos 2 prochaines compétences imprégnables infligent des dégâts de froid et glacent les adversaires à hauteur de {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% par coup.\n\nTags: Imprégnation, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Imprégnable.",
			"itIT": "Tempo di recupero: 13 s\nInfondi le tue armi con energie gelide. Le prossime 2 volte che utilizzerai delle abilità infondibili infliggerai danni da freddo e raggelerai i nemici del {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% per colpo.\n\nTags: Infusione, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Infondibile.",
			"jaJP": "クールダウン: 13秒\n武器に極低温のエネルギーを注入する。次の2回の注入対応スキルは敵に冷気ダメージを与え、さらに命中するたびに{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%の冷気効果を付与する。\n\nTags: 注入, 冷気, ダメージ, クールダウン, 操作障害効果, 注入可能.",
			"koKR": "재사용 대기시간: 13초\n무기에 혹한의 에너지를 주입합니다. 다음 2번의 주입 가능 기술이 냉기 피해를 주고 적들에게 적중당 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 오한을 느끼게 합니다.\n\nTags: 주입, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 주입 가능.",
			"plPL": "Czas odnowienia: 13 sek.\nNasycasz swoją broń mroźnymi energiami. Twoje następne umiejętności Nasycalne (2) zadają obrażenia od Zimna oraz przy każdym trafieniu wyziębiają wrogów o {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%.\n\nTags: Nasycenie, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Nasycalne.",
			"ptBR": "Recarga: 13 segundos\nImbui suas armas com energias gélidas. Suas próximas 2 habilidades Imbuíveis causam dano gélido e gelam inimigos, causando {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano por acerto.\n\nTags: Imbuição, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Imbuível.",
			"ruRU": "Время восстановления: 13 сек.\nВы наделяете свое оружие силой мороза. Атаки 2 следующих насыщаемых умений наносят урон от холода и заставляют противников коченеть, уменьшая их подвижность на {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% за попадание.\n\nTags: Насыщение, Окоченение, Урон, Холод, Время восстановления, Контроль.",
			"zhCN": "冷却时间: 13 秒\n为你的武器灌注冰冷的能量。你的下 2 个可灌注技能造成冰霜伤害, 每一击冻伤敌人 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%。\n\nTags: 灌注, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 可灌注.",
			"zhTW": "冷卻時間:13 秒\n以冰寒能量灌注你的武器。你的下 2 個可灌注技能會造成冰寒傷害,且每次擊中會使敵人冰冷 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%。\n\nTags: 灌注, 冰冷, 傷害, 冰寒, 冷卻時間, 控場, 可灌注."
},
		id: 136,
		maxPoints: 5,
		x: 280.1,
		y: 265.1
	},
	"Enhanced Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Cold Imbuement", "Mixed Cold Imbuement", "Blended Cold Imbuement" ],
		description: `Lucky Hit: Cold Imbued Skills have up to a 30% chance to make enemies Vulnerable for 3 seconds.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Verbesserte Kälteinfusion",
			"esES": "Imbuición de frío mejorada",
			"esMX": "Imbuición Gélida Potenciada",
			"frFR": "Imprégnation de givre renforcée",
			"itIT": "Infusione del Freddo Rinforzata",
			"jaJP": "冷気注入(強化版)",
			"koKR": "강화된 냉기 주입",
			"plPL": "Wzmocnione Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo Aperfeiçoada",
			"ruRU": "Усиленное насыщение холодом",
			"zhCN": "强化冰霜灌注",
			"zhTW": "強化冰寒灌注"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Fertigkeiten mit Kälteinfusion verfügen über eine Chance von 30%, Gegner 3 Sek. lang verwundbar zu machen.\n\nTags: Infusion, Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Infusionsfähig.",
			"esES": "Golpe de suerte: Las habilidades imbuidas de frío tienen hasta un 30% de probabilidad de volver vulnerables a los enemigos durante 3 s.\n\nTags: Imbuición, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Imbuible.",
			"esMX": "Golpe afortunado: Las habilidades de Imbuición Gélida tienen hasta un 30% de probabilidad de volver a los enemigos vulnerables durante 3 segundos.\n\nTags: Imbuición, Helar, Daño, Frío, Recuperación, Control de multitudes, Imbuible.",
			"frFR": "Coup de chance: les compétences imprégnées de givre ont jusqu'à 30% de chances de rendre les adversaires vulnérables pendant 3 s.\n\nTags: Imprégnation, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Imprégnable.",
			"itIT": "Colpo fortunato: le abilità infuse di freddo hanno fino al 30% di probabilità di rendere i nemici vulnerabili per 3 s.\n\nTags: Infusione, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Infondibile.",
			"jaJP": "幸運の一撃: 冷気注入状態のスキルが最大30%の確率で、敵を3秒間にわたり脆弱状態にする。\n\nTags: 注入, 冷気, ダメージ, クールダウン, 操作障害効果, 注入可能.",
			"koKR": "행운의 적중: 냉기 주입된 기술이 최대 30% 확률로 적을 3초 동안 취약하게 합니다.\n\nTags: 주입, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 주입 가능.",
			"plPL": "Szczęśliwy traf: Umiejętności nasycone Zimnem mają 30% szans na odsłonięcie wrogów na 3 sek.\n\nTags: Nasycenie, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Nasycalne.",
			"ptBR": "Golpe de Sorte: Habilidades de Imbuição de Gelo têm até 30% de chance de tornar os inimigos vulneráveis por 3 segundos.\n\nTags: Imbuição, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Imbuível.",
			"ruRU": "Удачный удар: умения, насыщенные силой холода, с вероятностью до 30% делают противников уязвимыми на 3 сек.\n\nTags: Насыщение, Окоченение, Урон, Холод, Время восстановления, Контроль.",
			"zhCN": "幸运一击: 冰霜灌注技能最多有 30% 几率使敌人陷入易伤状态, 持续 3 秒。\n\nTags: 灌注, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 可灌注.",
			"zhTW": "幸運觸發:冰寒灌注強化的技能最高有 30% 機率對敵人造成易傷,持續 3 秒。\n\nTags: 灌注, 冰冷, 傷害, 冰寒, 冷卻時間, 控場, 可灌注."
},
		id: 137,
		maxPoints: 1,
		x: 489.875,
		y: 445.235
	},
	"Mixed Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Cold Imbued Skills deal x20% damage to Crowd Controlled enemies. Double this bonus against Frozen enemies.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Gemischte Kälteinfusion",
			"esES": "Imbuición de frío combinada",
			"esMX": "Imbuición Gélida Mezclada",
			"frFR": "Imprégnation de givre mixte",
			"itIT": "Infusione del Freddo Mista",
			"jaJP": "冷気注入(混合)",
			"koKR": "뒤섞은 냉기 주입",
			"plPL": "Spojone Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo Misturada",
			"ruRU": "Смешанное насыщение холодом",
			"zhCN": "混合冰霜灌注",
			"zhTW": "混合冰寒灌注"
},
		descriptionLocalized: {
			"deDE": "Fertigkeiten mit Kälteinfusion fügen Gegnern, die unter Kontrollverlusteffekten leiden, x20% Schaden zu. Dieser Bonus verdoppelt sich gegen eingefrorene Gegner.\n\nTags: Infusion, Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Infusionsfähig.",
			"esES": "Las habilidades imbuidas de frío infligen un x20% de daño a enemigos afectados por control de masas. Este bonus se duplica contra enemigos congelados.\n\nTags: Imbuición, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Imbuible.",
			"esMX": "Las habilidades de Imbuición Gélida infligen un x20% más de daño a los enemigos bajo los efectos de control de multitudes. La bonificación se duplica contra enemigos congelados.\n\nTags: Imbuición, Helar, Daño, Frío, Recuperación, Control de multitudes, Imbuible.",
			"frFR": "Les compétences imprégnées de givre infligent x20% de dégâts aux cibles subissant un effet de perte de contrôle. Ce bonus est doublé contre les cibles gelées.\n\nTags: Imprégnation, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Imprégnable.",
			"itIT": "Le abilità infuse di freddo infliggono il x20% di danni aggiuntivi ai nemici sotto effetti debilitanti. Il bonus raddoppia contro i nemici congelati.\n\nTags: Infusione, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Infondibile.",
			"jaJP": "操作障害効果を受けた敵に冷気注入状態のスキルで与えるダメージがx20%増加する。凍結状態の敵に対しては増加量が2倍になる。\n\nTags: 注入, 冷気, ダメージ, クールダウン, 操作障害効果, 注入可能.",
			"koKR": "냉기 주입된 기술이 군중 제어 상태의 적에게 주는 피해가 x20% 증가합니다. 빙결 상태의 적을 상대할 때는 이 효과가 2배로 증가합니다.\n\nTags: 주입, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 주입 가능.",
			"plPL": "Umiejętności nasycone Zimnem zadają x20% obrażeń wrogom o ograniczonej kontroli. Wartość ta jest podwojona w przypadku zamrożonych wrogów.\n\nTags: Nasycenie, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Nasycalne.",
			"ptBR": "Habilidades de Imbuição de Gelo causam 20% de dano a inimigos sob controle de grupo. O bônus é dobrado contra inimigos congelados.\n\nTags: Imbuição, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Imbuível.",
			"ruRU": "Умения, насыщенные силой холода, наносят на x20% больше урона противникам, на которых действуют эффекты контроля. Бонус удваивается, если цель заморожена.\n\nTags: Насыщение, Окоченение, Урон, Холод, Время восстановления, Контроль.",
			"zhCN": "冰霜灌注技能对被群控敌人造成的伤害提高 x20%。该加成对被冻结的敌人翻倍。\n\nTags: 灌注, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 可灌注.",
			"zhTW": "冰寒灌注強化的技能對受到控場的敵人造成的傷害提高 x20%,對凍結的敵人則此效果加倍。\n\nTags: 灌注, 冰冷, 傷害, 冰寒, 冷卻時間, 控場, 可灌注."
},
		id: 138,
		maxPoints: 1,
		x: 480.65,
		y: 583.225
	},
	"Blended Cold Imbuement": {
		baseSkill: "Cold Imbuement",
		connections: [ "Enhanced Cold Imbuement" ],
		description: `Lucky Hit: Critical Strikes with Cold Imbued Skills have up to a 20% chance to instantly Freeze enemies for 3 seconds.

Tags: Imbuement, Chill, Damage, Cold, Cooldown, Crowd Control, Imbueable.`,
		nameLocalized: {
			"deDE": "Vermengte Kälteinfusion",
			"esES": "Imbuición de frío mezclada",
			"esMX": "Imbuición Gélida Combinada",
			"frFR": "Imprégnation de givre composite",
			"itIT": "Infusione del Freddo Miscelata",
			"jaJP": "冷気注入(融合)",
			"koKR": "혼합 냉기 주입",
			"plPL": "Stopione Nasycenie Zimnem",
			"ptBR": "Imbuição de Gelo Mesclada",
			"ruRU": "Сопряженное насыщение холодом",
			"zhCN": "交融冰霜灌注",
			"zhTW": "調和冰寒灌注"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Kritische Treffer mit Fertigkeiten mit Kälteinfusion verfügen über eine Chance von bis zu 20%, Gegner sofort 3 Sek. lang einzufrieren.\n\nTags: Infusion, Unterkühlen, Schaden, Kälte, Abklingzeit, Kontrollverlust, Infusionsfähig.",
			"esES": "Golpe de suerte: Los golpes críticos con habilidades imbuidas de frío tienen hasta un 20% de probabilidad de congelar al instante a los enemigos durante 3 s.\n\nTags: Imbuición, Helada, Daño, Frío, Tiempo de reutilización, Control de masas, Imbuible.",
			"esMX": "Golpe afortunado: Los golpes críticos con habilidades de Imbuición Gélida tienen hasta un 20% de probabilidad de congelar a los enemigos instantáneamente durante 3 segundos.\n\nTags: Imbuición, Helar, Daño, Frío, Recuperación, Control de multitudes, Imbuible.",
			"frFR": "Coup de chance: les coups critiques infligés avec des compétences imprégnées de givre ont jusqu'à 20% de chances de geler instantanément les cibles pendant 3 s.\n\nTags: Imprégnation, Glace, Dégâts, Froid, Temps de recharge, Perte de contrôle, Imprégnable.",
			"itIT": "Colpo fortunato: i colpi critici delle abilità infuse di freddo hanno fino al 20% di probabilità di congelare istantaneamente i nemici per 3 s.\n\nTags: Infusione, Raggelamento, Danni, Freddo, Tempo di recupero, Effetti debilitanti, Infondibile.",
			"jaJP": "幸運の一撃: 冷気注入状態のスキルでクリティカルヒットが発生すると、最大20%の確率で敵を瞬時に3秒間にわたって凍結させる。\n\nTags: 注入, 冷気, ダメージ, クールダウン, 操作障害効果, 注入可能.",
			"koKR": "행운의 적중: 냉기 주입된 기술이 극대화로 적중하면 최대 20% 확률로 대상을 즉시 3초 동안 빙결시킵니다.\n\nTags: 주입, 오한, 피해, 냉기, 재사용 대기시간, 군중 제어, 주입 가능.",
			"plPL": "Szczęśliwy traf: Trafienia krytyczne zadane umiejętnościami nasyconymi Zimnem mają do 20% szans na natychmiastowe zamrożenie wrogów na 3 sek.\n\nTags: Nasycenie, Wyziębienie, Obrażenia, Zimno, Odnowienie, Ograniczanie Kontroli, Nasycalne.",
			"ptBR": "Golpe de Sorte: Acertos críticos com habilidades de Imbuição de Gelo têm até 20% de chance de congelar inimigos instantaneamente por 3 segundos.\n\nTags: Imbuição, Gelidez, Dano, Gelo, Recarga, Controle de Grupo, Imbuível.",
			"ruRU": "Удачный удар: атаки, насыщенные силой холода, с вероятностью до 20% мгновенно замораживают цель на 3 сек.\n\nTags: Насыщение, Окоченение, Урон, Холод, Время восстановления, Контроль.",
			"zhCN": "幸运一击: 使用冰霜灌注技能造成暴击最多有 20% 几率立即冻结敌人, 持续 3 秒。\n\nTags: 灌注, 冻伤, 伤害, 冰霜, 冷却时间, 群控, 可灌注.",
			"zhTW": "幸運觸發:冰寒灌注強化的技能爆擊時最多有 20% 機率立即凍結敵人,持續 3 秒。\n\nTags: 灌注, 冰冷, 傷害, 冰寒, 冷卻時間, 控場, 可灌注."
},
		id: 139,
		maxPoints: 1,
		x: 739.755,
		y: 471.33
	},
	"Frigid Finesse": {
		connections: [ "Chilling Weight", "Imbuements" ],
		description: `You deal x{5/10/15/20/25/30/35/40/45/50}% increased damage to Chilled enemies. This bonus increases to x{10/20/30/40/50/60/70/80/90/100}% against Frozen enemies.

Tags: Chill, Frozen, Crowd Control, Damage.`,
		nameLocalized: {
			"deDE": "Frostige Finesse",
			"esES": "Finura gélida",
			"esMX": "Fineza Frígida",
			"frFR": "Finesse glaciale",
			"itIT": "Raffinatezza Gelida",
			"jaJP": "氷結の手腕",
			"koKR": "혹한의 기교",
			"plPL": "Chłodna Finezja",
			"ptBR": "Elegância Frígida",
			"ruRU": "Ледяная точность",
			"zhCN": "冰冷巧劲",
			"zhTW": "凜寒技藝"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt unterkühlten Gegnern x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden zu. Dieser Bonus erhöht sich bei eingefrorenen Gegnern auf x{10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Unterkühlen, Eingefroren, Kontrollverlust, Schaden.",
			"esES": "Infliges un x{5/10/15/20/25/30/35/40/45/50}% más de daño a enemigos helados. Este bonus aumenta a un x{10/20/30/40/50/60/70/80/90/100}% contra enemigos congelados.\n\nTags: Helada, Congelación, Control de masas, Daño.",
			"esMX": "Infliges un x{5/10/15/20/25/30/35/40/45/50}% más de daño a los enemigos helados. La bonificación aumenta al x{10/20/30/40/50/60/70/80/90/100}% contra enemigos congelados.\n\nTags: Helar, Congelado, Control de multitudes, Daño.",
			"frFR": "Vous infligez x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires aux cibles glacées. Ce bonus est porté à x{10/20/30/40/50/60/70/80/90/100}% contre les cibles gelées.\n\nTags: Glace, Gel, Perte de contrôle, Dégâts.",
			"itIT": "Infliggi il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi ai nemici raggelati. Questo bonus aumenta al x{10/20/30/40/50/60/70/80/90/100}% contro i nemici congelati.\n\nTags: Raggelamento, Congelamento, Effetti debilitanti, Danni.",
			"jaJP": "冷気状態の敵に与えるダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。凍結状態の敵に対してはx{10/20/30/40/50/60/70/80/90/100}%増加する。\n\nTags: 冷気, 凍結, 操作障害効果, ダメージ.",
			"koKR": "오한을 느끼는 적에게 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가하고, 빙결된 적에게 주는 피해는 x{10/20/30/40/50/60/70/80/90/100}% 증가합니다.\n\nTags: 오한, 빙결, 군중 제어, 피해.",
			"plPL": "Zadajesz obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}% wyziębionym wrogom. Premia ta wzrasta do x{10/20/30/40/50/60/70/80/90/100}% w przypadku zamrożonych wrogów.\n\nTags: Wyziębienie, Zamrożenie, Ograniczanie Kontroli, Obrażenia.",
			"ptBR": "Você causa {5/10/15/20/25/30/35/40/45/50}% de dano aumentado a inimigos com gelidez. Esse bônus aumenta para {10/20/30/40/50/60/70/80/90/100}% contra inimigos congelados.\n\nTags: Gelidez, Congelado, Controle de Grupo, Dano.",
			"ruRU": "Вы наносите на x{5/10/15/20/25/30/35/40/45/50}% больше урона окоченевшим противникам. Бонус усиливается до x{10/20/30/40/50/60/70/80/90/100}%, если ваша цель заморожена.\n\nTags: Окоченение, Заморозка, Контроль, Урон.",
			"zhCN": "你对被冻伤的敌人造成的伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。该加成对被冻结的敌人提高至 x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 冻伤, 冻结, 群控, 伤害.",
			"zhTW": "你對冰冷敵人造成的傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。對凍結的敵人此效果提高至 x{10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 冰冷, 凍結, 控場, 傷害."
},
		id: 99,
		maxPoints: 3,
		x: -160.371,
		y: 330.145
	},
	"Chilling Weight": {
		connections: [ "Frigid Finesse" ],
		description: `Chilled enemies have their Movement Speed further reduced by up to {10/20/30/40/50/60/70/80/90/100}%.

Tags: Chill, Crowd Control, Movement.`,
		nameLocalized: {
			"deDE": "Unterkühlendes Gewicht",
			"esES": "Peso helado",
			"esMX": "Peso Gélido",
			"frFR": "Chape de glace",
			"itIT": "Peso Raggelante",
			"jaJP": "冷たき重さ",
			"koKR": "싸늘한 무게",
			"plPL": "Chłodny Ciężar",
			"ptBR": "Peso Gélido",
			"ruRU": "Обременяющий холод",
			"zhCN": "寒冷之重",
			"zhTW": "冰冷重荷"
},
		descriptionLocalized: {
			"deDE": "Die Bewegungsgeschwindigkeit von unterkühlten Gegnern verringert sich zusätzlich um {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Unterkühlen, Kontrollverlust, Bewegung.",
			"esES": "La velocidad de movimiento de los enemigos helados se reduce hasta un {10/20/30/40/50/60/70/80/90/100}% más.\n\nTags: Helada, Control de masas, Movimiento.",
			"esMX": "Los enemigos helados tienen hasta un {10/20/30/40/50/60/70/80/90/100}% de reducción de velocidad de movimiento adicional.\n\nTags: Helar, Control de multitudes, Movimiento.",
			"frFR": "La vitesse de déplacement des cibles glacées est davantage réduite, jusqu'à un maximum de {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Glace, Perte de contrôle, Déplacement.",
			"itIT": "La velocità di movimento dei nemici raggelati si riduce fino a un massimo del {10/20/30/40/50/60/70/80/90/100}% aggiuntivo.\n\nTags: Raggelamento, Effetti debilitanti, Movimento.",
			"jaJP": "冷気効果を受けた敵は、移動速度が更に最大{10/20/30/40/50/60/70/80/90/100}%低下する。\n\nTags: 冷気, 操作障害効果, 移動.",
			"koKR": "오한을 느끼는 적의 이동 속도가 최대 {10/20/30/40/50/60/70/80/90/100}%까지 추가로 감소합니다.\n\nTags: 오한, 군중 제어, 이동.",
			"plPL": "Szybkość ruchu wyziębionych wrogów jest dodatkowo zmniejszona o maksymalnie {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Wyziębienie, Ograniczanie Kontroli, Ruch.",
			"ptBR": "Inimigos com gelidez têm a velocidade de movimento reduzida ainda mais em até {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Gelidez, Controle de Grupo, Movimento.",
			"ruRU": "Скорость передвижения окоченевших противников дополнительно снижается на {10/20/30/40/50/60/70/80/90/100}% или менее.\n\nTags: Окоченение, Контроль, Движение.",
			"zhCN": "被冻伤敌人的移动速度最多额外降低 {10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 冻伤, 群控, 移动.",
			"zhTW": "受冰冷效果影響的敵人,其移動速度進一步降低,上限為 {10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 冰冷, 控場, 移動."
},
		id: 100,
		maxPoints: 3,
		x: -164.62,
		y: 503.995
	},
	"Precision Imbuement": {
		connections: [ "Imbuements" ],
		description: `Imbued Skills gain +{3/6/9/12/15/18/21/24/27/30}% increased Critical Strike Chance.

Tags: Critical Strikes, Imbuement.`,
		nameLocalized: {
			"deDE": "Präzisionsinfusion",
			"esES": "Imbuición precisa",
			"esMX": "Imbuición Precisa",
			"frFR": "Enduisage précis",
			"itIT": "Infusione Precisa",
			"jaJP": "高精度注入",
			"koKR": "정밀 주입",
			"plPL": "Precyzyjne Nasycenie",
			"ptBR": "Imbuição de Precisão",
			"ruRU": "Прицельное насыщение",
			"zhCN": "精准灌注",
			"zhTW": "精準灌注"
},
		descriptionLocalized: {
			"deDE": "Fertigkeiten mit Infusionen erhalten eine um +{3/6/9/12/15/18/21/24/27/30}% erhöhte kritische Trefferchance.\n\nTags: Kritische Treffer, Infusion.",
			"esES": "Las habilidades imbuidas obtienen un +{3/6/9/12/15/18/21/24/27/30}% más de probabilidad de golpe crítico.\n\nTags: Golpes críticos, Imbuición.",
			"esMX": "Las habilidades de Imbuición obtienen un +{3/6/9/12/15/18/21/24/27/30}% más de probabilidad de golpe crítico.\n\nTags: Golpes críticos, Imbuición.",
			"frFR": "Les compétences imprégnées ont +{3/6/9/12/15/18/21/24/27/30}% de chances supplémentaires d'infliger un coup critique.\n\nTags: Coups critiques, Imprégnation.",
			"itIT": "La probabilità di critico delle abilità infuse aumentano del +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Colpi critici, Infusione.",
			"jaJP": "注入状態のスキルのクリティカルヒット率が+{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: クリティカルヒット, 注入.",
			"koKR": "주입된 기술의 극대화 확률이 +{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 극대화, 주입.",
			"plPL": "Umiejętności Nasycenia zyskują szansę na trafienie krytyczne zwiększoną o +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Trafienia Krytyczne, Nasycenie.",
			"ptBR": "Habilidades de Imbuição recebem +{3/6/9/12/15/18/21/24/27/30}% de chance de acerto crítico aumentada.\n\nTags: Acertos Críticos, Imbuição.",
			"ruRU": "Вероятность критического удара умения с эффектом насыщения повышается на +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Критические удары, Насыщение.",
			"zhCN": "灌注技能的暴击几率提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 暴击, 灌注.",
			"zhTW": "灌注強化的技能爆擊機率額外提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 爆擊, 灌注."
},
		id: 94,
		maxPoints: 3,
		x: -614.69,
		y: 3.325
	},
};

rogueData["Ultimate"] = {
	"Innervation": {
		connections: [ "Ultimate", "Alchemist's Fortune", "Second Wind" ],
		description: `Lucky Hit: Up to a {10/20/30/40/50/60/70/80/90/100}% chance to gain 8 Energy.

Tags: Energy, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Anregung",
			"esES": "Inervación",
			"esMX": "Enervación",
			"frFR": "Innervation",
			"itIT": "Innervazione",
			"jaJP": "神経支配",
			"koKR": "신경자극",
			"plPL": "Orzeźwienie",
			"ptBR": "Inervação",
			"ruRU": "Прилив энергии",
			"zhCN": "神经兴奋",
			"zhTW": "心神開展"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer:Es besteht eine Chance von bis zu {10/20/30/40/50/60/70/80/90/100}%, 8 Energie zu erhalten.\n\nTags: Energie, Glückstreffer.",
			"esES": "Golpe de suerte: Hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de obtener 8 de energía.\n\nTags: Energía, Golpe de suerte.",
			"esMX": "Golpe afortunado: Tienes hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de obtener 8 de Energía.\n\nTags: Energía, Golpe afortunado.",
			"frFR": "Coup de chance: vous avez jusqu'à {10/20/30/40/50/60/70/80/90/100}% de chances de gagner 8 points d'énergie.\n\nTags: Énergie, Coup de chance.",
			"itIT": "Colpo fortunato: fino al {10/20/30/40/50/60/70/80/90/100}% di probabilità di ottenere 8 energia.\n\nTags: Energia, Colpo fortunato.",
			"jaJP": "幸運の一撃: 最大{10/20/30/40/50/60/70/80/90/100}%の確率で8のエネルギーを獲得する。\n\nTags: エネルギー, 幸運の一撃.",
			"koKR": "행운의 적중: 최대 {10/20/30/40/50/60/70/80/90/100}% 확률로 기력을 8 얻습니다.\n\nTags: 기력, 행운의 적중.",
			"plPL": "Szczęśliwy traf: Do {10/20/30/40/50/60/70/80/90/100}% szans na zyskanie 8 pkt. energii.\n\nTags: Energia, Szczęśliwy Traf.",
			"ptBR": "Golpe de Sorte: Até {10/20/30/40/50/60/70/80/90/100}% de chance de receber 8 de energia.\n\nTags: Energia, Golpe de Sorte.",
			"ruRU": "Удачный удар: вы с вероятностью до {10/20/30/40/50/60/70/80/90/100}% накапливаете 8 ед. энергии.\n\nTags: Энергия, Удачный удар.",
			"zhCN": "幸运一击: 最多有 {10/20/30/40/50/60/70/80/90/100}% 几率获得 8 点能量。\n\nTags: 能量, 幸运一击.",
			"zhTW": "幸運觸發:最高有 {10/20/30/40/50/60/70/80/90/100}% 機率獲得 8 點能量。\n\nTags: 能量, 幸運觸發."
},
		id: 101,
		maxPoints: 3,
		x: -337.03,
		y: -332.265
	},
	"Alchemist's Fortune": {
		connections: [ "Innervation" ],
		description: `Non-Physical damage you deal has a +{5/10/15/20/25/30/35/40/45/50}% increased Lucky Hit Chance.

Tags: Non-Physical, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Alchemistenglück",
			"esES": "Fortuna de alquimista",
			"esMX": "Fortuna del Alquimista",
			"frFR": "Fortune d'alchimiste",
			"itIT": "Fortuna dell'Alchimista",
			"jaJP": "錬金術師の幸運",
			"koKR": "연금술사의 행운",
			"plPL": "Szczęście Alchemika",
			"ptBR": "Fortuna do Alquimista",
			"ruRU": "Удача алхимика",
			"zhCN": "炼金师的幸运",
			"zhTW": "鍊金師的機運"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr nichtphysischen Schaden verursacht, besteht eine um +{5/10/15/20/25/30/35/40/45/50}% erhöhte Glückstrefferchance.\n\nTags: Nichtphysisch, Glückstreffer.",
			"esES": "El daño no físico que infliges tiene un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe de suerte.\n\nTags: No física, Golpe de suerte.",
			"esMX": "El daño no físico que infliges tiene un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe afortunado.\n\nTags: No física, Golpe afortunado.",
			"frFR": "Les chances d'obtenir un coup de chance avec vos dégâts non physiques sont augmentées de +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non physique, Coup de chance.",
			"itIT": "I danni non fisici da te inflitti hanno una probabilità di colpo fortunato aggiuntiva del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Non fisico, Colpo fortunato.",
			"jaJP": "非物理ダメージが〈幸運の一撃〉になる確率が+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: 非物理, 幸運の一撃.",
			"koKR": "비물리 피해를 주면 행운의 적중 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 비물리, 행운의 적중.",
			"plPL": "Zadawane przez ciebie obrażenia niefizyczne zwiększają o +{5/10/15/20/25/30/35/40/45/50}% szansę na szczęśliwy traf.\n\nTags: Niefizyczne, Szczęśliwy Traf.",
			"ptBR": "O dano não físico causado por você tem +{5/10/15/20/25/30/35/40/45/50}% de chance de Golpe de Sorte aumentada.\n\nTags: Não física, Golpe de Sorte.",
			"ruRU": "Вероятность активировать удачный удар нефизической атакой повышается на +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Нефизический урон, Удачный удар.",
			"zhCN": "你造成的非物理伤害出现幸运一击的几率提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 非物理, 幸运一击.",
			"zhTW": "你造成的非物理傷害有 +{5/10/15/20/25/30/35/40/45/50}% 機率使幸運觸發機率提高。\n\nTags: 非物理, 幸運觸發."
},
		id: 103,
		maxPoints: 3,
		x: -329.83,
		y: -519.715
	},
	"Second Wind": {
		connections: [ "Innervation" ],
		description: `Every 100 Energy you spend grants you +{5/10/15/20/25/30/35/40/45/50}% increased Lucky Hit Chance for 5 seconds.

Tags: Energy, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Kräfte sammeln",
			"esES": "Impulso renovado",
			"esMX": "Segundo Aliento",
			"frFR": "Second souffle",
			"itIT": "Aria di Sfida",
			"jaJP": "セカンド・ウィンド",
			"koKR": "재기의 바람",
			"plPL": "Drugi Oddech",
			"ptBR": "Fôlego Extra",
			"ruRU": "Второе дыхание",
			"zhCN": "复苏之风",
			"zhTW": "重新振作"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr 100 Energie verbraucht, erhaltet Ihr 5 Sek. lang eine +{5/10/15/20/25/30/35/40/45/50}% höhere Glückstrefferchance.\n\nTags: Energie, Glückstreffer.",
			"esES": "Por cada 100 de energía que gastas, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe de suerte durante 5 s.\n\nTags: Energía, Golpe de suerte.",
			"esMX": "Cada 100 de Energía que usas, te otorga un +{5/10/15/20/25/30/35/40/45/50}% más de probabilidad de golpe afortunado durante 5 segundos.\n\nTags: Energía, Golpe afortunado.",
			"frFR": "Tous les 100 points d'énergie que vous dépensez, vos chances d'obtenir un coup de chance sont augmentées de +{5/10/15/20/25/30/35/40/45/50}% pendant 5 s.\n\nTags: Énergie, Coup de chance.",
			"itIT": "Ogni 100 energia consumata, la tua probabilità di colpo fortunato aumenta del +{5/10/15/20/25/30/35/40/45/50}% per 5 s.\n\nTags: Energia, Colpo fortunato.",
			"jaJP": "エネルギーを100消費するたびに、幸運の一撃の発生率が5秒間にわたり+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: エネルギー, 幸運の一撃.",
			"koKR": "기력을 100 소모할 때마다 5초 동안 행운의 적중 확률이 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 기력, 행운의 적중.",
			"plPL": "Za każde wykorzystane 100 pkt. energii zyskujesz premię +{5/10/15/20/25/30/35/40/45/50}% do szansy na szczęśliwy traf przez 5 sek.\n\nTags: Energia, Szczęśliwy Traf.",
			"ptBR": "Cada 100 de energia que você gasta concede +{5/10/15/20/25/30/35/40/45/50}% de chance de Golpe de Sorte aumentada por 5 segundos.\n\nTags: Energia, Golpe de Sorte.",
			"ruRU": "За каждые потраченные 100 ед. энергии вероятность срабатывания удачного удара повышается на +{5/10/15/20/25/30/35/40/45/50}% на 5 сек.\n\nTags: Энергия, Удачный удар.",
			"zhCN": "每花费 100 点能量都会使你的幸运一击几率提高 +{5/10/15/20/25/30/35/40/45/50}%, 持续 5 秒。\n\nTags: 能量, 幸运一击.",
			"zhTW": "你每花費 100 點能量,就使你的幸運觸發機率提高 +{5/10/15/20/25/30/35/40/45/50}%,持續 5 秒。\n\nTags: 能量, 幸運觸發."
},
		id: 102,
		maxPoints: 3,
		x: -565.345,
		y: -521.42
	},
	"Shadow Clone": {
		connections: [ "Prime Shadow Clone", "Ultimate" ],
		description: `Cooldown: 60 seconds
Your shadow mimicks your actions for 15 seconds. This Shadow Clone deals 60% of your damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Schattenklon",
			"esES": "Clon tenebroso",
			"esMX": "Clon Umbrío",
			"frFR": "Clone d'ombre",
			"itIT": "Clone d'Ombra",
			"jaJP": "シャドウ・クローン",
			"koKR": "복제된 그림자",
			"plPL": "Klon Cienia",
			"ptBR": "Clone de Sombras",
			"ruRU": "Темное отражение",
			"zhCN": "暗影分身",
			"zhTW": "暗影分身"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 60 Sek.\nEuer Schatten ahmt Euch 15 Sek. lang nach. Der Schattenklon verursacht 60% Eures Schadens.\n\nTags: Ultimativ, Schaden, Physisch, Abklingzeit.",
			"esES": "Tiempo de reutilización: 60 s\nTu clon imita tus acciones durante 15 s. Este Clon tenebroso inflige un 60% de tu daño.\n\nTags: Definitiva, Daño, Física, Tiempo de reutilización.",
			"esMX": "Recuperación: 60 segundos\nTu sombra copia tus acciones durante 15 segundos. Este Clon Umbrío inflige un 60% de tu daño.\n\nTags: Máxima, Daño, Física, Recuperación.",
			"frFR": "Temps de recharge: 60 s\nVotre ombre imite vos faits et gestes pendant 15 s. Ce Clone d'ombre inflige 60% de vos dégâts.\n\nTags: Ultime, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Tempo di recupero: 60 s\nLa tua ombra copia le tue azioni per 15 s. Questo Clone d'Ombra infligge il 60% dei tuoi danni.\n\nTags: Ultra, Danni, Fisico, Tempo di recupero.",
			"jaJP": "クールダウン: 60秒\n15秒間、影が自分の行動を模倣する。このシャドウ・クローンは、自分の与えるダメージの60%のダメージを与える。\n\nTags: 奥義, ダメージ, 物理, クールダウン.",
			"koKR": "재사용 대기시간: 60초\n15초 동안 그림자가 도적의 행동을 흉내냅니다. 복제된 그림자는 도적이 주는 피해의 60%에 해당하는 피해를 줍니다.\n\nTags: 궁극기, 피해, 물리, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 60 sek.\nTwój Cień naśladuje twoje działania przez 15 sek.\nTen Klon Cienia zadaje równowartość 60% twoich obrażeń.\n\nTags: Specjalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Recarga: 60 segundos\nSua sombra imita suas ações por 15 segundos. Este Clone de Sombras causa 60% do seu dano.\n\nTags: Suprema, Dano, Física, Recarga.",
			"ruRU": "Время восстановления: 60 сек.\nВаша тень копирует ваши действия в течение 15 сек. Темное отражение наносит 60% вашего урона.\n\nTags: Мощное умение, Урон, Физический урон, Время восстановления.",
			"zhCN": "冷却时间: 60 秒\n你的暗影分身会模仿你的行动, 持续 15 秒。\n暗影分身造成的伤害相当于你造成伤害的 60%。\n\nTags: 终极技能, 伤害, 物理, 冷却时间.",
			"zhTW": "冷卻時間:60 秒\n你的影子會模仿你的動作,持續 15 秒。暗影分身會造成你傷害值 60% 的傷害。\n\nTags: 絕招, 傷害, 物理, 冷卻時間."
},
		id: 104,
		maxPoints: 1,
		x: 2.07,
		y: -283.5
	},
	"Prime Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Shadow Clone", "Supreme Shadow Clone" ],
		description: `You are Unstoppable for 5 seconds after casting Shadow Clone.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Primärer Schattenklon",
			"esES": "Clon tenebroso mayor",
			"esMX": "Clon Umbrío Supremo",
			"frFR": "Clone d'ombre primordial",
			"itIT": "Clone d'Ombra Pregiato",
			"jaJP": "シャドウ・クローン(上級)",
			"koKR": "극상의 복제된 그림자",
			"plPL": "Większy Klon Cienia",
			"ptBR": "Clone de Sombras Primordial",
			"ruRU": "Первородное темное отражение",
			"zhCN": "至尊暗影分身",
			"zhTW": "強烈暗影分身"
},
		descriptionLocalized: {
			"deDE": "Nach dem Wirken von Schattenklon werdet Ihr 5 Sek. lang unaufhaltsam.\n\nTags: Ultimativ, Schaden, Physisch, Abklingzeit.",
			"esES": "Eres imparable durante 5 s tras lanzar Clon tenebroso.\n\nTags: Definitiva, Daño, Física, Tiempo de reutilización.",
			"esMX": "Eres imparable durante 5 segundos luego de lanzar Clon Umbrío.\n\nTags: Máxima, Daño, Física, Recuperación.",
			"frFR": "Vous êtes inarrêtable durant les 5 s qui suivent l'utilisation de Clone d'ombre.\n\nTags: Ultime, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Sei inarrestabile per 5 s dopo aver lanciato Clone d'Ombra.\n\nTags: Ultra, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈シャドウ・クローン〉を使用した後の5秒間、抑圧不可状態になる。\n\nTags: 奥義, ダメージ, 物理, クールダウン.",
			"koKR": "복제된 그림자를 시전한 후 5초 동안 저지 불가 상태가 됩니다.\n\nTags: 궁극기, 피해, 물리, 재사용 대기시간.",
			"plPL": "Zyskujesz nieustępliwość na 5 sek. po użyciu Klona Cienia.\n\nTags: Specjalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Você fica implacável por 5 segundos depois de lançar Clone de Sombras.\n\nTags: Suprema, Dano, Física, Recarga.",
			"ruRU": "Вы получаете неудержимость на 5 сек. после призыва темного отражения.\n\nTags: Мощное умение, Урон, Физический урон, Время восстановления.",
			"zhCN": "施放暗影分身后, 你获得不可阻挡, 持续 5 秒。\n\nTags: 终极技能, 伤害, 物理, 冷却时间.",
			"zhTW": "施放暗影分身後,你進入無阻狀態 5 秒。\n\nTags: 絕招, 傷害, 物理, 冷卻時間."
},
		id: 105,
		maxPoints: 1,
		x: 6.085,
		y: -465.75
	},
	"Supreme Shadow Clone": {
		baseSkill: "Shadow Clone",
		connections: [ "Prime Shadow Clone" ],
		description: `Your Shadow Clone deals an additional 20% of your damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegener Schattenklon",
			"esES": "Clon tenebroso supremo",
			"esMX": "Clon Umbrío Superior",
			"frFR": "Clone d'ombre suprême",
			"itIT": "Clone d'Ombra Supremo",
			"jaJP": "シャドウ・クローン(高級)",
			"koKR": "최고의 복제된 그림자",
			"plPL": "Największy Klon Cienia",
			"ptBR": "Clone de Sombras Supremo",
			"ruRU": "Неотвратимое темное отражение",
			"zhCN": "至极暗影分身",
			"zhTW": "終極暗影分身"
},
		descriptionLocalized: {
			"deDE": "Euer Schattenklon verursacht zusätzlich 20% Eures Schadens.\n\nTags: Ultimativ, Schaden, Physisch, Abklingzeit.",
			"esES": "Tu clon tenebroso inflige un 20% adicional de tu daño.\n\nTags: Definitiva, Daño, Física, Tiempo de reutilización.",
			"esMX": "Tu Clon Umbrío inflige un 20% de tu daño como daño adicional.\n\nTags: Máxima, Daño, Física, Recuperación.",
			"frFR": "Votre Clone d'ombre inflige un montant de dégâts supplémentaires égal à 20% de vos dégâts.\n\nTags: Ultime, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Il tuo Clone d'Ombra infligge un ulteriore 20% dei tuoi danni.\n\nTags: Ultra, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈シャドウ・クローン〉の与えるダメージが、自分が与えるダメージに20%上乗せされたものになる。\n\nTags: 奥義, ダメージ, 物理, クールダウン.",
			"koKR": "자신의 복제된 그림자가 자신의 피해의 20%만큼 추가 피해를 줍니다.\n\nTags: 궁극기, 피해, 물리, 재사용 대기시간.",
			"plPL": "Twój Klon Cienia zadaje dodatkowo równowartość 20% twoich obrażeń.\n\nTags: Specjalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Seu Clone de Sombras causa um adicional de 20% do seu dano.\n\nTags: Suprema, Dano, Física, Recarga.",
			"ruRU": "Ваше темное отражение наносит дополнительный урон в размере 20% наносимого вами урона.\n\nTags: Мощное умение, Урон, Физический урон, Время восстановления.",
			"zhCN": "你的暗影分身额外造成你伤害的 20%。\n\nTags: 终极技能, 伤害, 物理, 冷却时间.",
			"zhTW": "你的暗影分身會額外造成你傷害值 20% 的傷害。\n\nTags: 絕招, 傷害, 物理, 冷卻時間."
},
		id: 106,
		maxPoints: 1,
		x: 9.375,
		y: -623.95
	},
	"Aftermath": {
		connections: [ "Ultimate" ],
		description: `After using an Ultimate Skill, restore {25/50/75/100/125/150/175/200/225/250} Energy.

Tags: Energy, Ultimate.`,
		nameLocalized: {
			"deDE": "Nachwirkung",
			"esES": "Repercusión",
			"esMX": "Secuela",
			"frFR": "Après-coup",
			"itIT": "Conseguenze",
			"jaJP": "余波",
			"koKR": "여파",
			"plPL": "Pokłosie",
			"ptBR": "Epílogo",
			"ruRU": "Итог",
			"zhCN": "余劲尚存",
			"zhTW": "劫難後續"
},
		descriptionLocalized: {
			"deDE": "Das Verwenden einer ultimativen Fertigkeit stellt {25/50/75/100/125/150/175/200/225/250} Energie wieder her.\n\nTags: Energie, Ultimativ.",
			"esES": "Tras usar una habilidad definitiva, recuperas {25/50/75/100/125/150/175/200/225/250} de energía.\n\nTags: Energía, Definitiva.",
			"esMX": "Después de usar una habilidad máxima, restauras {25/50/75/100/125/150/175/200/225/250} de Energía.\n\nTags: Energía, Máxima.",
			"frFR": "Après avoir utilisé une compétence ultime, vous récupérez {25/50/75/100/125/150/175/200/225/250} points d'énergie.\n\nTags: Énergie, Ultime.",
			"itIT": "Dopo aver usato un'abilità Ultra, rigeneri {25/50/75/100/125/150/175/200/225/250} energia.\n\nTags: Energia, Ultra.",
			"jaJP": "奥義スキルを使用した後、エネルギーが{25/50/75/100/125/150/175/200/225/250}回復する。\n\nTags: エネルギー, 奥義.",
			"koKR": "궁극기 사용 후 기력을 {25/50/75/100/125/150/175/200/225/250} 회복합니다.\n\nTags: 기력, 궁극기.",
			"plPL": "Po użyciu Mocy Specjalnej odzyskujesz {25/50/75/100/125/150/175/200/225/250} pkt. energii.\n\nTags: Energia, Specjalne.",
			"ptBR": "Depois de usar uma habilidade suprema, restaura {25/50/75/100/125/150/175/200/225/250} de energia.\n\nTags: Energia, Suprema.",
			"ruRU": "После применения мощного умения вы восстанавливаете {25/50/75/100/125/150/175/200/225/250} ед. энергии.\n\nTags: Энергия, Мощное умение.",
			"zhCN": "使用终极技能后, 恢复 {25/50/75/100/125/150/175/200/225/250} 点能量。\n\nTags: 能量, 终极技能.",
			"zhTW": "使用絕招後,恢復 {25/50/75/100/125/150/175/200/225/250} 點能量。\n\nTags: 能量, 絕招."
},
		id: 107,
		maxPoints: 3,
		x: -537.565,
		y: 187.49
	},
	"Death Trap": {
		connections: [ "Prime Death Trap", "Ultimate" ],
		description: `Cooldown: 50 seconds
Lucky Hit Chance: 4% (per hit)
Place a trap that arms after {#} seconds. It activates when an enemy moves within range, dealing a total of 250% damage to each enemy in the area.

Tags: Ultimate, Trap, Damage, Shadow, Cooldown.`,
		nameLocalized: {
			"deDE": "Todesfalle",
			"esES": "Trampa mortal",
			"esMX": "Trampa Mortal",
			"frFR": "Piège mortel",
			"itIT": "Trappola Mortale",
			"jaJP": "デス・トラップ",
			"koKR": "죽음의 덫",
			"plPL": "Zabójcza Pułapka",
			"ptBR": "Armadilha da Morte",
			"ruRU": "Смертоносная ловушка",
			"zhCN": "索命陷阱",
			"zhTW": "死亡陷阱"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 50 Sek.\nGlückstrefferchance: 4% (per hit)\nPlatziert eine Falle, die nach {#} Sek. scharf wird. Kommen Gegner ihr zu nahe, aktiviert sie sich, explodiert und fügt jedem Gegner im Wirkungsbereich insgesamt 250% Schaden zu.\n\nTags: Ultimativ, Falle, Schaden, Schatten, Abklingzeit.",
			"esES": "Tiempo de reutilización: 50 s\nProbabilidad de golpe de suerte: 4% (per hit)\nColocas una trampa que se arma al cabo de {#} s. Cuando un enemigo se pone al alcance, se activa e inflige un total de 250% de daño a cada enemigo en la zona.\n\nTags: Definitiva, Trampa, Daño, Sombra, Tiempo de reutilización.",
			"esMX": "Recuperación: 50 segundos\nProbabilidad de golpe afortunado: 4% (per hit)\nColocas una trampa que se arma después de {#} segundos. Se activa cuando un enemigo se mueve dentro del alcance e inflige un total de 250% de daño a cada enemigo en el área.\n\nTags: Máxima, Trampa, Daño, Sombra, Recuperación.",
			"frFR": "Temps de recharge: 50 s\nChances d'obtenir un coup de chance: 4% (per hit)\nVous placez un piège qui s'arme au bout de {#} s. Il s'active lorsqu'une cible adverse passe à portée, ce qui inflige un total de 250% points de dégâts à chaque adversaire se trouvant dans la zone affectée.\n\nTags: Ultime, Piège, Dégâts, Ombre, Temps de recharge.",
			"itIT": "Tempo di recupero: 50 s\nProbabilità di colpo fortunato: 4% (per hit)\nPiazzi una trappola che si arma dopo {#} s. Quando un nemico entra nel suo raggio d'azione, la trappola si attiva infliggendo un totale di 250% danni a ogni nemico nell'area.\n\nTags: Ultra, Trappole, Danni, Ombra, Tempo di recupero.",
			"jaJP": "クールダウン: 50秒\n幸運の一撃発生率: 4% (per hit)\n{#}秒後に起動準備が完了する罠を仕掛ける。罠は一定距離内で敵が動くと起動し、エリア内にいる敵それぞれに合計250%のダメージを与える。\n\nTags: 奥義, 罠, ダメージ, 影, クールダウン.",
			"koKR": "재사용 대기시간: 50초\n행운의 적중 확률: 4% (per hit)\n{#}초 후 장전되는 덫을 설치합니다. 덫은 적이 범위 내에 들어오면 발동하며, 해당 범위 내에 있는 각각의 적에게 총 250%의 피해를 줍니다.\n\nTags: 궁극기, 덫, 피해, 암흑, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 50 sek.\nSzansa na szczęśliwy traf: 4% (per hit)\nTworzysz pułapkę, która uzbraja się po {#} sek. Gdy wróg zajdzie się w jej zasięgu, pułapka się aktywuje, a następnie wybucha, zadając w sumie 250% pkt. obrażeń każdemu wrogowi w polu rażenia.\n\nTags: Specjalne, Pułapki, Obrażenia, Cień, Odnowienie.",
			"ptBR": "Recarga: 50 segundos\nChance de Golpe de Sorte: 4% (per hit)\nPosiciona uma armadilha que arma após {#} segundos. É ativada quando um inimigo entra em alcance, causando um total de 250% de dano a cada inimigo na área.\n\nTags: Suprema, Armadilha, Dano, Sombra, Recarga.",
			"ruRU": "Время восстановления: 50 сек.\nВероятность удачного удара: 4% (per hit)\nВы размещаете на земле ловушку, которая заряжается через {#} сек. Когда в область действия попадает противник, она срабатывает и наносит целям в зоне поражения по 250% ед. урона.\n\nTags: Мощное умение, Ловушка, Урон, Темная магия, Время восстановления.",
			"zhCN": "冷却时间: 50 秒\n幸运一击几率: 4% (per hit)\n放置一个在 {#} 秒后完成部署的陷阱。陷阱会在敌人进入范围时激活, 对范围内的每个敌人造成总共 250% 点伤害。\n\nTags: 终极技能, 陷阱, 伤害, 暗影, 冷却时间.",
			"zhTW": "冷卻時間:50 秒\n幸運觸發機率: 4% (per hit)\n放置一個 {#} 秒後設置完成的陷阱,於敵人進入範圍內時啟動,對範圍內每一個敵人累積造成 250% 點傷害。\n\nTags: 絕招, 陷阱, 傷害, 暗影, 冷卻時間."
},
		id: 108,
		maxPoints: 1,
		values: [ "1.25" ],
		x: -543.29,
		y: 2.23
	},
	"Prime Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Death Trap", "Supreme Death Trap" ],
		description: `Enemies are Pulled into Death Trap when it activates.

Tags: Ultimate, Trap, Damage, Shadow, Cooldown.`,
		nameLocalized: {
			"deDE": "Oberste Todesfalle",
			"esES": "Trampa mortal mayor",
			"esMX": "Trampa Mortal Suprema",
			"frFR": "Piège mortel primordial",
			"itIT": "Trappola Mortale Pregiata",
			"jaJP": "デス・トラップ(上級)",
			"koKR": "극상의 죽음의 덫",
			"plPL": "Większa Zabójcza Pułapka",
			"ptBR": "Armadilha da Morte Primordial",
			"ruRU": "Первородная смертоносная ловушка",
			"zhCN": "至尊索命陷阱",
			"zhTW": "強烈死亡陷阱"
},
		descriptionLocalized: {
			"deDE": "Gegner werden bei der Aktivierung von Todesfalle zur Falle gezogen.\n\nTags: Ultimativ, Falle, Schaden, Schatten, Abklingzeit.",
			"esES": "Trampa mortal atrae a los enemigos cuando se activa.\n\nTags: Definitiva, Trampa, Daño, Sombra, Tiempo de reutilización.",
			"esMX": "Trampa Mortal atrae a los enemigos al activarse.\n\nTags: Máxima, Trampa, Daño, Sombra, Recuperación.",
			"frFR": "Les cibles adverses sont attirées dans le piège mortel lorsqu'il s'active.\n\nTags: Ultime, Piège, Dégâts, Ombre, Temps de recharge.",
			"itIT": "I nemici vengono trascinati nella Trappola Mortale quando si attiva.\n\nTags: Ultra, Trappole, Danni, Ombra, Tempo di recupero.",
			"jaJP": "〈デス・トラップ〉が起動すると敵を引き寄せる。\n\nTags: 奥義, 罠, ダメージ, 影, クールダウン.",
			"koKR": "죽음의 덫이 발동할 때 적들을 끌어당깁니다.\n\nTags: 궁극기, 덫, 피해, 암흑, 재사용 대기시간.",
			"plPL": "Wrogowie są przyciągani do Zabójczej Pułapki, kiedy ta się aktywuje.\n\nTags: Specjalne, Pułapki, Obrażenia, Cień, Odnowienie.",
			"ptBR": "Inimigos são puxados para a Armadilha da Morte quando ela é ativada.\n\nTags: Suprema, Armadilha, Dano, Sombra, Recarga.",
			"ruRU": "При срабатывании \"Смертоносная ловушка\" притягивает противников.\n\nTags: Мощное умение, Ловушка, Урон, Темная магия, Время восстановления.",
			"zhCN": "索命陷阱激活时会将敌人拖拽至陷阱当中。\n\nTags: 终极技能, 陷阱, 伤害, 暗影, 冷却时间.",
			"zhTW": "在死亡陷阱啟動期間,敵人會被拉進陷阱內。\n\nTags: 絕招, 陷阱, 傷害, 暗影, 冷卻時間."
},
		id: 109,
		maxPoints: 1,
		x: -905.975,
		y: 1.305
	},
	"Supreme Death Trap": {
		baseSkill: "Death Trap",
		connections: [ "Prime Death Trap" ],
		description: `If Death Trap kills an enemy, its Cooldown is reduced by 10 seconds.

Tags: Ultimate, Trap, Damage, Shadow, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegene Todesfalle",
			"esES": "Trampa mortal suprema",
			"esMX": "Trampa Mortal Superior",
			"frFR": "Piège mortel suprême",
			"itIT": "Trappola Mortale Suprema",
			"jaJP": "デス・トラップ(高級)",
			"koKR": "최고의 죽음의 덫",
			"plPL": "Największa Zabójcza Pułapka",
			"ptBR": "Armadilha da Morte Suprema",
			"ruRU": "Неотвратимая смертоносная ловушка",
			"zhCN": "至极索命陷阱",
			"zhTW": "終極死亡陷阱"
},
		descriptionLocalized: {
			"deDE": "Wenn Todesfalle einen Gegner tötet, wird die Abklingzeit um 10 Sek. reduziert.\n\nTags: Ultimativ, Falle, Schaden, Schatten, Abklingzeit.",
			"esES": "Si Trampa mortal mata a un enemigo, su tiempo de reutilización se reduce 10 s.\n\nTags: Definitiva, Trampa, Daño, Sombra, Tiempo de reutilización.",
			"esMX": "Si Trampa Mortal elimina a un enemigo, su recuperación se reduce 10 segundos.\n\nTags: Máxima, Trampa, Daño, Sombra, Recuperación.",
			"frFR": "Si Piège mortel tue une cible, son temps de recharge est réduit de 10 s.\n\nTags: Ultime, Piège, Dégâts, Ombre, Temps de recharge.",
			"itIT": "Se Trappola Mortale uccide un nemico, il suo tempo di recupero si riduce di 10 s.\n\nTags: Ultra, Trappole, Danni, Ombra, Tempo di recupero.",
			"jaJP": "〈デス・トラップ〉が敵1体を倒すと、クールダウンが10秒短縮される。\n\nTags: 奥義, 罠, ダメージ, 影, クールダウン.",
			"koKR": "죽음의 덫으로 적을 처치하면 재사용 대기시간이 10초 감소합니다.\n\nTags: 궁극기, 덫, 피해, 암흑, 재사용 대기시간.",
			"plPL": "Jeśli Zabójcza Pułapka zabije wroga, jej czas odnowienia zostaje skrócony o 10 sek.\n\nTags: Specjalne, Pułapki, Obrażenia, Cień, Odnowienie.",
			"ptBR": "Se Armadilha da Morte matar um inimigo, a recarga é reduzida em 10 segundos.\n\nTags: Suprema, Armadilha, Dano, Sombra, Recarga.",
			"ruRU": "Когда \"Смертоносная ловушка\" убивает противника, ее время восстановления сокращается на 10 сек.\n\nTags: Мощное умение, Ловушка, Урон, Темная магия, Время восстановления.",
			"zhCN": "如果索命陷阱 消灭一名敌人, 其冷却时间缩短 10 秒。\n\nTags: 终极技能, 陷阱, 伤害, 暗影, 冷却时间.",
			"zhTW": "若死亡陷阱殺死一名敵人,其冷卻時間將縮短 10 秒。\n\nTags: 絕招, 陷阱, 傷害, 暗影, 冷卻時間."
},
		id: 110,
		maxPoints: 1,
		x: -1195.38,
		y: 1.185
	},
	"Trap Mastery": {
		connections: [ "Ultimate" ],
		description: `When Poison Trap or Death Trap activates, you gain +{4/8/12/16/20/24/28/32/36/40}% increased Critical Strike Chance against Vulnerable and Crowd Controlled enemies for 4 seconds.

Tags: Vulnerable, Crowd Control, Critical Strikes, Trap.`,
		nameLocalized: {
			"deDE": "Fallenbeherrschung",
			"esES": "Dominio de las trampas",
			"esMX": "Maestría en Trampas",
			"frFR": "Maîtrise des pièges",
			"itIT": "Padronanza delle Trappole",
			"jaJP": "罠の達人",
			"koKR": "덫 숙련",
			"plPL": "Mistrzostwo Pułapek",
			"ptBR": "Maestria em Armadilhas",
			"ruRU": "Мастер ловушек",
			"zhCN": "陷阱精通",
			"zhTW": "精通陷阱"
},
		descriptionLocalized: {
			"deDE": "Wenn Giftfalle oder Todesfalle aktiviert werden, wird Eure kritische Trefferchance gegen Gegner, die verwundbar sind oder unter Kontrollverlusteffekten leiden, 4 Sek. lang um +{4/8/12/16/20/24/28/32/36/40}% erhöht.\n\nTags: Verwundbar, Kontrollverlust, Kritische Treffer, Falle.",
			"esES": "Cuando Trampa de veneno o Trampa mortal se activan, obtienes un +{4/8/12/16/20/24/28/32/36/40}% más de probabilidad de golpe crítico contra enemigos vulnerables y afectados por control de masas durante 4 s.\n\nTags: Vulnerable, Control de masas, Golpes críticos, Trampa.",
			"esMX": "Cuando Trampa Venenosa o Trampa Mortal se activan, obtienes un +{4/8/12/16/20/24/28/32/36/40}% más de probabilidad de golpe crítico contra enemigos vulnerables y bajo los efectos de control de multitudes durante 4 segundos.\n\nTags: Vulnerable, Control de multitudes, Golpes críticos, Trampa.",
			"frFR": "À l'activation de Piège de poison ou de Piège mortel, vos chances d'infliger un coup critique aux adversaires vulnérables ou subissant un effet de perte de contrôle sont augmentées de +{4/8/12/16/20/24/28/32/36/40}% pendant 4 s.\n\nTags: Vulnérable, Perte de contrôle, Coups critiques, Piège.",
			"itIT": "Quando Trappola Avvelenata o Trappola Mortale si attivano, la probabilità di critico contro i nemici vulnerabili o sotto effetti debilitanti aumenta del +{4/8/12/16/20/24/28/32/36/40}% per 4 s.\n\nTags: Vulnerabilità, Effetti debilitanti, Colpi critici, Trappole.",
			"jaJP": "〈ポイズン・トラップ〉または〈デス・トラップ〉が起動すると、脆弱状態または操作障害効果を受けた敵に対するクリティカルヒット率が4秒間にわたり+{4/8/12/16/20/24/28/32/36/40}%上昇する。\n\nTags: 脆弱, 操作障害効果, クリティカルヒット, 罠.",
			"koKR": "맹독 덫이나 죽음의 덫이 발동하면 4초 동안 취약 또는 군중 제어 상태의 적에 대한 극대화 확률이 +{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 취약, 군중 제어, 극대화, 덫.",
			"plPL": "Kiedy aktywuje się Trująca Pułapka lub Zabójcza Pułapka, przez 4 sek. szansa na trafienie krytyczne we wrogów odsłoniętych lub o ograniczonej kontroli jest zwiększona o +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Odsłonięcie, Ograniczanie Kontroli, Trafienia Krytyczne, Pułapki.",
			"ptBR": "Quando Armadilha Venenosa ou Armadilha da Morte é ativada, você recebe +{4/8/12/16/20/24/28/32/36/40}% de chance de acerto crítico aumentada contra inimigos vulneráveis e sob controle de grupo por 4 segundos.\n\nTags: Vulnerável, Controle de Grupo, Acertos Críticos, Armadilha.",
			"ruRU": "При срабатывании \"Ловушки с ядом\" или \"Смертоносной ловушки\" вероятность критического удара повышается на +{4/8/12/16/20/24/28/32/36/40}% на 4 сек. в бою с уязвимыми противниками и целями под действием эффектов контроля.\n\nTags: Уязвимость, Контроль, Критические удары, Ловушка.",
			"zhCN": "剧毒陷阱或索命陷阱激活时, 你对处于易伤状态和被群控的敌人造成暴击的几率提高 +{4/8/12/16/20/24/28/32/36/40}%, 持续 4 秒。\n\nTags: 易伤, 群控, 暴击, 陷阱.",
			"zhTW": "劇毒陷阱或死亡陷阱生效時,你對易傷和受控場效果影響敵人的爆擊機率提高 +{4/8/12/16/20/24/28/32/36/40}%,持續 4 秒。\n\nTags: 易傷, 控場, 爆擊, 陷阱."
},
		id: 111,
		maxPoints: 3,
		x: -538.46,
		y: -182.505
	},
	"Rain of Arrows": {
		connections: [ "Prime Rain of Arrows", "Ultimate" ],
		description: `Cooldown: 60 seconds
Lucky Hit Chance: 2% (per hit)
Arrows rain down over a large area 2 times, each wave dealing 100% damage.

Tags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Pfeilhagel",
			"esES": "Lluvia de flechas",
			"esMX": "Lluvia de Flechas",
			"frFR": "Pluie de flèches",
			"itIT": "Pioggia di Frecce",
			"jaJP": "矢の雨",
			"koKR": "화살비",
			"plPL": "Grad Strzał",
			"ptBR": "Chuva de Flechas",
			"ruRU": "Град стрел",
			"zhCN": "箭雨",
			"zhTW": "箭雨"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 60 Sek.\nGlückstrefferchance: 2% (per hit)\nPfeile regnen 2-mal auf ein großes Gebiet herab, wobei jede Welle 100% Schaden verursacht.\n\nTags: Ultimativ, Präzision, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "Tiempo de reutilización: 60 s\nProbabilidad de golpe de suerte: 2% (per hit)\nCae una lluvia de flechas en una gran zona 2 veces. Cada oleada inflige 100% de daño.\n\nTags: Definitiva, Tirador, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "Recuperación: 60 segundos\nProbabilidad de golpe afortunado: 2% (per hit)\nHaces llover flechas sobre un área grande 2 veces, y cada ola inflige 100% de daño.\n\nTags: Máxima, Tirador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "Temps de recharge: 60 s\nChances d'obtenir un coup de chance: 2% (per hit)\nVous faites pleuvoir des flèches sur une large zone à 2 reprises, chaque vague infligeant 100% points de dégâts.\n\nTags: Ultime, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Tempo di recupero: 60 s\nProbabilità di colpo fortunato: 2% (per hit)\nFrecce piovono su un'ampia area per 2 volte, infliggendo 100% danni a ogni ondata.\n\nTags: Ultra, Tiro di precisione, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "クールダウン: 60秒\n幸運の一撃発生率: 2% (per hit)\n広範囲に矢の雨が2回にわたって降り注ぎ、1回ごとに100%のダメージを与える。\n\nTags: 奥義, 射手, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "재사용 대기시간: 60초\n행운의 적중 확률: 2% (per hit)\n넓은 지역에 화살비가 2번 쏟아져, 각각 100%의 피해를 줍니다.\n\nTags: 궁극기, 명사수, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 60 sek.\nSzansa na szczęśliwy traf: 2% (per hit)\nStrzały spadają falami na duży obszar 2 razy, a każda fala zadaje 100% pkt. obrażeń.\n\nTags: Specjalne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Recarga: 60 segundos\nChance de Golpe de Sorte: 2% (per hit)\nFlechas são disparadas em uma grande área 2 vezes. Cada onda causa 100% de dano.\n\nTags: Suprema, Atirador, Imbuível, Dano, Física, Recarga.",
			"ruRU": "Время восстановления: 60 сек.\nВероятность удачного удара: 2% (per hit)\nГрад стрел поражает широкую область 2 залпами, которые наносят по 100% ед. урона.\n\nTags: Мощное умение, Стрелок, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "冷却时间: 60 秒\n幸运一击几率: 2% (per hit)\n箭矢如雨一般在大范围内落下 2 次, 每波造成 100% 点伤害。\n\nTags: 终极技能, 神射手, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "冷卻時間:60 秒\n幸運觸發機率: 2% (per hit)\n降下 2 波大範圍的箭雨,每波造成 100% 點傷害。\n\nTags: 絕招, 射手, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 112,
		maxPoints: 1,
		x: 5.58,
		y: 290.575
	},
	"Prime Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Rain of Arrows", "Supreme Rain of Arrows" ],
		description: `Imbuement Skill effects applied by Rain of Arrows have x20% increased potency.

Tags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Oberster Pfeilhagel",
			"esES": "Lluvia de flechas mayor",
			"esMX": "Lluvia de Flechas Suprema",
			"frFR": "Pluie de flèches primordiale",
			"itIT": "Pioggia di Frecce Pregiata",
			"jaJP": "矢の雨(上級)",
			"koKR": "극상의 화살비",
			"plPL": "Większy Grad Strzał",
			"ptBR": "Chuva de Flechas Primordial",
			"ruRU": "Первородный град стрел",
			"zhCN": "至尊箭雨",
			"zhTW": "強烈箭雨"
},
		descriptionLocalized: {
			"deDE": "Die Wirksamkeit von Infusionseffekten, die von Pfeilhagel erzeugt wurden, ist um x20% erhöht.\n\nTags: Ultimativ, Präzision, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "Los efectos de las habilidades de imbuición aplicados por Lluvia de flechas tienen un x20% más de potencia.\n\nTags: Definitiva, Tirador, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "Los efectos de las habilidades de Imbuición aplicados por Lluvia de Flechas tienen un x20% más de potencia.\n\nTags: Máxima, Tirador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "Les effets des compétences d'imprégnation appliqués par Pluie de flèches sont x20% plus puissants.\n\nTags: Ultime, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Gli effetti delle abilità di infusione inflitti da Pioggia di Frecce hanno il x20% di potenza aggiuntiva.\n\nTags: Ultra, Tiro di precisione, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈矢の雨〉を通じて適用される注入スキルの効果がx20%上昇する。\n\nTags: 奥義, 射手, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "화살비가 적용한 주입 기술의 효과가 x20% 강해집니다.\n\nTags: 궁극기, 명사수, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Efekty umiejętności Nasycenia nałożone przez Grad Strzał są silniejsze o x20%.\n\nTags: Specjalne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Efeitos de habilidades de Imbuição aplicados por Chuva de Flechas têm 20% de potência aumentada.\n\nTags: Suprema, Atirador, Imbuível, Dano, Física, Recarga.",
			"ruRU": "Умения категории \"Насыщение\", активированные \"Градом стрел\", усиливаются на x20%.\n\nTags: Мощное умение, Стрелок, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "箭雨施加的灌注技能效果提高 x20%。\n\nTags: 终极技能, 神射手, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "使用在箭雨上的灌注技能效力提高 x20%。\n\nTags: 絕招, 射手, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 113,
		maxPoints: 1,
		x: 9.95,
		y: 488.685
	},
	"Supreme Rain of Arrows": {
		baseSkill: "Rain of Arrows",
		connections: [ "Prime Rain of Arrows" ],
		description: `Rain of Arrows' second wave Knocks Down enemies for 3 seconds.

Tags: Ultimate, Marksman, Imbueable, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Überlegener Pfeilhagel",
			"esES": "Lluvia de flechas suprema",
			"esMX": "Lluvia de Flechas Superior",
			"frFR": "Pluie de flèches suprême",
			"itIT": "Pioggia di Frecce Suprema",
			"jaJP": "上級〈矢の雨〉",
			"koKR": "최고의 화살비",
			"plPL": "Największy Grad Strzał",
			"ptBR": "Chuva de Flechas Suprema",
			"ruRU": "Неотвратимый град стрел",
			"zhCN": "至极箭雨",
			"zhTW": "終極箭雨"
},
		descriptionLocalized: {
			"deDE": "Die zweite Welle von Pfeilhagel schlägt Gegner 3 Sek. lang nieder.\n\nTags: Ultimativ, Präzision, Infusionsfähig, Schaden, Physisch, Abklingzeit.",
			"esES": "La segunda oleada de Lluvia de flechas derriba a los enemigos durante 3 s.\n\nTags: Definitiva, Tirador, Imbuible, Daño, Física, Tiempo de reutilización.",
			"esMX": "La segunda ola de Lluvia de Flechas derriba a los enemigos durante 3 segundos.\n\nTags: Máxima, Tirador, Imbuible, Daño, Física, Recuperación.",
			"frFR": "La seconde vague de Pluie de flèches renverse les adversaires pendant 3 s.\n\nTags: Ultime, Tir d'élite, Imprégnable, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "La seconda ondata di Pioggia di Frecce fa cadere a terra i nemici per 3 s.\n\nTags: Ultra, Tiro di precisione, Infondibile, Danni, Fisico, Tempo di recupero.",
			"jaJP": "〈矢の雨〉の第2波が敵を3秒間ノックダウンする。\n\nTags: 奥義, 射手, 注入可能, ダメージ, 物理, クールダウン.",
			"koKR": "화살비의 두 번째 사격이 적을 3초 동안 넘어뜨립니다.\n\nTags: 궁극기, 명사수, 주입 가능, 피해, 물리, 재사용 대기시간.",
			"plPL": "Druga fala Gradu Strzał powala wrogów na 3 sek.\n\nTags: Specjalne, Strzelectwo, Nasycalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "A segunda onda de Chuva de Flechas nocauteia inimigos por 3 segundos.\n\nTags: Suprema, Atirador, Imbuível, Dano, Física, Recarga.",
			"ruRU": "Второй залп \"Града стрел\" сбивает противников с ног на 3 сек.\n\nTags: Мощное умение, Стрелок, Насыщение, Урон, Физический урон, Время восстановления.",
			"zhCN": "箭雨的第二波攻击会击倒敌人, 持续 3 秒。\n\nTags: 终极技能, 神射手, 可灌注, 伤害, 物理, 冷却时间.",
			"zhTW": "箭雨的第二波攻擊會擊倒敵人,持續 3 秒。\n\nTags: 絕招, 射手, 可灌注, 傷害, 物理, 冷卻時間."
},
		id: 114,
		maxPoints: 1,
		x: 14.99,
		y: 646.1
	},
	"Adrenaline Rush": {
		connections: [ "Impetus", "Haste", "Ultimate" ],
		description: `While moving, you gain x{5/10/15/20/25/30/35/40/45/50}% increased Energy Regeneration.

Tags: Energy.`,
		nameLocalized: {
			"deDE": "Adrenalinrausch",
			"esES": "Torrente de adrenalina",
			"esMX": "Descarga de Adrenalina",
			"frFR": "Montée d'adrénaline",
			"itIT": "Scarica di Adrenalina",
			"jaJP": "アドレナリン・ラッシュ",
			"koKR": "아드레날린 촉진",
			"plPL": "Przypływ Adrenaliny",
			"ptBR": "Pico de Adrenalina",
			"ruRU": "Выброс адреналина",
			"zhCN": "狂血奔涌",
			"zhTW": "能量刺激"
},
		descriptionLocalized: {
			"deDE": "In Bewegung ist eure Energieregeneration um x{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Energie.",
			"esES": "Al moverte, obtienes un x{5/10/15/20/25/30/35/40/45/50}% más de regeneración de energía.\n\nTags: Energía.",
			"esMX": "Mientras estás en movimiento, obtienes un x{5/10/15/20/25/30/35/40/45/50}% más de regeneración de Energía.\n\nTags: Energía.",
			"frFR": "Lorsque vous vous déplacez, votre régénération d'énergie est augmentée de x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Énergie.",
			"itIT": "Quando ti muovi, la tua rigenerazione di energia aumenta del x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Energia.",
			"jaJP": "移動中はエネルギー回復量がx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: エネルギー.",
			"koKR": "이동하는 동안 기력 재생이 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 기력.",
			"plPL": "Podczas ruchu twoja regeneracja energii jest zwiększona o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Energia.",
			"ptBR": "Enquanto se move, você recebe {5/10/15/20/25/30/35/40/45/50}% de regeneração de energia aumentada.\n\nTags: Energia.",
			"ruRU": "Во время движения вы восстанавливаете энергию на x{5/10/15/20/25/30/35/40/45/50}% быстрее.\n\nTags: Энергия.",
			"zhCN": "移动时, 你的能量回复速度提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 能量.",
			"zhTW": "移動時,你的能量恢復提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 能量."
},
		id: 115,
		maxPoints: 3,
		x: -325.67,
		y: 334.9
	},
	"Impetus": {
		connections: [ "Adrenaline Rush" ],
		description: `After moving 15 meters, your next attack deals x{7/14/21/28/35/42/49/56/63/70}% increased damage.

Tags: Damage.`,
		nameLocalized: {
			"deDE": "Anlauf",
			"esES": "Ímpetu",
			"esMX": "Ímpetu",
			"frFR": "Stimulus",
			"itIT": "Impetus",
			"jaJP": "はずみ",
			"koKR": "자극",
			"plPL": "Rozmach",
			"ptBR": "Ímpeto",
			"ruRU": "Сила движения",
			"zhCN": "动量充沛",
			"zhTW": "助攻衝力"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr Euch 15 Meter bewegt habt, verursacht Euer nächster Angriff x{7/14/21/28/35/42/49/56/63/70}% mehr Schaden.\n\nTags: Schaden.",
			"esES": "Tras desplazarte 15 m, tu siguiente ataque inflige un x{7/14/21/28/35/42/49/56/63/70}% más de daño.\n\nTags: Daño.",
			"esMX": "Después de moverte 15 metros, tu siguiente ataque inflige un x{7/14/21/28/35/42/49/56/63/70}% más de daño.\n\nTags: Daño.",
			"frFR": "Après avoir effectué un déplacement de 15 m, votre prochaine attaque inflige x{7/14/21/28/35/42/49/56/63/70}% de dégâts supplémentaires.\n\nTags: Dégâts.",
			"itIT": "Dopo esserti spostato di 15 m, il tuo successivo attacco infligge il x{7/14/21/28/35/42/49/56/63/70}% di danni aggiuntivi.\n\nTags: Danni.",
			"jaJP": "15メートル移動すると、次の攻撃で与えるダメージがx{7/14/21/28/35/42/49/56/63/70}%増加する。\n\nTags: ダメージ.",
			"koKR": "15미터 이동한 후 다음 공격으로 주는 피해가 x{7/14/21/28/35/42/49/56/63/70}% 증가합니다.\n\nTags: 피해.",
			"plPL": "Po przejściu 15 m twój następny atak zadaje obrażenia zwiększone o x{7/14/21/28/35/42/49/56/63/70}%.\n\nTags: Obrażenia.",
			"ptBR": "Depois de percorrer 15 metros, seu próximo ataque causa {7/14/21/28/35/42/49/56/63/70}% de dano aumentado.\n\nTags: Dano.",
			"ruRU": "После того как вы перемещаетесь на 15 м, ваша следующая атака наносит на x{7/14/21/28/35/42/49/56/63/70}% больше урона.\n\nTags: Урон.",
			"zhCN": "移动 15 米后, 你的下一次攻击造成的伤害提高 x{7/14/21/28/35/42/49/56/63/70}%。\n\nTags: 伤害.",
			"zhTW": "移動 15 公尺後,你下次攻擊造成的傷害提高 x{7/14/21/28/35/42/49/56/63/70}%。\n\nTags: 傷害."
},
		id: 116,
		maxPoints: 3,
		x: -570.38,
		y: 507.995
	},
	"Haste": {
		connections: [ "Adrenaline Rush" ],
		description: `While at or above 50% maximum Energy, gain +{5/10/15/20/25/30/35/40/45/50}% increased Movement Speed. While below 50% maximum Energy, gain +{5/10/15/20/25/30/35/40/45/50}% increased Attack Speed.

Tags: Movement, Attack Speed, Energy.`,
		nameLocalized: {
			"deDE": "Hast",
			"esES": "Celeridad",
			"esMX": "Apremio",
			"frFR": "Hâte",
			"itIT": "Celerità",
			"jaJP": "迅速",
			"koKR": "신속",
			"plPL": "Pośpiech",
			"ptBR": "Agilidade",
			"ruRU": "Спешка",
			"zhCN": "急速",
			"zhTW": "迅捷動作"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mindestens 50% maximale Energie habt, ist Eure Bewegungsgeschwindigkeit um +{5/10/15/20/25/30/35/40/45/50}% erhöht. Wenn Ihr weniger als 50% maximale Energie habt, ist Eure Angriffsgeschwindigkeit um +{5/10/15/20/25/30/35/40/45/50}% erhöht.\n\nTags: Bewegung, Angriffsgeschwindigkeit, Energie.",
			"esES": "Mientras tengas un 50% de energía o más, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de movimiento. Mientras tengas menos de un 50% de la energía máxima, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de ataque.\n\nTags: Movimiento, Velocidad de ataque, Energía.",
			"esMX": "Mientras tienes un 50% de la Energía máxima o más, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de movimiento. Mientras tienes menos del 50% de la Energía máxima, obtienes un +{5/10/15/20/25/30/35/40/45/50}% más de velocidad de ataque.\n\nTags: Movimiento, Velocidad de ataque, Energía.",
			"frFR": "Lorsque vous avez au moins 50% de votre énergie maximale, votre vitesse de déplacement est augmentée de +{5/10/15/20/25/30/35/40/45/50}%. Lorsque vous avez moins de 50% de votre énergie maximale, votre vitesse d'attaque est augmentée de +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Déplacement, Vitesse d'attaque, Énergie.",
			"itIT": "Quando hai almeno il 50% dell'energia massima, la tua velocità di movimento aumenta del +{5/10/15/20/25/30/35/40/45/50}%. Quando hai meno del 50% dell'energia massima, la tua velocità d'attacco aumenta del +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Movimento, Velocità d'attacco, Energia.",
			"jaJP": "エネルギーが最大値の50%以上ある場合、移動速度が+{5/10/15/20/25/30/35/40/45/50}%上昇する。エネルギーが最大値の50%未満の場合は、攻撃速度が+{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: 移動, 攻撃速度, エネルギー.",
			"koKR": "최대 기력이 50% 이상일 때 이동 속도가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다. 최대 기력이 50% 미만일 때 공격 속도가 +{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 이동, 공격 속도, 기력.",
			"plPL": "Kiedy masz co najmniej 50% maksymalnej energii, otrzymujesz premię +{5/10/15/20/25/30/35/40/45/50}% do szybkości ruchu. Kiedy masz mniej niż 50% maksymalnej energii, zyskujesz premię +{5/10/15/20/25/30/35/40/45/50}% do szybkości ataku.\n\nTags: Ruch, Szybkość Ataku, Energia.",
			"ptBR": "Enquanto estiver com 50% ou mais de energia máxima, recebe +{5/10/15/20/25/30/35/40/45/50}% de velocidade de movimento aumentada. Enquanto estiver abaixo de 50% de energia máxima, recebe +{5/10/15/20/25/30/35/40/45/50}% de velocidade de ataque aumentada.\n\nTags: Movimento, Velocidade de Ataque, Energia.",
			"ruRU": "Пока ваш уровень энергии равен или превышает 50% от максимального, скорость передвижения повышается на +{5/10/15/20/25/30/35/40/45/50}%. Пока ваш уровень энергии ниже 50% максимального, скорость атаки повышается на +{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Движение, Скорость атаки, Энергия.",
			"zhCN": "能量在 50% 及以上时, 移动速度提高 +{5/10/15/20/25/30/35/40/45/50}%。在 50% 以下时, 攻击速度提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 移动, 攻击速度, 能量.",
			"zhTW": "當能量等於或高於能量上限的 50% 時,使移動速度提高 +{5/10/15/20/25/30/35/40/45/50}%。當能量低於能量上限的 50%時,使攻擊速度提高 +{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 移動, 攻擊速度, 能量."
},
		id: 117,
		maxPoints: 3,
		x: -323.665,
		y: 509.91
	},
};

rogueData["Key Passive"] = {
	"Momentum": {
		connections: [ "Key Passive" ],
		description: `Cutthroat Skills grant a stack of Momentum for 8 seconds if they either:
• Hit a Stunned, Dazed, or Frozen enemy
• Hit any enemy from behind

While at 3 stacks of Momentum you gain:
• 20% increased Damage Reduction
• x30% increased Energy Regeneration
• +15% increased Movement Speed

Tags: Frozen, Daze, Cutthroat, Crowd Control, Damage, Energy, Damage Reduction, Movement.`,
		nameLocalized: {
			"deDE": "Schwung",
			"esES": "Impulso",
			"esMX": "Impulso",
			"frFR": "Lancée",
			"itIT": "Impeto",
			"jaJP": "機運",
			"koKR": "기세",
			"plPL": "Impet",
			"ptBR": "Impulsão",
			"ruRU": "Импульс",
			"zhCN": "乘胜追击",
			"zhTW": "趁勢強攻"
},
		descriptionLocalized: {
			"deDE": "Meuchelfertigkeiten verleihen 8 Sek. lang einen Stapel von Schwung, wenn sie:\n• einen betäubten, benommenen oder eingefrorenen Gegner treffen\n• einen Gegner von hinten treffen\n\nWährend Ihr über 3 Stapel von Schwung verfügt, erhaltet Ihr:\n• 20% mehr Schadensreduktion\n• x30% mehr Energieregeneration\n• +15% mehr Bewegungsgeschwindigkeit\n\nTags: Eingefroren, Benommenheit, Meucheln, Kontrollverlust, Schaden, Energie, Schadensreduktion, Bewegung.",
			"esES": "Las habilidades de degollador otorgan una acumulación de Impulso durante 8 s si:\n• Golpean a un enemigo aturdido, atontado o congelado, o;\n• Golpean a un enemigo por la espalda\n\nMientras tienes 3 acumulaciones de Impulso, obtienes:\n• Un 20% más de reducción de daño\n• Un x30% más de regeneración de energía\n• Un +15% más de velocidad de movimiento\n\nTags: Congelación, Atontamiento, Degollación, Control de masas, Daño, Energía, Reducción de daño, Movimiento.",
			"esMX": "Las habilidades de Degollador otorgan una acumulación de Impulso durante 8 segundos si:\n• Golpean a un enemigo aturdido, atontado o congelado\n• Golpean a un enemigo por la espalda\n\nMientras tienes 3 acumulaciones de Impulso, obtienes:\n• un 20% más de reducción de daño\n• un x30% más de regeneración de Energía\n• un +15% más de velocidad de movimiento\n\nTags: Congelado, Atontar, Degollador, Control de multitudes, Daño, Energía, Reducción de daño, Movimiento.",
			"frFR": "Les compétences de coupe-jarret vous confèrent un cumul d'Inertie pendant 8 s si elles :\n• touchent une cible étourdie, hébétée ou gelée ;\n• touchent une cible par derrière.\n\nTant que vous avez 3 cumuls d'Inertie, vous bénéficiez de :\n• 20% de réduction des dégâts supplémentaire ;\n• x30% de régénération d'énergie supplémentaire ;\n• +15% de vitesse de déplacement supplémentaire.\n\nTags: Gel, Hébétement, Coupe-jarret, Perte de contrôle, Dégâts, Énergie, Réduction des dégâts, Déplacement.",
			"itIT": "Le tue abilità Sgozzamento forniscono un accumulo di Impeto per 8 s se:\n• Colpiscono un nemico stordito, frastornato o congelato\n• Colpiscono un nemico alle spalle\n\nQuando hai 3 accumuli di Impeto ottieni:\n• Una riduzione dei danni superiore del 20%\n• Una rigenerazione dell'energia superiore del x30%\n• Una velocità di movimento superiore del +15%\n\nTags: Congelamento, Frastornamento, Sgozzamento, Effetti debilitanti, Danni, Energia, Riduzione danni, Movimento.",
			"jaJP": "喉かきスキル使用時、次の条件に当てはまる場合に8秒間にわたり機運を獲得する:\n• スタン、朦朧、または 凍結状態の敵に命中する\n• 敵の背後から命中させる\n\n機運が3蓄積している場合、以下を獲得する:\n• ダメージ軽減率が20%増加\n• エネルギー回復量がx30%増加\n• 移動速度が+15%増加\n\nTags: 凍結, 朦朧, 喉かき, 操作障害効果, ダメージ, エネルギー, ダメージ減少, 移動.",
			"koKR": "암살 기술을 사용할 때 다음과 같은 경우 8초 동안 기세가 중첩됩니다:\n• 기절, 멍해짐, 빙결 상태의 적에게 적중\n• 후방에서 적에게 적중\n\n기세 3중첩 시 다음 효과를 얻습니다:\n• 피해 감소 20% 증가\n• 기력 재생 x30% 증가\n• 이동 속도 +15% 증가\n\nTags: 빙결, 멍해짐, 암살, 군중 제어, 피해, 기력, 피해 감소, 이동.",
			"plPL": "Umiejętności Napaści zapewniają poziom kumulacji Impetu na 8 sek., jeśli:\n• trafią ogłuszonego, oszołomionego lub zamrożonego wroga; albo\n• trafią dowolnego wroga od tyłu.\n\nPrzy 3 poziomach kumulacji Impetu zyskujesz:\n• premię 20% do redukcji obrażeń;\n• premię x30% do regeneracji energii;\n• premię +15% do szybkości ruchu.\n\nTags: Zamrożenie, Oszołomienie, Napaść, Ograniczanie Kontroli, Obrażenia, Energia, Redukcja Obrażeń, Ruch.",
			"ptBR": "Habilidades de Degola concedem uma aplicação de Impulsão por 8 segundos se:\n• Atingirem um inimigo atordoado, sob torpor ou congelado\n• Atingirem um inimigo por trás\n\nEnquanto estiver com 3 aplicações de Impulsão, você recebe:\n• 20% de redução de dano aumentada\n• 30% de regeneração de energia aumentada\n• +15% de velocidade de movimento aumentada\n\nTags: Congelado, Torpor, Degola, Controle de Grupo, Dano, Energia, Redução de Dano, Movimento.",
			"ruRU": "Умения головореза на 8 сек. дают эффект \"Импульса\", если:\n• Они поражают оглушенного, замороженного противника или цель с головокружением\n• Наносят противнику удар сзади\n\nКогда вы накапливаете 3 эффекта:эффектов \"Импульса\":\n• Получаемый урон уменьшается на 20%\n• Восстановление энергии ускоряется на x30%\n• Скорость передвижения повышается на +15%\n\nTags: Заморозка, Головокружение, Головорез, Контроль, Урон, Энергия, Уменьшение урона, Движение.",
			"zhCN": "如果刺杀技能满足以下任意一个条件则获得一层乘胜追击, 持续 8 秒:\n• 命中一个昏迷、眩晕或冻结的敌人\n• 从背后命中任意敌人\n\n达到 3 层乘胜追击时你获得以下效果:\n• 提高 20% 伤害减免\n• 提高 x30% 能量回复速度\n• 提高 +15% 移动速度\n\nTags: 冻结, 眩晕, 刺杀, 群控, 伤害, 能量, 伤害减免, 移动.",
			"zhTW": "若符合下列條件,割喉技能會賦予一層趁勢強攻,持續 8 秒:\n• 擊中昏迷、暈眩或凍結的敵人\n• 從後方擊中任何敵人\n\n有 3 層趁勢強攻效果時,你獲得:\n• 20% 傷害減免\n• x30% 能量恢復\n• +15% 移動速度\n\nTags: 凍結, 暈眩, 割喉, 控場, 傷害, 能量, 傷害減免, 移動."
},
		id: 118,
		maxPoints: 1,
		x: -721.136,
		y: -1.72
	},
	"Close Quarters Combat": {
		connections: [ "Key Passive" ],
		description: `Damaging a Close enemy with Marksman or Cutthroat Skills each grant a +10% Attack Speed bonus for 8 seconds.

While both Attack Speed bonuses are active, you deal x20% increased damage against Crowd Controlled enemies.

Tags: Marksman, Cutthroat, Crowd Control, Attack Speed, Damage.`,
		nameLocalized: {
			"deDE": "Auf engem Raum",
			"esES": "Combate cuerpo a cuerpo",
			"esMX": "Combate Cuerpo a Cuerpo",
			"frFR": "Corps à corps",
			"itIT": "Specializzazione: Pugnali",
			"jaJP": "近距離戦",
			"koKR": "백병전",
			"plPL": "Walka w Zwarciu",
			"ptBR": "Combate Próximo",
			"ruRU": "Ближний бой",
			"zhCN": "近身格斗",
			"zhTW": "近身戰鬥"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner in der Nähe mit einer Präzisionsfertigkeit oder einer Meuchelfertigkeit Schaden zufügt, erhaltet Ihr 8 Sek. lang +10% mehr Angriffsgeschwindigkeit.\n\nSolange beide Angriffsgeschwindigkeitsboni aktiv sind, fügt Ihr Gegnern, die unter Kontrollverlusteffekten leiden, x20% mehr Schaden zu.\n\nTags: Präzision, Meucheln, Kontrollverlust, Angriffsgeschwindigkeit, Schaden.",
			"esES": "Infligir daño a un enemigo cercano con habilidades de tirador o degollador otorga sendos bonus de velocidad de ataque de un +10% durante 8 s.\n\nMientras duran los dos bonus de velocidad de ataque, infliges un x20% más de daño contra enemigos afectados por control de masas.\n\nTags: Tirador, Degollación, Control de masas, Velocidad de ataque, Daño.",
			"esMX": "Infligir daño a un enemigo cercano con habilidades de Tirador o de Degollador otorga un +10% de bonificación de velocidad de ataque durante 8 segundos.\n\nMientras ambas bonificaciones de velocidad de ataque están activas, infliges un x20% más de daño contra enemigos bajo los efectos de control de multitudes.\n\nTags: Tirador, Degollador, Control de multitudes, Velocidad de ataque, Daño.",
			"frFR": "Infliger des dégâts à une cible à proximité avec des compétences de tir d'élite ou de coupe-jarret vous confère un bonus à la vitesse d'attaque de +10% pendant 8 s.\n\nSi les deux bonus à la vitesse d'attaque sont actifs, vous infligez x20% de dégâts supplémentaires aux cibles subissant un effet de perte de contrôle.\n\nTags: Tir d'élite, Coupe-jarret, Perte de contrôle, Vitesse d'attaque, Dégâts.",
			"itIT": "Infliggere danni a un nemico vicino con abilità Tiro di precisione o Sgozzamento ti fornisce il +10% di velocità d'attacco aggiuntiva per 8 s.\n\nFinché entrambi gli aumenti alla velocità d'attacco sono attivi, infliggi il x20% di danni aggiuntivi contro i nemici sotto effetti debilitanti.\n\nTags: Tiro di precisione, Sgozzamento, Effetti debilitanti, Velocità d'attacco, Danni.",
			"jaJP": "付近の敵1体に射手か喉かきスキルでダメージを与えると、攻撃速度が各スキルごとに8秒間にわたり+10%上昇する。\n\n両方の攻撃速度ボーナスが発動している間、操作障害効果を受けた敵に与えるダメージがx20%増加する。\n\nTags: 射手, 喉かき, 操作障害効果, 攻撃速度, ダメージ.",
			"koKR": "명사수 또는 암살 기술로 근거리 적에게 피해를 주면 8초 동안 공격 속도가 +10% 증가합니다.\n\n공격 속도 증가 효과가 둘 다 활성화되어 있는 동안 군중 제어 상태의 적에게 주는 피해가 x20% 증가합니다.\n\nTags: 명사수, 암살, 군중 제어, 공격 속도, 피해.",
			"plPL": "Zadawanie obrażeń pobliskiemu celowi przy użyciu umiejętności Strzelectwa lub Napaści zapewnia premię +10% do szybkości ataku na 8 sek.\n\nKiedy obie te premie do szybkości ataku są aktywne, zadajesz wrogom o ograniczonej kontroli obrażenia zwiększone o x20%.\n\nTags: Strzelectwo, Napaść, Ograniczanie Kontroli, Szybkość Ataku, Obrażenia.",
			"ptBR": "Causar dano a um inimigo com habilidades de Atirador ou Degola concede +10% de bônus de velocidade de ataque por 8 segundos.\n\nEnquanto os dois bônus de velocidade de ataque estão ativos, você causa 20% de dano aumentado contra inimigos sob controle de grupo.\n\nTags: Atirador, Degola, Controle de Grupo, Velocidade de Ataque, Dano.",
			"ruRU": "Когда вы наносите урон противникам поблизости умением стрелка или головореза, скорость атаки повышается на +10% на 8 сек. за оба типа умения.\n\nКогда действуют оба бонуса, вы наносите на x20% больше урона целям под действием эффектов контроля.\n\nTags: Стрелок, Головорез, Контроль, Скорость атаки, Урон.",
			"zhCN": "使用神射手或刺杀技能对一名近距敌人造成伤害时, 每种技能都会使攻击速度提高 +10%, 持续 8 秒。\n\n两种攻击速度加成同时激活时, 你对被群控的敌人造成的伤害提高 x20%。\n\nTags: 神射手, 刺杀, 群控, 攻击速度, 伤害.",
			"zhTW": "以射手或割喉技能對近距離敵人造成傷害時,每類技能可使攻擊速度提高 +10%,持續 8 秒。\n\n當同時獲得兩種攻擊速度加成效果時,你對受控場效果的敵人造成的傷害提高 x20%。\n\nTags: 射手, 割喉, 控場, 攻擊速度, 傷害."
},
		id: 119,
		maxPoints: 1,
		x: -564.571,
		y: 251.22
	},
	"Victimize": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Dealing direct damage to a Vulnerable enemy has up to a 30% chance to cause an explosion, dealing 23% of the original damage to them and surrounding enemies.

Tags: Vulnerable, Damage, Physical, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Bestrafen",
			"esES": "Victimizar",
			"esMX": "Victimizar",
			"frFR": "Victimisation",
			"itIT": "Perseguitare",
			"jaJP": "加害",
			"koKR": "희생",
			"plPL": "Krzywda",
			"ptBR": "Vitimizar",
			"ruRU": "Жестокая расправа",
			"zhCN": "迫害",
			"zhTW": "無情凌虐"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr einem verwundbaren Gegner direkten Schaden zufügt, besteht eine Chance von bis zu 30%, eine Explosion auszulösen, die ihm und Gegnern in der Nähe 23% des ursprünglichen Schadens zufügt.\n\nTags: Verwundbar, Schaden, Physisch, Glückstreffer.",
			"esES": "Golpe de suerte: Infligir daño directo a un enemigo vulnerable tiene hasta un 30% de probabilidad de provocar una explosión que inflige un 23% del daño original a él y a los enemigos cercanos.\n\nTags: Vulnerable, Daño, Física, Golpe de suerte.",
			"esMX": "Golpe afortunado: Infligir daño directo a un enemigo vulnerable tiene hasta un 30% de probabilidad de provocar una explosión, lo que inflige un 23% del daño original a ese enemigo y a los enemigos circundantes.\n\nTags: Vulnerable, Daño, Física, Golpe afortunado.",
			"frFR": "Coup de chance: en infligeant des dégâts directs à une cible vulnérable, vous avez jusqu'à 30% de chances de provoquer une explosion qui inflige 23% des dégâts initiaux à la cible et aux adversaires à proximité.\n\nTags: Vulnérable, Dégâts, Dégâts physiques, Coup de chance.",
			"itIT": "Colpo fortunato: i danni diretti inflitti a un nemico vulnerabile hanno fino al 30% di probabilità di causare un'esplosione che infligge il 23% dei danni originali a esso e ai nemici circostanti.\n\nTags: Vulnerabilità, Danni, Fisico, Colpo fortunato.",
			"jaJP": "幸運の一撃: 脆弱状態の敵に対する直接ダメージが最大30%の確率で爆発を起こし、元々のダメージの23%をその敵と付近の敵に与える。\n\nTags: 脆弱, ダメージ, 物理, 幸運の一撃.",
			"koKR": "행운의 적중: 취약 상태의 적에게 직접 피해를 주면 최대 30% 확률로 폭발을 일으켜 대상과 주변 적들에게 원래 피해의 23%에 해당하는 피해를 줍니다.\n\nTags: 취약, 피해, 물리, 행운의 적중.",
			"plPL": "Szczęśliwy traf: Zadanie bezpośrednich obrażeń odsłoniętemu wrogowi ma maksymalnie 30% szans na wywołanie eksplozji zadającej mu oraz pobliskim wrogom 23% pierwotnych obrażeń.\n\nTags: Odsłonięcie, Obrażenia, Fizyczne, Szczęśliwy Traf.",
			"ptBR": "Golpe de Sorte: Causar dano direto a um inimigo vulnerável tem até 30% de chance de provocar uma explosão, causando 23% do dano original a ele e a inimigos ao redor.\n\nTags: Vulnerável, Dano, Física, Golpe de Sorte.",
			"ruRU": "Удачный удар: прямой урон уязвимому противнику с вероятностью до 30% вызывает взрыв, наносящий 23% изначального урона цели и окружающим противникам.\n\nTags: Уязвимость, Урон, Физический урон, Удачный удар.",
			"zhCN": "幸运一击: 对一名易伤状态下的敌人造成伤害最多有 30% 几率产生爆炸, 对该敌人和其周围的敌人造成初始伤害的 23%。\n\nTags: 易伤, 伤害, 物理, 幸运一击.",
			"zhTW": "幸運觸發:對易傷敵人造成直接傷害時,最高有 30% 機率引發爆炸,對其和周圍敵人造成原本傷害的 23%。\n\nTags: 易傷, 傷害, 物理, 幸運觸發."
},
		id: 120,
		maxPoints: 1,
		x: 493.144,
		y: 247.36
	},
	"Exposure": {
		connections: [ "Key Passive" ],
		description: `Lucky Hit: Dealing direct damage to an enemy affected by a Trap Skill has up to a 25% chance to:
• Reduce the active Cooldowns of your Trap Skills by 20%
• Drop a cluster of exploding Stun Grenades that deal 40% total Physical damage and Stun enemies for 0.5 seconds

Tags: Trap, Grenade, Damage, Physical, Cooldown, Crowd Control, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Belastung",
			"esES": "Exposición",
			"esMX": "Exposición",
			"frFR": "Exposition",
			"itIT": "Esposizione",
			"jaJP": "露呈",
			"koKR": "노출",
			"plPL": "Obnażenie",
			"ptBR": "Exposição",
			"ruRU": "Вредное воздействие",
			"zhCN": "暴露",
			"zhTW": "連環誘陷"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Wenn Ihr einem Gegner, der von einer Fallenfertigkeit betroffen ist, direkten Schaden zufügt, besteht eine Chance von 25%:\n• die aktiven Abklingzeiten Eurer Fallenfertigkeiten um 20% zu reduzieren\n• Blendgranaten zu hinterlassen, die explodieren, insgesamt 40% physischen Schaden verursachen und Gegner 0.5 Sek. lang betäuben\n\nTags: Falle, Granate, Schaden, Physisch, Abklingzeit, Kontrollverlust, Glückstreffer.",
			"esES": "Golpe de suerte: Infligir daño directo a un enemigo afectado por una habilidad de trampa tiene hasta un 25% de probabilidad de:\n• Reducir un 20% los tiempos de reutilización activos de tus habilidades de trampa\n• Soltar un racimo de granadas aturdidoras que explotan, infligen un total de 40% daño físico y aturden a los enemigos durante 0.5 s\n\nTags: Trampa, Granada, Daño, Física, Tiempo de reutilización, Control de masas, Golpe de suerte.",
			"esMX": "Golpe afortunado: Al infligir daño directo a un enemigo afectado por una habilidad de Trampa, obtienes hasta un 25% de probabilidad de:\n• Reducir las recuperaciones activas de tus habilidades de Trampa un 20%\n• Soltar un cúmulo de Granadas Aturdidoras explosivas que infligen 40% de daño físico total y aturden a los enemigos durante 0.5 segundos.\n\nTags: Trampa, Granadas, Daño, Física, Recuperación, Control de multitudes, Golpe afortunado.",
			"frFR": "Coup de chance: en infligeant des dégâts directs à une cible affectée par une compétence de piège, vous avez jusqu'à 25% de chances de :\n• réduire les temps de recharge actifs de vos compétences de piège de 20%\n• générer des grenades étourdissantes qui explosent en infligeant un total de 40% points de dégâts physiques et en étourdissant les cibles pendant 0.5 s.\n\nTags: Piège, Grenade, Dégâts, Dégâts physiques, Temps de recharge, Perte de contrôle, Coup de chance.",
			"itIT": "Colpo fortunato: i danni diretti inflitti ai nemici affetti da un'abilità di trappole hanno fino al 25% di probabilità di:\n• ridurre i tempi di recupero attivi delle tue abilità di trappole del 20%\n• rilasciare una salva di Bombe Stordenti che esplodono e infliggono 40% danni fisici totali e stordiscono i nemici per 0.5 s.\n\nTags: Trappole, Bombe, Danni, Fisico, Tempo di recupero, Effetti debilitanti, Colpo fortunato.",
			"jaJP": "幸運の一撃: 罠スキルの影響を受けている敵に直接ダメージを与えると、最大25%の確率で以下の効果が発生する:\n• 自分の罠スキルの発生中のクールダウンが20%減少する。\n• 大量のスタン・グレネードを落として爆発させ、合計で40%の物理ダメージを与えて0.5秒間にわたりスタンさせる。\n\nTags: 罠, グレネード, ダメージ, 物理, クールダウン, 操作障害効果, 幸運の一撃.",
			"koKR": "행운의 적중: 덫 기술의 영향을 받는 적에게 직접 피해를 주면 최대 25% 확률로\n• 재사용 대기 중인 덫 기술의 재사용 대기시간이 20% 감소합니다.\n• 섬광 수류탄 더미를 떨어뜨립니다. 수류탄은 폭발하며 총 40%의 물리 피해를 주고 적들을 0.5초 동안 기절시킵니다.\n\nTags: 덫, 수류탄, 피해, 물리, 재사용 대기시간, 군중 제어, 행운의 적중.",
			"plPL": "Szczęśliwy traf: Zadawanie bezpośrednich obrażeń wrogom pod wpływem umiejętności Pułapek ma do 25% szans na:\n• skrócenie aktywnych czasów odnowienia umiejętności Pułapek o 20%\n• upuszczenie wiązki Granatów Ogłuszających, które wybuchają, zadając 40% całkowitych obrażeń Fizycznych i ogłuszając wrogów na 0.5 sek.\n\nTags: Pułapki, Granat, Obrażenia, Fizyczne, Odnowienie, Ograniczanie Kontroli, Szczęśliwy Traf.",
			"ptBR": "Golpe de Sorte: Causar dano direto a um inimigo afetado por uma habilidade de Armadilha tem até 25% de chance de:\n• Reduzir as recargas ativas das suas habilidades de Armadilha em 20%\n• Largar um conjunto de Granadas Atordoantes que explodem, causando 40% de dano físico total e atordoando inimigos por 0.5 segundos.\n\nTags: Armadilha, Granada, Dano, Física, Recarga, Controle de Grupo, Golpe de Sorte.",
			"ruRU": "Удачный урон: когда вы наносите прямой урон противнику, находящемуся под действием ловушки, с вероятностью до 25% срабатывают эффекты:\n• Время восстановления ваших ловушек сокращается на 20%\n• Вы бросаете связку оглушающих гранат, наносящих 40% ед. физического урона и оглушающих противников на 0.5 сек.\n\nTags: Ловушка, Граната, Урон, Физический урон, Время восстановления, Контроль, Удачный удар.",
			"zhCN": "幸运一击: 对一名受陷阱技能影响的敌人造成直接伤害时, 最多有 25% 几率\n• 使你的陷阱技能的剩余冷却时间缩短 20%\n• 留下一串会爆炸的昏迷手雷, 造成总计 40% 点物理伤害并击晕敌人 0.5 秒。\n\nTags: 陷阱, 手雷, 伤害, 物理, 冷却时间, 群控, 幸运一击.",
			"zhTW": "幸運觸發:對受陷阱技能影響的敵人造成直接傷害,最高有 25% 機率:\n• 你的陷阱技能現有冷卻時間縮短 20%\n• 掉下一堆會爆炸的震撼榴彈,造成 40% 點物理總傷害,並擊昏敵人 0.5 秒\n\nTags: 陷阱, 榴彈, 傷害, 物理, 冷卻時間, 控場, 幸運觸發."
},
		id: 121,
		maxPoints: 1,
		x: 779.668,
		y: -2.585
	},
	"Precision": {
		connections: [ "Key Passive" ],
		description: `Critical Strikes with Marksman Skills grant you Precision. You gain x4% increased Critical Strike Damage per stack of Precision, up to a maximum of x20%.

When you reach maximum Precision, your next Marksman Skill is a guaranteed Critical Strike that deals x40% increased Critical Strike Damage, then consumes all stacks of Precision.

Tags: Marksman, Critical Strikes, Damage.`,
		nameLocalized: {
			"deDE": "Präzision",
			"esES": "Precisión",
			"esMX": "Precisión",
			"frFR": "Précision",
			"itIT": "Precisione",
			"jaJP": "精度",
			"koKR": "정밀도",
			"plPL": "Precyzja",
			"ptBR": "Precisão",
			"ruRU": "Точность",
			"zhCN": "精准",
			"zhTW": "精準射擊"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Präzisionsfertigkeiten verleihen Euch Präzision. Ihr erhaltet x4% höheren kritischen Trefferschaden pro Stapel Präzision, bis maximal x20%.\n\nWenn Ihr maximale Präzision erreicht habt, landet Eure nächste Präzisionsfertigkeit garantiert einen kritischen Treffer, der x40% höheren kritischen Trefferschaden verursacht und alle Stapel Präzision verbraucht.\n\nTags: Präzision, Kritische Treffer, Schaden.",
			"esES": "Los golpes críticos con habilidades de tirador te otorgan precisión. Obtienes un x4% más de daño de golpe crítico por acumulación de precisión, hasta un máximo de un x20%.\n\nAl alcanzar el máximo de precisión, tu siguiente habilidad de tirador es un golpe crítico garantizado que inflige un x40% más de daño de golpe crítico y consume todas las acumulaciones de precisión.\n\nTags: Tirador, Golpes críticos, Daño.",
			"esMX": "Los golpes críticos con habilidades de Tirador te otorgan Precisión. Obtienes un x4% más de daño de golpe crítico por acumulación de Precisión, hasta un máximo del x20%.\n\nAl llegar a la Precisión máxima, tu siguiente habilidad de Tirador será un golpe crítico garantizado que inflige un x40% más de daño de golpe crítico, y luego consume todas las acumulaciones de Precisión.\n\nTags: Tirador, Golpes críticos, Daño.",
			"frFR": "Les coups critiques infligés avec des compétences de tir d'élite vous confèrent Précision. Vos dégâts critiques sont augmentés de x4% par cumul de Précision, jusqu'à un maximum de x20%.\n\nLorsque vous atteignez la limite maximale de Précision, votre prochaine compétence de tir d'élite est un coup critique garanti qui inflige x40% de dégâts critiques supplémentaires et consomme tous les cumuls de Précision.\n\nTags: Tir d'élite, Coups critiques, Dégâts.",
			"itIT": "I colpi critici con le abilità Tiro di precisione ti conferiscono precisione. Infliggi il x4% di danni critici aggiuntivi per ogni accumulo di precisione, fino a un massimo del x20%.\n\nQuando raggiungi il massimo di precisione, la tua successiva abilità Tiro di precisione è un colpo critico garantito che infligge il x40% di danni critici aggiuntivi e consuma tutti gli accumuli di precisione.\n\nTags: Tiro di precisione, Colpi critici, Danni.",
			"jaJP": "射手スキルでクリティカルを出すと、精度を獲得する。精度が1つ蓄積するごとに、クリティカルダメージがx4%増加する。増加量は最大でx20%。\n\n精度が上限に達すると、次に使用した射手スキルが必ずクリティカルとなりx40%増加したクリティカルダメージを与えた後、蓄積していた精度をすべて消費する。\n\nTags: 射手, クリティカルヒット, ダメージ.",
			"koKR": "명사수 기술이 극대화 적중 시 자신의 정밀도가 증가합니다. 정밀도 중첩당 극대화 피해가 x4%만큼, 최대 x20%까지 증가합니다.\n\n정밀도가 최대에 도달하면, 다음 명사수 기술은 확정적으로 극대화 적중하여 x40% 증가한 극대화 피해를 주며, 이때 정밀도 중첩은 모두 소모됩니다.\n\nTags: 명사수, 극대화, 피해.",
			"plPL": "Trafienia krytyczne przy pomocy umiejętności Strzelectwa zapewniają ci precyzję. Zyskujesz premię x4% do obrażeń od trafień krytycznych za każdy poziom kumulacji precyzji, maksymalnie do x20%.\n\nPo osiągnięciu maksymalnej precyzji twoja kolejna umiejętność Strzelectwa wywoła gwarantowane trafienie krytyczne i zada przy tym obrażenia zwiększone o x40%, a następnie pochłonie wszystkie poziomy kumulacji precyzji.\n\nTags: Strzelectwo, Trafienia Krytyczne, Obrażenia.",
			"ptBR": "Acertos críticos com habilidades de Atirador concedem Precisão. Você recebe 4% de dano de acerto crítico aumentado por aplicação de Precisão, até o máximo de 20%.\n\nQuando você atinge o máximo de Precisão, sua próxima habilidade de Atirador é um acerto crítico garantido que causa 40% de dano de acerto crítico aumentado e consome todas as aplicações de Precisão.\n\nTags: Atirador, Acertos Críticos, Dano.",
			"ruRU": "Критические эффекты умений стрелка повышают вашу точность. За каждый эффект точности ваш критический урон увеличивается на x4% вплоть до x20%.\n\nКогда вы достигаете максимального показателя точности, ваше следующее умение стрелка гарантированно наносит критический урон, увеличенный на x40%. После этого все эффекты точности снимаются.\n\nTags: Стрелок, Критические удары, Урон.",
			"zhCN": "神射手技能暴击时使你获得精准。每层精准使你的暴击伤害提高 x4%, 最多提高 x20%。\n\n精准 层数达到最大时, 你的下一个神射手技能必定暴击并且造成的暴击伤害提高 x40%, 并消耗所有精准 层数。\n\nTags: 神射手, 暴击, 伤害.",
			"zhTW": "射手技能爆擊時會賦予你精準射擊效果。每層精準射擊可使你的爆擊傷害提高 x4%,最多可提高 x20%。\n\n當你達到精準射擊的堆疊上限時,你的下一個射手技能必定爆擊,且造成的爆擊傷害提高 x40%,之後消耗所有精準射擊的堆疊層數。\n\nTags: 射手, 爆擊, 傷害."
},
		id: 122,
		maxPoints: 1,
		x: 3.252,
		y: 383.425
	},
};

export { rogueData };