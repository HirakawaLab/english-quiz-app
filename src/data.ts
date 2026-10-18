export type Question = {id:string;stem:string;choices:[string,string,string,string];answer:number|null;explanation:string;translation:string;source:string};
export const samples:Question[]=[
{id:'sample-1',stem:'The game those students are playing now ____ exciting.',choices:['look','looks','are looking','look at'],answer:1,explanation:'主語は The game（単数）です。those students are playing now は game を修飾する節なので、三人称単数現在形の looks を使います。',translation:'あの生徒たちが今しているゲームは面白そうです。',source:'サンプル'},
{id:'sample-2',stem:'My father ____ Tokyo last week.',choices:['goes','visits','went','visited'],answer:3,explanation:'last week があるため過去形を使います。visit は他動詞なので前置詞なしで Tokyo を目的語にとれます。went なら went to Tokyo とする必要があります。',translation:'父は先週東京を訪れました。',source:'サンプル'},
{id:'sample-3',stem:'____ Emily late for the meeting yesterday?',choices:['Is','Was','Did','Does'],answer:1,explanation:'late は形容詞なので be 動詞を使います。yesterday に合わせて過去形 Was が正解です。',translation:'エミリーは昨日、会議に遅刻しましたか。',source:'サンプル'},
{id:'sample-4',stem:'When I went to the park last Sunday, there ____ any children there.',choices:["isn't","wasn't","aren't","weren't"],answer:3,explanation:'last Sunday に対応する過去形を使い、children は複数形なので there weren’t が正解です。',translation:'先週の日曜日に公園へ行ったとき、そこには子どもが一人もいませんでした。',source:'サンプル'},
{id:'sample-5',stem:'My sisters and I ____ visit our grandfather next week.',choices:['am going to','are going to','will be','will have'],answer:1,explanation:'My sisters and I は複数主語なので are going to を使います。',translation:'姉妹と私は来週祖父を訪ねる予定です。',source:'サンプル'},
{id:'sample-6',stem:'A: You look sad, don’t you?\nB: Yes, I ____ him for a long time.',choices:["haven't seen",'could see','saw',"don't see"],answer:0,explanation:'for a long time は現在まで続く期間を表すため、現在完了形 haven’t seen が自然です。',translation:'長い間彼に会っていないのです。',source:'サンプル'}
];

