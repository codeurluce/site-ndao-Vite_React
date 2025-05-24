import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useLiturgical } from '../../contexts/LiturgicalContext';
import { Timer } from 'lucide-react';
import clsx from 'clsx';

export const MassSchedule = () => {
  const [activeDay, setActiveDay] = useState('dimanche');
  const { theme } = useLiturgical();

  const scheduleData = {
    lundi: [
      { time: '06:45', name: 'Messe du matin' },
      { time: '18:30', name: 'Messe du soir' }
    ],
    mardi: [
      { time: '06:45', name: 'Messe du matin' },
      { time: '18:30', name: 'Messe du soir' }],
    mercredi: [
      { time: '06:45', name: 'Messe du matin' },
      { time: '18:30', name: 'Messe du soir' }],
    jeudi: [
      { time: '06:45', name: 'Messe du matin' },
      { time: '18:30', name: 'Messe du soir' }],
    vendredi: [
      { time: '06:45', name: 'Messe du matin' },
      { time: '18:30', name: 'Messe du soir' }],
    samedi: [
      { time: '17:00', name: 'Confession' },
      { time: '18:30', name: 'Messe prédominicale' }
    ],
    dimanche: [
      { time: '07:30', name: 'Messe matinale' },
      { time: '09:30', name: 'Grand-messe' },
      { time: '11:30', name: 'Messe des enfants' }
    ]
  };
  const days = [
    { id: 'lundi', label: 'Lundi' },
    { id: 'mardi', label: 'Mardi' },
    { id: 'mercredi', label: 'Mercredi' },
    { id: 'jeudi', label: 'Jeudi' },
    { id: 'vendredi', label: 'Vendredi' },
    { id: 'samedi', label: 'Samedi' },
    { id: 'dimanche', label: 'Dimanche' }
  ];
// ...imports et logique inchangés

return (
  <section id="horairesMesse" className="py-2 bg-gray-100 scroll-mt-16 pt-6 pb-12"> 
    <div className="container mx-auto px-2"> 
      <div className="text-center mb-4"> 
        <div className="flex items-center justify-center gap-2 mb-6"> 
          <Timer size={28} className={theme.textColor} /> 
          <h2 className="text-3xl font-bold text-center"> 
            Horaires des Messes
          </h2>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow overflow-hidden"> 
        <div className="grid grid-cols-7 border-b border-gray-200">
          {days.map((day) => (
            <button
              key={day.id}
              className={clsx(`py-2 text-center text-sm font-medium transition-colors`, 
                activeDay === day.id
                  ? `${theme.bgColor} text-white`
                  : `${theme.hoverBgColor} text-gray-700`
              )}
              onClick={() => setActiveDay(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="p-3"> 
          <div className="flex items-center mb-3"> 
            <Calendar size={18} className={`${theme.textColor} mr-2`} /> 
            <h3 className={`font-serif text-base font-semibold ${theme.textColor} capitalize`}>
              {days.find(d => d.id === activeDay)?.label}
            </h3>
          </div>

          {scheduleData[activeDay].length > 0 ? (
            <div className="space-y-2">
              {scheduleData[activeDay].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center p-2 ${theme.bgColorSecond} rounded`}
                >
                  <div className={`${theme.bgColor} text-white rounded-full w-8 h-8 flex items-center justify-center mr-2`}>
                    <Clock className="w-4 h-4" /> 
                  </div>
                  <div>
                    <p className={`text-base font-bold ${theme.textColor}`}>{item.time}</p> 
                    <p className="text-sm">{item.name}</p> 
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm italic">Pas de messe programmée ce jour.</p>
          )}

          <div className="mt-4 bg-gold-50 border-l-4 border-red-500 p-2 rounded-r">
            <p className="text-xs text-gray-700">
              <span className="font-bold">Note :</span> Des changements peuvent survenir lors des fêtes liturgiques spéciales.
              Consultez les annonces paroissiales pour plus d'informations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}