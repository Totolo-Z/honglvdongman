/**
 * Created by zj on 2017/9/2.
 */
$(function(){
    $.ajax({
        url:'http://127.0.0.1:9091/api/getlunbo',
        datatype:'json',
        success:function(data){
            //console.log(data);
            $('#swiper-container .swiper-wrapper').html(template('slideTemplate',data));
            var mySwiper=new Swiper('#swiper-container',{
                pagination: '.swiper-pagination',
                autoplay:1000,
                loop:true,
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                autoplayDisableOnInteraction: false
            })
        }
    })


//tab��
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/1',
        datatype:'json',
        success:function(data){
            //console.log(data);
            $('.tab-content').html(template('tabTemplate',data));
        }
    })
    var  lis=$('.nav-tabs').find('li');
    for(var i=0;i<lis.length;i++){
        $(lis[i]).on('click',function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $.ajax({
                url:'http://127.0.0.1:9091/api/gethometab/'+$(this).attr('type'),
                success:function(data){
                    $('.tab-content').html(template('tabTemplate',data));
                }
            })
        })
    }


    //更多
    $('.category').on('click',function(){
        $('.marks').fadeIn(500);
        $('#more').fadeIn(500);
    })
    $('.marks').on('click',function(){
        $('.marks').fadeOut(500);
        $('#more').fadeOut(500);
    })








})