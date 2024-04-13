function add_item(data){
    var add_price= (document.getElementById("price_change"))
    var current_amount= parseFloat(add_price.innerText)
    const item_name= data.childNodes[5].childNodes[1]

    var get_item_list= document.getElementById("items_purchase")

    const ul= document.createElement("ul")
    var last_child= get_item_list.lastChild.innerText
    if (last_child== undefined){
        ul.innerText= "1. "+item_name.innerText
    }
    else{
        sum= ""
        for (i of last_child){
            if (i== ".") break
            sum+= i
        }
        ul.innerText= (parseInt(sum)+1).toString()+". "+item_name.innerText
    }
    get_item_list.appendChild(ul)
    
    current_amount+= parseFloat(data.childNodes[5].childNodes[3].innerText)
    add_price.innerText= current_amount
    var get_disc= document.getElementById("disc").innerText
    if (get_disc!= "00.00"){
        calculate()
    }
}

function coupon_generator(){
    const input= document.getElementById("get_pass")
    var pass= input.value
    var get_disc= document.getElementById("disc")
    if (pass!="SELL200"){
        alert("Please enter correct coupon code.")
    }
    else if (get_disc.innerText!= "00.00"){
        alert("Coupon code is already activated.")
    }
    else if (parseFloat(document.getElementById("price_change").innerText)<200){
        alert("Please purchase at least 200TK worth items.")
    }
    else{
        calculate()
    }
}

function calculate(){
    var total_amount= parseFloat(document.getElementById("price_change").innerText)
    var get_disc= document.getElementById("disc")
    var total_discount= total_amount*0.2
    get_disc.innerText= total_discount.toString()

    var last_calc= total_amount-total_discount
    var last_calc_dec= last_calc.toFixed(2)
    var set_amount= document.getElementById("last_amount")
    set_amount.innerText= last_calc_dec.toString()
}

function modal_gen(){
    document.getElementById("price_change").innerText= "00.00"
    document.getElementById("disc").innerText= "00.00"
    document.getElementById("last_amount").innerText= "00.00"
}