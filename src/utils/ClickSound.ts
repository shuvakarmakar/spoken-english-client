import { Howl } from "howler";

let clickSound: Howl | null = null;

export const initializeClickSound = (soundUrl: string) => {
  clickSound = new Howl({
    src: [soundUrl],
  });
};

export const playClickSound = () => {
  if (clickSound) {
    clickSound.play();
  }
};
