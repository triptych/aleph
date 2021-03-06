import { Constants } from "../../Constants";
import { ControlsType } from "../../enums";
import { ThreeUtils } from "../../utils";
import { BaseComponent } from "./BaseComponent";

interface AlBillboardComponent extends BaseComponent {
  tickFunction(): void;
}

export default AFRAME.registerComponent("al-billboard", {
  schema: {
    controlsType: { type: "string", default: ControlsType.ORBIT },
    cameraPosition: { type: "string" },
    worldPosition: { type: "string" },
    cameraTarget: { type: "string", default: "0 0 0" }
  },

  init() {
    this.bindMethods();
    this.addEventListeners();
    this.tickFunction = AFRAME.utils.throttle(
      this.tickFunction,
      Constants.minFrameMS,
      this
    );
  },

  // tslint:disable-next-line: no-empty
  bindMethods(): void {},

  // tslint:disable-next-line: no-empty
  addEventListeners(): void {},

  // tslint:disable-next-line: no-empty
  removeEventListeners(): void {},

  // tslint:disable-next-line: no-empty
  tickFunction() {
    const camera = this.el.sceneEl.camera as THREE.PerspectiveCamera;
    const object = this.el.object3D as THREE.Object3D;
    const worldPosition = ThreeUtils.stringToVector3(this.data.worldPosition);
    const cameraPosition = ThreeUtils.stringToVector3(this.data.cameraPosition);

    ThreeUtils.lookToFrustrumSpace(
      object,
      camera,
      worldPosition,
      cameraPosition
    );
    object.up.copy(this.el.sceneEl.camera.up);
  },

  tick() {
    this.tickFunction();
  },

  remove(): void {
    this.removeEventListeners();
  }
} as AlBillboardComponent);
