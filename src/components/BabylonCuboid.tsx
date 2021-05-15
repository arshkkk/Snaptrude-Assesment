import React, { useEffect } from 'react';
import {
  Engine,
  ArcRotateCamera,
  Scene,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
} from 'babylonjs';
let engine: any = null;
let canvas: any = null;
export const BabylonCuboid = ({ img }: { img: string }) => {
  useEffect(() => {
    canvas = document.getElementById('babylon-cuboid');
    // @ts-ignore
    engine = new Engine(canvas, true);
  }, []);
  const createScene = () => {
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      Vector3.Zero(),
      scene,
    );
    camera.attachControl(canvas, true);
    const light1 = new HemisphericLight('light1', new Vector3(1, 1, 0), scene);
    const sphere = MeshBuilder.CreateBox('cuboid', { size: 1 }, scene);
    const newMaterial = new StandardMaterial('texture1', scene);
    newMaterial.diffuseTexture = new Texture(img, scene);

    sphere.material = newMaterial;

    return scene;
  };

  if (canvas && engine) {
    const newScene = createScene();
    engine.runRenderLoop(() => {
      if (newScene) newScene.render();
    });
  }

  return (
    <canvas
      id="babylon-cuboid"
      style={{ width: '700px', height: '500px' }}
    ></canvas>
  );
};
