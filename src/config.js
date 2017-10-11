/**
 * 小程序配置文件
 */

var host = "https://info.orenda.com.cn"

var config = {

    // 下面的地址配合云端 Server 工作
    host: host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/wx/mini/app?act=login_check`,
    projectUrl: `${host}/wx/mini/app?act=get_project_list`,
    bugUrl:`${host}/wx/mini/app?act=get_bug_list`,
    bugDetailUrl: `${host}/wx/mini/app?act=get _bug_details`,
    manageUrl: `${host}/wx/mini/app?act=get_user_login_case`
};

module.exports = config
