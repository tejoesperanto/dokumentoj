# Kontribuo al la projekto
Se vi volas proponi amendon al iu dokumento de TEJO, necesas ke Komitatano prezentu la proponon al la Komitato. Pro tio PRoj ne estas akceptitaj krom se temas pri jam dekomitate oficialigita amendo. PRoj al iloj kaj korektoj de malkongruoj inter dokumentoj en tiu ĉi deponejo kaj la aktuala versio laŭ la aprobo de la Komitato estos ĉiam bonvenaj.

- La dosierujo `/dok/` enhavas la dokumentojn de TEJO en la formato “CommonMark with Front Matter”. La dokumentoj rajtas uzi HTML laŭbezone, sed ĉio farebla en CommonMark estu farita en CommonMark. Oni nur rajtas uzi HTML uzebla ankaŭ en GitHub-flavored Markdown.

  La dokumentoj estu videblaj kaj kompreneblaj ankaŭ en la interreta fasado de GitHub, eĉ se tio ne estas la ĉefa celo de la dokumentoj. Escepto al tio ĉi estas la uzado de ordigitaj listoj: se la listo enhavas ajnan punkton aŭ subpunkton, kiu uzas ne-arabajn numeralojn, la listo estu farita per `<ol>` uzante la atributon `type` (legu ĉe [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#attr-type)).

- La dosierujo `/iloj/` enhavas ilojn uzatajn por faciligi, konverti k.s. la dokumentojn en `/dok/`. Ĉiuj iloj estu faritaj en programo uzebla per Linux, MacOS kaj Windows. Por tio ĉi bonas NodeJS kaj Python.

- La dosierujo `/gen/` enhavas generitajn versiojn de la dokumentoj fare de la iloj en `/iloj/`. Ĉiu ŝanĝo al ilo aŭ dokumento kiu ŝanĝas la generitan dosieron devas ĝisdatigi ankaŭ la koncernajn dosierojn en `/gen/`.

- La indekso, `/INDEKSO.md`, enhavas superrigardon de la oficialaj ŝanĝoj de dokumentoj inter iliaj versioj. Ŝanĝoj faritaj pro

  1. malkongruo inter la dokumento en tiu ĉi deponejo kaj la oficala versio; aŭ
  2. plibonigo de koda strukturo; aŭ
  3. ajna alia ŝanĝo ne farita de la Komitato,

  *ne* estu aldonitaj al tiu ĉi dokumento.

  La indekso enhavas ligilojn al GitHub per kiuj eblas kompari la versiojn. Pro tio ne eblas ĝisdatigi la indekson ĝis la koncerna PR estas akceptita. Tial administranto de la projekto ĉiam respondecas pri ĝisdatigo de la indekso post akcepto de iu PR, kiu postulas ĝisdatigon de la indekso.
