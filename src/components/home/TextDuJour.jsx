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
  return found ? found.fete : "Pas de fête liturgique aujourd'hui";
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
        fullText:
          'En ces jours-là, le roi Nabucodonosor dit : « Est-il vrai, Shadrak, Méshak et Abed-Nego, que vous ne servez pas mes dieux et que vous n\'adorez pas la statue d\'or que j\'ai fait ériger ? » de la cithare, de la harpe, de la lyre, de la cornemuse et de tous les genres d\'instruments, si vous êtes prêts à vous prosterner pour adorer la statue que j\'ai faite... Mais si vous ne l\'adorez pas, vous serez immédiatement jetés dans la fournaise de feu ardent ; et quel est le dieu qui vous délivrera de ma main ?"',
      },
      {
        title: "Psaume",
        reference: "Daniel 3, 52-56",
        fullText:
          "Béni sois-tu, Seigneur, Dieu de nos pères : R/\nBéni soit le nom très saint de ta gloire : R/\nBéni sois-tu dans ton saint temple de gloire : R/\nBéni sois-tu sur le trône de ton règne : R/\nBéni sois-tu, toi qui sondes les abîmes : R/\nToi qui sièges au-dessus des Kéroubim : R/\nBéni sois-tu au firmament, dans le ciel : R/",
      },
      {
        title: "Évangile",
        reference: "Jean 8, 31-42",
        fullText:
          "En ce temps-là, Jésus disait aux Juifs qui croyaient en lui : « Si vous demeurez dans ma parole, vous êtes vraiment mes disciples. » Alors vous connaîtrez la vérité, et la vérité vous rendra libres.\" Ils lui répliquèrent : \"Nous sommes la descendance d'Abraham, et nous n'avons jamais été les esclaves de personne. Comment peux-tu dire : 'Vous deviendrez libres' ?\" Jésus leur répondit : \"Amen, amen, je vous le dis : qui commet le péché est esclave du péché. L'esclave ne demeure pas pour toujours dans la maison ; le fils, lui, y demeure pour toujours.\"",
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

