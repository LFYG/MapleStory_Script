var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;
var lvs;

var beibao = 2;
var beibaokj = 1;

var xiaoxi = " .... ";
var zfid = 5120037;     // 5120043  Ϊϣ��˹Ů������ף��


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
          lvs = cm.getPlayer().getLevel();
          reborns = cm.getPlayer().getReborns();
          talks = "#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n";
          texts += talks + "#k����  #rMapleWing����#k  ��ð�ռң� #r " + vipname + " #k\r\n���Ƿ��Ѿ����������������ô���Ƿ������������£��������ʱ����Ե�����һ�п��Դ�ͷ�������������Maplewing����������С��Ը�����Ƽ������ #e#r��������#n#b\r\n���Ƿ�ܼ����أ�\r\n";


          texts += "#d�ҿ��Խ������͵�#e#r<ʱ��Ů��>����#n#d�����ڵ����! ������ʹ�� #rʱ������� #d���������� #r��������#d !��������ӵ�и�ǿ�������!\r\n";


          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#dĿǰ������޾���Ϊ��  #e#r" + reborns + "#n  ����\r\n#b����������ʲô��?\r\n#e#bע�⣺��һ��������Ҫ200�����ϣ�Ŀǰ���ĵȼ�Ϊ��#r" + lvs + " \r\n\r\n#L1##rѰ��<ʱ��Ů��>���Ƚ���ʱ������������������޾���#l\r\n";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:

                 if (lvs => 200) {
                      cm.warp(931050431);
                      cm.sendOk("#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n#d���Ѿ������͵���  #e#r<ʱ��Ů��>����#n#d  ���ڵĵط���������ǰ�������������");
            
                      cm.dispose();
                     // cm.openNpc(2144000, 101);
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



