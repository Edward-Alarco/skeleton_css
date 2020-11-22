var propHover = {
    one: document.getElementById('1'),
    two: document.getElementById('2'),
    three: document.getElementById('3'),
    four: document.getElementById('4'),
    five: document.getElementById('5'),
    six: document.getElementById('6'),
}

var metHover = {
    inicio: function(){
        propHover.one.style.transform = 'scale(1)';
        propHover.one.style.transformOrigin = 'center';
        propHover.one.style.transformBox = 'fillbox';
        propHover.one.style.transition = 'all .2s ease-in-out';
        propHover.one.addEventListener('mouseover',function(){
            propHover.one.style.transform = 'scale(0.98)';
        });
        propHover.one.addEventListener('mouseout',function(){
            propHover.one.style.transform = 'scale(1)';
        });

        propHover.two.style.transform = 'scale(1)';
        propHover.two.style.transformOrigin = 'center';
        propHover.two.style.transformBox = 'fillbox';
        propHover.two.style.transition = 'all .2s ease-in-out';
        propHover.two.addEventListener('mouseover',function(){
            propHover.two.style.transform = 'scale(0.98)';
        });
        propHover.two.addEventListener('mouseout',function(){
            propHover.two.style.transform = 'scale(1)';
        });

        propHover.three.style.transform = 'scale(1)';
        propHover.three.style.transformOrigin = 'center';
        propHover.three.style.transformBox = 'fillbox';
        propHover.three.style.transition = 'all .2s ease-in-out';
        propHover.three.addEventListener('mouseover',function(){
            propHover.three.style.transform = 'scale(0.98)';
        });
        propHover.three.addEventListener('mouseout',function(){
            propHover.three.style.transform = 'scale(1)';
        });

        propHover.four.style.transform = 'scale(1)';
        propHover.four.style.transformOrigin = 'center';
        propHover.four.style.transformBox = 'fillbox';
        propHover.four.style.transition = 'all .2s ease-in-out';
        propHover.four.addEventListener('mouseover',function(){
            propHover.four.style.transform = 'scale(0.98)';
        });
        propHover.four.addEventListener('mouseout',function(){
            propHover.four.style.transform = 'scale(1)';
        });

        propHover.five.style.transform = 'scale(1)';
        propHover.five.style.transformOrigin = 'center';
        propHover.five.style.transformBox = 'fillbox';
        propHover.five.style.transition = 'all .2s ease-in-out';
        propHover.five.addEventListener('mouseover',function(){
            propHover.five.style.transform = 'scale(0.98)';
        });
        propHover.five.addEventListener('mouseout',function(){
            propHover.five.style.transform = 'scale(1)';
        });

        propHover.six.style.transform = 'scale(1)';
        propHover.six.style.transformOrigin = 'center';
        propHover.six.style.transformBox = 'fillbox';
        propHover.six.style.transition = 'all .2s ease-in-out';
        propHover.six.addEventListener('mouseover',function(){
            propHover.six.style.transform = 'scale(0.98)';
        });
        propHover.six.addEventListener('mouseout',function(){
            propHover.six.style.transform = 'scale(1)';
        });
    }
}

metHover.inicio();