const mongoose = require('mongoose');

const nutritionArticles = 
        [{
        title: 'Nutrition pendant le cancer',
        subtitle: 'La nutrition doit être prise en compte pendant le traitement d\'un cancer, car elle a un impact sur le patient, la maladie et la guérison. L\'état nutritionnel des patients varie selon le type de cancer, le stade de la maladie, les effets secondaires des traitements, il dépend aussi des maladies antérieures. De nombreux patients ont des difficultés à s\'alimenter pendant les traitements. Certains patients souffrent de dénutrition, d\'autres à l\'inverse prennent trop de poids. Quelles sont les conduites à tenir dans chaque situation? Vous trouverez ici des précisions sur les enjeux, des recommandations et des conseils pratiques.',
        author: 'NACRE',
        pilar: 'nutrition',
        content: 
        "<p>Tenir compte des troubles du goût et de l’alimentation.</p><br><p>Les traitements anticancéreux ont souvent des effets secondaires (nausées, vomissements, anorexie, inflammation, altération du goût et de l’odorat…) qui peuvent induire une perte d’appétit. Ces troubles peuvent conduire à la dénutrition. Pour en atténuer l’impact, des conseils spécifiques aux troubles observés sont à prendre en compte.</p><br><p>Prévenir la dénutrition au cours du cancer et son traitement</p><br><p>Une des complications fréquentes des cancers et de leurs traitements est la dénutrition. Une dénutrition peut gêner ou empêcher le traitement. A pathologie égale, un patient dénutri a un risque de mortalité plus important qu’un patient non dénutri. C’est pourquoi la dénutrition doit être prévenue et traitée.<p>"
        },
        
    {
        title: 'Alimentation, nutrition et cancer',
        subtitle: 'Depuis près de 40 ans, de très nombreux travaux ont cherché à identifier et à préciser le rôle des facteurs nutritionnels susceptibles d’intervenir en tant que facteurs de risque, ou au contraire de protection, dans le développement des cancers. Ces recherches ont mis en évidence, avec des degrés de certitude variables, le rôle de certains d’entre eux dans l’initiation ou l’expression clinique des différents cancers.',
        author: 'www.e-cancer.fr ',
        pilar: 'nutrition',
        content: "<p>A l’inverse, il est aujourd’hui communément admis qu’une alimentation diversifiée et équilibrée, privilégiant l’apport de facteurs protecteurs et limitant la consommation de boissons alcoolisées, associée à la pratique d’une activité physique, peut réduire d’environ 30 % le nombre de nouveaux cas de cancers, ce qui représente une diminution d’environ 100 000 nouveaux cas par an en France. La nutrition est ainsi, avec la lutte contre le tabac et l’alcool, un domaine où des progrès essentiels peuvent être réalisés. L’Institut national du cancer a coordonné la réalisation de la brochure « Nutrition et prévention des cancers : des connaissances scientifiques aux recommandations ». S’appuyant sur l’expertise du réseau National Alimentation Cancer Recherche (NACRe) http://www.inra.fr/nacre, cette brochure fait le point des connaissances les plus récentes sur les liens entre nutrition et cancers.</p> <br><p>Consommation d’alcool et cancers</p><p>Dans son rapport de février 2009, l’Institut national du cancer a émis des recommandations précises sur la consommation d’alcool. Celle-ci est déconseillée, quel que soit le type de boisson alcoolisée (vin, bière, spiritueux, etc.).</p>"
                }
        ];

module.exports = nutritionArticles;
