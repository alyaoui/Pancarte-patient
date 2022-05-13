/* /////////////////////////////table survaillance/////////////////////*/
/*  Start To do table */
let closeSer = document.querySelector(".close_survaillance");
let survaillance = document.querySelector(".survaillance");
let plusSer = document.querySelector(".plus_survaillance");
let annulerSer = document.querySelector(".annuler_ser");
let observaSer = document.querySelector(".obs_Ser");
let tdListSurv = document.querySelector(".td_servaillance_list");
let annulerPlanification = document.querySelector(".annuler_planific");
let SupprimerValeurP = document.querySelector(".supprimer_valeurP");
//the variables of to do task
let myInputSurvaillance = document.querySelector(".input_survaillance");
let rowsOftableSur = document.querySelector(".taskServ");

let validerSer = document.querySelector(".valider_ser");
let supprimerTraitement = document.querySelector(".supprimer_traitement");

/* start survaillance*/

plusSer.onclick = function () {
  survaillance.style.display = "flex";
  myInputSurvaillance.focus();
};
closeSer.onclick = function () {
  survaillance.style.display = "none";
};
annulerSer.onclick = function () {
  survaillance.style.display = "none";
};
/* End survaillance*/
/* start option right*/
let closeR = document.querySelector(".close_option");
let optionR = document.querySelector(".option_right");
let fermer = document.querySelector(".fermer");
closeR.onclick = function () {
  optionR.style.display = "none";
};
fermer.onclick = function () {
  optionR.style.display = "none";
};
/* End option right*/
/* start valeur mesurée*/
let mesuredSurv = document.querySelector(".mesured_survaillance ");
let closeMesure = document.querySelector(".close_mesured ");
let inputMesure = document.querySelector(".input_mesur ");
let validMesure = document.querySelector(".valider_mesur ");
let annulerMesure = document.querySelector(".annuler_mesur ");
closeMesure.addEventListener("click", function () {
  mesuredSurv.style.display = "none";
});
annulerMesure.addEventListener("click", function () {
  mesuredSurv.style.display = "none";
});
/* End valeur mesurée*/

// add  task to table
validerSer.onclick = function () {
  if (myInputSurvaillance.value !== "") {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let mypara = document.createElement("p");
    mypara.className = "myParagraphe";
    mypara.style.cssText = "font-size: 10px;color: red";
    if (observaSer.value !== "") {
      mypara.appendChild(document.createTextNode(`Note: ${observaSer.value}`));
    } else {
      mypara.appendChild(document.createTextNode(``));
    }
    td.appendChild(document.createTextNode(myInputSurvaillance.value));
    td.appendChild(mypara);
    tr.appendChild(td);
    for (let i = 0; i < 24; i++) {
      let tdtab = document.createElement("td");
      tdtab.className = "td_servaillance_list";
      tr.appendChild(tdtab);
    }
    tr.className = "tr_class";
    tr.appendChild(document.createTextNode(""));
    rowsOftableSur.appendChild(tr);
    myInputSurvaillance.value = ""; //empty input fieled
    observaSer.value = "";
    survaillance.style.display = "none";
  }
};

