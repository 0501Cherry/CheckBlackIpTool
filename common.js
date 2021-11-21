function Common (){}
/**
 * 發送要求
 * @param {string} url 要求網址
 * @param {object} param 參數
 * @param {func} callBack 回調函數
 * @param {func} errorCallBack 回調函數(錯誤時使用)
 */
 Common.SendRequest = function(url, callBack, errorCallBack){
    $.ajax({
        url: url,
        type: 'GET',
        //data: param,
        dataType: 'JSON',
        async: true,
        cache: false,
        success: function(resp){
            callBack && callBack(resp);
        },
        error: function(resp, exception){
            errorCallBack && errorCallBack(resp, exception);
        }
    })
}
