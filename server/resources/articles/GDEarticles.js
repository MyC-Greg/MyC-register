const mongoose = require('mongoose');

const GDEarticles = 
        [{
        title: 'Les bienfaits de la méditation',
        subtitle: 'La méditation ralentirait le vieillissement du cortex cérébral et améliorerait les performances du cerveau, ainsi que notre gestion des émotions. A condition de pratiquer au moins 30 minutes par jour et pendant de nombreuses années ! Mais une pratique régulière peut déjà apaiser les esprits stressés...',
        author: 'La rédaction d\'Allodocteurs.fr',
        pilar: 'GDE',
        content: 
        "<p>Méditation et cancer.</p><br><p>En marge de leurs traitements, pour mieux vivre la maladie, la méditation est aujourd'hui de plus en plus proposée aux patients souffrant de cancer. Depuis 2011, la Ligue contre le cancer de l\'Essonne propose des séances de méditation pour les malades. En rémission ou encore sous traitement, tous les participants ont été touchés par un cancer. 'La méditation pleine conscience permet à ces personnes de récupérer physiquement parce qu\'il y a beaucoup de fatigue avec les traitements, la chimio… Ensuite la méditation leur permet de se retrouver eux avec leur corps et de retrouver des endroits de leur corps qui ne sont pas en souffrance', explique Nadine Germain, instructrice 'Méditation pleine conscience'. Si la méditation est encore peu connue des malades, très vite ils s'y trouvent un intérêt. Les participants peuvent aussi méditer de façon dynamique et les exercices sont adaptés à l'état de santé de chaque participant. Au fil des séances de méditation, les patients ressentent une sensation de bien-être physique mais aussi moral. Les séances en groupe sont encore peu développées. Mais l'intérêt de la méditation, c'est que chaque participant peut méditer seul quand il en ressent le besoin.</p>"
        },
        
    {
        title: 'Les bienfaits de la méditation - cancer colorectal',
        subtitle: 'La méditation pleine conscience réduit le cortisol : hormone du stress, ce qui entrainerait  une baisse de la fatigue et de la détresse psychologique des patients.',
        author: 'Karine Bioetbienetre',
        pilar: 'GDE',
        content: "<p>La méditation pleine conscience recommandée dès le début d'une chimiothérapie<p><br><p>La pratique de la méditation pleine conscience par les patients souffrant de cancer colorectal est à recommander au début de la chimiothérapie, afin de diminuer le cortisol. Cette hormone sécrétée par la glande corticosurrénale intervient dans la gestion du stress par l'organisme. Le but de cette étude était d'évaluer l'effet de la méditation, pratiquée pendant la chimiothérapie, sur le système neuroendocrinien des malades. Une chimiothérapie associée à un stress physique et émotionnel quant à la progression de la maladie et à la réduction des chances de survie, le taux de cortisol des patients augmentent. Pour être réalisée, l'étude a assigné au hasard 57 patients recevant une chimiothérapie adjuvante. Tous ont observé 20 minutes de méditation ou 40 minutes de repos pendant leur perfusion. Le cortisol a été mesuré dans des échantillons de salive, au début, puis tous les 20 minutes durant les 60 premières minutes de la chimiothérapie. Chez 69 % des patients en méditation, une augmentation relative de la réactivité du cortisol a été observée, contre 34% chez les membres du groupe au repos. La pratique de la méditation pleine conscience a également été associée à une baisse de la fatigue et de la détresse psychologique. Bien que d'autres études soient nécessaires pour approfondir ces résultats, pour les auteurs la pratique de la méditation semble être pertinente dans le cadre de la chimiothérapie. Elle pourrait avoir des bienfaits sur les réponses au traitement et, à plus long terme, sur les chances de survie.</p>"
                }
        ];

module.exports = GDEarticles;
