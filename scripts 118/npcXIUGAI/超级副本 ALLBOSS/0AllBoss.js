var mob1 = 8500001;//����
var mob2 = 8840000;//ʨ����
var mob3 = 8800100;//��������
var mob4 = 8810118;//���׺���
var mob5 = 9300304;//��������
var mob6 = 8820003;//����������
var mob7 = 8820004;//��������˹
var mob8 = 8820005;//��ӥ����
var mob9 = 8820006;//��ӥ����
var mob10 = 8820002;//Ů�����
var mob11 = 8820000;//ʱ��ĳ����Ʒ����
var mob12 = 8850000;//�׹���
var mob13 = 8850001;//����
var mob14 = 8850002;//������
var mob15 = 8850003;//��������
var mob16 = 8850004;//����
var mob17 = 8850010;//����
var mob18 = 8850012;//ϣ��˹


var mobs;
var mobs1;
var mobs2;
var mobs3;
var mobs4;
var mobs5;
var mobs6;


function init() {
    em.setProperty("leader", "true");
    em.setProperty("state", "0");
}

function setup(eim, leaderid) {
    em.setProperty("leader", "true");
    var eim = em.newInstance("0AllBoss");
    var map = eim.setInstanceMap(703200400);//����ִ�е�ͼ
    map.resetFully();

    var mob1s = em.getMonster(mob1);//��һ������ 8500001  8850000
    eim.registerMonster(mob1s);
    map.spawnMonsterOnGroundBelow(mob1s, new java.awt.Point(10, - 42));

    em.setProperty("state", "1");

    eim.startEventTimer(3600000); // 1 hr  ʱ��
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(703200400);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 270050000);//�����뿪��
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function changedMap(eim, player, mapid) {
    if (mapid != 703200400) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    var map = eim.getMapFactory().getMap(703200400);


    if (mobId == mob1) {
        mobs = em.getMonster(mob2);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));
      

/*
    } else if (mobId == mob2) {
        mobs = em.getMonster(mob3);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob3) {
        mobs = em.getMonster(mob4);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

*/

    } else if (mobId == mob2) {
        mobs = em.getMonster(mob5);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob5) {
        mobs = em.getMonster(mob6);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(-648, - 42));

    } else if (mobId == mob6) {
        mobs = em.getMonster(mob7);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(648, - 42));

    } else if (mobId == mob7) {
        mobs = em.getMonster(mob8);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(-300, - 42));

    } else if (mobId == mob8) {
        mobs = em.getMonster(mob9);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(300, - 42));

    } else if (mobId == mob9) {
        mobs = em.getMonster(mob10);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 450));

    } else if (mobId == mob10) {
        mobs = em.getMonster(mob11);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

        mobs1 = em.getMonster(mob10);
        eim.registerMonster(mobs1);
        map.spawnMonsterOnGroundBelow(mobs1, new java.awt.Point(5, - 450));


        mobs2 = em.getMonster(mob9);
        eim.registerMonster(mobs2);
        map.spawnMonsterOnGroundBelow(mobs2, new java.awt.Point(300, - 42));

        mobs3 = em.getMonster(mob8);
        eim.registerMonster(mobs3);
        map.spawnMonsterOnGroundBelow(mobs3, new java.awt.Point(-300, - 42));

        mobs4 = em.getMonster(mob7);
        eim.registerMonster(mobs4);
        map.spawnMonsterOnGroundBelow(mobs4, new java.awt.Point(648, - 42));

        mobs5 = em.getMonster(mob6);
        eim.registerMonster(mobs5);
        map.spawnMonsterOnGroundBelow(mobs5, new java.awt.Point(-648, - 42));


    } else if (mobId == mob11) {
        mobs = em.getMonster(mob12);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob12) {
        mobs = em.getMonster(mob13);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob13) {
        mobs = em.getMonster(mob14);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(5, - 450));

    } else if (mobId == mob14) {
        mobs = em.getMonster(mob15);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob15) {
        mobs = em.getMonster(mob16);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob16) {
        mobs = em.getMonster(mob17);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(10, - 42));

    } else if (mobId == mob17) {

        mobs = em.getMonster(mob18);
        eim.registerMonster(mobs);
        map.spawnMonsterOnGroundBelow(mobs, new java.awt.Point(11, - 180));


        mobs1 = em.getMonster(mob17);
        eim.registerMonster(mobs1);
        map.spawnMonsterOnGroundBelow(mobs1, new java.awt.Point(5, - 450));


        mobs2 = em.getMonster(mob12);
        eim.registerMonster(mobs2);
        map.spawnMonsterOnGroundBelow(mobs2, new java.awt.Point(300, - 42));

        mobs3 = em.getMonster(mob13);
        eim.registerMonster(mobs3);
        map.spawnMonsterOnGroundBelow(mobs3, new java.awt.Point(-300, - 42));

        mobs4 = em.getMonster(mob14);
        eim.registerMonster(mobs4);
        map.spawnMonsterOnGroundBelow(mobs4, new java.awt.Point(648, - 42));

        mobs5 = em.getMonster(mob15);
        eim.registerMonster(mobs5);
        map.spawnMonsterOnGroundBelow(mobs5, new java.awt.Point(-648, - 42));

        mobs6 = em.getMonster(mob15);
        eim.registerMonster(mobs6);
        map.spawnMonsterOnGroundBelow(mobs6, new java.awt.Point(10, - 42));


    }






/*
    //ϣ��˹��ʿ�ų�
    if (mobId == 8850000 || mobId == 8850001 || mobId == 8850002 || mobId == 8850003) {
        var mob55 = em.getMonster(mobId + 1);
        eim.registerMonster(mob55);
        map.spawnMonsterOnGroundBelow(mob55, new java.awt.Point( - 363, 100));
    } else if (mobId == 8850004) {
        var mob55 = em.getMonster(8850012);//ϣ��˹
        eim.registerMonster(mob55);
        map.spawnMonsterOnGroundBelow(mob55, new java.awt.Point( - 363, 100));
    }
*/

    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    if (eim.disposeIfPlayerBelow(100, 270050000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}