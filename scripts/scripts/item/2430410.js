/* 
 * [2430301] - []����ȯ
 */
var period = 7;
var mountSkillId = 80001007;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}