importPackage(net.sf.odinms.tools);

function enter(pi) {
    if (pi.getPlayer().getMap().getMonsterById(9300216) != null) {
        pi.getPlayer().enteredScript("dojang_Msg", pi.getPlayer().getMap().getId());
        pi.warp(925020001, 0);
    } else {
        pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "�乫�����������ض�û��ͨ�����ѵ�����������һ�������Ǿ��Բ�����ġ�"));
        return false;
    }
    return true;
}  