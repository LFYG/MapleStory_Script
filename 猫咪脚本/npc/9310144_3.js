
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";////����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";////����!
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//������Ա
var z = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//����
var tt ="#fEffect/ItemEff/1112811/0/0#";//����
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = "- #d#e��è����̳�ϵͳ#n#k��\r\n\r\n";
	selStr += "#d����ǰӵ�п��õ��Ϊ�� #r " + cm.getPlayer().getCSPoints(1) + " #k#d��\r\n����ǰӵ�а�è��ң�  #r"+cm.getPlayerPoints()+"#k #d��#k\r\n\r\n";
	selStr += "#b#L0#"+ttt6+" �����è���[�������� 1��10]#l\r\n\r\n";
	selStr += "#L1#"+ttt6+" ��è����̳�[���õ��þ��̵�]#l\r\n\r\n";
	selStr += "#L2#"+ttt6+" ����վ���г�ֵ[������ֵר��]#l\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9310144, 10);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9310144, 11);
            break;
        case 2:
            cm.dispose();
            cm.openWeb("http://pay.qhmxd.com/C9282C7CB115FF80DE1D1E332714A98A8CF197AFA4001C48D851F420F336115C833DC915FFCC72950658A03EC4A9D8642927DB8C4F9602901B207E24C1B6025FADFA05D03BB7D3019B2DDBAE3103B0D9");
            break;
        













}
    }
}
