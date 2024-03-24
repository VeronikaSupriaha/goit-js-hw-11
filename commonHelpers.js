import{i as d,S as u}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();function p(o){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"43027284-ae8275f6d108abc1bc2578323",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(i).then(s=>s.json())}function f(o,t,i){if(o.length<=0)throw new Error(d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight"}));const s=o.map(e=>`
          <li class="cards">
          <a href="${e.largeImageURL}"> <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="152"/> </a>
          <div class="card-description">
            <p class="description"><b>Likes</b> ${e.likes}</p>
            <p class="description"><b>Views</b> ${e.views}</p>
            <p class="description"><b>Comments</b> ${e.comments}</p>
            <p class="description"><b>Downloads</b> ${e.downloads}</p>
            </div>
          </li>
      `).join("");t.insertAdjacentHTML("beforeend",s);const r=new u(".gallery a",{captionsData:"alt",captionDelay:250});i.classList.add("is-hidden"),r.refresh()}const a=document.querySelector("#data-input"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=document.querySelector("form");m.addEventListener("submit",o=>{if(o.preventDefault(),console.log("1"),l.classList.remove("is-hidden"),c.innerHTML="",a.value===""){d.show({title:"Error",message:"Please, fill the field to start search images. ",backgroundColor:"#ef4040",position:"topRight"});return}p(a.value).then(t=>f(t.hits,c,l)).catch(t=>console.log(t))});
//# sourceMappingURL=commonHelpers.js.map
