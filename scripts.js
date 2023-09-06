function changeContentToContact() {
    document.getElementById("page").innerHTML = `
    <h1>Kapcsolat</h1>
    <p>A munkánk jellege miatt e-mailen tud bejelentkezni, mivel a foglalkozások közben nem tudjuk
    felvenni a telefont. Kérjük fogalmazza meg röviden a megkeresés okát, írja meg telefonszámát a
    további egyeztetés céljából!</p>
    <p>E-mail: <a href="mailto:bontakozomuhely@gmail.com">bontakozomuhely@gmail.com</a></p>
    <h2>Helyszíneink</h2>
    <p>A mozgás fókuszú ellátás a Balance Yoga Jógastúdióban történik (3300 Eger, Törvényház u.17.)</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.937421725834!2d20.3680861!3d47.8988965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d9e221f1469%3A0x99ceebbe0b3a8d90!2zRWdlciwgVMO2cnbDqW55aMOheiB1LiAxNywgMzMwMA!5e0!3m2!1sen!2shu!4v1693935145129!5m2!1sen!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p><br/><br/>A szülőkonzultációk és nem mozgás alapú képességfelmérések helyszíne pedig a Lollok Ház (3300 Eger, Sas utca 5-7.)</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.434256257855!2d20.38145211285984!3d47.88927966829329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d7c4e9ea04b%3A0xc7bc4379eae9099e!2sEger%2C%20Sas%20u.%205%2C%203300!5e0!3m2!1sen!2shu!4v1693935373088!5m2!1sen!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <p><br/><br/>A találkozáshoz előzetes egyeztetés szükséges mely során a kereteket megbeszéljük (idő, hely, ár).</p>
    `
}
 
 function changeContentToGoodToKnow() {
    document.getElementById("page").innerHTML = `
    <h1>Tudnivalók</h1>
    <h3>Hogyan történik a bejelentkezés?</h3>
    <p>A bejelentkezés emailben történik, mivel a munkánk jellege miatt, napközben nem tudjuk felvenni a
    telefont. Kérjük, fogalmazzák meg néhány mondatban a megkeresés okát, és írják meg telefonos
    elérhetőségüket is, hogy a további egyeztetés céljából kereshessük Önöket!</p>
    <p>email: bontakozomuhely@gmail.com</p>
    <h3>Az ellátás időbeli keretei</h3>
    <p>Gyakran felmerül a kérdés, hogy meddig szükséges a gyermek részvétele a munkafolyamatban? Erre
    sajnos nem tudunk a gyermek és családja megismerése nélkül választ adni. Az előrehaladás mértékét
    a személyes adottságok, a részvételi lehetőség gyakorisága és az egyéni életmód jellemzői is
    befolyásolják. A szemlélet nondirektivitása, illetve komplex volta miatt általában egy tanévet
    szoktunk javasolni kezdésképpen.</p>
    <p>A szülővel történő első találkozásokat, illetve a gyermek megismerését követően javaslatot teszünk a
    gyerek ellátására, amennyiben a javaslat a csoportban való részvétel, ez heti egy, állandó időpontban
    szervezett 45 perces foglalkozást jelent.</p>
    <h3>Mi a szülő szerepe a közös munkafolyamatban?</h3>
    <p>Az eredményes közös munkában a szülő elkötelezettsége fontos tényező. A családokkal a
    rendszerszemlélet jegyében dolgozunk. A gyermek tünete nem független a környezetétől. A
    viselkedési minták megértéséhez, az egészséges és hatékonyabb működésmód megtalálásához meg
    kell ismernünk a szülő tapasztalatait, elképzeléseit, érzéseit, a gyermek és család fejlődéstörténetét.
    Azon dolgozunk, hogy az elfogadó légkörben a szülők a bizalmukba tudjanak avatni minket, mert a
    szakmai tudásunk nem hasznosítható, nem általános érvényű önmagában, nem tudunk sajnos kész
    receptet nyújtani. Azonban a kölcsönösen aktív részvételünk sikeressé teheti az együttműködést.
    Hisszük, hogy több szem többet lát, örömünkre szolgál, ha mindkét szülő be tud kapcsolódni a közös
    munkába.</p>
    <p>A hozzánk járó gyermekek szüleivel minimum félévente egy alkalommal szülőkonzultáció keretében
    osztjuk meg a tapasztalatainkat egymással. Természetesen a szülők igénye alapján, illetve
    amennyiben a szakmai szempontok indokolttá teszik, lehetőség van további konzultációs időpontot
    egyeztetni.</p>
    <h3>Áraink</h3>
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
    `
 }

