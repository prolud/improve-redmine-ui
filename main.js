// ==UserScript==
// @name Better Redmine UI
// @namespace Better Redmine UI
// @description Melhora a UI do Redmine
// @updateURL   https://raw.githubusercontent.com/prolud/improve-redmine-ui/refs/heads/main/main.js
// @downloadURL https://raw.githubusercontent.com/prolud/improve-redmine-ui/refs/heads/main/main.js
// @version 1.0.8
// @grant none
// ==/UserScript==

const darkModeStyle = `
  .issue {
    background-color: #333333 !important;
  }
  
  fieldset.preview {
    background-color: #333333 !important;
  }

  fieldset {
    border-color: #595959 !important;
    background: none !important;
    border-radius: 8px;
  }

  td.closed {
    background-color: #88E049 !important;
  }

  .todo {
    background-color: #777777 !important;
  }

  .journal {
    background-color: #333333 !important;
  }

  ul.details {
    color: #777777 !important;
  }

  #content, #main, .sidebar_closer, #sidebar {
    background: none !important;
    background-color: #222222 !important;
  }

  #relations {
    color: white !important;
  }

  p, h1, h2, h3, h4, div.label, div.value, .attributes, #checklist_items, legend, label, .td2-button__title {
    color: white !important;
  }

  select {
    background-color: #333333 !important;
    border-color: #595959 !important;
    color: white !important;
  }

  input, textarea, pre {
    background-color: #333333 !important;
    border-color: #595959 !important;
    color: white !important;
  }

  .box {
    background: none;
    background-color: none;
    border-color: #595959 !important;
  }

  #content, #main, .sidebar_closer, #sidebar {
    border: none !important;
  }
`

const adjustingSpacingStyle = `
#wrapper {
  padding: 0 !important;
}

img.gravatar {
  border: none !important;
  padding: 0 !important;
  min-height: 1.3125rem !important;
  min-width: 1.3125rem !important;
  border-radius: 2px !important;
}

#content {
  padding: 0 8rem !important;
}
`

const journalStyle = `
#history {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.journal {
  border-radius: 8px;
  padding: 1rem;

  h4 {
    display: flex;
    align-items: center;
    gap: .4rem;
  
    border: 0;
    padding: 0 !important;
    margin: 0 !important;

    .journal-link {
      display: none;
    }

    .gravatar {
      margin: 0;
    }
  }

  .wiki {
    padding-left: 1.5rem;
  }

  [id^="note-"] {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
  }
}

ul.details {
  margin: 0 !important;
}
`

const improvingIssueCard = `
.attributes {
  margin: 1.5rem 0 2.8rem !important;
}
select {
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #777777;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}
div.issue {
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  .gravatar {
    display: none;
  }

  .splitcontent {
    .splitcontentleft {
      width: unset;
    }
  
    display: flex;
    flex-direction: column;

    .field-description {
      border: none;
    }
  }

  .attribute {
    margin: .5rem 0;
    .label {
      width: unset;
      margin: 0 .4rem 0 0;
    }
    .percent {
      display: flex;
      align-items: center;
    }
    padding: 0;
    min-height: unset !important;

    display: flex;
    align-items: center;
  }
}

.progress {
  border-radius: 4px !important;
  overflow: hidden !important;
}
`

const improveButtons = `
.contextual{
  display: flex;
  align-itens: center;
  padding: 0;
  gap: 1rem;
}
.icon-edit {
  background: none;
  background-color: #0578BA;
  color: white !important;
  padding: .5rem;
  border-radius: 4px;
  text-decoration: none !important;
  
  &:hover {
    background-color:rgb(3, 95, 148);
  }
  transition: all .15s;
}
.icon-time-add {
  background: none;
  background-color:rgb(25, 196, 90);
  color: white !important;
  padding: .5rem;
  border-radius: 4px;
  text-decoration: none !important;
  
  &:hover {
    background-color:rgb(20, 161, 74);
  }
  transition: all .15s;
}
`

// const issuesStyle = `

// .progress {
//   border-radius: 4px !important;
//   overflow: hidden !important;
// }

// textarea {
//   padding: 1rem !important;
//   border-radius: 16px !important;
// }

// #main {
//   padding: 0 15rem;
// }

// .box {
//   border-radius: 16px !important;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// }
// .jstElements {
//   button {
//     background-color: #888888 !important;
//     cursor: pointer !important;
//   }
// }

// select {
//   max-width: unset !important;
//   width: 10rem !important;
// }
// `;

function removeContentStyle() {
  const itensToRemove = [
    ".sidebar_closer",
    ".cf_70",
    ".cf_35",
    ".cf_48",
    ".cf_47",
    ".cf_25",
    ".cf_28",
    ".cf_68",
    ".cf_69",
    ".cf_71",
    ".cf_61",
    ".cf_72",
    ".cf_16",
    ".cf_14",
    ".cf_40",
    ".cf_74",
    ".cf_78",
    ".cf_3",
    ".cf_5",
    ".start-date",
    ".due-date",
    ".priority",
    ".fixed-version",
    "#footer",
    ".icon-fav-off",
    ".icon-fav",
    ".icon-copy",
    ".next-prev-links"
  ];

  itensToRemove.forEach(elementClass => {
    const elementList = document.querySelectorAll(elementClass);
    if (elementList) {
      elementList.forEach(
        (element) => {
          element.remove();
        }
      )
    }
  });
}

if (document.URL.includes(".bellinatiperez.com.br/issues/")) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';

  styleElement.appendChild(document.createTextNode(darkModeStyle));
  styleElement.appendChild(document.createTextNode(adjustingSpacingStyle));
  styleElement.appendChild(document.createTextNode(journalStyle));
  styleElement.appendChild(document.createTextNode(improvingIssueCard));
  styleElement.appendChild(document.createTextNode(improveButtons));

  document.head.appendChild(styleElement);

  removeContentStyle()
}
