const csvData = [
  {
    "number": 1,
    "word": "necrológico",
    "definition": "necrológico, ca adj.1.新近死亡者的.2.死者传略的."
  },
  {
    "number": 2,
    "word": "irrisorio",
    "definition": "irrisorio, ria adj. 1.可笑的. 2.«cantidad，precio, ración» 微不足道的."
  },
  {
    "number": 3,
    "word": "tratante",
    "definition": "m. 《en》 商贩： ~ en granos 粮商."
  },
  {
    "number": 4,
    "word": "trocar",
    "definition": "tr. 1.《por》 交换, 调换： ~ un caballo por otro 以马换马. (也用作自复动词): ~ se los papeles 调换位置. 2.兑换(钱币）. 3.《en》 使改变， 使变为， 使变成： ~ el amor en odio 变爱为恨. (也用作自复动词)： ~ se de color 改变颜色. 4.弄错； 曲解. 5.呕吐. 6.[秘鲁方言] 变卖. |→ m. 【医】（穿剌用的）套针， 套管针."
  },
  {
    "number": 5,
    "word": "preñado",
    "definition": "preñado,da adj.1.怀孕的，有孕的. (也用作阴性名词)2.【转】有凸肚的（墙壁）.3.«de»【转】充满（某物）的：nubes ~ as de amenazas 眼看就下雨的乌云.un porvenir ~ de incógnitas 深奥莫测的前景.4.«de»【转】孕育着（某物）的，包藏着（某物）的.|→ m.1.妊娠，怀孕.2.妊娠期，怀孕期.3.胎儿."
  },
  {
    "number": 6,
    "word": "desvirtuar",
    "definition": "tr. 1. 使失去特性， 使失去效力， 使失去价值， 使失去作用， 使变质：La humedad no desvirtúa ese producto. 那种产品不怕受潮.  (也用作自复动词):  Los licores se desvirtúan al aire. 酒不密封要变质. 2. 抵销（某种作用）."
  },
  {
    "number": 7,
    "word": "hurtar",
    "definition": "tr. 1.扒窃， 偷窃.  2.克扣（分量等）. 3.剽窃. 4.（海，河) 侵蚀 (岸边）. 5.遮掩， 藏匿. 6.躲闪， 躲避： ~ el cuerpo al peligro 躲避危险.  (也用作自复动词) ： ~se a las responsabili - dades 逃避责任."
  },
  {
    "number": 8,
    "word": "proscenio",
    "definition": "m.舞台前部."
  },
  {
    "number": 9,
    "word": "parvulario",
    "definition": "m.幼儿园"
  },
  {
    "number": 10,
    "word": "desorejar",
    "definition": "tr. 1. 刵， 割掉耳朵. 2. 打掉把儿."
  },
  {
    "number": 11,
    "word": "astucia",
    "definition": "f. 1. 狡猾, 狡黠. 2. 诡计."
  },
  {
    "number": 12,
    "word": "comprensivo",
    "definition": "comprensivo, va adj.1.有理解力；聪明的.2.能体谅人的，宽厚的.3.«de» 梦包括的，包含的：un edificio ~ de doscientas habitaciones 一座有二百个房间的大楼."
  },
  {
    "number": 13,
    "word": "grandilocuente",
    "definition": "grandilocuente ；grandflocuo, cua adj.夸张的，浮夸的."
  },
  {
    "number": 14,
    "word": "omoplato",
    "definition": "m. 肩胛骨"
  },
  {
    "number": 15,
    "word": "sesgado",
    "definition": "sesgado, da adj. 1.平静的，安静的. 2.偏着的，斜着的."
  },
  {
    "number": 16,
    "word": "latigazo",
    "definition": "m. 1.鞭打. 2.鞭子响声. 3.【转】意外打击. 4.【转】鞭策；鞭挞. 5.【俗】口 [量词，一口饮用的酒量]."
  },
  {
    "number": 17,
    "word": "vírico",
    "definition": "病毒性的"
  },
  {
    "number": 18,
    "word": "balaustre",
    "definition": "balaustre, balaústre m.1.栏杆柱. 2.[拉丁美洲方言] 参见 palustre."
  },
  {
    "number": 19,
    "word": "decano",
    "definition": "m. 1. (社团等的） 元老； 2. 系主任."
  },
  {
    "number": 20,
    "word": "meditabundo",
    "definition": "meditabundo, da adj.沉思的."
  },
  {
    "number": 21,
    "word": "estampado",
    "definition": "estampado, da adj. 1.印花的：tela ~ a  印花布. un ves- tido ~ 一件印花布衣服. 2.模制的，模压的. |→ m. 1.印花布. 2.模制的物品，模压的物品. 3.印刷. 4.【印】(封面的）印制，烫金."
  },
  {
    "number": 22,
    "word": "untar",
    "definition": "tr. 1.涂， 抹， 搽， 蘸： ~ el pan con mantequilla 往面包上涂黄油.  ~ el cuerpo con una pomada 往身上抹药.  ~ un árbol con pez 往树上涂沥青.  ~ el pan en la salsa 把面包在菜汤里蘸一下. 2.弄脏， 沾污. (也用作自复动词): Te has untado los dedos de tinta. 你的手指沾上了墨水. 3.【转】收买， 贿赂. |→ prnl. 【转， 口】1.参与（不道德行为）. 2. 揩油， 自肥， 侵呑， 中饱私囊."
  },
  {
    "number": 23,
    "word": "renquear",
    "definition": "intr.1. 跛行， 瘸行. 2. 【转】 (忍受着病痛等的折磨) 勉强活着."
  },
  {
    "number": 24,
    "word": "aspaventar",
    "definition": "tr. 吓魄, 恐吓."
  },
  {
    "number": 25,
    "word": "aspaviento",
    "definition": "m. 咋唬, 大惊小怪, 虚张声势."
  },
  {
    "number": 26,
    "word": "evacuar",
    "definition": "tr.1.腾出，空出，撤出（某处）： ~la casa (la al-dea) 腾出房子 (村子).2.【军】撤走： ~heridos 撤走伤员. ~ el lugar de ancianos, mujeres y niños 把老人、妇女和小孩撤离某地.3.【生理】排泄： ~el vientre 大便.  (也用作不及物动词) ： El enfermo no ha evacuado toda la semana. 病人整整一周没大便了.4.【医】导液，排液：El médico evacúa el tumor.医生排出瘤中液体.5.«diligencia，gestión, trámite» 办理，处理，料理."
  },
  {
    "number": 27,
    "word": "pernoctar",
    "definition": "intr.过夜：Obtuve acomodación para ~ en un hotel cercano al aeropuerto.我在机场附近的一家旅馆里过了夜."
  },
  {
    "number": 28,
    "word": "descabellado",
    "definition": "descabellado, da adj. 【转】 不理智的， 不明智的. "
  },
  {
    "number": 29,
    "word": "lacerar",
    "definition": "tr. 1.弄伤,损伤，撕裂. 2.«honra，reputación» 损害. 3.诋毁. 4.挑拔，使不和. 5.折磨，使痛苦. |→ intr. 受折磨，受苦."
  },
  {
    "number": 30,
    "word": "remordimiento",
    "definition": "m.«tener» 内疚, 良心不安. U.m.enpl."
  },
  {
    "number": 31,
    "word": "ingle",
    "definition": "f.【解】 腹股沟， 鼠蹊."
  },
  {
    "number": 32,
    "word": "lencería",
    "definition": "f.1.【集】亚麻布. 2.亚麻布业；亚麻布店.3.(城镇中的）亚麻布店街. 4.亚麻布制品[指女内衣、床单、桌布等]. 5.亚麻布制品加工. 6.亚麻布制品店.7.（医院等处的） 单布存放处."
  },
  {
    "number": 33,
    "word": "Consuetudinario",
    "definition": "ria adj.1.习惯的,惯例上的：derecho ~ 习惯法.2.【神】经常犯某种过错的."
  },
  {
    "number": 34,
    "word": "diluvio",
    "definition": "m. 1. 倾盆大雨. 2. 洪水. 3. （«圣经» 中讲的） 洪荒. 4. 【转】 大量：un ~de preguntas 一大堆问题. 5. 【转， 口】 混乱."
  },
  {
    "number": 35,
    "word": "compungido",
    "definition": "compungido, da adj.内疚的；难过的."
  },
  {
    "number": 36,
    "word": "fosa",
    "definition": "f.1.（在地上挖的）坑.2.墓穴.3.【解】窝，凹: ~ s na-sales 鼻腔. ~ común 公用墓穴；合葬穴. ~ ~ navicular 【解】舟状窝. ~ séptica 化粪池."
  },
  {
    "number": 37,
    "word": "lienzo",
    "definition": "m. 1.本色棉布，粗棉布. 2.麻布. 3.手帕. 4.【美】画布. 5.【引】油画：un ~ de Goya 戈雅的一幅油画. 6.【军， 建】墙. 7.[拉丁美洲方言] 围墙. ciertos ~ s [危地马拉方言], [洪都拉斯方言]【转，口】 某人：Qpe no lo sepa ciertos ~ s. 这件事别让别人知道. ~ crudo 参见 ~ moreno.  ~ curado 漂白布. ~ moreno 本色布."
  },
  {
    "number": 38,
    "word": "rebosante",
    "definition": "adj. «de» 1. 充满着(某物) 的. 2. 【转】 洋溢着(某物) 的： ~ de alegría 满心欢喜的.  ~ de salud 非常健康的."
  },
  {
    "number": 39,
    "word": "sandez",
    "definition": "f. 1.愚蠢，蠢笨. 2.愚蠢言行."
  },
  {
    "number": 40,
    "word": "triturar",
    "definition": "tr. 1.打碎， 磨碎， 粉碎， 破碎： ~ la piedra 砸石头. ~ la caña de azúcar 榨甘蔗. 2.咀嚼. 3.【转】折磨. 4.【转】苛责."
  },
  {
    "number": 41,
    "word": "rebalsar",
    "definition": "tr.使(水、液体) 积存. (也用作自复动词)"
  },
  {
    "number": 42,
    "word": "injurioso",
    "definition": "injurioso，sa adj. 侮辱性的，辱骂性的."
  },
  {
    "number": 43,
    "word": "apearse",
    "definition": "|→ prnl. 1. 下车, 下马.  (也用作不及物动词) 2. 【转, 口】放弃己见, 改变想法. 3. 落脚, 下榻, 投宿."
  },
  {
    "number": 44,
    "word": "capcioso",
    "definition": "capcioso, sa adj. 诡诈的."
  },
  {
    "number": 45,
    "word": "cáustico",
    "definition": "cáustico, ca adj. 1.【化，医】苛性的，腐蚀性的：remedio ~ 苛性剂，腐蚀剂. 2.讥刺的，刻薄的，挖苦的. |→ m. 【医】 1.苛性剂，腐蚀剂. 2.起疱剂."
  },
  {
    "number": 46,
    "word": "resollar",
    "definition": "intr.1. 呼吸. 2. 喘息， 急促呼吸. 3. 【转，口】 说话, 吭声[用于否定句] : Me escuchó hasta el final sin ~ . 他一声未吭地听我讲完. 4. 【转，口】 (长期沉默的人) 打破沉寂. 5. 【转，口】 (长期消声匿迹的人) 重新又有消息， 重新又露踪迹."
  },
  {
    "number": 47,
    "word": "pactar",
    "definition": "tr.«con, entre»商定，议定，协议： ~ una tregua 协议停战.|→intr.妥协，让步."
  },
  {
    "number": 48,
    "word": "menester",
    "definition": "m. 1.需要，必须：Es ~ decírselo cuanto antes. 应该尽快把那件事情告诉他. Es ~ que vengas ahora mismo. 需要你马上来. Dar buen consejo a los que lo han (de) ~ . 有人需要忠告，那就应该帮他们出些好主意.2.需要做的事情:Salió para un ~ . 他有事出去了. 3.工作，活计，营生:Sería mejor que se ocupase en otros ~es más útiles. 他最好还是干点别的更为有益的事情.4.pl.大小便. 5.pl.【口】器具,用具.haber ~ de una cosa需要某物"
  },
  {
    "number": 49,
    "word": "recabar",
    "definition": "tr. «de» 1. 求得， 要到. 2. «responsabilidad, libertad,independencia, derechos» 要求."
  },
  {
    "number": 50,
    "word": "desmejorar",
    "definition": "tr. 损坏.|→ intr.-prnl. 身体变坏."
  },
  {
    "number": 51,
    "word": "sonámbulo",
    "definition": "sonámbulo, la adj.-s. 梦行症的；梦行症患者."
  },
  {
    "number": 52,
    "word": "atinar",
    "definition": "intr. 1. «a, con» 摸到, 摸着:  ~ al estribo 摸索着踏上脚蹬. 2. «a» 击中 (目标) : ~ al blanco 打中靶子. 3. «con» (侥倖地) 找到: Atiné en seguida con la casa. 我一下子就找到了那座房子.  (也用作及物动词): ~ el camino 找到路. 4. «con, en» 猜对, 猜中；找出 (答案等) :  ~ con la solución 找出解决办法. 5. «a，con, en» 做得正确, 做得好, 做得对: Has atinado al coger  el Paraguas. 你的雨伞带对了."
  },
  {
    "number": 53,
    "word": "larguirucho",
    "definition": "larguirucho, cha adj.【口】瘦高的（人)；细长的（物件). "
  },
  {
    "number": 54,
    "word": "abatimiento",
    "definition": "m. 1. s.de abatir (se). 2. 沮丧, 蒌靡不振. 3. 【海】偏流, 偏航."
  },
  {
    "number": 55,
    "word": "renuente",
    "definition": "adj.1. (对某事) 抵触的， 反感的， 不愿意顺从的. 2. 难操作的， 难制作的."
  },
  {
    "number": 56,
    "word": "reanudar",
    "definition": "tr.继续， 重新开始： Reanudamos la marcha después de un breve descanso. 稍事休息后， 我们又继续上路了."
  },
  {
    "number": 57,
    "word": "dable",
    "definition": "adj. 可能的， 办得到的； 允许的. "
  },
  {
    "number": 58,
    "word": "prorrogar",
    "definition": "tr.1. 延长： ~ el plazo de un vencimiento  para la presentación de instancias  延长到期的期限. Decidimos ~ una semana las vacaciones de verano. 我们决定把暑假延长一周. 2. 延期， 推迟."
  },
  {
    "number": 59,
    "word": "convenir",
    "definition": "intr.1. 聚集，汇集.2. «en»  共同决定，商定，约定；达成协议：Hemos convenido en vernos el próximo domingo. 我们约定下星期日见面.No han convenido todavía en donde realizar la conferencia. 会议的地点还没有决定.(也用作及物动词)：Ambos gobiernos convienen establecer relaciones diplomáticas. 两国政府决定建立外交关系.(也用作自复动词)：No nos hemos convenido todavía en las condiciones. 我们还没有讲妥条件.3. «en» 一致认为，一致相信：Ambas partes convienen en que la actual situación internacional es favorable a los pueblos del mundo. 双方一致认为当前的国际形势对世界各国人民是有利的. 4. «en» 同意，赞成： Convengo en tratar  en que trataremos  ese problema en otra ocasión. 我同意下次再谈那个问题.5. «con»（与女人）同居，姘居.6. «a»  适合，适宜：No te conviene este trabajo. 这个工作对你不合适.Le conviene descansar más. 他需要多休息.Su propuesta no conviene a nuestro caso. 他的建议不适合我们的情况. No conviene perder tiempo en eso. 不值得在那方面花时间.7. «con» 相符，相一致：Conviene lo que dice él con lo que ya sabíamos. 他说的与我们所知道的相符.conviene a saber即，就是."
  },
  {
    "number": 60,
    "word": "necio",
    "definition": "necio, cia adj.1.愚蠢的.2.无知的.3.固执的.4.狂妄的，虚荣的.a ~ as 愚蠢地."
  },
  {
    "number": 61,
    "word": "badulaque",
    "definition": "adj. 1. 不规矩的；说谎的. 2. 鲁莽的, 愚蠢的.|→m. 1. (旧时的) 一种化装品. 2. 【古】炒 (牛、羊的) 杂碎. 3. 【转, 口】鲁莽愚蠢的人. 4. [拉丁美洲方言] 流氓, 无赖."
  },
  {
    "number": 62,
    "word": "rellano",
    "definition": "m.1. 楼梯平台. 2. 坡间平地."
  },
  {
    "number": 63,
    "word": "alfeñique",
    "definition": "m. 1. 糖果条. 2. 【转，口】纤弱的人, 娇嫩的人. 3. 【转, 口】假斯文, 娇态；造作."
  },
  {
    "number": 64,
    "word": "siniestrado",
    "definition": "siniestrado, da adj. 1.遭难的，受害的. 2.【纹】左侧的."
  },
  {
    "number": 65,
    "word": "barbudo",
    "definition": "adj.1.胡子浓密的，大胡子的. 2.有胡子的. |→ m. 1. [拉丁美洲方言]—种鱼 [Trichidium plumieri; Diñemos venus-tus]. 2.新芽."
  },
  {
    "number": 66,
    "word": "rebelarse",
    "definition": "prnl. «contra» 1. 反叛， 造反； 反抗， 抵抗； 抗拒. 2. 断绝交往."
  },
  {
    "number": 67,
    "word": "incólume",
    "definition": "adj. 安然无恙的，完好无损的：salir ~ de un peli- gro 安全脱险. Las vidrieras salieron ~ s del incendio. 火灾之后，窗户玻璃居然完好无损."
  },
  {
    "number": 68,
    "word": "divulgar",
    "definition": "tr. 公布； 传播， 普及： ~un secreto 公布一项秘密.  ~ el marxismo 传播马克思主义.  ~ conocimientos científicos y culturales 普及科学文化知识."
  },
  {
    "number": 69,
    "word": "amniótico",
    "definition": "amniótico, ca adj.【动】羊膜的."
  },
  {
    "number": 70,
    "word": "facsimilar",
    "definition": "adj.摹写的."
  },
  {
    "number": 71,
    "word": "torniquete",
    "definition": "m. 1.（某些地方入口处的）回转栅栏： ~ de la entrada del metro 地铁入口处的回转栅栏. 2.曲柄， 肘形柄. 3.【医】止血带， 压脉器."
  },
  {
    "number": 72,
    "word": "ponderar",
    "definition": "tr.1.称颂，称赞：Me han ponderado mucho esa novela.他们向我把那部小说大大赞扬一番.Le ponderan de inteligente.人们都称赞他聪明.2.称量.3.衡量，权衡.4.使平衡."
  },
  {
    "number": 73,
    "word": "pajizo",
    "definition": "pajizo, za adj.1.麦秸的，稻草的：techo ~ 草屋顶.2.麦秸色的，稻草色的：tela ~ a 麦秆色的布.3.象麦秸的，象稻草的."
  },
  {
    "number": 74,
    "word": "baldosa",
    "definition": "f. 1.一种古弦乐器. 2.【建】铺地细砖."
  },
  {
    "number": 75,
    "word": "arrecife",
    "definition": "m. 1. 路, 石铺路, 公路. 2. 路基. 3. 礁, 礁石： ~ de coral 珊瑚礁."
  },
  {
    "number": 76,
    "word": "pulular",
    "definition": "intr.1. 出芽， 发芽. 2. 产生， 生出. 3. (蛆、虫等) 繁衍， 滋生. 4. 【转】 聚集， 群集， 穈集."
  },
  {
    "number": 77,
    "word": "rebatir",
    "definition": "tr.1. (猛烈地或反复地) 击， 打， 敲， 拍. 2. 迎击； 击退. 3. «con» 驳斥， 驳倒， 驳回. 4. 拒绝(建议) . 5. 加强. 6. «de» 扣除. 7. 【击剑】 挡开， 拨开."
  },
  {
    "number": 78,
    "word": "escatología",
    "definition": "f. 1.粪便学. 2.脏话，污秽的言词. 3.【宗】冥世观，冥世学[迷信的人对死后进入的世界里面的生活的相信和研究]."
  },
  {
    "number": 79,
    "word": "lid",
    "definition": "f. 1.战斗，搏斗，争斗，斗争. 2.【转】争论，论战. 3.pl. 活动：experto en esas ~ es 擅长那种事情的. en buena ~  堂堂正正地，用正当手段."
  },
  {
    "number": 80,
    "word": "desasimiento",
    "definition": "m. s.de1. desasir (se). 2. 【转】 慷慨， 不吝惜."
  },
  {
    "number": 81,
    "word": "abyección",
    "definition": "f.落魄"
  },
  {
    "number": 82,
    "word": "holgorio",
    "definition": "m.欢闹"
  },
  {
    "number": 83,
    "word": "arremolinar",
    "definition": "arremolinar  vt.  起旋风vr.  拥挤"
  },
  {
    "number": 84,
    "word": "aupar",
    "definition": "tr. 1. 【口】举起, 托起： ~ al niño 把孩子举起来. 2. 搀扶 (人) . 上到高处. 3. 【转】提拔."
  },
  {
    "number": 85,
    "word": "alud",
    "definition": "m. 1. 雪崩. 2. 【转】 (雪崩似的) 冲击, 压下： avanzar como un ~ 以排山倒海之势向前推进."
  },
  {
    "number": 86,
    "word": "zancadilla",
    "definition": "f. 《armar, echar, poner》 1.(为把人弄倒而使的 绊. 2.【转， 口】（为打倒某人而使用的）诡计， 圈套."
  },
  {
    "number": 87,
    "word": "aunar",
    "definition": "tr. 使一致, 使统一；使联合:  ~ criterios 统一思想. ~ voluntades 统一意志.  ~ esfuerzos 共同努力.|→ prnl. «con» 统一, 联合, 团结： Se aunaron las fuerzas patrióticas. 各爱国力量联合起来了."
  },
  {
    "number": 88,
    "word": "revancha",
    "definition": "f.报复， 复仇. tomar la ~ 报仇， 雪恨."
  },
  {
    "number": 89,
    "word": "algazara",
    "definition": "f. 1. 喊杀声, 冲杀声. 2. 欢闹声."
  },
  {
    "number": 90,
    "word": "álgido",
    "definition": "álgido, da adj. 1. 寒冷的, 湿冷的. 2. 【医】发冷的: fiebre ~a 寒热. período ~ 发冷期. 3. 【杂】极大的, 巨大的, 激烈的."
  },
  {
    "number": 91,
    "word": "atrofiado",
    "definition": "atrofiado, da adj. 萎缩的."
  },
  {
    "number": 92,
    "word": "cauce",
    "definition": "m. « conducir, llevar, transportar » 1.河床，河道. 2. 沟渠."
  },
  {
    "number": 93,
    "word": "resaltar",
    "definition": "intr.1. 弹跳， 跳动. 2. 脱落. 3. 突出, 伸出， 探出： un balcón que resalta 向外伸出的阳台. 4. 【转】 出众， 不同一般： Resalta mucho su inteligencia. 他才智出众. hacer ~ 突出， 强调."
  },
  {
    "number": 94,
    "word": "desmenuzar",
    "definition": "tr. 1. 弄碎. 2. 【转】 认真查看； 挑剔."
  },
  {
    "number": 95,
    "word": "estribillo",
    "definition": "m.1.【军】迭句，副歌.2.«coger»【转，口】口头语."
  },
  {
    "number": 96,
    "word": "tararear",
    "definition": "tr.-intr. 哼唱."
  },
  {
    "number": 97,
    "word": "fulgor",
    "definition": "m. 光，耀眼的光辉."
  },
  {
    "number": 98,
    "word": "desperdigar",
    "definition": "tr. 1. 使散开， 驱散： ~ la bandada de pájaros 轰散鸟群. (也用作自复动词) 2. 分散: No debes ~ tu energía en diversos trabajos al mismo tiempo. 你不该把自己的精力同时用在几项工作上."
  },
  {
    "number": 99,
    "word": "barandilla",
    "definition": "f. 1.（阳台、楼梯等的）栏杆. 2.（栏杆的)扶手. 3.【引】（起栏杆作用的）矮墙. 4.[智利方言]comulgatorio."
  },
  {
    "number": 100,
    "word": "emporio",
    "definition": "m. 1. 商业中心，贸易中心. 2. （科学、 艺术等的）名城， 名都. 3. [拉丁美洲方言] 大百货公司， 大百货商场."
  },
  {
    "number": 101,
    "word": "salazón",
    "definition": "f. 1. s.de salar. 2.（鱼肉）腌制业. 3.fil.咸鱼，腌肉.4.Cub,【口】厄运."
  },
  {
    "number": 102,
    "word": "batuta",
    "definition": "f. (乐队的）指挥棒. llevar uno la ~【转】领导，栺挥."
  },
  {
    "number": 103,
    "word": "timón",
    "definition": "m.舵；车辕；犁辕；领导，掌管；Col. 方向盘"
  },
  {
    "number": 104,
    "word": "dispendio",
    "definition": "m. 浪费， 挥霍."
  },
  {
    "number": 105,
    "word": "quinqué",
    "definition": "m.1. 煤油灯. 2. 【转】 精明， 机灵."
  },
  {
    "number": 106,
    "word": "lapidario",
    "definition": "lapidario, ria adj. 1.宝石的. 2.石碑的. 3.«estilo，frase.lenguaje» 碑文式的. |→ m. 1.宝石匠.2.宝石商."
  },
  {
    "number": 107,
    "word": "antagónico",
    "definition": "antagónico, ca adj. «ideas, opiniones, intereses» 对抗的, 敌对的: Las contradicciones entre nosotros y el enemigo son ~as. 敌我之间的矛盾是对抗性的矛盾. "
  },
  {
    "number": 108,
    "word": "exabrupto",
    "definition": "m.唐突不当的言语"
  },
  {
    "number": 109,
    "word": "agriar",
    "definition": "tr. 1.弄酸, 使变酸. (也用作自复动词): ~se la leche 牛奶变酸. 2. 激怒, 使暴躁. (也用作自复动词)"
  },
  {
    "number": 110,
    "word": "mazmorra",
    "definition": "f. 1.地牢.2.【转】窄小阴暗的房间."
  },
  {
    "number": 111,
    "word": "parvo",
    "definition": "parvo, va adj.1.小的，微小的.2.少，少量."
  },
  {
    "number": 112,
    "word": "derribar",
    "definition": "tr. 1. 弄倒， 推倒： ~al adversario 把对手打翻在地. ~una estatua 推倒塑像. El viento ha derribado muchos árboles. 风刮倒了好些树. 2. 拆毁， 毁坏， 破坏， 使倒塌： ~un edificio 拆毁一栋楼房. ~la puerta para entrar en la casa 破门而入. 3. 打倒， 推翻， 使垮台： Los comunistas nos proponemos ~ el régimen burgués. 我们共产党人就是要推翻资本主义制度. En 1949，el pueblo chino derribó la dominación reaccionaria del Kuomintang y se hizo dueño del país. 1949年，中国人民推翻了国民党的反动统治，当家做了主人. 3. 【转】 削弱， 使衰弱. 4. 【转】 克制. 5. 【转】 使颓唐， 使沮丧.|→ prnl. 倒下， 跌倒."
  },
  {
    "number": 113,
    "word": "arredrar",
    "definition": "tr. 1. 使后退. 2. 使离开. 3. 【转】恫吓.|→ prnl. 1. 后退. 2. 离开. 3. 【转】害怕."
  },
  {
    "number": 114,
    "word": "guillotinar",
    "definition": "tr.1.在断头台上处死.2.用机器裁切（纸张、书等）.3.【转，口】猝然停止，中断，打断（讨论等）."
  },
  {
    "number": 115,
    "word": "saldar",
    "definition": "tr. 1.结清(帐目）；清偿（债务）.2.甩卖，拋售，减价处理.3.【转】了结，结束： ~ las diferencias 清除分歧."
  },
  {
    "number": 116,
    "word": "conmiseración",
    "definition": "f.同情."
  },
  {
    "number": 117,
    "word": "fanático",
    "definition": "fanático, caadj.-s.1.（对某种宗教或主张）狂热信仰的，狂热维护的；狂热信仰者，狂热维护者.2.（对某种事物）狂热的，入迷的；狂热的人，入迷的人：un ~ del fútbol 足球迷."
  },
  {
    "number": 118,
    "word": "recalcitrante",
    "definition": "adj.固执的， 顽固不化的."
  },
  {
    "number": 119,
    "word": "provisto",
    "definition": "provisto, ta p.p.irreg.de proveer. |→ adj. «de» 具有(某物) 的； 配备有(某物) 的： una rueda ~ a de dientes 带齿的轮子. un animal ~ de cuernos 长角的动物. Estamos ~ s de carbón para todo el invierno. 我们储备有整个冬季用的煤. |→ f.[南美洲拉普拉塔河流域方言]食物."
  },
  {
    "number": 120,
    "word": "cobijo",
    "definition": "m.1.藏身处，安身处.2.【转】保护，庇护；靠山，依托.3.【古】（不供膳食的）客店."
  },
  {
    "number": 121,
    "word": "buhardilla",
    "definition": "f.顶楼，阁楼；天窗"
  },
  {
    "number": 122,
    "word": "blandir",
    "definition": "tr.挥舞，挥动（棍棒、武器等):  ~ un sable 挥动马刀. |→intr.-prnl. 舞动，摆动."
  },
  {
    "number": 123,
    "word": "terquedad",
    "definition": "terquedad, terquería， terqueza f. 1.顽固， 固执. 2.[厄瓜多尔方言] 淡漠， 无兴致."
  },
  {
    "number": 124,
    "word": "proletariado",
    "definition": "m.无产阶级： El ~ es la clase más grande en la historia de la humanidad. 无产阶级是人类历史上最伟大的一个阶级."
  },
  {
    "number": 125,
    "word": "retruécano",
    "definition": "m.1. 谐音俏皮话， 双关语. 2. 【修辞】 颠倒词序改义法[指诸如 Ni son todos los que están, ni están todos los que son 类型的句式]."
  },
  {
    "number": 126,
    "word": "hermético",
    "definition": "hermético，ca adj. 1.赫尔墨斯(Hermes Trismegistos,古埃及哲学家）派的（炼金术士）. 2.深奥的，深不可测的. 3.不外露的，守口如瓶的(人）. 4.密封的，密闭的，严实的."
  },
  {
    "number": 127,
    "word": "cretino",
    "definition": "cretino, na adj.-s. 1. 患呆小病的，患愚侏病的； 呆小病患者， 愚侏病患者. 2. 愚蠢的； 笨蛋， 蠢驴."
  },
  {
    "number": 128,
    "word": "patatús",
    "definition": "m.【口】晕厥；昏倒. "
  },
  {
    "number": 129,
    "word": "apóstol",
    "definition": "m. 1. 【宗】使徒. 2. 【引】传教士. 3. 【引】倡导者, 宣传者, 传播者."
  },
  {
    "number": 130,
    "word": "recogimiento",
    "definition": "m.1. 参见 recogida. 2. 专注， 凝神. 3. 深居简出， 隐遁. 4. (女人的) 幽居所， 幽闭所."
  },
  {
    "number": 131,
    "word": "gozne",
    "definition": "m.1.铰链,合页.2.【动】（蛤蚌类的)蝶铰，接点."
  },
  {
    "number": 132,
    "word": "astillar",
    "definition": "tr. 使成碎屑, 使成碎片.|→ prnl. 1. 撕裂, 裂开. 2. (边缘上) 起毛刺."
  },
  {
    "number": 133,
    "word": "impavidez",
    "definition": "f. 1.勇敢，无畏. 2.冷漠,无动于衷. 3.[拉丁美洲方言] 恬不知耻."
  },
  {
    "number": 134,
    "word": "pulquérrimo",
    "definition": "pulquérrimo, ma adj. superl.de pulcro."
  },
  {
    "number": 135,
    "word": "machetazo",
    "definition": "m. (砍刀的）砍，击."
  },
  {
    "number": 136,
    "word": "pérgola",
    "definition": "f.1.（花园等处的）藤架，蔓藤花棚.2.屋顶花园.3.葡萄架."
  },
  {
    "number": 137,
    "word": "tartamudear",
    "definition": "intr. 口吃,结巴."
  },
  {
    "number": 138,
    "word": "incipiente",
    "definition": "adj. 开始的；刚出现的；早期的： ~s movimientos revolucionarios 刚出现的革命运动. cáncer ~ 早期癌症."
  },
  {
    "number": 139,
    "word": "marchitarse",
    "definition": "枯萎"
  },
  {
    "number": 140,
    "word": "largamente",
    "definition": "adv.1. «hablar, examinar, tratar» 长时间地； 充分地；详尽地. 2.【转】舒服地，宽裕地: Ahora tiene con que pasarlo ~ . 他现在有条件过舒服日子了. 3.«dar, dotar»【转】慷慨地，大量地."
  },
  {
    "number": 141,
    "word": "lastre",
    "definition": "m. 1.(船或气球等用的）压载. 2.【集】（釆石场上不成料的）碎石. 3.【转】障碍，累赘. 4.【转】主见，主意，主心骨[多用于否定句中]：faltar ~ a uno 某人没有主心骨. No tiene ~ aquella cabeza. 那个人脑袋里缺根弦. en ~【海】未载货的（船）."
  },
  {
    "number": 142,
    "word": "paupérrimo",
    "definition": "paupérrimo, ma adj.非常贫穷的."
  },
  {
    "number": 143,
    "word": "incursión",
    "definition": "f. 1.s. de incurrir. 2.【军】侵犯，侵入，袭击."
  },
  {
    "number": 144,
    "word": "hoyuelo",
    "definition": "m. 1.dim. de hoyo. 2.酒窝，酒靥. 3.颈窝. 4.掷坑游戏."
  },
  {
    "number": 145,
    "word": "transpirar",
    "definition": "tr. (动物通过皮肤， 植物通过体表)排出, 渗出(液体）. |→ intr. 1.(液体通过物体表面)渗出. 2.发汗， 出汗： Es un hombre que transpira mucho. 他是个汗多的人. 3. (植物）发散潮气."
  },
  {
    "number": 146,
    "word": "atorar",
    "definition": "tr. 1. 劈 (柴) . 2. [墨西哥方言]动手做, 着手进行. 3.说话卡住."
  },
  {
    "number": 147,
    "word": "apabullar",
    "definition": "tr. 【口】使惶惑, 使目瞪口呆： Me apabulló con sus argumentos. 他的论据使我哑口无言."
  },
  {
    "number": 148,
    "word": "intriga",
    "definition": "f. 1.«armar, fraguar, maquinar, tramar, urdir» 阴谋，诡计. 2.(戏剧、小说等的）情节. 3.好奇，兴趣."
  },
  {
    "number": 149,
    "word": "encina",
    "definition": "f. 1. 【植】 圣栎树.  2.  圣栎木."
  },
  {
    "number": 150,
    "word": "butaca",
    "definition": "f. 1.扶手软椅. 2.(剧院有扶手的）座位. 3.(影、剧院 等的）门票，入场券：He sacado tres ~  s para la sesión de la tarde. 我买了三张日场的戏票. ~  de patio【剧】池座, 正厅座位."
  },
  {
    "number": 151,
    "word": "repisa",
    "definition": "f.1. 【建】 隅撑， 托座. 2. (安在墙壁上的) 搁板， 托架."
  },
  {
    "number": 152,
    "word": "caoba",
    "definition": "caoba, caobana; caobanom. 1.【植】桃花心木. 2.桃花心木材. ~ de acajú  檟如树木材."
  },
  {
    "number": 153,
    "word": "pulimento",
    "definition": "m. 磨光,擦亮,润色."
  },
  {
    "number": 154,
    "word": "canoso",
    "definition": "canoso, sa adj. 白发苍苍的，满头白发的."
  },
  {
    "number": 155,
    "word": "destiempo",
    "definition": "(a)不适时地， 不合时宜地."
  },
  {
    "number": 156,
    "word": "ametralladora",
    "definition": "机关枪"
  },
  {
    "number": 157,
    "word": "hebra",
    "definition": "f.1.（纫在针上的）线.2.（豆荚的）筋.3.(藏红花的）花柱[用作香料].4.(肌肉、木材、纺织材料等的）纤维：ase-rrar a ~ 顺茬锯.5.（蚕、蜘蛛及其他昆虫吐的）丝.6.纤 维状物，丝状物：En su pelo negro asoman algunas ~s de plata. 在他那满头的黑发当中露出了几根银丝.7.矿脉. 8.【转】思路，话头：perder la ~ 忘了话头.cortar a uno la ~ de la vida【转】夺去某人的生命.de ~ 丝状的（烟草）.de una ~[智利方言]【转】一口气.estar uno de buena ~ 【转，口】身强力壮. pegar la ~ 攀谈起来；谈个没完.谚语： Por la ~ se saca el ovillo.找到线头也就找到了线团；从一件事情可以推断出另一件事情."
  },
  {
    "number": 158,
    "word": "verbena",
    "definition": "f. 1.【植】马鞭草. 2.【宗】（节前的）狂欢晚会. 3.【引】露天舞会， 跳舞晚会. coger uno la ~ 起早."
  },
  {
    "number": 159,
    "word": "glorieta",
    "definition": "f.1.园亭，凉亭，花亭.2.花园空地.3.（城市中的）街心花园."
  },
  {
    "number": 160,
    "word": "toca",
    "definition": "f. 1.女帽， 头巾. 2.(做女帽或头巾用的）细布. 3.pl. （寡妇领取的）抚恤金. ~ s de viuda 寡妇丧服."
  },
  {
    "number": 161,
    "word": "manosear",
    "definition": "tr. 1.摸，抚摩:Se prohibe ~ los objetos exhibi- dos. 禁止摸动展品. 2.【转】反复利用（某事物)；反复谈论 (某事情）；不断重复(某题目）."
  },
  {
    "number": 162,
    "word": "azar",
    "definition": "m. 1. 侥幸, 偶然： Por puro ~ nos encontramos en París. 我们在巴黎偶然相遇. 2. 意外事件, 不幸, 厄运. 3. (牌戏的) 坏牌； (掷色子的) 坏点. al ~ 听其自然；漫无目的： Empezamos a andar al ~ . 我们信步走去. Abrió un libro al ~ y empezó a leer. 他随手翻开一本书就读了起来. por ~ 偶然, 凑巧."
  },
  {
    "number": 163,
    "word": "zueco",
    "definition": "m. 1.木屐； 木底鞋. 2.(喜剧的）朴素风格."
  },
  {
    "number": 164,
    "word": "ascendiente",
    "definition": "adj. 上升的. |→ m.,f. 1. 父；母. 2. 祖父；祖母.|→ m. «ejercer, tener; en, sobre» 威望；影响."
  },
  {
    "number": 165,
    "word": "fritanga",
    "definition": "f1.【口，贬】油炸食品.2.[拉丁美洲方言]炸肉，炸内脏."
  },
  {
    "number": 166,
    "word": "mameluco",
    "definition": "m. 1.(古埃及的)奴隶兵. 2.灯笼裤. (也用作复数) 3.【口】傻瓜，笨蛋;小丑. 4.[拉丁美洲方言] (小孩睡觉穿的）连衫裤."
  },
  {
    "number": 167,
    "word": "tirabuzón",
    "definition": "m. 1.起塞钻. 2.发鬈. sacar algo a uno con ~ 逼使某人讲出某事."
  },
  {
    "number": 168,
    "word": "fisgonear",
    "definition": "tr.【口】专好窥探，专好打听（他人的事情）."
  },
  {
    "number": 169,
    "word": "despectivo",
    "definition": "despectivo, va adj.  1. «ser, estar» 轻蔑的. 2. 【语法】  贬义的."
  },
  {
    "number": 170,
    "word": "respingo",
    "definition": "m.1. (衣服某一部分) 翘起， 过短： La chaqueta te hace un ~ por detrás. 你的上衣后边翘着. 2. «dar» (头部或身体的) 猛烈颤动. 3. 【转】 震动， 震惊， 惊异. 4. 【转，口】 (对别人的要求表示出的) 抗拒， 抱怨. 5. 【转】 粗暴的回答， 没有好气的回答. 6. 【转】 呵斥. 6. [洪都拉斯方言]，[智利方言], [墨西哥方言] 翘起的裙子."
  },
  {
    "number": 171,
    "word": "dispendioso",
    "definition": "dispendioso, sa adj. 1. 昂贵的. 2. 【转】 浪费的， 挥霍的."
  },
  {
    "number": 172,
    "word": "foca",
    "definition": "f. 1.【动】海豹.2.海豹皮."
  },
  {
    "number": 173,
    "word": "jovialidad",
    "definition": "f. 快活，开朗."
  },
  {
    "number": 174,
    "word": "apogeo",
    "definition": "m. 1. 【天】远地点. 2. 【转】高峰, 顶点, 极盛时期."
  },
  {
    "number": 175,
    "word": "meñique",
    "definition": "adj. 1.最小的（手指）：dedo ~ 小指.2.【口】很小的，极小的，非常小的. |→ m. 小指."
  },
  {
    "number": 176,
    "word": "júbilo",
    "definition": "m. 欢乐."
  },
  {
    "number": 177,
    "word": "defraudar",
    "definition": "tr. 1. 使失望; 辜负:  ~la esperanza de uno 辜负某人的希望. 2. 诈骗； 偷盗. 3. 逃避， 偷， 漏（税等）. 4. 扰乱， 妨碍： ~el sueño 扰乱清梦. 5. 使落空， 使失败."
  },
  {
    "number": 178,
    "word": "hiena",
    "definition": "f.1.【动】.鬣狗.2.【转】残忍的人."
  },
  {
    "number": 179,
    "word": "relincho",
    "definition": "m.马嘶声"
  },
  {
    "number": 180,
    "word": "coetáneo",
    "definition": "coetáneo, a adj.同时代的，同时期的."
  },
  {
    "number": 181,
    "word": "hoguera",
    "definition": "f.火堆，篝火"
  },
  {
    "number": 182,
    "word": "comitiva",
    "definition": "f.1.陪同人员；随行人员.2.游行队伍."
  },
  {
    "number": 183,
    "word": "pordiosero",
    "definition": "pordiosero, ra adj.-s.行乞的,乞讨的；乞丐，叫花子."
  },
  {
    "number": 184,
    "word": "golosina",
    "definition": "f.1.好吃的东西[尤指糖果、细点].2.(对某物的）想望.3.嘴馋，贪嘴.4.【转】华而不实的东西.amargar la ~a uno【转，口】一件好事使某人付出巨大代价."
  },
  {
    "number": 185,
    "word": "dosificar",
    "definition": "tr. 【医】 测定剂量."
  },
  {
    "number": 186,
    "word": "paquidermo",
    "definition": "paquidermo, ma adj.【动】1.厚皮的.2.行动迟缓的（动物）. (也用作名词)  |→ m.pl【动】厚皮亚目."
  },
  {
    "number": 187,
    "word": "engominar",
    "definition": "tr.抹发蜡"
  },
  {
    "number": 188,
    "word": "escobillar",
    "definition": "tr. 1.刷. 2.[拉丁美洲方言] 踢踏（地面）[舞蹈动作]."
  },
  {
    "number": 189,
    "word": "escobillón",
    "definition": "m. 1.(洗刷器皿里面用的）瓶刷；（擦枪炮筒用的)枪炮刷. 2.长柄地板刷."
  },
  {
    "number": 190,
    "word": "malévolo",
    "definition": "malévolo, laadj.恶意的；用心险恶的"
  },
  {
    "number": 191,
    "word": "oprobioso",
    "definition": "oprobioso, sa adj.侮辱的，羞辱的，轻蔑的."
  },
  {
    "number": 192,
    "word": "felpudo",
    "definition": "felpudo, da adj.象长毛绒的.  |→ m.(门口的）棕制鞋擦. ~ s de batán【纺】缩呢折痕. "
  },
  {
    "number": 193,
    "word": "chatarra",
    "definition": "f. 1. 铁矿楂. 2. 废铁. 3. 【口】 破旧的机器， 破旧的铁器. 4. 【口】 奖章， 勋章."
  },
  {
    "number": 194,
    "word": "claraboya",
    "definition": "f. 天窗."
  },
  {
    "number": 195,
    "word": "tranca",
    "definition": "f. 1.棍， 棒. 2.（门、 窗的）闩， 拴. 3.栅门. 4.【口】酒 醉. a ~ s y barrancas 跌跌撞撞地， 磕磕绊绊地； 艰难地；断断续续地."
  },
  {
    "number": 196,
    "word": "fruncir",
    "definition": "tr.1.使起皱，使起褶.2.«boca，ceño, cejas, entre-cejo,frente» 皱起.3.歪曲（事实）.4.【转】紧缩，收缩. |→ prnl.【转】假装老实；假装谦虚."
  },
  {
    "number": 197,
    "word": "anodino",
    "definition": "anodino, na adj. 1. 【医】镇痛的, 止痛的. 2. 【转】不起作用的, 无关紧要的. 3. 【转】没有内容的, 乏味的： una película 一部枯燥乏味的影片. |→ m. 镇痛剂, 止痛剂."
  },
  {
    "number": 198,
    "word": "frondosidad",
    "definition": "f.(枝叶的）繁茂."
  },
  {
    "number": 199,
    "word": "enjuagar",
    "definition": "tr. 洗；涮,漂,冲洗： ~ los platos fregados 涮涮洗过的盘子. |→ prnl. 漱口."
  },
  {
    "number": 200,
    "word": "blancuzco",
    "definition": "blancuzco, ca adj. 发白的，灰.色的."
  },
  {
    "number": 201,
    "word": "exhumar",
    "definition": "tr.1.挖出，掘出，扒出（尸体或其他埋于垴下之物）.2.【转】发掘（已被遗忘的事物）."
  },
  {
    "number": 202,
    "word": "escuálido",
    "definition": "escuálido, da adj. 1.非常肮脏的. 2.非常瘦的. 3.蔫的（植物）. 4.【动】角鲨亚目的. |→ m.pl. 【动】角鲨亚目."
  },
  {
    "number": 203,
    "word": "gomero",
    "definition": "gomero, ra adj.橡胶的.|→ m. 1.弹弓.2.[拉丁美洲方言]割胶工.3.[拉丁美洲方言]经营橡胶业的人."
  },
  {
    "number": 204,
    "word": "raudal",
    "definition": "m.1. 水流， 洪流， 急流. 2. 【转】 大量， 众多[尤用于涌现物]： De su cabeza surge un ~ de iniciativas. 他提出了一连串的倡议. El muchacho tiene un ~ de energías. 那小伙子有旺盛的精力."
  },
  {
    "number": 205,
    "word": "mayordomo",
    "definition": "m. 　1.管家，总管.2.(某些宗教团体的）督管. 3.（某些宗教团体的）成员.4.仆人，佣人.5.[智利方言]工头，把头，监工. ~ mayor (王室的）大总管. ~ de pala- ció (法国墨洛温王朝的）总理大臣. ~ de propios (市镇的）地产主管人. ~ de semana (王室的）值周总管."
  },
  {
    "number": 206,
    "word": "carromato",
    "definition": "m.1.带蓬大马车. 2.【贬】笨重的车辆."
  },
  {
    "number": 207,
    "word": "famélico",
    "definition": "famélico, ca adj.参见 hambriento."
  },
  {
    "number": 208,
    "word": "enmendar",
    "definition": "tr. 1.修改，修正，改正，校正： ~un libro 修改 —本书. Ya no se puede ~la torcedura del árbol. 这棵树弯得已经没法办了.  (也用作自复动词):  ~se de una falta  改正 错误. 2.弥补,补偿，赔偿： ~el perjuicio causado 赔偿造 成的损失. 3.【法】改变（判决）.4.【海】变更（航向等）."
  },
  {
    "number": 209,
    "word": "allegado",
    "definition": "allegado, da adj. 1. 靠近的, 挨近的. 2. 有亲戚关系的. (多用作名词)  3. 追随的.  (也用作名词)  4. [阿根廷方言] 补充的, 添加的."
  },
  {
    "number": 210,
    "word": "apoplejía",
    "definition": "f. 【医】卒中, 中风."
  },
  {
    "number": 211,
    "word": "inerte",
    "definition": "adj. 1.«ser，estar» 无生命的；不活动的; 无自动力的. 2.无生气的，呆滞的，怠惰的. 3.无作用的，无效的. 4.【化】 惰性的."
  },
  {
    "number": 212,
    "word": "ave de rapiña",
    "definition": "ave de rapiña: 猛禽"
  },
  {
    "number": 213,
    "word": "trecho",
    "definition": "m. 1.路途， 距离： Anduvimos un ~ sin decir ninguna palabra. 我们默默地走了一段路. 2.时间： esperar largo ~ 长时间等候. Estuvo un ~ sin escribirnos. 他有一段时间没给我们写信. 3.地块， 地段: Tiene un ~ sembrado de patatas. 他种了一块马铃薯地. 4.【口】段， 块, 截: He hecho hoy todo este ~ de encaje. 我今天织了整整这一截花边. a ~s 1.间断地： El vestido se da descolorido a ~s. 这件衣服有—些地方褪色了. 2.断断续续地： estudiar a ~s 断断续续地学习. de ~ a  en  ~ 有间隔地: cambiar de postura de ~ en ~ 过一会儿变换一下姿势. Hay colocados retenes de ~ en ~ . 隔一段设一个岗哨."
  },
  {
    "number": 214,
    "word": "charol",
    "definition": "m. 1. 漆. 2. 漆皮. 3. [拉丁美洲方言] 漆盘. darse ~自负."
  },
  {
    "number": 215,
    "word": "cigüeña",
    "definition": "f. 1.【动】白鹳. 2.曲柄；摇把. 3.钟鼻. 4.一种古战车. 5.[洪都拉斯方言] 手摇风琴."
  },
  {
    "number": 216,
    "word": "repollo",
    "definition": "m.1. (圆白菜等的) 叶球. 2. 圆白菜； 抱心大白菜. 3. [秘鲁方言] 参见 repullo."
  },
  {
    "number": 217,
    "word": "infundio",
    "definition": "m. «circular, correr, propagarse» 【口】 流言, 瑶言, 谎言."
  },
  {
    "number": 218,
    "word": "paradero",
    "definition": "m.1.投宿处，住宿处：2.下落，住处，滞留地点：No sé su ~.我不知道他的下落.¿Quién sabe el ~ de mis guantes?谁看见我的手套了？3.【转】结果，结局：tener mal ~ 没有好结果.4.[拉丁美洲方言]火车站."
  },
  {
    "number": 219,
    "word": "desmañado",
    "definition": "desmañado, da adj. 不灵巧的， 笨拙的."
  },
  {
    "number": 220,
    "word": "deletrear",
    "definition": "intr. (一个字母一个字母地） 拼读.|→ tr. 【转】 猜，解： ~jeroglíficos 解象形文字."
  },
  {
    "number": 221,
    "word": "nalga",
    "definition": "f.臀部，屁股.(多用作复数)"
  },
  {
    "number": 222,
    "word": "primoroso",
    "definition": "primoroso, sa adj.1. 精美的， 精致的. 2. 精心的， 仔细的； 手巧的： una bordadora muy ~ a 一位非常巧的绣花女工."
  },
  {
    "number": 223,
    "word": "pujar",
    "definition": "intr.1. 努力， 奋力， 竭力， 极力： ~ para abrirse paso 奋力冲开一条道路. 2. 讲不出话. 3. 犹豫不决. 4. (忍不住要哭时或哭后) 抽搭， 抽噎. 5. (拍卖中) 竞价. 6. 【古】 上升. 7. [秘鲁方言]辞退； 拒绝. |→ tr.超过， 胜过.  ~ para adentro [拉丁美洲方言]不声不响地忍耐."
  },
  {
    "number": 224,
    "word": "desgreñado",
    "definition": "desgreñado, da adj. «estar, ir, ponerse» 蓬头散发的."
  },
  {
    "number": 225,
    "word": "cutis",
    "definition": "[pl. cutis]  amb. 皮肤[尤指面部]. "
  },
  {
    "number": 226,
    "word": "embargar",
    "definition": "tr. 1. 妨碍， 阻挠， 阻止. 2. 使中断， 使中止： ~ un negocio 使停业. 3. 【转】吸引住， 迷住： La música embargó. 乐声把他给迷住了.  Por ahora, el juego embarga toda la atención del niño. 这会儿，那个孩子正在全神贯注地玩着. 4. 【转】 占去， 用去： El estudio embarga la mayor parte de su tiempo. 学习占去了他们大部分时间. Su recuerdo embarga toda mi alma. 我非常想念他. La tristeza embargaba su ánimo 5. 【法】 查封，封存，扣抻.  |→ prnl. «en» 沉醉于，全神贯注于."
  },
  {
    "number": 227,
    "word": "desolación",
    "definition": "f. 毁坏;倒塌;伤心;悲痛."
  },
  {
    "number": 228,
    "word": "suntuoso",
    "definition": "adj. 1.豪华的,华丽的：trajes ~ s 华丽的衣服. una morada ~ a 豪华的住宅. 2.套盛的."
  },
  {
    "number": 229,
    "word": "despiadado",
    "definition": "despiadado, da adj. 1. 残忍的， 冷酷无情的. 2. «ataque, crítica, humor» 猛烈的， 激烈的."
  },
  {
    "number": 230,
    "word": "lampiño",
    "definition": "lampiño, ña adj. 1.无髭的，未长胡子的. 2.毛发少的,汗毛少的. 3.【植】无髯毛的."
  },
  {
    "number": 231,
    "word": "transitar",
    "definition": "intr. 行走； 通行: A esa hora no transitaba nadie por la calle. 那个时候街上已经没有人了."
  },
  {
    "number": 232,
    "word": "trapecio",
    "definition": "m. 1.梯形. 2.(体操或杂技用的）吊杆， 吊杠. 3.秋千. 4.【解】大多角骨. 5.【解】斜方肌.  ~ isósceles 等腰梯形. ~ rectángulo 直角梯形."
  },
  {
    "number": 233,
    "word": "chapa",
    "definition": "f. 1. （金属、 木材等的） 薄板， 薄片： ~de cobre 铜板. ~ de acero 钢板. 2. (机器的） 片状部件：la ~del horno 炉片. 3. （衣帽间领取衣服等的）牌， 牌子. 4. 徽章， 标志. 5. 胶合板. 6. （皮鞋的） 接缝加固皮. 7. （女人在脸上点画的） 吉祥痣. 8. (面颊上的） 红晕. 9. 一种蜗牛. 10. 【转， 口】 规矩， 严肃： hombre de ~严肃认真的人. 11. [拉丁美洲方言] 锁. 12. [秘鲁方言] 红润的脸色. (多用作复数) 13. pl. 掷钱游戏.|→ m. 1. [南美洲方言] 美洲土著特务，美洲土著密探. 2. [厄瓜多尔方言] 警察."
  },
  {
    "number": 234,
    "word": "payasada",
    "definition": "f. «hacer»洋相，滑稽言行，小丑的表演."
  },
  {
    "number": 235,
    "word": "antro",
    "definition": "m. 1. 洞窟，洞穴. 2. 【转】阴暗龌龊的地方. ~ de perdición (使人堕落的) 陷坑."
  },
  {
    "number": 236,
    "word": "ensimismarse",
    "definition": "prnl. 1.沉思，冥想. 2.骄傲，自负."
  },
  {
    "number": 237,
    "word": "hinchar",
    "definition": "tr.1.使充满气，使鼓起来，使膨胀： ~una pelota con aire 给球打气. (也用作自复动词)2.使上涨，使涨潮：La llu- via hincha el río. 雨使河水上涨. (也用作自复动词)3.【转】夸大，夸张.|→ prnl.1.肿起.2.«de»【转，口】吃饱.3.«de»【转】厌倦，厌烦.4.【转】发财.5.【转】骄傲，翘尾巴."
  },
  {
    "number": 238,
    "word": "trashumante",
    "definition": "游牧的（牲畜）."
  },
  {
    "number": 239,
    "word": "desorbitar",
    "definition": "tr. 1. 使脱离轨道. (也用作自复动词) 2. 【转】 夸张， 夸大. 3. [阿根廷方言] 使发疯."
  },
  {
    "number": 240,
    "word": "traspié",
    "definition": "[pl. traspiés] m. 1.《dar》 磕绊， 打滑， 失足. 2.【转】差错， 失误. 3.参见 zancadilla."
  },
  {
    "number": 241,
    "word": "ultratumba",
    "definition": "f. 死后， 阴间."
  },
  {
    "number": 242,
    "word": "solapado",
    "definition": "solapado, da adj. 虚伪的，狡诈的，心口不一的. "
  },
  {
    "number": 243,
    "word": "greda",
    "definition": "f.漂白土."
  },
  {
    "number": 244,
    "word": "embalar",
    "definition": "tr. 1. 包装， 打包. 2. 使（发动机） 加速. (也用作自复动词) 3. [墨西哥方言] 装填子弹. |→ intr. 击水驱鱼. |→ prnl. 1. 快步走； 快跑. 2. 讲话快. 3. 【转】 起劲."
  },
  {
    "number": 245,
    "word": "amontonarse",
    "definition": "prnl.1. 接二连三发生2. （无故）生气，动怒，勃然大怒"
  },
  {
    "number": 246,
    "word": "disimulado",
    "definition": "disimulado, da adj. 爱掩饰的； 爱隐瞒的.  hacerse el ~佯装不懂， 故作不知. "
  },
  {
    "number": 247,
    "word": "reliquia",
    "definition": "f.1. (圣徒的) 遗骸， 遗物； 圣骨， 圣物. 2. 遗迹. (多用作复数)3. 【转】 (伤病的) 后遗症； 残疾 . ~ insigne 圣骨的主要部分."
  },
  {
    "number": 248,
    "word": "alfarería",
    "definition": "f. 1. 制陶工艺；制陶业. 2. 陶器作坊. 3. 陶器店."
  },
  {
    "number": 249,
    "word": "acosamiento",
    "definition": "m.骚扰，骚扰行为"
  },
  {
    "number": 250,
    "word": "raquítico",
    "definition": "raquítico, ca adj.1. 佝偻病的； 患佝偻病的.  (也用作名词) 2. 病弱的， 发育不良的: un niño ~ 一个病弱的孩子. un árbol ~ 一棵长得勾勾巴巴的树. 3. 少的， 不足的， 不够的： un sueldo ~ 微薄的工资. un lazo ~ 不密切的联系."
  },
  {
    "number": 251,
    "word": "ardor",
    "definition": "m. 1. 热, 灼热： el ~ del estío 盛夏的炎热. 2. (胃中的) 灼热感, 烧心. 3. 【转】热心, 热情： trabajar con ~ 热情劳动. 4. 【转】热望, 渴望. 5. 【转】勇敢, 无畏. 6. 【转】光彩, 光芒. en el ~ de «batalla, combate, disputa» 【转】在… 最激烈的时刻."
  },
  {
    "number": 252,
    "word": "leopardo",
    "definition": "m.【动】豹."
  },
  {
    "number": 253,
    "word": "escapulario",
    "definition": "m. (僧侣用的）披肩."
  },
  {
    "number": 254,
    "word": "entumecer",
    "definition": "tr. 使麻木，使假硬： El frío entumece los dedos. 手指冻僵了.  (也用作自复动词) |→ prnl. (河、海等)涨水，涨潮."
  },
  {
    "number": 255,
    "word": "gestar",
    "definition": "tr.(母亲）孕育（胎儿）. |→ prnl.【转】酝酿，准备."
  },
  {
    "number": 256,
    "word": "leontina",
    "definition": "f.短怀表链."
  },
  {
    "number": 257,
    "word": "guiño",
    "definition": "m. «hacer» 挤眼睛；递眼色，挤眉弄眼."
  },
  {
    "number": 258,
    "word": "alcurnia",
    "definition": "f. «de» 家世. de ~ 贵族出身的, 出身高贵的."
  },
  {
    "number": 259,
    "word": "mucamo",
    "definition": "mucamo, ma m.,f.[拉丁美洲方言]仆人，佣人."
  },
  {
    "number": 260,
    "word": "pebetero",
    "definition": "m.香炉."
  },
  {
    "number": 261,
    "word": "babucha",
    "definition": "f. 1. 拖鞋. 2. [墨西哥方言] (农村妇女穿的) 系带鞋."
  },
  {
    "number": 262,
    "word": "biombo",
    "definition": "m. 屏风."
  },
  {
    "number": 263,
    "word": "pompón",
    "definition": "m.1.（军帽等上的）丝绒球,金属球.2.—种鱼，属棘鼷类[Anisotremus surinamensis]."
  },
  {
    "number": 264,
    "word": "borla",
    "definition": "f. 1.缨，穗，流苏. 2.帽缨. 3.粉扑儿 . 4.pl. 参见 amaranto. tomar la ~大学毕业."
  },
  {
    "number": 265,
    "word": "avestruz",
    "definition": "m. 【动】鸵鸟. ~ de América 参见 ñandú. "
  },
  {
    "number": 266,
    "word": "salitre",
    "definition": "m. 硝；硝石."
  },
  {
    "number": 267,
    "word": "provisional",
    "definition": "adj.临时的， 暂时的： un alojamiento ~ 临时住处."
  },
  {
    "number": 268,
    "word": "alcaparra",
    "definition": "f. 1. 【植】刺山柑, 老鼠瓜. 2. 剌山柑花蕾[用作调料]. ~ de Indias 【植】旱金莲."
  },
  {
    "number": 269,
    "word": "batín",
    "definition": "m. 1.参见 bata. 2.(在家里穿的）男便服上衣."
  },
  {
    "number": 270,
    "word": "nupcial",
    "definition": "adj.婚礼的：ceremonia ~ 婚礼仪式. "
  },
  {
    "number": 271,
    "word": "postergar",
    "definition": "tr.延迟，推后；贬低，轻视"
  },
  {
    "number": 272,
    "word": "consumar",
    "definition": "tr.1.结束，完成，实现[—般用于非常事件或犯罪行为].2.【法】履行，执行(契约或法律判决等）."
  },
  {
    "number": 273,
    "word": "amago",
    "definition": "m. 1. s.de amagar. 2. 征兆，迹象；症状. 3. 佯攻."
  },
  {
    "number": 274,
    "word": "tórax",
    "definition": "[pl. tórax] m. 【解， 动】胸， 胸廓， 胸腔."
  },
  {
    "number": 275,
    "word": "mentón",
    "definition": "m.下巴."
  },
  {
    "number": 276,
    "word": "raspar",
    "definition": "tr.1. 刮， 磨擦； 刮去， 擦掉： ~ la pintura de la puerta 刮掉门上的漆. ~ una palabra para poner otra 擦掉一个字写上另一个字. 2. 刮光， 磨平. 3. (在某物上) 划出印痕： El diamante puede ~ el cristal. 钻石可以在玻璃上面划出道子. 4. 使有扎剌感： La bufanda raspa la cara. 这个围脖扎脸. 5. 划破， 刮破， 擦伤， 碰伤： La bala me raspó la pierna derecha. 子弹擦伤了我的右腿. La esquina de la mesa raspó la pared. 桌子角把墙碰坏了. 6. 擦着， 贴着： El coche pasó raspándole. 汽车擦着他的身子开了过去. 7. (酒等) 辣. 8. 偷, 抢. 9. [拉丁美洲方言]斥责， 责备. |→ intr.1. 粗糙： Su mano raspa. 他的手很粗糙. 2. [委内瑞拉方言]走开， 走掉."
  },
  {
    "number": 277,
    "word": "atenacear",
    "definition": "tr. 1. 施钳肉刑[古代酷刑]. 2. 钳住. 3. 【转】折磨；使痛苦."
  },
  {
    "number": 278,
    "word": "caracola",
    "definition": "f. 1.【动】海螺. 2.海螺壳. 3.螺号. 4.【植】一种常春藤."
  },
  {
    "number": 279,
    "word": "abalorio",
    "definition": "m. 1. 玻璃串珠. 2. 小玻璃珠."
  },
  {
    "number": 280,
    "word": "arcada",
    "definition": "f. 1. 【建】连拱, 连拱廊. 2. 桥洞. 3. 胃痉挛."
  },
  {
    "number": 281,
    "word": "éter",
    "definition": "m.1.【诗】太空，天空.2.【理】能媒，以太.3.【化】醚，乙醚."
  },
  {
    "number": 282,
    "word": "correa",
    "definition": "f. 1. 皮带; 皮条. 2. 钢刀皮带. 3. 韧性， 柔软性. 4.  【建】 脊檩. 5. pl. 撢子.  ~ de transmisión 传动带. tener uno (mucha) ~ 【转， 口】 1. 容忍(别人的玩笑）.  2. 耐劳."
  },
  {
    "number": 283,
    "word": "sudario",
    "definition": "m. 1.汗巾.2.（死人的）盖脸巾，裹尸布.santa ~ 耶稣的裹尸布."
  },
  {
    "number": 284,
    "word": "sutura",
    "definition": "f. 1.【医】缝合. 2.【解】骨缝：la ~ del cráneo 颅缝. 3.【植】（蓇葖或蒴果的）缝线."
  },
  {
    "number": 285,
    "word": "garabatear",
    "definition": "intr.1.用钩子钩取.2.乱涂乱画，潦草地书写.  (也用作及物动词) ： Garabateó unos caracteres ininteligibles.他胡乱地写了几个无法辨认的字.3.【转；口】转弯抹角，兜圈子."
  },
  {
    "number": 286,
    "word": "amontonar",
    "definition": "tr. 1. 堆, 堆起, 堆放： ~ el trigo 把麦子堆起来. 2. 【转】收集, 积累；堆积： ~ datos 收集资料. ~ conocimientos 积累知识.  ~ argumentos 罗列理由. ~ palabras 堆砌词汇.|→ prnl. 1. 聚集： La gente se amontonaba en la plaza. 人们聚集在广场上. 2. 【转，口】发火, 发怒. 3. 【转，口】参见 amancebarse. 4. [墨西哥方言] 结伙打 (一个人) ."
  },
  {
    "number": 287,
    "word": "pestilencia",
    "definition": "f.臭气，恶臭"
  },
  {
    "number": 288,
    "word": "granate",
    "definition": "m.1.石榴红.暗红色.  (也用作形容词) ： de color ~ 暗红色的.un vestido ~ 一件石榴红色的衣服.2.【矿】石榴石. ~ almandino  noble, oriental, sirio  贵榴石."
  },
  {
    "number": 289,
    "word": "cachetada",
    "definition": "f. [拉丁美洲方言] 巴掌，耳光，嘴巴子."
  },
  {
    "number": 290,
    "word": "alocado",
    "definition": "alocado, da adj. 1. 发疯的；象疯子的. 2. 不理智的. 3. «ir» 慌乱的."
  },
  {
    "number": 291,
    "word": "ajenjo",
    "definition": "m. 1. 【植】洋艾. 2. 洋艾酒."
  },
  {
    "number": 292,
    "word": "valerse",
    "definition": "prnl.1. 利用，使用短语：valerse de esta oportunidad:借此机会2. 自立，自理例句：Mi bisabuela todavía se vale muy bien.我的曾祖母生活上还能很好的自理。3. 得到许可，被允许例句：No se vale hacer mas de tres inatentos.他被允许只能做三次。"
  },
  {
    "number": 293,
    "word": "solemnidad",
    "definition": "f. 1.盛大，隆重.2.庄严，郑重.3.（盛大或隆 重的）典礼仪式.4.程序；手续. de ~ 极端的：pobre de ~ 一贫如洗的人."
  },
  {
    "number": 294,
    "word": "socorrer",
    "definition": "tr. 援救，救助."
  },
  {
    "number": 295,
    "word": "escabullirse",
    "definition": "prnl. «de, de entre, por entre»  1.滑掉,滑脱.  2.消失： ~entre la multitud 消失在人群里. 3.逃走，逃脱，溜走.  (也用作不及物动词)"
  },
  {
    "number": 296,
    "word": "viraje",
    "definition": "m. 1.转弯， 调向， 调头： En un ~ brusco se salió de la pista. 一个急转弯出了跑道. 2.转弯处： un ~ peligroso 危险的转弯. 3.【转】变化， 转折： un punto de ~ 一个转折点. tomar un ~ inesperado 发生突然变化. 4.【摄】变色. 5.【海】抢风调向."
  },
  {
    "number": 297,
    "word": "frialdad",
    "definition": "f.1.冷，凉.2.寒冷，严寒.3.性感缺失，情欲冷淡. 4.无生殖能力.5.【转】冷淡，冷漠.6.【转】无热情，无干 劲；无用，窝囊.7.【转】蠢话，乏昧的话."
  },
  {
    "number": 298,
    "word": "cimbreante",
    "definition": "adj. 1.细而柔软的；袅娜的. 2.袅婷的，轻盈的."
  },
  {
    "number": 299,
    "word": "extasiar",
    "definition": "tr.使陶醉，使入神，使着迷. (也用作自复动词)"
  },
  {
    "number": 300,
    "word": "desplegar",
    "definition": "tr. 1. «pañuelo， periódico, las alas, rollo» 展开， 打开，铺开： ~una bandera 把旗子展开.  ~el periódico 打开报纸. (也用作自复动词) 2. 【军】 使散开，使分散. (也用作自复动词): ~ se la tropa en guerrillas 部队分散成为小股游击队. 3. 【转】 澄清， 阐明， 说明， 解释. 4. «actividad， prudencia, espíritu» 【转】 发展， 开展； 发挥， 运用： ~la tradición revolucionaria 发扬革命传统. Debemos ~más nuestra iniciativa. 我们要更加发挥积极性. Debemos seguir desplegando la experimentación científica. 我们要继续开展科学实验."
  },
  {
    "number": 301,
    "word": "papada",
    "definition": "f.1.下巴肉.2.（某些动物的）颈皱.3.[危地马拉方言]蠢话，蠢事：decir ~ s 说蠢话."
  },
  {
    "number": 302,
    "word": "tufillo",
    "definition": "m. 【口】气味."
  },
  {
    "number": 303,
    "word": "contrahecho",
    "definition": "contrahecho, chaadj. 1. 伪造的， 假的:  flor ~ a 假花. 2. 畸形的， 驼背的."
  },
  {
    "number": 304,
    "word": "vetusto",
    "definition": "vetusto, ta adj. 老朽的， 年迈的； 古老的， 陈旧的： mueble ~ 陈旧家具."
  },
  {
    "number": 305,
    "word": "consomé",
    "definition": "[法语词汇] m.汤，肉汤；清烛鸡汤."
  },
  {
    "number": 306,
    "word": "estrambótico",
    "definition": "estrambótico, caadj.【口】荒诞的，离奇的."
  },
  {
    "number": 307,
    "word": "brebaje",
    "definition": "brebaje, brebajo m. 1.(难喝的）饮料. 2.（船上）水手喝的酒.3.【貶】汤药."
  },
  {
    "number": 308,
    "word": "auspiciar",
    "definition": "tr. [拉丁美洲方言] 保护；赞助；主办."
  },
  {
    "number": 309,
    "word": "espetar",
    "definition": "tr. 1.用烤扦穿（食物>. 2.戮穿，刺透：Le espetó la espacia por el cuerpo. 剑扎进了他的身体. 3.【转，口】说出 (让人讨厌或吃惊的话）：Nos espetó un sermón. 他给了我们一通教训. |→ prnl. 1.摆起面孔，假装严肃，故作不凡.  2.【转，口】确信，确有把握."
  },
  {
    "number": 310,
    "word": "nefasto",
    "definition": "nefasto, taadj.不祥的；极坏的；有害的"
  },
  {
    "number": 311,
    "word": "vertiginoso",
    "definition": "vertiginoso, so adj. 1.致眩晕的. 2.使人失去自制能力的. 3.使人头晕目眩的， 使人晕头转向的， 使人眼花缭乱的. 4. 繁忙的， 纷乱的， 芜杂的. 5.高速的， 极快的."
  },
  {
    "number": 312,
    "word": "rumiar",
    "definition": "tr.1. 反刍， 倒嚼.  (也用作不及物动词) 2. 【转， 口】 反复考虑, 再三琢磨. 3. 【转， 口】 抱怨."
  },
  {
    "number": 313,
    "word": "promover",
    "definition": "tr.1. 推动， 促进： ~ la producción 推动生产. ~ el trabajo 促进工作. ~ la tramitación de un asunto 促进一件事情的处理. 2. 提倡， 倡导： ~ el espíritu de tenacidad en el trabajo 提倡坚持不懈的工作精神. 3. 引起， 激起： ~ un escándalo 引起混乱. Promovió con su discurso una tempestad de aplausos. 他的讲话激起了暴风雨般的掌声. 4. 提拔， 提升： Le han promovido al grado de capitán. 他们把他提升为上尉."
  },
  {
    "number": 314,
    "word": "somier",
    "definition": "[法语词汇] m. 床绷."
  },
  {
    "number": 315,
    "word": "peña",
    "definition": "f. 1.岩石，峥岩：Se ve una ~ en mitad del río.河中间有一块大石头.2.石山.3.（经常聚会的朋友的)圈子，帮,伙.4.俱乐部[某些娱乐团体用作名称]. ~ viva 裸露的岩石,光禿的岩石.durar por ~ s algo 历时长久：Este lienzo dura por ~ s.这块布能用很长时间.ser uno (una) ~ 麻木不仁,冷漠无情."
  },
  {
    "number": 316,
    "word": "substraer",
    "definition": "tr. 1.取出，去掉，扣除： ~ una parte de un todo 从整体中除去一部分.2.偷用（水、电等）.3.窃取. 4.【数】减,减去： ~ 3 de 7 七减三.|→prnl. 《a》回避，逃避,躲避：No te substraigas a mis preguntas. 你不要回避我的问题. Nadie podrá ~ se a la responsabilidad. 谁也逃避不了责任. No puedo ~ me a la tentación de probarlo. 我忍不住要尝试一下. Por fin se substrajo a manifestar su pensamiento. 他终于逃过了,没有表态."
  },
  {
    "number": 317,
    "word": "cestería",
    "definition": "f. 编筐业，筐篮作坊，筐篮店."
  },
  {
    "number": 318,
    "word": "contextura",
    "definition": "f. 1. 组织， 构造， 结构：la ~ de los músculos 肌肉组织.2. 思路， 上下文.  3. 体格， 体质： ~ enfermiza 多病的体质."
  },
  {
    "number": 319,
    "word": "bonificación",
    "definition": "f. 1.改良，改善：lá ~de las tierras 改良土地. 2.折扣：una ~de 3% 打百分之三的折扣."
  },
  {
    "number": 320,
    "word": "correligionario",
    "definition": "correligionario, ria adj.-s. 1. 同宗教的， 同教派的； 同宗教的人， 同教派的人. 2. 政见相同的， 志同道合的； 政见相同的人， 志同道合的人."
  },
  {
    "number": 321,
    "word": "ponedor",
    "definition": "ponedor, ra adj.1.产卵的，生蛋的（家禽）.2.会直立的（马）.|→ m.1.（鸡等）下蛋的窝，产卵的地方.2. 参见 postoi."
  },
  {
    "number": 322,
    "word": "rebaño",
    "definition": "m.1. (动物、牲畜、特别是羊的) 群： un ~ de carneros 一群羊. un ~ de elefantes 一群大象. 2. 【转】 教众."
  },
  {
    "number": 323,
    "word": "rasguño",
    "definition": "m.1. 搔痕， 抓痕， 挠痕. 2. 【美】 草图， 画稿."
  },
  {
    "number": 324,
    "word": "descarrilar",
    "definition": "intr. 出轨， 脱轨."
  },
  {
    "number": 325,
    "word": "cabecera",
    "definition": "f. 1.(某些东西的）开头，起始. 2.(主席台、餐桌等的）主位，首席. 3.床头. 4.床头栏杆. 5.枕头. 6.（教堂里> 主祭坛所在的部位, 前边. 7.(河流的）源头. 8.（事物的） 源，起因. 9.(省、县、地区等的）首府. 10.桥头.11.（书脊上下的）端头. 12.地头. 13.（田地里面的）高岗. 14.（印刷品的）页首装饰图案，章首装饰图案. 15.报头. 16.首领，首脑，领导 人. (也用作阳性名词) 17. 家长.(也用作阳性名词)18.【矿】钻工班长. (也用作阳性名词) 19.【古】（函件的）台头. 20.pl. 【印】木楔子. asistir  estar  a la ~de uno 陪伴护理(病人）."
  },
  {
    "number": 326,
    "word": "truhán",
    "definition": "truhán, ana adj.-s. 1.滑稽的； 小丑， 丑角. 2.招摇撞骗的; 骗子手."
  },
  {
    "number": 327,
    "word": "bizcar",
    "definition": "intr. 斜眼看；眼斜. |→ tr. 挤弄（眼睛）."
  },
  {
    "number": 328,
    "word": "predicar",
    "definition": "tr.1.公开宣布，公开声明：El comunismo predica la abolición de la propiedad privada.共产主义公开宣布要消灭私有制.2.表明，表白.3.过分颂扬，极口夸赞.4.宣讲，布讲.5.宣扬，鼓吹： ~ la obediencia 宣考顺从.6.规劝，告诫：Por más que le predico no se enmienda.我怎么说他都不改.7.【语法，逻】论断，说明（事物的属性）. |→ intr.讲经，讲道."
  },
  {
    "number": 329,
    "word": "bolero",
    "definition": "bolero, ra adj. 1.逃学的，旷课的.   (也用作名词)  2.【转，口】说谎的.  (也用作名词)  |→ m. 1.博莱罗舞；博莱罗舞曲. 2.（女用）短上衣. 3.[墨西哥方言], [中美洲方言] 高筒帽. 4.接球玩具. |→ m.f. 1.跳博莱罗舞的人.2.擦皮鞋的人. 3.[乌拉圭方言]拉套的马.a lo ~摇摇摆摆地."
  },
  {
    "number": 330,
    "word": "contorsión",
    "definition": "f. 1. (肢体的) 扭曲. 2. (引人发笑的) 怪相：Las ~ es de los payasos hacen reír a los niños. 小丑们的怪相逗得孩子们发笑."
  },
  {
    "number": 331,
    "word": "desistir",
    "definition": "intr. «de» 1. 放弃打算， 改变主意： He desistido de ir a Shanghai. 我打消了去上海的念头. 2. 【法】 放弃权利. 3.【 法】 退出诉讼."
  },
  {
    "number": 332,
    "word": "astilla",
    "definition": "f. 1. (木、石等的) 碎屑, 碎块, 碎片. 2. [拉丁美洲方言] 劈柴. sacar uno ~s. 【转, 口】得到好处."
  },
  {
    "number": 333,
    "word": "capitalino",
    "definition": "capitalino, na adj. 首都的，首府的."
  },
  {
    "number": 334,
    "word": "becerro",
    "definition": "m. 1.(不满一岁的）牡犊.2.熟小牛皮. 3.（教堂等处的）特权和资产登记册. (el) ~de oro【转】金钱.  ~ marino 【动】海豹."
  },
  {
    "number": 335,
    "word": "descuartizar",
    "definition": "tr. 1. 肢解， 切成四块. 2. 【口】 弄碎，分成小块."
  },
  {
    "number": 336,
    "word": "heroicamente",
    "definition": "adv.英勇地：morir ~ 英勇就义."
  },
  {
    "number": 337,
    "word": "desenfundar",
    "definition": "tr. 1. 取下套子. 2. 从套子里取出."
  },
  {
    "number": 338,
    "word": "nutrido",
    "definition": "nutrido, da adj.1.«bien,mal»滋养的.2.【转】密集的，大量的： ~ s aplausos 热烈的掌声. fuego ~ 密集的炮火. 3.«de»【转】丰富的,充满的：un trabajo muy ~ de citas 满篇引证的文章."
  },
  {
    "number": 339,
    "word": "proclive",
    "definition": "adj.倾向(某事物) 的， 爱好(某事物) 的[多指坏事]."
  },
  {
    "number": 340,
    "word": "hipo",
    "definition": "m.1.呃逆，嗝儿.2.啜泣，抽噎.3.«tener; por»【转】渴望，热望. 4.«tener; con»【转】反感.quitar el ~  1 .惊吓. 2 .使惊呆；使茫然."
  },
  {
    "number": 341,
    "word": "cesante",
    "definition": "adj. 停止的.  |→ adj.- s. 失业的；失业者."
  },
  {
    "number": 342,
    "word": "pardo",
    "definition": "pardo，da adj.1.棕褐色的.2.黑色的（云）；阴沉的（天空). 3.嘶哑的，不清晰的（嗓音）.4.黑白混血的.  (也用作名词)  |→ m.【动】豹."
  },
  {
    "number": 343,
    "word": "fogata",
    "definition": "f. 1.篝火，火堆.2.小炮眼."
  },
  {
    "number": 344,
    "word": "opíparamente",
    "definition": "adv.«comer»丰盛地. "
  },
  {
    "number": 345,
    "word": "talismán",
    "definition": "m. 1.护身符，辟邪物. 2.【转】法宝."
  },
  {
    "number": 346,
    "word": "Hereje",
    "definition": "m.,f. 1.不信天主教的人，异教徒，异端者. 2.【转，口】不恭的人，不敬的人. 3.干坏事的人. 4.【转】脸皮厚的人，不要脸的人. |→ adj. [智利方言] [委内瑞拉方言]很多的，足够的."
  },
  {
    "number": 347,
    "word": "paje",
    "definition": "m.1.侍童，伴童；小听差，小随从.2.（主教的）亲属.3. 梳妆台.4.【转】（古时妇女为了防止裙摆拖地用的）裙夹，裙带.5.【海】见习水手."
  },
  {
    "number": 348,
    "word": "folletín",
    "definition": "m. 1.（报纸上刊登或连载的）小说，杂文.2.【转】惊 险离奇的小说.3.【转】惊险离奇的事件."
  },
  {
    "number": 349,
    "word": "crisantemo",
    "definition": "m. 菊；菊花"
  },
  {
    "number": 350,
    "word": "florero",
    "definition": "florero, ra adj.1.喜欢哗众取宠的，喜欢卖弄的，喜欢耍花架子的. (也用作名词) 2.卖花的. (也用作名词)  3.扎假花的. (也用作名词)  |→ m.1.花瓶.2.盆花.3.花卉画.4.花架."
  },
  {
    "number": 351,
    "word": "voltear",
    "definition": "tr. 1.翻， 翻转， 翻动： ~ el disco 把唱片翻过来. ~ la parva 翻动场上的庄稼. (也用作自复动词) 2.使翻筋斗. 3.摇动， 敲击(钟）. 4.【建】建造（拱， 拱顶）. 5.转， 转动： ~ la espalda  la cabeza  转过身 头 去. 6.[拉丁美洲方言] 弄倒， 推倒. 7.泼， 洒. 8.[阿根廷方言] 巡视， 巡察. |→ intr. 翻筋斗. |→ prnl. 1.转变， 改变： El ejército se volteó en contra del gobierno. 军队转而反对政府. 2.Amer. 改变主意， 改变观点， 改变立场， 改变党派. 3.（女人）变心， 不忠."
  },
  {
    "number": 352,
    "word": "cláusula",
    "definition": "f.  1.(契约，遗嘱等的）条款. 2.【语法】句子. ~ absoluta 【语法】（句子中的）独立成分.  ~  compuesta 【语法】复合句. ~simple 【语法】简单句."
  },
  {
    "number": 353,
    "word": "fraile",
    "definition": "m. 1.僧侣、修士.2.（衣服的）折边，卷边.3.【印】（由于铅字未印上而造成的）空白. ~ de misa y olla【转，口】愚昧无知的僧侣."
  },
  {
    "number": 354,
    "word": "pilcha",
    "definition": "f.旧衣服"
  },
  {
    "number": 355,
    "word": "atiplado",
    "definition": "atiplado, da adj. 尖的, 最高的 (音) ."
  },
  {
    "number": 356,
    "word": "acicalado",
    "definition": "acicalado, da adj. 非常洁净的.|→ m. s.de. acicalar."
  },
  {
    "number": 357,
    "word": "fifiriche",
    "definition": "m. [拉丁美洲方言] 1.参见 petimetre.2.[拉丁美洲方言]痩弱的人."
  },
  {
    "number": 358,
    "word": "sorber",
    "definition": "tr. 1.吸，吮，嘬，呷. 2. 吸入，吸收，吸附：El papel secante sorbe la tinta. 吸墨纸能够吸墨水.3.吞没，吞噬: El mar sorbió las naves. 大海呑没了那些船只. Sorbían las palabras del maestro. 他们认真地听着老师的话."
  },
  {
    "number": 359,
    "word": "ostracismo",
    "definition": "m.1.（古希腊的）贝壳放逐法.2.淹放，放逐.3.(政治上的）引退；排斥."
  },
  {
    "number": 360,
    "word": "bulla",
    "definition": "f. 1.« armar, meter » 喧闹，吵闹. 2.熙攘的人群. 3. 【转】匆忙. 4.[秘鲁方言]声响. de ~[西班牙安达卢西亚方言] 急忙，匆忙. meter a ~打断（一件事情），使中止."
  },
  {
    "number": 361,
    "word": "muladar",
    "definition": "m.1.垃圾堆，粪堆.2.【转】肮脏的地方."
  },
  {
    "number": 362,
    "word": "afán",
    "definition": "m. 1. 刻苦, 勤奋, 努力： estudiar con ~ 刻苦学习. luchar con ~ 努力奋斗. 2. «de，por, sentir; tener; saciar, satisfacer» 渴望，热望，愿望： partiendo del ~ de unidad 从团结的愿望出发. Tiene mucho ~ por leer esa novela. 他非常想看那本小说. 3. pl. 辛劳, 劳累: Tantos ~es no serán vanos. 这么多的劳动不会白费."
  },
  {
    "number": 363,
    "word": "solidaridad",
    "definition": "solidaridad，solidariedad f. 1.(义务、责任等的）共同性，一致性. 2.（人们之间的）共同利害关系，休戚相关；紧密相连，团结一致. 3.《por; mostrar》 同情，赞助，支持：Tomó parte en esa acción por ~ con sus compañeros. 他参加了那一行动以表示对同志们的支持."
  },
  {
    "number": 364,
    "word": "séquito",
    "definition": "m. 1. 随从人员. 2.【转】伴随而来的事物，接踵而来的事物：la guerra y su. ~ de calamidades 战争和战争所造成的灾难."
  },
  {
    "number": 365,
    "word": "desentenderse",
    "definition": "prnl. «de» 1. 装作不懂,  装傻,  装聋作哑. 2. 不参与； 放手不管."
  },
  {
    "number": 366,
    "word": "soberano",
    "definition": "soberano, na adj. 1.享有主权的,独立自主的（国家）.2.最高的，至高无上的：autoridad ~a 最高权威. 3.无所限制的：potencia ~a 无限的威力. 4.至极的，不可超越的：de una belleza ~a 极美的. 5.【转】巨大的，沉重的：dar una ~a paliza 痛打.|→ m.f. 君主，最高统治者.|→m.金镑[英国古币]."
  },
  {
    "number": 367,
    "word": "peripatético",
    "definition": "peripatético, ca adj.1.亚里斯多德学派的,逍遥学派的.2.【转，口】怪诞的,荒唐可笑的.|→ f.野鸡,私娼."
  },
  {
    "number": 368,
    "word": "teósofo",
    "definition": "m.通神论者，神智学者."
  },
  {
    "number": 369,
    "word": "dentadura",
    "definition": "f. 【集】 牙齿； 假牙."
  },
  {
    "number": 370,
    "word": "postizo",
    "definition": "postizo, za adj.1.假的，后装的，非天然长出来的：dentadura ~ a 假牙.cabellera ~ a 假发.2.假装的：una sonrisa ~ a 笑.una amabilidad ~ a 假殷勤.3.不和谐的，不协调的：Ese lazo resulta ~.那个花结显得不协调. |→ m.假发.|→f.响板.(多用作复数)"
  },
  {
    "number": 371,
    "word": "contusión",
    "definition": "f. «sufrir» 内伤， 挫伤."
  },
  {
    "number": 372,
    "word": "parlotear",
    "definition": "intr.【口】闲扯，闲聊."
  },
  {
    "number": 373,
    "word": "quejumbre",
    "definition": "f.哀怨."
  },
  {
    "number": 374,
    "word": "lloriqueo",
    "definition": "m. 呜咽，啜泣."
  },
  {
    "number": 375,
    "word": "paliza",
    "definition": "f.棍击，殴打；（比赛中的）惨败；费力，累人的活儿- dar la ～烦扰- darse la ～亲吻，抚摩- ser un ～(s)非常讨厌"
  },
  {
    "number": 376,
    "word": "damnificado",
    "definition": "damnificado, daadj.受损害的；遭灾的m., f.灾民 "
  },
  {
    "number": 377,
    "word": "dorso",
    "definition": "m. 1. 背，脊背. 2. 背命， 反面：el ~de una carta 信的背面."
  },
  {
    "number": 378,
    "word": "enterrar",
    "definition": "tr. 1. 埋，埋藏. 2. 掩埋，埋葬. 3. 遗忘；摈弃,摈除： ~ las antiguas costumbres 抛掉旧习惯. ~ las ilusiones 丢掉幻想. 4.【转】藏匿：Enterré la carta entre los papeles. 我把信塞在纸中间了. 5.【口】寿命（比某人）长: Nos enterrará a todos. 他会比我们每个人都活得长. 6. [拉丁美洲方言]（把锐利的武器等）扎入，剌入： ~ la bayoneta en el pecho del enemigo 把剌刀扎入敌人的胸膛. |→ prnl. 隐退."
  },
  {
    "number": 379,
    "word": "impunemente",
    "definition": "adv. 未受惩罚地，不受制裁地，逍遥法外地."
  },
  {
    "number": 380,
    "word": "agarrotar",
    "definition": "tr. 1. 绞紧 (货包的绳子) . 2. 捆紧, 绑紧, 绷紧. 3. 捆住手脚. 4. 【转】束缚, 约束: Las masas no se dejan ~ por las restricciones irracionales. 群众不受不合理的条条框框的束缚. 5. 【转】 (寒冷等) 使 (身体某部分) 僵疲. 6. 绞死.|→ prnl. 1. 麻木. 2. 【机】 (机件) 运转不畅."
  },
  {
    "number": 381,
    "word": "agarrotado",
    "definition": "agarrotado, da adj. 1. 【转】僵硬的. 2. 【机】运转不畅的."
  },
  {
    "number": 382,
    "word": "avidez",
    "definition": "f. 1. 贪婪；如饥似渴. 2. 【化】亲和力, 活动性."
  },
  {
    "number": 383,
    "word": "brincar",
    "definition": "intr. 1.跳，蹦，跳跃. 2.【转，口】（谈话或朗读时）有意略过，省去. 3.【转，口】暴跳如雷. estar uno que brinca 暴跳如雷."
  },
  {
    "number": 384,
    "word": "rienda",
    "definition": "f.1. 缰绳. U.m.m pl. 2. 【转】 约束， 束缚. 3. pl.【转】 控制， 掌管： apoderarse dé las ~ s del Estado 擭取国家大权. Ella lleva las ~ s de la casa. 家里的事情都由她作主. falsa ~ 嚼勒. (多用作复数) aflojar las ~ s 1. 放宽控制. 2. 放松注意. a ~ suelta 放手地， 放任地， 不加节制地. dar ~ suelta 放任， 放纵： Los padres no deben dar ~ suelta a sus hijos. 父母不应对子女放任不管. Dio ~ suelta a su indignación  al llanto  . 他倾泄出满腔怒火 . empuñar las ~ 掌管， 负责. ganar las ~s (未骑在马上的人) 抓住马缰， 拦住马. llevar las ~ s  1. (骑手) . 抓着马缰. 2. 【转】 领导， 指挥. tener las ~ s 1. 参见 llevar las ~ s. 2. 勒紧马缰. tirar (de) la(s) ~ (s) 约束(某人) . volver (las) ~ s 调转马头."
  },
  {
    "number": 385,
    "word": "sobrecoger",
    "definition": "tr. 1.使出其不意. 2.使害怕，使惊恐. (也用作自复动词)"
  },
  {
    "number": 386,
    "word": "chato",
    "definition": "chato, ta adj. 1. 扁平的（鼻子）. 2. 鼻子扁平的（人， 动物）.  (也用作名词)  3. 【转】 不高的， 平的； 不尖的： plato ~浅口盘子. torre ~a 矮塔.4. [拉丁美洲方言] 【口】 卑微的， 低贱的； 无足轻重的.|→ m.,f. [昵称] 宝贝； 亲爱的.|→ m. 1. 广口酒杯，小酒杯. 2. [墨西哥方言] 【植】 龙舌兰. dejar ~[拉丁美洲方言] 愚弄, 戏弄; 使失望， 使失败， 使希望落空. quedar (se) ~Ámér. 被愚弄, 被戏弄； 失望， 失败， 希望落空."
  },
  {
    "number": 387,
    "word": "destituir",
    "definition": "tr. «de» 1. 罢免， 撤职. 2. 剥夺， 使丧失."
  },
  {
    "number": 388,
    "word": "retén",
    "definition": "m.1. 备用品， 贮备物. 2. 【军】 预备队， 后备队."
  },
  {
    "number": 389,
    "word": "bramar",
    "definition": "intr. 1.(牛或某些野兽）叫，吼. 2. « de dolor, de furia »【转】喊叫；咆哮. 3.【转】(海、风等）呼啸."
  },
  {
    "number": 390,
    "word": "tumefacto",
    "definition": "tumefacto, ta adj. 【医】肿起的，肿大的."
  },
  {
    "number": 391,
    "word": "trastrabillar",
    "definition": "intr. 1.磕磕绊绊， 跌跌撞撞. 2.犹豫， 迟疑. 3.结巴, 口吃."
  },
  {
    "number": 392,
    "word": "enderezar",
    "definition": "tr. 1. 使直， 弄直： ~un alambre 把铁丝弄直. ~el cuello de la camisa 把衬衣的领子拉好. 2. 扶直， 立起： ~un poste 把杆子扶起来. 3. 寄（信）； 献（作品）: ~ una carta a uno 给某人写信. ~un poema a los guardias fronterizos 把一首诗献给边防战士. 4. 【转】 料理， 使正常进行： ~ un asunto 料理一件事情. 5. 使改邪归正，使改掉（恶习等）： ~a uno 使某人改邪归正. ~a uno sus malas costumbres 使某人改掉坏习惯. 6. «a, hacia» 引， 导： ~ la corriente de agua al sembrado 把水引到田里. 7. «a, hacia» 使朝向， 使对准（某一目标): Enderezamos nuestros esfuerzos a la fortificación [de la amistad entre los pueblos del mundo. 我们努力加强世界各国人民之间的友谊.|→ intr. «a, hacia» 1. 走向： Enderezó a la pequeña aldea. 他朝着那个小村子走去. (也用作自复动词) 2. 为， 为了， 为着， 目的在于： Sus palabras se enderezaban a hacernos comprender la importancia de la presente lucha. 他讲话的目的是让我们明白当前这场斗争的重要意义."
  },
  {
    "number": 393,
    "word": "desplomar",
    "definition": "tr. 1. 使倾斜，使倾倒. 2. 斥责，责备.  |→  prnl. 1. 倾斜. 2. 倾倒，倒塌. 3. 晕倒，昏倒；倒下死亡. 4. «civilización, entusiasmo» 【转】 毁灭；突然消失."
  },
  {
    "number": 394,
    "word": "gaznápiro",
    "definition": "gaznápiro, ra adj.- s.头脑简单的，愚蠢的，笨拙的；儍瓜, 笨蛋. "
  },
  {
    "number": 395,
    "word": "moretón",
    "definition": "m.【口】（皮肤上的）瘀癍，青癍，紫癍."
  },
  {
    "number": 396,
    "word": "compresa",
    "definition": "f.【医】压布，敷布. "
  },
  {
    "number": 397,
    "word": "testarudez",
    "definition": "f. 固执."
  },
  {
    "number": 398,
    "word": "despabilar",
    "definition": "tr. 1. 剪烛花， 剪灯花. 2. 【转】 叫醒， 使清醒； 使失去睡意. 3. 【转】 使变聪明， 使变机灵. 4. 【转】 迅速结束;  很快耗尽： ~ la tarea 迅速完成任务. ~la comida 三口两口吃完. ~ la hacienda 一下子耗尽家产. 5. 【转】 去掉多余的部分； 排除障碍. 6. 【转】 偷， 窃. 7. 【转】 杀死， 杀害.|→ intr. [多用命令式] 迅速， 快： Despabila y acaba ese trabajo. 你快点把那件工作干完.|→ prnl. 1. 醒来. 2. 睡不着, 无睡意. 3. 迅速,  急速； 匆忙. 4. [拉丁美洲方言] 走开， 离去."
  },
  {
    "number": 399,
    "word": "recodo",
    "definition": "m.1. (河流、道路等的) 弯曲， 拐弯. 2. (台球弹子的) 连续撞边."
  },
  {
    "number": 400,
    "word": "mecer",
    "definition": "tr.  1.搅动,摇动（液体，容器）.2.摇晃： ~ la cuna 摇摇篮. ~ el columpio 打秋千. ~ a un niño 悠孩子.3.[西班牙阿斯图里亚斯方言]参见 ordeñar. 4.[西班牙萨拉曼卡方言] 参见 mezclar."
  },
  {
    "number": 401,
    "word": "fantasmagórico",
    "definition": "fantasmagórico, ca adj. 幻觉的."
  },
  {
    "number": 402,
    "word": "arado",
    "definition": "m. 1. 犁. 2. 耕作, 翻地. 3. [哥伦比亚方言] 已耕地. ~ de descuajar 开沟犁. ~ de discos 圆盘犁.  ~ de tractor 机引犁. ~ de vertedera 有壁犁, 铧式犁."
  },
  {
    "number": 403,
    "word": "agazapar",
    "definition": "tr. 【口】抓住, 捉住, 逮住.|→ prnl. 1. 躲藏, 隐蔽；伏在地上. 2. 【转】潜伏. 3. [阿根廷方言] 弯腰;蹲伏."
  },
  {
    "number": 404,
    "word": "avispado",
    "definition": "avispado, da adj. 1. 【转, 口】 活跃的, 机灵的, 聪明的. 2. [哥伦比亚方言] 有蜂状斑点的 (浅灰色的马) ."
  },
  {
    "number": 405,
    "word": "precipitar",
    "definition": "tr.1.«desde, por»扔下，投下，拋下，摔下： ~ algo por el balcón 把某物从阳台扔下去.2.加速,加快： ~ el paso 加快脚步. (也用作自复动词) ： Los acontecimientos se precipitaron a partir de aquel momento.从那个时侯起事态的发展加快了.3.【转】使陷入(不利境地）. (也用作自复动词)4.【化】使沉淀.  (多用作不及物自复动词)|→ prnL.1.跳下，跌下，落下： Se sujetó el paracaídas y se precipitó en el vacío.他系好降落伞就纵身跳了下去.Casi me precipité por la ventana cuando limpiaba los cristales.擦玻璃时我差一点儿从窗口掉下去.2.急忙：Al ver llegar a sus padres, los niños se precipitaron a recoger los juguetes dispersados por el suelo. 看见爸爸妈妈回来了，孩子急急忙忙去收拾抛散在地上的玩具.3.匆忙，仓促；草率，轻率，鲁莽：Te has precipitado rechazando la ayuda.你拒绝了人家的帮助有点轻率. 4.拥向： ~ se a la salida 拥向出口."
  },
  {
    "number": 406,
    "word": "tramitación",
    "definition": "f. 1.s.de tramitar. 2.【集】手续."
  },
  {
    "number": 407,
    "word": "peletería",
    "definition": "f.1.鞣皮业，制革业.2.毛皮店，皮货店.3.毛皮，皮货.鞋店."
  },
  {
    "number": 408,
    "word": "desenfado",
    "definition": "m. 1. 坦然自若， 无拘无束. 2. 随随便便， 不恭."
  },
  {
    "number": 409,
    "word": "dejo",
    "definition": "m. 1. 参见 dejación. 2. 结局， 终了. 3. 方音， 口音. 4. 声调. 5. （一句话或一段歌词末尾的） 降调. 6. 懒散， 怠惰. 7. 余味， 味道: Ese vino tiene un ~amargo. 那种酒有点苦味. 8. 【转】 印象， 滋味， 感觉： Me ha quedado mal ~ de la conversación que he tenido con él. 和他的那次谈话使我不太愉快."
  },
  {
    "number": 410,
    "word": "solícito",
    "definition": "solícito, taadj.勤快的；关心的；亲切的"
  },
  {
    "number": 411,
    "word": "chaperón",
    "definition": "m. 【建】 木檐."
  },
  {
    "number": 412,
    "word": "casamentero",
    "definition": "casamentero, ra adj.- s. 爱给人说媒的；爱说媒的人. "
  },
  {
    "number": 413,
    "word": "predilecto",
    "definition": "predilecto,ta adj.偏爱的，宠爱的：hijo ~ 锺爱的儿子."
  },
  {
    "number": 414,
    "word": "cocotero",
    "definition": "m.【植】椰子树."
  },
  {
    "number": 415,
    "word": "concerniente",
    "definition": "adj.«a» 与…有关的，关系到…的，涉及…的， 影响…的：la política ~a la industria 工业政策.los reglamentos ~ s a los transportes ferroviarios 铁路运输条例. Asistieron a la reunión dirigentes de los departamentos ~s. 有关部门的领导出席了会议. en lo ~ a 关于，至于；在…方面：El lobo no cambiará en lo ~a su naturaleza. 狼的本性是不会改变的. "
  },
  {
    "number": 416,
    "word": "aliñar",
    "definition": "tr. 1. 妆扮. (也用作自复动词) 2. 准备. 3. 加调料，加作料. 4. 【古】管理. 5. 正 (骨) ."
  },
  {
    "number": 417,
    "word": "aliñado",
    "definition": "aliñado, da adj. 梳妆整齐的, 打扮好的."
  },
  {
    "number": 418,
    "word": "faisán",
    "definition": "faisán, ana m.，f.【动】雉，环颈雉."
  },
  {
    "number": 419,
    "word": "tirolés",
    "definition": "tirolés, esa adj.-s. [奧地利]蒂罗尔 （Tirol) 的； 蒂罗尔人. |→ m. 1.蒂罗尔民歌. 2.玩具商； 铁器商."
  },
  {
    "number": 420,
    "word": "asedio",
    "definition": "m. 包围，围困"
  },
  {
    "number": 421,
    "word": "somnoliento",
    "definition": "somnoliento, ta adj. 1.有睡意的，想睡觉的.2.困乏的，倦怠的，慵懒的."
  },
  {
    "number": 422,
    "word": "purgante",
    "definition": "adj. 参见 purgador. |→ m.泻药； 致泻物质."
  },
  {
    "number": 423,
    "word": "nómada",
    "definition": "nómada, nómade adj.游牧的，流浪的: las tribus ~s de los árabes 阿拉伯游牧部落.(也用作阳性名词)"
  },
  {
    "number": 424,
    "word": "vitorear",
    "definition": "tr. (为某人）欢呼， 喝彩： ~ a los actores 为演员和彩.  (也用作不及物动词)： El público vitoreó cuando se metió el primer gol. 进了第一个球之后观众热烈欢呼起来."
  },
  {
    "number": 425,
    "word": "pandilla",
    "definition": "f.群，帮，伙."
  },
  {
    "number": 426,
    "word": "yugo",
    "definition": "m. 1.轭. 2.轭门[古罗马人让战败者从下面走过， 以示降服]. 3.钟架. 4.【转】（婚礼用的）盖头. 5.《someter(se); sujetar(se) al; sacudir el》 【转】压迫， 束缚, 桎梏: sacudir el ~ del imperialismo 摆脱帝国主义的束缚. 6.【转】婚姻枷锁. 7.【转】规律. 8.【转】沉重负担. 9.【海】船尾板.  ~ del matrimonio 婚姻， 婚姻枷锁. someterse al ~ de uno屈从."
  },
  {
    "number": 427,
    "word": "juerga",
    "definition": "f.1.【口】郊游，野游. 2. 娱乐；欢闹，嬉闹. 3. «armar; estar de; correrse; irse de» 纵酒狂欢，胡闹."
  },
  {
    "number": 428,
    "word": "lego",
    "definition": "lego, gaadj.- s. 1.在俗的，世俗的,凡俗的，未出家的；俗人,世 俗人.2.«en» 无知的，外行的；外行，门外汉：Soy ~ en medicina. 对于医学我是门外汉. |→ m.(寺院中的）职事僧."
  },
  {
    "number": 429,
    "word": "paisano",
    "definition": "paisano, na adj.-s.1.同国的；同胞.2.同省的，同地区的；同乡.3.平民的，百姓的；平民，百姓.4.乡下的，乡村的；乡下人，农民."
  },
  {
    "number": 430,
    "word": "emparentar",
    "definition": "intr. 结亲.  estar uno bien emparentado 有好亲戚， 有有权势的亲戚. "
  },
  {
    "number": 431,
    "word": "velatorio",
    "definition": "m. 1.守灵. 2.【集】守灵的人."
  },
  {
    "number": 432,
    "word": "ojal",
    "definition": "m.1.扣眼儿.2.眼儿，小孔，小洞.3.【矿】（吊索头上 的）环扣."
  },
  {
    "number": 433,
    "word": "clavel",
    "definition": "m. 【植】麝香石竹，康乃馨；麝香石竹花，康乃馨花.~ de la India臭万寿菊. ~ de las Indias 万寿菊.   ~ de muerto 参见 ~  de la India."
  },
  {
    "number": 434,
    "word": "holgado",
    "definition": "holgado, daadj.闲散的；肥大的；宽绰的；富裕的"
  },
  {
    "number": 435,
    "word": "malvado",
    "definition": "malvado, da adj.- s.心地很坏的，恶毒的，凶险的；歹徒，恶棍."
  },
  {
    "number": 436,
    "word": "tambalearse",
    "definition": "prnl.摇晃，蹒跚；动摇"
  },
  {
    "number": 437,
    "word": "taimado",
    "definition": "taimado, da adj.-s. 1.奸诈的，狡黠的.2.（因某事做不成）烦恼的，心绪不佳的."
  },
  {
    "number": 438,
    "word": "inexorable",
    "definition": "adj. 无情的，毫不留情的：La dialéctica de la historia es ~ 历史的辩证法是无情的."
  },
  {
    "number": 439,
    "word": "ensartar",
    "definition": "tr. 1.（把珠子等）穿成串. 2.纫： ~ una aguja 纫针. 3.刺穿，扎穿，戳穿：El toro lo ensartó con ambos cuernos. 牛用角把他顶伤了. 4.【转】语无伦次地说出，连串地说出： ~ tonterías 信口胡说."
  },
  {
    "number": 440,
    "word": "papilla",
    "definition": "f.1.(喂小孩的）土豆羹.2.【转】狡诈，狡黠.3.[南美洲拉普拉塔河流域方言] 【植】甘薯. dar ~ a uno 欺骗. echar la primera ~ / echar  hasta la ~ 大呕大吐. hacer ~ a uno 毒打.hacer ~ algo 1.使茫然；使狼狐；使疲惫. 2.弄碎. hecho ~ «dejar, estar» 1.狼狈的；疲惫的. 2.破碎的."
  },
  {
    "number": 441,
    "word": "pasmar",
    "definition": "tr.1.使变冷，使冷却.2.冻僵. (也用作自复动词)3.使着凉，使伤风. (也用作自复动词)4.冻坏，冻死（植物）. (也用作自复动词)5.使失去知觉，使昏厥. (多用作自复动词)6.【转】使惊愕，使惊讶，使惊异，使目瞪口呆.  (也用作不及物动词)- prnl7.[墨西哥方言]（马鞍）磨伤（马背）.|→ prnl.1.(色彩)变模变得昏暗：2.[拉丁美洲方言]消瘦. ~ de 沉醉于：Sufren sumisamente los insultos, pasmándose de la“legalidad”.为了“合法化”，他们只得硬着头皮挨骂."
  },
  {
    "number": 442,
    "word": "proselitista",
    "definition": "adj.(为宗教、理论、党派等) 拉教徒的， 拉信徒的, 拉支持者的."
  },
  {
    "number": 443,
    "word": "galantería",
    "definition": "f. 1.殷勤，讨好[尤指对妇女].2.殷勤话,讨好举动. 3.礼貌：portarse con ~ 彬彬有礼. 4.优雅，雅致.5. 豪爽，慷慨."
  },
  {
    "number": 444,
    "word": "reuma",
    "definition": "m., f. 风湿病"
  },
  {
    "number": 445,
    "word": "pedestre",
    "definition": "adj.1.徒步的.2.【转】平庸的,俗气的,低劣的,3.【体育】径赛的."
  },
  {
    "number": 446,
    "word": "recio",
    "definition": "recio，cia adj.1. 粗的， 粗大的： una cuerda ~ a 一根粗绳子. un árbol ~ 一棵大树. 2. 粗壮的， 健壮的： hombre de complexión ~ a 体格壮实的人. 3. 强劲的， 剧烈的， 猛烈的(行动) ： en lo más ~ de la lucha 在斗争最激烈的时刻. 4. 粗暴的， 暴躁的. 5. 恶劣的， 严酷的(气候) ： en lo más ~ del invierno 在冬季最寒冷的时侯. 6. 严峻的， 艰苦的： una ~ a prueba 一次严峻的考验. 7. 迅速的， 迅疾的： Mis mayores alegrías pasan más ~ as que un rayo. 我的最大的快乐转瞬间就消失了. 8. 肥沃的(土地) . |→ adv.1. 强劲地， 剧烈地， 猛烈地： pegar ~ 狠打. hablar ~ 高声讲话. 2. 迅速地， 迅疾地. de ~ 强劲地， 剧烈地，猛烈地."
  },
  {
    "number": 447,
    "word": "huraño",
    "definition": "huraño, ña adj. 孤僻的， 不和人来往的."
  },
  {
    "number": 448,
    "word": "trato",
    "definition": "m. 1.《frecuentar； tener； rehuir; buscar》 交往， 来往.2.对待, 接待， 招待; 待遇： Está contento con el ~ que recibe. 他对自己所受到的接待感到满意. 3.称呼. 4.买卖， 交易： hacer un ~ 做成一笔买卖. ~ carnal 性关系.  ~ de cuerda  1.反剪吊起[一种刑法]. 2.【转】亏待， 虐待. ~ de gentes 交际手腕. ~ de nación más favorecida 最惠国待遇. ~ doble 口是心非， 两面三刀. iTrato hecho! 就这样定了! cerrar un ~ 谈妥， 说定， 达成协议. hacer buenos  malos  ~ s a uno 给予优惠no querer con uno 不愿意同某人来往. romper el ~  con 与某人断绝来往."
  },
  {
    "number": 449,
    "word": "polvareda",
    "definition": "f.1.«levantar»尘埃，尘土.2.«armar，levantar;mover»【转】喧哗，骚动."
  },
  {
    "number": 450,
    "word": "emperramiento",
    "definition": "m. 固执，顽固."
  },
  {
    "number": 451,
    "word": "benigno",
    "definition": "benigno, na adj.1. « con» 好心的，宽厚的. 2.温和的estación ~a 气候温和的季节.3.【医】轻微的；良性的：fiebre ~ a 轻微发烧.tumor ~良性瘤.4.【转】无害的."
  },
  {
    "number": 452,
    "word": "cumbre",
    "definition": "f. 1. 山顶，山尖：Los montañistas chinos clavaron la bandera roja de cinco estrellas en la ~ del Qomolangma 中国登山运动员把五星红旗插上了珠穆朗玛峰顶. 2. 【转】 顶点， 极点， 最高峰， 最高潮."
  },
  {
    "number": 453,
    "word": "pródigo",
    "definition": "pródigo, ga adj.1. 挥霍无度的.  (也用作名词) 2. 浪荡的： hijo ~ 回头浪子.  (也用作名词)  3. «de» 慷慨的， 大方的； 不吝啬的： ~ de consejos 好给人以忠告的. ~ de su inteligencia 不吝惜自己的智慧的. ~ de su vida 不惜生命的.  (也用作名词) 4. «en» 丰富的， 丰裕的：Esta tierra es ~ a en toda clase de frutas. 这个地方盛产水果."
  },
  {
    "number": 454,
    "word": "esmero",
    "definition": "m. 精心，细心，仔细，细致：trabajar con，工作细心."
  },
  {
    "number": 455,
    "word": "exorbitante",
    "definition": "adj.过分的，过度的，过多的，过大的：un precio ~昂贵价格.un calor ~ 酷热."
  },
  {
    "number": 456,
    "word": "colirio",
    "definition": "m.【医】洗眼剂，眼药氷."
  },
  {
    "number": 457,
    "word": "argamasa",
    "definition": "f. 【泥】灰浆, 灰泥."
  },
  {
    "number": 458,
    "word": "tapiar",
    "definition": "tr. 砌墙围住，砌墙堵死： ~ una huerta 给菜园砌围墙. ~ una puerta 把门堵死."
  },
  {
    "number": 459,
    "word": "descomedido",
    "definition": "descomedido, da adj. 1. 不恭的， 不礼貌的； 厚颜无耻的. 2. 不匀称的."
  },
  {
    "number": 460,
    "word": "atrayente",
    "definition": "adj. 吸引人的, 诱人的, 迷人的."
  },
  {
    "number": 461,
    "word": "halagar",
    "definition": "tr.1.讨好，恭维；阿谀，谄媚: Quien halaga engaña. 当面说好话的人一定心怀不善.2.使满意，使喜悦：Le halaga que lo respeten. 人们敬重他，使他很满意.3.使愉快，使高兴：Me halaga hacer lo que dices. 我很愿意照你的吩咐去做."
  },
  {
    "number": 462,
    "word": "colmar",
    "definition": "tr.1.«de» 装满，注满，充满.2.填满，填死.3.«de» 【转】大量地给予： ~a uno de elogios 盛赞.4.【转】满足： ~los deseos  de uno 满足某人的愿望 ."
  },
  {
    "number": 463,
    "word": "episcopal",
    "definition": "adj. 主教的：dignidad ~ 主教职位. |→ m. 主教典仪书."
  },
  {
    "number": 464,
    "word": "acicalar",
    "definition": "tr. 1. 打磨, 擦亮, 磨光. 2.【建】压光 (墙面) .3.【转】打扮；装饰. (也用作自复动词) 4.【转】振奋."
  },
  {
    "number": 465,
    "word": "cojear",
    "definition": "intr.1.瘸行，跛行.2.(桌、椅等）摇晃.3.【转，口】品行不端正.4.【转，口】有恶习；有缺点."
  },
  {
    "number": 466,
    "word": "taladrar",
    "definition": "tr. 1.钻. 2.【转】 (声音）刺耳. 3.【转】（疼痛）钻心. 4.【转】领会，理解. 5.[哥伦比亚方言]诈骗."
  },
  {
    "number": 467,
    "word": "gaznate",
    "definition": "m.1.咽喉；脖子.2.油炸糕.3.[墨西哥方言]椰肉、菠萝鸡蛋羹[一种甜食]."
  },
  {
    "number": 468,
    "word": "vesícula",
    "definition": "f. 1.【医】泡. 2.【解】囊. 3.【植】(某些水生植物茎、 叶上的）气泡. ~ aérea 气襄. ~ biliar 胆藥.  ~ ovárica 囊状卵泡.  ~ seminal 储精嚢."
  },
  {
    "number": 469,
    "word": "pestillo",
    "definition": "m. «correr, echar; descorrer»1.门闩,插销.2.锁舌. ~ de golpe 弹簧插销，弹子锁，碰珠锁."
  },
  {
    "number": 470,
    "word": "caritativo",
    "definition": "caritativo, va adj. « con, para，para con » 仁爱的，仁慈的；慈善的，慈悲的."
  },
  {
    "number": 471,
    "word": "adiestrar",
    "definition": "tr. 1. 训练： ~ a los guerrilleros en el manejo de las armas 教游击队员使用武器. ~ un caballo 训练马. 2. 指引，引路."
  },
  {
    "number": 472,
    "word": "nogal",
    "definition": "m.1.【植】胡桃树，核桃树.2.胡桃木.3.胡桃色，淡赭石色[用作木料或家具的同位语]."
  },
  {
    "number": 473,
    "word": "refinamiento",
    "definition": "m.1. 纯净. 2. 精致， 精湛， 精美， 精巧. 3. 精心， 精细. 4. 暴虐性. 5. 精美设施： un cuarto de baño con todos los ~ s modernos 具有一切现代化设备的浴室."
  },
  {
    "number": 474,
    "word": "arisco",
    "definition": "arisco, ca adj. 1. 不随和的, 不合群的；难以接近的. 2. 烈性的, 不驯的 (动物) . 3. 胆怯的."
  },
  {
    "number": 475,
    "word": "quirquincho",
    "definition": "m. [拉丁美洲方言]【动】 犰狳."
  },
  {
    "number": 476,
    "word": "aprisionar",
    "definition": "tr. 1. 监禁. 2. 上脚镣. 3. 逮住, 俘获. 4. 绊住, 压住, 束缚住： Le aprisionó entre sus brazos. 把他拦腰抱住. No hay que dejarse ~ por la vieja práctica estereotipada y los preceptos y fórmulas copiados del extranjero. 不要受旧框框和洋框框的束缚."
  },
  {
    "number": 477,
    "word": "diáfano",
    "definition": "diáfano， na adj. 1. 透明的. 2. 清澈的，洁净的. 3. 【转】 光明磊落的： una conducta ~a 光明磊落的行为."
  },
  {
    "number": 478,
    "word": "ordeñar",
    "definition": "tr.1.挤(奶): ~ la vaca / ~ la leche 挤奶.2. 捋，釆，摘(树叶，果实等）.3.【转】（对某物或某人）榨取好处，充分利用，剥削."
  },
  {
    "number": 479,
    "word": "genio",
    "definition": "m.1.«tener» 性情，脾气.2.暴躁，火性：¡Caramba, tiene ~ esa chica! 哎哟，那个姑娘脾气倒不小!3.心情,情绪：Está de buen  mal  ~.他心情好 不好>. 4.(办事 的）劲头，冲劲儿：Ese niño tiene ~ .那孩子有股冲劲.5.天才，天资，才华.6.天才人物.7.能手：Es un ~ de la co - ciña.他是烹调能手.Es un ~ del disimulo. 惯于弄虚作假. 8.(神话中自然物的）守护神： ~del aire 风神. ~ del bosque 林神.9.(神话中的)精灵.10.(国家或时代的)特点, 精神，风格：el ~ del Renacimiento 文艺复兴时期的特点.11.(某种语言的）特征.buen  mal  ~ 好 脾气. ~ pronto (vivo) 容易生气也容易消气的脾气.agriársele el ~auno 发脾气.corto de ~ 畏缩的，怯懦的. echar mal ~脾气变坏.llevar el ~ a uno 掌握某人的脾气.pronto (vivo) de ~参见 ~pronto."
  },
  {
    "number": 480,
    "word": "tenacidad",
    "definition": "f. 1.牢固性，坚韧性.2.固着性.3.顽固性.4.顽强性，坚忍性，不屈不挠性. 5.【技】粘性."
  },
  {
    "number": 481,
    "word": "mellar",
    "definition": "tr. 1.使出破口，使出豁口，使出凹口： ~un cuchillo 把刀崩了.2.«honra，crédito, fama» 损坏，损害. |→ prnl. 掉牙."
  },
  {
    "number": 482,
    "word": "adepto",
    "definition": "adepto, ta adj.-s. 1. «a» 加入 (某团体) 的； (某团体的) 成员.2. «a,de» 拥护…的；拥护者, 信徒, 党羽. 3. 会炼金术的；炼金术士."
  },
  {
    "number": 483,
    "word": "prófugo",
    "definition": "prófugo, ga adj.-s.1. 在逃的； 逃犯. 2. 逃避兵役的； 逃避兵役的人."
  },
  {
    "number": 484,
    "word": "charqui",
    "definition": "m. 1. [拉丁美洲方言] 腊肉. 2. [智利方言] 水果干."
  },
  {
    "number": 485,
    "word": "poncho",
    "definition": "poncho,cha adj.1.懒的，懒惰的.2.温和的，温顺的.3.[哥伦比亚方言] 矮胖的.4.[委内瑞拉方言]短的（衣服）. |→ m. [拉丁美洲方言]1.彭丘[—种斗篷，状如一块长方毛毯，中间开有套头的口子].2.军用外套，军用大衣. alzar el ~ [阿根廷方言] 逃跑.estar a ~ [秘鲁方言],[厄瓜多尔方言]蒙在鼓里，一无所知."
  },
  {
    "number": 486,
    "word": "cartero",
    "definition": "m.,f. 邮递员."
  },
  {
    "number": 487,
    "word": "multitudinario",
    "definition": "multitudinario, ria adj.群众的，公众的，民众的."
  },
  {
    "number": 488,
    "word": "calaña",
    "definition": "f. 1.货样，样本，标本，模型. 2.【转】本质；性质，种类：ser de buena  ~ 品质好 不好>. 3.扇子."
  },
  {
    "number": 489,
    "word": "pesebre",
    "definition": "m.1.牲口槽，饲槽；饲盆.2.牲口圏，牲口棚.3.【天】巨蟹座星群.4.[哥伦比亚方言]耶稣诞生情景模型.conocer el ~ 哪儿有东西吃就上哪儿去."
  },
  {
    "number": 490,
    "word": "vasija",
    "definition": "f. 1.瓷， 罐. 2.【集】酒桶."
  },
  {
    "number": 491,
    "word": "cacharro",
    "definition": "m. 1.（粗糙的)器具，盆盒罐罐. 2.【转，口】日用器物，家什，不值钱的东西. 3.【转，口】破烂货. [多指破旧机器]. 4.pl. 【口】破盆烂罐. 5.[中美洲方言] 监狱."
  },
  {
    "number": 492,
    "word": "jaqueca",
    "definition": "f. 1.【医】偏头疼. 2.«dar» 【转，口】厌烦，折磨."
  },
  {
    "number": 493,
    "word": "suturar",
    "definition": "tr. 【医】缝合. "
  },
  {
    "number": 494,
    "word": "polen",
    "definition": "m.【植】花粉."
  },
  {
    "number": 495,
    "word": "cincha",
    "definition": "f. 1.（马的）肚带. 2.[哥斯达黎加方言]. 警刀，警察用刀. a revienta ~s 【转】气急败坏地，急急忙忙地. ir   rompiendo ~s 【转，口】飞驰，急驶."
  },
  {
    "number": 496,
    "word": "salmuera",
    "definition": "f. 1. 饱和盐水，浓盐水. 2.卤汁：carne en ~ 卤肉."
  },
  {
    "number": 497,
    "word": "columpiar",
    "definition": "tr.悠，摇，荡（秋千上的人）.|→ prnl.1.打秋千，悠荡.2.（走路时）摇摆，扭摆."
  },
  {
    "number": 498,
    "word": "mortandad",
    "definition": "f.1.大量死亡.2.[洪都拉斯方言]死牲畜."
  },
  {
    "number": 499,
    "word": "metralla",
    "definition": "f.1.【军】霰弹.2.【军】弹片.3.【冶】（溅在铸模外面的）铁火星."
  },
  {
    "number": 500,
    "word": "tisis",
    "definition": "f. 【医】1.痨病. 2.肺结核."
  },
  {
    "number": 501,
    "word": "tiza",
    "definition": "f. 1.粉笔. 2.白粉. 2.（抹台球棍尖用的）白垩粉. 3.钙化鹿角. 4.灯芯. ponerle ~ a algo [哥伦比亚方言] 夸大， 夸张."
  },
  {
    "number": 502,
    "word": "libélula",
    "definition": "f.【动】蜻蜓."
  },
  {
    "number": 503,
    "word": "hirsuto",
    "definition": "hirsuto, ta adj.1.粗硬的（毛发）.2.有硬毛的，有剌的：piel ~a 粗毛皮.fruto ~ 刺果.3.【转】粗暴的,暴躁的：carác-ter ~ 火暴脾气."
  },
  {
    "number": 504,
    "word": "sonajero",
    "definition": "m. 花铃[小孩玩具]."
  },
  {
    "number": 505,
    "word": "tetera",
    "definition": "f. 1.茶壶. 2.[古巴方言], [墨西哥方言], [波多黎各方言] 奶嘴. 3.[智利方言] 水壶."
  },
  {
    "number": 506,
    "word": "peltre",
    "definition": "m.【冶.】白襯[锡基合金，用于制作日用器皿]."
  },
  {
    "number": 507,
    "word": "rezongar",
    "definition": "intr.1. 嘟哝， 抱怨， 发牢騷. 2. Amér, 责骂， 责备."
  },
  {
    "number": 508,
    "word": "cantilena",
    "definition": "f. 1.诗歌，歌词；民歌，民谣. 2.【转口】老调,老生常谈."
  },
  {
    "number": 509,
    "word": "merodear",
    "definition": "intr.　1.抢劫，掠夺.2.流窜.3.(在某处）转悠.Anda merodeando por aquí para ver si se encuentra contigo. 他老是到这里来转来转去，想看看能否找到你."
  },
  {
    "number": 510,
    "word": "puré",
    "definition": "m.1. 菜泥. 2. 菜泥汤."
  },
  {
    "number": 511,
    "word": "fantoche",
    "definition": "[法语词汇] m.1.傀儡，木偶. 2.丑陋的人.3.没有头脑的人；不庄重的人.4.爱虚荣的人，爱吹嘘的人，爱夸耀的人;爱摆阔的人，爱摆架子的人. (也用作形容词)"
  },
  {
    "number": 512,
    "word": "politicastro",
    "definition": "m.【贬】政客，政棍."
  },
  {
    "number": 513,
    "word": "frugalidad",
    "definition": "f.1.(饮食的）节制.2.简单，简朴，节俭."
  },
  {
    "number": 514,
    "word": "perecer",
    "definition": "intr.1.死亡，暴亡：Pereció a manos de sus enemigos. 他死在敌人手里.2.消亡，消失，毁坏，毁灭：Tropezó en el pedestal y el jarrón allí colocado estuvo a punto de ~. 他撞在柱台上，放在那儿的一个罐子差一点就碰碎了.3.【转】（精神上）垮台，沉沦，堕落.4.【转】受苦，受罪，受折磨.5.【转】受穷，极度贫困.|→ prnl.1.«por»热望，渴望：Se perecen por venir con nosotros. 他很想和我们—起来.2.«por» 极其喜爱：Se perece por la música. 他对音乐喜欢得要命.3.«de» 要死：Nos perecíamos de risa. 我们笑得要死."
  },
  {
    "number": 515,
    "word": "arcilla",
    "definition": "f. 粘土： ~ verde  陶土. ~ blanca  瓷土, 高岭土. ~ plástica (制耐热仪器用的) 管土.  ~ refractaria 耐火粘土."
  },
  {
    "number": 516,
    "word": "improperio",
    "definition": "m. 1.辱骂. 2.pl. 【宗】耶稣受难日唱的短诗."
  },
  {
    "number": 517,
    "word": "felpa",
    "definition": "f. 1.长毛绒.2.【转，口】打，揍.3.【转，口】斥责，训斥."
  },
  {
    "number": 518,
    "word": "comunión",
    "definition": "f.1.共有，共同；一致：La ~de ideales nos une estrechamente.共同的理想把我们紧紧地联在一起.2.交往，来往.3.团体，社团，党派.4.【宗】领圣体，领圣餐；圣餐仪式. ~ de los fieles【宗，集】天主教徒. ~ de la Iglesia / ~ de los santos【宗】天主教徒大家庭.primera ~【宗】（小孩的）第一次领圣体. de primera ~ 【转，口】 盛装打扮的."
  },
  {
    "number": 519,
    "word": "revolotear",
    "definition": "intr. 1. 盘旋. 2. 在空中飘舞. |→ tr. 向空中抛掷."
  },
  {
    "number": 520,
    "word": "jilguero",
    "definition": "m.【动】一种朱顶雀 [Acanthis carduelis]."
  },
  {
    "number": 521,
    "word": "caturra",
    "definition": "f. [智利方言] 小鹦鵡."
  },
  {
    "number": 522,
    "word": "orgía",
    "definition": "orgía, orgiaf.1.酒神节.2.纵酒狂欢.3.【转】纵欲.4.【转】过多，过量，过度：una ~ de luces 灯光过多."
  },
  {
    "number": 523,
    "word": "rapaz",
    "definition": "adj.1. 掠夺成性的； 偷盗成性的. 2. 贪婪的， 贪得无厌的：usurero ~ 贪婪的高利贷者. 3. 【动】 凶猛的(飞禽) . |→ f.pl.【动】 猛禽类.rapaz，za m.,f.小孩."
  },
  {
    "number": 524,
    "word": "comisura",
    "definition": "f.1.【解】连合.2.【解】（头骨的）接缝.3.嘴角；眼角."
  },
  {
    "number": 525,
    "word": "rebasar",
    "definition": "tr.1. 超过， 超出： El agua del pantano rebasa el desaguadero. 塘里的水溢出了排水口. Ha rebasado la marca de los doscientos kilómetros. 他打破了二百公里的纪录. El agua rebasa 3 centímetros de la señal de la última crecida. 河水比上一次洪峰又高出三厘米. 2. 越过, 度过(危险、障碍、阶段等) ."
  },
  {
    "number": 526,
    "word": "violáceo",
    "definition": "violáceo, a adj.-f.pl. 【植】堇菜科的； 堇菜科. |→ adj. 参见 violado."
  },
  {
    "number": 527,
    "word": "espartano",
    "definition": "espartano, na adj.s. 1.[古希腊]斯巴达（Esparta)的;斯巴达人. |→ adj. 【转】严格的，有纪律的."
  },
  {
    "number": 528,
    "word": "clavícula",
    "definition": "f. 【解】锁骨."
  },
  {
    "number": 529,
    "word": "repicar",
    "definition": "tr.1. 斩碎， 捣碎. 2. 反复扎刺. 3. 连续敲击(钟） .  (也用作不及物动词) 4. [洪都拉斯方言] 惩罚. |→ intr.[牌戏] (打百分时在对家得分之前) 先得九十分. |→ prnl. «de» 夸示， 炫耀. 谚语： En salvo está el que repica. 旁观者清."
  },
  {
    "number": 530,
    "word": "bastonazo",
    "definition": "m.杖击，棍击"
  },
  {
    "number": 531,
    "word": "tísico",
    "definition": "tísico, ca adj.-s. 1.痨病的； 痨病患者. 2.肺结核的; 肺结核患者."
  },
  {
    "number": 532,
    "word": "croar",
    "definition": "intr. 蛙鸣， 呱呱叫."
  },
  {
    "number": 533,
    "word": "alero",
    "definition": "m. 1. 屋檐. 2. (车的) 挡泥板. 3. 边, 侧.|→ adj. 未交配过的 (雄鹿) . estar en el ~ 成败未定."
  },
  {
    "number": 534,
    "word": "mimbre",
    "definition": "amb.1.柳条，柳枝：cesta de ~s 柳条筐.2.【植】青刚柳."
  },
  {
    "number": 535,
    "word": "borrasca",
    "definition": "f. 1.大风暴，暴风雨. 2.【气象】风暴[十一级风]. 3.【气象】博拉科雷暴[地中海上的一种雷暴或猛烈风]. 4. 【转】危险，危难.5.【转，口】争吵；辩论；翻脸. 6.【转，口】 纵酒狂欢. 7. [阿根廷方言], [墨西哥方言] 贫矿."
  },
  {
    "number": 536,
    "word": "borrascoso",
    "definition": "borrascoso，sa adj. 1. 风暴的，暴风雨的：tiempo ~ 狂风暴雨的天气. 2.常受暴风雨侵袭的： El cabo de Hornos es ~.  合恩角经常有暴风雨. 3.【转】激烈的（争吵等). 4.【fe 口】 动荡不定的（生活）. 5.【转，口】放荡的（娱乐）."
  },
  {
    "number": 537,
    "word": "desconcierto",
    "definition": "m. «introducir, llevar, sembrar». 1. 失调， 失灵， 损坏：el ~del reloj 表坏了.  ~del brazo 手臂不听使唤. 2. 【转】 杂乱， 紊乱. 3. 【转】 不和， 纠纷. 4. 【转】 缺乏条理； 放荡不羁: vivir con ~生活没有条理. 5. 【转】 慌乱， 茫然： La maniobra sembró ~en las filas enemigas. 这一行动引起了敌人的慌乱. 6. 【转】 腹泻."
  },
  {
    "number": 538,
    "word": "coyuntura",
    "definition": "f. 1. 关节. 2. 【转】 机会， 时机. 3. 【转】时局， 局势. 4. 【转】 （政治、 经济、 社会等情况变化的） 征兆， 预兆. 5. 【转】 （造成现存形势的）因素."
  },
  {
    "number": 539,
    "word": "trotar",
    "definition": "intr. 1.(马）小跑. 2.骑马小跑. 3.【转, 口】奔走， 奔波."
  },
  {
    "number": 540,
    "word": "trote",
    "definition": "m. 1.s.de trotar. 2.【转， 口】辛劳， 忙碌. 3.【转， 口】麻烦， 纠葛. ~ cochinero 1.小步快跑. 2.俗套： no salir uno de su ~ cochinero 未脱俗套. al  a  ~ 1.小跑地. 2.快速地； 匆忙地. amansare el ~ 节制, 克制. de mucho ~ 结实的， 耐用的（衣物等）. hacer entrar  meter  en ~ s a uno 使习惯， 训练. para todo ~ 日常的, 普通的(衣物). tomar uno el ~ 突然走掉， 匆忙走掉."
  },
  {
    "number": 541,
    "word": "vozarrón",
    "definition": "vozarrón, vozarrona  m.粗声， 高声. "
  },
  {
    "number": 542,
    "word": "temer",
    "definition": "(se) tr.-intr.-prnL. 1.害怕:  ~ el castigo 害怕受罚. ~ a las consecuencias 害怕（某事的）后果. Él no teme a nadie. 他谁都不怕. No temas. 你别怕. Se temen con motivo. 他们害怕是有道理的. 2.担心：Temo que lo ha perdido. 我担心他已经把那个东西弄丢了. Temo que no vendrá con tanta lluvia. 下这么大的雨，我担心他不会来了. Me temo que vamos a llegar tarde. 我担心咱们要迟到. 3.怀疑:Temo que no nos haya dicho la verdad. 我怀疑他没对咱们讲实话."
  },
  {
    "number": 543,
    "word": "artefacto",
    "definition": "m. 器械, 装置."
  },
  {
    "number": 544,
    "word": "secundar",
    "definition": "tr. 支持,帮助，赞助： ~ los esfuerzos  las iniciativas   de uno 支持某人的努力 倡议>. Todos nos secundaron con entusiasmo. 大家都热情地支持我们."
  },
  {
    "number": 545,
    "word": "camposanto",
    "definition": "m. 墓地，公墓."
  },
  {
    "number": 546,
    "word": "pavor",
    "definition": "m.恐惧."
  },
  {
    "number": 547,
    "word": "camastro",
    "definition": "m.【贬】铺设简单的床铺，不舒适的床铺."
  },
  {
    "number": 548,
    "word": "añicos",
    "definition": "m.pl. «hacerse» 碎片： Se ha caído la taza y se ha hecho ~ . 杯子掉到地上摔得粉碎. hacer ~ 1. 打碎；撕碎；粉碎：hacer ~ un acuerdo 撕毁一个协定. 2. 【转】使精疲力尽. hacerse uno ~ 【转，口】竭尽全力, 全力以赴."
  },
  {
    "number": 549,
    "word": "parche",
    "definition": "m.1.补丁.2.膏药.3.鼓面.4.【转】鼓.5.【转】（与整体不协调的）附加物，多余物，累赘.6.【转】（对文艺作品的）不成功的润饰,败笔[尤用于绘画].7.【转，口】临时救急的办法：Las medidas adoptadas son meros ~ s，meras reformas de oportunidad.现在采取的这些措施只是一些临时救急的办法，一些权宜的改革.8.【斗牛】（贴在牛头上的）额饰.9.[古巴方言]【动】蝴蝶鱼.pegar un ~【转，口】1. 诈骗钱财.2.愚弄，嘲弄."
  },
  {
    "number": 550,
    "word": "venda",
    "definition": "f. 1.(古代君王用的）扎头带. 2.【医】绷带， 纱布条. caérsele a uno la ~ de los ojos 醒悟. llevar  poner, tener  una ~ en los ojos 不辨是非, 不明事理."
  },
  {
    "number": 551,
    "word": "enlatar",
    "definition": "tr. 1.使制成罐头，用罐头保存. 2.[西班牙安达卢西亚方言]，[拉丁美洲方言] 用薄板钉（屋顶等）."
  },
  {
    "number": 552,
    "word": "zafarrancho",
    "definition": "m. 1.【海】（对船上某个部位的）清理， 腾空: ~ de limpieza 清扫. ~ de combate 战斗准备. 2.【转, 口】毁坏； 杂乱: Quisieron correr la mesa sin quitar las cosas de encima e hicieron un ~ . 他们没拿掉上面的东西就搬桌子， 结果弄得一塌糊涂. 2.【转， 口】打架， 争吵: Se armó un tremendo ~ . 好一场厮打."
  },
  {
    "number": 553,
    "word": "fusilar",
    "definition": "tr.1.枪舞，枪决.2.【口】模仿，剽窃，抄袭."
  },
  {
    "number": 554,
    "word": "millar",
    "definition": "m.1.千：un ~ de hombres 一千人.2.大量，众多. (多用作复数)3.米亚尔[可可计量单位，约合三镑半].4.可放牧千只羊的草场. a ~ es  大量的，大批的，众多的."
  },
  {
    "number": 555,
    "word": "sumir",
    "definition": "tr. 1.使沉没；使埋没： ~ algo en el fondo del mar 将某物沉入海底.2.《en》【转】使陷入，使堕入： ~ en un mar de confusiones 使茫然失措. ~ en la miseria 使堕入贫困的深渊. ~ en la ignorancia 使陷于愚味无知的境地. ~ en honda meditación 使陷入沉思. 3.【宗】（神父）分享 (圣体）. prnl.1.(雨水、污水等）排走. 2.《en》【转】陷入，沉浸.3.(人体的某一部位如嘴、胸部等）凹陷."
  },
  {
    "number": 556,
    "word": "entablillar",
    "definition": "tr. 【医】用夹板固定（受伤部位）： ~ un brazo 用夹板固定断臂."
  },
  {
    "number": 557,
    "word": "parsimoniosamente",
    "definition": "adv.1.有节制地；节俭地.2.稳重地，镇静地;.不慌不忙地，慢慢腾腾地."
  },
  {
    "number": 558,
    "word": "odre",
    "definition": "m.1.(盛酒、油等的）皮袋，皮囊..2.【转】酒鬼，醉汉."
  },
  {
    "number": 559,
    "word": "partitura",
    "definition": "f.【乐】总谱，乐谱."
  },
  {
    "number": 560,
    "word": "cascote",
    "definition": "m. 1.碎砖乱瓦，瓦砾. 2.【建】砖石填料. 3.【转】(诗歌、讲演中夹杂的)衬字，无含义的字词."
  },
  {
    "number": 561,
    "word": "rotura",
    "definition": "f.1. s.de romper(se). 2. 中断： la ~ de las negociaciones 中断谈判. 3. 参见 contrarrotura."
  },
  {
    "number": 562,
    "word": "dictaminar",
    "definition": "intr. 发表意见， 提出见解."
  },
  {
    "number": 563,
    "word": "cautela",
    "definition": "f. 1.小心，谨慎，慎重. 2.狡猾，奸诈."
  },
  {
    "number": 564,
    "word": "bofetada",
    "definition": "f. « dar, pegar » 1.耳光. 2.【转】难堪，侮慢.darsede ~s una cosa con otra 不协调，不一致."
  },
  {
    "number": 565,
    "word": "desmoronar",
    "definition": "tr. 1. 使逐渐崩溃： El agua y el viento desmoronan la tapia. 风吹雨打渐渐把土墙弄塌了 . 2. 【转】 消磨; 瓦解. |→ prnl. 【转】 衰败，崩溃： La sociedad capitalista va desmoronándose. 资本主义社会日趋衰落."
  },
  {
    "number": 566,
    "word": "desmoronarse",
    "definition": "崩溃"
  },
  {
    "number": 567,
    "word": "teja",
    "definition": "f. 1.瓦.2.瓦形物.3.瓦形帽.4.剑背.5.【植】椴树.6. 【海】（桅杆的）接口.  ~ árabe 锥形瓦. ~ plana 方瓦，平瓦. a ~ vana 1.无天棚的，无顶棚的. 2.【转】轻率地. a toca ~  1.以现金（支付）. 2.立即（做某事）. de ~ s abajo 【转，口】1.在一般情况下. 2.在尘世，在人间. de ~ s arriba 【转，口】1.按照天意. 2.在天上."
  },
  {
    "number": 568,
    "word": "estruendo",
    "definition": "m.1.巨响，轰响.2.【转】喧闹，嘈杂.3.【转】奢华，豪华，铺张."
  },
  {
    "number": 569,
    "word": "despachurrar",
    "definition": "tr. 1. 【口】 压扁， 挤坏， 砸烂. 2. 【转，口】 讲乱， 搅胡涂. 3. 【转，口】 使无言以对."
  },
  {
    "number": 570,
    "word": "acuarela",
    "definition": "f. 水彩画."
  },
  {
    "number": 571,
    "word": "vespertino",
    "definition": "vespertino, na adj. 1.下午的， 黄昏的， 傍晚的. 2.【天】随日而没的（星辰）. |→ m. 晚报. |→ amb. 【宗】夕课. |→ f. (大学的）午后文学讲座."
  },
  {
    "number": 572,
    "word": "matutinal",
    "definition": "matutinal; matutino, na adj.早晨的，清晨的."
  },
  {
    "number": 573,
    "word": "somnolencia",
    "definition": "f. 《dar, entrar; sacudir, vencer》 1.睡意，瞌睡；朦胧状态，昏沉状态. 2.困乏，倦怠，慵懒."
  },
  {
    "number": 574,
    "word": "desganar",
    "definition": "tr. 使不想， 使不愿. |→ prnl. 1. 食欲不振. 2. 【转】 厌弃， 厌倦."
  },
  {
    "number": 575,
    "word": "atrancar",
    "definition": "tr. 1. 闩上 (门, 窗) . 2. 堵塞 (管道) .|→ intr. 1. 【口】大步流星地走. 2. 【转, 口】浏览.|→ prnl. 1. (管道) 堵塞, 壅塞. 2. 停住, 被阻住. 3. 闭门不出. 4. 固执己见."
  },
  {
    "number": 576,
    "word": "homeopático",
    "definition": "homeopático, ca adj.1.顺势疗法的.2.【转】微小的，微量的."
  },
  {
    "number": 577,
    "word": "pichón",
    "definition": "pichón，ona adj. [古巴方言]胆小的，胆怯的.|→ m.，f.1.雏鸽. 2.【转】亲爱的[男女之间的昵称].3.[古巴方言](除鸡以外任何禽类的)雏.4.[哥伦比亚方言]【口】小孩."
  },
  {
    "number": 578,
    "word": "costra",
    "definition": "f. 1. 巴， 嘎巴儿； 硬皮. 2. （苦役船上的） 干粮. 3. 烛花, 灯花. 4. 【医】痂.  ~ láctea 【医】 婴儿湿疹."
  },
  {
    "number": 579,
    "word": "desgañitarse",
    "definition": "prnl.使劲地叫喊 "
  },
  {
    "number": 580,
    "word": "faena",
    "definition": "f.1.（体力或脑力的）劳动，工作，活计：las ~s del campo 田里的活茬.2.杂务，家务.(多用作复数) 3.«hacer» 损人利己行为.4.【斗牛】引逗动作.5.[危地马拉方言],[墨西哥方言] 额外劳动，加班.6.Ecmd.(早晨和上午的）农活.7.[阿根廷方言]屠宰牲畜. 8.[智利方言]工棚. ~ mala  pesada  损人利己行为. ~ s agrí- colas 农活.  ~ s domésticas 家务. metido en ~ 【口】全力以赴的."
  },
  {
    "number": 581,
    "word": "roce",
    "definition": "m.1. s.de rozar(se).2. 磨擦痕迹. 3. 【转】 接触， 来往: Con el ~ se toma cariño. 经过接触就会产生感情."
  },
  {
    "number": 582,
    "word": "vaho",
    "definition": "m. 1.呵气， 哈气. 2.热汽， 蒸汽. 3.pl. 【医】蒸汽疗法."
  },
  {
    "number": 583,
    "word": "mastín",
    "definition": "mastín，ina adj.- s.大猎犬的；大猎犬."
  },
  {
    "number": 584,
    "word": "abalanzar",
    "definition": "tr. 1. 使 (天平) 平. 2. 使平衡, 使均衡. 3. 猛力掷出. |→ prnl. 1. «a，hacia, sobre» 冲,扑： Me abalancé a la ventana. 我冲到窗口. Todos se abalanzaron hacia la salida. 人们拥向出口. Se abalanzaron sobre el enemigo. 他们向敌人扑去. ~se a los peligros 迎着危险上. 2. [阿根廷方言] (马)直立."
  },
  {
    "number": 585,
    "word": "furibundo",
    "definition": "furibundo, da adj.1.易怒的.2.愤怒的：echar  lanzar  una mirada ~ a 恶狠狠地瞪一眼. 3.激烈的：una batalla ~ a 激战."
  },
  {
    "number": 586,
    "word": "sapo",
    "definition": "m. 1.【动】蟾蜍，癞蛤蟆. 2.【口】蛙，蛤蟆.3.【口】（水 中的）小生物.4.[古巴方言] 一种蟾鱼 [Batrachus tau] . 5.[阿根廷方言], 金蟾呑金[一种向青蛙模型的口中投掷钱币的游戏]. 6. [智利方言] (打台球时碰到的）好运气.  ~ de cuatro ojos 一种蟾蜍[Cystignathus bibronii]. ~ marino【动】鮟鱇. ~ s y culebras 【转,口】1. 破烂，废物. 2. 《cchar (por la boca), soltar (por la boca)》 咒骂，脏话."
  },
  {
    "number": 587,
    "word": "grillo",
    "definition": "m.1.【动】蟋蟀.2.【植】芽.3.pl.脚镣.4.pl.覊绊， 障碍，阻碍. ~ cebollero  real  蝼蛄，欧洲蝼蛄.cantar el ~【转，口】（钱币）叮当响."
  },
  {
    "number": 588,
    "word": "cerrojo",
    "definition": "m. 1.（门、窗等的）闩，插销. 2.（武器的）栓. 3.（足球的）封锁. 4.【矿】丁字形巷道."
  },
  {
    "number": 589,
    "word": "vislumbrar",
    "definition": "tr. 1.隐约看见， 模糊看见:  ~ la costa 海岸遥遥在望. 2.【转】预见预感， 看出， 看到： ~ las consecuencias de una acción 预计到某一行动的后果. No vislumbro todavía una solución. 我还看不到解决的办法. 3.【转】提出： Esa resolución vislumbra la creación de un centro informa tivo. 那项决议提出要建立一个情报中心."
  },
  {
    "number": 590,
    "word": "correspondencia",
    "definition": "f. 1. s.de corresponder (se). 2. 通信来往：mantener ~con uno 和某人通信. 3. 贸易往来. 4. 书信：despachar esperar  ~发 等  信. 5. (一个词语在另外一种语言中的） 对应词义. en ~作为报答， 作为酬谢."
  },
  {
    "number": 591,
    "word": "impúdico",
    "definition": "impúdico, caadj. 1.没有廉耻的，不知羞耻的.  (也用作名词) 2.厚颜无耻的，厚脸皮的，不要脸的."
  },
  {
    "number": 592,
    "word": "ventroso",
    "definition": "ventroso, sa adj. 大肚子的（人、 动物或器物）."
  },
  {
    "number": 593,
    "word": "asueto",
    "definition": "m. (一天或半天的) 假期, 休假： día de ~ 休假日."
  },
  {
    "number": 594,
    "word": "fusta",
    "definition": "f.1.鞭子，长鞭.2.(单桅或双桅的)快船.3.细树枝;细柴；细棍.4.一种毛纺织品."
  },
  {
    "number": 595,
    "word": "rasguear",
    "definition": "tr.(同时拨动全部弦的) 抡弹， 刮弹， 抓弹(吉他) . |→ intr.1. 写花体字. 2. 【转】 书写."
  },
  {
    "number": 596,
    "word": "ronco",
    "definition": "ronco, ca adj.1. 沙哑的（声音) ； 声音沙哑的（人) . 2. 粗的（声音) . |→ m. [古巴方言]—种鱼[Haemulon plumieri] ."
  },
  {
    "number": 597,
    "word": "tronar",
    "definition": "impers. 打雷. |→ intr. 1.发出雷鸡般的声响， 轰响， 轰鸣： ~ los cañones 炮声隆隆. 2.【口】破产. 3.【口】大发雷霆； 破口大骂. 4.【转， 口】大肆攻击. 5.《com》 【转， 口】吵翻， 闹翻. |→ tr. [墨西哥方言] 枪杀. por lo que pueda ~ 以防万一."
  },
  {
    "number": 598,
    "word": "misivo",
    "definition": "misivo，va adj.1.发出的，寄出的：carta ~a函件.2.使命的.|→f.书信，信函."
  },
  {
    "number": 599,
    "word": "sastre",
    "definition": "m.裁缝. ser lo que tase un ~ 尚难断定，还很难说[多用将来时]: De eso, será lo que tase un ~ . 那件事究竟怎现在还很难说.谚语: El ~ del campillo  cantillo ， que cosía de balde y ponía el hilo. 小店裁缝做人难，既赔功夫又搭线[用于指某人白费功夫做了某件事，反而还要有所破费].Entre ~ s no se pagan hechuras. 裁缝做衣不花工钱[用于指同一行业或做同一性质的工作的人之间互相照顾].No es mal ~ el que conoce el paño.1.认识布料就不算坏裁缝[只用于指某人对自己经手的事情很在行].2.人贵有自知之明."
  },
  {
    "number": 600,
    "word": "zancada",
    "definition": "f. 大步. en dos ~ s 三步两步地， 一下子， 很快地： Se plantó allí en dos ~ s. 他三步两步就到了那儿."
  },
  {
    "number": 601,
    "word": "aglomerar",
    "definition": "tr. 1. 使凝聚, 使结块, 使成团. 2. 积聚, 汇集, 堆积： ~ datos 收集材料.|→ pmrnl. 聚集, 聚拢: La gente se aglomeró alrededor del viejo maestro para escucharle. 人们围着老师傅听他讲话."
  },
  {
    "number": 602,
    "word": "hortensia",
    "definition": "f.【植】绣球."
  },
  {
    "number": 603,
    "word": "andrajo",
    "definition": "m. 1. 破布, 烂布； (衣服上撕裂的) 布条. 2. 破旧衣衫: ir vestido de ~s 衣衫褴褛.3. 【转，贬】下贱的人；不值钱的物品."
  },
  {
    "number": 604,
    "word": "meticulosamente",
    "definition": "adv.1.胆小地.2.谨慎地，小心地，仔细地."
  },
  {
    "number": 605,
    "word": "mordiscar",
    "definition": "tr.啃，连续地咬，一点一点地咬."
  },
  {
    "number": 606,
    "word": "agonía",
    "definition": "f. 1. 弥留；垂死挣扎. 2. 【转】末日, 临终之际. 3. 【转】极度痛苦. 4. 【转】强烈愿望.|→ m.pl. 【口】懦弱悲观的人."
  },
  {
    "number": 607,
    "word": "encasquetar",
    "definition": "tr. 1. 戴好（帽子）. (也用作自复动词)  2. 【转】 使学会，  使明白， 使记住， 灌输:  No sé quién te ha encasquetado esas ideas absurdas. 我不知道是谁给你灌输了那些荒谬的思想. (也用作自复动词) 3.  【转】 使忍受，强迫接受. |→ prnl. 1. 产生， 形成（某种固执的想法、 念头）：Se le encasquetó la idea de mudar de trabajo. 他一心想调工作.  2. 闯入， 不请自来."
  },
  {
    "number": 608,
    "word": "tafetán",
    "definition": "m. 1.【纺】塔夫绸. 2.【医】绸底橡皮裔. 3.【转】旗.4. pl.【转，口】（女人的）艳丽服饰. ~ inglés 【医】绸底橡皮裔."
  },
  {
    "number": 609,
    "word": "apolillado",
    "definition": "apolillado, da adj. 1. 被虫蛀了的. 2. 【转，口】陈旧的, 陈腐的, 过时的."
  },
  {
    "number": 610,
    "word": "engalanar",
    "definition": "tr. «con» 装饰,装扮. (也用作自复动词)"
  },
  {
    "number": 611,
    "word": "descomedimiento",
    "definition": "m. 傲慢无礼； 厚颜无耻."
  },
  {
    "number": 612,
    "word": "flamante",
    "definition": "adj. 1.闪闪发光的，光彩夺目的.2.新的，崭新的： un traje ~ 新衣服.3.新上演的（电影，戏剧）.4.新上任的；刚开始的：un ~ médico 新来的医生，Aquí está nues- tro ~jefe.这是我们的新领导.Todavía no se acostum- bra a su ~ situación .他对自己的新的处境"
  },
  {
    "number": 613,
    "word": "cadete",
    "definition": "m. 1.（贵族出身的）士官生. 2.军校学员. 3.[南美洲拉普拉塔河流域方言]，[玻利维亚方言](商店的)学徒. hacer el ~【转，口】轻率，鲁莽."
  },
  {
    "number": 614,
    "word": "bisutería",
    "definition": "f. 假珠宝. "
  },
  {
    "number": 615,
    "word": "casulla",
    "definition": "f. 1.十字褡[神甫的一种法服]. 2.Hmd,(米中的）谷粒."
  },
  {
    "number": 616,
    "word": "almirante",
    "definition": "m. 1. 海军上将. 2. 【古】舰队司令；海军司令. 3. 【古】远征军司令[专指哥伦布 (Cristóbal Colón) 及其以后征服新大陆的人]. 4. 【转】 (妇女的) 一种头饰."
  },
  {
    "number": 617,
    "word": "bambalina",
    "definition": "f.【剧】檐幕，横幕."
  },
  {
    "number": 618,
    "word": "bailotear",
    "definition": "intr.狂舞，乱舞."
  },
  {
    "number": 619,
    "word": "boa",
    "definition": "f. 【动】主蛇. |→ m. (毛皮或羽毛的）围巾."
  },
  {
    "number": 620,
    "word": "a tientas",
    "definition": "a tientas: 摸索地"
  },
  {
    "number": 621,
    "word": "abastecer",
    "definition": "tr. «con, de» 供应, 供给： ~ de víveres una guarnición 供应驻军粮食. Abastecieron el barco con  víveres para una semana. 给船上了一周的口粮. (也用作自复动词)"
  },
  {
    "number": 622,
    "word": "desvencijar",
    "definition": "tr. 1. 使散开，弄散. 2. 【转】 使筋疲力竭. (也用作自复动词) |→ prnl. 患疝气."
  },
  {
    "number": 623,
    "word": "parduzco",
    "definition": "parduzco, caadj.棕褐色的"
  },
  {
    "number": 624,
    "word": "sigiloso",
    "definition": "sigiloso，sa adj. 隐秘的，秘密的，悄悄的."
  },
  {
    "number": 625,
    "word": "apilar",
    "definition": "tr. 1. 堆积. 2. 积累, 积攒."
  },
  {
    "number": 626,
    "word": "raído",
    "definition": "raído，da adj.1. 破旧的， 磨损的(衣物等) . 2. «ir» 衣服破旧的. 3. 无毛的. 4. 不知羞耻的， 厚颜无耻的."
  },
  {
    "number": 627,
    "word": "parqué",
    "definition": "m.镶木地板."
  },
  {
    "number": 628,
    "word": "incubar",
    "definition": "tr. 1.孵（蛋）.  (也用作不及物动词) 2.【转】密谋，策划."
  },
  {
    "number": 629,
    "word": "ademán",
    "definition": "m. 1. 姿势, 表情, 手势, 姿态： Hizo ~ de deciralgo. 他好象要说话. Estaba en ~ pensativo. 他若有所思. 2.pl. 举止, 风度. en ~ de 做出…的样子."
  },
  {
    "number": 630,
    "word": "delatar",
    "definition": "tr. 1.告发， 检举. 2. 揭露."
  },
  {
    "number": 631,
    "word": "fuente",
    "definition": "f.1.泉，源泉.2.喷水池，人造喷泉.3.永道口，水拴. 4.(盛菜用的）大盘子.5.【转】根源，起源,来源：las ~ s de la historia 史料.una ~de información 消息来源. El latín es la ~ del español. 西班牙文源自拉丁文. 6.【宗】洗礼池，圣水池.7.【医】排泄口，人工开口.8.风（马飞节附近的）凹窝. ~ bautismal【宗】洗礼池，圣水池，de bue-na ~ / de ~可靠的（消息）.9.（常用pl.）（作家用作资料的）文件；作品；材料.las fuentes de la historia 史料Para hacer su tesis ha consultado numerosas ~s. 为了写论文，他已经查阅了大量资料.~ de alimentación电源~ de los deseos（可投入硬币的）许愿井~ de sodaAmér. 饮料店；咖啡店~ termal温泉de buena ~ 或 de ~ fidedigna（消息）来源可靠的"
  },
  {
    "number": 632,
    "word": "trinchar",
    "definition": "tr. 1.（进餐时)切(食物). 2.【口】支配."
  },
  {
    "number": 633,
    "word": "trastornar",
    "definition": "tr. 1.翻动, 弄乱: No me trastornes las fichas, 你别把卡片给我弄乱了. 2.搞乱, 搅乱， 打乱(思想， 计划等):  ~ las ideas  la vida normal  de la gente 搅乱人们的思想 正常生活  . Con el mal tiempo se ha trastornado nuestra proyectada excursión. 由于天气不好， 我们预定的郊游算告吹了. 3.【转】使惶惑不安， 使心神不定; Nos ha trastornado la noticia del accidente. 发生事故的消息搞得我们心神不定. (也用作自复动词) 4.【转】使精神失常， 使神经错乱. 5.【转， 口】使喜爱， 使着迷， 使倾倒， 使神魂颠倒. (也用作自复动词)"
  },
  {
    "number": 634,
    "word": "arrebatar",
    "definition": "tr. 1. 抢, 夺: ~ a uno la vida 夺去生命. no ~ a los prisioneros los efectos personales 不搜俘虏的腰包. Mediante tratados desiguales la Rusia zarista arrebató a China grandes extensiones de territorio. 沙俄通过不平等条约强占了中国大片领土. Las guerrillas arrebataban armas al enemigo para armarse. 游击队夺取敌人的武器来武装自己. 2. 卷走, 冲走: El viento me arrebató el sombrero. 风把我的帽子吹掉了. Los comuneros luchaban para evitar que la corriente arrebatara los ganados. 社员们为了不让牲畜被冲走, 和激流进行着搏斗. 3. (炎热的气候) 使 (作物) 发育过快, 使早熟. (也用作自复动词) 4. (火过大) 使 (食物) 烧煳, 使烧焦. (也用作自复动词) 5. «mirada, vista, atención» 【转】 吸引. 6. «ánimo, corazón» 【转】博得, 得到: Arrebata a la gente con su honradez. 由于他待人诚恳而得到大家的喜爱. Arrebató los corazones con su desinterés. 他的无私精神深得人心. 7. 【转】迷住, 使着迷, 使入神. 8. 【转】激怒, 使恼火；使激动. 9. 【转】使脸红. 10. [拉丁美洲方言] 冲撞. |→ prnl. 1. 恼怒；大发雷霆；激动. 2. (听到警报后) 蜂拥而至."
  },
  {
    "number": 635,
    "word": "compota",
    "definition": "f.糖水水果."
  },
  {
    "number": 636,
    "word": "tupido",
    "definition": "tupido, da adj. 1.细密的， 厚实的（织物）： tela muy ~ a 很细密的布. 2.【转】迟钝的， 蠢笨的. 3.大量的."
  },
  {
    "number": 637,
    "word": "trepar",
    "definition": "intr. 攀登， 攀缘： ~ a un árbol 爬树. La hiedra trepa por las paredes. 常春藤缘墙而上. |→ tr. 1.穿孔， 打眼， 开洞. 2.（给衣物）加波线边饰， 加螺线边饰. |→ prnl. treparse."
  },
  {
    "number": 638,
    "word": "brotar",
    "definition": "intr. 1.萌发，长出： ~el trigo 小麦出土.  ~las hojas 长出叶子. Ya empiezan a ~los árboles. 树木已开始发绿. 2.涌出，流出，冒出：Brotaba sangre de la herida. 血从伤口流出来. 3.发出，出现： ~el sarampión 出麻疹.  ~ una llamarada 冒火焰. En su mente brotó una sospecha. 他头脑里突然闪出了一个疑问. |→ tr.1.（土地）长出 (植物）. 2.【转】引起，产生."
  },
  {
    "number": 639,
    "word": "relinchar",
    "definition": "intr.(马) 嘶叫."
  },
  {
    "number": 640,
    "word": "desvalido",
    "definition": "desvalido, da adj. 无依无靠的（人）.   (也用作名词)"
  },
  {
    "number": 641,
    "word": "savia",
    "definition": "f.1.【植】浆液.2.【转】元气，精力，活力."
  },
  {
    "number": 642,
    "word": "trinar",
    "definition": "intr. 1.(鸟）啼啭. 2.【乐】发颤音， 用颤音唱. 3.【口】发怒， 发火."
  },
  {
    "number": 643,
    "word": "desconcertar",
    "definition": "tr. 1. 打乱， 弄乱， 扰乱. 2. 使脱臼， 使移位. 3. 【转】 使茫然， 使仓皇失措: Una pregunta inesperada me desconcertó. 一个突如其来的问题使我不知如何是好. El heroísmo del niño guerrillero desconcertó al enemigo. 小游击队员的英勇气概惊呆了敌人. 4. 【军】 迷惑， 惑乱： Hay que emplear tácticas flexibles para ~al enemigo. 应该采取灵活的战术借以迷惑敌人.|→ prnl. 1. 失调，紊乱:  ~ se el estomago 胃失调. 2. 不和， 闹纠纷. 3. 脱臼. 4. 失去镇静, 不能自持; 茫然， 手足无措."
  },
  {
    "number": 644,
    "word": "humus",
    "definition": "m. 腐植质， 腐植土. "
  },
  {
    "number": 645,
    "word": "empapar",
    "definition": "tr. 1. 吸收(水等）.  (也用作自复动词): La tierra empapa el agua 2. «con» 弄干， 吸干， 擦干： ~el agua del suelo con  un trapo 用抹布擦去地上的水. 3. 湿透， 沾湿， 打湿：La lluvia me ha empapado la ropa. 雨打湿了我的衣服.  (也用作自复动词)： La lluvia se empapa en la tierra. 雨淋湿了地面. 4. «en, de» 浸湿， 泡湿， 蘸湿： ~el algodón en alcohol 把棉花在酒精里蘸湿. ~ la galleta en (el) vino 把饼干放在酒里泡一下. |→ prnl.  1.  熟悉， 熟知， 了解. 2. 接受（思想、 感情等）： ~se en una doctrina 接受某种理论. 3. 【口】 餍足."
  },
  {
    "number": 646,
    "word": "traslúcido",
    "definition": "traslúcido, da; trasluciente adj. 半透明的."
  },
  {
    "number": 647,
    "word": "crepitar",
    "definition": "intr. 劈拍作响， 发出爆裂声： La leña cuando arde crepita mucho. 木柴在燃烧的时候劈拍作响."
  },
  {
    "number": 648,
    "word": "rocío",
    "definition": "m.1. 露水， 露珠. 2. 露水状物， 露珠状物： un ~ de lágrimas 泪珠. 3. 毛毛雨； 小阵雨.  4. (喷洒生物体上的) 水珠.  ~ de sol 【植】 毛颤苔."
  },
  {
    "number": 649,
    "word": "sable",
    "definition": "m. 1. 马刀，军刀.2. 【转，口】敲诈本领，诈骗本领. 3. 【纹】黑色. 4.【古】沙子，砂子. 5. [西班牙阿斯图里亚斯方言] (海边、河边的）沙滩.6.[古巴方言] 【植】细尾带鱼."
  },
  {
    "number": 650,
    "word": "arropar",
    "definition": "tr. «con, en» 1. 盖, 裹: ~ al niño en la cama 给睡在床上的孩子盖好.  ~ la masa de pan 把面团盖起来. (也用作自复动词) 2. 【转】保护. 3. (往酒里) 加葡萄汁."
  },
  {
    "number": 651,
    "word": "nuera",
    "definition": "f.儿媳妇. "
  },
  {
    "number": 652,
    "word": "detenidamente",
    "definition": "adv. 仔细地， 认真地."
  },
  {
    "number": 653,
    "word": "congoja",
    "definition": "f.1.【生理】呼吸困难，窒闷. 2.痛苦，3.苦恼，忧伤悲哀."
  },
  {
    "number": 654,
    "word": "pulguiento",
    "definition": "adj. [拉丁美洲方言]满是跳蚤的， 长满跳蚤的."
  },
  {
    "number": 655,
    "word": "reverberación",
    "definition": "f. 1. s.de reverberar. 2. 【化】 反焰. 3. 【冶】 (在反射炉中) 煅烧， 焙烧."
  },
  {
    "number": 656,
    "word": "media",
    "definition": "f.  1.长袜.2.«hacer» (针织的）平针.3.【口】半点钟：Son las cinco y ~ .现在是五点半.4.【数】平均数；中项.5.【体育】中线. ~ aritmética【数】平均数. ~ corta [拉丁美洲方言] 袜子，短袜. ~ diferenciaí【数】算术中项，等差中项. ~ media [拉丁美洲方言] 参见 ~ corta. ~ proporcional【数】比例中项."
  },
  {
    "number": 657,
    "word": "corpiño",
    "definition": "m.女式背心；[pl.] Amér. 乳罩"
  },
  {
    "number": 658,
    "word": "abono",
    "definition": "m.1. s.de abonar(se) . 2. «tener» 长期票：un ~ de autobús 公共汽车月票. un ~ de butaca en la ópera 歌剧院的长期票. 3. 肥料： ~ en verde 绿肥.  ~s químicos 化肥. ~s orgánicos有机肥. 4. 担保, 保证."
  },
  {
    "number": 659,
    "word": "chanza",
    "definition": "f. «decir， gastar» 玩笑."
  },
  {
    "number": 660,
    "word": "rictus",
    "definition": "m.【医】 强笑.  ~ de amargura  苦笑."
  },
  {
    "number": 661,
    "word": "rezagar",
    "definition": "tr.1. 使落在后面. 2. 推迟， 延缓. |→ prnl.落后."
  },
  {
    "number": 662,
    "word": "azucena",
    "definition": "f. 1. 【植】白花香百合. 2. 百合花. 3. 【转】纯洁的人;洁白纯净的东西. 4. [古巴方言] 【植】晚香玉."
  },
  {
    "number": 663,
    "word": "depravado",
    "definition": "depravado, da adj. 1. 腐化的, 堕落的, 道德败坏的. 2. 坏的，邪恶的."
  },
  {
    "number": 664,
    "word": "embaucar",
    "definition": "tr. 1. 欺骗. 2. 使迷惑."
  },
  {
    "number": 665,
    "word": "intercalar",
    "definition": "tr. 插入，添加. |→ adj. 插入的，添加的：día ~（二月份的）闰日."
  },
  {
    "number": 666,
    "word": "extenuar",
    "definition": "tr. 1.使衰弱. El trabajo excesivo me extenúa. 过多的工作使我疲惫不堪。2.使疲惫. (也用作自复动词)Se ha extenuado en la carrera y ha llegado sin fuerzas. 他跑得筋疲力尽，到达时已经瘫软了。"
  },
  {
    "number": 667,
    "word": "zarandear",
    "definition": "tr.筛；猛烈摇动；使奔忙"
  },
  {
    "number": 668,
    "word": "vilo",
    "definition": "(en) adv. 1.悬空地， 无依托地， 无支撑地： sostenerse algo en ~ 悬在半空. 2.不稳定地， 不牢靠地. 3.《estar》 焦灼不安地； 无把握地； 游移不定地."
  },
  {
    "number": 669,
    "word": "besuquear",
    "definition": "tr.【口】连续亲吻."
  },
  {
    "number": 670,
    "word": "argucia",
    "definition": "f. 诡辩, 狡辩."
  },
  {
    "number": 671,
    "word": "celar",
    "definition": "tr. 1.严格遵守，履行. 2.照料，照管. 3.监督，监视. 4. 掩饰，隐藏，隐瞒： ~uno sus intenciones 掩饰自己的意图.5.雕，刻."
  },
  {
    "number": 672,
    "word": "amodorrado",
    "definition": "amodorrado, da adj. 昏睡的."
  },
  {
    "number": 673,
    "word": "tromba",
    "definition": "f. 1.水龙卷. 2.暴雨. ~ de agua 【转】暴雨. en ~ 猛烈地； 蜂拥地."
  },
  {
    "number": 674,
    "word": "abalar",
    "definition": "tr. 1. 移动. 2. 赶 (牲口)."
  },
  {
    "number": 675,
    "word": "marimacho",
    "definition": "m. 男子气的女人."
  },
  {
    "number": 676,
    "word": "refocilar",
    "definition": "tr.1. 使高兴， 使愉快， 使兴奋. (也用作自复动词)2. 使幸灾乐祸. (也用作自复动词) |→ intr.-prnl. [阿根廷方言]闪电， 打闪."
  },
  {
    "number": 677,
    "word": "costurero",
    "definition": "m. 1. 针线包， 针线盒， 针线笸箩； 缝纫桌. 2. 缝纫室."
  },
  {
    "number": 678,
    "word": "baquiano",
    "definition": "baquiano, na adj.-s. 1.熟悉地情的；向导.2.[拉丁美洲方言]内行的； 行家."
  },
  {
    "number": 679,
    "word": "convulsionar",
    "definition": "tr. 【医】 使抽搦， 使抽搐， 使痉挛. "
  },
  {
    "number": 680,
    "word": "haraposo",
    "definition": "haraposo, sa adj.破烂不堪的，衣衫褴褛的."
  },
  {
    "number": 681,
    "word": "limosna",
    "definition": "f.  1.«dar, hacer; pedir»施舍；施舍物. 2.【转】微不足道的报酬."
  },
  {
    "number": 682,
    "word": "inusitado",
    "definition": "inusitado, da adj. 不寻常的，异常的：frío ~ 少有的寒冷. belleza ~ a 异常美丽."
  },
  {
    "number": 683,
    "word": "exantemático",
    "definition": "exantemático, ca adj.【医】疹的，发疹的：tifus ~ 斑疹伤寒."
  },
  {
    "number": 684,
    "word": "tifus",
    "definition": "m. 1.【医】斑疹伤寒. 2.【医】黄热病. 3.【口】（演出的）受雇喝采者， 捧场者. ~ abdominal 肠热病.  ~ exantemático 斑褒伤寒.  ~ icterodes 黄热病. ~ petequial 参见 ~ exantemático."
  },
  {
    "number": 685,
    "word": "demacrado",
    "definition": "demacrado, da adj. 消瘦的， 憔悴的."
  },
  {
    "number": 686,
    "word": "embrollar",
    "definition": "tr. 1. 弄乱. 2. 使纠缠不清."
  },
  {
    "number": 687,
    "word": "despachurrado",
    "definition": "adj. 滑稽可笑的； 微不足道的."
  },
  {
    "number": 688,
    "word": "rosacruz",
    "definition": "m.f.【宗】 红玫瑰十字教派成员. |→ f. 红玫瑰十字教派."
  },
  {
    "number": 689,
    "word": "perentorio",
    "definition": "perentorio, ria adj.1.强制的，决定的，断然的.2.最后的，不能拖延的（期限）.3.紧急的，迫不及待的：una necesidad ~ a 紧急需要."
  },
  {
    "number": 690,
    "word": "misérrimo",
    "definition": "misérrimo, ma adj.superl.de  mísero."
  },
  {
    "number": 691,
    "word": "relegar",
    "definition": "tr.1. 流放， 放逐， 驱逐：  ~ a un preso 流放一名犯人. 2. 【转】 弃置， 搁置： ~ al olvido algo 把某事丢在脑后."
  },
  {
    "number": 692,
    "word": "mocoso",
    "definition": "mocoso，sa adj.1.«estar; ser»拖鼻涕的.2.【转】年幼无知的. (也用作名词) 3.【转】无教养的；狂妄的，放肆的.  (也用作名词) 4. 【转】无足轻重的，无价值的. (也用作名词)"
  },
  {
    "number": 693,
    "word": "esculpir",
    "definition": "tr. 1.«a, en»  雕刻,雕塑： Esculpió (a cincel) en mármol a los hombres más eminentes de su época. 他把他同时代的杰出人物雕成大理石像. 2.参见 grabar."
  },
  {
    "number": 694,
    "word": "hosco",
    "definition": "hosco, ca adj. 1.黑褐色的. 2.严肃的,不可亲的，不易接近的（人，表情，态度）. 3.阴沉的（天气）. 4.不宜人的（地方）."
  },
  {
    "number": 695,
    "word": "rotoso",
    "definition": "rotoso，sa adj. [拉丁美洲方言]衣衫褴褛的， 衣服破烂的. "
  },
  {
    "number": 696,
    "word": "varilla",
    "definition": "f. 1.棍， 竿， 条. 2.伞骨； 扇骨. 3.【口】下颌骨支. 4.pl. 筛架. 5.（赛马前的）试马. 6.下流话. 7.[墨西哥方言] (货郎、 挑贩等卖的）杂货. 8.[智利方言] 【植】含羞花. 9. [智利方言] 【植】腺毛豆. 10.pl. [哥伦比亚方言] 小儿抽搐， 小儿痉孪.  ~ mágica  de virtudes  (神话中的）魔棍."
  },
  {
    "number": 697,
    "word": "espiga",
    "definition": "f. 1.穗；谷穗： ~ de trigo麦穗. 2.穗状花纹, 鱼刺状花饰. 3.榫，钉，销，栓，枢. 4.（可以插入另器物中的）细端，细头. 5.（刀、剑、锉等器具的）柄舌，柄脚. 6.无头钉， 木钉，合缝榫. 7.铃舌，钟舌. 8.（参加婚礼的人送给新娘 的）礼物，赠品. 9.【农】接穗. 10.【建】（螺旋梯的）台阶窄端，台阶接柱端. 11.【海】桅顶，桅头.12.【军】引信，信管，引火 装置.13.【天】角宿一[室女座a星]."
  },
  {
    "number": 698,
    "word": "verídico",
    "definition": "verídico, ca adj. 1.可信的； 可能真有其事的： una historia ~ a 一个可信的故事. 2.诚实的， 正直的（人）."
  },
  {
    "number": 699,
    "word": "calzón",
    "definition": "m. 1.男用短裤;裤子 . (多用作复数) 2.（高空作业的）安全带，保险带. 3.（甘蔗的）根叶焦枯病. 4.[玻利维亚方言] 辣椒炒猪肉. 5.[拉丁美洲方言] 女裤. a ~quitado « hablar »【转，口】肆无忌惮地；恬不知耻地. llevar bien puestos los ~es【转，口】有权威，有威信.  calzarse  poner  uno los ~es 【转，口】施权威，发号施令."
  },
  {
    "number": 700,
    "word": "alacrán",
    "definition": "m. 1. 【动】南蝎. 2. 金属环扣. 3. [阿根廷方言] 说人坏话的人.  ~ cebollero 楼蛄. ~ marino 鮟鳒."
  },
  {
    "number": 701,
    "word": "refunfuñar",
    "definition": "intr.(因为不满) 嘟嚷. "
  },
  {
    "number": 702,
    "word": "calambre",
    "definition": "m. 1.痉挛，抽搦，抽搐. 2.胃痉挛. 3.触电.  ~de estómago 胃疼挛. ~del escribiente 手部和前臂疼挛."
  },
  {
    "number": 703,
    "word": "lipiria",
    "definition": "f.1.【医】寒热. 2.[智利方言] 不得体的言行，令入讨厌的言行，"
  },
  {
    "number": 704,
    "word": "boñiga",
    "definition": "f. 牛马粪. "
  },
  {
    "number": 705,
    "word": "cecina",
    "definition": "f. 1.咸肉干，干咸肉. 2.[南美洲拉普拉塔河流域方言]肉干."
  },
  {
    "number": 706,
    "word": "estupor",
    "definition": "m.1.惊讶，惊愕.2.【医】麻木，僵呆."
  },
  {
    "number": 707,
    "word": "acequia",
    "definition": "f.1. 水沟, 水渠： ~ s para el riego 灌溉渠. 2. [拉丁美洲方言] 小河, 溪."
  },
  {
    "number": 708,
    "word": "extraviada",
    "definition": "extraviada: 迷路的"
  },
  {
    "number": 709,
    "word": "preso",
    "definition": "preso,sa p.p.irreg.de prender.|→ adj.-s.被囚禁的；囚徒，犯人.谚语：Preso por mil, ~ por mil y quinientos. 1.干了一次就可以干一百次[用于指做坏事].2.既然干了,那就干到底[用于表示下定决心]."
  },
  {
    "number": 710,
    "word": "porte",
    "definition": "m.1.携，带；搬运，运输.2.运费.(也用作复数)3.表现,行为，举止.4.仪表： ~ majestuoso 仪表威严.5.外表,外观：un coche de poco ~ 一辆外观不怎么样的汽车.6.出身.7.体积；容量：un barco de gran ~ —艘大船."
  },
  {
    "number": 711,
    "word": "presagiar",
    "definition": "tr.预示，预报：Esas nubes presagian tormenta.那些云预示着要下大雨."
  },
  {
    "number": 712,
    "word": "amasijo",
    "definition": "m. 1. 和面；和灰, 和泥. 2. 和好的面. 3. 【建】灰浆. 4. 【转, 口】工作, 任务. 5. 【转，口】混合, 混杂, 搀合;杂绘. 6. 【转, 口】阴谋, 合谋： andar en el ~ 搞阴谋."
  },
  {
    "number": 713,
    "word": "ropero",
    "definition": "ropero, ra adj.存放衣物的. |→ m.f.1. 成衣经售商. 2. 衣物看管人. |→ m.1. (游牧人的) 衣物采办人. 2. 衣柜. 3. 存衣室， 存衣处. 4. 衣物施舍局."
  },
  {
    "number": 714,
    "word": "sacristía",
    "definition": "f. 1.圣器室. 2. 参考 sacristanía."
  },
  {
    "number": 715,
    "word": "luto",
    "definition": "m. 1.«estar de; ir de; ponerse de» 服丧. 2.哀悼. 3.哀伤. 4.丧服.5.丧物.  (也用作复数) ~ riguroso  1 .全丧[指 人刚死后严格按照丧礼行事的期间]. 2 .全丧服[全丧期间穿的黑色衣服]. medio ~ 半丧服[指灰色、紫色或黑白花等素淡颜色的服装]. aliviar el ~ 简丧，减丧. caer un ~ a uno 突然死了亲人. estar de ~ 1 . 服丧. 2 . 【转】哀伤.ir de ~ 戴孝."
  },
  {
    "number": 716,
    "word": "la corte",
    "definition": "la corte: 朝廷"
  },
  {
    "number": 717,
    "word": "contrarrestar",
    "definition": "tr. 1. 抵御： ~ los progresos de una enfermedad 控制病的发展. 2. 抵消,  消除： ~ ~el efecto  la influencia de algo 抵消  消除  某一事物的效果 影响 .  3. （将球） 打回."
  },
  {
    "number": 718,
    "word": "erguirse",
    "definition": "prnl.1. 站起来Se agachó y enseguida volvió a ~. 他弯下身，又立马站起来.2. 耸立，伫立La estatua se erguía en el centro de la ciudad. 那座雕像伫立在城市的中心.3. 骄傲，自大No te yergas tanto por haber conseguido el puesto. 你别因为谋得了这个职位而如此自大."
  },
  {
    "number": 719,
    "word": "bulto",
    "definition": "m. 1.« de; hacer » 体积：un libro de poco ~ —本不厚的书. 2.突起；包，疙瘩：El pañuelo hace ~  en el bolsillo. 手帕把衣袋撑得鼓起来. 3.包袱，包裹： ~  de ropa 衣服包. 4.枕心. 5.模糊不清的物体；人影：Allá lejos se ven algunos ~s. 远处有几个人影. 6.半身塑像：imagen de ~ 胸像. 7.主体，主要部分. 8.[拉丁美洲方言] 书包，背包.提包.a ~ 粗略地，大概地：Calculé a ~ que había doscientas personas. 我估计有二百来人. buscar el ~ a uno 寻畔，找碴儿. coger a uno (en) el ~ 找到，碰到. de ~ 1.  « ser; error » 明显的，严重的. 2.  « estar, hacer, ir » 陪伴着，壮阵势地：Yo hablaré y tú irás de ~ . 我去说，你只要跟着去就行了. escurrir  el ~ 逃避（工作、 危险、义务等）.menear el ~ a  uno 责罚，殴打. poner de ~ algo (讲述中）强调，突出. tentar  el ~ a uno 参见 menear el ~."
  },
  {
    "number": 720,
    "word": "peluca",
    "definition": "f.1.假发：llevar una ~ 戴假发.2.【转，口】戴假发的人.3.«echar»【转，口】（对下级的)呵斥，训斥.4.[秘鲁方言](披散下来的)头发缕.5.[厄瓜多尔方言]长发."
  },
  {
    "number": 721,
    "word": "rubí",
    "definition": "m.红宝石.  ~ balaje 玫红尖晶石.  ~ de Bohemia 蔷薇石英.  ~ del Brasil 电气石， 尖晶石， 加热黄玉.  ~ espinela 红尖晶石. oriental 红宝石."
  },
  {
    "number": 722,
    "word": "florentino",
    "definition": "florentino, naadj.[意大利] 佛罗伦萨（Florencia）的m., f.佛罗伦萨人"
  },
  {
    "number": 723,
    "word": "constipado",
    "definition": "constipado, da adj.【植】成簇的. |→ m. «agarrar, coger,contraer, pescar» 伤风，着凉，感冒."
  },
  {
    "number": 724,
    "word": "favorecido",
    "definition": "favorecido, da adj. «estar; resultar, ser; de, por» 受益的, 得到好处的.poco ~ 1 .不太幸运的. 2 .长得不太漂亮的."
  },
  {
    "number": 725,
    "word": "patrono",
    "definition": "patrono, na m.,f.1.支持者，赞助者,保护者.2.庇护伸，守护神.3.（慈善机构的)理事，董事.4.主人，东家.5.厂主,雇主，企业主，老板.6.领主."
  },
  {
    "number": 726,
    "word": "chorrear",
    "definition": "intr. 1. 涌出， 喷流： Chorrea el petróleo bruto del tubo. 原油从管子里喷出来. Chorrean los canalones. 落水管在淌水. 2. 滴水 [多用副动词]: La ropa que ha tendido está todavía chorreando. 他晾的衣服还在滴水. 3. 【转， 口】 一点点地出现， 断断续续地发生：Aún chorrean tales problemas. 那类问题还在断断续续地出现."
  },
  {
    "number": 727,
    "word": "llaga",
    "definition": "f. 1.【医】潰疡，糜烂. 2.【转】（精神上的）创伤，痛苦. 3.【泥】(两块砖之间的）立缝. renovarla(s) ~ (s)【转】戳入痛处."
  },
  {
    "number": 728,
    "word": "el pincel",
    "definition": "el pincel: 画笔"
  },
  {
    "number": 729,
    "word": "penitencia",
    "definition": "f.1.«imponer, poner, poner de; observar; en».【宗】忏悔，悔罪，补赎.2.【宗】忏悔仪式.3.【宗】（宗教裁判所的）制裁.4.惩罚: En ~,por llegar tarde, te dejamos sin comer. 作为对你来晚了的惩罚，不给你饭吃.5.（表示悔罪或自赎的）苦行.6.悔恨,后悔，懊悔.7.麻烦事情，讨厌事情：i Vaya una ~,tener que empezar desde el principio!真讨厌，还得从头开始！8.【古】被宗教裁判所制裁的又的住处. cumplir la ~ 补赎.hacer ~ 1.实行，苦行.2.做不愉快的事情.3.【转，口】[谦词,用于请客]吃便饭."
  },
  {
    "number": 730,
    "word": "lujuria",
    "definition": "f. 1.淫荡，好色. 2.【转】繁茂，茂盛."
  },
  {
    "number": 731,
    "word": "castidad",
    "definition": "f. 1.贞洁，贞节，贞操. 2.【转】纯洁."
  },
  {
    "number": 732,
    "word": "aguijonazo (aguijón)",
    "definition": "aguijonazo (aguijón): 刺痛（刺）"
  },
  {
    "number": 733,
    "word": "hojaldre",
    "definition": "m.千层饼"
  },
  {
    "number": 734,
    "word": "guiso",
    "definition": "m. 1.菜肴：He aprendido a hacer un ~ nuevo. 我新学会了做一种菜. 2.[阿根廷方言]【口】可鄙的人."
  },
  {
    "number": 735,
    "word": "excomunión",
    "definition": "f.【宗】«decretar，fulminar, lanzar» 1.革除教籍，逐出教会.2.革除令，逐出令."
  },
  {
    "number": 736,
    "word": "sacerdote",
    "definition": "m. 神甫，牧师，教士，祭司，僧侣.simplé ~ 普通教士. sumo ~ 祭司长."
  },
  {
    "number": 737,
    "word": "estar provisto de",
    "definition": "estar provisto de: 配备有"
  },
  {
    "number": 738,
    "word": "entrenar",
    "definition": "tr.训练（运动员）. (也用作自复动词)"
  },
  {
    "number": 739,
    "word": "alborotar",
    "definition": "tr. 1. 弄乱, 揽乱:  El viento le alborota los pelos. 风吹乱了他的头发. 2. 轰动, 引起骚动, 制造骚乱. 3. 激起愿望, 使产生幻想, 引起好奇.|→ intr. 喧闹, 吵嚷, 嘻闹.|→ prnl. 【海】风浪大作."
  },
  {
    "number": 740,
    "word": "afanarse",
    "definition": "afanarse: 奋斗"
  },
  {
    "number": 741,
    "word": "solapa",
    "definition": "f. 1.（西装或大衣的）领子，翻领.2.（衣服的）兜盖; (书包、信封等的）口盖. 3.（书籍封皮或护封的）折边.4.卷边，压边. 5.【转】假象. 6.【兽医】（伤口的）内腔."
  },
  {
    "number": 742,
    "word": "pelusa",
    "definition": "f.1.茸毛；绒毛.2.灰绒,尘絮.3.【口】忌妒."
  },
  {
    "number": 743,
    "word": "artritis",
    "definition": "f. 【医】关节炎."
  },
  {
    "number": 744,
    "word": "inmundo",
    "definition": "inmundo，da adj. 1.肮脏的，污秽的. 2.【转】猥亵的，淫秽的. 3.【宗】（犹太人的）禁忌的."
  },
  {
    "number": 745,
    "word": "carroña",
    "definition": "f.(死畜、死兽等的）腐肉."
  },
  {
    "number": 746,
    "word": "muelle",
    "definition": "adj.柔软的；舒适的m.弹簧；码头；货运站台"
  },
  {
    "number": 747,
    "word": "inválido",
    "definition": "inválido，da adj. 1.残废的，有残疾的. 2.【转，法】无效的：cheque ~ 无效的支票. 3.«argumento»【转】无力的，站不住脚的. |→ m., f. 残废人员, 残废军人."
  },
  {
    "number": 748,
    "word": "beata",
    "definition": "m. 1.修女；居家修女. 2.【口】虔诚的女人. 3.参见 peseta."
  },
  {
    "number": 749,
    "word": "celo",
    "definition": "m. 1.热情. 2.« con; poner » 努力，勤奋，勤恳： Estudia con mucho ~. 他刻苦钻研. Pone ~ en su trabajo. 他勤勤恳恳地工作. 3.妒忌，忌妒，嫉妒. 4.« estar en » (动物的)发情;发情期. 5.pl. « dar, tener; de » 醋意，醋劲儿. 6.透明胶带.dar ~s 使嫉妒，使吃醋.  pedir ~s  责备(爱人)另有所爱."
  },
  {
    "number": 750,
    "word": "eclesiástico",
    "definition": "eclesiástico, ca adj. 教会的， 教士的. |→ m. 1. 教士， 牧师.2. 首字母大写： 经外典 [«圣经» 中有争议的篇目]."
  },
  {
    "number": 751,
    "word": "cilicio",
    "definition": "m. 1.苦行衣. 2.苦行带. 3.（枪炮等的）罩."
  },
  {
    "number": 752,
    "word": "flagelación",
    "definition": "f. 鞭打"
  },
  {
    "number": 753,
    "word": "partidario",
    "definition": "partidario, ria adj.-s.1.（对某人或某事)拥护的，支持的，信仰的；拥护者，支持者，信仰者： ~ s de la guerra.主战派. Somos ~ s de apoyarnos en nuestros propios esfuerzos.我们是主张自力更生的.2.[厄瓜多尔方言], [古巴方言], Per,分成制的（租佃法）；分成制佃户.|→ m.1.游击队员.2.（负责某一地段的）农村医生."
  },
  {
    "number": 754,
    "word": "azotaina (azotar)",
    "definition": "azotaina (azotar): 打屁股（打）"
  },
  {
    "number": 755,
    "word": "desenfrenado",
    "definition": "desenfrenado, da adj. 没有节制的， 放纵的， 纵情的： manifestar una alegría ~a  高兴得不得了. llorar en forma ~a 放声痛哭. Los capitalistas explotan a los obreros en forma ~a. 资本家残酷地剥削工人."
  },
  {
    "number": 756,
    "word": "garfio",
    "definition": "m.铁钩."
  },
  {
    "number": 757,
    "word": "suplicio",
    "definition": "m. 1.体罚，刑罚：el ~ de la horca 绞刑. 2.刑 讯室. 3.【转】（精神或肉体上的）痛苦，折磨：Llevar zapa-tos estrechos es un ~ . 穿夹脚的鞋子真是活受罪. ~ de Tántalo 可望而不可即的事情. áltimo ~ 死刑."
  },
  {
    "number": 758,
    "word": "satanás",
    "definition": "m.[S-] 撒旦；魔王"
  },
  {
    "number": 759,
    "word": "sotana",
    "definition": "f.1.教士服.2.【口】殴打，责打.colgar la ~ 还俗."
  },
  {
    "number": 760,
    "word": "anomalía",
    "definition": "f. 1. 异常；异常现象. 2. 【天】近点角；近点距离."
  },
  {
    "number": 761,
    "word": "indolente",
    "definition": "adj. 1.不痛的. 2.冷漠的，不动感情的，不关痛痒的. 3.懒的，怠惰的."
  },
  {
    "number": 762,
    "word": "concurrido",
    "definition": "concurrido, da adj.人们常去的，人很多的."
  },
  {
    "number": 763,
    "word": "fiesta de guardar",
    "definition": "fiesta de guardar: 守礼拜日"
  },
  {
    "number": 764,
    "word": "purgatorio",
    "definition": "purgatorio, ria adj. 参见 purgador. |→ m.1. M【宗】 炼狱， 涤罪所. 2. 【转】 受苦的地方， 受罪的场所. 3. «pasar» 【转】 苦难."
  },
  {
    "number": 765,
    "word": "estar encinta",
    "definition": "estar encinta: 怀孕"
  },
  {
    "number": 766,
    "word": "hiel",
    "definition": "f.胆汁；苦味；粗暴；恶意；[pl.] 辛酸，苦楚- echar la ～累死累活地干"
  },
  {
    "number": 767,
    "word": "ceder",
    "definition": "tr. 1.让，让给，转让： ~el paso 让路.  ~el asiento en el autobús 在公共汽车上让座. 2.传导：Al licuarse el vapor cede calor al aire. 蒸汽凝结为水时将热量传给空气. |→ intr. 1.« de » 部分放弃： ~uno de su derecho 某人放弃自己的权利. 2.« a, ante; en » 让步，退让；服从，屈： No cedieron ante la superioridad numérica del enemigo. 他们在敌人数量占优势的情况下也毫不退让. Estoy dispuesto a no ~en mis pretensiones.  我不准备在我的打箅方面做出让步. Todo el mundo debe ~a la verdad. 所有的人都要服从真理. 3.减弱，下降,平息：Cede el viento. 风平息下来了.  Va cediendo la fiebre. 烧正在退. 4.松弛：Han cedido los cables de tender la ropa.晾衣服的绳子松了. 5. 折，断，绷断：Cedió la cuerda. 绳子断了. 6.« en » 变为,变成：Todo eso cedió en perjuicio mío. 结果一切都对我不利. 7.« a » 不如，不及，比不上： En eso tengo que ~le a él. 在那方面我不如他."
  },
  {
    "number": 768,
    "word": "ímpetu",
    "definition": "m. 1.猛烈，迅猛，迅疾. 2.勇猛，果敢，坚定: Toma- ron las herramientas y se pusieron a trabajar con ~. 他们拿起工具紧张地干了起来. 3.热情，冲动；无所顾忌."
  },
  {
    "number": 769,
    "word": "procurar",
    "definition": "tr.1. 努力， 尽力， 力图， 力求： Ella procura leer más. 她努力多读一些东西. Procura que le ayudemos. 他极力想让我们帮助他. 2. (为某人) 谋取： Le procuré alojamiento. 我为他找到了住处. (也用作自复动词) ： ~ se el sustento 谋生. ~ se (las) comodidades 想方设法过得舒适. 3. 提供， 给予： Ese niño me procura satisfacciones. 孩子给我以快乐. Su visita nos procuró gran placer. 他的来访使我们非常高兴. 4. 代理， 代表(某人) ."
  },
  {
    "number": 770,
    "word": "fariseo",
    "definition": "m. 1.法利赛人[古犹太教一个派别的成员，标榜恪守宗教礼仪，而实际上根本没有宗教观念].2.【转】伪君子. 3.【转，口】瘦高而又相貌可憎的人. 4.【转，口】瘦高而又没有风度的人.5.【转，口】衣服过长的人."
  },
  {
    "number": 771,
    "word": "aberración",
    "definition": "f. 1. 【界】光行差. 2. 【理】像差： ~ cromática 色像差, 色差.  ~ de esfericidad 球面像差. 3. 【转】离开正路；越轨, 行为不端. 4. 【转】愚蠢的言行. 5. 【医】迷乱: ~ mental 精神迷乱.6. 【生】畸变."
  },
  {
    "number": 772,
    "word": "precoz",
    "definition": "adj.提早的，提前的:fríos ~ ces 早寒.desarrollo ~ 提早发育.2.早熟的：un niño ~ 一个早熟的孩子. una variedad de uva ~ 一种早熟品种:葡萄."
  },
  {
    "number": 773,
    "word": "cirio",
    "definition": "m. 1.(教堂用的）大蜡烛.  2.[古巴方言]钝叶树. 3.[拉丁美洲方言]【植】仙人掌，仙影拳. ~ pascual 复活节用的大蜡烛."
  },
  {
    "number": 774,
    "word": "apiñado",
    "definition": "apiñado, da adj. 1. 松球状的, 松塔状的. 2. 拥挤在一起的: La gente estaba ~a en el andén de la estación.人们拥在站台上."
  },
  {
    "number": 775,
    "word": "helecho",
    "definition": "m.【植】1.蕨.2.欧洲蕨. ~  hembra【植】雌三叉蕨. ~  macho【植】绵马."
  },
  {
    "number": 776,
    "word": "perturbador (perturbar)",
    "definition": "perturbador (perturbar): 扰乱的（扰乱）"
  },
  {
    "number": 777,
    "word": "comadrona",
    "definition": "f.产婆，接生婆."
  },
  {
    "number": 778,
    "word": "loza",
    "definition": "f. 1.陶，瓷. 2.【集】陶瓷器皿."
  },
  {
    "number": 779,
    "word": "santiguarse",
    "definition": "santiguarse: 画十字"
  },
  {
    "number": 780,
    "word": "traslúcido, trasluciente",
    "definition": "traslúcido, trasluciente: 半透明的"
  },
  {
    "number": 781,
    "word": "axila",
    "definition": "f. 1. 【植】腋. 2. 【解】腋下, 胳肢窝."
  },
  {
    "number": 782,
    "word": "hilera",
    "definition": "f.1.排，行，串.2.细纱，细线.3.(纺锤尖端的)媒纹槽.4.【机】抽丝机,拔线机，拉线机.5.pl.【机】管子铰板. 6.【建】脊檩.7.【军】纵队，纵列.8.【动】（蜘蛛的）丝囊."
  },
  {
    "number": 783,
    "word": "virtud",
    "definition": "f. 1.《atesorar; ejercitar， practicar; empañar》 品德， 美德. 2.贞操， 贞节. 3.德行， 善行， 4.《de， para; contra》 特性， 功能， 效用： Esa planta tiene ~ contra  para hacer caer> las verrugas. 那种植物可用来除疣. 5.力量， 能力. 6.pl. 【神】力天使.  ~ cardinal 原德[指慎重、 公正、 坚定、 节制]. ~ moral 道德. ~ teologal 神德[指信念、希望、 仁慈]. en ~ de 依据， 遵照； 由于， 鉴于."
  },
  {
    "number": 784,
    "word": "mitigar",
    "definition": "tr. «dolor, pena, sed, ansiedad, cansancio; calor, luz» 减轻，缓解."
  },
  {
    "number": 785,
    "word": "ingrata",
    "definition": "ingrata: 忘恩负义的"
  },
  {
    "number": 786,
    "word": "otorgar",
    "definition": "tr.1.同意，准许，允诺.2.给予，赐予： ~ un premio 给奖.  ~ el perdón 原谅.El público le otorgó calurosos aplausos. 观众对他热烈地鼓掌. Ni siquiera quiso ~ me una mirada. 他甚至连看我一眼都不愿意.3.许诺，承诺.4.签署(合同,文件）.5.发布，颁布，制定（法令等）."
  },
  {
    "number": 787,
    "word": "grano",
    "definition": "m. 1.【集】谷物：almacenar (el) ~ 储存谷物. 2.籽; 仁儿；el ~ de la almendra 巴旦杏仁. el ~ del café 咖啡豆. 3.(谷物、果实的）颗粒:unos ~ s de trigo 几粒小麦. un ~ de pimienta —粒胡椒. un ~ de café 一个咖啡豆.un ~ de uva —粒葡萄. 4.细粒，微粒：un ~ de arena 沙粒. lija de ~ fino 细沙纸. 5.(矿砂的)粒径，粒度:de ~ grueso  medio，fino 粗 中、细 粒的. 6.(木、石等的）纹理：madera de ~ grueso 粗质木材. 7.(皮革的）光面，正面，粒面. 8.(胶片或相纸上构成影像的）金属银粒，药膜.9.谷[药衡，约合五厘克]. 10.格令[金衡，约合五厘克].11 .格拉诺[宝石衡，合四分之一克拉（quilate)]. 12 .四分之一开[纯金含量单位]. 13 .【医】疹, 丘疹，疙瘩: Le salió un ~ en la nariz. 他的鼻子上长了一个小疙瘩. mal ~ 脓包. ~de arena 微薄贡献, 微小帮助：Yo también aportaré mi ~de arena. 我也将稍尽微薄力量. ~  mab [阿根廷方言] 痈. ~s def parado 【植】豆蔻子.¡Al ~ ！直接了当地说吧！ ir al ~ [多用命令式]开门见山，直接了当. ni un ~ 丝毫没有. no ser una cosa ~ de anís 不可小看，并非可有可无, 并非无关紧要."
  },
  {
    "number": 788,
    "word": "gracia",
    "definition": "f.1.天恩，天佑.2.恩惠，恩典，恩赐，恩宠：Disfrutó algún tiempo de la ~ del rey. 他一度得到国王的恩宠.3.宽恕，赦免: conceder ~ 宽恕. No hubo ~ para él. 他未获赦免.4.天赋，天资：tener ~ para hacer algo 很会做某事.5.（体态、动作的）优美，妩媚，风度，潇洒.6.可爱之处，迷人之处.7.美德；长处.8.«tener» 诙谐，幽默，风趣：Nos contó un chiste que tiene mucha ~. 他给我们讲了一个非常幽默的笑话.9.有趣的言行：decir ~s 插科打诨 [尤指小孩的天真幼稚的言行].10.令人讨厌的言行.11.【雅】名字：¿Cómo es su ~ ，señorita?  小姐，请问您的芳名？12.【集】（下葬后）陪伴死者亲属到家的人；（下葬后)在死者家中作的祈祷.13.pl.（首字母大写）【希神】美惠三女神[司美貌、温雅和欢乐].|→ pl. interj. 谢谢. ~ de Dios 1. 天赐之物[指空气、阳光等]:Abre la ventana para que entre la ~ de Dios. 打开窗子透透空气吧. 2 .【转，俗】面包，食粮.una triste ~【口】讨厌的事物caer en ~ 使喜欢，使产生好感： Parece que te ha caído en ~. 好象他给你的印象不错.dar en la ~ de algo 习惯于（做某件令人讨厌的事情）：Ha dado en la ~ de poner la radio a las ocho. 他每天八点钟非打开收音机不可.dar (las) ~s 表示感谢.de ~ 无偿地.en ~1.得到恩惠的，受到恩宠的. 2 .参见 en ~ de Dios.en ~ a  鉴于，由于.en ~ de Dios 清白无瑕的；于心无愧的. ~s a 多亏，幸亏，由于：Gracias a la sabia dirección del Partido, nuestro país avanza a pasos agigantados por el camino socialista. 在党的英明领导下, 我们国家正沿着社会主义道路阔步前进. ~s a Dios 谢天谢地：Gracias a Dios ya ha bajado la fiebre. 谢天谢地，总算退烧了. hacer ~ 1 .使觉得有趣：Me hace ~ su manera de hablar. 我觉得他说话的样子很有趣. 2 .使喜欢，使产生好感：Parece que te hace ~ ese plan. 看样子这个计划中你的意. 3 .引起幻想：Me hace ~ la idea de tomarme unas vacaciones. 度假的打算使我浮想联翩. 4 .【反语】使觉得荒唐，使恼火,使不能容忍：Me hace ~ que, encima, me eches a mí la culpa. 真荒唐，到头来你倒把过错推到我身上来了. hacer ~ de 略去，略过，避而不谈：Te hago ~ de los detalles del asunto. 关于这件事的细节我就不跟你说了.hacer maldita (la) ~ / no hacer ~ / no hacer maldita la ~ / no hacer ninguna ~ / no tener ~ / no tener maldita la ~ 讨厌，烦人.¡Qué ~ ！1. 真有意思! 真妙！真巧！ ¡Qué ~！estábamos precisamente hablando de ti cuando has aparecido. 真巧！我们正在说你，你就来了. 2.[表示不满、恼怒]活见鬼！想得倒好！想得倒美!： ¿Que te ayude? ... ¡Qué ~ ！让我帮你？…想得倒美！reírïe a uno una ~ 奉承.tener ~ algo 1 .真奇怪，真是怪事：Tiene ~ que hayas pasado por mi lado y no me hayas visto. 真奇怪你从我身边走过却没有看见我. 2.【反语】真荒唐，荒谬可笑.tener algo ~ por arrobas1. 参见 tener ~ . 2. 参见 rehacer maldita la ~.tener maldita la ~参见 hacer maldita la ~.¡Vaya una ~! 1 .[表示不满，恼怒]活见鬼！ 2 .[表示轻蔑]那有什么!"
  },
  {
    "number": 789,
    "word": "escamado",
    "definition": "escamado,da adj. 1.【动】具鳞的. 2.有戒心的；有疑虑的; 有保留的：andar muy ~很有戒心. |→ m. 1.【集】鳞. 2.鳞状制品. 3.pl. 【动】有鳞目. |→ f. 鳞状刺绣."
  },
  {
    "number": 790,
    "word": "perfil",
    "definition": "m.1.轮廓:  ~ de las montañas 山峦的轮廓.2.侧影，侧面像,侧面形状：el ~ de una persona —个人的侧面像.3.纵断面，纵剖面.4.(钢筋的）横断面,横剖面.5.(器物边缘的)小花饰.6.（书写时收笔向上挑时写出的）细笔道.7.特点，性质：En cuanto al desarrollo económico, tienen el mismo ~ los problemas que encuentran muchos países en vías de desarrollo.在发展经济方面，许多发展中国家遇到的问题都是一样的. El ~ de estas actuaciones no ha sido el de una acción amistosa.这些举动不象是友好的架势.El país se ha esforzado por mantener su ~propio. 那少国家曾努力维护自己的特声.(也用作复数): El héroe se agiganta y cobra ~ es de universalidad al paso del tiempo. 随着时间的推移，英雄的形像愈显高大并且具有普遍意 义.El relato tiene ~ es legendarios. 那个故事象是传奇. Estos son los ~ es más acusados de nuestra sociedad.这些是我们的社会的突出特点.8.pl.(工程等的）最后修饰，最后工序.9.pl.(社会交往中的）礼节，礼仪.medio ~ 【美】半侧面像. ~ laminado 钢筋.de ~ 侧面的."
  },
  {
    "number": 791,
    "word": "cuchichear",
    "definition": "intr. 窃窃私语， 低声讲话， 耳语."
  },
  {
    "number": 792,
    "word": "mantel",
    "definition": "m. 桌布，台布，罩布. comer a ~ es  1 .在铺着桌布的桌子上用餐. 2 .饮食考究. levantar los ~ es (吃完饭)撤桌子."
  },
  {
    "number": 793,
    "word": "bestia",
    "definition": "adj.举止粗鲁的，蛮不讲理的；愚钝的.f. 牲畜，牲口. m.f. 【转】粗野的人，蛮不讲理的人.~ de albarda驴.~ de carga 1.牲畜. 2.【转】干粗活的人，干苦活的人.~ negra (parda)1.招致失败（仇恨、麻烦等）的人.2.威胁；难以克服的困难.a lo ~【口】粗暴地，毫不客气地.gran ~1. 参见 carita. 2. 参见 tapir.mala ~居心不良的人."
  },
  {
    "number": 794,
    "word": "pezuña",
    "definition": "f.【动】蹄，爪."
  },
  {
    "number": 795,
    "word": "pergamino",
    "definition": "m.1.羊皮纸.2.羊皮纸文件.3.pl.【转，口】贵族头衔；世袭贵族.4.【转，口】证书，文凭.en ~ 羊皮纸封."
  },
  {
    "number": 796,
    "word": "sobresalto",
    "definition": "m. 1.惊吓.2.惊恐. de ~ 突然地，突如其来地."
  },
  {
    "number": 797,
    "word": "derrumbe",
    "definition": "derrumbe, derrumbo m. 1. 悬崖， 峭壁. 2. 【矿】 塌陷."
  },
  {
    "number": 798,
    "word": "veta",
    "definition": "f. 1.条: tocino con una ~ de magro 夹有瘦肉的腊肉. 2.条纹， 纹理： madera con ~ oscura 深色纹理的木材. 3.矿层， 矿脉. descubrir la ~ de uno 洞察某人的意图."
  },
  {
    "number": 799,
    "word": "escurridizo",
    "definition": "escurridizo, za adj. 1.滑的： ~como una anguila 像鏡鲡 那样滑. Está hoy el suelo bastante ~. 今天地面相当滑. 2.【转】易滑脱的，难以捉住的，捉摸不定的：una idea ~a 一个闪念. un asunto ~ 一件捉摸不定的事情."
  },
  {
    "number": 800,
    "word": "filón",
    "definition": "m. 1.【矿】矿脉，岩脉.2.【转，口】有利可图的事物，盈利大的买卖."
  },
  {
    "number": 801,
    "word": "tenaz",
    "definition": "[pl. tenaces] adj. 1.牢固的，坚韧的. 2.固着的，去不掉的：una mancha ~ 去不掉的斑点. 3.顽固的，持续的，难排解的：dolor ~ 持续的疼痛. preocupación ~ 难以排解的担心. 4.顽强的，坚忍的，不屈不挠的： ~ espíritu revolucionario 顽强的革命精神."
  },
  {
    "number": 802,
    "word": "suela",
    "definition": "f.1.鞋底.2.鞋底皮.3.（台球棍的）皮包头.4.(水龙头等的）皮垫圏，皮钱. 5.（某些教士穿的）凉鞋. 6.【建】墙基.7.【建】墙脚板.8.参考 lenguado. medias ~ s  1. 《echar》鞋掌. 2. 【转，口】补救办法，临时措施. de tres  cuatro, siete  ~ s 十足的,地道的. no llegarle a uno a la ~ del zapato 【转, 口】远比不上，望尘莫及."
  },
  {
    "number": 803,
    "word": "escarbar",
    "definition": "tr. 1.（动物）扒，刨，拱（地面、垃圾堆、粪堆等)： gallina escarba la tierra para buscar su alimento.母鸡刨地寻食.2.剔(牙）；掏（耳）.3.拨（火）.4.搔，抓，抠(伤口 等). |→ intr.【转】 «en» 1.打探，探究.  (也用作及物动词) 2.言人忌讳."
  },
  {
    "number": 804,
    "word": "doblón",
    "definition": "m. 多乌隆 [西班牙古金币]. ~de vaca 牛肚."
  },
  {
    "number": 805,
    "word": "peñasco (peñón)",
    "definition": "peñasco (peñón): 巨石（岩石）"
  },
  {
    "number": 806,
    "word": "inicuo",
    "definition": "inicuo, cua adj. 1.不公平的，不公正的，不公道的， 2.残酷的，凶恶的."
  },
  {
    "number": 807,
    "word": "crematorio",
    "definition": "crematorio, ria adj. 火葬的.|→ m. 1. 火葬场. 2. 垃圾焚烧场."
  },
  {
    "number": 808,
    "word": "aguardar",
    "definition": "tr.-intr. « a, para»  等候, 等待: ~ a un amigo 等侯朋友.  ~ el autobús 等公共汽车.  ~ el fin de un suceso 件的结局. ~ a mañana 等待明天. Los revolucionarios no pueden ~ que la revolución caiga del cielo, sino que tienen que hacerla. 革命者不能坐等革命的到来, 而应该去干革命. El avión no aguarda. 飞机不等人. Aguardamos a que venga ella para decidir la fecha de partida. 我们等她来好决定出发日期. Te aguardaré unos días para que me des una respuesta definitiva. 我可以再给你几天时间, 到时侯你可要给我一个肯定的答复. Allí nos. aguardan duros trabajos. 艰巨的工作在等着我们去撖.|→ prnl. 停顿，耽搁：Si te aguardas un poco, te ayudaré. 你若是能等一会儿, 我可以帮你."
  },
  {
    "number": 809,
    "word": "modorra",
    "definition": "f.1.«entrar;sacudir (se)»昏睡.2.【兽医】（羊的）晕倒病.3.【军】（夜间值勤的）第二班."
  },
  {
    "number": 810,
    "word": "presentir",
    "definition": "tr.预感，预料."
  },
  {
    "number": 811,
    "word": "imperturbable",
    "definition": "adj. 沉着的，冷静的."
  },
  {
    "number": 812,
    "word": "corsé",
    "definition": "m. (女用） 束腹， 束腰， 胸衣."
  },
  {
    "number": 813,
    "word": "faja",
    "definition": "f.1.带子，带状物.2.带状饰.3.腰带；护腹带；束腹带. 4.(表示官阶、荣誉的）饰带，绶带.5.(报刊寄送时用的）捆扎带.6.(新书的）腰封.7.条状地块，条状地段，条状地带. 8.【建】宽凸线脚.9.【建】排口饰.10.【纹】腰条.11.[墨西哥方言](贴在书脊上的）书名签. ~ herpética【医】带状泡疹."
  },
  {
    "number": 814,
    "word": "manga",
    "definition": "f. 1. 衣袖，袖子. 2. 软管；水龙带： ~ de riego 浇水管. 3. 通风管. 4. 软管状物，软筒状物. 5.（捕鱼的）抄网；撒网. 6.（两端开口的）小手提包. 7. 过滤袋，过滤兜. 8.（教堂十字架的）布罩. 9.（教士长袍的）长披肩. 10.（车轴的）轴头.11. 龙卷风.12. 小部队，小股武装.13.（船的）最大宽度.14.【空，气象】风筒.15.【植】杧果. 16. pl. 收益，进项.17. [洪都拉斯方言] 粗布斗篷.18. [墨西哥方言] 套头斗篷.19. [厄瓜多尔方言], [哥伦比亚方言] 畜圏，畜栏.20. [拉丁美洲方言]（为朝某处驱赶牧畜而修起来的）栅道.21. [阿根廷方言], [委内瑞拉方言] 群,伙 ~ ancha«ser de, tener»【转】宽宏, 宽容. ~ boba肥大的袖子. ~ corta短袖. ~ de agua 阵雨. ~ de viento 旋风. ~ perdida 散口袖. ~ raglán插肩袖. ~ tres cuartos 中长袖. media ~半截袖.andar algo ~ por hombro【转，口】（家里）凌乱，乱七八糟. en ~s de camisa未穿外衣的，穿着衬衣的，穿着衬衣加坎肩的. estar de ~【转，口】勾结，串通. hacer ~s y capirotes en algo武断，专断.ir ~ por hombro参见 andar ~ por hombro."
  },
  {
    "number": 815,
    "word": "retortijón de tripas",
    "definition": "retortijón de tripas: 肠绞痛"
  },
  {
    "number": 816,
    "word": "sufragista",
    "definition": "m.f. 1.主张妇女有参政权的人. 2.【引】妇女运动的参加者."
  },
  {
    "number": 817,
    "word": "feligrés, feligresa",
    "definition": "feligrés, feligresa: 教区居民"
  },
  {
    "number": 818,
    "word": "resbalar",
    "definition": "(se) intr.-prnl.1. «en, por, sobre, entre» 滑倒, 滑动； 滑脱， 滑落： ~ en una cáscara de plátano 踩在香蕉皮上滑倒. ~ por el terraplén 顺着堤坡下滑. ~ sobre el hielo 在冰上滑动.  ~ entre los dedos 从手里滑脱. Las lágrimas resbalaban por sus mejillas. 泪珠顺着面颊滚落. 2. 【转】 闪失， 出错."
  },
  {
    "number": 819,
    "word": "pararrayos",
    "definition": "m.[单复同] 避雷针，避雷器"
  },
  {
    "number": 820,
    "word": "agitarse",
    "definition": "拍打"
  },
  {
    "number": 821,
    "word": "cataclismo",
    "definition": "m. 1.【质】灾变[指洪水、地陷、地震等]. 2.【转】 (社会、政治的）动荡，动乱；灾难."
  },
  {
    "number": 822,
    "word": "zancadas",
    "definition": "zancadas: 大步行走"
  },
  {
    "number": 823,
    "word": "tropel",
    "definition": "m. 1.纷乱人群. 2.混乱堆, 杂乱堆. 3.匆忙， 仓猝. 4.[阿根廷方言], [乌拉圭方言] 畜群. en  de  ~ 混乱的， 杂乱的."
  },
  {
    "number": 824,
    "word": "arcángel",
    "definition": "m. 大天使, 天使长. "
  },
  {
    "number": 825,
    "word": "soberbio",
    "definition": "soberbio, bia adj. 1.高傲的，狂妄的，妄自尊大的. 2.【转】宏伟的，华丽的，壮观的.3.【转】极美的.4.【转，口】巨大的：dar una ~ a paliza 痛打.5.【转】性情狂暴的（多用于指马）."
  },
  {
    "number": 826,
    "word": "maledicencia",
    "definition": "f. 非议，诋毁，诽谤."
  },
  {
    "number": 827,
    "word": "excentricidad",
    "definition": "f.1.远离中心.2.古怪，怪诞；古怪言行，怪诞言行.4.【数，天】偏心率，离心率."
  },
  {
    "number": 828,
    "word": "cojera",
    "definition": "f.瘸,跛."
  },
  {
    "number": 829,
    "word": "dar un tirón",
    "definition": "dar un tirón: 猛拉"
  },
  {
    "number": 830,
    "word": "trenza",
    "definition": "f. 1.发辫. 2.辫子， 辫状物： ~ de esparto 草辫儿. 3.【建】辫形饰. 4.[阿根廷方言] 扭打， 撕打. en ~ 发辫散开着的."
  },
  {
    "number": 831,
    "word": "ánima",
    "definition": "f. 1. 鬼魂, 幽魂. 2. (枪、炮等的) 膛. 3. pl. (教堂的) 晚祷钟. 4. pl. 晚祷的时间. ~ bendita / ~ del Purgatorio 在炼狱中赎罪的幽魂. en mi  在我 他 的内心深处. sacar ~ 得到宽恕."
  },
  {
    "number": 832,
    "word": "maña",
    "definition": "f.1.«tener; con» 聪明，智慧，灵巧.2.奸诈，狡猾. (多用作复数)3.坏习惯，坏毛病：(多用作复数): Después de la enfermedad le han quedado al niño muchas ~s. 孩子病后添了许多坏毛病. 4.小束，小捆. malas ~ s 欺诈. darse ~para hacer algo 有办法，有本事. 谚语： El que malas ~s ha， tarde o nunca las perderá. 毛病养成容易改掉难. Más vale ~que fuerza. 用力不如用计."
  },
  {
    "number": 833,
    "word": "estrafalario",
    "definition": "estrafalario, ria adj.1.【口】邋遢的，衣冠不整的.  (也用作名词) 2.【转，口】怪诞的，古怪的.  (也用作名词)"
  },
  {
    "number": 834,
    "word": "flema",
    "definition": "f. 1.粘液. «afrancar，arrojar»2. 粘痰.«gastar，tener»3.【转】冷漠，迟缓.4.【化】冷凝液."
  },
  {
    "number": 835,
    "word": "reclamar",
    "definition": "intr.1. «ante； contra» 反对； 抗议： ~ contra una multa 反对一项罚款.  ~ contra un fallo  反对一个裁决. ~ contra una injusticia 反对一个暴行. 2. 参见 resonar. |→ tr.1. 召唤， 呼唤， 呼喊， 喊叫(某人) . 2.(用觀子) 引诱， 招引(鸟) . 3. «de； ante； para» 要求(得到、恢复权利等) ： ~ la palabra 要求发言.  ~ uno su derecho 要求恢复自己的权利.  ~ uno su parte de heren­cia 要求自己该得的那份遗产. 4.请求， 恳求， 呼吁： ~ un socorro 吁请援救.5. «de» 需要： El caso reclama de noso­tros la máxima atención. 这一情况要求我们予以极大的关 注.6. 【法】 要求引渡(逃犯) . 7. 【法】 调审(案犯) . prnl. (鸟) 酬啾， 对鸣. a ~ 【海】 紧绷着的(帆索，缆绳) ."
  },
  {
    "number": 836,
    "word": "aguardentoso",
    "definition": "aguardentoso, sa adj. 1. 含烧酒的: bebida ~a 含烧酒的饮料. 2. 烧酒的, 象烧酒的: olor ~ 烧酒味. 3. 嘶哑的 (声音) ."
  },
  {
    "number": 837,
    "word": "extenuado",
    "definition": "extenuado, da adj. 1.衰弱的. 2.疲惫的."
  },
  {
    "number": 838,
    "word": "prestigio",
    "definition": "m.1.戏法,魔术.2.欺骗.3.名望,威信： ~ internacional 国际声誉.reducir a polvo el ~ de uno 使某人威信扫地."
  },
  {
    "number": 839,
    "word": "proeza",
    "definition": "f.壮举， 英勇行为， 英雄业迹."
  },
  {
    "number": 840,
    "word": "trascender",
    "definition": "intr. 1.（气味）散发出来: El rico olor del asado trascendía hasta donde estábamos. 烤肉的香味一直飘到我们跟前. 2.《a》 散发（某种气味)： Esta carne trascendía a pasada. 这个肉的味道有点不新鲜. 3.《a》 泄漏出来， 流传开来： La noticia ha trascendido al público. 消息传到了公众中间. Pretenden que no trascienda el proyecto. 他们不想让那个计划泄露出去. 4.《a》 扩展: Su sentimiento patriótico trasciende a todos los actos de su vida. 他的爱国热情表现在他的一举一动之中. 5.《de》 超越，超出: Es una cuestión que trasciende del ámbito nacional. 这是一个超出国范围的问题. |→ tr. 领悟， 理解."
  },
  {
    "number": 841,
    "word": "bullir",
    "definition": "intr. 1.沸腾.2.奔腾，翻腾，翻滚： ~el agua corriente 河水奔腾. ~ la sangre en las venas 热血沸腾.  Las ideas bullían en su cerebro. 他思潮起伏. 3.（人群） 熙攘；（蚊蝇）成群飞鸣；（蛆虫）成堆蠕动. 4.【转】（人)特别好动，非常活跃；到处拋头露面. 5.【转】幵始活动：Ya bulle; parece que despierta. 他动了，象是醒了. (也用作自复动词) 6.【转】经常发生： ~ la risa 时时发出笑声. |→ tr. 1. 活 动:no ~uno pie ni mano 手脚都一动不动. 2.【古】搅动. ~le a uno algo 非常想干，非常想做: Cuando ve jugar al fútbol, al niño le bullen los pies. 那个孩子看见别人踢足球脚就发痒."
  },
  {
    "number": 842,
    "word": "alpargata",
    "definition": "f. 麻鞋, 草鞋. tragar ~s [委内瑞拉方言] 【口】惶惑."
  },
  {
    "number": 843,
    "word": "frufrú",
    "definition": "m.簌簌声，沙沙声[拟声词，衣服等摩擦发的声音]."
  },
  {
    "number": 844,
    "word": "almidón",
    "definition": "m. 淀粉. dar ~ /planchar de ~ 浆（衣物) ."
  },
  {
    "number": 845,
    "word": "enaguas",
    "definition": "衬裙"
  },
  {
    "number": 846,
    "word": "aplastar",
    "definition": "tr. 1. 压扁, 砸扁. 2. 弄皱. 3. 使板结, 使硬结；使紧实, 压实. 4. 敲碎, 打破： ~ un huevo 打破鸡蛋. 5. 【转 , 口】压倒, 压垮；使惶惑, 使不知所措. 6. 【转】打败, 击溃; 镇压： ~ ataques del enemigo 粉碎敌人的进攻. ~ una rebelión contrarrevolucionaria 镇压反革命叛乱."
  },
  {
    "number": 847,
    "word": "sumisión",
    "definition": "f. 1.s.de someter (se). 2.恭顺，温顺."
  },
  {
    "number": 848,
    "word": "bosta",
    "definition": "f. 牛粪， 马粪."
  },
  {
    "number": 849,
    "word": "retozo",
    "definition": "m. s.de retozar. ~ de risa 笑意."
  },
  {
    "number": 850,
    "word": "torbellino",
    "definition": "m. 1.旋风. 2.涡流. 3.【转】旋涡； 风潮； 浪涛. 4.【转】接踵而来的事件. 5.【转， 口】办事匆忙草率的人."
  },
  {
    "number": 851,
    "word": "compartimiento",
    "definition": "m.分享；分担；格；隔间；卧车包房- ～ estanco 密封舱；互不通气的部门"
  },
  {
    "number": 852,
    "word": "piafar",
    "definition": "intr.1.（马焦躁时）前蹄刨地.2.参见 relinchar."
  },
  {
    "number": 853,
    "word": "melifluo",
    "definition": "melifluo, a adj. 1.含蜜的，象蜜的.2.【转】甜蜜的."
  },
  {
    "number": 854,
    "word": "levita",
    "definition": "m. 1.利未(Leví)族人[以色列人的一支派]. 2.【宗】(基督教的）执事，助祭. |→ f.长礼服. tirar de la ~ a 阿谀，奉承."
  },
  {
    "number": 855,
    "word": "fenómeno",
    "definition": "m. 1.现象：un ~ físico 物理现象.un ~ atmosférico 大气现象.El desempleo es un ~ muy frecuente en algunos países. 在某些国家里失业是很常见的现象.2.怪物，怪事；罕见的事物，反常的事物.3.【转】非凡的人, 超众的人."
  },
  {
    "number": 856,
    "word": "daguerrotipo",
    "definition": "m. 【摄】 1. 银版照相术. 2. 银版照相机. 3. 银版照片."
  },
  {
    "number": 857,
    "word": "escopeta",
    "definition": "f. 猎枪. ~de dos cañones 双筒猎枪. ~de pistón 火枪. ~de viento 气枪. ~negra职业猎手. ¡Aquí te quiero (ver), ~!【转，口】[用作插入语]关键时 刻到了！难题来了！"
  },
  {
    "number": 858,
    "word": "cañón",
    "definition": "m. 1.管，筒： ~de órgano 风琴笛管. ~de anteojo 望远镜镜筒. ~de fuelle 风箱管. 2.枪管，枪筒： ~de escopeta 猎枪管. Los ~es rayados aumentan el alcancé de las armas de fuego. 枪膛的来复线可以加大武器的射程. 3.炮，大炮，火炮，加农炮. 4.（铁制的）烟筒. 5.翮，羽根，翎管. 6.绒羽，捆. 7.翎笔. 8.鬍茬；胡子根. 9.（衣服的）筒状褶.  10.（圆筒状的）孔，洞. 11.臂铠. 12.马嚼铁. 13.小铃铛. 14.峡谷. 15.[哥伦比亚方言]树干. 16.[秘鲁方言]路. ~ antiaéreo 高射炮. ~ antitanque  反坦克炮. ~ atómico 原子炮. ~ de campaña 野战炮.  ~ de chimenea  estufa 烟道，烟囱.  ~ de montaña 山炮. ~ de gran alcance 远射程炮. ~ de plaza 要塞炮. ~ de tiro rápido 速射炮. ~ electrónico 电子枪. ~ lanzacabos  (援救落水者用的）绳索拋掷器. ~ obús 榴弹炮，曲射炮.  ~ rayado 膛线炮."
  },
  {
    "number": 859,
    "word": "yeso",
    "definition": "m. 1.【矿】石膏. 2.石膏制品. 3.石膏像. 4.粉笔. ~ blanco 【建】白垩， 大白. ~ espejuelo 【矿】透石膏. ~ mate 熟石膏，烧石膏.  ~ negro 【建】粗石膏. dar  lavar  de ~ 用白灰抹(墙）."
  },
  {
    "number": 860,
    "word": "curtido",
    "definition": "curtido， da adj. 1. 鞣制的，硝过的（皮革）. 2. （由于风吹、日晒等） 变黑的 （皮肤）： Volvió del campo con la cara ~a por el sol. 他从乡下回来脸被太阳晒黑了. 3. 老练的， 有经验的： Es un hombre ~en la lucha. 他是个经过斗争锻炼的人.|→ m. 1. 参见 curtimiento. 2. （用于鞣制皮革的） 树皮. 3. （鞣制过的） 皮革. (多用作复数)."
  },
  {
    "number": 861,
    "word": "filibustero",
    "definition": "m. 1.（西班牙殖民地的)解放运动党人.2.(十七、八世纪骚扰安的列斯群岛一带的）海盗."
  },
  {
    "number": 862,
    "word": "regocijo",
    "definition": "m.1. 高兴， 愉快， 欢乐. 2. 开心， 庆幸； 幸灾乐祸. 3. pl.庆祝活动， 娱乐活动. ~ público 庆祝活动， 联欢活动： Con motivo del Día Nacional se organizaron diversos ~ s públicos. 组织了各种活动来庆祝国庆."
  },
  {
    "number": 863,
    "word": "atochar",
    "definition": "tr. 1. (用茅草等) 填, 塞, 堵. 2. 【海】 (风) 使 (帆) 贴住缆索, 使贴住桅杆. |→ prnl. 【海】 (缆索) 被压住, 拉不动."
  },
  {
    "number": 864,
    "word": "embalsamar",
    "definition": "tr. 1. 使有香气， 使充满香味， 熏香. 2. (往尸体上)  涂防腐香油， 涂防腐药物."
  },
  {
    "number": 865,
    "word": "lanza",
    "definition": "m., f.Amér. 扒手f.长矛；车辕- estar con la ～ en ristre准备就绪- romper una ～ por挺身维护"
  },
  {
    "number": 866,
    "word": "bártulos",
    "definition": "m. pl.【转，贬】器具杂物： ~para pintar 绘画家什. liar los ~收拾家当（准备搬家）；整理行装. preparar los ~准备（做某事）."
  },
  {
    "number": 867,
    "word": "inaudito",
    "definition": "inaudito, ta adj. 1.前所未闻的，空前的. 2.【转】骇人听闻的."
  },
  {
    "number": 868,
    "word": "implacable",
    "definition": "adj. 1.不能平息的，不能缓和的，不能遏制的：un odio ~ 刻骨的仇恨. una crisis ~ 不可缓和的危机. 2.严酷的，不留情面的，不能通融的：un juez ~ 铁面无私的法官."
  },
  {
    "number": 869,
    "word": "humareda",
    "definition": "f. 烟雾."
  },
  {
    "number": 870,
    "word": "eludir",
    "definition": "tr. 躲避， 逃避， 回避， 避免： ~la respuesta 避而不答.  ~la invitación 拒不受请.  ~ la crítica 逃避批评.  ~ responsabilidades 逃避责任. Eludía mirarme a la cara. 他避而不正面看我."
  },
  {
    "number": 871,
    "word": "apremio",
    "definition": "m. 1. 催促. 2. «con, por» 勒令, 强制. 3. 催缴. 4. «imponer» 滞纳金. 5. «de» (时间) 紧迫, (地方) 狭窄, (经济 上的) 窘迫."
  },
  {
    "number": 872,
    "word": "bufete",
    "definition": "m. 1.写字台. 2.« abrir, tener »【转】律师事务所. 3.【转】律师的主顾. 4.[西班牙语中的法语词汇] 参见 buffet."
  },
  {
    "number": 873,
    "word": "manivela",
    "definition": "f.【技】曲柄,摇把."
  },
  {
    "number": 874,
    "word": "roñoso",
    "definition": "roñoso, sa adj.1. 长有疥癣的(牲畜) . 2. 肮脏的. 3. 生锈的. 4. 吝啬的， 小气的. 5. [厄瓜多尔方言] 粗糙的."
  },
  {
    "number": 875,
    "word": "aserrín (aserrar)",
    "definition": "aserrín (aserrar): 锯末（锯）"
  },
  {
    "number": 876,
    "word": "transeúnte",
    "definition": "adj. 1.过路的. 2.暂居的， 路过的. 3.暂时的. |→ m.，f. 1.行人. 2.过客."
  },
  {
    "number": 877,
    "word": "cortejar",
    "definition": "tr. 1. 巴结， 讨好. 2. 求爱， 追求."
  },
  {
    "number": 878,
    "word": "impasible",
    "definition": "adj. 1.无感觉的： ~ante el dolor 无痛感的. 2.«estar, ser» 冷漠的，无动于衷的."
  },
  {
    "number": 879,
    "word": "nombre de pila",
    "definition": "教名"
  },
  {
    "number": 880,
    "word": "apolillar",
    "definition": "tr. 蛀蚀.|→ prnl. 遭虫蛀, 被蛀蚀."
  },
  {
    "number": 881,
    "word": "bochorno",
    "definition": "m. 1.（盛夏的）热风. 2.闷热. 3.气闷，窒闷. 4.【转】（闷热引起的）脸红. 5.【转】气恼；羞愧."
  },
  {
    "number": 882,
    "word": "asediar",
    "definition": "tr. 1. 包围, 围困. 2. 【转】烦扰, 纠缠."
  },
  {
    "number": 883,
    "word": "lujurioso",
    "definition": "lujurioso, sa adj. 淫荡的，好色的. "
  },
  {
    "number": 884,
    "word": "pulga",
    "definition": "f.1. 小陀螺. 2. 【动】 跳蚤. ~ acuática  水蚤， 鱼虫. buscar las ~ s a uno 挑衅, 挑动. echar a uno la ~ detrás de la oreja 说出使某人不安的话. hacer de una ~ un camello  把蚂蚁说成大象[用于指夸大别人的缺点]. no aguantar  ~ s 不能忍受侮辱. sacudirse uno las ~ s 回击侮辱. tener uno malas ~ s 容易动怒， 脾气不好. tener ~ s 好动， 活泼. 谚语： Cada uno tiene su modo de matar ~ s. / Hay muchas maneras de matar ~ s. 各人有各人的作法."
  },
  {
    "number": 885,
    "word": "destemplado",
    "definition": "destemplado, da adj. 1. 失调的，不合调的（乐器、歌声等）. 2. 不和谐的， 难听的（声音）. 3. 激烈的， 粗暴的， 忿怒的（言词、 态度等）. 4. 易恼的，易怒的（人、性情等）. 5. 不平静的，多变的 （天气）. 6. 钢度不够的（白刃武器、刃具等）. 7. 色彩不协调的（绘画）. 8. 身体不适的；有微烧的（人）."
  },
  {
    "number": 886,
    "word": "baúl",
    "definition": "m. 1.衣箱. 2.【转，口】肚子. ~mundo 大衣箱.  heñchir  llenar  el ~吃足."
  },
  {
    "number": 887,
    "word": "modal",
    "definition": "adj.1.方式的，模态的，样态的.2.【语法】（动词）语式的.|→ m.pl «adquirir, coger; gastar, usar; pegarse; tomar; imitar»举止；风度；仪表."
  },
  {
    "number": 888,
    "word": "taparrabo",
    "definition": "m. (多用作复数) 1.遮羞布.2.游泳裤，三角裤."
  },
  {
    "number": 889,
    "word": "concurrencia",
    "definition": "f.1.聚集，汇集，集中，同时发生.2.资助，协助，援助.3.影响.4.【集】 (集会的）参加者，观众，听众."
  },
  {
    "number": 890,
    "word": "renunciar",
    "definition": "tr.1. 放弃， 舍弃： ~ un plan 放弃一个计划.  ~ un derecho 放弃某一权利.  (多用作不及物动词)： ~ a la corona 放弃王位. Ha tenido que ~ al viaje por la enfermedad de su madre. 他因为母亲生病而不得不放弃那次旅行. A pesar de su mala salud, no renuncia a trabajar. 他尽管身体不好， 仍不放弃工作. Renuncia a su parte de herencia en favor de su hermana. 他要把自己的那份遗产让给他的妹妹. 2. 拒绝， 拒不接受： ~ un ofrecimiento 拒不接受别人自愿给予的帮助.  (多用作不及物动词) ： Renuncio a su compañía. 我不要他陪伴. 3. 蔑视； 丢弃. 4. [牌戏] 拒不跟出(同花牌) [一种犯规行为] . ~ se uno a sí mismo 自我牺牲."
  },
  {
    "number": 891,
    "word": "gallinero",
    "definition": "gallinero, raadj. 1.母鸡的. 2.【猎】用鸡喂的（鹰). |→ m.,f.鸡商，鸡贩. |→ m.1.鸡窝，鸡舍，鸡笼.2.鸡群. 3. (剧场中）顶楼. 4.【转，口】嘈杂的地方, 女人聚集的地方."
  },
  {
    "number": 892,
    "word": "despuntarse",
    "definition": "despuntarse: 崭露头角"
  },
  {
    "number": 893,
    "word": "armar",
    "definition": "tr. 1. «de, con» 武装, 备： ~ a todo el pueblo 武装全国人民. ~ a uno de carabina 发给某人卡宾枪. ~ un ejército de un millón de hombres 组织百万大军. 2. (给武器) 上子弹. 3. 绷紧 (机件的弹簧) . 4. 装配, 安装： ~ un aparato de radio 装收音机. ~ una máquina 装配一台机器.  ~ una cama 支床. ~ una tienda 搭帐篷. 5. «sobre» 安放： ~ la estatua sobre el pedestal 把塑像安放在基座上. 6. «sobre» (金银工) 镶嵌. 7. 加衬. 8. 使具…形, 使成…状： ~ alto un árbol 使树冠向上长. 9. 【转, 口】组织, 安排： ~ una velada 组织晚会. 10. «jaleo, lío, ruido, riña, escándalo» 【转, 口】制造, 挑起, 酿成. u.t.en prnl. 11. «intriga» 【转, 口】策划, 谋划. 12. «trampa» 【转, 口】设置. 13. «de» 【转, 口】提供, 给予： Le han armado de una sólida instrucción. 他们给了他以扎实的教育. 14. 【海】装备 (船只) . 15. [阿根廷方言] 卷 (烟) ： ~ un cigarrillo 卷一支烟. |→ intr. 1.  (对某人、某物) 合适, 合宜, 符合： El vestido no arma a su talle. 这件衣服您穿着不合身. Esta consideración arma a nuestro propósito. 这种考虑正合我们的意思. 2. «en» 【矿】蕴藏.|→ prnl. «de, con» 1. 武装, 装备, 配备:  ~se con un pensamiento correcto 用正确的思想武装起来. ~se de un pico 带着一把镐.  ~se de valor 鼓起勇气.  ~se de paciencia 耐着性子. 2. 发生： Se está armando una tempestad. —场暴风雨就要来临. Se armó una gritería. —片吵声. 3. [拉丁美洲方言] (牲口等) 耍赖不走. 4. [拉丁美洲方言] 固执, 顽固坚持.  ~la 1. (打牌中) 搞鬼. 2. 【口】吵闹."
  },
  {
    "number": 894,
    "word": "hélice",
    "definition": "f.1.（轮船或飞机等的）螺旋桨.2.【解】耳轮.3.【动】 蜗牛.4.【数】螺旋线；螺旋面.5.【建】螺旋饰. |→ m. （首字母大写）【天】大熊星座. ~ aérea【空】螺旋桨. ~ aérea de paso variable  regulable 【空】变距螺旋桨. ~ de freno【空】阻制螺旋桨，反距螺旋桨. ~ de paso constante  fijo 【空】定距螺旋桨. ~ de velocidad constante【空】恒速螺旋桨. ~ propulsora【空】推进式螺旋桨. ~ tractora【空】拉力螺旋桨."
  },
  {
    "number": 895,
    "word": "conmoción",
    "definition": "f.1.s.de conmover. 2.地震.3.【转】骚乱，动乱. ~ cerebral 脑震荡. ~ geológica 地震."
  },
  {
    "number": 896,
    "word": "chucherías",
    "definition": "chucherías: 小玩意儿"
  },
  {
    "number": 897,
    "word": "ambulante",
    "definition": "adj. 1. 流动的，移动的： biblioteca ~ 流动图书馆. vendedor ~ (沿街叫卖的) 小贩. equipo sanitario ~ 巡回医疗队. 2. 野战医院的；救护车的. 3. 参见 ambulativo.|→ m.,f. (列车上的) 邮政营业员. ~ de correos (列车上的) 邮政营业员."
  },
  {
    "number": 898,
    "word": "agosto",
    "definition": "m. 1. 八月 2. 收获季节. 3. 收获, 收成: tener un buen ~ 收成好. hacer uno su ~ 【转，口】 捞好处, 牟利: hacer uno su ~ en la guerra 发战争财. 谚语: Agosto y septiembre no duran siempre. 八月收成九月仓, 充裕有日富难长."
  },
  {
    "number": 899,
    "word": "despejarse",
    "definition": "despejarse: 头脑清醒"
  },
  {
    "number": 900,
    "word": "regarse",
    "definition": "regarse: 浇水"
  },
  {
    "number": 901,
    "word": "panza",
    "definition": "f.1.肚子，腹部：echar ~ 长出肚子.2.【转】（器皿的）鼓肚.3.【动】瘤胃[反刍动物的第一胃]. ~ de burra 学位证书."
  },
  {
    "number": 902,
    "word": "encumbrarse",
    "definition": "encumbrarse: 攀登高位"
  },
  {
    "number": 903,
    "word": "empresa",
    "definition": "f. 1. «acometer, intentar, meterse en» (艰难的) 事情， 工作， 工程： No es ~fácil convencerle. 说服他不是一件容易的事情. La guerra revolucionaria es una ~ del pueblo. 革命战争是民众的事.  La Gran Muralla fue una ~titánica. 长城是一项非常艰巨的工程. 2. 企图， 打算. 3. 公司， 企业：la ~de importación y exportación 进出口公司. 4. 标记， 标志， 符号."
  },
  {
    "number": 904,
    "word": "estirpe",
    "definition": "f. 门第，血统."
  },
  {
    "number": 905,
    "word": "aplazar",
    "definition": "tr. 1. 延期, 展期, 推迟： ~ una conferencia. 延期召开某个会议. 2. 约期, 约会；召集, 召见."
  },
  {
    "number": 906,
    "word": "atónita",
    "definition": "atónita: 惊讶的"
  },
  {
    "number": 907,
    "word": "encaramarse",
    "definition": "encaramarse: 攀登"
  },
  {
    "number": 908,
    "word": "apretujarse",
    "definition": "apretujarse: 挤压"
  },
  {
    "number": 909,
    "word": "pajilla",
    "definition": "f.玉米叶卷的烟."
  },
  {
    "number": 910,
    "word": "turiferarios",
    "definition": "turiferarios: 挥香者"
  },
  {
    "number": 911,
    "word": "orfeón",
    "definition": "m.无伴奏合唱团."
  },
  {
    "number": 912,
    "word": "gendarmería",
    "definition": "f.(法国等的）宪兵队，宪兵营."
  },
  {
    "number": 913,
    "word": "brújula",
    "definition": "f. 1.指南针. 2.（古代枪炮的）准星. 3.【海】罗经. 4. （首字母大写）【天】罗盘座. perder la ~不知所措. ver por ~管窥."
  },
  {
    "number": 914,
    "word": "catalejo",
    "definition": "m. 望远镜."
  },
  {
    "number": 915,
    "word": "contratiempo",
    "definition": "m. 1. «sufrir， tener;  deplorar, lamentar» 不顺利； 不幸， 灾祸： No tuvimos ni un solo ~ ~en el viaje. 一路上我们没碰到一点儿不顺心的事情. 2. 【乐】 切分音法  3.【骑】 乱蹦乱跳."
  },
  {
    "number": 916,
    "word": "estertor",
    "definition": "m.1.鼾声.2.（垂危的人的）鼾息."
  },
  {
    "number": 917,
    "word": "aletear",
    "definition": "intr. 1. 扑扇翅膀. 2. (鱼被捞出水后) 摆动鳍, 摆尾巴. 3. 挥动手臂."
  },
  {
    "number": 918,
    "word": "fanfarria (fanfarrón)",
    "definition": "fanfarria (fanfarrón): 喇叭声（吹牛的人）"
  },
  {
    "number": 919,
    "word": "redoble",
    "definition": "m.1. 参见 redobladura. 2. 连续的鼓声."
  },
  {
    "number": 920,
    "word": "instruido",
    "definition": "instruido, da adj. 受过教育的，受过训练的，有文化的."
  },
  {
    "number": 921,
    "word": "divisar",
    "definition": "tr. 1. 看见， 望见， 遥见. 2. 【纹】 （在族徽上） 饰以区别标记."
  },
  {
    "number": 922,
    "word": "gorrión",
    "definition": "gorrión, ona m.,f.【动】1.麻雀,家雀儿.2.[拉丁美洲方言]参见 colibrí."
  },
  {
    "number": 923,
    "word": "otear",
    "definition": "tr.1.俯视，鸟瞰：Desde aquella altura se otea todo el valle. 从那个高处可以看到整个山谷.2.【转】查看，观察."
  },
  {
    "number": 924,
    "word": "iniciativa",
    "definition": "f.发起，倡议，创举，首创精神，主动（性）"
  },
  {
    "number": 925,
    "word": "desenterrar",
    "definition": "tr. 1. «de, de entre»  发掘. 2. 【转,  口】 想起， 记起， 提起."
  },
  {
    "number": 926,
    "word": "braga",
    "definition": "f. 1.男裤. (多用作复数) 2.吊绳，吊索. 3.尿布. 4.pl. 肥大的裤子. 5.pl. (女用的）裤衩."
  },
  {
    "number": 927,
    "word": "austral",
    "definition": "adj. 南极的；南半球的；南方的."
  },
  {
    "number": 928,
    "word": "sideral, sidéreo",
    "definition": "sideral, sidéreo: 星际的"
  },
  {
    "number": 929,
    "word": "resquicio",
    "definition": "m.1. 门缝. 2. 小缝， 细缝， 窄缝. 3. 【转】 (可以利用的) 空子， 时机， 借口. 4. 【转】 可能性. 5. [古巴方言], [委内瑞拉方言] 少量， 些微."
  },
  {
    "number": 930,
    "word": "indulgencia",
    "definition": "f. 1.宽厚；宽容；宽大. 2.(天主教会的）免罪. ~ parcial 部分免罪.  ~ plenaria 完全免罪."
  },
  {
    "number": 931,
    "word": "andinista",
    "definition": "m.，f. [拉丁美洲方言] 登山运动员."
  },
  {
    "number": 932,
    "word": "vericueto",
    "definition": "m. 陡峭崎岖的地方. "
  },
  {
    "number": 933,
    "word": "intrépido",
    "definition": "intrépido, da adj. 大胆的，勇敢的，无畏的：soldado ~ 勇敢的战士. 2.轻率的，不动脑筋的."
  },
  {
    "number": 934,
    "word": "féretro",
    "definition": "m. 1.棺材.2.抬尸架."
  },
  {
    "number": 935,
    "word": "sepelio",
    "definition": "m. 【雅】（按宗教仪式进行的）安葬. "
  },
  {
    "number": 936,
    "word": "escarmiento",
    "definition": "m. «hacer» 1.（由自己的或别人的教训而产生的）谨慎.2.惩戒，教训."
  },
  {
    "number": 937,
    "word": "impoluto",
    "definition": "impoluto, ta adj. 纯洁的，无瑕的. "
  },
  {
    "number": 938,
    "word": "malhechores",
    "definition": "malhechores: 罪犯"
  },
  {
    "number": 939,
    "word": "ganar",
    "definition": "tr.1.挣,赚(钱,工资)： Desde muy pequeño empezó a trabajar para así ~ dinero y ayudar a su familia. 他从很小就开始干活挣钱接济家里.Gana dos yuanes de jornal . 他每天挣两元钱 (也用作自复动词)：A los quince años ya se ganaba la vida como obrero. 他十五岁的时候就已经开始当工人自食其力了.2.取得，获得，博得,赢得： ~ un premio 获奖. ~ la confianza  de uno 博得某人的信任. ~ tiempo 赢得时间. (也用作自复动词)： ~se uno la admiración  de todos 受到大家的敬佩.Se ganó un aplauso.他博得一阵掌声.3.赢，胜: ~ el partido 贏一场比赛. ~ una batalla 打了一个胜仗. ~ la carrera 凑跑获胜.El me gana al ajedrez. 我下棋下不过他.4.«en» 胜过,超过：Me ganas en estatura, mas no en fuerza. 你个子比我高,但力气不如我大.5.到达，达到: Ganó la meta en primer lugar. 他第一个到达终点.Ganaron la cumbre de Qomolangma.他们登上了珠穆朗玛峰.6.夺取，攻克，攻占（城市、地方等).7.【海】驶近： ~ tierra 驶近陆地. |→ intr. 1.«con, de, en» 改善，改进；获益，得利:Hemos ganado no poco con el cambio. 我们从这一变化中受益不浅.Con ese tratamiento ha ganado en peso. 采用那种疗法之后，他的体重增加了. Este obrero gana cada día en habilidad. 这个工人的手艺日益提高.2.身体变好;变得好看: Esa chica ha ganado mucho al hacerse mujer. 那个姑娘长大之后，身体好多了（好看多了）.|→ prnl.1.博得好感，得到支持，受到拥护：Se gana con su simpatía a todo el que lo trate. 由于他和霭可亲，凡是和他接触的人都对他产生了好感. (也用作及物动词): ~ a los elementos de centro 争取中间派.Debemos ~ al mayor número posible de personas para nuestra causa. 我们应该争取尽可能多的人来支持和参加我们的事业.2.招致：Se ha ganado un desaire por haberse metido en lo que no le importa. 他因为管闲事讨了一个没趣.Si no le hacemos caso es porque él se lo ha ganado. 我们不理他是他自找的.3. [阿根廷方言],[智利方言] 藏匿，躲藏：Se ganó en una cueva y eludió la persecusión del enemigo. 他藏进山洞，躲过了敌人的追捕.El perro se ganó bajo el carro para guarecerse del sol.狗到车底下去躲阴凉.La pelota se ganó debajo de la mesa. 球滚到桌子下面去了."
  },
  {
    "number": 940,
    "word": "raído (raer)",
    "definition": "raído (raer): 磨破的（磨）"
  },
  {
    "number": 941,
    "word": "reivindicar",
    "definition": "tr.1. 恢复， 重新得到(权利， 声誉) . 2. 要求； 维护(权利) ：  ~ el derecho al trabajo 要求工作的权利.  ~ su herencia 维护他的遗产. 3. 使恢复名誉."
  },
  {
    "number": 942,
    "word": "sonámbula",
    "definition": "sonámbula: 梦游者"
  },
  {
    "number": 943,
    "word": "clarividencia",
    "definition": "f. 敏锐，洞察力，远见卓识."
  },
  {
    "number": 944,
    "word": "vecindario",
    "definition": "m. 1.【集】居民， 住户. 2.邻居. 3.(村、 镇的）户籍簿."
  },
  {
    "number": 945,
    "word": "extraviado",
    "definition": "extraviado,daadj.1.«estar» 迷路的，迷失方向的：un niño ~ 一个迷了路的小孩儿.2.走入歧途的，堕落的.3.丢失的 (物品）：Departamento de objetos ~s 失物招领处.4. «camino，lugar» 偏僻的，僻静的.5.«ojos, mirada, vista» 迷离的，迷茫的."
  },
  {
    "number": 946,
    "word": "sortija",
    "definition": "f. 1.戒指，指环. 2.发卷. 3.传戒指[游戏].4.[西班牙安达卢西亚方言] (轮毂的）加固圈，箍. correr ~ 跑马穿环[一种马术运动]."
  },
  {
    "number": 947,
    "word": "poroto",
    "definition": "m.1.[拉丁美洲方言]【植】菜豆，红花菜豆.2.[拉丁美洲方言]菜豆做的食物.3.[智利方言]【转】可鄙的人."
  },
  {
    "number": 948,
    "word": "membrillo",
    "definition": "m.  1.【植】榲椁树.2.榲椁.3.榲椁肉."
  },
  {
    "number": 949,
    "word": "cortinaje",
    "definition": "m. 【集】 帘幔."
  },
  {
    "number": 950,
    "word": "abandono",
    "definition": "m. 1. s.de abandonar (se). 2. 不修边幅, 邋遢；懒散. 3. 失职. 4. 【体育】弃权. 5. 【法】遗弃. 6. [西班牙语中的法语词汇] 参见 franqueza. ~ de destino  失职."
  },
  {
    "number": 951,
    "word": "hilacha",
    "definition": "f.1.(衣物、布料上的）回丝，纱头，线头.2.[墨西哥方言]破布."
  },
  {
    "number": 952,
    "word": "túnica",
    "definition": "f. 1.肥大的长衫[古希腊、 罗马人穿作衬衣]. 2.大褂， 长衫. 3.【解】膜. 4.【植】膜被， 鳞茎皮. ~ de Cristo 【植】白花曼陀罗.  ~ úvea 【解】葡萄膜， 眼色素层."
  },
  {
    "number": 953,
    "word": "teñir",
    "definition": "tr. 《con，de, en》 1.染,使着色.  (也用作自复动词) ： ~ se el pelo 染头发.2.（洗衣服时某件衣服上的颜色)沾染，浸染 (另一件衣服）. 3.《de》【转】使带有(某种色彩、情调、特点等）：Tiñe sus escritos de cierta melancolía. 他使自己的作品带上忧郁的情调. 4.【美】使（色调）变暗."
  },
  {
    "number": 954,
    "word": "azafrán",
    "definition": "m. 1. 【植】番红花, 藏红花. 2. 【美】藏红色, 橘黄色. 3. 【海】舵板加固件. ~ bastardo 【植】红花.  ~ de las Indias 【植】薑黄. ~ de Marte 氧化铁.  ~ romí  参见 ~bastardo."
  },
  {
    "number": 955,
    "word": "manjar blanco",
    "definition": "manjar blanco: 白色美食"
  },
  {
    "number": 956,
    "word": "turbante",
    "definition": "adj. 参见 turbador. |→ m. (男人用的）裹头布， 缠头布."
  },
  {
    "number": 957,
    "word": "amarrado",
    "definition": "amarrado, da adj. 1. 捆住的, 系住的. 2. «estar, ir» 【转, 口】 功课好的 (学生) . 3. «estar, ir» 【转, 口】 有好靠山的, 有后台的. 4. [拉丁美洲方言] 吝啬的, 小气的. 5. [古巴方言], [智利方言] 迟钝的, 不敏捷的；笨手笨脚的."
  },
  {
    "number": 958,
    "word": "amuleto",
    "definition": "m. 护身符."
  },
  {
    "number": 959,
    "word": "atinado",
    "definition": "atinado, da adj. «estar, ir, resultar, ser» 对的, 正确的, 准确的, 恰当的: dar una respuesta ~a 给以准确的回答. una medida ~a 恰当的措施. Has estado muy ~ . 你非常对."
  },
  {
    "number": 960,
    "word": "propagarse",
    "definition": "propagarse: 传播"
  },
  {
    "number": 961,
    "word": "alicaído",
    "definition": "alicaído, da adj. 1. 耷拉着翅膀的. 2. 【转, 口】虚弱的： Se ha quedado muy ~ después de la enfermedad. 他病后极为虚弱. 3. 【转, 口】没精打彩的, 萎靡不振的, 颓丧的, 消沉的. 4. 【转, 口】破落, 衰落的."
  },
  {
    "number": 962,
    "word": "infalible",
    "definition": "adj. 1.不会错的，不犯错误的，一贯正确的. 2.确实可靠的；必定无疑的."
  },
  {
    "number": 963,
    "word": "martingala",
    "definition": "f. 1.（古时武士穿在甲胄下面的)短裤. (多用作复数) 2.【口】诀窍，手段，方法. 3.[西班牙语中的法语词汇] (某些衣服上的）束腰带."
  },
  {
    "number": 964,
    "word": "canódromo",
    "definition": "m. 跑狗场."
  },
  {
    "number": 965,
    "word": "atiborrar",
    "definition": "tr. 1. (用羊毛等) 填满, 塞满. 2. 【转, 口】使吃饱.  (多用作自复动词)"
  },
  {
    "number": 966,
    "word": "vahído",
    "definition": "m. 昏厥， 昏倒."
  },
  {
    "number": 967,
    "word": "acierto",
    "definition": "m. 1. s.de acertar. 2.【转】熟巧, 本领. 3.【转】审慎. 4.【转】恰巧."
  },
  {
    "number": 968,
    "word": "atemorizar",
    "definition": "tr. «con» 使恐惧, 吓住, 吓倒: Nada puede ~ al pueblo consciente. 什么也吓不倒觉悟了的人民. (也用作自复动词): ~ se de  algo 被某事吓住."
  },
  {
    "number": 969,
    "word": "oráculo",
    "definition": "m.1.神谕；神命；天意.2.神像，神位，神殿.3.神. 4.【转】（权威人物的）决断，决定.5.【转】神化的人物，绝对权威. ~ del campo【植】母菊. hablar como un ~ 讲话玄妙，讲话模棱两可."
  },
  {
    "number": 970,
    "word": "cochera",
    "definition": "adj. 可以通过车辆的（大门）.|→ f.1.车房，车库.2.马车夫的妻子."
  },
  {
    "number": 971,
    "word": "miramiento",
    "definition": "m. 1.s.de mirar.2.持重，谨慎,检点.3.小心.4.畏怯，畏缩.5.pl. «guardar, tener»敬畏，尊重.sin ~ s 毫无顾忌地，肆无忌惮地."
  },
  {
    "number": 972,
    "word": "resistencia",
    "definition": "f.1. «hacer, ofrecer, oponer» s.de resistir(se) . 2. 耐力， 持久力： la ~ al sueño  耐困  的能力.  ~ para caminar 走路的耐力. 3. (机体的) 抵抗力， 抗病力； (细菌的) 抗药力. 4. 【机】 抗力， 阻力. 5. 【电】 电阻， 阻抗. 6. 【电】 电阻器： Se ha fundido la ~ de la plancha. 电熨斗的电阻器烧坏了. 7. 【转】 反对： Para hacer eso tengo que luchar con la ~ de los otros compañeros. 为了那么做， 我得不顾其他同志的反对. 8. 【转】 (第二次世界大战期间被占领国反对德国法西斯的) 抵抗运动， 抵抗组织. ~ de materiales 材料耐力. ~ inductiva 【电】 感抗. ~ pasiva 1. 【机】 钝态抵抗. 2. 【转】 消极抵抗.  ~ variable 【电】 可变电阻. de ~ 坚固的， 结实的， 耐久的. oponer ~ 进行反抗， 进行抵抗."
  },
  {
    "number": 973,
    "word": "arrimo",
    "definition": "m. 1. s.de arrimar. 2. 依靠, 依托. 3. 支持, 帮助, 庇护, 靠山. 4. 爱好；倾向. 5. 【泥】非承重墙. 6. 【泥】隔断墙. 7. [古巴方言] (两个庄园之间的) 界墙, 界栅. 8. 【口】 参见 amancebamiento. al ~ de 【口】依靠, 仰仗."
  },
  {
    "number": 974,
    "word": "guacamayo, a",
    "definition": "guacamayo, a: 金刚鹦鹉"
  },
  {
    "number": 975,
    "word": "vacilación",
    "definition": "f.犹豫"
  },
  {
    "number": 976,
    "word": "yac",
    "definition": "m. 【动】牦牛."
  },
  {
    "number": 977,
    "word": "arrozal",
    "definition": "m.稻田."
  },
  {
    "number": 978,
    "word": "planicie",
    "definition": "f.平原，平川."
  },
  {
    "number": 979,
    "word": "cachivaches",
    "definition": "cachivaches: 废物"
  },
  {
    "number": 980,
    "word": "pira",
    "definition": "f.1.(古时的）火祭坛；焚尸火堆.2.【转】篝火.3.【纹】正三角图案.irse de ~ 1.逃学.2.欢闹."
  },
  {
    "number": 981,
    "word": "infame",
    "definition": "adj. 1.声名狼藉的，名誉扫地的.  (也用作名词) 2.卑鄙的, 无耻的.  (也用作名词) 3.【转】极坏的，糟糕透顶的：El tiempo está ~ . 天气极坏."
  },
  {
    "number": 982,
    "word": "delirar (delirio)",
    "definition": "delirar (delirio): 胡言乱语（幻想）"
  },
  {
    "number": 983,
    "word": "almizcle",
    "definition": "m. 麝香."
  },
  {
    "number": 984,
    "word": "pelaje",
    "definition": "m.1.浓密的头发.2.（动物的）毛.3.【贬】仪表，相貌, 装束.4.【贬】（人的）种类，类型：juntarse uno con gente de su ~ 找和自己气味相投的人.del mismo ~ 同类型的."
  },
  {
    "number": 985,
    "word": "peladuras (pelar)",
    "definition": "peladuras (pelar): 削皮（剥皮）"
  },
  {
    "number": 986,
    "word": "supurar",
    "definition": "intr. 【医】化脓."
  },
  {
    "number": 987,
    "word": "legaña",
    "definition": "f.眼眵, 眼屎."
  },
  {
    "number": 988,
    "word": "chillar",
    "definition": "intr. 1. 尖叫； 喊叫， 吵闹， 尖声怪叫. 2. 尖声说话. 3. 讲话粗鲁. 4. 发出刺耳的声音. 5. (打猎时用拟声器) 模仿野兽叫声. 6. 【美】 （色彩） 剌眼， 不协调.|→ prnl. 1. 羞愧. 2. [拉丁美洲方言] 生气， 气恼."
  },
  {
    "number": 989,
    "word": "opulento",
    "definition": "opulento, ta adj.1.富的，富有的，有钱的：un ~ comerciante 巨商.2.多的，茂盛的：una ~ a vegetación 茂盛的植物. una ~ a cabellera 浓密的头发.3.发达的：músculos ~ s 发达的肌肉."
  },
  {
    "number": 990,
    "word": "porquería",
    "definition": "f.1.污秽，脏物，垃圾.2.破烂，废旧物品.(多用作复数)3.粪便.4.«hacer»【转】无礼：Le han hecho la ~ de no dejarle entrar después de haberle invitado.他们把他耍了，邀请了他可是到时候又不放他进去.5.【转】卑劣行为.6.【转】价值不大的东西.7.【转】没有营养的食物，不易消化的食物.hecho una ~ 非常脏的."
  },
  {
    "number": 991,
    "word": "bicho",
    "definition": "m. 1.小动物 . 2.【口】家畜. 3.【斗牛】牛. 4.【转】丑八怪，滑稽可笑的人. 5.【转】气愤，怨恨. ~raro 古怪的人，丑人. mal ~居心不良的人，居心叵测的人. todo  cualquier  ~任何一个人，每一个人."
  },
  {
    "number": 992,
    "word": "deshacerse de",
    "definition": "丢掉"
  },
  {
    "number": 993,
    "word": "misionera",
    "definition": "misionera: 传教士"
  },
  {
    "number": 994,
    "word": "hocico",
    "definition": "m.1.(牲畜、兽类的）嘴巴，口鼻部.2.【俗，贬】(人的） 嘴，翘嘴.(也用作复数)3.【转,口】脸，面孔.(也用作复数): romper-le a uno los ~ s 打破某人的脸.4.【转，口】不高兴的表情.  ~ de tenca 子宫颈. caer  dar(se)  de ~ s 碰着脸，碰着鼻子.estar de  con  ~（s) 生气，不高兴. meter el ~  los ~ s en algo 打探,好奇. poner  tener  ~/ torcer el ~ 撅嘴."
  },
  {
    "number": 995,
    "word": "reseco",
    "definition": "reseco, ca adj.1. 干的. 2. 【转】 瘦的. |→ m. 1. (草木上的) 枯枝. 2. 无蜜蜡."
  },
  {
    "number": 996,
    "word": "amo",
    "definition": "m. 1. 户主. 2. 业主. 3. 东家, 主人. 4. 工头, 监工. 5. 主宰. hacerse el ~ 1. 称王称霸. 2. 霸占.ser el ~ (del cotarro)主事, 做决策."
  },
  {
    "number": 997,
    "word": "cubierta",
    "definition": "f. 1. 罩， 遮护物： ~de mesa 桌布. ~de cama 床罩. 2. （书籍的） 封面， 封皮. 3. 信封：poner la ~a una carta 把信装入信封. 4. (车轮的）外胎，外带. 5. 屋顶： ~ a  dos vertientes 两面坡屋顶. 6. 【转】 借口， 托辞， 搪塞. 7. 【海】 甲板； 上甲板： subir a   ~登上甲板. 8. [哥伦比亚方言] (挂号信的） 挂号签. ~en mansarda / ~holandesa  【建】 折线形屋顶."
  },
  {
    "number": 998,
    "word": "prodigar",
    "definition": "tr.1. 挥霍， 浪费： ~ uno sus esfuerzos 浪费精力. 2. 大量给予， 慷慨施予： ~ elogios 大加赞扬. ~ favores 慷慨施助. Noá prodigó toda clase de atenciones. 他给我们以无微不至的关怀. |→ prnl.1. 慷慨好施. 2. 讨好别人， 献殷勤. 3. 自我表现."
  },
  {
    "number": 999,
    "word": "escatimar",
    "definition": "tr. 1.吝惜，尽可能少地给，尽可能少地用，尽可能 少地做： ~el tiempo 吝惜时间.no ~sacrificios 不惜牺牲. Escatima hasta el saludo. 他见了面连个招呼都不愿意打. A los pueblos revolucionarios del mundo nunca hemos escatimado la ayuda. 在援助世界革命人良方面我们从来也没有吝惜过. 2.曲解."
  },
  {
    "number": 1000,
    "word": "disputar",
    "definition": "tr.-intr.  «con; sobre. por»  1. 争论， 辩论. 2. 争夺: ~ le a uno algo  同某人争夺某物.  ~ dos personas por algo 两个人争夺某物. (也用作自复动词) |→ intr. 争吵，争斗."
  },
  {
    "number": 1001,
    "word": "fleco",
    "definition": "m. 1.缭子，流苏.2.刘海儿，额发.3.pl.(衣物磨损后出现的）毛边.4.pl.(飘在空中的）蛛丝."
  },
  {
    "number": 1002,
    "word": "mochar",
    "definition": "tr.1.用头撞，用角顶. 2.截断（牲畜的）角.3.去掉(某物的）顶部.4.[秘鲁方言],[波多黎各方言] 乱切，乱砍.5.[哥伦比亚方言]，[波多黎各方言] 切除：Le mocharon una pierna. 给他截去了一条腿.6. [阿根廷方言]偷窃."
  },
  {
    "number": 1003,
    "word": "berrinche",
    "definition": "m. 1. « coger » 哭嚷.2. « coger，llevarse, tener, tomarse, dar » 【口】恼怒，发火：Ha cogido un ~porque no la dejan ir al cine. 不让她去看电影她不高兴了 . 3.[厄瓜多尔方言] 争吵. 4.[波多黎各方言] 臭味."
  },
  {
    "number": 1004,
    "word": "potro",
    "definition": "potro, tram., f.小马m.刑椅；分娩椅； 跳马f.好运- ～ con arzón 鞍马"
  },
  {
    "number": 1005,
    "word": "retozar",
    "definition": "intr.1. 欢蹦， 欢跃， 欢跳. 2. (男女青年之间) 调笑, 嬉闹.  (也用作及物动词) 3. 【转】 (感情在内心中) 激越."
  },
  {
    "number": 1006,
    "word": "gruñir",
    "definition": "intr.1.（猪，狗等）哼叫.2.嘟哝.3.吱嘎作响：Lapuerta gruñe.门吱嘎响."
  },
  {
    "number": 1007,
    "word": "comensal",
    "definition": "m.,f.1.食客，寄食者.2.同桌共餐的人.3.【动】寄居动物，寄生动物."
  },
  {
    "number": 1008,
    "word": "mansedumbre",
    "definition": "f.温顺；驯服；柔和；平静"
  },
  {
    "number": 1009,
    "word": "doncella",
    "definition": "f. 1. 处女. 2. 少女. 3. 女仆， 侍女. 3. 【动】 一种鱼鳚 [Blennius pavo].  4. [秘鲁方言] 参见 sensitiva. 5.  [哥伦比亚方言]，[委内瑞拉方言] 参见 panadizo. ~ primera ~贴身女仆. segunda ~清扫女工."
  },
  {
    "number": 1010,
    "word": "carretón",
    "definition": "m. 1.小车.2.（磨刀的）砂轮架.3.婴儿车，婴孩学步车. 4.参见 bogí. 5.[中美洲方言] 线轴."
  },
  {
    "number": 1011,
    "word": "disparar",
    "definition": "tr. 1. 扔， 掷， 投： ~una piedra 扔石头. 2. «arco， flecha， tiro， escopeta» 发射， 射击. |→ intr. 1. 说蠢话， 干蠢事. 2. 扣扳机. 3. (动物） 跑散. 4. 跑着出来. 5. [墨西哥方言] 浪费， 挥霍. |→ prnl. 1. （枪、 炮等） 走火. 2. 突然起跑； 突然起动； 突然加速.  (也用作不及物动词) 3. 【转】 急速离开， 匆忙奔去. 4. 【转】 失去控制， 不能克制； 激怒， 暴跳. 5.  【转】 蛮干， 胡来."
  },
  {
    "number": 1012,
    "word": "estropicio",
    "definition": "m.«armar(se); hacer un»【口】1.巨响. 2.弄乱， 弄翻，打破: Los chicos han hecho un ~en mi mesa de trabajo.孩子们把我的工作台全翻乱了.3.喧闹，嘈杂，杂乱."
  },
  {
    "number": 1013,
    "word": "desparramar",
    "definition": "tr. 1. 使散开， 使散落. 2. 弄撒： Desparrama la sopa por el mantel. 他把汤撒在桌布上. 3. 【转】 分散注意力. 4. 【转】 挥霍. 5. 【转】 散布， 传播(消息）. 6. [阿根廷方言] 稀释.|→ prnl. 1. 散开， 四散： ~se los pájaros 鸟儿四处飞散. 2. 娱乐无度."
  },
  {
    "number": 1014,
    "word": "empedrado",
    "definition": "adj. 1. 有斑点的（马）.  2. 【转】 布满小块云彩的(天空）.  |→ m. 1. s.de empedrar. 2. 石铺地面， 石铺路面."
  },
  {
    "number": 1015,
    "word": "patalear",
    "definition": "intr.1.蹬腿，踢脚.2.（发怒时）顿足，跺脚.3.【转】发火，发怒，大发雷霆."
  },
  {
    "number": 1016,
    "word": "yegua",
    "definition": "f. 1.母马， 雌马. 2.[中美洲方言] 烟蒂， 烟头.  ~ caponera (马群的）头马."
  },
  {
    "number": 1017,
    "word": "labrar",
    "definition": "tr. 1.加工： ~ la cera 加工蜂蜡. ~ la madera  加工木材. ~ el oro 加工金器. ~ piedras preciosas 加工宝石. 2.耕，犁；耕种（土地）. 3.租种（土地）. 4.(妇女）缝，绣.  5.建造. 6.«felicidad; desgracia, perdición, ruina; porve- nir» 【转】谋求： ~ la felicidad del pueblo 为人民谋幸福. |→ intr.【转】（在精神上）产生强烈印象，造成巨大影响."
  },
  {
    "number": 1018,
    "word": "casucha",
    "definition": "casucha,casucho f. 小破房，简陋的小房子."
  },
  {
    "number": 1019,
    "word": "peón",
    "definition": "m.1.步行的人.2.步兵.3.小工，杂工,壮工.4.(农村的）雇工.5.陀螺.6.蜂房.7.（象棋的）卒子.8.(机械的）轴.9.(古诗中的）三短一长音步.10.[墨西哥方言]【俗】虱子. ~ caminero 养路工.  ~ de alhañil  (建筑工程的）小工，壮工.a ~ 步行地，徒步地.a torna ~ 相互地,互相地."
  },
  {
    "number": 1020,
    "word": "ventanuco",
    "definition": "ventanuco: 小窗户"
  },
  {
    "number": 1021,
    "word": "postigo",
    "definition": "m.1.边门，侧门，旁门.2.（大门上开的）小门，便门.3.单扇板门.4.小城门.5.（玻璃门、窗里面的）板门，窗板. 6.（窗、门上开的）气窗.7.（窗、门的）扇."
  },
  {
    "number": 1022,
    "word": "rústico",
    "definition": "rústico，caadj.1.农村的； 乡下的. 2. 【转】 粗鄙的, 乡下人的.  m.， f.农民, 乡巴佬. a la  ~ a 平装的(书) ."
  },
  {
    "number": 1023,
    "word": "lona",
    "definition": "f. 1.帆布.2.【口】帆布口袋. 3.[洪都拉斯方言] 一种植物[根可食]."
  },
  {
    "number": 1024,
    "word": "desabotonar",
    "definition": "desabotonar(se)tr., prnl.解开……的纽扣intr.绽放"
  },
  {
    "number": 1025,
    "word": "abstemio",
    "definition": "abstemio, miaadj. 不喝酒的, 忌酒的.  (也用作名词) "
  },
  {
    "number": 1026,
    "word": "bochinche",
    "definition": "m. 1.« armarse, haber » 喧闹，混乱, 骚乱. 2.小酒店. 3.[哥伦比亚方言]，[波多黎各方言] 流言. 4.[墨西哥方言] 家庭舞会."
  },
  {
    "number": 1027,
    "word": "jornal",
    "definition": "m. 1.«ganar; pagar; correr» 日薪, 日工资. 2.工作日. 3.霍尔纳尔[地积单位，大小因地区而有所不同]. a ~ 按日计工资. ir  trabajar  a ~ 当日工，打短工, 做散工."
  },
  {
    "number": 1028,
    "word": "quebrar",
    "definition": "tr.1. 打碎， 打破， 使破裂： ~ una vasija 打碎一个杯子. 2. 折断. 3. 弯曲(身体)： ~ el cuerpo 弯下身子. (也用作自复动词)4. 破坏， 毁坏； 打断， 阻断： Un grito quebró su discurso. 一声喊叫打断了他的讲话. 5. 使失去力量， 使缓减， 使减弱： ~ el color 使颜色变淡. 6. 使变丑， 使憔悴； 使(脸上) 无血色， 使变得苍白. 7. 战胜,克服(困难). 8. 挣脱， 摆脱(束缚等). 9. 违犯(法律)； 毁弃(誓约、诺言等). 10. [阿根廷方言]驯(马) . |→ intr.1. «con» 绝交， 决绝. 2. 退让； 松缓， 变弱. 3. 破产， 倒闭. |→ prnl. 1. 患疝病， 有疝气. 2. (山脉、坡面等) 截断， 形成断面. 3. 扭动， 扭摆. antes ~ que doblar 宁折不弯. ~ algo por uno 某事坏在某人手里. ~ por lo más delgado (绳子) 总在细处断."
  },
  {
    "number": 1029,
    "word": "lila",
    "definition": "f. 1.【植】西洋丁香. 2.西洋丁香花. U.m.en. pl. 3.丁香花色，淡紫色. 4.(古时的)一种毛料.  |→ adj.- s.【口】蠢 的；傻瓜."
  },
  {
    "number": 1030,
    "word": "armiño",
    "definition": "m. 1. 【动】白鼬, 扫雪. 2. 白鼬皮. 3. (马蹄甲上部的)白斑. 4. 【转】洁白, 纯洁. 5. 【纹】白地黑花, 白鼬尾状花."
  },
  {
    "number": 1031,
    "word": "tarado",
    "definition": "tarado, da adj. 有缺点的，有毛病的，有瑕疵的."
  },
  {
    "number": 1032,
    "word": "estupefacto",
    "definition": "estupefacto, ta adj. «quedarse; dejar» 惊讶的，惊愕的惊呆的."
  },
  {
    "number": 1033,
    "word": "cascabel",
    "definition": "m. 1.铃铛. 2.【印】跳字. 3.【动】（响尾蛇尾部的） 角质轮. 4.【军】（炮筒后部的）圆形封口. |→ m.f.【转】 快乐的人，乐天派. de ~gordo【转】粗糙的，不精致的. poner el ~al gato 【转】敢干."
  },
  {
    "number": 1034,
    "word": "corrillo",
    "definition": "m. (谈话或交往的） 圈子. "
  },
  {
    "number": 1035,
    "word": "atisbar",
    "definition": "tr. 1. 注视, 观察；暗中监视. 2. 隐约看见, 模糊地看到： ~ una esperanza de éxito 可以看出有成功的希望. Me parece ~ allá lejos un tejado. 我仿佛看见远处有座房子."
  },
  {
    "number": 1036,
    "word": "distar",
    "definition": "intr.  «de» 1. （空间和时间上） 距离， 相距： Tianjin dista unos ciento veinte kilómetros de la capital. 天津离首都大约一百二十公里. Ese suceso dista de ahora más de diez años. 那件事情离开现在已经十年了. 2. 【转】 有差距， 有区别:  Lo que ha dicho no dista mucho de la verdad. 他讲的与事实出入不大. Distamos mucho de ser lo que nos exige el Partido. 我们离党的要求还差得很远."
  },
  {
    "number": 1037,
    "word": "vereda",
    "definition": "f. 1.小径， 小路. 2.牧道. 3.(教士的)布道路线. 4.[拉丁美洲方言] 便道, 人行道. 5.[哥伦比亚方言] 市区; 农村教区. entrar en ~ 行为端正； 生活规律. hacer a uno entrar por ~ 使尽责， 使守规矩. pasarse a la otra ~ 改换门庭."
  },
  {
    "number": 1038,
    "word": "esfumarse",
    "definition": "esfumarse: 消失"
  },
  {
    "number": 1039,
    "word": "acróstico",
    "definition": "acróstico, ca adj.-m. 离合体的, 离合诗的；离合诗."
  },
  {
    "number": 1040,
    "word": "versificar",
    "definition": "intr. 作诗， 写诗. |→ tr. 使改编成诗歌体. "
  },
  {
    "number": 1041,
    "word": "apetencia",
    "definition": "f. 1. 食欲. 2. 欲望."
  },
  {
    "number": 1042,
    "word": "rondar",
    "definition": "tr.1. (夜间在某处) 巡逻.  (也用作不及物动词) 2. 巡视， 巡查（岗哨） . U.U.intr. 3. （小伙子在某处或对某人) 闹夜. U.tx.intr. 4. 巴结， 奉迎. 5.追求（姑娘） . 6. 围着（某物或某人) 转: La maiiposa ronda la luz de la lámpara. 蛾子围着灯飞. 7. «sueño, enfermedad» (对某人) 即将发作： Me está rondando un catarro. 我快要感冒了."
  },
  {
    "number": 1043,
    "word": "padrinos",
    "definition": "padrinos: 教父"
  },
  {
    "number": 1044,
    "word": "propósito",
    "definition": "m. «con； hacer； tener； abandonar, desistir, renunciar； de» 1. 意图， 企图， 打算， 主意： Tengo el ~ de salir. 我想出去. 2. 目的， 目标. 3. 题目， 论题. 4. pl.意志： Tiene buenos ~ s. 他有着坚强的意志. a ~ 1. 合适的： Está poco a ~para ese destino. 他不适合那个工作. 2. «hacer» 专门地. 3. 故意地： No lo hice a ~ . 我不是故意这样做的. 4.顺便地: A ~ , no vengas a cenar esta noche. 顺便告诉你， 今晚别来吃晚饭了. a ~ de 关于， 围绕着： La discusión surgió a ~ de cómo llevar a efecto el plan. 在如何实施计划方面出现了争论. No tengo nada que decir a ~ de este asunto. 对这件事情我没有什么好说的. de ~ 1. 故意地， 蓄意地. 2. 特意地， 专门地. fuera de ~ 不合时宜地."
  },
  {
    "number": 1045,
    "word": "estrujar",
    "definition": "tr.1.榨，使出汁液： ~un limón 榨柠檬汁. 2.挤压（某人）： ~ le a uno el pie de un pisotón 踩一下某人的脚.3.揉皱，弄扁，扭歪，使变形：Estrujó el periódico entre sus manos. 他把报纸揉皱了.4.【转】压榨，剥削： ~ al pueblo 压榨人民.5.【转】使发挥到极限，使枯竭，用尽. (也用作自复动词)： ~se uno la cabeza 绞尽脑汁."
  },
  {
    "number": 1046,
    "word": "cerro",
    "definition": "m. 1.(洗净、梳理过的)麻把，麻束. 2.(动物的）颈，脖子；脊梁，脊背. 3.小山，山丘. echar uno por esos ~s 【转，口】不对路.  en ~无鞍的，光背的（马）.  ir (se) por los ~  s de Ubeda 【转，口】离题，不切题."
  },
  {
    "number": 1047,
    "word": "moler",
    "definition": "tr.1.研，捣，磨，轧；碾磨，压榨.2.【转】使疲惫不堪，使精疲力尽：Me ha molido esta caminata.这一趟走得我累死了.3.【转】痛打，折磨，虐待，使遍体鳞伤： ~a uno a palos 用棍子痛打某人.4.«con»【转】烦扰.|→ prnl.疲倦."
  },
  {
    "number": 1048,
    "word": "patada",
    "definition": "f.1.«dar»踹，踏，踩，踢.2.【转，口】脚印，踪迹，痕迹.3.pl.【转，口】（处理事务的）步骤，措施，运筹：Te va a costar muchas ~ s conseguirlo.你要大费一番心思才能把这件事办成.a ~ s 1.大量的，多得是的：Allí están los conejos a ~ s.那里兔子多得是.2. «tratar» 不爱惜地, 不经心地.dar cien ~ s algo 令人讨厌，使人不高兴.dar la ~ 【口】（把某人)赶下台. dar ~ s para algo 办理，筹划. dar una ~ a uno 1.赶走. 2. 参见 dar la ~. echar a uno a ~ s de un sitio 轰走."
  },
  {
    "number": 1049,
    "word": "guacho，huacho",
    "definition": "guacho, huacho: 孤儿"
  },
  {
    "number": 1050,
    "word": "apaciguar",
    "definition": "tr. 1. 使和解, 使和好. (也用作自复动词)2. 使平静, 使平息；抚慰. (也用作自复动词) 3. 使缓和, 减轻 (痛苦) ."
  },
  {
    "number": 1051,
    "word": "inquisidor",
    "definition": "inquisidor, ra adj. 参见 inquisitivo. |→ m. 1.宗教法庭法官. 2.调查者，追查者.  ~ general 宗教法庭庭长."
  },
  {
    "number": 1052,
    "word": "resignarse",
    "definition": "prnl.1.可参见resignar.2.忍受，屈从，忍耐，甘心.No se resigna a ser el último en todas partes. 他不甘心处处落后."
  },
  {
    "number": 1053,
    "word": "escaño",
    "definition": "m. 1.长靠背椅. 2.(议会中议员的）座位，席位. 3.(解剖室用的）担架. 4.[拉丁美洲方言](公共场所的）长条椅."
  },
  {
    "number": 1054,
    "word": "costurón",
    "definition": "m. 1. 粗针大线，不精细的针线手工. 2. 【转， 口】 （显眼的) 疤痕."
  },
  {
    "number": 1055,
    "word": "perdiz",
    "definition": "[pl. perdices] f.【动】石鸡.  ~ ces en campo taso 【转】难办到的事情. ~ blanca 一种雷鸟[Lagopus mutus].  ~ blancal 赤胸朱顶雀. ~ cordillerana [南美洲方言] 一种鸟 [Thinocorus rumicivorus, Thinocórix orbignyanus].  ~ de bosque 山鹧古鸟. ~ de la cordillera 参见 ~ cordillerana.  ~ pardilla 灰山鹑. ~ real 石鸡.谚语：la ~ por el pico se pierde.石鸡贪嘴终丧生；言多必有失.Perdiz, o no comerla.要吃石鸡,就得吃整只；要么全部，要么全无. "
  },
  {
    "number": 1056,
    "word": "garrafa",
    "definition": "f.细颈大玻璃瓶，凉水瓶."
  },
  {
    "number": 1057,
    "word": "acariciar",
    "definition": "tr. 1.爱抚，抚弄.2.【转】怜爱，宠爱. 3.轻拂. La brisa acaricia la bandera. 微风吹拂着旗帜. 4. «proyectos, ideas, planes» 怀抱.5.怀有，抱有(希望).Acaricia la idea de marcharse a China. 她想去中国."
  },
  {
    "number": 1058,
    "word": "minucioso",
    "definition": "minucioso，sa adj.详细的，仔细的：efectuar una inspección ~ a进行详细考察."
  },
  {
    "number": 1059,
    "word": "conciliábulo",
    "definition": "m.«tener; reunirse en, andar en» 非官方的会议；非法集会，秘密集会."
  },
  {
    "number": 1060,
    "word": "humilde",
    "definition": "adj. 1.卑微的，卑贱的. 2.谦恭的，谦卑的. 3.卑躬屈节的，低声下气的. 4.【转】低的，不高的. 5.【转】平凡的，一般的，普通的."
  },
  {
    "number": 1061,
    "word": "pellejo",
    "definition": "m.1.兽皮,毛皮；皮革，生皮.2.(人的）皮，皮肤.3.皮囊，皮袋：un ~ de vino —皮袋酒.4.果皮[尤指葡萄皮].5.【转】性命：Es una aventura que puede costarle el ~.那是一次可能要他付出生命代价的冒险.6.«estar，ser»【转，口】醉汉.7.【口】妓女.dar  el ~ 送命，丢掉性命. estar  uno en el ~ de otro 处于某人的地位，遇上某人的处境：Si yo me hallara en su ~ no cedería.如果我是你的话，我就不让步.jugarse uno el ~ 玩命，豁出性命.mudar uno el ~ 改变处境；改变习惯.no caber uno en el ~ 1.很胖.2.情不自禁.no tener uno más que el ~ 瘦成一张皮.pagar uno con el ~ 以生命报答. perder el ~ 参见 dar el ~.quitar a uno el ~ 1.夺去生命.2.议论，数落，诅咒.3.诈，骗.salvar uno el ~ 保全性命.soltar uno el ~ 参见 dar el ~."
  },
  {
    "number": 1062,
    "word": "roer",
    "definition": "tr.1. 咬, 啃： Los ratones roen todo lo que encuentran. 老鼠碰到什么咬什么. 2. 【转】 侵蚀； 消耗. 3. 【转】 折磨； 烦扰： Ese pesar le roe continuamente. 那个心事不断地折磨着他. Le roe la conciencia por lo que te ha hecho. 他正在为对你做的那件事情而感到良心不安."
  },
  {
    "number": 1063,
    "word": "tilo",
    "definition": "m. 1.【植】椴树. 2.[哥伦比亚方言] (玉米的）花蕾. 3.Ckil., [阿根廷方言] 椴树花浸剂."
  },
  {
    "number": 1064,
    "word": "arrebolar",
    "definition": "tr. 使变成红色.|→ prnl.1. 抹胭脂. 2. 脸红. 3. [委内瑞拉方言] 打扮."
  },
  {
    "number": 1065,
    "word": "arroparse",
    "definition": "arroparse: 裹紧"
  },
  {
    "number": 1066,
    "word": "colar",
    "definition": "tr.1.滤，过滤： ~el café 滤咖啡.2.漂白（衣服）. 3.使蒙混过去： ~ algo por la aduana 把某物暗中带过海关.4.以假冒真；以坏充好： ~un billete falso 用假钞票骗人. ~ artículos averiados 把坏货当好货卖.5.使误信： No intentes ~ me esa historia,你休想让我相信那一套瞎 话.6.授予圣职；授予学位；授予荣衔.7.【冶】铸造.|→ intr.1.（从狭窄的地方)通过，穿过：Cuela el viento por este agujero. 风从这个窟窿中透进来.2.喝酒.3.蒙混过去；被相信，被接受. |→  prnl. 1.混入，潜入,偷偷进入.2.(在等候的队伍中）插队,加塞儿.3.【转，口】做错,犯错误：Se ha colado en ese problema. 在那个问题上他错了. Me colé creyendo que él era capaz de eso.我错以为他做得 了那件事情.Me colé al depositar mi confianza en él. 我错误地相信了他.4.【斗牛】（牛)偷偷地冲过来."
  },
  {
    "number": 1067,
    "word": "prurito",
    "definition": "m.1. 【医】 瘙痒. 2. 【转】 渴望， 欲望： sentir el ~ de hablar 非常想讲话. La reunión no obedece al simple ~ de criticar a unos camaradas. 那次会议并不单纯地是为了批评一些同志. 3. 【转】 刻意求精： Le dio el ~ de la limpieza. 他这个人过分爱干净. Siempre llega puntualmente por ~ de exactitud.由于他办事特别认真， 所以总是非常准时."
  },
  {
    "number": 1068,
    "word": "acongojar",
    "definition": "tr. 使忧伤, 使烦恼, 使痛心. (也用作自复动词)  "
  },
  {
    "number": 1069,
    "word": "naufragio (naufragar)",
    "definition": "naufragio (naufragar): 海难（遭遇海难）"
  },
  {
    "number": 1070,
    "word": "morondanga",
    "definition": "f.【口】破烂堆，废物堆."
  },
  {
    "number": 1071,
    "word": "husmear",
    "definition": "tr. 1.嗅， 闻. 2.【转，口】 打探，探听. |→ intr. 腐烂发臭."
  },
  {
    "number": 1072,
    "word": "cacerola",
    "definition": "f. 带把浅口锅."
  },
  {
    "number": 1073,
    "word": "hurgar",
    "definition": "tr. 1.拨弄， 搅动， 翻动: ~ el fuego 拨火. 2.触摸. 3.【转】 刺激， 激怒， 惹恼. 4.【转】 折磨， 烦扰， 使不安. |→ intr. 1.«en» 窥探， 翻弄. 2.【转】 刺痛: ~ en la herida de uno 揭人伤疤."
  },
  {
    "number": 1074,
    "word": "pesquisa",
    "definition": "f.«hacer, realizar» 侦查，稽查，调查.|→ m.[阿根廷方言], [厄瓜多尔方言]侦探."
  },
  {
    "number": 1075,
    "word": "requisar",
    "definition": "tr.征用[尤用于指军需品] ."
  },
  {
    "number": 1076,
    "word": "rubicundo",
    "definition": "rubicundo, da adj.1. 金红色的. 2. 红润的(脸色) ； 脸色红润的(人) . 3. 呈红色的(头发) ."
  },
  {
    "number": 1077,
    "word": "reventar",
    "definition": "intr.1. 爆裂， 破裂： La cañería ha reventado por la helada. 水管冻裂了.  (也用作自复动词)： ~ se un neumático 轮胎爆裂.  ~ se un grano de uva 葡萄粒破裂. 2. 爆炸： No reventó ese cohete. 那个爆竹没炸. 3. (波涛) 溅起浪花. 4. 喷涌； 迸发. 5. «por, de, de ganas de» 切望， 极欲: Reventaba por decir lo que sabía. 他急着要把知道的事情讲出来. Está reventando por decirlo. / Está que revienta de ganas de soltarlo. 他迫不及待地要把那事讲出去. 6. «de； satisfacción, vanidad, orgullo» 满怀， 满心. 7. «de； risa, llanto» 【转，口】 爆发：  ~ derisa 大笑. 8. 【口】 死， 翘辮子. (也用作自复动词) |→ tr.1. 使爆裂， 使破裂： Hinchó demasiado el globo y lo reventó. 他把气球给打爆了. 2. 使累垮, 使累死[尤用于指马] . 3. 【转】 使过份疲劳. 4. 【转，口】 使恼火， 使厌烦： Me revienta tener que tratar con gente de tal índole. 我真讨厌和那种人打交道. 5. 【转，口】 使失败 [尤指戏剧演出等时的起轰、喝倒采] . 6. 【转，口】 严重伤害. |→ prnl.1. (马) 累病， 累死. 2. 【口】 过忙， 过累."
  },
  {
    "number": 1078,
    "word": "morgue",
    "definition": "f.[西班牙语中的法语词汇]陈尸所，停尸房."
  },
  {
    "number": 1079,
    "word": "láudano",
    "definition": "m. 1.【医】阿片酊, 鸦片酊. 2.【古】鸦片."
  },
  {
    "number": 1080,
    "word": "reposo",
    "definition": "m.1. s.de reposar(se) . 2. 安静； 宁静. 3. 【医】 静卧疗法：  ~ absoluto 绝对静卧. hacer ~ 采用静卧疗法."
  },
  {
    "number": 1081,
    "word": "esmirriado, desmirriado",
    "definition": "esmirriado, desmirriado: 瘦弱的"
  },
  {
    "number": 1082,
    "word": "trastabillar, trastrabillar",
    "definition": "trastabillar, trastrabillar: 绊脚"
  },
  {
    "number": 1083,
    "word": "desplomarse",
    "definition": "prnl.倾斜；倒塌；晕倒；毁灭；消失 "
  },
  {
    "number": 1084,
    "word": "chal",
    "definition": "m. 披肩， 大披巾."
  },
  {
    "number": 1085,
    "word": "mesarse",
    "definition": "prnl.拔（发）；捋（须）"
  },
  {
    "number": 1086,
    "word": "mascullar",
    "definition": "tr. 1.【贬】咀嚼.2.【转】含糊其词地说，咕哝，嘟囔： ~una maldición unas palabras de：agradecimien-to> 含含糊糊地骂了一句 说了一些感激的话>."
  },
  {
    "number": 1087,
    "word": "letanía",
    "definition": "f. 1.【宗】连祷；应答祈祷；连祷仪式. (多用作复数)2.【转，口】一连串，一系列: una ~ de reclamaciones —连串的要求."
  },
  {
    "number": 1088,
    "word": "áspero",
    "definition": "áspero, ra adj. 1. 粗糙的, 不光滑的. 2. 崎岖的, 坎坷不平的. 3. 【转】刺耳的 (声音) . 4. 【转】剌鼻的 (气味) . 5. 【转】涩的. 6. 【转】尖酸刻薄的 (言辞、语气等) . 7. 【转】多风多雨的, 不和暖的, 凜烈的 (天气) . 8. 【转】激烈的, 猛烈的 (战斗等) . 9.«con; en» 【转】粗暴的, 生硬的, 态度不好的；严厉的, 呆板的;冷酷的, 心肠硬的."
  },
  {
    "number": 1089,
    "word": "alisar",
    "definition": "tr. 弄平, 弄光滑： ~ un terreno 把地弄平.  ~ una tabla con el cepillo 刨光木板. ~ el pelo 梳理头发. |→ m. 参见 alisal. "
  },
  {
    "number": 1090,
    "word": "superlativo",
    "definition": "superlativo, va adj. 1.优秀的,极好的.2.《grado》极端的：ser despiadado en grado ~ 极其残忍. 3.【语法】最高的，最高级的：un adjetivo ~  en grado ~ ，en forma ~ a  最高级形容词."
  },
  {
    "number": 1091,
    "word": "vestigio",
    "definition": "m. 1.痕迹， 印迹. 2.遗迹， 残迹： eliminar los ~s del feudalismo 肃清封建余孽. 3.【转】迹象, 线索."
  },
  {
    "number": 1092,
    "word": "apiadarse",
    "definition": "apiadarse: 怜悯"
  },
  {
    "number": 1093,
    "word": "en vilo",
    "definition": "en vilo: 悬而未决"
  },
  {
    "number": 1094,
    "word": "pómulo",
    "definition": "m.【解】颧骨."
  },
  {
    "number": 1095,
    "word": "moño",
    "definition": "m.1.发髻.2.彩结.3.（某些禽鸟的）冠羽.4.Pl.（女人的）俗气的装饰.5.[智利方言](男人的）头发.6.[智利方言](马的）额毛.7.[智利方言](某些东西的）顶部,顶端.8.[哥伦比亚方言]任性. agarrarse del ~（女人打架时）揪住头发.hacerse una el ~ 梳头发，梳妆打扮.ponérsele a una algo en el ~ 心血来潮决定做某事.ponerse uno ~ 【俗】自负，傲慢. quitar ~ s 使不知所措，使茫然."
  },
  {
    "number": 1096,
    "word": "regazo",
    "definition": "m.膝头，怀抱 "
  },
  {
    "number": 1097,
    "word": "hipar",
    "definition": "intr.1.呃逆，打嗝儿.2.(狗在追猎时）发出呼哧声.3.疲劳，疲倦.4.啜泣，抽噎.5.«por»【转】渴望，热望."
  },
  {
    "number": 1098,
    "word": "verter",
    "definition": "tr. 1.《de; en》 倒， 灌， 注： ~ la sopa en la sopera 把汤倒进汤缽子里. ~ el trigo del saco en el depósito 把小麦从口袋中倒入囤子里. 2.《en， sobre》 泼， 洒， 使流溢： ~ el vino sobre el mantel 把酒洒到桌布上.  (也用作自复动词)： Con el vaivén se vierte el agua de los vasos. 水都从杯子里晃荡出来了. 3.《a， en》 翻译： ~ una novela al español 把一本小说译成西班牙文.  ~ una poesía en prosa 把诗译成散文.  ~ el discurso tomado taquigráficamente a escritura corriente 把报告的速记稿译成普通文字. 4.【转】倾述， 说出(意见、 观点等）： ~ los puntos de vista 说出自己的观点. |→ intr.《a》 汇入， 流入： El Hanshui vierte al Ghangjiang por el norte. 汉水从北边流入长江. La vertiente sur de los Pirineos vierte al Ebro. 比利牛斯山的南坡连着埃布罗河."
  },
  {
    "number": 1099,
    "word": "delantal",
    "definition": "m. 围裙."
  },
  {
    "number": 1100,
    "word": "hule",
    "definition": "m. 1.橡胶. 2.油布. 3.【口】手术台. haber ~  1 .【斗牛】有伤亡. 2 .【口】 殴斗."
  },
  {
    "number": 1101,
    "word": "ungüento",
    "definition": "m. 1.油膏， 软膏. 2.(古时用的）涂尸袖. 3.【转】缓解， 宽解. 4.【转】无效措施； 不当措施. (多用作复数)"
  },
  {
    "number": 1102,
    "word": "emplasto",
    "definition": "m. 1. 膏药， 药膏； 泥罨敷剂. 2. 【转， 口】  临时处理， 不完善的处理. 3. 【转， 口】  柔弱多病的人. 4. 【转， 贬】 烂糊糊的东西； 脏糊糊的东西. 5. 【转， 口】 （不协调的）补丁. ~ de ranas 【口】 钱."
  },
  {
    "number": 1103,
    "word": "pompa",
    "definition": "f.1.奢华，排场.2.富丽，宏伟.3.隆重仪仗.4.孔雀屏.5.水泡，汽泡，肥皂泡.6.（风在器物上吹出的）鼓肚，鼓胀.7.【海】水泵，抽水机. ~ （s) fúnebre(s) 殡仪. ~ de jabón 1.肥皂泡.2.【转】虚幻的事物.hacer ~ 1.(树木）枝叶扶疏.2.炫耀，夸示."
  },
  {
    "number": 1104,
    "word": "matarife",
    "definition": "m. 屠夫."
  },
  {
    "number": 1105,
    "word": "crespón",
    "definition": "m. 绉绸."
  },
  {
    "number": 1106,
    "word": "remache",
    "definition": "m. 1. s.de remachar. 2. 铆钉. 3. (铆平的) 钉头. 4. [台球] 击台边球. 5. [哥伦比亚方言] 坚持."
  },
  {
    "number": 1107,
    "word": "cirios",
    "definition": "cirios: 蜡烛"
  },
  {
    "number": 1108,
    "word": "candelabros",
    "definition": "candelabros: 烛台"
  },
  {
    "number": 1109,
    "word": "azahar",
    "definition": "f. 柑橘花, 橙花, 柠檬花, 枸橼花."
  },
  {
    "number": 1110,
    "word": "pésame",
    "definition": "m.«dar»吊唁，哀悼：Reciba mi sincero ~.请接受我衷心的哀悼. Le expreso mi más sentido ~.谨向您表示我最深切的哀悼."
  },
  {
    "number": 1111,
    "word": "velorio",
    "definition": "m. 1.（农家的）晚会. 2.守灵[尤用于对孩子的尸体]. 3.(修女、 尼姑的）出家仪式. 4.[阿根廷方言] 冷清的欢会. 5.[委内瑞拉方言] 小客栈. |→ interj. [阿根廷方言] [表示怀疑]真的会这样."
  },
  {
    "number": 1112,
    "word": "copioso",
    "definition": "copioso, saadj. 丰富的， 丰足的， 丰裕的；大量的：una ~ ~ a cosecha de trigo 小麦大丰收. una comida ~ a ~丰盛的宴席. "
  },
  {
    "number": 1113,
    "word": "compresas",
    "definition": "compresas: 卫生巾"
  },
  {
    "number": 1114,
    "word": "amoníaco",
    "definition": "m. 氨；氨草胶"
  },
  {
    "number": 1115,
    "word": "acurrucarse",
    "definition": "prnl. 拳曲, 蜷缩."
  },
  {
    "number": 1116,
    "word": "frasco",
    "definition": "m.1.细口小瓶.2.火药筒[多用牛角制成].3.[南美洲拉普拉塔河流域方言]弗拉斯科[液量单位，合 2.37 升]. ~ cuentagotas 滴漏瓶."
  },
  {
    "number": 1117,
    "word": "trabar",
    "definition": "tr. 1.连接， 加固： ~ las patas de una silla con un listón 用裳把椅子腿连接在一起. 2.固定； 抓住， 钩住， 挂住.  (也用作不及物动词) 3.（用绳索）绊住（马腿）. 4.塞住， 掩住(车轮等以防滑动）. 5.校正（锯齿）. 6.使变稠， 使变浓.  (也用作不及物动词)7.【转】约束， 拘束； 束缚， 妨碍. 8.《conversación， lucha, discusión》 【转】开始， 展开. 9.【转】使协调, 使谐和. 10.【法】封存， 冻结， 扣押（财产, 权利等）. |→ intr. (在锯木料时锯子）发滞. |→ prnl. 1.被绊住. 2.口吃, 结巴. 3.《con》 争吵不休， 争执不休.  ~ sele la lengua a uno 口吃， 结巴."
  },
  {
    "number": 1118,
    "word": "arriero",
    "definition": "m. 赶脚的人."
  },
  {
    "number": 1119,
    "word": "proverbial",
    "definition": "adj.1. 格言的， 谚语的. 2. 众所周知的： la ~ hospitalidad de los chinos 举世闻名的中国人好客精神."
  },
  {
    "number": 1120,
    "word": "desinflarse",
    "definition": "desinflarse: 泄气"
  },
  {
    "number": 1121,
    "word": "arremeter",
    "definition": "tr. 1. «contra; a, con, para» 猛烈攻击. 2. 使 (马) 猛冲.|→ intr. 1. 敏捷地扑上去. 2. 【转,口】刺眼."
  },
  {
    "number": 1122,
    "word": "tabique",
    "definition": "m. 1.薄墙.2.隔墙,隔断.3.间隔； ~ nasal 鼻. 4.[厄瓜多尔方言]屋桅. 5.[墨西哥方言]方砖. ~ de carga 承重隔墙. ~ colgado 非承重隔墙.  ~ de panderete 立砖 搞墙.  ~ sordo 双层立砖隔墙."
  },
  {
    "number": 1123,
    "word": "capataz",
    "definition": "m. 1.工头，监工，领班. 2.（农场或庄园的）总管. ~ de cultivo 农林工程师的助手."
  },
  {
    "number": 1124,
    "word": "camanchaca",
    "definition": "f. [智利方言]，[秘鲁方言] 浓湿雾."
  },
  {
    "number": 1125,
    "word": "agarrotarse",
    "definition": "agarrotarse: 僵硬"
  },
  {
    "number": 1126,
    "word": "cordura",
    "definition": "f. 理智； 明智， 慎重."
  },
  {
    "number": 1127,
    "word": "tranco",
    "definition": "m. 1.大步， 阔步. 2.门槛. 3.【口】大针脚. al ~ [阿根廷方言], [智利方言] (马）急驰地， 飞速地. a ~ s 匆忙地. a ~ s y barrancos 跌跌撞撞地， 磕磕绊绊地； 艰难地， 断断续续地. en dos ~ s 三脚两步地， 迅速地."
  },
  {
    "number": 1128,
    "word": "trocha",
    "definition": "f. 1.小道， 窄路. 2.近道. 3.铁路线: ~ ancha  angosta  宽 窄 轨铁路. 4.[哥伦比亚方言], [委内瑞拉方言] (马的）轻步走."
  },
  {
    "number": 1129,
    "word": "angosto",
    "definition": "angosto, ta adj. 窄的, 狭窄的."
  },
  {
    "number": 1130,
    "word": "sediento",
    "definition": "sediento, ta adj. 《estar》1. 感到渴的，口干的. 2.干旱的；缺水的. 3.【转】（对某物）渴望的，酷想的."
  },
  {
    "number": 1131,
    "word": "raso",
    "definition": "raso, sa adj.1. 平的， 光的； 平坦的， 光秃的： un campo ~ 一块平坦的土地. Tiene la cara ~ a como la de un niño. 他的脸光润得象小孩的一样. 2. 无靠背的(坐椅) . 3. 无官阶的， 无头衔的：soldado ~ 列兵. 4. «estar» 晴朗的， 无云的： cielo ~ 晴空. El cielo amaneció ~ ， pero se nubló luego. 天亮时还是晴天，一会儿就阴起来了. Cuando salimos de casa estaba ~ . 我们从家里出来的时候天是晴的. 5. 装得满满的， 装到齐口的(量器， 容器)： una cucharada ~ a de azúcar 满满的一匙糖. 6. 擦地的， 贴地的： tirar una pelota ~ a 投了一个擦地球. vuelo ~ 擦地飞翔. |→ m.缎子. al ~ 在旷野， 露天."
  },
  {
    "number": 1132,
    "word": "escandalizar",
    "definition": "tr. 1.使发生风波；使喧闹，使吵闹，使哭闹；使争吵，使殴斗；使不满，使騷动. 2.带坏，使做出.丑事，使道德败坏，使干出违反常情的事情. 3.使气愤，使不能容忍. 4.使惊愕. |→ prnl. 1.做出丑事，做出不道德的事情，于出违 反常情的事情. 2.恼火，恼怒."
  },
  {
    "number": 1133,
    "word": "deudo",
    "definition": "deudo, da m.,f. 亲戚： Acudieron sus ~ s y amigos. 他的亲友都来了. |→ m. 亲戚关系： tener ~con uno 与某人有亲戚关系."
  },
  {
    "number": 1134,
    "word": "birlar",
    "definition": "tr. 1.（滚球游戏中）第二次投掷.2.【转，口】（一棍子或一枪）打倒，打死.3.【转，口】诈骗."
  },
  {
    "number": 1135,
    "word": "carroza",
    "definition": "f. 1.华丽的四轮马车. 2.彩车. 3.【海】篷. 4.[秘鲁方言]灵车，殡车."
  },
  {
    "number": 1136,
    "word": "corceles",
    "definition": "corceles: 骏马"
  },
  {
    "number": 1137,
    "word": "empenachar",
    "definition": "tr. 用羽毛装饰."
  },
  {
    "number": 1138,
    "word": "de librea",
    "definition": "de librea: 穿制服的"
  },
  {
    "number": 1139,
    "word": "mausoleo",
    "definition": "m. 陵墓： ~de Lenin 列宁墓."
  },
  {
    "number": 1140,
    "word": "nicho",
    "definition": "m.1.壁龛.2.墓室，墓穴."
  },
  {
    "number": 1141,
    "word": "reja",
    "definition": "f.1. 【农】铧. 2. «dar» 犁[量词，指土地耕的次数].3.（门、窗、篱笆等的）铁栅. entre ~s 坐监的， 身陷囹圄的."
  },
  {
    "number": 1142,
    "word": "comilonas",
    "definition": "comilonas: 大吃大喝"
  },
  {
    "number": 1143,
    "word": "faldón",
    "definition": "m.1.aum.de falda.2.（衬衣等的）下摆.3.（压在磨盘顶上用以加重分量的）旧磨盘.4.【建】（人字屋顶的)坡.5. 【建】（壁炉的）炉口.6.[阿根廷方言]洗礼袍. asirse  agarrarse  a los ~  es de uno.【转，口】仰仗某人，求助某人."
  },
  {
    "number": 1144,
    "word": "achicar",
    "definition": "tr. 1. 减缩, 缩小： Mi abrigo viejo lo han achicado para mi hermano. 我的旧大衣改小给我弟弟穿了. 2. 排出, 汲出，戽出 (矿井、船舱等处的水) . 3.【转】使怯懦, 使畏缩, 使自惭形秽. (也用作自复动词) 4. [哥伦比亚方言] 【口】杀死."
  },
  {
    "number": 1145,
    "word": "rugir",
    "definition": "intr.(野兽、风、海等)  吼叫， 咆哮. |→ impers. (秘密) 泄露， 透露."
  },
  {
    "number": 1146,
    "word": "retroceder",
    "definition": "intr.1. 后退， 倒退. 2. 背离(目标) . 3. 退缩[多用于否定句中] ： Está dispuesto a no ~ ， pase lo que pase. 他准备无论如何也不让步."
  },
  {
    "number": 1147,
    "word": "lívido",
    "definition": "lívido, da adj. 1.青紫色的：rostro ~ de frío 冻得发紫的脸. 2.【杂】苍白的."
  },
  {
    "number": 1148,
    "word": "cantimplora",
    "definition": "f. 1.虹吸管. 2.军用水壶，旅行水壶. 3.[危地马拉方言]甲状腺肿. 4.[哥伦比亚方言] 火药瓶."
  },
  {
    "number": 1149,
    "word": "ciprés",
    "definition": "m. 1.【植】意大利柏. 2.意大利柏木. 3.【转】悲哀， 阴郁，忧郁：Ese hombre es un ~  那是一个忧郁的人. 4. [墨西哥方言]主祭坛."
  },
  {
    "number": 1150,
    "word": "hoyo",
    "definition": "m. 1.坑，穴. 2.（物体表面的）小坑. 3.(脸上的）麻点. 4.坟墓. 5.掷坑游戏. ~ bordeado【植】 具缘纹孔. ~ primitivo【动】 原窝. ~ táctil【植】 触觉窝."
  },
  {
    "number": 1151,
    "word": "tosco",
    "definition": "tosco, ca adj. 1.粗糙的, 粗陋的： cerámica ~ a 粗陶器. 2. 【转】粗鲁的， 粗俗的： una persona de modales ~ s 粗鲁的人. un lenguaje ~ 用语粗俗."
  },
  {
    "number": 1152,
    "word": "estandarte",
    "definition": "m.旗；军旗；队旗"
  },
  {
    "number": 1153,
    "word": "desteñir",
    "definition": "tr. 1. 使褪色. 2. （因褪色） 染脏： La camiseta empapada en sudor destiñó la fonda del sofá. 汗湿了的运动衫染脏了沙发.  |→ intr.-prnl. 褪色： Esta tela no destiñe. 这种布不褪色."
  },
  {
    "number": 1154,
    "word": "epistolar",
    "definition": "adj. 书信的；书信体的：estilo ~书信体."
  },
  {
    "number": 1155,
    "word": "alhajar",
    "definition": "tr. 1. (用珍贵的首饰、服装) 打扮, 装扮. 2. 布置, 陈设 (房间) ."
  },
  {
    "number": 1156,
    "word": "nácar",
    "definition": "m.珍珠母，真珠质，真珠层；螺钿."
  },
  {
    "number": 1157,
    "word": "manantial",
    "definition": "adj.泉的：agua ~泉水.  |→ m.  1.泉：un ~ cristalino 清泉.2.【转】源泉，源头，根源： ~de discordias 不和的根源. El más rico ~ de nuestra fuerza está en las masas populares. 我们的力量的最深厚的根源存在于人民群众之中. 3.【医】溃疡."
  },
  {
    "number": 1158,
    "word": "drapeadas",
    "definition": "drapeadas: 带褶皱的"
  },
  {
    "number": 1159,
    "word": "tapiz",
    "definition": "m. 挂毯，壁毯，地毯."
  },
  {
    "number": 1160,
    "word": "mata",
    "definition": "f.  1.铺地植物；草；灌木.2.(攀折下来的）草茎；树枝. 3.(植物的）株，棵.4.树林：una ~ de olivos —片油橄榄树.5.pl. 丛莽：esconderse detrás de unas ~s 藏到草丛后面.6.参见 lentisco. 7.大绺头发.8.参见 matarrata. 9.【冶】铳，冰铜.10.[墨西哥方言]小山.11.[厄瓜多尔方言] 参见 matadura. ~ de la seda【植】灌木钉头果. ~ de pelo (女人的）长发，头发. ~parda 栎树林；橡树林. ~ rubia 【植】胭脂虫栎. seguir a uno hasta la ~紧逼，追逼."
  },
  {
    "number": 1161,
    "word": "rendija",
    "definition": "f.缝隙： la ~ de la puerta 门缝. La luz entraba en la cueva por una ~ de la roca. 阳光从岩缝透进洞中."
  },
  {
    "number": 1162,
    "word": "señorial",
    "definition": "adj. 1.领主的.2.釆邑的，领地的. 3.威严的，壮丽的：palacio ~ 巍峨的宫殿. casa ~ 深宅大院.|→ m. (向领主缴纳的）贡赋."
  },
  {
    "number": 1163,
    "word": "prestancia",
    "definition": "f.优秀，杰出."
  },
  {
    "number": 1164,
    "word": "perrera",
    "definition": "f.1.狗窝.2.运狗火车车箱.3.(城市中的）打狗车. 4.【口】繁重工作，低酬工作.5.【口】[用阳性冠词]不按时付款的人.6.【口】（小孩的）哭闹；发火，动气.7.[哥伦比亚方言]多跳蚤的地方.8.[阿根廷方言]参见  perrada。"
  },
  {
    "number": 1165,
    "word": "caballeriza",
    "definition": "f. 1.马厩，马棚，马圈. 2..【集】 (属于一个人的)马匹.3.【集】马夫，马倌."
  },
  {
    "number": 1166,
    "word": "repostero",
    "definition": "repostero, ra m.,f.1. 糖果点心师. 2. (宫廷或贵族家庭中的) 餐具保管员. 3. (绣有个人或团体标志的) 专用帷幔."
  },
  {
    "number": 1167,
    "word": "alféizar",
    "definition": "tr. (在墙上) 留门窗口, 开门窗口.m. 1. 【建】门窗口. 2. 【口】窗合： apoyada en el ~ de la ventana 她倚在窗台上."
  },
  {
    "number": 1168,
    "word": "treparse",
    "definition": "treparse: 爬上"
  },
  {
    "number": 1169,
    "word": "bonachón",
    "definition": "bonachón, ona adj.-s. 1.好心肠的，老实的；老好人，老实人.2.轻信的；轻信的人."
  },
  {
    "number": 1170,
    "word": "tajo",
    "definition": "m. 1.《dar，hacer》切，割，砍；切口，割口，砍口： Se dio un ~ en una pierna. 他的腿上割了一个口子. 2.干活地点，工作地点. 3.活计，工作. 4.断崖，峭壁. 5.（刀、斧的）刃锋. 6.(切、剁用的）木墩. 7.小凳，三腿凳. 8.断头台.9. (衣服的）剪裁缝制. 10.[击剑]斜劈. 11.[哥伦比亚方言], [委内瑞拉方言]畜道."
  },
  {
    "number": 1171,
    "word": "baldosas",
    "definition": "baldosas: 瓷砖"
  },
  {
    "number": 1172,
    "word": "enjugar",
    "definition": "tr. 1.弄干；擦干： ~ ropa a la lumbre 把衣服烤干. ~ la vajilla 擦干杯盘. (也用作自复动词)： ~ se las manos con una toalla 用毛巾把手擦干. ~ se el sudor  la sangre, las lágrimas  擦去汗水 . 2.【转】偿清 (债务）；补足（亏空）. |→ prnl. 消痩."
  },
  {
    "number": 1173,
    "word": "maltrecho",
    "definition": "maltrecho, cha adj. (在精神或肉体上）受损伤的，被摧残的， 被摧垮的：dejar uno ~ a su adversario 击败对手. La enfermedad lo ha dejado ~. 疾病把他拖跨了."
  },
  {
    "number": 1174,
    "word": "desabrido",
    "definition": "desabrido, da adj. 1. 味道不好的， 不好吃的. 2. 没有营养的. 3. 变化无常的， 多变的（天气）. 4. (待人接物） 生硬粗暴的， 令人不快的. 5. 反座力大的（武器）."
  },
  {
    "number": 1175,
    "word": "agachar",
    "definition": "tr. 【口】弯下 (腰，身体) , 低下 (头) .  (也用作不及物动词)|→ prnl. 1. 【口】猫腰. 弯腰；蹲下. 2. 【转，口】忍辱, 忍让, 委曲求全. 3. 【转, 口】 (一段时间内) 闭门谢客, 躲起来. 4.  [拉丁美洲方言] 退让, 屈从. 5. 准备."
  },
  {
    "number": 1176,
    "word": "píos",
    "definition": "píos: 虔诚的"
  },
  {
    "number": 1177,
    "word": "maraña",
    "definition": "f. 1.草丛，灌木丛.3.茧皮，茧皮乱丝.3.粗丝织品.4.【转】乱线团；乱发团. 5.【转】纠缠不清的事情，错综复杂的事情，难以解决的事情.6.【转】谎言，欺骗. 7.【植】胭脂虫栎. 8.[哥伦比亚方言] 少量报酬."
  },
  {
    "number": 1178,
    "word": "altanería",
    "definition": "f. 1. 高；高空： vuelo de ~ 高空飞行. 2. (一些鸟的) 高飞. 3. 用猛禽狩猎. 4. 【转】高傲, 傲慢."
  },
  {
    "number": 1179,
    "word": "melena",
    "definition": "f. 1.披着的头发.2.pl.散乱的头发.3.狮鬚 (也用作复数)4.（放在牛额头上的）轭绳垫.5.【医】黑便.andar a la ~ 揪打，扭打."
  },
  {
    "number": 1180,
    "word": "espatulado",
    "definition": "espatulado, da adj. 【植】匙形的."
  },
  {
    "number": 1181,
    "word": "adusto",
    "definition": "adusto, ta adj. 1. 灼人的, 酷热的： El Sahara es una región 撒哈拉沙漠地区气候炎热. 2. 【转】严肃地, 严厉的.  3. 抑郁的. 4. [委内瑞拉方言] 执拗的, 呆板的."
  },
  {
    "number": 1182,
    "word": "zambullir",
    "definition": "tr. (将某物）按进水中： ~ un perro en el agua 把狗按进水中. |→ prnl. 1.钻入水中, 潜入水中. 2.【转， 口】投身， 埋头（某事或某种活动）. 3.【转， 口】隐藏， 躲藏."
  },
  {
    "number": 1183,
    "word": "aflorar",
    "definition": "intr. «a» 1. (矿脉) 露头，露出地面. 2. (地下水) 喷出地面. 3. (事物) 微露, 显露: Empiezan a ~ las disensiones entre ellos. 他们之间的分岐开始暴露. En algunos sitios de la obra afloran pensamientos originales. 作品的某些地方有独到的见地.|→ tr. 筛, 箩."
  },
  {
    "number": 1184,
    "word": "anacoreta",
    "definition": "m.,f. 隐士, 隐居修行的人. "
  },
  {
    "number": 1185,
    "word": "fealdad",
    "definition": "f. 1.丑；丑陋，难看.2.不好，糟糕.3.丑恶，卑劣."
  },
  {
    "number": 1186,
    "word": "pócima",
    "definition": "f.1.汤药，汤剂.2.药水.3.【转】难喝的饮料."
  },
  {
    "number": 1187,
    "word": "bacinilla",
    "definition": "f.小便盆"
  },
  {
    "number": 1188,
    "word": "abyecto",
    "definition": "abyecto, ta adj. 1. 卑鄙下流的. 2. 鼠窃狗偷的. 3. 低贱的."
  },
  {
    "number": 1189,
    "word": "pústula",
    "definition": "f.【医】 脓泡， 脓疱， 脓疮. ~ maligna 炭疽. "
  },
  {
    "number": 1190,
    "word": "notaría",
    "definition": "f.公证人职务；公证人事务所."
  },
  {
    "number": 1191,
    "word": "fatídico",
    "definition": "fatídico, caadj.1. 预示的.2.【口】不祥的，不吉利的：un síntoma ~ 不祥的预兆."
  },
  {
    "number": 1192,
    "word": "vienés",
    "definition": "vienés, saadj.维也纳的m., f.维也纳人"
  },
  {
    "number": 1193,
    "word": "batir",
    "definition": "tr. 1.击，打，敲，拍：Las olas baten el acantilado. 海浪拍打着峭壁. 2.摧毁，击毁：La artillería batió las fortificaciones enemigas. 炮兵摧毁了敌人的工事. 3.拆掉，拆毁 (帐篷等）. 4.取消,废除. 5.战胜，打败，击溃：El enemigo fue batido en toda la línea. 敌军全线崩溃. 6.打破，刷新: ~un récord 打破一项记录. 7.哂，吹，淋，冲刷. 8.梳松 (头发）. 9.捶成薄片. 10.冲压（硬币）.11.挥动，扑打： ~ las alas 扑扇翅膀.  ~los remos挥桨. 12.搅拌，调匀：  ~los huevos para la tortilla 打鸡蛋摊饼. 13.【印](书册装订前） 捶打（折痕）. 14.【印】蹾齐，理齐（纸叠）. 15.« campo，estrada, monte, selva, soto » 【军，猎】搜查，搜索，搜寻. 16. « ban-deras »【军】致（旗）礼.intr. [阿根廷方言] 招供，坦白.  prnl. 1.战斗，格斗，决斗： ~ se como un león  像狮子一样勇猛战斗. ~ se contra el enemigo 和敌人搏斗. 2.（猛禽）扑下，冲下."
  },
  {
    "number": 1194,
    "word": "guinda",
    "definition": "f.1.欧洲酸櫻桃.2.【海】桅高.3.[古巴方言],[哥伦比亚方言]屋顶坡."
  },
  {
    "number": 1195,
    "word": "glaseada",
    "definition": "glaseada: 上釉的"
  },
  {
    "number": 1196,
    "word": "boina",
    "definition": "f. 贝雷帽[―种扁圆无沿帽]."
  },
  {
    "number": 1197,
    "word": "tieso",
    "definition": "tieso, sa adj. 1.僵硬的. 2.挺直的， 笔挺的. 3.绷紧的. 4.【转， 口】硬朗的， 健壮的： Le encuentro muy ~ a pesar de sus años. 他虽然年迈， 我看身体还很硬朗. 5.《ir》【转】洋洋自得的. 6.《estar; mantenerse; ponerse》 【转， 口】威严的. 7.《ser》【转， 口】高傲的， 不可一世的. 8.《estar, mantenerse》 【转】冷漠的. 9.【转】坚定的， 勇敢的， 顽强的. 10.【转】固执的. |→ adv. 《dar, pisar》 坚强地， 有力地. quedarse ~ 冻僵. ~ que ~　顽固不化的."
  },
  {
    "number": 1198,
    "word": "concesión",
    "definition": "f. 1.s.de conceder.2.让与物.3.concesión4.（政府给的）特许.5.租界，租借地.6.«hacer» 让步，退让.7.【修辞】让步立论法."
  },
  {
    "number": 1199,
    "word": "durazno",
    "definition": "m. 1. 【植】 桃树. 2. 桃."
  },
  {
    "number": 1200,
    "word": "morder (o tascar) el freno",
    "definition": "morder (o tascar) el freno: 咬住缰绳"
  },
  {
    "number": 1201,
    "word": "mango",
    "definition": "m. 1.【植】杧果树. 2.杧果. 3.（器物的）把手，把儿,柄. ~de cuchillo 【动】一种竹蛏[Solen siliqua ]."
  },
  {
    "number": 1202,
    "word": "reguero",
    "definition": "m.1. 细流， 条儿， 道儿， 溜儿： un ~ de sangre 一溜儿鲜血. El saco agujereado dejó un ~ de trigo. 破麻袋洒了一溜麦子.2. 参见 reguera. como un ~ de pólvora «ser, propagarse» 一溜烟地， 迅速地： La noticia corrió como un ~ de pólvora. 那个消息迅速传了开来."
  },
  {
    "number": 1203,
    "word": "mullido",
    "definition": "mullido, da adj.松软的，蓬松的.|→ m.1.(用于填塞枕、褥、 坐垫等的）松软物质，蓬松物质.2.（沙发等家具上的）松软部分.|→ f.1.(畜栏中的）垫草.2.褥垫."
  },
  {
    "number": 1204,
    "word": "descompuesto",
    "definition": "descompuesto, ta adj. 1. 分解的， 解体的. 2. 腐烂的， 变质的. 3. 毁坏的， 损坏的. 4. 腹泻的， 腹痛的. 5. 茫然的，不知所措的. 6. «poner (se) ； palabras, gritos, modales» 发怒的， 发火的. 7. 【转】 傲慢无礼的. 8. 【植】 多回复出的， 多回分裂的（叶子)."
  },
  {
    "number": 1205,
    "word": "tutela",
    "definition": "f. 1.保护， 监护； 保护人的职责, 监护人的职责. 2.保护关系， 监护关系. 3.【转】维护， 庇护.  ~ dativa 法官指定的监护； 家庭委托的监护.  ~ ejemplar 对痴呆人的监护. ~ legitima 法律规定的监护. ~ testamentaría 遗嘱规定的监护."
  },
  {
    "number": 1206,
    "word": "antipatía",
    "definition": "f. 1. «coger, tomar; abrigar, sentir, tener; causar; a, contra, hacia, por» 反感, 厌恶, 嫌弃. 2. 【转】相反, 相抵触."
  },
  {
    "number": 1207,
    "word": "erigir",
    "definition": "tr. 1.建立，竖立： ~ un monumento 立纪念碑. 2. «en»使成为，使变成，使升为： ~ un territorio en provincia 把一个地区变成省份. ~ una legación en embajada 把公使馆升为大使馆. 3.指派，推举（担任): Le erigieron jefe. 推他当头.  (也用作不及物动词)： Le erigieron en árbitro de sus diferencias. 他们让他评判他们之间的分歧. |→  prnl. «en» 自命，自封，自立： ~se en dictador 自立为独裁者."
  },
  {
    "number": 1208,
    "word": "recostarse",
    "definition": "|→ prnl.1. 倚靠， 躺靠： ~  en un sillón 躺在椅子上. ~  en la cama 靠在床上. ~  en unos almohadones倚在枕头上. 2. 躺卧小憩."
  },
  {
    "number": 1209,
    "word": "maravilla",
    "definition": "f.  1.令人惊异的事物；奇迹,奇事，奇观. 2.«causar» 惊奇；惊异.3.【植】金盏花.4.【植】裂叶牵牛.5.【植】紫茉莉.6.[厄瓜多尔方言]【植】睡莲.7.[危地马拉方言]大量，许多.la octava ~ (del mundo)(世界）第八大奇迹[用于指令人惊异的事物]. las siete ~ s del mundo 世界七大奇迹. a las (mil) ~ s 非常好地. a ~ 出奇地，惊人地. contar  ~s de uno   夸赞. de ~极好的. hacer ~ s 做出奇迹，创造迹.por ~ 偶而地，偶然地. ser algo una ~ 极好."
  },
  {
    "number": 1210,
    "word": "hediondas",
    "definition": "hediondas: 臭的"
  },
  {
    "number": 1211,
    "word": "desvelar",
    "definition": "tr. 1.使不能入睡， 使失眠. (也用作自复动词) 2.揭露，披露(秘密) |→ prnl. «por» 【转】 操心， 操劳."
  },
  {
    "number": 1212,
    "word": "testarudo",
    "definition": "testarudo, da adj. 《ser, estar》 固执的.  (也用作名词)  "
  },
  {
    "number": 1213,
    "word": "borroso",
    "definition": "borroso, sa adj.1.混浊的：aceite ~混浊的油. 2.【转】模糊不清的：escritura ~a 难以辨认的字迹. Los perfiles de la montaña están ~s a causa de la niebla.由于有雾，山的轮廓模糊不清."
  },
  {
    "number": 1214,
    "word": "amortajado",
    "definition": "amortajado: 裹尸布的"
  },
  {
    "number": 1215,
    "word": "remendar",
    "definition": "tr.1. 修补， 补缀：  ~ un zapato 修补鞋子. 2. 修正， 修改. 3. 补充， 补足."
  },
  {
    "number": 1216,
    "word": "pulcro",
    "definition": "pulcro, era adj.1. 清洁的， 干净的. 2. 【转】 优雅的(言谈， 举止)."
  },
  {
    "number": 1217,
    "word": "linajudo",
    "definition": "linajudo, da adj.【口】出身贵族的，血统高贵的."
  },
  {
    "number": 1218,
    "word": "tarambana",
    "definition": "tarambana, tarambanas m.,f.【口】1.没有头脑的人.2. 讲话多而快的人."
  },
  {
    "number": 1219,
    "word": "dilapidar",
    "definition": "tr. 浪费， 挥霍."
  },
  {
    "number": 1220,
    "word": "dote",
    "definition": "amb. 1. 嫁妆， 妆奁. 2. （僧尼的） 出家费， 剃度金. |→ m. [牌戏]分给每人的筹码. |→f.pl.  «poseer, tener; cultivar; excelente, extraordinario. magnífico» 天分， 天资， 条件； 才能."
  },
  {
    "number": 1221,
    "word": "forrado",
    "definition": "m. [阿根廷方言]木偶."
  },
  {
    "number": 1222,
    "word": "padecer",
    "definition": "tr.-intr.1.忍受，受苦，苦恼:Padece frecuentes dolores de muelas. 他经常牙痛.No quiero seguir padeciendo este clima. 我不愿意再继续忍受这种气侯了. Le he padecido como jefe. 我在他的手下受够了气. Ha padecido mucho con la otitis. 耳炎把他折磨得够呛. Padece porque no puede ayudarnos. 他为无法帮助我们苦恼. El pueblo chino padeció mucho durante las guerras acaecidas en la primera mitad de este siglo. 中国人民在本世纪前五十年中饱受战争的苦难. Las plantas están padeciendo (de) sed. 庄稼正旱得厉害.2.患有，害着（某种疾病）：Padece una colitis crónica. 他患有慢性结肠炎. Padece del estómago. 他有胃病.La vid padece muchas plagas. 葡萄园受到很重的虫害.3.经受，遭受： ~ un engaño 上当.  ~ una equivocación 犯错误. ~ un desengaño 受过一次教训. Padeció la amputación de una pierna. 他舞除了一条腿. La ciudad ha padecido dos bombardeos. 这座城市两次受到轰炸.4.损坏: Sentándote así haces ~ d espalda del sillón. 你这样做要把椅背弄坏的. Se embala bien la fruta para que no padezca en el viaje. 水果包装得很好以免在路上损坏."
  },
  {
    "number": 1223,
    "word": "brasero",
    "definition": "m. 1.火盆. 2.[墨西哥方言] 炉灶. 3.[哥伦比亚方言]篝火. 4.【古】火刑场."
  },
  {
    "number": 1224,
    "word": "aspereza",
    "definition": "f. 1. s.de áspero. 2. 崎岖, 坎坷. (也用作复数)"
  },
  {
    "number": 1225,
    "word": "canasto",
    "definition": "m. 大筐，带耳筐. ¡Canastos!  1. [表示惊奇]好家伙！ 2. [表示气愤、不满]他妈的！"
  },
  {
    "number": 1226,
    "word": "patán",
    "definition": "m.【口，贬】1.乡巴佬.2.愚昧无知的人，粗鄙的人.  (也用作形容词)"
  },
  {
    "number": 1227,
    "word": "alfalfa",
    "definition": "f.【植】苜蓿."
  },
  {
    "number": 1228,
    "word": "yermo",
    "definition": "yermo, ma adj.-m. 1.荒芜的； 荒野， 荒地， 不毛之地. 2.荒无人烟的； 荒无人烟的地方."
  },
  {
    "number": 1229,
    "word": "agreste",
    "definition": "adj. 1. 乡村的, 田野的. 2. 坎坷不平的, 杂草丛生的 (地方, 道路) . 3. 野生的 (动、植物) . 4. 【转】粗俗的, 粗鲁的."
  },
  {
    "number": 1230,
    "word": "encapotarse",
    "definition": "prnl.乌云密布；皱眉；耷拉着耳朵；穿上斗篷"
  },
  {
    "number": 1231,
    "word": "recortar",
    "definition": "tr.1. 修剪， 削剪： ~ el pelo 修剪头发.  ~ las ramas 修剪树枝. 2. 剪刻(图形) . 3. 【美】 描绘(图象) . 4. 【转】 缩减，删削， 省略： ~ las raciones 减少口粮. Me contó el incidente, pero recortó varios detalles. 他对我讲述了那个事件， 不过， 略去了一些细节. |→ prnl.显现， 呈现."
  },
  {
    "number": 1232,
    "word": "cabalgar",
    "definition": "intr.« en, sobre » 1.上马.  (也用作及物动词) 2.骑马. 3.骑坐：Los niños cabalgan sobre la tapia para ver mejor el espectáculo. 为了看清节目，孩子们骑到了墙上.Las gafas cabalgan sobre su nariz. —副眼镜架在他鼻梁上.  No podemos hacer las cosas cabalgando sobre una ilusión. 我们不能以幻想为依据来办事情. |→ tr. (雄畜与雌畜）交配， 爬跨. |→ m.【古】鞍具."
  },
  {
    "number": 1233,
    "word": "barrizal",
    "definition": "m. 泥泞的地方,泥塘,泥潭.Había lloviendo y el campo de fútbol era un ~. 下过大雨，足球场成了泥泞地. "
  },
  {
    "number": 1234,
    "word": "lodazal",
    "definition": "m.泥坑，泥潭"
  },
  {
    "number": 1235,
    "word": "intransitable",
    "definition": "adj. 无法通行的，难以通行的（道路、地方等）."
  },
  {
    "number": 1236,
    "word": "villorrio",
    "definition": "m. 【赔】小村子."
  },
  {
    "number": 1237,
    "word": "decrepitud",
    "definition": "f. 衰老；没落."
  },
  {
    "number": 1238,
    "word": "adobe",
    "definition": "m. 1. 坯, 砖坯. 2. 脚镣. 3. [阿根廷方言]大脚."
  },
  {
    "number": 1239,
    "word": "apisonar",
    "definition": "tr. 弄实, 压实, 夯实."
  },
  {
    "number": 1240,
    "word": "mechón",
    "definition": "m. 1.粗灯芯.2.绺：un ~ de lana —绺羊毛. Le caía un ~ de pelo(s) por la frente. —络头发垂在他的额头."
  },
  {
    "number": 1241,
    "word": "encía",
    "definition": "f. 【解，动】 齿龈，牙床. "
  },
  {
    "number": 1242,
    "word": "destartalado",
    "definition": "destartalado, da adj. «habitación， casa, jardín»  1. 乱糟糟的，乱七八糟的. 2. 过大的； 不成比例的，不协调的."
  },
  {
    "number": 1243,
    "word": "pescante",
    "definition": "m.1.（钉在墙上等处的）木橛，铁臂.2.车夫坐位.3.(汽车的）驾驶室.4.【剧】升降机.5.【海】吊艇杆."
  },
  {
    "number": 1244,
    "word": "maleza",
    "definition": "f.1.（田里的)杂草. 2.草木丛. 3.[智利方言],[阿根廷方言] 脓."
  },
  {
    "number": 1245,
    "word": "bache",
    "definition": "m. 1. (路上的) 坑洼, 水洼. 2. 【空】空气陷坑, 气潭. 3. (剪毛前让羊出汗的)羊圈. 4. 【转, 口】 坎坷, 艰难: Los ~s no pueden detener a un revolucionario. 艰难险阻挡不住革命者."
  },
  {
    "number": 1246,
    "word": "matorral",
    "definition": "m. 1.荆棘丛生的地方.2.草木丛."
  },
  {
    "number": 1247,
    "word": "potrero",
    "definition": "potrero 1  potrero/raadj.  小马的m.  看管小马的人, 牧马人, 牧马场, 牧场potrero 2  potrero/ram.f.  疝病医生"
  },
  {
    "number": 1248,
    "word": "escombro",
    "definition": "m. 1.瓦砾. 2.（厂矿的）废料. 3.次葡萄干. 4.【动】一种鲭鱼[Scomber eolias]. reducir a ~s 使变成废墟."
  },
  {
    "number": 1249,
    "word": "hollín",
    "definition": "m.1.烟油，烟垢.2.【转】吵闹，打架."
  },
  {
    "number": 1250,
    "word": "rizo",
    "definition": "rizo, za adj.1. 鬈曲的. 2.起皱的. 3. 有涟漪的， 有波汶的. 4. 鬈毛的(绒织物) . U.Lc.m. |→ m.1. 发鬈， 鬈发. 2. 【海】 缩帆带， 收帆带. hacer el ~ 【空】 (飞机) 在空中翻斤斗. tomar ~ s 【海】 收缩帆篷. rizar el ~ 1.  参见 hacer el ~ . 2. 【转】 闯过难关. 3. 【转】 耍花腔； 毫无必要地使问题复杂化."
  },
  {
    "number": 1251,
    "word": "harapo",
    "definition": "m.1.硖布，碎布: ir vestido de ~ s 衣衫褴褛.2.(蒸馏最后得到的）淡酒."
  },
  {
    "number": 1252,
    "word": "choza",
    "definition": "f. 1. 茅屋， 草舍. 2. 简陋房屋."
  },
  {
    "number": 1253,
    "word": "desvencijado",
    "definition": "desvencijado: 破旧的"
  },
  {
    "number": 1254,
    "word": "cochambrosa",
    "definition": "cochambrosa: 肮脏的"
  },
  {
    "number": 1255,
    "word": "mohoso",
    "definition": "mohoso, sa adj.1.发霉的.2.生锈的."
  },
  {
    "number": 1256,
    "word": "podrido",
    "definition": "podrido, da adj.1.腐烂的：fruta ~ a 腐烂水果.2.【转】腐败的，腐化的，堕落的：sociedad ~ a 腐败的社会.3.【转】多的： ~ de dinero 有钱的."
  },
  {
    "number": 1257,
    "word": "anidar",
    "definition": "intr.-prnl. 1. 营巢, 筑巢: Las águilas anidan en las rocas más escarpadas. 鹰在峭壁上筑巢. 2. 【转】居住. 3. 存在, 有着： Actualmente anida en el mundo el peligro de la guerra. 在现今的世界上存在着战争的危险. Desde niña en su alma anida un fuerte odio hacia los explotadores. 她从小心中就对剥削者怀着强烈仇恨.|→ tr. 【转】抱有, 怀着 (情感等) ."
  },
  {
    "number": 1258,
    "word": "artesonado",
    "definition": "artesonado, da adj. 装有嵌板的, 装有镶板的. |→ m. 【建】 嵌板式顶棚, 镶板式天花板."
  },
  {
    "number": 1259,
    "word": "mugre",
    "definition": "f. (羊毛、衣物等上面的）油污，污垢：pantalones llenos de ~ 满是油垢的裤子."
  },
  {
    "number": 1260,
    "word": "anaquel",
    "definition": "m. 搁板."
  },
  {
    "number": 1261,
    "word": "nido",
    "definition": "m.1.窝，巢；洞，穴：un　～ de avispas —个马蜂窝.un～ de golondrinas 燕子窝.un～ de ratones 老鼠洞.2.【口】家，住所.3.【转】（坏人的）窟，巢穴.4.【转】（东西的）隐藏处，秘藏处.5.【转】（不快、纠纷等的）温床，起源. ～ de urraca【军】（围城的）接敌工事. caerse  uno de un ～【转】天真，轻信. hacer uno su ～【转】营巢，扎根."
  },
  {
    "number": 1262,
    "word": "plumada",
    "definition": "plumada  f.  画笔, 笔道"
  },
  {
    "number": 1263,
    "word": "zarrapastroso",
    "definition": "zarrapastroso, sa adj. 1.邋遢的， 衣服破烂的， 不修边幅的.  (也用作名词)  2.肮脏的， 未加修整的."
  },
  {
    "number": 1264,
    "word": "mueca",
    "definition": "f.表情；鬼脸，怪相"
  },
  {
    "number": 1265,
    "word": "insolente",
    "definition": "adj.骄慢的，蛮横的，无礼的m., f.骄慢的人，蛮横的人，无礼的人"
  },
  {
    "number": 1266,
    "word": "sarnoso",
    "definition": "sarnoso, sa adj. 1.《estar, ser》 长疥疮的.  (也用作名词)  2.【转，口】体弱多病的."
  },
  {
    "number": 1267,
    "word": "olisquear",
    "definition": "tr.【口】1.闻，嗅.2.打听，打探."
  },
  {
    "number": 1268,
    "word": "fundo",
    "definition": "m. 田产，庄园"
  },
  {
    "number": 1269,
    "word": "agrario",
    "definition": "agrario, ria adj. 1. 土地的, 耕地的: reforma ~a 土地改革. Revolución Agraria 土地革命. Disposiciones Generales de la Ley Agraria 土地法大纲. 2. 维护农民利益的, 代表农民利益的."
  },
  {
    "number": 1270,
    "word": "arar",
    "definition": "tr. 1. 耕, 犁. 2. 开沟. 3. 使皱, 使起皱纹. 4. 划破 (水面) ,破(浪) .|→ m.【植】 1. 香脂柏. 2. 欧洲刺柏."
  },
  {
    "number": 1271,
    "word": "bracero",
    "definition": "bracero, ra adj. 1.投掷的（武器): chuzo ~ 标枪. 2.臂力大的.  (也用作名词)  |→ m. 1.搀扶别人的人. 2.短工，雇工. de ~ 挽着手臂地."
  },
  {
    "number": 1272,
    "word": "cuadrilla",
    "definition": "f. 1. （工人等的）队， 组， 班. 2. （强盗、 匪徒、 骗子等的） 帮， 伙， 群. 3. 四对舞[一种社交舞]. en ~【贬】 成群的， 成帮的， 结伙的."
  },
  {
    "number": 1273,
    "word": "plomería",
    "definition": "f.1.（屋顶用的）铅皮.2.铅匠作场.3.铅匠业."
  },
  {
    "number": 1274,
    "word": "indemne",
    "definition": "adj. 安然无恙的，未受损伤的：salir ~ de un ac- cidente 从事故中安然脱险."
  },
  {
    "number": 1275,
    "word": "polilla",
    "definition": "f.1.【动】毛毡夜蛾.2.【动】毛毡夜蛾幼虫.3.【动】翠鸟.4.【转】（某物品的）消损物，侵蚀物.comerse uno de ~ (由于忧虑、折磨等）逐渐憔悴.no tener uno ~ en la lengua 说话直率."
  },
  {
    "number": 1276,
    "word": "forjado",
    "definition": "forjado, da adj.锻造的：pieza ~ a 锻件.|→ m.【建】构架; 框架."
  },
  {
    "number": 1277,
    "word": "poltrona",
    "definition": "poltrona  f.  安乐椅"
  },
  {
    "number": 1278,
    "word": "vamos al grano",
    "definition": "vamos al grano: 言归正传"
  },
  {
    "number": 1279,
    "word": "chistar",
    "definition": "intr. 讲话， 吭声：Ni chistó mientras le curaban. 在给他治疗的过程中， 他一声也没有吭. sin ~ni mistar 一声不响， 不做声."
  },
  {
    "number": 1280,
    "word": "revoltoso",
    "definition": "revoltoso, sa adj.1. 制造混乱的， 煽动暴乱的.  (也用作名词) 2. 淘气的， 顽皮的， 不安生的. 3. 复杂的， 混乱的."
  },
  {
    "number": 1281,
    "word": "chacra",
    "definition": "f. [拉丁美洲方言] 小庄园."
  },
  {
    "number": 1282,
    "word": "riego",
    "definition": "m.1. 灌溉. 2. 灌溉用水.  ~ por aspersión 喷灌.  ~ por goteo 滴灌. ~ sanguíneo 血液循环."
  },
  {
    "number": 1283,
    "word": "andurriales",
    "definition": "andurriales  m.pl.  偏僻的地方"
  },
  {
    "number": 1284,
    "word": "parturienta",
    "definition": "parturienta, parturiente adj.-f.正在分娩的，刚分娩过的;产妇."
  },
  {
    "number": 1285,
    "word": "capar",
    "definition": "tr. 1.【口】阉割，劁，骟 . 2.【转，口】削减，削弱. 3. Col 逃学. 4.BoL 开始食用，动手切（面包、火腿等）. 5.[哥伦比亚方言], [古巴方言], [秘鲁方言] 修剪（枝、芽等）."
  },
  {
    "number": 1286,
    "word": "rayuela",
    "definition": "f.1. dim.de raya. 2. 掷钱， 掷瓦[小孩游戏， 在地上画一条线，然后站在远处朝那条线投掷钱币或瓦片，离线近者为赢]."
  },
  {
    "number": 1287,
    "word": "perdiguero",
    "definition": "perdiguero, ra adj.猎石鸡的；卖石鸡的."
  },
  {
    "number": 1288,
    "word": "acecho",
    "definition": "m. 1. s.de acechar. 2. 埋伏处. al  ~ 窥伺：Hacía ya varias horas que estábamos en ~ esperando la llegada de los enemigos. 我们埋伏了好几个小时等侯敌人的到来."
  },
  {
    "number": 1289,
    "word": "recular",
    "definition": "intr.1. 后退， 倒退： hacer ~ un coche 倒车. 2. 退缩， 翻悔."
  },
  {
    "number": 1290,
    "word": "presa",
    "definition": "f.1.抓，拿；捉，逮.2.«hacer»获取物；捕获物，猎获物；掠获物，劫获物：hacer una ~ en el mar 在海上有所获.El perro no soltaba su ~ .狗不放开嘴里叼的东西. 3.（肉等的）块；（熟鸡等的）翅膀，大腿.4.(动物购）尖 爪；利齿.(多用作复数)5.堤，坝，堰.6.（引水的）渠，沟.de ~ 凶猛的（禽鸟）.hacer ~ 1.抓住：El fuego hizo ~ en sus ropas.火把他的衣服烧着了 . 2.趁机（损人利己）."
  },
  {
    "number": 1291,
    "word": "cacería",
    "definition": "f. 1.狩猎；游猎：ir de ~去狩猎. 2.猎物. 3.【美】游猎图."
  },
  {
    "number": 1292,
    "word": "morral",
    "definition": "m.1.(喂牲口用的）草料袋.2.(牧人、猎人、游人等用的）背袋，背囊.3.【转】粗笨的人.4.【海】斜桅帆."
  },
  {
    "number": 1293,
    "word": "establo",
    "definition": "m. 1.牲畜圏，马厩，牛圈. 2.[古巴方言]车库."
  },
  {
    "number": 1294,
    "word": "magro",
    "definition": "magro, gra adj. 1.干瘦的，瘦削的（人）. 2.瘦的，精瘦的(肉）. 3.贫瘠的（土地）. |→ m.【口】（猪的）里脊，脊部 瘦肉."
  },
  {
    "number": 1295,
    "word": "aria",
    "definition": "f. 【乐】咏叹调；唱段."
  },
  {
    "number": 1296,
    "word": "petimetre",
    "definition": "petimetre, tra m.,f.讲穿戴的人，爱打扮的人，赶时髦的人."
  },
  {
    "number": 1297,
    "word": "arraigado",
    "definition": "arraigado, da adj. «en» 【转】 1. 根深蒂固的 (习惯、观念等) . 2. 有来历的, 悠久的. 3. 有不动产的. 4. 有根基的, 有名望的.|→ m. 1. 产业主. 2. 【海】缆索拴结处."
  },
  {
    "number": 1298,
    "word": "sofocar",
    "definition": "tr. 1.使窒闷，使呼吸困难，使透不过气来. (也用作自复动词) ： Me sofoco con este abrigo. 这件大衣快把我闷死了. El anciano se sofoca subiendo las escaleras. 那个老人爬楼梯累得喘不过气来. 2.【转】使脸红；使羞惭. (也用作自复动词) Si　le alabáis tanto, se va a sofocar你们那么夸他，他会不好意思的.3.【口】使激动；使发火. (也用作自复动词) ： No vale la pena que te sofoques. 他不值得发火. 4.【口】烦扰，搅扰.5.【转】窒息扑灭，扼制： ~ el incendio 扑灭火灾. ~ una epidemia 消灭时疫. ~ una rebelión 镇压暴乱. |→"
  },
  {
    "number": 1299,
    "word": "fornido",
    "definition": "fornido, da adj.健壮的，魁梧的."
  },
  {
    "number": 1300,
    "word": "frazada",
    "definition": "f.毛毯,绒毯."
  },
  {
    "number": 1301,
    "word": "molerse",
    "definition": "tr.1.研，捣，磨，轧；碾磨，压榨.2.【转】使疲惫不堪，使精疲力尽：Me ha molido esta caminata.这一趟走得我累死了.3.【转】痛打，折磨，虐待，使遍体鳞伤：~a uno a palos 用棍子痛打某人.4.«con»【转】烦扰.|→ prnl.疲倦."
  },
  {
    "number": 1302,
    "word": "descomunal",
    "definition": "adj. 异乎寻常的； 非常大的， 巨大的."
  },
  {
    "number": 1303,
    "word": "deriva",
    "definition": "f. 【海】 （由风力而造成的） 偏航， 航差. a la ~  1. 【海】 漂流,  漂航. 2. 【转】 «ir， marchar» 随波逐流."
  },
  {
    "number": 1304,
    "word": "guarisapo",
    "definition": "m. [智利方言]【动】蝌蚪."
  },
  {
    "number": 1305,
    "word": "fustigado",
    "definition": "fustigado, ra adj.1.鞭打的. (也用作名词) 2.斥责的，抨击的."
  },
  {
    "number": 1306,
    "word": "caña",
    "definition": "f. 1.（禾本科植物的）茎，杆：la ~del trigo 麦稭.una ~ de bambú 竹杆. 2.【植】芦竹：Las ~s sirven para tejer cestos. 芦竹用于编筐. 3.【植】省藤，白藤，萝藤. 4. 【植】竹：un bastón de ~竹杖. 5.【植】甘蔗. 6.（四肢的） 长骨. 7.脚脖子，脚腕. 8.髓，骨髓. 9.靴筒. 10.袜筒. 11.高筒杯，啤酒杯. 12.筒状物，管状物，杆状物. 13.(刀、剑 刃上的）豁口，缺口. 14.(枪托上的）枪筒槽.15.炮前身. 16.【海】锚柄.17.【建】柱身，柱体. 18.【矿】坑道，巷道. 19.卡尼亚[酒量单位]. 20 卡尼亚[地积单位，相当于六平方科多（codo)].  21 [西班牙安达卢西亚方言] 卡尼亚[―种民歌].22.[哥伦比亚方言] 卡尼亚舞. 23 [哥伦比亚方言]树干. 24 « echar » [哥伦比亚方言]【口】吓唬，威吓. 25 [哥伦比亚方言], [厄瓜多尔方言], [委内瑞拉方言] 假消息，谣传. 26.[拉丁美洲方言] 蔗酒；烧酒，白酒. 27.« correr » 骑马厮打[一种节日游戏].  ~agria [中美洲方言] 【植】闭鞘薑. ~amarga 毛蕊蔗.  ~blanca 白皮甘蔗.  ~ borde  普氏芦竹.  ~brava [中美洲方言]，[秘鲁方言], [委内瑞拉方言]  1. 箣竹. 2. 芦苇.  ~común  芦竹.  ~criolla 参见 ~de azúcar. ~ danta [哥斯达黎加方言]  一种棕榈.  ~de azúcar 甘蔗. ~de Batavia 紫皮甘蔗.  ~de Bengala 参见 ~ de Indias.  ~de casa 参见 ~ brava.  ~de Castilla [墨西哥方言] 参见 ~de azúcar.  ~de cuentas 美人蕉.  ~de Indias 省藤，萝藤. ~de la India 参见 ~de cuentas.  ~del ancla【海】锚柄.  ~ dé la víbora [哥伦比亚方言]山棕.  ~del pulmón【解】气管.  ~del timón【海】蛇柄.  ~ de pescar 钓鱼竿.  ~de vaca 牛腿骨；牛腿骨骨髓.  ~ dulce 参见 ~ de azúcar. ~ espina — 种刺竹.  ~hueca [哥斯达黎加方言].，[墨西哥方言] 参见 ~común.  ~melar 参见 ~de azúcar。 media ~« de » 半圆材. jugar a uno a las ~s 用尖竹刺扎. 谚语： Las ~ s se vuelven lanzas. 弄假成真."
  },
  {
    "number": 1307,
    "word": "apremiante",
    "definition": "adj. 急迫的, 紧急的： una necesidad ~ 迫切需要. una carta ~ —封急信."
  },
  {
    "number": 1308,
    "word": "condenación eterna",
    "definition": "condenación eterna: 永恒的诅咒"
  },
  {
    "number": 1309,
    "word": "concupiscencia",
    "definition": "f.1.色欲，淫邪.2.（对物质享受的）贪欲."
  },
  {
    "number": 1310,
    "word": "balde",
    "definition": "m. 1.【海】水桶. 2.[阿根廷方言]井.caer como un ~de agua fría 犹如一瓢冷水当头浇下来."
  },
  {
    "number": 1311,
    "word": "cántaro",
    "definition": "m. 1.（陶或铁等制的）坛，罐. 2.坎塔罗[酒量单位，其当量因地区而异]. 3.阄盘，签筒. 4.[墨西哥方言]【乐】巴松管. a ~s « llover，caer, echar » 倾盆，如注，瓢泼. entrar uno en ~ 【转】有可能得到某种职位. estar uno en ~【转】即将得到某种职位. 谚语： Tanto va el ~ a la fuente que alguna vez  se quiebra . 瓦罐不离井台破；将军难免阵中亡."
  },
  {
    "number": 1312,
    "word": "refregar",
    "definition": "tr.1. 擦， 蹭， 揉搓. (也用作自复动词): Se refregó la manga contra la barandilla recién pintada. 他的袖子蹭到刚油漆过的栏杆上了. 2. 【转，口】 当面数落(令人不快的事情) ."
  },
  {
    "number": 1313,
    "word": "facciones",
    "definition": "facciones: 面部特征"
  },
  {
    "number": 1314,
    "word": "carnosa",
    "definition": "carnosa: 多肉的"
  },
  {
    "number": 1315,
    "word": "marchitar",
    "definition": "tr. 1.使凋谢，使枯萎. (也用作自复动词)2.【转】使憔悴. (也用作自复动词)"
  },
  {
    "number": 1316,
    "word": "haz",
    "definition": "m.1.捆，扎，束，把.2.光束.3.【军】队伍.4.pl.参见 fasces. 5.[墨西哥方言]秸杆堆.|→ f.1.脸，面孔.2.(布匹等的） 正面. ~ de la tierra 地球表面.a dos haces 别有用心 地.a sobre ~表面地,肤浅地. ser uno de dos haces 口 是心非，两面派."
  },
  {
    "number": 1317,
    "word": "al trote",
    "definition": "al trote: 小跑"
  },
  {
    "number": 1318,
    "word": "fardo",
    "definition": "m.大包，大捆；包袱"
  },
  {
    "number": 1319,
    "word": "vera",
    "definition": "f. 1.(河流等的）岸， 边， 侧. 2.【植】树形霸王. a la ~ de 靠近， 挨近： sentarse a mi ~  la ~ del camino  在我身边(路边)坐下. Vive a la ~ de mi casa. 他住在我家附近."
  },
  {
    "number": 1320,
    "word": "resoplido",
    "definition": "resoplido, resoplo m.1. 吁气， 大声喘肩： Dio un ~ y se marchó. 他吁了一口气就走了. Llegó al final de la cuesta dando ~ 他气喘吁吁地爬到了坡顶. El coche iba dando ~ 汽车发出吭哧吭哧的声音. 2. 【转】 没好气的回答， 粗声大气回答."
  },
  {
    "number": 1321,
    "word": "espolear",
    "definition": "tr.1.用马刺刺.2.【转】鼓动，激励. |→ intr.1.参见 apresurarse. 2.[波多黎各方言] (鸡)互斗."
  },
  {
    "number": 1322,
    "word": "galope",
    "definition": "m. (马的)奔驰，飞奔. ~ tendido (马的）飞奔,狂奔. a  al, de  ~«correr, ir, marchar» 1 .疾驰地, 飞奔地. 2 .急速地，飞快地."
  },
  {
    "number": 1323,
    "word": "acometer",
    "definition": "tr. 1. 袭击,攻击： ~ al enemigo 攻去敌人. ~ una posición 向一阵地发起攻击.  (也用作不及物动词)： ~ contra  uno 袭击某人. 2. 从事,尝试： ~ un trabajo con valor 大胆地着手进行某项工作. 3. 争取,试图制服 (某人) . 4. (病、睏倦、欲望等) 突然发作：Me acometieron ganas de reír. 我突然想笑. 5. 【泥,矿】 (管道,坑道) 通入 (另一管 道、坑道) .|→ intr. «a» 下决心,着手: ~ a trabajar 动手干起来."
  },
  {
    "number": 1324,
    "word": "fiereza",
    "definition": "f. 1.（野兽的）凶猛.2.凶恶，残忍，狠毒.3.【转】丑陋，丑恶."
  },
  {
    "number": 1325,
    "word": "incrustar",
    "definition": "tr. 1.镶，嵌： ~ nácar en la madera 在木料上镶螺钿.  (也用作自复动词) 2.使（物体外表)结硬壳. 3.【转】铭刻，牢记.  (也用作自复动词) ： ~ se una idea en la memoria  cabeza  铭记一个思想. |→ prnl. 1.粘附. 2.【转】闯入."
  },
  {
    "number": 1326,
    "word": "despavorido",
    "definition": "despavorido, da adj. 吓坏了的， 惊恐万状的."
  },
  {
    "number": 1327,
    "word": "anca",
    "definition": "f. 1. 臀；股:  ~ de rana 田鸡腿. 2. 【口】屁股. 3. [秘鲁方言] 烤玉米. a (las) ~s 1. 坐在骑手的背后. 2. 【转, 口】附在后面. en ~s [阿根廷方言] 以后，后来. estar uno a las ~s de otro 由某人养活. llevar uno a las ~s a otro 【转,口】 养活, 负担. no sufrir ~s 1. (马) 不让人骑在臀部. 2. 【转, 口】不查侮辱，不让取笑. traer uno a las ~s a otro 参见 llevar a las ~s."
  },
  {
    "number": 1328,
    "word": "emprender",
    "definition": "tr. 开始； 着手进行： ~la subida 开始爬山.  ~ el camino 上路，动身. ~ un trabajo 着手进行一项工作.  ~la marcha 出发.  ~（la) a... con uno 以...方式攻击某人， 以…方式和某人干： ~la a bofetadas  con uno 打某人的耳光.  ~la con uno 和某人吵闹. ~la para un lugar 动身前往， 决心到达."
  },
  {
    "number": 1329,
    "word": "canturrear",
    "definition": "intr.【口】哼，低声唱."
  },
  {
    "number": 1330,
    "word": "trajín",
    "definition": "m. 1.s.de trajinar. 2.【口】忙碌, 操劳. 3.pl. 《traer(se),  andar en  con 》 【口】鬼鬼祟祟的事情， 不正大光明的事情."
  },
  {
    "number": 1331,
    "word": "recóndito",
    "definition": "recóndito，ta adj.深处的； 隐秘的： Ese animal habita en lo más ~ del bosque. 那种动物生活在森林的最深处. Lo guardo en lo más ~ de mi corazón. 我将此事埋在心底."
  },
  {
    "number": 1332,
    "word": "cachorro",
    "definition": "cachorro, rra m.,f. 1.（哺乳动物的）仔，崽，幼兽. 2.小狗.3.畜牲[对人的蔑称].|→ m. 参见 cachorrillo. |→ adj. 1. Cub, 居心不良的. 2.[委内瑞拉方言] 粗鄙的，没有教养的."
  },
  {
    "number": 1333,
    "word": "cojo",
    "definition": "cojo，ja adj.1.«andar, ir, estar, ser; de» 瘸的，跛的： ~ de la pierna derecha 右腿瘸的.la pierna ~a 瘸腿.2.【转】不平稳的，摇晃的（桌、椅等).3.【转】站不住脚的， 不完全的（道理等）.|→ m.,f.瘸子，跛子. no ser uno ~ ni manco【转，口】聪明干练."
  },
  {
    "number": 1334,
    "word": "embestir",
    "definition": "tr. 1. 攻击；冲击： ~al enemigo 攻击敌人. Los guerrilleros embistieron líneas enemigas. 游击队冲击敌人的防线.  (也用作不及物动词)： ~con  contra una fiera 攻击野兽. El oleaje embiste contra las rocas. 海浪冲击着岩石. 2. « para» 【转， 口】 找（某人索借金钱财物或干其他事情) . |→ intr. 【转， 口】刺眼， 扎眼."
  },
  {
    "number": 1335,
    "word": "babear",
    "definition": "intr. 1. 淌口水, 流涎水. 2. 【转, 口】迷恋 (一个女人) ."
  },
  {
    "number": 1336,
    "word": "soga",
    "definition": "f.1.绳子，麻绳，粗绳.2.索加[1.古长度单位，约合七米.2.西班牙古代的地积单位，各地大小不等]. 3.【建】 (露在墙外的）砖面，石面. 4.【建】顺砌砖行. |→m.f. 【转，口】忍辱负重的人，委曲求全的人. a ~ 【建】顺砖 (砌）. con la ~ a la garganta  al cuello  1.冒着巨大危险的. 2.处于困境的.dar ~ a uno 1.放任，纵容.2.嘲弄，挖苦.de ~ 顺砖砌的（墙）. echar la ~ tras el caldero 偷鸡不着失米.hablar de  mentar, nombrar  la ~ en casa del ahorcado 当着瘤子说短话. la ~ tras el caldero 形影不离. 谚语 Siempre se quiebra  rompe  la ~ por lo más delgado.绳子总是在最细的地方断."
  },
  {
    "number": 1337,
    "word": "desamparo",
    "definition": "m. 无依无靠. "
  },
  {
    "number": 1338,
    "word": "galpón",
    "definition": "m.1.[拉丁美洲方言]棚子，棚屋. 2.[拉丁美洲方言](庄园里的）奴隶住房. 3.[哥伦比亚方言]坯场."
  },
  {
    "number": 1339,
    "word": "estiércol",
    "definition": "m. 1.粪便. 2.粪肥. ~ del diablo 【植】 阿魏. ~ líquido 粪水."
  },
  {
    "number": 1340,
    "word": "radio a galena",
    "definition": "radio a galena: 电晶体收音机"
  },
  {
    "number": 1341,
    "word": "píldora",
    "definition": "f.药丸；口服避孕药- dorar la ～a婉言相告；阿谀奉承- tragarse la ～听信谎言"
  },
  {
    "number": 1342,
    "word": "homeopática",
    "definition": "homeopática: 顺势疗法"
  },
  {
    "number": 1343,
    "word": "cargamento",
    "definition": "m. (船上装载的）货物."
  },
  {
    "number": 1344,
    "word": "desentrañar",
    "definition": "tr. 1. 掏出内脏. 2. 【转】 领会，理解: No consigo ~el sentido de estas palabras. 我琢磨不透这些话是什么意思. |→ prnl. 【转】 倾囊相赠."
  },
  {
    "number": 1345,
    "word": "pulpería",
    "definition": "f. [拉丁美洲方言]酒店； 杂货店. "
  },
  {
    "number": 1346,
    "word": "escarceo",
    "definition": "m. 1.（海面的)微波,涟漪. 2.（马的）腾跃. U.m.enpl. 3.【转】肤浅的见解. 4.[阿根廷方言] (马的）摇头，摆头."
  },
  {
    "number": 1347,
    "word": "alambre",
    "definition": "m. 1. 金属丝；电缆. 2. 【集】 (马帮或牧群的) 铃铛. ~ aislado 绝缘线. ~ conejo 【猎】兔套. ~ de púas (铁丝网用的)带刺铁丝, 铁蒺藜. ~ eléctrico 电线. ~ fusible 保险丝."
  },
  {
    "number": 1348,
    "word": "barullo",
    "definition": "m. « armarse，hacerse »【口】混乱，紊乱;喧闹，嘈杂. "
  },
  {
    "number": 1349,
    "word": "ultramar",
    "definition": "m. 1.海外. 2. 参见 ultramaro."
  },
  {
    "number": 1350,
    "word": "tropa",
    "definition": "f. 1.军队. 2.【口】人群[多含贬义]. 3.【军】集合号. 4.Amer.M. 牲畜群. 5.运货的车队. |→ m. [古巴方言], Mex. 【转， 口】糊涂人. |→ f.pl. 军，军队. ~ de asalto 突击部队. ~ de línea 作战部队. ~ de marina 海军陆战队. ~ ligera 1.散兵. 2.【转】微不足道的人. ~ s motoriza das 摩托化部队. ~ s terrestres 陆军."
  },
  {
    "number": 1351,
    "word": "alfiler",
    "definition": "m. 1. 大头针；大头钉. 2. 别针, 装饰别针. 3. 簪；卡子. 4. (晾硒东西用的) 夹子. 5. (给妻女的) 零用钱, 脂粉费. 6. pl. (给旅馆女服务员的) 小费： dar  para ~es 给小费. 7. 一种小孩游戏. 8. 【植】芹叶太阳花. 9. (牲畜的) 脊背肉. 10.. 古巴刺豆. ~ de nodriza  [拉丁美洲方言] 别针. de veinticinco ~es / con todos sus ~es «estar, ir, ponerse» 【转，口】盛装的. no caber un ~ 【口】满了. pegado  con ~es 【转， 口】不牢固的，不踏实的；不完善的."
  },
  {
    "number": 1352,
    "word": "impávido",
    "definition": "impávido, da adj. 1.勇敢的，无畏的. 2.冷漠的，无动于衷的. 3.[拉丁美洲方言] 恬不知耻的."
  },
  {
    "number": 1353,
    "word": "subalternos",
    "definition": "subalternos: 下属"
  },
  {
    "number": 1354,
    "word": "prepotencia",
    "definition": "f.绝对优势，极端强大."
  },
  {
    "number": 1355,
    "word": "destello",
    "definition": "m. 1. s.de destellar. 2. 闪烁， 闪亮， 闪光. 3. 【转】 些微， 少许， 少量. 4. 【机】 信号光."
  },
  {
    "number": 1356,
    "word": "insolencia",
    "definition": "f.傲慢，蛮横，无礼，无礼的言行"
  },
  {
    "number": 1357,
    "word": "vaivén",
    "definition": "m. 1.摆动， 摆晃： el ~ del abanico 扇子的煽动. 2.(时运的）转化， 变化. 3.危险. 4.【海】双股绳， 三股绳."
  },
  {
    "number": 1358,
    "word": "lombriz",
    "definition": "f. 1.【动】蚯蚓. 2.【动】蛔虫. 3.【俗】吸虫.4.【转】： 非常瘦的人. ~de tierra 蚯蚓. ~ intestinal 蛔虫. ~ solitaria【俗】绦虫."
  },
  {
    "number": 1359,
    "word": "descarado",
    "definition": "descarado, da adj.-s. 厚颜无耻的; 厚颜无耻的人."
  },
  {
    "number": 1360,
    "word": "envase",
    "definition": "m. 1. s.de envasar. 2.（装液体的）容器. 3.（商品的）包装，口袋."
  },
  {
    "number": 1361,
    "word": "cosecha",
    "definition": "f.1. 收割，收获；收成：Este año hay buena ~ de trigo. 今年小麦获得大丰收.2. 收获期，收获季节. 3.【转】大量：una buena ~ de apuntes 一大堆笔记.de la ~ de uno 某人臆想的，某人编造的：Cuéntame lo que pasó sinponer nada de tu ~. 你把发生的事原原本本地告诉我，不要添油加醋."
  },
  {
    "number": 1362,
    "word": "impunidad",
    "definition": "f. «quedar en»未受惩罚，不受制裁，逍遥法外."
  },
  {
    "number": 1363,
    "word": "acribillar",
    "definition": "tr. 1. 使有许多孔洞, 使千疮百孔, 使遍体鳞伤： ~ a puñaladas 用匕首刺得遍体麟伤. Los mosquitos le acribillaron. 蚊子把他叮得浑身是包. 2. 【转, 口】难为, 困扰： ~ a uno a preguntas 问得某人无法应答."
  },
  {
    "number": 1364,
    "word": "gendarme",
    "definition": "m.(法国等的）宪兵."
  },
  {
    "number": 1365,
    "word": "hacer mella",
    "definition": "hacer mella: 留下痕迹"
  },
  {
    "number": 1366,
    "word": "degenerar",
    "definition": "intr. 1. 退步， 衰退， 退化. 2. 堕落， 腐化， 蜕化. 3. 变化， 变质： La disputa degeneró en riña. 辩论变成了争吵. 4. 【美】 变形， 走形."
  },
  {
    "number": 1367,
    "word": "bolchevique",
    "definition": "adj.-s. 布尔什维克的；布尔什维克."
  },
  {
    "number": 1368,
    "word": "soliviantarse",
    "definition": "soliviantarse: 激动"
  },
  {
    "number": 1369,
    "word": "burradas",
    "definition": "burradas: 蠢事"
  },
  {
    "number": 1370,
    "word": "incumbencia",
    "definition": "f. 1.责任，义务：Esa no es ~ mía. / Eso no es de mi ~ . 那不是我的责任. 2.【贬】事务，麻烦：No me des más ~ s， que ya llevo bastantes. 你别再给我添麻烦了，我已经够受的了."
  },
  {
    "number": 1371,
    "word": "remilgo",
    "definition": "m.矫揉造作， 忸怩作态."
  },
  {
    "number": 1372,
    "word": "chancho",
    "definition": "chancho, cha adj. [拉丁美洲方言] 1. 肮脏的， 污秽的. 2.【 转】 卑鄙的，下流的.|→ m. 1. 猪， 公猪. 2. （棋局中的） 死卒."
  },
  {
    "number": 1373,
    "word": "traste",
    "definition": "m. 1.【乐】（弹拨乐器上的）回纹柱， 弦枕. 2.[西班牙安达卢西亚方言] 品酒杯， 尝酒杯. 3.[西班牙安达卢西亚方言], [拉丁美洲方言] 硖旧家具. U.m.enpl. 4.Amén. 【口】屁股. dar al ~ con algo使完结, 葬送： Tantas dilaciones dieron al ~ con mi paciencia. —拖再拖使我完全失去了耐心. la enfermedad dio al ~ con sus economías. 那场病花掉了他的积蓄. irse al ~ algo 失败， 受挫."
  },
  {
    "number": 1374,
    "word": "garrote",
    "definition": "m.1.棍，棒；拐杖.2.(油橄榄树的）插条.3.(用木棍将绳子扭紧的）绞扎法：dar ~ 绞紧.El ~ se usa para detener las hemorragias. 绞扎法用于止血.4.«dar» 绞扎 [―种刑罚].5.«dar» 绞刑.6.（图上线条的）断离.7.(墙面等的）隆起.8.【海】桅栓.9.[墨西哥方言](机动车的）煞车.10. [墨西哥方言] (从山坡上滚下来的）滚石，漂砾."
  },
  {
    "number": 1375,
    "word": "buitre",
    "definition": "m.2.【动】兀鹫. 2.【转】野心勃勃的人；贪婪的人.gran ~ de las Indias【动】神鹰，禿鹰."
  },
  {
    "number": 1376,
    "word": "mugriento",
    "definition": "mugriento, ta adj. 满是油污的，满是污垢的，肮脏的."
  },
  {
    "number": 1377,
    "word": "machucar",
    "definition": "tr.【口】弄坏，揉皱，压扁."
  },
  {
    "number": 1378,
    "word": "escabeche",
    "definition": "m. 1.卤汁：bonito en ~卤鲣鱼.  2.卤制食物： ~de bonito   卤鲣鱼 . pollo en ~卤鸡. 3.【转】染发水. 4.亂泡菜，腌菜."
  },
  {
    "number": 1379,
    "word": "recua",
    "definition": "f.1. 马群； 马帮. 2. 【转】 群， 帮， 队； 排， 组， 堆."
  },
  {
    "number": 1380,
    "word": "preñada",
    "definition": "preñada: 怀孕的"
  },
  {
    "number": 1381,
    "word": "insólito",
    "definition": "insólito, taadj.不常见的，异常的，稀有的，奇特的"
  },
  {
    "number": 1382,
    "word": "rebencazo",
    "definition": "m. 鞭打. "
  },
  {
    "number": 1383,
    "word": "menear",
    "definition": "tr.  1.摇动，幌动，摆动. (也用作自复动词) 2.【转】经营，管理.3.【转】斡旋，活动,张罗. (也用作自复动词)  |→  prnl.  1.【转，口】赶忙, 赶快, 加快：¡ Menéate, que vamos a llegar tar- de! 你快点，咱们要迟到了！2.[秘鲁方言]做淫秽的动作.de(los  de) no te menees 极大的，巨大的：Le van a dar un disgusto de los de no te menees. 他们会使您大为不高兴的. Peor es ~ lo . 最好还是不要提起."
  },
  {
    "number": 1384,
    "word": "pancarta",
    "definition": "f.1.标语牌.2.文献，抄有多种文件的羊皮纸."
  },
  {
    "number": 1385,
    "word": "birrete",
    "definition": "m.1.攉子.2.(大学教授、司法官、律师等的)礼帽. 3.参见 birreta. 4.[智利方言] 高筒三角."
  },
  {
    "number": 1386,
    "word": "bisturí",
    "definition": "[pl. bisturíes] m. 外科手术刀."
  },
  {
    "number": 1387,
    "word": "panfleto",
    "definition": "m.宣传性小册子，传单；宣传."
  },
  {
    "number": 1388,
    "word": "surco",
    "definition": "m. 1.犁沟，垄沟. 2.凹痕, 印迹：Las ruedas dejan ~ s en el camino. 车轮在路上压出了辙印. 3.(脸上或身上的）皱纹. 4.(船舶的）航迹：La quilla deja un ~ en el agua. 船驶过之后在水面上留下了一条印迹. 5.[哥伦比亚方言]垅台. a ~ 毗连的，一沟之隔的. echarse al  en el  ~ 躺倒不干."
  },
  {
    "number": 1389,
    "word": "vuelco",
    "definition": "m. 1. s. de volcar (se). 2.《dar》 垮台， 破产， 倒闭： Esa empresa va a dar un ~ . 那个公司快垮台了. 3.《dar》 糟糕， 失败: Procediendo de esta manera las cosas darán un ~cualquier día. 这样下去事情总有一天要搞糟的. darle a uno un ~ el corazón 1.心中为之一震. 2.突然产生某种预感."
  },
  {
    "number": 1390,
    "word": "sólida",
    "definition": "sólida: 坚固的"
  },
  {
    "number": 1391,
    "word": "aftosa",
    "definition": "aftosa: 口蹄疫"
  },
  {
    "number": 1392,
    "word": "cesantía",
    "definition": "f. 1.失业. 2.失业津贴."
  },
  {
    "number": 1393,
    "word": "rematar",
    "definition": "tr. 1.最后杀死. 2.最后完成： Empieza muchas cosas, pero no remata nada. 他很多事情都是开了个头， 一件也未完成.  (也用作不及物动词) ： Remató con una copla. 他以一首民歌收尾. 3. (在缝工的最后) 打结， 收束. 4. 用完， 耗光. 5. 减价卖掉(最后剩下的商品) . 6. (在拍卖中) 卖出， 使成交. 7. [智利方言] 突然勒住(马) . |→ intr. 1. 结束， 终结： La broma remató en riña. 本来是开玩笑， 最后竟吵了起来. El cuchillo remata en punta. 那把刀是尖的. 2. [足球] 射门得中. |→ prnl. 毁坏， 报销."
  },
  {
    "number": 1394,
    "word": "cumbia",
    "definition": "f. [哥伦比亚方言] 昆比亚舞； 昆比亚舞曲[一种民间舞蹈]."
  },
  {
    "number": 1395,
    "word": "meretriz",
    "definition": "f.妓女. "
  },
  {
    "number": 1396,
    "word": "estrépito",
    "definition": "m.1.轰响.2.【转】咋呼：No saber hace las co- sas sin ~ .他干什么事情都要咋呼一通."
  },
  {
    "number": 1397,
    "word": "tuerca",
    "definition": "f. 螺母. ~ almenada 槽顶螺母. ~ de ceja 凸橼螺母. ~ de orejetas 蝶形螺母.  ~ encastillada 有槽螺母.  ~ exagonal 六角螺母.  ~ inaflojable 自锁螺母. ~ palo milla 参见 ~ de orejas. ~ tapa 螺帽. "
  },
  {
    "number": 1398,
    "word": "terrateniente",
    "definition": "m.，f. 地主， 土地所有者."
  },
  {
    "number": 1399,
    "word": "sindicato",
    "definition": "m. 1.工会.2.辛迪加，企业联合组织."
  },
  {
    "number": 1400,
    "word": "sobaco",
    "definition": "m. 1.腋；胳肢窝. 2.【动】—种鳞鲀[Balistes sabaco]. 3. 参考 enjuta."
  },
  {
    "number": 1401,
    "word": "confabulación",
    "definition": "f.«forrear，organizar, tramar; intervenir, meterse en» 勾结，串通；密谋，策划.en ~ con uno 与某人勾结在一起的. "
  },
  {
    "number": 1402,
    "word": "burdel",
    "definition": "adj. 好色的，淫荡的. |→ m. 妓院. "
  },
  {
    "number": 1403,
    "word": "antediluviana",
    "definition": "antediluviana: 史前的"
  },
  {
    "number": 1404,
    "word": "regentar",
    "definition": "tr.领导；经营；临时担任 "
  },
  {
    "number": 1405,
    "word": "lupanar",
    "definition": "m. 妓院."
  },
  {
    "number": 1406,
    "word": "novillo",
    "definition": "novillo，lla m.,f.小牛，牛犊.|→ m.1.pl.斗小牛.2. 【转】王八，乌龟，戴绿帽子的人，妻子不忠的人.3.[拉丁美洲方言] 未驯养的阉小牛.hacer ~ s 1.逃学，旷课.2.逃避."
  },
  {
    "number": 1407,
    "word": "endilgar",
    "definition": "tr. 1. 【口】 寄， 送. 2. 匆忙完成， 胡乱弄完: En un cuarto de hora endilgó un artículo para el periódico. 他用一刻钟给报纸赶出了一篇文章. 3. 给； 强加， 使忍受:  No han endilgado una comisión nada agradable. 他们派给我们一个并不令人愉快的差事. Todavía no tengo la menor idea de a quién endilgarle este trabajo. 我还想不起来把这项工作派给谁."
  },
  {
    "number": 1408,
    "word": "arenga",
    "definition": "f. 1. «dirigir, echar, pronunciar» 演说, 鼓动演说, 动员报告. 2. 【转, 口】冗长乏味的讲话. 3. [智利方言] 【转】争论, 口角."
  },
  {
    "number": 1409,
    "word": "urna",
    "definition": "f. 1.（古时盛骨灰、 钱币等用的）罐， 盒， 箱. 2.投票箱， 选票箱. 3.（陈列贵重物品的）玻璃罩， 玻璃匣， 玻璃柜. ~ cineraria 骨灰盒."
  },
  {
    "number": 1410,
    "word": "brío",
    "definition": "m.« tener; con » 1.精力充沛，健壮. (多用作复数):  hombre de ~s 精力充沛的人. 2.【转】坚决，果敢. 3.【转】风度翩翩，潇洒."
  },
  {
    "number": 1411,
    "word": "tiznar",
    "definition": "tr. 1.使沾上烟垢， 使熏黑； 使变黑， 使弄黑. 2.弄脏.3.【转】玷污. |→ prnl. [中美洲方言], [阿根廷方言] 喝醉."
  },
  {
    "number": 1412,
    "word": "desnutrir",
    "definition": "tr. 使缺乏营养.|→ prnl. 缺乏营养."
  },
  {
    "number": 1413,
    "word": "bórax",
    "definition": "m.【化】硼砂."
  },
  {
    "number": 1414,
    "word": "hazaña",
    "definition": "f.【口】家务.f. 功绩，业绩，英雄事迹."
  },
  {
    "number": 1415,
    "word": "pértiga",
    "definition": "f.1.长竿,长杆：salto de ~ 撑竿跳.2.扛子，扁担.3.篙."
  },
  {
    "number": 1416,
    "word": "batahola",
    "definition": "f.【口】喧嚷声，吵闹声."
  },
  {
    "number": 1417,
    "word": "quejido",
    "definition": "m.呻吟声， 叫喊声， 叫苦声： dar ~ s 呻吟， 叫苦."
  },
  {
    "number": 1418,
    "word": "manojo",
    "definition": "m. 1.把，束，捆：un ~ de flores —束花儿. 2.【口】 小撮，群，帮：un ~de elementos contrarrevolucionarios —小撮反革命分子. a ~ s 丰富地，大量地."
  },
  {
    "number": 1419,
    "word": "rancio",
    "definition": "rancio, cia adj.1. 陈的， 时间久的： vino ~ 陈酒. tocino ~陈年咸肉. aceite ~ 陈油. 2. 古老的： ~ as costumbres 古老的习俗. ~ a estirpe 古老的家族. 3. 陈旧的， 过时的， 老掉牙的： unas canciones muy ~ as 一些老掉牙的歌曲. |→ m. 1. 参见 rancidez. 2. 陈年咸肉. 3. (布上的) 油垢， 油污."
  },
  {
    "number": 1420,
    "word": "impregnar",
    "definition": "tr. 1. «con, de, en» 使浸满，使充满： ~ la bola del algodón de  en  alcohol 使棉球浸饱酒精. Los árboles recién cortados impregnaban el aire con un fuerte olor de resina. 新伐下来的树木使空气中充满了强烈的树脂味. 2.浸润，浸透：El petróleo se encuentra impregnando las rocas. 石油浸润着岩石. 3.【转】灌输,灌注： ~ a los cuadros del espíritu de servir al pueblo de todo corazón. 教育干部树立全心全意为人民服务的思想. |→ prnl. 【转】充满；掌握：Las masas populares se van impregnando de un entusiasmo inaudito por la construcción socialista (de las doctrinas revolucionarias). 人民群众正在焕发出空前未有的社会主义建设积极性 (正在掌握革命理论)."
  },
  {
    "number": 1421,
    "word": "encomendar",
    "definition": "tr. 1. 托付， 委托： Encomendó el niño a una vecina. 他把孩子交给邻居照看. Le han encomendado la dirección de la expedición. 让他领导这次考察. 2.  定做, 预订. (也用作自复动词)： Se ha encomendado un traje. 他定做了一件衣服. 3. 授予领地， 授与封地， 使成为领主.  4.  (拉丁美洲殖民时期） 把土著居民村落划归（某人）. 5.  推荐， 保举. 6.  [套语] 请代为致意， 请代为问候.  (也用作自复动词):  Encomiéndame   a tus padres. 请代我问候你的父母. |→ intr. 受封;  获得领地， 得到封地.  |→ prnl. «a» 托庇， 请求保护： ~se a Dios  请求上帝保佑."
  },
  {
    "number": 1422,
    "word": "agónico",
    "definition": "agónico, ca adj. 1. 处于临死时的痛苦之中的2. 临终的, 垂死的, 垂危的."
  },
  {
    "number": 1423,
    "word": "alabastro",
    "definition": "m. 1. 雪花石膏. 2. 【转】雪白色. ~ oriental 条纹大理岩. ~ yesoso 参见 alabastrita."
  },
  {
    "number": 1424,
    "word": "estrellar",
    "definition": "adj.星的，星辰的. |→tr.1.使布满星辰. (也用作自复动词) ： Comenzó a ~se el cielo. 天上开始出星星了.2. «contra» 使撞碎，摔碎： ~una botella contra, la pared 把瓶子在墙上摔碎.3.往锅里打（鸡蛋）.|→ prnl.1.跌落： ~ se en el fondo del precipicio 跌入深谷.2.碰撞，撞伤,撞死： ~se contra un árbol 撞在树上.3.【转】碰到不可克服的困难；遭到猛烈的反对.4.【转】失败，受挫."
  },
  {
    "number": 1425,
    "word": "sien",
    "definition": "f.【解】太阳穴."
  },
  {
    "number": 1426,
    "word": "crujir",
    "definition": "intr.嘎吱嘎吱响，咯吱咯吱响；沙沙响，瑟瑟响： ~ los dientes 牙齿咬得咯吱咯吱响."
  },
  {
    "number": 1427,
    "word": "engorroso",
    "definition": "engorroso, sa adj. 讨厌的，麻烦的：un trabajo ~ 一件麻烦事."
  },
  {
    "number": 1428,
    "word": "cabalístico",
    "definition": "cabalístico, ca adj. 神秘的. "
  },
  {
    "number": 1429,
    "word": "culebra",
    "definition": "f. 1. 蛇. 2. （蒸馏器的） 螺管， 蛇形管， 盘旋管. 3. (软木的） 蛀洞. 4. 【转，口】 戏弄， 愚弄， 捉弄. 5. 【转，口】 骚乱, 混乱. 6. 【海】 细缆， 细绳. 7. [秘鲁方言], [智利方言] 【植】 缘毛冷水花. 8. [秘鲁方言], [智利方言] 【植】 缘毛萼距花. 9. [波多黎各方言]【植】 假马齿苋. ~ ciega 蚓蜥. ~de cascabel 响尾蛇. hacer ~  蛇行， 蜿蜒， 曲折前进. liársele a uno la ~ 【转， 口】 （出于意外地） 陷入困境，陷入绝境. saber más que ias ~ s 【转， 口】 非常机敏."
  },
  {
    "number": 1430,
    "word": "podar",
    "definition": "tr.1.修剪（树木，树枝）.2.【转】精简，裁减，削减."
  },
  {
    "number": 1431,
    "word": "timba",
    "definition": "f.（赌博的）局；赌场"
  },
  {
    "number": 1432,
    "word": "penuria",
    "definition": "f.1.缺乏，不足： ~ de tiempo 缺少时间.2.贫困，贫穷."
  },
  {
    "number": 1433,
    "word": "corredor",
    "definition": "corredor, ra adj. 1. 善跑的. 2. 【动】 鸵形目的. |→ m.,f. 1. 参加赛跑的人. 2. 经纪人， 掮客， 中间人. |→ m. 1. 侦察兵. 2. 参加敌后骚扰活动的士兵. 3. 走廊， 回廊； 相通的阳台. 4. 【军】 暗道. |→ f.pl. 【动】 鸵形目."
  },
  {
    "number": 1434,
    "word": "carnero",
    "definition": "m. 1.绵羊，公绵羊. 2.肉羊；羊肉. 3.墓穴. 4.(教堂里的）坟场，坟地. 5.（教堂或公墓里的）骨殖堂，尸骨存放处. 6.[拉丁美洲方言] 【动】羊驼. 7.懦弱的人，意志薄弱的人; 盲从的人. 8.【转】云团. ~del Cabo【动】一种信天翁 [Diomedea exulans].  ~llano 阉羊. ~ verde 蒜爆羊肉. cantar para el ~  [阿根廷方言],  [玻利维亚方言], [乌拉圭方言] , 死亡. no haber tales ~s 【口】不确."
  },
  {
    "number": 1435,
    "word": "mustio",
    "definition": "mustio, tiaadj.萎谢的；（皮肤）松弛的；消沉的；忧郁的"
  },
  {
    "number": 1436,
    "word": "hernia",
    "definition": "f.【医】疝. ~ inguinal 腹股沟. ~ estrangulada绞窄性疝."
  },
  {
    "number": 1437,
    "word": "colegial, colegiala",
    "definition": "colegial, colegiala: 学生"
  },
  {
    "number": 1438,
    "word": "estafar",
    "definition": "tr. «con，en»  诈骗."
  },
  {
    "number": 1439,
    "word": "serrallo",
    "definition": "m. 1.（伊斯兰教徒家中的）闺房，女眷住处.2.【转】妓院，淫乐场所."
  },
  {
    "number": 1440,
    "word": "vaticinar",
    "definition": "tr. 预言， 预测."
  },
  {
    "number": 1441,
    "word": "escrutar",
    "definition": "tr. 1.察看；查询，查究： ~el horizonte 注视着天际. 2.统计(选票）."
  },
  {
    "number": 1442,
    "word": "travieso",
    "definition": "travieso, sa adj. 1. 横的. 2. 顽皮的，淘气的. 3.活跃的，爱闹的（成年人）. 4. 聪明的，机灵的，心眼多的. 5. 喧嚣的，动荡不宁的： arroyuelo ~ 汨汨流水. 6. 堕落的；放荡的. |→ f.1.（两点之间的）距离. 2. [赌博]追加赌注；附加赌注. 3.【铁路】（车盘的）横梁.4.【铁路】枕木，轨枕.5.【建】稼. 6.【建】承重墙. 7.【矿】横向坑道.de ~ 1.【古】横着，斜着；侧着. 2.【法】以旁系亲属关系."
  },
  {
    "number": 1443,
    "word": "servidumbre",
    "definition": "f. 1.（农奴的）劳役. 2.农奴地位，农奴境遇.  3. 【集】奴仆，仆役. 4.【转】重负；奴役. 5.【转】（感情等的）束缚. 6.【法】地役."
  },
  {
    "number": 1444,
    "word": "pitonisa",
    "definition": "f. 阿波罗"
  },
  {
    "number": 1445,
    "word": "caverna",
    "definition": "f. 1.洞穴，岩洞. 2.(强盗的）巢穴. 3.【解】孔，洞： La tuberculosis produce ~s en los pulmones. 结核病会使肺部产生空洞."
  },
  {
    "number": 1446,
    "word": "compenetrarse",
    "definition": "prnl.1.搀合，混合.2.【转】情投意合."
  },
  {
    "number": 1447,
    "word": "corretear",
    "definition": "intr. 1. 【口】 游荡； 游逛. 2. (小孩） 瞎跑， 跑来跑去. 3. [拉丁美洲方言] 跟踪追击. 4. [中美洲方言] 驱赶. 5. [智利方言] 加紧处理"
  },
  {
    "number": 1448,
    "word": "mulato",
    "definition": "mulato, ta m.,f.1.穆拉托人，黑白混血人.2.参见 muleto.|→ adj.1.穆拉托人的.2.肤色黝黑的.3.深色的.|→ m. [拉丁美洲方言](墨绿色的)银矿石."
  },
  {
    "number": 1449,
    "word": "calvo",
    "definition": "calvo, va adj. 1.禿头的，秃顶的.  (也用作名词)  2.光秃秃的，未长草木的（土地）. 3.脱毛的，无绒的，成为光板的（呢绒等）."
  },
  {
    "number": 1450,
    "word": "muselina",
    "definition": "f.麦斯林纱"
  },
  {
    "number": 1451,
    "word": "flexión",
    "definition": "f. 1.弯，弯曲，挠曲.2.柔术.3.【语法】屈折，词尾变化."
  },
  {
    "number": 1452,
    "word": "misionero",
    "definition": "misionero, ra adj.-s.1.传教的；传教士.2.[巴拉圭]密西昂 奈斯（Misiones)的；密西昂奈斯人.3.[阿根廷]米西奧内斯 (Misiones)的；米西奥内斯人."
  },
  {
    "number": 1453,
    "word": "leproso",
    "definition": "leproso，sa adj.- s.患麻风病的；麻风病人."
  },
  {
    "number": 1454,
    "word": "Bolsa",
    "definition": "f. 1.包，囊，口袋. 2.钱袋. 3.金钱，财产. 4.交易所， 证券交易所；证券交易. 5.（车上的）物品袋. 6.« hacer » (衣服因不合身而出现的）褶，皱. 7.【解】阴囊. 8.【解】囊. 9. 【矿】矿巢. 10.[拉丁美洲方言]衣袋. ~de trabajo 职业介绍所. ~ turca 水袋. aflojar la ~解囊，出钱. alargar uno la ~ 筹措资金. bajar la ~证券跌价. jugar a la ~做证券投机生意. subir la ~证券涨价."
  },
  {
    "number": 1455,
    "word": "preceptor",
    "definition": "preceptor, ra m.,f.1.教师.2.家庭教师.3.拉丁语法教师."
  },
  {
    "number": 1456,
    "word": "arremangar",
    "definition": "tr. 卷起 (裤腿、袖子、裙子等) . (也用作自复动词):Se arremangó los pantalones y se metió en el arrozal. 他卷起裤腿就下到稻田里去了. |→ prnl.【转, 口】下定决心, 鼓足勇气."
  },
  {
    "number": 1457,
    "word": "airoso",
    "definition": "airoso, sa adj. 1. 多风的, 风大的. 2. «ser» 【转】优雅的, 洒脱的, 风度翩翩的. 3. «ser»【转】柔软细长的: los ~ s sauces 枝条柔软的柳树. 4. «quedar，salir» 【转】成功的, 得意的."
  },
  {
    "number": 1458,
    "word": "trapecista",
    "definition": "m., f. (体操的）吊杆运动员； （杂技的）吊杆演员."
  },
  {
    "number": 1459,
    "word": "tantear",
    "definition": "tr. 1. 估量，掂量,打量，比量： ~ el peso de un saco 据量一个麻袋的份量. Estoy tanteando la tela para ver sí sale una blusa. 我在比量这块布，看看能否做件衬衣. 2. 试试,试验，试探： ~ el vado 试涉口. Tantea a ver si está bien seguro el clavo antes de colgar el espejo. 在挂镜子之前你先试试钉子牢不牢. Tengo que ~ le para ver qué tal discurre. 我得试探一下看他是怎么想的.  (也用作不及物动词) 3.记录(比赛、游戏等的得分).  (也用作不及物动词) 4.【美】起草，勾画（轮廓）. 5.m., [洪都拉斯方言] 估计. 6.【法】原价赎回（已卖出或出让之物）. (也用作自复动词) |→intr.摸索."
  },
  {
    "number": 1460,
    "word": "gárgola",
    "definition": "f.1.【建】滴水嘴.2.亚麻籽."
  },
  {
    "number": 1461,
    "word": "patíbulo",
    "definition": "m.1.断头台，刑场.2.绞刑架."
  },
  {
    "number": 1462,
    "word": "arengar",
    "definition": "tr.-intr. 发表演说, 鼓动, 动员： ~ a los soldados 向战士动员."
  },
  {
    "number": 1463,
    "word": "gamuza",
    "definition": "f.1.【动】岩羚羊.2.岩羚羊皮.3.仿岩羚羊皮.4.[哥伦比亚方言]玉米粉巧克力饮料."
  },
  {
    "number": 1464,
    "word": "sabañón",
    "definition": "m. 1. 冻疮. 2. [西班牙阿斯图里亚斯方言] (夏末时从蜂箱中分出来的)第二蜂群. comer como un ～能吃,吃得多."
  },
  {
    "number": 1465,
    "word": "ápice",
    "definition": "m. 1. 尖端, 尖部；顶端, 顶部. 2. 舌尖. 3. 山顶. 4. (字母上面的重音等) 书写符号. 5. 【转】顶点： el ~ de la gloria 至高无上的荣誉. 6. 【转】[用于否定句中]—点儿, 一丁点儿： En cuestión de principios, no estamos dispuestos a ceder ni un ~ . 在原则问题上我们丝毫也不准备让步. 7. 【转】(问题的) 最难点, 最微妙处. estar uno en los ~s de una cosa 精通, 熟谙."
  },
  {
    "number": 1466,
    "word": "conventillo, conventico",
    "definition": "conventillo, conventico: 贫民窟"
  },
  {
    "number": 1467,
    "word": "brinco",
    "definition": "m. 1.« dar，pegar » 跳，蹦，跳跃. 2.（古时妇女头巾上的）小饰物. en un ~瞬间，一下子."
  },
  {
    "number": 1468,
    "word": "marmita",
    "definition": "f. 1.密封锅，高压锅. 2.(士兵在野外吃饭用的） 饭盒."
  },
  {
    "number": 1469,
    "word": "gorgoritear",
    "definition": "intr.【口】发颤音，发颤声."
  },
  {
    "number": 1470,
    "word": "topacio",
    "definition": "m. 【矿】黄玉, 黄晶.  ~ ahumado 烟晶， 墨晶. falso ~ / ~ de Hinojosa 假黄晶. ~ oriental 黄刚玉. "
  },
  {
    "number": 1471,
    "word": "remojar",
    "definition": "tr.1. 弄湿： Nos remojó con la manguera de riego. 他用灌溉水龙浇了我们一身水.  (也用作自复动词) : Me remojé con el chaparrón. 我挨雨淋了. 2. 浸湿， 浸泡， 浸渍： ~ el cáñamo 沤麻.  ~ un bizcocho en leche 把饼干在牛奶中浸一下. 3. 【转】 饮酒庆贺. 4. [拉丁美洲方言]给小费."
  },
  {
    "number": 1472,
    "word": "esmaltar",
    "definition": "tr.上瓷漆于；涂珐琅于；点缀；装饰"
  },
  {
    "number": 1473,
    "word": "albahaca",
    "definition": "f. 【植】罗勒. ~ anisada [古巴方言] 【植】茴芹香罗勒腺. ~ silvestre mayor 参见 clinopodio. ~ silvestre menor 参见 alcino."
  },
  {
    "number": 1474,
    "word": "frotar",
    "definition": "tr.摩擦： ~la cerilla contra el raspador 划火柴."
  },
  {
    "number": 1475,
    "word": "hisopo",
    "definition": "m.1.【植】海索草.2.【宗】圣水掸洒器.3.【转】刷状物.4.[拉丁美洲方言]刷子."
  },
  {
    "number": 1476,
    "word": "dócil",
    "definition": "adj. 1. 听话的. 2. 好管教的. 3. 容易加工的."
  },
  {
    "number": 1477,
    "word": "ruda",
    "definition": "f.【植】 芸香.  ~ cabruna 山羊豆.  ser más conocido que la ~ 非常熟悉的."
  },
  {
    "number": 1478,
    "word": "bilis",
    "definition": "f. 1.胆汁.2.暴躁 .exaltársele la ~a uno【转】激动 激怒."
  },
  {
    "number": 1479,
    "word": "deambular",
    "definition": "intr. 漫步， 闲逛."
  },
  {
    "number": 1480,
    "word": "aparecido",
    "definition": "m. 1. 鬼，幽灵：no creer en ~s 不信鬼. 2. [古巴方言] —种小鸟 [Arbelorhina cyanea]."
  },
  {
    "number": 1481,
    "word": "delicia",
    "definition": "f. 1. «causar, ser» 快感， 愉快， 痛快： Causa ~la brisa fresca. 清风徐来， 令人陶醉. 2. «ser» 心乐事： El circo es la ~de los chiquillos. 马戏是孩子最喜爱的节目. hacer las ~s 使开心， 使高兴."
  },
  {
    "number": 1482,
    "word": "prosaico",
    "definition": "prosaico, ca adj.1. 散文的； 散文体的. 2. 平铺直叙的， 缺乏诗意的(诗作) . 3. 【转】 平庸的， 平凡的， 庸俗的： hombre ~ 平庸的人. trabajo ~ 平凡的工作. pensamiento ~ 庸俗的思想."
  },
  {
    "number": 1483,
    "word": "prodigio",
    "definition": "m.奇异, 怪异； 奇事， 怪事； 奇迹： La ciencia realiza hoy verdaderos ~ s. 今天科学在创造真正的奇迹."
  },
  {
    "number": 1484,
    "word": "cimiento",
    "definition": "m. 1.（建筑物的）地基.(多用作复数) 2.【转】（事物的） 基础：echar los ~s de las relaciones de amistad y cooperación de los dos países 为两国的友好合作关系奠定基础. ~ romano [拉丁美洲方言] 水硬石灰. desde los ~s 从头开始.  poner  los ~s de  una cosa  为某事奠定基础."
  },
  {
    "number": 1485,
    "word": "insignia",
    "definition": "f. 1.旗帜，旗号，旗标. 2.符号，标志，徽章."
  },
  {
    "number": 1486,
    "word": "pantorrilla",
    "definition": "f.1.腿肚子.2.粗腿.3.[秘鲁方言]可笑的虚荣."
  },
  {
    "number": 1487,
    "word": "estorbo",
    "definition": "m. 障碍."
  },
  {
    "number": 1488,
    "word": "pregonero",
    "definition": "pregonero, ra adj.-s.1.叫卖的，叫座的；叫卖人，拉座人. 2.走漏消息的；走漏消息的人.|→ m.(传播口头告示的） 报子. 谚语：¡Cómo subo, subo： de ~ a verdugo![用于指每况愈下的人]飞黄腾达我也有，报子变成刽子手！"
  },
  {
    "number": 1489,
    "word": "maní",
    "definition": "m. 1.花生. 2.[古巴方言], [波多黎各方言]【口】钱."
  },
  {
    "number": 1490,
    "word": "faldeo",
    "definition": "m. [阿根廷方言], [智利方言] 山坡."
  },
  {
    "number": 1491,
    "word": "baldío",
    "definition": "baldío, a adj. 1.贫瘠的，荒芜的，未开垦的. 2.无用的：un esfuerzo ~徒劳. 3.游手好闲的，不务正业的. |→ m. 荒地."
  },
  {
    "number": 1492,
    "word": "devastar",
    "definition": "tr.破坏， 摧毁， 毁灭."
  },
  {
    "number": 1493,
    "word": "picaporte",
    "definition": "m.1.弹子锁.2.弹子锁门把.3.（叫门用的）扣环，兽环.  ~ de resbalón 弹簧锁."
  },
  {
    "number": 1494,
    "word": "lacrimoso",
    "definition": "lacrimoso，sa adj. 1.多泪的，好流泪的（眼睛）. 2.爱哭的. 3.使人落泪的，令人心酸的."
  },
  {
    "number": 1495,
    "word": "ofuscación",
    "definition": "ofuscación,ofuscamiento f.1.眼花，目眩.2.【转】胡涂，失去理智."
  },
  {
    "number": 1496,
    "word": "mortuorio",
    "definition": "mortuorio, ria adj.死人的;丧葬的：cámara ~ a 停尸间.casa ~ a 办丧事的人家.esquela ~ a 讣告.|→m.滨殆."
  },
  {
    "number": 1497,
    "word": "pátina",
    "definition": "f.1.锈；铜绿.2.(时间过久造成的）褪色.3.【转】（某些物品由于长期存放而形成并使之增价的）古色古香."
  },
  {
    "number": 1498,
    "word": "estreñimiento",
    "definition": "m. «padecer,tener»【医】便秘."
  },
  {
    "number": 1499,
    "word": "podredumbre",
    "definition": "f.1.脓：limpiar la ~ de una llaga 除去伤口上的脓.2.腐烂.3.腐烂物，腐烂处.4.【转】腐败，腐化，败坏.5.【转】忧伤，悲痛."
  },
  {
    "number": 1500,
    "word": "tallar",
    "definition": "tr. 1.雕刻；镌刻： ~ la madera 雕木头.  ~ el busto de un héroe en mármol 雕刻一个英雄的大理石胸像. 2.琢磨 (宝石）. 3.斜切（木，石）.4.测量（某人的身高）. 5.（为某物）估价，定价. 6.（向某人）课税. |→intr. 1.垄断谈话. 2.[赌博]坐庄.3.[阿根廷方言], [智利方言]聊天，谈话. 4.[智利方言]谈情说爱. |→adj. 1.可砍伐: monte ~ 可砍伐的山林. bosque ~ 可采伐的森林. 2.可以开始采伐的（幼林）.(也用作阳性名词) 3. 刚采伐过的（树林）.(也用作阳性名词)4.可劈割的：leña ~ 可以劈开的木柴. |→m.小梳子."
  },
  {
    "number": 1501,
    "word": "dosel",
    "definition": "m. 1. 华盖. 2. 门帘， 门帷."
  },
  {
    "number": 1502,
    "word": "altorrelieve，bajorrelieve",
    "definition": "altorrelieve, bajorrelieve: 浮雕，凹雕"
  },
  {
    "number": 1503,
    "word": "piltrafa",
    "definition": "f.下脚肉；弱不禁风的人；意志薄弱的人"
  },
  {
    "number": 1504,
    "word": "brocado",
    "definition": "brocado, da adj. 锦缎的，花缎的. |→ m. 1.（金银线织成的）锦缎，花缎. 2.嵌有金银花饰的皮革制品."
  },
  {
    "number": 1505,
    "word": "marchito",
    "definition": "marchito, ta adj. 1.凋谢的，枯萎的. 2.【转】憔悴的."
  },
  {
    "number": 1506,
    "word": "viga",
    "definition": "f. 1.梁. 2.（油坊等处用的）轧辊. 3.轧[量词， 一次压榨的油橄榄量]. ~ armada 组合板梁. ~ arqueada 拱梁. ~ cantiléver 悬臂梁. ~ con entallas 底截口梁.  ~ contima 连续梁.  ~ de aire 悬空梁.  ~ de alma llena 叠板梁. ~ de apuntalamiento 撑木. ~ de caja 箱形截面梁.  ~ de celosía. 格构大梁, 花格大梁. ~ de fijacion 跨腰梁， 横梁， 系梁. ~ de pie 系梁， 水平拉杆.  ~ diagonal 斜拉杆.  ~ empotrada 固定梁. ~ en doble T 参见 ~ en H. ~ en flecha 弓背梁， 弯梁. ~ en H 工字梁. ~ en T T 字梁. ~ maestra 主梁. ~ patrón 标准型梁. ~ trans 支托小梁."
  },
  {
    "number": 1507,
    "word": "colcha",
    "definition": "f.床单，床罩. "
  },
  {
    "number": 1508,
    "word": "damasco",
    "definition": "m. 1. 花缎， 锦缎. 2. 锦缎花纹布. 3. 【植】 布拉斯李."
  },
  {
    "number": 1509,
    "word": "deshilachado",
    "definition": "deshilachado: 磨损的"
  },
  {
    "number": 1510,
    "word": "amoratada",
    "definition": "amoratada: 发紫的"
  },
  {
    "number": 1511,
    "word": "elefantiásico，elefanciaco",
    "definition": "elefantiásico, elefanciaco: 象皮病的"
  },
  {
    "number": 1512,
    "word": "resignado",
    "definition": "p.p.忍耐"
  },
  {
    "number": 1513,
    "word": "gastado",
    "definition": "gastado, da adj.1.磨损的，破旧的：Lleva los codos ~ s.他的两个胳膊肘都破了.2.衰老的，精力耗尽的，疲惫的.3. 已不中用的，走下坡路的，丧失威望的.4.陈旧的，老的（题目，事情）."
  },
  {
    "number": 1514,
    "word": "tarro",
    "definition": "m. 1.陶罐，瓷罐，玻璃罐. 2.[阿根廷方言]铁罐. 3.[古巴方言](动物的）角."
  },
  {
    "number": 1515,
    "word": "macetero",
    "definition": "m. 花盆架."
  },
  {
    "number": 1516,
    "word": "descascarar",
    "definition": "tr. 剥， 削， 去掉皮， 去掉壳.|→ prnl. 【转】 (皮、 壳等） 剥落， 脱落."
  },
  {
    "number": 1517,
    "word": "encoger",
    "definition": "tr. 1.使收缩：La humedad ha encogido la cuerda. 绳子受潮后缩了. (也用作不及物自复动词):  El vestido (se) ha encogido al lavarlo. 这件衣服一洗就缩了. 2.缩， 缩回： ~ la mano 把手缩回.  ~ los hombros 耸肩.  El caracol encoge su cuerpo .  蜗牛把身体 3.皱， 使皱起： ~ el entrecejo 皱眉头. 4.【转】 使畏缩， 使胆怯； 使羞怯， 使局促： El miedo le encoge. 他吓得缩手缩脚.  (也用作自复动词)： ~se con el frío 冻得畏畏缩缩. Se encoge en cuanto le chillan. 人一哄他就怕了. El niño se encoge delante de desconocidos. 那孩子怯生."
  },
  {
    "number": 1518,
    "word": "para colmo",
    "definition": "para colmo: 更糟的是"
  },
  {
    "number": 1519,
    "word": "languidez",
    "definition": "f.无生气，倦怠，郁郁不乐"
  },
  {
    "number": 1520,
    "word": "muslo",
    "definition": "m.大腿"
  },
  {
    "number": 1521,
    "word": "yerno",
    "definition": "m. 女婿."
  },
  {
    "number": 1522,
    "word": "amedrentar",
    "definition": "tr. 使害怕, 吓住, 吓倒： ~ al enemigo 使敌人丧胆. El revolucionario no se deja ~ por las dificultades de ninguna clase. 任何困难也吓不倒革命者.|→ prnl. 害怕, 胆怯."
  },
  {
    "number": 1523,
    "word": "solvencia",
    "definition": "f. 1.s.de solventar. 2.支付能力."
  },
  {
    "number": 1524,
    "word": "arrebolada",
    "definition": "f. 红云, 彩霞."
  },
  {
    "number": 1525,
    "word": "dalia",
    "definition": "f. 【植】 变异大丽花."
  },
  {
    "number": 1526,
    "word": "esmerado",
    "definition": "esmerado, da. adj. 1.精细的，精致的；细致的：un trabajo ~ 细致的工作. 2.《en》细心的,仔细的： ~en el trabajo 工作细心."
  },
  {
    "number": 1527,
    "word": "asmática",
    "definition": "asmática: 哮喘的"
  },
  {
    "number": 1528,
    "word": "crespo",
    "definition": "crespo， pa adj. 1. 卷曲的：el pelo ~卷发. Las hojas de la col son ~as. 圆白菜的叶子是卷的. 2. 【转】 晦涩的（文风）. 3. 【转】 发怒的， 发火的. |→ m. 发绺， 发卷.|→ f. 头发."
  },
  {
    "number": 1529,
    "word": "mistela",
    "definition": "f.1.鲜葡萄汁酒[用葡萄汁加酒精不经发酵制成].2.桂皮甜酒."
  },
  {
    "number": 1530,
    "word": "avellana",
    "definition": "f. 榛子."
  },
  {
    "number": 1531,
    "word": "argolla",
    "definition": "f. 1. 铁环, 金属环. 2. 木球穿环游戏. 3. 手镯. 4. 【转】依附, 依赖. 5. 【古】环首示众[―种刑罚, 将犯人的脖子. 套在立于闹市的木柱的铁环中进行羞辱]. 6. 【古】项圈. 7. 金戒指, 订婚戒指. 8. 联盟, 同盟. 9. [厄瓜多尔方言],[秘鲁方言] (商业、政治等的) 团体. formar ~ Amer.C. 垄断."
  },
  {
    "number": 1532,
    "word": "pantagruélico",
    "definition": "pantagruélico, ca adj.豪华的，丰盛的：banquete ~ 丰盛的宴会."
  },
  {
    "number": 1533,
    "word": "congrio",
    "definition": "m.【动】康吉鳗，欧洲康吉鳗."
  },
  {
    "number": 1534,
    "word": "gratinar",
    "definition": "tr. 裹上面包屑烘烤."
  },
  {
    "number": 1535,
    "word": "cónsul",
    "definition": "m.1.(古罗马的）最高执政官.2.(法兰西第一共和国时期的）执政官.3.领事.4.外交官.5.贸易法庭成员.6. 【古】头领，首领. ~ general 总领事."
  },
  {
    "number": 1536,
    "word": "festín",
    "definition": "m.1.家宴.2.盛宴，华筵. ~ de éter【医】醚麻醉系统，醚麻醉体制."
  },
  {
    "number": 1537,
    "word": "chabacanería",
    "definition": "f. 1. 粗俗. 2. 粗俗的言行."
  },
  {
    "number": 1538,
    "word": "cotorra",
    "definition": "f. 1. 【动】 鹦鹉. 2. 【动】 喜鹊. 3. 【转, 口】 饶舌的人, 话多的人."
  },
  {
    "number": 1539,
    "word": "toldo",
    "definition": "m. 1.帐篷， 布篷， 遮阳篷. 2.车篷. 3.【转】傲慢. 4.[西班牙安达卢西亚方言] 盐店. 5. [阿根廷方言] （土著人的）茅屋， 窝棚."
  },
  {
    "number": 1540,
    "word": "turbamulta",
    "definition": "f. 【口】混乱的人群."
  },
  {
    "number": 1541,
    "word": "enmarañar",
    "definition": "tr.弄乱，搅乱： ~el cabello 弄乱头发. ~un asunto 搅乱事情. |→ prnl. (天空）布满云彩."
  },
  {
    "number": 1542,
    "word": "pelotera",
    "definition": "f. «armar»【口】口角，争吵,吵架."
  },
  {
    "number": 1543,
    "word": "codazo",
    "definition": "m. «dar, pegar» 肘击，胳膊肘的撞击."
  },
  {
    "number": 1544,
    "word": "cacha",
    "definition": "f . 1.(刀、手枪等的）柄面. (多用作复数) 2.（刀、手枪等的） 柄，把. 3.脸蛋. 4.(兔等小猎物的）肘子，大腿肉. 5.[西班牙萨拉曼卡方言], [波多黎各方言] 臀，屁股.6.[拉丁美洲方言] 欺骗. 8.[拉丁美洲方言] 过分 . 9.[哥伦比亚方言] 钱. 10.[哥伦比亚方言] 角杯. 11.Bol 木箱. 12.[玻利维亚方言] (给斗鸡安装的）铁爪. hasta las ~ s  « meter » 完完全全地；深深地： El carro, por descuido, sé metió en el barro hasta las ~s. 由于疏忽，汽车完全陷进了泥潭.  hacer ~ s  1. [危地马拉方言] 力争，力图. 2. [智利方言](用手势和表情）讥笑."
  },
  {
    "number": 1545,
    "word": "potrillo",
    "definition": "potrillo: 小马"
  },
  {
    "number": 1546,
    "word": "fiera milenaria",
    "definition": "fiera milenaria: 千年野兽"
  },
  {
    "number": 1547,
    "word": "empañar",
    "definition": "tr. 1. 用襁褓包（婴儿）. 2. 弄脏， 使失去光泽， 使不透明： ~un espejo 把镜子弄脏. 3. 【转】 玷污， 损坏： ~la honra  玷污名誉 ."
  },
  {
    "number": 1548,
    "word": "estola",
    "definition": "f. 1.(古希腊、罗马的)长衫. 2.(祭服的)领带. 3.(女甩)毛皮围脖."
  },
  {
    "number": 1549,
    "word": "mostacilla",
    "definition": "f.1.（打鸟或小动物用的）霰弹.2.小玻璃珠."
  },
  {
    "number": 1550,
    "word": "ajuar",
    "definition": "m. 1. 家当[指全部家具、衣物等]. 2. 嫁妆."
  },
  {
    "number": 1551,
    "word": "primor",
    "definition": "m.1. «con» 精心， 仔细. 2. 精美， 细致. 3. 精品， 精美物品： Hace ~ es con la aguja. 她能织 出非常漂亮的东西. que es  un ~ [用于句末，表示赞美] 真好， 真大： Guisa que es un ~ . 她菜做得真好. Llovía que era un ~ . 那场雨下得真大."
  },
  {
    "number": 1552,
    "word": "alcanfor",
    "definition": "m. 1. 樟脑: ~ natural 天然樟脑. ~ sintético 合成樟脑. 2. 樟树."
  },
  {
    "number": 1553,
    "word": "plomeros",
    "definition": "plomeros: 管道工"
  },
  {
    "number": 1554,
    "word": "zócalo",
    "definition": "m. 1.【建】蹑脚. 2.【建】座石， 台座; 柱墩, 柱脚. 3.[墨西哥方言] 广场中心."
  },
  {
    "number": 1555,
    "word": "grifería",
    "definition": "f.【集】（水管等的）龙头，活门，开关."
  },
  {
    "number": 1556,
    "word": "alegar",
    "definition": "tr. «en; como» 援引, 引证, 列举： Alega numerosos precedentes para justificar su demanda. 他援引了大量的先例证明他的要求是正当的.|→ intr. 1. [拉丁美洲方言] 争执, 争吵. 2. 【法】辩护."
  },
  {
    "number": 1557,
    "word": "despilfarro",
    "definition": "m. 1. 挥霍， 浪费： evitar el ~de recursos humanos y materiales 避免人力和物力的浪费. 2. 懒情； 邋遢. 3. （由于懒惰或邋遢造成的衣物的） 坏损."
  },
  {
    "number": 1558,
    "word": "trastorno",
    "definition": "m. 1.s.de trastornar(se). 2.混乱， 紊乱: un ~político 政治混乱. 3.微恙， 不适."
  },
  {
    "number": 1559,
    "word": "macizo",
    "definition": "macizo, za adj. 1.实心的：una bola ~a de hierro —个实心铁球. 2.结实的，牢固的：un mueble ~ 一件结实的家具. No está gordo, pero está ~ . 他不胖，但很结实. 3. 【转】扎实的，根据充分的：argumentos ~ s 扎实的理由.  |→ m. 1.实心物体. 2.【建】（门窗之间的）壁垛. 3.【地, 质】高原；山岳，群峰. 4.【转】建筑群. 5.【转】（园林中的  地块，花坛."
  },
  {
    "number": 1560,
    "word": "surtidor",
    "definition": "surtidor, ra adj.s.de surtir.|→m. 1.喷泉，喷水.2.（加油器、汽化器等的）喷嘴，射口."
  },
  {
    "number": 1561,
    "word": "orondo",
    "definition": "orondo, da adj.1.空的，鼓胀的.2.大肚子的，圆的（器皿）.3.【口】自得的，得意的.4.【转】胖的.5.[阿根廷方言]镇静的."
  },
  {
    "number": 1562,
    "word": "protuberancia",
    "definition": "f.1. 隆起， 凸起. 2. pl.【天】 日珥."
  },
  {
    "number": 1563,
    "word": "frenética",
    "definition": "frenética: 狂热的"
  },
  {
    "number": 1564,
    "word": "sustento",
    "definition": "m. 1.支柱，支撑物. 2.食粮，口粮;生活必需品: ga-narse el ~ 谋生."
  },
  {
    "number": 1565,
    "word": "ganchillo",
    "definition": "m.1.钩针.2.钩针织品：unos guantes de ~ 钩针织的手套.3.[西班牙安达卢西亚方言], [拉丁美洲方言]发卡."
  },
  {
    "number": 1566,
    "word": "palmada",
    "definition": "f.拍，掌击；[pl.] 拍手；掌声 "
  },
  {
    "number": 1567,
    "word": "candor",
    "definition": "m. 1.洁白，雪白. 2.【转】诚实，纯朴. 3.【转】天真,轻信."
  },
  {
    "number": 1568,
    "word": "aderezo",
    "definition": "m. 1. s.de aderezar. 2. 调味品. 3. 必要的准备. 4. 全套首饰[一般指项练, 耳环, 别针和手镯]. 5. (马具和刀剑 等的) 装饰. medio ~ 半套首饰[指耳环和别针]."
  },
  {
    "number": 1569,
    "word": "impúdica",
    "definition": "impúdica: 不廉洁的"
  },
  {
    "number": 1570,
    "word": "velero",
    "definition": "velero, ra adj. 1.制蜡烛的， 卖蜡烛的.  (也用作名词)  2.参加守护圣体的.  (也用作名词)  3.参加朝圣的.  (也用作名词)  4.制作船帆的. (也用作阳性名词) 5.用帆的， 有帆的（船）. (也用作阳性名词) 6.轻快的（帆船)."
  },
  {
    "number": 1571,
    "word": "irremisiblemente",
    "definition": "adv. 不可原谅地，不可宽恕地."
  },
  {
    "number": 1572,
    "word": "nenúfar",
    "definition": "m.【植】白睡莲. ~ amarillo【植】黄睡莲. "
  },
  {
    "number": 1573,
    "word": "tranpirar",
    "definition": "tranpirar: 出汗"
  },
  {
    "number": 1574,
    "word": "bullaranga，bulla，bullanga",
    "definition": "bullaranga, bulla, bullanga: 喧闹"
  },
  {
    "number": 1575,
    "word": "cacarear",
    "definition": "intr. (鸡）咯咯叫. |→ tr.【转】夸耀，吹嘘；张扬： ¡Cómo cacarea lo poco que hace ！做了一点事就吹起来没完！"
  },
  {
    "number": 1576,
    "word": "alelado",
    "definition": "alelado, da adj. 呆傻的. "
  },
  {
    "number": 1577,
    "word": "alumbramiento",
    "definition": "m. 分娩 "
  },
  {
    "number": 1578,
    "word": "bambolear",
    "definition": "bambolear  intr.  摇晃, 摇摆"
  },
  {
    "number": 1579,
    "word": "cesáreo",
    "definition": "cesáreo, a adj. 1.皇帝的，帝王的. 2.【医】剖腹产的. |→ f. 【医】剖腹产手术."
  },
  {
    "number": 1580,
    "word": "sopor",
    "definition": "m. 1.【医】迷睡，昏睡.2.【转】困倦;酣睡."
  },
  {
    "number": 1581,
    "word": "fajar",
    "definition": "tr.（用带子）捆，裹，包扎；Amér. 打，攻击prnl.包扎； 抗击打；Amér. 努力工作"
  },
  {
    "number": 1582,
    "word": "aya",
    "definition": "f. 保姆；家庭女教师."
  },
  {
    "number": 1583,
    "word": "diluir",
    "definition": "tr. 1. 使溶解. (也用作自复动词) 2. 【化】 稀释， 冲淡."
  },
  {
    "number": 1584,
    "word": "armadillo",
    "definition": "m. 【动】犰狳. "
  },
  {
    "number": 1585,
    "word": "articulaciones",
    "definition": "articulaciones: 关节"
  },
  {
    "number": 1586,
    "word": "estrábico",
    "definition": "estrábico, caadj.斜视的，斜眼的；患斜视m., f.斜眼儿 "
  },
  {
    "number": 1587,
    "word": "sandalia",
    "definition": "f.凉鞋；拖鞋."
  },
  {
    "number": 1588,
    "word": "repujar",
    "definition": "tr.(在金属板等上面) 敲出凸纹花饰， 压出凸纹花饰."
  },
  {
    "number": 1589,
    "word": "trasto",
    "definition": "m. 1.家具杂物. 2.破旧家具， 废旧物品： Tiene la mesa llena de ~ s. 他桌下堆满了没有用的东西. 3.pl. 用具， 器具： los ~ s de pescar 渔具. 4.pl. 随身武器. 5.【转， 口】废物， 笨蛋. ⑥【转， 口】不懂礼貌的人. ⑦【剧】布景， 道具.tirarse los a la cabeza 吵架， 对骂."
  },
  {
    "number": 1590,
    "word": "baboso",
    "definition": "baboso, sa adj. 1. 好淌口水的. 2. 【转, 口】好向女人献殷勤的. 3. 【转, 口】 好高鹜远的. 4. [拉丁美洲方言] 蠢的.|→ m.,f. [秘鲁方言] 孬种.|→ m. 参见 budión."
  },
  {
    "number": 1591,
    "word": "embetunar",
    "definition": "tr. (往鞋等皮革制品上） 擦油， 擦保革油."
  },
  {
    "number": 1592,
    "word": "antorcha",
    "definition": "f. 火炬, 火把."
  },
  {
    "number": 1593,
    "word": "vidente",
    "definition": "adj. 《ser》 有眼力的， 有远见的  (也用作名词) "
  },
  {
    "number": 1594,
    "word": "recelo",
    "definition": "m.«inspirar； abrigar； desvanecer； con» 怀疑， 担心， 害怕. "
  },
  {
    "number": 1595,
    "word": "parranda",
    "definition": "f.1.«andar de, ir de»欢闹.2.（晚上在街上周游的）乐队.3.旅游，游玩.4.[哥伦比亚方言]堆."
  },
  {
    "number": 1596,
    "word": "cuartel general",
    "definition": "cuartel general: 司令部"
  },
  {
    "number": 1597,
    "word": "sarna",
    "definition": "f.【医】疥疮. ~ perruna 【医】非脓性疥疮. más viejo que la ~ 非常古老的，非常陈旧的. no faltar a uno sino ~ que rascar 一无所缺[尤用于指不知足的人].谚语 Sarna con gusto no pica (，pero mortifica). 自愿染上的疥疮（虽然难受，但)不痒；自己惹出来的事情（虽然有些讨厌，却）不能怕麻烦."
  },
  {
    "number": 1598,
    "word": "parafina",
    "definition": "f.【化】石蜡. ~ liquida 液态凡士林. "
  },
  {
    "number": 1599,
    "word": "risueño",
    "definition": "risueño, ña adj.1. 笑眯眯的， 笑容可掬的. 2. 爱笑的. 3. 欢快的， 欢畅的： un paisaje ~ 令人心旷神怡的景致. 4. «esperanzas, perspectivas, porvenir» 美好的."
  },
  {
    "number": 1600,
    "word": "codear",
    "definition": "intr.用胳膊肘撞击：Codeando, pudo abrirse paso entre la multitud. 他连推带搡才在人群中闯出一条路来.|→ tr. [南美洲方言]1.讨，要,求告.2.骗出，套出.|→ prnl. «con》 交好，来往：Se codea con todo el mundo. 他和所有的人都来往."
  },
  {
    "number": 1601,
    "word": "zurra",
    "definition": "f. 1.鞣皮， 制革. 2.【转， 口】鞭打， 殴打， 惩罚. 3.《dar》 【转， 口】（持续的）繁重工作. 4.【转， 口】恶斗， 打架."
  },
  {
    "number": 1602,
    "word": "enajenar",
    "definition": "tr. 1. 出让， 转让， 让渡. (也用作自复动词) 2. 使失去理智： La cólera le enajena. 狂怒使他失去理智. (也用作自复动词) 3. 使着迷， 使入神， 使出神. (也用作自复动词) 4. 使失去， 使失掉（别人的好感）： Su mal humor le ha enajenado muchas amistades. 他的不脾气使他失掉了好多朋友. (也用作自复动词)  |→ prnl. «de»  疏远：No te enajenes de los camaradas. 你不要和同志们疏远."
  },
  {
    "number": 1603,
    "word": "pelele",
    "definition": "m.1.草人，布人.2.(针织的)小孩睡衣.3.【转，口】傀儡；受人操纵的人；任人摆布的人."
  },
  {
    "number": 1604,
    "word": "cataplasma",
    "definition": "f. 1.【医】泥敷剂，糊剂. 2.【转，口】体弱多病的人. 3.【转，口】粗糙的器物；样子难看的东西. 4.【转，口】 惹人讨厌的人."
  },
  {
    "number": 1605,
    "word": "antropófago",
    "definition": "antropófago, ga adj.-m. 食人肉的；食人生番."
  },
  {
    "number": 1606,
    "word": "costrón",
    "definition": "m. 煎面包片."
  },
  {
    "number": 1607,
    "word": "aturdido",
    "definition": "aturdido, da adj. 1. 茫然的, 不知所措的： Estoy ~ con tantas cosas que hacer. 那么多事情要做, 我真不知怎么是好. 2. 参见 atolondrado."
  },
  {
    "number": 1608,
    "word": "reptar",
    "definition": "intr.爬行， 匍匐."
  },
  {
    "number": 1609,
    "word": "oprimida",
    "definition": "oprimida: 被压迫的"
  },
  {
    "number": 1610,
    "word": "trémulo",
    "definition": "trémulo  trémulo/laadj.  颤抖的, 颤动的"
  },
  {
    "number": 1611,
    "word": "roedor",
    "definition": "roedor, ra adj.1. 咬的， 啃的. 2. 【转】 折磨人的. 3. 【动】 啮齿目的. |→ m.pl.【动】 啮齿目."
  },
  {
    "number": 1612,
    "word": "menopausia",
    "definition": "f. 绝经；绝经期"
  },
  {
    "number": 1613,
    "word": "desabrocharse",
    "definition": "desabrocharse: 解开"
  },
  {
    "number": 1614,
    "word": "bragueta",
    "definition": "f. (男裤的）襟门. casamiento de ~ [秘鲁方言], [南美洲拉普拉塔河流域方言]理智的婚姻，图利的婚姻."
  },
  {
    "number": 1615,
    "word": "achispar",
    "definition": "tr. 使微醉. (也用作自复动词)"
  },
  {
    "number": 1616,
    "word": "aperitivo",
    "definition": "aperitivo, va adj. 开胃的.|→ m. 1. 开胃物, 开胃酒. 2. 【医】开胃药."
  },
  {
    "number": 1617,
    "word": "venia",
    "definition": "f. 1.宽恕， 原谅. 2.允许， 准许； 许可， 认可； 同意， 赞成: pedir la ~ de la asamblea para hablar 向大会要求发言. hacer algo con la ~ del maestro 得到教师的允许做某件事情. No hace nada sin la ~ de su jefe. 没有上级的许可他是什么也不干的. 3.点头致意. 4.[拉丁美洲方言] 军礼."
  },
  {
    "number": 1618,
    "word": "grata",
    "definition": "f.金属刷."
  },
  {
    "number": 1619,
    "word": "solapadamente",
    "definition": "adv. 虚伪地，狡诈地，心口不一地."
  },
  {
    "number": 1620,
    "word": "decantar",
    "definition": "tr. 1. 倾向. 2. 赞扬， 颂扬： ~ las proezas de los héroes 颂扬英雄的业绩.|→ prnl.倾向.Ella se decantó por un abrigo más barato. 她更倾向于挑选一件更便宜的外套.|→ intr. 【古】 偏离（前进的路线）."
  },
  {
    "number": 1621,
    "word": "mezquino",
    "definition": "mezquino, naadj.吝啬的；贫穷的；卑下的；小的；微薄的；不足的m., f.吝啬的人；卑鄙的人"
  },
  {
    "number": 1622,
    "word": "resuelto",
    "definition": "resuelto，ta adj。1. 坚定的， 勇敢的， 果断的. 2. 敏捷的， 利落的."
  },
  {
    "number": 1623,
    "word": "matrona",
    "definition": "f.  1.主妇.2.（微胖的）成年妇女体态：estar hecho una ~ 变成体态丰满的成年妇女. 3.接生婆，助产士.4.(海关、监狱等的）女检查员."
  },
  {
    "number": 1624,
    "word": "rictus amargo",
    "definition": "rictus amargo: 苦涩的面容"
  },
  {
    "number": 1625,
    "word": "veneración",
    "definition": "f. 1.s.de venerar. 2.恭敬."
  },
  {
    "number": 1626,
    "word": "retribuir",
    "definition": "tr.1. 酬劳， 给予报酬. 2.[拉丁美洲方言]报答， 酬谢."
  },
  {
    "number": 1627,
    "word": "mazorca",
    "definition": "f. 1.玉米穗，玉米棒子.2.可可的果实.3.绕在锭子上的纱：una ~ de lino 一锭子麻纱.4.【建】纺锤形栏杆柱. 5.[智利方言]【转】专制政府；专制集团.6.[阿根廷方言] 玉米棒子党[Juan Manuel Ortiz de Rosas 统治时期人们对联邦党人民复兴协会(Sociedad Popular Restauradora) 的蔑称， 因为它的标志上面有一个玉米穗]."
  },
  {
    "number": 1628,
    "word": "rociar",
    "definition": "intr.降露水； 下小雨.   |→ tr.1. (往某处) 喷水， 洒水， 浇水： ~ las flores 浇花. 2. 【转】 拋撒： ~ confites 抛撒糖果. 3. 【转】 (借赌本的赌徒赢钱之后) 酬谢(债主) ."
  },
  {
    "number": 1629,
    "word": "agrio",
    "definition": "agrio, gria adj. 1. 酸的: fruta ~a 酸的水果. 2. 【转】陡峭崎岖的, 坎坷不平的: camino ~ 难通行的道路. 3. 【转】尖酸刻薄的: palabras ~as 尖刻的言辞. 4. 【转】严厉的, 态度生硬的, 脾气暴躁的: ~ de carácter 性情不好的. 5. 【转】残酷的，难以忍受的 (惩罚, 遭遇) . 6. 【转】脆的 (金属). 7. 【美】不谐调的 (色彩) .|→ m. 1. 酸味. 2. 酸果汁. 3. pl. 【集】酸味水果, 酸甜类水果[如柠檬、柑、橘等]. mascar las ~as【转】掩饰心中的不快."
  },
  {
    "number": 1630,
    "word": "cañería",
    "definition": "f. 1.管道. 2.【集】管道系统."
  },
  {
    "number": 1631,
    "word": "zampar",
    "definition": "tr. 1.(将某物）急忙塞入， 急忙藏进： ~ algo en un cajón 急忙把某物放入抽屉. 2.使陷入， 使插入： Zampó los zapatos nuevos en el barro. 他把新鞋踩进泥里. 3.摔： Zampó en el suelo la jarra de leche. 他把牛奶罐摔在了地上. 4.狼呑虎咽， 贪婪地吃喝. (也用作不及物自复动词).: Se zampó una docena de pasteles. 他一口气吃掉了十几块点心. |→ prnl. 1.掉进; 掉下： ~ se en el barro 掉进泥里. ~ sé de carro 从车上掉下. 2.钻进， 溜进： ~ se en la casa 溜进屋子. 3.闯入， 闯进."
  },
  {
    "number": 1632,
    "word": "a mansalva",
    "definition": "a mansalva: 大量地"
  },
  {
    "number": 1633,
    "word": "madriguera",
    "definition": "f. 1.(小动物的）洞，穴，窟，窝. 2.【转】（歹徒的）巢穴."
  },
  {
    "number": 1634,
    "word": "fumigar",
    "definition": "tr.烟熏消毒,熏蒸消毒."
  },
  {
    "number": 1635,
    "word": "estéril",
    "definition": "adj. 1.无结果的，无成效的，无效果的：trabajo ~无效果的工作. 2.不能生殖的，无生育能力的，不孕的：una mujer ~不能生孩子的女人. 3.贫瘠的(土地）；歉收的（年 景）4.果实不多的：un manzano ~—棵结果不多的苹果树. 5.作品不多的（作家）. 6.【医】无菌的，消毒的."
  },
  {
    "number": 1636,
    "word": "encuclillarse，acuclillarse",
    "definition": "encuclillarse, acuclillarse: 蹲下"
  },
  {
    "number": 1637,
    "word": "encantamiento",
    "definition": "m.着魔；着迷"
  },
  {
    "number": 1638,
    "word": "mítines",
    "definition": "mítines: 集会"
  },
  {
    "number": 1639,
    "word": "preñez",
    "definition": "f.1.妊娠，怀孕.2.【转】物的）正在处理状态,悬而未决状态.3.【转】困难，无头绪,不清楚."
  },
  {
    "number": 1640,
    "word": "afrenta",
    "definition": "f. 1. «hacer，inferir» 羞辱, 侮辱, 凌辱. 2. «ser» 耻辱. 3. 羞辱性惩罚."
  },
  {
    "number": 1641,
    "word": "ojeroso",
    "definition": "ojeroso, sa adj. «estar»眼圏发黑的，眼窝发黑的."
  },
  {
    "number": 1642,
    "word": "flaquear",
    "definition": "intr.1.衰竭，减弱: Le flaquean las fuerzas. 他没劲了. Me flaquea la cabeza. 我脑袋已经不好使了 . Ela- quea su voluntad. 他的劲头小了. 2.要支持不住：Ya flaquea la cuerda. 绳子要断.Flaquea la pared. 墙要塌.3. 软弱，不坚定，怯懦.«en» 4.不足，欠缺，有弱点，有缺失：Flaqueó en el ejercicio oral. 他口试考得差.Mi memoria flaquea en ese punto. 这一点我记得不确切."
  },
  {
    "number": 1643,
    "word": "especular",
    "definition": "intr.1.思索，推测.Especuló sobre la salida del conflicto. 他思考过解决冲突的出路。Estuvieron especulando sobre la posibilidad de abrir un nuevo negocio. 对于开办一家新商店的可能性，他们作了推测。2.做交易；做投机买卖 «en» ~en petróleo 经营石油贸易Especula en cereales. 他做粮食买卖。Unos especulan en bolsa, otros con pisos y terrenos edificables. 一些人炒股票，另一些人搞房地产投机。3. «con» 营私；利用Especula con los permisos de importación. 他利用进口许可证谋取私利。Ha especulado con las confidencias de su amigo para ganarse al jefe. 他利用朋友说的知心话赢得了老板的欢心。 |→ adj. 1.透明的，晶莹的;el brillo ~ de sus ojos 她那双晶莹明澈的眼睛2.镜子的，像镜子一样的;La imagen ~ de un objeto aparece invertida. 物体在镜子的影像是反过来的。Veía su rostro reflejado en la superfice ~ del lago. 他看见自己的脸映在明澈如镜的湖面上。"
  },
  {
    "number": 1644,
    "word": "altibajos",
    "definition": "m.1. 坎坷不平，高高低低2. 起伏，沉浮，兴衰例句：El enfermo tuvo altbajos de fiebre.病人的热度忽高忽低。"
  },
  {
    "number": 1645,
    "word": "mercenaria",
    "definition": "mercenaria: 雇佣兵"
  },
  {
    "number": 1646,
    "word": "un vuelco el corazón",
    "definition": "un vuelco el corazón: 心脏猛地一跳"
  },
  {
    "number": 1647,
    "word": "broche",
    "definition": "m. 1.按扣. 2.（装饰用的）扣针，别针. 3.[秘鲁方言], [波多黎各方言] 曲别针. 4.pl. [厄瓜多尔方言] 衬衫袖扣. cerrar con ~ de oro 完美地结束."
  },
  {
    "number": 1648,
    "word": "alhaja",
    "definition": "f. 1. (贵重的) 首饰, 服饰；摆设, 家具. 2. 【转】珍品, 珍宝, 贵重物品. 3. 【转, 口】出色的人物. ¡Buena ~ ! 【讽】 真是个宝贝！"
  },
  {
    "number": 1649,
    "word": "ignoto",
    "definition": "ignoto, taadj. 1.未知的. 2.没开发的."
  },
  {
    "number": 1650,
    "word": "depilado",
    "definition": "depilado: 脱毛的"
  },
  {
    "number": 1651,
    "word": "prostíbulo",
    "definition": "m.妓院."
  },
  {
    "number": 1652,
    "word": "estropajo",
    "definition": "m. 1.(刷洗用的）草把，刷帚. 2.【转】废物. 3.【植】丝瓜. 4.[古巴方言] 丝瓜瓤."
  },
  {
    "number": 1653,
    "word": "laca",
    "definition": "f. 1.虫胶，虫漆，虫脂，紫胶. 2.漆；真漆，中国漆，日本漆；清漆，清喷漆. 3.漆器. 4.发蜡. 5.胭脂红；洋红."
  },
  {
    "number": 1654,
    "word": "bravo",
    "definition": "bravo, va adj. 1.勇敢的，勇猛的. 2.大发雷霆的. 3.粗暴的. 4.用大话吓唬人的 .5.好用角顶的（牛）. 6.未驯的，难驯的 (禽，兽）. 7.野的（禽，兽）.8.凶猛的（禽，兽）. 9.波涛汹涌的（海）. 10. 陡嵴的，崎岖的. 11.未垦殖的.12.好的,极好的. 13.【转，口】壮丽的，壮观的. 14.[古巴方言]有野心的. ¡Bravo! 好哇！ 好极了！"
  },
  {
    "number": 1655,
    "word": "prieto",
    "definition": "prieto, ta adj.1. 深褐色的， 近似黑色的. 2. 吝啬的， 小气的. 3. 紧的."
  },
  {
    "number": 1656,
    "word": "sartal",
    "definition": "m.串."
  },
  {
    "number": 1657,
    "word": "palabrota",
    "definition": "f.粗话，骂人话"
  },
  {
    "number": 1658,
    "word": "galanteo",
    "definition": "m. 追求，献媚."
  },
  {
    "number": 1659,
    "word": "premonición",
    "definition": "f.1.预感.2.【医】预兆."
  },
  {
    "number": 1660,
    "word": "estría",
    "definition": "f.槽沟，条纹，凹纹."
  },
  {
    "number": 1661,
    "word": "pezón",
    "definition": "m.1.【植】（花、叶、果实的）柄，蒂.2.【解，动】乳头,奶头.3.Í转】柄状物，蒂状物；乳头状物，奶头状物.4.【转】（车辆的）轴头.5.【转】（某些器物的）端，头；把柄.6.【转】地角，海角.7.【转】轭杆."
  },
  {
    "number": 1662,
    "word": "velocípedo",
    "definition": "m. 早期的二轮脚踏车."
  },
  {
    "number": 1663,
    "word": "salpicado",
    "definition": "salpicado, da adj. 散布着(某物)的：un valle ~ de caseríos 农舍星罗棋布的山谷. una tela ~ a de motitas 点点花的布."
  },
  {
    "number": 1664,
    "word": "no darse por aludido",
    "definition": "no darse por aludido: 不当一回事"
  },
  {
    "number": 1665,
    "word": "sietemesino",
    "definition": "sietemesino, na adj. 1.妊娠七个月生的. (也用作名词)  2.【转，口】体弱多病的（人）.  (也用作名词)  3.【口】硬充大人的（小青年）. (也用作名词)"
  },
  {
    "number": 1666,
    "word": "mermar",
    "definition": "mermar(se) tr.-intr.-prnl.减少： ~a uno la paga 克扣工钱. ~ la ración de la tropa 削减部队给养. El sol merma el agua del estanque. 太阳一晒池塘里的水就减少了. La leche merma al hervir. 牛奶一煮就少了. Su entusiasmo no se ha mermado. 他的热情未减."
  },
  {
    "number": 1667,
    "word": "componer",
    "definition": "tr.1.组成，构成： ~ dibujos ornamentales con diversas flores  用各种花组成装饰图案.Más de cincuenta nacionalidades componen la nación china. 五十多个民族组成中华民族.Cien fen componen un yuan. 一百分为一元. (也用作自复动词): La comuna se compone de diez brigadas de produción. 那个公社有十个生产大队.2.创作；谱写（乐曲），写作（诗文)： ~ la música para un poema 为一首诗谱曲.  ~ una sinfonía 作一首交响乐曲.  ~ un libro 著一本书. ~ un drama 写一个剧. ~ versos 作诗. (也用作不及物动词)3.调制（食物，尤指冷菜和酒类）.4.修理，修补： ~ paraguas 修理雨伞.5.整理，收拾： ~ la casa para recibir visitas 收拾房间准备迎接客人.6.打扮，装饰. (也用作自复动词)7.使复原；使恢复原状： Una taza de té caliente te compondrá el estómago. 你喝一杯热茶胃就会好的.El descanso puede ~le a uno la energía y los ánimos. 休息可以调剂一个人的体力和精神.8.节制，克制，使平和.9.调停，调解，使和好，10.（用许诺或给好处等方法）使缄默，使不采取行动，使私下了结. 11.【印】排（字，版）.12.[南美洲拉普拉塔河流域方言]训练（赛马、斗鸡等）.13.[智利方言]，[墨西哥方言]  阉，劁，骟.14.[拉丁美洲方言]正骨. prnl.1.处理，应付；达到目的.2.«con» 妥协. ~ selas 处理，应付；达到目的."
  },
  {
    "number": 1668,
    "word": "guardabosque",
    "definition": "m.守林人，看林人."
  },
  {
    "number": 1669,
    "word": "heder",
    "definition": "intr.1.发出恶臭气味.2.【转】讨厌，烦扰."
  },
  {
    "number": 1670,
    "word": "dopado",
    "definition": "dopado, da adj.-s. 吸毒的； 吸毒的人."
  },
  {
    "number": 1671,
    "word": "espeluznante",
    "definition": "adj. 令人毛骨悚然的；使恐惧的，恐怖的. (也用作自复动词) "
  },
  {
    "number": 1672,
    "word": "desquiciar",
    "definition": "tr. 1. (把门、 窗等） 从框上卸下， 使从框上掉下来： ~una puerta 把门卸下来.  (也用作自复动词)： Tal era la tormenta. que parecía ~el cielo. 雨下得那么大，天简直就象要塌下来似的. 2. 【转】 弄乱, 搅乱， 打乱:  ~el plan 打乱计划. 3. 【转】 打乱生活习惯. (也用作自复动词) 4. 【转】 使失去信心, 使失去倚凭. (也用作自复动词) 5. 【转】 使茫然， 使不知所措. (也用作自复动词) 6. 【转】 严重影响（某人的情绪）. 7. 【转】 夸大, 夸张. 8. 【转】 间， 挑拨； 使失宠.  |→ prnl. (肢体)脱臼."
  },
  {
    "number": 1673,
    "word": "abedul",
    "definition": "m. 1. 【植】欧洲白桦. 2. 欧洲白桦木."
  },
  {
    "number": 1674,
    "word": "gatear",
    "definition": "intr.1.爬，爬行.2.爬高，攀登.|→tr.1.（猫）抓，挠.2.偷，窃. (也用作不及物动词)3.[墨西哥方言]勾引(女仆）.4.[阿根廷方言]追求 (女人）."
  },
  {
    "number": 1675,
    "word": "desbaratado",
    "definition": "desbaratado, da adj. 【转， 口】 1. 疯疯癫癫的， 胡乱的. 2. 生活没有条理的."
  },
  {
    "number": 1676,
    "word": "vapuleo",
    "definition": "m. 1. 摇晃2. 抽打3. 斥责"
  },
  {
    "number": 1677,
    "word": "trinquete",
    "definition": "m. 1.(防止齿轮倒轮的）棘爪， 掣子. 2.回力球板. 3.【海】前桅， 前樯. 4.【海】前桅帆； 前桅帆桁. 5.[阿根廷方言] 【口】高个子. a cada ~ 经常地， 一再地."
  },
  {
    "number": 1678,
    "word": "cómoda",
    "definition": "f.1.斗橱，衣柜.2.桌式柜."
  },
  {
    "number": 1679,
    "word": "papeleo",
    "definition": "m. 1.s.de papelear.2.纸堆.3.手续：reducir el ~ 简化手续."
  },
  {
    "number": 1680,
    "word": "sabueso",
    "definition": "sabueso, sa adj.嗅觉灵敏的，机警的(狗）.|→ m.,f. 1. 警 犬，猎犬. 2.【转】警察；侦探. 3.【转】敏锐的人,警觉的人."
  },
  {
    "number": 1681,
    "word": "guijarro",
    "definition": "m.卵石，圆石子."
  },
  {
    "number": 1682,
    "word": "bellaquería",
    "definition": "f. 1.卑鄙行径，无赖行径. 2.损人利己行为."
  },
  {
    "number": 1683,
    "word": "tramar",
    "definition": "tr. 1.【纺】织. 2.【转， 口】暗中策划： ~ una conspiración contra uno 阴谋策划反对某人. Está tramando una sorpresa para nosotros. 他正在准备让我们大吃—惊. |→ intr (树木， 尤指油橄榄)开花."
  },
  {
    "number": 1684,
    "word": "atuendo",
    "definition": "m. 1. (身上穿戴的) 服装, 装束, 衣着. 2. 华丽, 豪华."
  },
  {
    "number": 1685,
    "word": "conducto",
    "definition": "m.1.渠道，管道.2.【转】中介人，中间人.3.【转】途径，手段.4.【解】管，道. ~ auditivo externo 外耳道.  ~ auditivo interno  内耳道. ~ deferente 输精管. ~ he pático 肝管. ~ lacrimal 鼻泪管.por ~ de 通过，经，由： Lo he sabido por ~ del periódico. 我从报纸上知道了这件事.por ~ regular 通过正当途径."
  },
  {
    "number": 1686,
    "word": "pulposo",
    "definition": "pulposo，sa adj.肉多的."
  },
  {
    "number": 1687,
    "word": "basural",
    "definition": "m. [拉丁美洲方言] 垃圾堆，垃圾箱."
  },
  {
    "number": 1688,
    "word": "rebanar",
    "definition": "tr.1. (将某物) 切成片. 2. 切开， 劈开； 切断， 砍断， 使折断： De un tajo rebanó el árbol. 他一斧头把树砍断. La rueda le rebanó un dedo. 车轮子轧断了他的一个指头."
  },
  {
    "number": 1689,
    "word": "argüir",
    "definition": "intr. 1. «en apoyo, a  favor de; en contra de» 提出理由, 摆出道理, 发表意见： Mientras unos arguyen a favor, otros lo hacen en contra de la propuesta. 对那个建议, 有人支持也有人反对. 2. «con» 争辩；反驳： ~ con razones 据理力争. Arguyó con hechos contra los calumniadores. 他用事实对诽谤者进行了驳斥. 3. 成为理由： Eso arguye en favor de mi tesis. 那一点证明我的意见是对的. |→ tr. 1. 推断, 推论： De los medios arguyo el buen fin. 从这些措施上我可以断定结果一定很好. 2. 证明, 表明： Su acento arguye su lugar de nacimiento. 听他的口音就知道他是哪儿人. 3. 申辩, 分辩： Arguye que a él no le han avisado. 他申辩说没有人通知过他. 4. 指责, 指控."
  },
  {
    "number": 1690,
    "word": "desvarío",
    "definition": "m. 1. 谵妄. 2. 胡说八道， 胡作非为， 胡思乱想. 3. 乖僻， 任性. 4. 反常， 畸形， 怪物."
  },
  {
    "number": 1691,
    "word": "rufián",
    "definition": "rufián, ana adj.[古巴方言] 有趣的， 滑稽的. |→ m.1. 妓院老板. 2. 卑鄙之徒， 流氓， 无赖."
  },
  {
    "number": 1692,
    "word": "clocar",
    "definition": "intr. (母鸡）咕咕叫."
  },
  {
    "number": 1693,
    "word": "pagano",
    "definition": "pagano, na adj.1.【宗】非基督教的，异教的.2.【口】不信教的，不信神的.3.【口】代人受过的.|→m.,f. 1.【口】倒霄鬼，替罪羊：De todo lo que pasa, siempre es él el ~. 不管出什么事，总是他倒霉.2.[阿根廷方言]无知的人."
  },
  {
    "number": 1694,
    "word": "reñido",
    "definition": "reñido, daadj.不和的；相抵触的（con）；激烈的"
  },
  {
    "number": 1695,
    "word": "morada",
    "definition": "f.住宅"
  },
  {
    "number": 1696,
    "word": "cábala",
    "definition": "f. 1.(希伯来人关于《圣经》的）神秘传说，神秘解释. 2.神秘哲学. 3.【转，口】秘密活动，秘密勾当：andar meti do en una ~ 参与秘密勾当.4.【转】猜度，猜测，U.m.enpL"
  },
  {
    "number": 1697,
    "word": "ectoplasma",
    "definition": "m. 【动】 外胚层质； 外质."
  },
  {
    "number": 1698,
    "word": "bruma",
    "definition": "f. 1.雾；海雾. 2.pl.【转】头脑不清醒，糊涂."
  },
  {
    "number": 1699,
    "word": "reponerse",
    "definition": "克服"
  },
  {
    "number": 1700,
    "word": "desidia",
    "definition": "f. 1. 懒惰. 2. 邋遢."
  },
  {
    "number": 1701,
    "word": "habladuría",
    "definition": "f.1.流言蜚语,街谈巷议.(多用作复数)2.不合时宜的话，不投机的话."
  },
  {
    "number": 1702,
    "word": "chisme",
    "definition": "m. 1. «andar， ir, venir con; llevar; traer»  流言蜚语， 闲话. 2. 杂物， 家什. ~s y cuentos 流言蜚语， 闲话."
  },
  {
    "number": 1703,
    "word": "blanco",
    "definition": "blanco, ca adj. 1.白色的，白的. 2.白种的（人）.   (也用作名词) 3.(同类物品中）颜色浅的，颜色淡的. 4.【转，口】胆怯的，怯懦的. |→ m. 1.白色. 2.白色斑点. 3.空白点，空白处. 4. (文稿的）空白，脱漏：dejar un ~en la copia 在抄件上留一个空白. 5.幕间；幕间休息. 6.靶子：apuntar al  el  ~瞄准靶子. atinar al ~/ dar  en el ~/ hacer ~打中靶子. errar el ~脱靶. 7.目标,对象：ser el ~ de todas las miradas 成为注意的目标. ser un ~ de la revolución 是革命的对象. 8.猜中mis sospechas han hecho ~ 我的怀疑是对的。Diste en el~ con ese regalo. 你送这件礼物送对了。9.目的. 10.[洪都拉斯方言] 白蜜蜂agua ~a 【医】醋酸铅溶液. ~de ballena 鲸蜡. ~de cinc 铅白. ~de España 西班牙白[碳酸铅，碱式硝酸铋和白堊的通称].  ~  de huevo 用蛋壳制的化妆品. ~de la uña  指甲新月形斑. ~de plomo 铅白，碳酸铅白. ~como la nieve【转】天真无邪. calentar al ~烧到白热. en ~1. 空白的（纸页）.  2. « dejar » 使失望，使落空. 3. « estar » 无知，不知道(某事）.  4.  «espada» 出鞘的.  5. « quedarse » 没有听懂；没有读懂. ~del ojo 眼白. no distinguir lo ~ de lo negro 黑白不分."
  },
  {
    "number": 1704,
    "word": "precepto",
    "definition": "m.1.规定，命令.2.规则,法规.3.戒律."
  },
  {
    "number": 1705,
    "word": "masón",
    "definition": "masón，onam.f.共济会成员."
  },
  {
    "number": 1706,
    "word": "criollo",
    "definition": "criollo, llaadj. 1. 不在欧洲出生的（欧洲人）.   (也用作名词)  2. 拉丁美洲出生的（西班牙人，黑人).  (也用作名词)  3. 拉丁美洲本地的. 4. 起源于欧洲语言的（方言).  m. 一种香蕉."
  },
  {
    "number": 1707,
    "word": "sembrar",
    "definition": "tr. 1.撒播(种子）；播种(土地）. 2.【转】拋撒；散播，传播；散布:  ~ de flores el camino 在路上撒满鲜花. ~  rumores 散布流言. ~ (la) discordia    散布不和. ~ semillas de la revolución 散播革命的种子. Llevaba el bolsillo roto e iba sembrando monedas. 他的衣袋破了，边走边往外掉钱. No ha hecho más que ~ favores toda su vida. 他一辈子都在替别人作好事. 3. 推倒，弄倒. |→- intr. 准备条件，开始， 草创：Por ahora no hacemos más que ~ . 眼下我们做的还只是开个头. Los padres siembran y los hijos recogerán el fruto.父母出力， 儿女受益."
  },
  {
    "number": 1708,
    "word": "traspasar",
    "definition": "tr. 1.穿透， 刺透， 浸透: La bala le traspasó el abdomen. 子弹打穿他的腹部. La humedad traspasa el techo. 潮气浸透了天花板. 2.穿过, 走过（街道, 河流等). 3. 搬动, 移动， 挪动. 4.转让： ~ un piso 把房子让给别人租赁.  ~ un comercio 把店铺盘给人. 5.超出， 超过(限度)： ~ la capacidad de resistencia humana 超过人所能禁受的限度. Eso traspasa los límites de lo tolerable. 那超出了能够容忍的限度. 6.违犯. 7.【转】刺激： El silbido me traspasó el oído. 哨声刺耳. La escena me traspasó el corazón. 那一场面剌痛了我的心. 8.【转】使疼痛, 使痛苦： El pinchazo me traspasó. 刺扎得我很疼. Aquel grita de angustia le traspasó. 那一凄惨的叫声使我感到揪心. |→ prnl. 过分， 过度."
  },
  {
    "number": 1709,
    "word": "miembro viril",
    "definition": "miembro viril: 阳具"
  },
  {
    "number": 1710,
    "word": "viril",
    "definition": "adj. 1.男性的， 男人的； 男子汉的， 大丈夫气概的： acción ~大丈夫行为. 2.中年的， 壮年的(男人年纪)： edad ~ 中年， 壮年. |→ m. 1.玻璃罩. 2.【宗】（装在大圣体匣里面的）小圣体匣."
  },
  {
    "number": 1711,
    "word": "ingenioso",
    "definition": "ingenioso, sa adj. 1.聪明的， 有智慧的， 有才能的. 2.足智多谋的. 3.精巧的， 巧妙的."
  },
  {
    "number": 1712,
    "word": "ingeioso",
    "definition": "ingeioso: 巧妙的"
  },
  {
    "number": 1713,
    "word": "desgarrado",
    "definition": "desgarrado, da adj. 1. 不知羞耻的. 2. 放荡的， 浪荡的."
  },
  {
    "number": 1714,
    "word": "frenar",
    "definition": "tr.1.制动，刹住（车辆、机器等）： ~la bicicleta 刹住自行车.2.【转】控制，抑制，克制： ~el desarrollo 控制发展. ~ el crecimiento de la población 控制人口的增长. ~las pasiones 抑制感情.3.【转】阻止，制止；使有节制： Su mujer le frena para que no fume tanto. 他妻子不让他吸那么多烟.Su sentido de responsabilidad le frena en su deseo de dedicarse al descanso. 责任心使他不能想到休息."
  },
  {
    "number": 1715,
    "word": "desgarrar",
    "definition": "tr. 1. 撕破, 扯碎. (也用作自复动词) 2. «corazón. alma» 【转】 使碎，使难过. |→ intr. 咳嗽.|→ prnl. «de» 【转】 摆脱， 甩开（某人）."
  },
  {
    "number": 1716,
    "word": "enfrenar",
    "definition": "tr. 1.给（马）戴嚼子： ~ el caballo 给马戴上嚼子.  2.用嚼子勒，用嚼子指挥（马）. 3.«bien» 使（马）把头摆正，使扬起头. 4.(在车辆上)安装制动器： ~ un tren 给火车装上制动器. 5.【转】控制，制止： ~ las pasiones 控制感情. (也用作自复动词)"
  },
  {
    "number": 1717,
    "word": "azotar",
    "definition": "tr. 1. 打，鞭打. 2.（用尾、翼）扑打. 3.【转】（风）猛烈吹打：El viento me azotaba (en) la cara. 风如刀割似地吹着我的脸. 4.【转】（波浪）击打，拍击： El mar azota los peñascos. 海水拍击着岩石. 5.【转】危害，破坏，毁坏：Algunos lugares han sido azotados por graves calamidades naturales. —些地方遭受了严重的自然灾害.|→prnl. 1. [玻利维亚方言] 扑，冲. 2. [南美洲拉普拉塔河流域方言] 跳入水中."
  },
  {
    "number": 1718,
    "word": "azotaina",
    "definition": "f.一顿鞭打；一顿揍 "
  },
  {
    "number": 1719,
    "word": "vencer",
    "definition": "tr. 1.战胜， 击败， 打败； 征服， 制服： ~ al enemigo 战胜敌人. ~ al contrario 打败对手. ~ la naturaleza 战胜大自然. ~ el cansancio 战胜疲劳. ~ las pasiones 战胜感. Se esforzaba por no dormitarse, pero, al fin, le venció el sueño. 他努力不让自己打盹， 可是最后还是睡着了. 2.克服： Hemos vencido la mayor dificultad. 我们已经渡过了难关. 3.《en》 超过， 胜过： ~ uno a sus rivales 超过他的对手. Vence a todos en aplicación. 他比谁都用功. 4.使顺从， 使听话， 使听任摆布.5.忍受， 忍耐. 6.登上， 爬上（山顶）. 7.压垮， 压断， 压弯， 使倾斜： El peso de la fruta ha vencido la rama. 果实的重量压弯了树枝. Los libros eran tan pesados que vencieron la tabla del estante. 那些书那么重， 把书架隔板都压弯了. Llevaba la cesta tan llena que le vencía. 他背着那么一满筐东西压得他直不起腰来. (也用作自复动词)|→ intr. 1.胜利， 获胜， 取胜, 得胜； 达到目的： Vencerá, porque es perseverante. 他有恒心, 一定能够达到自己的目的. 2.《a》 压倒： El sol venció a las nu­bes. 阳光驱散了乌云. 3.到期： Mañana vence la letra. 汇票明天到期. El alquiler del local vence el día quince. 房租十五日到期.4.失效， 失去约束力. |→ prnl. 1.自制： Los hombres deben saber ~se. 人们要善于自制. 2.[智利方言] 耗损， 损耗. dejarse ~ 泄气， 认输： No te dejes ~ y sigue adelante. 你不能泄气， 要继续前进."
  },
  {
    "number": 1720,
    "word": "sacudir",
    "definition": "tr. 1. 摇晃,晃动：El viento sacudía las ramas de los árboles. 风吹动树枝. El terremoto sacudió la tierra. 地震使大地摇晃.2.使颤动：Le sacudió un escalofrío.他 打了一个寒颤. 3. 抖动. 4.拍打，敲打： ~ el colchón 拍打褥子.5.打，揍:Tiene miedo de que le sacudan si lo descubre. 他怕把那件事情说出来要挨揍. ~ a uno un palo  打 某人一棍子 .6.哄赶 (苍蝇，蚊子等）. (也用作自复动词)： El caballo se sacude las moscas con la cola. 马用尾巴哄赶苍蝇. 7.【转】打动，感动；震动, 资撼，震惊: Su discurso sacudió a todos los asistentes. 他的发言打动了所有的与会者. El triunfo de la revolución china sacudió el mundo. 中国革命的胜利震动了世界. 8.《de》【转】使猛醒，使摆脱：La invasión extranjera sacudió todo el pueblo de su entumecimiento político. 外国的侵略使全民族都从政治上的麻木状态中猛醒过来. |→ prnl. 1.抖掉： ~ se el polvo 抖掉身上的灰尘. 2.【转,口】摆脱, 挣脱： ~ se a  de  uno 摆脱某人. ~ se (de) la pobreza 摆脱贫困. 3. 【转，口】拒绝，回绝： ~ se (de) una petición 拒绝一个要求. 4.【口】掏出，破费金钱."
  },
  {
    "number": 1721,
    "word": "contener",
    "definition": "tr. 1. 包括，包藏，包含；含有，装有：Este tomo contiene 21 artículos. 这一卷包括二十一篇文章.Estas palabras contienen profundas verdades. 这些话包含着深刻的真理.Perdió la cartera que contenía unos documentos importantes. 他把装有重要文件的皮包丢了.2. 阻止，制止，控制，遏制：~ las inundaciones 挡住洪水. ~ la sangre de la herida 止住伤口的血.~ el avance de los enemigos 阻止敌人前进.3. 强忍，抑制，克制： ~ la indignación 忍住怒火 ~ las lágrimas 忍住眼泪.(也用作自复动词)：Tuve que ~me para no soltar groserías. 我强忍着没有骂街. Se contuvo de llorar. 他忍住没哭. 4. [智利方言] 意味着."
  },
  {
    "number": 1722,
    "word": "invalidar",
    "definition": "tr. 使无效，使失效."
  },
  {
    "number": 1723,
    "word": "preámbulo",
    "definition": "m.1.序言，前言，绪论.2.引子，开场白.3.«emplear, gastar, usar»【转】废话，拐弯抹角的言词."
  },
  {
    "number": 1724,
    "word": "manjar",
    "definition": "m. 1.食品，食物. 2.美味，佳肴. 3.【转】精神食粮.4.【转】享受，娱乐. ~ blanco 1 .米粉鸡脯羹. 2 .米粉杏仁羹. ~ espiritual精神食粮. ~ imperial 米粉蛋黄羹. ~ lento 蛋黄羹. ~ principal 面包蛋黄羹. ~ real 米粉羊腿羹."
  },
  {
    "number": 1725,
    "word": "coja",
    "definition": "f.参见 aramera."
  }
];