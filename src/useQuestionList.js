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
import question202202 from './img/question/question202202.png';
import question202201 from './img/question/question202201.png';
import spectorum from './img/answer/spectorum.png';
import antibiotics from './img/answer/antibiotics.png';
import Lactobacillus from './img/answer/Lactobacillus.png';
import diphtheriae from './img/answer/diphtheriae.png';
import Actinomycetes from './img/answer/Actinomycetes.png';
import sequence16SrRNA from './img/answer/sequence16SrRNA.png';
import Salmonella from './img/answer/Salmonella.png';
import PFGE from './img/answer/PFGE.png';
import MultiDrugResistant from './img/answer/MultiDrugResistant.png';
import MALDI from './img/answer/MALDI.png';
import ETEC from './img/answer/ETEC.png';
import EIEC from './img/answer/EIEC.png';
import EHEC from './img/answer/EHEC.png';
import MultiDrugResistantPercentage from './img/answer/MultiDrugResistantPercentage.png';
import virusBacteria from './img/answer/virusBacteria.png';
import toxin from './img/answer/toxin.png';
import resistanceSummary from './img/answer/resistanceSummary.png';
import MRSALA from './img/answer/MRSALA.png';
import MRSAFromDrugAbuse from './img/answer/MRSAFromDrugAbuse.png';
import MRSA from './img/answer/MRSA.png';
import metalloLactamase from './img/answer/metalloLactamase.png';
import Klebsiella from './img/answer/Klebsiella.png';
import influenzaHaemophilus from './img/answer/influenzaHaemophilus.png';
import ESBL from './img/answer/ESBL.png';
import disc from './img/answer/disc.png';
import aeruginosa from './img/answer/aeruginosa.png';
import Acinetobacter from './img/answer/Acinetobacter.png';
import pertussis from './img/answer/pertussis.png';
import Bartonella from './img/answer/Bartonella.png';
import produceBetaLactamase from './img/answer/produceBetaLactamase.png';
import penicillinase from './img/answer/penicillinase.png';
import betaLactamaseExample from './img/answer/betaLactamaseExample.png';
import tetaniClostridium2 from './img/answer/tetaniClostridium2.png';
import tetaniClostridium1 from './img/answer/tetaniClostridium1.png';

import betaLactamaseCounterexample from './img/answer/betaLactamaseCounterexample.png';
import antibioticsAnimal from './img/answer/antibioticsAnimal.png';
import ampC from './img/answer/ampC.png';
import VZV from './img/answer/VZV.png';
import tsutsugamushi from './img/answer/tsutsugamushi.png';
import Mycoplasma from './img/answer/Mycoplasma.png';
import Leptospira from './img/answer/Leptospira.png';
import infectiousMononucleosis from './img/answer/infectiousMononucleosis.png';
import herpes from './img/answer/herpes.png';
import EBVAntibody from './img/answer/EBVAntibody.png';
import CMV from './img/answer/CMV.png';
import ChlamydiaTrachomatis from './img/answer/ChlamydiaTrachomatis.png';
import GenusNocardia from './img/answer/GenusNocardia.png';
import GenusActinomyces2 from './img/answer/GenusActinomyces2.png';
import GenusActinomyces from './img/answer/GenusActinomyces.png';
import StreptococcusOral from './img/answer/StreptococcusOral.png';
import StreptococcusEndocarditis from './img/answer/StreptococcusEndocarditis.png';
import influenzaHaemophilusCheck from './img/answer/influenzaHaemophilusCheck.png';

import Rubella from './img/answer/Rubella.png';
import RSV from './img/answer/RSV.png';
import Parvovirus from './img/answer/Parvovirus.png';
import Papilloma from './img/answer/Papilloma.png';
import MumpsVirus from './img/answer/MumpsVirus.png';
import Measles from './img/answer/Measles.png';
import JCV from './img/answer/JCV.png';
import JapaneseEncephalitisVirus from './img/answer/JapaneseEncephalitisVirus.png';
import influenzaVirusNA from './img/answer/influenzaVirusNA.png';
import influenzaVirusHA from './img/answer/influenzaVirusHA.png';
import influenzaVirusA from './img/answer/influenzaVirusA.png';
import DengueVirus from './img/answer/DengueVirus.png';
import VRE from './img/answer/VRE.png';
import SAPathogenicity from './img/answer/SAPathogenicity.png';
import PPE1 from './img/answer/PPE1.png';
import pneumoniaeStreptococcus from './img/answer/pneumoniaeStreptococcus.png';
import perfringensClostridium from './img/answer/perfringensClostridium.png';
import mitochondriaNucleus from './img/answer/mitochondriaNucleus.png';
import Listeria from './img/answer/Listeria.png';
import GramDifferences from './img/answer/GramDifferences.png';
import facultativeAnaerobic from './img/answer/facultativeAnaerobic.png';
import enterotoxin from './img/answer/enterotoxin.png';
import difficile from './img/answer/difficile.png';
import botulinumToxin from './img/answer/botulinumToxin.png';
import bacteriophage from './img/answer/bacteriophage.png';
import anthracisBacillus from './img/answer/anthracisBacillus.png';
import agalactiaeStreptococcus from './img/answer/agalactiaeStreptococcus.png';
import virusVariety from './img/answer/virusVariety.png';
import virusInfectedCell from './img/answer/virusInfectedCell.png';
import SFTS from './img/answer/SFTS.png';
import rotavirusNorovirus from './img/answer/rotavirusNorovirus.png';
import resistanceMechanism from './img/answer/resistanceMechanism.png';
import poliovirus from './img/answer/poliovirus.png';
import norovirus from './img/answer/norovirus.png';
import liveVaccine from './img/answer/liveVaccine.png';
import LegionellaPathogenicity from './img/answer/LegionellaPathogenicity.png';
import Legionella from './img/answer/Legionella.png';
import herpesVirus67 from './img/answer/herpesVirus67.png';
import handHygiene from './img/answer/handHygiene.png';
import fangusVariety from './img/answer/fangusVariety.png';
import fangusStructure from './img/answer/fangusStructure.png';
import experimentCulture from './img/answer/experimentCulture.png';
import betaDGlucanFalsePositive from './img/answer/betaDGlucanFalsePositive.png';
import diphtheriaeDiagnosis from './img/answer/diphtheriaeDiagnosis.png';
import diphtheriaeColony from './img/answer/diphtheriaeColony.png';