// function plannig
document.addEventListener("dblclick", function (ev) {
  if (ev.target.className == "td_servaillance_list") {
    ev.target.style.cssText = "background-color: #536372";
    if ((ev.target.style.cssText = "background-color: #536372")) {
      //function annuler plannification
      annulerPlanification.onclick = function () {
        ev.target.style.removeProperty("background-color");
        optionR.style.display = "none";
      };
      //function menu mesure
      ev.target.ondblclick = function () {
        mesuredSurv.style.display = "flex";
        inputMesure.focus();
        //function valider mesure of planning
        validMesure.onclick = function () {
          if (inputMesure.value !== ""){
          ev.target.innerHTML = `${inputMesure.value}`;
          ev.target.style.cssText =
            "color:red; font-weight:bold; font-size:17px";
          ev.target.style.removeProperty("background-color");
          mesuredSurv.style.display = "none";
          inputMesure.value = "";
        };
      }
      };
    }
  }
});
document.addEventListener("contextmenu", function (e) {
  "use strict";
  e.preventDefault();
  optionR.style.top = e.offsetX + "px";
  optionR.style.top = e.offsetY + "px";
  if (e.target.className == "td_servaillance_list") {
    //  console.log(e.target.className == "td_servaillance_list")
    optionR.style.display = "flex";
    supprimerTraitement.onclick = function () {
      e.target.parentNode.remove();
      optionR.style.display = "none";
    };
    SupprimerValeurP.onclick = function () {
      e.target.innerHTML = ``;
      optionR.style.display = "none";
    };
  }
});
/*  End To do table survaillance */

/* /////////////////////////////table Entrée/////////////////////*/

/*  Start To do table Entrée */
let closeEntrée = document.querySelector(".close_Entrée");
let entrée = document.querySelector(".entrée");
let plusEntrée = document.querySelector(".plus_Entrée");
let annulerEntée = document.querySelector(".annuler_Entrées");
let observaEntrée = document.querySelector(".obs_Entrée");
//the variables of to do task
let myInputEntrée = document.querySelector(".input_Entrées");
let validerEntrée = document.querySelector(".valider_Entrées");
/* start entrée*/

plusEntrée.onclick = function () {
  entrée.style.display = "flex";
};
closeEntrée.onclick = function () {
  entrée.style.display = "none";
};
annulerEntée.onclick = function () {
  entrée.style.display = "none";
};
/* End entrée*/
// add  task to table

let rowsOftableEntrée = document.querySelector(".taskEntrée");

validerEntrée.onclick = function () {
  if (myInputEntrée.value !== "") {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let mypara = document.createElement("p");
    mypara.className = "myParagraphe";
    mypara.style.cssText = "font-size: 10px;color: red";
    if (observaEntrée.value !== "") {
      mypara.appendChild(
        document.createTextNode(`Note: ${observaEntrée.value}`)
      );
    } else {
      mypara.appendChild(document.createTextNode(``));
    }
    td.appendChild(document.createTextNode(myInputEntrée.value));
    td.appendChild(mypara);
    tr.appendChild(td);
    for (let i = 0; i < 24; i++) {
      let tdtab = document.createElement("td");
      tdtab.className = "td_servaillance_list";
      tr.appendChild(tdtab);
    }
    tr.className = "tr_class";
    tr.appendChild(document.createTextNode(""));
    rowsOftableEntrée.appendChild(tr);
    myInputEntrée.value = ""; //empty input fieled
    observaEntrée.value = "";
    entrée.style.display = "none";
  }
};
/*  End To do table Entrée */
/* /////////////////////////////table Sortie/////////////////////*/

/*  Start To do table Entrée */
let closeSortie = document.querySelector(".close_sortie");
let sortie = document.querySelector(".sortie");
let plusSortie = document.querySelector(".plus_sorties");
let annulerSortie = document.querySelector(".annuler_sorties");
let observaSortie = document.querySelector(".obs_sorties");
//the variables of to do task
let myInputSortie = document.querySelector(".input_sorties");
let validerSortie = document.querySelector(".valider_sorties");
/* start sortie*/

plusSortie.onclick = function () {
  sortie.style.display = "flex";
};
closeSortie.onclick = function () {
  sortie.style.display = "none";
};
annulerSortie.onclick = function () {
  sortie.style.display = "none";
};
/* End sortie*/
// add  task to table

let rowsOftablesortie = document.querySelector(".taskSorties");

