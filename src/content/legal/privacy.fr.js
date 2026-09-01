/**
 * Privacy Policy — French.
 *
 * Full translation of privacy.en.js. GDPR terminology follows the French text
 * of the Regulation (RGPD): « responsable du traitement », « base légale »,
 * « exécution d'un contrat », « intérêt légitime », « clauses contractuelles
 * types ». Product names, provider names and URLs stay as they are.
 */
export const privacyFr = {
  eyebrow: 'Mentions légales',
  title: 'Politique de confidentialité',
  lede:
    'Comment Turn the Cup traite tes informations — ce qui reste sur ton appareil, ce qui est synchronisé avec nos serveurs quand tu te connectes, ce que tes amis voient, et comment tout faire supprimer.',
  updatedLabel: 'Dernière mise à jour :',
  updated: '1 septembre 2026',
  tocTitle: 'Sur cette page',
  meta: {
    title: 'Politique de confidentialité — Turn the Cup',
    description:
      'Comment Turn the Cup collecte, utilise et protège tes données : ce qui reste sur ton appareil, ce qui est synchronisé, ce que nous ne collectons jamais, et comment supprimer ton compte.',
  },
  sections: [
    {
      id: 'overview',
      title: 'Qui nous sommes',
      blocks: [
        { p: 'Turn the Cup (« Turn the Cup », « nous », « notre ») est une application indépendante pour iPhone et iPad. Tu finis ton café, tu retournes la tasse et tu lis la prédiction sur sa base. Autour de cela : des tasses à collectionner, des points café et une partie amis facultative.' },
        { p: 'Cette politique de confidentialité explique quelles informations l’application traite, pourquoi, et quel contrôle tu as dessus. Elle s’applique à l’application mobile Turn the Cup (identifiant de paquet **com.entertainment.turnthecup**) et à ce site d’assistance.' },
        { p: 'Au sens du Règlement général sur la protection des données de l’UE et du Royaume-Uni, le développeur de Turn the Cup est le responsable du traitement. Tu peux nous joindre à tout moment à [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com).' },
        { p: 'Ceci est une traduction de la version anglaise. En cas de divergence entre les deux, le texte anglais prévaut.' },
      ],
    },
    {
      id: 'entertainment',
      title: 'Divertissement uniquement',
      blocks: [
        {
          callout: [
            { p: '**Turn the Cup existe pour amuser.** Les lectures — prédictions, affirmations, conseils, citations, blagues, questions et le reste — sont écrites par nous à titre de divertissement. Ce n’est pas de la voyance, ni un service de médiumnité, ni un conseil professionnel d’aucune sorte.' },
            { p: 'Rien dans l’application ne repose sur une méthode scientifique, médicale, financière, juridique ou factuelle, et rien de ce qu’elle contient ne doit servir à prendre une décision importante. Tu es responsable de tes propres choix. Consulte nos [Conditions d’utilisation](/terms) pour l’avertissement complet.' },
          ],
          icon: '☕',
          tone: 'hot',
        },
      ],
    },
    {
      id: 'modes',
      title: 'Deux façons d’utiliser l’application',
      blocks: [
        { p: 'La quantité de données qui quitte ton appareil dépend entièrement du fait que tu te connectes ou non. Les deux modes sont pleinement pris en charge : l’application fonctionne hors ligne et sans compte.' },
        { h3: 'Déconnecté (local uniquement)' },
        { p: 'Tout vit sur ton appareil : tes réponses de configuration, l’historique de lectures, la série, les points café et les préférences sont conservés dans le stockage local de l’application et n’atteignent jamais nos serveurs. Supprimer l’application supprime ces données. Les seules informations susceptibles de quitter ton appareil dans ce mode sont les données publicitaires, et uniquement si tu choisis de regarder une publicité récompensée.' },
        { h3: 'Connecté (synchronisation cloud et amis)' },
        { p: 'Se connecter avec Apple ou Google crée un compte sur notre backend, hébergé chez Supabase. Ton historique, tes réglages, tes tasses, tes points et ton activité sociale sont alors stockés sur nos serveurs afin de survivre à une réinstallation ou à un nouveau téléphone, et pour que les fonctions amis puissent fonctionner. Les sections ci-dessous décrivent exactement ce que cela comprend.' },
      ],
    },
    {
      id: 'collect',
      title: 'Informations que nous collectons',
      blocks: [
        { h3: '1. Informations de compte' },
        { p: 'Tu peux te connecter avec **Sign in with Apple** ou avec **Google**. Nous recevons un identifiant utilisateur et, selon ce que tu autorises, ton adresse e-mail et le nom figurant sur ton compte fournisseur. Nous ne recevons jamais ton mot de passe Apple ou Google.' },
        {
          ul: [
            'Si tu utilises la fonction Masquer mon adresse e-mail d’Apple, nous ne voyons que l’adresse relais générée par Apple — ce n’est pas un problème, tout fonctionne de la même façon.',
            'L’authentification est gérée par Supabase Auth. Les jetons de session sont stockés dans le trousseau sécurisé de ton appareil (iOS Keychain), pas dans le stockage ordinaire de l’application.',
          ],
        },
        { h3: '2. Ton profil et tes préférences' },
        {
          ul: [
            '**Nom affiché** — le nom que tu saisis lors de la configuration, visible par tes amis.',
            '**Avatar** — un identifiant et une couleur parmi huit visages dessinés prédéfinis. Turn the Cup ne permet aucun envoi de photo, nous ne recevons donc jamais d’image de toi.',
            '**Réponses de configuration** — les choix facultatifs d’humeur, d’énergie, de priorité de vie et de situation actuelle qui ajustent les lectures qui te sont proposées, ainsi que tes préférences de collection.',
            '**Langue** — anglais, espagnol, français ou ukrainien.',
            '**Horaires de notification** — les heures que tu définis, si tu actives les rappels.',
            '**Tasse équipée** — la tasse de collection que tu utilises actuellement.',
          ],
        },
        { h3: '3. Ton activité dans l’application' },
        {
          ul: [
            '**Historique de lectures** — quelle prédiction tu as reçue, quand, dans quelle tasse, et si tu l’as mise en favori.',
            '**Série et engagement** — compteur de série quotidienne, paliers atteints, état du jour.',
            '**Registre des points café** — chaque crédit et débit : bonus quotidiens, paliers de série, publicités récompensées, parrainages, packs achetés, et ce que tu as dépensé en tasses, envois et cadeaux.',
            '**Tasses possédées et achetées.**',
            '**Installations** — un enregistrement par appareil (un identifiant d’installation généré et la plateforme) pour que le même compte puisse se synchroniser entre tes appareils.',
            '**Compteurs d’usage** — heures d’ouverture de l’application, nombre de sessions quotidiennes et un journal plafonné d’événements internes (application ouverte, lecture générée, série atteinte, et similaires). Ils sont stockés dans les lignes de ton propre compte sur notre backend. Nous n’utilisons ni Google Analytics, ni Firebase Analytics, ni Amplitude, ni Mixpanel, ni aucun autre SDK d’analyse tiers.',
          ],
        },
        { h3: '4. Données sociales (uniquement si tu utilises les fonctions amis)' },
        {
          ul: [
            '**Amitiés** — avec qui tu es connecté.',
            '**Codes d’invitation** — le code que tu génères, et la trace du compte qui l’a utilisé, afin que les récompenses de parrainage puissent être versées.',
            '**Stories / partages** — une lecture que tu choisis de partager avec des amis, son texte, la tasse dans laquelle elle est apparue, et les réactions emoji que d’autres y laissent.',
            '**Prédictions envoyées** — quand tu envoies une prédiction à un ami, tu écris un court message (jusqu’à 280 caractères). Nous stockons ce texte, l’expéditeur, le destinataire, la tasse, et si le message a été lu.',
            '**Cadeaux** — l’objet envoyé, son prix, l’un des huit messages prédéfinis (nous stockons le numéro, pas du texte libre), et la date d’ouverture.',
            '**Blocages et signalements** — si tu bloques ou signales quelqu’un, nous stockons qui a bloqué ou signalé qui, ainsi que le motif que tu indiques, afin de pouvoir l’examiner.',
          ],
        },
        { h3: '5. Données techniques et de l’appareil' },
        {
          ul: [
            '**Jeton push** — un jeton push Expo ainsi que ta plateforme et ta langue, si tu autorises les notifications.',
            '**Identifiants publicitaires** — gérés par Google AdMob quand tu regardes une publicité récompensée. Voir [Publicité et consentement](#ads).',
            '**Reçus d’achat** — un identifiant de transaction et de produit transmis à RevenueCat pour vérification. Voir [Achats et points café](#purchases).',
            '**Journaux serveur** — notre hébergeur enregistre les métadonnées de requête habituelles (adresse IP, horodatage, point de terminaison) à des fins de sécurité et de prévention des abus.',
          ],
        },
        { h3: '6. Informations que tu nous envoies directement' },
        { p: 'Si tu utilises le [formulaire de contact](/contact) de ce site ou que tu nous écris, nous recevons ton nom, ton adresse e-mail et ce que tu rédiges, et nous les conservons aussi longtemps que nécessaire pour traiter ta demande.' },
      ],
    },
    {
      id: 'not-collected',
      title: 'Ce que nous ne collectons jamais',
      blocks: [
        { p: 'Turn the Cup ne demande, ne collecte et ne conserve pas :' },
        {
          ul: [
            'Ta localisation précise ou approximative',
            'Tes contacts, ton calendrier, tes photos, ton appareil photo ou ton micro',
            'Des données de santé, de forme physique ou biométriques',
            'Des numéros de carte bancaire ou des coordonnées bancaires — Apple gère tous les paiements',
            'Ta date de naissance, ton adresse postale ou ton numéro de téléphone',
            'Aucune photo envoyée ni photo de profil (les avatars sont uniquement des dessins prédéfinis)',
          ],
        },
      ],
    },
    {
      id: 'use',
      title: 'Comment nous utilisons les informations',
      blocks: [
        { p: 'Nous utilisons tes informations uniquement aux fins ci-dessous. Lorsque le RGPD s’applique, la base légale de chaque finalité est indiquée.' },
        {
          table: {
            head: ['Finalité', 'Données utilisées', 'Base légale (RGPD)'],
            rows: [
              ['Faire fonctionner l’application et choisir ta lecture du jour', 'Réponses de configuration, préférences, historique, série', 'Exécution d’un contrat'],
              ['Synchroniser tes données entre appareils', 'ID de compte, profil, historique, réglages, installations', 'Exécution d’un contrat'],
              ['Amis, stories, envois et cadeaux', 'Les données sociales listées ci-dessus', 'Exécution d’un contrat (tu choisis de l’utiliser)'],
              ['Points café, achats et prévention de la fraude', 'Registre des points, ID de transaction et de produit', 'Contrat ; intérêt légitime à prévenir les abus'],
              ['Envoyer des notifications push', 'Jeton push, plateforme, langue', 'Consentement (autorisation de l’appareil)'],
              ['Afficher des publicités récompensées', 'Identifiants publicitaires, interaction publicitaire', 'Consentement dans l’EEE/Royaume-Uni/Suisse ; intérêt légitime ailleurs'],
              ['Garder le service sûr — blocages, signalements, modération', 'Signalements, blocages, ID de comptes concernés', 'Intérêt légitime ; obligation légale'],
              ['Améliorer l’application', 'Compteurs d’usage agrégés', 'Intérêt légitime'],
              ['Répondre à tes messages d’assistance', 'Ce que tu nous envoies', 'Intérêt légitime'],
            ],
          },
        },
        { p: 'Nous ne vendons pas tes informations personnelles et nous n’utilisons pas tes données pour constituer nous-mêmes des profils publicitaires.' },
      ],
    },
    {
      id: 'social',
      title: 'Ce que les autres peuvent voir',
      blocks: [
        { p: 'Turn the Cup n’a ni profils publics ni découverte. Personne ne peut te trouver par nom, e-mail ou numéro de téléphone — les connexions se font uniquement en partageant un code d’invitation. Une fois que vous êtes amis, cette personne peut voir :' },
        {
          ul: [
            'Ton nom affiché et ton avatar prédéfini',
            'Les lectures que tu partages délibérément en story, et l’illustration de tasse qui les entoure',
            'Les prédictions que tu lui envoies, y compris le message que tu écris',
            'Les cadeaux que tu lui envoies',
            'Ton étagère à cadeaux, là où l’application l’affiche',
          ],
        },
        { p: 'Tes amis ne voient jamais ton historique, tes favoris, ta série, ton solde de points, tes réponses de configuration ni ton adresse e-mail. Les notifications push relatives à un envoi nomment l’expéditeur mais ne contiennent jamais le texte du message ; les notifications de cadeau nomment l’expéditeur mais jamais l’objet.' },
        { p: 'Tu peux bloquer quelqu’un à tout moment depuis son profil, ce qui interrompt toute interaction entre vous, et tu peux signaler un contenu ou un comportement pour examen. Consulte les [Conditions d’utilisation](/terms) pour nos règles de contenu.' },
      ],
    },
    {
      id: 'sharing',
      title: 'Avec qui nous partageons les données',
      blocks: [
        { p: 'Nous ne vendons, ne louons ni n’échangeons tes informations personnelles. Nous faisons appel à un petit nombre de prestataires pour faire fonctionner l’application, chacun ne traitant que ce que sa fonction exige :' },
        {
          table: {
            head: ['Prestataire', 'Rôle', 'Politique de confidentialité'],
            rows: [
              ['Supabase', 'Base de données, authentification, stockage et fonctions serveur', '[supabase.com/privacy](https://supabase.com/privacy)'],
              ['Apple', 'Sign in with Apple, distribution App Store, achats intégrés, remise des notifications', '[apple.com/legal/privacy](https://www.apple.com/legal/privacy/)'],
              ['Google', 'Google Sign-In', '[policies.google.com/privacy](https://policies.google.com/privacy)'],
              ['Google AdMob', 'Publicités vidéo récompensées et gestion du consentement', '[policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)'],
              ['RevenueCat', 'Vérification des reçus d’achats intégrés', '[revenuecat.com/privacy](https://www.revenuecat.com/privacy)'],
              ['Expo', 'Remise des notifications push et compilations de l’application', '[expo.dev/privacy](https://expo.dev/privacy)'],
              ['Resend', 'Acheminement des messages envoyés via le formulaire de contact de ce site', '[resend.com/legal/privacy-policy](https://resend.com/legal/privacy-policy)'],
            ],
          },
        },
        { p: 'Nous pouvons également divulguer des informations si la loi nous y oblige, ou lorsque cela est nécessaire pour enquêter sur des abus, faire respecter nos [Conditions d’utilisation](/terms), ou protéger les droits et la sécurité de nos utilisateurs. Si l’application était un jour transférée à un autre propriétaire, tes données pourraient l’accompagner, et nous l’indiquerions ici avant que cela ne prenne effet.' },
      ],
    },
    {
      id: 'ads',
      title: 'Publicité et consentement',
      blocks: [
        { p: 'Turn the Cup affiche **uniquement des publicités vidéo récompensées**, fournies par Google AdMob. Il n’y a ni bannières, ni interstitiels, ni publicités qui apparaissent d’elles-mêmes. Une publicité ne se lance que lorsque tu appuies pour la regarder en échange de points café, jusqu’à cinq par jour.' },
        { h3: 'Ce que reçoit AdMob' },
        {
          ul: [
            'L’identifiant publicitaire de ton appareil (l’IDFA)',
            'L’adresse IP et des informations sur l’appareil telles que le modèle et la version du système',
            'Des données d’interaction — le fait qu’une publicité a été demandée, affichée et terminée',
          ],
        },
        { p: 'L’utilisation de ces informations par Google est régie par la [Politique de confidentialité publicitaire de Google](https://policies.google.com/technologies/ads). Pour nous assurer qu’une récompense est authentique, nous transmettons aussi à AdMob un nombre aléatoire à usage unique, que Google renvoie à notre serveur dans un rappel de vérification signé. Il ne contient aucune information personnelle te concernant.' },
        { h3: 'Consentement dans l’EEE, au Royaume-Uni et en Suisse (RGPD)' },
        { p: 'Avant toute demande de publicité, l’application présente le formulaire de consentement certifié de Google (la User Messaging Platform, ou UMP), comme l’exigent le RGPD et la politique de consentement des utilisateurs de l’UE de Google. Ton choix est enregistré sur ton appareil.' },
        {
          ul: [
            'Si tu consens, des publicités personnalisées peuvent t’être présentées.',
            'Si tu refuses, ou si aucun consentement n’a été enregistré, l’application demande **uniquement des publicités non personnalisées**.',
            'Si tu n’autorises pas du tout les publicités, la fonction de publicité récompensée ne s’exécute simplement pas. Rien d’autre dans Turn the Cup n’en est affecté — les publicités ne sont jamais nécessaires pour utiliser l’application.',
          ],
        },
        { p: 'Tu peux retirer ton consentement à tout moment en réinitialisant ton identifiant publicitaire dans les réglages de ton appareil, ou en nous écrivant à [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) — nous nous en chargerons.' },
        { h3: 'App Tracking Transparency (iOS)' },
        { p: 'Sur iOS, le système demande ton autorisation avant qu’un identifiant de suivi puisse être utilisé à des fins publicitaires. Si tu refuses, les publicités sont non personnalisées. Tu peux modifier ce choix à tout moment dans **Réglages → Confidentialité et sécurité → Suivi**.' },
        { h3: 'Options de refus au niveau de l’appareil' },
        { ul: ['**iOS :** Réglages → Confidentialité et sécurité → Publicité Apple → Annonces personnalisées'] },
        { p: 'Tu verras toujours des publicités récompensées si tu choisis de les regarder ; elles seront simplement moins pertinentes.' },
      ],
    },
    {
      id: 'purchases',
      title: 'Achats et points café',
      blocks: [
        { p: 'Les points café sont une monnaie virtuelle interne à l’application. Tu les gagnes en l’utilisant — bonus quotidien, paliers de série, parrainages et publicités récompensées — et tu peux aussi acheter des packs de points.' },
        { p: '**Tous les paiements sont traités par Apple.** Nous ne voyons ni ne stockons jamais ton numéro de carte, ton adresse de facturation ou une quelconque donnée de paiement. Lorsqu’un achat aboutit, l’App Store transmet à l’application un identifiant de transaction et de produit, que nous communiquons à RevenueCat et à notre serveur pour vérifier l’authenticité du reçu et créditer le bon nombre de points. Ton solde de points et son historique complet vivent dans ton compte sur notre backend.' },
        { p: 'Les points café n’ont aucune valeur monétaire, ne peuvent pas être échangés contre de l’argent et ne peuvent pas être transférés hors de l’application. Les remboursements sont gérés par Apple selon ses propres règles — voir les [Conditions d’utilisation](/terms).' },
      ],
    },
    {
      id: 'notifications',
      title: 'Notifications push',
      blocks: [
        { p: 'Les notifications sont facultatives et désactivées tant que tu ne les autorises pas. Si tu le fais, nous stockons un jeton push Expo pour ton appareil ainsi que ta plateforme et ta langue, afin que les messages arrivent dans la bonne langue. La remise passe par le service push d’Expo vers le service de notifications push d’Apple.' },
        { p: 'Nous utilisons les notifications pour tes propres rappels, et pour te prévenir quand un ami t’envoie une prédiction ou un cadeau. Nous ne les utilisons jamais à des fins publicitaires.' },
        { p: 'Tu peux les désactiver à tout moment dans les réglages de l’application ou de ton appareil. Les désactiver dans les réglages de l’appareil interrompt la remise immédiatement ; nous supprimons le jeton stocké lorsque tu te déconnectes ou supprimes ton compte.' },
      ],
    },
    {
      id: 'transfers',
      title: 'Transferts internationaux',
      blocks: [
        { p: 'Turn the Cup est disponible dans le monde entier et nos prestataires opèrent à l’échelle mondiale. Tes données peuvent donc être traitées dans des pays autres que le tien, y compris aux États-Unis.' },
        { p: 'Lorsque des données sont transférées hors de l’EEE, du Royaume-Uni ou de la Suisse, nos prestataires s’appuient sur les clauses contractuelles types de la Commission européenne, sur l’addendum britannique de transfert international de données, ou sur une décision d’adéquation, comme indiqué dans leur propre documentation de confidentialité liée dans [Avec qui nous partageons les données](#sharing).' },
      ],
    },
    {
      id: 'retention',
      title: 'Durée de conservation',
      blocks: [
        {
          table: {
            head: ['Données', 'Conservation'],
            rows: [
              ['Données locales de l’appareil (déconnecté)', 'Jusqu’à ce que tu effaces les données de l’application ou la désinstalles'],
              ['Compte, profil, historique, points et tasses', 'Jusqu’à la suppression de ton compte'],
              ['Stories et partages', 'Jusqu’à ce que tu les retires ou supprimes ton compte'],
              ['Prédictions envoyées et cadeaux', 'Conservés pour l’expéditeur et le destinataire jusqu’à ce que l’un des deux supprime son compte'],
              ['Compteurs d’usage', 'Plafonnés aux 1 000 événements les plus récents par compte'],
              ['Jetons push', 'Supprimés à la déconnexion, à la désactivation des notifications ou à la suppression du compte'],
              ['Signalements et blocages', 'Jusqu’à 12 mois après examen, pour la sécurité et la détection des abus répétés'],
              ['Enregistrements d’achat', 'Aussi longtemps que l’exigent la fiscalité, la comptabilité et le traitement des litiges'],
              ['E-mails d’assistance', 'Jusqu’à 24 mois après la résolution de ta demande'],
            ],
          },
        },
      ],
    },
    {
      id: 'security',
      title: 'Sécurité',
      blocks: [
        {
          ul: [
            'Tout le trafic entre l’application et nos serveurs utilise le chiffrement TLS.',
            'Chaque table de notre backend est protégée par des politiques de sécurité au niveau des lignes, de sorte qu’un compte ne peut lire et écrire que ses propres lignes. Les points, les prix et les achats sont décidés par le serveur, jamais sur la foi du client.',
            'Les sessions d’authentification sont stockées dans le trousseau de l’appareil, pas dans le stockage ordinaire de l’application.',
            'Les données de paiement ne nous parviennent jamais — c’est Apple qui les détient.',
          ],
        },
        { p: 'Aucun système n’est parfaitement sûr et nous ne pouvons garantir une sécurité absolue. Si nous avions connaissance d’une violation affectant tes données personnelles, nous t’en informerions, ainsi que l’autorité de contrôle compétente, comme la loi l’exige.' },
      ],
    },
    {
      id: 'rights',
      title: 'Tes droits',
      blocks: [
        { h3: 'Si tu es dans l’EEE, au Royaume-Uni ou en Suisse (RGPD)' },
        { p: 'Tu as le droit de :' },
        {
          ul: [
            'Accéder aux données personnelles que nous détenons sur toi et en recevoir une copie',
            'Faire rectifier des données inexactes',
            'Faire effacer tes données',
            'Limiter certains traitements ou t’y opposer, y compris ceux fondés sur l’intérêt légitime',
            'Recevoir tes données dans un format portable et lisible par machine',
            'Retirer ton consentement à tout moment, sans que cela n’affecte le traitement déjà effectué',
            'Introduire une réclamation auprès de ton autorité locale de protection des données',
          ],
        },
        { h3: 'Si tu es en Californie (CCPA/CPRA)' },
        { p: 'Tu as le droit de savoir ce que nous collectons, d’en obtenir la suppression, d’en obtenir la correction, et de ne pas subir de discrimination pour avoir exercé ces droits.' },
        { p: '**Nous ne vendons pas d’informations personnelles** et nous ne les partageons pas à des fins de publicité comportementale inter-contextes, en dehors du choix de consentement AdMob décrit dans [Publicité et consentement](#ads), que tu contrôles. Refuser le consentement ou désactiver ton identifiant publicitaire constitue ton opposition.' },
        { h3: 'Comment les exercer' },
        { p: 'L’essentiel est à un geste — voir [Supprimer tes données](#deletion). Pour tout le reste, écris à [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) depuis l’adresse de ton compte, ou utilise le [formulaire de contact](/contact). Nous répondons sous 30 jours, et c’est gratuit.' },
      ],
    },
    {
      id: 'deletion',
      title: 'Supprimer tes données',
      blocks: [
        { h3: 'Depuis l’application' },
        { p: 'Ouvre **Réglages → Supprimer le compte** et confirme. Cela retire immédiatement de nos serveurs ton profil, ton historique de lectures, tes données de série et d’engagement, tes réglages, tes compteurs d’usage, tes installations d’appareil et tes jetons push, efface tout ce qui est conservé localement sur l’appareil, et te déconnecte.' },
        { h3: 'Achever l’effacement' },
        { p: 'Ton enregistrement d’authentification sous-jacent et tes enregistrements sociaux — amitiés, invitations utilisées, stories, prédictions envoyées et cadeaux — sont supprimés par nous dans le cadre d’un effacement complet du compte. Écris à [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) depuis l’adresse de ton compte et nous le finaliserons sous 30 jours, avec confirmation une fois terminé.' },
        { h3: 'Sans compte' },
        { p: 'Si tu ne t’es jamais connecté, désinstaller l’application supprime tout, car rien n’a jamais été stocké ailleurs.' },
        { h3: 'Ce qui peut subsister' },
        { p: 'Nous conservons le minimum requis pour des raisons légales : les enregistrements d’achat exigés à des fins fiscales et comptables, et les signalements déposés pour des abus graves. Le contenu que tu as envoyé à une autre personne — une prédiction ou un cadeau qu’elle a reçu — reste dans sa copie, comme dans n’importe quelle application de messagerie.' },
      ],
    },
    {
      id: 'children',
      title: 'Confidentialité des mineurs',
      blocks: [
        { p: 'Turn the Cup ne s’adresse pas aux enfants. Tu dois avoir au moins 13 ans pour l’utiliser, et au moins 16 ans dans les pays où 16 ans est l’âge minimum du consentement au traitement des données, sauf si un parent ou tuteur consent en ton nom.' },
        { p: 'Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants en dessous de ces âges. Si tu penses qu’un enfant nous a fourni des informations personnelles, écris-nous et nous supprimerons rapidement le compte et ses données.' },
      ],
    },
    {
      id: 'changes',
      title: 'Modifications de cette politique',
      blocks: [
        { p: 'Nous mettons cette politique à jour quand l’application évolue. La date de « dernière mise à jour » en haut de page reflète toujours la version en vigueur. En cas de modification substantielle, nous préviendrons dans l’application avant son entrée en vigueur. Continuer à utiliser Turn the Cup après une modification vaut acceptation de la politique mise à jour.' },
      ],
    },
    {
      id: 'contact',
      title: 'Nous contacter',
      blocks: [
        { p: 'Des questions sur cette politique, une demande relative à tes données, ou autre chose :' },
        {
          ul: [
            '**E-mail :** [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com)',
            '**Formulaire d’assistance :** [Contacter l’assistance](/contact)',
          ],
        },
        { p: 'Nous répondons généralement sous 24–48 heures, et toujours sous 30 jours pour les demandes relatives à la confidentialité.' },
      ],
    },
  ],
}

export default privacyFr
