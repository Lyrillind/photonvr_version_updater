'use strict';

var _leancloudStorage = require('leancloud-storage');

var _leancloudStorage2 = _interopRequireDefault(_leancloudStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appId = 'VPVzwjElxgAwTwJBbdEwoMlx-gzGzoHsz';
var appKey = 'h9XawPpBQqLHEMj7eDFfVIU5';
_leancloudStorage2.default.init({ appId: appId, appKey: appKey });

var versionNumber = '0.9.1b';

var Version = _leancloudStorage2.default.Object.extend('EditorVersions');
var newVersion = new Version();
newVersion.set('version', versionNumber);
newVersion.set('linkMacOS', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20' + versionNumber + '.pkg');
newVersion.set('linkWin32', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-ia32.exe');
newVersion.set('linkWin64', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-x64.exe');
newVersion.set('linkBaiduMacOS', 'https://pan.baidu.com/s/1hsuTbxU');
newVersion.set('linkBaiduWin32', 'https://pan.baidu.com/s/1c21gNFa');
newVersion.set('linkBaiduWin64', 'https://pan.baidu.com/s/1pL10tVP');
newVersion.set('macSize', '388.27 MB');
newVersion.set('win32Size', '296.14 MB');
newVersion.set('win64Size', '309.18 MB');
newVersion.set('releaseNote', '紧急更新：修正了在关闭编辑器时可能导致项目文件损坏的问题。同时增加了项目文件自动备份的功能。建议所有用户更新。');

newVersion.save().then(function (ver) {
  console.log(ver.id + ' saved!');
});