validerSortie.onclick = function () {
  if (myInputSortie.value !== "") {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let mypara = document.createElement("p");
    mypara.className = "myParagraphe";

    mypara.style.cssText = "font-size: 10px;color: red";
    if (observaSortie.value !== "") {
      mypara.appendChild(
        document.createTextNode(`Note: ${observaSortie.value}`)
      );
    } else {
      mypara.appendChild(document.createTextNode(``));
    }
    td.appendChild(document.createTextNode(myInputSortie.value));
    td.appendChild(mypara);
    tr.appendChild(td);
    for (let i = 0; i < 24; i++) {
      let tdtab = document.createElement("td");
      tdtab.className = "td_servaillance_list";
      tr.appendChild(tdtab);
    }
    tr.className = "tr_class";
    tr.appendChild(document.createTextNode(""));
    rowsOftablesortie.appendChild(tr);
    myInputSortie.value = ""; //empty input fieled
    observaSortie.value = "";
    sortie.style.display = "none";
  }
};
/*  End To do table sortie */
/* /////////////////////////////table Aérosol/////////////////////*/

/*  Start To do table Aérosol */
let closeAérosol = document.querySelector(".close_Aérosol");
let Aérosol = document.querySelector(".Aérosol");
let plusAérosol = document.querySelector(".plus_Aérosol");
let annulerAérosol = document.querySelector(".annuler_Aérosol");
let observaAérosol = document.querySelector(".obs_Aérosol");
//the variables of to do task
let myInputAérosol = document.querySelector(".input_Aérosol");
let validerAérosol = document.querySelector(".valider_Aérosol");
/* start sortie*/

plusAérosol.onclick = function () {
  Aérosol.style.display = "flex";
};
closeAérosol.onclick = function () {
  Aérosol.style.display = "none";
};
annulerAérosol.onclick = function () {
  Aérosol.style.display = "none";
};
/* End sortie*/
// add  task to table

let rowsOftableAérosol = document.querySelector(".taskAérosol");

validerAérosol.onclick = function () {
  if (myInputAérosol.value !== "") {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let mypara = document.createElement("p");
    mypara.className = "myParagraphe";

    mypara.style.cssText = "font-size: 10px;color: red";
    if (observaAérosol.value !== "") {
      mypara.appendChild(
        document.createTextNode(`Note: ${observaAérosol.value}`)
      );
    } else {
      mypara.appendChild(document.createTextNode(``));
    }
    td.appendChild(document.createTextNode(myInputAérosol.value));
    td.appendChild(mypara);
    tr.appendChild(td);
    for (let i = 0; i < 24; i++) {
      let tdtab = document.createElement("td");
      tdtab.className = "td_servaillance_list";
      tr.appendChild(tdtab);
    }
    tr.className = "tr_class";
    tr.appendChild(document.createTextNode(""));
    rowsOftableAérosol.appendChild(tr);
    myInputAérosol.value = ""; //empty input fieled
    observaAérosol.value = "";
    Aérosol.style.display = "none";
  }
};
/*  End To do table Aérosol */
/* /////////////////////////////table Traitement/////////////////////*/

/*  Start To do table Traitement */
let closeTraitement = document.querySelector(".close_Traitement");
let Traitement = document.querySelector(".Traitement");
let plusTraitement = document.querySelector(".plus_Traitement");
let annulerTraitement = document.querySelector(".annuler_Traitement");
let observaTraitement = document.querySelector(".obs_Traitement");
//the variables of to do task
let myInputTraitement = document.querySelector(".input_Traitement");
let validerTraitement = document.querySelector(".valider_Traitement");
/* start sortie*/

plusTraitement.onclick = function () {
  Traitement.style.display = "flex";
};
closeTraitement.onclick = function () {
  Traitement.style.display = "none";
};
annulerTraitement.onclick = function () {
  Traitement.style.display = "none";
};
/* End sortie*/
// add  task to table

let rowsOftableTraitement = document.querySelector(".taskTraitement");

