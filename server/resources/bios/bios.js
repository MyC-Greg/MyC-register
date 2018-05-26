const mongoose = require('mongoose');

const Bios = 
        [{
        names: 'Charlotte Mahr et Grégoire Nedelec',
        subtitle: 'Les fondateurs de chocs de myCharlotte',
        content: '<p>Super bio de Charlotte et Gregoire</p>',
        role: 'founders',
        status: 'active'
        },
        
    {
        names: 'Aliette et Jérôme Balladur',
        subtitle: 'Nos gourous!',
        content: '<p> Super bio de Jerome et de Aliette! Pour en savoir plus sur les formations d\'Aliette et Jérôme, vous pouvez vous rendre sur le site d\'Ayovie: <a href="www.maladesdesport.fr" target="_blank"></a>http://ayovie.com/</p>',
        role: 'partners',
        status: 'active'       
                },
{
        names: 'Léa Dall\'Aglio et Vincent Guerrier',
        subtitle: 'Nos journalistes sportifs!',
        content: '<p>Sportifs par nature, mais pas spécialement adeptes de la course en short sur béton, ce couple de journalistes s’est mis au running par esprit de contradiction, en 2016. Il fallait donner tort au médecin de Vincent qui l’avait mis en garde : « Vous risquez de ne pas courir de marathon ». Ses traitements contre le cancer risquaient de diminuer ses capacités pulmonaires. Il l’a couru, trois semaines après sa rémission et a lancé avec Léa un site d’information sur le sport santé : <a href="www.maladesdesport.fr" target="_blank">www.maladesdesport.fr</a></p><br><p>Depuis septembre 2017, ils rendent compte de l’avancée des recherches scientifiques dans le domaine, interrogent des spécialistes, et suivent le dossier sport sur ordonnance. Le site permet également aux malades de livrer des témoignages inspirants. Pour lutter contre l’idée reçue qui veut que maladie grave rime avec repos, ils travaillent à la réalisation d’un documentaire sur les bienfaits de l’activité physique pendant les traitements du cancer.</p>',
        role: 'partners',
        status: 'active'
                }
        ];

module.exports = Bios;
