'use strict';

var _leancloudStorage = require('leancloud-storage');

var _leancloudStorage2 = _interopRequireDefault(_leancloudStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devServer = {
  appId: 'DmKxXTYX9AaXDHbtBHHgEUjr-gzGzoHsz',
  appKey: 'D80j840PKhyq21dW7aJnwKrJ'
};
var onlineServer = {
  appId: 'VPVzwjElxgAwTwJBbdEwoMlx-gzGzoHsz',
  appKey: 'h9XawPpBQqLHEMj7eDFfVIU5'
};

_leancloudStorage2.default.init(devServer);

var versionNumber = '0.9.30b';

var Version = _leancloudStorage2.default.Object.extend('EditorVersions');
var newVersion = new Version();
newVersion.set('version', versionNumber);
newVersion.set('linkMacOS', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20' + versionNumber + '.pkg');
newVersion.set('linkWin32', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-ia32.exe');
newVersion.set('linkWin64', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-x64.exe');
newVersion.set('linkBaiduMacOS', 'https://pan.baidu.com/s/1hsMb78K');
newVersion.set('linkBaiduWin32', 'https://pan.baidu.com/s/1gfonAxl');
newVersion.set('linkBaiduWin64', 'https://pan.baidu.com/s/1i4Phjnv');
newVersion.set('macSize', '388.47 MB');
newVersion.set('win32Size', '299.04 MB');
newVersion.set('win64Size', '312.71 MB');
newVersion.set('releaseNote', '新增功能\n1. 在“发布”界面增加选项，可选择显示视线中心点。\n2. 在节点上增加“显示进度条”选项，配合停留x秒触发区，能够在视线中心点周围显示一个圆环进度条。\n3. 在“发布”界面增加选项，可以选择不显示作品卡片直接进入作品内容。\n\n修复的Bug：\n1. 修正了多次播放视频时的内存泄漏，无论播放多少音视频现在都不会卡顿了。\n2. 重新实现了“淡入淡出”，大幅提升性能。\n3. 修正了切换全景视频或者图片时播放器的抖动。\n4. 修正了音量调节不能设置为0%的问题。\n5. 修正了连续触发切换会黑屏的问题。\n\n对原有功能进行的修改\n1. 一旦切换全景视频或者图片，屏幕上所有的局部内容都会一起消失。\n2. 局部视频播放完毕后不再保留最后一帧画面。');

newVersion.save().then(function (ver) {
  console.log(ver.id + ' saved!');
});