import betaDGlucan13 from './img/answer/betaDGlucan13.png';
import antigenDrift from './img/answer/antigenDrift.png';
import antiFungal from './img/answer/antiFungal.png';
import adenoVirus from './img/answer/adenoVirus.png';
import tuberculosisTreatment2 from './img/answer/tuberculosisTreatment2.png';
import tuberculosisTreatment from './img/answer/tuberculosisTreatment.png';
import tuberculosisSideEffect from './img/answer/tuberculosisSideEffect.png';
import tuberculosisDiagnosis from './img/answer/tuberculosisDiagnosis.png';
import TDM from './img/answer/TDM.png';
import standardPrecautions from './img/answer/standardPrecautions.png';
import Shiga from './img/answer/Shiga.png';
import probiotics from './img/answer/probiotics.png';
import prebiotics from './img/answer/prebiotics.png';
import mask from './img/answer/mask.png';
import lepraeMycobacterium from './img/answer/lepraeMycobacterium.png';
import Koch from './img/answer/Koch.png';
import ICT from './img/answer/ICT.png';
import hospitalAcquiredInfection from './img/answer/hospitalAcquiredInfection.png';
import handWashing from './img/answer/handWashing.png';
import gown from './img/answer/gown.png';
import empiricTherapy from './img/answer/empiricTherapy.png';
import emergingDiseases from './img/answer/emergingDiseases.png';
import DoderleinBacillus from './img/answer/DoderleinBacillus.png';
import AST from './img/answer/AST.png';
import antibiogram from './img/answer/antibiogram.png';
import sterilSpectrum from './img/answer/sterilSpectrum.png';
import sterilization from './img/answer/sterilization.png';
import smallpox from './img/answer/smallpox.png';
import semiCritical from './img/answer/semiCritical.png';
import plague from './img/answer/plague.png';
import criticalTool from './img/answer/criticalTool.png';
import columbianExchange from './img/answer/columbianExchange.png';
import PCR from './img/answer/PCR.png';
import pallidumTreponemaSymptoms from './img/answer/pallidumTreponemaSymptoms.png';
import pallidumTreponema from './img/answer/pallidumTreponema.png';
import bloodCulture from './img/answer/bloodCulture.png';
import pneumoniaeStreptococcus2 from './img/answer/pneumoniaeStreptococcus2.png';
import toxinInnerOuter from './img/answer/toxinInnerOuter.png';
import repressor from './img/answer/repressor.png';
import GramDifferencesGraph from './img/answer/GramDifferencesGraph.png';
import allBacteriaGram from './img/answer/allBacteriaGram.png';
import pneumonia from './img/answer/pneumonia.png';
import Coxsackievirus from './img/answer/Coxsackievirus.png';
import pneumoniaeStreptococcusResistance from './img/answer/pneumoniaeStreptococcusResistance.png';
import plasmidResistance from './img/answer/plasmidResistance.png';
import BetaLactamResistanceMechanisms from './img/answer/BetaLactamResistanceMechanisms.png';
import infectiousLaw from './img/answer/infectiousLaw.png';
import GramPositiveProtection from './img/answer/GramPositiveProtection.png';




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
          questionSentence: '抗菌薬と作用機序の組み合わせで適切なものはどれか（複数選択可）',
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
          answerImg: [disinfection, sterilSpectrum],
          choices: ["酸化エチレンガス滅菌", "アルコール", "高圧蒸気滅菌", "過酸化水素低温ガスプラズマ滅菌", "界面活性剤"],
          answer: 'アルコール、界面活性剤',
          commentary: '芽胞を形成する菌に有効なのは滅菌あり、酸化エチレンガス滅菌、高圧蒸気滅菌（オートクレーブ）、過酸化水素低温ガスプラズマ滅菌は大量の芽胞を含む、全ての微生物を殺滅あるいは除去することができる。アルコールは中水準消毒であり、芽胞を除く結核菌、その他の細菌、ほとんどのウイルスや真菌を殺滅させるが、芽胞を形成する菌には有効ではない。界面活性剤（石鹸）は低水準消毒であり、ほとんどの細菌や真菌、一部のウイルスを殺滅させるが、結核菌や芽胞は殺滅させず、芽胞を形成する菌には有効ではない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の文章について正しいのはどれか（複数選択可）',
          answerImg: [Shiga],
          choices: ["北里柴三郎は1987年に赤痢菌の培養に成功し、赤痢菌の学名は北里の名前が由来である", "ジェンナーは、埃が外部から侵入しえない、白鳥の首型フラスコを用いて自然発生説の否定に成功する", "志賀潔は破傷風菌の純粋培養に成功し、ペスト菌を発見した", "感染症の病原体を特定する際の指針の一つとしてコッホの4原則が定められた", "中野竜一は、新型コロナウイルスを不活化する新規複合酸化物の開発に携わった。"],
          answer: '4と5が正しい',
          commentary: '志賀潔は赤痢菌の純培養に成功し、赤痢菌をShigellaと名付けた。これは病原菌の学名に日本人の名前がついている唯一の菌名である。パスツールは煮沸した肉汁を埃の入らない「白鳥の首型フラスコ」に入れておけば腐敗しないことを示し、当時信じられていた自然発生説を否定した。北里柴三郎は破傷風菌の純粋培養に成功し、ペスト菌を発見した。　コッホの4原則は、1.ある一定の病気には一定の微生物が見いだされること、2.その微生物を分離できること、3.分離した微生物を感受性のある動物に感染させて同じ病気を起こせること、4.そしてその病巣部から同じ微生物が分離されること　を定めた感染症の指針。 その他、銅合金マスクなど。',
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
          questionSentence: '細菌について正しいのはどれか（複数選択可）',
          choices: ["細菌にはリボソームが存在しない", "結核菌は芽胞形成菌である", "プラスミドを接合伝達させるためには性腺毛を必要とする", "クラミジアにはグラム染色が有用である", "グラム染色の接合性の違いは莢膜による"],
          answerImg: [mitochondriaNucleus, tuberculosis, cilia, allBacteriaGram, GramMethod],
          answer: 'プラスミドを接合伝達させるためには性線毛を必要とする',
          commentary: '細菌はタンパク合成のためのリボソームやプラスミドを保有している。性腺毛を持っている細菌はプラスミドの接合伝達によってペニシリナーゼやESBL、MBL産生遺伝子を伝達し薬剤耐性を伝播することがある。結核菌は外側をミコール酸で覆われているその特徴から一般的な抗菌薬が無効であるため、抗結核薬が使用される。結核はその他鞭毛・莢膜を持たず、通常の染色法では染まりにくい特徴も持っている。クラミジアはグラム染色で染色されるペプチドグリカン層を持っていない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '外毒素の中で耐熱性のエンテロトキシンを放出する菌はどれか（複数選択可）',
          choices: ["黄色ブドウ球菌", "ウェルシュ菌", "サルモネラ菌", "セレウス菌", "大腸菌"],
          answerImg: [enterotoxin, perfringensClostridium, ETEC],
          answer: '黄色ブドウ球菌、大腸菌',
          commentary: '黄色ブドウ球菌は外毒素：ブドウ球菌エンテロトキシン（耐熱性の腸管毒→TSST）を産生し、主におにぎりや弁当による食中毒の原因となる。ウェルシュ菌は芽胞により加熱に耐えシチューやスープなどで感染型食中毒を引き起こす。サルモネラ菌は経口感染により感染型食中毒を引き起こす。セレウス菌は下痢毒を産生するが、易熱性。大腸菌はさまざまな毒素を産生するが、腸管毒素原生大腸菌(ETEC)はビブリオ毒素と類似した耐熱性毒素ST(heat-stable toxin)を産生する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'グラム陰性菌に存在し、グラム陽性菌に存在しないのはどれか（複数選択可）',
          choices: ["莢膜", "線毛", "リポ多糖", "ポーリン", "プラスミド", "ペプチドグリカン"],
          answerImg: [GramDifferences],
          answer: 'リポ多糖、ポーリン',
          commentary: '細胞膜・細胞壁・莢膜・線毛・鞭毛は細菌の基本構造で、グラム陽性・陰性に関わらず広く分布している（鞭毛はグラム陰性菌に多い）。リポ多糖やリポ脂質はグラム陰性菌特有の外膜の主成分。ペプチドグリカンはグラム染色で染色される層で、グラム陽性菌の方が厚い。プラスミドは染色体外の環状DNAのことで、グラム陰性・陰性菌の両方で存在する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '微生物に該当するのは次のうちどれか（複数選択可）',
          choices: ["放線菌", "細菌類", "菌界", "原生生物界", "古細菌"],
          answerImg: [],
          answer: 'すべて該当する',
          commentary: '微生物とは、肉眼で見ることができない微小な生物を指す。放線菌は土壌中に広く分布する微生物（細菌）で、抗生物質を産生する菌が多い。細菌類（真正細菌）や古細菌は原核生物界に分類され、当然微生物に分類される。菌界にはカンジダ・クリプトコックス・アスペルギルスなどが分類され、キチン質の強固な細胞壁を持っている',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '細菌について誤っているものは次のうちどれか（複数選択可）',
          choices: ["DNAに含まれる塩基はグアニン・アデニン・シトシン・チミンである", "プラスミドは細胞内で独立して存在・増殖できる", "染色体は核膜内にある", "細胞内で増殖したファージは成熟すると、溶菌酵素により菌体を壊して放出される", "プロモーターはリプレッサーと結合することで、構造遺伝子群の発現を抑制する"],
          answerImg: [mitochondriaNucleus, bacteriophage, repressor],
          answer: '3,5が誤り...細菌は核膜なし/リプレッサーはオペレーターと結合する',
          commentary: 'プラスミドはゲノムDNAとは独立して存在・複製でき、細菌の生存にとって必須ではないDNA分子であるが、毒素産生や薬剤耐性に関与しておりプラスミドを介した耐性遺伝子の拡散（接合伝達）が問題となっている。遺伝子の導入はファージによっても起こっていて（形質導入）、細胞内で増殖したファージが成熟し、溶菌酵素により菌体を壊して放出される。リプレッサーはオペレーター部位に結合して構造遺伝子群の発現を抑制していて、プロモーターはオペレーターを含み転写に関与する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ファージのDNAが細菌の染色体DNAに組み込まれた状態をなんというか（複数選択可）',
          choices: ["カプシド", "ビリオン", "プロファージ", "マクロファージ", "トランスポゾン"],
          answerImg: [bacteriophage],
          answer: 'プロファージ',
          commentary: 'ファージのDNAが、細菌のゲノムに組み込まれた（→溶原化した）状態',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '通性嫌気性の説明として正しいのはどれか（複数選択可）',
          choices: ["酸素が存在しないと増殖できない", "酸素が存在すると増殖できない", "酸素の存在の有無にかかわらず増殖できる", "二酸化炭素が存在すると増殖できない", "二酸化炭素が存在すると増殖できる"],
          answerImg: [facultativeAnaerobic],
          answer: '酸素の存在の有無にかかわらず増殖できる',
          commentary: '例えばグラム陽性球菌・リステリア・ブドウ糖発酵性グラム陰性桿菌（大腸菌など）は、通性嫌気性に分類される。通性嫌気性生物では、酸素が存在する場合には好気的呼吸によって、酸素がない場合には発酵によってエネルギーを得られるようにする。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'グラム陽性桿菌について正しいのはどれか（複数選択可）',
          choices: ["グラム陽性桿菌のうち、リステリア属は通性嫌気性菌である", "破傷風菌に感染する場合、咽頭・扁桃に白から灰白色の偽膜形成が見られる", "人が感染する炭疽菌は95%が皮膚炭疽であり、家畜を扱う人で発症することが多い", "ボツリヌス菌は芽胞を形成する", "ウェルシュ菌は嫌気性芽胞形成菌であり、シチューなどで食中毒をきたす"],
          answerImg: [Listeria, anthracisBacillus, botulinumToxin, perfringensClostridium],
          answer: '1,3,4,5が正しい',
          commentary: 'リステリアはグラム陽性桿菌で通性嫌気性菌。破傷風菌はグラム陽性偏性嫌気性菌で、土の付いたor異物がある傷から芽胞が発芽して破傷風毒テタノスパスミンを産生して骨格筋の強直性痙攣を起こす。炭疽菌は95%が皮膚炭疽であり、家畜からの感染が多い。ボツリヌス菌は芽胞を形成し毒素型食中毒の原因となる。ウェルシュ菌は偏性嫌気性芽胞形成菌であり、十分に混ざっていないシチューなどで感染型食中毒を引き起こす。破傷風菌・ボツリヌス菌・ウェルシュ菌はいずれもクロストリジウム属であり、偏性嫌気性・芽胞形成など共通点が多い。咽頭・扁桃部の白色から灰白色の偽膜形成は主にジフテリアの特徴',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '菌交代現象によって発症するのはどれか（複数選択可）',
          choices: ["腸結核", "カンピロバクター腸炎", "クリプトスポリジウム症", "サイトメガロウイルス食道炎", "クロストリジウム・ディフィシル腸炎"],
          answerImg: [difficile],
          answer: 'クロストリジウム・ディフィシル腸炎',
          commentary: '抗菌薬投与により、腸内の常在菌叢が乱れ、腸内の常在菌叢が乱れることにより発症する。←芽胞形成で抗菌薬に対して生き残りやすいため。入院中の院内感染の原因でもある',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '体育の授業中にサッカーをしていた際、転倒し擦り傷を負った。４日後、発語・構音障害、痙笑などの症状が出現した。上記の症状を起こした原因菌として最も考えられるのはどれか',
          choices: ["ウェルシュ菌", "ボツリヌス菌", "破傷風菌", "サルモネラ菌", "ジフテリア菌"],
          answerImg: [toxin],
          answer: '破傷風菌',
          commentary: '擦り傷から感染しやすいのは破傷風菌。ウェルシュ菌やボツリヌス菌は主に食中毒の原因菌、サルモネラ菌は経口感染により発症する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '黄色ブドウ球菌が関連する病原性として当てはまるものはどれか（複数選択可）',
          choices: ["食中毒", "毒素性ショック症候群", "表皮剥脱性皮膚炎", "化膿性炎症", "アトピー性皮膚炎"],
          answerImg: [SAPathogenicity],
          answer: '全て当てはまる',
          commentary: '黄色ブドウ球菌は耐熱性腸管毒を産生し食中毒の原因となるほか、スーパー抗原であるTSST-1による毒素性ショック症候群、表皮剥奪毒素EFTによるブドウ球菌性表皮剥離症候群SSSS、ロイコシジンPVLによって白血球などを障害することによる化膿性炎症、皮膚の常在菌でありながら毒素を産生するためアトピー性皮膚炎の原因にもなっていると考えられている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '細胞毒に該当する毒素はどれか（複数選択可）',
          choices: ["コレラ毒素", "百日咳毒素", "ジフテリア毒素", "テタノスパスミン", "腸炎ビブリオ毒素"],
          answerImg: [toxin],
          answer: '百日咳毒素、ジフテリア毒素、腸炎ビブリオ毒素',
          commentary: '毒素は主に神経毒、腸管毒、細胞毒に分類され、テタノスパスミン（破傷風毒素）やボツリヌス毒素は神経毒に、コレラ毒素やブドウ球菌エンテロトキシンや大腸菌由来ベロ毒素は腸管毒に、ジフテリア毒素や百日咳毒素や腸炎ビブリオ毒素は細胞毒に分類される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肺炎球菌について誤っているものはどれか（複数選択可）',
          choices: ["食中毒の原因菌としては五番目に多い", "成人の市中肺炎で最も多い起炎菌である", "肺炎から菌血症を合併しやすい", "血液寒天培地上でβ溶血を示す", "予防として生ワクチンが小児にたいして用いられる"],
          answerImg: [pneumoniaeStreptococcus, pneumoniaeStreptococcus2],
          answer: '2,3が正しい',
          commentary: '食中毒の原因菌は、アニサキス43.5%、カンピロバクター20.5%、ノロウイルス11.2%、サルモネラ3.7%、ウェルシュ菌2.6%、ブドウ球菌2.4%。肺炎球菌は市中肺炎の代表的起因菌。侵襲性肺炎球菌感染症は髄膜炎や菌血症など重症化し、死亡率が高い。血液寒天培地ではα溶血性（部分溶血）を示す。肺炎球菌は莢膜を持ち免疫を獲得しにくいので、莢膜成分にアジュバンド（ジフテリア毒素）を配合した不活化ワクチンが用いられる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'メチシリン耐性黄色ブドウ球菌(MRSA)について正しいのはどれか（複数選択可）',
          choices: ["院内感染の主要な起炎菌の一つである", "vanA遺伝子の獲得により耐性化する", "メチシリン以外のβラクタム系抗菌薬にも耐性を示す", "MRSAの治療薬として、バンコマイシンが有効である", "MRSAは人のみならず、家畜やペットからも検出される"],
          answerImg: [MRSA],
          answer: '1,3,4,5が正しい',
          commentary: 'MRSAは、mecAがコードする親和性の低いPBP2’を獲得したことによりメチシリン耐性を持つ。βラクタム系薬によってPBPを阻害してもPBP2’が機能を補ってしまうため、βラクタム系薬にも耐性を示す。院内感染の代表的な起因菌である。治療薬としてバンコマイシンなどグリコペプチド系・アルベカシン（アミノグリコシド系）リネゾリド・ダプトマイシンなどが用いられる。日本では50%程度と特に多い。比較的少ないオランダでも、家畜関連MRSA:LA-MRSAが蔓延した。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '新生児髄膜炎患者の髄液からグラム陽性連鎖球菌が分離された。起因菌として考えられるのはどれか（複数選択可）',
          choices: ["Staphylococcus epidermidis", "Streptococcus agalactiae", "Enterococcus faecalis", "Peptococcus niger", "Peptostreptococcus anaerobius"],
          answerImg: [agalactiaeStreptococcus],
          answer: 'Streptococcus agalactiae',
          commentary: 'B群β溶血性連鎖球菌(Streptococcus agalactiae)は、細胞壁の多糖体抗原性に基づき分類されるLancefieldの分類でgroup Bに分類された連鎖球菌。咽頭部・直腸・膣の常在菌で、産道感染により新生児髄膜炎や新生児敗血症の原因となることがある。Staphylococcusは球菌（表皮ブドウ球菌）、Enterococcusは腸球菌。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '薬剤耐性菌について正しいのはどれか（複数選択可）',
          choices: ["薬剤耐性出現のメカニズムには、自然耐性と獲得耐性がある", "抗菌薬使用と薬剤耐性菌に関係性はない", "世界における薬剤獲得菌に直接起因する死亡者数は、年間100万人以上である", "MRSAは通常の黄色ブドウ球菌に比較して感染力が高い", "バンコマイシン耐性黄色ブドウ球菌は、日本ではまだ分離されたことはない", "ウイルスにも抗ウイルス薬耐性が出現している"],
          answerImg: [resistanceMechanism, MultiDrugResistantPercentage],
          answer: '1,3,5,6が正しい',
          commentary: '薬剤耐性は細菌が備え持つ耐性機構である自然耐性、遺伝子変異を獲得することによる突然変異獲得、プラスミドなどによって外部から獲得する外来遺伝子獲得に分類され、突然変異獲得と外来遺伝子獲得は獲得耐性として扱われる。このうち、突然変異獲得は抗菌薬を使うことで淘汰圧が加わり増える耐性で、抗菌薬の正しい使用が求められる。薬剤耐性に直接起因する死亡者は127万人（日本では8万人程度）で、その関連師は495万人と言われる。2050年には1000万人に達するのではないかとの予測もある。MRSAをはじめ薬剤耐性菌の多くは生存に不必要なタンパク合成や薬剤排出を行っているため、増える能力は通常種より低いことが多い→抗菌薬を使わなければ耐性菌は自然に減少する。黄色ブドウ球菌はペニシリンに自然耐性をもつほか、メチシリンに耐性を持つMRSA、バンコマイシンに耐性をもつVRSAが猛威を振るっており、そのうちMRSAは日本で特に多く（60%/５類定点）見つかっているが、VRSAは2017年時点で日本では一切報告されていない（0%/５類全数）。MRSAの治療にはバンコマイシンが使われるため、このような耐性菌の出現は治療を難しくする。ウイルスも突然変異により薬剤耐性を獲得するため、特にHIVでは多剤服用がゴールドスタンダードになっている。インフルエンザにも抗インフルエンザウイルス株が出現しているらしい。現在有効と言える坑ウイルス剤はHIV、ヘルペスウイルス、インフルエンザウイルス。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '70歳女性、近くの大学病院で慢性腎不全の治療を受けていた。軽快に伴い退院し、以後の加療 を行っていただきたい旨が書かれた紹介状を持って受診された。入院中に便からバンコマイシン耐性腸球菌(VRE)が検出されたと記載されている。入院中から現在まで下痢や発熱は認めていない。適切な対応ははどれか（複数選択可）',
          choices: ["受診の際は常にマスクを着用させる", " 診察の際はガウンを着用する", "トイレのあとはアルコールで手指消毒してもらう", "VRE対策ができないため大学病院へ戻す", "リネゾリドを内服させる"],
          answerImg: [VRE, PPE1],
          answer: '2,3,5が正しい',
          commentary: '腸球菌は腸管常在菌で、病原性は低いものの院内感染の問題がある。腸球菌は飛沫感染しないので、予防には接触感染予防策（手袋・ガウン・手洗い）が重要。治療にはオキサゾリジノン系抗菌薬のリネゾリドが使用される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'バンコマイシン耐性腸球菌に有効な薬はどれか（複数選択可）',
          choices: ["リネゾリド", "コリスチン", "バンコマイシン", "テイコプラニン", "アミノグリコシド"],
          answerImg: [VRE, antibiotics],
          answer: 'リネゾリド',
          commentary: 'バンコマイシンはD-Ala-D-Ala末端に結合し、PBPなどの酵素が認識できないようにして細胞壁合成を阻害するが、VREではD-Ala-D-Lacに変化していてバンコマイシンが結合できない。腸球菌の多くがアミノグリコシド系薬に自然耐性を持っているため、治療にはリネゾリド、ダプトマイシンが治療薬として使われる。テイコプラニンはバンコマイシンと同じグリコペプチド系抗菌薬（VanB型であればテイコプラニン感性）、コリスチンはポリペプチド系でMDRP治療の第一選択薬。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '薬剤耐性菌が発生・伝播する原因はどれか（複数選択可）',
          choices: ["抗菌薬の過剰投与・過剰処方", "新しい抗菌薬の開発の遅れ", "MRSAやVREの耐性菌が発生する要因は、抗菌薬の使用による", "医療機関における不十分な院内感染対策", "MRSAなど動物由来とされるものもある"],
          answerImg: [MRSAFromDrugAbuse, MRSALA],
          answer: '1,2,4,5が該当',
          commentary: '抗菌薬の過剰使用(overuse)と誤用(misuse)が耐性菌選択圧を高める。抗菌薬は徐々に開発が止まってきており、同じ抗菌薬を使い続けることで薬剤耐性菌が広がってしまう。黄色ブドウ球菌 MSSA は突然変異ではMRSAに変身しない → 抗菌薬を使っただけでは自然発生しないため、接触感染予防策の不全による院内感染を疑うべき。MRSAは家畜由来のLA-MRSA(livestock-associated MRSA:家畜関連MRSA)が問題となっている',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '薬剤耐性グラム陽性菌について誤っているものはどれか（複数選択可）',
          choices: ["日本はペニシリン耐性肺炎球菌の割合が高い", "ペニシリン耐性肺炎球菌の耐性機構は、結合親和性の低下である。", "バンコマイシン耐性腸球菌は、米国で多く分離され、家畜からも分離される", "バンコマイシン耐性腸球菌は、近年奈良県において高頻度に分離される", "メチシリン耐性黄色ブドウ球菌は、抗菌薬を使用することで容易に発生する", "メチシリン耐性黄色ブドウ球菌は、人のみならず、家畜からも分離される"],
          answerImg: [MultiDrugResistantPercentage, VRE, MRSAFromDrugAbuse, MRSALA],
          answer: '5が誤り...MRSAは抗菌薬の使用だけでは発生しない',
          commentary: '日本ではMRSAやPRSP(ペニシリン耐性肺炎球菌)の割合が高い（約60%/５類定点）一方で、VRSAやVREはほとんど見つかっていない。肺炎球菌は対数増殖期に自然とコンピテント状態となり、口腔内連鎖球菌由来のPBP遺伝子と遺伝子組み換えを起こしてペニシリン耐性を獲得する。PBP変異を起こすとペニシリンなどのβラクタムへの結合親和性が低下する。バンコマイシン耐性腸球菌VREは米国では約80%の割合に達していて、日本でも今後流行する恐れがある。家畜からも分離されるが、近年は家畜への抗菌薬の使用制限により減少傾向。VREは奈良県総合医療センターで集団感染があったらしい。メチシリン耐性黄色ブドウ球菌MRSAは抗菌薬を使っただけでは（突然変異では）耐性を獲得しないとされ、見つかった場合は院内感染が疑われる。また、家畜由来のLA-MRSAが問題となっている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ウイルス感染細胞に起こりうる変化でないのはどれか（複数選択可）',
          choices: ["ガン化", "細胞表面の変化", "封入体の形成", "細胞変性効果", "インターフェロン産生低下"],
          answerImg: [virusInfectedCell],
          answer: 'インターフェロン産生低下',
          commentary: 'ウイルスの中には体細胞DNAに遺伝子を組み込んだり慢性的な炎症を引き起こすことで発ガンを誘導するウイルス（EBウイルス→リンパ腫など、HPV→子宮頸がん、HAV・HBV・HCV→A型・B型・C型肝炎など）もある。狂犬病ウイルスやサイトメガロウイルスに感染すると、特徴的な封入体が形成される。ウイルスを感知した感染細胞は一般的に抗ウイルス状態を誘導するインターフェロン産生を増加させる。この機構はインターフェロンを使った治療:PEG-IFNなどに活用されている。その他、ウイルス感染細胞は細胞変性効果CPR:cytopathic effect(細胞の円形化・細胞融解・細胞融合・単核の巨細胞化)により細胞死を誘導したり、細胞表面に赤血球凝集エンベロープや細胞膜融合型エンベロープを発現することで細胞障害性T細胞による排除を誘導したりする。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '我が国で使用されている生ワクチンはどれか（複数選択可）',
          choices: ["BCG", "麻疹", "コレラ", "日本脳炎", "インフルエンザ"],
          answerImg: [liveVaccine],
          answer: 'BCG、麻疹',
          commentary: '弱毒生ワクチンは、毒性や病原性が低下した生きた微生物を用いるワクチン。副作用が大きいが、細胞性・液性免疫両方が賦活化され、長期間の効果を得られる。代表的な生ワクチンとして、BCG・麻疹ワクチン・風疹ワクチン・水痘ワクチン・ムンプスワクチン・黄熱ワクチン・ロタウイルスワクチンなどが挙げられる。一方で不活化ワクチンは不活化されているため安全性が高いが、細胞性免疫の誘導は低いため複数回の投与が必要で免疫不全患者や妊婦にも投与が可能である。代表的な不活化ワクチンとして、日本脳炎ワクチン・A型肝炎ワクチン・インフルエンザワクチン・B型肝炎ワクチン・コンジュゲートワクチンが挙げられる。コレラワクチンは輸入ワクチンをトラベラーズワクチンとして利用できる、経口不活化ワクチン。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'レトロウイルスに該当するものとして正しいのはどれか（複数選択可）',
          choices: ["急性感染", "逆転写酵素", "DNAウイルス", "ヒトのがんウイルス", "ヒトT細胞白血病ウイルス"],
          answerImg: [virusVariety],
          answer: '逆転写酵素、ヒトのがんウイルス、ヒトT細胞白血病ウイルス',
          commentary: 'レトロウイルス科にはヒトT細胞白血病ウイルス(HTLV-1)やヒト免疫不全ウイルス(HIV)が分類され、いずれも1本鎖RNAを逆転写し細胞DNAに組み込むことによって増殖し、CD4+T細胞に感染して長い期間をかけて免疫不全を誘導する。HTLV-1はプロウイルスの組み込まれたCD4+T細胞を腫瘍化する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '五類感染症に該当するものはどれか（複数選択可）',
          choices: ["バンコマイシン耐性腸球菌", "ペニシリン耐性肺炎球菌", "メチシリン耐性黄色ブドウ球菌", "多剤耐性アシネトバクター", "ESBL産生腸内細菌科", "カルバペネム耐性腸内細菌科"],
          answerImg: [MultiDrugResistantPercentage],
          answer: 'ESBL産生腸内細菌科以外すべて該当',
          commentary: '5類感染症には全数把握の感染症と特定の病院が報告する定点把握の感染症があり、MRSA(メチシリン耐性黄色ブドウ球菌),PRSP(ペニシリン耐性肺炎球菌),MDRP(多剤耐性緑膿菌)が5類定点、VRSA(バンコマイシン耐性黄色ブドウ球菌),VRE(バンコマイシン耐性腸球菌),MDRA(多剤耐性アシネトバクター),CRE(カルバペネム耐性腸内細菌科)が5類全数に分類される。比較的分離頻度の高い感染症は定点である傾向にある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ウイルスの説明で正しいのはどれか（複数選択可）',
          choices: ["宿主細胞内のみで増殖する", "エネルギー産生機構を持たない", "人工培地で培養できる", "多くは種特異的、組織特異的に感染する", "ウイルスゲノムが宿主細胞のゲノムに組み込まれることがある"],
          answerImg: [virusBacteria],
          answer: '3以外すべて正しい',
          commentary: 'ウイルスはバクテリアとは異なり、人工培地では自己増殖できず、宿主細胞の反応系を使って増殖する。エネルギーも宿主細胞のものを使う。ウイルスの一部はゲノムを宿主細胞のゲノムに組み込み、発ガンを誘導する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '感染様式について正しいのはどれか（複数選択可）',
          choices: ["水痘は性交感染する", "ポリオウイルスは発症に媒介動物が関与する", "RSウイルス感染症は母子感染症を引き起こす", "ノロウイルスは血液を介して院内感染が起こる", "重症熱性血小板減少症候群(SFTS)は、主にマダニに噛まれることにより感染する"],
          answerImg: [VZV, poliovirus, RSV, norovirus, SFTS],
          answer: '重症熱性血小板減少症候群(SFTS)は、主にマダニに噛まれることにより感染する',
          commentary: '水痘(VZV)はヘルペスウイルス科のDNAウイルスで、伝染力が極めて強く空気感染・接触感染・飛沫感染により感染する。ポリオウイルスはヒトのみに感染し、糞口感染によって感染する。RSウイルス(Respiratory syncytial virus)は強い感染力で、母体移行抗体の存在する乳児期前半でも胎児が感染するが、感染経路は呼吸器からである。ノロウイルス患者は激しい嘔吐や下痢を引き起こし、接触感染や飛沫感染から感染する、非常に感染力の強いウイルス。SFTSはダニ媒介性感染症で、日本ではフタトゲチマダニに噛まれることにより感染する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'インフルエンザウイルスについて、誤っているものはどれか（複数選択可）',
          choices: ["DNAウイルスなので抗原変異を起こしにくい", "表面に赤血球凝集素をもつ", "受容体は気管上皮のシアル酸である", "B型インフルエンザとC型インフルエンザはヒトだけを宿主とする", "季節性インフルエンザは抗原連続変異によりHAやNAが変異する", "エンベロープを持つため、消毒薬などに抵抗性が高い"],
          answerImg: [influenzaVirusA, influenzaVirusHA, antigenDrift],
          answer: '1,4,6が誤り',
          commentary: 'インフルエンザウイルスは1本鎖(-鎖)RNAウイルスで、表面に赤血球凝集素(HA)を持つ。これが上気道粘膜細胞のシアル酸受容体と結合することで細胞内に侵入する。B型インフルエンザはヒトのみを宿主とするが、C型はヒトとブタ、A型は渡り鳥から豚や鯨まで幅広い哺乳類や鳥類を宿主にもつ。インフルエンザウイルスの抗原変異には突然変異による季節性の抗原連続変異(antigen drift)と遺伝子再集合による全く新しい抗原不連続変異(antigen shift)がある。いずれも表面のHAやNA抗原の変化である。インフルエンザウイルスはエンベロープを持つため、熱・酸・界面活性剤で失活しやすい。',
        },
        {
          detailInfo: '',
          questionImg: [question202202],
          questionSentence: '図は我が国のRSウイルス患者数の推移を示している。2021年に流行が認められたが、同様に2022年において我が国でその患者数が増大することが予想される感染症ははどれか（複数選択可）',
          choices: ["狂犬病", "水痘・帯状発疹", "エボラ出血熱", "インフルエンザウイルス", "EBウイルス", "ヒトヘルペスウイルス"],
          answerImg: [antigenDrift],
          answer: 'インフルエンザウイルス・（エボラ出血熱）',
          commentary: 'RSウイルス(Respiratory syncytial virus)は主に呼吸器を通して感染が伝播する。狂犬病は長らく日本で出ていない上、ワクチンが普及している。水痘・帯状発疹ウイルスもワクチン接種が定期接種になってから患者数は減少傾向。エボラ出血熱は1類感染症に分類され、接触感染が主である。インフルエンザウイルスは毎年流行している。EBウイルスは95%の人々が成人までに感染する（ほとんどは風邪のような症状で治癒する）特徴から、患者数が2022年に増大するとは考えにくい。ヘルペスウイルスは1型が飛沫感染・接触感染、2型が性的感染・母子感染により伝播し、日本人の1割以上がすでに感染している（高齢ほど感染率が高い）と言われている。　これらを考慮するとインフルエンザな気がするが、感染を予想させる問題になんの意味があるのか、逆に問いたい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '実習で行った操作について正しいのはどれか（複数選択可）',
          choices: ["白金耳は火炎滅菌して実験を行った", "換気をよくする必要があり、窓を開けて実験を行った", "光学顕微鏡で観察する際、無水アルコールを滴下してから検鏡した", "生化学的性状試験により菌種を同定した", "薬剤感受性について、薬剤ディスクの周辺の阻止円の直径の長さにより判別した"],
          answerImg: [disc],
          answer: '白金耳は火炎滅菌して実験を行った、　生化学的性状試験により菌種を同定した、　薬剤感受性について、薬剤ディスクの周辺の阻止円の直径の長さにより判別した',
          commentary: '実習書より、一般注意事項その４：実習中はほとんどの操作を無菌状態で行うため出入り口のドア及び窓は常時閉めておく。　光学顕微鏡は油浸レンズを用いるので、油侵オイルを一滴滴下して観察した（使用後は無水エタノールを用いて清拭した）。　菌種の同定には生化学的性状（IDテスト）のほか、遺伝子同定で調べる方法もある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'DHL寒天培地に含まれる細菌培養の選択性を示すための物質はつぎのうちはどれか（複数選択可）',
          choices: ["胆汁酸塩", "酵母抽出物", "塩化ナトリウム", "ニュートラルレッド", "フェノールレッド"],
          answerImg: [experimentCulture],
          answer: '胆汁酸塩',
          commentary: 'DHL寒天培地は胆汁酸塩（デオキシコール酸）・乳糖・中性紅（ニュートラルレッド）などが含まれている。デオキシコール酸はグラム陽性菌の発育を抑制する作用を持つ中性〜アルカリ性の物質。乳糖分解菌の場合は、乳糖から分解されて生じた酸によって胆汁酸が析出し、中性紅と反応して色が変化する。フェノールレッドや塩化ナトリウムはマンニット食塩寒天培地の構成物質。酵母抽出物はLB寒天培地の構成物質。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '実習で扱った細菌として正しいのはどれか（複数選択可）',
          choices: ["大腸菌はグラム染色をすると、赤色（ピンク色）の球菌で観察された", "黄色ブドウ球菌を過酸化水素水と混ぜると激しく泡が発生した", "表皮ブドウ球菌(S.epidermidis)をウサギプラズマに入った試験管に接種し、一晩37°Cで培養すると凝固した", "CTX(Cefotaxime)に耐性を示した腸内細菌科において、CTXC(Cefotaxime/Clavulanate)の阻止円が≧5mm拡張していればESBLと判定する", "CFX(Cefoxitin)に耐性を示した黄色ブドウ球菌について、MRSAと判定する。"],
          answerImg: [ESBL, MRSA],
          answer: '2,4,5が正しい',
          commentary: '大腸菌E.coliはグラム陰性通性嫌気性桿菌で、グラム染色では赤～ピンク色に染まる。黄色ブドウ球菌はカラターゼを持つ（ことにより活性酸素種に耐える）ので、過酸化水素水を水と酸素に変える。表皮ブドウ球菌はコアグラーゼを持っていないので、ウサギプラズマは凝固しない。黄色ブドウ球菌はコアグラーゼをもち、病原性が比較的高い。ESBL（基質拡張性βラクタマーゼ）はクラブラン酸CVAにより作用を阻害されるので、ESBLならCTXCの阻止円はCTXより阻止円が大きくなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '培地について正しいことを示しているのはどれか（複数選択可）',
          choices: ["大腸菌や肺炎桿菌は、DHL寒天培地上で赤色のコロニーであることが多い", "マンニット食塩寒天培地に対して、黄色ブドウ球菌は黄色を呈する", "マンニット食塩寒天培地にはニュートラルレッドが含まれる", "ミュラーヒントン寒天培地は選択制がなく、薬剤感受性試験に用いた", "手掌の消毒効果を確認するために、SCDLP寒天培地を用いた"],
          answerImg: [experimentCulture],
          answer: '1,2,4,5が正しい',
          commentary: '大腸菌や肺炎桿菌はDHL寒天培地の乳糖を分解してニュートラルレッドの色を呈する。黄色ブドウ球菌はマンニット（糖）を分解して培地を酸性化し、フェノールレッドによる赤色から黄色へと変化させる。ミュラーヒントン寒天培地に含まれるデンプンは寒天中に含まれる発育阻害物質を吸着する作用があり、薬剤以外の物質による発育抑制を低減する。　＊ニュートラルレッドはpH7付近で赤色を呈する指示薬、フェノールレッドはpH8付近で赤色を呈する指示薬',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肺炎について誤っているものはどれか（複数選択可）',
          choices: ["高齢者の肺炎は誤嚥を元に発症することが多い", "現在我が国では肺炎による死亡者の95%以上が高齢者で占められている", "レジオネラ感染症では、ほとんどが急激に重症化するレジオネラ肺炎を発症するため、自然治癒することはない", "肺炎の原因として、感染性のもの（細菌性・ウイルス性・真菌など）と非感染性のもの（間質性肺炎）が挙げられる", "肺炎球菌ワクチンの成分は莢膜多糖体である"],
          answerImg: [LegionellaPathogenicity, pneumoniaeStreptococcus],
          answer: '3が誤り...ほとんどは自然治癒する',
          commentary: '肺炎は日本人の死因第4位であるが、その95%以上は65歳以上の高齢者である。肺炎の80%以上は誤嚥性肺炎が占め、そのほとんどは飲み込む能力の衰えた高齢者である。レジオネラ肺炎はほとんどが軽傷で数日で治ることが多いが、高齢者などでは急激に重症となり死亡することがある4類感染症。肺炎は感染症に起因するものと、生活習慣に起因する非感染性のものが挙げられ、喫煙が重要な因子となっている。肺炎球菌は莢膜に覆われているので、莢膜多糖体に加えてジフテリア毒素などのアジュバンドを含んだものがワクチンとして使われている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '呼吸器疾患(肺炎）の原因となるウイルスはどれか（複数選択可）',
          choices: ["ロタウイルス", "ノロウイルス", "ライノウイルス", "ヒトヘルペスウイルス6型", "アデノウイルス"],
          answerImg: [pneumonia, virusBacteria],
          answer: 'ライノウイルス・アデノウイルス',
          commentary: 'ロタウイルス・ノロウイルスはともに消化管に感染し下痢の症状が特徴的なウイルスである。ライノウイルスは冬から春にかけて呼吸器に感染し鼻風邪症状を引き起こす。ヒトヘルペスウイルス6型・7型(HHV-6/7)は唾液を介してTリンパ球に感染する二本鎖線状DNAウイルス。アデノウイルスは消化に抵抗し腸管で増殖する他、急性咽頭炎の原因にもなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '院内感染が起きた場合、対処するべきこととして正しいのははどれか（複数選択可）',
          choices: ["院内感染委員会に報告", "発生の原因究明(感染源・感染経路など)", "二次感染予防（定期的な清掃・手指消毒の徹底）", "多くが飛沫感染によるため、接触感染防止策を講じる必要はない", "感染拡大防止としてワクチンを接種する"],
          answerImg: [handHygiene],
          answer: '院内感染委員会に報告、　発生の原因究明(感染源・感染経路など)、　二次感染予防（定期的な清掃・手指消毒の徹底）',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '現在、世界中で流行中もしくは増加傾向にある感染症はどれか（複数選択可）',
          choices: ["サル痘", "ペスト", "ジカウイルス", "新型コロナウイルス", "インフルエンザウイルス"],
          answerImg: [],
          answer: 'インフルエンザのみ(2023年時点)',
          commentary: 'サル痘患者は日本では2023年に入って感染急増しているが、世界的にはサル痘の流行は2022年春から秋にかけてがピークで、2023年以降は激減している。ペストは近年でも世界で感染が続いている(１０年間で約50000人感染、死亡者約5000人)が、流行中とは言えない。ジカウイルスは2015年のブラジルでの流行が印象的だが、2016年11月にはWHOがPHEIC終息声明をしており流行は落ち着いた。新型コロナウイルスも2023年現在では流行が落ち着いてきている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '真菌の構造について正しいものはどれか（複数選択可）',
          choices: ["真菌には細胞壁はない", "β-D グルカンは(1,3)β-グルカンと、(1,6)β-グルカンが存在し臨床的に検査が可能なのは(1,6)β-グルカンである", "β-Dグルカンはセルロースを用いた透析、アルブミン製剤、アガリスクの大量摂取により偽陽性が出現する", "細胞膜にはエルゴステロールという成分が含まれており、薬剤としてはエルゴステロール合成を阻害する薬剤が存在する", "深在性真菌症は減少傾向にある"],
          answerImg: [fangusStructure, betaDGlucan13, betaDGlucanFalsePositive],
          answer: '3,4が正しい',
          commentary: '真菌は細胞壁をもつ真核生物に属する微生物で、ミトコンドリアをもち細胞壁に真菌特異的なβ-D-グルカンを持つ。β-D-グルカンは深在性真菌感染症のスクリーニング検査として(1→3)-β-D-グルカンが臨床的に利用されている。β-D-グルカンはほぼ全ての病原真菌を検査できるバイオマーカーであるが、この検査だけでは禁酒の同定ができず、セルロース素材の透析膜を用いた血液透析・アルブミンなどの血液製剤・敗血症患者・多発性骨髄腫・アガリクスなどのキノコ類の大量摂取により偽陽性が出てしまうことに注意が必要。また、真菌は細胞膜にエルゴステロールを含んでいて、アゾール系抗真菌薬(PSCZ,VRCZなど)はエルゴステロールの合成を阻害することで作用する。真菌症は白癬菌を除いて、免疫状態の低下した患者にのみ発症することが多いが、免疫抑制剤の使用に伴い深在性真菌症は増加傾向にある。特にアスペルギルス症・カンジダ症が多い。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次のうち、正しい組み合わせはどれか（複数選択可）',
          choices: ["酵母 - Fusarium spp.", "酵母 - Candida tropicalis", "糸状菌 - Aspergillus fumigatus", "糸状菌 - Cryptococcus gattii", "二形成真菌 - Candida albicans"],
          answerImg: [fangusVariety],
          answer: '2,3,5が正しい',
          commentary: '真菌は栄養細胞の形態によって、糸状菌・酵母菌・二形性真菌に分類される。Fusarium(フサリウム属)は、糸状菌に分類される真菌である。Candida tropicalis(カンジダ属でC.albicans以外)はカンジダ症の原因となる酵母菌に分類される真菌である。Aspergillus fumigatus(アスペルギルス属)はアスペルギルス症の原因となる最も代表的な糸状菌に分類される真菌である。Cryptococcus gattii(クリプトコッカス属)は、クリプトコッカス症(の中でも輸入真菌症)の原因となる酵母菌に分類される真菌である。Candida albicansは二形性真菌に分類される真菌である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '抗真菌薬として正しい組み合わせはどれか（複数選択可）',
          choices: ["エルゴステロール合成阻害 - リポソーマルアムホテリシンB", "DNA合成阻害 - フルシトシン", "(1,3) β-Dグルカン合成阻害 - ポリコナゾール", "エルゴステロール作用、細胞膜破壊 - ミカファンギン", "エルゴステロール合成阻害 - カスポファンギン"],
          answerImg: [antiFungal],
          answer: '2が正しい',
          commentary: '抗真菌薬には真菌細胞膜のエルゴステロールの合成を阻害するアゾール系、エルゴステロールに直接作用して細胞膜を破壊するポリエン系、細胞壁の1,3-β-D-グルカンの合成を阻害するキャンディン系、DNAの合成を阻害するピリミジン系が存在する。このうちアムホテリシンB(AMPHB)はポリエン系、フルシトシンはピリミジン系、ポリコナゾールはアゾール系、ミカファンギン(MCFG)はキャンディン系、カスポファンギンはキャンディン系に分類される。アムホテリシンBは抗真菌スペクトルが広いことが特徴。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肺結核症の原因菌はどれか（複数選択可）',
          choices: ["Mycobacterium gordonae", "Mycobacterium avium complex", "Mycobacterium leprae", "Mycobacterium tuberculosis", "Mycobacterium kansasii"],
          answerImg: [tuberculosis],
          answer: 'Mycobacterium tuberculosis',
          commentary: '結核菌群に含まれるのは、Mycobacterium属の中でもM.tuberculosis、M.bovis、M.africanum、M.caprae、M .canettii、M.microti、M.pinnipediiで、M.lapraeとM.lepraemuriumはらい菌群に分類される。そのほかM.avium complexやM.gordonae、M.kansasiiなどは非結核性抗酸菌群NTM:nontuberculosis mycobacteriaに分類される。結核菌は空気感染する偏性好気性細胞内寄生性抗酸菌で、治療には抗結核薬が用いられる。らい菌はハンセン病の原因菌で、感染力が極めて低く遺伝しない。NTMは環境中に広く分布する日和見感染症の原因。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肺結核症を疑って検査をすすめるべきケースはどれか（複数選択可）',
          choices: ["２週間以上長引く咳", "抗菌薬に反応の悪い不明熱", "他疾患の治療中に咳、発熱が出現し直りにくい", "原因不明の体重減少・衰弱など", "呼吸器症状はないが、がんの術後"],
          answerImg: [tuberculosisDiagnosis],
          answer: '1,2,3,4の場合、肺結核を疑うべき',
          commentary: '肺結核は疑わなければ診断できない。２週間以上長引く咳や、抗菌薬不応性の熱、原因不明の体重減少・衰弱（特に高齢者）、他疾患の治療中に咳・発熱が出現し治りにくいなどの場合は塗抹検査(喀痰塗抹調査など)・培養検査・PCR検査などの結核菌検査を行うべきである。塗沫検査やPCR検査は短時間でできる検査で、培養検査は最終的な生きた生きた結核菌が存在するか、薬剤耐性の確認などで利用される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肺結核の治療に関して、不適切なのはどれか（複数選択可）',
          choices: ["化学療法は単剤で行うのが原則である", "症状が軽快した場合、治療は直ちに終了する", "肺結核の治療において薬剤による副作用を早期に発見することが大切である", "薬剤感受性試験の結果が判明後に治療を行う", "ピラジナミドは副作用が少ないため、80歳以上の高齢者でも積極的に使用する"],
          answerImg: [tuberculosisTreatment2, tuberculosisTreatment],
          answer: '1,2,4,5は不適切',
          commentary: '結核化学療法の原則として、感性剤の使用、副作用の早期発見、完全服薬DOTSの実施、併用療法がある。結核は薬剤耐性菌が発生しやすく、治療は感受性のある複数の抗結核薬の併用療法が原則となる。服用の中断は薬剤耐性菌の原因となるので、必ず最後まで服薬してもらう。副作用は1/4の割合で起こるとも言われる。感受性試験の結果には時間がかかり、結果が出るまでの間も効きそうな薬を用いて治療を行うことが重要。ピラジナミドは抗結核薬であるが、肝障害・アレルギー・皮膚炎・胃炎・血液異常・関節痛などの副作用が報告されている。副作用の少ない抗結核薬は存在しないので、特に治療開始初期の２ヶ月間はさまざまな検査を行いながら副作用がないか調べる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '結核の治療に用いる以下の薬剤と副作用の関係で不適切なのはどれか（複数選択可）',
          choices: ["INHイソニアジド - 末梢神経障害", "RFPリファンピシン - 血液異常", "EBエタンブトール - 第８脳神経障害", "PZAピラジナミド - 肝障害", "SMストレプトマイシン - 視覚障害"],
          answerImg: [tuberculosisSideEffect],
          answer: '3,5が誤り',
          commentary: '日本で用いられる主な抗結核薬として、リファンピジンREF、イソニアジドINH、ピラジナミドPZA、エタンブトールEB、ストレプトマイシンSMがある。結核では多剤併用が基本であり、2(2ヶ月間の)HRZE/4HRや6(６ヶ月間の)HRE/3HRといった治療法が採用されるが、いずれもかなりの割合で副作用が出現する。INHは肝障害・アレルギー・血液異常・末梢神経炎などのリスクがあり、RFPは肝障害・アレルギー・血液異常・胃炎などのリスク、EBは肝障害・アレルギー・血液異常・視力・色覚異常、PZAは肝障害・アレルギー・皮膚炎・胃炎・血液障害・関節痛などのリスク、SMはアレルギー・聴覚障害・腎障害・第８脳神経障害などのリスクが報告されている。副作用は4人に1人の割合とも言われ、治療を開始したら都度検査を行い副作用の早期発見を目指す。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ハンセン病に関して正しいのはどれか（複数選択可）',
          choices: ["遺伝はしない", "感染力は比較的高い", "感染しても発症は稀", "1996年 (平成 8 年)になってようやく 「らい予防法」は廃止された", "完治する病となった現在も、差別は残っている"],
          answerImg: [lepraeMycobacterium],
          answer: '1,3,4,5が正しい',
          commentary: 'ハンセン病はらい菌による慢性の細菌性感染症で、遺伝しない・感染力が極めて低い・感染しても発症は稀・現在でリファンピシンという効果的な治療薬がある、という特徴を持つ。かつては原因や治療法が見つからなかったため、らい予防法(昭和28年公布平成8年廃止)による患者の隔離・排除→差別が横行していた。完治する病となった現在でも、この差別は残っている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の手指衛生に関する記述で正しいのはどれか（複数選択可）',
          choices: ["流水と石鹸による方法とアルコールによる方法があるが、流水と石鹸による方が手指の微生物をより多く減少させることができる", "Clostridioides difficile感染症の患者の処置の後、流水と石鹸による手洗いを行った", "患者の診察を行う前、アルコールによる手指衛生を行った", "処置で手袋を使用した際には、脱いだ後手指衛星は必要ない", "患者の採血後、血液が手に付着してしまったため、アルコールによる手指衛生を行った"],
          answerImg: [handWashing],
          answer: '2,3が正しい',
          commentary: '細菌を減らす効果は、石鹸＋流水よりアルコールの方が高い（多く減少させる）が、アルコールはディフィシルのような芽胞形成菌に対して消毒作用が不十分である。このような芽胞や単純な汚れの場合は石鹸＋流水による洗い流し作用による手指衛生を行う方が有効である。医療行為や介護の前後などには、アルコールや石鹸＋流水のような衛生学的手洗いが行われる。手袋は一定の割合で不良品が混ざっていたり、手袋を脱ぐ際に手指が汚染されたりすることがあるので、手袋を脱いだ後に手指衛生が必要。血液が手に付着した場合はまず石鹸＋流水で洗いながすべき。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '標準予防策について正しいのはどれか（複数選択可）',
          choices: ["汗以外のすべての患者の体液は、感染性のあるものとして取り扱う", "医師や看護師など、患者と直接接する職種を対象とした対策である", "患者の血圧測定をするため、手袋を着用した", "患者の採血を行うため、手袋を着用した", "呼吸器衛生・咳エチケットも構成要素の1つである"],
          answerImg: [standardPrecautions],
          answer: '1,4,5が正しい',
          commentary: '標準予防策(Standard Precautions)は、すべての患者に対して、清掃員など含む全ての職員が行うべき院内感染対策の指針である。　標準予防策の内容は、1.汗以外の体液・分泌物・排泄物は感染性があるとみなし、素手では触らない。2.粘膜には素手で触らない。3.正常ではない皮膚には素手で触らない。　特に重要なのは手指衛生、個人防護具の使用、呼吸器衛生・咳エチケットの3つである。血圧測定など、皮膚を触る程度なら標準予防策の適応にはならない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '感染経路別予防策について、間違っているのははどれか（複数選択可）',
          choices: ["医療機関において重要な3つの感染経路は、接触感染、飛沫感染、空気感染である", "インフルエンザの患者に対応するため、サージカルマスクを着用した", "新型コロナウイルス感染症の主たる感染経路は接触感染である", "結核性胸膜炎の患者に対応するため、N95マスクを着用しなければならない", "MRSA保菌患者の血圧を測定するため、手袋とエプロンを着用した"],
          answerImg: [mask, gown],
          answer: '3,4,5が誤り',
          commentary: 'マスクにはサージカルマスクとN95マスクの二種類があり、インフルエンザのような飛沫感染する感染症患者に対応する際は、サージカルマスクを着用する。新型コロナウイルス感染症の感染経路としてエアロゾル感染があり、こちらは細かい粒子からでも感染するリスクがあるためN95マスクの着用が推奨される。結核性胸膜炎は結核菌の感染により引き起こされる胸膜炎であるが、肺結核とは異なり結核菌を他人に移す可能性が極めて低いため、必ずしもN95マスクを着用しなければならないわけではない。MRSAのような接触感染のリスクがある感染症患者に触れるときは手袋とガウンを着用する。ガウンは一般的なエプロンとは違って袖がある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '空気感染対策が必要な感染症ははどれか（複数選択可）',
          choices: ["結核", "流行性耳下腺炎", "麻疹", "水痘", "風疹"],
          answerImg: [mask],
          answer: '結核・麻疹・水痘',
          commentary: '空気感染とは飛沫核感染のことで、細かい飛沫からでも感染が広がる感染経路のことである。空気感染する感染症は、麻疹・結核・水痘で、播種性帯状疱疹も含まれる。風疹や流行性耳下腺炎はより大きな粒子からのみ感染する、飛沫感染に分類される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: ' 結核症の検査に関して誤っているのははどれか（複数選択可）',
          choices: ["ツベルクリン反応はBCG接種や非結核性抗酸菌による影響を受ける", "ツベルクリン反応は発赤10mm以上が陽性である", "IGRAは活動性結核と潜在性結核感染症を区別可能である", "IGRAはBCG接種や大部分の非結核性抗酸菌症感染の影響を受けない", "IGRA(Interferonーγ release assay)は結核菌特異抗原により、全血あるいは精製リンパ球を刺激後、産生されるインターフェロンγ(IFNーγ)を測定している"],
          answerImg: [],
          answer: '3が誤り...区別できない',
          commentary: 'ツベルクリン反応検査は、結核菌培養濾液から精製した抗原を皮内投与し、48時間後に接種部位の発赤などを測定して感染を診断する方法であるが、この方法では非結核性抗酸菌感染やBCG接種に対しても反応してしまうため、IGRA検査法が考案された。IGRA:Interferon gamma release assayは結核感染を受けた人の血液に結核菌の特異的な蛋白抗原を作用させ、血液中の抗原特異的T細胞から産生・放出されるインターフェロンγを測定して感染を診断する方法で、BCG既接種者においても結核感染を正確かつ客観的に診断できる。IGRA検査では活動性結核と潜在性結核感染を区別する事はできない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '医療関連感染に関する以下の記述について、正しいのははどれか（複数選択可）',
          choices: ["介護施設で起こったアウトブレイクも含まれる", "患者が退院後に発症した偽膜性腸炎も含まれる", "医療従事者が施設内で感染した場合も含まれる", "医療関連感染制御を担うため、病院ではICTが組織されている", "様々な対策を組み合わせながら、リスク軽減という考えのもと取り組むことが重要である"],
          answerImg: [hospitalAcquiredInfection, ICT],
          answer: 'すべて正しい',
          commentary: '介護施設や在宅医療など、医療が提供される環境が多様化していることを考慮して、「院内感染」から「医療関連感染」という言葉が使われるようになった。医療関連感染には、入院患者が入院中に感染し、退院後に発症した場合も含まれ、医療従事者が施設内で感染した場合も該当する。厚生労働省の指針により、病院では院内感染対策チーム:ICT(Infection Control Team)が病院長直属で設置されている。院内感染は対策をどれだけ行っても完全に防げるわけではないし、エビデンスが全てにあるわけではないので、リスク軽減という考え方に基づき対応していく事が大事。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '抗菌薬と作用機序の組み合わせで正しいのはどれか（複数選択可）',
          choices: ["コリスチン - タンパク質合成阻害", "アンピシリン - 細胞壁合成阻害", "シプロフロキサシン - 核酸合成阻害", "アジスロマイシン - 葉酸合成阻害", "ダプトマイシン - 細胞膜機能障害"],
          answerImg: [antibiotics],
          answer: '2,3,5が正しい',
          commentary: 'コリスチンはポリペプチド系抗菌薬（細胞膜合成阻害）で、多剤耐性グラム陰性桿菌（MDRP/MDRA/CRE）に対する代表的な治療薬。アンピシリンはペニシリン系、シプロフロキサシンはキノロン系（核酸合成阻害薬）、アジスロマイシンはマクロライド系（タンパク合成阻害）、ダプトマイシンはリポペプチド系抗菌薬（細胞膜合成阻害薬）で、こちらは多剤耐性グラム陽性球菌（MRSA）に有効',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '抗菌化学療法について正しいのははどれか（複数選択可）',
          choices: ["ヒトに対して副作用が少なく、細菌に対して効果が高いことをスペクトルという", "抗菌薬が体内に入ったとき、感染部位へと移行する度合いを組織移行性という", "マクロライド系抗菌薬は殺菌作用をもつ", "ペニシリンは、TDMが必要である", "抗菌薬適正使用を推進するため、病院にはASTが設置されている"],
          answerImg: [spectorum, TDM, AST],
          answer: '2,5が正しい',
          commentary: 'スペクトルは抗菌薬が活性を持つ範囲のこと。参考：ESBL。抗菌薬は常在菌にも作用してしまうため、必ずしもスペクトルが広いほど良いわけではない。通常は治療初期に使用される。　組織移行性は薬剤の感染部位（臓器・組織）へ移行する度合いのこと。マクロライド系抗菌薬はタンパク質合成阻害薬で、殺菌ではなく静菌作用（増殖の阻害）をもつ。TDM:Therapeutic Drug Monitoringは薬剤の血中濃度をモニタリングすることで、薬物投与方法に関与する。β-ラクタム系抗菌薬は血中濃度がMIC以上となる時間が長いほど効果的で、投与する場合は分割投与を行う（→薬剤血中濃度モニタリングまでは行わない）。AST:Antimicrobial stewardship teamは抗菌薬適正使用を管理するチームであり、医師・薬剤師などで構成される',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'エンピリック治療を行うにあたって有用な情報ははどれか（複数選択可）',
          choices: ["感染している臓器", "アンチバイオグラム", "患者の年齢・性別・家族構成", "基礎疾患の有無", "患者の行動歴・食事歴"],
          answerImg: [empiricTherapy, antibiogram],
          answer: 'すべて該当',
          commentary: 'エンピリック（経験的）治療とは、治療者が、医学的に厳密な根拠というよりは自分の経験を基準として治療を行うこと。原因菌が決定していない場合などに用いられる。経験的治療をするには、感染臓器と想定される病原微生物の傾向、アンチバイオグラム（ある施設、ある一定期間において分離された微生物の各種抗菌薬への感性率の表）、などのサーベイランスが必要。また、検査結果がそろってきた段階で、より狭域な抗菌薬などに変更していくことをde-escalationという。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の抗菌薬のうち、βーラクタム系薬ははどれか（複数選択可）',
          choices: ["ピペラシリン", "イミペネム", "セフトリアキソン", "セフメタゾール", "セフェピム"],
          answerImg: [antibiotics],
          answer: 'すべて該当',
          commentary: 'ピペラシリンはペニシリン系、セフメタゾールはセファマイシン系、イミペネムはカルバペネム系、セフトリアキソン・セフェピムはセフェム系のβ-ラクタム系抗菌薬。β-ラクタム系抗菌薬はTAM(Time Above MIC)が重要で、分割投与が行われる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'カルバペネム系抗菌薬で治療中、激しい下痢と腹痛が出現した。この原因として考えられる微生物ははどれか（複数選択可）',
          choices: ["Staphylococcus aureus", "Candida albicans", "Psudomonas aeruginosa", "Clostridioides difficile", "Escherichia coli"],
          answerImg: [difficile],
          answer: 'Clostridioides difficile',
          commentary: 'ディフィシル(CD)による菌交代現象が原因。CDは芽胞を形成するため他の腸内細菌と比べて抗菌薬などに強く、院内感染の原因となり、激しい下痢と腹痛をもたらす。その他の選択肢は黄色ブドウ球菌、カンジダ、緑膿菌、大腸菌。大腸菌には下痢原性のものも含まれ、カルバペネム系に耐性を持つCREも存在するが、それのみでは下痢や腹痛などの症状は全く出現しない（名古屋大学より）',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次のうち、抗MRSA薬はどれか（複数選択可）',
          choices: ["アルベカシン", "コリスチン", "バンコマイシン", "ダプトマイシン", "リネゾリド"],
          answerImg: [antibiotics, MRSA],
          answer: 'アルベカシン、バンコマイシン、ダプトマイシン、リネゾリド',
          commentary: 'メチリシン耐性黄色ブドウ球菌は、mecA遺伝子を外来的に獲得することによりβ-ラクタム系が効かない。抗MRSA薬として、バンコマイシンなどのグリコペプチド系、アルベカシン（アミノグリコシド系）、リネゾリド（オキサゾリジノン系）、ダプトマイシン（環状リポペプチド系）が用いられる',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ジフテリアについて間違っているのはどれか、一つ答えよ。',
          choices: ["扁桃・咽頭部に偽膜が形成され、鼻腔・喉頭・気管にまで移行することがある", "ナイセル染色により異染小体が黒い穎粒として観察できる", "できるだけ速やかに血清療法による治療を行う", "予防としてはワクチン接種が有効である", "二類感染症に属するため、ジフテリア毒素を産生していない場合も届出が必要である"],
          answerImg: [diphtheriae, diphtheriaeColony, diphtheriaeDiagnosis],
          answer: '5が誤り...毒素を産生していない場合は必要ない',
          commentary: 'ジフテリア菌が産生するジフテリア毒素による２類感染症。扁桃～咽頭周辺に白色～灰白色の偽膜が形成される症状が特徴的。進行すると気道や喉頭にも発展し（喉頭ジフテリア）、呼吸困難をきたす。検査はジフテリア患者の咽頭粘膜擦過物から血液寒天培地などにより行われ、ナイセル染色で異染小体が特徴的。治療はジフテリア毒素に対する血清による血清療法をできるだけ早くに行う。ジフテリア＋百日咳＋破傷風に対するDPT三種混合ワクチンは定期接種の対象。ジフテリア毒素（外毒素の細胞毒：タンパク合成阻害）を産生しないジフテリア菌に病原性はなく、届け出は必要ない',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '下記のうち、シンバイオティクスの組み合わせとして適しているのははどれか（複数選択可）',
          choices: ["納豆＋オクラ", "味噌＋きのこ", "ヨーグルト＋バナナ", "かき氷＋カルピス", "塩麹＋野菜"],
          answerImg: [probiotics, prebiotics],
          answer: '1,2,3,5が適する',
          commentary: 'syn（ともに）biotic（プロバイオティクス/プレバイオティックス）。プロバイオティクスとプレバイオティックスをともに摂取することで双方の機能を相乗的に発揮できると考えられている。プロバイオティクスは腸に良い生きた微生物をさす言葉で、納豆・味噌・ヨーグルト・カルピス・塩麴が該当。プレバイオティックスは腸に良い難消化性食品生物を指す言葉で、オクラ・きのこ・バナナ（果物）・野菜が該当する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '放線菌について間違っているものはどれか、ひとつ答えよ。',
          choices: ["ストレプトマイセス属には抗生物質を産生する菌が多い", "ヒトに病原性を示すのはアクチノマイセス属とノカルジア属の一部である", "アクチノマイセス属による皮膚放線菌症の多くは頭頸部領域に慢性の肉芽腫病変を示す", "アクチノマイセス属とノカルジア属はグラム染色により容易に判別できる", "ノカルジア属は皮膚や肺に感染する"],
          answerImg: [Actinomycetes, GenusActinomyces, GenusActinomyces2, GenusNocardia],
          answer: '4が誤り...判別は難しい',
          commentary: '放線菌はグラム染色で陽性に染まり、菌糸と胞子を形成する。ストレプトマイセス属には抗生物質産生菌が多い（参考：ストレプトマイシン）。人に病原性を示すのはアクチノマイセス属とノカルディア属の一部で、アクチノマイセス属による皮膚法腺筋症は慢性の肉芽腫病変と菌塊（ドルーゼ）が特徴的。ノカルディア属は土壌・水など環境中に広く分布し皮膚や肺に感染する。ノカルディアとアクチノマイセスをグラム染色で見分けることは難しい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '下記のうち、正しいのはどれか（複数選択可）',
          choices: ["乳酸菌の中にはデーデルライン桿菌という膣の自浄作用を示す菌がいる", "う蝕の原因菌はミティス菌群である", "歯科治療により一過性の菌血症が起こりやすくなる", "腸内細菌叢の多様性は健康維持に関与している", "ビフィズス菌は酸素があっても生育できる"],
          answerImg: [Lactobacillus, DoderleinBacillus, StreptococcusOral, StreptococcusEndocarditis],
          answer: '1,3,4が正しい',
          commentary: 'L.acidophilus、L.casei、ビフィズス菌などのデーデルライン桿菌は膣で多量の乳酸産生を行うことで膣内のpHを低下させ、病原細菌の侵入や定着を阻害する。う触（齲触/虫歯）の原因菌として、口腔連鎖球菌のミュータンス菌群が挙げられる。ミティス菌群は口腔連鎖球菌であるが細菌性心内膜炎に関与する。歯科治療を行うとこれらの口腔連鎖球菌が血管へ侵入しやすくなり、一過性の菌血症が起こる場合がある。乳酸菌は糖の発酵により乳酸を生成する通性嫌気性で、ビフィズス菌は糖の分解により酢酸と乳酸を生成する偏性嫌気性である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '下記のうち、正しいのはどれか（複数選択可）',
          choices: ["細菌性膣症は膣内の常在細菌叢の乱れが原因のため妊娠時でも特に治療の必要はない", "プロピオバクテリウム属の中には、ニキビの原因になる菌がいる", "ビフィズス菌の主な代謝物は酢酸と乳酸である", "乳酸菌はヨーグルト、チーズ、漬物、ワイン、醤油などの製造に使用されている", "ジフテリア患者数はワクチンによって激減した"],
          answerImg: [Lactobacillus],
          answer: '2,3,4,5',
          commentary: '細菌性膣症(bacterial vaginosis)は膣内常在菌叢の乱れで起こる、好気性菌・嫌気性菌の混合感染。妊娠中の細菌性膣症は流産・早産と関連するため、積極的に治療する。P.acunesがニキビの原因になる。ビフィズス菌は糖を分解→酢酸：乳酸=3:2の割合で生成する。乳酸菌は糖の発酵により乳酸を産生する通性嫌気性グラム陽性桿菌で、ヨーグルト・チーズ・漬物・醤油・ワインなどに利用される。四種混合ワクチンDPT+ポリオのDがジフテリア、Pは百日咳、Tは破傷風。ジフテリアは産生するジフテリア毒素が病原性を持つため、治療は抗毒素療法中心、ワクチンはジフテリアトキソイドによるものである。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下について、誤っているのはどれか（複数選択可）',
          choices: ["レーウェンフックは自作の顕微鏡で細菌の存在を初めて認識した", "ルイ・パスツールは狂犬病ワクチンを開発した", "北里柴三郎は初めて破傷風菌の純培養に成功した", "エドワード・ジェンナーは種痘法を開発した", "志賀潔はペスト菌を発見した"],
          answerImg: [Shiga],
          answer: '5が誤り...志賀潔が発見したのは赤痢菌',
          commentary: 'アントニ・ファン・レーウェンフック(1632-1723)は自作の顕微鏡で細菌の存在を確認し、原虫・真菌・細菌など数多くの微生物を見出し、「微生物学の父」と呼ばれる。ルイ・パスツール(1822-1895)は加熱滅菌法・低温殺菌法・狂犬病ワクチンの開発などにより、コッホとともに「近代細菌学の開祖」と呼ばれる。エドワード・ジェンナー(1749-1832)は種痘（牛痘を天然痘の予防接種として用いる）法を開発し「近代免疫学の父」と呼ばれる。北里柴三郎(1853-1931)はコッホの弟子で破傷風菌・ペスト菌の発見・研究で有名になり、「日本細菌学の父」と呼ばれる。志賀潔(1871-1957)は赤痢菌の純培養に成功し、Shigellaと名付けた。その他、正確な病因が特定できなくても対策が可能であることを証明したゼンメルワイス（産婦人科医）も「感染制御の父」として有名。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ロベルト・コッホが発見した菌はどれか（複数選択可）',
          choices: ["インフルエンザ菌", "コレラ菌", "炭疽菌", "赤痢菌", "結核菌"],
          answerImg: [Koch],
          answer: 'コレラ菌・炭疽菌・結核菌',
          commentary: 'ロベルト・コッホ(1843-1910)は炭疽菌・結核菌・コレラ菌の純粋培養・発見に成功し、「近代細菌学の開祖」と呼ばれ、コッホの4原則を提唱した。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下のうち新興感染症、あるいはその原因微生物であるのはどれか（複数選択可）',
          choices: ["結核", "マラリア", "エボラウイルス", "西ナイルウイルス", "壊死性筋膜炎"],
          answerImg: [emergingDiseases],
          answer: 'エボラウイルス・西ナイルウイルス',
          commentary: '新興感染症とは、最近20年間で、それまで明らかにされていなかった病原体に起因した公衆衛生上問題となるような新たな感染症のことで、ロタウイルス・エボラウイルス・レジオネラ・腸管出血性大腸菌O157・HIV・ヘリコバクターピロリ・西ナイルウイルス・SARSコロナウイルス・ヒトインフルエンザA・鳥インフルエンザ・新型コロナ・人食いバクテリアなどが該当する。　一方で再興感染症とは、既知の病原微生物が近年再び増加してきたもの、あるいは将来的に問題となる可能性がある感染症のことで、結核・壊死性筋膜炎（劇症型溶連菌）・黄熱・デング熱・マラリアなどが該当する。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文のうち、正しいのはどれか（複数選択可）',
          choices: ["不顕性感染とは微生物に感染し、発症していることである", "14世紀ヨーロッパでのペストの流行がルネサンスをもたらす要因となった", "ルネサンスの自由な気風がヨーロッパにおける梅毒の流行・蔓延をもたらした", "ルネサンス時代の梅毒は激烈な症状を呈した", "大航海時代、コロンブスはアメリカ大陸に天然痘をもたらした"],
          answerImg: [plague, columbianExchange],
          answer: '2,3,4,5が正しい',
          commentary: '「感染」と「発症」は異なる基準で、感染はしているが発症していない状態を不顕性感染、感染し発症している状態を顕性感染（感染症）と呼ぶ。ペストは14世紀ヨーロッパで大流行し、カトリックへの疑念・イタリアへの富の蓄積が重なってルネサンスの原因となった。しかし皮肉にもルネサンスによる自由な気風と性の解放がヨーロッパにおける梅毒の流行・蔓延をもたらした。かつての梅毒は今とは異なり症状が激烈で、日本含め多くの人々が亡くなった。コロンブス交換により、天然痘・麻疹・ペストなどがアメリカ大陸にもたらされ、梅毒・イチゴ腫・黄熱がヨーロッパにもたらされた。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '1980年、WHOは天然痘の根絶を宣言した。根絶できた要因として正しいのはどれか（複数選択可）',
          choices: ["ヒト以外に自然宿主を持たない", "顕性感染がない", "患者の識別が容易", "変異を起こしにくい", "有効なワクチンがある"],
          answerImg: [smallpox],
          answer: '1,3,4,5が正しい',
          commentary: '不顕性感染がない（感染しているものの発症していないことがない）ことも根絶できた要因とされる。牛痘由来の種痘ワクチンが著効した。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '滅菌と消毒について、誤っているのはどれか（複数選択可）',
          choices: ["酸化エチレンガス滅菌の利点は耐熱性の低いプラスチック素材などに使用できることである", "消毒とは、生存する微生物の数を減らすことである", "滅菌とは芽胞以外の微生物を殺滅または除去させるものである", "高圧蒸気滅菌の条件は、2気圧、121°C、15分間である。", "クリティカル器具には高水準消毒が必要である"],
          answerImg: [sterilization, criticalTool],
          answer: '3,5が誤り',
          commentary: 'エチレンオキサイドガス（酸化エチレンガス）滅菌は、ガスにより微生物を構成するタンパク質のアルキル化を起こし死滅させる滅菌方法で、比較的低温（37-60度）で行えるためプラスチックなど耐熱性の低い器材でも使用できる。　滅菌とは「病原菌・非病原菌を問わず芽胞を含むすべての微生物を完全に死滅除去すること」を指し、消毒とは「病原微生物をの数を減らす（完全に除去するわけではない）こと」を指す。滅菌には前述の酸化エチレンガス滅菌のほかに高圧蒸気滅菌（オートクレーブ：2気圧・121度の飽和蒸気圧で15分間加熱する滅菌方法）とガスプラズマ滅菌、化学的滅菌が存在し、芽胞を含むすべての微生物を死滅除去することができる。クリティカル器具には無菌の組織や脈管系に入る、カテーテルなどの器具が分類され、高水準消毒より上位の、最も厳しい滅菌水準の消毒を要求される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の器具に関して、滅菌を必要とするのはどれか（複数選択可）',
          choices: ["手術器具", "気管支鏡", "血管留置カテーテル", "気管カニューレ", "体温計"],
          answerImg: [criticalTool, semiCritical],
          answer: '手術器具・血管留置カテーテル',
          commentary: 'スポルティングの法則によると、滅菌を必要とするクリティカル器具には、無菌の組織や脈管系に入るものが分類され、手術器具・血管系の器材・尿道カテーテル・インプラントなどが含まれる。気管支鏡・気管カニューレ・直腸体温計などは粘膜や創傷のある皮膚と接触するのでセミクリティカル器具に分類され、高水準・中水準の消毒水準が求められる。聴診器などは健常な皮膚に接するのでノンクリティカル器具に分類される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '芽胞を形成する菌に有効でない滅菌・消毒法はどれか（複数選択可）',
          choices: ["酸化エチレンガス滅菌", "アルコール", "高圧蒸気滅菌", "過酸化水素低温ガスプラズマ滅菌", "界面活性剤"],
          answerImg: [sterilSpectrum, sterilization],
          answer: 'アルコール・界面活性剤',
          commentary: '一部の細菌が形成する芽胞は70-93度の熱水や蒸気に耐え、高水準消毒より上の、滅菌でしか完全に除去することができない。滅菌方法には高圧蒸気滅菌（オートクレーブ）、酸化エチレンガス滅菌、（過酸化水素低温）ガスプラズマ滅菌、化学的滅菌（過酢酸・グルタラール）が分類され、それぞれに長所短所がある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '微生物検査に関する以下の記述のうち、正しいのはどれか（複数選択可）',
          choices: ["現在、多くの抗原検出キットはイムノクロマトグラフィー法によるものである", "グラム陽性菌とグラム陰性菌の染色性の差は、細胞壁の厚さの違いによる", "グラム陽性菌は青~紫、グラム陰性菌は赤~淡赤に染まる", "血液培養は2セット以上採取する", "PCR法による遺伝子検査でウイルスの検出はできない"],
          answerImg: [GramMethod, bloodCulture, PCR],
          answer: '1,2,3,4が正しい',
          commentary: 'イムノクロマトグラフィー法はインフルエンザウイルスや新型コロナウイルスなど様々な抗原検査に使われている。コントロールラインとチェックライン（テストラインとも）の二本が並んでいて、それぞれ金コロイド標識、抗インフルエンザ抗原に対する抗体がクロマトグラフィー上に並んでいて、二本ともに標識が結合すると陽性と判定される仕組みである。　グラム染色では細胞壁のペプチドグリカン層が厚いと陽性に、薄いと陰性になる。　血液培養は主に敗血症や菌血症が疑われるタイミングで行われ、コンタミを見分けるため2セット以上採取される。検出された菌種によって、コンタミかどうかの判断は変わる。　RNAウイルスであっても、逆転写を行うことでPCRによる検出を行う事が可能。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '薬剤感受性試験について、正しいのはどれか（複数選択可）',
          choices: ["薬剤感受性試験において、液体希釈法ではMIC(最小発育阻止濃度)の測定が可能である", "拡散法においては、耐性であればあるほど阻止円が小さくなる", "感受性試験において、多くの菌種は30度で約20時間培養される", "感受性試験で使用する培地は、DHL培地である", "薬剤感受性はPCR法でも測定できる"],
          answerImg: [disc],
          answer: '1,2,5が正しい',
          commentary: 'MICはMinimum inhibitory concentration（最小発育阻止濃度）の略で、様々な濃度の薬剤を含んだ液体培地で増殖できるかどうかを調べる。薬剤感受性試験は、実習ではミュラーヒントン培地上で37度で一晩培養してから行った。ミュラーヒントン寒天培地に含まれるデンプンは寒天中に含まれる発育阻害物質を吸着する作用があり、薬剤以外の物質による発育抑制を低減する。DHL寒天培地は胆汁酸がグラム陽性菌を抑制してしまい、薬剤感受性試験に使いにくい。その他、LB寒天培地は純培養で使用した普通の培地。PCR法で薬剤耐性菌は判別できる→パルスフィールドゲル電気泳動PFGEによるグリコペプチド耐性MRSA判別',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '肺炎球菌の薬剤感受性を測定するため微量液体希釈法を実施したところ、PCGでは0.5μg/mlでは発育が見られ、1μg/mlでは発育が見られなかった、PCGの最小発育阻止濃度はいくらか',
          choices: ["0.5", "0.75", "1", "2", ">2"],
          answerImg: [],
          answer: '1',
          commentary: '最小発育阻止濃度MICは発育阻止できたなかで最も低い薬剤の濃度である。希釈法では2μg/mL→1μg/mL→0.5→0.25→0.12→...というような薬剤濃度の培地を準備する',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '菌の菌種同定に用いられる検査、あるいは検査装置はどれか。（複数選択可）',
          choices: ["パルスフィールドゲル電気泳動法", "微量液体希釈法", "16S ribosomal RNA 遺伝子シークエンス", "グラム染色法", "質量分析装置"],
          answerImg: [PFGE, sequence16SrRNA, MALDI],
          answer: '3,4,5が該当',
          commentary: 'パルスフィールドゲル電気泳動法では、分子量の特に大きいDNA断片を電気泳動で分離するために発明された。電圧を対角線方向にパルス状に加え、分子量の低いDNA鎖を早く移動させることで、薬剤耐性などについて調べることができる。微量液体希釈法は、薬剤感受性試験でMICを求めるために利用される。16S rRNAシーケンスは菌の一部(16S rRNA)の塩基配列から菌種同定を行う検査方法である。　質量分析装置はMALDI-TOF-MS(Matrix Assisted Laser Desorption / Ionization Time Of Flight Mass Spectorometry)で使われる。菌に含まれるタンパク質をイオン化してレーザー照射することによる飛行時間から、マススペクトルを照合して菌種同定する方法である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文について正しいのはどれか。（複数選択可）',
          choices: ["多剤耐性緑膿菌はカルバペネム、アミノ配糖体、フルオロキノロンの3系統の薬剤に耐性を示す緑膿菌である", "本邦で分離される緑膿菌のうち、多剤耐性緑膿菌は約10%を占める", "多剤耐性緑膿菌による感染症は「薬剤耐性緑膿菌感染症」とされ、感染症法で5類感染症であり、全施設からの報告が求められている", "多剤耐性アシネトバクター属菌はカルバペネム、アミノ配糖体、フルオロキノロンの3系統の薬剤に耐性を示すアシネトバクター属菌である", "本邦で分離されるアシネトバクター属菌のうち、多剤耐性アシネトバクター属菌は約10%を占める", "多剤耐性アシネトバクター属菌による感染症は「薬剤耐性アシネトバクター感染症」とされ、感染症法で5類感染症であり、全施設からの報告が求められている"],
          answerImg: [MultiDrugResistant, MultiDrugResistantPercentage],
          answer: '1,4,6が正しい',
          commentary: '多剤耐性とは細胞壁合成阻害のカルバペネム系、タンパク質合成阻害のアミノグリコシド（アミノ配糖体）系、核酸合成阻害のニューキノロン（フルオロキノロン）系に耐性をもつ病原体と定義されている。日本では多剤耐性緑膿菌は約3%の頻度で分離され、5類感染症の定点届出対象となっている。アシネトバクターも同様に多剤耐性菌が報告されていて、耐性菌では死亡率が16.4%と高くなっている。アシネトバクターの日本での分離頻度は0.3%とかなり低く５類感染症全数届出に指定されている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文について正しいのはどれか（複数選択可）',
          choices: ["腸管出血性大腸菌(EHEC)の血清型はO157やO26,O111が多い", "腸管病原性大腸菌(EPEC)はベロ毒素を産生する", "腸管毒素原生大腸菌(ETEC)はLT(heat-labile toxin),ST(heat -stable toxin)の両方またはいずれかを産生する", "腸管侵入性大腸菌(EIEC)は溶血性尿毒症症候群のリスクが高い", "Salmonella typhimuriumは腸チフスの原因菌である"],
          answerImg: [EHEC, ETEC, EIEC, Salmonella],
          answer: '1,3が正しい',
          commentary: '腸管出血性大腸菌EHECは腸管内でベロ毒素(VT)を産生する大腸菌で、抗生物質で菌体が破壊されるとこの毒素が多量に放出されることでかえって症状が悪化する可能性が報告されている。毎年国内で3000-4000人の感染が報告され、血清型としてはO157,O26,O111で全体の95%を占める。腸管毒素原性大腸菌ETECはLTやSTなどの毒素を産生することによって腹痛・水様性下痢の症状を呈する。腸管侵入性大腸菌EIECは大腸上皮細胞に侵入し潰瘍性炎症を惹起する大腸菌で、赤痢菌と類似している。Salmonella typhimuriumは非チフス性サルモネラの主要な原因で、感染型食中毒を引き起こす。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文について正しいのはどれか（複数選択可）',
          choices: ["Bartonella heselae は猫引っかき病の原因菌である", "Bordetella pertussis は百日咳の原因菌である", "Accinetobacter baumannii は乾燥に弱い", "Psudomonas aeruginosaは乾燥に強い", "Klebsiella pneumoniae は厚い莢膜をもつ"],
          answerImg: [Bartonella, pertussis, Acinetobacter, aeruginosa, Klebsiella],
          answer: '1,2,5が正しい',
          commentary: 'Bartonella henselaeはバルトネラ属で主要なグラム陰性好気性桿菌。百日咳菌は同じグラム陰性好気性桿菌ではあるがボルデテラ属。アシネトバクターバウマニは環境や土壌に広く生息していて、グラム陰性桿菌のなかでは比較的乾燥に強い。緑膿菌(P.aeruginosa)は水回りに生息し、乾燥に弱い。クレブシエラ属は厚い莢膜が特徴的な腸内細菌科細菌で、ペニシリン系に自然耐性をもちESBL産生による院内感染が問題となっている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'インフルエンザ菌について正しいのはどれか（複数選択可）',
          choices: ["グラム陽性菌である", "血液寒天培地に発育できる", "無莢膜株と莢膜株があり、莢膜株は抗原性からa~fに分類できる", "全身感染症を起こしやすいのはb型菌(Hib)であり、近年、Hibワクチンが定期接種となった", "インフルエンザ菌による急性中耳炎や急性副鼻腔炎は、無莢膜株によるものが多い"],
          answerImg: [influenzaHaemophilus,influenzaHaemophilusCheck],
          answer: '2,3,4,5が正しい',
          commentary: 'インフルエンザ菌はインフルエンザ（ウイルス感染症）の原因として間違われていたグラム陰性短桿菌。インフルエンザのように気道に感染し喀痰から検出されるが、常在菌でほとんど病原性はもっていない。インフルエンザ菌はチョコレート寒天培地によって培養されるのが特徴的であるが、インフルエンザ菌の判定には羊・馬などの血液寒天培地を組み合わせたヘモフィルス分画培地が利用される。インフルエンザ菌はヒツジ血液寒天培地には発育しないが、ウサギ・ウマ血液寒天培地には発育する。a~fの血清型は莢膜をもち、全身感染症を起こすb型に対してはHibワクチンが著効。生後2か月から計４回定期接種が行われる。　一方で敗血症を起こさない無莢膜型にはHibワクチンはほとんど効果が無い。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'メタロ-β-ラクタマーゼについて誤っているのはどれか（複数選択可）',
          choices: ["本邦で検出される多くはプラスミド性に産生される", "ペニシリン系薬を加水分解することができる", "セファマイシン系薬を加水分解することができる", "モノバクタム系薬を加水分解することができる", "活性保持に金属イオンが必要である"],
          answerImg: [metalloLactamase, resistanceSummary],
          answer: '4が誤り...モノバクタム系には耐性を持たない',
          commentary: 'メタロ-β-ラクタマーゼ(IMP-6など)は大腸菌、アシネトバクター、緑膿菌などが産生するクラスB型β-ラクタマーゼで、多くはプラスミド性に産生され、セファマイシンにはもちろん、βラクタマーゼの中でもカルバペネム系にまで耐性を持つ点が特徴的である。メタロ-β-ラクタマーゼだけではモノバクタム(AZT)には耐性を持たないが、ESBLも産生している場合はほぼすべてのβ-ラクタム系抗菌薬に耐性を持つことになる。活性には亜鉛イオンが必要である。抗菌薬を使っても自然には発生せず、プラスミドの接合伝達によって獲得される薬剤耐性である　→発見されれば院内感染が疑われる。孔が少なく小さい緑膿菌が産生するようになるとほとんどの薬剤に耐性を持つようになり、非常に治療が難しくなる。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '基質特異性拡張型β-ラクタマーゼ(ESBL)について正しいものはどれか（複数選択可）',
          choices: ["クラブラン酸(CVA)などのβ-ラクタマーゼ阻害薬により阻害を受ける", "MRSAによって産生される", "カルバペネム系薬を効率よく加水分解する", "セファマイシン系薬を効率よく分解する", "近年、ESBLは市中感染が見られるようになった", "近年、大腸菌での分離率が上昇している"],
          answerImg: [ESBL, resistanceSummary],
          answer: '1,5,6が正しい',
          commentary: 'ESBLはクラスA型β-ラクタマーゼ(ペニシリン系にのみ耐性)が変異したもので、さらにセファロスポリン系、モノバクタム系にまで耐性を持つようになった。ESBLは大腸菌などグラム陰性桿菌が産生するもので、MRSA(メチリシン耐性黄色ブドウ球菌)はほとんどがペニシリンに自然耐性で無関係。一方でセファマイシン系、カルバペネム系のβ-ラクタム系抗菌薬には耐性を持たず、CVAで阻害される（実習でもCVAで阻害されるかどうかでESBL産生かどうかを判断した）。ESBLもプラスミドによる接合伝達によって伝播されるため、院内感染対策を徹底することが重要である。実習でも毎年数人の腸内細菌からESBLが分離されている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ペニシリナーゼについて、正しいのはどれか（複数選択可）',
          choices: ["クラブラン酸(CVA)などのβ-ラクタマーゼ阻害薬により阻害を受ける", "Klebsiella pneumoniae は染色体にペニシリナーゼ遺伝子を有する", "Haemophilius influenzae は染色体にペニシリナーゼ遺伝子を有する", "Proteus mirabilis は染色体にペニシリナーゼ遺伝子を有する", "第3世代セファロスポリンを効率よく加水分解する", "カルバペネムを効率よく加水分解する"],
          answerImg: [penicillinase, resistanceSummary],
          answer: '1,2,4が正しい',
          commentary: 'ペニシリナーゼはクラスA型β-ラクタマーゼで、プラスミド性で接合伝達されるものと、染色体性で自然に産生されるものが存在する。K.pneumoniae(肺炎桿菌)やP.mirabilisはペニシリン系に自然耐性をもち、H.influenzae(インフルエンザ菌)にもペニシリナーゼを産生するBLPAR株がいるが、インフルエンザ菌はプラスミド性。ペニシリナーゼはペニシリンと第一世代セファロスポリンにのみ耐性を持ち、CVAに阻害され、第三世代セファロスポリンやカルバペネム系は有効である。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '梅毒について正しいのはどれか（複数選択可）',
          choices: ["原因菌であるTreponema pallidum は、螺旋状を呈するグラム陰性菌である", "原因菌であるTreponema pallidum は人工培養が未だできない", "第１期梅毒では、性的接触の3週~3ヶ月ほどで初期硬結が出現する", "第２期梅毒では心血管や神経に障害が生じる", "治療はマクロライドが第一選択である", "先天梅毒の症状の一つに鞍鼻がある"],
          answerImg: [pallidumTreponema, pallidumTreponemaSymptoms, ],
          answer: '1,2,3,6が正しい',
          commentary: '梅毒などのスピロヘータはグラム染色ではよく染まらないが、外膜を持つので陽性か陰性かで問われると陰性である。梅毒は試験管での人工培養ができないので、検査は血清反応で行う。感染後すぐに初期硬結などの１期梅毒症状が出た後、発熱・バラ疹など特徴的な２期梅毒期間が数年続き、最後には心血管・鞍鼻（あんび）などに慢性的な３期梅毒症状が現れる。ペニシリンの登場により梅毒での死者は激減した。妊婦が梅毒に感染している場合、経胎盤的に胎児に伝播し先天梅毒を引き起こし、Hutchinson3徴候（実質性角膜炎・内耳性難聴・Hutchinson歯）がみられることがある',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次の文で正しいのはどれか（複数選択可）',
          choices: ["β-ラクタマーゼの産生様式には構成型と誘導型がある", "Stenotrophomonas maltophilia はクラスC型β-ラクタマーゼを誘導型に産生する", "健常人の半数以上がESBL産生菌を保有している", "One Health とは、「ヒト・動物・環境は相互に関連し、それら全てをいい状態にすることで真の健康が得られる」という概念である", "販売された抗菌薬の量はヒト用より動物用の方が多い"],
          answerImg: [produceBetaLactamase, betaLactamaseExample, antibioticsAnimal],
          answer: '(1),4,5が正しい',
          commentary: 'β-ラクタマーゼの産生様式には、構成型・誘導型（と脱抑制型）が存在する。　クラスC型β-ラクタマーゼはセファロスポリナーゼともよばれ、ペニシリン、セファマイシン系、セファロスポリン系(第1世代-第3世代)、モノバクタム系に耐性を持ちCVAによる阻害を受けないが、第4世代セファロスポリンとカルバペネム系は有効。S.maltophiliaはクラスB型β-ラクタマーゼを染色体性に産生する。ESBLは腸内常在し健常者でも保菌者はいるが、半数以上ではなく10%程度。動物（家畜・渡り鳥など）や環境との相互作用によって感染症が発生・伝播することがあり、ヒトだけでなくこれらすべてに対応しようとする概念が、ワンヘルスアプローチである。抗菌薬はヒト向けより家畜向けのほうが販売量が多く、乱用されやすい。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '染色体性にβ-ラクタマーゼ遺伝子を有する菌種はどれか（複数選択可）',
          choices: ["Staphylococcus aureus", "Klebsiella pneumoniae", "Enterobacter cloacae", "Streptococcus pneumoniae", "Neisseria gonorrhoeae"],
          answerImg: [betaLactamaseCounterexample, betaLactamaseExample, BetaLactamResistanceMechanisms],
          answer: 'K.pneumoniae',
          commentary: 'K.pneumoniae(肺炎桿菌:グラム陰性)はクラスA型βラクタマーゼを染色体性に産生する（ペニシリンに自然耐性をもつ）。E.cloacae（腸球菌）はプラスミド性にESBLを産生するものがいる（接合伝達する）。肺炎球菌(S.pneumoniae)や黄色ブドウ球菌(S.aureus)はグラム陽性菌でβラクタマーゼを産生することはないが、PBP（ペニシリン結合タンパク）に変異を持つことでβ-ラクタム系に自然耐性をもっている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '次のうち正しいのはどれか（複数選択可）',
          choices: ["レプトスピラ症は保菌動物の尿で汚染された水や土壌などの直接的な接触によって経皮感染する", "ツツガムシ病の3徴候は、発熱、刺し口の存在、発疹である", "ヘリコバクター・ピロリ菌は肝臓癌の原因となる", "レプトスピラ症は人獣共通感染症である", "マイコプラズマは細胞壁を有する", "Chlamydia trachomatis は性感染症の原因菌である"],
          answerImg: [Leptospira, tsutsugamushi, Mycoplasma, ChlamydiaTrachomatis],
          answer: '1,2,4,6が正しい',
          commentary: 'ツツガムシ病はリケッチア感染症（偏性細胞内寄生性細菌）のひとつで、ツツガムシにより媒介される。発熱・刺し口・発疹の3徴候が特徴的。レプトスピラ症は野生動物や家畜やペットによって媒介される人獣共通感染症で、保菌動物の尿で汚染された水や土壌などとの直接的な接触により経皮感染することが特徴である。マイコプラズマは細胞壁を持たない細菌で、細胞壁を狙ったペニシリンなどの抗菌薬が効かないことが特徴的。クラミジア属は偏性細胞内寄生細菌で、性器クラミジアの原因となるC.trachomatisと、肺炎クラミジアの原因となるC.pneumoniae、オウム病クラミジアの原因となるC.psittaciに分類される。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'Varicella-Zoster virusについて正しいのはどれか（複数選択可）',
          choices: ["初感染では水痘を発症する", "水痘の潜伏期は数日から１週間である", "回帰感染は帯状発疹である", "空気感染を起こす", "不活化ワクチンを利用できる", "水痘生ワクチンは50歳以上を対象に水痘帯状発疹の予防に使用されている"],
          answerImg: [VZV],
          answer: '1,3,4,6が正しい',
          commentary: '水痘は空気感染する非常に感染力の強いウイルスで、感染後10-21日で発症する。水痘として初感染したあとも体内に潜伏感染し続け、抵抗力減弱時などに帯状疱疹として発症することがある。定期接種として水痘生ワクチン、50歳以上を対象に帯状疱疹ワクチンを受けることができる。不活化ワクチンは存在しない。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文章で正しいのはどれか（複数選択可）',
          choices: ["先天性サイトメガロウイルス感染症では、聴覚障害を起こすことがある", "本邦では妊婦の九割以上がサイトメガロウイルス抗体を保有している", "サイトメガロウイルス感染症は有効なワクチン接種により感染予防ができる", "伝染性単核症では末梢血中に異型リンパ球が出現することが多い", "単純ヘルペスウイルス１型は性器ヘルペスを起こすことが多い", "EBウイルスのEA IgGが陽性の場合、初感染が疑われる"],
          answerImg: [CMV, infectiousMononucleosis, EBVAntibody, herpes],
          answer: '1,4,6が正しい',
          commentary: 'サイトメガロウイルスは垂直感染し感音性難聴などの先天性障害を引き起こすTORCH症候群のCで、日本では妊婦の約75%が抗体を持っているが、抗体を持っていない場合は問題となる。成人に感染した場合は殆ど不顕性で経過し病原性は低い。ワクチンは存在しない。EBウイルスは急性感染で伝染性単核球症を招く場合があり、末梢血中に異型リンパ球が現れるほか、発熱・リンパ節腫脹・咽頭扁桃炎の3主徴が特徴的。EBVは殆どが不顕性感染で感染者の90%以上が潜伏感染＆生涯ウイルスを排泄し続け、感染細胞を不死化することでバーキットリンパ腫や上咽頭がんの原因となる。初感染かどうかはEA IgG抗体やVCA IgM抗体を調べることで判定できる。慢性的な感染で未分化型上咽頭がんを発症した場合は粘膜に分泌されるEA IgA やVCA IgAも陽性になる。性器ヘルペスを起こすのは単純ヘルペスウイルスⅡ型',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文章で正しいのはどれか（複数選択可）',
          choices: ["ポリオウイルスは強直性四肢麻痺を主徴とする急性灰白髄炎の病原体であり、顕性感染が多い", "ヒトパピローマウイルス16型と18型は子宮頸がんの原因ウイルスである", "コクサッキーウイルスA型は、手足口病の主な原因ウイルスである", "アデノウイルスは鼻風邪の原因ウイルスである", "ロタウイルスは二枚貝の中腸線に蓄積される"],
          answerImg: [poliovirus, Papilloma, Coxsackievirus, pneumonia, rotavirusNorovirus],
          answer: '2,3が正しい',
          commentary: 'ポリオウイルスは急性灰白髄炎を引き起こすが、四肢の急性弛緩性麻痺が主徴で99%以上が不顕性感染である（かつてはほぼ全員が感染していたとされている）。HPV16/18型が子宮頸がんを引き起こすため、子宮頸がんワクチンが開発され接種されているが、尖圭コンジローマを引き起こす6/11型には効かない。コクサッキーウイルスA群は横紋筋が変性しヘルパンギーナや手足口病の原因となる。アデノウイルスは飛沫感染し咽頭炎や異型肺炎の原因となるが、鼻風邪の原因にはならない（鼻風邪は主にライノウイルスやRSウイルスが原因）。ノロウイルスとロタウイルスはともにエンベロープを持たないRNAウイルス（→アルコールに強い）で、少ない菌数でも便や吐物から経口感染し、下痢を引き起こすウイルスだが、流行時期（ロタウイルスの方が少し遅い）、下痢の色（ロタウイルスは白）、二枚貝中腸線への蓄積（ノロウイルスのみ）、ワクチン（ロタウイルスのみ、ノロウイルスは遺伝子型が多様で開発困難）などで違いがある。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文章で正しいのはどれか（複数選択可）',
          choices: ["ヒトパピローマウイルス11型 : 尖圭コンジローマ", "JCウイルス : 進行性多巣性白質脳症", "ヒトパルポウイルスB19 : 胎児水腫", "BKウイルス : 亜急性硬化性全脳炎", "アデノウイルス : リンゴ病"],
          answerImg: [Papilloma, JCV, Parvovirus],
          answer: '1,2,3が正しい',
          commentary: 'パピローマウイルスは子宮頸がんの原因として知られているが、6型と11型尖圭コンジローマの原因でもあり、型が違うので子宮頸がんワクチンが効かない。JCウイルスは初感染時にはほとんど症状が現れないが、腎臓の集合管上皮に潜伏持続感染し、免疫不全時に再活性され進行性多巣性白質脳症PMLを発症する。パルボウイルスB19は妊婦に感染すると胎児に経胎盤感染し胎児水腫を起こして流産の原因となる。亜急性硬化性全脳炎(SSPE)は麻疹ウイルス感染後6-8年で認められる。リンゴ病(小児の伝染性紅斑)はパルボウイルスによる症状。　選択肢のウイルスは全てDNAウイルス。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '風疹について正しいのはどれか（複数選択可）',
          choices: ["風疹ウイルスは人のみが感染する", "先天性風疹症候群として見られるのは、難聴、白内障、先天性心疾患である", "妊娠感染時の胎児月齢が低いほど、先天性風疹症候群の発症頻度は低い", "母親が不顕性感染の場合、先天性風疹症候群は起こらない", "弱毒生ワクチンを利用できる", "風疹ウイルスは空気感染により伝播する"],
          answerImg: [Rubella],
          answer: '1,2,5が正しい',
          commentary: '風疹（Rubella)は人のみが感染し、妊婦が感染すると先天性障害を引き起こすTORCH症候群のひとつである。CRSは高度難聴・白内障・心疾患の３徴候が特徴で、妊娠早期の感染が非常に危険である。不顕性感染もある。麻疹風疹混合生ワクチン（MRワクチン）が効果的。空気感染しないので麻疹よりは感染が広がりにくいが、それでも感染力は高い。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '以下の文で正しいのはどれか（複数選択可）',
          choices: ["RSウイルスは一度感染すると、生涯抗体を保有するため、再感染は来さない", "妊婦がRSウイルスに初感染すると、児に先天性障害を起こすことがある", "流行性耳下腺炎の合併症として高度難聴をきたすことがある", "流行性耳下腺炎は、通常両側性が多い", "ヒトパルボウイルスB19は小児伝染性紅斑の原因ウイルスである", "日本脳炎ウイルスはブタが増殖動物で媒介生物は蚊である", "デング熱はヒト-ヒト感染を起こす"],
          answerImg: [RSV, MumpsVirus, Parvovirus, JapaneseEncephalitisVirus, DengueVirus],
          answer: '3,4,5,6が正しい',
          commentary: 'RSウイルス(Respiratory syncytial virus)は呼吸器に感染する風邪の原因ウイルスで、抗体ができないため2歳までに100%感染、生涯にわたって再感染を繰り返す。抗体ができないため母体移行抗体の存在する乳児期前半(～生後6ヶ月）でも感染が成立し、重症化しやすい。病原性は低く先天性障害の原因にはならない。　流行性耳下腺炎（おたふくかぜ）はムンプスウイルスによって引き起こされ、悪化しウイルス血症を引き起こすと高度難聴をきたすことがある。感染しても1/4程度は無症状で、発症すると3/4程度に両側性の腫脹が見られる。　ヒトパルボウイルスB19による小児伝染性紅斑はりんご病ともよばれる。　日本脳炎は豚が増幅動物で、蚊によって伝播される。感染してもほとんどは無症状で、ヒトヒト感染しない。　デング熱はデングウイルス(1~4型)が原因の感染症で、蚊によって媒介されヒトヒト感染せず、増幅動物はいない。　選択肢のウイルスはパルボウイルス以外RNAウイルスである',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'Measles virusで正しいのはどれか（複数選択可）',
          choices: ["不活化ワクチンによって予防可能である", "ノイラミニダーゼ阻害剤による治療が可能である", "感染後、亜急性硬化性全脳炎を発症する場合がある", "頬粘膜にコブリック斑が出現する", "空気感染を起こす"],
          answerImg: [Measles],
          answer: '3,4,5が正しい',
          commentary: '麻疹（Measles）は1本鎖マイナスRNAウイルスで、空気感染する強い感染力とほぼ100%発症することが特徴的である。臨床症状として口腔内頬粘膜のコプリック斑 → 耳後部から顔・四肢へ広がる紅色小斑状丘疹 → 回復期の色素沈着 がみられ、感染から数年～十数年以上後に亜急性硬化性全脳炎SSPEを発症することがある。麻疹風疹混合ワクチンは弱毒生ワクチン。　ノイラミダーゼ(NA)阻害薬で阻害されるのはインフルエンザウイルス',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'インフルエンザについて正しいのはどれか（複数選択可）',
          choices: ["A型、B型、C型ともパンデミックをおこす", "エンベロープを保有する", "アルコールでは失活しない", "シアル酸レセプターと赤血球凝集素が結合して細胞内へ侵入する", "ウイルスが細胞外へ放出する際、ノイラミニダーゼが必要である"],
          answerImg: [influenzaVirusA, influenzaVirusHA, influenzaVirusNA],
          answer: '2,4,5が正しい',
          commentary: 'インフルエンザは1本鎖マイナスRNAエンベロープウイルスで、抗原変異を起こす分節構造、表面のHA（赤血球凝集）・NA（ノイラミニダーゼ）蛋白抗原が特徴的である。パンデミックを引き起こすのは多くの亜型を持ち鳥類など広い動物に自然宿主がいるA型のみである。脂質のエンベロープはアルコールなどに溶け失活しやすく、ウイルスの侵入・放出に使われるHA・NAはワクチン・抗ウイルス剤に利用される。',
        },
        {
          detailInfo: '',
          questionImg: [question202201],
          questionSentence: '表は株A~株Gの薬剤感受性試験結果で、数値は最小発育阻止濃度(μg/mL)を表している。 このうちGに当てはまる耐性株を下記 1~7 よりーつ選べ。',
          choices: ["ESBL産生E.coli", "Enterobacter脱抑制株", "メタロ-β-ラクタマーゼ産生E.coli", "多剤耐性緑膿菌", "E.coli野生株", "K.pneumoniae野生株", "ペニシリナーゼ産生E.coli"],
          answerImg: [resistanceSummary, metalloLactamase],
          answer: 'クラスB：メタロ-β-ラクタマーゼ産生E.coli',
          commentary: 'カルバペネム系に耐性をもつのはクラスB(メタロ/IMP)産生あるいは緑膿菌のみで、Gはモノバクタムに耐性を持たないのでクラスB：メタロ-β-ラクタマーゼ産生E.coli。クラスBラクタマーゼはモノバクタムは分解できないが、ESBLなどはモノバクタムを分解できるので、クラスB + ESBL産生している場合多くの抗菌薬がつかえなくなってしまう。緑膿菌(P.aeruginosa)はもともと薬剤耐性が強いのでクラスBを産生するだけで多剤耐性を獲得する → Fに該当。　大腸菌野生株は第一世代セフェム系に耐性を持たないのが特徴的 → Aに該当。ペニシリナーゼ（クラスA）産生E.coliはほぼペニシリンだけ分解できる → Cに該当。クラスC(ampC)産生E.coliはカルバペネム系・第4世代セフェム系以外に耐性をもつ → 該当なし。ESBLはペニシリナーゼが強化されたもので、ESBL産生E.coli広いスペクトルを持つがCVAに阻害されセファマイシン系・カルバペネム系は分解できない → Bが該当。K.pneumoniae（肺炎桿菌）は野生株でも現在ほぼペニシリンに自然耐性をもつ → Dが該当。腸球菌(Enterobacter)は院内などでβラクタマーゼを際限なく産生する脱抑制株になるとカルバペネム系以外すべてに耐性をもつようになる → Eが該当。　　　　　カルバペネム系に耐性→メタロ-β-ラクタマーゼ（クラスB）産生E.coliか緑膿菌確定。クラブラン酸CVAで阻害される→ペニシリナーゼ（クラスA）産生E.coliか野生株確定。',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
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
      ],
    }, {
      groupTag: "2021年抜粋",
      groupContents: [{
          detailInfo: '',
          questionImg: [],
          questionSentence: '細菌の分類学上重要なグラム染色の手段で正しいのはどれか。',
          choices: ["ルゴール液→サフラニン液→クリスタルバイオレット", "ルゴール液→クリスタルバイオレット→サフラニン液", "クリスタルバイオレット→サフラニン液→ルゴール液", "クリスタルバイオレット→ルゴール液→サフラニン液", "サフラニン液→クリスタルバイオレット→ルゴール液"],
          answerImg: [GramMethod],
          answer: 'クリスタルバイオレット→ルゴール液→サフラニン液',
          commentary: 'クリスタルバイオレット、ルゴール、アルコール、サフラニンの順',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'グラム陽性菌とグラム陰性菌について大きな特徴の違いはどれか',
          choices: ["ペプチドグリカン層の厚み", "リポ多糖体の有無", "鞭毛の数", "リン脂質の有無", "プラスミドの有無"],
          answerImg: [GramDifferencesGraph, GramDifferences],
          answer: 'ペプチドグリカン層の厚み、リポ多糖体、リン脂質',
          commentary: '鞭毛・プラスミドはグラム染色に関係しない（グラム陰性菌のほうに偏ってはいるが）。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '関係のない組み合わせはどれか',
          choices: ["Rプラスミド - 耐性遺伝子", "世代時間 - 二分裂による増殖", "形質転換 - ファージ", "外毒素 -  LPS", "オペロン - リプレッサー"],
          answerImg: [toxinInnerOuter, repressor],
          answer: '3,4は無関係',
          commentary: 'Rプラスミドは薬剤耐性遺伝子、Fプラスミドは大腸菌に関与する。いずれも接合伝達しうる。形質転換（外来のDNAを取り込み形質を変化させる現象）は細菌では良く起こる。DNAを取り込みやすい状態→コンピテント。ファージによる遺伝子の導入は形質導入とよばれる。LPSのリピドAは内毒素。オペロンは状況に応じて遺伝子発現を制御する原核生物の機構で、リプレッサーを用いて転写制御（とくに転写阻害）を行っている。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ペニシリン耐性肺炎球菌(PRSP)の薬剤耐性機序はどれか？',
          choices: ["β-ラクタマーゼ産生", "PBPの変異", "外膜透過性の低下", "リボソームの変異", "DNAジャイレースの変異"],
          answerImg: [pneumoniaeStreptococcusResistance, BetaLactamResistanceMechanisms, betaLactamaseCounterexample],
          answer: '2が該当',
          commentary: 'ペニシリン耐性の肺炎球菌は細胞膜のPBP(ペニシリン結合タンパク)に変異が入ることでβ-ラクタム系抗菌薬に耐性を持つようになるが、肺炎桿菌などのグラム陰性菌とは異なり酵素（βラクタマーゼ）産生は行わないため、投与したβラクタム系抗菌薬は周辺の微生物には効く。肺炎球菌はグラム陽性なので外膜をもたない（莢膜はもつ）。　ペニシリン以外にも、マクロライド系（エリスロマイシンなど）などタンパク合成阻害抗菌薬には標的のリボソームに変異を起こし耐性を獲得することがあるし、キノロン系など核酸合成阻害抗菌薬には標的のDNA複製酵素に変異を起こすことで耐性を獲得することがある。',
        },

        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '黄色ブドウ球菌による食中毒として原因になりうる食品はどれか',
          choices: ["おにぎり", "鳥刺し", "シチュー", "デミグラスハンバーグ", "牛乳"],
          answerImg: [enterotoxin, SAPathogenicity],
          answer: 'すべて該当',
          commentary: '黄色ブドウ球菌は通性嫌気性耐塩性グラム陽性球菌で、耐熱性黄色ブドウ球菌エンテロトキシン毒素によって様々な食品から食中毒を引き起こす。黄色ブドウ球菌は皮膚常在菌なので、手で直接触ることのあるおにぎり、ハンバーグなどは勿論、空気中に普通に漂っているため鳥刺し、シチューの調理中放置していると上から降ってきて、温度次第で繁殖してしまう。牛乳も開封すると黄色ブドウ球菌が入ってきて、冷蔵が不十分だったりすると繁殖して食中毒を引き起こすことがある。　その他食中毒の原因菌として、鶏肉関係はカンピロバクター（食中毒として最多）、シチューはウェルシュ菌、ハンバーグはO157大腸菌が有名。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】リプレッサーはオペロンに結合して遺伝子の発現を抑制する。',
          //      choices: ["", "", "", "", ""],
          answerImg: [repressor],
          answer: '誤り。オペロンではなくプロモーター。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '細菌が自己を防御するために使用する抵抗因子はどれか。',
          choices: ["バイオフィルム形成", "鞭毛", "莢膜", "ペプチドグリカン", "白血球障害性毒素"],
          answerImg: [GramPositiveProtection],
          answer: 'バイオフィルム形成、莢膜、白血球障害性毒素',
          commentary: '細菌は自己を宿主免疫から防御するため、様々な抵抗因子を発達させている。白血球障害性毒素は黄色ブドウ球菌や緑膿菌が形成するロイコジシンなどが該当し、化膿性炎症の原因となる。莢膜は肺炎球菌・肺炎桿菌・インフルエンザ菌・髄膜炎菌など、主に飛沫で感染する細菌におおい。バイオフィルムは緑膿菌のほか、ミュータンス菌など粘膜表面で流されず付着するために発達させている。鞭毛は逆に移動するため。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '破傷風菌について、誤っているものはどれか。',
          choices: ["破傷風菌の毒素は神経毒である。", "破傷風による致命率は20~30%である。", "３種混合ワクチンの中には、破傷風菌ワクチンが含まれているので、日本での発病はない", "血清療法が有効である。", "土壌中に存在している。", "破傷風菌は五類感染症に指定されている。"],
          answerImg: [toxin, tetaniClostridium1, tetaniClostridium2],
          answer: '3',
          commentary: '強直性神経毒のテタノスパスミンによって呼吸困難に陥り致死率が高い。DPT3種混合のTが破傷風菌。Dはジフテリア、Pは百日咳。これらは不活化ワクチン。土壌中に存在し文字通り傷口から感染する芽胞形成性グラム陽性桿菌。破傷風菌は5類全数把握感染症である。治療は抗毒素抗体（破傷風免疫ヒトグロブリン）であり、かつてはこれを含んだ血清が使われていた。',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'ボツリヌス食中毒について誤っているものはどれか。',
          choices: ["毒素型食中毒である。", "加熱で予防できる。", "眼瞼下垂が見られる。", "呼吸筋麻痺はまれである。", "乳児に蜂蜜を投与してはならないのは、小児性ボツリヌス食中毒を引き起こすからである。"],
          answerImg: [],
          answer: '呼吸筋麻痺はまれである。',
          commentary: '弛緩性の神経毒で最悪呼吸筋が麻痺して死に至る',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】MRSAの治療薬として使われるアルベカシンはアミノ配糖体系薬に分類される。',
          //  choices: ["", "", "", "", ""],
          answerImg: [antibiotics],
          answer: '正しい。',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '【正誤問題】野口英世は黄熱病の発見を認められて1903年にノーベル生理学・医学賞を受賞した。',
          //  choices: ["", "", "", "", ""],
          answerImg: [],
          answer: '誤り。黄熱病を発見していない、ノーベル賞を受賞していない。',
          commentary: '黄熱病の原因は黄熱ウイルスで、当時の顕微鏡では見つけられなかった',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '感染症法に指定されている指定感染症について正しいものはどれか。',
          choices: ["積極的な「疫学調査(＊ここでは恐らく記述疫学のことを指す)」を行う必要がある。", "濃厚接触者に対しては外出自粛などで感染拡大を試みる。", "1年間を期限として政令指定される。", "既知の感染症だが、1~3類に準じた対応が必要である。", "新型コロナウイルスは指定感染症に指定された初めての感染症である。"],
          answerImg: [infectiousLaw],
          answer: '1,2,3,4',
          commentary: '新型コロナは指定感染症(2020.2.1~2021.1.31)→新型インフルエンザ等感染症(2021.2.13~)→5類感染症(2023.5.8~)へと扱いが変わっていった。実は1年間しか指定感染症に指定されていない。1類～3類感染症に準じた対応には相当な負担があった。疫学調査には濃厚接触者の追跡も含まれる',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'ウイルスについて誤っているものを選べ。',
        //   choices: ["不顕性感染をするウイルスが存在する。", "ヒトインフルエンザにはA,B,C型がある。", "新型コロナウイルスは抗原不連続性変異により出現する。", "一般に、ウイルスは変異するとより致命率が高くなり、より危険になる傾向にある。", "一般に、ウイルスは変異するとより感染力が高くなる傾向にある。"],
        //   answerImg: [influenzaVirusA],
        //   answer: '3?',
        //   commentary: '変異の目的はウイルスがより増殖すること。人間を殺すことが目的であるわけではなく、むしろ宿主が早期に死ぬと感染がそこで止まってしまうためウイルスにとっては都合が悪い。変異すると感染力は高くなるが致命率は低くなる。その裏付けとして、一般にウイルスの致命率と感染力の間には負の相関が認められる。',
        // },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ["", "", "", "", ""],
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