function changeContentToIntroduction() {
    document.getElementById("page").innerHTML = `
    <h1>Bemutatkozás</h1>
    <div class="introduction-container">
    <ul class="ul-introduction"><li class="li-introduction-img-eab" id="eab-intro-img"></li><li class="li-introduction" id="eab-intro">Elek Ágnes Borbála</li></ul>
    <ul class="ul-introduction"><li class="li-introduction-img-vha" id="vha-intro-img"></li><li class="li-introduction" id="vha-intro">Váczy-Herman Ágnes</li></ul>
    </div>
    <div class="eab-intro-content">
    <h3>Elek Ágnes Borbála, Tanácsadó szakpszichológus</h3>
    <p>2012 óta dolgozom pedagógiai szakszolgálatban. Itt azokkal a gyermekekkel foglalkozunk, akiket a
    szülők saját indíttatásból, vagy a gyermek pedagógusainak javaslatára hozhatnak hozzánk,
    képességeik felmérésére, viselkedési-, beilleszkedési-, fejlődési-, vagy egyéb érzelmi nehézségeik
    hátterének feltérképezése céljából.</p>
    <p>Szakmai érdeklődésem középpontjában a kezdetektől fogva a gyermekek állnak. Már gimnazista
    koromban önkénteskedtem gyermekotthonban, táboroztattam gyerekeket. Ez a fajta elköteleződés,
    bár kissé más formában, mindmáig az életem részét képezi.
    Szakmai ismeretszerzésem folyamatáért rendkívül hálás vagyok volt gyakorlati-és
    munkahelyeimnek, képzőimnek.</p>
    <p>A gyerekekkel való munka és a saját önismeretei folyamataim is arra a felismerésre vezettek, hogy a
    legörömtelibb kapcsolódások, amikben igazán otthon érzem magam szakemberként is, a mozgáson,
    alkotó folyamatokon keresztül történnek.</p>
    <p>Szerencsés vagyok, hogy egyetemista koromban megismerkedhettem a dinamikus szenzoros
    integrációs (Ayres) terápiával, majd képződhettem is ezen a téren, és munkahelyeimen volt
    lehetőségem tapasztalatokkal mélyíteni a megszerzett tudást.</p>
    <p>Csodálom a gazdagságát, kreativitását, játékosságát ennek a módszernek, és csodálom mindeközben
    a gyermekeket, akik elemi örömmel vesznek részt a folyamatban, és járják be a saját útjukat,
    kommunikálnak a játék nyelvén, megjelenítik és feldolgozzák a konfliktusaikat, amíg mi
    szakemberként ezt megtartó figyelemmel kísérjük, serkentjük. Lelkesítő számomra a folyamat,
    amiben megismerhetem a velem együtt dolgozó szülőket, és gyermekeiket. Szeretem, ahogy kialakul
    a bizalom és párbeszéd közöttünk, és így megszülethet a megértés a közös munka gyümölcseként.
    Mindeközben rendkívül hasznosnak is tartom ezt a szemléletet, az idegrendszeri éretlenség
    mibenlétének ismeretét. Értelmezhetővé teszi az eleinte sokszor ellentmondónak, érthetetlennek
    látszó - szülőknek, gyermekeknek és pedagógusoknak - egyaránt nehézséget okozó tünetek
    sokféleségét.</p>
    <p>Nem lehet elégszer hangoztatni, hogy a felgyorsult világunk mozgásszegény, ingerekben azonban
    kifejezetten gazdag voltát, ami a szociális kapcsolatok elszegényesedésével is együtt jár, az érlelődő
    idegrendszer nehezen tudja követni. A tapasztalataim alapján ez jelentős mértékben hozzájárul a
    manapság jelentkező elakadásokhoz.</p>

    <p>A szülőkkel való munka folyamán az évek alatt erősödött a felismerésem, hogy a gyermekeknél
    óvodás- iskolás korban problémát okozó tünetek, sok esetben már egész korai életszakaszban
    megjelentek. A szülők többnyire érzékelték is azokat, azonban nem találtak megfelelő válaszokat a
    felmerülő kérdéseikre. Ennek köszönhetően figyelmem egyre inkább a korai életszakasz fejlődése
    felé irányult, tovább képeztem magam a csecsemőkori regulációs zavarok kezelése (integrált szülő-
    csecsemő konzultáció), illetve a korai képességfelmérés (SEED Fejlődési Skála) irányában.
    Ezeknek köszönhetően a látásmódom egyre komplexebbé vált, olyan értelmezési keretet,
    munkamódot találtam, amit a mai kor nehézségei között hitelesnek, jól használhatónak érzek, és
    aminek segítségével, a hozzám forduló kliensek számára egy elfogadó, inspiráló, a nehézségek
    megélésével együtt is a megértést és változást támogató szemléletet biztosíthatok.
    Az elmúlt tanévben alkalmunk nyílt együtt dolgozni Váczy-Herman Ágnes kolléganőmmel különféle
    csoportokat vezetve. Az együttműködésünk minősége tovább növelte a csoportos munka iránti
    elkötelezettségünket, inspiráló és eredményes volt a kettős vezetés.</p>
    Szakmai önéletrajz -tovább ???????
    <h3>SZAKMAI TAPASZTALATOK</h3>
    <table>
    <tr><th style="width:20%">2020-22</th><th>Magyar Máltai Szeretetszolgálat</th></tr>
    <tr><td>&nbsp;</td>
    <td>A Fókuszban a gyermek pályázati projektben koragyerekkori szakértőként
    tevékenykedtem Heves megye néhány településén, ahol a 3 év alatti gyermekek
    fejlődését követtem nyomon, támogattam.</td></tr>
        
    <tr><th>2020-tól</th><th>Heves megyei Pedagógiai Szakszolgálat Füzesabonyi Tagintézménye</th></tr>
    <tr><td>&nbsp;</td>
    <td>Nevelési tanácsadás körébe tartozó tevékenységek, alkalomszerűen szakértői
    tevékenység.</td></tr>

    <tr><th>2015-től</th><th>Világítani Fogok Egyesület, önkéntes</th></tr>
    <tr><td>&nbsp;</td>
    <td>Hátrányos helyzetű gyerekek táboroztatása, családokkal kapcsolattartás.</td></tr>

    <tr><th>2012-20</th><th>Fővárosi Pedagógiai Szakszolgálat IV. Ker. Tagintézménye, pszichológus</th></tr>
    <tr><td>&nbsp;</td>
    <td>Járási szintű szakértői vizsgálatok, nevelési tanácsadás körében végzett tevékenységek
    (idegrendszeri éretlenség vizsgálata és kezelése, szülő-csecsemő konzultáció),
    iskolapszichológusi feladatkörök.</td></tr>

    <tr><th>2013-15</th><th>Palánta Alapítvány Óvoda, óvodapszichológus</th>
    <tr><td>&nbsp;</td>
    <td>Szülőcsoportok vezetése, csoportos megfigyelések, szülőkonzultáció.</td></tr>


    <tr><th>2010</th><th>Óbudai Nevelési Tanácsadó, III. ker., 60 órás szakmai gyakorlat</th></tr>
    <tr><td>&nbsp;</td>
    <td>Diagnosztikai munka, Dszit csoportok támogatása).</td></tr>
    
    <tr><th>2010</th><th>MRE Bethesda Gyermekkórház, családterápiás gyakorlat
    <tr><td>&nbsp;</td>
    <td>Családterápiás ülések részvétel, jegyzőkönyvezés.</td></tr>
    
    </table>
    
    <h3>TANULMÁNYOK, KÉPZÉSEK</h3>
    <table>
    <tr>
    <th style="width:20%">2017</th><th>SEED Fejlődési Skála, 30 órás tanfolyam, Korai Fejlesztő Központ</th>
    </tr>
    
    <tr>
    <th>2014-2016</th><th>Integrált szülő- csecsemő konzultáció, SOTE</th>
    </tr>
    <tr>
    <td>&nbsp;</td>
    <td>Csecsemő- és kisgyermekkori regulációs zavarok kezelésére használt prevenciós,
    intervenciós módszer.</td>
    </tr>

    <tr><th>2014-2018</th><th>Tanácsadó szakpszichológus képzés, ELTE</th></tr>
    <td>&nbsp;</td>
    <td>Családi és párkapcsolati tanácsadás specializáció</td></tr>
    <tr><th>2014</th><th>Szenzoros integrációs terápiák: saját élmény csoport</th></tr>
    <tr><th>2014</th><th>Szenzoros integrációs terápiák elmélete</th></tr>
    <tr><th>2008-2009</th><th>120 óra pszichodráma sajátélmény</th></tr>
    <tr><th>2009</th><th>Motivációs tréning, PPKE BTk</th></tr>
    <tr><th>2005-2012</th><th>Pszichológia MA, Pedagógia MA, Pázmány Péter Katolikus Egyetem BTK (Klinikai
    pszichológia-, Család- és valláspszichológia szakirány)</th></tr>
    </table>
    </div>
    
    <div class="vha-intro-content">
    <h3>Váczy-Herman Ágnes, pedagógiai szakpszichológus</h3>
    <p>2011 óta dolgozom
    pedagógiai szakszolgálatban. Munkám elsősorban pszichológiai tanácsadó, támogató és
    fejlesztő tevékenységen alapul.
    Tevékenységem része az óvodával, iskolával összefüggő tanulási, magatartási, beilleszkedési
    és egyéb pszichés problémák esetén a szülőkkel, pedagógusokkal közös konzultációs
    folyamatban megoldást keresni, továbbá a gyermekekkel végzett egyéni és csoportos fejlesztő
    foglalkozások keretében történő segítségnyújtás. A csoportos pszichológiai ellátás óvodáskorú
    gyerekek esetében elsősorban mozgásalapú, érést, fejlődést, lelki összerendeződést segítő,
    iskoláskorú gyerekek esetében személyiségfejlesztő és társas hatékonyságot fejlesztő
    foglalkozást jelent.</p>
    <p>A szülőkkel, pedagógusokkal közös konzultációs folyamatban azt tapasztaltam, hogy a
    szülők, pedagógusok sokszor eszköztelennek és tehetetlennek érzik magukat a modernkori
    gyermekek vonatkozásában felmerülő problémák esetén. Emiatt a konfliktusok megoldásában
    gyakran aktivizálódnak rossz kommunikációs beidegződések, ösztönös minták, tévhitekre
    épülő megoldási utak. Ezeknek hatására azonban a problémák nem oldódnak meg, hanem
    ellenkezőleg, egy negatív spirál indul be. A nem megfelelő problémakezelés eredménye egyre
    több konfliktus, egyre mélyülő ellentétek, egyre kezelhetetlenebb gyermek.
    </p><p>A negatív spirál ugyanakkor pozitív irányban is működik. Tudatosságunkon és a belefektetett
    munkán múlik, hogy az önmagát erősítő folyamat milyen irányt vesz. Szerencsés vagyok
    abban, hogy számos esetben kísérhettem a folyamatot, aminek során a felismerések, belátás,
    elfogadás talaján a sodródás helyét a tudatos irányítás vette át.
    </p><p>A gyerekekkel végzett pszichológiai fejlesztő tevékenységeim közül különösen kedves
    számomra az óvodáskorú gyermekekkel való mozgásalapú foglalkozás. Lenyűgöz, ahogy
    ezek a gyerekek felszabadulnak egy lehetőségeket, kihívásokat kecsegtető térben, közegben,
    ahogy örömmel, és fáradtságot nem kímélve bontakoztatják ki képességeiket, és mutatják meg
    személyiségük mintáit. Megtapasztalhattam, hogy a gyerekek miközben felhőtlenül élik
    gyermeki mivoltukat, belső hajtóerejük ösztönösen azok felé a kihívások felé tereli őket, ami
    egyúttal fejlődésüket is szolgálja
    </p><p>Pszichológusi minőségem mellet fontosnak tartom megemlíteni, hogy két gyermek
    édesanyja is vagyok, akiket férjemmel együtt nevelünk. A magánéleti folyamat és tapasztalás,
    amelynek során családdá váltunk, hozzájárult szakmabeli szemléletem formálódásához is.
    Megtapasztaltam, hogy hiába az elméleti tudás, a gyermekes lét számtalan kihívást tartogat,
    ennek során elkerülhetetlenül szembesülünk saját korlátainkkal is. Ez nehéz lelki út, úgy
    vélem, minden szülőnek van olyan időszaka, amikor elkel számára a támogatás, az
    együttérzés.
    </p><p>Hiszek a kapcsolat, kapcsolódás erejében, legyen szó felnőttek közötti, felnőtt-gyerek,
    vagy gyerekek közötti kapcsolatról. Azt gondolom, hogy bármikor képesek vagyunk fejlődni
    abban, hogy egészségesen, őszintén tudjunk kapcsolódni egymáshoz, és önmagunkhoz.
    Pszichológiai munkám során legnagyobb örömöm, amikor megszületik a közös munka
    eredménye, a közös megértése a reakciók mögött húzódó okoknak. A megértésből fakadó
    figyelem, és összehangolódás a kapcsolat megerősödéséhez vezet, mely aztán hozzájárul a
    személyes növekedéshez, és bázisa, támasza, erőforrása lesz gyermeknek, felnőttnek
    egyaránt.
    </p><p>Az elmúlt tanévben Elek Ágnes tanácsadó szakpszichológus kollégámmal vezettünk
    közösen dinamikus szenzoros integrációs szemléletű óvodás csoportokat, illetve kamaszok és
    kiskamaszok számára szociális készségfejlesztő csoportokat. A közös működés
    gyümölcsözőnek bizonyult, élünk a kettős vezetés nyújtotta előnyökkel, ami által magasabb
    szakmai színvonalat is képviselhetünk. Mivel tapasztaljuk, hogy egyre növekszik azon
    gyerekek száma, akiknél éretlen, vagy nem megfelelően, eltérően működő idegrendszeri
    működés jellemző, fókuszunkban elsősorban dinamikus szenzoros integrációs foglalkozások
    lesznek. A DSZIT szemléletű ellátásnak köszönhető magasabb idegrendszeri integrációs szint
    elérése mellet, a szülőkonzultáció folyamatában a támogatáson, megértésen keresztül
    lehetőség nyílik a szülők gyerekeikkel való kapcsolódásának elmélyítésére is.<p>
    
    <h3>SZAKMAI TAPASZTALAT</h3>

    <table>
    
    <tr><th style="width:20%">2011-</th><th>Heves megyei Pedagógiai Szakszolgálat Füzesabonyi Tagintézménye</th></tr>
    <tr><td>&nbsp;</td>
    <td>Pszichológus- nevelési tanácsadási tevékenység, iskolapszichológiai,
    óvodapszichológiai tevékenység, szakértői tevékenység, iskola- és
    óvodapszichológus feladatok koordinátora munkakör.</td></tr>

    <tr><th>2009-2010</th><td><b>Trenkwalder</b>, Debrecen</td></tr>
    <tr><td>&nbsp;</td>
    <td>Pszichológus- munkaerő közvetítés</td></tr>

    </table>

    <h3>TANULMÁNYOK, KÉPZÉSEK</h3>
    <table>
    <tr><th style="width:20%">2019</th><td><b>Pedagógiai Szakpszichológus (4 félév)</b>, Eötvös Lóránd Tudományegyetem Pedagógiai és Pszichológiai Kar</td></tr>
    <tr><th>2010</th><td><b>Okleveles Pszichológus (10 félév)</b>, Debreceni Egyetem Bölcsésztudományi Kar</td></tr>
    <tr><th>2010</th><td><b>Pszichológus szakfordító (angol nyelvű) (4 félév)</b>, Debreceni Egyetem Bölcsésztudományi Kar</td></tr>
    </table>
    </div>
    `

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
}

