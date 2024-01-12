function changeContentToContact() {
    const url = window.location.href
    window.location.href =
        url.indexOf("#") === -1 ? `${url}#kapcsolat` : `${url.substring(0, url.indexOf("#"))}#kapcsolat`;
    
    document.getElementById("page").innerHTML = `
    <h1>Kapcsolat</h1>
    <div class="content">
    <p>A munkánk jellege miatt e-mailen tud bejelentkezni, mivel a foglalkozások közben nem tudjuk
    felvenni a telefont. Kérjük fogalmazza meg röviden a megkeresés okát, írja meg telefonszámát a
    további egyeztetés céljából!</p>
    <p>E-mail: <a href="mailto:bontakozomuhely@gmail.com">bontakozomuhely@gmail.com</a></p>
    <h2>Helyszíneink</h2>
    <p>A mozgás fókuszú ellátás a BodyMind Studióban történik (3300 Ráchegy Eger, Rácliget utca 1.)</p>
    <!-- iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.937421725834!2d20.3680861!3d47.8988965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d9e221f1469%3A0x99ceebbe0b3a8d90!2zRWdlciwgVMO2cnbDqW55aMOheiB1LiAxNywgMzMwMA!5e0!3m2!1sen!2shu!4v1693935145129!5m2!1sen!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe -->
    <p><br/><br/>A szülőkonzultációk és nem mozgás alapú képességfelmérések helyszíne pedig a Lollok Ház (3300 Eger, Sas utca 5-7.)</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.434256257855!2d20.38145211285984!3d47.88927966829329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d7c4e9ea04b%3A0xc7bc4379eae9099e!2sEger%2C%20Sas%20u.%205%2C%203300!5e0!3m2!1sen!2shu!4v1693935373088!5m2!1sen!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p><br/><br/>A találkozáshoz előzetes egyeztetés szükséges mely során a kereteket megbeszéljük (idő, hely, ár).</p>
    <img src="img/img02.jpg" style="width: 100%;">
    </div>
    `
}
 
 function changeContentToGoodToKnow() {
    const url = window.location.href
    window.location.href =
        url.indexOf("#") === -1 ? `${url}#t` : `${url.substring(0, url.indexOf("#"))}#t`;

    document.getElementById("page").innerHTML = `
    <h1>Tudnivalók</h1>

    <div class="page-agenda">
        <a href="#t_1">&#9656; Hogyan történik a bejelentkezés?</a>
        <a href="#t_2">&#9656; Az ellátás időbeli keretei</a>
        <a href="#t_3">&#9656; Mi a szülő szerepe a közös munkafolyamatban?</a>
        <a href="#t_4">&#9656; Áraink</a>
    </div>
    <hr/>

    <div class="content">
    <h3 id="t_1">Hogyan történik a bejelentkezés?</h3>
    <p>A bejelentkezés emailben történik, mivel a munkánk jellege miatt, napközben nem tudjuk felvenni a
    telefont. Kérjük, fogalmazzák meg néhány mondatban a megkeresés okát, és írják meg telefonos
    elérhetőségüket is, hogy a további egyeztetés céljából kereshessük Önöket!</p>
    <p>email: bontakozomuhely@gmail.com</p>
    <h3 id="t_2">Az ellátás időbeli keretei</h3>
    <p>Gyakran felmerül a kérdés, hogy meddig szükséges a gyermek részvétele a munkafolyamatban? Erre
    sajnos nem tudunk a gyermek és családja megismerése nélkül választ adni. Az előrehaladás mértékét
    a személyes adottságok, a részvételi lehetőség gyakorisága és az egyéni életmód jellemzői is
    befolyásolják.</p><p>A DSZIT esetén a szemlélet nondirektivitása, illetve komplex volta miatt általában egy tanévet
    szoktunk javasolni kezdésképpen.</p>
    <p>A szülővel történő első találkozásokat, illetve a gyermek megismerését követően javaslatot teszünk a
    gyerek ellátására, amennyiben a javaslat a csoportban való részvétel, ez heti egy, állandó időpontban
    szervezett 45 perces foglalkozást jelent.</p>
    
    <h3 id="t_3">Mi a szülő szerepe a közös munkafolyamatban?</h3>
    <img src="img/img03.jpg" style="width: 100%;">
    <p>Az eredményes közös munkában a szülő elkötelezettsége fontos tényező. A családokkal a
    rendszerszemlélet jegyében dolgozunk. A gyermek tünete nem független a környezetétől. A
    viselkedési minták megértéséhez, az egészséges és hatékonyabb működésmód megtalálásához meg
    kell ismernünk a szülő tapasztalatait, elképzeléseit, érzéseit, a gyermek és család fejlődéstörténetét.
    Azon dolgozunk, hogy az elfogadó légkörben a szülők a bizalmukba tudjanak avatni minket, mert a
    szakmai tudásunk nem hasznosítható, nem általános érvényű önmagában, nem tudunk sajnos kész
    receptet nyújtani. Azonban a kölcsönösen aktív részvételünk sikeressé teheti az együttműködést.
    Hisszük, hogy több szem többet lát, örömünkre szolgál, ha mindkét szülő be tud kapcsolódni a közös
    munkába.</p>
    <p>A csoportjainkba járó gyermekek szüleivel minimum félévente egy alkalommal szülőkonzultáció keretében
    osztjuk meg a tapasztalatainkat egymással. Természetesen a szülők igénye alapján, illetve
    amennyiben a szakmai szempontok indokolttá teszik, lehetőség van további konzultációs időpontot
    egyeztetni.</p>
    <h3 id="t_4">Áraink</h3>
    <table>
    <tr>
    <th>Óratípusa</th><th>Hossza</th><th>Árak/alkalom</th>
    </tr>
    <tr>
    <td>Anamnézis, kezdő szülőkonzultáció</td><td>90 perc</td><td>20000 Ft</td>
    </tr>
    <tr>
    <td>Csoportos óra (4-5 fő)</td><td>45 perc</td><td>7000 Ft/fő</td>
    </tr>
    <tr>
    <td>Egyéni óra</td><td>45 perc</td><td>13000 Ft</td>
    </tr>
    <tr>
    <td>Szülőkonzultáció/tanácsadás</td><td>60 perc</td><td>15000 Ft</td>
    </tr>
    <tr>
    <td>Szülőkonzultáció/tanácsadás</td><td>90 perc</td><td>20000 Ft</td>
    </tr>
    <tr>
    <td>SEED Fejlődési Skála, konzultáció</td><td>120 perc</td><td>25000 Ft</td>
    </tr>
    <tr>
    <td>Iskolaérettségi vizsgálat</td><td>120 perc</td><td>20000 Ft</td>
    </tr>
    <tr>
    <td>Mozgásfejlettség szűrővizsgálat, konzultáció</td><td>90 perc</td><td>20000 Ft</td>
    </tr>
    <tr>
    <td>Évközi szakvélemény a szülő kérésére</td><td>&nbsp;</td><td>6000 Ft</td>
    </tr>
    </table>
    <p>Írásos véleményt csak a képességmérések (SEED Fejlődési Skála, Iskolaérettségi vizsgálat,
    Mozgásfejlettség szűrővizsgálat) után kapnak a szülők, a gyermekkel történő egyszeri találkozást
    követően.</p>
    <p>Ezen kívül a szülő kérhet a gyermek fejlődéséről, állapotáról szakvéleményt, ezt azonban csak a
    gyermekkel történő több alkalmas találkozást követően tudjuk szakmai szempontból felelősen
    kiállítani (a gyermek oldódásától, működésétől függően 2-4 alkalom).</p>
    </div>
    `
 }

