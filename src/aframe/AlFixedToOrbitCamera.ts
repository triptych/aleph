import { AframeRegistry, AframeComponent } from "../interfaces";
import { ThreeUtils } from "../utils";

interface AlFixedToOrbitCameraState {
  distanceFromTarget: number;
  target: THREE.Vector3;
}

export class AlFixedToOrbitCamera implements AframeRegistry {
  public static getObject(): AframeComponent {
    return {
      schema: {
        distanceFromTarget: { type: "number", default: 0.1 },
        target: { type: "vec3" }
      },

      init(_data?: any) {
        let targ = ThreeUtils.objectToVector3(this.data.target);

        this.state = {
          distanceFromTarget: this.data.distanceFromTarget,
          target: targ
        } as AlFixedToOrbitCameraState;
      },

      onEnterVR() {},

      onExitVR() {},

      update(_oldData) {},

      tick() {
        let el = this.el;
        let state = this.state;

        const camPos = el.sceneEl.camera.position;
        const dir = (state.target
          .clone()
          .sub(camPos.clone()) as THREE.Vector3).normalize();

        el.object3D.position.copy(dir.multiplyScalar(state.distanceFromTarget));
        el.object3D.lookAt(camPos);
      },

      remove() {},

      pause() {},

      play() {}
    };
  }
  public static getName(): string {
    return "al-fixed-to-orbit-camera";
  }
}
