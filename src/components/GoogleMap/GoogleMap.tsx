import React, { createRef, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { BabylonCuboid } from '../BabylonCuboid';
export const GoogleMap = ({ setSrc }: { setSrc: Function }) => {
  const googleMapRef = createRef();
  const createGoogleMap = () =>
    //   @ts-ignore
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 10,
      center: {
        lat: 30.210995,
        lng: 74.945473,
      },
      disabledDefaultUI: true,
    });

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBYxFSpBNyXa7kqODHkZC_zl7y4v0it-68&libraries=places';
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', () => {
      createGoogleMap();
    });
  }, []);

  function saveMapToDataUrl() {
    var element = document.getElementById('google-map');

    //@ts-ignore
    html2canvas(element, {
      useCORS: true,
    }).then((canvas) => {
      setSrc('');
      setSrc(canvas.toDataURL('img/png'));
    });
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        id="google-map"
        //   @ts-ignore
        ref={googleMapRef}
        style={{ width: '700px', height: '500px' }}
      ></div>
      <button
        onClick={() => saveMapToDataUrl()}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 0',
          fontSize: '18px',
        }}
      >
        Generate
      </button>
    </div>
  );
};