function changeContentToIntroduction() {
    const url = window.location.href
    window.location.href =
        url.indexOf("#") === -1 ? `${url}#intro` : `${url.substring(0, url.indexOf("#"))}#intro`;
    
    const defaultContent =document.getElementById("page").innerHTML
    
    document.getElementById("page").innerHTML = `${defaultContent}
    
    `
}

function changeContentToTurnToUs() {
    const url = window.location.href
    window.location.href =
        url.indexOf("#") === -1 ? `${url}#mfh` : `${url.substring(0, url.indexOf("#"))}#mfh`;

    document.getElementById("page").innerHTML = `
    <h1>Mivel fordulhatnak hozzánk?</h1>
    
    <div class="page-agenda">
    <a href="#mfh_1">&#9656; Milyen nehézségekkel kereshetnek bennünket?</a>
    <a href="#mfh_2">&#9656; Amit nem tudunk vállalni!</a>
    </div>
    <hr/>

    <div class="content">
    <h3 id="mfh_1">Milyen nehézségekkel kereshetnek bennünket?</h3>
    <ul>
    <li>Tanulási/ magatartási/ beilleszkedési nehézség esetén
    <li>Szorongásos panaszok esetén</li>
    <li>Szomatikus panaszok esetén</li>
    <li>Amikor az iskolaérettség kérdéses, illetve éretlenség miatt javasolt a további óvodai nevelés</li>
    <li>Tic megjelenésekor</li>
    <li>Figyelemzavar gyanújával</li>
    <li>Hiperaktivitás/ ADHD gyanújával</li>
    <li>Ha gyermeküknek mozgásfejlesztést javasoltak</li>
    <li>Kiegészítő ellátásként Autizmus spektrumzavar esetén</li>
    <li>Szelektív mutizmus esetén</li>
    <li>Ha kérdéseik vannak gyermekük nevelését illetően</li>
    <li>Ha kérdéseik vannak gyermekük fejlődése tekintetében (mozgásfejlettség, kognitív képességek
    fejlődése-6 éves korig)</li>
    </ul>
    <h3 id="mfh_2">Amit nem tudunk vállalni</h3>
    <img src="img/img05.jpg" style="width: 100%;">
    <p>
    Vállalunk képességfelmérést, teszünk javaslatot, és véleményt is írunk a szülő kérésére (pl.:
    iskolaérettségi vizsgálat), melyet a belátásuk szerint használhatnak. Továbbá kölcsönös igény esetén
    vállalunk konzultálást a gyermek pedagógusaival. <b>Azonban a szakmai javaslataink a nevelési-
    oktatási intézmények számára nem kötelező jellegűek.</b></p>
    <p><b>Nem diagnosztizálunk (és gyógyszert sem tudunk felírni)</b>, ehelyett, amennyiben diagnosztizálásra
    van szükség, igyekszünk a szülőt informálni, gyermeke érdekében a megfelelő ellátás
    megtalálásában támogatni.</p>
    <p>A gyermeküket külön nevelő szülők esetében a közös megállapodás alapján, és a szakmai
    szempontok szerint vállalunk egyéni/ illetve közös konzultációt is. <b>Azonban gyermekelhelyezési
    per esetén nem tudunk állást foglalni egyik fél pártján sem. Ilyen célú megkeresésnek nem
    tudunk eleget tenni, a közös munkára nincs lehetőség.</b></p></div>
    `
}

