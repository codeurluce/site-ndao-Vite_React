import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useLiturgical } from '../../contexts/LiturgicalContext';
import { Timer } from 'lucide-react';

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

  return (
    <section id="horaires" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Timer size={28} className={theme.textColor} />
            <h2 className="text-3xl font-bold text-center">
              Horaires des Messes
            </h2>
          </div>
          {/* <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retrouvez les horaires des célébrations et des temps de prière à la paroisse Notre Dame des Anges.
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-7 border-b border-gray-200">
            {days.map((day) => (
              <button
                key={day.id}
                className={`py-4 text-center font-medium transition-colors ${activeDay === day.id
                  ? 'bg-burgundy-600 text-white'
                  : 'hover:bg-burgundy-50 text-gray-700'
                  }`}
                onClick={() => setActiveDay(day.id)}
              >
                {day.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="flex items-center mb-6">
              <Calendar className="text-burgundy-600 mr-3" />
              <h3 className="font-serif text-xl font-semibold text-burgundy-700 capitalize">
                {days.find(d => d.id === activeDay)?.label}
              </h3>
            </div>

            {scheduleData[activeDay].length > 0 ? (
              <div className="space-y-4">
                {scheduleData[activeDay].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-burgundy-50 rounded-lg"
                  >
                    <div className="bg-burgundy-600 text-white rounded-full w-14 h-14 flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-burgundy-700">{item.time}</p>
                      <p className="text-gray-600">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">Pas de messe programmée ce jour.</p>
            )}

            <div className="mt-8 bg-gold-50 border-l-4 border-gold-500 p-4 rounded-r-lg">
              <p className="text-gray-700">
                <span className="font-medium">Note :</span> Des changements peuvent survenir lors des fêtes liturgiques spéciales.
                Consultez les annonces paroissiales pour plus d'informations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
