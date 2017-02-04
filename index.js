'use strict';

var _leancloudStorage = require('leancloud-storage');

var _leancloudStorage2 = _interopRequireDefault(_leancloudStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appId = 'VPVzwjElxgAwTwJBbdEwoMlx-gzGzoHsz';
var appKey = 'h9XawPpBQqLHEMj7eDFfVIU5';
_leancloudStorage2.default.init({ appId: appId, appKey: appKey });

var versionNumber = '0.9.11b';

var Version = _leancloudStorage2.default.Object.extend('EditorVersions');
var newVersion = new Version();
newVersion.set('version', versionNumber);
newVersion.set('linkMacOS', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20' + versionNumber + '.pkg');
newVersion.set('linkWin32', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-ia32.exe');
newVersion.set('linkWin64', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-x64.exe');
newVersion.set('linkBaiduMacOS', 'https://pan.baidu.com/s/1kVJkBB5');
newVersion.set('linkBaiduWin32', 'https://pan.baidu.com/s/1kVkEIz1');
newVersion.set('linkBaiduWin64', 'https://pan.baidu.com/s/1c2xemjA');
newVersion.set('macSize', '388.28 MB');
newVersion.set('win32Size', '296.15 MB');
newVersion.set('win64Size', '309.17 MB');
newVersion.set('releaseNote', '紧急修复windows上包含全景图片的工程编译失败的问题');

newVersion.save().then(function (ver) {
  console.log(ver.id + ' saved!');
});
