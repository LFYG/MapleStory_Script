importPackage(net.sf.odinms.client);
var status = 0;



function start() {
status = -1;
action(1, 0, 0);
}


function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 2 && mode == 0) {
cm.sendOk("Rawr!?");
cm.dispose();
return;
}

if (mode == 1)
status++;
else
status--;

if (status == 0) {
cm.sendNext("#b"+cm.mxdmz()+"ð�յ�#k,ף�����ϳ�ϵͳ\r\n#b1.�ҿ���Ϊ��ϳ�ף������,ֻҪ�����㹻�ĵ���.\r\n#b2.ף������,�Ҿ�ʱʹ����,��ʹʧ��װ��Ҳ������ʧ�Ҿ����. \r\n#b3.�ϳ�ף��������Ҫ#v4001035##b��#v4031344#.\r\n#b4.���Ϻϳɵ��߸����е�BOSS���б�. \r\n#b5.ӵ�����ϵ��ߺ�ÿ�οɺϳ�3��ף������Ŷ. ");

} else if (status == 1) {
if ((cm.haveItem(4001035, 1)) && (cm.haveItem(4031344,1))) {
cm.sendYesNo("����ร��������Ѿ��ռ�������ף����������Ҫ�����в���, �����ھ������Ҹ������� #bף������#k ��?");

} else if (!cm.haveItem(4001035, 1)) {
cm.sendOk("#b�Բ���,���ĵ��߲���,���޷�Ϊ���ϳ�ף������.");
cm.dispose();

} else if (!cm.haveItem(4031344,1)) {
cm.sendOk("#b�Բ���,���ĵ��߲���,���޷�Ϊ���ϳ�ף������.");
cm.dispose();
}
			
} else if (status == 2) {
cm.gainItem(4001035, -1);
cm.gainItem(4031344, -1);
cm.gainItem(2340000, 3);
			
}
}
}