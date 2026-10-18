export type Question = {id:string;stem:string;choices:[string,string,string,string];answer:number|null;explanation:string;translation:string;source:string};
export const samples:Question[]=[
{id:'sample-1',stem:'The game those students are playing now ____ exciting.',choices:['look','looks','are looking','look at'],answer:1,explanation:'主語は The game（単数）です。those students are playing now は game を修飾する節なので、三人称単数現在形の looks を使います。',translation:'あの生徒たちが今しているゲームは面白そうです。',source:'サンプル'},
{id:'sample-2',stem:'My father ____ Tokyo last week.',choices:['goes','visits','went','visited'],answer:3,explanation:'last week があるため過去形を使います。visit は他動詞なので前置詞なしで Tokyo を目的語にとれます。went なら went to Tokyo とする必要があります。',translation:'父は先週東京を訪れました。',source:'サンプル'},
{id:'sample-3',stem:'____ Emily late for the meeting yesterday?',choices:['Is','Was','Did','Does'],answer:1,explanation:'late は形容詞なので be 動詞を使います。yesterday に合わせて過去形 Was が正解です。',translation:'エミリーは昨日、会議に遅刻しましたか。',source:'サンプル'},
{id:'sample-4',stem:'When I went to the park last Sunday, there ____ any children there.',choices:["isn't","wasn't","aren't","weren't"],answer:3,explanation:'last Sunday に対応する過去形を使い、children は複数形なので there weren’t が正解です。',translation:'先週の日曜日に公園へ行ったとき、そこには子どもが一人もいませんでした。',source:'サンプル'},
{id:'sample-5',stem:'My sisters and I ____ visit our grandfather next week.',choices:['am going to','are going to','will be','will have'],answer:1,explanation:'My sisters and I は複数主語なので are going to を使います。',translation:'姉妹と私は来週祖父を訪ねる予定です。',source:'サンプル'},
{id:'sample-6',stem:'A: You look sad, don’t you?\nB: Yes, I ____ him for a long time.',choices:["haven't seen",'could see','saw',"don't see"],answer:0,explanation:'for a long time は現在まで続く期間を表すため、現在完了形 haven’t seen が自然です。',translation:'長い間彼に会っていないのです。',source:'サンプル'}
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
