(function () {
      const url = "https://swag-bag-backend.herokuapp.com/api/products";
      // Modal Popover component
      var modaBoxPopover = document.createElement("div");
      modaBoxPopover.className = "modaBoxPopover";
      document.querySelector(".gb_qa.gb_0d.gb_Wa.gb_Ic").prepend(modaBoxPopover);

      // Click Me Button
      var clickMeButton = document.createElement("input");
      clickMeButton.className = "clickme";
      clickMeButton.value = "Click Me"
      clickMeButton.type = "button"
      clickMeButton.id = "clickme"
      clickMeButton.onclick = function(){
        clickMeButton.style.display = "block";
      };
      document.querySelector(".gb_9d.gb_i.gb_og.gb_fg").prepend(clickMeButton);

      // Initialize modal on Click
      var clickMeButton = document.createElement("div");
      clickMeButton.className = "modal";
      document.querySelector(".modaBoxPopover").prepend(clickMeButton);

      // Model Content
      var modelContent = document.createElement("div");
      modelContent.className = "modal-content";
      document.querySelector(".modal").prepend(modelContent);

      function loadAPIData() {
        // fetch data from backend API /api/products
        fetch(url)
        .then(response => response.json())
        .then(data => {

          //iterate to API response
          data.map (function(item){
            var row = document.createElement("div");
            row.className="divrow"
            row.innerHTML = innerHTMLOfRow(
              item.product_image,
              item.product_name,
              item.product_description,
              item.product_price);
            document.querySelector(".modal-content").appendChild(row)
          })

          var modalButton = document.createElement("input");
          modalButton.className = "divbutton"
          modalButton.value="Close"
          modalButton.onclick=function(){
            clickMeButton.style.display = "none";
          };

          document.querySelector(".modal-content").appendChild(modalButton)
        });
      }

      loadAPIData();

      function innerHTMLOfRow (
        product_image,
        product_name,
        product_description,
        product_price
      ) {
        return `
                <div class="productImage">
                  <img src="${product_image}" alt="${product_name}" height="178">
                </div> 
                <div class="productInfo">
                  <span class="productTitle">${product_name}</span>
                  <div class="productDesc">${product_description}</div>
                  <span class="productPrice">${product_price}</span>
                  <button class="cartButton">ADD TO CART</button>
                </div>
                <br>
                `;
      }

    // Click anywhere on window to close modal
    window.onclick = function(event) {
      if (event.target == clickMeButton) {
        clickMeButton.style.display = "none";
      }
    }

  })();
