
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
            cm.sendNext("�ҽ�Ϊ������#bװ������һ��λ�õ�װ��#k,��Ҫ������?");
        } else if (status == 1) {
            slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);

cm.sendYesNo("��ȷ��Ҫ�������װ����?")
        } else if (status == 2) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1)==0){
cm.sendOk("���������Ʒλ��û��װ��!")
cm.dispose();
}else{
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
cm.sendOk("�ɹ�.");
cm.dispose();
}}
    }
}  
