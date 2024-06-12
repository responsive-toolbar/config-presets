/**
 * Contains HTML templates for mockups of various device types. Each property is a device category,
 * such as phone, tablet, etc., and contains an HTML string representing the mockup of that device.
 * These templates can be used to visually represent different devices in a UI.
 *
 * @type {Object}
 */
export const DeviceMockups = {
  browser:
    `<div id="content-wrapper" style="background-color: #555; border-radius: 10px; box-sizing: content-box; padding: 36px 2px 2px 2px; position: relative;">
      <div style="background-color: #FE5F57; border-radius: 50%; height: 12px; left: 20px; position: absolute; top: 12px; width: 12px;"></div>
      <div style="background-color: #FEBC2F; border-radius: 50%; height: 12px; left: 40px; position: absolute; top: 12px; width: 12px;"></div>
      <div style="background-color: #28C840; border-radius: 50%; height: 12px; left: 60px; position: absolute; top: 12px; width: 12px;"></div>
      <div style="border-radius: 0 0 10px 10px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  desktop:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 40px; position: relative;">
      <div style="height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  display:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 40px; position: relative;">
      <div style="height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  notebook:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 40px; position: relative;">
      <div style="height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  phone:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="background-color: #444; border-radius: 0.5rem; height: 46px; left: -7px; position: absolute; top: 124px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0.5rem; height: 46px; left: -7px; position: absolute; top: 178px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0.5rem; height: 64px; position: absolute; right: -7px; top: 142px; width: 3px;"></div>
      <div style="border-radius: 40px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  phoneGooglePixel8Pro:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 45px; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="background-color: #444; border-radius: 0 2px 2px 0; height: 50px; position: absolute; right: -7px; top: 300px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0 2px 2px 0; height: 100px; position: absolute; right: -7px; top: 400px; width: 3px;"></div>
      <div style="border-radius: 35px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
      <div style="background-color: #000; border-radius: 50%; height: 24px; left: 50%; position: absolute; top: 18px; width: 24px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
    </div>`,
  phoneIphone14Pro15:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 65px; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="background-color: #444; border-radius: 2px 0 0 2px; height: 35px; left: -7px; position: absolute; top: 160px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 2px 0 0 2px; height: 65px; left: -7px; position: absolute; top: 220px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 2px 0 0 2px; height: 65px; left: -7px; position: absolute; top: 300px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0 2px 2px 0; height: 100px; position: absolute; right: -7px; top: 270px; width: 3px;"></div>
      <div style="border-radius: 55px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
      <div style="background-color: #000; border-radius: 19px; height: 38px; left: 50%; position: absolute; top: 20px; width: 128px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
    </div>`,
  phoneIphone13:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="background-color: #444; border-radius: 0.5rem; height: 46px; left: -7px; position: absolute; top: 124px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0.5rem; height: 46px; left: -7px; position: absolute; top: 178px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0.5rem; height: 64px; position: absolute; right: -7px; top: 142px; width: 3px;"></div>
      <div style="border-radius: 40px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
      <div style="background-color: #000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; height: 35px; left: 50%; position: absolute; top: 10px; width: 164px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
    </div>`,
  phoneIphone12:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="background-color: #444; border-radius: 0.5rem; height: 46px; left: -7px; position: absolute; top: 124px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0.5rem; height: 46px; left: -7px; position: absolute; top: 178px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0.5rem; height: 64px; position: absolute; right: -7px; top: 142px; width: 3px;"></div>
      <div style="border-radius: 40px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);</div>
      <div style="background-color: #000; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; height: 35px; left: 50%; position: absolute; top: 10px; width: 228px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
    </div>`,
  phoneSamsungGalaxyS24Ultra:
    `<div id="content-wrapper" style="background-color: #000; border: 5px solid #555; border-radius: 2px; box-sizing: content-box; padding: 8px; position: relative;">
      <div style="background-color: #444; border-radius: 10px; height: 20px; left: 50%; position: absolute; top: 10px; transform: translateX(-50%); width: 120px;"></div>
      <div style="background-color: #444; border-radius: 0 2px 2px 0; height: 100px; position: absolute; right: -8px; top: 150px; width: 3px;"></div>
      <div style="background-color: #444; border-radius: 0 2px 2px 0; height: 50px; position: absolute; right: -8px; top: 300px; width: 3px;"></div>
      <div style="border-radius: 5px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
      <div style="background-color: #000; border-radius: 50%; height: 15px; left: 50%; position: absolute; top: 12px; width: 15px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
    </div>`,
  tablet:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; border-radius: 50px; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="border-radius: 40px; height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  television:
    `<div id="content-wrapper" style="background-color: #000; border: 4px solid #555; box-sizing: content-box; padding: 10px; position: relative;">
      <div style="height: 100%; overflow: hidden; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  watch:
    `<div id="content-wrapper" style="box-sizing: content-box; padding: 60px 30px; position: relative;">
      <div style="background-color: #252525; border-radius: 2em 2em 0 0; height: 50px; left: 50%; position: absolute; top: 0px; width: 60%; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
      <div style="background-color: #252525; border-radius: 0 0 2em 2em; bottom: 0; height: 50px; left: 50%; position: absolute; width: 60%; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
      <div style="border-radius: 50px; box-shadow: 0 0 0 8px #000, 0 0 0 15px #555, 0 0 0 18px #333; height: 100%; overflow: hidden; position: relative; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
      <div style="background-color: #222; background-image: linear-gradient(0deg, transparent 0%, #666 50%, transparent 100%), linear-gradient(0deg, transparent 50%, #555 50%); background-size: 100% 100%, 3px 3px; border-radius: 5px; box-shadow: inset 2px 0 2px #333, inset -2px 0 2px #333; height: 35px; position: absolute; right: 0px; top: 32%; width: 14px;"></div>
    </div>`,
  watchGalaxy:
    `<div id="content-wrapper" style="box-sizing: content-box; padding: 80px 30px; position: relative;">
      <div style="background-color: #444; border-radius: 0 50% 50% 0; height: 55px; position: absolute; right: 19px; top: 90px; -webkit-transform: rotate(-30deg); transform: rotate(-30deg); width: 10px;"></div>
      <div style="background-color: #444; border-radius: 0 50% 50% 0; bottom: 90px; height: 55px; position: absolute; right: 19px; -webkit-transform: rotate(30deg); transform: rotate(30deg); width: 10px;"></div>
      <div style="border-bottom: 90px solid #252525; border-left: 20px solid transparent; border-right: 20px solid transparent; border-radius: 35% 35% 0 0; height: 0; left: 50%; position: absolute; top: 0; width: 160px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
      <div style="border-left: 20px solid transparent; border-radius: 0 0 35% 35%; border-right: 20px solid transparent; border-top: 90px solid #252525; bottom: 0; height: 0; left: 50%; position: absolute; width: 160px; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
      <div style="border-radius: 100%; box-shadow: 0 0 0 8px #151515, 0 0 0 10px #000, 0 0 0 20px #444, 0 0 0 24px #333; height: 100%; overflow: hidden; position: relative; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
    </div>`,
  watchFitbit:
    `<div id="content-wrapper" style="box-sizing: content-box; padding: 80px 30px; position: relative;">
      <div style="background-color: #252525; border-radius: 35% 35% 0 0; height: 80px; left: 50%; position: absolute; top: 0px; width: 60%; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
      <div style="background-color: #252525; border-radius: 0 0 35% 35%; bottom: 0; height: 80px; left: 50%; position: absolute; width: 60%; -webkit-transform: translateX(-50%); transform: translateX(-50%);"></div>
      <div style="border-radius: 30%; box-shadow: 0 0 0 4px #000, 0 0 0 14px #555, 0 0 0 20px #333; height: 100%; overflow: hidden; position: relative; width: 100%; -webkit-transform: translateZ(0); transform: translateZ(0);">{screen}</div>
      <div style="background-color: #444; border-radius: 10px 0 0 10px; height: 75px; left: 4px; position: absolute; top: 50%; width: 6px; -webkit-transform: translateY(-50%); transform: translateY(-50%);"></div>
    </div>`,
};