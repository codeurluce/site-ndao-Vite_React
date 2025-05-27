import { format, isToday, isYesterday, isTomorrow, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatDate = (date) => {
  return format(date, 'EEEE d MMMM yyyy', { locale: fr });
};

export const getCurrentDate = () => {
  return new Date();
};