var t={};class e{static FIELD_SIZE=4;static STATUS={idle:"idle",playing:"playing",win:"win",lose:"lose"};static INITIAL_STATE=Array(e.FIELD_SIZE).fill(Array(e.FIELD_SIZE).fill(0));constructor(t=e.INITIAL_STATE.map(t=>[...t])){this.status=e.STATUS.idle,this.board=t,this.score=0}moveLeft(){this.board=this.board.map(t=>this.#t(t)),this.#e()}moveRight(){this.board=this.board.map(t=>this.#t(t.reverse()).reverse()),this.#e()}moveUp(){this.board=this.#s(this.board).map(t=>this.#t(t)),this.board=this.#s(this.board),this.#e()}moveDown(){this.board=this.#s(this.board).map(t=>this.#t(t.reverse()).reverse()),this.board=this.#s(this.board),this.#e()}getScore(){return this.score}getState(){return this.board}getStatus(){return this.board.flat().includes(2048)?e.STATUS.win:this.board.flat().includes(0)||this.#r()?this.status:e.STATUS.lose}start(){this.status=e.STATUS.playing,this.#e(),this.#e()}restart(){this.board=e.INITIAL_STATE.map(t=>[...t]),this.status=e.STATUS.idle,this.score=0,this.start()}#t(t){t=t.filter(t=>t);for(let e=0;e<t.length-1;e++)t[e]===t[e+1]&&(t[e]*=2,t[e+1]=0,this.score+=t[e]);return t.filter(t=>t).concat(Array(e.FIELD_SIZE-t.filter(t=>t).length).fill(0))}#s(t){return t[0].map((e,s)=>t.map(t=>t[s]))}#e(){let t=this.board.flatMap((t,e)=>t.map((t,s)=>0===t?[e,s]:null).filter(t=>t));if(t.length>0){let[e,s]=t[Math.floor(Math.random()*t.length)];this.board[e][s]=.9>Math.random()?2:4}}#r(){for(let t=0;t<this.board.length;t++)for(let e=0;e<this.board[t].length;e++)if(t<this.board.length-1&&this.board[t][e]===this.board[t+1][e]||e<this.board[t].length-1&&this.board[t][e]===this.board[t][e+1])return!0;return!1}}const s=new(t=e),r=document.querySelectorAll(".field-cell"),a=document.querySelector(".button.start"),o=()=>{let t=s.getState();r.forEach((e,s)=>{let r=Math.floor(s/4),a=s%4;e.className="field-cell",e.textContent=t[r][a]||"",t[r][a]&&e.classList.add(`field-cell--${t[r][a]}`)});let e=s.getStatus();document.querySelector(".message-win").classList.toggle("hidden","win"!==e),document.querySelector(".message-lose").classList.toggle("hidden","lose"!==e)},i=()=>{document.querySelector(".game-score").textContent=s.getScore()};document.querySelector(".game-score").textContent=s.getScore(),document.addEventListener("keydown",e=>{if(s.getStatus()===t.STATUS.playing){switch(e.key){case"ArrowLeft":s.moveLeft();break;case"ArrowRight":s.moveRight();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown()}o(),i()}}),a.addEventListener("click",()=>{a.classList.contains("restart")?s.restart():s.start(),o(),i(),document.querySelectorAll(".message-win, .message-lose, .message-start").forEach(t=>t.classList.add("hidden")),a.textContent="Restart",a.className="button restart"});
//# sourceMappingURL=index.a1a6a536.js.map
