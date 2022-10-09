// let box = document.querySelector('.zoom-box-small');
// let boximg = document.querySelector('.zoom-box-small>img');
// let layer = document.querySelector('.layer');
// let box2 = document.querySelector('.zoom-box-detail');
// let img = document.querySelector('.zoom-box-detail>img');
// console.log(img);

// // 设置产品图的父亲元素的宽度
// let boxWidth = boximg.offsetWidth;
// let boxHeight = boximg.offsetHeight;

// // 因为输出的是字符串的形式所以要转换成数值得形式
// box.style.width = Number(boxWidth) + 1 + 'px';

// // 给box添加鼠标事件
// box.addEventListener('mouseover', function() {
//     layer.style.display = 'block';
//     box2.style.display = 'block';
// });
// box.addEventListener('mouseout', function() {
//     layer.style.display = 'none';
//     box2.style.display = 'none';
// });

// // 添加鼠标移动时遮罩层跟随的样式
// box.addEventListener('mousemove', function(e) {

//     // 获取遮罩层当前的位置
//     let layerwidth = layer.offsetWidth;
//     let layerHeight = layer.offsetHeight;

//     let nowLeft = -((e.clientX - 50) / boxWidth * (img.offsetWidth - box2.offsetWidth));
//     // 根据鼠标的位置移动大图的位置
//     let nowTop = -((e.clientY - 50) / boxHeight * (img.offsetHeight - box2.offsetHeight));
//     img.style.top = nowTop + 'px';
//     img.style.left = nowLeft + 'px';
//     console.log(e.clientX, boxWidth);
//     layer.style.left = (e.clientX - 50) - 75 + 'px';
//     layer.style.top = (e.clientY - 50) - 75 + 'px';
//     console.log(e.clientX);

//     // 根据鼠标移动的时候遮罩层也跟着移动
//     // 当鼠标在最左侧的时
//     if (parseInt(layer.style.left) <= 0) {
//         layer.style.left = 0 + 'px';
//     }
//     // 当遮罩层在最上面的时候
//     if (parseInt(layer.style.top) <= 0) {
//         layer.style.top = 0 + 'px';
//     }
//     // 当遮罩层在最右边的时候
//     if (parseInt(layer.style.left) >= (boxWidth - layerwidth)) {
//         layer.style.left = boxWidth - layerwidth + 'px';
//     }
//     if (parseInt(layer.style.top) >= (boxHeight - layerHeight)) {
//         layer.style.top = boxHeight - layerHeight + 'px';
//     }
// })

~ function() {
    if ($ === 'undefind') {
        throw new Error('当前jq没有传递进来')
    }

    function bigLens() {
        // 获取this以及其中所需要的元素
        let $this = $(this),
            $zoom_box_small = $this.find('.zoom-box-small'),
            $layer = $zoom_box_small.find('.layer'),
            $smallImg = $zoom_box_small.find('img'),
            $zoom_box_derail = $this.find('.zoom-box-detail'),
            $bigImg = $zoom_box_derail.find('img');
        // console.log($zoom_box_small);
        // 根据鼠标的移入可以看到大图以及遮罩层
        $zoom_box_small.on('mouseenter', function() {
                $layer.css('display', 'block');
                $zoom_box_derail.css('display', 'block');
            })
            // 根据鼠标的移除看不到大图以及遮罩层
        $zoom_box_small.on('mouseleave', function() {
            $layer.css('display', 'none');
            $zoom_box_derail.css('display', 'none');
        })
        $zoom_box_small.on('mousemove', function(e) {
            let newL = -((e.clientX - 50) / $smallImg.width() * ($bigImg.width() - $zoom_box_small.width()));
            let newT = -((e.clientY - 50) / $smallImg.height() * ($bigImg.height() - $zoom_box_small.height()));
            $bigImg.css('left', newL + 'px')
            $bigImg.css('top', newT + 'px')

            $layer.css('left', (e.clientX - 50) - 75 + 'px');
            $layer.css('top', (e.clientY - 50) - 75 + 'px');

            // console.log(parseInt($layer.css('left')));
            console.log($smallImg.width() - $layer.width());
            if (parseInt($layer.css('left')) <= 0) {
                console.log(1);
                $layer.css('left', 0 + 'px');
            }
            if (parseInt($layer.css('top')) <= 0) {
                console.log(1);
                $layer.css('top', 0 + 'px');
            }
            if (parseInt($layer.css('top')) >= ($smallImg.height() - $layer.height())) {
                $layer.css('top', $smallImg.height() - $layer.height() + 'px');
            }
            if (parseInt($layer.css('left')) >= ($smallImg.width() - $layer.width())) {
                $layer.css('left', $smallImg.width() - $layer.width() + 'px');
            }
        })

    }
    $.fn.extend({
        bigLens: bigLens
    })
}(jQuery);