function changeContentToTurnToUs() {
    document.getElementById("page").innerHTML = `
    <h1>Mivel fordulhatnak hozzánk?</h1>
    <h3>Milyen nehézségekkel kereshetnek bennünket?</h3>
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
    <h3>Amit nem tudunk vállalni</h3>
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
    tudunk eleget tenni, a közös munkára nincs lehetőség.</b></p>
    `
}

function changeContentToAbility() {
    document.getElementById("page").innerHTML = `
    <h1>Képességfelmérések</h1>
    
    <h3>SEED Fejlődési Skála (0-4 év)</h3>
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

    <h3>Iskolaérettségi vizsgálat (5-6 év)</h3>
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
    erre lehetőség.</p>`
}

function changeContentToDSZIT() {
    document.getElementById("page").innerHTML = `
    <h1>DSZIT szemléletű foglalkozás</h1>
    <h3>Mi az az idegrendszeri éretlenség?</h3>
    
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
    
    <h3>Mit jelent a dinamikus szenzoros integrációs terápiás szemlélet?</h3>
    
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

    <h3>Ki lehet érintett?</h3>
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
    
    <h3>Csoportos vagy egyéni ellátás?</h3>
    <h4>Miért igyekszünk zárt csoportokkal dolgozni?</h4>
    <p>Alapvetően állandó csoportokkal dolgozunk, mert a gyermekek biztonságérzetéhez, illetve a
    kapcsolódásaik minőségi változásához a kiszámíthatóság szükséges. A közös térben az
    együttes élménynek nagy szerepe van. A csoportban a gyermekek közös szabályokat,
    játékokat alkotnak, saját szokásaik lesznek, ami az együttes sikerük, de az egyéneket külön-
    külön is új, a korábbiaknál magasabb szintű készségekkel ruházza fel.</p>
    <p>Egymás fejlődésének mozgatórugói, visszajelzői, tanúi. Időnként egymás riválisai, ellenlábasai, de ezekből a
    konfliktusokból is együtt építkezünk. Felismerjük, megértjük, elfogadjuk, megtanuljuk
    kommunikálni az érzéseket, feszültségeket konstruktív módon. Ehhez a lassú, közös
    növekedéshez, éréshez azonban elengedhetetlen az állandó jelenlét.</p>
    
    <h4>Mitől függ, hogy egyéni vagy csoportos ellátást javaslunk?</h4>
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
    
    <h4>Ez csak játék?!</h4>
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
    a tanulási, megismerési folyamatokat.</p>`
}

document.addEventListener("DOMContentLoaded", function () {
    const submenus = document.querySelectorAll(".submenu");

    submenus.forEach(function (submenu) {
        submenu.addEventListener("click", function () {
            const submenuContent = this.querySelector(".submenu-content");
            submenuContent.style.display = "none";
        });

        submenu.addEventListener("mouseout", function () {
            const submenuContent = this.querySelector(".submenu-content");
            submenuContent.style.display = "none";
        });

        submenu.addEventListener("mouseover", function () {
            const submenuContent = this.querySelector(".submenu-content");
            submenuContent.style.display = "block";
        });
    });

    document.getElementById('icon').addEventListener("click", () => {
        //location.replace('http://127.0.0.1:5500/');
        location.replace('https://weeep.github.io/');
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelector(".menu-items");

    menuToggle.addEventListener("click", function () {
        if (menuItems.style.display === "none" || menuItems.style.display === "") {
            menuItems.style.display = "block";
            menuToggle.classList.add('active')
        } else {
            menuItems.style.display = "none";
            menuToggle.classList.remove('active')
        }
    });
});




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