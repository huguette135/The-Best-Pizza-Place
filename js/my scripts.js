$(document).ready(function(){
    $('body').on('click','#add-order',function(){
        $('#another-order').append(
            // '<form class="form-group'+
                   '<div class="form-group">'+
                       ' <label>Choose the size</label>'+
                       ' <select id="size" class="form-control mb-4">'+
                            '<option id="small" value="1500" name="small"><span class="size" >Small</span> - <span>1500</span></option>'+
                            '<option id="medium" value="2000"><span class="size" >Medium</span> - <span>2000</span></option>'+
                            '<option id="large" value="3000"><span class="size" >Large</span> - <span>3000</span></option>'+
                        '</select>'+
                    '</div>'+
                   ' <div class="form-group mb-4">'+
                        '<label>Choose the crust</label>'+
                        '<div class="custom-control custom-radio"><input id="crispy" class="custom-control-input" type="radio" name="crust" value="1000" required><label class="custom-control-label" for="crispy">Crispy - 1000 rwf</label></div>'+
                        '<div class="custom-control custom-radio"><input id="stuffed" class="custom-control-input"type="radio" name="crust" value="1500"><label class="custom-control-label" for="stuffed">Stuffed - 1500 rwf</label></div>'+
                        '<div class="custom-control custom-radio"><input id="glutten-free" class="custom-control-input" type="radio" name="crust" value="1500"><label class="custom-control-label" for="glutten-free">Glutten-free - 1500 rwf</label>'+
                    '</div><br>'+
                   ' <div class="form-group mb-4">'+
                        '<div id="small-toppings">'+
                            '<label>Please do choose the toppings for your small pizza</label><br>'+
                            "<div class='custom-control custom-checkbox'>"+
                            '<input class="custom-control-input" id="salad" type="checkbox" name="topping" value="500" ><label class="custom-control-label" for="salad">Salad - 500 rwf</label></div>'+
                            "<div class='custom-control custom-checkbox'>"+
                            '<input class="custom-control-input" id="sauce" type="checkbox" name="topping" value="800"><label class="custom-control-label" for="sauce">Sauce - 800 rwf</label></div>'+
                        '</div>'+
                        '<div id="medium-toppings">'+
                            '<label>Please do choose the toppings for your medium pizza</label><br>'+
                            '<div class="custom-control custom-checkbox"><input class="custom-control-input" id="salad" type="checkbox" name="topping" value="700" ><label class="custom-control-label" for="salad">Salad - 700 rwf</label></div>'+
                            '<div class="custom-control custom-checkbox"><input class="custom-control-input" id="sauce" type="checkbox" name="topping" value="1200"><label class="custom-control-label" for="sauce">Sauce - 1200 rwf</label></div>'+
                        '</div>'+
                        '<div id="large-toppings">'+
                               '<label>Please do choose the toppings for your large pizza</label><br>'+
                                '<div class="custom-control custom-checkbox"><input class="custom-control-input" id="salad" type="checkbox" name="topping" value="1000" ><label class="custom-control-label" for="salad">Salad - 1000 rwf</label></div>'+
                                '<div class="custom-control custom-checkbox"><input class="custom-control-input" id="salad" type="checkbox" name="topping" value="500" ><label class="custom-control-label" for="salad">Salad - 500 rwf</label></div>'+
                                '<div class="custom-control custom-checkbox"><input class="custom-control-input" id="sauce" type="checkbox" name="topping" value="1500"><label class="custom-control-label" for="sauce">Sauce - 1500 rwf</label></div>'+
                        '</div>'+
                    '</div><br>'+
                    '<button class="btn btn-outline-success" type="submit" id="submit">Comfirm your order</button><br>'+
                    '<div id="output"></div><br><br>'
                // '</form>'+    
                    );
    })
    $('#new-orders').on('change','#size',function(){
        if($('#size').val()=='1500'){
            $('#small-toppings').show();
            $('#medium-toppings').hide();
            $('#large-toppings').hide();
       }
       else if($('#size').val()=='2000'){
        $('#small-toppings').hide();   
        $('#medium-toppings').show();
        $('#large-toppings').hide();
       }
       else if($('#size').val()=='3000'){
        $('#small-toppings').hide();
        $('#medium-toppings').hide();   
        $('#large-toppings').show();
       }
    });
    $('#new-orders').on('click','#submit',function(event){
        event.preventDefault();
        var grandTotal=[];
        let sizePrice=parseInt($('#size').val());
        let crustPrice=parseInt($('input:radio[name=crust]:checked').val());
        let toppingPrices=$('input:checkbox[name="topping"]:checked').map(function(){
            return $(this).val();
        }).get();
        var totalTopping=0;
        toppingPrices.forEach(function(toppingPrice){
            totalTopping += parseInt(toppingPrice);
        });
        if (totalTopping==0){
            alert("Please do select the topping(s) you prefer");
        }
        else{
            var newOrder = new Order(sizePrice,crustPrice,totalTopping)
        $('div#output').last().text('Total price for your order: ' + newOrder.totalPrice());
        }
    });
})