# Language Archive Cologne Frontend

LAC Frontend project was generated using [Nx](https://nx.dev) a set of Extensible Dev Tools for Monorepos.

## Documentation

[Nx Documentation](https://nx.dev/angular)

[Angular](https://angular.io)

* [GRAILS_PROD_API](https://api.ka3.uni-koeln.de)
* [FFMPEG_CONVERSION](https://grails-prod.rrz.uni-koeln.de/ka3-ffmpeg)
* [AUDIO_SERVICES_ANALYSIS](https://grails-dev.rrz.uni-koeln.de/ka3-analyse/jobOrder)

INFOS
* Admin API: nur für ROLE_MANAGER zugänglich
* Authentication API
* Deposit API
* Download API
* File System Structure
* File System ACLs
* Demo Annotation Player 

## KA3 RRZK

#### APIS
* Admin API: <strong>ROLE_MANAGER</strong> only
* Annotation API: unterstützt <strong>ACL Autorisierung</strong>
* Authentication API
* Deposit API: <strong>ROLE_DEPOSITOR</strong> only
* Download API: unterstützt ACL Autorisierung
* Media API: unterstützt ACL Autorisierung
* Object API: unterstützt ACL Autorisierung 

#### INDEX
* Annotation Index: ergänzt um Property 'accessRights'
* Object Index: ergänzt um Property 'checksum' und 'accessRights'
* Query Index: ergänzt um Property 'accessLevel' (ACL Export) 

#### DATEISYSTEM
* OCFL Storage Struktur
* OCFL Object Struktur für Collections und Bundles
* ACLs auf OCFL Storage und OCFL Object Ebene 

#### INTERN
* Simple Web-service Offering Repository Deposit (Sword3) Teilimplementierung
* Oxford Common File System (OCFL) Teilimplementierung
* Web Access Control (WAC) Teilimplementierung