function changeContentToAbility() {
    const url = window.location.href
    window.location.href =
        url.indexOf("#") === -1 ? `${url}#kf` : `${url.substring(0, url.indexOf("#"))}#kf`;
    
    document.getElementById("page").innerHTML = `
    <h1>Képességfelmérések</h1>

    <div class="page-agenda">
        <a href="#kf_1">&#9656; SEED Fejlődési Skála (0-4 év)</a>
        <a href="#kf_2">&#9656; Iskolaérettségi vizsgálat (5-6 év)</a>
    </div>
    <hr/>

    <div class="content">
    <h3 id="kf_1">SEED Fejlődési Skála (0-4 év)</h3>
    <p>A SEED Fejlődési Skála hét terület (Finommozgás, Nagymozgás, Szociális- érzelmi terület,
    Adaptív- gondolkodói terület, Beszéd és nyelv (expresszív és receptív nyelvi funkció),
    Táplálkozás, Öltözködés- tisztálkodás) felmérésével ad információt a gyermek erősségeiről,
    gyengeségeiről, életkori követelményekhez mért érettség szintjéről, illetve képesség
    struktúrájáról.</p>
    <p>Eszközkészlete kifejezetten gazdag, de többnyire olyan típusú játékokat, tárgyakat tartalmaz,
    amivel egy viszonylag „jól felszerelt” gyerekszoba is rendelkezik (pl.: labda, csörgő, fakocka,
    gyöngy, dobozok, képeskönyv, puzzle, stb…). A vizsgálat folyamán felkínáljuk (életkorától
    függő, hogy mit és hogyan) az eszközöket, és megfigyeléseket végzünk azzal kapcsolatban,
    ahogy a gyermek reagál ezekre, illetve ahogy manipulálni kezd ezekkel. A vizsgálat a szülő
    jelenlétében történik, ő is kiegészítheti tapasztalataival a látott képet. Jelenlétükben a
    gyermekek könnyebben oldódnak az esetleges kezdeti szorongásból, a szülő támogathatja a
    gyermek részvételét.</p>

    <h3 id="kf_2">Iskolaérettségi vizsgálat (5-6 év)</h3>
    <img src="img/img04.jpg" style="width: 100%" />
    <p>A hatéves kori kötelező beiskolázás elbizonytalanító lehet sok szülő számára. Mi szükséges
    ahhoz, hogy egy gyermek magabiztosan kezdhesse meg iskolai tanulmányait?</p>
    <p>A megfelelő érettségnek testi-, lelki és kognitív tényezői egyaránt vannak. Így vizsgálatunk is
    komplex, mely során megfigyeljük a gyermek testi, mozgásbeli-, kognitív-, és szociális,
    érzelmi fejlettségét is. Természetesen ezek nem függetlenek egymástól.</p>
    <p>Tapasztalatainkat szóbeli konzultáció és írásos vélemény formájában osztjuk meg a szülővel,
    ha szükséges az érést támogató javaslatot teszünk.</p>
    <p>Szeretnénk felhívni a szülők figyelmét, hogy szakvéleményünk az oktatási rendszerben
    szabadon felhasználható, azonban abban megfogalmazott javaslataink kötelező érvénnyel
    nem bírnak az oktatási rendszerben! Az iskolába lépés megkezdésének halasztását a szülőnek
    az <a href="https://ohtan.oh.gov.hu/" target="_blank">Oktatási Hivatalnál</a> szükséges kezdeményeznie, általában az adott év január közepéig van
    erre lehetőség.</p></div>`
}

