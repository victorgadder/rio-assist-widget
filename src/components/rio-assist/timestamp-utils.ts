export const formatChatTimestamp = (value: number | string | Date) => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const now = new Date();
  const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const nowStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayDiff = Math.floor((nowStart.getTime() - dateStart.getTime()) / 86400000);

  const timeLabel = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (dayDiff === 0) {
    return timeLabel;
  }

  let dateLabel = '';
  if (dayDiff === 1) {
    dateLabel = 'ontem';
  } else if (dayDiff >= 2 && dayDiff <= 5) {
    dateLabel = date.toLocaleDateString('pt-BR', { weekday: 'long' });
  } else {
    dateLabel = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  return `${dateLabel} ${timeLabel}`;
};
