// ==UserScript==
// @name Better Redmine UI
// @namespace Better Redmine UI
// @description Melhora a UI do Redmine
// @updateURL   https://raw.githubusercontent.com/prolud/improve-redmine-ui/refs/heads/main/main.js
// @downloadURL https://raw.githubusercontent.com/prolud/improve-redmine-ui/refs/heads/main/main.js
// @version 1.0.0
// @grant none
// ==/UserScript==

const issuesStyle = `
* {
    box-sizing: border-box !important;
}
.issue {
    background-color: #333333 !important;
    border-radius: 16px !important;
}
.progress {
    border-radius: 5px !important;
    overflow: hidden !important;
}
td.closed {
    background-color: #88E049 !important;
}
.todo {
    background-color: #777777 !important;
}
.gravatar {
    border-radius: 16px !important;
}
select,
input,
textarea {
    border-radius: 6px !important;
}
textarea {
    padding: 1rem !important;
}
#history {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.journal {
    background-color: #333333 !important;
    border-radius: 16px;
    padding: .8rem;
}
ul.details {
    color: #777777 !important;
    margin: 0 !important;
}
#content, #main, .sidebar_closer, #sidebar {
  background-color: #222222;
  border: none !important;
}
p, h1, h2, h3, h4, div.label, div.value, .attributes, #checklist_items {
  color: white !important;
}
#footer {
  display: none;
}
#wrapper {
  padding: 0 !important;
}
.sidebar_closer {
  background-color: #3D454C !important;
}

.box {
  background: none;
  background-color: none;
}
`;

if (document.URL.includes(".bellinatiperez.com.br/issues/")) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(issuesStyle));
  document.head.appendChild(styleElement);
}