function changeContentToDSZIT() {
    const url = window.location.href
    window.location.href =
        url.indexOf("#") === -1 ? `${url}#dszit` : `${url.substring(0, url.indexOf("#"))}#dszit`;

    document.getElementById("page").innerHTML = `
    <h1>DSZIT szemléletű foglalkozás</h1>
    <div class="page-agenda">
        <a href="#dszit_1">&#9656; Mi az az idegrendszeri éretlenség?</a>
        <a href="#dszit_2">&#9656; Mit jelent a dinamikus szenzoros integrációs terápiás szemlélet?</a>
        <a href="#dszit_3">&#9656; Ki lehet érintett?</a>
        <a href="#dszit_4">&#9656; Csoportos vagy egyéni ellátás?</a>
        <a class="sub-agenda" href="#dszit_41">&#9656; Miért igyekszünk zárt csoportokkal dolgozni?</a>
        <a class="sub-agenda" href="#dszit_42">&#9656; Mitől függ, hogy egyéni vagy csoportos ellátást javaslunk?</a>
        <a class="sub-agenda" href="#dszit_43">&#9656; Ez csak játék?!</a>
    </div>
    <hr/>

    <div class="content">
    <h3 id="dszit_1">Mi az az idegrendszeri éretlenség?</h3>
    
    <p>Az idegrendszerünk komplex, a teljes emberi működést sokféleképpen meghatározó tényező,
    összetettségét nehéz is igazán átlátni laikusként. A fejlődését azonban nyomon tudjuk
    követni azoknak a területeknek a fejlődésén keresztül, melyeket szabályoz. Így a mozgás-,
    érzékelés rendszereinek működése, illetve ezek összehangoltságának mértéke segíthet az
    eligazodásban. A rendszer komplexitásából következik, hogy a részek egymással
    együttműködnek, egymásra hatással vannak, így az egyes területek erőssége, gyengesége
    hatással van a többi működésére is. Így az éretlenség jelei sokfélék lehetnek, sokszor együtt
    járnak önszabályozási-, érzelmi-, illetve kapcsolati nehézséggel.</p>
    <p>Ha észrevesszük az éretlenség jeleit, gyakran a kialakulás okát szeretnénk tudni, biztonságot
    nyújtó lenne az egyértelműség ebben a kérdésben. Azonban ezt csak ritka esetben tudjuk
    biztosan meghatározni. Ismerünk hajlamosító tényezőket, amik egészen magzati kortól
    kezdve befolyással bírnak az idegrendszer fejlődésére. Amit viszont ezzel szemben biztosan
    állíthatunk, hogy az érés kódolva van a szervezetünkben, és különféle módszerekkel
    támogatható is. Egy ezek közül a dinamikus szenzoros integrációs terápia.</p>

    <h3 id="dszit_2">Mit jelent a dinamikus szenzoros integrációs terápiás szemlélet?</h3>
    <img src="img/img01.jpg" style="width: 100%;" />

    <p>A szenzoros integráció folyamatában a különféle érzékelési csatornákon bejövő, környezetből
    származó információ megfelelő feldolgozása, és az arra való adaptív válasz kialakítása
    (mozgásos, beszéd, stb.) történik.</p>
    <p>A foglalkozásaink célja, hogy az idegrendszer érését az
    érzékelő és mozgásos rendszerek működtetésének ösztönzése, összehangolódásuk növelése
    által támogassuk, (konkrétan a vesztibuláris-, taktilis-, és proprioceptív rendszer ingerlése
    által). Mindez egy játékos keretben történik, mivel a szemléletünk szerint a gyermek
    biztonságos, azonban érdeklődését felkeltő fizikai-, illetve elfogadó, saját indíttatásaira
    válaszkész kapcsolati térben képes megtalálni a fejlődését szolgáló egyéni és örömteli utakat.</p>
    <p>Fantáziája, érzelmi- és kapcsolati működése a motoros rendszerrel egyszerre aktiválódhat. A
    köztünk lévő térbe, a játék varázslatos világán keresztül bekerülhetnek a gyermek vívódásai,
    konfliktusai. Ezekkel azonban nem marad egyedül, eszköztelenül. Szakemberként a mi
    feladatunk, hogy a gyermek folyamatait kísérjük, érzéseit elfogadjuk, tükrözzük, és olyan
    teret biztosítsunk, amiben saját maga képessé válik megküzdeni nehézségeivel (legyenek
    azok fizikai, vagy lelki természetűek), saját erősségeire támaszkodva az egyéni tempójában
    megtanuljon hatékonyan válaszolni a környezete kihívásaira. Így a tevékenység komplex
    módon hat, az idegrendszer érlelése mellett hozzájárul az egész személyiség harmonikusabb
    működéséhez.</p>

    <h3 id="dszit_3">Ki lehet érintett?</h3>
    <ul>
    <li>A gyermekek, akik nyugtalan, nehezen altatható csecsemők voltak, esetleg manapság is
    nehézséggel küzdenek az alvás terén.</li>
    <li>Akik &quot;hiperaktívnak&quot; tűnnek, nem tudnak nyugodtan maradni akár egy családi étkezés
    erejéig sem. Akik sosem fáradnak el, mindig mozgásban vannak, a határokat feszegetik,
    túlzottan vakmerőnek tűnnek.</li>
    <li>Vagy éppen az előzőek ellentéte, kifejezetten fáradékonyak, kevéssé terhelhetők, időnként
    &quot;lustának&quot; tűnnek. Bátortalanok, az új élményektől inkább visszahúzódnak.</li>
    <li>Akik nem bújósak, nem szeretnek kézenfogva sorban állni, nem viselik jól bizonyos
    ruhadarabok érintését, viselését.</li>
    <li>Vagy épp az ellenkezője, olyanok, mint &quot;elefánt a porcelánboltban&quot;, mindenkivel
    kapcsolatot teremtenek, a másik ember intim terét nem igazán érzékelik, a társaikkal
    túlságosan vehemensen igyekeznek kapcsolódni, ezzel akár fájdalmat okozva a másiknak.</li>
    <li>Akik érzékenyek a hangokra, hirtelen zajra befogják a fülüket, vagy épp kifejezetten keresik
    és akár maguk keltik a zajokat.</li>
    <li>Akikkel a nap már rosszul kezdődik, a készülődés egy tortúra, nehezen váltanak
    tevékenységet. Egy-egy feladat végrehajtása közben állandóan elterelődnek, nem tudják
    tartani a figyelmüket.</li>
    <li>Akikért az óvodába aggodalommal telve érkeznek a szülők. Akik szülei értetlenül hallgatják
    a gyermekük pedagógusát, mivel a hallottakat nem tudják összeegyeztetni az otthoni
    tapasztalatokkal.</li>
    <li>Akik közösségben feszültté válnak, nem tudják jól kezelni a konfliktusokat. Túlzottan
    felpörögnek vagy épp nehezen barátkoznak, félénkek.</li>
    <li>Akiknél a mozgásfejlődés késik/ kimaradt valamelyik szakasz/ esetleg a normál ütemnél
    gyorsabban követték egymást az állomások</li>
    <li>Akik a beszédfejlődésben lemaradással küzdenek.</li>
    <li>Akik nem szeretnek rajzolni.</li>
    <li>Akik ügyetlennek tűnnek, sokszor nekimennek bútoroknak, esnek-kelnek, levernek,
    kiöntenek, összetörnek dolgokat.</li>
    <li>Akik nehezen koncentrálnak, nem tartják a szemkontaktust, gyorsan váltanak a játékok
    között, esetleg gyakran panaszkodnak arra, hogy &quot;unatkoznak&quot;.</li>
    <li>Akiknek nehézségeik vannak a térbeli-, és időbeli tájékozódással.</li>
    <li>Az “egyemberes” gyermekek</li>
    </ul>
    
    <h3 id="dszit_4">Csoportos vagy egyéni ellátás?</h3>
    <h4 id="dszit_41">Miért igyekszünk zárt csoportokkal dolgozni?</h4>
    <p>Alapvetően állandó csoportokkal dolgozunk, mert a gyermekek biztonságérzetéhez, illetve a
    kapcsolódásaik minőségi változásához a kiszámíthatóság szükséges. A közös térben az
    együttes élménynek nagy szerepe van. A csoportban a gyermekek közös szabályokat,
    játékokat alkotnak, saját szokásaik lesznek, ami az együttes sikerük, de az egyéneket külön-
    külön is új, a korábbiaknál magasabb szintű készségekkel ruházza fel.</p>
    <p>Egymás fejlődésének mozgatórugói, visszajelzői, tanúi. Időnként egymás riválisai, ellenlábasai, de ezekből a
    konfliktusokból is együtt építkezünk. Felismerjük, megértjük, elfogadjuk, megtanuljuk
    kommunikálni az érzéseket, feszültségeket konstruktív módon. Ehhez a lassú, közös
    növekedéshez, éréshez azonban elengedhetetlen az állandó jelenlét.</p>
    
    <h4 id="dszit_42">Mitől függ, hogy egyéni vagy csoportos ellátást javaslunk?</h4>
    <p>A tapasztalataink alapján az idegrendszeri éretlenség következtében kialakult viselkedési
    nehézségek esetén a csoportos ellátást javasoljuk általánosságban. A fenti bekezdésben
    olvashatók a csoportos élmény előnyei. Hiszünk abban, hogy a csoporthelyzetben a
    gyermekek intenzívebben hozzák a nehézségeiket, így gyorsabban ismerhetjük és érthetjük 
    meg egy-egy gyermek működését.</p>
    <p>Azonban előfordul olyan eset is, hogy egy gyermek a
    korához képest nagyobb lemaradással küzd, vagy olyan speciális élethelyzetben van, ami
    miatt kiemelt figyelmet igényel, így számára a csoport nem lenne elegendő, ez indokolttá
    teheti a gyermek egyéni ellátását. Az ellátás formájára való javaslattételünket minden esetben
    a szülővel történő egyeztetés és a gyermekkel való találkozás előzi meg.</p>
    
    <h4 id="dszit_43">Ez csak játék?!</h4>
    <p>A sokszínű tevékenységet felkínáló tér és eszközök kíváncsiságot, érdeklődést felkeltő,
    mozgásra hívó, örömöt, lelkesedést kiváltó folyamatot indítanak a gyerekekben, tehát valóban
    játszanak.</p>
    <p>Amitől mégis több lesz, mint egy játék, az egyrészt a pszichológus jelenlétnek, másrészt a
    speciális ingereket biztosító terápiás térnek köszönhető.
    A pszichológusok jelenlétének szerepe ebben a folyamatban egyfelől a csoporttagok egyéni
    szintjének, kezelésének, és fejlődésének megítélése, másfelől katalizátorként serkentik,
    segítik azt a fejlődést, amelyet a gyerekek saját aktív részvételükkel, önszántukból, egyéni
    útjukon járva érnek el.</p>
    <p>A meleg, elfogadó, biztonságos közeg és azok a játékszerek, amelyek a vesztibuláris, taktilis
    rendszerük, illetve saját testük érzékelése számára biztosítják az ingereket, együttesen segítik
    az agyféltekék közötti kapcsolat megerősödését, az idegrendszer harmonizációját, támogatják
    a tanulási, megismerési folyamatokat.</p></div>`
}

