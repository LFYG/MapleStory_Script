var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var beibao = 2;
var beibaokj = 1;



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
        } else if (status == 0) {

          vipname = cm.getVipname();
          reborns = cm.getPlayer().getReborns();
          talks = "#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n";
       //   texts += talks + "#k����#rMapleWing����#k��ð�ռң� #r " + vipname + " #k\r\n����  #r<ʱ��Ů��>���� #k���ܸ����ܼ�����!\r\n";

          if (reborns == 0) {
          texts += "��������������ֻ���ҵ���Ӱ.....\r\n#b������ңԶ��ʱ���ȶ���ӡ�ڰ�ħ��ʦ��ʱ�շ�ӡ!\r\n�ڰ�ħ��ʦ������������׼�������ƽ��ӡ!\r\n";
           }

      //    texts += "#dΪ��ά��MapleWing����ĺ�ƽ! �ҿ���ʹ�� #rʱ������� #d��������� #r��������#d !��������ӵ�и�ǿ�������!\r\n";


          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#dĿǰ������޾���Ϊ��  #e#r" + reborns + "#n  ����\r\n#d��������Ҫ����鿴�������޾�����������!\r\n#b���ٴ�ȷ�����ѡ��!\r\n#L1##r�ǵģ���Ҫ����ʱ���ϴ��#l\r\n#L2#�鿴�������޾�����������#l\r\n#b#L3#������һҳ#l";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
                      break;
               case 2:
                      cm.dispose();
                      cm.openNpc(2144000, 102);
                      break;
               case 3:
                      cm.dispose();
                      cm.openNpc(2144000, 103);
                      break;
               case 4:
                      cm.dispose();
                      cm.openNpc(2144000, 104);
                      break;
          }

       }


  }