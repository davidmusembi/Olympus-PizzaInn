//function for the order menu input
function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
  }
  
  function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
  }
  function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
  }
  function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
  }
  
  function sausages() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 140;
    }
    return parseInt(sausage);
  }
  function onions() {
    var onion = 0;
    var addonions = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        onion = 130;
    }
    return parseInt(onion);
  }
  function tikkaSaucee() {
    var tikkaSauce = 0;
    var addtikkaSauce = document.getElementById("toppingone");
    if (addtikkaSauce.checked === true) {
        tikkaSauce = 120;
    }
    return parseInt(tikkaSauce);
  }
  function mozarellaCheese() {
    var cheese = 0;
    var addmozarellaCheese = document.getElementById("toppingone");
    if (addmozarellaCheese.checked === true) {
        cheese = 110;
    }
    return parseInt(cheese);
  }
  
  function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )
  
    
  }
  //Creating a function to validate the submit button on contact page
var contactForm = $("#contact-form");

contactForm.on("submit", function(e) {
 e.preventDefault();
 let formValid = validateContactForm();
 if (formValid) {
     const name = $("input.name").val();

     alert(`Thank you ${name}, we have received your message. Thank you for reaching out to us.`);
     clearForm();
 }
});
function validateContactForm() {
    let isFormValid = true;
    const formInputs = contactForm.find("input,textarea");

    formInputs.each(function() {
        if (!$(this).val()) {
            $(this).addClass("is-invalid");
            isFormValid = false;
        }
    });
    return isFormValid;
}

function removeFormErrors() {
    contactForm.find("input,textarea").on("keydown", function() {
        if ($(this).hasClass("is-invalid")) {
            $(this).removeClass("is-invalid");
        }
    });
}

function clearForm() {
    contactForm.find("input,textarea").each(function() {
        $(this).val("");
    });
  }

  removeFormErrors();
$(document).ready(function(){
     //Creating a jquery effect  to open the hover effect on the Service page
     $(".design").click(function() {
        $("#design, .design").toggle("slow");
      });
      $("#design").click(function() {
        $(".design, #design").toggle("slow");
      });
      $(".development").click(function() {
        $("#development, .development").toggle("slow");
      });
      $("#development").click(function() {
        $(".development, #development").toggle("slow");
      });
      $(".product-mgt").click(function() {
        $("#product-mgt, .product-mgt").toggle("slow");
      });
      $("#product-mgt").click(function() {
        $(".product-mgt, #product-mgt").toggle("slow");
      }); 
