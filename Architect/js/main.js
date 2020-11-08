$(".btn").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});

$(".dash-btn").click(function () {
  $("nav .main ul .dash-show").toggleClass("show");
  $("nav .main ul .first").toggleClass("rotate");
});

$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

var chart = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(chart, {
  type: "line",
  data: {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        // label: "# of Votes",
        // data: [12, 19, 3, 5, 2, 3],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        // ],
      },
    ],
  },
});

var chart = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(chart, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  },
});

var chart = document.getElementById("myChart3").getContext("2d");
var myChart = new Chart(chart, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  },
});
