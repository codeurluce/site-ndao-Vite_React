// 1er version de TextDuJour.jsx avec tableau de lectures et bouton "Lire la suite"
import React, { useState } from "react";
import { BookOpen, Book, ChevronDown, ChevronUp } from "lucide-react";
import { useLiturgical } from '../../contexts/LiturgicalContext';
import { joursLiturgiques2025 } from "../../types/annéeLiturgicalJournalier";

// Fonction pour formater la date actuelle en français
const getFormattedDate = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const today = new Date();
  return today.toLocaleDateString('fr-FR', options);
};
// Fonction pour capitaliser la première lettre d'une chaîne
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Fonction pour obtenir le jour liturgique pour une date donnée
function getLiturgicalDayForDate(dateStr, calendar) {
  const found = calendar.jour.find(entry => entry.date === dateStr);
  return found ? found.fete : "Pas de fere";
}


export const DailyReadings = () => {

  const { theme } = useLiturgical();
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10); // 'YYYY-MM-DD'
  const liturgicalDay = getLiturgicalDayForDate(todayStr, joursLiturgiques2025);

  const readings = {
    date: capitalizeFirstLetter(getFormattedDate()),
    readings: [
      {
        title: "Première lecture",
        reference: "Daniel 3, 14-20.91-92.95",
        fullText:"En ces jours-là, dans la ville de Philippes, la foule se déchaîna contre Paul et Silas. Les magistrats ordonnèrent de leur arracher les vêtements pour leur donner la bastonnade. Après les avoir roués de coups, on les jeta en prison, en donnant au geôlier la consigne de les surveiller de près. Pour appliquer cette consigne, il les mit tout au fond de la prison, avec les pieds coincés dans des blocs de bois. Vers le milieu de la nuit, Paul et Silas priaient et chantaient les louanges de Dieu, et les autres détenus les écoutaient. Tout à coup, il y eut un violent tremblement de terre, qui secoua les fondations de la prison : à l’instant même, toutes les portes s’ouvrirent, et les liens de tous les détenus se détachèrent. Le geôlier, tiré de son sommeil, vit que les portes de la prison étaient ouvertes ; croyant que les détenus s’étaient évadés, il dégaina son épée et il était sur le point de se donner la mort. Mais Paul se mit à crier d’une voix forte : « Ne va pas te faire de mal, nous sommes tous là. » Ayant réclamé de la lumière, le geôlier se précipita et, tout tremblant, se jeta aux pieds de Paul et de Silas. Puis il les emmena dehors et leur demanda : « Que dois-je faire pour être sauvé, mes seigneurs ? » Ils lui répondirent : « Crois au Seigneur Jésus, et tu seras sauvé, toi et toute ta maison. » Ils lui annoncèrent la parole du Seigneur, ainsi qu’à tous ceux qui vivaient dans sa maison. À l’heure même, en pleine nuit, le geôlier les emmena pour laver leurs plaies. Aussitôt, il reçut le baptême avec tous les siens. Puis il fit monter chez lui Paul et Silas, il fit préparer la table et, avec toute sa maison, il laissa déborder sa joie de croire en Dieu. – Parole du Seigneur.",
      },
      {
        title: "Psaume",
        reference: "Daniel 3, 52-56",
        fullText:"De tout mon cœur, Seigneur, je te rends grâce : tu as entendu les paroles de ma bouche. Je te chante en présence des anges, vers ton temple sacré, je me prosterne. Je rends grâce à ton nom pour ton amour et ta vérité, car tu élèves, au-dessus de tout, ton nom et ta parole. Le jour où tu répondis à mon appel, tu fis grandir en mon âme la force. Ta droite me rend vainqueur. Le Seigneur fait tout pour moi ! Seigneur, éternel est ton amour : n’arrête pas l’œuvre de tes mains.",
      },
      {
        title: "Évangile",
        reference: "Jean 8, 31-42",
        fullText: "En ce temps-là, Jésus disait à ses disciples : « Je m’en vais maintenant auprès de Celui qui m’a envoyé, et aucun de vous ne me demande : “Où vas-tu ?” Mais, parce que je vous dis cela, la tristesse remplit votre cœur. Pourtant, je vous dis la vérité : il vaut mieux pour vous que je m’en aille, car, si je ne m’en vais pas, le Défenseur ne viendra pas à vous ; mais si je pars, je vous l’enverrai. Quand il viendra, il établira la culpabilité du monde en matière de péché, de justice et de jugement. En matière de péché, puisqu’on ne croit pas en moi. En matière de justice, puisque je m’en vais auprès du Père, et que vous ne me verrez plus. En matière de jugement, puisque déjà le prince de ce monde est jugé. » – Acclamons la Parole de Dieu.",
      },
    ],
  };

  // Initialisation dynamique de l'état expanded selon le nombre de lectures
  const [expanded, setExpanded] = useState(
    Array(readings.readings.length).fill(false)
  );

  // Fonction pour basculer l'état d'expansion d'une lecture
  const toggleExpanded = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section id="lectures" className="py-2 bg-gray-100 scroll-mt-16 pt-6 pb-12">
      <div className="container mx-auto px-2">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen size={28} className={theme.textColor} />
            <h2 className="text-3xl font-bold text-center">Lectures du Jour</h2>

          </div>
                <p className="text-sm mb-4"> {readings.date} / {liturgicalDay} / Année: {joursLiturgiques2025.annee_liturgique} </p>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Méditons ensemble la Parole de Dieu qui nous est donnée aujourd&apos;hui
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-burgundy-50 rounded-t-xl flex items-center justify-beetwen mb-6">
            
              <h3 className="font-serif text-2xl font-semibold text-burgundy-700">
                {readings.date} 
                {/* <p className="text-lg">{liturgicalDay} /Année: {joursLiturgiques2025.annee_liturgique} </p> */}
                              </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start [grid-auto-rows:min-content] rounded-b-xl">
            {readings.readings.map((reading, index) => {
              const isExpanded = expanded[index];
              const fullText = reading.fullText || "";
              const shouldShowButton = fullText.length > 250;

              return (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden shadow-md flex flex-col ${theme.hoverShadowColor} transition-shadow duration-300`}
                >
                  <div className={`${theme.bgColor} text-white p-4 flex flex-col gap-1`}>
                    <div className="font-serif font-semibold flex items-center text-xl">
                      <Book className="w-5 h-5 mr-2" />
                      {reading.title}
                    </div>
                    <div className="text-sm opacity-80">{reading.reference}</div>
                  </div>

                  <div className="text-gray-600 p-4">
                    <p>
                      {isExpanded
                        ? fullText
                        : fullText.slice(0, 250) + (shouldShowButton ? "..." : "")}
                    </p>
                  </div>

                  {shouldShowButton && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className={`inline-flex items-center text-burgundy-600 font-medium mb-4 ml-4 ${theme.textColorSecond}`}
                      aria-expanded={isExpanded}
                      aria-controls={`reading-text-${index}`}
                    >
                      {isExpanded ? (
                        <>
                          Réduire
                          <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Lire la suite
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 bg-yellow-100 border-l-4 border-red-500 p-2 rounded-r">
            <p className="text-xs text-gray-700">
              <span className="font-bold">Note :</span> Ces lectures suivent le calendrier liturgique de l&apos;Église catholique romaine. Pour plus de détails, consultez l&apos;Ordo diocésain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DailyReadings;





// 2em version de TextDuJour.jsx avec excerpt et bouton "Lire la suite"
// import React, { useState } from 'react';
// import { BookOpen, Book, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
// import { useLiturgical } from '../../contexts/LiturgicalContext';
// import { ca } from 'date-fns/locale';



// const getFormattedDate = () => {
//     const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
//     const today = new Date();
//     return today.toLocaleDateString('fr-FR', options);
// };
// const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// export const DailyReadings = () => {

//     const { theme } = useLiturgical();

//     // Example readings - in a real application, these would come from an API
//     const readings = {
//         date: capitalizeFirstLetter(getFormattedDate()),
//         liturgicalDay: "Mercredi de la 5ème semaine de Carême",
//         readings: [
//             {
//                 title: "Première lecture",
//                 reference: "Daniel 3, 14-20.91-92.95",
//                 excerpt: "En ces jours-là, le roi Nabucodonosor dit : « Est-il vrai, Shadrak, Méshak et Abed-Nego, que vous ne servez pas mes dieux et que vous n'adorez pas la statue d'or que j'ai fait ériger ? » ",
//                 fullText: " de la cithare, de la harpe, de la lyre, de la cornemuse et de tous les genres d'instruments, si vous êtes prêts à vous prosterner pour adorer la statue que j'ai faite... Mais si vous ne l'adorez pas, vous serez immédiatement jetés dans la fournaise de feu ardent ; et quel est le dieu qui vous délivrera de ma main ?\""
//             },
//             {
//                 title: "Psaume",
//                 reference: "Daniel 3, 52-56",
//                 excerpt: "À toi, louange et gloire éternellement s-tu, Seigneur, Dieu de nos père!",
//                 fullText: "Béni sois-tu, Seigneur, Dieu de nos pères : R/\nBéni soit le nom très saint de ta gloire : R/\nBéni sois-tu dans ton saint temple de gloire : R/\nBéni sois-tu sur le trône de ton règne : R/\nBéni sois-tu, toi qui sondes les abîmes : R/\nToi qui sièges au-dessus des Kéroubim : R/\nBéni sois-tu au firmament, dans le ciel : R/"
//             },
//             {
//                 title: "Évangile",
//                 reference: "Jean 8, 31-42",
//                 excerpt: "En ce temps-là, Jésus disait aux Juifs qui croyaient en lui : « Si vous demeurez dans ma parole, vous êtes vraiment mes disciples.»",
//                 fullText: "alors vous connaîtrez la vérité, et la vérité vous rendra libres.\" Ils lui répliquèrent : \"Nous sommes la descendance d'Abraham, et nous n'avons jamais été les esclaves de personne. Comment peux-tu dire : 'Vous deviendrez libres' ?\" Jésus leur répondit : \"Amen, amen, je vous le dis : qui commet le péché est esclave du péché. L'esclave ne demeure pas pour toujours dans la maison ; le fils, lui, y demeure pour toujours.\""
//             }
//         ]
//     };

//     const [expandedReadings, setExpandedReadings] = useState([]);

//     const toggleReading = (index) => {
//         setExpandedReadings(prev =>
//             prev.includes(index)
//                 ? prev.filter(i => i !== index)
//                 : [...prev, index]
//         );
//     };

//     return (
//         <section id="lectures" className="py-2 bg-gray-100 scroll-mt-16 pt-6 pb-12">
//             <div className="container mx-auto px-2">
//                 <div className="text-center mb-4">
//                     <div className="flex items-center justify-center gap-2 mb-6">
//                         <BookOpen size={28} className={theme.textColor} />
//                         <h2 className="text-3xl font-bold text-center">
//                             Lectures du Jour
//                         </h2>
//                     </div>
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         Méditons ensemble la Parole de Dieu qui nous est donnée aujourd'hui
//                     </p>
//                 </div>

//                 <div className="max-w-4xl mx-auto">
//                     <div className="bg-burgundy-50 rounded-t-xl flex items-center justify-between mb-6">
//                         <div>
//                             <h3 className="font-serif text-2xl font-semibold text-burgundy-700">
//                                 {readings.date}
//                             </h3>
//                             <p className="text-burgundy-600 mt-1">
//                                 {liturgicalDay}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex grid-cols-1 md:grid-cols-3 gap-6 rounded-b-xl">
//                         {readings.readings.map((reading, index) => (
//                             <div key={index} className={`rounded-xl overflow-hidden shadow-md flex flex-col h-full ${theme.hoverShadowColor} transition-shadow duration-300`}>
//                                 {/* <div key={index} className={`rounded-xl overflow-hidden shadow-md flex flex-col ${theme.hoverBgColor} transition-shadow duration-300`}> */}

//                                 <div className="flex items-start justify-between">
//                                     <div className="">
//                                         <div className={`${theme.bgColor} text-white p-4 flex flex-col gap-1`}>
//                                             <div className="font-serif font-semibold flex items-center text-xl">
//                                                 <Book className="w-5 h-5 mr-2" />
//                                                 {reading.title}
//                                             </div>
//                                             <div className="text-sm opacity-80">{reading.reference}</div>
//                                         </div>

//                                         <div className="text-gray-600 p-4">
//                                             <p>{reading.excerpt}</p>
//                                             <div className={`overflow-hidden transition-all duration-300 ${expandedReadings.includes(index) ? 'max-h' : 'max-h-0'
//                                                 }`}>
//                                                 <p className="">{reading.fullText}</p>
//                                             </div>
//                                         </div>
//                                         <button
//                                             onClick={() => toggleReading(index)}
//                                             className={`inline-flex items-center text-burgundy-600 font-medium mb-4 ml-4 ${theme.textColorSecond}`}
//                                         >
//                                             {expandedReadings.includes(index) ? (
//                                                 <>
//                                                     Réduire
//                                                     <ChevronUp className="w-4 h-4 ml-1" />
//                                                 </>
//                                             ) : (
//                                                 <>
//                                                     Lire la suite
//                                                     <ChevronDown className="w-4 h-4 ml-1" />
//                                                 </>
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-4 bg-yellow-100 border-l-4 border-red-500 p-2 rounded-r">
//                         <p className="text-xs text-gray-700">
//                             <span className="font-bold">Note :</span> Ces lectures suivent le calendrier liturgique de l'Église catholique romaine. Pour plus de détails, consultez l'Ordo diocésain.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

