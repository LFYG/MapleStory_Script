var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

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



          texts += talks + "#k#rMapleWing����#k ��ð�ռң� #r " + vipname + " #k  ���Ƿ��Ѿ����������������ô���Ƿ������������£��������ʱ����Ե�����һ�п��Դ�ͷ������������� #rMaplewing#k ����������С��Ը�����Ƽ������ #e#r��������#n#d! ���Ƿ�ܼ����أ�\r\n";


          texts += "#d�ҿ��Խ������͵�#e#r<ʱ��Ů��>����#n#d���ڵ����! ������ʹ��#rʱ�������#d���������� #r��������#d !����ӵ�и�ǿ���������#rͬʱ����������ѡ���µ�ְҵ���ͣ���������ѡ���ӰŶ��\r\n";


          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#dĿǰ�������޾���Ϊ��  #e#r" + reborns + "#n  #d����    �ȼ�:  #e#r" + lvs + "\r\n#d#eע�⣺��һ��������Ҫ�ﵽ200�����ϣ�#n\r\n#L1##rѰ��  <ʱ��Ů��>����  �����������޾���#l\r\n";

          cm.sendSimple(texts);
          
     } else if (status == 1) {
         switch (selection) {
               case 1:

if (lvs >= 200) {
                      cm.warp(931050431);
                      cm.sendOk("#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n#d���Ѿ������͵���  #e#r<ʱ��Ů��>����#n#d  ���ڵĵط���������ǰ�������������");
                      } else {
                      cm.sendOk("#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n#d����Ϊ�ﵽ200�����޷����з������ޣ�\r\n��Ŀǰ�ĵȼ�Ϊ  #e#r" + lvs + " #n#g\r\n\r\n�������޵�һ�أ�\r\n#r�����ʼ��Ϊ1�� \r\n�����Գ�ʼ��Ϊ150 ���ڶ����Գ�ʼ��Ϊ100 ��\r\n\r\n#b���Ͱɣ�  #e#r<ʱ��Ů��>����#n#b  �ڵ�����ȥѰ����������");
            
                   }
            cm.dispose();

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



