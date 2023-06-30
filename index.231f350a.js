const e={breedSelect:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};function t(){e.loader.classList.add("visible"),console.log("add")}function r(){e.loader.classList.remove("visible"),console.log("remove")}function n(){e.error.classList.remove("visible")}function o(){e.catInfo.classList.remove("visible")}function a(a){const c=a.target.value;var s;r(),o(),e.error.classList.add("visible"),(s=c,fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_aREgESGKEg14yGujzwJ7hCdukQBm1j3x2BshFCVyWS75bgzJPj3wCqqzbe0TrawT&breed_ids=${s}`).then((e=>{if(!e.ok)throw new Error("Failed to fetch cat");return e.json()})).then((e=>{const t=e[0];return{imageUrl:t.url,breedName:t.breeds[0].name,description:t.breeds[0].description,temperament:t.breeds[0].temperament}})).catch((e=>console.log(e.message)))).then((r=>{e.catInfo.innerHTML="",function(t){const r=e.catInfo;r.innerHTML=`\n    \n    <img src="${t.imageUrl}" alt="Cat Image" />\n    <div class="wrapper">\n    <h2>${t.breedName}</h2>\n    <p><strong>Description:</strong> ${t.description}</p>\n    <p><strong>Temperament:</strong> ${t.temperament}</p>\n    </div>\n  `,r.classList.remove("visible")}(r),t()})).catch((e=>{console.error("Error loading cat:",e),n(),t()}))}document.addEventListener("DOMContentLoaded",(function(){r(),o(),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_aREgESGKEg14yGujzwJ7hCdukQBm1j3x2BshFCVyWS75bgzJPj3wCqqzbe0TrawT").then((e=>{if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).then((e=>e.map((e=>({id:e.id,name:e.name}))))).catch((e=>console.log(e.message))).then((r=>{!function(t){const r=e.breedSelect;t.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,r.appendChild(t)}))}(r),e.breedSelect.addEventListener("change",a),t()})).catch((e=>{console.error("Error loading breeds:",e),n(),t()}))}));
//# sourceMappingURL=index.231f350a.js.map