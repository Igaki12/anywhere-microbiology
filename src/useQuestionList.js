import {
  useState
} from 'react'
import tuberculosis from './img/answer/tuberculosis.png';
import GramMethod from './img/answer/GramMethod.png';
import disinfection from './img/answer/disinfection.png';
import cilia from './img/answer/cilia.png';
import Chlamydiae from './img/answer/Chlamydiae.png';
import bacteriaStructure from './img/answer/bacteriaStructure.png';
import antiStain from './img/answer/antiStain.png';

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-microbiology'
  const jpName = '微生物感染症学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '授業中',
      groupContents: [{
          detailInfo: '4/26',
          questionImg: [],
          questionSentence: '抗菌薬と作用機序の組み合わせで適切なものはどれか',
          answerImg: [],
          choices: [
            'シプロフロキサシン - DNA合成阻害',
            'アンピシリン - タンパク質合成阻害',
            'ミノサイクリン - 細胞膜合成阻害',
            'アミカシン - 細胞壁合成阻害',
          ],
          answer: 'シプロフロキサシン - DNA合成阻害',
          commentary: 'シプロフロキサシンはニューキノロン系薬で、拡散合成を阻害する。アンピシリンはβラクタム系薬で、細胞壁合成を阻害する。ミノサイクリンはテトラサイクリン系薬で、タンパク合成を阻害する。アミカシンはアミノグリコシド系で、タンパク合成を阻害する。',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】ウイルス粒子にはDNAまたはRNAが存在する',
          answerImg: [],
          answer: '正しい',
          commentary: 'RNAが多い',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】細菌に感染するウイルスが存在する',
          answerImg: [],
          answer: '正しい',
          commentary: 'バクテリオファージ',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】ウイルスは宿主細胞認識機構をもつ',
          answerImg: [],
          answer: '正しい',
          commentary: 'インフルエンザであればシアル酸、コロナウイルスであればACE2',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】ウイルスの感染過程に、宿主細胞のプロテアーゼが関与する場合がある',
          answerImg: [],
          answer: '正しい',
          commentary: '脱殻、タンパク質生成など',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】潜伏感染には水痘・帯状疱疹ウイルスがある',
          answerImg: [],
          answer: '正しい',
          commentary: '持続感染のひとつ。',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】抗病原性鳥インフルエンザウイルスは抗原不連続変異により出現する',
          answerImg: [],
          answer: '正しい',
          commentary: 'HAとNAの組み合わせでH3などができた',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】抗生物質により、ウイルスを死滅させることができる',
          answerImg: [],
          answer: 'できない',
          commentary: '抗生物質はバクテリアだけ。抗ウイルス薬はほとんどの場合製造が難しい。',
        },
        {
          detailInfo: '5/24スライド',
          questionImg: [],
          questionSentence: '【正誤問題】新型コロナウイルスはエンベロープをもつため、消毒薬などに抵抗性が高い。',
          answerImg: [],
          answer: '誤り',
          commentary: 'エンベロープがあるから、アルコールや石鹼に溶け死滅する。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    }, {
      groupTag: "2021 TBL",
      groupContents: [{
          detailInfo: '',
          questionImg: [],
          questionSentence: '芽胞を形成する菌に有効でない滅菌・消毒法はどれか(複数選択可)',
          answerImg: [disinfection],
          choices: ["酸化エチレンガス滅菌", "アルコール", "高圧蒸気滅菌", "過酸化水素低温ガスプラズマ滅菌", "界面活性剤"],
          answer: 'アルコール、界面活性剤',
          commentary: '芽胞を形成する菌に有効なのは滅菌あり、酸化エチレンガス滅菌、高圧蒸気滅菌（オートクレーブ）、過酸化水素低温ガスプラズマ滅菌は大量の芽胞を含む、全ての微生物を殺滅あるいは除去することができる。アルコールは中水準消毒であり、芽胞を除く結核菌、その他の細菌、ほとんどのウイルスや真菌を殺滅させるが、芽胞を形成する菌には有効ではない。界面活性剤（石鹸）は低水準消毒であり、ほとんどの細菌や真菌、一部のウイルスを殺滅させるが、結核菌や芽胞は殺滅させず、芽胞を形成する菌には有効ではない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の文章について正しいのはどれか（複数選択可）',
          answerImg: [],
          choices: ["北里柴三郎は1987年に赤痢菌の培養に成功し、赤痢菌の学名は北里の名前が由来である", "ジェンナーは、埃が外部から侵入しえない、白鳥の首型フラスコを用いて自然発生説の否定に成功する", "志賀潔は破傷風菌の純粋培養に成功し、ペスト菌を発見した", "感染症の病原体を特定する際の指針の一つとしてコッホの4原則が定められた", "中野竜一は、新型コロナウイルスを不活化する新規複合酸化物の開発に携わった。"],
          answer: '4と5が正しい',
          commentary: '志賀潔は赤痢菌の純培養に成功し、赤痢菌をShigellaと名付けた。これは病原菌の学名に日本人の名前がついている唯一の菌名である。パスツールは煮沸した肉汁を埃の入らない「白鳥の首型フラスコ」に入れておけば腐敗しないことを示し、当時信じられていた自然発生説を否定した。北里柴三郎は破傷風菌の純粋培養に成功し、ペスト菌を発見した。　コッホの4原則は、1.ある一定の病気には一定の微生物が見いだされること、2.その微生物を分離できること、3.分離した微生物を感受性のある動物に感染させて同じ病気を起こせること、4.そしてその病巣部から同じ微生物が分離されること　を定めた感染症の指針。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'グラム陰性菌とグラム陽性菌について大きな特徴の違いはどれか（複数選択可）',
          answerImg: [GramMethod],
          choices: ["ペプチドグリカン層の厚み", "リポ多糖体の有無", "鞭毛の数", "リン脂質の有無", "プラスミドの有無"],
          answer: 'ペプチドグリカン層の厚み、リポ多糖体の有無、リン脂質の有無',
          commentary: '厚いペプチドグリカン層がグラム染色によって染色される。リポ多糖体はLPSとも。例えばグラム陰性桿菌の大腸菌は鞭毛を持たないし、鞭毛の数がグラム染色で染め分けられているわけではない。プラスミドは染色体外の環状DNAのことで、陽性菌も陰性菌も両方持っている。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '内毒素・外毒素のどれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'どれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'どれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'どれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'どれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'どれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'どれか',
        //   answerImg: [],
        //   choices: ["", "", "", "", ""],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ]
    }, {
      groupTag: "2022本試験",
      groupContents: [{
          detailInfo: '',
          questionImg: [],
          questionSentence: '細菌について正しいのはどれか',
          choices: ["細菌にはリボソームが存在しない", "結核菌は芽胞形成菌である", "プラスミドを接合伝達させるためには性腺毛を必要とする", "クラミジアにはグラム染色が有用である", "グラム染色の接合性の違いは莢膜による"],
          answerImg: [bacteriaStructure, tuberculosis, cilia, Chlamydiae, GramMethod],
          answer: 'プラスミドを接合伝達させるためには性線毛を必要とする',
          commentary: '細菌はタンパク合成のためのリボソームやプラスミドを保有している。性腺毛を持っている細菌はプラスミドの接合伝達によってペニシリナーゼやESBL、MBL産生遺伝子を伝達し薬剤耐性を伝播することがある。結核菌は外側をミコール酸で覆われているその特徴から一般的な抗菌薬が無効であるため、抗結核薬が使用される。結核はその他鞭毛・莢膜を持たず、通常の染色法では染まりにくい特徴も持っている。クラミジアはグラム染色で染色されるペプチドグリカン層を持っていない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '',
          choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
    appName,
    jpName,
  }
}