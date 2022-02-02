import { Component } from '@angular/core';

@Component({
  template: `
    <mat-tab-group>
      <mat-tab label="CLARIN Deposition & License Agreement (ENG)">
      <h1 class="mat-h1"> CLARIN Deposition & License Agreement </h1>

    <h4 class="mat-h4">
        With the Deposition Agreement the depositor agrees to make new CLARIN Material available through the
        CLARIN Infrastructure. For this purpose the depositor provides the Service Provider a metadata file
        including the general information on the material in question but also the distribution categories
        applicable, i.e. the laundry symbols and the eventual other restrictions that the depositor sees fit to
        require.
    </h4>

    <h2 class="mat-h2"> Parties</h2>
    <p>
        he organisation or person authorised to transfer and deposit the digital dataset(s), hereafter referred
        to as the Depositor. <br />
        CLARIN infrastructure (the Repository)
    </p>

    <h2 class="mat-h2">1. Licence</h2>
    <p>
        The Depositor grants the Repository a non-exclusive licence for digital data files, hereafter referred
        to as Content. <br />
        The Repository is authorized to include the Content in its data archive. The Repository shall transfer
        Content to an available carrier, through any method and in any form. <br />
        The Repository is authorized to make Content (or substantial parts thereof) available to third parties
        by means of on-line transmission. In addition, the Repository has the right, on the instruction of
        third parties or otherwise, to make a copy of the dataset or to grant third parties permission to
        download a copy.
    </p>

    <h2 class="mat-h2">2. The Depositor</h2>
    <p>
        The Depositor declares that he is a holder of rights to Content, or the only holder of rights to the
        Content, under the relevant legislation or otherwise, and/or is entitled to act in the present matter
        with the permission of other parties that hold rights. <br />
        The Depositor indemnifies the Repository against all claims made by other parties against the
        Repository with regard to Content.
    </p>
    <p>
        Der Depositor stellt das Repository im Hinblick auf den Inhalt frei
        von allen Ansprüchen anderer Parteien gegen das Repository.
    </p>

    <h2 class="mat-h2">3. The Repository</h2>
    <p>
        The Repository shall ensure, to the best of its ability and resources, that the deposited Content is
        archived in a sustainable manner and remains legible and accessible.
        <br />
        The Repository shall, as far as possible, preserve Content unchanged in its original digital format,
        taking account of current technology and the costs of implementation. The Repository has the right to
        modify the format and/or functionality of Content if this is necessary in order to facilitate the
        digital sustainability, distribution or re-use of Content.
    </p>

    <h2 class="mat-h2">4. The Content</h2>

    <ol>
        <li>Content to which the licence relates is specified in the appendix to this Agreement. The appendix
            forms an integral part of this Agreement.</li>
        <li>
            The Depositor declares that the Content corresponds to the specification provided.
        </li>
        <li>
            The Depositor declares that Content contains no data or other elements that are contrary to the law
            or public regdlations.
        </li>
        <li>
            The Depositor indemnifies the Repository against all claims by third parties relating to Content.
        </li>
        <li>
            The Depositor will supply Content by means of a method and medium deemed acceptable by the
            Repository.
        </li>
    </ol>

    <h2>5. Removal of Content / changes to access conditions</h2>
    <p>
        If sufficient indispensable grounds exist, the Depositor has the right to request the Repository not to
        make Content available for a temporary period or permanently. In such cases, the Repository shall
        retain Content in the data archive, but shall no longer allow third parties to access the Content or
        substantial parts thereof. <br />
        If sufficient indispensable grounds exist, the Repository has the right to remove Content from the
        archive wholly or in part, or to restrict or prevent access to Content on a temporary or permanent
        basis. The Repository shall inform the Depositor in such cases.
    </p>

    <h2 class="mat-h2">6. Availability to third parties:</h2>

    <ol type="I">
        <li>The Repository shall make Content available only to third parties who have agreed to comply with
            the conditions of use. Unless agreed otherwise with the Depositor, the use of Content is subject to
            the General Terms of Use laid down by the Repository.
        </li>
        <li> The Repository can make Content (or substantial parts thereof) available to third parties: </li>
        <ul>
            <li>if the Repository is required to do so by legislation or regdlations, a court decision, or by a
                regdlatory or other institution </li>
            <li>if this is necessary for the preservation of Content and/or the data archive (to a similar
                institution) if the Repository ceases to exist and/or its activities in the field of
                data-archiving are terminated</li>
            <li>The Repository shall publish the metadata and make them freely available, on the basis of the
                documentation that the Depositor provides with Content. The term metadata refers to the
                information that describes the digital files. Other documentation that relates to the dataset
                and is provided by the Depositor shall be published and made freely available, unless the
                Depositor has specified that certain documents must not be made freely available.</li>
            <li>The general information about the research and the metadata relating to Content shall be
                included in the Repository’s databases and publications that are freely accessible to all
                persons.</li>
        </ul>
    </ol>

    <h2  class="mat-h2">7. Provisions relating to use by third parties</h2>
    <p>
        The Repository shall require third parties to whom the Content (or substantial parts thereof) is made
        available to include in the research resdlts a clear reference to the Content from which data have been
        used. The reference must comply with the CLARIN Infrastructure Terms of Use.
    </p>

    <h2>
        8. Death of the Depositor
    </h2>
    <p>
        Following the death of the Depositor, or in the event that the Depositor's organization ceases to
        exist, the data will be treated according to the given copyright and privacy policy.
    </p>

    <h2>9. Liability</h2>
    <p>
        The Repository accepts no liability in the event that all or part of Content is lost. <br>
        The Repository accepts no liability for any damage or losses resdlting from acts or omissions by third
        parties to whom the Repository has made Content available.
    </p>

    <h2 class="mat-h2">10. Term and termination of the Agreement</h2>
    <p>
        his Agreement shall come into effect on the date on which the Repository receives the Content
        (hereafter the deposit date) and shall remain valid for an indefinite period. Cancellation of this
        Agreement is subject to a period of notice of six months, and notice shall be given in writing. It is
        possible to change the agreed access category at any time during the term of the Agreement.
        <br /> Notwithstanding point (a), this Agreement shall end when Content is removed from the data
        archive in accordance with Article 5 of this Agreement.
        <br />
        If the Repository ceases to exist or terminates its data-archiving activities, the Repository shall
        attempt to transfer the data files to a similar organisation that will continue the Agreement with the
        Depositor under similar conditions if possible.
    </p>
    <h2 class="mat-h2">
        11. Applicable Law
    </h2>
    <p>
        German law is applicable to this agreement.
    </p>

    <h4 class="mat-h4"> You have chosen: </h4>
    <ol>
        <li>
            <strong>Restriction: Non-Commercial</strong> <br />
            Content is not be used in any manner that is primarily intended for or directed toward commercial
            advantage or private monetary compensation.
        </li>
        <li>
            <strong>Restriction: Grant back</strong> <br />
            If a Derivate version of Content is created, it has to be licensed with the same license as the
            original Content.
        </li>
        <li>
            <strong>Restriction: Notification</strong> <br />
            If the Content is used in a published article or other work, a notification to Depositor about the
            publication is required. The Depositor hereby agrees to the above provisions and the general
            code(s) of conduct referred to in this document.
        </li>
    </ol>

      </mat-tab>

      <mat-tab label="CLARIN Deposition & License Agreement (GER)">
      <h1 class="mat-h1"> CLARIN Deposition & License Agreement - German Translation </h1>
    <h2 class="mat-h2">Parteien</h2>
    <p>
        Die Organisation oder zur Abtretung und Hinterlegung digitaler
        Dateien autorisierte Person, nachstehend Depositor genannt:
    </p>
    <p>die CLARIN-Infrastruktur (Repository)</p>

    <h2 class="mat-h2">1. Lizenz</h2>
    <p>
        Der Depositor gewährt dem Repository eine nicht-exklusive Lizenz für
        die digitalen Dateien, nachfolgend als Inhalt bezeichnet. Das
        Repository ist autorisiert, den Inhalt in sein Datenarchiv
        aufzunehmen. Das Repository überführt den Inhalt auf einen
        zugänglichen/verfügbaren Träger, durch jede beliebige Methode und in
        jeder Form. as Repository ist autorisiert, den Inhalt (oder
        wesentliche Teile davon) Dritten mittels Online-Übertragung
        zugänglich zu machen. Außerdem hat das Repository das Recht, im
        Auftrag von Dritten oder sonst, Kopien der Dateien zu machen oder
        Dritten zu erlauben, die Kopien zu downloaden.
    </p>

    <h2 class="mat-h2">2. Der Depositor</h2>
    <p>
        Der Depositor erklärt, dass er ein Rechtsinhaber oder der einzige
        Rechtsinhaber des Inhalts ist, unter der einschlägigen Gesetzgebung
        oder anders, und/oder berechtigt ist, in fraglichen Angelegenheiten
        mit der Erlaubnis anderer Parteien, die Rechtsinhaber sind, zu
        handeln.
    </p>
    <p>
        Der Depositor stellt das Repository im Hinblick auf den Inhalt frei
        von allen Ansprüchen anderer Parteien gegen das Repository.
    </p>

    <h2 class="mat-h2">3. Das Repository</h2>
    <p>
        Das Repository stellt nach bestem Können und je nach seinen
        Ressourcen sicher, dass der hinterlegte Inhalt nachhaltig archiviert
        wird, lesbar und zugänglich bleibt. <br/>
        Das Repository bewahrt, soweit möglich, den Inhalt unverändert in
        seinem originalen Datenformat unter Berücksichtigung des aktuellen
        Stands der Technik undTod des Depositorsder Kosten für die Implementierung. Das
        Repository hat das RecTod des Depositorst, das Format und/oder die Funktionalität des
        Inhalts, wenn dies nötTod des Depositorsg ist, um die digitale Nachhaltigkeit,
        Verbreitung oder NachnTod des Depositorstzung des Inhalts zu erleichtern, zu
        modifizieren.
    </p>
    <h2 class="mat-h2">4. Der Inhalt</h2>
    <p>
    <ol>
        <li>Der Inhalt, auf den sich die Lizenz bezieht, ist im Anhang zu diesem
            Vertrag spezifiziert. Der Anhang bildet einen integralen Bestandteil
            dieses Vertrags.
        </li>
        <li>
            Der Depositor erklärt, dass der Inhalt den mitgelieferten
            Spezifikationen entspricht.
        </li>
        <li>
            Der Depositor erklärt, dass der Inhalt keine Daten oder andere
            Elemente enthält, die rechtswidrig sind oder gegen öffentliche
            Regelungen verstoßen.
        </li>
        <li>
            Der Depositor stellt das Repository von allen Ansprüchen Dritter in
            Bezug auf den Inhalt frei.
        </li>
        <li>
            Der Depositor wird den Inhalt zur Verfügung stellen mittels einer
            Methode und eines Mediums, die das Repository als annehmbar
            erachtet.
        </li>
    </ol>

    <h2 class="mat-h2">5. Entfernung des Inhalts/Änderung der Zugangsbedingungen</h2>
    <p>
        Wenn ausreichend unabdingbare Gründe bestehen, hat der Depositor das
        Recht, das Repository zu bitten/aufzufordern, den Inhalt
        vorübergehend oder dauerhaft nicht zugänglich zu machen. In diesen
        Fällen behält das Repository den Inhalt im Datenarchiv, gewährt aber
        Dritten nicht länger Zugriff auf den Inhalt oder wesentliche Teile
        davon. <br/>
        Wenn ausreichend unabdingbare Gründe bestehen, hat das Repository
        das Recht, den Inhalt vollständig oder teilweise aus dem Archiv zu
        entfernen oder den Zugriff auf den Inhalt vorübergehend oder
        dauerhaft zu beschränken oder zu verhindern. Das Repository hat den
        Depositor in solchen Fällen zu informieren.
    </p>
    <h2 class="mat-h2">6. Verfügbarkeit für Dritte:</h2>
    <p>
        Das Repository macht den Inhalt nur Dritten zugänglich, die in die
        Nutzungsbedingungen eingewilligt haben. Sofern nicht anders mit dem
        Depositor vereinbart, unterliegt die Nutzung des Inhalts den vom
        Repository festgelegten allgemeinen Nutzungsbedingungen. <br/>
        Das Repository kann den Inhalt (oder wesentliche Teile davon)
        Dritten zugänglich machen, wenn:
    <ol>
        <li>Das Repository aufgrund rechtlicher Bestimmungen oder Regelungen,
            einer Gerichtsentscheidung oder durch eine Behörde oder eine andere
            Institution angehalten ist, dies zu tun.
        </li>
        <li> Es nötig ist für den Erhalt/Schutz des Inhalts und/oder des
            Datenarchivs (an eine vergleichbare Einrichtung, wenn) das
            Repository nicht mehr existiert und/oder seine Aktivitäten im Feld
            der Datenarchivierung beendet ist.
        </li>
        <li>Das Repository publiziert die Metadaten und macht diese auf
            Grundlage der Dokumentation, die der Depositor mit dem Inhalt
            bereitstellt, frei zugänglich. Der Begriff Metadaten bezieht sich
            auf die Informationen, die die digitalen Dateien beschreiben. Andere
            Dokumentationen im Zusammenhang mit den Dateien, die vom Depositor
            bereitgestellt werden, werden publiziert und frei zugänglich
            gemacht, es sein denn der Depositor hat angegeben, dass bestimmte
            Dokumente nicht frei zugänglich gemacht werden dürfen.
        </li>
        <li>Die allgemeinen Informationen zum Forschungsprojekt und die
            Metadaten bezüglich des Inhalts werden in die Datenbank des
            Repositories und die Publikationen, die allen frei zugänglich sind,
            aufgenommen.
        </li>
    </ol>

    <h2 class="mat-h2">7. Bestimmungen zur Nutzung durch Dritte</h2>
    <p>
        Das Repository fordert Dritte, denen der Inhalt (oder wesentliche Teile davon) zugänglich gemacht wurde,
        auf, in die Forschungsergebnisse einen deutlichen Hinweis auf den Inhalt, von dem Daten benutzt wurden,
        aufzunehmen. Die Quellenangabe muss den CLARIN-Infrastruktur-Nutzungsbedingungen entsprechen.
    </p>
    <h2 class="mat-h2">
        8. Tod des Depositors
    </h2>
    <p>
        Nach dem Tod des Depositors oder für den Fall, dass die Organisation des Depositors aufhört zu existieren,
        werden die Daten entsprechend des Urheberrechts beziehungsweise der Datenschutzbestimmungen behandelt.
    </p>
    <h2 class="mat-h2">9. Haftung</h2>
    <p>
        Das Repository übernimmt keine Haftung für den Fall, dass der gesamte Inhalt oder Teile davon verloren
        gehen. <br>
        Das Repository übernimmt keine Haftung für Schäden oder Vermögensschäden/Verluste, die sich aus der Nutzung
        oder Nicht-Nutzung durch Dritte ergibt, denen das Repository den Inhalt zugänglich gemacht hat.
    </p>
    <h2>10. Laufzeit und Beendigung des Vertrags</h2>
    <p>
        Dieser Vertrag wird an dem Tag wirksam, an dem das Repository den Inhalt erhält (im Folgenden
        Hinterlegungsdatum genannt) und bleibt auf unbestimmte Zeit gültig. Eine Auflösung des Vertrags unterliegt
        einer Kündigungsfrist von sechs Monaten und die Kündigung muss schriftlich erfolgen. Es ist möglich, die
        vereinbarte Zugangskategorie jederzeit während der Vertragslaufzeit zu ändern
        <br/> Ungeachtet Punkt a. endet dieser Vertrag, wenn der Inhalt aus dem Datenarchiv gemäß Abschnitt 5.
        dieses Vertrags gelöscht wird. <br>
        Wenn das Repository aufhört zu existieren oder seine Datenarchivierungs-Aktivitäten beendet, versucht das
        Repository, die Dateien an eine ähnliche Organisation zu übergeben, die den Vertrag mit dem Depositor
        soweit möglich unter denselben Bedingungen fortsetzt.
    </p>
    <h2 class="mat-h2">
        11. Anwendbares Recht
    </h2>
    <p>
        Deutsches Recht ist auf diesen Vertrag anwendbar. Es ist dem Repository gestattet, den Inhalt zu verbreiten
        und zugänglich zu machen mittels der unten erwähnten Methode und, wenn dies unten gekennzeichnet wurde,
        unter der zusätzlichen Option nicht-kommerziell.
    </p>
    <h4 class="mat-h4">
        Sie haben gewählt:
    </h4>
    <ol>
        <li>
            <strong>Einschränkung: Nicht-kommerziell</strong> <br/>
            Der Inhalt darf nicht auf eine Weise genutzt werden, die vorrangig auf einen geschäftlichen Vorteil oder
            eine geldwerte Vergütung gerichtet ist (nicht-kommerzielle Nutzung).
        </li>
        <li>
            <strong>Einschränkung: Grant back</strong> <br/>
            Wenn eine bearbeitete Version des Inhalts erstellt wurde, muss diese unter denselben Lizenzbedingungen
            wie der Originalinhalt bereitgestellt werden.
        </li>
        <li>
            <strong>Einschränkung: Mitteilung/Benachrichtigung</strong> <br/>
            Wenn der Inhalt genutzt wurde, um in einem Artikel oder anderen Werk veröffentlicht zu werden, ist eine
            Mitteilung an den Depositor über die Veröffentlichung erforderlich. Der Depositor stimmt hiermit den
            obigen Bestimmungen und den allgemeinen, in diesem Dokument genannten Verhaltensbedingungen zu.

        </li>
    </ol>
      </mat-tab>
    </mat-tab-group>
  `
})
export class DepositorAgreementComponent {

}
