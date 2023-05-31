import {
  useState
} from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['SARS-CoV2', 'severe acute respiratory syndrome coronavirus2'],
      explanation: '新型コロナウイルスの名称',
    },
    {
      term: [
        'COVID-19',
        'coronavirus disease 2019',
        '新型コロナウイルス感染症',
      ],
      explanation: '新型コロナウイルス感染症の名称。ウイルスの名前ではない',
    },
    {
      term: ['バイオセーフティーレベル', 'BSL'],
      explanation: '実験室の封じ込めレベルのことで、3以上で新型コロナウイルスなど、4で最も危険な微生物を扱える。',
    },
    {
      term: ['アントニ・ファン・レーウェンフック'],
      explanation: '自作の顕微鏡で最近の存在を確認し、「微生物学の父」と呼ばれる。（1632-1723）原虫・真菌・細菌などを発見',
    },
    {
      term: ['エドワード・ジェンナー'],
      explanation: '天然痘の予防接種（種痘法）を開発した近代免疫学の父。(1749-1823)',
    },
    {
      term: ['パスツール'],
      explanation: 'ロベルト・コッホとともに近代細菌学の開祖と呼ばれる。(1822-1895)微生物が病原体である可能性を示唆し、加熱滅菌法・低温殺菌法・狂犬病ワクチンなどを発明した。病気の自然発生説を否定した。',
    },
    {
      term: ['ロベルト・コッホ'],
      explanation: 'パスツールとともに「近代細菌学の開祖」。(1843-1910)固形培地により炭そ菌・コレラ菌・結核菌などを培養することに成功。コッホの4原則（感染症発症・伝染の仕組み）を提唱',
    },
    {
      term: ['北里柴三郎'],
      explanation: '破傷風菌・ペスト菌などの発見に成功。日本の細菌学の父。(1853-1931)',
    },
    {
      term: ['志賀潔'],
      explanation: '赤痢菌を発見。',
    },
    {
      term: ['ゼンメルワイス'],
      explanation: '塩疎水で手を洗う事によって、産褥熱による死亡率を30%→1%未満に劇的に低下させた。権威主義的な学会の対応により科学の発展が遅れた例としても用いられる。',
    },
    {
      term: ['感染症'],
      explanation: '感染（微生物が生体に付着した状態）によって、（侵入・増殖することによって）症状が出現した状態。「感染」を不顕性感染と呼ぶのに対して、「感染症」は顕性感染と呼ばれる。',
    },
    {
      term: ['易感染宿主', 'compromised host'],
      explanation: '免疫不全などにより抵抗力が低下した宿主をさす。',
    },
    {
      term: ['再興感染症'],
      explanation: 'その感染症病原微生物は既に知られていて、それによる疾患の発生数は減少し、公衆衛生上殆ど問題とならない感染症と認識されていたが、近年再び増加してきたもの、あるいは将来的に問題となる可能性がある感染症。',
    },
    {
      term: ['天然痘', "疱瘡", "smallpox"],
      explanation: '1980年、WHOにより根絶を宣言された。撲滅できたのは、1.人以外に自然宿主を持たない、2.不顕性感染がない、3.患者の識別が容易、4.変異を起こしにくいDNAウイルス、5.きわめて有効なワクチンがあることが要因とされている。天然痘はポックスウイルス科（動物ウイルス最大/卵型のビリオン/非対称構造）に属する2本鎖DNAウイルスで、感染力が高い（飛沫感染・接触感染）。1種感染症指定',
    },
    {
      term: ['微生物'],
      explanation: '肉眼で見ることができない微小な生物。',
    },
    {
      term: ['真核生物'],
      explanation: '核膜やミトコンドリアをもつ生物。原核生物やウイルスとは違う特有のリボソームをもつ。',
    },
    {
      term: ['放線菌'],
      explanation: 'カビのような糸状の細胞や菌糸を生じる細菌で、土壌中に広く分布している。streptomyces属。抗生物質（ストレプトマイシン・エリスロマイシン・イベルメクチンなど）を生産する菌が多い。',
    },
    {
      term: ['球菌', 'coccus'],
      explanation: '分裂の方法によって球状の形態をもつ細菌。ブドウ球菌など',
    },
    // {
    //   term: ['バチルス', 'bacillus'],
    //   explanation: '分裂の方法によって桿状の形態をもつ細菌。大腸菌など',
    // },
    {
      term: ['らせん菌'],
      explanation: 'らせん状の形態をもつ細菌。ピロリ菌など',
    },
    {
      term: ['グラム染色'],
      explanation: 'クリスタルバイオレットですべての菌を紫色に染める→ルゴール液を加える→アルコールで脱色すると、薄いペプチドグリカン層のみが赤色～淡赤色に染まる。細胞膜の構造を反映するように細菌が染まり、多層のペプチドグリカンをもつ細菌は青紫→グラム陽性、単層のペプチドグリカン＋外膜構造をもつ細菌は赤色→グラム陰性となる。',
    },
    {
      term: ['莢膜', 'capsule'],
      explanation: '多糖類からなる細菌の細胞膜・細胞壁を囲う膜。菌体を食細胞から保護しているので、病原性を持つ。',
    },
    // {
    //   term: ['グラム陰性菌'],
    //   explanation:
    //     '大腸菌・緑膿菌・アシネトバクターなど。細胞膜のペプチドグリカン層が薄い、タイコ酸がない、リポ多糖体・リポタンパク・リン脂質（外膜の構成成分）がある。→細胞壁に外膜を持つ。',
    // },
    {
      term: ['プラスミド'],
      explanation: '細菌がもつ、染色体外の環状DNA。細菌の生存にとって必須でないDNA分子であるが、新規の毒素や薬剤耐性の遺伝子を接合・Hfrによって伝達し、耐性遺伝子の拡散に貢献している。Fプラスミド（大腸菌のDNA組み換えに関与する）・Rプラスミド（薬剤耐性遺伝子を有する）などいくつか種類がある。',
    },
    {
      term: ['鞭毛'],
      explanation: 'フィラメント状の運動器官。線毛とは役割が異なる。形態はさまざま。',
    },
    {
      term: ['芽胞'],
      explanation: '劣悪な環境に細菌がおかれると、環境抵抗性を持つ芽胞（休眠細胞）を形成する。耐熱性・乾燥に強く、消毒薬・抗菌薬に強い。',
    },
    {
      term: ['独立栄養菌'],
      explanation: '無機物質と二酸化炭素を利用してATPを蓄積し、これを利用することの繰り返しで増殖する細菌。',
    },
    {
      term: ['好酸性菌'],
      explanation: '乳酸桿菌など。多くの細胞はpH7.4付近を好むが、pHの低い環境を好む。',
    },
    {
      term: [
        '生きているが培養できない細菌',
        'VNC',
        'viable but non-culturable',
      ],
      explanation: 'まだ培養方法が確立されていない（未知の細胞・ハンセン病のライ菌など）、あるいは飢餓条件や塩ストレス下により増殖ができない状態の細菌（コレラ菌や大腸菌O157など）をあらわす。',
    },
    {
      term: ['調節遺伝子'],
      explanation: 'オペロンの発現を調節する遺伝子で、リプレッサーをつくる。',
    },
    {
      term: ['オペロン'],
      explanation: '機能的に関係あるタンパク質をコードする領域が複数連なっている。lacオペロンなど。',
    },
    {
      term: ['変異原', 'mutagen'],
      explanation: '変異誘発因子のことで、DNAに挿入されたり塩基をアルキル化したりすることによってDNAを傷つける物理的・化学的因子。',
    },
    {
      term: ['トランスポゾン', 'transposon'],
      explanation: 'ゲノム上のある部位から別の部位へ移動するDNA配列。挿入配列（転移酵素・反復配列）を両末端にもつ',
    },
    {
      term: ['コンピテント', 'competent'],
      explanation: 'DNAを取り込みやすい状態。細菌によってそれぞれ条件が異なる。',
    },
    {
      term: ['接合', 'conjugation'],
      explanation: '性腺毛sex piliを介したFプラスミドやRプラスミドの伝達をさす。',
    },
    {
      term: ['プロファージ'],
      explanation: '細菌を宿主とするファージのDNAが、細菌のゲノムに組み込まれた状態。溶原化した状態。',
    },
    {
      term: ['侵入門戸'],
      explanation: '微生物の進入部位。創傷・皮膚・粘膜（呼吸器粘膜・消化器粘膜・性器粘膜）・血液・皮膚など。',
    },
    {
      term: ['白血球障害性毒素'],
      explanation: 'たとえば黄色ブドウ球菌・緑膿菌はロイコシジンを産生し、補体や食作用に対する抵抗因子として作用する。',
    },
    {
      term: ['エンドトキシンショック'],
      explanation: 'LPS（原核細胞の表面構造）が血中に侵入すると、発熱・血圧低下を引き起こし、多臓器不全に陥ると死亡する危険性が高い。',
    },
    {
      term: ['粘菌'],
      explanation: '真核藻類で、自らの形を変化させながら生きる。餌と餌の最短距離を結ぶように分布する性質があり迷路を解くことで有名。',
    },
    {
      term: ['LPS'],
      explanation: 'リピドA + コア多糖 + O特異多糖 で構成されるリポ多糖（外膜の一部）。大腸菌など。',
    },
    {
      term: ['グラム陽性菌', 'gram-positive'],
      explanation: 'ブドウ球菌→MRSA/MSSA・連鎖球菌・乳酸菌・枯草菌・炭疽菌・破傷風菌・ボツリヌス菌・クロストリディオイデスディフィシル・マイコプラズマ・マイコバクテリア（結核菌などの抗酸菌）など。グラム染色で青色に染まる細菌。ペプチドグリカンに富む細胞壁が厚く、外膜を持っていない。細胞壁が比較的弱いので、球状であることが多い。桿菌は少し菌体が大きく(10μm前後)、芽胞を形成したりして病原性の高い菌が多い。',
    },
    {
      term: ['グラム陰性菌', 'gram-negative'],
      explanation: '淋菌・大腸菌・サルモネラ菌など。グラム染色で赤色に染まる細菌。LPSなどの外膜を持っていて、細胞壁が比較的薄い。細胞膜のペプチドグリカン層が薄い、タイコ酸がない、リポ多糖体・リポタンパク・リン脂質（外膜の構成成分）がある。→細胞壁に外膜を持つ。外膜を持つので桿状が多い（球状は淋菌ぐらい）',
    },
    {
      term: ['滅菌'],
      explanation: '病原菌・非病原菌を問わず、芽胞を含むすべての微生物を完全に死滅除去すること。',
    },
    {
      term: ['消毒'],
      explanation: '病原微生物を死滅あるいは不活化して、有害な感染症の微生物数を減少させること。非病原菌の残存・混入は問題としない。滅菌のように厳密ではなく、対象物中に生菌が生き残っていても、感染力のある病原体数を減らすことができればよい。',
    },
    {
      term: ['洗浄'],
      explanation: '病原微生物を殺菌あるいは減少させて感染を防ぐ操作を意味し、非病原菌の残存・混入は問題としない。',
    },
    {
      term: ['オートクレーブ', '高圧蒸気滅菌'],
      explanation: '高圧蒸気（121℃・15分・2気圧）と接触させることによって、微生物を殺滅する方法。信頼性・安全性・操作性が高く、残留毒素がなく、処理コストが安いことが長所として挙げられる。一方で素材に耐熱性・耐湿性が要求され、飽和水蒸気が十分いきわたらない場合には滅菌不良となってしまうところが短所。',
    },
    {
      term: ['high-level disinfection', '高水準消毒'],
      explanation: '大量の芽胞の場合を除いて、全ての微生物を殺滅する。毒性も高いため生体には使用できない、主に器具の消毒に使用する。過酢酸・過酸化水素・フタラール・グルタラールなど',
    },
    {
      term: ['intermediate disinfection', '中水準消毒'],
      explanation: '芽胞以外の全ての微生物を殺滅するが、中には殺芽胞性を有するものがある。塩素系消毒薬・ヨウ素系消毒薬・アルコール類など。',
    },
    {
      term: ['low-level disinfection', '低水準消毒'],
      explanation: '結核菌などの抵抗性を有する菌および消毒薬に耐性を有する一部の菌以外の微生物を殺滅する。生体に使用可能。第4級アンモニウム塩・クロルヘキシジングルコン酸塩など。',
    },
    {
      term: ['抗菌薬', '抗生物質', '合成抗菌薬'],
      explanation: '化学療法薬のうち、細菌に対して有効な薬剤を抗菌薬といい、そのうち微生物が産生していたものを抗生物質、人工的に合成されたものを合成抗菌薬とよぶ。抗菌薬は細胞にはあってヒトの体細胞にはないものをターゲットにすると都合が良く、細胞壁合成阻害・タンパク質合成阻害（←リボソームの種類の違い：70S）・核酸合成阻害（←構造の異なるⅡ型トポイソメラーゼ）・葉酸合成阻害（←ヒトは葉酸を体内で合成できない）・細胞膜合成阻害（←ヒトの細胞壁にもリン脂質があるため副作用が強い傾向）などによって選択的に細菌のみに毒性を発揮する。',
    },
    {
      term: ['βラクタム系'],
      explanation: 'βラクタム環を基本構造としてもつ抗菌薬をβラクタム系抗菌薬とよぶ。ペニシリン・セファロスポリン・カルパペネムなど。ヒトの細胞に対する毒性が低く、古くから使用されておりエビ炎巣も蓄積されているため、臨床でよく使われる(65%)抗菌薬。細胞壁合成阻害作用があり、副作用としてアナフィラキシーが確認される。',
    },
    {
      term: ['バイオアベイラビリティ'],
      explanation: '投与した薬剤が血中に移行する割合。血管注射の場合は100%となるが、それ以外の場合は腸管での吸収率や肝臓のファーストパス効果次第でバイオアベイラビリティが下がる。バイオアベイラビリティが不良な抗菌薬として第3世代セフェム系抗生物質（すべて50%以下）マクロライド系抗生物質・バンコマイシンが該当する。',
    },
    {
      term: ['抗菌域', '抗菌薬スペクトル'],
      explanation: '抗菌薬が抗菌活性を有する微生物の範囲。ペニシリン系抗生物質などはスペクトルが狭く、カルバペネム系薬・ニューキノロン系薬などはスペクトルが広く、広域（スペクトル/ブロード）抗菌薬と呼ぶ。幅広い細菌に対して有効なので重宝されるが、薬剤耐性菌の影響を受けやすい。',
    },
    {
      term: ['PKPD理論', 'PK-PD'],
      explanation: 'PK:PharmacoKinetics（薬物動態）/PD:PharmacoDynamics（薬力学）。薬物の特性を最大限に発揮するように最適な投与量と投与法を考え、それを駆使して最も効果的で安全な薬物療法を行うこと。',
    },
    {
      term: ['ステロイド', "steroid"],
      explanation: '抗がん剤治療などで用いられる。抗炎症薬。内服中は免疫力が低下し、食道カンジダ（口腔カンジダ）症などを発症する。',
    },
    {
      term: ['真菌', "fungus"],
      explanation: '真菌はβグルカンを含んだ細胞壁を持つ。基本的に免疫力が低下した状態でないと感染しないが、免疫抑制剤の使用増加によって深在性真菌症は増えてきている。診断が難しい→糸状菌では形態学的に同定することが基本で、検査者の技量に大きく左右されてしまう。現在β-Dグルカンに対するバイオマーカーを開発中。糸状菌（アスペルギウスなど / 形態が糸状）・酵母菌（カンジダ・クリプトコッカスなど / 形態が球状）・二形性真菌（両方の形態を持つ）。',
    },
    {
      term: ['カンジダ'],
      explanation: '酵母菌で培養すると甘い香りがする。カンジダ性心内膜炎などは即手術が必要。致死率は3割～5割。カンジダ血症になると症状が消失してから2週間、心内膜炎に発展すると6週間以上、高額な抗真菌薬を使用しなければならなくなる。',
    },
    {
      term: ['アスペルギウス'],
      explanation: '診断が難しい糸状菌（真菌）のひとつ。分生子の微妙な形態で菌種を想定しないといけない。ほこりの中に多く、ほぼ空気感染→肺に発症する。どの薬も効かない種類もあるが、特にアスペルギルスにフルコナゾールは効かない。侵襲性肺アスペルギルス（holo sign => air crescent sign / 予後不良）・副鼻腔アスペルギルス（骨を破壊するので外科的摘出が第一選択で、VRCZ点滴なども）・単純性肺アスペルギルス（肺結核などで肺の構造が壊れている時など / 数か月単位で悪化していく）・アレルギー性肺アスペルギルス（アレルギー症状 / 治療はステロイドで）など。',
    },
    {
      term: ['クリプトコッカス'],
      explanation: '鳥の糞などから検出される、真菌のひとつ。健常者でも発症する。肺や中枢神経（脳）に病変ができる場合が多い。ステロイド服用やエイズ罹患時で細胞性免疫不全者で特に発症しやすい。肺クリプトコッカス症は基本無症状で、すぐに治療が必要なわけではないが、中枢神経合併を避けるために髄液検査が必須→治療はアゾール系薬を投与する。クリプトコッカス髄膜炎は健常者は感染しないが、細胞性免疫低下時にのみ発症する。脳圧が異常に上粗油するので治療が必要だが、治療が難しくケースバイケース。',
    },
    {
      term: ['AmphotericinB', "ポリエン系"],
      explanation: '抗真菌薬のひとつ。細胞膜のエルゴステロールに直接して細胞膜を破壊する。カンジダ・アスペルギルス・クリプトコッカスなど幅広い真菌に有効。腎障害の副作用がある。',
    },
    {
      term: ['キャンディン系', "Micafungin"],
      explanation: '細胞壁1,3-β-Dグルカン生合成阻害剤（抗真菌薬）。カンジダ・アスペルギルスに有効。点滴でしか存在せず、分子量が大きいため目の奥などには届かない場合がある。細胞壁をターゲットにするため比較的安全',
    },
    {
      term: ['アゾール系'],
      explanation: '細胞膜を構成するエルゴステロール合成阻害剤（抗真菌薬）。カンジダ・クリプトコッカスだけに有効→アスペルギルスにも効くようになった新薬（ボリコナゾールVRCZ・イトリコナゾールITCZ）が最近発売された。ムコール症（これまで治療が難しい菌種）にも効くようになった薬も開発されている。薬の飲み合わせが多く、使用時は注意が必要。',
    },
    {
      term: ['ピリミジン系'],
      explanation: '飲み薬でDNA合成阻害作用を持つ抗真菌薬。カンジダ・クリプトコッカスにしか効かない。単剤で使うことはなく、他の抗真菌薬と併用することが基本。白血球や血小板の合成を阻害する副作用がある',
    },
    {
      term: ['Candida auris'],
      explanation: '2009年に日本で発見された菌種。多剤耐性があり、院内感染の病原体のひとつ。同定が難しく、遺伝子検査で初めて見つかるなど、厄介な真菌。',
    },
    {
      term: ['ESBL', "extended-spectrum β-lactamase", "基質特異性拡張型βラクタマーゼ"],
      explanation: '基質特異性拡張型βラクタマーゼ。Class A型のβラクタマーゼ（ペニシリナーゼ）が変異し第3世代・第4世代セファロスポリン系薬やモノバクタム系薬なども加水分解できるが、セファマイシン・カルバペネム系薬の分解は苦手。クラブラン酸CVAなどの阻害薬と併用することで対処可能。2000年以降肺炎桿菌・大腸菌からの検出が増加し、市中感染が見られるようになった。',
    },
    {
      term: ['Shigella', "細菌性赤痢"],
      explanation: '志賀先生から名付けられた菌。赤痢菌が、患者の糞便に汚染された手指・食品・水などを介して経口感染し発症する。志賀毒素→腸管出血性大腸菌によくにたベロ毒素を産生。数日の潜伏期の後に下痢・発熱・赤い便が出てくる。補液・抗菌薬での治療が可能で、予後良好。',
    },
    {
      term: ['Salmonella', "サルモネラ"],
      explanation: '爬虫類・哺乳類・鳥類など幅広く自然界に存在する菌のひとつ。強力な鞭毛をもち、周毛菌ともよばれる。チフス性サルモネラはチフス性疾患（腸チフス・パラチフスともに三類感染症 / 高熱と三大症状：比較的徐脈・バラ疹・脾腫）を呈し、非チフス性サルモネラは食中毒を呈する。',
    },
    {
      term: ['Yersinia', "ペスト", "エルシニア"],
      explanation: 'ペスト菌による全身性疾患。黒死病と呼ばれ猛威をふるった。ヒトへの伝染力が極めて高く、１類感染症に分類される。現在では抗菌薬により治療が可能。ネズミとネズミノミ間の伝播が主流であるが、一部が猫・犬・人に伝染する。',
    },
    {
      term: ['Klebsiella', "クレブシェラ"],
      explanation: '厚い莢膜を有する細菌で、肺炎桿菌などが臨床上重要である。ペニシリン系薬に自然体制を持つ。院内感染・日和見感染が多く、近年ではESBL産生耐性菌が増えている。糖尿病・アルコール多飲者・肝疾患に肺炎患者が多い。',
    },
    {
      term: ['Serratia', "セラチア"],
      explanation: 'セラチア・マルセッセンスは健常人の腸管内に常在することもあるが、多くは土壌や院内環境に存在する。院内感染で重要。',
    },
    {
      term: ['vibrio', "ビブリオ"],
      explanation: '全てに運動性がある、グラム陰性通性嫌気性菌。多くの種は好塩性で海水や河川水、魚介類から分離される。コレラ（３類感染症）・腸炎ビブリオなど',
    },
    {
      term: ['Aeromonas'],
      explanation: 'Aeromonas spp.は広く河川や土壌に常在し、感染症治療の切り札とされるカルバペネム系抗菌薬を分解してしまう。',
    },
    {
      term: ['緑膿菌', "Peudomonas aeruginosa"],
      explanation: '好気性・グラム陰性桿菌・一本の鞭毛・緑の色素を産生するブドウ糖非発酵菌。水回りには必ず生息している→乾燥に弱い。日和見感染・院内感染の原因となる。多くの抗生物質や数種類の消毒剤に自然耐性がある。ポーリン（外膜の孔）のサイズが小さく数が少ないため。病原性は少ないが、多剤耐性緑膿菌が問題となっている→５類感染症。バイオフィルム形成（筋同士が固まって防御反応、抗菌薬から守られる）',
    },
    {
      term: ['アシネトバクター', "A.baumanii", "Acinetobactoer"],
      explanation: '好気性・グラム陰性桿菌・鞭毛がない。日本では少ないが、海外では多剤耐性のアシネトバクター（・バウマニ）が増えている→５類感染症。広く生息していて、乾燥に強く、院内感染の場合は病棟内をアルコールで消毒する必要がある。',
    },
    {
      term: ['レジオネラ', "Legionella"],
      explanation: '好気性・グラム陰性桿菌・芽胞を形成しない。偏性細胞内寄生性病原体。温泉や循環式浴槽などで市中感染が多い。４類感染症。主に肺炎を起こす。一般的に軽症で数日で治ることが多く、急激に重症となり死亡する事もある。治療しないと死亡率15％。',
    },
    {
      term: ['ボルデテラ', "Bordetella"],
      explanation: '百日咳菌。グラム陰性好気性桿菌。芽胞を形成しない。レプリーゼ（呼気性喘鳴）が特徴的。4種混合ワクチンに含まれている。特殊培地でしか培養できない。マクロライド系抗生物質で治療する。',
    },
    {
      term: ['ブルセラ', "Brucella"],
      explanation: 'グラム陰性好気性桿菌。細胞内寄生性',
    },
    {
      term: ['バルトネラ', "Bartonella"],
      explanation: '猫ひっかき病。グラム陰性好気性桿菌。猫に引っかかれた後数日で発熱など。多くは自然治癒する。',
    },
    {
      term: ['インフルエンザ菌'],
      explanation: 'グラム陰性短桿菌。インフルエンザの原因と誤解されていた菌。チョコレート寒天培地でコロニーをを形成する。ヘモフィルスID4分画培地で同定される。莢膜株のHib型は全身感染症を起こし悪性。Hibワクチンの開発により、無莢膜型（弱毒性）の感染が拡がっている。中耳炎など。βラクタム系薬剤耐性をもつ場合がある→BLPAR(βラクタマーゼ産生),BLNAR,BLPACR',
    },
    {
      term: ['淋菌'],
      explanation: 'ペニシリン耐性淋菌の増加が問題となっている。',
    },
    {
      term: ['髄膜炎菌', "N.meningitidis"],
      explanation: '流行性髄膜炎の原因菌。飛沫感染するが日本では感染例が少ない。治療としては抗菌薬の点滴。',
    },
    {
      term: ['モラクセラ', "moraxella"],
      explanation: '代表的には乳幼児・学童の鼻咽腔に常在しているMoraxella catarrhalisが重要。ペニシリン耐性をもたらすペニシリナーゼ(β-ラクタマーゼ)を産生しindirect pathogenとしての働きがある。',
    },
    {
      term: ['efflux pump'],
      explanation: '排出ポンプ。グラム陰性菌がβラクタム系抗菌薬に耐性を持つ機構のひとつ。',
    },
    {
      term: ['βラクタマーゼ'],
      explanation: 'βラクタム系抗菌薬を加水分解し、抗菌力を失活させてしまう酵素。いくつかの分類があり、それぞれに基質（抗菌薬）特異性が違う。例えばClass Aはペニシリンと第1世代・第2世代のセファロスポリンに対して分解能をもつ。βラクタマーゼ遺伝子はプラスミドや染色体に含まれていて、プラスミドの場合は接合伝達によって移行されることがある。',
    },
    {
      term: ['脱抑制型'],
      explanation: '抗生物質に対する酵素（βラクタマーゼなど）を、抗菌薬に暴露されたときにだけ産生する誘導型であった細菌から、調節遺伝子の機能が破綻して常にβラクタマーゼを産生するようになった状態。',
    },
    {
      term: ['ペニシリナーゼ', "Class A β-lactamase", "クラブラン酸"],
      explanation: 'β⁻ラクタム系抗菌薬であるペニシリン・セファロスポリンの第1世代のみ加水分解する。クラブラン酸CVAによって阻害されるので、抗菌薬によっては併用されることもある。大腸菌・肺炎桿菌・インフルエンザ菌などのプラスミド、K.pneumoniaeなどはもともと耐性あり（染色体型）',
    },
    {
      term: ['セファロスポリナーゼ', "Class C β-lactamase", "AmpC"],
      explanation: 'ペニシリン・セファマイシン・第1～第3セファロスポリン系、モノバクタムを加水分解する。第4世代セファロスポリン、カルバペネム系の分解は苦手。多くはプラスミド型ではなく染色体型。E.coliやアシネトバクターが常時産生型:大腸菌はアテニュエーターによって制御されているが変異すると多量産生株となり耐性が強まる。その他誘導型も存在する。→通常であれば脱落すれば分解されるペプチドグリカンが、β-ラクタム系抗菌薬によってペプチドグリカンの脱落量が増えると分解しきれず普段AmpC合成を阻害していたタンパク質を阻害することでAmpC合成が行われ、β-ラクタム系抗菌薬を加水分解してしまう。',
    },
    {
      term: ['カルバペネマーゼ', "Class B β-lactamase", "CRE", "Carbapenem-resistant Enterobacteriaceae"],
      explanation: 'メタロ-β-ラクタマーゼ。活性中心は亜鉛。多くはプラスミドによる酵素で伝播してしまう。ペニシリン・セフェム・カルバペネム系薬を加水分解してしまう。モノバクタム系は苦手だが、多くの場合は別の菌によって分解されてしまう。最近はClassB型だけでなくClassAなど他の耐性菌でもカルバペネム系への耐性を獲得していることが増えていて、世界的に問題となっている。CRE:カルバペネム耐性菌',
    },
    {
      term: ['One Health'],
      explanation: 'ヒトだけでなく、家畜や野生生物の健康・自然環境の欲全もまとめて考えていくこと。2004年米国野生生物保全学会が健康のために提唱',
    },
    {
      term: ['staphylococcus', "ブドウ球菌"],
      explanation: '直径薬1μmのぶどう房状の球菌。鞭毛・芽胞はなく、カタラーゼ陽性:酸素を分解する酵素→通性嫌気性。黄色ブドウ球菌（普通の培地に生えてきたときに黄色の色素を産生する/糖のひとつで培地に使われるマンニット分解能あり→マンニット寒天培地を黄色に変化させる/コアグラーゼ=血漿凝固作用産生能あり/耐塩性）・表皮ブドウ球菌(CNS:Coagulase-negative staphylococci)・腐性ブドウ球菌(CNS:Coagulase-negative staphylococci)など。ほとんどのブドウ球菌がペニシリン耐性をもっている。',
    },
    {
      term: ['マンニット', "マンニット食塩寒天培地"],
      explanation: 'マンニットを含んだ寒天培地。マンニット分解能をもつ黄色ブドウ球菌ならマンニットを分解してH⁺を産生するのでフェノールレッドが赤→黄色に変化する。黄色ブドウ球菌自体も黄色色素を産生する。',
    },
    {
      term: ["腸管毒", 'エンテロトキシン', "enterotoxin"],
      explanation: '細菌が産生する毒素。黄色ブドウ球菌・コレラ菌・腸管出血性大腸菌O-157などが産生した毒素は、食事直前に加熱しても無毒化されないので食中毒の原因となる。',
    },
    {
      term: ['TSS', "毒素性ショック症候群", "Toxic shock syndrome"],
      explanation: '高熱。頭痛・発疹・落屑を伴うショック。スーパー抗原とよばれる毒素による疾患。新生児TSS様発疹症NTEDなど。',
    },
    {
      term: ['SSSS', "ブドウ球菌性熱傷様皮膚剝離症候群", "Staphylococcal scalded skin syndrome"],
      explanation: '細菌の毒素によって皮膚顆粒層が解離・壊死してしまう。',
    },
    {
      term: ['化膿性病変'],
      explanation: '滲出物に多量の好中球を含む炎症。滲出=炎症によって血管壁や組織の性質が変化して血液や組織液が血管外に染み出ること。膿瘍・蜂窩織炎・蓄膿など。治療として以前はペニシリンが著効していたが、現在はほぼすべてがペニシリナーゼ産生株。→グラム陽性細菌には細胞壁抑制抗菌薬が効くことが多いがMRSAなども増加中。',
    },
    {
      term: ['MRSA', "Methicillin-resistant Staphylococcus aureus", "メチシリン耐性黄色ブドウ球菌"],
      explanation: '黄色ブドウ球菌のうちさらに耐性を獲得した多剤耐性菌。細胞膜のペニシリン結合蛋白の結合親和性が低下することによって耐性を獲得している。５類感染症（定点調査）に分類されている。ファージの一種が耐性遺伝子mecAを媒介してメチシリン耐性PBP(PBP2’)を獲得する。MRSAは自然発生しないため発見された場合は院内感染が疑われる。',
    },
    {
      term: ['Dysbiosis'],
      explanation: '皮膚や腸管などの常在細菌叢の構成異常。様々な疾患の影響を受けて細菌叢は変化しているため、マーカーとして利用できないか研究されている。',
    },
    // {
    //   term: ['Streptococcus', "Enterococcus", "連鎖球菌", "レンサ", "溶連菌"],
    //   explanation: '直鎖状→Strepto、腸内の→Entero。溶血性による分類が行われ、溶血性毒素を産生する場合は完全溶血を起こしβ溶血と分類される。その他、部分溶血の場合はα溶血、非溶血の場合はγ溶血に分類される。Lancefieldの分類によって細胞壁の多糖体抗原により分類される方法もある→化膿性連鎖球菌の分類などに利用される。肺炎球菌(α溶血)・溶連菌(β溶血)・腸球菌など(γ溶血)など。グラム陽性菌などでペニシリン系抗菌薬が著効。劇症型溶血性連鎖球菌感染症は人食いバクテリアと呼ばれ、恐れられている（スーパー抗原によるサイトカインストームにより死亡率30~40%）→５類感染症。',
    // },
    {
      term: ['敗血症', "Sepsis", "菌血症"],
      explanation: '敗血症は感染症を契機として生じたSIRS:systemic Inflammatory response syndromeと定義されている。菌血症は本来は無菌であるはずの血液から菌が検出される状態をさしている。多くの敗血症で菌血症を合併するが、敗血症＝菌血症ではなく、菌血症を合併しないほうが当然予後が良い。',
    },
    {
      term: ['指定感染症'],
      explanation: '１類～３類感染症。新型インフルエンザを除く既知の感染症であって、毒性が高い。指定されている数は少ない。2021年1月31日まで新型コロナも指定されていた。',
    },
    {
      term: ['GBA', "B群レンサ球菌", "Streptococcus agalactiae"],
      explanation: '咽頭部・直腸・膣の常在菌で、成人には尿路感染症をきたすことがあり、産道感染によって新生児髄膜炎や新生児敗血症を引き起こす。',
    },
    {
      term: ['肺炎球菌', "Streptococcus pneumoniae"],
      explanation: 'グラム陽性の通性嫌気性の双球菌。莢膜を持ち白血球に貪食されにくい。一部の健常人の上気道に常在していて、ウイルスによる風邪などの二次感染が多い→市中肺炎の代表的起因菌。ペニシリン耐性菌PRSPが増加していて、セフェム・マクロライド系・キノロン系が投与される。ワクチンがある。',
    },
    {
      term: ['炭そ菌', "炭疽菌", "Bacillus anthracis"],
      explanation: 'グラム陽性通性嫌気性で大型桿菌。鞭毛なしで芽胞を形成する。皮膚炭疽の8割は10日程度で治癒するが、治療しないと敗血症になりやすい。肺炭疽は致命的で24時間以内に死亡する。→4類感染症、バイオセーフティーレベル3',
    },
    {
      term: ['クロストリジウム', "clostridium"],
      explanation: '腸管や土壌中に存在する。人に病原性を示すのは破傷風菌（偏性嫌気性菌で神経毒として破傷風毒素テタノスパスミンを産生する）・ボツリヌス菌・ガス壊疽菌群など。',
    },
    {
      term: ['神経毒', "neurotoxin"],
      explanation: '破傷風菌→テタノスパスミンやボツリヌス菌→ボツリヌス毒素が出し、神経に作用する外毒素。',
    },
    {
      term: ["ディフィシル", "Clostridioides difficile"],
      explanation: '大型桿菌でグラム陽性細菌。偏性嫌気性。ヒトや動物の腸管内常在菌(5~10%)。芽胞を形成し院内感染原因菌として重要。腸内細菌叢が乱れる事によって、CDAD（ディフィシル関連下痢症）などを発症する。外毒素をもち、治療としてはバンコマイシンを用いる。',
    },
    {
      term: ['MIC', "最小発育阻止濃度", "minimum inhibitory concentration"],
      explanation: '抗菌薬の培地による希釈系列を作製し、試験菌が増殖できなくなる最小の濃度を求める方法。寒天培地(Mueller-Hinton培地など)による希釈系列で調べる方法→寒天希釈法や、96穴プレートで液体培地による希釈系列で調べる方法→液体希釈法がある。',
    },
    {
      term: ['PRSP', "Penicillin-resistant Streptococcus pneumoniae", "ペニシリン耐性肺炎球菌", "PISP"],
      explanation: '日本で特に多い、ペニシリン耐性をもつ肺炎球菌。ペニシリンはPBPに結合することで作用を示すが、PBPに対応する遺伝子に変異が生じることで、ペニシリンとの親和性が低下し耐性を獲得する。耐性DNAは形質転換により速やかに拡散する。中等度の耐性を持つ場合はPISPとも呼ばれる。',
    },
    {
      term: ['マクロライド'],
      explanation: 'タンパク質合成阻害作用をもつ抗菌薬。PRSP（ペニシリン耐性肺炎球菌）などに用いられるが、耐性菌も増加している。',
    },
    {
      term: ['イベルメクチン'],
      explanation: '北里大学大村博士が開発しノーベル賞を受賞。放線菌の一種が生成するアベルメクチンの化学誘導体。',
    },
    {
      term: ['VRE', "バンコマイシン耐性腸球菌", "Vancomycin-resistant Enterococcus"],
      explanation: 'グリコペプチド系抗菌薬バンコマイシン耐性をもつ腸球菌。腸球菌は腸管内に常在している菌で、病原性は低いが、院内感染のリスクが高く５類感染症に分類されている。自然環境で数か月生存することができる。VRE保菌者の便や尿から長期間排出されるため、感染予防は接触感染予防策がとられる。日本では症例が少ないが、世界的には多く今後広がっていく可能性がある。バンコマイシンは細胞壁の合成を阻害するが、作用部位に変異が生じることによって耐性を獲得する。治療薬としてはアンピシリンやリネゾリドが挙げられるが、病原性がない場合は治療しないこともある。',
    },
    {
      term: ['VRSA', "Vancomycin-resistant Staphylococcus aureus", "バンコマイシン耐性ブドウ球菌"],
      explanation: 'グリコペプチド系抗菌薬バンコマイシンの耐性をもつブドウ球菌。2002年に発生。鈴木博士は2010年ノーベル賞を受賞した。バンコマイシンは細胞壁の合成を阻害するが、作用部位に変異が生じることによって耐性を獲得する。',
    },
    {
      term: ['one health approach', "ワンヘルス", "global health"],
      explanation: 'ヒト・動物・環境すべてを考慮して健康を維持しようという考え方。新しい病原体や薬剤耐性菌はヒトからだけでなく、家畜・ペット・自然動物・下水処理・野菜・環境汚染からも発生し、ヒトへ広がっていく。',
    },
    {
      term: ['梅毒', "treponema pallidum"],
      explanation: 'らせん状の微生物。梅毒感染の大部分は性行為によるが、胎盤を通じて感染する先天梅毒の場合もある。梅毒血清反応により検出され、治療法としてはペニシリンが第一選択となるが、Jarisch-Herxheimer現象(梅毒トレポネーマの破壊に伴う強い症状発現)に注意。5類感染症で全数報告対象。SNSマッチングアプリの普及が影響している可能性が高く、男性は全年齢、女性は20~30代の新規感染者が多い。コロンブスが持ち込んだといわれている。３つの臨床段階があり、1期(3週間～3ヶ月)では初期硬結など、2期(～3年)では発熱など、3期(数年～)ではゴム腫などの症状がある。昔は鼻などが削げ落ちたりしていた。針刺し事故での感染はあるが輸血での感染は稀。',
    },
    {
      term: ['回帰熱', "Borrelia", "ボレリア"],
      explanation: 'シラミやダニによって媒介され、治療法がそれぞれシラミ→テトラサイクリン系との併用、ダニ→テトラサイクリン単独となる。40度を越す発熱と解熱を繰り返す症状が特徴。',
    },

    {
      term: ['ライム病', "Bprrelia burgdorferi"],
      explanation: 'シカやネズミが菌を保有していて、これらを吸血するマダニが媒介する感染症。欧米で多く、日本全国で毎年15人前後報告されている。',
    },
    {
      term: ['レプトスピラ症', "Leptospira interrogans"],
      explanation: '人畜共通感染症。野生動物や家畜・ペットなどの腎臓が保菌していて、尿で汚染された水や土壌や尿そのものから経皮的に感染する。潜伏期間は5~14日で、4類感染症で全数報告対象。重症では黄疸・出血・腎障害（ワイル病）を引き起こし、ペニシリンを投与することとなる。',
    },
    {
      term: ['カンピロバクター'],
      explanation: 'グラム陰性桿菌で食中毒を引き起こす→年間2000人前後。鶏肉や飲料水、ミルクから経口感染する。症状としては下痢・腹痛・発熱・ギランバレー症候群など。エリスロマイシン・シプロフロキサシンが有効だが、セフェム系抗菌薬には自然耐性をもつ。',
    },
    {
      term: ['マイコプラズマ', "Mycoplasma pneumoniae"],
      explanation: 'グラム陰性で、細胞壁を持たない細菌。細胞壁を狙った抗菌薬(ペニシリンなど)は効かない。肺炎の原因第6位。自己増殖可能な最小な微生物で、最近濾過用のフィルターは通過してしまう。飛沫感染と接触感染によりマイコプラズマ肺炎を発症し、発熱・全身倦怠・頭痛など。典型的な胸部X旋所見（間質性の淡い浸潤像）が特徴的。',
    },
    {
      term: ['リケッチア', "Rickettsia", "発疹チフス", "ロッキー山紅斑熱", "日本紅斑熱", "ツツガムシ病"],
      explanation: 'リケッチア症は様々な病原菌によって引き起こされる疾患で、発疹チフス（コロモジラミ媒介・ヒト保有）・ツツガムシ病（ツツガムシ媒介）・ロッキー山紅斑熱(マダニ媒介)・日本紅斑熱（日本の風土病でキチマダニ・フタトゲチマダニ・ヤマトマダニなどが媒介）などに分類される。日本ではツツガムシ病や日本紅斑熱が増加傾向。偏性細胞内寄生性細菌。短桿菌・球桿菌状など多型。ノミ・シラミなど節足動物により媒介される。',
    },
    {
      term: ['クラミジア', "Chlamydiae", "トラコーマ"],
      explanation: 'クラミジアは自己増殖できない偏性細胞内寄生細菌で、特殊な増殖サイクル（基本小体EBによる感染・伝播/網様体RBによる増殖）、特殊な細胞壁を持つ。病原性を持つのはトラコーマ/性器クラミジア(血清型A~Cは慢性の角結膜炎→失明に至ることも/血清型D~Lは生殖器に感染し性感染症では最多)・肺炎クラミジア（高齢者にも多く肺炎を引き起こす）・オウム病クラミジア（鳥と人で共通した感染症→異型肺炎など）の3種類。',
    },
    {
      term: ['バクテリオファージ'],
      explanation: 'バクテリア（微生物）に感染するウイルス',
    },
    {
      term: ['エンベロープ'],
      explanation: '脂質・炭水化物・タンパク質で構成される、エンベロープウイルスの基本構造。カプシドを覆っている最外側。エンベロープは脂質を含むため、細胞膜と融合することで内部のカプシドを放出することによって侵入するウイルスが多い→風邪症候群の原因ウイルス。脂質を含むのでエタノールや石鹼に溶け、感染力を失ってしまうためエンベロープがないウイルスと比べて消毒剤に対する抵抗性が低い。ヘルペスウイルス・ポックスウイルス・インフルエン・狂犬病・コロナウイルスなど。',
    },
    {
      term: ['EBV', "Epstein-Barr Virus", "EBウイルス", "伝染性単核症", "infectious mononucleosis"],
      explanation: '急性の伝染性単核症:infectious mononucleosis（急性扁桃炎/偽膜様白苔・発熱・のどの痛み・リンパ節の腫れ）。成人の約95%が感染し、多発性硬化症の原因となる。EBウイルスはヘルペスウイルス亜科で、エンベロープあり・二本鎖線状DNA。乳幼児期に初感染すると殆ど不顕性感染→潜伏感染だが、思春期に感染すると伝染性単核球症（急性咽頭炎症・発熱・異型リンパ球・リンパ節主徴・肝脾腫）になり治癒まで約1ヶ月程度要する。異型リンパ球Downey cellsが特徴的だが約1%。抗ヘルペスウイルス剤は使えず、治療は対症療法のみ。感染者は数年にわたりウイルスを排出しえる。病態としてバーキットリンパ腫や上咽頭がんもあるが、日本では殆どみられない。ギランバレー症候群を合併することがある。診断は血液検体からのEBウイルス抗体価測定により行う。この際の抗原はVCA:viral capsid antigen , EA:Early antigen ,EVNA。 ',
    },
    {
      term: ['カプシド', "ヌクレオカプシド"],
      explanation: 'ウイルスで、核酸（DNAかRNA）を包む構造物。全てのウイルスで共通',
    },
    {
      term: ['エクリプス', "eclipse"],
      explanation: '細胞内に侵入したウイルスのカプシドが分解されて、その内部からウイルス核酸が遊離する過程。脱殻が起こってから粒子再構成までの期間は、ビリオン（感染性のある完全なウイルス粒子）がどこにも存在しない。この時期を暗黒期（eclipse）とよぶ。',
    },
    {
      term: ['宿主域変異'],
      explanation: '今までと違う環境でも感染しやすくなり、今までと異なる宿主に感染できるようになる変異。主に細胞吸着に関する変異が多い。鳥インフルエンザなど。',
    },
    {
      term: ['生ワクチン'],
      explanation: '弱毒化した（症状を起こしにくい）生きたウイルスを用いたワクチン。結局ウイルスに感染することになるので、不活化ワクチンと比べて効果は長期間となるが副作用が多い。細胞性免疫に作用する。BCG・麻疹・風疹・おたふくかぜ・水痘ワクチンなど。ウイルスは単体では増殖できないので、製造には動物の卵を用いる必要がある→高価になりやすい',
    },
    {
      term: ['antigen drift', "抗原連続変異"],
      explanation: 'ウイルスゲノムの突然変異による抗原性の変化。ウイルスのタイプは変わらず、いわゆるマイナーチェンジ。',
    },
    {
      term: ['antigen shift', "抗原不連続性変異"],
      explanation: '2つ以上の異なるウイルス株に由来する抗原が組み合わさり（遺伝子再集合）、抗原が大きく変化する変異。いわゆるフルモデルチェンジ。全く新しいタイプのウイルスが形成される。',
    },
    {
      term: ['MERS', "MERS-CoV"],
      explanation: 'コウモリを宿主としていたウイルスが宿主域変異を引き起こしてラクダ→ヒトに感染するようになったウイルス。',
    },
    {
      term: ['SARS', "SARS-CoV"],
      explanation: 'コウモリを宿主としたウイルスが宿主域変異を引き起こしてジャコウネコCivet→ヒトに感染するようになったウイルス。',
    },
    {
      term: ['遺伝子再集合'],
      explanation: '分節ゲノムをもつウイルスでは、2種類の亜型ウイルスが同時に感染することによって、分節の組み合わせが変わり新型ウイルスが誕生する。インフルエンザウイルスなどが分節ゲノムをもつ。抗原不連続変異Antigenic shiftを引き起こし、劇的なパンデミックを引き起こす',
    },
    {
      term: ['インフルエンザ', "influenza"],
      explanation: '分節ゲノム（→遺伝子再集合）をもつエンベロープRNAウイルス。B型とC型はヒトだけを宿主とするが、A型は家禽から渡り鳥まで（ニワトリ・ブタ・ウマ・クジラなど）幅広く自然宿主を持ち、しばしば宿主域変異を引き起こしヒトに感染するようになる。不衛生な畜産環境や渡り鳥が蔓延する原因として挙げられる。',
    },
    {
      term: ['サル痘', "エムポックス"],
      explanation: '自然宿主はげっし類のポックスウイルス。飛沫感染・接触感染があり、感染者のほとんどが芸やバイセクシュアルなどの男性。現在はエムポックスと呼ばれる。',
    },
    {
      term: ['細胞変性効果', "CPE", "Cytopathic effect"],
      explanation: 'ウイルス感染により、細胞が特有の形態変化（細胞の円形化・細胞融解・細胞融合・多核巨細胞化）を引き起こし、最終的に細胞死を引き起こす。ウイルスの病原性に関わる要素。',
    },
    {
      term: ['遅発性感染'],
      explanation: '非常に長い潜伏期間の後に発症する。ウイルスの感染様式の一つ。麻疹ウイルス・JCウイルスなど。',
    },
    {
      term: ['水痘', "水痘・帯状疱疹ウイルス", "VZV", "Varicella-zoster virus", "水ぼうそう"],
      explanation: '空気感染するウイルスのひとつ。年間100万人が発症する。小児で初感染（→水ぼうそう/合併症が怖い）した後、三叉神経・脊髄後根神経節に潜伏（完全にウイルスが死滅しているわけではないが症状が現れない）した後に免疫機能が衰えた時期に再度症状が現れる→帯状疱疹（片側だけにあらわれることが特徴）→日和見感染。成人で初感染すると重症化しやすい。水痘はヘルペスウイルス科（正20面体のカプシド・エンベロープあり）で二本鎖線状DNAを持ち、宿主細胞の核内で増殖する。治療として抗ヘルペス剤（アシクロビルACVなど）、予防として水痘生ワクチン（2014年から定期接種に）・帯状発疹ワクチン（50歳以上）が有効。伝染力が極めて強く、院内感染対策が必要。',
    },
    {
      term: ['レトロウイルス', "retrovirus"],
      explanation: 'RNAを逆転写することで宿主細胞内で増殖するRNAウイルス。宿主細胞のDNAを改変するため、遺伝子の過剰発現や失活を引き起こし、がん化を招く。',
    },
    {
      term: ['飛沫核感染', "空気感染", "エアロゾル感染"],
      explanation: '水分を含まない飛沫（飛沫核/~5μm）により引き起こされる感染。麻疹・水痘など。飛沫感染（インフルエンザ・風疹など）より少ない粒子で感染が成立する→感染力が高い。',
    },
    {
      term: ['Hemagglutinin', "赤血球凝集素", "HA抗原"],
      explanation: 'ある種のウイルスは、赤血球凝集素（ヘマグルチニン）を介して、宿主の細胞表面に存在するシアル酸を含むウイルス受容体と結合する。赤血球表面にはシアル酸を含む糖鎖（シアロ糖鎖）が多く存在し、赤血球表面のウイルス受容体として、ウイルスのHA蛋白の頭部領域のアミノ酸と結合する。',
    },
    {
      term: ['IFN', "インターフェロン"],
      explanation: '抗ウイルス活性を有するサイトカイン。IFN-α、IFN-βはB型肝炎ウイルス・C型肝炎ウイルスの治療に使用される。',
    },
    {
      term: ['抗ウイルス薬'],
      explanation: '現時点で抗ウイルス薬として言えるのは、抗HIV薬（逆転写酵素阻害薬とプロテアーゼ阻害薬）、抗インフルエンザウイルス薬（タミフル・リレンザなど/ウイルス感染細胞からの放出にかかわる酵素：ノイラミニダーゼの阻害薬）、抗ヘルペス薬（アシクロビル/DNA合成阻害）のみ。',
    },
    {
      term: ['単純ヘルペス', "ヘルペス", "HSV"],
      explanation: '単純ヘルペスウイルスはヘルペスウイルス科（エンベロープあり・二本鎖線状DNA）で、Ⅰ型（口唇ヘルペス）・2型（性器ヘルペス）が存在する。神経に潜伏感染し、重症例では脳炎・髄膜炎を引き起こす。他のヘルペスウイルス科のウイルスと同様、不顕性感染や潜伏感染し宿主の抵抗力が弱まると経神経的に皮膚へ達し発疹を起こす。抗ヘルペス剤（アシクロビルなど）が有効。ヒトヘルペスウイルス6,7は乳児の突発性発疹が特徴的で、3日間高熱を出した後、おなかに発疹が出る。ヒトヘルペスウイルス8は肉腫状の発疹が出る。',
    },
    {
      term: ['サイトメガロ', "CMV"],
      explanation: '人のみに感染する。体液により水平感染するほか、経胎盤などで母子感染し、先天異常（感音性難聴など）の原因となるため危険。不顕性感染が多い。TORCH症候群のひとつ。出産250-300例に1例は先天性CMV感染症だと言われている。妊婦の25%がCMV未感染で、そのうち約1%は妊娠中に感染してしまう。',
    },
    {
      term: ['TORCH', "TORCH感染症"],
      explanation: '経胎盤感染によって、児に重篤な先天性異常や恒久的な臓器・神経・感覚器障害をきたす感染症の総称。T:Toxoplasma gondii , O:others(梅毒など) , R:Rubella(風疹) , C:Cytomegalovirus(サイトメガロウイルス) , H:Herpes simplex virus(単純ヘルペスウイルス感染症)',
    },
    {
      term: ['アデノウイルス'],
      explanation: 'ヘルペスウイルス科（二本鎖線状DNAウイルス）で、エンベロープなし→胃酸や消化酵素に抵抗し腸管で増殖する。核内で増殖し、人のみに感染する。飛沫・接触感染で感染力が強い。抗ウイルス薬なし。特に乳幼児でリスクが高く、急性熱性扁桃炎・咽頭結膜熱（プール熱）・流行性角結膜炎EKC（眼科病棟の院内感染の原因）・小児下痢症・急性出血性膀胱炎が特徴的。',
    },
    {
      term: ['HPV', "ヒトパピローマウイルス"],
      explanation: 'ポリオーマウイルス科（二本鎖線状DNAウイルス）で、100種類以上存在する。カリフラワー状の尖圭コンジローマが特徴的（HPV type6/11）で、子宮頸がんの原因(Type16/18)にもなる。子宮頸がんワクチンは主にこの原因となる型のパピローマウイルスに対するワクチンである。',
    },
    {
      term: ['BKV', "BKウイルス"],
      explanation: 'ポリオーマウイルス属（二本鎖DNAウイルス）で、経口感染する。ほとんど自覚症状なし',
    },
    {
      term: ['JCV', "JCウイルス", "PML", "進行性多巣性白質脳症"],
      explanation: 'ポリオーマウイルス属（二本鎖DNAウイルス）で、初感染ではほとんど無症状だが、主に腎臓の集合管上皮に持続感染し、AIDSなどによる細胞性免疫不全により再活性化され、進行性多巣性白質脳症PMLを発症する。',
    },
    {
      term: ['パルボウイルス', "Parvoviridae"],
      explanation: '妊婦に感染すると流産の原因となる（胎児水腫）',
    },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },

  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}