export interface Toy {
  name: string;
  wheels: boolean;
  mainColor: string;
  size: "small" | "medium" | "big";
  fluffy: boolean;
}

interface AllToys {
  [key: string]: Toy;
}

export interface ToysAndVals {
  [key: string]: 0 | 1;
}

export const toys: AllToys = {
  bike_001: {
    name: "Bike",
    wheels: true,
    mainColor: "green",
    size: "big",
    fluffy: false,
  },
  car_001: {
    name: "Toy Car",
    wheels: true,
    mainColor: "green",
    size: "small",
    fluffy: false,
  },
  lego_001: {
    name: "Lego",
    wheels: false,
    mainColor: "green",
    size: "small",
    fluffy: false,
  },
  trampoline_001: {
    name: "Trampoline",
    wheels: false,
    mainColor: "white",
    size: "big",
    fluffy: false,
  },
  doll_001: {
    name: "Doll",
    wheels: false,
    mainColor: "pink",
    size: "medium",
    fluffy: true,
  },
  teddy_001: {
    name: "Teddy",
    wheels: false,
    mainColor: "brown",
    size: "medium",
    fluffy: true,
  },
  xylophone_001: {
    name: "Xylophone",
    wheels: false,
    mainColor: "multi",
    size: "medium",
    fluffy: false,
  },
  scooter_001: {
    name: "Scooter",
    wheels: true,
    mainColor: "pink",
    size: "big",
    fluffy: false,
  },
  slide_001: {
    name: "Slide",
    wheels: false,
    mainColor: "green",
    size: "big",
    fluffy: false,
  },
  swing_001: {
    name: "Swing",
    wheels: false,
    mainColor: "red",
    size: "big",
    fluffy: false,
  },
  piano_001: {
    name: "Piano",
    wheels: false,
    mainColor: "green",
    size: "medium",
    fluffy: false,
  },
  train_001: {
    name: "Train",
    wheels: true,
    mainColor: "multi",
    size: "small",
    fluffy: false,
  },
  tractor_001: {
    name: "Tractor",
    wheels: true,
    mainColor: "green",
    size: "big",
    fluffy: false,
  },
  play_doh_001: {
    name: "Play-Doh",
    wheels: false,
    mainColor: "blue",
    size: "small",
    fluffy: false,
  },
  buzz_001: {
    name: "Buzz",
    wheels: false,
    mainColor: "multi",
    size: "small",
    fluffy: false,
  },
};
