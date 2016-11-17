import React, { Component } from 'react';
import './upload-target.css';

class UploadTarget extends Component {

  render() {
    return (
    <div className="upload-target">
      <div className="prompt">Drop image here or tap to upload</div>
      <svg viewBox="-607 393 512 512">
        <g>
          <g>
            <path className="frame" d="M-99.3,538.2c-7.4,0-14.2,0-21.4,0c0-38.9,0-77.5,0-116.6c-39.1,0-77.8,0-116.9,0c0-7.5,0-14.4,0-21.7
              c1.5-0.1,3.1-0.2,4.7-0.2c40.3,0,80.7,0,121,0c8.7,0,12.7,3.8,12.7,12.4c0,40.8,0,81.7,0,122.5C-99.2,535.6-99.3,536.7-99.3,538.2
              z"/>
            <path className="frame" d="M-600.9,762.7c7.5,0,14.3,0,21.6,0c0,38.9,0,77.6,0,116.8c39.2,0,77.8,0,116.8,0c0,7.3,0,14.2,0,21.9c-1.6,0-3.3,0-5.1,0
              c-40,0-80,0-120,0c-9.7,0-13.4-3.6-13.4-13.2c0-40,0-80,0-120C-600.9,766.5-600.9,764.8-600.9,762.7z"/>
            <path className="frame" d="M-579,538.2c-7.7,0-14.5,0-21.8,0c0-2,0-3.8,0-5.6c0-39.8,0-79.7,0-119.5c0-9.9,3.6-13.5,13.6-13.5c39.8,0,79.7,0,119.5,0
              c1.7,0,3.3,0,5.4,0c0,7.2,0,14.1,0,21.5c-38.6,0-77.3,0-116.6,0C-579,460.4-579,499.1-579,538.2z"/>
            <path className="frame" d="M-120.8,879.8c0-39.5,0-78.1,0-117c7.3,0,14.2,0,21.4,0c0.1,1.7,0.2,3.4,0.2,5c0,39.8,0,79.7,0,119.5
              c0,10.7-3.4,14.1-14,14.1c-39.8,0-79.7,0-119.5,0c-1.5,0-3,0-4.9,0c0-7.1,0-14,0-21.5C-199,879.8-160.3,879.8-120.8,879.8z"/>
          </g>
        </g>
        <g>
          <g id="Layer_2">
            <g id="Layer_2-2">
              <path className="st0" d="M-511.7,607.5c0,4.8,0,9.6,0,14.4c0,1.1,0,1.1,1,1.5c5.3,1.8,8.2,7.5,6.4,12.8c-1.3,3.9-4.9,6.6-9,6.9
                c-5.6,0.3-10.4-3.9-10.7-9.5c-0.3-4.6,2.6-8.8,6.9-10.2c1-0.3,1-0.3,1-1.5c0-9.7,0-19.3,0-29c0-1.1,0-1.1-1.1-1.5
                c-5.3-1.8-8.2-7.5-6.4-12.8c1.1-3.5,4.1-6.1,7.7-6.8c5.5-1.1,10.9,2.5,11.9,8c0.1,0.6,0.2,1.1,0.2,1.7c0,0.8-0.1,1.7-0.3,2.5
                c-0.2,0.9-0.2,0.9,0.6,1.4l5.9,3.5l19.8,11.5c0.2,0.1,0.5,0.3,0.7,0.4c0.4,0.4,1,0.4,1.4,0c0,0,0.1-0.1,0.1-0.1
                c3.8-3.4,9.6-3.5,13.5,0c0.9,0.7,0.9,0.7,1.8,0.2l26.2-15.3c0.8-0.5,0.8-0.5,0.6-1.5c-1.2-5.5,2.2-10.9,7.7-12.1
                c5.5-1.2,10.9,2.2,12.1,7.7c1.1,5.1-1.8,10.3-6.8,11.8c-0.6,0.2-0.9,0.4-0.9,1.1c0,9.9,0,19.7,0,29.5c0,0.8,0.4,1,1,1.2
                c5.3,1.7,8.1,7.4,6.4,12.7c-0.4,1.3-1.2,2.6-2.1,3.6c-3.7,4.2-10.1,4.6-14.3,0.9c-1.6-1.4-2.7-3.3-3.2-5.4
                c-1.2-5.1,1.7-10.2,6.7-11.8c1-0.3,1-0.3,1-1.4c0-9.7,0-19.4,0-29.1c0-1.1,0-1.1-1.1-1.5c-1.3-0.5-2.5-1.2-3.5-2.1
                c-0.7-0.6-0.7-0.6-1.5-0.1l-19.1,11.2l-7.2,4.2c-0.9,0.5-0.9,0.5-0.7,1.4c1.1,4.7-1.4,9.6-5.9,11.5c-0.5,0.2-0.9,0.7-0.8,1.2
                c0,5.1,0,10.2,0,15.3c-0.1,0.6,0.3,1.2,0.8,1.4c3,1.3,5.1,4.1,5.7,7.3c1,5.5-2.6,10.8-8.1,11.8c-5.5,1-10.8-2.6-11.8-8.1
                c0-0.1,0-0.2,0-0.2c-0.8-4.3,1.4-8.6,5.3-10.6c0.4-0.2,0.8-0.4,1.2-0.5c0.4-0.1,0.6-0.4,0.5-0.8c0-0.2,0-0.4,0-0.6
                c0-4.9,0-9.7,0-14.6c0.1-0.7-0.3-1.5-1-1.7c-4.4-2-6.7-6.7-5.6-11.4c0.2-1.1,0.2-1.1-0.7-1.6c-8.8-5.1-17.6-10.2-26.4-15.3
                c-0.4-0.3-1.1-0.3-1.4,0.2c0,0,0,0,0,0c-1.1,1-2.3,1.8-3.8,2.2c-1.1,0.3-0.9,0.5-0.9,1.3C-511.7,597.8-511.7,602.7-511.7,607.5z"
                />
              <path className="st0" d="M-480.2,555.3c0.2,7.9,6.1,11.8,11.6,11.8c6.3,0,11.4-5,11.4-11.3c0-0.2,0-0.4,0-0.7
                c0.4-0.2,0.6,0.1,0.9,0.3l22.1,13.1c0.3,0.2,0.5,0.3,0.8,0.6c0.8,0.7,0.8,0.8,0,1.6c-1.3,1.2-2.3,2.5-3.1,4
                c-0.4,0.8-0.5,0.8-1.3,0.4c-5.8-2.6-11.5-5.2-17.3-7.8c-3.1-1.1-6.6-0.3-9,2c-1.1,1.3-1.6,3-1.5,4.8c0,6.1,0,12.1,0,18.1v1.4
                c-1.1-0.4-2.3-0.5-3.5-0.5c-1.2,0-2.4,0.2-3.5,0.5c-0.1-0.4-0.2-0.9-0.1-1.3c0-6,0-12,0-17.9c0-0.5,0-1-0.1-1.5
                c-0.3-3.3-3-5.8-6.3-5.9c-1.3-0.2-2.5,0.1-3.7,0.6c-5.2,2.5-10.4,4.9-15.6,7.4c-1,0.5-1,0.5-1.6-0.5c-0.9-1.5-2-2.9-3.3-4
                c-0.6-0.5-0.6-0.7,0-1.2c0.3-0.2,0.5-0.5,0.9-0.6l21.6-12.8C-480.7,555.6-480.5,555.5-480.2,555.3z"/>
              <path className="st0" d="M-477.6,556.1c-0.1-4.1,2.7-7.6,6.7-8.5c4.8-1.3,9.6,1.6,10.9,6.3c0,0.2,0.1,0.4,0.1,0.5
                c0.7,4-1.5,8-5.3,9.6c-4.6,1.9-9.9-0.2-11.8-4.8c-0.2-0.4-0.3-0.9-0.4-1.3C-477.5,557.3-477.6,556.7-477.6,556.1z"/>
              <g className="st1">
                <path className="st2" d="M-232.3,834.5c0,4.5-5.2,7.4-31.2,8.9c-11.2,0.6-30.4,23.8-71.2,17.1c-42.3-6.9-56.1-15.1-56.1-22.4
                  c0-7.3,28.2-9.6,71.1-9.6S-232.3,827.1-232.3,834.5z"/>
              </g>
              <path className="st3" d="M-356.6,819.1c0,0-20.3,4-20.8,15.3c-0.5,11.3,22.3,25.7,67.8,16.3L-356.6,819.1z"/>
              
                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-347.1283" y1="546.8131" x2="-278.6683" y2="464.4331" gradientTransform="matrix(1 0 0 -1 0 1300)">
                <stop  offset="0" style={{ stopColor: '#3B260E' }}/>
                <stop  offset="1" style={{ stopColor: '#2C1400' }}/>
              </linearGradient>
              <path className="st4" d="M-328,734l-50.5,15.2c0,0-1,17.6,19.6,63.3c0,0-3.2,5.7-3.7,8.2c0,0,11.9,26.7,32.6,32.2s34.8-0.9,34.1-4
                c-0.7-4.1-1.2-8.2-1.5-12.4c0,0,13.1,2,16.5,1.8c5.2-0.4,12.6-3.2,10.6-8.1s-0.2-15,6.8-52.8C-256.8,741.8-328,734-328,734z"/>
              <path d="M-297.3,836.4c-0.7-5.8-1.1-11.6-1.1-17.4c0.2-7.8,1.5-11.8,1.9-14.7c-0.4,5.7-0.4,11.3-0.2,17
                c0.4,5.6,1.6,15.3,1.6,15.3L-297.3,836.4z"/>
              <path className="st5" d="M-390.2,684.7c0,0-17.2-10.1-19.1-19.5c-2-9.4,9.9-5.4,11.4-7.9c1.5-2.5-17.8-7.4-6.4-19.8
                c4.5-4.9,34.6-4.5,38.1,19.3C-360.1,699.4-390.2,684.7-390.2,684.7z"/>
              <path className="st6" d="M-419.5,640.9l15,17.8c0,0,5.1,0.9,7.4-1.8c1.4-1.7-12.8-17.5-16.7-21.8c-0.9-1-2.2-1.6-3.5-1.7
                c-1.6-0.1-3.3,0.6-3.5,3.8C-420.8,638.5-420.4,639.9-419.5,640.9z"/>
              <path className="st7" d="M-409.3,665.2c0,0,8.3,12.5,23.2,12.9l3.3,9.2C-382.8,687.3-404.7,681.4-409.3,665.2z"/>
              
                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-788.4709" y1="-1248.5359" x2="-788.8409" y2="-1222.5658" gradientTransform="matrix(0.9426 -0.334 -0.334 -0.9426 -26.1891 -762.4182)">
                <stop  offset="0" style={{ stopColor: '#715034' }}/>
                <stop  offset="1" style={{ stopColor: '#996733' }}/>
              </linearGradient>
              <path className="st8" d="M-369.7,646.6c0,0-12.6-2.9-16,15.6s-1.3,24.6,11.9,35.1s35,20.2,35,20.2l18.8-47.6L-369.7,646.6z"/>
              <path className="st9" d="M-347.5,666.7l38.2,7.2l-26.3,20c0,0-40.5,39-37.1,24.2S-347.5,666.7-347.5,666.7z"/>
              <path className="st10" d="M-369,712.4c0,0,13.6-20.3,27.5-27.7l-0.5,2.3C-342,687-365,708-369,712.4z"/>
              <path className="st11" d="M-366.5,702c0,0,10.6-19.8,22.1-26.5c11.5-6.7,0.4,1.7,0.4,1.7l13.2,3.2c0,0-24.7,12.1-38.2,32.1"/>
              <path className="st12" d="M-354.5,681.1c0,0-24,49.6-24.9,67.5c0,0,0.9-31.9,22-66L-354.5,681.1z"/>
              <path className="st13" d="M-347.9,677.7c0,0,2.8,3.8,7.2,3.2l0.7-1.8l-4.8-3.7L-347.9,677.7z"/>
              <polygon className="st14" points="-347,665.2 -359.9,685 -340.6,673.6      "/>
              <path className="st12" d="M-311.1,673.8c0,0-38.2,7.4-59.7,38.6c0,0-4,2.9-9.2,35.9c0.7,4.9,21.9,13.4,56.8-3
                C-287.6,728.7-311.1,673.8-311.1,673.8z"/>
              <path className="st14" d="M-335.6,666.2c0,0-7.8,12.5-8.5,25.9l51.6-27.3L-335.6,666.2z"/>
              <path className="st11" d="M-335.5,676.7c-0.8,2.2-4.2,2.9-7.5,1.7s-5.4-4-4.6-6.2c1.3-3.5,4.2-2.9,7.5-1.7
                C-336.7,671.7-334.2,673.3-335.5,676.7z"/>
              
                <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-340.9362" y1="513.3395" x2="-251.7462" y2="612.1895" gradientTransform="matrix(1 0 0 -1 0 1300)">
                <stop  offset="0" style={{ stopColor: '#715034' }}/>
                <stop  offset="1" style={{ stopColor: '#996733' }}/>
              </linearGradient>
              <path className="st15" d="M-284.3,661.1c4.2,4.6,7.9,9.6,11,15c4.4,8.2,4.8,28.9,9.3,35.6c4.5,6.7,21.5,32.3,26.4,39
                c0,0-13.4,16.7-13.4,19.7s-17.8,28.2-53.1,31.5l-27.8-55.3c0,0-9.6-44.9,17.8-75.3C-286.6,640.9-284.3,661.1-284.3,661.1z"/>
              <path className="st16" d="M-305.1,660.8l-21.5,33l-6.7,14.8l5.6,29.1l3.9-3.9l5.3-17.2l-7.9-8.7l10.3-7.2c0,0-0.2-14.8,15.2-39.7
                L-305.1,660.8"/>
              <path className="st17" d="M-304.2,662l-1.6,7.3c8-1.3,15.8-3.4,23.4-6.3l-1.8-1.9L-304.2,662z"/>
              <path className="st18" d="M-333.4,750.7c0,0-16.1-51.6,26.5-88.2l2.8-0.9c0,0-13.6,18.2-14.4,36.8l-10.4,7.8l6.3,9.7
                c0,0-8.5,23-1.9,44.5L-333.4,750.7z"/>
              <path className="st7" d="M-339.7,753.6c0,0-4.1,11.1-0.4,21.5c2.4,6.3,6.6,11.8,12.2,15.6l13-7.8L-339.7,753.6z"/>
              <path d="M-313.9,783.2l9.6,17.3c0,0,19.7,0.9,39-13.7c0,0-11.4,14.8-40.2,15.3L-313.9,783.2z"/>
              <path className="st19" d="M-295.5,791.4c1.5,0.5,27.6-9.5,27.4-15.9l-10.3-16l-27.8,11.9C-306.1,771.4-297,791-295.5,791.4z"/>
              
                <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-368.2172" y1="-57.5969" x2="-331.4694" y2="-57.5969" gradientTransform="matrix(0.9946 -0.1035 -0.1035 -0.9946 54.1879 681.1476)">
                <stop  offset="0" style={{ stopColor: '#715034' }}/>
                <stop  offset="1" style={{ stopColor: '#996733' }}/>
              </linearGradient>
              <path className="st20" d="M-295.8,790.8c1.7,0.2,26.6-9.9,26.4-16.3l-10.1-16l-27.2,11.8C-306.8,770.3-297.5,790.6-295.8,790.8z"/>
              <path className="st18" d="M-308.7,766.8c0,0,19.7-7.3,26.8-12.9c0,0,2.7,4.3,3.5,5.7c-4.6,4.5-22,12-27.4,13.1L-308.7,766.8z"/>
              
                <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="-342.9555" y1="515.185" x2="-253.8955" y2="613.885" gradientTransform="matrix(1 0 0 -1 0 1300)">
                <stop  offset="0" style={{ stopColor: '#715034' }}/>
                <stop  offset="1" style={{ stopColor: '#996733' }}/>
              </linearGradient>
              <path className="st21" d="M-319.3,724c0.1,2.6-0.5,5.2-1.8,7.5c-1.1,2-4,2.8-5.6,5.1c-4,5.8-9.1,11.8-14.2,13.4
                c0,0,3.3,34.1,21.9,36.4c0,0,15.7-8,28.6-26c13.1-18.3,12.3-48.6,12.3-48.6L-319.3,724z"/>
              
                <linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="-339.9914" y1="552.7405" x2="-271.5314" y2="470.3605" gradientTransform="matrix(1 0 0 -1 0 1300)">
                <stop  offset="0" style={{ stopColor: '#3B260E' }}/>
                <stop  offset="1" style={{ stopColor: '#2C1400' }}/>
              </linearGradient>
              <path className="st22" d="M-320.2,786.1c5.7-3.1,11.1-6.7,16.2-10.6l-13.3,10.9L-320.2,786.1z"/>
              <path className="st17" d="M-327,737.2c0,0,4.2-3.7,6.9-5c0,0,1.7-9.2,4.7-13.6c0,0-5,6.4-6.2,12.6
                C-323.8,732.8-325.7,734.8-327,737.2z"/>
              <path className="st17" d="M-278.1,711.7c0,0-3.3,19.7-5.6,23.4l0.4,4.8C-283.3,739.9-278.8,732.8-278.1,711.7z"/>
              <path className="st23" d="M-304,775.5c0,0-10.9-6.4-3.5-31.7c7.4-25.2,23-17.3,25.7-7.9l0,0C-281.7,735.9-283.4,760.9-304,775.5z"/>
              <path className="st6" d="M-381.8,621.4c-4-12.9-13.5-9.9-19.8-6.2c-6.3,3.7-3.5-3.5,3.9-4.9c0,0-6.5-5.8-20.2,2
                c0,0,2.5-7.2,13.7-14.1c0,0-14.9,9.3-17.9,10.9c-2.6,1.4,5.4-9.9,5.4-9.9l-12.4-0.2c0,0-1.1-17.8,18.2-23.4
                c21.2-6.1-4.3-3.2-4.3-3.2s-0.5-20.3-19.8-18.7c0,0,15.3-45.6,54.5-44.2c0,0-3.3-24.9-17.2-24.4c0,0,5-7,8.9-5.7l-9.8-7.5
                c0,0,28.8-13.5,50.7,20c0,0,16.6-41,17.4-46.7s2.3-11.5,0.8-15.2c0,0,12.4,4.5,11.5,10.3c0,0,2.9-4.6-0.8-8.1
                c0,0,20.5,12.5,16.8,22.6l3.1-8.6c0,0,6.1,4.5,5.9,8.7c-0.2,4.2,3.2-9.1,3.2-9.1s20.6,12,16.5,44.7c0,0,70.4-12,79.6,49.1
                l-14.1-5c0,0,10.4,6.5,10.8,14.1c0,0,19.1,8.4,9.4,52.8c0,0-3.7-23.5-13.9-24.6c0,0,18,11.5,12.3,52.4c0,0-6-7.4-12.1-10.5
                c0,0,12.7,11.4,3.8,33.5c0,0-1.5-6.3-12.3-9.2l0.8,4.6l-17.5-5.7c0,0-27.8-2.3-36.5,4.9c0,0,0.8-11.2-8.8-7L-381.8,621.4z"/>
              <path className="st5" d="M-251,623.5c-5.8,23.8-25.9,45.8-59,39.4c-6.8-1.3-14-0.7-21.2-2.5c-28.8-7.1-53.9-7.4-50.4-49.6
                c0-0.7-0.2-1.4-0.4-2c-0.9-5.9-4.7-12.3-3.2-18.3c7.2-29.5,44.7-46.4,81.8-37.3c6.6,1.6,13,4.1,19.1,7.3
                C-259,574-245.1,599.5-251,623.5z"/>
              
                <ellipse transform="matrix(-0.9712 -0.2384 0.2384 -0.9712 -867.2673 1127.5516)" className="st24" cx="-365.5" cy="616.2" rx="5.6" ry="8.4"/>
              
                <ellipse transform="matrix(-0.9712 -0.2384 0.2384 -0.9712 -763.5038 1157.9237)" className="st24" cx="-311.7" cy="625.1" rx="5.6" ry="8.4"/>
              <path className="st6" d="M-381.8,621.4c0,0-1.3-34,15-38.2c0,0,3,7.7,6.3,8.6c0.6,0.2,3.5-19.8,15.6-22.7c0,0,32.5,25.2,39.2,18
                c-1-1.1-13.1-10.1-10.7-15.9c1.3-3.2,29.8,5.6,34,37.1c1.8,1.8,6.5-2.5,9.6-9.9c5.7-13.9,2,25.7-3,33.1
                c-0.4,0.5,7.7-1.3,11.1-4.1s-8.5,20.6-9.8,23.2s25-5,31.4-27.8c5-18.1-8.8-49-22.5-61.6c-11.1-10.2-41.6-27.2-78.8-22.6
                c-44.4,5.5-48.4,48-48.8,54C-393.6,596.6-383.3,620.6-381.8,621.4z"/>
              <path className="st25" d="M-309,612.4c0,0,12.6,2.1,17.2,9.2c0,0,9.1-2.5,0.6-8.5c0,0,4.1-0.2,4.4,1.2c0,0,1.2-6-8.4-7.1
                c0,0,6.2-0.9,6.3,0.7c0,0-6.9-10.3-14.2-3.2c0,0,3-4.3,4.6-4c1.6,0.3-0.7-0.4-0.7-0.4s-16.8-0.1-13.5,10.9L-309,612.4z"/>
              <path className="st25" d="M-380.8,615c-0.3-2.9-11.6-7.3-20.9,0.3c0,0,15.6-4.3,19.9,7.8L-380.8,615z"/>
              <path className="st25" d="M-419.7,595c18.5-7.2,26.6-0.2,26.6-0.2c-7.3-2.6-29,14.2-29,14.2c26.5-14.2,41.9-4.1,41.9-4.1l3-10.7
                C-402,576.8-419.7,595-419.7,595z"/>
              <path className="st5" d="M-366.8,583.3c0,0-24.5,6.5-12.6,51.1L-366.8,583.3z"/>
              <path className="st25" d="M-417.2,562.5c0,0,30.8-12.7,48.4,19.4C-368.9,581.9-382.5,560.3-417.2,562.5z"/>
              <path className="st25" d="M-267.7,648.5c0,0,16.3-12,28.5-13.1c6.3-0.6,14.3-0.6,20.9,7.7c0.7,0.9-0.3,4.7-0.3,4.7l-8-5.7
                c0,0-34,4.9-40.5,7.2C-271.7,650.9-267.7,648.5-267.7,648.5z"/>
              <path className="st25" d="M-247.5,623.7c4.3,0.5,14.2,1.2,19.8-11.5s5.2-14.2,5.2-14.2s1.1,21.3-3.1,24.5c0,0,20.9,5.8,18.5,29.6
                c0,0-14.3-24.5-41.6-24.1c-11.4,0.2-14.7,4.7-17.6,5.7l2.2-6.7C-264.1,627.1-255.8,622.8-247.5,623.7z"/>
              <path className="st25" d="M-189.3,629.2c0,0-3.3-28-13.7-29.5C-203,599.8-186.3,595.8-189.3,629.2z"/>
              <path className="st25" d="M-257.6,500.9c0,0,49.9-5.3,63.8,38.8C-193.9,539.6-213,501.8-257.6,500.9z"/>
              <path className="st25" d="M-187.5,600.6c0,0,5.6-40.7-13.2-45.9c0.4-7.2-2-14.2-6.6-19.7c0,0,10,5.9,10.2,13.7
                C-197.1,548.7-177.4,557.2-187.5,600.6z"/>
              <path className="st25" d="M-274.2,502.5c0,0-2-42.5-15.7-56.7c0,0,21.9,12.3,16.5,44.7L-274.2,502.5z"/>
              <path className="st25" d="M-386.2,473.8c0,0,44.3-6,57.1,55.2C-329.1,529-341.8,488.2-386.2,473.8z"/>
              <path className="st25" d="M-388,484.6c0,0,15.2,0.7,16.8,20.4C-371.2,505-364.4,479.3-388,484.6z"/>
              <path className="st25" d="M-435.1,553.6c0,0,40.9-41.5,71.6-38.9C-363.4,514.7-395.4,497.1-435.1,553.6z"/>
              <path className="st25" d="M-347.4,568.1c-11.7-6.6-38.9-27-29.7-44.7c0,0-16.8,17.6,8.5,33.4c0,0-15.1-7.1-22.4-3.1
                c0,0,25.4,8.4,39.5,19.4c0,0,3.2-3.2,6.6-3.9C-344.9,569.2-346.8,568.4-347.4,568.1z"/>
              <path className="st25" d="M-305.7,587.2c0,0-44.9-34.1-12.9-31.4C-318.6,555.8-373.3,539-305.7,587.2z"/>
              <path className="st25" d="M-305.7,587.2c0,0-4.3,8.4-34.2-14.3C-339.9,572.9-316.3,587.2-305.7,587.2z"/>
              <path className="st25" d="M-329.7,430c0,0,3.3,10.4-18.2,62C-347.9,492-309.5,450-329.7,430z"/>
              <path className="st25" d="M-289.5,537.9c0,0,21.2-15.1,35.5-5.5c0,0-10.4-14.2-28.6-9.3c0,0,6.4-3.7,12.3-4.3c0,0-10.5-2-14.4-0.1
                c0,0-3.6-19.5-41-16.8C-325.7,501.9-286.6,504.9-289.5,537.9z"/>
              <path className="st25" d="M-218.7,578.6c-5.1-3-11.3-3.7-17.6-3c3.2-3.2,6.9-8.5,9.7-16.8c6.3-18.9-16.4-16.8-16.4-16.8
                s16.8,1.3,12.6,15s-30.7,23-30.7,23c3.4-8.2,4.8-17.8-2.7-23.9c0,0,3.7,16.6-11.1,41.4c5.4-46.9-23.6-49.4-23.6-49.4
                c23.2,9.8,20.2,51,19.6,55.7c-1.1,1.5-2.2,3.1-3.4,4.7c0,0,3.1,5.2,12-12.6l0.4,8.7c23.7-35.2,62.7-15.5,62.7-15.5
                C-209.5,583.3-215.4,580.6-218.7,578.6z M-278.9,603.5l3.8-6C-276.2,599.5-277.5,601.5-278.9,603.5L-278.9,603.5z"/>
              <path className="st18" d="M-367.8,701.9c0,0,12.4-26.8,19.6-31.2l-3.2-2.5C-351.5,668.2-364.6,687.8-367.8,701.9z"/>
              <path className="st25" d="M-288.7,501.8c-7-9.7-14.8-21.1-15.2-29.3c-0.2-3.5,2-13.9,2-13.9c3.2-9.2-2.2-19.1-17.1-26.4
                c0,0,12.2,8.9,8.1,35.2c-2.3-3.7-8.1-8.7-8.1-8.7c7.6,7.7,3.5,14.5,5.9,19.8C-310.9,483.5-288.7,501.8-288.7,501.8z"/>
              <path className="st25" d="M-353,635c-7-7.5-30.3-16.2-33.6,23.2c0,0,2.6-5.5,6.5-4.5c0,0-3.2,8.9,1.5,11.8c0,0,4-9.2,7.5-6.4
                c0,0,5.2,12.9,11.4,14.8c0,0-0.2-8.6,3.9-8l4.9,10.7l8-9.8c0,0,3.6,5.7,0.4,7.4c0,0,5.7,1.4,8.1-5.1c0,0,6.8,3.8,4.4,10
                c0,0,5.6-1.7,7.1-9.7l4.8,8.9l3.8-12.6c0,0,9.4,5.5,8.8,9.9c0,0,4.7-10.6-2.5-19.6l9.8,3.5c0,0-17.8-29.3-38.4-18.7
                C-339.9,642.5-343.9,644.8-353,635z"/>
              <path className="st9" d="M-328.5,651.4c0,0,25.2,4.8,23.2,23.4C-305.3,674.8-312,656-328.5,651.4z"/>
              <path className="st9" d="M-359.9,673.9c0,0,3.2-20.6,10.7-21.9C-349.2,652-365,654.6-359.9,673.9z"/>
              <path className="st9" d="M-330.1,679.2c0,0,6.2-11.8-0.1-17.2C-330.2,662-317.7,667.8-330.1,679.2z"/>
              <path className="st9" d="M-351.1,676.6c0,0,8.6-12.7,8.2-19c0.8,1.4,1.3,2.9,1.3,4.5C-341.4,665.7-343,671-351.1,676.6z"/>
              <path className="st9" d="M-343.3,651.4c0,0,4.3,13.4-0.1,15.8l-0.1,1.9c1.4,0.6,2.2,2.1,2,3.5C-341.5,675-335.3,663.6-343.3,651.4z"
                />
              <path className="st9" d="M-360,673.3c0,0-8.2-18.4,1.9-24.5c0,0-17.8,10.4-1.7,25.2"/>
              <path className="st9" d="M-378.8,665.5c0,0,6.1-12.5,12.4-12C-366.4,653.5-380.3,647.8-378.8,665.5z"/>
              <path className="st9" d="M-386.7,658.2c0,0,3.5-6.4,11.9-4.8l3.3-0.9C-371.5,652.6-382.8,645.5-386.7,658.2z"/>
              <path className="st9" d="M-349,645c0,0-21-27.5-33,0.3c0,0,7.4-10.5,14.5-7.9c0,0-4.2,0.9-4.8,4.4C-372.3,641.8-364,635.1-349,645z"
                />
              <path className="st9" d="M-339.7,644.9c0,0,20.1-8.6,31.4,6.9C-308.3,651.8-316.9,643.3-339.7,644.9z"/>
              <path className="st25" d="M-354.2,601.2c0,0,3.6-10.5-4.6-11.3c0,0,3,2.8,1.8,4.3s-0.9,1-0.9,1s-2.1-11.4-17.3-4.6
                c1.5,0.1,2.9,0.6,4.1,1.5c0,0-6.1-0.8-7,3.3c0,0,2.8,0.2,3.6,1.5c0,0-6.3,2.8-0.6,8.9C-375.1,605.8-361.5,598.5-354.2,601.2z"/>
              <path className="st6" d="M-367.9,581.8l0.2,0.5c0.9,1.9,4.1,8.9,6.8,11.2c0,0,3.6-15.8,9.4-20.5"/>
            </g>
          </g>
        </g>
      </svg>
    </div>);
  }

}

export default UploadTarget;