import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  template: `
  <section>
  <h1 class="mat-h1">Submission Guidelines</h1>
  <p>
    These guidelines are intended to provide depositors with technical
    information needed when working with data and provide you the
    information you need to prepare your data for submission. If these
    guildelines and the linked documents do not answer all the questions
    you have or otherwise do not meet your needs, please contact the
    <a href="mailto:lac-helpdesk@uni-koeln.de">LAC helpdesk</a>.
  </p>

  <h2 class="mat-h2">Ethical and Legal issues</h2>
  <p>
    The archive is receptive to complaints from consultants, speech
    communities and their representatives and expects researchers to
    respect the cultural norms of the represented individuals and
    cultures.
  </p>

  <p>
    The archive reserves the right to temporarily depublish data, if
    their ethical or legal status is disputed and may permanently remove
    data if it derives from unethical practices.
  </p>

  <h2 class="mat-h2">Informed Consent</h2>
  <p>
    The depositor guarantees that clear, unambiguous and informed
    consent was collected from the speakers represented in the
    collection and that the research conforms with the ethical
    requirements for research procedures of the involved institutions
    and funding bodies. The depositor ensures that a culturally adequate
    method for collecting informed consent was used. <br />
    Written or recorded oral constent are established practices.
  </p>

  <h2 class="mat-h2">Recommendations for File and Data Formats</h2>

  <h3 class="mat-h3">File Naming Recommendations</h3>
  <p>
    We recommend that you follow a consistent naming scheme for all the
    files in a collection. We do not require a specific naming pattern.
    Several types of information have proven useful in naming patterns.
    Typical components of these schemes are
  </p>

  <ul>
    <li>
      the name or the ISO 639-3 code of the object language or
      alternatively a project acronym
    </li>
    <li>
      the date of recording (preferably in the form YYYYMMDD or
      YYYY-MM-DD)
    </li>
    <li>
      a running number for all recodings made on the same day
      (preferably with leading zeroes, e.g. 0001, 0002, ...)
    </li>
  </ul>

  <p>
    These three components have proven to be sufficent to identify
    recordings and easy to generate (semi-)automatically. <br />
    For many project cominations of the language name and a running
    number can be sufficient, but adding the recording date requires the
    researcher to track the running number only for ane day. In larger
    research projects, with several teams making recordings in parallel,
    additional components such as initials of consultants or identifiers
    for the different teams can be useful.
  </p>

  <table>
    <thead>
    <tr>
      <th>Naming pattern</th>
      <th>File name</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>language name + running number + file extension</td>
      <td><code>kuvi-0006.wav</code></td>
    </tr>
    <tr>
      <td>language name + date + running number + file extension</td>
      <td><code>samre-20090304-0023.wav</code></td>
    </tr>
    <tr>
      <td>ISO 639-3 code + date + running number + file extension</td>
      <td><code>std-20090304-0023.wav</code></td>
    </tr>
    <tr>
      <td>
        project ackronym + date + running numer + file extension
      </td>
      <td><code>summit-20140304-0002.mp4</code></td>
    </tr>
    <tr>
      <td>
        ISO 639-3 code + consultant + date + running number + file
        extension
      </td>
      <td><code>pcj-LK-20070130-0009.wav</code></td>
    </tr>
    </tbody>
  </table>

  <p>
    File naming schemes should aim at producing unique identifiers.
    Ideally the generation of the file name can be done
    (semi-)automatically. Adding complex phrases such as titles or
    fullnames of participants to the file name is error prone and
    cumbersome. This information is better recorded in the metadata.
  </p>

  <p>
    It has proven to be very helpful for processing of bundles, for all
    files of a bundle to have a similar names. The recommended practice
    is for all files in a bundle to have an identical name, except for
    the file extension (i.e. .wav, .mp4, .eaf etc.).
  </p>

  <ul>
    <li><code>pcj-20090304-0023.wav</code></li>
    <li><code>pcj-20090304-0023.mp4</code></li>
    <li><code>pcj-20090304-0023.eaf</code></li>
  </ul>

  <p>
    If the unit represented such as a recorded story is split over two
    files, and addional component such as <code>part1</code>
    <code>part2</code> are a good way to indicate that the sequence of
    the two files represent the whole unit. If files of the same type do
    not form parts of a whole, adding an additional runnning number is a
    simple way to keep the file name unique.
  </p>

  <ul>
    <li><code>pcj-20090304-0023-part1.wav</code></li>
    <li><code>pcj-20090304-0023-part2.wav</code></li>
    <li><code>pcj-20090304-0023.eaf</code></li>
    <li><code>pcj-20090304-0023-001.jpeg</code></li>
    <li><code>pcj-20090304-0023-002.jpeg</code></li>
    <li><code>pcj-20090304-0023-003.jpeg</code></li>
  </ul>

  <p>
    Any naming scheme is acceptable as long as the file names are unique
    across a collection and the names as such are valid file names on
    all common operating systems. This means most types of whitespace
    and special characters such as \, /, |, &quot;, ', *, [], &#123; &#125;, or ?
    should be avoided.
  </p>

  <h3 class="mat-h3">Metadata</h3>

  <p>
    Metadata should be provided for each bundle as BLAM CMDI
    (<a href="https://catalog.clarin.eu/ds/ComponentRegistry/?itemId=clarin.eu%253Acr1%253Ap_1475136016193&amp;registrySpace=public"
    target="_blank">BLAM-bundle-repository-v0.14</a>). <br />
    BLAM CMDI can be produced with
    <a href="http://tla.mpi.nl/tools/tla-tools/arbil/" target="_blank">Arbil</a>. <br />
    We will soon also provide a BLAM profile for
    <a href="http://cmdi-maker.uni-koeln.de" target="_blank">CMDI Maker</a>.
  </p>

  <h3 class="mat-h3">Format Recommendations</h3>
  <p>
    The LAC accepts a list of file types and file formats. A brief list
    of acceptable file formats can we found
    <a [routerLink]="['/docs/format-whitelist']">here</a>.
  </p>

  <h4 class="mat-h4">Audio Recommendations:</h4>
  <p>
    The best common quality for uncompressed loss-less audio recordings
    is LPCM with a sampling rate of 96 kHz and a bit depth of 24 bit.
    However, an encoding with LPCM at 48 kHz and 16 bit ensures the file
    to be generally playable and processible, independent of framework,
    platform, and device restrictions. It is a good compromise between
    high quality audio and practical considerations.
  </p>

  <p>
    Audio recording should have two channels (stereo). If a single
    speaker is recorded one channel recordings (mono) are acceptable.
    More complex setups such as six channel recordings (5.1) will cause
    problems with most tools used in language research and should be
    avoided.
  </p>

  <table>
    <thead>
    <tr>
      <th>Purpose</th>
      <th>File format</th>
      <th>Encoding</th>
      <th>Sampling Rate</th>
      <th>Bit Depth</th>
      <th>Bit rate</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><strong>Recording</strong></td>
      <td>WAV</td>
      <td>LPCM</td>
      <td>48 kHz</td>
      <td>16 bit</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Archiving</strong></td>
      <td>WAV</td>
      <td>LPCM</td>
      <td>48 kHz</td>
      <td>16 bit</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Working</strong></td>
      <td>WAV</td>
      <td>LPCM</td>
      <td>48 kHz</td>
      <td>16 bit</td>
      <td></td>
    </tr>
    </tbody>
  </table>

  <p>
    Note: High quality audio formats such as WAV LPCM 96 kHz/24 bit and
    WAV LPCM 48 kHz/24 bit can cause problems in annotation tools such
    as ELAN and Exmeralda and may not provide any additional information
    relevant for research. However, we will accept these format for
    archiving, just as we accept CD quality audio recodings (WAV LPCM
    44.1 kHz/16 bit).
  </p>

  <h4 class="mat-h4">Video Recommendations:</h4>
  <p>
    Video formats used in language research and archiving are in many
    ways determined by the limitation of high-level consumer
    (“prosumer”) digital cameras. Most modern cameras record video
    encoded as h.264 (sometimes indicated as AVC or AVCHD in camera
    interfaces). Although propietary, we consider this encoding
    currently the most suitable encoding for our purposes because of its
    widespread support in software and hardware.
  </p>

  <p>
    The most common audio encodings in video cameras are LPCM, AC3, and
    AAC. From linguistic point of view, LPCM encoding (often indicated
    as PCM) is highly preferable and should be chosen if possible. AAC
    is a lossy compressed format and is not suitable for all kinds of
    analysis. It is however the preferred option if no PCM audio can be
    provided. Audio encoded as AC3 can cause issues in ELAN and
    Exmeralda on some platforms and should be re-encoded as AAC before
    archiving.
  </p>

  <p>
    The MP4 container specification does not allow LPCM encoded audio.
    If your camera can record LPCM audio with h.264 video, we recommed
    to use the MOV container format. MOV files can be problematic for
    video annotation programs such as ELAN. <br />
    The best way to deal with this issue is to produce a working file
    with AAC audio and h.264 video in a MP4 container and use this file
    with ELAN. For archiving both the MOV and the MP4 file should be
    submitted together with the ELAN file. <br />
    Having two files for one recording increases the storage
    requirements for project work and archiving, but the advantage of
    archiving uncompressed audion and video in one container compensates
    for the disadvantages.
  </p>

  <p>
    If your camera can only record compressed audio, we suggest that you
    also record uncompressed audion with a dedicated audio recorder. In
    case you have no dedicated audio recorde available and you can only
    record compressed audio with your video camera, you might want to
    derive a WAV file from a lossy compressed encoded AAC audio track of
    a video file, this file – despite its appearance as uncompressed
    LPCM data – will not be suitable to some types of analysis. You
    should indicate the source format of this file in the metadata to
    inform future users of the provenance of this data.
  </p>

  <table class="table is-bordered is-striped is-narrow is-hoverable">
    <thead>
    <tr>
      <th>Purpose</th>
      <th>File format</th>
      <th>Video Encoding</th>
      <th>encoding options</th>
      <th>Video Resolution</th>
      <th>Frame rate</th>
      <th>Audio Encoding</th>
      <th>Sampling Rate</th>
      <th>Bit Depth</th>
      <th>Bit rate</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td><strong>Recording</strong></td>
      <td>—</td>
      <td>h.264</td>
      <td>profile: main, level: 4.0</td>
      <td>1080p</td>
      <td>30fps</td>
      <td>LPCM</td>
      <td>48 kHz</td>
      <td>16 bit</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Archiving</strong></td>
      <td>MOV</td>
      <td>h.264</td>
      <td>profile: main, level: 4.0</td>
      <td>1080p</td>
      <td>30fps</td>
      <td>LPCM</td>
      <td>48 kHz</td>
      <td>16 bit</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>MP4</td>
      <td>h.264</td>
      <td>profile: main, level: 4.0</td>
      <td>1080p</td>
      <td>30fps</td>
      <td>AAC (LC)</td>
      <td>48 kHz</td>
      <td></td>
      <td>128-384 kbps</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>(WAV</td>
      <td>48 kHz</td>
      <td>16 bit)</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Working</strong></td>
      <td>MP4</td>
      <td>h.264</td>
      <td>profile: main, level: 4.0</td>
      <td>1080p</td>
      <td>30fps</td>
      <td>AAC (LC)</td>
      <td>48 kHz</td>
      <td></td>
      <td>128 kbps</td>
    </tr>
    </tbody>
  </table>

  <p>
    Note: While we recommend a 30fps frame rate, we discourage any
    change to the frame rate after recording. Any common frame rate
    besides 30 fps – such as 24 fps (e.g. used in NTSC), 25 fps (e.g.
    used in PAL), as well as higher frame rates – are acceptable.
  </p>

  <p>
    Video file formats recommended for film archives such as
    uncompressed MXF or lossless JPEG2000 are not recommended for most
    digital video recordings as these recordings were originally
    recorded in a lossy format (mostly h.264 encoded). If you are
    intending to digitize and archive non-digital film, please contact
    the <a href="mailto:lac-helpdesk@uni-koeln.de">LAC helpdesk</a> for
    further arrangements.
  </p>

  <h3 class="mat-h3">Time-aligned Annotations:</h3>
  <p>
    <a href="http://www.mpi.nl/corpus/html/elan/index.html" target="_blank">ELAN annotations</a>
    are the recommended format for time-aligned annotation. The Language
    Archive Cologne provides additional value services for ELAN
    annotations. Other structured and documented annotation formats can
    be used, but the archive currently does not provide any additional
    value services.
  </p>

  <p>
    The archive also accepts
    <a href="http://www.fon.hum.uva.nl/praat/manual/TextGrid_file_formats.html" target="_blank">Praat TextGrid</a>,
    <a href="http://exmaralda.org/en/partitur-editor-en/" target="_blank">Exmaralda transcriptions</a>,
    <a href="http://www.tei-c.org/Guidelines/P5/" target="_blank">TEI</a>
    (in particular
    <a href="https://www.iso.org/standard/37338.html" target="_blank">ISO 24624:2016</a>), and
    <a href="https://software.sil.org/fieldworks/wp-content/uploads/sites/38/2016/10/FieldWorks-XML-model.pdf"
       target="_blank">FLeX XML</a>.
    <a href="https://software.sil.org/toolbox/" target="_blank">Toolbox Files</a>
    are still accepted, but the format itself has proven to be
    problematic and should be avoided if possible.
  </p>

  <h3 class="mat-h3" id="additional-metadata-and-other-structured-data">
    Additional Metadata and other Structured Data
  </h3>
  <p>
    Written data and metadata supplementing or accompanying audio-visual
    data should be archived in established standards or at least well
    documented formats. For metadata, the preferred format are profiles
    of the
    <a href="https://www.clarin.eu/content/component-metadata" target="_blank">CMDI</a>
    family. In general, XML and CSV formats are recommended. CSV encoded
    (meta)data should be annotated following the
    <a href="https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/" target="_blank">W3C Metadata Vocabulary for
      Tabular Data</a>
    recommendations.
  </p>

  <h3 class="mat-h3">Textual Data</h3>
  <p>
    Textual data supplementing audio-visual recordings can be archived
    alongside the recordings. The recommended formats for unstructured
    textual data are
    <a href="https://en.wikipedia.org/wiki/PDF/A" target="_blank">PDF/A</a>, plain UTF-8 encoded text files, or
    XHTML. If you have
  </p>

  <h3 class="mat-h3">Still Images</h3>
  <p>
    The archive allows archiving of still images supplementing
    audio-visual data to be archived alongside the recordings. <br />
    Accepted formats, in order of preference are TIFF, JPEG2000, PNG,
    and JPEG.
  </p>

  <br />

  <p>
  <fa-icon [icon]="faInfo" [size]="'2x'"></fa-icon>
    If you have any remaining questions, please contact the
    <a href="mailto:lac-helpdesk@uni-koeln.de">LAC helpdesk</a>. We are
    also always happy to hear back from you with any suggestions or
    feedback which helps us to improve our submission guidelines.
  </p>

  </section>
  `,
  styles: [`
      table {
        margin: 15px auto;
      }
  `]
})
export class SubmissionGuidelinesComponent {
    faInfo = faInfoCircle;
}
