document.addEventListener('DOMContentLoaded', () => {
  const nextMatchElem = document.getElementById('next-match');
  const schedule = [
    { opponent: 'FC Beispiel', date: '2024-05-10', time: '15:00', location: 'Heimstadion' },
    { opponent: 'SV Gegner', date: '2024-05-17', time: '18:00', location: 'Auswärts' }
  ];

  function displayNextMatch() {
    if (schedule.length) {
      const match = schedule[0];
      nextMatchElem.textContent = `${match.date} ${match.time} vs. ${match.opponent} (${match.location})`;
    } else {
      nextMatchElem.textContent = 'Keine Spiele geplant.';
    }
  }

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Danke für deine Nachricht!');
    contactForm.reset();
  });

  displayNextMatch();
});
