// ============================================================
//  SESSION.JS — Les Ruines Oubliées
//  Quête pour 4 joueurs niveau 2 — environ 2 heures
//  Modifie ce fichier avant chaque session.
// ============================================================

const SESSION = {
  title: "Les Ruines Oubliées",
  scenes: [

    // ── SCÈNE 1 ─────────────────────────────────────────────
    {
      name: "L'Entrée des Ruines",
      type: "Exploration · Installation de l'ambiance",
      emoji: "🪨",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      description: "Une ouverture béante s'est formée dans la terre. Des marches anciennes descendent dans l'obscurité. L'air est froid, lourd, immobile. Les murs sont couverts de poussière et de gravures presque effacées.",
      ambiance: [
        "🌑 Obscurité totale en bas",
        "❄️ Air froid et immobile",
        "🤫 Silence anormal",
        "🪨 Pierre fraîchement brisée",
        "✍️ Gravures presque effacées"
      ],
      sensory: "Sons : le vent du dehors s'arrête net à l'entrée. Vos pas résonnent trop fort.\nOdeurs : pierre humide, renfermé de siècles, une légère odeur métallique indéfinissable.\nDétails visuels : la poussière au sol a été déplacée récemment. Certains symboles sur les murs ressemblent à des chaînes ou des cadenas stylisés. Les cassures dans la pierre sont nettes — c'est bien le séisme qui a ouvert ceci.",
      dm_notes: "Tests possibles : Perception DC 10 (poussière déplacée) · Investigation DC 12 (symboles de scellement) · Histoire/Religion DC 13 (sanctuaire défensif, pas un temple). Ne pas bloquer ici — l'important est d'installer la tension.",
      monsters: []
    },

    // ── SCÈNE 2 ─────────────────────────────────────────────
    {
      name: "La Salle aux Dalles Piégées",
      type: "Piège environnemental · Pas de combat",
      emoji: "⚠️",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
      description: "Le sol est composé de dalles de pierre fissurées. Certaines sont légèrement enfoncées. Des os brisés sont visibles dans les interstices. Le plafond est bas et le silence amplifie chaque pas.",
      ambiance: [
        "💀 Ossements dans les fissures",
        "👣 Chaque pas résonne",
        "🔩 Dalles légèrement enfoncées",
        "🕯️ Plafond bas et oppressant",
        "⚠️ Danger sous les pieds"
      ],
      sensory: "Sons : craquements sous les pieds, écho de chaque mouvement, le silence entre les pas.\nOdeurs : poussière ancienne, os séchés, humidité froide.\nDétails visuels : certaines dalles ont des bords légèrement soulevés. Les ossements dans les interstices suggèrent que d'autres ont tenté de traverser. Une corde accrochée à un crampons dans le mur — quelqu'un a peut-être réussi autrefois.",
      dm_notes: "Mauvais pas : 1d6 dégâts · DEX DC 12 pour éviter de tomber. Perception DC 12 (dalles dangereuses) · Investigation DC 12 (système de pression) · Acrobaties DC 12 (traversée rapide) · Survie DC 10 (lire les traces). Ne pas en faire un mur — 1-2 erreurs suffisent pour enseigner que l'environnement est interactif.",
      monsters: []
    },

    // ── SCÈNE 3 ─────────────────────────────────────────────
    {
      name: "Le Tribunal des Mensonges",
      type: "Énigme logique · Épreuve de jugement",
      emoji: "⚖️",
      image: "https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=1200&q=80",
      description: "Salle carrée, presque cérémonielle. Les murs sont lisses. Quatre statues vous observent. Une voix ancienne résonne : « Trois mentent. Une seule dit la vérité. »",
      ambiance: [
        "🗿 Quatre statues qui observent",
        "🔒 Porte de sortie fermée",
        "🌫️ Air immobile et pesant",
        "⚡ Magie punitive en attente",
        "📜 Inscriptions sur chaque statue"
      ],
      sensory: "Sons : la voix ancienne résonne sans source visible. Silence parfait après.\nOdeurs : pierre sèche, absence d'humidité — cet endroit semble hors du temps.\nInscriptions des statues :\n• Roi : « Le prêtre ment. »\n• Prêtre : « Le guerrier dit la vérité. »\n• Guerrier : « Le roi et le prêtre disent des choses différentes. »\n• Créature : « Je dis la vérité. »\n\n✅ RÉPONSE : Le Guerrier (la seule option logiquement cohérente).",
      dm_notes: "Mauvaise réponse : 1d4 dégâts à tous, la voix répète. Après 2 erreurs : le plafond tremble, gravats, lueur rouge.\nIndices : 1) 'Une seule affirmation peut être vraie.' 2) 'Supposez qu'une statue dit vrai, vérifiez les autres.' 3) 'Si une hypothèse crée deux vérités, elle est impossible.'\nOmbres mineures possibles après 2-3 mauvaises réponses (voir tracker DM).",
      monsters: [
        {
          name: "Ombre Mineure du Sceau",
          type: "Résidu magique (optionnel)",
          cr: "1/8",
          count: 3,
          emoji: "👤",
          image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
          appearance: "Des fragments d'ombre se détachent des statues et rampent sur le sol avant de prendre une forme humanoïde vacillante. Elles ne parlent pas. Elles avancent."
        }
      ]
    },

    // ── SCÈNE 4 ─────────────────────────────────────────────
    {
      name: "La Salle des Regards Convergents",
      type: "Énigme coopérative · Épreuve de coordination",
      emoji: "🔮",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1200&q=80",
      description: "Salle circulaire. Trois statues disposées autour de la pièce, chacune avec une tête pivotante. Au sol, trois cercles gravés émettent une faible lueur. Une voix dit : « Seuls ceux qui voient ensemble ouvrent le passage. »",
      ambiance: [
        "💡 Cercles lumineux au sol",
        "🔄 Têtes de statues pivotantes",
        "🚪 Porte sans poignée au fond",
        "🌀 Rayons de lumière projetés",
        "🤝 Coopération obligatoire"
      ],
      sensory: "Sons : un bourdonnement faible quand une statue s'active. Les rayons font un son cristallin en se croisant.\nOdeurs : ozone, comme avant un orage. L'air est chargé de magie.\nMécanique : marcher sur un cercle active une statue → elle projette un rayon. Les statues pivotent. Les trois rayons doivent converger vers la porte. Un seul joueur ne peut pas tout activer simultanément.",
      dm_notes: "Rayon mal orienté : 1d6 dégâts, statue revient à sa position. Perception DC 10 (têtes mobiles) · Investigation DC 12 (lien cercle/statue) · Arcane DC 12 (rayons réactifs) · Force DC 10 (statue bloquée) · DEX DC 12 (éviter un rayon).\nIndices : 'Les rayons vibrent quand ils se croisent.' / 'Trois statues doivent regarder le même endroit.' / 'La porte s'ouvre à un alignement, pas une clé.'\nRésolution : les trois faisceaux convergent — les gravures s'illuminent une à une — la pierre gronde et s'ouvre lentement.",
      monsters: []
    },

    // ── SCÈNE 5 ─────────────────────────────────────────────
    {
      name: "Le Sanctuaire du Sceau",
      type: "Découverte · Climax narratif",
      emoji: "⛓️",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80",
      description: "Grande salle circulaire. Au centre, un cercle de pierre gravé de chaînes et de runes. Des chaînes spectrales convergent vers une forme instable. L'air est chargé d'électricité magique. Une lumière faible pulse au rythme d'un battement lent.",
      ambiance: [
        "⛓️ Chaînes spectrales qui vibrent",
        "⚡ Électricité magique dans l'air",
        "💙 Lumière bleue qui pulse",
        "🌫️ Brume froide au sol",
        "💥 Murs fissurés qui tremblent"
      ],
      sensory: "Sons : le bourdonnement des chaînes. Un battement lent, presque organique, venant du centre.\nOdeurs : ozone intense, brûlé, quelque chose d'ancien et de froid.\n\n📖 À LIRE OU PARAPHRASER :\n« Les chaînes au centre de la salle vibrent. Une silhouette commence à se former, incomplète, comme si elle était faite d'ombre, de poussière et de magie brisée. »\n« Une voix déformée murmure : Le sceau… est brisé… Vous auriez dû… laisser dormir ce qui était enchaîné. »",
      dm_notes: "C'est le moment de mise en scène. Prends ton temps. Utilise les trois leviers : silence, vibration, lumière instable. Le combat commence au tour suivant.",
      monsters: [
        {
          name: "Le Gardien Enchaîné",
          type: "Entité ancienne partiellement libérée",
          cr: "2",
          count: 1,
          emoji: "👻",
          image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80",
          appearance: "Une silhouette incomplète faite d'ombre et de magie brisée. Des fragments de chaînes orbitent autour de sa forme instable. Ses contours changent constamment — parfois humanoïde, parfois autre chose. Ses yeux, s'il en a, sont deux points de lumière froide."
        }
      ]
    },

    // ── SCÈNE 6 ─────────────────────────────────────────────
    {
      name: "Combat — Le Gardien Enchaîné",
      type: "Combat final · Boss",
      emoji: "⚔️",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
      description: "Le Gardien se forme pleinement. Le combat commence. Les chaînes du sceau vibrent à chaque coup reçu. À 50% de PV, une chaîne se brise — la salle devient instable.",
      ambiance: [
        "💙 Lumière bleue instable",
        "⛓️ Chaînes qui se brisent",
        "🌑 Ombre qui s'étend",
        "💥 Pierres qui tombent",
        "⏰ Sentiment d'urgence"
      ],
      sensory: "Sons : grondement profond à chaque attaque du Gardien. Craquements des murs. Le battement s'accélère.\nOdeurs : soufre, magie brûlée, froid intense.\n\n⚔️ STATISTIQUES DE COMBAT (voir tracker DM) :\n• PV : 45 · CA : 13 · Vitesse : 9 m\n• Frappe corrompue : +4 · 1d8+2 (nécrotique)\n• Onde instable (5-6) : tous à 3 m, DEX DC 12, 2d6 ou moitié\n• Phase 50% PV : avantage une attaque sur deux",
      dm_notes: "Stratégie simple : Tour 1 frappe · Tour 2 frappe · Tour 3 onde si disponible · puis alternance. Trop difficile → baisse à 1d6+2, onde une seule fois. Trop facile → +5-10 PV, pierres qui tombent (DEX DC 12, 1d6).",
      monsters: [
        {
          name: "Le Gardien Enchaîné",
          type: "Entité ancienne — Boss",
          cr: "2",
          count: 1,
          emoji: "👻",
          image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80",
          appearance: "Sa forme devient plus solide à mesure que le combat avance — et plus terrifiante. Les fragments de chaînes tournent autour de lui comme des satellites. Chaque coup qu'il reçoit libère une brève lumière bleue, comme si quelque chose en lui résistait encore."
        }
      ]
    },

    // ── SCÈNE 7 ─────────────────────────────────────────────
    {
      name: "Récompense & Amorce",
      type: "Dénouement · Hook de campagne",
      emoji: "✨",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
      description: "Le Gardien se dissout dans un souffle d'énergie froide. Le silence revient. Au centre du sceau brisé, quelque chose brille faiblement dans les gravures. La ruine tient encore — mais plus pour longtemps.",
      ambiance: [
        "✨ Lumière bleue apaisée",
        "🌬️ Souffle d'air frais",
        "🔇 Silence après la tempête",
        "🔍 Quelque chose à découvrir",
        "❓ Des questions sans réponse"
      ],
      sensory: "Sons : le battement s'est arrêté. Seul le goutte-à-goutte de l'eau reprend doucement.\nOdeurs : l'ozone se dissipe, laissant une odeur propre, presque végétale.\n\n🎁 RÉCOMPENSES AU CHOIX :\n• Anneau du Sceau Mineur : 1×/jour, +1 à un jet de sauvegarde ou compétence\n• Fragment d'Entrave : chaîne noire froide traversée de lumière bleue — réagit aux ruines anciennes\n• Pierre de Résonance : pulse près d'une faille magique, murmure parfois des mots anciens\n• Or : 25-50 po par joueur + quelques gemmes\n\n🪝 SECRETS À DISTILLER PLUS TARD :\n• Le Gardien n'était pas le prisonnier — il était le geôlier.\n• L'objet récupéré est peut-être une clé, pas une récompense.\n• Le tremblement de terre n'était pas naturel.\n• D'autres ruines des Veilleurs du Sceau existent ailleurs.",
      dm_notes: "Laisse les joueurs explorer et poser des questions. Ne révèle pas tous les secrets. L'objet récupéré peut devenir le fil conducteur de la prochaine session. Phrase de clôture possible : 'Alors que vous remontez vers la surface, vous remarquez que le ciel au-dessus du trou s'est chargé de nuages. Au loin, un second tremblement — léger, mais réel.'",
      monsters: []
    }

  ] // fin scenes
}; // fin SESSION
