~ function() {
    function ztree(result) {
        let count = 0,
            $this = $(this);


        //=>数据绑定
        let bindHTML = function(result) {
                let str = ``;
                result.forEach(item => {
                            count++;
                            let {
                                name,
                                open,
                                children
                            } = item;
                            str += `<li>
                        <a href="" class="title">${name}</a>
                        ${children?`<em class="icon ${open?'open':''}"></em>
                        <ul class="level level${count}" style="display:${open?'block':'none'}">
                            ${bindHTML(children)}
                        </ul>`:``}
                    </li>`;
                    count--;
            });
            return str;
        };
        //基于事件委托进行实现点击事件
        $this.click(function(e){
            let target = e.target,
                $target = $(target),
                $nextUl = $target.next('ul');
            if(target.tagName === 'EM'){
                //=>加减号的切换
                $target.toggleClass('open');
                // if($target.hasClass('open')){
                //     $target.removeClass('open');
                // }else{
                //     $target.addClass('open');
                // }
                //=>控制子集的显示隐藏
                $nextUl.stop().slideToggle(100);
            }   
    });
        //=>获取数据后完成相关的事项
        $this.html(bindHTML(result));
    }
    $.fn.extend({
        ztree: ztree
    })
}(jQuery)