export const addedQuestions:Question[]=[
{id:"entrance-2026-01",stem:"This movie is worth ____ again and again.",choices:["seeing", "show", "shown", "to see"],answer:0,explanation:"be worth + 動名詞（-ing）で「〜する価値がある」。worth seeing が正しい形です。",translation:"この映画は何度も見る価値があります。",source:"2026年度 英語 問題1"},
{id:"entrance-2026-02",stem:"When she heard the news last night, she could ____ say anything.",choices:["always", "hardly", "likely", "possible"],answer:1,explanation:"hardly は「ほとんど〜ない」。could hardly say anything で「ほとんど何も言えなかった」です。",translation:"昨夜その知らせを聞いたとき、彼女はほとんど何も言えませんでした。",source:"2026年度 英語 問題2"},
{id:"entrance-2026-03",stem:"It will ____ us 2,000 yen more if we add this option to the tour.",choices:["cost", "need", "spend", "use"],answer:0,explanation:"cost + 人 + 金額で「人に（金額）の費用がかかる」。will の後は動詞の原形です。",translation:"このオプションをツアーに追加すると、私たちにはさらに2,000円かかります。",source:"2026年度 英語 問題3"},
{id:"entrance-2026-04",stem:"I wish I ____ the meeting next week.",choices:["am attending", "attend", "could attend", "will attend"],answer:2,explanation:"I wish + 仮定法過去で現在・未来の実現しにくい願望を表します。could attend は「出席できればいいのに」。",translation:"来週の会議に出席できればいいのにと思います。",source:"2026年度 英語 問題4"},
{id:"entrance-2026-05",stem:"Excuse me, but ____ ask a favor of you?",choices:["can you", "don’t you", "may I", "won’t I"],answer:2,explanation:"May I + 動詞の原形で丁寧に許可を求めます。May I ask a favor of you? は「お願いしてもよいですか」。",translation:"すみませんが、ひとつお願いしてもよろしいでしょうか。",source:"2026年度 英語 問題5"},
{id:"entrance-2026-06",stem:"The students made the teacher ____ with their behavior.",choices:["became upset", "become furious", "being angry", "to be sad"],answer:1,explanation:"使役動詞 make は make + 目的語 + 動詞の原形。make the teacher become furious で「先生を激怒させる」。",translation:"生徒たちはその振る舞いで先生を激怒させました。",source:"2026年度 英語 問題6"},
{id:"entrance-2026-07",stem:"The children were playing ____ in the park.",choices:["cheery", "friendly", "happy", "joyfully"],answer:3,explanation:"playing を修飾するには副詞が必要です。joyfully は「楽しそうに・喜んで」という副詞です。",translation:"子どもたちは公園で楽しそうに遊んでいました。",source:"2026年度 英語 問題7"},
{id:"entrance-2026-08",stem:"____ the train was delayed, we arrived on time.",choices:["Because of", "Even", "Though", "Whatever"],answer:2,explanation:"Though + 主語 + 動詞で「〜だけれども」。Because of は後ろに名詞句をとります。",translation:"電車は遅れましたが、私たちは時間どおりに到着しました。",source:"2026年度 英語 問題8"},
{id:"entrance-2026-09",stem:"This is the book ____ I was talking about.",choices:["of which", "that", "what", "whose"],answer:1,explanation:"先行詞 the book を修飾する目的格の関係代名詞 that が適切です。about の目的語が欠けています。",translation:"これが私が話していた本です。",source:"2026年度 英語 問題9"},
{id:"entrance-2026-10",stem:"I don’t think we have a language class tomorrow. ____ do you need a dictionary for?",choices:["How", "How about", "What", "What if"],answer:2,explanation:"What ... for? は「何のために〜？」。疑問詞 What が前置詞 for の目的語になります。",translation:"明日は語学の授業がないと思います。何のために辞書が必要なのですか。",source:"2026年度 英語 問題10"},
{id:"entrance-2026-11",stem:"I ____ to go running every morning.",choices:["am use", "got used", "use", "used"],answer:3,explanation:"used to + 動詞の原形で「以前はよく〜した」。be/get used to + 名詞・動名詞とは区別します。",translation:"私は以前、毎朝ランニングをしていました。",source:"2026年度 英語 問題11"},
{id:"entrance-2026-12",stem:"____ turn off your mobile phones during the performance.",choices:["Be aware to", "Make sure to", "Remind you of", "Take care of"],answer:1,explanation:"Make sure to + 動詞の原形で「必ず〜してください」。注意を促す定型表現です。",translation:"公演中は必ず携帯電話の電源を切ってください。",source:"2026年度 英語 問題12"},
{id:"entrance-2026-13",stem:"It was ____ book that I read it many times.",choices:["most amazing", "much too great", "so excellent", "such a wonderful"],answer:3,explanation:"such + a + 形容詞 + 単数名詞 + that ... で「とても〜なので…」。such a wonderful book が適切です。",translation:"それはとてもすばらしい本だったので、私は何度も読みました。",source:"2026年度 英語 問題13"},
{id:"entrance-2026-14",stem:"It was nice ____ drive me to the station.",choices:["for you to", "if you", "of you to", "that you"],answer:2,explanation:"It is + 人の性質を表す形容詞 + of + 人 + to ... の形です。nice of you to ... で「〜してくれて親切だった」。",translation:"駅まで車で送ってくださってありがとうございました。",source:"2026年度 英語 問題14"},
{id:"entrance-2026-15",stem:"Could you give me ____, please?",choices:["advising", "a piece of advice", "few advice", "to advise"],answer:1,explanation:"advice は不可算名詞です。「ひとつの助言」は a piece of advice と表します。",translation:"ひとつアドバイスをいただけますか。",source:"2026年度 英語 問題15"}
];
export const blankQuestion=():Question=>({id:crypto.randomUUID(),stem:'',choices:['','','',''],answer:null,explanation:'',translation:'',source:'写真から登録'});
// OCR is an imperfect extraction aid. Never infer an answer key from OCR.
export function parseOcr(text:string):Question[]{
 const lines=text.replace(/\r/g,'').split('\n').map(x=>x.trim()).filter(Boolean);
 const starts=(s:string)=>/^\d{1,2}[.．、\s]+[A-Za-z(\[]/.test(s);
 const groups:string[][]=[];let current:string[]=[];
 for(const line of lines){if(starts(line)&&current.length){groups.push(current);current=[];}current.push(line);}if(current.length)groups.push(current);
 const out:Question[]=[];
 for(const group of groups){
  const joined=group.join('\n');const matches=[...joined.matchAll(/(?:①|②|③|④|[①-④]|\(?[1-4]\)|[1-4][.)．])\s*([^\n①②③④]+)/g)];
  const q=blankQuestion();const prefix=matches.length?joined.slice(0,matches[0].index):joined;
  q.stem=prefix.replace(/^\d{1,2}[.．、\s]+/,'').trim().replace(/\[\s*\]|□|▢|_{2,}/g,'____');
  if(matches.length>=4){q.choices=matches.slice(0,4).map(m=>m[1].trim()) as Question['choices'];}
  if(q.stem||matches.length)out.push(q);
 }
 return out.length?out:[{...blankQuestion(),stem:text.trim().slice(0,1200)}];
}