document.addEventListener("DOMContentLoaded", function () {
    const isMobile = (window.getComputedStyle(document.querySelector(".menu-toggle"), null).getPropertyValue('display') === 'block')

    if(isMobile) {
        const activeMenuPoints = document.querySelectorAll(".active");    
        activeMenuPoints.forEach((activeMenuPoint) => {
            activeMenuPoint.addEventListener("click", () => {
                document.querySelector(".menu-toggle").click()
            })
        })
    }

    const submenus = document.querySelectorAll(".submenu");
    submenus.forEach(function (submenu) {
        if(isMobile) {
            submenu.addEventListener("click", function () {
                const submenuContent = this.querySelector(".submenu-content");
                submenuContent.classList.toggle('displayBlock')
            });
        } else {
            submenu.addEventListener("click", function () {
                const submenuContent = this.querySelector(".submenu-content");
                submenuContent.style.display = "none";
            });

            submenu.addEventListener("mouseout", function () {
                const submenuContent = this.querySelector(".submenu-content");
                submenuContent.style.display = "none";
                //console.log('out')
            });

            submenu.addEventListener("mouseover", function () {
                const submenuContent = this.querySelector(".submenu-content");
                submenuContent.style.display = "block";
                //console.log('over')
            });

            /*submenu.addEventListener("mouseover", function () {
                const submenuContent = this.querySelector(".submenu-content");
                submenuContent.style.display = "block";
            });*/
        }
    });

    document.getElementById('icon').addEventListener("click", () => {
        //location.replace('http://127.0.0.1:5500/');
        location.replace('https://www.bontakozomuhely.hu/');
    })

    document.getElementById('intro').addEventListener("click", () => {
        //location.replace('http://127.0.0.1:5500/');
        location.replace('https://www.bontakozomuhely.hu/');
    })

    /*document.querySelector('.menu-link').addEventListener("click", () => {
        document.getElementById("methods-submenu").style.display = "block";
    })*/
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-items");

    menuToggle.addEventListener("click", function () {
        if (menuItems.style.display === "none" || menuItems.style.display === "") {
            menuItems.style.display = "block";
            menuToggle.classList.add('mt-active')
        } else {
            menuItems.style.display = "none";
            menuToggle.classList.remove('mt-active')
        }
    });

    document.getElementById('eab-intro').addEventListener("click", () => {
        document.getElementById('vha-intro').classList.remove('li-introduction-opened')
        document.querySelector('.vha-intro-content').classList.remove('vha-intro-content-opened')

        document.getElementById('eab-intro').classList.toggle('li-introduction-opened')
        document.querySelector('.eab-intro-content').classList.toggle('eab-intro-content-opened')
    })

    document.getElementById('eab-intro-img').addEventListener("click", () => {
        document.getElementById('vha-intro').classList.remove('li-introduction-opened')
        document.querySelector('.vha-intro-content').classList.remove('vha-intro-content-opened')

        document.getElementById('eab-intro').classList.toggle('li-introduction-opened')
        document.querySelector('.eab-intro-content').classList.toggle('eab-intro-content-opened')
    })

    document.getElementById('vha-intro').addEventListener("click", () => {
        document.getElementById('eab-intro').classList.remove('li-introduction-opened')
        document.querySelector('.eab-intro-content').classList.remove('eab-intro-content-opened')

        document.getElementById('vha-intro').classList.toggle('li-introduction-opened')
        document.querySelector('.vha-intro-content').classList.toggle('vha-intro-content-opened')
    })

    document.getElementById('vha-intro-img').addEventListener("click", () => {
        document.getElementById('eab-intro').classList.remove('li-introduction-opened')
        document.querySelector('.eab-intro-content').classList.remove('eab-intro-content-opened')

        document.getElementById('vha-intro').classList.toggle('li-introduction-opened')
        document.querySelector('.vha-intro-content').classList.toggle('vha-intro-content-opened')
    })
});

