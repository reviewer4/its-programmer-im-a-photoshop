import audioDefault from '../../assets/audio/click0.mp3';
import audioBack from '../../assets/audio/click9.mp3';
import audioSpace from '../../assets/audio/click2.mp3';
import audioShift from '../../assets/audio/click6.mp3';
import audioCapsLock from '../../assets/audio/click3.mp3';
import audioArrow from '../../assets/audio/click5.mp3';
import audioTab from '../../assets/audio/click4.mp3';
import audioAlt from '../../assets/audio/click8.mp3';
import audioEnter from '../../assets/audio/click7.mp3';

const audioMap = {
  Space: audioSpace,
  Tab: audioTab,
  Capslock: audioCapsLock,
  Backspace: audioBack,
  Enter: audioEnter,
  Shift: audioShift,
  Alt: audioAlt,
  Ctrl: audioTab,
  Del: audioTab,
  '←': audioArrow,
  '↓': audioArrow,
  '→': audioArrow,
  '↑': audioArrow,
};

function audioSource(keyValue) {
  return audioMap[keyValue] || audioDefault;
}

export { audioSource, audioDefault };
