import * as Tone from 'tone';

const synth = new Tone.Synth().toMaster();

const keys = document.querySelectorAll('.keyboard .keys .key');
keys.forEach(addNoteEvents);

function addNoteEvents(element) {
  element.addEventListener('mousedown', (e) => {
    synth.triggerAttack(e.target.textContent);
  });

  element.addEventListener('mouseup', (e) => {
    synth.triggerRelease();
  });
}
