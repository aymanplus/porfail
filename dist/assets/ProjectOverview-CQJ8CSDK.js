import{j as e,H as r,p as s}from"./index-C38shfGr.js";import{c as a}from"./router-DYyJE9GS.js";import{s as i}from"./ProjectDetailPage.module-D-R09C60.js";import"./vendor-BI3NJeJA.js";import"./icons-ChbOz9yf.js";const t=()=>{const{project:t}=a();return e.jsxs("div",{className:i.overviewContainer,children:[e.jsx("h2",{children:"مميزات التطبيق"}),e.jsx("div",{className:i.featuresGrid,children:t.features.map((r,s)=>e.jsxs("div",{className:i.featureCard,children:[e.jsx("div",{className:i.featureIcon,children:r.icon}),e.jsx("h3",{className:i.featureTitle,children:r.title}),e.jsx("p",{className:i.featureDescription,children:r.description})]},s))}),e.jsxs("div",{className:i.actionButtons,children:[t.googlePlayUrl&&e.jsxs("a",{href:t.googlePlayUrl,target:"_blank",rel:"noopener noreferrer",className:`${i.actionButton} ${i.playStore}`,children:[e.jsx(r,{}),e.jsx("span",{children:"متوفر على Google Play"})]}),t.githubLink&&e.jsxs("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer",className:`${i.actionButton} ${i.github}`,children:[e.jsx(s,{}),e.jsx("span",{children:"عرض الكود على GitHub"})]})]})]})};export{t as default};
