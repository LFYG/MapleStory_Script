/* 
 * 2432646 - ���ް�����(7��Ȩ) - ˫���������7����ʹ����˼���[���ް�����]�� 
 */
var period = 90;
var mountSkillId = 80001532;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}