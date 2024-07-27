import{S as m,i as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=i=>i.hits.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:o,comments:u,downloads:d})=>`
    <li class= "list-item">
    <a href="${n}"><img src="${r}" alt="${e}" class="list-img"></a>
 <ul class = "content-list">
 <li class="content-list-item">
 <p class="content-list-title">Likes</p>
 <p class="content-list-value">${t}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Views</p>
 <p class="content-list-value">${o}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Comments</p>
 <p class="content-list-value">${u}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Downloads</p>
 <p class="content-list-value">${d}</p>
 </li>
 </ul>
    </li>
    `).join(" "),h=({total:i})=>{i===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})};var y=new m(".gallery a",{captionsData:"alt",captionDelay:250});const g="https://pixabay.com/api",v="45132355-1a938d4dc3b6908ed12965e8f",L=i=>{const s=new URLSearchParams({key:v,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},c=document.querySelector(".form"),a=document.querySelector(".gallery"),S=c.elements.information,l=document.querySelector(".loader"),b=i=>{i.preventDefault(),l.classList.remove("visually-hidden"),L(S.value).then(s=>{l.classList.add("visually-hidden"),h(s);const r=f(s);a.innerHTML="",a.insertAdjacentHTML("afterbegin",r),c.reset(),y.refresh()}).catch(s=>{console.log(s),l.classList.add("visually-hidden")})};c.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
