# ProgEksamensProjekt2021
Eksamensprojekt forår / sommer 2021. 
 - Fag: Programmering B.
 - Klasse: 3.r. 
 - Institution: Slotshaven Gymnasium.
 - Faglærer: Simon Ingemann Christensen (sic). 

Gruppe: 
 - Mads Edvardsen.
 - Ian Reenberg.
 - Asger Dokkedal.

Logbog: 

Ons. 17. Marts 2021:
I dag har vi skrevet projektbeskrivelse, hvor vi går i dybte med, hvad vi gerne vil arbejde med, og hvordan vores projekt skal udformes. Vi har skrevet en produktbeskrivelse, som beskriver alle de primære aspekter af spillet. Vi har sågar også skrevet arbejdsfordeling, hvor vi beskriver, hvordan gruppen vil arbejde under projektforløbet. Vi har videresendt vores projektbeskrivelse til Simon (slc) og forventer at have modtaget feedback til næste arbejdsdag, hvor vi kan igangsætte programmeringsfasen.

Ons. 24. Marts 2021:
Her gennemgik vi det feedback vi fik sidste gang. Vi har tilpasset vores projektbeskrivelse, så den passer med lærer Simons (slc) feedback. Vi er dermod gået fra ideen om en platformer, som låner elementer fra det gamle Nintendo-spil: "Super Mario Bros" til den originale arcade version af det traditionelle platformer. Så i stedet for baner er der en enkelt bane, hvor man skal samle så mange points som muligt uden at dø til forskellige enemies, der kommer osv. 

Fre. 26. Marts 2021: 
I dag har vi brainstormet over de forskellige aspekter i vores spil bl.a., om obstacles skal genereres tilfældigt, hver gang man refresher siden, eller om obstacles skal være forbestemte, og banen altid vil være ens. Vi besluttede, at vi gerne selv ville udvikle et layout til vores bane, så vi ikke skulle udvikle komplekse funktioner, som kunne aflæse de andre obstacles' placering samt kanterne af canvas. På denne måde kunne vi også specificere obstacles' udseende, så banen bliver præcis, som vi ønsker. Vi har også diskuteret andre aspekter som f.eks. det visuelle udtryk af vores spil f.eks. fjendernes udseende, points' udseende og spillerens udseende. 

Fre. 09. April 2021:
Her fandt vi nogle links, som vi kan bruge til, hvordan vi kan fremstille vores platform, tilføje coins og nogle andre ting som nok vil have fremtræden i vores spil. Disse links kan vi benytte til at inddrage inspiration fra eller løse problemer, som skulle opstå i vores kode. 

Tor. 16. April 2021:
Idag har vi fundet noget kilder til hvordan man eventuelt kunne lave permanente enemies i vores platformer spil. Før har vi lavet en kode til fremstilling af platforms til hvordan man tilsætter dem tilfældigt, men nu har vi fundet ud af hvordan vi sætter dem bestemt steder på banen. nu har vi dog et problem med spilleren da  spilleren lige nu er det en rød firkant, men vi har intentioner om at fikse det i fremtiden. Spilleren er nu også i stand til at bevæge sig horisontalt på banen, altså til siderne. Der er opstået et lille problem i koden, som vi ønsker skal være fikset snarest. Vores bevægelses-system består af eventListeners og keyListeners, så man kan bevæge sig rundt vha. tastaturet. Vi har også opstillet en række variabler, som tillader os at afgrænse spillerens maksimum fart, velocitet og friktion. 

Tirs. 04. Maj 2021:
I dag har vi lavet en række ændringer i samtlige scripts: Player.js, Canvas.js og Index.html. Vi har også implementeret et nyt script: Obstacles.js, hvis funktion er at angive de mål og forhold, som vores obstacles eller banestrukturer skal overholde. Selve obstacles skabes i Canvas.js. Vi har også foretaget ændringer til Player.js og har implementeret vertikalt player-movement, så spilleren nu kan bevæge sig opad og nedad. Dette vil sige, at spilleren kan bevæge sig opad i en hoppe-agtig formation og blive trukket ned af "gravity" eller tyngdekraft. I øjeblikket kan man hoppe uendeligt, men dette skal fikses snarligt. Næste gang vil vi gerne arbejde med movement colliders, så spilleren kan støde imod obstacles. I øjeblikket kan spilleren gå lige igennem obstacles, eftersom det blot er rektangler. Lige nu har vi designet et meget primitivt layout af obstacles, som i bund og grund bare skal fungere som testning. Vi vil senere arbejde med det planlagte layout. 
