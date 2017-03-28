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

var Version = _leancloudStorage2.default.Object.extend('EditorVersions');
var newVersion = new Version();
newVersion.set('version', versionNumber);
newVersion.set('linkMacOS', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20' + versionNumber + '.pkg');
newVersion.set('linkWin32', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-ia32.exe');
newVersion.set('linkWin64', 'http://7xlt5v.com1.z0.glb.clouddn.com/Photon%20Engine%20Setup%20' + versionNumber + '-x64.exe');
newVersion.set('linkBaiduMacOS', 'https://pan.baidu.com/s/1geVoAxt');
newVersion.set('linkBaiduWin32', 'https://pan.baidu.com/s/1hrS4PnQ');
newVersion.set('linkBaiduWin64', 'https://pan.baidu.com/s/1bpiogpT');
newVersion.set('macSize', '390.24 MB');
newVersion.set('win32Size', '298.09 MB');
newVersion.set('win64Size', '311.10 MB');
newVersion.set('releaseNote', '原有功能的调整\n分离了视频、音频、图片节点的“淡入淡出”，现在可以单独勾选淡入和淡出，并且按需要分别设置时长。\n\n新增功能\n1. 动态音量调节。\n	音频节点支持添加任意数量的音量调节点，在运行时动态的进行调整。典型案例是听到别人心里的声音。场景里有三个人，观众目光看向谁就能听到谁的心声。作品中其实共有三条音轨同时播放，根据观众的目光去调节其他两条音轨的音量就可以实现。这个技术还能运用在动态为音乐加入不同的乐器，或者在同一个节奏下转换乐曲的情绪。\n\n2. 累加触发节点。\n	支持设置累加计算，当累加的值到达特定数字的时候触发。\n	节点的设计初衷是为了让观众在当前场景的一系列动作影响到后续播放哪一个新的场景。比如，场景是一场面试，过程中如果观众总在东张西望，那么面试结束后就播放“面试失败”分支，否则播放“面试成功”分支。这个节点的引入可以实现非常复杂的网状剧情结构。');

newVersion.save().then(function (ver) {
  console.log(ver.id + ' saved!');
});
