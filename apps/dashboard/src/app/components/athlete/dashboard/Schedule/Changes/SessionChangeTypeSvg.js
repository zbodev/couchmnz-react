import React from 'react';

import appConstants from '../../../../../constants/appConstants';
const {reasonNames} = appConstants;

export function scheduleConflict() {
  return (
    <svg viewBox="0 0 39 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Declined-by-Coach" transform="translate(-11.000000, -15.000000)">
          <g id="reschedule-by-you">
            <g id="reschedule-indicator" transform="translate(11.000000, 15.000000)">
              <g>
                <path d="M36.4137762,8.56942566 L34.8694283,10.7677986 C31.781009,5.80410385 26.2763619,2.5 20,2.5 C10.3350169,2.5 2.5,10.3350169 2.5,20 C2.5,29.6649831 10.3350169,37.5 20,37.5 C27.094591,37.5 33.2031395,33.2782505 35.9504715,27.2099257 L38.2528998,28.1871645 C35.124668,35.1506655 28.1286454,40 20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 C26.7955388,0 32.7994942,3.38917181 36.4137762,8.56942566 Z" id="Combined-Shape" fill="#666666"/>
                <polyline id="Path-14" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" transform="translate(23.750000, 16.250000) scale(-1, 1) translate(-23.750000, -16.250000) " points="27.5 7.5 27.5 19.5379127 20 25"/>
                <polyline id="Path-16" stroke="#666666" strokeLinecap="round" strokeLinejoin="round" transform="translate(33.653895, 8.468859) rotate(-205.000000) translate(-33.653895, -8.468859) " points="28.4038949 11.1454836 33.6148437 5.71885939 38.9038945 11.2188595"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function profileMismatch() {
  return (
    <svg viewBox="0 0 44 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Declined-by-Coach--See-Recommendations" transform="translate(-10.000000, -11.000000)">
          <g id="1016218-200">
            <image x="8" y="11" width="48" height="48" xlinkHref="data:image/png;base64,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"/>
            <use fill="#666666" fillRule="evenodd" xlinkHref="#rect-1"/>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function getChangeTypeSvg(type) {
  if (type === reasonNames.scheduleConflict) {
    return scheduleConflict();
  } else if (type === reasonNames.profileMismatch) {
    return profileMismatch();
  }
  return scheduleConflict();
}