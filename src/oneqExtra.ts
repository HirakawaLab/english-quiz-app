/// <reference types="vite/client" />
import type {SocialQuestion} from './socialData';

const modules=import.meta.glob<{default:SocialQuestion[]}>('./oneq/*.ts',{eager:true});

export const extraOneQuestions:SocialQuestion[]=Object.keys(modules).sort().flatMap(k=>modules[k].default);
