

      var navigation = responsiveNav("#nav", {
        init: function () {
          console.log("Responsive Nav Inited!");
        },
        open: function () {
          console.log("Opening…");
        },
        close: function () {
          console.log("Closing…");
        }
      });
