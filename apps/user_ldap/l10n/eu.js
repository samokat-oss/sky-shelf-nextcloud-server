OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Mapeatzeen garbiketak huts egin du.",
    "Failed to delete the server configuration" : "Zerbitzariaren konfigurazioa ezabatzeak huts egin du",
    "Invalid configuration: Anonymous binding is not allowed." : "Baliogabeko konfigurazioa. Lotura anonimoak ez dira onartzen.",
    "Valid configuration, connection established!" : "Baleko konfigurazioa, konexioa ezarri da!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Baleko konfigurazioa, baina lotura ez da ezarri. Egiaztatu zerbitzariaren ezarpenak eta kredentzialak.",
    "Invalid configuration. Please have a look at the logs for further details." : "Baliogabeko konfigurazioa. Eman begirada bat egunkari-fitxategiei zehaztasun gehiagorako.",
    "No action specified" : "Ez da ekintzarik zehaztu",
    "No configuration specified" : "Ez da konfiguraziorik zehaztu",
    "No data specified" : "Ez da daturik zehaztu",
    " Could not set configuration %s" : "Ezin izan da %s konfigurazioa ezarri",
    "Action does not exist" : "Ekintza ez da existitzen",
    "Renewing …" : "Berritzen ...",
    "Very weak password" : "Pasahitz oso ahula",
    "Weak password" : "Pasahitz ahula",
    "So-so password" : "Hala-moduzko pasahitza",
    "Good password" : "Pasahitz ona",
    "Strong password" : "Pasahitz sendoa",
    "The Base DN appears to be wrong" : "Oinarrizko DN gaizki dagoela dirudi",
    "Testing configuration…" : "Konfigurazioa probatzen…",
    "Configuration incorrect" : "Konfigurazioa ez dago ongi",
    "Configuration incomplete" : "Konfigurazioa osatu gabe dago",
    "Configuration OK" : "Konfigurazioa ongi dago",
    "Select groups" : "Hautatu taldeak",
    "Select object classes" : "Hautatu objektu klaseak",
    "Please check the credentials, they seem to be wrong." : "Mesedez egiaztatu kredentzialak, txarto daudela dirudi.",
    "Please specify the port, it could not be auto-detected." : "Mesedez zehaztu ataka, ezin izan da automatikoki detektatu.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Oinarrizko DN ezin izan da automatikoki detektatu, berrikusi kredentzialak, ostalaria eta ataka.",
    "Could not detect Base DN, please enter it manually." : "Ezin izan da oinarrizko DN detektatu, sartu ezazu eskuz.",
    "{nthServer}. Server" : "{nthServer}. Zerbitzaria",
    "No object found in the given Base DN. Please revise." : "Ez da objekturik aurkitu emandako oinarrizko DNan. Berrikusi datuak.",
    "More than 1,000 directory entries available." : "1.000 baino direktorio sarrera gehiago daude.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["Sarrera {objectsFound} dago erabilgarri emandako oinarrizko DNan","{objectsFound} sarrera daude erabilgarri emandako oinarrizko DNan"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Errore bat gertatu da. Mesedez egiaztatu zure oinarrizko DNa, konexio ezarpenak eta kredentzialak.",
    "Do you really want to delete the current Server Configuration?" : "Ziur zaude Zerbitzariaren Konfigurazioa ezabatu nahi duzula?",
    "Confirm Deletion" : "Baieztatu Ezabatzea",
    "Mappings cleared successfully!" : "Esleipenak ongi garbitu dira!",
    "Error while clearing the mappings." : "Errorea mapatzeak garbitzean.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Lotura anonimoak ez dira onartzen. Eman erabiltzaile DN bat eta pasahitz bat.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP eragiketa errorea. Lotura anonimoa ez dago onartuta.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Gordetzeak huts egin du. Mesedez ziurtatu datu-basea funtzionatzen ari dela. Freskatu jarraitu baino lehen.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Modua aldatzeak LDAP eskaera automatikoak gaituko ditu. Zure LDAParen tamainaren arabera eskaera hauek denbora luzea eraman dezakete. Modua aldatu nahi duzu?",
    "Mode switch" : "Modu aldaketa",
    "Select attributes" : "Hautatu atributuak",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Erabiltzailea ez da aurkitu. Egiaztatu saioa hasteko atributuak eta erabiltzaile izena. Iragazki eraginkorra (kopiatu eta itsasteko komando-lerroa baliozkotzeko):<br/>",
    "User found and settings verified." : "Erabiltzailea aurkituta eta ezarpenak egiaztatutak.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Zure bilaketa murriztu dezakezu, erabiltzaile asko barne hartzen dituenez, horietatik lehenengoak bakarrik sartu ahal izango du.",
    "An unspecified error occurred. Please check log and settings." : "Zehaztu gabeko errore bat gertatu da. Mesedez egiaztatu log fitxategiak eta ezarpenak.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Bilaketa iragazia baliogabea da, ziurrenik sintaxi arazoengatik, irekitako eta itxitako kortxeteen arteko kopuru desberdinengatik adibidez. Egiaztatu mesedez.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "LDAP/AD konexio errore bat gertatu da, mesedez egiaztatu ostalaria, ataka eta kredentzialak.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "\"%u id\" leku-marka falta da. LDAP/AD kontsultatzerakoan saioa hasteko izenarekin ordezkatuko da.",
    "Please provide a login name to test against" : "Mesedez saioa hasteko izen bat eman probatu ahal izateko",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "Taldeen sarrera desgaitu da, LDAP/AD zerbitzariak ez duelako memberOf onartzen.",
    "Password change rejected. Hint: " : "Pasahitz aldaketa ukatu da. Aholkua:",
    "Please login with the new password" : "Mesedez hasi saioa pasahitz berriarekin",
    "LDAP User backend" : "LDAP erabiltzaileen atzealdea",
    "Your password will expire tomorrow." : "Zure pasahitza bihar iraungiko da.",
    "Your password will expire today." : "Zure pasahitza gaur iraungiko da.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Zure pasahitza egun %nean iraungiko da.","Zure pasahitza %n egunetan iraungiko da."],
    "LDAP/AD integration" : "LDAP/AD integrazioa",
    "_%s group found_::_%s groups found_" : ["Talde %s aurkitu da","%s talde aurkitu dira"],
    "_%s user found_::_%s users found_" : ["Erabiltzaile %s aurkitu da","%s erabiltzaile aurkitu dira"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Ezin izan da antzeman erabiltzailearen bistaratze izenaren atributua. Mesedez, zehaztu zeure burua LDAP ezarpen aurreratuetan.",
    "Could not find the desired feature" : "Ezin izan da nahi zen ezaugarria aurkitu",
    "Invalid Host" : "Baliogabeko ostalaria",
    "LDAP user and group backend" : "LDAP erabiltzaile eta taldeen atzealdea",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Aplikazio honi esker administratzaileek Nextcloud konektatu dezakete LDAPn oinarritutako erabiltzaile direktorio batera.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Aplikazio honek administratzaileei aukera ematen die Nextcloud LDAP oinarritutako erabiltzaile direktorio batera konektatzeko, erabiltzaile, talde eta erabiltzaile atributuak autentifikatzeko eta hornitzeko. Administratzaileek aplikazio hau konfiguratu dezakete LDAP direktorio edo direktorio aktibo batera edo gehiagora konektatzeko LDAP interfaze baten bidez. Erabiltzaileen kuota, posta elektronikoa, avatarren argazkiak, taldeko kidetasunak eta halako atributu gehiago Nextcloud-era atera daitezke kontsulta eta iragazki egokiak dituen direktorio batetik.\n\nErabiltzaile batek Nextcloud-en saioa hasten du bere LDAP edo AD egiaztagiriekin, eta sarbidea ematen zaio LDAP edo AD zerbitzariak kudeatzen duen autentifikazio eskaera oinarritzat hartuta. Nextcloud-ek ez ditu LDAP edo AD pasahitzak gordetzen, kredentzial hauek erabiltzaile bat autentifikatzeko erabiltzen dira eta ondoren Nextcloud-ek saio bat erabiltzen du erabiltzaile IDarentzat. Informazio gehiago eskuragarri dago LDAP Erabiltzaile eta Taldearen atzealdeko dokumentazioan.",
    "Test Configuration" : "Probatu konfigurazioa",
    "Help" : "Laguntza",
    "Groups meeting these criteria are available in %s:" : "Baldintza horiek betetzen dituzten taldeak bertan eskuragarri %s:",
    "Only these object classes:" : "Bakarrik objektu klase hauetakoak:",
    "Only from these groups:" : "Bakarrik talde hauetakoak:",
    "Search groups" : "Bilatu taldeak",
    "Available groups" : "Eskuragarri dauden taldeak",
    "Selected groups" : "Hautatuko taldeak",
    "Edit LDAP Query" : "Editatu LDAP kontsulta",
    "LDAP Filter:" : "LDAP Iragazkia:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Iragazkiak zehazten du  ze LDAP taldek izango duten sarrera %s instantziara:",
    "Verify settings and count the groups" : "Egiaztatu ezarpetak eta zenbatu taldeak",
    "When logging in, %s will find the user based on the following attributes:" : "Saioa hastean, %s(e)k erabiltzailea bilatuko du atributu hauen arabera:",
    "LDAP/AD Username:" : "LDAP/AD erabiltzaile-izena:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "LDAP/AD erabiltzaile izenarekin saioa hastea baimentzen du, hau da, \"uid\" edo \"sAMAccountName\", eta detektatu egingo da.",
    "LDAP/AD Email Address:" : "LDAP/AD E-posta helbidea:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Posta elektronikoko atributu batekin saioa hastea baimentzen du. \"posta\" eta \"mailPrimaryAddress\" onartzen dira.",
    "Other Attributes:" : "Bestelako atributuak:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Saioa hasten denean aplikatu beharreko iragazkia definitzen du. \"%% uid\" -ek erabiltzaile izena ordezkatzen du saio hasierako ekintzan. Adibidez: \"uid = %% uid\"",
    "Test Loginname" : "Egiaztatu Saioa hasteko izena",
    "Verify settings" : "Egiaztatu ezarpenak",
    "%s. Server:" : "%s. Zerbitzaria:",
    "Add a new configuration" : "Gehitu konfigurazio berri bat",
    "Copy current configuration into new directory binding" : "Kopiatu uneko konfigurazioa direktorio lotura berrian",
    "Delete the current configuration" : "Ezabatu uneko konfigurazioa",
    "Host" : "Ostalaria",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Protokoloa kendu dezakezu, SSL behar ez baduzu. Hala bada, hasi ldaps://--ekin",
    "Port" : "Ataka",
    "Detect Port" : "Antzeman Ataka",
    "User DN" : "Erabiltzaile DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Lotura egingo den bezero erabiltzailearen DNa, adb. uid=agent,dc=example,dc=com. Sarrera anonimoak gaitzeko utzi DN eta Pasahitza hutsik.",
    "Password" : "Pasahitza",
    "For anonymous access, leave DN and Password empty." : "Sarrera anonimoak gaitzeko utzi DN eta Pasahitza hutsik.",
    "Save Credentials" : "Gorde kredentzialak",
    "One Base DN per line" : "Oinarrizko DN bat lerroko",
    "You can specify Base DN for users and groups in the Advanced tab" : "Erabiltzaile eta taldeentzako oinarrizko DNa zehaztu dezakezu Aurreratua fitxan",
    "Detect Base DN" : "Antzeman oinarrizko DNa",
    "Test Base DN" : "Egiaztatu oinarrizko DNa",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "LDAP eskaera automatikoak galarazten ditu. Hobea instalazio handiagoentzat, baina LDAP jakintza apur bat behar da.",
    "Manually enter LDAP filters (recommended for large directories)" : "Eskuz sartu LDAP iragazkiak (direktorio handietarako gomendatuta)",
    "Listing and searching for users is constrained by these criteria:" : "Erabiltzaileen zerrendatze eta bilaketa irizpide hauek mugatuta daude:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Objektu klase komunenak erabiltzaileentzat organizationalPerson, person, user, eta inetOrgPerson dira. Zein objektu klase hautatu behar duzun ziur ez bazaude, mesedez kontsultatu zure direktorioaren administratzailearekin.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Iragazkiak zehazten du  ze LDAP erabiltzailek izango duten sarrera %s instantziara:",
    "Verify settings and count users" : "Egiaztatu ezarpetak eta zenbatu erabiltzaileak",
    "Saving" : "Gordetzen",
    "Back" : "Atzera",
    "Continue" : "Jarraitu",
    "Please renew your password." : "Berritu zure pasahitza mesedez.",
    "An internal error occurred." : "Barne-errorea gertatu da.",
    "Please try again or contact your administrator." : "Saiatu berriro edo jarri harremanetan administratzailearekin.",
    "Current password" : "Uneko pasahitza",
    "New password" : "Pasahitz berria",
    "Renew password" : "Berritu pasahitza",
    "Wrong password." : "Pasahitz okerra",
    "Cancel" : "Utzi",
    "Server" : "Zerbitzaria",
    "Users" : "Erabiltzaileak",
    "Login Attributes" : "Saioa hasteko atributuak",
    "Groups" : "Taldeak",
    "Expert" : "Aditua",
    "Advanced" : "Aurreratua",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Abisua:</b> PHPk behar duen LDAP modulua ez dago instalaturik, motorrak ez du funtzionatuko. Mesedez eskatu zure sistema kudeatzaileari instala dezan.",
    "Connection Settings" : "Konexio Ezarpenak",
    "Configuration Active" : "Konfigurazio Aktiboa",
    "When unchecked, this configuration will be skipped." : "Markatuta ez dagoenean, konfigurazio hau ez da kontutan hartuko.",
    "Backup (Replica) Host" : "Babeskopia (Replica) Ostalaria",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Eman babeskopia ostalari gehigarri bat. LDAP/AD zerbitzari nagusiaren replica bat izan behar da.",
    "Backup (Replica) Port" : "Babeskopia (Replica) Ataka",
    "Disable Main Server" : "Desgaitu Zerbitzari Nagusia",
    "Only connect to the replica server." : "Konektatu bakarrik erreplika zerbitzarira",
    "Turn off SSL certificate validation." : "Ezgaitu SSL ziurtagirien egiaztapena.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Ez da gomendagarria, erabili bakarrik probarako! Konexioak aukera hau ezinbestekoa badu, inportatu LDAP zerbitzariaren SSL ziurtagiria zure %s zerbitzarian.",
    "Cache Time-To-Live" : "Katxearen Bizi-Iraupena",
    "in seconds. A change empties the cache." : "segundutan. Aldaketak katxea husten du.",
    "Directory Settings" : "Karpetaren Ezarpenak",
    "User Display Name Field" : "Erabiltzaileen bistaratzeko izena duen eremua",
    "The LDAP attribute to use to generate the user's display name." : "Erabiltzailearen bistaratze izena sortzeko erabiliko den LDAP atributua.",
    "2nd User Display Name Field" : "2. erabiltzaileen bistaratzeko izen-eremua",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Hautazkoa. Zure bistaratzeko izenean parentesietan gehituko den LDAP atributu bat. Emaitza adib. »Antxon Urrutia (antxon.urrutia@example.org)«.",
    "Base User Tree" : "Oinarrizko erabiltzaile-zuhaitza",
    "One User Base DN per line" : "Erabiltzaile DN oinarri bat lerroko",
    "User Search Attributes" : "Erabili Bilaketa Atributuak ",
    "Optional; one attribute per line" : "Aukerakoa; atributu bat lerro bakoitzeko",
    "Group Display Name Field" : "Taldeen bistaratzeko izena duen eremua",
    "The LDAP attribute to use to generate the groups's display name." : "Taldearen bistaratze izena sortzeko erabiliko den LDAP atributua.",
    "Base Group Tree" : "Oinarrizko talde-zuhaitza",
    "One Group Base DN per line" : "Talde DN oinarri bat lerroko",
    "Group Search Attributes" : "Taldekatu Bilaketa Atributuak ",
    "Group-Member association" : "Talde-Kide elkarketak",
    "Dynamic Group Member URL" : "Taldekide URL dinamikoa",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Talde-objektuetan LDAP atributua  taldeko objektuak zehazten dituen LDAP bilaketa URLa duena.  (Ezarpen huts batek talde dinamikoko kideen funtzionalitatea desgaitzen du.)",
    "Nested Groups" : "Talde habiaratuak",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Piztuta dagoenean, taldeak dauzkaten taldeak onartzen dira. (Bakarrik taldeko kideen atributuak DNak baditu).",
    "Paging chunksize" : "Orrikatze zati-tamaina",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Erabiltzaile edo talde enumerazioak bezalako bolumen handiko erantzunak bueltatu ditzakeen orrialdekatutako LDAP bilaketen zatien tamaina. (0 ezartzeak orrialdekatutako LDAP bilaketak desgaitzen ditu egoera horietan.)",
    "Enable LDAP password changes per user" : "Gaitu LDAP pasahitz aldaketak erabiltzaileko",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Baimendu LDAP erabiltzaileei pasahitza aldatzea eta super administratzaileei eta taldeko administratzaileei LDAP erabiltzaileen pasahitza aldatzea. Sarbide kontroleko gidalerroak LDAP zerbitzarian behar bezala konfiguratuta daudenean bakarrik funtzionatzen du. Pasahitzak LDAP zerbitzarira testu arruntean bidaltzen direnez, garraio enkriptatzea erabili behar da eta pasahitzen hash-a konfiguratu behar da LDAP zerbitzarian.",
    "(New password is sent as plain text to LDAP)" : "(Pasahitz berria testu arruntean bidaltzen da LDAPera)",
    "Default password policy DN" : "Pasahitz-gidalerro lehenetsia DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Pasahitzaren iraungitze-tratamendurako erabiliko den pasahitz-politika lehenetsiaren DNa. Erabiltzaile bakoitzeko LDAP pasahitz aldaketak gaituta daudenean eta OpenLDAPek soilik onartzen duenean bakarrik funtzionatzen du. Utzi hutsik pasahitzaren iraungitze-tratamendua desgaitzeko.",
    "Special Attributes" : "Atributu Bereziak",
    "Quota Field" : "Kuota Eremua",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Utzi hutsik erabiltzailearen lehenetsitako kuotarako. Bestela, zehaztu LDAP / AD atributu bat.",
    "Quota Default" : "Kuota Lehenetsia",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Gainidatzi kuota eremuan kuotarik ez duten LDAP erabiltzaileentzako kuota lehenetsia.",
    "Email Field" : "Eposta eremua",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Ezarri erabiltzailearen posta elektronikoa LDAP atribututik. Utzi hutsik portaera lehenetsirako.",
    "User Home Folder Naming Rule" : "Erabiltzailearen Karpeta Nagusia Izendatzeko Patroia",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Utzi hutsik erabiltzaile izenarako (lehentsia). Bestela zehaztu LDAP/AD atributua.",
    "\"$home\" Placeholder Field" : "\"$home\" Leku-markaren eremua",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home kanpoko biltegiratze konfigurazio batean zehaztutako atributuaren balioarekin ordezkatuko da",
    "Internal Username" : "Barneko erabiltzaile izena",
    "Internal Username Attribute:" : "Baliogabeko Erabiltzaile Izen atributua",
    "Override UUID detection" : "Gainidatzi UUID antzematea",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Era lehenetsian, UUID atributua automatikoki atzematen da. UUID atributua LDAP erabiltzaleak eta taldeak dudik gabe identifikatzeko erabiltzen da. Gainera, barneko erabiltzaile-izena UUID atributuan oinarritua sortuko da bestelakorik zehazten ez bada. Ezarpenak alda daitezke eta bestelako atributua jar daiteke. Ziur egon behar duzu hautatzen duzun atributua erabiltzaile eta taldeek eskura dezaketela eta bakarra dela. Jokabide lehenetsi gisa utz ezazu hutsik. Aldaketok soilik LDAP-n mapeatuko (gehituko)  diren erabiltzaile eta taldeei eragingo die.",
    "UUID Attribute for Users:" : "Erabiltzaileentzako UUID atributuak:",
    "UUID Attribute for Groups:" : "Taldeentzako UUID atributuak:",
    "Username-LDAP User Mapping" : "LDAP-erabiltzaile-izena erabiltzailearen mapeatzea",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Erabiltzaile izenak metadatuak gordetzeko eta esleitzeko erabiltzen dira. Erabiltzaileak zehazki identifikatu eta ezagutzeko, LDAP erabiltzaile bakoitzak barne erabiltzaile izena izango du. Horretarako, erabiltzaile izenetik LDAP erabiltzailearen mapaketa egin behar da. Sortutako erabiltzaile izena LDAP erabiltzailearen UUIDarekin mapatuta dago. Gainera, DNa cache-an gordetzen da LDAP elkarreragina murrizteko, baina ez da identifikaziorako erabiltzen. DNa aldatzen bada, aldaketak topatuko dira. Barne erabiltzaile izena toki guztietan erabiltzen da. Kartografiak garbitzeak hondarrak izango ditu nonahi. Kartografiak garbitzea ez da konfigurazioarekiko sentikorra, LDAP konfigurazio guztiei eragiten die! Ez garbitu inoiz mapak ekoizpen-ingurune batean, soilik proba edo fase esperimental batean.",
    "Clear Username-LDAP User Mapping" : "Garbitu LDAP-erabiltzaile-izenaren erabiltzaile mapaketa",
    "Clear Groupname-LDAP Group Mapping" : "Garbitu LDAP-talde-izenaren talde mapaketa",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "Modu lehenetsian barneko erabiltzaile-izena UUID atribututik sortuko da. Honek erabiltzaile-izena bakarra dela eta karaktereak bihurtu behar ez direla ziurtatzen du. Barneko erabiltzaile-izenak karaktere hauek soilik izan ditzake: [ a-zA-Z0-9_.@- ]. Beste karaktereak haien ASCII karaktereekin bihurtu edo guztiz kentzen dira. Kolisioa gertatzen den kasuetan zenbaki bat gehitu edo handituko da. Barneko erabiltzaile-izena erabiltzaile bat barnean identifikatzeko erabiltzen da. Erabiltzailearen etxeko karpetaren izen lehenetsia ere da. Kanpoko URLen parte ere da, adibidez *DAV zerbitzu guztientzako. Ezarpen honekin, lehenetsitako portaera aldatu daiteke. Aldaketek mapatutako (gehitutako) LDAP erabiltzaile berriengan soilik izango du efektua. Utzi hutsik lehenetsitako portaerarako. "
},
"nplurals=2; plural=(n != 1);");
