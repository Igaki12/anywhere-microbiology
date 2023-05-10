import { useState } from 'react'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-microbiology'
  const jpName = '微生物感染症学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '授業中',
      groupContents: [
        {
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
          commentary:
            'シプロフロキサシンはニューキノロン系薬で、拡散合成を阻害する。アンピシリンはβラクタム系薬で、細胞壁合成を阻害する。ミノサイクリンはテトラサイクリン系薬で、タンパク合成を阻害する。アミカシンはアミノグリコシド系で、タンパク合成を阻害する。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '85歳男性。入院前は老人ホームに入所していた・',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },F
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
