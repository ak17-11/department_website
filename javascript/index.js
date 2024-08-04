if (
    document.getElementById("notice-board").className ==
    "col-sm-12 col-md-3 d-none mb-2"
  ) {
    document.getElementById("courses").className = "col-sm-12 col-md-3  mb-3 mb-sm-2";
    document.getElementById("faculty").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
    document.getElementById("contact").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
  }
  if (
    document.getElementById("courses").className ==
    "col-sm-12 col-md-4 d-none"
  ) {
    document.getElementById("faculty").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
    document.getElementById("contact").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
  }
  if (
    document.getElementById("faculty").className ==
    "col-sm-12 col-md-4 d-none"
  ) {
    document.getElementById("courses").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
    document.getElementById("contact").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
  }
  if (
    document.getElementById("contact").className ==
    "col-sm-12 col-md-4 d-none"
  ) {
    document.getElementById("courses").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
    document.getElementById("faculty").className = "col-sm-12 col-md-6 mb-3 mb-sm-2";
  }
