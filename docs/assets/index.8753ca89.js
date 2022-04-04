import{j as h,n as c,r as d,R as S,a as w}from"./vendor.4c500ef3.js";const C=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}};C();var E="/assets/imagen-criptos.c0430b0f.png";const F=[{id:"USD",nombre:"Dolar"},{id:"MXN",nombre:"Peso Mexicano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],e=h.exports.jsx,r=h.exports.jsxs,x=h.exports.Fragment,N=c.label`
    display: block;
    margin: .9375rem 0;
    color: #FFF;   
    font-family: 'lato', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
`,I=c.select`
    width: 100%;
    padding: .875rem;
    font-size: 1.125rem;
    border-radius: .625rem;
`,k=(s,n)=>{const[a,i]=d.exports.useState("");return[a,()=>r(x,{children:[e(N,{children:s}),r(I,{value:a,onChange:t=>i(t.target.value),children:[e("option",{value:"",children:"Seleccione"}),n.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},L=c.div`
    padding: .9375rem;
    background-color: #B7322C;
    color: #fff;
    font-size: 1.375rem;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
`,A=({children:s})=>e(L,{children:s}),j=c.input`
    width: 100%;
    padding: .625rem;
    margin-top: 1.875rem;
    background-color: #9497FF;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;  
    border: none;
    border-radius: .3125rem;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`,z=({setMonedas:s})=>{const[n,a]=d.exports.useState([]),[i,o]=d.exports.useState(!1),[t,l]=k("Elige tu Moneda",F),[m,u]=k("Elige tu Criptomoneda",n);return d.exports.useEffect(()=>{(async()=>{const v=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")).json()).Data.map(y=>({id:y.CoinInfo.Name,nombre:y.CoinInfo.FullName}));a(v)})()},[]),r(x,{children:[i&&e(A,{children:"Todos los campos son obligatorios"}),r("form",{onSubmit:f=>{if(f.preventDefault(),[t,m].includes("")){o(!0);return}o(!1),s({moneda:t,criptomoneda:m})},children:[e(l,{}),e(u,{}),e(j,{type:"submit",value:"Cotizar"})]})]})},M=c.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.875rem;
    color: #FFF;
    font-family: 'Lato', sans-serif;

`,p=c.p`
      font-size: 1.125rem;
    span {
        font-weight: 700;
    }
`,P=c.p`
    font-size: 1.5rem;
    span {
        font-weight: 700;
    }
`,D=c.img`
    display: block;
    width: 9.375rem;
`,R=({resultado:s})=>{const{PRICE:n,HIGHDAY:a,LOWDAY:i,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=s;return r(M,{children:[e(D,{src:`https://cryptocompare.com/${t}`,alt:"Imagen criptomoneda"}),r("div",{children:[r(P,{children:["El precio es de: ",e("span",{children:n})]}),r(p,{children:["Precio mas alto del dia: ",e("span",{children:a})]}),r(p,{children:["Precio mas bajo del dia: ",e("span",{children:i})]}),r(p,{children:["Variacion ultimas 24 horas: ",e("span",{children:o})]}),r(p,{children:["Ultima actualizacion: ",e("span",{children:l})]})]})]})};const O=()=>r("div",{className:"sk-cube-grid",children:[e("div",{className:"sk-cube sk-cube1"}),e("div",{className:"sk-cube sk-cube2"}),e("div",{className:"sk-cube sk-cube3"}),e("div",{className:"sk-cube sk-cube4"}),e("div",{className:"sk-cube sk-cube5"}),e("div",{className:"sk-cube sk-cube6"}),e("div",{className:"sk-cube sk-cube7"}),e("div",{className:"sk-cube sk-cube8"}),e("div",{className:"sk-cube sk-cube9"})]}),U=c.div`
  max-width: 56.25rem;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,T=c.img`
  display: block;
  max-width: 25rem;
  width: 80%;
  margin: 6.25rem auto 0 auto;
`,$=c.h1`
  margin-top: 5ren;
  margin-bottom: 5rem;
  text-align: center;
  font-family: 'Lato', sans-serif;  
  font-size: 2.125rem;
  font-weight: 700;
  color: #FFF;

  &::after {
    content: '';
    display: block;
    width: 6.25rem;
    height: 0.375rem;
    margin: 0.625rem auto 0 auto;
    background-color: #66A2FE;
  }
`;function H(){const[s,n]=d.exports.useState({}),[a,i]=d.exports.useState({}),[o,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(s).length>0&&(t(!0),(async()=>{const{moneda:m,criptomoneda:u}=s;i({});const g=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${u}&tsyms=${m}`,b=await(await fetch(g)).json();i(b.DISPLAY[u][m]),t(!1)})())},[s]),r(U,{children:[e(T,{src:E,alt:"imagenes criptomonedas"}),r("div",{children:[e($,{children:"Cotiza Criptomonedas al Instante"}),e(z,{setMonedas:n}),o&&e(O,{}),a.PRICE&&e(R,{resultado:a})]})]})}S.render(e(w.StrictMode,{children:e(H,{})}),document.getElementById("root"));
