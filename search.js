/* empty css                      */import{i as n,S as u}from"./assets/vendor-BvSoRH6M.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const a={searchForm:document.querySelector(".js-search-form"),searchInput:document.querySelector(".js-search-input"),gallery:document.querySelector(".js-gallery"),notFoundText:document.querySelector(".js-not-found-text")},f="https://pixabay.com/api/",d="49309172-5f8130b15ef3c43c70e2ee30a",m="photo",g="horizontal",y="true";function p(i){const t=new URLSearchParams({key:d,q:i,image_type:m,orientation:g,safesearch:y});return fetch(`${f}?${t}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}const h=()=>{n.error({title:"❌ Please, enter a query!",message:"",position:"topCenter",color:"red",icon:""})},S=()=>{n.error({title:"❌ Sorry, there are no images matching your search query. Please try again!",message:"",position:"topCenter",color:"red",icon:""})};function L(i){return i.map(({webformatURL:t,largeImageURL:l,tags:o,likes:e,views:r,comments:s,downloads:c})=>`<li class="gallery-card">
      <a class="gallery-link" href="${l}">
        <img
        class="gallery-img"
        src="${t}"
        alt="${o}">
        <div class="gallery-img-info">
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Likes</li>
              <li class="info-card-value likes">${e}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Views</li>
              <li class="info-card-value likes">${r}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Comments</li>
              <li class="info-card-value likes">${s}</li>
          </ul>
          <ul class="gallery-img-info-card">
              <li class="info-card-title likes">Downloads</li>
              <li class="info-card-value likes">${c}</li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const v=new u(".gallery-link",{captionsData:"alt",captionDelay:250});function E(i){i.preventDefault();const t=i.currentTarget,l=t.elements.user_query.value.trim();if(!l)return h();p(l).then(o=>{if(!o.total)return a.gallery.innerHTML="",S();a.gallery.innerHTML=L(o.hits),v.refresh()}).catch(o=>{console.log(o)}).finally(()=>{t.reset()})}a.searchForm.addEventListener("submit",E);
//# sourceMappingURL=search.js.map
