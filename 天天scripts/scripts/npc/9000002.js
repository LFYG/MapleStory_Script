//function start() {
//  var map = cm.getSavedLocation("EVENT");
//  if (map > -1 && map != cm.getMapId()) {
//      cm.warp(map, 0);
//  } else {
//          cm.warp(910000000, 0);
//  }
//    cm.dispose();
//}

//function action(mode, type, selection) {
//}

/*
    �������������
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    cm.setBossLog("������");
    cm.setBossLog("�ܼ�������", 1);
    cm.gainMeso(1000000);
    cm.gainItem(4032398, 1);
    cm.warp(910000000);
    cm.sendOk("��ȥ�ɳ����������,��100WҲ�������!���Ǿʹ˰��֣��������ڴ˶�л�ˣ����գ�������л��");
    cm.removeNpc(910530001, 9000002);
    cm.dispose();
}
