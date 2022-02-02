import {Injectable} from '@angular/core';
/**
 * ENVIRONMENT_STAGING: string = "/lac3"; // IMDI Bestand für Frontendentwicklung (@Jörg/@Miguel: früher "lac")
 * ENVIRONMENT_DEV: string = "/lac2";     // CMDI/BLAM Bestand der Datenmigration
 * ENVIRONMENT_PROD: string = "/lac";     // Mini-Testdatenbestand für CLARIN Zertifizierung, der auch auf grails-prod erscheinen wird
 */

/** development apis */
const API_DEV = "https://grails-dev.rrz.uni-koeln.de/ka3-api";
const A5_DEV = "https://grails-dev.rrz.uni-koeln.de/ka3-a5-core/api";
const SP_DEV = "https://grails-dev.rrz.uni-koeln.de/ka3-pub";
const FFMPEG_DEV = "https://grails-dev.rrz.uni-koeln.de/ka3-ffmpeg";
const ACCOUNT = "https://ka3.uni-koeln.de/account/";

/** analisis services url */
const DEV_ANALISIS_URL = "https://grails-dev.rrz.uni-koeln.de/ka3-analyse";
const DEV_ANALISIS_ORDER_URL  = "https://grails-dev.rrz.uni-koeln.de/ka3-analyse/jobOrder";

/** productions api */
const API_PROD = "https://api.ka3.uni-koeln.de";
const SP_PROD = "https://ka3.uni-koeln.de";
const FFMPEG_PROD = "https://grails-prod.rrz.uni-koeln.de/ka3-ffmpeg";

/* urls prefix */
const REPOSITORY_DEV = "lac2"; //const REPOSITORY_DEV = "a5-2";
const REPOSITORY_PROD = "lac";
const AUTH_PREFIX = "login";

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  public static readonly ADMIN      = `${API_DEV}/adm/`;
  public static readonly ANNOTATION = `${API_DEV}/annotation/${REPOSITORY_DEV}`;
  public static readonly AUTH  = `${API_DEV}/${AUTH_PREFIX}`;
  public static readonly MEDIA = `${API_DEV}/media/${REPOSITORY_DEV}`;
  public static readonly OBJECT = `${API_DEV}/object/${REPOSITORY_DEV}`;
  public static readonly QUERY  = `${API_DEV}/query/${REPOSITORY_DEV}`;
  public static readonly DOWNLOAD = `${API_DEV}/download/${REPOSITORY_DEV}`;
  public static readonly DEPOSIT  = `${API_DEV}/deposit/${REPOSITORY_DEV}`;
  public static readonly SERVICES = `${DEV_ANALISIS_URL}`;
  public static readonly RESETACCOUNT = `${SP_DEV}/account/resetPassword`
}
