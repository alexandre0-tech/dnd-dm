// ============================================================
//  SESSION.JS — Les Ruines Oubliées v2
//  Campagne Caelthari · Acte I, Quête 1
//  4 joueurs niveau 2 · environ 2h30
// ============================================================

const SESSION = {
  title: "Les Ruines Oubliées",
  subtitle: "Acte I — Quête 1",
  scenes: [

    // ── SCÈNE 1 ─────────────────────────────────────────────
    {
      name: "L'Entrée des Ruines",
      type: "Exploration · Installation de l'ambiance",
      emoji: "🪨",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      description: "Une ouverture béante s'est formée dans la terre. Des marches de pierre noire descendent dans l'obscurité. L'air qui monte de là est froid — pas comme une cave, comme quelque chose qui n'a pas respiré depuis très longtemps. Les murs sont couverts de gravures presque effacées. Pas des décorations. Des symboles.",
      ambiance: [
        "❄️ Air froid et immobile",
        "🤫 Silence anormal",
        "⛓️ Symboles de chaînes sur les murs",
        "🪨 Pierre fraîchement brisée",
        "👣 Poussière déplacée de l'intérieur"
      ],
      sensory: "Sons : le vent du dehors s'arrête net à l'entrée. Vos pas résonnent trop fort dans le silence.\nOdeurs : pierre humide, renfermé de siècles, une légère odeur métallique indéfinissable.\nDétails : les gravures sur les murs représentent des chaînes, des cercles concentriques, des silhouettes encadrées — rien qui ressemble à une écriture connue. La poussière au sol a été déplacée de l'intérieur vers l'extérieur.",
      monsters: []
    },

    // ── SCÈNE 2 ─────────────────────────────────────────────
    {
      name: "Le Couloir des Souffles",
      type: "Piège environnemental · Pas de combat",
      emoji: "💨",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
      description: "Le couloir devant vous est long — une vingtaine de mètres. Les murs de chaque côté sont criblés de petits trous ronds, régulièrement espacés, à différentes hauteurs. Le sol est propre. Trop propre. Comme si personne n'avait jamais réussi à le traverser.",
      ambiance: [
        "💨 Jets d'air imprévisibles",
        "🕳️ Trous dans les murs des deux côtés",
        "🧹 Sol anormalement propre",
        "⚠️ Mécanisme Caelthari encore actif",
        "👁️ Observer avant d'agir"
      ],
      sensory: "Sons : des sifflements brefs et imprévisibles. L'air se déplace brusquement sans avertissement.\nOdeurs : air comprimé, pierre sèche, quelque chose de mécanique et d'ancien.\nMécanique : jets d'air par segments de 5 m. Lancer 1d6 par segment — 1-2 : jet puissant (FOR DC 12 ou 1d6 dégâts + tombe à terre) · 3-4 : jet faible (DEX DC 10 ou action bonus perdue) · 5-6 : libre.\nRéduire les risques : Perception DC 12 (repérer un rythme → avantage) · avancer accroupi · courir (plus vite mais désavantage) · bouclier (+2 aux jets).",
      monsters: []
    },

    // ── SCÈNE 3 ─────────────────────────────────────────────
    {
      name: "Le Tribunal des Mensonges",
      type: "Combat + Énigme logique · Épreuve de jugement",
      emoji: "⚖️",
      image: "https://images.unsplash.com/photo-1604076913837-52ab5629fde9?w=1200&q=80",
      description: "La salle est carrée, haute de plafond. Quatre statues font face à la porte — deux guerriers en armure ancienne gravée de runes dorées, et deux silhouettes en robes en lambeaux dont les crânes émettent une faible lumière intérieure. Alors que vous entrez, leurs yeux s'allument simultanément.",
      ambiance: [
        "💀 Gardiens Caelthari qui s'éveillent",
        "🟡 Runes dorées sur les os",
        "💙 Crânes illuminés de l'intérieur",
        "⚖️ Quatre statues qui observent",
        "🔒 Porte de sortie fermée après le combat"
      ],
      sensory: "Sons : un bourdonnement sourd quand les gardiens s'activent. Le cliquetis mécanique de leurs mouvements.\nOdeurs : ozone, magie ancienne, quelque chose de brûlé.\n\n⚔️ PHASE 1 — COMBAT (4 squelettes Caelthari) :\n• 2 Guerriers (CA 14, PV 18) : Épée ancienne +4 / 1d8+2 · Frappe runique 1×/combat 2d6+2\n• 2 Mages (CA 12, PV 13) : Projectile magique 2d4+2 auto · Entrave runique recharge 5-6 DEX DC 13\nTactique : guerriers avancent, mages restent à distance et ciblent les lanceurs de sorts.\n\n⚖️ PHASE 2 — ÉNIGME (après le combat) :\nVoix : « Trois mentent. Une seule dit la vérité. »\n• Roi : « Le prêtre ment. »\n• Prêtre : « Le guerrier dit la vérité. »\n• Guerrier : « Le roi et le prêtre disent des choses différentes. »\n• Créature : « Je dis la vérité. »\n✅ RÉPONSE : Le Guerrier — toucher son socle pour valider.\nMauvaise réponse : 1d4 dégâts à tous.",
      monsters: [
        {
          name: "Squelette Guerrier Caelthari",
          type: "Gardien enchanté — Offensif",
          cr: "1/2",
          count: 2,
          emoji: "💀",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
          appearance: "Armure de plaque ancienne, fragmentée mais imposante. Des runes dorées gravées directement dans les os. Mouvement mécanique et précis, sans hésitation ni émotion."
        },
        {
          name: "Squelette Mage Caelthari",
          type: "Gardien enchanté — Contrôle",
          cr: "1/2",
          count: 2,
          emoji: "🧙",
          image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
          appearance: "Robes en lambeaux flottant légèrement sans raison apparente. Crâne traversé d'une lumière bleue froide depuis l'intérieur. Leurs mains projettent des éclairs de lumière concentrée."
        }
      ]
    },

    // ── SCÈNE 4 ─────────────────────────────────────────────
    {
      name: "La Salle du Miroir",
      type: "Énigme coopérative · Coordination et communication",
      emoji: "🪞",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1200&q=80",
      description: "Vous entrez dans une salle circulaire. Le sol est lisse, les murs couverts de mécanismes gravés — des leviers, des symboles rotatifs, des plaques métalliques. Puis, sans avertissement, une paroi de cristal translucide jaillit du sol au centre de la salle. Du sol au plafond. Divisant la pièce en deux. Vous pouvez vous voir à travers. Vous ne pouvez pas vous toucher.",
      ambiance: [
        "🪞 Vitre de cristal qui divise le groupe",
        "⚙️ Mécanismes sur chaque mur",
        "👥 Deux groupes séparés",
        "⚡ Décharge si mauvaise synchronisation",
        "🤝 Coordination verbale obligatoire"
      ],
      sensory: "Sons : le choc sourd de la vitre qui jaillit du sol. Le bourdonnement des mécanismes qui s'activent.\nOdeurs : cristal chaud, magie en suspension, air statique.\nMécanique : la vitre divise le groupe selon leur position au moment où le dernier pied entre. Les mécanismes d'un côté contrôlent les effets du côté OPPOSÉ. Les deux groupes doivent activer leurs mécanismes SIMULTANÉMENT pour aligner les symboles.\nMauvaise synchronisation : 1d6 dégâts force aux deux groupes, réinitialisation.\nTests : Investigation DC 12 (mécanismes croisés) · Arcanes DC 12 (alignement simultané) · Perception DC 10 (voir la combinaison requise).",
      monsters: []
    },

    // ── SCÈNE 5 ─────────────────────────────────────────────
    {
      name: "Le Sanctuaire du Sceau",
      type: "Découverte · Climax narratif",
      emoji: "⛓️",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80",
      description: "La salle finale est circulaire, vaste. Au centre, un cercle de pierre gravé de chaînes et de runes — parfait, intact, comme si le temps ne l'avait pas touché. Des chaînes spectrales convergent vers une forme humanoïde. Pas tout à fait solide. Pas tout à fait un fantôme. Quelque chose entre les deux.",
      ambiance: [
        "⛓️ Chaînes spectrales qui convergent",
        "💙 Lumière bleue qui pulse lentement",
        "📜 Inscriptions denses sur tous les murs",
        "🌫️ Brume froide au sol",
        "😶 Une présence qui observe"
      ],
      sensory: "Sons : un battement lent, presque organique, venant du centre. Les chaînes vibrent à basse fréquence.\nOdeurs : ozone intense, froid absolu, quelque chose d'ancien et de propre.\n\n📖 À LIRE :\n« Les chaînes au centre vibrent. Une silhouette se forme — incomplète, faite d'ombre et de magie brisée. »\n« Une voix qui ressemble à deux voix superposées : Vous avez traversé les épreuves. Les Caelthari auraient été satisfaits. Dommage. Ils ne sont plus là pour vous en féliciter. Et moi... je ne suis plus tout à fait l'un d'eux. »\n\nSi les joueurs parlent : « Mon nom n'a plus d'importance. Mes frères m'ont appelé Sael. C'était avant. »",
      monsters: [
        {
          name: "Sael, le Gardien Enchaîné",
          type: "Caelthari contaminé — Boss final",
          cr: "2",
          count: 1,
          emoji: "👻",
          image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80",
          appearance: "Une silhouette humanoïde incomplète, faite d'ombre et de magie brisée. Des fragments de chaînes orbitent autour de sa forme instable. Ses contours changent constamment. Ses yeux sont deux points de lumière froide — bleue, pas rouge. Pas de la colère. Quelque chose d'autre."
        }
      ]
    },

    // ── SCÈNE 6 ─────────────────────────────────────────────
    {
      name: "Combat — Sael, le Gardien Enchaîné",
      type: "Boss final · Combat principal",
      emoji: "⚔️",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
      description: "Sael n'est pas un monstre. C'était un Caelthari — transformé par quelque chose qu'il n'aurait pas dû approcher. Il combat parce qu'il ne peut pas faire autrement. Le sceau le contraint à défendre la prison. Même contre des gens qui n'ont rien fait de mal.",
      ambiance: [
        "💙 Lumière bleue instable",
        "⛓️ Chaînes qui se tendent et vibrent",
        "💥 Pierres qui tombent à 50% PV",
        "😔 Une tragédie, pas une victoire",
        "⏰ Sentiment d'urgence croissant"
      ],
      sensory: "Sons : grondement sourd à chaque attaque. Craquements des murs. Le battement s'accélère.\nOdeurs : ozone brûlé, froid intense, magie qui se consume.\n\n⚔️ STATISTIQUES :\n• PV : 45 · CA : 13 · Vitesse : 9 m (lié au cercle central — ne peut pas s'éloigner à plus de 9 m)\n• Frappe corrompue : +4 · 1d8+3 nécrotique\n• Onde instable (recharge 5-6) : tous à 3 m, DEX DC 12, 2d6 force (moitié si réussi)\n• Phase critique (≤ 22 PV) : une chaîne se brise — avantage 1 attaque sur 2 — pierres tombent (DEX DC 12 ou 1d4)\n• Résistance : dégâts physiques armes non magiques\n\n💀 SA MORT :\n« Sa forme vacille — comme une flamme dans le vent — puis se dissout lentement. Dans ses yeux, quelque chose change. Du soulagement, peut-être. »\n« Sa voix, avant de disparaître : Ce que vous allez trouver... gardez-le loin de ce qui dort. »",
      monsters: [
        {
          name: "Sael, le Gardien Enchaîné",
          type: "Caelthari contaminé — Boss",
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
      name: "L'Éclat de Mémoire",
      type: "Récompense · Amorce de campagne",
      emoji: "✨",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
      description: "Là où Sael se tenait, quelque chose reste. Un fragment d'os — trop lisse, trop parfait pour être naturel — traversé d'une veine de lumière bleue froide qui pulse lentement. Il est froid au toucher. Pas désagréablement froid. Comme une pierre au fond d'une rivière en été.",
      ambiance: [
        "✨ Lumière bleue apaisée",
        "🌬️ Souffle d'air frais soudain",
        "🔇 Silence complet après le combat",
        "📜 Inscriptions qui ressemblent à une confession",
        "❓ Des questions sans réponse"
      ],
      sensory: "Sons : le battement s'est arrêté. Seul le goutte-à-goutte de l'eau reprend doucement.\nOdeurs : l'ozone se dissipe. Une odeur propre, presque végétale.\n\n🎁 L'ÉCLAT DE MÉMOIRE :\nFragment d'os parfait, veine de lumière bleue, froid au toucher.\n• Pulse quand on approche d'une ruine Caelthari\n• S'illumine brièvement si on tente de lire les inscriptions de la salle (une seule fois)\n• Ne fait rien d'autre. Pour l'instant.\n\n💰 AUTRES RÉCOMPENSES :\n• 25-50 po par joueur (urnes, reliques, métal précieux des armures)\n• Une gemme bleue dans les robes d'un mage (valeur 50 po)\n• Des copies des inscriptions murales (un érudit paierait bien)\n\n🪝 HOOKS FINAUX :\n• Les inscriptions de la salle finale ressemblent à une confession, pas à des instructions\n• Le cercle de pierre est fissuré mais tient encore — pour combien de temps ?\n• En remontant, une étoile dans le ciel qui n'était pas là à l'aller. Elle disparaît avant qu'on puisse en être sûr.",
      monsters: []
    }

  ]
};
