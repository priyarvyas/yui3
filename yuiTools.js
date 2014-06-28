YUI().use('node', 'event', function (Y) {
   var img = Y.one('#img'),
       input = Y.one('#input');      
    
    Y.Node.create('<p></p>').appendTo('body').set('text', 'hello world!');
    
    Y.one('.btn-set').on('click', function(e) {
        var value = input.get('value'),
            width = img.get('offsetWidth');
        if (value == '') {
            input.set('value', width);
        } else if (!isNaN(parseInt(value))) { // if the value in the input is a number
            img.set('offsetWidth', value);           
        }
    });
    
    var list2 = Y.one('#demo2');

    var onList1Click = function(e) {
        var item = e.currentTarget;

        if (list2.getStyle('display') === 'none') {
            list2.show();
        }

        list2.append(item.cloneNode(true));

    };

    var onList2Click = function(e) {
        var item = e.currentTarget;

        item.remove(); // sugar for item.get('parentNode').removeChild(item);

        if (list2.all('li').size() < 1) { // hide the list if its empty
            list2.hide();
        }
        
    };

    Y.one('#demo').delegate('click', onList1Click, 'li');
    Y.one('#demo2').delegate('click', onList2Click, 'li');
});