/**
 * 小程序配置文件
 */

var host = "https://info.orenda.com.cn"

var config = {

    // 下面的地址配合云端 Server 工作
    host: host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/wx/mini/app?act=login_check`,
    // project项目列表
    projectUrl: `${host}/wx/mini/app?act=get_project_list`,
    // bug列表
    bugUrl: `${host}/wx/mini/app?act=get_bug_list`,
    // bugDetail 详情
    bugDetailUrl: `${host}/wx/mini/app?act=get_bug_details`,
    // manage 任务追踪
    manageUrl: `${host}/wx/mini/app?act=get_user_login_case`,
    // weekDemand 本周需求
    weekDemandUrl: `${host}/wx/mini/app?act=get_pending_requirements`,
    // weekDemandDetai 本周需求详情
    weekDemandDetailUrl: `${host}/wx/mini/app?act=get_requirement_details`,
    // taskList 总的任务列表
    taskListsUrl: `${host}/wx/mini/app?act=get_task_list`,
    // taskListDetail 总的任务列表的任务详情
    taskListsDetailUrl: `${host}/wx/mini/app?act=get_task_details`,
    // taskListEditHistory 任务汇报编辑记录
    taskListEditHistoryUrl: `${host}/wx/mini/app?act=get_task_update_details`,
    // myTaskList 我的任务列表
    myTaskListUrl: `${host}/wx/mini/app?act=get_my_task`,
    // myTaskReport 我的任务我要汇报
    myTaskReportUrl: `${host}/wx/mini/app?act=get_report_status`,
    // myTaskReportSave 我的任务汇报保存
    myTaskReportSaveUrl: `${host}/wx/mini/app?act=save_report_plan`,
    // myTaskCanAudit 我发起的可审任务
    myTaskCanAuditUrl: `${host}/wx/mini/app?act=get_task_report`,
    // myTaskAuditDetail 我发起的可审任务详情
    myTaskAuditDetailUrl: `${host}/wx/mini/app?act=get_report_details`,
    // myTaskAuditPass 我发起的可审任务点击审核
    myTaskAuditPassUrl: `${host}/wx/mini/app?act=audit_pass_report`

};

module.exports = config