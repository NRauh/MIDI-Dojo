import * as Tone from 'tone';

const keys = document.querySelectorAll('.keyboard .keys .key');

let synth = new Tone.Synth().toMaster();

keys.forEach((el) => {
  el.addEventListener('mousedown', (e) => {
    synth.triggerAttackRelease(el.dataset.note, '8n');
  });
});
