
importPackage(net.sf.odinms.server);
importPackage(java.util);
importPackage(net.sf.odinms.client);

var slot;
var item;
var qty;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status <= 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("Ϊ�˰���������˹�����Լ���װ��,�ҷǳ���æ��");
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendGetNumber("������װ����˳������,�ҽ�Ϊ��������.\r\n#bװ��������װ���޷�����,�޷�����.�����ʺ����뱻����֪��Ҳ����.\r\n#r[ע��:�˹���ֻ��ʹ����װ����!]",1,1,100);
        } else if (status == 1) {
            slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);

cm.sendYesNo("��ȷ��Ҫ�����������װ����?\r\n")
        } else if (status == 2) {
           var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
cm.getChar().lockitem(slot,true)
cm.dispose();
}
    }
}  
