import { useState } from 'react'

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
      explanation:
        '実験室の封じ込めレベルのことで、3以上で新型コロナウイルスなど、4で最も危険な微生物を扱える。',
    },
    {
      term: ['アントニ・ファン・レーウェンフック'],
      explanation:
        '自作の顕微鏡で最近の存在を確認し、「微生物学の父」と呼ばれる。（1632-1723）原虫・真菌・細菌などを発見',
    },
    {
      term: ['エドワード・ジェンナー'],
      explanation:
        '天然痘の予防接種（種痘法）を開発した近代免疫学の父。(1749-1823)',
    },
    {
      term: ['パスツール'],
      explanation:
        'ロベルト・コッホとともに近代細菌学の開祖と呼ばれる。(1822-1895)微生物が病原体である可能性を示唆し、加熱滅菌法・低温殺菌法・狂犬病ワクチンなどを発明した。病気の自然発生説を否定した。',
    },
    {
      term: ['ロベルト・コッホ'],
      explanation:
        'パスツールとともに「近代細菌学の開祖」。(1843-1910)固形培地により炭そ菌・コレラ菌・結核菌などを培養することに成功。コッホの4原則（感染症発症・伝染の仕組み）を提唱',
    },
    {
      term: ['北里柴三郎'],
      explanation:
        '破傷風菌・ペスト菌などの発見に成功。日本の細菌学の父。(1853-1931)',
    },
    {
      term: ['志賀潔'],
      explanation: '赤痢菌を発見。',
    },
    {
      term: ['ゼンメルワイス'],
      explanation:
        '塩疎水で手を洗う事によって、産褥熱による死亡率を30%→1%未満に劇的に低下させた。権威主義的な学会の対応により科学の発展が遅れた例としても用いられる。',
    },
    {
      term: ['感染症'],
      explanation:
        '感染（微生物が生体に付着した状態）によって、（侵入・増殖することによって）症状が出現した状態。「感染」を不顕性感染と呼ぶのに対して、「感染症」は顕性感染と呼ばれる。',
    },
    {
      term: ['易感染宿主', 'compromised host'],
      explanation: '免疫不全などにより抵抗力が低下した宿主をさす。',
    },
    {
      term: ['再興感染症'],
      explanation:
        'その感染症病原微生物は既に知られていて、それによる疾患の発生数は減少し、公衆衛生上殆ど問題とならない感染症と認識されていたが、近年再び増加してきたもの、あるいは将来的に問題となる可能性がある感染症。',
    },
    {
      term: ['天然痘'],
      explanation:
        '1980年、WHO二より根絶を宣言された。撲滅できたのは、天然痘は1.人以外に自然宿主を持たない、2.不顕性感染がない、3.患者の識別が容易、4.変異を起こしにくいDNAウイルス、5.きわめて有効なワクチンがあることが要因とされている。',
    },
    {
      term: ['微生物'],
      explanation: '肉眼で見ることができない微小な生物。',
    },
    {
      term: ['真核生物'],
      explanation:
        '核膜やミトコンドリアをもつ生物。原核生物やウイルスとは違う特有のリボソームをもつ。',
    },
    {
      term: ['放線菌'],
      explanation:
        'カビのような糸状の細胞や菌糸を生じる細菌で、土壌中に広く分布している。streptomyces属。抗生物質（ストレプトマイシン・エリスロマイシン・イベルメクチンなど）を生産する菌が多い。',
    },
    {
      term: ['球菌', 'coccus'],
      explanation: '分裂の方法によって球状の形態をもつ細菌。ブドウ球菌など',
    },
    {
      term: ['桿菌', 'bacillus'],
      explanation: '分裂の方法によって桿状の形態をもつ細菌。大腸菌など',
    },
    {
      term: ['らせん菌'],
      explanation: 'らせん状の形態をもつ細菌。ピロリ菌など',
    },
    {
      term: ['グラム染色'],
      explanation:
        'クリスタルバイオレットですべての菌を紫色に染める→ルゴール液を加える→アルコールで脱色すると、薄いペプチドグリカン層のみが赤色～淡赤色に染まる。細胞膜の構造を反映するように細菌が染まり、多層のペプチドグリカンをもつ細菌は青紫→グラム陽性、単層のペプチドグリカン＋外膜構造をもつ細菌は赤色→グラム陰性となる。',
    },
    {
      term: ['莢膜', 'capsule'],
      explanation:
        '多糖類からなる細菌の細胞膜・細胞壁を囲う膜。菌体を食細胞から保護しているので、病原性を持つ。',
    },
    {
      term: ['グラム陰性菌'],
      explanation:
        '大腸菌・緑膿菌・アシネトバクターなど。細胞膜のペプチドグリカン層が薄い、タイコ酸がない、リポ多糖体・リポタンパク・リン脂質（外膜の構成成分）がある。→細胞壁に外膜を持つ。',
    },
    {
      term: ['プラスミド'],
      explanation:
        '細菌がもつ、染色体外の環状DNA。細菌の生存にとって必須でないDNA分子であるが、新規の毒素や薬剤耐性の遺伝子を接合・Hfrによって伝達し、耐性遺伝子の拡散に貢献している。Fプラスミド（大腸菌のDNA組み換えに関与する）・Rプラスミド（薬剤耐性遺伝子を有する）などいくつか種類がある。',
    },
    {
      term: ['鞭毛'],
      explanation:
        'フィラメント状の運動器官。線毛とは役割が異なる。形態はさまざま。',
    },
    {
      term: ['芽胞'],
      explanation:
        '劣悪な環境に細菌がおかれると、環境抵抗性を持つ芽胞（休眠細胞）を形成する。耐熱性・乾燥に強く、消毒薬・抗菌薬に強い。',
    },
    {
      term: ['独立栄養菌'],
      explanation:
        '無機物質と二酸化炭素を利用してATPを蓄積し、これを利用することの繰り返しで増殖する細菌。',
    },
    {
      term: ['好酸性菌'],
      explanation:
        '乳酸桿菌など。多くの細胞はpH7.4付近を好むが、pHの低い環境を好む。',
    },
    {
      term: [
        '生きているが培養できない細菌',
        'VNC',
        'viable but non-culturable',
      ],
      explanation:
        'まだ培養方法が確立されていない（未知の細胞・ハンセン病のライ菌など）、あるいは飢餓条件や塩ストレス下により増殖ができない状態の細菌（コレラ菌や大腸菌O157など）をあらわす。',
    },
    {
      term: ['調節遺伝子'],
      explanation: 'オペロンの発現を調節する遺伝子で、リプレッサーをつくる。',
    },
    {
      term: ['オペロン'],
      explanation:
        '機能的に関係あるタンパク質をコードする領域が複数連なっている。lacオペロンなど。',
    },
    {
      term: ['変異原', 'mutagen'],
      explanation:
        '変異誘発因子のことで、DNAに挿入されたり塩基をアルキル化したりすることによってDNAを傷つける物理的・化学的因子。',
    },
    {
      term: ['トランスポゾン', 'transposon'],
      explanation:
        'ゲノム上のある部位から別の部位へ移動するDNA配列。挿入配列（転移酵素・反復配列）を両末端にもつ',
    },
    {
      term: ['コンピテント', 'competent'],
      explanation:
        'DNAを取り込みやすい状態。細菌によってそれぞれ条件が異なる。',
    },
    {
      term: ['接合', 'conjugation'],
      explanation:
        '性腺毛sex piliを介したFプラスミドやRプラスミドの伝達をさす。',
    },
    {
      term: ['プロファージ'],
      explanation:
        '細菌を宿主とするファージのDNAが、細菌のゲノムに組み込まれた状態。溶原化した状態。',
    },
    {
      term: ['侵入門戸'],
      explanation:
        '微生物の進入部位。創傷・皮膚・粘膜（呼吸器粘膜・消化器粘膜・性器粘膜）・血液・皮膚など。',
    },
    {
      term: ['白血球障害性毒素'],
      explanation:
        'たとえば黄色ブドウ球菌・緑膿菌はロイコシジンを産生し、補体や食作用に対する抵抗因子として作用する。',
    },
    {
      term: ['エンドトキシンショック'],
      explanation:
        'LPS（原核細胞の表面構造）が血中に侵入すると、発熱・血圧低下を引き起こし、多臓器不全に陥ると死亡する危険性が高い。',
    },
    {
      term: ['粘菌'],
      explanation:
        '真核藻類で、自らの形を変化させながら生きる。餌と餌の最短距離を結ぶように分布する性質があり迷路を解くことで有名。',
    },
    {
      term: ['LPS'],
      explanation:
        'リピドA + コア多糖 + O特異多糖 で構成されるリポ多糖（外膜の一部）。大腸菌など。',
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