if(window.location.hash === "#kapcsolat") { document.querySelector('#contact').click(); }
if(window.location.hash.includes("#dszit")) { document.querySelector('#dszit').click(); }
if(window.location.hash.includes("#kf")) { document.querySelector('#ability').click(); }
if(window.location.hash.includes("#mfh")) {
    //document.getElementById('turntous').style.backgroundColor="#666";
    document.querySelector('#turntous').click(); }
if(window.location.hash.includes("#t")) { document.querySelector('#goodtoknow').click(); }
if(window.location.hash === "#intro") { document.querySelector('#intro').click(); }
if(window.location.hash === "#vha-intro-content") { document.querySelector('#intro').click(); }
if(window.location.hash === "#eab-intro-content") { document.querySelector('#intro').click(); }




/*
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-link");
    const mainContent = document.getElementById("mainContent");

    // Load content using AJAX
    function loadContent(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                mainContent.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    // Attach event listeners to menu links
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const pageUrl = link.getAttribute("href");
            history.pushState(null, null, pageUrl); // Update the URL
            loadContent(pageUrl); // Load content using AJAX
        });
    });

    // Handle back/forward navigation
    window.addEventListener("popstate", function () {
        const pageUrl = location.href;
        loadContent(pageUrl);
    });
});
*/
