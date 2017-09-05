/**
 * Created by zj on 2017/9/3.
 */
$(function(){
    $.ajax({
        url:'http://127.0.0.1:9091/api/gettopics',
        success:function(data){
            //console.log(data);
            $('.func-content').html(template('func-template',data));
        }
    })
})