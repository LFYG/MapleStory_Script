var status = 0;
var t=new Array("��Ǯ","ȡǮ","�鿴","����");
var money=new Array("100","300W","500W","1000W"); 
var money1=new Array("100","3000000","5000000","10000000"); 
var status = 0;
var a = 11;

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
     if(cm.getChar().getAccountID()==1){
        cm.sendSimple("���� #r#h ##k ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#b#L0#�������޼ӵ����Ժ���----1#l\r\n#b#L1#�������޼ӵ����Ժ���----2#l\r\n\r\n��Ŀǰ������#r " + cm.getVip() + " #k");
 } else {

cm.sendOk("�Բ����Ҳ���Ϊ�����"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            //cm.gainChongxiu(1);
            cm.getPlayer().resetChongxiusx2(a,40,40,40, 40, 300, 300, 300, 300);
            //cm.Chongxiusx1(a,40,400,400, 400);
            //cm.getPlayer().resetAPSP();
              //cm.setLevel(10);
            cm.sendOk("�ɹ�.")
            break;
        case 1:
            cm.dispose();
            //cm.Chongxiusx(400,400,400, 400);
            //cm.getPlayer().resetAPSP();
              //cm.gainItem(5660000,1);
            cm.sendOk("�ɹ�.")
            break;
        case 2:
            cm.dispose();
            cm.ZreHyfame();
            break;

        case 3:
            cm.dispose();
            cm.openNpc(9300011, 4);
            break;

        case 4:
            cm.dispose();
            cm.openNpc(9300011, 5);
            break;

        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("��ֵ��վ.\r\n������ֵ����Ϊ1:3000.\r\n���������������.\r\n�����ʲô��������ѯ����Ա.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}