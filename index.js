// E-maily
// to dáš
// Vytvoříme jednoduchou aplikaci, která zobrazuje obsah e-mailové schránky.

// Vytvořte si repozitář ze šablony cviceni-emaily aplikace pro práci s e-maily.
// Prohlédněte si dokumentaci k e-mailovému API. V prohlížeči si vyzkoušejte, jak API funguje.
// Podívejte se, jak se v HTML vytváří jeden e-mail.
// Smažte v HTML obsah elementu #inbox. Zobrazte na stránce e-maily stažené z API. Tělo e-mailu nechte prozatím prázdné.

// E-maily, složky
// zapni hlavu
// V naší e-mailové aplikaci zobrazíme dvě oddělené sekce: přečtené zprávy a nepřečtené zprávy.

// V HTML stránce vytvořte dvě sekce. Jedna bude sloužit k zobrazení přečtené a druhá nepřečtené pošty.
// Naplňte každou sekci přislušnými zprávami načtenými z API.
// Zařiďte, aby se u přečtených e-mailů zobrazovala ikonka otevřené obálky (viz CSS třída email__icon--opened).

const naplnElementEmailNeprectene = (items)=> {
    const elementEmailNeprectene = document.querySelector('#neprectene');
    const emaily = items.map( (polozka) =>{
        return`
    <div class="email">
        <div class="email__head">
          <button class="email__icon email__icon--closed"></button>
          <div class="email__info">
            <div class="email__sender">${polozka.sender.name}</div>
            <div class="email__subject">${polozka.subject}</div>
          </div>
          <div class="email__time">${polozka.time}</div>
        </div>
        <div class="email__body"></div>
      </div>

    `})
    .join('');
   elementEmailNeprectene.innerHTML = emaily;
  }  

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response)=>response.json())
    .then((data)=>{
        naplnElementEmailNeprectene(data.emails)        
      })


      const naplnElementEmailPrectene = (items)=> {
        const elementEmailPrectene = document.querySelector('#prectene');
        const emaily = items.map( (polozka) =>{
            return`
        <div class="email">
            <div class="email__head">
              <button class="email__icon email__icon--opened"></button>
              <div class="email__info">
                <div class="email__sender">${polozka.sender.name}</div>
                <div class="email__subject">${polozka.subject}</div>
              </div>
              <div class="email__time">${polozka.time}</div>
            </div>
            <div class="email__body"></div>
          </div>
    
        `})
        .join('');
       elementEmailPrectene.innerHTML = emaily;
      }  
    
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
        .then((response)=>response.json())
        .then((data)=>{
            naplnElementEmailPrectene(data.emails)        
          })

  