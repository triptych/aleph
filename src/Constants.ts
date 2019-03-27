export class Constants {
  static nodeSize = 50;

  static splashBackSize = 5;

  static zoomFactor = 2.5;

  static maxAnimationSteps = 100;

  static nodeColors = {
    selected: "#76ff03",
    hovered: "#f50057",
    normal: "#00b0ff"
  };

  static colorValues = {
    red: "#f50057",
    blue: "#00b0ff",
    black: "#000000",
    white: "#ffffff",
    yellow: "#ffeb3b",
    green: "#76ff03",
    lightRed: "#f77777"
  };

  static lightValues = {
    ambientLightColor: 0xd0d0d0,
    ambientLightIntensity: 1,
    directionalLight1Color: 0xffffff,
    directionalLight1Intensity: 0.75,
    directionalLight2Color: 0x002958,
    directionalLight2Intensity: 0.5
  };

  static cameraValues = {
    near: 0.05,
    far: 10000,
    fov: 45,
    maxPolarAngle: 165,
    rotateSpeed: 0.5,
    zoomSpeed: 1,
    dampingFactor: 0.25,
    minDistance: 0
  };
}