validerTraitement.onclick = function () {
  if (myInputTraitement.value !== "") {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let mypara = document.createElement("p");
    mypara.className = "myParagraphe";

    mypara.style.cssText = "font-size: 10px;color: red";
    if (observaTraitement.value !== "") {
      mypara.appendChild(
        document.createTextNode(`Note: ${observaTraitement.value}`)
      );
    } else {
      mypara.appendChild(document.createTextNode(``));
    }
    td.appendChild(document.createTextNode(myInputTraitement.value));
    td.appendChild(mypara);
    tr.appendChild(td);
    for (let i = 0; i < 24; i++) {
      let tdtab = document.createElement("td");
      tdtab.className = "td_servaillance_list";
      tr.appendChild(tdtab);
    }
    tr.className = "tr_class";
    tr.appendChild(document.createTextNode(""));
    rowsOftableTraitement.appendChild(tr);
    myInputTraitement.value = ""; //empty input fieled
    observaTraitement.value = "";
    Traitement.style.display = "none";
  }
};
/*  End To do table Traitement */

/* /////////////////////////////table Régime/////////////////////*/

/*  Start To do table Régime */
let closeRégime = document.querySelector(".close_Régime");
let Régime = document.querySelector(".Régime");
let plusRégime = document.querySelector(".plus_Régime");
let annulerRégime = document.querySelector(".annuler_Régime");
let observaRégime = document.querySelector(".obs_Régime");
//the variables of to do task
let myInputRégime = document.querySelector(".input_Régime");
let myInputRepas = document.querySelector(".input_repas");
let validerRégime = document.querySelector(".valider_Régime");
/* start sortie*/

plusRégime.onclick = function () {
  Régime.style.display = "flex";
};
closeRégime.onclick = function () {
  Régime.style.display = "none";
};
annulerRégime.onclick = function () {
  Régime.style.display = "none";
};
/* End sortie*/
// add  task to table

let rowsOftableRégime = document.querySelector(".taskRégime");

validerRégime.onclick = function () {
  if (myInputRégime.value !== "") {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let mypara = document.createElement("p");
    mypara.className = "myParagraphe";

    mypara.style.cssText = "font-size: 12px;color: red";
    if (observaRégime.value !== "") {
      mypara.appendChild(
        document.createTextNode(`Note: ${observaRégime.value}`)
      );
    } else {
      mypara.appendChild(document.createTextNode(``));
    }
    td.appendChild(document.createTextNode(`${myInputRepas.value}: `));
    td.appendChild(document.createTextNode(`${myInputRégime.value}`));
    td.className = "tdofRegime";
    td.appendChild(mypara);
    tr.appendChild(td);
    tr.className = "tr_regim";
    tr.style.cssText="font-size:15px; font-weight:600; padding-left:15px";
    tr.appendChild(document.createTextNode(""));
    rowsOftableRégime.appendChild(tr);
    myInputRégime.value = ""; //empty input fieled
    observaRégime.value = "";
    myInputRepas.value = "";
    Régime.style.display = "none";
  }
};

/* start option right regime*/
let closeRegime = document.querySelector(".close_optionRegime");
let optionRegime = document.querySelector(".option_Regime");
let fermerRegim = document.querySelector(".fermerR");
closeRegime.onclick = function () {
  optionRegime.style.display = "none";
};
fermerRegim.onclick = function () {
  optionRegime.style.display = "none";
};

let supprimerRegime = document.querySelector(".supprimer_regime");
document.addEventListener("click", function (e) {
  if (e.target.className == "tdofRegime") {
     console.log(e.target.className == "tdofRegime")
    optionRegime.style.display = "flex";
    supprimerRegime.onclick = function () {
      e.target.parentNode.remove();
      optionRegime.style.display = "none";
    };
  }
});

/* End option right Régime*/
/*  End To do table Régime */

/* start scroll-to-top*/
let btn = document.querySelector(".scroll-to-top");
window.onscroll = function () {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
/* End scroll-to-top*/
