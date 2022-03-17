let count = 0;
let isRun = true;
function counter() {
  if (isRun) {
    count++;
    $(".randoms").html(count);
  }
}
function checker() {
  isRun ? counter() : $(".randoms").html(count);
}

$(".randoms").is("#random") ? makeMove("#random") : null;

function getNewCoordination() {
  let h = 500;
  let w = 500;
  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);
  return [nh, nw];
}
function makeMove(id) {
  let newq = getNewCoordination();
  $(id).animate({ top: newq[0], left: newq[1] }, 1000, function () {
    makeMove(id);
  });
  checker();
}

$(".randoms").mousedown(function (event) {
  if (event.which === 1) {
    $(".randoms").removeAttr("id");
    $(".randoms").empty();
    isRun = false;
  }
});

$(".randoms").mousedown((event) => {
  if (event.which === 3) {
    $(".randoms").attr("id", "random");
    makeMove("#random");
    isRun = true;
  }
});
