
var status = 0;

var fsName = Array(
"",
"ʥ��",
"����",
"����",
"�ս���"
)

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
    if (status == 0) {
	var f = getFSdj(cm);
	var selStr = "�𾴵�" + ((f==0)?"���":"#r"+fsName[f]+":#k") + "#r#h ##k����,��ѡ��������Ҫ�Ĺ���\r\n" + "#dת��������#r" + getZScs(cm) + "\r\n#L1##d��Ҫת��#L2##g��Ҫ����#L3##kת��������˵��";
	cm.sendSimple(selStr);
    } else if(status == 1) {
	if (selection==3){
		cm.sendOk("#r[ע������]\r\n#dת�������ĵȼ���Ϊ��Ϊ1�������һ�ȡһ��#z04032515#\r\nת����Ҫ��ɫ�ﵽ200������ʿ�ź�������Ҫ��ɫ�ﵽ180��\r\n�����ȼ���Ϊ��ʥ�ˡ����ˡ��������ս���\r\n\r\n#r[��������]\r\n#kת��ǰ�����κθ���\r\n#dת�������Ե�=ת������*100��\r\n#rʥ�ˣ�ȫ����=5000  ���Ե�=ת������*20��\r\n���ˣ�ȫ����=10000  ���Ե�=ת������*30��\r\n������ȫ����=15000  ���Ե�=ת������*50��\r\n�ս��ߣ�ȫ����=20000  ���Ե�=ת������*75��\r\n\r\n[����Ҫ��]\r\n#kʥ�ˣ���ɫ�ﵽ50ת\r\n���ˣ���ɫ�ﵽ100ת��һ��#z04032517##v04032517#\r\n��������ɫ�ﵽ200ת��һ��#z04032518##v04032518#\r\n�ս��ߣ���ɫ�ﵽ400ת��һ��#z04032519##v04032519#");
		cm.dispose();
	} else {
		cm.dispose();
		cm.openNpc(2112003,selection);
	}
    }
}

//ת������
function getZScs(cm){
return (cm.itemQuantity(4032515) + cm.itemQuantity(4032516) * 100 + cm.itemQuantity(4032517) * 50 + cm.itemQuantity(4032518) * 100 + cm.itemQuantity(4032519) * 200 + cm.itemQuantity(4032520) * 400);
}

//�����ȼ�
function getFSdj(cm){
	var f_p = 4032516;
	for (var i = 4;i >= 1;i--){
		if (cm.itemQuantity(f_p + i)!=0) return i;
	}
	return 0;
}
