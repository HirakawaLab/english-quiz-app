import {useEffect,useMemo,useState} from 'react';
import {ArrowLeft,ArrowRight,BookOpen,CheckCircle2,ChevronDown,Clock3,GraduationCap,Image as ImageIcon,Library,RotateCcw} from 'lucide-react';
import {socialTopics,type SocialTopic} from './socialData';

type SocialHistory = Record<string,{attempts:number;correct:number;lastCorrect:boolean}>;
const HISTORY_KEY='study-social-history-v1';
function readHistory():SocialHistory{try{const raw=localStorage.getItem(HISTORY_KEY);return raw?JSON.parse(raw) as SocialHistory:{}}catch{return {}}}

export default function SocialPage(){
 const [topicId,setTopicId]=useState<SocialTopic['id']>('orient');
 const [view,setView]=useState<'read'|'quiz'>('read');
 const [index,setIndex]=useState(0);
 const [selected,setSelected]=useState<number|null>(null);
 const [revealed,setRevealed]=useState(false);
 const [history,setHistory]=useState<SocialHistory>(readHistory);
 const [reviewOnly,setReviewOnly]=useState(false);
 const [reviewIds,setReviewIds]=useState<string[]>([]);
 useEffect(()=>localStorage.setItem(HISTORY_KEY,JSON.stringify(history)),[history]);
 const topic=socialTopics.find(t=>t.id===topicId)!;
 const pool=useMemo(()=>reviewOnly?topic.questions.filter(q=>reviewIds.includes(q.id)):topic.questions,[topic,reviewOnly,reviewIds]);
 const current=pool[index]??pool[0];
 const topicSolved=topic.questions.filter(q=>(history[q.id]?.attempts??0)>0).length;
 const totalSolved=socialTopics.flatMap(t=>t.questions).filter(q=>(history[q.id]?.attempts??0)>0).length;
 const resetAnswer=()=>{setIndex(0);setSelected(null);setRevealed(false)};
 const chooseTopic=(id:SocialTopic['id'])=>{setTopicId(id);setView('read');setReviewOnly(false);setReviewIds([]);resetAnswer()};
 const openQuiz=()=>{setView('quiz');setReviewOnly(false);setReviewIds([]);resetAnswer()};
 const showAnswer=()=>{if(!current||selected===null||revealed)return;
  setRevealed(true);
  setHistory(h=>{const previous=h[current.id]??{attempts:0,correct:0,lastCorrect:false};return {...h,[current.id]:{attempts:previous.attempts+1,correct:previous.correct+(selected===current.answer?1:0),lastCorrect:selected===current.answer}}});
 };
 const navigate=(direction:number)=>{setIndex(i=>Math.max(0,Math.min(pool.length-1,i+direction)));setSelected(null);setRevealed(false)};
 return <div className="social-app">
  <div className="social-hero"><div><span className="eyebrow">HISTORY · WORLD HISTORY</span><h1>社会 <span>世界史を学ぶ</span></h1><p>解説で流れをつかみ、4択問題で理解を確認しましょう。</p></div><div className="social-hero-stats"><span>学習済み</span><strong>{totalSolved}<small> / 3 問</small></strong></div></div>
  <div className="social-topic-tabs" role="group" aria-label="学習テーマ">
   {socialTopics.map(t=><button key={t.id} className={topicId===t.id?'current':''} onClick={()=>chooseTopic(t.id)}><Library size={18}/><span><strong>{t.title}</strong><small>{t.subtitle}</small></span><span className="social-topic-count">{t.questions.length}問</span></button>)}
  </div>
  <div className="social-breadcrumb"><span>社会</span><span>›</span><span>{topic.title}</span></div>
  <div className="social-chapter-head"><div><span className="chapter-era">{topic.era}</span><h2>{topic.title}</h2><p>{topic.subtitle}</p></div><span className="chapter-progress">{topicSolved} / {topic.questions.length} 問 学習済み</span></div>
  <div className="social-subnav" role="group" aria-label="学習モード"><button onClick={()=>setView('read')} className={view==='read'?'active':''}><BookOpen size={18}/> 解説を読む</button><button onClick={()=>{setView('quiz');resetAnswer()}} className={view==='quiz'?'active':''}><GraduationCap size={18}/> 問題に挑戦 <span>({topic.questions.length}問)</span></button></div>
  {view==='read'?<>
   <section className="social-summary"><span className="social-kicker">この単元のポイント</span><p>{topic.overview}</p><ul>{topic.overviewPoints.map((p,i)=><li key={i}>{p}</li>)}</ul></section>
   <section className="social-section"><div className="social-section-heading"><Clock3 size={21}/><h3>時代の流れ</h3></div><div className="history-timeline">{topic.timeline.map((item,i)=><div className="history-event" key={i}><div className="history-date">{item.date}</div><div className="history-event-text">{item.description}</div></div>)}</div></section>
   <section className="social-section"><div className="social-section-heading"><BookOpen size={21}/><h3>重要事項の解説</h3></div><div className="social-lessons">{topic.sections.map((section,i)=><article key={i} className="social-lesson"><h4>{section.heading}</h4><p>{section.body}</p>{section.highlights&&<div className="key-points"><span>要点</span><ul>{section.highlights.map((point,j)=><li key={j}>{point}</li>)}</ul></div>}</article>)}</div></section>
   <section className="social-section"><details className="photo-references"><summary><ImageIcon size={19}/> 参考：写真の原資料を見る <ChevronDown size={18}/></summary><p>文字を読み取り、上の解説として整理しています。原資料にある地図・図解や詳しい文章もここから確認できます。</p>{topic.sourceImages.map(im=><figure key={im.src}><img src={im.src} loading="lazy" alt={im.caption}/><figcaption>{im.caption}</figcaption></figure>)}</details></section>
   <div className="social-action-card"><div><strong>内容を理解できましたか？</strong><p>次は4択問題で理解度を確認しましょう。</p></div><button className="primary" onClick={openQuiz}>問題に挑戦する <ArrowRight size={18}/></button></div>
  </>:<>
   <div className="social-quiz-toolbar"><span>{reviewOnly?'前回間違えた問題':'この単元の確認問題'}</span><label>出題範囲 <select value={reviewOnly?'wrong':'all'} onChange={e=>{setReviewOnly(e.target.value==='wrong');setReviewIds(topic.questions.filter(q=>history[q.id]?.lastCorrect===false).map(q=>q.id));resetAnswer()}}><option value="all">すべての問題</option><option value="wrong">前回間違えた問題</option></select></label></div>
   {!current?<section className="panel empty"><CheckCircle2 size={40}/><h3>復習する問題はありません</h3><p>一度間違えた問題があれば、ここに表示されます。</p><button className="primary" onClick={()=>{setReviewOnly(false);resetAnswer()}}>すべての問題に戻る</button></section>:<section className="panel social-question"><div className="question-head"><span className="tag">問題 {index+1} / {pool.length}</span><span className="muted">{current.source}</span></div><div className="progress"><div style={{width:`${((index+1)/pool.length)*100}%`}}/></div><h3>{current.title}</h3><p className="social-question-prompt">{current.prompt}</p><div className="social-choices">{current.choices.map((c,i)=><button key={i} className={'social-choice '+(selected===i?'selected ':'')+(revealed&&i===current.answer?'correct ':'')+(revealed&&selected===i&&i!==current.answer?'incorrect':'')} disabled={revealed} onClick={()=>setSelected(i)}><span className="num">{['①','②','③','④'][i]}</span><span>{c}</span></button>)}</div>{!revealed?<button className="primary social-check" disabled={selected===null} onClick={showAnswer}>解答を確認する</button>:<div className="feedback social-feedback" aria-live="polite"><h3 className={selected===current.answer?'good':'bad'}>{selected===current.answer?'✓ 正解です！':'✕ 不正解です'}</h3><p><strong>正解：{['①','②','③','④'][current.answer]} {current.choices[current.answer]}</strong></p><h4>解説</h4><p>{current.explanation}</p></div>}<div className="quiz-foot"><button className="ghost" disabled={index===0} onClick={()=>navigate(-1)}><ArrowLeft size={16}/> 前の問題</button>{index<pool.length-1?<button className="primary" onClick={()=>navigate(1)}>次の問題 <ArrowRight size={16}/></button>:<button className="ghost" onClick={()=>{setView('read');resetAnswer()}}><RotateCcw size={16}/> 解説に戻る</button>}</div></section>}
   <div className="social-return"><button onClick={()=>{setView('read');resetAnswer()}}><BookOpen size={16}/> 解説を読み直す</button></div>
  </>}
 </div>
}
