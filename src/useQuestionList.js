import {
  useState
} from 'react'

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
    },{
      groupTag:"2021 TBL",
      groupContents:[
                {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '芽胞を形成する菌に有効でない滅菌・消毒法はどれか',
          answerImg: [],
          choices:["酸化エチレンガス滅菌","アルコール","高圧蒸気滅菌","過酸化水素低温ガスプラズマ滅菌","界面活性剤"],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'どれか',
          answerImg: [],
          choices:["","","","",""],
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
    }
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