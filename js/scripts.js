//businees logic

function Order(size,crust,topping){
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaTopping = topping;
}
Order.prototype.totalPrice=function(){
    return this.pizzaSize + this.pizzaCrust + this.pizzaTopping ;
}
var sum=0;
Order.prototype.ordersPrice=function(){
    sum +=this.totalPrice();
    return sum;
}
$(document).ready(function(){
    $('#new-orders').on('click','#add-order',function(){
        $('#new-orders').append(
       '<form>' +
        '<div class="form-group mb-4">' +
            '<label>Choose the size</label>' +
            '<select id="size" class="form-control">' +
                '<option id="small" value="1500" name="small"><span class="size" >Small</span> - <span>1500</span></option>' +
                '<option id="medium" value="2000"><span class="size" >Medium</span> - <span>2000</span></option>' +
                '<option id="large" value="3000"><span class="size" >Large</span> - <span>3000</span></option>' +
            '</select>' +
        '</div>'+
        '<div class="form-group mb-4">' +
            '<label>Choose the crust</label>' +
            '<div class="custom-control custom-radio"><input id="crispy"class="custom-control-input" type="radio" name="crust" value="1000" required><label class="custom-control-label" for="crispy">Crispy - 1000</label></div>' +
            '<div class="custom-control custom-radio"><input id="stuffed" class="custom-control-input" type="radio" name="crust" value="1500"><label for="stuffed" class="custom-control-label">Stuffed - 1500 rwf</label></div>' +
            '<div class="custom-control custom-radio"><input id="glutten-free" class="custom-control-input" type="radio" name="crust" value="1500"><label for="glutten-free" class="custom-control-label">Glutten-free - 1500</label></button>' +
        '</div>' +
        '<div class="form-group mb-4">' +
            '<div id="small-toppings" class="form-group">' +
                '<label>Please do choose the toppings for your small pizza</label><br>' +
                '<div class="custom-control custom-checkbox"><input id="salad" class="custom-control-input" type="checkbox" name="topping" value="500" ><label class="custom-control-label" for="salad">Salads - 1000 rwf</label></div>' +
                '<div class="custom-control custom-checkbox"><input id="sauce" class="custom-control-input" type="checkbox" name="topping" value="800" ><label class="custom-control-label" for="sauce">Sauce - 1500 rwf</label></div>' +
            '</div>' +
            '<div id="medium-toppings" class="form-group mb-4">' +
                '<label>Please do choose the toppings for your medium pizza</label><br>' +
                '<input id="salad" type="checkbox" name="topping" value="700" ><label  for="salad">Salads - 700 rwf</label><br>'+
                '<input id="sauce" type="checkbox" name="topping" value="1200"><label  for="sauce">Sauce - 1200 rwf</label><br>'+
            '</div>' +
            '<div id="large-toppings">' +
                '<label>Please do choose the toppings for your large pizza</label><br>' +
                '<input id="salad" type="checkbox" name="topping" value="1000"><label for="salad">Salads - 1000 rwf</label><br>'+
                '<input id="sauce"  type="checkbox" name="topping" value="1500"><label for="sauce">Sauce - 1500 rwf</label><br>' +
            '</div>' +
        '</div>' +
        '<button class="btn btn-outline-success" type="submit" id="submit">Comfirm your order</button>' +
        '<div id="output"></div>' +
    '</form><br>'+
    '<button class="btn btn-outline-primary" id="add-order">Add another order</button>  '+
    '<button class="btn btn-outline-success" id="checkout" >Checkout</button>'+
    '<div id="cart"></div>'
        )
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