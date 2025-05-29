const getString = window.location.search;

const myInfo = new URLSearchParams(getString);

;
;
myInfo.get('ordinance');
myInfo.get('date');
myInfo.get('location');
myInfo.get('phone');
myInfo.get('email');

document.querySelector('#results').innerHTML = `<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>`