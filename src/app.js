import * as Tone from 'tone';

const synthOptions = {
  envelope: {
    attack: 0,
    decay: 0,
    sustain: 0,
    release: 0
  }
};
const synth = new Tone.Synth(synthOptions).toMaster();

const keys = document.querySelectorAll('.keyboard .keys .key');
keys.forEach(addNoteEvents);

function addNoteEvents(element) {
  element.addEventListener('mousedown', (e) => {
    synth.triggerAttackRelease(e.target.textContent);
    console.log(synth.envelope);
  });
}

const envelope = document.querySelectorAll('.keyboard .envelope input');
envelope.forEach(bindEnvelope);
  
function bindEnvelope(element) {
  element.addEventListener('input', (e) => {
    synth.envelope[e.target.name] = e.target.value;
  });
}
